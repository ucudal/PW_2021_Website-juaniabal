module.exports = {
  purge: [
    "docs/*.html"
  ],
  darkMode: false, // false or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
