import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV1";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    // Get token from header and check
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }

    let {collectionToken, collectionInfo} = await UsersCollection()

    // Get user information and token by toekn header
    let userToken = collectionToken.find(ct => ct.token === token)
    let userInfo = collectionInfo.find(ci => ci.token === token)

    // Check
    if (userToken && userInfo) {
      // List data
      let user = {
        ...userInfo,
        profile: {
          ...userInfo.profile,
          email: userToken.email
        }
      }
      res.status(200).json({ message: "Success", user }) // Send data
    } else {
      res.status(404).json({ message: "not found account!" })
    }

  } else {
    res.status(400).json({ message: "method is false" })
  }
}

export default Handler;