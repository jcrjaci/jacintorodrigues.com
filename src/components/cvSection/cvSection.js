import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`;

const SectionName = styled.div`
  flex: 1;
  color: #000;
  font-weight: 700;
  font-size: 20px;
  margin-right: 30px;
  text-transform: uppercase;
`;

const Underline = styled.div`
  background-color: #b32500;
  height: 10px;
  margin-top: 5px;
`;

const Content = styled.div`
  flex: 4;
  font-size: 11px;
  line-height: 1.5;
  margin-bottom: 0;
`;

const CvSection = ({ name, content }) => (
  <Container>
    <SectionName>
      {name}
      <Underline />
    </SectionName >
    <Content>
      {content}
    </Content >
  </ Container>
)

export default CvSection;
