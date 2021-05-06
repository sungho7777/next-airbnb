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
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/RadioGroup */ "./components/common/RadioGroup.tsx");
/* harmony import */ var _RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RegisterRoomFooter */ "./components/register/RegisterRoomFooter.tsx");



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
      lineNumber: 178,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "register",
        value: largeBuildingType || undefined,
        disabled: !disabledlargeBuildingTypeOptions,
        defaultValue: "\uD558\uB098\uB97C \uC12D\uD0DD\uD574\uC8FC\uC138\uC694.",
        disabledOptions: disabledlargeBuildingTypeOptions,
        isValid: !!largeBuildingType,
        label: "\uC6B0\uC120 \uBC94\uC704\uB97C \uC881\uD600\uBCFC\uAE4C\uC694?",
        options: _lib_staticData__WEBPACK_IMPORTED_MODULE_7__["largeBuildingTypeList"],
        onChange: onChangeLargeBuildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "register",
        value: buildingType || "",
        onChange: onChangeBuildingType,
        disabled: !largeBuildingType,
        isValid: !!buildingType,
        label: "\uAC74\uBB3C \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.",
        options: detailBuildingOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, _this), buildingType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "register-room-room-type-radio",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
          isValid: !!roomType,
          label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
          value: roomType,
          options: roomTypeRadioOptions,
          onChange: onChangeRoomType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "register-room-is-setup-for-guest-radio",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
          isValid: isSetUpForGuest !== null,
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
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isValid: false,
      prevHref: "/",
      nextHref: "/room/register/bedrooms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci9SZWdpc3RlclJvb21CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicGFsZXR0ZSIsImdyYXlfNzYiLCJkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9ucyIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaXNTZXRVcEZvckd1ZXN0T3B0aW9ucyIsIlJlZ2lzdGVyUm9vbUJ1aWxkaW5nIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSIsImV2ZW50IiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwidGFyZ2V0Iiwib25DaGFuZ2VCdWlsZGluZ1R5cGUiLCJzZXRCdWlsZGluZ1R5cGUiLCJvbkNoYW5nZVJvb21UeXBlIiwic2VsZWN0ZWQiLCJzZXRSb29tVHlwZSIsIm9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0Iiwic2V0SXNTZXRVcEZvckd1ZXN0IiwiZGV0YWlsQnVpbGRpbmdPcHRpb25zIiwidXNlTWVtbyIsInJlcXVpcmUiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiLCJibmJCdWlsZGluZ1R5cGVMaXN0IiwiYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0IiwiaXNWYWxpZCIsInVuZGVmaW5lZCIsImxhcmdlQnVpbGRpbmdUeXBlTGlzdCJdLCJtYXBwaW5ncyI6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UixlQWtESSxxRUFBQyw0REFBRDtBQUNJLGFBQU8sRUFBRSxLQURiO0FBRUksY0FBUSxFQUFDLEdBRmI7QUFHSSxjQUFRLEVBQUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMERILENBcEtEOztHQUFNQyxvQjtVQUN3QkUsa0QsRUFDTEEsa0QsRUFDSkEsa0QsRUFDT0Esa0QsRUFFUE8sdUQ7OztNQU5mVCxvQjtBQXNLU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9idWlsZGluZy5kMDhkYWM3MDQwYjBkNWZhODY0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHtsYXJnZUJ1aWxkaW5nVHlwZUxpc3R9IGZyb20gXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tIFwiLi4vY29tbW9uL1JhZGlvR3JvdXBcIjtcclxuaW1wb3J0IFJlZ2lzdGVyUm9vbUZvb3RlciBmcm9tIFwiLi9SZWdpc3RlclJvb21Gb290ZXJcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA2MnB4IDMwcHggMTAwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tcm9vbS10eXBlLXJhZGlvIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1pcy1zZXR1cC1mb3ItZ3Vlc3QtcmFkaW8ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG4vLyAqIOyEoO2DnSDrtojqsIDriqXtlZwg7YG8IOuylOychCDqsbTrrLwg7Jyg7ZiVXHJcbmNvbnN0IGRpc2FibGVkbGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zID0gW1wi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIl07XHJcblxyXG4vLyAqIOyImeyGjCDsnKDtmJUgcmFkaW8gb3B0aW9uc1xyXG5jb25zdCByb29tVHlwZVJhZGlvT3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuynkSDsoITssrRcIixcclxuICAgICAgICB2YWx1ZTpcImVudGlyZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwi6rKM7Iqk7Yq46rCAIOyImeyGjCDsoITssrTrpbwg64uk66W4IOyCrOuejOqzvCDqs7XsnKDtlZjsp4Ag7JWK6rOgIOuLqOuPheycvOuhnCDsnbTsmqntlanri4jri6QuIOydvOuwmOyggeycvOuhnCDsuajsi6QsIOyaleyLpCwg67aA7JeM7J20IO2PrO2VqOuQqeuLiOuLpC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLqsJzsnbjsi6RcIixcclxuICAgICAgICB2YWx1ZTpcInByaXZhdGVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIuqyjOyKpO2KuOyXkOqyjCDqsJzsnbgg7Lmo7Iuk7J20IOygnOqzteuQqeuLiOuLpC4g7Lmo7IukIOydtOyZuOydmCDqs7XqsITsnYAg6rO17Jqp7J28IOyImCDsnojsirXri4jri6QuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi64uk7J247IukXCIsXHJcbiAgICAgICAgdmFsdWU6XCJwdWJsaWNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIuqyjOyKpO2KuOuKlCDqsJzsnbjqs7XqsIQg7JeG7J20LCDri6Trpbgg7IKs656M6rO8IO2VqOq7mCDsk7DripQg7Lmo7Iuk7J2064KYIOqzteyaqeqzteqwhOyXkOyEnCDsiJnrsJXtlanri4jri6QuXCIsXHJcbiAgICB9LFxyXG5dO1xyXG4vLyAqIOqyjOyKpO2KuOunjCDsgqzsmqntlZjrj4TroZ0g66eM65Ok7Ja07KeEIOyImeyGjOyduOyngCDrnbzrlJTsmKQgb3B0aW9uc1xyXG5jb25zdCBpc1NldFVwRm9yR3Vlc3RPcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi7JiILCDqsozsiqTtirjsmqnsnLzroZwg65Sw66GcIOuniOugqOuQnCDsiJnshozsnoXri4jri6QuXCIsXHJcbiAgICAgICAgdmFsdWU6dHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLslYTri4jsmpQsIOygnCDqsJzsnbgg66y86rG07J20IOyImeyGjOyXkCDsnojsirXri4jri6QuXCIsXHJcbiAgICAgICAgdmFsdWU6ZmFsc2UsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQnVpbGRpbmc6UmVhY3QuRkM9KCk9PntcclxuICAgIGNvbnN0IGxhcmdlQnVpbGRpbmdUeXBlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ubGFyZ2VCdWlsZGluZ1R5cGUpO1xyXG4gICAgY29uc3QgYnVpbGRpbmdUeXBlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20uYnVpbGRpbmdUeXBlKTtcclxuICAgIGNvbnN0IHJvb21UeXBlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ucm9vbVR5cGUpO1xyXG4gICAgY29uc3QgaXNTZXRVcEZvckd1ZXN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20uaXNTZXRVcEZvckd1ZXN0KTtcclxuICAgIFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vICog7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0TGFyZ2VCdWlsZGluZ1R5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyAqIOyDgeyEuCDqsbTrrLwg7Jyg7ZiVIOuzgOqyveyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VCdWlsZGluZ1R5cGU9KGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pik9PntcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gKiDsiJnshowg7Jyg7ZiVIOuzgOqyveyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VSb29tVHlwZSA9IChldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgICBjb25zdCBzZWxlY3RlZD1ldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0Um9vbVR5cGUoXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCBhcyBcImVudGlyZVwiIHwgXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAqIOqyjOyKpO2KuOyaqSDsiJnshozsnbjsp4Ag67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VJc1NldFVwRm9yR3Vlc3Q9KHZhbHVlOmFueSk9PntcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldElzU2V0VXBGb3JHdWVzdCh2YWx1ZSkpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gKiDshKDtg53rkJwg6rG066y8IOycoO2YlSBvcHRpb25zXHJcbiAgICBjb25zdCBkZXRhaWxCdWlsZGluZ09wdGlvbnM9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIHN3aXRjaCAobGFyZ2VCdWlsZGluZ1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIuyVhO2MjO2KuFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwi7KO87YOdXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBob3VzdEJ1aWxkaW5nVHlwZUxpc3RcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShob3VzdEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXN0QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwi67OE7LGEXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuuPhe2Kue2VnCDsiJnshoxcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJCJkJcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGJuYkJ1aWxkaW5nVHlwZUxpc3RcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShibmJCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBibmJCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLrtoDti7DtgaztmLjthZRcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtsYXJnZUJ1aWxkaW5nVHlwZV0pO1xyXG5cclxuICAgIC8vICog66qo65OgIOqwkuydtCDsnojripTsp4Ag7ZmV7J247ZWY6riwXHJcbiAgICBjb25zdCBpc1ZhbGlkPXVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIGlmKCFsYXJnZUJ1aWxkaW5nVHlwZSB8fCAhYnVpbGRpbmdUeXBlIHx8ICFyb29tVHlwZSB8fCAhaXNTZXRVcEZvckd1ZXN0ID09PSBudWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSxbbGFyZ2VCdWlsZGluZ1R5cGUsIGJ1aWxkaW5nVHlwZSwgcm9vbVR5cGUsIGlzU2V0VXBGb3JHdWVzdF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgyPuuTseuhne2VoCDsiJnshowg7KKF66WY64qUIOustOyXh+yduOqwgOyalD88L2gyPlxyXG4gICAgICAgICAgICA8aDM+MeuLqOqzhDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYXJnZUJ1aWxkaW5nVHlwZSB8fCB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLtlZjrgpjrpbwg7ISt7YOd7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi7Jqw7ISgIOuylOychOulvCDsooHtmIDrs7zquYzsmpQ/XCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYXJnZUJ1aWxkaW5nVHlwZUxpc3R9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YnVpbGRpbmdUeXBlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZD17ISFidWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuqxtOusvCDsnKDtmJXsnYQg7ISg7YOd7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtkZXRhaWxCdWlsZGluZ09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2J1aWxkaW5nVHlwZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1yb29tLXR5cGUtcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyEhcm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuqyjOyKpO2KuOqwgCDrrLXqsowg65CgIOyImeyGjCDsnKDtmJXsnYQg6rOo65287KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyb29tVHlwZVJhZGlvT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJvb21UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1pcy1zZXR1cC1mb3ItZ3Vlc3QtcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e2lzU2V0VXBGb3JHdWVzdCE9PW51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuqyjOyKpO2KuOunjCDsgqzsmqntlZjrj4TroZ0g66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgOyalD9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lzU2V0VXBGb3JHdWVzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlzU2V0VXBGb3JHdWVzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2lzU2V0VXBGb3JHdWVzdE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUZvb3RlclxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBwcmV2SHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgbmV4dEhyZWY9XCIvcm9vbS9yZWdpc3Rlci9iZWRyb29tc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQnVpbGRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==