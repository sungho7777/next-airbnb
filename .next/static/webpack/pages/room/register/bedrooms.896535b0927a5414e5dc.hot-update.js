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

  var publicBedList = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])();
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

_s(RegisterRoomBedTypes, "JImNmHbGn4e8yAy9bIVQbyWUyII=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUJlZFR5cGVzLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJsaSIsInBhbGV0dGUiLCJncmF5X2RkIiwiZ3JheV80OCIsImdyYXlfNzYiLCJSZWdpc3RlclJvb21CZWRUeXBlcyIsImJlZHJvb20iLCJ1c2VTdGF0ZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsInB1YmxpY0JlZExpc3QiLCJ1c2VTZWxlY3RvciIsImluaXRpYWxCZWRPcHRpb25zIiwiYmVkcyIsIm1hcCIsImJlZCIsInR5cGUiLCJhY3RpdmVkQmVkT3B0aW9ucyIsInNldEFjdGl2ZWRCZWRPcHRpb25zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInRvdGFsQmVkc0NvdW50IiwidXNlTWVtbyIsInRvdGFsIiwiZm9yRWFjaCIsImNvdW50IiwibGFzdEJlZE9wdGlvbnMiLCJiZWRUeXBlcyIsImZpbHRlciIsImJlZFR5cGUiLCJpbmNsdWRlcyIsImJlZHNUZXh0IiwidGV4dHMiLCJqb2luIiwib25DaGFuZ2VCZWRUeXBlQ291bnQiLCJ2YWx1ZSIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJzZXRCZWRUeXBlQ291bnQiLCJiZWRyb29tSWQiLCJpZCIsInRvZ2dsZU9wZW5kIiwiZSIsInRhcmdldCIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsa2ZBR1dDLHVEQUFPLENBQUNDLE9BSG5CLEVBS2dCRCx1REFBTyxDQUFDQyxPQUx4QixFQWFGRCx1REFBTyxDQUFDRSxPQWJOLEVBeUJGRix1REFBTyxDQUFDRyxPQXpCTixDQUFmO0tBQU1OLFM7O0FBcUNOLElBQU1PLG9CQUFzQyxHQUFHLFNBQXpDQSxvQkFBeUMsT0FBYTtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQUMsS0FBRCxDQURvQjtBQUFBLE1BQ2pEQyxNQURpRDtBQUFBLE1BQ3pDQyxTQUR5Qzs7QUFFeEQsTUFBTUMsYUFBYSxHQUFHQywwREFBVyxFQUFqQztBQUVBLE1BQU1DLGlCQUFpQixHQUFHTixPQUFPLENBQUNPLElBQVIsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFiO0FBQUEsR0FBakIsQ0FBMUIsQ0FKd0QsQ0FNeEQ7O0FBTndELG1CQU9OVCxzREFBUSxDQUN0REssaUJBRHNELENBUEY7QUFBQSxNQU9qREssaUJBUGlEO0FBQUEsTUFPOUJDLG9CQVA4Qjs7QUFZeEQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQVp3RCxDQWV4RDs7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLHFEQUFPLENBQUMsWUFBSTtBQUMvQixRQUFJQyxLQUFLLEdBQUMsQ0FBVjtBQUNBakIsV0FBTyxDQUFDTyxJQUFSLENBQWFXLE9BQWIsQ0FBcUIsVUFBQ1QsR0FBRCxFQUFPO0FBQ3hCUSxXQUFLLElBQUlSLEdBQUcsQ0FBQ1UsS0FBYjtBQUNILEtBRkQ7QUFHQSxXQUFPRixLQUFQO0FBQ0gsR0FONkIsRUFNM0IsQ0FBQ2pCLE9BQUQsQ0FOMkIsQ0FBOUIsQ0FoQndELENBdUJ4RDs7QUFDQSxNQUFNb0IsY0FBYyxHQUFDSixxREFBTyxDQUFDLFlBQUk7QUFDN0IsV0FBT0ssd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFDQyxPQUFEO0FBQUEsYUFBVyxDQUFDWixpQkFBaUIsQ0FBQ2EsUUFBbEIsQ0FBMkJELE9BQTNCLENBQVo7QUFBQSxLQUFoQixDQUFQO0FBQ0gsR0FGMkIsRUFFekIsQ0FBQ1osaUJBQUQsRUFBb0JYLE9BQXBCLENBRnlCLENBQTVCLENBeEJ3RCxDQTJCeEQ7O0FBQ0EsTUFBTXlCLFFBQVEsR0FBR1QscURBQU8sQ0FBQyxZQUFJO0FBQ3pCLFFBQU1VLEtBQUssR0FBQzFCLE9BQU8sQ0FBQ08sSUFBUixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEdBQUQ7QUFBQSx1QkFBWUEsR0FBRyxDQUFDQyxJQUFoQixjQUF3QkQsR0FBRyxDQUFDVSxLQUE1QjtBQUFBLEtBQWpCLENBQVo7QUFDQSxXQUFPTyxLQUFLLENBQUNDLElBQU4sQ0FBVyxHQUFYLENBQVA7QUFDSCxHQUh1QixFQUdyQixFQUhxQixDQUF4QixDQTVCd0QsQ0FrQ3hEOztBQUNBLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFlbkIsSUFBZjtBQUFBLFdBQ3pCRyxRQUFRLENBQ0ppQix1RUFBbUIsQ0FBQ0MsZUFBcEIsQ0FBb0M7QUFDaENDLGVBQVMsRUFBQ2hDLE9BQU8sQ0FBQ2lDLEVBRGM7QUFFaEN2QixVQUFJLEVBQUpBLElBRmdDO0FBR2hDUyxXQUFLLEVBQUVVO0FBSHlCLEtBQXBDLENBREksQ0FEaUI7QUFBQSxHQUE3QixDQW5Dd0QsQ0E4Q3hEOzs7QUFDQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU0vQixTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBcEI7O0FBS0Esc0JBQ0kscUVBQUMsU0FBRDtBQUFBLDRCQUdJO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLGdDQUFiO0FBQUEscUJBQStDRixPQUFPLENBQUNpQyxFQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsdUNBQWI7QUFBQSxzQ0FDUWxCLGNBRFIsMEJBQ3lCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHpCLEVBRUtVLFFBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBUUkscUVBQUMsc0RBQUQ7QUFDSSxlQUFPLEVBQUVTLFdBRGI7QUFFSSxpQkFBUyxFQUFDLFVBRmQ7QUFHSSxhQUFLLEVBQUMsT0FIVjtBQUFBLG1CQUtLaEMsTUFBTSxJQUFJLElBTGYsRUFNSyxDQUFDQSxNQUFELEtBQ0lhLGNBQWMsS0FBSyxDQUFuQixHQUF1QixTQUF2QixHQUFpQyxTQURyQyxDQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBc0JLYixNQUFNLGlCQUNIO0FBQUssZUFBUyxFQUFDLHlDQUFmO0FBQUEsNkJBQ0kscUVBQUMseURBQUQ7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLGVBQU8sRUFBRWtCLGNBRmI7QUFHSSxvQkFBWSxFQUFDLHdDQUhqQjtBQUlJLGFBQUssRUFBQyx3Q0FKVjtBQUtJLHVCQUFlLEVBQUUsQ0FBQyxVQUFELENBTHJCO0FBTUkscUJBQWEsRUFBRSxLQU5uQjtBQU9JLGdCQUFRLEVBQUUsa0JBQUNlLENBQUQ7QUFBQSxpQkFBS3ZCLG9CQUFvQiwwS0FDNUJELGlCQUQ0QixJQUUvQndCLENBQUMsQ0FBQ0MsTUFBRixDQUFTUCxLQUZzQixHQUF6QjtBQUFBO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QlIsRUFzQ0szQixNQUFNLGlCQUNIO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsZ0JBQ0tTLGlCQUFpQixDQUFDSCxHQUFsQixDQUFzQixVQUFDRSxJQUFEO0FBQUE7O0FBQUEsNEJBQ25CO0FBQUssbUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGlDQUNJLHFFQUFDLFNBQUQ7QUFDSSxpQkFBSyxFQUFFQSxJQURYO0FBRUksaUJBQUssRUFBRSx1QkFBQVYsT0FBTyxDQUFDTyxJQUFSLENBQWE4QixJQUFiLENBQWtCLFVBQUM1QixHQUFEO0FBQUEscUJBQU9BLEdBQUcsQ0FBQ0MsSUFBSixLQUFXQSxJQUFsQjtBQUFBLGFBQWxCLDJFQUEyQ1MsS0FBM0MsS0FBb0QsQ0FGL0Q7QUFJSSxvQkFBUSxFQUFFLGtCQUFDVSxLQUFELEVBQVM7QUFDZkQsa0NBQW9CLENBQUNDLEtBQUQsRUFBUW5CLElBQVIsQ0FBcEI7QUFDSDtBQU5MLGFBR1NBLElBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQXFEQSxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURtQjtBQUFBLE9BQXRCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlESCxDQTdHRDs7R0FBTVgsb0I7VUFFb0JNLGtELEVBVUxTLHVEOzs7TUFaZmYsb0I7QUErR1NBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXMuODk2NTM1YjA5MjdhNTQxNGU1ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZU1lbW8sIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgYmVkVHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQge0JlZFR5cGV9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9yb29tXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbW1vbi9CdXR0b25cIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9Db3VudGVyXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubGlgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjhweCAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9kZH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLXRvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1iZWRyb29tIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV80OH07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLXB1YmxpYy1iZWQtdHlwZS1jb3VudGVycyB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gIH1cclxuICAucmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJzIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXIge1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3Bze1xyXG4gICAgYmVkcm9vbTp7aWQ6bnVtYmVyOyBiZWRzOnt0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXX07XHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtiZWRyb29tfSk9PntcclxuICAgIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBwdWJsaWNCZWRMaXN0ID0gdXNlU2VsZWN0b3IoKTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsQmVkT3B0aW9ucyA9IGJlZHJvb20uYmVkcy5tYXAoKGJlZCkgPT4gYmVkLnR5cGUpO1xyXG5cclxuICAgIC8vICog7ISg7YOd65CcIOy5qOuMgCDsmLXshZjrk6RcclxuICAgIGNvbnN0IFthY3RpdmVkQmVkT3B0aW9ucywgc2V0QWN0aXZlZEJlZE9wdGlvbnNdID0gdXNlU3RhdGU8QmVkVHlwZVtdPihcclxuICAgICAgICBpbml0aWFsQmVkT3B0aW9uc1xyXG4gICAgKTtcclxuXHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHJcbiAgICAvLyAqIOy5qOuMgCDqsJzsiJgg7LSd7ZWpXHJcbiAgICBjb25zdCB0b3RhbEJlZHNDb3VudCA9IHVzZU1lbW8oKCk9PntcclxuICAgICAgICBsZXQgdG90YWw9MDtcclxuICAgICAgICBiZWRyb29tLmJlZHMuZm9yRWFjaCgoYmVkKT0+e1xyXG4gICAgICAgICAgICB0b3RhbCArPSBiZWQuY291bnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfSwgW2JlZHJvb21dKTtcclxuICAgIC8vICog64Ko7J2AIOy5qOuMgCDsmLXshZjrk6RcclxuICAgIGNvbnN0IGxhc3RCZWRPcHRpb25zPXVzZU1lbW8oKCk9PntcclxuICAgICAgICByZXR1cm4gYmVkVHlwZXMuZmlsdGVyKChiZWRUeXBlKT0+IWFjdGl2ZWRCZWRPcHRpb25zLmluY2x1ZGVzKGJlZFR5cGUpKTtcclxuICAgIH0sIFthY3RpdmVkQmVkT3B0aW9ucywgYmVkcm9vbV0pO1xyXG4gICAgLy8gKiDsuajrjIAg7KKF66WYIO2FjeyKpO2KuFxyXG4gICAgY29uc3QgYmVkc1RleHQgPSB1c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgdGV4dHM9YmVkcm9vbS5iZWRzLm1hcCgoYmVkKSA9PiBgJHtiZWQudHlwZX0gJHtiZWQuY291bnR9IOqwnGApO1xyXG4gICAgICAgIHJldHVybiB0ZXh0cy5qb2luKFwiLFwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgLy8gKiDsuajsi6Qg7Lmo64yAIOqwnOyImCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJlZFR5cGVDb3VudCA9ICh2YWx1ZTpOdW1iZXIsIHR5cGU6QmVkVHlwZSkgPT5cclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCZWRUeXBlQ291bnQoe1xyXG4gICAgICAgICAgICAgICAgYmVkcm9vbUlkOmJlZHJvb20uaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IHZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuXHJcbiAgICAvLyAqIOy5qOyLpCDsnKDtmJUg7Je06rOgIOuLq+q4sFxyXG4gICAgY29uc3QgdG9nZ2xlT3BlbmQgPSAoKSA9PiBzZXRPcGVuZWQoIW9wZW5lZCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20tdGV4dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb21cIj57YmVkcm9vbS5pZH0g67KIIOy5qOyLpDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWJlZHJvb20tY291bnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOy5qOuMgCB7dG90YWxCZWRzQ291bnR96rCcIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmVkc1RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3BlbmVkICYmIFwi7JmE66OMXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFvcGVuZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvdGFsQmVkc0NvdW50ID09PSAwID8gXCLsuajrjIAg7LaU6rCA7ZWY6riwXCI6XCLsuajrjIAg7IiY7KCV7ZWY6riwXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1iZWQtdHlwZS1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhc3RCZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLri6Trpbgg7Lmo64yAIOy2lOqwgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwi64uk66W4IOy5qOuMgCDstpTqsIBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e1tcIuuLpOuluCDsuajrjIAg7LaU6rCAXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0QWN0aXZlZEJlZE9wdGlvbnMoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWN0aXZlZEJlZE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSBhcyBCZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtvcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZWRCZWRPcHRpb25zLm1hcCgodHlwZSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJlZC10eXBlLWNvdW50ZXJcIiBrZXk9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiZWRyb29tLmJlZHMuZmluZCgoYmVkKT0+YmVkLnR5cGU9PT10eXBlKT8uY291bnQgfHwgMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VCZWRUeXBlQ291bnQodmFsdWUsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJlZFR5cGVzOyJdLCJzb3VyY2VSb290IjoiIn0=