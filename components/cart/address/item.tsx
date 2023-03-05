import { Dispatch, SetStateAction, useState } from 'react'
import { BasicButton, SubTitle1 } from "@/mui/customize";
import { TextField } from "@mui/material";
import { IAddress } from '@/models/cart';

interface IProps {
  data: IAddress
  addres: IAddress[]
  setAddres: Dispatch<SetStateAction<IAddress[]>>
}
const Item = ({ data, addres, setAddres }: IProps) => {
  const [edit, setEdit] = useState<boolean>(data.title.length <= 0)

  const openEdit = () => setEdit(true)
  const closeEdit = () => setEdit(false)

  let title = data.title
  let address = data.address
  let phone = data.phone

  const saveChange = () => {
    let addressFilter = addres.filter(a => a.id !== data.id)
    addressFilter.push({ id: data.id, title, address, phone })
    setAddres(addressFilter)
    setEdit(false)
  }

  return (
    <>
      <div className="flex gap-4 pt-8 pb-6">
        {edit ?
          <TextField
            size="small"
            variant="outlined"
            placeholder="title"
            defaultValue={data.title}
            color='secondary'
            onChange={e => title = e.target.value} />
          :
          <SubTitle1 className="text-light-300">{data.title}</SubTitle1>
        }
      </div>
      <div className="w-[590px] leading-8 text-light-100 mt-0">
        {edit ?
          <TextField
            size="small"
            rows={3}
            variant="outlined"
            multiline
            placeholder="address"
            defaultValue={data.address}
            color='secondary'
            className="w-full"
            onChange={e => address = e.target.value} />
          :
          data.address
        }
        <span className="block">phone number:
          {edit ?
            <TextField
              size="small"
              variant="outlined"
              placeholder="phone number"
              defaultValue={data.phone}
              color="secondary"
              onChange={e => phone = e.target.value} />
            :
            <span className="text-light-300"> {data.phone}</span>
          }
        </span>
      </div>
      <div className="py-8 flex gap-6">
        {edit ?
          <>
            <BasicButton variant="outlined" color="secondary" onClick={closeEdit}>Cancle</BasicButton>
            <BasicButton variant="outlined" color="success" onClick={saveChange}>Save</BasicButton>
          </>
          :
          <>
            <BasicButton
              variant="outlined"
              color="secondary"
              startIcon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#7F7F7F" />
                <path d="M9.16986 15.58C8.97986 15.58 8.78986 15.51 8.63986 15.36C8.34986 15.07 8.34986 14.59 8.63986 14.3L14.2999 8.63999C14.5899 8.34999 15.0699 8.34999 15.3599 8.63999C15.6499 8.92999 15.6499 9.40998 15.3599 9.69998L9.69986 15.36C9.55986 15.51 9.35986 15.58 9.16986 15.58Z" fill="#7F7F7F" />
                <path d="M14.8299 15.58C14.6399 15.58 14.4499 15.51 14.2999 15.36L8.63986 9.69998C8.34986 9.40998 8.34986 8.92999 8.63986 8.63999C8.92986 8.34999 9.40986 8.34999 9.69986 8.63999L15.3599 14.3C15.6499 14.59 15.6499 15.07 15.3599 15.36C15.2099 15.51 15.0199 15.58 14.8299 15.58Z" fill="#7F7F7F" />
              </svg>
              }>Remove</BasicButton>
            <BasicButton
              variant="outlined"
              color="secondary"
              className="text-[#8EAAF2] border-[#8EAAF2]"
              startIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.53999 19.52C4.92999 19.52 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.09999C14.77 0.929988 16.91 0.869988 19.08 2.91999C21.25 4.96999 21.31 7.10999 19.26 9.27999L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.94L6.01999 19.49C5.84999 19.5 5.69999 19.52 5.53999 19.52ZM15.93 2.90999C15.16 2.90999 14.49 3.38999 13.81 4.10999L5.59999 12.81C5.39999 13.02 5.16999 13.52 5.12999 13.81L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.45C9.26999 17.4 9.74999 17.14 9.94999 16.93L18.16 8.23999C19.4 6.91999 19.85 5.69999 18.04 3.99999C17.24 3.22999 16.55 2.90999 15.93 2.90999Z" fill="#8EAAF2" />
                  <path d="M17.3399 10.95C17.3199 10.95 17.2899 10.95 17.2699 10.95C14.1499 10.64 11.6399 8.27 11.1599 5.17C11.0999 4.76 11.3799 4.38 11.7899 4.31C12.1999 4.25 12.5799 4.53 12.6499 4.94C13.0299 7.36 14.9899 9.22 17.4299 9.46C17.8399 9.5 18.1399 9.87 18.0999 10.28C18.0499 10.66 17.7199 10.95 17.3399 10.95Z" fill="#8EAAF2" />
                  <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#8EAAF2" />
                </svg>
              } onClick={openEdit}>Edit</BasicButton>
          </>
        }
      </div>
    </>
  )
}

export default Item;