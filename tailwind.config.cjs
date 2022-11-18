/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xl: ['64px', {
          lineHeight: '88px',
          letterSpacing: '1px'
        }],
        lg: ['56px', {
          lineHeight: '72px',
          letterSpacing: '1px'
        }],
        md: ['48px', {
          lineHeight: '56px',
          letterSpacing: '1px'
        }],
        sm: ['32px', {
          lineHeight: '48px',
          letterSpacing: '1px'
        }],
        xs: ['24px', {
          lineHeight: '32px',
          letterSpacing: '1px'
        }],
        base: ['15px', {
          lineHeight: '24px',
          letterSpacing: '0.75px'
        }]
      },
      colors: {
        'neutral-1': '#FFFFFF',
        'neutral-2': '#94979A',
        'neutral-3': '#393D41',
        'neutral-4': '#2c2f33',
        'neutral-5': '#222528',
        'primary-1': '#f4ccc8',
        'primary-2': '#eba59e',
        'primary-3': '#e27d73',
        'primary-4': '#da584b',
        'secondary-1': '#c8e1bc',
        'secondary-2': '#aad199',
        'secondary-3': '#8dc275',
        'secondary-4': '#70b252',
        'tertiary-1': '#f9eed7',
        'tertiary-2': '#f2daab',
        'tertiary-3': '#ebc77f',
        'tertiary-4': '#e5b454'

      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}