import { Body2, Heading6, SubTitle1 } from "@/mui/customize"
import Image from "next/image"

const Star = (on: boolean, i: number) => {
  return on ? (
    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9686 4.5341C11.9301 4.41022 11.8576 4.30087 11.7601 4.21961C11.6626 4.13836 11.5443 4.08878 11.4201 4.07703L7.95604 3.74886L6.58704 0.404284C6.48595 0.158559 6.25598 0 5.99999 0C5.74401 0 5.51394 0.158559 5.41351 0.404284L4.04451 3.74886L0.579941 4.07703C0.325946 4.10149 0.110881 4.28101 0.031427 4.5341C-0.00728901 4.65808 -0.0103006 4.79119 0.0227653 4.91694C0.0558312 5.04269 0.123522 5.15556 0.217452 5.24156L2.83599 7.63752L2.06393 11.186C2.00744 11.4469 2.10447 11.7167 2.31194 11.8732C2.42061 11.9557 2.55156 12.0001 2.68594 12C2.80113 12 2.91416 11.9674 3.01297 11.9056L5.99999 10.0419L8.98648 11.9056C9.09361 11.9725 9.21721 12.0051 9.34193 11.9993C9.46665 11.9936 9.58701 11.9497 9.68806 11.8732C9.89551 11.7167 9.99257 11.4469 9.93608 11.186L9.164 7.63755L11.7825 5.24158C11.8765 5.15559 11.9442 5.04272 11.9772 4.91697C12.0103 4.79122 12.0073 4.6581 11.9686 4.53412V4.5341Z" fill="#FFC107" />
    </svg>
  ) : (
    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9686 4.5341C11.9301 4.41022 11.8576 4.30087 11.7601 4.21961C11.6626 4.13836 11.5443 4.08878 11.4201 4.07703L7.95604 3.74886L6.58704 0.404284C6.48595 0.158559 6.25598 0 5.99999 0C5.74401 0 5.51394 0.158559 5.41351 0.404284L4.04451 3.74886L0.579941 4.07703C0.325946 4.10149 0.110881 4.28101 0.031427 4.5341C-0.00728901 4.65808 -0.0103006 4.79119 0.0227653 4.91694C0.0558312 5.04269 0.123522 5.15556 0.217452 5.24156L2.83599 7.63752L2.06393 11.186C2.00744 11.4469 2.10447 11.7167 2.31194 11.8732C2.42061 11.9557 2.55156 12.0001 2.68594 12C2.80113 12 2.91416 11.9674 3.01297 11.9056L5.99999 10.0419L8.98648 11.9056C9.09361 11.9725 9.21721 12.0051 9.34193 11.9993C9.46665 11.9936 9.58701 11.9497 9.68806 11.8732C9.89551 11.7167 9.99257 11.4469 9.93608 11.186L9.164 7.63755L11.7825 5.24158C11.8765 5.15559 11.9442 5.04272 11.9772 4.91697C12.0103 4.79122 12.0073 4.6581 11.9686 4.53412V4.5341Z" fill="#c1c1c1c4" />
    </svg>
  )
}
interface IProps {
  data: {
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
      <div className="w-full mx-auto rounded-2xl bg-container p-3" style={{ maxWidth: "280px" }}>
        <div className="rounded-lg w-full bg-dark-50 flex relative cursor-pointer hover:shadow-md">
          {data.showOnSale && data.onSale ?
            <div className="rounded-tr-lg rounded-bl bg-red-light-800 absolute top-0 right-0 py-1 px-2">
              <Body2 className="text-container">{data.onSale}%</Body2>
            </div>
            : ''
          }
          <Image src={data.img} alt={data.name} width={280} height={280} className="w-full" />
        </div>
        <span className="text-light-100 block my-4">{data.name}</span>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SubTitle1>{data.onSale && data.onSale > 0 ? (data.price - (data.price / 100) * data.onSale).toFixed(1) : data.price}$</SubTitle1>
            {data.onSale && data.onSale > 0 ?
              <span className="text-dark-300 line-through">{data.price}$</span>
              : ''
            }
          </div>
          <div className="flex gap-1 flex-row-reverse">
            {Array(5).fill({}).map((r, i) => i++ < data.star ? Star(true, i) : Star(false, i))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card