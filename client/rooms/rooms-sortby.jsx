import React from "react";
import RoomsDropDown from "./rooms-dropdown";

function RoomsSortby({
  perPage,
  searchCount,
  clickDropdown,
  showDropdown,
  clickDisplay,
  setShowDropdown,
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
            Recommended{" "}
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
        setShowDropdown={setShowDropdown}
        showDropdown={showDropdown}
      />
    </div>
  );
}

export default RoomsSortby;
