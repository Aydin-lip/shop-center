import { BasicButton } from "@/mui/customize";
import { Heading3 } from "@/mui/customize";
import Image from "next/image";
import SwiperBox from "./swiper";
import Card from "../card";
import IProducts from "@/models/products";
import { useRouter } from "next/router";

const PopularProducts = ({ products }: { products: IProducts[] }) => {
  const router = useRouter()

  return (
    <>
      <div className="container m-auto mb-24 mt-10">
        <div className="flex gap-4">
          <div className="rounded-lg bg-[#FFE5E6] flex items-end w-full max-w-[630px] relative">
            <Image src='/images/home/two-box/women-best-sale.png' alt="" width={400} height={250} className="ml-[-1rem]" />
            <div className="absolute top-0 left-0 right-0 bottom-0 pr-12 flex items-center justify-end">
              <div>
                <Heading3>Best Sale Here!</Heading3>
                <BasicButton
                  variant="contained"
                  color="secondary"
                  className="mt-10 rounded-3xl mr-auto bg-container hover:bg-dark-50"
                  onClick={() => router.replace('/category')}
                  endIcon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.91006 20.67C8.72006 20.67 8.53006 20.6 8.38006 20.45C8.24058 20.3089 8.16235 20.1185 8.16235 19.92C8.16235 19.7216 8.24058 19.5312 8.38006 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.38006 4.61002C8.24058 4.46888 8.16235 4.27845 8.16235 4.08002C8.16235 3.88159 8.24058 3.69116 8.38006 3.55002C8.67006 3.26002 9.15005 3.26002 9.44005 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.44005 20.45C9.29005 20.59 9.10006 20.67 8.91006 20.67Z" fill="#424242" />
                    </svg>
                  }>Shop Now</BasicButton>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-[#F3EED9] flex items-end w-full max-w-[630px] relative">
            <Image src='/images/home/two-box/men-best-sale.png' alt="" width={400} height={250} className="ml-[-6rem]" />
            <div className="absolute top-0 left-0 right-0 bottom-0 pr-12 flex items-center justify-end">
              <div className="max-w-[250px]">
                <Heading3>All under 50$ for men</Heading3>
                <BasicButton
                  variant="contained"
                  color="secondary"
                  className="mt-10 rounded-3xl mr-auto bg-container hover:bg-dark-50"
                  onClick={() => router.replace('/category')}
                  endIcon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.91006 20.67C8.72006 20.67 8.53006 20.6 8.38006 20.45C8.24058 20.3089 8.16235 20.1185 8.16235 19.92C8.16235 19.7216 8.24058 19.5312 8.38006 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.38006 4.61002C8.24058 4.46888 8.16235 4.27845 8.16235 4.08002C8.16235 3.88159 8.24058 3.69116 8.38006 3.55002C8.67006 3.26002 9.15005 3.26002 9.44005 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.44005 20.45C9.29005 20.59 9.10006 20.67 8.91006 20.67Z" fill="#424242" />
                    </svg>
                  }>Shop Now</BasicButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Heading3 className="text-light-300 cursor-default mb-6"><span className="text-red-dark-100">Popular</span> Products</Heading3>
          <SwiperBox>
            {products?.map(product =>
              <Card data={{ ...product, showOnSale: true }} key={product._id} />
            )}
          </SwiperBox>
        </div>
      </div>
    </>
  )
}
export default PopularProducts;