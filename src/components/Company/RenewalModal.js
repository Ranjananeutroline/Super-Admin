import React, { useState, useEffect } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal'; 
import { RxCross2 } from "react-icons/rx";
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RenewalModal({ show, onHide }) {
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [activationDate, setActivationDate] = useState('');
  const [activationTime, setActivationTime] = useState('');
  const [renewalPeriod, setRenewalPeriod] = useState('');
  const [additionalService, setAdditionalService] = useState('');
  const [formErrors, setFormErrors] = useState({
    date: '',
    period: '',
    time:'',
    service: '',
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
    setActivationTime('');
    setRenewalPeriod('');
    setAdditionalService('');
    setFormErrors({
      date: '',
      period: '',
      time:'',
      service: '',
      confirmation: ''
    });
  };

  const handleDateChange = (event) => {
    setActivationDate(event.target.value);
    setFormErrors({ ...formErrors, date: '' }); // Clear date error
  };

  const handleTimeChange = (event) => {
    setActivationTime(event.target.value);
    // Clear time error when time is changed
    setFormErrors({ ...formErrors, time: '' });
  };

  const handleConfirmationChange = () => {
    setConfirmationChecked(!confirmationChecked);
    setFormErrors({ ...formErrors, confirmation: '' }); // Clear confirmation error
  };

  const handlePeriodChange = (event) => {
    setRenewalPeriod(event.target.value);
    setFormErrors({ ...formErrors, period: '' }); // Clear period error
  };

  const handleServiceChange = (event) => {
    setAdditionalService(event.target.value);
    setFormErrors({ ...formErrors, service: '' }); // Clear service error
  };

  const handleRenewal = (event) => {
    event.preventDefault(); // Prevent default form submission
    let errors = {};
    if (!renewalPeriod) {
      errors.period = 'Please select a renewal period.';
    }
    if (!activationDate) {
      errors.date = 'Please select a renewal date.';
    }
    if (!activationTime) {
      errors.time = 'Please select an activation time.';
    }
    if (!additionalService) {
      errors.service = 'Please select an additional service.';
    }
    if (!confirmationChecked) {
      errors.confirmation = 'Please confirm the renewal.';
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Perform renewal logic here
      toast.success("Service renewed successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      onHide(); // Close modal after successful renewal
    }
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
        <Modal.Body className='newS-body'>
          <Form onSubmit={handleRenewal}>
            <div className='div-1'>
              <div className='div-2'>
                <label className='text-[15px]'>Renewal Period</label>
                <Form.Select aria-label="Default select example" className='serv-choose' onChange={handlePeriodChange}>
                  <option>Select</option>
                  <option value="1">Monthly</option>
                  <option value="2">Annually</option>
                </Form.Select>
                {formErrors.period && <p className="text-red-500 text-[13px]">{formErrors.period}</p>}
              </div>
              <div className='div-12 div-121'>
                <div>
                  <label className='text-[15px]'>Renewal Date</label>
                  <input
                    type="date"
                    value={activationDate}
                    onChange={handleDateChange}
                    className='newS-input'
                  />
                  {formErrors.date && <p className="text-red-500 text-[13px]">{formErrors.date}</p>}
                </div>
                
                <div>
                  <label className='text-[15px]'>Renewal Time</label>
                  <input
                    type="time"
                    value={activationTime}
                    onChange={handleTimeChange}
                    className='newS-input'
                    placeholder="Select Time"
                  />
                  {formErrors.time && <p className="text-red-500 text-[13px]">{formErrors.time}</p>}
                </div>
              </div>
              <div className='div-2'>
                <label className='text-[15px]'>Additional Service</label>
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
              <div className='div-3 flex items-center'>
                <input
                  type="checkbox"
                  id="confirmationCheckbox"
                  checked={confirmationChecked}
                  onChange={handleConfirmationChange}
                />
                <label htmlFor="confirmationCheckbox" className='text-[15px] con-label'>By clicking, I confirm that I want to renew the service.</label>
              </div>
              {formErrors.confirmation && <p className="text-red-500 text-[13px]">{formErrors.confirmation}</p>}
              <div className='Act-btn-div'>
                <button type="submit" className='Act-btn'>Renew</button>
                <button onClick={onHide} className='Act-btn2'>Cancel</button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RenewalModal;
