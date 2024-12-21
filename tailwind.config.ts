import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // heliotrope default 400
        hotpink: {
          default: "#e879f9",
          "50": "#fef4ff",
          "100": "#fce8ff",
          "200": "#f8d0fe",
          "300": "#f1abfc",
          "400": "#e879f9",
          "500": "#d946ef",
          "600": "#bc26d3",
          "700": "#9b1caf",
          "800": "#7f198f",
          "900": "#691a75",
          "950": "#44044e",
        },
        // malibu default 400
        skyBlue: {
          default: "#62bfed",
          "50": "#f1f9fe",
          "100": "#e2f1fc",
          "200": "#bfe3f8",
          "300": "#86cdf3",
          "400": "#62bfed",
          "500": "#1e9bd9",
          "600": "#117bb8",
          "700": "#0f6395",
          "800": "#10537c",
          "900": "#134667",
          "950": "#0d2d44",
        },
        // dodger-blue default 500
        blue: {
          default: "#3590f3",
          "50": "#eff8ff",
          "100": "#dbedfe",
          "200": "#c0e1fd",
          "300": "#94cffc",
          "400": "#62b4f8",
          "500": "#3590f3",
          "600": "#2877e8",
          "700": "#1f61d6",
          "800": "#204fad",
          "900": "#1f4689",
          "950": "#182b53",
        },
        // 'steel-gray' default 950
        grayViolet: {
          default: "#40416f",
          "50": "#f2f5fb",
          "100": "#e7ecf8",
          "200": "#d3dbf2",
          "300": "#b8c3e9",
          "400": "#9ba5de",
          "500": "#8188d3",
          "600": "#6869c3",
          "700": "#5957ab",
          "800": "#49498a",
          "900": "#40416f",
          "950": "#22223b",
        },
        // gun-powder default 900
        grayBlue: {
          default: "#4a4e69",
          "50": "#f5f6f9",
          "100": "#e8ebf1",
          "200": "#d6dce7",
          "300": "#bac3d6",
          "400": "#98a6c2",
          "500": "#7f8bb2",
          "600": "#6d77a3",
          "700": "#616894",
          "800": "#53577a",
          "900": "#4a4e69",
          "950": "#2d2f3e",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
