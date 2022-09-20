/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                noto: ["Noto Sans"],
                josefin: ["Josefin Sans"],
                sans: ["ui-sans-serif", "system-ui"],
                serif: ["ui-serif", "Georgia"],
                mono: ["ui-monospace", "SFMono-Regular"],
                display: ["Oswald"],
                body: ['"Open Sans"'],
            },
        },
    },
    plugins: [],
};
