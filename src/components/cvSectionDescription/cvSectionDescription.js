import React from 'react'
import styled from "styled-components"

const Description = styled.div`
     margin: 6px 0;
     text-align: justify;
`;

const CvSectionDescription = ({ text }) => (
  <Description>
    {text}
  </Description>
  );
export default CvSectionDescription;
