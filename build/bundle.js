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

/***/ "./src/client/components/CalorieIntakeForm/component.js":
/*!**************************************************************!*\
  !*** ./src/client/components/CalorieIntakeForm/component.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CalorieIntakeForm; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hapi/joi */ \"@hapi/joi\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var CLIENT_UTILS_fillLeftovers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! CLIENT_UTILS/fillLeftovers */ \"./src/client/utils/fillLeftovers.js\");\n/* harmony import */ var COMPONENTS_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! COMPONENTS/Paper */ \"./src/client/components/Paper/index.js\");\n\n\n\n\n\n\n\n\n/* eslint-disable newline-per-chained-call */\n\n\n\n\n\n\n\nvar CalorieIntakeForm =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CalorieIntakeForm, _Component);\n\n  function CalorieIntakeForm() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CalorieIntakeForm);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CalorieIntakeForm)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"formValues\", _hapi_joi__WEBPACK_IMPORTED_MODULE_10___default.a.object().keys({\n      calorieIntake: _hapi_joi__WEBPACK_IMPORTED_MODULE_10___default.a.number().integer().min(0).max(2000),\n      beverage: _hapi_joi__WEBPACK_IMPORTED_MODULE_10___default.a.number().integer().min(0).max(5),\n      numOfContainers: _hapi_joi__WEBPACK_IMPORTED_MODULE_10___default.a.number().integer().min(1).max(11)\n    }));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      beverageErr: false,\n      beverageErrMsg: '',\n      beverageInitRender: true,\n      calorieIntake: '750',\n      calorieIntakeErr: false,\n      calorieIntakeErrMsg: '',\n      leftOver: [],\n      msgBad: 'You have exceeded your limit!!!',\n      selectedIndex: 99,\n      showMsg: false,\n      numOfContainers: 0,\n      numOfContainersErr: false,\n      numOfContainersErrMsg: '',\n      numOfContainersInitRender: true\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleCalorieChange\", function (e) {\n      var _Joi$validate = _hapi_joi__WEBPACK_IMPORTED_MODULE_10___default.a.validate({\n        calorieIntake: parseInt(e.target.value, 10)\n      }, _this.formValues),\n          error = _Joi$validate.error,\n          value = _Joi$validate.value;\n\n      _this.setState({\n        calorieIntake: value.calorieIntake || 0,\n        calorieIntakeErr: !!error,\n        calorieIntakeErrMsg: 'Total Caffeine Intake should be between 0 and 2000mg.'\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleBeverageSelect\", function (e) {\n      var _Joi$validate2 = _hapi_joi__WEBPACK_IMPORTED_MODULE_10___default.a.validate({\n        beverage: parseInt(e.target.value, 10)\n      }, _this.formValues),\n          error = _Joi$validate2.error,\n          value = _Joi$validate2.value;\n\n      _this.setState({\n        selectedIndex: value.beverage || 99,\n        beverageErr: !!error,\n        beverageErrMsg: 'Select a beverage.',\n        beverageInitRender: false\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleConsumptionSelect\", function (e) {\n      var _Joi$validate3 = _hapi_joi__WEBPACK_IMPORTED_MODULE_10___default.a.validate({\n        numOfContainers: parseInt(e.target.value, 10)\n      }, _this.formValues),\n          error = _Joi$validate3.error,\n          value = _Joi$validate3.value;\n\n      _this.setState({\n        numOfContainers: value.numOfContainers || 0,\n        numOfContainersErr: !!error,\n        numOfContainersErrMsg: 'Select number of Containers consumed.',\n        numOfContainersInitRender: false\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n      var _this$state = _this.state,\n          selectedIndex = _this$state.selectedIndex,\n          products = _this$state.products,\n          numOfContainers = _this$state.numOfContainers,\n          calorieIntake = _this$state.calorieIntake;\n      var selectedProduct = products[selectedIndex - 1] || {};\n      var consumedCalories = numOfContainers * selectedProduct.servings * selectedProduct.caffeinePerServing;\n      var leftoverCalories = calorieIntake - consumedCalories;\n      var drinksCanConsume = Object(CLIENT_UTILS_fillLeftovers__WEBPACK_IMPORTED_MODULE_11__[\"fillLeftover\"])(products, leftoverCalories);\n\n      _this.setState({\n        leftOver: drinksCanConsume,\n        showMsg: true\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"getErrorMsgs\", function () {\n      var _this$state2 = _this.state,\n          calorieIntakeErr = _this$state2.calorieIntakeErr,\n          calorieIntakeErrMsg = _this$state2.calorieIntakeErrMsg,\n          beverageErr = _this$state2.beverageErr,\n          beverageErrMsg = _this$state2.beverageErrMsg,\n          numOfContainersErr = _this$state2.numOfContainersErr,\n          numOfContainersErrMsg = _this$state2.numOfContainersErrMsg;\n      var errs = [];\n\n      if (calorieIntakeErr) {\n        errs.push(calorieIntakeErrMsg);\n      }\n\n      if (beverageErr) {\n        errs.push(beverageErrMsg);\n      }\n\n      if (numOfContainersErr) {\n        errs.push(numOfContainersErrMsg);\n      }\n\n      return errs;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"messageGenerator\", function (msgs) {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"p\", null, \"You can still consume:\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"ul\", null, msgs.map(function (msg, i) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"li\", {\n          key: i\n        }, msg.name);\n      })));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"renderResults\", function () {\n      var _this$state3 = _this.state,\n          showMsg = _this$state3.showMsg,\n          leftOver = _this$state3.leftOver,\n          msgBad = _this$state3.msgBad;\n\n      if (showMsg && leftOver.length === 0) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(COMPONENTS_Paper__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          msg: msgBad\n        });\n      } else if (showMsg && leftOver.length !== 0) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(COMPONENTS_Paper__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          msg: _this.messageGenerator(leftOver)\n        });\n      }\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CalorieIntakeForm, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state4 = this.state,\n          beverageErr = _this$state4.beverageErr,\n          beverageErrMsg = _this$state4.beverageErrMsg,\n          beverageInitRender = _this$state4.beverageInitRender,\n          calorieIntake = _this$state4.calorieIntake,\n          calorieIntakeErr = _this$state4.calorieIntakeErr,\n          calorieIntakeErrMsg = _this$state4.calorieIntakeErrMsg,\n          selectedIndex = _this$state4.selectedIndex,\n          numOfContainers = _this$state4.numOfContainers,\n          numOfContainersErr = _this$state4.numOfContainersErr,\n          numOfContainersErrMsg = _this$state4.numOfContainersErrMsg,\n          numOfContainersInitRender = _this$state4.numOfContainersInitRender,\n          showMsg = _this$state4.showMsg;\n      var getProducts = this.props.getProducts;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        style: {\n          margin: '15px',\n          textAlign: 'center'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"FormControl\"], {\n        style: {\n          margin: '15px',\n          minWidth: 120\n        },\n        align: \"center\",\n        error: calorieIntakeErr\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"InputLabel\"], {\n        htmlFor: \"calorieIntake\"\n      }, \"Total Caffeine Intake:\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Input\"], {\n        \"aria-describedby\": \"calorIntakeHelper\",\n        id: \"calorieIntake\",\n        value: calorieIntake,\n        onChange: this.handleCalorieChange,\n        type: \"number\"\n      }), calorieIntakeErr && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"FormHelperText\"], {\n        id: \"calorIntakeHelper\"\n      }, calorieIntakeErrMsg)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"FormControl\"], {\n        style: {\n          margin: '15px',\n          minWidth: 190\n        },\n        align: \"center\",\n        error: beverageErr\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"InputLabel\"], {\n        htmlFor: \"beverageConsumed\"\n      }, \"Beverage:\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Select\"], {\n        onChange: this.handleBeverageSelect,\n        inputProps: {\n          'aria-describedby': 'beverageConsumedHelper',\n          'id': 'beverageConsumed'\n        },\n        value: selectedIndex\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"MenuItem\"], {\n        value: 99\n      }, \"- Select Beverage -\"), getProducts.map(function (_ref, i) {\n        var name = _ref.name;\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"MenuItem\"], {\n          key: name,\n          value: i + 1\n        }, name);\n      })), beverageErr && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"FormHelperText\"], {\n        id: \"beverageConsumedHelper\"\n      }, beverageErrMsg)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"FormControl\"], {\n        style: {\n          margin: '15px',\n          minWidth: 200\n        },\n        align: \"center\",\n        error: numOfContainersErr\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"InputLabel\"], {\n        htmlFor: \"drinksConsumed\"\n      }, \"Containers of Beverage:\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Select\"], {\n        value: numOfContainers,\n        onChange: this.handleConsumptionSelect,\n        inputProps: {\n          'aria-describedby': 'drinksConsumedHelper',\n          'id': 'drinksConsumed'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"MenuItem\"], {\n        value: 0\n      }, \"- Select Containers Consumed -\"), Array(10).fill().map(function (_, i) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"MenuItem\"], {\n          key: i,\n          value: i + 1\n        }, i + 1);\n      })), numOfContainersErr && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"FormHelperText\"], {\n        id: \"drinksConsumedHelper\"\n      }, numOfContainersErrMsg)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        variant: \"contained\",\n        color: \"primary\",\n        type: \"submit\",\n        style: {\n          margin: '15px'\n        },\n        disabled: beverageInitRender || numOfContainersInitRender || this.getErrorMsgs().length > 0\n      }, \"Submit\")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        id: \"results\"\n      }, showMsg && !beverageInitRender && !numOfContainersInitRender && this.getErrorMsgs().length === 0 && this.renderResults()));\n    }\n  }]);\n\n  return CalorieIntakeForm;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\nCalorieIntakeForm.propTypes = {\n  getProducts: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array\n};\nCalorieIntakeForm.defaultProps = {\n  getProducts: []\n};\n\n//# sourceURL=webpack:///./src/client/components/CalorieIntakeForm/component.js?");

