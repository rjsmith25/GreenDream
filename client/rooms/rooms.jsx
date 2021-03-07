import React, { useState, useEffect } from "react";
import RoomsPaginate from "./rooms-paginate";
import RoomsSortby from "./rooms-sortby";
import RoomsStackView from "./rooms-stack-view";
import RoomsGridView from "./rooms-grid-view";
import RoomsSideBar from "./rooms-sidebar";
import RoomsSearch from "./rooms-search";
import axios from "axios";

function Rooms() {
  const [perPage, setPerPage] = useState(10);
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

  // for intial render get data from database
  useEffect(() => {
    axios
      .get("/api/rooms")
      .then((res) => {
        setSearchCount(res.data.length);
        setPageCount(Math.ceil(res.data.length / perPage));
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handlePageClick(data) {
    let selected = data.selected;
    setCurrentPage(selected + 1);
  }

  var endIndex = currentPage * perPage;
  var startIndex = endIndex - perPage;
  var currentRooms = data.slice(startIndex, endIndex);

  return (
    <div className="container">
      <RoomsSearch />
      <div className="rooms-main-content grid">
        <RoomsSideBar />
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
