import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({ data }) => {
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
      <h1>{data.wpPage.test.test}</h1>
    </main>
  )
}

export const query = graphql`
  query MyQuery {
    wpPage {
      content
      test{
        test
      }
    }
  }
`

export default IndexPage
