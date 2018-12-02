import React from 'react'
import styled from "styled-components"

const TechnologyContainer = styled.p`
  margin-bottom: 3px;
  text-align: justify;
`;

const TechnologyType = styled.span`
  font-weight: 700;
  text-transform: Uppercase;
`;

const TechnologyDescription = styled.span`
  margin-left: 3px;
`;

const Skill = ({ type, description }) => (
  <TechnologyContainer>
    <TechnologyType>{type}:</TechnologyType>
    <TechnologyDescription>
      {description}
    </TechnologyDescription>
 </ TechnologyContainer>
 );

export default Skill;
