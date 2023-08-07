/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textDescription: 'var(--text-description)',
        textPrimary: 'var(--text-primary)',
        textSecundary: 'var(--text-secondary)',
        textThird: 'var(--text-third)',
      },
      backgroundColor: {
        backgroundPrimary: 'var(--background-primary)',
        backgroundSecundary: 'var(--background-secundary)',
        backgroundThird: 'var(--background-third)',
        backgroundShadow: 'var(--background-shadow)',
        backgroundBlack: 'var(--background-black)',
        backgroundMobileOne: 'var(--background-mobile-one)',
        backgroundMobileTwo: 'var(--background-mobile-two)',
        backgroundModalShadow: 'var(--background-modal-shadow)',
      },
      borderColor: {
        borderPrimary: 'var(--border-primary)',
      },
      maxWidth: {
        'custom': 'var(--max-width)',
      },
      keyframes: {
        fade: {
          'from': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        mobileActive: {
          'from': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        mobileInactive: {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(50px)'
          }
        },
        blink: {
          '50%': {
            opacity: '0',
          }
        },
        fly: {
          'from': {
            position: 'relative',
            top: '0px'
          },
          'to': {
            position: 'relative',
            top: '-20px',
            bottom: '60px'
          }
        },
        load: {
          '50%': {
            width: '100%'
          },
          '100%': {
            width: '0',
            right: '0',
            left: 'unset'
          }
        },
        zoom: {
          'from': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        mobileActive: 'mobileActive .5s ease-in',
        mobileInactive: 'mobileInactive .5s ease-in',
        blink: 'blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fly: 'fly 2s alternate infinite',
        load: 'load .5s ease-in-out infinite',
        fade: 'fade 1s forwards',
        zoom: 'zoom .3s forwards',
      }
    },
  },
  plugins: [],
}
