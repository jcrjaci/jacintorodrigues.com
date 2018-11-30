import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header/header'
import BlankPage from '../blankPage/blankPage'
import CvHeader from '../cvHeader/cvHeader';
import CvSection from '../cvSection/cvSection';
// import './layout.css'


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
      <Header siteTitle={site.siteMetadata.title} />
      <div
        style={{
          backgroundColor: '#ddd',
          paddingTop: '50px',
          // margin: '0 auto',
          // maxWidth: 960,
          // padding: '0px 1.0875rem 1.45rem',
          // paddingTop: 0,
        }}
      >
      <BlankPage>
        {/* {children} */}
        <CvHeader />
        <CvSection name="Summary" content="I'm a full-stack software engineer with almost 5 years of work experience within the industry. I´ve studied at ISEP (Porto, Portugal) from 2008 to 2015 where I took my Informatics Engineering Bachelor and my Informatics Engineering Masters.

Currently, I'm working as a Full-stack Software Engineer at BySide mainly working with Front-End technology." />
        <CvSection
          name="Education"
          content="ISEP - Instituto Superior de Engenharia do Porto	2008 to 2015
          BSc Computer Software Engineering 2012
          MSc Computer Engineering 2015
          My MasterThesis entitled 'Intelligent Collecting data Tool', the goal was to collect diverse types of data related to photovoltaic inverters in order to make it possible to monitor a photovoltaic energy production plant, as well as the development of an alarmistic system that informs users in case errors occur. In addition, a web application was developed in order to support the management of the developed functionality."
          />
      </BlankPage>
      </div>
    </>)}
   />
);

Cv.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Cv;
