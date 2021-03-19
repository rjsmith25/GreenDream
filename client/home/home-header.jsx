import React, { useState, useEffect } from "react";

function HomeHeader() {
  const [dropDown, setDropDown] = useState(true);

  function onNavDropDownClick() {
    setDropDown(!dropDown);
  }

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDropDown(false);
    }
    function windowResize() {
      if (window.innerWidth > 600) {
        setDropDown(true);
      }

      if (window.innerWidth <= 600) {
        setDropDown(false);
      }
    }
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <>
      <div className="brand-name">
        <a href="/">
          <h1>GreenDream </h1>
        </a>
      </div>
      <nav className={dropDown ? "open-nav" : "close-nav"}>
        <ul className="nav-list flex">
          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="/about">About Us </a>
          </li>
          <li>
            <a href="/rooms">Rooms </a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <i onClick={onNavDropDownClick} className="fas fa-bars fa-2x"></i>
    </>
  );
}

export default HomeHeader;
