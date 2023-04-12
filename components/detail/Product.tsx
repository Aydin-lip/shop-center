import Image from 'next/image';
import hoodie from "@/public/images/detail/hoodie.png";
import Zoom from 'react-img-zoom';
import IProducts from '@/models/products';
import { useState } from 'react';

const Product = ({ data }: { data: IProducts }) => {
  const [zoom, setZoom] = useState<boolean>(false)
  return (
    <div className='flex flex-row items-center justify-center w-[48%] gap-4 relative'>
      <div className="w-full h-full hidden lg:block">
        <div
          className='absolute top-4 right-4 cursor-pointer bg-red-dark-100 p-1 rounded-lg flex z-[1]'
          onClick={() => setZoom(!zoom)}>
          {zoom ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-container">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
            </svg>
            :
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" fill="white" />
              <path d="M13.5 11.75H8.5C8.09 11.75 7.75 11.41 7.75 11C7.75 10.59 8.09 10.25 8.5 10.25H13.5C13.91 10.25 14.25 10.59 14.25 11C14.25 11.41 13.91 11.75 13.5 11.75Z" fill="white" />
              <path d="M11 14.25C10.59 14.25 10.25 13.91 10.25 13.5V8.5C10.25 8.09 10.59 7.75 11 7.75C11.41 7.75 11.75 8.09 11.75 8.5V13.5C11.75 13.91 11.41 14.25 11 14.25Z" fill="white" />
              <path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" fill="white" />
            </svg>
          }
        </div>
        {zoom ?
          <Zoom
            img={data.img}
            zoomScale={3}
            className='rounded'
            height={550}
            width={600}
            transitionTime={0.5}
          />
          :
          <Image
            src={data.img}
            alt={data.name}
            className='rounded w-full h-full'
            height={550}
            width={550}
          />
        }
      </div>
      <Image
        src={data.img}
        alt={data.name}
        className='rounded md:w-[360px] md:h-[360px] lg:hidden'
        height={550}
        width={550}
      />
      {/* <div className="flex flex-col justify-between items-center w-[14%]">
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
      </div> */}
    </div>
  )
}

export default Product