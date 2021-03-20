import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { useDropDownClickAway, getDaysBetween } from "../component";

function RoomsSearch({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setTotalNights,
  adults,
  setAdults,
  children,
  setChildren,
}) {
  const [guestDropDown, setGuestDropDown] = useState(false);
  useDropDownClickAway(setGuestDropDown);

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
          />
        </div>
        <div className="input-group guest-field-group">
          <label htmlFor="">Guests</label>
          <input
            readOnly={true}
            onClick={onDropdownChange}
            className="guest-field"
            value={`${adults} adult, children ${children}`}
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
