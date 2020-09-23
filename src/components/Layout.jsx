/** @jsx jsx  */
import Head from 'next/head'
import { Container, jsx } from 'theme-ui'

import NavBar from './NavBar'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <Container p={3} sx={{ maxWidth: '50rem' }}>
        {children}
      </Container>
    </>
  )
}

export default Layout
