// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <footer className="py-3 text-center">
//            All Rights Reserved
// ©
// Keshavapatteri M
//         </footer>
//     );
// };

// export default Footer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 MyApp. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

