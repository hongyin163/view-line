(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ViewLine"] = factory();
	else
		root["ViewLine"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: DIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIST", function() { return DIST; });
var DIST = 6;

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: moveByDom, resizeByDom, initLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move */ "./src/move.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveByDom", function() { return _move__WEBPACK_IMPORTED_MODULE_0__["moveByDom"]; });

/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize */ "./src/resize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resizeByDom", function() { return _resize__WEBPACK_IMPORTED_MODULE_1__["resizeByDom"]; });

/* harmony import */ var _lines_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lines/store */ "./src/lines/store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initLine", function() { return _lines_store__WEBPACK_IMPORTED_MODULE_2__["initLine"]; });

/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);






/***/ }),

/***/ "./src/lines/align.ts":
/*!****************************!*\
  !*** ./src/lines/align.ts ***!
  \****************************/
/*! exports provided: showAlignLine, hideAlignLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlignLine", function() { return showAlignLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAlignLine", function() { return hideAlignLine; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/lines/store.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib */ "./src/lines/lib.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 对齐线
 */


/**
 * 
 * @param {string} direction 方向，v垂直方向，h水平方向
 * @param {*} top 
 * @param {*} left 
 * @param {*} height 
 * @param {*} width 
 */

function getNearLine(direction, line) {
  // 获取两个方向的线数据
  // let line = calcLines(top, left, height, width);
  if (direction === 'v') {
    if (_store__WEBPACK_IMPORTED_MODULE_1__["Lines"].vLines.length == 0) {
      return;
    }

    if (line.v.length == 0) {
      return;
    }

    var nearLines = line.v.map(function (item) {
      return Object(_lib__WEBPACK_IMPORTED_MODULE_2__["findLine"])(item, _store__WEBPACK_IMPORTED_MODULE_1__["Lines"].vLines);
    }).map(function (item, i) {
      return _objectSpread({
        val: Math.abs(item.pos - line.v[i].pos),
        from: line.v[i]
      }, item);
    }).sort(function (a, b) {
      return a.val - b.val;
    });
    return nearLines.map(function (tarLine, index) {
      var display = tarLine.val === 0;

      if (index === 0 && tarLine.val > 0) {
        display = true;
      }

      return {
        type: tarLine.type,
        display: display,
        pos: tarLine.pos,
        start: Math.min(tarLine.from.start, tarLine.start),
        end: Math.max(tarLine.from.end, tarLine.end),
        from: tarLine.from
      };
    });
  } else {
    if (_store__WEBPACK_IMPORTED_MODULE_1__["Lines"].hLines.length == 0) {
      return;
    }

    if (line.h.length == 0) {
      return;
    }

    var _nearLines = line.h.map(function (item) {
      return Object(_lib__WEBPACK_IMPORTED_MODULE_2__["findLine"])(item, _store__WEBPACK_IMPORTED_MODULE_1__["Lines"].hLines);
    }).map(function (item, i) {
      return _objectSpread({
        val: Math.abs(item.pos - line.h[i].pos),
        from: line.h[i]
      }, item);
    }).sort(function (a, b) {
      return a.val - b.val;
    });

    return _nearLines.map(function (tarLine, index) {
      var display = tarLine.val === 0;

      if (index === 0 && tarLine.val > 0) {
        display = true;
      }

      return {
        type: tarLine.type,
        display: display,
        pos: tarLine.pos,
        start: Math.min(tarLine.from.start, tarLine.start),
        end: Math.max(tarLine.from.end, tarLine.end),
        from: tarLine.from
      };
    }); // return []
  }
}

function createSpaceLineRoot() {
  var id = "view__align-line-root";
  var dom = document.getElementById(id);

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    document.body.appendChild(div);
    dom = div;
  }

  return dom;
}

function createVLines(key, _ref, offsetTop, offsetLeft) {
  var pos = _ref.pos,
      start = _ref.start,
      end = _ref.end,
      display = _ref.display;
  var id = 'view__v-line_' + key;
  var cls = 'view__v-line';
  var dom = document.getElementById(id);
  var root = createSpaceLineRoot();

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    div.className = cls;
    root.appendChild(div);
    dom = div;
  }

  dom.style.display = display ? 'block' : 'none';
  dom.style.left = "".concat(pos + offsetLeft, "px");
  dom.style.top = "".concat(start + offsetTop, "px");
  dom.style.height = "".concat(end - start, "px");
}

function createHLines(key, _ref2, offsetTop, offsetLeft) {
  var pos = _ref2.pos,
      start = _ref2.start,
      end = _ref2.end,
      display = _ref2.display;
  var id = 'view__h-line_' + key;
  var cls = 'view__h-line';
  var dom = document.getElementById(id);
  var root = createSpaceLineRoot();

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    div.className = cls;
    root.appendChild(div);
    dom = div;
  }

  dom.style.display = display ? 'block' : 'none';
  dom.style.left = "".concat(start + offsetLeft, "px");
  dom.style.top = "".concat(pos + offsetTop, "px");
  dom.style.width = "".concat(end - start, "px");
}
/**
 * 显示对齐线
 * @param {*} line 
 * @param {*} offsetTop 
 * @param {*} offsetLeft 
 */


