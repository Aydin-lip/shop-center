export interface IDescription {
  text: string
  items: {
    casualStyle: boolean
    heartPattern: boolean
    longSleeve: boolean
    polyester: boolean
    productCode: string
    fabric: boolean
  }
}
export interface IComment {
  id: number
  name: string
  star: number
  title: string
  date: string
  text: string
  like: number
}
export default interface IProducts {
  _id: string
  style: string[]
  name: string
  price: number
  onSale: number
  category: string
  size: string[]
  color: string[]
  img: string
  star: number
  description: IDescription
  comments: IComment[]
}