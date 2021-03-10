import React from "react";

function RoomDetailSidebar() {
  return (
    <aside className="side-bar">
      <form className="flex">
        <div className="button-container">
          <button className="book-now">Book Now</button>
        </div>
        <div className="form-group flex">
          <label>Check in</label>
          <input />
        </div>
        <div className="form-group flex">
          <label>Check out</label>
          <input />
        </div>
        <div className="form-group flex">
          <label>Guests</label>
          <input />
        </div>
        <button className="update">Update</button>
      </form>
      <div className="get-help">
        <p>Need our help?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad libero,
          modi voluptate numquam laborum perferendis natus veniam corporis
          magnam beatae!
        </p>
        <p>332-45-4567</p>
        <p>support@greendream.com</p>
      </div>
    </aside>
  );
}

export default RoomDetailSidebar;
