import React from "react";
import { renderToString } from "react-dom/server";
import RoomsComponent from "../../client/rooms/rooms";

function Rooms(req, res) {
  const content = renderToString(<RoomsComponent />);
  res.render("Rooms/rooms.pug", { content });
}

export default Rooms;
