webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/api */ "./lib/api/index.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/user */ "./store/user.ts");






var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\pages\\_app.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var app = function app(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      id: "root-modal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

app.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var _context$ctx$req, _context$ctx$req2;

    var appInitialProps, cookieObject, store, isLogged, _axios$get, data;

    return D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_4___default.a.getInitialProps(context);

          case 2:
            appInitialProps = _context.sent;
            cookieObject = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["cookieStringToObject"])((_context$ctx$req = context.ctx.req) === null || _context$ctx$req === void 0 ? void 0 : _context$ctx$req.headers.cookie);
            store = context.ctx.store;
            isLogged = store.getState().user.isLogged;

            try {
              if (!isLogged && cookieObject.access_token) {
                _lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].defaults.headers.cookie = cookieObject.access_token;
                _axios$get = _lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].get("/api/auth/me"), data = _axios$get.data;
                store.dispatch(_store_user__WEBPACK_IMPORTED_MODULE_10__["userActions"].setLoggedUser(data));
                console.log(data);
              }
            } catch (e) {
              console.log(e);
            }

            console.log((_context$ctx$req2 = context.ctx.req) === null || _context$ctx$req2 === void 0 ? void 0 : _context$ctx$req2.headers.cookie);
            console.log(cookieObject);
            return _context.abrupt("return", _objectSpread({}, appInitialProps));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_7__["wrapper"].withRedux(app));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiYXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsIkFwcCIsImFwcEluaXRpYWxQcm9wcyIsImNvb2tpZU9iamVjdCIsImNvb2tpZVN0cmluZ1RvT2JqZWN0IiwiY3R4IiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsInN0b3JlIiwiaXNMb2dnZWQiLCJnZXRTdGF0ZSIsInVzZXIiLCJhY2Nlc3NfdG9rZW4iLCJheGlvcyIsImRlZmF1bHRzIiwiZ2V0IiwiZGF0YSIsImRpc3BhdGNoIiwidXNlckFjdGlvbnMiLCJzZXRMb2dnZWRVc2VyIiwiY29uc29sZSIsImxvZyIsImUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQXVDO0FBQUEsTUFBckNDLFNBQXFDLFFBQXJDQSxTQUFxQztBQUFBLE1BQTFCQyxTQUEwQixRQUExQkEsU0FBMEI7QUFDakQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFRRCxDQVREOztBQVdBRixHQUFHLENBQUNHLGVBQUo7QUFBQSxtVUFBc0IsaUJBQU9DLE9BQVA7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1VDLCtDQUFHLENBQUNGLGVBQUosQ0FBb0JDLE9BQXBCLENBRFY7O0FBQUE7QUFDZEUsMkJBRGM7QUFFZEMsd0JBRmMsR0FFQ0MsdUVBQW9CLHFCQUFDSixPQUFPLENBQUNLLEdBQVIsQ0FBWUMsR0FBYixxREFBQyxpQkFBaUJDLE9BQWpCLENBQXlCQyxNQUExQixDQUZyQjtBQUdiQyxpQkFIYSxHQUdKVCxPQUFPLENBQUNLLEdBSEosQ0FHYkksS0FIYTtBQUliQyxvQkFKYSxHQUlERCxLQUFLLENBQUNFLFFBQU4sR0FBaUJDLElBSmhCLENBSWJGLFFBSmE7O0FBTXBCLGdCQUFJO0FBQ0Ysa0JBQUksQ0FBQ0EsUUFBRCxJQUFhUCxZQUFZLENBQUNVLFlBQTlCLEVBQTRDO0FBQzFDQyxnRUFBSyxDQUFDQyxRQUFOLENBQWVSLE9BQWYsQ0FBdUJDLE1BQXZCLEdBQWdDTCxZQUFZLENBQUNVLFlBQTdDO0FBRDBDLDZCQUV6QkMsZ0RBQUssQ0FBQ0UsR0FBTixDQUFvQixjQUFwQixDQUZ5QixFQUVsQ0MsSUFGa0MsY0FFbENBLElBRmtDO0FBTzFDUixxQkFBSyxDQUFDUyxRQUFOLENBQWVDLHdEQUFXLENBQUNDLGFBQVosQ0FBMEJILElBQTFCLENBQWY7QUFFQUksdUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0Q7QUFDRixhQVpELENBWUUsT0FBT00sQ0FBUCxFQUFVO0FBQ1ZGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUMsQ0FBWjtBQUNEOztBQUVERixtQkFBTyxDQUFDQyxHQUFSLHNCQUFZdEIsT0FBTyxDQUFDSyxHQUFSLENBQVlDLEdBQXhCLHNEQUFZLGtCQUFpQkMsT0FBakIsQ0FBeUJDLE1BQXJDO0FBQ0FhLG1CQUFPLENBQUNDLEdBQVIsQ0FBWW5CLFlBQVo7QUF2Qm9CLCtEQXdCVEQsZUF4QlM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMkJlc0IsNkdBQU8sQ0FBQ0MsU0FBUixDQUFrQjdCLEdBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNWQxM2NkNTA2MWFjOWMxYTA5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCwge0FwcENvbnRleHQsIEFwcFByb3BzfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0dsb2JhbFN0eWxlc1wiO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IGNvb2tpZVN0cmluZ1RvT2JqZWN0IH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICcuLi9saWIvYXBpJztcclxuaW1wb3J0IHsgbWVBUEkgfSBmcm9tICcuLi9saWIvYXBpL2F1dGgnO1xyXG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL3VzZXInO1xyXG5cclxuY29uc3QgYXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30gOiBBcHBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxkaXYgaWQ9XCJyb290LW1vZGFsXCIgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuYXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBBcHBDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgYXBwSW5pdGlhbFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjb250ZXh0KTtcclxuICBjb25zdCBjb29raWVPYmplY3QgPSBjb29raWVTdHJpbmdUb09iamVjdChjb250ZXh0LmN0eC5yZXE/LmhlYWRlcnMuY29va2llKTtcclxuICBjb25zdCB7c3RvcmV9ID0gY29udGV4dC5jdHg7XHJcbiAgY29uc3Qge2lzTG9nZ2VkfSA9IHN0b3JlLmdldFN0YXRlKCkudXNlcjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmICghaXNMb2dnZWQgJiYgY29va2llT2JqZWN0LmFjY2Vzc190b2tlbikge1xyXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvb2tpZSA9IGNvb2tpZU9iamVjdC5hY2Nlc3NfdG9rZW47XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXhpb3MuZ2V0PFVzZXJUeXBlPihcIi9hcGkvYXV0aC9tZVwiKTtcclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHVzZXJBY3Rpb25zLnNldExvZ2dlZFVzZXIoZGF0YSkpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhjb250ZXh0LmN0eC5yZXE/LmhlYWRlcnMuY29va2llKTtcclxuICBjb25zb2xlLmxvZyhjb29raWVPYmplY3QpO1xyXG4gIHJldHVybiB7Li4uYXBwSW5pdGlhbFByb3BzfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoYXBwKTsiXSwic291cmNlUm9vdCI6IiJ9