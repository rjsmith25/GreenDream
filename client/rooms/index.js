import React from "react";
import { hydrate } from "react-dom";
import { GeneralHeader } from "../component";
import Rooms from "./rooms";

let data = window.__data__;
delete window.__data__;

let scriptTag = document.getElementById("page-ssr");
scriptTag.remove();

hydrate(
  <GeneralHeader title={data.title} />,
  document.querySelector(".general-header")
);

hydrate(
  <Rooms
    data={data.data}
    rooms={data.rooms}
    startDate={data.startDate}
    endDate={data.endDate}
    adults={data.adults}
    children={data.children}
    room_type={data.room_type}
  />,
  document.querySelector(".rooms")
);
