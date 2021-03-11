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

/***/ "./api/api.routes.js":
/*!***************************!*\
  !*** ./api/api.routes.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst roomRouter = __webpack_require__(/*! ./room */ \"./api/room/index.js\");\n\nconst apiRouter = express.Router();\napiRouter.use(\"/rooms\", roomRouter);\nmodule.exports = apiRouter;\n\n//# sourceURL=webpack://hotelx/./api/api.routes.js?");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./api.routes */ \"./api/api.routes.js\");\n\n//# sourceURL=webpack://hotelx/./api/index.js?");

/***/ }),

/***/ "./api/room/index.js":
/*!***************************!*\
  !*** ./api/room/index.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./room.route */ \"./api/room/room.route.js\");\n\n//# sourceURL=webpack://hotelx/./api/room/index.js?");

/***/ }),

/***/ "./api/room/room.controller.js":
/*!*************************************!*\
  !*** ./api/room/room.controller.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Room = __webpack_require__(/*! ./room.model */ \"./api/room/room.model.js\");\n\nasync function getAllRooms(req, res) {\n  try {\n    let rooms = await Room.find();\n    res.status(200).json(rooms);\n  } catch (e) {\n    res.status(500).json({\n      message: \"Unable to get rooms\"\n    });\n  }\n}\n\nasync function getRoomByID(req, res) {\n  const {\n    room_id\n  } = req.params;\n\n  try {\n    if (!room_id) {\n      res.status(400).json({\n        message: \"Missing room id\"\n      });\n    }\n\n    let room = await Room.findById(room_id);\n\n    if (!room) {\n      res.status(404).json({\n        message: \"Unable to find room\"\n      });\n    }\n\n    res.status(200).json(room);\n  } catch (e) {\n    res.status(500).json({\n      message: \"Unable to get room\"\n    });\n  }\n}\n\nmodule.exports = {\n  getAllRooms,\n  getRoomByID\n};\n\n//# sourceURL=webpack://hotelx/./api/room/room.controller.js?");

/***/ }),

/***/ "./api/room/room.model.js":
/*!********************************!*\
  !*** ./api/room/room.model.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const db = __webpack_require__(/*! ../../data/dbConfig */ \"./data/dbConfig.js\");\n\nasync function find() {\n  try {\n    let [rooms, roomsAmenities, roomsPhotos, roomsFacilities] = await Promise.all([db(\"rooms\"), db(\"rooms\").select(\"room_id\", \"amenity\").join(\"amenities\", \"rooms.id\", \"=\", \"amenities.room_id\"), db(\"rooms\").select(\"room_id\", \"image_url\").join(\"photos\", \"rooms.id\", \"=\", \"photos.room_id\"), db(\"rooms\").select(\"room_id\", \"facility\").join(\"facilities\", \"rooms.id\", \"=\", \"facilities.room_id\")]);\n\n    for (let i = 0; i < rooms.length; i++) {\n      let amenities = [];\n      let photos = [];\n      let facilities = []; // link amenities to room\n\n      for (let j = 0; j < roomsAmenities.length; j++) {\n        if (rooms[i].id === roomsAmenities[j].room_id) {\n          amenities.push(roomsAmenities[j].amenity);\n        }\n      } // link photos to room\n\n\n      for (let k = 0; k < roomsPhotos.length; k++) {\n        if (rooms[i].id === roomsPhotos[k].room_id) {\n          photos.push(roomsPhotos[k].image_url);\n        }\n      } // link facilities to room\n\n\n      for (let l = 0; l < roomsFacilities.length; l++) {\n        if (rooms[i].id === roomsFacilities[l].room_id) {\n          facilities.push(roomsFacilities[l].facility);\n        }\n      }\n\n      rooms[i].photos = photos;\n      rooms[i].amenities = amenities;\n      rooms[i].facilities = facilities;\n    }\n\n    return rooms;\n  } catch (e) {\n    return e;\n  }\n}\n\nasync function findById(id) {\n  try {\n    let [room, amenities, photos, facilities] = await Promise.all([db(\"rooms\").where({\n      id: id\n    }).first(), db(\"rooms\").select(\"amenity\").join(\"amenities\", \"rooms.id\", \"=\", \"amenities.room_id\").where(\"room_id\", id), db(\"rooms\").select(\"image_url\").join(\"photos\", \"rooms.id\", \"=\", \"photos.room_id\").where(\"room_id\", id), db(\"rooms\").select(\"facility\").join(\"facilities\", \"rooms.id\", \"=\", \"facilities.room_id\").where(\"room_id\", id)]);\n    amenities = amenities.map(data => {\n      return data.amenity;\n    });\n    photos = photos.map(data => {\n      return data.image_url;\n    });\n    facilities = facilities.map(data => {\n      return data.facility;\n    });\n    room.photos = photos;\n    room.amenities = amenities;\n    room.facilities = facilities;\n    return room;\n  } catch (e) {\n    return e;\n  }\n}\n\nmodule.exports = {\n  find,\n  findById\n};\n\n//# sourceURL=webpack://hotelx/./api/room/room.model.js?");

