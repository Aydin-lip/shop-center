import { NextApiHandler } from "next";
// Bcrypt
import * as bcrypt from "bcrypt"
import cryptoRandomString from "crypto-random-string";
// For id <uuid>
import { uuid } from "uuidv4";
// Users Collection info and token
import UsersCollection from "@/db/usersV1";
// Connection json
import ConnectionJSON from "@/db/json";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // Receive and review the information sent
    let { fullname, phone, email, password }: { fullname: string, phone: string, email: string, password: string } = req.body
    if (!fullname || !phone || !email || !password || password.length < 8 || !email.includes("@")) {
      res.status(400).json({ message: "One of the parameters is wrong!" })
      return
    }

    let { collectionToken, collectionInfo } = await UsersCollection()

    // List information
    let token: string = uuid()
    let passHash = await bcrypt.hash(password, 10)
    let date = new Date()
    let today = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
    let _id = cryptoRandomString({length: 24})

    // User token object
    let userToken = {
      _id,
      email,
      password: passHash,
      token
    }
    // User information object
    let userInfo = {
      _id,
      profile: {
        fullname,
        email,
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

    collectionToken.push(userToken) // Add user token
    collectionInfo.push(userInfo) // Add user information

    try {
      await ConnectionJSON('usersInfo', collectionInfo) // Send information to json
      await ConnectionJSON('usersToken', collectionToken) // Send token to json
      // Send response
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