/** @jsx jsx  */
import Head from 'next/head'
import { Container, jsx } from 'theme-ui'

import Nav from './Nav'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf8" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>{title}</title>
      </Head>
      <Nav />
      <Container p={4} sx={{ maxWidth: '50rem' }}>
        {children}
      </Container>
    </>
  )
}

export default Layout
