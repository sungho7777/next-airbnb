webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! exports provided: cookieStringToObject, getNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookieStringToObject", function() { return cookieStringToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumber", function() { return getNumber; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbImNvb2tpZVN0cmluZ1RvT2JqZWN0IiwiY29va2llU3RyaW5nIiwiY29va2llcyIsIml0ZW1TdHJpbmciLCJzcGxpdCIsImZvckVhY2giLCJwYWlycyIsInBhaXIiLCJzcGxpY2UiLCJqb2luIiwiZ2V0TnVtYmVyIiwic3RyaW5nIiwibnVtYmVycyIsIm1hdGNoIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLFlBQUQsRUFBc0M7QUFDdEUsTUFBTUMsT0FBa0MsR0FBRyxFQUEzQzs7QUFDQSxNQUFJRCxZQUFKLEVBQWtCO0FBQ2hCO0FBQ0EsUUFBTUUsVUFBVSxHQUFHRixZQUFILGFBQUdBLFlBQUgsdUJBQUdBLFlBQVksQ0FBRUcsS0FBZCxDQUFvQixTQUFwQixDQUFuQjtBQUNBRCxjQUFVLENBQUNFLE9BQVgsQ0FBbUIsVUFBQ0MsS0FBRCxFQUFXO0FBQzVCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNGLEtBQU4sQ0FBWSxTQUFaLENBQWI7QUFDQUYsYUFBTyxDQUFDSyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQVAsR0FBbUJBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQVosRUFBZUMsSUFBZixDQUFvQixHQUFwQixDQUFuQjtBQUNELEtBSkQ7QUFLRDs7QUFDRCxTQUFPUCxPQUFQO0FBQ0gsQ0FaTSxDLENBY1A7O0FBQ08sSUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFvQjtBQUFBOztBQUMzQyxNQUFNQyxPQUFPLG9CQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYSxLQUFiLENBQUgsa0RBQUcsY0FBcUJKLElBQXJCLENBQTBCLEVBQTFCLENBQWhCOztBQUNBLE1BQUlHLE9BQUosRUFBYTtBQUNYLFdBQU9FLE1BQU0sQ0FBQ0YsT0FBRCxDQUFiO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FOTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjYyOWI4ZjkyMjQ1MGY0NDkwMmQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyogXCJ0b2tlbj12YWx1ZVwiIOulvCB7dG9rZW46XCJ2YWx1ZVwifeuhnCDrsJTqvrjripQg7ZWo7IiYXHJcbmV4cG9ydCBjb25zdCBjb29raWVTdHJpbmdUb09iamVjdCA9IChjb29raWVTdHJpbmc6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgaWYgKGNvb2tpZVN0cmluZykge1xyXG4gICAgICAvLyogXCJ0b2tlbj12YWx1ZVwiXHJcbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmcgPSBjb29raWVTdHJpbmc/LnNwbGl0KC9cXHMqO1xccyovKTtcclxuICAgICAgaXRlbVN0cmluZy5mb3JFYWNoKChwYWlycykgPT4ge1xyXG4gICAgICAgIC8vKiBbXCJ0b2tlblwiLFwidmFsdWVcIl1cclxuICAgICAgICBjb25zdCBwYWlyID0gcGFpcnMuc3BsaXQoL1xccyo9XFxzKi8pO1xyXG4gICAgICAgIGNvb2tpZXNbcGFpclswXV0gPSBwYWlyLnNwbGljZSgxKS5qb2luKFwiPVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29va2llcztcclxufTtcclxuXHJcbi8vKnN0cmluZ+yXkOyEnCBudW1iZXLrp4wgcmV0dXJuIO2VmOuKlCDtlajsiJhcclxuZXhwb3J0IGNvbnN0IGdldE51bWJlciA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IG51bWJlcnMgPSBzdHJpbmcubWF0Y2goL1xcZC9nKT8uam9pbihcIlwiKTtcclxuICBpZiAobnVtYmVycykge1xyXG4gICAgcmV0dXJuIE51bWJlcihudW1iZXJzKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==