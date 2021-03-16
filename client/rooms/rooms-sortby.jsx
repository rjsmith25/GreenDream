import React, { useState } from "react";
import RoomsDropDown from "./rooms-dropdown";

const options = {
  plow: "Price (low to high)",
  phigh: "Price (high to low)",
  rhigh: "Rate (5 to 1)",
  rlow: "Rate (1 to 5)",
};

function RoomsSortby({
  perPage,
  searchCount,
  clickDropdown,
  showDropdown,
  clickDisplay,
  setShowDropdown,
  selected,
  setSelected,
}) {
  return (
    <div className="sortby">
      <div className="results">
        <p>
          Showing 1-{perPage} of {searchCount} results
        </p>
      </div>
      <div className="options">
        <div className="recommended">
          <p>
            {options[selected]}
            <i onClick={clickDropdown} className="fas fa-caret-down"></i>
          </p>
        </div>
        <div className="display">
          <i
            onClick={clickDisplay}
            data-display="grid"
            className="fas fa-th-large"
          ></i>
          <i
            onClick={clickDisplay}
            data-display="stack"
            className="fas fa-bars"
          ></i>
        </div>
      </div>
      <RoomsDropDown
        selected={selected}
        setSelected={setSelected}
        setShowDropdown={setShowDropdown}
        showDropdown={showDropdown}
      />
    </div>
  );
}

export default RoomsSortby;
