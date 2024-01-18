import React, { useState } from 'react'
import "./Company.css"
import Table from 'react-bootstrap/Table';
import { getCompanyData } from './companyData';
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbMessage2Search } from "react-icons/tb";


const Company = () => {

  const companyData = getCompanyData();
  const [expandedRows, setExpandedRows] = useState([]);
  const tableStyle = {
    borderRadius: '8px',
    overflow: 'hidden', // Ensure the rounded corners are applied
  };

  const toggleRow = (rowIndex) => {
    setExpandedRows((prevRows) => {
      const isRowExpanded = prevRows.includes(rowIndex);
      return isRowExpanded
        ? prevRows.filter((row) => row !== rowIndex)
        : [...prevRows, rowIndex];
    });
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
        {companyData.length > 0 ? (
                companyData.map((comp, index) => (
                  <React.Fragment key={comp.id}>
                    <tr style={{ textAlign: "center", fontSize: "15px" }}>
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
                          <button onClick={() => toggleRow(index)}>
                            <TbMessage2Search style={{ fontSize: "20px", color: "green" }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {expandedRows.includes(index) && (
                      <tr>
                        <td colSpan="9">
                          <div>
                            <h2 style={{ textAlign: "Center",color:"blue" }}>Company Information</h2>
                           
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
              ))
               ) : (
                <tr style={{ textAlign: "left", fontSize: "15px" }}>
                  <td colSpan="9" style={{paddingLeft:"15px"}}>No Companies have been created.</td>
                </tr>
              )}
            </tbody>
      </Table>
            </div>
        </div>
    </div>
  )
}

export default Company