/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        modyo: {
          green: '#3dc681',
          blue: '#151f38',
        },
      },
      textColor: {
        modyo: {
          green: '#3dc681',
          blue: '#151f38',
        },
      },
      borderColor: {
        modyo: {
          green: '#3dc681',
          blue: '#151f38',
        },
      },
    },
  },
  plugins: [],
};
