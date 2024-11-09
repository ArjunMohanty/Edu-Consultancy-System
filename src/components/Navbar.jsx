import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '/src/assets/logo.png';
import menu_icon from '/src/assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling within the page
import { Link, useLocation } from 'react-router-dom'; // Use Link from react-router-dom
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = ({ setShowLogin, username }) => { // Accept username as a prop
  const [sticky, setSticky] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  // Check if the current path is "/javafullstack", "/learning", or "/digitalmarketing"
  const isDarkNavPage = ['/javafullstack', '/learning', '/digitalmarketing'].includes(location.pathname);

  return (
    <nav className={`container ${sticky || isDarkNavPage ? 'dark-nav' : ''}`}>
      <Link to="/" className='logo-link'>
        <img src={logo} alt="Logo" className='logo' />
      </Link>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}><Link to="/" className='logo-link'>Home</Link></ScrollLink></li>
        <li><ScrollLink to='program' smooth={true} offset={-260} duration={500}>Product</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About us</ScrollLink></li>
        <li><ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-170} duration={500}>Contact Us</ScrollLink></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        {location.pathname === '/dashboard' ? (
          <AccountCircleIcon fontSize="large" />
        ) : (
          <li><button className="btn" onClick={() => setShowLogin(true)}>Get Started</button></li>
        )}
      </ul>

      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
