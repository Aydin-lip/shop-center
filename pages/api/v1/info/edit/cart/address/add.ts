import { NextApiHandler } from "next";
// Connection json
import ConnectionJSON from "@/db/json";
// User collection token and inf o
import UsersCollection from "@/db/usersV1";

interface IAddAddress {
  title: string
  detail: string
  phone: string
}
const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Get data from body and token header & check
    const { title, detail, phone }: IAddAddress = req.body
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }
    if (!title || !detail || !phone) {
      res.status(400).json({ message: "One of the parameters is wrong!" })
      return
    }

    let { collectionToken, collectionInfo } = await UsersCollection()
    // Get user information by token
    let userInfo = await collectionInfo.find(ci => ci.token === token)

    // Check
    if (userInfo) {
      let allAddress = userInfo.cart.address // All user address

      let newAddress = { // Create new address 
        id: allAddress[allAddress.length - 1] ? allAddress[allAddress.length - 1].id + 1 : 1,
        title,
        detail,
        phone
      }
      allAddress.push(newAddress) // Add to others
      
      let newUserInfo = { // Create new user info with new address list
        ...userInfo,
        cart: {
          ...userInfo.cart,
          address: allAddress
        }
      }
      let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id) // Filter users information by id
      filterCollectionInfo.push(newUserInfo) // Add new user info
      try {
        await ConnectionJSON("usersInfo", filterCollectionInfo) // Send json
        res.status(200).json({ message: "Added successfully", address: allAddress }) // Send address
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