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
  
  export const validateCompanyPhone = (companyPhone) => {
    if (!companyPhone.trim() || !/^\d{10}$/.test(companyPhone)) {
      return 'Please enter a valid 10-digit company phone number.';
    }
    return '';
  };


  export const validateCountry = (country) => {
  if (!country) {
    return 'Country selection is required.';
  }
  // Add more specific validation rules for the country if needed
  return '';
};
  
  export const validateStartDate = (startDate) => {
    if (!startDate) {
      return 'Start Date is required.';
    }
    // You can add more specific validation rules for the Start Date if needed
    return '';
  };
  
  export const validateEndDate = (endDate, startDate) => {
    if (!endDate) {
      return 'End Date is required.';
    }
    if (startDate && new Date(endDate) < new Date(startDate)) {
      return 'End Date must be equal to or later than Start Date.';
    }
    // You can add more specific validation rules for the End Date if needed
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
  
  export const validateContactMobile = (contactMobile) => {
    if (!contactMobile.trim() || !/^\d{10}$/.test(contactMobile)) {
      return 'Please enter a valid 10-digit contact mobile number.';
    }
    return '';
  };
  
  export const validatePhoneWork = (phoneWork) => {
    if (!phoneWork.trim() || !/^\d{10}$/.test(phoneWork)) {
      return 'Please enter a valid 10-digit phone (work) number.';
    }
    return '';
  };
  
  export const validateAddress = (streetAddress1, streetAddress2) => {
    if (!streetAddress1.trim() && !streetAddress2.trim()) {
      return 'At least one street address is required.';
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

  // Add this function to your formValidation.js file or wherever you keep your validation functions
export const validateFileSize = (file, maxSizeInBytes) => {
  if (!file) {
    return 'File attachment is required.';
  }

  const fileSizeInBytes = file.size;
  const maxSizeInMegabytes = maxSizeInBytes / (1024 * 1024);

  if (fileSizeInBytes > maxSizeInBytes) {
    return `File size must be less than ${maxSizeInMegabytes} MB.`;
  }

  return '';
};