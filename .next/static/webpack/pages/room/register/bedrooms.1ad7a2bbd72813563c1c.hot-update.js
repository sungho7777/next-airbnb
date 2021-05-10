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
      setOpened = _useState[1];

  var initialBedOptions = bedroom.beds.map(function (bed) {
    return bed.type;
  }); // * 선택된 침대 옵션들

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialBedOptions),
      activedBedOptions = _useState2[0],
      setActivedBedOptions = _useState2[1];

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
  }, []); // * 침실 침대 개수 변경 시

  var onChangeBedTypeCount = function onChangeBedTypeCount(value, type) {
    return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBedTypeCount({
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
          lineNumber: 106,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 46
          }, _this), bedsText]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: toggleOpend,
        styleType: "register",
        color: "white",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
        lineNumber: 125,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
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
            lineNumber: 143,
            columnNumber: 29
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedTypes, "oZuDeA3C+Uz8BZ4x2EG2UwDNOGE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21CZWRUeXBlcyIsImJlZHJvb20iLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsImluaXRpYWxCZWRPcHRpb25zIiwiYmVkcyIsIm1hcCIsImJlZCIsInR5cGUiLCJhY3RpdmVkQmVkT3B0aW9ucyIsInNldEFjdGl2ZWRCZWRPcHRpb25zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvdGFsQmVkc0NvdW50IiwidXNlTWVtbyIsInRvdGFsIiwiZm9yRWFjaCIsImNvdW50IiwibGFzdEJlZE9wdGlvbnMiLCJiZWRUeXBlcyIsImZpbHRlciIsImJlZFR5cGUiLCJpbmNsdWRlcyIsImJlZHNUZXh0IiwidGV4dHMiLCJqb2luIiwib25DaGFuZ2VCZWRUeXBlQ291bnQiLCJ2YWx1ZSIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJzZXRCZWRUeXBlQ291bnQiLCJiZWRyb29tSWQiLCJpZCIsInRvZ2dsZU9wZW5kIiwiZSIsInRhcmdldCIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsa2ZBR1dDLHVEQUFPLENBQUNDLE9BSG5CLEVBS2dCRCx1REFBTyxDQUFDQyxPQUx4QixFQWFGRCx1REFBTyxDQUFDRSxPQWJOLEVBeUJGRix1REFBTyxDQUFDRyxPQXpCTixDQUFmO0tBQU1OLFM7O0FBcUNOLElBQU1PLG9CQUFzQyxHQUFHLFNBQXpDQSxvQkFBeUMsT0FBYTtB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S0FBRCxFQUFRbkIsSUFBUixDQUFwQjtBQUNIO0FBTkwsYUFHU0EsSUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBcURBLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBdEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeURILENBM0dEOztHQUFNVCxvQjtVQVVlYSx1RDs7O01BVmZiLG9CO0FBNkdTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JlZHJvb21zLjFhZDdhMmJiZDcyODEzNTYzYzFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGJlZFR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHtCZWRUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvcm9vbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi8uLi9jb21tb24vQ291bnRlclwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI4cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbSB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1wdWJsaWMtYmVkLXR5cGUtY291bnRlcnMge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVycyB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyIHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wc3tcclxuICAgIGJlZHJvb206e2lkOm51bWJlcjsgYmVkczp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W119O1xyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CZWRUeXBlczogUmVhY3QuRkM8SVByb3BzPiA9ICh7YmVkcm9vbX0pPT57XHJcbiAgICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaW5pdGlhbEJlZE9wdGlvbnMgPSBiZWRyb29tLmJlZHMubWFwKChiZWQpID0+IGJlZC50eXBlKTtcclxuXHJcbiAgICAvLyAqIOyEoO2DneuQnCDsuajrjIAg7Ji17IWY65OkXHJcbiAgICBjb25zdCBbYWN0aXZlZEJlZE9wdGlvbnMsIHNldEFjdGl2ZWRCZWRPcHRpb25zXSA9IHVzZVN0YXRlPEJlZFR5cGVbXT4oXHJcbiAgICAgICAgaW5pdGlhbEJlZE9wdGlvbnNcclxuICAgICk7XHJcblxyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgLy8gKiDsuajrjIAg6rCc7IiYIOy0ne2VqVxyXG4gICAgY29uc3QgdG90YWxCZWRzQ291bnQgPSB1c2VNZW1vKCgpPT57XHJcbiAgICAgICAgbGV0IHRvdGFsPTA7XHJcbiAgICAgICAgYmVkcm9vbS5iZWRzLmZvckVhY2goKGJlZCk9PntcclxuICAgICAgICAgICAgdG90YWwgKz0gYmVkLmNvdW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH0sIFtiZWRyb29tXSk7XHJcbiAgICAvLyAqIOuCqOydgCDsuajrjIAg7Ji17IWY65OkXHJcbiAgICBjb25zdCBsYXN0QmVkT3B0aW9ucz11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgcmV0dXJuIGJlZFR5cGVzLmZpbHRlcigoYmVkVHlwZSk9PiFhY3RpdmVkQmVkT3B0aW9ucy5pbmNsdWRlcyhiZWRUeXBlKSk7XHJcbiAgICB9LCBbYWN0aXZlZEJlZE9wdGlvbnMsIGJlZHJvb21dKTtcclxuICAgIC8vICog7Lmo64yAIOyiheulmCDthY3siqTtirhcclxuICAgIGNvbnN0IGJlZHNUZXh0ID0gdXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRleHRzPWJlZHJvb20uYmVkcy5tYXAoKGJlZCkgPT4gYCR7YmVkLnR5cGV9ICR7YmVkLmNvdW50fSDqsJxgKTtcclxuICAgICAgICByZXR1cm4gdGV4dHMuam9pbihcIixcIik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIC8vICog7Lmo7IukIOy5qOuMgCDqsJzsiJgg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VCZWRUeXBlQ291bnQgPSAodmFsdWU6TnVtYmVyLCB0eXBlOkJlZFR5cGUpID0+XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QmVkVHlwZUNvdW50KHtcclxuICAgICAgICAgICAgICAgIGJlZHJvb21JZDpiZWRyb29tLmlkLFxyXG4gICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiB2YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuXHJcblxyXG4gICAgLy8gKiDsuajsi6Qg7Jyg7ZiVIOyXtOqzoCDri6vquLBcclxuICAgIGNvbnN0IHRvZ2dsZU9wZW5kID0gKCkgPT4gc2V0T3BlbmVkKCFvcGVuZWQpO1xyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tXCI+e2JlZHJvb20uaWR9IOuyiCDsuajsi6Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsuajrjIAge3RvdGFsQmVkc0NvdW50feqwnCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JlZHNUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVuZH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wZW5lZCAmJiBcIuyZhOujjFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHshb3BlbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b3RhbEJlZHNDb3VudCA9PT0gMCA/IFwi7Lmo64yAIOy2lOqwgO2VmOq4sFwiOlwi7Lmo64yAIOyImOygle2VmOq4sFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge29wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYXN0QmVkT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIuuLpOuluCDsuajrjIAg7LaU6rCAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtbXCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldEFjdGl2ZWRCZWRPcHRpb25zKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFjdGl2ZWRCZWRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgYXMgQmVkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVkQmVkT3B0aW9ucy5tYXAoKHR5cGUpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyXCIga2V5PXt0eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmVkcm9vbS5iZWRzLmZpbmQoKGJlZCk9PmJlZC50eXBlPT09dHlwZSk/LmNvdW50IHx8IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQmVkVHlwZUNvdW50KHZhbHVlLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CZWRUeXBlczsiXSwic291cmNlUm9vdCI6IiJ9