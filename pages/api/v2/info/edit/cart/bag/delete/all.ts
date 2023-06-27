import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV2";

const Handler: NextApiHandler = async (req, res) => {
  // Get token from header and check has
  const { token } = req.headers
  if (!token) {
    res.status(400).json({ message: "There is no token in the header" })
    return
  }

  let { collectionToken, collectionInfo } = await UsersCollection()
  // Get user information by token
  let getUserInfo = await collectionInfo.find({ token }).toArray()
  // For ease calling
  let userInfo = getUserInfo[0]

  // Check
  if (userInfo) {
    try {
      await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, bag: [] } } }) // Send Database
      res.status(200).json({ message: `All products have been removed from your bag`, bag: [] }) // Send res
    } catch (err) {
      res.status(500).json({ message: "have a problem in database!" })
    }

  } else {
    res.status(404).json({ message: "not found user by this token!" })
  }

}

export default Handler