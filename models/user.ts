export interface IProfile {
  fullname: string
  phone: string
  category: string[]
  style: string[]
}
export interface IDeliverd {
  id: number
  image: string
  title: string
  code: string
  data: string
  price: number
}
export interface IProcessing {
  id: number
  image: string
  title: string
  code: string
  data: string
  price: number
}
export interface IOrder {
  deliverd: IDeliverd[]
  processing: IProcessing[]
}
export interface IMessage {
  id: number
  title: string
  date: string
  message: string
  url: string
  urlText: string
}
export interface IAddress {
  id: number
  title: string
  detail: string
  phone: string
}
export interface ICart {
  bag: number[]
  address: IAddress[]
}
export interface IUserInfo {
  _id: string
  profile: IProfile
  order: IOrder
  favorites: number[]
  messages: IMessage[]
  cart: ICart
  token: string
}

export interface IUserToken {
  _id: string
  email: string
  password: string
  token: string
}