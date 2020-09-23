/** @jsx jsx */
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import { jsx, Styled } from 'theme-ui'

import { getShouldHighlightLine } from '../lib/getShouldHighlightLine'

// const CodeBlock = ({ children, className, hl, ...props }) => {
//   // Pull the className
//   const language = className.replace(/language-/, '') || ''
//   const shouldHighlighLine = getShouldHighlightLine(hl)

//   return (
//     <div sx={{ variant: 'styles.CodeBlock' }}>
//       <Highlight
//         {...defaultProps}
//         {...props}
//         code={children.trim()}
//         language={language}
//         theme={nightOwl}
//       >
//         {({ className, style, tokens, getLineProps, getTokenProps }) => (
//           <pre
//             className={className}
//             style={{ ...style }}
//             sx={{ padding: '1rem', borderRadius: '10px' }}
//           >
//             {tokens.map((line, index) => {
//               const lineProps = getLineProps({ line, key: index })
//               console.log(index)
//               return (
//                 <div
//                   key={index}
//                   {...lineProps}
//                   sx={
//                     shouldHighlighLine(index)
//                       ? { variant: `styles.CodeBlock.highlightLine` }
//                       : undefined
//                   }
//                 >
//                   {line.map((token, key) => (
//                     <span key={key} {...getTokenProps({ token, key })} />
//                   ))}
//                 </div>
//               )
//             })}
//           </pre>
//         )}
//       </Highlight>
//     </div>
//   )
// }

const CodeBlock = ({
  children,
  className: outerClassName,
  title,
  hl,
  ...props
}) => {
  // MDX will pass the language as className
  // className also includes className(s) theme-ui injected
  const [language] = outerClassName.replace(/language-/, ``).split(` `)
  if (typeof children !== `string`) {
    // MDX will pass in the code string as children
    return null
  }
  const shouldHighlightLine = getShouldHighlightLine(hl)
  return (
    <React.Fragment>
      {title && <div sx={{ variant: `styles.CodeBlock.title` }}>{title}</div>}
      <div sx={{ variant: `styles.CodeBlock` }}>
        <Highlight
          {...defaultProps}
          {...props}
          code={children.trim()}
          language={language}
          theme={nightOwl}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Styled.pre
              className={`${outerClassName} ${className}`}
              style={style}
            >
              {tokens.map((line, index) => (
                <div
                  key={index}
                  {...getLineProps({ line, key: index })}
                  sx={
                    shouldHighlightLine(index)
                      ? { variant: `styles.CodeBlock.highlightLine` }
                      : undefined
                  }
                >
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({ token, key })}
                      // https://github.com/system-ui/theme-ui/pull/721
                      sx={token.empty ? { display: `inline-block` } : undefined}
                    />
                  ))}
                </div>
              ))}
            </Styled.pre>
          )}
        </Highlight>
      </div>
    </React.Fragment>
  )
}

export default CodeBlock
