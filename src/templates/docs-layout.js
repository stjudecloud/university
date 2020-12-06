import React from "react"
import { graphql } from "gatsby"
import BaseLayout from "./base"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <BaseLayout fileAbsolutePath={data.markdownRemark.fileAbsolutePath}>
      <div className="container px-20 pt-1 max-w-full md:max-w-4xl mx-auto">
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </BaseLayout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
    }
  }
`
