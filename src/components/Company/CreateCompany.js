import React, { useState, useMemo, useEffect, useRef } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "./Company.css"
import "./Createcompany.css"
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import {
  validateCompanyName,
  validateEmail,
  validateCompanyPhone,
  validateCountry,
  validateStartDate,
  validateEndDate,
  validateWebsite,
  validateBusinessLine,
  validateFax,
  validateNaicsCode,
  validatePanEinNumber,
  validateName,
  validateDesignation,
  validateContactMobile,
  validatePhoneWork,
  validateAddress,
  validateCity,
  validateState,
  validatePostalCode,
  validateFileSize,
} from './formValidation';
import { ToastContainer, toast } from "react-toastify";
import { addCompany } from './companyData';

const CreateCompany = ({ formDataForEdit, onEditSave, onCancelEdit, isEditing, className}) => {
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

  const handleChange = (fieldName, value) => {
    // Update the state for the specified field
    switch (fieldName) {
      case 'companyName':
        setCompanyName(value);
        setCompanyNameError('');
        break;
      case 'email':
        setEmail(value);
        setEmailError('');
        break;
          case 'companyPhone':
            // Allow only numeric input
            const numericValue = value.replace(/\D/g, '');
            setCompanyPhone(numericValue);
            setCompanyPhoneError('');
            break;
          case 'selectedCountry':
            setSelectedCountry(value);
            setSelectedCountryError('');
            break;
          case 'startDate':
            setStartDate(value);
            setStartDateError('');
            break;
          case 'endDate':
            setEndDate(value);
            setEndDateError('');
            break;
            case 'website':
              setWebsite(value);
              setWebsiteError('');
              break;
            case 'businessLine':
              setBusinessLine(value);
              setBusinessLineError('');
              break;
            case 'fax':
              // Allow only numeric input
              const numericFaxValue = value.replace(/\D/g, '');
              setFax(numericFaxValue);
              setFaxError('');
              break;
            case 'naicsCode':
              // Allow only numeric input
              const numericNaicsValue = value.replace(/\D/g, '');
              setNaicsCode(numericNaicsValue);
              setNaicsCodeError('');
              break;
            case 'panEinNumber':
              // Allow only numeric input
              const numericPanEinValue = value.replace(/\D/g, '');
              setPanEinNumber(numericPanEinValue);
              setPanEinNumberError('');
              break;
              case 'name':
                setName(value);
                setNameError('');
                break;
              case 'designation':
              setDesignation(value);
              setDesignationError('');
              break; 
              case 'contactEmail':
                setContactEmail(value);
                setContactEmailError('');
                break;
                case 'contactMobile':
                  setContactMobile(value);
                  setContactMobileError('');
                  break;
                  case 'phoneWork': // Make sure this case only handles phoneWork
      setPhoneWork(value);
      setPhoneWorkError('');
      break;
    case 'streetAddress1': // Make sure this case only handles streetAddress1
      setStreetAddress1(value);
      setAddressError('');
      break;            
                      case 'streetAddress2':
                        setStreetAddress2(value);
                        setAddressError('');
                        break;
                        case 'city':
                          setCity(value);
                          setCityError('');
                          break;
                          case 'state':
                            setState(value);
                            setStateError('');
                            break;
                            case 'postalCode':
                              setPostalCode(value);
                              setPostalCodeError('');
                              break; 
    }     
  };

  const [selectedFile, setSelectedFile] = useState(null);

  
  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [companyPhone, setCompanyPhone] = useState('');
  const [companyPhoneError, setCompanyPhoneError] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryError, setSelectedCountryError] = useState('');

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

  const [contactEmail, setContactEmail] = useState('');
  const [contactEmailError, setContactEmailError] = useState('');

  const [contactMobile, setContactMobile] = useState('');
  const [contactMobileError, setContactMobileError] = useState('');

  const [phoneWork, setPhoneWork] = useState('');
  const [phoneWorkError, setPhoneWorkError] = useState('');

  const [streetAddress1, setStreetAddress1] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [addressError, setAddressError] = useState('');

  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState('');

  const [state, setState] = useState('');
  const [stateError, setStateError] = useState('');

  const [postalCode, setPostalCode] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');

  const fileInputRef = useRef(null);

  const [fileError, setFileError] = useState('');
  const [fileInfo, setFileInfo] = useState({
    name: '',    // File name
    // size: 0,     // File size
    // type: '',    // File type
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileSizeValidation = validateFileSize(file, 5 * 1024 * 1024); // Example: 5 MB
      setFileError(fileSizeValidation);

      setSelectedFile(file);

      // Update file information for display
      setFileInfo({
        name: file.name,
        // size: file.size,
        // type: file.type,
      });
    } else {
      // Clear file error and information if no file is selected
      setFileError('');
      setFileInfo({
        name: '',
        // size: 0,
        // type: '',
      });
    }
  };

  useEffect(() => {
    // Populate form fields with data when in edit mode
    if (formDataForEdit) {
      setCompanyName(formDataForEdit.companyName || '');
      setEmail(formDataForEdit.email || '');
      setCompanyPhone(formDataForEdit.companyPhone || '');

      // Handle selectedCountry separately
      const countryName = formDataForEdit.country || ''; // Adjust the property name if needed
      const selectedCountryData = {
        label: countryName,
        value: countryName,
      };
      setSelectedCountry(selectedCountryData);

      setStartDate(formDataForEdit.startDate || '');
      setEndDate(formDataForEdit.endDate || '');
      setWebsite(formDataForEdit.website || '');
      setBusinessLine(formDataForEdit.businessLine || '');
      setFax(formDataForEdit.fax || '');
      setNaicsCode(formDataForEdit.naicsCode || '');
      setPanEinNumber(formDataForEdit.panEinNumber || '');
      setName(formDataForEdit.name || '');
      setDesignation(formDataForEdit.designation || '');
      setContactEmail(formDataForEdit.contactEmail || '');
      setContactMobile(formDataForEdit.contactMobile || '');
      setPhoneWork(formDataForEdit.phoneWork || '');
      setStreetAddress1(formDataForEdit.streetAddress1 || '');
      setStreetAddress2(formDataForEdit.streetAddress2 || '');
      setCity(formDataForEdit.city || '');
      setState(formDataForEdit.state || ''); 
      setPostalCode(formDataForEdit.postalCode || ''); 

       // Handle file separately
      if (formDataForEdit.fileData) {
        const { name, size, type } = formDataForEdit.fileData;
        setFileInfo({ name, size, type });
      }
     
      // ... (populate other fields accordingly)
    }
  }, [formDataForEdit]);

  const resetForm = () => {
    setCompanyName('');
    setEmail('');
    setCompanyPhone('');
    setSelectedCountry(null);
    setStartDate('');
    setEndDate('');
    setWebsite('');
    setBusinessLine('');
    setFax('');
    setNaicsCode('');
    setPanEinNumber('');
    setName('');
    setDesignation('');
    setContactEmail('');
    setContactMobile('');
    setPhoneWork('');
    setStreetAddress1('');
    setStreetAddress2('');
    setCity('');
    setState('');
    setPostalCode('');
    setSelectedFile(null);
    setFileInfo({
      name: '',
    });
    setFileError('');
    // Reset file input
  if (fileInputRef.current) {
    fileInputRef.current.value = '';
  }
    // Add more state variables if needed and reset their values
    // ...
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
  
    // Validate all fields
    const companyNameValidation = validateCompanyName(companyName);
    const emailValidation = validateEmail(email);
    const companyPhoneValidation =  validateCompanyPhone(companyPhone);
    const countryValidation = validateCountry(selectedCountry);
    const startDateValidation = validateStartDate(startDate);
    const endDateValidation = validateEndDate(endDate, startDate);
    const websiteValidation = validateWebsite(website);
    const businessLineValidation = validateBusinessLine(businessLine);
    const faxValidation = validateFax(fax);
    const naicsCodeValidation = validateNaicsCode(naicsCode);
    const panEinNumberValidation = validatePanEinNumber(panEinNumber);
    const nameValidation = validateName(name);
    const designationValidation = validateDesignation(designation);
    const contactEmailValidation = validateEmail(contactEmail);
    const contactMobileValidation = validateContactMobile(contactMobile);
    const phoneWorkValidation = validatePhoneWork(phoneWork);
    const addressValidation = validateAddress(streetAddress1, streetAddress2);
    const cityValidation = validateCity(city);
    const stateValidation = validateState(state);
    const postalCodeValidation = validatePostalCode(postalCode);
    const fileSizeValidation = validateFileSize(selectedFile, 5 * 1024 * 1024); // Example: 5 MB
    
  
    // Update state with validation results
    setCompanyNameError(companyNameValidation);
    setEmailError(emailValidation);
    setCompanyPhoneError(companyPhoneValidation);
    setSelectedCountryError(countryValidation);
    setStartDateError(startDateValidation);
    setEndDateError(endDateValidation);
    setWebsiteError(websiteValidation);
    setBusinessLineError(businessLineValidation);
    setFaxError(faxValidation);
    setNaicsCodeError(naicsCodeValidation);
    setPanEinNumberError(panEinNumberValidation);
    setNameError(nameValidation);
    setDesignationError(designationValidation);
    setContactEmailError(contactEmailValidation);
    setContactMobileError(contactMobileValidation);
    setPhoneWorkError(phoneWorkValidation);
    setAddressError(addressValidation);
    setCityError(cityValidation);
    setStateError(stateValidation);
    setPostalCodeError(postalCodeValidation);
    setFileError(fileSizeValidation);

    // Check if any error exists
    if (
      companyNameValidation ||
      emailValidation ||
      companyPhoneValidation ||
      countryValidation ||
      startDateValidation ||
      endDateValidation ||
      websiteValidation ||
      businessLineValidation ||
      faxValidation ||
      naicsCodeValidation ||
      panEinNumberValidation ||
      nameValidation ||
      designationValidation ||
      contactEmailValidation ||
      contactMobileValidation ||
      phoneWorkValidation ||
      addressValidation ||
      cityValidation ||
      stateValidation ||
      postalCodeValidation ||
      fileSizeValidation
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
      pan: panEinNumber, // Use the actual PAN property
      status: 'pending',
      sdate: startDate,   // Use the event.target to get the value of the input field
      edate: endDate,   // Use the event.target to get the value of the input field
      // Add other properties as needed
    
    formData: {  // Pass the form data as a separate property
      companyName,
      email,
      companyPhone,
      startDate,
      endDate,
      website,
      businessLine,
      fax,
      naicsCode,
      panEinNumber,
      name,
      designation,
      contactEmail,
      contactMobile,
      phoneWork,
      streetAddress1,
      streetAddress2,
      city,
      state,
      postalCode,
      country: selectedCountry.label, // Include the selected country label if needed
      fileData: selectedFile,
    },
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

    // If all validations pass, show the appropriate toast message
      const toastMessage = isEditing
      ? 'Edited Form is Submitted'
      : 'Form submitted successfully';

    toast.success(toastMessage, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // Reset the form after successful submission
    resetForm();
    };

  const handleCancelEdit = () => {
    onCancelEdit(); // Call the onCancelEdit callback to exit edit mode without saving
  };


  return (
    <div className={`comp-create-main mb-4 ${className}`}>
       
       {!isEditing && (
        <div className='form-title'>
          <h2 className='text-[22px] text-[#BC7FCD] mt-2 mb-2'>
            Create Company
          </h2>
          {/* Add your message here */}
          <p className="text-gray-500 mb-3">Welcome to the company creation form. Please fill out the following details to create your company.</p>
        </div>
      )}

      {isEditing && (
        <div className='form-title'>
          <h2 className='text-[22px] text-[#BC7FCD] mt-2 mb-2'>
            Edit Company Form
          </h2>
        </div>
      )}
        
        <div className="form-main-div" >
        <Form onSubmit={handleSubmit}>
          <div className="form-div1">
          <div className='div1-left'>
            <FloatingLabel controlId="companyName" label="Company Name" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
              />
              <span style={{ color: 'red', fontSize:"12px" }}>{companyNameError}</span>
            </FloatingLabel>

            <FloatingLabel controlId="email" label="Email" className="mb-2">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              <span style={{ color: 'red', fontSize: '12px' }}>{emailError}</span>
            </FloatingLabel>

            <FloatingLabel controlId="phoneNumber" label="Company Phone" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                value={companyPhone}
                onChange={(e) => handleChange('companyPhone', e.target.value)}
                onKeyPress={(e) => {
                  // Allow only numeric key presses
                  const isValidKey = /^\d$/.test(e.key);
                  if (!isValidKey) {
                    e.preventDefault();
                  }
                }}
              />
              <span style={{ color: 'red', fontSize: '12px' }}>{companyPhoneError}</span>
            </FloatingLabel>
            <Select 
            options={options}
            value={selectedCountry} // Make sure selectedCountry is an object with value and label properties
            onChange={(value) => handleChange('selectedCountry', value)}
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
            <span style={{ color: 'red', fontSize: '12px' }}>{selectedCountryError}</span>
           
            <FloatingLabel controlId="startDate" label="Start Date" className="mb-2">
              <Form.Control
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{startDateError}</span>
            </FloatingLabel>

            <FloatingLabel controlId="endDate" label="End Date" className="mb-2">
              <Form.Control
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{endDateError}</span>
            </FloatingLabel>
          </div>

          <div className='div1-right'>
            <FloatingLabel controlId="website" label="Website" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Website"
                value={website}
                onChange={(e) => handleChange('website', e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{websiteError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="businessLine" label="Line of Business" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Line of Business"
                value={businessLine}
                onChange={(e) => handleChange('businessLine', e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{businessLineError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="fax" label="Fax" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Fax"
                value={fax}
                onChange={(e) => handleChange('fax', e.target.value)}
                onKeyPress={(e) => {
                  // Allow only numeric key presses
                  const isValidKey = /^\d$/.test(e.key);
                  if (!isValidKey) {
                    e.preventDefault();
                  }
                }}
              />
              <span style={{ color: 'red', fontSize:"12px" }}>{FaxError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="naicsCode" label="NAICS Code" className="mb-2">
              <Form.Control
                type="number"
                placeholder="NAICS Code"
                value={naicsCode}
                onChange={(e) => handleChange('naicsCode', e.target.value)}
                onKeyPress={(e) => {
                  // Allow only numeric key presses
                  const isValidKey = /^\d$/.test(e.key);
                  if (!isValidKey) {
                    e.preventDefault();
                  }
                }}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{naicsCodeError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="panEinNumber" label="PAN/EIN" className="mb-2">
            <Form.Control
              type="number"
              placeholder="PAN/EIN"
              value={panEinNumber}
              onChange={(e) => handleChange('panEinNumber', e.target.value)}
              onKeyPress={(e) => {
                // Allow only numeric key presses
                const isValidKey = /^\d$/.test(e.key);
                if (!isValidKey) {
                  e.preventDefault();
                }
              }}
            />
            <span style={{ color: 'red', fontSize: '12px' }}>{panEinNumberError}</span>
            </FloatingLabel>
            
            <div className='attach-div'>
              <label htmlFor='fileInput'>Attach PAN/EIN</label>
              {isEditing && fileInfo.name && (
                <div>
                  <span style={{ fontSize: '13px', color: 'grey' }}>Selected File: {fileInfo.name}</span>
                </div>
              )}
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='fileInput'
                  accept='image/*, .pdf'
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
              </div>
              <span style={{ color: 'red', fontSize: '12px' }}>{fileError}</span>
            </div>
           
          </div>
          </div>
          <div className="form-div2">
          <div className='div2-left'>
          <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"18px"}}>Point of Contact</h3>
          <FloatingLabel controlId="name" label="Name" className="mb-2">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{nameError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="designation" label="Designation" className="mb-2">
            <Form.Control
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => handleChange('designation', e.target.value)}
              />
               <span style={{ color: 'red', fontSize:"12px" }}>{designationError}</span>
          </FloatingLabel>
            <FloatingLabel controlId="contactEmail" label="Email" className="mb-2">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={contactEmail}
                onChange={(e) => handleChange('contactEmail', e.target.value)}
              />
              <span style={{ color: 'red', fontSize: '12px' }}>{contactEmailError}</span>
            </FloatingLabel>

            <FloatingLabel controlId="contactMobile" label="Contact Mobile" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Contact Mobile"
                value={contactMobile}
                onChange={(e) => handleChange('contactMobile', e.target.value)}
                onKeyPress={(e) => {
                  // Allow only numeric key presses
                  const isValidKey = /^\d$/.test(e.key);
                  if (!isValidKey) {
                    e.preventDefault();
                  }
                }}
                
              />
              <span style={{ color: 'red', fontSize: '12px' }}>{contactMobileError}</span>
            </FloatingLabel>
            <FloatingLabel controlId="phoneWork" label="Phone (Work)" className="mb-2">
              <Form.Control
                type="tel"
                placeholder="Phone (Work)"
                value={phoneWork}
                onChange={(e) => handleChange('phoneWork', e.target.value)}
                onKeyPress={(e) => {
                  // Allow only numeric key presses
                  const isValidKey = /^\d$/.test(e.key);
                  if (!isValidKey) {
                    e.preventDefault();
                  }
                }}
              />
              <span style={{ color: 'red', fontSize: '12px' }}>{phoneWorkError}</span>
            </FloatingLabel>
          </div>
          <div className="div2-right">
          <h3 style={{color:"#525CEB", marginBottom:"0.5rem", fontSize:"18px"}}>Address</h3>
          <FloatingLabel controlId="streetAddress1" label="Street Address 1" className="mb-2">
          <Form.Control
            type="text"
            placeholder="Address 1"
            value={streetAddress1}
            onChange={(e) => handleChange('streetAddress1', e.target.value)}
          />
          <span style={{ color: 'red', fontSize: '12px' }}>{addressError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="streetAddress2" label="Street Address 2" className="mb-2">
          <Form.Control
            type="text"
            placeholder="Address 2"
            value={streetAddress2}
            onChange={(e) => handleChange('streetAddress2', e.target.value)}
          />
          <span style={{ color: 'red', fontSize: '12px' }}>{addressError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="city" label="City/Town/Village" className="mb-2">
        <Form.Control
          type="text"
          placeholder="City/Town/Village"
          value={city}
          onChange={(e) => handleChange('city', e.target.value)}
        />
         <span style={{ color: 'red', fontSize:"12px" }}>{cityError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="state" label="State/Province" className="mb-2">
        <Form.Control
          type="text"
          placeholder="State/Province"
          value={state}
          onChange={(e) => handleChange('state', e.target.value)}
          />
            <span style={{ color: 'red', fontSize:"12px" }}>{stateError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="postalCode" label="Postal Code" className="mb-2">
        <Form.Control
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => handleChange('postalCode', e.target.value)}
          onKeyPress={(e) => {
            // Allow only numeric key presses
            const isValidKey = /^\d$/.test(e.key);
            if (!isValidKey) {
              e.preventDefault();
            }
          }}
        />
        <span style={{ color: 'red', fontSize:"12px" }}>{postalCodeError}</span>
      </FloatingLabel>
          </div>
          </div>
          <div style={{ justifyContent: "right", textAlign:"right", marginTop: "0.5rem" }} className='submit-div'>
            {isEditing ? (
            // Render Save and Cancel buttons when editing
            <>
            <div className='edit-btn-div'>
              <button type="button"
              style={{background:"#836FFF", padding:"5px 10px", marginRight:"0.5rem",
               borderRadius:"5px", color:"white",
               boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
               onClick={handleSubmit}>
                Save
                </button>
              <button type="button" 
               style={{border:"1px solid #836FFF", padding:"5px 10px",
                borderRadius:"5px", color:"#836FFF",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
               onClick={handleCancelEdit}>
                Cancel
                </button>
            </div>
              
            </>
          ) : (
            // Render Create Company button when not editing
            <button type="submit" className='create-comp-button'>
              Create Company
            </button>
          )}
        </div>
        </Form>
        </div>

       
    </div>
  )
}

export default CreateCompany