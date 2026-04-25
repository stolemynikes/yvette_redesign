/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          bg: '#F9F8F4',
          fg: '#2D3A31',
          sage: '#8C9A84',
          clay: '#DCCFC2',
          stone: '#E6E2DA',
          terra: '#C27B66',
          white: '#FFFFFF',
          card: '#F2F0EB',
          'card-dark': '#EAE7E1',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'botanical-sm': '0 4px 6px -1px rgba(45,58,49,0.05)',
        'botanical-md': '0 10px 15px -3px rgba(45,58,49,0.07)',
        'botanical-lg': '0 20px 40px -10px rgba(45,58,49,0.08)',
        'botanical-xl': '0 25px 50px -12px rgba(45,58,49,0.15)',
      },
      borderRadius: {
        arch: '200px 200px 0 0',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        700: '700ms',
        1000: '1000ms',
      },
    },
  },
  plugins: [],
}
