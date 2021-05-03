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
  reducers: {}
}); // * 건물 유형 변경하기. 338 page
//setBuildingType(state, action:PayloadAction<string>){
//    if(action.payload===""){
//        StaticRange.buildingType=null;
//    }  
//},
// * 숙소 유형 변경하기. 348 page
//setRoomdingType(state, action:PayloadAction<"entire" | "private" | "public">){
//    state.roomType = action.payload;
//    return state;
//},
// * '게스트용 숙소인지' 변경하기

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJyZWdpc3RlclJvb20iLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBV0E7QUFDQSxJQUFNQSxZQUErQixHQUFHO0FBQ3BDQyxtQkFBaUIsRUFBRSxJQURpQjtBQUNKO0FBQ2hDQyxjQUFZLEVBQUMsSUFGdUI7QUFFSjtBQUNoQ0MsVUFBUSxFQUFFLElBSDBCO0FBR0o7QUFDaENDLGlCQUFlLEVBQUMsSUFKb0IsQ0FJSjs7QUFKSSxDQUF4QztBQU9BLElBQU1DLFlBQVksR0FBR0Msb0VBQVcsQ0FBQztBQUM3QkMsTUFBSSxFQUFDLGNBRHdCO0FBRTdCUCxjQUFZLEVBQVpBLFlBRjZCO0FBRzdCUSxVQUFRLEVBQUM7QUFIb0IsQ0FBRCxDQUFoQyxDLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdPLElBQU1DLG1CQUFtQixxQkFBS0osWUFBWSxDQUFDSyxPQUFsQixDQUF6QjtBQUVRTCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjgyNGE0ZThmNjUwMTBhOGMxYTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNsaWNlfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCB9IGZyb20gXCIuLi9saWIvc3RhdGljRGF0YVwiO1xyXG5cclxuXHJcbnR5cGUgUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJvb21UeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgaXNTZXRVcEZvckd1ZXN0OiBib29sZWFuIHwgbnVsbDtcclxufTtcclxuXHJcbi8vICog7LSI6riw7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogbnVsbCwgICAgICAgIC8vICog6rG066y8IOycoO2YlSDtgbAg67KU7KO8XHJcbiAgICBidWlsZGluZ1R5cGU6bnVsbCwgICAgICAgICAgICAgIC8vICog6rG066y8IOycoO2YlVxyXG4gICAgcm9vbVR5cGU6IG51bGwsICAgICAgICAgICAgICAgICAvLyAqIOyImeyGjCDsnKDtmJVcclxuICAgIGlzU2V0VXBGb3JHdWVzdDpudWxsLCAgICAgICAgICAgLy8gKiDqsozsiqTtirjrp4zsnYQg7JyE7ZW0IOunjOuTpOyWtOynhCDsiJnshozsnbjqsIA/XHJcbn07XHJcblxyXG5jb25zdCByZWdpc3RlclJvb20gPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOlwicmVnaXN0ZXJSb29tXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczp7fSxcclxufSk7XHJcblxyXG4vLyAqIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwLiAzMzggcGFnZVxyXG4vL3NldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248c3RyaW5nPil7XHJcbi8vICAgIGlmKGFjdGlvbi5wYXlsb2FkPT09XCJcIil7XHJcbi8vICAgICAgICBTdGF0aWNSYW5nZS5idWlsZGluZ1R5cGU9bnVsbDtcclxuLy8gICAgfSAgXHJcbi8vfSxcclxuXHJcbi8vICog7IiZ7IaMIOycoO2YlSDrs4Dqsr3tlZjquLAuIDM0OCBwYWdlXHJcbi8vc2V0Um9vbWRpbmdUeXBlKHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxcImVudGlyZVwiIHwgXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiPil7XHJcbi8vICAgIHN0YXRlLnJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbi8vICAgIHJldHVybiBzdGF0ZTtcclxuLy99LFxyXG5cclxuLy8gKiAn6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCcg67OA6rK97ZWY6riwXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm9vbUFjdGlvbnM9ey4uLnJlZ2lzdGVyUm9vbS5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyUm9vbTsiXSwic291cmNlUm9vdCI6IiJ9