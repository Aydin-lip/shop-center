import { Body2, Heading3 } from "@/mui/customize";
import Card from "../card";
import IProducts from "@/models/products";

const OnSaleProducts = ({products}: {products: IProducts[]}) => {
  return (
    <>
      <div>
        <div className="bg-[#FFF5F1] pb-10">
          <div className="container m-auto mb-6">
            <div className="flex justify-between items-center py-6">
              <Heading3 className="text-light-300 cursor-default"><span className="text-red-dark-100">On Sale</span> Products</Heading3>
              <Body2 className="text-red-dark-100 cursor-pointer">View All</Body2>
            </div>
            <div className="flex flex-wrap justify-center gap-y-8 gap-x-4">
              {products.map((product, i) => product.onSale > 0 && i <= 11 ?
                <Card data={product} key={product._id} /> : ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnSaleProducts;