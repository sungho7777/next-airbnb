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
/* harmony import */ var _RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RegisterRoomFooter */ "./components/room/register/RegisterRoomFooter.tsx");


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
      lineNumber: 198,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC219\uC18C\uC720\uD615",
        href: "/room/register/building",
        disabled: !isBuildingTypeActived,
        inProgress: stepInProgress === "building"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC219\uC18C\uC885\uB958",
        href: "/room/register/bedrooms",
        disabled: !isRoomTypeActived,
        inProgress: stepInProgress === "bedrooms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC695\uC2E4",
        href: "/room/register/bathrooms",
        disabled: !isBathroomActived,
        inProgress: stepInProgress === "bathroom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC704\uCE58",
        href: "/room/register/location",
        disabled: !isLocationActived,
        inProgress: stepInProgress === "location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uD3B8\uC758\uC2DC\uC124",
        href: "/room/register/amentities",
        disabled: !isAmentitiesActived,
        inProgress: stepInProgress === "amentities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uACF5\uC6A9\uACF5\uAC04",
        href: "/room/register/conveniences",
        disabled: !isConveniencesActived,
        inProgress: stepInProgress === "conveniences"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC0AC\uC9C4",
        href: "/room/register/photo",
        disabled: !isPhotoActived,
        inProgress: stepInProgress === "photo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC124\uBA85",
        href: "/room/register/description",
        disabled: !isDescriptionActived,
        inProgress: stepInProgress === "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC81C\uBAA9",
        href: "/room/register/title",
        disabled: !isTitleActived,
        inProgress: stepInProgress === "title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC694\uAE08",
        href: "/room/register/price",
        disabled: !isPriceActived,
        inProgress: stepInProgress === "price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomCheckStep__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: "\uC608\uC57D\uB0A0\uC9DC",
        href: "/room/register/date",
        disabled: !isDateActived,
        inProgress: stepInProgress === "date"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }, _this), isDateActived ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 17
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RegisterRoomFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      prevHref: "/room/register/date",
      nextHref: "/room/register/".concat(stepInProgress)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 197,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUNoZWNrbGlzdC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiUmVnaXN0ZXJSb29tQ2hlY2tsaXN0IiwicmVnaXN0ZXJSb29tIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImlzQnVpbGRpbmdUeXBlQWN0aXZlZCIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJpc1Jvb21UeXBlQWN0aXZlZCIsInVzZU1lbW8iLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJpc0JhdGhyb29tQWN0aXZlZCIsImJhdGhyb29tQ291bnQiLCJiYXRocm9vbVR5cGUiLCJpc0xvY2F0aW9uQWN0aXZlZCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY291bnRyeSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJpc0FtZW50aXRpZXNBY3RpdmVkIiwiYW1lbnRpdGllcyIsImxlbmd0aCIsImlzRW1wdHkiLCJpc0NvbnZlbmllbmNlc0FjdGl2ZWQiLCJpc1Bob3RvQWN0aXZlZCIsInBob3RvcyIsImlzRGVzY3JpcHRpb25BY3RpdmVkIiwiZGVzY3JpcHRpb24iLCJpc1RpdGxlQWN0aXZlZCIsInRpdGxlIiwiaXNQcmljZUFjdGl2ZWQiLCJwcmljZSIsImlzRGF0ZUFjdGl2ZWQiLCJzdGFydERhdGUiLCJlbmREYXRlIiwic3RlcEluUHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FB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O0FBQ0ksWUFBSSxFQUFDLGNBRFQ7QUFFSSxZQUFJLEVBQUMsc0JBRlQ7QUFHSSxnQkFBUSxFQUFFLENBQUNQLGNBSGY7QUFJSSxrQkFBVSxFQUFFTyxjQUFjLEtBQUs7QUFKbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpESixlQXVESSxxRUFBQyw4REFBRDtBQUNJLFlBQUksRUFBQyxjQURUO0FBRUksWUFBSSxFQUFDLHNCQUZUO0FBR0ksZ0JBQVEsRUFBRSxDQUFDTCxjQUhmO0FBSUksa0JBQVUsRUFBRUssY0FBYyxLQUFLO0FBSm5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2REosZUE2REkscUVBQUMsOERBQUQ7QUFDSSxZQUFJLEVBQUMsMEJBRFQ7QUFFSSxZQUFJLEVBQUMscUJBRlQ7QUFHSSxnQkFBUSxFQUFFLENBQUNILGFBSGY7QUFJSSxrQkFBVSxFQUFFRyxjQUFjLEtBQUs7QUFKbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixFQXdFS0gsYUFBYSxnQkFDVixxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFUsZ0JBR1YscUVBQUMsMkRBQUQ7QUFDSSxjQUFRLEVBQUMscUJBRGI7QUFFSSxjQUFRLDJCQUFvQkcsY0FBcEI7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0VSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUZILENBbFFEOztHQUFNNUMscUI7VUFDbUJFLGtEOzs7TUFEbkJGLHFCO0FBb1FTQSxvRkFBZixFLENBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9jaGVja2xpc3QuZGYzNTg5NTQyMDNlNGE4MGFjZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRW1wdHkgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCBSZWdpc3RlclJvb21DaGVja1N0ZXAgZnJvbSBcIi4vUmVnaXN0ZXJSb29tQ2hlY2tTdGVwXCI7XHJcbmltcG9ydCBSZWdpc3RlclJvb21Gb290ZXIgZnJvbSBcIi4vUmVnaXN0ZXJSb29tRm9vdGVyXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAucmVnaXN0ZXItcm9vbS1jaGVja2xpc3QtaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzlweDtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFJlZ2lzdGVyUm9vbUNoZWNrbGlzdDogUmVhY3QuRkM9KCk9PntcclxuICAgIGNvbnN0IHJlZ2lzdGVyUm9vbSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJSb29tKTtcclxuXHJcbiAgICAvLyAqICgx64uo6rOEKSDsiJnshowg7Jyg7ZiV7J20IO2ZnOyEse2ZlCDrkJjsl4jripTsp4BcclxuICAgIGNvbnN0IGlzQnVpbGRpbmdUeXBlQWN0aXZlZD0oKT0+e1xyXG4gICAgICAgIGNvbnN0e1xyXG4gICAgICAgICAgICBsYXJnZUJ1aWxkaW5nVHlwZSxcclxuICAgICAgICAgICAgYnVpbGRpbmdUeXBlLFxyXG4gICAgICAgICAgICByb29tVHlwZSxcclxuICAgICAgICAgICAgaXNTZXRVcEZvckd1ZXN0LFxyXG4gICAgICAgIH0gPSByZWdpc3RlclJvb207XHJcblxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICAhbGFyZ2VCdWlsZGluZ1R5cGUgfHwgXHJcbiAgICAgICAgICAgICFidWlsZGluZ1R5cGUgfHwgXHJcbiAgICAgICAgICAgICFyb29tVHlwZSB8fCBcclxuICAgICAgICAgICAgaXNTZXRVcEZvckd1ZXN0ID09PSBudWxsXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vICog7IiZ7IaMIOyiheulmOqwgCDtmZzshLHtmZQg65CY7JeI64qU7KeAXHJcbiAgICBjb25zdCBpc1Jvb21UeXBlQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBtYXhpbXVtR3Vlc3RDb3VudCxcclxuICAgICAgICAgICAgYmVkcm9vbUNvdW50LFxyXG4gICAgICAgICAgICBiZWRDb3VudCxcclxuICAgICAgICAgICAgYmVkTGlzdCxcclxuICAgICAgICAgICAgcHVibGljQmVkTGlzdCxcclxuICAgICAgICB9ID0gcmVnaXN0ZXJSb29tO1xyXG5cclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgIWlzQnVpbGRpbmdUeXBlQWN0aXZlZCB8fFxyXG4gICAgICAgICAgICAhbWF4aW11bUd1ZXN0Q291bnQgfHwgXHJcbiAgICAgICAgICAgICFiZWRyb29tQ291bnQgfHwgXHJcbiAgICAgICAgICAgICFiZWRDb3VudFxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog7JqV7IukIO2VreuqqeydtCDtmZzshLHtmZQg65CY7JeI64qU7KeAXHJcbiAgICBjb25zdCBpc0JhdGhyb29tQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBiYXRocm9vbUNvdW50LFxyXG4gICAgICAgICAgICBiYXRocm9vbVR5cGUsICAgICAgICAgICAgXHJcbiAgICAgICAgfSA9IHJlZ2lzdGVyUm9vbTtcclxuXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICFpc1Jvb21UeXBlQWN0aXZlZCB8fFxyXG4gICAgICAgICAgICAhYmF0aHJvb21Db3VudCB8fCBcclxuICAgICAgICAgICAgIWJhdGhyb29tVHlwZSA9PT0gbnVsbFxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog7JyE7LmYIO2VreuqqeydtCDtmZzshLHtmZQg65CY7JeI64qU7KeAXHJcbiAgICBjb25zdCBpc0xvY2F0aW9uQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlLFxyXG4gICAgICAgICAgICBjb3VudHJ5LFxyXG4gICAgICAgICAgICBjaXR5LFxyXG4gICAgICAgICAgICBkaXN0cmljdCxcclxuICAgICAgICAgICAgc3RyZWV0QWRkcmVzcyxcclxuICAgICAgICAgICAgZGV0YWlsQWRkcmVzcyxcclxuICAgICAgICAgICAgcG9zdGNvZGUsXHJcbiAgICAgICAgfSA9IHJlZ2lzdGVyUm9vbTtcclxuXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICFpc0JhdGhyb29tQWN0aXZlZCB8fFxyXG4gICAgICAgICAgICAhbGF0aXR1ZGUgfHwgXHJcbiAgICAgICAgICAgICFsb25naXR1ZGUgfHwgXHJcbiAgICAgICAgICAgICFjb3VudHJ5IHx8IFxyXG4gICAgICAgICAgICAhY2l0eSB8fCBcclxuICAgICAgICAgICAgIWRpc3RyaWN0IHx8IFxyXG4gICAgICAgICAgICAhc3RyZWV0QWRkcmVzcyB8fFxyXG4gICAgICAgICAgICAhcG9zdGNvZGVcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIO2OuOydmOyLnOyEpOydtCDtmZzshLHtmZQg65CY7JeI64qU7KeAXHJcbiAgICBjb25zdCBpc0FtZW50aXRpZXNBY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB7IGFtZW50aXRpZXMgfSA9IHJlZ2lzdGVyUm9vbTtcclxuICAgICAgICBpZihhbWVudGl0aWVzLmxlbmd0aD09PTApe31cclxuICAgICAgICBpZihpc0VtcHR5KGFtZW50aXRpZXMpKXt9XHJcblxyXG4gICAgICAgIGlmKCFpc0xvY2F0aW9uQWN0aXZlZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog6rO17Jqp6rO16rCE7J20IO2ZnOyEse2ZlCDrkJjsl4jripTsp4BcclxuICAgIGNvbnN0IGlzQ29udmVuaWVuY2VzQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgaWYoIWlzQW1lbnRpdGllc0FjdGl2ZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog7IKs7KeE7ZWt66qp7J20IOuLpCDssYTsm4zsoLgg7J6I64qU7KeAXHJcbiAgICBjb25zdCBpc1Bob3RvQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgeyBwaG90b3MgfSA9IHJlZ2lzdGVyUm9vbTtcclxuICAgICAgICBpZighaXNDb252ZW5pZW5jZXNBY3RpdmVkIHx8IGlzRW1wdHkocGhvdG9zKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDsiJnshozshKTrqoXsnbQg64ukIOyxhOybjOyguCDsnojripTsp4BcclxuICAgIGNvbnN0IGlzRGVzY3JpcHRpb25BY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSByZWdpc3RlclJvb207XHJcbiAgICAgICAgaWYoIWlzUGhvdG9BY3RpdmVkIHx8ICFkZXNjcmlwdGlvbil7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gKiDsiJnshowg7KCc66qp7J20IOuLpCDssYTsm4zsoLgg7J6I64qU7KeAXHJcbiAgICBjb25zdCBpc1RpdGxlQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgeyB0aXRsZSB9ID0gcmVnaXN0ZXJSb29tO1xyXG4gICAgICAgIGlmKCFpc0Rlc2NyaXB0aW9uQWN0aXZlZCB8fCAhdGl0bGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog7IiZ7IaMIOq4iOyVoeydtCDssYTsm4zsoLgg7J6I64qU7KeAXHJcbiAgICBjb25zdCBpc1ByaWNlQWN0aXZlZD11c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgeyBwcmljZSB9ID0gcmVnaXN0ZXJSb29tO1xyXG4gICAgICAgIGlmKCFpc1RpdGxlQWN0aXZlZCB8fCAhcHJpY2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vICog7JiI7JW9IOuCoOynnOqwgCDssYTsm4zsoLgg7J6I64qU7KeAXHJcbiAgICBjb25zdCBpc0RhdGVBY3RpdmVkPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gcmVnaXN0ZXJSb29tO1xyXG4gICAgICAgIGlmKCFpc1ByaWNlQWN0aXZlZCB8fCAhc3RhcnREYXRlIHx8ICFlbmREYXRlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyAqIOynhO2WieykkeyduCDri6jqs4RcclxuICAgIGNvbnN0IHN0ZXBJblByb2dyZXNzPXVzZU1lbW8oKCk9PntcclxuICAgICAgICBpZighaXNCdWlsZGluZ1R5cGVBY3RpdmVkKXtyZXR1cm4gXCJidWlsZGluZ1wiO31cclxuICAgICAgICBpZighaXNSb29tVHlwZUFjdGl2ZWQpe3JldHVybiBcImJlZHJvb21zXCI7fVxyXG4gICAgICAgIGlmKCFpc0JhdGhyb29tQWN0aXZlZCl7cmV0dXJuIFwiYmF0aHJvb21cIjt9XHJcbiAgICAgICAgaWYoIWlzTG9jYXRpb25BY3RpdmVkKXtyZXR1cm4gXCJsb2NhdGlvblwiO31cclxuICAgICAgICBpZighaXNBbWVudGl0aWVzQWN0aXZlZCl7cmV0dXJuIFwiYW1lbnRpdGllc1wiO31cclxuICAgICAgICBpZighaXNDb252ZW5pZW5jZXNBY3RpdmVkKXtyZXR1cm4gXCJjb252ZW5pZW5jZXNcIjt9XHJcbiAgICAgICAgaWYoIWlzUGhvdG9BY3RpdmVkKXtyZXR1cm4gXCJwaG90b1wiO31cclxuICAgICAgICBpZighaXNEZXNjcmlwdGlvbkFjdGl2ZWQpe3JldHVybiBcImRlc2NyaXB0aW9uXCI7fVxyXG4gICAgICAgIGlmKCFpc1RpdGxlQWN0aXZlZCl7cmV0dXJuIFwidGl0bGVcIjt9XHJcbiAgICAgICAgaWYoIWlzUHJpY2VBY3RpdmVkKXtyZXR1cm4gXCJwcmljZVwiO31cclxuICAgICAgICBpZighaXNEYXRlQWN0aXZlZCl7cmV0dXJuIFwiZGF0ZVwiO31cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tY2hlY2tsaXN0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgIOyImeyGjOulvCDrk7HroZ3tlZwg7ZuEIOyWuOygnOuToCDsiJnshozrpbwg7IiY7KCV7ZWgIOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7IiZ7IaM7Jyg7ZiVXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvYnVpbGRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNCdWlsZGluZ1R5cGVBY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcImJ1aWxkaW5nXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7IiZ7IaM7KKF66WYXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNSb29tVHlwZUFjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwiYmVkcm9vbXNcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLsmpXsi6RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9iYXRocm9vbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNCYXRocm9vbUFjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwiYmF0aHJvb21cIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLsnITsuZhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9sb2NhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0xvY2F0aW9uQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJsb2NhdGlvblwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIu2OuOydmOyLnOyEpFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL2FtZW50aXRpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBbWVudGl0aWVzQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJhbWVudGl0aWVzXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi6rO17Jqp6rO16rCEXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvY29udmVuaWVuY2VzXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQ29udmVuaWVuY2VzQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJjb252ZW5pZW5jZXNcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLsgqzsp4RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9waG90b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1Bob3RvQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJwaG90b1wifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuyEpOuqhVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzRGVzY3JpcHRpb25BY3RpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3N0ZXBJblByb2dyZXNzID09PSBcImRlc2NyaXB0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUNoZWNrU3RlcCBcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwi7KCc66qpXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Jvb20vcmVnaXN0ZXIvdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNUaXRsZUFjdGl2ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5Qcm9ncmVzcz17c3RlcEluUHJvZ3Jlc3MgPT09IFwidGl0bGVcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJSb29tQ2hlY2tTdGVwIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCLsmpTquIhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1ByaWNlQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJwcmljZVwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21DaGVja1N0ZXAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIuyYiOyVveuCoOynnFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNEYXRlQWN0aXZlZH1cclxuICAgICAgICAgICAgICAgICAgICBpblByb2dyZXNzPXtzdGVwSW5Qcm9ncmVzcyA9PT0gXCJkYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7aXNEYXRlQWN0aXZlZCA/IChcclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlclJvb21Gb290ZXIgLz5cclxuICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyUm9vbUZvb3RlclxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZIcmVmPVwiL3Jvb20vcmVnaXN0ZXIvZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEhyZWY9e2Avcm9vbS9yZWdpc3Rlci8ke3N0ZXBJblByb2dyZXNzfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUm9vbUNoZWNrbGlzdDtcclxuXHJcblxyXG4vLyA1MzAgcGFnZSJdLCJzb3VyY2VSb290IjoiIn0=