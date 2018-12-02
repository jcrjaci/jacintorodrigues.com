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
      <CvSectionTitle text={employments[value].name} date={employments[value].date} url={employments[value].url} />
      <CvSectionTitle text={employments[value].position} />
      <CvSectionDescription text={employments[value].description} />
      <CvSectionDescription text={`Stack: ${employments[value].stack}`} />
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
    <StaticQuery
      query={graphql`
        query cv {
          site {
            siteMetadata {
              title
              summary
              education {
                name
                description
                date
                courses {
                  name
                  date
                }
              }
              employments {
                byside {
                  name
                  url
                  date
                  position
                  stack
                  description
                }
                seedstars {
                  name
                  url
                  date
                  position
                  stack
                  description
                }
                smartwatt {
                  name
                  url
                  date
                  position
                  stack
                  description
                }
                scpdpi {
                  name
                  url
                  date
                  position
                  stack
                  description
                }
                infoportugal {
                  name
                  url
                  date
                  position
                  stack
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
      render={({ site: { siteMetadata: { title, summary, education, employments, skills, hobbies }} }) => (
        <Cv title={title} >
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
        </Cv>   
      )}
      />
);

export default Index;
