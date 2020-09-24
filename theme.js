import { roboto } from '@theme-ui/presets'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

const theme = {
  ...roboto,
  styles: {
    ...roboto.styles,
    CodeBlock: {
      overflow: `auto`,
      pre: {
        backgroundColor: `transparent`,
        float: `left`,
        minWidth: `100%`,
        margin: 0,
        padding: '1rem',
        borderRadius: '10px',
      },
      highlightLine: {
        backgroundColor: `#45474e`,
        borderLeftColor: `#49d0c5`,
        borderLeftStyle: `solid`,
        borderLeftWidth: `0.25em`,
        display: `block`,
        marginRight: `-1em`,
        marginLeft: `-1em`,
        paddingRight: `1em`,
        paddingLeft: `0.75em`,
      },
      title: {
        fontFamily: `mono`,
        backgroundColor: nightOwl.plain.backgroundColor,
        borderBottomWidth: `2px`,
        borderBottomStyle: `solid`,
        borderBottomColor: `#f0f0f0`,
        color: nightOwl.plain.color,
        padding: '0.5rem 1rem',
        borderRadius: '10px',
      },
    },
  },
  links: {
    nav: {
      '&:hover, &:focus, &.active': {
        color: 'muted',
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: (theme) => `0.25rem 0.25rem .75rem ${theme.colors.muted}`,
      marginBottom: '1rem',
      marginTop: '2rem',
    },
  },
}

console.log('theme', theme)

export default theme
