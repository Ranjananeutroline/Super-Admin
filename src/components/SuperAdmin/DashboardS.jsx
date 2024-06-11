import React, { useState, useEffect, useRef } from 'react';
import Cards from '../Dashboard/Cards';
import tick from "../../assets/dash_tick.png";
import cross from "../../assets/dash_cross.png";
import checkmark from "../../assets/icons-checkmark.png";
import checked from "../../assets/icons-checked.svg";
import '../Dashboard/Dashboard.css';
import AdminCards from '../Dashboard/AdminCards';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Chart from './Chart';
import HorizontalBars from './HorizontalBars';
import ApexChart from './ApexChart';
import RegistrationDetails from './RegistrationDetails';
import {Modal} from 'react-responsive-modal';
import { NavLink } from 'react-router-dom';
import "./superAdminDashboard.css";

// Generate Order Data
function createData(id, date, name,location,phone, email, users, appointments) {
  return { id, date, name, location,phone, email, users, appointments };
}

const rows = [
  createData(
    0,
    '16/05/2024',
    'Skadden',
    'Tupelo, MS',
    '998833223719',
    'skadden@gmail.com',
    '75',
    '25%'
  ),
  createData(
    1,
    '16/05/2024',
    'Sidley Austin',
    'London, UK',
    '332237192574',
    'sidleyaustin@gmail.com',
    '35',
    '60%'
  ),
  createData(
    2,  '16/05/2024',
     'Bakers & Mckenzie', 
     'Boston, MA', 
     '200059191253', 
     'bakersmckenzie@gmail.com',
    '98',
    '46%'
     ),
  createData(
    3,
    '16/05/2024',
    'Davis Polk & Wardwell',
    'Gary, IN',
    '371925742000',
    'davispolkwardwell@gmail.com',
    '23',
    '55%'
  ),
  createData(
    4,
    '16/05/2024',
    'Hogan Lovells',
    'Long Branch, NJ',
    '257420005919',
    'hoganlovells@gmail.com',
    '77',
    '47%'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const DashboardS = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function formatDate(date) {
    const [day, month, year] = date.split('/');
    return `<span class="day-month">${day}/${month}</span><span class="year">/${year}</span>`;
  }

  return (
    <div className="w-full px-[50px] md:px-10 super-admin-dash">
      <h1 className="text-[27px] text-[#3F26A5] pb-3  dash-title">Dashboard</h1>
      <AdminCards />
    <div className='flex mt-4 justify-between bar-main bars-div'>
    {/* <Chart/> */}
<HorizontalBars/>
    <ApexChart/>

</div>
    
     
      <div className="px-7 py-3 mt-[1.5rem] w-full border rounded-[10px] h-auto bg-[#ffffff] recent-reg">
        
       <Title className='reg-title'>Recent Registrations</Title>
        <div className='inner-table'>
        <Table size="small">
        <TableHead className="bg-[#e3a3e354] h-[40px]">
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell className='name-cell'>Name</TableCell>
            <TableCell className="location">Location</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell className="email">Email</TableCell>
            <TableCell>Appointments</TableCell>
            <TableCell>Users</TableCell>
            
            {/* <TableCell align="right">Usage</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}  sx={{ height: '40px' }}>
               <TableCell style={{ fontSize: "13px" }} dangerouslySetInnerHTML={{ __html: formatDate(row.date) }} />
                <TableCell style={{ fontSize: "13px" }} className='name-cell'>{row.name}</TableCell>
              <TableCell style={{fontSize:"13px"}} className="location">{row.location}</TableCell>
              <TableCell style={{fontSize:"13px"}}>{row.phone}</TableCell>
              <TableCell style={{fontSize:"13px"}} className="email">{row.email}</TableCell>
              <TableCell  style={{fontSize:"13px"}}>{row.appointments}</TableCell>
              <TableCell style={{fontSize:"13px"}}>{row.users}</TableCell>
              
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
      
      <button onClick={openModal} className="mt-2 text-[15px] ml-4 font-sans text-[#8b58d1] hover:underline see-btn">
        See more registration
      </button>
      {/* <NavLink></NavLink> */}

      {/* Modal */}
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={closeModal}>
          <RegistrationDetails tableData={rows} onClose={closeModal} />
        </Modal>
      )} 
      </div>
    </div>
  )
}

export default DashboardS