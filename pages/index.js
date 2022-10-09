import {getSession} from "next-auth/react";
import React from "react";
import {fetchCategories} from "../utils/fetchCategories";
import {fetchProducts} from "../utils/fetchProducts";

const Home = ({categories, products}) => {
    return <div className="text-5xl font-title">Home page</div>;
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
            session,
        },
    };
};

