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

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
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
