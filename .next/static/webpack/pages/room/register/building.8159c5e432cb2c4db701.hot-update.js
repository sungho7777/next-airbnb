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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "register",
        value: largeBuildingType || undefined,
        disabled: !disabledlargeBuildingTypeOptions,
        defaultValue: "\uD558\uB098\uB97C \uC12D\uD0DD\uD574\uC8FC\uC138\uC694.",
        disabledOptions: disabledlargeBuildingTypeOptions,
        isValid: !!largeBuildingType,
        label: "\uC6B0\uC120 \uBC94\uC704\uB97C \uC881\uD600\uBCFC\uAE4C\uC694?",
        options: detailBuildingOptions,
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWdpc3Rlci9SZWdpc3RlclJvb21CdWlsZGluZy50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicGFsZXR0ZSIsImdyYXlfNzYiLCJkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9ucyIsInJvb21UeXBlUmFkaW9PcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwiaXNTZXRVcEZvckd1ZXN0T3B0aW9ucyIsIlJlZ2lzdGVyUm9vbUJ1aWxkaW5nIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVnaXN0ZXJSb29tIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZSIsImV2ZW50IiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwidGFyZ2V0Iiwib25DaGFuZ2VCdWlsZGluZ1R5cGUiLCJzZXRCdWlsZGluZ1R5cGUiLCJvbkNoYW5nZVJvb21UeXBlIiwic2VsZWN0ZWQiLCJzZXRSb29tVHlwZSIsIm9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0Iiwic2V0SXNTZXRVcEZvckd1ZXN0IiwiZGV0YWlsQnVpbGRpbmdPcHRpb25zIiwidXNlTWVtbyIsInJlcXVpcmUiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiLCJibmJCdWlsZGluZ1R5cGVMaXN0IiwiYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0IiwiaXNWYWxpZCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlWQVNFQyx1REFBTyxDQUFDQyxPQVRWLENBQWYsQyxDQXlCQTs7S0F6Qk1KLFM7QUEwQk4sSUFBTUssZ0NBQWdDLEdBQUcsQ0FBQyxhQUFELENBQXpDLEMsQ0FFQTs7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxDQUN6QjtBQUNJQyxPQUFLLEVBQUMsTUFEVjtBQUVJQyxPQUFLLEVBQUMsUUFGVjtBQUdJQyxhQUFXLEVBQUM7QUFIaEIsQ0FEeUIsRUFNekI7QUFDSUYsT0FBSyxFQUFDLEtBRFY7QUFFSUMsT0FBSyxFQUFDLFNBRlY7QUFHSUMsYUFBVyxFQUFDO0FBSGhCLENBTnlCLEVBV3pCO0FBQ0lGLE9BQUssRUFBQyxLQURWO0FBRUlDLE9BQUssRUFBQyxRQUZWO0FBR0lDLGFBQVcsRUFBQztBQUhoQixDQVh5QixDQUE3QixDLENBaUJBOztBQUNBLElBQU1DLHNCQUFzQixHQUFHLENBQzNCO0FBQ0lILE9BQUssRUFBQyx5QkFEVjtBQUVJQyxPQUFLLEVBQUM7QUFGVixDQUQyQixFQUszQjtBQUNJRCxPQUFLLEVBQUMseUJBRFY7QUFFSUMsT0FBSyxFQUFDO0FBRlYsQ0FMMkIsQ0FBL0I7O0FBV0EsSUFBTUcsb0JBQTZCLEdBQUMsU0FBOUJBLG9CQUE4QixHQUFJO0FBQUE7O0FBQ3BDLE1BQU1DLGlCQUFpQixHQUFHQywwREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJILGlCQUE5QjtBQUFBLEdBQUQsQ0FBckM7QUFDQSxNQUFNSSxZQUFZLEdBQUdILDBEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkMsWUFBOUI7QUFBQSxHQUFELENBQWhDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSiwwREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJFLFFBQTlCO0FBQUEsR0FBRCxDQUE1QjtBQUNBLE1BQU1DLGVBQWUsR0FBR0wsMERBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxZQUFOLENBQW1CRyxlQUE5QjtBQUFBLEdBQUQsQ0FBbkM7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBTm9DLENBUXBDOztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQ0MsS0FBRCxFQUFpRDtBQUMvRUgsWUFBUSxDQUFDSSx1RUFBbUIsQ0FBQ0Msb0JBQXBCLENBQXlDRixLQUFLLENBQUNHLE1BQU4sQ0FBYWpCLEtBQXRELENBQUQsQ0FBUjtBQUNILEdBRkQsQ0FUb0MsQ0FhcEM7OztBQUNBLE1BQU1rQixvQkFBb0IsR0FBQyxTQUFyQkEsb0JBQXFCLENBQUNKLEtBQUQsRUFBOEM7QUFDckVILFlBQVEsQ0FBQ0ksdUVBQW1CLENBQUNJLGVBQXBCLENBQW9DTCxLQUFLLENBQUNHLE1BQU4sQ0FBYWpCLEtBQWpELENBQUQsQ0FBUjtBQUNILEdBRkQsQ0Fkb0MsQ0FrQnBDOzs7QUFDQSxNQUFNb0IsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTixLQUFELEVBQTZDO0FBQ2xFLFFBQU1PLFFBQVEsR0FBQ1AsS0FBSyxDQUFDRyxNQUFOLENBQWFqQixLQUE1QjtBQUNBVyxZQUFRLENBQ0pJLHVFQUFtQixDQUFDTyxXQUFwQixDQUNJRCxRQURKLENBREksQ0FBUjtBQUtILEdBUEQsQ0FuQm9DLENBNEJwQzs7O0FBQ0EsTUFBTUUsdUJBQXVCLEdBQUMsU0FBeEJBLHVCQUF3QixDQUFDdkIsS0FBRCxFQUFhO0FBQ3ZDVyxZQUFRLENBQUNJLHVFQUFtQixDQUFDUyxrQkFBcEIsQ0FBdUN4QixLQUF2QyxDQUFELENBQVI7QUFDSCxHQUZELENBN0JvQyxDQWtDcEM7OztBQUNBLE1BQU15QixxQkFBcUIsR0FBQ0MscURBQU8sQ0FBQyxZQUFJO0FBQ3BDLFlBQVF0QixpQkFBUjtBQUNJLFdBQUssS0FBTDtBQUFZO0FBQUEseUJBR0p1QixtQkFBTyxDQUFDLGlEQUFELENBSEg7QUFBQSxjQUVKQyx5QkFGSSxZQUVKQSx5QkFGSTs7QUFJUmpCLGtCQUFRLENBQ0pJLHVFQUFtQixDQUFDSSxlQUFwQixDQUFvQ1MseUJBQXlCLENBQUMsQ0FBRCxDQUE3RCxDQURJLENBQVI7QUFHQSxpQkFBT0EseUJBQVA7QUFDSDs7QUFDRCxXQUFLLElBQUw7QUFBVztBQUFBLDBCQUdIRCxtQkFBTyxDQUFDLGlEQUFELENBSEo7QUFBQSxjQUVIRSxxQkFGRyxhQUVIQSxxQkFGRzs7QUFJUGxCLGtCQUFRLENBQ0pJLHVFQUFtQixDQUFDSSxlQUFwQixDQUFvQ1UscUJBQXFCLENBQUMsQ0FBRCxDQUF6RCxDQURJLENBQVI7QUFHQSxpQkFBT0EscUJBQVA7QUFDSDs7QUFDRCxXQUFLLElBQUw7QUFBVztBQUFBLDBCQUdIRixtQkFBTyxDQUFDLGlEQUFELENBSEo7QUFBQSxjQUVIRyw2QkFGRyxhQUVIQSw2QkFGRzs7QUFJUG5CLGtCQUFRLENBQ0pJLHVFQUFtQixDQUFDSSxlQUFwQixDQUFvQ1csNkJBQTZCLENBQUMsQ0FBRCxDQUFqRSxDQURJLENBQVI7QUFHQSxpQkFBT0EsNkJBQVA7QUFDSDs7QUFDRCxXQUFLLFFBQUw7QUFBZTtBQUFBLDBCQUdQSCxtQkFBTyxDQUFDLGlEQUFELENBSEE7QUFBQSxjQUVQSSwyQkFGTyxhQUVQQSwyQkFGTzs7QUFJWHBCLGtCQUFRLENBQ0pJLHVFQUFtQixDQUFDSSxlQUFwQixDQUFvQ1ksMkJBQTJCLENBQUMsQ0FBRCxDQUEvRCxDQURJLENBQVI7QUFHQSxpQkFBT0EsMkJBQVA7QUFDSDs7QUFDRCxXQUFLLEtBQUw7QUFBWTtBQUFBLDBCQUdKSixtQkFBTyxDQUFDLGlEQUFELENBSEg7QUFBQSxjQUVKSyxtQkFGSSxhQUVKQSxtQkFGSTs7QUFJUnJCLGtCQUFRLENBQ0pJLHVFQUFtQixDQUFDSSxlQUFwQixDQUFvQ2EsbUJBQW1CLENBQUMsQ0FBRCxDQUF2RCxDQURJLENBQVI7QUFHQSxpQkFBT0EsbUJBQVA7QUFDSDs7QUFDRCxXQUFLLE9BQUw7QUFBYztBQUFBLDBCQUdOTCxtQkFBTyxDQUFDLGlEQUFELENBSEQ7QUFBQSxjQUVOTSw4QkFGTSxhQUVOQSw4QkFGTTs7QUFJVnRCLGtCQUFRLENBQ0pJLHVFQUFtQixDQUFDSSxlQUFwQixDQUFvQ2MsOEJBQThCLENBQUMsQ0FBRCxDQUFsRSxDQURJLENBQVI7QUFHQSxpQkFBT0EsOEJBQVA7QUFDSDs7QUFDRDtBQUNJLGVBQU8sRUFBUDtBQXhEUjtBQTBESCxHQTNEa0MsRUEyRGhDLENBQUM3QixpQkFBRCxDQTNEZ0MsQ0FBbkMsQ0FuQ29DLENBZ0dwQzs7QUFDQSxNQUFNOEIsT0FBTyxHQUFDUixxREFBTyxDQUFDLFlBQU07QUFDeEIsUUFBRyxDQUFDdEIsaUJBQUQsSUFBc0IsQ0FBQ0ksWUFBdkIsSUFBdUMsQ0FBQ0MsUUFBeEMsSUFBb0QsQ0FBQ0MsZUFBRCxLQUFxQixJQUE1RSxFQUFpRjtBQUM3RSxhQUFPLEtBQVA7QUFFSDs7QUFDRCxXQUFPLElBQVA7QUFFSCxHQVBvQixFQU9uQixDQUFDTixpQkFBRCxFQUFvQkksWUFBcEIsRUFBa0NDLFFBQWxDLEVBQTRDQyxlQUE1QyxDQVBtQixDQUFyQjtBQVNBLHNCQUNJLHFFQUFDLFNBQUQ7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQUssZUFBUyxFQUFDLHlDQUFmO0FBQUEsNkJBQ0kscUVBQUMsd0RBQUQ7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLGFBQUssRUFBRU4saUJBQWlCLElBQUkrQixTQUZoQztBQUdJLGdCQUFRLEVBQUUsQ0FBQ3RDLGdDQUhmO0FBSUksb0JBQVksRUFBQywwREFKakI7QUFLSSx1QkFBZSxFQUFFQSxnQ0FMckI7QUFNSSxlQUFPLEVBQUUsQ0FBQyxDQUFDTyxpQkFOZjtBQU9JLGFBQUssRUFBQyxpRUFQVjtBQVFJLGVBQU8sRUFBRXFCLHFCQVJiO0FBVUksZ0JBQVEsRUFBRVo7QUFWZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBaUJJO0FBQUssZUFBUyxFQUFDLHlDQUFmO0FBQUEsNkJBQ0kscUVBQUMsd0RBQUQ7QUFDQSxZQUFJLEVBQUMsVUFETDtBQUVBLGFBQUssRUFBRUwsWUFBWSxJQUFJLEVBRnZCO0FBR0EsZ0JBQVEsRUFBRSxDQUFDSixpQkFIWCxDQUlBO0FBSkE7QUFLQSxlQUFPLEVBQUUsQ0FBQyxDQUFDSSxZQUxYO0FBTUEsYUFBSyxFQUFDLGlFQU5OO0FBT0EsZUFBTyxFQUFFaUI7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCSixFQTRCS2pCLFlBQVksaUJBQ1Q7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSwrQkFDSSxxRUFBQywwREFBRDtBQUNJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDQyxRQURmO0FBRUksZUFBSyxFQUFDLDhHQUZWO0FBR0ksZUFBSyxFQUFFQSxRQUhYO0FBSUksaUJBQU8sRUFBRVgsb0JBSmI7QUFLSSxrQkFBUSxFQUFFc0I7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBVUk7QUFBSyxpQkFBUyxFQUFDLHdDQUFmO0FBQUEsK0JBQ0kscUVBQUMsMERBQUQ7QUFDSSxpQkFBTyxFQUFFVixlQUFlLEtBQUcsSUFEL0I7QUFFSSxlQUFLLEVBQUMsa0hBRlY7QUFHSSxlQUFLLEVBQUVBLGVBSFg7QUFJSSxrQkFBUSxFQUFFYSx1QkFKZDtBQUtJLGlCQUFPLEVBQUVyQjtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVko7QUFBQSxvQkE3QlIsZUFrREkscUVBQUMsMkRBQUQ7QUFDSSxhQUFPLEVBQUUsS0FEYjtBQUVJLGNBQVEsRUFBQyxHQUZiO0FBR0ksY0FBUSxFQUFDO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBESCxDQXBLRDs7R0FBTUMsb0I7VUFDd0JFLGtELEVBQ0xBLGtELEVBQ0pBLGtELEVBQ09BLGtELEVBRVBPLHVEOzs7TUFOZlQsb0I7QUFzS1NBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmcuODE1OWM1ZTQzMmNiMmM0ZGI3MDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUm9vbUFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvcmVnaXN0ZXJSb29tXCI7XHJcbmltcG9ydCB7bGFyZ2VCdWlsZGluZ1R5cGVMaXN0fSBmcm9tIFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSBcIi4uL2NvbW1vbi9SYWRpb0dyb3VwXCI7XHJcbmltcG9ydCBSZWdpc3RlclJvb21Gb290ZXIgZnJvbSBcIi4vUmVnaXN0ZXJSb29tRm9vdGVyXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1idWlsZGluZy1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpbyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20taXMtc2V0dXAtZm9yLWd1ZXN0LXJhZGlvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuLy8gKiDshKDtg50g67aI6rCA64ql7ZWcIO2BvCDrspTsnIQg6rG066y8IOycoO2YlVxyXG5jb25zdCBkaXNhYmxlZGxhcmdlQnVpbGRpbmdUeXBlT3B0aW9ucyA9IFtcIu2VmOuCmOulvCDshKDtg53tlbTso7zshLjsmpQuXCJdO1xyXG5cclxuLy8gKiDsiJnshowg7Jyg7ZiVIHJhZGlvIG9wdGlvbnNcclxuY29uc3Qgcm9vbVR5cGVSYWRpb09wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6XCLsp5Eg7KCE7LK0XCIsXHJcbiAgICAgICAgdmFsdWU6XCJlbnRpcmVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIuqyjOyKpO2KuOqwgCDsiJnshowg7KCE7LK066W8IOuLpOuluCDsgqzrnozqs7wg6rO17Jyg7ZWY7KeAIOyViuqzoCDri6jrj4XsnLzroZwg7J207Jqp7ZWp64uI64ukLiDsnbzrsJjsoIHsnLzroZwg7Lmo7IukLCDsmpXsi6QsIOu2gOyXjOydtCDtj6ztlajrkKnri4jri6QuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi6rCc7J247IukXCIsXHJcbiAgICAgICAgdmFsdWU6XCJwcml2YXRlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCLqsozsiqTtirjsl5Dqsowg6rCc7J24IOy5qOyLpOydtCDsoJzqs7XrkKnri4jri6QuIOy5qOyLpCDsnbTsmbjsnZgg6rO16rCE7J2AIOqzteyaqeydvCDsiJgg7J6I7Iq164uI64ukLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuuLpOyduOyLpFwiLFxyXG4gICAgICAgIHZhbHVlOlwicHVibGljXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCLqsozsiqTtirjripQg6rCc7J246rO16rCEIOyXhuydtCwg64uk66W4IOyCrOuejOqzvCDtlajqu5gg7JOw64qUIOy5qOyLpOydtOuCmCDqs7Xsmqnqs7XqsITsl5DshJwg7IiZ67CV7ZWp64uI64ukLlwiLFxyXG4gICAgfSxcclxuXTtcclxuLy8gKiDqsozsiqTtirjrp4wg7IKs7Jqp7ZWY64+E66GdIOunjOuTpOyWtOynhCDsiJnshozsnbjsp4Ag652865SU7JikIG9wdGlvbnNcclxuY29uc3QgaXNTZXRVcEZvckd1ZXN0T3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBsYWJlbDpcIuyYiCwg6rKM7Iqk7Yq47Jqp7Jy866GcIOuUsOuhnCDrp4jroKjrkJwg7IiZ7IaM7J6F64uI64ukLlwiLFxyXG4gICAgICAgIHZhbHVlOnRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOlwi7JWE64uI7JqULCDsoJwg6rCc7J24IOusvOqxtOydtCDsiJnshozsl5Ag7J6I7Iq164uI64ukLlwiLFxyXG4gICAgICAgIHZhbHVlOmZhbHNlLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUJ1aWxkaW5nOlJlYWN0LkZDPSgpPT57XHJcbiAgICBjb25zdCBsYXJnZUJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmxhcmdlQnVpbGRpbmdUeXBlKTtcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmJ1aWxkaW5nVHlwZSk7XHJcbiAgICBjb25zdCByb29tVHlwZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLnJvb21UeXBlKTtcclxuICAgIGNvbnN0IGlzU2V0VXBGb3JHdWVzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tLmlzU2V0VXBGb3JHdWVzdCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyAqIO2BsCDrspTsnIQg6rG066y8IOycoO2YlSDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZUxhcmdlQnVpbGRpbmdUeXBlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldExhcmdlQnVpbGRpbmdUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gKiDsg4HshLgg6rG066y8IOycoO2YlSDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQnVpbGRpbmdUeXBlPShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vICog7IiZ7IaMIOycoO2YlSDrs4Dqsr3si5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlUm9vbVR5cGUgPSAoZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQ9ZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldFJvb21UeXBlKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgYXMgXCJlbnRpcmVcIiB8IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gKiDqsozsiqTtirjsmqkg7IiZ7IaM7J247KeAIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0PSh2YWx1ZTphbnkpPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRJc1NldFVwRm9yR3Vlc3QodmFsdWUpKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vICog7ISg7YOd65CcIOqxtOusvCDsnKDtmJUgb3B0aW9uc1xyXG4gICAgY29uc3QgZGV0YWlsQnVpbGRpbmdPcHRpb25zPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBzd2l0Y2ggKGxhcmdlQnVpbGRpbmdUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCLslYTtjIztirhcIjoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgICAgICAgICBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSA9IHJlcXVpcmUoXCIuLi8uLi9saWIvc3RhdGljRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0QnVpbGRpbmdUeXBlKGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwYXJ0bWVudEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuyjvO2DnVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91c3RCdWlsZGluZ1R5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoaG91c3RCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3VzdEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIuuzhOyxhFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCLrj4XtirntlZwg7IiZ7IaMXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3RcclxuICAgICAgICAgICAgICAgIH0gPSByZXF1aXJlKFwiLi4vLi4vbGliL3N0YXRpY0RhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclJvb21BY3Rpb25zLnNldEJ1aWxkaW5nVHlwZSh1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3RbMF0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiQiZCXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBibmJCdWlsZGluZ1R5cGVMaXN0XHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm5iQnVpbGRpbmdUeXBlTGlzdFswXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm5iQnVpbGRpbmdUeXBlTGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwi67aA7Yuw7YGs7Zi47YWUXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3QsXHJcbiAgICAgICAgICAgICAgICB9ID0gcmVxdWlyZShcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRCdWlsZGluZ1R5cGUoYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0WzBdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbGFyZ2VCdWlsZGluZ1R5cGVdKTtcclxuXHJcbiAgICAvLyAqIOuqqOuToCDqsJLsnbQg7J6I64qU7KeAIO2ZleyduO2VmOq4sFxyXG4gICAgY29uc3QgaXNWYWxpZD11c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBpZighbGFyZ2VCdWlsZGluZ1R5cGUgfHwgIWJ1aWxkaW5nVHlwZSB8fCAhcm9vbVR5cGUgfHwgIWlzU2V0VXBGb3JHdWVzdCA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0sW2xhcmdlQnVpbGRpbmdUeXBlLCBidWlsZGluZ1R5cGUsIHJvb21UeXBlLCBpc1NldFVwRm9yR3Vlc3RdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMj7rk7HroZ3tlaAg7IiZ7IaMIOyiheulmOuKlCDrrLTsl4fsnbjqsIDsmpQ/PC9oMj5cclxuICAgICAgICAgICAgPGgzPjHri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFyZ2VCdWlsZGluZ1R5cGUgfHwgdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZGlzYWJsZWRsYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwi7ZWY64KY66W8IOyEre2Dne2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkT3B0aW9ucz17ZGlzYWJsZWRsYXJnZUJ1aWxkaW5nVHlwZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17ISFsYXJnZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyasOyEoCDrspTsnITrpbwg7KKB7ZiA67O86rmM7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGV0YWlsQnVpbGRpbmdPcHRpb25zfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VMYXJnZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tYnVpbGRpbmctc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2J1aWxkaW5nVHlwZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXJnZUJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgIC8vb25DaGFuZ2U9eyhlKSA9PiBzZXRCdWlsZGluZ1R5cGVEaXNwYXRjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkPXshIWJ1aWxkaW5nVHlwZX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi6rG066y8IOycoO2YleydhCDshKDtg53tlZjshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RldGFpbEJ1aWxkaW5nT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7YnVpbGRpbmdUeXBlICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLXJvb20tdHlwZS1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17ISFyb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rKM7Iqk7Yq46rCAIOusteqyjCDrkKAg7IiZ7IaMIOycoO2YleydhCDqs6jrnbzso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb29tVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Jvb21UeXBlUmFkaW9PcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUm9vbVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWlzLXNldHVwLWZvci1ndWVzdC1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17aXNTZXRVcEZvckd1ZXN0IT09bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6rKM7Iqk7Yq466eMIOyCrOyaqe2VmOuPhOuhnSDrp4zrk6TslrTsp4Qg7IiZ7IaM7J246rCA7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXNTZXRVcEZvckd1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSXNTZXRVcEZvckd1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17aXNTZXRVcEZvckd1ZXN0T3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8UmVnaXN0ZXJSb29tRm9vdGVyXHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHByZXZIcmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICBuZXh0SHJlZj1cIi9yb29tL3JlZ2lzdGVyL2JlZHJvb21zXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21CdWlsZGluZzsiXSwic291cmNlUm9vdCI6IiJ9