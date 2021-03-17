/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "cron_js";
exports.ids = ["cron_js"];
exports.modules = {

/***/ "./cron.js":
/*!*****************!*\
  !*** ./cron.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const db = __webpack_require__(/*! ./data/dbConfig */ \"./data/dbConfig.js\");\n\nconst cron = __webpack_require__(/*! node-cron */ \"node-cron\");\n\nfunction formatDate(date_object) {\n  let date = date_object.getDate();\n  let year = date_object.getFullYear();\n  let month = date_object.getMonth() + 1;\n  return `${month}-${date}-${year}`;\n}\n\nfunction bookingDates(date) {\n  return db(\"booking\").where(\"end_date\", \"<=\", date);\n}\n\nfunction deleteBookings(list) {\n  return db(\"booking\").whereIn(\"id\", list).del();\n}\n\nfunction updateRooms(list, updates) {\n  return db(\"rooms\").whereIn(\"id\", list).update(updates);\n}\n\ncron.schedule(\"0 0 11 * * *\", async () => {\n  try {\n    let d = new Date();\n    d = formatDate(d);\n    let bookings = await bookingDates(d);\n    let bookingListIDs = bookings.map(booking => {\n      return booking.id;\n    });\n    let BookingRoomIDs = bookings.map(booking => {\n      return booking.room_id;\n    });\n    await deleteBookings(bookingListIDs);\n    await updateRooms(BookingRoomIDs, {\n      status: \"Open\"\n    });\n    console.log(\"done\");\n  } catch (e) {\n    console.log(e);\n  }\n});\n\n//# sourceURL=webpack://hotelx/./cron.js?");

/***/ })

};
;