import Address from "@/components/cart/address";
import Items from "@/components/cart/items";
import OrderSummary from "@/components/cart/orderSummary";
import RelatedProduct from "@/components/cart/related";
import StepperCart from "@/components/cart/stepper";
import Layout from "@/components/layout";
import { useAppContext } from "@/context/state";
import IProducts from "@/models/products";
import { Heading5 } from "@/mui/customize";
import { getAllProduct } from "@/services/http.service";
import { useState } from "react";

const Cart = ({ products }: { products: IProducts[] }) => {
  const [step, setStep] = useState<number>(1)
  const [price, setPrice] = useState<{ id: number, price: number, discount: number }[]>([])

  const { info, loading } = useAppContext()

  return !loading && (
    <>
      <Layout title="Cart" privet={true}>
        <div className="container m-auto">
          <StepperCart step={step} />
          <Heading5 className="text-light-300">{step === 1 ? 'Your Items' : 'Select Delivery Address'}</Heading5>
          <div className="flex justify-center gap-4 mt-8">
            {step === 1 ?
              <Items products={products} bag={info?.cart?.bag} price={price} setPrice={setPrice} />
              :
              <Address address={info?.cart?.address} />
            }
            <OrderSummary step={step} setStep={setStep} total={price} />
          </div>
          {step === 1 ?
            <RelatedProduct products={products} />
            :
            <div className="m-20 p-20"></div>
          }
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  let products = []
  try {
    const res = await getAllProduct()
    products = res.data.products
  } catch (err) { }

  return {
    props: {
      products
    }
  }
}

export default Cart;