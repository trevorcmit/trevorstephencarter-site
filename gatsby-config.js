module.exports = {
  siteMetadata: {
    title: 'Trevor Stephen Carter',
    description: 'I am a Embedded and ML Engineer, Researcher, and Writer based in Boston, MA',
    url: 'https://gatsby-starter-amsterdam.netlify.com',
    author: 'Trevor Stephen Carter',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'I am a Embedded and ML Engineer, Researcher, and Writer based in Boston, MA',
    menuLinks: [
      {
        name: 'Trevor Stephen Carter',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Research',
        slug: '/research/',
      },
    ],
    footerLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/trevorcmit',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/trevorstephencarter/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {
        postsPerPage: 6,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation`,
        path: `documentation`,
      },
    },
  ],
}
