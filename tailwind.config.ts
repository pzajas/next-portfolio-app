import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',

  theme: {
    extend: {
      screens: {
        xs: '475px',
        '3xl': '1920px'
      },
      animation: {
        spinSlow: 'spinSlow 100s linear infinite'
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'blue-medium': '#0A66C2',
        gray: {
          medium: '#4A4A4A'
        },
        fill: 'var(--fill)'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        gotham: ['Gotham']
      },
      fontWeight: {
        gothamMedium: '500'
      }
    }
  },
  plugins: []
} satisfies Config
