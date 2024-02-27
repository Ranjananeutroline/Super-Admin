import React, { useState }  from 'react';
import { FiArrowUp } from "react-icons/fi";
import { LiaEditSolid } from "react-icons/lia";
import CreateCompany from './CreateCompany';
import "./Company.css";

const ExpandedRowContent = ({ comp, sn, onCollapse, onUpdateData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (updatedData) => {
    // Handle save logic, e.g., update data or perform API request
    setIsEditing(false);
    setEditedData(updatedData);
    // Call the onUpdateData callback to update data in the parent component
    onUpdateData(sn - 1, updatedData);
  };

  const handleCancelClick = () => {
    // Handle cancel logic, e.g., reset form fields or discard changes
    setIsEditing(false);
    // Call the onCollapse callback to collapse the row
    onCollapse();
  };


  return (
  
    <React.Fragment>
  <tr>
    <td colSpan="9" className='p-0 main-row' >
      {isEditing ? (
          // Render the CreateCompany component when editing is enabled
          <CreateCompany
              formDataForEdit={comp.formData}
              onEditSave={handleSaveClick}
              onCancelEdit={handleCancelClick}
              isEditing={isEditing}
              className="custom-expanded-row-content"
            />
        ) : (
          // Render the regular content when not editing
      <div className="main-detail">
       
          <div className="title-row">
            <div style={{width:"100%"}}>
            <h2 style={{ margin: '0', textAlign:"center" }}>{comp.formData?.companyName}</h2>
            <p style={{ marginTop: '3px', textAlign:"center" }}> {comp.formData?.email}</p>
            </div>
          <FiArrowUp style={{ color: 'grey', fontSize: '18px', cursor: 'pointer', textAlign:"right" }} onClick={onCollapse} />
        </div>
        
        <div>
          <h4 className='second-title'>Company Information</h4>
        </div>
      
          <div style={{ display:"flex"}}>
            <div className='above-up'>

              <div className="upper">
                <div>
                <p><strong>Company Name:</strong> {comp.formData?.companyName}</p>
                <p><strong>Email:</strong> {comp.formData?.email}</p>
                <p><strong>Phone Number:</strong> {comp.formData?.companyPhone}</p>
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
                  {comp.formData?.fileData ? (
                    // Display file data or download link as needed
                    <p>
                      <strong>Document/File:</strong> 
                      <strong style={{color:"gray"}}>{comp.formData.fileData.name}</strong>
                    </p>
                  ) : (
                    <p>No file attached</p>
                  )}
                </div>
                </div>

                <div className='lower'>
                <div>
                <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"16px", paddingLeft:"0.5rem"}}>Point of Contact</h3>
                <p><strong>Name:</strong> {comp.formData?.name}</p>
                <p><strong>Designation:</strong> {comp.formData?.designation}</p>
                <p><strong>Email:</strong> {comp.formData?.contactEmail}</p>
                <p><strong>Contact Mobile:</strong> {comp.formData?.contactMobile}</p>
                <p><strong>Phone (Work):</strong> {comp.formData?.phoneWork}</p>
                </div>
                <div>
                <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"16px", paddingLeft:"0.5rem"}}>Address</h3>
                <p><strong>Street Address 1:</strong> {comp.formData?.streetAddress1}</p>
                <p><strong>Street Address 2:</strong> {comp.formData?.streetAddress2}</p>
                <p><strong>City/Town/Village:</strong> {comp.formData?.city}</p>
                <p><strong>State/Province:</strong> {comp.formData?.state}</p>
                <p><strong>Postal Code:</strong> {comp.formData?.postalCode}</p>
                </div>
                </div>
            </div>
            <div className='btn-div'>
              <button title='Edit' onClick={handleEditClick} className='btn-edit'
              >Edit<LiaEditSolid style={{ color: '#3081D0', fontSize: '18px' }}/>
              </button>
            </div>
           

            </div>
            </div>
            )}
        </td>

      </tr>

    
    </React.Fragment>
  );
};



export default ExpandedRowContent;