/***/ }),

/***/ "./api/room/room.route.js":
/*!********************************!*\
  !*** ./api/room/room.route.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst {\n  getAllRooms,\n  getRoomByID\n} = __webpack_require__(/*! ./room.controller */ \"./api/room/room.controller.js\");\n\nconst roomRouter = express.Router();\nroomRouter.get(\"/\", getAllRooms);\nroomRouter.get(\"/:room_id\", getRoomByID);\nmodule.exports = roomRouter;\n\n//# sourceURL=webpack://hotelx/./api/room/room.route.js?");

/***/ }),

/***/ "./app.src.js":
/*!********************!*\
  !*** ./app.src.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server */ \"./server/index.js\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ \"./api/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n // express app\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // disable x-powered by\n\napp.disable(\"x-powered-by\"); // set up port to listen on\n\napp.set(\"port\", process.env.PORT || 3000); // view engine setup\n\napp.set(\"views\", path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, \"server\"));\napp.set(\"view engine\", \"pug\"); // serve static files\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"./public\")); // reduce the size of the response body for performance\n\napp.use(compression__WEBPACK_IMPORTED_MODULE_2___default()()); // Parse incoming post request\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json()); // setup server routing\n\napp.use(\"/\", (_server__WEBPACK_IMPORTED_MODULE_3___default()));\napp.use(\"/api\", (_api__WEBPACK_IMPORTED_MODULE_4___default())); // catch 404 and forward to error handler\n\napp.use((req, res, next) => {\n  var err = new Error(\"Not Found\");\n  err.status = 404;\n  next(err);\n}); // handle 404 if page does not exist\n\napp.use((err, req, res, next) => {\n  res.status(err.status || 404);\n  res.render(\"Components/error.pug\");\n}); // log general uncaught promise errors\n\nprocess.on(\"unhandledRejection\", reason => {\n  console.log(\"Unhandled Rejection at:\", reason.stack || reason);\n}); // start server\n\nconst startServer = app.listen(app.get(\"port\"), () => {\n  console.log(`listening on port: ${startServer.address().port}`);\n});\n\n//# sourceURL=webpack://hotelx/./app.src.js?");

/***/ }),

/***/ "./client/room-detail/room-detail-content.jsx":
/*!****************************************************!*\
  !*** ./client/room-detail/room-detail-content.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _room_detail_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-detail-description */ \"./client/room-detail/room-detail-description.jsx\");\n/* harmony import */ var _room_detail_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-detail-reviews */ \"./client/room-detail/room-detail-reviews.jsx\");\n/* harmony import */ var _room_detail_photos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-detail-photos */ \"./client/room-detail/room-detail-photos.jsx\");\n\n\n\n\n\nfunction RoomDetailContent({\n  selectedTab,\n  room\n}) {\n  switch (selectedTab) {\n    case \"Description\":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_description__WEBPACK_IMPORTED_MODULE_1__.default, {\n        room: room\n      });\n\n    case \"Reviews\":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_reviews__WEBPACK_IMPORTED_MODULE_2__.default, null);\n\n    case \"Photos\":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_photos__WEBPACK_IMPORTED_MODULE_3__.default, {\n        photos: room.photos\n      });\n\n    default:\n      null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailContent);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-content.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-description.jsx":
