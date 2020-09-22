import { roboto } from '@theme-ui/presets'

const theme = {
  ...roboto,
  styles: {
    ...roboto.styles,
  },
  links: {
    nav: {
      '&:hover, &:focus, &.active': {
        color: 'muted',
      },
    },
  },
}
console.log('theme', theme)

export default theme
