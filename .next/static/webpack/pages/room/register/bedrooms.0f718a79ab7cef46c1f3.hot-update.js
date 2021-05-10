webpackHotUpdate_N_E("pages/room/register/bedrooms",{

/***/ "./components/room/register/RegisterRoomBedTypes.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomBedTypes.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");



var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomBedTypes.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "RegisterRoomBedTypes__Container",
  componentId: "e0v542-0"
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-bed-type-selector-wrapper{margin-top:28px;width:320px;}.register-room-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-counter{width:290px;margin-bottom:18px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_48);
_c = Container;

var RegisterRoomBedTypes = function RegisterRoomBedTypes(_ref) {
  _s();

  var bedroom = _ref.bedroom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      opened = _useState[0],
      setOpened = _useState[1]; // * 선택된 침대 옵션들


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      activedBedOptions = _useState2[0],
      setActivedBedOptions = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(); // * 침대 개수 총합

  var totalBedsCount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var total = 0;
    bedroom.beds.forEach(function (bed) {
      total += bed.count;
    });
    return total;
  }, [bedroom]); // * 남은 침대 옵션들

  var lastBedOptions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return _lib_staticData__WEBPACK_IMPORTED_MODULE_5__["bedTypes"].filter(function (bedType) {
      return !activedBedOptions.includes(bedType);
    });
  }, [activedBedOptions, bedroom]); // * 침실 유형 열고 닫기

  var toggleOpend = function toggleOpend() {
    return setOpened(!opened);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "register-room-bed-type-bedroom-texts",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom",
          children: [bedroom.id, "\uBC88 \uCE68\uC2E4"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: toggleOpend,
        styleType: "register",
        color: "white",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this), opened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "register",
        options: lastBedOptions,
        defaultValue: "\uB2E4\uB978 \uCE68\uB300 \uCD94\uAC00",
        value: "\uB2E4\uB978 \uCE68\uB300 \uCD94\uAC00",
        disabledOptions: ["다른 침대 추가"],
        useValidation: false,
        onChange: function onChange(e) {
          return setActivedBedOptions([].concat(Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(activedBedOptions), [e.target.value]));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, _this), opened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-counters",
      children: activedBedOptions.map(function (type) {
        var _bedroom$beds$find;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "register-room-bed-type-counter",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
            label: type,
            value: ((_bedroom$beds$find = bedroom.beds.find(function (bed) {
              return bed.type === type;
            })) === null || _bedroom$beds$find === void 0 ? void 0 : _bedroom$beds$find.count) || 0,
            onChange: function onChange(value) {
              return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBedTypeCount({
                bedroomId: bedroom.id,
                type: type,
                count: number
              }));
            }
          }, type, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedTypes, "oRbqfdhdAQu8rQ/jaeteQnJJy1E=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c2 = RegisterRoomBedTypes;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBedTypes);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomBedTypes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsIlJlZ2lzdGVyUm9vbUJlZFR5cGVzIiwiYmVkcm9vbSIsInVzZVN0YXRlIiwib3BlbmVkIiwic2V0T3BlbmVkIiwiYWN0aXZlZEJlZE9wdGlvbnMiLCJzZXRBY3RpdmVkQmVkT3B0aW9ucyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b3RhbEJlZHNDb3VudCIsInVzZU1lbW8iLCJ0b3RhbCIsImJlZHMiLCJmb3JFYWNoIiwiYmVkIiwiY291bnQiLCJsYXN0QmVkT3B0aW9ucyIsImJlZFR5cGVzIiwiZmlsdGVyIiwiYmVkVHlwZSIsImluY2x1ZGVzIiwidG9nZ2xlT3BlbmQiLCJpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInR5cGUiLCJmaW5kIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldEJlZFR5cGVDb3VudCIsImJlZHJvb21JZCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSwrYUFHV0MsdURBQU8sQ0FBQ0MsT0FIbkIsRUFLZ0JELHVEQUFPLENBQUNDLE9BTHhCLEVBYUZELHVEQUFPLENBQUNFLE9BYk4sQ0FBZjtLQUFNTCxTOztBQWlDTixJQUFNTSxvQkFBc0MsR0FBRyxTQUF6Q0Esb0JBQXlDLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDLEtBQUQsQ0FEb0I7QUFBQSxNQUNqREMsTUFEaUQ7QUFBQSxNQUN6Q0MsU0FEeUMsaUJBRXhEOzs7QUFGd0QsbUJBR05GLHNEQUFRLENBQVksRUFBWixDQUhGO0FBQUEsTUFHakRHLGlCQUhpRDtBQUFBLE1BRzlCQyxvQkFIOEI7O0FBTXhELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUIsQ0FOd0QsQ0FTeEQ7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxxREFBTyxDQUFDLFlBQUk7QUFDL0IsUUFBSUMsS0FBSyxHQUFDLENBQVY7QUFDQVYsV0FBTyxDQUFDVyxJQUFSLENBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsR0FBRCxFQUFPO0FBQ3hCSCxXQUFLLElBQUlHLEdBQUcsQ0FBQ0MsS0FBYjtBQUNILEtBRkQ7QUFHQSxXQUFPSixLQUFQO0FBQ0gsR0FONkIsRUFNM0IsQ0FBQ1YsT0FBRCxDQU4yQixDQUE5QixDQVZ3RCxDQWlCeEQ7O0FBQ0EsTUFBTWUsY0FBYyxHQUFDTixxREFBTyxDQUFDLFlBQUk7QUFDN0IsV0FBT08sd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFDQyxPQUFEO0FBQUEsYUFBVyxDQUFDZCxpQkFBaUIsQ0FBQ2UsUUFBbEIsQ0FBMkJELE9BQTNCLENBQVo7QUFBQSxLQUFoQixDQUFQO0FBQ0gsR0FGMkIsRUFFekIsQ0FBQ2QsaUJBQUQsRUFBb0JKLE9BQXBCLENBRnlCLENBQTVCLENBbEJ3RCxDQXlCeEQ7O0FBQ0EsTUFBTW9CLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTWpCLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFwQjs7QUFLQSxzQkFDSSxxRUFBQyxTQUFEO0FBQUEsNEJBR0k7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsc0NBQWY7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsZ0NBQWI7QUFBQSxxQkFBK0NGLE9BQU8sQ0FBQ3FCLEVBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUcsbUJBQVMsRUFBQyx1Q0FBYjtBQUFBLHNDQUNRYixjQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JLHFFQUFDLHNEQUFEO0FBQ0ksZUFBTyxFQUFFWSxXQURiO0FBRUksaUJBQVMsRUFBQyxVQUZkO0FBR0ksYUFBSyxFQUFDLE9BSFY7QUFBQSxtQkFLS2xCLE1BQU0sSUFBSSxJQUxmLEVBTUssQ0FBQ0EsTUFBRCxLQUNJTSxjQUFjLEtBQUssQ0FBbkIsR0FBdUIsU0FBdkIsR0FBaUMsU0FEckMsQ0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixFQXFCS04sTUFBTSxpQkFDSDtBQUFLLGVBQVMsRUFBQyx5Q0FBZjtBQUFBLDZCQUNJLHFFQUFDLHdEQUFEO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxlQUFPLEVBQUVhLGNBRmI7QUFHSSxvQkFBWSxFQUFDLHdDQUhqQjtBQUlJLGFBQUssRUFBQyx3Q0FKVjtBQUtJLHVCQUFlLEVBQUUsQ0FBQyxVQUFELENBTHJCO0FBTUkscUJBQWEsRUFBRSxLQU5uQjtBQU9JLGdCQUFRLEVBQUUsa0JBQUNPLENBQUQ7QUFBQSxpQkFBS2pCLG9CQUFvQiwwS0FDNUJELGlCQUQ0QixJQUUvQmtCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUZzQixHQUF6QjtBQUFBO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QlIsRUFxQ0t0QixNQUFNLGlCQUNIO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsZ0JBQ0tFLGlCQUFpQixDQUFDcUIsR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRDtBQUFBOztBQUFBLDRCQUNuQjtBQUFLLG1CQUFTLEVBQUMsZ0NBQWY7QUFBQSxpQ0FDSSxxRUFBQyxTQUFEO0FBQ0ksaUJBQUssRUFBRUEsSUFEWDtBQUVJLGlCQUFLLEVBQUUsdUJBQUExQixPQUFPLENBQUNXLElBQVIsQ0FBYWdCLElBQWIsQ0FBa0IsVUFBQ2QsR0FBRDtBQUFBLHFCQUFPQSxHQUFHLENBQUNhLElBQUosS0FBV0EsSUFBbEI7QUFBQSxhQUFsQiwyRUFBMkNaLEtBQTNDLEtBQW9ELENBRi9EO0FBSUksb0JBQVEsRUFBRSxrQkFBQ1UsS0FBRDtBQUFBLHFCQUNObEIsUUFBUSxDQUNKc0IsdUVBQW1CLENBQUNDLGVBQXBCLENBQW9DO0FBQ2hDQyx5QkFBUyxFQUFDOUIsT0FBTyxDQUFDcUIsRUFEYztBQUVoQ0ssb0JBQUksRUFBSkEsSUFGZ0M7QUFHaENaLHFCQUFLLEVBQUNpQjtBQUgwQixlQUFwQyxDQURJLENBREY7QUFBQTtBQUpkLGFBR1NMLElBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQXFEQSxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURtQjtBQUFBLE9BQXRCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThESCxDQTdGRDs7R0FBTTNCLG9CO1VBTWVRLHVEOzs7TUFOZlIsb0I7QUErRlNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXMuMGY3MThhNzlhYjdjZWY0NmMxZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZU1lbW8sIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYmVkVHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7QmVkVHlwZX0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3Jvb21cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI4cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbSB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJzIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXIge1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3Bze1xyXG4gICAgYmVkcm9vbTp7aWQ6bnVtYmVyOyBiZWRzOnt0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXX07XHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtiZWRyb29tfSk9PntcclxuICAgIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyAqIOyEoO2DneuQnCDsuajrjIAg7Ji17IWY65OkXHJcbiAgICBjb25zdCBbYWN0aXZlZEJlZE9wdGlvbnMsIHNldEFjdGl2ZWRCZWRPcHRpb25zXSA9IHVzZVN0YXRlPEJlZFR5cGVbXT4oW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIC8vICog7Lmo64yAIOqwnOyImCDstJ3tlalcclxuICAgIGNvbnN0IHRvdGFsQmVkc0NvdW50ID0gdXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGxldCB0b3RhbD0wO1xyXG4gICAgICAgIGJlZHJvb20uYmVkcy5mb3JFYWNoKChiZWQpPT57XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGJlZC5jb3VudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9LCBbYmVkcm9vbV0pO1xyXG4gICAgLy8gKiDrgqjsnYAg7Lmo64yAIOyYteyFmOuTpFxyXG4gICAgY29uc3QgbGFzdEJlZE9wdGlvbnM9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIHJldHVybiBiZWRUeXBlcy5maWx0ZXIoKGJlZFR5cGUpPT4hYWN0aXZlZEJlZE9wdGlvbnMuaW5jbHVkZXMoYmVkVHlwZSkpO1xyXG4gICAgfSwgW2FjdGl2ZWRCZWRPcHRpb25zLCBiZWRyb29tXSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gKiDsuajsi6Qg7Jyg7ZiVIOyXtOqzoCDri6vquLBcclxuICAgIGNvbnN0IHRvZ2dsZU9wZW5kID0gKCkgPT4gc2V0T3BlbmVkKCFvcGVuZWQpO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tXCI+e2JlZHJvb20uaWR967KIIOy5qOyLpDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20tY291bnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOy5qOuMgCB7dG90YWxCZWRzQ291bnR96rCcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3BlbmVkICYmIFwi7JmE66OMXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFvcGVuZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsQmVkc0NvdW50ID09PSAwID8gXCLsuajrjIAg7LaU6rCA7ZWY6riwXCI6XCLsuajrjIAg7IiY7KCV7ZWY6riwXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhc3RCZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e1tcIuuLpOuluCDsuajrjIAg7LaU6rCAXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0QWN0aXZlZEJlZE9wdGlvbnMoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aXZlZEJlZE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyBCZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtvcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZWRCZWRPcHRpb25zLm1hcCgodHlwZSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJcIiBrZXk9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiZWRyb29tLmJlZHMuZmluZCgoYmVkKT0+YmVkLnR5cGU9PT10eXBlKT8uY291bnQgfHwgMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QmVkVHlwZUNvdW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWRyb29tSWQ6YmVkcm9vbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Om51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOyJdLCJzb3VyY2VSb290IjoiIn0=