import CollectionDB from "./mongoDB"

const UsersCollection = async () => {
  let collectionToken = await CollectionDB('users-token')
  let collectionInfo = await CollectionDB('users-info')
  return { collectionToken, collectionInfo }
}

export default UsersCollection;