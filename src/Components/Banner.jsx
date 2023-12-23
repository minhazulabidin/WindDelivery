import Banner2 from "./Banner2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Banner1 from "./Banner1";
import { Autoplay } from 'swiper/modules';
import Banner3 from "./Banner3";

const Banner = () => {

    return (
        <div className="">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper h-screen">
                <SwiperSlide><Banner2 /></SwiperSlide>
                <SwiperSlide><Banner1 /></SwiperSlide>
                <SwiperSlide><Banner3 /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;