/*!********************************************************!*\
  !*** ./client/room-detail/room-detail-description.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomDetailDescription({\n  room\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"About\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-info flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"bed:\"), \" \", room.beds), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Location:\"), \" 1st to 5th floor\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Max:\"), \" 4 People\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Room Size:\"), \" 200 ft\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"sup\", null, \"2\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-description\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur quo incidunt sed et iste, tenetur odit rem esse magni nemo libero excepturi beatae perspiciatis, sunt eligendi autem minus delectus, molestiae ea porro. Maiores voluptatum, totam qui, laboriosam officia odit ea velit distinctio tenetur minus voluptates dignissimos quia numquam vitae dolore magnam a nostrum quod, esse. Nostrum suscipit eos nulla, asperiores fuga, amet nisi nesciunt, magnam optio voluptatum ab. Voluptatibus.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Amenities \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"Amenities\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"flex\"\n  }, room.amenities.map((amenity, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index\n    }, amenity);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Facilities\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"Facilities\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"flex\"\n  }, room.facilities.map((facility, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: index\n    }, facility);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Langauges Spoken\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"langauges\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Portuguese\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Russian\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"English\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Romanian\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"French\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Spanish\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Italian\"))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailDescription);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-description.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-photos.jsx":
/*!***************************************************!*\
  !*** ./client/room-detail/room-detail-photos.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomDetailPhotos({\n  photos\n}) {\n  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n\n  function selectPhotosClick(e) {\n    setSelected(+e.target.dataset.tag);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"photos\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"responsive-img\",\n    src: photos[selected],\n    alt: \" a room\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"img-selections flex\"\n  }, photos.map((image, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: \"img-option\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      onClick: selectPhotosClick,\n      \"data-tag\": index,\n      className: \"responsive-img\",\n      src: image,\n      alt: \"a room\"\n    }));\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailPhotos);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-photos.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-reviews.jsx":
/*!****************************************************!*\
  !*** ./client/room-detail/room-detail-reviews.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomDetailReviews() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviews\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviewer-info flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviewer-img\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"responsive-img\",\n    src: \"/img/default_profile_pic.jpg\",\n    alt: \"profile pic\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"reviewer-name\"\n  }, \"Julia Joeh\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"review-title\"\n  }, \"Lorem ipsum\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review-meta-data flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ratings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star-half-alt fa-star-green\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-date\"\n  }, \"May 21, 2016\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-time\"\n  }, \"8:01pm\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-text\"\n  }, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatum hic voluptate dolores ullam iusto architecto voluptatibus saepe nisi rem magnam assumenda deleniti sint omnis qui fugit, quasi consequuntur expedita.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviewer-info flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviewer-img\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"responsive-img\",\n    src: \"/img/default_profile_pic.jpg\",\n    alt: \"profile pic\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"reviewer-name\"\n  }, \"Julia Joeh\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"review-title\"\n  }, \"Lorem ipsum\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review-meta-data flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ratings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star-half-alt fa-star-green\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-date\"\n  }, \"May 21, 2016\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-time\"\n  }, \"8:01pm\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-text\"\n  }, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatum hic voluptate dolores ullam iusto architecto voluptatibus saepe nisi rem magnam assumenda deleniti sint omnis qui fugit, quasi consequuntur expedita.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviewer-info flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviewer-img\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"responsive-img\",\n    src: \"/img/default_profile_pic.jpg\",\n    alt: \"profile pic\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"reviewer-name\"\n  }, \"Julia Joeh\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"review-title\"\n  }, \"Lorem ipsum\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review-meta-data flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ratings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star-half-alt fa-star-green\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-date\"\n  }, \"May 21, 2016\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-time\"\n  }, \"8:01pm\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-text\"\n  }, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatum hic voluptate dolores ullam iusto architecto voluptatibus saepe nisi rem magnam assumenda deleniti sint omnis qui fugit, quasi consequuntur expedita.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviewer-info flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviewer-img\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"responsive-img\",\n    src: \"/img/default_profile_pic.jpg\",\n    alt: \"profile pic\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"reviewer-name\"\n  }, \"Julia Joeh\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"review-title\"\n  }, \"Lorem ipsum\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"review-meta-data flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ratings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star-half-alt fa-star-green\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-date\"\n  }, \"May 21, 2016\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-time\"\n  }, \"8:01pm\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rating-text\"\n  }, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatum hic voluptate dolores ullam iusto architecto voluptatibus saepe nisi rem magnam assumenda deleniti sint omnis qui fugit, quasi consequuntur expedita.\"))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailReviews);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-reviews.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-sidebar.jsx":
/*!****************************************************!*\
  !*** ./client/room-detail/room-detail-sidebar.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomDetailSidebar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"aside\", {\n    className: \"side-bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"book-now\"\n  }, \"Book Now\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Check in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Check out\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Guests\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"update\"\n  }, \"Update\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"get-help\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Need our help?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad libero, modi voluptate numquam laborum perferendis natus veniam corporis magnam beatae!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"332-45-4567\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"support@greendream.com\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailSidebar);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-sidebar.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-tab.jsx":
/*!************************************************!*\
  !*** ./client/room-detail/room-detail-tab.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomDetailTab({\n  selectedTab,\n  setSelectedTab\n}) {\n  function onTabClick(e) {\n    setSelectedTab(e.target.dataset.tab);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"room-detail-tab flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onTabClick,\n    \"data-tab\": \"Description\",\n    className: selectedTab === \"Description\" ? \"detail-tab-active\" : undefined\n  }, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onTabClick,\n    \"data-tab\": \"Reviews\",\n    className: selectedTab === \"Reviews\" ? \"detail-tab-active\" : undefined\n  }, \"Reviews\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onTabClick,\n    \"data-tab\": \"Photos\",\n    className: selectedTab === \"Photos\" ? \"detail-tab-active\" : undefined\n  }, \"Photos\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailTab);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-tab.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail.jsx":
/*!********************************************!*\
  !*** ./client/room-detail/room-detail.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _room_detail_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-detail-sidebar */ \"./client/room-detail/room-detail-sidebar.jsx\");\n/* harmony import */ var _room_detail_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-detail-tab */ \"./client/room-detail/room-detail-tab.jsx\");\n/* harmony import */ var _room_detail_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-detail-content */ \"./client/room-detail/room-detail-content.jsx\");\n\n\n\n\n\nfunction RoomDetail(props) {\n  const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"Description\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container grid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-detail-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_tab__WEBPACK_IMPORTED_MODULE_2__.default, {\n    selectedTab: selectedTab,\n    setSelectedTab: setSelectedTab\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_content__WEBPACK_IMPORTED_MODULE_3__.default, {\n    selectedTab: selectedTab,\n    room: props.room\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_sidebar__WEBPACK_IMPORTED_MODULE_1__.default, null));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetail);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-dropdown.jsx":
