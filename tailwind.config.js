/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                pRegular: ["PoetsenOne-Regular", "sans-serif"],
                mExtraBold: ["MavenPro-ExtraBold", "sans-serif"],
                mBlack: ["MavenPro-Black", "sans-serif"],
                mBold: ["MavenPro-Bold", "sans-serif"],
                mSemibold: ["MavenPro-SemiBold", "sans-serif"],
                mMedium: ["MavenPro-Medium", "sans-serif"],
                mRegular: ["MavenPro-Regular", "sans-serif"],
            },
        },
    },
    plugins: [],
}
