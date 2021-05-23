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
  title: "",
  // * 제목
  //
  price: 0,
  // * 숙소요금
  //
  startDate: null,
  // * 예약 시작날짜
  endDate: null // * 예약 마감날짜

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
    },

    /*
    
        * 숙소등록하기 10단계 (가격) Change
    
    */
    // * 숙소 가격 변경하기.
    setPrice: function setPrice(state, action) {
      state.price = action.payload;
    },

    /*
    
        * 예약날짜 등록하기 11단계 (날짜) date
    
    */
    // * 예약 시작날짜 변경하기.
    setStartDate: function setStartDate(state, action) {
      state.startDate = action.payload;
    } // * 예약 마감날짜 변경하기.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJiYXRocm9vbUNvdW50IiwiYmF0aHJvb21UeXBlIiwiY291bnRyeSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImFtZW50aXRpZXMiLCJjb252ZW5pZW5jZXMiLCJwaG90b3MiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwicHJpY2UiLCJzdGFydERhdGUiLCJlbmREYXRlIiwicmVnaXN0ZXJSb29tIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRMYXJnZUJ1aWxkaW5nVHlwZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEJ1aWxkaW5nVHlwZSIsInNldFJvb21UeXBlIiwic2V0SXNTZXRVcEZvckd1ZXN0Iiwic2V0TWF4aW11bUd1ZXN0Q291bnQiLCJzZXRCZWRyb29tQ291bnQiLCJsZW5ndGgiLCJzbGljZSIsImkiLCJwdXNoIiwiaWQiLCJiZWRzIiwic2V0QmVkQ291bnQiLCJzZXRCZWRUeXBlQ291bnQiLCJiZWRyb29tSWQiLCJ0eXBlIiwiY291bnQiLCJiZWRyb29tIiwicHJldkJlZHMiLCJpbmRleCIsImZpbmRJbmRleCIsImJlZCIsInNwbGljZSIsInNldFB1YmxpY0JlZFR5cGVDb3VudCIsInNldEJhdGhyb29tQ291bnQiLCJzZXRCYXRocm9vbVR5cGUiLCJzZXRDb3VudHJ5Iiwic2V0Q2l0eSIsInNldERpc3RyaWN0Iiwic2V0U3RyZWV0QWRkcmVzcyIsInNldERldGFpbEFkZHJlc3MiLCJzZXRQb3N0Y29kZSIsInNldExhdGl0dWRlIiwic2V0TG9uZ2l0dWRlIiwic2V0QW1lbnRpdGllcyIsInNldENvbnZlbmllbmNlcyIsInNldFBob3RvcyIsInNldERlc2NyaXB0aW9uIiwic2V0VGl0bGUiLCJzZXRQcmljZSIsInNldFN0YXJ0RGF0ZSIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1REE7QUFDQSxJQUFNQSxZQUErQixHQUFHO0FBQ3BDO0FBQ0FDLG1CQUFpQixFQUFFLElBRmlCO0FBRUo7QUFDaENDLGNBQVksRUFBQyxJQUh1QjtBQUdKO0FBQ2hDQyxVQUFRLEVBQUUsSUFKMEI7QUFJSjtBQUNoQ0MsaUJBQWUsRUFBQyxJQUxvQjtBQUtKO0FBQ2hDO0FBQ0FDLG1CQUFpQixFQUFDLENBUGtCO0FBT0o7QUFDaENDLGNBQVksRUFBQyxDQVJ1QjtBQVFKO0FBQ2hDQyxVQUFRLEVBQUMsQ0FUMkI7QUFTSjtBQUNoQ0MsU0FBTyxFQUFDLEVBVjRCO0FBVUo7QUFDaENDLGVBQWEsRUFBQyxFQVhzQjtBQVdKO0FBQ2hDO0FBQ0FDLGVBQWEsRUFBRSxDQWJxQjtBQWFKO0FBQ2hDQyxjQUFZLEVBQUUsSUFkc0I7QUFjSjtBQUNoQztBQUNBQyxTQUFPLEVBQUMsRUFoQjRCO0FBZ0JKO0FBQ2hDQyxNQUFJLEVBQUMsRUFqQitCO0FBaUJKO0FBQ2hDQyxVQUFRLEVBQUMsRUFsQjJCO0FBa0JKO0FBQ2hDQyxlQUFhLEVBQUMsRUFuQnNCO0FBbUJKO0FBQ2hDQyxlQUFhLEVBQUMsRUFwQnNCO0FBb0JKO0FBQ2hDQyxVQUFRLEVBQUMsRUFyQjJCO0FBcUJKO0FBQ2hDQyxVQUFRLEVBQUMsQ0F0QjJCO0FBc0JKO0FBQ2hDQyxXQUFTLEVBQUMsQ0F2QjBCO0FBdUJKO0FBQ2hDO0FBQ0FDLFlBQVUsRUFBQyxFQXpCeUI7QUF5Qko7QUFDaEM7QUFDQUMsY0FBWSxFQUFDLEVBM0J1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QTBNTDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDQXVDLFlBaE5LLG9CQWdOSXpDLEtBaE5KLEVBZ05XQyxNQWhOWCxFQWdOd0M7QUFDekNELFdBQUssQ0FBQ1IsS0FBTixHQUFjUyxNQUFNLENBQUNDLE9BQXJCO0FBQ0gsS0FsTkk7O0FBbU5MO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNBd0MsZ0JBek5LLHdCQXlOUTFDLEtBek5SLEVBeU5lQyxNQXpOZixFQXlOaUQ7QUFDbERELFdBQUssQ0FBQ1AsU0FBTixHQUFrQlEsTUFBTSxDQUFDQyxPQUF6QjtBQUNILEtBM05JLENBNE5MOztBQTVOSztBQUhvQixDQUFELENBQWhDO0FBNE9PLElBQU15QyxtQkFBbUIscUJBQUtoRCxZQUFZLENBQUNpRCxPQUFsQixDQUF6QjtBQUVRakQsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZmQzYWU0OWMyNmQwM2NmMDhlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7QmVkVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Jvb21cIjtcclxuXHJcbnR5cGUgUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAx64uo6rOEICjqsbTrrLwsIOyImeyGjCkg66as642V7IqkIOyEpOyglVxyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBidWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICByb29tVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGlzU2V0VXBGb3JHdWVzdDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDLri6jqs4QgKOyduOybkCwg7Lmo64yALCDqs7Xsmqnqs7XqsIQpIOumrOuNleyKpCDshKTsoJVcclxuICAgIG1heGltdW1HdWVzdENvdW50Om51bWJlcjtcclxuICAgIGJlZHJvb21Db3VudDpudW1iZXI7XHJcbiAgICBiZWRDb3VudDpudW1iZXI7XHJcbiAgICBiZWRMaXN0OntpZDpudW1iZXI7IGJlZHM6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdfVtdO1xyXG4gICAgcHVibGljQmVkTGlzdDp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W107XHJcbiAgICBcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDPri6jqs4QgKOyaleyLpCkg66as642V7IqkIOyEpOyglVxyXG4gICAgYmF0aHJvb21Db3VudDpudW1iZXI7XHJcbiAgICBiYXRocm9vbVR5cGU6IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIiB8IG51bGw7XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgNOuLqOqzhCAo7JyE7LmYKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBjb3VudHJ5OnN0cmluZztcclxuICAgIGNpdHk6c3RyaW5nO1xyXG4gICAgZGlzdHJpY3Q6c3RyaW5nO1xyXG4gICAgc3RyZWV0QWRkcmVzczpzdHJpbmc7XHJcbiAgICBkZXRhaWxBZGRyZXNzOnN0cmluZztcclxuICAgIHBvc3Rjb2RlOnN0cmluZztcclxuICAgIGxhdGl0dWRlOm51bWJlcjtcclxuICAgIGxvbmdpdHVkZTpudW1iZXI7XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgNeuLqOqzhCAo7Y647J2Y7Iuc7ISkKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBhbWVudGl0aWVzOnN0cmluZ1tdO1xyXG5cclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDbri6jqs4QgKO2OuOydmOqzteqwhCkg66as642V7IqkIOyEpOyglVxyXG4gICAgY29udmVuaWVuY2VzOnN0cmluZ1tdO1xyXG5cclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDfri6jqs4QgKOyImeyGjOyCrOynhCkg66as642V7IqkIOyEpOyglVxyXG4gICAgcGhvdG9zOnN0cmluZ1tdO1xyXG5cclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDjri6jqs4QgKOyImeyGjOyEpOuqhSkg66as642V7IqkIOyEpOyglVxyXG4gICAgZGVzY3JpcHRpb246c3RyaW5nO1xyXG5cclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDnri6jqs4QgKOygnOuqqSkg66as642V7IqkIOyEpOyglVxyXG4gICAgdGl0bGU6c3RyaW5nO1xyXG5cclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDEw64uo6rOEICjqsIDqsqkpIOumrOuNleyKpCDshKTsoJVcclxuICAgIHByaWNlOm51bWJlcjtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAxMeuLqOqzhCAo64Kg7KecKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBzdGFydERhdGU6c3RyaW5nfG51bGw7XHJcbiAgICBlbmREYXRlOnN0cmluZ3xudWxsO1xyXG59O1xyXG5cclxuLy8gKiDstIjquLDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIC8vXHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogbnVsbCwgICAgICAgIC8vICog6rG066y8IOycoO2YlSDtgbAg67KU7KO8XHJcbiAgICBidWlsZGluZ1R5cGU6bnVsbCwgICAgICAgICAgICAgIC8vICog6rG066y8IOycoO2YlVxyXG4gICAgcm9vbVR5cGU6IG51bGwsICAgICAgICAgICAgICAgICAvLyAqIOyImeyGjCDsnKDtmJVcclxuICAgIGlzU2V0VXBGb3JHdWVzdDpudWxsLCAgICAgICAgICAgLy8gKiDqsozsiqTtirjrp4zsnYQg7JyE7ZW0IOunjOuTpOyWtOynhCDsiJnshozsnbjqsIA/XHJcbiAgICAvL1xyXG4gICAgbWF4aW11bUd1ZXN0Q291bnQ6MSwgICAgICAgICAgICAvLyAqIOy1nOuMgCDsiJnrsJUg7J247JuQXHJcbiAgICBiZWRyb29tQ291bnQ6MCwgICAgICAgICAgICAgICAgIC8vICog7Lmo7IukIOqwnOyImFxyXG4gICAgYmVkQ291bnQ6MSwgICAgICAgICAgICAgICAgICAgICAvLyAqIOy5qOuMgCDqsJzsiJhcclxuICAgIGJlZExpc3Q6W10sICAgICAgICAgICAgICAgICAgICAgLy8gKiDsuajrjIAg7Jyg7ZiVXHJcbiAgICBwdWJsaWNCZWRMaXN0OltdLCAgICAgICAgICAgICAgIC8vICog6rO17Jqp6rO16rCEIOy5qOuMgCDsnKDtmJVcclxuICAgIC8vXHJcbiAgICBiYXRocm9vbUNvdW50OiAxLCAgICAgICAgICAgICAgIC8vICog7JqV7IukIOqwnOyImFxyXG4gICAgYmF0aHJvb21UeXBlOiBudWxsLCAgICAgICAgICAgICAvLyAqIOyaleyLpCDsnKDtmJVcclxuICAgIC8vXHJcbiAgICBjb3VudHJ5OlwiXCIsICAgICAgICAgICAgICAgICAgICAgLy8gKiDqta3qsIAv7KeA7JetXHJcbiAgICBjaXR5OlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiDsi5wv64+EXHJcbiAgICBkaXN0cmljdDpcIlwiLCAgICAgICAgICAgICAgICAgICAgLy8gKiDsi5wv6rWwL+q1rFxyXG4gICAgc3RyZWV0QWRkcmVzczpcIlwiLCAgICAgICAgICAgICAgIC8vICog64+E66Gc66qF7KO87IaMXHJcbiAgICBkZXRhaWxBZGRyZXNzOlwiXCIsICAgICAgICAgICAgICAgLy8gKiDrj5ntmLjsiJhcclxuICAgIHBvc3Rjb2RlOlwiXCIsICAgICAgICAgICAgICAgICAgICAvLyAqIOyasO2OuOuyiO2YuFxyXG4gICAgbGF0aXR1ZGU6MCwgICAgICAgICAgICAgICAgICAgICAvLyAqIOychOuPhFxyXG4gICAgbG9uZ2l0dWRlOjAsICAgICAgICAgICAgICAgICAgICAvLyAqIOqyveuPhFxyXG4gICAgLy9cclxuICAgIGFtZW50aXRpZXM6W10sICAgICAgICAgICAgICAgICAgLy8gKiDtjrjsnZjsi5zshKRcclxuICAgIC8vXHJcbiAgICBjb252ZW5pZW5jZXM6W10sICAgICAgICAgICAgICAgIC8vICog7Y647J2Y6rO16rCEXHJcbiAgICAvL1xyXG4gICAgcGhvdG9zOltdLCAgICAgICAgICAgICAgICAgICAgICAvLyAqIOyImeyGjOyCrOynhFxyXG4gICAgLy9cclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsICAgICAgICAgICAgICAgICAvLyAqIOyImeyGjOyEpOuqhVxyXG4gICAgLy9cclxuICAgIHRpdGxlOlwiXCIsICAgICAgICAgICAgICAgICAgICAgICAvLyAqIOygnOuqqVxyXG4gICAgLy9cclxuICAgIHByaWNlOjAsICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiDsiJnshozsmpTquIhcclxuICAgIC8vXHJcbiAgICBzdGFydERhdGU6bnVsbCwgICAgICAgICAgICAgICAgIC8vICog7JiI7JW9IOyLnOyekeuCoOynnFxyXG4gICAgZW5kRGF0ZTpudWxsLCAgICAgICAgICAgICAgICAgICAvLyAqIOyYiOyVvSDrp4jqsJDrgqDsp5xcclxuICAgIFxyXG59O1xyXG5cclxuY29uc3QgcmVnaXN0ZXJSb29tID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTpcInJlZ2lzdGVyUm9vbVwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDHri6jqs4QgKOqxtOusvCwg7IiZ7IaMKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vIO2BsCDqsbTrrLwg7Jyg7ZiVIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldExhcmdlQnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0QnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxzdHJpbmc+KXtcclxuICAgICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQ9PT1cIlwiKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZT1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyImeyGjCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldFJvb21UeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248XCJlbnRpcmVcIiB8IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIj4pIHtcclxuICAgICAgICAgICAgc3RhdGUucm9vbVR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiAn6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCcg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0SXNTZXRVcEZvckd1ZXN0KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxib29sZWFuPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2V0VXBGb3JHdWVzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy1nOuMgCDsiJnrsJUg7J247JuQIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldE1heGltdW1HdWVzdENvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUubWF4aW11bUd1ZXN0Q291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgMuuLqOqzhCAo7J247JuQLCDsuajrjIAsIOqzteyaqeqzteqwhCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIOy5qOyLpCDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkcm9vbUNvdW50KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBjb25zdCBiZWRyb29tQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgbGV0IHsgYmVkTGlzdCB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5iZWRyb29tQ291bnQgPSBiZWRyb29tQ291bnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmVkcm9vbUNvdW50IDwgYmVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vKiDquLDsobQg7Lmo64yAIOqwnOyImOqwgCDrjZQg66eO7Jy866m0IOy0iOqzvOu2gOu2hCDsnpjrnbzrgrTquLBcclxuICAgICAgICAgICAgICAgIGJlZExpc3QgPSBzdGF0ZS5iZWRMaXN0LnNsaWNlKDAsIGJlZHJvb21Db3VudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyog67OA6rK965CgIOy5qOuMgCDqsJzsiJjqsIAg642UIOunjuycvOuptCDrgpjrqLjsp4Ag7Lmo7IukIOyxhOyasOq4sFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGJlZExpc3QubGVuZ3RoICsgMTsgaSA8IGJlZHJvb21Db3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgYmVkTGlzdC5wdXNoKHsgaWQ6IGksIGJlZHM6IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5iZWRMaXN0ID0gYmVkTGlzdDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDstZzrjIAg7Lmo64yAIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmJlZENvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7Lmo64yAIOycoO2YlSDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkVHlwZUNvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjx7YmVkcm9vbUlkOm51bWJlcjsgdHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9Pil7XHJcbiAgICAgICAgICAgIGNvbnN0IHtiZWRyb29tSWQsIHR5cGUsIGNvdW50fSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zdCBiZWRyb29tID0gc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgcHJldkJlZHMgPSBiZWRyb29tLmJlZHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJldkJlZHMuZmluZEluZGV4KChiZWQpID0+IGJlZC50eXBlID09PSB0eXBlKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsl4bri6TrqbQuLi5cclxuICAgICAgICAgICAgICAgIHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV0uYmVkcyA9IFsuLi5wcmV2QmVkcywge3R5cGUsIGNvdW50fV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyhtOyerCDtlZzri6TrqbQuLi5cclxuICAgICAgICAgICAgaWYoY291bnQgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzW2luZGV4XS5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog6rO17Jqp6rO16rCEIOy5qOuMgCDsnKDtmJUg6rCc7IiYIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRQdWJsaWNCZWRUeXBlQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPHt0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn0+KXtcclxuICAgICAgICAgICAgY29uc3Qge3R5cGUsIGNvdW50fSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kZXg9c3RhdGUucHVibGljQmVkTGlzdC5maW5kSW5kZXgoKGJlZCk9PmJlZC50eXBlPT09dHlwZSk7XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsl4bri6TrqbQuLi5cclxuICAgICAgICAgICAgICAgIHN0YXRlLnB1YmxpY0JlZExpc3QgPSBbLi4uc3RhdGUucHVibGljQmVkTGlzdCwge3R5cGUsIGNvdW50fV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyhtOyerCDtlZzri6TrqbQuLi5cclxuICAgICAgICAgICAgaWYoY291bnQgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnB1YmxpY0JlZExpc3RbaW5kZXhdLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgM+uLqOqzhCAo7JqV7IukKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7JqV7IukIOqwnOyImCDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0QmF0aHJvb21Db3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmJhdGhyb29tQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7JqV7IukIOycoO2YlSDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0QmF0aHJvb21UeXBlKHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxcInByaXZhdGVcIiB8IFwicHVibGljXCI+KXtcclxuICAgICAgICAgICAgc3RhdGUuYmF0aHJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCA064uo6rOEICjsnITsuZgpIENoYW5nZVxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAvLyAqIOq1reqwgCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRDb3VudHJ5KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5jb3VudHJ5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog7Iuc64+EIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldENpdHkoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNpdHkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDsi5zqtbDqtawgIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldERpc3RyaWN0KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5kaXN0cmljdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOuPhOuhnOuqheyjvOyGjCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRTdHJlZXRBZGRyZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHJlZXRBZGRyZXNzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog64+Z7Zi47IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldERldGFpbEFkZHJlc3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmRldGFpbEFkZHJlc3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDsmrDtjrjrsojtmLgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0UG9zdGNvZGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBvc3Rjb2RlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog7JyE64+EIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldExhdGl0dWRlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXRpdHVkZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOqyveuPhCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMb25naXR1ZGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxvbmdpdHVkZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgNeuLqOqzhCAo7Y647J2Y7Iuc7ISkKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgLy8gKiDtjrjsnZgg7Iuc7ISkIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEFtZW50aXRpZXMoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgc3RhdGUuYW1lbnRpdGllcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgNuuLqOqzhCAo7Y647J2Y6rO16rCEKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7Y647J2YIOqzteqwhCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRDb252ZW5pZW5jZXMoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgc3RhdGUuY29udmVuaWVuY2VzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCA364uo6rOEICjsiJnshozsgqzsp4QpIHBob3RvXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIOyImeyGjCDsgqzsp4Qg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0UGhvdG9zKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBob3RvcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgOOuLqOqzhCAo7IiZ7IaM7ISk66qFKSBkZXNjcmlwdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsiJnshowg7ISk66qFIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5kZXNjcmlwdGlvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgOeuLqOqzhCAo7KCc66qpKSBkZXNjcmlwdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsiJnshowg7KCc66qpIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldFRpdGxlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS50aXRsZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgMTDri6jqs4QgKOqwgOqyqSkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIOyImeyGjCDqsIDqsqkg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldFByaWNlKHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUucHJpY2UgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7JiI7JW964Kg7KecIOuTseuhne2VmOq4sCAxMeuLqOqzhCAo64Kg7KecKSBkYXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIOyYiOyVvSDsi5zsnpHrgqDsp5wg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldFN0YXJ0RGF0ZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248c3RyaW5nfG51bGw+KXtcclxuICAgICAgICAgICAgc3RhdGUuc3RhcnREYXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyYiOyVvSDrp4jqsJDrgqDsp5wg67OA6rK97ZWY6riwLlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJSb29tQWN0aW9ucz17Li4ucmVnaXN0ZXJSb29tLmFjdGlvbnN9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJSb29tOyJdLCJzb3VyY2VSb290IjoiIn0=