/*!*****************************************!*\
  !*** ./client/rooms/rooms-dropdown.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsDropDown({\n  showDropdown,\n  setShowDropdown,\n  selected,\n  setSelected\n}) {\n  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const caretDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  function onSelectClick(e) {\n    let selected = e.target.dataset.option;\n    console.log(selected);\n    setSelected(selected);\n  } // handles drop down when you click away\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dropdownRef.current = document.querySelector(\".recommended-dropdown\");\n    caretDownRef.current = document.querySelector(\".recommended .fa-caret-down\"); // When the user clicks anywhere thats not the dropdown menu and caret, close it\n\n    function closeDropdown(e) {\n      if (e.target != dropdownRef.current && e.target != caretDownRef.current) {\n        setShowDropdown(false);\n      }\n    }\n\n    window.addEventListener(\"click\", closeDropdown);\n    return () => {\n      window.removeEventListener(\"click\", closeDropdown);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: showDropdown ? \"recommended-dropdown reveal-dropdown\" : \"recommended-dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onSelectClick,\n    \"data-option\": \"plow\"\n  }, \"Price (low to high)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onSelectClick,\n    \"data-option\": \"phigh\"\n  }, \"Price (high to low)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onSelectClick,\n    \"data-option\": \"rlow\"\n  }, \"Rate (1 to 5)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onSelectClick,\n    \"data-option\": \"rhigh\"\n  }, \"Rate (5 to 1)\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsDropDown);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-dropdown.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-grid-view.jsx":
/*!******************************************!*\
  !*** ./client/rooms/rooms-grid-view.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsGridView({\n  currentRooms\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grid-view grid\"\n  }, currentRooms.map((room, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: \"room-card\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"far fa-heart\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-card-pic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"responsive-img\",\n      src: room.photos[0],\n      alt: \"hotel\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-card-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, room.roomtype), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"ratings-reviews\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star-half-alt\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"review-count\"\n    }, room.reviewCount, \" Reviews\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"pricing\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$\", room.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"night\"))));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsGridView);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-grid-view.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-paginate.jsx":
/*!*****************************************!*\
  !*** ./client/rooms/rooms-paginate.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ \"react-paginate\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction RoomsPaginate({\n  pageCount,\n  handlePageClick,\n  currentPage\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_paginate__WEBPACK_IMPORTED_MODULE_1___default()), {\n    forcePage: currentPage,\n    previousLabel: \"< prev\",\n    containerClassName: \"rooms-pagination\",\n    nextLabel: \"next >\",\n    breakLabel: \"...\",\n    breakClassName: \"break-me\",\n    pageCount: pageCount,\n    pageRangeDisplayed: 3,\n    marginPagesDisplayed: 2,\n    activeClassName: \"active\",\n    onPageChange: handlePageClick\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsPaginate);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-paginate.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-search.jsx":
/*!***************************************!*\
  !*** ./client/rooms/rooms-search.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ \"react-datepicker\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction getDaysBetween(firstDate, secondDate) {\n  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds\n  // const firstDate = new Date();\n  // const secondDate = new Date(new Date().setDate(new Date().getDate() + 1));\n\n  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));\n  return diffDays;\n}\n\nfunction RoomsSearch({\n  startDate,\n  endDate,\n  setStartDate,\n  setEndDate,\n  setTotalNights\n}) {\n  const [guestDropDown, setGuestDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [adults, setAdults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);\n  const [children, setChildren] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const guestfieldRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const dropdownChildrenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const dropdownSpanRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const dropdownIRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // handles drop down when you click away\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dropdownRef.current = document.querySelector(\".guest-dropdown\");\n    dropdownChildrenRef.current = document.querySelectorAll(\".guest-dropdown > li\");\n    dropdownSpanRef.current = document.querySelectorAll(\".guest-dropdown > li > span\");\n    dropdownIRef.current = document.querySelectorAll(\".guest-dropdown > li > span > i\");\n    guestfieldRef.current = document.querySelector(\".guest-field\"); // When the user clicks anywhere thats not the dropdown menu and caret, close it\n\n    function closeDropdown(e) {\n      if (e.target != dropdownRef.current && e.target != guestfieldRef.current && e.target != dropdownChildrenRef.current[0] && e.target != dropdownChildrenRef.current[1] && e.target != dropdownSpanRef.current[0] && e.target != dropdownSpanRef.current[1] && e.target != dropdownSpanRef.current[2] && e.target != dropdownSpanRef.current[3] && e.target != dropdownIRef.current[0] && e.target != dropdownIRef.current[1] && e.target != dropdownIRef.current[2] && e.target != dropdownIRef.current[3]) {\n        setGuestDropDown(false);\n      }\n    }\n\n    window.addEventListener(\"click\", closeDropdown, true);\n    return () => {\n      window.removeEventListener(\"click\", closeDropdown, true);\n    };\n  }, []);\n\n  function onDropdownChange() {\n    setGuestDropDown(!guestDropDown);\n  }\n\n  function onButtonClick(e) {\n    e.preventDefault();\n    let calculateNights = getDaysBetween(startDate, endDate);\n    setTotalNights(calculateNights);\n  }\n\n  function incrementAdults() {\n    setAdults(adults + 1);\n  }\n\n  function decrementAdults() {\n    if (adults == 1) {\n      return;\n    }\n\n    setAdults(adults - 1);\n  }\n\n  function incrementChildren() {\n    setChildren(children + 1);\n  }\n\n  function decrementChildren() {\n    if (children == 0) {\n      return;\n    }\n\n    setChildren(children - 1);\n  }\n\n  function onStartDateChange(date) {\n    setStartDate(date);\n  }\n\n  function onEndDateChange(date) {\n    setEndDate(date);\n  }\n\n  function onSubmit(e) {\n    e.preventDefault();\n    let calculateNights = getDaysBetween(startDate, endDate);\n    setTotalNights(calculateNights);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rooms-search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"hotel-search rooms-h flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check in \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {\n    selected: startDate,\n    onChange: onStartDateChange,\n    selectsStart: true,\n    startDate: startDate,\n    endDate: endDate,\n    closeOnScroll: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check out\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {\n    selected: endDate,\n    onChange: onEndDateChange,\n    selectsEnd: true,\n    startDate: startDate,\n    endDate: endDate,\n    minDate: startDate,\n    closeOnScroll: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group guest-field-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Guests\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    onClick: onDropdownChange,\n    className: \"guest-field\",\n    defaultValue: `${adults} adult, children ${children}`,\n    type: \"text\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: onDropdownChange,\n    className: \"fas fa-caret-down\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: guestDropDown ? \"guest-dropdown guest-dropdown-reveal\" : \"guest-dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Adult\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: decrementAdults,\n    className: \"fas fa-minus-circle\"\n  }), adults, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: incrementAdults,\n    className: \"fas fa-plus-circle\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Children\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: decrementChildren,\n    className: \"fas fa-minus-circle\"\n  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: incrementChildren,\n    className: \"fas fa-plus-circle\"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: onButtonClick,\n    className: \"rooms-search-button\",\n    type: \"submit\"\n  }, \"Update\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsSearch);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-search.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-sidebar.jsx":
/*!****************************************!*\
  !*** ./client/rooms/rooms-sidebar.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsSideBar({\n  filter,\n  setfilter\n}) {\n  function onFilterChange(e) {\n    setfilter({ ...filter,\n      [e.target.name]: e.target.checked\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sidebar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-type\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Room Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"standard-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    checked: filter[\"standard-room\"],\n    onChange: onFilterChange,\n    type: \"checkbox\",\n    id: \"standard-room\",\n    name: \"standard-room\",\n    value: \"Standard Room\"\n  }), \"Standard Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"double-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    checked: filter[\"double-room\"],\n    onChange: onFilterChange,\n    type: \"checkbox\",\n    id: \"double-room\",\n    name: \"double-room\",\n    value: \"Double Room\"\n  }), \"Double Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"queen-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    checked: filter[\"queen-room\"],\n    onChange: onFilterChange,\n    type: \"checkbox\",\n    id: \"queen-room\",\n    name: \"queen-room\",\n    value: \"Queen Room\"\n  }), \"Queen Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"king-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    checked: filter[\"king-room\"],\n    onChange: onFilterChange,\n    type: \"checkbox\",\n    id: \"king-room\",\n    name: \"king-room\",\n    value: \"King Room\"\n  }), \"King Room\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsSideBar);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-sidebar.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-sortby.jsx":
/*!***************************************!*\
  !*** ./client/rooms/rooms-sortby.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rooms_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-dropdown */ \"./client/rooms/rooms-dropdown.jsx\");\n\n\nconst options = {\n  plow: \"Price (low to high)\",\n  phigh: \"Price (high to low)\",\n  rhigh: \"Rate (5 to 1)\",\n  rlow: \"Rate (1 to 5)\"\n};\n\nfunction RoomsSortby({\n  perPage,\n  searchCount,\n  clickDropdown,\n  showDropdown,\n  clickDisplay,\n  setShowDropdown,\n  selected,\n  setSelected\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sortby\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"results\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Showing 1-\", perPage, \" of \", searchCount, \" results\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"options\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"recommended\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, options[selected], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: clickDropdown,\n    className: \"fas fa-caret-down\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"display\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: clickDisplay,\n    \"data-display\": \"grid\",\n    className: \"fas fa-th-large\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: clickDisplay,\n    \"data-display\": \"stack\",\n    className: \"fas fa-bars\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_dropdown__WEBPACK_IMPORTED_MODULE_1__.default, {\n    selected: selected,\n    setSelected: setSelected,\n    setShowDropdown: setShowDropdown,\n    showDropdown: showDropdown\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsSortby);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-sortby.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-stack-view.jsx":
