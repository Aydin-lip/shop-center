import { useState, MouseEvent } from 'react'
import Card from "@/components/card";
import { BasicButton, Heading3, Heading5 } from "@/mui/customize";
import SwiperBox from "../swiper";
import Products from "@/data/products";

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

interface IProps {
  from: string
}

const TrendingProducts = ({ from }: IProps) => {
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
    <div className={`container mx-auto ${from !== 'home' && 'mb-24'}`}>
      <div className={`flex justify-between items-center ${from === 'home' ? 'mt-8' : 'mt-11'} mb-6`}>
        {from === 'home' ?
          <Heading3
            className="text-light-300 cursor-default">
            <span className="text-red-dark-100">Trending</span> Products
          </Heading3> :
          <Heading5 className="text-light-200">Related Product</Heading5>

        }
        {from === 'home' &&
          <div className="flex gap-3 ">
            <BasicButton variant="text" className={`text-light-200 ${category === 'Women' ? 'bg-[#fef5f6]' : ''}`} onClick={changeCategory}>Women</BasicButton>
            <BasicButton variant="text" className={`text-light-200 ${category === 'Men' ? 'bg-[#fef5f6]' : ''}`} onClick={changeCategory}>Men</BasicButton>
            <BasicButton variant="text" className={`text-light-200 ${category === 'Kids' ? 'bg-[#fef5f6]' : ''}`} onClick={changeCategory}>Kids</BasicButton>
          </div>
        }
      </div>
      <SwiperBox>
        {products.map(product =>
          <Card data={{ ...product, showOnSale: true }} key={product.id} />
        )}
      </SwiperBox>
    </div>
  )
}

export default TrendingProducts;