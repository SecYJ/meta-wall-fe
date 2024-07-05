/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.25rem",
            },
        },
        extend: {
            colors: {
                primary: "#03438D",
                dark: "#000400",
                shadow: "#9B9893",
            },
        },
    },
    plugins: [],
};
