import { useState } from 'react'
import { SubTitle1 } from "@/mui/customize";
import Image from "next/image";
import { useAppContext } from '@/context/state';
import { IDeliverd } from '@/models/user';


const DeliverdBox = (detail: IDeliverd, hr: boolean) => {
  return (
    <div key={detail.id}>
      <div className="flex max-[450px]:flex-col gap-4 items-center md:items-end my-9">
        <Image src={detail.image} alt={detail.title} width={180} height={180} className='w-[150px] h-[150px] md:w-auto md:h-auto' />
        <div className="flex flex-col gap-5 py-4">
          <p className="m-0 them-dashboard-order">{detail.title}</p>
          <span className='them-dashboard-order'><span className="text-dark-200">code: </span>{detail.code}</span>
          <span className='them-dashboard-order'><span className="text-dark-200">date: </span>{detail.code}</span>
          <span className='them-dashboard-order'><span className="text-dark-200">price: </span>{detail.price}$</span>
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

  const {info} = useAppContext()

  return (
    <>
      <div className="w-full h-full mx-4 border-solid border border-dark-100 px-8 lg:px-16 xl:px-32">
        <div className="flex gap-8 pt-8 lg:pt-12">
          <div>
            <SubTitle1 className="text-light-100 them-dashboard-order-title cursor-pointer max-[768px]:text-base" onClick={() => setDeliverdItem(true)}>
              Deliverd
            </SubTitle1>
            {deliverdItem &&
              <div className="w-full h-1 bg-red-dark-100 rounded-lg"></div>
            }
          </div>
          <div>
            <SubTitle1 className="text-light-100 them-dashboard-order-title cursor-pointer max-[768px]:text-base" onClick={() => setDeliverdItem(false)}>
              Processing
            </SubTitle1>
            {!deliverdItem &&
              <div className="w-full h-1 bg-red-dark-100 rounded-lg"></div>
            }
          </div>
        </div>

        <div className="overflow-y-auto overflow-x-hidden h-[85%]">
          {deliverdItem ?
            info.order.deliverd.map((del, i) => DeliverdBox(del, info.order.deliverd[++i] ? true : false))
            :
            info.order.processing.map((del, i) => DeliverdBox(del, info.order.processing[++i] ? true : false))
          }
        </div>

      </div>
    </>
  )
}

export default Orders;