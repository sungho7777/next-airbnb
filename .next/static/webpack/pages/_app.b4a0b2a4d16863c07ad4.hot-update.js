webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/staticData.ts":
/*!***************************!*\
  !*** ./lib/staticData.ts ***!
  \***************************/
/*! exports provided: monthList, dayList, yearList, largeBuildingTypeList, apartmentBuildingTypeList, houstBuildingTypeList, secondaryUnitBuildingTypeList, uniqueSpaceBuildingTypeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthList", function() { return monthList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayList", function() { return dayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearList", function() { return yearList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largeBuildingTypeList", function() { return largeBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apartmentBuildingTypeList", function() { return apartmentBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "houstBuildingTypeList", function() { return houstBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryUnitBuildingTypeList", function() { return secondaryUnitBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueSpaceBuildingTypeList", function() { return uniqueSpaceBuildingTypeList; });
var monthList = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]; // 1부터 31까지

var dayList = Array.from(Array(31), function (_, i) {
  return String(i + 1);
}); // 2020부터 1900년까지

var yearList = Array.from(Array(121), function (_, i) {
  return String(2020 - i);
}); // * 숙소 큰 범위의 건물 유형

var largeBuildingTypeList = ["아파트", "주택", "별채", "독측한 숙소", "B&B", "부티크호텔"]; // * 아파트 건물 유형

var apartmentBuildingTypeList = []; // * 주택 건물 유형

var houstBuildingTypeList = []; // * 별채 건물 유형

var secondaryUnitBuildingTypeList = []; // * 독특한 숙소 건물 유형

var uniqueSpaceBuildingTypeList = []; // * B&B 건물 유형
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3N0YXRpY0RhdGEudHMiXSwibmFtZXMiOlsibW9udGhMaXN0IiwiZGF5TGlzdCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiU3RyaW5nIiwieWVhckxpc3QiLCJsYXJnZUJ1aWxkaW5nVHlwZUxpc3QiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxTQUFTLEdBQUcsQ0FDdkIsSUFEdUIsRUFFdkIsSUFGdUIsRUFHdkIsSUFIdUIsRUFJdkIsSUFKdUIsRUFLdkIsSUFMdUIsRUFNdkIsSUFOdUIsRUFPdkIsSUFQdUIsRUFRdkIsSUFSdUIsRUFTdkIsSUFUdUIsRUFVdkIsS0FWdUIsRUFXdkIsS0FYdUIsRUFZdkIsS0FadUIsQ0FBbEIsQyxDQWVQOztBQUNPLElBQU1DLE9BQU8sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQyxFQUFELENBQWhCLEVBQXNCLFVBQUNFLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVVDLE1BQU0sQ0FBQ0QsQ0FBQyxHQUFHLENBQUwsQ0FBaEI7QUFBQSxDQUF0QixDQUFoQixDLENBRVA7O0FBQ08sSUFBTUUsUUFBUSxHQUFHTCxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDLEdBQUQsQ0FBaEIsRUFBdUIsVUFBQ0UsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVUMsTUFBTSxDQUFDLE9BQU9ELENBQVIsQ0FBaEI7QUFBQSxDQUF2QixDQUFqQixDLENBRVA7O0FBQ08sSUFBTUcscUJBQXFCLEdBQUMsQ0FDakMsS0FEaUMsRUFFakMsSUFGaUMsRUFHakMsSUFIaUMsRUFJakMsUUFKaUMsRUFLakMsS0FMaUMsRUFNakMsT0FOaUMsQ0FBNUIsQyxDQVNQOztBQUNPLElBQU1DLHlCQUF5QixHQUFDLEVBQWhDLEMsQ0FFUDs7QUFDTyxJQUFNQyxxQkFBcUIsR0FBQyxFQUE1QixDLENBRVA7O0FBQ08sSUFBTUMsNkJBQTZCLEdBQUMsRUFBcEMsQyxDQUVQOztBQUNPLElBQU1DLDJCQUEyQixHQUFDLEVBQWxDLEMsQ0FFUDtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjRhMGIyYTRkMTY4NjNjMDdhZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtb250aExpc3QgPSBbXHJcbiAgXCIx7JuUXCIsXHJcbiAgXCIy7JuUXCIsXHJcbiAgXCIz7JuUXCIsXHJcbiAgXCI07JuUXCIsXHJcbiAgXCI17JuUXCIsXHJcbiAgXCI27JuUXCIsXHJcbiAgXCI37JuUXCIsXHJcbiAgXCI47JuUXCIsXHJcbiAgXCI57JuUXCIsXHJcbiAgXCIxMOyblFwiLFxyXG4gIFwiMTHsm5RcIixcclxuICBcIjEy7JuUXCJcclxuXTtcclxuXHJcbi8vIDHrtoDthLAgMzHquYzsp4BcclxuZXhwb3J0IGNvbnN0IGRheUxpc3QgPSBBcnJheS5mcm9tKEFycmF5KDMxKSwgKF8sIGkpID0+IFN0cmluZyhpICsgMSkpO1xyXG5cclxuLy8gMjAyMOu2gO2EsCAxOTAw64WE6rmM7KeAXHJcbmV4cG9ydCBjb25zdCB5ZWFyTGlzdCA9IEFycmF5LmZyb20oQXJyYXkoMTIxKSwgKF8sIGkpID0+IFN0cmluZygyMDIwIC0gaSkpO1xyXG5cclxuLy8gKiDsiJnshowg7YGwIOuylOychOydmCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBsYXJnZUJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwi7JWE7YyM7Yq4XCIsXHJcbiAgXCLso7ztg51cIixcclxuICBcIuuzhOyxhFwiLFxyXG4gIFwi64+F7Lih7ZWcIOyImeyGjFwiLFxyXG4gIFwiQiZCXCIsXHJcbiAgXCLrtoDti7DtgaztmLjthZRcIixcclxuXTtcclxuXHJcbi8vICog7JWE7YyM7Yq4IOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3Q9W107XHJcblxyXG4vLyAqIOyjvO2DnSDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBob3VzdEJ1aWxkaW5nVHlwZUxpc3Q9W107XHJcblxyXG4vLyAqIOuzhOyxhCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdD1bXTtcclxuXHJcbi8vICog64+F7Yq57ZWcIOyImeyGjCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3Q9W107XHJcblxyXG4vLyAqIEImQiDqsbTrrLwg7Jyg7ZiVXHJcblxyXG4vLyAqIOu2gO2LsO2BrCDtmLjthZQg6rG066y8IOycoO2YlSJdLCJzb3VyY2VSb290IjoiIn0=