module.exports = {
  important: false,
  theme: {
    extend: {
      colors: {
        primary: '#f57224',
        secondary: '#ff9800',
        tertiery: '#ffb916',
        accent: '#5ed3a2',
        lightaccent: '#3bba95',

        grey: '#eff0f5',
        lightgray: '#f6f6f6',
        'gray-50': '#fbfdff',

        facebook: '#3b5999',
        twitter: '#55acee',
        pinterest: '#bd081c',
        youtube: '#cd201f',
        whatsapp: '#25D366',
        line: '#00c300',
        instagram: '#e4405f',
        success: '#25d366',
        warning: '#ffc107',
      },
      spacing: {
        '-100px': '-100px',
        '-65px': '-65px',
        '-18px': '-18px',
        '-20px': '-20px',
        '-px': '-1px',
        '-8': '-2rem',
        '-6': '-1.5rem',
        '-5': '-1.25rem',
        '-4': '-1rem',
        '-3': '-0.75rem',
        '-2': '-0.5rem',
        '-1': '-0.25rem',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '14px': '14px',
        '30px': '30px',
        '50px': '50px',
        '54px': '54px',
        '65px': '65px',
        '75px': '75px',
        '100px': '100px',
        '104px': '104px',
        '125px': '125px',
        '150px': '150px',
        '175px': '175px',
        '200px': '200px',
        '300px': '300px',
        '400px': '400px',
        '1-1': '100%',
        '2-3': '150%',
        '16-9': '56.25%',
        '4-3': '75%',
        '3-2': '66.66%',
        '8-5': '62.5%',
        '4-5': '125%',
        '4-6': '150%',
        '10pr': '10%',
        '15pr': '15%',
        '20pr': '20%',
        '25pr': '25%',
        '30pr': '30%',
        '50pr': '50%',
        '60pr': '60%',
        '70pr': '70%',
        '75pr': '75%',
        '80pr': '80%',
        '85pr': '85%',
        '90pr': '90%',
        '30pr-40px': 'calc(30% + 40px)',
      },
      backgroundSize: {
        '100-50': '100% 50%',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '9': '9px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
      },
      cursor: {
        crosshair: 'crosshair',
        'zoom-in': 'zoom-in',
        'n-resize': 'n-resize',
      },
      flexGrow: {
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      flexShrink: {
        '2': '2',
        '3': '3',
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
      },
      height: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        '90vh': '90vh',
      }),
      inset: (theme, {
        negative
      }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing')),
      }),
      listStyleType: {
        circle: 'circle',
        square: 'square',
        'lower-latin': 'lower-latin',
        'lower-roman': 'lower-roman',
        'upper-latin': 'upper-latin',
        'upper-roman': 'upper-roman',
      },
      maxHeight: {
        half: '50%',
      },
      width: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        'full-40px': 'calc(100% + 40px)',
      }),
      fill: theme => ({
        'primary': theme('colors.gray.500'),
        'secondary': theme('colors.gray.500'),
        'teal': theme('colors.teal.500'),
      }),
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      scale: {
        '200': '2',
      },
      animation: {
        marquee: 'marquee 300s linear infinite',
        fadeInDown: 'fadeInDown 900ms ease-in-out',
        bounceInLeft: 'bounceInLeft 2200ms ease-in backwards',
        'leftright-1': 'bounceInLeft 1s ease-in backwards',
        'leftright-2': 'bounceInLeft 1.6s ease-in backwards',
        'leftright-3': 'bounceInLeft 2.2s ease-in backwards',
        'leftright-4': 'bounceInLeft 2.8s ease-in backwards',
        'leftright-5': 'bounceInLeft 3.4s ease-in backwards',
      },
      keyframes: {
        marquee: {
          '0%': { 'transform': 'translate(0, 0)' },
          '100%': { 'transform': 'translate(-100%, 0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        bounceInLeft: {
          '0%,60%,75%,90%,100%': {transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'},
          '0%': { opacity: '0', transform: 'translate3d(-3000px, 0, 0)' },
          '60%': { opacity: '1', transform: 'translate3d(25px, 0, 0)' },
          '75%': { transform: 'translate3d(-10px, 0, 0)' },
          '90%': { transform: 'translate3d(5px, 0, 0)' },
          '100%': { transform: 'none' },
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['before', 'after'],
      borderColor: ['before'],
      borderRadius: ['before'],
      borderStyle: ['before'],
      borderWidth: ['before', 'focus'],
      boxShadow: ['after'],
      cursor: ['hover'],
      display: ['last', 'before', 'after'],
      float: ['before'],
      fontWeight: ['hover', 'focus'],
      height: ['hover', 'focus', 'before', 'after'],
      inset: ['hover', 'before', 'after'],
      margin: ['first', 'last', 'before', 'after'],
      outline: ['hover'],
      padding: ['before', 'after', 'first', 'last'],
      placeholderColor: ['hover', 'active'],
      position: ['before', 'after', 'focus', 'important'],
      textColor: ['before', 'after'],
      width: ['hover', 'focus', 'before', 'after'],
      zIndex: ['before', 'after'],
      transform: ['hover', 'focus', 'active', 'before', 'after', 'group-hover'],
      rotate: ['active', 'before', 'after'],
      transitionProperty: ['hover', 'focus', 'before'],
      transitionTimingFunction: ['hover', 'before'],
      transitionDuration: ['hover', 'before'],
      transitionDelay: ['hover'],
    },
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('tailwindcss/plugin'),
    // This plugin is useful in combination with tailwindcss-aspect-ratio.
    function ({
      addBase,
      config
    }) {
      addBase({
        'h1': {
          fontSize: config('theme.fontSize.3xl'),
          fontWeight: config('theme.fontWeight.bold'),
          marginBottom: config('theme.spacing.4'),
          fontFamily: config('theme.fontFamily.heading')
        },
        'h2': {
          fontSize: config('theme.fontSize.2xl'),
          fontWeight: config('theme.fontWeight.bold'),
          marginBottom: config('theme.spacing.4'),
          fontFamily: config('theme.fontFamily.heading')
        },
        'h3': {
          fontSize: config('theme.fontSize.xl'),
          fontWeight: config('theme.fontWeight.bold'),
          marginBottom: config('theme.spacing.4'),
          fontFamily: config('theme.fontFamily.heading')
        },
        'h4': {
          fontSize: config('theme.fontSize.lg')
        },
        'a': {
          color: config('theme.colors.primary')
        },
        'p': {
          marginBottom: config('theme.spacing.6')
        },
        'ol': {
          listStyleType: config('theme.listStyleType.decimal'),
          paddingLeft: config('theme.spacing.6'),
          marginBottom: config('theme.spacing.4')
        },
        'ul': {
          listStyleType: config('theme.listStyleType.disc'),
          paddingLeft: config('theme.spacing.6'),
          marginBottom: config('theme.spacing.4')
        },
        'li': {
          marginBottom: config('theme.spacing.2')
        },
        'table': {
          tableLayout: 'auto',
          marginTop: config('theme.spacing.4'),
          marginBottom: config('theme.spacing.6')
        },
        'table th': {
          fontSize: config('theme.fontSize.xs'),
          paddingLeft: config('theme.spacing.2'),
          paddingRight: config('theme.spacing.2'),
          paddingTop: config('theme.spacing.2'),
          paddingBottom: config('theme.spacing.2'),
          borderWidth: config('theme.borderWidth.1'),
          background: config('theme.colors.lightgray')
        },
        'table td': {
          fontSize: config('theme.fontSize.xs'),
          paddingLeft: config('theme.spacing.2'),
          paddingRight: config('theme.spacing.2'),
          paddingTop: config('theme.spacing.2'),
          paddingBottom: config('theme.spacing.2'),
          borderWidth: config('theme.borderWidth.1')
        },
      })
    },
    function ({
      addUtilities
    }) {
      const newUtilities = {
        '.empty-content': {
          content: "''",
        },
        '.checked-content': {
          content: "'✓'",
        },
        '.bg-mask': {
          content: "''",
          position: 'absolute',
          top: '0',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(rgba(47,48,50,.2),rgba(47,48,50,.7))',
          'box-shadow': 'inset 0 0 50px rgba(0,0,0,.15)',
          visibility: 'visible',
          transition: 'visibility .35s cubic-bezier(.25,.46,.45,.94),opacity .35s cubic-bezier(.25,.46,.45,.94)',
          opacity: '1',
        },
      }

      addUtilities(newUtilities, ['before', 'after', 'hover', 'important'])
    },
    function ({
      addVariant
    }) {
      addVariant('important', ({
        container
      }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }
  ]
}