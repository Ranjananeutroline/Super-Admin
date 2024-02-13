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
  const [editedData, setEditedData] = useState(null);

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

  const handleEditSave = (newFormData) => {
    // Update the editedData state with the new form data
    setEditedData(newFormData);

    // Clear the expandedRows state to close the expanded row
    setExpandedRows([]);

    // You may also want to perform any additional actions here, such as saving the data to an API or updating the state in a more permanent way
  };

  return (
    <div className='company-second'>
        <div>
            <h2 className='text-[22px] text-[#5B76FC] mt-2'>All Companies</h2>

            <div className="mt-2">
            <Table responsive="md" style={tableStyle}>
        <thead>
          <tr  style={{ backgroundColor: "#d6e0fa", height:"45px", fontSize:"15px", textAlign:"center" }}>
            <th className='font-medium'>SN</th>
            <th className='font-medium'>Company Name</th>
            <th className='font-medium'>Company ID</th>
            <th className='font-medium'>Account Number</th>
            <th className='font-medium'>EIN/PAN Number</th>
            <th className='font-medium'>Status</th>
            <th className='font-medium'>Start Date</th>
            <th className='font-medium'>End Date</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
        {companyData.length > 0 ? (
                companyData.map((comp, index) => (
                  <React.Fragment key={comp.id}>
                  {expandedRows.includes(index) ? (
                     <ExpandedRowContent
                     comp={editedData !== null ? { ...comp, formData: editedData } : comp}
                     sn={index + 1}
                     onCollapse={() => handleRowClick(index)}
                     onEditSave={handleEditSave}
                   />
                  ) : (
                    <tr
                        key={comp.id}
                        style={{
                          textAlign: 'center',
                          fontSize: '15px',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleRowClick(index)}
                      >
                      <td>{index + 1}</td>
                      <td>{editedData !== null ? editedData.name : comp.name}</td>
                  <td>{editedData !== null ? editedData.id : comp.id}</td>
                  <td>{editedData !== null ? editedData.acc : comp.acc}</td>
                  <td>{editedData !== null ? editedData.pan : comp.pan}</td>
                  <td>{editedData !== null ? editedData.status : comp.status}</td>
                  <td>{editedData !== null ? editedData.sdate : comp.sdate}</td>
                  <td>{editedData !== null ? editedData.edate : comp.edate}</td>
                      <td>
                          {expandedRows.includes(index) ? (
                            <FiArrowUp style={{ color: 'grey', fontSize: '18px' }} />
                          ) : (
                            <FiArrowDown style={{ color: 'grey', fontSize: '18px' }} />
                          )}
                        </td>
                    </tr>
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