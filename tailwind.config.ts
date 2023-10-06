import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "rgb(255 255 255/1)",
          2: "#262626",
          3: "#A3A3A3",
          4: "#D4D4D4",
          5: "rgb(38 38 38/1)",
          6: "rgba(30, 27, 27, 1)",
          7: "rgb(39 39 42/1)",
          8: "rgba(255, 255, 255, 0.1)",
          9: "#171717",
          10: "hsla(0,0%,100%,.7)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        81: "81.4px",
        121: "121px",
        152: "152px",
        230: "230px",
        340: "340px",
        366: "366px",
        448: "488px",
        456: "456px",
        800: "800px",
        1440: "1440px",
      },
      height: {
        40: "40px",
        44: "44px",
        45: "45px",
        58: "58px",
        81: "81.4px",
        315: "315px",
        408: "408px",
      },
      borderRadius: {
        "def": "6px",
      },
      lineHeight: {
        1.8: "1.8rem",
      },
    },
  },
  plugins: [],
};
export default config;
