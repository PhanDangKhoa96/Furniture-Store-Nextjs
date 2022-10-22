import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white-chocolate section">
            <div className="container text-center relative">
                <div className="mb-12">
                    <h3 className="mt-10 md:mt-14">Subscribe</h3>
                    <p className="mt-4 mb-5 mx-auto max-w-[600px] md:mt-6 md:mb-8">
                        I'm a paragraph. Click here to add your own text and
                        edit me. It's easy.
                    </p>

                    <form className="grid mx-auto max-w-[360px] grid-cols-[.8fr_.2fr] w-full">
                        <input
                            type="text"
                            placeholder="Enter your email here*"
                            className="py-2 w-full px-4 md:py-3 md:px-5 placeholder:text-xs md:placeholder:text-sm"
                        />
                        <button className="text-white font-bold text-sm bg-dark-vanilla grid place-items-center md:text-base">
                            Join
                        </button>
                    </form>
                </div>
                <div className="flex mb-5 gap-x-4 justify-center md:absolute top-[10%] left-0 md:flex-col md:gap-y-5">
                    <div className="grid place-items-center rounded-full aspect-square w-[30px] text-xl bg-black text-white-chocolate">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex"
                        >
                            <i className="ri-facebook-fill"></i>
                        </a>
                    </div>
                    <div className="grid place-items-center rounded-full aspect-square w-[30px] text-xl bg-black text-white-chocolate">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex"
                        >
                            <i className="ri-instagram-fill"></i>
                        </a>
                    </div>
                    <div className="grid place-items-center rounded-full aspect-square w-[30px] text-xl bg-black text-white-chocolate">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex"
                        >
                            <i className="ri-pinterest-fill"></i>
                        </a>
                    </div>
                    <div className="grid place-items-center rounded-full aspect-square w-[30px] text-xl bg-black text-white-chocolate">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex"
                        >
                            <i className="ri-twitter-fill"></i>
                        </a>
                    </div>
                </div>

                <p className="text-xs font-medium -mb-5 md:-mb-[50px]">
                    COPYRIGHT YOUR WEBSITE.COM
                </p>
            </div>
        </footer>
    );
};

export default Footer;
