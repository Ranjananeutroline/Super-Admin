import React, { useState } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx"; 
import Form from 'react-bootstrap/Form';

function ActivateServiceModal({ show, onHide }) {
    const [confirmationChecked, setConfirmationChecked] = useState(false);
    const [activationDate, setActivationDate] = useState('');
  
    const handleDateChange = (event) => {
        setActivationDate(event.target.value);
    };
  
    const handleConfirmationChange = () => {
      setConfirmationChecked(!confirmationChecked);
    };


    return (
        <>
         <Modal show={show} onHide={onHide} dialogClassName="custom-modal">
            <div className="custom-modal-header">
                <h5 className="modal-title">Service Activation</h5>
                <button type="button" className="custom-close-button" onClick={onHide}>
                <RxCross2 />
                </button>
            </div>
            <Modal.Body className='newS-body'>
            <div className='div-1'>
            <div className='div-2'>
                    <label className='text-[15px]'>Select Service to Activate</label>
                     <Form.Select aria-label="Default select example" className='serv-choose'>
                        <option>Choose service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                        <option value="4">Service 4</option>
                        <option value="5">Others</option>
                    </Form.Select>
                </div>
                <div className='div-12'>
                    <label className='text-[15px]'>Activation Date</label>
                    <input
                        type="date"
                        value={activationDate}
                        onChange={handleDateChange}
                        className='newS-input'
                    />
                </div>
                <div className='div-2'>
                <label className='text-[15px]'>Activation Options</label>
                    <Form.Select aria-label="Default select example" className='serv-choose'>
                        <option>Select</option>
                        <option value="1">Hold Service</option>
                        <option value="2">Activate Now</option>
                        <option value="3">Schedule Activation</option>
                    </Form.Select>
                </div>
                <div className='div-3 flex items-center'>
                <input
                    type="checkbox"
                    id="confirmationCheckbox"
                    checked={confirmationChecked}
                    onChange={handleConfirmationChange}
                />
                <label htmlFor="confirmationCheckbox" className='text-[15px]'>By clicking, I confirm that I want to activate the service.</label>
                </div>
                <div className='Act-btn-div'>
                    <button className='Act-btn'>Activate</button>
                    <button className='Act-btn2'>Cancel</button>
                </div>

            </div>
            </Modal.Body>
        </Modal>
           
          
        </>
    );
}

export default ActivateServiceModal;