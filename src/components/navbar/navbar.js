import { Link } from 'react-router-dom';
import CV from '../../assests/nonso_graduate.docx';
import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For toggling the sidebar

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='navbar-div'>
        <div className='log-link-div'>
          <Link to='/' className='logo-link'>
            <div className='logo-div'>
              <h1>NO</h1>
            </div>
          </Link>

          <div className='menu-icon' onClick={handleToggle}>
            {isOpen ? 'X' : '☰'}
          </div>

          <div className={`download-divs ${isOpen ? 'open' : ''}`}>
            <a href={CV} download className='btn-link'>Vita</a>
            <a href={CV} download className='btn-link'>Transcript</a>
            <Link to='/awards' className='award-link'>Awards</Link>
            <a href='https://safemail-758v.onrender.com' className='btn-link'>Projects</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
