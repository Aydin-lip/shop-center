import Item from "./item";
import { Dispatch, SetStateAction, useEffect } from "react";
// Modals
import IProducts from "@/models/products";
import { IBag } from "@/models/user";

interface IProps {
  products: IProducts[]
  bag: IBag[]
  price: {
    id: number;
    price: number;
    discount: number;
  }[]
  setPrice: Dispatch<SetStateAction<{
    id: number;
    price: number;
    discount: number;
  }[]>>
}
const Items = ({ products, bag, price, setPrice }: IProps) => {

  useEffect(() => {
    // Create price obj product 
    let bagPrice: {
      id: number
      price: number
      discount: number
    }[] = []
    bag.map(b => {
      let product = products.find(p => p._id === b.product_id)
      if (product) {
        bagPrice.push({
          id: b.id,
          price: b.count.length * product.price,
          discount: b.count.length * (product.price - (product.price - (product.price / 100) * product.onSale))
        })
      }
    })
    setPrice(bagPrice) // set price in state
  }, [])

  return (
    <>
      <div className="flex flex-col gap-8 min-[600px]:max-h-[600px] overflow-y-auto w-[350px] min-[600px]:w-full xl:w-auto">
        {bag.map(b =>
          <Item data={b} product={products.find(p => p._id === b.product_id)} price={price} setPrice={setPrice} key={b.id} />
        )}
      </div>
    </>
  )
}

export default Items;