/*!*******************************************!*\
  !*** ./client/rooms/rooms-stack-view.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nlet BASE_URL;\n\nfunction RoomsStackView({\n  currentRooms,\n  totalNights\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    BASE_URL = window.location.protocol + \"//\" + window.location.hostname + (window.location.port ? \":\" + window.location.port : \"\");\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"stack-view\"\n  }, currentRooms.map((room, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: \"room\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"far fa-heart\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-pic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"responsive-img\",\n      src: room.photos[0],\n      alt: \"a hotel room\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, room.roomtype), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"ratings\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star-half-alt fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"review-count\"\n    }, room.reviewCount, \" Reviews\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"bed\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Bed\"), \": \", room.beds), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Max\"), \": 4 People\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-pricing\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: \"price\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"price-font\"\n    }, \"$\", room.price), \"/night\"), totalNights > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: \"total-night-price\"\n    }, +room.price * totalNights, \" total\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      onClick: () => {\n        window.location.href = `${BASE_URL}/room/${room.id}`;\n      }\n    }, \"Choose\")));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsStackView);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-stack-view.jsx?");

/***/ }),

/***/ "./client/rooms/rooms.jsx":
/*!********************************!*\
  !*** ./client/rooms/rooms.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rooms_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-paginate */ \"./client/rooms/rooms-paginate.jsx\");\n/* harmony import */ var _rooms_sortby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms-sortby */ \"./client/rooms/rooms-sortby.jsx\");\n/* harmony import */ var _rooms_stack_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-stack-view */ \"./client/rooms/rooms-stack-view.jsx\");\n/* harmony import */ var _rooms_grid_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms-grid-view */ \"./client/rooms/rooms-grid-view.jsx\");\n/* harmony import */ var _rooms_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rooms-sidebar */ \"./client/rooms/rooms-sidebar.jsx\");\n/* harmony import */ var _rooms_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rooms-search */ \"./client/rooms/rooms-search.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nfunction Rooms(props) {\n  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"stack\");\n  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [perPage, setPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.data || []);\n  const [rooms, setRooms] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.rooms || []);\n  const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [searchCount, setSearchCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [selectedFilters, setSelectedFilters] = [];\n  const [filter, setfilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    \"standard-room\": false,\n    \"double-room\": false,\n    \"queen-room\": false,\n    \"king-room\": false\n  });\n  const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date());\n  const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date(new Date().setDate(new Date().getDate() + 1)));\n  const [totalNights, setTotalNights] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"plow\");\n\n  function clickDropdown() {\n    setShowDropdown(!showDropdown);\n  }\n\n  function clickDisplay(e) {\n    setDisplay(e.target.dataset.display);\n  }\n\n  function FilterRooms() {\n    let selectedFilters = [];\n    let newData;\n\n    if (filter[\"standard-room\"]) {\n      selectedFilters.push(\"Standard Room\");\n    }\n\n    if (filter[\"double-room\"]) {\n      selectedFilters.push(\"Double Room\");\n    }\n\n    if (filter[\"queen-room\"]) {\n      selectedFilters.push(\"Queen Room\");\n    }\n\n    if (filter[\"king-room\"]) {\n      selectedFilters.push(\"King Room\");\n    }\n\n    if (selectedFilters.length) {\n      newData = data.filter(data => {\n        return selectedFilters.includes(data.roomtype);\n      });\n      setSearchCount(newData.length);\n      setPageCount(Math.ceil(newData.length / perPage));\n      setCurrentPage(0);\n      setRooms(newData);\n    } else {\n      setSearchCount(data.length);\n      setPageCount(Math.ceil(data.length / perPage));\n      setCurrentPage(0);\n      setRooms(data);\n    }\n  } // for intial render\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    contentRef.current = document.querySelector(\".hotel-search\");\n    setSearchCount(data.length);\n    setPageCount(Math.ceil(data.length / perPage));\n    setRooms(data.sort(sortPriceLow));\n  }, []); // on room type filter changes\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    FilterRooms();\n  }, [filter]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (selected === \"plow\") {\n      setRooms(rooms.sort(sortPriceLow));\n    }\n\n    if (selected === \"phigh\") {\n      setRooms(rooms.sort(sortPriceHigh));\n    }\n\n    if (selected === \"rlow\") {\n      setRooms(rooms.sort(sortReviewLow));\n    }\n\n    if (selected === \"rhigh\") {\n      setRooms(rooms.sort(sortReviewHigh));\n    }\n  }, [selected]);\n\n  function sortPriceLow(a, b) {\n    return +a.price - +b.price;\n  }\n\n  function sortPriceHigh(a, b) {\n    return +b.price - +a.price;\n  }\n\n  function sortReviewLow(a, b) {\n    return a.reviewCount - b.reviewCount;\n  }\n\n  function sortReviewHigh(a, b) {\n    return b.reviewCount - a.reviewCount;\n  }\n\n  function handlePageClick(data) {\n    let selected = data.selected;\n    setCurrentPage(selected);\n    contentRef.current.scrollIntoView({\n      behavior: \"smooth\"\n    });\n  }\n\n  let endIndex = (currentPage + 1) * perPage;\n  let startIndex = endIndex - perPage;\n  let currentRooms = rooms.slice(startIndex, endIndex);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_search__WEBPACK_IMPORTED_MODULE_6__.default, {\n    startDate: startDate,\n    endDate: endDate,\n    setStartDate: setStartDate,\n    setEndDate: setEndDate,\n    setTotalNights: setTotalNights\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rooms-main-content grid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_sidebar__WEBPACK_IMPORTED_MODULE_5__.default, {\n    filter: filter,\n    setfilter: setfilter\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_sortby__WEBPACK_IMPORTED_MODULE_2__.default, {\n    perPage: perPage,\n    searchCount: searchCount,\n    clickDropdown: clickDropdown,\n    setShowDropdown: setShowDropdown,\n    showDropdown: showDropdown,\n    clickDisplay: clickDisplay,\n    selected: selected,\n    setSelected: setSelected\n  }), display === \"stack\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_stack_view__WEBPACK_IMPORTED_MODULE_3__.default, {\n    currentRooms: currentRooms,\n    totalNights: totalNights\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_grid_view__WEBPACK_IMPORTED_MODULE_4__.default, {\n    currentRooms: currentRooms\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_paginate__WEBPACK_IMPORTED_MODULE_1__.default, {\n    currentPage: currentPage,\n    pageCount: pageCount,\n    handlePageClick: handlePageClick\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rooms);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms.jsx?");

