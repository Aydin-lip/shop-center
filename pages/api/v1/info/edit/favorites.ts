import { NextApiHandler } from "next";
// connection json
import ConnectionJSON from "@/db/json";
// User collection info and token
import UsersCollection from "@/db/usersV1";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Get data from body and token in header & check
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
    let userInfo = await collectionInfo.find(ci => ci.token === token)

    // Check
    if (userInfo) {
      let favorites: string[] = userInfo.favorites // All user favorites
      if (favorites.find(n => n === product_id)) { // Find by id
        favorites = favorites.filter(n => n !== product_id) // If there is, delete it
      } else {
        favorites.push(product_id) // If not, add it
      }

      let newUserInfo = { // Create new user info with changed
        ...userInfo,
        favorites
      }
      let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id) // Filter information by id
      filterCollectionInfo.push(newUserInfo) // Add new information with change
      try {
        await ConnectionJSON('usersInfo', filterCollectionInfo) // Send json
        res.status(200).json({ message: "Your favorite categories have been successfully changed", favorites }) // Send favorites
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