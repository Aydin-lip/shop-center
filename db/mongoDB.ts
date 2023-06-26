import { MongoClient } from "mongodb"

const CollectionDB = async (connection: string) => {
  let client: MongoClient = await MongoClient.connect("mongodb+srv://shop-center:d6lVtchB6kDc8tYW@cluster0.te7xb49.mongodb.net/?retryWrites=true&w=majority")
  return client.db("shop-center").collection(connection)
}

export default CollectionDB
