import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import matter from 'gray-matter'

import BlogPost from '../../components/BlogPost'
import { getPostData } from '../../lib/getPostsData'

const components = { BlogPost }

export default function BlogView({ source, frontMatter }) {
  const content = hydrate(source, { components })
  return (
    <div className="wrapper">
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.date}</p>
      {content}
    </div>
  )
}

export async function getStaticProps() {
  const blog = await getPostData('testblog')
  const source = blog
  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, { components, scope: data })
  return { props: { source: mdxSource, frontMatter: data } }
}
