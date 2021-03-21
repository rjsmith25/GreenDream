import React from "react";
import { renderToString } from "react-dom/server";
import RoomDetailComponent from "../../client/room-detail/room-detail";
import GeneralHeaderComponent from "../../client/component/general-header";
import { rooms } from "../../service";

async function RoomDetail(req, res, next) {
  let protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  let url = protocol + "://" + req.get("host");
  const { id } = req.params;
  const { start_date, end_date, adults, children } = req.query;
  const room = await rooms.getRoom(id, url);
  const title = room.roomtype;
  let roomData = {
    room: room,
    startDate: start_date,
    endDate: end_date,
    adults: adults,
    children: children,
    title: title,
  };
  try {
    const GeneralHeaderContent = renderToString(
      <GeneralHeaderComponent title={title} />
    );
    const RoomDetailContent = renderToString(
      <RoomDetailComponent
        room={room}
        startDate={start_date}
        endDate={end_date}
        adults={adults}
        children={children}
      />
    );
    res.render("RoomDetail/roomdetail.pug", {
      GeneralHeaderContent,
      RoomDetailContent,
      roomData,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export default RoomDetail;
