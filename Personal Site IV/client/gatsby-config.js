module.exports = {
  siteMetadata: {
    title: 'Vimolicious',
    description: 'I write in and about software. Check it out!',
    author: 'Vimolicious',
  },
  plugins: [
    //
    // Meta info
    //
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/images/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/images`,
      },
    },
    //
    // Images and posts
    //
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
