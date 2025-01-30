/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    plugins: [],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn .2s ease-in-out"
            },
            keyframes: {
                fadeIn: {
                    "0%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 1
                    }
                }
            }
        }
    }
}

