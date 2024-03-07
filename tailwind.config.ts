import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.76, 0, 0.24, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      transformOrigin: {
        "bottom-center": "bottom center",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".transform-style-preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".rotate-x-90": {
          transform: "rotateX(90deg)",
        },
        ".-rotate-x-90": {
          transform: "rotateX(-90deg)",
        },
        ".-rotate-x-90-translate-y-12": {
          transform: "rotateX(-90deg) translateY(12px)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
