import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'verde': {
          DEFAULT: '#009608',
          light: '#00b80a',
          dark: '#015A21',
        },
        'amarelo': {
          DEFAULT: '#FFCD57',
          light: '#FFE08A',
          dark: '#E5B54D',
        },
        'roxo': {
          DEFAULT: '#C10FFF',
          light: '#D847FF',
          dark: '#9900CC',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
