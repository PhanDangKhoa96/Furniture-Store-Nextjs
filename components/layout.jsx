import React, {useEffect, useRef} from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

const Layout = ({children}) => {
    const backToTop = useRef();

    const scrollFunction = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            backToTop.current.classList.add('show-to-top');
        } else {
            backToTop.current.classList.remove('show-to-top');
        }
    };

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    useEffect(() => {
        window.onscroll = () => {
            scrollFunction();
        };
    }, []);

    return (
        <>
            <Head>
                <link
                    href={"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"}
                    rel="stylesheet"
                />
            </Head>
            <NextNProgress/>
            <Header/>
            <main className="pt-16">{children}</main>
            <Footer/>
            <button
                onClick={topFunction}
                className="fixed grid place-items-center bottom-5 right-5 bg-transparent text-black border border-solid border-black aspect-square w-8 text-2xl md:w-10 md:text-3xl hover:bg-dark-vanilla hover:text-white hover:border-dark-vanilla transition duration-300"
                ref={backToTop}
                id="scroll-to-top">
                <i className="ri-arrow-up-s-line"/>
            </button>
        </>
    );
};

export default Layout;
