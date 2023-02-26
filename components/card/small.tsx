import { Body2 } from "@/mui/customize";
import Image from "next/image";

interface IProps {
  data: {
    id: number
    name: string
    price: number
    image: string
  }
}
const SmallCard = ({ data }: IProps) => {
  return (
    <>
      <div className="rounded hover:bg-dark-50 cursor-pointer p-2">
        <Image src={data.image} alt={data.name} width={190} height={190} />
        <Body2 className="text-light-100 my-1">{data.name}</Body2>
        <span>{data.price}$</span>
      </div>
    </>
  )
}

export default SmallCard;