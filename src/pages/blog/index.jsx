import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import BlogPost from '../../components/BlogPost'
import { getPostData } from '../../lib/getPostsData'

const components = { BlogPost }

export default function BlogView({ source }) {
  const content = hydrate(source, { components })
  return <div className="wrapper">{content}</div>
}

export async function getStaticProps() {
  const blog = await getPostData('testblog')
  console.log('blog', blog)
  const source = blog
  const mdxSource = await renderToString(source, { components })
  return { props: { source: mdxSource } }
}
