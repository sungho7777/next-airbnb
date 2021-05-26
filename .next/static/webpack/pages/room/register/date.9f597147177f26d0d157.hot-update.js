webpackHotUpdate_N_E("pages/room/register/date",{

/***/ "./components/common/Button.tsx":
/*!**************************************!*\
  !*** ./components/common/Button.tsx ***!
  \**************************************/
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




var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\common\\Button.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // * 버튼 색상 구하기

var getButtonColor = function getButtonColor(color, colorReverse) {
  if (colorReverse) {
    switch (color) {
      case "dark_cyan":
        return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["border:2px solid ", ";color:", ";background-color:white;"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].dark_cyan);

      default:
        return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["border:2px solid ", ";color:", ";background-color:white;"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].black, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].black);
    }
  }

  switch (color) {
    case "dark_cyan":
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].dark_cyan);

    case "white":
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["background-color:white;"]);

    default:
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].bittersweet);
  }
}; // * 버튼 크기 구하기


var getButtonSize = function getButtonSize(size) {
  switch (size) {
    case "small":
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["font-size:14px;height:36px;"]);

    case "medium":
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["height:48px;"]);

    default:
      return "";
  }
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "Button__Container",
  componentId: "sc-1h0fxq-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:48px;padding:0 15px;border:0;border-radius:4px;font-size:18px;font-weight:700;outline:none;cursor:pointer;width:", ";", ";", ";svg{margin-right:12px;}"], function (props) {
  return props.width;
}, function (props) {
  return getButtonColor(props.color || "", props.colorReverse);
}, function (props) {
  return getButtonSize(props.size);
});
_c = Container;
var normalButtonStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["width:100%;height:48px;border:0;border-radius:4px;background-color:", ";color:white;font-size:16px;font-weight:800;outline:none;cursor:pointer;"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].bittersweet);
var RegisterButtonStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["width:161px;height:45px;border:1px solid ", ";background-color:white;border-radius:4px;color:", ";font-size:18px;font-weight:700;outline:none;cursor:pointer;"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_c4, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_48);

var Button = function Button(_ref) {
  var children = _ref.children,
      color = _ref.color,
      width = _ref.width,
      _ref$colorReverse = _ref.colorReverse,
      colorReverse = _ref$colorReverse === void 0 ? false : _ref$colorReverse,
      icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "medium" : _ref$size,
      props = Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children", "color", "width", "colorReverse", "icon", "size"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, _objectSpread(_objectSpread({}, props), {}, {
    color: color,
    width: width,
    colorReverse: colorReverse,
    children: [icon, children]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 5
  }, _this);
};

