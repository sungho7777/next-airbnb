webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/common/Selector.tsx":
/*!****************************************!*\
  !*** ./components/common/Selector.tsx ***!
  \****************************************/
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




var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\common\\Selector.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable indent */




var normalSelectorStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["width:100%;height:46px;select{width:100%;height:100%;background-color:white;border:1px solid ", ";padding:0 11px;border-radius:4px;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/selector/selector_down_arrow.svg\");background-position:right 11px center;background-repeat:no-repeat;font-size:16px;&:focus{border-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].dark_cyan);
var RegisterSelectorStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["width:100%;label{position:relative;}span{display:block;font-size:16px;color:", ";font-weight:600;margin-bottom:8px;}select{width:100%;height:56px;border-radius:8px;border:1px solid ", ";padding:0 14px 0 12px;appearance:none;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/selector/register_selector_down_arrow.svg\");background-position:right 11px center;background-repeat:no-repeat;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_b0);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Selector__Container",
  componentId: "sc-1y4w82y-0"
})(["", ";", ";select{", " &:disabled{background-image:url(\"/static/svg/selector/disabled_register_selector_down_arrow.svg\");background-color:", ";border-color:", ";color:", ";cursor:not-allowed;}}.selector-warning{margin-top:8px;display:flex;align-items:center;svg{margin-right:4px;}p{font-size:12px;color:", ";}}"], function (_ref) {
  var type = _ref.type;
  return type === "normal" && normalSelectorStyle;
}, function (_ref2) {
  var type = _ref2.type;
  return type === "register" && RegisterSelectorStyle;
}, function (_ref3) {
  var validateMode = _ref3.validateMode,
      isValid = _ref3.isValid;

  if (validateMode) {
    if (!isValid) {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["border-color:", ";background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].tawny, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].snow);
    }

    return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["border-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].dark_cyan);
  }

  return undefined;
}, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].davidson_orange);
_c = Container;

var Selector = function Selector(_ref4) {
  _s();

  var _ref4$options = _ref4.options,
      options = _ref4$options === void 0 ? [] : _ref4$options,
      _ref4$disabledOptions = _ref4.disabledOptions,
      disabledOptions = _ref4$disabledOptions === void 0 ? [] : _ref4$disabledOptions,
      isValid = _ref4.isValid,
      props = Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, ["options", "disabledOptions", "isValid"]);

  var validateMode = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.common.validateMode;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    isValid: !!isValid,
    validateMode: validateMode,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", _objectSpread(_objectSpread({}, props), {}, {
      children: [disabledOptions.map(function (option, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: option,
          disabled: true,
          children: option
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this);
      }), options.map(function (option, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
          value: option,
          children: option
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this);
      })]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, _this);
};

