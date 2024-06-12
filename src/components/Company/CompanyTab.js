import React, { useState } from 'react'
import "./Company.css"
import Company from "./Company";
import CreateCompany from "./CreateCompany";
import CurrentClients from "./CurrentClients";


const CompanyTab = () => {
    const [activeTab, setActiveTab] = useState('createCompany');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
 

  return (
    <>
    <div>
     <div className='comp-tab-div'>
        <button
          onClick={() => handleTabClick('createCompany')}
          className={`border-r w-full p-3  btn-active ${
            activeTab === "createCompany"
              ? "border-gray-300 bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-purple-200"
              : ""
          } md:h-[50px] md:w-[145px] md:p-0 text-[14px] text-center`}
          style={{
            borderWidth: "0.2px",
            color: activeTab === "createCompany" ? "rgb(186 0 237)" : "", // Adjust color if needed
            boxShadow: activeTab === "createCompany" ? "rgb(125 0 125 / 11%) 0px 2px 5px 0px" : "rgb(125 0 125 / 11%) 0px 2px 5px 0px", // Adjust boxShadow for both states
            fontSize: "14px",
          }}
          
        >
          Create Company
        </button>
        <button
          onClick={() => handleTabClick('currentclients')}
          className={`border-r w-full p-3 btn-active ${
            activeTab === "currentclients"
              ? "border-gray-300 bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-purple-200"
              : ""
          } md:h-[50px] md:w-[145px] md:p-0 text-[14px] text-center`}
          style={{
            borderWidth: "0.2px",
            color: activeTab === "currentclients" ? "rgb(186 0 237)" : "", // Adjust color if needed
            boxShadow: activeTab === "currentclients" ? "rgb(125 0 125 / 11%) 0px 2px 5px 0px" : "rgb(125 0 125 / 11%) 0px 2px 5px 0px", // Adjust boxShadow for both states
            fontSize: "14px",
          }}
          
        >
          Active Clients
        </button>
        <button
          onClick={() => handleTabClick('allCompanies')}
          className={`border-r w-full p-3 btn-active ${
            activeTab === "allCompanies"
              ? "border-gray-300 bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-purple-200"
              : ""
          } md:h-[50px] md:w-[145px] md:p-0 text-[14px] text-center`}
          style={{
            borderWidth: "0.2px",
            color: activeTab === "allCompanies" ? "rgb(186 0 237)" : "", // Adjust color if needed
            boxShadow: activeTab === "allCompanies" ? "rgb(125 0 125 / 11%) 0px 2px 5px 0px" : "rgb(125 0 125 / 11%) 0px 2px 5px 0px", // Adjust boxShadow for both states
            fontSize: "14px",
          }}
         
        >
          All Companies
        </button>
      </div>

      {activeTab === 'createCompany' && <CreateCompany />} 
      {activeTab === 'currentclients' && <CurrentClients />}
      {activeTab === 'allCompanies' && <Company />}
      
    </div>
    </>
  )
}

export default CompanyTab