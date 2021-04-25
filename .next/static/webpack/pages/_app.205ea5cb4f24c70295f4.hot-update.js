webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/common.ts":
/*!*************************!*\
  !*** ./store/common.ts ***!
  \*************************/
/*! exports provided: commonActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonActions", function() { return commonActions; });
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


//* 초기 상태
var initialState = {
  validateMode: false
};
var common = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: "common",
  initialState: initialState,
  reducers: {
    //* validateMode 변경하기
    setValidateMode: function setValidateMode(state, action) {
      state.validateMode = action.payload;
    }
  }
});
var commonActions = _objectSpread({}, common.actions);
/* harmony default export */ __webpack_exports__["default"] = (common);

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

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! exports provided: useSelector, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./store/user.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "./store/common.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  common: _common__WEBPACK_IMPORTED_MODULE_5__["default"].reducer,
  user: _user__WEBPACK_IMPORTED_MODULE_4__["default"].reducer
}); // * 스토어 타입

var initialRootState;

var reducer = function reducer(state, action) {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]) {
    if (state === initialRootState) {
      return _objectSpread(_objectSpread({}, state), action.payload);
    }

    return state;
  }

  return rootReducer(state, action);
}; // * 타입 지원되는 커스텀 useSelector 만들기


var useSelector = react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"];

var initStore = function initStore() {
  var store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["configureStore"])({
    reducer: reducer,
    devTools: true
  });
  initialRootState = store.getState();
  return store;
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(initStore);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29tbW9uLnRzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ2YWxpZGF0ZU1vZGUiLCJjb21tb24iLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFZhbGlkYXRlTW9kZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImNvbW1vbkFjdGlvbnMiLCJhY3Rpb25zIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1Y2VyIiwidXNlciIsImluaXRpYWxSb290U3RhdGUiLCJ0eXBlIiwiSFlEUkFURSIsInVzZVNlbGVjdG9yIiwidXNlUmVkdXhTZWxlY3RvciIsImluaXRTdG9yZSIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJkZXZUb29scyIsImdldFN0YXRlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBLElBQU1BLFlBQXlCLEdBQUc7QUFDaENDLGNBQVksRUFBRTtBQURrQixDQUFsQztBQUlBLElBQU1DLE1BQU0sR0FBR0Msb0VBQVcsQ0FBQztBQUN6QkMsTUFBSSxFQUFFLFFBRG1CO0FBRXpCSixjQUFZLEVBQVpBLFlBRnlCO0FBR3pCSyxVQUFRLEVBQUU7QUFDUjtBQUNBQyxtQkFGUSwyQkFFUUMsS0FGUixFQUVlQyxNQUZmLEVBRStDO0FBQ3JERCxXQUFLLENBQUNOLFlBQU4sR0FBcUJPLE1BQU0sQ0FBQ0MsT0FBNUI7QUFDRDtBQUpPO0FBSGUsQ0FBRCxDQUExQjtBQVdPLElBQU1DLGFBQWEscUJBQVFSLE1BQU0sQ0FBQ1MsT0FBZixDQUFuQjtBQUVRVCxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQSxJQUFNVSxXQUFXLEdBQUdDLHdFQUFlLENBQUM7QUFDaENYLFFBQU0sRUFBRUEsK0NBQU0sQ0FBQ1ksT0FEaUI7QUFFaENDLE1BQUksRUFBRUEsNkNBQUksQ0FBQ0Q7QUFGcUIsQ0FBRCxDQUFuQyxDLENBS0E7O0FBR0EsSUFBSUUsZ0JBQUo7O0FBRUEsSUFBTUYsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ1AsS0FBRCxFQUFZQyxNQUFaLEVBQXlCO0FBQ3JDLE1BQUdBLE1BQU0sQ0FBQ1MsSUFBUCxLQUFnQkMsMERBQW5CLEVBQTJCO0FBQ3ZCLFFBQUlYLEtBQUssS0FBS1MsZ0JBQWQsRUFBZ0M7QUFDNUIsNkNBQ0dULEtBREgsR0FFR0MsTUFBTSxDQUFDQyxPQUZWO0FBSUg7O0FBQ0QsV0FBT0YsS0FBUDtBQUNIOztBQUNELFNBQU9LLFdBQVcsQ0FBQ0wsS0FBRCxFQUFRQyxNQUFSLENBQWxCO0FBQ0gsQ0FYRCxDLENBYUE7OztBQUNPLElBQU1XLFdBQTJDLEdBQUdDLHVEQUFwRDs7QUFFUCxJQUFNQyxTQUFtQixHQUFDLFNBQXBCQSxTQUFvQixHQUFJO0FBQzFCLE1BQU1DLEtBQUssR0FBR0MsdUVBQWMsQ0FBQztBQUN6QlQsV0FBTyxFQUFQQSxPQUR5QjtBQUV6QlUsWUFBUSxFQUFDO0FBRmdCLEdBQUQsQ0FBNUI7QUFJQVIsa0JBQWdCLEdBQUdNLEtBQUssQ0FBQ0csUUFBTixFQUFuQjtBQUNBLFNBQU9ILEtBQVA7QUFDSCxDQVBEOztBQVNPLElBQU1JLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ04sU0FBRCxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIwNWVhNWNiNGYyNGM3MDI5NWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IENvbW1vblN0YXRlIH0gZnJvbSBcIi4uL3R5cGVzL3JlZHV4U3RhdGVcIjtcclxuXHJcbi8vKiDstIjquLAg7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogQ29tbW9uU3RhdGUgPSB7XHJcbiAgdmFsaWRhdGVNb2RlOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGNvbW1vbiA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImNvbW1vblwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8qIHZhbGlkYXRlTW9kZSDrs4Dqsr3tlZjquLBcclxuICAgIHNldFZhbGlkYXRlTW9kZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSB7XHJcbiAgICAgIHN0YXRlLnZhbGlkYXRlTW9kZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25BY3Rpb25zID0geyAuLi5jb21tb24uYWN0aW9ucyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsImltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIsIE1ha2VTdG9yZSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgVHlwZWRVc2VTZWxlY3Rvckhvb2ssXHJcbiAgdXNlU2VsZWN0b3IgYXMgdXNlUmVkdXhTZWxlY3RvcixcclxufSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY29tbW9uOiBjb21tb24ucmVkdWNlcixcclxuICAgIHVzZXI6IHVzZXIucmVkdWNlcixcclxufSk7XHJcblxyXG4vLyAqIOyKpO2GoOyWtCDtg4DsnoVcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxubGV0IGluaXRpYWxSb290U3RhdGU6IFJvb3RTdGF0ZTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6YW55LCBhY3Rpb246YW55KT0+e1xyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpe1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gaW5pdGlhbFJvb3RTdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgIHJldHVybiByb290UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxufTtcclxuXHJcbi8vICog7YOA7J6FIOyngOybkOuQmOuKlCDsu6TsiqTthYAgdXNlU2VsZWN0b3Ig66eM65Ok6riwXHJcbmV4cG9ydCBjb25zdCB1c2VTZWxlY3RvcjpUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlUmVkdXhTZWxlY3RvcjtcclxuXHJcbmNvbnN0IGluaXRTdG9yZTpNYWtlU3RvcmU9KCk9PntcclxuICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgICAgIHJlZHVjZXIsXHJcbiAgICAgICAgZGV2VG9vbHM6dHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgaW5pdGlhbFJvb3RTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoaW5pdFN0b3JlKTsiXSwic291cmNlUm9vdCI6IiJ9