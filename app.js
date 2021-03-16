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

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst roomRouter = __webpack_require__(/*! ./room */ \"./api/room/index.js\");\n\nconst customerRouter = __webpack_require__(/*! ./customer */ \"./api/customer/index.js\");\n\nconst bookingRouter = __webpack_require__(/*! ./booking */ \"./api/booking/index.js\");\n\nconst paymentRouter = __webpack_require__(/*! ./payment */ \"./api/payment/index.js\");\n\nconst apiRouter = express.Router();\napiRouter.use(\"/rooms\", roomRouter);\napiRouter.use(\"/customers\", customerRouter);\napiRouter.use(\"/booking\", bookingRouter);\napiRouter.use(\"/payments\", paymentRouter);\nmodule.exports = apiRouter;\n\n//# sourceURL=webpack://hotelx/./api/api.routes.js?");

/***/ }),

/***/ "./api/booking/booking.controller.js":
/*!*******************************************!*\
  !*** ./api/booking/booking.controller.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  insert,\n  findBy\n} = __webpack_require__(/*! ./booking.model */ \"./api/booking/booking.model.js\");\n\nconst {\n  nanoid\n} = __webpack_require__(/*! nanoid */ \"nanoid\");\n\nasync function createBooking(req, res) {\n  const {\n    start_date,\n    end_date,\n    room_id,\n    customer_id\n  } = req.body;\n\n  if (!start_date || !end_date || !room_id || !customer_id) {\n    return res.status(400).json({\n      message: \"start date, end date, room id, and customer id is required\"\n    });\n  }\n\n  let booking_id = nanoid();\n\n  try {\n    let booking = await insert({ ...req.body,\n      booking_id\n    });\n    res.status(201).json(booking);\n  } catch (e) {\n    res.status(500).json({\n      message: \"Unable to book room\"\n    });\n  }\n}\n\nmodule.exports = {\n  createBooking\n};\n\n//# sourceURL=webpack://hotelx/./api/booking/booking.controller.js?");

/***/ }),

/***/ "./api/booking/booking.model.js":
/*!**************************************!*\
  !*** ./api/booking/booking.model.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const db = __webpack_require__(/*! ../../data/dbConfig */ \"./data/dbConfig.js\");\n\nfunction findById(id) {\n  return db(\"booking\").where({\n    id\n  }).first();\n}\n\nfunction insert(booking) {\n  return db(\"booking\").insert(booking).returning(\"id\").then(ids => {\n    return findById(ids[0]);\n  });\n}\n\nmodule.exports = {\n  insert,\n  findById\n};\n\n//# sourceURL=webpack://hotelx/./api/booking/booking.model.js?");

/***/ }),

/***/ "./api/booking/booking.route.js":
/*!**************************************!*\
  !*** ./api/booking/booking.route.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst {\n  createBooking\n} = __webpack_require__(/*! ./booking.controller */ \"./api/booking/booking.controller.js\");\n\nconst bookingRouter = express.Router();\nbookingRouter.post(\"/\", createBooking);\nmodule.exports = bookingRouter;\n\n//# sourceURL=webpack://hotelx/./api/booking/booking.route.js?");

/***/ }),

/***/ "./api/booking/index.js":
/*!******************************!*\
  !*** ./api/booking/index.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./booking.route */ \"./api/booking/booking.route.js\");\n\n//# sourceURL=webpack://hotelx/./api/booking/index.js?");

/***/ }),

/***/ "./api/customer/customer.controller.js":
/*!*********************************************!*\
  !*** ./api/customer/customer.controller.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  insert,\n  findBy\n} = __webpack_require__(/*! ./customer.model */ \"./api/customer/customer.model.js\");\n\nasync function createCustomer(req, res) {\n  const {\n    first_name,\n    last_name,\n    email\n  } = req.body;\n\n  if (!first_name || !last_name || !email) {\n    return res.status(400).json({\n      message: \"First name, Last name and Email is required\"\n    });\n  }\n\n  try {\n    let customer = await insert(req.body);\n    res.status(201).json(customer);\n  } catch (e) {\n    res.status(500).json({\n      message: \"Unable to create customer\"\n    });\n  }\n}\n\nmodule.exports = {\n  createCustomer\n};\n\n//# sourceURL=webpack://hotelx/./api/customer/customer.controller.js?");

/***/ }),

/***/ "./api/customer/customer.model.js":
/*!****************************************!*\
  !*** ./api/customer/customer.model.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const db = __webpack_require__(/*! ../../data/dbConfig */ \"./data/dbConfig.js\");\n\nfunction findById(id) {\n  return db(\"customers\").where({\n    id\n  }).first();\n}\n\nfunction insert(customer) {\n  return db(\"customers\").insert(customer).returning(\"id\").then(ids => {\n    return findById(ids[0]);\n  });\n}\n\nmodule.exports = {\n  insert,\n  findById\n};\n\n//# sourceURL=webpack://hotelx/./api/customer/customer.model.js?");

/***/ }),

/***/ "./api/customer/customer.route.js":
/*!****************************************!*\
  !*** ./api/customer/customer.route.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst {\n  createCustomer\n} = __webpack_require__(/*! ./customer.controller */ \"./api/customer/customer.controller.js\");\n\nconst customerRouter = express.Router();\ncustomerRouter.post(\"/\", createCustomer);\nmodule.exports = customerRouter;\n\n//# sourceURL=webpack://hotelx/./api/customer/customer.route.js?");

/***/ }),

/***/ "./api/customer/index.js":
/*!*******************************!*\
  !*** ./api/customer/index.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./customer.route */ \"./api/customer/customer.route.js\");\n\n//# sourceURL=webpack://hotelx/./api/customer/index.js?");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./api.routes */ \"./api/api.routes.js\");\n\n//# sourceURL=webpack://hotelx/./api/index.js?");

/***/ }),

/***/ "./api/payment/index.js":
/*!******************************!*\
  !*** ./api/payment/index.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./payment.route */ \"./api/payment/payment.route.js\");\n\n//# sourceURL=webpack://hotelx/./api/payment/index.js?");

/***/ }),

/***/ "./api/payment/payment.controller.js":
/*!*******************************************!*\
  !*** ./api/payment/payment.controller.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst {\n  insert\n} = __webpack_require__(/*! ./payment.model */ \"./api/payment/payment.model.js\");\n\nconst StripePrivateKey = process.env.stripeTestPrivateKey;\n\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(StripePrivateKey);\n\nasync function createPayment(req, res) {\n  const {\n    token,\n    price,\n    booking_id\n  } = req.body;\n\n  if (!token || !price || !booking_id) {\n    return res.status(400).json({\n      message: \"token, price and booking id is required\"\n    });\n  }\n\n  try {\n    let charge = await stripe.charges.create({\n      amount: +price * 100,\n      currency: \"usd\",\n      source: token,\n      description: \"GreenDream hotel rental\"\n    });\n    await insert({\n      booking_id,\n      price: price.toString(),\n      payment_id: charge.id\n    });\n    res.status(200).json({\n      message: \"successfully\"\n    });\n  } catch (e) {\n    console.log(e);\n    res.status(500).json({\n      message: \"Unable to make payments\"\n    });\n  }\n}\n\nmodule.exports = {\n  createPayment\n};\n\n//# sourceURL=webpack://hotelx/./api/payment/payment.controller.js?");

