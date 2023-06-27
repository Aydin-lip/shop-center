import { NextApiHandler } from "next";
// Users Collection info and token
import UsersCollection from "@/db/usersV2";
// Models
import { IMessage } from "@/models/user";


interface IMess {
  token_user: string
  title: string
  message: string
  url?: string
  urlText?: string
}
const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Get data from body and check
    const { token_user, title, message, url, urlText }: IMess = req.body
    if (!token_user || !title || !message) {
      res.status(400).json({ message: "the parameters is wrong!" })
      return
    }

    let { collectionToken, collectionInfo } = await UsersCollection()
    // Get user information by token
    let userInfoAll = await collectionInfo.find({ token: token_user }).toArray()
    // For ease calling
    let userInfo = userInfoAll[0]

    // Check
    if (userInfo) {
      // List data for send
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
      allMessage.push(newMessage) // Add
      try {
        await collectionInfo.updateOne({ token: token_user }, { $set: { messages: allMessage } }) // Send database
        res.status(200).json({ message: "Your message has been successfully sent" }) // Send successfull message
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