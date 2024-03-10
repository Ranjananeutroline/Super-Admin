import React, { useState, useEffect, useRef } from 'react';
import Cards from '../Dashboard/Cards';
import tick from "../../assets/dash_tick.png";
import cross from "../../assets/dash_cross.png";
import checkmark from "../../assets/icons-checkmark.png";
import checked from "../../assets/icons-checked.svg";
import '../Dashboard/Dashboard.css';
import AdminCards from '../Dashboard/AdminCards';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Chart from './Chart';
 

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
  return (
    <div className="w-full px-[50px] md:px-10 dashboard-main">
      <h1 className="text-[27px] text-[#3F26A5] pb-3 dash-title">Dashboard</h1>
      <AdminCards />
      <Chart/>
      <div className="px-7 py-3 mt-10 w-full border rounded-[10px] h-[300px] summ-div">
        {/* <div  className='mt-3'>
          <h1 className="text-[22px] my-2.5">Summary</h1>
          <div className=" flex">
            <div className="bg-white h-[45px] w-full rounded-[5px] flex items-center justify-between px-8 mb-2 shadow-sm inner-sum">
              <div className="first-inner">
                <h2 className="text-[#346AFF] text-[18px] w-[100px] font-[500] ">Yesterday</h2>
              </div>

              <div className="flex gap-3 ml-[80px] items-center appo-div">
                <img src={checked} className="w-[18px] h-[18px]" />
                <p>You have <span className="text-[#1C19CC]">7 appointments</span> to review.</p>
              </div>

              <div className="flex gap-4 w-[200px] justify-end pl-5 review">
                <p className="text-[#0A0879]">Review</p>
                <img src={cross} className="h-[27px] w-[27px]" />
              </div>

             
            </div>
          </div>
          <div className="flex">
            <div className="bg-white h-[45px] w-full rounded-[5px] flex items-center justify-between px-8 mb-2 shadow-sm  inner-sum">
              <div className="first-inner">
                <h2 className="text-[#346AFF] text-[18px] w-[100px] font-[500]">Today</h2>
              </div>

              <div className="flex gap-3 ml-[80px] items-center appo-div">
                <img src={checked} className="w-[18px] h-[18px]" />
                <p>You have <span className="text-[#1C19CC]">7 appointments</span> to review.</p>
              </div>

              <div className="flex gap-4 w-[200px] justify-end pl-5 review">
                <p className="text-[#0A0879]">Review</p>
                <img src={cross} className="h-[27px] w-[27px]" />
              </div>

             
            </div>
          </div>
          <div className=" flex">
            <div className="bg-white h-[45px] w-full rounded-[5px] flex items-center justify-between px-8 shadow-sm  inner-sum">
              <div className="first-inner">
                <h2 className="text-[#346AFF] text-[18px] w-[100px] font-[500]">Tomorrow</h2>
              </div>

              <div className="flex gap-3 ml-[80px] items-center appo-div">
                <img src={checked} className="w-[18px] h-[18px]" />
                <p>You have <span className="text-[#1C19CC]">7 appointments</span> to review.</p>
              </div>

              <div className="flex gap-4 w-[200px] justify-end pl-5 review">
                <p className="text-[#0A0879]">Review</p>
                <img src={cross} className="h-[27px] w-[27px]" />
              </div>

              
            </div>
          </div>
        </div> */}
<React.Fragment>
      <Title>Recent Registrations</Title>
      <Table size="small">
        <TableHead>
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
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
      </div>
    </div>
  )
}

export default DashboardS
