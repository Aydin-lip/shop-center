import { Dispatch, MouseEvent, SetStateAction, useMemo, useState } from "react";
// Mui
import { BasicButton, SubTitle2 } from "@/mui/customize";
import { TextField, Tooltip } from "@mui/material";
import { styled } from '@mui/material/styles';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// Context
import { useAppContext } from "@/context/state";
// Api for send data edited
import { editProfile } from "@/services/http.service";


const CssTextField = styled(TextField)({ // Style inputs
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

const editIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.53999 19.52C4.92999 19.52 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.1C14.77 0.929999 16.91 0.87 19.08 2.92C21.25 4.97 21.31 7.11 19.26 9.28L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.94L6.01999 19.49C5.84999 19.5 5.69999 19.52 5.53999 19.52ZM15.93 2.91C15.16 2.91 14.49 3.39 13.81 4.11L5.59999 12.81C5.39999 13.02 5.16999 13.52 5.12999 13.81L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.45C9.26999 17.4 9.74999 17.14 9.94999 16.93L18.16 8.24C19.4 6.92 19.85 5.7 18.04 4C17.24 3.23 16.55 2.91 15.93 2.91Z" fill="#7F7F7F" />
      <path d="M17.3404 10.95C17.3204 10.95 17.2904 10.95 17.2704 10.95C14.1504 10.64 11.6404 8.27 11.1604 5.17C11.1004 4.76 11.3804 4.38 11.7904 4.31C12.2004 4.25 12.5804 4.53 12.6504 4.94C13.0304 7.36 14.9904 9.22 17.4304 9.46C17.8404 9.5 18.1404 9.87 18.1004 10.28C18.0504 10.66 17.7204 10.95 17.3404 10.95Z" fill="#7F7F7F" />
      <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#7F7F7F" />
    </svg>
  )
}

