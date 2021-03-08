import React, { useState } from "react";

function RoomsSideBar({ filter, setfilter }) {
  function onFilterChange(e) {
    setfilter({ ...filter, [e.target.name]: e.target.checked });
  }

  return (
    <div className="sidebar">
      <div className="room-type">
        <p>Room Type</p>
        <label htmlFor="standard-room">
          <input
            checked={filter["standard-room"]}
            onChange={onFilterChange}
            type="checkbox"
            id="standard-room"
            name="standard-room"
            value="Standard Room"
          />
          Standard Room
        </label>
        <label htmlFor="double-room">
          <input
            checked={filter["double-room"]}
            onChange={onFilterChange}
            type="checkbox"
            id="double-room"
            name="double-room"
            value="Double Room"
          />
          Double Room
        </label>
        <label htmlFor="queen-room">
          <input
            checked={filter["queen-room"]}
            onChange={onFilterChange}
            type="checkbox"
            id="queen-room"
            name="queen-room"
            value="Queen Room"
          />
          Queen Room
        </label>
        <label htmlFor="king-room">
          <input
            checked={filter["king-room"]}
            onChange={onFilterChange}
            type="checkbox"
            id="king-room"
            name="king-room"
            value="King Room"
          />
          King Room
        </label>
      </div>
    </div>
  );
}

export default RoomsSideBar;
