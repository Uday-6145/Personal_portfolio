/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F172A',
        card: '#1E293B',
        'card-hover': '#243248',
        text: '#F8FAFC',
        muted: '#94A3B8',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        border: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1100px',
      },
    },
  },
  plugins: [],
}
