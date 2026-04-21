import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          light: '#f5efe6', // Warm off-white
          base: '#e8dfd0',  // Warm beige
          dark: '#d1c4b1',  // Darker beige
        },
        navy: {
          light: '#2a3b5c',
          base: '#1a253a', // Authoritative navy
          dark: '#0f172a',
        },
        accent: {
          gold: '#c19a6b', // Vintage elegant gold
          rust: '#9b4a3a', // Warm rust/red for CTA
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
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
