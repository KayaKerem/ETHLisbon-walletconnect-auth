/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerBg: "#141414",
        blackBg: "#000000",
      },
      backgroundImage: {
        "box-pattern":
          "conic-gradient(from 115.69deg at 50% 50%, rgba(7, 39, 153, 0.47) 0deg, rgba(148, 241, 140, 0.54) 126.75deg, rgba(153, 9, 9, 0.17) 228deg, rgba(248, 144, 243, 0.41) 360deg)",
        boxPattern: "url('/src/images/gradBox.png')",
        buttonM: "url('/src/images.png')",
      },
    },
  },
  plugins: [],
};
