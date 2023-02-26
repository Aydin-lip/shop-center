import { useState } from 'react';
import { Heading6, SubTitle2 } from '@/mui/customize'
import { ButtonGroup, TextField, Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const listFilter = ['T-shirt', 'Dress', 'Top', 'Skirt', 'Hoodie'];

const ListCart = () => {

  const [age, setAge] = useState('Popular');

  const handleChange = (event: SelectChangeEvent) => setAge(event.target.value as string);

  return (
    <div className='w-[73%]'>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start">
          <Heading6>Category:</Heading6>
          <ul className="list-none flex flex-row items-center justify-start">
            {listFilter.map((item, idx) =>
              <li
                className={`relative transition-all duration-500 ${idx !== 0 && 'ml-6'}`}
                key={item}
              >
                <SubTitle2
                  className="after:w-0 after:h-0 hover:after:content-[''] hover:after:w-full hover:after:h-0.5 
                  hover:after:bg-red-light-800 hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] 
                  transition duration-300 ease-in-out delay-150 cursor-pointer"
                >{item}</SubTitle2>
              </li>
            )}
          </ul>
        </div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#7F7F7F" />
              <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#7F7F7F" />
              <path d="M14 17.75H10C9.59 17.75 9.25 17.41 9.25 17C9.25 16.59 9.59 16.25 10 16.25H14C14.41 16.25 14.75 16.59 14.75 17C14.75 17.41 14.41 17.75 14 17.75Z" fill="#7F7F7F" />
            </svg>
          </Button>
          <Select
            value={age}
            onChange={handleChange}
            variant="outlined"
            color="secondary"
            size="small"
            sx={{ width: '135px', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <MenuItem value='Popular'>Popular</MenuItem>
            <MenuItem value='Popular2'>Popular2</MenuItem>
            <MenuItem value='Popular3'>Popular3</MenuItem>
          </Select>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default ListCart