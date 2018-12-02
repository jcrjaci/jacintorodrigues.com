import React from 'react'
import CvSectionTitle from '../cvSectionTitle/cvSectionTitle';
import CvSectionDescription from '../cvSectionDescription/cvSectionDescription';

const Employments = ({ employments }) => (
  Object.keys(employments).map((value) => (
    <React.Fragment key={employments[value].name}>
      <CvSectionTitle text={employments[value].name} date={employments[value].date} url={employments[value].url} />
      <CvSectionTitle text={employments[value].position} />
      <CvSectionDescription text={employments[value].description} />
      <CvSectionDescription text={`Stack: ${employments[value].stack}`} />
    </React.Fragment>
  ))
);

export default Employments;
