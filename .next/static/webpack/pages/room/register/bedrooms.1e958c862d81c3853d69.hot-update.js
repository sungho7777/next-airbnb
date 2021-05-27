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
})(["width:100%;padding:28px 0;border-top:1px solid ", ";&:last-child{border-bottom:1px solid ", ";}.register-room-bed-type-top{display:flex;justify-content:space-between;}.register-room-bed-type-bedroom{font-size:19px;color:", ";}.register-room-bed-type-selector-wrapper{margin-top:28px;width:320px;}.register-room-bed-type-counters{width:320px;margin-top:28px;}.register-room-bed-type-counter{width:290px;margin-bottom:18px;}.register-room-bed-type-bedroom-counts{font-size:19px;color:", ";max-width:240px;word-break:keep-all;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_48, _styles_palette__WEBPACK_IMPORTED_MODULE_7__["default"].gray_76);
_c = Container;

var RegisterRoomBedTypes = function RegisterRoomBedTypes(_ref) {
  _s();

  var bedroom = _ref.bedroom;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      opened = _useState[0],
      setOpened = _useState[1]; //* 선택된 침대 옵션들


  var initialBedOptions = bedroom.beds.map(function (bed) {
    return bed.type;
  }); //* 선택된 침대 옵션들

  /*
    activedBedOptions는 useState를 사용 > 페이지 다시 접근 시 초기화
    초기화를 막기위해 redux에 있는 값을 초기값으로 설정
  */

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialBedOptions),
      activedBedOptions = _useState2[0],
      setActivedBedOptions = _useState2[1]; //* 남은 침대 옵션들
  // 옵션에서 변경이 일어나면 클릭한 옵션을 셀렉트에서 제거한다.


  var lastBedOptions = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return _lib_staticData__WEBPACK_IMPORTED_MODULE_5__["bedTypes"].filter(function (bedType) {
      return !activedBedOptions.includes(bedType);
    });
  }, [activedBedOptions, bedroom]);
  console.log("activedBedOptions");
  console.log(activedBedOptions); //* 침대 개수 총합

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
  }; //* 침대 종류 텍스트


  var bedsText = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var texts = bedroom.beds.map(function (bed) {
      return "".concat(bed.type, " ").concat(bed.count, "\uAC1C");
    });
    return texts.join(",");
  }, [bedroom]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); //styleType="register" color="white"

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-bed-type-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom",
          children: [bedroom.id, "\uBC88 \uCE68\uC2E4"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 35
          }, _this), bedsText]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: toggleOpened,
        styleType: "register",
        color: "white",
        width: "161px",
        children: [opened && "완료", !opened && (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
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
            lineNumber: 123,
            columnNumber: 17
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 15
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
        lineNumber: 135,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21CZWRUeXBlcyIsImJlZHJvb20iLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsImluaXRpYWxCZWRPcHRpb25zIiwiYmVkcyIsIm1hcCIsImJlZCIsInR5cGUiLCJhY3RpdmVkQmVkT3B0aW9ucyIsInNldEFjdGl2ZWRCZWRPcHRpb25zIiwibGFzdEJlZE9wdGlvbnMiLCJ1c2VNZW1vIiwiYmVkVHlwZXMiLCJmaWx0ZXIiLCJiZWRUeXBlIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwidG90YWxCZWRzQ291bnQiLCJ0b3RhbCIsImZvckVhY2giLCJjb3VudCIsInRvZ2dsZU9wZW5lZCIsIm9uQ2hhbmdlQmVkVHlwZUNvdW50IiwidmFsdWUiLCJkaXNwYXRjaCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJzZXRCZWRUeXBlQ291bnQiLCJiZWRyb29tSWQiLCJpZCIsImJlZHNUZXh0IiwidGV4dHMiLCJqb2luIiwidXNlRGlzcGF0Y2giLCJmaW5kIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxxaEJBR1dDLHVEQUFPLENBQUNDLE9BSG5CLEVBS2dCRCx1REFBTyxDQUFDQyxPQUx4QixFQWFGRCx1REFBTyxDQUFDRSxPQWJOLEVBOEJGRix1REFBTyxDQUFDRyxPQTlCTixDQUFmO0tBQU1OLFM7O0FBd0NOLElBQU1PLG9CQUFzQyxH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QUFJRSxhQUFLLEVBQUMsd0NBSlI7QUFLRSx1QkFBZSxFQUFFLENBQUMsVUFBRCxDQUxuQjtBQU1FLHFCQUFhLEVBQUUsS0FOakI7QUFPRSxnQkFBUSxFQUFFLGtCQUFDeUIsQ0FBRDtBQUFBLGlCQUNOMUIsb0JBQW9CLDBLQUNmRCxpQkFEZSxJQUVsQjJCLENBQUMsQ0FBQ0MsTUFBRixDQUFTWixLQUZTLEdBRGQ7QUFBQTtBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlESCxDQXJHRDs7R0FBTTFCLG9CO1VBa0RlbUMsdUQ7OztNQWxEZm5DLG9CO0FBdUdTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JlZHJvb21zLjFlOTU4Yzg2MmQ4MWMzODUzZDY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgYmVkVHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCB7IEJlZFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvcm9vbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi8uLi9jb21tb24vQ291bnRlclwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI4cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbSB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJzIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXIge1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbS1jb3VudHMge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGJlZHJvb206IHsgaWQ6IG51bWJlcjsgYmVkczogeyB0eXBlOiBCZWRUeXBlOyBjb3VudDogbnVtYmVyIH1bXSB9O1xyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CZWRUeXBlczogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGJlZHJvb20gfSkgPT4ge1xyXG4gICAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vKiDshKDtg53rkJwg7Lmo64yAIOyYteyFmOuTpFxyXG4gICAgY29uc3QgaW5pdGlhbEJlZE9wdGlvbnMgPSBiZWRyb29tLmJlZHMubWFwKChiZWQpID0+IGJlZC50eXBlKTtcclxuXHJcbiAgICAvLyog7ISg7YOd65CcIOy5qOuMgCDsmLXshZjrk6RcclxuICAgIC8qXHJcbiAgICAgIGFjdGl2ZWRCZWRPcHRpb25z64qUIHVzZVN0YXRl66W8IOyCrOyaqSA+IO2OmOydtOyngCDri6Tsi5wg7KCR6re8IOyLnCDstIjquLDtmZRcclxuICAgICAg7LSI6riw7ZmU66W8IOunieq4sOychO2VtCByZWR1eOyXkCDsnojripQg6rCS7J2EIOy0iOq4sOqwkuycvOuhnCDshKTsoJVcclxuICAgICovXHJcbiAgICBjb25zdCBbYWN0aXZlZEJlZE9wdGlvbnMsIHNldEFjdGl2ZWRCZWRPcHRpb25zXSA9IHVzZVN0YXRlPEJlZFR5cGVbXT4oXHJcbiAgICAgIGluaXRpYWxCZWRPcHRpb25zXHJcbiAgICApO1xyXG4gICAgLy8qIOuCqOydgCDsuajrjIAg7Ji17IWY65OkXHJcbiAgICAvLyDsmLXshZjsl5DshJwg67OA6rK97J20IOydvOyWtOuCmOuptCDtgbTrpq3tlZwg7Ji17IWY7J2EIOyFgOugie2KuOyXkOyEnCDsoJzqsbDtlZzri6QuXHJcbiAgICBjb25zdCBsYXN0QmVkT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gYmVkVHlwZXMuZmlsdGVyKChiZWRUeXBlKSA9PiAhYWN0aXZlZEJlZE9wdGlvbnMuaW5jbHVkZXMoYmVkVHlwZSkpO1xyXG4gICAgfSwgW2FjdGl2ZWRCZWRPcHRpb25zLCBiZWRyb29tXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJhY3RpdmVkQmVkT3B0aW9uc1wiKTtcclxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZWRCZWRPcHRpb25zKTtcclxuXHJcbiAgICAvLyog7Lmo64yAIOqwnOyImCDstJ3tlalcclxuICAgIGNvbnN0IHRvdGFsQmVkc0NvdW50ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBiZWRyb29tLmJlZHMuZm9yRWFjaCgoYmVkKSA9PiB7XHJcbiAgICAgICAgdG90YWwgKz0gYmVkLmNvdW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH0sIFtiZWRyb29tXSk7XHJcblxyXG4gICAgLy8qIOy5qOyLpCDsnKDtmJUg7Je06rOgIOuLq+q4sFxyXG4gICAgY29uc3QgdG9nZ2xlT3BlbmVkID0gKCkgPT4gc2V0T3BlbmVkKCFvcGVuZWQpO1xyXG5cclxuICAgIC8vKiDsuajsi6Qg7Lmo64yAIOqwr+yImCDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQmVkVHlwZUNvdW50ID0gKHZhbHVlOiBudW1iZXIsIHR5cGU6IEJlZFR5cGUpID0+XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QmVkVHlwZUNvdW50KHtcclxuICAgICAgICAgIGJlZHJvb21JZDogYmVkcm9vbS5pZCxcclxuICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICBjb3VudDogdmFsdWUsXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8qIOy5qOuMgCDsooXrpZgg7YWN7Iqk7Yq4XHJcbiAgICBjb25zdCBiZWRzVGV4dCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICBjb25zdCB0ZXh0cyA9IGJlZHJvb20uYmVkcy5tYXAoKGJlZCkgPT4gYCR7YmVkLnR5cGV9ICR7YmVkLmNvdW50feqwnGApO1xyXG4gICAgICByZXR1cm4gdGV4dHMuam9pbihcIixcIik7XHJcbiAgICB9LCBbYmVkcm9vbV0pO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuLy9zdHlsZVR5cGU9XCJyZWdpc3RlclwiIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb21cIj57YmVkcm9vbS5pZH3rsogg7Lmo7IukPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20tY291bnRzXCI+XHJcbiAgICAgICAgICAgICAg7Lmo64yAIHt0b3RhbEJlZHNDb3VudH3qsJw8YnIgLz5cclxuICAgICAgICAgICAgICB7YmVkc1RleHR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVPcGVuZWR9IHN0eWxlVHlwZT1cInJlZ2lzdGVyXCIgY29sb3I9XCJ3aGl0ZVwiIHdpZHRoPVwiMTYxcHhcIj5cclxuICAgICAgICAgICAge29wZW5lZCAmJiBcIuyZhOujjFwifVxyXG4gICAgICAgICAgICB7IW9wZW5lZCAmJiAodG90YWxCZWRzQ291bnQgPT09IDAgPyBcIuy5qOuMgCDstpTqsIDtlZjquLBcIiA6IFwi7Lmo64yAIOyImOygle2VmOq4sFwiKX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtvcGVuZWQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAge2FjdGl2ZWRCZWRPcHRpb25zLm1hcCgodHlwZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyXCIga2V5PXt0eXBlfT5cclxuICAgICAgICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgYmVkcm9vbS5iZWRzLmZpbmQoKGJlZCkgPT4gYmVkLnR5cGUgPT09IHR5cGUpPy5jb3VudCB8fCAwXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VCZWRUeXBlQ291bnQodmFsdWUsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtsYXN0QmVkT3B0aW9uc31cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtbXCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXX1cclxuICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZWRCZWRPcHRpb25zKFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY3RpdmVkQmVkT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyBCZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOyJdLCJzb3VyY2VSb290IjoiIn0=