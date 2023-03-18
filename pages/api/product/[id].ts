import CollectionDB from "@/db/mongoDB";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  const { id } = req.query
  if (id) {
    let collection = await CollectionDB('products')
    let allProduct = await collection.find({}).toArray()
    let productID = allProduct.filter(p => p._id.toString() === id)
    if (productID) {
      res.status(200).json({message: "Success", product: productID})
    } else {
      res.status(404).json({message: "not found product!"})
    }
  }
}

export default Handler