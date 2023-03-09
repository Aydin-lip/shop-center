import UsersCollection from "@/db/users";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }

    let {collectionToken, collectionInfo} = await UsersCollection()

    let userToken = await collectionToken.find({ token }).toArray()
    let userInfo = await collectionInfo.find({ token }).toArray()

    if (userToken[0] && userInfo[0]) {
      let user = {
        ...userInfo[0],
        profile: {
          ...userInfo[0].profile,
          email: userToken[0].email
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