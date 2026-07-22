/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        codex: {
          blue: '#0066FF',
          blueHover: '#0052CC',
          cyan: '#00D2FF',
          darkBg: '#060A12',
          darkCard: '#0E1626',
          darkBorder: '#1E293B',
          lightBg: '#F8FAFC',
          lightCard: '#FFFFFF',
          lightBorder: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Inter', 'sans-serif'],
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
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      }
    },
  },
  plugins: [],
}
