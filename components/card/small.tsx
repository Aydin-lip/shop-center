import ICollection from "@/models/collection";
import { Body2 } from "@/mui/customize";
import Image from "next/image";
import { useRouter } from "next/router";

interface IProps {
  collection: ICollection
}
const SmallCard = ({ collection }: IProps) => {
  const router = useRouter()

  return (
    <>
      <div className="rounded them-smallCart-bg p-2 cursor-pointer max-w-[13rem]" onClick={() => router.push('/category')}>
        <Image src={collection.image} alt={collection.name} width={190} height={190} />
        <Body2 className="text-light-100 my-1">{collection.name}</Body2>
        <span className="them-smallCart-price">{collection.price}$</span>
      </div>
    </>
  )
}

export default SmallCard;