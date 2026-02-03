import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#a3b341',
          500: '#8fa32e',
          600: '#75870c',
        },
        secondary: {
          500: '#4a5568',
          600: '#2d3748',
        },
        gold: {
          500: '#d4af37',
        },
        dark: {
          DEFAULT: '#212020',
          lighter: '#181818',
          border: '#33353F',
        },
        muted: '#ADB7BE',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
