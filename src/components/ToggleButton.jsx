/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const ToggleButton = ({ changeDisplay }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      onClick={changeDisplay}
      sx={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        display: 'none',
        '@media (max-width: 550px)': {
          display: 'flex',
        },
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '30px',
        height: '21px',
      }}
    >
      <span
        sx={{
          variant: 'spans.burger',
        }}
      />
      <span
        sx={{
          variant: 'spans.burger',
        }}
      />
      <span
        sx={{
          variant: 'spans.burger',
        }}
      />
    </a>
  )
}

export default ToggleButton
