/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bevietnam: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        white: '#FFF',
        black: '#000',
        orange_50: '#FF9500',
        orange_70: '#FFBF66',
        orange_75: '#FFCA80',
        orange_80: '#FFD499',
        orange_90: '#FFEACC',
        orange_95: '#FFF4E5',
        orange_97: '#FFF9F0',
        orange_99: '#FFFDFA',
        white_90: '#E4E4E7',
        white_95: '#F1F1F3',
        white_97: '#F7F7F8',
        white_99: '#FCFCFD',
        grey_10: '#191919',
        grey_15: '#262626',
        grey_20: '#333333',
        grey_30: '#4C4C4D',
        grey_35: '#59595A',
        grey_40: '#656567',
        grey_60: '#98989A',
        grey_70: '#B3B3B3',
      },
      screens: {
        laptop: '1440px',
        desktop: '1920px',
      },
    },
  },
  plugins: [],
};