/***/ }),

/***/ "./data/dbConfig.js":
/*!**************************!*\
  !*** ./data/dbConfig.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const knex = __webpack_require__(/*! knex */ \"knex\");\n\nconst config = __webpack_require__(/*! ../knexfile.js */ \"./knexfile.js\");\n\nconst environment = process.env.DB_ENV || \"development\";\nmodule.exports = knex(config[environment]);\n\n//# sourceURL=webpack://hotelx/./data/dbConfig.js?");

/***/ }),

/***/ "./knexfile.js":
/*!*********************!*\
  !*** ./knexfile.js ***!
  \*********************/
/***/ ((module) => {

eval("// Update with your config settings.\nconst pgConnection = process.env.DATABASE_URL || \"postgres://postgres:Kingdomcome1025&102592@localhost:5432/hotelx\";\nmodule.exports = {\n  development: {\n    client: \"pg\",\n    connection: pgConnection,\n    pool: {\n      min: 2,\n      max: 10\n    },\n    migrations: {\n      directory: \"./data/migrations\"\n    },\n    seeds: {\n      directory: \"./data/seeds\"\n    }\n  }\n};\n\n//# sourceURL=webpack://hotelx/./knexfile.js?");

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

/***/ "./server/RoomDetail/index.js":
/*!************************************!*\
  !*** ./server/RoomDetail/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./roomdetail.route */ \"./server/RoomDetail/roomdetail.route.js\");\n\n//# sourceURL=webpack://hotelx/./server/RoomDetail/index.js?");

/***/ }),

