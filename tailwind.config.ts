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
        primary: '#FAFAFA',
        secondary: '#EDEDED',
        'gray-100': '#888888',
        'gray-200': '#27272A',
        'gray-300': '#111111',
        hover: 'rgba(255, 255, 255, 0.04)',
        active: 'rgba(255, 255, 255, 0.12)',
        shadow: 'rgba(0, 0, 0, 0.5)',
        black: 'rgb(8, 5, 6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        def: '0.5rem',
      },
      keyframes: {
        up: {
          from: { opacity: '0', transform: 'translateY(1.25rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        down: {
          from: { opacity: '0', transform: 'translateY(-1.25rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        modal: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        up: 'up 0.3s',
        down: 'down 0.3s',
        modal: 'modal 0.2s',
      },
    },
  },
  plugins: [],
}

export default config
