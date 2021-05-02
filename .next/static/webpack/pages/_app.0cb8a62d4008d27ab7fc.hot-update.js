webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/auth/LoginModal.tsx":
/*!****************************************!*\
  !*** ./components/auth/LoginModal.tsx ***!
  \****************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Input */ "./components/common/Input.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.ts");
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/api/auth */ "./lib/api/auth.ts");
/* harmony import */ var _hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useValidateMode */ "./hooks/useValidateMode.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/user */ "./store/user.ts");





var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\auth\\LoginModal.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var MailIcon = function MailIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M.306 0v13.5H22V0H.306zm5.987 5.947L2.114 10.23V3.137l4.179 2.81zM2.55 1.5h17.206l-8.603 5.785L2.55 1.5zm5.147 5.391 3.456 2.324 3.462-2.328L19.688 12H2.713l4.984-5.109zm8.323-.948 4.172-2.806v7.011L16.02 5.943z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c3 = MailIcon;
MailIcon.defaultProps = {
  width: "22",
  height: "14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var OpenedEyeIcon = function OpenedEyeIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M15.941 4.81c-.126-.183-3.154-4.477-7.94-4.477C3.892.333.232 4.603.078 4.785a.335.335 0 0 0 0 .43C.233 5.397 3.893 9.667 8 9.667c4.108 0 7.768-4.27 7.922-4.452a.333.333 0 0 0 .019-.404zM8.001 9C4.707 9 1.576 5.86.78 5c.794-.86 3.922-4 7.22-4 3.852 0 6.571 3.135 7.235 3.982C14.47 5.815 11.321 9 8 9z",
      fill: "#000"
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M8 2.333A2.67 2.67 0 0 0 5.333 5 2.67 2.67 0 0 0 8 7.667 2.67 2.67 0 0 0 10.667 5 2.67 2.67 0 0 0 8 2.333zM8 7c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z",
      fill: "#000"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

_c4 = OpenedEyeIcon;
OpenedEyeIcon.defaultProps = {
  width: "16",
  height: "10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ClosedEyeIcon = function ClosedEyeIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M15.84 8.311a.449.449 0 0 1-.636-.054l-1.181-1.404A8.062 8.062 0 0 1 12.05 8.17l.674 1.634a.45.45 0 1 1-.834.344l-.674-1.634a9.843 9.843 0 0 1-2.893.527v1.745a.45.45 0 0 1-.902 0V9.041a9.945 9.945 0 0 1-2.669-.454l-.644 1.56a.451.451 0 1 1-.834-.343l.634-1.536a8.081 8.081 0 0 1-2.04-1.286L.797 8.257a.45.45 0 1 1-.69-.58L1.22 6.352C.413 5.475.07 4.704.037 4.629a.45.45 0 1 1 .828-.356c.03.07.382.845 1.223 1.683.012.008.024.015.035.024.03.025.054.054.076.084A7.241 7.241 0 0 0 4.63 7.587c.014.005.029.007.043.013l.016.009c.875.326 1.926.54 3.184.54 5.282 0 6.991-3.837 7.008-3.876a.45.45 0 1 1 .829.356c-.03.07-.34.762-1.053 1.578l1.237 1.469a.45.45 0 0 1-.055.635z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c5 = ClosedEyeIcon;
ClosedEyeIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};








var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "LoginModal__Container",
  componentId: "sc-1jtfh77-0"
})(["padding:32px;background-color:white;z-index:11;.modal-close-x-icon{cursor:pointer;display:block;margin:0 0 40px auto;}.login-input-wrapper{position:relative;margin-bottom:16px;}.login-password-input-wrapper{svg{cursor:pointer;}}.login-modal-submit-button-wrapper{margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid ", "}.login-modal-set-signup{color:", ";margin-left:8px;cursor:pointer;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_6__["default"].gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_6__["default"].dark_cyan);
_c = Container;

var LoginModal = function LoginModal(_ref) {
  _s();

  var closeModal = _ref.closeModal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      isPasswordHided = _useState3[0],
      setIsPasswordHided = _useState3[1];

  var _useValidateMode = Object(_hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      setValidateMode = _useValidateMode.setValidateMode;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])(); // 이메일 주소 변경시

  var onChangeEmail = function onChangeEmail(event) {
    setEmail(event.target.value);
  }; // 비밀번호 변경 시


  var onChangePassword = function onChangePassword(event) {
    setPassword(event.target.value);
  }; // 회원가입 모달로 변경하기


  var changeToSignUpModal = function changeToSignUpModal() {
    dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_10__["authActions"].setAuthMode("signup"));
  }; //*비밀번호 숨김 토글하기


  var togglePasswordHiding = function togglePasswordHiding() {
    setIsPasswordHided(!isPasswordHided);
  };

  var onSubmitLogin = /*#__PURE__*/function () {
    var _ref2 = Object(D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {
      var loginBody, _yield$loginAPI, data;

      return D_SUNGHO_DEV_Next_Class_next_airbnb_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setValidateMode(true);

              if (!(!email || !password)) {
                _context.next = 6;
                break;
              }

              alert("이메일과 비밀버호를 입력해주세요.");
              _context.next = 23;
              break;

            case 6:
              loginBody = {
                email: email,
                password: password
              };
              _context.prev = 7;
              console.log("1");
              _context.next = 11;
              return Object(_lib_api_auth__WEBPACK_IMPORTED_MODULE_11__["loginAPI"])(loginBody);

            case 11:
              _yield$loginAPI = _context.sent;
              data = _yield$loginAPI.data;
              console.log("2");
              dispatch(_store_user__WEBPACK_IMPORTED_MODULE_13__["userActions"].setLoggedUser(data));
              console.log("3");
              closeModal();
              console.log(data);
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](7);
              console.log(_context.t0);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 20]]);
    }));

    return function onSubmitLogin(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    return function () {
      setValidateMode(false);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    onSubmit: onSubmitLogin,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "login-input-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        name: "email",
        type: "email",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MailIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }, _this),
        value: email,
        onChange: onChangeEmail,
        isValid: email !== "",
        errorMessage: "\uC774\uBA54\uC77C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "login-input-wrapper login-password-input-wapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC124\uC815\uD558\uAE30",
        icon: isPasswordHided ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ClosedEyeIcon, {
          onClick: togglePasswordHiding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(OpenedEyeIcon, {
          onClick: togglePasswordHiding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 15
        }, _this),
        type: isPasswordHided ? "password" : "text",
        value: password,
        onChange: onChangePassword,
        isValid: password !== "",
        errorMessage: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "login-modal-submit-button-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: ["\uC544\uC9C1 \uC5D0\uC5B4\uBE44\uC5D4\uBE44 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "login-modal-set-signup",
        role: "presentation",
        onClick: changeToSignUpModal,
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 5
  }, _this);
};

