const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#242424",
        gray: "#9fa0a0",
        dark: "#353126",
        darkFaded: "rgba(54, 49, 38, 0.5)",
        light: "#f7f6f6",
        spring: "#f0f4ef",
        summer: "#f7f5e8",
        autumn: "#f8e7e1",
        winter: "#e2e4eb",
        shokan: "#557FBF",
        daikan: "#77A9D4",
        risshun: "#71A5C6",
        usui: "#73BEB5",
        keichitsu: "#66BFA7",
        shunbun: "#70D2AD",
        seimei: "#9AEC99",
        koku: "#DCF7C7",
        rikka: "#E4F2C1",
        shoman: "#E9F5BF",
        boshu: "#F5F4A7",
        geshi: "#F9EC5F",
        shousho: "#FCD084", //'#FCBA4A',
        taisho: "#FF9E51",
        risshu: "#FE8860",
        shosho: "#FC885B",
        hakuro: "#F75953",
        shubun: "#E44C4D",
        kanro: "#EF565E",
        soko: "#8C5370",
        ritto: "#8C5F8F",
        shosetsu: "#6F65A1",
        taisetsu: "#5976A9",
        toji: "#6787B9",
      },
      fontFamily: {
        serif: ["var(--font-quadraat)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
