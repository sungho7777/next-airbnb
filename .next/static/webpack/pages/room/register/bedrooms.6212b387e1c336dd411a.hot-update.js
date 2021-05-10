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
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");



var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomBedTypes.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "RegisterRoomBedTypes__Container",
  componentId: "e0v542-0"
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-public-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-selector-wrapper{margin-top:28px;width:320px;}.register-room-bed-type-counters{font-size:19px;color:", ";}.register-room-bed-type-counter{width:290px;margin-bottom:18px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_48, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_76);
_c = Container;

var RegisterRoomBedTypes = function RegisterRoomBedTypes(_ref) {
  _s();

  var bedroom = _ref.bedroom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      opened = _useState[0],
      setOpened = _useState[1]; //const publicBedList = useSelector((state)=>state.registerRoom.publicBedList);


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // * 침대 개수 총합

  var totalBedsCount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var total = 0;
    bedroom.beds.forEach(function (bed) {
      total += bed.count;
    });
    return total;
  }, [bedroom]); // * 침대 종류 텍스트

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
      setActivedBedOptions = _useState2[1]; // * 남은 침대 옵션들


  var lastBedOptions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return _lib_staticData__WEBPACK_IMPORTED_MODULE_5__["bedTypes"].filter(function (bedType) {
      return !activedBedOptions.includes(bedType);
    });
  }, [activedBedOptions, bedroom]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom",
          children: "\uACF5\uC6A9\uACF5\uAC04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 46
          }, _this), bedsText]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: function onClick() {
          return setOpened(!opened);
        },
        styleType: "register",
        color: "white",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, _this), opened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-counters",
      children: [activedBedOptions.map(function (type) {
        var _publicBedList$find;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "register-room-bed-type-counter",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
            label: type,
            value: ((_publicBedList$find = publicBedList.find(function (bed) {
              return bed.type === type;
            })) === null || _publicBedList$find === void 0 ? void 0 : _publicBedList$find.count) || 0,
            onChange: function onChange(value) {
              //onChangeBedTypeCount(value, type);
              dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setPublicBedTypeCount({
                type: type,
                count: value
              }));
            }
          }, type, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 29
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 25
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        lineNumber: 129,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedTypes, "34x4tCIxk5x1veQmQ3v/7NqR/fI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21CZWRUeXBlcyIsImJlZHJvb20iLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b3RhbEJlZHNDb3VudCIsInVzZU1lbW8iLCJ0b3RhbCIsImJlZHMiLCJmb3JFYWNoIiwiYmVkIiwiY291bnQiLCJiZWRzVGV4dCIsInRleHRzIiwibWFwIiwidHlwZSIsImpvaW4iLCJpbml0aWFsQmVkT3B0aW9ucyIsImFjdGl2ZWRCZWRPcHRpb25zIiwic2V0QWN0aXZlZEJlZE9wdGlvbnMiLCJsYXN0QmVkT3B0aW9ucyIsImJlZFR5cGVzIiwiZmlsdGVyIiwiYmVkVHlwZSIsImluY2x1ZGVzIiwicHVibGljQmVkTGlzdCIsImZpbmQiLCJ2YWx1ZSIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJzZXRQdWJsaWNCZWRUeXBlQ291bnQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLGtmQUdXQyx1REFBTyxDQUFDQyxPQUhuQixFQUtnQkQsdURBQU8sQ0FBQ0MsT0FMeEIsRUFhRkQsdURBQU8sQ0FBQ0UsT0FiTixFQXlCRkYsdURBQU8sQ0FBQ0csT0F6Qk4sQ0FBZjtLQUFNTixTOztBQXFDTixJQUFNTyxvQkFBc0MsR0FBRyxTQUF6Q0Esb0JBQXlDLE9BQWE7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7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QyxJQUFkLENBQW1CLFVBQUNoQixHQUFEO0FBQUEscUJBQVNBLEdBQUcsQ0FBQ0ssSUFBSixLQUFhQSxJQUF0QjtBQUFBLGFBQW5CLDZFQUFnREosS0FBaEQsS0FBeUQsQ0FIakU7QUFNSSxvQkFBUSxFQUFFLGtCQUFDZ0IsS0FBRCxFQUFTO0FBQ2Y7QUFDQXhCLHNCQUFRLENBQ0p5Qix1RUFBbUIsQ0FBQ0MscUJBQXBCLENBQTBDO0FBQ3RDZCxvQkFBSSxFQUFKQSxJQURzQztBQUV0Q0oscUJBQUssRUFBQ2dCO0FBRmdDLGVBQTFDLENBREksQ0FBUjtBQU1IO0FBZEwsYUFLU1osSUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBcURBLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBdEIsQ0FETCxlQXFCSSxxRUFBQyx3REFBRDtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksZUFBTyxFQUFFSyxjQUZiO0FBR0ksb0JBQVksRUFBQyx3Q0FIakI7QUFJSSxhQUFLLEVBQUMsd0NBSlY7QUFLSSx1QkFBZSxFQUFFLENBQUMsVUFBRCxDQUxyQjtBQU1JLHFCQUFhLEVBQUUsS0FObkI7QUFPSSxnQkFBUSxFQUFFLGtCQUFDVSxDQUFEO0FBQUEsaUJBQ05YLG9CQUFvQiwwS0FDYkQsaUJBRGEsSUFFaEJZLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUZPLEdBRGQ7QUFBQTtBQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUVILENBcEdEOztHQUFNN0Isb0I7VUFLZU0sdUQ7OztNQUxmTixvQjtBQXNHU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9iZWRyb29tcy42MjEyYjM4N2UxYzMzNmRkNDExYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBiZWRUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7QmVkVHlwZX0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3Jvb21cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vLi4vY29tbW9uL0NvdW50ZXJcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5saWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyOHB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20ge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5XzQ4fTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tcHVibGljLWJlZC10eXBlLWNvdW50ZXJzIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtY291bnRlcnMge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtY291bnRlciB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHN7XHJcbiAgICBiZWRyb29tOntpZDpudW1iZXI7IGJlZHM6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdfTtcclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQmVkVHlwZXM6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2JlZHJvb219KT0+e1xyXG4gICAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vY29uc3QgcHVibGljQmVkTGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnJlZ2lzdGVyUm9vbS5wdWJsaWNCZWRMaXN0KTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgLy8gKiDsuajrjIAg6rCc7IiYIOy0ne2VqVxyXG4gICAgY29uc3QgdG90YWxCZWRzQ291bnQgPSB1c2VNZW1vKCgpPT57XHJcbiAgICAgICAgbGV0IHRvdGFsPTA7XHJcbiAgICAgICAgYmVkcm9vbS5iZWRzLmZvckVhY2goKGJlZCk9PntcclxuICAgICAgICAgICAgdG90YWwgKz0gYmVkLmNvdW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH0sIFtiZWRyb29tXSk7XHJcbiAgICAvLyAqIOy5qOuMgCDsooXrpZgg7YWN7Iqk7Yq4XHJcbiAgICBjb25zdCBiZWRzVGV4dCA9IHVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB0ZXh0cz1iZWRyb29tLmJlZHMubWFwKChiZWQpID0+IGAke2JlZC50eXBlfSAke2JlZC5jb3VudH0g6rCcYCk7XHJcbiAgICAgICAgcmV0dXJuIHRleHRzLmpvaW4oXCIsXCIpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxCZWRPcHRpb25zID0gYmVkcm9vbS5iZWRzLm1hcCgoYmVkKSA9PiBiZWQudHlwZSk7XHJcbiAgICAvLyAqIOyEoO2DneuQnCDsuajrjIAg7Ji17IWY65OkXHJcbiAgICBjb25zdCBbYWN0aXZlZEJlZE9wdGlvbnMsIHNldEFjdGl2ZWRCZWRPcHRpb25zXSA9IHVzZVN0YXRlPEJlZFR5cGVbXT4oXHJcbiAgICAgICAgaW5pdGlhbEJlZE9wdGlvbnNcclxuICAgICk7XHJcbiAgICAvLyAqIOuCqOydgCDsuajrjIAg7Ji17IWY65OkXHJcbiAgICBjb25zdCBsYXN0QmVkT3B0aW9ucz11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgcmV0dXJuIGJlZFR5cGVzLmZpbHRlcigoYmVkVHlwZSk9PiFhY3RpdmVkQmVkT3B0aW9ucy5pbmNsdWRlcyhiZWRUeXBlKSk7XHJcbiAgICB9LCBbYWN0aXZlZEJlZE9wdGlvbnMsIGJlZHJvb21dKTtcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbVwiPuqzteyaqeqzteqwhDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20tY291bnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOy5qOuMgCB7dG90YWxCZWRzQ291bnR96rCcIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmVkc1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXRPcGVuZWQoIW9wZW5lZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUeXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcGVuZWQgJiYgXCLsmYTro4xcIn1cclxuICAgICAgICAgICAgICAgICAgICB7IW9wZW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodG90YWxCZWRzQ291bnQgPT09IDAgPyBcIuy5qOuMgCDstpTqsIDtlZjquLBcIjpcIuy5qOuMgCDsiJjsoJXtlZjquLBcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVkQmVkT3B0aW9ucy5tYXAoKHR5cGUpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyXCIga2V5PXt0eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY0JlZExpc3QuZmluZCgoYmVkKSA9PiBiZWQudHlwZSA9PT0gdHlwZSk/LmNvdW50IHx8IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DaGFuZ2VCZWRUeXBlQ291bnQodmFsdWUsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0UHVibGljQmVkVHlwZUNvdW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bGFzdEJlZE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIuuLpOuluCDsuajrjIAg7LaU6rCAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17W1wi64uk66W4IOy5qOuMgCDstpTqsIBcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVZhbGlkYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZWRCZWRPcHRpb25zKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hY3RpdmVkQmVkT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyBCZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQmVkVHlwZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==