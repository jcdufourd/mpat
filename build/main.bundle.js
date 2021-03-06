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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(10);
var isBuffer = __webpack_require__(36);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(19);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(33);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneLayout;

var _globals = __webpack_require__(16);

var _LayoutIO = __webpack_require__(5);

var _LayoutIO2 = _interopRequireDefault(_LayoutIO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Copyright (c) 2017 MPAT Consortium , All rights reserved.
 * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library. If not, see <http://www.gnu.org/licenses/>.
 *
 * Authors:
 * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
 **/
var lio = null;

function cloneLayout(layoutIndex) {
  // the index of the layout in the php table is passed
  if (lio === null) {
    lio = new _LayoutIO2.default();
  }
  var explorer = (0, _globals.explorerData)(); // get the php table
  var layout = explorer[layoutIndex].page_layout;
  var newName = (0, _globals.userPrompt)(mpatExplorerI18n.nameOfCloneLayout);
  if (newName === '') {
    return;
  }
  layout.post_title = newName;
  layout.post_name = newName;
  layout.mpat_content = layout.meta.mpat_content; // different structure between php and rest
  delete layout.ID; // remove existing ID
  delete layout.guid; // remove existing link with old name
  delete layout.meta; // different structure between php and rest
  lio.post(layout, function (id) {
    return (0, _globals.refresh)();
  }, function (err) {
    return (0, _globals.userAlert)(err);
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Copyright (c) 2017 MPAT Consortium , All rights reserved.
                                                                                                                                                                                                                                                                               * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This program is free software; you can redistribute it and/or
                                                                                                                                                                                                                                                                               * modify it under the terms of the GNU General Public License
                                                                                                                                                                                                                                                                               * as published by the Free Software Foundation; either version 2
                                                                                                                                                                                                                                                                               * of the License, or (at your option) any later version.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                               * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                               * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                               * GNU General Public License for more details.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * You should have received a copy of the GNU Lesser General Public
                                                                                                                                                                                                                                                                               * License along with this library. If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Authors:
                                                                                                                                                                                                                                                                               * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
                                                                                                                                                                                                                                                                               **/


exports.process = process;

var _mpat_explorer = __webpack_require__(18);

var _graph = __webpack_require__(17);

var _PageIO = __webpack_require__(15);

var _PageIO2 = _interopRequireDefault(_PageIO);

var _LayoutIO = __webpack_require__(5);

var _LayoutIO2 = _interopRequireDefault(_LayoutIO);

var _ModelIO = __webpack_require__(13);

var _ModelIO2 = _interopRequireDefault(_ModelIO);

var _MediaIO = __webpack_require__(12);

var _MediaIO2 = _interopRequireDefault(_MediaIO);

var _OptionIO = __webpack_require__(14);

var _OptionIO2 = _interopRequireDefault(_OptionIO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preprocess(o) {
  window.MPAT = {
    pages: {},
    pageArray: [],
    layouts: {}
  };
  o.forEach(function (obj) {
    if (obj.page) {
      window.MPAT.pages['p' + obj.page.ID] = obj.page;
      window.MPAT.pageArray.push(obj.page);
    } else if (obj.page_layout) {
      window.MPAT.layouts['l' + obj.page_layout.ID] = obj.page_layout;
    }
  });
}

/*
 * general function
 */
function process(o) {
  preprocess(o);
  var ip = document.getElementById('insertionPoint');
  var vv = document.getElementById('infoTable');
  var v1 = document.getElementById('layoutTable');
  var pageCounter = 0;
  var layoutCounter = 0;
  var websitegraph = [];
  /*
   * loop on the info from PHP to build the JS data structure
   */
  var url = window.location.href.substring(0, window.location.href.indexOf('admin.php?'));
  var usage = {};
  for (var i = 0; i < o.length; i++) {
    var v = document.createElement('tr');
    var obj = o[i];
    if (obj.page) {
      // fill the page table
      var lnks = (0, _mpat_explorer.findLinks)(obj);
      var l = lnks.map(function (a) {
        return a.url;
      }).join(',');
      var url2 = url + 'post.php?post=' + obj.page.ID + '&action=edit';
      websitegraph.push({ id: obj.page.ID, title: obj.page.post_title, links: lnks });
      v.innerHTML = '<td><a href="' + url2 + '">' + obj.page.post_title + ' (' + obj.page.ID + ')</a></td><td>Components: ' + (0, _mpat_explorer.components)(obj) + '<br/>Media: ' + (0, _mpat_explorer.media)(obj) + '<br/>Links: ' + l + '</td>';
      vv.appendChild(v);
      pageCounter++;
      var tag = 'p' + obj.page.meta.mpat_content.layoutId;
      if (!usage[tag]) {
        usage[tag] = [];
      }
      usage[tag].push(i);
    }
    if (obj.mpat_application_manager) {
      document.getElementById('navmodel').textContent += obj.mpat_application_manager.navigation_model;
    }
  }
  for (var _i = 0; _i < o.length; _i++) {
    var _v = document.createElement('tr');
    var _obj = o[_i];
    if (_obj.page_layout) {
      // fill the layout table
      var _l = _obj.page_layout;
      var _url = url + 'post.php?post=' + _l.ID + '&action=edit';
      var usageOfThis = usage['p' + _l.ID];
      var users = '';
      if (usageOfThis) {
        usageOfThis.forEach(function (j) {
          var page = o[j].page;
          var url3 = url + 'post.php?post=' + page.ID + '&action=edit';
          users += ' <a href="' + url3 + '">' + page.post_title + ' (' + page.ID + ')</a>';
        });
      }
      if (users === '') users = '--unused--';
      _v.innerHTML = '<td><a href="' + _url + '">' + _l.post_title + ' (' + _l.ID + ')</a></td><td>' + users + '</td><td>' + (0, _mpat_explorer.zones)(_l.meta.mpat_content) + '</td><td><button type="button" onclick="cloneLayout(' + _i + ')">Clone</button></td>';
      v1.appendChild(_v);
      layoutCounter++;
    }
  }
  document.getElementById('pages').textContent += '' + pageCounter; //eslint-disable-line
  document.getElementById('layouts').textContent += '' + layoutCounter; //eslint-disable-line
  // create a complete info package on the application with all known details
  // shown as a JSON object after the tables
  var pre = document.createElement('details');
  var sum = document.createElement('summary');
  sum.textContent = mpatExplorerI18n.completeInfo;
  pre.appendChild(sum);
  var bq = document.createElement('blockquote');
  pre.appendChild(bq);
  // const det1 = document.createElement('details');
  // bq.appendChild(det1);
  // bq.appendChild(document.createElement('br'));
  for (var _i2 = 0; _i2 < o.length; _i2++) {
    var _obj2 = o[_i2];
    var odet = document.createElement('details');
    sum = document.createElement('summary');
    odet.appendChild(sum);
    var keys = Object.keys(_obj2);
    var label = keys[0];
    sum.innerHTML = '<i>' + label + '</i> <b>' + (0, _mpat_explorer.ident)(label, _obj2) + '</b>';
    var bq1 = document.createElement('blockquote');
    odet.appendChild(bq1);
    var rest = document.createElement('pre');
    if (label === 'custom_css') {
      rest.textContent = _obj2.custom_css.post_content;
    } else if (keys.length === 1) {
      rest.textContent = JSON.stringify(_obj2[keys[0]], null, 2);
    } else {
      rest.textContent = JSON.stringify(_obj2, null, 2);
    }
    bq1.appendChild(rest);
    bq.appendChild(odet);
  }
  ip.appendChild(pre);
  // raw JSON object for debug purposes
  // sum = document.createElement('summary');
  // sum.textContent = 'Raw JSON';
  // det1.appendChild(sum);
  // const bq2 = document.createElement('blockquote');
  // det1.appendChild(bq2);
  // const pre2 = document.createElement('pre');
  // pre2.textContent = JSON.stringify(o, null, 2);
  // bq2.appendChild(pre2);
  // ip.appendChild(document.createElement('br'));
  // insert the web site map at the end
  var det2 = document.createElement('h3');
  ip.appendChild(det2);
  det2.textContent = mpatExplorerI18n.websiteGraph;
  var det3 = document.createElement('p');
  ip.appendChild(det3);
  det3.textContent = mpatExplorerI18n.zoom;
  var d3g = (0, _graph.d3ize)(websitegraph);
  (0, _graph.d3process)(d3g);
  var hr = document.createElement('hr');
  hr.style.cssText = 'width: 50%; margin: 30px;';
  ip.appendChild(hr);
  var bu = document.createElement('button');
  bu.id = "btn-cleanall";
  bu.title = mpatExplorerI18n.emptyDatabase;
  bu.textContent = mpatExplorerI18n.emptyDB;
  bu.addEventListener('click', empty);
  ip.appendChild(bu);
  var bu2 = document.createElement('button');
  bu2.id = "btn-debugdb";
  bu2.title = mpatExplorerI18n.debugDatabase;
  bu2.textContent = mpatExplorerI18n.debugDB;
  bu2.addEventListener('click', debugDb);
  ip.appendChild(bu2);
  var but2 = document.getElementById('explorerPutPage');
  but2.addEventListener('click', explorerPutPage);
  var selector = document.getElementById('page-id-field');
  window.MPAT.pageArray.forEach(function (page) {
    var name = page.post_title || page.ID;
    var opt = document.createElement('option');
    selector.appendChild(opt);
    opt.value = page.ID;
    opt.textContent = name;
  });
  selector.addEventListener('change', explorerGetPage);
  var selector2 = document.getElementById('model-id-field');
  commonModelIO.get(function (models) {
    models.forEach(function (model) {
      var name = model.post_title || model.ID;
      var opt = document.createElement('option');
      selector2.appendChild(opt);
      opt.value = model.ID;
      opt.textContent = name;
    });
  }, function (e) {});
  selector2.addEventListener('change', explorerGetModel);
  var but3 = document.getElementById('explorerPutModel');
  but3.addEventListener('click', explorerPutModel);
  var selector3 = document.getElementById('option-id-field');
  selector3.addEventListener('change', explorerGetOption);
  var but4 = document.getElementById('explorerPutOption');
  but4.addEventListener('click', explorerPutOption);
  //
  ip.appendChild(document.createElement("br"));
  var in4 = document.createElement("input");
  in4.type = "text";
  in4.size = 40;
  in4.id = "tf-sethide";
  ip.appendChild(in4);
  var bu3 = document.createElement('button');
  bu3.id = "btn-sethide";
  bu3.title = "Set HideOnRED";
  bu3.textContent = "Set HideOnRED";
  bu3.addEventListener('click', setHideOnRed);
  ip.appendChild(bu3);
}

function setHideOnRed() {
  var text = document.getElementById("tf-sethide").value;
  window.MPAT.pageArray.forEach(function (page) {
    var content = page.meta.mpat_content;
    if (!content.hasOwnProperty('pageProps')) {
      content.pageProps = { hideOnRed: true, showOnRedText: text };
      commonPageIO.put(page.ID, {
        ID: page.ID,
        title: page.post_title,
        parent: page.post_parent,
        status: page.post_status,
        mpat_content: page.meta.mpat_content
      }, function () {}, function (e) {
        alert(mpatExplorerI18n.errorSavePage + page.ID + ' ' + e);
      });
    }
  });
  alert('end of processing');
}

var commonPageIO = new _PageIO2.default();
var commonLayoutIO = new _LayoutIO2.default();
var commonModelIO = new _ModelIO2.default();
var commonMediaIO = new _MediaIO2.default();
var commonOptionIO = new _OptionIO2.default();
var currentPage = null;
var currentModel = null;
var currentOption = null;

function explorerGetPage() {
  currentModel = null;
  currentOption = null;
  var pageId = document.getElementById('page-id-field').value;
  if (pageId > 0) {
    currentPage = window.MPATExplorer.find(function (o) {
      return o.page && o.page.ID == pageId;
    }).page;
    document.getElementById('mpat-text-editing').value = JSON.stringify(currentPage.meta.mpat_content, null, 4);
  } else {
    window.alert(mpatExplorerI18n.pageIs + pageId);
  }
}

function explorerGetModel() {
  currentPage = null;
  currentOption = null;
  var modelId = document.getElementById('model-id-field').value;
  if (modelId > 0) {
    commonModelIO.getModel(modelId, function (model) {
      currentModel = model;
      delete model.mpat_content.layout;
      document.getElementById('mpat-text-editing').value = JSON.stringify(model.mpat_content, null, 4);
    }, function (error) {
      document.getElementById('mpat-text-editing').value = mpatExplorerI18n.errorGettingModel + modelId + "\n" + JSON.stringify(error, null, 2);
    });
  } else {
    window.alert(mpatExplorerI18n.modelIs + modelId);
  }
}

function explorerGetOption() {
  currentPage = null;
  currentModel = null;
  var optionId = document.getElementById('option-id-field').value;
  if (optionId !== "0") {
    commonOptionIO.getModel(optionId, function (option) {
      currentOption = option;
      document.getElementById('mpat-text-editing').value = JSON.stringify(option, null, 4);
    }, function (error) {
      document.getElementById('mpat-text-editing').value = mpatExplorerI18n.erroGettingOption + optionId + "\n" + JSON.stringify(error, null, 2);
    });
  } else {
    window.alert(mpatExplorerI18n.optionIs + optionId);
  }
}

function explorerPutPage() {
  if (!currentPage) return;
  var pageId = document.getElementById('page-id-field').value;
  commonPageIO.put(pageId, {
    ID: pageId,
    title: currentPage.post_title,
    parent: currentPage.post_parent,
    status: currentPage.post_status,
    mpat_content: JSON.parse(document.getElementById('mpat-text-editing').value)
  }, function (res) {
    document.getElementById('mpat-text-editing').value = mpatExplorerI18n.pageUpdated + pageId;
  }, function (error) {
    document.getElementById('mpat-text-editing').value = mpatExplorerI18n.errPutPage + pageId + "\n" + JSON.stringify(error, null, 2);
  });
}

function explorerPutModel() {
  if (!currentModel) return;
  var modelId = document.getElementById('model-id-field').value;
  currentModel.mpat_content = JSON.parse(document.getElementById('mpat-text-editing').value);
  commonModelIO.put(modelId, currentModel, function (res) {
    document.getElementById('mpat-text-editing').value = mpatExplorerI18n.modelUpdated + modelId;
  }, function (error) {
    document.getElementById('mpat-text-editing').value = mpatExplorerI18n.errPutModel + modelId + "\n" + JSON.stringify(error, null, 2);
  });
}

function explorerPutOption() {
  if (!currentOption) return;
  var optionId = document.getElementById('option-id-field').value;
  currentOption = JSON.parse(document.getElementById('mpat-text-editing').value);
  commonOptionIO.put(optionId, currentOption, function (res) {
    document.getElementById('mpat-text-editing').value = mpatExplorerI18n.optionUpdated + optionId;
  }, function (error) {
    document.getElementById('mpat-text-editing').value = mpatExplorerI18n.errPutOption + optionId + "\n" + JSON.stringify(error, null, 2);
  });
}

function debugDb() {
  window.MPAT.pageArray.forEach(function (page) {
    var content = page.meta.mpat_content.content;
    var name = page.post_title || page.ID;
    var toDelete = [];
    var toUpdate = false;
    var layout = window.MPAT.layouts['l' + page.meta.mpat_content.layoutId];
    if (!layout) {
      alert(mpatExplorerI18n.Page + ' ' + name + ' ' + mpatExplorerI18n.hasNoLayout);
      return;
    }
    if (page.meta.mpat_content.background) {
      if (page.meta.mpat_content.styles && page.meta.mpat_content.styles.container) {
        alert(mpatExplorerI18n.Page + ' ' + name + ' has both a background and a container style, removing background');
      } else {
        alert(mpatExplorerI18n.Page + ' ' + name + ' has an old background, moving it to container styles');
        page.meta.mpat_content.styles = page.meta.mpat_content.styles || {};
        page.meta.mpat_content.styles.container = page.meta.mpat_content.styles.container || {};
        if (page.meta.mpat_content.background.indexOf('http') === 0) {
          page.meta.mpat_content.styles.container.backgroundImage = page.meta.mpat_content.background;
        } else {
          page.meta.mpat_content.styles.container.backgroundColor = page.meta.mpat_content.background;
        }
      }
      delete page.meta.mpat_content.background;
    }
    var layoutBoxes = layout.meta.mpat_content.layout;
    if (content === undefined) {
      alert(mpatExplorerI18n.Page + ' ' + name + ' ' + mpatExplorerI18n.hasNoContent);
    } else {
      var contentKeys = Object.keys(content);
      if (!Array.isArray(contentKeys) || contentKeys.length === 0) {
        alert(mpatExplorerI18n.Page + ' ' + name + ' ' + mpatExplorerI18n.hasEmptyContent);
      } else {
        Object.keys(content).forEach(function (boxName) {
          if (!layoutBoxes.find(function (b) {
            return b.i === boxName;
          })) {
            toDelete.push(boxName);
          } else {
            // test the content of the component data
            var boxContent = content[boxName];
            // for each state, check
            Object.keys(boxContent).forEach(function (stateName) {
              var component = boxContent[stateName];
              var type = component.type;
              if (typeof type !== 'string') {
                alert(mpatExplorerI18n.Page + ' ' + name + ' ' + mpatExplorerI18n.box + ' ' + boxName + ' ' + mpatExplorerI18n.state + ' ' + stateName + ' has non string type ' + type);
              }
              var data = component.data;
              if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
                alert(mpatExplorerI18n.Page + ' ' + name + ' ' + mpatExplorerI18n.box + ' ' + boxName + ' ' + mpatExplorerI18n.state + ' ' + stateName + ' has non object data ' + data);
                if (typeof data === 'string') {
                  component.data = { text: data };
                  toUpdate = true;
                }
              }
              var styles = component.styles;
              if (styles && (typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) !== 'object') {
                alert(mpatExplorerI18n.Page + ' ' + name + ' ' + mpatExplorerI18n.box + ' ' + boxName + ' ' + mpatExplorerI18n.state + ' ' + stateName + ' has non object styles ' + styles);
              }
            });
          }
        });
      }
      if (toDelete.length > 0 || toUpdate) {
        if (toDelete.length > 0) {
          alert('Page ' + name + ' has extra boxes ' + toDelete.join(' '));
          toDelete.forEach(function (name) {
            return delete page.meta.mpat_content.content[name];
          });
        }
        commonPageIO.put(page.ID, {
          ID: page.ID,
          title: page.post_title,
          parent: page.post_parent,
          status: page.post_status,
          mpat_content: page.meta.mpat_content
        }, function () {}, function (e) {
          alert(mpatExplorerI18n.errorSavePage + page.ID + ' ' + e);
        });
      }
    }
  });
  alert('end of DB processing');
}

function empty() {
  commonPageIO.get(function (pages) {
    pages.forEach(function (page) {
      commonPageIO.remove(page.id, function () {}, function (e) {
        return alert(mpatExplorerI18n.couldNotDeletePage + page.id);
      });
    });
    commonModelIO.get(function (pages) {
      pages.forEach(function (page) {
        commonModelIO.remove(page.ID, function () {}, function (e) {
          return alert(mpatExplorerI18n.couldNotDeletePage + page.ID);
        });
      });
      commonLayoutIO.get(function (layouts) {
        layouts.forEach(function (layout) {
          commonLayoutIO.remove(layout.ID, function () {}, function (e) {
            return alert(mpatExplorerI18n.couldNotDeleteLayout + layout.ID);
          });
        });
        alert(mpatExplorerI18n.endOfDBemptying);
      }, function (e) {
        return alert(mpatExplorerI18n.couldNotReadDB4Layout);
      });
    }, function () {
      alert(mpatExplorerI18n.couldNotReadDB4Model);
    });
  }, function () {
    alert(mpatExplorerI18n.couldNotReadDB4Page);
  });
  commonMediaIO.get(function (medias) {
    medias.forEach(function (media) {
      commonMediaIO.remove(media.id, function () {}, function (e) {
        return alert(mpatExplorerI18n.couldNotDeleteMedia + media.id);
      });
    });
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 MPAT Consortium , All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is free software; you can redistribute it and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * modify it under the terms of the GNU General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * as published by the Free Software Foundation; either version 2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License, or (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * GNU General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You should have received a copy of the GNU Lesser General Public
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * License along with this library. If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Authors:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **/


var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rootRestUrl = window.wpApiSettings.root + 'mpat/v1/layout';

var LayoutIO = function () {
  function LayoutIO() {
    _classCallCheck(this, LayoutIO);

    _axios2.default.defaults.headers.common['X-WP-Nonce'] = window.wpApiSettings.nonce;
  }

  _createClass(LayoutIO, [{
    key: 'get',
    value: function get(onSuccess, onError) {
      _axios2.default.get(rootRestUrl, {}).then(function (v) {
        if (onSuccess) onSuccess.call(null, v.data);
      }).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }, {
    key: 'remove',
    value: function remove(pageId, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.delete(rootRestUrl + '/' + pageId).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }, {
    key: 'post',
    value: function post(newPage, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.post(rootRestUrl, newPage).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }]);

  return LayoutIO;
}();

exports.default = LayoutIO;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(25);
var buildURL = __webpack_require__(28);
var parseHeaders = __webpack_require__(34);
var isURLSameOrigin = __webpack_require__(32);
var createError = __webpack_require__(9);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(27);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(30);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(24);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 MPAT Consortium , All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is free software; you can redistribute it and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * modify it under the terms of the GNU General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * as published by the Free Software Foundation; either version 2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License, or (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * GNU General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You should have received a copy of the GNU Lesser General Public
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * License along with this library. If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Authors:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **/


var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * This component loads the media information from within JS using the WP REST API
 * and AJAX
 * This is shared by the components Menu, Clone as well as the Preview window.
 *
  * Author: JC Dufourd, Telecom ParisTech
 */
var mediaRestUrl = '' + window.wpApiSettings.root + window.wpApiSettings.versionString + 'media';
var restUrl = mediaRestUrl + '?per_page=100';

var MediaIO = function () {
  function MediaIO() {
    _classCallCheck(this, MediaIO);

    _axios2.default.defaults.headers.common['X-WP-Nonce'] = window.wpApiSettings.nonce;
  }

  /*
   * reloads the media unconditionnaly
   */


  _createClass(MediaIO, [{
    key: 'get',
    value: function get(onSuccess, onError) {
      _axios2.default.get(restUrl, {}).then(function (v) {
        if (onSuccess) onSuccess.call(null, v.data);
      }).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }, {
    key: 'getPage',
    value: function getPage(pageId, onSuccess, onError) {
      _axios2.default.get(mediaRestUrl + '/' + pageId, {}).then(function (v) {
        if (onSuccess) onSuccess.call(null, v.data);
      }).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }

    // updates an existing page

  }, {
    key: 'put',
    value: function put(pageId, updated, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.put(mediaRestUrl + '/' + pageId, updated).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }

    // updates an existing page

  }, {
    key: 'remove',
    value: function remove(pageId, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.delete(mediaRestUrl + '/' + pageId, { data: { force: true } }).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }

    // creates a new page (e.g. when cloning)

  }, {
    key: 'post',
    value: function post(newPage, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.post(mediaRestUrl, newPage).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }]);

  return MediaIO;
}();

exports.default = MediaIO;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 MPAT Consortium , All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is free software; you can redistribute it and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * modify it under the terms of the GNU General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * as published by the Free Software Foundation; either version 2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License, or (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * GNU General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You should have received a copy of the GNU Lesser General Public
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * License along with this library. If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Authors:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **/


var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rootRestUrl = window.wpApiSettings.root + 'mpat/v1/model';

var ModelIO = function () {
  function ModelIO() {
    _classCallCheck(this, ModelIO);

    _axios2.default.defaults.headers.common['X-WP-Nonce'] = window.wpApiSettings.nonce;
  }

  _createClass(ModelIO, [{
    key: 'get',
    value: function get(onSuccess, onError) {
      _axios2.default.get(rootRestUrl, {}).then(function (v) {
        if (onSuccess) onSuccess.call(null, v.data);
      }).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }, {
    key: 'getModel',
    value: function getModel(modelId, onSuccess, onError) {
      _axios2.default.get(rootRestUrl + '/' + modelId, {}).then(function (v) {
        if (onSuccess) onSuccess.call(null, v.data);
      }).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }, {
    key: 'remove',
    value: function remove(pageId, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.delete(rootRestUrl + '/' + pageId).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }, {
    key: 'post',
    value: function post(newPage, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.post(rootRestUrl, newPage).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }]);

  return ModelIO;
}();

exports.default = ModelIO;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 MPAT Consortium , All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is free software; you can redistribute it and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * modify it under the terms of the GNU General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * as published by the Free Software Foundation; either version 2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License, or (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * GNU General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You should have received a copy of the GNU Lesser General Public
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * License along with this library. If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Authors:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **/


var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rootRestUrl = window.wpApiSettings.root + 'mpat/v1/option';

var OptionIO = function () {
  function OptionIO() {
    _classCallCheck(this, OptionIO);

    _axios2.default.defaults.headers.common['X-WP-Nonce'] = window.wpApiSettings.nonce;
  }

  _createClass(OptionIO, [{
    key: 'get',
    value: function get(onSuccess, onError) {
      _axios2.default.get(rootRestUrl, {}).then(function (v) {
        if (onSuccess) onSuccess.call(null, v.data);
      }).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log('Error', e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', e.message);
        }
      });
    }
  }, {
    key: 'getModel',
    value: function getModel(modelId, onSuccess, onError) {
      _axios2.default.get(rootRestUrl + '/' + modelId, {}).then(function (v) {
        if (onSuccess) onSuccess.call(null, v.data);
      }).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log('Error', e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', e.message);
        }
      });
    }
  }, {
    key: 'remove',
    value: function remove(pageId, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.delete(rootRestUrl + '/' + pageId).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log('Error', e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', e.message);
        }
      });
    }
  }, {
    key: 'post',
    value: function post(newPage, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.post(rootRestUrl, newPage).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log('Error', e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', e.message);
        }
      });
    }

    // updates an existing page

  }, {
    key: 'put',
    value: function put(pageId, updated, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.put(rootRestUrl + '/' + pageId, updated).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log('Error', e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', e.message);
        }
      });
    }
  }]);

  return OptionIO;
}();

exports.default = OptionIO;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017 MPAT Consortium , All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is free software; you can redistribute it and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * modify it under the terms of the GNU General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * as published by the Free Software Foundation; either version 2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of the License, or (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * GNU General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You should have received a copy of the GNU Lesser General Public
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * License along with this library. If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Authors:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **/


var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * This component loads the page information from within JS using the WP REST API
 * and AJAX
 * This is shared by the components Menu, Clone as well as the Preview window.
 *
  * Author: JC Dufourd, Telecom ParisTech
 */
var pagesRestUrl = '' + window.wpApiSettings.root + window.wpApiSettings.versionString + 'pages';
var restUrl = pagesRestUrl + '?per_page=100';

var PageIO = function () {
  function PageIO() {
    _classCallCheck(this, PageIO);

    _axios2.default.defaults.headers.common['X-WP-Nonce'] = window.wpApiSettings.nonce;
  }

  /*
   * reloads the pages unconditionnaly
   */


  _createClass(PageIO, [{
    key: 'get',
    value: function get(onSuccess, onError) {
      _axios2.default.get(restUrl, {}).then(function (v) {
        if (onSuccess) onSuccess.call(null, v.data);
      }).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }, {
    key: 'getPage',
    value: function getPage(pageId, onSuccess, onError) {
      _axios2.default.get(pagesRestUrl + '/' + pageId, {}).then(function (v) {
        if (onSuccess) onSuccess.call(null, v.data);
      }).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }

    // updates an existing page

  }, {
    key: 'put',
    value: function put(pageId, updated, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.put(pagesRestUrl + '/' + pageId, updated).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }

    // updates an existing page

  }, {
    key: 'remove',
    value: function remove(pageId, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.delete(pagesRestUrl + '/' + pageId).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }

    // creates a new page (e.g. when cloning)

  }, {
    key: 'post',
    value: function post(newPage, onSuccess, onError) {
      // eslint-disable-line
      _axios2.default.post(pagesRestUrl, newPage).then(onSuccess).catch(function (e) {
        if (onError) onError.call(null, e);
        if (e.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(mpatExplorerI18n.error, e.response.status);
          console.log(e.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(mpatExplorerI18n.error, e.message);
        }
      });
    }
  }]);

  return PageIO;
}();

exports.default = PageIO;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.explorerData = explorerData;
exports.userPrompt = userPrompt;
exports.refresh = refresh;
exports.userAlert = userAlert;

var _cloneLayout = __webpack_require__(3);

var _cloneLayout2 = _interopRequireDefault(_cloneLayout);

var _main = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Copyright (c) 2017 MPAT Consortium , All rights reserved.
 * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library. If not, see <http://www.gnu.org/licenses/>.
 *
 * Authors:
 * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
 **/
function explorerData() {
  return window.MPATExplorer; // eslint-disable-line
}

function userPrompt(msg) {
  return window.prompt(msg); // eslint-disable-line
}

function refresh() {
  window.location.href = window.location.href;
}

function userAlert(msg) {
  window.alert(msg); // eslint-disable-line
}

window.onload = function onload() {
  (0, _main.process)(window.MPATExplorer);
  window.cloneLayout = _cloneLayout2.default;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.d3ize = d3ize;
exports.d3process = d3process;
/**
 *
 * Copyright (c) 2017 MPAT Consortium , All rights reserved.
 * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library. If not, see <http://www.gnu.org/licenses/>.
 *
 * Authors:
 * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
 **/
/*
 * take a site info and make it into a D3.js package
 */

function d3ize(wsgraph) {
  var d3g = {
    directed: true,
    multigraph: false,
    graph: {},
    nodes: [],
    links: []
  };
  var outsidelinks = [];
  var outsidelinksindex = [];
  for (var i = 0; i < wsgraph.length; i++) {
    var id = wsgraph[i].id;
    var name = wsgraph[i].title;
    d3g.nodes.push({ id: id, name: name });
  }
  for (var _i = 0; _i < wsgraph.length; _i++) {
    var lnks = wsgraph[_i].links;
    for (var j = 0; j < lnks.length; j++) {
      if (lnks[j].url.indexOf('page://') === 0) {
        (function () {
          var id1 = +lnks[j].url.substring(7);
          var nodeIndex = d3g.nodes.findIndex(function (node) {
            return node.id === id1;
          });
          if (nodeIndex === -1) {
            nodeIndex = d3g.nodes.length;
            d3g.nodes.push({ id: id1, name: 'import_' + id1 });
          }
          d3g.links.push({
            value: lnks[j].type === 'back' ? 2 : 1,
            source: d3g.nodes[_i],
            target: d3g.nodes[nodeIndex]
          });
        })();
      } else {
        var already = outsidelinks.indexOf(lnks[j].url);
        if (already < 0) {
          var olindex = d3g.nodes.length;
          outsidelinks.push(lnks[j].url);
          outsidelinksindex.push(olindex);
          d3g.nodes.push({ id: olindex, name: lnks[j].url, class: 'outside' });
          d3g.links.push({
            value: lnks[j].type === 'back' ? 2 : 1,
            source: d3g.nodes[_i],
            target: d3g.nodes[olindex]
          });
        } else {
          d3g.links.push({
            value: lnks[j].type === 'back' ? 2 : 1,
            source: d3g.nodes[_i],
            target: d3g.nodes[outsidelinksindex[already]]
          });
        }
      }
    }
  }
  return d3g;
}

var theSvgElement = void 0;

/* Constants: */
var plus = 187;
var minus = 189;
var leftArrow = 37; // Key code for the left arrow key.
var upArrow = 38;
var rightArrow = 39;
var downArrow = 40;
var panRate = -50; // Number of pixels to pan per key press.
var zoomRate = 0.8;

function processKeyPress(evt) {
  var viewBox = theSvgElement.getAttribute('viewBox');
  // Grab the object representing the SVG element's viewBox attribute.
  var viewBoxValues = viewBox.split(' ');
  // Create an array and insert each individual view box attribute value (assume they're
  // separated by a single whitespace character).
  /* The array is filled with strings, convert the first two viewBox values to floats: */
  viewBoxValues[0] = parseFloat(viewBoxValues[0]);
  // Represent the x-coordinate on the viewBox attribute.
  viewBoxValues[1] = parseFloat(viewBoxValues[1]);
  // Represent the y coordinate on the viewBox attribute.
  switch (evt.keyCode) {
    case minus:
      var centerX = viewBoxValues[0] + viewBoxValues[2] / 2;
      var centerY = viewBoxValues[1] + viewBoxValues[3] / 2;
      viewBoxValues[2] /= zoomRate;
      viewBoxValues[3] /= zoomRate;
      viewBoxValues[0] = centerX - viewBoxValues[2] / 2;
      viewBoxValues[1] = centerY - viewBoxValues[3] / 2;
      evt.preventDefault();
      break;
    case plus:
      var cX = viewBoxValues[0] + viewBoxValues[2] / 2;
      var cY = viewBoxValues[1] + viewBoxValues[3] / 2;
      viewBoxValues[2] *= zoomRate;
      viewBoxValues[3] *= zoomRate;
      viewBoxValues[0] = cX - viewBoxValues[2] / 2;
      viewBoxValues[1] = cY - viewBoxValues[3] / 2;
      evt.preventDefault();
      break;
    case leftArrow:
      viewBoxValues[0] += panRate;
      // Increase the x-coordinate value of the viewBox attribute by the amount given by panRate.
      evt.preventDefault();
      break;
    case rightArrow:
      viewBoxValues[0] -= panRate;
      // Decrease the x-coordinate value of the viewBox attribute by the amount given by panRate.
      evt.preventDefault();
      break;
    case upArrow:
      viewBoxValues[1] += panRate;
      // Increase the y-coordinate value of the viewBox attribute by the amount given by panRate.
      evt.preventDefault();
      break;
    case downArrow:
      viewBoxValues[1] -= panRate;
      // Decrease the y-coordinate value of the viewBox attribute by the amount given by panRate.
      evt.preventDefault();
      break;
  } // switch
  theSvgElement.setAttribute('viewBox', viewBoxValues.join(' '));
  // Convert the viewBoxValues array into a string with a white
  // space character between the given values.
}

/*
 * create the web site graph from the D3-compatible object
 */
function d3process(d3g) {
  var nodes = d3g.nodes;
  var links = d3g.links;
  var width = 960;
  var height = 800;
  var force = d3.layout.force().nodes(d3.values(nodes)).links(links).size([width, height]).linkDistance(100).charge(-1000).on('tick', tick).start();
  var svg = d3.select('#insertionPoint').append('svg').attr('width', width).attr('height', height).attr('viewBox', '0 0 1000 1000');
  theSvgElement = svg[0][0];
  svg.append('svg:style').text('path { stroke: #666; stroke-width: 1.5px; } ' + 'path.link { fill: none; } ' + 'path.linkb { fill: none; stroke-dasharray: 5, 5; } ' + 'circle { fill: #afa; stroke: #fff; stroke-width: 1.5px; } ' + 'circle.outside { fill: #88F; stroke: #888; stroke-width: 1.5px; } ' + 'text { fill: black; stroke: white; stroke-width: 0.4px; font: 16px sans-serif;' + 'font-weight: 600; pointer-events: none; z-index: 3; } ' + 'svg { border: 3px solid black; }');
  // build the arrow.
  svg.append('svg:defs').selectAll('marker').data(['end']).enter().append('svg:marker').attr('id', String).attr('viewBox', '0 -5 10 10').attr('refX', 15).attr('refY', -1.5).attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto').append('svg:path').attr('d', 'M0,-5L10,0L0,5');
  // add the links and the arrows
  var path = svg.append('svg:g').selectAll('path').data(force.links()).enter().append('svg:path').attr('class', function (d) {
    return d.value === 2 ? 'linkb' : 'link';
  }).attr('marker-end', 'url(#end)');
  // define the nodes
  var node = svg.selectAll('.node').data(force.nodes()).enter().append('g').attr('class', 'node').call(force.drag);
  // add the nodes
  node.append('circle').attr('class', function (d) {
    return d.class;
  }).attr('r', 5);
  // add the text
  node.append('text').attr('x', 12).attr('dy', '.35em').text(function (d) {
    return d.name;
  });
  // add the curvy lines
  function tick() {
    path.attr('d', function u(d) {
      var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
      return 'M' + d.source.x + ',' + d.source.y + 'A' + dr + ',' + dr + ' 0 0,1 ' + d.target.x + ',' + d.target.y;
    });
    node.attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });
  }
  window.addEventListener('keydown', processKeyPress, true);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = components;
exports.media = media;
exports.findLinks = findLinks;
exports.zones = zones;
exports.ident = ident;
/**
 *
 * Copyright (c) 2017 MPAT Consortium , All rights reserved.
 * Fraunhofer FOKUS, Fincons Group, Telecom ParisTech, IRT, Lacaster University, Leadin, RBB, Mediaset
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library. If not, see <http://www.gnu.org/licenses/>.
 *
 * Authors:
 * Jean-Claude Dufourd (jean-claude.dufourd@telecom-paristech.fr)
 **/
/*
 * find the components in a page, for the page table
 */
function components(obj) {
  var res = '';
  for (var a in obj.page.meta.mpat_content.content) {
    //eslint-disable-line
    if (!obj.page.meta.mpat_content.content.hasOwnProperty(a)) continue; //eslint-disable-line
    var x = obj.page.meta.mpat_content.content[a];
    for (var b in x) {
      //eslint-disable-line
      if (!x.hasOwnProperty(b)) continue; //eslint-disable-line
      var y = x[b];
      res += ',';
      res += y.type;
    }
  }
  if (res !== '') {
    res = res.substring(1);
  }
  return res;
}

function lt(u) {
  var i = u.lastIndexOf('/');
  if (i < 0) return u;
  return '<a href=\'' + u + '\'>' + u.substring(i + 1) + '</a>';
}

/*
 * find the media in a page, for the page table
 */
function media(obj) {
  var res = '';
  for (var a in obj.page.meta.mpat_content.content) {
    //eslint-disable-line
    if (!obj.page.meta.mpat_content.content.hasOwnProperty(a)) continue; //eslint-disable-line
    var x = obj.page.meta.mpat_content.content[a];
    for (var b in x) {
      //eslint-disable-line
      if (!x.hasOwnProperty(b)) continue; //eslint-disable-line
      var y = x[b];
      switch (y.type) {
        case 'link':
          if (y.data && y.data.thumbnail) {
            res += ',';
            res += lt(y.data.thumbnail);
          }
          break;
        case 'image':
          if (y.data && y.data.imgUrl) {
            res += ',';
            res += lt(y.data.imgUrl);
          }
          break;
        case 'redbutton':
          if (y.data && y.data.img) {
            res += ',';
            res += lt(y.data.img);
          }
          break;
        case 'video':
          if (y.data && y.data.thumbnail) {
            res += ',';
            res += lt(y.data.thumbnail);
          }
          if (y.data && y.data.url) {
            res += ',';
            res += lt(y.data.url);
          }
          break;
        case 'launcher':
          if (y.data && y.data.listArray) {
            for (var ii = 0; ii < y.data.listArray.length; ii++) {
              var u = y.data.listArray[ii].thumbnail;
              if (u) {
                res += ',';
                res += lt(u);
              }
            }
          }
          break;
        case 'gallery':
          if (y.data && y.data.images) {
            for (var _ii = 0; _ii < y.data.images.length; _ii++) {
              var _u = y.data.images[_ii].attachmentUrl;
              if (_u) {
                res += ',';
                res += lt(_u);
              }
            }
          }
          break;
        default:
          break;
      }
    }
  }
  if (res !== '') {
    res = res.substring(1);
  }
  return res;
}

/*
 * find links in a page object, for the page table
 */
function findLinks(obj) {
  var res = [];
  if (obj.page.post_parent !== 0) {
    res.push({ type: 'back', url: 'page://' + obj.page.post_parent });
  }
  for (var a in obj.page.meta.mpat_content.content) {
    //eslint-disable-line
    if (!obj.page.meta.mpat_content.content.hasOwnProperty(a)) continue; //eslint-disable-line
    var x = obj.page.meta.mpat_content.content[a];
    for (var b in x) {
      //eslint-disable-line
      if (!x.hasOwnProperty(b)) continue; //eslint-disable-line
      var y = x[b];
      switch (y.type) {
        case 'link':
        case 'redbutton':
          if (y.data && y.data.url) {
            res.push({ type: y.type, url: y.data.url });
          }
          break;
        case 'list':
        case 'menu':
        case 'launcher':
          if (y.data && y.data.listArray) {
            for (var ii = 0; ii < y.data.listArray.length; ii++) {
              var u = y.data.listArray[ii].appUrl;
              if (u) {
                res.push({ type: y.type, url: u });
              }
            }
          }
          break;
        default:
          break;
      }
    }
  }
  return res;
}

/*
 * find the zones in a layout, for the layout table
 */
function zones(o) {
  var res = '';
  var zones = o.layout || []; //eslint-disable-line
  for (var i = 0; i < zones.length; i++) {
    var zone = zones[i];
    res += zone.x * 10;
    res += ',';
    res += zone.y * 10;
    res += '+';
    res += zone.w * 10;
    res += 'x';
    res += zone.h * 10;
    if (zone.static) {
      res += '[S]';
    }
    if (i !== zones.length - 1) res += '<br/>';
  }
  return res;
}

function ident(label, obj) {
  switch (label) {
    case 'page':
      return obj.page.post_title;
    case 'page_model':
      return obj.page_model.post_title;
    case 'page_layout':
      return obj.page_layout.post_title;
    case 'custom_css':
      return obj.custom_css.ID;
    default:
      break;
  }
  return '';
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(10);
var Axios = __webpack_require__(21);
var defaults = __webpack_require__(2);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(7);
axios.CancelToken = __webpack_require__(20);
axios.isCancel = __webpack_require__(8);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(35);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(7);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(2);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(22);
var dispatchRequest = __webpack_require__(23);
var isAbsoluteURL = __webpack_require__(31);
var combineURLs = __webpack_require__(29);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(26);
var isCancel = __webpack_require__(8);
var defaults = __webpack_require__(2);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(9);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map