module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useModal */ "./hooks/useModal.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _auth_AuthModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/AuthModal */ "./components/auth/AuthModal.tsx");
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/api/auth */ "./lib/api/auth.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/user */ "./store/user.ts");
/* harmony import */ var _HeaderAuths__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeaderAuths */ "./components/HeaderAuths.tsx");
/* harmony import */ var _HeaderUserProfile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HeaderUserProfile */ "./components/HeaderUserProfile.tsx");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\Header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AirbnbLogoIcon = function AirbnbLogoIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M29.576 22.743c-.162-.385-.323-.801-.485-1.153-.258-.577-.517-1.122-.743-1.634l-.032-.032a333.042 333.042 0 0 0-7.143-14.479l-.097-.192c-.259-.48-.517-.993-.776-1.505-.323-.577-.646-1.185-1.163-1.762C18.102.705 16.616 0 15.032 0c-1.616 0-3.07.705-4.137 1.922-.485.577-.84 1.185-1.164 1.762-.258.512-.517 1.025-.776 1.505l-.096.192c-2.49 4.805-4.913 9.674-7.143 14.479l-.033.064c-.226.512-.484 1.057-.743 1.634-.162.352-.323.736-.485 1.153-.42 1.185-.55 2.306-.388 3.46a6.818 6.818 0 0 0 4.202 5.317A6.69 6.69 0 0 0 6.887 32a8.59 8.59 0 0 0 4.072-1.153c1.325-.737 2.586-1.794 4.008-3.332 1.422 1.538 2.715 2.595 4.008 3.332A8.589 8.589 0 0 0 23.047 32c.905 0 1.81-.16 2.618-.512a6.805 6.805 0 0 0 4.202-5.318c.258-1.121.13-2.242-.291-3.427zm-14.577 1.665c-1.745-2.178-2.876-4.228-3.264-5.958-.162-.736-.194-1.377-.097-1.953.065-.513.259-.961.517-1.346.614-.865 1.649-1.41 2.844-1.41 1.196 0 2.263.513 2.845 1.41.258.385.452.833.517 1.346.097.576.064 1.249-.097 1.953-.388 1.698-1.52 3.748-3.265 5.958zm12.896 1.506c-.226 1.666-1.357 3.107-2.94 3.748a4.935 4.935 0 0 1-2.457.32c-.808-.096-1.616-.352-2.457-.833-1.163-.64-2.327-1.634-3.684-3.107 2.133-2.595 3.426-4.965 3.91-7.079.227-.993.26-1.89.162-2.723a5.17 5.17 0 0 0-.872-2.178c-1.002-1.441-2.683-2.274-4.558-2.274-1.874 0-3.555.865-4.557 2.274a5.17 5.17 0 0 0-.872 2.178 6.593 6.593 0 0 0 .161 2.723c.485 2.114 1.81 4.517 3.911 7.111-1.325 1.473-2.521 2.466-3.685 3.107-.84.48-1.648.737-2.456.833a5.212 5.212 0 0 1-2.456-.32c-1.584-.64-2.715-2.082-2.941-3.748a5.259 5.259 0 0 1 .29-2.499c.097-.32.259-.64.42-1.025.227-.512.485-1.057.744-1.601l.032-.064A348.836 348.836 0 0 1 10.7 6.374l.098-.192c.258-.48.517-.993.775-1.473.259-.513.55-.993.905-1.41.68-.768 1.584-1.185 2.586-1.185 1.002 0 1.907.417 2.586 1.185.355.417.646.897.905 1.41.258.48.517.993.775 1.473l.097.192a423.135 423.135 0 0 1 7.079 14.415v.032c.258.512.484 1.089.743 1.601.162.385.323.705.42 1.025.259.833.356 1.634.226 2.467z",
      fill: "#FF5A5F"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

AirbnbLogoIcon.defaultProps = {
  width: "30",
  height: "32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var AirbnbLogoTextIcon = function AirbnbLogoTextIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M9.84 13.92v-3.48C9.12 9.48 8.16 9 6.96 9c-.88 0-1.6.32-2.16.96-.56.624-.84 1.368-.84 2.232 0 .912.288 1.672.864 2.28.592.592 1.328.888 2.208.888 1.2 0 2.136-.48 2.808-1.44zm3.12-7.56V18h-3v-.936c-.928.784-2.008 1.176-3.24 1.176-1.792 0-3.256-.656-4.392-1.968C1.336 15.12.84 13.76.84 12.192c0-1.712.552-3.152 1.656-4.32C3.616 6.704 4.968 6.12 6.552 6.12c1.312 0 2.448.392 3.408 1.176V6.36h3zm5.046 0V18h-3.12V6.36h3.12zm-3-2.712c-.4-.384-.6-.856-.6-1.416 0-.56.2-1.032.6-1.416.4-.384.88-.576 1.44-.576.56 0 1.04.192 1.44.576.4.384.6.856.6 1.416 0 .56-.2 1.032-.6 1.416-.4.384-.88.576-1.44.576-.56 0-1.04-.192-1.44-.576zm12.366 2.568-.36 2.904c-.24-.08-.616-.12-1.128-.12-.624 0-1.2.176-1.728.528-.512.352-.88.736-1.104 1.152V18h-3.12V6.36h3v1.176c.768-.944 1.896-1.416 3.384-1.416.256 0 .608.032 1.056.096zm3.844 4.224v3.48c.672.96 1.608 1.44 2.808 1.44.88 0 1.608-.296 2.184-.888.592-.608.888-1.368.888-2.28 0-.864-.28-1.608-.84-2.232-.56-.64-1.28-.96-2.16-.96-1.2 0-2.16.48-2.88 1.44zm-.12 7.56h-3V.96h3.12V7.2c.912-.72 2.008-1.08 3.288-1.08 1.584 0 2.928.584 4.032 1.752 1.12 1.168 1.68 2.608 1.68 4.32 0 1.568-.496 2.928-1.488 4.08-1.136 1.312-2.6 1.968-4.392 1.968-1.232 0-2.312-.392-3.24-1.176V18zm13.206 0h-3.12V6.36h3v.936A5.054 5.054 0 0 1 47.47 6.12c1.648 0 2.992.624 4.032 1.872.8.944 1.2 2.304 1.2 4.08V18h-3.12v-6.168c0-.992-.232-1.72-.696-2.184C48.454 9.216 47.87 9 47.134 9c-.592 0-1.152.152-1.68.456-.512.288-.896.616-1.152.984V18zm13.202-7.56v3.48c.672.96 1.608 1.44 2.808 1.44.88 0 1.608-.296 2.184-.888.592-.608.888-1.368.888-2.28 0-.864-.28-1.608-.84-2.232-.56-.64-1.28-.96-2.16-.96-1.2 0-2.16.48-2.88 1.44zm-.12 7.56h-3V.96h3.12V7.2c.912-.72 2.008-1.08 3.288-1.08 1.584 0 2.928.584 4.032 1.752 1.12 1.168 1.68 2.608 1.68 4.32 0 1.568-.496 2.928-1.488 4.08-1.136 1.312-2.6 1.968-4.392 1.968-1.232 0-2.312-.392-3.24-1.176V18z",
      fill: "#FF395B"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

AirbnbLogoTextIcon.defaultProps = {
  width: "67",
  height: "19",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

 // import ModalPortal from './ModalPortal';









const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__Container",
  componentId: "sc-92b6bf-0"
})(["position:sticky;top:0;width:100%;height:80px;display:flex;justify-content:space-between;align-items:center;padding:0 80px;background-color:white;box-shadow:rgba(0,0,0,0.08) 0px 1px 12px;z-index:10;.header-logo-wrapper{display:flex;align-items:center;.header-logo{margin-right:6px;}}.header-auth-buttons{.header-sign-up-button{height:42px;margin-right:8px;padding:0 16px;border:0;border-radius:21px;background-color:white;cursor:pointer;outline:none;&:hover{background-color:", ";}}.header-login-button{height:42px;padding:0 16px;border:0;box-shadow:0px 1px 2px rgba(0,0,0,0.18);border-radius:21px;background-color:white;cursor:pointer;outline:none;&:hover{box-shadow:0px 2px 8px rgba(0,0,0,0.12);}}}.header-user-profile{display:flex;align-items:center;height:42px;padding:0 6px 0 16px;border:0;box-shadow:0px 1px 2px rgba(0,0,0,0.18);border-radius:21px;background-color:white;cursor:pointer;outline:none;&:hover{box-shadow:0px 2px 8px rgba(0,0,0,0.12);}.header-user-profile-image{margin-left:8px;width:30px;height:30px;border-radius:50%;}}.header-logo-wrapper + div{position:relative;}.header-usermenu{position:absolute;right:0;top:52px;width:240px;padding:8px 0;box-shadow:0 2px 16px rgba(0,0,0,0.12);border-radius:8px;background-color:white;li{display:flex;align-items:center;width:100%;height:42px;padding:0 16px;cursor:pointer;&:hover{background-color:", ";}}}.header-usermenu-divider{width:100%;height:1px;margin:8px 0;background-color:", ";}"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].gray_dd);

const Header = () => {
  // const [modalOpened, setModalOpened] = useState();
  const {
    openModal,
    closeModal,
    ModalPortal
  } = Object(_hooks_useModal__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])(); // 유저 메뉴 열고 닫힘 여부

  const isLogged = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user.isLogged);

  const logout = async () => {
    try {
      await Object(_lib_api_auth__WEBPACK_IMPORTED_MODULE_9__["logoutAPI"])();
      dispatch(_store_user__WEBPACK_IMPORTED_MODULE_10__["userActions"].initUser());
      console.log("clicked");
    } catch (error) {
      console.log(error.message);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header-logo-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AirbnbLogoIcon, {
          className: "header-logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AirbnbLogoTextIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, undefined), !isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderAuths__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }, undefined), isLogged && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderUserProfile__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 20
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ModalPortal, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_auth_AuthModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        closeModal: closeModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 170,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HeaderAuths.tsx":
/*!************************************!*\
  !*** ./components/HeaderAuths.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useModal */ "./hooks/useModal.tsx");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/auth */ "./store/auth.ts");
/* harmony import */ var _auth_AuthModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/AuthModal */ "./components/auth/AuthModal.tsx");


var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\HeaderAuths.tsx";






const HeaderAuths = () => {
  const {
    openModal,
    ModalPortal,
    closeModal
  } = Object(_hooks_useModal__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header-auth-buttons",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "header-sign-up-button",
        onClick: () => {
          dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_4__["authActions"].setAuthMode("signup"));
          openModal();
        },
        type: "button",
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "header-login-button",
        type: "button",
        onClick: () => {
          dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_4__["authActions"].setAuthMode("login"));
          openModal();
        },
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ModalPortal, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_auth_AuthModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        closeModal: closeModal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderAuths);

/***/ }),

/***/ "./components/HeaderUserProfile.tsx":
/*!******************************************!*\
  !*** ./components/HeaderUserProfile.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-outside-click-handler */ "react-outside-click-handler");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/user */ "./store/user.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api/auth */ "./lib/api/auth.ts");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\HeaderUserProfile.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var HamburgerIcon = function HamburgerIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M12 1.6H0V0h12v1.6zm0 1.6H0v1.6h12V3.2zm0 3.2H0V8h12V6.4z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

HamburgerIcon.defaultProps = {
  width: "12",
  height: "8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};




const HeaderUserProfile = () => {
  // 유저 메뉴 열고, 닫힌 여부
  const {
    0: isUsermenuOpened,
    1: setIsUsermenuOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const userProfileImage = Object(_store__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user.profileImage);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // 로그아웃 하기

  const logout = async () => {
    try {
      await Object(_lib_api_auth__WEBPACK_IMPORTED_MODULE_7__["logoutAPI"])();
      dispatch(_store_user__WEBPACK_IMPORTED_MODULE_5__["userActions"].initUser());
    } catch (error) {
      console.log(error.message);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onOutsideClick: () => {
      if (isUsermenuOpened) {
        setIsUsermenuOpened(false);
      }
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "header-user-profile",
      type: "button",
      onClick: () => setIsUsermenuOpened(!isUsermenuOpened),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HamburgerIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: userProfileImage,
        className: "header-user-profile-image",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), isUsermenuOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "header-usermenu",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: "\uC219\uC18C \uAD00\uB9AC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/room/register/building",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          role: "presentation",
          onClick: () => {
            setIsUsermenuOpened(false);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: "\uC219\uC18C \uB4F1\uB85D\uD558\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header-usermenu-divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        role: "presentation",
        onClick: logout,
        children: "\uB85C\uADF8\uC544\uC6C3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderUserProfile);

/***/ }),

/***/ "./components/auth/AuthModal.tsx":
/*!***************************************!*\
  !*** ./components/auth/AuthModal.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignUpModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUpModal */ "./components/auth/SignUpModal.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginModal */ "./components/auth/LoginModal.tsx");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\auth\\AuthModal.tsx";





const AuthModal = ({
  closeModal
}) => {
  const authMode = Object(_store__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.auth.authMode);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [authMode === "signup" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SignUpModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      closeModal: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 33
    }, undefined), authMode === "login" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoginModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      closeModal: closeModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 32
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthModal);

/***/ }),

/***/ "./components/auth/LoginModal.tsx":
/*!****************************************!*\
  !*** ./components/auth/LoginModal.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Input */ "./components/common/Input.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.ts");
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api/auth */ "./lib/api/auth.ts");
/* harmony import */ var _hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useValidateMode */ "./hooks/useValidateMode.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/user */ "./store/user.ts");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\auth\\LoginModal.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var MailIcon = function MailIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M.306 0v13.5H22V0H.306zm5.987 5.947L2.114 10.23V3.137l4.179 2.81zM2.55 1.5h17.206l-8.603 5.785L2.55 1.5zm5.147 5.391 3.456 2.324 3.462-2.328L19.688 12H2.713l4.984-5.109zm8.323-.948 4.172-2.806v7.011L16.02 5.943z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

