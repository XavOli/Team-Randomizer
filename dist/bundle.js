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

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ (() => {


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tawilwind-webpack-starter/./src/css/style.css?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PlayerList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PlayerList */ \"./src/components/PlayerList.js\");\n\r\n\r\n\r\n\r\nclass App {\r\n  constructor() {\r\n    this._list = new _components_PlayerList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    this.addEventListeners();\r\n  }\r\n\r\n  addEventListeners() {\r\n    document\r\n      .getElementById('player-form')\r\n      .addEventListener('submit', this._playerSubmit.bind(this));\r\n    document\r\n      .getElementById('player-list')\r\n      .addEventListener('click', this._removePlayer.bind(this));\r\n    document\r\n      .getElementById('options-form')\r\n      .addEventListener('submit', this._shuffleSubmit.bind(this));\r\n  }\r\n\r\n  _playerSubmit(e) {\r\n    e.preventDefault();\r\n    const name = document.getElementById('player-name');\r\n    const sex = document.querySelector('input[name=\"sex\"]:checked').value;\r\n    if (!name) {\r\n      alert('Please enter a player name');\r\n      return;\r\n    }\r\n    app._list.addPlayerToList(name.value.trim(), sex);\r\n    document.getElementById('player-form').reset();\r\n  }\r\n\r\n  _removePlayer(e) {\r\n    if (\r\n      e.target.classList.contains('delete-button') ||\r\n      e.target.classList.contains('fa-xmark')\r\n    ) {\r\n      if (confirm('Are you sure?')) {\r\n        e.target.closest('.player').remove();\r\n        app._list.removePlayerFromList(\r\n          e.target.closest('.player').getAttribute('data-id')\r\n        );\r\n      }\r\n    }\r\n  }\r\n\r\n  _shuffleSubmit(e) {\r\n    e.preventDefault();\r\n    const shuffleType = document.querySelector(\r\n      'input[name=\"shuffle\"]:checked'\r\n    ).value;\r\n    const numberOfTeams = document.getElementById('numberOfTeams').value;\r\n\r\n    if (shuffleType === 'random') {\r\n      this._list.splitIntoTeams(\r\n        this._list.shuffleListAll(this._list.list),\r\n        numberOfTeams\r\n      );\r\n    } else {\r\n      this._list.splitIntoTeams(\r\n        this._list.shuffeListBySex(this._list.list),\r\n        numberOfTeams\r\n      );\r\n    }\r\n    console.log(shuffleType, numberOfTeams);\r\n  }\r\n}\r\n\r\nconst app = new App();\r\n\n\n//# sourceURL=webpack://tawilwind-webpack-starter/./src/app.js?");

/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Player {\r\n  constructor(name, sex) {\r\n    this.id = Math.random().toString(16).slice(2);\r\n    this.name = name;\r\n    this.sex = sex;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://tawilwind-webpack-starter/./src/components/Player.js?");

/***/ }),

/***/ "./src/components/PlayerList.js":
/*!**************************************!*\
  !*** ./src/components/PlayerList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/components/Player.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/components/Storage.js\");\n\r\n\r\n\r\nclass PlayerList {\r\n  constructor() {\r\n    this.list = _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlayers();\r\n    console.log(this.list);\r\n    this._displayPlayerList();\r\n    this.shuffeListBySex(this.list);\r\n  }\r\n\r\n  addPlayerToList(name, sex) {\r\n    const newPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, sex);\r\n    this.list.push(newPlayer);\r\n    _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].savePlayer(newPlayer);\r\n    this._displayPlayerList();\r\n  }\r\n\r\n  removePlayerFromList(id) {\r\n    const index = this.list.findIndex((player) => player.id === id);\r\n    if (index !== -1) {\r\n      this.list.splice(index, 1);\r\n      _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removePlayer(id);\r\n      this._displayPlayerList();\r\n    }\r\n  }\r\n\r\n  _displayPlayerList() {\r\n    const PlayerListEl = document.getElementById('player-list');\r\n    PlayerListEl.innerHTML = '';\r\n    this.list.forEach((player) => {\r\n      const PlayerEl = document.createElement('div');\r\n      PlayerEl.setAttribute('data-id', `${player.id}`);\r\n      PlayerEl.classList.add('player');\r\n      PlayerEl.innerHTML = `<span>${player.name}</span> <button class=\"delete-button px-3 py-1\"><i class=\"fa-solid fa-xmark fa-lg text-red-600\"></i></button>`;\r\n      PlayerListEl.appendChild(PlayerEl);\r\n    });\r\n  }\r\n\r\n  splitIntoTeams(list, numberOfTeams) {\r\n    const teams = Array.from({ length: numberOfTeams }, () => []);\r\n    list.forEach((player, index) => {\r\n      teams[index % numberOfTeams].push(player.name);\r\n    });\r\n    console.log(teams);\r\n    this.displayTeams(teams);\r\n    return teams;\r\n  }\r\n\r\n  shuffleListAll(list) {\r\n    for (let i = list.length - 1; i > 0; i--) {\r\n      const j = Math.floor(Math.random() * (i + 1));\r\n      [list[i], list[j]] = [list[j], list[i]];\r\n    }\r\n    return list;\r\n  }\r\n\r\n  shuffeListBySex(list) {\r\n    let maleList = list.filter((player) => player.sex === 'male');\r\n    let femaleList = list.filter((player) => player.sex === 'female');\r\n    list = this.shuffleListAll(maleList).concat(\r\n      this.shuffleListAll(femaleList)\r\n    );\r\n    return list;\r\n  }\r\n\r\n  displayTeams(teams) {\r\n    const ResultsEl = document.getElementById('shuffle-results');\r\n    ResultsEl.innerHTML = '';\r\n    let teamCount = 1;\r\n\r\n    // @todo Different color for each team\r\n    // Create team element for each team in list\r\n    teams.forEach((team) => {\r\n      const TeamEl = document.createElement('div');\r\n      TeamEl.classList.add('team-el');\r\n      const TeamNameEl = document.createElement('h1');\r\n      TeamNameEl.classList.add('text-xl', 'font-bold', 'p-1');\r\n      TeamNameEl.innerText = `Team ${teamCount}`;\r\n      teamCount++;\r\n      TeamEl.appendChild(TeamNameEl);\r\n\r\n      // Add players to team element\r\n      team.forEach((player) => {\r\n        const playerName = document.createElement('p');\r\n        playerName.innerText = player;\r\n        TeamEl.appendChild(playerName);\r\n      });\r\n\r\n      ResultsEl.appendChild(TeamEl);\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerList);\r\n\n\n//# sourceURL=webpack://tawilwind-webpack-starter/./src/components/PlayerList.js?");

/***/ }),

/***/ "./src/components/Storage.js":
/*!***********************************!*\
  !*** ./src/components/Storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Storage {\r\n  static getPlayers() {\r\n    let playerList;\r\n    if (localStorage.getItem('playerList') === null) {\r\n      playerList = [];\r\n    } else {\r\n      playerList = JSON.parse(localStorage.getItem('playerList'));\r\n    }\r\n    return playerList;\r\n  }\r\n\r\n  static savePlayer(player) {\r\n    const playerList = Storage.getPlayers();\r\n    playerList.push(player);\r\n    localStorage.setItem('playerList', JSON.stringify(playerList));\r\n  }\r\n\r\n  static removePlayer(id) {\r\n    const playerList = Storage.getPlayers();\r\n    playerList.forEach((player, index) => {\r\n      if (player.id === id) {\r\n        playerList.splice(index, 1);\r\n      }\r\n    });\r\n    localStorage.setItem('playerList', JSON.stringify(playerList));\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);\r\n\n\n//# sourceURL=webpack://tawilwind-webpack-starter/./src/components/Storage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;