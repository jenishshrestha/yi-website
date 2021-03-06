import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "gatsby-plugin-wpgraphql-seo"

const Career = ({ data: { career } }) => {
  return (
    <Layout>
      <Seo post={career} />
      {career.title}
    </Layout>
  )
}

export default Career

export const careerQuery = graphql`
  query getCareer($id: String!) {
    career: wpCareer(id: { eq: $id }) {
      title
    }
  }
`
