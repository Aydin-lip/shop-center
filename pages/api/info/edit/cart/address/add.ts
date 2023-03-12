import UsersCollection from "@/db/users";
import { NextApiHandler } from "next";

interface IAddAddress {
  title: string
  detail: string
  phone: string
}
const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
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
    let userInfoAll = await collectionInfo.find({ token }).toArray()
    let userInfo = userInfoAll[0]
    if (userInfo) {
      let allAddress = userInfo.cart.address
      let newAddress = {
        id: allAddress[allAddress.length - 1] ? allAddress[allAddress.length - 1].id + 1 : 1,
        title,
        detail,
        phone
      }
      allAddress.push(newAddress)
      try {
        await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, address: allAddress } } })
        res.status(200).json({ message: "Added successfully", address: allAddress })
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