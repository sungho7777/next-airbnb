webpackHotUpdate_N_E("pages/room/register/bedrooms",{

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
  publicBedList: [],
  // * 공용공간 침대 유형
  //
  bathroomCount: 1,
  // * 욕실 개수
  bathroomType: null // * 욕실 유형

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
    },
    // * 공용공간 침대 유형 개수 변경하기.
    setPublicBedTypeCount: function setPublicBedTypeCount(state, action) {
      var _action$payload2 = action.payload,
          type = _action$payload2.type,
          count = _action$payload2.count;
      var index = state.publicBedList.findIndex(function (bed) {
        return bed.type === type;
      });

      if (index === -1) {
        // * 타입이 없다면...
        state.publicBedList = [].concat(Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.publicBedList), [{
          type: type,
          count: count
        }]);
        return state;
      } // * 타입이 존재 한다면...


      if (count === 0) {
        state.publicBedList.splice(index, 1);
      } else {
        state.publicBedList[index].count = count;
      }

      return state;
    } // * 욕실 개수 변경하기.
    // * 욕실 유형 변경하기.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJiYXRocm9vbUNvdW50IiwiYmF0aHJvb21UeXBlIiwicmVnaXN0ZXJSb29tIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRMYXJnZUJ1aWxkaW5nVHlwZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEJ1aWxkaW5nVHlwZSIsInNldFJvb21UeXBlIiwic2V0SXNTZXRVcEZvckd1ZXN0Iiwic2V0TWF4aW11bUd1ZXN0Q291bnQiLCJzZXRCZWRyb29tQ291bnQiLCJsZW5ndGgiLCJzbGljZSIsImkiLCJwdXNoIiwiaWQiLCJiZWRzIiwic2V0QmVkQ291bnQiLCJzZXRCZWRUeXBlQ291bnQiLCJiZWRyb29tSWQiLCJ0eXBlIiwiY291bnQiLCJiZWRyb29tIiwicHJldkJlZHMiLCJpbmRleCIsImZpbmRJbmRleCIsImJlZCIsInNwbGljZSIsInNldFB1YmxpY0JlZFR5cGVDb3VudCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQkE7QUFDQSxJQUFNQSxZQUErQixHQUFHO0FBQ3BDQyxtQkFBaUIsRUFBRSxJQURpQjtBQUNKO0FBQ2hDQyxjQUFZLEVBQUMsSUFGdUI7QUFFSjtBQUNoQ0MsVUFBUSxFQUFFLElBSDBCO0FBR0o7QUFDaENDLGlCQUFlLEVBQUMsSUFKb0I7QUFJSjtBQUNoQztBQUNBQyxtQkFBaUIsRUFBQyxDQU5rQjtBQU1KO0FBQ2hDQyxjQUFZLEVBQUMsQ0FQdUI7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SyxpQ0ErRWlCekIsS0EvRWpCLEVBK0V3QkMsTUEvRXhCLEVBK0UyRTtBQUFBLDZCQUN0REEsTUFBTSxDQUFDQyxPQUQrQztBQUFBLFVBQ3JFZSxJQURxRSxvQkFDckVBLElBRHFFO0FBQUEsVUFDL0RDLEtBRCtELG9CQUMvREEsS0FEK0Q7QUFHNUUsVUFBTUcsS0FBSyxHQUFDckIsS0FBSyxDQUFDUixhQUFOLENBQW9COEIsU0FBcEIsQ0FBOEIsVUFBQ0MsR0FBRDtBQUFBLGVBQU9BLEdBQUcsQ0FBQ04sSUFBSixLQUFXQSxJQUFsQjtBQUFBLE9BQTlCLENBQVo7O0FBQ0EsVUFBR0ksS0FBSyxLQUFLLENBQUMsQ0FBZCxFQUFnQjtBQUNaO0FBQ0FyQixhQUFLLENBQUNSLGFBQU4sNEtBQTBCUSxLQUFLLENBQUNSLGFBQWhDLElBQStDO0FBQUN5QixjQUFJLEVBQUpBLElBQUQ7QUFBT0MsZUFBSyxFQUFMQTtBQUFQLFNBQS9DO0FBQ0EsZUFBT2xCLEtBQVA7QUFDSCxPQVIyRSxDQVU1RTs7O0FBQ0EsVUFBR2tCLEtBQUssS0FBSyxDQUFiLEVBQWU7QUFDWGxCLGFBQUssQ0FBQ1IsYUFBTixDQUFvQmdDLE1BQXBCLENBQTJCSCxLQUEzQixFQUFrQyxDQUFsQztBQUNILE9BRkQsTUFFSztBQUNEckIsYUFBSyxDQUFDUixhQUFOLENBQW9CNkIsS0FBcEIsRUFBMkJILEtBQTNCLEdBQW1DQSxLQUFuQztBQUNIOztBQUNELGFBQU9sQixLQUFQO0FBQ0gsS0FoR0ksQ0FpR0w7QUFFQTs7QUFuR0s7QUFIb0IsQ0FBRCxDQUFoQztBQStHTyxJQUFNMEIsbUJBQW1CLHFCQUFLL0IsWUFBWSxDQUFDZ0MsT0FBbEIsQ0FBekI7QUFFUWhDLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvYmVkcm9vbXMuYmUzNmY5YTI0Mzk2OWRiNWIwZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCB9IGZyb20gXCIuLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQge0JlZFR5cGV9IGZyb20gXCIuLi90eXBlcy9yb29tXCI7XHJcblxyXG50eXBlIFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBidWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICByb29tVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGlzU2V0VXBGb3JHdWVzdDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvL1xyXG4gICAgbWF4aW11bUd1ZXN0Q291bnQ6bnVtYmVyO1xyXG4gICAgYmVkcm9vbUNvdW50Om51bWJlcjtcclxuICAgIGJlZENvdW50Om51bWJlcjtcclxuICAgIGJlZExpc3Q6e2lkOm51bWJlcjsgYmVkczp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W119W107XHJcbiAgICBwdWJsaWNCZWRMaXN0Ont0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXTtcclxuICAgIC8vXHJcbiAgICBiYXRocm9vbUNvdW50Om51bWJlcjtcclxuICAgIGJhdGhyb29tVHlwZTogXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiIHwgbnVsbDtcclxufTtcclxuXHJcbi8vICog7LSI6riw7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogbnVsbCwgICAgICAgIC8vICog6rG066y8IOycoO2YlSDtgbAg67KU7KO8XHJcbiAgICBidWlsZGluZ1R5cGU6bnVsbCwgICAgICAgICAgICAgIC8vICog6rG066y8IOycoO2YlVxyXG4gICAgcm9vbVR5cGU6IG51bGwsICAgICAgICAgICAgICAgICAvLyAqIOyImeyGjCDsnKDtmJVcclxuICAgIGlzU2V0VXBGb3JHdWVzdDpudWxsLCAgICAgICAgICAgLy8gKiDqsozsiqTtirjrp4zsnYQg7JyE7ZW0IOunjOuTpOyWtOynhCDsiJnshozsnbjqsIA/XHJcbiAgICAvL1xyXG4gICAgbWF4aW11bUd1ZXN0Q291bnQ6MSwgICAgICAgICAgICAvLyAqIOy1nOuMgCDsiJnrsJUg7J247JuQXHJcbiAgICBiZWRyb29tQ291bnQ6MCwgICAgICAgICAgICAgICAgIC8vICog7Lmo7IukIOqwnOyImFxyXG4gICAgYmVkQ291bnQ6MSwgICAgICAgICAgICAgICAgICAgICAvLyAqIOy5qOuMgCDqsJzsiJhcclxuICAgIGJlZExpc3Q6W10sICAgICAgICAgICAgICAgICAgICAgLy8gKiDsuajrjIAg7Jyg7ZiVXHJcbiAgICBwdWJsaWNCZWRMaXN0OltdLCAgICAgICAgICAgICAgIC8vICog6rO17Jqp6rO16rCEIOy5qOuMgCDsnKDtmJVcclxuICAgIC8vXHJcbiAgICBiYXRocm9vbUNvdW50OiAxLCAgICAgICAgICAgICAgIC8vICog7JqV7IukIOqwnOyImFxyXG4gICAgYmF0aHJvb21UeXBlOiBudWxsLCAgICAgICAgICAgICAvLyAqIOyaleyLpCDsnKDtmJVcclxufTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyUm9vbSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6XCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICAvLyDtgbAg6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXJnZUJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248c3RyaW5nPil7XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkPT09XCJcIil7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGU9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRSb29tVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICogJ+qyjOyKpO2KuOyaqSDsiJnshozsnbjsp4AnIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldElzU2V0VXBGb3JHdWVzdChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248Ym9vbGVhbj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NldFVwRm9yR3Vlc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDstZzrjIAg7IiZ67CVIOyduOybkCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRNYXhpbXVtR3Vlc3RDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLm1heGltdW1HdWVzdENvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7Lmo7IukIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRyb29tQ291bnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb21Db3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBsZXQgeyBiZWRMaXN0IH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZHJvb21Db3VudCA9IGJlZHJvb21Db3VudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChiZWRyb29tQ291bnQgPCBiZWRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8qIOq4sOyhtCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg7LSI6rO867aA67aEIOyemOudvOuCtOq4sFxyXG4gICAgICAgICAgICAgICAgYmVkTGlzdCA9IHN0YXRlLmJlZExpc3Quc2xpY2UoMCwgYmVkcm9vbUNvdW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vKiDrs4Dqsr3rkKAg7Lmo64yAIOqwnOyImOqwgCDrjZQg66eO7Jy866m0IOuCmOuouOyngCDsuajsi6Qg7LGE7Jqw6riwXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYmVkTGlzdC5sZW5ndGggKyAxOyBpIDwgYmVkcm9vbUNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBiZWRMaXN0LnB1c2goeyBpZDogaSwgYmVkczogW10gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZExpc3QgPSBiZWRMaXN0O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy1nOuMgCDsuajrjIAg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZENvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUuYmVkQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsuajrjIAg7Jyg7ZiVIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRUeXBlQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPHtiZWRyb29tSWQ6bnVtYmVyOyB0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn0+KXtcclxuICAgICAgICAgICAgY29uc3Qge2JlZHJvb21JZCwgdHlwZSwgY291bnR9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb20gPSBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2QmVkcyA9IGJlZHJvb20uYmVkcztcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2QmVkcy5maW5kSW5kZXgoKGJlZCkgPT4gYmVkLnR5cGUgPT09IHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcclxuICAgICAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyXhuuLpOuptC4uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzID0gWy4uLnByZXZCZWRzLCB7dHlwZSwgY291bnR9XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7KG07J6sIO2VnOuLpOuptC4uLlxyXG4gICAgICAgICAgICBpZihjb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHNbaW5kZXhdLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlSDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldFB1YmxpY0JlZFR5cGVDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfT4pe1xyXG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgY291bnR9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleD1zdGF0ZS5wdWJsaWNCZWRMaXN0LmZpbmRJbmRleCgoYmVkKT0+YmVkLnR5cGU9PT10eXBlKTtcclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcclxuICAgICAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyXhuuLpOuptC4uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdCA9IFsuLi5zdGF0ZS5wdWJsaWNCZWRMaXN0LCB7dHlwZSwgY291bnR9XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7KG07J6sIO2VnOuLpOuptC4uLlxyXG4gICAgICAgICAgICBpZihjb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdFtpbmRleF0uY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyaleyLpCDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG5cclxuICAgICAgICAvLyAqIOyaleyLpCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG5cclxuICAgICAgICBcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm9vbUFjdGlvbnM9ey4uLnJlZ2lzdGVyUm9vbS5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyUm9vbTsiXSwic291cmNlUm9vdCI6IiJ9