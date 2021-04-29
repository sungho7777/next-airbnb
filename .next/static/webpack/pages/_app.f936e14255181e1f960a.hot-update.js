webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth */ "./store/auth.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  common: _common__WEBPACK_IMPORTED_MODULE_5__["default"].reducer,
  user: _user__WEBPACK_IMPORTED_MODULE_4__["default"].reducer,
  auth: _auth__WEBPACK_IMPORTED_MODULE_6__["default"].reducer
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXgudHMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJjb21tb24iLCJyZWR1Y2VyIiwidXNlciIsImF1dGgiLCJpbml0aWFsUm9vdFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VTZWxlY3RvciIsInVzZVJlZHV4U2VsZWN0b3IiLCJpbml0U3RvcmUiLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiZGV2VG9vbHMiLCJnZXRTdGF0ZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0Msd0VBQWUsQ0FBQztBQUNoQ0MsUUFBTSxFQUFFQSwrQ0FBTSxDQUFDQyxPQURpQjtBQUVoQ0MsTUFBSSxFQUFFQSw2Q0FBSSxDQUFDRCxPQUZxQjtBQUdoQ0UsTUFBSSxFQUFFQSw2Q0FBSSxDQUFDRjtBQUhxQixDQUFELENBQW5DLEMsQ0FNQTs7QUFHQSxJQUFJRyxnQkFBSjs7QUFFQSxJQUFNSCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDSSxLQUFELEVBQVlDLE1BQVosRUFBeUI7QUFDckMsTUFBR0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCQywwREFBbkIsRUFBMkI7QUFDdkIsUUFBSUgsS0FBSyxLQUFLRCxnQkFBZCxFQUFnQztBQUM1Qiw2Q0FDR0MsS0FESCxHQUVHQyxNQUFNLENBQUNHLE9BRlY7QUFJSDs7QUFDRCxXQUFPSixLQUFQO0FBQ0g7O0FBQ0QsU0FBT1AsV0FBVyxDQUFDTyxLQUFELEVBQVFDLE1BQVIsQ0FBbEI7QUFDSCxDQVhELEMsQ0FhQTs7O0FBQ08sSUFBTUksV0FBMkMsR0FBR0MsdURBQXBEOztBQUVQLElBQU1DLFNBQW1CLEdBQUMsU0FBcEJBLFNBQW9CLEdBQUk7QUFDMUIsTUFBTUMsS0FBSyxHQUFHQyx1RUFBYyxDQUFDO0FBQ3pCYixXQUFPLEVBQVBBLE9BRHlCO0FBRXpCYyxZQUFRLEVBQUM7QUFGZ0IsR0FBRCxDQUE1QjtBQUlBWCxrQkFBZ0IsR0FBR1MsS0FBSyxDQUFDRyxRQUFOLEVBQW5CO0FBQ0EsU0FBT0gsS0FBUDtBQUNILENBUEQ7O0FBU08sSUFBTUksT0FBTyxHQUFHQyx3RUFBYSxDQUFDTixTQUFELENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjkzNmUxNDI1NTE4MWUxZjk2MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIsIE1ha2VTdG9yZSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7XHJcbiAgVHlwZWRVc2VTZWxlY3Rvckhvb2ssXHJcbiAgdXNlU2VsZWN0b3IgYXMgdXNlUmVkdXhTZWxlY3RvcixcclxufSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi9hdXRoXCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb21tb246IGNvbW1vbi5yZWR1Y2VyLFxyXG4gICAgdXNlcjogdXNlci5yZWR1Y2VyLFxyXG4gICAgYXV0aDogYXV0aC5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vICog7Iqk7Yag7Ja0IO2DgOyehVxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XHJcblxyXG5sZXQgaW5pdGlhbFJvb3RTdGF0ZTogUm9vdFN0YXRlO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTphbnksIGFjdGlvbjphbnkpPT57XHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gSFlEUkFURSl7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBpbml0aWFsUm9vdFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb3RSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG59O1xyXG5cclxuLy8gKiDtg4DsnoUg7KeA7JuQ65CY64qUIOy7pOyKpO2FgCB1c2VTZWxlY3RvciDrp4zrk6TquLBcclxuZXhwb3J0IGNvbnN0IHVzZVNlbGVjdG9yOlR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VSZWR1eFNlbGVjdG9yO1xyXG5cclxuY29uc3QgaW5pdFN0b3JlOk1ha2VTdG9yZT0oKT0+e1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICAgICAgcmVkdWNlcixcclxuICAgICAgICBkZXZUb29sczp0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBpbml0aWFsUm9vdFN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpOyJdLCJzb3VyY2VSb290IjoiIn0=