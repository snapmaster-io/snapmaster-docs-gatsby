module.exports = {
  siteMetadata: {
    siteTitle: `SnapMaster documentation`,
    defaultTitle: `SnapMaster documentation`,
    siteTitleShort: `snapmaster-docs`,
    siteDescription: `Documentation for SnapMaster`,
    siteUrl: `https://snapmaster-docs.netlify.com`,
    siteAuthor: `@snapmaster-io`,
    siteImage: `/SnapMaster-logo-220.png`,
    siteLanguage: `en`,
    //themeColor: `#7159c1`,
    themeColor: `#db3d44`,    
    basePath: `/`,
    footer: `Copyright 2020 SnapMaster`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/snapmaster-io/snapmaster-docs-gatsby`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SnapMaster Documentation`,
        short_name: `SnapMaster Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://docs.snapmaster.io`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              backgroundColor: 'black',
              wrapperStyle:
              'border: 5px solid red; margin-left: 0!important; margin-right: 0!important;',
            },
          },
        ],
      },
    },
  ],
};
