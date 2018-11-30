import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header/header'
import './layout.css'

const query = graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`;
const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site }) => (
      <>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            { name: 'jacinto Rodrigues', content: 'jacinto Rodrigues' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
