/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ms: {
          blue: '#0078d4', // Microsoft Azure Blue
          'blue-dark': '#005a9e',
          'blue-light': '#eff6fc',
          red: '#f25022',   // Microsoft Red Logo Accent
          green: '#7fba00', // Microsoft Green Logo Accent
          cyan: '#00a4ef',  // Microsoft Cyan Logo Accent
          yellow: '#ffb900', // Microsoft Yellow Logo Accent
          bg: '#f3f4f6',
          surface: '#ffffff',
          dark: '#111827',
          muted: '#4b5563',
          border: '#e5e7eb',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Inter', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'fluent': '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)',
        'fluent-hover': '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)',
        'fluent-elevated': '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)',
      }
    },
  },
  plugins: [],
}
