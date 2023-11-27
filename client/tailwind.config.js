/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bgHeavy: "#111827",
          bgMid: "#1f2937",
          textPrimary: "#e1e4e8",
          textSecondary: "#4b5563",
        },
        light: {
          bgHeavy: "#f8fafb",
          bgMid: "#ffffff",
          textPrimary: "#4b5563",
          textSecondary: "#9ca3af",
        },
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdlg: "900px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
