export interface IProduct {
  id: number
  name: string
  price: number
  onSale: number
  category: string
  size: string[]
  color: string[]
  img: string
  star: number
}

export interface IBag {
  id: number
  id_product: number
  size: string
  color: string
  count: number
}

export interface IAddress {
  id: number
  title: string
  address: string
  phone: string
}
