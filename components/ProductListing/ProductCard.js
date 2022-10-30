import React from 'react';
import { urlFor } from '../../sanity';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../atoms/Button';

const ProductCard = ({ product }) => {
    return (
        <div className="hover:shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] transition duration-300">
            <Link href={`/product/${product.slug.current}`}>
                <div className="relative w-full aspect-[312/286] cursor-pointer">
                    <Image src={urlFor(product.image).url()} layout={'fill'} />
                </div>
            </Link>

            <div className="bg-white p-3 lg:p-5">
                <p className="product-title mb-3">{product.title}</p>
                <p className="line-clamp-3">{product.description}</p>

                <Link href={`/product/${product.slug.current}`}>
                    <span className="block text-right">
                        <Button>Learn more</Button>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
