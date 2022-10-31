import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import ScrollToTop from './atoms/ScrollToTop';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link
                    href={
                        'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
                    }
                    rel="stylesheet"
                />
            </Head>
            <NextNProgress/>
            <Header/>
            <main className="pt-16">{children}</main>
            <Footer/>
            <ScrollToTop/>
        </>
    );
};

export default Layout;
