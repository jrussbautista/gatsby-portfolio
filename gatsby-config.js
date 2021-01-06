module.exports = {
  siteMetadata: {
    title: `James Russel C. Bautista | Portfolio`,
    email: `jrussclay@gmail.com`,
    description: `Hi Im James Russel C. Bautista. Im a Ful stack developer. I build stuff.`,
    author: `James Russel C. Bautista`,
    job: `Full Stack Software Engineer`,
    intro: `I build stuff.`,
    sub: `I'm a full stack developer based in Manila, Philippines specializing in building websites and mobile applications.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-145462597-2',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
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
        background_color: `#3498db`,
        theme_color: `#3498db`,
        display: `minimal-ui`,
        icon: `src/images/site-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `700`],
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
