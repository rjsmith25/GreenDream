import React from "react";
import { hydrate } from "react-dom";
import Rooms from "./rooms";

hydrate(<Rooms />, document.querySelector(".rooms"));
