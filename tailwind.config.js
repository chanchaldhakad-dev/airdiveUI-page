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
          bg: '#0b0f17',
          surface: '#111726',
          'surface-hover': '#172033',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(37, 99, 235, 0.4)',
          blue: '#2563eb', // Sapphire Blue
          'blue-light': '#60a5fa',
          emerald: '#10b981',
          slate: '#94a3b8',
          subtle: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
