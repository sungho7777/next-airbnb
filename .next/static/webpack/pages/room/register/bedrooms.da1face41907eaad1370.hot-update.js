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
  //
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
  bathroomType: null,
  // * 욕실 유형
  //
  country: "",
  // * 
  city: "",
  // * 
  district: "",
  // * 
  streetAddress: "",
  // * 
  detailAddress: "",
  // * 
  postcode: "",
  // * 
  latitude: 0,
  // * 
  longitude: 0 // * 

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
    },
    // * 욕실 개수 변경하기.
    setBathroomCount: function setBathroomCount(state, action) {
      state.bathroomCount = action.payload;
    },
    // * 욕실 유형 변경하기.
    setBathroomType: function setBathroomType(state, action) {
      state.bathroomType = action.payload;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJiYXRocm9vbUNvdW50IiwiYmF0aHJvb21UeXBlIiwiY291bnRyeSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInJlZ2lzdGVyUm9vbSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0TGFyZ2VCdWlsZGluZ1R5cGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRCdWlsZGluZ1R5cGUiLCJzZXRSb29tVHlwZSIsInNldElzU2V0VXBGb3JHdWVzdCIsInNldE1heGltdW1HdWVzdENvdW50Iiwic2V0QmVkcm9vbUNvdW50IiwibGVuZ3RoIiwic2xpY2UiLCJpIiwicHVzaCIsImlkIiwiYmVkcyIsInNldEJlZENvdW50Iiwic2V0QmVkVHlwZUNvdW50IiwiYmVkcm9vbUlkIiwidHlwZSIsImNvdW50IiwiYmVkcm9vbSIsInByZXZCZWRzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJiZWQiLCJzcGxpY2UiLCJzZXRQdWJsaWNCZWRUeXBlQ291bnQiLCJzZXRCYXRocm9vbUNvdW50Iiwic2V0QmF0aHJvb21UeXBlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlDQTtBQUNBLElBQU1BLFlBQStCLEdBQUc7QUFDcEM7QUFDQUMsbUJBQWlCLEVBQUUsSUFGaUI7QUFFSjtBQUNoQ0Ms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QUssQ0FBQ2hCLGFBQU4sQ0FBb0J3QyxNQUFwQixDQUEyQkgsS0FBM0IsRUFBa0MsQ0FBbEM7QUFDSCxPQUZELE1BRUs7QUFDRHJCLGFBQUssQ0FBQ2hCLGFBQU4sQ0FBb0JxQyxLQUFwQixFQUEyQkgsS0FBM0IsR0FBbUNBLEtBQW5DO0FBQ0g7O0FBQ0QsYUFBT2xCLEtBQVA7QUFDSCxLQWhHSTtBQWlHTDtBQUNBMEIsb0JBbEdLLDRCQWtHWTFCLEtBbEdaLEVBa0dtQkMsTUFsR25CLEVBa0dnRDtBQUNqREQsV0FBSyxDQUFDZixhQUFOLEdBQXNCZ0IsTUFBTSxDQUFDQyxPQUE3QjtBQUNILEtBcEdJO0FBcUdMO0FBQ0F5QixtQkF0R0ssMkJBc0dXM0IsS0F0R1gsRUFzR2tCQyxNQXRHbEIsRUFzRzZEO0FBQzlERCxXQUFLLENBQUNkLFlBQU4sR0FBcUJlLE1BQU0sQ0FBQ0MsT0FBNUI7QUFDSDtBQXhHSTtBQUhvQixDQUFELENBQWhDO0FBa0hPLElBQU0wQixtQkFBbUIscUJBQUtqQyxZQUFZLENBQUNrQyxPQUFsQixDQUF6QjtBQUVRbEMsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9iZWRyb29tcy5kYTFmYWNlNDE5MDdlYWFkMTM3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7QmVkVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Jvb21cIjtcclxuXHJcbnR5cGUgUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAx64uo6rOEICjqsbTrrLwsIOyImeyGjCkg66as642V7IqkIOyEpOyglVxyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBidWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICByb29tVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGlzU2V0VXBGb3JHdWVzdDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDLri6jqs4QgKOyduOybkCwg7Lmo64yALCDqs7Xsmqnqs7XqsIQpIOumrOuNleyKpCDshKTsoJVcclxuICAgIG1heGltdW1HdWVzdENvdW50Om51bWJlcjtcclxuICAgIGJlZHJvb21Db3VudDpudW1iZXI7XHJcbiAgICBiZWRDb3VudDpudW1iZXI7XHJcbiAgICBiZWRMaXN0OntpZDpudW1iZXI7IGJlZHM6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdfVtdO1xyXG4gICAgcHVibGljQmVkTGlzdDp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W107XHJcbiAgICBcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDPri6jqs4QgKOyaleyLpCkg66as642V7IqkIOyEpOyglVxyXG4gICAgYmF0aHJvb21Db3VudDpudW1iZXI7XHJcbiAgICBiYXRocm9vbVR5cGU6IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIiB8IG51bGw7XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgNOuLqOqzhCAo7JyE7LmYKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBjb3VudHJ5OnN0cmluZztcclxuICAgIGNpdHk6c3RyaW5nO1xyXG4gICAgZGlzdHJpY3Q6c3RyaW5nO1xyXG4gICAgc3RyZWV0QWRkcmVzczpzdHJpbmc7XHJcbiAgICBkZXRhaWxBZGRyZXNzOnN0cmluZztcclxuICAgIHBvc3Rjb2RlOnN0cmluZztcclxuICAgIGxhdGl0dWRlOm51bWJlcjtcclxuICAgIGxvbmdpdHVkZTpudW1iZXI7XHJcbn07XHJcblxyXG4vLyAqIOy0iOq4sOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgLy9cclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBudWxsLCAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVIO2BsCDrspTso7xcclxuICAgIGJ1aWxkaW5nVHlwZTpudWxsLCAgICAgICAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVXHJcbiAgICByb29tVHlwZTogbnVsbCwgICAgICAgICAgICAgICAgIC8vICog7IiZ7IaMIOycoO2YlVxyXG4gICAgaXNTZXRVcEZvckd1ZXN0Om51bGwsICAgICAgICAgICAvLyAqIOqyjOyKpO2KuOunjOydhCDsnITtlbQg66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgD9cclxuICAgIC8vXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDoxLCAgICAgICAgICAgIC8vICog7LWc64yAIOyImeuwlSDsnbjsm5BcclxuICAgIGJlZHJvb21Db3VudDowLCAgICAgICAgICAgICAgICAgLy8gKiDsuajsi6Qg6rCc7IiYXHJcbiAgICBiZWRDb3VudDoxLCAgICAgICAgICAgICAgICAgICAgIC8vICog7Lmo64yAIOqwnOyImFxyXG4gICAgYmVkTGlzdDpbXSwgICAgICAgICAgICAgICAgICAgICAvLyAqIOy5qOuMgCDsnKDtmJVcclxuICAgIHB1YmxpY0JlZExpc3Q6W10sICAgICAgICAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlVxyXG4gICAgLy9cclxuICAgIGJhdGhyb29tQ291bnQ6IDEsICAgICAgICAgICAgICAgLy8gKiDsmpXsi6Qg6rCc7IiYXHJcbiAgICBiYXRocm9vbVR5cGU6IG51bGwsICAgICAgICAgICAgIC8vICog7JqV7IukIOycoO2YlVxyXG4gICAgLy9cclxuICAgIGNvdW50cnk6XCJcIiwgICAgICAgICAgICAgICAgICAgICAvLyAqIFxyXG4gICAgY2l0eTpcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgIC8vICogXHJcbiAgICBkaXN0cmljdDpcIlwiLCAgICAgICAgICAgICAgICAgICAgLy8gKiBcclxuICAgIHN0cmVldEFkZHJlc3M6XCJcIiwgICAgICAgICAgICAgICAvLyAqIFxyXG4gICAgZGV0YWlsQWRkcmVzczpcIlwiLCAgICAgICAgICAgICAgIC8vICogXHJcbiAgICBwb3N0Y29kZTpcIlwiLCAgICAgICAgICAgICAgICAgICAgLy8gKiBcclxuICAgIGxhdGl0dWRlOjAsICAgICAgICAgICAgICAgICAgICAgLy8gKiBcclxuICAgIGxvbmdpdHVkZTowLCAgICAgICAgICAgICAgICAgICAgLy8gKiBcclxufTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyUm9vbSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6XCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICAvLyDtgbAg6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXJnZUJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248c3RyaW5nPil7XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkPT09XCJcIil7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGU9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRSb29tVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICogJ+qyjOyKpO2KuOyaqSDsiJnshozsnbjsp4AnIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldElzU2V0VXBGb3JHdWVzdChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248Ym9vbGVhbj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NldFVwRm9yR3Vlc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDstZzrjIAg7IiZ67CVIOyduOybkCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRNYXhpbXVtR3Vlc3RDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLm1heGltdW1HdWVzdENvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7Lmo7IukIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRyb29tQ291bnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb21Db3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBsZXQgeyBiZWRMaXN0IH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZHJvb21Db3VudCA9IGJlZHJvb21Db3VudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChiZWRyb29tQ291bnQgPCBiZWRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8qIOq4sOyhtCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg7LSI6rO867aA67aEIOyemOudvOuCtOq4sFxyXG4gICAgICAgICAgICAgICAgYmVkTGlzdCA9IHN0YXRlLmJlZExpc3Quc2xpY2UoMCwgYmVkcm9vbUNvdW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vKiDrs4Dqsr3rkKAg7Lmo64yAIOqwnOyImOqwgCDrjZQg66eO7Jy866m0IOuCmOuouOyngCDsuajsi6Qg7LGE7Jqw6riwXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYmVkTGlzdC5sZW5ndGggKyAxOyBpIDwgYmVkcm9vbUNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBiZWRMaXN0LnB1c2goeyBpZDogaSwgYmVkczogW10gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZExpc3QgPSBiZWRMaXN0O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy1nOuMgCDsuajrjIAg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZENvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUuYmVkQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsuajrjIAg7Jyg7ZiVIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRUeXBlQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPHtiZWRyb29tSWQ6bnVtYmVyOyB0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn0+KXtcclxuICAgICAgICAgICAgY29uc3Qge2JlZHJvb21JZCwgdHlwZSwgY291bnR9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb20gPSBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2QmVkcyA9IGJlZHJvb20uYmVkcztcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2QmVkcy5maW5kSW5kZXgoKGJlZCkgPT4gYmVkLnR5cGUgPT09IHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcclxuICAgICAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyXhuuLpOuptC4uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzID0gWy4uLnByZXZCZWRzLCB7dHlwZSwgY291bnR9XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7KG07J6sIO2VnOuLpOuptC4uLlxyXG4gICAgICAgICAgICBpZihjb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHNbaW5kZXhdLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlSDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldFB1YmxpY0JlZFR5cGVDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfT4pe1xyXG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgY291bnR9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleD1zdGF0ZS5wdWJsaWNCZWRMaXN0LmZpbmRJbmRleCgoYmVkKT0+YmVkLnR5cGU9PT10eXBlKTtcclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcclxuICAgICAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyXhuuLpOuptC4uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdCA9IFsuLi5zdGF0ZS5wdWJsaWNCZWRMaXN0LCB7dHlwZSwgY291bnR9XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7KG07J6sIO2VnOuLpOuptC4uLlxyXG4gICAgICAgICAgICBpZihjb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdFtpbmRleF0uY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyaleyLpCDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJhdGhyb29tQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iYXRocm9vbUNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyaleyLpCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJhdGhyb29tVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248XCJwcml2YXRlXCIgfCBcInB1YmxpY1wiPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmJhdGhyb29tVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclJvb21BY3Rpb25zPXsuLi5yZWdpc3RlclJvb20uYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==