import React, { useState } from "react";
import "./AdminSettings.css";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AddUserModal from './AddUserModal';

const AccountDetails = () => {
     const [openSection, setOpenSection] = useState(null);
     const [showAddUserModal, setShowAddUserModal] = useState(false);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return(
        <>
            <div className="Acc-main">
                <div className="section" onClick={() => toggleSection('userManagement')}>
                    <h3>
                        User Management{' '}
                        <span className="arrow-icon">
                            {openSection === 'userManagement' ? (
                                <FaChevronUp /> // Up arrow when the section is open
                            ) : (
                                <FaChevronDown /> // Down arrow when the section is closed
                            )}
                        </span>
                    </h3>
                    {openSection === 'userManagement' && (
                        <div className="section-content">
                            <div className="flex justify-between">
                            <ul>
                                <li>Please fill out the following information to create a new user account.</li>
                            </ul>
                            <div className="adduser-div">
                                <button className="adduser-btn" onClick={() => setShowAddUserModal(true)}>
                                    Add User
                                </button>
                            </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="section" onClick={() => toggleSection('accountInformation')}>
                <h3>
                    Account Information{' '}
                        <span className="arrow-icon">
                            {openSection === 'accountInformation' ? (
                                <FaChevronUp /> // Up arrow when the section is open
                            ) : (
                                <FaChevronDown /> // Down arrow when the section is closed
                            )}
                        </span>
                    </h3>
                    {openSection === 'accountInformation' && (
                        <div className="section-content">
                           <p>this is account section</p>
                        </div>
                    )}
                </div>
                <div className="section" onClick={() => toggleSection('supportResources')}>
                <h3>
                    Support and Help Resources{' '}
                        <span className="arrow-icon">
                            {openSection === 'supportResources' ? (
                                <FaChevronUp /> // Up arrow when the section is open
                            ) : (
                                <FaChevronDown /> // Down arrow when the section is closed
                            )}
                        </span>
                </h3>
                {openSection === 'supportResources' && (
                        <div className="section-content">
                           <p>this is support center</p>
                        </div>
                    )}
                </div>
            </div>

            <AddUserModal show={showAddUserModal} onHide={() => setShowAddUserModal(false)} />
        </>
    );
};

export default AccountDetails;
