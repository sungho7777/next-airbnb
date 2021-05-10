webpackHotUpdate_N_E("pages/room/register/bedrooms",{

/***/ "./components/room/register/RegisterRoomPublicBedTypes.tsx":
/*!*****************************************************************!*\
  !*** ./components/room/register/RegisterRoomPublicBedTypes.tsx ***!
  \*****************************************************************/
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
/* harmony import */ var _common_Counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Counter */ "./components/common/Counter.tsx");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");



var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomPublicBedTypes.tsx",
    _this = undefined,
    _s = $RefreshSig$();











var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "RegisterRoomPublicBedTypes__Container",
  componentId: "sc-1kbf1wt-0"
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;align-items:center;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-public-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-bedroom-counts{font-size:19px;color:", ";}.register-room-bed-type-counter{width:290px;margin-bottom:18px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_8__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_8__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_8__["default"].gray_48, _styles_palette__WEBPACK_IMPORTED_MODULE_8__["default"].gray_76);
_c = Container;

var RegisterRoomPublicBedTypes = function RegisterRoomPublicBedTypes() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      opened = _useState[0],
      setOpened = _useState[1];

  var publicBedList = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.registerRoom.publicBedList;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var totalBedsCount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var total = 0;
    publicBedList.forEach(function (bed) {
      total += bed.count;
    });
    return total;
  }, [publicBedList]);
  var bedsText = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var texts = publicBedList.map(function (bed) {
      return "".concat(bed.type, " ").concat(bed.count, "\uAC1C");
    });
    return texts.join(",");
  }, [publicBedList]);

  var initialBedOptions = function initialBedOptions() {
    return publicBedList.map(function (bed) {
      return bed.type;
    });
  }; //* 선택된 침대 옵션들


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialBedOptions),
      activedBedOptions = _useState2[0],
      setActivedBedOptions = _useState2[1]; //* 남은 침대 옵션들


  var lastBedOptions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return _lib_staticData__WEBPACK_IMPORTED_MODULE_5__["bedTypes"].filter(function (bedType) {
      return !activedBedOptions.includes(bedType);
    });
  }, [activedBedOptions, publicBedList]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom",
          children: "\uACF5\uC6A9\uACF5\uAC04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: bedsText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return setOpened(!opened);
        },
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), opened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-public-bed-type-counters",
      children: [activedBedOptions.map(function (type) {
        var _publicBedList$find;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "register-room-bed-type-counter",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
            label: type,
            value: ((_publicBedList$find = publicBedList.find(function (bed) {
              return bed.type === type;
            })) === null || _publicBedList$find === void 0 ? void 0 : _publicBedList$find.count) || 0,
            onChange: function onChange(value) {
              return dispatch( // * 공용공간 침대 유형 개수 변경하기.
              _store_registerRoom__WEBPACK_IMPORTED_MODULE_7__["registerRoomActions"].setPublicBedTypeCount({
                type: type,
                count: value
              }));
            }
          }, type, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_11__["default"], {
        type: "register",
        options: lastBedOptions,
        disabledOptions: ["다른 침대 추가"],
        value: "\uB2E4\uB978 \uCE68\uB300 \uCD94\uAC00",
        useValidation: false,
        onChange: function onChange(e) {
          return setActivedBedOptions([].concat(Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(activedBedOptions), [e.target.value]));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, _this);
};

_s(RegisterRoomPublicBedTypes, "VEJaBVcTvJQwCpZgolBOHoLr1UM=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c2 = RegisterRoomPublicBedTypes;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(RegisterRoomPublicBedTypes));

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomPublicBedTypes");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbVB1YmxpY0JlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21QdWJsaWNCZWRUeXBlcyIsInVzZVN0YXRlIiwib3BlbmVkIiwic2V0T3BlbmVkIiwicHVibGljQmVkTGlzdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJyZWdpc3RlclJvb20iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidG90YWxCZWRzQ291bnQiLCJ1c2VNZW1vIiwidG90YWwiLCJmb3JFYWNoIiwiYmVkIiwiY291bnQiLCJiZWRzVGV4dCIsInRleHRzIiwibWFwIiwidHlwZSIsImpvaW4iLCJpbml0aWFsQmVkT3B0aW9ucyIsImFjdGl2ZWRCZWRPcHRpb25zIiwic2V0QWN0aXZlZEJlZE9wdGlvbnMiLCJsYXN0QmVkT3B0aW9ucyIsImJlZFR5cGVzIiwiZmlsdGVyIiwiYmVkVHlwZSIsImluY2x1ZGVzIiwiZmluZCIsInZhbHVlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldFB1YmxpY0JlZFR5cGVDb3VudCIsImUiLCJ0YXJnZXQiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEscWNBR1dDLHVEQUFPLENBQUNDLE9BSG5CLEVBS2dCRCx1REFBTyxDQUFDQyxPQUx4QixFQWVGRCx1REFBTyxDQUFDRSxPQWZOLEVBdUJGRix1REFBTyxDQUFDRyxPQXZCTixDQUFmO0tBQU1OLFM7O0FBK0JOLElBQU1PLDBCQUFv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cmVnaXN0ZXIvYmVkcm9vbXMuZDlhOGRkZDhmMGQ4MDVhNzI1ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBiZWRUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgQmVkVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9yb29tXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbW1vbi9CdXR0b25cIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9Db3VudGVyXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI4cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV80OH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXB1YmxpYy1iZWQtdHlwZS1jb3VudGVycyB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50cyB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyIHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tUHVibGljQmVkVHlwZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcHVibGljQmVkTGlzdCA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ucHVibGljQmVkTGlzdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgdG90YWxCZWRzQ291bnQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICBwdWJsaWNCZWRMaXN0LmZvckVhY2goKGJlZCkgPT4ge1xyXG4gICAgICB0b3RhbCArPSBiZWQuY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9LCBbcHVibGljQmVkTGlzdF0pO1xyXG5cclxuICBjb25zdCBiZWRzVGV4dCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dHMgPSBwdWJsaWNCZWRMaXN0Lm1hcCgoYmVkKSA9PiBgJHtiZWQudHlwZX0gJHtiZWQuY291bnR96rCcYCk7XHJcbiAgICByZXR1cm4gdGV4dHMuam9pbihcIixcIik7XHJcbiAgfSwgW3B1YmxpY0JlZExpc3RdKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbEJlZE9wdGlvbnMgPSAoKSA9PiBwdWJsaWNCZWRMaXN0Lm1hcCgoYmVkKSA9PiBiZWQudHlwZSk7XHJcbiAgLy8qIOyEoO2DneuQnCDsuajrjIAg7Ji17IWY65OkXHJcbiAgY29uc3QgW2FjdGl2ZWRCZWRPcHRpb25zLCBzZXRBY3RpdmVkQmVkT3B0aW9uc10gPSB1c2VTdGF0ZTxCZWRUeXBlW10+KFxyXG4gICAgaW5pdGlhbEJlZE9wdGlvbnNcclxuICApO1xyXG5cclxuICAvLyog64Ko7J2AIOy5qOuMgCDsmLXshZjrk6RcclxuICBjb25zdCBsYXN0QmVkT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIGJlZFR5cGVzLmZpbHRlcigoYmVkVHlwZSkgPT4gIWFjdGl2ZWRCZWRPcHRpb25zLmluY2x1ZGVzKGJlZFR5cGUpKTtcclxuICB9LCBbYWN0aXZlZEJlZE9wdGlvbnMsIHB1YmxpY0JlZExpc3RdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3BcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tXCI+6rO17Jqp6rO16rCEPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50c1wiPlxyXG4gICAgICAgICAgICDsuajrjIAge3RvdGFsQmVkc0NvdW50feqwnFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+e2JlZHNUZXh0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZCghb3BlbmVkKX0+XHJcbiAgICAgICAgICB7b3BlbmVkICYmIFwi7JmE66OMXCJ9XHJcbiAgICAgICAgICB7IW9wZW5lZCAmJlxyXG4gICAgICAgICAgICAodG90YWxCZWRzQ291bnQgPT09IDAgPyBcIuy5qOuMgCDstpTqsIDtlZjquLBcIiA6IFwi7Lmo64yAIOyImOygle2VmOq4sFwiKX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtvcGVuZWQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1wdWJsaWMtYmVkLXR5cGUtY291bnRlcnNcIj5cclxuICAgICAgICAgIHthY3RpdmVkQmVkT3B0aW9ucy5tYXAoKHR5cGUpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJcIiBrZXk9e3R5cGV9PlxyXG4gICAgICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17dHlwZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgcHVibGljQmVkTGlzdC5maW5kKChiZWQpID0+IGJlZC50eXBlID09PSB0eXBlKT8uY291bnQgfHwgMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlSDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0UHVibGljQmVkVHlwZUNvdW50KHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e2xhc3RCZWRPcHRpb25zfVxyXG4gICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e1tcIuuLpOuluCDsuajrjIAg7LaU6rCAXCJdfVxyXG4gICAgICAgICAgICB2YWx1ZT1cIuuLpOuluCDsuajrjIAg7LaU6rCAXCJcclxuICAgICAgICAgICAgdXNlVmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBzZXRBY3RpdmVkQmVkT3B0aW9ucyhbXHJcbiAgICAgICAgICAgICAgICAuLi5hY3RpdmVkQmVkT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlIGFzIEJlZFR5cGUsXHJcbiAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFJlZ2lzdGVyUm9vbVB1YmxpY0JlZFR5cGVzKTsiXSwic291cmNlUm9vdCI6IiJ9