/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { NavLink } from 'theme-ui'

const Nav = () => (
  <header
    sx={{
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
    }}
  >
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%',
        padding: '0em 1rem',
      }}
    >
      <Link href="/" passHref>
        <NavLink>
          <a
            sx={{
              fontWeight: 'bold',
              fontSize: 4,
              cursor: 'pointer',
            }}
          >
            Home
          </a>
        </NavLink>
      </Link>
      <Link href="/blog" passHref>
        <NavLink>
          <a
            sx={{
              fontWeight: 'bold',
              fontSize: 4,
              cursor: 'pointer',
            }}
          >
            Blog
          </a>
        </NavLink>
      </Link>
    </nav>
  </header>
)

export default Nav
