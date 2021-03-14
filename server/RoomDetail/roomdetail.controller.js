import React from "react";
import { renderToString } from "react-dom/server";
import RoomDetailComponent from "../../client/room-detail/room-detail";
import { rooms } from "../../service";

async function RoomDetail(req, res, next) {
  const { id } = req.params;
  let room = await rooms.getRoom(id);
  let roomtype = room.roomtype;
  let roomData = { room: room };
  try {
    const content = renderToString(<RoomDetailComponent room={room} />);
    res.render("RoomDetail/roomdetail.pug", { content, roomtype, roomData });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export default RoomDetail;
