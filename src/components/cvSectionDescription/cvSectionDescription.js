import React from 'react'
import styled from "styled-components"

const Description = styled.div`
     margin: 10px 0;
     text-align: justify;
`;

const CvSectionDescription = ({ text }) => (
  <Description>
    {text}
  </Description>
  );
export default CvSectionDescription;
