import { NextApiHandler } from "next";
// Connection json
import ConnectionJSON from "@/db/json";
// User collection token and info
import UsersCollection from "@/db/usersV1";

const Handler: NextApiHandler = async (req, res) => {
  // Get id from query and token from header & check
  const { id } = req.query
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
    let allAddress = userInfo.cart.address // All user address

    if (allAddress.find(a => String(a.id) === id)) { // Find address by id for delete
      allAddress = allAddress.filter(a => String(a.id) !== id) // Filter address from others

      let newUserInfo = { // Create new user info with new address list <deleted>
        ...userInfo,
        cart: {
          ...userInfo.cart,
          address: allAddress
        }
      }
      let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id) // Filter users information
      filterCollectionInfo.push(newUserInfo) // Add new user info
      try {
        await ConnectionJSON("usersInfo", filterCollectionInfo) // Send json
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