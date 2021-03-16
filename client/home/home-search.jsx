import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useDropDownClickAway } from "../component";
let BASE_URL;

function formatDate(date_object) {
  let date = date_object.getDate();
  let year = date_object.getFullYear();
  let month = date_object.getMonth() + 1;

  return `${month}-${date}-${year}`;
}

function HomeSearch() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [guestDropDown, setGuestDropDown] = useState(false);

  useDropDownClickAway(setGuestDropDown);

  useEffect(() => {
    BASE_URL =
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "");
  }, []);

  function onSearchClick(e) {
    e.preventDefault();
    const params = new URLSearchParams({
      start_date: formatDate(startDate),
      end_date: formatDate(endDate),
      adults: adults,
      children: children,
    });
    window.location.href = `${BASE_URL}/rooms?${params.toString()}`;
  }

  function onStartDateChange(date) {
    setStartDate(date);
  }

  function onEndDateChange(date) {
    setEndDate(date);
  }

  function onDropdownChange() {
    setGuestDropDown(!guestDropDown);
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

  return (
    <>
      <div className="input-group">
        <label htmlFor="">Check in</label>
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
        <label htmlFor="">Check out </label>
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
        <label htmlFor="">Guests </label>
        <input
          onClick={onDropdownChange}
          readOnly={true}
          value={`${adults} adult, children ${children}`}
          className="guest-field"
          type="text"
          placeholder="Choose date"
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
              <i onClick={decrementAdults} className="fas fa-minus-circle"></i>
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
              <i onClick={incrementChildren} className="fas fa-plus-circle"></i>
            </span>
          </li>
        </ul>
      </div>
      <button onClick={onSearchClick} className="home-search" type="submit">
        check availability
      </button>
    </>
  );
}

export default HomeSearch;
