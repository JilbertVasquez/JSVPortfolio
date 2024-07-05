/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '360px',
      'xs': '384px',
      // 'xs': '384px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
    },
    extend: {
      fontSize: {
        'xxs': '0.625rem', // 10px
        'xxxs': '0.5rem',  // 8px
      },
      width: {
        'w-22': '5.5rem',
      },
      height: {
        'h-1/10': '10rem',
        'h-2/10': '20rem',
        'h-3/10': '30rem',
        'h-4/10': '40rem',
        'h-5/10': '50rem',
        'h-6/10': '60rem',
        'h-7/10': '70rem',
        'h-8/10': '80rem',
        'h-9/10': '90rem',
        'h-10/10': '100rem',
      },
    },
  },
  plugins: [],
};
