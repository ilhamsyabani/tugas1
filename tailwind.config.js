/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('images/hero-image.jpg')",
      },
    },
  },
  plugins: [],
}

