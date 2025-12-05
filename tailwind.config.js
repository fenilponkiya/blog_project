/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10152E",
        secondary: "#262D4D",
        dark: "#000000",
        semiDark: "#121212",
        light: "#4E5265",
        semiLight: "#757575",
        divider: "#E5E6EA",
        buttonBorder: "#05091C",
        rating: "#FFBB00",
        inputBg: "#F5F5F5",
        inputLabel: "#3E3232",
        footerBg: "#f5f5f6",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      screens: {
        xs: "365px",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "calc(1 / 0.75)" }],
        sm: ["0.875rem", { lineHeight: "calc(1.25 / 0.875)" }],
        base: ["1rem", { lineHeight: "calc(1.5 / 1)" }],
        lg: ["1.125rem", { lineHeight: "calc(1.75 / 1.125)" }],
        xl: ["1.25rem", { lineHeight: "calc(1.75 / 1.25)" }],
        "2xl": ["1.5rem", { lineHeight: "calc(2 / 1.5)" }],
        "3xl": ["1.875rem", { lineHeight: "calc(2.25 / 1.875)" }],
        "4xl": ["2.25rem", { lineHeight: "calc(2.5 / 2.25)" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
