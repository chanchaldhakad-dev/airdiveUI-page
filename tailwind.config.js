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
          dark: '#05060b',
          card: '#090b11',
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#00d2ef',
          'cyan-glow': 'rgba(0, 210, 239, 0.15)',
          emerald: '#10b981',
          purple: '#a855f7',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 210, 239, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 210, 239, 0.5)' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, rgba(0, 210, 239, 0.12) 0%, rgba(5, 6, 11, 0) 70%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(5, 6, 11, 0.4) 0%, rgba(5, 6, 11, 0.85) 75%, rgba(5, 6, 11, 1) 100%)',
      }
    },
  },
  plugins: [],
}
