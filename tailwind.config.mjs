/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        sidebar:
          'linear-gradient(180deg, rgba(15,17,29,1) 0%, rgba(15,30,59,1) 75%, rgba(29,47,83,1) 100%);',
        content:
          'linear-gradient(180deg, rgba(28,30,41,1) 0%, rgba(15,30,59,1) 50%, rgba(20,29,46,1) 100%);',
        'transparent-white':
          'linear-gradient(180deg, rgba(142,133,199,0.9) 0%, rgba(182,189,93,0) 50%, rgba(142,133,199,0.9) 100%);'
      },
      colors: {
        app: '#0b1928',
        primary: '#111f35',
        secondary: '#20253e',
        third: '#172533',
        'high-light': '#ff404e',
        'text-1': '#72859b',
        'text-2': '#aebed3'
      },
      scale: {
        160: '1.6',
        170: '1.7',
        180: '1.8',
        190: '1.9',
        200: '2'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        scale_enter: 'scale_enter 400ms ease-in-out forwards',
        scale_leave: 'scale_leave 300ms ease-in-out forwards',
        skeleton: 'skeleton 2s infinite',
        'translate-y-playlist-modal-enter':
          'translate-y-playlist-modal-enter 300ms ease-in-out forwards',
        'translate-y-playlist-modal-leave':
          'translate-y-playlist-modal-leave 300ms ease-in-out forwards',
        'pulse-opacity':
          'pulse-opacity 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale-image': 'scale-image 300ms ease-in-out forwards'
      },
      keyframes: {
        'scale-image': {
          '0%': {
            opacity: '0',
            transform: 'scale(1.2)',
            'transform-origin': '50% 50%'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
            'transform-origin': '50% 50%'
          }
        },
        'pulse-opacity': {
          '0%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': {
            opacity: '1'
          }
        },
        'translate-y-playlist-modal-enter': {
          '0%': {
            transform: 'translateX(110%) translateY(-100%) !important'
          },
          '100%': {
            transform: 'translateX(0%) translateY(-100%) !important'
          }
        },
        'translate-y-playlist-modal-leave': {
          '0%': {
            transform: 'translateX(0%) translateY(-100%) !important'
          },
          '100%': {
            transform: 'translateX(110%) translateY(-100%) !important'
          }
        },
        scale_enter: {
          '0%': {
            opacity: '0',
            transform: 'scale(0) rotate(0deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) rotate(360deg)'
          }
        },
        scale_leave: {
          '0%': {
            opacity: '1',
            transform: 'scale(1) rotate(360deg)'
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0) rotate(0deg)'
          }
        },
        skeleton: {
          '0%': {
            opacity: 0,
            left: '0%'
          },
          '50%': {
            opacity: 1,
            left: '100%'
          },
          '100%': {
            opacity: 0,
            left: '0%'
          }
        }
      }
    }
  },
  plugins: [require('daisyui')]
}
