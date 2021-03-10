import React from "react";
import RoomDetailDescription from "./room-detail-description";
import RoomDetailReviews from "./room-detail-reviews";
import RoomDetailPhotos from "./room-detail-photos";

function RoomDetailContent({ selectedTab, room }) {
  switch (selectedTab) {
    case "Description":
      return <RoomDetailDescription room={room} />;
    case "Reviews":
      return <RoomDetailReviews />;
    case "Photos":
      return <RoomDetailPhotos photos={room.photos} />;
    default:
      null;
  }
}

export default RoomDetailContent;
