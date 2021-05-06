webpackHotUpdate_N_E("pages/room/register/building",{

/***/ "./components/register/RegisterRoomBuilding.tsx":
/*!******************************************************!*\
  !*** ./components/register/RegisterRoomBuilding.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/registerRoom */ "./store/registerRoom.ts");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/RadioGroup */ "./components/common/RadioGroup.tsx");
/* harmony import */ var _RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RegisterRoomFooter */ "./components/register/RegisterRoomFooter.tsx");



var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\register\\RegisterRoomBuilding.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RegisterRoomBuilding__Container",
  componentId: "wjs8af-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-weight:bold;color:", ";margin-bottom:6px;}.register-room-building-selector-wrapper{width:320px;margin-bottom:32px;}.register-room-room-type-radio{max-width:485px;margin-bottom:50px;}.register-room-is-setup-for-guest-radio{margin-bottom:50px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].gray_76); // * 선택 불가능한 큼 범위 건물 유형

_c = Container;
var disabledlargeBuildingTypeOptions = ["하나를 선택해주세요."]; // * 숙소 유형 radio options

var roomTypeRadioOptions = [{
  label: "집 전체",
  value: "entire",
  description: "게스트가 숙소 전체를 다른 사람과 공유하지 않고 단독으로 이용합니다. 일반적으로 침실, 욕실, 부엌이 포함됩니다."
}, {
  label: "개인실",
  value: "private",
  description: "게스트에게 개인 침실이 제공됩니다. 침실 이외의 공간은 공용일 수 있습니다."
}, {
  label: "다인실",
  value: "public",
  description: "게스트는 개인공간 없이, 다른 사람과 함께 쓰는 침실이나 공용공간에서 숙박합니다."
}]; // * 게스트만 사용하도록 만들어진 숙소인지 라디오 options

var isSetUpForGuestOptions = [{
  label: "예, 게스트용으로 따로 마련된 숙소입니다.",
  value: true
}, {
  label: "아니요, 제 개인 물건이 숙소에 있습니다.",
  value: false
}];

