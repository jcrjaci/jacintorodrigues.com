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
    },
    summary : 'I\'m a full-stack software engineer with almost 5 years of work experience within the industry. I´ve studied at ISEP (Porto, Portugal) from 2008 to 2015 where I took my Informatics Engineering Bachelor and my Informatics Engineering Masters.\
    Currently, I\'m working as a Full-stack Software Engineer at BySide mainly working with Front-End technologies.',
    education: {
      name: 'ISEP - Instituto Superior de Engenharia do Porto',
      date: '2008 to 2015',
      courses: [
        { name: 'MSc Computer Engineering', date: '2015'},
        { name: 'BSc Computer Software Engineering', date: '2012'}
      ],
      description: 'My Master Thesis entitled "Intelligent Collecting data Tool", the goal was to collect diverse types of data related to photovoltaic inverters in order to make it possible to monitor a photovoltaic energy production plant, as well as the development of an alarmistic system that informs users in case errors occur. In addition, a web application was developed in order to support the management of the developed functionality.'
    },
    employments: {
      byside: {
        name: 'BySide',
        url: 'http://www.byside.com/',
        date: 'Feb. 2017 to Current',
        position: 'Software Engineer',
        description: 'Development of a BySide product named ByTalk.\
        ByTalk is an online marketing platform aimed at small and medium-sized businesses that connects customer information to companies in real time and is able to facilitate dialogue between both \
        In BySide i\'m a fullStack developer but more focused in frontend technologies.'
      },
      seedstars: {
        name: 'Seedstars',
        url: 'https://www.seedstars.com/',
        date: 'May 2016 to Feb. 2017',
        position: 'Software Engineer',
        description: 'Development of start-ups from scratch that had an impact primarily on emergent markets.\
        I worked directly, on a daily basis, with the operations team that was on the field. I was responsible for any software development that the company needed. I also partook in strategic decisions.'
      },
      smartwatt: {
        name: 'Smartwatt',
        url: 'https://smartwatt.pt/',
        date: 'Mar. 2014 to May 2016',
        position: 'Software Engineer',
        description: 'Development of a web application and design of systems oriented to decision making with predictive information based on weather forecast, as well as systems oriented to photovoltaic production and consumption monitorization.\
        I was responsible for developing and maintaining all the backend and web services including REST APIs well as architecting the databases.'
      },
      scpdpi: {
        name: 'SCPdpi',
        url: 'https://www.scpdpi.com/',
        date: 'Feb. 2013 to May 2013',
        position: 'Software Engineer',
        description: 'Development of a web application for management of membership dues.\
        This application has all information about an organization\'s members and allows the visualization of \
        members dues and their regularization.'
      },
      infoportugal: {
        name: 'InfoPortugal S.A.',
        url: 'http://infoportugal.pt/',
        date: 'Mar. 2012 to Sept. 2012',
        position: 'Intern Software Engineer',
        description: 'Development of an editing application for iPad magazines. \
        This application is structured by chapters and pages that are easily accessed through a menu and has various multimedia features, including 3D models, virtual tours, photo galleries, audio and video.'
      },
    },
    skills : {
      frontend: 'javascript (es6+), react, redux, jquery, jest, HTML, NPM, Yarn, gulp, CSS, SASS, webSockets, webRTC, React Native, node, expressJS',
      backend: 'PHP, Python, Silex, PhalconPHP, Django, django rest framework, Redis, Kafka',
      databases: 'MySQL, PostgreSQL, SQlite, elasticSearch',
      languages: 'Portuguese, English, Spanish'
    },
    hobbies: 'Travel and sports',
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
