module.exports = {
  siteMetadata: {
    title: `St. Jude Cloud Documentation`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg height="512pt" viewBox="-31 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m30 316c-16.570312 0-30 13.429688-30 30 0 16.566406 13.429688 30 30 30h59l-14 106c0 16.566406 13.429688 30 30 30s30-13.433594 30-30l14-106h120l-14 106c0 16.566406 13.429688 30 30 30s30-13.433594 30-30l14-106h61c16.570312 0 30-13.433594 30-30 0-16.570312-13.429688-30-30-30h-53l16-120h67c16.570312 0 30-13.433594 30-30 0-16.570312-13.429688-30-30-30h-59l14-106c0-16.570312-13.429688-30-30-30s-30 13.429688-30 30l-14 106h-120l14-106c0-16.570312-13.429688-30-30-30s-30 13.429688-30 30l-14 106h-61c-16.570312 0-30 13.429688-30 30 0 16.566406 13.429688 30 30 30h53l-16 120zm143-120h120l-16 120h-120zm0 0"/></svg>`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1180,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/icons/,
        },
      },
    },
    // `gatsby-plugin-purgecss`,
  ],
}
