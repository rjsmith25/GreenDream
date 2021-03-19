import React, { useState, useEffect } from "react";

function GeneralHeader({ title }) {
  const [dropDown, setDropDown] = useState(false);
  const [windowSize, setWindowSize] = useState(null);

  function onNavDropDownClick() {
    setDropDown(!dropDown);
  }

  useEffect(() => {
    setWindowSize(window.innerWidth);
    if (window.innerWidth <= 600) {
      setDropDown(false);
    }
    if (window.innerWidth > 600) {
      setDropDown(true);
    }
    function windowResize() {
      if (window.innerWidth > 600) {
        setDropDown(true);
      }

      if (window.innerWidth <= 600) {
        setDropDown(false);
      }
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="header-top flex">
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
      </div>
      {windowSize <= 600 && dropDown ? null : (
        <div className="header-lower-2 flex">
          <h2>{title}</h2>
        </div>
      )}
    </div>
  );
}

export default GeneralHeader;
