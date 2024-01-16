export const validateCompanyName = (companyName) => {
    if (!companyName.trim()) {
      return 'Company Name is required.';
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };
  
  export const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber.trim() || !/^\d{10}$/.test(phoneNumber)) {
      return 'Please enter a valid 10-digit phone number.';
    }
    return '';
  };
  export const validateWebsite = (website) => {
    if (!website.trim()) {
      return 'Website is required.';
    }
    // You can add more specific validation rules for the website if needed
    return '';
  };
  
  export const validateBusinessLine = (businessLine) => {
    if (!businessLine.trim()) {
      return 'Line of Business is required.';
    }
    // You can add more specific validation rules for the business line if needed
    return '';
  };
  
  export const validateFax = (fax) => {
    // Assuming fax is optional, so no specific validation is added here
    return '';
  };
  
  export const validateNaicsCode = (naicsCode) => {
    if (!naicsCode || isNaN(naicsCode) || naicsCode <= 0) {
      return 'Please enter a valid NAICS Code.';
    }
    return '';
  };
  
  export const validatePanEinNumber = (panEinNumber) => {
    if (!panEinNumber || isNaN(panEinNumber) || panEinNumber <= 0) {
      return 'Please enter a valid PAN/EIN number.';
    }
    return '';
  };
  // Additional validations for other fields...
  export const validateName = (name) => {
    if (!name.trim()) {
      return 'Name is required.';
    }
    return '';
  };
  
  export const validateDesignation = (designation) => {
    if (!designation.trim()) {
      return 'Designation is required.';
    }
    return '';
  };
  
  export const validateAddress = (address) => {
    if (!address.trim()) {
      return 'Address is required.';
    }
    return '';
  };
  
  export const validateCity = (city) => {
    if (!city.trim()) {
      return 'City/Town/Village is required.';
    }
    return '';
  };
  
  export const validateState = (state) => {
    if (!state.trim()) {
      return 'State/Province is required.';
    }
    return '';
  };
  
  export const validatePostalCode = (postalCode) => {
    if (!postalCode.trim()) {
      return 'Postal Code is required.';
    }
    return '';
  };