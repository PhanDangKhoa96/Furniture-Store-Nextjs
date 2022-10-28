import React from 'react';
import { urlFor } from '../../sanity';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className="relative w-full aspect-[312/286]">
                <Image src={urlFor(product.image).url()} layout={'fill'} />
            </div>

            <div className="bg-white p-3 lg:p-5">
                <p className="product-title mb-3">{product.title}</p>
                <p className="line-clamp-3">{product.description}</p>

                <Link href={`/product/${product.slug.current}`}>
                    <button className="bg-quick-silver text-white text-sm px-4 py-2 mt-3 block ml-auto lg:px-6 lg:py-2">
                        Learn more
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
