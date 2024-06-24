import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          80: '#333333',
          60: '#666666',
          40: '#999999',
          20: '#CCCCCC',
        },
        blue: {
          DEFAULT: '#0593D1',
        },
        red: {
          DEFAULT: '#F23724',
        },
        dark: {
          DEFAULT: '#535353',
          300: '#7A7A7A',
          100: '#A1A1A1',
          80: '#C8C8C8',
          60: '#EFEFEF',
          50: '#C1C7CD',
        },
        white: {
          DEFAULT: '#FFFFFF',
          1: '#D9D9D9',
          2: '#DDE1E6',
        },
      },
      boxShadow: {
        1: '0px 1px 3px 0px #A6AFC366',
      },
    },
  },
  plugins: [],
}
export default config
