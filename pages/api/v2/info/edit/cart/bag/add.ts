import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV2";

interface IAddBag {
  product_id: string
  count: {
    color: string
    size: string
  }[]
}
const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Get data from body and token as header & check
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
    let getUserInfo = await collectionInfo.find({ token }).toArray()
    // For ease calling
    let userInfo = getUserInfo[0]

    // Check
    if (userInfo) {
      let allBag = userInfo.cart.bag // All user bag
      // List new bag
      let newBag = {
        id: allBag[allBag.length - 1] ? allBag[allBag.length - 1].id + 1 : 1,
        product_id,
        count
      }
      allBag.push(newBag) // Added
      try {
        await collectionInfo.updateOne({ token }, { $set: { cart: { ...userInfo.cart, bag: allBag } } }) // Send database
        res.status(200).json({ message: "Added successfully", bag: allBag }) // Send bages
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