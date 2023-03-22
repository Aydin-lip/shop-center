import { useAppContext } from "@/context/state";
import { BasicButton, Heading5 } from "@/mui/customize";
import { addOrder, cartDeleteBagAll } from "@/services/http.service";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

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
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  let allTotal = 0
  let discount = 0
  total.forEach(t => allTotal += t.price)
  total.forEach(t => discount += t.discount)

  const { info, setInfo } = useAppContext()

  useEffect(() => {
    if (info.cart.bag.length === 0) {
      setLoading(true)
    }
  }, [])

  const nextStep = () => {
    if (step === 2) {
      setLoading(true)
      let example = {
        image: "/images/data/hodi.png",
        title: "Heart Print Thermal Lined Drawstring Hoodie",
        code: "2346004",
        price: 156,
        data: "2023-Jan-12"
      }
      addOrder({ processing: example })
        .then(res => {
          cartDeleteBagAll()
            .then(res => {
              setInfo({ ...info, cart: { ...info.cart, bag: [] } })
            })
            .catch(err => { })
          setLoading(false)
          setStep(1)
          router.replace('/')
        })
        .catch(err => {
          setLoading(false)
        })
    } else {
      setStep(step + 1)
    }
  }

  return (
    <>
      <div className="border border-dark-100 border-solid w-[350px] h-[320px] p-6">
        <Heading5 className="text-light-300">Order Summary</Heading5>
        <div className="mb-8 mt-12">
          <div className="flex justify-between text-light-200 my-6">
            <span>total:</span>
            <span>{allTotal.toFixed(2)} $</span>
          </div>
          <div className="flex justify-between">
            <span className="text-light-200">Discount:</span>
            <span className="text-[#008A04]">{discount.toFixed(2)} $</span>
          </div>
        </div>
        <div className="w-full border border-dark-100 border-dashed my-2"></div>
        <div className="my-8">
          <div className="flex justify-between text-light-200">
            <span>total amount:</span>
            <span>{(allTotal - discount).toFixed(2)} $</span>
          </div>
        </div>
        <span className={loading ? 'cursor-progress' : ''}>
          <BasicButton color="primary" variant="contained" className="w-full mt-3" onClick={nextStep} disabled={loading}>Check Out Now</BasicButton>
        </span>
      </div>
    </>
  )
}

export default OrderSummary;