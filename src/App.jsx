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
import Product from './components/productfld/Product';
import LoginSignUp from './components/LoginSignup/LoginSignup';
import Dashboard from './components/Dashboard/Dashboard';
import AccountSettings from './components/UserProfile/AccountSettings';
import Orders from './components/UserProfile/Orders';
import SingleBlog from './components/Blogs/SingleBlog';
import JavaFullstack from './components/Products/JavaFullstack';
import Learning from './components/Products/Learning';
import DigitalMarketing from './components/Products/DigitalMarketing';


const App = () => {
  const [playState, setPlayState] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState(""); // Global username state

  return (
    <>
      {/* Show login/signup popup if showLogin is true */}
      {showLogin && <LoginSignUp setShowLogin={setShowLogin} setUsername={setUsername} />} 

      {/* Pass username to Navbar */}
      <Navbar setShowLogin={setShowLogin} username={username} />

      <Routes>
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
        <Route path="/product" element={<Product />} />
      
        
        {/* Pass username to Dashboard */}
        <Route path="/dashboard" element={<Dashboard username={username}/>}  />
        <Route path="/dashboard/orders" element={<Orders/>}  />
        <Route path='/javafullstack' element={<JavaFullstack/>} />
        <Route path='/learning' element={<Learning/>} />
        <Route path='/digitalmarketing' element={<DigitalMarketing/>} />

      </Routes>
    </>
  );
};

export default App;
