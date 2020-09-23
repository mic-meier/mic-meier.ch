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
          <div>{slug}</div>
          <div>{date}</div>
          <div>{title}</div>
          <div>{tagline}</div>
        </div>
      ))}
    </div>
  )
}
