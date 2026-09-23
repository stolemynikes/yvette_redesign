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
          bg: '#F2F3F2',          // Lichte achtergrond — koel zachtgrijs
          fg: '#394348',          // Donkere tekst — zacht antraciet
          sage: '#2C6975',        // Hoofdkleur — teal
          stone: '#8FA6AE',       // Zachte tweede kleur — blauwgrijs
          terra: '#B58C99',       // Accentkleur — gedempt oudroze
          clay: '#8FA6AE',        // accent op donkere grond
          white: '#FAFAF8',       // Wit — zacht wit
          card: '#FAFAF8',        // rustige vlakken
          'card-dark': '#E9ECEB',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
        script: ['"Dr Sugiyama"', 'cursive'],
      },
      boxShadow: {
        'botanical-sm': '0 4px 6px -1px rgba(44,58,62,0.05)',
        'botanical-md': '0 10px 15px -3px rgba(44,58,62,0.07)',
        'botanical-lg': '0 20px 40px -10px rgba(44,58,62,0.08)',
        'botanical-xl': '0 25px 50px -12px rgba(44,58,62,0.15)',
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
