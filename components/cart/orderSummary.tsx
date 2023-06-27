import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
//  Context
import { useAppContext } from "@/context/state";
// Mui
import { BasicButton, Heading5 } from "@/mui/customize";
// Api
import { addOrder, cartDeleteBagAll } from "@/services/http.service";

interface IProps {
  step: number
  setStep: Dispatch<SetStateAction<number>>
  total: {
    id: number
    price: number
    discount: number
  }[]
}
const OrderSummary = ({ step, setStep, total }: IProps) => {
  // States
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false)

  const router = useRouter()
  // List data
  let allTotal = 0
  let discount = 0
  total.forEach(t => allTotal += t.price)
  total.forEach(t => discount += t.discount)

  const { info, setInfo, loading } = useAppContext()

  useEffect(() => {
    // Check user bag count if = 0 => next btn is disabled
    if (info.cart.bag.length === 0) {
      setLoadingBtn(true)
    }
  }, [!loading])

  // Function next Step cart
  const nextStep = () => {
    if (step === 2) {
      setLoadingBtn(true)
      let example = { // default order obj <example>
        image: "/images/data/hodi.png",
        title: "Heart Print Thermal Lined Drawstring Hoodie",
        code: "2346004",
        price: 156,
        data: "2023-Jan-12"
      }
      addOrder({ processing: example }) // Send data
        .then(res => {
          cartDeleteBagAll() // Delete all bag
            .then(res => {
              setInfo({ ...info, cart: { ...info.cart, bag: [] } }) // Save context bag empty
            })
            .catch(err => { })
          setLoadingBtn(false)
          setStep(1)
          router.replace('/')
        })
        .catch(err => {
          setLoadingBtn(false)
        })
    } else {
      setStep(step + 1)
    }
  }

  return (
    <>
      <div className="border border-dark-100 border-solid w-full max-w-[300px] h-[320px] p-6">
        <Heading5 className="text-light-300 them-cart-title">Order Summary</Heading5>
        <div className="mb-8 mt-12">
          <div className="flex justify-between text-light-200 them-cart-order my-6">
            <span>total:</span>
            <span>{allTotal.toFixed(2)} $</span>
          </div>
          <div className="flex justify-between">
            <span className="text-light-200 them-cart-order">Discount:</span>
            <span className="text-[#008A04]">{discount.toFixed(2)} $</span>
          </div>
        </div>
        <div className="w-full border border-dark-100 border-dashed my-2"></div>
        <div className="my-8">
          <div className="flex justify-between text-light-200 them-cart-order">
            <span>total amount:</span>
            <span>{(allTotal - discount).toFixed(2)} $</span>
          </div>
        </div>
        <span className={loadingBtn ? 'cursor-progress' : ''}>
          <BasicButton color="primary" variant="contained" className="w-full mt-[-.5rem] bg-red-dark-100" onClick={nextStep} disabled={loadingBtn}>Check Out Now</BasicButton>
        </span>
      </div>
    </>
  )
}

export default OrderSummary;