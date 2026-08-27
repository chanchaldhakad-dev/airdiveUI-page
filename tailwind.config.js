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
          bg: '#fafafa',
          surface: '#ffffff',
          'surface-subtle': '#f4f4f5',
          border: '#e4e4e7',
          'border-strong': '#d4d4d8',
          blue: '#2563eb', // Royal Blue
          'blue-dark': '#1d4ed8',
          'blue-light': '#eff6ff',
          text: '#18181b', // Warm Charcoal
          muted: '#52525b',
          subtle: '#71717a'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'human-card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'human-hover': '0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'app-window': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
