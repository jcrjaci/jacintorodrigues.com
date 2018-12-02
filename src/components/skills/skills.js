import React from 'react'

import Skill from '../skill/skill';

const Skills = ({ skills }) => Object.keys(skills).map(value => <Skill key={value} type={value} description={skills[value]}/>); 

export default Skills;
