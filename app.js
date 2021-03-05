/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.src.js":
/*!********************!*\
  !*** ./app.src.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server */ \"./server/index.js\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // express app\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // disable x-powered by\n\napp.disable(\"x-powered-by\"); // set up port to listen on\n\napp.set(\"port\", process.env.PORT || 3000); // view engine setup\n\napp.set(\"views\", path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, \"server\"));\napp.set(\"view engine\", \"pug\"); // serve static files\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"./public\")); // Parse incoming post request\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json()); // setup server routing\n\napp.use(\"/\", (_server__WEBPACK_IMPORTED_MODULE_2___default())); // catch 404 and forward to error handler\n\napp.use((req, res, next) => {\n  var err = new Error(\"Not Found\");\n  err.status = 404;\n  next(err);\n}); // log general uncaught promise errors\n\nprocess.on(\"unhandledRejection\", reason => {\n  console.log(\"Unhandled Rejection at:\", reason.stack || reason);\n}); // start server\n\nconst startServer = app.listen(app.get(\"port\"), () => {\n  console.log(`listening on port: ${startServer.address().port}`);\n});\n\n//# sourceURL=webpack://hotelx/./app.src.js?");

/***/ }),

/***/ "./client/rooms/rooms-dropdown.jsx":
/*!*****************************************!*\
  !*** ./client/rooms/rooms-dropdown.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsDropDown({\n  showDropdown\n}) {\n  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const caretDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // handles drop down when you click away\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dropdownRef.current = document.querySelector(\".recommended-dropdown\");\n    caretDownRef.current = document.querySelector(\".recommended .fa-caret-down\"); // When the user clicks anywhere thats not the dropdown menu and caret, close it\n\n    function closeModal(e) {\n      if (e.target != dropdownRef.current && e.target != caretDownRef.current) {\n        dropdownRef.current.classList.remove(\"reveal-dropdown\");\n      }\n    }\n\n    window.addEventListener(\"click\", closeModal);\n    return () => {\n      window.removeEventListener(\"click\", closeModal);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: showDropdown ? \"recommended-dropdown reveal-dropdown\" : \"recommended-dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Recommended\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Price (low to high)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Price (high to low)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Rate (1 to 5)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Rate (5 to 1)\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsDropDown);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-dropdown.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-grid-view.jsx":
/*!******************************************!*\
  !*** ./client/rooms/rooms-grid-view.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsGridView({\n  currentRooms\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grid-view grid\"\n  }, currentRooms.map((room, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: \"room-card\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"far fa-heart\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-card-pic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"img-responsive\",\n      src: \"https://placeimg.com/640/480/arch\",\n      alt: \"hotel\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-card-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, room.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"ratings-reviews\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star-half-alt\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"review-count\"\n    }, room.reviews, \" Reviews\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"pricing\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$\", room.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"night\"))));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsGridView);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-grid-view.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-paginate.jsx":
/*!*****************************************!*\
  !*** ./client/rooms/rooms-paginate.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ \"react-paginate\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction RoomsPaginate({\n  pageCount,\n  handlePageClick\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_paginate__WEBPACK_IMPORTED_MODULE_1___default()), {\n    previousLabel: \"< prev\",\n    containerClassName: \"rooms-pagination\",\n    nextLabel: \"next >\",\n    breakLabel: \"...\",\n    breakClassName: \"break-me\",\n    pageCount: pageCount,\n    pageRangeDisplayed: 3,\n    marginPagesDisplayed: 2,\n    activeClassName: \"active\",\n    onPageChange: handlePageClick\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsPaginate);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-paginate.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-sortby.jsx":
/*!***************************************!*\
  !*** ./client/rooms/rooms-sortby.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rooms_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-dropdown */ \"./client/rooms/rooms-dropdown.jsx\");\n\n\n\nfunction RoomsSortby({\n  perPage,\n  searchCount,\n  clickDropdown,\n  showDropdown,\n  clickDisplay\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sortby\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"results\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Showing 1-\", perPage, \" of \", searchCount, \" results\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"options\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"recommended\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Recommended\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: clickDropdown,\n    className: \"fas fa-caret-down\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"display\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: clickDisplay,\n    \"data-display\": \"grid\",\n    className: \"fas fa-th-large\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: clickDisplay,\n    \"data-display\": \"stack\",\n    className: \"fas fa-bars\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_dropdown__WEBPACK_IMPORTED_MODULE_1__.default, {\n    showDropdown: showDropdown\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsSortby);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-sortby.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-stack-view.jsx":
/*!*******************************************!*\
  !*** ./client/rooms/rooms-stack-view.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsStackView({\n  currentRooms\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"stack-view\"\n  }, currentRooms.map((room, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: \"room\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"far fa-heart\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-pic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"responsive-img\",\n      src: \"https://placeimg.com/640/480/arch\",\n      alt: \"a hotel room\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, room.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"ratings\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star-half-alt fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"review-count\"\n    }, room.reviews, \" Reviews\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"bed\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Bed\"), \": \", room.beds, \" king and 1 sofabed\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Max\"), \": 4 People\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-pricing\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: \"price\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"price-font\"\n    }, \"$\", room.price), \"/night\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, \"Choose\")));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsStackView);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-stack-view.jsx?");

/***/ }),

