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
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");



var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomBedTypes.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "RegisterRoomBedTypes__Container",
  componentId: "e0v542-0"
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-bed-type-selector-wrapper{margin-top:28px;width:320px;}.register-room-bed-type-counters{}.register-room-bed-type-counter{}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_48);
_c = Container;

var RegisterRoomBedTypes = function RegisterRoomBedTypes(_ref) {
  _s();

  var bedroom = _ref.bedroom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      opened = _useState[0],
      setOpened = _useState[1]; // * 선택된 침대 옵션들


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      activedBedOptions = _useState2[0],
      setActivedBedOptions = _useState2[1]; // * 침대 개수 총합


  var totalBedsCount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var total = 0;
    bedroom.beds.forEach(function (bed) {
      total += bed.count;
    });
    return total;
  }, [bedroom]); // * 남은 침대 옵션들

  var lastBedOptions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return _lib_staticData__WEBPACK_IMPORTED_MODULE_4__["bedTypes"].filter(function (bedType) {
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
          lineNumber: 75,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: toggleOpend,
        styleType: "register",
        color: "white",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this), opened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        lineNumber: 93,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedTypes, "McuLJt5/BIKkkm9MS2g1duyJAdk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsIlJlZ2lzdGVyUm9vbUJlZFR5cGVzIiwiYmVkcm9vbSIsInVzZVN0YXRlIiwib3BlbmVkIiwic2V0T3BlbmVkIiwiYWN0aXZlZEJlZE9wdGlvbnMiLCJzZXRBY3RpdmVkQmVkT3B0aW9ucyIsInRvdGFsQmVkc0NvdW50IiwidXNlTWVtbyIsInRvdGFsIiwiYmVkcyIsImZvckVhY2giLCJiZWQiLCJjb3VudCIsImxhc3RCZWRPcHRpb25zIiwiYmVkVHlwZXMiLCJmaWx0ZXIiLCJiZWRUeXBlIiwiaW5jbHVkZXMiLCJ0b2dnbGVPcGVuZCIsImlkIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLG9YQUdXQyx1REFBTyxDQUFDQyxPQUhuQixFQUtnQkQsdURBQU8sQ0FBQ0MsT0FMeEIsRUFhRkQsdURBQU8sQ0FBQ0UsT0FiTixDQUFmO0tBQU1MLFM7O0FBNkJOLElBQU1NLG9CQUFzQyxHQUFHLFNBQXpDQSxvQkFBeUMsT0FBYTtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQUMsS0FBRCxDQURvQjtBQUFBLE1BQ2pEQyxNQURpRDtBQUFBLE1BQ3pDQyxTQUR5QyxpQkFFeEQ7OztBQUZ3RCxtQkFHTkYsc0RBQVEsQ0FBWSxFQUFaLENBSEY7QUFBQSxNQUdqREcsaUJBSGlEO0FBQUEsTUFHOUJDLG9CQUg4QixrQkFTeEQ7OztBQUNBLE1BQU1DLGNBQWMsR0FBR0MscURBQU8sQ0FBQyxZQUFJO0FBQy9CLFFBQUlDLEtBQUssR0FBQyxDQUFWO0FBQ0FSLFdBQU8sQ0FBQ1MsSUFBUixDQUFhQyxPQUFiLENBQXFCLFVBQUNDLEdBQUQsRUFBTztBQUN4QkgsV0FBSyxJQUFJRyxHQUFHLENBQUNDLEtBQWI7QUFDSCxLQUZEO0FBR0EsV0FBT0osS0FBUDtBQUNILEdBTjZCLEVBTTNCLENBQUNSLE9BQUQsQ0FOMkIsQ0FBOUIsQ0FWd0QsQ0FpQnhEOztBQUNBLE1BQU1hLGNBQWMsR0FBQ04scURBQU8sQ0FBQyxZQUFJO0FBQzdCLFdBQU9PLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQ0MsT0FBRDtBQUFBLGFBQVcsQ0FBQ1osaUJBQWlCLENBQUNhLFFBQWxCLENBQTJCRCxPQUEzQixDQUFaO0FBQUEsS0FBaEIsQ0FBUDtBQUNILEdBRjJCLEVBRXpCLENBQUNaLGlCQUFELEVBQW9CSixPQUFwQixDQUZ5QixDQUE1QixDQWxCd0QsQ0F5QnhEOztBQUNBLE1BQU1rQixXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU1mLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFwQjs7QUFLQSxzQkFDSSxxRUFBQyxTQUFEO0FBQUEsNEJBR0k7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsc0NBQWY7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsZ0NBQWI7QUFBQSxxQkFBK0NGLE9BQU8sQ0FBQ21CLEVBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUcsbUJBQVMsRUFBQyx1Q0FBYjtBQUFBLHNDQUNRYixjQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JLHFFQUFDLHNEQUFEO0FBQ0ksZUFBTyxFQUFFWSxXQURiO0FBRUksaUJBQVMsRUFBQyxVQUZkO0FBR0ksYUFBSyxFQUFDLE9BSFY7QUFBQSxtQkFLS2hCLE1BQU0sSUFBSSxJQUxmLEVBTUssQ0FBQ0EsTUFBRCxLQUNJSSxjQUFjLEtBQUssQ0FBbkIsR0FBdUIsU0FBdkIsR0FBaUMsU0FEckMsQ0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixFQXFCS0osTUFBTSxpQkFDSDtBQUFLLGVBQVMsRUFBQyx5Q0FBZjtBQUFBLDZCQUNJLHFFQUFDLHdEQUFEO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxlQUFPLEVBQUVXLGNBRmI7QUFHSSxvQkFBWSxFQUFDLHdDQUhqQjtBQUlJLGFBQUssRUFBQyx3Q0FKVjtBQUtJLHVCQUFlLEVBQUUsQ0FBQyxVQUFELENBTHJCO0FBTUkscUJBQWEsRUFBRSxLQU5uQjtBQU9JLGdCQUFRLEVBQUUsa0JBQUNPLENBQUQ7QUFBQSxpQkFBS2Ysb0JBQW9CLDBLQUM1QkQsaUJBRDRCLElBRS9CZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBRnNCLEdBQXpCO0FBQUE7QUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdDSCxDQXZFRDs7R0FBTXZCLG9COztNQUFBQSxvQjtBQXlFU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9iZWRyb29tcy5hMDdkMDg2Zjc0NGYwMDBiNWJmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBiZWRUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHtCZWRUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvcm9vbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubGlgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjhweCAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXRvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV80OH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtY291bnRlcnMge1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyIHtcclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3Bze1xyXG4gICAgYmVkcm9vbTp7aWQ6bnVtYmVyOyBiZWRzOnt0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXX07XHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtiZWRyb29tfSk9PntcclxuICAgIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyAqIOyEoO2DneuQnCDsuajrjIAg7Ji17IWY65OkXHJcbiAgICBjb25zdCBbYWN0aXZlZEJlZE9wdGlvbnMsIHNldEFjdGl2ZWRCZWRPcHRpb25zXSA9IHVzZVN0YXRlPEJlZFR5cGVbXT4oW10pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAqIOy5qOuMgCDqsJzsiJgg7LSd7ZWpXHJcbiAgICBjb25zdCB0b3RhbEJlZHNDb3VudCA9IHVzZU1lbW8oKCk9PntcclxuICAgICAgICBsZXQgdG90YWw9MDtcclxuICAgICAgICBiZWRyb29tLmJlZHMuZm9yRWFjaCgoYmVkKT0+e1xyXG4gICAgICAgICAgICB0b3RhbCArPSBiZWQuY291bnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfSwgW2JlZHJvb21dKTtcclxuICAgIC8vICog64Ko7J2AIOy5qOuMgCDsmLXshZjrk6RcclxuICAgIGNvbnN0IGxhc3RCZWRPcHRpb25zPXVzZU1lbW8oKCk9PntcclxuICAgICAgICByZXR1cm4gYmVkVHlwZXMuZmlsdGVyKChiZWRUeXBlKT0+IWFjdGl2ZWRCZWRPcHRpb25zLmluY2x1ZGVzKGJlZFR5cGUpKTtcclxuICAgIH0sIFthY3RpdmVkQmVkT3B0aW9ucywgYmVkcm9vbV0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vICog7Lmo7IukIOycoO2YlSDsl7Tqs6Ag64ur6riwXHJcbiAgICBjb25zdCB0b2dnbGVPcGVuZCA9ICgpID0+IHNldE9wZW5lZCghb3BlbmVkKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbS10ZXh0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbVwiPntiZWRyb29tLmlkfeuyiCDsuajsi6Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsuajrjIAge3RvdGFsQmVkc0NvdW50feqwnFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVuZH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wZW5lZCAmJiBcIuyZhOujjFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHshb3BlbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b3RhbEJlZHNDb3VudCA9PT0gMCA/IFwi7Lmo64yAIOy2lOqwgO2VmOq4sFwiOlwi7Lmo64yAIOyImOygle2VmOq4sFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge29wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYXN0QmVkT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIuuLpOuluCDsuajrjIAg7LaU6rCAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtbXCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEFjdGl2ZWRCZWRPcHRpb25zKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFjdGl2ZWRCZWRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgYXMgQmVkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOyJdLCJzb3VyY2VSb290IjoiIn0=