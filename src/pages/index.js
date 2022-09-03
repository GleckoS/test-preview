import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({ data }) => {
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </main>
  )
}

export const query = graphql`
  query MyQuery {
    wpPage {
      content
    }
  }
`

export default IndexPage
