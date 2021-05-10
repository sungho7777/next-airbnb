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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom",
          children: "\uACF5\uC6A9\uACF5\uAC04"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "register-room-bed-type-bedroom-counts",
          children: ["\uCE68\uB300 ", totalBedsCount, "\uAC1C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 46
          }, _this), bedsText]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
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
        lineNumber: 113,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
            lineNumber: 129,
            columnNumber: 29
          }, _this)
        }, type, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
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
        lineNumber: 147,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21CZWRUeXBlcyIsImJlZHJvb20iLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b3RhbEJlZHNDb3VudCIsInVzZU1lbW8iLCJ0b3RhbCIsImJlZHMiLCJmb3JFYWNoIiwiYmVkIiwiY291bnQiLCJiZWRzVGV4dCIsInRleHRzIiwibWFwIiwidHlwZSIsImpvaW4iLCJpbml0aWFsQmVkT3B0aW9ucyIsImFjdGl2ZWRCZWRPcHRpb25zIiwic2V0QWN0aXZlZEJlZE9wdGlvbnMiLCJsYXN0QmVkT3B0aW9ucyIsImJlZFR5cGVzIiwiZmlsdGVyIiwiYmVkVHlwZSIsImluY2x1ZGVzIiwib25DaGFuZ2VCZWRUeXBlQ291bnQiLCJ2YWx1ZSIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJzZXRCZWRUeXBlQ291bnQiLCJiZWRyb29tSWQiLCJpZCIsInRvZ2dsZU9wZW5kIiwicHVibGljQmVkTGlzdCIsImZpbmQiLCJzZXRQdWJsaWNCZWRUeXBlQ291bnQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLGtmQUdXQyx1REFBTyxDQUFDQyxPQUhuQixFQUtnQkQsdURBQU8sQ0FBQ0MsT0FMeEIsRUFhRkQsdURBQU8sQ0FBQ0UsT0FiTixFQXlCRkYsdURBQU8sQ0FBQ0csT0F6Qk4sQ0FBZjtLQUFNTixTOztBQXFD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LEVBQUUsS0FObkI7QUFPSSxnQkFBUSxFQUFFLGtCQUFDZSxDQUFEO0FBQUEsaUJBQ05oQixvQkFBb0IsMEtBQ2JELGlCQURhLElBRWhCaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNWLEtBRk8sR0FEZDtBQUFBO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtRUgsQ0F0SEQ7O0dBQU01QixvQjtVQU1lTSx1RDs7O01BTmZOLG9CO0FBd0hTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JlZHJvb21zLmZkOTI1MWZiMTExZDg5NDAwODkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGJlZFR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHtCZWRUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvcm9vbVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi8uLi9jb21tb24vQ291bnRlclwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI4cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbSB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1wdWJsaWMtYmVkLXR5cGUtY291bnRlcnMge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVycyB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyIHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wc3tcclxuICAgIGJlZHJvb206e2lkOm51bWJlcjsgYmVkczp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W119O1xyXG59XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CZWRUeXBlczogUmVhY3QuRkM8SVByb3BzPiA9ICh7YmVkcm9vbX0pPT57XHJcbiAgICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgLy8gKiDsuajrjIAg6rCc7IiYIOy0ne2VqVxyXG4gICAgY29uc3QgdG90YWxCZWRzQ291bnQgPSB1c2VNZW1vKCgpPT57XHJcbiAgICAgICAgbGV0IHRvdGFsPTA7XHJcbiAgICAgICAgYmVkcm9vbS5iZWRzLmZvckVhY2goKGJlZCk9PntcclxuICAgICAgICAgICAgdG90YWwgKz0gYmVkLmNvdW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH0sIFtiZWRyb29tXSk7XHJcbiAgICAvLyAqIOy5qOuMgCDsooXrpZgg7YWN7Iqk7Yq4XHJcbiAgICBjb25zdCBiZWRzVGV4dCA9IHVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB0ZXh0cz1iZWRyb29tLmJlZHMubWFwKChiZWQpID0+IGAke2JlZC50eXBlfSAke2JlZC5jb3VudH0g6rCcYCk7XHJcbiAgICAgICAgcmV0dXJuIHRleHRzLmpvaW4oXCIsXCIpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxCZWRPcHRpb25zID0gYmVkcm9vbS5iZWRzLm1hcCgoYmVkKSA9PiBiZWQudHlwZSk7XHJcbiAgICAvLyAqIOyEoO2DneuQnCDsuajrjIAg7Ji17IWY65OkXHJcbiAgICBjb25zdCBbYWN0aXZlZEJlZE9wdGlvbnMsIHNldEFjdGl2ZWRCZWRPcHRpb25zXSA9IHVzZVN0YXRlPEJlZFR5cGVbXT4oXHJcbiAgICAgICAgaW5pdGlhbEJlZE9wdGlvbnNcclxuICAgICk7XHJcbiAgICAvLyAqIOuCqOydgCDsuajrjIAg7Ji17IWY65OkXHJcbiAgICBjb25zdCBsYXN0QmVkT3B0aW9ucz11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgcmV0dXJuIGJlZFR5cGVzLmZpbHRlcigoYmVkVHlwZSk9PiFhY3RpdmVkQmVkT3B0aW9ucy5pbmNsdWRlcyhiZWRUeXBlKSk7XHJcbiAgICB9LCBbYWN0aXZlZEJlZE9wdGlvbnMsIGJlZHJvb21dKTtcclxuXHJcbiAgICAvLyAqIOy5qOyLpCDsuajrjIAg6rCc7IiYIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQmVkVHlwZUNvdW50ID0gKHZhbHVlOk51bWJlciwgdHlwZTpCZWRUeXBlKSA9PlxyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJlZFR5cGVDb3VudCh7XHJcbiAgICAgICAgICAgICAgICBiZWRyb29tSWQ6YmVkcm9vbS5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcblxyXG5cclxuICAgIC8vICog7Lmo7IukIOycoO2YlSDsl7Tqs6Ag64ur6riwXHJcbiAgICBjb25zdCB0b2dnbGVPcGVuZCA9ICgpID0+IHNldE9wZW5lZCghb3BlbmVkKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYmVkLXR5cGUtYmVkcm9vbVwiPuqzteyaqeqzteqwhDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20tY291bnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOy5qOuMgCB7dG90YWxCZWRzQ291bnR96rCcIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmVkc1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXRPcGVuZWQoIW9wZW5lZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUeXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcGVuZWQgJiYgXCLsmYTro4xcIn1cclxuICAgICAgICAgICAgICAgICAgICB7IW9wZW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodG90YWxCZWRzQ291bnQgPT09IDAgPyBcIuy5qOuMgCDstpTqsIDtlZjquLBcIjpcIuy5qOuMgCDsiJjsoJXtlZjquLBcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVkQmVkT3B0aW9ucy5tYXAoKHR5cGUpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1jb3VudGVyXCIga2V5PXt0eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY0JlZExpc3QuZmluZCgoYmVkKSA9PiBiZWQudHlwZSA9PT0gdHlwZSk/LmNvdW50IHx8IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25DaGFuZ2VCZWRUeXBlQ291bnQodmFsdWUsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0UHVibGljQmVkVHlwZUNvdW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bGFzdEJlZE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIuuLpOuluCDsuajrjIAg7LaU6rCAXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17W1wi64uk66W4IOy5qOuMgCDstpTqsIBcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVZhbGlkYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZWRCZWRPcHRpb25zKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hY3RpdmVkQmVkT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyBCZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQmVkVHlwZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==