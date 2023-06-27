import { useState } from 'react';
import Image from 'next/image';
// Components
import { star } from '@/helper';
// Mui
import { Heading5, Body2, Caption, SubTitle1, Heading6 } from '@/mui/customize';
import { Avatar, Pagination } from '@mui/material';
// Models
import { IComment } from '@/models/products';

interface Comment {
  id: number,
  name: string,
  star: number,
  text: string,
  date: string,
  description: string,
  image_product: string,
  image_profile: string,
  like: number,
}

const Review = ({data}: {data: IComment[]}) => {
  // States
  const [page, setPage] = useState<number>(1);
  // pages count
  const changePagination = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);

  return (
    <div className="mt-11">
      <Heading6 className="font-poppins them-detail-tab-color mb-7">Customer Review</Heading6>
      {data?.filter((comment, idx) => idx >= (page * 3) - 3 && idx <= page * 3).map((item: IComment, idx: number) =>
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 px-2 md:px-0 ${idx !== 0 && 'mt-10'}`} key={item.id}>
          <div className="flex flex-col justify-center items-start w-full md:w-[54%]">
            <div className="flex flex-row items-center justify-start">
              {/* <Image src={item.image_profile} alt="profile" width={24} height={24} className="rounded-full" /> */}
              <Avatar>{item.name[0]}</Avatar>
              <Body2 className="text-light-100 ml-2">{item.name}</Body2>
            </div>
            <div className="flex flex-row items-center justify-start mt-4">
              <div className='flex flex-row items-center justify-start gap-1'>
                {Array(5).fill({}).map((arr, idx) => idx + 1 <= item.star ? star(true, idx) : star(false, idx))}
              </div>
              <Body2 className="text-light-200 ml-2">{item.title}</Body2>
            </div>
            <Caption className="text-light-400 my-2">{item.date}</Caption>
            <SubTitle1 className="text-light-200 leading-8">{item.text}</SubTitle1>
          </div>
          {/* <div className="w-[15%] ml-[1%]">
            <Image src={hoodie} alt="product" className="w-full h-fit" />
          </div> */}
          <div className='flex flex-col gap-4 items-center md:w-[17%] ml-auto md:ml-[10%]'>
            <div className='flex flex-row items-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4034 20.9264L10.3808 20.9038L10.3555 20.8843L7.72141 18.85L8.02941 18.4516L10.7158 20.5315C10.9225 20.7195 11.2179 20.8517 11.4959 20.9377C11.7975 21.0309 12.1448 21.09 12.4799 21.09H16.2799C16.857 21.09 17.4264 20.8625 17.8748 20.5306C18.3156 20.2044 18.691 19.7385 18.8303 19.1997L21.2425 11.8732C21.4377 11.3309 21.4284 10.749 21.0963 10.2887C20.7581 9.81377 20.1841 9.58999 19.5799 9.58999H15.5799C15.2029 9.58999 14.8612 9.43143 14.6274 9.16215L14.6267 9.16142C14.3871 8.88649 14.2754 8.51549 14.3342 8.11501L14.832 4.9195C14.9976 4.10521 14.4662 3.24597 13.7051 2.98804C13.3275 2.85165 12.9295 2.89129 12.6098 2.99839C12.2947 3.10396 11.9769 3.30172 11.7878 3.57673L11.7878 3.57671L11.7849 3.58107L7.96327 9.26689L7.55429 8.99314L11.3748 3.30891L11.3752 3.30836C11.8761 2.56103 13.0106 2.19028 13.8724 2.51744L13.8831 2.52151L13.894 2.52509C14.9041 2.8564 15.5557 3.98765 15.3314 5.01314L15.3282 5.02805L15.3258 5.04314L14.8358 8.19314L14.8358 8.19313L14.8349 8.19928C14.8182 8.31642 14.7978 8.60268 15.0136 8.84924L15.0245 8.86177L15.0363 8.87354C15.183 9.02026 15.3815 9.09999 15.5899 9.09999H19.5899C20.4305 9.09999 21.1174 9.44886 21.5111 10.0079L21.5122 10.0095C21.8962 10.5502 21.9906 11.2849 21.72 12.0291L21.7173 12.0365L21.7148 12.044L19.3248 19.324L19.3196 19.34L19.3154 19.3564C19.0055 20.5707 17.6764 21.6 16.2799 21.6H12.4799C12.2408 21.6 11.84 21.5625 11.4295 21.4512C11.0121 21.338 10.6403 21.1633 10.4034 20.9264Z" fill="#424242" stroke="#424242" />
                <path d="M5.37988 21H4.37988C2.52988 21 1.62988 20.13 1.62988 18.35V8.55002C1.62988 6.77002 2.52988 5.90002 4.37988 5.90002H5.37988C7.22988 5.90002 8.12988 6.77002 8.12988 8.55002V18.35C8.12988 20.13 7.22988 21 5.37988 21ZM4.37988 7.40002C3.28988 7.40002 3.12988 7.66002 3.12988 8.55002V18.35C3.12988 19.24 3.28988 19.5 4.37988 19.5H5.37988C6.46988 19.5 6.62988 19.24 6.62988 18.35V8.55002C6.62988 7.66002 6.46988 7.40002 5.37988 7.40002H4.37988Z" fill="#424242" />
              </svg>
              <Body2 className="text-dark-100 ml-2.5">Helpful ({item.like})</Body2>
            </div>
            <Body2 className="text-light-100 ml-[10%]">Report</Body2>
          </div>
        </div>
      )}
      <Pagination
        className="mt-11 mb-14 flex justify-center"
        count={Math.ceil(data.length / 3)}
        color="primary"
        size="large"
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={changePagination}
      />
    </div>
  )
}

export default Review