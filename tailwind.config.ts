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
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        hover: 'var(--hover)',
        shadow: 'var(--shadow)',
        background: 'var(--background)',
        button: 'var(--button)',
      },
      backgroundImage: {
        'fade-gradient':
          'linear-gradient(90deg, var(--background), transparent 20%, transparent 80%, var(--background))',
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
        slide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1rem))' },
        },
      },
      animation: {
        up: 'up 0.3s',
        down: 'down 0.3s',
        modal: 'modal 0.2s',
        slide: 'slide 40s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
