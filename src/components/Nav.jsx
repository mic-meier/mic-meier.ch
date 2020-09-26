/** @jsx jsx */
import Link from 'next/link'
import { useState } from 'react'
import { jsx } from 'theme-ui'

import NavButton from './NavButton'
import ToggleButton from './ToggleButton'

const Nav = () => {
  const [display, setDisplay] = useState(false)

  const changeDisplay = () => {
    setDisplay(!display)
    console.log('display', display)
  }

  return (
    <nav
      sx={{
        width: '100vw',
        bg: 'muted',
        borderBottom: '1px solid',
        borderColor: 'muted',
        '@media (max-width: 550px)': {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // height: '100%',
        padding: '0em 1rem',
      }}
    >
      <NavButton>
        <Link href="/" passHref>
          <a
            sx={{
              variant: 'links.navtitle',
            }}
          >
            Home
          </a>
        </Link>
      </NavButton>
      <div>
        <ToggleButton changeDisplay={changeDisplay} />
      </div>
      <div
        sx={{
          '@media (max-width: 550px)': {
            width: '100%',
            display: () => (display ? 'flex' : 'none'),
          },
        }}
      >
        <ul
          sx={{
            margin: 0,
            padding: 0,
            display: 'flex',
            '@media (max-width: 550px)': {
              flexDirection: 'column',
              width: '100%',
            },
          }}
        >
          <li sx={{ variant: 'listItems.nav' }}>
            <NavButton handleClick={changeDisplay}>
              <Link href="/about" passHref>
                <a
                  sx={{
                    variant: 'links.nav',
                  }}
                >
                  About
                </a>
              </Link>
            </NavButton>
          </li>
          <li sx={{ variant: 'listItems.nav' }}>
            <NavButton handleClick={changeDisplay}>
              <Link href="/blog" passHref>
                <a
                  sx={{
                    display: 'block',
                    variant: 'links.nav',
                  }}
                >
                  Blog
                </a>
              </Link>
            </NavButton>
          </li>
          <li sx={{ variant: 'listItems.nav' }}>
            <NavButton handleClick={changeDisplay}>
              <Link href="/contact" passHref>
                <a
                  sx={{
                    variant: 'links.nav',
                  }}
                >
                  Contact
                </a>
              </Link>
            </NavButton>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
