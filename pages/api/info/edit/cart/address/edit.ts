import ConnectionJSON from "@/db/json";
import UsersCollection from "@/db/users";
import { IAddress } from "@/models/user";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
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
    let userInfo = await collectionInfo.find(ci => ci.token === token)
    if (userInfo) {
      let allAddress = userInfo.cart.address
      if (allAddress.find(a => a.id === id)) {
        let address: IAddress = allAddress.filter(a => a.id === id)[0]
        address.title = title
        address.detail = detail
        address.phone = phone
        allAddress = allAddress.filter(a => a.id !== id)
        allAddress.push(address)

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
          res.status(200).json({ message: `The address with ID ${id} has been changed successfully`, address: allAddress })
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