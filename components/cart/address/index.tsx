import { useState } from 'react'
// Mui
import { Heading6 } from "@/mui/customize";
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
// Components
import Item from './item';
// Modals
import { IAddress } from '@/models/user';
// Context
import { useAppContext } from '@/context/state';
// Api
import { cartAddAddress } from '@/services/http.service';


const Address = ({ address }: { address: IAddress[] }) => {
  // States
  const [loading, setLoading] = useState<boolean>(false)

  const { info, setInfo } = useAppContext()

  // Function add new address to list address's
  const addNewAddress = () => {
    if (!loading) {
      setLoading(true)
      // List data
      const id = address[address.length - 1] ? address[address.length - 1].id + 1 : 1
      const newAddress = { // Default data address
        title: 'Title',
        detail: 'Address',
        phone: '09'
      }
      cartAddAddress(newAddress) // Send address
        .then(res => {
          setInfo({ ...info, cart: { ...info.cart, address: [...address, { ...newAddress, id }] } }) // Save context
          setLoading(false)
        })
        .catch(err => setLoading(false))
    }
  }

  return (
    <>
      <div className="w-full max-w-[800px] min-h-[450px] border border-dark-100 border-solid">
        <div className="pl-8">

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue='1'
              name="radio-buttons-group"
            >
              {address.map(a =>
                <FormControlLabel key={a.id} value={`${a.id}`} className='items-start' control={<Radio style={{ marginBottom: "auto", paddingTop: "2rem" }} />} label={
                  <Item data={a} />
                } />
              )}
            </RadioGroup>
          </FormControl>

          <div className={`mx-4 my-16 flex gap-2 ml-[-.5rem] ${loading ? "cursor-progress opacity-70" : "cursor-pointer"}`} onClick={addNewAddress}>
            <span className="flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#DD0426" />
                <path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill="#DD0426" />
                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#DD0426" />
              </svg>
            </span>
            <Heading6 className="text-red-dark-100">Add new Address</Heading6>
          </div>

        </div>
      </div>
    </>
  )
}

export default Address;