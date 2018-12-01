import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

  const Cv = ({ children }) => (
  <StaticQuery
     query={graphql`
     query asd {
       site {
         siteMetadata {
           title
         }
       }
     }
     `}
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
      <div
        style={{
          backgroundColor: '#ddd',
          paddingTop: '50px',
          fontFamily: 'Bitter',
        }}
      >
        {children}
      </div>
    </>)}
   />
);

Cv.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Cv;
