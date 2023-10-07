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
          1: "#FFFFFF",
          2: "#262626",
          3: "#A3A3A3",
          4: "#D4D4D4",
          5: "#262626",
          6: "rgba(30, 27, 27, 1)",
          7: "#27272A",
          9: "#171717",
        },
        link: {
          1: "rgba(255, 255, 255, 0.1)",
          2: "rgba(255, 255, 255, 0.2)",
        },
        button: {
          1: "hsla(0,0%,100%,.7)",
          2: "hsla(0,0%,100%,.4)",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        45: "45px",
        81: "81.4px",
        121: "121px",
        140: "140px",
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
        81: "81.4px",
        286: "286px",
        315: "315px",
        408: "408px",
      },
      minHeight: {
        58: "58px",
      },
      borderRadius: {
        "def": "6px",
      },
      lineHeight: {
        1.8: "1.8rem",
      },
      keyframes: {
        up: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        up: "up 0.3s",
      },
    },
  },
  plugins: [],
};
export default config;
