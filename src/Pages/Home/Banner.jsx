
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

// import images
import banner1 from "../../assets/images/banner1.jpg"
import banner8 from "../../assets/images/banner8.jpg"
import banner9 from "../../assets/images/banner9.jpg"

const Banner = () => {
    return (
        <>
        <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
        >
          <SwiperSlide>
          <img src={banner1} />
          </SwiperSlide>
         
          <SwiperSlide>
            <img src={banner8}  />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner8}  />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner9}  />
          </SwiperSlide>
        </Swiper>

      </>
    );
};

export default Banner;