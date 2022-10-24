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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Kanit-Regular.ttf */ \"./src/fonts/Kanit-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'titleFont';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    font-weight: 400;\\n    font-style: normal;\\n}\\nbody {\\n    height: 100%;\\n}\\n#content {\\n    height: 100%;\\n}\\n#header {\\n    font-family: 'titleFont';\\n    display: flex;\\n    flex-direction: row;\\n    gap: 1rem;\\n    background-color: darkcyan;\\n    color: white;\\n    height: 30%;\\n    width: 100%;\\n    padding: 1rem;\\n    justify-content: space-between;\\n    font-size: 40px;\\n    align-items: center;\\n}\\n#logo {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 1rem;\\n    align-items: center;\\n}\\n#img {\\n    height: 5%;\\n    width: 5%;\\n}\\n#icon {\\n    height: 55%;\\n    width: 51%;\\n}\\n#container {\\n    height: 70%;\\n    display: flex;\\n    flex-direction: row;\\n}\\n#sidebar {\\n    font-family: 'titleFont';\\n    background-color: lightgrey;\\n    width: 15%;\\n    height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n}\\n#button-container {\\n    padding: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.5rem;\\n    width: 71%;\\n}\\n#inbox-box, #today-box, #week-box {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 1.1rem;\\n    align-items: center;\\n}\\n#project-container {\\n    padding: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n    gap: 1rem;\\n    width: 60%;\\n    margin-left: 5px;\\n    gap: 2rem;\\n}\\n#inbox, #today, #this-week, #add-project, #project-name {\\n    text-align: left;\\n    border: none;\\n    border-radius: 0.5rem;\\n    padding: 0.5rem;\\n    font-size: 1rem;\\n    font-weight: bolder;\\n    width: 100%;\\n    background-color: lightgray;\\n}\\n#add-task {\\n    width: 48px;\\n    text-align: center;\\n    border-radius: 0.5rem;\\n    background-color: darkcyan;\\n    color: white;\\n    font-size: 38px;\\n    font-family: 'titleFont';\\n    font-weight: 100;\\n    border: none;\\n    margin-right: 2rem;\\n}\\n#add-task:hover {\\n    cursor: pointer;\\n    background-color: rgb(19, 185, 185);\\n}\\n#inbox:hover, #today:hover, #this-week:hover, #add-project:hover, #project-name  {\\n    background-color: rgb(229, 229, 229);\\n    cursor: pointer;\\n}\\n#projects-header {\\n    font-size: 1.7rem;\\n}\\n#main-body {\\n    background-color: white;\\n    width: 85%;\\n    height: 100%;\\n}\\n.form-popup, .task-popup {\\n    background-color: lightgrey;\\n    width: 50%;\\n    height: 50%;\\n    gap: 20px;\\n    position: fixed;\\n    bottom: 50%;\\n    right: 50%;\\n    left: 30%;\\n    top: 30%;\\n    border-radius: 10px;\\n}\\n#form-container {\\n    padding: 30px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 30px;\\n    text-align: center;\\n    background-color: lightgray;\\n}\\n#form-title, #task-title {\\n    font-family: \\\"titleFont\\\";\\n    font-size: 35px;\\n    text-align: start;\\n    padding: 10px;\\n}    \\n#projectName, #taskName {\\n    font-family: \\\"titleFont\\\";\\n    outline: none;\\n    width: 50%;\\n}\\n#projectHeader {\\n    text-align: center;\\n    padding: 2rem;\\n    font-family: 'titleFont';\\n    margin-right: 5rem;\\n}\\ninput[type=text] {\\n    height: 25px;\\n    font-size: 16px;\\n    font-family: 'titleFont';\\n    padding: 5px;\\n    text-align: left;\\n    border-radius: 5px;\\n    border: 0.2px solid black;\\n}\\n#submitButton, #close-form {\\n    font-family: \\\"titleFont\\\";\\n    width: 30%;\\n    height: 2rem;\\n    font-size: 1rem;\\n    font-weight: bolder;\\n}\\n#project-header {\\n    text-align: center;\\n    font-family: 'titleFont';\\n    padding: 2rem;\\n    font-size: 1.5rem;\\n}\\n.projectHeader{\\n    text-align: center;\\n    font-family: 'titleFont';\\n    padding: 2rem;\\n    font-size: 1.5rem;\\n}\\n#title-container, #description-container, #priority-container, #projects-container, #submit-container, #close-container {\\n    font-family: 'titleFont';\\n    display: flex;\\n    flex-direction: column;\\n    width: 90%;\\n    padding: 5px;\\n    gap: 5px;\\n}\\ntextarea {\\n    font-family: 'titleFont';\\n    height: 90px;\\n    font-size: 16px;\\n    padding: 5px;\\n    text-align: left;\\n    border-radius: 5px;\\n    border: 0.2px solid black;\\n    overflow: auto;\\n}\\nselect {\\n    height: 30px;\\n    font-size: 16px;\\n    font-family: 'titleFont';\\n}\\n#form-body {\\n    padding: 10px;\\n    width: 100%;\\n}\\n#task-body {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 5px;\\n}\\n#task-container {\\n    padding: 15px;\\n    border-radius: 2px;\\n    font-family: 'titleFont'\\n}\\n#task-containers {\\n    font-family: 'titleFont';\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    gap: 2rem;\\n}\\n.form-pop {\\n    opacity: 50%;\\n    transition: opacity 0.2s ease-in-out;\\n}\\n.form-removed {\\n    opacity: 100%;\\n    transition: opacity 0.2s ease-in-out;\\n}\\n.task-popup {\\n    animation-duration: 0.5s;\\n    animation-name: slidein;\\n}\\n@keyframes slidein {\\n    from {\\n        transform: scale(0);\\n        opacity: 0;\\n    }\\n    to {\\n        transform: scale(1);\\n        opacity: 1;\\n    }\\n}\\n.task-popin {\\n    animation: 0.5s;\\n    animation-name: slideout;\\n}\\n@keyframes slideout {\\n    from {\\n        transform: scale(1);\\n        opacity: 1;\\n    }\\n    to {\\n        transform: scale(0);\\n        opacity: 0;\\n    }\\n}\\n#container_{\\n    display: flex;\\n    font-size: 19px;\\n    justify-content: space-between;\\n    height: 3rem;\\n    padding: 0.5rem;\\n    align-items: center;\\n    width: 80%;\\n}\\n#container_:hover {\\n    cursor: pointer;\\n}\\n#container-left{\\n\\n}\\n#form-check {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 1rem;\\n}\\n#delete-button {\\n\\n}\\n#wrapper {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n#collapse-container {\\n    padding: 0.5rem;\\n    width: 80%;\\n}\\nleft-collapse-container {\\n    display: flex;\\n}\\n#left-collapse{\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;;\\n}\\n#collapse-wrapper {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 5px;\\n    justify-content: space-around;\\n    padding: 1rem;\\n    width: 55rem;\\n    border: 0.5px black solid;\\n}\\n#right-collapse-container, #left-collapse-container {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n#right-collapse{\\n    display: flex;\\n    flex-direction: row;\\n    gap: 1rem;\\n}\\n#collapse-title-container, #collapse-description-container, #collapse-priority-container, #collapse-due-date-container {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 1rem;\\n    height: 2rem;\\n    align-items: center;\\n}\\n#collapse-description-container{\\n\\n}\\n#header-container {\\n\\n}\\n.collapse-container-hidden {\\n    display: none;\\n}\\n.collapse-container-show {\\n    display: block;\\n}\\n\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/task.js */ \"./src/js/task.js\");\n/* harmony import */ var _js_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ui.js */ \"./src/js/ui.js\");\n\n\n\n(0,_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.userInterface)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openProjctForm\": () => (/* binding */ openProjctForm),\n/* harmony export */   \"removeForm\": () => (/* binding */ removeForm)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/js/task.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\n\n\nfunction openProjctForm() {\n    const container = document.getElementById('content');\n\n    const head = document.getElementById('header');\n    head.classList.remove('form-removed');\n    head.classList.add('form-pop');\n    const contain = document.getElementById('container');\n    contain.classList.remove('form-removed');\n    contain.classList.add('form-pop');\n\n    const formBox = document.createElement('div');\n    formBox.id = 'form-box';\n    formBox.classList.add('task-popup');\n    container.appendChild(formBox);\n\n        const form = document.createElement('form');\n        form.id = 'form-container'\n        form.setAttribute('action', '');\n        form.setAttribute('method', 'get');\n        formBox.appendChild(form);\n\n            const title = document.createElement('div');\n            title.textContent = 'New Project';  \n            title.id = \"form-title\";\n            form.appendChild(title);\n\n            let messages = [];\n            const error = document.createElement('div');\n            error.id = 'error'\n\n            const projectName = document.createElement('input');\n            projectName.id = 'projectName';\n            projectName.setAttribute('type', 'text');\n            projectName.setAttribute('name', 'projectName');\n            projectName.setAttribute('required', 'required');\n\n            const submit = document.createElement(\"input\");\n            submit.setAttribute('type', 'submit');\n            submit.id = 'submitButton';\n            submit.value = 'Submit';\n            submit.onclick = function(){\n                const project = new _task__WEBPACK_IMPORTED_MODULE_0__.Project(projectName.value);\n                _ui__WEBPACK_IMPORTED_MODULE_1__.projects.push(project);\n                (0,_ui__WEBPACK_IMPORTED_MODULE_1__.addProject)(project);\n                head.classList.remove('form-pop');\n                contain.classList.remove('form-pop');\n                head.classList.add('form-removed');\n                contain.classList.add('form-removed');\n                removeForm(formBox);\n            }\n            form.appendChild(projectName);\n            form.appendChild(submit);\n\n            const close = document.createElement('input');\n            close.setAttribute('type', 'button');\n            close.id = 'close-form';\n            close.value = 'Cancel';\n            close.onclick = function(){\n                head.classList.remove('form-pop');\n                contain.classList.remove('form-pop');\n                head.classList.add('form-removed');\n                contain.classList.add('form-removed');\n                removeForm(formBox);\n            }\n            form.appendChild(close);\n    }\n    function removeForm(form){\n        form.remove();\n    }\n    \n\n//# sourceURL=webpack://to-do-list/./src/js/form.js?");

