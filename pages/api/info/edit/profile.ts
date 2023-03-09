import UsersCollection from "@/db/users";
import { IProfile } from "@/models/user";
import { NextApiHandler } from "next";
import * as bcrypt from 'bcrypt'

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { fullname, phone, category, style }: IProfile = req.body
    const { password, email }: { password: string, email: string } = req.body
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }
    if (
      fullname && fullname.length <= 1 ||
      phone && phone.length <= 5 ||
      password && password.length < 8 ||
      email && !email.includes("@")
    ) {
      res.status(400).json({ message: "One of the parameters is wrong!" })
      return
    }

    let { collectionToken, collectionInfo } = await UsersCollection()
    let userTokenAll = await collectionToken.find({ token }).toArray()
    let userInfoAll = await collectionInfo.find({ token }).toArray()
    let userToken = userTokenAll[0]
    let userInfo = userInfoAll[0]

    if (userToken && userInfo) {
      let edit = { info: false, token: false }
      let profile = {
        ...userInfo.profile,
        fullname: fullname ? fullname : userInfo.profile.fullname,
        phone: phone ? phone : userInfo.profile.phone,
        category: category ? category : userInfo.profile.category,
        style: style ? style : userInfo.profile.style,
      }
      if (fullname || phone || category || style) {
        try {
          await collectionInfo.updateOne({ token }, { $set: { profile } })
          edit.info = true
        } catch (err) { }
      }

      if (password || email) {
        let hash = password ? await bcrypt.hash(password, 10) : ''
        let newToken = {
          email: email ? email : userToken.email,
          password: password ? hash : userToken.password,
          token
        }
        try {
          await collectionToken.updateOne({ token }, { $set: newToken })
          edit.token = true
        } catch (err) { }
      }

      if (edit.info || edit.token) {
        res.status(200).json({
          message: "The information has been successfully updated", user: {
            ...userInfo,
            profile: {
              ...profile,
              email: email ? email : userToken.email
            }
          }
        })
      } else {
        res.status(400).json({ message: "problem" })
      }

    } else {
      res.status(404).json({ message: "not found account!" })
    }


  } else {
    res.status(400).json({ message: "method is false." })
  }
}

export default Handler;