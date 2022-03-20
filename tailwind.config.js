const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                default: "#f6f6f6",
                dark: "#111111",
                muted: "#3f3f3f",
                primary: {
                    default: "#ffcb74",
                    dark: "#ffb854",
                },
                secondary: {
                    default: "#efefef",
                    dark: "#dfdfdf",
                },
            },
            fontFamily: {
                "tajawal-regular": "Tajawal-Regular",
                "tajawal-bold": "Tajawal-Bold",
                "tajawal-Black": "Tajawal-Black",
                "tajawal-light": "Tajawal-Light",
                "tajawal-extrabold": "Tajawal-ExtraBold",
            },
        },
    },

    plugins: [require("flowbite/plugin")],
};
