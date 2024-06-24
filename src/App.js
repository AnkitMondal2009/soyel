 
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import primecoder from './primecoder.png';
import Dailynews from './components/Dailynews.js';
import About from './components/About';
import Page1 from './components/Page1.js';
import Page2 from './components/Page2.js';
import Error from './components/Error.js';
import Contack from './components/Contack.js';
import Admin from './components/Admin.js'; // Import Admin component
 
function App() {
  const mode = 'light';
  const [comments, setComments] = useState([]);
  const [showNavbarFooter, setShowNavbarFooter] = useState(true);
  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  

  return (
    <HashRouter>
     
      {showNavbarFooter && <Navbar
        logo={primecoder}
        text1="HOME"
        text2="ABOUT"
        text3="DailyNWS"
        text4="CONTACT"
        mode={mode}
         
        link2="/about"
        link3="/Dailynews/page1"
        link4="/contack"
      />}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Dailynews" element={<Dailynews />} />
        <Route element={<Page1 />} path="/Dailynews/page1" />
        <Route element={<Page2 />} path="/Dailynews/page2" />
        <Route element={<Contack addComment={addComment} />} path="/contack" />
        <Route element={<Admin setShowNavbarFooter={setShowNavbarFooter} comments={comments} />} path="/admin" />
        <Route element={<Error mode={mode} />} path="*" />
      </Routes>

      {showNavbarFooter && <Footer
        logo={primecoder}
        
        footertext="MR.PRIME CODER is a webserver created by Ankit Mondal. Hope you liked this template. This template is made by react JS (using JSX). Contack with us to buy this template..."
         
        addComment={addComment} // Pass addComment function as prop
      />}
       
    </HashRouter>
  );
}

export default App;
