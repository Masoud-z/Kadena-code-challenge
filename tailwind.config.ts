import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // mobile: "300px",
      tablet: "768px",
      desktop: "1024px",
    },
    colors: {
      white: "#fff",
      black: "#000",

      // Primary
      primary: "#222F60", // primary900 or mui primary
      primary50: "#E8EBF2",
      primary100: "#C5CDE0",
      primary200: "#A0ADCB",
      primary300: "#7B8DB6",
      primary400: "#5F73A7",
      primary500: "#425C9A",
      primary600: "#3C5490",
      primary700: "#334A85",
      primary800: "#2C4078",

      // Primary Blue
      primaryBlue: "#4F80FB", // primaryBlue600 or mui secondary
      primaryBlue50: "#E4F1FF",
      primaryBlue100: "#C0DCFF",
      primaryBlue200: "#98C7FF",
      primaryBlue300: "#70B1FF",
      primaryBlue400: "#59A0FF",
      primaryBlue500: "#4E8FFF",
      primaryBlue700: "#4E6DE6",
      primaryBlue800: "#4C5AD3",
      primaryBlue900: "#4838B2",

      // Success
      success: "#05D988", // success300 or mui success
      success50: "#E0F9EB",
      success100: "#B3EFCC",
      success200: "#7AE4AB",
      success400: "#00CF6C",
      success500: "#00C454",
      success600: "#ff0000",
      success700: "#00A13D",
      success800: "#008F31",
      success900: "#006E1B",

      // Error
      error: "#FC5977", // error300 or mui error
      error50: "#FFE9F0",
      error100: "#FFC7D6",
      error200: "#FF8D9E",
      error400: "#FF0054",
      error500: "#FF003A",
      error600: "#FF003A",
      error700: "#EE0033",
      error800: "#E0002C",
      error900: "#D0001F",

      // Warning
      warning50: "#FFF8E0",
      warning100: "#FEEBB1",
      warning200: "#FEDE7E",
      warning300: "#FDD348",
      warning400: "#FDC719",
      warning500: "#FCBE00",
      warning600: "#FDB000",
      warning700: "#FD9D00",
      warning800: "#FD8C00",
      warning900: "#FE7900",

      // Modern Blue
      modernBlue50: "#E4E9F2",
      modernBlue100: "#B9C8E2",
      modernBlue200: "#89A4D1",
      modernBlue300: "#5481C0",
      modernBlue400: "#1767B6",
      modernBlue500: "#004EAB",
      modernBlue600: "#0047A2",
      modernBlue700: "#003E97",
      modernBlue800: "#00348B",
      modernBlue900: "#002478",

      // Grey
      grey: "#737373", // grey500
      grey50: "#FAFAFA",
      grey100: "#F5F5F5",
      grey200: "#E5E5E5",
      grey300: "#D6D6D6",
      grey400: "#A3A3A3",
      grey600: "#525252",
      grey700: "#424242",
      grey800: "#292929",
      grey900: "#141414",

      // Purple
      purple50: "#F4F3FF",
      purple100: "#EBE9FE",
      purple200: "#D9D6FE",
      purple300: "#BDB4FE",
      purple400: "#9B8AFB",
      purple500: "#7A5AF8",
      purple600: "#6938EF",
      purple700: "#5925DC",
      purple800: "#4A1FB8",
      purple900: "#3E1C96",
    },
    spacing: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "13": "56px",
    },
    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
    },

    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
export default config;
