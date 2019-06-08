/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/components/Home.js":
/*!***************************************!*\
  !*** ./src/client/components/Home.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"app\"\n  }, \"Home Component\");\n});\n\n//# sourceURL=webpack:///./src/client/components/Home.js?");

/***/ }),

/***/ "./src/client/state/Products/actionTypes.js":
/*!**************************************************!*\
  !*** ./src/client/state/Products/actionTypes.js ***!
  \**************************************************/
/*! exports provided: FETCH_PRODUCTS_SERVER_INIT, FETCH_PRODUCTS_SERVER_SUCCESS, FETCH_PRODUCTS_SERVER_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_PRODUCTS_SERVER_INIT\", function() { return FETCH_PRODUCTS_SERVER_INIT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_PRODUCTS_SERVER_SUCCESS\", function() { return FETCH_PRODUCTS_SERVER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_PRODUCTS_SERVER_FAILURE\", function() { return FETCH_PRODUCTS_SERVER_FAILURE; });\n/**\n * FETCHING PRODUCTS SERVER SIDE\n */\nvar FETCH_PRODUCTS_SERVER_INIT = 'CALORIES/FETCH_PRODUCTS_SERVER_INIT';\nvar FETCH_PRODUCTS_SERVER_SUCCESS = 'CALORIES/FETCH_PRODUCTS_SERVER_SUCCESS';\nvar FETCH_PRODUCTS_SERVER_FAILURE = 'CALORIES/FETCH_PRODUCTS_SERVER_FAILURE';\n\n//# sourceURL=webpack:///./src/client/state/Products/actionTypes.js?");

/***/ }),

/***/ "./src/client/state/Products/constants.js":
/*!************************************************!*\
  !*** ./src/client/state/Products/constants.js ***!
  \************************************************/
/*! exports provided: NAME, INIT_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NAME\", function() { return NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE\", function() { return INIT_STATE; });\nvar NAME = 'Products';\nvar INIT_STATE = {\n  error: null,\n  failed: false,\n  initialized: false,\n  products: []\n};\n\n//# sourceURL=webpack:///./src/client/state/Products/constants.js?");

/***/ }),

/***/ "./src/client/state/Products/reducer.js":
/*!**********************************************!*\
  !*** ./src/client/state/Products/reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var STATE_Products_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! STATE/Products/actionTypes */ \"./src/client/state/Products/actionTypes.js\");\n/* harmony import */ var STATE_Products_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! STATE/Products/constants */ \"./src/client/state/Products/constants.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : STATE_Products_constants__WEBPACK_IMPORTED_MODULE_2__[\"INIT_STATE\"];\n\n  var _ref = arguments.length > 1 ? arguments[1] : undefined,\n      type = _ref.type,\n      payload = _ref.payload,\n      error = _ref.error;\n\n  switch (type) {\n    case STATE_Products_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_PRODUCTS_SERVER_INIT\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        initialized: true\n      });\n\n    case STATE_Products_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_PRODUCTS_SERVER_FAILURE\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        error: error,\n        failed: true\n      });\n\n    case STATE_Products_actionTypes__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_PRODUCTS_SERVER_SUCCESS\"]:\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {\n        failed: false,\n        products: payload\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/state/Products/reducer.js?");

/***/ }),

/***/ "./src/client/state/reducers.js":
/*!**************************************!*\
  !*** ./src/client/state/reducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var STATE_Products_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! STATE/Products/constants */ \"./src/client/state/Products/constants.js\");\n/* harmony import */ var STATE_Products_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! STATE/Products/reducer */ \"./src/client/state/Products/reducer.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, STATE_Products_constants__WEBPACK_IMPORTED_MODULE_2__[\"NAME\"], STATE_Products_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])));\n\n//# sourceURL=webpack:///./src/client/state/reducers.js?");

/***/ }),

/***/ "./src/routes/Routes.js":
/*!******************************!*\
  !*** ./src/routes/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var COMPONENTS_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! COMPONENTS/Home */ \"./src/client/components/Home.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: COMPONENTS_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/routes/Routes.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var SERVER_UTILS_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SERVER_UTILS/renderer */ \"./src/server/utils/renderer.js\");\n/* harmony import */ var SERVER_UTILS_createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SERVER_UTILS/createStore */ \"./src/server/utils/createStore.js\");\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = 5000;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\napp.get('*', function (req, res) {\n  var store = Object(SERVER_UTILS_createStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  res.send(Object(SERVER_UTILS_renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, store));\n});\napp.listen(PORT, function () {\n  console.log(\"Listening on \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/server/utils/createStore.js":
/*!*****************************************!*\
  !*** ./src/server/utils/createStore.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var STATE_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! STATE/reducers */ \"./src/client/state/reducers.js\");\n\n\n\nvar middleware = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a);\nvar initState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(STATE_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initState, middleware);\n  return store;\n});\n\n//# sourceURL=webpack:///./src/server/utils/createStore.js?");

/***/ }),

/***/ "./src/server/utils/renderer.js":
/*!**************************************!*\
  !*** ./src/server/utils/renderer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ROUTES_Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ROUTES/Routes */ \"./src/routes/Routes.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(ROUTES_Routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])))));\n  return \"\\n  <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <title>Calories</title>\\n        <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap\\\" />\\n      </head>\\n      <body>\\n        <div id=\\\"app\\\">\".concat(content, \"</div>\\n        <script src=\\\"clientBundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \");\n});\n\n//# sourceURL=webpack:///./src/server/utils/renderer.js?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectSpread\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectSpread%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });