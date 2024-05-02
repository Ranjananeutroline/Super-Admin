let companyData = [
    // { 
    //   sn: 1, 
    //   name: 'Neutroline Pvt.Ltd',
    //   id: "0111",
    //   acc:"22222222",
    //   pan:"5555",
    //   status: 'pending', 
    //   sdate: '01-02-1111', 
    //   edate: '01-02-7777',  
    // },
    // { 
    //   sn: 2, 
    //   name: 'Neutrosys.Inc',
    //   id: "0112",
    //   acc:"22222333",
    //   pan:"4444",
    //   status: 'active', 
    //   sdate: '01-02-1111', 
    //   edate: '01-02-7777',  
    // },
    // Add more company data as needed
  ];
  
  export const getCompanyData = () => companyData;
  
  export const addCompany = (newCompany) => {
    companyData = [...companyData, newCompany];
  };