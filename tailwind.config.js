/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          header: '#131921',
          subnav: '#232f3e',
          amber: '#febd69',
          'amber-hover': '#f3a847',
          orange: '#ff9900',
          dark: '#0f1111',
          bg: '#eaeded',
          card: '#ffffff',
          border: '#d5d9d9',
          muted: '#565959',
          link: '#007185',
          'link-hover': '#c7511f',
          green: '#007600'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Ember', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'amazon-card': '0 2px 5px 0 rgba(213, 217, 217, 0.5)',
        'amazon-hover': '0 4px 12px 0 rgba(0, 0, 0, 0.12)',
        'amazon-btn': '0 2px 5px 0 rgba(213, 217, 217, 0.5)',
      }
    },
  },
  plugins: [],
}
