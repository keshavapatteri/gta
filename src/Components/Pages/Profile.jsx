// import React from 'react'
// import './Profile.css';
// function Profile() {
//   return (
//     <div className='Profile'>
//       <h1>Keshavapatteri m</h1>
//       <h2>FullStack Developer at Entri Elivate</h2>
//       <h5>I'm a passionate full-stack web developer with a knack for crafting robust and user-friendly digital experiences.
//          Equipped with expertise in both frontend and backend technologies, I thrive on turning ideas into efficient and elegant
//           solutions. With a keen eye for design and a commitment to staying updated with the latest industry trends, I am dedicated 
//           to creating seamless web applications that leave a lasting impression. My goal is to leverage my skills to contribute to
//            innovative projects and drive impactful results in the ever-evolving landscape of web development.</h5>
      

//     </div>
//   )
// }

// export default Profile
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  text-align: center; /* Optional: Customize the alignment */
`;

const Heading1 = styled.h1`
  font-family: 'Arial, sans-serif';
  font-size: 36px;
  font-weight: bold;
  color: #333; /* Optional: Customize the color */
`;

const Heading2 = styled.h2`
  font-family: 'Georgia, serif';
  font-size: 27px;
  font-style: italic;
  color: #666; /* Optional: Customize the color */
`;

const Paragraph = styled.h5`
  font-family: 'Monospace, sans-serif';
  font-size: 17px;
  line-height: 1.6;
  color: #444; /* Optional: Customize the color */
  padding-left: 20px;
  padding-right: 20px;
  margin-top:50px;
  margin-bottom:50px;
`;

function Profile() {
  return (
    <ProfileContainer>
      <Heading1>Keshavapatteri m</Heading1>
      <Heading2>FullStack Developer at Entri Elivate</Heading2>
      <Paragraph>
        I'm a passionate full-stack web developer with a knack for crafting robust and user-friendly digital experiences.
        Equipped with expertise in both frontend and backend technologies, I thrive on turning ideas into efficient and elegant
        solutions. With a keen eye for design and a commitment to staying updated with the latest industry trends, I am dedicated
        to creating seamless web applications that leave a lasting impression. My goal is to leverage my skills to contribute to
        innovative projects and drive impactful results in the ever-evolving landscape of web development.
      </Paragraph>
    </ProfileContainer>
    
  );
 
}

export default Profile;
