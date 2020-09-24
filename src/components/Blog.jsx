/** @jsx jsx */
import Link from 'next/link'
import { Card, jsx } from 'theme-ui'

import DateComponent from './Date'

const Blog = ({ title, date, tagline, slug }) => {
  return (
    <Card>
      <Link href="posts/[slug]" as={`/posts/${slug}`} key={slug}>
        <a sx={{ variant: 'links.blog' }}>
          <h2 sx={{ marginBottom: 0 }}>{title}</h2>
        </a>
      </Link>
      <DateComponent dateString={date} />
      <p>{tagline}</p>
    </Card>
  )
}

export default Blog
