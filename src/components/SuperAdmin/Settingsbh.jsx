import React, { useState } from 'react';
import "./AdminSettings.css";

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
    <div className="pb-4 md:pb-20 bg-gradient-to-b from-[#f1ebf89c]  to-[#fdfbfe]
    rounded-lg  p-6 Settings">
      <div className="flex mb-[0.5rem]">
        <h3 className='w-[120px] text-[16px] pt-[8px]'>Business Days:</h3>
       <div>
        <span className="mx-2 font-sans text-[15px] text-[grey] "> From</span>
        <select id="fromDay" value={selectedFromDay} onChange={handleFromDayChange} 
          className="border rounded-md mr-2 font-sans text-[12px]">
          <option value="">Select Day</option>
          {weekdays.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
       
        <span className="ml-[3px] mr-[10px] font-sans text-[15px] text-[grey]">To</span>
        <select id="toDay" value={selectedToDay} onChange={handleToDayChange} className="border rounded-md mr-2 font-sans text-[12px]">
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
        <div className="flex">
          <h3 className='w-[120px] text-[16px] pt-[8px]'>Work Hours:</h3>
          <div>
            {weekdays
              .slice(weekdays.indexOf(selectedFromDay), weekdays.indexOf(selectedToDay) + 1)
              .map((day, index) => (
                <div key={index} className="flex gap-[0.5rem] mb-[12px] items-center ">
                  <div>
                  <span className="mx-2 font-sans text-[16px] text-[grey]">{day}</span>
                  </div>
                  <select
                    value={workHours[day]?.from || ''}
                    onChange={(e) => handleWorkHoursChange(day, e.target.value, workHours[day]?.to || '')}
                    className="border rounded-md  mr-2 font-sans text-[12px] work-select"
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
                    className="border rounded-md mr-2 font-sans text-[12px] work-select"
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
        <p className="text-[15.5px] text-[#000000cf] mt-[0.5rem]">
          Selected Business Days: <span className="ml-[8px] text-[#03AED2] text-[15px]">{selectedFromDay} - {selectedToDay}</span>
        </p>
      )}
      {Object.keys(workHours).length > 0 && (
        <p className="text-[15.5px] mt-[0.2rem] text-[#000000cf]">
          Selected Work Hours: <span className="ml-[8px] text-[#03AED2] text-[15px]">
          {Object.keys(workHours).map((day) => `${day}: ${workHours[day].from} to ${workHours[day].to}`).join(', ')}</span>
        </p>
      )}
    </div>
  );
};

export default Settingsbh;