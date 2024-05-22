import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ onToggleLargeFont, onToggleLowVolume }) => {
  return (
    <div className='Header'>
      <Link to='/'>
        <h3 className='headerText'>Angeleri Museum of Art</h3>
      </Link>
      <div className='headerControls'>
        <h4 className='headerOption' onClick={onToggleLargeFont}>Large Font</h4>
      </div>
      <div>

        <h4 className='headerOption' onClick={onToggleLowVolume}>Low Volume</h4>
      </div>
      <Link to='/aboutMe'>
        <button id='headerButton'>Connect with the Creator</button>
      </Link>
    </div>
  );
};

export default Header;