/***/ }),

/***/ "./src/client/components/CalorieIntakeForm/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/CalorieIntakeForm/index.js ***!
  \**********************************************************/
/*! exports provided: default, loadData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadData\", function() { return loadData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var STATE_Products_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! STATE/Products/selectors */ \"./src/client/state/Products/selectors.js\");\n/* harmony import */ var STATE_Products_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! STATE/Products/actions */ \"./src/client/state/Products/actions.js\");\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ \"./src/client/components/CalorieIntakeForm/component.js\");\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    getProducts: Object(STATE_Products_selectors__WEBPACK_IMPORTED_MODULE_2__[\"getProducts\"])(state)\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\nvar loadData = function loadData(_ref) {\n  var dispatch = _ref.dispatch;\n  return dispatch(Object(STATE_Products_actions__WEBPACK_IMPORTED_MODULE_3__[\"fetchProducts\"])());\n};\n\n//# sourceURL=webpack:///./src/client/components/CalorieIntakeForm/index.js?");

/***/ }),

/***/ "./src/client/components/Home.js":
/*!***************************************!*\
  !*** ./src/client/components/Home.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var COMPONENTS_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! COMPONENTS/TitleBar */ \"./src/client/components/TitleBar/index.js\");\n/* harmony import */ var COMPONENTS_CalorieIntakeForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! COMPONENTS/CalorieIntakeForm */ \"./src/client/components/CalorieIntakeForm/index.js\");\n\n\n\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(COMPONENTS_TitleBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(COMPONENTS_CalorieIntakeForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Home,\n  loadData: COMPONENTS_CalorieIntakeForm__WEBPACK_IMPORTED_MODULE_2__[\"loadData\"]\n});\n\n//# sourceURL=webpack:///./src/client/components/Home.js?");

