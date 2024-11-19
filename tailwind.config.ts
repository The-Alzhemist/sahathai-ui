import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0194D3',
          1: '#00467B',
        },
        secondary: {
          DEFAULT: '#C43D30',
          1: '#E54C3C',
        },
        background: {
          DEFAULT: '#005494',
        },
        navy: {
          DEFAULT: '#015A99',
        },
        darkGray: {
          DEFAULT: '#454545',
        },
        white: {
          DEFAULT: '#FFFFFF',
          1: '#F5F5F5',
          2: '#DFE4EA',
        },
        modellBgDark: {
          DEFAULT: '#08254F',
        },
        border: {
          DEFAULT: '#A8DBFF',
          1: '#D5D5D5',
        },
        black: {
          DEFAULT: '#000000',
          2: '#637381',
          3: '#333333',
          6: '#666666',
          8: '#C8C8C8',
        },
        placeholder: {
          DEFAULT: '#9CA3AF',
        },
        lightGray: {
          DEFAULT: '#999999',
        },
        // --------- old -----------
        blue: {
          DEFAULT: '#0593D1',
          50: '#F9FCFF',
          100: '#B2D9FF',
          200: '#33B1E6',
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
        green: {
          DEFAULT: '#2E9D5E',
          1: '#EEFFFB',
          2: '#D5EADE',
        },
      },
      boxShadow: {
        1: '0px 8px 20px 0px #00000026',
        2: '0px 7px 20px 0px #00000026',
        3: '0px 7px 20px 0px #0000001A',
        4: '0px 3px 10px 0px #00000026',
        5: '0px 5px 11.3px 0px #00000026',
        6: '0px 3px 25px 0px #0000000D',
        7: '0px 1px 10px 2px #00000026',
        8: '0px 3px 30px 0px #0000001A',

        // 1: '0px 1px 3px 0px #A6AFC366',
        // 2: '0px 4px 24px 0px #0000000D',
        // 3: '0px 3px 8px 0px #00000014',
        // 4: '0px 3px 15.2px 5px #00000003',
        // 5: '0px 4px 8px 0px #ADC4D524',
        // 6: '0px 1px 4px 0px #0C0C0D1A',
        // 7: ' 0px 4px 24px 0px #00000024',
      },
    },
  },
  plugins: [],
}
export default config
