import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

const Reference = () => {
    const swiperSetting = {
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        },
        navigation: true,
        modules: [Navigation]
    };

    return (
        <Swiper {...swiperSetting} className="max-w-full">
            <SwiperSlide className="!w-full">
                <div className="w-full aspect-square bg-red-500"></div>
            </SwiperSlide>
            <SwiperSlide className="!w-full">
                <div className="w-full aspect-square bg-red-500"></div>
            </SwiperSlide>
            <SwiperSlide className="!w-full">
                <div className="w-full aspect-square bg-red-500"></div>
            </SwiperSlide>
            <SwiperSlide className="!w-full">
                <div className="w-full aspect-square bg-red-500"></div>
            </SwiperSlide>
            <SwiperSlide className="!w-full">
                <div className="w-full aspect-square bg-red-500"></div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Reference;
