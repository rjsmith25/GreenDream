import React from "react";

function RoomsSideBar() {
  return (
    <div className="sidebar">
      <div className="room-type">
        <p>Room Type</p>
        <label htmlFor="standard-room">
          <input
            type="checkbox"
            id="standard-room"
            name="standard-room"
            value="Standard Room"
          />
          Standard Room
        </label>
        <label htmlFor="double-room">
          <input
            type="checkbox"
            id="double-room"
            name="double-room"
            value="Double Room"
          />
          Double Room
        </label>
        <label htmlFor="queen-room">
          <input
            type="checkbox"
            id="queen-room"
            name="queen-room"
            value="Queen Room"
          />
          Queen Room
        </label>
        <label htmlFor="king-room">
          <input
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
