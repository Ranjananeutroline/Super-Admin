import React, { useState } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal'; 
import { RxCross2 } from "react-icons/rx";
import Form from 'react-bootstrap/Form';

function RenewalModal({ show, onHide }) {
  const [serviceType, setServiceType] = useState('');

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
};

  return (
    <div>
        <Modal show={show} onHide={onHide} dialogClassName="custom-modal">
        <div className="custom-modal-header">
                <h5 className="modal-title">Renewal</h5>
                <button type="button" className="custom-close-button" onClick={onHide}>
                <RxCross2 />
                </button>
            </div>
        <Modal.Body>
        <div className='div-2'>
              <label className='w-[150px] text-[14px] mb-2'>Renewal Options</label>
              <div style={{ marginRight: '2rem', marginBottom: "15px" }}>
                  <input
                      type="radio"
                      id="monthly"
                      name="serviceType"
                      value="Monthly"
                      checked={serviceType === "Monthly"}
                      onChange={handleServiceTypeChange}
                      className='radio-btn'
                  />
                  <label htmlFor="monthlyEnd">Monthly</label>
              </div>
              <div>
                  <input
                      type="radio"
                      id="annually"
                      name="serviceType"
                      value="Annually"
                      checked={serviceType === "Annually"}
                      onChange={handleServiceTypeChange}
                      className='radio-btn'
                  />
                  <label htmlFor="annuallyEnd">Annually</label>
              </div> 
          </div>
          <div className='Act-btn-div'>
            <button className='Act-btn'>Renew</button>
          </div>
        </Modal.Body>
    </Modal>
 
</div>
  );
}

export default RenewalModal;