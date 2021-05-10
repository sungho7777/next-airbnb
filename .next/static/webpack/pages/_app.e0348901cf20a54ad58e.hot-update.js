webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/registerRoom.ts":
/*!*******************************!*\
  !*** ./store/registerRoom.ts ***!
  \*******************************/
/*! exports provided: registerRoomActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoomActions", function() { return registerRoomActions; });
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


// * 초기상태
var initialState = {
  largeBuildingType: null,
  // * 건물 유형 큰 범주
  buildingType: null,
  // * 건물 유형
  roomType: null,
  // * 숙소 유형
  isSetUpForGuest: null,
  // * 게스트만을 위해 만들어진 숙소인가?
  //
  maximumGuestCount: 1,
  // * 최대 숙박 인원
  bedroomCount: 0,
  // * 침실 개수
  bedCount: 1,
  // * 침대 개수
  bedList: [],
  // * 침대 유형
  publicBedList: [] // * 공용공간 침대 유형

};
var registerRoom = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createSlice"])({
  name: "registerRoom",
  initialState: initialState,
  reducers: {
    // 큰 건물 유형 변경하기
    setLargeBuildingType: function setLargeBuildingType(state, action) {
      if (action.payload === "") {
        state.largeBuildingType = null;
      }

      state.largeBuildingType = action.payload;
      return state;
    },
    // * 건물 유형 변경하기.
    setBuildingType: function setBuildingType(state, action) {
      if (action.payload === "") {
        state.buildingType = null;
      }

      state.buildingType = action.payload;
      return state;
    },
    // * 숙소 유형 변경하기.
    setRoomType: function setRoomType(state, action) {
      state.roomType = action.payload;
      return state;
    },
    // * '게스트용 숙소인지' 변경하기
    setIsSetUpForGuest: function setIsSetUpForGuest(state, action) {
      state.isSetUpForGuest = action.payload;
      return state;
    },
    // * 최대 숙박 인원 변경하기
    setMaximumGuestCount: function setMaximumGuestCount(state, action) {
      state.maximumGuestCount = action.payload;
      return state;
    },
    // * 침실 개수 변경하기
    setBedroomCount: function setBedroomCount(state, action) {
      var bedroomCount = action.payload;
      var bedList = state.bedList;
      state.bedroomCount = bedroomCount;

      if (bedroomCount < bedList.length) {
        //* 기존 침대 개수가 더 많으면 초과부분 잘라내기
        bedList = state.bedList.slice(0, bedroomCount);
      } else {
        //* 변경될 침대 개수가 더 많으면 나머지 침실 채우기
        for (var i = bedList.length + 1; i < bedroomCount + 1; i += 1) {
          bedList.push({
            id: i,
            beds: []
          });
        }
      }

      state.bedList = bedList;
      return state;
    },
    // * 최대 침대 개수 변경하기
    setBedCount: function setBedCount(state, action) {
      state.bedCount = action.payload;
      return state;
    },
    // * 침대 유형 개수 변경하기
    setBedTypeCount: function setBedTypeCount(state, action) {
      var _action$payload = action.payload,
          bedroomId = _action$payload.bedroomId,
          type = _action$payload.type,
          count = _action$payload.count;
      var bedroom = state.bedList[bedroomId - 1];
      var prevBeds = bedroom.beds;
      var index = prevBeds.findIndex(function (bed) {
        return bed.type === type;
      });

      if (index === -1) {
        // * 타입이 없다면...
        state.bedList[bedroomId - 1].beds = [].concat(Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevBeds), [{
          type: type,
          count: count
        }]);
        return state;
      } // * 타입이 존재 한다면...


      if (count === 0) {
        state.bedList[bedroomId - 1].beds.splice(index, 1);
      } else {
        state.bedList[bedroomId - 1].beds[index].count = count;
      }

      return state;
    }
  }
});
var registerRoomActions = _objectSpread({}, registerRoom.actions);
/* harmony default export */ __webpack_exports__["default"] = (registerRoom);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJyZWdpc3RlclJvb20iLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0QnVpbGRpbmdUeXBlIiwic2V0Um9vbVR5cGUiLCJzZXRJc1NldFVwRm9yR3Vlc3QiLCJzZXRNYXhpbXVtR3Vlc3RDb3VudCIsInNldEJlZHJvb21Db3VudCIsImxlbmd0aCIsInNsaWNlIiwiaSIsInB1c2giLCJpZCIsImJlZHMiLCJzZXRCZWRDb3VudCIsInNldEJlZFR5cGVDb3VudCIsImJlZHJvb21JZCIsInR5cGUiLCJjb3VudCIsImJlZHJvb20iLCJwcmV2QmVkcyIsImluZGV4IiwiZmluZEluZGV4IiwiYmVkIiwic3BsaWNlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlCQTtBQUNBLElBQU1BLFlBQStCLEdBQUc7QUFDcENDLG1CQUFpQixFQUFFLElBRGlCO0FBQ0o7QUFDaENDLGNBQVksRUFBQyxJQUZ1QjtBQUVKO0FBQ2hDQyxVQUFRLEVBQUUsSUFIMEI7QUFHSjtBQUNoQ0MsaUJBQWUsRUFBQyxJQUpvQjtBQUlKO0FBQ2hDO0FBQ0FDLG1CQUFpQixFQUFDLENBTmtCO0FBTUo7QUFDaENDLGNBQVksRUFBQyxDQVB1QjtBQU9KO0FBQ2hDQyxVQUFRLEVBQUMsQ0FSMkI7QUFRSjtBQUNoQ0MsU0FBTyxFQUFDLEVBVDRC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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QgfSBmcm9tIFwiLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHtCZWRUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVwiO1xyXG5cclxudHlwZSBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcm9vbVR5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6IGJvb2xlYW4gfCBudWxsO1xyXG5cclxuICAgIG1heGltdW1HdWVzdENvdW50Om51bWJlcjtcclxuICAgIGJlZHJvb21Db3VudDpudW1iZXI7XHJcbiAgICBiZWRDb3VudDpudW1iZXI7XHJcbiAgICBiZWRMaXN0OntpZDpudW1iZXI7IGJlZHM6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdfVtdO1xyXG4gICAgcHVibGljQmVkTGlzdDp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W107XHJcbn07XHJcblxyXG4vLyAqIOy0iOq4sOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IG51bGwsICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg7YGwIOuylOyjvFxyXG4gICAgYnVpbGRpbmdUeXBlOm51bGwsICAgICAgICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJVcclxuICAgIHJvb21UeXBlOiBudWxsLCAgICAgICAgICAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVXHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6bnVsbCwgICAgICAgICAgIC8vICog6rKM7Iqk7Yq466eM7J2EIOychO2VtCDrp4zrk6TslrTsp4Qg7IiZ7IaM7J246rCAP1xyXG4gICAgLy9cclxuICAgIG1heGltdW1HdWVzdENvdW50OjEsICAgICAgICAgICAgLy8gKiDstZzrjIAg7IiZ67CVIOyduOybkFxyXG4gICAgYmVkcm9vbUNvdW50OjAsICAgICAgICAgICAgICAgICAvLyAqIOy5qOyLpCDqsJzsiJhcclxuICAgIGJlZENvdW50OjEsICAgICAgICAgICAgICAgICAgICAgLy8gKiDsuajrjIAg6rCc7IiYXHJcbiAgICBiZWRMaXN0OltdLCAgICAgICAgICAgICAgICAgICAgIC8vICog7Lmo64yAIOycoO2YlVxyXG4gICAgcHVibGljQmVkTGlzdDpbXSwgICAgICAgICAgICAgICAvLyAqIOqzteyaqeqzteqwhCDsuajrjIAg7Jyg7ZiVXHJcblxyXG59O1xyXG5cclxuY29uc3QgcmVnaXN0ZXJSb29tID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTpcInJlZ2lzdGVyUm9vbVwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgIC8vIO2BsCDqsbTrrLwg7Jyg7ZiVIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldExhcmdlQnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0QnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxzdHJpbmc+KXtcclxuICAgICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQ9PT1cIlwiKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZT1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyImeyGjCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldFJvb21UeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248XCJlbnRpcmVcIiB8IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIj4pIHtcclxuICAgICAgICAgICAgc3RhdGUucm9vbVR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiAn6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCcg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0SXNTZXRVcEZvckd1ZXN0KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxib29sZWFuPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2V0VXBGb3JHdWVzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy1nOuMgCDsiJnrsJUg7J247JuQIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldE1heGltdW1HdWVzdENvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUubWF4aW11bUd1ZXN0Q291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsuajsi6Qg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZHJvb21Db3VudChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgY29uc3QgYmVkcm9vbUNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGxldCB7IGJlZExpc3QgfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkcm9vbUNvdW50ID0gYmVkcm9vbUNvdW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKGJlZHJvb21Db3VudCA8IGJlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyog6riw7KG0IOy5qOuMgCDqsJzsiJjqsIAg642UIOunjuycvOuptCDstIjqs7zrtoDrtoQg7J6Y652864K06riwXHJcbiAgICAgICAgICAgICAgICBiZWRMaXN0ID0gc3RhdGUuYmVkTGlzdC5zbGljZSgwLCBiZWRyb29tQ291bnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8qIOuzgOqyveuQoCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg64KY66i47KeAIOy5qOyLpCDssYTsmrDquLBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBiZWRMaXN0Lmxlbmd0aCArIDE7IGkgPCBiZWRyb29tQ291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGJlZExpc3QucHVzaCh7IGlkOiBpLCBiZWRzOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkTGlzdCA9IGJlZExpc3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7LWc64yAIOy5qOuMgCDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iZWRDb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy5qOuMgCDsnKDtmJUg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZFR5cGVDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248e2JlZHJvb21JZDpudW1iZXI7IHR5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfT4pe1xyXG4gICAgICAgICAgICBjb25zdCB7YmVkcm9vbUlkLCB0eXBlLCBjb3VudH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc3QgYmVkcm9vbSA9IHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZCZWRzID0gYmVkcm9vbS5iZWRzO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByZXZCZWRzLmZpbmRJbmRleCgoYmVkKT0+YmVkLnR5cGUgPT09IHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcclxuICAgICAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyXhuuLpOuptC4uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzID0gWy4uLnByZXZCZWRzLCB7dHlwZSwgY291bnR9XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7KG07J6sIO2VnOuLpOuptC4uLlxyXG4gICAgICAgICAgICBpZihjb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHNbaW5kZXhdLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclJvb21BY3Rpb25zPXsuLi5yZWdpc3RlclJvb20uYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==