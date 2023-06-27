import { useRouter } from "next/router";
import { useState } from 'react'
// Mui
import { Body2, Heading3 } from "@/mui/customize";
// Components
import Card from "../card";
// Models
import IProducts from "@/models/products";

const OnSaleProducts = ({ products }: { products: IProducts[] }) => {
  // States
  const [showMore, setShowMore] = useState<boolean>(false)
  
  const router = useRouter()

  return (
    <>
      <div className={`them-home-onSale-bg relative pb-10 overflow-hidden ${showMore ? '' : 'h-[56rem]'}`}>
        <div className='absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-container to-[transparent]' style={{ filter: 'contrast(0.5)' }}>
          <span className='cursor-pointer font-bold underline' onClick={() => setShowMore(!showMore)}>
            {showMore ? '- Less' : '+ More'}
          </span>
        </div>
        <div className="container m-auto mb-6">
          <div className="flex justify-between items-center py-6 max-[640px]:px-2">
            <Heading3 className="text-light-300 cursor-default max-[768px]:text-2xl them-home-onSale-title"><span className="text-red-dark-100">On Sale</span> Products</Heading3>
            <Body2 className="text-red-dark-100 cursor-pointer font-semibold" onClick={() => router.replace('/category')}>View All</Body2>
          </div>
          <div className="flex flex-wrap justify-center gap-y-8 gap-x-4">
            {products.map((product, i) => product.onSale > 0 && i <= 11 ?
              <Card data={product} key={product._id} /> : ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default OnSaleProducts;