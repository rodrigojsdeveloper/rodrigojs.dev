import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['var(--font-kanit)'],
      },
      colors: {
        gray: {
          1: '#FFFFFF',
          2: '#D4D4D4',
          3: '#8C8C8C',
          4: '#2F2F2F',
          5: '#27272A',
          6: '#1E1B1B',
          7: '#171717',
        },
        link: {
          1: 'rgba(255, 255, 255, .04)',
          2: 'rgba(255, 255, 255, .12)',
        },
        button: {
          1: '#d9d9d9',
          2: 'hsla(0,0%,100%,.6)',
        },
        borderButton: {
          1: 'rgba(38, 38, 38, 0.10)',
          2: 'rgba(38, 38, 38, 0.30)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        45: '2.813rem',
        81: '5.063rem',
        121: '7.563rem',
        140: '8.75rem',
        152: '9.5rem',
        230: '14.375rem',
        488: '30.5rem',
        800: '50rem',
      },
      height: {
        44: '2.75rem',
        45: '2.813rem',
        81: '5.063rem',
        286: '17.875rem',
      },
      minHeight: {
        47: '2.938rem',
        408: '25.5rem',
      },
      borderRadius: {
        def: '0.375rem',
      },
      lineHeight: {
        1.8: '1.8rem',
      },
      keyframes: {
        up: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        down: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        up: 'up 0.3s',
        down: 'down 0.3s',
      },
    },
  },
  plugins: [],
}
export default config
