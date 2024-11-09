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

      <Footer />
    </div>
  );
};

export default Dashboard;
