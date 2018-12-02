import React from 'react'

import CvSectionTitle from '../cvSectionTitle/cvSectionTitle';
import CvSectionDescription from '../cvSectionDescription/cvSectionDescription';

const Education = ({ education: { name, date, courses, description } }) => (
  <>
    <CvSectionTitle text={name} date={date} />
    {courses.map((course) => (
      <CvSectionTitle key={course.name} text={course.name} date={course.date}/>
    ))}
    <CvSectionDescription text={description} />
  </>
);
export default Education;
