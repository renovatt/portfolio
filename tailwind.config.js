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
        // 950: '#ff8269',
        950: 'var(--custom-950)',
        900: '#191919',
        890: '#101010',
        850: '#929d8d',
        750: '#e7e5e0',
        700: '#00000041',
      },
      backgroundImage: {
        load: 'url("/assets/bg-load.jpg")',
        home: 'url("/assets/bg-home.jpg")',
        about: 'url("/assets/bg-about.jpg")',
        projects: 'url("/assets/bg-projects.jpg")',
        skills: 'url("/assets/bg-skills.jpg")',
        contact: 'url("/assets/bg-contact.jpg")',
        notFound: 'url("/assets/bg-not-found.jpg")',
      },
      keyframes: {
        fade: {
          from: {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
        fadeUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        fadeLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(0px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(-40px)',
          },
        },
        mobileActive: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        mobileInactive: {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
        },
        blink: {
          '50%': {
            opacity: '0',
          },
        },
        ray: {
          '0%, 2%, 70%': {
            opacity: 0.1,
          },
          '5%, 90%, 100%': {
            opacity: 0,
          },
        },
        storm: {
          '0%, 2%, 20%, 50%, 52%, 85%': {
            opacity: 1,
          },
          '5%, 15%, 25%': {
            opacity: 0,
          },
          '30%, 40%, 53%, 60%, 70%, 75%, 90%, 100%': {
            opacity: 0,
          },
        },
        fly: {
          from: {
            position: 'relative',
            top: '0px',
          },
          to: {
            position: 'relative',
            top: '-20px',
            bottom: '60px',
          },
        },
        load: {
          '50%': {
            width: '100%',
          },
          '100%': {
            width: '0',
            right: '0',
            left: 'unset',
          },
        },
        zoom: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        mobileActive: 'mobileActive .3s ease-in',
        mobileInactive: 'mobileInactive .5s ease-in',
        blink: 'blink 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        ray: 'ray 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        storm: 'storm 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fly: 'fly 2s alternate infinite',
        load: 'load .5s ease-in-out infinite',
        fade: 'fade 1s forwards',
        fadeUp: 'fadeUp 1s forwards',
        fadeLeft: 'fadeLeft 0.5s forwards',
        zoom: 'zoom .3s forwards',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