/***/ }),

/***/ "./src/client/components/Paper/index.js":
/*!**********************************************!*\
  !*** ./src/client/components/Paper/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      padding: theme.spacing(3, 2)\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var msg = _ref.msg;\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    variant: \"h5\",\n    component: \"h3\"\n  }, \"Results:\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    component: \"div\"\n  }, msg)));\n});\n\n//# sourceURL=webpack:///./src/client/components/Paper/index.js?");

/***/ }),

/***/ "./src/client/components/TitleBar/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/TitleBar/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    colorPrimary: '#00b8ff'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    position: \"static\",\n    color: \"primary\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"h5\",\n    color: \"inherit\",\n    align: \"center\",\n    display: \"block\"\n  }, \"Calories\"))));\n});\n\n//# sourceURL=webpack:///./src/client/components/TitleBar/index.js?");

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

/***/ "./src/client/state/Products/actions.js":
/*!**********************************************!*\
  !*** ./src/client/state/Products/actions.js ***!
  \**********************************************/
/*! exports provided: fetchProductsInit, fetchProductsFailure, fetchProductsSuccess, fetchProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProductsInit\", function() { return fetchProductsInit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProductsFailure\", function() { return fetchProductsFailure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProductsSuccess\", function() { return fetchProductsSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProducts\", function() { return fetchProducts; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var STATE_Products_actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! STATE/Products/actionTypes */ \"./src/client/state/Products/actionTypes.js\");\n/* harmony import */ var CLIENT_UTILS_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! CLIENT_UTILS/products */ \"./src/client/utils/products.js\");\n\n\n\n\n\nvar fetchProductsInit = function fetchProductsInit() {\n  return {\n    type: STATE_Products_actionTypes__WEBPACK_IMPORTED_MODULE_3__[\"FETCH_PRODUCTS_SERVER_INIT\"]\n  };\n};\nvar fetchProductsFailure = function fetchProductsFailure(error) {\n  return {\n    type: STATE_Products_actionTypes__WEBPACK_IMPORTED_MODULE_3__[\"FETCH_PRODUCTS_SERVER_FAILURE\"],\n    error: error\n  };\n};\nvar fetchProductsSuccess = function fetchProductsSuccess(payload) {\n  return {\n    type: STATE_Products_actionTypes__WEBPACK_IMPORTED_MODULE_3__[\"FETCH_PRODUCTS_SERVER_SUCCESS\"],\n    payload: payload\n  };\n};\nvar fetchProducts = function fetchProducts() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n        var resp, product;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                dispatch(fetchProductsInit()); // placeholder until api is complete\n\n                _context.next = 4;\n                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()('https://jsonplaceholder.typicode.com/todos/1');\n\n              case 4:\n                resp = _context.sent;\n                _context.next = 7;\n                return resp.json();\n\n              case 7:\n                product = _context.sent;\n                return _context.abrupt(\"return\", dispatch(fetchProductsSuccess(CLIENT_UTILS_products__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n\n              case 11:\n                _context.prev = 11;\n                _context.t0 = _context[\"catch\"](0);\n                return _context.abrupt(\"return\", dispatch(fetchProductsFailure(_context.t0)));\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 11]]);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\n\n//# sourceURL=webpack:///./src/client/state/Products/actions.js?");

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

