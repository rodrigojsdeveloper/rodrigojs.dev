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
        kanit: 'var(--font-kanit)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        shadow: 'hsl(var(--shadow))',
      },
      backgroundImage: {
        'fade-gradient':
          'linear-gradient(90deg, hsl(var(--background)), transparent 20%, transparent 80%, hsl(var(--background)))',
      },
      borderRadius: {
        radius: '0.6rem',
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
