/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        lato: 'Lato',
        
      },
      colors: {
        'bg-skill': '#2e313f', 
        'card-bg': '#2d3748',
      }
    },
  },
  plugins: [],
}

