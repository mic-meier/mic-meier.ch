/** @jsx jsx  */
import { Container, jsx } from 'theme-ui'

export default function Home() {
  return (
    <Container p={3} sx={{ maxWidth: '50rem' }}>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsa
        deserunt tempore eligendi alias accusantium fuga magni nulla facilis
        totam qui quo nam, nobis, fugit, veritatis quaerat inventore similique
        asperiores.
      </p>
    </Container>
  )
}
