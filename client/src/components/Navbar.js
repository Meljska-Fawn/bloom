import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../fjO3sek7ZT.json';
import Auth from '../utils/auth';
import Button from '../components/Button'
<<<<<<< HEAD
import ImpactModal from './ImpactModal';
import '../styles/Button.css';
=======
import {Menu, MenuItem, useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Button.css'
>>>>>>> main


const Navbar = ({ openModal }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleClick = () => {
    console.log('Impact Button Clicked')
    setModalOpen(true)
  }

const isMobile = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed

  return (
    <div className="navbar">
<<<<<<< HEAD
=======
      <Link className="logo" as={Link} to='/' >
        
          <div className="animation-container">
            <Lottie options={defaultOptions} />
          </div>
      
      </Link>
      {isMobile ? (
        <>
      
          <MenuIcon  sx = {{fontSize: 50}} className = "menu-icon" onClick={toggleMenu} />
          <Menu
            anchorEl={document.querySelector('.menu-icon')}
            open={menuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {Auth.loggedIn() ? (
              <>
                <MenuItem onClick={handleMenuClose}>
                  <Link as={Link} to="/Profile" id="nav-font">
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link as={Link} to="/Donate" id="nav-font">
                    Donate
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link as={Link} to="/Learn" id="nav-font">
                    Learn
                  </Link>
                </MenuItem>
                <MenuItem onClick={() => { Auth.logout(); handleMenuClose(); }}>
                  Logout
                </MenuItem>
                <MenuItem className = "modalMenuItem" onClick={() => { openModal(); handleMenuClose(); }}>
                  <p className = "modalMenuItem">Log Your Impact</p>
                </MenuItem>
                
              </>
            ) : (
              <>
              </>
            )}
          </Menu>
        </>
      ) : (
>>>>>>> main
      <ul className="nav-1">
        {Auth.loggedIn() ? (
          <>
            <li><Link as={Link} to='/Profile' id="nav-font">Profile</Link></li>
            <li><Link as={Link} to='/Donate' id="nav-font">Donate</Link></li>
            <Link className="animation-container" as={Link} to='/' >
              <Lottie options={defaultOptions} />
            </Link>
            <li><Link as={Link} to='/Learn' id="nav-font">Learn</Link></li>
            <Link id="nav-font" onClick={Auth.logout}>Logout</Link>
<<<<<<< HEAD
            <Button content={"Log Your Impact"} onClick={() => handleClick()} />
            {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />}
            <button className='hamburger'>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
            </button>

=======
            <Button content = {"Log Your Impact" } onClick={openModal}/>
>>>>>>> main
          </>
        ): (
          <>
            <button className='hamburger'>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
              <span className='hamburgerLine'></span>
            </button>
          </>
        )}
      </ul>
<<<<<<< HEAD

=======
      )}
>>>>>>> main
    </div>
  );
}

export default Navbar

