import React, { useState, useEffect } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx"; 
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ActivateServiceModal({ show, onHide }) {
    const [confirmationChecked, setConfirmationChecked] = useState(false);
    const [activationDate, setActivationDate] = useState('');
    const [activationTime, setActivationTime] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [activationOption, setActivationOption] = useState('');
    const [formErrors, setFormErrors] = useState({
        service: '',
        date: '',
        time:'',
        option: '',
        confirmation: ''
    });

    useEffect(() => {
        // Reset form fields when the modal is opened
        if (show) {
            resetForm();
        }
    }, [show]);

    const resetForm = () => {
        setConfirmationChecked(false);
        setActivationDate('');
        setActivationTime('');
        setSelectedService('');
        setActivationOption('');
        setFormErrors({
            service: '',
            date: '',
            time:'',
            option: '',
            confirmation: ''
        });
    };

    const handleDateChange = (event) => {
        setActivationDate(event.target.value);
        // Clear date error when date is changed
        setFormErrors({ ...formErrors, date: '' });
    };

    const handleTimeChange = (event) => {
        setActivationTime(event.target.value);
        // Clear time error when time is changed
        setFormErrors({ ...formErrors, time: '' });
    };

    const handleConfirmationChange = () => {
        setConfirmationChecked(!confirmationChecked);
        // Clear confirmation error when checkbox is changed
        setFormErrors({ ...formErrors, confirmation: '' });
    };

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
        // Clear service error when service is changed
        setFormErrors({ ...formErrors, service: '' });
    };

    const handleActivationOptionChange = (event) => {
        setActivationOption(event.target.value);
        // Clear option error when option is changed
        setFormErrors({ ...formErrors, option: '' });
    };

    const handleActivate = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        let errors = {};
        if (!selectedService) {
            errors.service = 'Please select a service.';
        }
        if (!activationDate) {
            errors.date = 'Please select an activation date.';
        }
        if (!activationTime) {
            errors.time = 'Please select an activation time.';
        }
        if (!activationOption) {
            errors.option = 'Please select an activation option.';
        }
        if (!confirmationChecked) {
            errors.confirmation = 'Please confirm the activation.';
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Perform activation logic here
            toast.success("Service activated successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            onHide(); // Close modal after successful activation
        }
    };

    return (
        <>
            <Modal show={show} onHide={onHide} dialogClassName="custom-modal" onExited={resetForm}>
                <div className="custom-modal-header">
                    <h5 className="modal-title">Service Activation</h5>
                    <button type="button" className="custom-close-button" onClick={onHide}>
                        <RxCross2 />
                    </button>
                </div>
                <Modal.Body className='newS-body'>
                    <Form onSubmit={handleActivate}>
                        <div className='div-1'>
                            <div className='div-2'>
                                <label className='text-[15px]'>Select Service to Activate</label>
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
                            <div className='div-12 div-121'>
                                <div>
                                <label className='text-[15px]'>Activation Date</label>
                                <input
                                    type="date"
                                    value={activationDate}
                                    onChange={handleDateChange}
                                    className='newS-input'
                                />
                                {formErrors.date && <p className="text-red-500 text-[13px]">{formErrors.date}</p>}
                                </div>

                                <div>
                                <label className='text-[15px]'>Activation Time</label>
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
                                <label className='text-[15px]'>Activation Options</label>
                                <Form.Select aria-label="Default select example" className='serv-choose' onChange={handleActivationOptionChange}>
                                    <option>Select</option>
                                    <option value="1">Hold Service</option>
                                    <option value="2">Activate Now</option>
                                    <option value="3">Schedule Activation</option>
                                </Form.Select>
                                {formErrors.option && <p className="text-red-500 text-[13px]">{formErrors.option}</p>}
                            </div>
                            <div className='div-3'>
                                <div>
                                <input
                                    type="checkbox"
                                    id="confirmationCheckbox"
                                    checked={confirmationChecked}
                                    onChange={handleConfirmationChange}
                                />
                                <label htmlFor="confirmationCheckbox" className='text-[15px] con-label'>By clicking, I confirm that I want to activate the service.</label>
                                </div>
                                {formErrors.confirmation && <p className="text-red-500 text-[13px]">{formErrors.confirmation}</p>}
                            </div>
                            <div className='Act-btn-div'>
                                <button type="submit" className='Act-btn'>Activate</button>
                                <button type="button" className='Act-btn2' onClick={onHide}>Cancel</button>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ActivateServiceModal;