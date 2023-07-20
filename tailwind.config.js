/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "black": "#08070B",
      "offblack": "#14131B",
      "gray": "#817D92",
      "offgray": "#24232C"
    },
    extend: {
      fontFamily: {
        "regular": ["regular"],
        "bold": ["bold"]
      }
    },
  },
  plugins: [],
}

