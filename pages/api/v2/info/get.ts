import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV2";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    // Get and check token as header
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }

    let {collectionToken, collectionInfo} = await UsersCollection()

    // Get user token and information by token
    let getUserToken = await collectionToken.find({ token }).toArray()
    let getUserInfo = await collectionInfo.find({ token }).toArray()
    // For ease calling
    let userToken = getUserToken[0]
    let userInfo = getUserInfo[0]

    // Checked
    if (userToken && userInfo) {
      // List information
      let user = {
        ...userInfo,
        profile: {
          ...userInfo.profile,
          email: userToken.email
        }
      }
      res.status(200).json({ message: "Success", user }) // Send
    } else {
      res.status(404).json({ message: "not found account!" })
    }

  } else {
    res.status(400).json({ message: "method is false" })
  }
}

export default Handler;