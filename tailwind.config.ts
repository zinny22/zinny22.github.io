import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        point: "#ff8900",
        pointBg: "#ffb783",
      },
    },
    screens: {
      mobile: "360px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
export default config;
