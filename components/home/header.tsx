import { BasicButton, Display2, Heading6 } from "@/mui/customize";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()

  return (
    <>
      <div className="container mx-auto">
        <div className="relative px-2 sm:px-0">
          <div className="absolute top-4 left-4 w-28 h-28 sm:w-40 sm:h-40 bg-red-dark-300 rounded-full z-[1]"></div>
          <div className="absolute bottom-8 right-4 sm:left-96 w-28 h-28 sm:w-52 sm:h-52 bg-[#ffe442] rounded-full z-[1]"></div>
          {/* <div className="absolute top-16 right-0 w-48 h-48 bg-[#7ea43d] rounded-full z-[1]"></div> */}
          <div className="absolute top-6 right-96 w-32 h-32 hidden sm:block bg-[#ff914d] rounded-full z-[1]"></div>
          {/* <div className="absolute top-72 right-40 w-28 h-28 bg-[#980053] rounded-full z-[1]"></div> */}
          <div className="w-full sticky z-[2] sm:bg-[url('/images/home/header/girl-with-packages.png')] bg-no-repeat bg-[20rem_2rem] lg:bg-[url('/')] lg:them-home-header rounded-3xl flex mt-6 lg:mt-4 " style={{ backdropFilter: "blur(30px)" }}>
            <div className="p-4 sm:py-12 sm:px-8 lg:py-24 lg:px-16">
              <Display2 className="cursor-default max-[640px]:text-4xl max-[640px]:text-center them-home-header-text">
                2023 Summer Collections
              </Display2>
              <Heading6 className="text-dark-200 my-8 w-full max-w-sm">
                you can find new collections of summer in differet brands only here.
              </Heading6>
              <Link href='/#Collection' className="no-underline">
                <BasicButton variant="contained" color="primary" className="them-home-header-btn" endIcon={
                  <span className="flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.90999 20.67C8.71999 20.67 8.52999 20.6 8.37999 20.45C8.24051 20.3089 8.16229 20.1184 8.16229 19.92C8.16229 19.7216 8.24051 19.5311 8.37999 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.37999 4.60999C8.24051 4.46885 8.16229 4.27842 8.16229 4.07999C8.16229 3.88156 8.24051 3.69113 8.37999 3.54999C8.66999 3.25999 9.14999 3.25999 9.43999 3.54999L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.43999 20.45C9.28999 20.59 9.09999 20.67 8.90999 20.67Z" fill="white" />
                    </svg>
                  </span>
                }>
                  Shop Now
                </BasicButton>
              </Link>
            </div>
            <div className="bg-[url('/images/home/header/girl-with-packages.png')] bg-no-repeat w-6/12 bg-cover pr-40 hidden lg:block"></div>
          </div>
        </div>
      </div>
      <div className="them-home-header-nav mt-8 mb-6">
        <div className="container m-auto overflow-y-hidden overflow-x-auto">
          <div className="h-20 flex justify-center items-center gap-4 w-[600px] m-auto">
            <Image className="cursor-pointer"
              onClick={() => router.push('/category')}
              src='/images/home/header/H&M.png'
              alt="Brands"
              width={90}
              height={50} />
            <Image className="cursor-pointer"
              onClick={() => router.push('/category')}
              src='/images/home/header/DeFacto.png'
              alt="Brands"
              width={90}
              height={90} />
            <Image className="cursor-pointer"
              onClick={() => router.push('/category')}
              src='/images/home/header/LACOSTE.png'
              alt="Brands"
              width={190}
              height={190} />
            <Image className="cursor-pointer"
              onClick={() => router.push('/category')}
              src='/images/home/header/PUMA.png'
              alt="Brands"
              width={60}
              height={50} />
            <Image className="cursor-pointer"
              onClick={() => router.push('/category')}
              src='/images/home/header/MANGO.png'
              alt="Brands"
              width={90}
              height={50} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;