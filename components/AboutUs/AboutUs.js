import React from 'react';
import Image from 'next/image';
import Button from '../atoms/Button/Button';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <section className="section">
            <div className="container max-w-4xl">
                <h3 className="text-dark-vanilla mb-7 text-center md:hidden">
                    About Us
                </h3>

                <div className="grid gap-y-10 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:gap-x-10">
                    <div className="pr-[12%] pb-[10%] relative isolate md:pr-[20%] md:pb-[20%]">
                        <div className="relative aspect-[326/489]">
                            <Image
                                src="https://static.wixstatic.com/media/af8a99_a8b13cdf30f241b5a89adeeb668b95d7~mv2.jpg/v1/fill/w_326,h_489,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-mart-production-8165196.jpg"
                                layout="fill"
                            />
                        </div>

                        <div className="absolute bottom-0 right-0 w-[88%] h-[90%] bg-white-chocolate z-[-1] md:w-[80%] md:h-[80%]"></div>
                    </div>

                    <div className="grid gap-y-3 justify-items-start content-start md:mt-6">
                        <h3 className="text-dark-vanilla mb-7 hidden -translate-x-20 md:block ">
                            About Us
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dignissimos distinctio dolore fugiat, iste
                            libero quos voluptatum. Adipisci expedita explicabo
                            harum maxime quae reprehenderit sunt voluptate.
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ad amet assumenda, at consectetur dignissimos
                            dolore doloribus, dolorum incidunt ipsa officiis
                            pariatur perspiciatis quos soluta ullam.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Assumenda dignissimos dolorem dolorum ex id
                            magnam rem similique totam vero voluptatem? Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Doloribus, quis.
                        </p>

                        <Link href="/about">
                            <Button>Learn more</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