/***/ }),

/***/ "./api/payment/payment.model.js":
/*!**************************************!*\
  !*** ./api/payment/payment.model.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const db = __webpack_require__(/*! ../../data/dbConfig */ \"./data/dbConfig.js\");\n\nfunction findById(id) {\n  return db(\"payments\").where({\n    id\n  }).first();\n}\n\nfunction insert(payment) {\n  return db(\"payments\").insert(payment).returning(\"id\").then(ids => {\n    return findById(ids[0]);\n  });\n}\n\nmodule.exports = {\n  insert,\n  findById\n};\n\n//# sourceURL=webpack://hotelx/./api/payment/payment.model.js?");

/***/ }),

/***/ "./api/payment/payment.route.js":
/*!**************************************!*\
  !*** ./api/payment/payment.route.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst {\n  createPayment\n} = __webpack_require__(/*! ./payment.controller */ \"./api/payment/payment.controller.js\");\n\nconst paymentRouter = express.Router();\npaymentRouter.post(\"/\", createPayment);\nmodule.exports = paymentRouter;\n\n//# sourceURL=webpack://hotelx/./api/payment/payment.route.js?");

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

/***/ "./client/component/calculateTotal.js":
/*!********************************************!*\
  !*** ./client/component/calculateTotal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calculateTotal(price, days) {\n  return price * days;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateTotal);\n\n//# sourceURL=webpack://hotelx/./client/component/calculateTotal.js?");

/***/ }),

/***/ "./client/component/formatDate.js":
/*!****************************************!*\
  !*** ./client/component/formatDate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction formatDate(date_object) {\n  let date = date_object.getDate();\n  let year = date_object.getFullYear();\n  let month = date_object.getMonth() + 1;\n  return `${month}-${date}-${year}`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);\n\n//# sourceURL=webpack://hotelx/./client/component/formatDate.js?");

/***/ }),

/***/ "./client/component/fullDateFormat.js":
/*!********************************************!*\
  !*** ./client/component/fullDateFormat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction FullDateFormat(date_object) {\n  const day_of_week = {\n    0: \"Sun\",\n    1: \"Mon\",\n    2: \"Tues\",\n    3: \"Weds\",\n    4: \"Thurs\",\n    5: \"Fri\",\n    6: \"Sat\"\n  };\n  const Months = {\n    0: \"Jan\",\n    1: \"Feb\",\n    2: \"Mar\",\n    3: \"Apr\",\n    4: \"May\",\n    5: \"Jun\",\n    6: \"Jul\",\n    7: \"Aug\",\n    8: \"Sep\",\n    9: \"Oct\",\n    10: \"Nov\",\n    11: \"Dec\"\n  };\n  let day = day_of_week[date_object.getDay()];\n  let date = date_object.getDate();\n  let year = date_object.getFullYear();\n  let month = Months[date_object.getMonth()];\n  return `${day}, ${month} ${date}, ${year}`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullDateFormat);\n\n//# sourceURL=webpack://hotelx/./client/component/fullDateFormat.js?");

/***/ }),

/***/ "./client/component/getDaysBetween.js":
/*!********************************************!*\
  !*** ./client/component/getDaysBetween.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getDaysBetween(firstDate, secondDate) {\n  const oneDay = 24 * 60 * 60 * 1000;\n  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));\n  return diffDays;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDaysBetween);\n\n//# sourceURL=webpack://hotelx/./client/component/getDaysBetween.js?");

/***/ }),

/***/ "./client/component/index.js":
/*!***********************************!*\
  !*** ./client/component/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useDropDownClickAway\": () => (/* reexport safe */ _useDropDownClickAway__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"getDaysBetween\": () => (/* reexport safe */ _getDaysBetween__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"formatDate\": () => (/* reexport safe */ _formatDate__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"calculateTotal\": () => (/* reexport safe */ _calculateTotal__WEBPACK_IMPORTED_MODULE_4__.default),\n/* harmony export */   \"FullDateFormat\": () => (/* reexport safe */ _fullDateFormat__WEBPACK_IMPORTED_MODULE_3__.default)\n/* harmony export */ });\n/* harmony import */ var _useDropDownClickAway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDropDownClickAway */ \"./client/component/useDropDownClickAway.jsx\");\n/* harmony import */ var _getDaysBetween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDaysBetween */ \"./client/component/getDaysBetween.js\");\n/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatDate */ \"./client/component/formatDate.js\");\n/* harmony import */ var _fullDateFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullDateFormat */ \"./client/component/fullDateFormat.js\");\n/* harmony import */ var _calculateTotal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculateTotal */ \"./client/component/calculateTotal.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://hotelx/./client/component/index.js?");

/***/ }),

/***/ "./client/component/useDropDownClickAway.jsx":
/*!***************************************************!*\
  !*** ./client/component/useDropDownClickAway.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction useDropDownClickAway(setGuestDropDown) {\n  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const guestfieldRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const dropdownChildrenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const dropdownSpanRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const dropdownIRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const caretDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // handles drop down when you click away\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    caretDown.current = document.querySelector(\".fa-caret-down\");\n    dropdownRef.current = document.querySelector(\".guest-dropdown\");\n    dropdownChildrenRef.current = document.querySelectorAll(\".guest-dropdown > li\");\n    dropdownSpanRef.current = document.querySelectorAll(\".guest-dropdown > li > span\");\n    dropdownIRef.current = document.querySelectorAll(\".guest-dropdown > li > span > i\");\n    guestfieldRef.current = document.querySelector(\".guest-field\"); // When the user clicks anywhere thats not the dropdown menu and caret, close it\n\n    function closeDropdown(e) {\n      if (e.target != caretDown.current && e.target != dropdownRef.current && e.target != guestfieldRef.current && e.target != dropdownChildrenRef.current[0] && e.target != dropdownChildrenRef.current[1] && e.target != dropdownSpanRef.current[0] && e.target != dropdownSpanRef.current[1] && e.target != dropdownSpanRef.current[2] && e.target != dropdownSpanRef.current[3] && e.target != dropdownIRef.current[0] && e.target != dropdownIRef.current[1] && e.target != dropdownIRef.current[2] && e.target != dropdownIRef.current[3]) {\n        setGuestDropDown(false);\n      }\n    }\n\n    window.addEventListener(\"click\", closeDropdown, true);\n    return () => {\n      window.removeEventListener(\"click\", closeDropdown, true);\n    };\n  }, []);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDropDownClickAway);\n\n//# sourceURL=webpack://hotelx/./client/component/useDropDownClickAway.jsx?");

/***/ }),

