/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        brightorange: '#ff8500',
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ul > li': {
              textIndent: '-1.25em',
              paddingLeft: '1.25em',
            },
          },
        },
      }),
    },
  },
  plugins: [],
}
