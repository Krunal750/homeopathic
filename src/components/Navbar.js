import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import hospitalLogo from './logo2.png'; // Import your hospital logo image

const navbarStyle = {
  backgroundColor: 'lightblue',
  padding: '10px 0',
  height: '100px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  margin: '0 30px',
  color: 'navy',
  fontSize: '18px',
};

const logoStyle = {
  paddingTop: '0px',    // Padding for the top
  paddingBottom: '5px', // Padding for the bottom
  width: '110px',
  height: '90px', // Set both width and height to the same value for a circular shape
  borderRadius: '50%', // Create a circular shape with rounded corners
  overflow: 'hidden', // Hide any image overflow
};

// const headingStyle = {
//   textAlign: 'center', // Center the heading horizontally
//   backgroundColor: 'lightblue',
// };

function Navbar() {
  return (
      
      <nav style={navbarStyle} className="navbar-fixed">
      {/* <h1 style={headingStyle}>SWASTHYA HOMEOPATHIC</h1> */}
        <div>
          <div className="container" style={containerStyle}>
            <Link to="/" style={linkStyle}>
              <img src={hospitalLogo} alt="Hospital Logo" style={logoStyle} /> {/* Insert the hospital logo here */}
            </Link>
            <div>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
              <Link to="/doctors" style={linkStyle}>
                Doctors
              </Link>
              <Link to="/gallery" style={linkStyle}>
                Gallery
              </Link>
              <Link to="/Aboutus" style={linkStyle}>
                About us
              </Link>
              <Link to="/PatientSearch" style={linkStyle}>
                Patient
              </Link>
            </div>
            <Link to="/Login" style={linkStyle}>
              Doctors Log in
            </Link>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
