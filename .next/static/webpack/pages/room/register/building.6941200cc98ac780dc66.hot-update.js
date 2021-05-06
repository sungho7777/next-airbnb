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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // 큰 범위 건물 유형 변경 시

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
      lineNumber: 174,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "1\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-building-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "register",
        value: buildingType || undefined,
        defaultValue: "\uD558\uB098\uB97C \uC12D\uD0DD\uD574\uC8FC\uC138\uC694.",
        disabledOptions: disabledlargeBuildingTypeOptions,
        label: "\uC6B0\uC120 \uBC94\uC704\uB97C \uC881\uD600\uBCFC\uAC00\uC694?",
        options: _lib_staticData__WEBPACK_IMPORTED_MODULE_7__["largeBuildingTypeList"],
        disabled: !largeBuildingType,
        onChange: onChangeBuildingType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }, _this), buildingType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-room-type-radio",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: "\uAC8C\uC2A4\uD2B8\uAC00 \uBB35\uAC8C \uB420 \uC219\uC18C \uC720\uD615\uC744 \uACE8\uB77C\uC8FC\uC138\uC694.",
        value: isSetUpForGuest,
        options: roomTypeRadioOptions,
        onChange: onChangeRoomType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 173,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci9SZWdpc3RlclJvb21CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicGFsZXR0ZSIsImdyYXlfNzYiLCJkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9ucyIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaXNTZXRVcEZvckd1ZXN0cyIsIlJlZ2lzdGVyUm9vbUJ1aWxkaW5nIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSIsImV2ZW50IiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwidGFyZ2V0Iiwib25DaGFuZ2VCdWlsZGluZ1R5cGUiLCJzZXRCdWlsZGluZ1R5cGUiLCJvbkNoYW5nZVJvb21UeXBlIiwic2VsZWN0ZWQiLCJzZXRSb29tVHlwZSIsIm9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0Iiwic2V0SXNTZXRVcEZvckd1ZXN0IiwiZGV0YWlsQnVpbGRpbmdPcHRpb25zIiwidXNlTWVtbyIsInJlcXVpcmUiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiLCJibmJCdWlsZGluZ1R5cGVMaXN0IiwiYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0IiwidW5kZWZpbmVkIiwibGFyZ2VCdWlsZGluZ1R5cGVMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNkJILENBcElEOztHQUFNakIsb0I7VUFDd0JFLGtELEVBR0xBLGtELEVBQ0pBLGtELEVBQ09BLGtELEVBSVBPLHVEOzs7TUFWZlQsb0I7QUFzSVNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmcuNjk0MTIwMGNjOThhYzc4MGRjNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCB7bGFyZ2VCdWlsZGluZ1R5cGVMaXN0fSBmcm9tIFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSBcIi4uL2NvbW1vbi9SYWRpb0dyb3VwXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpbyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20taXMtc2V0dXAtZm9yLWd1ZXN0LXJhZGlvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuLy8gKiDshKDtg50g67aI6rCA64ql7ZWcIO2BvCDrspTsnIQg6rG066y8IOycoO2YlVxyXG5jb25zdCBkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9ucyA9IFtcIu2VmOuCmOulvCDshKDtg53tlbTso7zshLjsmpQuXCJdO1xyXG5cclxuLy8gKiDsiJnshowg7Jyg7ZiVIHJhZGlvIG9wdGlvbnNcclxuY29uc3Qgcm9vbVR5cGVSYWRpb09wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLsp5Eg7KCE7LK0XCIsXHJcbiAgICAgICAgdmFsdWU6XCJlbnRpcmVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIuqyjOyKpO2KuOqwgCDsiJnshowg7KCE7LK066W8IOuLpOuluCDsgqzrnozqs7wg6rO17Jyg7ZWY7KeAIOyViuqzoCDri6jrj4XsnLzroZwg7J207Jqp7ZWp64uI64ukLiDsnbzrsJjsoIHsnLzroZwg7Lmo7IukLCDsmpXsi6QsIOu2gOyXjOydtCDtj6ztlajrkKnri4jri6QuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi6rCc7J247IukXCIsXHJcbiAgICAgICAgdmFsdWU6XCJwcml2YXRlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCLqsozsiqTtirjsl5Dqsowg6rCc7J24IOy5qOyLpOydtCDsoJzqs7XrkKnri4jri6QuIOy5qOyLpCDsnbTsmbjsnZgg6rO16rCE7J2AIOqzteyaqeydvCDsiJgg7J6I7Iq164uI64ukLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuuLpOyduOyLpFwiLFxyXG4gICAgICAgIHZhbHVlOlwicHVibGljXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCLqsozsiqTtirjripQg6rCc7J246rO16rCEIOyXhuydtCwg64uk66W4IOyCrOuejOqzvCDtlajqu5gg7JOw64qUIOy5qOyLpOydtOuCmCDqs7Xsmqnqs7XqsITsl5DshJwg7IiZ67CV7ZWp64uI64ukLlwiLFxyXG4gICAgfSxcclxuXTtcclxuLy8gKiDqsozsiqTtirjrp4wg7IKs7Jqp7ZWY64+E66GdIOunjOuTpOyWtOynhCDsiJnshozsnbjsp4Ag652865SU7JikIG9wdGlvbnNcclxuY29uc3QgaXNTZXRVcEZvckd1ZXN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuyYiCwg6rKM7Iqk7Yq47Jqp7Jy866GcIOuUsOuhnCDrp4jroKjrkJwg7IiZ7IaM7J6F64uI64ukLlwiLFxyXG4gICAgICAgIHZhbHVlOnRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi7JWE64uI7JqULCDsoJwg6rCc7J24IOusvOqxtOydtCDsiJnshozsl5Ag7J6I7Iq164uI64ukLlwiLFxyXG4gICAgICAgIHZhbHVlOmZhbHNlLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nOlJlYWN0LkZDPSgpPT57XHJcbiAgICBjb25zdCBsYXJnZUJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgICAgIChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmxhcmdlQnVpbGRpbmdUeXBlXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnVpbGRpbmdUeXBlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20uYnVpbGRpbmdUeXBlKTtcclxuICAgIGNvbnN0IHJvb21UeXBlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20ucm9vbVR5cGUpO1xyXG4gICAgY29uc3QgaXNTZXRVcEZvckd1ZXN0ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20uaXNTZXRVcEZvckd1ZXN0XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8g7YGwIOuylOychCDqsbTrrLwg7Jyg7ZiVIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlTGFyZ2VCdWlsZGluZ1R5cGUgPSAoXHJcbiAgICAgICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PlxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRMYXJnZUJ1aWxkaW5nVHlwZShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vICog7IOB7IS4IOqxtOusvCDsnKDtmJUg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJ1aWxkaW5nVHlwZT0oZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAqIOyImeyGjCDsnKDtmJUg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZVJvb21UeXBlID0gKGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkPWV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRSb29tVHlwZShcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkIGFzIFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vICog6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUlzU2V0VXBGb3JHdWVzdD0odmFsdWU6YW55KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0SXNTZXRVcEZvckd1ZXN0KHZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyAqIOyEoO2DneuQnCDqsbTrrLwg7Jyg7ZiVIG9wdGlvbnNcclxuICAgIGNvbnN0IGRldGFpbEJ1aWxkaW5nT3B0aW9ucz11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgc3dpdGNoIChsYXJnZUJ1aWxkaW5nVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwi7JWE7YyM7Yq4XCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLso7ztg51cIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXN0QnVpbGRpbmdUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGhvdXN0QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG91c3RCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLrs4TssYRcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwi64+F7Yq57ZWcIOyImeyGjFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUodW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkImQlwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm5iQnVpbGRpbmdUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJuYkJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJuYkJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuu2gO2LsO2BrO2YuO2FlFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbGFyZ2VCdWlsZGluZ1R5cGVdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+65Ox66Gd7ZWgIOyImeyGjCDsooXrpZjripQg66y07JeH7J246rCA7JqUPzwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4x64uo6rOEPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1aWxkaW5nVHlwZSB8fCB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi7ZWY64KY66W8IOyEre2Dne2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17ZGlzYWJsZWRsYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLsmrDshKAg67KU7JyE66W8IOyige2YgOuzvOqwgOyalD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhcmdlQnVpbGRpbmdUeXBlTGlzdH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXJnZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2J1aWxkaW5nVHlwZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tcm9vbS10eXBlLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsozsiqTtirjqsIAg66y16rKMIOuQoCDsiJnshowg7Jyg7ZiV7J2EIOqzqOudvOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXNTZXRVcEZvckd1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyb29tVHlwZVJhZGlvT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=