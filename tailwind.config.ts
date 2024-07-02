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
          1: '#1E1D1D',
          2: '#111928',
        },
        blue: {
          DEFAULT: '#0593D1',
          300: '#0194D3',
          400: '#015A99',
          500: '#013F70',
          600: '#E0F6FF',
          700: '#74A8DC',
          800: '#005494',
        },
        red: {
          DEFAULT: '#F23724',
          300: '#E54C3C',
          400: '#C43D30',
        },
        dark: {
          DEFAULT: '#535353',
          300: '#7A7A7A',
          100: '#A1A1A1',
          80: '#C8C8C8',
          60: '#EFEFEF',
          50: '#C1C7CD',
          40: '#637381',
          30: '#9CA3AF',
          20: '#D0D5DD',
        },
        white: {
          DEFAULT: '#FFFFFF',
          1: '#D9D9D9',
          2: '#DDE1E6',
          3: '#F1F1F1',
          4: '#F2F2F2',
          5: '#F0F0F0',
        },
        green: {
          DEFAULT: '#2E9D5E',
          1: '#EEFFFB',
          2: '#D5EADE',
        },
      },
      boxShadow: {
        1: '0px 1px 3px 0px #A6AFC366',
        2: '0px 4px 24px 0px #0000000D',
        3: '0px 3px 8px 0px #00000014',
        4: '0px 3px 15.2px 5px #00000003',
        5: '0px 4px 8px 0px #ADC4D524',
        6: '0px 1px 4px 0px #0C0C0D1A',
      },
    },
  },
  plugins: [],
}
export default config
