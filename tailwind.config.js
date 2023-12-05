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
        primary: {
          950: '#ff8269',
          900: '#191919',
          850: '#101010',
          800: '#000000',
          750: '#e7e5e0',
        },
        secondary: {
          950: '#ef0a5e',
          900: '#f61b12',
          850: '#929d8d',
          800: '#fafafa',
          750: '#27272a',
        },
        third: {
          950: '#00000041',
          900: '#000000CC',
          850: '#2b161cef',
          800: '#111211F2',
        },
      },
      backgroundImage: {
        world: 'url("/world.jpg")',
        about: 'url("/bg-about.jpg")',
        profile: 'url("/profile.jpeg")',
        contact: 'url("/bg-contact.jpg")',
        skills: 'url("/bg-skills.jpg")',
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
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0px)',
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
        blink: 'blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fly: 'fly 2s alternate infinite',
        load: 'load .5s ease-in-out infinite',
        fade: 'fade 1s forwards',
        fadeUp: 'fadeUp 1s forwards',
        zoom: 'zoom .3s forwards',
      },
    },
  },
  plugins: [],
}
