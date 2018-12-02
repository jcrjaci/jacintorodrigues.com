import React from 'react'
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby'

import { FaEnvelope, FaGlobe, FaPhone, FaMapMarker, FaLinkedin, FaGithub, FaSkype } from 'react-icons/fa';

const Container = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`;

const Name = styled.div`
  flex: 3;
  font-family: 'Bitter';
  font-size: 42px;
  font-weight: 700;
  text-align: 'center';
  text-transform: upperCase;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 13px;
`;

const DetailLine = styled.div`
align-items: center;
display: flex;
line-height: 1.25;
`;

const DetailSpan = styled.span`
padding: 0 3px;
`;

const ExternalLink = styled.a`
padding: 0 3px;
cursor: pointer;
color: inherit;
text-decoration: none;
`;

const OneDetail = ({ icon, link, description }) => (
  <DetailLine>
      {link ?
        <>
          <ExternalLink href={link} target="_blank" aria-label={description}>{icon}</ExternalLink>
          <ExternalLink href={link} target="_blank" aria-label={description}>{description}</ExternalLink>
        </>
        :
          <>
            <DetailSpan>{icon}</DetailSpan>
            <DetailSpan>{description}</DetailSpan>
          </>
      }
  </DetailLine>
);

const MultipleDetail = ({ icon, description, link }) => (
  <DetailLine>
    {icon.map((value, key) => (
      <React.Fragment key={description[key]}>
        <ExternalLink href={link[key]} target="_blank">{icon[key]}</ExternalLink>
        <ExternalLink href={link[key]} target="_blank">{description[key]}</ExternalLink>
      </ React.Fragment>
    ))}
  </DetailLine>
);

const CvHeader = () => (
  <StaticQuery
    query={graphql`
    query cvHeader {
      site {
        siteMetadata {
          cv {
            name
            email
            site
            phone
            location
            linkedin
            github
            linkedinUrl
            githubUrl
            skype
            skypeUrl
          }
        }
      }
    }
    `}
    render={({ site: { siteMetadata : { cv } } }) => (
      <Container>
        <Name >
          <span>{cv.name}</span>
        </Name >
        <Details>
          <OneDetail icon={<FaEnvelope/>} description={cv.email} link={`mailto:${cv.email}`} />
          <OneDetail icon={<FaGlobe/>} description={cv.site} link={`http://${cv.site}`} />
          <OneDetail icon={<FaPhone/>} description={cv.phone} />
          <OneDetail icon={<FaMapMarker/>} description={cv.location} />
          <MultipleDetail
            icon={[<FaLinkedin/>, <FaGithub/>]}
            description={[cv.linkedin, cv.github]}
            link={[cv.linkedinUrl, cv.githubUrl]}
          />
          <OneDetail icon={<FaSkype/>} description={cv.skype} link={cv.skypeUrl} />
        </Details >
      </Container >
    )}
  />
)

export default CvHeader;
