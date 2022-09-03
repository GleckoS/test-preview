import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({ data: { wpPage } }) => {
  return (
    <main>
      {wpPage.blocks?.pageBuilder?.map(el => (
        <p>
          {el.switch}
        </p>
      ))}
    </main>
  )
}

export const query = graphql`
  query MyQuery {
    wpPage(id: {eq: "cG9zdDoxMg=="}) {
      blocks {
        pageBuilder {
          switch
        }
      }
    }
  }
`

export default IndexPage
