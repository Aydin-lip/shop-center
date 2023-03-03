import { Dispatch, SetStateAction } from 'react'
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { BasicButton, Heading3 } from '@/mui/customize';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #E4E4E4',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface IProps {
  logout: boolean
  setLogout: Dispatch<SetStateAction<boolean>>
}
const Logout = ({ logout, setLogout }: IProps) => {
  const handleClose = () => setLogout(false)
  return (
    <>
      <Modal
        open={logout}
        onClose={handleClose}
      >
        <Box sx={{ ...style, width: 400 }}>
          <div className='flex items-center gap-4'>
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4399 15.37C17.2499 15.37 17.0599 15.3 16.9099 15.15C16.6199 14.86 16.6199 14.38 16.9099 14.09L18.9399 12.06L16.9099 10.03C16.6199 9.74 16.6199 9.26 16.9099 8.97C17.1999 8.68 17.6799 8.68 17.9699 8.97L20.5299 11.53C20.8199 11.82 20.8199 12.3 20.5299 12.59L17.9699 15.15C17.8199 15.3 17.6299 15.37 17.4399 15.37Z" fill="#7F7F7F" />
              <path d="M19.9298 12.81H9.75977C9.34977 12.81 9.00977 12.47 9.00977 12.06C9.00977 11.65 9.34977 11.31 9.75977 11.31H19.9298C20.3398 11.31 20.6798 11.65 20.6798 12.06C20.6798 12.47 20.3398 12.81 19.9298 12.81Z" fill="#7F7F7F" />
              <path d="M11.7598 20.75C6.60977 20.75 3.00977 17.15 3.00977 12C3.00977 6.85 6.60977 3.25 11.7598 3.25C12.1698 3.25 12.5098 3.59 12.5098 4C12.5098 4.41 12.1698 4.75 11.7598 4.75C7.48977 4.75 4.50977 7.73 4.50977 12C4.50977 16.27 7.48977 19.25 11.7598 19.25C12.1698 19.25 12.5098 19.59 12.5098 20C12.5098 20.41 12.1698 20.75 11.7598 20.75Z" fill="#7F7F7F" />
            </svg>
            <Heading3 className='text-light-100'>Log Out</Heading3>
          </div>
          <p>
            Are you sure you want to log out of your account?
          </p>
          <div className="flex gap-6 mt-8">
            <BasicButton color='primary' variant='outlined' onClick={handleClose}>Log out</BasicButton>
            <BasicButton color='success' variant='contained' onClick={handleClose}>Cancle</BasicButton>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default Logout;