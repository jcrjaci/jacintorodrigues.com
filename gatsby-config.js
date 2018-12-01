module.exports = {
  siteMetadata: {
    title: 'Jacinto Rodrigues',
    cv: {
      name: 'Jacinto Rodrigues',
      email: 'me@jacintorodrigues.com',
      site: 'jacintorodrigues.com',
      phone: '916 499 958',
      location: 'Paços de Ferreira, Portugal',
      linkedin: 'jacintoRodrigues',
      linkedinUrl: 'https://www.linkedin.com/in/jacintorodrigues/',
      github: 'jcrjaci',
      githubUrl: 'https://github.com/jcrjaci',
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bitter`,
            subsets: [`latin`],
            variants: [`400`, `700`]
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
