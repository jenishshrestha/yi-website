import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import Seo from "gatsby-plugin-wpgraphql-seo"

const Page = ({ data: { page } }) => {
  return (
    <Layout>
      <Seo post={page} />
      {page.title}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query getPage($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
    }
  }
`
