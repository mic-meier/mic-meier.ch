import Link from 'next/link'

import { getSortedPostsData } from '../lib/getPostsData'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

export default function BlogList({ allPostsData }) {
  return (
    <div>
      {allPostsData.map(({ slug, date, title, tagline }) => (
        <div key={slug}>
          <Link href="posts/[slug]" as={`/posts/${slug}`} key={slug}>
            <a>{slug}</a>
          </Link>
          <div>{slug}</div>
          <div>{date}</div>
          <div>{title}</div>
          <div>{tagline}</div>
        </div>
      ))}
    </div>
  )
}
