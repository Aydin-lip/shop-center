import { Heading5 } from "@/mui/customize";
import Card from "../card";
import SwiperBox from "../home/swiper";
import IProducts from "@/models/products";

const RelatedProduct = ({products}: {products: IProducts[]}) => {
  return (
    <>
      <div className="my-48">
        <Heading5 className="text-light-300">RelatedProduct</Heading5>
        <div className="">
          <SwiperBox>
            {products?.map(product =>
              <Card data={{ ...product, showOnSale: true }} key={product._id} />
            )}
          </SwiperBox>
        </div>
      </div>
    </>
  )
}

export default RelatedProduct;