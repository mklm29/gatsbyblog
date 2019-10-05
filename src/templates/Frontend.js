
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FeTemplate = ({ data }) => (
    <Layout>
      <SEO
        title={data.wordpressWpFrontend.title}
      />
      <h1>{data.wordpressWpFrontend.title}</h1>
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: data.wordpressWpFrontend.content }}
      />
    </Layout>
)
export default FeTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressWpFrontend(wordpress_id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
