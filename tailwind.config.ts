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
          1: '#8C8C8C',
          2: '#2F2F2F',
        },
        link: {
          1: 'rgba(255, 255, 255, .1)',
          2: 'rgba(255, 255, 255, .12)',
        },
        button: {
          1: '#d9d9d9',
          2: 'hsla(0,0%,100%,.6)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        121: '7.563rem',
        140: '8.75rem',
        152: '9.5rem',
        230: '14.375rem',
        488: '30.5rem',
        800: '50rem',
      },
      height: {
        1: '0.006rem',
      },
      minHeight: {
        47: '2.938rem',
      },
      borderRadius: {
        def: '0.5rem',
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