/***/ "./client/home/home-search.jsx":
/*!*************************************!*\
  !*** ./client/home/home-search.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ \"react-datepicker\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component */ \"./client/component/index.js\");\n\n\n\nlet BASE_URL;\n\nfunction formatDate(date_object) {\n  let date = date_object.getDate();\n  let year = date_object.getFullYear();\n  let month = date_object.getMonth() + 1;\n  return `${month}-${date}-${year}`;\n}\n\nfunction HomeSearch() {\n  const [adults, setAdults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);\n  const [children, setChildren] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date());\n  const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date(new Date().setDate(new Date().getDate() + 1)));\n  const [guestDropDown, setGuestDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,_component__WEBPACK_IMPORTED_MODULE_2__.useDropDownClickAway)(setGuestDropDown);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    BASE_URL = window.location.protocol + \"//\" + window.location.hostname + (window.location.port ? \":\" + window.location.port : \"\");\n  }, []);\n\n  function onSearchClick(e) {\n    e.preventDefault();\n    const params = new URLSearchParams({\n      start_date: formatDate(startDate),\n      end_date: formatDate(endDate),\n      adults: adults,\n      children: children\n    });\n    window.location.href = `${BASE_URL}/rooms?${params.toString()}`;\n  }\n\n  function onStartDateChange(date) {\n    setStartDate(date);\n  }\n\n  function onEndDateChange(date) {\n    setEndDate(date);\n  }\n\n  function onDropdownChange() {\n    setGuestDropDown(!guestDropDown);\n  }\n\n  function incrementAdults() {\n    setAdults(adults + 1);\n  }\n\n  function decrementAdults() {\n    if (adults == 1) {\n      return;\n    }\n\n    setAdults(adults - 1);\n  }\n\n  function incrementChildren() {\n    setChildren(children + 1);\n  }\n\n  function decrementChildren() {\n    if (children == 0) {\n      return;\n    }\n\n    setChildren(children - 1);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {\n    selected: startDate,\n    onChange: onStartDateChange,\n    selectsStart: true,\n    startDate: startDate,\n    endDate: endDate,\n    closeOnScroll: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check out \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {\n    selected: endDate,\n    onChange: onEndDateChange,\n    selectsEnd: true,\n    startDate: startDate,\n    endDate: endDate,\n    minDate: startDate,\n    closeOnScroll: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group guest-field-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Guests \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    onClick: onDropdownChange,\n    readOnly: true,\n    value: `${adults} adult, children ${children}`,\n    className: \"guest-field\",\n    type: \"text\",\n    placeholder: \"Choose date\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: onDropdownChange,\n    className: \"fas fa-caret-down\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: guestDropDown ? \"guest-dropdown guest-dropdown-reveal\" : \"guest-dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Adult\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: decrementAdults,\n    className: \"fas fa-minus-circle\"\n  }), adults, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: incrementAdults,\n    className: \"fas fa-plus-circle\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Children\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: decrementChildren,\n    className: \"fas fa-minus-circle\"\n  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: incrementChildren,\n    className: \"fas fa-plus-circle\"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: onSearchClick,\n    className: \"home-search\",\n    type: \"submit\"\n  }, \"check availability\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSearch);\n\n//# sourceURL=webpack://hotelx/./client/home/home-search.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-booking-complete.jsx":
/*!*************************************************************!*\
  !*** ./client/room-detail/room-detail-booking-complete.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomDetailBookingComplete({\n  bookingForm,\n  bookingid\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"completed-title\"\n  }, \"Booking completed!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"booking-completed\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"booking-thank-you\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Thank you! Your Booking order is now confirmed\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"A confirmation email has been sent to your provided email address\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"completed-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"traveler-title\"\n  }, \"Traveler information\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"info info-variant-1 flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Booking number:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, bookingid)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"info flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"First name:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, bookingForm[\"first_name\"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"info info-variant-1 flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Last name:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, bookingForm[\"last_name\"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"info flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Email:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, bookingForm.email))))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailBookingComplete);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-booking-complete.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-booking-content.jsx":
/*!************************************************************!*\
  !*** ./client/room-detail/room-detail-booking-content.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _room_detail_booking_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-detail-booking-form */ \"./client/room-detail/room-detail-booking-form.jsx\");\n/* harmony import */ var _room_detail_payment_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-detail-payment-form */ \"./client/room-detail/room-detail-payment-form.jsx\");\n/* harmony import */ var _room_detail_booking_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-detail-booking-complete */ \"./client/room-detail/room-detail-booking-complete.jsx\");\n\n\n\n\n\nfunction RoomDetailBookingContent({\n  steps,\n  setSteps,\n  room,\n  paymentForm,\n  bookingForm,\n  onPaymentBookingFormChange,\n  onBookingFormChange,\n  startDate,\n  endDate,\n  bookingid,\n  setBookingID\n}) {\n  switch (steps) {\n    case 1:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_booking_form__WEBPACK_IMPORTED_MODULE_1__.default, {\n        bookingForm: bookingForm,\n        setSteps: setSteps,\n        onBookingFormChange: onBookingFormChange\n      });\n\n    case 2:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_payment_form__WEBPACK_IMPORTED_MODULE_2__.default, {\n        startDate: startDate,\n        endDate: endDate,\n        setBookingID: setBookingID,\n        room: room,\n        paymentForm: paymentForm,\n        bookingForm: bookingForm,\n        setSteps: setSteps,\n        onPaymentBookingFormChange: onPaymentBookingFormChange\n      });\n\n    case 3:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_booking_complete__WEBPACK_IMPORTED_MODULE_3__.default, {\n        bookingid: bookingid,\n        bookingForm: bookingForm\n      });\n\n    default:\n      return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailBookingContent);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-booking-content.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-booking-form.jsx":
