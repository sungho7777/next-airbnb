webpackHotUpdate_N_E("pages/room/register/bedrooms",{

/***/ "./components/room/register/RegisterRoomBedRooms.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomBedRooms.tsx ***!
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
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");


var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomBedRooms.tsx",
    _this = undefined,
    _s = $RefreshSig$();








//import RegisterRoomBedTypes from "./RegisterRoomBedTypes";
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RegisterRoomBedRooms__Container",
  componentId: "sc-1wc2tcz-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}.register-room-step-info{font-size:14px;max-width:400px;margin-bottom:24px;max-width:400px;word-break:keep-all;}.register-room-maximum-guest-count-wrapper{width:320px;margin-top:24px;margin-bottom:32px;}.register-room-bedroom-count-wrapper{width:320px;margin-bottom:32px;}.register-room-bed-count-wrapper{width:320px;margin-bottom:50px;}.register-room-bed-type-info{margin-top:6px;margin-bottom:20px;max-width:400px;word-break:keep-all;}.register-room-bed-type-list-wrapper{width:548px;}.register-room-bedroom{width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}}.register-room-bed-type-top{display:flex;justify-content:space-between;align-items:center;}.register-room-bed-type-bedroom-texts{margin-bottom:28px;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].gray_48);
_c = Container;

var RegisterRoomBedrooms = function RegisterRoomBedrooms() {
  _s();

  // * 최대 숙박 인원 변경.
  var maximumGuestCount = Object(_store__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.registerRoom.maximumGuestCount;
  }); // * 침실 개수 변경.

  var bedroomCount = Object(_store__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.registerRoom.bedroomCount;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // * 최대 숙박 인원 변경 시

  var onChangeMaximumGuestCount = function onChangeMaximumGuestCount(value) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setMaximumGuestCount(value));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\uC219\uC18C\uC5D0 \uC5BC\uB9C8\uB098 \uB9CE\uC740 \uC778\uC6D0\uC774 \uC219\uBC15\uD560 \uC218 \uC788\uB098\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "2\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "room-register-step-info",
      children: "\uBAA8\uB4E0 \uAC8C\uC2A4\uD2B8\uAC00 \uD3B8\uC548\uD558\uAC8C \uC219\uBC15\uD560 \uC218 \uC788\uB3C4\uB85D \uCE68\uB300\uAC00 \uCDA9\uBD84\uD788 \uAD6C\uBE44\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-maximum-guest-count-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Counter__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uCD5C\uB300 \uC219\uBC15 \uC778\uC6D0",
        value: maximumGuestCount,
        onChange: onChangeMaximumGuestCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedrooms, "t4sY0w030PEiwkGIfukvPnIXaZY=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c2 = RegisterRoomBedrooms;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBedrooms);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomBedrooms");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFJvb21zLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwYWxldHRlIiwiZ3JheV83NiIsImdyYXlfZGQiLCJncmF5XzQ4IiwiUmVnaXN0ZXJSb29tQmVkcm9vbXMiLCJtYXhpbXVtR3Vlc3RDb3VudCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZWdpc3RlclJvb20iLCJiZWRyb29tQ291bnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VNYXhpbXVtR3Vlc3RDb3VudCIsInZhbHVlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldE1heGltdW1HdWVzdENvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHM4QkFVRUMsdURBQU8sQ0FBQ0MsT0FWVixFQTZDaUJELHVEQUFPLENBQUNFLE9BN0N6QixFQStDd0JGLHVEQUFPLENBQUNFLE9BL0NoQyxFQTRERUYsdURBQU8sQ0FBQ0csT0E1RFYsQ0FBZjtLQUFNTixTOztBQWdFTixJQUFNTyxvQkFBNkIsR0FBQyxTQUE5QkEsb0JBQThCLEdBQUk7QUFBQTs7QUFDcEM7QUFDQSxNQUFNQyxpQkFBaUIsR0FBQ0MsMERBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CSCxpQkFBNUI7QUFBQSxHQUFELENBQW5DLENBRm9DLENBR3BDOztBQUNBLE1BQU1JLFlBQVksR0FBQ0gsMERBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxZQUE1QjtBQUFBLEdBQUQsQ0FBOUI7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBTm9DLENBUXBDOztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQ0MsS0FBRCxFQUFnQjtBQUM5Q0gsWUFBUSxDQUFDSSx1RUFBbUIsQ0FBQ0Msb0JBQXBCLENBQXlDRixLQUF6QyxDQUFELENBQVI7QUFDSCxHQUZEOztBQUlBLHNCQUNJLHFFQUFDLFNBQUQ7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQUcsZUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFNSTtBQUFLLGVBQVMsRUFBQywyQ0FBZjtBQUFBLDZCQUNJLHFFQUFDLHVEQUFEO0FBQ0ksYUFBSyxFQUFDLHdDQURWO0FBRUksYUFBSyxFQUFFUixpQkFGWDtBQUdJLGdCQUFRLEVBQUVPO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQTdCRDs7R0FBTVIsb0I7VUFFc0JFLGtELEVBRUxBLGtELEVBRUZLLHVEOzs7TUFOZlAsb0I7QUErQlNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXMuNjlhYTZkNjQ3MjRjYzBhNWEzZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi8uLi9jb21tb24vQ291bnRlclwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgeyBiZWRyb29tQ291bnRMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7IGdldE51bWJlciB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tbW9uL0J1dHRvblwiO1xyXG4vL2ltcG9ydCBSZWdpc3RlclJvb21CZWRUeXBlcyBmcm9tIFwiLi9SZWdpc3RlclJvb21CZWRUeXBlc1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDYycHggMzBweCAxMDBweDtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLXN0ZXAtaW5mbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tbWF4aW11bS1ndWVzdC1jb3VudC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tYmVkcm9vbS1jb3VudC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWJlZC1jb3VudC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgd29yZC1icmVhazoga2VlcC1hbGw7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1saXN0LXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiA1NDhweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWJlZHJvb20ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDI4cHggMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbS10ZXh0cyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQmVkcm9vbXM6UmVhY3QuRkM9KCk9PntcclxuICAgIC8vICog7LWc64yAIOyImeuwlSDsnbjsm5Ag67OA6rK9LlxyXG4gICAgY29uc3QgbWF4aW11bUd1ZXN0Q291bnQ9dXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucmVnaXN0ZXJSb29tLm1heGltdW1HdWVzdENvdW50KTtcclxuICAgIC8vICog7Lmo7IukIOqwnOyImCDrs4Dqsr0uXHJcbiAgICBjb25zdCBiZWRyb29tQ291bnQ9dXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucmVnaXN0ZXJSb29tLmJlZHJvb21Db3VudCk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vICog7LWc64yAIOyImeuwlSDsnbjsm5Ag67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VNYXhpbXVtR3Vlc3RDb3VudCA9ICh2YWx1ZTpudW1iZXIpPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRNYXhpbXVtR3Vlc3RDb3VudCh2YWx1ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMj7siJnshozsl5Ag7Ja866eI64KYIOunjuydgCDsnbjsm5DsnbQg7IiZ67CV7ZWgIOyImCDsnojrgpjsmpQ/PC9oMj5cclxuICAgICAgICAgICAgPGgzPjLri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb29tLXJlZ2lzdGVyLXN0ZXAtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAg66qo65OgIOqyjOyKpO2KuOqwgCDtjrjslYjtlZjqsowg7IiZ67CV7ZWgIOyImCDsnojrj4TroZ0g7Lmo64yA6rCAIOy2qeu2hO2eiCDqtazruYTrkJjslrQg7J6I64qU7KeAIO2ZleyduO2VmOyEuOyalC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tbWF4aW11bS1ndWVzdC1jb3VudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRlclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi7LWc64yAIOyImeuwlSDsnbjsm5BcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttYXhpbXVtR3Vlc3RDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VNYXhpbXVtR3Vlc3RDb3VudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZHJvb21zOyJdLCJzb3VyY2VSb290IjoiIn0=