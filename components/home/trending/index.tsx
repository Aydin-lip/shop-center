import { useState, MouseEvent } from 'react'
import Card from "@/components/card";
import { BasicButton, Heading3 } from "@/mui/customize";
import SwiperBox from "../swiper";
import { Products } from "@/data/products";

interface IProduct {
  id: number
  name: string
  img: string
  price: number
  onSale?: number
  showOnSale?: boolean
  category: string
  star: number
}
const Trending = () => {
  const [category, setCategory] = useState<string>('all')
  const [products, setProducts] = useState<IProduct[]>(Products())
  const allProduct = Products()

  const changeCategory = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const target = e.target as HTMLElement;
    setCategory(target.innerText)
    let filterProduct = allProduct.filter(product => product.category === target.innerText)
    setProducts(filterProduct)
  }

  return (
    <>
      <div className="flex justify-between items-center mt-8 mb-6">
        <Heading3 className="text-light-300 "><span className="text-red-dark-100">Trending</span> Products</Heading3>
        <div className="flex gap-3 ">
          <BasicButton variant="text" className={`text-light-200 ${category === 'Women' ? 'bg-[#fef5f6]' : ''}`} onClick={changeCategory}>Women</BasicButton>
          <BasicButton variant="text" className={`text-light-200 ${category === 'Men' ? 'bg-[#fef5f6]' : ''}`} onClick={changeCategory}>Men</BasicButton>
          <BasicButton variant="text" className={`text-light-200 ${category === 'Kids' ? 'bg-[#fef5f6]' : ''}`} onClick={changeCategory}>Kids</BasicButton>
        </div>
      </div>
      <SwiperBox>
        {products.map(product =>
          <Card data={{ ...product, showOnSale: true }} key={product.id} />
        )}
      </SwiperBox>
    </>
  )
}

export default Trending;