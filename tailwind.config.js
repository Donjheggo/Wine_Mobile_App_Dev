/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "poppins-light": ["Light", "sans-serif"],
        "poppins-regular": ["Regular", "sans-serif"],
        "poppins-medium": ["Medium", "sans-serif"],
        "poppins-semibold": ["SemiBold", "sans-serif"],
        "poppins-bold": ["Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