/***/ "./src/client/state/Products/selectors.js":
/*!************************************************!*\
  !*** ./src/client/state/Products/selectors.js ***!
  \************************************************/
/*! exports provided: getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony import */ var STATE_Products_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! STATE/Products/constants */ \"./src/client/state/Products/constants.js\");\n\nvar getProducts = function getProducts(state) {\n  return state[STATE_Products_constants__WEBPACK_IMPORTED_MODULE_0__[\"NAME\"]].products || [];\n};\n\n//# sourceURL=webpack:///./src/client/state/Products/selectors.js?");

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

/***/ "./src/client/utils/fillLeftovers.js":
/*!*******************************************!*\
  !*** ./src/client/utils/fillLeftovers.js ***!
  \*******************************************/
/*! exports provided: fillLeftover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fillLeftover\", function() { return fillLeftover; });\n/* eslint-disable no-loop-func */\nvar fillLeftover = function fillLeftover(products, limit) {\n  var leftovers = [];\n\n  while (limit >= 0) {\n    var eligiblProducts = products.filter(function (p) {\n      return p.caffeinePerServing * p.servings <= limit;\n    });\n    leftovers = eligiblProducts.map(function (p) {\n      limit = limit - p.caffeinePerServing * p.servings;\n      if (limit >= 0) return p;\n    });\n  }\n\n  return leftovers.filter(function (p) {\n    return p !== undefined;\n  });\n};\n\n//# sourceURL=webpack:///./src/client/utils/fillLeftovers.js?");

