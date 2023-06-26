import UsersCollection from "@/db/usersV2";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  const { id } = req.query
  const { token } = req.headers
  if (!token) {
    res.status(400).json({ message: "There is no token in the header" })
    return
  }

  let { collectionToken, collectionInfo } = await UsersCollection()
  let userInfoAll = await collectionInfo.find({ token }).toArray()
  let userInfo = userInfoAll[0]

  if (userInfo) {
    let allAddress = userInfo.cart.address

    if (allAddress.find(b => b.id == id)) {
      allAddress = allAddress.filter(b => b.id != id)

      try {
        await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, address: allAddress } } })
        res.status(200).json({ message: `This ID (${id}) has been successfully deleted from your address`, address: allAddress })
      } catch (err) {
        res.status(500).json({ message: "have a problem in database!" })
      }

    } else {
      res.status(404).json({ message: "You do not have this ID in your address" })
    }

  } else {
    res.status(404).json({ message: "not found user by this token!" })
  }

}

export default Handler