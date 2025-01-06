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

/***/ "./src/js/descriptions.js":
/*!********************************!*\
  !*** ./src/js/descriptions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data)\n/* harmony export */ });\nconst data = [{\n  title: 'Musik.',\n  text: 'Simple landing page',\n  tags: 'HTML, CSS, JS, Swiper',\n  img: 'img/musik.jpg',\n  urlView: 'files/musik/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/musik'\n}, {\n  title: 'Currency Converter',\n  text: '',\n  tags: 'HTML, MaterialUI, JS, React, Redux, Webpack',\n  img: 'img/currency-converter.jpg',\n  urlView: 'files/currencyConverter/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/currencyConverter'\n}, {\n  title: 'Game \"clikcr\"',\n  text: '',\n  tags: 'HTML, CSS, JS',\n  img: 'img/klikcr.jpg',\n  urlView: 'files/klikcr/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/klikcr'\n}, {\n  title: 'Github Finder',\n  text: '',\n  tags: 'HTML, CSS, JS',\n  img: 'img/github-finder.jpg',\n  urlView: 'files/githubFinderJS/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/githubFinderJS'\n}, {\n  title: 'Expense Tracker',\n  text: '',\n  tags: 'HTML, CSS, JS',\n  img: 'img/expense-tracker.jpg',\n  urlView: 'files/expenseTrackerJS/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/expenseTrackerJS'\n}, {\n  title: 'Validation Form',\n  text: '',\n  tags: 'HTML, CSS, JS',\n  img: 'img/validator-form.jpg',\n  urlView: 'files/validationFormJS/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/validationFormJS'\n}, {\n  title: 'Miami',\n  text: 'Minimalistic landing page, first experience of page adaptation. Designed using flex-box. Slider \"slick slider\" is used',\n  tags: 'HTML, CSS, JQUERY',\n  img: 'img/miami.jpg',\n  urlView: 'files/miami/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/miami'\n}, {\n  title: 'Corporate',\n  text: 'Minimalistic landing page, first experience of page adaptation. Designed using flex-box',\n  tags: 'HTML, CSS, JQUERY',\n  img: 'img/corporate.jpg',\n  urlView: 'files/corporateLanding/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/corporateLanding'\n}, {\n  title: 'Kappe',\n  text: 'Multi-page site. Designed using flexbox',\n  tags: 'HTML, CSS, JQUERY',\n  img: 'img/kappe.jpg',\n  urlView: 'files/kappe/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/kappe'\n}, {\n  title: 'Budget',\n  text: 'Calculator',\n  tags: 'HTML, CSS, JS',\n  img: 'img/budget.jpg',\n  urlView: 'files/budgety/index.html',\n  urlCode: 'https://github.com/aleksey-13/aleksey-13.github.io/tree/master/files/budgety'\n}];\n\n//# sourceURL=webpack://portfolio/./src/js/descriptions.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/base */ \"./src/js/view/base.js\");\n/* harmony import */ var _descriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descriptions */ \"./src/js/descriptions.js\");\n\n\n\n(() => {\n  const btns = document.querySelectorAll(\".\".concat(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.navLabel));\n  const sections = document.querySelectorAll(\".\".concat(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.sectionLabel));\n  const onresize = function () {\n    const width = document.body.clientWidth;\n    if (width > 900) {\n      let dataBtns = 0;\n      let dataContainers = 0;\n      let isActive = 0;\n      btns.forEach(element => {\n        element.dataset.goto = dataBtns++;\n        element.onclick = nextContainer;\n      });\n      sections.forEach(element => {\n        element.dataset.goto = dataContainers++;\n        element.style.opacity = 0;\n        element.style.display = 'none';\n      });\n      sections[isActive].style.opacity = 1;\n      sections[isActive].style.display = 'block';\n      function nextContainer() {\n        const data = parseInt(this.dataset.goto);\n        if (data !== isActive) {\n          btns[isActive].classList.toggle(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.navLabelActive);\n          btns[data].classList.toggle(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.navLabelActive);\n          sections[isActive].classList.toggle(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.hideClass);\n          sections[data].classList.toggle(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.showClass);\n          sections[isActive].style.opacity = 0;\n          setTimeout(() => {\n            sections[isActive].style.display = 'none';\n            setTimeout(() => {\n              isActive = data;\n              sections[data].style.display = 'block';\n              setTimeout(() => sections[data].style.opacity = 1, 100);\n            }, 100);\n          }, 500);\n        }\n      }\n    } else if (width < 900) {\n      sections.forEach(element => {\n        element.style.opacity = 1;\n        element.style.display = 'block';\n      });\n    }\n  };\n  window.addEventListener('resize', onresize);\n  if (document.documentElement.clientWidth > 900) {\n    const btns = document.querySelectorAll(\".\".concat(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.navLabel));\n    const sections = document.querySelectorAll(\".\".concat(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.sectionLabel));\n    let dataBtns = 0;\n    let dataContainers = 0;\n    let isActive = 0;\n    btns.forEach(element => {\n      element.dataset.goto = dataBtns++;\n      element.onclick = nextContainer;\n    });\n    sections.forEach(element => {\n      element.dataset.goto = dataContainers++;\n      element.style.opacity = 0;\n      element.style.display = 'none';\n    });\n    sections[isActive].style.opacity = 1;\n    sections[isActive].style.display = 'block';\n    function nextContainer() {\n      const data = parseInt(this.dataset.goto);\n      if (data !== isActive) {\n        btns[isActive].classList.toggle(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.navLabelActive);\n        btns[data].classList.toggle(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.navLabelActive);\n        sections[isActive].classList.toggle(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.hideClass);\n        sections[data].classList.toggle(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.showClass);\n        sections[isActive].style.opacity = 0;\n        setTimeout(() => {\n          sections[isActive].style.display = 'none';\n          setTimeout(() => {\n            isActive = data;\n            sections[data].style.display = 'block';\n            setTimeout(() => sections[data].style.opacity = 1, 100);\n          }, 100);\n        }, 500);\n      }\n    }\n  }\n\n  // Out age on display UI\n  const yearOfBirth = 1996;\n  const age = new Date().getFullYear() - yearOfBirth;\n  document.querySelector(\"#\".concat(_view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.age)).textContent = age;\n\n  // Render works on UI\n  const makeup = _descriptions__WEBPACK_IMPORTED_MODULE_2__.data.map(el => \"\\n        <li class=\\\"work-list__item\\\">\\n            <div class=\\\"portfolio\\\">\\n                <figure class=\\\"portfolio__shape\\\">\\n                    <img src=\\\"\".concat(el.img, \"\\\" alt=\\\"\").concat(el.title, \"\\\" class=\\\"portfolio__img\\\">\\n                    <figcaption class=\\\"portfolio__caption\\\">\").concat(el.tags, \"</figcaption>\\n                </figure>\\n\\n                <div class=\\\"portfolio__description\\\">\\n                    <p class=\\\"paragraph--main\\\">\").concat(el.title, \"</p>\\n                    <p>\").concat(el.text, \"</p>\\n\\n                    <div class=\\\"portfolio__links\\\">\\n                        <a href=\\\"\").concat(el.urlView, \"\\\" class=\\\"p-link\\\" rel=\\\"nofollow noopener\\\" target=\\\"_blank\\\">view</a>\\n                        <a href=\\\"\").concat(el.urlCode, \"\\\" class=\\\"p-link\\\" rel=\\\"nofollow noopener\\\" target=\\\"_blank\\\">code</a>\\n                    </div>\\n                </div>\\n            </div>\\n        </li>\\n    \")).join('');\n  _view_base__WEBPACK_IMPORTED_MODULE_1__.DOMelements.workList.insertAdjacentHTML('afterbegin', makeup);\n})();\n\n//# sourceURL=webpack://portfolio/./src/js/index.js?");

/***/ }),

/***/ "./src/js/view/base.js":
/*!*****************************!*\
  !*** ./src/js/view/base.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMelements: () => (/* binding */ DOMelements)\n/* harmony export */ });\nconst DOMelements = {\n  navLabel: 'navigation__item',\n  sectionLabel: 'section',\n  navLabelActive: 'navigation__item--active',\n  hideClass: 'hideContainer',\n  showClass: 'showContainer',\n  age: 'age',\n  workList: document.querySelector('.work-list')\n};\n\n//# sourceURL=webpack://portfolio/./src/js/view/base.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/scss/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;