import ICollection from "@/models/collection";
import { Body2 } from "@/mui/customize";
import Image from "next/image";

interface IProps {
  collection: ICollection
}
const SmallCard = ({ collection }: IProps) => {
  return (
    <>
      <div className="rounded hover:bg-dark-50 p-2">
        <Image src={collection.image} alt={collection.name} width={190} height={190} />
        <Body2 className="text-light-100 my-1">{collection.name}</Body2>
        <span>{collection.price}$</span>
      </div>
    </>
  )
}

export default SmallCard;