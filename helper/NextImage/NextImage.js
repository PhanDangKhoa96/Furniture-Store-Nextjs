import Image from 'next/image';
import React from 'react';

const NextImage = ({
                       src,
                       objectFit = 'contain',
                       alt = '',
                       objectPosition
                   }) => {
    return (
        <div className="next-image">
            <Image
                width="100%"
                height="100%"
                objectFit={objectFit}
                src={src}
                alt={`next image ${alt}`}
                objectPosition={objectPosition}
            />
        </div>
    );
};

export default NextImage;
