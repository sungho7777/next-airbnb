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
    },
    // * 예약 마감날짜 변경하기.
    setEndDate: function setEndDate(state, action) {
      state.endDate = action.payload;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJiYXRocm9vbUNvdW50IiwiYmF0aHJvb21UeXBlIiwiY291bnRyeSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImFtZW50aXRpZXMiLCJjb252ZW5pZW5jZXMiLCJwaG90b3MiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwicHJpY2UiLCJzdGFydERhdGUiLCJlbmREYXRlIiwicmVnaXN0ZXJSb29tIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRMYXJnZUJ1aWxkaW5nVHlwZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEJ1aWxkaW5nVHlwZSIsInNldFJvb21UeXBlIiwic2V0SXNTZXRVcEZvckd1ZXN0Iiwic2V0TWF4aW11bUd1ZXN0Q291bnQiLCJzZXRCZWRyb29tQ291bnQiLCJsZW5ndGgiLCJzbGljZSIsImkiLCJwdXNoIiwiaWQiLCJiZWRzIiwic2V0QmVkQ291bnQiLCJzZXRCZWRUeXBlQ291bnQiLCJiZWRyb29tSWQiLCJ0eXBlIiwiY291bnQiLCJiZWRyb29tIiwicHJldkJlZHMiLCJpbmRleCIsImZpbmRJbmRleCIsImJlZCIsInNwbGljZSIsInNldFB1YmxpY0JlZFR5cGVDb3VudCIsInNldEJhdGhyb29tQ291bnQiLCJzZXRCYXRocm9vbVR5cGUiLCJzZXRDb3VudHJ5Iiwic2V0Q2l0eSIsInNldERpc3RyaWN0Iiwic2V0U3RyZWV0QWRkcmVzcyIsInNldERldGFpbEFkZHJlc3MiLCJzZXRQb3N0Y29kZSIsInNldExhdGl0dWRlIiwic2V0TG9uZ2l0dWRlIiwic2V0QW1lbnRpdGllcyIsInNldENvbnZlbmllbmNlcyIsInNldFBob3RvcyIsInNldERlc2NyaXB0aW9uIiwic2V0VGl0bGUiLCJzZXRQcmljZSIsInNldFN0YXJ0RGF0ZSIsInNldEVuZERhdGUiLCJyZWdpc3RlclJvb21BY3Rpb25zIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBdURBO0FBQ0EsSUFBTUEsWUFBK0IsR0FBRztBQUNwQztBQUNBQyxtQkFBaUIsRUFBRSxJQUZpQjtBQUVKO0FBQ2hDQyxjQUFZLEVBQUMsSUFIdUI7QUFHSjtBQUNoQ0MsVUFBUSxFQUFFLElBSjBCO0FBSUo7QUFDaENDLGlCQUFlLEVBQUMsSUFMb0I7QUFLSjtBQUNoQztBQUNBQyxtQkFBaUIsRUFBQyxDQVBrQjtBQU9KO0FBQ2hDQyxjQUFZLEVBQUMsQ0FSdUI7QUFRSjtBQUNoQ0MsVUFBUSxFQUFDLENBVDJCO0FBU0o7QUFDaENDLFNBQU8sRUFBQyxFQVY0QjtBQVVKO0FBQ2hDQyxlQUFhLEVBQUMsRUFYc0I7QUFXSjtBQUNoQztBQUNBQyxlQUFhLEVBQUUsQ0FicUI7QUFhSjtBQUNoQ0MsY0FBWSxFQUFFLElBZHNCO0FBY0o7QUFDaEM7QUFDQUMsU0FBTyxFQUFDLEVBaEI0QjtBQWdCSjtBQUNoQ0MsTUFBSSxFQUFDLEVBakIrQjtBQWlCSjtBQUNoQ0MsVUFBUSxFQUFDLEVBbEIyQjtBQWtCSjtBQUNoQ0MsZUFBYSxFQUFDLEVBbkJzQjtBQW1CSjtBQUNoQ0MsZUFBYSxFQUFDLEVBcEJzQjtBQW9CSjtBQUNoQ0MsVUFBUSxFQUFDLEVBckIyQjtBQXFCSjtBQUNoQ0MsVUFBUSxFQUFDLENBdEIyQjtBQXNCSjtBQUNoQ0MsV0FBUyxFQUFDLENBdkIwQjtBQXVCSjtBQUNoQztBQUNBQyxZQUFVLEVBQUMsRUF6QnlCO0FBeUJKO0FBQ2hDO0FBQ0FDLGNB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QUFDSCxLQXpNSTs7QUEwTUw7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ0F1QyxZQWhOSyxvQkFnTkl6QyxLQWhOSixFQWdOV0MsTUFoTlgsRUFnTndDO0FBQ3pDRCxXQUFLLENBQUNSLEtBQU4sR0FBY1MsTUFBTSxDQUFDQyxPQUFyQjtBQUNILEtBbE5JOztBQW1OTDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDQXdDLGdCQXpOSyx3QkF5TlExQyxLQXpOUixFQXlOZUMsTUF6TmYsRUF5TmlEO0FBQ2xERCxXQUFLLENBQUNQLFNBQU4sR0FBa0JRLE1BQU0sQ0FBQ0MsT0FBekI7QUFDSCxLQTNOSTtBQTROTDtBQUNBeUMsY0E3Tkssc0JBNk5NM0MsS0E3Tk4sRUE2TmFDLE1BN05iLEVBNk4rQztBQUNoREQsV0FBSyxDQUFDTixPQUFOLEdBQWdCTyxNQUFNLENBQUNDLE9BQXZCO0FBQ0g7QUEvTkk7QUFIb0IsQ0FBRCxDQUFoQztBQStPTyxJQUFNMEMsbUJBQW1CLHFCQUFLakQsWUFBWSxDQUFDa0QsT0FBbEIsQ0FBekI7QUFFUWxELDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jvb20vcmVnaXN0ZXIvZGVzY3JpcHRpb24uZTc4MTIyZTIwZmJmNDYwOGZiNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCB9IGZyb20gXCIuLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQge0JlZFR5cGV9IGZyb20gXCIuLi90eXBlcy9yb29tXCI7XHJcblxyXG50eXBlIFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgMeuLqOqzhCAo6rG066y8LCDsiJnshowpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcm9vbVR5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAy64uo6rOEICjsnbjsm5AsIOy5qOuMgCwg6rO17Jqp6rO16rCEKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDpudW1iZXI7XHJcbiAgICBiZWRyb29tQ291bnQ6bnVtYmVyO1xyXG4gICAgYmVkQ291bnQ6bnVtYmVyO1xyXG4gICAgYmVkTGlzdDp7aWQ6bnVtYmVyOyBiZWRzOnt0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXX1bXTtcclxuICAgIHB1YmxpY0JlZExpc3Q6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdO1xyXG4gICAgXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAz64uo6rOEICjsmpXsi6QpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGJhdGhyb29tQ291bnQ6bnVtYmVyO1xyXG4gICAgYmF0aHJvb21UeXBlOiBcInByaXZhdGVcIiB8IFwicHVibGljXCIgfCBudWxsO1xyXG5cclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDTri6jqs4QgKOychOy5mCkg66as642V7IqkIOyEpOyglVxyXG4gICAgY291bnRyeTpzdHJpbmc7XHJcbiAgICBjaXR5OnN0cmluZztcclxuICAgIGRpc3RyaWN0OnN0cmluZztcclxuICAgIHN0cmVldEFkZHJlc3M6c3RyaW5nO1xyXG4gICAgZGV0YWlsQWRkcmVzczpzdHJpbmc7XHJcbiAgICBwb3N0Y29kZTpzdHJpbmc7XHJcbiAgICBsYXRpdHVkZTpudW1iZXI7XHJcbiAgICBsb25naXR1ZGU6bnVtYmVyO1xyXG5cclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDXri6jqs4QgKO2OuOydmOyLnOyEpCkg66as642V7IqkIOyEpOyglVxyXG4gICAgYW1lbnRpdGllczpzdHJpbmdbXTtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA264uo6rOEICjtjrjsnZjqs7XqsIQpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGNvbnZlbmllbmNlczpzdHJpbmdbXTtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA364uo6rOEICjsiJnshozsgqzsp4QpIOumrOuNleyKpCDshKTsoJVcclxuICAgIHBob3RvczpzdHJpbmdbXTtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA464uo6rOEICjsiJnshozshKTrqoUpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGRlc2NyaXB0aW9uOnN0cmluZztcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA564uo6rOEICjsoJzrqqkpIOumrOuNleyKpCDshKTsoJVcclxuICAgIHRpdGxlOnN0cmluZztcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAxMOuLqOqzhCAo6rCA6rKpKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBwcmljZTpudW1iZXI7XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgMTHri6jqs4QgKOuCoOynnCkg66as642V7IqkIOyEpOyglVxyXG4gICAgc3RhcnREYXRlOnN0cmluZ3xudWxsO1xyXG4gICAgZW5kRGF0ZTpzdHJpbmd8bnVsbDtcclxufTtcclxuXHJcbi8vICog7LSI6riw7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICAvL1xyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IG51bGwsICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg7YGwIOuylOyjvFxyXG4gICAgYnVpbGRpbmdUeXBlOm51bGwsICAgICAgICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJVcclxuICAgIHJvb21UeXBlOiBudWxsLCAgICAgICAgICAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVXHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6bnVsbCwgICAgICAgICAgIC8vICog6rKM7Iqk7Yq466eM7J2EIOychO2VtCDrp4zrk6TslrTsp4Qg7IiZ7IaM7J246rCAP1xyXG4gICAgLy9cclxuICAgIG1heGltdW1HdWVzdENvdW50OjEsICAgICAgICAgICAgLy8gKiDstZzrjIAg7IiZ67CVIOyduOybkFxyXG4gICAgYmVkcm9vbUNvdW50OjAsICAgICAgICAgICAgICAgICAvLyAqIOy5qOyLpCDqsJzsiJhcclxuICAgIGJlZENvdW50OjEsICAgICAgICAgICAgICAgICAgICAgLy8gKiDsuajrjIAg6rCc7IiYXHJcbiAgICBiZWRMaXN0OltdLCAgICAgICAgICAgICAgICAgICAgIC8vICog7Lmo64yAIOycoO2YlVxyXG4gICAgcHVibGljQmVkTGlzdDpbXSwgICAgICAgICAgICAgICAvLyAqIOqzteyaqeqzteqwhCDsuajrjIAg7Jyg7ZiVXHJcbiAgICAvL1xyXG4gICAgYmF0aHJvb21Db3VudDogMSwgICAgICAgICAgICAgICAvLyAqIOyaleyLpCDqsJzsiJhcclxuICAgIGJhdGhyb29tVHlwZTogbnVsbCwgICAgICAgICAgICAgLy8gKiDsmpXsi6Qg7Jyg7ZiVXHJcbiAgICAvL1xyXG4gICAgY291bnRyeTpcIlwiLCAgICAgICAgICAgICAgICAgICAgIC8vICog6rWt6rCAL+yngOyXrVxyXG4gICAgY2l0eTpcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgIC8vICog7IucL+uPhFxyXG4gICAgZGlzdHJpY3Q6XCJcIiwgICAgICAgICAgICAgICAgICAgIC8vICog7IucL+q1sC/qtaxcclxuICAgIHN0cmVldEFkZHJlc3M6XCJcIiwgICAgICAgICAgICAgICAvLyAqIOuPhOuhnOuqheyjvOyGjFxyXG4gICAgZGV0YWlsQWRkcmVzczpcIlwiLCAgICAgICAgICAgICAgIC8vICog64+Z7Zi47IiYXHJcbiAgICBwb3N0Y29kZTpcIlwiLCAgICAgICAgICAgICAgICAgICAgLy8gKiDsmrDtjrjrsojtmLhcclxuICAgIGxhdGl0dWRlOjAsICAgICAgICAgICAgICAgICAgICAgLy8gKiDsnITrj4RcclxuICAgIGxvbmdpdHVkZTowLCAgICAgICAgICAgICAgICAgICAgLy8gKiDqsr3rj4RcclxuICAgIC8vXHJcbiAgICBhbWVudGl0aWVzOltdLCAgICAgICAgICAgICAgICAgIC8vICog7Y647J2Y7Iuc7ISkXHJcbiAgICAvL1xyXG4gICAgY29udmVuaWVuY2VzOltdLCAgICAgICAgICAgICAgICAvLyAqIO2OuOydmOqzteqwhFxyXG4gICAgLy9cclxuICAgIHBob3RvczpbXSwgICAgICAgICAgICAgICAgICAgICAgLy8gKiDsiJnshozsgqzsp4RcclxuICAgIC8vXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLCAgICAgICAgICAgICAgICAgLy8gKiDsiJnshozshKTrqoVcclxuICAgIC8vXHJcbiAgICB0aXRsZTpcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgLy8gKiDsoJzrqqlcclxuICAgIC8vXHJcbiAgICBwcmljZTowLCAgICAgICAgICAgICAgICAgICAgICAgIC8vICog7IiZ7IaM7JqU6riIXHJcbiAgICAvL1xyXG4gICAgc3RhcnREYXRlOm51bGwsICAgICAgICAgICAgICAgICAvLyAqIOyYiOyVvSDsi5zsnpHrgqDsp5xcclxuICAgIGVuZERhdGU6bnVsbCwgICAgICAgICAgICAgICAgICAgLy8gKiDsmIjslb0g66eI6rCQ64Kg7KecXHJcbiAgICBcclxufTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyUm9vbSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6XCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCAx64uo6rOEICjqsbTrrLwsIOyImeyGjCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyDtgbAg6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXJnZUJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248c3RyaW5nPil7XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkPT09XCJcIil7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGU9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRSb29tVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICogJ+qyjOyKpO2KuOyaqSDsiJnshozsnbjsp4AnIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldElzU2V0VXBGb3JHdWVzdChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248Ym9vbGVhbj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NldFVwRm9yR3Vlc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDstZzrjIAg7IiZ67CVIOyduOybkCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRNYXhpbXVtR3Vlc3RDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLm1heGltdW1HdWVzdENvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDLri6jqs4QgKOyduOybkCwg7Lmo64yALCDqs7Xsmqnqs7XqsIQpIENoYW5nZVxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsuajsi6Qg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZHJvb21Db3VudChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgY29uc3QgYmVkcm9vbUNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGxldCB7IGJlZExpc3QgfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkcm9vbUNvdW50ID0gYmVkcm9vbUNvdW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKGJlZHJvb21Db3VudCA8IGJlZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyog6riw7KG0IOy5qOuMgCDqsJzsiJjqsIAg642UIOunjuycvOuptCDstIjqs7zrtoDrtoQg7J6Y652864K06riwXHJcbiAgICAgICAgICAgICAgICBiZWRMaXN0ID0gc3RhdGUuYmVkTGlzdC5zbGljZSgwLCBiZWRyb29tQ291bnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8qIOuzgOqyveuQoCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg64KY66i47KeAIOy5qOyLpCDssYTsmrDquLBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBiZWRMaXN0Lmxlbmd0aCArIDE7IGkgPCBiZWRyb29tQ291bnQgKyAxOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGJlZExpc3QucHVzaCh7IGlkOiBpLCBiZWRzOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdGUuYmVkTGlzdCA9IGJlZExpc3Q7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7LWc64yAIOy5qOuMgCDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iZWRDb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy5qOuMgCDsnKDtmJUg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZFR5cGVDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248e2JlZHJvb21JZDpudW1iZXI7IHR5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfT4pe1xyXG4gICAgICAgICAgICBjb25zdCB7YmVkcm9vbUlkLCB0eXBlLCBjb3VudH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc3QgYmVkcm9vbSA9IHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZCZWRzID0gYmVkcm9vbS5iZWRzO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByZXZCZWRzLmZpbmRJbmRleCgoYmVkKSA9PiBiZWQudHlwZSA9PT0gdHlwZSk7XHJcblxyXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7JeG64uk66m0Li4uXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHMgPSBbLi4ucHJldkJlZHMsIHt0eXBlLCBjb3VudH1dO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsobTsnqwg7ZWc64uk66m0Li4uXHJcbiAgICAgICAgICAgIGlmKGNvdW50ID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV0uYmVkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV0uYmVkc1tpbmRleF0uY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqzteyaqeqzteqwhCDsuajrjIAg7Jyg7ZiVIOqwnOyImCDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0UHVibGljQmVkVHlwZUNvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjx7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9Pil7XHJcbiAgICAgICAgICAgIGNvbnN0IHt0eXBlLCBjb3VudH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4PXN0YXRlLnB1YmxpY0JlZExpc3QuZmluZEluZGV4KChiZWQpPT5iZWQudHlwZT09PXR5cGUpO1xyXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7JeG64uk66m0Li4uXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0ID0gWy4uLnN0YXRlLnB1YmxpY0JlZExpc3QsIHt0eXBlLCBjb3VudH1dO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsobTsnqwg7ZWc64uk66m0Li4uXHJcbiAgICAgICAgICAgIGlmKGNvdW50ID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnB1YmxpY0JlZExpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0W2luZGV4XS5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDPri6jqs4QgKOyaleyLpCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIOyaleyLpCDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJhdGhyb29tQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iYXRocm9vbUNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyaleyLpCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJhdGhyb29tVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248XCJwcml2YXRlXCIgfCBcInB1YmxpY1wiPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmJhdGhyb29tVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgNOuLqOqzhCAo7JyE7LmYKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgLy8gKiDqta3qsIAg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0Q291bnRyeShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuY291bnRyeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOyLnOuPhCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRDaXR5KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5jaXR5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog7Iuc6rWw6rWsICDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXREaXN0cmljdChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuZGlzdHJpY3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDrj4TroZzrqoXso7zshowg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0U3RyZWV0QWRkcmVzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuc3RyZWV0QWRkcmVzcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOuPme2YuOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXREZXRhaWxBZGRyZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5kZXRhaWxBZGRyZXNzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog7Jqw7Y6467KI7Zi4IOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldFBvc3Rjb2RlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5wb3N0Y29kZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOychOuPhCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXRpdHVkZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgc3RhdGUubGF0aXR1ZGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDqsr3rj4Qg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TG9uZ2l0dWRlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sb25naXR1ZGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDXri6jqs4QgKO2OuOydmOyLnOyEpCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgIC8vICog7Y647J2YIOyLnOyEpCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRBbWVudGl0aWVzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmFtZW50aXRpZXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDbri6jqs4QgKO2OuOydmOqzteqwhCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIO2OuOydmCDqs7XqsIQg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0Q29udmVuaWVuY2VzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbnZlbmllbmNlcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgN+uLqOqzhCAo7IiZ7IaM7IKs7KeEKSBwaG90b1xyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsiJnshowg7IKs7KeEIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldFBob3RvcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5waG90b3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDjri6jqs4QgKOyImeyGjOyEpOuqhSkgZGVzY3JpcHRpb25cclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7IiZ7IaMIOyEpOuqhSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuZGVzY3JpcHRpb24gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDnri6jqs4QgKOygnOuqqSkgZGVzY3JpcHRpb25cclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7IiZ7IaMIOygnOuqqSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRUaXRsZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDEw64uo6rOEICjqsIDqsqkpIENoYW5nZVxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsiJnshowg6rCA6rKpIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRQcmljZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLnByaWNlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyYiOyVveuCoOynnCDrk7HroZ3tlZjquLAgMTHri6jqs4QgKOuCoOynnCkgZGF0ZVxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsmIjslb0g7Iuc7J6R64Kg7KecIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRTdGFydERhdGUoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPHN0cmluZ3xudWxsPil7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0YXJ0RGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsmIjslb0g66eI6rCQ64Kg7KecIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRFbmREYXRlKHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxzdHJpbmd8bnVsbD4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5lbmREYXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm9vbUFjdGlvbnM9ey4uLnJlZ2lzdGVyUm9vbS5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyUm9vbTsiXSwic291cmNlUm9vdCI6IiJ9