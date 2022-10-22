import React, { useEffect } from 'react'
import { useRef } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({ children }) => {
    const backToTop = useRef()

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTop.current.classList.add('show-to-top');
        } else {
            backToTop.current.classList.remove('show-to-top');
        }
    }

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        window.onscroll = () => { scrollFunction() };
    }, [])

    return (
        <>
            <Header />
            <main className='pt-16 min-h-screen'>{children}</main>
            <Footer />
            <button onClick={topFunction} className='fixed grid place-items-center bottom-5 right-5 bg-transparent text-black border border-solid border-black aspect-square w-8 text-2xl md:w-10 md:text-3xl hover:bg-dark-vanilla hover:text-white hover:border-dark-vanilla transition duration-300' ref={backToTop} id="scroll-to-top">
                <i className="ri-arrow-up-s-line" />
            </button>
        </>
    )
}


export default Layout