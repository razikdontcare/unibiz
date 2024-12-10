import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1486C3",
        secondary: "#2A9F7F",
        border: "#AFAFAF",
        "disable-primary": "#E4E4E4",
        "disable-secondary": "#A9A6A6",
      },
    },
  },
  plugins: [],
} satisfies Config;