/***/ "./server/RoomDetail/roomdetail.controller.js":
/*!****************************************************!*\
  !*** ./server/RoomDetail/roomdetail.controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_room_detail_room_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/room-detail/room-detail */ \"./client/room-detail/room-detail.jsx\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ \"./service/index.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_service__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nasync function RoomDetail(req, res, next) {\n  const {\n    id\n  } = req.params;\n  let room = await _service__WEBPACK_IMPORTED_MODULE_3__.rooms.getRoom(id);\n  let roomtype = room.roomtype;\n  let roomData = {\n    room: room\n  };\n\n  try {\n    const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_room_detail_room_detail__WEBPACK_IMPORTED_MODULE_2__.default, {\n      room: room\n    }));\n    res.render(\"RoomDetail/roomdetail.pug\", {\n      content,\n      roomtype,\n      roomData\n    });\n  } catch (e) {\n    next(e);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetail);\n\n//# sourceURL=webpack://hotelx/./server/RoomDetail/roomdetail.controller.js?");

/***/ }),

/***/ "./server/RoomDetail/roomdetail.route.js":
/*!***********************************************!*\
  !*** ./server/RoomDetail/roomdetail.route.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst roomDetailController = __webpack_require__(/*! ./roomdetail.controller */ \"./server/RoomDetail/roomdetail.controller.js\").default;\n\nconst roomDetailRouter = express.Router();\nroomDetailRouter.get(\"/:id\", roomDetailController);\nmodule.exports = roomDetailRouter;\n\n//# sourceURL=webpack://hotelx/./server/RoomDetail/roomdetail.route.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_rooms_rooms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/rooms/rooms */ \"./client/rooms/rooms.jsx\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ \"./service/index.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_service__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nasync function Rooms(req, res, next) {\n  try {\n    let roomData = await _service__WEBPACK_IMPORTED_MODULE_3__.rooms.getAllRooms();\n    let roomsData = {\n      data: roomData,\n      rooms: roomData\n    };\n    const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_rooms_rooms__WEBPACK_IMPORTED_MODULE_2__.default, {\n      data: roomData,\n      rooms: roomData\n    }));\n    res.render(\"Rooms/rooms.pug\", {\n      content,\n      roomsData\n    });\n  } catch (e) {\n    next(e);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rooms);\n\n//# sourceURL=webpack://hotelx/./server/Rooms/rooms.controller.js?");

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

