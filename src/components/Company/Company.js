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

  const [companyData, setCompanyData] = useState(getCompanyData());
  
  const [expandedRows, setExpandedRows] = useState([]);
  const [editedData, setEditedData] = useState(null);
  const [editingRowIndex, setEditingRowIndex] = useState(null);

  const tableStyle = {
    borderRadius: '8px',
    overflow: 'hidden', // Ensure the rounded corners are applied
  };

  const handleRowClick = (index) => {
    setEditingRowIndex(index);
    setExpandedRows((prevExpandedRows) => {
      const isRowExpanded = prevExpandedRows.includes(index);
  
      if (isRowExpanded) {
        return [];
      } else {
        return [index];
      }
    });
  };

  const handleEditSave = (newFormData, sn, rowIndex) => {
    const editedRowIndex = companyData.findIndex((comp) => comp.sn === sn);
  
    if (editedRowIndex !== -1 && editedRowIndex === rowIndex) {
      const updatedCompanyData = [...companyData];
      updatedCompanyData[editedRowIndex] = { ...companyData[editedRowIndex], ...newFormData };
  
      setEditedData({ ...editedData, ...newFormData }); // Update editedData state
      setExpandedRows([]); // Close the expanded row
      setEditingRowIndex(null); // Clear the editing row index
      setCompanyData(updatedCompanyData); // Update the state with the edited data
    }
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
                     comp={comp}
                     onCollapse={() => handleRowClick(index)}
                     onEditSave={(newFormData) => handleEditSave(newFormData, comp.sn, index, comp.id)}
                     isEditing={editingRowIndex === index}
                   />
                    ) : (
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