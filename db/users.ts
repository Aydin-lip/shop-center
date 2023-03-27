import { IUserInfo, IUserToken } from "@/models/user"
import ConnectionJSON from "./json"

const UsersCollection = async (): Promise<{
  collectionToken: IUserToken[]
  collectionInfo: IUserInfo[]
}> => {
  let collectionToken = await ConnectionJSON("usersToken")
  let collectionInfo = await ConnectionJSON("usersInfo")
  return { collectionToken, collectionInfo }
}

export default UsersCollection;