eval("// setup all server routes\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst serverRouter = express.Router();\n\nconst homeRoute = __webpack_require__(/*! ./Home */ \"./server/Home/index.js\");\n\nconst aboutRoute = __webpack_require__(/*! ./About */ \"./server/About/index.js\");\n\nconst contactRoute = __webpack_require__(/*! ./Contact */ \"./server/Contact/index.js\");\n\nconst roomsRoute = __webpack_require__(/*! ./Rooms */ \"./server/Rooms/index.js\");\n\nconst roomDetailRoute = __webpack_require__(/*! ./RoomDetail */ \"./server/RoomDetail/index.js\");\n\nserverRouter.use(\"/\", homeRoute);\nserverRouter.use(\"/about\", aboutRoute);\nserverRouter.use(\"/contact\", contactRoute);\nserverRouter.use(\"/rooms\", roomsRoute);\nserverRouter.use(\"/room\", roomDetailRoute);\nmodule.exports = serverRouter;\n\n//# sourceURL=webpack://hotelx/./server/server.routes.js?");

/***/ }),

/***/ "./service/index.js":
/*!**************************!*\
  !*** ./service/index.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const rooms = __webpack_require__(/*! ./rooms */ \"./service/rooms/index.js\");\n\nmodule.exports = {\n  rooms\n};\n\n//# sourceURL=webpack://hotelx/./service/index.js?");

/***/ }),

/***/ "./service/rooms/index.js":
/*!********************************!*\
  !*** ./service/rooms/index.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./rooms */ \"./service/rooms/rooms.js\");\n\n//# sourceURL=webpack://hotelx/./service/rooms/index.js?");

/***/ }),

/***/ "./service/rooms/rooms.js":
/*!********************************!*\
  !*** ./service/rooms/rooms.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const axios = __webpack_require__(/*! axios */ \"axios\");\n\nasync function getAllRooms() {\n  try {\n    let res = await axios.get(\"http://localhost:3000/api/rooms\");\n    let rooms = res.data;\n\n    if (!rooms || rooms.length === 0) {\n      return Promise.reject(\"No rooms available\");\n    }\n\n    return rooms;\n  } catch (e) {\n    return \"Unable to get rooms\";\n  }\n}\n\nasync function getRoom(id) {\n  try {\n    let res = await axios.get(`http://localhost:3000/api/rooms/${id}`);\n    let room = res.data;\n\n    if (!room) {\n      return Promise.reject(\"no room available\");\n    }\n\n    return room;\n  } catch (e) {\n    return \"unable to get room\";\n  }\n}\n\nmodule.exports = {\n  getAllRooms,\n  getRoom\n};\n\n//# sourceURL=webpack://hotelx/./service/rooms/rooms.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("knex");;

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

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");;

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