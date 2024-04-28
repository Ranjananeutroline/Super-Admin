import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { RxCross2 } from "react-icons/rx"; 
import 'react-toastify/dist/ReactToastify.css';
import "./AdminSettings.css";

const AdminSettings = ({ show, onHide }) => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [editField, setEditField] = useState('');
  const [editedValue, setEditedValue] = useState('');
  const [name, setName] = useState('Pooja Tiwari');
  const [email, setEmail] = useState('admin@example.com');
  const [currentPassword, setCurrentPassword] = useState('poojapooja');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [newUserData, setNewUserData] = useState({
    username: '',
    email: '',
    role: 'User', // Default role is 'User'
  });
  const [users, setUsers] = useState([]); // Array to store user data
  const [admins, setAdmins] = useState([]); // Array to store admin data

  const openUserModal = () => {
    setShowUserModal(true);
    setNewUserData({ ...newUserData, role: 'User' });
  };

  const openAdminModal = () => {
    setShowUserModal(true);
    setNewUserData({ ...newUserData, role: 'Admin' });
  };

  const closeUserModal = () => {
    setShowUserModal(false);
    setPasswordError('');
    setNewUserData({ username: '', email: '', role: 'User' });
  };

  const openModal = (field) => {
     setEditField(field);
    setEditedValue(field === 'name' ? name : email);
    setShowModal(true);
    setCurrentPassword(''); // Clear current password field
    setCurrentPasswordError(''); // Clear current password error state
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentPassword('');
    setPasswordError('');
    setNewPassword('');
    setConfirmPassword('');
    setCurrentPasswordError('');
    setConfirmPasswordError('');
     setNameError('');
    setEmailError('');
  };

  const handleSaveName = () => {
    if (editedValue.trim() === '') {
      setNameError('Please enter a name');
      return;
    }
  
    setName(editedValue); // Update name with edited value
    setEditedValue(''); // Clear edited value after saving
    closeModal();
  };
  
  const handleSaveEmail = () => {
    // Validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(editedValue)) {
      setEmailError('Please enter a valid email address');
      return;
    }
  
    setEmail(editedValue); // Update email with edited value
    setEditedValue(''); // Clear edited value after saving
    closeModal();
  };

  const handleSavePassword = () => {
    setCurrentPasswordError('');
    setPasswordError('');
    setConfirmPasswordError('');

    let hasError = false;

    if (currentPassword.trim() === '') {
      setCurrentPasswordError('Please enter your current password');
      hasError = true;
    }

    if (newPassword.trim() === '') {
      setPasswordError('Please enter a new password');
      hasError = true;
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Please confirm your new password');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    if (currentPassword !== 'poojapooja') {
      setCurrentPasswordError('Current password is incorrect');
      return;
    }

    if (newPassword !== confirmPassword) {
      setConfirmPasswordError('New password and confirm password do not match');
      return;
    }

    setCurrentPassword(newPassword);

    toast.success("Password change successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // Reset the form and close the modal
    setNewPassword('');
    setConfirmPassword('');
    closeModal();
  };

  
  // Function to clear individual error message
  const handleInputChange = (field) => {
    if (field === 'currentPassword') {
      setCurrentPasswordError('');
    } else if (field === 'newPassword' || field === 'confirmPassword') {
      setConfirmPasswordError('');
    } else if (field === 'name') {
      setNameError('');
    } else if (field === 'email') {
      setEmailError('');
    }
  };

  const handleAddUser = () => {
    setUsers([...users, { ...newUserData, role: 'User' }]);
    closeUserModal();
  };

  const handleAddAdmin = () => {
    setAdmins([...admins, { ...newUserData, role: 'Admin' }]);
    closeUserModal();
  };

  const handleNewUserInputChange = (e) => {
    setNewUserData({ ...newUserData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full px-[50px] md:px-10 dashboard-main">
      <h1 className="text-[27px] text-[#3F26A5] pb-2 ">Settings</h1>

      <div className="flex gap-4 mt-2 mb-3 ">
        <h2
          className={`cursor-pointer font-sans text-[18px] ${
            activeTab === 'Profile' ? 'underline' : ''
            } ${activeTab === 'Profile' ? 'text-[#BC7FCD]' : 'text-gray-600 hover:text-[#BC7FCD]'}`}
          onClick={() => setActiveTab('Profile')}
        >
          Profile Settings
        </h2>
        <h2
          className={`cursor-pointer font-sans text-[18px] ${
            activeTab === 'Account' ? 'underline' : ''
            } ${activeTab === 'Account' ? 'text-[#BC7FCD]' : 'text-gray-600 hover:text-[#BC7FCD]'}`}
          onClick={() => setActiveTab('Account')}
        >
          Account Settings
        </h2>
      </div>

      {activeTab === 'Profile' && (
        <div className="profileSettings">
          {/* User details */}
          <div className="mb-3">
            <label className="block text-[15px] font-medium text-gray-700 py-[5px]">Name</label>
            <div className="flex justify-between pro-div">
              <div className="relative w-full">
                <input
                  type="text"
                  value={name}
                  className='pro-input'
                  readOnly
                />
                <button
                  onClick={() => openModal('name')}
                  className="pro-edit-btn"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-[15px] font-medium text-gray-700 py-[5px]">Email</label>
            <div className="flex justify-between pro-div">
              <div className="relative w-full">
                <input
                  type="text"
                  value={email}
                  className='pro-input'
                  readOnly
                />
                <button
                  onClick={() => openModal('email')}
                  className="pro-edit-btn"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <button
              onClick={() => openModal('password')}
              className="change-pswd-btn"
            >
              Change Password
            </button>
          </div>
        </div>
      )}

      {activeTab === 'Account' && (
        <div className="pb-4 md:pb-20 accountSettings flex">
          {/* User Settings */}
          <div className="w-1/2 pr-4">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">User Settings</h3>
              <button
                onClick={openUserModal}
                className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none"
              >
                Add User
              </button>
              <div className="mt-4 bg-gradient-to-b from-[#f1eaf8] to-[#ffffff] px-3 py-2 mb-2 border border-[a43ab4]">
                {users.map((user, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2 mb-2">
                    <p className="text-lg font-semibold">{user.username}</p>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Vertical Line */}
          <div className="w-px bg-gray-300"></div>
          {/* Admin Settings */}
          <div className="w-1/2 pl-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Admin Settings</h3>
              <button
                onClick={openAdminModal}
                className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none"
              >
                Add Admin
              </button>
              <div className="mt-4 bg-gradient-to-b from-[#f1eaf8] to-[#ffffff] px-3 py-2 mb-2 border border-[a43ab4]">
                {admins.map((admin, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2 mb-2">
                    <p className="text-lg font-semibold">{admin.username}</p>
                    <p className="text-gray-600">{admin.email}</p>
                    <p className="text-gray-600">{admin.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Modal show={showModal} onHide={closeModal}  dialogClassName="custom-modal">
         <div className="custom-modal-header">
                    <h5 className="modal-title">
                      {editField === 'name'
                        ? 'Edit Name'
                        : editField === 'email'
                        ? 'Edit Email'
                        : 'Change Password'}
                    </h5>
                    <button type="button" className="custom-close-button" onClick={closeModal}>
                        <RxCross2 />
                    </button>
                </div>
        <Modal.Body className='pswd-body'>
         {editField === 'name' && (
            <Form>
            <div className='form-pswd-div'>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editedValue}
                  onChange={(e) => { setEditedValue(e.target.value); handleInputChange('name'); }}
                  placeholder="Enter your name"
                  className='pswd-input'
                  required
                />
                {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
              </Form.Group>
              </div>
            </Form>
          )}
          {editField === 'email' && (
            <Form>
              <div className='form-pswd-div'>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={editedValue}
                  onChange={(e) => { setEditedValue(e.target.value); handleInputChange('email'); }}
                  placeholder="Enter your email"
                  className='pswd-input'
                  required
                />
                {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
              </Form.Group>
              </div>
            </Form>
          )}
          {editField === 'password' && (
            <Form>
              <div className='form-pswd-div'>
              <Form.Group controlId="formCurrentPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  value={currentPassword}
                  onChange={(e) => { setCurrentPassword(e.target.value); handleInputChange('currentPassword'); }}
                  placeholder="Enter current password"
                  className='pswd-input'
                  required
                />
                {currentPasswordError && <p className="text-red-500 text-sm">{currentPasswordError}</p>}
              </Form.Group>
              </div>
              
              <div className='form-pswd-div'>
              <Form.Group controlId="formNewPassword form-pswd-div">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  onChange={(e) => { setNewPassword(e.target.value); handleInputChange('newPassword'); }}
                  placeholder="Enter new password"
                  className='pswd-input'
                  required
                />
              </Form.Group>
              </div>

               <div className='form-pswd-div'>
              <Form.Group controlId="formConfirmPassword form-pswd-div">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); handleInputChange('confirmPassword'); }}
                  placeholder="Confirm new password"
                  className='pswd-input'
                  required
                />
                {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
              </Form.Group>
              </div>
            </Form>
          )}
        </Modal.Body>
         <Modal.Footer className='pswd-footer'>
        {editField === 'password' ? (
          <>
          <button className='pswd-btn' onClick={handleSavePassword}>
            Save
          </button>
          <button className='pswd-btn2' onClick={closeModal}>
            Close
          </button>
          </>
          ) : (
          <>
          <button className='pswd-btn' onClick={editField === 'name' ? handleSaveName : handleSaveEmail}>
            Save
          </button>
          <button className='pswd-btn2' onClick={closeModal}>
            Close
          </button>
          </>
        )}
        </Modal.Footer>
      </Modal>

      <Modal show={showUserModal} onHide={closeUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>{newUserData.role === 'Admin' ? 'Add Admin' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={newUserData.username}
                onChange={handleNewUserInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={newUserData.email}
                onChange={handleNewUserInputChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='pswd-btn' onClick={newUserData.role === 'Admin' ? handleAddAdmin : handleAddUser}>
            {newUserData.role === 'Admin' ? 'Add Admin' : 'Add User'}
          </button>
          <button className='pswd-btn2' onClick={closeUserModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminSettings;
