/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "base": "linear-gradient(45deg, #1ed8fd, #aa37cf, #090815)",
      },
      fontFamily: {
        "sora": ['Sora', "sans-serif"]
      }
    },
  },
  plugins: [],
}