import ConnectionJSON from "@/db/json";
import UsersCollection from "@/db/usersV1";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  const { token } = req.headers
  if (!token) {
    res.status(400).json({ message: "There is no token in the header" })
    return
  }

  let { collectionToken, collectionInfo } = await UsersCollection()
  let userInfo = await collectionInfo.find(ci => ci.token === token)

  if (userInfo) {
    let newUserInfo = {
      ...userInfo,
      cart: {
        ...userInfo.cart,
        bag: []
      }
    }
    let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id)
    filterCollectionInfo.push(newUserInfo)
    try {
      await ConnectionJSON('usersInfo', filterCollectionInfo)
      res.status(200).json({ message: `All bag has been successfully deleted from your bag`, bag: [] })
    } catch (err) {
      res.status(500).json({ message: "have a problem in database!" })
    }

  } else {
    res.status(404).json({ message: "not found user by this token!" })
  }

}

export default Handler