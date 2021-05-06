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
        defaultValue: disabledlargeBuildingTypeOptions,
        disabledOptions: disabledlargeBuildingTypeOptions,
        isValid: !!_lib_staticData__WEBPACK_IMPORTED_MODULE_7__["largeBuildingTypeList"],
        label: "\uC6B0\uC120 \uBC94\uC704\uB97C \uC881\uD600\uBCFC\uAE4C\uC694?",
        options: detailBuildingOptions,
        onChange: onChangeBuildingType
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
        disabled: !largeBuildingType //onChange={(e) => setBuildingTypeDispatch(e.target.value)}
        ,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci9SZWdpc3RlclJvb21CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicGFsZXR0ZSIsImdyYXlfNzYiLCJkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9ucyIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaXNTZXRVcEZvckd1ZXN0T3B0aW9ucyIsIlJlZ2lzdGVyUm9vbUJ1aWxkaW5nIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSIsImV2ZW50IiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwidGFyZ2V0Iiwib25DaGFuZ2VCdWlsZGluZ1R5cGUiLCJzZXRCdWlsZGluZ1R5cGUiLCJvbkNoYW5nZVJvb21UeXBlIiwic2VsZWN0ZWQiLCJzZXRSb29tVHlwZSIsIm9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0Iiwic2V0SXNTZXRVcEZvckd1ZXN0IiwiZGV0YWlsQnVpbGRpbmdPcHRpb25zIiwidXNlTWVtbyIsInJlcXVpcmUiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiLCJibmJCdWlsZGluZ1R5cGVMaXN0IiwiYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0IiwiaXNWYWxpZCIsInVuZGVmaW5lZCIsImxhcmdlQnVpbGRpbmdUeXBlTGlzdCJdLCJtYXBwaW5ncyI6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LDREQUFEO0FBQ0ksYUFBTyxFQUFFLEtBRGI7QUFFSSxjQUFRLEVBQUMsR0FGYjtBQUdJLGNBQVEsRUFBQztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwREgsQ0FwS0Q7O0dBQU1DLG9CO1VBQ3dCRSxrRCxFQUNMQSxrRCxFQUNKQSxrRCxFQUNPQSxrRCxFQUVQTyx1RDs7O01BTmZULG9CO0FBc0tTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2J1aWxkaW5nLjVjYTJjOGE4Y2M5YzJlOGNmMmViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5pbXBvcnQge2xhcmdlQnVpbGRpbmdUeXBlTGlzdH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi4vY29tbW9uL1NlbGVjdG9yXCI7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCIuLi9jb21tb24vUmFkaW9Hcm91cFwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJSb29tRm9vdGVyIGZyb20gXCIuL1JlZ2lzdGVyUm9vbUZvb3RlclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDYycHggMzBweCAxMDBweDtcclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1yb29tLXR5cGUtcmFkaW8ge1xyXG4gICAgICAgIG1heC13aWR0aDogNDg1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWlzLXNldHVwLWZvci1ndWVzdC1yYWRpbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbi8vICog7ISg7YOdIOu2iOqwgOuKpe2VnCDtgbwg67KU7JyEIOqxtOusvCDsnKDtmJVcclxuY29uc3QgZGlzYWJsZWRsYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnMgPSBbXCLtlZjrgpjrpbwg7ISg7YOd7ZW07KO87IS47JqULlwiXTtcclxuXHJcbi8vICog7IiZ7IaMIOycoO2YlSByYWRpbyBvcHRpb25zXHJcbmNvbnN0IHJvb21UeXBlUmFkaW9PcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi7KeRIOyghOyytFwiLFxyXG4gICAgICAgIHZhbHVlOlwiZW50aXJlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCLqsozsiqTtirjqsIAg7IiZ7IaMIOyghOyytOulvCDri6Trpbgg7IKs656M6rO8IOqzteycoO2VmOyngCDslYrqs6Ag64uo64+F7Jy866GcIOydtOyaqe2VqeuLiOuLpC4g7J2867CY7KCB7Jy866GcIOy5qOyLpCwg7JqV7IukLCDrtoDsl4zsnbQg7Y+s7ZWo65Cp64uI64ukLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuqwnOyduOyLpFwiLFxyXG4gICAgICAgIHZhbHVlOlwicHJpdmF0ZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwi6rKM7Iqk7Yq47JeQ6rKMIOqwnOyduCDsuajsi6TsnbQg7KCc6rO165Cp64uI64ukLiDsuajsi6Qg7J207Jm47J2YIOqzteqwhOydgCDqs7Xsmqnsnbwg7IiYIOyeiOyKteuLiOuLpC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLri6Tsnbjsi6RcIixcclxuICAgICAgICB2YWx1ZTpcInB1YmxpY1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwi6rKM7Iqk7Yq464qUIOqwnOyduOqzteqwhCDsl4bsnbQsIOuLpOuluCDsgqzrnozqs7wg7ZWo6ruYIOyTsOuKlCDsuajsi6TsnbTrgpgg6rO17Jqp6rO16rCE7JeQ7IScIOyImeuwle2VqeuLiOuLpC5cIixcclxuICAgIH0sXHJcbl07XHJcbi8vICog6rKM7Iqk7Yq466eMIOyCrOyaqe2VmOuPhOuhnSDrp4zrk6TslrTsp4Qg7IiZ7IaM7J247KeAIOudvOuUlOyYpCBvcHRpb25zXHJcbmNvbnN0IGlzU2V0VXBGb3JHdWVzdE9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLsmIgsIOqyjOyKpO2KuOyaqeycvOuhnCDrlLDroZwg66eI66Co65CcIOyImeyGjOyeheuLiOuLpC5cIixcclxuICAgICAgICB2YWx1ZTp0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuyVhOuLiOyalCwg7KCcIOqwnOyduCDrrLzqsbTsnbQg7IiZ7IaM7JeQIOyeiOyKteuLiOuLpC5cIixcclxuICAgICAgICB2YWx1ZTpmYWxzZSxcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21CdWlsZGluZzpSZWFjdC5GQz0oKT0+e1xyXG4gICAgY29uc3QgbGFyZ2VCdWlsZGluZ1R5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5sYXJnZUJ1aWxkaW5nVHlwZSk7XHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5idWlsZGluZ1R5cGUpO1xyXG4gICAgY29uc3Qgcm9vbVR5cGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5yb29tVHlwZSk7XHJcbiAgICBjb25zdCBpc1NldFVwRm9yR3Vlc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbS5pc1NldFVwRm9yR3Vlc3QpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gKiDtgbAg67KU7JyEIOqxtOusvCDsnKDtmJUg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRMYXJnZUJ1aWxkaW5nVHlwZShldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vICog7IOB7IS4IOqxtOusvCDsnKDtmJUg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUJ1aWxkaW5nVHlwZT0oZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAqIOyImeyGjCDsnKDtmJUg67OA6rK97IucXHJcbiAgICBjb25zdCBvbkNoYW5nZVJvb21UeXBlID0gKGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkPWV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRSb29tVHlwZShcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkIGFzIFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vICog6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUlzU2V0VXBGb3JHdWVzdD0odmFsdWU6YW55KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0SXNTZXRVcEZvckd1ZXN0KHZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyAqIOyEoO2DneuQnCDqsbTrrLwg7Jyg7ZiVIG9wdGlvbnNcclxuICAgIGNvbnN0IGRldGFpbEJ1aWxkaW5nT3B0aW9ucz11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgc3dpdGNoIChsYXJnZUJ1aWxkaW5nVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwi7JWE7YyM7Yq4XCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCxcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZShhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLso7ztg51cIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXN0QnVpbGRpbmdUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGhvdXN0QnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG91c3RCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLrs4TssYRcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwi64+F7Yq57ZWcIOyImeyGjFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUodW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkImQlwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm5iQnVpbGRpbmdUeXBlTGlzdFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJuYkJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJuYkJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuu2gO2LsO2BrO2YuO2FlFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xhcmdlQnVpbGRpbmdUeXBlXSk7XHJcblxyXG4gICAgLy8gKiDrqqjrk6Ag6rCS7J20IOyeiOuKlOyngCDtmZXsnbjtlZjquLBcclxuICAgIGNvbnN0IGlzVmFsaWQ9dXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgaWYoIWxhcmdlQnVpbGRpbmdUeXBlIHx8ICFidWlsZGluZ1R5cGUgfHwgIXJvb21UeXBlIHx8ICFpc1NldFVwRm9yR3Vlc3QgPT09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9LFtsYXJnZUJ1aWxkaW5nVHlwZSwgYnVpbGRpbmdUeXBlLCByb29tVHlwZSwgaXNTZXRVcEZvckd1ZXN0XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+65Ox66Gd7ZWgIOyImeyGjCDsooXrpZjripQg66y07JeH7J246rCA7JqUPzwvaDI+XHJcbiAgICAgICAgICAgIDxoMz4x64uo6rOEPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhcmdlQnVpbGRpbmdUeXBlIHx8IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRpc2FibGVkbGFyZ2VCdWlsZGluZ1R5cGVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGlzYWJsZWRsYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWxhcmdlQnVpbGRpbmdUeXBlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyasOyEoCDrspTsnITrpbwg7KKB7ZiA67O86rmM7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGV0YWlsQnVpbGRpbmdPcHRpb25zfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWJ1aWxkaW5nLXNlbGVjdG9yLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtidWlsZGluZ1R5cGUgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGFyZ2VCdWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXsoZSkgPT4gc2V0QnVpbGRpbmdUeXBlRGlzcGF0Y2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZD17ISFidWlsZGluZ1R5cGV9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIuqxtOusvCDsnKDtmJXsnYQg7ISg7YOd7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtkZXRhaWxCdWlsZGluZ09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2J1aWxkaW5nVHlwZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1yb29tLXR5cGUtcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyEhcm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuqyjOyKpO2KuOqwgCDrrLXqsowg65CgIOyImeyGjCDsnKDtmJXsnYQg6rOo65287KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyb29tVHlwZVJhZGlvT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJvb21UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1pcy1zZXR1cC1mb3ItZ3Vlc3QtcmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e2lzU2V0VXBGb3JHdWVzdCE9PW51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuqyjOyKpO2KuOunjCDsgqzsmqntlZjrj4TroZ0g66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgOyalD9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lzU2V0VXBGb3JHdWVzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlzU2V0VXBGb3JHdWVzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2lzU2V0VXBGb3JHdWVzdE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUZvb3RlclxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBwcmV2SHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgbmV4dEhyZWY9XCIvcm9vbS9yZWdpc3Rlci9iZWRyb29tc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQnVpbGRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==