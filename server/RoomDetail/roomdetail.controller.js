import React from "react";
import { renderToString } from "react-dom/server";
import RoomDetailComponent from "../../client/room-detail/room-detail";
import { rooms } from "../../service";

async function RoomDetail(req, res, next) {
  const { id } = req.params;
  let { start_date, end_date, adults, children } = req.query;
  let room = await rooms.getRoom(id);
  let roomtype = room.roomtype;
  let roomData = {
    room: room,
    startDate: start_date,
    endDate: end_date,
    adults: adults,
    children: children,
  };
  try {
    const content = renderToString(
      <RoomDetailComponent
        room={room}
        startDate={start_date}
        endDate={end_date}
        adults={adults}
        children={children}
      />
    );
    res.render("RoomDetail/roomdetail.pug", { content, roomtype, roomData });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export default RoomDetail;
