import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV2";

const Handler: NextApiHandler = async (req, res) => {
  // Ged id and token from query and header & check
  const { id } = req.query
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
    let allBag = userInfo.cart.bag // All user bag

    if (allBag.find(b => b.id == id)) { // Checking the existence of the bag
      allBag = allBag.filter(b => b.id != id) // Delete from all user bag

      try {
        await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, bag: allBag } } }) // Send database
        res.status(200).json({ message: `This ID (${id}) has been successfully deleted from your bag`, bag: allBag }) // Send bags
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