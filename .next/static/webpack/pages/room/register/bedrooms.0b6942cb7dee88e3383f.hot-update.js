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
    
        * 숙소등록하기 1단계 (건물, 숙소) Change
    
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
    
        * 숙소등록하기 2단계 (인원, 침대, 공용공간) Change
    
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
    
        * 숙소등록하기 3단계 (욕실) Change
    
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
    
        * 숙소등록하기 4단계 (위치) Change
    
    */
    // * 국가 변경하기
    // * 시도 변경하기
    // * 시군구  변경하기
    // * 도로명주소 변경하기
    // * 동호수 변경하기
    // * 우편번호 변경하기
    // * 위도 변경하기
    // * 경도 변경하기

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJiYXRocm9vbUNvdW50IiwiYmF0aHJvb21UeXBlIiwiY291bnRyeSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInJlZ2lzdGVyUm9vbSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0TGFyZ2VCdWlsZGluZ1R5cGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRCdWlsZGluZ1R5cGUiLCJzZXRSb29tVHlwZSIsInNldElzU2V0VXBGb3JHdWVzdCIsInNldE1heGltdW1HdWVzdENvdW50Iiwic2V0QmVkcm9vbUNvdW50IiwibGVuZ3RoIiwic2xpY2UiLCJpIiwicHVzaCIsImlkIiwiYmVkcyIsInNldEJlZENvdW50Iiwic2V0QmVkVHlwZUNvdW50IiwiYmVkcm9vbUlkIiwidHlwZSIsImNvdW50IiwiYmVkcm9vbSIsInByZXZCZWRzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJiZWQiLCJzcGxpY2UiLCJzZXRQdWJsaWNCZWRUeXBlQ291bnQiLCJzZXRCYXRocm9vbUNvdW50Iiwic2V0QmF0aHJvb21UeXBlIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlDQTtBQUNBLElBQU1BLFlBQStCLEdBQUc7QUFDcEM7QUFDQUMsbUJBQWlCLEVBQUUsSUFGaUI7QUFFSjtBQUNoQ0Ms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RSxDQVU1RTs7O0FBQ0EsVUFBR2tCLEtBQUssS0FBSyxDQUFiLEVBQWU7QUFDWGxCLGFBQUssQ0FBQ2hCLGFBQU4sQ0FBb0J3QyxNQUFwQixDQUEyQkgsS0FBM0IsRUFBa0MsQ0FBbEM7QUFDSCxPQUZELE1BRUs7QUFDRHJCLGFBQUssQ0FBQ2hCLGFBQU4sQ0FBb0JxQyxLQUFwQixFQUEyQkgsS0FBM0IsR0FBbUNBLEtBQW5DO0FBQ0g7O0FBQ0QsYUFBT2xCLEtBQVA7QUFDSCxLQTFHSTs7QUEyR0w7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ0EwQixvQkFqSEssNEJBaUhZMUIsS0FqSFosRUFpSG1CQyxNQWpIbkIsRUFpSGdEO0FBQ2pERCxXQUFLLENBQUNmLGFBQU4sR0FBc0JnQixNQUFNLENBQUNDLE9BQTdCO0FBQ0gsS0FuSEk7QUFvSEw7QUFDQXlCLG1CQXJISywyQkFxSFczQixLQXJIWCxFQXFIa0JDLE1BckhsQixFQXFINkQ7QUFDOURELFdBQUssQ0FBQ2QsWUFBTixHQUFxQmUsTUFBTSxDQUFDQyxPQUE1QjtBQUNIO0FBQ0Q7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcElNO0FBSG9CLENBQUQsQ0FBaEM7QUE4SU8sSUFBTTBCLG1CQUFtQixxQkFBS2pDLFlBQVksQ0FBQ2tDLE9BQWxCLENBQXpCO0FBRVFsQywyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2JlZHJvb21zLjBiNjk0MmNiN2RlZTg4ZTMzODNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QgfSBmcm9tIFwiLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHtCZWRUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVwiO1xyXG5cclxudHlwZSBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDHri6jqs4QgKOqxtOusvCwg7IiZ7IaMKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJvb21UeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgaXNTZXRVcEZvckd1ZXN0OiBib29sZWFuIHwgbnVsbDtcclxuICAgIFxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgMuuLqOqzhCAo7J247JuQLCDsuajrjIAsIOqzteyaqeqzteqwhCkg66as642V7IqkIOyEpOyglVxyXG4gICAgbWF4aW11bUd1ZXN0Q291bnQ6bnVtYmVyO1xyXG4gICAgYmVkcm9vbUNvdW50Om51bWJlcjtcclxuICAgIGJlZENvdW50Om51bWJlcjtcclxuICAgIGJlZExpc3Q6e2lkOm51bWJlcjsgYmVkczp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W119W107XHJcbiAgICBwdWJsaWNCZWRMaXN0Ont0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXTtcclxuICAgIFxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgM+uLqOqzhCAo7JqV7IukKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBiYXRocm9vbUNvdW50Om51bWJlcjtcclxuICAgIGJhdGhyb29tVHlwZTogXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiIHwgbnVsbDtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA064uo6rOEICjsnITsuZgpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGNvdW50cnk6c3RyaW5nO1xyXG4gICAgY2l0eTpzdHJpbmc7XHJcbiAgICBkaXN0cmljdDpzdHJpbmc7XHJcbiAgICBzdHJlZXRBZGRyZXNzOnN0cmluZztcclxuICAgIGRldGFpbEFkZHJlc3M6c3RyaW5nO1xyXG4gICAgcG9zdGNvZGU6c3RyaW5nO1xyXG4gICAgbGF0aXR1ZGU6bnVtYmVyO1xyXG4gICAgbG9uZ2l0dWRlOm51bWJlcjtcclxufTtcclxuXHJcbi8vICog7LSI6riw7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICAvL1xyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IG51bGwsICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg7YGwIOuylOyjvFxyXG4gICAgYnVpbGRpbmdUeXBlOm51bGwsICAgICAgICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJVcclxuICAgIHJvb21UeXBlOiBudWxsLCAgICAgICAgICAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVXHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6bnVsbCwgICAgICAgICAgIC8vICog6rKM7Iqk7Yq466eM7J2EIOychO2VtCDrp4zrk6TslrTsp4Qg7IiZ7IaM7J246rCAP1xyXG4gICAgLy9cclxuICAgIG1heGltdW1HdWVzdENvdW50OjEsICAgICAgICAgICAgLy8gKiDstZzrjIAg7IiZ67CVIOyduOybkFxyXG4gICAgYmVkcm9vbUNvdW50OjAsICAgICAgICAgICAgICAgICAvLyAqIOy5qOyLpCDqsJzsiJhcclxuICAgIGJlZENvdW50OjEsICAgICAgICAgICAgICAgICAgICAgLy8gKiDsuajrjIAg6rCc7IiYXHJcbiAgICBiZWRMaXN0OltdLCAgICAgICAgICAgICAgICAgICAgIC8vICog7Lmo64yAIOycoO2YlVxyXG4gICAgcHVibGljQmVkTGlzdDpbXSwgICAgICAgICAgICAgICAvLyAqIOqzteyaqeqzteqwhCDsuajrjIAg7Jyg7ZiVXHJcbiAgICAvL1xyXG4gICAgYmF0aHJvb21Db3VudDogMSwgICAgICAgICAgICAgICAvLyAqIOyaleyLpCDqsJzsiJhcclxuICAgIGJhdGhyb29tVHlwZTogbnVsbCwgICAgICAgICAgICAgLy8gKiDsmpXsi6Qg7Jyg7ZiVXHJcbiAgICAvL1xyXG4gICAgY291bnRyeTpcIlwiLCAgICAgICAgICAgICAgICAgICAgIC8vICog6rWt6rCAL+yngOyXrVxyXG4gICAgY2l0eTpcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgIC8vICog7IucL+uPhFxyXG4gICAgZGlzdHJpY3Q6XCJcIiwgICAgICAgICAgICAgICAgICAgIC8vICog7IucL+q1sC/qtaxcclxuICAgIHN0cmVldEFkZHJlc3M6XCJcIiwgICAgICAgICAgICAgICAvLyAqIOuPhOuhnOuqheyjvOyGjFxyXG4gICAgZGV0YWlsQWRkcmVzczpcIlwiLCAgICAgICAgICAgICAgIC8vICog64+Z7Zi47IiYXHJcbiAgICBwb3N0Y29kZTpcIlwiLCAgICAgICAgICAgICAgICAgICAgLy8gKiDsmrDtjrjrsojtmLhcclxuICAgIGxhdGl0dWRlOjAsICAgICAgICAgICAgICAgICAgICAgLy8gKiDsnITrj4RcclxuICAgIGxvbmdpdHVkZTowLCAgICAgICAgICAgICAgICAgICAgLy8gKiDqsr3rj4RcclxufTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyUm9vbSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6XCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCAx64uo6rOEICjqsbTrrLwsIOyImeyGjCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyDtgbAg6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXJnZUJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248c3RyaW5nPil7XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkPT09XCJcIil7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGU9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRSb29tVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICogJ+qyjOyKpO2KuOyaqSDsiJnshozsnbjsp4AnIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldElzU2V0VXBGb3JHdWVzdChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248Ym9vbGVhbj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NldFVwRm9yR3Vlc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDstZzrjIAg7IiZ67CVIOyduOybkCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRNYXhpbXVtR3Vlc3RDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLm1heGltdW1HdWVzdENvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDLri6jqs4QgKOyduOybkCwg7Lmo64yALCDqs7Xsmqnqs7XqsIQpIENoYW5nZVxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsuajsi6Qg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZHJvb21Db3VudChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgY29uc3QgYmVkcm9vbUNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGxldCB7IGJlZExpc3QgfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkcm9vbUNvdW50ID0gYmVkcm9vbUNvdW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKGJlZHJvb21Db3VudCA8IGJlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyog6riw7KG0IOy5qOuMgCDqsJzsiJjqsIAg642UIOunjuycvOuptCDstIjqs7zrtoDrtoQg7J6Y652864K06riwXHJcbiAgICAgICAgICAgICAgICBiZWRMaXN0ID0gc3RhdGUuYmVkTGlzdC5zbGljZSgwLCBiZWRyb29tQ291bnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8qIOuzgOqyveuQoCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg64KY66i47KeAIOy5qOyLpCDssYTsmrDquLBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBiZWRMaXN0Lmxlbmd0aCArIDE7IGkgPCBiZWRyb29tQ291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGJlZExpc3QucHVzaCh7IGlkOiBpLCBiZWRzOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkTGlzdCA9IGJlZExpc3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7LWc64yAIOy5qOuMgCDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iZWRDb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy5qOuMgCDsnKDtmJUg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZFR5cGVDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248e2JlZHJvb21JZDpudW1iZXI7IHR5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfT4pe1xyXG4gICAgICAgICAgICBjb25zdCB7YmVkcm9vbUlkLCB0eXBlLCBjb3VudH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc3QgYmVkcm9vbSA9IHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZCZWRzID0gYmVkcm9vbS5iZWRzO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByZXZCZWRzLmZpbmRJbmRleCgoYmVkKSA9PiBiZWQudHlwZSA9PT0gdHlwZSk7XHJcblxyXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7JeG64uk66m0Li4uXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHMgPSBbLi4ucHJldkJlZHMsIHt0eXBlLCBjb3VudH1dO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsobTsnqwg7ZWc64uk66m0Li4uXHJcbiAgICAgICAgICAgIGlmKGNvdW50ID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV0uYmVkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV0uYmVkc1tpbmRleF0uY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqzteyaqeqzteqwhCDsuajrjIAg7Jyg7ZiVIOqwnOyImCDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0UHVibGljQmVkVHlwZUNvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjx7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9Pil7XHJcbiAgICAgICAgICAgIGNvbnN0IHt0eXBlLCBjb3VudH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4PXN0YXRlLnB1YmxpY0JlZExpc3QuZmluZEluZGV4KChiZWQpPT5iZWQudHlwZT09PXR5cGUpO1xyXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7JeG64uk66m0Li4uXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0ID0gWy4uLnN0YXRlLnB1YmxpY0JlZExpc3QsIHt0eXBlLCBjb3VudH1dO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsobTsnqwg7ZWc64uk66m0Li4uXHJcbiAgICAgICAgICAgIGlmKGNvdW50ID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnB1YmxpY0JlZExpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0W2luZGV4XS5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDPri6jqs4QgKOyaleyLpCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIOyaleyLpCDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJhdGhyb29tQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iYXRocm9vbUNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyaleyLpCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJhdGhyb29tVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248XCJwcml2YXRlXCIgfCBcInB1YmxpY1wiPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmJhdGhyb29tVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgNOuLqOqzhCAo7JyE7LmYKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgLy8gKiDqta3qsIAg67OA6rK97ZWY6riwXHJcbiAgICAgICAvLyAqIOyLnOuPhCDrs4Dqsr3tlZjquLBcclxuICAgICAgIC8vICog7Iuc6rWw6rWsICDrs4Dqsr3tlZjquLBcclxuICAgICAgIC8vICog64+E66Gc66qF7KO87IaMIOuzgOqyve2VmOq4sFxyXG4gICAgICAgLy8gKiDrj5ntmLjsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAvLyAqIOyasO2OuOuyiO2YuCDrs4Dqsr3tlZjquLBcclxuICAgICAgIC8vICog7JyE64+EIOuzgOqyve2VmOq4sFxyXG4gICAgICAgLy8gKiDqsr3rj4Qg67OA6rK97ZWY6riwXHJcbiAgICB9LFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclJvb21BY3Rpb25zPXsuLi5yZWdpc3RlclJvb20uYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==