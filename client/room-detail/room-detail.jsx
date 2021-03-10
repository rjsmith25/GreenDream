import React, { useState } from "react";
import RoomDetailSidebar from "./room-detail-sidebar";
import RoomDetailTab from "./room-detail-tab";
import RoomDetailContent from "./room-detail-content";

function RoomDetail(props) {
  const [selectedTab, setSelectedTab] = useState("Description");
  return (
    <div className="container grid">
      <div className="room-detail-content">
        <RoomDetailTab
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="content">
          <RoomDetailContent selectedTab={selectedTab} room={props.room} />
        </div>
      </div>
      <RoomDetailSidebar />
    </div>
  );
}

export default RoomDetail;
