
import './App.css';
import User from "./Components/User";
import Skills from "./Components/Skills";
import Profil from './Components/Profil';
import FormationExperience from './Components/FormationExperience';
import DarkMode from './Components/DarkMode';
import {Preview, print} from 'react-html2pdf';
import NavBar from './Components/NavBar';


function App() {

  const handleGenerateCv = () => {
    let cvTemplate = document.getElementById('cv-print');
    cvTemplate.setAttribute("style", "width:210mm !important");
    cvTemplate.classList.add('cv-print');
    document.body.classList.remove("dark");
    setTimeout(() => {
      print('cv', 'cv-print');
      cvTemplate.setAttribute("style", "width:100% !important");
      cvTemplate.classList.remove('cv-print');
    },300)
  }
  return (
    <Preview id={'cv-print'} >
      <div className="App">
      <div className="grid_container">
        <div className="sidebar">
          <div className="actions">
            <DarkMode/>
            <button onClick={handleGenerateCv}>pdf</button>
          </div>
          <User/>
          <Skills/>
        </div>
        <div className="main" style={{ marginBottom: "100px" }}>
          {/* <NavBar/> */}
          <Profil/>
          <FormationExperience/>
        </div>
      </div>
      </div>
      </Preview>
  );
}

export default App;
