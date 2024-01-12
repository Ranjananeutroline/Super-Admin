import React, { useState } from 'react'
import "./Company.css"
import "./Createcompany.css"
import { Form, FloatingLabel } from 'react-bootstrap';

const CreateCompany = () => {
   


  return (
    <div className='comp-create-main'>
       <div>
            <h2 className='text-[22px] text-[#5B76FC] mt-2 mb-2'>Create Company</h2>
        </div>

       
        <div className="form-main-div">
          <div>
            <FloatingLabel controlId="companyName" label="Company Name" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Company Name"
                name="companyName"
              />
            </FloatingLabel>

            <FloatingLabel controlId="email" label="Email" className="mb-2">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
              />
            </FloatingLabel>

            <FloatingLabel controlId="address" label="Address" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
              />
            </FloatingLabel>

            <FloatingLabel controlId="startDate" label="Start Date" className="mb-2">
              <Form.Control
                type="date"
                placeholder="Start Date"
                name="startDate"
              />
            </FloatingLabel>

            <FloatingLabel controlId="endDate" label="End Date" className="mb-2">
              <Form.Control
                type="date"
                placeholder="End Date"
                name="endDate"
              />
            </FloatingLabel>
          </div>

          <div>
            <FloatingLabel controlId="website" label="Website" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Website"
                name="website"
              />
            </FloatingLabel>
            <FloatingLabel controlId="phoneNumber" label="Company Phone" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
              />
            </FloatingLabel>
            <FloatingLabel controlId="businessline" label="Line of Business" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Line of Business"
                name="businessline"
              />
            </FloatingLabel>
            <FloatingLabel controlId="country" label="Select Country" className="mb-2">
              {/* Add your country select component or use Form.Control with as="select" */}
              {/* Example: */}
              <Form.Control
                as="select"
                name="country"
              >
                <option value="">Select Country</option>
                <option value="us">United States</option>
                {/* Add more countries as needed */}
              </Form.Control>
            </FloatingLabel>

            <FloatingLabel controlId="panEinNumber" label="PAN/EIN Number" className="mb-2">
              <Form.Control
                type="text"
                placeholder="PAN/EIN Number"
                name="panEinNumber"
                
              />
            </FloatingLabel>

           
          </div>
        </div>

        <div style={{ justifyContent: "right", textAlign:"right", marginTop: "1.5rem" }}>
          <button type="submit" className='create-comp-button'>
            Create Company
          </button>
        </div>
    
    </div>
  )
}

export default CreateCompany