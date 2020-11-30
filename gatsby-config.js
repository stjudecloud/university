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
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
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
          {
            resolve: `gatsby-remark-admonitions`,
            options: {
              customTypes: {
                warning: {
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 20 20" width="512"><g><path d="m9 5h2v7h-2z"/><path d="m9 13h2v2h-2z"/><path d="m10 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></g></svg>',
                },
                note: {
                  svg:
                    '<svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m512 334.667v-314.667c0-11.046-8.954-20-20-20h-472c-11.046 0-20 8.954-20 20v472c0 11.046 8.954 20 20 20h314.667c5.375 0 10.489-2.203 14.145-5.86l157.328-157.329c3.652-3.65 5.86-8.747 5.86-14.144zm-472-294.667h432v274.667h-137.333c-11.046 0-20 8.954-20 20v137.333h-274.667zm403.716 314.667-89.049 89.049v-89.049zm-325.716-177.334c0-11.046 8.954-20 20-20h236c11.046 0 20 8.954 20 20s-8.954 20-20 20h-236c-11.046 0-20-8.954-20-20zm20 98.667c-11.046 0-20-8.954-20-20s8.954-20 20-20h236c11.046 0 20 8.954 20 20s-8.954 20-20 20z"/></svg>',
                },
                info: {
                  svg:
                    '<svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m12 1a11 11 0 1 0 11 11 11.013 11.013 0 0 0 -11-11zm0 20a9 9 0 1 1 9-9 9.011 9.011 0 0 1 -9 9z"/><path d="m12 9a1 1 0 0 0 -1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0 -1-1z"/><circle cx="12" cy="7" r="1"/></svg>',
                },
                tip: {
                  svg:
                    '<svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m13.5 24h-3c-.7 0-1.5-.6-1.5-1.8v-2.1c0-1-.5-1.9-1.3-2.6-1.8-1.4-2.7-3.4-2.7-5.6.1-3.8 3.2-6.8 6.9-6.9 1.9 0 3.7.7 5 2s2.1 3.1 2.1 5c0 2.1-.9 4.1-2.6 5.4-.9.7-1.4 1.8-1.4 2.8v2.3c0 .8-.7 1.5-1.5 1.5zm-1.5-18c-3.2 0-5.9 2.7-6 5.9 0 1.9.8 3.7 2.3 4.8 1.1.9 1.7 2.1 1.7 3.4v2.1c0 .2 0 .8.5.8h3c.3 0 .5-.2.5-.5v-2.3c0-1.3.7-2.7 1.8-3.6 1.4-1.1 2.2-2.8 2.2-4.6 0-1.6-.6-3.1-1.8-4.3-1.1-1.1-2.6-1.7-4.2-1.7z"/></g><g><path d="m14.5 21h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5z"/></g><g><path d="m12 3c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3-.2.5-.5.5z"/></g><g><path d="m18.7 5.8c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l1.4-1.4c.2-.2.5-.2.7 0s.2.5 0 .7l-1.4 1.4s-.2.1-.3.1z"/></g><g><path d="m23.5 12.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5z"/></g><g><path d="m20.1 20.6c-.1 0-.3 0-.4-.1l-1.4-1.4c-.2-.2-.2-.5 0-.7s.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7 0 .1-.1.1-.3.1z"/></g><g><path d="m3.9 20.6c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l1.4-1.4c.2-.2.5-.2.7 0s.2.5 0 .7l-1.4 1.4c-.1.1-.2.1-.3.1z"/></g><g><path d="m2.5 12.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5z"/></g><g><path d="m5.3 5.8c-.1 0-.3 0-.4-.1l-1.4-1.5c-.2-.2-.2-.5 0-.7s.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7-.1.1-.2.2-.3.2z"/></g><g><path d="m16 12.5c-.3 0-.5-.2-.5-.5 0-1.9-1.6-3.5-3.5-3.5-.3 0-.5-.2-.5-.5s.2-.5.5-.5c2.5 0 4.5 2 4.5 4.5 0 .3-.2.5-.5.5z"/></g></svg>',
                },
              },
              tag: "!!!",
              icons: "svg",
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
