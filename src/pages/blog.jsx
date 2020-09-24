/** @jsx jsx */
import { jsx } from 'theme-ui'

import Blog from '../components/Blog'
import Layout from '../components/Layout'
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
    <Layout title="My Blog">
      <h1 sx={{ padding: 2, color: 'primary' }}>El Mayo&apos;s Blog</h1>
      {allPostsData.map(({ slug, date, title, tagline }) => (
        <Blog
          key={slug}
          slug={slug}
          date={date}
          title={title}
          tagline={tagline}
        ></Blog>
      ))}
    </Layout>
  )
}
