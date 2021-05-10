webpackHotUpdate_N_E("pages/room/register/bedrooms",{

/***/ "./components/room/register/RegisterRoomBedList.tsx":
/*!**********************************************************!*\
  !*** ./components/room/register/RegisterRoomBedList.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _RegisterRoomBedTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegisterRoomBedTypes */ "./components/room/register/RegisterRoomBedTypes.tsx");
/* harmony import */ var _RegisterRoomPublicBedTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegisterRoomPublicBedTypes */ "./components/room/register/RegisterRoomPublicBedTypes.tsx");


var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomBedList.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var RegisterRoomBedList = function RegisterRoomBedList() {
  _s();

  var bedList = Object(_store__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.registerRoom.bedList;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "register-room-bed-type-list",
    children: [bedList.map(function (bedroom) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomBedTypes__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bedroom: bedroom
      }, bedroom.id, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomPublicBedTypes__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBedList, "BpcVnWMMfQdEFHREZKaXlryGy1o=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = RegisterRoomBedList;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(RegisterRoomBedList));

var _c, _c2;

$RefreshReg$(_c, "RegisterRoomBedList");
$RefreshReg$(_c2, "%default%");

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

/***/ }),

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
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: bedsText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return setOpened(!opened);
        },
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
              return dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_7__["registerRoomActions"].setPublicBedTypeCount({
                type: type,
                count: value
              }));
            }
          }, type, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
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
        lineNumber: 113,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZExpc3QudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Jvb20vcmVnaXN0ZXIvUmVnaXN0ZXJSb29tUHVibGljQmVkVHlwZXMudHN4Il0sIm5hbWVzIjpbIlJlZ2lzdGVyUm9vbUJlZExpc3QiLCJiZWRMaXN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlZ2lzdGVyUm9vbSIsIm1hcCIsImJlZHJvb20iLCJpZCIsIlJlYWN0IiwibWVtbyIsIkNvbnRhaW5lciIsInN0eWxlZCIsImxpIiwicGFsZXR0ZSIsImdyYXlfZGQiLCJncmF5XzQ4IiwiZ3JheV83NiIsIlJlZ2lzdGVyUm9vbVB1YmxpY0JlZFR5cGVzIiwidXNlU3RhdGUiLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJwdWJsaWNCZWRMaXN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvdGFsQmVkc0NvdW50IiwidXNlTWVtbyIsInRvdGFsIiwiZm9yRWFjaCIsImJlZCIsImNvdW50IiwiYmVkc1RleHQiLCJ0ZXh0cyIsInR5cGUiLCJqb2luIiwiaW5pdGlhbEJlZE9wdGlvbnMiLCJhY3RpdmVkQmVkT3B0aW9ucyIsInNldEFjdGl2ZWRCZWRPcHRpb25zIiwibGFzdEJlZE9wdGlvbnMiLCJiZWRUeXBlcyIsImZpbHRlciIsImJlZFR5cGUiLCJpbmNsdWRlcyIsImZpbmQiLCJ2YWx1ZSIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJzZXRQdWJsaWNCZWRUeXBlQ291bnQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxtQkFBNEIsR0FBQyxTQUE3QkEsbUJBQTZCLEdBQUk7QUFBQTs7QUFDbkMsTUFBTUMsT0FBTyxHQUFHQywwREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJILE9BQTVCO0FBQUEsR0FBRCxDQUEzQjtBQUVBLHNCQUNJO0FBQUksYUFBUyxFQUFDLDZCQUFkO0FBQUEsZUFDS0EsT0FBTyxDQUFDSSxHQUFSLENBQVksVUFBQ0MsT0FBRDtBQUFBLDBCQUNULHFFQUFDLDZEQUFEO0FBQXVDLGVBQU8sRUFBRUE7QUFBaEQsU0FBMkJBLE9BQU8sQ0FBQ0MsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTO0FBQUEsS0FBWixDQURMLGVBSUkscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FYRDs7R0FBTVAsbUI7VUFDY0Usa0Q7OztLQURkRixtQjtBQXFCUyxrRkFBQVEsNENBQUssQ0FBQ0MsSUFBTixDQUFXVCxtQkFBWCxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQSxJQUFNVSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEscWNBR1dDLHVEQUFPLENBQUNDLE9BSG5CLEVBS2dCRCx1REFBTyxDQUFDQyxPQUx4QixFQWNGRCx1REFBTyxDQUFDRSxPQWROLEVBc0JGRix1REFBTyxDQUFDRyxPQXRCTixDQUFmO0tBQU1OLFM7O0FBOEJOLElBQU1PLDBCQUFvQyxHQUFHLFNBQXZDQSwwQkFBdUMsR0FBTTtBQUFBOztBQUFBLGtCQUNyQkMsc0RBQVEsQ0FBQyxLQUFELENBRGE7QUFBQSxNQUMxQ0MsTUFEMEM7QUFBQSxNQUNsQ0MsU0FEa0M7O0FBRWpELE1BQU1DLGFBQWEsR0FBR25CLDBEQUFXLENBQy9CLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJpQixhQUE5QjtBQUFBLEdBRCtCLENBQWpDO0FBSUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLGNBQWMsR0FBR0MscURBQU8sQ0FBQyxZQUFNO0FBQ25DLFFBQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0FMLGlCQUFhLENBQUNNLE9BQWQsQ0FBc0IsVUFBQ0MsR0FBRCxFQUFTO0FBQzdCRixXQUFLLElBQUlFLEdBQUcsQ0FBQ0MsS0FBYjtBQUNELEtBRkQ7QUFHQSxXQUFPSCxLQUFQO0FBQ0QsR0FONkIsRUFNM0IsQ0FBQ0wsYUFBRCxDQU4yQixDQUE5QjtBQVFBLE1BQU1TLFFBQVEsR0FBR0wscURBQU8sQ0FBQyxZQUFNO0FBQzdCLFFBQU1NLEtBQUssR0FBR1YsYUFBYSxDQUFDaEIsR0FBZCxDQUFrQixVQUFDdUIsR0FBRDtBQUFBLHVCQUFZQSxHQUFHLENBQUNJLElBQWhCLGNBQXdCSixHQUFHLENBQUNDLEtBQTVCO0FBQUEsS0FBbEIsQ0FBZDtBQUNBLFdBQU9FLEtBQUssQ0FBQ0UsSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNELEdBSHVCLEVBR3JCLENBQUNaLGFBQUQsQ0FIcUIsQ0FBeEI7O0FBS0EsTUFBTWEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFdBQU1iLGFBQWEsQ0FBQ2hCLEdBQWQsQ0FBa0IsVUFBQ3VCLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNJLElBQWI7QUFBQSxLQUFsQixDQUFOO0FBQUEsR0FBMUIsQ0FyQmlELENBc0JqRDs7O0FBdEJpRCxtQkF1QkNkLHNEQUFRLENBQ3hEZ0IsaUJBRHdELENBdkJUO0FBQUEsTUF1QjFDQyxpQkF2QjBDO0FBQUEsTUF1QnZCQyxvQkF2QnVCLGtCQTJCakQ7OztBQUNBLE1BQU1DLGNBQWMsR0FBR1oscURBQU8sQ0FBQyxZQUFNO0FBQ25DLFdBQU9hLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQ0MsT0FBRDtBQUFBLGFBQWEsQ0FBQ0wsaUJBQWlCLENBQUNNLFFBQWxCLENBQTJCRCxPQUEzQixDQUFkO0FBQUEsS0FBaEIsQ0FBUDtBQUNELEdBRjZCLEVBRTNCLENBQUNMLGlCQUFELEVBQW9CZCxhQUFwQixDQUYyQixDQUE5QjtBQUlBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLGdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBRyxtQkFBUyxFQUFDLHVDQUFiO0FBQUEsc0NBQ01HLGNBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0U7QUFBQSxvQkFBSU07QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUUscUVBQUMsc0RBQUQ7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTVYsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLFNBQWpCO0FBQUEsbUJBQ0dBLE1BQU0sSUFBSSxJQURiLEVBRUcsQ0FBQ0EsTUFBRCxLQUNFSyxjQUFjLEtBQUssQ0FBbkIsR0FBdUIsU0FBdkIsR0FBbUMsU0FEckMsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQWVHTCxNQUFNLGlCQUNMO0FBQUssZUFBUyxFQUFDLHdDQUFmO0FBQUEsaUJBQ0dnQixpQkFBaUIsQ0FBQzlCLEdBQWxCLENBQXNCLFVBQUMyQixJQUFEO0FBQUE7O0FBQUEsNEJBQ3JCO0FBQUssbUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGlDQUNFLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQUssRUFBRUEsSUFEVDtBQUVFLGlCQUFLLEVBQ0gsd0JBQUFYLGFBQWEsQ0FBQ3FCLElBQWQsQ0FBbUIsVUFBQ2QsR0FBRDtBQUFBLHFCQUFTQSxHQUFHLENBQUNJLElBQUosS0FBYUEsSUFBdEI7QUFBQSxhQUFuQiw2RUFBZ0RILEtBQWhELEtBQXlELENBSDdEO0FBTUUsb0JBQVEsRUFBRSxrQkFBQ2MsS0FBRDtBQUFBLHFCQUNSckIsUUFBUSxDQUNOc0IsdUVBQW1CLENBQUNDLHFCQUFwQixDQUEwQztBQUN4Q2Isb0JBQUksRUFBSkEsSUFEd0M7QUFFeENILHFCQUFLLEVBQUVjO0FBRmlDLGVBQTFDLENBRE0sQ0FEQTtBQUFBO0FBTlosYUFLT1gsSUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBcURBLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHFCO0FBQUEsT0FBdEIsQ0FESCxlQW9CRSxxRUFBQyx5REFBRDtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFFSyxjQUZYO0FBR0UsdUJBQWUsRUFBRSxDQUFDLFVBQUQsQ0FIbkI7QUFJRSxhQUFLLEVBQUMsd0NBSlI7QUFLRSxxQkFBYSxFQUFFLEtBTGpCO0FBTUUsZ0JBQVEsRUFBRSxrQkFBQ1MsQ0FBRDtBQUFBLGlCQUNSVixvQkFBb0IsMEtBQ2ZELGlCQURlLElBRWxCVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FGUyxHQURaO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNERCxDQXRGRDs7R0FBTTFCLDBCO1VBRWtCZixrRCxFQUlMcUIsdUQ7OztNQU5iTiwwQjtBQXdGUyxrRkFBQVQsNENBQUssQ0FBQ0MsSUFBTixDQUFXUSwwQkFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXMuOGRiODgzY2UyYzcyMGU3NjI3OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYmVkcm9vbUNvdW50TGlzdCB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJSb29tQmVkVHlwZXMgZnJvbSBcIi4vUmVnaXN0ZXJSb29tQmVkVHlwZXNcIjtcclxuaW1wb3J0IFJlZ2lzdGVyUm9vbVB1YmxpY0JlZFR5cGVzIGZyb20gXCIuL1JlZ2lzdGVyUm9vbVB1YmxpY0JlZFR5cGVzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJlZExpc3Q6UmVhY3QuRkM9KCk9PntcclxuICAgIGNvbnN0IGJlZExpc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5yZWdpc3RlclJvb20uYmVkTGlzdCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1saXN0XCI+XHJcbiAgICAgICAgICAgIHtiZWRMaXN0Lm1hcCgoYmVkcm9vbSk9PihcclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21CZWRUeXBlcyBrZXk9e2JlZHJvb20uaWR9IGJlZHJvb209e2JlZHJvb219IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8UmVnaXN0ZXJSb29tUHVibGljQmVkVHlwZXMgLz5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhSZWdpc3RlclJvb21CZWRMaXN0KTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgYmVkVHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7IEJlZFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvcm9vbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi8uLi9jb21tb24vQ291bnRlclwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5saWBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyOHB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV80OH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXB1YmxpYy1iZWQtdHlwZS1jb3VudGVycyB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50cyB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyIHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tUHVibGljQmVkVHlwZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcHVibGljQmVkTGlzdCA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ucHVibGljQmVkTGlzdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgdG90YWxCZWRzQ291bnQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICBwdWJsaWNCZWRMaXN0LmZvckVhY2goKGJlZCkgPT4ge1xyXG4gICAgICB0b3RhbCArPSBiZWQuY291bnQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9LCBbcHVibGljQmVkTGlzdF0pO1xyXG5cclxuICBjb25zdCBiZWRzVGV4dCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgdGV4dHMgPSBwdWJsaWNCZWRMaXN0Lm1hcCgoYmVkKSA9PiBgJHtiZWQudHlwZX0gJHtiZWQuY291bnR96rCcYCk7XHJcbiAgICByZXR1cm4gdGV4dHMuam9pbihcIixcIik7XHJcbiAgfSwgW3B1YmxpY0JlZExpc3RdKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbEJlZE9wdGlvbnMgPSAoKSA9PiBwdWJsaWNCZWRMaXN0Lm1hcCgoYmVkKSA9PiBiZWQudHlwZSk7XHJcbiAgLy8qIOyEoO2DneuQnCDsuajrjIAg7Ji17IWY65OkXHJcbiAgY29uc3QgW2FjdGl2ZWRCZWRPcHRpb25zLCBzZXRBY3RpdmVkQmVkT3B0aW9uc10gPSB1c2VTdGF0ZTxCZWRUeXBlW10+KFxyXG4gICAgaW5pdGlhbEJlZE9wdGlvbnNcclxuICApO1xyXG5cclxuICAvLyog64Ko7J2AIOy5qOuMgCDsmLXshZjrk6RcclxuICBjb25zdCBsYXN0QmVkT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIGJlZFR5cGVzLmZpbHRlcigoYmVkVHlwZSkgPT4gIWFjdGl2ZWRCZWRPcHRpb25zLmluY2x1ZGVzKGJlZFR5cGUpKTtcclxuICB9LCBbYWN0aXZlZEJlZE9wdGlvbnMsIHB1YmxpY0JlZExpc3RdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3BcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tXCI+6rO17Jqp6rO16rCEPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50c1wiPlxyXG4gICAgICAgICAgICDsuajrjIAge3RvdGFsQmVkc0NvdW50feqwnFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+e2JlZHNUZXh0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZCghb3BlbmVkKX0+XHJcbiAgICAgICAgICB7b3BlbmVkICYmIFwi7JmE66OMXCJ9XHJcbiAgICAgICAgICB7IW9wZW5lZCAmJlxyXG4gICAgICAgICAgICAodG90YWxCZWRzQ291bnQgPT09IDAgPyBcIuy5qOuMgCDstpTqsIDtlZjquLBcIiA6IFwi7Lmo64yAIOyImOygle2VmOq4sFwiKX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtvcGVuZWQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1wdWJsaWMtYmVkLXR5cGUtY291bnRlcnNcIj5cclxuICAgICAgICAgIHthY3RpdmVkQmVkT3B0aW9ucy5tYXAoKHR5cGUpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJcIiBrZXk9e3R5cGV9PlxyXG4gICAgICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17dHlwZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgcHVibGljQmVkTGlzdC5maW5kKChiZWQpID0+IGJlZC50eXBlID09PSB0eXBlKT8uY291bnQgfHwgMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRQdWJsaWNCZWRUeXBlQ291bnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXtsYXN0QmVkT3B0aW9uc31cclxuICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtbXCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXX1cclxuICAgICAgICAgICAgdmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgIHVzZVZhbGlkYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgc2V0QWN0aXZlZEJlZE9wdGlvbnMoW1xyXG4gICAgICAgICAgICAgICAgLi4uYWN0aXZlZEJlZE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyBCZWRUeXBlLFxyXG4gICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhSZWdpc3RlclJvb21QdWJsaWNCZWRUeXBlcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==