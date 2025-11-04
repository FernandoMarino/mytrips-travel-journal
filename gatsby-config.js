/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'myTrips - Your Travel Logbook',
    siteUrl: `https://mytrips-logbook.netlify.app/`,
    author: 'Fernando Marino dos Santos',
    description: 'aplicação web desenvolvida para o projeto da disciplina Front-end Jamstack com Gatsby [25E4_2]'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'trips',
        path: `${__dirname}/trips`
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-styled-components`,
  ],
}
