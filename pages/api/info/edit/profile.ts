import UsersCollection from "@/db/users";
import { IProfile } from "@/models/user";
import { NextApiHandler } from "next";
import * as bcrypt from 'bcrypt'
import ConnectionJSON from "@/db/json";

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
    let userToken = collectionToken.find(ct => ct.token === token)
    let userInfo = collectionInfo.find(ci => ci.token === token)

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
        let newUserInfo = {
          ...userInfo,
          profile
        }
        let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id)
        filterCollectionInfo.push(newUserInfo)

        try {
          await ConnectionJSON('usersInfo', filterCollectionInfo)
          edit.info = true
        } catch (err) { }
      }

      if (password || email) {
        let hash = password ? await bcrypt.hash(password, 10) : ''
        let newToken = {
          email: email ? email : userToken.email,
          password: password ? hash : userToken.password,
        }
        let newUserToken = {
          ...userToken,
          ...newToken
        }
        let filterCollectionToken = collectionToken.filter(ct => ct._id !== userToken?._id)
        filterCollectionToken.push(newUserToken)

        try {
          await ConnectionJSON('usersToken', filterCollectionToken)
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