import Loading from '@/components/loading';
import ChangeThem from '@/components/styleThem/changeThem';
import DarkModeStyle from '@/components/styleThem/darkModeStyle';
import { IUserInfo } from '@/models/user';
import { getInfo } from '@/services/http.service';
import { createContext, useContext, useEffect, useState } from 'react';

let defaultUser: IUserInfo = {
  _id: '0',
  profile: {
    fullname: '',
    phone: '',
    email: '',
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
  loading: boolean,
  them: boolean,
  setThem: (dark: boolean) => void
}
let contextDefaultValue: IContext = {
  info: defaultUser,
  setInfo: () => { },
  loading: false,
  them: false,
  setThem: () => { }
}
const AppContext = createContext<IContext>(contextDefaultValue);


const Context = ({ children }: { children: JSX.Element }) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(defaultUser)
  const [loading, setLoading] = useState<boolean>(true)
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [changeThem, setChangeThem] = useState<boolean>(false)

  const setInfo = (info: IUserInfo) => {
    setUserInfo(info)
  }
  const setThem = (them: boolean) => {
    setChangeThem(true)
    setDarkMode(them)
    setTimeout(() => {
      setChangeThem(false)
    }, 200);
  }

  useEffect(() => {
    getInfo()
      .then(res => {
        setUserInfo(res?.data?.user)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        if (err?.response?.status === 404) {
          localStorage.removeItem('token')
        } else {
          setUserInfo({ ...userInfo, _id: '1' })
        }
      })
    let them = localStorage.getItem('them')
    if (them && them === 'dark') setThem(true)
  }, [])

  let value = {
    info: userInfo,
    setInfo,
    loading,
    them: darkMode,
    setThem
  }

  return (
    <AppContext.Provider value={value}>
      <ChangeThem change={changeThem} />
      <DarkModeStyle darkMode={darkMode} />
      {loading && <Loading />}
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}

export default Context