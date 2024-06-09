import React, { useState } from 'react';

const Settingsbh = () => {
  // State to manage the selected business days and work hours
  const [selectedFromDay, setSelectedFromDay] = useState('');
  const [selectedToDay, setSelectedToDay] = useState('');
  const [workHours, setWorkHours] = useState({});

  // Array of weekdays
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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

  // Function to handle work hours change for a specific day
  const handleWorkHoursChange = (day, fromTime, toTime) => {
    setWorkHours({ ...workHours, [day]: { from: fromTime, to: toTime } });
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
      {selectedFromDay && selectedToDay && (
        <div className="max-w-md mt-2 flex">
          <h3>Work Hours:</h3>
          <div className='mt-[-10px]'>
            {weekdays
              .slice(weekdays.indexOf(selectedFromDay), weekdays.indexOf(selectedToDay) + 1)
              .map((day, index) => (
                <div key={index} className="flex items-center ">
                  <div className='mt-[-15px] w-[110px]'>
                  <span className="mx-2 font-sans text-[16px]">{day}</span>
                  </div>
                  <select
                    value={workHours[day]?.from || ''}
                    onChange={(e) => handleWorkHoursChange(day, e.target.value, workHours[day]?.to || '')}
                    className="border rounded-md py-2 px-3 mb-3 mr-2 font-sans text-[12px]"
                  >
                    <option value="">From</option>
                    {hours.map((hour, index) => (
                      <option key={index} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                  <select
                    value={workHours[day]?.to || ''}
                    onChange={(e) => handleWorkHoursChange(day, workHours[day]?.from || '', e.target.value)}
                    className="border rounded-md py-2 px-3 mb-3 mr-2 font-sans text-[12px]"
                  >
                    <option value="">To</option>
                    {hours.map((hour, index) => (
                      <option key={index} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
          </div>
        </div>
      )}
      {selectedFromDay && selectedToDay && (
        <p className="text-blue-500">
          Selected Business Days: {selectedFromDay} to {selectedToDay}
        </p>
      )}
      {Object.keys(workHours).length > 0 && (
        <p className="text-blue-500">
          Selected Work Hours: {Object.keys(workHours).map((day) => `${day}: ${workHours[day].from} to ${workHours[day].to}`).join(', ')}
        </p>
      )}
    </div>
  );
};

export default Settingsbh;
