// import React from 'react';
// import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import About from "./Components/Pages/About";
// import Contact from "./Components/Pages/Contact";
// import Home from "./Components/Pages/Home";
// import Profile from './Components/Pages/Profile';
// import Services from './Components/Pages/Services';
// import Header from './Components/Pages/Header';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Components/Pages/Footer';

// function App() {
//   return (
 
//       <div className="container">
        
//          <BrowserRouter>
//          <Header/>
         
//          <Routes>

       
//           <Route  path="/" element={<Home/>} />
//           <Route  path="/about" element={<About/>} />
//           <Route  path="/contact" element={<Contact/>} />
//           <Route  path="/profile" element={<Profile/>} />
//           <Route  path="/Services" element={<Services/>} />
//           </Routes>
//           </BrowserRouter>
//           <Footer/>
//       </div>
    
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Profile from './Components/Pages/Profile';
import Services from './Components/Pages/Services';
import Header from './Components/Pages/Header';
import Footer from './Components/Pages/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


