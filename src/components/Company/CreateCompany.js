import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "./Company.css"
import "./Createcompany.css"
import { FloatingLabel, Form, Button } from 'react-bootstrap';

const CreateCompany = () => {
 
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Handle file selection
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    if (selectedFile) {
      // You can perform file upload logic here
      console.log('Uploading file:', selectedFile);
      // Reset selectedFile state after upload
      setSelectedFile(null);
    }
  };

  return (
    <div className='comp-create-main mb-4'>
       <div>
            <h2 className='text-[22px] text-[#5B76FC] mt-2 mb-2'>Create Company</h2>
        </div>

       
        <div className="form-main-div">
          <div className="form-div1">
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

            <FloatingLabel controlId="phoneNumber" label="Company Phone" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
              />
            </FloatingLabel>
            <Select 
            options={options} 
            value={value} 
            onChange={changeHandler} 
            placeholder='Select Country'
            className='country-all-select'
            styles={{
              control: (provided) => ({
                ...provided,
                fontSize: '14px',
                color: 'black',
              }),
              placeholder: (provided) => ({
                ...provided,
                fontSize: '14px',
                color: 'black', 
              }),
            }}
            />

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
            <FloatingLabel controlId="businessline" label="Line of Business" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Line of Business"
                name="businessline"
              />
            </FloatingLabel>
            <FloatingLabel controlId="fax" label="Fax" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Fax"
                name="fax"
              />
            </FloatingLabel>
            <FloatingLabel controlId="naicsCode" label="NAICS Code" className="mb-2">
              <Form.Control
                type="number"
                placeholder="NAICS Code"
                name="naicsCode"
                
              />
            </FloatingLabel>
            <FloatingLabel controlId="panEinNumber" label="PAN/EIN" className="mb-2">
              <Form.Control
                type="number"
                placeholder="PAN/EIN"
                name="panEinNumber"
              />
            </FloatingLabel>
            {/* <FloatingLabel controlId="fileInput" label="Attach PAN/EIN" className="mb-2">
        <Form.Control
          type="file"
          accept="image/*, .pdf"  // Specify the allowed file types
          onChange={handleFileChange}
        />
      </FloatingLabel> */}
      <div className='attach-div'>
      <label htmlFor="fileInput">
        Attach PAN/EIN
      </label>
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="fileInput"
          accept="image/*, .pdf"
          onChange={handleFileChange}
        />
       
      </div>
      
    </div>
           
          </div>
          </div>
          <div className="form-div2">
          <div>
          <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"16px"}}>Point of Contact</h3>
          <FloatingLabel controlId="name" label="Name" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
              />
            </FloatingLabel>
            <FloatingLabel controlId="designation" label="Designation" className="mb-2">
            <Form.Control
              type="text"
              placeholder="Designation"
              name="designation"
            />
          </FloatingLabel>
            <FloatingLabel controlId="email" label="Email" className="mb-2">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
              />
            </FloatingLabel>

            <FloatingLabel controlId="phoneNumber" label="Contact Mobile" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Contact Mobile"
                name="phoneNumber"
              />
            </FloatingLabel>
            <FloatingLabel controlId="phoneNumber" label="Phone (Work)" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Phone (Work)"
                name="phoneNumber"
              />
            </FloatingLabel>
          </div>
          <div>
          <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"16px"}}>Address</h3>
          <FloatingLabel controlId="address" label="Street Address 1" className="mb-2">
          <Form.Control
            type="text"
            placeholder="Address"
            name="address"
          />
        </FloatingLabel>
        <FloatingLabel controlId="address" label="Street Address 2" className="mb-2">
          <Form.Control
            type="text"
            placeholder="Address"
            name="address"
          />
        </FloatingLabel>
        <FloatingLabel controlId="city" label="City/Town/Village" className="mb-2">
        <Form.Control
          type="text"
          placeholder="City/Town/Village"
          name="city"
        />
        </FloatingLabel>
        <FloatingLabel controlId="state" label="State/Province" className="mb-2">
        <Form.Control
          type="text"
          placeholder="State/Province"
          name="state"
        />
      </FloatingLabel>
      <FloatingLabel controlId="postalCode" label="Postal Code" className="mb-2">
      <Form.Control
        type="text"
        placeholder="Postal Code"
        name="postalCode"
      />
    </FloatingLabel>
          </div>
          </div>
        </div>

        <div style={{ justifyContent: "right", textAlign:"right", marginTop: "0.5rem" }}>
          <button type="submit" className='create-comp-button'>
            Create Company
          </button>
        </div>
    
    </div>
  )
}

export default CreateCompany