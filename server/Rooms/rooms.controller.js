import React from "react";
import { renderToString } from "react-dom/server";
import RoomsComponent from "../../client/rooms/rooms";
import { rooms } from "../../service";

async function Rooms(req, res, next) {
  try {
    let roomData = await rooms.getAllRooms();
    let roomsData = { data: roomData, rooms: roomData };
    const content = renderToString(
      <RoomsComponent data={roomData} rooms={roomData} />
    );
    res.render("Rooms/rooms.pug", { content, roomsData });
  } catch (e) {
    next(e);
  }
}

export default Rooms;
