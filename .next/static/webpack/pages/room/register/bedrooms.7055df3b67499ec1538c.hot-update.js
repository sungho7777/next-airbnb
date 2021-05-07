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
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-bed-type-selector-wrapper{margin-top:28px;width:320px;}.register-room-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-counter{width:290px;margin-bottom:18px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_5__["default"].gray_48);
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
          lineNumber: 79,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: toggleOpend,
        styleType: "register",
        color: "white",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
        lineNumber: 97,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }, _this), opened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-counters",
      children: activedBedOptions.map(function (type) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsIlJlZ2lzdGVyUm9vbUJlZFR5cGVzIiwiYmVkcm9vbSIsInVzZVN0YXRlIiwib3BlbmVkIiwic2V0T3BlbmVkIiwiYWN0aXZlZEJlZE9wdGlvbnMiLCJzZXRBY3RpdmVkQmVkT3B0aW9ucyIsInRvdGFsQmVkc0NvdW50IiwidXNlTWVtbyIsInRvdGFsIiwiYmVkcyIsImZvckVhY2giLCJiZWQiLCJjb3VudCIsImxhc3RCZWRPcHRpb25zIiwiYmVkVHlwZXMiLCJmaWx0ZXIiLCJiZWRUeXBlIiwiaW5jbHVkZXMiLCJ0b2dnbGVPcGVuZCIsImlkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSwrYUFHV0MsdURBQU8sQ0FBQ0MsT0FIbkIsRUFLZ0JELHVEQUFPLENBQUNDLE9BTHhCLEVBYUZELHVEQUFPLENBQUNFLE9BYk4sQ0FBZjtLQUFNTCxTOztBQWlDTixJQUFNTSxvQkFBc0MsR0FBRyxTQUF6Q0Esb0JBQXlDLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDLEtBQUQsQ0FEb0I7QUFBQSxNQUNqREMsTUFEaUQ7QUFBQSxNQUN6Q0MsU0FEeUMsaUJBRXhEOzs7QUFGd0QsbUJBR05GLHNEQUFRLENBQVksRUFBWixDQUhGO0FBQUEsTUFHakRHLGlCQUhpRDtBQUFBLE1BRzlCQyxvQkFIOEIsa0JBU3hEOzs7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLHFEQUFPLENBQUMsWUFBSTtBQUMvQixRQUFJQyxLQUFLLEdBQUMsQ0FBVjtBQUNBUixXQUFPLENBQUNTLElBQVIsQ0FBYUMsT0FBYixDQUFxQixVQUFDQyxHQUFELEVBQU87QUFDeEJILFdBQUssSUFBSUcsR0FBRyxDQUFDQyxLQUFiO0FBQ0gsS0FGRDtBQUdBLFdBQU9KLEtBQVA7QUFDSCxHQU42QixFQU0zQixDQUFDUixPQUFELENBTjJCLENBQTlCLENBVndELENBaUJ4RDs7QUFDQSxNQUFNYSxjQUFjLEdBQUNOLHFEQUFPLENBQUMsWUFBSTtBQUM3QixXQUFPTyx3REFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxhQUFXLENBQUNaLGlCQUFpQixDQUFDYSxRQUFsQixDQUEyQkQsT0FBM0IsQ0FBWjtBQUFBLEtBQWhCLENBQVA7QUFDSCxHQUYyQixFQUV6QixDQUFDWixpQkFBRCxFQUFvQkosT0FBcEIsQ0FGeUIsQ0FBNUIsQ0FsQndELENBeUJ4RDs7QUFDQSxNQUFNa0IsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNZixTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBcEI7O0FBS0Esc0JBQ0kscUVBQUMsU0FBRDtBQUFBLDRCQUdJO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLGdDQUFiO0FBQUEscUJBQStDRixPQUFPLENBQUNtQixFQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsdUNBQWI7QUFBQSxzQ0FDUWIsY0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPSSxxRUFBQyxzREFBRDtBQUNJLGVBQU8sRUFBRVksV0FEYjtBQUVJLGlCQUFTLEVBQUMsVUFGZDtBQUdJLGFBQUssRUFBQyxPQUhWO0FBQUEsbUJBS0toQixNQUFNLElBQUksSUFMZixFQU1LLENBQUNBLE1BQUQsS0FDSUksY0FBYyxLQUFLLENBQW5CLEdBQXVCLFNBQXZCLEdBQWlDLFNBRHJDLENBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosRUFxQktKLE1BQU0saUJBQ0g7QUFBSyxlQUFTLEVBQUMseUNBQWY7QUFBQSw2QkFDSSxxRUFBQyx3REFBRDtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksZUFBTyxFQUFFVyxjQUZiO0FBR0ksb0JBQVksRUFBQyx3Q0FIakI7QUFJSSxhQUFLLEVBQUMsd0NBSlY7QUFLSSx1QkFBZSxFQUFFLENBQUMsVUFBRCxDQUxyQjtBQU1JLHFCQUFhLEVBQUUsS0FObkI7QUFPSSxnQkFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEsaUJBQUtmLG9CQUFvQiwwS0FDNUJELGlCQUQ0QixJQUUvQmdCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUZzQixHQUF6QjtBQUFBO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QlIsRUFxQ0twQixNQUFNLGlCQUNIO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsZ0JBQ0tFLGlCQUFpQixDQUFDbUIsR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRDtBQUFBLDRCQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURtQjtBQUFBLE9BQXRCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlESCxDQWhGRDs7R0FBTXpCLG9COztNQUFBQSxvQjtBQWtGU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9iZWRyb29tcy43MDU1ZGYzYjY3NDk5ZWMxNTM4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBiZWRUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHtCZWRUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvcm9vbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubGlgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjhweCAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXRvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV80OH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtY291bnRlcnMge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtY291bnRlciB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHN7XHJcbiAgICBiZWRyb29tOntpZDpudW1iZXI7IGJlZHM6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdfTtcclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQmVkVHlwZXM6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2JlZHJvb219KT0+e1xyXG4gICAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vICog7ISg7YOd65CcIOy5qOuMgCDsmLXshZjrk6RcclxuICAgIGNvbnN0IFthY3RpdmVkQmVkT3B0aW9ucywgc2V0QWN0aXZlZEJlZE9wdGlvbnNdID0gdXNlU3RhdGU8QmVkVHlwZVtdPihbXSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vICog7Lmo64yAIOqwnOyImCDstJ3tlalcclxuICAgIGNvbnN0IHRvdGFsQmVkc0NvdW50ID0gdXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGxldCB0b3RhbD0wO1xyXG4gICAgICAgIGJlZHJvb20uYmVkcy5mb3JFYWNoKChiZWQpPT57XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGJlZC5jb3VudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9LCBbYmVkcm9vbV0pO1xyXG4gICAgLy8gKiDrgqjsnYAg7Lmo64yAIOyYteyFmOuTpFxyXG4gICAgY29uc3QgbGFzdEJlZE9wdGlvbnM9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIHJldHVybiBiZWRUeXBlcy5maWx0ZXIoKGJlZFR5cGUpPT4hYWN0aXZlZEJlZE9wdGlvbnMuaW5jbHVkZXMoYmVkVHlwZSkpO1xyXG4gICAgfSwgW2FjdGl2ZWRCZWRPcHRpb25zLCBiZWRyb29tXSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gKiDsuajsi6Qg7Jyg7ZiVIOyXtOqzoCDri6vquLBcclxuICAgIGNvbnN0IHRvZ2dsZU9wZW5kID0gKCkgPT4gc2V0T3BlbmVkKCFvcGVuZWQpO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tXCI+e2JlZHJvb20uaWR967KIIOy5qOyLpDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20tY291bnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOy5qOuMgCB7dG90YWxCZWRzQ291bnR96rCcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3BlbmVkICYmIFwi7JmE66OMXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFvcGVuZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsQmVkc0NvdW50ID09PSAwID8gXCLsuajrjIAg7LaU6rCA7ZWY6riwXCI6XCLsuajrjIAg7IiY7KCV7ZWY6riwXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhc3RCZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e1tcIuuLpOuluCDsuajrjIAg7LaU6rCAXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0QWN0aXZlZEJlZE9wdGlvbnMoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aXZlZEJlZE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyBCZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtvcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZWRCZWRPcHRpb25zLm1hcCgodHlwZSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOyJdLCJzb3VyY2VSb290IjoiIn0=