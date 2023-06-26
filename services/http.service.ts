import { IDeliverd, IProcessing, IProfile } from '@/models/user';
import axios from 'axios'

const httpService = axios.create({
  baseURL: "/api/v2",
  headers: {
    'Content-type': 'application/json',
  },
});

export const signUp = (data: { fullname: string, phone: string, email: string, password: string }) => {
  return httpService.post('/register/sign-up', data)
}

export const signIn = (data: { email: string, password: string }) => {
  return httpService.post('/register/sign-in', data)
}

export const getAllCollection = () => {
  return httpService.get('/collection')
}

export const getAllProduct = () => {
  return httpService.get('/product/all')
}

export const getProductByID = (id: string | string[]) => {
  return httpService.get(`/product/${id}`)
}

export const getInfo = () => {
  const token = localStorage.getItem("token")
  return httpService.get('/info/get', {
    headers: {
      token
    }
  })
}

interface IMess {
  token_user: string
  title: string
  message: string
  url?: string
  urlText?: string
}
export const sendMessage = (data: IMess) => {
  const token = localStorage.getItem("token")
  return httpService.post('/info/add/message', data, {
    headers: {
      token
    }
  })
}

interface IProcessingAndDeliverd {
  image: string
  title: string
  code: string
  data: string
  price: number
}

export const addOrder = (data: { deliverd?: IProcessingAndDeliverd, processing?: IProcessingAndDeliverd }) => {
  const token = localStorage.getItem("token")
  return httpService.post('/info/add/order', data, {
    headers: {
      token
    }
  })
}

export const editProfile = (data: IProfile | { password: string, email: string }) => {
  const token = localStorage.getItem("token")
  return httpService.post('/info/edit/profile', data, {
    headers: {
      token
    }
  })
}

export const editFavorites = (data: { product_id: string }) => {
  const token = localStorage.getItem("token")
  return httpService.post('/info/edit/favorites', data, {
    headers: {
      token
    }
  })
}

interface IAddBag {
  product_id: string
  count: {
    color: string
    size: string
  }[]
}
export const cartAddBag = (data: IAddBag) => {
  const token = localStorage.getItem("token")
  return httpService.post('/info/edit/cart/bag/add', data, {
    headers: {
      token
    }
  })
}

export const cartDeleteBag = (id: number) => {
  const token = localStorage.getItem("token")
  return httpService.delete(`/info/edit/cart/bag/delete/${id}`, {
    headers: {
      token
    }
  })
}

export const cartDeleteBagAll = () => {
  const token = localStorage.getItem("token")
  return httpService.delete(`/info/edit/cart/bag/delete/all`, {
    headers: {
      token
    }
  })
}

interface IAddAddress {
  title: string
  detail: string
  phone: string
}
export const cartAddAddress = (data: IAddAddress) => {
  const token = localStorage.getItem("token")
  return httpService.post("/info/edit/cart/address/add", data, {
    headers: {
      token
    }
  })
}

interface IEditAddress {
  id: number
  title: string
  detail: string
  phone: string
}
export const cartEditAddress = (data: IEditAddress) => {
  const token = localStorage.getItem("token")
  return httpService.post('/info/edit/cart/address/edit', data, {
    headers: {
      token
    }
  })
}

export const cartDeleteAddress = (id: number) => {
  const token = localStorage.getItem("token")
  return httpService.delete(`/info/edit/cart/address/delete/${id}`, {
    headers: {
      token
    }
  })
}