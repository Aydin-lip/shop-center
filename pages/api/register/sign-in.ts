import { NextApiHandler } from "next";
import * as bcrypt from "bcrypt"
import UsersCollection from "@/db/users";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password }: { email: string, password: string } = req.body
    if (!email || !password || password.length < 8 || !email.includes("@")) {
      res.status(400).json({ message: "One of the parameters is wrong!" })
      return
    }
    let {collectionToken, collectionInfo} = await UsersCollection()

    let userToken = collectionToken.find(ct => ct.email === email)

    if (userToken) {
      bcrypt.compare(password, userToken?.password, async (err, hash) => {
        if (err) {
          res.status(500).json({ message: "bcrypt have a problem!" })
          return
        }
        if (hash) {
          let userInfo = await collectionInfo.find(ci => ci.token === userToken?.token)
          res.status(200).json({ message: "Success", user: userInfo })
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