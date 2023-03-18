import CollectionDB from "@/db/mongoDB";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    let collection = await CollectionDB('products')
    if (!collection) {
      res.status(500).json({ message: "We could not connect to the database!" })
      return
    }
    let products = await collection.find({}).toArray()
    res.status(200).json({ products })
  } else {
    res.status(400).json({ message: "method is false" })
  }
}

export default Handler