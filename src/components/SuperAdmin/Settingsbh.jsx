import React, { useState } from 'react';

const Settingsbh = () => {
  // State to manage the selected business days
  const [selectedFromDay, setSelectedFromDay] = useState('');
  const [selectedToDay, setSelectedToDay] = useState('');
  const [selectedFromTime, setSelectedFromTime] = useState('');
  const [selectedToTime, setSelectedToTime] = useState('');

  // Array of weekdays
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday', 'Saturday'];

  // Array of hours
  const hours = Array.from({ length: 24 }, (_, i) => `${i < 10 ? '0' : ''}${i}:00`);

  // Function to handle "From" dropdown change for days
  const handleFromDayChange = (e) => {
    setSelectedFromDay(e.target.value);
  };

  // Function to handle "To" dropdown change for days
  const handleToDayChange = (e) => {
    setSelectedToDay(e.target.value);
  };

  // Function to handle "From" dropdown change for hours
  const handleFromTimeChange = (e) => {
    setSelectedFromTime(e.target.value);
  };

  // Function to handle "To" dropdown change for hours
  const handleToTimeChange = (e) => {
    setSelectedToTime(e.target.value);
  };

  return (
    <div className="pb-4 md:pb-20 bg-gradient-to-b from-[#f1ebf8]  to-[#fdfbfe]
    rounded-lg shadow-md p-6 Settings">
      <div className="max-w-md mt-2 flex">
        <h3>Business Days:</h3>
       <div className='mt-[-10px]'>
        <span className="mx-2 font-sans text-[16px]  "> From</span>
        <select id="fromDay" value={selectedFromDay} onChange={handleFromDayChange} 
          className="border rounded-md py-2 px-3 mb-3 mr-2 font-sans text-[12px] ">
          <option value="">Select Day</option>
          {weekdays.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
       
        <span className="mr-2 font-sans text-[16px]">To</span>
        <select id="toDay" value={selectedToDay} onChange={handleToDayChange} className="border rounded-md py-2 px-3 mb-3 mr-2 font-sans text-[12px]">
          <option value="">Select Day</option>
          {weekdays.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
        </div>
      </div>
      <div className="max-w-md mt-2 flex">
        <h3>Work Hours:</h3>
        <div className='mt-[-10px]'>
        <label htmlFor="fromTime" className="mx-2 font-sans text-[16px]  "> From</label>
        <select id="fromTime" value={selectedFromTime} onChange={handleFromTimeChange} 
          className="border rounded-md py-2 px-3 mb-3 mr-2 font-sans text-[12px] ">
          <option value="">Select Time</option>
          {hours.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <label htmlFor="toTime" className="mr-2 font-sans text-[16px]">To</label>
        <select id="toTime" value={selectedToTime} onChange={handleToTimeChange} className="border rounded-md py-2 px-3 mb-3 mr-2 font-sans text-[12px]">
          <option value="">Select Time</option>
          {hours.map((hour, index) => (
            <option key={index} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        </div>
      </div>
      {selectedFromDay && selectedToDay && (
        <p className="text-blue-500">
          Selected Business Days: {selectedFromDay} to {selectedToDay}
        </p>
      )}
      {selectedFromTime && selectedToTime && (
        <p className="text-blue-500">
          Selected Work Hours: {selectedFromTime} to {selectedToTime}
        </p>
      )}
    </div>
  );
};

export default Settingsbh;