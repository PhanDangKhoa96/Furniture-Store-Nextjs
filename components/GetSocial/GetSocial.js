import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
const GetSocial = () => {
    return (
        <section className="section !pb-0">
            <h3 className="mb-7 md:mb-10 text-center">Get Social</h3>

            <div className="bg-white-chocolate px-5 py-10">
                <div className="relative overflow-hidden">
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="!absolute w-full h-full">
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default GetSocial;