/***/ }),

/***/ "./src/client/utils/products.js":
/*!**************************************!*\
  !*** ./src/client/utils/products.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Placeholder for API data\n */\nvar products = [{\n  description: 'A refreshing orange beverage.',\n  caffeinePerServing: 75,\n  name: 'Monster Ultra Sunrise',\n  servings: 2\n}, {\n  description: 'The Classic.',\n  caffeinePerServing: 96,\n  name: 'Black Coffee',\n  servings: 1\n}, {\n  description: 'Water downed coffee.',\n  caffeinePerServing: 77,\n  name: 'Americano',\n  servings: 1\n}, {\n  description: 'Sugar-Free orange delight.',\n  caffeinePerServing: 80,\n  name: 'Sugar Free NOS',\n  servings: 2\n}, {\n  description: 'An amazing shot of get up and go.',\n  caffeinePerServing: 200,\n  name: '5 Hour Energy',\n  servings: 1\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (products);\n\n//# sourceURL=webpack:///./src/client/utils/products.js?");

/***/ }),

/***/ "./src/routes/Routes.js":
/*!******************************!*\
  !*** ./src/routes/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var COMPONENTS_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! COMPONENTS/Home */ \"./src/client/components/Home.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n  path: '/'\n}, COMPONENTS_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  exact: true\n})]);\n\n//# sourceURL=webpack:///./src/routes/Routes.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var SERVER_UTILS_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SERVER_UTILS/renderer */ \"./src/server/utils/renderer.js\");\n/* harmony import */ var SERVER_UTILS_createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SERVER_UTILS/createStore */ \"./src/server/utils/createStore.js\");\n/* harmony import */ var ROUTES_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ROUTES/Routes */ \"./src/routes/Routes.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = process.env.PORT || 3000;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\napp.get('/', function (req, res) {\n  var store = Object(SERVER_UTILS_createStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"matchRoutes\"])(ROUTES_Routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  });\n  Promise.all(promises).then(function (data) {\n    var content = Object(SERVER_UTILS_renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, store);\n    res.send(content);\n  });\n});\napp.listen(PORT, function () {\n  console.log(\"Listening on \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ROUTES_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ROUTES/Routes */ \"./src/routes/Routes.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__[\"renderRoutes\"])(ROUTES_Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"])))));\n  return \"\\n  <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <title>Calories</title>\\n        <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap\\\" />\\n        <script>window.INITIAL_STATE = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), \"</script>\\n      </head>\\n      <body>\\n        <div id=\\\"app\\\">\").concat(content, \"</div>\\n        <script src=\\\"clientBundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \");\n});\n\n//# sourceURL=webpack:///./src/server/utils/renderer.js?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/assertThisInitialized%22?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectSpread\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectSpread%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/joi\");\n\n//# sourceURL=webpack:///external_%22@hapi/joi%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

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

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });