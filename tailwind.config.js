/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "#FFF5F7",
          100: "#FCE4EC",
          200: "#F8BBD9",
          300: "#F48FB1",
          400: "#F06292",
          500: "#EC407A",
          600: "#D81B60",
        },
      },
      fontFamily: {
        sans: ["Nunito", "ui-rounded", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "float-heart": "floatUp 2.4s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(0) scale(0.8)" },
          "20%": { opacity: "1" },
          "80%": { opacity: "0.6" },
          "100%": { opacity: "0", transform: "translateY(-48px) scale(1.3)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
