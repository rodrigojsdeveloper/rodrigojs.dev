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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        hover: 'var(--hover)',
        shadow: 'var(--shadow)',
        black: 'var(--black)',
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
  plugins: [require('tailwindcss-animate')],
}

export default config
