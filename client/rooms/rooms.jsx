import React, { useState, useEffect, useRef } from "react";
import RoomsPaginate from "./rooms-paginate";
import RoomsSortby from "./rooms-sortby";
import RoomsStackView from "./rooms-stack-view";
import RoomsGridView from "./rooms-grid-view";
import RoomsSideBar from "./rooms-sidebar";
import RoomsSearch from "./rooms-search";
import axios from "axios";

function Rooms(props) {
  const contentRef = useRef(null);
  const [display, setDisplay] = useState("stack");
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [data, setData] = useState(props.data || []);
  const [rooms, setRooms] = useState(props.rooms.sort(sortPriceLow) || []);
  const [pageCount, setPageCount] = useState(
    Math.ceil(data.length / perPage) || 0
  );
  const [searchCount, setSearchCount] = useState(data.length || 0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filter, setfilter] = useState(() => {
    if (props.room_type === "standard-room") {
      return {
        "standard-room": true,
        "double-room": false,
        "queen-room": false,
        "king-room": false,
      };
    }

    if (props.room_type === "queen-room") {
      return {
        "standard-room": false,
        "double-room": false,
        "queen-room": true,
        "king-room": false,
      };
    }

    if (props.room_type === "king-room") {
      return {
        "standard-room": false,
        "double-room": false,
        "queen-room": false,
        "king-room": true,
      };
    }

    if (props.room_type === "double-room") {
      return {
        "standard-room": false,
        "double-room": true,
        "queen-room": false,
        "king-room": false,
      };
    }

    return {
      "standard-room": false,
      "double-room": false,
      "queen-room": false,
      "king-room": false,
    };
  });
  const [startDate, setStartDate] = useState(() => {
    return props.startDate
      ? new Date(props.startDate.replace(/-/g, "/"))
      : new Date();
  });
  const [endDate, setEndDate] = useState(() => {
    return props.endDate
      ? new Date(props.endDate.replace(/-/g, "/"))
      : new Date(new Date().setDate(new Date().getDate() + 1));
  });
  const [adults, setAdults] = useState(+props.adults || 2);
  const [children, setChildren] = useState(+props.children || 0);
  const [totalNights, setTotalNights] = useState(1);
  const [selected, setSelected] = useState("plow");

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

  // for intial render
  useEffect(() => {
    // trigger filter change
    if (props.room_type) {
      setfilter({ ...filter });
    }
    //reference scrollIntoView
    contentRef.current = document.querySelector(".hotel-search");
  }, []);

  useEffect(() => {
    FilterRooms();
  }, [filter]);

  useEffect(() => {
    if (selected === "plow") {
      setRooms([...rooms.sort(sortPriceLow)]);
    }

    if (selected === "phigh") {
      setRooms([...rooms.sort(sortPriceHigh)]);
    }

    if (selected === "rlow") {
      setRooms([...rooms.sort(sortRatingLow)]);
    }

    if (selected === "rhigh") {
      setRooms([...rooms.sort(sortRatingHigh)]);
    }
  }, [selected]);

  function sortPriceLow(a, b) {
    return +a.price - +b.price;
  }

  function sortPriceHigh(a, b) {
    return +b.price - +a.price;
  }

  function sortRatingLow(a, b) {
    return a.rating - b.rating;
  }

  function sortRatingHigh(a, b) {
    return b.rating - a.rating;
  }

  function handlePageClick(data) {
    let selected = data.selected;
    setCurrentPage(selected);
    contentRef.current.scrollIntoView({ behavior: "smooth" });
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
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
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
            selected={selected}
            setSelected={setSelected}
          />
          {display === "stack" ? (
            <RoomsStackView
              adults={adults}
              children={children}
              startDate={startDate}
              endDate={endDate}
              currentRooms={currentRooms}
              totalNights={totalNights}
            />
          ) : (
            <RoomsGridView
              adults={adults}
              children={children}
              startDate={startDate}
              endDate={endDate}
              currentRooms={currentRooms}
            />
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
