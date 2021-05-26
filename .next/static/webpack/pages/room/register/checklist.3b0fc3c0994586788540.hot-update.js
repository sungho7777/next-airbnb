webpackHotUpdate_N_E("pages/room/register/checklist",{

/***/ "./components/room/register/RegisterRoomCheckStep.tsx":
/*!************************************************************!*\
  !*** ./components/room/register/RegisterRoomCheckStep.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");



var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomCheckStep.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var CheckMarkIcon = function CheckMarkIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16 1.142 6.08 12.46 0 7.111l1.172-1.324L5.92 9.952 14.689 0 16 1.142z",
      fill: "#008489"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c3 = CheckMarkIcon;
CheckMarkIcon.defaultProps = {
  width: "16",
  height: "13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "RegisterRoomCheckStep__Container",
  componentId: "tv8bv6-0"
})(["display:inline-block;padding:16px 0;a{display:flex;align-items:center;svg{margin-right:12px;}span{font-size:16px;font-weight:600;text-decoration:underline;}}.register-room-check-step-in-progress{margin-left:28px;}.register-room-check-step-continue-button{margin:8px 0 0 28px;}.disabled-step{margin-left:28px;font-size:16px;color:", ";}"], _styles_palette__WEBPACK_IMPORTED_MODULE_6__["default"].gray_76);
_c = Container;

var RegisterRoomCheckStep = function RegisterRoomCheckStep(_ref) {
  var disabled = _ref.disabled,
      inProgress = _ref.inProgress,
      step = _ref.step,
      href = _ref.href;

  if (inProgress) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: href,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: "registero-room-check-step-in-progress",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: step
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: href,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: "registero-room-check-step-continue-button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            color: "dark_cyan",
            size: "small",
            width: "55px",
            children: "\uACC4\uC18D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, _this);
  }

  if (disabled) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: "disabled-step",
        children: step
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CheckMarkIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: step
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, _this);
};

_c2 = RegisterRoomCheckStep;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomCheckStep);

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomCheckStep");
$RefreshReg$(_c3, "CheckMarkIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUNoZWNrU3RlcC50c3giXSwibmFtZXMiOlsiQ2hlY2tNYXJrSWNvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImxpIiwicGFsZXR0ZSIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21DaGVja1N0ZXAiLCJkaXNhYmxlZCIsImluUHJvZ3Jlc3MiLCJzdGVwIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDT0EsYSxZQUFBQSxhOzs7Ozs7Ozs7OztNQUFBQSxhO0FBQUFBLGE7Ozs7OztBQUNQO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsd1ZBd0JFQyx1REFBTyxDQUFDQyxPQXhCVixDQUFmO0tBQU1KLFM7O0FBbUNOLElBQU1LLHFCQUFzQyxHQUFHLFNBQXpDQSxxQkFBeUMsT0FLekM7QUFBQSxNQUpGQyxRQUlFLFFBSkZBLFFBSUU7QUFBQSxNQUhGQyxVQUdFLFFBSEZBLFVBR0U7QUFBQSxNQUZGQyxJQUVFLFFBRkZBLElBRUU7QUFBQSxNQURGQyxJQUNFLFFBREZBLElBQ0U7O0FBQ0YsTUFBR0YsVUFBSCxFQUFjO0FBQ1Ysd0JBQ0kscUVBQUMsU0FBRDtBQUFBLDhCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFRSxJQUFaO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLHVDQUFiO0FBQUEsaUNBQ0k7QUFBQSxzQkFBT0Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFQyxJQUFaO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLDJDQUFiO0FBQUEsaUNBQ0kscUVBQUMsc0RBQUQ7QUFBUSxpQkFBSyxFQUFDLFdBQWQ7QUFBMEIsZ0JBQUksRUFBQyxPQUEvQjtBQUF1QyxpQkFBSyxFQUFDLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWVIOztBQUNELE1BQUdILFFBQUgsRUFBWTtBQUNSLHdCQUNJLHFFQUFDLFNBQUQ7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUFBLGtCQUE4QkU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUtIOztBQUNELHNCQUNJLHFFQUFDLFNBQUQ7QUFBQSwyQkFDSSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUMsSUFBWjtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0kscUVBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBT0Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQXhDRDs7TUFBTUgscUI7QUEwQ1NBLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvY2hlY2tsaXN0LjNiMGZjM2MwOTk0NTg2Nzg4NTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENoZWNrTWFya0ljb24gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL3JlZ2lzdGVyL2RhcmtfY3lhbl9jaGVja19tYXJrLnN2Z1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tY2hlY2stc3RlcC1pbi1wcm9ncmVzcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1jaGVjay1zdGVwLWNvbnRpbnVlLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMCAwIDI4cHg7XHJcbiAgICB9XHJcbiAgICAuZGlzYWJsZWQtc3RlcCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3Bze1xyXG4gICAgZGlzYWJsZWQ6Ym9vbGVhbjtcclxuICAgIGluUHJvZ3Jlc3M6Ym9vbGVhbjtcclxuICAgIHN0ZXA6c3RyaW5nO1xyXG4gICAgaHJlZjpzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUNoZWNrU3RlcDpSZWFjdC5GQzxJUHJvcHM+ID0gKHtcclxuICAgIGRpc2FibGVkLFxyXG4gICAgaW5Qcm9ncmVzcyxcclxuICAgIHN0ZXAsXHJcbiAgICBocmVmLFxyXG59KSA9PiB7XHJcbiAgICBpZihpblByb2dyZXNzKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVnaXN0ZXJvLXJvb20tY2hlY2stc3RlcC1pbi1wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3RlcH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWdpc3Rlcm8tcm9vbS1jaGVjay1zdGVwLWNvbnRpbnVlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZGFya19jeWFuXCIgc2l6ZT1cInNtYWxsXCIgd2lkdGg9XCI1NXB4XCI+6rOE7IaNPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYoZGlzYWJsZWQpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNhYmxlZC1zdGVwXCI+e3N0ZXB9PC9wPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja01hcmtJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3N0ZXB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQ2hlY2tTdGVwOyJdLCJzb3VyY2VSb290IjoiIn0=