import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
  Navigate, useNavigate
} from "react-router-dom";
import Form from "./pages/SIGNUP/Form";
import Appointment from "./pages/Appointment/Appointment";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { DeactivateAccount } from "./components/Profile/deactivateAccount/DeactivateAccount";
import { ToastContainer, toast } from "react-toastify";
import Announcement from "./pages/AnnouncementPage/Announcement";
import "react-toastify/dist/ReactToastify.css";
import Offers from "./components/Announcement/Offers";
import Settings from "./pages/SettingsPage/Settings";
import LoginForm from "./pages/SIGNIN/LoginForm";
import AdminLoginForm from './pages/SIGNIN/AdminLoginForm';
import NotFound from "./pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/userpov/Home";
import UserAppointment from "./pages/userpov/UserAppointment";
import { Header } from "./components/Header/Header";
import NavSidebar from "./components/NavSidebar/NavSidebar";
import UserAdminPage from "./pages/UsersAdminPage/UserAdminPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import "./app.css";
import DashboardS from './components/SuperAdmin/DashboardS';
import Homepage from './pages/SuperAdmin/Homepage';
import Navbar from './components/SuperAdmin/Navbar';
import { AuthProvider } from './components/Login/AuthContext';
import AdminLogin from './components/Login/AdminLogin';
import AdminCards from './components/Dashboard/AdminCards';
import RegistrationDetails from './components/SuperAdmin/RegistrationDetails';

function App(item) {
  const user = useSelector((state) => state.auth.user);
  const adminUser = useSelector((state) => state.auth.adminUser);
const dispatch=useDispatch();
  const location = useLocation();
  const navigate = useNavigate()

  const isLoginPageOrSignup =
    location.pathname === "/" || location.pathname === "/signup";
  
    const isAdminLogin= location.pathname==='/';
    
    // const [adminUser, setAdminUser]=useState(null);
    // const navigate = useNavigate();

    useEffect(() => {
      // Check if the user is logged in and if it's the admin user
      if (user && adminUser) {
        // Redirect to the admin dashboard after login
        navigate("/admindashboard");
      } else if (user) {
        // Redirect to the user dashboard after login
        navigate("/dashboard");
      }
    }, [user, adminUser, navigate]);
    
  return (
    <div className="App">
      <ToastContainer style={{ width: "330px" }} />
      {/* {!isLoginPageOrSignup && ( */}
      {user && (
        <>
          <Header />
          <div className="opacity-100" style={{ display: "flex" }}>
            <div>
              <NavSidebar/>
            </div>
            <div className="w-[100%] right-body">
           
              <Routes>
                <Route exact path="/dashboard" element={<DashboardPage />} />
                <Route exact path="/users" element={<UserAdminPage />} />
                <Route exact path="/company" element={<CompanyPage />} />
                <Route exact path="/profile" element={<ProfilePage />} />

                <Route
                  exact
                  path="/profile/deactivateAccount"
                  element={<DeactivateAccount />}
                />
                <Route exact path="/announcement" element={<Announcement />} />
                <Route exact path="/settings" element={<Settings />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route exact path="/appointment" element={<Appointment />} />
              </Routes>
            </div>
          </div>
        </>
      )}
   
      
    
      {!user &&(
        <div>
         <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route exact path="/signup" element={<Form />} />
            <Route exact path="/adminlogin" element={<AdminLogin />}/>
            <Route path="/userhome" element={<Home/>} />
          <Route path="/userappointment" element={<UserAppointment /> } />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </div>
      )}

      {!user && adminUser && (
        <>
          <Header />
          <div className="opacity-100" style={{ display: "flex" }}>
            <div>
              <Navbar />
            </div>
            <div className="w-[100%] right-body">
              <Routes>
                <Route path="/admindashboard" element={<DashboardS />} />
                <Route exact path="/users" element={<UserAdminPage />} />
                <Route exact path="/company" element={<CompanyPage />} />
                <Route exact path='/registration-details' element={<RegistrationDetails/>}/>
              </Routes>
            </div>
          </div>
        </>
     
      )}
     
     
    </div>
//     <div className="App">
//        {user && (
//       <>
//  <Header />
//  <div className="opacity-100" style={{ display: "flex" }}>
//   <div>
//   <DashboardS/>
//   </div>
   
//             <div className="w-[100%] right-body">
           
//               <Routes>
//                 <Route exact path="/dashboard" element={<DashboardPage />} />
//                 <Route exact path="/users" element={<UserAdminPage />} />
//                 <Route exact path="/company" element={<CompanyPage />} />
//                </Routes>
//             </div>
//             </div>
//             </>
//             )}
//     </div>

  );
}

export default App;
