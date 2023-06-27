import { NextApiHandler } from "next";
// Connection json
import ConnectionJSON from "@/db/json";
// User collection token and info
import UsersCollection from "@/db/usersV1";
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
    // Get user information by user token
    let userInfo = collectionInfo.find(ci => ci.token === token_user)

    // Check
    if (userInfo) {
      // List data
      let date = new Date()
      let today = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
      let allMessage: IMessage[] = userInfo.messages // All user message

      let newMessage: IMessage = { // Create new message obj
        id: allMessage[allMessage.length - 1] ? allMessage[allMessage.length - 1].id + 1 : 1,
        title,
        date: today,
        message,
        url: url ? url : '',
        urlText: urlText ? urlText : ''
      }
      allMessage.push(newMessage) // Add new to others
      let newUserInfo = { // Create new user info
        ...userInfo,
        messages: allMessage
      }
      let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id) // Filter user information by id
      filterCollectionInfo.push(newUserInfo) // Add user info

      try {
        await ConnectionJSON('usersInfo', filterCollectionInfo) // Send json 
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