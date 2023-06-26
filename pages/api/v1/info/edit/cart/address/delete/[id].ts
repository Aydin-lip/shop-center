import ConnectionJSON from "@/db/json";
import UsersCollection from "@/db/usersV1";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  const { id } = req.query
  const { token } = req.headers
  if (!token) {
    res.status(400).json({ message: "There is no token in the header" })
    return
  }

  let { collectionToken, collectionInfo } = await UsersCollection()
  let userInfo = await collectionInfo.find(ci => ci.token === token)

  if (userInfo) {
    let allAddress = userInfo.cart.address
    if (allAddress.find(a => String(a.id) === id)) {
      allAddress = allAddress.filter(a => String(a.id) !== id)

      let newUserInfo = {
        ...userInfo,
        cart: {
          ...userInfo.cart,
          address: allAddress
        }
      }
      let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id)
      filterCollectionInfo.push(newUserInfo)
      try {
        await ConnectionJSON("usersInfo", filterCollectionInfo)
        res.status(200).json({ message: `This ID (${id}) has been successfully deleted from your address`, address: allAddress })
      } catch (err) {
        res.status(500).json({ message: "have a problem in database!" })
      }

    } else {
      res.status(404).json({ message: "You do not have this ID in your address" })
    }

  } else {
    res.status(404).json({ message: "not found user by this token!" })
  }

}

export default Handler