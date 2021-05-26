webpackHotUpdate_N_E("pages/room/register/checklist",{

/***/ "./components/room/register/RegisterRoomChecklist.tsx":
/*!************************************************************!*\
  !*** ./components/room/register/RegisterRoomChecklist.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var _RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegisterRoomCheckStep */ "./components/room/register/RegisterRoomCheckStep.tsx");
/* harmony import */ var _RegisterRoomSubmitFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RegisterRoomSubmitFooter */ "./components/room/register/RegisterRoomSubmitFooter.tsx");
/* harmony import */ var _RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RegisterRoomFooter */ "./components/room/register/RegisterRoomFooter.tsx");


var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomChecklist.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "RegisterRoomChecklist__Container",
  componentId: "sc-1a64op6-0"
})(["padding:62px 30px 100px;min-height:100vh;.register-room-checklist-info{margin-bottom:39px;}ul{display:inline-flex;flex-direction:column;}"]);
_c = Container;

var RegisterRoomChecklist = function RegisterRoomChecklist() {
  _s();

  var registerRoom = Object(_store__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.registerRoom;
  }); // * (1단계) 숙소 유형이 활성화 되었는지

  var isBuildingTypeActived = function isBuildingTypeActived() {
    var largeBuildingType = registerRoom.largeBuildingType,
        buildingType = registerRoom.buildingType,
        roomType = registerRoom.roomType,
        isSetUpForGuest = registerRoom.isSetUpForGuest;

    if (!largeBuildingType || !buildingType || !roomType || isSetUpForGuest === null) {
      return false;
    }

    return true;
  }; // * 숙소 종류가 활성화 되었는지


  var isRoomTypeActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var maximumGuestCount = registerRoom.maximumGuestCount,
        bedroomCount = registerRoom.bedroomCount,
        bedCount = registerRoom.bedCount,
        bedList = registerRoom.bedList,
        publicBedList = registerRoom.publicBedList;

    if (!isBuildingTypeActived || !maximumGuestCount || !bedroomCount || !bedCount) {
      return false;
    }

    return true;
  }, []); // * 욕실 항목이 활성화 되었는지

  var isBathroomActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var bathroomCount = registerRoom.bathroomCount,
        bathroomType = registerRoom.bathroomType;

    if (!isRoomTypeActived || !bathroomCount || !bathroomType === null) {
      return false;
    }

    return true;
  }, []); // * 위치 항목이 활성화 되었는지

  var isLocationActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var latitude = registerRoom.latitude,
        longitude = registerRoom.longitude,
        country = registerRoom.country,
        city = registerRoom.city,
        district = registerRoom.district,
        streetAddress = registerRoom.streetAddress,
        detailAddress = registerRoom.detailAddress,
        postcode = registerRoom.postcode;

    if (!isBathroomActived || !latitude || !longitude || !country || !city || !district || !streetAddress || !postcode) {
      return false;
    }

    return true;
  }, []); // * 편의시설이 활성화 되었는지

  var isAmentitiesActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var amentities = registerRoom.amentities;

    if (amentities.length === 0) {}

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(amentities)) {}

    if (!isLocationActived) {
      return false;
    }

    return true;
  }, []); // * 공용공간이 활성화 되었는지

  var isConveniencesActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (!isAmentitiesActived) {
      return false;
    }

    return true;
  }, []); // * 사진항목이 다 채워져 있는지

  var isPhotoActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var photos = registerRoom.photos;

    if (!isConveniencesActived || Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(photos)) {
      return false;
    }

    return true;
  }, []); // * 숙소설명이 다 채워져 있는지

  var isDescriptionActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var description = registerRoom.description;

    if (!isPhotoActived || !description) {
      return false;
    }

    return true;
  }, []); // * 숙소 제목이 다 채워져 있는지

  var isTitleActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var title = registerRoom.title;

    if (!isDescriptionActived || !title) {
      return false;
    }

    return true;
  }, []); // * 숙소 금액이 채워져 있는지

  var isPriceActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var price = registerRoom.price;

    if (!isTitleActived || !price) {
      return false;
    }

    return true;
  }, []); // * 예약 날짜가 채워져 있는지

  var isDateActived = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var startDate = registerRoom.startDate,
        endDate = registerRoom.endDate;

    if (!isPriceActived || !startDate || !endDate) {
      return false;
    }

    return true;
  }, []); // * 진행중인 단계

  var stepInProgress = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (!isBuildingTypeActived) {
      return "building";
    }

    if (!isRoomTypeActived) {
      return "bedrooms";
    }

    if (!isBathroomActived) {
      return "bathroom";
    }

    if (!isLocationActived) {
      return "location";
    }

    if (!isAmentitiesActived) {
      return "amentities";
    }

    if (!isConveniencesActived) {
      return "conveniences";
    }

    if (!isPhotoActived) {
      return "photo";
    }

    if (!isDescriptionActived) {
      return "description";
    }

    if (!isTitleActived) {
      return "title";
    }

    if (!isPriceActived) {
      return "price";
    }

    if (!isDateActived) {
      return "date";
    }

    return "";
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "register-room-checklist-info",
      children: "\uC219\uC18C\uB97C \uB4F1\uB85D\uD55C \uD6C4 \uC5B8\uC81C\uB4E0 \uC219\uC18C\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC219\uC18C\uC720\uD615",
        href: "/room/register/building",
        disabled: !isBuildingTypeActived,
        inProgress: stepInProgress === "building"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC219\uC18C\uC885\uB958",
        href: "/room/register/bedrooms",
        disabled: !isRoomTypeActived,
        inProgress: stepInProgress === "bedrooms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC695\uC2E4",
        href: "/room/register/bathrooms",
        disabled: !isBathroomActived,
        inProgress: stepInProgress === "bathroom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC704\uCE58",
        href: "/room/register/location",
        disabled: !isLocationActived,
        inProgress: stepInProgress === "location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uD3B8\uC758\uC2DC\uC124",
        href: "/room/register/amentities",
        disabled: !isAmentitiesActived,
        inProgress: stepInProgress === "amentities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uACF5\uC6A9\uACF5\uAC04",
        href: "/room/register/conveniences",
        disabled: !isConveniencesActived,
        inProgress: stepInProgress === "conveniences"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC0AC\uC9C4",
        href: "/room/register/photo",
        disabled: !isPhotoActived,
        inProgress: stepInProgress === "photo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC124\uBA85",
        href: "/room/register/description",
        disabled: !isDescriptionActived,
        inProgress: stepInProgress === "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC81C\uBAA9",
        href: "/room/register/title",
        disabled: !isTitleActived,
        inProgress: stepInProgress === "title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC694\uAE08",
        href: "/room/register/price",
        disabled: !isPriceActived,
        inProgress: stepInProgress === "price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC608\uC57D\uB0A0\uC9DC",
        href: "/room/register/date",
        disabled: !isDateActived,
        inProgress: stepInProgress === "date"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }, _this), isDateActived ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomSubmitFooter__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 17
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_7__["default"], {
      prevHref: "/room/register/date",
      nextHref: "/room/register/".concat(stepInProgress)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 198,
    columnNumber: 9
  }, _this);
};

