import { BasicButton, Heading5 } from "@/mui/customize";
import { Dispatch, SetStateAction } from "react";

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

  let allTotal = 0
  let discount = 0
  total.forEach(t => allTotal += t.price)
  total.forEach(t => discount += t.discount)

  const nextStep = () => {
    setStep(step + 1)
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
        <BasicButton color="primary" variant="contained" className="w-full mt-3" onClick={nextStep}>Check Out Now</BasicButton>
      </div>
    </>
  )
}

export default OrderSummary;