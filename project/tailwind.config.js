/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F8F5F0',
          100: '#F2EBE1',
          200: '#E5D7C3',
          300: '#D8C3A5',
          400: '#C2A278',
          500: '#A67C52',
          600: '#8B5A2B',
          700: '#6F4518',
          800: '#5A3816',
          900: '#422A12',
        },
        accent: {
          50: '#FCE9E7',
          100: '#F9D3CF',
          200: '#F2A7A0',
          300: '#EB7B70',
          400: '#E54F41',
          500: '#C73A2D',
          600: '#AA2E1E',
          700: '#8C1C13',
          800: '#6E140C',
          900: '#500C06',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFF9F0',
          200: '#F9F0E1',
          300: '#F5E9D4',
          400: '#EFE0C2',
          500: '#E7D2A6',
          600: '#D9BE86',
          700: '#C7A660',
          800: '#AC8A40',
          900: '#806728',
        },
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'warm': '0 10px 25px -5px rgba(166, 124, 82, 0.15)',
      },
    },
  },
  plugins: [],
};