_s(RegisterRoomChecklist, "Ie69gl23xXlR/ECaagln+ztNGoE=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c2 = RegisterRoomChecklist;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomChecklist); // 530 page

var _c, _c2;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "RegisterRoomChecklist");

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

/***/ }),

/***/ "./components/room/register/RegisterRoomSubmitFooter.tsx":
/*!***************************************************************!*\
  !*** ./components/room/register/RegisterRoomSubmitFooter.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer.withConfig({
  displayName: "RegisterRoomSubmitFooter__Container",
  componentId: "sc-4tw0do-0"
})(["position:fixed;bottom:0;display:flex;justify-content:space-between;align-items:center;width:548px;height:82px;padding:14px 30px 20px;background-color:white;z-index:10;border-top:1px solid ", ";.register-room-footer-back{display:flex;align-items:center;color:", ";cursor:pointer;svg{margin-right:8px;}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_1__["default"].gray_dd, _styles_palette__WEBPACK_IMPORTED_MODULE_1__["default"].dark_cyan);

var RegisterRoomSubmitFooter = function RegisterRoomSubmitFooter() {
  return null;
};

_c = RegisterRoomSubmitFooter;
/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomSubmitFooter);

var _c;

$RefreshReg$(_c, "RegisterRoomSubmitFooter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUNoZWNrbGlzdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcm9vbS9yZWdpc3Rlci9SZWdpc3RlclJvb21TdWJtaXRGb290ZXIudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlJlZ2lzdGVyUm9vbUNoZWNrbGlzdCIsInJlZ2lzdGVyUm9vbSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJpc0J1aWxkaW5nVHlwZUFjdGl2ZWQiLCJsYXJnZUJ1aWxkaW5nVHlwZSIsImJ1aWxkaW5nVHlwZSIsInJvb21UeXBlIiwiaXNTZXRVcEZvckd1ZXN0IiwiaXNSb29tVHlwZUFjdGl2ZWQiLCJ1c2VNZW1vIiwibWF4aW11bUd1ZXN0Q291bnQiLCJiZWRyb29tQ291bnQiLCJiZWRDb3VudCIsImJlZExpc3QiLCJwdWJsaWNCZWRMaXN0IiwiaXNCYXRocm9vbUFjdGl2ZWQiLCJiYXRocm9vbUNvdW50IiwiYmF0aHJvb21UeXBlIiwiaXNMb2NhdGlvbkFjdGl2ZWQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvdW50cnkiLCJjaXR5IiwiZGlzdHJpY3QiLCJzdHJlZXRBZGRyZXNzIiwiZGV0YWlsQWRkcmVzcyIsInBvc3Rjb2RlIiwiaXNBbWVudGl0aWVzQWN0aXZlZCIsImFtZW50aXRpZXMiLCJsZW5ndGgiLCJpc0VtcHR5IiwiaXNDb252ZW5pZW5jZXNBY3RpdmVkIiwiaXNQaG90b0FjdGl2ZWQiLCJwaG90b3MiLCJpc0Rlc2NyaXB0aW9uQWN0aXZlZCIsImRlc2NyaXB0aW9uIiwiaXNUaXRsZUFjdGl2ZWQiLCJ0aXRsZSIsImlzUHJpY2VBY3RpdmVkIiwicHJpY2UiLCJpc0RhdGVBY3RpdmVkIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN0ZXBJblByb2dyZXNzIiwiZm9vdGVyIiwicGFsZXR0ZSIsImdyYXlfZGQiLCJkYXJr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Ozs7Ozs7Ozs7Ozs7O0FDM1JBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFHQSxJQUFNSCxTQUFTLEdBQUdDLHlEQUFNLENBQUMrQyxNQUFWO0FBQUE7QUFBQTtBQUFBLHNUQVdhQyx1REFBTyxDQUFDQyxPQVhyQixFQWdCRUQsdURBQU8sQ0FBQ0UsU0FoQlYsQ0FBZjs7QUF3QkEsSUFBTUMsd0JBQWlDLEdBQUMsU0FBbENBLHdCQUFrQyxHQUFJO0FBQ3hDLFNBQU8sSUFBUDtBQUNILENBRkQ7O0tBQU1BLHdCO0FBSVNBLHVGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvY2hlY2tsaXN0LmEyYjBkYmIyNzIxZTQyNTU4OGExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJSb29tQ2hlY2tTdGVwIGZyb20gXCIuL1JlZ2lzdGVyUm9vbUNoZWNrU3RlcFwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJSb29tU3VibWl0Rm9vdGVyIGZyb20gXCIuL1JlZ2lzdGVyUm9vbVN1Ym1pdEZvb3RlclwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJSb29tRm9vdGVyIGZyb20gXCIuL1JlZ2lzdGVyUm9vbUZvb3RlclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDYycHggMzBweCAxMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgLnJlZ2lzdGVyLXJvb20tY2hlY2tsaXN0LWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM5cHg7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBSZWdpc3RlclJvb21DaGVja2xpc3Q6IFJlYWN0LkZDPSgpPT57XHJcbiAgICBjb25zdCByZWdpc3RlclJvb20gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZ2lzdGVyUm9vbSk7XHJcblxyXG4gICAgLy8gKiAoMeuLqOqzhCkg7IiZ7IaMIOycoO2YleydtCDtmZzshLHtmZQg65CY7JeI64qU7KeAXHJcbiAgICBjb25zdCBpc0J1aWxkaW5nVHlwZUFjdGl2ZWQ9KCk9PntcclxuICAgICAgICBjb25zdHtcclxuICAgICAgICAgICAgbGFyZ2VCdWlsZGluZ1R5cGUsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nVHlwZSxcclxuICAgICAgICAgICAgcm9vbVR5cGUsXHJcbiAgICAgICAgICAgIGlzU2V0VXBGb3JHdWVzdCxcclxuICAgICAgICB9ID0gcmVnaXN0ZXJSb29tO1xyXG5cclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgIWxhcmdlQnVpbGRpbmdUeXBlIHx8IFxyXG4gICAgICAgICAgICAhYnVpbGRpbmdUeXBlIHx8IFxyXG4gICAgICAgICAgICAhcm9vbVR5cGUgfHwgXHJcbiAgICAgICAgICAgIGlzU2V0VXBGb3JHdWVzdCA9PT0gbnVsbFxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAqIOyImeyGjCDsooXrpZjqsIAg7Zmc7ISx7ZmUIOuQmOyXiOuKlOyngFxyXG4gICAgY29uc3QgaXNSb29tVHlwZUFjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbWF4aW11bUd1ZXN0Q291bnQsXHJcbiAgICAgICAgICAgIGJlZHJvb21Db3VudCxcclxuICAgICAgICAgICAgYmVkQ291bnQsXHJcbiAgICAgICAgICAgIGJlZExpc3QsXHJcbiAgICAgICAgICAgIHB1YmxpY0JlZExpc3QsXHJcbiAgICAgICAgfSA9IHJlZ2lzdGVyUm9vbTtcclxuXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICFpc0J1aWxkaW5nVHlwZUFjdGl2ZWQgfHxcclxuICAgICAgICAgICAgIW1heGltdW1HdWVzdENvdW50IHx8IFxyXG4gICAgICAgICAgICAhYmVkcm9vbUNvdW50IHx8IFxyXG4gICAgICAgICAgICAhYmVkQ291bnRcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIOyaleyLpCDtla3rqqnsnbQg7Zmc7ISx7ZmUIOuQmOyXiOuKlOyngFxyXG4gICAgY29uc3QgaXNCYXRocm9vbUFjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYmF0aHJvb21Db3VudCxcclxuICAgICAgICAgICAgYmF0aHJvb21UeXBlLCAgICAgICAgICAgIFxyXG4gICAgICAgIH0gPSByZWdpc3RlclJvb207XHJcblxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICAhaXNSb29tVHlwZUFjdGl2ZWQgfHxcclxuICAgICAgICAgICAgIWJhdGhyb29tQ291bnQgfHwgXHJcbiAgICAgICAgICAgICFiYXRocm9vbVR5cGUgPT09IG51bGxcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIOychOy5mCDtla3rqqnsnbQg7Zmc7ISx7ZmUIOuQmOyXiOuKlOyngFxyXG4gICAgY29uc3QgaXNMb2NhdGlvbkFjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICAgICAgY291bnRyeSxcclxuICAgICAgICAgICAgY2l0eSxcclxuICAgICAgICAgICAgZGlzdHJpY3QsXHJcbiAgICAgICAgICAgIHN0cmVldEFkZHJlc3MsXHJcbiAgICAgICAgICAgIGRldGFpbEFkZHJlc3MsXHJcbiAgICAgICAgICAgIHBvc3Rjb2RlLFxyXG4gICAgICAgIH0gPSByZWdpc3RlclJvb207XHJcblxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICAhaXNCYXRocm9vbUFjdGl2ZWQgfHxcclxuICAgICAgICAgICAgIWxhdGl0dWRlIHx8IFxyXG4gICAgICAgICAgICAhbG9uZ2l0dWRlIHx8IFxyXG4gICAgICAgICAgICAhY291bnRyeSB8fCBcclxuICAgICAgICAgICAgIWNpdHkgfHwgXHJcbiAgICAgICAgICAgICFkaXN0cmljdCB8fCBcclxuICAgICAgICAgICAgIXN0cmVldEFkZHJlc3MgfHxcclxuICAgICAgICAgICAgIXBvc3Rjb2RlXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDtjrjsnZjsi5zshKTsnbQg7Zmc7ISx7ZmUIOuQmOyXiOuKlOyngFxyXG4gICAgY29uc3QgaXNBbWVudGl0aWVzQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgeyBhbWVudGl0aWVzIH0gPSByZWdpc3RlclJvb207XHJcbiAgICAgICAgaWYoYW1lbnRpdGllcy5sZW5ndGg9PT0wKXt9XHJcbiAgICAgICAgaWYoaXNFbXB0eShhbWVudGl0aWVzKSl7fVxyXG5cclxuICAgICAgICBpZighaXNMb2NhdGlvbkFjdGl2ZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIOqzteyaqeqzteqwhOydtCDtmZzshLHtmZQg65CY7JeI64qU7KeAXHJcbiAgICBjb25zdCBpc0NvbnZlbmllbmNlc0FjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGlmKCFpc0FtZW50aXRpZXNBY3RpdmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIOyCrOynhO2VreuqqeydtCDri6Qg7LGE7JuM7KC4IOyeiOuKlOyngFxyXG4gICAgY29uc3QgaXNQaG90b0FjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHsgcGhvdG9zIH0gPSByZWdpc3RlclJvb207XHJcbiAgICAgICAgaWYoIWlzQ29udmVuaWVuY2VzQWN0aXZlZCB8fCBpc0VtcHR5KHBob3Rvcykpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog7IiZ7IaM7ISk66qF7J20IOuLpCDssYTsm4zsoLgg7J6I64qU7KeAXHJcbiAgICBjb25zdCBpc0Rlc2NyaXB0aW9uQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gcmVnaXN0ZXJSb29tO1xyXG4gICAgICAgIGlmKCFpc1Bob3RvQWN0aXZlZCB8fCAhZGVzY3JpcHRpb24pe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog7IiZ7IaMIOygnOuqqeydtCDri6Qg7LGE7JuM7KC4IOyeiOuKlOyngFxyXG4gICAgY29uc3QgaXNUaXRsZUFjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUgfSA9IHJlZ2lzdGVyUm9vbTtcclxuICAgICAgICBpZighaXNEZXNjcmlwdGlvbkFjdGl2ZWQgfHwgIXRpdGxlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIOyImeyGjCDquIjslaHsnbQg7LGE7JuM7KC4IOyeiOuKlOyngFxyXG4gICAgY29uc3QgaXNQcmljZUFjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHsgcHJpY2UgfSA9IHJlZ2lzdGVyUm9vbTtcclxuICAgICAgICBpZighaXNUaXRsZUFjdGl2ZWQgfHwgIXByaWNlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIOyYiOyVvSDrgqDsp5zqsIAg7LGE7JuM7KC4IOyeiOuKlOyngFxyXG4gICAgY29uc3QgaXNEYXRlQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHJlZ2lzdGVyUm9vbTtcclxuICAgICAgICBpZighaXNQcmljZUFjdGl2ZWQgfHwgIXN0YXJ0RGF0ZSB8fCAhZW5kRGF0ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDsp4TtlonspJHsnbgg64uo6rOEXHJcbiAgICBjb25zdCBzdGVwSW5Qcm9ncmVzcz11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgaWYoIWlzQnVpbGRpbmdUeXBlQWN0aXZlZCl7cmV0dXJuIFwiYnVpbGRpbmdcIjt9XHJcbiAgICAgICAgaWYoIWlzUm9vbVR5cGVBY3RpdmVkKXtyZXR1cm4gXCJiZWRyb29tc1wiO31cclxuICAgICAgICBpZighaXNCYXRocm9vbUFjdGl2ZWQpe3JldHVybiBcImJhdGhyb29tXCI7fVxyXG4gICAgICAgIGlmKCFpc0xvY2F0aW9uQWN0aXZlZCl7cmV0dXJuIFwibG9jYXRpb25cIjt9XHJcbiAgICAgICAgaWYoIWlzQW1lbnRpdGllc0FjdGl2ZWQpe3JldHVybiBcImFtZW50aXRpZXNcIjt9XHJcbiAgICAgICAgaWYoIWlzQ29udmVuaWVuY2VzQWN0aXZlZCl7cmV0dXJuIFwiY29udmVuaWVuY2VzXCI7fVxyXG4gICAgICAgIGlmKCFpc1Bob3RvQWN0aXZlZCl7cmV0dXJuIFwicGhvdG9cIjt9XHJcbiAgICAgICAgaWYoIWlzRGVzY3JpcHRpb25BY3RpdmVkKXtyZXR1cm4gXCJkZXNjcmlwdGlvblwiO31cclxuICAgICAgICBpZighaXNUaXRsZUFjdGl2ZWQpe3JldHVybiBcInRpdGxlXCI7fVxyXG4gICAgICAgIGlmKCFpc1ByaWNlQWN0aXZlZCl7cmV0dXJuIFwicHJpY2VcIjt9XHJcbiAgICAgICAgaWYoIWlzRGF0ZUFjdGl2ZWQpe3JldHVybiBcImRhdGVcIjt9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWNoZWNrbGlzdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICDsiJnshozrpbwg65Ox66Gd7ZWcIO2bhCDslrjsoJzrk6Ag7IiZ7IaM66W8IOyImOygle2VoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuyImeyGjOycoO2YlVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL2J1aWxkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQnVpbGRpbmdUeXBlQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJidWlsZGluZ1wifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuyImeyGjOyiheulmFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL2JlZHJvb21zXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzUm9vbVR5cGVBY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcImJlZHJvb21zXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7JqV7IukXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvYmF0aHJvb21zXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQmF0aHJvb21BY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcImJhdGhyb29tXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7JyE7LmYXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvbG9jYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNMb2NhdGlvbkFjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwibG9jYXRpb25cIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLtjrjsnZjsi5zshKRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9hbWVudGl0aWVzXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQW1lbnRpdGllc0FjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwiYW1lbnRpdGllc1wifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuqzteyaqeqzteqwhFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL2NvbnZlbmllbmNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0NvbnZlbmllbmNlc0FjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwiY29udmVuaWVuY2VzXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7IKs7KeEXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvcGhvdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNQaG90b0FjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwicGhvdG9cIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLshKTrqoVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0Rlc2NyaXB0aW9uQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJkZXNjcmlwdGlvblwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuygnOuqqVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL3RpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzVGl0bGVBY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcInRpdGxlXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7JqU6riIXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNQcmljZUFjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwicHJpY2VcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLsmIjslb3rgqDsp5xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRGF0ZUFjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwiZGF0ZVwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAge2lzRGF0ZUFjdGl2ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tU3VibWl0Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tRm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkhyZWY9XCIvcm9vbS9yZWdpc3Rlci9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBuZXh0SHJlZj17YC9yb29tL3JlZ2lzdGVyLyR7c3RlcEluUHJvZ3Jlc3N9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tQ2hlY2tsaXN0O1xyXG5cclxuXHJcbi8vIDUzMCBwYWdlIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCYWNrQXJyb3dJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9yZWdpc3Rlci9yZWdpc3Rlcl9yb29tX2Zvb3Rlcl9iYWNrX2Fycm93LnN2Z1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tbW9uL0J1dHRvblwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDU0OHB4O1xyXG4gICAgaGVpZ2h0OiA4MnB4O1xyXG4gICAgcGFkZGluZzogMTRweCAzMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2RkfTtcclxuXHJcbiAgICAucmVnaXN0ZXItcm9vbS1mb290ZXItYmFjayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tU3VibWl0Rm9vdGVyOlJlYWN0LkZDPSgpPT57XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbVN1Ym1pdEZvb3RlcjsiXSwic291cmNlUm9vdCI6IiJ9