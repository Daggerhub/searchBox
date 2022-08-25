module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '564px',
      lg: '1184px'
    },
      maxWidth: {
        sm:'504px',
        lg: "1112px"
      },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
