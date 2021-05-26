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
      lineNumber: 197,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC219\uC18C\uC720\uD615",
        href: "/room/register/building",
        disabled: !isBuildingTypeActived,
        inProgress: stepInProgress === "building"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC219\uC18C\uC885\uB958",
        href: "/room/register/bedrooms",
        disabled: !isRoomTypeActived,
        inProgress: stepInProgress === "bedrooms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC695\uC2E4",
        href: "/room/register/bathrooms",
        disabled: !isBathroomActived,
        inProgress: stepInProgress === "bathroom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC704\uCE58",
        href: "/room/register/location",
        disabled: !isLocationActived,
        inProgress: stepInProgress === "location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uD3B8\uC758\uC2DC\uC124",
        href: "/room/register/amentities",
        disabled: !isAmentitiesActived,
        inProgress: stepInProgress === "amentities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uACF5\uC6A9\uACF5\uAC04",
        href: "/room/register/conveniences",
        disabled: !isConveniencesActived,
        inProgress: stepInProgress === "conveniences"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC0AC\uC9C4",
        href: "/room/register/photo",
        disabled: !isPhotoActived,
        inProgress: stepInProgress === "photo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC124\uBA85",
        href: "/room/register/description",
        disabled: !isDescriptionActived,
        inProgress: stepInProgress === "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC81C\uBAA9",
        href: "/room/register/title",
        disabled: !isTitleActived,
        inProgress: stepInProgress === "title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC694\uAE08",
        href: "/room/register/price",
        disabled: !isPriceActived,
        inProgress: stepInProgress === "price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC608\uC57D\uB0A0\uC9DC",
        href: "/room/register/date",
        disabled: !isDateActived,
        inProgress: stepInProgress === "date"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RegisterRoomFooter, {
      prevHref: "/room/register/price",
      nextHref: "/room/register/checklist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 196,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUNoZWNrbGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiUmVnaXN0ZXJSb29tQ2hlY2tsaXN0IiwicmVnaXN0ZXJSb29tIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImlzQnVpbGRpbmdUeXBlQWN0aXZlZCIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJpc1Jvb21UeXBlQWN0aXZlZCIsInVzZU1lbW8iLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJpc0JhdGhyb29tQWN0aXZlZCIsImJhdGhyb29tQ291bnQiLCJiYXRocm9vbVR5cGUiLCJpc0xvY2F0aW9uQWN0aXZlZCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY291bnRyeSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJpc0FtZW50aXRpZXNBY3RpdmVkIiwiYW1lbnRpdGllcyIsImxlbmd0aCIsImlzRW1wdHkiLCJpc0NvbnZlbmllbmNlc0FjdGl2ZWQiLCJpc1Bob3RvQWN0aXZlZCIsInBob3RvcyIsImlzRGVzY3JpcHRpb25BY3RpdmVkIiwiZGVzY3JpcHRpb24iLCJpc1RpdGxlQWN0aXZlZCIsInRpdGxlIiwiaXNQcmljZUFjdGl2ZWQiLCJwcmljZSIsImlzRGF0ZUFjdGl2ZWQiLCJzdGFydERhdGUiLCJlbmREYXRlIiwic3RlcEluUHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFB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WUFBSSxFQUFDLGNBRFQ7QUFFSSxZQUFJLEVBQUMsc0JBRlQ7QUFHSSxnQkFBUSxFQUFFLENBQUNQLGNBSGY7QUFJSSxrQkFBVSxFQUFFTyxjQUFjLEtBQUs7QUFKbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpESixlQXVESSxxRUFBQyw4REFBRDtBQUNJLFlBQUksRUFBQyxjQURUO0FBRUksWUFBSSxFQUFDLHNCQUZUO0FBR0ksZ0JBQVEsRUFBRSxDQUFDTCxjQUhmO0FBSUksa0JBQVUsRUFBRUssY0FBYyxLQUFLO0FBSm5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2REosZUE2REkscUVBQUMsOERBQUQ7QUFDSSxZQUFJLEVBQUMsMEJBRFQ7QUFFSSxZQUFJLEVBQUMscUJBRlQ7QUFHSSxnQkFBUSxFQUFFLENBQUNILGFBSGY7QUFJSSxrQkFBVSxFQUFFRyxjQUFjLEtBQUs7QUFKbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQXlFSSxxRUFBQyxrQkFBRDtBQUNJLGNBQVEsRUFBQyxzQkFEYjtBQUVJLGNBQVEsRUFBQztBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnRkgsQ0EvUEQ7O0dBQU01QyxxQjtVQUNtQkUsa0Q7OztNQURuQkYscUI7QUFpUVNBLG9GQUFmLEUsQ0FHQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2NoZWNrbGlzdC43MzliNTY1OGE0ZmU5ZjUyNjdjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBmcm9tIFwiLi9SZWdpc3RlclJvb21DaGVja1N0ZXBcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA2MnB4IDMwcHggMTAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIC5yZWdpc3Rlci1yb29tLWNoZWNrbGlzdC1pbmZvIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzOXB4O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tQ2hlY2tsaXN0OiBSZWFjdC5GQz0oKT0+e1xyXG4gICAgY29uc3QgcmVnaXN0ZXJSb29tID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWdpc3RlclJvb20pO1xyXG5cclxuICAgIC8vICogKDHri6jqs4QpIOyImeyGjCDsnKDtmJXsnbQg7Zmc7ISx7ZmUIOuQmOyXiOuKlOyngFxyXG4gICAgY29uc3QgaXNCdWlsZGluZ1R5cGVBY3RpdmVkPSgpPT57XHJcbiAgICAgICAgY29uc3R7XHJcbiAgICAgICAgICAgIGxhcmdlQnVpbGRpbmdUeXBlLFxyXG4gICAgICAgICAgICBidWlsZGluZ1R5cGUsXHJcbiAgICAgICAgICAgIHJvb21UeXBlLFxyXG4gICAgICAgICAgICBpc1NldFVwRm9yR3Vlc3QsXHJcbiAgICAgICAgfSA9IHJlZ2lzdGVyUm9vbTtcclxuXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICFsYXJnZUJ1aWxkaW5nVHlwZSB8fCBcclxuICAgICAgICAgICAgIWJ1aWxkaW5nVHlwZSB8fCBcclxuICAgICAgICAgICAgIXJvb21UeXBlIHx8IFxyXG4gICAgICAgICAgICBpc1NldFVwRm9yR3Vlc3QgPT09IG51bGxcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gKiDsiJnshowg7KKF66WY6rCAIO2ZnOyEse2ZlCDrkJjsl4jripTsp4BcclxuICAgIGNvbnN0IGlzUm9vbVR5cGVBY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG1heGltdW1HdWVzdENvdW50LFxyXG4gICAgICAgICAgICBiZWRyb29tQ291bnQsXHJcbiAgICAgICAgICAgIGJlZENvdW50LFxyXG4gICAgICAgICAgICBiZWRMaXN0LFxyXG4gICAgICAgICAgICBwdWJsaWNCZWRMaXN0LFxyXG4gICAgICAgIH0gPSByZWdpc3RlclJvb207XHJcblxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICAhaXNCdWlsZGluZ1R5cGVBY3RpdmVkIHx8XHJcbiAgICAgICAgICAgICFtYXhpbXVtR3Vlc3RDb3VudCB8fCBcclxuICAgICAgICAgICAgIWJlZHJvb21Db3VudCB8fCBcclxuICAgICAgICAgICAgIWJlZENvdW50XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDsmpXsi6Qg7ZWt66qp7J20IO2ZnOyEse2ZlCDrkJjsl4jripTsp4BcclxuICAgIGNvbnN0IGlzQmF0aHJvb21BY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJhdGhyb29tQ291bnQsXHJcbiAgICAgICAgICAgIGJhdGhyb29tVHlwZSwgICAgICAgICAgICBcclxuICAgICAgICB9ID0gcmVnaXN0ZXJSb29tO1xyXG5cclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgIWlzUm9vbVR5cGVBY3RpdmVkIHx8XHJcbiAgICAgICAgICAgICFiYXRocm9vbUNvdW50IHx8IFxyXG4gICAgICAgICAgICAhYmF0aHJvb21UeXBlID09PSBudWxsXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDsnITsuZgg7ZWt66qp7J20IO2ZnOyEse2ZlCDrkJjsl4jripTsp4BcclxuICAgIGNvbnN0IGlzTG9jYXRpb25BY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgICAgIGNvdW50cnksXHJcbiAgICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICAgIGRpc3RyaWN0LFxyXG4gICAgICAgICAgICBzdHJlZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICBkZXRhaWxBZGRyZXNzLFxyXG4gICAgICAgICAgICBwb3N0Y29kZSxcclxuICAgICAgICB9ID0gcmVnaXN0ZXJSb29tO1xyXG5cclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgIWlzQmF0aHJvb21BY3RpdmVkIHx8XHJcbiAgICAgICAgICAgICFsYXRpdHVkZSB8fCBcclxuICAgICAgICAgICAgIWxvbmdpdHVkZSB8fCBcclxuICAgICAgICAgICAgIWNvdW50cnkgfHwgXHJcbiAgICAgICAgICAgICFjaXR5IHx8IFxyXG4gICAgICAgICAgICAhZGlzdHJpY3QgfHwgXHJcbiAgICAgICAgICAgICFzdHJlZXRBZGRyZXNzIHx8XHJcbiAgICAgICAgICAgICFwb3N0Y29kZVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog7Y647J2Y7Iuc7ISk7J20IO2ZnOyEse2ZlCDrkJjsl4jripTsp4BcclxuICAgIGNvbnN0IGlzQW1lbnRpdGllc0FjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHsgYW1lbnRpdGllcyB9ID0gcmVnaXN0ZXJSb29tO1xyXG4gICAgICAgIGlmKGFtZW50aXRpZXMubGVuZ3RoPT09MCl7fVxyXG4gICAgICAgIGlmKGlzRW1wdHkoYW1lbnRpdGllcykpe31cclxuXHJcbiAgICAgICAgaWYoIWlzTG9jYXRpb25BY3RpdmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDqs7Xsmqnqs7XqsITsnbQg7Zmc7ISx7ZmUIOuQmOyXiOuKlOyngFxyXG4gICAgY29uc3QgaXNDb252ZW5pZW5jZXNBY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBpZighaXNBbWVudGl0aWVzQWN0aXZlZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDsgqzsp4Ttla3rqqnsnbQg64ukIOyxhOybjOyguCDsnojripTsp4BcclxuICAgIGNvbnN0IGlzUGhvdG9BY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB7IHBob3RvcyB9ID0gcmVnaXN0ZXJSb29tO1xyXG4gICAgICAgIGlmKCFpc0NvbnZlbmllbmNlc0FjdGl2ZWQgfHwgaXNFbXB0eShwaG90b3MpKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIOyImeyGjOyEpOuqheydtCDri6Qg7LGE7JuM7KC4IOyeiOuKlOyngFxyXG4gICAgY29uc3QgaXNEZXNjcmlwdGlvbkFjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHJlZ2lzdGVyUm9vbTtcclxuICAgICAgICBpZighaXNQaG90b0FjdGl2ZWQgfHwgIWRlc2NyaXB0aW9uKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIOyImeyGjCDsoJzrqqnsnbQg64ukIOyxhOybjOyguCDsnojripTsp4BcclxuICAgIGNvbnN0IGlzVGl0bGVBY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB7IHRpdGxlIH0gPSByZWdpc3RlclJvb207XHJcbiAgICAgICAgaWYoIWlzRGVzY3JpcHRpb25BY3RpdmVkIHx8ICF0aXRsZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDsiJnshowg6riI7JWh7J20IOyxhOybjOyguCDsnojripTsp4BcclxuICAgIGNvbnN0IGlzUHJpY2VBY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB7IHByaWNlIH0gPSByZWdpc3RlclJvb207XHJcbiAgICAgICAgaWYoIWlzVGl0bGVBY3RpdmVkIHx8ICFwcmljZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDsmIjslb0g64Kg7Kec6rCAIOyxhOybjOyguCDsnojripTsp4BcclxuICAgIGNvbnN0IGlzRGF0ZUFjdGl2ZWQ9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSByZWdpc3RlclJvb207XHJcbiAgICAgICAgaWYoIWlzUHJpY2VBY3RpdmVkIHx8ICFzdGFydERhdGUgfHwgIWVuZERhdGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog7KeE7ZaJ7KSR7J24IOuLqOqzhFxyXG4gICAgY29uc3Qgc3RlcEluUHJvZ3Jlc3M9dXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGlmKCFpc0J1aWxkaW5nVHlwZUFjdGl2ZWQpe3JldHVybiBcImJ1aWxkaW5nXCI7fVxyXG4gICAgICAgIGlmKCFpc1Jvb21UeXBlQWN0aXZlZCl7cmV0dXJuIFwiYmVkcm9vbXNcIjt9XHJcbiAgICAgICAgaWYoIWlzQmF0aHJvb21BY3RpdmVkKXtyZXR1cm4gXCJiYXRocm9vbVwiO31cclxuICAgICAgICBpZighaXNMb2NhdGlvbkFjdGl2ZWQpe3JldHVybiBcImxvY2F0aW9uXCI7fVxyXG4gICAgICAgIGlmKCFpc0FtZW50aXRpZXNBY3RpdmVkKXtyZXR1cm4gXCJhbWVudGl0aWVzXCI7fVxyXG4gICAgICAgIGlmKCFpc0NvbnZlbmllbmNlc0FjdGl2ZWQpe3JldHVybiBcImNvbnZlbmllbmNlc1wiO31cclxuICAgICAgICBpZighaXNQaG90b0FjdGl2ZWQpe3JldHVybiBcInBob3RvXCI7fVxyXG4gICAgICAgIGlmKCFpc0Rlc2NyaXB0aW9uQWN0aXZlZCl7cmV0dXJuIFwiZGVzY3JpcHRpb25cIjt9XHJcbiAgICAgICAgaWYoIWlzVGl0bGVBY3RpdmVkKXtyZXR1cm4gXCJ0aXRsZVwiO31cclxuICAgICAgICBpZighaXNQcmljZUFjdGl2ZWQpe3JldHVybiBcInByaWNlXCI7fVxyXG4gICAgICAgIGlmKCFpc0RhdGVBY3RpdmVkKXtyZXR1cm4gXCJkYXRlXCI7fVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1jaGVja2xpc3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAg7IiZ7IaM66W8IOuTseuhne2VnCDtm4Qg7Ja47KCc65OgIOyImeyGjOulvCDsiJjsoJXtlaAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLsiJnshozsnKDtmJVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9idWlsZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0J1aWxkaW5nVHlwZUFjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwiYnVpbGRpbmdcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLsiJnshozsooXrpZhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9iZWRyb29tc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1Jvb21UeXBlQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJiZWRyb29tc1wifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuyaleyLpFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL2JhdGhyb29tc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0JhdGhyb29tQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJiYXRocm9vbVwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuychOy5mFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL2xvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzTG9jYXRpb25BY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcImxvY2F0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7Y647J2Y7Iuc7ISkXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvYW1lbnRpdGllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0FtZW50aXRpZXNBY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcImFtZW50aXRpZXNcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLqs7Xsmqnqs7XqsIRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9jb252ZW5pZW5jZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNDb252ZW5pZW5jZXNBY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcImNvbnZlbmllbmNlc1wifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuyCrOynhFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL3Bob3RvXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzUGhvdG9BY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcInBob3RvXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7ISk66qFXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNEZXNjcmlwdGlvbkFjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwiZGVzY3JpcHRpb25cIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLsoJzrqqlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci90aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1RpdGxlQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJ0aXRsZVwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuyalOq4iFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzUHJpY2VBY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcInByaWNlXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7JiI7JW964Kg7KecXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0RhdGVBY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcImRhdGVcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8UmVnaXN0ZXJSb29tRm9vdGVyXHJcbiAgICAgICAgICAgICAgICBwcmV2SHJlZj1cIi9yb29tL3JlZ2lzdGVyL3ByaWNlXCJcclxuICAgICAgICAgICAgICAgIG5leHRIcmVmPVwiL3Jvb20vcmVnaXN0ZXIvY2hlY2tsaXN0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclJvb21DaGVja2xpc3Q7XHJcblxyXG5cclxuLy8gNTMwIHBhZ2UiXSwic291cmNlUm9vdCI6IiJ9