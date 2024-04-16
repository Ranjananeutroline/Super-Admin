import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { RiCloseLine } from 'react-icons/ri';
import "./superAdminDashboard.css";

const AdminSettings = ({ show, onHide }) => {
  const [activeTab, setActiveTab] = useState('Account');
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationData, setNotificationData] = useState({
    title: '',
    body: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditIndex(null); // Reset edit index
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNotificationData({ ...notificationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit existing notification
      const updatedNotifications = [...notifications];
      updatedNotifications[editIndex] = notificationData;
      setNotifications(updatedNotifications);
    } else {
      // Add new notification to the list
      setNotifications([...notifications, notificationData]);
    }
    // Clear form data
    setNotificationData({ title: '', body: '' });
    // Close modal
    closeModal();
  };

  const handleEdit = (index) => {
    // Set data for editing
    setNotificationData(notifications[index]);
    setEditIndex(index);
    // Open modal for editing
    openModal();
  };

  const handleDelete = (index) => {
    // Remove notification from the list
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="w-full px-[50px] md:px-10 dashboard-main">
      <h1 className="text-[27px] text-[#3F26A5] pb-2 ">Settings</h1>

      <div className="flex gap-4 mt-2 mb-3 ">
        <h2
          className={`cursor-pointer font-sans text-[18px] ${activeTab === 'Account' ? 'underline' : ''} ${
            activeTab === 'Account' ? 'text-blue-800 ' : 'text-gray-600 hover:text-blue-800'
          }`}
          onClick={() => setActiveTab('Account')}
        >
          Account Settings
        </h2>
        <h2
          className={`cursor-pointer font-sans text-[18px] ${activeTab === 'Notification' ? 'underline' : ''} ${
            activeTab === 'Notification' ? 'text-blue-800 ' : 'text-gray-600 hover:text-blue-800'
          }`}
          onClick={() => setActiveTab('Notification')}
        >
          Notification Settings
        </h2>
        <h2
          className={`cursor-pointer font-sans text-[18px] ${activeTab === 'Profile' ? 'underline' : ''} ${
            activeTab === 'Profile' ? 'text-blue-800 ' : 'text-gray-600 hover:text-blue-800'
          }`}
          onClick={() => setActiveTab('Profile')}
        >
          Profile Settings
        </h2>
      </div>

      {activeTab === 'Account' && <div className="pb-4 md:pb-20 accountsettings">{/* Account Settings Content */}</div>}

      {activeTab === 'Notification' && (
        <div className="pb-4 md:pb-20 notificationsettings">
          {/* Notification Settings Content */}
          <div className="flex justify-end">
            <button
              className="mt-2 mr-4 bg-[#826fffe3] hover:bg-[#836FFF] text-white px-[16px] shadow-md py-[8px] rounded-md font-sans "
              onClick={openModal}
            >
              Add Notification
            </button>
          </div>

          <div className='noti-div-main'>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="noti-div"
              >
                <div className='noti-title'>
                  <h2 className="text-lg ">{notification.title}</h2>
                </div>
                <div className="py-3 px-4 flex items-left  h-[80px]">
                  <p>{notification.body}</p>
                </div>
                <div className="flex justify-end mt-2 mx-4 my-3">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white px-[10px] py-[5px] rounded-md mr-2 text-[12px] font-sans"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#ec7d7d] hover:bg-[#ee6161] text-white px-[10px] py-[5px] rounded-md text-[12px] font-sans"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Modal show={showModal} onHide={closeModal} dialogClassName="custom-modal">
      <Modal.Header className="custom-modal-header">
          <Modal.Title>{editIndex !== null ? 'Edit Notification' : 'Add Notification'}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body className='noti-body'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={notificationData.title}
                onChange={handleInputChange}
                className="noti-input"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="body"
                name="body"
                value={notificationData.body}
                onChange={handleInputChange}
                className="noti-input2"
                required
              ></textarea>
            </div>

            <div className='Noti-btn-div'>
            <button type="submit" className='Noti-btn'>
            {editIndex !== null ? 'Save Changes' : 'Add'}
            </button>
            <button type="submit" className='Noti-btn2'  onClick={closeModal}>
            Cancel
            </button>
          </div>
            {/* <div className="flex justify-end">
            <button type="submit" className="bg-[#8c8de0] hover:bg-[#6b6dce] text-white px-4 py-2 rounded-md">
                {editIndex !== null ? 'Save Changes' : 'Add'}
              </button>
              <button
                type="button"
                className="bg-[#a7a5a5] hover:bg-[#767474] text-white px-4 py-2 rounded-md mr-2"
                onClick={closeModal}
              >
                Close
              </button>
              
            </div> */}
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminSettings;