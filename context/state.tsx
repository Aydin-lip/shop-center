import Loading from '@/components/loading';
import { IUserInfo } from '@/models/user';
import { getInfo } from '@/services/http.service';
import { createContext, useContext, useEffect, useState } from 'react';

let defaultUser: IUserInfo = {
  _id: '0',
  profile: {
    fullname: '',
    phone: '',
    category: [],
    style: []
  },
  order: {
    deliverd: [],
    processing: []
  },
  favorites: [],
  messages: [],
  cart: {
    bag: [],
    address: []
  },
  token: ''
}

interface IContext {
  info: IUserInfo
  setInfo: (info: IUserInfo) => void
  loading: boolean
}
let contextDefaultValue: IContext = {
  info: defaultUser,
  setInfo: () => { },
  loading: false
}
const AppContext = createContext<IContext>(contextDefaultValue);


const Context = ({ children }: { children: JSX.Element }) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(defaultUser)
  const [loading, setLoading] = useState<boolean>(true)

  const setInfo = (info: IUserInfo) => {
    setUserInfo(info)
  }

  useEffect(() => {
    getInfo()
      .then(res => {
        setUserInfo(res.data.user)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        if (err.response.status === 404) {
          localStorage.removeItem('token')
        } else {
          setUserInfo({ ...userInfo, _id: '1' })
        }
      })
  }, [])

  let value = {
    info: userInfo,
    setInfo,
    loading
  }

  return (
    <AppContext.Provider value={value}>
      {loading && <Loading />}
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}

export default Context