const Profile = () => {
  const { info, setInfo } = useAppContext()

  // States
  const [category, setCategory] = useState<string[]>(info.profile.category)
  const [favorite, setFavorite] = useState<string[]>(info.profile.style)

  const [name, setName] = useState<string>(info.profile.fullname)
  const [email, setEmail] = useState<string>(info.profile.email)
  const [phone, setPhone] = useState<string>(info.profile.phone)
  const [password, setPassword] = useState<string>('@@@@@@@@')

  const [editName, setEditName] = useState<boolean>(false)
  const [editEmail, setEditEmail] = useState<boolean>(false)
  const [editPhone, setEditPhone] = useState<boolean>(false)
  const [editPassword, setEditPassword] = useState<boolean>(false)

  const [loadingBtnSave, setLoadingBtnSave] = useState<boolean>(false)


  // Function change favorites and style category
  const changeHandler = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, type: string) => {
    // Get target from btn <for text>
    const target = e.target as HTMLElement;
    if (type === 'category') {

      if (category.includes(target.innerText)) { // If there are categories in the list
        let filterCategory = category.filter(c => c !== target.innerText) // It is filtered from the list of categories
        let newInfo = { // Create new information with new category list
          ...info,
          profile: {
            ...info.profile,
            category: filterCategory
          }
        }
        // Send data
        editProfile({
          ...info.profile,
          category: filterCategory
        }).then(res => {
          setCategory(filterCategory) // Change state
          setInfo(newInfo) // Save to context
        })
      } else { // If the category does not exist in the list
        let filterCategory = [...category, target.innerText] // Add to list
        let newInfo = { // Create new information with new category list
          ...info,
          profile: {
            ...info.profile,
            category: filterCategory
          }
        }
        // Send data
        editProfile({
          ...info.profile,
          category: filterCategory
        }).then(res => {
          setCategory(filterCategory) // Change state
          setInfo(newInfo) // Create new information with new category list
        })
      }

    } else {

      if (favorite.includes(target.innerText)) { // If the desired style is in the list
        let filterFavorites = favorite.filter(c => c !== target.innerText) // It is filtered from the list of favorites
        let newInfo = { // Create new information with new favorites list
          ...info,
          profile: {
            ...info.profile,
            style: filterFavorites
          }
        }
        // Send data
        editProfile({
          ...info.profile,
          style: filterFavorites
        }).then(res => {
          setFavorite(filterFavorites) // Change state
          setInfo(newInfo) // Save context
        })
      } else { // If the desired style is not in the list
        let filterFavorites = [...favorite, target.innerText] // Add to list
        let newInfo = { // Create new information with new favorites list
          ...info,
          profile: {
            ...info.profile,
            style: filterFavorites
          }
        }
        // Send data
        editProfile({
          ...info.profile,
          style: filterFavorites
        }).then(res => {
          setFavorite(filterFavorites) // Change state
          setInfo(newInfo) // Save context
        })
      }

    }
  }

  // Function edit name|email|phone|password style and btn
  const editHandler = (
    edit: boolean, // Edit or not
    setEdit: Dispatch<SetStateAction<boolean>>, // State name to change boolean
    change: string, // The data you want to edit
    setChange: Dispatch<SetStateAction<string>>, // State for save edited string
    name: string // The name of the desired state
  ) => {

    let obj = {}
    let txt = ''
    switch (name) {
      case 'name':
        obj = { fullname: change }
        txt = info.profile.fullname
        break
      case 'email':
        obj = { email: change }
        txt = info.profile.email
        break
      case 'phone':
        obj = { phone: change }
        txt = info.profile.phone
        break
      case 'password':
        obj = { password: change }
        txt = '@@@@@@@@'
        break

      default:
        break;
    }


    return edit ? (
      <>
        <Tooltip title="Cancel">
          <HighlightOffIcon
            className={`text-[#9f9f9f] ${loadingBtnSave ? 'cursor-wait' : 'cursor-pointer'} `}
            onClick={() => {
              if (!loadingBtnSave) { // Check loadingBtnSave ture or false
                setEdit(false)
                setChange(txt)
              }
            }} />
        </Tooltip>
        <Tooltip title="Save">
          <SaveAltIcon
            className={`ml-1 text-[#9f9f9f] ${loadingBtnSave ? 'cursor-wait' : 'cursor-pointer'} `}
            onClick={() => {
              // Check data for send
              if (
                name === 'password' && change.length < 8 ||
                name === 'email' && !change.includes('@')
              ) {
                return
              }
              if (!loadingBtnSave) { // Check loadingBtnSave
                setLoadingBtnSave(true)
                // send Data
                editProfile({
                  ...info.profile,
                  ...obj
                }).then(res => {
                  setInfo({ ...info, profile: { ...info.profile, ...obj } }) // Save context
                  setEdit(false)
                  setLoadingBtnSave(false)
                }).catch(err => {
                  setEdit(false)
                  setLoadingBtnSave(false)
                })
              }
            }} />
        </Tooltip>
      </>
    ) : (
      <span className="cursor-pointer flex relative" onClick={() => setEdit(true)}>
        <Tooltip title="Edit">
          {editIcon()}
        </Tooltip>
      </span>
    )
  }

  return (
    <>
      <div className="w-full h-full flex justify-center p-4">
        <div className="lg:max-w-2xl">
          <div className="flex flex-col gap-4 justify-center md:justify-start">
            <div className="flex gap-4 max-[550px]:flex-col items-center">
              <CssTextField
                // error
                size="small"
                label="name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="them-dashboard-profile-input bg-container border-none rounded-lg font-poppins font-medium lg:w-full min-w-[200px] max-w-[300px]"
                sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
                color="secondary"
                disabled={!editName}
                focused
                // helperText="Incorrect entry."
                InputProps={{
                  endAdornment: editHandler(editName, setEditName, name, setName, 'name')
                }}
              />
              <CssTextField
                // error
                size="small"
                label="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="them-dashboard-profile-input bg-container border-none rounded-lg font-poppins font-medium md:w-full min-w-[200px] max-w-[300px]"
                sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
                color="secondary"
                disabled={!editEmail}
                focused
                // helperText="Incorrect entry."
                InputProps={{
                  endAdornment: editHandler(editEmail, setEditEmail, email, setEmail, 'email')
                }}
              />
            </div>
            <div className="flex gap-4 max-[550px]:flex-col items-center">
              <CssTextField
                // error
                size="small"
                label="phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="them-dashboard-profile-input bg-container border-none rounded-lg font-poppins font-medium md:w-full min-w-[200px] max-w-[300px]"
                sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
                color="secondary"
                disabled={!editPhone}
                focused
                // helperText="Incorrect entry."
                InputProps={{
                  endAdornment: editHandler(editPhone, setEditPhone, phone, setPhone, 'phone')
                }}
              />
              <CssTextField
                // error
                size="small"
                label="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="them-dashboard-profile-input bg-container border-none rounded-lg font-poppins font-medium md:w-full min-w-[200px] max-w-[300px]"
                sx={{ '& .css-nz481w-MuiInputBase-input-MuiInput-input': { color: '#7F7F7F' } }}
                color="secondary"
                disabled={!editPassword}
                focused
                // helperText="Incorrect entry."
                InputProps={{
                  endAdornment: editHandler(editPassword, setEditPassword, password, setPassword, 'password')
                }}
              />
            </div>
          </div>

          <div className="mt-12 p-1">
            <SubTitle2 className="text-light-200 them-dashboard-profile-title">your favorite category</SubTitle2>
            <div className="flex gap-4 lg:gap-16 mt-8 flex-wrap">
              <BasicButton variant="text" className={`text-light-200 them-dashboard-profile-items ${category.includes('Women') ? 'bg-[#fef5f6]' : ''}`} onClick={e => changeHandler(e, 'category')}>Women</BasicButton>
              <BasicButton variant="text" className={`text-light-200 them-dashboard-profile-items ${category.includes('Men') ? 'bg-[#fef5f6]' : ''}`} onClick={e => changeHandler(e, 'category')}>Men</BasicButton>
              <BasicButton variant="text" className={`text-light-200 them-dashboard-profile-items ${category.includes('Kids') ? 'bg-[#fef5f6]' : ''}`} onClick={e => changeHandler(e, 'category')}>Kids</BasicButton>
            </div>
          </div>

          <div className="mt-12 p-1">
            <SubTitle2 className="text-light-200 them-dashboard-profile-title">your favorite style</SubTitle2>
            <div className="flex gap-4 lg:gap-16 mt-8 flex-wrap">
              <BasicButton variant="text" className={`text-light-200 them-dashboard-profile-items ${favorite.includes('Basic') ? 'bg-[#fef5f6]' : ''}`} onClick={e => changeHandler(e, 'favorite')}>Basic</BasicButton>
              <BasicButton variant="text" className={`text-light-200 them-dashboard-profile-items ${favorite.includes('Casual') ? 'bg-[#fef5f6]' : ''}`} onClick={e => changeHandler(e, 'favorite')}>Casual</BasicButton>
              <BasicButton variant="text" className={`text-light-200 them-dashboard-profile-items ${favorite.includes('Sport') ? 'bg-[#fef5f6]' : ''}`} onClick={e => changeHandler(e, 'favorite')}>Sport</BasicButton>
              <BasicButton variant="text" className={`text-light-200 them-dashboard-profile-items ${favorite.includes('Vacation') ? 'bg-[#fef5f6]' : ''}`} onClick={e => changeHandler(e, 'favorite')}>Vacation</BasicButton>
              <BasicButton variant="text" className={`text-light-200 them-dashboard-profile-items ${favorite.includes('Party') ? 'bg-[#fef5f6]' : ''}`} onClick={e => changeHandler(e, 'favorite')}>Party</BasicButton>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile;