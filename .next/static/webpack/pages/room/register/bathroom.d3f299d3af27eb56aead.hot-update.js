webpackHotUpdate_N_E("pages/room/register/bathroom",{

/***/ "./components/room/register/RegisterRoomBathroom.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomBathroom.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegisterRoomFooter */ "./components/room/register/RegisterRoomFooter.tsx");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/RadioGroup */ "./components/common/RadioGroup.tsx");


var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomBathroom.tsx",
    _this = undefined,
    _s = $RefreshSig$();










/*

    3단계

*/

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RegisterRoomBathroom__Container",
  componentId: "d6ezdp-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}.register-room-step-info{font-size:14px;max-width:400px;margin-bottom:24px;}.register-room-bathroom-counter-wrapper{width:320px;margin-bottom:32px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_76);
_c = Container;

var RegisterBathroom = function RegisterBathroom() {
  _s();

  var bathroomCount = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.registerRoom.bathroomCount;
  });
  var bathroomType = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.registerRoom.bathroomType;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\uC695\uC2E4 \uC218"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "3\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "register-room-step-info",
      children: "\uC0E4\uC6CC\uC2E4 \uB610\uB294 \uC695\uC870\uAC00 \uC5C6\uB294 \uACBD\uC6B0 0.5\uAC1C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-bathroom-counter-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Counter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uC695\uC2E4",
        increaseNum: 0.5,
        value: bathroomCount,
        onChange: function onChange(value) {
          return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_8__["registerRoomActions"].setBathroomCount(value));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "\uAC8C\uC2A4\uD2B8\uAC00 \uB2E8\uB3C5\uC73C\uB85C \uC0AC\uC6A9\uD558\uB294 \uC695\uC2E4\uC778\uAC00\uC694?",
      value: bathroomType,
      isValid: !!bathroomType,
      onChange: function onChange(value) {
        return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_8__["registerRoomActions"].setBathroomType(value));
      },
      options: [{
        value: "private",
        label: "예"
      }, {
        value: "public",
        label: "아니요, 공용입니다."
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
      prevHref: "/room/register/bedrooms",
      nextHref: "/room/register/location",
      isValid: bathroomCount > 0 && !!bathroomType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_s(RegisterBathroom, "dzwzxJaO3oFan7heW9O+JisUQPY=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c2 = RegisterBathroom;
/* harmony default export */ __webpack_exports__["default"] = (RegisterBathroom);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterBathroom");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJhdGhyb29tLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwYWxldHRlIiwiZ3JheV83NiIsIlJlZ2lzdGVyQmF0aHJvb20iLCJiYXRocm9vbUNvdW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlZ2lzdGVyUm9vbSIsImJhdGhyb29tVHlwZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ2YWx1ZSIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJzZXRCYXRocm9vbUNvdW50Iiwic2V0QmF0aHJvb21UeXBlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNFNBVUZDLHVEQUFPLENBQUNDLE9BVk4sQ0FBZjtLQUFNSixTOztBQXVCTixJQUFNSyxnQkFBMEIsR0FBRyxTQUE3QkEsZ0JBQTZCLEdBQU07QUFBQTs7QUFDdkMsTUFBTUMsYUFBYSxHQUFHQywwREFBVyxDQUMvQixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CSCxhQUE5QjtBQUFBLEdBRCtCLENBQWpDO0FBSUEsTUFBTUksWUFBWSxHQUFHSCwwREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLFlBQTlCO0FBQUEsR0FBRCxDQUFoQztBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFHLGVBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBTUU7QUFBSyxlQUFTLEVBQUMsd0NBQWY7QUFBQSw2QkFDRSxxRUFBQyx1REFBRDtBQUNFLGFBQUssRUFBQyxjQURSO0FBRUUsbUJBQVcsRUFBRSxHQUZmO0FBR0UsYUFBSyxFQUFFTixhQUhUO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQ08sS0FBRDtBQUFBLGlCQUNSRixRQUFRLENBQUNHLHVFQUFtQixDQUFDQyxnQkFBcEIsQ0FBcUNGLEtBQXJDLENBQUQsQ0FEQTtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQWdCRSxxRUFBQywwREFBRDtBQUNFLFdBQUssRUFBQyw0R0FEUjtBQUVFLFdBQUssRUFBRUgsWUFGVDtBQUdFLGFBQU8sRUFBRSxDQUFDLENBQUNBLFlBSGI7QUFJRSxjQUFRLEVBQUUsa0JBQUNHLEtBQUQ7QUFBQSxlQUNSRixRQUFRLENBQUNHLHVFQUFtQixDQUFDRSxlQUFwQixDQUFvQ0gsS0FBcEMsQ0FBRCxDQURBO0FBQUEsT0FKWjtBQU9FLGFBQU8sRUFBRSxDQUNQO0FBQUVBLGFBQUssRUFBRSxTQUFUO0FBQW9CSSxhQUFLLEVBQUU7QUFBM0IsT0FETyxFQUVQO0FBQUVKLGFBQUssRUFBRSxRQUFUO0FBQW1CSSxhQUFLLEVBQUU7QUFBMUIsT0FGTztBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsZUE0QkUscUVBQUMsMkRBQUQ7QUFDRSxjQUFRLEVBQUMseUJBRFg7QUFFRSxjQUFRLEVBQUMseUJBRlg7QUFHRSxhQUFPLEVBQUVYLGFBQWEsR0FBRyxDQUFoQixJQUFxQixDQUFDLENBQUNJO0FBSGxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0E3Q0Q7O0dBQU1MLGdCO1VBQ2tCRSxrRCxFQUlEQSxrRCxFQUVKSyx1RDs7O01BUGJQLGdCO0FBK0NTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JhdGhyb29tLmQzZjI5OWQzYWYyN2ViNTZhZWFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSZWdpc3RlclJvb21Gb290ZXIgZnJvbSBcIi4vUmVnaXN0ZXJSb29tRm9vdGVyXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vLi4vY29tbW9uL0NvdW50ZXJcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSBcIi4uLy4uL2NvbW1vbi9SYWRpb0dyb3VwXCI7XHJcblxyXG4vKlxyXG5cclxuICAgIDPri6jqs4RcclxuXHJcbiovXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXN0ZXAtaW5mbyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmF0aHJvb20tY291bnRlci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBSZWdpc3RlckJhdGhyb29tOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBiYXRocm9vbUNvdW50ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5iYXRocm9vbUNvdW50XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYmF0aHJvb21UeXBlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20uYmF0aHJvb21UeXBlKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGgyPuyaleyLpCDsiJg8L2gyPlxyXG4gICAgICA8aDM+M+uLqOqzhDwvaDM+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tc3RlcC1pbmZvXCI+XHJcbiAgICAgICAg7IOk7JuM7IukIOuYkOuKlCDsmpXsobDqsIAg7JeG64qUIOqyveyasCAwLjXqsJzroZwg6rCE7KO87ZWp64uI64ukLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iYXRocm9vbS1jb3VudGVyLXdyYXBwZXJcIj5cclxuICAgICAgICA8Q291bnRlclxyXG4gICAgICAgICAgbGFiZWw9XCLsmpXsi6RcIlxyXG4gICAgICAgICAgaW5jcmVhc2VOdW09ezAuNX1cclxuICAgICAgICAgIHZhbHVlPXtiYXRocm9vbUNvdW50fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCYXRocm9vbUNvdW50KHZhbHVlKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICBsYWJlbD1cIuqyjOyKpO2KuOqwgCDri6jrj4XsnLzroZwg7IKs7Jqp7ZWY64qUIOyaleyLpOyduOqwgOyalD9cIlxyXG4gICAgICAgIHZhbHVlPXtiYXRocm9vbVR5cGV9XHJcbiAgICAgICAgaXNWYWxpZD17ISFiYXRocm9vbVR5cGV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QmF0aHJvb21UeXBlKHZhbHVlKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9ucz17W1xyXG4gICAgICAgICAgeyB2YWx1ZTogXCJwcml2YXRlXCIsIGxhYmVsOiBcIuyYiFwiIH0sXHJcbiAgICAgICAgICB7IHZhbHVlOiBcInB1YmxpY1wiLCBsYWJlbDogXCLslYTri4jsmpQsIOqzteyaqeyeheuLiOuLpC5cIiB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSZWdpc3RlclJvb21Gb290ZXJcclxuICAgICAgICBwcmV2SHJlZj1cIi9yb29tL3JlZ2lzdGVyL2JlZHJvb21zXCJcclxuICAgICAgICBuZXh0SHJlZj1cIi9yb29tL3JlZ2lzdGVyL2xvY2F0aW9uXCJcclxuICAgICAgICBpc1ZhbGlkPXtiYXRocm9vbUNvdW50ID4gMCAmJiAhIWJhdGhyb29tVHlwZX1cclxuICAgICAgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckJhdGhyb29tOyJdLCJzb3VyY2VSb290IjoiIn0=