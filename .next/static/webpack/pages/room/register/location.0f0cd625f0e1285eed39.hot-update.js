webpackHotUpdate_N_E("pages/room/register/location",{

/***/ "./components/room/register/RegisterRoomLocation.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomLocation.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Input */ "./components/common/Input.tsx");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");



var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomLocation.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var NavigationIcon = function NavigationIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "m0 6 16-6-5.99 16L8 8 0 6z",
      fill: "#008489"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c3 = NavigationIcon;
NavigationIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};








/*

    4단계

*/

var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "RegisterRoomLocation__Container",
  componentId: "sc-1m6cgpy-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}.register-room-step-info{font-size:14px;max-width:400px;margin-bottom:24px;}.register-room-location-button-wrapper{width:176px;margin-bottom:24px;}.register-room-location-country-selector-wrapper{width:385px;margin-bottom:24px;}.register-room-location-city-district{font-size:14px;max-width:400px;margin-bottom:24px;}.register-room-location-street-address{font-size:14px;max-width:400px;margin-bottom:24px;}.register-room-location-detail-address{font-size:14px;max-width:400px;margin-bottom:24px;}.register-room-location-postcode{font-size:14px;max-width:400px;margin-bottom:24px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].gray_76);
_c = Container;

var RegisterRoomLocation = function RegisterRoomLocation() {
  _s();

  var country = Object(_store__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.registerRoom.country;
  });
  var city = Object(_store__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.registerRoom.city;
  });
  var district = Object(_store__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.registerRoom.district;
  });
  var streetAddress = Object(_store__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.registerRoom.streetAddress;
  });
  var detailAddress = Object(_store__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.registerRoom.detailAddress;
  });
  var postcode = Object(_store__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.registerRoom.postcode;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])(); // * 국가 변경 시

  var onChangeCountry = function onChangeCountry(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_11__["registerRoomActions"].setCountry(event.target.value));
  }; // * 시도 변경 시


  var onChangeCity = function onChangeCity(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_11__["registerRoomActions"].setCity(event.target.value));
  }; // * 시군구 변경 시


  var onChangeDistrict = function onChangeDistrict(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_11__["registerRoomActions"].setDistrict(event.target.value));
  }; // * 도로명주소 변경 시


  var onChangeStreetAddress = function onChangeStreetAddress(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_11__["registerRoomActions"].setStreetAddress(event.target.value));
  }; // * 동호수 변경 시


  var onChangeDetailAddress = function onChangeDetailAddress(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_11__["registerRoomActions"].setDetailAddress(event.target.value));
  }; // * 우편번호 변경 시


  var onChangePostcode = function onChangePostcode(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_11__["registerRoomActions"].setPostcode(event.target.value));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: "\uC219\uC18C\uC758 \uC704\uCE58\uB97C \uC54C\uB824\uC8FC\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      children: "4\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      className: "register-room-step-info",
      children: "\uC815\uD655\uD55C \uC219\uC18C \uC8FC\uC18C\uB294 \uAC8C\uC2A4\uD2B8\uAC00 \uC608\uC57D\uC744 \uC644\uB8CC\uD55C \uD6C4\uC5D0\uB9CC \uACF5\uAC1C\uB429\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "reigster-room-location-button-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "dark_cyan",
        colorReverse: true,
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavigationIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 62
        }, _this),
        children: "\uD604\uC7AC \uC704\uCE58 \uC0AC\uC6A9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-location-country-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "register",
        options: _lib_staticData__WEBPACK_IMPORTED_MODULE_8__["countryList"] // 국가리스트
        ,
        useValidation: false,
        defaultValue: "\uAD6D\uAC00/\uC9C0\uC5ED \uC120\uD0DD",
        disabledOptions: ["국가/지역 선택"],
        value: country,
        onChange: onChangeCountry
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-location-city-district",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uC2DC/\uB3C4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uC2DC/\uAD70/\uAD6C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-location-street-address",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uB3C4\uB85C\uBA85\uC8FC\uC18C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-location-detail-address",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uB3D9\uD638\uC218(\uC120\uD0DD \uC0AC\uD56D)",
        useValidation: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-location-postcode",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uC6B0\uD3B8\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomLocation, "cOdHNEjXC5ppeVW9L2zETkoEaV0=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_9__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_9__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_9__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_9__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_9__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"]];
});

