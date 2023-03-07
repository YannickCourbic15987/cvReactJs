import React from 'react'
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

function Experiences({datas}) {
  return (
  <div className='cursus mb3'> 
  <h2 className='h2'>Expériences</h2> {datas.map(item => { 
    return <div className="grid_row" key={item.id} id={"row"+item.id}> 
      <div className="grid_item"> 
        <p className='grid_date'>{item.date}</p> 
          </div> <div className="grid_item"> 
            <h3 className='grid_title'>{item.title}</h3>
            <p className="grid_location">{item.location}</p> 
            <p className="grid_text">{item.text}</p> 
            <ul className="grid_missions">
            {
              item.missions.map(mission => {
                return <div key= {mission.id}>
                    <li className="grid_mission" > 
                        <PlaylistAddCheckCircleIcon />{
                        mission.title}
                    </li>

                  </div>
              })
            }
            </ul>
          </div> 
     </div> })} 
  </div>)

}

export default Experiences