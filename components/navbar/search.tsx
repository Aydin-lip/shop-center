import * as React from 'react';
// Mui
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

// Style input search
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
    '&:hover fieldset': {
      borderColor: '#dfdbdb',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#c0c0c0c4',
    },
  },
});

const SearchNav = () => {
  return (
    <>
      <div className="max-w-xl w-full relative">
        <CssTextField
          className='w-full them-navbar-search'
          size='small'
          placeholder="Search..."
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <span className="bg-red-dark-100 them-navbar-search-btn rounded-md w-8 h-8 text-container p-1.5 cursor-pointer relative mr-[-.5rem]">
                  <svg className='absolute top-1 left-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="white" />
                    <path d="M21.9999 22.75C21.8099 22.75 21.6199 22.68 21.4699 22.53L19.4699 20.53C19.1799 20.24 19.1799 19.76 19.4699 19.47C19.7599 19.18 20.2399 19.18 20.5299 19.47L22.5299 21.47C22.8199 21.76 22.8199 22.24 22.5299 22.53C22.3799 22.68 22.1899 22.75 21.9999 22.75Z" fill="white" />
                  </svg>
                </span>
              </InputAdornment>
            )
          }}
        />
      </div>
    </>
  )
}

export default SearchNav