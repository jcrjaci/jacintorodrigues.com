import React from 'react'

import Cv from '../components/cv/cv'
import BlankPage from '../components/blankPage/blankPage'
import CvHeader from '../components/cvHeader/cvHeader';
import CvSection from '../components/cvSection/cvSection';

const Summary = (
  <p >I'm a full-stack software engineer with almost 5 years of work experience within the industry. I´ve studied at ISEP (Porto, Portugal) from 2008 to 2015 where I took my Informatics Engineering Bachelor and my Informatics Engineering Masters.
 
  Currently, I'm working as a Full-stack Software Engineer at BySide mainly working with Front-End technology.</p> 
 );
 
 const Line = (text, date) => (
 <div style={{
     display: 'flex',
     fontSize: '15px',
   }}>
   <div style={{
     flex: '6',
     fontWeight: '600',
   }}>{text}</div>
   <div  style={{
     flex: '3',
     textAlign: 'right',
   }}>{date}</div>
   </div>
 );
 const Education = (
   <>
   {Line('ISEP - Instituto Superior de Engenharia do Porto', '2008 to 2015')}
   {Line('MSc Computer Engineering', '2015')}
   {Line('BSc Computer Software Engineering', '2012')}
   <p>
   My MasterThesis entitled 'Intelligent Collecting data Tool', the goal was to collect diverse types of data related to photovoltaic inverters in order to make it possible to monitor a photovoltaic energy production plant, as well as the development of an alarmistic system that informs users in case errors occur. In addition, a web application was developed in order to support the management of the developed functionality.</p>
 </>
 );
 const Employment = (
   <>
   {Line('BySide', 'Feb. 2017 to Current')}
   {Line('Software Engineer', '')}
   {/* {Line('Porto', '')} */}
   <p style={{
     marginBottom: '10px',
   }}>Development of a Byside product named ByTalk.
   <br/>ByTalk is an online marketing platform aimed at small and medium-sized businesses that connects customer information to companies in real time and is able to facilitate dialogue between both
 In Byside i'm a fullStack developer but more focused in frontend technologies.</p>
   {Line('Seedstars', 'May 2016 to Feb. 2017')}
   {Line('Software Engineer', '')}
   {/* {Line('Porto', '')} */}
   <p style={{
     marginBottom: '10px',
   }}>Development of start-ups from scratch that had an impact primarily on emergent markets.
 I worked directly, on a daily basis, with the operations team that was on the field. I was responsible for any software development that the company needed. I also partook in strategic decisions.
 </p>
   {Line('Smartwatt', 'Mar. 2014 to May 2016')}
   {Line('Software Engineer', '')}
   {/* {Line('Porto', '')} */}
   <p style={{
     marginBottom: '10px',
   }}>Development of a web application and design of systems oriented to decision making with predictive information based on weather forecast, as well as systems oriented to photovoltaic production and consumption monitorization.<br/>
 I was responsible for developing and maintaining all the backend and webservices including REST APas well as architecting the databases.</p>
   {Line('SCPdpi', 'Feb. 2013 to May 2013')}
   {Line('Software Engineer', '')}
   {/* {Line('Paços de Ferreira', '')} */}
   <p style={{
     marginBottom: '10px',
   }}>Development of a web application for management of membership dues.
 This application has all information about an organization's members and allows the visualization of
 members dues and their regularization.
 </p>
   {Line('InfoPortugal S.A.', 'Mar. 2012 to Sept. 2012')}
   {Line('Intern Software Engineer', '')}
   {/* {Line('Porto', '')} */}
   <p style={{
     marginBottom: '10px',
   }}>Development of an editing application for iPad magazines.
 This application is structured by chapters and pages that are easily accessed through a menu and has various multimedia features, including 3D models, virtual tours, photo galleries, audio and video.
 </p>
 </>
 );
 
 const Skills = (
   <>
   <p style={{
     marginBottom: '3px',
   }}>
   <span style={{
     fontWeight: '700',
   }}>FRONT-END:</span> javascript (es6+), react, redux, jquery, jest, HTML, NPM, Yarn, gulp, CSS, SASS, webSockets, webRTC, React Native, node, expressJS</p>
   <p style={{
     marginBottom: '3px',
   }}><span style={{
     fontWeight: '700',
   }}>BACKEND-END:</span> PHP, Python, Silex, PhalconPHP, Django, django rest framework, Redis, Kafka</p>
   <p style={{
     marginBottom: '3px',
   }}><span style={{
     fontWeight: '700',
   }}>DATABASES:</span> MySQL, PostgreSQL, SQlite, elasticSearch</p>
   <p style={{
     // marginBottom: '3px',
   }}><span style={{
     fontWeight: '700',
   }}>LANGUAGES:</span> Portuguese, English, Spanish </p>
   </>
 );
 
 const Hobbies = (
   <p>Travel and sports </p>
 );

const Index = () => (
  <Cv>
    <BlankPage>
      <CvHeader />
      <CvSection name="Summary" content={Summary} />
      <CvSection
        name="Education"
        content={Education}
        />
      <CvSection
        name="Employment"
        content={Employment}
        />
      <CvSection
        name="Skills"
        content={Skills}
        />
      <CvSection
        name="Hobbies"
        content={Hobbies}
        />
      </BlankPage>
  </Cv>
);

export default Index;
