import React from 'react'
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby'

import { FaEnvelope, FaGlobe, FaPhone, FaMapMarker, FaLinkedin, FaGithub } from 'react-icons/fa';

const Container = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 30px;
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
          <ExternalLink href={link}>{icon}</ExternalLink>
          <ExternalLink href={link}>{description}</ExternalLink>
        </>
        :
          <>
            <DetailSpan href={link}>{icon}</DetailSpan>
            <DetailSpan href={link}>{description}</DetailSpan>
          </>
      }
  </DetailLine>
);

const MultipleDetail = ({ icon, description, link }) => (
  <DetailLine>
    {icon.map((value, key) => (
      <>
      <ExternalLink href={link[key]}>{icon[key]}</ExternalLink>
      <ExternalLink href={link[key]} >{description[key]}</ExternalLink>
      </>
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
        </Details >
      </Container >
    )}
  />
)

export default CvHeader;
