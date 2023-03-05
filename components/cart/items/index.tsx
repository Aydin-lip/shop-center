import { IBag } from "@/models/cart";
import Item from "./item";
import { Dispatch, SetStateAction, useEffect } from "react";
import Products from "@/data/products";

interface IProps {
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
const Items = ({ bag, price, setPrice }: IProps) => {
  const allProducts = Products()

  useEffect(() => {
    let bagPrice: {
      id: number
      price: number
      discount: number
    }[] = []
    bag.map(b => {
      let product = allProducts.find(p => p.id === b.id_product)
      if (product) {
        bagPrice.push({ id: b.id, price: b.count * product.price, discount: b.count * (product.price - (product.price - (product.price / 100) * product.onSale)) })
      }
    })
    setPrice(bagPrice)
  }, [])

  return (
    <>
      <div className="flex flex-col gap-8 max-h-[600px] overflow-y-auto">
        {bag.map(b =>
          <Item data={b} product={allProducts.find(p => p.id === b.id_product)} price={price} setPrice={setPrice} key={b.id} />
        )}
      </div>
    </>
  )
}

export default Items;