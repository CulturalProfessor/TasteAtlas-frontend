/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                'ibm' : ["IBM Plex Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
