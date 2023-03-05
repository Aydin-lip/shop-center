import { SubTitle2 } from "@/mui/customize";

interface IProps {
  step: number
}
const StepperCart = ({step}: IProps) => {
  return (
    <>
      <div className="w-full flex justify-center py-16">
        <div className="flex items-center gap-4">
          <SubTitle2 className={'text-red-dark-100'}>BAG</SubTitle2>
          <div className="border border-[#424242] border-dashed w-24 h-0"></div>
          <SubTitle2 className={step === 2 || step === 3 ? 'text-red-dark-100': ''}>ADDRESS</SubTitle2>
          <div className="border border-[#424242] border-dashed w-24 h-0"></div>
          <SubTitle2 className={step === 3 ? 'text-red-dark-100': ''}>PAYMENT</SubTitle2>
        </div>
      </div>
    </>
  )
}

export default StepperCart;