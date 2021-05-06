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

var isSetUpForGuests = [{
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
  }, [largeBuildingType]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\uB4F1\uB85D\uD560 \uC219\uC18C \uC885\uB958\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "register",
        value: undefined,
        defaultValue: "\uD558\uB098\uB97C \uC12D\uD0DD\uD574\uC8FC\uC138\uC694.",
        disabledOptions: disabledlargeBuildingTypeOptions,
        label: "\uC6B0\uC120 \uBC94\uC704\uB97C \uC881\uD600\uBCFC\uAC00\uC694?",
        options: detailBuildingOptions,
        disabled: !largeBuildingType,
        onChange: onChangeBuildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }, _this), buildingType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-room-type-radio",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
        value: isSetUpForGuest,
        options: roomTypeRadioOptions,
        onChange: onChangeRoomType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomBuilding, "zTvHe20c0BiTo4aJTQhYq1ghva4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci9SZWdpc3RlclJvb21CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicGFsZXR0ZSIsImdyYXlfNzYiLCJkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9ucyIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaXNTZXRVcEZvckd1ZXN0cyIsIlJlZ2lzdGVyUm9vbUJ1aWxkaW5nIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSIsImV2ZW50IiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwidGFyZ2V0Iiwib25DaGFuZ2VCdWlsZGluZ1R5cGUiLCJzZXRCdWlsZGluZ1R5cGUiLCJvbkNoYW5nZVJvb21UeXBlIiwic2VsZWN0ZWQiLCJzZXRSb29tVHlwZSIsIm9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0Iiwic2V0SXNTZXRVcEZvckd1ZXN0IiwiZGV0YWlsQnVpbGRpbmdPcHRpb25zIiwidXNlTWVtbyIsInJlcXVpcmUiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiLCJibmJCdWlsZGluZ1R5cGVMaXN0IiwiYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtB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QUE7QUFBQTtBQUFBLFdBREo7QUE2QkgsQ0FsSUQ7O0dBQU1qQixvQjtVQUN3QkUsa0QsRUFHTEEsa0QsRUFDSkEsa0QsRUFDT0Esa0QsRUFJUE8sdUQ7OztNQVZmVCxvQjtBQW9JU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9idWlsZGluZy5lZDE0MDUwMDRkODNmMmE1MGEwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJSb29tQWN0aW9ucyB9IGZyb20gXCIuLi8uLi9zdG9yZS9yZWdpc3RlclJvb21cIjtcclxuaW1wb3J0IHtsYXJnZUJ1aWxkaW5nVHlwZUxpc3R9IGZyb20gXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4uL2NvbW1vbi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tIFwiLi4vY29tbW9uL1JhZGlvR3JvdXBcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA2MnB4IDMwcHggMTAwcHg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tcm9vbS10eXBlLXJhZGlvIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ4NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1pcy1zZXR1cC1mb3ItZ3Vlc3QtcmFkaW8ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG4vLyAqIOyEoO2DnSDrtojqsIDriqXtlZwg7YG8IOuylOychCDqsbTrrLwg7Jyg7ZiVXHJcbmNvbnN0IGRpc2FibGVkbGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zID0gW1wi7ZWY64KY66W8IOyEoO2Dne2VtOyjvOyEuOyalC5cIl07XHJcblxyXG4vLyAqIOyImeyGjCDsnKDtmJUgcmFkaW8gb3B0aW9uc1xyXG5jb25zdCByb29tVHlwZVJhZGlvT3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuynkSDsoITssrRcIixcclxuICAgICAgICB2YWx1ZTpcImVudGlyZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwi6rKM7Iqk7Yq46rCAIOyImeyGjCDsoITssrTrpbwg64uk66W4IOyCrOuejOqzvCDqs7XsnKDtlZjsp4Ag7JWK6rOgIOuLqOuPheycvOuhnCDsnbTsmqntlanri4jri6QuIOydvOuwmOyggeycvOuhnCDsuajsi6QsIOyaleyLpCwg67aA7JeM7J20IO2PrO2VqOuQqeuLiOuLpC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLqsJzsnbjsi6RcIixcclxuICAgICAgICB2YWx1ZTpcInByaXZhdGVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIuqyjOyKpO2KuOyXkOqyjCDqsJzsnbgg7Lmo7Iuk7J20IOygnOqzteuQqeuLiOuLpC4g7Lmo7IukIOydtOyZuOydmCDqs7XqsITsnYAg6rO17Jqp7J28IOyImCDsnojsirXri4jri6QuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi64uk7J247IukXCIsXHJcbiAgICAgICAgdmFsdWU6XCJwdWJsaWNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIuqyjOyKpO2KuOuKlCDqsJzsnbjqs7XqsIQg7JeG7J20LCDri6Trpbgg7IKs656M6rO8IO2VqOq7mCDsk7DripQg7Lmo7Iuk7J2064KYIOqzteyaqeqzteqwhOyXkOyEnCDsiJnrsJXtlanri4jri6QuXCIsXHJcbiAgICB9LFxyXG5dO1xyXG4vLyAqIOqyjOyKpO2KuOunjCDsgqzsmqntlZjrj4TroZ0g66eM65Ok7Ja07KeEIOyImeyGjOyduOyngCDrnbzrlJTsmKQgb3B0aW9uc1xyXG5jb25zdCBpc1NldFVwRm9yR3Vlc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi7JiILCDqsozsiqTtirjsmqnsnLzroZwg65Sw66GcIOuniOugqOuQnCDsiJnshozsnoXri4jri6QuXCIsXHJcbiAgICAgICAgdmFsdWU6dHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLslYTri4jsmpQsIOygnCDqsJzsnbgg66y86rG07J20IOyImeyGjOyXkCDsnojsirXri4jri6QuXCIsXHJcbiAgICAgICAgdmFsdWU6ZmFsc2UsXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQnVpbGRpbmc6UmVhY3QuRkM9KCk9PntcclxuICAgIGNvbnN0IGxhcmdlQnVpbGRpbmdUeXBlID0gdXNlU2VsZWN0b3IoXHJcbiAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ubGFyZ2VCdWlsZGluZ1R5cGVcclxuICAgICk7XHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5idWlsZGluZ1R5cGUpO1xyXG4gICAgY29uc3Qgcm9vbVR5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5yb29tVHlwZSk7XHJcbiAgICBjb25zdCBpc1NldFVwRm9yR3Vlc3QgPSB1c2VTZWxlY3RvcihcclxuICAgICAgICAoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5pc1NldFVwRm9yR3Vlc3RcclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyAqIO2BsCDrspTsnIQg6rG066y8IOycoO2YlSDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldExhcmdlQnVpbGRpbmdUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gKiDsg4HshLgg6rG066y8IOycoO2YlSDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQnVpbGRpbmdUeXBlPShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vICog7IiZ7IaMIOycoO2YlSDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlUm9vbVR5cGUgPSAoZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQ9ZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldFJvb21UeXBlKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgYXMgXCJlbnRpcmVcIiB8IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gKiDqsozsiqTtirjsmqkg7IiZ7IaM7J247KeAIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0PSh2YWx1ZTphbnkpPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRJc1NldFVwRm9yR3Vlc3QodmFsdWUpKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vICog7ISg7YOd65CcIOqxtOusvCDsnKDtmJUgb3B0aW9uc1xyXG4gICAgY29uc3QgZGV0YWlsQnVpbGRpbmdPcHRpb25zPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBzd2l0Y2ggKGxhcmdlQnVpbGRpbmdUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCLslYTtjIztirhcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgICAgICAgICBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuyjvO2DnVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91c3RCdWlsZGluZ1R5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoaG91c3RCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3VzdEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuuzhOyxhFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLrj4XtirntlZwg7IiZ7IaMXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3RcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZSh1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQiZCXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBibmJCdWlsZGluZ1R5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm5iQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm5iQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwi67aA7Yuw7YGs7Zi47YWUXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbGFyZ2VCdWlsZGluZ1R5cGVdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+65Ox66Gd7ZWgIOyImeyGjCDsooXrpZjripQg66y07JeH7J246rCA7JqUPzwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4x64uo6rOEPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLtlZjrgpjrpbwg7ISt7YOd7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyasOyEoCDrspTsnITrpbwg7KKB7ZiA67O86rCA7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGV0YWlsQnVpbGRpbmdPcHRpb25zfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7YnVpbGRpbmdUeXBlICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1yb29tLXR5cGUtcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuqyjOyKpO2KuOqwgCDrrLXqsowg65CgIOyImeyGjCDsnKDtmJXsnYQg6rOo65287KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc1NldFVwRm9yR3Vlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Jvb21UeXBlUmFkaW9PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQnVpbGRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==