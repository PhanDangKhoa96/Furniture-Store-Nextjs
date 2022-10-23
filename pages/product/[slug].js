import React, { useContext } from 'react';
import { fetchProducts } from '../../utils/fetchProducts';
import { fetchProductDetail } from '../../utils/fetchProductDetail';
import Image from 'next/image';
import { urlFor } from '../../sanity';
import { StoreContext } from '../../store/context/store';

export async function getStaticPaths() {
    const products = await fetchProducts();
    const paths = products.map((product) => ({
        params: { slug: product.slug.current, id: 15 }
    }));
    return {
        paths,
        fallback: false // can also be true or 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const product = await fetchProductDetail(slug);
    return {
        props: { product }
    };
}

const ProductDetail = ({ product }) => {
    const { state, dispatch } = useContext(StoreContext);

    console.log(state);
    return (
        <article className="container my-12">
            <div className="relative w-full aspect-[3/1]">
                <Image
                    src={urlFor(product.image).url()}
                    layout="fill"
                    alt="image"
                    objectFit="cover"
                />
            </div>

            <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>

            <button className="bg-quick-silver p-3 text-white hover:text-amber-200 hover:bg-blue-700 transition-all duration-300">
                Buy now
            </button>
        </article>
    );
};

export default ProductDetail;
