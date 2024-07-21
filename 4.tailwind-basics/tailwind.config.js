/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                bebas: ['Bebas Neue', 'sans-serif'],
            },
            // fontSize: {
            //     sm: '0.8rem',
            //     base: '1rem',
            //     xl: '1.25rem',
            //     '2xl': '1.563rem',
            //     '3xl': '1.953rem',
            //     '4xl': '2.441rem',
            //     '5xl': '3.052rem',
            //     hj: '100px',
            // },
            // colors: {
            //     'pure-red': '#FF0000',
            // },
            fontWeight: {
                sampleBold: 500, //font-sampleBold
            },
        },
        // override
        // screens: {
        //     tablet: '640px',
        // },
    },
    plugins: [],
    darkMode: 'selector',
};
