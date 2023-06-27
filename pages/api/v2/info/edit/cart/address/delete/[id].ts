import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV2";

const Handler: NextApiHandler = async (req, res) => {
  // Get data from query and token from header & check
  const { id } = req.query
  const { token } = req.headers
  if (!token) {
    res.status(400).json({ message: "There is no token in the header" })
    return
  }

  let { collectionToken, collectionInfo } = await UsersCollection()
  // Get user information by token
  let userInfoAll = await collectionInfo.find({ token }).toArray()
  // For ease calling
  let userInfo = userInfoAll[0]

  // Check
  if (userInfo) {
    let allAddress = userInfo.cart.address // All user address

    if (allAddress.find(b => b.id == id)) { // Find addres by id
      allAddress = allAddress.filter(b => b.id != id) // Filter address & delete 

      try {
        await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, address: allAddress } } }) // Send database
        res.status(200).json({ message: `This ID (${id}) has been successfully deleted from your address`, address: allAddress }) // Send address
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