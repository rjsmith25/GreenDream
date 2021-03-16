import React from "react";
import RoomDetailSidebarForm from "./room-detail-sidebar-form";

function RoomDetailSidebar({
  OpenDetailModal,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  adults,
  setAdults,
  children,
  setChildren,
}) {
  function onStartDateChange(date) {
    setStartDate(date);
  }

  function onEndDateChange(date) {
    setEndDate(date);
  }
  return (
    <aside className="side-bar">
      <RoomDetailSidebarForm
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={onStartDateChange}
        onEndDateChange={onEndDateChange}
        OpenDetailModal={OpenDetailModal}
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
      />
      <div className="get-help">
        <p>Need our help?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad libero,
          modi voluptate numquam laborum perferendis natus veniam corporis
          magnam beatae!
        </p>
        <p>332-45-4567</p>
        <p>support@greendream.com</p>
      </div>
    </aside>
  );
}

export default RoomDetailSidebar;
