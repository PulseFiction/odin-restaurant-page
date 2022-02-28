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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PizzaFont.ttf */ \"./src/fonts/PizzaFont.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./italyflag.png */ \"./src/italyflag.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'PizzaFont';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\n\\n\\n*, *::before, *::after {\\n    box-sizing: border-box;\\n    \\n}\\n\\n:root {\\n    --clr-green: #008d46;\\n    --clr-white: #fafeff;\\n    --clr-red: #d2232c;\\n}\\n\\nbody {\\n    margin: 0;\\n    padding: 0;\\n    background-color: var(--clr-green);\\n    display: flex;\\n    flex-direction: column-reverse;\\n    align-items: center;\\n    justify-content: center;\\n    font-family: 'PizzaFont';\\n    \\n\\n    \\n}\\n\\nh1 {\\n    color: rgb(255, 255, 255);\\n    font-size: 40pt;\\n    margin-bottom: 0;\\n    \\n}\\n\\nh3 {\\n    margin-top: 0;\\n    color: white;\\n}\\n\\n.nav {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-repeat: no-repeat;\\n    background-size: 100%;\\n    width: 100vw;\\n    border: solid black;\\n}\\n\\nul {\\n    \\n    display: flex;\\n    justify-content: space-evenly;\\n}\\n\\nli {\\n    list-style: none;\\n    font-size: 20pt;\\n}\\n\\n\\n\\n\\n.home-container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    width: 70vw;\\n    \\n}\\n\\n.menu-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    text-align: center;\\n    color: rgb(0, 0, 0);\\n    width: 80vw;\\n}\\n\\n.contact-container {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n\\n.contact-box {\\n    background-color: white;\\n    border: solid black;\\n    text-align: center;\\n}\\n.pizza-image {\\n    border: solid rgb(0, 0, 0);\\n    \\n    border-radius: 5px;\\n}\\n\\n.welcome {\\n    color: white;\\n    text-align: center;\\n    padding: 10px;\\n    word-wrap: normal;\\n    font-size: 20pt;\\n    \\n}\\n\\n\\n\\n\\n/* Menu Page */\\n\\n.margherita, .pepperoni, .meat, .veggie {\\n    width: 35vw;\\n    color: white;\\n    border: solid black;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: black;\\n    font-size: 20pt;\\n}\\n\\nli:hover {\\n    cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/tab */ \"./src/pages/tab.js\");\n/* harmony import */ var _pages_mainpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/mainpage */ \"./src/pages/mainpage.js\");\n/* harmony import */ var _pages_menupage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menupage */ \"./src/pages/menupage.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n(0,_pages_mainpage__WEBPACK_IMPORTED_MODULE_1__.mainPage)()\n;(0,_pages_menupage__WEBPACK_IMPORTED_MODULE_2__.menuPage)()\n;(0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__.contactPage)()\n;(0,_pages_tab__WEBPACK_IMPORTED_MODULE_0__.openPage)()\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\n\n    const contactContainer = document.querySelector('#contact')\n    contactContainer.classList.add('contact-container');\n    const heading = document.createElement('h1');\n    heading.textContent = 'Contact us'\n    \n    // Sal's contact\n    \n    const salDiv = document.createElement('div');\n    const salHeader = document.createElement('h2');\n    const salParagraph = document.createElement('p');\n    salHeader.textContent = 'Sal Mozzaroni Jr.';\n    salParagraph.textContent = `Number: 555-012-555`\n\n    salDiv.appendChild(salHeader)\n    salDiv.appendChild(salParagraph)\n\n    salDiv.classList.add('contact-box')\n\n    // Tony's contact\n\n    const tonyDiv = document.createElement('div');\n    const tonyHeader = document.createElement('h2');\n    const tonyParagraph = document.createElement('p');\n    tonyHeader.textContent = 'Tony Mozzaroni';\n    tonyParagraph.textContent = `Number: 555-015-515`\n\n    tonyDiv.appendChild(tonyHeader)\n    tonyDiv.appendChild(tonyParagraph)\n\n    tonyDiv.classList.add('contact-box')\n\n    // Giovanni's Contact\n\n    const gioDiv = document.createElement('div');\n    const gioHeader = document.createElement('h2');\n    const gioParagraph = document.createElement('p');\n    gioHeader.textContent = 'Giovanni Salaburatta';\n    gioParagraph.textContent = `Number: 555-101-535`\n\n    gioDiv.appendChild(gioHeader)\n    gioDiv.appendChild(gioParagraph)\n    \n    gioDiv.classList.add('contact-box')\n\n    // append all\n\n\n\n    contactContainer.appendChild(heading)\n    contactContainer.appendChild(salDiv)\n    contactContainer.appendChild(tonyDiv)\n    contactContainer.appendChild(gioDiv)\n\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/mainpage.js":
/*!*******************************!*\
  !*** ./src/pages/mainpage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainPage\": () => (/* binding */ mainPage)\n/* harmony export */ });\n/* harmony import */ var _pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.jpeg */ \"./src/pages/pizza.jpeg\");\n\n\n\nfunction mainPage() {\n    const heading = document.createElement('h1'); \n    const headTwo = document.createElement('h3')\n    const paragraph = document.createElement('p');\n    const container = document.querySelector('#home')\n    const image = document.createElement('img');\n    image.src = _pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    container.classList.add('home-container')\n    image.classList.add('pizza-image');\n    paragraph.classList.add('welcome')\n\n    heading.textContent = `Sal's Pizzeria`;\n    headTwo.textContent = `Est. 1946`\n    paragraph.textContent = `Named after Salvatore Mozzaroni - the founder who opened his restaurant in \n    1946 after serving in the allied forces in World War 2, Sal's Pizzeria has had the long standing tradition continued by the Mozzaroni familia of providing\n    excellent, freshly made pizza to the city of New York.`\n    \n    container.appendChild(heading)\n    container.appendChild(headTwo)\n    container.appendChild(image)\n    container.appendChild(paragraph)\n\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/mainpage.js?");

