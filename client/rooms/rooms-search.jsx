import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";

function getDaysBetween(firstDate, secondDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  // const firstDate = new Date();
  // const secondDate = new Date(new Date().setDate(new Date().getDate() + 1));

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
}

function RoomsSearch({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setTotalNights,
}) {
  const [guestDropDown, setGuestDropDown] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const dropdownRef = useRef(null);
  const guestfieldRef = useRef(null);
  const dropdownChildrenRef = useRef(null);
  const dropdownSpanRef = useRef(null);
  const dropdownIRef = useRef(null);

  // handles drop down when you click away
  useEffect(() => {
    dropdownRef.current = document.querySelector(".guest-dropdown");
    dropdownChildrenRef.current = document.querySelectorAll(
      ".guest-dropdown > li"
    );
    dropdownSpanRef.current = document.querySelectorAll(
      ".guest-dropdown > li > span"
    );

    dropdownIRef.current = document.querySelectorAll(
      ".guest-dropdown > li > span > i"
    );

    guestfieldRef.current = document.querySelector(".guest-field");
    // When the user clicks anywhere thats not the dropdown menu and caret, close it
    function closeDropdown(e) {
      if (
        e.target != dropdownRef.current &&
        e.target != guestfieldRef.current &&
        e.target != dropdownChildrenRef.current[0] &&
        e.target != dropdownChildrenRef.current[1] &&
        e.target != dropdownSpanRef.current[0] &&
        e.target != dropdownSpanRef.current[1] &&
        e.target != dropdownSpanRef.current[2] &&
        e.target != dropdownSpanRef.current[3] &&
        e.target != dropdownIRef.current[0] &&
        e.target != dropdownIRef.current[1] &&
        e.target != dropdownIRef.current[2] &&
        e.target != dropdownIRef.current[3]
      ) {
        setGuestDropDown(false);
      }
    }

    window.addEventListener("click", closeDropdown, true);

    return () => {
      window.removeEventListener("click", closeDropdown, true);
    };
  }, []);

  function onDropdownChange() {
    setGuestDropDown(!guestDropDown);
  }

  function onButtonClick(e) {
    e.preventDefault();
    let calculateNights = getDaysBetween(startDate, endDate);
    setTotalNights(calculateNights);
  }

  function incrementAdults() {
    setAdults(adults + 1);
  }

  function decrementAdults() {
    if (adults == 1) {
      return;
    }
    setAdults(adults - 1);
  }

  function incrementChildren() {
    setChildren(children + 1);
  }

  function decrementChildren() {
    if (children == 0) {
      return;
    }
    setChildren(children - 1);
  }

  function onStartDateChange(date) {
    setStartDate(date);
  }

  function onEndDateChange(date) {
    setEndDate(date);
  }

  function onSubmit(e) {
    e.preventDefault();
    let calculateNights = getDaysBetween(startDate, endDate);
    setTotalNights(calculateNights);
  }

  return (
    <div className="rooms-search">
      <form className="hotel-search rooms-h flex">
        <div className="input-group">
          <label htmlFor="">Check in </label>
          <DatePicker
            selected={startDate}
            onChange={onStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            closeOnScroll={true}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Check out</label>
          <DatePicker
            selected={endDate}
            onChange={onEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            closeOnScroll={true}
          />
        </div>
        <div className="input-group guest-field-group">
          <label htmlFor="">Guests</label>
          <input
            onClick={onDropdownChange}
            className="guest-field"
            defaultValue={`${adults} adult, children ${children}`}
            type="text"
          />
          <i onClick={onDropdownChange} className="fas fa-caret-down"></i>
          <ul
            className={
              guestDropDown
                ? "guest-dropdown guest-dropdown-reveal"
                : "guest-dropdown"
            }
          >
            <li>
              <span>Adult</span>{" "}
              <span>
                <i
                  onClick={decrementAdults}
                  className="fas fa-minus-circle"
                ></i>
                {adults}
                <i onClick={incrementAdults} className="fas fa-plus-circle"></i>
              </span>
            </li>
            <li>
              <span>Children</span>
              <span>
                <i
                  onClick={decrementChildren}
                  className="fas fa-minus-circle"
                ></i>
                {children}
                <i
                  onClick={incrementChildren}
                  className="fas fa-plus-circle"
                ></i>
              </span>
            </li>
          </ul>
        </div>
        <button
          onClick={onButtonClick}
          className="rooms-search-button"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default RoomsSearch;
