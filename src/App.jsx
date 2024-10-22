import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Route, Routes without BrowserRouter
import Navbar from './components/Navbar'; // Your navigation bar component
import Hero from './components/Hero/Hero';
import MyPrograms from './components/MyPrograms/MyPrograms';
import Title from './components/Title/Title';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Blogs from './components/Blogs/Blogs'; // Import Blogs component
import LoginSignUp from './components/LoginSignup/LoginSignup';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar /> {/* Navbar visible on all pages */}
      
      <Routes> {/* Define routes here */}
        <Route path="/" element={
          <>
            <Hero />
            <div className="container">
              <Title subTitle='OUR PRODUCTS' title='What We Offer' />
              <MyPrograms />
              <About setPlayState={setPlayState} />
              <Title subTitle='TESTIMONIALS' title='What Student Says' />
              <Testimonials />
              <Title subTitle='Contact Us' title='Get in Touch' />
              <Contact />
              <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
          </>
        } />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<LoginSignUp />} />
      </Routes>
    </>
  );
};

export default App;
