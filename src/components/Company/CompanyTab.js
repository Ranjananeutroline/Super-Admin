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
          className={`border-r w-full  p-3 btn-active ${
            activeTab === "createCompany"
              ? "border-gray-300  bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
              : ""
          } md:h-[50px]  md:w-[145px] md:p-0 text-[14px]`}
          style={
            activeTab === "createCompany"
              ? {
                  borderWidth: "0.5px",
                  color: "#346AFF",
                  boxShadow: "0px 2px 5px 0px #D2F3FA",
                  fontSize:"14px",
                  
                }
              : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
          }
        >
          Create Company
        </button>
        <button
          onClick={() => handleTabClick('allCompanies')}
          className={`border-r w-full  p-3 btn-active ${
            activeTab === "allCompanies"
              ? "border-gray-300  bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
              : ""
          } md:h-[50px]  md:w-[145px] md:p-0 text-[14px]`}
          style={
            activeTab === "allCompanies"
              ? {
                  borderWidth: "0.5px",
                  color: "#346AFF",
                  boxShadow: "0px 2px 5px 0px #D2F3FA",
                  fontSize:"14px",
                  
                }
              : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
          }
        >
          All Companies
        </button>
        <button
          onClick={() => handleTabClick('currentclients')}
          className={`border-r w-full  p-3 btn-active ${
            activeTab === "currentclients"
              ? "border-gray-300  bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-blue-200"
              : ""
          } md:h-[50px] md:w-[145px] md:p-0 text-[14px]`}
          style={
            activeTab === "currentclients"
              ? {
                  borderWidth: "0.5px",
                  color: "#346AFF",
                  boxShadow: "0px 2px 5px 0px #D2F3FA",
                  fontSize:"14px",
                  
                }
              : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
          }
        >
          Current Clients
        </button>
      </div>

      {activeTab === 'createCompany' && <CreateCompany />} 
      {activeTab === 'allCompanies' && <Company />}
      {activeTab === 'currentclients' && <CurrentClients />}
    </div>
    </>
  )
}

export default CompanyTab