_s(Selector, "3u4UUMx5o2DI04Mt0EhCPD9r7zw=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c2 = Selector;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Selector));

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Selector");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0b3IudHN4Il0sIm5hbWVzIjpbIm5vcm1hbFNlbGVjdG9yU3R5bGUiLCJjc3MiLCJwYWxldHRlIiwiZ3JheV9lYiIsImRhcmtfY3lhbiIsIlJlZ2lzdGVyU2VsZWN0b3JTdHlsZSIsImdyYXlfNzYiLCJncmF5X2IwIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwidHlwZSIsInZhbGlkYXRlTW9kZSIsImlzVmFsaWQiLCJ0YXdueSIsInNub3ciLCJ1bmRlZmluZWQiLCJncmF5X2Y3IiwiZ3JheV9lNSIsImRhdmlkc29uX29yYW5nZSIsIlNlbGVjdG9yIiwib3B0aW9ucyIsImRpc2FibGVkT3B0aW9ucyIsInByb3BzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbW1vbiIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxtQkFBbUIsR0FBR0MsNkRBQUgsbVdBT0RDLHVEQUFPLENBQUNDLE9BUFAsRUFpQkhELHVEQUFPLENBQUNFLFNBakJMLENBQXpCO0FBcUJBLElBQU1DLHFCQUFxQixHQUFHSiw2REFBSCwrWkFRZEMsdURBQU8sQ0FBQ0ksT0FSTSxFQWdCSEosdURBQU8sQ0FBQ0ssT0FoQkwsQ0FBM0I7QUFpQ0EsSUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdVQUNYO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBY0EsSUFBSSxLQUFLLFFBQVQsSUFBcUJYLG1CQUFuQztBQUFBLENBRFcsRUFFWDtBQUFBLE1BQUdXLElBQUgsU0FBR0EsSUFBSDtBQUFBLFNBQWNBLElBQUksS0FBSyxVQUFULElBQXVCTixxQkFBckM7QUFBQSxDQUZXLEVBTVQsaUJBQStCO0FBQUEsTUFBNUJPLFlBQTRCLFNBQTVCQSxZQUE0QjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYzs7QUFDL0IsTUFBSUQsWUFBSixFQUFrQjtBQUNoQixRQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLGFBQU9aLDZEQUFQLCtDQUNrQkMsdURBQU8sQ0FBQ1ksS0FEMUIsRUFFc0JaLHVEQUFPLENBQUNhLElBRjlCO0FBSUQ7O0FBQ0QsV0FBT2QsNkRBQVAseUJBQ2tCQyx1REFBTyxDQUFDRSxTQUQxQjtBQUdEOztBQUNELFNBQU9ZLFNBQVA7QUFDRCxDQW5CVSxFQXNCV2QsdURBQU8sQ0FBQ2UsT0F0Qm5CLEVBdUJPZix1REFBTyxDQUFDZ0IsT0F2QmYsRUF3QkFoQix1REFBTyxDQUFDZ0IsT0F4QlIsRUFxQ0FoQix1REFBTyxDQUFDaUIsZUFyQ1IsQ0FBZjtLQUFNWCxTOztBQXFETixJQUFNWSxRQUEwQixHQUFHLFNBQTdCQSxRQUE2QixRQUs3QjtBQUFBOztBQUFBLDRCQUpKQyxPQUlJO0FBQUEsTUFKSkEsT0FJSSw4QkFKTSxFQUlOO0FBQUEsb0NBSEpDLGVBR0k7QUFBQSxNQUhKQSxlQUdJLHNDQUhjLEVBR2Q7QUFBQSxNQUZKVCxPQUVJLFNBRkpBLE9BRUk7QUFBQSxNQUREVSxLQUNDOztBQUNKLE1BQU1YLFlBQVksR0FBR1ksMERBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxNQUFOLENBQWFkLFlBQXhCO0FBQUEsR0FBRCxDQUFoQztBQUVBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBVyxXQUFPLEVBQUUsQ0FBQyxDQUFDQyxPQUF0QjtBQUErQixnQkFBWSxFQUFFRCxZQUE3QztBQUFBLDJCQUNFLCtHQUFZVyxLQUFaO0FBQUEsaUJBQ0dELGVBQWUsQ0FBQ0ssR0FBaEIsQ0FBb0IsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsNEJBQ25CO0FBQW9CLGVBQUssRUFBRUQsTUFBM0I7QUFBbUMsa0JBQVEsTUFBM0M7QUFBQSxvQkFDR0E7QUFESCxXQUFhQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBcEIsQ0FESCxFQU1HUixPQUFPLENBQUNNLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSw0QkFDWDtBQUFvQixlQUFLLEVBQUVELE1BQTNCO0FBQUEsb0JBQ0dBO0FBREgsV0FBYUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWixDQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQXhCRDs7R0FBTVQsUTtVQU1pQkksa0Q7OztNQU5qQkosUTtBQTBCUyxrRkFBQVUsNENBQUssQ0FBQ0MsSUFBTixDQUFXWCxRQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zZGE4ZThlN2UxYzEyNjEyYmFlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIlxyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwiLi4vLi4vc3RvcmVcIlxyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2NvbW1vbi93YXJuaW5nLnN2Z1wiO1xyXG5cclxuY29uc3Qgbm9ybWFsU2VsZWN0b3JTdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9lYn07XHJcbiAgICBwYWRkaW5nOiAwIDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvc2VsZWN0b3Ivc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMXB4IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFJlZ2lzdGVyU2VsZWN0b3JTdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfYjB9O1xyXG4gICAgcGFkZGluZzogMCAxNHB4IDAgMTJweDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvc2VsZWN0b3IvcmVnaXN0ZXJfc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMXB4IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIFNlbGVjdG9yQ29udGFpbmVyUHJvcHN7XHJcbiAgaXNWYWxpZDpib29sZWFuO1xyXG4gIHZhbGlkYXRlTW9kZTpib29sZWFuO1xyXG4gIHR5cGU6XCJyZWdpc3RlclwiIHwgXCJub3JtYWxcIjtcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxTZWxlY3RvckNvbnRhaW5lclByb3BzPmBcclxuICAkeyh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJub3JtYWxcIiAmJiBub3JtYWxTZWxlY3RvclN0eWxlfTtcclxuICAkeyh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJyZWdpc3RlclwiICYmIFJlZ2lzdGVyU2VsZWN0b3JTdHlsZX07XHJcblxyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgJHsoeyB2YWxpZGF0ZU1vZGUsIGlzVmFsaWQgfSkgPT4ge1xyXG4gICAgICBpZiAodmFsaWRhdGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS50YXdueX07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5zbm93fTtcclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH19XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvc2VsZWN0b3IvZGlzYWJsZWRfcmVnaXN0ZXJfc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2Y3fTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9lNX07XHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV9lNX07XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWxlY3Rvci13YXJuaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogJHtwYWxldHRlLmRhdmlkc29uX29yYW5nZX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIFJlYWN0LlNlbGVjdEhUTUxBdHRyaWJ1dGVzPEhUTUxTZWxlY3RFbGVtZW50PiB7XHJcbiAgbGFiZWw/OnN0cmluZztcclxuICBvcHRpb25zPzogc3RyaW5nW107XHJcbiAgdmFsdWU/OnN0cmluZztcclxuICBpc1ZhbGlkPyA6IGJvb2xlYW47XHJcbiAgdXNlVmFsaWRhdGlvbj86Ym9vbGVhbjtcclxuICBlcnJvck1lc3NhZ2U/OnN0cmluZztcclxuICB0eXBlPzpcInJlZ2lzdGVyXCIgfCBcIm5vcm1hbFwiO1xyXG4gIGRpc2FibGVkT3B0aW9ucz86IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBTZWxlY3RvcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7XHJcbiAgb3B0aW9ucyA9IFtdLCBcclxuICBkaXNhYmxlZE9wdGlvbnMgPSBbXSxcclxuICBpc1ZhbGlkLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCB2YWxpZGF0ZU1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi52YWxpZGF0ZU1vZGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBpc1ZhbGlkPXshIWlzVmFsaWR9IHZhbGlkYXRlTW9kZT17dmFsaWRhdGVNb2RlfT5cclxuICAgICAgPHNlbGVjdCB7Li4ucHJvcHN9PlxyXG4gICAgICAgIHtkaXNhYmxlZE9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvcHRpb259IGRpc2FibGVkPlxyXG4gICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlbGVjdG9yKTsiXSwic291cmNlUm9vdCI6IiJ9