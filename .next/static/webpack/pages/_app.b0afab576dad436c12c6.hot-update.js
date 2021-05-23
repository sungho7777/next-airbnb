webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! exports provided: cookieStringToObject, getNumber, makeMoneyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookieStringToObject", function() { return cookieStringToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumber", function() { return getNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMoneyString", function() { return makeMoneyString; });
//* "token=value" 를 {token:"value"}로 바꾸는 함수
var cookieStringToObject = function cookieStringToObject(cookieString) {
  var cookies = {};

  if (cookieString) {
    //* "token=value"
    var itemString = cookieString === null || cookieString === void 0 ? void 0 : cookieString.split(/\s*;\s*/);
    itemString.forEach(function (pairs) {
      //* ["token","value"]
      var pair = pairs.split(/\s*=\s*/);
      cookies[pair[0]] = pair.splice(1).join("=");
    });
  }

  return cookies;
}; //*string에서 number만 return 하는 함수

var getNumber = function getNumber(string) {
  var _string$match;

  var numbers = (_string$match = string.match(/\d/g)) === null || _string$match === void 0 ? void 0 : _string$match.join("");

  if (numbers) {
    return Number(numbers);
  }

  return null;
}; //* 금액을 입력하면 금액에 ,를 넣어주는 함수

var makeMoneyString = function makeMoneyString(input) {
  var amountString = input.replace(/[^0-9]/g, "");

  if (amountString) {
    return parseInt(amountString, 10).toLocaleString();
  }

  return "";
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbImNvb2tpZVN0cmluZ1RvT2JqZWN0IiwiY29va2llU3RyaW5nIiwiY29va2llcyIsIml0ZW1TdHJpbmciLCJzcGxpdCIsImZvckVhY2giLCJwYWlycyIsInBhaXIiLCJzcGxpY2UiLCJqb2luIiwiZ2V0TnVtYmVyIiwic3RyaW5nIiwibnVtYmVycyIsIm1hdGNoIiwiTnVtYmVyIiwibWFrZU1vbmV5U3RyaW5nIiwiaW5wdXQiLCJhbW91bnRTdHJpbmciLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJ0b0xvY2FsZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLFlBQUQsRUFBc0M7QUFDdEUsTUFBTUMsT0FBa0MsR0FBRyxFQUEzQzs7QUFDQSxNQUFJRCxZQUFKLEVBQWtCO0FBQ2hCO0FBQ0EsUUFBTUUsVUFBVSxHQUFHRixZQUFILGFBQUdBLFlBQUgsdUJBQUdBLFlBQVksQ0FBRUcsS0FBZCxDQUFvQixTQUFwQixDQUFuQjtBQUNBRCxjQUFVLENBQUNFLE9BQVgsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFXO0FBQzVCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNGLEtBQU4sQ0FBWSxTQUFaLENBQWI7QUFDQUYsYUFBTyxDQUFDSyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQVAsR0FBbUJBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQVosRUFBZUMsSUFBZixDQUFvQixHQUFwQixDQUFuQjtBQUNELEtBSkQ7QUFLRDs7QUFDRCxTQUFPUCxPQUFQO0FBQ0gsQ0FaTSxDLENBY1A7O0FBQ08sSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFvQjtBQUFBOztBQUMzQyxNQUFNQyxPQUFPLG9CQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYSxLQUFiLENBQUgsa0RBQUcsY0FBcUJKLElBQXJCLENBQTBCLEVBQTFCLENBQWhCOztBQUNBLE1BQUlHLE9BQUosRUFBYTtBQUNYLFdBQU9FLE1BQU0sQ0FBQ0YsT0FBRCxDQUFiO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FOTSxDLENBU1A7O0FBQ08sSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQW1CO0FBQ2hELE1BQU1DLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxPQUFOLENBQWMsU0FBZCxFQUF5QixFQUF6QixDQUFyQjs7QUFDQSxNQUFJRCxZQUFKLEVBQWtCO0FBQ2hCLFdBQU9FLFFBQVEsQ0FBQ0YsWUFBRCxFQUFlLEVBQWYsQ0FBUixDQUEyQkcsY0FBM0IsRUFBUDtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNELENBTk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMGFmYWI1NzZkYWQ0MzZjMTJjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qIFwidG9rZW49dmFsdWVcIiDrpbwge3Rva2VuOlwidmFsdWVcIn3roZwg67CU6r6464qUIO2VqOyImFxyXG5leHBvcnQgY29uc3QgY29va2llU3RyaW5nVG9PYmplY3QgPSAoY29va2llU3RyaW5nOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgIGlmIChjb29raWVTdHJpbmcpIHtcclxuICAgICAgLy8qIFwidG9rZW49dmFsdWVcIlxyXG4gICAgICBjb25zdCBpdGVtU3RyaW5nID0gY29va2llU3RyaW5nPy5zcGxpdCgvXFxzKjtcXHMqLyk7XHJcbiAgICAgIGl0ZW1TdHJpbmcuZm9yRWFjaCgocGFpcnMpID0+IHtcclxuICAgICAgICAvLyogW1widG9rZW5cIixcInZhbHVlXCJdXHJcbiAgICAgICAgY29uc3QgcGFpciA9IHBhaXJzLnNwbGl0KC9cXHMqPVxccyovKTtcclxuICAgICAgICBjb29raWVzW3BhaXJbMF1dID0gcGFpci5zcGxpY2UoMSkuam9pbihcIj1cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvb2tpZXM7XHJcbn07XHJcblxyXG4vLypzdHJpbmfsl5DshJwgbnVtYmVy66eMIHJldHVybiDtlZjripQg7ZWo7IiYXHJcbmV4cG9ydCBjb25zdCBnZXROdW1iZXIgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBudW1iZXJzID0gc3RyaW5nLm1hdGNoKC9cXGQvZyk/LmpvaW4oXCJcIik7XHJcbiAgaWYgKG51bWJlcnMpIHtcclxuICAgIHJldHVybiBOdW1iZXIobnVtYmVycyk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuXHJcbi8vKiDquIjslaHsnYQg7J6F66Cl7ZWY66m0IOq4iOyVoeyXkCAs66W8IOuEo+yWtOyjvOuKlCDtlajsiJhcclxuZXhwb3J0IGNvbnN0IG1ha2VNb25leVN0cmluZyA9IChpbnB1dDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgYW1vdW50U3RyaW5nID0gaW5wdXQucmVwbGFjZSgvW14wLTldL2csIFwiXCIpO1xyXG4gIGlmIChhbW91bnRTdHJpbmcpIHtcclxuICAgIHJldHVybiBwYXJzZUludChhbW91bnRTdHJpbmcsIDEwKS50b0xvY2FsZVN0cmluZygpO1xyXG4gIH1cclxuICByZXR1cm4gXCJcIjtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9