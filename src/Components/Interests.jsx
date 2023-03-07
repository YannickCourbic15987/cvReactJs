import React from 'react'
import InterestsIcon from '@mui/icons-material/Interests';
import ComputerIcon from '@mui/icons-material/Computer';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ExtensionIcon from '@mui/icons-material/Extension';

function Interests() {
  return (
    <div className='skills'>
    <h2 className='h2'> <InterestsIcon/> Centre d'intérêts</h2>
    <ul>
        <li>
        <ComputerIcon/>Informatique
        </li>
        <li>
        <LibraryBooksIcon/> Lectures
        </li>
        <li>
        <ExtensionIcon/> Jeux de Société
        </li>
    </ul>

    </div>
  )
}

export default Interests