import { NextApiHandler } from "next";
// Connection json
import ConnectionJSON from "@/db/json";

const Handler: NextApiHandler = async (req, res) => {
  // Get id from query and check
  const { id } = req.query
  if (id) {
    let data = await ConnectionJSON('products') // Get products
    let productID = data.filter(p => p._id.toString() === id) // Filter products by id
    if (productID) { // Check
      res.status(200).json({message: "Success", product: productID}) // Send
    } else {
      res.status(404).json({message: "not found product!"})
    }
  }
}

export default Handler