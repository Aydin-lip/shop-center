import { useRouter } from "next/router";
import Image from "next/image";
// Mui
import { BasicButton, Heading3 } from "@/mui/customize";
// Components
import SmallCard from "../card/small";
// Models
import ICollection from "@/models/collection";

const NewCollection = ({ collections }: { collections: ICollection[] }) => {
  const router = useRouter()

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-10 mb-6 max-[640px]:px-2">
        <Heading3 className="text-light-300 cursor-default max-[768px]:text-2xl them-home-collection-title"><span className="text-red-dark-100">New</span> Collection</Heading3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-rows-2 gap-4 max-[410px]:p-2">
        <div className="bg-red-light-100 them-home-collection-bg w-full h-full flex items-end justify-center col-span-2 row-span-2">
          <Image src="/images/home/new-collection/new-collection-style.png" alt="new-collection" width={370} height={460} />
        </div>
        {collections.map(collection =>
          <div className="flex justify-center" key={collection._id}>
            <SmallCard collection={collection} />
          </div>
        )}
      </div>
      <div className="rounded-lg bg-red-light-400 flex justify-center sm:justify-between w-full h-full max-h-80 my-10 overflow-hidden relative" style={{ background: 'linear-gradient(93.5deg, rgba(221, 78, 4, 0.81) 3.27%, #E87306 50.63%, rgba(243, 154, 9, 0.76) 100%)' }}>
        <div className="max-[450px]:hidden sm:w-1/2 flex justify-between sm:justify-center items-end absolute top-0 left-0 right-0 bottom-0 w-full sm:relative ">
          <Image src='/images/home/new-collection/newCollection-Women-1.png' alt="" width={240} height={330} />
          <Image src='/images/home/new-collection/newCollection-Women-2.png' alt="" width={220} height={280} />
        </div>
        <div className="w-9/12 min-[480px]:w-1/2 flex flex-col justify-center items-center z-[1]">
          <div className="max-w-lg mr-auto max-[1024px]:py-16">
            <Heading3 className="text-container pr-4 max-[1024px]:text-2xl">Best Summer Collection for Women Up To 50% OFF Now! </Heading3>
            <BasicButton
              variant="contained"
              color="secondary"
              className="mt-10 rounded-3xl mr-auto bg-container them-home-btn"
              onClick={() => router.push('/category')}
              endIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.91006 20.67C8.72006 20.67 8.53006 20.6 8.38006 20.45C8.24058 20.3089 8.16235 20.1185 8.16235 19.92C8.16235 19.7216 8.24058 19.5312 8.38006 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.38006 4.61002C8.24058 4.46888 8.16235 4.27845 8.16235 4.08002C8.16235 3.88159 8.24058 3.69116 8.38006 3.55002C8.67006 3.26002 9.15005 3.26002 9.44005 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.44005 20.45C9.29005 20.59 9.10006 20.67 8.91006 20.67Z" fill="#424242" />
                </svg>
              }>Shop Now</BasicButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCollection;