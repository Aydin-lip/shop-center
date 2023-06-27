import { NextApiHandler } from "next";
// Collection Mongo for connect with database
import CollectionDB from "@/db/mongoDB";
import { Condition, ObjectId } from "mongodb";

const Handler: NextApiHandler = async (req, res) => {
  // Get id from query
  const { id } = req.query
  if (id) {
    let _id = new ObjectId(id as string) // Create objectid as id query

    let collection = await CollectionDB("products") // Get data collection
    if (!collection) {
      res.status(500).json({ message: "We could not connect to the database!" })
      return
    }
    
    let productID = await collection.find({ _id }).toArray() // Get product by id
    if (productID[0]) {
      res.status(200).json({ message: "Success", product: productID[0] }) // Send
    } else {
      res.status(404).json({ message: "not found product!" })
    }
  }
}

export default Handler