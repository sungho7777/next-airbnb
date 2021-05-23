webpackHotUpdate_N_E("pages/room/register/description",{

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
  longitude: 0,
  // * 경도
  //
  amentities: [],
  // * 편의시설
  //
  conveniences: [],
  // * 편의공간
  //
  photos: [],
  // * 숙소사진
  //
  description: "",
  // * 숙소설명
  //
  title: "" // * 제목

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
    },

    /*
    
        * 숙소등록하기 4단계 (위치) Change
    
    */
    // * 국가 변경하기
    setCountry: function setCountry(state, action) {
      state.country = action.payload;
    },
    // * 시도 변경하기
    setCity: function setCity(state, action) {
      state.city = action.payload;
    },
    // * 시군구  변경하기
    setDistrict: function setDistrict(state, action) {
      state.district = action.payload;
    },
    // * 도로명주소 변경하기
    setStreetAddress: function setStreetAddress(state, action) {
      state.streetAddress = action.payload;
    },
    // * 동호수 변경하기
    setDetailAddress: function setDetailAddress(state, action) {
      state.detailAddress = action.payload;
    },
    // * 우편번호 변경하기
    setPostcode: function setPostcode(state, action) {
      state.postcode = action.payload;
    },
    // * 위도 변경하기
    setLatitude: function setLatitude(state, action) {
      state.latitude = action.payload;
    },
    // * 경도 변경하기
    setLongitude: function setLongitude(state, action) {
      state.longitude = action.payload;
    },

    /*
    
        * 숙소등록하기 5단계 (편의시설) Change
    
    */
    // * 편의 시설 변경하기
    setAmentities: function setAmentities(state, action) {
      state.amentities = action.payload;
    },

    /*
    
        * 숙소등록하기 6단계 (편의공간) Change
    
    */
    // * 편의 공간 변경하기
    setConveniences: function setConveniences(state, action) {
      state.conveniences = action.payload;
    },

    /*
    
        * 숙소등록하기 7단계 (숙소사진) photo
    
    */
    // * 숙소 사진 변경하기
    setPhotos: function setPhotos(state, action) {
      state.photos = action.payload;
    },

    /*
    
        * 숙소등록하기 8단계 (숙소설명) description
    
    */
    // * 숙소 설명 변경하기
    setDescription: function setDescription(state, action) {
      state.description = action.payload;
    },

    /*
    
        * 숙소등록하기 9단계 (제목) description
    
    */
    // * 숙소 제목 변경하기
    setTitle: function setTitle(state, action) {
      state.title = action.payload;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJiYXRocm9vbUNvdW50IiwiYmF0aHJvb21UeXBlIiwiY291bnRyeSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImFtZW50aXRpZXMiLCJjb252ZW5pZW5jZXMiLCJwaG90b3MiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwicmVnaXN0ZXJSb29tIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRMYXJnZUJ1aWxkaW5nVHlwZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEJ1aWxkaW5nVHlwZSIsInNldFJvb21UeXBlIiwic2V0SXNTZXRVcEZvckd1ZXN0Iiwic2V0TWF4aW11bUd1ZXN0Q291bnQiLCJzZXRCZWRyb29tQ291bnQiLCJsZW5ndGgiLCJzbGljZSIsImkiLCJwdXNoIiwiaWQiLCJiZWRzIiwic2V0QmVkQ291bnQiLCJzZXRCZWRUeXBlQ291bnQiLCJiZWRyb29tSWQiLCJ0eXBlIiwiY291bnQiLCJiZWRyb29tIiwicHJldkJlZHMiLCJpbmRleCIsImZpbmRJbmRleCIsImJlZCIsInNwbGljZSIsInNldFB1YmxpY0JlZFR5cGVDb3VudCIsInNldEJhdGhyb29tQ291bnQiLCJzZXRCYXRocm9vbVR5cGUiLCJzZXRDb3VudHJ5Iiwic2V0Q2l0eSIsInNldERpc3RyaWN0Iiwic2V0U3RyZWV0QWRkcmVzcyIsInNldERldGFpbEFkZHJlc3MiLCJzZXRQb3N0Y29kZSIsInNldExhdGl0dWRlIiwic2V0TG9uZ2l0dWRlIiwic2V0QW1lbnRpdGllcyIsInNldENvbnZlbmllbmNlcyIsInNldFBob3RvcyIsInNldERlc2NyaXB0aW9uIiwic2V0VGl0bGUiLCJyZWdpc3RlclJvb21BY3Rpb25zIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0RBO0FBQ0EsSUFBTUEsWUFBK0IsR0FBRztBQUNwQztBQUNBQyxtQkFBaUIsRUFBRSxJQUZpQjtBQUVKO0FBQ2hDQyxjQUFZLEVBQUMsSUFIdUI7QUFHSjtBQUNoQ0MsVUFBUSxFQUFFLElBSjBCO0FBSUo7QUFDaENDLGlCQUFlLEVBQUMsSUFMb0I7QUFLSjtBQUNoQztBQUNBQyxtQkFBaUIsRUFBQyxDQVBrQjtBQU9KO0FBQ2hDQyxjQUFZLEVBQUMsQ0FSdUI7QUFRSjtBQUNoQ0MsVUFBUSxFQUFDLENBVDJCO0FBU0o7QUFDaENDLFNBQU8sRUFBQyxFQVY0QjtBQVVKO0FBQ2hDQyxlQUFhLEVBQUMsRUFYc0I7QUFXSjtBQUNoQztBQUNBQyxlQUFhLEVBQUUsQ0FicUI7QUFhSjtBQUNoQ0MsY0FBWSxFQUFFLElBZHNCO0FBY0o7QUFDaEM7QUFDQUMsU0FBTyxFQUFDLEVBaEI0QjtBQWdCSjtBQUNoQ0MsTUFBSSxFQUFDLEVBakIrQjtBQWlCSjtBQUNoQ0MsVUFBUSxFQUFDLEVBbEIyQjtBQWtCSjtBQUNoQ0MsZUFBYSxFQUFDLEVBbkJzQjtBQW1CSjtBQUNoQ0MsZUFBYSxFQUFDLEVBcEJzQjtBQW9CSjtBQUNoQ0MsVUFBUSxFQUFDLEVBckIyQjtBQXFCSjtBQUNoQ0MsVUFBUSxFQUFDLENBdEIyQjtBQXNCSjtBQUNoQ0MsV0FBUyxFQUFDLENBdkIwQjtBQXVCSjtBQUNoQztBQUNBQyxZQUFVLEVBQUMsRUF6QnlCO0FBeUJKO0FBQ2hDO0FBQ0FDLGNBQVksRUFBQyxFQTNCdUI7QUEyQko7QUFDaEM7QUFDQUMsUUFBTSxFQUFDLEVBN0I2QjtBQTZCSjtBQUNoQztBQUNBQyxh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QUFOLEdBQWtCWSxNQUFNLENBQUNDLE9BQXpCO0FBQ0gsS0E1Skk7O0FBNkpMO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNDa0MsaUJBbktLLHlCQW1LU3BDLEtBbktULEVBbUtnQkMsTUFuS2hCLEVBbUtpRDtBQUNsREQsV0FBSyxDQUFDVixVQUFOLEdBQW1CVyxNQUFNLENBQUNDLE9BQTFCO0FBQ0gsS0FyS0k7O0FBc0tMO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNBbUMsbUJBNUtLLDJCQTRLV3JDLEtBNUtYLEVBNEtrQkMsTUE1S2xCLEVBNEttRDtBQUNwREQsV0FBSyxDQUFDVCxZQUFOLEdBQXFCVSxNQUFNLENBQUNDLE9BQTVCO0FBQ0gsS0E5S0k7O0FBK0tMO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNBb0MsYUFyTEsscUJBcUxLdEMsS0FyTEwsRUFxTFlDLE1BckxaLEVBcUw2QztBQUM5Q0QsV0FBSyxDQUFDUixNQUFOLEdBQWVTLE1BQU0sQ0FBQ0MsT0FBdEI7QUFDSCxLQXZMSTs7QUF3TEw7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ0FxQyxrQkE5TEssMEJBOExVdkMsS0E5TFYsRUE4TGlCQyxNQTlMakIsRUE4TGdEO0FBQ2pERCxXQUFLLENBQUNQLFdBQU4sR0FBb0JRLE1BQU0sQ0FBQ0MsT0FBM0I7QUFDSCxLQWhNSTs7QUFpTUw7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ0FzQyxZQXZNSyxvQkF1TUl4QyxLQXZNSixFQXVNV0MsTUF2TVgsRUF1TTBDO0FBQzNDRCxXQUFLLENBQUNOLEtBQU4sR0FBY08sTUFBTSxDQUFDQyxPQUFyQjtBQUNIO0FBek1JO0FBSG9CLENBQUQsQ0FBaEM7QUF5Tk8sSUFBTXVDLG1CQUFtQixxQkFBSzlDLFlBQVksQ0FBQytDLE9BQWxCLENBQXpCO0FBRVEvQywyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL3JlZ2lzdGVyL2Rlc2NyaXB0aW9uLjNlOTliZmIzOTU1ZTEwZGJkY2RjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QgfSBmcm9tIFwiLi4vbGliL3N0YXRpY0RhdGFcIjtcclxuaW1wb3J0IHtCZWRUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVwiO1xyXG5cclxudHlwZSBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDHri6jqs4QgKOqxtOusvCwg7IiZ7IaMKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJvb21UeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgaXNTZXRVcEZvckd1ZXN0OiBib29sZWFuIHwgbnVsbDtcclxuICAgIFxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgMuuLqOqzhCAo7J247JuQLCDsuajrjIAsIOqzteyaqeqzteqwhCkg66as642V7IqkIOyEpOyglVxyXG4gICAgbWF4aW11bUd1ZXN0Q291bnQ6bnVtYmVyO1xyXG4gICAgYmVkcm9vbUNvdW50Om51bWJlcjtcclxuICAgIGJlZENvdW50Om51bWJlcjtcclxuICAgIGJlZExpc3Q6e2lkOm51bWJlcjsgYmVkczp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W119W107XHJcbiAgICBwdWJsaWNCZWRMaXN0Ont0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXTtcclxuICAgIFxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgM+uLqOqzhCAo7JqV7IukKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBiYXRocm9vbUNvdW50Om51bWJlcjtcclxuICAgIGJhdGhyb29tVHlwZTogXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiIHwgbnVsbDtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA064uo6rOEICjsnITsuZgpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGNvdW50cnk6c3RyaW5nO1xyXG4gICAgY2l0eTpzdHJpbmc7XHJcbiAgICBkaXN0cmljdDpzdHJpbmc7XHJcbiAgICBzdHJlZXRBZGRyZXNzOnN0cmluZztcclxuICAgIGRldGFpbEFkZHJlc3M6c3RyaW5nO1xyXG4gICAgcG9zdGNvZGU6c3RyaW5nO1xyXG4gICAgbGF0aXR1ZGU6bnVtYmVyO1xyXG4gICAgbG9uZ2l0dWRlOm51bWJlcjtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA164uo6rOEICjtjrjsnZjsi5zshKQpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGFtZW50aXRpZXM6c3RyaW5nW107XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgNuuLqOqzhCAo7Y647J2Y6rO16rCEKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBjb252ZW5pZW5jZXM6c3RyaW5nW107XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgN+uLqOqzhCAo7IiZ7IaM7IKs7KeEKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBwaG90b3M6c3RyaW5nW107XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgOOuLqOqzhCAo7IiZ7IaM7ISk66qFKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmc7XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgOeuLqOqzhCAo7KCc66qpKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICB0aXRsZTpzdHJpbmc7XHJcbn07XHJcblxyXG4vLyAqIOy0iOq4sOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgLy9cclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBudWxsLCAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVIO2BsCDrspTso7xcclxuICAgIGJ1aWxkaW5nVHlwZTpudWxsLCAgICAgICAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVXHJcbiAgICByb29tVHlwZTogbnVsbCwgICAgICAgICAgICAgICAgIC8vICog7IiZ7IaMIOycoO2YlVxyXG4gICAgaXNTZXRVcEZvckd1ZXN0Om51bGwsICAgICAgICAgICAvLyAqIOqyjOyKpO2KuOunjOydhCDsnITtlbQg66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgD9cclxuICAgIC8vXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDoxLCAgICAgICAgICAgIC8vICog7LWc64yAIOyImeuwlSDsnbjsm5BcclxuICAgIGJlZHJvb21Db3VudDowLCAgICAgICAgICAgICAgICAgLy8gKiDsuajsi6Qg6rCc7IiYXHJcbiAgICBiZWRDb3VudDoxLCAgICAgICAgICAgICAgICAgICAgIC8vICog7Lmo64yAIOqwnOyImFxyXG4gICAgYmVkTGlzdDpbXSwgICAgICAgICAgICAgICAgICAgICAvLyAqIOy5qOuMgCDsnKDtmJVcclxuICAgIHB1YmxpY0JlZExpc3Q6W10sICAgICAgICAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlVxyXG4gICAgLy9cclxuICAgIGJhdGhyb29tQ291bnQ6IDEsICAgICAgICAgICAgICAgLy8gKiDsmpXsi6Qg6rCc7IiYXHJcbiAgICBiYXRocm9vbVR5cGU6IG51bGwsICAgICAgICAgICAgIC8vICog7JqV7IukIOycoO2YlVxyXG4gICAgLy9cclxuICAgIGNvdW50cnk6XCJcIiwgICAgICAgICAgICAgICAgICAgICAvLyAqIOq1reqwgC/sp4Dsl61cclxuICAgIGNpdHk6XCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIOyLnC/rj4RcclxuICAgIGRpc3RyaWN0OlwiXCIsICAgICAgICAgICAgICAgICAgICAvLyAqIOyLnC/qtbAv6rWsXHJcbiAgICBzdHJlZXRBZGRyZXNzOlwiXCIsICAgICAgICAgICAgICAgLy8gKiDrj4TroZzrqoXso7zshoxcclxuICAgIGRldGFpbEFkZHJlc3M6XCJcIiwgICAgICAgICAgICAgICAvLyAqIOuPme2YuOyImFxyXG4gICAgcG9zdGNvZGU6XCJcIiwgICAgICAgICAgICAgICAgICAgIC8vICog7Jqw7Y6467KI7Zi4XHJcbiAgICBsYXRpdHVkZTowLCAgICAgICAgICAgICAgICAgICAgIC8vICog7JyE64+EXHJcbiAgICBsb25naXR1ZGU6MCwgICAgICAgICAgICAgICAgICAgIC8vICog6rK964+EXHJcbiAgICAvL1xyXG4gICAgYW1lbnRpdGllczpbXSwgICAgICAgICAgICAgICAgICAvLyAqIO2OuOydmOyLnOyEpFxyXG4gICAgLy9cclxuICAgIGNvbnZlbmllbmNlczpbXSwgICAgICAgICAgICAgICAgLy8gKiDtjrjsnZjqs7XqsIRcclxuICAgIC8vXHJcbiAgICBwaG90b3M6W10sICAgICAgICAgICAgICAgICAgICAgIC8vICog7IiZ7IaM7IKs7KeEXHJcbiAgICAvL1xyXG4gICAgZGVzY3JpcHRpb246XCJcIiwgICAgICAgICAgICAgICAgIC8vICog7IiZ7IaM7ISk66qFXHJcbiAgICAvL1xyXG4gICAgdGl0bGU6XCJcIiwgICAgICAgICAgICAgICAgICAgICAgIC8vICog7KCc66qpXHJcbiAgICBcclxufTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyUm9vbSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6XCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCAx64uo6rOEICjqsbTrrLwsIOyImeyGjCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyDtgbAg6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXJnZUJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248c3RyaW5nPil7XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkPT09XCJcIil7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGU9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRSb29tVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICogJ+qyjOyKpO2KuOyaqSDsiJnshozsnbjsp4AnIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldElzU2V0VXBGb3JHdWVzdChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248Ym9vbGVhbj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NldFVwRm9yR3Vlc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDstZzrjIAg7IiZ67CVIOyduOybkCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRNYXhpbXVtR3Vlc3RDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLm1heGltdW1HdWVzdENvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDLri6jqs4QgKOyduOybkCwg7Lmo64yALCDqs7Xsmqnqs7XqsIQpIENoYW5nZVxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsuajsi6Qg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZHJvb21Db3VudChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgY29uc3QgYmVkcm9vbUNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGxldCB7IGJlZExpc3QgfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkcm9vbUNvdW50ID0gYmVkcm9vbUNvdW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKGJlZHJvb21Db3VudCA8IGJlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyog6riw7KG0IOy5qOuMgCDqsJzsiJjqsIAg642UIOunjuycvOuptCDstIjqs7zrtoDrtoQg7J6Y652864K06riwXHJcbiAgICAgICAgICAgICAgICBiZWRMaXN0ID0gc3RhdGUuYmVkTGlzdC5zbGljZSgwLCBiZWRyb29tQ291bnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8qIOuzgOqyveuQoCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg64KY66i47KeAIOy5qOyLpCDssYTsmrDquLBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBiZWRMaXN0Lmxlbmd0aCArIDE7IGkgPCBiZWRyb29tQ291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGJlZExpc3QucHVzaCh7IGlkOiBpLCBiZWRzOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkTGlzdCA9IGJlZExpc3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7LWc64yAIOy5qOuMgCDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iZWRDb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy5qOuMgCDsnKDtmJUg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZFR5cGVDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248e2JlZHJvb21JZDpudW1iZXI7IHR5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfT4pe1xyXG4gICAgICAgICAgICBjb25zdCB7YmVkcm9vbUlkLCB0eXBlLCBjb3VudH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc3QgYmVkcm9vbSA9IHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZCZWRzID0gYmVkcm9vbS5iZWRzO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByZXZCZWRzLmZpbmRJbmRleCgoYmVkKSA9PiBiZWQudHlwZSA9PT0gdHlwZSk7XHJcblxyXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7JeG64uk66m0Li4uXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHMgPSBbLi4ucHJldkJlZHMsIHt0eXBlLCBjb3VudH1dO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsobTsnqwg7ZWc64uk66m0Li4uXHJcbiAgICAgICAgICAgIGlmKGNvdW50ID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV0uYmVkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV0uYmVkc1tpbmRleF0uY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqzteyaqeqzteqwhCDsuajrjIAg7Jyg7ZiVIOqwnOyImCDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0UHVibGljQmVkVHlwZUNvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjx7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9Pil7XHJcbiAgICAgICAgICAgIGNvbnN0IHt0eXBlLCBjb3VudH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4PXN0YXRlLnB1YmxpY0JlZExpc3QuZmluZEluZGV4KChiZWQpPT5iZWQudHlwZT09PXR5cGUpO1xyXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7JeG64uk66m0Li4uXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0ID0gWy4uLnN0YXRlLnB1YmxpY0JlZExpc3QsIHt0eXBlLCBjb3VudH1dO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsobTsnqwg7ZWc64uk66m0Li4uXHJcbiAgICAgICAgICAgIGlmKGNvdW50ID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnB1YmxpY0JlZExpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0W2luZGV4XS5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDPri6jqs4QgKOyaleyLpCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIOyaleyLpCDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJhdGhyb29tQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iYXRocm9vbUNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyaleyLpCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJhdGhyb29tVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248XCJwcml2YXRlXCIgfCBcInB1YmxpY1wiPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmJhdGhyb29tVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgNOuLqOqzhCAo7JyE7LmYKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgLy8gKiDqta3qsIAg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0Q291bnRyeShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuY291bnRyeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOyLnOuPhCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRDaXR5KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5jaXR5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog7Iuc6rWw6rWsICDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXREaXN0cmljdChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuZGlzdHJpY3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDrj4TroZzrqoXso7zshowg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0U3RyZWV0QWRkcmVzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuc3RyZWV0QWRkcmVzcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOuPme2YuOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXREZXRhaWxBZGRyZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5kZXRhaWxBZGRyZXNzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog7Jqw7Y6467KI7Zi4IOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldFBvc3Rjb2RlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5wb3N0Y29kZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOychOuPhCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXRpdHVkZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgc3RhdGUubGF0aXR1ZGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDqsr3rj4Qg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TG9uZ2l0dWRlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sb25naXR1ZGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDXri6jqs4QgKO2OuOydmOyLnOyEpCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgIC8vICog7Y647J2YIOyLnOyEpCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRBbWVudGl0aWVzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmFtZW50aXRpZXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDbri6jqs4QgKO2OuOydmOqzteqwhCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIO2OuOydmCDqs7XqsIQg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0Q29udmVuaWVuY2VzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbnZlbmllbmNlcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgN+uLqOqzhCAo7IiZ7IaM7IKs7KeEKSBwaG90b1xyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsiJnshowg7IKs7KeEIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldFBob3RvcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5waG90b3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDjri6jqs4QgKOyImeyGjOyEpOuqhSkgZGVzY3JpcHRpb25cclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7IiZ7IaMIOyEpOuqhSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuZGVzY3JpcHRpb24gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDnri6jqs4QgKOygnOuqqSkgZGVzY3JpcHRpb25cclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7IiZ7IaMIOygnOuqqSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRUaXRsZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSb29tQWN0aW9ucz17Li4ucmVnaXN0ZXJSb29tLmFjdGlvbnN9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJSb29tOyJdLCJzb3VyY2VSb290IjoiIn0=