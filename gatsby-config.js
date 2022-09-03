module.exports = {
  siteMetadata: {
    title: `test-preview`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://blog.adamchrapek.pl/graphql"
    }
  }]
};