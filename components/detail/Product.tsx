import Image from 'next/image';
import hoodie from "@/public/images/detail/hoodie.png";
import Zoom from 'react-img-zoom';

const Product = () => {
  return (
    <div className='flex flex-row items-center justify-center w-[48%] gap-4'>
      <Zoom
        img='https://m.media-amazon.com/images/I/6160rBUSiHL._AC_UX385_.jpg'
        zoomScale={3}
        className='rounded'
        height={550}
        width={600}
        transitionTime={0.5}
      />
      <div className="flex flex-col justify-between items-center w-[14%]">
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
        <Image className='w-auto h-24 cursor-pointer' src={hoodie} alt="image product" />
      </div>
    </div>
  )
}

export default Product