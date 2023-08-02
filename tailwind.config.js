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
        primary: '#edf6f9',
        secundary: '#006d77',
        action: '#006d77',
        white: '#f2e9e4',
        contrast: '#457b9d'
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
