import { useEffect, useRef } from "react";

function useDropDownClickAway(setGuestDropDown) {
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
}

export default useDropDownClickAway;
