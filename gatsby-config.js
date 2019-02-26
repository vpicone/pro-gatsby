module.exports = {
  siteMetadata: {
    title: `Cloudsnap`,
    description: ` Connect your apps in a snap. Cloudsnap is the premier iPaaS solution built for the connected enterprise.`,
    author: `tag-team`,
    siteUrl: `https://unruffled-ptolemy-5943cd.netlify.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        emitWarning: true,
        failOnError: false
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cloudsnap`,
        short_name: `Cloudsnap`,
        start_url: `/`,
        background_color: `#0B4F71`, // indigo-900
        theme_color: `#0B4F71`, // indigo-900
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-plugin-sitemap`, // only generated on build
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline"
  ]
};
