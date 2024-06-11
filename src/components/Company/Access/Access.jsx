import React, { useState } from "react";
import UserAccess from "./UserAccess";
import AppointmentAccess from "./AppointmentAccess";
import AnnouncementAccess from "./AnnouncementAccess";
import BusinessDaysAccess from "./BusinessDaysAccess";
import OffersAccess from "./OffersAccess";
import WorkHoursAccess from "./WorkHoursAccess";
import ServiceAccess from "./ServiceAccess";
import "../Company.css";
"./Access.css";

const Access = () => {
  
  const [activeTab, setActiveTab] = useState("User");
  const options = ["User", "Appointment", "Announcement", "Offers","Business Days","Work Hours", "Service"];

  return (
    <div>
        <div>
        <h3 className='subs-title'>Access Management</h3>
        </div>
      <div className="flex  access-select-div">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="tab-dropdown font-sans border access-select"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {activeTab === "User" && (
       <div>
        <UserAccess/>
       </div>
      )}
       {activeTab === "Appointment" && (
       <div>
        <AppointmentAccess/>
       </div>
      )}
      {activeTab === "Announcement" && (
       <div>
        <AnnouncementAccess/>
       </div>
      )}
       {activeTab === "Business Days" && (
       <div>
        <BusinessDaysAccess/>
       </div>
      )}
       {activeTab === "Offers" && (
       <div>
        <OffersAccess/>
       </div>
      )}
      {activeTab === "Work Hours" && (
       <div>
        <WorkHoursAccess/>
       </div>
      )}
      {activeTab === "Service" && (
       <div>
        <ServiceAccess/>
       </div>
      )}
    </div>
  );
};

export default Access;