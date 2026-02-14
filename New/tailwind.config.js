/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050505",
        secondary: "#0A0A0C",
        accent: {
          red: "#B11226",
          amber: "#FF8A00",
          green: "#2ECC71",
        },
        void: "#050505",
        "warm-glow": "#0B0705",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
        display: ["Modern Grotesk", "Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at center, #0B0705 0%, #050505 100%)',
      }
    },
  },
  plugins: [],
}
