/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backgroundData.js":
/*!*******************************!*\
  !*** ./src/backgroundData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backgrounds\": () => (/* binding */ backgrounds)\n/* harmony export */ });\nconst backgrounds=[\r\n    \"./images/PLANSZA_GLOWNA_BULLYING.png\",\r\n    \"./images/PLANSZA_FILM_BULLYING.png\"\r\n\r\n]\n\n//# sourceURL=webpack://komapp2/./src/backgroundData.js?");

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ikonyglowne\": () => (/* binding */ ikonyglowne)\n/* harmony export */ });\nconst ikonyglowne = {\r\n    first: \"./images/bullying_cz1.png\",\r\n    firtscliced: \"./images/bullying_cz1clicked.png\",\r\n    second: \"./images/bullying_cz2.png\",\r\n    secondcliced: \"./images/bullying_cz2clicked.png\",\r\n    third: \"./images/bullying_cz3.png\",\r\n    thirdcliced: \"./images/bullying_cz3clicked.png\"\r\n}\n\n//# sourceURL=webpack://komapp2/./src/icons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue/dist/vue.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundData.js */ \"./src/backgroundData.js\");\n/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.js */ \"./src/icons.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeAdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeBdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeCdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar app = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue/dist/vue.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\r\n  el: '#app',\r\n  data: () => {\r\n    return {\r\n      message: \"hello vue\",\r\n      appbackground: {\r\n        src: _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[0]\r\n      },\r\n      ikon1: {\r\n        src: _icons_js__WEBPACK_IMPORTED_MODULE_2__.ikonyglowne.first,\r\n        src2: _icons_js__WEBPACK_IMPORTED_MODULE_2__.ikonyglowne.firtscliced,\r\n        seen: true,\r\n        hover: false\r\n      },\r\n      ikon2: {\r\n        src: _icons_js__WEBPACK_IMPORTED_MODULE_2__.ikonyglowne.second,\r\n        src2: _icons_js__WEBPACK_IMPORTED_MODULE_2__.ikonyglowne.secondcliced,\r\n        seen: true,\r\n        hover: false\r\n      },\r\n      ikon3: {\r\n        src: _icons_js__WEBPACK_IMPORTED_MODULE_2__.ikonyglowne.third,\r\n        src2: _icons_js__WEBPACK_IMPORTED_MODULE_2__.ikonyglowne.thirdcliced,\r\n        seen: true,\r\n        hover: false\r\n      },\r\n      video: {\r\n\r\n        src: \"\",\r\n        seen: false\r\n      },\r\n      buttonforward1: {\r\n        seen: false\r\n      },\r\n      buttonreverse1: {\r\n        seen: false\r\n      },\r\n      buttonforward2: {\r\n        seen: false\r\n      },\r\n      buttonreverse2: {\r\n        seen: false\r\n      },\r\n      buttonforward3: {\r\n        seen: false\r\n      },\r\n      buttonreverse3: {\r\n        seen: false\r\n      },\r\n      licznik: {\r\n        planszeAlicz: 0,\r\n        planszeBlicz: 0,\r\n        planszeClicz: 0\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    ikon1change1: function () {\r\n      this.ikon1.hover = false;\r\n      this.appbackground.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeAdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\r\n      this.ikon2.seen = false;\r\n      this.ikon3.seen = false;\r\n      this.buttonreverse1.seen = true;\r\n      this.buttonforward1.seen = true;\r\n    },\r\n    ikon2change1: function () {\r\n      this.ikon2.hover = false;\r\n      this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[1];\r\n      this.ikon1.seen = false;\r\n      this.ikon3.seen = false;\r\n      this.video.seen = true;\r\n      this.buttonreverse2.seen = true;\r\n      this.buttonforward2.seen = true;\r\n    },\r\n    ikon3change1: function () {\r\n      this.ikon3.hover = false;\r\n      this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[1];\r\n      this.ikon1.seen = false;\r\n      this.ikon2.seen = false;\r\n      this.video.seen = true;\r\n      this.buttonreverse3.seen = true;\r\n      this.buttonforward3.seen = true;\r\n    },\r\n    btnforA: function () {\r\n      this.licznik.planszeAlicz++;\r\n      this.appbackground.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeAdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[this.licznik.planszeAlicz];\r\n      if (this.licznik.planszeAlicz === 8) {\r\n        this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[1];\r\n        this.video.seen = true;\r\n      }\r\n      if (this.licznik.planszeAlicz === 9) {\r\n        this.licznik.planszeAlicz = 0;\r\n        this.video.seen = false;\r\n        this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[0];\r\n        this.buttonreverse1.seen = false;\r\n        this.buttonforward1.seen = false;\r\n        this.ikon1.seen = true;\r\n        this.ikon2.seen = true;\r\n        this.ikon3.seen = true;\r\n\r\n      }\r\n    },\r\n    btnrevA: function () {\r\n      if (this.licznik.planszeAlicz != 0) {\r\n        this.licznik.planszeAlicz--;\r\n      }\r\n      this.appbackground.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeAdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[this.licznik.planszeAlicz];\r\n      if (this.appbackground.src === Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeAdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {\r\n        this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[0];\r\n        this.ikon1.seen = true;\r\n        this.ikon2.seen = true;\r\n        this.ikon3.seen = true;\r\n        this.buttonreverse1.seen = false;\r\n        this.buttonforward1.seen = false;\r\n        this.licznik.planszeAlicz = 0;\r\n      }\r\n\r\n      if (this.video.seen === true) {\r\n        this.video.seen = false;\r\n      }\r\n\r\n    },\r\n    btnforB: function () {\r\n      if (this.video.seen === false) {\r\n        this.licznik.planszeBlicz++;\r\n        this.appbackground.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeBdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[this.licznik.planszeBlicz];\r\n      }\r\n\r\n      if (this.licznik.planszeBlicz === 0) {\r\n        this.video.seen = false;\r\n        this.appbackground.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeBdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\r\n      }\r\n\r\n      if (this.licznik.planszeBlicz === 1) {\r\n        this.licznik.planszeBlicz = 0;\r\n        this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[0];\r\n        this.ikon1.seen = true;\r\n        this.ikon2.seen = true;\r\n        this.ikon3.seen = true;\r\n        this.buttonreverse2.seen = false;\r\n        this.buttonforward2.seen = false;\r\n\r\n      }\r\n    },\r\n    btnrevB: function () {\r\n      if (this.licznik.planszeBlicz != 0) {\r\n        this.licznik.planszeBlicz--;\r\n\r\n      }\r\n\r\n      if (this.video.seen === true) {\r\n        this.video.seen = false;\r\n        this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[0];\r\n        this.ikon1.seen = true;\r\n        this.ikon2.seen = true;\r\n        this.ikon3.seen = true;\r\n        this.buttonreverse2.seen = false;\r\n        this.buttonforward2.seen = false;\r\n      }\r\n\r\n      if (this.appbackground.src === Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeBdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {\r\n        this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[1];\r\n        this.video.seen = true;\r\n        this.licznik.planszeBlicz = 0;\r\n      }\r\n\r\n      if (this.appbackground.src != _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[0]) {\r\n        this.appbackground.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeBdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[this.licznik.planszBClicz]\r\n        if(this.video.seen === true){\r\n          this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[1];\r\n        }\r\n      }\r\n\r\n\r\n    },\r\n    btnforC: function () {\r\n      if (this.video.seen === false) {\r\n        this.licznik.planszeClicz++;\r\n        this.appbackground.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeCdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[this.licznik.planszeClicz]\r\n      }\r\n\r\n      if (this.licznik.planszeClicz === 0) {\r\n        this.video.seen = false;\r\n        this.appbackground.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeCdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\r\n      }\r\n\r\n      if (this.licznik.planszeClicz === 6) {\r\n        this.licznik.planszeClicz = 0;\r\n        this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[0];\r\n        this.ikon1.seen = true;\r\n        this.ikon2.seen = true;\r\n        this.ikon3.seen = true;\r\n        this.buttonreverse3.seen = false;\r\n        this.buttonforward3.seen = false;\r\n\r\n      }\r\n\r\n\r\n    },\r\n    btnrevC: function () {\r\n      if (this.licznik.planszeClicz != 0) {\r\n        this.licznik.planszeClicz--;\r\n      }\r\n\r\n      if (this.video.seen === true) {\r\n        this.video.seen = false;\r\n        this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[0];\r\n        this.ikon1.seen = true;\r\n        this.ikon2.seen = true;\r\n        this.ikon3.seen = true;\r\n        this.buttonreverse3.seen = false;\r\n        this.buttonforward3.seen = false;\r\n      }\r\n\r\n      if (this.appbackground.src === Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeCdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {\r\n        this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[1];\r\n        this.video.seen = true;\r\n        this.licznik.planszeClicz = 0;\r\n      }\r\n\r\n      if (this.appbackground.src != _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[0]) {\r\n        this.appbackground.src = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './planszeCdane.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[this.licznik.planszeClicz]\r\n        if(this.video.seen === true){\r\n          this.appbackground.src = _backgroundData_js__WEBPACK_IMPORTED_MODULE_1__.backgrounds[1];\r\n        }\r\n      }\r\n\r\n    }\r\n  }\r\n})\n\n//# sourceURL=webpack://komapp2/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;