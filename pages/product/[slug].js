import React from 'react';
import { fetchProducts } from '../../utils/fetchProducts';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

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
    // const product = await fetchProductDetail('third-item');
    const { slug } = params;
    const query = groq`*[_type == "product" && slug.current == $slug]{
    _id, ...
    }`;
    const product = await sanityClient.fetch(query, { slug });
    return {
        props: { product, slug }
    };
}

const ProductDetail = ({ product, slug }) => {
    console.log(product, slug);
    return <div>product detail page</div>;
};

export default ProductDetail;
