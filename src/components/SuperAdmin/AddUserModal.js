import React, { useState } from "react";
import "./AdminSettings.css";
import Modal from 'react-bootstrap/Modal'; 
import { RxCross2 } from "react-icons/rx";
import { countries } from "countries-list";

const AddUserModal = ({ show, onHide }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [country, setCountry] = useState('');
    const [role, setRole] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleAddUser = () => {
        // Logic to handle adding user, you can send this data to your backend API
    };

    return(
        <>
        <div>
        <Modal show={show} onHide={onHide} dialogClassName="custom-modal-adduser">
        <div className="custom-modal-header">
            <h4>Add User</h4>
            <button type="button" className="custom-close-button" onClick={onHide}>
                <RxCross2 />
            </button>
        </div>
        <Modal.Body>
        <div>
        <form onSubmit={handleAddUser}>
            <div className="add-form-main">
            <div className="add-div">
                <div>
                    <label>Username</label>
                    <input
                     type="text"
                     value={username} onChange={(e) => setUsername(e.target.value)}
                     className="adduser-input"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="adduser-input" 
                    />
                    </div>
                <div>
                    <label>Password</label>
                    <input
                     type="password" 
                     value={password} onChange={(e) => setPassword(e.target.value)}
                     className="adduser-input"
                    />
                </div>
                {/* <div>
                    <label>Country</label>
                    <select 
                    value={country} onChange={(e) => setCountry(e.target.value)}
                    className="adduser-input"
                    >
                        <option value="">Select Country</option>
                        {Object.keys(countries).map((code) => (
                            <option key={code} value={code}>
                                {countries[code]}
                            </option>
                        ))}
                    </select>
                </div> */}
                <div>
                    <label>Role</label>
                    <input type="text" 
                    value={role} onChange={(e) => setRole(e.target.value)}
                    className="adduser-input" 
                    />
                </div>
            </div>

            <div className="add-div">
                <div>
                    <label>Full Name</label>
                    <input 
                    type="text" 
                    value={fullName} onChange={(e) => setFullName(e.target.value)}
                    className="adduser-input" 
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input 
                    type="tel" 
                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                    className="adduser-input" 
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input 
                    type="text" 
                    value={address} onChange={(e) => setAddress(e.target.value)}
                    className="adduser-input" 
                    />
                </div>
                <div>
                    <label>Start Date</label>
                    <input 
                    type="date" 
                    value={startDate} onChange={(e) => setStartDate(e.target.value)}
                    className="adduser-input" 
                    />
                </div>
                <div>
                    <label>End Date</label>
                    <input 
                    type="date" 
                    value={endDate} onChange={(e) => setEndDate(e.target.value)}
                    className="adduser-input" 
                    />
                </div>
            </div>
            </div>
           


            <div>
                <button type="submit">Add User</button>
            </div>       
                
        </form>
        </div>
        </Modal.Body>
        </Modal>
        </div>
        </>
    )
}
export default AddUserModal;