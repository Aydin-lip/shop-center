import { NextApiHandler } from "next";
// Connection json
import ConnectionJSON from "@/db/json";
// User collection token and info
import UsersCollection from "@/db/usersV1";
// Models
import { IAddress } from "@/models/user";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Get data from body and token from header & check
    const { id, title, detail, phone }: { id: number, title: string, detail: string, phone: string } = req.body
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }
    if (!id || !title || !detail || !phone) {
      res.status(400).json({ message: "One of the parameters is wrong!" })
      return
    }

    let { collectionToken, collectionInfo } = await UsersCollection()
    // Get user information by tokn e
    let userInfo = await collectionInfo.find(ci => ci.token === token)

    // Check
    if (userInfo) {
      let allAddress = userInfo.cart.address // All user address
      if (allAddress.find(a => a.id === id)) { // Find address by id
        let address: IAddress = allAddress.filter(a => a.id === id)[0] // Filter address
        // List data
        address.title = title
        address.detail = detail
        address.phone = phone
        allAddress = allAddress.filter(a => a.id !== id)
        allAddress.push(address) // Add address

        let newUserInfo = { // Create new user info with new address list
          ...userInfo,
          cart: {
            ...userInfo.cart,
            address: allAddress
          }
        }
        let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id) // Filter user info by id
        filterCollectionInfo.push(newUserInfo) // Add new user info 
        try {
          await ConnectionJSON("usersInfo", filterCollectionInfo) // Send json
          res.status(200).json({ message: `The address with ID ${id} has been changed successfully`, address: allAddress }) // Send address
        } catch (err) {
          res.status(500).json({ message: "have a problem in database!" })
        }

      } else {
        res.status(404).json({ message: "You do not have this ID in your address" })
      }
    } else {
      res.status(404).json({ message: "not found user by this token!" })
    }

  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler