/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.html"],
  theme: {
    screens: {
      'mobile': {'max': '768px'},
      // => @media (max-width: 768px) {}

      'desktop': '768.5px',
      // => @media (min-width: 768.5px) {}
    },

    fontFamily: { 'kumbh-400-700': ['Kumbh Sans', 'sans-serif'], },

    fontSize: {
      'name-d': ['1.172vw', {
        fontWeight: '700',
      }],

      'name-m': ['2.344vw', {
        fontWeight: '700',
      }],

      'age-d': '1.172vw',
      'age-m': '2.344vw',

      'city-d': '0.977vw',
      'city-m': '1.954vw',

      'stats-h-d': ['1.2vw', {
        fontWeight: '700',
      }],

      'stats-h-m': ['2.4vw', {
        fontWeight: '700',
      }],

      'stats-p-d': ['.7vw', {
        letterSpacing: '.1vw',
      }],

      'stats-p-m': ['1.4vw', {
        letterSpacing: '.2vw',
      }],

      'attribution-d': '0.716vw',
      'attribution-m': '1.432vw',
    },

    extend: {
      gap: {
        'stats-m': '6vw',
        'stats-d': '3vw',
      },

      colors: {
        'white': 'rgba(255,255,255)',
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
        'attribution': 'rgba(255, 0, 0)',
      },

      boxShadow: {
        'desktop': '0 0.260vw 0.521vw 0 rgba(0, 0, 0, 0.2), 0 0.391vw 1.302vw 0 rgba(0, 0, 0, 0.19)',
        'mobile': '0 0.520vw 1.042vw 0 rgba(0, 0, 0, 0.2), 0 0.782vw 2.604vw 0 rgba(0, 0, 0, 0.19)',
      }
    },
  },
  plugins: [],
}
