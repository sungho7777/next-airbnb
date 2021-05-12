webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/staticData.ts":
/*!***************************!*\
  !*** ./lib/staticData.ts ***!
  \***************************/
/*! exports provided: monthList, dayList, yearList, largeBuildingTypeList, apartmentBuildingTypeList, houstBuildingTypeList, secondaryUnitBuildingTypeList, uniqueSpaceBuildingTypeList, bnbBuildingTypeList, boutiquesHotelBuildingTypeList, bedroomCountList, bedTypes, countryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthList", function() { return monthList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayList", function() { return dayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearList", function() { return yearList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largeBuildingTypeList", function() { return largeBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apartmentBuildingTypeList", function() { return apartmentBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "houstBuildingTypeList", function() { return houstBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryUnitBuildingTypeList", function() { return secondaryUnitBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueSpaceBuildingTypeList", function() { return uniqueSpaceBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bnbBuildingTypeList", function() { return bnbBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boutiquesHotelBuildingTypeList", function() { return boutiquesHotelBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bedroomCountList", function() { return bedroomCountList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bedTypes", function() { return bedTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryList", function() { return countryList; });
var monthList = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]; // 1부터 31까지

var dayList = Array.from(Array(31), function (_, i) {
  return String(i + 1);
}); // 2020부터 1900년까지

var yearList = Array.from(Array(121), function (_, i) {
  return String(2020 - i);
}); // * 숙소 큰 범위의 건물 유형

var largeBuildingTypeList = ["아파트", "주택", "별채", "독특한 숙소", "B&B", "부티크호텔"]; // * 아파트 건물 유형

var apartmentBuildingTypeList = ["아파트", "공동주택", "별채", "키사 파르티쿨라르(쿠바)", "로프트", "레지던트"]; // * 주택 건물 유형

var houstBuildingTypeList = ["주택", "방갈로", "통나무집", "카사", "파르티쿨라르(쿠바)", "살레", "전원주택", "키클라데스", "주택(그리스)", "담무소(이탈리아)", "돔하우스", "땅속의 집", "농장 체험 숙박", "하우스 보트", "오두막", "등대", "팬션(한국)", "마차(영국, 프랑스)", "초소형 주택", "타운하우스", "트룰로(이탈리아)", "저택"]; // * 별채 건물 유형

var secondaryUnitBuildingTypeList = ["게스트용 별채", "게스트 스위트", "농장 체험 숙박"]; // * 독특한 숙소 건물 유형

var uniqueSpaceBuildingTypeList = ["헛간", "보트", "버스", "캠핑카", "캠핑장", "성", "동굴", "돔하우스", "땅속의 집", "농장 체험 숙박", "하우스 보트", "오두막", "이글루", "섬", "등대", "펜션(한국)", "비행기", "마차(영국, 프랑스)", "텐트", "초소형 주택", "티피", "기차", "트리하우스", "풍차", "유르트"]; // * B&B 건물 유형

var bnbBuildingTypeList = ["B&B", "카사 파르티쿨라르(쿠바)", "농장 체험 숙박", "민수 (타이완)", "산장", "료칸(일본)"]; // * 부티크 호텔 건물 유형

var boutiquesHotelBuildingTypeList = ["부티크 호텔", "아파트 호텔", "헤리티지 호텔(인도)", "호스텔", "호텔", "산장", "리조트", "레지던스", "객잔(중국)"]; //* 침실 개수

var bedroomCountList = Array.from(Array(16), function (_, i) {
  return "\uCE68\uC2E4 ".concat(i, "\uAC1C");
}); // * 침대 유형

var bedTypes = ["소파", "에어 매트릭스", "요와 이블", "싱글", "더블", "퀸", "이층 침대", "바닥용 에어매트릭스", "유아 침대", "유아용 침대", "해먹", "물침대"]; // * 국가 리스트

var countryList = [];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3N0YXRpY0RhdGEudHMiXSwibmFtZXMiOlsibW9udGhMaXN0IiwiZGF5TGlzdCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiU3RyaW5nIiwieWVhckxpc3QiLCJsYXJnZUJ1aWxkaW5nVHlwZUxpc3QiLCJhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0IiwiaG91c3RCdWlsZGluZ1R5cGVMaXN0Iiwic2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3QiLCJ1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3QiLCJibmJCdWlsZGluZ1R5cGVMaXN0IiwiYm91dGlxdWVzSG90ZWxCdWlsZGluZ1R5cGVMaXN0IiwiYmVkcm9vbUNvdW50TGlzdCIsImJlZFR5cGVzIiwiY291bnRyeUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsU0FBUyxHQUFHLENBQ3ZCLElBRHVCLEVBRXZCLElBRnVCLEVBR3ZCLElBSHVCLEVBSXZCLElBSnVCLEVBS3ZCLElBTHVCLEVBTXZCLElBTnVCLEVBT3ZCLElBUHVCLEVBUXZCLElBUnVCLEVBU3ZCLElBVHVCLEVBVXZCLEtBVnVCLEVBV3ZCLEtBWHVCLEVBWXZCLEtBWnVCLENBQWxCLEMsQ0FlUDs7QUFDTyxJQUFNQyxPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUMsRUFBRCxDQUFoQixFQUFzQixVQUFDRSxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVQyxNQUFNLENBQUNELENBQUMsR0FBRyxDQUFMLENBQWhCO0FBQUEsQ0FBdEIsQ0FBaEIsQyxDQUVQOztBQUNPLElBQU1FLFFBQVEsR0FBR0wsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQyxHQUFELENBQWhCLEVBQXVCLFVBQUNFLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVVDLE1BQU0sQ0FBQyxPQUFPRCxDQUFSLENBQWhCO0FBQUEsQ0FBdkIsQ0FBakIsQyxDQUVQOztBQUNPLElBQU1HLHFCQUFxQixHQUFDLENBQ2pDLEtBRGlDLEVBRWpDLElBRmlDLEVBR2pDLElBSGlDLEVBSWpDLFFBSmlDLEVBS2pDLEtBTGlDLEVBTWpDLE9BTmlDLENBQTVCLEMsQ0FTUDs7QUFDTyxJQUFNQyx5QkFBeUIsR0FBQyxDQUNyQyxLQURxQyxFQUVyQyxNQUZxQyxFQUdyQyxJQUhxQyxFQUlyQyxlQUpxQyxFQUtyQyxLQUxxQyxFQU1yQyxNQU5xQyxDQUFoQyxDLENBU1A7O0FBQ08sSUFBTUMscUJBQXFCLEdBQUMsQ0FDakMsSUFEaUMsRUFFakMsS0FGaUMsRUFHakMsTUFIaUMsRUFJakMsSUFKaUMsRUFLakMsWUFMaUMsRUFNakMsSUFOaUMsRUFPakMsTUFQaUMsRUFRakMsT0FSaUMsRUFTakMsU0FUaUMsRUFVakMsV0FWaUMsRUFXakMsTUFYaUMsRUFZakMsT0FaaUMsRUFhakMsVUFiaUMsRUFjakMsUUFkaUMsRUFlakMsS0FmaUMsRUFnQmpDLElBaEJpQyxFQWlCakMsUUFqQmlDLEVBa0JqQyxhQWxCaUMsRUFtQmpDLFFBbkJpQyxFQW9CakMsT0FwQmlDLEVBcUJqQyxXQXJCaUMsRUFzQmpDLElBdEJpQyxDQUE1QixDLENBeUJQOztBQUNPLElBQU1DLDZCQUE2QixHQUFDLENBQ3pDLFNBRHlDLEVBRXpDLFNBRnlDLEVBR3pDLFVBSHlDLENBQXBDLEMsQ0FNUDs7QUFDTyxJQUFNQywyQkFBMkIsR0FBQyxDQUN2QyxJQUR1QyxFQUV2QyxJQUZ1QyxFQUd2QyxJQUh1QyxFQUl2QyxLQUp1QyxFQUt2QyxLQUx1QyxFQU12QyxHQU51QyxFQU92QyxJQVB1QyxFQVF2QyxNQVJ1QyxFQVN2QyxPQVR1QyxFQVV2QyxVQVZ1QyxFQVd2QyxRQVh1QyxFQVl2QyxLQVp1QyxFQWF2QyxLQWJ1QyxFQWN2QyxHQWR1QyxFQWV2QyxJQWZ1QyxFQWdCdkMsUUFoQnVDLEVBaUJ2QyxLQWpCdUMsRUFrQnZDLGFBbEJ1QyxFQW1CdkMsSUFuQnVDLEVBb0J2QyxRQXBCdUMsRUFxQnZDLElBckJ1QyxFQXNCdkMsSUF0QnVDLEVBdUJ2QyxPQXZCdUMsRUF3QnZDLElBeEJ1QyxFQXlCdkMsS0F6QnVDLENBQWxDLEMsQ0E0QlA7O0FBQ08sSUFBTUMsbUJBQW1CLEdBQUMsQ0FDL0IsS0FEK0IsRUFFL0IsZUFGK0IsRUFHL0IsVUFIK0IsRUFJL0IsVUFKK0IsRUFLL0IsSUFMK0IsRUFNL0IsUUFOK0IsQ0FBMUIsQyxDQVNQOztBQUNPLElBQU1DLDhCQUE4QixHQUFDLENBQzFDLFFBRDBDLEVBRTFDLFFBRjBDLEVBRzFDLGFBSDBDLEVBSTFDLEtBSjBDLEVBSzFDLElBTDBDLEVBTTFDLElBTjBDLEVBTzFDLEtBUDBDLEVBUTFDLE1BUjBDLEVBUzFDLFFBVDBDLENBQXJDLEMsQ0FZUDs7QUFDTyxJQUFNQyxnQkFBZ0IsR0FBR2IsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQyxFQUFELENBQWhCLEVBQXNCLFVBQUNFLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGdDQUFnQkEsQ0FBaEI7QUFBQSxDQUF0QixDQUF6QixDLENBRVA7O0FBQ08sSUFBTVcsUUFBa0IsR0FBQyxDQUM5QixJQUQ4QixFQUU5QixTQUY4QixFQUc5QixPQUg4QixFQUk5QixJQUo4QixFQUs5QixJQUw4QixFQU05QixHQU44QixFQU85QixPQVA4QixFQVE5QixZQVI4QixFQVM5QixPQVQ4QixFQVU5QixRQVY4QixFQVc5QixJQVg4QixFQVk5QixLQVo4QixDQUF6QixDLENBZVA7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLEVBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGFlZTAwMzZmNzAyZTQzMGQ5ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlZFR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvcm9vbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vbnRoTGlzdCA9IFtcclxuICBcIjHsm5RcIixcclxuICBcIjLsm5RcIixcclxuICBcIjPsm5RcIixcclxuICBcIjTsm5RcIixcclxuICBcIjXsm5RcIixcclxuICBcIjbsm5RcIixcclxuICBcIjfsm5RcIixcclxuICBcIjjsm5RcIixcclxuICBcIjnsm5RcIixcclxuICBcIjEw7JuUXCIsXHJcbiAgXCIxMeyblFwiLFxyXG4gIFwiMTLsm5RcIlxyXG5dO1xyXG5cclxuLy8gMeu2gO2EsCAzMeq5jOyngFxyXG5leHBvcnQgY29uc3QgZGF5TGlzdCA9IEFycmF5LmZyb20oQXJyYXkoMzEpLCAoXywgaSkgPT4gU3RyaW5nKGkgKyAxKSk7XHJcblxyXG4vLyAyMDIw67aA7YSwIDE5MDDrhYTquYzsp4BcclxuZXhwb3J0IGNvbnN0IHllYXJMaXN0ID0gQXJyYXkuZnJvbShBcnJheSgxMjEpLCAoXywgaSkgPT4gU3RyaW5nKDIwMjAgLSBpKSk7XHJcblxyXG4vLyAqIOyImeyGjCDtgbAg67KU7JyE7J2YIOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGxhcmdlQnVpbGRpbmdUeXBlTGlzdD1bXHJcbiAgXCLslYTtjIztirhcIixcclxuICBcIuyjvO2DnVwiLFxyXG4gIFwi67OE7LGEXCIsXHJcbiAgXCLrj4XtirntlZwg7IiZ7IaMXCIsXHJcbiAgXCJCJkJcIixcclxuICBcIuu2gO2LsO2BrO2YuO2FlFwiLFxyXG5dO1xyXG5cclxuLy8gKiDslYTtjIztirgg6rG066y8IOycoO2YlVxyXG5leHBvcnQgY29uc3QgYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdD1bXHJcbiAgXCLslYTtjIztirhcIixcclxuICBcIuqzteuPmeyjvO2DnVwiLFxyXG4gIFwi67OE7LGEXCIsXHJcbiAgXCLtgqTsgqwg7YyM66W07Yuw7L+o652866W0KOy/oOuwlClcIixcclxuICBcIuuhnO2UhO2KuFwiLFxyXG4gIFwi66CI7KeA642Y7Yq4XCIsXHJcbl07XHJcblxyXG4vLyAqIOyjvO2DnSDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBob3VzdEJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwi7KO87YOdXCIsXHJcbiAgXCLrsKnqsIjroZxcIixcclxuICBcIu2GteuCmOustOynkVwiLFxyXG4gIFwi7Lm07IKsXCIsXHJcbiAgXCLtjIzrpbTti7Dsv6jrnbzrpbQo7L+g67CUKVwiLFxyXG4gIFwi7IK066CIXCIsXHJcbiAgXCLsoITsm5Dso7ztg51cIixcclxuICBcIu2CpO2BtOudvOuNsOyKpFwiLFxyXG4gIFwi7KO87YOdKOq3uOumrOyKpClcIixcclxuICBcIuuLtOustOyGjCjsnbTtg4jrpqzslYQpXCIsXHJcbiAgXCLrj5TtlZjsmrDsiqRcIixcclxuICBcIuuVheyGjeydmCDsp5FcIixcclxuICBcIuuGjeyepSDssrTtl5gg7IiZ67CVXCIsXHJcbiAgXCLtlZjsmrDsiqQg67O07Yq4XCIsXHJcbiAgXCLsmKTrkZDrp4lcIixcclxuICBcIuuTseuMgFwiLFxyXG4gIFwi7Yys7IWYKO2VnOq1rSlcIixcclxuICBcIuuniOywqCjsmIHqta0sIO2UhOuekeyKpClcIixcclxuICBcIuy0iOyGjO2YlSDso7ztg51cIixcclxuICBcIu2DgOyatO2VmOyasOyKpFwiLFxyXG4gIFwi7Yq466Ow66GcKOydtO2DiOumrOyVhClcIixcclxuICBcIuyggO2DnVwiLFxyXG5dO1xyXG5cclxuLy8gKiDrs4TssYQg6rG066y8IOycoO2YlVxyXG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwi6rKM7Iqk7Yq47JqpIOuzhOyxhFwiLFxyXG4gIFwi6rKM7Iqk7Yq4IOyKpOychO2KuFwiLFxyXG4gIFwi64aN7J6lIOyytO2XmCDsiJnrsJVcIixcclxuXTtcclxuXHJcbi8vICog64+F7Yq57ZWcIOyImeyGjCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwi7Zeb6rCEXCIsXHJcbiAgXCLrs7TtirhcIixcclxuICBcIuuyhOyKpFwiLFxyXG4gIFwi7Lqg7ZWR7Lm0XCIsXHJcbiAgXCLsuqDtlZHsnqVcIixcclxuICBcIuyEsVwiLFxyXG4gIFwi64+Z6rW0XCIsXHJcbiAgXCLrj5TtlZjsmrDsiqRcIixcclxuICBcIuuVheyGjeydmCDsp5FcIixcclxuICBcIuuGjeyepSDssrTtl5gg7IiZ67CVXCIsXHJcbiAgXCLtlZjsmrDsiqQg67O07Yq4XCIsXHJcbiAgXCLsmKTrkZDrp4lcIixcclxuICBcIuydtOq4gOujqFwiLFxyXG4gIFwi7ISsXCIsXHJcbiAgXCLrk7HrjIBcIixcclxuICBcIu2OnOyFmCjtlZzqta0pXCIsXHJcbiAgXCLruYTtlonquLBcIixcclxuICBcIuuniOywqCjsmIHqta0sIO2UhOuekeyKpClcIixcclxuICBcIu2FkO2KuFwiLFxyXG4gIFwi7LSI7IaM7ZiVIOyjvO2DnVwiLFxyXG4gIFwi7Yuw7ZS8XCIsXHJcbiAgXCLquLDssKhcIixcclxuICBcIu2KuOumrO2VmOyasOyKpFwiLFxyXG4gIFwi7ZKN7LCoXCIsXHJcbiAgXCLsnKDrpbTtirhcIixcclxuXTtcclxuXHJcbi8vICogQiZCIOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGJuYkJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwiQiZCXCIsXHJcbiAgXCLsubTsgqwg7YyM66W07Yuw7L+o652866W0KOy/oOuwlClcIixcclxuICBcIuuGjeyepSDssrTtl5gg7IiZ67CVXCIsXHJcbiAgXCLrr7zsiJggKO2DgOydtOyZhClcIixcclxuICBcIuyCsOyepVwiLFxyXG4gIFwi66OM7Lm4KOydvOuzuClcIixcclxuXTtcclxuXHJcbi8vICog67aA7Yuw7YGsIO2YuO2FlCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwi67aA7Yuw7YGsIO2YuO2FlFwiLFxyXG4gIFwi7JWE7YyM7Yq4IO2YuO2FlFwiLFxyXG4gIFwi7Zek66as7Yuw7KeAIO2YuO2FlCjsnbjrj4QpXCIsXHJcbiAgXCLtmLjsiqTthZRcIixcclxuICBcIu2YuO2FlFwiLFxyXG4gIFwi7IKw7J6lXCIsXHJcbiAgXCLrpqzsobDtirhcIixcclxuICBcIuugiOyngOuNmOyKpFwiLFxyXG4gIFwi6rCd7J6UKOykkeq1rSlcIixcclxuXTtcclxuXHJcbi8vKiDsuajsi6Qg6rCc7IiYXHJcbmV4cG9ydCBjb25zdCBiZWRyb29tQ291bnRMaXN0ID0gQXJyYXkuZnJvbShBcnJheSgxNiksIChfLCBpKSA9PiBg7Lmo7IukICR7aX3qsJxgKTtcclxuXHJcbi8vICog7Lmo64yAIOycoO2YlVxyXG5leHBvcnQgY29uc3QgYmVkVHlwZXM6QmVkVHlwZVtdPVtcclxuICBcIuyGjO2MjFwiLFxyXG4gIFwi7JeQ7Ja0IOunpO2KuOumreyKpFwiLFxyXG4gIFwi7JqU7JmAIOydtOu4lFwiLFxyXG4gIFwi7Iux6riAXCIsXHJcbiAgXCLrjZTruJRcIixcclxuICBcIu2AuFwiLFxyXG4gIFwi7J207Li1IOy5qOuMgFwiLFxyXG4gIFwi67CU64ul7JqpIOyXkOyWtOunpO2KuOumreyKpFwiLFxyXG4gIFwi7Jyg7JWEIOy5qOuMgFwiLFxyXG4gIFwi7Jyg7JWE7JqpIOy5qOuMgFwiLFxyXG4gIFwi7ZW066i5XCIsXHJcbiAgXCLrrLzsuajrjIBcIixcclxuXTtcclxuXHJcbi8vICog6rWt6rCAIOumrOyKpO2KuFxyXG5leHBvcnQgY29uc3QgY291bnRyeUxpc3QgPSBbXTsiXSwic291cmNlUm9vdCI6IiJ9