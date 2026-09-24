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
          bg: '#F8F7F4',          // Warm zacht wit — paginagrond
          fg: '#46515A',          // Zacht antraciet — tekst en donkere vlakken
          sage: '#2F6366',        // Diep teal — tekst, links, knoppen, logo
          teal: '#3F8588',        // Zacht teal — vlakken, geen tekst
          stone: '#71838B',       // Zacht blauwgrijs — randen en lijnen
          terra: '#7A5050',       // Diep oudroze — kleine labels
          clay: '#D8D6D1',        // Warm greige — accent op donkere grond
          white: '#FFFFFF',
          card: '#D8D6D1',        // Warm greige — afwisselende secties
          'card-dark': '#C9C6C0',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
        script: ['"Dr Sugiyama"', 'cursive'],
      },
      boxShadow: {
        'botanical-sm': '0 4px 6px -1px rgba(70,81,90,0.05)',
        'botanical-md': '0 10px 15px -3px rgba(70,81,90,0.07)',
        'botanical-lg': '0 20px 40px -10px rgba(70,81,90,0.08)',
        'botanical-xl': '0 25px 50px -12px rgba(70,81,90,0.15)',
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
