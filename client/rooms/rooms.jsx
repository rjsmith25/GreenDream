import React, { useState, useEffect } from "react";
import RoomsPaginate from "./rooms-paginate";
import RoomsSortby from "./rooms-sortby";
import RoomsStackView from "./rooms-stack-view";
import RoomsGridView from "./rooms-grid-view";
import RoomsSideBar from "./rooms-sidebar";
import RoomsSearch from "./rooms-search";
import axios from "axios";

function Rooms() {
  const [display, setDisplay] = useState("stack");
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchCount, setSearchCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilters, setSelectedFilters] = [];
  const [filter, setfilter] = useState({
    "standard-room": false,
    "double-room": false,
    "queen-room": false,
    "king-room": false,
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [totalNights, setTotalNights] = useState(1);

  function clickDropdown() {
    setShowDropdown(!showDropdown);
  }

  function clickDisplay(e) {
    setDisplay(e.target.dataset.display);
  }

  function FilterRooms() {
    let selectedFilters = [];
    let newData;

    if (filter["standard-room"]) {
      selectedFilters.push("Standard Room");
    }

    if (filter["double-room"]) {
      selectedFilters.push("Double Room");
    }

    if (filter["queen-room"]) {
      selectedFilters.push("Queen Room");
    }

    if (filter["king-room"]) {
      selectedFilters.push("King Room");
    }

    if (selectedFilters.length) {
      newData = data.filter((data) => {
        return selectedFilters.includes(data.roomtype);
      });

      setSearchCount(newData.length);
      setPageCount(Math.ceil(newData.length / perPage));
      setCurrentPage(0);
      setRooms(newData);
    } else {
      setSearchCount(data.length);
      setPageCount(Math.ceil(data.length / perPage));
      setCurrentPage(0);
      setRooms(data);
    }
  }

  // for intial render get data from database
  useEffect(() => {
    axios
      .get("/api/rooms")
      .then((res) => {
        setSearchCount(res.data.length);
        setPageCount(Math.ceil(res.data.length / perPage));
        setData(res.data);
        setRooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // on filter changes
  useEffect(() => {
    if (data.length) {
      FilterRooms();
    }
  }, [filter]);

  function handlePageClick(data) {
    let selected = data.selected;
    console.log(selected);
    setCurrentPage(selected);
  }

  let endIndex = (currentPage + 1) * perPage;
  let startIndex = endIndex - perPage;
  let currentRooms = rooms.slice(startIndex, endIndex);

  return (
    <div className="container">
      <RoomsSearch
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTotalNights={setTotalNights}
      />
      <div className="rooms-main-content grid">
        <RoomsSideBar filter={filter} setfilter={setfilter} />
        <div className="content">
          <RoomsSortby
            perPage={perPage}
            searchCount={searchCount}
            clickDropdown={clickDropdown}
            setShowDropdown={setShowDropdown}
            showDropdown={showDropdown}
            clickDisplay={clickDisplay}
          />
          {display === "stack" ? (
            <RoomsStackView
              currentRooms={currentRooms}
              totalNights={totalNights}
            />
          ) : (
            <RoomsGridView currentRooms={currentRooms} />
          )}
          <RoomsPaginate
            currentPage={currentPage}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Rooms;
