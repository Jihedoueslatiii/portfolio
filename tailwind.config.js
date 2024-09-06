module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Include all JS, JSX, TS, TSX files in the src directory
    './public/index.html',          // Include the main HTML file
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#012840',
        'slate-blue': '#025373',
        'steel-blue': '#03738C',
        'light-steel-blue': '#3FA8BF',
        'off-white': '#D9E2E8',
        'orange': '#F57C00',
        'green': '#388E3C',
        'yellow': '#FBC02D',
        'silver': '#C0C0C0',
        'gold': '#FFD700',
      },
    },
  },
};
