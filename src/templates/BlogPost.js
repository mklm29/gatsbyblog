// src/templates/BlogPostTemplate.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import posed, {PoseGroup} from 'react-pose'

// Use `posed.div` elements anywhere on the pages.
const TransDiv = posed.div({
  enter: {
    opacity: 1, y:0, delay: 300, beforeChildren: 300 ,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 20 },
      default: { duration: 300 }
    }
  },
  exit: { opacity: 0, y: 50 }
})
const Htag = posed.h1({
  enter: {opacity:1,y:0},
  exit: {opacity:0,y:50}
})

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <Htag>{data.wordpressPost.title}</Htag>
    <TransDiv
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