/***/ }),

/***/ "./src/pages/menupage.js":
/*!*******************************!*\
  !*** ./src/pages/menupage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _margherita_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margherita.jpeg */ \"./src/pages/margherita.jpeg\");\n/* harmony import */ var _pepperoni_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pepperoni.jpeg */ \"./src/pages/pepperoni.jpeg\");\n/* harmony import */ var _meat_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meat.jpeg */ \"./src/pages/meat.jpeg\");\n/* harmony import */ var _veggie_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./veggie.jpeg */ \"./src/pages/veggie.jpeg\");\n\n\n\n\n\n\n\nfunction menuPage() {\n    const menuContainer = document.querySelector('#menu')\n    const heading = document.createElement('h1');\n    heading.textContent = 'Menu';\n    heading.style.color = 'black';\n    const legend = document.createElement('p');\n    legend.textContent = 'V - suitable for vegetarians -- Speak to a member of staff if you have allergies'\n\n    // Margherita\n    \n    const margDiv = document.createElement('div');\n    const margHeader = document.createElement('h2')\n    margHeader.textContent = 'Margherita'\n    const margImage = document.createElement('img');\n    margImage.src = _margherita_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    const margParagraph = document.createElement('p');\n    margParagraph.textContent = `The classic pizza, with Tomato, Mozarella and Basil.`\n\n    margDiv.classList.add('margherita')\n    margDiv.appendChild(margHeader)\n    margDiv.appendChild(margImage)\n    margDiv.appendChild(margParagraph)\n    \n    // Pepperoni \n\n    const pepperDiv = document.createElement('div');\n    const pepperHeader = document.createElement('h2')\n    pepperHeader.textContent = 'Pepperoni'\n    const pepperImage = document.createElement('img');\n    pepperImage.src = _pepperoni_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    const pepperParagraph = document.createElement('p')\n    pepperParagraph.textContent = `Our most popular with our signature dried and cured pepperoni.`\n\n    pepperDiv.classList.add('pepperoni')\n    pepperDiv.appendChild(pepperHeader)\n    pepperDiv.appendChild(pepperImage)\n    pepperDiv.appendChild(pepperParagraph)\n    \n    // Meat\n\n    const meatDiv = document.createElement('div');\n    const meatHeader = document.createElement('h2')\n    meatHeader.textContent = 'Meat Feast'\n    const meatImage = document.createElement('img');\n    meatImage.src = _meat_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n    const meatParagraph = document.createElement('p')\n    meatParagraph.textContent = `For those meat lovers, with slices of beef, red onions and red peppers.`\n    \n    meatDiv.classList.add('meat')\n    meatDiv.appendChild(meatHeader)\n    meatDiv.appendChild(meatImage)\n    meatDiv.appendChild(meatParagraph)\n    \n    // Veggie\n\n    const vegDiv = document.createElement('div')\n    const vegHeader = document.createElement('h2')\n    vegHeader.textContent = 'Veggie Garden (v)'\n    const vegImage = document.createElement('img');\n    vegImage.src = _veggie_jpeg__WEBPACK_IMPORTED_MODULE_3__;\n    const vegParagraph = document.createElement('p')\n    vegParagraph.textContent = `Our beautiful veggie pizza, comes with black olives, cherry tomatoes, red peppers and red onions`\n\n    vegDiv.classList.add('veggie')\n    vegDiv.appendChild(vegHeader)\n    vegDiv.appendChild(vegImage)\n    vegDiv.appendChild(vegParagraph)\n\n    // Append all\n\n    menuContainer.classList.add('menu-container')\n    menuContainer.appendChild(heading)\n    menuContainer.appendChild(margDiv)\n    menuContainer.appendChild(pepperDiv)\n    menuContainer.appendChild(meatDiv)\n    menuContainer.appendChild(vegDiv)\n    menuContainer.appendChild(legend)\n\n\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/menupage.js?");

