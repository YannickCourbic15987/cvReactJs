import React, { useState } from 'react'
import './NavBar.css';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function NavBar() {


  const [mouseEnterCv , setMouseEnterCv] = useState();
  
  const btn = document.getElementById("btnCv");
  if(mouseEnterCv === true){
    btn.classList.remove('noneSpan');
  }

 

  console.log(mouseEnterCv);

  

  return (
    <>
        <div className="navbar">
            <button className='btnNav' id="btnCv"
              onMouseEnter={() => {setMouseEnterCv(true)}}
              onMouseLeave = {() => {setMouseEnterCv(false)}}
            > 
            <AccountCircleOutlinedIcon/><span className='noneSpan'>Cv</span>
            </button>
            <button className='btnNav'><DashboardOutlinedIcon/><span>Portfolio</span></button>
            <button className='btnNav'><ContactMailOutlinedIcon/><span>Contact</span></button>
        </div>
    </>
  )
}

export default NavBar