/*!*********************************************************!*\
  !*** ./client/room-detail/room-detail-booking-form.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomDetailBookingForm({\n  bookingForm,\n  setSteps,\n  onBookingFormChange\n}) {\n  function nextStepsClick(e) {\n    if (!bookingForm[\"first_name\"]) {\n      return;\n    }\n\n    if (!bookingForm[\"last_name\"]) {\n      return;\n    }\n\n    if (!bookingForm.email) {\n      return;\n    }\n\n    e.preventDefault();\n    setSteps(2);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"booking-title\"\n  }, \"Your booking details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"booking-form-fillout\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group input-group-1 flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"first_name\"\n  }, \"First name \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"required-mark\"\n  }, \"*\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"first_name\",\n    name: \"first_name\",\n    type: \"text\",\n    placeholder: \"First Name\",\n    onChange: onBookingFormChange,\n    value: bookingForm[\"first_name\"],\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"last_name\"\n  }, \"Last name \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"required-mark\"\n  }, \"*\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"last_name\",\n    name: \"last_name\",\n    type: \"text\",\n    placeholder: \"Last Name\",\n    onChange: onBookingFormChange,\n    value: bookingForm[\"last_name\"],\n    required: true\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group input-group-2 flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"required-mark\"\n  }, \"*\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"email\",\n    name: \"email\",\n    type: \"email\",\n    placeholder: \"Email\",\n    onChange: onBookingFormChange,\n    value: bookingForm.email,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"phone\"\n  }, \"Phone\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"phone\",\n    name: \"phone\",\n    type: \"tel\",\n    placeholder: \"Phone Number 000-000-0000\",\n    onChange: onBookingFormChange,\n    value: bookingForm.phone,\n    pattern: \"[0-9]{3}[0-9]{3}[0-9]{4}\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group input-group-3 flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"street\"\n  }, \"Street\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    name: \"street\",\n    id: \"street\",\n    type: \"text\",\n    placeholder: \"Street\",\n    onChange: onBookingFormChange,\n    value: bookingForm.street\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"city\"\n  }, \"City\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    name: \"city\",\n    id: \"city\",\n    type: \"text\",\n    placeholder: \"City\",\n    onChange: onBookingFormChange,\n    value: bookingForm.city\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"zipcode\"\n  }, \"Zip Code\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"zipcode\",\n    name: \"zipcode\",\n    type: \"text\",\n    placeholder: \"Zip Code\",\n    onChange: onBookingFormChange,\n    value: bookingForm.zipcode\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"button-container flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: nextStepsClick\n  }, \"Next Step\"))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailBookingForm);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-booking-form.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-booking-info.jsx":
/*!*********************************************************!*\
  !*** ./client/room-detail/room-detail-booking-info.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ \"./client/component/index.js\");\n\n\n\nfunction RoomDetailBookingInfo({\n  room,\n  startDate,\n  endDate,\n  adults,\n  children\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"booking-detail flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"responsive-img\",\n    src: room.photos[0],\n    alt: \"hotel room\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-type-rating\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, room.roomtype), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ratings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star fa-star-green\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-star-half-alt fa-star-green\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"booking-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Check in: \", (0,_component__WEBPACK_IMPORTED_MODULE_1__.FullDateFormat)(startDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, (0,_component__WEBPACK_IMPORTED_MODULE_1__.getDaysBetween)(startDate, endDate), \" Night(s)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Checkout out: \", (0,_component__WEBPACK_IMPORTED_MODULE_1__.FullDateFormat)(endDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Room for \", adults, \" adult and \", children, \" children\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"booking-totals\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-total\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"1 Room x \", (0,_component__WEBPACK_IMPORTED_MODULE_1__.getDaysBetween)(startDate, endDate), \" nights\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"$\" + (0,_component__WEBPACK_IMPORTED_MODULE_1__.calculateTotal)(+room.price, (0,_component__WEBPACK_IMPORTED_MODULE_1__.getDaysBetween)(startDate, endDate)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"calculated-prices\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Total Price\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"$\" + (0,_component__WEBPACK_IMPORTED_MODULE_1__.calculateTotal)(+room.price, (0,_component__WEBPACK_IMPORTED_MODULE_1__.getDaysBetween)(startDate, endDate))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailBookingInfo);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-booking-info.jsx?");

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

/***/ "./client/room-detail/room-detail-loading.jsx":
/*!****************************************************!*\
  !*** ./client/room-detail/room-detail-loading.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomDetailLoading() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"loading-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"lds-dual-ring\"\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailLoading);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-loading.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-modal.jsx":
/*!**************************************************!*\
  !*** ./client/room-detail/room-detail-modal.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction RoomDetailModal({\n  children\n}) {\n  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  if (!elRef.current) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"room-detail-modal\");\n    elRef.current = div;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const modalRoot = document.getElementById(\"modal\");\n    modalRoot.appendChild(elRef.current);\n    return () => {\n      modalRoot.removeChild(elRef.current);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, elRef.current);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailModal);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-modal.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-payment-form.jsx":
/*!*********************************************************!*\
  !*** ./client/room-detail/room-detail-payment-form.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _room_detail_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-detail-loading */ \"./client/room-detail/room-detail-loading.jsx\");\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component */ \"./client/component/index.js\");\n\n\n\n\n\nfunction getToken(cardNum, cvc, expiry) {\n  return new Promise((resolve, reject) => {\n    Stripe.card.createToken({\n      number: cardNum,\n      cvc: cvc,\n      exp_month: expiry[0],\n      exp_year: expiry[1]\n    }, (status, response) => {\n      if (response.error) {\n        reject(response.error);\n      }\n\n      resolve(response);\n    });\n  });\n}\n\nfunction RoomDetailPaymentForm({\n  bookingForm,\n  paymentForm,\n  room,\n  setBookingID,\n  startDate,\n  endDate,\n  setSteps,\n  onPaymentBookingFormChange\n}) {\n  const [disablePayment, setDisablePayment] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [processing, setProcessing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  function onBackClick(e) {\n    e.preventDefault();\n    setSteps(1);\n  }\n\n  async function onNextClick(e) {\n    e.preventDefault();\n\n    if (!paymentForm[\"credit-card\"]) {\n      return;\n    }\n\n    if (paymentForm[\"credit-card\"] != \"4242424242424242\") {\n      return;\n    }\n\n    if (!paymentForm[\"expiry-date\"]) {\n      return;\n    }\n\n    if (!paymentForm.cvc) {\n      return;\n    }\n\n    let expiry = paymentForm[\"expiry-date\"].split(\"/\");\n\n    try {\n      setDisablePayment(true);\n      setProcessing(true);\n      let [customerRes, stripeToken] = await Promise.all([axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/customers\", bookingForm), getToken(paymentForm[\"credit-card\"], paymentForm.cvc, expiry)]);\n      let bookingRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/booking\", {\n        customer_id: customerRes.data.id,\n        room_id: room.id,\n        start_date: (0,_component__WEBPACK_IMPORTED_MODULE_3__.formatDate)(startDate),\n        end_date: (0,_component__WEBPACK_IMPORTED_MODULE_3__.formatDate)(endDate)\n      });\n      let paymentRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/payments\", {\n        booking_id: bookingRes.data.id,\n        price: (0,_component__WEBPACK_IMPORTED_MODULE_3__.calculateTotal)(+room.price, (0,_component__WEBPACK_IMPORTED_MODULE_3__.getDaysBetween)(startDate, endDate)),\n        token: stripeToken.id\n      });\n      setBookingID(bookingRes.data.booking_id); // console.log(paymentRes.data);\n      // console.log(customerRes.data);\n      // console.log(bookingRes.data);\n\n      setProcessing(false);\n      setSteps(3);\n    } catch (e) {\n      setProcessing(false);\n      setDisablePayment(false);\n\n      if (e.response) {\n        console.log(e.response.data);\n        console.log(e.response.status);\n      }\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"payment-title\"\n  }, \"Your Payment Details\"), processing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_loading__WEBPACK_IMPORTED_MODULE_2__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"booking-payment-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group input-group-1 flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"credit-card\"\n  }, \"Card Number \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"required-mark\"\n  }, \"*\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"credit-card\",\n    name: \"credit-card\",\n    type: \"number\",\n    placeholder: \"Card Number\",\n    required: true,\n    value: paymentForm[\"credit-card\"],\n    onChange: onPaymentBookingFormChange\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group input-group-2 flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"expiry-date\"\n  }, \"Expiry date \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"required-mark\"\n  }, \"*\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"expiry-date\",\n    name: \"expiry-date\",\n    type: \"expiry-date\",\n    placeholder: \"MM/YY\",\n    required: true,\n    pattern: \"[0-9]{2}/[0-9]{2}\",\n    value: paymentForm[\"expiry-date\"],\n    onChange: onPaymentBookingFormChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-box flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"cvc\"\n  }, \"CVC/CVV \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"required-mark\"\n  }, \"*\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"cvc\",\n    name: \"cvc\",\n    type: \"number\",\n    placeholder: \"***\",\n    pattern: \"[0-9]{3}\",\n    required: true,\n    value: paymentForm.cvc,\n    onChange: onPaymentBookingFormChange\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"button-container flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: onBackClick,\n    className: \"back-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: \"fas fa-arrow-left\"\n  }), \" Back to your booking details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    disabled: disablePayment,\n    onClick: onNextClick\n  }, \"Pay & Book Now\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"notice\"\n  }, \"Demo only uses Stripe Payment Api, use credit card number 4242424242424242,and random future expiry date, and random cvc.\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailPaymentForm);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-payment-form.jsx?");

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

