import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router';
// Mui
import Modal from '@mui/material/Modal';
import { BasicButton, Heading3 } from '@/mui/customize';
// Context
import { useAppContext } from '@/context/state';


interface IProps {
  logout: boolean
  setLogout: Dispatch<SetStateAction<boolean>>
}
const Logout = ({ logout, setLogout }: IProps) => {
  const router = useRouter()
  const { info, setInfo } = useAppContext()

  // Function close logout modal
  const handleClose = () => setLogout(false)
  // Function logout
  const logoutHandler = () => {
    localStorage.removeItem("token") // remove token from localstorage
    router.replace('/')
    // Set default information for user
    setInfo({
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
    })
  }
  return (
    <>
      <Modal
        open={logout}
        onClose={handleClose}
      >
        <>
          <div
            className="them-dashboard-logout w-96 rounded-md shadow-2xl bg-container absolute top-1/2 left-1/2 pt-4 pl-8 pr-8 pb-6 hidden md:block"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <p>
              Are you sure you want to log out of your account?
            </p>
            <div className="flex gap-6 mt-8">
              <BasicButton variant='contained' className='bg-red-dark-100' onClick={logoutHandler}>Log out</BasicButton>
              <BasicButton color='primary' variant='outlined' onClick={handleClose}>Cancle</BasicButton>
            </div>
          </div>

          <div className={`md:hidden absolute left-0 right-0 bottom-[-1rem] bg-container rounded-2xl px-4 pt-6 pb-10 transition-all duration-500`}>
            <div className='w-10 h-[3px] rounded-2xl absolute top-4 left-1/2 bg-light-200' style={{ transform: 'translate(-50%, -50%)' }}></div>
            <p className='them-dashboard-logout font-semibold text-center'>
              Are you sure you want to log out of your account?
            </p>
            <div className="flex gap-6 mt-8 justify-end min-[400px]:pr-12">
              <BasicButton variant='contained' className='bg-red-dark-100' onClick={logoutHandler}>Log out</BasicButton>
              <BasicButton color='primary' variant='outlined' onClick={handleClose}>Cancle</BasicButton>
            </div>
          </div>
        </>
      </Modal>
    </>
  )
}

export default Logout;