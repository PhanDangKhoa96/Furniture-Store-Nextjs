import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
    return (
        <section className="bg-white-chocolate pt-10 pb-12 md:pt-16 md:pb-[100px]">
            <div className="container">
                <h3 className="mb-10 text-center">Design Products</h3>
                <div className="grid gap-8 md:grid-cols-3">
                    {products.map((product) => {
                        const { _id } = product;
                        return <ProductCard product={product} key={_id} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductListing;
