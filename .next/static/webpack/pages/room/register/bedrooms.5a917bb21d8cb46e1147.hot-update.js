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
          children: [bedroom.id, " \uBC88 \uCE68\uC2E4"]
        }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21CZWRUeXBlcyIsImJlZHJvb20iLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b3RhbEJlZHNDb3VudCIsInVzZU1lbW8iLCJ0b3RhbCIsImJlZHMiLCJmb3JFYWNoIiwiYmVkIiwiY291bnQiLCJiZWRzVGV4dCIsInRleHRzIiwibWFwIiwidHlwZSIsImpvaW4iLCJpbml0aWFsQmVkT3B0aW9ucyIsImFjdGl2ZWRCZWRPcHRpb25zIiwic2V0QWN0aXZlZEJlZE9wdGlvbnMiLCJsYXN0QmVkT3B0aW9ucyIsImJlZFR5cGVzIiwiZmlsdGVyIiwiYmVkVHlwZSIsImluY2x1ZGVzIiwiaWQiLCJwdWJsaWNCZWRMaXN0IiwiZmluZCIsInZhbHVlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldFB1YmxpY0JlZFR5cGVDb3VudCIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsa2ZBR1dDLHVEQUFPLENBQUNDLE9BSG5CLEVBS2dCRCx1REFBTyxDQUFDQyxPQUx4QixFQWFGRCx1REFBTyxDQUFDRSxPQWJOLEVBeUJGRix1REFBTyxDQUFDRyxPQXpCTixDQUFmO0tBQU1OLFM7O0FBcUNOLElBQU1PLG9CQUFzQyxHQUFHLFNBQXpDQSxvQkFBeUMsT0FBYTtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEs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QUFFSSxpQkFBSyxFQUNELHdCQUFBVyxhQUFhLENBQUNDLElBQWQsQ0FBbUIsVUFBQ2pCLEdBQUQ7QUFBQSxxQkFBU0EsR0FBRyxDQUFDSyxJQUFKLEtBQWFBLElBQXRCO0FBQUEsYUFBbkIsNkVBQWdESixLQUFoRCxLQUF5RCxDQUhqRTtBQU1JLG9CQUFRLEVBQUUsa0JBQUNpQixLQUFELEVBQVM7QUFDZjtBQUNBekIsc0JBQVEsQ0FDSjBCLHVFQUFtQixDQUFDQyxxQkFBcEIsQ0FBMEM7QUFDdENmLG9CQUFJLEVBQUpBLElBRHNDO0FBRXRDSixxQkFBSyxFQUFDaUI7QUFGZ0MsZUFBMUMsQ0FESSxDQUFSO0FBTUg7QUFkTCxhQUtTYixJQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFxREEsSUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbUI7QUFBQSxPQUF0QixDQURMLGVBcUJJLHFFQUFDLHdEQUFEO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxlQUFPLEVBQUVLLGNBRmI7QUFHSSxvQkFBWSxFQUFDLHdDQUhqQjtBQUlJLGFBQUssRUFBQyx3Q0FKVjtBQUtJLHVCQUFlLEVBQUUsQ0FBQyxVQUFELENBTHJCO0FBTUkscUJBQWEsRUFBRSxLQU5uQjtBQU9JLGdCQUFRLEVBQUUsa0JBQUNXLENBQUQ7QUFBQSxpQkFDTlosb0JBQW9CLDBLQUNiRCxpQkFEYSxJQUVoQmEsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLEtBRk8sR0FEZDtBQUFBO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpRUgsQ0FwR0Q7O0dBQU05QixvQjtVQUtlTSx1RDs7O01BTGZOLG9CO0FBc0dTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JlZHJvb21zLjVhOTE3YmIyMWQ4Y2I0NmUxMTQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGJlZFR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHtCZWRUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvcm9vbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi8uLi9jb21tb24vQ291bnRlclwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI4cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbSB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1wdWJsaWMtYmVkLXR5cGUtY291bnRlcnMge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVycyB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyIHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wc3tcclxuICAgIGJlZHJvb206e2lkOm51bWJlcjsgYmVkczp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W119O1xyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CZWRUeXBlczogUmVhY3QuRkM8SVByb3BzPiA9ICh7YmVkcm9vbX0pPT57XHJcbiAgICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy9jb25zdCBwdWJsaWNCZWRMaXN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucmVnaXN0ZXJSb29tLnB1YmxpY0JlZExpc3QpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICAvLyAqIOy5qOuMgCDqsJzsiJgg7LSd7ZWpXHJcbiAgICBjb25zdCB0b3RhbEJlZHNDb3VudCA9IHVzZU1lbW8oKCk9PntcclxuICAgICAgICBsZXQgdG90YWw9MDtcclxuICAgICAgICBiZWRyb29tLmJlZHMuZm9yRWFjaCgoYmVkKT0+e1xyXG4gICAgICAgICAgICB0b3RhbCArPSBiZWQuY291bnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfSwgW2JlZHJvb21dKTtcclxuICAgIC8vICog7Lmo64yAIOyiheulmCDthY3siqTtirhcclxuICAgIGNvbnN0IGJlZHNUZXh0ID0gdXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRleHRzPWJlZHJvb20uYmVkcy5tYXAoKGJlZCkgPT4gYCR7YmVkLnR5cGV9ICR7YmVkLmNvdW50fSDqsJxgKTtcclxuICAgICAgICByZXR1cm4gdGV4dHMuam9pbihcIixcIik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbEJlZE9wdGlvbnMgPSBiZWRyb29tLmJlZHMubWFwKChiZWQpID0+IGJlZC50eXBlKTtcclxuICAgIC8vICog7ISg7YOd65CcIOy5qOuMgCDsmLXshZjrk6RcclxuICAgIGNvbnN0IFthY3RpdmVkQmVkT3B0aW9ucywgc2V0QWN0aXZlZEJlZE9wdGlvbnNdID0gdXNlU3RhdGU8QmVkVHlwZVtdPihcclxuICAgICAgICBpbml0aWFsQmVkT3B0aW9uc1xyXG4gICAgKTtcclxuICAgIC8vICog64Ko7J2AIOy5qOuMgCDsmLXshZjrk6RcclxuICAgIGNvbnN0IGxhc3RCZWRPcHRpb25zPXVzZU1lbW8oKCk9PntcclxuICAgICAgICByZXR1cm4gYmVkVHlwZXMuZmlsdGVyKChiZWRUeXBlKT0+IWFjdGl2ZWRCZWRPcHRpb25zLmluY2x1ZGVzKGJlZFR5cGUpKTtcclxuICAgIH0sIFthY3RpdmVkQmVkT3B0aW9ucywgYmVkcm9vbV0pO1xyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tXCI+e2JlZHJvb20uaWR9IOuyiCDsuajsi6Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tLWNvdW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsuajrjIAge3RvdGFsQmVkc0NvdW50feqwnCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JlZHNUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+c2V0T3BlbmVkKCFvcGVuZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3BlbmVkICYmIFwi7JmE66OMXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFvcGVuZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsQmVkc0NvdW50ID09PSAwID8gXCLsuajrjIAg7LaU6rCA7ZWY6riwXCI6XCLsuajrjIAg7IiY7KCV7ZWY6riwXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge29wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtY291bnRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlZEJlZE9wdGlvbnMubWFwKCh0eXBlKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtY291bnRlclwiIGtleT17dHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNCZWRMaXN0LmZpbmQoKGJlZCkgPT4gYmVkLnR5cGUgPT09IHR5cGUpPy5jb3VudCB8fCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQ2hhbmdlQmVkVHlwZUNvdW50KHZhbHVlLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldFB1YmxpY0JlZFR5cGVDb3VudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDp2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhc3RCZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e1tcIuuLpOuluCDsuajrjIAg7LaU6rCAXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVkQmVkT3B0aW9ucyhbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aXZlZEJlZE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgYXMgQmVkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOyJdLCJzb3VyY2VSb290IjoiIn0=