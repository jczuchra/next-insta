module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        csm: '0 0 5px 1px rgba(var(--jb7,0,0,0),.0975)',
        '5csm': '0 5px 5px 1px rgba(var(--jb7,0,0,0),.0975)',
      },
    },
  },
  variants: {},
  plugins: [],
};
