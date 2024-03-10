import React, { useState, useEffect, useRef } from 'react';
  import { Header } from '../../components/Header/Header';
  import Navbar from '../../components/SuperAdmin/Navbar';
  import UserAdminPage from '../UsersAdminPage/UserAdminPage';
  import CompanyPage from '../CompanyPage/CompanyPage';
  import { ProfilePage } from '../ProfilePage/ProfilePage';
  
  const Homepage = () => {
    return (
        <>
        <Header/>
          <Navbar/>
          
           </>
    )
  }
  
  export default Homepage
  