/***/ "./client/rooms/rooms.jsx":
/*!********************************!*\
  !*** ./client/rooms/rooms.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rooms_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-paginate */ \"./client/rooms/rooms-paginate.jsx\");\n/* harmony import */ var _rooms_sortby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms-sortby */ \"./client/rooms/rooms-sortby.jsx\");\n/* harmony import */ var _rooms_stack_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-stack-view */ \"./client/rooms/rooms-stack-view.jsx\");\n/* harmony import */ var _rooms_grid_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms-grid-view */ \"./client/rooms/rooms-grid-view.jsx\");\n\n\n\n\n\n\nfunction Rooms() {\n  const [perPage, setPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(6);\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [searchCount, setSearchCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"stack\");\n\n  function clickDropdown() {\n    setShowDropdown(!showDropdown);\n  }\n\n  function clickDisplay(e) {\n    setDisplay(e.target.dataset.display);\n  } // for intial render\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    let rooms = [];\n    let roomData = {\n      title: \"Family Room\",\n      reviews: 156,\n      beds: 2,\n      price: 102\n    };\n\n    for (let i = 0; i < 100; i++) {\n      rooms.push(roomData);\n    }\n\n    setSearchCount(rooms.length);\n    setPageCount(Math.ceil(rooms.length / perPage));\n    setData(rooms);\n  }, []); // change numbers of items per Page to show based on display (grid view or stack view)\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (data === 0) {\n      return;\n    }\n\n    if (display === \"grid\") {\n      setPerPage(9);\n      setPageCount(Math.ceil(data.length / 9));\n    } else {\n      setPerPage(6);\n      setPageCount(Math.ceil(data.length / 6));\n    }\n  }, [display, data]);\n\n  function handlePageClick(data) {\n    let selected = data.selected;\n    setCurrentPage(selected + 1);\n  }\n\n  if (currentPage > pageCount && display === \"grid\") {\n    var endIndex = pageCount * perPage;\n    var startIndex = endIndex - perPage;\n    var currentRooms = data.slice(startIndex, endIndex);\n  } else {\n    var endIndex = currentPage * perPage;\n    var startIndex = endIndex - perPage;\n    var currentRooms = data.slice(startIndex, endIndex);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rooms-search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"hotel-search rooms-h flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check in \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Choose date\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check out\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Choose date\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Guests\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Choose date\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\"\n  }, \"Update\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rooms-main-content grid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sidebar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-type\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Room Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"deluxe-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"deluxe-room\",\n    name: \"deluxe-room\",\n    value: \"Deluxe Room\"\n  }), \"Deluxe Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"luxury-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"luxury-room\",\n    name: \"luxury-room\",\n    value: \"Luxury Room\"\n  }), \"Luxury Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"family-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"family-room\",\n    name: \"family-room\",\n    value: \"Family Room\"\n  }), \"Family Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"couple-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"couple-room\",\n    name: \"couple-room\",\n    value: \"Couple Room\"\n  }), \"Couple Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"standard-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"standard-room\",\n    name: \"standard-room\",\n    value: \"Standard Room\"\n  }), \"Standard Room\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_sortby__WEBPACK_IMPORTED_MODULE_2__.default, {\n    perPage: perPage,\n    searchCount: searchCount,\n    clickDropdown: clickDropdown,\n    showDropdown: showDropdown,\n    clickDisplay: clickDisplay\n  }), display === \"stack\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_stack_view__WEBPACK_IMPORTED_MODULE_3__.default, {\n    currentRooms: currentRooms\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_grid_view__WEBPACK_IMPORTED_MODULE_4__.default, {\n    currentRooms: currentRooms\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_paginate__WEBPACK_IMPORTED_MODULE_1__.default, {\n    pageCount: pageCount,\n    handlePageClick: handlePageClick\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rooms);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms.jsx?");

/***/ }),

/***/ "./server/About/about.controller.js":
/*!******************************************!*\
  !*** ./server/About/about.controller.js ***!
  \******************************************/
/***/ ((module) => {

eval("function About(req, res) {\n  res.render(\"About/about.pug\");\n}\n\nmodule.exports = About;\n\n//# sourceURL=webpack://hotelx/./server/About/about.controller.js?");

/***/ }),

/***/ "./server/About/about.route.js":
/*!*************************************!*\
  !*** ./server/About/about.route.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst aboutController = __webpack_require__(/*! ./about.controller */ \"./server/About/about.controller.js\");\n\nconst aboutRouter = express.Router();\naboutRouter.get(\"/\", aboutController);\nmodule.exports = aboutRouter;\n\n//# sourceURL=webpack://hotelx/./server/About/about.route.js?");

/***/ }),

