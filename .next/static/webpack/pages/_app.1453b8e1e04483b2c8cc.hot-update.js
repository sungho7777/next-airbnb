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

    var appInitialProps, cookieObject, store, isLogged, _yield$axios$get, data;

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
            _context.prev = 6;

            if (!(!isLogged && cookieObject.access_token)) {
              _context.next = 15;
              break;
            }

            _lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].defaults.headers.cookie = cookieObject.access_token; //const { data } = await meAPI();

            _context.next = 11;
            return _lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].get("/api/auth/me");

          case 11:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            //export const meAPI = () => axios.get<UserType>("/api/auth/me");
            store.dispatch(_store_user__WEBPACK_IMPORTED_MODULE_10__["userActions"].setLoggedUser(data));
            console.log(data);

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](6);
            console.log(_context.t0);

          case 20:
            console.log((_context$ctx$req2 = context.ctx.req) === null || _context$ctx$req2 === void 0 ? void 0 : _context$ctx$req2.headers.cookie);
            console.log(cookieObject);
            return _context.abrupt("return", _objectSpread({}, appInitialProps));

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 17]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiYXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsIkFwcCIsImFwcEluaXRpYWxQcm9wcyIsImNvb2tpZU9iamVjdCIsImNvb2tpZVN0cmluZ1RvT2JqZWN0IiwiY3R4IiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsInN0b3JlIiwiaXNMb2dnZWQiLCJnZXRTdGF0ZSIsInVzZXIiLCJhY2Nlc3NfdG9rZW4iLCJheGlvcyIsImRlZmF1bHRzIiwiZ2V0IiwiZGF0YSIsImRpc3BhdGNoIiwidXNlckFjdGlvbnMiLCJzZXRMb2dnZWRVc2VyIiwiY29uc29sZSIsImxvZyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBdUM7QUFBQSxNQUFyQ0MsU0FBcUMsUUFBckNBLFNBQXFDO0FBQUEsTUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUNqRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQVFELENBVEQ7O0FBV0FGLEdBQUcsQ0FBQ0csZUFBSjtBQUFBLG1VQUFzQixpQkFBT0MsT0FBUDtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVUMsK0NBQUcsQ0FBQ0YsZUFBSixDQUFvQkMsT0FBcEIsQ0FEVjs7QUFBQTtBQUNkRSwyQkFEYztBQUVkQyx3QkFGYyxHQUVDQyx1RUFBb0IscUJBQUNKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZQyxHQUFiLHFEQUFDLGlCQUFpQkMsT0FBakIsQ0FBeUJDLE1BQTFCLENBRnJCO0FBR2JDLGlCQUhhLEdBR0pULE9BQU8sQ0FBQ0ssR0FISixDQUdiSSxLQUhhO0FBSWJDLG9CQUphLEdBSURELEtBQUssQ0FBQ0UsUUFBTixHQUFpQkMsSUFKaEIsQ0FJYkYsUUFKYTtBQUFBOztBQUFBLGtCQU9kLENBQUNBLFFBQUQsSUFBYVAsWUFBWSxDQUFDVSxZQVBaO0FBQUE7QUFBQTtBQUFBOztBQVFoQkMsNERBQUssQ0FBQ0MsUUFBTixDQUFlUixPQUFmLENBQXVCQyxNQUF2QixHQUFnQ0wsWUFBWSxDQUFDVSxZQUE3QyxDQVJnQixDQVNoQjs7QUFUZ0I7QUFBQSxtQkFVUUMsZ0RBQUssQ0FBQ0UsR0FBTixDQUFVLGNBQVYsQ0FWUjs7QUFBQTtBQUFBO0FBVVJDLGdCQVZRLG9CQVVSQSxJQVZRO0FBYWhCO0FBQ0FSLGlCQUFLLENBQUNTLFFBQU4sQ0FBZUMsd0RBQVcsQ0FBQ0MsYUFBWixDQUEwQkgsSUFBMUIsQ0FBZjtBQUVBSSxtQkFBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7O0FBaEJnQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJsQkksbUJBQU8sQ0FBQ0MsR0FBUjs7QUFuQmtCO0FBc0JwQkQsbUJBQU8sQ0FBQ0MsR0FBUixzQkFBWXRCLE9BQU8sQ0FBQ0ssR0FBUixDQUFZQyxHQUF4QixzREFBWSxrQkFBaUJDLE9BQWpCLENBQXlCQyxNQUFyQztBQUNBYSxtQkFBTyxDQUFDQyxHQUFSLENBQVluQixZQUFaO0FBdkJvQiwrREF3QlRELGVBeEJTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTJCZXFCLDZHQUFPLENBQUNDLFNBQVIsQ0FBa0I1QixHQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTQ1M2I4ZTFlMDQ0ODNiMmM4Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHtBcHBDb250ZXh0LCBBcHBQcm9wc30gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9HbG9iYWxTdHlsZXNcIjtcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBjb29raWVTdHJpbmdUb09iamVjdCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vbGliL2FwaSc7XHJcbmltcG9ydCB7IG1lQVBJIH0gZnJvbSAnLi4vbGliL2FwaS9hdXRoJztcclxuaW1wb3J0IHsgdXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS91c2VyJztcclxuXHJcbmNvbnN0IGFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9IDogQXBwUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8ZGl2IGlkPVwicm9vdC1tb2RhbFwiIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dDogQXBwQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGFwcEluaXRpYWxQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY29udGV4dCk7XHJcbiAgY29uc3QgY29va2llT2JqZWN0ID0gY29va2llU3RyaW5nVG9PYmplY3QoY29udGV4dC5jdHgucmVxPy5oZWFkZXJzLmNvb2tpZSk7XHJcbiAgY29uc3Qge3N0b3JlfSA9IGNvbnRleHQuY3R4O1xyXG4gIGNvbnN0IHtpc0xvZ2dlZH0gPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWlzTG9nZ2VkICYmIGNvb2tpZU9iamVjdC5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb29raWUgPSBjb29raWVPYmplY3QuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAvL2NvbnN0IHsgZGF0YSB9ID0gYXdhaXQgbWVBUEkoKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSAgYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9hdXRoL21lXCIpO1xyXG5cclxuICAgICAgXHJcbiAgICAgIC8vZXhwb3J0IGNvbnN0IG1lQVBJID0gKCkgPT4gYXhpb3MuZ2V0PFVzZXJUeXBlPihcIi9hcGkvYXV0aC9tZVwiKTtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2godXNlckFjdGlvbnMuc2V0TG9nZ2VkVXNlcihkYXRhKSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGNvbnRleHQuY3R4LnJlcT8uaGVhZGVycy5jb29raWUpO1xyXG4gIGNvbnNvbGUubG9nKGNvb2tpZU9iamVjdCk7XHJcbiAgcmV0dXJuIHsuLi5hcHBJbml0aWFsUHJvcHN9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChhcHApOyJdLCJzb3VyY2VSb290IjoiIn0=