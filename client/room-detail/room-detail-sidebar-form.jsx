import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";

function RoomDetailSidebarForm({
  OpenDetailModal,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  adults,
  setAdults,
  children,
  setChildren,
}) {
  const [guestDropDown, setGuestDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const guestfieldRef = useRef(null);
  const dropdownChildrenRef = useRef(null);
  const dropdownSpanRef = useRef(null);
  const dropdownIRef = useRef(null);
  const caretDown = useRef(null);

  // handles drop down when you click away
  useEffect(() => {
    caretDown.current = document.querySelector(".fa-caret-down");
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
        e.target != caretDown.current &&
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
    <form className="room-detail-form flex">
      <div className="button-container">
        <button onClick={OpenDetailModal} className="book-now">
          Book Now
        </button>
      </div>
      <div className="form-group flex">
        <label>Check in</label>
        <DatePicker
          selected={startDate}
          onChange={onStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          closeOnScroll={true}
        />
      </div>
      <div className="form-group flex">
        <label>Check out</label>
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
      <div className="form-group guest-field-group flex">
        <label>Guests</label>
        <input
          onClick={onDropdownChange}
          className="guest-field"
          readOnly={true}
          value={`${adults} adult, children ${children}`}
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
            <span>Adult</span>
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
      <button className="update">Update</button>
    </form>
  );
}

export default RoomDetailSidebarForm;
