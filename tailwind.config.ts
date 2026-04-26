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
        temple: {
          navy: '#002147',
          gold: '#C5A059',
          red: '#D32F2F',
          cream: '#F9F6F0',
        },
        vintage: {
          light: '#f5efe6',
          base: '#e8dfd0',
          dark: '#d1c4b1',
        },
        navy: {
          light: '#003366',
          base: '#002147',
          dark: '#001a38',
        },
        accent: {
          gold: '#C5A059',
          rust: '#D32F2F',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        sport: ['var(--font-inter)', 'sans-serif'], // We'll use Inter with skew
      },
      keyframes: {
        logoGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(197, 160, 89, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(197, 160, 89, 0.6))' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'logo-glow': 'logoGlow 3s infinite ease-in-out',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "vibrant-navy": "linear-gradient(135deg, #002147 0%, #003366 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