MailIcon.defaultProps = {
  width: "22",
  height: "14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var OpenedEyeIcon = function OpenedEyeIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M15.941 4.81c-.126-.183-3.154-4.477-7.94-4.477C3.892.333.232 4.603.078 4.785a.335.335 0 0 0 0 .43C.233 5.397 3.893 9.667 8 9.667c4.108 0 7.768-4.27 7.922-4.452a.333.333 0 0 0 .019-.404zM8.001 9C4.707 9 1.576 5.86.78 5c.794-.86 3.922-4 7.22-4 3.852 0 6.571 3.135 7.235 3.982C14.47 5.815 11.321 9 8 9z",
      fill: "#000"
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M8 2.333A2.67 2.67 0 0 0 5.333 5 2.67 2.67 0 0 0 8 7.667 2.67 2.67 0 0 0 10.667 5 2.67 2.67 0 0 0 8 2.333zM8 7c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z",
      fill: "#000"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

OpenedEyeIcon.defaultProps = {
  width: "16",
  height: "10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ClosedEyeIcon = function ClosedEyeIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M15.84 8.311a.449.449 0 0 1-.636-.054l-1.181-1.404A8.062 8.062 0 0 1 12.05 8.17l.674 1.634a.45.45 0 1 1-.834.344l-.674-1.634a9.843 9.843 0 0 1-2.893.527v1.745a.45.45 0 0 1-.902 0V9.041a9.945 9.945 0 0 1-2.669-.454l-.644 1.56a.451.451 0 1 1-.834-.343l.634-1.536a8.081 8.081 0 0 1-2.04-1.286L.797 8.257a.45.45 0 1 1-.69-.58L1.22 6.352C.413 5.475.07 4.704.037 4.629a.45.45 0 1 1 .828-.356c.03.07.382.845 1.223 1.683.012.008.024.015.035.024.03.025.054.054.076.084A7.241 7.241 0 0 0 4.63 7.587c.014.005.029.007.043.013l.016.009c.875.326 1.926.54 3.184.54 5.282 0 6.991-3.837 7.008-3.876a.45.45 0 1 1 .829.356c-.03.07-.34.762-1.053 1.578l1.237 1.469a.45.45 0 0 1-.055.635z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

ClosedEyeIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "LoginModal__Container",
  componentId: "sc-1jtfh77-0"
})(["padding:32px;background-color:white;z-index:11;.modal-close-x-icon{cursor:pointer;display:block;margin:0 0 40px auto;}.login-input-wrapper{position:relative;margin-bottom:16px;}.login-password-input-wrapper{svg{cursor:pointer;}}.login-modal-submit-button-wrapper{margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid ", "}.login-modal-set-signup{color:", ";margin-left:8px;cursor:pointer;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan);

const LoginModal = ({
  closeModal
}) => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: isPasswordHided,
    1: setIsPasswordHided
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    setValidateMode
  } = Object(_hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])(); // 이메일 주소 변경시

  const onChangeEmail = event => {
    setEmail(event.target.value);
  }; // 비밀번호 변경 시


  const onChangePassword = event => {
    setPassword(event.target.value);
  }; // 회원가입 모달로 변경하기


  const changeToSignUpModal = () => {
    dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_7__["authActions"].setAuthMode("signup"));
  }; //*비밀번호 숨김 토글하기


  const togglePasswordHiding = () => {
    setIsPasswordHided(!isPasswordHided);
  };

  const onSubmitLogin = async event => {
    event.preventDefault();
    setValidateMode(true);

    if (!email || !password) {
      alert("이메일과 비밀버호를 입력해주세요.");
    } else {
      const loginBody = {
        email,
        password
      };
      console.log("email : " + email);
      console.log("password : " + password);

      try {
        console.log("1");
        const {
          data
        } = await Object(_lib_api_auth__WEBPACK_IMPORTED_MODULE_8__["loginAPI"])(loginBody);
        console.log("2");
        dispatch(_store_user__WEBPACK_IMPORTED_MODULE_10__["userActions"].setLoggedUser(data));
        console.log("3");
        closeModal();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    onSubmit: onSubmitLogin,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login-input-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        name: "email",
        type: "email",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MailIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }, undefined),
        value: email,
        onChange: onChangeEmail,
        isValid: email !== "",
        errorMessage: "\uC774\uBA54\uC77C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login-input-wrapper login-password-input-wapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC124\uC815\uD558\uAE30",
        icon: isPasswordHided ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ClosedEyeIcon, {
          onClick: togglePasswordHiding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OpenedEyeIcon, {
          onClick: togglePasswordHiding
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }, undefined),
        type: isPasswordHided ? "password" : "text",
        value: password,
        onChange: onChangePassword,
        isValid: password !== "",
        errorMessage: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login-modal-submit-button-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\uC544\uC9C1 \uC5D0\uC5B4\uBE44\uC5D4\uBE44 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "login-modal-set-signup",
        role: "presentation",
        onClick: changeToSignUpModal,
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./components/auth/PasswordWarning.tsx":
/*!*********************************************!*\
  !*** ./components/auth/PasswordWarning.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\auth\\PasswordWarning.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RedXIcon = function RedXIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 6.55 13.55 0l.45.45L7.45 7 14 13.55l-.45.45L7 7.45.45 14 0 13.55 6.55 7 0 .45.45 0 7 6.55z",
      fill: "#D93900"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

RedXIcon.defaultProps = {
  width: "14",
  height: "14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var GreenCheckIcon = function GreenCheckIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 .4 4.476 10.5 0 5.218l.444-.378 4.054 4.786L13.575 0 14 .4z",
      fill: "#008A05"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

GreenCheckIcon.defaultProps = {
  width: "14",
  height: "11",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "PasswordWarning__Container",
  componentId: "sc-184ncz8-0"
})(["color:", ";display:flex;align-items:center;svg{margin-right:8px;}"], ({
  isValid
}) => isValid ? _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].davidson_orange : _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].green);

const PasswordWarning = ({
  isValid,
  text
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    isValid: isValid,
    children: [isValid ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RedXIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 18
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GreenCheckIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }, undefined), text]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordWarning);

/***/ }),

/***/ "./components/auth/SignUpModal.tsx":
/*!*****************************************!*\
  !*** ./components/auth/SignUpModal.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Input */ "./components/common/Input.tsx");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _lib_api_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api/auth */ "./lib/api/auth.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/user */ "./store/user.ts");
/* harmony import */ var _hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useValidateMode */ "./hooks/useValidateMode.ts");
/* harmony import */ var _PasswordWarning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PasswordWarning */ "./components/auth/PasswordWarning.tsx");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.ts");


var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\auth\\SignUpModal.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Mailcon = function Mailcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M.306 0v13.5H22V0H.306zm5.987 5.947L2.114 10.23V3.137l4.179 2.81zM2.55 1.5h17.206l-8.603 5.785L2.55 1.5zm5.147 5.391 3.456 2.324 3.462-2.328L19.688 12H2.713l4.984-5.109zm8.323-.948 4.172-2.806v7.011L16.02 5.943z",
      fill: "#222"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

Mailcon.defaultProps = {
  width: "22",
  height: "14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var PersonIcon = function PersonIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M8 1.333a3.337 3.337 0 0 1 3.333 3.334A3.338 3.338 0 0 1 8 8.001a3.338 3.338 0 0 1-3.333-3.334A3.337 3.337 0 0 1 8 1.333zM8 0a4.667 4.667 0 1 0 0 9.334A4.667 4.667 0 0 0 8 0zm4.246 8.902c-.331.332-.705.62-1.105.868 1.914 1.25 2.918 3.389 3.314 4.897H1.531C1.912 13.141 2.903 11 4.846 9.762a6.005 6.005 0 0 1-1.105-.875C.902 10.935 0 14.558 0 16h16c0-1.428-.96-5.038-3.754-7.098z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

PersonIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var OpenedEyeIcon = function OpenedEyeIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M15.941 4.81c-.126-.183-3.154-4.477-7.94-4.477C3.892.333.232 4.603.078 4.785a.335.335 0 0 0 0 .43C.233 5.397 3.893 9.667 8 9.667c4.108 0 7.768-4.27 7.922-4.452a.333.333 0 0 0 .019-.404zM8.001 9C4.707 9 1.576 5.86.78 5c.794-.86 3.922-4 7.22-4 3.852 0 6.571 3.135 7.235 3.982C14.47 5.815 11.321 9 8 9z",
      fill: "#000"
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M8 2.333A2.67 2.67 0 0 0 5.333 5 2.67 2.67 0 0 0 8 7.667 2.67 2.67 0 0 0 10.667 5 2.67 2.67 0 0 0 8 2.333zM8 7c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z",
      fill: "#000"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

OpenedEyeIcon.defaultProps = {
  width: "16",
  height: "10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var CloseEyeIcon = function CloseEyeIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M15.84 8.311a.449.449 0 0 1-.636-.054l-1.181-1.404A8.062 8.062 0 0 1 12.05 8.17l.674 1.634a.45.45 0 1 1-.834.344l-.674-1.634a9.843 9.843 0 0 1-2.893.527v1.745a.45.45 0 0 1-.902 0V9.041a9.945 9.945 0 0 1-2.669-.454l-.644 1.56a.451.451 0 1 1-.834-.343l.634-1.536a8.081 8.081 0 0 1-2.04-1.286L.797 8.257a.45.45 0 1 1-.69-.58L1.22 6.352C.413 5.475.07 4.704.037 4.629a.45.45 0 1 1 .828-.356c.03.07.382.845 1.223 1.683.012.008.024.015.035.024.03.025.054.054.076.084A7.241 7.241 0 0 0 4.63 7.587c.014.005.029.007.043.013l.016.009c.875.326 1.926.54 3.184.54 5.282 0 6.991-3.837 7.008-3.876a.45.45 0 1 1 .829.356c-.03.07-.34.762-1.053 1.578l1.237 1.469a.45.45 0 0 1-.055.635z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CloseEyeIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};










const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "SignUpModal__Container",
  componentId: "sc-102epsj-0"
})([".modal-close-x-icon{cursor:pointer;display:block;margin:0 0 40px auto;}.input-wrapper{position:relative;margin-bottom:16px;}.sign-up-password-input-wrapper{svg{cursor:pointer;}}.sign-up-birthdat-label{font-size:16px;font-weight:600;margin-top:16px;margin-bottom:8px;}.sign-up-modal-birthday-info{margin-bottom:16px;color:", "}.sign-up-modal-birthday-selectors{display:flex;margin-bottom:24px;.sign-up-modal-birthday-month-selector{margin-right:16px;flex-grow:1;}.sign-up-modal-birthday-day-selector{margin-right:16px;width:25%;}.sign-up-modal-birthday-year-selector{width:33.3333%;}}.sign-up-modal-submit-button-wrapper{margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid ", "}.sign-up-modal-set-login{color:", ";margin-left:8px;cursor:pointer;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].charcoal, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan);
const PASSWORD_MIN_LENNGTH = 8;
// 선택할 수 없는 월 option
const disabledMonths = ["월"]; // 선택할 수 없는 일 option

const disabledDays = ["일"]; // 선택할 수 없는 년 option

const disabledYears = ["년"];

const SignUpModal = ({
  closeModal
}) => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: lastname,
    1: setLastname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: firstname,
    1: setFirstname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: hidePassword,
    1: setHidePassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: passwordFocused,
    1: setPasswordFocused
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: birthYear,
    1: setBirthYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: birthDay,
    1: setBirthDay
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: birthMonth,
    1: setBirthMonth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    setValidateMode
  } = Object(_hooks_useValidateMode__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])(); // 로그인 모달로 변경하기

  const changeToLoginModal = () => {
    dispatch(_store_auth__WEBPACK_IMPORTED_MODULE_13__["authActions"].setAuthMode("login"));
  }; // 이메일 주소 변경 시


  const onChangeEmail = event => {
    setEmail(event.target.value);
  }; // 이름 변경 시


  const onChangeLastname = event => {
    setLastname(event.target.value);
  }; // 성 변경 시


  const onChangeFirstname = event => {
    setFirstname(event.target.value);
  }; // 비밀번호 변경 시


  const onChangePassword = event => {
    setPassword(event.target.value);
  }; // 비밀번호 숨김 토글하기


  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  }; // 비밀번호 인풋 포커스 되었을 때


  const onFocusPassword = () => {
    setPasswordFocused(true);
  }; // password가 이름이나 이메일을 포함하는지


  const isPasswordHasNameOrEmail = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => !password || !lastname || password.includes(lastname) || password.includes(email.split("@")[0]), [password, lastname, email]); // 비밀번호가 최소 자릿수 이상인지

  const isPasswordOverMinLength = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => !!password && password.length >= PASSWORD_MIN_LENNGTH, [password]); // 비밀번호가 숫자나 특수기호를 포함하는지

  const isPasswordHasNumberOrSymbol = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => !(/[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g.test(password) || /[0-9]/g.test(password)), [password]); // 생년월일 월 변경 시

  const onChangeBirthMonth = event => {
    setBirthMonth(event.target.value);
  }; // 생년월일 일 변경 시


  const onChangeBirthDay = event => {
    setBirthDay(event.target.value);
  }; // 생년월일 년 변경 시


  const onChangeBirthYear = event => {
    setBirthYear(event.target.value);
  }; // 회원가입 폼 입력 값 확인하기


  const validateSignUpForm = () => {
    // 인풋 값이 없다면
    if (!email || !lastname || !firstname || !password) {
      return false;
    } // 비밀번호가 올바르지 않다면


    if (isPasswordHasNameOrEmail || !isPasswordOverMinLength || isPasswordHasNumberOrSymbol) {
      return false;
    } // 생년월일 셀렉터 값이 없다면


    if (!birthDay || !birthMonth || !birthYear) {
      return false;
    }

    return true;
  }; // 회원가입 폼 제출하기


  const onSubmitSignUp = async event => {
    event.preventDefault();
    setValidateMode(true); // dispatch(commonActions.setValidateMode(true));

    if (validateSignUpForm()) {
      try {
        const signUpBody = {
          email,
          lastname,
          firstname,
          password,
          birthday: new Date(`${birthYear}-${birthMonth.replace("월", "")}-${birthDay}`).toISOString()
        };
        const {
          data
        } = await Object(_lib_api_auth__WEBPACK_IMPORTED_MODULE_8__["signupAPI"])(signUpBody);
        dispatch(_store_user__WEBPACK_IMPORTED_MODULE_10__["userActions"].setLoggedUser(data));
        closeModal();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    onSubmit: onSubmitSignUp,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "input-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "email",
        name: "email",
        placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Mailcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 17
        }, undefined),
        value: email,
        useValidation: true,
        isValid: !!email,
        onChange: onChangeEmail,
        errorMessage: "\uC774\uBA54\uC77C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "input-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "lastname",
        placeholder: "\uC774\uB984(\uC608: \uAE38\uB3D9)",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PersonIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 17
        }, undefined),
        value: lastname,
        useValidation: true,
        isValid: !!lastname,
        onChange: onChangeLastname,
        errorMessage: "\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "input-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "firstname",
        placeholder: "\uC131(\uC608: \uD64D)",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PersonIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 17
        }, undefined),
        useValidation: true,
        value: firstname,
        isValid: !!firstname,
        onChange: onChangeFirstname,
        errorMessage: "\uC131\uC744 \uC785\uB825\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "input-wrapper sign-up-password-input-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC124\uC815\uD558\uAE30",
        type: hidePassword ? "password" : "text",
        icon: hidePassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CloseEyeIcon, {
          onClick: toggleHidePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OpenedEyeIcon, {
          onClick: toggleHidePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 15
        }, undefined),
        value: password,
        onChange: onChangePassword,
        useValidation: true,
        isValid: !isPasswordHasNameOrEmail && isPasswordOverMinLength && !isPasswordHasNumberOrSymbol,
        errorMessage: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.",
        onFocus: onFocusPassword
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }, undefined), passwordFocused && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PasswordWarning__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isValid: isPasswordHasNameOrEmail,
        text: "\uBE44\uBC00\uBC88\uD638\uC5D0 \uBCF8\uC778 \uC774\uB984\uC774\uB098 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uD3EC\uD568\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PasswordWarning__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isValid: !isPasswordOverMinLength,
        text: "\uCD5C\uC18C 8\uC790"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PasswordWarning__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isValid: isPasswordHasNumberOrSymbol,
        text: "\uC22B\uC790\uB098 \uAE30\uD638\uB97C \uD3EC\uD568\uD558\uC138\uC694."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "sign-up-birthdat-label",
      children: "\uC0DD\uC77C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "sign-up-modal-birthday-info",
      children: "\uB9CC 18\uC138 \uC774\uC0C1\uC758 \uC131\uC778\uB9CC \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0DD\uC77C\uC740 \uB2E4\uB978 \uC5D0\uC5B4\uBE44\uC5D4\uBE44 \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sign-up-modal-birthday-selectors",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sign-up-modal-birthday-month-selector",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_5__["default"], {
          options: _lib_staticData__WEBPACK_IMPORTED_MODULE_4__["monthList"],
          disabledOptions: disabledMonths,
          defaultValue: "\uC6D4",
          value: birthMonth,
          onChange: onChangeBirthMonth,
          isValid: !!birthMonth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sign-up-modal-birthday-day-selector",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_5__["default"], {
          options: _lib_staticData__WEBPACK_IMPORTED_MODULE_4__["dayList"],
          disabledOptions: disabledDays,
          defaultValue: "\uC77C",
          onChange: onChangeBirthDay,
          isValid: !!birthDay
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sign-up-modal-birthday-year-selector",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_5__["default"], {
          options: _lib_staticData__WEBPACK_IMPORTED_MODULE_4__["yearList"],
          disabledOptions: disabledYears,
          defaultValue: "\uB144",
          onChange: onChangeBirthYear,
          isValid: !!birthYear
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sign-up-modal-submit-button-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "submit",
        children: "\uAC00\uC785\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\uC774\uBBF8 \uC5D0\uC5B4\uBE44\uC564\uBE44 \uACC4\uC815\uC774 \uC788\uB098\uC694?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "sign-up-modal-set-login",
        role: "presentation",
        onClick: changeToLoginModal,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 239,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpModal);

