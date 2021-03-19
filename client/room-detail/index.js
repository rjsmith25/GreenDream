import React from "react";
import { hydrate } from "react-dom";
import RoomDetail from "./room-detail";
import { GeneralHeader } from "../component";

let data = window.__data__;
delete window.__data__;

let scriptTag = document.getElementById("page-ssr");
scriptTag.remove();

hydrate(
  <GeneralHeader title={data.title} />,
  document.querySelector(".general-header")
);

hydrate(
  <RoomDetail
    room={data.room}
    startDate={data.startDate}
    endDate={data.endDate}
    adults={data.adults}
    children={data.children}
  />,
  document.querySelector(".room-detail")
);
