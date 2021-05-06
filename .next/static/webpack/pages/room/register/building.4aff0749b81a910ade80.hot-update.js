webpackHotUpdate_N_E("pages/room/register/building",{

/***/ "./components/common/RadioGroup.tsx":
/*!******************************************!*\
  !*** ./components/common/RadioGroup.tsx ***!
  \******************************************/
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




var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\common\\RadioGroup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable indent */





var WarningIcon = function WarningIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M8 1.333A6.674 6.674 0 0 1 14.667 8 6.674 6.674 0 0 1 8 14.667 6.674 6.674 0 0 1 1.333 8 6.674 6.674 0 0 1 8 1.333zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.667 4h1.334v5.333H7.333V4zM8 12.167a.834.834 0 1 1 0-1.668.834.834 0 0 1 0 1.668z",
      fill: "#C13515"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c4 = WarningIcon;
WarningIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "RadioGroup__Container",
  componentId: "syhuae-0"
})([".radio-label{font-size:16px;font-weight:600;color:", ";margin-bottom:32px;}.radio-list-wrapper{&:after{display:block;content:\"\";clear:both;}}label{float:left;margin-bottom:24px;font-size:16px;line-height:1.2;cursor:pointer;clear:both;&:last-child{margin-bottom:0;}}input[type=\"radio\"]{width:16px;height:16px;margin:0;position:relative;margin:0;margin-right:12px;flex-shrink:0;font-size:16px;-webkit-appearance:none;border:1px solid ", ";border-radius:50%;outline:none;", "}input[type=\"radio\"]:checked{background-color:", ";border:0;}input[type=\"radio\"]:checked:after{content:\"\";width:6px;height:6px;margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;background-color:white;border-radius:50%;display:block;}.radio-description{display:block;margin-top:5px;}.radio-group-warning{margin-top:8px;display:flex;align-items:center;svg{margin-right:4px;}p{font-size:12px;color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_b0, function (_ref) {
  var validateMode = _ref.validateMode,
      isValid = _ref.isValid;

  if (validateMode) {
    if (!isValid) {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["border-color:", ";background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].tawny, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].snow);
    }

    return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["border-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].dark_cyan);
  }

  return undefined;
}, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].davidson_orange);
_c = Container;

var RadioGroup = function RadioGroup(_ref2) {
  _s();

  var label = _ref2.label,
      value = _ref2.value,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? [] : _ref2$options,
      _onChange = _ref2.onChange,
      isValid = _ref2.isValid,
      _ref2$errorMessage = _ref2.errorMessage,
      errorMessage = _ref2$errorMessage === void 0 ? "옵션을 선택하세요" : _ref2$errorMessage,
      props = Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["label", "value", "options", "onChange", "isValid", "errorMessage"]);

  var validateMode = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.common.validateMode;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    isValid: !!isValid,
    validateMode: validateMode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      className: "radio-label",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "radio-list-wrapper",
      children: options === null || options === void 0 ? void 0 : options.map(function (option, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({
            type: "radio",
            checked: value === option.value,
            onChange: function onChange() {
              return _onChange && _onChange(option.value);
            }
          }, props), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: [option.label, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "radio-description",
              children: option.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 17
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, _this), validateMode && !isValid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "radio-group-warning",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(WarningIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 9
  }, _this);
};

_s(RadioGroup, "3u4UUMx5o2DI04Mt0EhCPD9r7zw=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c2 = RadioGroup;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(RadioGroup));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RadioGroup");
$RefreshReg$(_c3, "%default%");
$RefreshReg$(_c4, "WarningIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vUmFkaW9Hcm91cC50c3giXSwibmFtZXMiOlsiV2FybmluZ0ljb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwYWxldHRlIiwiZ3JheV83NiIsImdyYXlfYjAiLCJ2YWxpZGF0ZU1vZGUiLCJpc1ZhbGlkIiwiY3NzIiwidGF3bnkiLCJzbm93IiwiZGFya19jeWFuIiwidW5kZWZpbmVkIiwiZGF2aWRzb25fb3JhbmdlIiwiUmFkaW9Hcm91cCIsImxhYmVsIiwidmFsdWUiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJlcnJvck1lc3NhZ2UiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjb21tb24iLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImRlc2NyaXB0aW9uIiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ09BLFcsWUFBQUEsVzs7Ozs7Ozs7O01BQUFBLFc7QUFBQUEsVzs7Ozs7O0FBRVAsSUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHU0QkFJRkMsdURBQU8sQ0FBQ0MsT0FKTixFQW1DU0QsdURBQU8sQ0FBQ0UsT0FuQ2pCLEVBc0NULGdCQUErQjtBQUFBLE1BQTVCQyxZQUE0QixRQUE1QkEsWUFBNEI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQy9CLE1BQUlELFlBQUosRUFBa0I7QUFDaEIsUUFBSSxDQUFDQyxPQUFMLEVBQWM7QUFDWixhQUFPQyw2REFBUCwrQ0FDa0JMLHVEQUFPLENBQUNNLEtBRDFCLEVBRXNCTix1REFBTyxDQUFDTyxJQUY5QjtBQUlEOztBQUNELFdBQU9GLDZEQUFQLHlCQUNrQkwsdURBQU8sQ0FBQ1EsU0FEMUI7QUFHRDs7QUFDRCxTQUFPQyxTQUFQO0FBQ0QsQ0FuRFUsRUFzRFNULHVEQUFPLENBQUNRLFNBdERqQixFQW9GQVIsdURBQU8sQ0FBQ1UsZUFwRlIsQ0FBZjtLQUFNYixTOztBQWtHTixJQUFNYyxVQUE0QixHQUFHLFNBQS9CQSxVQUErQixRQVEvQjtBQUFBOztBQUFBLE1BUEZDLEtBT0UsU0FQRkEsS0FPRTtBQUFBLE1BTkZDLEtBTUUsU0FORkEsS0FNRTtBQUFBLDRCQUxGQyxPQUtFO0FBQUEsTUFMRkEsT0FLRSw4QkFMTSxFQUtOO0FBQUEsTUFKRkMsU0FJRSxTQUpGQSxRQUlFO0FBQUEsTUFIRlgsT0FHRSxTQUhGQSxPQUdFO0FBQUEsaUNBRkZZLFlBRUU7QUFBQSxNQUZGQSxZQUVFLG1DQUZhLFdBRWI7QUFBQSxNQURDQyxLQUNEOztBQUNGLE1BQU1kLFlBQVksR0FBR2UsMERBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxNQUFOLENBQWFqQixZQUF4QjtBQUFBLEdBQUQsQ0FBaEM7QUFFQSxzQkFDSSxxRUFBQyxTQUFEO0FBQVcsV0FBTyxFQUFFLENBQUMsQ0FBQ0MsT0FBdEI7QUFBK0IsZ0JBQVksRUFBRUQsWUFBN0M7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUEsZ0JBQTRCUztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLGdCQUNDRSxPQURELGFBQ0NBLE9BREQsdUJBQ0NBLE9BQU8sQ0FBRU8sR0FBVCxDQUFhLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLDRCQUNWO0FBQUEsa0NBQ0E7QUFDSSxnQkFBSSxFQUFDLE9BRFQ7QUFFSSxtQkFBTyxFQUFFVixLQUFLLEtBQUtTLE1BQU0sQ0FBQ1QsS0FGOUI7QUFHSSxvQkFBUSxFQUFFO0FBQUEscUJBQU1FLFNBQVEsSUFBSUEsU0FBUSxDQUFDTyxNQUFNLENBQUNULEtBQVIsQ0FBMUI7QUFBQTtBQUhkLGFBSVFJLEtBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQU9BO0FBQUEsdUJBQ0tLLE1BQU0sQ0FBQ1YsS0FEWixlQUVJO0FBQU0sdUJBQVMsRUFBQyxtQkFBaEI7QUFBQSx3QkFBcUNVLE1BQU0sQ0FBQ0U7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEE7QUFBQSxXQUFZRCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBa0JLcEIsWUFBWSxJQUFJLENBQUNDLE9BQWpCLGlCQUNEO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsOEJBQ0kscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBLGtCQUFJWTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEyQkgsQ0F0Q0Q7O0dBQU1MLFU7VUFTbUJPLGtEOzs7TUFUbkJQLFU7QUF3Q1Msa0ZBQUFjLDRDQUFLLENBQUNDLElBQU4sQ0FBV2YsVUFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmcuNGFmZjA3NDliODFhOTEwYWRlODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgV2FybmluZ0ljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL3NlbGVjdG9yL3dhcm5pbmcuc3ZnXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgaXNWYWxpZDogYm9vbGVhbjsgdmFsaWRhdGVNb2RlOiBib29sZWFuIH0+YFxyXG4gIC5yYWRpby1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIC5yYWRpby1saXN0LXdyYXBwZXIge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9iMH07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgJHsoeyB2YWxpZGF0ZU1vZGUsIGlzVmFsaWQgfSkgPT4ge1xyXG4gICAgICBpZiAodmFsaWRhdGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS50YXdueX07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5zbm93fTtcclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH19XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnJhZGlvLWRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICAucmFkaW8tZ3JvdXAtd2FybmluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5kYXZpZHNvbl9vcmFuZ2V9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBhbnk7XHJcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xyXG4gICAgb3B0aW9ucz86IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IGFueTsgZGVzY3JpcHRpb24/OiBzdHJpbmcgfVtdO1xyXG4gICAgaXNWYWxpZD86IGJvb2xlYW47XHJcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXA6IFJlYWN0LkZDPElQcm9wcz4gPSAoe1xyXG4gICAgbGFiZWwsXHJcbiAgICB2YWx1ZSxcclxuICAgIG9wdGlvbnM9W10sXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIGlzVmFsaWQsXHJcbiAgICBlcnJvck1lc3NhZ2UgPSBcIuyYteyFmOydhCDshKDtg53tlZjshLjsmpRcIixcclxuICAgIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRlTW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbW9uLnZhbGlkYXRlTW9kZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGlzVmFsaWQ9eyEhaXNWYWxpZH0gdmFsaWRhdGVNb2RlPXt2YWxpZGF0ZU1vZGV9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyYWRpby1sYWJlbFwiPntsYWJlbH08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW8tbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIHtvcHRpb25zPy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IG9wdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UgJiYgb25DaGFuZ2Uob3B0aW9uLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpby1kZXNjcmlwdGlvblwiPntvcHRpb24uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dmFsaWRhdGVNb2RlICYmICFpc1ZhbGlkICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1ncm91cC13YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8V2FybmluZ0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDxwPntlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFJhZGlvR3JvdXApOyJdLCJzb3VyY2VSb290IjoiIn0=