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

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/slider */ \"./js/slider.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n\r\n\r\n\r\n// window.addEventListener('DOMContentLoaded', function () {\r\n\r\n    const options = {\r\n        main: \".slider-list\",\r\n        field: \".slider-field\",\r\n        track: \".slider-track\",\r\n        next: \".next\",\r\n        prev: \".prev\",\r\n        showSlides: 4\r\n    }\r\n\r\n    const slider = new _js_slider__WEBPACK_IMPORTED_MODULE_0__.default(options);\r\n    slider.init();\r\n\r\n    const parents = document.querySelectorAll(\".slider-item\");\r\n\r\n    const initCurtain = ({ title, date }) => {\r\n        const curtainStile = `\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(51, 51, 51, 0.5);\r\n    width: 100%;\r\n    height: 100%;\r\n`\r\n        let cTitle = document.createElement(\"h3\");\r\n        cTitle.classList.add(\"h3-24b\");\r\n        cTitle.classList.add(\"c-title\");\r\n\r\n        cTitle.innerHTML = `${title}`;\r\n\r\n        let cData = document.createElement(\"p\");\r\n        cData.classList.add(\"p-18b\");\r\n        cData.classList.add(\"c-data\");\r\n        cData.innerHTML = `${date}`;\r\n\r\n        const curtain = document.createElement(\"div\");\r\n        curtain.classList.add('curtain');\r\n        curtain.classList.add('h3-24b');\r\n        curtain.style.cssText = curtainStile;\r\n\r\n        return {\r\n            curtain,\r\n            cTitle,\r\n            cData\r\n        }\r\n    }\r\n\r\n    const curtainData = [\r\n        {\r\n            title: \"oskar 2020\",\r\n            date: \"september 2020\"\r\n        },\r\n        {\r\n            title: \"venecia\",\r\n            date: \"april 2020\"\r\n        },\r\n        {\r\n            title: \"gold gramophone\",\r\n            date: \"juli 2020\"\r\n        },\r\n        {\r\n            title: \"nutcracker\",\r\n            date: \"may 2020\"\r\n        }\r\n    ]\r\n\r\n    for (let i = 0; i < parents.length; i++) {\r\n        parents[i].append(initCurtain(curtainData[i]).curtain);\r\n        parents[i].append(initCurtain(curtainData[i]).cTitle);\r\n        parents[i].append(initCurtain(curtainData[i]).cData);\r\n    }\r\n\r\n\r\n    // remove phone container into meacenas block & paste into end block\r\n    const mdParent = document.querySelector('.meacenas-inner');\r\n    const row = mdParent.firstElementChild;\r\n    const mdContacts = document.querySelector('.meacenas-contacts');\r\n    const newContact = document.querySelector('.new-contacts-container');\r\n\r\n    const removeContacts = () => {\r\n        mdContacts.remove();\r\n        newContact.classList.remove('hidden');\r\n    }\r\n\r\n    const addContacts = () => {\r\n        row.prepend(mdContacts);\r\n        newContact.classList.add('hidden')\r\n    }\r\n\r\n    if (document.body.clientWidth <= 991) {\r\n        removeContacts();\r\n    }\r\n\r\n    window.addEventListener(\"resize\", () => {\r\n        if (mdParent.offsetWidth <= 667) {\r\n            removeContacts();\r\n        } else {\r\n            addContacts();\r\n        }\r\n    })\r\n\r\n\r\n\r\n    const controller = document.querySelector('.controller');\r\n    const burgerContainer = document.querySelector('.burger-container');\r\n    const iconGroup = document.querySelector('.icon-group');\r\n    const menuItems = document.querySelectorAll('.menu-item');\r\n    const checkBox = document.getElementById('scales');\r\n    let isActive = false;\r\n\r\n\r\n    const controllerClick = () => {\r\n        isActive = !isActive;\r\n        let width = isActive ? 300 : 50;\r\n        let bgColor = isActive ? 'rgba(34, 34, 34, 0.85)' : 'transparent';\r\n        let height = isActive ? '100%' : '50px';\r\n        let iconWidth = isActive ? '70%' : '';\r\n        let top = isActive ? 0 : 50;\r\n        let left = isActive ? 0 : 66;\r\n\r\n\r\n        burgerContainer.style.cssText = `\r\n            position: absolute;\r\n            background-color: ${bgColor};\r\n            width: ${width}px;\r\n            height: ${height};\r\n            top: ${top}px;\r\n            left: ${left}px;\r\n        `;\r\n\r\n        iconGroup.style.cssText = `\r\n            width: ${iconWidth};\r\n            margin: 40px auto 0 auto;\r\n        `;\r\n\r\n\r\n    }\r\n\r\n    controller.addEventListener('click', controllerClick);\r\n    menuItems.forEach(elem => elem.addEventListener(\"click\", () => {\r\n        controllerClick();\r\n        checkBox.checked = false;\r\n    }));\r\n// })\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\r\n    constructor({\r\n        main,\r\n        field,\r\n        track,\r\n        position = 0,\r\n        next,\r\n        prev\r\n    }) {\r\n        this.main = document.querySelector(main),\r\n            this.track = document.querySelector(track),\r\n            this.field = document.querySelector(field),\r\n            this.next = document.querySelector(next),\r\n            this.prev = document.querySelector(prev),\r\n            this.slides = document.querySelector(track).children,\r\n            this.options = {\r\n                position,\r\n                widthField: 100 * this.slides.length,\r\n            },\r\n            this.width = window.getComputedStyle(this.main).width,\r\n            this.offset = 0 //контролирующаю переменная\r\n    }\r\n\r\n    // выбираю только цифровое значение, без \"px\"\r\n    getNumber = (value) => {\r\n        const reg = /[\\d.]/g\r\n        const width = value.match(reg).join(\"\");\r\n        return +width\r\n    }\r\n\r\n    // initialization components\r\n    init = () => {\r\n        //длина контейнера 100 * количество елементов\r\n        this.field.style.cssText = `width: ${this.options.widthField}%`;\r\n\r\n\r\n        for (const elem of this.slides) {\r\n            elem.style.cssText = `\r\n                height: auto;`\r\n        }\r\n        this.controlSlides();\r\n    }\r\n\r\n    getAndPasteNext = () => {\r\n        const b = this.track.firstElementChild;\r\n        this.track.firstElementChild.remove();\r\n        this.track.append(b);\r\n    }\r\n\r\n    getAndPastePrev = () => {\r\n        const b = this.track.lastElementChild;\r\n        this.track.lastElementChild.remove();\r\n        this.track.prepend(b);\r\n    }\r\n\r\n    // prev button listener\r\n    prevSlider = () => {\r\n        this.options.position--;\r\n        this.offset += this.slides[0].clientWidth;\r\n        this.getAndPastePrev();\r\n        // this.track.style.transform = `translateX(${this.offset}px)`;\r\n    }\r\n\r\n    // next button listener\r\n    nextSlider = () => {\r\n        this.options.position++;\r\n        this.offset -= this.slides[0].clientWidth;\r\n        // this.track.style.transform = `translateX(${this.offset}px)`;\r\n        this.getAndPasteNext();\r\n    }\r\n\r\n    controlSlides = () => {\r\n        this.next.addEventListener(\"click\", this.nextSlider);\r\n        this.prev.addEventListener(\"click\", this.prevSlider);\r\n    }\r\n}\r\n\r\n\r\n        // for (const elem of this.slides) {\r\n        //     // устанавливаю длину каждого елемента равной длине контейнера / требуемое число видимых елементов\r\n        //     elem.style.cssText = `\r\n        //         width: ${this.getNumber(this.width) / 4}px; \r\n        //         height: auto;`\r\n        // }\r\n\r\n        // add event listener\n\n//# sourceURL=webpack:///./js/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;