/***/ "./client/room-detail/room-detail-sidebar-form.jsx":
/*!*********************************************************!*\
  !*** ./client/room-detail/room-detail-sidebar-form.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ \"react-datepicker\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction RoomDetailSidebarForm({\n  OpenDetailModal,\n  startDate,\n  endDate,\n  onStartDateChange,\n  onEndDateChange,\n  adults,\n  setAdults,\n  children,\n  setChildren\n}) {\n  const [guestDropDown, setGuestDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const guestfieldRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const dropdownChildrenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const dropdownSpanRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const dropdownIRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const caretDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // handles drop down when you click away\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    caretDown.current = document.querySelector(\".fa-caret-down\");\n    dropdownRef.current = document.querySelector(\".guest-dropdown\");\n    dropdownChildrenRef.current = document.querySelectorAll(\".guest-dropdown > li\");\n    dropdownSpanRef.current = document.querySelectorAll(\".guest-dropdown > li > span\");\n    dropdownIRef.current = document.querySelectorAll(\".guest-dropdown > li > span > i\");\n    guestfieldRef.current = document.querySelector(\".guest-field\"); // When the user clicks anywhere thats not the dropdown menu and caret, close it\n\n    function closeDropdown(e) {\n      if (e.target != caretDown.current && e.target != dropdownRef.current && e.target != guestfieldRef.current && e.target != dropdownChildrenRef.current[0] && e.target != dropdownChildrenRef.current[1] && e.target != dropdownSpanRef.current[0] && e.target != dropdownSpanRef.current[1] && e.target != dropdownSpanRef.current[2] && e.target != dropdownSpanRef.current[3] && e.target != dropdownIRef.current[0] && e.target != dropdownIRef.current[1] && e.target != dropdownIRef.current[2] && e.target != dropdownIRef.current[3]) {\n        setGuestDropDown(false);\n      }\n    }\n\n    window.addEventListener(\"click\", closeDropdown, true);\n    return () => {\n      window.removeEventListener(\"click\", closeDropdown, true);\n    };\n  }, []);\n\n  function onDropdownChange() {\n    setGuestDropDown(!guestDropDown);\n  }\n\n  function incrementAdults() {\n    setAdults(adults + 1);\n  }\n\n  function decrementAdults() {\n    if (adults == 1) {\n      return;\n    }\n\n    setAdults(adults - 1);\n  }\n\n  function incrementChildren() {\n    setChildren(children + 1);\n  }\n\n  function decrementChildren() {\n    if (children == 0) {\n      return;\n    }\n\n    setChildren(children - 1);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"room-detail-form flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"button-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: OpenDetailModal,\n    className: \"book-now\"\n  }, \"Book Now\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Check in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {\n    selected: startDate,\n    onChange: onStartDateChange,\n    selectsStart: true,\n    startDate: startDate,\n    endDate: endDate,\n    closeOnScroll: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Check out\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {\n    selected: endDate,\n    onChange: onEndDateChange,\n    selectsEnd: true,\n    startDate: startDate,\n    endDate: endDate,\n    minDate: startDate,\n    closeOnScroll: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group guest-field-group flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \"Guests\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    onClick: onDropdownChange,\n    className: \"guest-field\",\n    readOnly: true,\n    value: `${adults} adult, children ${children}`\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: onDropdownChange,\n    className: \"fas fa-caret-down\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: guestDropDown ? \"guest-dropdown guest-dropdown-reveal\" : \"guest-dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Adult\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: decrementAdults,\n    className: \"fas fa-minus-circle\"\n  }), adults, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: incrementAdults,\n    className: \"fas fa-plus-circle\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Children\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: decrementChildren,\n    className: \"fas fa-minus-circle\"\n  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: incrementChildren,\n    className: \"fas fa-plus-circle\"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"update\"\n  }, \"Update\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailSidebarForm);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-sidebar-form.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-sidebar.jsx":
/*!****************************************************!*\
  !*** ./client/room-detail/room-detail-sidebar.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _room_detail_sidebar_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-detail-sidebar-form */ \"./client/room-detail/room-detail-sidebar-form.jsx\");\n\n\n\nfunction RoomDetailSidebar({\n  OpenDetailModal,\n  startDate,\n  endDate,\n  setStartDate,\n  setEndDate,\n  adults,\n  setAdults,\n  children,\n  setChildren\n}) {\n  function onStartDateChange(date) {\n    setStartDate(date);\n  }\n\n  function onEndDateChange(date) {\n    setEndDate(date);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"aside\", {\n    className: \"side-bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_sidebar_form__WEBPACK_IMPORTED_MODULE_1__.default, {\n    startDate: startDate,\n    endDate: endDate,\n    onStartDateChange: onStartDateChange,\n    onEndDateChange: onEndDateChange,\n    OpenDetailModal: OpenDetailModal,\n    adults: adults,\n    setAdults: setAdults,\n    children: children,\n    setChildren: setChildren\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"get-help\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Need our help?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad libero, modi voluptate numquam laborum perferendis natus veniam corporis magnam beatae!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"332-45-4567\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"support@greendream.com\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailSidebar);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-sidebar.jsx?");

/***/ }),

