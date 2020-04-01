module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Head/index.jsx":
/*!******************************************!*\
  !*** ./components/common/Head/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anderskillander/WebDev/HyperProjects/Data-Interaction/StoryBlok-Portfolio/components/common/Head/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* This is the html <header> element which you'll need
your site to have to comply with web standards.
This is NOT a visual header */

const Head = ({
  title,
  description
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("meta", {
  charSet: "UTF-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, title || ''), __jsx("meta", {
  name: "description",
  content: description || '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, inititial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Poppins&display=swap",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("link", {
  rel: "shortcut icon",
  type: "image/x-icon",
  href: "/favicon.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/layouts/DefaultLayout/index.js":
/*!***************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/layouts/DefaultLayout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleReset.scss */ "./components/layouts/DefaultLayout/styleReset.scss");
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styleReset_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Head */ "./components/common/Head/index.jsx");
var _jsxFileName = "/Users/anderskillander/WebDev/HyperProjects/Data-Interaction/StoryBlok-Portfolio/components/layouts/DefaultLayout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


/* components */



const DefaultLayout = props => {
  const title = 'Hyper Island FED21';
  const description = 'Kick-off template for FED21 students';
  return __jsx("div", {
    className: (_styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default.a, _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pageWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_common_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    description: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/layouts/DefaultLayout/index.scss":
/*!*****************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___3GKdN",
	"pageWrapper": "pageWrapper___14rma"
};

/***/ }),

/***/ "./components/layouts/DefaultLayout/styleReset.scss":
/*!**********************************************************!*\
  !*** ./components/layouts/DefaultLayout/styleReset.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/modules/ImageModule/index.jsx":
/*!**************************************************!*\
  !*** ./components/modules/ImageModule/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/ImageModule/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anderskillander/WebDev/HyperProjects/Data-Interaction/StoryBlok-Portfolio/components/modules/ImageModule/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


const ImageModule = ({
  image,
  copy
}) => {
  return __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("img", {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, copy));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageModule);

/***/ }),

/***/ "./components/modules/ImageModule/index.scss":
/*!***************************************************!*\
  !*** ./components/modules/ImageModule/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___14P1J"
};

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modules/ImageModule */ "./components/modules/ImageModule/index.jsx");
var _jsxFileName = "/Users/anderskillander/WebDev/HyperProjects/Data-Interaction/StoryBlok-Portfolio/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function fetchUrl(url) {
  return fetch(url).then(r => r.json());
}

const AboutPage = ({
  data
}) => {
  const {
    content
  } = data;
  const imageModuleData = content.body.find(item => item.component == 'Image Module');
  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "About Page"), imageModuleData ? __jsx(_components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_2__["default"], {
    copy: imageModuleData.copy,
    image: imageModuleData.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }) : null);
};

AboutPage.getInitialProps = async ({
  query
}) => {
  /* {query} is an object we receive within this method from Next,
    so that we can retrieve the slug (e.g. '/welcome') coming with the route */
  const {
    page
  } = query;
  /* Calling our internal api endpoint so that we can fetch Storyblok content
    server-side (we are on client-side here) */

  const data = await fetchUrl(`http://localhost:3000/api/page/about`);
  /* Returning the data back into SlugPage as props */

  return {
    data
  };
  /* This is the same as { data: data } */
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anderskillander/WebDev/HyperProjects/Data-Interaction/StoryBlok-Portfolio/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map