/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#83c5be',
        secundary: '#006d77',
        action: '#e29578',
        white: '#f2e9e4',
        contrast: '#c9ada7'
      },
      width: {
        card: '300px'
      },
      height: {
        card: '200px'
      },
      minHeight: {
        banner: '70vh'
      }
    }
  },
  plugins: []
}
