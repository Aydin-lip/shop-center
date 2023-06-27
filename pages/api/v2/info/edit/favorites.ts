import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV2";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Get data from body and token checked
    const { product_id }: { product_id: string } = req.body
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }
    if (!product_id) {
      res.status(400).json({ message: "There is no product id in the parameter" })
      return
    }

    let { collectionToken, collectionInfo } = await UsersCollection()
    // Get user information by token
    let userInfoAll = await collectionInfo.find({ token }).toArray()
    // For ease calling
    let userInfo = userInfoAll[0]

    // Check
    if (userInfo) {
      let favorites: string[] = userInfo.favorites // All user favorites

      if (favorites.find(n => n === product_id)) { // Find by id
        favorites = favorites.filter(n => n !== product_id) // If there is, delete it
      } else {
        favorites.push(product_id) // If not, add it
      }
      try {
        await collectionInfo.updateOne({ token }, { $set: { favorites } }) // Send database
        res.status(200).json({ message: "Your favorite categories have been successfully changed", favorites }) // Send response
      } catch (err) {
        res.status(500).json({ message: "have a problem in database!" })
      }
    } else {
      res.status(404).json({ message: "not found user by this token!" })
    }

  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler;