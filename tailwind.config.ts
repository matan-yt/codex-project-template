import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { hive: { 50: "#eef3ff", 100: "#dfe8ff", 200: "#c6d4ff", 500: "#516ee7", 700: "#263caa", 800: "#1d2d82", 900: "#172366", 950: "#101747" }, honey: { 100: "#fff4cc", 400: "#fbbf24", 700: "#a65b00", 800: "#854d0e", 900: "#713f12" } }, fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] } } },
  plugins: [],
};
export default config;
