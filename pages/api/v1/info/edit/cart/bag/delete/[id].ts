import { NextApiHandler } from "next";
// Conneciton json
import ConnectionJSON from "@/db/json";
// User collection info and token
import UsersCollection from "@/db/usersV1";

const Handler: NextApiHandler = async (req, res) => {
  // Get id from query and token from body & check
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
    let allBag = userInfo.cart.bag // All user bag

    if (allBag.find(a => String(a.id) === id)) { // Find bag
      allBag = allBag.filter(a => String(a.id) != id) // If has filterd

      let newUserInfo = { // Create new user info with no bag with send id
        ...userInfo,
        cart: {
          ...userInfo.cart,
          bag: allBag
        }
      }
      let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id) // Filter user info by id
      filterCollectionInfo.push(newUserInfo) // Add new user info
      try {
        await ConnectionJSON("usersInfo", filterCollectionInfo) // Send json
        res.status(200).json({ message: `This ID (${id}) has been successfully deleted from your bag`, bag: allBag }) // Send bag
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