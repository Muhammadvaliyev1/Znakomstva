/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Rubik' : ['Rubik'],
      },
      fontSize: {
        '6.5xl': '64px',
        '4.5xl': '40px',
        'onest': '17px'
      },
      gradientColorStops: {
        blue: '#0575E6',
        violet: '#021B79',
        pinkk: '#EC008C',
        rose: '#FC6767'
      },
      backgroundColor: {
        brand: {
          liner: 'background: linear-gradient(90deg, #0575E6 0%, #021B79 100%);',
          violet: '#230E2B',
          space_violet: '#42204E',
          fill: '#CBD2F6',
          black: '#1B0522',
          rgb: '#021B79',
          orange: '#FF6952',
          space_green: '#366C49',
          spaced_green: '#447C58',
          cyan: '#F6F9FB',
          space_cyan: '#E4F2F0',
          human: '#FDF3E7',
          space_human: '#FFF5E9',
          blue: '#0575E6',
        }
      },
      textColor: {
        brand: {
          violet: '#8B5D9A',
          space_violet: '#925FA4',
          spaced_violet: '#6E447B',
          orange: '#FF6952',
          gray: '#808080',
          space_gray: '#AEAEB2',
          spaced_gray: '#C5C5C5',
          spaced_grayy: '#CBCBCB',
          black: '#1E2532',
          white: '#F6F9FB',
          rgb: 'rgba(255, 255, 255, 0.60)',
          rgba: 'rgba(0, 0, 0, 0.40)',
          space_green: '#366C49',
          cyan: '#F6F9FB'
        }
      },
      borderColor: {
        primary: '#EE0979',
        pink: '#EC008C',
        blue: '#0575E6'
      },
      boxShadow: {
        'box': 'box-shadow: 0px -2px 0px 0px #A01414 inset;'
      },
      backgroundImage: {
        circle: "url('./icons/Ellipse 1.svg')"
      },
      screens: {
        'ssd':'1207px',
        'hdd':'1250px',
        'sd': '1169px',
        'sl': '1201px',
        'ss': '1081px',
        's': '440px'
      },
      maxWidth: {
        'sd': '1440px',
        'sls': '1240px',
        'sl': '1201px',
        'base': '858px',
        'card': '362px',
        'cardsecond': '362px',
        'cardtherd': '370px'
      },
      height: {
        '80%': '40%'
      },
      spacing: {
        '28': '28.4027777778'
      }
    },
  },
  plugins: [],
}

