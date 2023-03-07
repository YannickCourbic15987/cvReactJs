import React from 'react';
import "./Skills.css";
import Skill from "./Skill";
import Interests from './Interests';
import TranslateIcon from '@mui/icons-material/Translate';
import HandymanIcon from '@mui/icons-material/Handyman';

function Skills() {
  return (
    <>
    <div className="skills">
        <h2 className='h2'> <HandymanIcon/> Compétences</h2>
        <Skill title={"HTML 5"} rating="5"/>
        <Skill title={"CSS 3"} rating="4"/>
        <Skill title={"JAVASCRIPT"} rating="4"/>
        <Skill title={"PHP"} rating="4"/>
        <Skill title={"SYMFONY 6 "} rating="4"/>
        <Skill title={"GITHUB"} rating="4"/>
        <Skill title={"BOOTSTRAP"} rating="5"/>
    </div>
    <div className="skills">
    <h2 className='h2'> <TranslateIcon/> Langues</h2>
        <Skill title="Anglais ( niv scolaire)" rating="3"/>
    </div>
     <Interests/>
    </>
  )
}

export default Skills