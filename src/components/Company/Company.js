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
            <Table responsive="md" style={tableStyle} className='desktop-screen'>
        <thead>
          <tr  className='c-tr'>
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
                      <td className='t-data'>{index + 1}</td>
                      <td className='t-data'>{comp.name}</td>
                      <td className='t-data'>{comp.id}</td>
                      <td className='t-data'>{comp.acc}</td>
                      <td className='t-data'>{comp.pan}</td>
                      <td className='t-data'>{comp.status}</td>
                      <td className='t-data'>{comp.sdate}</td>
                      <td className='t-data'>{comp.edate}</td>
                      <td className='t-data'>
                        {expandedRows.includes(index) ? (
                          <FiArrowUp  className='d-svg' />
                        ) : (
                          <FiArrowDown  className='d-svg' />
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

      <div className='mble-view mt-2'>
  {companyData.length > 0 ? (
    companyData.map((comp, index) => (
      <div key={comp.id} className="mobile-row">

        {/* Render other mobile view columns here */}
        {expandedRows.includes(index) && (
          <div>
            <ExpandedRowContent comp={comp} sn={index + 1} onCollapse={() => handleRowClick(index)} />
          </div>
        )}

        {/* Render company details section */}
        {!expandedRows.includes(index) && (
          <div className='expand-mble'>
            <div className='flex justify-between'>
            <p className="font-medium text-[#864AF9] mble-title">{comp.name}</p>
            <p className="font-medium index-no">{index + 1}</p>
            </div>
            
            <p className="font-medium">{comp.id}</p>
            <p className="font-medium">{comp.acc}</p>
            <p className="font-medium mble-stat">{comp.status}</p>
            <div className='flex justify-between mt-3'>
              <div className='flex gap-[8px]'>
                <p className="font-medium start-p">{comp.sdate}</p>-
                <p className="font-medium end-p">{comp.edate}</p>
              </div>
              <div>
              <button onClick={() => handleRowClick(index)}><FiArrowUp className='m-svg'/></button>
              </div>
            </div>
          </div>
        )}
      </div>
    ))
  ) : (
    <div className="mobile-row">
      <p colSpan="9">
        <span className="flex gap-[5px]"><FaPlus style={{marginTop:"2px", color:"#5B76FC"}}/>Create New Company.</span>
      </p>
    </div>
  )}
</div>
            </div>
        </div>
    
  )
}

export default Company