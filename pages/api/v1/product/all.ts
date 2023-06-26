import ConnectionJSON from "@/db/json";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    let data = await ConnectionJSON('products')
    res.status(200).json({ products: data })
  } else {
    res.status(400).json({ message: "method is false" })
  }
}

export default Handler