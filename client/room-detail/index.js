import React from "react";
import { hydrate } from "react-dom";
import RoomDetail from "./room-detail";

let data = window.__data__;
delete window.__data__;

let scriptTag = document.getElementById("page-ssr");
scriptTag.remove();

hydrate(
  <RoomDetail room={data.room} />,
  document.querySelector(".room-detail")
);
