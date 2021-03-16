import React from "react";
import { renderToString } from "react-dom/server";
import RoomsComponent from "../../client/rooms/rooms";
import { rooms } from "../../service";

async function Rooms(req, res, next) {
  let { start_date, end_date, adults, children } = req.query;
  try {
    let roomData = await rooms.getAllRooms();
    let roomsData = {
      data: roomData,
      rooms: roomData,
      startDate: start_date,
      endDate: end_date,
      adults: adults,
      children: children,
    };
    const content = renderToString(
      <RoomsComponent
        data={roomData}
        rooms={roomData}
        startDate={start_date}
        endDate={end_date}
        adults={adults}
        children={children}
      />
    );
    res.render("Rooms/rooms.pug", { content, roomsData });
  } catch (e) {
    next(e);
  }
}

export default Rooms;
