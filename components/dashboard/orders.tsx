import { useState } from 'react'
import { SubTitle1 } from "@/mui/customize";
import Image from "next/image";


interface IDetailDeliverdBox {
  id: number
  image: string
  name: string
  code: string
  date: string
  price: number
}
const DeliverdBox = (detail: IDetailDeliverdBox, hr: boolean) => {
  return (
    <div key={detail.id}>
      <div className="flex gap-4 items-end my-9">
        <Image src={detail.image} alt={detail.name} width={180} height={180} />
        <div className="flex flex-col gap-5 py-4">
          <p className="m-0">{detail.name}</p>
          <span><span className="text-dark-200">code: </span>{detail.code}</span>
          <span><span className="text-dark-200">date: </span>{detail.code}</span>
          <span><span className="text-dark-200">price: </span>{detail.price}$</span>
        </div>
      </div>
      {hr &&
        <div className="border border-dark-100 border-solid w-full"></div>
      }
    </div>
  )
}

const Orders = () => {
  const [deliverdItem, setDeliverdItem] = useState<boolean>(true)

  let Deliverd = [
    {
      id: 1,
      image: '/images/data/hodi.png',
      name: 'Heart Print Thermal Lined Drawstring Hoodie',
      code: '2346004',
      date: '2023-Jan-12',
      price: 156.00
    }, {
      id: 2,
      image: '/images/data/hodi.png',
      name: 'Heart Print Thermal Lined Drawstring Hoodie',
      code: '2346004',
      date: '2023-Jan-12',
      price: 156.00
    }
  ]

  let Processing = [
    {
      id: 1,
      image: '/images/data/hodi.png',
      name: 'Heart Print Thermal Lined Drawstring Hoodie',
      code: '2346004',
      date: '2023-Jan-12',
      price: 156.00
    }
  ]


  return (
    <>
      <div className="w-full h-full mx-4 border-solid border border-dark-100 px-32">
        <div className="flex gap-8 pt-12">
          <div>
            <SubTitle1 className="text-light-100 cursor-pointer" onClick={() => setDeliverdItem(true)}>
              Deliverd
            </SubTitle1>
            {deliverdItem &&
              <div className="w-full h-1 bg-red-dark-100 rounded-lg"></div>
            }
          </div>
          <div>
            <SubTitle1 className="text-light-100 cursor-pointer" onClick={() => setDeliverdItem(false)}>
              Processing
            </SubTitle1>
            {!deliverdItem &&
              <div className="w-full h-1 bg-red-dark-100 rounded-lg"></div>
            }
          </div>
        </div>

        <div className="overflow-y-auto overflow-x-hidden h-[85%]">
          {deliverdItem ?
            Deliverd.map((del, i) => DeliverdBox(del, Deliverd[++i] ? true : false))
            :
            Processing.map((del, i) => DeliverdBox(del, Processing[++i] ? true : false))
          }
        </div>

      </div>
    </>
  )
}

export default Orders;