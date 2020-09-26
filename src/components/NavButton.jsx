/** @jsx jsx */
import { jsx } from 'theme-ui'

const NavButton = ({ handleClick, children }) => {
  return (
    <button
      sx={{
        border: 0,
        padding: 0,
        background: 'transparent',
        '&:focus': {
          outline: 0,
        },
        my: '.75rem',
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default NavButton
