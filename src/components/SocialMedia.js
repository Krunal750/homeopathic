import React from 'react';
import './SocialMedia.css'
function SocialMedia() {
    const socialMediaStyle = {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'lightgray',
      padding: '10px',
    };
  
    const linkStyle = {
      margin: '0 10px',
      textDecoration: 'none',
      color: 'black',
    };
  
    return (
      <div style={socialMediaStyle}>
        <a style={linkStyle} href="tel:+1234567890"><i className="fas fa-phone"></i> +1 (234) 567-890</a>
        <a style={linkStyle} href="mailto:info@example.com"><i className="fas fa-envelope"></i> info@example.com</a>
        <a style={linkStyle} href="https://www.example.com"><i className="fas fa-map-marker"></i> 123 Street, City, Country</a>
      </div>
    );
  }
  export default SocialMedia;