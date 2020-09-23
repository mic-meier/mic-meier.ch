/** @jsx jsx  */
import Head from 'next/head'
import { Container, jsx } from 'theme-ui'

import Nav from './Nav'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <Container p={3} sx={{ maxWidth: '50rem' }}>
        {children}
      </Container>
    </>
  )
}

export default Layout
