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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxhcmdlQnVpbGRpbmdUeXBlIiwiYnVpbGRpbmdUeXBlIiwicm9vbVR5cGUiLCJpc1NldFVwRm9yR3Vlc3QiLCJtYXhpbXVtR3Vlc3RDb3VudCIsImJlZHJvb21Db3VudCIsImJlZENvdW50IiwiYmVkTGlzdCIsInB1YmxpY0JlZExpc3QiLCJiYXRocm9vbUNvdW50IiwiYmF0aHJvb21UeXBlIiwiY291bnRyeSIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldEFkZHJlc3MiLCJkZXRhaWxBZGRyZXNzIiwicG9zdGNvZGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImFtZW50aXRpZXMiLCJjb252ZW5pZW5jZXMiLCJwaG90b3MiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwicmVnaXN0ZXJSb29tIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRMYXJnZUJ1aWxkaW5nVHlwZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEJ1aWxkaW5nVHlwZSIsInNldFJvb21UeXBlIiwic2V0SXNTZXRVcEZvckd1ZXN0Iiwic2V0TWF4aW11bUd1ZXN0Q291bnQiLCJzZXRCZWRyb29tQ291bnQiLCJsZW5ndGgiLCJzbGljZSIsImkiLCJwdXNoIiwiaWQiLCJiZWRzIiwic2V0QmVkQ291bnQiLCJzZXRCZWRUeXBlQ291bnQiLCJiZWRyb29tSWQiLCJ0eXBlIiwiY291bnQiLCJiZWRyb29tIiwicHJldkJlZHMiLCJpbmRleCIsImZpbmRJbmRleCIsImJlZCIsInNwbGljZSIsInNldFB1YmxpY0JlZFR5cGVDb3VudCIsInNldEJhdGhyb29tQ291bnQiLCJzZXRCYXRocm9vbVR5cGUiLCJzZXRDb3VudHJ5Iiwic2V0Q2l0eSIsInNldERpc3RyaWN0Iiwic2V0U3RyZWV0QWRkcmVzcyIsInNldERldGFpbEFkZHJlc3MiLCJzZXRQb3N0Y29kZSIsInNldExhdGl0dWRlIiwic2V0TG9uZ2l0dWRlIiwic2V0QW1lbnRpdGllcyIsInNldENvbnZlbmllbmNlcyIsInNldFBob3RvcyIsInNldERlc2NyaXB0aW9uIiwicmVnaXN0ZXJSb29tQWN0aW9ucyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdEQTtBQUNBLElBQU1BLFlBQStCLEdBQUc7QUFDcEM7QUFDQUMsbUJBQWlCLEVBQUUsSUFGaUI7QUFFSjtBQUNoQ0MsY0FBWSxFQUFDLElBSHVCO0FBR0o7QUFDaENDLFVBQVEsRUFBRSxJQUowQjtBQUlKO0FBQ2hDQyxpQkFBZSxFQUFDLElBTG9CO0FBS0o7QUFDaEM7QUFDQUMsbUJBQWlCLEVBQUMsQ0FQa0I7QUFPSjtBQUNoQ0MsY0FBWSxFQUFDLENBUnVCO0FBUUo7QUFDaENDLFVBQVEsRUFBQyxDQVQyQjtBQVNKO0FBQ2hDQyxTQUFPLEVBQUMsRUFWNEI7QUFVSjtBQUNoQ0MsZUFBYSxFQUFDLEVBWHNCO0FBV0o7QUFDaEM7QUFDQUMsZUFBYSxFQUFFLENBYnFCO0FBYUo7QUFDaENDLGNBQVksRUFBRSxJQWRzQjtBQWNKO0FBQ2hDO0FBQ0FDLFNBQU8sRUFBQyxFQWhCNEI7QUFnQko7QUFDaENDLE1BQUksRUFBQyxFQWpCK0I7QUFpQko7QUFDaENDLFVBQVEsRUFBQyxFQWxCMkI7QUFrQko7QUFDaENDLGVBQWEsRUFBQyxFQW5Cc0I7QUFtQko7QUFDaENDLGVBQWEsRUFBQyxFQXBCc0I7QUFvQko7QUFDaENDLFVBQVEsRUFBQyxFQXJCMkI7QUFxQko7QUFDaENDLFVBQVEsRUFBQyxDQXRCMkI7QUFzQko7QUFDaENDLFdBQVMsRUFBQyxDQXZCMEI7QUF1Qko7QUFDaEM7QUFDQUMsWUFBVSxFQUFDLEVBekJ5QjtBQXlCSjtBQUNoQztBQUNBQyxjQUFZLEVBQUMsRUEzQnVCO0FBMkJKO0FBQ2hDO0FBQ0FDLFFBQU0sRUFBQyxFQTdCNkI7QUE2Qko7QUFDaEM7QUFDQUMsYUFBVyxFQUFDLEVB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TUFBTSxDQUFDQyxPQUF6QjtBQUNILEtBNUpJOztBQTZKTDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQ2tDLGlCQW5LSyx5QkFtS1NwQyxLQW5LVCxFQW1LZ0JDLE1BbktoQixFQW1LaUQ7QUFDbERELFdBQUssQ0FBQ1YsVUFBTixHQUFtQlcsTUFBTSxDQUFDQyxPQUExQjtBQUNILEtBcktJOztBQXNLTDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDQW1DLG1CQTVLSywyQkE0S1dyQyxLQTVLWCxFQTRLa0JDLE1BNUtsQixFQTRLbUQ7QUFDcERELFdBQUssQ0FBQ1QsWUFBTixHQUFxQlUsTUFBTSxDQUFDQyxPQUE1QjtBQUNILEtBOUtJOztBQStLTDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDQW9DLGFBckxLLHFCQXFMS3RDLEtBckxMLEVBcUxZQyxNQXJMWixFQXFMNkM7QUFDOUNELFdBQUssQ0FBQ1IsTUFBTixHQUFlUyxNQUFNLENBQUNDLE9BQXRCO0FBQ0gsS0F2TEk7O0FBd0xMO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNBcUMsa0JBOUxLLDBCQThMVXZDLEtBOUxWLEVBOExpQkMsTUE5TGpCLEVBOExnRDtBQUNqREQsV0FBSyxDQUFDUCxXQUFOLEdBQW9CUSxNQUFNLENBQUNDLE9BQTNCO0FBQ0g7QUFoTUk7QUFIb0IsQ0FBRCxDQUFoQztBQWdOTyxJQUFNc0MsbUJBQW1CLHFCQUFLN0MsWUFBWSxDQUFDOEMsT0FBbEIsQ0FBekI7QUFFUTlDLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDM5ODlhNGNkMDYxODJjMjg5ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdCB9IGZyb20gXCIuLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQge0JlZFR5cGV9IGZyb20gXCIuLi90eXBlcy9yb29tXCI7XHJcblxyXG50eXBlIFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgMeuLqOqzhCAo6rG066y8LCDsiJnshowpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgYnVpbGRpbmdUeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcm9vbVR5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAy64uo6rOEICjsnbjsm5AsIOy5qOuMgCwg6rO17Jqp6rO16rCEKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDpudW1iZXI7XHJcbiAgICBiZWRyb29tQ291bnQ6bnVtYmVyO1xyXG4gICAgYmVkQ291bnQ6bnVtYmVyO1xyXG4gICAgYmVkTGlzdDp7aWQ6bnVtYmVyOyBiZWRzOnt0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXX1bXTtcclxuICAgIHB1YmxpY0JlZExpc3Q6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdO1xyXG4gICAgXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAz64uo6rOEICjsmpXsi6QpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGJhdGhyb29tQ291bnQ6bnVtYmVyO1xyXG4gICAgYmF0aHJvb21UeXBlOiBcInByaXZhdGVcIiB8IFwicHVibGljXCIgfCBudWxsO1xyXG5cclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDTri6jqs4QgKOychOy5mCkg66as642V7IqkIOyEpOyglVxyXG4gICAgY291bnRyeTpzdHJpbmc7XHJcbiAgICBjaXR5OnN0cmluZztcclxuICAgIGRpc3RyaWN0OnN0cmluZztcclxuICAgIHN0cmVldEFkZHJlc3M6c3RyaW5nO1xyXG4gICAgZGV0YWlsQWRkcmVzczpzdHJpbmc7XHJcbiAgICBwb3N0Y29kZTpzdHJpbmc7XHJcbiAgICBsYXRpdHVkZTpudW1iZXI7XHJcbiAgICBsb25naXR1ZGU6bnVtYmVyO1xyXG5cclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDXri6jqs4QgKO2OuOydmOyLnOyEpCkg66as642V7IqkIOyEpOyglVxyXG4gICAgYW1lbnRpdGllczpzdHJpbmdbXTtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA264uo6rOEICjtjrjsnZjqs7XqsIQpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGNvbnZlbmllbmNlczpzdHJpbmdbXTtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA364uo6rOEICjsiJnshozsgqzsp4QpIOumrOuNleyKpCDshKTsoJVcclxuICAgIHBob3RvczpzdHJpbmdbXTtcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA464uo6rOEICjsiJnshozshKTrqoUpIOumrOuNleyKpCDshKTsoJVcclxuICAgIGRlc2NyaXB0aW9uOnN0cmluZztcclxuXHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCA564uo6rOEICjsoJzrqqkpIOumrOuNleyKpCDshKTsoJVcclxuICAgIHRpdGxlOnN0cmluZztcclxufTtcclxuXHJcbi8vICog7LSI6riw7IOB7YOcXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICAvL1xyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IG51bGwsICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg7YGwIOuylOyjvFxyXG4gICAgYnVpbGRpbmdUeXBlOm51bGwsICAgICAgICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJVcclxuICAgIHJvb21UeXBlOiBudWxsLCAgICAgICAgICAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVXHJcbiAgICBpc1NldFVwRm9yR3Vlc3Q6bnVsbCwgICAgICAgICAgIC8vICog6rKM7Iqk7Yq466eM7J2EIOychO2VtCDrp4zrk6TslrTsp4Qg7IiZ7IaM7J246rCAP1xyXG4gICAgLy9cclxuICAgIG1heGltdW1HdWVzdENvdW50OjEsICAgICAgICAgICAgLy8gKiDstZzrjIAg7IiZ67CVIOyduOybkFxyXG4gICAgYmVkcm9vbUNvdW50OjAsICAgICAgICAgICAgICAgICAvLyAqIOy5qOyLpCDqsJzsiJhcclxuICAgIGJlZENvdW50OjEsICAgICAgICAgICAgICAgICAgICAgLy8gKiDsuajrjIAg6rCc7IiYXHJcbiAgICBiZWRMaXN0OltdLCAgICAgICAgICAgICAgICAgICAgIC8vICog7Lmo64yAIOycoO2YlVxyXG4gICAgcHVibGljQmVkTGlzdDpbXSwgICAgICAgICAgICAgICAvLyAqIOqzteyaqeqzteqwhCDsuajrjIAg7Jyg7ZiVXHJcbiAgICAvL1xyXG4gICAgYmF0aHJvb21Db3VudDogMSwgICAgICAgICAgICAgICAvLyAqIOyaleyLpCDqsJzsiJhcclxuICAgIGJhdGhyb29tVHlwZTogbnVsbCwgICAgICAgICAgICAgLy8gKiDsmpXsi6Qg7Jyg7ZiVXHJcbiAgICAvL1xyXG4gICAgY291bnRyeTpcIlwiLCAgICAgICAgICAgICAgICAgICAgIC8vICog6rWt6rCAL+yngOyXrVxyXG4gICAgY2l0eTpcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgIC8vICog7IucL+uPhFxyXG4gICAgZGlzdHJpY3Q6XCJcIiwgICAgICAgICAgICAgICAgICAgIC8vICog7IucL+q1sC/qtaxcclxuICAgIHN0cmVldEFkZHJlc3M6XCJcIiwgICAgICAgICAgICAgICAvLyAqIOuPhOuhnOuqheyjvOyGjFxyXG4gICAgZGV0YWlsQWRkcmVzczpcIlwiLCAgICAgICAgICAgICAgIC8vICog64+Z7Zi47IiYXHJcbiAgICBwb3N0Y29kZTpcIlwiLCAgICAgICAgICAgICAgICAgICAgLy8gKiDsmrDtjrjrsojtmLhcclxuICAgIGxhdGl0dWRlOjAsICAgICAgICAgICAgICAgICAgICAgLy8gKiDsnITrj4RcclxuICAgIGxvbmdpdHVkZTowLCAgICAgICAgICAgICAgICAgICAgLy8gKiDqsr3rj4RcclxuICAgIC8vXHJcbiAgICBhbWVudGl0aWVzOltdLCAgICAgICAgICAgICAgICAgIC8vICog7Y647J2Y7Iuc7ISkXHJcbiAgICAvL1xyXG4gICAgY29udmVuaWVuY2VzOltdLCAgICAgICAgICAgICAgICAvLyAqIO2OuOydmOqzteqwhFxyXG4gICAgLy9cclxuICAgIHBob3RvczpbXSwgICAgICAgICAgICAgICAgICAgICAgLy8gKiDsiJnshozsgqzsp4RcclxuICAgIC8vXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLCAgICAgICAgICAgICAgICAgLy8gKiDsiJnshozshKTrqoVcclxuICAgIC8vXHJcbiAgICB0aXRsZTpcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiDsoJzrqqlcclxuICAgIFxyXG59O1xyXG5cclxuY29uc3QgcmVnaXN0ZXJSb29tID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTpcInJlZ2lzdGVyUm9vbVwiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDHri6jqs4QgKOqxtOusvCwg7IiZ7IaMKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vIO2BsCDqsbTrrLwg7Jyg7ZiVIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldExhcmdlQnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGUubGFyZ2VCdWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0QnVpbGRpbmdUeXBlKHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxzdHJpbmc+KXtcclxuICAgICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQ9PT1cIlwiKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZT1udWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlLmJ1aWxkaW5nVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOyImeyGjCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldFJvb21UeXBlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248XCJlbnRpcmVcIiB8IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIj4pIHtcclxuICAgICAgICAgICAgc3RhdGUucm9vbVR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiAn6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCcg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0SXNTZXRVcEZvckd1ZXN0KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxib29sZWFuPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2V0VXBGb3JHdWVzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy1nOuMgCDsiJnrsJUg7J247JuQIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldE1heGltdW1HdWVzdENvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUubWF4aW11bUd1ZXN0Q291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgMuuLqOqzhCAo7J247JuQLCDsuajrjIAsIOqzteyaqeqzteqwhCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIOy5qOyLpCDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkcm9vbUNvdW50KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBjb25zdCBiZWRyb29tQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgbGV0IHsgYmVkTGlzdCB9ID0gc3RhdGU7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5iZWRyb29tQ291bnQgPSBiZWRyb29tQ291bnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmVkcm9vbUNvdW50IDwgYmVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vKiDquLDsobQg7Lmo64yAIOqwnOyImOqwgCDrjZQg66eO7Jy866m0IOy0iOqzvOu2gOu2hCDsnpjrnbzrgrTquLBcclxuICAgICAgICAgICAgICAgIGJlZExpc3QgPSBzdGF0ZS5iZWRMaXN0LnNsaWNlKDAsIGJlZHJvb21Db3VudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyog67OA6rK965CgIOy5qOuMgCDqsJzsiJjqsIAg642UIOunjuycvOuptCDrgpjrqLjsp4Ag7Lmo7IukIOyxhOyasOq4sFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGJlZExpc3QubGVuZ3RoICsgMTsgaSA8IGJlZHJvb21Db3VudCArIDE7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgYmVkTGlzdC5wdXNoKHsgaWQ6IGksIGJlZHM6IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5iZWRMaXN0ID0gYmVkTGlzdDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDstZzrjIAg7Lmo64yAIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmJlZENvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7Lmo64yAIOycoO2YlSDqsJzsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0QmVkVHlwZUNvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjx7YmVkcm9vbUlkOm51bWJlcjsgdHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9Pil7XHJcbiAgICAgICAgICAgIGNvbnN0IHtiZWRyb29tSWQsIHR5cGUsIGNvdW50fSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zdCBiZWRyb29tID0gc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgcHJldkJlZHMgPSBiZWRyb29tLmJlZHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJldkJlZHMuZmluZEluZGV4KChiZWQpID0+IGJlZC50eXBlID09PSB0eXBlKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsl4bri6TrqbQuLi5cclxuICAgICAgICAgICAgICAgIHN0YXRlLmJlZExpc3RbYmVkcm9vbUlkIC0gMV0uYmVkcyA9IFsuLi5wcmV2QmVkcywge3R5cGUsIGNvdW50fV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyhtOyerCDtlZzri6TrqbQuLi5cclxuICAgICAgICAgICAgaWYoY291bnQgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzW2luZGV4XS5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog6rO17Jqp6rO16rCEIOy5qOuMgCDsnKDtmJUg6rCc7IiYIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRQdWJsaWNCZWRUeXBlQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPHt0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn0+KXtcclxuICAgICAgICAgICAgY29uc3Qge3R5cGUsIGNvdW50fSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kZXg9c3RhdGUucHVibGljQmVkTGlzdC5maW5kSW5kZXgoKGJlZCk9PmJlZC50eXBlPT09dHlwZSk7XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAvLyAqIO2DgOyeheydtCDsl4bri6TrqbQuLi5cclxuICAgICAgICAgICAgICAgIHN0YXRlLnB1YmxpY0JlZExpc3QgPSBbLi4uc3RhdGUucHVibGljQmVkTGlzdCwge3R5cGUsIGNvdW50fV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyhtOyerCDtlZzri6TrqbQuLi5cclxuICAgICAgICAgICAgaWYoY291bnQgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnB1YmxpY0JlZExpc3RbaW5kZXhdLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgM+uLqOqzhCAo7JqV7IukKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7JqV7IukIOqwnOyImCDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0QmF0aHJvb21Db3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248bnVtYmVyPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmJhdGhyb29tQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7JqV7IukIOycoO2YlSDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0QmF0aHJvb21UeXBlKHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxcInByaXZhdGVcIiB8IFwicHVibGljXCI+KXtcclxuICAgICAgICAgICAgc3RhdGUuYmF0aHJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCA064uo6rOEICjsnITsuZgpIENoYW5nZVxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAvLyAqIOq1reqwgCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRDb3VudHJ5KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5jb3VudHJ5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog7Iuc64+EIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldENpdHkoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNpdHkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDsi5zqtbDqtawgIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldERpc3RyaWN0KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5kaXN0cmljdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOuPhOuhnOuqheyjvOyGjCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRTdHJlZXRBZGRyZXNzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHJlZXRBZGRyZXNzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog64+Z7Zi47IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldERldGFpbEFkZHJlc3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmRldGFpbEFkZHJlc3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDsmrDtjrjrsojtmLgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0UG9zdGNvZGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBvc3Rjb2RlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog7JyE64+EIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldExhdGl0dWRlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXRpdHVkZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOqyveuPhCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMb25naXR1ZGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxvbmdpdHVkZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgNeuLqOqzhCAo7Y647J2Y7Iuc7ISkKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgLy8gKiDtjrjsnZgg7Iuc7ISkIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEFtZW50aXRpZXMoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgc3RhdGUuYW1lbnRpdGllcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgNuuLqOqzhCAo7Y647J2Y6rO16rCEKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7Y647J2YIOqzteqwhCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRDb252ZW5pZW5jZXMoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgc3RhdGUuY29udmVuaWVuY2VzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCA364uo6rOEICjsiJnshozsgqzsp4QpIHBob3RvXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgICAvLyAqIOyImeyGjCDsgqzsp4Qg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0UGhvdG9zKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBob3RvcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgOOuLqOqzhCAo7IiZ7IaM7ISk66qFKSBkZXNjcmlwdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsiJnshowg7ISk66qFIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5kZXNjcmlwdGlvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclJvb21BY3Rpb25zPXsuLi5yZWdpc3RlclJvb20uYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclJvb207Il0sInNvdXJjZVJvb3QiOiIifQ==