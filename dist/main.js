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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Car\": () => (/* binding */ Car)\n/* harmony export */ });\n//create and export car class to wishlist.js\nclass Car {\n  id;\n  make;\n  model;\n  year;\n  //Create a constructor for the Car class that:takes in id, make, model, and year parameters.\n  constructor(id, make, model, year) {\n    //sets each parameter to a property on the instance.\n    this.id = id;\n    this.make = make;\n    this.model = model;\n    this.year = year;\n  }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\nconsole.log(\"Hello World!\");\n\n// import wishlist class from wishlist.js\n\n\n////Select the form\nlet form = document.querySelector(\"#submitForm\");\n//Select the input for car make\nlet makeInput = document.querySelector(\"#makeInput\");\n//Select the input for car model\nlet modelInput = document.querySelector(\"#modelInput\");\n//Select the input for car year\nlet yearInput = document.querySelector(\"#yearInput\");\n//Select the paragraph element for car make\nlet carMake = document.querySelector(\"#car-make\");\n//Select the paragraph element for car model\nlet carModel = document.querySelector(\"#car-model\");\n//Select the paragraph element for car year\nlet carYear = document.querySelector(\"#car-year\");\n//Select the remove button\nlet removeButton = document.querySelector(\"#removeButton\");\n//Select the wishlist unordered list element\nlet wishlistUl = document.querySelector(\"#wishlistUl\");\n\n//Call the WishList constructor to create an instance from the WishList class\nlet wishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__.Wishlist();\n\n//add eventListener.\nform.addEventListener(\"submit\", addCar);\n\nremoveButton.addEventListener(\"click\", removeCar);\n\n\n//Create a function called showCarDetails that will update the details card with the details from the selected car.Take in a car parameter.\nfunction showCarDetails(car) {\n  //Reset the content of the make display to car.make.\n  carMake.textContent = car.make;\n  //Reset the content of the model display to car.model.\n  carModel.textContent = car.model;\n  //Reset the content of the year display to car.year.\n  carYear.textContent = car.year;\n  //Enable the remove button.\n  removeButton.disabled = false;\n  //Call setAttribute(\"data-carId\", car.id) on the remove button\n  removeButton.setAttribute(\"data-carId\", car.id);\n}\n//Create a function called updateDomList that will update the ul with the latest cars in wishlist.\nfunction updateDomList() {\n  //Clear the contents of the ul. \n  wishlistUl.innerHTML = \"\";\n  //Iterate over each car in wishlist.\n  wishlist.list.forEach((car) => {\n    //create li for each car in wishlist.\n    const li = document.createElement(\"li\");\n    //assign each li a car make and car model.\n    li.textContent = `${car.make} ${car.model}`;\n    //add click eventListener on function showCarDetails.\n    li.addEventListener(\"click\", () => showCarDetails(car));\n    //append each li to wishlistUl.\n    wishlistUl.appendChild(li);\n  });\n}\n//Create a function called addCar that will add a car to wishlist. It should:Take in an \"event\" parameter.\nfunction addCar(event){\n    event.preventDefault();\n\n    let make = makeInput.value;\n    let model = modelInput.value;\n    let year = yearInput.value;\n    //Call wishlist.add with the values from the make, model and year inputs passed in as parameters.\n    wishlist.add(make, model, year);\n    //Call updateDomList.\n    updateDomList();\n}\n\n\n//Create a function called removeCar that will remove a car from wishlist.\nfunction removeCar() {\n    //Assign the return of Number(removeButton.getAttribute(\"data-carId\")) to a variable called carId.\n    let carId = Number(removeButton.getAttribute(\"data-carId\"));\n    //Call wishlist.remove with carId passed in as a parameter.\n    wishlist.remove(carId);\n    //Call updateDOMList.\n    updateDomList();\n    //Reset the content of the carMake to \"\";\n    carMake.textContent = \"\";\n    //Reset the content of the carModel to \"\";\n    carModel.textContent = \"\";\n    //Reset the content of the carYear to \"\";\n    carYear.textContent = \"\";\n    //Disable the remove button;\n    removeButton.disabled = true;\n  }\n  \n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wishlist\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n//import class Car from car.js\n\n\n//create and export Wishlist class to index.js\nclass Wishlist {\n  list;\n  nextId;\n  constructor() {\n    this.list = [];\n    this.nextId = 0;\n  }\n  //Create an add method that:Takes in make, model, and year parameters.\n  add(make, model, year) {\n    //Uses the Car constructor from car.js to create a car instance from ++this.nextId, make, model, and year values.\n    let car = new _car__WEBPACK_IMPORTED_MODULE_0__.Car(++this.nextId, make, model, year);\n    //Adds the car instance to this.list.\n    this.list.push(car);\n  }\n  //Create a remove method that:Takes in carId as a parameter.\n  remove(carId) {\n    //find a  car instance whose id matches carId from this.list to remove.\n    let index = this.list.findIndex(car => car.id == carId);\n    //remove a car and update wishlist.\n    this.list.splice(index, 1);\n  }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;