function showAlignLine(line, offsetTop, offsetLeft) {
  var vResult = getNearLine('v', line);
  var hResult = getNearLine('h', line);

  if (vResult && vResult.length > 0) {
    // console.log(vResult)
    vResult.forEach(function (item, index) {
      createVLines(index, item, offsetTop, offsetLeft);
    });
  }

  if (hResult && hResult.length > 0) {
    // console.log(hResult)
    hResult.forEach(function (item, index) {
      createHLines(index, item, offsetTop, offsetLeft);
    });
  }

  if (!vResult && !hResult) {
    return null;
  }

  return {
    vLine: vResult ? vResult.find(function (p) {
      return p.display;
    }) : null,
    hLine: hResult ? hResult.find(function (p) {
      return p.display;
    }) : null
  };
}
/**
 * 隐藏
 */

var hideAlignLine = function hideAlignLine() {
  var root = createSpaceLineRoot();

  if (root.parentNode) {
    root.parentNode.removeChild(root);
  }
};

/***/ }),

/***/ "./src/lines/distance.ts":
/*!*******************************!*\
  !*** ./src/lines/distance.ts ***!
  \*******************************/
/*! exports provided: showDistLine, hideDistLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDistLine", function() { return showDistLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideDistLine", function() { return hideDistLine; });
/**
 * 距离线
 */
function createSpaceLineRoot() {
  var id = "view__dist-line-root";
  var dom = document.getElementById(id);

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    document.body.appendChild(div);
    dom = div;
  }

  return dom;
}
/**
 * 创建距离线
 * @param {*} param0 
 * @param {*} offsetTop 
 * @param {*} offsetLeft 
 */


function createHDistLine(_ref, offsetTop, offsetLeft) {
  var pos = _ref.pos,
      start = _ref.start,
      end = _ref.end;
  var id = 'view__h-dist-line';
  var dom = document.getElementById(id);
  var root = createSpaceLineRoot();

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    div.className = id;
    root.appendChild(div);
    dom = div;
  }

  var l = start,
      r = end;

  if (start > end) {
    l = end, r = start;
  }

  dom.innerHTML = "<div class=\"label\">".concat(r - l, "</div>");
  dom.style.display = 'block';
  dom.style.left = "".concat(l + offsetLeft, "px");
  dom.style.top = "".concat(pos + offsetTop, "px");
  dom.style.width = "".concat(Math.abs(r - l), "px");
}

function createVDistLine(_ref2, offsetTop, offsetLeft) {
  var pos = _ref2.pos,
      start = _ref2.start,
      end = _ref2.end;
  var id = 'view__v-dist-line';
  var dom = document.getElementById(id);
  var root = createSpaceLineRoot();

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    div.className = id;
    root.appendChild(div);
    dom = div;
  }

  var t = start,
      b = end;

  if (start > end) {
    t = end, b = start;
  }

  dom.innerHTML = "<div class=\"label\">".concat(b - t, "</div>");
  dom.style.display = 'block';
  dom.style.left = "".concat(pos + offsetLeft, "px");
  dom.style.top = "".concat(t + offsetTop, "px");
  dom.style.height = "".concat(Math.abs(b - t), "px");
}
/**
 * 显示距离线
 */


function showDistLine(direction, from, to, offsetTop, offsetLeft) {
  var start = from.start,
      end = from.end;
  var fromPos = from.pos,
      toPos = to.pos; // if (Math.abs(from.pos - to.pos) < 5) {
  //     toPos = fromPos;
  // }

  if (direction === 'v') {
    var line = {
      start: fromPos,
      end: toPos,
      pos: (end + start) / 2
    }; // console.log(line)

    createHDistLine(line, offsetTop, offsetLeft);
  } else {
    var _line = {
      start: fromPos,
      end: toPos,
      pos: (end + start) / 2
    };
    createVDistLine(_line, offsetTop, offsetLeft);
  }
}
/**
 * 隐藏
 */

var hideDistLine = function hideDistLine() {
  var root = createSpaceLineRoot();

  if (root.parentNode) {
    root.parentNode.removeChild(root);
  }
};

/***/ }),

/***/ "./src/lines/label.ts":
/*!****************************!*\
  !*** ./src/lines/label.ts ***!
  \****************************/
/*! exports provided: hideLabel, showLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLabel", function() { return hideLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLabel", function() { return showLabel; });
/**
 * size标签
 */

/**
 * 隐藏label
 * @param {*} id 
 */
