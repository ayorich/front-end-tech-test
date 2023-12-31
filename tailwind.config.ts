import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ['Monument', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
      },
      colors: {
        purple: '#AB23FF',
        blue: '#3d8bff',
        grey: {
          100: '#13171D',
        },
      },
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
