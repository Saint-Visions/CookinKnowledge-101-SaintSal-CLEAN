import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#F4D03F',        // Soft, shiny gold - sophisticated but warm
        'gold-light': '#F7DC6F', // Lighter shiny gold for highlights
        'gold-dark': '#D4AC0D',   // Deeper gold for contrast
        charcoal: '#1a1a1a',     // Deep charcoal background
        'charcoal-light': '#2d2d2d', // Lighter charcoal for cards
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(244, 208, 63, 0.3)', // Soft gold glow
        'gold-shine': '0 4px 15px rgba(244, 208, 63, 0.2)', // Shiny gold shadow
      },
      animation: {
        'gold-shimmer': 'shimmer 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
export default config
