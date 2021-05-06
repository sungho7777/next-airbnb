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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "register",
        value: buildingType || undefined,
        defaultValue: "\uD558\uB098\uB97C \uC12D\uD0DD\uD574\uC8FC\uC138\uC694.",
        disabledOptions: disabledlargeBuildingTypeOptions,
        isValid: !!_lib_staticData__WEBPACK_IMPORTED_MODULE_7__["largeBuildingTypeList"],
        label: "\uC6B0\uC120 \uBC94\uC704\uB97C \uC881\uD600\uBCFC\uAE4C\uC694?",
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "register",
        value: buildingType || "",
        disabled: !largeBuildingType //onChange={(e) => setBuildingTypeDispatch(e.target.value)}
        ,
        isValid: !!buildingType,
        label: "\uAC74\uBB3C \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694.",
        options: detailBuildingOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
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
          lineNumber: 210,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
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
          lineNumber: 219,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 21
      }, _this)]
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isValid: false,
      prevHref: "/",
      nextHref: "/room/register/bedrooms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci9SZWdpc3RlclJvb21CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicGFsZXR0ZSIsImdyYXlfNzYiLCJkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9ucyIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaXNTZXRVcEZvckd1ZXN0T3B0aW9ucyIsIlJlZ2lzdGVyUm9vbUJ1aWxkaW5nIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSIsImV2ZW50IiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwidGFyZ2V0Iiwib25DaGFuZ2VCdWlsZGluZ1R5cGUiLCJzZXRCdWlsZGluZ1R5cGUiLCJvbkNoYW5nZVJvb21UeXBlIiwic2VsZWN0ZWQiLCJzZXRSb29tVHlwZSIsIm9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0Iiwic2V0SXNTZXRVcEZvckd1ZXN0IiwiZGV0YWlsQnVpbGRpbmdPcHRpb25zIiwidXNlTWVtbyIsInJlcXVpcmUiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiLCJibmJCdWlsZGluZ1R5cGVMaXN0IiwiYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0IiwiaXNWYWxpZCIsInVuZGVmaW5lZCIsImxhcmdlQnVpbGRpbmdUeXBlTGlzdCJdLCJtYXBwaW5ncyI6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QUFFLEtBRGI7QUFFSSxjQUFRLEVBQUMsR0FGYjtBQUdJLGNBQVEsRUFBQztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwREgsQ0F0S0Q7O0dBQU1DLG9CO1VBQ3dCRSxrRCxFQUdMQSxrRCxFQUNKQSxrRCxFQUNPQSxrRCxFQUVQTyx1RDs7O01BUmZULG9CO0FBd0tTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2J1aWxkaW5nLjA4OGFjMGQ0YmMzZjVlZTIyNDYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQge2xhcmdlQnVpbGRpbmdUeXBlTGlzdH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCIuLi9jb21tb24vUmFkaW9Hcm91cFwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJSb29tRm9vdGVyIGZyb20gXCIuL1JlZ2lzdGVyUm9vbUZvb3RlclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDYycHggMzBweCAxMDBweDtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1yb29tLXR5cGUtcmFkaW8ge1xyXG4gICAgICAgIG1heC13aWR0aDogNDg1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWlzLXNldHVwLWZvci1ndWVzdC1yYWRpbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbi8vICog7ISg7YOdIOu2iOqwgOuKpe2VnCDtgbwg67KU7JyEIOqxtOusvCDsnKDtmJVcclxuY29uc3QgZGlzYWJsZWRsYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMgPSBbXCLtlZjrgpjrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiXTtcclxuXHJcbi8vICog7IiZ7IaMIOycoO2YlSByYWRpbyBvcHRpb25zXHJcbmNvbnN0IHJvb21UeXBlUmFkaW9PcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi7KeRIOyghOyytFwiLFxyXG4gICAgICAgIHZhbHVlOlwiZW50aXJlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCLqsozsiqTtirjqsIAg7IiZ7IaMIOyghOyytOulvCDri6Trpbgg7IKs656M6rO8IOqzteycoO2VmOyngCDslYrqs6Ag64uo64+F7Jy866GcIOydtOyaqe2VqeuLiOuLpC4g7J2867CY7KCB7Jy866GcIOy5qOyLpCwg7JqV7IukLCDrtoDsl4zsnbQg7Y+s7ZWo65Cp64uI64ukLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuqwnOyduOyLpFwiLFxyXG4gICAgICAgIHZhbHVlOlwicHJpdmF0ZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwi6rKM7Iqk7Yq47JeQ6rKMIOqwnOyduCDsuajsi6TsnbQg7KCc6rO165Cp64uI64ukLiDsuajsi6Qg7J207Jm47J2YIOqzteqwhOydgCDqs7Xsmqnsnbwg7IiYIOyeiOyKteuLiOuLpC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLri6Tsnbjsi6RcIixcclxuICAgICAgICB2YWx1ZTpcInB1YmxpY1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwi6rKM7Iqk7Yq464qUIOqwnOyduOqzteqwhCDsl4bsnbQsIOuLpOuluCDsgqzrnozqs7wg7ZWo6ruYIOyTsOuKlCDsuajsi6TsnbTrgpgg6rO17Jqp6rO16rCE7JeQ7IScIOyImeuwle2VqeuLiOuLpC5cIixcclxuICAgIH0sXHJcbl07XHJcbi8vICog6rKM7Iqk7Yq466eMIOyCrOyaqe2VmOuPhOuhnSDrp4zrk6TslrTsp4Qg7IiZ7IaM7J247KeAIOudvOuUlOyYpCBvcHRpb25zXHJcbmNvbnN0IGlzU2V0VXBGb3JHdWVzdE9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLsmIgsIOqyjOyKpO2KuOyaqeycvOuhnCDrlLDroZwg66eI66Co65CcIOyImeyGjOyeheuLiOuLpC5cIixcclxuICAgICAgICB2YWx1ZTp0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuyVhOuLiOyalCwg7KCcIOqwnOyduCDrrLzqsbTsnbQg7IiZ7IaM7JeQIOyeiOyKteuLiOuLpC5cIixcclxuICAgICAgICB2YWx1ZTpmYWxzZSxcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CdWlsZGluZzpSZWFjdC5GQz0oKT0+e1xyXG4gICAgY29uc3QgbGFyZ2VCdWlsZGluZ1R5cGUgPSB1c2VTZWxlY3RvcihcclxuICAgICAgICAoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5sYXJnZUJ1aWxkaW5nVHlwZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmJ1aWxkaW5nVHlwZSk7XHJcbiAgICBjb25zdCByb29tVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLnJvb21UeXBlKTtcclxuICAgIGNvbnN0IGlzU2V0VXBGb3JHdWVzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmlzU2V0VXBGb3JHdWVzdCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyAqIO2BsCDrspTsnIQg6rG066y8IOycoO2YlSDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldExhcmdlQnVpbGRpbmdUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gKiDsg4HshLgg6rG066y8IOycoO2YlSDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQnVpbGRpbmdUeXBlPShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vICog7IiZ7IaMIOycoO2YlSDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlUm9vbVR5cGUgPSAoZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQ9ZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldFJvb21UeXBlKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgYXMgXCJlbnRpcmVcIiB8IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gKiDqsozsiqTtirjsmqkg7IiZ7IaM7J247KeAIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0PSh2YWx1ZTphbnkpPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRJc1NldFVwRm9yR3Vlc3QodmFsdWUpKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vICog7ISg7YOd65CcIOqxtOusvCDsnKDtmJUgb3B0aW9uc1xyXG4gICAgY29uc3QgZGV0YWlsQnVpbGRpbmdPcHRpb25zPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBzd2l0Y2ggKGxhcmdlQnVpbGRpbmdUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCLslYTtjIztirhcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgICAgICAgICBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuyjvO2DnVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91c3RCdWlsZGluZ1R5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoaG91c3RCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3VzdEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuuzhOyxhFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLrj4XtirntlZwg7IiZ7IaMXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3RcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZSh1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQiZCXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBibmJCdWlsZGluZ1R5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm5iQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm5iQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwi67aA7Yuw7YGs7Zi47YWUXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbGFyZ2VCdWlsZGluZ1R5cGVdKTtcclxuXHJcbiAgICAvLyAqIOuqqOuToCDqsJLsnbQg7J6I64qU7KeAIO2ZleyduO2VmOq4sFxyXG4gICAgY29uc3QgaXNWYWxpZD11c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBpZighbGFyZ2VCdWlsZGluZ1R5cGUgfHwgIWJ1aWxkaW5nVHlwZSB8fCAhcm9vbVR5cGUgfHwgIWlzU2V0VXBGb3JHdWVzdCA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0sW2xhcmdlQnVpbGRpbmdUeXBlLCBidWlsZGluZ1R5cGUsIHJvb21UeXBlLCBpc1NldFVwRm9yR3Vlc3RdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMj7rk7HroZ3tlaAg7IiZ7IaMIOyiheulmOuKlCDrrLTsl4fsnbjqsIDsmpQ/PC9oMj5cclxuICAgICAgICAgICAgPGgzPjHri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnVpbGRpbmdUeXBlIHx8IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLtlZjrgpjrpbwg7ISt7YOd7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWxhcmdlQnVpbGRpbmdUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyasOyEoCDrspTsnITrpbwg7KKB7ZiA67O86rmM7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGV0YWlsQnVpbGRpbmdPcHRpb25zfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2Rpc2FibGVkPXshbGFyZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YnVpbGRpbmdUeXBlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxhcmdlQnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgLy9vbkNoYW5nZT17KGUpID0+IHNldEJ1aWxkaW5nVHlwZURpc3BhdGNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyEhYnVpbGRpbmdUeXBlfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLqsbTrrLwg7Jyg7ZiV7J2EIOyEoO2Dne2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17ZGV0YWlsQnVpbGRpbmdPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtidWlsZGluZ1R5cGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tcm9vbS10eXBlLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIXJvb21UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsozsiqTtirjqsIAg66y16rKMIOuQoCDsiJnshowg7Jyg7ZiV7J2EIOqzqOudvOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvb21UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cm9vbVR5cGVSYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20taXMtc2V0dXAtZm9yLWd1ZXN0LXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXtpc1NldFVwRm9yR3Vlc3QhPT1udWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLqsozsiqTtirjrp4wg7IKs7Jqp7ZWY64+E66GdIOunjOuTpOyWtOynhCDsiJnshozsnbjqsIDsmpQ/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc1NldFVwRm9yR3Vlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJc1NldFVwRm9yR3Vlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtpc1NldFVwRm9yR3Vlc3RPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxSZWdpc3RlclJvb21Gb290ZXJcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcHJldkhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIG5leHRIcmVmPVwiL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=