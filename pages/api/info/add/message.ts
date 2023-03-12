import UsersCollection from "@/db/users";
import { IMessage } from "@/models/user";
import { NextApiHandler } from "next";


interface IMess {
  token_user: string
  title: string
  message: string
  url?: string
  urlText?: string
}
const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { token_user, title, message, url, urlText }: IMess = req.body
    if (!token_user || !title || !message) {
      res.status(400).json({ message: "the parameters is wrong!" })
      return
    }
    let { collectionToken, collectionInfo } = await UsersCollection()
    let userInfoAll = await collectionInfo.find({ token: token_user }).toArray()
    let userInfo = userInfoAll[0]
    if (userInfo) {
      let date = new Date()
      let today = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
      let allMessage: IMessage[] = userInfo.messages
      let newMessage: IMessage = {
        id: allMessage[allMessage.length - 1] ? allMessage[allMessage.length - 1].id + 1 : 1,
        title,
        date: today,
        message,
        url: url ? url : '',
        urlText: urlText ? urlText : ''
      }
      allMessage.push(newMessage)
      try {
        await collectionInfo.updateOne({ token: token_user }, { $set: { messages: allMessage } })
        res.status(200).json({ message: "Your message has been successfully sent" })
      } catch (err) {
        res.status(500).json({ message: "have a problem in database!" })
      }

    } else {
      res.status(404).json({ message: "not found user by this token!" })
    }
  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler