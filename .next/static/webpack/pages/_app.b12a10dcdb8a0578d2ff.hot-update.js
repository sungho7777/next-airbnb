webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/registerRoom.ts":
/*!*******************************!*\
  !*** ./store/registerRoom.ts ***!
  \*******************************/
/*! exports provided: registerRoomActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoomActions", function() { return registerRoomActions; });
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


// * 초기상태
var initialState = {
  largeBuildingType: null,
  // * 건물 유형 큰 범주
  buildingType: null,
  // * 건물 유형
  roomType: null,
  // * 숙소 유형
  isSetUpForGuest: null // * 게스트만을 위해 만들어진 숙소인가?

};
var registerRoom = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: "registerRoom",
  initialState: initialState,
  reducers: {
    // 큰 건물 유형 변경하기
    setLargeBuildingType: function setLargeBuildingType(state, action) {
      if (action.payload === "") {
        state.largeBuildingType = null;
      }

      state.largeBuildingType = action.payload;
      return state;
    },
    // * 건물 유형 변경하기.
    setBuildingType: function setBuildingType(state, action) {
      if (action.payload === "") {
        state.buildingType = null;
      }

      state.buildingType = action.payload;
      return state;
    }
  }
}); // * 숙소 유형 변경하기. 348 page
//setRoomdingType(state, action:PayloadAction<"entire" | "private" | "public">){
//    state.roomType = action.payload;
//    return state;
//},
// * '게스트용 숙소인지' 변경하기
//setIsSetUpForGuest(state, action:PayloadAction<boolean>){
//    state.isSetUpForGuest = action.payload;
//    return state;
//},

var registerRoomActions = _objectSpread({}, registerRoom.actions);
/* harmony default export */ __webpack_exports__["default"] = (registerRoom);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJyZWdpc3RlclJvb20iLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0QnVpbGRpbmdUeXBlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXQTtBQUNBLElBQU1BLFlBQStCLEdBQUc7QUFDcENDLG1CQUFpQixFQUFFLElBRGlCO0FBQ0o7QUFDaENDLGNBQVksRUFBQyxJQUZ1QjtBQUVKO0FBQ2hDQyxVQUFRLEVBQUUsSUFIMEI7QUFHSjtBQUNoQ0MsaUJBQWUsRUFBQyxJQUpvQixDQUlKOztBQUpJLENBQXhDO0FBT0EsSUFBTUMsWUFBWSxHQUFHQyxvRUFBVyxDQUFDO0FBQzdCQyxNQUFJLEVBQUMsY0FEd0I7QUFFN0JQLGNBQVksRUFBWkEsWUFGNkI7QUFHN0JRLFVBQVEsRUFBQztBQUNMO0FBQ0FDLHdCQUZLLGdDQUVnQkMsS0FGaEIsRUFFdUJDLE1BRnZCLEVBRXNEO0FBQ3pELFVBQUdBLE1BQU0sQ0FBQ0MsT0FBUCxLQUFtQixFQUF0QixFQUEwQjtBQUN4QkYsYUFBSyxDQUFDVCxpQkFBTixHQUEwQixJQUExQjtBQUNEOztBQUNEUyxXQUFLLENBQUNULGlCQUFOLEdBQTBCVSxNQUFNLENBQUNDLE9BQWpDO0FBQ0EsYUFBT0YsS0FBUDtBQUNELEtBUkk7QUFTTDtBQUNBRyxtQkFWSywyQkFVV0gsS0FWWCxFQVVrQkMsTUFWbEIsRUFVK0M7QUFDaEQsVUFBR0EsTUFBTSxDQUFDQyxPQUFQLEtBQWlCLEVBQXBCLEVBQXVCO0FBQ25CRixhQUFLLENBQUNSLFlBQU4sR0FBbUIsSUFBbkI7QUFDSDs7QUFDRFEsV0FBSyxDQUFDUixZQUFOLEdBQXFCUyxNQUFNLENBQUNDLE9BQTVCO0FBQ0EsYUFBT0YsS0FBUDtBQUNIO0FBaEJJO0FBSG9CLENBQUQsQ0FBaEMsQyxDQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNSSxtQkFBbUIscUJBQUtULFlBQVksQ0FBQ1UsT0FBbEIsQ0FBekI7QUFFUVYsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMTJhMTBkY2RiOGEwNTc4ZDJmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcblxyXG5cclxudHlwZSBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcm9vbVR5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6IGJvb2xlYW4gfCBudWxsO1xyXG59O1xyXG5cclxuLy8gKiDstIjquLDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBudWxsLCAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVIO2BsCDrspTso7xcclxuICAgIGJ1aWxkaW5nVHlwZTpudWxsLCAgICAgICAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVXHJcbiAgICByb29tVHlwZTogbnVsbCwgICAgICAgICAgICAgICAgIC8vICog7IiZ7IaMIOycoO2YlVxyXG4gICAgaXNTZXRVcEZvckd1ZXN0Om51bGwsICAgICAgICAgICAvLyAqIOqyjOyKpO2KuOunjOydhCDsnITtlbQg66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgD9cclxufTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyUm9vbSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6XCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICAvLyDtgbAg6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXJnZUJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248c3RyaW5nPil7XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkPT09XCJcIil7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGU9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuLy8gKiDsiJnshowg7Jyg7ZiVIOuzgOqyve2VmOq4sC4gMzQ4IHBhZ2VcclxuLy9zZXRSb29tZGluZ1R5cGUoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCI+KXtcclxuLy8gICAgc3RhdGUucm9vbVR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuLy8gICAgcmV0dXJuIHN0YXRlO1xyXG4vL30sXHJcblxyXG4vLyAqICfqsozsiqTtirjsmqkg7IiZ7IaM7J247KeAJyDrs4Dqsr3tlZjquLBcclxuLy9zZXRJc1NldFVwRm9yR3Vlc3Qoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KXtcclxuLy8gICAgc3RhdGUuaXNTZXRVcEZvckd1ZXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbi8vICAgIHJldHVybiBzdGF0ZTtcclxuLy99LFxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm9vbUFjdGlvbnM9ey4uLnJlZ2lzdGVyUm9vbS5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyUm9vbTsiXSwic291cmNlUm9vdCI6IiJ9