var hideLabel = function hideLabel() {
  var id = 'view__resize-label';
  var dom = document.getElementById(id);

  if (!dom) {
    return;
  }

  if (dom.parentNode) {
    dom.parentNode.removeChild(dom);
  }
};
function showLabel(view, content) {
  var id = 'view__resize-label';
  var rect = view.getBoundingClientRect();
  var dom = document.getElementById(id);

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    div.className = id;
    document.body.appendChild(div);
    dom = div;
  }

  dom.style.display = 'block';
  dom.style.top = "".concat(rect.bottom + 5, "px");
  dom.style.left = "".concat(rect.left + rect.width / 2, "px");
  dom.innerHTML = content;
}

/***/ }),

/***/ "./src/lines/lib.ts":
/*!**************************!*\
  !*** ./src/lines/lib.ts ***!
  \**************************/
/*! exports provided: findLine, calcLines, calcDirectionCreator, calcDirection, debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLine", function() { return findLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcLines", function() { return calcLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDirectionCreator", function() { return calcDirectionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDirection", function() { return calcDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/**
 * 寻找和tarLine邻近的线
 * @param {*} tarLine 源线
 * @param {*} lines 线的数组
 */
function findLine(tarLine, lines) {
  // 可以使用二分查找
  var l = 0,
      r = lines.length - 1;

  while (l <= r) {
    var i = Math.round(r - (r - l) / 2);

    if (tarLine.pos < lines[i].pos) {
      r = i - 1;
    } else if (tarLine.pos > lines[i].pos) {
      l = i + 1;
    } else {
      return lines[i];
    }
  }

  if (l == r) {
    return lines[l];
  }

  if (l > r) {
    if (l >= lines.length) {
      return lines[r];
    }

    if (r < 0) {
      return lines[0];
    }

    var x1 = Math.abs(lines[r].pos - tarLine.pos);
    var x2 = Math.abs(lines[l].pos - tarLine.pos);
    return x1 < x2 ? lines[r] : lines[l];
  }
}
function calcLines(top, left, height, width) {
  return {
    v: [{
      type: 'vl',
      pos: left,
      start: top,
      end: top + height
    }, {
      type: 'vm',
      pos: left + width / 2,
      start: top,
      end: top + height
    }, {
      type: 'vr',
      pos: left + width,
      start: top,
      end: top + height
    }],
    h: [{
      type: 'ht',
      pos: top,
      start: left,
      end: left + width
    }, {
      type: 'hm',
      pos: top + height / 2,
      start: left,
      end: left + width
    }, {
      type: 'hb',
      pos: top + height,
      start: left,
      end: left + width
    }]
  };
}
function calcDirectionCreator() {
  var lastTop, lastLeft, lastDirection;
  return function (top, left) {
    if (!lastTop) {
      lastTop = top;
    }

    if (!lastLeft) {
      lastLeft = left;
    }

    var direction; // console.log(top, left, lastTop, lastLeft)

    var topOffset = Math.abs(top - lastTop),
        leftOffset = Math.abs(left - lastLeft);

    if (topOffset > leftOffset) {
      direction = 'v';
    } else if (topOffset < leftOffset) {
      direction = 'h';
    } else {
      direction = lastDirection;
    }

    lastTop = top;
    lastLeft = left;
    lastDirection = direction;
    return direction;
  };
}
var calcDirection = calcDirectionCreator();
function debounce(fn, delay) {
  var timer = null;
  return function () {
    var args = arguments,
        context = this;

    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  };
}
function throttle(fn, delay) {
  var timer = null,
      remaining = 0,
      previous = Date.now();
  return function () {
    var args = arguments,
        context = this;
    var now = Date.now();
    remaining = now - previous;

    if (remaining >= delay) {
      if (timer) {
        clearTimeout(timer);
      }

      fn.apply(context, args);
      previous = now;
    } else {
      if (!timer) {
        timer = setTimeout(function () {
          fn.apply(context, args);
          previous = Date.now();
        }, delay - remaining);
      }
    }
  };
}

/***/ }),

/***/ "./src/lines/space.ts":
/*!****************************!*\
  !*** ./src/lines/space.ts ***!
  \****************************/
/*! exports provided: createVSpaceLines, createHSpaceLines, showSpaceLine, calcSpaceLineList, hideSpaceLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVSpaceLines", function() { return createVSpaceLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHSpaceLines", function() { return createHSpaceLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSpaceLine", function() { return showSpaceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSpaceLineList", function() { return calcSpaceLineList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideSpaceLine", function() { return hideSpaceLine; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/lines/store.ts");


/**
 * 间距块
 */


function createSpaceLineRoot(direction) {
  var id = "view__".concat(direction, "-dist-line-root");
  var dom = document.getElementById(id);

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    document.body.appendChild(div);
    dom = div;
  }

  return dom;
}

function createHSpaceLine(_ref, offsetTop, offsetLeft) {
  var pos = _ref.pos,
      start = _ref.start,
      end = _ref.end,
      height = _ref.height;
  var id = 'view__h-space-line_' + start;
  var root = createSpaceLineRoot('h');
  var dom = document.getElementById(id);

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    div.className = 'view__h-space-line';
    root.appendChild(div);
    dom = div;
  }

  var l = start,
      r = end;

  if (start > end) {
    l = end, r = start;
  }

  dom.innerHTML = "<i class=\"line\"/>";
  dom.style.display = 'block';
  dom.style.left = "".concat(l + offsetLeft, "px");
  dom.style.top = "".concat(pos + offsetTop, "px");
  dom.style.width = "".concat(Math.abs(r - l), "px");
  dom.style.height = "".concat(height, "px");
}

function createVSpaceLine(_ref2, offsetTop, offsetLeft) {
  var pos = _ref2.pos,
      start = _ref2.start,
      end = _ref2.end,
      width = _ref2.width;
  var id = 'view__v-space-line_' + start;
  var root = createSpaceLineRoot('v');
  var dom = document.getElementById(id);

  if (!dom) {
    var div = document.createElement('div');
    div.id = id;
    div.className = 'view__v-space-line';
    root.appendChild(div);
    dom = div;
  }

  var t = start,
      b = end;

  if (start > end) {
    t = end, b = start;
  }

  dom.innerHTML = "<i class=\"line\"/>";
  dom.style.display = 'block';
  dom.style.left = "".concat(pos + offsetLeft, "px");
  dom.style.top = "".concat(t + offsetTop, "px");
  dom.style.width = "".concat(width, "px");
  dom.style.height = "".concat(Math.abs(b - t), "px");
}

function createVSpaceLines() {
  var lineIndexPairs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var offsetTop = arguments.length > 1 ? arguments[1] : undefined;
  var offsetLeft = arguments.length > 2 ? arguments[2] : undefined;
  hideSpaceLine('v');
  lineIndexPairs.forEach(function (item) {
    var from = item.from,
        to = item.to;
    var l1 = from;
    var l2 = to; // { pos, start, end }, offsetTop, offsetLeft

    var t = Math.min(l1.start, l2.start, l1.end, l2.end);
    var b = Math.max(l1.start, l2.start, l1.end, l2.end);
    var line = {
      pos: (l1.start + l1.end) / 2,
      start: l1.pos,
      end: l2.pos,
      height: b - t
    };
    createHSpaceLine(line, offsetTop, offsetLeft);
  });
}
function createHSpaceLines() {
  var lineIndexPairs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var offsetTop = arguments.length > 1 ? arguments[1] : undefined;
  var offsetLeft = arguments.length > 2 ? arguments[2] : undefined;
  hideSpaceLine('h');
  lineIndexPairs.forEach(function (item) {
    var from = item.from,
        to = item.to;
    var l1 = from;
    var l2 = to; // { pos, start, end }, offsetTop, offsetLeft

    var l = Math.min(l1.start, l2.start, l1.end, l2.end);
    var r = Math.max(l1.start, l2.start, l1.end, l2.end);
    var line = {
      pos: (l1.start + l1.end) / 2,
      start: l1.pos,
      end: l2.pos,
      width: r - l
    };
    createVSpaceLine(line, offsetTop, offsetLeft);
  });
}

function calcAllSpaceLines(direction) {
  var allLines = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var tarLines = arguments.length > 2 ? arguments[2] : undefined;
  // 计算vl,vr的间距，按顺序查找，确保vl>vr，连续的vl>vr的线
  var i = 0,
      j = 1,
      results = [];
  var l1type = direction === 'v' ? 'vr' : 'hb';
  var l2type = direction === 'v' ? 'vl' : 'ht';
  var mid = (tarLines[0].end - tarLines[0].start) / 2 + tarLines[0].start;
  var lines = allLines.concat(tarLines).filter(function (line) {
    // 父容器的线去除        
    if (line.start === 0) {
      return false;
    }

    if (line.type === 'vm' || line.type === 'hm') {
      return false;
    }

    if (line.start < mid && line.end > mid) {
      return true;
    }

    return false;
  }).sort(function (a, b) {
    return a.pos - b.pos;
  });

  while (j < lines.length) {
    if (lines[i].type === l1type) {
      if (lines[j].type !== l2type) {
        j++;
        continue;
      }

      if (lines[i].pos <= tarLines[0].pos && lines[j].pos >= tarLines[2].pos) {
        i++;
        continue;
      } // i 是vr j是vl


      results.push([i, j]);
    }

    i++;
    j++;
  }

  return results.map(function (item) {
    var _item = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(item, 2),
        i = _item[0],
        j = _item[1];

    return {
      from: lines[i],
      to: lines[j],
      dist: lines[j].pos - lines[i].pos
    };
  });
}

function findTarSpaceLine(spaceLines, tarLines) {
  var left = tarLines[0];
  var right = tarLines[2];
  var leftTar, rightTar;

  if (spaceLines.length <= 1) {
    return [];
  }

  spaceLines.forEach(function (line, index) {
    var from = line.from,
        to = line.to;

    if (left.pos === to.pos) {
      if (index < 1) {
        return;
      }

      var _line = spaceLines[index - 1];
      var dist = _line.dist;
      leftTar = from.pos + dist;
    }

    if (right.pos === from.pos) {
      if (index >= spaceLines.length - 1) {
        return;
      }

      var _line2 = spaceLines[index + 1];
      var _dist = _line2.dist;
      rightTar = to.pos - _dist;
    }
  });
  return [leftTar, rightTar];
}
/**
 * 
 *显示间距线，返回最近的间距块以及目标吸附位置
 */


var showSpaceLine = function showSpaceLine(direction, line, offsetTop, offsetLeft) {
  //判断是横向还是纵向，
  //计算组件的间距，显示同一方向的间距,
  // let results;
  if (direction === 'h') {
    var spaceLines = calcAllSpaceLines('h', _store__WEBPACK_IMPORTED_MODULE_1__["Lines"].hLines, line.h);
    createHSpaceLines(spaceLines, offsetTop, offsetLeft);
  } else {
    var _spaceLines = calcAllSpaceLines('v', _store__WEBPACK_IMPORTED_MODULE_1__["Lines"].vLines, line.v);

    createVSpaceLines(_spaceLines, offsetTop, offsetLeft);
  }
};
var calcSpaceLineList = function calcSpaceLineList(direction, line) {
  var results, spaceLines;

  if (direction === 'h') {
    spaceLines = calcAllSpaceLines('h', _store__WEBPACK_IMPORTED_MODULE_1__["Lines"].hLines, line.h);
    results = findTarSpaceLine(spaceLines, line.h);
  } else {
    spaceLines = calcAllSpaceLines('v', _store__WEBPACK_IMPORTED_MODULE_1__["Lines"].vLines, line.v);
    results = findTarSpaceLine(spaceLines, line.v);
  }

  return results;
};
/**
 * 隐藏
 * @param {string} direction 方向
 */

var hideSpaceLine = function hideSpaceLine(direction) {
  var hdom = document.getElementById("view__".concat(direction, "-dist-line-root"));

  if (!hdom) {
    return;
  }

  hdom.remove();
};

/***/ }),

/***/ "./src/lines/store.ts":
/*!****************************!*\
  !*** ./src/lines/store.ts ***!
  \****************************/
/*! exports provided: Lines, initLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lines", function() { return Lines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initLine", function() { return initLine; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./src/lines/lib.ts");
/**
 * 线的存储
 */

/**
 * line 集合，{pos,type,start,end}
 */

var Lines = {
  vLines: [],
  hLines: []
};
/**
 * 初始化容器内的线数据
 */

function initLine(childs, dragDom) {
  var vLines = [],
      hLines = [];

  for (var i = 0; i < childs.length; i++) {
    var child = childs[i];

    if (child === dragDom) {
      continue;
    }

    var offsetTop = child.offsetTop,
        offsetLeft = child.offsetLeft,
        offsetHeight = child.offsetHeight,
        offsetWidth = child.offsetWidth;
    var l = Object(_lib__WEBPACK_IMPORTED_MODULE_0__["calcLines"])(offsetTop, offsetLeft, offsetHeight, offsetWidth);
    vLines = vLines.concat(l.v);
    hLines = hLines.concat(l.h);
  }

  Lines.vLines = vLines.sort(function (a, b) {
    return a.pos - b.pos;
  });
  Lines.hLines = hLines.sort(function (a, b) {
    return a.pos - b.pos;
  });
}

/***/ }),

/***/ "./src/move.ts":
/*!*********************!*\
  !*** ./src/move.ts ***!
  \*********************/
/*! exports provided: moveByDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveByDom", function() { return moveByDom; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lines_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lines/lib */ "./src/lines/lib.ts");
/* harmony import */ var _lines_align__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lines/align */ "./src/lines/align.ts");
/* harmony import */ var _lines_distance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lines/distance */ "./src/lines/distance.ts");
/* harmony import */ var _lines_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lines/space */ "./src/lines/space.ts");
/* harmony import */ var _lines_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lines/label */ "./src/lines/label.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");








function calcTarPos(top, left, height, width, vLine, hLine) {
  var tarLeft = left,
      tarTop = top;

  if (!vLine) {
    tarLeft = left;
  } else if (vLine.from.pos < vLine.pos + _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"] && vLine.from.pos > vLine.pos - _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"]) {
    if (vLine.from.type === 'vl') {
      tarLeft = vLine.pos;
    } else if (vLine.from.type === 'vm') {
      tarLeft = vLine.pos - width / 2;
    } else if (vLine.from.type === 'vr') {
      tarLeft = vLine.pos - width;
    }
  }

  if (!hLine) {
    tarTop = top;
  } else if (hLine.from.pos < hLine.pos + _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"] && hLine.from.pos > hLine.pos - _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"]) {
    if (hLine.from.type === 'ht') {
      tarTop = hLine.pos;
    } else if (hLine.from.type === 'hm') {
      tarTop = hLine.pos - height / 2;
    } else if (hLine.from.type === 'hb') {
      tarTop = hLine.pos - height;
    }
  }

  return {
    top: tarTop,
    left: tarLeft
  };
}

