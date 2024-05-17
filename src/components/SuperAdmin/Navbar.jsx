import React,{useState, useEffect} from 'react'
import { Nav, NavLink, Bars, NavMenu } from '../NavSidebar/NavbarElements';
import { useLocation } from 'react-router-dom';
import { BiSolidDashboard } from "react-icons/bi";
import { FaUserClock } from "react-icons/fa";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa";
import DashboardS from './DashboardS';
import UserAdminPage from '../../pages/UsersAdminPage/UserAdminPage';
import CompanyPage from '../../pages/CompanyPage/CompanyPage';
const Navbar = () => {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(true); // Initialize as open
    const [currentPage, setCurrentPage] = useState(null);
    useEffect(() => {
      // Check the current route and determine whether to show the sidebar
      if (location.pathname === '/admindashboard' ||location.pathname === '/adminusers'|| location.pathname === '/admincompany'|| location.pathname === '/adminsettings') {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    }, [location]);
  
    const closeSidebar = () => {
      setSidebarOpen(false);
    };
     useEffect(() => {
      const handleDocumentClick = (event) => {
        if (sidebarOpen && !event.target.closest('.NavSidebar')) {
          closeSidebar();
        }
      };
    
      document.addEventListener('click', handleDocumentClick);
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, [sidebarOpen]);
  return (
    <div className={`NavSidebar ${sidebarOpen ? 'open' : ''}`}>
    <Nav>
<NavMenu>
<NavLink to='/admindashboard' activeStyle>
        <BiSolidDashboard style={{ marginTop: "5px" }} className="nav-svg"/>
        <span className="mobile-text">Dashboard</span>
      </NavLink>
<NavLink to='/adminusers' activeStyle>
        <HiUsers style={{ marginTop: "5px" }} className="nav-svg"/>
        <span className="mobile-text">Users</span>
      </NavLink>
      <NavLink to='/admincompany' activeStyle>
        <FaBuilding style={{ marginTop: "5px" }} className="nav-svg"/>
        <span className="mobile-text">Company</span>
      </NavLink>
      <NavLink to='/adminsettings' activeStyle>
        <IoMdSettings  style={{ marginTop: "5px" }} className="nav-svg"/>
        <span className="mobile-text">Admin Settings</span>
      </NavLink>
</NavMenu>
    </Nav>
   
</div>
  )
}

export default Navbar
