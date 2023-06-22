import { Body2, SubTitle1 } from "@/mui/customize";
import { star } from "@/helper";
import Image from "next/image"
import Link from "next/link";

interface IProps {
  data: {
    _id?: string
    name: string
    img: string
    price: number
    onSale?: number
    showOnSale?: boolean
    star: number
  }
}
const Card = ({ data }: IProps) => {
  return (
    <>
      <div className="w-full mx-auto rounded-2xl bg-container p-3 max-w-[280px]">
        <Link href={`/product/detail/${data._id}`}>
          <div className="rounded-lg w-full them-cart-bg flex relative cursor-pointer hover:shadow-md h-[256px]">
            {data.showOnSale && data.onSale && data.onSale > 1 ?
              <div className="rounded-tr-lg rounded-bl bg-red-light-800 absolute top-0 right-0 py-1 px-2">
                <Body2 className="text-container">{data.onSale}%</Body2>
              </div>
              : ''
            }
            <Image src={data.img} alt={data.name} width={280} height={280} className="w-auto h-full mx-auto rounded-tr-lg" />
          </div>
        </Link>
        <Link href={`/product/detail/${data._id}`}>
          <span className="text-light-100 my-4 inline-block">{data.name}</span>
        </Link>
        <div className="flex justify-between items-center cursor-default">
          <div className="flex items-center gap-3">
            <SubTitle1 className="them-cart-price">{data.onSale && data.onSale > 1 ? (data.price - (data.price / 100) * data.onSale).toFixed(1) : data.price}$</SubTitle1>
            {data.onSale && data.onSale > 1 ?
              <span className="text-dark-300 line-through">{data.price}$</span>
              : ''
            }
          </div>
          <div className="flex gap-1 flex-row-reverse">
            {Array(5).fill({}).map((r, i) => i++ < data.star ? star(true, i) : star(false, i))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card