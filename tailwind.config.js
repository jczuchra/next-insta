module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        black1: '#262626',
        black2: '#383838',
        blue1: '#0095f6',
        gray1: '#8e8e8e',
        gray2: '#dbdbdb',
        gray3: '#fafafa',
        gray4: '#c7c7c7',
      },
      boxShadow: {
        csm: '0 0 5px 1px rgba(var(--jb7,0,0,0),.0975)',
        '5csm': '0 5px 5px 1px rgba(var(--jb7,0,0,0),.0975)',
      },
      borderRadius: {
        sm: '3px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