/***/ "./client/room-detail/room-detail-steps.jsx":
/*!**************************************************!*\
  !*** ./client/room-detail/room-detail-steps.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomDetailSteps({\n  steps\n}) {\n  let content = null;\n\n  if (steps === 1) {\n    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"step-checked\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-check\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"step-2\"\n    }, \"2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"step-3\"\n    }, \"3\"));\n  }\n\n  if (steps === 2) {\n    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"step-checked\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-check\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"step-checked\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-check\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"step-3\"\n    }, \"3\"));\n  }\n\n  if (steps === 3) {\n    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"step-checked\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-check\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"step-checked\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-check\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"step-checked\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-check\"\n    })));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"steps flex\"\n  }, content);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetailSteps);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail-steps.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _room_detail_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-detail-sidebar */ \"./client/room-detail/room-detail-sidebar.jsx\");\n/* harmony import */ var _room_detail_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-detail-tab */ \"./client/room-detail/room-detail-tab.jsx\");\n/* harmony import */ var _room_detail_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-detail-content */ \"./client/room-detail/room-detail-content.jsx\");\n/* harmony import */ var _room_detail_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-detail-modal */ \"./client/room-detail/room-detail-modal.jsx\");\n/* harmony import */ var _room_detail_booking_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-detail-booking-content */ \"./client/room-detail/room-detail-booking-content.jsx\");\n/* harmony import */ var _room_detail_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-detail-steps */ \"./client/room-detail/room-detail-steps.jsx\");\n/* harmony import */ var _room_detail_booking_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room-detail-booking-info */ \"./client/room-detail/room-detail-booking-info.jsx\");\n\n\n\n\n\n\n\n\n\nfunction RoomDetail(props) {\n  const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"Description\");\n  const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  const [showDetailModal, setShowDetailModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {\n    return props.startDate ? new Date(props.startDate) : new Date();\n  });\n  const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {\n    return props.endDate ? new Date(props.endDate) : new Date(new Date().setDate(new Date().getDate() + 1));\n  });\n  const [bookingForm, setBookingForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    first_name: \"\",\n    last_name: \"\",\n    email: \"\",\n    phone: \"\",\n    street: \"\",\n    city: \"\",\n    zipcode: \"\"\n  });\n  const [paymentForm, setPaymentForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    \"credit-card\": \"\",\n    \"expiry-date\": \"\",\n    cvc: \"\"\n  });\n  const [adults, setAdults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(+props.adults || 2);\n  const [children, setChildren] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(+props.children || 0);\n  const [bookingid, setBookingID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    Stripe.setPublishableKey(\"pk_test_51IVfkxDJXRSte3d6NIfYevhg4l13WWIOHW5Vh2A3MGym35PvpuXn1ktv99aqpenMvQaSYiTf4E7orGaBL3olxBUx000cYuVDAE\");\n  }, []);\n\n  function ResetForm() {\n    setBookingForm({\n      first_name: \"\",\n      last_name: \"\",\n      email: \"\",\n      phone: \"\",\n      street: \"\",\n      city: \"\",\n      zipcode: \"\"\n    });\n    setPaymentForm({\n      \"credit-card\": \"\",\n      \"expiry-date\": \"\",\n      cvc: \"\"\n    });\n    setSteps(1);\n  }\n\n  function onBookingFormChange(e) {\n    setBookingForm({ ...bookingForm,\n      [e.target.name]: e.target.value\n    });\n  }\n\n  function onPaymentBookingFormChange(e) {\n    if (e.target.name === \"cvc\" && e.target.value.length > 3) {\n      return;\n    }\n\n    if (e.target.name === \"expiry-date\" && e.target.value.length > 5) {\n      return;\n    }\n\n    setPaymentForm({ ...paymentForm,\n      [e.target.name]: e.target.value\n    });\n  }\n\n  function CloseDetailModal() {\n    setShowDetailModal(false);\n    ResetForm();\n  }\n\n  function OpenDetailModal(e) {\n    e.preventDefault();\n    setShowDetailModal(true);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showDetailModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_modal__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-detail-booking flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: CloseDetailModal,\n    className: \"fas fa-times-circle\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"booking-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_steps__WEBPACK_IMPORTED_MODULE_6__.default, {\n    steps: steps\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"steps-names flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Your booking details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Your payment details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Booking Completed!\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_booking_content__WEBPACK_IMPORTED_MODULE_5__.default, {\n    room: props.room,\n    steps: steps,\n    setSteps: setSteps,\n    paymentForm: paymentForm,\n    bookingForm: bookingForm,\n    startDate: startDate,\n    endDate: endDate,\n    bookingid: bookingid,\n    setBookingID: setBookingID,\n    onPaymentBookingFormChange: onPaymentBookingFormChange,\n    onBookingFormChange: onBookingFormChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_booking_info__WEBPACK_IMPORTED_MODULE_7__.default, {\n    room: props.room,\n    adults: adults,\n    children: children,\n    startDate: startDate,\n    endDate: endDate\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container grid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-detail-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_tab__WEBPACK_IMPORTED_MODULE_2__.default, {\n    selectedTab: selectedTab,\n    setSelectedTab: setSelectedTab\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_content__WEBPACK_IMPORTED_MODULE_3__.default, {\n    selectedTab: selectedTab,\n    room: props.room\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_room_detail_sidebar__WEBPACK_IMPORTED_MODULE_1__.default, {\n    adults: adults,\n    setAdults: setAdults,\n    children: children,\n    setChildren: setChildren,\n    OpenDetailModal: OpenDetailModal,\n    startDate: startDate,\n    endDate: endDate,\n    setStartDate: setStartDate,\n    setEndDate: setEndDate\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetail);\n\n//# sourceURL=webpack://hotelx/./client/room-detail/room-detail.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-dropdown.jsx":
/*!*****************************************!*\
  !*** ./client/rooms/rooms-dropdown.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsDropDown({\n  showDropdown,\n  setShowDropdown,\n  selected,\n  setSelected\n}) {\n  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const caretDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  function onSelectClick(e) {\n    let selected = e.target.dataset.option;\n    setSelected(selected);\n  } // handles drop down when you click away\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dropdownRef.current = document.querySelector(\".recommended-dropdown\");\n    caretDownRef.current = document.querySelector(\".recommended .fa-caret-down\"); // When the user clicks anywhere thats not the dropdown menu and caret, close it\n\n    function closeDropdown(e) {\n      if (e.target != dropdownRef.current && e.target != caretDownRef.current) {\n        setShowDropdown(false);\n      }\n    }\n\n    window.addEventListener(\"click\", closeDropdown);\n    return () => {\n      window.removeEventListener(\"click\", closeDropdown);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: showDropdown ? \"recommended-dropdown reveal-dropdown\" : \"recommended-dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onSelectClick,\n    \"data-option\": \"plow\"\n  }, \"Price (low to high)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onSelectClick,\n    \"data-option\": \"phigh\"\n  }, \"Price (high to low)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onSelectClick,\n    \"data-option\": \"rlow\"\n  }, \"Rate (1 to 5)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    onClick: onSelectClick,\n    \"data-option\": \"rhigh\"\n  }, \"Rate (5 to 1)\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsDropDown);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-dropdown.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-grid-view.jsx":
/*!******************************************!*\
  !*** ./client/rooms/rooms-grid-view.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ \"./client/component/index.js\");\n\n\nlet BASE_URL;\n\nfunction RoomsGridView({\n  currentRooms,\n  startDate,\n  endDate,\n  adults,\n  children\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    BASE_URL = window.location.protocol + \"//\" + window.location.hostname + (window.location.port ? \":\" + window.location.port : \"\");\n  }, []);\n\n  function goDetailPage(id) {\n    return e => {\n      e.preventDefault();\n      const params = new URLSearchParams({\n        start_date: (0,_component__WEBPACK_IMPORTED_MODULE_1__.formatDate)(startDate),\n        end_date: (0,_component__WEBPACK_IMPORTED_MODULE_1__.formatDate)(endDate),\n        adults: adults,\n        children: children\n      });\n      window.location.href = `${BASE_URL}/room/${id}?${params.toString()}`;\n    };\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grid-view grid\"\n  }, currentRooms.map((room, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      onClick: goDetailPage(room.id),\n      key: index,\n      className: \"room-card\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"far fa-heart\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-card-pic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"responsive-img\",\n      src: room.photos[0],\n      alt: \"hotel\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-card-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, room.roomtype), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"ratings-reviews\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star-half-alt\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"review-count\"\n    }, room.reviewCount, \" Reviews\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"pricing\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$\", room.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"night\"))));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsGridView);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-grid-view.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ \"react-datepicker\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component */ \"./client/component/index.js\");\n\n\n\n\nfunction RoomsSearch({\n  startDate,\n  endDate,\n  setStartDate,\n  setEndDate,\n  setTotalNights,\n  adults,\n  setAdults,\n  children,\n  setChildren\n}) {\n  const [guestDropDown, setGuestDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,_component__WEBPACK_IMPORTED_MODULE_2__.useDropDownClickAway)(setGuestDropDown);\n\n  function onDropdownChange() {\n    setGuestDropDown(!guestDropDown);\n  }\n\n  function onButtonClick(e) {\n    e.preventDefault();\n    let calculateNights = (0,_component__WEBPACK_IMPORTED_MODULE_2__.getDaysBetween)(startDate, endDate);\n    setTotalNights(calculateNights);\n  }\n\n  function incrementAdults() {\n    setAdults(adults + 1);\n  }\n\n  function decrementAdults() {\n    if (adults == 1) {\n      return;\n    }\n\n    setAdults(adults - 1);\n  }\n\n  function incrementChildren() {\n    setChildren(children + 1);\n  }\n\n  function decrementChildren() {\n    if (children == 0) {\n      return;\n    }\n\n    setChildren(children - 1);\n  }\n\n  function onStartDateChange(date) {\n    setStartDate(date);\n  }\n\n  function onEndDateChange(date) {\n    setEndDate(date);\n  }\n\n  function onSubmit(e) {\n    e.preventDefault();\n    let calculateNights = (0,_component__WEBPACK_IMPORTED_MODULE_2__.getDaysBetween)(startDate, endDate);\n    setTotalNights(calculateNights);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rooms-search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"hotel-search rooms-h flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check in \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {\n    selected: startDate,\n    onChange: onStartDateChange,\n    selectsStart: true,\n    startDate: startDate,\n    endDate: endDate,\n    closeOnScroll: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check out\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {\n    selected: endDate,\n    onChange: onEndDateChange,\n    selectsEnd: true,\n    startDate: startDate,\n    endDate: endDate,\n    minDate: startDate,\n    closeOnScroll: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group guest-field-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Guests\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    readOnly: true,\n    onClick: onDropdownChange,\n    className: \"guest-field\",\n    value: `${adults} adult, children ${children}`,\n    type: \"text\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: onDropdownChange,\n    className: \"fas fa-caret-down\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: guestDropDown ? \"guest-dropdown guest-dropdown-reveal\" : \"guest-dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Adult\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: decrementAdults,\n    className: \"fas fa-minus-circle\"\n  }), adults, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: incrementAdults,\n    className: \"fas fa-plus-circle\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Children\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: decrementChildren,\n    className: \"fas fa-minus-circle\"\n  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: incrementChildren,\n    className: \"fas fa-plus-circle\"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: onButtonClick,\n    className: \"rooms-search-button\",\n    type: \"submit\"\n  }, \"Update\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsSearch);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-search.jsx?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ \"./client/component/index.js\");\n\n\nlet BASE_URL;\n\nfunction RoomsStackView({\n  currentRooms,\n  totalNights,\n  adults,\n  children,\n  startDate,\n  endDate\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    BASE_URL = window.location.protocol + \"//\" + window.location.hostname + (window.location.port ? \":\" + window.location.port : \"\");\n  }, []);\n\n  function goDetailPage(id) {\n    return e => {\n      e.preventDefault();\n      const params = new URLSearchParams({\n        start_date: (0,_component__WEBPACK_IMPORTED_MODULE_1__.formatDate)(startDate),\n        end_date: (0,_component__WEBPACK_IMPORTED_MODULE_1__.formatDate)(endDate),\n        adults: adults,\n        children: children\n      });\n      window.location.href = `${BASE_URL}/room/${id}?${params.toString()}`;\n    };\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"stack-view\"\n  }, currentRooms.map((room, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: \"room\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"far fa-heart\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-pic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"responsive-img\",\n      src: room.photos[0],\n      alt: \"a hotel room\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, room.roomtype), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"ratings\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star-half-alt fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"review-count\"\n    }, room.reviewCount, \" Reviews\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"bed\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Bed\"), \": \", room.beds), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Max\"), \": 4 People\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-pricing\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: \"price\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"price-font\"\n    }, \"$\", room.price), \"/night\"), totalNights > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: \"total-night-price\"\n    }, +room.price * totalNights, \" total\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      onClick: goDetailPage(room.id)\n    }, \"Choose\")));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsStackView);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-stack-view.jsx?");

/***/ }),

