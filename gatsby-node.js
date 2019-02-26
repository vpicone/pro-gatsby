/**
 * Implement Gatsby's Node APIs in this file.
 * This is a node file, so needs to use the require syntax
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.frontmatter.slug;
        createPage({
          path: `/posts/${slug}`,
          component: path.resolve("./src/components/postLayout.jsx"),
          context: {
            slug
          }
        });
      });
      resolve();
    });
  });
};
