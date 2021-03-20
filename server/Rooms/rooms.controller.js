import React from "react";
import { renderToString } from "react-dom/server";
import RoomsComponent from "../../client/rooms/rooms";
import GeneralHeaderComponent from "../../client/component/general-header";
import { rooms } from "../../service";

async function Rooms(req, res, next) {
  let url = req.protocol + "://" + req.get("host");
  let title = "Rooms";
  let { start_date, end_date, adults, children } = req.query;
  try {
    let roomData = await rooms.getAllRooms(url);
    let roomsData = {
      data: roomData,
      rooms: roomData,
      startDate: start_date,
      endDate: end_date,
      adults: adults,
      children: children,
      title: title,
    };
    const GeneralHeaderContent = renderToString(
      <GeneralHeaderComponent title={title} />
    );
    const RoomsContent = renderToString(
      <RoomsComponent
        data={roomData}
        rooms={roomData}
        startDate={start_date}
        endDate={end_date}
        adults={adults}
        children={children}
      />
    );
    res.render("Rooms/rooms.pug", {
      RoomsContent,
      GeneralHeaderContent,
      roomsData,
    });
  } catch (e) {
    next(e);
  }
}

export default Rooms;
