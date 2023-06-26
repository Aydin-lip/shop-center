import ICollection from "@/models/collection"
import CollectionDB from "./mongoDB"

let getAllCollection = async () => {
  let collection = await CollectionDB("collection")
  let collections = await collection.find({}).toArray()
  let fixCollections: ICollection[] = []
  collections.forEach(c => {
    fixCollections.push({ ...c, _id: c._id.toHexString() } as ICollection)
  })
  return fixCollections
}

export default getAllCollection