import React from 'react';
import { FiArrowUp } from "react-icons/fi";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";

const ExpandedRow = ({ comp, onCollapse }) => (
    <React.Fragment>
  <tr>
    <td colSpan="9" className='p-0'>
      {/* Detailed information */}
      <div className="main-detail">
        <div style={{display:"flex", justifyContent:"end", textAlign:"end"}}>
        <FiArrowUp style={{ color: 'grey', fontSize: '18px', cursor: 'pointer', textAlign:"right" }} onClick={onCollapse} />
        </div>
        <div className="inner-detail">
        <h2 style={{ margin: '0', textAlign:"left" }}>Company Information</h2>
        {/* <div className='btn-div'>
              <button><LiaEditSolid/></button>
              <button><RiDeleteBinLine/></button>
            </div> */}
          <div style={{ display:"flex", justifyContent:"space-between"}}>
            <div style={{width:"90%"}}>
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
                </div>
                </div>
                <div className='lower'>
                <div>
                <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"16px"}}>Point of Contact</h3>
                <p><strong>Name:</strong> {comp.formData?.name}</p>
                <p><strong>Designation:</strong> {comp.formData?.designation}</p>
                <p><strong>Email:</strong> {comp.formData?.contactEmail}</p>
                <p><strong>Contact Mobile:</strong> {comp.formData?.contactMobile}</p>
                <p><strong>Phone (Work):</strong> {comp.formData?.phoneWork}</p>
                </div>
                <div>
                <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"16px"}}>Address</h3>
                <p><strong>Street Address 1:</strong> {comp.formData?.streetAddress1}</p>
                <p><strong>Street Address 2:</strong> {comp.formData?.streetAddress2}</p>
                <p><strong>City/Town/Village:</strong> {comp.formData?.city}</p>
                <p><strong>State/Province:</strong> {comp.formData?.state}</p>
                <p><strong>Postal Code:</strong> {comp.formData?.postalCode}</p>
                </div>
                </div>
            </div>
            <div className='btn-div'>
              <button><LiaEditSolid style={{ color: 'blue', fontSize: '18px' }}/></button>
              <button><RiDeleteBinLine style={{ color: '#D04848', fontSize: '18px' }}/></button>
            </div>

            </div>
          </div> 
       
        </div>
    </td>
   
  </tr>
 
  </React.Fragment>
);

export default ExpandedRow;