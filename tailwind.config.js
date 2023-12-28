/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /col-start-./,
    },
    {
      pattern: /row-start-./,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // theme: false,
    themes: [
      {
        mytheme: {
          primary: "#17255A",
          secondary: "#BD1E1E",
          accent: "#F5E2C8",
          neutral: "#A9E5BB",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
