import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'theme-ui'

import theme from '../../theme'
import CodeBlock from '../components/CodeBlock'

const components = {
  // eslint-disable-next-line react/display-name
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
