/** @jsx jsx */
import { jsx } from 'theme-ui'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

const CodeBlock = ({ children, className }) => {
  // Pull the className
  const language = className.replace(/language-/, '') || ''

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style }}
          sx={{ padding: '1rem', borderRadius: '10px' }}
        >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
