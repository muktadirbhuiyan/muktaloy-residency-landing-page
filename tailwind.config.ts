import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbf5",
          100: "#d5f5e4",
          200: "#afebcd",
          300: "#7edcaf",
          400: "#46c78d",
          500: "#21ab72",
          600: "#14895c",
          700: "#136d4b",
          800: "#14563d",
          900: "#124733"
        },
        accent: {
          50: "#fffaf0",
          100: "#fdf0cf",
          200: "#f8de9a",
          300: "#f1c869",
          400: "#e9b142",
          500: "#d9962a",
          600: "#b97822",
          700: "#955b1f",
          800: "#7b4b1f",
          900: "#68401d"
        }
      },
      boxShadow: {
        premium: "0 18px 45px -20px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
