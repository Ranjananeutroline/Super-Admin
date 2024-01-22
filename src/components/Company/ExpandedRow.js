import React from 'react';
import { FiArrowUp } from "react-icons/fi";

const ExpandedRow = ({ comp, onCollapse }) => (
    <React.Fragment>
  <tr>
    <td colSpan="9" className='p-0'>
      {/* Detailed information */}
      <div className="main-detail">
        <div style={{display:"flex", justifyContent:"end", textAlign:"end"}}>
        <FiArrowUp style={{ color: 'grey', fontSize: '18px', cursor: 'pointer', textAlign:"right" }} onClick={onCollapse} />
        </div>
        <div>
        <h2 style={{ margin: '0', textAlign:"center" }}>Company Information</h2>
        </div>
          
           
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
   
  </tr>
 
  </React.Fragment>
);

export default ExpandedRow;