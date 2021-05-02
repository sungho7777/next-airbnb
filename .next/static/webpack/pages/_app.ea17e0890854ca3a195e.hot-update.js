webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/HeaderUserProfile.tsx":
/*!******************************************!*\
  !*** ./components/HeaderUserProfile.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-outside-click-handler */ "./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/user */ "./store/user.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/api/auth */ "./lib/api/auth.ts");





var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\HeaderUserProfile.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var HamburgerIcon = function HamburgerIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M12 1.6H0V0h12v1.6zm0 1.6H0v1.6h12V3.2zm0 3.2H0V8h12V6.4z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c2 = HamburgerIcon;
HamburgerIcon.defaultProps = {
  width: "12",
  height: "8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};





var HeaderUserProfile = function HeaderUserProfile() {
  _s();

  // 유저 메뉴 열고, 닫힌 여부
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isUsermenuOpened = _useState[0],
      setIsUsermenuOpened = _useState[1];

  var userProfileImage = Object(_store__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user.profileImage;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])(); // 로그아웃 하기

  var logout = /*#__PURE__*/function () {
    var _ref = Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      return D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_lib_api_auth__WEBPACK_IMPORTED_MODULE_10__["logoutAPI"])();

            case 3:
              dispatch(_store_user__WEBPACK_IMPORTED_MODULE_8__["userActions"].initUser());
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function logout() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onOutsideClick: function onOutsideClick() {
      if (isUsermenuOpened) {
        setIsUsermenuOpened(false);
      }
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "header-user-profile",
      type: "button",
      onClick: function onClick() {
        return setIsUsermenuOpened(!isUsermenuOpened);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(HamburgerIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: userProfileImage,
        className: "header-user-profile-image",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), isUsermenuOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
      className: "header-usermenu",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
        children: "\uC219\uC18C \uAD00\uB9AC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/room/register/building",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          role: "presentation",
          onClick: function onClick() {
            setIsUsermenuOpened(false);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
            children: "\uC219\uC18C \uB4F1\uB85D\uD558\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "header-usermenu-divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
        role: "presentation",
        onClick: logout,
        children: "\uB85C\uADF8\uC544\uC6C3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(HeaderUserProfile, "PBkzXdk1OX+UY5hBpO6AWYtMYZU=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
});

_c = HeaderUserProfile;
/* harmony default export */ __webpack_exports__["default"] = (HeaderUserProfile);

var _c, _c2;

$RefreshReg$(_c, "HeaderUserProfile");
$RefreshReg$(_c2, "HamburgerIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJVc2VyUHJvZmlsZS50c3giXSwibmFtZXMiOlsiSGFtYnVyZ2VySWNvbiIsIkhlYWRlclVzZXJQcm9maWxlIiwidXNlU3RhdGUiLCJpc1VzZXJtZW51T3BlbmVkIiwic2V0SXNVc2VybWVudU9wZW5lZCIsInVzZXJQcm9maWxlSW1hZ2UiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInByb2ZpbGVJbWFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJsb2dvdXQiLCJsb2dvdXRBUEkiLCJ1c2VyQWN0aW9ucyIsImluaXRVc2VyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ09BLGEsWUFBQUEsYTs7Ozs7Ozs7O01BQUFBLGE7QUFBQUEsYTs7Ozs7O0FBQ1A7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsaUJBQTJCLEdBQUcsU0FBOUJBLGlCQUE4QixHQUFNO0FBQUE7O0FBQ3hDO0FBRHdDLGtCQUVRQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVqQ0MsZ0JBRmlDO0FBQUEsTUFFZkMsbUJBRmU7O0FBR3hDLE1BQU1DLGdCQUFnQixHQUFHQywwREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsWUFBdEI7QUFBQSxHQUFELENBQXBDO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQUx3QyxDQU94Qzs7QUFDQSxNQUFNQyxNQUFNO0FBQUEsb1VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTEMsZ0VBQVMsRUFGSjs7QUFBQTtBQUdYSCxzQkFBUSxDQUFDSSx1REFBVyxDQUFDQyxRQUFaLEVBQUQsQ0FBUjtBQUhXO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS1hDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFNQyxPQUFsQjs7QUFMVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFOTixNQUFNO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBU0Esc0JBQ0UscUVBQUMsa0VBQUQ7QUFDRSxrQkFBYyxFQUFFLDBCQUFNO0FBQ3BCLFVBQUlULGdCQUFKLEVBQXNCO0FBQ3BCQywyQkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0Q7QUFDRixLQUxIO0FBQUEsNEJBT0U7QUFDRSxlQUFTLEVBQUMscUJBRFo7QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLGFBQU8sRUFBRTtBQUFBLGVBQU1BLG1CQUFtQixDQUFDLENBQUNELGdCQUFGLENBQXpCO0FBQUEsT0FIWDtBQUFBLDhCQUtFLHFFQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUU7QUFDRSxXQUFHLEVBQUVFLGdCQURQO0FBRUUsaUJBQVMsRUFBQywyQkFGWjtBQUdFLFdBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixFQW1CR0YsZ0JBQWdCLGlCQUNmO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLHlCQUFYO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsY0FEUDtBQUVFLGlCQUFPLEVBQUUsbUJBQU07QUFDYkMsK0JBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNELFdBSkg7QUFBQSxpQ0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFZRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkYsZUFhRTtBQUFJLFlBQUksRUFBQyxjQUFUO0FBQXdCLGVBQU8sRUFBRVEsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0QsQ0ExREQ7O0dBQU1YLGlCO1VBR3FCSyxrRCxFQUVSSyx1RDs7O0tBTGJWLGlCO0FBNERTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVhMTdlMDg5MDg1NGNhM2ExOTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBPdXRzaWRlQ2xpY2tIYW5kbGVyIGZyb20gJ3JlYWN0LW91dHNpZGUtY2xpY2staGFuZGxlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSGFtYnVyZ2VySWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zdmcvaGVhZGVyL2hhbWJ1cmdlci5zdmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IHVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvdXNlcic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7IGxvZ291dEFQSSB9IGZyb20gJy4uL2xpYi9hcGkvYXV0aCc7XHJcblxyXG5jb25zdCBIZWFkZXJVc2VyUHJvZmlsZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgLy8g7Jyg7KCAIOuplOuJtCDsl7Tqs6AsIOuLq+2ejCDsl6zrtoBcclxuICBjb25zdCBbaXNVc2VybWVudU9wZW5lZCwgc2V0SXNVc2VybWVudU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdXNlclByb2ZpbGVJbWFnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5wcm9maWxlSW1hZ2UpO1xyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIC8vIOuhnOq3uOyVhOybgyDtlZjquLBcclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBsb2dvdXRBUEkoKTtcclxuICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuaW5pdFVzZXIoKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8T3V0c2lkZUNsaWNrSGFuZGxlclxyXG4gICAgICBvbk91dHNpZGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1VzZXJtZW51T3BlbmVkKSB7XHJcbiAgICAgICAgICBzZXRJc1VzZXJtZW51T3BlbmVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItdXNlci1wcm9maWxlXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1VzZXJtZW51T3BlbmVkKCFpc1VzZXJtZW51T3BlbmVkKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIYW1idXJnZXJJY29uIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXt1c2VyUHJvZmlsZUltYWdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXVzZXItcHJvZmlsZS1pbWFnZVwiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7aXNVc2VybWVudU9wZW5lZCAmJiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlci11c2VybWVudVwiPlxyXG4gICAgICAgICAgPGxpPuyImeyGjCDqtIDrpqw8L2xpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yb29tL3JlZ2lzdGVyL2J1aWxkaW5nXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNVc2VybWVudU9wZW5lZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxsaT7siJnshowg65Ox66Gd7ZWY6riwPC9saT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdXNlcm1lbnUtZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAg66Gc6re47JWE7JuDXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICl9XHJcbiAgICA8L091dHNpZGVDbGlja0hhbmRsZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=