function showSapceLines(direction, tarLine, _ref, offsetTop, offsetLeft) {
  var top = _ref.top,
      left = _ref.left,
      width = _ref.width,
      height = _ref.height;
  var tarLeft = left;
  var tarTop = top;

  if (direction == 'h') {
    var _calcSpaceLineList = Object(_lines_space__WEBPACK_IMPORTED_MODULE_4__["calcSpaceLineList"])('v', tarLine),
        _calcSpaceLineList2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_calcSpaceLineList, 2),
        spaceLeft = _calcSpaceLineList2[0],
        spaceRight = _calcSpaceLineList2[1];

    if (tarLeft > spaceLeft - _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"] && tarLeft < spaceLeft + _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"]) {
      tarLeft = spaceLeft;
      Object(_lines_space__WEBPACK_IMPORTED_MODULE_4__["showSpaceLine"])('v', Object(_lines_lib__WEBPACK_IMPORTED_MODULE_1__["calcLines"])(tarTop, tarLeft, height, width), offsetTop, offsetLeft);
    }

    if (tarLeft > spaceRight - width - _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"] && tarLeft < spaceRight - width + _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"]) {
      tarLeft = spaceRight - width;
      Object(_lines_space__WEBPACK_IMPORTED_MODULE_4__["showSpaceLine"])('v', Object(_lines_lib__WEBPACK_IMPORTED_MODULE_1__["calcLines"])(tarTop, tarLeft, height, width), offsetTop, offsetLeft);
    }
  } else {
    var _calcSpaceLineList3 = Object(_lines_space__WEBPACK_IMPORTED_MODULE_4__["calcSpaceLineList"])('h', tarLine),
        _calcSpaceLineList4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_calcSpaceLineList3, 2),
        spaceTop = _calcSpaceLineList4[0],
        spaceBottom = _calcSpaceLineList4[1];

    if (tarTop > spaceTop - _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"] && tarTop < spaceTop + _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"]) {
      tarTop = spaceTop;
      Object(_lines_space__WEBPACK_IMPORTED_MODULE_4__["showSpaceLine"])('h', Object(_lines_lib__WEBPACK_IMPORTED_MODULE_1__["calcLines"])(tarTop, tarLeft, height, width), offsetTop, offsetLeft);
    }

    if (tarTop > spaceBottom - height - _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"] && tarTop < spaceBottom - height + _constants__WEBPACK_IMPORTED_MODULE_6__["DIST"]) {
      tarTop = spaceBottom - height;
      Object(_lines_space__WEBPACK_IMPORTED_MODULE_4__["showSpaceLine"])('h', Object(_lines_lib__WEBPACK_IMPORTED_MODULE_1__["calcLines"])(tarTop, tarLeft, height, width), offsetTop, offsetLeft);
    }
  }

  return {
    top: tarTop,
    left: tarLeft
  };
}

function showAlignLines(tarLine, _ref2, offsetTop, offsetLeft) {
  var top = _ref2.top,
      left = _ref2.left,
      width = _ref2.width,
      height = _ref2.height;
  var nearLine = Object(_lines_align__WEBPACK_IMPORTED_MODULE_2__["showAlignLine"])(tarLine, offsetTop, offsetLeft);
  var tarLeft = left,
      tarTop = top;

  if (nearLine) {
    var vLine = nearLine.vLine,
        hLine = nearLine.hLine;
    var tarPos = calcTarPos(top, left, height, width, vLine, hLine);
    tarLeft = tarPos.left;
    tarTop = tarPos.top;

    if (top != tarTop || left != tarLeft) {
      Object(_lines_align__WEBPACK_IMPORTED_MODULE_2__["showAlignLine"])(Object(_lines_lib__WEBPACK_IMPORTED_MODULE_1__["calcLines"])(tarTop, tarLeft, height, width), offsetTop, offsetLeft);
    }

    var fromVLine = vLine.from;
    var fromHLine = hLine.from;
    var map = {
      'vl': 0,
      'vm': 1,
      'vr': 2,
      'ht': 0,
      'hm': 1,
      'hb': 2
    };

    if (tarLeft != left || tarTop != top) {
      var newLine = Object(_lines_lib__WEBPACK_IMPORTED_MODULE_1__["calcLines"])(tarTop, tarLeft, height, width);
      fromVLine = newLine.v[map[fromVLine.type]];
      fromHLine = newLine.h[map[fromHLine.type]];
    }

    Object(_lines_distance__WEBPACK_IMPORTED_MODULE_3__["showDistLine"])('v', fromVLine, vLine, offsetTop, offsetLeft);
    Object(_lines_distance__WEBPACK_IMPORTED_MODULE_3__["showDistLine"])('h', fromHLine, hLine, offsetTop, offsetLeft);
  }

  return {
    top: tarTop,
    left: tarLeft
  };
}

