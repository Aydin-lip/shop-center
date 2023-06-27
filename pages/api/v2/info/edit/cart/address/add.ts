import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV2";

interface IAddAddress {
  title: string
  detail: string
  phone: string
}
const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Get data from body and token in header & check
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
    let getUserInfo = await collectionInfo.find({ token }).toArray()
    // For ease calling
    let userInfo = getUserInfo[0]

    // Check
    if (userInfo) {
      let allAddress = userInfo.cart.address // All user address
      // List data for new address
      let newAddress = {
        id: allAddress[allAddress.length - 1] ? allAddress[allAddress.length - 1].id + 1 : 1, // ID based on list or new
        title,
        detail,
        phone
      }
      allAddress.push(newAddress) // Add
      try {
        await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, address: allAddress } } }) // Send database
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