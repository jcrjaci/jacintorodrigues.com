import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Cv from '../components/cv/cv'
import BlankPage from '../components/blankPage/blankPage'
import CvHeader from '../components/cvHeader/cvHeader';
import CvSection from '../components/cvSection/cvSection';
import Skill from '../components/skill/skill';
import CvSectionTitle from '../components/cvSectionTitle/cvSectionTitle';
import CvSectionDescription from '../components/cvSectionDescription/cvSectionDescription';

const Employments = ({ employments }) => (
  Object.keys(employments).map((value) => (
    <>
      <CvSectionTitle text={employments[value].name} date={employments[value].date} />
      <CvSectionTitle text={employments[value].position} />
      <CvSectionDescription text={employments[value].description} />
    </>
  ))
);

const Description = ({ text }) => <CvSectionDescription text={text} />; 

const Education = ({ education: { name, date, courses, description } }) => (
  <>
    <CvSectionTitle text={name} date={date} />
    {courses.map((course) => (
      <CvSectionTitle text={course.name} date={course.date}/>
    ))}
    <CvSectionDescription text={description} />
  </>
);

const Skills = ({ skills }) => Object.keys(skills).map(value => <Skill type={value} description={skills[value]}/>); 

const Index = () => (
  <Cv>
    <StaticQuery
      query={graphql`
        query cv {
          site {
            siteMetadata {
              summary
              education {
                name
                description
                courses {
                  name
                  date
                }
              }
              employments {
                byside {
                  name
                  date
                  position
                  description
                }
                seedstars {
                  name
                  date
                  position
                  description
                }
                smartwatt {
                  name
                  date
                  position
                  description
                }
                scpdpi {
                  name
                  date
                  position
                  description
                }
                infoportugal {
                  name
                  date
                  position
                  description
                }
              }
              skills {
                frontend
                backend
                databases
                languages
              }
              hobbies
            }
          }
        }
      `}
      render={({ site: { siteMetadata: { summary, education, employments, skills, hobbies }} }) => ( 
        <BlankPage>
          <CvHeader />
          <CvSection name="Summary" content={<Description text={summary}/>} />
          <CvSection
            name="Education"
            content={<Education education={education} />}
            />
          <CvSection
            name="Employment"
            content={<Employments employments={employments}/>}
            />
          <CvSection
            name="Skills"
            content={<Skills skills={skills}/>}
            />
          <CvSection
            name="Hobbies"
            content={<Description text={hobbies}/>}
            />
          </BlankPage>
        )}
      />
  </Cv>
);

export default Index;
