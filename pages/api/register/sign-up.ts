import * as bcrypt from "bcrypt"
import { NextApiHandler } from "next";
import { uuid } from "uuidv4";
import UsersCollection from "@/db/users";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    let { fullname, phone, email, password }: { fullname: string, phone: string, email: string, password: string } = req.body
    if (!fullname || !phone || !email || !password || password.length < 8 || !email.includes("@")) {
      res.status(400).json({ message: "One of the parameters is wrong!" })
      return
    }

    let {collectionToken, collectionInfo} = await UsersCollection()

    let token: string = uuid()
    let passHash = await bcrypt.hash(password, 10)
    let date = new Date()
    let today = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`

    let userToken = {
      email,
      password: passHash,
      token
    }
    let userInfo = {
      profile: {
        fullname,
        phone,
        category: ["Women"],
        style: ["Basic", "Sport", "Party"]
      },
      order: {
        deliverd: [],
        processing: []
      },
      favorites: [],
      messages: [{
        id: 1,
        title: 'Wellcome',
        date: today,
        message: "Welcome to your store. You can order anything you need in this store and get it delivered as soon as possible.",
        url: '',
        urlText: '',
      }],
      cart: {
        bag: [],
        address: [{
          id: 1,
          title: "default address",
          detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          phone: '11228'
        }]
      },
      token
    }

    try {
      await collectionToken.insertOne(userToken)
      await collectionInfo.insertOne(userInfo)
      res.status(201).json({
        message: "Your account has been successfully created", user: {
          ...userInfo,
          profile: {
            ...userInfo.profile,
            email
          }
        }
      })
    } catch (err) {
      res.status(500).json({ message: "Your account was not created with these specifications" })
    }
  } else {
    res.status(400).json({ message: "method is false." })
  }
}

export default Handler;