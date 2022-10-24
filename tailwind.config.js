/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        container: {
            padding: '20px',
            center: true
        },
        extend: {
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
                title: ['Title', 'sans-serif']
            },

            colors: {
                wenge: '#605E5C',
                'dark-vanilla': '#D4B9A1',
                'white-chocolate': '#EBE3DA',
                'dark-electric-blue': '#577083',
                'quick-silver': '#A0A1A5',
                'raisin-black': '#222120',
                'outer-space': '#444444'
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
};
