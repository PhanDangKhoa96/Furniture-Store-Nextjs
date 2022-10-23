import { getSession } from 'next-auth/react';
import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import BlogListing from '../components/BlogListing/BlogListing';
import GetSocial from '../components/GetSocial/GetSocial';
import Hero from '../components/Hero/Hero';
import Intro from '../components/Intro/Intro';
import Newsletter from '../components/Newsletter/Newsletter';
import ProductListing from '../components/ProductListing/ProductListing';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';

const Home = ({ categories, products }) => {
    console.log(products);
    return (
        <>
            <Hero />
            <Intro />
            <ProductListing products={products} />
            <AboutUs />
            <Newsletter />
            <BlogListing />
            <GetSocial />
        </>
    );
};

export default Home;

export const getServerSideProps = async (context) => {
    const categories = await fetchCategories();
    const products = await fetchProducts();
    const session = await getSession(context);

    return {
        props: {
            categories,
            products,
            session
        }
    };
};