/***/ }),

/***/ "./src/pages/tab.js":
/*!**************************!*\
  !*** ./src/pages/tab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openPage\": () => (/* binding */ openPage)\n/* harmony export */ });\n\n\nfunction openPage() {\n    \n    const homePage = document.querySelector('#home');\n    const menuPage = document.querySelector('#menu');\n    const contactPage = document.querySelector('#contact');\n    menuPage.style.display = 'none'\n    contactPage.style.display = 'none'\n\n    const navbar = document.createElement('nav');\n    const list = document.createElement('ul');\n    const home = document.createElement('li')\n    const menu = document.createElement('li')\n    const contact = document.createElement('li')\n    \n    home.textContent = 'Home';\n    menu.textContent = 'Menu';\n    contact.textContent = 'Contact';\n\n    navbar.classList.add('nav')\n    home.classList.add('home')\n    menu.classList.add('menu');\n    contact.classList.add('contact')\n\n    list.appendChild(home);\n    list.appendChild(menu);\n    list.appendChild(contact);\n\n    navbar.appendChild(list);\n\n    document.body.appendChild(navbar)\n\n\n    home.addEventListener('click', () => {\n        document.body.style.backgroundColor = 'var(--clr-green)'\n        homePage.style.display = 'flex'\n        menuPage.style.display = 'none'\n        contactPage.style.display = 'none'\n    })\n\n    menu.addEventListener('click', () => {\n        document.body.style.backgroundColor = 'var(--clr-white)'\n        menuPage.style.display = 'flex'\n        homePage.style.display = 'none'\n        contactPage.style.display = 'none'\n    })\n\n    contact.addEventListener('click', () => {\n        document.body.style.backgroundColor = 'var(--clr-red)'\n        contactPage.style.display = 'flex'\n        homePage.style.display = 'none'\n        menuPage.style.display = 'none'\n\n    })\n    \n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/tab.js?");

/***/ }),

/***/ "./src/fonts/PizzaFont.ttf":
/*!*********************************!*\
  !*** ./src/fonts/PizzaFont.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"12e3683f9192436a7be8.ttf\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/fonts/PizzaFont.ttf?");

/***/ }),

/***/ "./src/italyflag.png":
/*!***************************!*\
  !*** ./src/italyflag.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"16d504ffbc728ad56884.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/italyflag.png?");

/***/ }),

/***/ "./src/pages/margherita.jpeg":
/*!***********************************!*\
  !*** ./src/pages/margherita.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b41907adbb8c6ed2b340.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/margherita.jpeg?");

/***/ }),

/***/ "./src/pages/meat.jpeg":
/*!*****************************!*\
  !*** ./src/pages/meat.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9de568d3bdeaa36e30c9.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/meat.jpeg?");

/***/ }),

/***/ "./src/pages/pepperoni.jpeg":
/*!**********************************!*\
  !*** ./src/pages/pepperoni.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"954e1f49972d616dc1e7.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/pepperoni.jpeg?");

/***/ }),

/***/ "./src/pages/pizza.jpeg":
/*!******************************!*\
  !*** ./src/pages/pizza.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9af00c9289311c98406d.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/pizza.jpeg?");

/***/ }),

/***/ "./src/pages/veggie.jpeg":
/*!*******************************!*\
  !*** ./src/pages/veggie.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"22edf33d87feed6001fe.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/pages/veggie.jpeg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;