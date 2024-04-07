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
import Modal from 'react-responsive-modal';
import { NavLink } from 'react-router-dom';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Skadden',
    'Tupelo, MS',
    '998833223719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Sidley Austin',
    'London, UK',
    '332237192574',
    866.99,
  ),
  createData(
    2, '16 Mar, 2019',
     'Bakers & Mckenzie', 
     'Boston, MA', 
     '200059191253', 
     100.81
     ),
  createData(
    3,
    '16 Mar, 2019',
    'Davis Polk & Wardwell',
    'Gary, IN',
    '371925742000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Hogan Lovells',
    'Long Branch, NJ',
    '257420005919',
    212.79,
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
  return (
    <div className="w-full px-[50px] md:px-10 dashboard-main">
      <h1 className="text-[27px] text-[#3F26A5] pb-2 mt-[-10px] dash-title">Dashboard</h1>
      <AdminCards />
    <div className='flex mt-[15px] justify-between'>
    {/* <Chart/> */}
<HorizontalBars/>
    <ApexChart/>

</div>
    
     
      <div className="px-7 py-3 mt-[20px] w-full border rounded-[10px] h-auto bg-[#ffffff] shadow-lg">
      <Title>Recent Registrations</Title>
      <Table size="small">
        <TableHead sx={{background:'#D9D9D9', height:'40px'}}>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell align="right">Usage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}  sx={{ height: '40px' }}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <button onClick={openModal} className="mt-[10px] font-[8px] text-black">
        See more orders
      </button> */}
      <NavLink></NavLink>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <RegistrationDetails />
        </Modal>
      )}
      </div>
    </div>
  )
}

export default DashboardS