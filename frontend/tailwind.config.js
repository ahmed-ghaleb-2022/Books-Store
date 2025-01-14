/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        btn_primary: "#edbf68",
        btn_hover: "#f5b744",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

