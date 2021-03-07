import React from "react";

function RoomsSearch() {
  return (
    <div className="rooms-search">
      <form className="hotel-search rooms-h flex">
        <div className="input-group">
          <label htmlFor="">Check in </label>
          <input type="text" placeholder="Choose date" />
        </div>
        <div className="input-group">
          <label htmlFor="">Check out</label>
          <input type="text" placeholder="Choose date" />
        </div>
        <div className="input-group">
          <label htmlFor="">Guests</label>
          <input type="text" placeholder="Choose date" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default RoomsSearch;
