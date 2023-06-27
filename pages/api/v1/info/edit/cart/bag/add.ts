import { NextApiHandler } from "next";
// Connection json
import ConnectionJSON from "@/db/json";
// User collection info and token
import UsersCollection from "@/db/usersV1";

interface IAddBag {
  product_id: string
  count: {
    color: string
    size: string
  }[]
}
const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Get data from body and token from header & check
    const { product_id, count }: IAddBag = req.body
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }
    if (!product_id || !count) {
      res.status(400).json({ message: "One of the parameters is wrong!" })
      return
    }

    let { collectionToken, collectionInfo } = await UsersCollection()

    // Get user information by token
    let userInfo = await collectionInfo.find(ci => ci.token === token)

    // Check
    if (userInfo) {
      let allBag = userInfo.cart.bag // All user bag
      let newBag = { // Create new bag obj
        id: allBag[allBag.length - 1] ? allBag[allBag.length - 1].id + 1 : 1,
        product_id, 
        count
      }
      allBag.push(newBag) // Add

      let newUserInfo = { // Create new User info
        ...userInfo,
        cart: {
          ...userInfo.cart,
          bag: allBag
        }
      }
      let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id) // Filter user information by id
      filterCollectionInfo.push(newUserInfo) // Add new user info
      try {
        await ConnectionJSON('usersInfo', filterCollectionInfo) // Send json
        res.status(200).json({ message: "Added successfully", bag: allBag }) // Send bag
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

export default Handler