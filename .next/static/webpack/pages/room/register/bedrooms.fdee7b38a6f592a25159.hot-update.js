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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");



var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomBedTypes.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "RegisterRoomBedTypes__Container",
  componentId: "e0v542-0"
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-public-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-selector-wrapper{margin-top:28px;width:320px;}.register-room-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-counter{width:290px;margin-bottom:18px;}.register-room-bed-type-bedroom-counts{font-size:19px;color:", ";max-width:240px;word-break:keep-all;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_48, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_76);
_c = Container;

var RegisterRoomBedTypes = function RegisterRoomBedTypes(_ref) {
  _s();

  var bedroom = _ref.bedroom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      opened = _useState[0],
      setOpened = _useState[1];

  var initialBedOptions = bedroom.beds.map(function (bed) {
    return bed.type;
  }); // * 선택된 침대 옵션들

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialBedOptions),
      activedBedOptions = _useState2[0],
      setActivedBedOptions = _useState2[1]; // * 남은 침대 옵션들


  var lastBedOptions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return _lib_staticData__WEBPACK_IMPORTED_MODULE_5__["bedTypes"].filter(function (bedType) {
      return !activedBedOptions.includes(bedType);
    });
  }, [activedBedOptions, bedroom]); // * 침대 개수 총합

  var totalBedsCount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var total = 0;
    bedroom.beds.forEach(function (bed) {
      total += bed.count;
    });
    return total;
  }, [bedroom]); //* 침실 유형 열고 닫기

  var toggleOpened = function toggleOpened() {
    return setOpened(!opened);
  }; //* 침실 침대 갯수 변경시


  var onChangeBedTypeCount = function onChangeBedTypeCount(value, type) {
    return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBedTypeCount({
      bedroomId: bedroom.id,
      type: type,
      count: value
    }));
  }; // * 침대 종류 텍스트


  var bedsText = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var texts = bedroom.beds.map(function (bed) {
      return "".concat(bed.type, " ").concat(bed.count, "\uAC1C");
    });
    return texts.join(",");
  }, [bedroom]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom",
          children: [bedroom.id, "\uBC88 \uCE68\uC2E4"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 46
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: bedsText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: toggleOpened,
        styleType: "register",
        color: "white",
        width: "161px",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, _this), opened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-selector-wrapper",
      children: [activedBedOptions.map(function (type) {
        var _bedroom$beds$find;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "register-room-bed-type-counter",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Counter__WEBPACK_IMPORTED_MODULE_9__["default"], {
            label: type,
            value: ((_bedroom$beds$find = bedroom.beds.find(function (bed) {
              return bed.type === type;
            })) === null || _bedroom$beds$find === void 0 ? void 0 : _bedroom$beds$find.count) || 0,
            onChange: function onChange(value) {
              onChangeBedTypeCount(value, type);
            }
          }, type, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 29
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
        lineNumber: 138,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedTypes, "RJg7gzcDGR4UdUwHq6pW1huvykA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21CZWRUeXBlcyIsImJlZHJvb20iLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsImluaXRpYWxCZWRPcHRpb25zIiwiYmVkcyIsIm1hcCIsImJlZCIsInR5cGUiLCJhY3RpdmVkQmVkT3B0aW9ucyIsInNldEFjdGl2ZWRCZWRPcHRpb25zIiwibGFzdEJlZE9wdGlvbnMiLCJ1c2VNZW1vIiwiYmVkVHlwZXMiLCJmaWx0ZXIiLCJiZWRUeXBlIiwiaW5jbHVkZXMiLCJ0b3RhbEJlZHNDb3VudCIsInRvdGFsIiwiZm9yRWFjaCIsImNvdW50IiwidG9nZ2xlT3BlbmVkIiwib25DaGFuZ2VCZWRUeXBlQ291bnQiLCJ2YWx1ZSIsImRpc3BhdGNoIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldEJlZFR5cGVDb3VudCIsImJlZHJvb21JZCIsImlkIiwiYmVkc1RleHQiLCJ0ZXh0cyIsImpvaW4iLCJ1c2VEaXNwYXRjaCIsImZpbmQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLDBsQkFHV0MsdURBQU8sQ0FBQ0MsT0FIbkIsRUFLZ0JELHVEQUFPLENBQUNDLE9BTHhCLEVBYUZELHVEQUFPLENBQUNFLE9BYk4sRUFrQ0ZGLHVEQUFPLENBQUNHLE9BbENOLENBQWY7S0FBTU4sUzs7QUE0Q04sSUFBTU8sb0JBQXNDLEdBQUcsU0FBekNBLG9CQUF5QyxPQUFhO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUM1QkMsc0RBQVEsQ0FBQyxLQUFELENBRG9CO0FBQUEsTUFDakRDLE1BRGlEO0FBQUEsTUFDekNDLFNBRHlDOztBQUd4RCxNQUFNQyxpQkFBaUIsR0FBR0osT0FBTyxDQUFDSyxJQUFSLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBYjtBQUFBLEdBQWpCLENBQTFCLENBSHdELENBS3hEOztBQUx3RCxtQkFNTlAsc0RBQVEsQ0FDdERHLGlCQURzRCxDQU5GO0FBQUEsTUFNakRLLGlCQU5pRDtBQUFBLE1BTTlCQyxvQkFOOEIsa0JBVXhEOzs7QUFDQSxNQUFNQyxjQUFjLEdBQUNDLHFEQUFPLENBQUMsWUFBSTtBQUM3QixXQUFPQyx3REFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxhQUFXLENBQUNOLGlCQUFpQixDQUFDTyxRQUFsQixDQUEyQkQsT0FBM0IsQ0FBWjtBQUFBLEtBQWhCLENBQVA7QUFDSCxHQUYyQixFQUV6QixDQUFDTixpQkFBRCxFQUFvQlQsT0FBcEIsQ0FGeUIsQ0FBNUIsQ0FYd0QsQ0FleEQ7O0FBQ0EsTUFBTWlCLGNBQWMsR0FBR0wscURBQU8sQ0FBQyxZQUFJO0FBQy9CLFFBQUlNLEtBQUssR0FBQyxDQUFWO0FBQ0FsQixXQUFPLENBQUNLLElBQVIsQ0FBYWMsT0FBYixDQUFxQixVQUFDWixHQUFELEVBQU87QUFDeEJXLFdBQUssSUFBSVgsR0FBRyxDQUFDYSxLQUFiO0FBQ0gsS0FGRDtBQUdBLFdBQU9GLEtBQVA7QUFDSCxHQU42QixFQU0zQixDQUFDbEIsT0FBRCxDQU4yQixDQUE5QixDQWhCd0QsQ0F3QnhEOztBQUNBLE1BQU1xQixZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1sQixTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBckIsQ0F6QndELENBMkJ4RDs7O0FBQ0EsTUFBTW9CLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFnQmYsSUFBaEI7QUFBQSxXQUMzQmdCLFFBQVEsQ0FDTkMsdUVBQW1CLENBQUNDLGVBQXBCLENBQW9DO0FBQ2xDQyxlQUFTLEVBQUUzQixPQUFPLENBQUM0QixFQURlO0FBRWxDcEIsVUFBSSxFQUFKQSxJQUZrQztBQUdsQ1ksV0FBSyxFQUFFRztBQUgyQixLQUFwQyxDQURNLENBRG1CO0FBQUEsR0FBN0IsQ0E1QndELENBcUN4RDs7O0FBQ0EsTUFBTU0sUUFBUSxHQUFHakIscURBQU8sQ0FBQyxZQUFJO0FBQ3pCLFFBQU1rQixLQUFLLEdBQUM5QixPQUFPLENBQUNLLElBQVIsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxHQUFEO0FBQUEsdUJBQVlBLEdBQUcsQ0FBQ0MsSUFBaEIsY0FBd0JELEdBQUcsQ0FBQ2EsS0FBNUI7QUFBQSxLQUFqQixDQUFaO0FBQ0EsV0FBT1UsS0FBSyxDQUFDQyxJQUFOLENBQVcsR0FBWCxDQUFQO0FBQ0gsR0FIdUIsRUFHckIsQ0FBQy9CLE9BQUQsQ0FIcUIsQ0FBeEI7QUFLQSxNQUFNd0IsUUFBUSxHQUFHUSwrREFBVyxFQUE1QjtBQUVBLHNCQUNJLHFFQUFDLFNBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLGdDQUFiO0FBQUEscUJBQStDaEMsT0FBTyxDQUFDNEIsRUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLHVDQUFiO0FBQUEsc0NBQ1FYLGNBRFIsMEJBQ3lCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQU1JO0FBQUEsb0JBQUlZO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVNJLHFFQUFDLHNEQUFEO0FBQ0ksZUFBTyxFQUFFUixZQURiO0FBRUksaUJBQVMsRUFBQyxVQUZkO0FBR0ksYUFBSyxFQUFDLE9BSFY7QUFJSSxhQUFLLEVBQUMsT0FKVjtBQUFBLG1CQUtTbkIsTUFBTSxJQUFJLElBTG5CLEVBTVMsQ0FBQ0EsTUFBRCxLQUFZZSxjQUFjLEtBQUssQ0FBbkIsR0FBdUIsU0FBdkIsR0FBbUMsU0FBL0MsQ0FOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQW9CS2YsTUFBTSxpQkFDSDtBQUFLLGVBQVMsRUFBQyx5Q0FBZjtBQUFBLGlCQUNLTyxpQkFBaUIsQ0FBQ0gsR0FBbEIsQ0FBc0IsVUFBQ0UsSUFBRDtBQUFBOztBQUFBLDRCQUNuQjtBQUFLLG1CQUFTLEVBQUMsZ0NBQWY7QUFBQSxpQ0FDSSxxRUFBQyx1REFBRDtBQUNJLGlCQUFLLEVBQUVBLElBRFg7QUFFSSxpQkFBSyxFQUNELHVCQUFBUixPQUFPLENBQUNLLElBQVIsQ0FBYTRCLElBQWIsQ0FBa0IsVUFBQzFCLEdBQUQ7QUFBQSxxQkFBT0EsR0FBRyxDQUFDQyxJQUFKLEtBQWFBLElBQXBCO0FBQUEsYUFBbEIsMkVBQTZDWSxLQUE3QyxLQUFzRCxDQUg5RDtBQU1JLG9CQUFRLEVBQUUsa0JBQUNHLEtBQUQsRUFBVztBQUNqQkQsa0NBQW9CLENBQUNDLEtBQUQsRUFBUWYsSUFBUixDQUFwQjtBQUNIO0FBUkwsYUFLU0EsSUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBcURBLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBdEIsQ0FETCxlQWVJLHFFQUFDLHlEQUFEO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxlQUFPLEVBQUVHLGNBRmI7QUFHSSxvQkFBWSxFQUFDLHdDQUhqQjtBQUlJLGFBQUssRUFBQyx3Q0FKVjtBQUtJLHVCQUFlLEVBQUUsQ0FBQyxVQUFELENBTHJCO0FBTUkscUJBQWEsRUFBRSxLQU5uQjtBQU9JLGdCQUFRLEVBQUUsa0JBQUN1QixDQUFEO0FBQUEsaUJBQ054QixvQkFBb0IsMEtBQ2JELGlCQURhLElBRWhCeUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNaLEtBRk8sR0FEZDtBQUFBO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNESCxDQW5HRDs7R0FBTXhCLG9CO1VBMkNlaUMsdUQ7OztNQTNDZmpDLG9CO0FBcUdTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JlZHJvb21zLmZkZWU3YjM4YTZmNTkyYTI1MTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGJlZFR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQge0JlZFR5cGV9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9yb29tXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbW1vbi9CdXR0b25cIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9Db3VudGVyXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubGlgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjhweCAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXRvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV80OH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXB1YmxpYy1iZWQtdHlwZS1jb3VudGVycyB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJzIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXIge1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbS1jb3VudHMge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3Bze1xyXG4gICAgYmVkcm9vbTp7aWQ6bnVtYmVyOyBiZWRzOnt0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXX07XHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtiZWRyb29tfSk9PntcclxuICAgIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGluaXRpYWxCZWRPcHRpb25zID0gYmVkcm9vbS5iZWRzLm1hcCgoYmVkKSA9PiBiZWQudHlwZSk7XHJcblxyXG4gICAgLy8gKiDshKDtg53rkJwg7Lmo64yAIOyYteyFmOuTpFxyXG4gICAgY29uc3QgW2FjdGl2ZWRCZWRPcHRpb25zLCBzZXRBY3RpdmVkQmVkT3B0aW9uc10gPSB1c2VTdGF0ZTxCZWRUeXBlW10+KFxyXG4gICAgICAgIGluaXRpYWxCZWRPcHRpb25zXHJcbiAgICApO1xyXG5cclxuICAgIC8vICog64Ko7J2AIOy5qOuMgCDsmLXshZjrk6RcclxuICAgIGNvbnN0IGxhc3RCZWRPcHRpb25zPXVzZU1lbW8oKCk9PntcclxuICAgICAgICByZXR1cm4gYmVkVHlwZXMuZmlsdGVyKChiZWRUeXBlKT0+IWFjdGl2ZWRCZWRPcHRpb25zLmluY2x1ZGVzKGJlZFR5cGUpKTtcclxuICAgIH0sIFthY3RpdmVkQmVkT3B0aW9ucywgYmVkcm9vbV0pO1xyXG5cclxuICAgIC8vICog7Lmo64yAIOqwnOyImCDstJ3tlalcclxuICAgIGNvbnN0IHRvdGFsQmVkc0NvdW50ID0gdXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGxldCB0b3RhbD0wO1xyXG4gICAgICAgIGJlZHJvb20uYmVkcy5mb3JFYWNoKChiZWQpPT57XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGJlZC5jb3VudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9LCBbYmVkcm9vbV0pO1xyXG5cclxuICAgIC8vKiDsuajsi6Qg7Jyg7ZiVIOyXtOqzoCDri6vquLBcclxuICAgIGNvbnN0IHRvZ2dsZU9wZW5lZCA9ICgpID0+IHNldE9wZW5lZCghb3BlbmVkKTtcclxuXHJcbiAgICAvLyog7Lmo7IukIOy5qOuMgCDqsK/siJgg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJlZFR5cGVDb3VudCA9ICh2YWx1ZTogbnVtYmVyLCB0eXBlOiBCZWRUeXBlKSA9PlxyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJlZFR5cGVDb3VudCh7XHJcbiAgICAgICAgICBiZWRyb29tSWQ6IGJlZHJvb20uaWQsXHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgY291bnQ6IHZhbHVlLFxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vICog7Lmo64yAIOyiheulmCDthY3siqTtirhcclxuICAgIGNvbnN0IGJlZHNUZXh0ID0gdXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRleHRzPWJlZHJvb20uYmVkcy5tYXAoKGJlZCkgPT4gYCR7YmVkLnR5cGV9ICR7YmVkLmNvdW50feqwnGApO1xyXG4gICAgICAgIHJldHVybiB0ZXh0cy5qb2luKFwiLFwiKTtcclxuICAgIH0sIFtiZWRyb29tXSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb21cIj57YmVkcm9vbS5pZH3rsogg7Lmo7IukPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbS1jb3VudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7Lmo64yAIHt0b3RhbEJlZHNDb3VudH3qsJwgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD57YmVkc1RleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW5lZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUeXBlPVwicmVnaXN0ZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNjFweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3BlbmVkICYmIFwi7JmE66OMXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshb3BlbmVkICYmICh0b3RhbEJlZHNDb3VudCA9PT0gMCA/IFwi7Lmo64yAIOy2lOqwgO2VmOq4sFwiIDogXCLsuajrjIAg7IiY7KCV7ZWY6riwXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge29wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVkQmVkT3B0aW9ucy5tYXAoKHR5cGUpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyXCIga2V5PXt0eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWRyb29tLmJlZHMuZmluZCgoYmVkKT0+YmVkLnR5cGUgPT09IHR5cGUpPy5jb3VudCB8fCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQmVkVHlwZUNvdW50KHZhbHVlLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhc3RCZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e1tcIuuLpOuluCDsuajrjIAg7LaU6rCAXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVkQmVkT3B0aW9ucyhbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aXZlZEJlZE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgYXMgQmVkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOyJdLCJzb3VyY2VSb290IjoiIn0=