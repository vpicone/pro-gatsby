import React, { Component } from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
// Static Query → used anywhere, doesn't accept variables, can't use context

// Page Query → can only be used on pages, uses variables and context

export default class postLayout extends Component {
  render() {
    const { html, frontmatter } = this.props.data.markdownRemark;
    const { location } = this.props;
    return (
      <Layout location={location}>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }
}

// Context on the createPage method call auto-populates graphql variables
// with the same name ($slug)
export const POST_QUERY = graphql`
  query POST_QUERY($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`;
