import React from 'react';

const Button = ({ children }) => {
    return (
        <span className="bg-quick-silver cursor-pointer text-white text-sm px-4 py-2 mt-3 inline-block hover:bg-raisin-black transition duration-300 lg:px-6 lg:py-2">
            {children}
        </span>
    );
};

export default Button;
