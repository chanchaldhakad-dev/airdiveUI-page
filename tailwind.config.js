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
          bg: '#f8fafc',
          surface: '#ffffff',
          'surface-hover': '#f1f5f9',
          border: '#e2e8f0',
          'border-hover': '#93c5fd',
          blue: '#0284c7', // Sky / Light Blue accent
          'blue-dark': '#0369a1',
          'blue-soft': '#e0f2fe',
          navy: '#0f172a',
          slate: '#475569',
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
