import React, { useState, useEffect } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal';
import { RxCross2 } from "react-icons/rx"; 
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReactivateServiceModal({ show, onHide }) {
    const [confirmationChecked, setConfirmationChecked] = useState(false);
    const [reactivationDate, setReactivationDate] = useState('');
    const [reactivationTime, setReactivationTime] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [reactivationOption, setReactivationOption] = useState('');
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
        setReactivationDate('');
        setReactivationTime('');
        setSelectedService('');
        setReactivationOption('');
        setFormErrors({
            service: '',
            date: '',
            time:'',
            option: '',
            confirmation: ''
        });
    };

    const handleDateChange = (event) => {
        setReactivationDate(event.target.value);
        // Clear date error when date is changed
        setFormErrors({ ...formErrors, date: '' });
    };

    const handleTimeChange = (event) => {
        setReactivationTime(event.target.value);
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

    const handleReactivationOptionChange = (event) => {
        setReactivationOption(event.target.value);
        // Clear option error when option is changed
        setFormErrors({ ...formErrors, option: '' });
    };

    const handleReactivate = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        let errors = {};
        if (!selectedService) {
            errors.service = 'Please select a service.';
        }
        if (!reactivationDate) {
            errors.date = 'Please select a reactivation date.';
        }
        if (!reactivationTime) {
            errors.time = 'Please select a reactivation time.';
        }
        if (!reactivationOption) {
            errors.option = 'Please select a reactivation option.';
        }
        if (!confirmationChecked) {
            errors.confirmation = 'Please confirm the reactivation.';
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Perform reactivation logic here
            toast.success("Service reactivated successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            onHide(); // Close modal after successful reactivation
        }
    };

    return (
        <>
            <Modal show={show} onHide={onHide} dialogClassName="custom-modal" onExited={resetForm}>
                <div className="custom-modal-header">
                    <h5 className="modal-title">Service Reactivation</h5>
                    <button type="button" className="custom-close-button" onClick={onHide}>
                        <RxCross2 />
                    </button>
                </div>
                <Modal.Body className='newS-body'>
                    <Form onSubmit={handleReactivate}>
                        <div className='div-1'>
                            <div className='div-2'>
                                <label className='text-[15px]'>Select Service to Reactivate</label>
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
                                <label className='text-[15px]'>Reactivation Date</label>
                                <input
                                    type="date"
                                    value={reactivationDate}
                                    onChange={handleDateChange}
                                    className='newS-input'
                                />
                                {formErrors.date && <p className="text-red-500 text-[13px]">{formErrors.date}</p>}
                                </div>

                                <div>
                                <label className='text-[15px]'>Reactivation Time</label>
                                <input
                                    type="time"
                                    value={reactivationTime}
                                    onChange={handleTimeChange}
                                    className='newS-input'
                                    placeholder="Select Time"
                                />
                                {formErrors.time && <p className="text-red-500 text-[13px]">{formErrors.time}</p>}
                                </div>
                            </div>
                            <div className='div-2'>
                                <label className='text-[15px]'>Reactivation Options</label>
                                <Form.Select aria-label="Default select example" className='serv-choose' onChange={handleReactivationOptionChange}>
                                    <option>Select</option>
                                    <option value="1">Reactivate Now</option>
                                    <option value="2">Schedule Reactivation</option>
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
                                <label htmlFor="confirmationCheckbox" className='text-[15px]'>By clicking, I confirm that I want to reactivate the service.</label>
                                </div>
                                {formErrors.confirmation && <p className="text-red-500 text-[13px]">{formErrors.confirmation}</p>}
                            </div>
                            <div className='Act-btn-div'>
                                <button type="submit" className='Act-btn'>Reactivate</button>
                                <button type="button" className='Act-btn2' onClick={onHide}>Cancel</button>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ReactivateServiceModal;
