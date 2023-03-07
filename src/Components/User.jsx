import React from 'react'
import "./User.css";
import cvFormated from "../images/cv_formated.jpg";
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import EventIcon from '@mui/icons-material/Event';

function User() {
  return (
    <div className='user'>
        <img src={cvFormated} alt="image de cv" width="150px" height="150px" className='user_avatar'/>
        <h1 className="user_name">
          Amara Yacine
        </h1>
        <p className="user_profession">
          Développeur Web et Web mobile
        </p>
        <div className="user_infos">
          <p className="user_info">
          <HomeIcon/>510 Boulevard Jeanne d'Arc, 59500 Douai
          </p>
          <p className="user_info">
            <a href="tel+330641902783" className='phone'><PhoneAndroidIcon/>0641902783</a>
          </p>
          <p className="user_info mailto">
            <a href="mailto:a.yacine2023@laposte.net" className='mailto'>
              <MarkEmailReadIcon/>a.yacine2023@laposte.net
            </a>
          </p>
          <p className="user_info">
            <EventIcon/>Date de naissance : 15/12/1997          
          </p>
        </div>
    </div>
  )
}
export default User