/***/ }),

/***/ "./components/common/Button.tsx":
/*!**************************************!*\
  !*** ./components/common/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\common\\Button.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // * 버튼 색상 구하기

const getButtonColor = color => {
  switch (color) {
    case "dark_cyan":
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan);

    default:
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].bittersweet);
  }
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "Button__Container",
  componentId: "sc-1h0fxq-0"
})(["width:100%;height:48px;border:0;border-radius:4px;background-color:", ";color:white;font-size:16px;font-weight:800;outline:none;cursor:pointer;", ""], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].bittersweet, props => getButtonColor(props.color || ""));

const Button = (_ref) => {
  let {
    children,
    color
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "color"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, _objectSpread(_objectSpread({}, props), {}, {
    color: color,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Button));

/***/ }),

/***/ "./components/common/Input.tsx":
/*!*************************************!*\
  !*** ./components/common/Input.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.ts");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\common\\Input.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Input__Container",
  componentId: "sc-10ur99q-0"
})(["input{position:relative;width:100%;height:46px;padding:", ";border:1px solid ", ";border-radius:4px;font-size:16px;outline:none;&::placeholder{color:", ";}&:focus{border-color:", " !important;}}.svg{position:absolute;right:11px;height:46px;}.input-error-message{margin-top:8px;font-weight:600;font-size:14px;color:", "}.input-icon-wrapper{position:absolute;top:0;right:11px;height:46px;display:flex;align-items:center;}", " ", ""], ({
  iconExist
}) => iconExist ? "0 44px 0 11px" : "0 11px", _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].tawny, ({
  useValidation,
  isValid
}) => useValidation && !isValid && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["input{background-color:", ";border-color:", ";&:focus{border-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].snow, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].orange), ({
  useValidation,
  isValid
}) => useValidation && isValid && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["input{border-color:", ";}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan));

const Input = (_ref) => {
  let {
    icon,
    isValid = false,
    useValidation = true,
    errorMessage
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "isValid", "useValidation", "errorMessage"]);

  const validateMode = Object(_store__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.common.validateMode);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    iconExist: !!icon,
    isValid: isValid,
    useValidation: validateMode && useValidation,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, undefined), useValidation && validateMode && !isValid && errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "input-error-message",
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "input-icon-wrapper",
      children: icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Input));

/***/ }),

/***/ "./components/common/Selector.tsx":
/*!****************************************!*\
  !*** ./components/common/Selector.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.ts");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\common\\Selector.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable indent */



 //import WarningIcon from "../../public/static/svg/common/warning.svg";

const normalSelectorStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:100%;height:46px;select{width:100%;height:100%;background-color:white;border:1px solid ", ";padding:0 11px;border-radius:4px;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/selector/selector_down_arrow.svg\");background-position:right 11px center;background-repeat:no-repeat;font-size:16px;&:focus{border-color:", ";}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_eb, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan);
const RegisterSelectorStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:100%;label{position:relative;}span{display:block;font-size:16px;color:", ";font-weight:600;margin-bottom:8px;}select{width:100%;height:56px;border-radius:8px;border:1px solid ", ";padding:0 14px 0 12px;appearance:none;outline:none;-webkit-appearance:none;background-image:url(\"/static/svg/selector/register_selector_down_arrow.svg\");background-position:right 11px center;background-repeat:no-repeat;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_76, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_b0);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Selector__Container",
  componentId: "sc-1y4w82y-0"
})(["", ";", ";select{", " &:disabled{background-image:url(\"/static/svg/selector/disabled_register_selector_down_arrow.svg\");background-color:", ";border-color:", ";color:", ";cursor:not-allowed;}}.selector-warning{margin-top:8px;display:flex;align-items:center;svg{margin-right:4px;}p{font-size:12px;color:", ";}}"], ({
  type
}) => type === "normal" && normalSelectorStyle, ({
  type
}) => type === "register" && RegisterSelectorStyle, ({
  validateMode,
  isValid
}) => {
  if (validateMode) {
    if (!isValid) {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border-color:", ";background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].tawny, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].snow);
    }

    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan);
  }

  return undefined;
}, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_f7, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_e5, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].davidson_orange);

const Selector = (_ref) => {
  let {
    label,
    options = [],
    isValid,
    useValidation = true,
    errorMessage = "옵션을 선택하시요.",
    type = "normal",
    disabledOptions = []
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "options", "isValid", "useValidation", "errorMessage", "type", "disabledOptions"]);

  const validateMode = Object(_store__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.common.validateMode);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    isValid: !!isValid,
    validateMode: validateMode && validateMode,
    type: type,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      children: [label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 19
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", _objectSpread(_objectSpread({}, props), {}, {
        children: options === null || options === void 0 ? void 0 : options.map((option, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          disabled: disabledOptions.includes(option),
          children: option
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }, undefined))
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined), useValidation && validateMode && !isValid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "selector-warning",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Selector));

/***/ }),

/***/ "./hooks/useModal.tsx":
/*!****************************!*\
  !*** ./hooks/useModal.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\hooks\\useModal.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CloseXIcon = function CloseXIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m7.667 7.217 6.55-6.55.45.45-6.55 6.55 6.55 6.55-.45.45-6.55-6.55-6.55 6.55-.45-.45 6.55-6.55-6.55-6.55.45-.45 6.55 6.55z",
      fill: "#000"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CloseXIcon.defaultProps = {
  width: "15",
  height: "15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "useModal__Container",
  componentId: "sc-1oqnzbe-0"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;z-index:10;.modal-background{position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,0.75);z-index:10;}.modal-contents{width:568px;padding:32px;background-color:white;z-index:11;.modal-close-x-icon{cursor:pointer;display:block;margin:0 0 40px auto;}}"]);

const useModal = () => {
  const {
    0: modalOpened,
    1: setModalOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const ModalPortal = ({
    children
  }) => {
    const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    const {
      0: mounted,
      1: setMounted
    } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
      setMounted(true);

      if (document) {
        const dom = document.querySelector("#root-modal");
        ref.current = dom;
      }
    }, []);

    if (ref.current && mounted && modalOpened) {
      return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-background",
          role: "presentation",
          onClick: closeModal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-contents",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CloseXIcon, {
            className: "modal-close-x-icon",
            onClick: closeModal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), children]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined), ref.current);
    }

    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useModal);

/***/ }),

/***/ "./hooks/useValidateMode.ts":
/*!**********************************!*\
  !*** ./hooks/useValidateMode.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _store_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/common */ "./store/common.ts");



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const validateMode = Object(_store__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.common.validateMode);

  const setValidateMode = value => dispatch(_store_common__WEBPACK_IMPORTED_MODULE_2__["commonActions"].setValidateMode(value));

  return {
    validateMode,
    setValidateMode
  };
});

/***/ }),

/***/ "./lib/api/auth.ts":
/*!*************************!*\
  !*** ./lib/api/auth.ts ***!
  \*************************/
/*! exports provided: signupAPI, loginAPI, meAPI, logoutAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupAPI", function() { return signupAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAPI", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meAPI", function() { return meAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAPI", function() { return logoutAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// 회원가입 api를 사용하는 함수를 만들도록 한다.
// 회원가입 api
const signupAPI = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/auth/signup", body);
const loginAPI = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/auth/login", body); // 쿠키의 access_token의 유저 정보 받아오는 api

const meAPI = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/auth/me"); // 로그아웃 api

const logoutAPI = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/auth/logout");

/***/ }),

/***/ "./lib/api/index.ts":
/*!**************************!*\
  !*** ./lib/api/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:3000"
});
/* harmony default export */ __webpack_exports__["default"] = (axios);

/***/ }),

/***/ "./lib/staticData.ts":
/*!***************************!*\
  !*** ./lib/staticData.ts ***!
  \***************************/
/*! exports provided: monthList, dayList, yearList, largeBuildingTypeList, apartmentBuildingTypeList, houstBuildingTypeList, secondaryUnitBuildingTypeList, uniqueSpaceBuildingTypeList, bnbBuildingTypeList, boutiquesHotelBuildingTypeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthList", function() { return monthList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayList", function() { return dayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearList", function() { return yearList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largeBuildingTypeList", function() { return largeBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apartmentBuildingTypeList", function() { return apartmentBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "houstBuildingTypeList", function() { return houstBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryUnitBuildingTypeList", function() { return secondaryUnitBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueSpaceBuildingTypeList", function() { return uniqueSpaceBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bnbBuildingTypeList", function() { return bnbBuildingTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boutiquesHotelBuildingTypeList", function() { return boutiquesHotelBuildingTypeList; });
const monthList = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]; // 1부터 31까지

const dayList = Array.from(Array(31), (_, i) => String(i + 1)); // 2020부터 1900년까지

const yearList = Array.from(Array(121), (_, i) => String(2020 - i)); // * 숙소 큰 범위의 건물 유형

const largeBuildingTypeList = ["아파트", "주택", "별채", "독특한 숙소", "B&B", "부티크호텔"]; // * 아파트 건물 유형

const apartmentBuildingTypeList = ["아파트", "공동주택", "별채", "키사 파르티쿨라르(쿠바)", "로프트", "레지던트"]; // * 주택 건물 유형

const houstBuildingTypeList = ["주택", "방갈로", "통나무집", "카사", "파르티쿨라르(쿠바)", "살레", "전원주택", "키클라데스", "주택(그리스)", "담무소(이탈리아)", "돔하우스", "땅속의 집", "농장 체험 숙박", "하우스 보트", "오두막", "등대", "팬션(한국)", "마차(영국, 프랑스)", "초소형 주택", "타운하우스", "트룰로(이탈리아)", "저택"]; // * 별채 건물 유형

const secondaryUnitBuildingTypeList = ["게스트용 별채", "게스트 스위트", "농장 체험 숙박"]; // * 독특한 숙소 건물 유형

const uniqueSpaceBuildingTypeList = ["헛간", "보트", "버스", "캠핑카", "캠핑장", "성", "동굴", "돔하우스", "땅속의 집", "농장 체험 숙박", "하우스 보트", "오두막", "이글루", "섬", "등대", "펜션(한국)", "비행기", "마차(영국, 프랑스)", "텐트", "초소형 주택", "티피", "기차", "트리하우스", "풍차", "유르트"]; // * B&B 건물 유형

const bnbBuildingTypeList = ["B&B", "카사 파르티쿨라르(쿠바)", "농장 체험 숙박", "민수 (타이완)", "산장", "료칸(일본)"]; // * 부티크 호텔 건물 유형

const boutiquesHotelBuildingTypeList = ["부티크 호텔", "아파트 호텔", "헤리티지 호텔(인도)", "호스텔", "호텔", "산장", "리조트", "레지던스", "객잔(중국)"];

/***/ }),

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! exports provided: cookieStringToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookieStringToObject", function() { return cookieStringToObject; });
//* "token=value" 를 {token:"value"}로 바꾸는 함수
const cookieStringToObject = cookieString => {
  const cookies = {};

  if (cookieString) {
    //* "token=value"
    const itemString = cookieString === null || cookieString === void 0 ? void 0 : cookieString.split(/\s*;\s*/);
    itemString.forEach(pairs => {
      //* ["token","value"]
      const pair = pairs.split(/\s*=\s*/);
      cookies[pair[0]] = pair.splice(1).join("=");
    });
  }

  return cookies;
};

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://nextjs.org/docs/messages/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://nextjs.org/docs/messages/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.ts");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api */ "./lib/api/index.ts");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/user */ "./store/user.ts");


var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const app = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "root-modal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

app.getInitialProps = async context => {
  var _context$ctx$req, _context$ctx$req2;

  const appInitialProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(context);
  const cookieObject = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["cookieStringToObject"])((_context$ctx$req = context.ctx.req) === null || _context$ctx$req === void 0 ? void 0 : _context$ctx$req.headers.cookie);
  const {
    store
  } = context.ctx;
  const {
    isLogged
  } = store.getState().user;

  try {
    if (!isLogged && cookieObject.access_token) {
      _lib_api__WEBPACK_IMPORTED_MODULE_6__["default"].defaults.headers.cookie = cookieObject.access_token; //const { data } = await meAPI();

      const {
        data
      } = _lib_api__WEBPACK_IMPORTED_MODULE_6__["default"].get("/api/auth/me"); //export const meAPI = () => axios.get<UserType>("/api/auth/me");

      store.dispatch(_store_user__WEBPACK_IMPORTED_MODULE_7__["userActions"].setLoggedUser(data));
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }

  console.log((_context$ctx$req2 = context.ctx.req) === null || _context$ctx$req2 === void 0 ? void 0 : _context$ctx$req2.headers.cookie);
  console.log(cookieObject);
  return _objectSpread({}, appInitialProps);
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_4__["wrapper"].withRedux(app));

/***/ }),

/***/ "./store/auth.ts":
/*!***********************!*\
  !*** ./store/auth.ts ***!
  \***********************/
/*! exports provided: authActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authActions", function() { return authActions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 로그인 모달 만들기
 // 초기 상태

const initialState = {
  authMode: "signup"
};
const auth = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "auth",
  initialState,
  reducers: {
    // 인증 팝업 변경하기
    setAuthMode(state, action) {
      state.authMode = action.payload;
    }

  }
});
const authActions = _objectSpread({}, auth.actions);
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./store/common.ts":
/*!*************************!*\
  !*** ./store/common.ts ***!
  \*************************/
/*! exports provided: commonActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonActions", function() { return commonActions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  validateMode: false
};
const common = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "common",
  initialState,
  reducers: {
    // validateMode 변경하기
    setValidateMode(state, action) {
      state.validateMode = action.payload;
    }

  }
});
const commonActions = _objectSpread({}, common.actions);
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! exports provided: useSelector, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./store/user.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./store/common.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ "./store/auth.ts");
/* harmony import */ var _registerRoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerRoom */ "./store/registerRoom.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  common: _common__WEBPACK_IMPORTED_MODULE_4__["default"].reducer,
  user: _user__WEBPACK_IMPORTED_MODULE_3__["default"].reducer,
  auth: _auth__WEBPACK_IMPORTED_MODULE_5__["default"].reducer,
  registerRoom: _registerRoom__WEBPACK_IMPORTED_MODULE_6__["default"].reducer
}); // 스토어 타입

let initialRootState;

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]) {
    if (state === initialRootState) {
      return _objectSpread(_objectSpread({}, state), action.payload);
    }

    return state;
  }

  return rootReducer(state, action);
}; // 타입 지원되는 커스텀 useSelector 만들기


const useSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"];

const initStore = () => {
  const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["configureStore"])({
    reducer,
    devTools: true
  });
  initialRootState = store.getState();
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(initStore);

/***/ }),

/***/ "./store/registerRoom.ts":
/*!*******************************!*\
  !*** ./store/registerRoom.ts ***!
  \*******************************/
