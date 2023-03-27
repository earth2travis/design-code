module.exports = {
  siteMetadata: {
    title: `Design+Code`,
    description: `Project from the Build a Web App with React Hooks and Advanced React Hooks courses from Design+Code`,
    author: `@earth2travis`,
    siteUrl: `https://design-code.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/icons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
