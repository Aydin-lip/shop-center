import Link from 'next/link';
// Mui
import { BasicButton, Button2 } from '@/mui/customize';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
// Context
import { useAppContext } from '@/context/state';
// Them Component
import Them from './them';


const cart = (mobile: boolean) => { // Function cart btn
  return (
    <>
      <span className='flex'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.19 17.75H7.54C6.55 17.75 5.6 17.33 4.93 16.6C4.59767 16.2381 4.34355 15.8115 4.18353 15.347C4.02351 14.8824 3.96104 14.3898 4 13.9L4.83 3.94C4.86 3.63 4.75 3.33 4.54 3.1C4.33 2.87 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74C4.47 1.25 5.16 1.56 5.65 2.09C5.92 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.96 16.24 7.54 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82C20.8137 6.53647 20.7779 6.25111 20.6848 5.98225C20.5917 5.71339 20.4434 5.46698 20.2494 5.25885C20.0554 5.05073 19.82 4.88548 19.5583 4.77374C19.2966 4.66199 19.0145 4.60622 18.73 4.61H6.28V4.62ZM16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25ZM8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" fill="#424242" />
          <path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" fill="#424242" />
        </svg>
      </span>
      <Button2 className={`${mobile ? 'them-profile-btn-mobile' : 'them-profile-btn'}`}>
        Cart
      </Button2>
    </>
  )
}

const login = (mobile: boolean) => { // Function signIn'up btn
  return (
    <>
      <span className='flex'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.68 15.37C11.49 15.37 11.3 15.3 11.15 15.15C11.0105 15.0089 10.9323 14.8184 10.9323 14.62C10.9323 14.4216 11.0105 14.2311 11.15 14.09L13.18 12.06L11.15 10.03C11.0105 9.88886 10.9323 9.69843 10.9323 9.5C10.9323 9.30157 11.0105 9.11114 11.15 8.97C11.44 8.68 11.92 8.68 12.21 8.97L14.77 11.53C15.06 11.82 15.06 12.3 14.77 12.59L12.21 15.15C12.07 15.3 11.87 15.37 11.68 15.37Z" fill="#424242" />
          <path d="M14.17 12.81H4C3.59 12.81 3.25 12.47 3.25 12.06C3.25 11.65 3.59 11.31 4 11.31H14.17C14.58 11.31 14.92 11.65 14.92 12.06C14.92 12.47 14.58 12.81 14.17 12.81Z" fill="#424242" />
          <path d="M12 20.75C11.59 20.75 11.25 20.41 11.25 20C11.25 19.59 11.59 19.25 12 19.25C16.27 19.25 19.25 16.27 19.25 12C19.25 7.73 16.27 4.75 12 4.75C11.59 4.75 11.25 4.41 11.25 4C11.25 3.59 11.59 3.25 12 3.25C17.15 3.25 20.75 6.85 20.75 12C20.75 17.15 17.15 20.75 12 20.75Z" fill="#424242" />
        </svg>
      </span>
      <Button2 className={`${mobile ? 'them-profile-btn-mobile' : 'them-profile-btn'}`}>
        SignUp | Login
      </Button2>
    </>
  )
}

const Profile = () => {
  const { info } = useAppContext()
  return (
    <>
      <div className='flex gap-4 lg:gap-8 items-center'>
        <Them />
        <Link href='/cart' className='no-underline'>
          <BasicButton className='h-10 py-1 pr-2 pl-1 gap-1 hidden md:flex' variant='text' color='secondary'>
            {cart(false)}
          </BasicButton>
          <BasicButton className='h-10 py-1 pr-2 pl-1 gap-1 bg-dark-50 flex md:hidden' variant='text' color='secondary'>
            {cart(true)}
          </BasicButton>
        </Link>
        {info._id > '1' ?
          <div className='pr-2'>
            <Link href='/dashboard'>
              <Tooltip title="Dashboard">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt={info.profile.fullname} src="" />
                </IconButton>
              </Tooltip>
            </Link>
          </div>
          :
          <Link href='/register/sign-in' className='no-underline'>
            <BasicButton className='h-10 py-1 pl-2 pr-3 gap-1 rounded-lg w-[150px] hidden md:flex' variant="outlined" color='secondary'>
              {login(false)}
            </BasicButton>
            <BasicButton className='h-10 py-1 pl-2 pr-3 gap-1 rounded-lg w-[150px] bg-dark-300 flex md:hidden' variant="outlined" color='secondary'>
              {login(true)}
            </BasicButton>
          </Link>
        }
      </div>
    </>
  )
}

export default Profile;