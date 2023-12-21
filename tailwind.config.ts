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
        line: '#333333',
        'dark-grey': '#0A0A0A',
        'color-paragraph': '#888888',
        'link-hover': 'rgba(255, 255, 255, 0.04)',
        'link-active': 'rgba(255, 255, 255, 0.12)',
        shadow: 'rgba(0, 0, 0, 0.5)',
        'color-title': '#EDEDED',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        def: '0.4rem',
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