/***/ "./server/About/index.js":
/*!*******************************!*\
  !*** ./server/About/index.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./about.route */ \"./server/About/about.route.js\");\n\n//# sourceURL=webpack://hotelx/./server/About/index.js?");

/***/ }),

/***/ "./server/Contact/contact.controller.js":
/*!**********************************************!*\
  !*** ./server/Contact/contact.controller.js ***!
  \**********************************************/
/***/ ((module) => {

eval("function Contact(req, res) {\n  res.render(\"Contact/contact.pug\");\n}\n\nmodule.exports = Contact;\n\n//# sourceURL=webpack://hotelx/./server/Contact/contact.controller.js?");

/***/ }),

/***/ "./server/Contact/contact.route.js":
/*!*****************************************!*\
  !*** ./server/Contact/contact.route.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst contactController = __webpack_require__(/*! ./contact.controller */ \"./server/Contact/contact.controller.js\");\n\nconst contactRouter = express.Router();\ncontactRouter.get(\"/\", contactController);\nmodule.exports = contactRouter;\n\n//# sourceURL=webpack://hotelx/./server/Contact/contact.route.js?");

/***/ }),

/***/ "./server/Contact/index.js":
/*!*********************************!*\
  !*** ./server/Contact/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./contact.route */ \"./server/Contact/contact.route.js\");\n\n//# sourceURL=webpack://hotelx/./server/Contact/index.js?");

/***/ }),

/***/ "./server/Home/home.controller.js":
/*!****************************************!*\
  !*** ./server/Home/home.controller.js ***!
  \****************************************/
/***/ ((module) => {

eval("function Home(req, res) {\n  res.render(\"Home/home.pug\");\n}\n\nmodule.exports = Home;\n\n//# sourceURL=webpack://hotelx/./server/Home/home.controller.js?");

/***/ }),

/***/ "./server/Home/home.route.js":
/*!***********************************!*\
  !*** ./server/Home/home.route.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst homeController = __webpack_require__(/*! ./home.controller */ \"./server/Home/home.controller.js\");\n\nconst homeRouter = express.Router();\nhomeRouter.get(\"/\", homeController);\nmodule.exports = homeRouter;\n\n//# sourceURL=webpack://hotelx/./server/Home/home.route.js?");

/***/ }),

/***/ "./server/Home/index.js":
/*!******************************!*\
  !*** ./server/Home/index.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./home.route */ \"./server/Home/home.route.js\");\n\n//# sourceURL=webpack://hotelx/./server/Home/index.js?");

/***/ }),

/***/ "./server/Rooms/index.js":
/*!*******************************!*\
  !*** ./server/Rooms/index.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./rooms.route */ \"./server/Rooms/rooms.route.js\");\n\n//# sourceURL=webpack://hotelx/./server/Rooms/index.js?");

/***/ }),

/***/ "./server/Rooms/rooms.controller.js":
/*!******************************************!*\
  !*** ./server/Rooms/rooms.controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_rooms_rooms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/rooms/rooms */ \"./client/rooms/rooms.jsx\");\n\n\n\n\nfunction Rooms(req, res) {\n  const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_rooms_rooms__WEBPACK_IMPORTED_MODULE_2__.default, null));\n  res.render(\"Rooms/rooms.pug\", {\n    content\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rooms);\n\n//# sourceURL=webpack://hotelx/./server/Rooms/rooms.controller.js?");

/***/ }),

/***/ "./server/Rooms/rooms.route.js":
/*!*************************************!*\
  !*** ./server/Rooms/rooms.route.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst roomsController = __webpack_require__(/*! ./rooms.controller */ \"./server/Rooms/rooms.controller.js\").default;\n\nconst roomsRouter = express.Router();\nroomsRouter.get(\"/\", roomsController);\nmodule.exports = roomsRouter;\n\n//# sourceURL=webpack://hotelx/./server/Rooms/rooms.route.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./server.routes */ \"./server/server.routes.js\");\n\n//# sourceURL=webpack://hotelx/./server/index.js?");

/***/ }),

/***/ "./server/server.routes.js":
/*!*********************************!*\
  !*** ./server/server.routes.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// setup all server routes\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst serverRouter = express.Router();\n\nconst homeRoute = __webpack_require__(/*! ./Home */ \"./server/Home/index.js\");\n\nconst aboutRoute = __webpack_require__(/*! ./About */ \"./server/About/index.js\");\n\nconst contactRoute = __webpack_require__(/*! ./Contact */ \"./server/Contact/index.js\");\n\nconst roomsRoute = __webpack_require__(/*! ./Rooms */ \"./server/Rooms/index.js\");\n\nserverRouter.use(\"/\", homeRoute);\nserverRouter.use(\"/about\", aboutRoute);\nserverRouter.use(\"/contact\", contactRoute);\nserverRouter.use(\"/rooms\", roomsRoute);\nmodule.exports = serverRouter;\n\n//# sourceURL=webpack://hotelx/./server/server.routes.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-paginate":
/*!*********************************!*\
  !*** external "react-paginate" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-paginate");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.src.js");
/******/ 	
/******/ })()
;