import React, {useState} from 'react'

// Placeholder data for weekdays schedule
const weekdaysData = [
    {
      day: "Monday",
      workfrom: "9:00 AM",
      workto: "5:00 PM",
      breakfrom: "12:00 PM",
      breakto: "1:00 PM",
      additionalWorkFrom1: null,
      additionalWorkTo1: null,
      additionalWorkFrom2: null,
      additionalWorkTo2: null
    },
    {
      day: "Tuesday",
      workfrom: "9:00 AM",
      workto: "5:00 PM",
      breakfrom: "12:00 PM",
      breakto: "1:00 PM",
      additionalWorkFrom1: null,
      additionalWorkTo1: null,
      additionalWorkFrom2: null,
      additionalWorkTo2: null
    },
    // Add data for remaining weekdays similarly
  ];
  
  const getCurrentDayIndex = () => {
    // Placeholder function to get current day index
    // You can implement this function based on your requirement
    // For demo, let's assume today is Tuesday
    return 1; // Tuesday
  };
const RegistrationDetails = () => {
    const [rotationStates, setRotationStates] = useState(Array(weekdaysData.length).fill(false));

    const handleRotateClick = (index) => {
      setRotationStates(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    };
  
    const onClose = () => {
      // Placeholder function for close functionality
      console.log("Close button clicked");
    };
  
    const right = ""; // Placeholder for the 'right' image source
  return (
    <div className="bg-[#fbfbfd] w-[550px] rounded-[10px] pb-3 schedule-main">
    <div className="h-[65px] flex flex-col items-center justify-center bg-[#92abf7] rounded-t-[10px] mb-2">
      <h2 className="text-[#ffffff] text-[24px] font-[600]">Business Hours</h2>
      <div className="w-full relative">{/* Add your preview image here */}</div>
    </div>

    {weekdaysData.map((day, index) => (
      <div
        key={index}
        className={`flex gap-8 items-center p-2 rounded-[4px] ${
          rotationStates[index] ? "bg-[#e8eefc]" : "bg-[#fbfbfd]"
        } shadow-sm m-4 ${
          index === getCurrentDayIndex()
            ? "border-l-4 border-blue-500"
            : "border-l-4 border-blue-200"
        } transition-all duration-500 ease-in-out transform inner-schedule`}
      >
        <div className="flex flex-col gap-1 w-full">
          <div
            onClick={() => handleRotateClick(index)}
            className="flex text-[15px] text-[#3835be] w-[110px] font-[500] items-center gap-4"
          >
            <img
              src={right}
              alt="right"
              className={`w-[12px] h-[14px] ml-2 transform ${
                rotationStates[index] ? "rotate-90" : ""
              }`}
            />
            {day.day}
          </div>
          {rotationStates[index] && (
            <div className="h-full text-[#5a5a5a] text-[13px] text-center rounded-lg flex flex-col items-center py-1 px-4 w-full">
              <div className="flex gap-2 mt-2">
                <h4 className="text-[12px] font-[600] w-[120px]">WORK HOURS</h4>
                <div className="flex">
                  <span className="text-[12px] text-[#8562ee]">{day.workfrom} - {day.workto}</span>
                  {day.additionalWorkFrom1 && (
                    <span className="text-[12px] text-[#8562ee]">
                      {day.additionalWorkFrom1} - {day.additionalWorkTo1}
                    </span>
                  )}
                  {day.additionalWorkFrom2 && (
                    <span className="text-[12px] text-[#8562ee]">
                      {day.additionalWorkFrom2} - {day.additionalWorkTo2}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <h4 className="text-[12px] font-[600] w-[120px]">BREAK</h4>
                <div className="flex gap-[3px]">
                  <span className="text-[12px] text-[#8562ee]">{day.breakfrom}</span>
                  <p>-</p>
                  <span className="text-[12px] text-[#8562ee]">{day.breakto}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    ))}

    <div className="flex items-center justify-center">
      <button
        className="bg-[#547ef3] text-[16px] text-white font-[500] px-[20px] py-[8px] rounded-[5px] shadow-md hover:bg-[#4c73de] hover:shadow-md"
        onClick={onClose}
      >
        OK
      </button>
    </div>
  </div>
);
};

export default RegistrationDetails