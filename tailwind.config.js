/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }
      

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#0A0B0D",
        dark: "#111827",
        primary: {
          DEFAULT: "#3B82F6", // Modern blue
          50: "#EFF6FF",
          100: "#DBEAFE", 
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        accent: {
          DEFAULT: "#06B6D4", // Cyan accent
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6", 
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0", 
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        "bg-color-dark": "#0A0B0D",
        "body-color": {
          DEFAULT: "#64748B",
          dark: "#94A3B8",
        },
        stroke: {
          stroke: "#E2E8F0",
          dark: "#334155",
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-accent': '0 0 20px rgba(6, 182, 212, 0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        glow: "0 0 10px rgba(59, 130, 246, 0.4)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tech-grid': "linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'tech-grid': '20px 20px',
      },
    },
  },
  plugins: [],
};
