import React, { useState, useEffect } from "react";
import RoomsPaginate from "./rooms-paginate";
import RoomsSortby from "./rooms-sortby";
import RoomsStackView from "./rooms-stack-view";
import RoomsGridView from "./rooms-grid-view";

function Rooms() {
  const [perPage, setPerPage] = useState(6);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchCount, setSearchCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [display, setDisplay] = useState("stack");

  function clickDropdown() {
    setShowDropdown(!showDropdown);
  }

  function clickDisplay(e) {
    setDisplay(e.target.dataset.display);
  }

  // for intial render
  useEffect(() => {
    let rooms = [];
    let roomData = {
      title: "Family Room",
      reviews: 156,
      beds: 2,
      price: 102,
    };
    for (let i = 0; i < 100; i++) {
      rooms.push(roomData);
    }

    setSearchCount(rooms.length);
    setPageCount(Math.ceil(rooms.length / perPage));
    setData(rooms);
  }, []);

  // change numbers of items per Page to show based on display (grid view or stack view)
  useEffect(() => {
    if (data === 0) {
      return;
    }
    if (display === "grid") {
      setPerPage(9);
      setPageCount(Math.ceil(data.length / 9));
    } else {
      setPerPage(6);
      setPageCount(Math.ceil(data.length / 6));
    }
  }, [display, data]);

  function handlePageClick(data) {
    let selected = data.selected;
    setCurrentPage(selected + 1);
  }

  if (currentPage > pageCount && display === "grid") {
    var endIndex = pageCount * perPage;
    var startIndex = endIndex - perPage;
    var currentRooms = data.slice(startIndex, endIndex);
  } else {
    var endIndex = currentPage * perPage;
    var startIndex = endIndex - perPage;
    var currentRooms = data.slice(startIndex, endIndex);
  }

  return (
    <div className="container">
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
      <div className="rooms-main-content grid">
        <div className="sidebar">
          <div className="room-type">
            <p>Room Type</p>
            <label htmlFor="deluxe-room">
              <input
                type="checkbox"
                id="deluxe-room"
                name="deluxe-room"
                value="Deluxe Room"
              />
              Deluxe Room
            </label>
            <label htmlFor="luxury-room">
              <input
                type="checkbox"
                id="luxury-room"
                name="luxury-room"
                value="Luxury Room"
              />
              Luxury Room
            </label>
            <label htmlFor="family-room">
              <input
                type="checkbox"
                id="family-room"
                name="family-room"
                value="Family Room"
              />
              Family Room
            </label>
            <label htmlFor="couple-room">
              <input
                type="checkbox"
                id="couple-room"
                name="couple-room"
                value="Couple Room"
              />
              Couple Room
            </label>
            <label htmlFor="standard-room">
              <input
                type="checkbox"
                id="standard-room"
                name="standard-room"
                value="Standard Room"
              />
              Standard Room
            </label>
          </div>
        </div>
        <div className="content">
          <RoomsSortby
            perPage={perPage}
            searchCount={searchCount}
            clickDropdown={clickDropdown}
            showDropdown={showDropdown}
            clickDisplay={clickDisplay}
          />
          {display === "stack" ? (
            <RoomsStackView currentRooms={currentRooms} />
          ) : (
            <RoomsGridView currentRooms={currentRooms} />
          )}
          <RoomsPaginate
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Rooms;
