import { BasicButton, SubTitle2 } from "@/mui/customize";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { MouseEvent, useState } from "react";


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#c0c0c0',
  },
  '& label': {
    color: '#dfdbdb',
  },
  '& .MuiOutlinedInput-root': {
    '&': {
      borderRadius: "8px"
    },
    '& fieldset': {
      borderColor: '#E4E4E4',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#c0c0c0c4',
    },
  },
});

const Profile = () => {
  const [category, setCategory] = useState<string[]>(['Women'])
  const [favorite, setFavorite] = useState<string[]>(['Basic', 'Sport'])

  const [editName, setEditName] = useState<boolean>(true)
  const [editEmail, setEditEmail] = useState<boolean>(true)
  const [editPhone, setEditPhone] = useState<boolean>(true)
  const [editPassword, setEditPassword] = useState<boolean>(true)

  const Change = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, type: string) => {
    const target = e.target as HTMLElement;
    if (type === 'category') {
      if (category.includes(target.innerText)) {
        setCategory(category.filter(c => c !== target.innerText))
      } else {
        setCategory([...category, target.innerText])
      }
    } else {
      if (favorite.includes(target.innerText)) {
        setFavorite(favorite.filter(c => c !== target.innerText))
      } else {
        setFavorite([...favorite, target.innerText])
      }
    }
  }

  return (
    <>
      <div className="w-full h-full flex justify-center p-4">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-y-8 gap-x-4">
            <CssTextField
              // error
              size="small"
              label="name"
              className="bg-container border-none rounded-lg font-poppins font-medium  w-[300px]"
              sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
              color="secondary"
              disabled={editName}
              focused
              // helperText="Incorrect entry."
              InputProps={{
                endAdornment: (
                  <span className="cursor-pointer flex relative" onClick={() => setEditName(!editName)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.53999 19.52C4.92999 19.52 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.1C14.77 0.929999 16.91 0.87 19.08 2.92C21.25 4.97 21.31 7.11 19.26 9.28L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.94L6.01999 19.49C5.84999 19.5 5.69999 19.52 5.53999 19.52ZM15.93 2.91C15.16 2.91 14.49 3.39 13.81 4.11L5.59999 12.81C5.39999 13.02 5.16999 13.52 5.12999 13.81L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.45C9.26999 17.4 9.74999 17.14 9.94999 16.93L18.16 8.24C19.4 6.92 19.85 5.7 18.04 4C17.24 3.23 16.55 2.91 15.93 2.91Z" fill="#7F7F7F" />
                      <path d="M17.3404 10.95C17.3204 10.95 17.2904 10.95 17.2704 10.95C14.1504 10.64 11.6404 8.27 11.1604 5.17C11.1004 4.76 11.3804 4.38 11.7904 4.31C12.2004 4.25 12.5804 4.53 12.6504 4.94C13.0304 7.36 14.9904 9.22 17.4304 9.46C17.8404 9.5 18.1404 9.87 18.1004 10.28C18.0504 10.66 17.7204 10.95 17.3404 10.95Z" fill="#7F7F7F" />
                      <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#7F7F7F" />
                    </svg>
                  </span>
                )
              }}
            />
            <CssTextField
              // error
              size="small"
              label="email"
              type="email"
              className="bg-container border-none rounded-lg font-poppins font-medium  w-[300px]"
              sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
              color="secondary"
              disabled={editEmail}
              focused
              // helperText="Incorrect entry."
              InputProps={{
                endAdornment: (
                  <span className="cursor-pointer flex" onClick={() => setEditEmail(!editEmail)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.53999 19.52C4.92999 19.52 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.1C14.77 0.929999 16.91 0.87 19.08 2.92C21.25 4.97 21.31 7.11 19.26 9.28L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.94L6.01999 19.49C5.84999 19.5 5.69999 19.52 5.53999 19.52ZM15.93 2.91C15.16 2.91 14.49 3.39 13.81 4.11L5.59999 12.81C5.39999 13.02 5.16999 13.52 5.12999 13.81L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.45C9.26999 17.4 9.74999 17.14 9.94999 16.93L18.16 8.24C19.4 6.92 19.85 5.7 18.04 4C17.24 3.23 16.55 2.91 15.93 2.91Z" fill="#7F7F7F" />
                      <path d="M17.3404 10.95C17.3204 10.95 17.2904 10.95 17.2704 10.95C14.1504 10.64 11.6404 8.27 11.1604 5.17C11.1004 4.76 11.3804 4.38 11.7904 4.31C12.2004 4.25 12.5804 4.53 12.6504 4.94C13.0304 7.36 14.9904 9.22 17.4304 9.46C17.8404 9.5 18.1404 9.87 18.1004 10.28C18.0504 10.66 17.7204 10.95 17.3404 10.95Z" fill="#7F7F7F" />
                      <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#7F7F7F" />
                    </svg>
                  </span>
                )
              }}
            />
            <CssTextField
              // error
              size="small"
              label="phone number"
              className="bg-container border-none rounded-lg font-poppins font-medium  w-[300px]"
              sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
              color="secondary"
              disabled={editPhone}
              focused
              // helperText="Incorrect entry."
              InputProps={{
                endAdornment: (
                  <span className="cursor-pointer flex" onClick={() => setEditPhone(!editPhone)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.53999 19.52C4.92999 19.52 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.1C14.77 0.929999 16.91 0.87 19.08 2.92C21.25 4.97 21.31 7.11 19.26 9.28L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.94L6.01999 19.49C5.84999 19.5 5.69999 19.52 5.53999 19.52ZM15.93 2.91C15.16 2.91 14.49 3.39 13.81 4.11L5.59999 12.81C5.39999 13.02 5.16999 13.52 5.12999 13.81L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.45C9.26999 17.4 9.74999 17.14 9.94999 16.93L18.16 8.24C19.4 6.92 19.85 5.7 18.04 4C17.24 3.23 16.55 2.91 15.93 2.91Z" fill="#7F7F7F" />
                      <path d="M17.3404 10.95C17.3204 10.95 17.2904 10.95 17.2704 10.95C14.1504 10.64 11.6404 8.27 11.1604 5.17C11.1004 4.76 11.3804 4.38 11.7904 4.31C12.2004 4.25 12.5804 4.53 12.6504 4.94C13.0304 7.36 14.9904 9.22 17.4304 9.46C17.8404 9.5 18.1404 9.87 18.1004 10.28C18.0504 10.66 17.7204 10.95 17.3404 10.95Z" fill="#7F7F7F" />
                      <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#7F7F7F" />
                    </svg>
                  </span>
                )
              }}
            />
            <CssTextField
              // error
              size="small"
              label="password"
              type="password"
              className="bg-container border-none rounded-lg font-poppins font-medium  w-[300px]"
              sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
              color="secondary"
              disabled={editPassword}
              focused
              // helperText="Incorrect entry."
              InputProps={{
                endAdornment: (
                  <span className="cursor-pointer flex" onClick={() => setEditPassword(!editPassword)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.53999 19.52C4.92999 19.52 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.1C14.77 0.929999 16.91 0.87 19.08 2.92C21.25 4.97 21.31 7.11 19.26 9.28L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.94L6.01999 19.49C5.84999 19.5 5.69999 19.52 5.53999 19.52ZM15.93 2.91C15.16 2.91 14.49 3.39 13.81 4.11L5.59999 12.81C5.39999 13.02 5.16999 13.52 5.12999 13.81L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.45C9.26999 17.4 9.74999 17.14 9.94999 16.93L18.16 8.24C19.4 6.92 19.85 5.7 18.04 4C17.24 3.23 16.55 2.91 15.93 2.91Z" fill="#7F7F7F" />
                      <path d="M17.3404 10.95C17.3204 10.95 17.2904 10.95 17.2704 10.95C14.1504 10.64 11.6404 8.27 11.1604 5.17C11.1004 4.76 11.3804 4.38 11.7904 4.31C12.2004 4.25 12.5804 4.53 12.6504 4.94C13.0304 7.36 14.9904 9.22 17.4304 9.46C17.8404 9.5 18.1404 9.87 18.1004 10.28C18.0504 10.66 17.7204 10.95 17.3404 10.95Z" fill="#7F7F7F" />
                      <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#7F7F7F" />
                    </svg>
                  </span>
                )
              }}
            />
          </div>

          <div className="mt-12 p-1">
            <SubTitle2 className="text-light-200">your favorite category</SubTitle2>
            <div className="flex gap-16 mt-8">
              <BasicButton variant="text" className={`text-light-200 ${category.includes('Women') ? 'bg-[#fef5f6]' : ''}`} onClick={e => Change(e, 'category')}>Women</BasicButton>
              <BasicButton variant="text" className={`text-light-200 ${category.includes('Men') ? 'bg-[#fef5f6]' : ''}`} onClick={e => Change(e, 'category')}>Men</BasicButton>
              <BasicButton variant="text" className={`text-light-200 ${category.includes('Kids') ? 'bg-[#fef5f6]' : ''}`} onClick={e => Change(e, 'category')}>Kids</BasicButton>
            </div>
          </div>

          <div className="mt-12 p-1">
            <SubTitle2 className="text-light-200">your favorite style</SubTitle2>
            <div className="flex gap-16 mt-8">
              <BasicButton variant="text" className={`text-light-200 ${favorite.includes('Basic') ? 'bg-[#fef5f6]' : ''}`} onClick={e => Change(e, 'favorite')}>Basic</BasicButton>
              <BasicButton variant="text" className={`text-light-200 ${favorite.includes('Casual') ? 'bg-[#fef5f6]' : ''}`} onClick={e => Change(e, 'favorite')}>Casual</BasicButton>
              <BasicButton variant="text" className={`text-light-200 ${favorite.includes('Sport') ? 'bg-[#fef5f6]' : ''}`} onClick={e => Change(e, 'favorite')}>Sport</BasicButton>
              <BasicButton variant="text" className={`text-light-200 ${favorite.includes('Vacation') ? 'bg-[#fef5f6]' : ''}`} onClick={e => Change(e, 'favorite')}>Vacation</BasicButton>
              <BasicButton variant="text" className={`text-light-200 ${favorite.includes('Party') ? 'bg-[#fef5f6]' : ''}`} onClick={e => Change(e, 'favorite')}>Party</BasicButton>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile;