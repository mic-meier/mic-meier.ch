import { deep } from '@theme-ui/presets'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

const theme = {
  ...deep,
  styles: {
    ...deep.styles,
    inlineCode: {
      ...deep.styles.inlineCode,
      bg: 'background',
      border: '1px solid gray',
      p: '.05rem',
      borderRadius: '5px',
    },
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
      fontWeight: 'normal',
      fontSize: 2,
      cursor: 'pointer',
      color: 'text',
      '&:hover': {
        color: 'secondary',
      },
      '&:focus-visible': {
        outline: 0,
        borderRadius: '3px',
        boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary}`,
      },
      px: 2,
      py: 1,
      display: 'block',
      textDecoration: 'none',
    },
    navtitle: {
      fontWeight: 'bold',
      fontSize: 4,
      cursor: 'pointer',
      color: 'text',
      '&:hover': {
        color: 'secondary',
      },
      '&:focus-visible': {
        outline: 0,
        borderRadius: '3px',
        boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary}`,
      },
      px: 2,
      py: 1,
      my: '0.5rem',
      textDecoration: 'none',
    },
    blog: {
      cursor: 'pointer',
      color: 'primary',
      '&:hover, &:focus, &:active': {
        textDecoration: 'none',
        color: 'secondary',
      },
    },
  },
  cards: {
    primary: {
      py: 2,
      px: 2,
      borderRadius: 4,
      boxShadow: (theme) => `0.25rem 0.25rem .75rem ${theme.colors.muted}`,
      marginBottom: '1rem',
      marginTop: '2rem',
    },
  },
  spans: {
    burger: {
      height: '3px',
      width: '100%',
      backgroundColor: 'text',
      borderRadius: '10px',
    },
  },
  listItems: {
    nav: {
      listStyle: 'none',
      listStylePosition: 'outside',
    },
  },
}
console.log('theme', theme)
export default theme