_c2 = Button;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Button));

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Button");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJnZXRCdXR0b25Db2xvciIsImNvbG9yIiwiY29sb3JSZXZlcnNlIiwiY3NzIiwicGFsZXR0ZSIsImRhcmtfY3lhbiIsImJsYWNrIiwiYml0dGVyc3dlZXQiLCJnZXRCdXR0b25TaXplIiwic2l6ZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImJ1dHRvbiIsInByb3BzIiwid2lkdGgiLCJub3JtYWxCdXR0b25TdHlsZSIsIlJlZ2lzdGVyQnV0dG9uU3R5bGUiLCJncmF5X2M0IiwiZ3JheV80OCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiaWNvbiIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBLElBQU1BLGNBQWMsR0FBQyxTQUFmQSxjQUFlLENBQUNDLEtBQUQsRUFBZUMsWUFBZixFQUFzQztBQUN6RCxNQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLFlBQVFELEtBQVI7QUFDSSxXQUFLLFdBQUw7QUFDRSxlQUFPRSw2REFBUCwrREFDc0JDLHVEQUFPLENBQUNDLFNBRDlCLEVBRVdELHVEQUFPLENBQUNDLFNBRm5COztBQUtGO0FBQ0ksZUFBT0YsNkRBQVAsK0RBQ29CQyx1REFBTyxDQUFDRSxLQUQ1QixFQUVTRix1REFBTyxDQUFDRSxLQUZqQjtBQVJSO0FBY0Q7O0FBQ0QsVUFBUUwsS0FBUjtBQUNFLFNBQUssV0FBTDtBQUNFLGFBQU9FLDZEQUFQLDZCQUNzQkMsdURBQU8sQ0FBQ0MsU0FEOUI7O0FBR0YsU0FBSyxPQUFMO0FBQ0EsYUFBT0YsNkRBQVA7O0FBR0E7QUFDSSxhQUFPQSw2REFBUCw2QkFDb0JDLHVEQUFPLENBQUNHLFdBRDVCO0FBVk47QUFjRCxDQS9CRCxDLENBaUNBOzs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBMkI7QUFDL0MsVUFBUUEsSUFBUjtBQUNFLFNBQUssT0FBTDtBQUNFLGFBQU9OLDZEQUFQOztBQUlGLFNBQUssUUFBTDtBQUNFLGFBQU9BLDZEQUFQOztBQUdGO0FBQ0ksYUFBTyxFQUFQO0FBWE47QUFhRCxDQWREOztBQWdCQSxJQUFNTyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsd09BYUosVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBakI7QUFBQSxDQWJJLEVBY1gsVUFBQ0QsS0FBRDtBQUFBLFNBQVdiLGNBQWMsQ0FBQ2EsS0FBSyxDQUFDWixLQUFOLElBQWUsRUFBaEIsRUFBb0JZLEtBQUssQ0FBQ1gsWUFBMUIsQ0FBekI7QUFBQSxDQWRXLEVBZVgsVUFBQ1csS0FBRDtBQUFBLFNBQVdMLGFBQWEsQ0FBQ0ssS0FBSyxDQUFDSixJQUFQLENBQXhCO0FBQUEsQ0FmVyxDQUFmO0tBQU1DLFM7QUFxQk4sSUFBTUssaUJBQWlCLEdBQUdaLDZEQUFILHNKQUtEQyx1REFBTyxDQUFDRyxXQUxQLENBQXZCO0FBYUEsSUFBTVMsbUJBQW1CLEdBQUdiLDZEQUFILG9LQUdIQyx1REFBTyxDQUFDYSxPQUhMLEVBTWRiLHVEQUFPLENBQUNjLE9BTk0sQ0FBekI7O0FBNEJBLElBQU1DLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLE9BUTNCO0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsTUFOSm5CLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEphLEtBS0ksUUFMSkEsS0FLSTtBQUFBLCtCQUpKWixZQUlJO0FBQUEsTUFKSkEsWUFJSSxrQ0FKVyxLQUlYO0FBQUEsTUFISm1CLElBR0ksUUFISkEsSUFHSTtBQUFBLHVCQUZKWixJQUVJO0FBQUEsTUFGSkEsSUFFSSwwQkFGRyxRQUVIO0FBQUEsTUFEREksS0FDQzs7QUFDSixzQkFDRSxxRUFBQyxTQUFELGtDQUFlQSxLQUFmO0FBQXNCLFNBQUssRUFBRVosS0FBN0I7QUFBb0MsU0FBSyxFQUFFYSxLQUEzQztBQUFrRCxnQkFBWSxFQUFFWixZQUFoRTtBQUFBLGVBQ0dtQixJQURILEVBRUdELFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQWZEOztNQUFNRCxNO0FBaUJTLGtGQUFBRyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdKLE1BQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2RhdGUuOWY1OTcxNDcxNzdmMjZkMGQxNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIlxyXG5cclxuLy8gKiDrsoTtirwg7IOJ7IOBIOq1rO2VmOq4sFxyXG5jb25zdCBnZXRCdXR0b25Db2xvcj0oY29sb3I6c3RyaW5nLCBjb2xvclJldmVyc2U6Ym9vbGVhbik9PntcclxuICBpZiAoY29sb3JSZXZlcnNlKSB7XHJcbiAgICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICAgICAgY2FzZSBcImRhcmtfY3lhblwiOlxyXG4gICAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7cGFsZXR0ZS5ibGFja307XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuYmxhY2t9O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBgO1xyXG4gICAgfVxyXG4gIH1cclxuICBzd2l0Y2ggKGNvbG9yKSB7XHJcbiAgICBjYXNlIFwiZGFya19jeWFuXCI6XHJcbiAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgIGA7XHJcbiAgICBjYXNlIFwid2hpdGVcIjpcclxuICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBgO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5iaXR0ZXJzd2VldH07XHJcbiAgICBgO1xyXG4gIH1cclxufTtcclxuXHJcbi8vICog67KE7Yq8IO2BrOq4sCDqtaztlZjquLBcclxuY29uc3QgZ2V0QnV0dG9uU2l6ZSA9IChzaXplOlwic21hbGxcIiB8IFwibWVkaXVtXCIpPT57XHJcbiAgc3dpdGNoIChzaXplKSB7XHJcbiAgICBjYXNlIFwic21hbGxcIjpcclxuICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICBgO1xyXG4gICAgY2FzZSBcIm1lZGl1bVwiOlxyXG4gICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgYDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbjxTeXRsZWRCdXR0b25wcm9wcz5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRofTtcclxuICAkeyhwcm9wcykgPT4gZ2V0QnV0dG9uQ29sb3IocHJvcHMuY29sb3IgfHwgXCJcIiwgcHJvcHMuY29sb3JSZXZlcnNlKX07XHJcbiAgJHsocHJvcHMpID0+IGdldEJ1dHRvblNpemUocHJvcHMuc2l6ZSl9O1xyXG4gIHN2ZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBub3JtYWxCdXR0b25TdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYml0dGVyc3dlZXR9O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyQnV0dG9uU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDE2MXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9jNH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAke3BhbGV0dGUuZ3JheV80OH07XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgU3l0bGVkQnV0dG9ucHJvcHMge1xyXG4gIHdpZHRoOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgY29sb3JSZXZlcnNlOiBib29sZWFuO1xyXG4gIHNpemU6IFwic21hbGxcIiB8IFwibWVkaXVtXCJcclxufVxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBjb2xvcj86IFwiZGFya19jeWFuXCIgfCBcIndoaXRlXCIgfCBcImJpdHRlcnN3ZWV0XCIgfCBcImFtYXJhbnRoXCI7XHJcbiAgd2lkdGg/OiBzdHJpbmc7XHJcbiAgY29sb3JSZXZlcnNlPzogYm9vbGVhbjtcclxuICBpY29uPzogSlNYLkVsZW1lbnQ7XHJcbiAgc2l6ZT86IFwic21hbGxcIiB8IFwibWVkaXVtXCJcclxufVxyXG5cclxuY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBjb2xvcixcclxuICB3aWR0aCxcclxuICBjb2xvclJldmVyc2UgPSBmYWxzZSxcclxuICBpY29uLFxyXG4gIHNpemUgPSBcIm1lZGl1bVwiLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB7Li4ucHJvcHN9IGNvbG9yPXtjb2xvcn0gd2lkdGg9e3dpZHRofSBjb2xvclJldmVyc2U9e2NvbG9yUmV2ZXJzZX0+XHJcbiAgICAgIHtpY29ufVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCdXR0b24pOyJdLCJzb3VyY2VSb290IjoiIn0=