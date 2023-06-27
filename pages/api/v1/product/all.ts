import { NextApiHandler } from "next";
// Connection json
import ConnectionJSON from "@/db/json";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    let data = await ConnectionJSON('products') // Get product
    res.status(200).json({ products: data }) // Send
  } else {
    res.status(400).json({ message: "method is false" })
  }
}

export default Handler