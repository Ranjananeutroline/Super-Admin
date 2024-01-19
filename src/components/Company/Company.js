import React, { useState } from 'react'
import "./Company.css"
import Table from 'react-bootstrap/Table';
import { getCompanyData } from './companyData';
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";

const Company = () => {

  const companyData = getCompanyData();
  
  const [expandedRows, setExpandedRows] = useState(Array(companyData.length).fill(false));

  const handleViewClick = (index) => {
    setExpandedRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[index] = !newRows[index]; // Toggle the expanded state for the clicked row
      return newRows;
    });
  };
  
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
            <th></th> 
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
                      <td colSpan="1">
                        <div className='flex gap-[8px] justify-center'>
                        <button
                          onClick={() => handleViewClick(index)}
                          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                        >
                          {expandedRows[index] ? (
                            <FiArrowUp style={{ color: 'grey', fontSize: '18px' }} />
                          ) : (
                            <FiArrowDown style={{ color: 'grey', fontSize: '18px' }} />
                          )}
                        </button>
                        </div>
                      </td>
                    </tr>

                    {/* Additional row with detailed information */}
                    {expandedRows[index] && (
                      <tr>
                        <td colSpan="8">
                          {/* Detailed information */}
                          <div className="main-detail">
                            <h2>Company Information</h2>
                          <div className="upper">
                            <div>
                              <p><strong>Company Name:</strong> {comp.formData?.companyName}</p>
                              <p><strong>Email:</strong> {comp.formData?.email}</p>
                              <p><strong>Phone Number:</strong> {comp.formData?.phoneNumber}</p>
                              <p><strong>Country:</strong> {comp.formData?.country}</p>
                              <p><strong>Start Date:</strong> {comp.formData?.startDate}</p>
                              <p><strong>End Date:</strong> {comp.formData?.endDate}</p>
                            </div>
                            <div>
                              <p><strong>Website:</strong> {comp.formData?.website}</p>
                              <p><strong>Line of Business:</strong> {comp.formData?.businessLine}</p>
                              <p><strong>Fax:</strong> {comp.formData?.fax}</p>
                              <p><strong>NAICS Code:</strong> {comp.formData?.naicsCode}</p>
                              <p><strong>PAN/EIN Number:</strong> {comp.formData?.panEinNumber}</p>
                            </div>
                            </div>
                            <div className='lower'>
                            <div>
                            <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"16px"}}>Point of Contact</h3>
                              <p><strong>Name:</strong> {comp.formData?.name}</p>
                              <p><strong>Designation:</strong> {comp.formData?.designation}</p>
                              <p><strong>Address:</strong> {comp.formData?.address}</p>
                            </div>
                            <div>
                            <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"16px"}}>Address</h3>
                              <p><strong>City/Town/Village:</strong> {comp.formData?.city}</p>
                              <p><strong>State/Province:</strong> {comp.formData?.state}</p>
                              <p><strong>Postal Code:</strong> {comp.formData?.postalCode}</p>
                            </div>
                            </div>

                            </div>
                         
                        </td>
                        {/* Empty cell for spacing */}
                        <td colSpan="1"></td>
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