import { NextApiHandler } from "next";
// Collection Mongo for connect with database
import CollectionDB from "@/db/mongoDB";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    let collection = await CollectionDB("collection") // Get data collection
    if (!collection) {
      res.status(500).json({ message: "We could not connect to the database!" })
      return
    }
    let allCollection = await collection.find({}).toArray() // Get main Data
    res.status(200).json({ collection: allCollection }) // Send
  } else {
    res.status(400).json({ message: "method is false" })
  }
}

export default Handler