/***/ }),

/***/ "./src/js/load.js":
/*!************************!*\
  !*** ./src/js/load.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHeader\": () => (/* binding */ addHeader),\n/* harmony export */   \"addTasks\": () => (/* binding */ addTasks),\n/* harmony export */   \"createBody\": () => (/* binding */ createBody),\n/* harmony export */   \"removeContent\": () => (/* binding */ removeContent)\n/* harmony export */ });\n/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm */ \"./src/js/taskForm.js\");\n\n\nfunction createBody(){\n    const main = document.getElementById('main-body');\n\n    const headerContainer = document.createElement('div');\n    headerContainer.id = 'header-container';\n    main.appendChild(headerContainer);\n\n    const taskContainer = document.createElement('div');\n    taskContainer.id = 'task-containers';\n    main.appendChild(taskContainer);\n}\nfunction addHeader(obj){\n    const main = document.getElementById('header-container');\n    const projectHeader = document.createElement('div');\n    projectHeader.classList.add('projectHeader');\n    let projectTitle = obj\n    projectTitle = projectTitle.replace(/\\s/g, '');\n    projectHeader.id = projectTitle;\n    projectHeader.textContent = obj;\n    main.appendChild(projectHeader);\n    return projectHeader;\n}\nfunction addTasks(projectItem, tasks, project){\n   const taskContainer = document.getElementById('task-containers');\n   const title = document.getElementById(`${project}`);\n   if(title){\n    const wrapper = document.createElement('div');\n    wrapper.id = 'wrapper';\n    taskContainer.appendChild(wrapper);\n\n        const task = document.createElement('div');\n        task.id = 'container_';\n        task.addEventListener('click', function(){\n            if(collapseContainer.display == 'none'){\n                collapseContainer.classList.add('collapse-container-show')\n            }\n        });\n        wrapper.appendChild(task);\n\n            const taskContainerLeft = document.createElement('div');\n            taskContainerLeft.id = 'container-left';\n            task.appendChild(taskContainerLeft);\n\n                const taskContainerLeftInputs = document.createElement('div');\n                taskContainerLeftInputs.id = 'form-check';\n                taskContainerLeft.appendChild(taskContainerLeftInputs);\n\n                    const input = document.createElement('input');\n                    input.setAttribute('type', 'checkbox');\n                    input.id = 'checkbox';\n                    taskContainerLeftInputs.appendChild(input);\n                    \n                    const label = document.createElement('label');\n                    label.textContent = tasks.title;\n                    label.id = 'title';\n                    taskContainerLeftInputs.appendChild(label);\n\n                const taskControls = document.createElement('div');\n                taskControls.id = 'task-controls';\n                task.appendChild(taskControls);\n\n                    const deleteButton = document.createElement('button');\n                    deleteButton.id = 'delete-button';\n                    deleteButton.textContent = 'Delete'\n                    taskControls.appendChild(deleteButton);\n\n        const collapseContainer = document.createElement('div');\n        collapseContainer.id = 'collapse-container';\n        collapseContainer.classList.add('collapse-container-hidden');\n        wrapper.appendChild(collapseContainer);\n\n            const collapseWrapper = document.createElement('div');\n            collapseWrapper.id = 'collapse-wrapper';\n            collapseContainer.appendChild(collapseWrapper);\n\n                const collapseInfoLeft = document.createElement('div');\n                collapseInfoLeft.id = 'left-collapse-container';\n                collapseWrapper.appendChild(collapseInfoLeft);\n\n                    const collapseTitleContainer = document.createElement('div');\n                    collapseTitleContainer.id = 'collapse-title-container';\n                    collapseInfoLeft.appendChild(collapseTitleContainer);\n\n                        const collapseLabel = document.createElement('div');\n                        collapseLabel.id = 'left-collapse';\n                        collapseLabel.textContent = 'Title: '\n                        collapseTitleContainer.appendChild(collapseLabel);\n\n                        const collapseTitle = document.createElement('div');\n                        collapseTitle.id = 'left-collapse'\n                        collapseTitle.textContent = tasks.title;\n                        collapseTitleContainer.appendChild(collapseTitle);\n\n                    const collapseDueDateContainer = document.createElement('div');\n                    collapseDueDateContainer.id = 'collapse-due-date-container';\n                    collapseInfoLeft.appendChild(collapseDueDateContainer);\n\n                        const collapseDate = document.createElement('div');\n                        collapseDate.id = 'left-collapse';\n                        collapseDate.textContent = 'Due Date: ';\n                        collapseDueDateContainer.appendChild(collapseDate);\n\n                        const collapseDateInfo = document.createElement('div');\n                        collapseDateInfo.id = 'left-collapse';\n                        collapseDateInfo.textContent = tasks.dueDate;\n                        collapseDueDateContainer.appendChild(collapseDateInfo);\n\n\n                const collapseInfoRight = document.createElement('div');\n                collapseInfoRight.id = 'right-collapse-container';\n                collapseWrapper.appendChild(collapseInfoRight);\n\n                    const collapseRightContainer = document.createElement('div');\n                    collapseRightContainer.id = 'collapse-priority-container';\n                    collapseInfoRight.appendChild(collapseRightContainer);\n\n                        const priorityLabel = document.createElement('div');\n                        priorityLabel.id = 'right-collapse';\n                        priorityLabel.textContent = 'Priority: '\n                        collapseRightContainer.appendChild(priorityLabel);\n\n                        const priorityText = document.createElement('div');\n                        priorityText.id = 'right-collapse';\n                        priorityText.textContent = tasks.priority;\n                        collapseRightContainer.appendChild(priorityText);\n\n                    const collapseDescriptionContainer = document.createElement('div');\n                    collapseDescriptionContainer.id = 'collapse-description-container';\n                    collapseInfoRight.appendChild(collapseDescriptionContainer);\n\n                        const descriptionLabel = document.createElement('div');\n                        descriptionLabel.id = 'right-collapse';\n                        descriptionLabel.textContent = 'Description: '\n                        collapseDescriptionContainer.appendChild(descriptionLabel);\n\n                        const descriptionText = document.createElement('div');\n                        descriptionText.id = 'right-collapse';\n                        descriptionText.textContent = tasks.description;\n                        collapseDescriptionContainer.appendChild(descriptionText);\n\n   }\n   else \n    console.log('Element doesnt exist');\n}\nfunction removeContent() {\n    \n   \n}\n\n//# sourceURL=webpack://to-do-list/./src/js/load.js?");

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, dueDate, priority, project){\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.project = project;\n    }\n    projects = [];\n\n    addToProject(obj){\n        this.projects.push(obj);\n    }\n    getProjects() {\n        return this.projects;\n    }\n}\nclass Project {\n    constructor(title, task) {\n        this.title = title;\n        this.task = task;\n    }\n    taskList = [];\n\n    addTasks(task){\n        this.taskList.push(task);\n    }\n    getTaskList() {\n        return this.taskList;\n    }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/js/task.js?");

/***/ }),

