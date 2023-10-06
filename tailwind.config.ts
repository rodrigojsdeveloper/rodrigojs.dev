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
          2: "rgb(38 38 38/1)",
          3: "#A3A3A3",
          4: "#D4D4D4",
          5: "rgb(38 38 38/1)",
          6: "rgba(30, 27, 27, 1)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        81: "81.4px",
        230: "230px",
      },
      height: {
        40: "40px",
        81: "81.4px",
      },
      borderRadius: {
        "def": "6px",
      },
    },
  },
  plugins: [],
};
export default config;
