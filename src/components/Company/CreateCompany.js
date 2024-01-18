import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "./Company.css"
import "./Createcompany.css"
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import {
  validateCompanyName,
  validateEmail,
  validatePhoneNumber,
  validateStartDate,
  validateEndDate,
  validateWebsite,
  validateBusinessLine,
  validateFax,
  validateNaicsCode,
  validatePanEinNumber,
  validateName,
  validateDesignation,
  validateAddress,
  validateCity,
  validateState,
  validatePostalCode,
} from './formValidation';
import { ToastContainer, toast } from "react-toastify";
import { addCompany } from './companyData';

const CreateCompany = () => {
  const [serialNumber, setSerialNumber] = useState(1);
  const [companyDetails, setCompanyDetails] = useState({
    someId: '',      // Replace with the actual ID property
    someAcc: '',     // Replace with the actual account number property
    somePan: '',     // Replace with the actual PAN property
    startDate: '',
    endDate: '',
    // Add other properties as needed
  });

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

  
  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [startDate, setStartDate] = useState('');
  const [startDateError, setStartDateError] = useState('');

  const [endDate, setEndDate] = useState('');
  const [endDateError, setEndDateError] = useState('');

  const [website, setWebsite] = useState('');
  const [websiteError, setWebsiteError] = useState('');

  const [businessLine, setBusinessLine] = useState('');
  const [businessLineError, setBusinessLineError] = useState('');

  const [fax, setFax] = useState('');
  const [FaxError, setFaxError] = useState('');

  const [naicsCode, setNaicsCode] = useState('');
  const [naicsCodeError, setNaicsCodeError] = useState('');

  const [panEinNumber, setPanEinNumber] = useState('');
  const [panEinNumberError, setPanEinNumberError] = useState('');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [designation, setDesignation] = useState('');
  const [designationError, setDesignationError] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState('');

  const [state, setState] = useState('');
  const [stateError, setStateError] = useState('');

  const [postalCode, setPostalCode] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

   
  
    // Validate all fields
    const companyNameValidation = validateCompanyName(companyName);
    const emailValidation = validateEmail(email);
    const phoneNumberValidation = validatePhoneNumber(phoneNumber);
    const startDateValidation = validateStartDate(startDate);
    const endDateValidation = validateEndDate(endDate, startDate);
    const websiteValidation = validateWebsite(website);
    const businessLineValidation = validateBusinessLine(businessLine);
    const faxValidation = validateFax(fax);
    const naicsCodeValidation = validateNaicsCode(naicsCode);
    const panEinNumberValidation = validatePanEinNumber(panEinNumber);
    const nameValidation = validateName(name);
    const designationValidation = validateDesignation(designation);
    const addressValidation = validateAddress(address);
    const cityValidation = validateCity(city);
    const stateValidation = validateState(state);
    const postalCodeValidation = validatePostalCode(postalCode);
  
    // Update state with validation results
    setCompanyNameError(companyNameValidation);
    setEmailError(emailValidation);
    setPhoneNumberError(phoneNumberValidation);
    setStartDateError(startDateValidation);
    setEndDateError(endDateValidation);
    setWebsiteError(websiteValidation);
    setBusinessLineError(businessLineValidation);
    setFaxError(faxValidation);
    setNaicsCodeError(naicsCodeValidation);
    setPanEinNumberError(panEinNumberValidation);
    setNameError(nameValidation);
    setDesignationError(designationValidation);
    setAddressError(addressValidation);
    setCityError(cityValidation);
    setStateError(stateValidation);
    setPostalCodeError(postalCodeValidation);
  
    // Check if any error exists
    if (
      companyNameValidation ||
      emailValidation ||
      phoneNumberValidation ||
      startDateValidation ||
      endDateValidation ||
      websiteValidation ||
      businessLineValidation ||
      faxValidation ||
      naicsCodeValidation ||
      panEinNumberValidation ||
      nameValidation ||
      designationValidation ||
      addressValidation ||
      cityValidation ||
      stateValidation ||
      postalCodeValidation
    ) {
      // If any error exists, do not submit the form
      return;
    }
  
    
    // Update the company data
    const newCompany = {
      sn: serialNumber,
      name: companyName,
      id: companyDetails.someId,  // Use the actual ID property
      acc: companyDetails.someAcc, // Use the actual account number property
      pan: event.target.panEinNumber.value, // Use the actual PAN property
      status: 'pending',
      sdate: event.target.startDate.value,  // Use the event.target to get the value of the input field
      edate: event.target.endDate.value,    // Use the event.target to get the value of the input field
      // Add other properties as needed
    };

    addCompany(newCompany);

      // Increment serial number for the next company
    setSerialNumber(serialNumber + 1);

    // Reset form fields or perform any other necessary actions
    setCompanyDetails({
      sn:'',
      id: '',
      name: '',
      acc: '',
      pan: '',
      sdate: '',
      edate: '',
      // Reset other properties as needed
    });

   
     // If all validations pass, show the success toast
     toast.success('Form submitted successfully', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className='comp-create-main mb-4'>
       <div>
            <h2 className='text-[22px] text-[#5B76FC] mt-2 mb-2'>Create Company</h2>
        </div>

        
        <div className="form-main-div" >
        <Form onSubmit={handleSubmit}>
          <div className="form-div1">
          <div>
            <FloatingLabel controlId="companyName" label="Company Name" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <span style={{ color: 'red', fontSize:"12px" }}>{companyNameError}</span>
            </FloatingLabel>

            <FloatingLabel controlId="email" label="Email" className="mb-2">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{emailError}</span>
            </FloatingLabel>

            <FloatingLabel controlId="phoneNumber" label="Company Phone" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{phoneNumberError}</span>
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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{startDateError}</span>
            </FloatingLabel>

            <FloatingLabel controlId="endDate" label="End Date" className="mb-2">
              <Form.Control
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{endDateError}</span>
            </FloatingLabel>
          </div>

          <div>
            <FloatingLabel controlId="website" label="Website" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{websiteError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="businessLine" label="Line of Business" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Line of Business"
                value={businessLine}
                onChange={(e) => setBusinessLine(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{businessLineError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="fax" label="Fax" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Fax"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
              />
              <span style={{ color: 'red', fontSize:"12px" }}>{FaxError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="naicsCode" label="NAICS Code" className="mb-2">
              <Form.Control
                type="number"
                placeholder="NAICS Code"
                value={naicsCode}
                onChange={(e) => setNaicsCode(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{naicsCodeError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="panEinNumber" label="PAN/EIN" className="mb-2">
              <Form.Control
                type="number"
                placeholder="PAN/EIN"
                value={panEinNumber}
                onChange={(e) => setPanEinNumber(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{panEinNumberError}</span>
            </FloatingLabel>
            
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{nameError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="designation" label="Designation" className="mb-2">
            <Form.Control
              type="text"
              placeholder="Designation"
              value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{designationError}</span>
          </FloatingLabel>
            <FloatingLabel controlId="email" label="Email" className="mb-2">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{emailError}</span>
            </FloatingLabel>

            <FloatingLabel controlId="phoneNumber" label="Contact Mobile" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Contact Mobile"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{phoneNumberError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="phoneNumber" label="Phone (Work)" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Phone (Work)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{phoneNumberError}</span>
            </FloatingLabel>
          </div>
          <div>
          <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"16px"}}>Address</h3>
          <FloatingLabel controlId="address" label="Street Address 1" className="mb-2">
          <Form.Control
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
           <span style={{ color: 'red', fontSize:"12px" }}>{addressError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="address" label="Street Address 2" className="mb-2">
          <Form.Control
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
           <span style={{ color: 'red', fontSize:"12px" }}>{addressError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="city" label="City/Town/Village" className="mb-2">
        <Form.Control
          type="text"
          placeholder="City/Town/Village"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
         <span style={{ color: 'red', fontSize:"12px" }}>{cityError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="state" label="State/Province" className="mb-2">
        <Form.Control
          type="text"
          placeholder="State/Province"
          value={state}
          onChange={(e) => setState(e.target.value)}
          />
            <span style={{ color: 'red', fontSize:"12px" }}>{stateError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="postalCode" label="Postal Code" className="mb-2">
        <Form.Control
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <span style={{ color: 'red', fontSize:"12px" }}>{postalCodeError}</span>
      </FloatingLabel>
          </div>
          </div>
          <div style={{ justifyContent: "right", textAlign:"right", marginTop: "0.5rem" }}>
          <button type="submit" className='create-comp-button'>
            Create Company
          </button>
        </div>
        </Form>
        </div>

       
    </div>
  )
}

export default CreateCompany