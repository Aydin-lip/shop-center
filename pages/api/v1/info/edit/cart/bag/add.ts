import ConnectionJSON from "@/db/json";
import UsersCollection from "@/db/usersV1";
import { NextApiHandler } from "next";

interface IAddBag {
  product_id: string
  count: {
    color: string
    size: string
  }[]
}
const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
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
    let userInfo = await collectionInfo.find(ci => ci.token === token)

    if (userInfo) {
      let allBag = userInfo.cart.bag
      let newBag = {
        id: allBag[allBag.length - 1] ? allBag[allBag.length - 1].id + 1 : 1,
        product_id, 
        count
      }
      allBag.push(newBag)

      let newUserInfo = {
        ...userInfo,
        cart: {
          ...userInfo.cart,
          bag: allBag
        }
      }
      let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id)
      filterCollectionInfo.push(newUserInfo)
      try {
        await ConnectionJSON('usersInfo', filterCollectionInfo)
        res.status(200).json({ message: "Added successfully", bag: allBag })
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