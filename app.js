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

eval("// setup all server routes\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst serverRouter = express.Router();\n\nconst homeRoute = __webpack_require__(/*! ./Home */ \"./server/Home/index.js\");\n\nserverRouter.use(\"/\", homeRoute);\nmodule.exports = serverRouter;\n\n//# sourceURL=webpack://hotelx/./server/server.routes.js?");

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