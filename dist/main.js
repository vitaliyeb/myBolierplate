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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/dev/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/dev/autoImport.js":
/*!**********************************!*\
  !*** ./public/dev/autoImport.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_bg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bg.png */ \"./public/dev/images/bg.png\");\n/* harmony import */ var _images_bg_phone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bg_phone.png */ \"./public/dev/images/bg_phone.png\");\n/* harmony import */ var _images_email_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/email.png */ \"./public/dev/images/email.png\");\n/* harmony import */ var _images_ill_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ill.png */ \"./public/dev/images/ill.png\");\n/* harmony import */ var _images_ill_2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/ill_2.svg */ \"./public/dev/images/ill_2.svg\");\n/* harmony import */ var _images_mePhoto_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/mePhoto.png */ \"./public/dev/images/mePhoto.png\");\n/* harmony import */ var _images_phone_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/phone.png */ \"./public/dev/images/phone.png\");\n/* harmony import */ var _images_phone_t_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/phone_t.png */ \"./public/dev/images/phone_t.png\");\n/* harmony import */ var _images_Vector_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/Vector.png */ \"./public/dev/images/Vector.png\");\n/* harmony import */ var _js_test_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/test.js */ \"./public/dev/js/test.js\");\n/* harmony import */ var _js_test_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_test_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _style_main_styl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style/main.styl */ \"./public/dev/style/main.styl\");\n/* harmony import */ var _style_main_styl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_main_styl__WEBPACK_IMPORTED_MODULE_10__);\n \n \n \n \n \n \n \n \n \n \n \n\n\n//# sourceURL=webpack:///./public/dev/autoImport.js?");

/***/ }),

/***/ "./public/dev/images/Vector.png":
/*!**************************************!*\
  !*** ./public/dev/images/Vector.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/Vector.png\");\n\n//# sourceURL=webpack:///./public/dev/images/Vector.png?");

/***/ }),

/***/ "./public/dev/images/bg.png":
/*!**********************************!*\
  !*** ./public/dev/images/bg.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/bg.png\");\n\n//# sourceURL=webpack:///./public/dev/images/bg.png?");

/***/ }),

/***/ "./public/dev/images/bg_phone.png":
/*!****************************************!*\
  !*** ./public/dev/images/bg_phone.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/bg_phone.png\");\n\n//# sourceURL=webpack:///./public/dev/images/bg_phone.png?");

/***/ }),

/***/ "./public/dev/images/email.png":
/*!*************************************!*\
  !*** ./public/dev/images/email.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/email.png\");\n\n//# sourceURL=webpack:///./public/dev/images/email.png?");

/***/ }),

/***/ "./public/dev/images/ill.png":
/*!***********************************!*\
  !*** ./public/dev/images/ill.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/ill.png\");\n\n//# sourceURL=webpack:///./public/dev/images/ill.png?");

/***/ }),

/***/ "./public/dev/images/ill_2.svg":
/*!*************************************!*\
  !*** ./public/dev/images/ill_2.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/ill_2.svg\");\n\n//# sourceURL=webpack:///./public/dev/images/ill_2.svg?");

/***/ }),

/***/ "./public/dev/images/mePhoto.png":
/*!***************************************!*\
  !*** ./public/dev/images/mePhoto.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/mePhoto.png\");\n\n//# sourceURL=webpack:///./public/dev/images/mePhoto.png?");

/***/ }),

/***/ "./public/dev/images/phone.png":
/*!*************************************!*\
  !*** ./public/dev/images/phone.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/phone.png\");\n\n//# sourceURL=webpack:///./public/dev/images/phone.png?");

/***/ }),

/***/ "./public/dev/images/phone_t.png":
/*!***************************************!*\
  !*** ./public/dev/images/phone_t.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/phone_t.png\");\n\n//# sourceURL=webpack:///./public/dev/images/phone_t.png?");

/***/ }),

/***/ "./public/dev/js/test.js":
/*!*******************************!*\
  !*** ./public/dev/js/test.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    const AllItems = Array.from(document.querySelectorAll('.services__item'));\r\n    AllItems.map((el)=>{\r\n        el.addEventListener('click', (e)=>{\r\n            e.currentTarget.classList.toggle('services__item_active')\r\n        })\r\n    });\r\n\r\n    let AllLink = document.querySelectorAll('.header__link');\r\n    let oldIndex = 0;\r\n\r\n    (()=>{\r\n        const hash = window.location.hash;\r\n        let arrHash = [\r\n            '#consultation',\r\n            '#services',\r\n            '#price',\r\n            '#contact'\r\n        ];\r\n        let activeIndex = arrHash.indexOf(hash);\r\n        if(activeIndex === -1) return setNavigate(0);\r\n        if(activeIndex !== undefined) return setNavigate(activeIndex);\r\n    })();\r\n\r\n\r\n    function setNavigate(index){\r\n        AllLink[oldIndex].classList.remove('header__link_active');\r\n        AllLink[index].classList.add('header__link_active');\r\n        oldIndex = index;\r\n    }\r\n\r\n    let consultation = document.getElementById('consultation');\r\n    let services = document.getElementById('services');\r\n    let price = document.getElementById('price');\r\n    let contact = document.getElementById('contact');\r\n    let steepScroll = 0;\r\n    window.addEventListener('scroll', (e)=>{\r\n        if (steepScroll < 10) return steepScroll++;\r\n        steepScroll = 0;\r\n        let topScroll = window.pageYOffset + window.innerHeight;\r\n        let consultationTop = consultation.offsetTop;\r\n        let servicesTop = services.offsetTop;\r\n        if(topScroll < servicesTop) return setNavigate(0);\r\n        let priceTop = price.offsetTop;\r\n        if(topScroll < priceTop) return setNavigate(1);\r\n        let contactTop = contact.offsetTop;\r\n        if(topScroll < contactTop) return setNavigate(2);\r\n        if (topScroll => contactTop) return setNavigate(3);\r\n    });\r\n\r\n    const allLinks = Array.from(document.querySelectorAll('.header__link'));\r\n\r\n    allLinks.map((el)=>{\r\n        el.addEventListener('click', (e)=>{\r\n            setNavigate(e.currentTarget.getAttribute('data-index'));\r\n        })\r\n    })\r\n\r\n\r\n})();\n\n//# sourceURL=webpack:///./public/dev/js/test.js?");

/***/ }),

/***/ "./public/dev/main.js":
/*!****************************!*\
  !*** ./public/dev/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _autoImport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autoImport */ \"./public/dev/autoImport.js\");\n/* harmony import */ var _images_phone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/phone.png */ \"./public/dev/images/phone.png\");\n/* harmony import */ var _images_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bg.png */ \"./public/dev/images/bg.png\");\n/* harmony import */ var _images_bg_phone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/bg_phone.png */ \"./public/dev/images/bg_phone.png\");\n/* harmony import */ var _images_email_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/email.png */ \"./public/dev/images/email.png\");\n/* harmony import */ var _images_ill_2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/ill_2.svg */ \"./public/dev/images/ill_2.svg\");\n/* harmony import */ var _images_mePhoto_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/mePhoto.png */ \"./public/dev/images/mePhoto.png\");\n/* harmony import */ var _images_phone_t_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/phone_t.png */ \"./public/dev/images/phone_t.png\");\n/* harmony import */ var _images_Vector_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/Vector.png */ \"./public/dev/images/Vector.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/dev/main.js?");

/***/ }),

/***/ "./public/dev/style/main.styl":
/*!************************************!*\
  !*** ./public/dev/style/main.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./public/dev/style/main.styl?");

/***/ })

/******/ });