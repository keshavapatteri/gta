import React from 'react';

function About() {
  const buttonStyle = {
    // Add your button styles here
    backgroundColor: '#007bff', // Example background color
    color: '#fff', // Example text color
    padding: '20px 40px', // Example padding
    borderRadius: '50px', // Example border radius
    cursor: 'pointer', // Example cursor style
    textDecoration: 'none', // Remove default link underline
    display: 'inline-block', // Ensure button and link are displayed inline
    marginLeft:'100px',
    marginTop:'100px',
    marginBottom:'200px',
  };

  return (
  
  
    <div>
      <button style={buttonStyle}>
        <a href="https://www.instagram.com/keshu_mkt?igsh=MTJubnBtcnhyb3Zqdw%3D%3D&utm_source=qr" style={{ color: 'inherit', textDecoration: 'inherit' }}>Instagram</a>
      </button>
      <button style={buttonStyle}>
        <a href="https://wa.me/qr/FGXIQYSV7K7WO1" style={{ color: 'inherit', textDecoration: 'inherit' }}>WhatsApp</a>
      </button>
    </div>
  );
}

export default About;
