import { NextApiHandler } from "next";
// Connection json
import ConnectionJSON from "@/db/json";
// User collection info and token
import UsersCollection from "@/db/usersV1";

const Handler: NextApiHandler = async (req, res) => {
  // Get token from header and check
  const { token } = req.headers
  if (!token) {
    res.status(400).json({ message: "There is no token in the header" })
    return
  }

  let { collectionToken, collectionInfo } = await UsersCollection()
  // Get user information by token
  let userInfo = await collectionInfo.find(ci => ci.token === token)

  // Check
  if (userInfo) {
    let newUserInfo = { // Create new user information & delete all bag
      ...userInfo,
      cart: {
        ...userInfo.cart,
        bag: []
      }
    }
    let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id) // Filter user information
    filterCollectionInfo.push(newUserInfo) // Add new user info
    try {
      await ConnectionJSON('usersInfo', filterCollectionInfo) // Save json
      res.status(200).json({ message: `All bag has been successfully deleted from your bag`, bag: [] }) // Send bag
    } catch (err) {
      res.status(500).json({ message: "have a problem in database!" })
    }

  } else {
    res.status(404).json({ message: "not found user by this token!" })
  }

}

export default Handler