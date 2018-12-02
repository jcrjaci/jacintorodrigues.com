import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import BlankPage from '../components/blankPage/blankPage'
import Cv from '../components/cv/cv'
import CvHeader from '../components/cvHeader/cvHeader';
import CvSection from '../components/cvSection/cvSection';
import Description from '../components/description/description';
import Education from '../components/education/education';
import Employments from '../components/employments/employments';
import Hobbies from '../components/hobbies/hobbies';
import Skills from '../components/skills/skills';

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
              content={<Hobbies text={hobbies}/>}
            />
          </BlankPage>
        </Cv>   
      )}
      />
);

export default Index;
