import { NextApiHandler } from "next";
// Connection json
import ConnectionJSON from "@/db/json";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    let data = await ConnectionJSON('collection') // Get data from connection
    res.status(200).json({ collection: data }) // Send data
  } else {
    res.status(400).json({ message: "method is false" })
  }
}

export default Handler