var RegisterRoomBuilding = function RegisterRoomBuilding() {
  _s();

  var largeBuildingType = Object(_store__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.registerRoom.largeBuildingType;
  });
  var buildingType = Object(_store__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.registerRoom.buildingType;
  });
  var roomType = Object(_store__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.registerRoom.roomType;
  });
  var isSetUpForGuest = Object(_store__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.registerRoom.isSetUpForGuest;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // * 큰 범위 건물 유형 변경 시

  var onChangeLargeBuildingType = function onChangeLargeBuildingType(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setLargeBuildingType(event.target.value));
  }; // * 상세 건물 유형 변경시


  var onChangeBuildingType = function onChangeBuildingType(event) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBuildingType(event.target.value));
  }; // * 숙소 유형 변경시


  var onChangeRoomType = function onChangeRoomType(event) {
    var selected = event.target.value;
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setRoomType(selected));
  }; // * 게스트용 숙소인지 변경 시


  var onChangeIsSetUpForGuest = function onChangeIsSetUpForGuest(value) {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setIsSetUpForGuest(value));
  }; // * 선택된 건물 유형 options


  var detailBuildingOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    switch (largeBuildingType) {
      case "아파트":
        {
          var _require = __webpack_require__(/*! ../../lib/staticData */ "./lib/staticData.ts"),
              apartmentBuildingTypeList = _require.apartmentBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBuildingType(apartmentBuildingTypeList[0]));
          return apartmentBuildingTypeList;
        }

      case "주택":
        {
          var _require2 = __webpack_require__(/*! ../../lib/staticData */ "./lib/staticData.ts"),
              houstBuildingTypeList = _require2.houstBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBuildingType(houstBuildingTypeList[0]));
          return houstBuildingTypeList;
        }

      case "별채":
        {
          var _require3 = __webpack_require__(/*! ../../lib/staticData */ "./lib/staticData.ts"),
              secondaryUnitBuildingTypeList = _require3.secondaryUnitBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBuildingType(secondaryUnitBuildingTypeList[0]));
          return secondaryUnitBuildingTypeList;
        }

      case "독특한 숙소":
        {
          var _require4 = __webpack_require__(/*! ../../lib/staticData */ "./lib/staticData.ts"),
              uniqueSpaceBuildingTypeList = _require4.uniqueSpaceBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBuildingType(uniqueSpaceBuildingTypeList[0]));
          return uniqueSpaceBuildingTypeList;
        }

      case "B&B":
        {
          var _require5 = __webpack_require__(/*! ../../lib/staticData */ "./lib/staticData.ts"),
              bnbBuildingTypeList = _require5.bnbBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBuildingType(bnbBuildingTypeList[0]));
          return bnbBuildingTypeList;
        }

      case "부티크호텔":
        {
          var _require6 = __webpack_require__(/*! ../../lib/staticData */ "./lib/staticData.ts"),
              boutiquesHotelBuildingTypeList = _require6.boutiquesHotelBuildingTypeList;

          dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_6__["registerRoomActions"].setBuildingType(boutiquesHotelBuildingTypeList[0]));
          return boutiquesHotelBuildingTypeList;
        }

      default:
        return [];
    }
  }, [largeBuildingType]); // * 모든 값이 있는지 확인하기

  var isValid = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (!largeBuildingType || !buildingType || !roomType || !isSetUpForGuest === null) {
      return false;
    }

    return true;
  }, [largeBuildingType, buildingType, roomType, isSetUpForGuest]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\uB4F1\uB85D\uD560 \uC219\uC18C \uC885\uB958\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "register",
        value: buildingType || undefined,
        defaultValue: "\uD558\uB098\uB97C \uC12D\uD0DD\uD574\uC8FC\uC138\uC694.",
        disabledOptions: disabledlargeBuildingTypeOptions,
        label: "\uAC74\uBB3C \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.",
        options: detailBuildingOptions //disabled={!largeBuildingType}
        ,
        onChange: onChangeBuildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "register",
        value: buildingType || "",
        disabled: !largeBuildingType,
        onChange: function onChange(e) {
          return largeBuildingType(e.target.value);
        },
        isValid: !!buildingType,
        label: "\uAC74\uBB3C \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.",
        options: detailBuildingOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }, _this), buildingType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "register-room-room-type-radio",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
          label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
          value: roomType,
          options: roomTypeRadioOptions,
          onChange: onChangeRoomType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "register-room-is-setup-for-guest-radio",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
          label: "\uAC8C\uC2A4\uD2B8\uB9CC \uC0AC\uC6A9\uD558\uB3C4\uB85D \uB9CC\uB4E4\uC5B4\uC9C4 \uC219\uC18C\uC778\uAC00\uC694?",
          value: isSetUpForGuest,
          onChange: onChangeIsSetUpForGuest,
          options: isSetUpForGuestOptions
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }, _this)]
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isValid: false,
      prevHref: "/",
      nextHref: "/room/register/bedrooms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBuilding, "BScFDyG2uHyrIgCLUXV0UlmY6so=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _store__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c2 = RegisterRoomBuilding;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomBuilding);

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomBuilding");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci9SZWdpc3RlclJvb21CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicGFsZXR0ZSIsImdyYXlfNzYiLCJkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9ucyIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaXNTZXRVcEZvckd1ZXN0T3B0aW9ucyIsIlJlZ2lzdGVyUm9vbUJ1aWxkaW5nIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSIsImV2ZW50IiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwidGFyZ2V0Iiwib25DaGFuZ2VCdWlsZGluZ1R5cGUiLCJzZXRCdWlsZGluZ1R5cGUiLCJvbkNoYW5nZVJvb21UeXBlIiwic2VsZWN0ZWQiLCJzZXRSb29tVHlwZSIsIm9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0Iiwic2V0SXNTZXRVcEZvckd1ZXN0IiwiZGV0YWlsQnVpbGRpbmdPcHRpb25zIiwidXNlTWVtbyIsInJlcXVpcmUiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiLCJibmJCdWlsZGluZ1R5cGVMaXN0IiwiYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0IiwiaXNWYWxpZCIsInVuZGVmaW5lZCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SSxjQUFRLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdURILENBbktEOztHQUFNQyxvQjtVQUN3QkUsa0QsRUFHTEEsa0QsRUFDSkEsa0QsRUFDT0Esa0QsRUFFUE8sdUQ7OztNQVJmVCxvQjtBQXFLU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9idWlsZGluZy5hMzE1ZjFjZTRhZmQ4MWVlOGVmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHtsYXJnZUJ1aWxkaW5nVHlwZUxpc3R9IGZyb20gXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tIFwiLi4vY29tbW9uL1JhZGlvR3JvdXBcIjtcclxuaW1wb3J0IFJlZ2lzdGVyUm9vbUZvb3RlciBmcm9tIFwiLi9SZWdpc3RlclJvb21Gb290ZXJcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA2MnB4IDMwcHggMTAwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tcm9vbS10eXBlLXJhZGlvIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1pcy1zZXR1cC1mb3ItZ3Vlc3QtcmFkaW8ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG4vLyAqIOyEoO2DnSDrtojqsIDriqXtlZwg7YG8IOuylOychCDqsbTrrLwg7Jyg7ZiVXHJcbmNvbnN0IGRpc2FibGVkbGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zID0gW1wi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIl07XHJcblxyXG4vLyAqIOyImeyGjCDsnKDtmJUgcmFkaW8gb3B0aW9uc1xyXG5jb25zdCByb29tVHlwZVJhZGlvT3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuynkSDsoITssrRcIixcclxuICAgICAgICB2YWx1ZTpcImVudGlyZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwi6rKM7Iqk7Yq46rCAIOyImeyGjCDsoITssrTrpbwg64uk66W4IOyCrOuejOqzvCDqs7XsnKDtlZjsp4Ag7JWK6rOgIOuLqOuPheycvOuhnCDsnbTsmqntlanri4jri6QuIOydvOuwmOyggeycvOuhnCDsuajsi6QsIOyaleyLpCwg67aA7JeM7J20IO2PrO2VqOuQqeuLiOuLpC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLqsJzsnbjsi6RcIixcclxuICAgICAgICB2YWx1ZTpcInByaXZhdGVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIuqyjOyKpO2KuOyXkOqyjCDqsJzsnbgg7Lmo7Iuk7J20IOygnOqzteuQqeuLiOuLpC4g7Lmo7IukIOydtOyZuOydmCDqs7XqsITsnYAg6rO17Jqp7J28IOyImCDsnojsirXri4jri6QuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi64uk7J247IukXCIsXHJcbiAgICAgICAgdmFsdWU6XCJwdWJsaWNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIuqyjOyKpO2KuOuKlCDqsJzsnbjqs7XqsIQg7JeG7J20LCDri6Trpbgg7IKs656M6rO8IO2VqOq7mCDsk7DripQg7Lmo7Iuk7J2064KYIOqzteyaqeqzteqwhOyXkOyEnCDsiJnrsJXtlanri4jri6QuXCIsXHJcbiAgICB9LFxyXG5dO1xyXG4vLyAqIOqyjOyKpO2KuOunjCDsgqzsmqntlZjrj4TroZ0g66eM65Ok7Ja07KeEIOyImeyGjOyduOyngCDrnbzrlJTsmKQgb3B0aW9uc1xyXG5jb25zdCBpc1NldFVwRm9yR3Vlc3RPcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi7JiILCDqsozsiqTtirjsmqnsnLzroZwg65Sw66GcIOuniOugqOuQnCDsiJnshozsnoXri4jri6QuXCIsXHJcbiAgICAgICAgdmFsdWU6dHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLslYTri4jsmpQsIOygnCDqsJzsnbgg66y86rG07J20IOyImeyGjOyXkCDsnojsirXri4jri6QuXCIsXHJcbiAgICAgICAgdmFsdWU6ZmFsc2UsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQnVpbGRpbmc6UmVhY3QuRkM9KCk9PntcclxuICAgIGNvbnN0IGxhcmdlQnVpbGRpbmdUeXBlID0gdXNlU2VsZWN0b3IoXHJcbiAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ubGFyZ2VCdWlsZGluZ1R5cGVcclxuICAgICk7XHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5idWlsZGluZ1R5cGUpO1xyXG4gICAgY29uc3Qgcm9vbVR5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5yb29tVHlwZSk7XHJcbiAgICBjb25zdCBpc1NldFVwRm9yR3Vlc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5pc1NldFVwRm9yR3Vlc3QpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gKiDtgbAg67KU7JyEIOqxtOusvCDsnKDtmJUg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRMYXJnZUJ1aWxkaW5nVHlwZShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vICog7IOB7IS4IOqxtOusvCDsnKDtmJUg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJ1aWxkaW5nVHlwZT0oZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAqIOyImeyGjCDsnKDtmJUg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZVJvb21UeXBlID0gKGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkPWV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRSb29tVHlwZShcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkIGFzIFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vICog6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUlzU2V0VXBGb3JHdWVzdD0odmFsdWU6YW55KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0SXNTZXRVcEZvckd1ZXN0KHZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyAqIOyEoO2DneuQnCDqsbTrrLwg7Jyg7ZiVIG9wdGlvbnNcclxuICAgIGNvbnN0IGRldGFpbEJ1aWxkaW5nT3B0aW9ucz11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgc3dpdGNoIChsYXJnZUJ1aWxkaW5nVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwi7JWE7YyM7Yq4XCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLso7ztg51cIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXN0QnVpbGRpbmdUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGhvdXN0QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG91c3RCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLrs4TssYRcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwi64+F7Yq57ZWcIOyImeyGjFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUodW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkImQlwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm5iQnVpbGRpbmdUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJuYkJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJuYkJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuu2gO2LsO2BrO2YuO2FlFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xhcmdlQnVpbGRpbmdUeXBlXSk7XHJcblxyXG4gICAgLy8gKiDrqqjrk6Ag6rCS7J20IOyeiOuKlOyngCDtmZXsnbjtlZjquLBcclxuICAgIGNvbnN0IGlzVmFsaWQ9dXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgaWYoIWxhcmdlQnVpbGRpbmdUeXBlIHx8ICFidWlsZGluZ1R5cGUgfHwgIXJvb21UeXBlIHx8ICFpc1NldFVwRm9yR3Vlc3QgPT09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9LFtsYXJnZUJ1aWxkaW5nVHlwZSwgYnVpbGRpbmdUeXBlLCByb29tVHlwZSwgaXNTZXRVcEZvckd1ZXN0XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+65Ox66Gd7ZWgIOyImeyGjCDsooXrpZjripQg66y07JeH7J246rCA7JqUPzwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4x64uo6rOEPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1aWxkaW5nVHlwZSB8fCB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi7ZWY64KY66W8IOyEre2Dne2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17ZGlzYWJsZWRsYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsbTrrLwg7Jyg7ZiV7J2EIOyEoO2Dne2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RldGFpbEJ1aWxkaW5nT3B0aW9uc31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kaXNhYmxlZD17IWxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2J1aWxkaW5nVHlwZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXJnZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gbGFyZ2VCdWlsZGluZ1R5cGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZD17ISFidWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuqxtOusvCDsnKDtmJXsnYQg7ISg7YOd7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtkZXRhaWxCdWlsZGluZ09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2J1aWxkaW5nVHlwZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1yb29tLXR5cGUtcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rKM7Iqk7Yq46rCAIOusteqyjCDrkKAg7IiZ7IaMIOycoO2YleydhCDqs6jrnbzso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Jvb21UeXBlUmFkaW9PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWlzLXNldHVwLWZvci1ndWVzdC1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsozsiqTtirjrp4wg7IKs7Jqp7ZWY64+E66GdIOunjOuTpOyWtOynhCDsiJnshozsnbjqsIDsmpQ/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc1NldFVwRm9yR3Vlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJc1NldFVwRm9yR3Vlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtpc1NldFVwRm9yR3Vlc3RPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxSZWdpc3RlclJvb21Gb290ZXJcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcHJldkhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIG5leHRIcmVmPVwiL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=