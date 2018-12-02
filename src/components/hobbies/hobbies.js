import React from 'react'
import styled from "styled-components"

import CvSectionDescription from '../cvSectionDescription/cvSectionDescription';

const HobbiesDescription = styled.div`
  padding-top: 15px;
`;
const Hobbies = ({ text }) => <HobbiesDescription><CvSectionDescription text={text} /></HobbiesDescription>; 

export default Hobbies;