function hideLines() {
  Object(_lines_align__WEBPACK_IMPORTED_MODULE_2__["hideAlignLine"])();
  Object(_lines_space__WEBPACK_IMPORTED_MODULE_4__["hideSpaceLine"])('h');
  Object(_lines_space__WEBPACK_IMPORTED_MODULE_4__["hideSpaceLine"])('v');
  Object(_lines_distance__WEBPACK_IMPORTED_MODULE_3__["hideDistLine"])();
  Object(_lines_label__WEBPACK_IMPORTED_MODULE_5__["hideLabel"])();
}

var moveDeb = Object(_lines_lib__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (cb) {
  cb();
}, 1000);
var moveByDom = function moveByDom(dom, top, left, onMoveEnd) {
  if (!dom) {
    return;
  }

  var cotainer = dom.parentNode.getBoundingClientRect();
  var offsetTop = cotainer.top;
  var offsetLeft = cotainer.left;
  var rect = dom.getBoundingClientRect();
  var height = rect.height,
      width = rect.width;
  var direction = Object(_lines_lib__WEBPACK_IMPORTED_MODULE_1__["calcDirection"])(top, left);
  var tarLine = Object(_lines_lib__WEBPACK_IMPORTED_MODULE_1__["calcLines"])(top, left, height, width);
  var tarLeft = left,
      tarTop = top;
  var tarSpaceInfo = showSapceLines(direction, tarLine, {
    top: tarTop,
    left: tarLeft,
    width: width,
    height: height
  }, offsetTop, offsetLeft);
  tarTop = tarSpaceInfo.top;
  tarLeft = tarSpaceInfo.left;
  var alignLineInfo = showAlignLines(tarLine, {
    top: tarTop,
    left: tarLeft,
    width: width,
    height: height
  }, offsetTop, offsetLeft);
  tarTop = alignLineInfo.top;
  tarLeft = alignLineInfo.left;
  dom.style.left = "".concat(tarLeft, "px");
  dom.style.top = "".concat(tarTop, "px");
  Object(_lines_label__WEBPACK_IMPORTED_MODULE_5__["showLabel"])(dom, "X:".concat(tarLeft, ",Y:").concat(tarTop));
  moveDeb(function () {
    hideLines();

    if (onMoveEnd) {
      onMoveEnd(tarTop, tarLeft);
    }
  });
};

/***/ }),

/***/ "./src/resize.ts":
/*!***********************!*\
  !*** ./src/resize.ts ***!
  \***********************/
/*! exports provided: resizeByDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeByDom", function() { return resizeByDom; });
/* harmony import */ var _lines_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lines/lib */ "./src/lines/lib.ts");
/* harmony import */ var _lines_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lines/align */ "./src/lines/align.ts");
/* harmony import */ var _lines_distance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lines/distance */ "./src/lines/distance.ts");
/* harmony import */ var _lines_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lines/label */ "./src/lines/label.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _lines_space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lines/space */ "./src/lines/space.ts");







function calcTarSize(top, left, height, width, vLine, hLine) {
  var tarLeft = left,
      tarTop = top,
      tarHeight = height,
      tarWidth = width;

  if (vLine) {
    if (vLine.from.pos < vLine.pos + _constants__WEBPACK_IMPORTED_MODULE_4__["DIST"] && vLine.from.pos > vLine.pos - _constants__WEBPACK_IMPORTED_MODULE_4__["DIST"]) {
      if (vLine.from.type === 'vl') {
        tarLeft = vLine.pos;
        tarWidth = width + (vLine.from.pos - vLine.pos);
      } else if (vLine.from.type === 'vm') {// tarLeft = vLine.pos - width / 2;
      } else if (vLine.from.type === 'vr') {
        tarWidth = width + (vLine.pos - vLine.from.pos);
        tarLeft = vLine.pos - tarWidth;
      }
    }
  }

  if (hLine) {
    if (hLine.from.pos < hLine.pos + _constants__WEBPACK_IMPORTED_MODULE_4__["DIST"] && hLine.from.pos > hLine.pos - _constants__WEBPACK_IMPORTED_MODULE_4__["DIST"]) {
      if (hLine.from.type === 'ht') {
        tarTop = hLine.pos;
        tarHeight = height + (hLine.from.pos - hLine.pos);
      } else if (hLine.from.type === 'hm') {
        tarTop = hLine.pos - height / 2;
      } else if (hLine.from.type === 'hb') {
        tarHeight = height + (hLine.pos - hLine.from.pos);
        tarTop = hLine.pos - tarHeight;
      }
    }
  }

  return {
    top: tarTop,
    left: tarLeft,
    height: tarHeight,
    width: tarWidth
  };
}

var DIRECTION = {
  'tc': ['ht'],
  'bc': ['hb'],
  'rc': ['vr'],
  'lc': ['vl'],
  'tl': ['ht', 'vl'],
  'tr': ['ht', 'vr'],
  'br': ['hb', 'vr'],
  'bl': ['hb', 'vl']
};

