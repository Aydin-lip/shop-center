import { useRouter } from 'next/router';
import { useState, useMemo } from 'react'
// Components
import Card from "@/components/card";
import SwiperBox from "../swiper";
// Mui
import { BasicButton, Heading3, Heading5 } from "@/mui/customize";
// Models
import IProducts from '@/models/products';

interface IProps {
  from: string
  products: IProducts[]
}
const TrendingProducts = ({ from, products }: IProps) => {
  // States
  const [category, setCategory] = useState<string>('Women')
  const [productState, setProductState] = useState<IProducts[]>(products)

  const router = useRouter()

  // Change state category for show category product
  const changeCategory = (target: string) => {
    setCategory(target)
    let filterProduct = products.filter(product => product.category === target)
    setProductState(filterProduct)
  }

  useMemo(() => {
    // Check path for change category
    if (router.asPath) {
      const path = router.asPath.split('#')[1]
      if (['Women', 'Men', 'Kids'].includes(path)) {
        changeCategory(path)
      }
    }
  }, [router.asPath])

  return (
    <div className={`container mx-auto ${from !== 'home' && 'mb-24'}`}>
      <div className={`flex justify-between max-[470px]:flex-col max-[470px]:gap-4 items-center ${from === 'home' ? 'mt-8' : 'mt-11'} mb-6`}>
        {from === 'home' ?
          <Heading3
            className="text-light-300 cursor-default max-[768px]:text-2xl mr-auto max-[640px]:px-2 them-home-trending-title">
            <span className="text-red-dark-100">Trending</span> Products
          </Heading3> :
          <Heading5 className="text-light-200 max-[768px]:text-2xl mr-auto max-[640px]:px-2">Related Product</Heading5>
        }
        {from === 'home' &&
          <div className="flex gap-3 ml-auto them-home-trending-items">
            <BasicButton variant="text" className={`text-light-200 ${category === 'Women' ? 'bg-[#fef5f6]' : ''}`} onClick={() => changeCategory("Women")}>Women</BasicButton>
            <BasicButton variant="text" className={`text-light-200 ${category === 'Men' ? 'bg-[#fef5f6]' : ''}`} onClick={() => changeCategory("Men")}>Men</BasicButton>
            <BasicButton variant="text" className={`text-light-200 ${category === 'Kids' ? 'bg-[#fef5f6]' : ''}`} onClick={() => changeCategory("Kids")}>Kids</BasicButton>
          </div>
        }
      </div>
      <SwiperBox>
        {productState?.map(product =>
          <Card data={{ ...product, showOnSale: true }} key={product._id} />
        )}
      </SwiperBox>
    </div>
  )
}

export default TrendingProducts;