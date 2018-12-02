import React from 'react'
import styled from "styled-components"

const LineContainer = styled.div`
  display: flex;
  font-size: 15px;
`;

const Title = styled.div`
  flex: 6;
  font-weight: 600;
`;

const Date = styled.div`
  flex: 3;
  text-align: right;
`;

const TitleLink = styled.a`
color: inherit;
cursor: pointer;
font-weight: 600;
text-decoration: none;
`;

const CvSectionTitle = ({ text, date, url }) => (
  <LineContainer>
    {url ?
      <TitleLink href={url}>{text}</TitleLink>
    :
      <Title>{text}</Title>
    }
    <Date>{date}</Date>
    </LineContainer>
  );

export default CvSectionTitle;
