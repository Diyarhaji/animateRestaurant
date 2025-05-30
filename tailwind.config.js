/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgone:"#0E110D",
        bgtwo:"#1F2120",
        bgthree:"#000000",
        first:"#A6A182",
        second:"#FFFFFF"

      }
      ,keyframes: {
        topToBottom: {
          '0%': { transform: 'translateY(50%)',  },
          '100%': { transform: 'translateY(0)',  },
        },
        Bottom: {
          '0%': { transform: 'translateY(0)',  },
          '100%': { transform: 'translateY(50%)',  },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(-50%)',  },
          '100%': { transform: 'translateX(-10%)',  },
        },
        spanOne: {
          '0%': { transform: 'rotateY(0)', },
          '100%': { transform: 'rotateY(360deg)',  },
        },
      },
      animation: {
        topToBottom: 'topToBottom 1s alternate linear infinite',
        Bottom: 'Bottom 1s alternate linear infinite',
         rightToLeft: 'rightToLeft 2s alternate linear infinite',
         spanOne: 'spanOne .5s  ease-in ',
      },
    },
  },
  plugins: [],
}