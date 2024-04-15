import React, {useState} from 'react';
import image from "../../assets/right.svg";

  
  const getCurrentDayIndex = () => {
    // Placeholder function to get current day index
    // You can implement this function based on your requirement
    // For demo, let's assume today is Tuesday
    return 1; // Tuesday
  };
const RegistrationDetails =  ({ tableData, onClose }) => {
    const [rotationStates, setRotationStates] = useState(Array(tableData.length).fill(false));

    const handleRotateClick = (index) => {
      setRotationStates(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    };
  
    
  return (
    
    <div className="bg-[#ffffff] w-[800px] rounded-[10px] pb-3">
    <div className="h-[65px] flex flex-col items-center justify-center bg-[#836FFF] rounded-t-[10px] mb-2">
      <h2 className="text-[#ffffff] text-[24px] font-[600] font-sans">Recent Registrations</h2>
      <div className="w-full relative">{/* Add your preview image here */}</div>
    </div>

    {tableData.map((row, index) => (
      <div
        key={index}
        className={`flex gap-8 items-center p-2 rounded-[4px] ${
          rotationStates[index] ? "bg-[#ffffff]" : "bg-[#f9f7f9]"
        } shadow-sm m-4 ${
          index === getCurrentDayIndex()
            ? "border-l-4 border-[#836FFF]"
            : "border-l-4 border-[#836FFF]"
        } transition-all duration-500 ease-in-out transform inner-schedule`}
      >
        <div className="flex flex-col gap-1 w-full">
          <div
            onClick={() => handleRotateClick(index)}
            className="flex text-[16px] text-[#3835be] w-[310px] font-[500] items-center gap-4 font-sans"
          >
            <img
              src={image}
              alt="right"
              className={`w-[18px] h-[14px] ml-2 transform ${
                rotationStates[index] ? "rotate-90" : ""
              }`}
            />
           
            {row.name}
          </div>
          {rotationStates[index] && (
              <div className="h-full text-[#5a5a5a] text-[13px] rounded-lg flex flex-col py-1 px-4 w-full">
                <div className="flex justify-between gap-2 mt-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13px] font-[600] w-[120px] font-sans">DATE</h4>
                      <span className="text-[13px] text-[#8562ee] font-sans">{row.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13px] font-[600] w-[120px] font-sans">LOCATION</h4>
                      <span className="text-[13px] text-[#8562ee] font-sans">{row.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13px] font-[600] w-[120px] font-sans">PHONE</h4>
                      <span className="text-[13px] text-[#8562ee] font-sans">{row.phone}</span>
                    </div>
                  </div>
                  <div className="border-l border-gray-300 h-70vh"></div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13px] font-[600] w-[120px] font-sans">EMAIL</h4>
                      <span className="text-[13px] text-[#8562ee] font-sans">{row.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13px] font-[600] w-[120px] font-sans">USERS</h4>
                      <span className="text-[13px] text-[#8562ee] font-sans">{row.users}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13px] font-[600] w-[120px] font-sans">APPOINTMENTS</h4>
                      <span className="text-[13px] text-[#8562ee] font-sans">{row.appointments}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}


    <div className="flex items-center justify-center">
      <button
        className="bg-[#836FFF] text-[16px] text-white font-[500] px-[20px] py-[8px] rounded-[5px] shadow-md hover:bg-[#4c73de] hover:shadow-md"
        onClick={onClose}
      >
        OK
      </button>
    </div>
  </div>
 
);
};

export default RegistrationDetails