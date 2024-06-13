
// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components';

// const StyledImage = styled.img`
//   width: 200px; /* Set your desired width */
//   height: 500px; /* Maintain the aspect ratio */
// `;

// function Home() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <StyledImage
//           className="d-block w-100"

//           src="  https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/software-development-costs-1128x635.jpg"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>Hello, It's Me Keshavapatteri
//             And I'm a Developer</h3>
//           <p>Fullstack Developer</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <StyledImage
//           className="d-block w-100"
//           src="https://exaud.com/wp-content/uploads/2020/09/software-skills.png" alt="Second slide"
//         />
//         {/* <Carousel.Caption>
//           <h3>2 nd slide</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption> */}
//       </Carousel.Item>
//       <Carousel.Item>
//         <StyledImage
//           className="d-block w-100"
//           src=" https://www.netsolutions.com/insights/wp-content/uploads/2022/06/how-to-become-a-software-developer.webp                            "
//           alt="Third slide"
//         />
//         {/* <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption> */}
//       </Carousel.Item>
//     </Carousel>
//   );
// }


// export default Home;


import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%; /* Make the width responsive */
  height: auto; /* Maintain the aspect ratio */
`;

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <StyledImage
          className="d-block w-100"
          src="https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/software-development-costs-1128x635.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hello, It's Me Keshavapatteri And I'm a Developer</h3>
          <p>Fullstack Developer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StyledImage
          className="d-block w-100"
          src="https://exaud.com/wp-content/uploads/2020/09/software-skills.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <StyledImage
          className="d-block w-100"
          src="https://www.netsolutions.com/insights/wp-content/uploads/2022/06/how-to-become-a-software-developer.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
