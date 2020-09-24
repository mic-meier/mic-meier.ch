/** @jsx jsx */
import Link from 'next/link'
import { Card, jsx } from 'theme-ui'

const Blog = ({ title, date, tagline, slug }) => {
  return (
    <Card>
      <Link href="posts/[slug]" as={`/posts/${slug}`} key={slug}>
        <a>{slug}</a>
      </Link>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{tagline}</p>
    </Card>
  )
}

export default Blog
