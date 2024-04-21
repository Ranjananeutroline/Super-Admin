import React, { useState, useEffect } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal'; 
import { RxCross2 } from "react-icons/rx";
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EndServiceModal({ show, onHide }) {
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [activationDate, setActivationDate] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [endServiceOption, setEndServiceOption] = useState('');
  const [terminationReason, setTerminationReason] = useState('');
  const [formErrors, setFormErrors] = useState({
    service: '',
    date: '',
    option: '',
    reason: '',
    confirmation: ''
  });

  useEffect(() => {
    if (!show) {
      resetForm();
    }
  }, [show]);
  
  const resetForm = () => {
    setConfirmationChecked(false);
    setActivationDate('');
    setSelectedService('');
    setEndServiceOption('');
    setTerminationReason('');
    setFormErrors({
      service: '',
      date: '',
      option: '',
      reason: '',
      confirmation: ''
    });
  };

  const handleDateChange = (event) => {
    setActivationDate(event.target.value);
    setFormErrors({ ...formErrors, date: '' });
  };

  const handleConfirmationChange = () => {
    setConfirmationChecked(!confirmationChecked);
    setFormErrors({ ...formErrors, confirmation: '' });
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
    setFormErrors({ ...formErrors, service: '' });
  };

  const handleEndServiceOptionChange = (event) => {
    setEndServiceOption(event.target.value);
    setFormErrors({ ...formErrors, option: '' });
  };

  const handleTerminationReasonChange = (event) => {
    setTerminationReason(event.target.value);
    setFormErrors({ ...formErrors, reason: '' });
  };

  const handleEndService = (event) => {
    event.preventDefault();
    let errors = {};
    if (!selectedService) {
      errors.service = 'Please select a service.';
    }
    if (!activationDate) {
      errors.date = 'Please select an end of service date.';
    }
    if (!endServiceOption) {
      errors.option = 'Please select an end service option.';
    }
    if (!terminationReason) {
      errors.reason = 'Please select a reason for termination.';
    }
    if (!confirmationChecked) {
      errors.confirmation = 'Please confirm the end of service.';
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      toast.success("Service ended successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      onHide();
      resetForm(); // Reset form after successful submission
    }
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} dialogClassName="custom-modal" onExited={resetForm}>
        <div className="custom-modal-header">
          <h5 className="modal-title">Service End</h5>
          <button type="button" className="custom-close-button" onClick={onHide}>
            <RxCross2 />
          </button>
        </div>
        <Modal.Body className='newS-body'>
          <Form onSubmit={handleEndService}>
            <div className='div-1'>
              <div className='div-2'>
                <label className='text-[15px]'>Select Service to End</label>
                <Form.Select aria-label="Default select example" className='serv-choose' onChange={handleServiceChange}>
                  <option>Choose service</option>
                  <option value="1">Service 1</option>
                  <option value="2">Service 2</option>
                  <option value="3">Service 3</option>
                  <option value="4">Service 4</option>
                  <option value="5">Others</option>
                </Form.Select>
                {formErrors.service && <p className="text-red-500 text-[13px]">{formErrors.service}</p>}
              </div>
              <div className='div-12'>
                <label className='text-[15px]'>End of Service Date</label>
                <input
                  type="date"
                  value={activationDate}
                  onChange={handleDateChange}
                  className='newS-input'
                />
                {formErrors.date && <p className="text-red-500 text-[13px]">{formErrors.date}</p>}
              </div>
              <div className='div-2'>
                <label className='text-[15px]'>End Service Options</label>
                <Form.Select aria-label="Default select example" className='serv-choose' onChange={handleEndServiceOptionChange}>
                  <option>Select</option>
                  <option value="1">Automatic</option>
                  <option value="2">Manual</option>
                </Form.Select>
                {formErrors.option && <p className="text-red-500 text-[13px]">{formErrors.option}</p>}
              </div>
              <div className='div-2'>
                <label className='text-[15px]'>Reason for Termination</label>
                <Form.Select aria-label="Default select example" className='serv-choose' onChange={handleTerminationReasonChange}>
                  <option>Select Reasons</option>
                  <option value="1">Not satisfied with the service</option>
                  <option value="2">Business closure</option>
                  <option value="3">Relocation</option>
                  <option value="4">Budget constraints</option>
                  <option value="5">Switching to a competitor</option>
                </Form.Select>
                {formErrors.reason && <p className="text-red-500 text-[13px]">{formErrors.reason}</p>}
              </div>
              <div className='div-3 flex items-center'>
                <input
                  type="checkbox"
                  id="confirmationCheckbox"
                  checked={confirmationChecked}
                  onChange={handleConfirmationChange}
                />
                <label htmlFor="confirmationCheckbox" className='text-[15px]'>By clicking, I confirm that I want to end the service.</label>
              </div>
              {formErrors.confirmation && <p className="text-red-500 text-[13px]">{formErrors.confirmation}</p>}
              <div className='Act-btn-div'>
                <button className='Act-btn'>End Service</button>
                <button className='Act-btn2' onClick={onHide}>Cancel</button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EndServiceModal;
