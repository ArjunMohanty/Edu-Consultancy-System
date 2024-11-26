<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Footer from "../Footer/Footer";
import SingleBanner from "../Banner/SingleBanner";
import AccountSettings from "../UserProfile/AccountSettings";
import ChangePassword from "../UserProfile/ChangePassword";
import UserAddress from "../UserProfile/UserAddress";
import Sidebar from "../UserProfile/Sidebar";
import Courses from "../UserProfile/Courses";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("accountsettings");
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("myCourses")) || [];
    setMyCourses(storedCourses);
  }, []); // Load once on component mount

  return (
    <div className="userprofile">
      <SingleBanner
        heading="My Dashboard"
        bannerimage="https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg"
      />
      <div className="userprofilein">
        <div className="left">
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
        </div>
        <div className="right">
          {activePage === "accountsettings" && <AccountSettings />}
          {activePage === "changepassword" && <ChangePassword />}
          {activePage === "address" && <UserAddress />}
          {activePage === "yourcourses" && <Courses courses={myCourses} />}
        </div>
      </div>
      <br />
=======
import React, { useState } from 'react';
import './Dashboard.css'; // Add CSS for styling if needed
import Footer from '../Footer/Footer';
import SingleBanner from '../Banner/SingleBanner';
import AccountSettings from '../UserProfile/AccountSettings';
import ChangePassword from '../UserProfile/ChangePassword';
import Orders from '../UserProfile/Orders';
import UserAddress from '../UserProfile/UserAddress';
import Sidebar from '../UserProfile/Sidebar';

const Dashboard = () => {
  // Set default state to load 'AccountSettings'
  const [activePage, setActivePage] = useState('accountsettings');

  return (
    <div className='userprofile'>
      <SingleBanner 
        heading={`My Dashboard`}
        bannerimage='https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg'
      />
      <div className='userprofilein'>
        <div className='left'>
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
        </div>
        <div className='right'>
          {activePage === 'accountsettings' && <AccountSettings />}
          {activePage === 'changepassword' && <ChangePassword />}
          {activePage === 'yourorders' && <Orders />}
          {activePage === 'address' && <UserAddress />}
        </div>
      </div>
      <br/><br/>      <br/><br/>
      <br/><br/>

>>>>>>> 0652350ff7081b9bf457c71e288e57c2cf9907e8
      <Footer />
    </div>
  );
};

export default Dashboard;
