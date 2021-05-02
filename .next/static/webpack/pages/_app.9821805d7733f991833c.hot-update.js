webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/staticData.ts":
/*!***************************!*\
  !*** ./lib/staticData.ts ***!
  \***************************/
/*! exports provided: monthList, dayList, yearList, largeBuildingTypeList, apartmentBuildingTypeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthList", function() { return monthList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayList", function() { return dayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearList", function() { return yearList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largeBuildingTypeList", function() { return largeBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apartmentBuildingTypeList", function() { return apartmentBuildingTypeList; });
var monthList = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]; // 1부터 31까지

var dayList = Array.from(Array(31), function (_, i) {
  return String(i + 1);
}); // 2020부터 1900년까지

var yearList = Array.from(Array(121), function (_, i) {
  return String(2020 - i);
}); // * 숙소 큰 범위의 건물 유형

var largeBuildingTypeList = ["아파트", "주택", "별채", "독측한 숙소", "B&B", "부티크호텔"]; // * 아파트 건물 유형

var apartmentBuildingTypeList = []; // * 주택 건물 유형
// * 별채 건물 유형
// * 독특한 숙소 건물 유형
// * B&B 건물 유형
// * 부티크 호텔 건물 유형

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3N0YXRpY0RhdGEudHMiXSwibmFtZXMiOlsibW9udGhMaXN0IiwiZGF5TGlzdCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiU3RyaW5nIiwieWVhckxpc3QiLCJsYXJnZUJ1aWxkaW5nVHlwZUxpc3QiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsU0FBUyxHQUFHLENBQ3ZCLElBRHVCLEVBRXZCLElBRnVCLEVBR3ZCLElBSHVCLEVBSXZCLElBSnVCLEVBS3ZCLElBTHVCLEVBTXZCLElBTnVCLEVBT3ZCLElBUHVCLEVBUXZCLElBUnVCLEVBU3ZCLElBVHVCLEVBVXZCLEtBVnVCLEVBV3ZCLEtBWHVCLEVBWXZCLEtBWnVCLENBQWxCLEMsQ0FlUDs7QUFDTyxJQUFNQyxPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUMsRUFBRCxDQUFoQixFQUFzQixVQUFDRSxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVQyxNQUFNLENBQUNELENBQUMsR0FBRyxDQUFMLENBQWhCO0FBQUEsQ0FBdEIsQ0FBaEIsQyxDQUVQOztBQUNPLElBQU1FLFFBQVEsR0FBR0wsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQyxHQUFELENBQWhCLEVBQXVCLFVBQUNFLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVVDLE1BQU0sQ0FBQyxPQUFPRCxDQUFSLENBQWhCO0FBQUEsQ0FBdkIsQ0FBakIsQyxDQUVQOztBQUNPLElBQU1HLHFCQUFxQixHQUFDLENBQ2pDLEtBRGlDLEVBRWpDLElBRmlDLEVBR2pDLElBSGlDLEVBSWpDLFFBSmlDLEVBS2pDLEtBTGlDLEVBTWpDLE9BTmlDLENBQTVCLEMsQ0FTUDs7QUFDTyxJQUFNQyx5QkFBeUIsR0FBQyxFQUFoQyxDLENBRVA7QUFFQTtBQUVBO0FBRUE7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjk4MjE4MDVkNzczM2Y5OTE4MzNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbW9udGhMaXN0ID0gW1xyXG4gIFwiMeyblFwiLFxyXG4gIFwiMuyblFwiLFxyXG4gIFwiM+yblFwiLFxyXG4gIFwiNOyblFwiLFxyXG4gIFwiNeyblFwiLFxyXG4gIFwiNuyblFwiLFxyXG4gIFwiN+yblFwiLFxyXG4gIFwiOOyblFwiLFxyXG4gIFwiOeyblFwiLFxyXG4gIFwiMTDsm5RcIixcclxuICBcIjEx7JuUXCIsXHJcbiAgXCIxMuyblFwiXHJcbl07XHJcblxyXG4vLyAx67aA7YSwIDMx6rmM7KeAXHJcbmV4cG9ydCBjb25zdCBkYXlMaXN0ID0gQXJyYXkuZnJvbShBcnJheSgzMSksIChfLCBpKSA9PiBTdHJpbmcoaSArIDEpKTtcclxuXHJcbi8vIDIwMjDrtoDthLAgMTkwMOuFhOq5jOyngFxyXG5leHBvcnQgY29uc3QgeWVhckxpc3QgPSBBcnJheS5mcm9tKEFycmF5KDEyMSksIChfLCBpKSA9PiBTdHJpbmcoMjAyMCAtIGkpKTtcclxuXHJcbi8vICog7IiZ7IaMIO2BsCDrspTsnITsnZgg6rG066y8IOycoO2YlVxyXG5leHBvcnQgY29uc3QgbGFyZ2VCdWlsZGluZ1R5cGVMaXN0PVtcclxuICBcIuyVhO2MjO2KuFwiLFxyXG4gIFwi7KO87YOdXCIsXHJcbiAgXCLrs4TssYRcIixcclxuICBcIuuPhey4oe2VnCDsiJnshoxcIixcclxuICBcIkImQlwiLFxyXG4gIFwi67aA7Yuw7YGs7Zi47YWUXCIsXHJcbl07XHJcblxyXG4vLyAqIOyVhO2MjO2KuCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0PVtdO1xyXG5cclxuLy8gKiDso7ztg50g6rG066y8IOycoO2YlVxyXG5cclxuLy8gKiDrs4TssYQg6rG066y8IOycoO2YlVxyXG5cclxuLy8gKiDrj4XtirntlZwg7IiZ7IaMIOqxtOusvCDsnKDtmJVcclxuXHJcbi8vICogQiZCIOqxtOusvCDsnKDtmJVcclxuXHJcbi8vICog67aA7Yuw7YGsIO2YuO2FlCDqsbTrrLwg7Jyg7ZiVIl0sInNvdXJjZVJvb3QiOiIifQ==