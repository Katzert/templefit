import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./life-system-pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'temple-gold': '#D4AF37',
        'temple-gold-bright': '#F3E5AB',
        'temple-gold-dark': '#997D25',
        'temple-navy': '#002147',
        'temple-navy-dark': '#001630',
        'temple-navy-light': '#003366',
        'temple-gold': '#C5A059',
        'temple-gold-bright': '#E5C175',
        'temple-gold-dark': '#9A7B3E',
        'temple-red': '#D32F2F',
        'temple-cream': '#F9F6F0',
        'metal-bronze': '#CD7F32',
        'metal-silver': '#C0C8D0',
        'metal-gold': '#D4AF37',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