/***/ "./src/js/taskForm.js":
/*!****************************!*\
  !*** ./src/js/taskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToProject\": () => (/* binding */ addToProject),\n/* harmony export */   \"openTaskForm\": () => (/* binding */ openTaskForm),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/js/form.js\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ \"./src/js/load.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/js/task.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\n\n\n\n\nlet tasks = [];\nfunction openTaskForm() {\n    const head = document.getElementById('header');\n    head.classList.remove('form-removed');\n    head.classList.add('form-pop');\n    const contain = document.getElementById('container');\n    contain.classList.remove('form-removed');\n    contain.classList.add('form-pop');\n\n    const container = document.getElementById('content');\n    \n    const formBox = document.createElement('div');\n    formBox.id = 'task-box';\n    formBox.classList.add('task-popup');\n    container.appendChild(formBox);\n\n        const form = document.createElement('form');\n        form.id = 'task-container'\n        form.setAttribute('action', '')\n        form.setAttribute('method', 'get');\n        formBox.appendChild(form);\n\n            const title = document.createElement('div');\n            title.textContent = 'New Task';  \n            title.id = \"task-title\";\n            form.appendChild(title);\n\n            const bodyContainer = document.createElement('div');\n            bodyContainer.id = 'task-body';\n            form.appendChild(bodyContainer);\n\n            const formBody = document.createElement('div');\n            formBody.id = 'form-body';\n            bodyContainer.appendChild(formBody);\n\n                const titleContainer = document.createElement('div');\n                titleContainer.id = 'title-container';\n                formBody.appendChild(titleContainer);\n\n                    const taskTitle = document.createElement('div');\n                    taskTitle.textContent = 'Title:'\n                    titleContainer.appendChild(taskTitle);\n\n                    const task = document.createElement('input');\n                    task.id = 'task';\n                    task.setAttribute('type', 'text');\n                    task.setAttribute('name', 'task');\n                    titleContainer.appendChild(task)\n\n                const descriptionContainer = document.createElement('div');\n                descriptionContainer.id = 'description-container';\n                formBody.appendChild(descriptionContainer);\n\n                    const descriptionTitle = document.createElement('label');\n                    descriptionTitle.textContent = 'Description:';\n                    descriptionContainer.appendChild(descriptionTitle);\n                    \n                    const description = document.createElement('textarea');\n                    description.id = 'description';\n                    description.setAttribute('type', 'text');\n                    description.setAttribute('name', 'description');\n                    descriptionContainer.appendChild(description);\n\n            const formBody2 = document.createElement('div')\n            formBody2.id = 'form-body'\n            bodyContainer.appendChild(formBody2);\n\n            const priorityContainer = document.createElement('div');\n            priorityContainer.id = 'priority-container';\n            formBody2.appendChild(priorityContainer);\n\n                const priorityTitle = document.createElement('label');\n                priorityTitle.textContent = 'Priority: ';\n                priorityContainer.appendChild(priorityTitle);\n                \n                let priorityList = ['High', 'Medium', 'Low'];\n    \n                const priority = document.createElement('select');\n                priority.id = 'priority';\n                priorityContainer.appendChild(priority);\n\n                for (let i = 0; i < priorityList.length; i++){\n                    let option = document.createElement('option');\n                    option.value = priorityList[i];\n                    option.text = priorityList[i];\n                    priority.appendChild(option);\n                }\n                let selected = document.getElementById('priority');\n                function onChange() {\n                    let value = selected.value;\n                    return value;\n                }\n                selected.onchange = onChange;\n                onChange();\n\n            const projectsContainer = document.createElement('div');\n            projectsContainer.id = 'projects-container';\n            formBody2.appendChild(projectsContainer);\n                const project = document.createElement('label');\n                project.textContent = 'Project: ';\n                projectsContainer.appendChild(project);\n                const projectList = document.createElement('select');\n                projectList.id = 'projects';\n                projectsContainer.appendChild(projectList);\n\n                for (let i = 0; i < _ui__WEBPACK_IMPORTED_MODULE_3__.projects.length; i++){\n                    let projectSelect = document.createElement('option');\n                    projectSelect.value = _ui__WEBPACK_IMPORTED_MODULE_3__.projects[i].title;\n                    projectSelect.text = _ui__WEBPACK_IMPORTED_MODULE_3__.projects[i].title;\n                    projectList.appendChild(projectSelect);\n                }\n                let selectedProject = document.getElementById('projects');\n                function onChangeProjects(){\n                    let value2 = selectedProject.value;\n                    return value2;\n                }\n                selectedProject.onchange = onChangeProjects;\n                onChangeProjects();\n            const submitContainer = document.createElement('div');\n            submitContainer.id = 'submit-container';\n            formBody2.appendChild(submitContainer);\n                \n            const submit = document.createElement(\"input\");\n            submit.setAttribute('type', 'button');\n            submit.id = 'submitButton';\n            submit.value = 'Submit';\n            submit.onclick = function(){\n                addToProject(task.value, description.value, '10/28/2022', onChange(), onChangeProjects());\n                head.classList.remove('form-pop');\n                contain.classList.remove('form-pop');\n                head.classList.add('form-removed');\n                contain.classList.add('form-removed');\n                formBox.classList.add('task-popin');\n                (0,_form__WEBPACK_IMPORTED_MODULE_0__.removeForm)(formBox);\n            }\n            submitContainer.appendChild(submit);\n        const closeContatiner = document.createElement('div');\n        closeContatiner.id = 'close-container';\n        formBody2.appendChild(closeContatiner)\n\n            const close = document.createElement('input');\n            close.setAttribute('type', 'button');\n            close.id = 'close-form';\n            close.value = 'Cancel';\n            close.onclick = function(){\n                head.classList.remove('form-pop');\n                contain.classList.remove('form-pop');\n                head.classList.add('form-removed');\n                contain.classList.add('form-removed');\n                formBox.classList.add('task-popin');\n                (0,_form__WEBPACK_IMPORTED_MODULE_0__.removeForm)(formBox);\n            }\n            closeContatiner.appendChild(close);\n}\nlet parsedTitle;\nfunction addToProject(title, description, date, priority, project){\n    for(let i = 0; i < _ui__WEBPACK_IMPORTED_MODULE_3__.projects.length; i++){\n        if(_ui__WEBPACK_IMPORTED_MODULE_3__.projects[i].title === `${project}`){\n            parsedTitle = project;\n            parsedTitle = parsedTitle.replace(/\\s/g, '');\n            const newTask = new _task__WEBPACK_IMPORTED_MODULE_2__.Task(title, description, date, priority, project);\n            tasks.push(newTask);\n            (0,_load__WEBPACK_IMPORTED_MODULE_1__.addTasks)(_ui__WEBPACK_IMPORTED_MODULE_3__.projects[i], newTask, parsedTitle);\n        }\n}\n}\n\n//# sourceURL=webpack://to-do-list/./src/js/taskForm.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"userInterface\": () => (/* binding */ userInterface)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/js/form.js\");\n/* harmony import */ var _img_list_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/list.png */ \"./src/img/list.png\");\n/* harmony import */ var _img_email_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/email.png */ \"./src/img/email.png\");\n/* harmony import */ var _img_calendar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/calendar.png */ \"./src/img/calendar.png\");\n/* harmony import */ var _img_today_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/today.png */ \"./src/img/today.png\");\n/* harmony import */ var _js_taskForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/taskForm */ \"./src/js/taskForm.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task */ \"./src/js/task.js\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./load */ \"./src/js/load.js\");\n\n\n\n\n\n\n\n\n\nlet projects = [];\nfunction userInterface() {\n    const body = document.getElementById('content');\n\n    const header = document.createElement('div');\n    header.id = 'header';\n    body.appendChild(header);\n    \n        const logoContainer = document.createElement('div');\n        logoContainer.id = 'logo';\n        header.appendChild(logoContainer);\n\n            const headIcon = document.createElement('img');\n            headIcon.src = _img_list_png__WEBPACK_IMPORTED_MODULE_2__;\n            headIcon.id = 'img';\n            logoContainer.appendChild(headIcon);\n\n            const headerTitle = document.createElement('div');\n            headerTitle.id = 'header-title';\n            headerTitle.textContent = 'ListTrack';\n            logoContainer.appendChild(headerTitle);\n\n        const add = document.createElement('button');\n        add.id = 'add-task';\n        add.textContent = '+';\n        add.onclick = function() {\n            (0,_js_taskForm__WEBPACK_IMPORTED_MODULE_6__.openTaskForm)();\n        }\n        header.appendChild(add);\n\n    const container = document.createElement('div');\n    container.id = 'container';\n    body.appendChild(container);\n\n        const sidebar = document.createElement('div');\n        sidebar.id = 'sidebar';\n        container.appendChild(sidebar);\n        \n            const buttonContainer = document.createElement('div');\n            buttonContainer.id = 'button-container';\n            sidebar.appendChild(buttonContainer);\n\n                const inboxContainer = document.createElement('div');\n                inboxContainer.id = 'inbox-box';\n                buttonContainer.appendChild(inboxContainer);\n\n                    const inbox = document.createElement('img');\n                    inbox.id = 'icon';\n                    inbox.src = _img_email_png__WEBPACK_IMPORTED_MODULE_3__;\n                    inboxContainer.appendChild(inbox);\n\n                    const btn = document.createElement('button');\n                    btn.id = 'inbox';\n                    btn.textContent = 'Inbox';\n                    const inboxObject = new _task__WEBPACK_IMPORTED_MODULE_7__.Project(btn.textContent);\n                    projects.push(inboxObject);\n                    btn.addEventListener('click', function(){\n                        (0,_load__WEBPACK_IMPORTED_MODULE_8__.removeContent)();\n                        (0,_load__WEBPACK_IMPORTED_MODULE_8__.addHeader)(inboxObject.title);\n                    })\n                    \n                    inboxContainer.appendChild(btn);\n\n                const todayContainer = document.createElement('div');\n                todayContainer.id = 'today-box';\n                buttonContainer.appendChild(todayContainer);\n\n                    const today = document.createElement('img');\n                    today.id = 'icon';\n                    today.src = _img_today_png__WEBPACK_IMPORTED_MODULE_5__;\n                    todayContainer.appendChild(today);\n\n                    const btn2 = document.createElement('button');\n                    btn2.id = 'today';\n                    btn2.textContent = 'Today';\n                    const todayObject = new _task__WEBPACK_IMPORTED_MODULE_7__.Project(btn2.textContent)\n                    projects.push(todayObject);\n                    btn2.addEventListener('click', function(){\n                        (0,_load__WEBPACK_IMPORTED_MODULE_8__.removeContent)();\n                       (0,_load__WEBPACK_IMPORTED_MODULE_8__.addHeader)(todayObject.title);\n                    });\n                    todayContainer.appendChild(btn2);\n                    \n\n                const thisWeekContainer = document.createElement('div');\n                thisWeekContainer.id = 'week-box';\n                buttonContainer.appendChild(thisWeekContainer);\n                    \n                    const week = document.createElement('img');\n                    week.id = 'icon';\n                    week.src = _img_calendar_png__WEBPACK_IMPORTED_MODULE_4__;\n                    thisWeekContainer.appendChild(week);\n\n                    const btn3 = document.createElement('button');\n                    btn3.id = 'this-week';\n                    btn3.textContent = 'This Week';\n                    const weekObject = new _task__WEBPACK_IMPORTED_MODULE_7__.Project(btn3.textContent);\n                    projects.push(weekObject);\n                    btn3.addEventListener('click', function(){\n                        (0,_load__WEBPACK_IMPORTED_MODULE_8__.removeContent)();\n                        (0,_load__WEBPACK_IMPORTED_MODULE_8__.addHeader)(weekObject.title);\n                    })\n                    thisWeekContainer.appendChild(btn3);\n                    \n\n            const projectsContainer  = document.createElement('div');\n            projectsContainer.id = 'project-container';\n            sidebar.appendChild(projectsContainer);\n\n                const projectHeader = document.createElement('div');\n                projectHeader.id = 'projects-header';\n                projectHeader.textContent = 'Projects';\n                projectsContainer.appendChild(projectHeader);\n                const btn4 = document.createElement('button');\n                btn4.id = 'add-project';\n                btn4.textContent = '+ Add Project';\n                btn4.onclick = function(){\n                        (0,_form__WEBPACK_IMPORTED_MODULE_1__.openProjctForm)();\n                    }\n                projectsContainer.appendChild(btn4);\n        const mainBody = document.createElement('div');\n        mainBody.id = 'main-body';\n        container.appendChild(mainBody);\n    (0,_load__WEBPACK_IMPORTED_MODULE_8__.createBody)(todayObject);\n}\nfunction addProject(name) {\n    const projectButton = document.createElement('button');\n    const projectHolder = document.getElementById('project-container');\n    projectButton.textContent = name.title;\n    projectButton.id = 'project-name';\n    projectButton.onclick = function(){\n        (0,_load__WEBPACK_IMPORTED_MODULE_8__.removeContent)();\n        (0,_load__WEBPACK_IMPORTED_MODULE_8__.addHeader)(name.title);\n    }\n    projectHolder.appendChild(projectButton);\n    }\n\n//# sourceURL=webpack://to-do-list/./src/js/ui.js?");

/***/ }),

/***/ "./src/fonts/Kanit-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Kanit-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3bae13d78ced30b6ea3.ttf\";\n\n//# sourceURL=webpack://to-do-list/./src/fonts/Kanit-Regular.ttf?");

/***/ }),

/***/ "./src/img/calendar.png":
/*!******************************!*\
  !*** ./src/img/calendar.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1989ee2bea9553ae46ad.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/calendar.png?");

/***/ }),

/***/ "./src/img/email.png":
/*!***************************!*\
  !*** ./src/img/email.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"70efa3d4b945afc667d8.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/email.png?");

/***/ }),

/***/ "./src/img/list.png":
/*!**************************!*\
  !*** ./src/img/list.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94733f77ed9a9c73192e.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/list.png?");

/***/ }),

/***/ "./src/img/today.png":
/*!***************************!*\
  !*** ./src/img/today.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"516c6d4a0d8474bfeeba.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/today.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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