_s(LoginModal, "ixaduMfgK3eAAdYxaIGt1hcXBXc=", false, function () {
  return [_hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_12__["default"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"]];
});

_c2 = LoginModal;
/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "LoginModal");
$RefreshReg$(_c3, "MailIcon");
$RefreshReg$(_c4, "OpenedEyeIcon");
$RefreshReg$(_c5, "ClosedEyeIcon");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luTW9kYWwudHN4Il0sIm5hbWVzIjpbIk1haWxJY29uIiwiT3BlbmVkRXllSWNvbiIsIkNsb3NlZEV5ZUljb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJmb3JtIiwicGFsZXR0ZSIsImdyYXlfZWIiLCJkYXJrX2N5YW4iLCJMb2dpbk1vZGFsIiwiY2xvc2VNb2RhbCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc1Bhc3N3b3JkSGlkZWQiLCJzZXRJc1Bhc3N3b3JkSGlkZWQiLCJ1c2VWYWxpZGF0ZU1vZGUiLCJzZXRWYWxpZGF0ZU1vZGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2VFbWFpbCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwiY2hhbmdlVG9TaWduVXBNb2RhbCIsImF1dGhBY3Rpb25zIiwic2V0QXV0aE1vZGUiLCJ0b2dnbGVQYXNzd29yZEhpZGluZyIsIm9uU3VibWl0TG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwibG9naW5Cb2R5IiwiY29uc29sZSIsImxvZyIsImxvZ2luQVBJIiwiZGF0YSIsInVzZXJBY3Rpb25zIiwic2V0TG9nZ2VkVXNlciIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVPQSxRLFlBQUFBLFE7Ozs7Ozs7OztNQUFBQSxRO0FBQUFBLFE7Ozs7Ozs7SUFDQUMsYSxZQUFBQSxhOzs7Ozs7Ozs7Ozs7TUFBQUEsYTtBQUFBQSxhOzs7Ozs7O0lBQ0FDLGEsWUFBQUEsYTs7Ozs7Ozs7O01BQUFBLGE7QUFBQUEsYTs7Ozs7O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLFNBQVMsR0FBR0MseURB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O0FBQ0UsaUJBQVMsRUFBQyx3QkFEWjtBQUVFLFlBQUksRUFBQyxjQUZQO0FBR0UsZUFBTyxFQUFFYSxtQkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThDRCxDQXhHRDs7R0FBTWxCLFU7VUFLc0JTLCtELEVBRVRHLHVEOzs7TUFQYlosVTtBQTBHU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wY2I4YTYyZDQwMDhkMjdhYjdmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgQ2xvc2VYSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvbW9kYWwvbW9kYWxfY29sb3NlX3hfaWNvbi5zdmdcIlxyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvbWFpbC5zdmdcIlxyXG5pbXBvcnQgT3BlbmVkRXllSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvYXV0aC9vcGVuZWQtZXllLnN2Z1wiXHJcbmltcG9ydCBDbG9zZWRFeWVJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL2Nsb3NlZF9leWUuc3ZnXCJcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tbW9uL0J1dHRvblwiXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tbW9uL0lucHV0XCJcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgYXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoJ1xyXG5pbXBvcnQgeyBsb2dpbkFQSSB9IGZyb20gJy4uLy4uL2xpYi9hcGkvYXV0aCdcclxuaW1wb3J0IHVzZVZhbGlkYXRlTW9kZSBmcm9tICcuLi8uLi9ob29rcy91c2VWYWxpZGF0ZU1vZGUnXHJcbmltcG9ydCB7IHVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcidcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5mb3JtYFxyXG4gIC8qIHdpZHRoOjU2OHB4OyAqL1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTE7XHJcblxyXG4gIC5tb2RhbC1jbG9zZS14LWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCA0MHB4IGF1dG87XHJcbiAgfVxyXG4gIC5sb2dpbi1pbnB1dC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1wYXNzd29yZC1pbnB1dC13cmFwcGVyIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ2luLW1vZGFsLXN1Ym1pdC1idXR0b24td3JhcHBlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZWJ9XHJcbiAgfVxyXG4gIC5sb2dpbi1tb2RhbC1zZXQtc2lnbnVwe1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBMb2dpbk1vZGFsOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtjbG9zZU1vZGFsfSkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2lzUGFzc3dvcmRIaWRlZCwgc2V0SXNQYXNzd29yZEhpZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHtzZXRWYWxpZGF0ZU1vZGV9ID0gdXNlVmFsaWRhdGVNb2RlKCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy8g7J2066mU7J28IOyjvOyGjCDrs4Dqsr3si5xcclxuICBjb25zdCBvbkNoYW5nZUVtYWlsID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICAvLyDruYTrsIDrsojtmLgg67OA6rK9IOyLnFxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIO2ajOybkOqwgOyehSDrqqjri6zroZwg67OA6rK97ZWY6riwXHJcbiAgY29uc3QgY2hhbmdlVG9TaWduVXBNb2RhbCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNldEF1dGhNb2RlKFwic2lnbnVwXCIpKTtcclxuICB9XHJcblxyXG4gIC8vKuu5hOuwgOuyiO2YuCDsiKjquYAg7Yag6riA7ZWY6riwXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRIaWRpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Bhc3N3b3JkSGlkZWQoIWlzUGFzc3dvcmRIaWRlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRMb2dpbiA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRWYWxpZGF0ZU1vZGUodHJ1ZSk7XHJcblxyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgYWxlcnQoXCLsnbTrqZTsnbzqs7wg67mE67CA67KE7Zi466W8IOyeheugpe2VtOyjvOyEuOyalC5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBsb2dpbkJvZHkgPSB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIxXCIpO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgbG9naW5BUEkobG9naW5Cb2R5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjJcIik7XHJcbiAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuc2V0TG9nZ2VkVXNlcihkYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIzXCIpO1xyXG4gICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRWYWxpZGF0ZU1vZGUoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG9uU3VibWl0PXtvblN1Ym1pdExvZ2lufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1pbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbwg7KO87IaMXCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgaWNvbj17PE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgICBpc1ZhbGlkPXtlbWFpbCAhPT0gXCJcIn1cclxuICAgICAgICAgIGVycm9yTWVzc2FnZT1cIuydtOuplOydvOydtCDtlYTsmpTtlanri4jri6QuXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1pbnB1dC13cmFwcGVyIGxvZ2luLXBhc3N3b3JkLWlucHV0LXdhcHBlclwiPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7ISk7KCV7ZWY6riwXCJcclxuICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICBpc1Bhc3N3b3JkSGlkZWQ/IChcclxuICAgICAgICAgICAgICA8Q2xvc2VkRXllSWNvbiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZEhpZGluZ30gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8T3BlbmVkRXllSWNvbiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZEhpZGluZ30gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT17aXNQYXNzd29yZEhpZGVkID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgIGlzVmFsaWQ9e3Bhc3N3b3JkICE9PSBcIlwifVxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgIC8+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbW9kYWwtc3VibWl0LWJ1dHRvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cD5cclxuICAgICAgICDslYTsp4Eg7JeQ7Ja067mE7JeU67mEIO2ajOybkOydtCDslYTri4jsi6DqsIDsmpQ/XHJcbiAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1tb2RhbC1zZXQtc2lnbnVwXCJcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgb25DbGljaz17Y2hhbmdlVG9TaWduVXBNb2RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsOyJdLCJzb3VyY2VSb290IjoiIn0=