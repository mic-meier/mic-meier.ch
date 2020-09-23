const BlogPost = ({ children, title }) => {
  return (
    <>
      <h1>{title}</h1>
      <article>{children}</article>
    </>
  )
}

export default BlogPost
