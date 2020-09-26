/** @jsx jsx */
import { jsx } from 'theme-ui'

import DateComponent from './Date'

const BlogPost = ({ title, dateString }) => {
  return (
    <>
      <h1 sx={{ mb: 0, variant: 'styles.h1', color: 'text' }}>{title}</h1>
      <DateComponent dateString={dateString} />
    </>
  )
}

export default BlogPost