/***/ "./client/rooms/rooms.jsx":
/*!********************************!*\
  !*** ./client/rooms/rooms.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rooms_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-paginate */ \"./client/rooms/rooms-paginate.jsx\");\n/* harmony import */ var _rooms_sortby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms-sortby */ \"./client/rooms/rooms-sortby.jsx\");\n/* harmony import */ var _rooms_stack_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-stack-view */ \"./client/rooms/rooms-stack-view.jsx\");\n/* harmony import */ var _rooms_grid_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms-grid-view */ \"./client/rooms/rooms-grid-view.jsx\");\n/* harmony import */ var _rooms_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rooms-sidebar */ \"./client/rooms/rooms-sidebar.jsx\");\n/* harmony import */ var _rooms_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rooms-search */ \"./client/rooms/rooms-search.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nfunction Rooms(props) {\n  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"stack\");\n  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [perPage, setPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.data || []);\n  const [rooms, setRooms] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.rooms.sort(sortPriceLow) || []);\n  const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.ceil(data.length / perPage) || 0);\n  const [searchCount, setSearchCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.length || 0);\n  const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [filter, setfilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    \"standard-room\": false,\n    \"double-room\": false,\n    \"queen-room\": false,\n    \"king-room\": false\n  });\n  const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {\n    return props.startDate ? new Date(props.startDate) : new Date();\n  });\n  const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {\n    return props.endDate ? new Date(props.endDate) : new Date(new Date().setDate(new Date().getDate() + 1));\n  });\n  const [adults, setAdults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(+props.adults || 2);\n  const [children, setChildren] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(+props.children || 0);\n  const [totalNights, setTotalNights] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"plow\");\n\n  function clickDropdown() {\n    setShowDropdown(!showDropdown);\n  }\n\n  function clickDisplay(e) {\n    setDisplay(e.target.dataset.display);\n  }\n\n  function FilterRooms() {\n    let selectedFilters = [];\n    let newData;\n\n    if (filter[\"standard-room\"]) {\n      selectedFilters.push(\"Standard Room\");\n    }\n\n    if (filter[\"double-room\"]) {\n      selectedFilters.push(\"Double Room\");\n    }\n\n    if (filter[\"queen-room\"]) {\n      selectedFilters.push(\"Queen Room\");\n    }\n\n    if (filter[\"king-room\"]) {\n      selectedFilters.push(\"King Room\");\n    }\n\n    if (selectedFilters.length) {\n      newData = data.filter(data => {\n        return selectedFilters.includes(data.roomtype);\n      });\n      setSearchCount(newData.length);\n      setPageCount(Math.ceil(newData.length / perPage));\n      setCurrentPage(0);\n      setRooms(newData);\n    } else {\n      setSearchCount(data.length);\n      setPageCount(Math.ceil(data.length / perPage));\n      setCurrentPage(0);\n      setRooms(data);\n    }\n  } // for intial render\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    //reference scrollIntoView\n    contentRef.current = document.querySelector(\".hotel-search\");\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    FilterRooms();\n  }, [filter]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (selected === \"plow\") {\n      setRooms([...rooms.sort(sortPriceLow)]);\n    }\n\n    if (selected === \"phigh\") {\n      setRooms([...rooms.sort(sortPriceHigh)]);\n    }\n\n    if (selected === \"rlow\") {\n      setRooms([...rooms.sort(sortReviewLow)]);\n    }\n\n    if (selected === \"rhigh\") {\n      setRooms([...rooms.sort(sortReviewHigh)]);\n    }\n  }, [selected]);\n\n  function sortPriceLow(a, b) {\n    return +a.price - +b.price;\n  }\n\n  function sortPriceHigh(a, b) {\n    return +b.price - +a.price;\n  }\n\n  function sortReviewLow(a, b) {\n    return a.reviewCount - b.reviewCount;\n  }\n\n  function sortReviewHigh(a, b) {\n    return b.reviewCount - a.reviewCount;\n  }\n\n  function handlePageClick(data) {\n    let selected = data.selected;\n    setCurrentPage(selected);\n    contentRef.current.scrollIntoView({\n      behavior: \"smooth\"\n    });\n  }\n\n  let endIndex = (currentPage + 1) * perPage;\n  let startIndex = endIndex - perPage;\n  let currentRooms = rooms.slice(startIndex, endIndex);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_search__WEBPACK_IMPORTED_MODULE_6__.default, {\n    startDate: startDate,\n    endDate: endDate,\n    setStartDate: setStartDate,\n    setEndDate: setEndDate,\n    setTotalNights: setTotalNights,\n    adults: adults,\n    setAdults: setAdults,\n    children: children,\n    setChildren: setChildren\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rooms-main-content grid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_sidebar__WEBPACK_IMPORTED_MODULE_5__.default, {\n    filter: filter,\n    setfilter: setfilter\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_sortby__WEBPACK_IMPORTED_MODULE_2__.default, {\n    perPage: perPage,\n    searchCount: searchCount,\n    clickDropdown: clickDropdown,\n    setShowDropdown: setShowDropdown,\n    showDropdown: showDropdown,\n    clickDisplay: clickDisplay,\n    selected: selected,\n    setSelected: setSelected\n  }), display === \"stack\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_stack_view__WEBPACK_IMPORTED_MODULE_3__.default, {\n    adults: adults,\n    children: children,\n    startDate: startDate,\n    endDate: endDate,\n    currentRooms: currentRooms,\n    totalNights: totalNights\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_grid_view__WEBPACK_IMPORTED_MODULE_4__.default, {\n    adults: adults,\n    children: children,\n    startDate: startDate,\n    endDate: endDate,\n    currentRooms: currentRooms\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_paginate__WEBPACK_IMPORTED_MODULE_1__.default, {\n    currentPage: currentPage,\n    pageCount: pageCount,\n    handlePageClick: handlePageClick\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rooms);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms.jsx?");

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Update with your config settings.\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst pgConnection =  true ? process.env.DEV_DATABASE_URL : 0;\nmodule.exports = {\n  development: {\n    client: \"pg\",\n    connection: pgConnection,\n    pool: {\n      min: 2,\n      max: 10\n    },\n    migrations: {\n      directory: \"./data/migrations\"\n    },\n    seeds: {\n      directory: \"./data/seeds\"\n    }\n  }\n};\n\n//# sourceURL=webpack://hotelx/./knexfile.js?");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_home_home_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/home/home-search */ \"./client/home/home-search.jsx\");\n\n\n\n\nasync function Home(req, res, next) {\n  try {\n    const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_home_home_search__WEBPACK_IMPORTED_MODULE_2__.default, null));\n    res.render(\"Home/home.pug\", {\n      content\n    });\n  } catch (e) {\n    console.log(e);\n    next(e);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://hotelx/./server/Home/home.controller.js?");

