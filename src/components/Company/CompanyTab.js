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
     <div className='comp-tab-div'>
        <button
          onClick={() => handleTabClick('createCompany')}
          className={activeTab === 'createCompany' ? 'active-tab' : ''}
        >
          Create Company
        </button>
        <button
          onClick={() => handleTabClick('allCompanies')}
          className={activeTab === 'allCompanies' ? 'active-tab' : ''}
        >
          All Companies
        </button>
        <button
          onClick={() => handleTabClick('currentclients')}
          className={activeTab === 'currentclients' ? 'active-tab' : ''}
        >
          Current Clients
        </button>
      </div>

      {activeTab === 'createCompany' && <CreateCompany />} 
      {activeTab === 'allCompanies' && <Company />}
      {activeTab === 'currentclients' && <CurrentClients />}
    
    </>
  )
}

export default CompanyTab