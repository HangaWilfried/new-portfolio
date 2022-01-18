module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "photo": "url('../src/assets/whisky.jpg')"
      }
    },
  },
  plugins: [],
}
