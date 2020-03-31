webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/modules/HeadlineModule/index.jsx":
/*!*****************************************************!*\
  !*** ./components/modules/HeadlineModule/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/HeadlineModule/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anderskillander/WebDev/HyperProjects/Data-Interaction/StoryBlok-Portfolio/components/modules/HeadlineModule/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


var HeadlineModule = function HeadlineModule(_ref) {
  var title = _ref.title;
  return __jsx("h1", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (HeadlineModule);

/***/ }),

/***/ "./components/modules/ImageModule/index.jsx":
/*!**************************************************!*\
  !*** ./components/modules/ImageModule/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/ImageModule/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anderskillander/WebDev/HyperProjects/Data-Interaction/StoryBlok-Portfolio/components/modules/ImageModule/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


var ImageModule = function ImageModule(_ref) {
  var copy = _ref.copy;
  return __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: copy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageModule);

/***/ }),

/***/ "./components/modules/ParagraphModule/index.jsx":
/*!******************************************************!*\
  !*** ./components/modules/ParagraphModule/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/ParagraphModule/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/anderskillander/WebDev/HyperProjects/Data-Interaction/StoryBlok-Portfolio/components/modules/ParagraphModule/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


var ParagraphModule = function ParagraphModule(_ref) {
  var copy = _ref.copy;
  return __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, copy));
};

/* harmony default export */ __webpack_exports__["default"] = (ParagraphModule);

/***/ }),

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modules/HeadlineModule */ "./components/modules/HeadlineModule/index.jsx");
/* harmony import */ var _components_modules_ParagraphModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modules/ParagraphModule */ "./components/modules/ParagraphModule/index.jsx");
/* harmony import */ var _components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modules/ImageModule */ "./components/modules/ImageModule/index.jsx");

var _jsxFileName = "/Users/anderskillander/WebDev/HyperProjects/Data-Interaction/StoryBlok-Portfolio/pages/blog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* 🌈 This is the client side 🌈*/

/* dependencies */


/* layout */


/* components */




/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */

function fetchUrl(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url).then(function (r) {
    return r.json();
  });
}
/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */


var SlugPage = function SlugPage(_ref) {
  var data = _ref.data;
  var content = data.content;
  var headlineModuleData = content.body.find(function (item) {
    return item.component === "HeadlineModule";
  });
  var paragraphModuleData = content.body.find(function (item) {
    return item.component === "Paragraph Module";
  });
  var imageModuleData = content.body.find(function (item) {
    return item.component === "ImageModule";
  });
  console.log("\uD83C\uDF08 I am getting this content from Storybok");
  console.log(content);
  /* ---- */

  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, headlineModuleData ? __jsx(_components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: headlineModuleData.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }) : null, paragraphModuleData ? __jsx(_components_modules_ParagraphModule__WEBPACK_IMPORTED_MODULE_6__["default"], {
    copy: paragraphModuleData.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }) : null, imageModuleData ? __jsx(_components_modules_ImageModule__WEBPACK_IMPORTED_MODULE_7__["default"], {
    copy: imageModuleData.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }) : null);
};
/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */


SlugPage.getInitialProps = function _callee(_ref2) {
  var query, page, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;

          /* {query} is an object we receive within this method from Next,
            so that we can retrieve the slug (e.g. '/welcome') coming with the route */
          page = query.page;
          /* Calling our internal api endpoint so that we can fetch Storyblok content
            server-side (we are on client-side here) */

          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchUrl("http://localhost:3000/api/page/".concat(page)));

        case 4:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SlugPage);

/***/ })

})
//# sourceMappingURL=blog.js.3d300744ffd3d8084703.hot-update.js.map