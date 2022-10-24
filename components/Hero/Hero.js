import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className="h-[calc(100vh-4rem)] w-full grid place-items-center relative">
            <Image
                layout="fill"
                src="/home/hero.jpg"
                alt="image"
                objectFit="cover"
            />
        </div>
    );
};

export default Hero;
