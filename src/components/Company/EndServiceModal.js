import React, { useState } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal'; 
import { RxCross2 } from "react-icons/rx";
import Form from 'react-bootstrap/Form';

function EndServiceModal({ show, onHide }) {
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [activationDate, setActivationDate] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleDateChange = (event) => {
      setActivationDate(event.target.value);
  };

  const handleServiceTypeChange = (event) => {
      setServiceType(event.target.value);
  };
  

  const handleConfirmationChange = () => {
    setConfirmationChecked(!confirmationChecked);
  };
  return (
    <div>
         <Modal show={show} onHide={onHide} dialogClassName="custom-modal">
         <div className="custom-modal-header">
                <h5 className="modal-title">Service End</h5>
                <button type="button" className="custom-close-button" onClick={onHide}>
                <RxCross2 />
                </button>
            </div>
            <Modal.Body className='newS-body'>
            <div className='div-1'>
                <div className='div-12'>
                    <label className='w-[150px] text-[14px]'>End of Service Date</label>
                    <input
                        type="date"
                        value={activationDate}
                        onChange={handleDateChange}
                        className='newS-input'
                    />
                </div>
                <div className='div-2'>
                <label className='w-[150px] text-[14px] mb-2'>End Service</label>
                    <div style={{marginRight:'2rem', marginBottom:"15px"}}>
                        <input
                            type="radio"
                            id="automaticEnd"
                            name="serviceType"
                            value="Automatic End"
                            checked={serviceType === "Automatic End"}
                            onChange={handleServiceTypeChange}
                            className='radio-btn'
                        />
                        <label htmlFor="automaticEnd">Automatic End</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="manualEnd"
                            name="serviceType"
                            value="Manual End"
                            checked={serviceType === "Manual End"}
                            onChange={handleServiceTypeChange}
                            className='radio-btn'
                        />
                        <label htmlFor="manualEnd">Manual End</label>
                    </div> 
                     {/* <Form.Select aria-label="Default select example" className='serv-choose'>
                        <option>Activation Options</option>
                        <option value="1">Hold</option>
                        <option value="2">Reactivate</option>
                        
                    </Form.Select> */}
                    
                </div>
                <div className='div-2'>
                    <label className='w-[150px] text-[14px]'>Reason for Termination</label>
                     <Form.Select aria-label="Default select example" className='serv-choose'>
                        <option>Choose Reasons</option>
                        <option value="1">Not satisfied with the service</option>
                        <option value="2">Business closure</option>
                        <option value="3">Relocation</option>
                        <option value="4">Budget constraints</option>
                        <option value="5">Switching to a competitor</option>
                    </Form.Select>
                </div>
                <div className='div-3'>
              <input
                type="checkbox"
                id="confirmationCheckbox"
                checked={confirmationChecked}
                onChange={handleConfirmationChange}
              />
              <label htmlFor="confirmationCheckbox">I confirm that I want to end the service.</label>
            </div>
                <div className='Act-btn-div'>
                    <button className='Act-btn'>End Service</button>
                </div>
            </div>
            </Modal.Body>
        </Modal>
      
    </div>
  );
}

export default EndServiceModal;