/*! exports provided: registerRoomActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoomActions", function() { return registerRoomActions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// * 초기상태
const initialState = {
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
  publicBedList: [] // * 공용공간 침대 유형

};
const registerRoom = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "registerRoom",
  initialState,
  reducers: {
    // 큰 건물 유형 변경하기
    setLargeBuildingType(state, action) {
      if (action.payload === "") {
        state.largeBuildingType = null;
      }

      state.largeBuildingType = action.payload;
      return state;
    },

    // * 건물 유형 변경하기.
    setBuildingType(state, action) {
      if (action.payload === "") {
        state.buildingType = null;
      }

      state.buildingType = action.payload;
      return state;
    },

    // * 숙소 유형 변경하기.
    setRoomType(state, action) {
      state.roomType = action.payload;
      return state;
    },

    // * '게스트용 숙소인지' 변경하기
    setIsSetUpForGuest(state, action) {
      state.isSetUpForGuest = action.payload;
      return state;
    }

  }
});
const registerRoomActions = _objectSpread({}, registerRoom.actions);
/* harmony default export */ __webpack_exports__["default"] = (registerRoom);

/***/ }),

/***/ "./store/user.ts":
/*!***********************!*\
  !*** ./store/user.ts ***!
  \***********************/
/*! exports provided: userActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userActions", function() { return userActions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// 초기 상태
const initialState = {
  id: 0,
  email: "",
  lastname: "",
  firstname: "",
  birthday: "",
  isLogged: false,
  profileImage: ""
};
const user = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "user",
  initialState,
  reducers: {
    // 로그인한 유저 변경하기
    setLoggedUser(state, action) {
      state = _objectSpread(_objectSpread({}, action.payload), {}, {
        isLogged: true
      });
      return state;
    },

    // 유저 초기화 하기
    initUser(state) {
      state = initialState;
      return state;
    }

  }
});
const userActions = _objectSpread({}, user.actions);
/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./styles/GlobalStyles.tsx":
/*!*********************************!*\
  !*** ./styles/GlobalStyles.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-reset */ "styled-reset");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette */ "./styles/palette.ts");



const globalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ";*{box-sizing:border-box;color:", ";}body{font-family:Airbnb Cereal,sans-serif;line-height:1.2;}a{text-decoration:none;color:", ";}"], styled_reset__WEBPACK_IMPORTED_MODULE_0___default.a, _palette__WEBPACK_IMPORTED_MODULE_2__["default"].black, _palette__WEBPACK_IMPORTED_MODULE_2__["default"].black);
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
    ${globalStyle};
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  cardinal: "#a41850",
  davidson_orange: "#c13515",
  tawny: "#d93900",
  amaranth: "#E51E53",
  orange: "#fc642d",
  main_pink: "#FF385C",
  bittersweet: "#ff5a5f",
  black: "#222222",
  charcoal: "#484848",
  snow: "#FFF8F6",
  gray_48: "#484848",
  gray_71: "#717171",
  gray_76: "#767676",
  gray_80: "#808080",
  gray_85: "#858585",
  gray_aa: "#aaa",
  gray_bb: "#bbb",
  gray_b0: "#b0b0b0",
  gray_c4: "#c4c4c4",
  gray_dd: "#ddd",
  gray_eb: "#ebebeb",
  gray_e5: "#e5e5e5",
  gray_f7: "#f7f7f7",
  dark_cyan: "#008489",
  green: "#008A05"
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-outside-click-handler":
/*!**********************************************!*\
  !*** external "react-outside-click-handler" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-outside-click-handler");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyQXV0aHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyVXNlclByb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9BdXRoTW9kYWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9Mb2dpbk1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvUGFzc3dvcmRXYXJuaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvU2lnblVwTW9kYWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1NlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlVmFsaWRhdGVNb2RlLnRzIiwid2VicGFjazovLy8uL2xpYi9hcGkvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9saWIvYXBpL2luZGV4LnRzIiwid2VicGFjazovLy8uL2xpYi9zdGF0aWNEYXRhLnRzIiwid2VicGFjazovLy8uL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoLnRzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWdpc3RlclJvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvR2xvYmFsU3R5bGUudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9wYWxldHRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXJlc2V0XCIiXSwibmFtZXMiOlsiQWlyYm5iTG9nb0ljb24iLCJBaXJibmJMb2dvVGV4dEljb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwYWxldHRlIiwiZ3JheV9mNyIsImdyYXlfZGQiLCJIZWFkZXIiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiTW9kYWxQb3J0YWwiLCJ1c2VNb2RhbCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpc0xvZ2dlZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nb3V0IiwibG9nb3V0QVBJIiwidXNlckFjdGlvbnMiLCJpbml0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJIZWFkZXJBdXRocyIsImF1dGhBY3Rpb25zIiwic2V0QXV0aE1vZGUiLCJIYW1idXJnZXJJY29uIiwiSGVhZGVyVXNlclByb2ZpbGUiLCJpc1VzZXJtZW51T3BlbmVkIiwic2V0SXNVc2VybWVudU9wZW5lZCIsInVzZVN0YXRlIiwidXNlclByb2ZpbGVJbWFnZSIsInByb2ZpbGVJbWFnZSIsIkF1dGhNb2RhbCIsImF1dGhNb2RlIiwiYXV0aCIsIk1haWxJY29uIiwiT3BlbmVkRXllSWNvbiIsIkNsb3NlZEV5ZUljb24iLCJmb3JtIiwiZ3JheV9lYiIsImRhcmtfY3lhbiIsIkxvZ2luTW9kYWwiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzUGFzc3dvcmRIaWRlZCIsInNldElzUGFzc3dvcmRIaWRlZCIsInNldFZhbGlkYXRlTW9kZSIsInVzZVZhbGlkYXRlTW9kZSIsIm9uQ2hhbmdlRW1haWwiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQYXNzd29yZCIsImNoYW5nZVRvU2lnblVwTW9kYWwiLCJ0b2dnbGVQYXNzd29yZEhpZGluZyIsIm9uU3VibWl0TG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwibG9naW5Cb2R5IiwiZGF0YSIsImxvZ2luQVBJIiwic2V0TG9nZ2VkVXNlciIsInVzZUVmZmVjdCIsIlJlZFhJY29uIiwiR3JlZW5DaGVja0ljb24iLCJwIiwiaXNWYWxpZCIsImRhdmlkc29uX29yYW5nZSIsImdyZWVuIiwiUGFzc3dvcmRXYXJuaW5nIiwidGV4dCIsIk1haWxjb24iLCJQZXJzb25JY29uIiwiQ2xvc2VFeWVJY29uIiwiY2hhcmNvYWwiLCJQQVNTV09SRF9NSU5fTEVOTkdUSCIsImRpc2FibGVkTW9udGhzIiwiZGlzYWJsZWREYXlzIiwiZGlzYWJsZWRZZWFycyIsIlNpZ25VcE1vZGFsIiwibGFzdG5hbWUiLCJzZXRMYXN0bmFtZSIsImZpcnN0bmFtZSIsInNldEZpcnN0bmFtZSIsImhpZGVQYXNzd29yZCIsInNldEhpZGVQYXNzd29yZCIsInBhc3N3b3JkRm9jdXNlZCIsInNldFBhc3N3b3JkRm9jdXNlZCIsImJpcnRoWWVhciIsInNldEJpcnRoWWVhciIsImJpcnRoRGF5Iiwic2V0QmlydGhEYXkiLCJiaXJ0aE1vbnRoIiwic2V0QmlydGhNb250aCIsImNoYW5nZVRvTG9naW5Nb2RhbCIsIm9uQ2hhbmdlTGFzdG5hbWUiLCJvbkNoYW5nZUZpcnN0bmFtZSIsInRvZ2dsZUhpZGVQYXNzd29yZCIsIm9uRm9jdXNQYXNzd29yZCIsImlzUGFzc3dvcmRIYXNOYW1lT3JFbWFpbCIsInVzZU1lbW8iLCJpbmNsdWRlcyIsInNwbGl0IiwiaXNQYXNzd29yZE92ZXJNaW5MZW5ndGgiLCJsZW5ndGgiLCJpc1Bhc3N3b3JkSGFzTnVtYmVyT3JTeW1ib2wiLCJ0ZXN0Iiwib25DaGFuZ2VCaXJ0aE1vbnRoIiwib25DaGFuZ2VCaXJ0aERheSIsIm9uQ2hhbmdlQmlydGhZZWFyIiwidmFsaWRhdGVTaWduVXBGb3JtIiwib25TdWJtaXRTaWduVXAiLCJzaWduVXBCb2R5IiwiYmlydGhkYXkiLCJEYXRlIiwicmVwbGFjZSIsInRvSVNPU3RyaW5nIiwic2lnbnVwQVBJIiwibW9udGhMaXN0IiwiZGF5TGlzdCIsInllYXJMaXN0IiwiZ2V0QnV0dG9uQ29sb3IiLCJjb2xvciIsImNzcyIsImJpdHRlcnN3ZWV0IiwiYnV0dG9uIiwicHJvcHMiLCJCdXR0b24iLCJjaGlsZHJlbiIsIlJlYWN0IiwibWVtbyIsImljb25FeGlzdCIsImdyYXlfNzYiLCJ0YXdueSIsInVzZVZhbGlkYXRpb24iLCJzbm93Iiwib3JhbmdlIiwiSW5wdXQiLCJpY29uIiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGVNb2RlIiwiY29tbW9uIiwibm9ybWFsU2VsZWN0b3JTdHlsZSIsIlJlZ2lzdGVyU2VsZWN0b3JTdHlsZSIsImdyYXlfYjAiLCJ0eXBlIiwidW5kZWZpbmVkIiwiZ3JheV9lNSIsIlNlbGVjdG9yIiwibGFiZWwiLCJvcHRpb25zIiwiZGlzYWJsZWRPcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJDbG9zZVhJY29uIiwibW9kYWxPcGVuZWQiLCJzZXRNb2RhbE9wZW5lZCIsInJlZiIsInVzZVJlZiIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiZG9jdW1lbnQiLCJkb20iLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNyZWF0ZVBvcnRhbCIsImNvbW1vbkFjdGlvbnMiLCJib2R5IiwiYXhpb3MiLCJwb3N0IiwibWVBUEkiLCJnZXQiLCJkZWxldGUiLCJBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiU3RyaW5nIiwibGFyZ2VCdWlsZGluZ1R5cGVMaXN0IiwiYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCIsImhvdXN0QnVpbGRpbmdUeXBlTGlzdCIsInNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IiwidW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0IiwiYm5iQnVpbGRpbmdUeXBlTGlzdCIsImJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCIsImNvb2tpZVN0cmluZ1RvT2JqZWN0IiwiY29va2llU3RyaW5nIiwiY29va2llcyIsIml0ZW1TdHJpbmciLCJmb3JFYWNoIiwicGFpcnMiLCJwYWlyIiwic3BsaWNlIiwiam9pbiIsInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJocmVmIiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImhvc3RuYW1lIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVVcmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsImFwcCIsImNvbnRleHQiLCJhcHBJbml0aWFsUHJvcHMiLCJjb29raWVPYmplY3QiLCJyZXEiLCJoZWFkZXJzIiwiY29va2llIiwic3RvcmUiLCJnZXRTdGF0ZSIsImFjY2Vzc190b2tlbiIsImRlZmF1bHRzIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVNsaWNlIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicmVkdWNlciIsInJlZ2lzdGVyUm9vbSIsImluaXRpYWxSb290U3RhdGUiLCJIWURSQVRFIiwidXNlUmVkdXhTZWxlY3RvciIsImluaXRTdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiZGV2VG9vbHMiLCJjcmVhdGVXcmFwcGVyIiwibGFyZ2VCdWlsZGluZ1R5cGUiLCJidWlsZGluZ1R5cGUiLCJyb29tVHlwZSIsImlzU2V0VXBGb3JHdWVzdCIsIm1heGltdW1HdWVzdENvdW50IiwiYmVkcm9vbUNvdW50IiwiYmVkQ291bnQiLCJiZWRMaXN0IiwicHVibGljQmVkTGlzdCIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwic2V0QnVpbGRpbmdUeXBlIiwic2V0Um9vbVR5cGUiLCJzZXRJc1NldFVwRm9yR3Vlc3QiLCJyZWdpc3RlclJvb21BY3Rpb25zIiwiZ2xvYmFsU3R5bGUiLCJyZXNldCIsImJsYWNrIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImNhcmRpbmFsIiwiYW1hcmFudGgiLCJtYWluX3BpbmsiLCJncmF5XzQ4IiwiZ3JheV83MSIsImdyYXlfODAiLCJncmF5Xzg1IiwiZ3JheV9hYSIsImdyYXlfYmIiLCJncmF5X2M0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgQWlyYm5iTG9nb0ljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvc3ZnL2xvZ28vYWlyYm5iX2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBBaXJibmJMb2dvVGV4dEljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvc3ZnL2xvZ28vYWlyYm5iX2xvZ29fdGV4dC5zdmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG4vLyBpbXBvcnQgTW9kYWxQb3J0YWwgZnJvbSAnLi9Nb2RhbFBvcnRhbCc7XHJcbmltcG9ydCBTaWduVXBNb2RhbCBmcm9tICcuL2F1dGgvU2lnblVwTW9kYWwnO1xyXG5pbXBvcnQgdXNlTW9kYWwgZnJvbSAnLi4vaG9va3MvdXNlTW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi9zdG9yZVwiXHJcbmltcG9ydCBIYW1idXJnZXJJY29uIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3N2Zy9oZWFkZXIvaGFtYnVyZ2VyLnN2Z1wiXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF1dGhBY3Rpb25zIH0gZnJvbSBcIi4uL3N0b3JlL2F1dGhcIlxyXG5pbXBvcnQgQXV0aE1vZGFsIGZyb20gXCIuL2F1dGgvQXV0aE1vZGFsXCI7XHJcbmltcG9ydCBPdXRzaWRlQ2xpY2tIYW5kbGVyIGZyb20gJ3JlYWN0LW91dHNpZGUtY2xpY2staGFuZGxlcic7XHJcbmltcG9ydCB7IGxvZ291dEFQSSB9IGZyb20gJy4uL2xpYi9hcGkvYXV0aCc7XHJcbmltcG9ydCB7IHVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvdXNlcic7XHJcbmltcG9ydCBIZWFkZXJBdXRocyBmcm9tIFwiLi9IZWFkZXJBdXRoc1wiO1xyXG5pbXBvcnQgSGVhZGVyVXNlclByb2ZpbGUgZnJvbSAnLi9IZWFkZXJVc2VyUHJvZmlsZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAxcHggMTJweDtcclxuICB6LWluZGV4OiAxMDtcclxuICAuaGVhZGVyLWxvZ28td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5oZWFkZXItbG9nbyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiog7Zek642UIOuhnOq3uOyduCDtmozsm5DqsIDsnoUg67KE7Yq8ICovXHJcbiAgLmhlYWRlci1hdXRoLWJ1dHRvbnMge1xyXG4gICAgLmhlYWRlci1zaWduLXVwLWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9mN307XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogLm1vZGFsLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgLm1vZGFsLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIHotaW5kZXg6MTA7XHJcbiAgfVxyXG4gIC5tb2RhbC1jb250ZW50cyB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OjExO1xyXG4gIH0gKi9cclxuICBcclxuICAuaGVhZGVyLXVzZXItcHJvZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHBhZGRpbmc6IDAgNnB4IDAgMTZweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXVzZXItcHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJlYWN0LW91dHNpZGUtY2xpY2staGFuZDtlciBkaXZcclxuICAuaGVhZGVyLWxvZ28td3JhcHBlciArIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXVzZXJtZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MnB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxNnB4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2Y3fTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci11c2VybWVudS1kaXZpZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmdyYXlfZGR9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgW21vZGFsT3BlbmVkLCBzZXRNb2RhbE9wZW5lZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHtvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIE1vZGFsUG9ydGFsfSA9IHVzZU1vZGFsKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyDsnKDsoIAg66mU64m0IOyXtOqzoCDri6vtnpgg7Jes67aAXHJcbiAgY29uc3QgaXNMb2dnZWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIuaXNMb2dnZWQpO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBsb2dvdXRBUEkoKTtcclxuICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuaW5pdFVzZXIoKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nby13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8QWlyYm5iTG9nb0ljb24gIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCIgLz5cclxuICAgICAgICAgIDxBaXJibmJMb2dvVGV4dEljb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICBcclxuICAgICAgeyFpc0xvZ2dlZCAmJiA8SGVhZGVyQXV0aHMgLz59XHJcbiAgICAgIHtpc0xvZ2dlZCAmJiA8SGVhZGVyVXNlclByb2ZpbGUgLz59XHJcbiAgICAgIFxyXG4gICAgICA8TW9kYWxQb3J0YWw+XHJcbiAgICAgICAgPEF1dGhNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSAvPlxyXG4gICAgICA8L01vZGFsUG9ydGFsPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlTW9kYWwgZnJvbSAnLi4vaG9va3MvdXNlTW9kYWwnO1xyXG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2F1dGgnO1xyXG5pbXBvcnQgQXV0aE1vZGFsIGZyb20gJy4vYXV0aC9BdXRoTW9kYWwnO1xyXG5cclxuY29uc3QgSGVhZGVyQXV0aHM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtvcGVuTW9kYWwsIE1vZGFsUG9ydGFsLCBjbG9zZU1vZGFsfSA9IHVzZU1vZGFsKCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWF1dGgtYnV0dG9uc1wiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zaWduLXVwLWJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNldEF1dGhNb2RlKFwic2lnbnVwXCIpKTtcclxuICAgICAgICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ2luLWJ1dHRvblwiXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2V0QXV0aE1vZGUoXCJsb2dpblwiKSk7XHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFBvcnRhbD5cclxuICAgICAgICA8QXV0aE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9Lz5cclxuICAgICAgPC9Nb2RhbFBvcnRhbD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQXV0aHM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgT3V0c2lkZUNsaWNrSGFuZGxlciBmcm9tICdyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhhbWJ1cmdlckljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvc3ZnL2hlYWRlci9oYW1idXJnZXIuc3ZnXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL3VzZXInO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBsb2dvdXRBUEkgfSBmcm9tICcuLi9saWIvYXBpL2F1dGgnO1xyXG5cclxuY29uc3QgSGVhZGVyVXNlclByb2ZpbGU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIC8vIOycoOyggCDrqZTribQg7Je06rOgLCDri6vtnowg7Jes67aAXHJcbiAgY29uc3QgW2lzVXNlcm1lbnVPcGVuZWQsIHNldElzVXNlcm1lbnVPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHVzZXJQcm9maWxlSW1hZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIucHJvZmlsZUltYWdlKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyDroZzqt7jslYTsm4Mg7ZWY6riwXHJcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbG9nb3V0QVBJKCk7XHJcbiAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb25zLmluaXRVc2VyKCkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE91dHNpZGVDbGlja0hhbmRsZXJcclxuICAgICAgb25PdXRzaWRlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoaXNVc2VybWVudU9wZW5lZCkge1xyXG4gICAgICAgICAgc2V0SXNVc2VybWVudU9wZW5lZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXVzZXItcHJvZmlsZVwiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNVc2VybWVudU9wZW5lZCghaXNVc2VybWVudU9wZW5lZCl9XHJcbiAgICAgID5cclxuICAgICAgICA8SGFtYnVyZ2VySWNvbiAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17dXNlclByb2ZpbGVJbWFnZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci11c2VyLXByb2ZpbGUtaW1hZ2VcIlxyXG4gICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge2lzVXNlcm1lbnVPcGVuZWQgJiYgKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXItdXNlcm1lbnVcIj5cclxuICAgICAgICAgIDxsaT7siJnshowg6rSA66asPC9saT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcm9vbS9yZWdpc3Rlci9idWlsZGluZ1wiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzVXNlcm1lbnVPcGVuZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bGk+7IiZ7IaMIOuTseuhne2VmOq4sDwvbGk+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXVzZXJtZW51LWRpdmlkZXJcIiAvPlxyXG4gICAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgIOuhnOq3uOyVhOybg1xyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApfVxyXG4gICAgPC9PdXRzaWRlQ2xpY2tIYW5kbGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJVc2VyUHJvZmlsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFNpZ25VcE1vZGFsIGZyb20gXCIuL1NpZ25VcE1vZGFsXCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdG9yZVwiXHJcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJy4vTG9naW5Nb2RhbCc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBBdXRoTW9kYWw6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2Nsb3NlTW9kYWx9KSA9PiB7XHJcbiAgY29uc3QgYXV0aE1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6Um9vdFN0YXRlKSA9PiBzdGF0ZS5hdXRoLmF1dGhNb2RlKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAge2F1dGhNb2RlID09PSBcInNpZ251cFwiICYmIDxTaWduVXBNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSAvPn1cclxuICAgICAge2F1dGhNb2RlID09PSBcImxvZ2luXCIgJiYgPExvZ2luTW9kYWwgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gLz59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhNb2RhbDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBDbG9zZVhJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9tb2RhbC9tb2RhbF9jb2xvc2VfeF9pY29uLnN2Z1wiXHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvYXV0aC9tYWlsLnN2Z1wiXHJcbmltcG9ydCBPcGVuZWRFeWVJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL29wZW5lZC1leWUuc3ZnXCJcclxuaW1wb3J0IENsb3NlZEV5ZUljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvY2xvc2VkX2V5ZS5zdmdcIlxyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21tb24vQnV0dG9uXCJcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21tb24vSW5wdXRcIlxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGgnXHJcbmltcG9ydCB7IGxvZ2luQVBJIH0gZnJvbSAnLi4vLi4vbGliL2FwaS9hdXRoJ1xyXG5pbXBvcnQgdXNlVmFsaWRhdGVNb2RlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVZhbGlkYXRlTW9kZSdcclxuaW1wb3J0IHsgdXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9zdG9yZS91c2VyJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXHJcbiAgLyogd2lkdGg6NTY4cHg7ICovXHJcbiAgcGFkZGluZzogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxMTtcclxuXHJcbiAgLm1vZGFsLWNsb3NlLXgtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCAwIDQwcHggYXV0bztcclxuICB9XHJcbiAgLmxvZ2luLWlucHV0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcbiAgLmxvZ2luLXBhc3N3b3JkLWlucHV0LXdyYXBwZXIge1xyXG4gICAgc3ZnIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAubG9naW4tbW9kYWwtc3VibWl0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9lYn1cclxuICB9XHJcbiAgLmxvZ2luLW1vZGFsLXNldC1zaWdudXB7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luTW9kYWw6IFJlYWN0LkZDPElQcm9wcz4gPSAoe2Nsb3NlTW9kYWx9KSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaXNQYXNzd29yZEhpZGVkLCBzZXRJc1Bhc3N3b3JkSGlkZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3Qge3NldFZhbGlkYXRlTW9kZX0gPSB1c2VWYWxpZGF0ZU1vZGUoKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyDsnbTrqZTsnbwg7KO87IaMIOuzgOqyveyLnFxyXG4gIGNvbnN0IG9uQ2hhbmdlRW1haWwgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIOu5hOuwgOuyiO2YuCDrs4Dqsr0g7IucXHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7ZqM7JuQ6rCA7J6FIOuqqOuLrOuhnCDrs4Dqsr3tlZjquLBcclxuICBjb25zdCBjaGFuZ2VUb1NpZ25VcE1vZGFsID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2V0QXV0aE1vZGUoXCJzaWdudXBcIikpO1xyXG4gIH1cclxuXHJcbiAgLy8q67mE67CA67KI7Zi4IOyIqOq5gCDthqDquIDtlZjquLBcclxuICBjb25zdCB0b2dnbGVQYXNzd29yZEhpZGluZyA9ICgpID0+IHtcclxuICAgIHNldElzUGFzc3dvcmRIaWRlZCghaXNQYXNzd29yZEhpZGVkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdExvZ2luID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFZhbGlkYXRlTW9kZSh0cnVlKTtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICBhbGVydChcIuydtOuplOydvOqzvCDruYTrsIDrsoTtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxvZ2luQm9keSA9IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJlbWFpbCA6IFwiK2VtYWlsKTtcclxuICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCA6IFwiK3Bhc3N3b3JkKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIik7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBsb2dpbkFQSShsb2dpbkJvZHkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMlwiKTtcclxuICAgICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5zZXRMb2dnZWRVc2VyKGRhdGEpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjNcIik7XHJcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldFZhbGlkYXRlTW9kZShmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgb25TdWJtaXQ9e29uU3VibWl0TG9naW59PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvCDso7zshoxcIlxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBpY29uPXs8TWFpbEljb24gLz59XHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgIGlzVmFsaWQ9e2VtYWlsICE9PSBcIlwifVxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlPVwi7J2066mU7J287J20IO2VhOyalO2VqeuLiOuLpC5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWlucHV0LXdyYXBwZXIgbG9naW4tcGFzc3dvcmQtaW5wdXQtd2FwcGVyXCI+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDshKTsoJXtlZjquLBcIlxyXG4gICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgIGlzUGFzc3dvcmRIaWRlZD8gKFxyXG4gICAgICAgICAgICAgIDxDbG9zZWRFeWVJY29uIG9uQ2xpY2s9e3RvZ2dsZVBhc3N3b3JkSGlkaW5nfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxPcGVuZWRFeWVJY29uIG9uQ2xpY2s9e3RvZ2dsZVBhc3N3b3JkSGlkaW5nfSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPXtpc1Bhc3N3b3JkSGlkZWQgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgaXNWYWxpZD17cGFzc3dvcmQgIT09IFwiXCJ9XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U9XCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgLz4gIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1tb2RhbC1zdWJtaXQtYnV0dG9uLXdyYXBwZXJcIj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIOyVhOyngSDsl5DslrTruYTsl5TruYQg7ZqM7JuQ7J20IOyVhOuLiOyLoOqwgOyalD9cclxuICAgICAgICA8c3BhbiBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLW1vZGFsLXNldC1zaWdudXBcIlxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VUb1NpZ25VcE1vZGFsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luTW9kYWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IFJlZFhJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL3JlZF94X2ljb24uc3ZnXCJcclxuaW1wb3J0IEdyZWVuQ2hlY2tJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL2dyZWVuX2NoZWNrX2ljb24uc3ZnXCJcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQucDx7aXNWYWxpZDogYm9vbGVhbn0+YFxyXG4gIGNvbG9yOiAkeyh7IGlzVmFsaWQgfSkgPT5cclxuICAgIGlzVmFsaWQgPyBwYWxldHRlLmRhdmlkc29uX29yYW5nZSA6IHBhbGV0dGUuZ3JlZW59O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzdmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBhc3N3b3JkV2FybmluZzogUmVhY3QuRkM8SVByb3BzPiA9ICh7aXNWYWxpZCwgdGV4dH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBpc1ZhbGlkPXtpc1ZhbGlkfT5cclxuICAgICAge2lzVmFsaWQgPyA8UmVkWEljb24gLz4gOiA8R3JlZW5DaGVja0ljb24gLz59XHJcbiAgICAgIHt0ZXh0fVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZFdhcm5pbmc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiXHJcbmltcG9ydCBNYWlsY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL21haWwuc3ZnXCJcclxuaW1wb3J0IFBlcnNvbkljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2F1dGgvcGVyc29uLnN2Z1wiXHJcbmltcG9ydCBPcGVuZWRFeWVJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9hdXRoL29wZW5lZC1leWUuc3ZnXCJcclxuaW1wb3J0IENsb3NlRXllSWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvYXV0aC9jbG9zZWRfZXllLnN2Z1wiXHJcbmltcG9ydCB7ZGF5TGlzdCwgbW9udGhMaXN0LCB5ZWFyTGlzdH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0aWNEYXRhXCJcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi9jb21tb24vU2VsZWN0b3JcIlxyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbW1vbi9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21tb24vQnV0dG9uXCJcclxuaW1wb3J0IHsgbG9naW5BUEksIHNpZ251cEFQSSB9IGZyb20gJy4uLy4uL2xpYi9hcGkvYXV0aCdcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7dXNlckFjdGlvbnN9IGZyb20gXCIuLi8uLi9zdG9yZS91c2VyXCJcclxuaW1wb3J0IHVzZVZhbGlkYXRlTW9kZSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVmFsaWRhdGVNb2RlXCJcclxuaW1wb3J0IHsgY29tbW9uQWN0aW9ucyB9IGZyb20gJy4uLy4uL3N0b3JlL2NvbW1vbidcclxuaW1wb3J0IFBhc3N3b3JkV2FybmluZyBmcm9tICcuL1Bhc3N3b3JkV2FybmluZydcclxuaW1wb3J0IHsgYXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXHJcbiAgLm1vZGFsLWNsb3NlLXgtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCAwIDQwcHggYXV0bzsgICAgXHJcbiAgfVxyXG5cclxuICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICAuc2lnbi11cC1wYXNzd29yZC1pbnB1dC13cmFwcGVyIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2lnbi11cC1iaXJ0aGRhdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgLnNpZ24tdXAtbW9kYWwtYmlydGhkYXktaW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5jaGFyY29hbH1cclxuICB9XHJcblxyXG4gIC5zaWduLXVwLW1vZGFsLWJpcnRoZGF5LXNlbGVjdG9ycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIC5zaWduLXVwLW1vZGFsLWJpcnRoZGF5LW1vbnRoLXNlbGVjdG9yIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgICAuc2lnbi11cC1tb2RhbC1iaXJ0aGRheS1kYXktc2VsZWN0b3Ige1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgICAuc2lnbi11cC1tb2RhbC1iaXJ0aGRheS15ZWFyLXNlbGVjdG9yIHtcclxuICAgICAgd2lkdGg6IDMzLjMzMzMlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2lnbi11cC1tb2RhbC1zdWJtaXQtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2VifVxyXG4gIH1cclxuICAuc2lnbi11cC1tb2RhbC1zZXQtbG9naW4ge1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQQVNTV09SRF9NSU5fTEVOTkdUSCA9IDg7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG4vLyDshKDtg53tlaAg7IiYIOyXhuuKlCDsm5Qgb3B0aW9uXHJcbmNvbnN0IGRpc2FibGVkTW9udGhzID0gW1wi7JuUXCJdO1xyXG5cclxuLy8g7ISg7YOd7ZWgIOyImCDsl4bripQg7J28IG9wdGlvblxyXG5jb25zdCBkaXNhYmxlZERheXMgPSBbXCLsnbxcIl07XHJcblxyXG4vLyDshKDtg53tlaAg7IiYIOyXhuuKlCDrhYQgb3B0aW9uXHJcbmNvbnN0IGRpc2FibGVkWWVhcnMgPSBbXCLrhYRcIl07XHJcblxyXG5jb25zdCBTaWduVXBNb2RhbDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNsb3NlTW9kYWwgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsYXN0bmFtZSwgc2V0TGFzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZpcnN0bmFtZSwgc2V0Rmlyc3RuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2hpZGVQYXNzd29yZCwgc2V0SGlkZVBhc3N3b3JkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtwYXNzd29yZEZvY3VzZWQsIHNldFBhc3N3b3JkRm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtiaXJ0aFllYXIsIHNldEJpcnRoWWVhcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XHJcbiAgY29uc3QgW2JpcnRoRGF5LCBzZXRCaXJ0aERheV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XHJcbiAgY29uc3QgW2JpcnRoTW9udGgsIHNldEJpcnRoTW9udGhdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBjb25zdCB7IHNldFZhbGlkYXRlTW9kZSB9ID0gdXNlVmFsaWRhdGVNb2RlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyDroZzqt7jsnbgg66qo64us66GcIOuzgOqyve2VmOq4sFxyXG4gIGNvbnN0IGNoYW5nZVRvTG9naW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNldEF1dGhNb2RlKFwibG9naW5cIikpO1xyXG4gIH1cclxuXHJcbiAgLy8g7J2066mU7J28IOyjvOyGjCDrs4Dqsr0g7IucXHJcbiAgY29uc3Qgb25DaGFuZ2VFbWFpbCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7J2066aEIOuzgOqyvSDsi5xcclxuICBjb25zdCBvbkNoYW5nZUxhc3RuYW1lID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0TGFzdG5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICAvLyDshLEg67OA6rK9IOyLnFxyXG4gIGNvbnN0IG9uQ2hhbmdlRmlyc3RuYW1lID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0Rmlyc3RuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g67mE67CA67KI7Zi4IOuzgOqyvSDsi5xcclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICAvLyDruYTrsIDrsojtmLgg7Iio6rmAIO2GoOq4gO2VmOq4sFxyXG4gIGNvbnN0IHRvZ2dsZUhpZGVQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIHNldEhpZGVQYXNzd29yZCghaGlkZVBhc3N3b3JkKTtcclxuICB9XHJcblxyXG4gIC8vIOu5hOuwgOuyiO2YuCDsnbjtkosg7Y+s7Luk7IqkIOuQmOyXiOydhCDrlYxcclxuICBjb25zdCBvbkZvY3VzUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZEZvY3VzZWQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBwYXNzd29yZOqwgCDsnbTrpoTsnbTrgpgg7J2066mU7J287J2EIO2PrO2VqO2VmOuKlOyngFxyXG4gIGNvbnN0IGlzUGFzc3dvcmRIYXNOYW1lT3JFbWFpbCA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBcclxuICAgICAgIXBhc3N3b3JkIHx8IFxyXG4gICAgICAhbGFzdG5hbWUgfHxcclxuICAgICAgcGFzc3dvcmQuaW5jbHVkZXMobGFzdG5hbWUpIHx8XHJcbiAgICAgIHBhc3N3b3JkLmluY2x1ZGVzKGVtYWlsLnNwbGl0KFwiQFwiKVswXSksXHJcbiAgICAgIFtwYXNzd29yZCwgbGFzdG5hbWUsIGVtYWlsXVxyXG4gICk7XHJcblxyXG4gIC8vIOu5hOuwgOuyiO2YuOqwgCDstZzshowg7J6Q66a/7IiYIOydtOyDgeyduOyngFxyXG4gIGNvbnN0IGlzUGFzc3dvcmRPdmVyTWluTGVuZ3RoID0gdXNlTWVtbyhcclxuICAgICgpID0+ICEhcGFzc3dvcmQgJiYgcGFzc3dvcmQubGVuZ3RoID49IFBBU1NXT1JEX01JTl9MRU5OR1RILFxyXG4gICAgW3Bhc3N3b3JkXVxyXG4gICk7XHJcblxyXG4gIC8vIOu5hOuwgOuyiO2YuOqwgCDsiKvsnpDrgpgg7Yq57IiY6riw7Zi466W8IO2PrO2VqO2VmOuKlOyngFxyXG4gIGNvbnN0IGlzUGFzc3dvcmRIYXNOdW1iZXJPclN5bWJvbCA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBcclxuICAgICAgIShcclxuICAgICAgICAvW3t9W1xcXS8/Liw7OnwpKn5gIV5cXC1fKzw+QCMkJSZcXFxcPSgnXCJdL2cudGVzdChwYXNzd29yZCkgfHxcclxuICAgICAgICAvWzAtOV0vZy50ZXN0KHBhc3N3b3JkKSBcclxuICAgICAgKSxcclxuICAgIFtwYXNzd29yZF1cclxuICApO1xyXG5cclxuICAvLyDsg53rhYTsm5Tsnbwg7JuUIOuzgOqyvSDsi5xcclxuICBjb25zdCBvbkNoYW5nZUJpcnRoTW9udGggPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0QmlydGhNb250aChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIOyDneuFhOyblOydvCDsnbwg67OA6rK9IOyLnFxyXG4gIGNvbnN0IG9uQ2hhbmdlQmlydGhEYXkgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0QmlydGhEYXkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICAvLyDsg53rhYTsm5Tsnbwg64WEIOuzgOqyvSDsi5xcclxuICBjb25zdCBvbkNoYW5nZUJpcnRoWWVhciA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRCaXJ0aFllYXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICAvLyDtmozsm5DqsIDsnoUg7Y+8IOyeheugpSDqsJIg7ZmV7J247ZWY6riwXHJcbiAgY29uc3QgdmFsaWRhdGVTaWduVXBGb3JtID0gKCkgPT4ge1xyXG4gICAgLy8g7J247ZKLIOqwkuydtCDsl4bri6TrqbRcclxuICAgIGlmICghZW1haWwgfHwgIWxhc3RuYW1lIHx8ICFmaXJzdG5hbWUgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIOu5hOuwgOuyiO2YuOqwgCDsmKzrsJTrpbTsp4Ag7JWK64uk66m0XHJcbiAgICBpZiAoXHJcbiAgICAgICAgaXNQYXNzd29yZEhhc05hbWVPckVtYWlsIHx8XHJcbiAgICAgICAgIWlzUGFzc3dvcmRPdmVyTWluTGVuZ3RoIHx8XHJcbiAgICAgICAgaXNQYXNzd29yZEhhc051bWJlck9yU3ltYm9sXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOyDneuFhOyblOydvCDshYDroInthLAg6rCS7J20IOyXhuuLpOuptFxyXG4gICAgaWYgKCFiaXJ0aERheSB8fCAhYmlydGhNb250aCB8fCAhYmlydGhZZWFyKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8g7ZqM7JuQ6rCA7J6FIO2PvCDsoJzstpztlZjquLBcclxuICBjb25zdCBvblN1Ym1pdFNpZ25VcCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRWYWxpZGF0ZU1vZGUodHJ1ZSk7XHJcblxyXG4gICAgLy8gZGlzcGF0Y2goY29tbW9uQWN0aW9ucy5zZXRWYWxpZGF0ZU1vZGUodHJ1ZSkpO1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZVNpZ25VcEZvcm0oKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNpZ25VcEJvZHkgPSB7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIGxhc3RuYW1lLFxyXG4gICAgICAgICAgZmlyc3RuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICBiaXJ0aGRheTogbmV3IERhdGUgKFxyXG4gICAgICAgICAgICBgJHtiaXJ0aFllYXJ9LSR7YmlydGhNb250aCEucmVwbGFjZShcIuyblFwiLFwiXCIpfS0ke2JpcnRoRGF5fWBcclxuICAgICAgICAgICkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzaWdudXBBUEkoc2lnblVwQm9keSk7XHJcbiAgICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuc2V0TG9nZ2VkVXNlcihkYXRhKSk7XHJcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRWYWxpZGF0ZU1vZGUoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG9uU3VibWl0PXtvblN1Ym1pdFNpZ25VcH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066mU7J28IOyjvOyGjFwiIFxyXG4gICAgICAgICAgaWNvbj17PE1haWxjb24gLz59IFxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgdXNlVmFsaWRhdGlvblxyXG4gICAgICAgICAgaXNWYWxpZD17ISFlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlPVwi7J2066mU7J287J20IO2VhOyalO2VqeuLiOuLpC5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICBuYW1lPVwibGFzdG5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrpoQo7JiIOiDquLjrj5kpXCIgXHJcbiAgICAgICAgICBpY29uPXs8UGVyc29uSWNvbiAvPn0gXHJcbiAgICAgICAgICB2YWx1ZT17bGFzdG5hbWV9XHJcbiAgICAgICAgICB1c2VWYWxpZGF0aW9uXHJcbiAgICAgICAgICBpc1ZhbGlkPXshIWxhc3RuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTGFzdG5hbWV9XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U9XCLsnbTrpoTsnYQg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLshLEo7JiIOiDtmY0pXCIgXHJcbiAgICAgICAgICBpY29uPXs8UGVyc29uSWNvbiAvPn0gXHJcbiAgICAgICAgICB1c2VWYWxpZGF0aW9uXHJcbiAgICAgICAgICB2YWx1ZT17Zmlyc3RuYW1lfVxyXG4gICAgICAgICAgaXNWYWxpZD17ISFmaXJzdG5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaXJzdG5hbWV9XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U9XCLshLHsnYQg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlciBzaWduLXVwLXBhc3N3b3JkLWlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDshKTsoJXtlZjquLBcIlxyXG4gICAgICAgICAgdHlwZT17aGlkZVBhc3N3b3JkID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgICBpY29uPXtcclxuICAgICAgICAgICAgaGlkZVBhc3N3b3JkID8gKFxyXG4gICAgICAgICAgICAgIDxDbG9zZUV5ZUljb24gb25DbGljaz17dG9nZ2xlSGlkZVBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxPcGVuZWRFeWVJY29uIG9uQ2xpY2s9e3RvZ2dsZUhpZGVQYXNzd29yZH0vPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgIHVzZVZhbGlkYXRpb25cclxuICAgICAgICAgIGlzVmFsaWQ9e1xyXG4gICAgICAgICAgICAhaXNQYXNzd29yZEhhc05hbWVPckVtYWlsICYmIFxyXG4gICAgICAgICAgICBpc1Bhc3N3b3JkT3Zlck1pbkxlbmd0aCAmJlxyXG4gICAgICAgICAgICAhaXNQYXNzd29yZEhhc051bWJlck9yU3ltYm9sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U9XCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzUGFzc3dvcmR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwYXNzd29yZEZvY3VzZWQgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8UGFzc3dvcmRXYXJuaW5nIFxyXG4gICAgICAgICAgICBpc1ZhbGlkPXtpc1Bhc3N3b3JkSGFzTmFtZU9yRW1haWx9XHJcbiAgICAgICAgICAgIHRleHQ9XCLruYTrsIDrsojtmLjsl5Ag67O47J24IOydtOumhOydtOuCmCDsnbTrqZTsnbwg7KO87IaM66W8IO2PrO2VqO2VoCDsiJgg7JeG7Iq164uI64ukLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFBhc3N3b3JkV2FybmluZyBcclxuICAgICAgICAgICAgaXNWYWxpZD17IWlzUGFzc3dvcmRPdmVyTWluTGVuZ3RofSBcclxuICAgICAgICAgICAgdGV4dD1cIuy1nOyGjCA47J6QXCIgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFBhc3N3b3JkV2FybmluZ1xyXG4gICAgICAgICAgICBpc1ZhbGlkPXtpc1Bhc3N3b3JkSGFzTnVtYmVyT3JTeW1ib2x9XHJcbiAgICAgICAgICAgIHRleHQ9XCLsiKvsnpDrgpgg6riw7Zi466W8IO2PrO2VqO2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgPHAgY2xhc3NOYW1lPVwic2lnbi11cC1iaXJ0aGRhdC1sYWJlbFwiPuyDneydvDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwic2lnbi11cC1tb2RhbC1iaXJ0aGRheS1pbmZvXCI+XHJcbiAgICAgICAg66eMIDE47IS4IOydtOyDgeydmCDshLHsnbjrp4wg7ZqM7JuQ7Jy866GcIOqwgOyehe2VoCDsiJgg7J6I7Iq164uI64ukLiBcclxuICAgICAgICDsg53snbzsnYAg64uk66W4IOyXkOyWtOu5hOyXlOu5hCDsnbTsmqnsnpDsl5Dqsowg6rO16rCc65CY7KeAIOyViuyKteuLiOuLpC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtbW9kYWwtYmlydGhkYXktc2VsZWN0b3JzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLW1vZGFsLWJpcnRoZGF5LW1vbnRoLXNlbGVjdG9yXCI+XHJcbiAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgb3B0aW9ucz17bW9udGhMaXN0fVxyXG4gICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e2Rpc2FibGVkTW9udGhzfVxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLsm5RcIlxyXG4gICAgICAgICAgICB2YWx1ZT17YmlydGhNb250aH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQmlydGhNb250aH1cclxuICAgICAgICAgICAgaXNWYWxpZD17ISFiaXJ0aE1vbnRofVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtbW9kYWwtYmlydGhkYXktZGF5LXNlbGVjdG9yXCI+XHJcbiAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgb3B0aW9ucz17ZGF5TGlzdH1cclxuICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtkaXNhYmxlZERheXN9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIuydvFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJpcnRoRGF5fVxyXG4gICAgICAgICAgICBpc1ZhbGlkPXshIWJpcnRoRGF5fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtbW9kYWwtYmlydGhkYXkteWVhci1zZWxlY3RvclwiPlxyXG4gICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3llYXJMaXN0fVxyXG4gICAgICAgICAgICBkaXNhYmxlZE9wdGlvbnM9e2Rpc2FibGVkWWVhcnN9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIuuFhFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJpcnRoWWVhcn1cclxuICAgICAgICAgICAgaXNWYWxpZD17ISFiaXJ0aFllYXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLW1vZGFsLXN1Ym1pdC1idXR0b24td3JhcHBlclwiPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHA+XHJcbiAgICAgICAg7J2066+4IOyXkOyWtOu5hOyVpOu5hCDqs4TsoJXsnbQg7J6I64KY7JqUP1xyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaWduLXVwLW1vZGFsLXNldC1sb2dpblwiXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZVRvTG9naW5Nb2RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcE1vZGFsOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIlxyXG5cclxuLy8gKiDrsoTtirwg7IOJ7IOBIOq1rO2VmOq4sFxyXG5jb25zdCBnZXRCdXR0b25Db2xvcj0oY29sb3I6c3RyaW5nKT0+e1xyXG4gIHN3aXRjaChjb2xvcil7XHJcbiAgICBjYXNlIFwiZGFya19jeWFuXCI6XHJcbiAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgYDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke3BhbGV0dGUuYml0dGVyc3dlZXR9O1xyXG4gICAgICBgO1xyXG4gIH1cclxufTtcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5iaXR0ZXJzd2VldH07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJHsocHJvcHMpPT5nZXRCdXR0b25Db2xvcihwcm9wcy5jb2xvciB8fCBcIlwiKX1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgY29sb3I/OiBcImRhcmtfY3lhblwiO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b246IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBjaGlsZHJlbiwgY29sb3IsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB7Li4ucHJvcHN9IGNvbG9yPXtjb2xvcn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJ1dHRvbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhbGV0dGVcIlxyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuXHJcbnR5cGUgSW5wdXRDb250YWluZXJQcm9wcyA9IHtcclxuICBpY29uRXhpc3Q6IGJvb2xlYW47XHJcbiAgaXNWYWxpZDogYm9vbGVhbjtcclxuICB1c2VWYWxpZGF0aW9uOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PElucHV0Q29udGFpbmVyUHJvcHM+YFxyXG4gIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgcGFkZGluZzogJHsoeyBpY29uRXhpc3QgfSkgPT4gKGljb25FeGlzdCA/IFwiMCA0NHB4IDAgMTFweFwiIDogXCIwIDExcHhcIil9O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZWJ9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMXB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gIH1cclxuICAuaW5wdXQtZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLnRhd255fVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LWljb24td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMTFweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoe3VzZVZhbGlkYXRpb24sIGlzVmFsaWR9KSA9PlxyXG4gICAgdXNlVmFsaWRhdGlvbiAmJiBcclxuICAgICFpc1ZhbGlkICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuc25vd307XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gICR7KHt1c2VWYWxpZGF0aW9uLCBpc1ZhbGlkfSkgPT4gXHJcbiAgICB1c2VWYWxpZGF0aW9uICYmIFxyXG4gICAgaXNWYWxpZCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgfVxyXG4gICAgYH1cclxuXHJcbiAgXHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgaWNvbj86IEpTWC5FbGVtZW50OyBcclxuICBpc1ZhbGlkPzogYm9vbGVhbjtcclxuICB1c2VWYWxpZGF0aW9uPzogYm9vbGVhbjtcclxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgXHJcbiAgaWNvbiwgXHJcbiAgaXNWYWxpZCA9IGZhbHNlLFxyXG4gIHVzZVZhbGlkYXRpb24gPSB0cnVlLFxyXG4gIGVycm9yTWVzc2FnZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBcclxuICAgICAgaWNvbkV4aXN0PXshIWljb259XHJcbiAgICAgIGlzVmFsaWQ9e2lzVmFsaWR9XHJcbiAgICAgIHVzZVZhbGlkYXRpb249e3ZhbGlkYXRlTW9kZSAmJiB1c2VWYWxpZGF0aW9ufVxyXG4gICAgPlxyXG4gICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxyXG4gICAgICB7dXNlVmFsaWRhdGlvbiAmJiB2YWxpZGF0ZU1vZGUgJiYgIWlzVmFsaWQgJiYgZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci1tZXNzYWdlXCI+e2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtaWNvbi13cmFwcGVyXCI+e2ljb259PC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSW5wdXQpOyIsIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCwge2Nzc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCJcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uL3N0b3JlXCJcclxuLy9pbXBvcnQgV2FybmluZ0ljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvc3ZnL2NvbW1vbi93YXJuaW5nLnN2Z1wiO1xyXG5cclxuY29uc3Qgbm9ybWFsU2VsZWN0b3JTdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheV9lYn07XHJcbiAgICBwYWRkaW5nOiAwIDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvc2VsZWN0b3Ivc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMXB4IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFJlZ2lzdGVyU2VsZWN0b3JTdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNzZ9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfYjB9O1xyXG4gICAgcGFkZGluZzogMCAxNHB4IDAgMTJweDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvc2VsZWN0b3IvcmVnaXN0ZXJfc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMXB4IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIFNlbGVjdG9yQ29udGFpbmVyUHJvcHN7XHJcbiAgaXNWYWxpZDpib29sZWFuO1xyXG4gIHZhbGlkYXRlTW9kZTpib29sZWFuO1xyXG4gIHR5cGU6XCJyZWdpc3RlclwiIHwgXCJub3JtYWxcIjtcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxTZWxlY3RvckNvbnRhaW5lclByb3BzPmBcclxuICAkeyh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJub3JtYWxcIiAmJiBub3JtYWxTZWxlY3RvclN0eWxlfTtcclxuICAkeyh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJyZWdpc3RlclwiICYmIFJlZ2lzdGVyU2VsZWN0b3JTdHlsZX07XHJcblxyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgJHsoeyB2YWxpZGF0ZU1vZGUsIGlzVmFsaWQgfSkgPT4ge1xyXG4gICAgICBpZiAodmFsaWRhdGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS50YXdueX07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5zbm93fTtcclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgIGA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH19XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9zdmcvc2VsZWN0b3IvZGlzYWJsZWRfcmVnaXN0ZXJfc2VsZWN0b3JfZG93bl9hcnJvdy5zdmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmF5X2Y3fTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9lNX07XHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV9lNX07XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWxlY3Rvci13YXJuaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogJHtwYWxldHRlLmRhdmlkc29uX29yYW5nZX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIFJlYWN0LlNlbGVjdEhUTUxBdHRyaWJ1dGVzPEhUTUxTZWxlY3RFbGVtZW50PiB7XHJcbiAgbGFiZWw/OnN0cmluZztcclxuICBvcHRpb25zPzogc3RyaW5nW107XHJcbiAgdmFsdWU/OnN0cmluZztcclxuICBpc1ZhbGlkPyA6IGJvb2xlYW47XHJcbiAgdXNlVmFsaWRhdGlvbj86Ym9vbGVhbjtcclxuICBlcnJvck1lc3NhZ2U/OnN0cmluZztcclxuICB0eXBlPzpcInJlZ2lzdGVyXCIgfCBcIm5vcm1hbFwiO1xyXG4gIGRpc2FibGVkT3B0aW9ucz86IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBTZWxlY3RvcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7XHJcbiAgbGFiZWwsXHJcbiAgb3B0aW9ucyA9IFtdLCBcclxuICBpc1ZhbGlkLFxyXG4gIHVzZVZhbGlkYXRpb249dHJ1ZSxcclxuICBlcnJvck1lc3NhZ2UgPSBcIuyYteyFmOydhCDshKDtg53tlZjsi5zsmpQuXCIsXHJcbiAgdHlwZT1cIm5vcm1hbFwiLFxyXG4gIGRpc2FibGVkT3B0aW9ucyA9IFtdLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCB2YWxpZGF0ZU1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi52YWxpZGF0ZU1vZGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBcclxuICAgICAgaXNWYWxpZD17ISFpc1ZhbGlkfSBcclxuICAgICAgdmFsaWRhdGVNb2RlPXt2YWxpZGF0ZU1vZGUgJiYgdmFsaWRhdGVNb2RlfVxyXG4gICAgICB0eXBlPXt0eXBlfVxyXG4gICAgPlxyXG4gICAgICA8bGFiZWw+XHJcbiAgICAgICAge2xhYmVsICYmIDxzcGFuPntsYWJlbH08L3NwYW4+fVxyXG4gICAgICAgIDxzZWxlY3Qgey4uLnByb3BzfT5cclxuICAgICAgICAgIHtvcHRpb25zPy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSBkaXNhYmxlZD17ZGlzYWJsZWRPcHRpb25zLmluY2x1ZGVzKG9wdGlvbil9PlxyXG4gICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIHt1c2VWYWxpZGF0aW9uICYmIHZhbGlkYXRlTW9kZSAmJiAhaXNWYWxpZCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rvci13YXJuaW5nXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxwPntlcnJvck1lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2VsZWN0b3IpOyIsImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtjcmVhdGVQb3J0YWx9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgQ2xvc2VYSWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zdmcvbW9kYWwvbW9kYWxfY29sb3NlX3hfaWNvbi5zdmdcIlxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcblxyXG4gIC5tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRlbnRzIHtcclxuICAgIHdpZHRoOiA1NjhweDtcclxuICAgIC8qIGhlaWdodDogNDAwcHg7ICovXHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OjExO1xyXG4gICAgLm1vZGFsLWNsb3NlLXgtaWNvbiB7XHJcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICBtYXJnaW46MCAwIDQwcHggYXV0bztcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB1c2VNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBbbW9kYWxPcGVuZWQsIHNldE1vZGFsT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxPcGVuZWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsT3BlbmVkKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IE1vZGFsUG9ydGFsOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxFbGVtZW50IHwgbnVsbD4oKTtcclxuICAgIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRNb3VudGVkKHRydWUpO1xyXG4gICAgICBpZiAoZG9jdW1lbnQpIHtcclxuICAgICAgICBjb25zdCBkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3QtbW9kYWxcIik7XHJcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBkb207XHJcbiAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAocmVmLmN1cnJlbnQgJiYgbW91bnRlZCAmJiBtb2RhbE9wZW5lZCkge1xyXG4gICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50c1wiPlxyXG4gICAgICAgICAgICA8Q2xvc2VYSWNvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNsb3NlLXgtaWNvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+LFxyXG4gICAgICAgIHJlZi5jdXJyZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgb3Blbk1vZGFsLFxyXG4gICAgY2xvc2VNb2RhbCxcclxuICAgIE1vZGFsUG9ydGFsLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VNb2RhbDsiLCJpbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwiLi4vc3RvcmVcIlxyXG5pbXBvcnQge2NvbW1vbkFjdGlvbnN9IGZyb20gXCIuLi9zdG9yZS9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuXHJcbiAgY29uc3Qgc2V0VmFsaWRhdGVNb2RlID0gKHZhbHVlOiBib29sZWFuKSA9PiBcclxuICAgIGRpc3BhdGNoKGNvbW1vbkFjdGlvbnMuc2V0VmFsaWRhdGVNb2RlKHZhbHVlKSk7XHJcblxyXG4gIHJldHVybiB7dmFsaWRhdGVNb2RlLCBzZXRWYWxpZGF0ZU1vZGV9O1xyXG59OyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyBVc2VyVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy91c2VyXCJcclxuXHJcbi8vIOyCrOyaqeyekCDsnbjspp3sl5Ag6rSA66Co65CcIGFwaeulvCDrqqjslYTrhpPsnYAg7YyM7J28XHJcbi8vIO2ajOybkOqwgOyehSBib2R5XHJcbmludGVyZmFjZSBTaWduVXBBUElCb2R5IHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGZpcnN0bmFtZTogc3RyaW5nO1xyXG4gIGxhc3RuYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBiaXJ0aGRheTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyDtmozsm5DqsIDsnoUgYXBp66W8IOyCrOyaqe2VmOuKlCDtlajsiJjrpbwg66eM65Ok64+E66GdIO2VnOuLpC5cclxuLy8g7ZqM7JuQ6rCA7J6FIGFwaVxyXG5leHBvcnQgY29uc3Qgc2lnbnVwQVBJID0gKGJvZHk6IFNpZ25VcEFQSUJvZHkpID0+XHJcbiAgYXhpb3MucG9zdDxVc2VyVHlwZT4oXCIvYXBpL2F1dGgvc2lnbnVwXCIsIGJvZHkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQVBJID0gKGJvZHk6IHtlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nfSkgPT4gXHJcbiAgYXhpb3MucG9zdDxVc2VyVHlwZT4oXCIvYXBpL2F1dGgvbG9naW5cIiwgYm9keSk7XHJcblxyXG5cclxuLy8g7L+g7YKk7J2YIGFjY2Vzc190b2tlbuydmCDsnKDsoIAg7KCV67O0IOuwm+yVhOyYpOuKlCBhcGlcclxuZXhwb3J0IGNvbnN0IG1lQVBJID0gKCkgPT4gYXhpb3MuZ2V0PFVzZXJUeXBlPihcIi9hcGkvYXV0aC9tZVwiKTtcclxuXHJcblxyXG4vLyDroZzqt7jslYTsm4MgYXBpXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBUEkgPSAoKSA9PiBheGlvcy5kZWxldGUoXCIvYXBpL2F1dGgvbG9nb3V0XCIpOyIsImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuY29uc3QgYXhpb3MgPSBBeGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3M7IiwiZXhwb3J0IGNvbnN0IG1vbnRoTGlzdCA9IFtcclxuICBcIjHsm5RcIixcclxuICBcIjLsm5RcIixcclxuICBcIjPsm5RcIixcclxuICBcIjTsm5RcIixcclxuICBcIjXsm5RcIixcclxuICBcIjbsm5RcIixcclxuICBcIjfsm5RcIixcclxuICBcIjjsm5RcIixcclxuICBcIjnsm5RcIixcclxuICBcIjEw7JuUXCIsXHJcbiAgXCIxMeyblFwiLFxyXG4gIFwiMTLsm5RcIlxyXG5dO1xyXG5cclxuLy8gMeu2gO2EsCAzMeq5jOyngFxyXG5leHBvcnQgY29uc3QgZGF5TGlzdCA9IEFycmF5LmZyb20oQXJyYXkoMzEpLCAoXywgaSkgPT4gU3RyaW5nKGkgKyAxKSk7XHJcblxyXG4vLyAyMDIw67aA7YSwIDE5MDDrhYTquYzsp4BcclxuZXhwb3J0IGNvbnN0IHllYXJMaXN0ID0gQXJyYXkuZnJvbShBcnJheSgxMjEpLCAoXywgaSkgPT4gU3RyaW5nKDIwMjAgLSBpKSk7XHJcblxyXG4vLyAqIOyImeyGjCDtgbAg67KU7JyE7J2YIOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGxhcmdlQnVpbGRpbmdUeXBlTGlzdD1bXHJcbiAgXCLslYTtjIztirhcIixcclxuICBcIuyjvO2DnVwiLFxyXG4gIFwi67OE7LGEXCIsXHJcbiAgXCLrj4XtirntlZwg7IiZ7IaMXCIsXHJcbiAgXCJCJkJcIixcclxuICBcIuu2gO2LsO2BrO2YuO2FlFwiLFxyXG5dO1xyXG5cclxuLy8gKiDslYTtjIztirgg6rG066y8IOycoO2YlVxyXG5leHBvcnQgY29uc3QgYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdD1bXHJcbiAgXCLslYTtjIztirhcIixcclxuICBcIuqzteuPmeyjvO2DnVwiLFxyXG4gIFwi67OE7LGEXCIsXHJcbiAgXCLtgqTsgqwg7YyM66W07Yuw7L+o652866W0KOy/oOuwlClcIixcclxuICBcIuuhnO2UhO2KuFwiLFxyXG4gIFwi66CI7KeA642Y7Yq4XCIsXHJcbl07XHJcblxyXG4vLyAqIOyjvO2DnSDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBob3VzdEJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwi7KO87YOdXCIsXHJcbiAgXCLrsKnqsIjroZxcIixcclxuICBcIu2GteuCmOustOynkVwiLFxyXG4gIFwi7Lm07IKsXCIsXHJcbiAgXCLtjIzrpbTti7Dsv6jrnbzrpbQo7L+g67CUKVwiLFxyXG4gIFwi7IK066CIXCIsXHJcbiAgXCLsoITsm5Dso7ztg51cIixcclxuICBcIu2CpO2BtOudvOuNsOyKpFwiLFxyXG4gIFwi7KO87YOdKOq3uOumrOyKpClcIixcclxuICBcIuuLtOustOyGjCjsnbTtg4jrpqzslYQpXCIsXHJcbiAgXCLrj5TtlZjsmrDsiqRcIixcclxuICBcIuuVheyGjeydmCDsp5FcIixcclxuICBcIuuGjeyepSDssrTtl5gg7IiZ67CVXCIsXHJcbiAgXCLtlZjsmrDsiqQg67O07Yq4XCIsXHJcbiAgXCLsmKTrkZDrp4lcIixcclxuICBcIuuTseuMgFwiLFxyXG4gIFwi7Yys7IWYKO2VnOq1rSlcIixcclxuICBcIuuniOywqCjsmIHqta0sIO2UhOuekeyKpClcIixcclxuICBcIuy0iOyGjO2YlSDso7ztg51cIixcclxuICBcIu2DgOyatO2VmOyasOyKpFwiLFxyXG4gIFwi7Yq466Ow66GcKOydtO2DiOumrOyVhClcIixcclxuICBcIuyggO2DnVwiLFxyXG5dO1xyXG5cclxuLy8gKiDrs4TssYQg6rG066y8IOycoO2YlVxyXG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5VW5pdEJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwi6rKM7Iqk7Yq47JqpIOuzhOyxhFwiLFxyXG4gIFwi6rKM7Iqk7Yq4IOyKpOychO2KuFwiLFxyXG4gIFwi64aN7J6lIOyytO2XmCDsiJnrsJVcIixcclxuXTtcclxuXHJcbi8vICog64+F7Yq57ZWcIOyImeyGjCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCB1bmlxdWVTcGFjZUJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwi7Zeb6rCEXCIsXHJcbiAgXCLrs7TtirhcIixcclxuICBcIuuyhOyKpFwiLFxyXG4gIFwi7Lqg7ZWR7Lm0XCIsXHJcbiAgXCLsuqDtlZHsnqVcIixcclxuICBcIuyEsVwiLFxyXG4gIFwi64+Z6rW0XCIsXHJcbiAgXCLrj5TtlZjsmrDsiqRcIixcclxuICBcIuuVheyGjeydmCDsp5FcIixcclxuICBcIuuGjeyepSDssrTtl5gg7IiZ67CVXCIsXHJcbiAgXCLtlZjsmrDsiqQg67O07Yq4XCIsXHJcbiAgXCLsmKTrkZDrp4lcIixcclxuICBcIuydtOq4gOujqFwiLFxyXG4gIFwi7ISsXCIsXHJcbiAgXCLrk7HrjIBcIixcclxuICBcIu2OnOyFmCjtlZzqta0pXCIsXHJcbiAgXCLruYTtlonquLBcIixcclxuICBcIuuniOywqCjsmIHqta0sIO2UhOuekeyKpClcIixcclxuICBcIu2FkO2KuFwiLFxyXG4gIFwi7LSI7IaM7ZiVIOyjvO2DnVwiLFxyXG4gIFwi7Yuw7ZS8XCIsXHJcbiAgXCLquLDssKhcIixcclxuICBcIu2KuOumrO2VmOyasOyKpFwiLFxyXG4gIFwi7ZKN7LCoXCIsXHJcbiAgXCLsnKDrpbTtirhcIixcclxuXTtcclxuXHJcbi8vICogQiZCIOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGJuYkJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwiQiZCXCIsXHJcbiAgXCLsubTsgqwg7YyM66W07Yuw7L+o652866W0KOy/oOuwlClcIixcclxuICBcIuuGjeyepSDssrTtl5gg7IiZ67CVXCIsXHJcbiAgXCLrr7zsiJggKO2DgOydtOyZhClcIixcclxuICBcIuyCsOyepVwiLFxyXG4gIFwi66OM7Lm4KOydvOuzuClcIixcclxuXTtcclxuXHJcbi8vICog67aA7Yuw7YGsIO2YuO2FlCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBib3V0aXF1ZXNIb3RlbEJ1aWxkaW5nVHlwZUxpc3Q9W1xyXG4gIFwi67aA7Yuw7YGsIO2YuO2FlFwiLFxyXG4gIFwi7JWE7YyM7Yq4IO2YuO2FlFwiLFxyXG4gIFwi7Zek66as7Yuw7KeAIO2YuO2FlCjsnbjrj4QpXCIsXHJcbiAgXCLtmLjsiqTthZRcIixcclxuICBcIu2YuO2FlFwiLFxyXG4gIFwi7IKw7J6lXCIsXHJcbiAgXCLrpqzsobDtirhcIixcclxuICBcIuugiOyngOuNmOyKpFwiLFxyXG4gIFwi6rCd7J6UKOykkeq1rSlcIixcclxuXTsiLCIvLyogXCJ0b2tlbj12YWx1ZVwiIOulvCB7dG9rZW46XCJ2YWx1ZVwifeuhnCDrsJTqvrjripQg7ZWo7IiYXHJcbmV4cG9ydCBjb25zdCBjb29raWVTdHJpbmdUb09iamVjdCA9IChjb29raWVTdHJpbmc6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgaWYgKGNvb2tpZVN0cmluZykge1xyXG4gICAgICAvLyogXCJ0b2tlbj12YWx1ZVwiXHJcbiAgICAgIGNvbnN0IGl0ZW1TdHJpbmcgPSBjb29raWVTdHJpbmc/LnNwbGl0KC9cXHMqO1xccyovKTtcclxuICAgICAgaXRlbVN0cmluZy5mb3JFYWNoKChwYWlycykgPT4ge1xyXG4gICAgICAgIC8vKiBbXCJ0b2tlblwiLFwidmFsdWVcIl1cclxuICAgICAgICBjb25zdCBwYWlyID0gcGFpcnMuc3BsaXQoL1xccyo9XFxzKi8pO1xyXG4gICAgICAgIGNvb2tpZXNbcGFpclswXV0gPSBwYWlyLnNwbGljZSgxKS5qb2luKFwiPVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29va2llcztcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgQXBwLCB7QXBwQ29udGV4dCwgQXBwUHJvcHN9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsU3R5bGVzXCI7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuaW1wb3J0IHsgY29va2llU3RyaW5nVG9PYmplY3QgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uL2xpYi9hcGknO1xyXG5pbXBvcnQgeyBtZUFQSSB9IGZyb20gJy4uL2xpYi9hcGkvYXV0aCc7XHJcbmltcG9ydCB7IHVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvdXNlcic7XHJcblxyXG5jb25zdCBhcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSA6IEFwcFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPGRpdiBpZD1cInJvb3QtbW9kYWxcIiAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5hcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQ6IEFwcENvbnRleHQpID0+IHtcclxuICBjb25zdCBhcHBJbml0aWFsUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpO1xyXG4gIGNvbnN0IGNvb2tpZU9iamVjdCA9IGNvb2tpZVN0cmluZ1RvT2JqZWN0KGNvbnRleHQuY3R4LnJlcT8uaGVhZGVycy5jb29raWUpO1xyXG4gIGNvbnN0IHtzdG9yZX0gPSBjb250ZXh0LmN0eDtcclxuICBjb25zdCB7aXNMb2dnZWR9ID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyO1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKCFpc0xvZ2dlZCAmJiBjb29raWVPYmplY3QuYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29va2llID0gY29va2llT2JqZWN0LmFjY2Vzc190b2tlbjtcclxuICAgICAgLy9jb25zdCB7IGRhdGEgfSA9IGF3YWl0IG1lQVBJKCk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gIGF4aW9zLmdldChcIi9hcGkvYXV0aC9tZVwiKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICAvL2V4cG9ydCBjb25zdCBtZUFQSSA9ICgpID0+IGF4aW9zLmdldDxVc2VyVHlwZT4oXCIvYXBpL2F1dGgvbWVcIik7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHVzZXJBY3Rpb25zLnNldExvZ2dlZFVzZXIoZGF0YSkpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhjb250ZXh0LmN0eC5yZXE/LmhlYWRlcnMuY29va2llKTtcclxuICBjb25zb2xlLmxvZyhjb29raWVPYmplY3QpO1xyXG4gIHJldHVybiB7Li4uYXBwSW5pdGlhbFByb3BzfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoYXBwKTsiLCIvLyDroZzqt7jsnbgg66qo64usIOunjOuTpOq4sFxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuXHJcbi8vIOy0iOq4sCDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiB7YXV0aE1vZGU6IFwic2lnbnVwXCIgfCBcImxvZ2luXCJ9ID0ge1xyXG4gIGF1dGhNb2RlOiBcInNpZ251cFwiLFxyXG59O1xyXG5cclxuY29uc3QgYXV0aCA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIOyduOymnSDtjJ3sl4Ug67OA6rK97ZWY6riwXHJcbiAgICBzZXRBdXRoTW9kZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwic2lnbnVwXCIgfCBcImxvZ2luXCI+KSB7XHJcbiAgICAgIHN0YXRlLmF1dGhNb2RlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhBY3Rpb25zID0gey4uLmF1dGguYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoOyIsImltcG9ydCB7Y3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcbmltcG9ydCB7IENvbW1vblN0YXRlfSBmcm9tIFwiLi4vdHlwZXMvcmVkdXhTdGF0ZVwiXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IENvbW1vblN0YXRlID0ge1xyXG4gIHZhbGlkYXRlTW9kZTogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBjb21tb24gPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJjb21tb25cIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIHZhbGlkYXRlTW9kZSDrs4Dqsr3tlZjquLBcclxuICAgIHNldFZhbGlkYXRlTW9kZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KXtcclxuICAgICAgc3RhdGUudmFsaWRhdGVNb2RlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vbkFjdGlvbnMgPSB7Li4uY29tbW9uLmFjdGlvbnN9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsImltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIsIE1ha2VTdG9yZSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5pbXBvcnQge1xyXG4gIFR5cGVkVXNlU2VsZWN0b3JIb29rLFxyXG4gIHVzZVNlbGVjdG9yIGFzIHVzZVJlZHV4U2VsZWN0b3JcclxufSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCJcclxuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IGF1dGggZnJvbSBcIi4vYXV0aFwiO1xyXG5pbXBvcnQgcmVnaXN0ZXJSb29tIGZyb20gXCIuL3JlZ2lzdGVyUm9vbVwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGNvbW1vbjogY29tbW9uLnJlZHVjZXIsXHJcbiAgdXNlcjogdXNlci5yZWR1Y2VyLFxyXG4gIGF1dGg6IGF1dGgucmVkdWNlcixcclxuICByZWdpc3RlclJvb206IHJlZ2lzdGVyUm9vbS5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vIOyKpO2GoOyWtCDtg4DsnoVcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxubGV0IGluaXRpYWxSb290U3RhdGU6IFJvb3RTdGF0ZTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuICAgIGlmIChzdGF0ZSA9PT0gaW5pdGlhbFJvb3RTdGF0ZSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuICByZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbn07XHJcblxyXG4vLyDtg4DsnoUg7KeA7JuQ65CY64qUIOy7pOyKpO2FgCB1c2VTZWxlY3RvciDrp4zrk6TquLBcclxuZXhwb3J0IGNvbnN0IHVzZVNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlUmVkdXhTZWxlY3RvcjtcclxuXHJcbmNvbnN0IGluaXRTdG9yZTogTWFrZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcixcclxuICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGluaXRpYWxSb290U3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpO1xyXG5cclxuIiwiaW1wb3J0IHtjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7QmVkVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Jvb21cIjtcclxuXHJcbnR5cGUgUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICBsYXJnZUJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGJ1aWxkaW5nVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHJvb21UeXBlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgaXNTZXRVcEZvckd1ZXN0OiBib29sZWFuIHwgbnVsbDtcclxuXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDpudW1iZXI7XHJcbiAgICBiZWRyb29tQ291bnQ6bnVtYmVyO1xyXG4gICAgYmVkQ291bnQ6bnVtYmVyO1xyXG4gICAgYmVkTGlzdDp7aWQ6bnVtYmVyOyBiZWRzOnt0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn1bXX1bXTtcclxuICAgIHB1YmxpY0JlZExpc3Q6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdO1xyXG59O1xyXG5cclxuLy8gKiDstIjquLDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpc3RlclJvb21TdGF0ZSA9IHtcclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBudWxsLCAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVIO2BsCDrspTso7xcclxuICAgIGJ1aWxkaW5nVHlwZTpudWxsLCAgICAgICAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVXHJcbiAgICByb29tVHlwZTogbnVsbCwgICAgICAgICAgICAgICAgIC8vICog7IiZ7IaMIOycoO2YlVxyXG4gICAgaXNTZXRVcEZvckd1ZXN0Om51bGwsICAgICAgICAgICAvLyAqIOqyjOyKpO2KuOunjOydhCDsnITtlbQg66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgD9cclxuICAgIC8vXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDoxLCAgICAgICAgICAgIC8vICog7LWc64yAIOyImeuwlSDsnbjsm5BcclxuICAgIGJlZHJvb21Db3VudDowLCAgICAgICAgICAgICAgICAgLy8gKiDsuajsi6Qg6rCc7IiYXHJcbiAgICBiZWRDb3VudDoxLCAgICAgICAgICAgICAgICAgICAgIC8vICog7Lmo64yAIOqwnOyImFxyXG4gICAgYmVkTGlzdDpbXSwgICAgICAgICAgICAgICAgICAgICAvLyAqIOy5qOuMgCDsnKDtmJVcclxuICAgIHB1YmxpY0JlZExpc3Q6W10sICAgICAgICAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlVxyXG5cclxufTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyUm9vbSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6XCJyZWdpc3RlclJvb21cIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICAvLyDtgbAg6rG066y8IOycoO2YlSDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRMYXJnZUJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlLmxhcmdlQnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldEJ1aWxkaW5nVHlwZShzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248c3RyaW5nPil7XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkPT09XCJcIil7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGU9bnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5idWlsZGluZ1R5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsiJnshowg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRSb29tVHlwZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwiZW50aXJlXCIgfCBcInByaXZhdGVcIiB8IFwicHVibGljXCI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJvb21UeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiAn6rKM7Iqk7Yq47JqpIOyImeyGjOyduOyngCcg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0SXNTZXRVcEZvckd1ZXN0KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxib29sZWFuPil7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2V0VXBGb3JHdWVzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm9vbUFjdGlvbnM9ey4uLnJlZ2lzdGVyUm9vbS5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyUm9vbTsiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuaW1wb3J0IHtVc2VyVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXJcIlxyXG5pbXBvcnQge1VzZXJTdGF0ZX0gZnJvbSBcIi4uL3R5cGVzL3JlZHV4U3RhdGVcIlxyXG5cclxuLy8g7LSI6riwIOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6VXNlclN0YXRlID0ge1xyXG4gIGlkOjAsXHJcbiAgZW1haWw6IFwiXCIsXHJcbiAgbGFzdG5hbWU6IFwiXCIsXHJcbiAgZmlyc3RuYW1lOiBcIlwiLFxyXG4gIGJpcnRoZGF5OiBcIlwiLFxyXG4gIGlzTG9nZ2VkOiBmYWxzZSxcclxuICBwcm9maWxlSW1hZ2U6IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCB1c2VyID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8g66Gc6re47J247ZWcIOycoOyggCDrs4Dqsr3tlZjquLBcclxuICAgIHNldExvZ2dlZFVzZXIoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxVc2VyVHlwZT4pIHtcclxuICAgICAgc3RhdGUgPSB7Li4uYWN0aW9uLnBheWxvYWQsIGlzTG9nZ2VkOiB0cnVlfTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfSxcclxuICAgIC8vIOycoOyggCDstIjquLDtmZQg7ZWY6riwXHJcbiAgICBpbml0VXNlcihzdGF0ZSkge1xyXG4gICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckFjdGlvbnMgPSB7Li4udXNlci5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXI7IiwiaW1wb3J0IHJlc2V0IGZyb20gXCJzdHlsZWQtcmVzZXRcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi9wYWxldHRlXCI7XHJcblxyXG5jb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcclxuICAke3Jlc2V0fTtcclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFpcmJuYiBDZXJlYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgJHtnbG9iYWxTdHlsZX07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTsiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjYXJkaW5hbDogXCIjYTQxODUwXCIsXHJcbiAgICBkYXZpZHNvbl9vcmFuZ2U6IFwiI2MxMzUxNVwiLFxyXG4gICAgdGF3bnk6IFwiI2Q5MzkwMFwiLFxyXG4gICAgYW1hcmFudGg6IFwiI0U1MUU1M1wiLFxyXG4gICAgb3JhbmdlOiBcIiNmYzY0MmRcIixcclxuICAgIG1haW5fcGluazogXCIjRkYzODVDXCIsXHJcbiAgICBiaXR0ZXJzd2VldDogXCIjZmY1YTVmXCIsXHJcbiAgICBibGFjazogXCIjMjIyMjIyXCIsXHJcbiAgICBjaGFyY29hbDogXCIjNDg0ODQ4XCIsXHJcbiAgICBzbm93OiBcIiNGRkY4RjZcIixcclxuICAgIGdyYXlfNDg6IFwiIzQ4NDg0OFwiLFxyXG4gICAgZ3JheV83MTogXCIjNzE3MTcxXCIsXHJcbiAgICBncmF5Xzc2OiBcIiM3Njc2NzZcIixcclxuICAgIGdyYXlfODA6IFwiIzgwODA4MFwiLFxyXG4gICAgZ3JheV84NTogXCIjODU4NTg1XCIsXHJcbiAgICBncmF5X2FhOiBcIiNhYWFcIixcclxuICAgIGdyYXlfYmI6IFwiI2JiYlwiLFxyXG4gICAgZ3JheV9iMDogXCIjYjBiMGIwXCIsXHJcbiAgICBncmF5X2M0OiBcIiNjNGM0YzRcIixcclxuICAgIGdyYXlfZGQ6IFwiI2RkZFwiLFxyXG4gICAgZ3JheV9lYjogXCIjZWJlYmViXCIsXHJcbiAgICBncmF5X2U1OiBcIiNlNWU1ZTVcIixcclxuICAgIGdyYXlfZjc6IFwiI2Y3ZjdmN1wiLFxyXG4gICAgZGFya19jeWFuOiBcIiMwMDg0ODlcIixcclxuICAgIGdyZWVuOiBcIiMwMDhBMDVcIixcclxuICB9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1yZXNldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9