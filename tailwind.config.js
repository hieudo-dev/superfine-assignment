module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        bluegray: '#1E293E',
        dark: '#141B2E',
        pink: '#9F8BC6',
        purple: '#6A6FFA',
      },
      aspectRatio: {
        'thumbnail': '2.5/1'
      }
    }
  }
};
