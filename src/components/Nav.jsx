/** @jsx jsx */
import Link from 'next/link'
import { jsx } from 'theme-ui'

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
      <Link href="/">
        <a
          sx={{
            fontWeight: 'bold',
            fontSize: 4,
            cursor: 'pointer',
            variant: 'links.nav',
          }}
        >
          Home
        </a>
      </Link>
      <Link href="/blog">
        <a
          sx={{
            fontWeight: 'bold',
            fontSize: 4,
            cursor: 'pointer',
            variant: 'links.nav',
          }}
        >
          Blog
        </a>
      </Link>
    </nav>
  </header>
)

export default Nav
