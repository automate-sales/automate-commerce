import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.slide-in-left': {
          animation: 'slideInLeft 0.5s forwards',
        },
        '.slide-in-right': {
          animation: 'slideInRight 0.5s forwards',
        },
        '.slider-next-btn': {
          right: '-30px',
        },
        '.slider-prev-btn': {
          left: '-30px',
        },
        '@keyframes slideInLeft': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        '@keyframes slideInRight': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      };
      addUtilities(newUtilities); // Updated this line
    }),
  ],
}
export default config
