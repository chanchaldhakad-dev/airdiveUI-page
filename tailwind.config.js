/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airdive: {
          bg: '#0a0b10',
          card: '#12141d',
          'card-hover': '#181b27',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.14)',
          accent: '#38bdf8', // Ice blue / sky blue
          emerald: '#34d399',
          purple: '#c084fc',
          muted: '#94a3b8',
          subtle: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
      },
      keyframes: {
        subtlePulse: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        }
      }
    },
  },
  plugins: [],
}
