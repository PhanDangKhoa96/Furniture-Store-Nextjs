import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ title, src, slug }) => {
    return (
        <Link href={`/blog/${slug}`}>
            <div className="group cursor-pointer mx-auto w-full max-w-lg">
                <div className="relative aspect-square mb-5 md:aspect-[3/4]">
                    <Image src={src} layout="fill" />
                </div>

                <p className="product-title group-hover:text-dark-vanilla transition duration-300">
                    {title}
                </p>
            </div>
        </Link>
    );
};

export default BlogCard;
