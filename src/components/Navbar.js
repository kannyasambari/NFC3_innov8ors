import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../images/logo.avif';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={Logo} alt="Logo" style={styles.logo} />
        <span style={styles.companyName}>Pawfect</span>
      </div>
      <div style={styles.linkContainer}>
        <Link to="home" smooth={true} duration={500} style={styles.link}>Home</Link>
        <Link to="events" smooth={true} duration={500} style={styles.link}>Events</Link>
        <Link to="community" smooth={true} duration={500} style={styles.link}>Community</Link>
        <Link to="about" smooth={true} duration={500} style={styles.link}>About</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: '1000' // Ensures the navbar stays on top of other content
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: '40px',
    marginRight: '10px'
  },
  companyName: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  linkContainer: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    fontSize: '1rem',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer'
  }
};

export default Navbar;
