import { Config } from "tailwindcss";

module.export = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#9333ea",
        accent: "#f59e0b",
        dark: "#111827",
        neutral: "#f3f4f6",
      },
    },
  },
  plugins: [],
}