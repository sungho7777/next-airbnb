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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");



var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomBedTypes.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "RegisterRoomBedTypes__Container",
  componentId: "e0v542-0"
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-public-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-selector-wrapper{margin-top:28px;width:320px;}.register-room-bed-type-counters{font-size:19px;color:", ";}.register-room-bed-type-counter{width:290px;margin-bottom:18px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_8__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_8__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_8__["default"].gray_48, _styles_palette__WEBPACK_IMPORTED_MODULE_8__["default"].gray_76);
_c = Container;

var RegisterRoomBedTypes = function RegisterRoomBedTypes(_ref) {
  _s();

  var bedroom = _ref.bedroom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      opened = _useState[0],
      setOpened = _useState[1];

  var publicBedList = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.registerRoom.publicBedList;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // * 침대 개수 총합

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
  }, [activedBedOptions, bedroom]); // * 침대 종류 텍스트

  var bedsText = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var texts = bedroom.beds.map(function (bed) {
      return "".concat(bed.type, " ").concat(bed.count, " \uAC1C");
    });
    return texts.join(",");
  }, []);
  var initialBedOptions = bedroom.beds.map(function (bed) {
    return bed.type;
  }); // * 선택된 침대 옵션들

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialBedOptions),
      activedBedOptions = _useState2[0],
      setActivedBedOptions = _useState2[1]; // * 침실 침대 개수 변경 시


  var onChangeBedTypeCount = function onChangeBedTypeCount(value, type) {
    return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__["registerRoomActions"].setBedTypeCount({
      bedroomId: bedroom.id,
      type: type,
      count: value
    }));
  }; // * 침실 유형 열고 닫기


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
          children: [bedroom.id, " \uBC88 \uCE68\uC2E4"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 46
          }, _this), bedsText]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: toggleOpend,
        styleType: "register",
        color: "white",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, _this), opened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
        lineNumber: 127,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
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
              onChangeBedTypeCount(value, type);
            }
          }, type, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 29
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedTypes, "cK32bM8gHlVzNCFn4FNY1IkZUGA=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21CZWRUeXBlcyIsImJlZHJvb20iLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsInB1YmxpY0JlZExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvdGFsQmVkc0NvdW50IiwidXNlTWVtbyIsInRvdGFsIiwiYmVkcyIsImZvckVhY2giLCJiZWQiLCJjb3VudCIsImxhc3RCZWRPcHRpb25zIiwiYmVkVHlwZXMiLCJmaWx0ZXIiLCJiZWRUeXBlIiwiYWN0aXZlZEJlZE9wdGlvbnMiLCJpbmNsdWRlcyIsImJlZHNUZXh0IiwidGV4dHMiLCJtYXAiLCJ0eXBlIiwiam9pbiIsImluaXRpYWxCZWRPcHRpb25zIiwic2V0QWN0aXZlZEJlZE9wdGlvbnMiLCJvbkNoYW5nZUJlZFR5cGVDb3VudCIsInZhbHVlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldEJlZFR5cGVDb3VudCIsImJlZHJvb21JZCIsImlkIiwidG9nZ2xlT3BlbmQiLCJlIiwidGFyZ2V0IiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxrZkFHV0MsdURBQU8sQ0FBQ0MsT0FIbkIsRUFLZ0JELHVEQUFPLENBQUNDLE9BTHhCLEVBYUZELHVEQUFPLENBQUNFLE9BYk4sRUF5QkZGLHVEQUFPLENBQUNHLE9BekJO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LElBQVIsQ0FBYTBCLElBQWIsQ0FBa0IsVUFBQ3hCLEdBQUQ7QUFBQSxxQkFBT0EsR0FBRyxDQUFDVyxJQUFKLEtBQVdBLElBQWxCO0FBQUEsYUFBbEIsMkVBQTJDVixLQUEzQyxLQUFvRCxDQUYvRDtBQUlJLG9CQUFRLEVBQUUsa0JBQUNlLEtBQUQsRUFBUztBQUNmRCxrQ0FBb0IsQ0FBQ0MsS0FBRCxFQUFRTCxJQUFSLENBQXBCO0FBQ0g7QUFOTCxhQUdTQSxJQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFxREEsSUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbUI7QUFBQSxPQUF0QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5REgsQ0E3R0Q7O0dBQU0zQixvQjtVQUVvQk0sa0QsRUFLTEksdUQ7OztNQVBmVixvQjtBQStHU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9iZWRyb29tcy5iZDg5NzFlZTM3OTliZDdjMzhmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBiZWRUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7QmVkVHlwZX0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3Jvb21cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vLi4vY29tbW9uL0NvdW50ZXJcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5saWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyOHB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20ge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5XzQ4fTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tcHVibGljLWJlZC10eXBlLWNvdW50ZXJzIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtY291bnRlcnMge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtY291bnRlciB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHN7XHJcbiAgICBiZWRyb29tOntpZDpudW1iZXI7IGJlZHM6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdfTtcclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQmVkVHlwZXM6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2JlZHJvb219KT0+e1xyXG4gICAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHB1YmxpY0JlZExpc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5yZWdpc3RlclJvb20ucHVibGljQmVkTGlzdCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICAvLyAqIOy5qOuMgCDqsJzsiJgg7LSd7ZWpXHJcbiAgICBjb25zdCB0b3RhbEJlZHNDb3VudCA9IHVzZU1lbW8oKCk9PntcclxuICAgICAgICBsZXQgdG90YWw9MDtcclxuICAgICAgICBiZWRyb29tLmJlZHMuZm9yRWFjaCgoYmVkKT0+e1xyXG4gICAgICAgICAgICB0b3RhbCArPSBiZWQuY291bnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfSwgW2JlZHJvb21dKTtcclxuICAgIC8vICog64Ko7J2AIOy5qOuMgCDsmLXshZjrk6RcclxuICAgIGNvbnN0IGxhc3RCZWRPcHRpb25zPXVzZU1lbW8oKCk9PntcclxuICAgICAgICByZXR1cm4gYmVkVHlwZXMuZmlsdGVyKChiZWRUeXBlKT0+IWFjdGl2ZWRCZWRPcHRpb25zLmluY2x1ZGVzKGJlZFR5cGUpKTtcclxuICAgIH0sIFthY3RpdmVkQmVkT3B0aW9ucywgYmVkcm9vbV0pO1xyXG4gICAgLy8gKiDsuajrjIAg7KKF66WYIO2FjeyKpO2KuFxyXG4gICAgY29uc3QgYmVkc1RleHQgPSB1c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgdGV4dHM9YmVkcm9vbS5iZWRzLm1hcCgoYmVkKSA9PiBgJHtiZWQudHlwZX0gJHtiZWQuY291bnR9IOqwnGApO1xyXG4gICAgICAgIHJldHVybiB0ZXh0cy5qb2luKFwiLFwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsQmVkT3B0aW9ucyA9IGJlZHJvb20uYmVkcy5tYXAoKGJlZCkgPT4gYmVkLnR5cGUpO1xyXG4gICAgLy8gKiDshKDtg53rkJwg7Lmo64yAIOyYteyFmOuTpFxyXG4gICAgY29uc3QgW2FjdGl2ZWRCZWRPcHRpb25zLCBzZXRBY3RpdmVkQmVkT3B0aW9uc10gPSB1c2VTdGF0ZTxCZWRUeXBlW10+KFxyXG4gICAgICAgIGluaXRpYWxCZWRPcHRpb25zXHJcbiAgICApO1xyXG5cclxuICAgIC8vICog7Lmo7IukIOy5qOuMgCDqsJzsiJgg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VCZWRUeXBlQ291bnQgPSAodmFsdWU6TnVtYmVyLCB0eXBlOkJlZFR5cGUpID0+XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QmVkVHlwZUNvdW50KHtcclxuICAgICAgICAgICAgICAgIGJlZHJvb21JZDpiZWRyb29tLmlkLFxyXG4gICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiB2YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuXHJcblxyXG4gICAgLy8gKiDsuajsi6Qg7Jyg7ZiVIOyXtOqzoCDri6vquLBcclxuICAgIGNvbnN0IHRvZ2dsZU9wZW5kID0gKCkgPT4gc2V0T3BlbmVkKCFvcGVuZWQpO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tXCI+e2JlZHJvb20uaWR9IOuyiCDsuajsi6Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsuajrjIAge3RvdGFsQmVkc0NvdW50feqwnCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JlZHNUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVuZH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wZW5lZCAmJiBcIuyZhOujjFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHshb3BlbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b3RhbEJlZHNDb3VudCA9PT0gMCA/IFwi7Lmo64yAIOy2lOqwgO2VmOq4sFwiOlwi7Lmo64yAIOyImOygle2VmOq4sFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge29wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYXN0QmVkT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIuuLpOuluCDsuajrjIAg7LaU6rCAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtbXCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEFjdGl2ZWRCZWRPcHRpb25zKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFjdGl2ZWRCZWRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgYXMgQmVkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVkQmVkT3B0aW9ucy5tYXAoKHR5cGUpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyXCIga2V5PXt0eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmVkcm9vbS5iZWRzLmZpbmQoKGJlZCk9PmJlZC50eXBlPT09dHlwZSk/LmNvdW50IHx8IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQmVkVHlwZUNvdW50KHZhbHVlLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CZWRUeXBlczsiXSwic291cmNlUm9vdCI6IiJ9