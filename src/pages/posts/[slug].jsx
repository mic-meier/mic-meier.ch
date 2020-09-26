import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

import BlogHeader from '../../components/BlogHeader'
import Layout from '../../components/Layout'
import { getPostData } from '../../lib/getPostsData'
import { getAllPostSlugs } from '../../lib/getPostsData'

const components = { BlogHeader }

export default function BlogView({ source, frontMatter }) {
  const content = hydrate(source, { components })
  return (
    <Layout title={frontMatter.title}>
      <BlogHeader title={frontMatter.title} dateString={frontMatter.date} />
      {content}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const source = await getPostData(params.slug)
  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, { components, scope: data })
  return { props: { source: mdxSource, frontMatter: data } }
}
