import { NextApiHandler } from "next";
import * as bcrypt from "bcrypt"
// Users Collection info and token
import UsersCollection from "@/db/usersV2";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Receive and review the information sent
    const { email, password }: { email: string, password: string } = req.body
    if (!email || !password || password.length < 8 || !email.includes("@")) {
      res.status(400).json({ message: "One of the parameters is wrong!" })
      return
    }

    let {collectionToken, collectionInfo} = await UsersCollection()

    //Checking account existence by email
    let getUserToken = await collectionToken.find({ email }).toArray()
    let userToken = getUserToken[0]
    if (userToken) {
      // Check password
      bcrypt.compare(password, userToken?.password, async (err, hash) => {
        if (err) {
          res.status(500).json({ message: "bcrypt have a problem!" })
          return
        }
        if (hash) {
          // Get user information
          let getUserInfo = await collectionInfo.find({ token: userToken?.token }).toArray()
          let userInfo = getUserInfo[0]
          // Send
          res.status(200).json({ message: "Success", user: {...userInfo, profile: {...userInfo.profile, email: userToken?.email}} })

        } else {
          res.status(404).json({ message: "password is false." })
        }
      })
    } else {
      res.status(404).json({ message: "not found account with this email" })
    }

  } else {
    res.status(400).json({ message: "method is false." })
  }
}

export default Handler;