function getTarLine(line) {
  var include = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var v = line.v.filter(function (item) {
    return include.indexOf(item.type) >= 0;
  });
  var h = line.h.filter(function (item) {
    return include.indexOf(item.type) >= 0;
  });
  return {
    v: v,
    h: h
  };
}

var last;

function caclHandType(top, left, height, width) {
  if (!last) {
    last = {
      top: top,
      left: left,
      height: height,
      width: width
    };
    return [];
  }

  var lines = [];

  if (top !== last.top) {
    lines.push('ht');
  }

  if (left !== last.left) {
    lines.push('vl');
  }

  if (top === last.top && left === last.left && width !== last.width) {
    lines.push('vr');
  }

  if (top === last.top && left === last.left && height !== last.height) {
    lines.push('hb');
  }

  return lines;
}

function hideLines() {
  last = null;
  Object(_lines_align__WEBPACK_IMPORTED_MODULE_1__["hideAlignLine"])();
  Object(_lines_space__WEBPACK_IMPORTED_MODULE_5__["hideSpaceLine"])('h');
  Object(_lines_space__WEBPACK_IMPORTED_MODULE_5__["hideSpaceLine"])('v');
  Object(_lines_distance__WEBPACK_IMPORTED_MODULE_2__["hideDistLine"])();
  Object(_lines_label__WEBPACK_IMPORTED_MODULE_3__["hideLabel"])();
}

var moveDeb = Object(_lines_lib__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function (cb) {
  cb();
}, 1000);
var resizeByDom = function resizeByDom(dom, top, left, height, width, onMoveEnd) {
  if (!dom) {
    return;
  }

  var cotainer = dom.parentNode.getBoundingClientRect();
  var offsetTop = cotainer.top;
  var offsetLeft = cotainer.left;
  var handType = caclHandType(top, left, height, width);
  console.log(handType);
  var allLines = Object(_lines_lib__WEBPACK_IMPORTED_MODULE_0__["calcLines"])(top, left, height, width);
  var tarLine = getTarLine(allLines, handType);
  var nearLine = Object(_lines_align__WEBPACK_IMPORTED_MODULE_1__["showAlignLine"])(tarLine, offsetTop, offsetLeft);
  var tarLeft = left,
      tarTop = top,
      tarHeight = height,
      tarWidth = width; // console.log(nearLine)

  if (nearLine) {
    var vLine = nearLine.vLine,
        hLine = nearLine.hLine;
    var tarPos = calcTarSize(top, left, height, width, vLine, hLine);
    tarLeft = tarPos.left;
    tarTop = tarPos.top;
    tarHeight = tarPos.height;
    tarWidth = tarPos.width;

    if (left != tarLeft || top != tarTop || height != tarHeight || width != tarWidth) {
      Object(_lines_align__WEBPACK_IMPORTED_MODULE_1__["showAlignLine"])(Object(_lines_lib__WEBPACK_IMPORTED_MODULE_0__["calcLines"])(tarTop, tarLeft, tarHeight, tarWidth), offsetTop, offsetLeft);
    }

    var map = {
      'vl': 0,
      'vm': 1,
      'vr': 2,
      'ht': 0,
      'hm': 1,
      'hb': 2
    };

    if (vLine) {
      var fromVLine = vLine.from;

      if (tarLeft != left || tarWidth != width) {
        var newLine = Object(_lines_lib__WEBPACK_IMPORTED_MODULE_0__["calcLines"])(tarTop, tarLeft, tarHeight, tarWidth);
        fromVLine = newLine.v[map[fromVLine.type]];
      }

      Object(_lines_distance__WEBPACK_IMPORTED_MODULE_2__["showDistLine"])('v', fromVLine, vLine, offsetTop, offsetLeft);
    }

    if (hLine) {
      var fromHLine = hLine.from;

      if (tarTop != top || tarHeight != height) {
        var _newLine = Object(_lines_lib__WEBPACK_IMPORTED_MODULE_0__["calcLines"])(tarTop, tarLeft, tarHeight, tarWidth);

        fromHLine = _newLine.h[map[fromHLine.type]];
      }

      Object(_lines_distance__WEBPACK_IMPORTED_MODULE_2__["showDistLine"])('h', fromHLine, hLine, offsetTop, offsetLeft);
    }
  }

  dom.style.top = "".concat(tarTop, "px");
  dom.style.left = "".concat(tarLeft, "px");
  dom.style.height = "".concat(tarHeight, "px");
  dom.style.width = "".concat(tarWidth, "px"); // showLabel(dom, rect.bottom + 3, rect.left + rect.width / 2, `W:${width},H:${height}`);

  Object(_lines_label__WEBPACK_IMPORTED_MODULE_3__["showLabel"])(dom, "W:".concat(width, ",H:").concat(height));
  moveDeb(function () {
    hideLines();

    if (onMoveEnd) {
      onMoveEnd(tarTop, tarLeft, tarHeight, tarWidth);
    }
  });
};

/***/ })

/******/ });
});