import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV2";
// Models
import { IAddress } from "@/models/user";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Get data from body and token header & check
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
    // Get user information by token
    let getUserInfo = await collectionInfo.find({ token }).toArray()
    // For ease calling
    let userInfo = getUserInfo[0]

    // Check
    if (userInfo) {
      let allAddress = userInfo.cart.address // All user address
      if (allAddress.find(a => a.id === id)) { // Checking the existence of the bag
        let address: IAddress = allAddress.filter(a => a.id === id)[0] // Separate it from the others for editing
        // List data
        address.title = title
        address.detail = detail
        address.phone = phone
        allAddress = allAddress.filter(a => a.id !== id)
        allAddress.push(address)

        try {
          await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, address: allAddress } } }) // Send database
          res.status(200).json({ message: `The address with ID ${id} has been changed successfully`, address: allAddress}) // Send address
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