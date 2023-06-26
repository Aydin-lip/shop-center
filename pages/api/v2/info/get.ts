import UsersCollection from "@/db/usersV2";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }

    let {collectionToken, collectionInfo} = await UsersCollection()

    let getUserToken = await collectionToken.find({ token }).toArray()
    let getUserInfo = await collectionInfo.find({ token }).toArray()
    let userToken = getUserToken[0]
    let userInfo = getUserInfo[0]

    if (userToken && userInfo) {
      let user = {
        ...userInfo,
        profile: {
          ...userInfo.profile,
          email: userToken.email
        }
      }
      res.status(200).json({ message: "Success", user })
    } else {
      res.status(404).json({ message: "not found account!" })
    }

  } else {
    res.status(400).json({ message: "method is false" })
  }
}

export default Handler;