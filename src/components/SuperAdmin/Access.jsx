import React, { useState } from "react";
import UserAccess from "./Access/UserAccess";
import AppointmentAccess from "./Access/AppointmentAccess";
import AnnouncementAccess from "./Access/AnnouncementAccess";
import BusinessDaysAccess from "./Access/BusinessDaysAccess";
import OffersAccess from "./Access/OffersAccess";
import WorkHoursAccess from "./Access/WorkHoursAccess";
import ServiceAccess from "./Access/ServiceAccess";

const Access = () => {
  
  const [activeTab, setActiveTab] = useState("User");
  const options = ["User", "Appointment", "Announcement", "Offers","Business Days","Work Hours", "Service"];

  return (
    <div>
      <div className="flex mb-[-40px]">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="tab-dropdown font-sans text-[13px] w-[120px]"
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
