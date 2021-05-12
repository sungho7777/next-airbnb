webpackHotUpdate_N_E("pages/room/register/bathroom",{

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
  // * 국가/지역
  city: "",
  // * 시/도
  district: "",
  // * 시/군/구
  streetAddress: "",
  // * 도로명주소
  detailAddress: "",
  // * 동호수
  postcode: "",
  // * 우편번호
  latitude: 0,
  // * 위도
  longitude: 0 // * 경도

};
var registerRoom = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["createSlice"])({
  name: "registerRoom",
  initialState: initialState,
  reducers: {
    /*
    
        * 숙소등록하기 1단계 (건물, 숙소) set
    
    */
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

    /*
    
        * 숙소등록하기 2단계 (인원, 침대, 공용공간) set
    
    */
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

    /*
    
        * 숙소등록하기 3단계 (욕실) set
    
    */
    // * 욕실 개수 변경하기.
    setBathroomCount: function setBathroomCount(state, action) {
      state.bathroomCount = action.payload;
    },
    // * 욕실 유형 변경하기.
    setBathroomType: function setBathroomType(state, action) {
      state.bathroomType = action.payload;
    }
    /*
    
        * 숙소등록하기 4단계 (위치) set
    
    */
    // * dd
    // * dd
    // * dd
    // * dd
    // * dd
    // * dd
    // * dd

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJiYXRocm9vbUNvdW50IiwiYmF0aHJvb21UeXBlIiwiY291bnRyeSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInJlZ2lzdGVyUm9vbSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0TGFyZ2VCdWlsZGluZ1R5cGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRCdWlsZGluZ1R5cGUiLCJzZXRSb29tVHlwZSIsInNldElzU2V0VXBGb3JHdWVzdCIsInNldE1heGltdW1HdWVzdENvdW50Iiwic2V0QmVkcm9vbUNvdW50IiwibGVuZ3RoIiwic2xpY2UiLCJpIiwicHVzaCIsImlkIiwiYmVkcyIsInNldEJlZENvdW50Iiwic2V0QmVkVHlwZUNvdW50IiwiYmVkcm9vbUlkIiwidHlwZSIsImNvdW50IiwiYmVkcm9vbSIsInByZXZCZWRzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJiZWQiLCJzcGxpY2UiLCJzZXRQdWJsaWNCZWRUeXBlQ291bnQiLCJzZXRCYXRocm9vbUNvdW50Iiwic2V0QmF0aHJvb21UeXBlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlDQTtBQUNBLElBQU1BLFlBQStCLEdBQUc7QUFDcEM7QUFDQUMsbUJBQWlCLEVBQUUsSUFGaUI7QUFFSjtBQUNoQ0Ms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RSxDQVU1RTs7O0FBQ0EsVUFBR2tCLEtBQUssS0FBSyxDQUFiLEVBQWU7QUFDWGxCLGFBQUssQ0FBQ2hCLGFBQU4sQ0FBb0J3QyxNQUFwQixDQUEyQkgsS0FBM0IsRUFBa0MsQ0FBbEM7QUFDSCxPQUZELE1BRUs7QUFDRHJCLGFBQUssQ0FBQ2hCLGFBQU4sQ0FBb0JxQyxLQUFwQixFQUEyQkgsS0FBM0IsR0FBbUNBLEtBQW5DO0FBQ0g7O0FBQ0QsYUFBT2xCLEtBQVA7QUFDSCxLQTFHSTs7QUEyR0w7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ0EwQixvQkFqSEssNEJBaUhZMUIsS0FqSFosRUFpSG1CQyxNQWpIbkIsRUFpSGdEO0FBQ2pERCxXQUFLLENBQUNmLGFBQU4sR0FBc0JnQixNQUFNLENBQUNDLE9BQTdCO0FBQ0gsS0FuSEk7QUFvSEw7QUFDQXlCLG1CQXJISywyQkFxSFczQixLQXJIWCxFQXFIa0JDLE1BckhsQixFQXFINkQ7QUFDOURELFdBQUssQ0FBQ2QsWUFBTixHQUFxQmUsTUFBTSxDQUFDQyxPQUE1QjtBQUNIO0FBQ0Q7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW5JTTtBQUhvQixDQUFELENBQWhDO0FBNklPLElBQU0wQixtQkFBbUIscUJBQUtqQyxZQUFZLENBQUNrQyxPQUFsQixDQUF6QjtBQUVRbEMsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9yZWdpc3Rlci9iYXRocm9vbS44MTIwMjU3MTdlODNjOGUxM2NmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7QmVkVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Jvb21cIjtcclxuXHJcbnR5cGUgUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAx64uo6rOEICjqsbTrrLwsIOyImeyGjCkg66as642V7IqkIOyEpOyglVxyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBidWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICByb29tVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGlzU2V0VXBGb3JHdWVzdDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDLri6jqs4QgKOyduOybkCwg7Lmo64yALCDqs7Xsmqnqs7XqsIQpIOumrOuNleyKpCDshKTsoJVcclxuICAgIG1heGltdW1HdWVzdENvdW50Om51bWJlcjtcclxuICAgIGJlZHJvb21Db3VudDpudW1iZXI7XHJcbiAgICBiZWRDb3VudDpudW1iZXI7XHJcbiAgICBiZWRMaXN0OntpZDpudW1iZXI7IGJlZHM6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdfVtdO1xyXG4gICAgcHVibGljQmVkTGlzdDp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W107XHJcbiAgICBcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDPri6jqs4QgKOyaleyLpCkg66as642V7IqkIOyEpOyglVxyXG4gICAgYmF0aHJvb21Db3VudDpudW1iZXI7XHJcbiAgICBiYXRocm9vbVR5cGU6IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIiB8IG51bGw7XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgNOuLqOqzhCAo7JyE7LmYKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBjb3VudHJ5OnN0cmluZztcclxuICAgIGNpdHk6c3RyaW5nO1xyXG4gICAgZGlzdHJpY3Q6c3RyaW5nO1xyXG4gICAgc3RyZWV0QWRkcmVzczpzdHJpbmc7XHJcbiAgICBkZXRhaWxBZGRyZXNzOnN0cmluZztcclxuICAgIHBvc3Rjb2RlOnN0cmluZztcclxuICAgIGxhdGl0dWRlOm51bWJlcjtcclxuICAgIGxvbmdpdHVkZTpudW1iZXI7XHJcbn07XHJcblxyXG4vLyAqIOy0iOq4sOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgLy9cclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBudWxsLCAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVIO2BsCDrspTso7xcclxuICAgIGJ1aWxkaW5nVHlwZTpudWxsLCAgICAgICAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVXHJcbiAgICByb29tVHlwZTogbnVsbCwgICAgICAgICAgICAgICAgIC8vICog7IiZ7IaMIOycoO2YlVxyXG4gICAgaXNTZXRVcEZvckd1ZXN0Om51bGwsICAgICAgICAgICAvLyAqIOqyjOyKpO2KuOunjOydhCDsnITtlbQg66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgD9cclxuICAgIC8vXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDoxLCAgICAgICAgICAgIC8vICog7LWc64yAIOyImeuwlSDsnbjsm5BcclxuICAgIGJlZHJvb21Db3VudDowLCAgICAgICAgICAgICAgICAgLy8gKiDsuajsi6Qg6rCc7IiYXHJcbiAgICBiZWRDb3VudDoxLCAgICAgICAgICAgICAgICAgICAgIC8vICog7Lmo64yAIOqwnOyImFxyXG4gICAgYmVkTGlzdDpbXSwgICAgICAgICAgICAgICAgICAgICAvLyAqIOy5qOuMgCDsnKDtmJVcclxuICAgIHB1YmxpY0JlZExpc3Q6W10sICAgICAgICAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlVxyXG4gICAgLy9cclxuICAgIGJhdGhyb29tQ291bnQ6IDEsICAgICAgICAgICAgICAgLy8gKiDsmpXsi6Qg6rCc7IiYXHJcbiAgICBiYXRocm9vbVR5cGU6IG51bGwsICAgICAgICAgICAgIC8vICog7JqV7IukIOycoO2YlVxyXG4gICAgLy9cclxuICAgIGNvdW50cnk6XCJcIiwgICAgICAgICAgICAgICAgICAgICAvLyAqIOq1reqwgC/sp4Dsl61cclxuICAgIGNpdHk6XCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIOyLnC/rj4RcclxuICAgIGRpc3RyaWN0OlwiXCIsICAgICAgICAgICAgICAgICAgICAvLyAqIOyLnC/qtbAv6rWsXHJcbiAgICBzdHJlZXRBZGRyZXNzOlwiXCIsICAgICAgICAgICAgICAgLy8gKiDrj4TroZzrqoXso7zshoxcclxuICAgIGRldGFpbEFkZHJlc3M6XCJcIiwgICAgICAgICAgICAgICAvLyAqIOuPme2YuOyImFxyXG4gICAgcG9zdGNvZGU6XCJcIiwgICAgICAgICAgICAgICAgICAgIC8vICog7Jqw7Y6467KI7Zi4XHJcbiAgICBsYXRpdHVkZTowLCAgICAgICAgICAgICAgICAgICAgIC8vICog7JyE64+EXHJcbiAgICBsb25naXR1ZGU6MCwgICAgICAgICAgICAgICAgICAgIC8vICog6rK964+EXHJcbn07XHJcblxyXG5jb25zdCByZWdpc3RlclJvb20gPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOlwicmVnaXN0ZXJSb29tXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczp7XHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgMeuLqOqzhCAo6rG066y8LCDsiJnshowpIHNldFxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8g7YGwIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TGFyZ2VCdWlsZGluZ1R5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICBpZihhY3Rpb24ucGF5bG9hZCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXJnZUJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGF0ZS5sYXJnZUJ1aWxkaW5nVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRCdWlsZGluZ1R5cGUoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPHN0cmluZz4pe1xyXG4gICAgICAgICAgICBpZihhY3Rpb24ucGF5bG9hZD09PVwiXCIpe1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYnVpbGRpbmdUeXBlPW51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuYnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7IiZ7IaMIOycoO2YlSDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0Um9vbVR5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxcImVudGlyZVwiIHwgXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5yb29tVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqICfqsozsiqTtirjsmqkg7IiZ7IaM7J247KeAJyDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRJc1NldFVwRm9yR3Vlc3Qoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KXtcclxuICAgICAgICAgICAgc3RhdGUuaXNTZXRVcEZvckd1ZXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7LWc64yAIOyImeuwlSDsnbjsm5Ag67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TWF4aW11bUd1ZXN0Q291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5tYXhpbXVtR3Vlc3RDb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCAy64uo6rOEICjsnbjsm5AsIOy5qOuMgCwg6rO17Jqp6rO16rCEKSBzZXRcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7Lmo7IukIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRyb29tQ291bnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb21Db3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBsZXQgeyBiZWRMaXN0IH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZHJvb21Db3VudCA9IGJlZHJvb21Db3VudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChiZWRyb29tQ291bnQgPCBiZWRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8qIOq4sOyhtCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg7LSI6rO867aA67aEIOyemOudvOuCtOq4sFxyXG4gICAgICAgICAgICAgICAgYmVkTGlzdCA9IHN0YXRlLmJlZExpc3Quc2xpY2UoMCwgYmVkcm9vbUNvdW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vKiDrs4Dqsr3rkKAg7Lmo64yAIOqwnOyImOqwgCDrjZQg66eO7Jy866m0IOuCmOuouOyngCDsuajsi6Qg7LGE7Jqw6riwXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYmVkTGlzdC5sZW5ndGggKyAxOyBpIDwgYmVkcm9vbUNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBiZWRMaXN0LnB1c2goeyBpZDogaSwgYmVkczogW10gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZExpc3QgPSBiZWRMaXN0O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy1nOuMgCDsuajrjIAg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZENvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUuYmVkQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsuajrjIAg7Jyg7ZiVIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRUeXBlQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPHtiZWRyb29tSWQ6bnVtYmVyOyB0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn0+KXtcclxuICAgICAgICAgICAgY29uc3Qge2JlZHJvb21JZCwgdHlwZSwgY291bnR9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb20gPSBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2QmVkcyA9IGJlZHJvb20uYmVkcztcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2QmVkcy5maW5kSW5kZXgoKGJlZCkgPT4gYmVkLnR5cGUgPT09IHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcclxuICAgICAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyXhuuLpOuptC4uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzID0gWy4uLnByZXZCZWRzLCB7dHlwZSwgY291bnR9XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7KG07J6sIO2VnOuLpOuptC4uLlxyXG4gICAgICAgICAgICBpZihjb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHNbaW5kZXhdLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlSDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldFB1YmxpY0JlZFR5cGVDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfT4pe1xyXG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgY291bnR9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleD1zdGF0ZS5wdWJsaWNCZWRMaXN0LmZpbmRJbmRleCgoYmVkKT0+YmVkLnR5cGU9PT10eXBlKTtcclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcclxuICAgICAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyXhuuLpOuptC4uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdCA9IFsuLi5zdGF0ZS5wdWJsaWNCZWRMaXN0LCB7dHlwZSwgY291bnR9XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7KG07J6sIO2VnOuLpOuptC4uLlxyXG4gICAgICAgICAgICBpZihjb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdFtpbmRleF0uY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCAz64uo6rOEICjsmpXsi6QpIHNldFxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsmpXsi6Qg6rCc7IiYIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRCYXRocm9vbUNvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUuYmF0aHJvb21Db3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsmpXsi6Qg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRCYXRocm9vbVR5cGUoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iYXRocm9vbVR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDTri6jqs4QgKOychOy5mCkgc2V0XHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgIC8vICogZGRcclxuICAgICAgIC8vICogZGRcclxuICAgICAgIC8vICogZGRcclxuICAgICAgIC8vICogZGRcclxuICAgICAgIC8vICogZGRcclxuICAgICAgIC8vICogZGRcclxuICAgICAgIC8vICogZGRcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm9vbUFjdGlvbnM9ey4uLnJlZ2lzdGVyUm9vbS5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyUm9vbTsiXSwic291cmNlUm9vdCI6IiJ9