/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                main: "url('../assets/background.jpg')"
            }
        }
    },
    plugins: []
}