/***/ }),

/***/ "./server/Home/home.route.js":
/*!***********************************!*\
  !*** ./server/Home/home.route.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst homeController = __webpack_require__(/*! ./home.controller */ \"./server/Home/home.controller.js\").default;\n\nconst homeRouter = express.Router();\nhomeRouter.get(\"/\", homeController);\nmodule.exports = homeRouter;\n\n//# sourceURL=webpack://hotelx/./server/Home/home.route.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_room_detail_room_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/room-detail/room-detail */ \"./client/room-detail/room-detail.jsx\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ \"./service/index.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_service__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nasync function RoomDetail(req, res, next) {\n  const {\n    id\n  } = req.params;\n  let {\n    start_date,\n    end_date,\n    adults,\n    children\n  } = req.query;\n  let room = await _service__WEBPACK_IMPORTED_MODULE_3__.rooms.getRoom(id);\n  let roomtype = room.roomtype;\n  let roomData = {\n    room: room,\n    startDate: start_date,\n    endDate: end_date,\n    adults: adults,\n    children: children\n  };\n\n  try {\n    const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_room_detail_room_detail__WEBPACK_IMPORTED_MODULE_2__.default, {\n      room: room,\n      startDate: start_date,\n      endDate: end_date,\n      adults: adults,\n      children: children\n    }));\n    res.render(\"RoomDetail/roomdetail.pug\", {\n      content,\n      roomtype,\n      roomData\n    });\n  } catch (e) {\n    console.log(e);\n    next(e);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomDetail);\n\n//# sourceURL=webpack://hotelx/./server/RoomDetail/roomdetail.controller.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_rooms_rooms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/rooms/rooms */ \"./client/rooms/rooms.jsx\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service */ \"./service/index.js\");\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_service__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nasync function Rooms(req, res, next) {\n  let {\n    start_date,\n    end_date,\n    adults,\n    children\n  } = req.query;\n\n  try {\n    let roomData = await _service__WEBPACK_IMPORTED_MODULE_3__.rooms.getAllRooms();\n    let roomsData = {\n      data: roomData,\n      rooms: roomData,\n      startDate: start_date,\n      endDate: end_date,\n      adults: adults,\n      children: children\n    };\n    const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_rooms_rooms__WEBPACK_IMPORTED_MODULE_2__.default, {\n      data: roomData,\n      rooms: roomData,\n      startDate: start_date,\n      endDate: end_date,\n      adults: adults,\n      children: children\n    }));\n    res.render(\"Rooms/rooms.pug\", {\n      content,\n      roomsData\n    });\n  } catch (e) {\n    next(e);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rooms);\n\n//# sourceURL=webpack://hotelx/./server/Rooms/rooms.controller.js?");

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

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

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

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("nanoid");;

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");;

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

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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