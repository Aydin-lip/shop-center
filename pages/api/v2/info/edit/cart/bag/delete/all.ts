import UsersCollection from "@/db/usersV2";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  const { token } = req.headers
  if (!token) {
    res.status(400).json({ message: "There is no token in the header" })
    return
  }

  let { collectionToken, collectionInfo } = await UsersCollection()
  let getUserInfo = await collectionInfo.find({ token }).toArray()
  let userInfo = getUserInfo[0]

  if (userInfo) {

    try {
      await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, bag: [] } } })
      res.status(200).json({ message: `All products have been removed from your bag`, bag: [] })
    } catch (err) {
      res.status(500).json({ message: "have a problem in database!" })
    }

  } else {
    res.status(404).json({ message: "not found user by this token!" })
  }

}

export default Handler