/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      'Jakarta': ['Plus Jakarta Sans'],
    },
    extend: {

      colors: {
        "color-primary-100": "#FFECCC",
        "color-primary-200": "#FFD399",
        "color-primary-300": "#FFB566",
        "color-primary-400": "#FF973F",
        "color-primary-500": "#FF6600",
        "color-primary-600": "#DB4A00",
        "color-primary-700": "#B73300",
        "color-primary-800": "#932100",
        "color-primary-900": "#7A1400",
        "color-success-100": "#F1FDD5",
        "color-success-200": "#DFFCAC",
        "color-success-300": "#C7F882",
        "color-success-400": "#AEF161",
        "color-success-500": "#89E830",
        "color-success-600": "#6AC723",
        "color-success-700": "#4EA718",
        "color-success-800": "#36860F",
        "color-success-900": "#256F09",
        "color-info-100": "#CBFEF5",
        "color-info-200": "#99FDF3",
        "color-info-300": "#65FBF7",
        "color-info-400": "#3FEEF8",
        "color-info-500": "#02D4F4",
        "color-info-600": "#01A5D1",
        "color-info-700": "#017DAF",
        "color-info-800": "#00598D",
        "color-info-900": "#004075",
        "color-warning-100": "#FFF9D1",
        "color-warning-200": "#FFF2A3",
        "color-warning-300": "#FFE975",
        "color-warning-400": "#FFE052",
        "color-warning-500": "#FFD119",
        "color-warning-600": "#DBAE12",
        "color-warning-700": "#B78E0C",
        "color-warning-800": "#936F07",
        "color-warning-900": "#7A5904",
        "color-danger-100": "#FEEAD1",
        "color-danger-200": "#FECFA4",
        "color-danger-300": "#FEAE77",
        "color-danger-400": "#FD8E55",
        "color-danger-500": "#FC591E",
        "color-danger-600": "#D83C15",
        "color-danger-700": "#B5240F",
        "color-danger-800": "#921109",
        "color-danger-900": "#780507"
      }
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
}

