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
  }, [activedBedOptions, bedroom]); // * 침실 침대 개수 변경 시

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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom",
          children: "\uACF5\uC6A9\uACF5\uAC04"
        }, void 0, false, {
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
        onClick: function onClick() {
          return setOpened(!opened);
        },
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

_s(RegisterRoomBedTypes, "VEJaBVcTvJQwCpZgolBOHoLr1UM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21CZWRUeXBlcyIsImJlZHJvb20iLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsInB1YmxpY0JlZExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvdGFsQmVkc0NvdW50IiwidXNlTWVtbyIsInRvdGFsIiwiYmVkcyIsImZvckVhY2giLCJiZWQiLCJjb3VudCIsImJlZHNUZXh0IiwidGV4dHMiLCJtYXAiLCJ0eXBlIiwiam9pbiIsImluaXRpYWxCZWRPcHRpb25zIiwiYWN0aXZlZEJlZE9wdGlvbnMiLCJzZXRBY3RpdmVkQmVkT3B0aW9ucyIsImxhc3RCZWRPcHRpb25zIiwiYmVkVHlwZXMiLCJmaWx0ZXIiLCJiZWRUeXBlIiwiaW5jbHVkZXMiLCJvbkNoYW5nZUJlZFR5cGVDb3VudCIsInZhbHVlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldEJlZFR5cGVDb3VudCIsImJlZHJvb21JZCIsImlkIiwidG9nZ2xlT3BlbmQiLCJlIiwidGFyZ2V0IiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxrZkFHV0MsdURBQU8sQ0FBQ0MsT0FIbkIsRUFLZ0JELHVEQUFPLENBQUNDLE9BTHhCLEVBYUZELHVEQUFPLENBQUNFLE9BYk4sRUF5QkZGLHVEQUFPLENBQUNHLE9BekJO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MEIsSUFBYixDQUFrQixVQUFDeEIsR0FBRDtBQUFBLHFCQUFPQSxHQUFHLENBQUNLLElBQUosS0FBV0EsSUFBbEI7QUFBQSxhQUFsQiwyRUFBMkNKLEtBQTNDLEtBQW9ELENBRi9EO0FBSUksb0JBQVEsRUFBRSxrQkFBQ2UsS0FBRCxFQUFTO0FBQ2ZELGtDQUFvQixDQUFDQyxLQUFELEVBQVFYLElBQVIsQ0FBcEI7QUFDSDtBQU5MLGFBR1NBLElBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQXFEQSxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURtQjtBQUFBLE9BQXRCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlESCxDQTdHRDs7R0FBTXJCLG9CO1VBRW9CTSxrRCxFQUtMSSx1RDs7O01BUGZWLG9CO0FBK0dTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JlZHJvb21zLmY3NjJiODJmMWQ3M2JlNWI1NzNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGJlZFR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHtCZWRUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvcm9vbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi8uLi9jb21tb24vQ291bnRlclwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI4cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbSB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1wdWJsaWMtYmVkLXR5cGUtY291bnRlcnMge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVycyB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyIHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wc3tcclxuICAgIGJlZHJvb206e2lkOm51bWJlcjsgYmVkczp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W119O1xyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CZWRUeXBlczogUmVhY3QuRkM8SVByb3BzPiA9ICh7YmVkcm9vbX0pPT57XHJcbiAgICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcHVibGljQmVkTGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnJlZ2lzdGVyUm9vbS5wdWJsaWNCZWRMaXN0KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cclxuICAgIC8vICog7Lmo64yAIOqwnOyImCDstJ3tlalcclxuICAgIGNvbnN0IHRvdGFsQmVkc0NvdW50ID0gdXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGxldCB0b3RhbD0wO1xyXG4gICAgICAgIGJlZHJvb20uYmVkcy5mb3JFYWNoKChiZWQpPT57XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGJlZC5jb3VudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9LCBbYmVkcm9vbV0pO1xyXG4gICAgLy8gKiDsuajrjIAg7KKF66WYIO2FjeyKpO2KuFxyXG4gICAgY29uc3QgYmVkc1RleHQgPSB1c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgdGV4dHM9YmVkcm9vbS5iZWRzLm1hcCgoYmVkKSA9PiBgJHtiZWQudHlwZX0gJHtiZWQuY291bnR9IOqwnGApO1xyXG4gICAgICAgIHJldHVybiB0ZXh0cy5qb2luKFwiLFwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsQmVkT3B0aW9ucyA9IGJlZHJvb20uYmVkcy5tYXAoKGJlZCkgPT4gYmVkLnR5cGUpO1xyXG4gICAgLy8gKiDshKDtg53rkJwg7Lmo64yAIOyYteyFmOuTpFxyXG4gICAgY29uc3QgW2FjdGl2ZWRCZWRPcHRpb25zLCBzZXRBY3RpdmVkQmVkT3B0aW9uc10gPSB1c2VTdGF0ZTxCZWRUeXBlW10+KFxyXG4gICAgICAgIGluaXRpYWxCZWRPcHRpb25zXHJcbiAgICApO1xyXG4gICAgLy8gKiDrgqjsnYAg7Lmo64yAIOyYteyFmOuTpFxyXG4gICAgY29uc3QgbGFzdEJlZE9wdGlvbnM9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIHJldHVybiBiZWRUeXBlcy5maWx0ZXIoKGJlZFR5cGUpPT4hYWN0aXZlZEJlZE9wdGlvbnMuaW5jbHVkZXMoYmVkVHlwZSkpO1xyXG4gICAgfSwgW2FjdGl2ZWRCZWRPcHRpb25zLCBiZWRyb29tXSk7XHJcblxyXG4gICAgLy8gKiDsuajsi6Qg7Lmo64yAIOqwnOyImCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJlZFR5cGVDb3VudCA9ICh2YWx1ZTpOdW1iZXIsIHR5cGU6QmVkVHlwZSkgPT5cclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCZWRUeXBlQ291bnQoe1xyXG4gICAgICAgICAgICAgICAgYmVkcm9vbUlkOmJlZHJvb20uaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IHZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuXHJcbiAgICAvLyAqIOy5qOyLpCDsnKDtmJUg7Je06rOgIOuLq+q4sFxyXG4gICAgY29uc3QgdG9nZ2xlT3BlbmQgPSAoKSA9PiBzZXRPcGVuZWQoIW9wZW5lZCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb21cIj7qs7Xsmqnqs7XqsIQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsuajrjIAge3RvdGFsQmVkc0NvdW50feqwnCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JlZHNUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+c2V0T3BlbmVkKCFvcGVuZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3BlbmVkICYmIFwi7JmE66OMXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFvcGVuZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsQmVkc0NvdW50ID09PSAwID8gXCLsuajrjIAg7LaU6rCA7ZWY6riwXCI6XCLsuajrjIAg7IiY7KCV7ZWY6riwXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhc3RCZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e1tcIuuLpOuluCDsuajrjIAg7LaU6rCAXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0QWN0aXZlZEJlZE9wdGlvbnMoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aXZlZEJlZE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyBCZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtvcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZWRCZWRPcHRpb25zLm1hcCgodHlwZSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJcIiBrZXk9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiZWRyb29tLmJlZHMuZmluZCgoYmVkKT0+YmVkLnR5cGU9PT10eXBlKT8uY291bnQgfHwgMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VCZWRUeXBlQ291bnQodmFsdWUsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOyJdLCJzb3VyY2VSb290IjoiIn0=