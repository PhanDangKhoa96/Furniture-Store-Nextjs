import React from 'react';

const Newsletter = () => {
    return (
        <section className="section bg-wenge">
            <div className="container text-white text-center grid gap-y-7 max-w-3xl w-3/4 mx-auto md:gap-y-14 ">
                <h3>
                    Get the <span className="italic">Free</span> Guide
                </h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut excepturi illum laboriosam laborum possimus ratione,
                    veniam voluptate. Aliquid animi expedita id obcaecati, omnis
                    veritatis voluptas?
                </p>

                <form className="grid gap-y-5 sm:grid-cols-[2.38fr_1fr] sm:gap-x-10">
                    <label className="relative block">
                        <input
                            type="email"
                            className="w-full bg-bone py-3 px-5 text-raisin-black placeholder:text-transparent peer"
                            placeholder="email"
                        />
                        <span className="peer-placeholder-shown:text-raisin-black absolute top-1/2 peer-placeholder-shown:-translate-y-1/2 transition duration-300 left-4 peer-focus:-translate-y-12 peer-focus:text-white peer-focus:scale-90 scale-90 text-white -translate-y-12">
                            Email
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="bg-white text-raisin-black px-7 py-2 justify-self-center sm:w-full">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
