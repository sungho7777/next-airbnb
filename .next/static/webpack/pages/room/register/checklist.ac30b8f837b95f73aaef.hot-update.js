webpackHotUpdate_N_E("pages/room/register/checklist",{

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
    size: size,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJnZXRCdXR0b25Db2xvciIsImNvbG9yIiwiY29sb3JSZXZlcnNlIiwiY3NzIiwicGFsZXR0ZSIsImRhcmtfY3lhbiIsImJsYWNrIiwiYml0dGVyc3dlZXQiLCJnZXRCdXR0b25TaXplIiwic2l6ZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImJ1dHRvbiIsInByb3BzIiwid2lkdGgiLCJub3JtYWxCdXR0b25TdHlsZSIsIlJlZ2lzdGVyQnV0dG9uU3R5bGUiLCJncmF5X2M0IiwiZ3JheV80OCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiaWNvbiIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBLElBQU1BLGNBQWMsR0FBQyxTQUFmQSxjQUFlLENBQUNDLEtBQUQsRUFBZUMsWUFBZixFQUFzQztBQUN6RCxNQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLFlBQVFELEtBQVI7QUFDSSxXQUFLLFdBQUw7QUFDRSxlQUFPRSw2REFBUCwrREFDc0JDLHVEQUFPLENBQUNDLFNBRDlCLEVBRVdELHVEQUFPLENBQUNDLFNBRm5COztBQUtGO0FBQ0ksZUFBT0YsNkRBQVAsK0RBQ29CQyx1REFBTyxDQUFDRSxLQUQ1QixFQUVTRix1REFBTyxDQUFDRSxLQUZqQjtBQVJSO0FBY0Q7O0FBQ0QsVUFBUUwsS0FBUjtBQUNFLFNBQUssV0FBTDtBQUNFLGFBQU9FLDZEQUFQLDZCQUNzQkMsdURBQU8sQ0FBQ0MsU0FEOUI7O0FBR0YsU0FBSyxPQUFMO0FBQ0EsYUFBT0YsNkRBQVA7O0FBR0E7QUFDSSxhQUFPQSw2REFBUCw2QkFDb0JDLHVEQUFPLENBQUNHLFdBRDVCO0FBVk47QUFjRCxDQS9CRCxDLENBaUNBOzs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBMkI7QUFDL0MsVUFBUUEsSUFBUjtBQUNFLFNBQUssT0FBTDtBQUNFLGFBQU9OLDZEQUFQOztBQUlGLFNBQUssUUFBTDtBQUNFLGFBQU9BLDZEQUFQOztBQUdGO0FBQ0ksYUFBTyxFQUFQO0FBWE47QUFhRCxDQWREOztBQWdCQSxJQUFNTyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsd09BYUosVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBakI7QUFBQSxDQWJJLEVBY1gsVUFBQ0QsS0FBRDtBQUFBLFNBQVdiLGNBQWMsQ0FBQ2EsS0FBSyxDQUFDWixLQUFOLElBQWUsRUFBaEIsRUFBb0JZLEtBQUssQ0FBQ1gsWUFBMUIsQ0FBekI7QUFBQSxDQWRXLEVBZVgsVUFBQ1csS0FBRDtBQUFBLFNBQVdMLGFBQWEsQ0FBQ0ssS0FBSyxDQUFDSixJQUFQLENBQXhCO0FBQUEsQ0FmVyxDQUFmO0tBQU1DLFM7QUFxQk4sSUFBTUssaUJBQWlCLEdBQUdaLDZEQUFILHNKQUtEQyx1REFBTyxDQUFDRyxXQUxQLENBQXZCO0FBYUEsSUFBTVMsbUJBQW1CLEdBQUdiLDZEQUFILG9LQUdIQyx1REFBTyxDQUFDYSxPQUhMLEVBTWRiLHVEQUFPLENBQUNjLE9BTk0sQ0FBekI7O0FBNEJBLElBQU1DLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLE9BUTNCO0FBQUEsTUFQSkMsUUFPSSxRQVBKQSxRQU9JO0FBQUEsTUFOSm5CLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEphLEtBS0ksUUFMSkEsS0FLSTtBQUFBLCtCQUpKWixZQUlJO0FBQUEsTUFKSkEsWUFJSSxrQ0FKVyxLQUlYO0FBQUEsTUFISm1CLElBR0ksUUFISkEsSUFHSTtBQUFBLHVCQUZKWixJQUVJO0FBQUEsTUFGSkEsSUFFSSwwQkFGRyxRQUVIO0FBQUEsTUFEREksS0FDQzs7QUFDSixzQkFDRSxxRUFBQyxTQUFELGtDQUFlQSxLQUFmO0FBQXNCLFNBQUssRUFBRVosS0FBN0I7QUFBb0MsU0FBSyxFQUFFYSxLQUEzQztBQUFrRCxnQkFBWSxFQUFFWixZQUFoRTtBQUE4RSxRQUFJLEVBQUlPLElBQXRGO0FBQUEsZUFDR1ksSUFESCxFQUVHRCxRQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FoQkQ7O01BQU1ELE07QUFrQlMsa0ZBQUFHLDRDQUFLLENBQUNDLElBQU4sQ0FBV0osTUFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvY2hlY2tsaXN0LmFjMzBiOGY4MzdiOTVmNzNhYWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCwge2Nzc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCJcclxuXHJcbi8vICog67KE7Yq8IOyDieyDgSDqtaztlZjquLBcclxuY29uc3QgZ2V0QnV0dG9uQ29sb3I9KGNvbG9yOnN0cmluZywgY29sb3JSZXZlcnNlOmJvb2xlYW4pPT57XHJcbiAgaWYgKGNvbG9yUmV2ZXJzZSkge1xyXG4gICAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgICAgIGNhc2UgXCJkYXJrX2N5YW5cIjpcclxuICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke3BhbGV0dGUuYmxhY2t9O1xyXG4gICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuICB9XHJcbiAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgY2FzZSBcImRhcmtfY3lhblwiOlxyXG4gICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICBgO1xyXG4gICAgY2FzZSBcIndoaXRlXCI6XHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYml0dGVyc3dlZXR9O1xyXG4gICAgYDtcclxuICB9XHJcbn07XHJcblxyXG4vLyAqIOuyhO2KvCDtgazquLAg6rWs7ZWY6riwXHJcbmNvbnN0IGdldEJ1dHRvblNpemUgPSAoc2l6ZTpcInNtYWxsXCIgfCBcIm1lZGl1bVwiKT0+e1xyXG4gIHN3aXRjaCAoc2l6ZSkge1xyXG4gICAgY2FzZSBcInNtYWxsXCI6XHJcbiAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgYDtcclxuICAgIGNhc2UgXCJtZWRpdW1cIjpcclxuICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGA7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5idXR0b248U3l0bGVkQnV0dG9ucHJvcHM+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aH07XHJcbiAgJHsocHJvcHMpID0+IGdldEJ1dHRvbkNvbG9yKHByb3BzLmNvbG9yIHx8IFwiXCIsIHByb3BzLmNvbG9yUmV2ZXJzZSl9O1xyXG4gICR7KHByb3BzKSA9PiBnZXRCdXR0b25TaXplKHByb3BzLnNpemUpfTtcclxuICBzdmcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgbm9ybWFsQnV0dG9uU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJpdHRlcnN3ZWV0fTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBSZWdpc3RlckJ1dHRvblN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAxNjFweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfYzR9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIFN5dGxlZEJ1dHRvbnByb3BzIHtcclxuICB3aWR0aDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIGNvbG9yUmV2ZXJzZTogYm9vbGVhbjtcclxuICBzaXplOiBcInNtYWxsXCIgfCBcIm1lZGl1bVwiXHJcbn1cclxuXHJcbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgY29sb3I/OiBcImRhcmtfY3lhblwiIHwgXCJ3aGl0ZVwiIHwgXCJiaXR0ZXJzd2VldFwiIHwgXCJhbWFyYW50aFwiO1xyXG4gIHdpZHRoPzogc3RyaW5nO1xyXG4gIGNvbG9yUmV2ZXJzZT86IGJvb2xlYW47XHJcbiAgaWNvbj86IEpTWC5FbGVtZW50O1xyXG4gIHNpemU/OiBcInNtYWxsXCIgfCBcIm1lZGl1bVwiXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8SVByb3BzPiA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY29sb3IsXHJcbiAgd2lkdGgsXHJcbiAgY29sb3JSZXZlcnNlID0gZmFsc2UsXHJcbiAgaWNvbixcclxuICBzaXplID0gXCJtZWRpdW1cIixcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgey4uLnByb3BzfSBjb2xvcj17Y29sb3J9IHdpZHRoPXt3aWR0aH0gY29sb3JSZXZlcnNlPXtjb2xvclJldmVyc2V9IHNpemUgPSB7c2l6ZX0+XHJcbiAgICAgIHtpY29ufVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIFxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQnV0dG9uKTsiXSwic291cmNlUm9vdCI6IiJ9