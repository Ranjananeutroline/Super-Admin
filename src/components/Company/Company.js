import React, { useState } from 'react'
import "./Company.css"
import Table from 'react-bootstrap/Table';
import { getCompanyData } from './companyData';
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import ExpandedRowContent  from "./ExpandedRowContent";
import { FaPlus } from "react-icons/fa6";


const Company = () => {

  const companyData = getCompanyData();
  
  const [expandedRows, setExpandedRows] = useState([]);

  const tableStyle = {
    borderRadius: '8px',
    overflow: 'hidden', // Ensure the rounded corners are applied
  };

  const handleRowClick = (index) => {
    setExpandedRows((prevExpandedRows) => {
      const isRowExpanded = prevExpandedRows.includes(index);

      if (isRowExpanded) {
        // If the clicked row is already expanded, collapse all rows
        return [];
      } else {
        // If the clicked row is collapsed, expand only the clicked row
        return [index];
      }
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
            <th className='font-medium heading-td'>SN</th>
            <th className='font-medium heading-td'>Company Name</th>
            <th className='font-medium heading-td'>Company ID</th>
            <th className='font-medium heading-td'>Account Number</th>
            <th className='font-medium heading-td'>EIN/PAN Number</th>
            <th className='font-medium heading-td'>Status</th>
            <th className='font-medium heading-td'>Start Date</th>
            <th className='font-medium heading-td'>End Date</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
        {companyData.length > 0 ? (
                companyData.map((comp, index) => (
                  <React.Fragment key={comp.id}>
                {expandedRows.includes(index) ? (
                  <ExpandedRowContent comp={comp} sn={index + 1} onCollapse={() => handleRowClick(index)} />
                ) : (
                  <>
                    <tr
                      style={{
                        textAlign: 'center',
                        fontSize: '15px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleRowClick(index)}
                    >
                      <td>{index + 1}</td>
                      <td>{comp.name}</td>
                      <td>{comp.id}</td>
                      <td>{comp.acc}</td>
                      <td>{comp.pan}</td>
                      <td>{comp.status}</td>
                      <td>{comp.sdate}</td>
                      <td>{comp.edate}</td>
                      <td>
                        {expandedRows.includes(index) ? (
                          <FiArrowUp style={{ color: 'grey', fontSize: '18px' }} />
                        ) : (
                          <FiArrowDown style={{ color: 'grey', fontSize: '18px' }} />
                        )}
                      </td>
                    </tr>
                    {comp.isEditing && (
                      <tr>
                        <td colSpan="9">
                          <ExpandedRowContent comp={comp} sn={index + 1} onCollapse={() => handleRowClick(index)} />
                        </td>
                      </tr>
                    )}
                  </>
                )}
              </React.Fragment>
                   
              ))
               ) : (
                <tr style={{ textAlign: "left", fontSize: "15px" }}>
                  <td colSpan="9">
                  <p className="flex gap-[5px]"><FaPlus style={{marginTop:"2px", color:"#5B76FC"}}/>Create New Company.</p>
                  </td>
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