_c2 = RegisterRoomLocation;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomLocation);

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomLocation");
$RefreshReg$(_c3, "NavigationIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUxvY2F0aW9uLnRzeCJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uSWNvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInBhbGV0dGUiLCJncmF5Xzc2IiwiUmVnaXN0ZXJSb29tTG9jYXRpb24iLCJjb3VudHJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlZ2lzdGVyUm9vbSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VDb3VudHJ5IiwiZXZlbnQiLCJyZWdpc3RlclJvb21BY3Rpb25zIiwic2V0Q291bnRyeSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VDaXR5Iiwic2V0Q2l0eSIsIm9uQ2hhbmdlRGlzdHJpY3QiLCJzZXREaXN0cmljdCIsIm9uQ2hhbmdlU3RyZWV0QWRkcmVzcyIsInNldFN0cmVldEFkZHJlc3MiLCJvbkNoYW5nZURldGFpbEFkZHJlc3MiLCJzZXREZXRhaWxBZGRyZXNzIiwib25DaGFuZ2VQb3N0Y29kZSIsInNldFBvc3Rjb2RlIiwiY291bnRyeUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ09BLGMsWUFBQUEsYzs7Ozs7Ozs7O01BQUFBLGM7QUFBQUEsYzs7Ozs7O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZ0QkFVRUMsdURBQU8sQ0FBQ0MsT0FWVixDQUFmO0tBQU1KLFM7O0FBa0ROLElBQU1LLG9CQUE2QixHQUFDLFNBQTlCQSxvQkFBOEIsR0FBSTtB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QUFFO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0JKLGVBa0NJO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsNkJBQ0kscUVBQUMscURBQUQ7QUFBTyxhQUFLLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdDSCxDQS9FRDs7R0FBTVosb0I7VUFDY0Usa0QsRUFDSEEsa0QsRUFDSUEsa0QsRUFDS0Esa0QsRUFDQUEsa0QsRUFDTEEsa0QsRUFFQVMsd0Q7OztNQVJmWCxvQjtBQWlGU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9sb2NhdGlvbi4wZjBjZDYyNWYwZTEyODVlZWQzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkljb24gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL3JlZ2lzdGVyL25hdmlnYXRpb24uc3ZnXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21tb24vQnV0dG9uXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vY29tbW9uL0lucHV0XCI7XHJcblxyXG5pbXBvcnQge2NvdW50cnlMaXN0fSBmcm9tIFwiLi4vLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuXHJcbi8qXHJcblxyXG4gICAgNOuLqOqzhFxyXG5cclxuKi9cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDYycHggMzBweCAxMDBweDtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLXN0ZXAtaW5mbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWxvY2F0aW9uLWJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTc2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWxvY2F0aW9uLWNvdW50cnktc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDM4NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLXJvb20tbG9jYXRpb24tY2l0eS1kaXN0cmljdHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tbG9jYXRpb24tc3RyZWV0LWFkZHJlc3N7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWxvY2F0aW9uLWRldGFpbC1hZGRyZXNze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1wb3N0Y29kZXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUxvY2F0aW9uOlJlYWN0LkZDPSgpPT57XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucmVnaXN0ZXJSb29tLmNvdW50cnkpO1xyXG4gICAgY29uc3QgY2l0eSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnJlZ2lzdGVyUm9vbS5jaXR5KTtcclxuICAgIGNvbnN0IGRpc3RyaWN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucmVnaXN0ZXJSb29tLmRpc3RyaWN0KTtcclxuICAgIGNvbnN0IHN0cmVldEFkZHJlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5yZWdpc3RlclJvb20uc3RyZWV0QWRkcmVzcyk7XHJcbiAgICBjb25zdCBkZXRhaWxBZGRyZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucmVnaXN0ZXJSb29tLmRldGFpbEFkZHJlc3MpO1xyXG4gICAgY29uc3QgcG9zdGNvZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5yZWdpc3RlclJvb20ucG9zdGNvZGUpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyAqIOq1reqwgCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUNvdW50cnkgPShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRDb3VudHJ5KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIC8vICog7Iuc64+EIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2l0eSA9KGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0Q2l0eShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICAvLyAqIOyLnOq1sOq1rCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZURpc3RyaWN0ID0oZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXREaXN0cmljdChldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICAvLyAqIOuPhOuhnOuqheyjvOyGjCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZVN0cmVldEFkZHJlc3MgPShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldFN0cmVldEFkZHJlc3MoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgLy8gKiDrj5ntmLjsiJgg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VEZXRhaWxBZGRyZXNzID0oZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXREZXRhaWxBZGRyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIC8vICog7Jqw7Y6467KI7Zi4IOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlUG9zdGNvZGUgPShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldFBvc3Rjb2RlKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+7IiZ7IaM7J2YIOychOy5mOulvCDslYzroKTso7zshLjsmpQuPC9oMj5cclxuICAgICAgICAgICAgPGgzPjTri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLXN0ZXAtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAg7KCV7ZmV7ZWcIOyImeyGjCDso7zshozripQg6rKM7Iqk7Yq46rCAIOyYiOyVveydhCDsmYTro4ztlZwg7ZuE7JeQ66eMIOqzteqwnOuQqeuLiOuLpC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlaWdzdGVyLXJvb20tbG9jYXRpb24tYnV0dG9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJkYXJrX2N5YW5cIiBjb2xvclJldmVyc2UgaWNvbj17PE5hdmlnYXRpb25JY29uIC8+IH0+XHJcbiAgICAgICAgICAgICAgICAgICAg7ZiE7J6sIOychOy5mCDsgqzsmqlcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1jb3VudHJ5LXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y291bnRyeUxpc3R9ICAgLy8g6rWt6rCA66as7Iqk7Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi6rWt6rCAL+yngOyXrSDshKDtg51cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17W1wi6rWt6rCAL+yngOyXrSDshKDtg51cIl19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ291bnRyeX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWxvY2F0aW9uLWNpdHktZGlzdHJpY3RcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIuyLnC/rj4RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwi7IucL+q1sC/qtaxcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWxvY2F0aW9uLXN0cmVldC1hZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCLrj4TroZzrqoXso7zshoxcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWxvY2F0aW9uLWRldGFpbC1hZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCLrj5ntmLjsiJgo7ISg7YOdIOyCrO2VrSlcIiB1c2VWYWxpZGF0aW9uPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1wb3N0Y29kZVwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwi7Jqw7Y6467KI7Zi4XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tTG9jYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==