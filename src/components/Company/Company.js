import React from 'react'
import "./Company.css"
import Table from 'react-bootstrap/Table';
import { getCompanyData } from './companyData';
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";


const Company = () => {

  const companyData = getCompanyData();
  
  const tableStyle = {
    borderRadius: '8px',
    overflow: 'hidden', // Ensure the rounded corners are applied
  };


  return (
    <div className='company-second'>
        <div>
            <h2 className='text-[22px] text-[#5B76FC] mt-2'>All Companies</h2>

            <div className="mt-2">
            <Table responsive="md" style={tableStyle}>
        <thead>
          <tr  style={{ backgroundColor: "#d6e0fa", height:"45px", fontSize:"15px", textAlign:"center" }}>
            <th>SN</th>
            <th>Company Name</th>
            <th>Company ID</th>
            <th>Account Number</th>
            <th>EIN/PAN Number</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
              {companyData.map((comp) => (
                <tr key={comp.id} style={{  textAlign:"center", fontSize:"15px" }}>
                  <td>{comp.sn}</td>
                  <td>{comp.name}</td>
                  <td>{comp.id}</td>
                  <td>{comp.acc}</td>
                  <td>{comp.pan}</td>
                  <td>{comp.status}</td>
                  <td>{comp.sdate}</td>
                  <td>{comp.edate}</td>
                  <td>
                    <div className='flex gap-[8px] justify-center'>
                      <button><LiaEditSolid style={{fontSize:"20px",color:"#3468C0"}}/></button>
                      <button><RiDeleteBinLine style={{fontSize:"18px",color:"#D24545"}}/></button>
                    </div>
                  </td> 
                </tr>
              ))}
            </tbody>
      </Table>
            </div>
        </div>
    </div>
  )
}

export default Company