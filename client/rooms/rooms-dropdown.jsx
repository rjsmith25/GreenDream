import React, { useEffect, useRef } from "react";

function RoomsDropDown({ showDropdown, setShowDropdown }) {
  const dropdownRef = useRef(null);
  const caretDownRef = useRef(null);

  // handles drop down when you click away
  useEffect(() => {
    dropdownRef.current = document.querySelector(".recommended-dropdown");
    caretDownRef.current = document.querySelector(
      ".recommended .fa-caret-down"
    );
    // When the user clicks anywhere thats not the dropdown menu and caret, close it
    function closeDropdown(e) {
      if (e.target != dropdownRef.current && e.target != caretDownRef.current) {
        setShowDropdown(false);
      }
    }

    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <ul
      className={
        showDropdown
          ? "recommended-dropdown reveal-dropdown"
          : "recommended-dropdown"
      }
    >
      <li>Recommended</li>
      <li>Price (low to high)</li>
      <li>Price (high to low)</li>
      <li>Rate (1 to 5)</li>
      <li>Rate (5 to 1)</li>
    </ul>
  );
}

export default RoomsDropDown;
