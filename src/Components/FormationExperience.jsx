import React from 'react'
import "./FormationExperience.css";
import dataFormation from './data/Formations';
import Formation from "./Formation";
import dataExperience from './data/Experiences';
import Experiences from "./Experiences"
function FormationExperience() {


  return (
    <>
        <Formation datas={dataFormation} style={{zIndex: "-1"}}/>
        <Experiences datas = {dataExperience}style = {{zIndex: "-1"}}/>

    </>
  )
}

export default FormationExperience