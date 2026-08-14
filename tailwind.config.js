export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#12151c',
          muted: '#5b6472',
          faint: '#8b93a1',
          line: '#e6e8ee',
          wash: '#f7f8fa',
        },
        sapphire: {
          50: '#eef3fd',
          100: '#dbe6fb',
          200: '#b7ccf7',
          400: '#4c7fe6',
          500: '#2a5fd0',
          600: '#1e4bad',
          700: '#183a86',
        },
        ruby: {
          50: '#fdeef1',
          100: '#fbdbe1',
          400: '#e05068',
          500: '#c8203f',
          600: '#a5122f',
        },
        emeraldg: {
          50: '#e9f7f1',
          100: '#d2efe3',
          400: '#2fa87a',
          500: '#128a5f',
          600: '#0c6c4b',
        },
        amethyst: {
          50: '#f3eefd',
          100: '#e7dcfb',
          400: '#8b5cf0',
          500: '#6d33d9',
          600: '#5624b0',
        },
        gold: {
          50: '#fdf6e8',
          100: '#f9ecd0',
          500: '#b08423',
          600: '#8d681a',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(18,21,28,0.04), 0 8px 24px -12px rgba(18,21,28,0.12)',
        lift: '0 2px 4px rgba(18,21,28,0.05), 0 20px 40px -18px rgba(18,21,28,0.25)',
      },
      transitionTimingFunction: {
        gem: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
