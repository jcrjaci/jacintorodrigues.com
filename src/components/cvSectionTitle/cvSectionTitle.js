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

const CvSectionTitle = ({ text, date }) => (
  <LineContainer>
    <Title>{text}</Title>
    <Date>{date}</Date>
    </LineContainer>
  );

export default CvSectionTitle;
