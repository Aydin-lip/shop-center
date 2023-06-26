import CollectionDB from "@/db/mongoDB";
import { Condition, ObjectId } from "mongodb";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  const { id } = req.query
  if (id) {
    let _id = new ObjectId(id as string)

    let collection = await CollectionDB("products")
    if (!collection) {
      res.status(500).json({ message: "We could not connect to the database!" })
      return
    }
    
    let productID = await collection.find({ _id }).toArray()
    if (productID[0]) {
      res.status(200).json({ message: "Success", product: productID[0] })
    } else {
      res.status(404).json({ message: "not found product!" })
    }
  }
}

export default Handler