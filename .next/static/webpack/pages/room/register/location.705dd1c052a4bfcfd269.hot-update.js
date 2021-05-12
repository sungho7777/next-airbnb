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
  }; // * 현재 위치 불러오기에 성공했을 때


  var onSuccessGetLocation = function onSuccessGetLocation(_ref) {
    var coords = _ref.coords;
  }; // * 현재 위치 사용 클릭 시


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: "\uC219\uC18C\uC758 \uC704\uCE58\uB97C \uC54C\uB824\uC8FC\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      children: "4\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      className: "register-room-step-info",
      children: "\uC815\uD655\uD55C \uC219\uC18C \uC8FC\uC18C\uB294 \uAC8C\uC2A4\uD2B8\uAC00 \uC608\uC57D\uC744 \uC644\uB8CC\uD55C \uD6C4\uC5D0\uB9CC \uACF5\uAC1C\uB429\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "reigster-room-location-button-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "dark_cyan",
        colorReverse: true,
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavigationIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 62
        }, _this),
        children: "\uD604\uC7AC \uC704\uCE58 \uC0AC\uC6A9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
        lineNumber: 127,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-location-city-district",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uC2DC/\uB3C4",
        value: city,
        onChange: onChangeCity
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uC2DC/\uAD70/\uAD6C",
        value: district,
        onChange: onChangeDistrict
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-location-street-address",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uB3C4\uB85C\uBA85\uC8FC\uC18C",
        value: streetAddress,
        onChange: onChangeStreetAddress
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-location-detail-address",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uB3D9\uD638\uC218(\uC120\uD0DD \uC0AC\uD56D)",
        value: detailAddress,
        onChange: onChangeDetailAddress,
        useValidation: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "register-room-location-postcode",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: "\uC6B0\uD3B8\uBC88\uD638",
        value: postcode,
        onChange: onChangePostcode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 9
  }, _this);
}; //https://developers.google.com/maps/documentation/geocoding/overview


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUxvY2F0aW9uLnRzeCJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uSWNvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInBhbGV0dGUiLCJncmF5Xzc2IiwiUmVnaXN0ZXJSb29tTG9jYXRpb24iLCJjb3VudHJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlZ2lzdGVyUm9vbSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VDb3VudHJ5IiwiZXZlbnQiLCJyZWdpc3RlclJvb21BY3Rpb25zIiwic2V0Q291bnRyeSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VDaXR5Iiwic2V0Q2l0eSIsIm9uQ2hhbmdlRGlzdHJpY3QiLCJzZXREaXN0cmljdCIsIm9uQ2hhbmdlU3RyZWV0QWRkcmVzcyIsInNldFN0cmVldEFkZHJlc3MiLCJvbkNoYW5nZURldGFpbEFkZHJlc3MiLCJzZXREZXRhaWxBZGRyZXNzIiwib25DaGFuZ2VQb3N0Y29kZSIsInNldFBvc3Rjb2RlIiwib25TdWNjZXNzR2V0TG9jYXRpb24iLCJjb29yZHMiLCJjb3VudHJ5TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFDT0EsYyxZQUFBQSxjOzs7Ozs7Ozs7TUFBQUEsYztBQUFBQSxjOzs7Ozs7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNnRCQVVFQyx1REFBTyxDQUFDQyxPQVZWLENBQWY7S0FBTUosUzs7QUFrRE4sSUFBTUss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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkosZUFxQ0k7QUFBSyxlQUFTLEVBQUMsdUNBQWY7QUFBQSw2QkFDSSxxRUFBQyxxREFBRDtBQUNJLGFBQUssRUFBQyxnQ0FEVjtBQUVJLGFBQUssRUFBRWIsYUFGWDtBQUdJLGdCQUFRLEVBQUVlO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQ0osZUE0Q0k7QUFBSyxlQUFTLEVBQUMsdUNBQWY7QUFBQSw2QkFDSSxxRUFBQyxxREFBRDtBQUNJLGFBQUssRUFBQywrQ0FEVjtBQUVJLGFBQUssRUFBRWQsYUFGWDtBQUdJLGdCQUFRLEVBQUVnQixxQkFIZDtBQUlJLHFCQUFhLEVBQUU7QUFKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1Q0osZUFvREk7QUFBSyxlQUFTLEVBQUMsaUNBQWY7QUFBQSw2QkFDSSxxRUFBQyxxREFBRDtBQUNJLGFBQUssRUFBQywwQkFEVjtBQUVJLGFBQUssRUFBRWYsUUFGWDtBQUdJLGdCQUFRLEVBQUVpQjtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOERILENBMUdELEMsQ0E0R0E7OztHQTVHTTFCLG9CO1VBQ2NFLGtELEVBQ0hBLGtELEVBQ0lBLGtELEVBQ0tBLGtELEVBQ0FBLGtELEVBQ0xBLGtELEVBRUFTLHdEOzs7TUFSZlgsb0I7QUE4R1NBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvbG9jYXRpb24uNzA1ZGQxYzA1MmE0YmZjZmQyNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25JY29uIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9yZWdpc3Rlci9uYXZpZ2F0aW9uLnN2Z1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tbW9uL0J1dHRvblwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uL2NvbW1vbi9JbnB1dFwiO1xyXG5cclxuaW1wb3J0IHtjb3VudHJ5TGlzdH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcblxyXG4vKlxyXG5cclxuICAgIDTri6jqs4RcclxuXHJcbiovXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA2MnB4IDMwcHggMTAwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1zdGVwLWluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDE3NnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1jb3VudHJ5LXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAzODVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWdpc3Rlci1yb29tLWxvY2F0aW9uLWNpdHktZGlzdHJpY3R7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWxvY2F0aW9uLXN0cmVldC1hZGRyZXNze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1kZXRhaWwtYWRkcmVzc3tcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tbG9jYXRpb24tcG9zdGNvZGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21Mb2NhdGlvbjpSZWFjdC5GQz0oKT0+e1xyXG4gICAgY29uc3QgY291bnRyeSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnJlZ2lzdGVyUm9vbS5jb3VudHJ5KTtcclxuICAgIGNvbnN0IGNpdHkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5yZWdpc3RlclJvb20uY2l0eSk7XHJcbiAgICBjb25zdCBkaXN0cmljdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnJlZ2lzdGVyUm9vbS5kaXN0cmljdCk7XHJcbiAgICBjb25zdCBzdHJlZXRBZGRyZXNzID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucmVnaXN0ZXJSb29tLnN0cmVldEFkZHJlc3MpO1xyXG4gICAgY29uc3QgZGV0YWlsQWRkcmVzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnJlZ2lzdGVyUm9vbS5kZXRhaWxBZGRyZXNzKTtcclxuICAgIGNvbnN0IHBvc3Rjb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucmVnaXN0ZXJSb29tLnBvc3Rjb2RlKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gKiDqta3qsIAg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VDb3VudHJ5ID0oZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0Q291bnRyeShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICAvLyAqIOyLnOuPhCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUNpdHkgPShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldENpdHkoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgLy8gKiDsi5zqtbDqtawg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VEaXN0cmljdCA9KGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0RGlzdHJpY3QoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgLy8gKiDrj4TroZzrqoXso7zshowg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VTdHJlZXRBZGRyZXNzID0oZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRTdHJlZXRBZGRyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIC8vICog64+Z7Zi47IiYIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlRGV0YWlsQWRkcmVzcyA9KGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0RGV0YWlsQWRkcmVzcyhldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICAvLyAqIOyasO2OuOuyiO2YuCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZVBvc3Rjb2RlID0oZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRQb3N0Y29kZShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gKiDtmITsnqwg7JyE7LmYIOu2iOufrOyYpOq4sOyXkCDshLHqs7XtlojsnYQg65WMXHJcbiAgICBjb25zdCBvblN1Y2Nlc3NHZXRMb2NhdGlvbiA9ICh7Y29vcmRzfTp7Y29vcmRzOkNvb3JkaW5hdGVzfSk9PntcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8vICog7ZiE7J6sIOychOy5mCDsgqzsmqkg7YG066atIOyLnFxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+7IiZ7IaM7J2YIOychOy5mOulvCDslYzroKTso7zshLjsmpQuPC9oMj5cclxuICAgICAgICAgICAgPGgzPjTri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLXN0ZXAtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAg7KCV7ZmV7ZWcIOyImeyGjCDso7zshozripQg6rKM7Iqk7Yq46rCAIOyYiOyVveydhCDsmYTro4ztlZwg7ZuE7JeQ66eMIOqzteqwnOuQqeuLiOuLpC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlaWdzdGVyLXJvb20tbG9jYXRpb24tYnV0dG9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJkYXJrX2N5YW5cIiBjb2xvclJldmVyc2UgaWNvbj17PE5hdmlnYXRpb25JY29uIC8+IH0+XHJcbiAgICAgICAgICAgICAgICAgICAg7ZiE7J6sIOychOy5mCDsgqzsmqlcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1jb3VudHJ5LXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y291bnRyeUxpc3R9ICAgLy8g6rWt6rCA66as7Iqk7Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi6rWt6rCAL+yngOyXrSDshKDtg51cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17W1wi6rWt6rCAL+yngOyXrSDshKDtg51cIl19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1jaXR5LWRpc3RyaWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLsi5wv64+EXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDaXR5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyLnC/qtbAv6rWsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc3RyaWN0fSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VEaXN0cmljdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tbG9jYXRpb24tc3RyZWV0LWFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuuPhOuhnOuqheyjvOyGjFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHJlZXRBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVN0cmVldEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWxvY2F0aW9uLWRldGFpbC1hZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLrj5ntmLjsiJgo7ISg7YOdIOyCrO2VrSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXRhaWxBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZURldGFpbEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWxvY2F0aW9uLXBvc3Rjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLsmrDtjrjrsojtmLhcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cG9zdGNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUG9zdGNvZGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG4vL2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9nZW9jb2Rpbmcvb3ZlcnZpZXdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUxvY2F0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=