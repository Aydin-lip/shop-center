import { useRef } from "react";
// Mui
import { Button } from "@mui/material";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Swiper as SwiperType } from "swiper";

interface IProps {
  children: JSX.Element[]
}
const SwiperBox = ({ children }: IProps) => {
  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 0
            },
          }}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {children?.map((child, i) =>
            <SwiperSlide key={i}>{child}</SwiperSlide>
          )}
          <Button onClick={() => swiperRef.current?.slidePrev()} variant="outlined" color="secondary" className="z-[2] absolute top-1/3 left-0 founded py-2 bg-container">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.97501 15.6833C7.81668 15.6833 7.65835 15.625 7.53335 15.5L2.47501 10.4416C2.23335 10.2 2.23335 9.79998 2.47501 9.55831L7.53335 4.49998C7.77501 4.25831 8.17501 4.25831 8.41668 4.49998C8.65835 4.74164 8.65835 5.14164 8.41668 5.38331L3.80001 9.99998L8.41668 14.6166C8.65835 14.8583 8.65835 15.2583 8.41668 15.5C8.30001 15.625 8.13335 15.6833 7.97501 15.6833Z" fill="#424242" />
              <path d="M17.0834 10.625H3.05835C2.71668 10.625 2.43335 10.3417 2.43335 10C2.43335 9.65833 2.71668 9.375 3.05835 9.375H17.0834C17.425 9.375 17.7084 9.65833 17.7084 10C17.7084 10.3417 17.425 10.625 17.0834 10.625Z" fill="#424242" />
            </svg>
          </Button>
          <Button onClick={() => swiperRef.current?.slideNext()} variant="outlined" color="secondary" className="z-[2] absolute top-1/3 right-0 founded py-2 bg-container">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.025 15.6833C11.8667 15.6833 11.7083 15.625 11.5833 15.5C11.3417 15.2583 11.3417 14.8583 11.5833 14.6166L16.2 9.99998L11.5833 5.38331C11.3417 5.14164 11.3417 4.74164 11.5833 4.49998C11.825 4.25831 12.225 4.25831 12.4667 4.49998L17.525 9.55831C17.7667 9.79998 17.7667 10.2 17.525 10.4416L12.4667 15.5C12.3417 15.625 12.1834 15.6833 12.025 15.6833Z" fill="#424242" />
              <path d="M16.9417 10.625H2.91675C2.57508 10.625 2.29175 10.3417 2.29175 10C2.29175 9.65833 2.57508 9.375 2.91675 9.375H16.9417C17.2834 9.375 17.5667 9.65833 17.5667 10C17.5667 10.3417 17.2834 10.625 16.9417 10.625Z" fill="#424242" />
            </svg>
          </Button>
        </Swiper>
      </div >
    </>
  )
}

export default SwiperBox;