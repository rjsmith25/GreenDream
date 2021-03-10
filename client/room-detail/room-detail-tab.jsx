import React from "react";

function RoomDetailTab({ selectedTab, setSelectedTab }) {
  function onTabClick(e) {
    setSelectedTab(e.target.dataset.tab);
  }

  return (
    <ul className="room-detail-tab flex">
      <li
        onClick={onTabClick}
        data-tab="Description"
        className={
          selectedTab === "Description" ? "detail-tab-active" : undefined
        }
      >
        Description
      </li>
      <li
        onClick={onTabClick}
        data-tab="Reviews"
        className={selectedTab === "Reviews" ? "detail-tab-active" : undefined}
      >
        Reviews
      </li>
      <li
        onClick={onTabClick}
        data-tab="Photos"
        className={selectedTab === "Photos" ? "detail-tab-active" : undefined}
      >
        Photos
      </li>
    </ul>
  );
}

export default RoomDetailTab;
