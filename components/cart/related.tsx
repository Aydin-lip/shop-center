import Products from "@/data/products";
import { Heading5 } from "@/mui/customize";
import Card from "../card";

const RelatedProduct = () => {
  const allProducts = Products()
  let products = allProducts.filter(p => [1, 2, 5, 9].includes(p.id))

  return (
    <>
      <div className="my-48">
        <Heading5 className="text-light-300">RelatedProduct</Heading5>
        <div className="flex">
          {products.map(p => <Card data={p} key={p.id} />)}
        </div>
      </div>
    </>
  )
}

export default RelatedProduct;