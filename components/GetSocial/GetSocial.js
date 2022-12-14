import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper';
import Image from 'next/image';
import { urlFor } from '../../sanity';

const GetSocial = ({ social }) => {

    const swiperSetting = {
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        },
        navigation: true,
        modules: [Navigation],
        grabCursor: true
    };

    return (
        <section className="section !pb-0">
            <h3 className="mb-7 md:mb-10 text-center text-dark-vanilla">
                Get Social
            </h3>

            <div className="bg-white-chocolate px-5 py-10 md:pt-20">
                <div className="relative overflow-hidden h-[calc((100vw-40px))] sm:h-[calc((100vw-60px)/2)] md:h-[calc((100vw-80px)/3)] lg:h-[calc((100vw-100px)/4)] xl:h-[calc((100vw-120px)/5)]">
                    <Swiper
                        {...swiperSetting}
                        className="!absolute w-full h-full">
                        {social?.image?.map((item) => {
                            return (
                                <SwiperSlide className="flex" key={item._id}>
                                    <div className="w-full aspect-square relative">
                                        <Image
                                            src={urlFor(item).url()}
                                            layout="fill"
                                            alt="image slider"
                                            objectFit="cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default GetSocial;
