import React, { useState } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx"; 
import Form from 'react-bootstrap/Form';

function ActivateServiceModal({ show, onHide }) {
    const [activationDate, setActivationDate] = useState('');
    const [serviceType, setServiceType] = useState('');

    const handleDateChange = (event) => {
        setActivationDate(event.target.value);
    };

    const handleServiceTypeChange = (event) => {
        setServiceType(event.target.value);
    };

    return (
        <>
         <Modal show={show} onHide={onHide} dialogClassName="custom-modal">
            <div className="custom-modal-header">
                <h5 className="modal-title">Activate New Service</h5>
                <button type="button" className="custom-close-button" onClick={onHide}>
                <RxCross2 />
                </button>
            </div>
            <Modal.Body className='newS-body'>
            <div className='div-1'>
                <div className='div-12'>
                    <label className='w-[150px] text-[14px]'>Activate New Service</label>
                    <input
                        type="date"
                        value={activationDate}
                        onChange={handleDateChange}
                        className='newS-input'
                    />
                </div>
                <div className='div-2'>
                    <label className='w-[150px] text-[14px]'>Service Type</label>
                    {/* <div style={{marginRight:'2rem'}}>
                        <input
                            type="radio"
                            id="hold"
                            name="serviceType"
                            value="Hold"
                            checked={serviceType === "Hold"}
                            onChange={handleServiceTypeChange}
                            className='radio-btn'
                        />
                        <label htmlFor="hold">Hold</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="reactivate"
                            name="serviceType"
                            value="Reactivate"
                            checked={serviceType === "Reactivate"}
                            onChange={handleServiceTypeChange}
                            className='radio-btn'
                        />
                        <label htmlFor="reactivate">Reactivate</label>
                    </div> */}
                     <Form.Select aria-label="Default select example" className='serv-choose'>
                        <option>Choose Service</option>
                        <option value="1">Hold</option>
                        <option value="2">Reactivate</option>
                        
                    </Form.Select>
                    
                </div>
                <div className='Act-btn-div'>
                    <button className='Act-btn'>Activate</button>
                </div>
            </div>
            </Modal.Body>
        </Modal>
           
          
        </>
    );
}

export default ActivateServiceModal;