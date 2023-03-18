import { useState } from 'react';
import { Heading6, SubTitle2, Heading5, SubTitle1, Body1, BasicButton, ButtonWithIcon } from '@/mui/customize';
import { Button } from '@mui/material';
import IProducts from '@/models/products';

const listSize = ['XS', 'S', 'M', 'L', 'XL'];
const listColors = ['#F58289', '#CBC0B9', '#D5641B', '#456BF1', '#80838F', '#3B3D43'];

const Details = ({ data }: { data: IProducts }) => {

  const [currencySize, setCurrencySize] = useState<string>(listSize[0]);
  const [currencyColor, setCurrencyColor] = useState<string>(listColors[0]);

  return (
    <div className="flex flex-col justify-center items-start w-[48%]">
      <Heading6 className='text-light-200 !font-poppins'>{data.name}</Heading6>
      <div className='flex flex-row items-center justify-start text-light-100 mt-5'>
        <div className='flex flex-row items-center'>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9686 4.5341C11.9301 4.41022 11.8576 4.30087 11.7601 4.21961C11.6626 4.13836 11.5443 4.08878 11.4201 4.07703L7.95604 3.74886L6.58704 0.404284C6.48595 0.158559 6.25598 0 5.99999 0C5.74401 0 5.51394 0.158559 5.41351 0.404284L4.04451 3.74886L0.579941 4.07703C0.325946 4.10149 0.110881 4.28101 0.031427 4.5341C-0.00728901 4.65808 -0.0103006 4.79119 0.0227653 4.91694C0.0558312 5.04269 0.123522 5.15556 0.217452 5.24156L2.83599 7.63752L2.06393 11.186C2.00744 11.4469 2.10447 11.7167 2.31194 11.8732C2.42061 11.9557 2.55156 12.0001 2.68594 12C2.80113 12 2.91416 11.9674 3.01297 11.9056L5.99999 10.0419L8.98648 11.9056C9.09361 11.9725 9.21721 12.0051 9.34193 11.9993C9.46665 11.9936 9.58701 11.9497 9.68806 11.8732C9.89551 11.7167 9.99257 11.4469 9.93608 11.186L9.164 7.63755L11.7825 5.24158C11.8765 5.15559 11.9442 5.04272 11.9772 4.91697C12.0103 4.79122 12.0073 4.6581 11.9686 4.53412V4.5341Z" fill="#FFC107" />
          </svg>
          <Body1 className='!font-poppins text-light-100'>4.5</Body1>
        </div>
        <SubTitle2 className='!font-poppins text-light-100 ml-9'>523 review</SubTitle2>
        <SubTitle2 className='!font-poppins text-light-100 ml-9'>654 sold</SubTitle2>
      </div>
      <div className='flex flex-row items-center justify-start my-8'>
        <Heading5 className='text-light-200 !font-poppins'>{data.onSale > 1 ? (data.price - (data.price / 100) * data.onSale).toFixed(1) : data.price}$</Heading5>
        {data.onSale > 1 &&
          <SubTitle1 className='text-dark-300 line-through ml-7 !font-poppins'>{data.onSale}$</SubTitle1>
        }
      </div>
      <div className='flex flex-row items-center justify-start'>
        <Heading6 className='text-light-200 !font-poppins mr-4'>Size:</Heading6>
        <div className='flex flex-row items-center justify-start'>
          {data.size.map((item, index) =>
            <BasicButton
              color={item === currencySize ? 'primary' : 'secondary'}
              onClick={() => setCurrencySize(item)}
              className='ml-4 min-w-0 min-h-0 w-10 h-10'
              variant="outlined"
              key={index}
            >
              {item}
            </BasicButton>
          )}
        </div>
      </div>
      <div className='flex flex-row items-center justify-start my-8'>
        <Heading6 className='text-light-200 !font-poppins mr-4'>Color:</Heading6>
        {data.color.map(color =>
          <Button
            variant='text'
            className={`ml-4 min-w-0 w-10 h-10 rounded-full ${color === currencyColor && 'outline outline-offset-2 outline-1'}`}
            sx={{ background: color, outlineColor: color }}
            onClick={() => setCurrencyColor(color)}
            key={color}
          ></Button>
        )}
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row items-center justify-start">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9998 14.75H11.9998C11.5898 14.75 11.2498 14.41 11.2498 14C11.2498 13.59 11.5898 13.25 11.9998 13.25H12.9998C13.6898 13.25 14.2498 12.69 14.2498 12V2.75H5.99978C4.81978 2.75 3.73975 3.38998 3.15975 4.41998C2.95975 4.77998 2.49979 4.91002 2.13979 4.71002C1.77979 4.51002 1.64975 4.05 1.84975 3.69C2.68975 2.19 4.27978 1.25 5.99978 1.25H14.9998C15.4098 1.25 15.7498 1.59 15.7498 2V12C15.7498 13.52 14.5198 14.75 12.9998 14.75Z" fill="#008A04" />
            <path d="M19 20.75H18C17.59 20.75 17.25 20.41 17.25 20C17.25 19.31 16.69 18.75 16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.41 14.41 20.75 14 20.75H10C9.59 20.75 9.25 20.41 9.25 20C9.25 19.31 8.69 18.75 8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.41 6.41 20.75 6 20.75H5C2.93 20.75 1.25 19.07 1.25 17C1.25 16.59 1.59 16.25 2 16.25C2.41 16.25 2.75 16.59 2.75 17C2.75 18.24 3.76 19.25 5 19.25H5.34998C5.67998 18.1 6.74 17.25 8 17.25C9.26 17.25 10.32 18.1 10.65 19.25H13.36C13.69 18.1 14.75 17.25 16.01 17.25C17.27 17.25 18.33 18.1 18.66 19.25H19C20.24 19.25 21.25 18.24 21.25 17V14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.03 8.25 19 8.25L17.93 6.38C17.71 5.99 17.29 5.75 16.84 5.75H15.75V12C15.75 13.52 14.52 14.75 13 14.75H12C11.59 14.75 11.25 14.41 11.25 14C11.25 13.59 11.59 13.25 12 13.25H13C13.69 13.25 14.25 12.69 14.25 12V5C14.25 4.59 14.59 4.25 15 4.25H16.84C17.83 4.25 18.74 4.78001 19.23 5.64001L20.94 8.63C21.07 8.86 21.07 9.15 20.94 9.38C20.81 9.61 20.56 9.75 20.29 9.75H19C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H22C22.41 13.25 22.75 13.59 22.75 14V17C22.75 19.07 21.07 20.75 19 20.75Z" fill="#008A04" />
            <path d="M8 22.75C6.48 22.75 5.25 21.52 5.25 20C5.25 18.48 6.48 17.25 8 17.25C9.52 17.25 10.75 18.48 10.75 20C10.75 21.52 9.52 22.75 8 22.75ZM8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.69 7.31 21.25 8 21.25C8.69 21.25 9.25 20.69 9.25 20C9.25 19.31 8.69 18.75 8 18.75Z" fill="#008A04" />
            <path d="M16 22.75C14.48 22.75 13.25 21.52 13.25 20C13.25 18.48 14.48 17.25 16 17.25C17.52 17.25 18.75 18.48 18.75 20C18.75 21.52 17.52 22.75 16 22.75ZM16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.69 15.31 21.25 16 21.25C16.69 21.25 17.25 20.69 17.25 20C17.25 19.31 16.69 18.75 16 18.75Z" fill="#008A04" />
            <path d="M22 14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.04 8.25 19 8.25H20.29C20.56 8.25 20.81 8.39 20.94 8.63L22.65 11.63C22.71 11.74 22.75 11.87 22.75 12V14C22.75 14.41 22.41 14.75 22 14.75ZM19 9.75C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H21.25V12.2L19.85 9.75H19Z" fill="#008A04" />
            <path d="M8 8.75H2C1.59 8.75 1.25 8.41 1.25 8C1.25 7.59 1.59 7.25 2 7.25H8C8.41 7.25 8.75 7.59 8.75 8C8.75 8.41 8.41 8.75 8 8.75Z" fill="#008A04" />
            <path d="M6 11.75H2C1.59 11.75 1.25 11.41 1.25 11C1.25 10.59 1.59 10.25 2 10.25H6C6.41 10.25 6.75 10.59 6.75 11C6.75 11.41 6.41 11.75 6 11.75Z" fill="#008A04" />
            <path d="M4 14.75H2C1.59 14.75 1.25 14.41 1.25 14C1.25 13.59 1.59 13.25 2 13.25H4C4.41 13.25 4.75 13.59 4.75 14C4.75 14.41 4.41 14.75 4 14.75Z" fill="#008A04" />
          </svg>
          <SubTitle2 className="text-dark-400 ml-3 !font-poppins">Free Shipping</SubTitle2>
        </div>
        <div className="flex flex-row items-center mt-4 justify-start">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.11 16.44V21.44V16.44Z" fill="#008A04" />
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="#008A04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <SubTitle2 className="text-dark-400 ml-3 !font-poppins">10 days return policy</SubTitle2>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-12 w-full">
        <ButtonWithIcon
          className="flex flex-row items-center justify-center w-[55%] h-10"
          variant='contained'
        >
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.69 17.75H8.04C7.05 17.75 6.1 17.33 5.43 16.6C5.09767 16.2381 4.84355 15.8115 4.68353 15.347C4.52351 14.8824 4.46104 14.3898 4.5 13.9L5.33 3.94C5.36 3.63 5.25 3.33 5.04 3.1C4.83 2.87 4.54 2.75 4.23 2.75H2.5C2.09 2.75 1.75 2.41 1.75 2C1.75 1.59 2.09 1.25 2.5 1.25H4.24C4.97 1.25 5.66 1.56 6.15 2.09C6.42 2.39 6.62 2.74 6.73 3.13H19.22C20.23 3.13 21.16 3.53 21.84 4.25C22.51 4.98 22.85 5.93 22.77 6.94L22.23 14.44C22.12 16.27 20.52 17.75 18.69 17.75ZM6.78 4.62L6 14.02C5.95 14.6 6.14 15.15 6.53 15.58C6.92 16.01 7.46 16.24 8.04 16.24H18.69C19.73 16.24 20.67 15.36 20.75 14.32L21.29 6.82C21.3137 6.53647 21.2779 6.25111 21.1848 5.98225C21.0917 5.71339 20.9434 5.46698 20.7494 5.25885C20.5554 5.05073 20.32 4.88548 20.0583 4.77374C19.7966 4.66199 19.5145 4.60622 19.23 4.61H6.78V4.62ZM16.75 22.75C15.65 22.75 14.75 21.85 14.75 20.75C14.75 19.65 15.65 18.75 16.75 18.75C17.85 18.75 18.75 19.65 18.75 20.75C18.75 21.85 17.85 22.75 16.75 22.75ZM16.75 20.25C16.47 20.25 16.25 20.47 16.25 20.75C16.25 21.03 16.47 21.25 16.75 21.25C17.03 21.25 17.25 21.03 17.25 20.75C17.25 20.47 17.03 20.25 16.75 20.25ZM8.75 22.75C7.65 22.75 6.75 21.85 6.75 20.75C6.75 19.65 7.65 18.75 8.75 18.75C9.85 18.75 10.75 19.65 10.75 20.75C10.75 21.85 9.85 22.75 8.75 22.75ZM8.75 20.25C8.47 20.25 8.25 20.47 8.25 20.75C8.25 21.03 8.47 21.25 8.75 21.25C9.03 21.25 9.25 21.03 9.25 20.75C9.25 20.47 9.03 20.25 8.75 20.25Z" fill="white" />
            <path d="M21.5 8.75H9.5C9.09 8.75 8.75 8.41 8.75 8C8.75 7.59 9.09 7.25 9.5 7.25H21.5C21.91 7.25 22.25 7.59 22.25 8C22.25 8.41 21.91 8.75 21.5 8.75Z" fill="white" />
          </svg>
          <SubTitle2 className="text-container text-sm ml-1">Add To Cart</SubTitle2>
        </ButtonWithIcon>
        <ButtonWithIcon
          className="flex flex-row items-center justify-center w-[40%] h-10"
          variant='text'
          color="secondary"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3094 21.0495L11.3094 21.0495L11.3022 21.047C9.47224 20.4195 7.07073 18.9765 5.13174 16.8528C3.19727 14.7341 1.75 11.9692 1.75 8.68998C1.75 5.46406 4.3582 2.84998 7.56 2.84998C9.11753 2.84998 10.5695 3.45733 11.6449 4.54202L12 4.90011L12.3551 4.54202C13.4305 3.45733 14.8825 2.84998 16.44 2.84998C19.6413 2.84998 22.25 5.47354 22.25 8.68998C22.25 11.9743 20.8026 14.7392 18.8684 16.8565C16.9295 18.9788 14.528 20.4194 12.6978 21.047L12.6978 21.047L12.6906 21.0495C12.511 21.1142 12.2722 21.15 12 21.15C11.7278 21.15 11.489 21.1142 11.3094 21.0495ZM11.4682 20.5831L11.4719 20.5843C11.6379 20.6397 11.8437 20.655 12.005 20.655C12.1663 20.655 12.3721 20.6397 12.5381 20.5843L12.5381 20.5843L12.5424 20.5829C13.7588 20.1651 16.0443 18.9819 18.0332 17.0251C20.0283 15.0623 21.76 12.284 21.76 8.68998C21.76 5.74653 19.3788 3.34998 16.45 3.34998C14.7711 3.34998 13.2121 4.13547 12.208 5.4926L12.2075 5.49338C12.1781 5.53319 12.111 5.57498 12.01 5.57498C11.909 5.57498 11.8419 5.53319 11.8125 5.49338L11.8125 5.49337L11.81 5.48998C10.7866 4.12544 9.23908 3.34998 7.56 3.34998C4.63116 3.34998 2.25 5.74653 2.25 8.68998C2.25 12.2789 3.97909 15.0571 5.97286 17.0212C7.96037 18.9791 10.246 20.1651 11.4682 20.5831Z" fill="#424242" stroke="#424242" />
          </svg>
          <SubTitle2 className="text-light-200 text-sm ml-1">Add to Favorites</SubTitle2>
        </ButtonWithIcon>
      </div>
    </div>
  )
}

export default Details;