webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/common/Input.tsx":
/*!*************************************!*\
  !*** ./components/common/Input.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./store/index.ts");




var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\common\\Input.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Input__Container",
  componentId: "sc-10ur99q-0"
})(["label{span{display:block;margin-bottom:8px;}}input{position:relative;width:100%;height:46px;padding:", ";border:1px solid ", ";border-radius:4px;font-size:16px;outline:none;&::placeholder{color:", ";}&:focus{border-color:", " !important;}}.svg{position:absolute;right:11px;height:46px;}.input-error-message{margin-top:8px;font-weight:600;font-size:14px;color:", "}.input-icon-wrapper{position:absolute;top:0;right:11px;height:46px;display:flex;align-items:center;}", " ", ""], function (_ref) {
  var iconExist = _ref.iconExist;
  return iconExist ? "0 44px 0 11px" : "0 11px";
}, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].tawny, function (_ref2) {
  var useValidation = _ref2.useValidation,
      isValid = _ref2.isValid;
  return useValidation && !isValid && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["input{background-color:", ";border-color:", ";&:focus{border-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].snow, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].orange);
}, function (_ref3) {
  var useValidation = _ref3.useValidation,
      isValid = _ref3.isValid;
  return useValidation && isValid && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["input{border-color:", ";}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].dark_cyan);
});
_c = Container;

var Input = function Input(_ref4) {
  _s();

  var icon = _ref4.icon,
      label = _ref4.label,
      _ref4$isValid = _ref4.isValid,
      isValid = _ref4$isValid === void 0 ? false : _ref4$isValid,
      _ref4$useValidation = _ref4.useValidation,
      useValidation = _ref4$useValidation === void 0 ? true : _ref4$useValidation,
      errorMessage = _ref4.errorMessage,
      props = Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, ["icon", "label", "isValid", "useValidation", "errorMessage"]);

  var validateMode = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.common.validateMode;
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line max-len
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
      iconExist: !!icon,
      isValid: isValid,
      useValidation: validateMode && useValidation,
      children: [label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, _this), !label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 20
      }, _this), icon, useValidation && validateMode && !isValid && errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: "input-error-message",
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this)
  );
};

_s(Input, "3u4UUMx5o2DI04Mt0EhCPD9r7zw=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c2 = Input;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Input));

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vSW5wdXQudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImljb25FeGlzdCIsInBhbGV0dGUiLCJncmF5X2ViIiwiZ3JheV83NiIsImRhcmtfY3lhbiIsInRhd255IiwidXNlVmFsaWRhdGlvbiIsImlzVmFsaWQiLCJjc3MiLCJzbm93Iiwib3JhbmdlIiwiSW5wdXQiLCJpY29uIiwibGFiZWwiLCJlcnJvck1lc3NhZ2UiLCJwcm9wcyIsInZhbGlkYXRlTW9kZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb21tb24iLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa2VBV0E7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUFvQkEsU0FBUyxHQUFHLGVBQUgsR0FBcUIsUUFBbEQ7QUFBQSxDQVhBLEVBWVNDLHVEQUFPLENBQUNDLE9BWmpCLEVBaUJBRCx1REFBTyxDQUFDRSxPQWpCUixFQW9CT0YsdURBQU8sQ0FBQ0csU0FwQmYsRUFpQ0ZILHVEQUFPLENBQUNJLEtBakNOLEVBNkNYO0FBQUEsTUFBRUMsYUFBRixTQUFFQSxhQUFGO0FBQUEsTUFBaUJDLE9BQWpCLFNBQWlCQSxPQUFqQjtBQUFBLFNBQ0FELGFBQWEsSUFDYixDQUFDQyxPQURELElBRUFDLDZEQUZBLGlGQUl3QlAsdURBQU8sQ0FBQ1EsSUFKaEMsRUFLb0JSLHVEQUFPLENBQUNTLE1BTDVCLEVBT3NCVCx1REFBTyxDQUFDUyxNQVA5QixDQURBO0FBQUEsQ0E3Q1csRUF5RFg7QUFBQSxNQUFFSixhQUFGLFNBQUVBLGFBQUY7QUFBQSxNQUFpQkMsT0FBakIsU0FBaUJBLE9BQWpCO0FBQUEsU0FDQUQsYUFBYSxJQUNiQyxPQURBLElBRUFDLDZEQUZBLGdDQUlvQlAsdURBQU8sQ0FBQ0csU0FKNUIsQ0FEQTtBQUFBLENBekRXLENBQWY7S0FBTVAsUzs7QUE2RU4sSUFBTWMsS0FBdUIsR0FBRyxTQUExQkEsS0FBMEIsUUFPMUI7QUFBQTs7QUFBQSxNQU5KQyxJQU1JLFNBTkpBLElBTUk7QUFBQSxNQUxKQyxLQUtJLFNBTEpBLEtBS0k7QUFBQSw0QkFKSk4sT0FJSTtBQUFBLE1BSkpBLE9BSUksOEJBSk0sS0FJTjtBQUFBLGtDQUhKRCxhQUdJO0FBQUEsTUFISkEsYUFHSSxvQ0FIWSxJQUdaO0FBQUEsTUFGSlEsWUFFSSxTQUZKQSxZQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFDSixNQUFNQyxZQUFZLEdBQUdDLDBEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSCxZQUF4QjtBQUFBLEdBQUQsQ0FBaEM7QUFDRTtBQUFBO0FBQ0U7QUFDQSx5RUFBQyxTQUFEO0FBQVcsZUFBUyxFQUFFLENBQUMsQ0FBQ0osSUFBeEI7QUFBOEIsYUFBTyxFQUFFTCxPQUF2QztBQUFnRCxtQkFBYSxFQUFFUyxZQUFZLElBQUlWLGFBQS9FO0FBQUEsaUJBQ0dPLEtBQUssaUJBQ0o7QUFBQSxnQ0FDRTtBQUFBLG9CQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxnR0FBV0UsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBT0csQ0FBQ0YsS0FBRCxpQkFBVSxnR0FBV0UsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUGIsRUFRR0gsSUFSSCxFQVNHTixhQUFhLElBQUlVLFlBQWpCLElBQWlDLENBQUNULE9BQWxDLElBQTZDTyxZQUE3QyxpQkFDQztBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQSxrQkFBb0NBO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQWdCRCxDQXpCSDs7R0FBTUgsSztVQVFpQk0sa0Q7OztNQVJqQk4sSztBQTJCUyxrRkFBQVMsNENBQUssQ0FBQ0MsSUFBTixDQUFXVixLQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xZGQyMGU2NjE5YjljMjhlZTU3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIlxyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuXHJcbnR5cGUgSW5wdXRDb250YWluZXJQcm9wcyA9IHtcclxuICBpY29uRXhpc3Q6IGJvb2xlYW47XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxuICB1c2VWYWxpZGF0aW9uOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PElucHV0Q29udGFpbmVyUHJvcHM+YFxyXG4gIGxhYmVsIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIHBhZGRpbmc6ICR7KHsgaWNvbkV4aXN0IH0pID0+IChpY29uRXhpc3QgPyBcIjAgNDRweCAwIDExcHhcIiA6IFwiMCAxMXB4XCIpfTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2VifTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTFweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICB9XHJcbiAgLmlucHV0LWVycm9yLW1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS50YXdueX1cclxuICB9XHJcblxyXG4gIC5pbnB1dC1pY29uLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDExcHg7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHt1c2VWYWxpZGF0aW9uLCBpc1ZhbGlkfSkgPT5cclxuICAgIHVzZVZhbGlkYXRpb24gJiYgXHJcbiAgICAhaXNWYWxpZCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnNub3d9O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYH1cclxuICAkeyh7dXNlVmFsaWRhdGlvbiwgaXNWYWxpZH0pID0+IFxyXG4gICAgdXNlVmFsaWRhdGlvbiAmJiBcclxuICAgIGlzVmFsaWQgJiZcclxuICAgIGNzc2BcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgIH1cclxuICAgIGB9XHJcblxyXG4gIFxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xyXG4gIGljb24/OiBKU1guRWxlbWVudDsgXHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgaXNWYWxpZD86IGJvb2xlYW47XHJcbiAgdXNlVmFsaWRhdGlvbj86IGJvb2xlYW47XHJcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBJbnB1dDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IFxyXG4gIGljb24sIFxyXG4gIGxhYmVsLFxyXG4gIGlzVmFsaWQgPSBmYWxzZSxcclxuICB1c2VWYWxpZGF0aW9uID0gdHJ1ZSxcclxuICBlcnJvck1lc3NhZ2UsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IHZhbGlkYXRlTW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbW9uLnZhbGlkYXRlTW9kZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4gICAgICA8Q29udGFpbmVyIGljb25FeGlzdD17ISFpY29ufSBpc1ZhbGlkPXtpc1ZhbGlkfSB1c2VWYWxpZGF0aW9uPXt2YWxpZGF0ZU1vZGUgJiYgdXNlVmFsaWRhdGlvbn0+XHJcbiAgICAgICAge2xhYmVsICYmIChcclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IWxhYmVsICYmIDxpbnB1dCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgIHtpY29ufVxyXG4gICAgICAgIHt1c2VWYWxpZGF0aW9uICYmIHZhbGlkYXRlTW9kZSAmJiAhaXNWYWxpZCAmJiBlcnJvck1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItbWVzc2FnZVwiPntlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhJbnB1dCk7Il0sInNvdXJjZVJvb3QiOiIifQ==