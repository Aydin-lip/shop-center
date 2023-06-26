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
  let getUserInfo = await collectionInfo.find({ token }).toArray()
  let userInfo = getUserInfo[0]

  if (userInfo) {
    let allBag = userInfo.cart.bag

    if (allBag.find(b => b.id == id)) {
      allBag = allBag.filter(b => b.id != id)

      try {
        await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, bag: allBag } } })
        res.status(200).json({ message: `This ID (${id}) has been successfully deleted from your bag`, bag: allBag })
      } catch (err) {
        res.status(500).json({ message: "have a problem in database!" })
      }

    } else {
      res.status(404).json({ message: "You do not have this ID in your bag" })
    }

  } else {
    res.status(404).json({ message: "not found user by this token!" })
  }

}

export default Handler