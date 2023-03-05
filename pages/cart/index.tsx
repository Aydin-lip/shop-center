import Address from "@/components/cart/address";
import Items from "@/components/cart/items";
import OrderSummary from "@/components/cart/orderSummary";
import RelatedProduct from "@/components/cart/related";
import StepperCart from "@/components/cart/stepper";
import Layout from "@/components/layout";
import { IBag } from "@/models/cart";
import { Heading5 } from "@/mui/customize";
import { useState } from "react";

const Cart = () => {
  const [step, setStep] = useState<number>(1)
  const [price, setPrice] = useState<{ id: number, price: number, discount: number }[]>([])
  const [bag, setBag] = useState<IBag[]>([{
    id: 1,
    id_product: 3,
    size: 'M',
    color: 'purple',
    count: 2
  }, {
    id: 2,
    id_product: 7,
    size: 'L',
    color: 'black',
    count: 1
  }])

  return (
    <>
      <Layout title="Cart">
        <div className="container m-auto">
          <StepperCart step={step} />
          <Heading5 className="text-light-300">{step === 1 ? 'Your Items' : 'Select Delivery Address'}</Heading5>
          <div className="flex justify-center gap-4 mt-8">
            {step === 1 ?
              <Items bag={bag} price={price} setPrice={setPrice} />
              :
              <Address />
            }
            <OrderSummary step={step} setStep={setStep} total={price} />
          </div>
          {step === 1 ?
            <RelatedProduct />
            :
            <div className="m-20 p-20"></div>
          }
        </div>
      </Layout>
    </>
  )
}

export default Cart;