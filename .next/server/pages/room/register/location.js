module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/room/register/location.tsx");
/******/ })
/************************************************************************/
/******/ ({

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

const getButtonColor = (color, colorReverse) => {
  if (colorReverse) {
    switch (color) {
      case "dark_cyan":
        return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:2px solid ", ";color:", ";background-color:white;"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan);

      default:
        return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["border:2px solid ", ";color:", ";background-color:white;"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].black, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].black);
    }
  }

  switch (color) {
    case "dark_cyan":
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].dark_cyan);

    case "white":
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:white;"]);

    default:
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background-color:", ";"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].bittersweet);
  }
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "Button__Container",
  componentId: "sc-1h0fxq-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:48px;padding:0 15px;border:0;border-radius:4px;font-size:18px;font-weight:700;outline:none;cursor:pointer;width:", ";", ";svg{margin-right:12px;}"], props => props.width, props => getButtonColor(props.color || "", props.colorReverse));
const normalButtonStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:100%;height:48px;border:0;border-radius:4px;background-color:", ";color:white;font-size:16px;font-weight:800;outline:none;cursor:pointer;"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].bittersweet);
const RegisterButtonStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:161px;height:45px;border:1px solid ", ";background-color:white;border-radius:4px;color:", ";font-size:18px;font-weight:700;outline:none;cursor:pointer;"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_c4, _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_48);

const Button = (_ref) => {
  let {
    children,
    color,
    width,
    colorReverse = false,
    icon
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "color", "width", "colorReverse", "icon"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, _objectSpread(_objectSpread({}, props), {}, {
    color: color,
    width: width,
    colorReverse: colorReverse,
    children: [icon, children]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
})(["label{span{display:block;margin-bottom:8px;}}input{position:relative;width:100%;height:46px;padding:", ";border:1px solid ", ";border-radius:4px;font-size:16px;outline:none;&::placeholder{color:", ";}&:focus{border-color:", " !important;}}.svg{position:absolute;right:11px;height:46px;}.input-error-message{margin-top:8px;font-weight:600;font-size:14px;color:", "}.input-icon-wrapper{position:absolute;top:0;right:11px;height:46px;display:flex;align-items:center;}", " ", ""], ({
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
    label,
    isValid = false,
    useValidation = true,
    errorMessage
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "label", "isValid", "useValidation", "errorMessage"]);

  const validateMode = Object(_store__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.common.validateMode);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line max-len
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      iconExist: !!icon,
      isValid: isValid,
      useValidation: validateMode && useValidation,
      children: [label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, undefined), !label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 20
      }, undefined), icon, useValidation && validateMode && !isValid && errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "input-error-message",
        children: errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, undefined)
  );
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
          value: option,
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

/***/ "./components/room/register/RegisterRoomLocation.tsx":
/*!***********************************************************!*\
  !*** ./components/room/register/RegisterRoomLocation.tsx ***!
  \***********************************************************/
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
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/palette */ "./styles/palette.ts");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Button */ "./components/common/Button.tsx");
/* harmony import */ var _common_Selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Selector */ "./components/common/Selector.tsx");
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Input */ "./components/common/Input.tsx");
/* harmony import */ var _lib_staticData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/staticData */ "./lib/staticData.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store */ "./store/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_registerRoom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/registerRoom */ "./store/registerRoom.ts");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\components\\room\\register\\RegisterRoomLocation.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NavigationIcon = function NavigationIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "m0 6 16-6-5.99 16L8 8 0 6z",
      fill: "#008489"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

NavigationIcon.defaultProps = {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};








/*

    4단계

*/

const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "RegisterRoomLocation__Container",
  componentId: "sc-1m6cgpy-0"
})(["padding:62px 30px 100px;h2{font-size:19px;font-weight:800;margin-bottom:56px;}h3{font-size:14px;font-weight:bold;color:", ";margin-bottom:6px;}.register-room-step-info{font-size:14px;max-width:400px;margin-bottom:24px;}.register-room-location-button-wrapper{width:176px;margin-bottom:24px;}.register-room-location-country-selector-wrapper{width:385px;margin-bottom:24px;}.register-room-location-city-district{font-size:14px;max-width:400px;margin-bottom:24px;}.register-room-location-street-address{font-size:14px;max-width:400px;margin-bottom:24px;}.register-room-location-detail-address{font-size:14px;max-width:400px;margin-bottom:24px;}.register-room-location-postcode{font-size:14px;max-width:400px;margin-bottom:24px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray_76);

const RegisterRoomLocation = () => {
  const country = Object(_store__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.registerRoom.country);
  const city = Object(_store__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.registerRoom.city);
  const district = Object(_store__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.registerRoom.district);
  const streetAddress = Object(_store__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.registerRoom.streetAddress);
  const detailAddress = Object(_store__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.registerRoom.detailAddress);
  const postcode = Object(_store__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.registerRoom.postcode);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])(); // * 국가 변경 시

  const onChangeCountry = event => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_10__["registerRoomActions"].setCountry(event.target.value));
  }; // * 시도 변경 시


  const onChangeCity = event => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_10__["registerRoomActions"].setCity(event.target.value));
  }; // * 시군구 변경 시


  const onChangeDistrict = event => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_10__["registerRoomActions"].setDistrict(event.target.value));
  }; // * 도로명주소 변경 시


  const onChangeStreetAddress = event => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_10__["registerRoomActions"].setStreetAddress(event.target.value));
  }; // * 동호수 변경 시


  const onChangeDetailAddress = event => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_10__["registerRoomActions"].setDetailAddress(event.target.value));
  }; // * 우편번호 변경 시


  const onChangePostcode = event => {
    dispatch(_store_registerRoom__WEBPACK_IMPORTED_MODULE_10__["registerRoomActions"].setPostcode(event.target.value));
  }; // * 현재 위치 불러오기에 성공했을 때


  const onSuccessGetLocation = ({
    coords
  }) => {
    console.log("latitude", coords.latitude);
    console.log("longitude", coords.longitude);
  }; // * 현재 위치 사용 클릭 시


  const onClickGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccessGetLocation, e => {
      console.log(e);
      alert(e === null || e === void 0 ? void 0 : e.message);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "\uC219\uC18C\uC758 \uC704\uCE58\uB97C \uC54C\uB824\uC8FC\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "4\uB2E8\uACC4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "register-room-step-info",
      children: "\uC815\uD655\uD55C \uC219\uC18C \uC8FC\uC18C\uB294 \uAC8C\uC2A4\uD2B8\uAC00 \uC608\uC57D\uC744 \uC644\uB8CC\uD55C \uD6C4\uC5D0\uB9CC \uACF5\uAC1C\uB429\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "reigster-room-location-button-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: "dark_cyan",
        colorReverse: true,
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavigationIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 27
        }, undefined),
        onChange: onClickGetCurrentLocation,
        children: "\uD604\uC7AC \uC704\uCE58 \uC0AC\uC6A9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-location-country-selector-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Selector__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "register",
        options: _lib_staticData__WEBPACK_IMPORTED_MODULE_7__["countryList"] // 국가리스트
        ,
        useValidation: false,
        defaultValue: "\uAD6D\uAC00/\uC9C0\uC5ED \uC120\uD0DD",
        disabledOptions: ["국가/지역 선택"],
        value: country,
        onChange: onChangeCountry
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-location-city-district",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: "\uC2DC/\uB3C4",
        value: city,
        onChange: onChangeCity
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: "\uC2DC/\uAD70/\uAD6C",
        value: district,
        onChange: onChangeDistrict
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-location-street-address",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: "\uB3C4\uB85C\uBA85\uC8FC\uC18C",
        value: streetAddress,
        onChange: onChangeStreetAddress
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-location-detail-address",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: "\uB3D9\uD638\uC218(\uC120\uD0DD \uC0AC\uD56D)",
        value: detailAddress,
        onChange: onChangeDetailAddress,
        useValidation: false
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register-room-location-postcode",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: "\uC6B0\uD3B8\uBC88\uD638",
        value: postcode,
        onChange: onChangePostcode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 9
  }, undefined);
}; //https://developers.google.com/maps/documentation/geocoding/overview


/* harmony default export */ __webpack_exports__["default"] = (RegisterRoomLocation);

/***/ }),

/***/ "./lib/staticData.ts":
/*!***************************!*\
  !*** ./lib/staticData.ts ***!
  \***************************/
/*! exports provided: monthList, dayList, yearList, largeBuildingTypeList, apartmentBuildingTypeList, houstBuildingTypeList, secondaryUnitBuildingTypeList, uniqueSpaceBuildingTypeList, bnbBuildingTypeList, boutiquesHotelBuildingTypeList, bedroomCountList, bedTypes, countryList */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bedroomCountList", function() { return bedroomCountList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bedTypes", function() { return bedTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryList", function() { return countryList; });
const monthList = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]; // 1부터 31까지

const dayList = Array.from(Array(31), (_, i) => String(i + 1)); // 2020부터 1900년까지

const yearList = Array.from(Array(121), (_, i) => String(2020 - i)); // * 숙소 큰 범위의 건물 유형

const largeBuildingTypeList = ["아파트", "주택", "별채", "독특한 숙소", "B&B", "부티크호텔"]; // * 아파트 건물 유형

const apartmentBuildingTypeList = ["아파트", "공동주택", "별채", "키사 파르티쿨라르(쿠바)", "로프트", "레지던트"]; // * 주택 건물 유형

const houstBuildingTypeList = ["주택", "방갈로", "통나무집", "카사", "파르티쿨라르(쿠바)", "살레", "전원주택", "키클라데스", "주택(그리스)", "담무소(이탈리아)", "돔하우스", "땅속의 집", "농장 체험 숙박", "하우스 보트", "오두막", "등대", "팬션(한국)", "마차(영국, 프랑스)", "초소형 주택", "타운하우스", "트룰로(이탈리아)", "저택"]; // * 별채 건물 유형

const secondaryUnitBuildingTypeList = ["게스트용 별채", "게스트 스위트", "농장 체험 숙박"]; // * 독특한 숙소 건물 유형

const uniqueSpaceBuildingTypeList = ["헛간", "보트", "버스", "캠핑카", "캠핑장", "성", "동굴", "돔하우스", "땅속의 집", "농장 체험 숙박", "하우스 보트", "오두막", "이글루", "섬", "등대", "펜션(한국)", "비행기", "마차(영국, 프랑스)", "텐트", "초소형 주택", "티피", "기차", "트리하우스", "풍차", "유르트"]; // * B&B 건물 유형

const bnbBuildingTypeList = ["B&B", "카사 파르티쿨라르(쿠바)", "농장 체험 숙박", "민수 (타이완)", "산장", "료칸(일본)"]; // * 부티크 호텔 건물 유형

const boutiquesHotelBuildingTypeList = ["부티크 호텔", "아파트 호텔", "헤리티지 호텔(인도)", "호스텔", "호텔", "산장", "리조트", "레지던스", "객잔(중국)"]; //* 침실 개수

const bedroomCountList = Array.from(Array(16), (_, i) => `침실 ${i}개`); // * 침대 유형

const bedTypes = ["소파", "에어 매트릭스", "요와 이블", "싱글", "더블", "퀸", "이층 침대", "바닥용 에어매트릭스", "유아 침대", "유아용 침대", "해먹", "물침대"]; // * 국가 리스트

const countryList = ["가나", "가봉", "가이아나", "감비아", "건지", "과들루프", "과테말라", "괌", "그레나다", "그루지야", "그리스", "그린란드", "기네비쏘", "기니", "까뽀베르데", "나미비아", "나우루", "나이지리아", "남수단", "남아프리카", "네덜란드", "네덜란드령 카리브", "네팔", "노르웨이", "노퍽섬", "뉴 칼레도니아", "뉴질랜드", "니우에", "니제르", "니카라과", "대만", "덴마크", "도미니카", "도미니카 공화국", "독일", "동티모르", "라오스", "라이베리아", "라트비아", "러시아", "레바논", "레소토", "루마니아", "룩셈부르크", "르완다", "리비아", "리유니온", "리투아니아", "리히텐슈타인", "마다가스카르", "마샬 군도", "마요티", "마카오", "말라위", "말레이시아", "말리", "말티니크", "맨 섬", "멕시코", "모나코", "모로코", "모리셔스", "모리타니", "모잠비크", "몬테네그로", "몬트세라트", "몰도바", "몰디브", "몰타", "몽골", "미국", "미국령 버진 아일랜드", "미얀마", "미크로네시아", "바누아투", "바레인", "바베이도스", "바티칸", "바하마", "방글라데시", "버뮤다", "베냉", "베네수엘라", "베트남", "벨기에", "벨라루스", "벨리즈", "보스니아 헤르체고비나", "보츠와나", "볼리비아", "부룬디", "부르키나파소", "부탄", "북마리아나제도", "북마케도니아", "불가리아", "브라질", "브루나이", "사모아", "사우디아라비아", "사우스조지아 사우스샌드위치 제도", "사이프러스", "산마리노", "상투메 프린시페", "생 마르탱", "생 바르텔르미", "서사하라", "세네갈", "세르비아", "세인트루시아", "세인트빈센트그레나딘", "세인트크리스토퍼 네비스", "세인트피에르-미케롱", "세인트헬레나", "소말리아", "솔로몬 제도", "수단", "수리남", "쉐이쉘", "스리랑카", "스발바르제도-얀마웬섬", "스와질랜드", "스웨덴", "스위스", "스페인", "슬로바키아", "슬로베니아", "시에라리온", "신트마르턴", "싱가포르", "아랍에미리트 연합", "아루바", "아르메니아", "아르헨티나", "아메리칸 사모아", "아이슬란드", "아이티", "아일랜드", "아제르바이잔", "아프가니스탄", "안길라", "안도라", "알바니아", "알제리", "앙골라", "앤티가 바부다", "에리트리아", "에스토니아", "에콰도르", "엘살바도르", "영국", "영국령 버진 아일랜드", "영국령인도양식민지", "예멘", "오만", "오스트레일리아", "오스트리아", "온두라스", "올란드 제도", "왈리스-푸투나 제도", "요르단", "우간다", "우루과이", "우즈베키스탄", "우크라이나", "이디오피아", "이라크", "이스라엘", "이집트", "이탈리아", "인도", "인도네시아", "일본", "자메이카", "잠비아", "저지", "적도 기니", "중국", "중앙 아프리카 공화국", "지부티", "지브롤터", "짐바브웨", "차드", "체코", "칠레", "카메룬", "카자흐스탄", "카타르", "캄보디아", "캐나다", "케냐", "케이맨제도", "코모로스", "코소보", "코스타리카", "코코스제도", "코트디부아르", "콜롬비아", "콩고", "콩고 민주 공화국", "쿠바", "쿠웨이트", "쿡제도", "퀴라소", "크로아티아", "크리스마스섬", "키르기스스탄", "키리바시", "타지키스탄", "탄자니아", "태국", "터크스케이커스제도", "터키", "토고", "토켈라우", "통가", "투르크메니스탄", "투발루", "튀니지", "트리니다드 토바고", "파나마", "파라과이", "파키스탄", "파푸아뉴기니", "팔라우", "팔레스타인 지구", "페로제도", "페루", "포르투갈", "포클랜드 제도(말비나스 군도)", "폴란드", "푸에르토리코", "프랑스", "프랑스령 기아나", "프랑스령 폴리네시아", "피지", "핀란드", "필리핀", "핏케언섬", "대한민국", "헝가리", "홍콩"];

/***/ }),

/***/ "./pages/room/register/location.tsx":
/*!******************************************!*\
  !*** ./pages/room/register/location.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_room_register_RegisterRoomLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/room/register/RegisterRoomLocation */ "./components/room/register/RegisterRoomLocation.tsx");

var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\pages\\room\\register\\location.tsx";


/*

    숙소 등록하기 4단계 스타일링 (위치)

*/

const location = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_room_register_RegisterRoomLocation__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (location);

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
const registerRoom = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "registerRoom",
  initialState,
  reducers: {
    /*
    
        * 숙소등록하기 1단계 (건물, 숙소) Change
    
    */
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
    },

    // * 최대 숙박 인원 변경하기
    setMaximumGuestCount(state, action) {
      state.maximumGuestCount = action.payload;
      return state;
    },

    /*
    
        * 숙소등록하기 2단계 (인원, 침대, 공용공간) Change
    
    */
    // * 침실 개수 변경하기
    setBedroomCount(state, action) {
      const bedroomCount = action.payload;
      let {
        bedList
      } = state;
      state.bedroomCount = bedroomCount;

      if (bedroomCount < bedList.length) {
        //* 기존 침대 개수가 더 많으면 초과부분 잘라내기
        bedList = state.bedList.slice(0, bedroomCount);
      } else {
        //* 변경될 침대 개수가 더 많으면 나머지 침실 채우기
        for (let i = bedList.length + 1; i < bedroomCount + 1; i += 1) {
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
    setBedCount(state, action) {
      state.bedCount = action.payload;
      return state;
    },

    // * 침대 유형 개수 변경하기
    setBedTypeCount(state, action) {
      const {
        bedroomId,
        type,
        count
      } = action.payload;
      const bedroom = state.bedList[bedroomId - 1];
      const prevBeds = bedroom.beds;
      const index = prevBeds.findIndex(bed => bed.type === type);

      if (index === -1) {
        // * 타입이 없다면...
        state.bedList[bedroomId - 1].beds = [...prevBeds, {
          type,
          count
        }];
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
    setPublicBedTypeCount(state, action) {
      const {
        type,
        count
      } = action.payload;
      const index = state.publicBedList.findIndex(bed => bed.type === type);

      if (index === -1) {
        // * 타입이 없다면...
        state.publicBedList = [...state.publicBedList, {
          type,
          count
        }];
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
    setBathroomCount(state, action) {
      state.bathroomCount = action.payload;
    },

    // * 욕실 유형 변경하기.
    setBathroomType(state, action) {
      state.bathroomType = action.payload;
    },

    /*
    
        * 숙소등록하기 4단계 (위치) Change
    
    */
    // * 국가 변경하기
    setCountry(state, action) {
      state.country = action.payload;
    },

    // * 시도 변경하기
    setCity(state, action) {
      state.city = action.payload;
    },

    // * 시군구  변경하기
    setDistrict(state, action) {
      state.district = action.payload;
    },

    // * 도로명주소 변경하기
    setStreetAddress(state, action) {
      state.streetAddress = action.payload;
    },

    // * 동호수 변경하기
    setDetailAddress(state, action) {
      state.detailAddress = action.payload;
    },

    // * 우편번호 변경하기
    setPostcode(state, action) {
      state.postcode = action.payload;
    },

    // * 위도 변경하기
    setLatitude(state, action) {
      state.latitude = action.payload;
    },

    // * 경도 변경하기
    setLongitude(state, action) {
      state.longitude = action.payload;
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

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vU2VsZWN0b3IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm9vbS9yZWdpc3Rlci9SZWdpc3RlclJvb21Mb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL3N0YXRpY0RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcm9vbS9yZWdpc3Rlci9sb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb21tb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVnaXN0ZXJSb29tLnRzIiwid2VicGFjazovLy8uL3N0b3JlL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3BhbGV0dGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImdldEJ1dHRvbkNvbG9yIiwiY29sb3IiLCJjb2xvclJldmVyc2UiLCJjc3MiLCJwYWxldHRlIiwiZGFya19jeWFuIiwiYmxhY2siLCJiaXR0ZXJzd2VldCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImJ1dHRvbiIsInByb3BzIiwid2lkdGgiLCJub3JtYWxCdXR0b25TdHlsZSIsIlJlZ2lzdGVyQnV0dG9uU3R5bGUiLCJncmF5X2M0IiwiZ3JheV80OCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiaWNvbiIsIlJlYWN0IiwibWVtbyIsImRpdiIsImljb25FeGlzdCIsImdyYXlfZWIiLCJncmF5Xzc2IiwidGF3bnkiLCJ1c2VWYWxpZGF0aW9uIiwiaXNWYWxpZCIsInNub3ciLCJvcmFuZ2UiLCJJbnB1dCIsImxhYmVsIiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGVNb2RlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbW1vbiIsIm5vcm1hbFNlbGVjdG9yU3R5bGUiLCJSZWdpc3RlclNlbGVjdG9yU3R5bGUiLCJncmF5X2IwIiwidHlwZSIsInVuZGVmaW5lZCIsImdyYXlfZjciLCJncmF5X2U1IiwiZGF2aWRzb25fb3JhbmdlIiwiU2VsZWN0b3IiLCJvcHRpb25zIiwiZGlzYWJsZWRPcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJpbmNsdWRlcyIsIk5hdmlnYXRpb25JY29uIiwiUmVnaXN0ZXJSb29tTG9jYXRpb24iLCJjb3VudHJ5IiwicmVnaXN0ZXJSb29tIiwiY2l0eSIsImRpc3RyaWN0Iiwic3RyZWV0QWRkcmVzcyIsImRldGFpbEFkZHJlc3MiLCJwb3N0Y29kZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNoYW5nZUNvdW50cnkiLCJldmVudCIsInJlZ2lzdGVyUm9vbUFjdGlvbnMiLCJzZXRDb3VudHJ5IiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUNpdHkiLCJzZXRDaXR5Iiwib25DaGFuZ2VEaXN0cmljdCIsInNldERpc3RyaWN0Iiwib25DaGFuZ2VTdHJlZXRBZGRyZXNzIiwic2V0U3RyZWV0QWRkcmVzcyIsIm9uQ2hhbmdlRGV0YWlsQWRkcmVzcyIsInNldERldGFpbEFkZHJlc3MiLCJvbkNoYW5nZVBvc3Rjb2RlIiwic2V0UG9zdGNvZGUiLCJvblN1Y2Nlc3NHZXRMb2NhdGlvbiIsImNvb3JkcyIsImNvbnNvbGUiLCJsb2ciLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm9uQ2xpY2tHZXRDdXJyZW50TG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImUiLCJhbGVydCIsIm1lc3NhZ2UiLCJjb3VudHJ5TGlzdCIsIm1vbnRoTGlzdCIsImRheUxpc3QiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsIlN0cmluZyIsInllYXJMaXN0IiwibGFyZ2VCdWlsZGluZ1R5cGVMaXN0IiwiYXBhcnRtZW50QnVpbGRpbmdUeXBlTGlzdCIsImhvdXN0QnVpbGRpbmdUeXBlTGlzdCIsInNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IiwidW5pcXVlU3BhY2VCdWlsZGluZ1R5cGVMaXN0IiwiYm5iQnVpbGRpbmdUeXBlTGlzdCIsImJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdCIsImJlZHJvb21Db3VudExpc3QiLCJiZWRUeXBlcyIsImxvY2F0aW9uIiwiaW5pdGlhbFN0YXRlIiwiYXV0aE1vZGUiLCJhdXRoIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRBdXRoTW9kZSIsImFjdGlvbiIsInBheWxvYWQiLCJhdXRoQWN0aW9ucyIsImFjdGlvbnMiLCJzZXRWYWxpZGF0ZU1vZGUiLCJjb21tb25BY3Rpb25zIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1Y2VyIiwidXNlciIsImluaXRpYWxSb290U3RhdGUiLCJIWURSQVRFIiwidXNlUmVkdXhTZWxlY3RvciIsImluaXRTdG9yZSIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJkZXZUb29scyIsImdldFN0YXRlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJsYXJnZUJ1aWxkaW5nVHlwZSIsImJ1aWxkaW5nVHlwZSIsInJvb21UeXBlIiwiaXNTZXRVcEZvckd1ZXN0IiwibWF4aW11bUd1ZXN0Q291bnQiLCJiZWRyb29tQ291bnQiLCJiZWRDb3VudCIsImJlZExpc3QiLCJwdWJsaWNCZWRMaXN0IiwiYmF0aHJvb21Db3VudCIsImJhdGhyb29tVHlwZSIsInNldExhcmdlQnVpbGRpbmdUeXBlIiwic2V0QnVpbGRpbmdUeXBlIiwic2V0Um9vbVR5cGUiLCJzZXRJc1NldFVwRm9yR3Vlc3QiLCJzZXRNYXhpbXVtR3Vlc3RDb3VudCIsInNldEJlZHJvb21Db3VudCIsImxlbmd0aCIsInNsaWNlIiwicHVzaCIsImlkIiwiYmVkcyIsInNldEJlZENvdW50Iiwic2V0QmVkVHlwZUNvdW50IiwiYmVkcm9vbUlkIiwiY291bnQiLCJiZWRyb29tIiwicHJldkJlZHMiLCJmaW5kSW5kZXgiLCJiZWQiLCJzcGxpY2UiLCJzZXRQdWJsaWNCZWRUeXBlQ291bnQiLCJzZXRCYXRocm9vbUNvdW50Iiwic2V0QmF0aHJvb21UeXBlIiwic2V0TGF0aXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJlbWFpbCIsImxhc3RuYW1lIiwiZmlyc3RuYW1lIiwiYmlydGhkYXkiLCJpc0xvZ2dlZCIsInByb2ZpbGVJbWFnZSIsInNldExvZ2dlZFVzZXIiLCJpbml0VXNlciIsInVzZXJBY3Rpb25zIiwiY2FyZGluYWwiLCJhbWFyYW50aCIsIm1haW5fcGluayIsImNoYXJjb2FsIiwiZ3JheV83MSIsImdyYXlfODAiLCJncmF5Xzg1IiwiZ3JheV9hYSIsImdyYXlfYmIiLCJncmF5X2RkIiwiZ3JlZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcm9vbS9yZWdpc3Rlci9sb2NhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcm9vbS9yZWdpc3Rlci9sb2NhdGlvbi50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCwge2Nzc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWxldHRlXCJcclxuXHJcbi8vICog67KE7Yq8IOyDieyDgSDqtaztlZjquLBcclxuY29uc3QgZ2V0QnV0dG9uQ29sb3I9KGNvbG9yOnN0cmluZywgY29sb3JSZXZlcnNlOmJvb2xlYW4pPT57XHJcbiAgaWYgKGNvbG9yUmV2ZXJzZSkge1xyXG4gICAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgICAgIGNhc2UgXCJkYXJrX2N5YW5cIjpcclxuICAgICAgICAgIHJldHVybiBjc3NgXHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke3BhbGV0dGUuYmxhY2t9O1xyXG4gICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmJsYWNrfTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuICB9XHJcbiAgc3dpdGNoIChjb2xvcikge1xyXG4gICAgY2FzZSBcImRhcmtfY3lhblwiOlxyXG4gICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59O1xyXG4gICAgICBgO1xyXG4gICAgY2FzZSBcIndoaXRlXCI6XHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYml0dGVyc3dlZXR9O1xyXG4gICAgYDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuYnV0dG9uPFN5dGxlZEJ1dHRvbnByb3BzPmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGh9O1xyXG4gICR7KHByb3BzKSA9PiBnZXRCdXR0b25Db2xvcihwcm9wcy5jb2xvciB8fCBcIlwiLCBwcm9wcy5jb2xvclJldmVyc2UpfTtcclxuICBzdmcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgbm9ybWFsQnV0dG9uU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJpdHRlcnN3ZWV0fTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBSZWdpc3RlckJ1dHRvblN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAxNjFweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfYzR9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogJHtwYWxldHRlLmdyYXlfNDh9O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIFN5dGxlZEJ1dHRvbnByb3BzIHtcclxuICB3aWR0aDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIGNvbG9yUmV2ZXJzZTogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBjb2xvcj86IFwiZGFya19jeWFuXCIgfCBcIndoaXRlXCIgfCBcImJpdHRlcnN3ZWV0XCIgfCBcImFtYXJhbnRoXCI7XHJcbiAgd2lkdGg/OiBzdHJpbmc7XHJcbiAgY29sb3JSZXZlcnNlPzogYm9vbGVhbjtcclxuICBpY29uPzogSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8SVByb3BzPiA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY29sb3IsXHJcbiAgd2lkdGgsXHJcbiAgY29sb3JSZXZlcnNlID0gZmFsc2UsXHJcbiAgaWNvbixcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgey4uLnByb3BzfSBjb2xvcj17Y29sb3J9IHdpZHRoPXt3aWR0aH0gY29sb3JSZXZlcnNlPXtjb2xvclJldmVyc2V9PlxyXG4gICAgICB7aWNvbn1cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQnV0dG9uKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHtjc3N9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCIuLi8uLi9zdG9yZVwiO1xyXG5cclxudHlwZSBJbnB1dENvbnRhaW5lclByb3BzID0ge1xyXG4gIGljb25FeGlzdDogYm9vbGVhbjtcclxuICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gIHVzZVZhbGlkYXRpb246IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SW5wdXRDb250YWluZXJQcm9wcz5gXHJcbiAgbGFiZWwge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgcGFkZGluZzogJHsoeyBpY29uRXhpc3QgfSkgPT4gKGljb25FeGlzdCA/IFwiMCA0NHB4IDAgMTFweFwiIDogXCIwIDExcHhcIil9O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZWJ9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7cGFsZXR0ZS5kYXJrX2N5YW59ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMXB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gIH1cclxuICAuaW5wdXQtZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLnRhd255fVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LWljb24td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMTFweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsoe3VzZVZhbGlkYXRpb24sIGlzVmFsaWR9KSA9PlxyXG4gICAgdXNlVmFsaWRhdGlvbiAmJiBcclxuICAgICFpc1ZhbGlkICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuc25vd307XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gICR7KHt1c2VWYWxpZGF0aW9uLCBpc1ZhbGlkfSkgPT4gXHJcbiAgICB1c2VWYWxpZGF0aW9uICYmIFxyXG4gICAgaXNWYWxpZCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgfVxyXG4gICAgYH1cclxuXHJcbiAgXHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgaWNvbj86IEpTWC5FbGVtZW50OyBcclxuICBsYWJlbD86IHN0cmluZztcclxuICBpc1ZhbGlkPzogYm9vbGVhbjtcclxuICB1c2VWYWxpZGF0aW9uPzogYm9vbGVhbjtcclxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IElucHV0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgXHJcbiAgaWNvbiwgXHJcbiAgbGFiZWwsXHJcbiAgaXNWYWxpZCA9IGZhbHNlLFxyXG4gIHVzZVZhbGlkYXRpb24gPSB0cnVlLFxyXG4gIGVycm9yTWVzc2FnZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICAgIDxDb250YWluZXIgaWNvbkV4aXN0PXshIWljb259IGlzVmFsaWQ9e2lzVmFsaWR9IHVzZVZhbGlkYXRpb249e3ZhbGlkYXRlTW9kZSAmJiB1c2VWYWxpZGF0aW9ufT5cclxuICAgICAgICB7bGFiZWwgJiYgKFxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshbGFiZWwgJiYgPGlucHV0IHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAge2ljb259XHJcbiAgICAgICAge3VzZVZhbGlkYXRpb24gJiYgdmFsaWRhdGVNb2RlICYmICFpc1ZhbGlkICYmIGVycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci1tZXNzYWdlXCI+e2Vycm9yTWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKElucHV0KTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQsIHtjc3N9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFsZXR0ZVwiXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCIuLi8uLi9zdG9yZVwiXHJcbi8vaW1wb3J0IFdhcm5pbmdJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL3N2Zy9jb21tb24vd2FybmluZy5zdmdcIjtcclxuXHJcbmNvbnN0IG5vcm1hbFNlbGVjdG9yU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXlfZWJ9O1xyXG4gICAgcGFkZGluZzogMCAxMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvc3ZnL3NlbGVjdG9yL3NlbGVjdG9yX2Rvd25fYXJyb3cuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTFweCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmRhcmtfY3lhbn07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBSZWdpc3RlclNlbGVjdG9yU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5Xzc2fTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5X2IwfTtcclxuICAgIHBhZGRpbmc6IDAgMTRweCAwIDEycHg7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvc3ZnL3NlbGVjdG9yL3JlZ2lzdGVyX3NlbGVjdG9yX2Rvd25fYXJyb3cuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTFweCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBTZWxlY3RvckNvbnRhaW5lclByb3Bze1xyXG4gIGlzVmFsaWQ6Ym9vbGVhbjtcclxuICB2YWxpZGF0ZU1vZGU6Ym9vbGVhbjtcclxuICB0eXBlOlwicmVnaXN0ZXJcIiB8IFwibm9ybWFsXCI7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8U2VsZWN0b3JDb250YWluZXJQcm9wcz5gXHJcbiAgJHsoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwibm9ybWFsXCIgJiYgbm9ybWFsU2VsZWN0b3JTdHlsZX07XHJcbiAgJHsoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwicmVnaXN0ZXJcIiAmJiBSZWdpc3RlclNlbGVjdG9yU3R5bGV9O1xyXG5cclxuXHJcbiAgc2VsZWN0IHtcclxuICAgICR7KHsgdmFsaWRhdGVNb2RlLCBpc1ZhbGlkIH0pID0+IHtcclxuICAgICAgaWYgKHZhbGlkYXRlTW9kZSkge1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGNzc2BcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUudGF3bnl9O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuc25vd307XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3NzYFxyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUuZGFya19jeWFufTtcclxuICAgICAgICBgO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9fVxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvc3ZnL3NlbGVjdG9yL2Rpc2FibGVkX3JlZ2lzdGVyX3NlbGVjdG9yX2Rvd25fYXJyb3cuc3ZnXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JheV9mN307XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlLmdyYXlfZTV9O1xyXG4gICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXlfZTV9O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VsZWN0b3Itd2FybmluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHN2ZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICR7cGFsZXR0ZS5kYXZpZHNvbl9vcmFuZ2V9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5TZWxlY3RIVE1MQXR0cmlidXRlczxIVE1MU2VsZWN0RWxlbWVudD4ge1xyXG4gIGxhYmVsPzpzdHJpbmc7XHJcbiAgb3B0aW9ucz86IHN0cmluZ1tdO1xyXG4gIHZhbHVlPzpzdHJpbmc7XHJcbiAgaXNWYWxpZD8gOiBib29sZWFuO1xyXG4gIHVzZVZhbGlkYXRpb24/OmJvb2xlYW47XHJcbiAgZXJyb3JNZXNzYWdlPzpzdHJpbmc7XHJcbiAgdHlwZT86XCJyZWdpc3RlclwiIHwgXCJub3JtYWxcIjtcclxuICBkaXNhYmxlZE9wdGlvbnM/OiBzdHJpbmdbXTtcclxufVxyXG5cclxuY29uc3QgU2VsZWN0b3I6IFJlYWN0LkZDPElQcm9wcz4gPSAoe1xyXG4gIGxhYmVsLFxyXG4gIG9wdGlvbnMgPSBbXSwgXHJcbiAgaXNWYWxpZCxcclxuICB1c2VWYWxpZGF0aW9uPXRydWUsXHJcbiAgZXJyb3JNZXNzYWdlID0gXCLsmLXshZjsnYQg7ISg7YOd7ZWY7Iuc7JqULlwiLFxyXG4gIHR5cGU9XCJub3JtYWxcIixcclxuICBkaXNhYmxlZE9wdGlvbnMgPSBbXSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgdmFsaWRhdGVNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24udmFsaWRhdGVNb2RlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgXHJcbiAgICAgIGlzVmFsaWQ9eyEhaXNWYWxpZH0gXHJcbiAgICAgIHZhbGlkYXRlTW9kZT17dmFsaWRhdGVNb2RlICYmIHZhbGlkYXRlTW9kZX1cclxuICAgICAgdHlwZT17dHlwZX1cclxuICAgID5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIHtsYWJlbCAmJiA8c3Bhbj57bGFiZWx9PC9zcGFuPn1cclxuICAgICAgICA8c2VsZWN0IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICB7b3B0aW9ucz8ubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e29wdGlvbn0gZGlzYWJsZWQ9e2Rpc2FibGVkT3B0aW9ucy5pbmNsdWRlcyhvcHRpb24pfT5cclxuICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICB7dXNlVmFsaWRhdGlvbiAmJiB2YWxpZGF0ZU1vZGUgJiYgIWlzVmFsaWQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0b3Itd2FybmluZ1wiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8cD57ZXJyb3JNZXNzYWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlbGVjdG9yKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uSWNvbiBmcm9tIFwiLi4vLi4vLi4vcHVibGljL3N0YXRpYy9zdmcvcmVnaXN0ZXIvbmF2aWdhdGlvbi5zdmdcIjtcclxuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWxldHRlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbW1vbi9CdXR0b25cIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21tb24vU2VsZWN0b3JcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi9jb21tb24vSW5wdXRcIjtcclxuXHJcbmltcG9ydCB7Y291bnRyeUxpc3R9IGZyb20gXCIuLi8uLi8uLi9saWIvc3RhdGljRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvb21BY3Rpb25zIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZ2lzdGVyUm9vbVwiO1xyXG5cclxuLypcclxuXHJcbiAgICA064uo6rOEXHJcblxyXG4qL1xyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogNjJweCAzMHB4IDEwMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheV83Nn07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tc3RlcC1pbmZvIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tbG9jYXRpb24tYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAxNzZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tbG9jYXRpb24tY291bnRyeS1zZWxlY3Rvci13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMzg1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1jaXR5LWRpc3RyaWN0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1zdHJlZXQtYWRkcmVzc3tcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnJlZ2lzdGVyLXJvb20tbG9jYXRpb24tZGV0YWlsLWFkZHJlc3N7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1yb29tLWxvY2F0aW9uLXBvc3Rjb2Rle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgUmVnaXN0ZXJSb29tTG9jYXRpb246UmVhY3QuRkM9KCk9PntcclxuICAgIGNvbnN0IGNvdW50cnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5yZWdpc3RlclJvb20uY291bnRyeSk7XHJcbiAgICBjb25zdCBjaXR5ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucmVnaXN0ZXJSb29tLmNpdHkpO1xyXG4gICAgY29uc3QgZGlzdHJpY3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5yZWdpc3RlclJvb20uZGlzdHJpY3QpO1xyXG4gICAgY29uc3Qgc3RyZWV0QWRkcmVzcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnJlZ2lzdGVyUm9vbS5zdHJlZXRBZGRyZXNzKTtcclxuICAgIGNvbnN0IGRldGFpbEFkZHJlc3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5yZWdpc3RlclJvb20uZGV0YWlsQWRkcmVzcyk7XHJcbiAgICBjb25zdCBwb3N0Y29kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnJlZ2lzdGVyUm9vbS5wb3N0Y29kZSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vICog6rWt6rCAIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ291bnRyeSA9KGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pik9PntcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldENvdW50cnkoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgLy8gKiDsi5zrj4Qg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VDaXR5ID0oZXZlbnQ6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgICAgZGlzcGF0Y2gocmVnaXN0ZXJSb29tQWN0aW9ucy5zZXRDaXR5KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIC8vICog7Iuc6rWw6rWsIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlRGlzdHJpY3QgPShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldERpc3RyaWN0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIC8vICog64+E66Gc66qF7KO87IaMIOuzgOqyvSDsi5xcclxuICAgIGNvbnN0IG9uQ2hhbmdlU3RyZWV0QWRkcmVzcyA9KGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0U3RyZWV0QWRkcmVzcyhldmVudC50YXJnZXQudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICAvLyAqIOuPme2YuOyImCDrs4Dqsr0g7IucXHJcbiAgICBjb25zdCBvbkNoYW5nZURldGFpbEFkZHJlc3MgPShldmVudDpSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgICBkaXNwYXRjaChyZWdpc3RlclJvb21BY3Rpb25zLnNldERldGFpbEFkZHJlc3MoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgLy8gKiDsmrDtjrjrsojtmLgg67OA6rK9IOyLnFxyXG4gICAgY29uc3Qgb25DaGFuZ2VQb3N0Y29kZSA9KGV2ZW50OlJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHJlZ2lzdGVyUm9vbUFjdGlvbnMuc2V0UG9zdGNvZGUoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vICog7ZiE7J6sIOychOy5mCDrtojrn6zsmKTquLDsl5Ag7ISx6rO17ZaI7J2EIOuVjFxyXG4gICAgY29uc3Qgb25TdWNjZXNzR2V0TG9jYXRpb24gPSAoe2Nvb3Jkc306e2Nvb3JkczpDb29yZGluYXRlc30pPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsYXRpdHVkZVwiLCBjb29yZHMubGF0aXR1ZGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9uZ2l0dWRlXCIsIGNvb3Jkcy5sb25naXR1ZGUpO1xyXG4gICAgfTtcclxuICAgIC8vICog7ZiE7J6sIOychOy5mCDsgqzsmqkg7YG066atIOyLnFxyXG4gICAgY29uc3Qgb25DbGlja0dldEN1cnJlbnRMb2NhdGlvbj0oKT0+e1xyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ob25TdWNjZXNzR2V0TG9jYXRpb24sIChlKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgYWxlcnQoZT8ubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+7IiZ7IaM7J2YIOychOy5mOulvCDslYzroKTso7zshLjsmpQuPC9oMj5cclxuICAgICAgICAgICAgPGgzPjTri6jqs4Q8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLXN0ZXAtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAg7KCV7ZmV7ZWcIOyImeyGjCDso7zshozripQg6rKM7Iqk7Yq46rCAIOyYiOyVveydhCDsmYTro4ztlZwg7ZuE7JeQ66eMIOqzteqwnOuQqeuLiOuLpC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlaWdzdGVyLXJvb20tbG9jYXRpb24tYnV0dG9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJkYXJrX2N5YW5cIiBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclJldmVyc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17PE5hdmlnYXRpb25JY29uIC8+IH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DbGlja0dldEN1cnJlbnRMb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDtmITsnqwg7JyE7LmYIOyCrOyaqVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWxvY2F0aW9uLWNvdW50cnktc2VsZWN0b3Itd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb3VudHJ5TGlzdH0gICAvLyDqta3qsIDrpqzsiqTtirhcclxuICAgICAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCLqta3qsIAv7KeA7JetIOyEoO2DnVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRPcHRpb25zPXtbXCLqta3qsIAv7KeA7JetIOyEoO2DnVwiXX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ291bnRyeX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1yb29tLWxvY2F0aW9uLWNpdHktZGlzdHJpY3RcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyLnC/rj4RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNpdHl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi7IucL+q1sC/qtaxcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzdHJpY3R9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZURpc3RyaWN0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItcm9vbS1sb2NhdGlvbi1zdHJlZXQtYWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi64+E66Gc66qF7KO87IaMXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0cmVldEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU3RyZWV0QWRkcmVzc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tbG9jYXRpb24tZGV0YWlsLWFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuuPme2YuOyImCjshKDtg50g7IKs7ZWtKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RldGFpbEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRGV0YWlsQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICB1c2VWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXJvb20tbG9jYXRpb24tcG9zdGNvZGVcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuyasO2OuOuyiO2YuFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwb3N0Y29kZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQb3N0Y29kZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2dlb2NvZGluZy9vdmVydmlld1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJSb29tTG9jYXRpb247IiwiaW1wb3J0IHsgQmVkVHlwZSB9IGZyb20gXCIuLi90eXBlcy9yb29tXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbW9udGhMaXN0ID0gW1xyXG4gIFwiMeyblFwiLFxyXG4gIFwiMuyblFwiLFxyXG4gIFwiM+yblFwiLFxyXG4gIFwiNOyblFwiLFxyXG4gIFwiNeyblFwiLFxyXG4gIFwiNuyblFwiLFxyXG4gIFwiN+yblFwiLFxyXG4gIFwiOOyblFwiLFxyXG4gIFwiOeyblFwiLFxyXG4gIFwiMTDsm5RcIixcclxuICBcIjEx7JuUXCIsXHJcbiAgXCIxMuyblFwiXHJcbl07XHJcblxyXG4vLyAx67aA7YSwIDMx6rmM7KeAXHJcbmV4cG9ydCBjb25zdCBkYXlMaXN0ID0gQXJyYXkuZnJvbShBcnJheSgzMSksIChfLCBpKSA9PiBTdHJpbmcoaSArIDEpKTtcclxuXHJcbi8vIDIwMjDrtoDthLAgMTkwMOuFhOq5jOyngFxyXG5leHBvcnQgY29uc3QgeWVhckxpc3QgPSBBcnJheS5mcm9tKEFycmF5KDEyMSksIChfLCBpKSA9PiBTdHJpbmcoMjAyMCAtIGkpKTtcclxuXHJcbi8vICog7IiZ7IaMIO2BsCDrspTsnITsnZgg6rG066y8IOycoO2YlVxyXG5leHBvcnQgY29uc3QgbGFyZ2VCdWlsZGluZ1R5cGVMaXN0PVtcclxuICBcIuyVhO2MjO2KuFwiLFxyXG4gIFwi7KO87YOdXCIsXHJcbiAgXCLrs4TssYRcIixcclxuICBcIuuPhe2Kue2VnCDsiJnshoxcIixcclxuICBcIkImQlwiLFxyXG4gIFwi67aA7Yuw7YGs7Zi47YWUXCIsXHJcbl07XHJcblxyXG4vLyAqIOyVhO2MjO2KuCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBhcGFydG1lbnRCdWlsZGluZ1R5cGVMaXN0PVtcclxuICBcIuyVhO2MjO2KuFwiLFxyXG4gIFwi6rO164+Z7KO87YOdXCIsXHJcbiAgXCLrs4TssYRcIixcclxuICBcIu2CpOyCrCDtjIzrpbTti7Dsv6jrnbzrpbQo7L+g67CUKVwiLFxyXG4gIFwi66Gc7ZSE7Yq4XCIsXHJcbiAgXCLroIjsp4DrjZjtirhcIixcclxuXTtcclxuXHJcbi8vICog7KO87YOdIOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGhvdXN0QnVpbGRpbmdUeXBlTGlzdD1bXHJcbiAgXCLso7ztg51cIixcclxuICBcIuuwqeqwiOuhnFwiLFxyXG4gIFwi7Ya164KY66y07KeRXCIsXHJcbiAgXCLsubTsgqxcIixcclxuICBcIu2MjOultO2LsOy/qOudvOultCjsv6DrsJQpXCIsXHJcbiAgXCLsgrTroIhcIixcclxuICBcIuyghOybkOyjvO2DnVwiLFxyXG4gIFwi7YKk7YG06528642w7IqkXCIsXHJcbiAgXCLso7ztg50o6re466as7IqkKVwiLFxyXG4gIFwi64u066y07IaMKOydtO2DiOumrOyVhClcIixcclxuICBcIuuPlO2VmOyasOyKpFwiLFxyXG4gIFwi65WF7IaN7J2YIOynkVwiLFxyXG4gIFwi64aN7J6lIOyytO2XmCDsiJnrsJVcIixcclxuICBcIu2VmOyasOyKpCDrs7TtirhcIixcclxuICBcIuyYpOuRkOuniVwiLFxyXG4gIFwi65Ox64yAXCIsXHJcbiAgXCLtjKzshZgo7ZWc6rWtKVwiLFxyXG4gIFwi66eI7LCoKOyYgeq1rSwg7ZSE656R7IqkKVwiLFxyXG4gIFwi7LSI7IaM7ZiVIOyjvO2DnVwiLFxyXG4gIFwi7YOA7Jq07ZWY7Jqw7IqkXCIsXHJcbiAgXCLtirjro7DroZwo7J207YOI66as7JWEKVwiLFxyXG4gIFwi7KCA7YOdXCIsXHJcbl07XHJcblxyXG4vLyAqIOuzhOyxhCDqsbTrrLwg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlVbml0QnVpbGRpbmdUeXBlTGlzdD1bXHJcbiAgXCLqsozsiqTtirjsmqkg67OE7LGEXCIsXHJcbiAgXCLqsozsiqTtirgg7Iqk7JyE7Yq4XCIsXHJcbiAgXCLrho3snqUg7LK07ZeYIOyImeuwlVwiLFxyXG5dO1xyXG5cclxuLy8gKiDrj4XtirntlZwg7IiZ7IaMIOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IHVuaXF1ZVNwYWNlQnVpbGRpbmdUeXBlTGlzdD1bXHJcbiAgXCLtl5vqsIRcIixcclxuICBcIuuztO2KuFwiLFxyXG4gIFwi67KE7IqkXCIsXHJcbiAgXCLsuqDtlZHsubRcIixcclxuICBcIuy6oO2VkeyepVwiLFxyXG4gIFwi7ISxXCIsXHJcbiAgXCLrj5nqtbRcIixcclxuICBcIuuPlO2VmOyasOyKpFwiLFxyXG4gIFwi65WF7IaN7J2YIOynkVwiLFxyXG4gIFwi64aN7J6lIOyytO2XmCDsiJnrsJVcIixcclxuICBcIu2VmOyasOyKpCDrs7TtirhcIixcclxuICBcIuyYpOuRkOuniVwiLFxyXG4gIFwi7J206riA66OoXCIsXHJcbiAgXCLshKxcIixcclxuICBcIuuTseuMgFwiLFxyXG4gIFwi7Y6c7IWYKO2VnOq1rSlcIixcclxuICBcIuu5hO2Wieq4sFwiLFxyXG4gIFwi66eI7LCoKOyYgeq1rSwg7ZSE656R7IqkKVwiLFxyXG4gIFwi7YWQ7Yq4XCIsXHJcbiAgXCLstIjshoztmJUg7KO87YOdXCIsXHJcbiAgXCLti7DtlLxcIixcclxuICBcIuq4sOywqFwiLFxyXG4gIFwi7Yq466as7ZWY7Jqw7IqkXCIsXHJcbiAgXCLtko3ssKhcIixcclxuICBcIuycoOultO2KuFwiLFxyXG5dO1xyXG5cclxuLy8gKiBCJkIg6rG066y8IOycoO2YlVxyXG5leHBvcnQgY29uc3QgYm5iQnVpbGRpbmdUeXBlTGlzdD1bXHJcbiAgXCJCJkJcIixcclxuICBcIuy5tOyCrCDtjIzrpbTti7Dsv6jrnbzrpbQo7L+g67CUKVwiLFxyXG4gIFwi64aN7J6lIOyytO2XmCDsiJnrsJVcIixcclxuICBcIuuvvOyImCAo7YOA7J207JmEKVwiLFxyXG4gIFwi7IKw7J6lXCIsXHJcbiAgXCLro4zsubgo7J2867O4KVwiLFxyXG5dO1xyXG5cclxuLy8gKiDrtoDti7Dtgawg7Zi47YWUIOqxtOusvCDsnKDtmJVcclxuZXhwb3J0IGNvbnN0IGJvdXRpcXVlc0hvdGVsQnVpbGRpbmdUeXBlTGlzdD1bXHJcbiAgXCLrtoDti7Dtgawg7Zi47YWUXCIsXHJcbiAgXCLslYTtjIztirgg7Zi47YWUXCIsXHJcbiAgXCLtl6Trpqzti7Dsp4Ag7Zi47YWUKOyduOuPhClcIixcclxuICBcIu2YuOyKpO2FlFwiLFxyXG4gIFwi7Zi47YWUXCIsXHJcbiAgXCLsgrDsnqVcIixcclxuICBcIuumrOyhsO2KuFwiLFxyXG4gIFwi66CI7KeA642Y7IqkXCIsXHJcbiAgXCLqsJ3snpQo7KSR6rWtKVwiLFxyXG5dO1xyXG5cclxuLy8qIOy5qOyLpCDqsJzsiJhcclxuZXhwb3J0IGNvbnN0IGJlZHJvb21Db3VudExpc3QgPSBBcnJheS5mcm9tKEFycmF5KDE2KSwgKF8sIGkpID0+IGDsuajsi6QgJHtpfeqwnGApO1xyXG5cclxuLy8gKiDsuajrjIAg7Jyg7ZiVXHJcbmV4cG9ydCBjb25zdCBiZWRUeXBlczpCZWRUeXBlW109W1xyXG4gIFwi7IaM7YyMXCIsXHJcbiAgXCLsl5DslrQg66ek7Yq466at7IqkXCIsXHJcbiAgXCLsmpTsmYAg7J2067iUXCIsXHJcbiAgXCLsi7HquIBcIixcclxuICBcIuuNlOu4lFwiLFxyXG4gIFwi7YC4XCIsXHJcbiAgXCLsnbTsuLUg7Lmo64yAXCIsXHJcbiAgXCLrsJTri6Xsmqkg7JeQ7Ja066ek7Yq466at7IqkXCIsXHJcbiAgXCLsnKDslYQg7Lmo64yAXCIsXHJcbiAgXCLsnKDslYTsmqkg7Lmo64yAXCIsXHJcbiAgXCLtlbTrqLlcIixcclxuICBcIuusvOy5qOuMgFwiLFxyXG5dO1xyXG5cclxuLy8gKiDqta3qsIAg66as7Iqk7Yq4XHJcbmV4cG9ydCBjb25zdCBjb3VudHJ5TGlzdCA9IFtcclxuICBcIuqwgOuCmFwiLFxyXG4gIFwi6rCA67SJXCIsXHJcbiAgXCLqsIDsnbTslYTrgphcIixcclxuICBcIuqwkOu5hOyVhFwiLFxyXG4gIFwi6rG07KeAXCIsXHJcbiAgXCLqs7zrk6Tro6jtlIRcIixcclxuICBcIuqzvO2FjOunkOudvFwiLFxyXG4gIFwi6rSMXCIsXHJcbiAgXCLqt7jroIjrgpjri6RcIixcclxuICBcIuq3uOujqOyngOyVvFwiLFxyXG4gIFwi6re466as7IqkXCIsXHJcbiAgXCLqt7jrprDrnoDrk5xcIixcclxuICBcIuq4sOuEpOu5hOyPmFwiLFxyXG4gIFwi6riw64uIXCIsXHJcbiAgXCLquYzrvYDrsqDrpbTrjbBcIixcclxuICBcIuuCmOuvuOu5hOyVhFwiLFxyXG4gIFwi64KY7Jqw66OoXCIsXHJcbiAgXCLrgpjsnbTsp4DrpqzslYRcIixcclxuICBcIuuCqOyImOuLqFwiLFxyXG4gIFwi64Ko7JWE7ZSE66as7Lm0XCIsXHJcbiAgXCLrhKTrjZzrnoDrk5xcIixcclxuICBcIuuEpOuNnOuegOuTnOuguSDsubTrpqzruIxcIixcclxuICBcIuuEpO2MlFwiLFxyXG4gIFwi64W466W07Juo7J20XCIsXHJcbiAgXCLrhbjtjb3shKxcIixcclxuICBcIuuJtCDsubzroIjrj4Tri4jslYRcIixcclxuICBcIuuJtOyniOuenOuTnFwiLFxyXG4gIFwi64uI7Jqw7JeQXCIsXHJcbiAgXCLri4jsoJzrpbRcIixcclxuICBcIuuLiOy5tOudvOqzvFwiLFxyXG4gIFwi64yA66eMXCIsXHJcbiAgXCLrjbTrp4jtgaxcIixcclxuICBcIuuPhOuvuOuLiOy5tFwiLFxyXG4gIFwi64+E66+464uI7Lm0IOqzte2ZlOq1rVwiLFxyXG4gIFwi64+F7J28XCIsXHJcbiAgXCLrj5nti7DrqqjrpbRcIixcclxuICBcIuudvOyYpOyKpFwiLFxyXG4gIFwi65287J2067Kg66as7JWEXCIsXHJcbiAgXCLrnbztirjruYTslYRcIixcclxuICBcIuufrOyLnOyVhFwiLFxyXG4gIFwi66CI67CU64W8XCIsXHJcbiAgXCLroIjshozthqBcIixcclxuICBcIuujqOuniOuLiOyVhFwiLFxyXG4gIFwi66Op7IWI67aA66W07YGsXCIsXHJcbiAgXCLrpbTsmYTri6RcIixcclxuICBcIuumrOu5hOyVhFwiLFxyXG4gIFwi66as7Jyg64uI7JioXCIsXHJcbiAgXCLrpqztiKzslYTri4jslYRcIixcclxuICBcIuumrO2eiO2FkOyKiO2DgOyduFwiLFxyXG4gIFwi66eI64uk6rCA7Iqk7Lm066W0XCIsXHJcbiAgXCLrp4jsg6wg6rWw64+EXCIsXHJcbiAgXCLrp4jsmpTti7BcIixcclxuICBcIuuniOy5tOyYpFwiLFxyXG4gIFwi66eQ65287JyEXCIsXHJcbiAgXCLrp5DroIjsnbTsi5zslYRcIixcclxuICBcIuunkOumrFwiLFxyXG4gIFwi66eQ7Yuw64uI7YGsXCIsXHJcbiAgXCLrp6gg7ISsXCIsXHJcbiAgXCLrqZXsi5zsvZRcIixcclxuICBcIuuqqOuCmOy9lFwiLFxyXG4gIFwi66qo66Gc7L2UXCIsXHJcbiAgXCLrqqjrpqzshZTsiqRcIixcclxuICBcIuuqqOumrO2DgOuLiFwiLFxyXG4gIFwi66qo7J6g67mE7YGsXCIsXHJcbiAgXCLrqqzthYzrhKTqt7jroZxcIixcclxuICBcIuuqrO2KuOyEuOudvO2KuFwiLFxyXG4gIFwi66qw64+E67CUXCIsXHJcbiAgXCLrqrDrlJTruIxcIixcclxuICBcIuuqsO2DgFwiLFxyXG4gIFwi66q96rOoXCIsXHJcbiAgXCLrr7jqta1cIixcclxuICBcIuuvuOq1reuguSDrsoTsp4Qg7JWE7J28656c65OcXCIsXHJcbiAgXCLrr7jsloDrp4hcIixcclxuICBcIuuvuO2BrOuhnOuEpOyLnOyVhFwiLFxyXG4gIFwi67CU64iE7JWE7YisXCIsXHJcbiAgXCLrsJTroIjsnbhcIixcclxuICBcIuuwlOuyoOydtOuPhOyKpFwiLFxyXG4gIFwi67CU7Yuw7Lm4XCIsXHJcbiAgXCLrsJTtlZjrp4hcIixcclxuICBcIuuwqeq4gOudvOuNsOyLnFwiLFxyXG4gIFwi67KE666k64ukXCIsXHJcbiAgXCLrsqDrg4lcIixcclxuICBcIuuyoOuEpOyImOyXmOudvFwiLFxyXG4gIFwi67Kg7Yq464KoXCIsXHJcbiAgXCLrsqjquLDsl5BcIixcclxuICBcIuuyqOudvOujqOyKpFwiLFxyXG4gIFwi67Ko66as7KaIXCIsXHJcbiAgXCLrs7TsiqTri4jslYQg7Zek66W07LK06rOg67mE64KYXCIsXHJcbiAgXCLrs7TsuKDsmYDrgphcIixcclxuICBcIuuzvOumrOu5hOyVhFwiLFxyXG4gIFwi67aA66Os65SUXCIsXHJcbiAgXCLrtoDrpbTtgqTrgpjtjIzshoxcIixcclxuICBcIuu2gO2DhFwiLFxyXG4gIFwi67aB66eI66as7JWE64KY7KCc64+EXCIsXHJcbiAgXCLrtoHrp4jsvIDrj4Tri4jslYRcIixcclxuICBcIuu2iOqwgOumrOyVhFwiLFxyXG4gIFwi67iM65287KeIXCIsXHJcbiAgXCLruIzro6jrgpjsnbRcIixcclxuICBcIuyCrOuqqOyVhFwiLFxyXG4gIFwi7IKs7Jqw65SU7JWE652867mE7JWEXCIsXHJcbiAgXCLsgqzsmrDsiqTsobDsp4DslYQg7IKs7Jqw7Iqk7IOM65Oc7JyE7LmYIOygnOuPhFwiLFxyXG4gIFwi7IKs7J207ZSE65+s7IqkXCIsXHJcbiAgXCLsgrDrp4jrpqzrhbhcIixcclxuICBcIuyDge2IrOuplCDtlITrprDsi5ztjphcIixcclxuICBcIuyDnSDrp4jrpbTtg7FcIixcclxuICBcIuyDnSDrsJTrpbTthZTrpbTrr7hcIixcclxuICBcIuyEnOyCrO2VmOudvFwiLFxyXG4gIFwi7IS464Sk6rCIXCIsXHJcbiAgXCLshLjrpbTruYTslYRcIixcclxuICBcIuyEuOyduO2KuOujqOyLnOyVhFwiLFxyXG4gIFwi7IS47J247Yq467mI7IS87Yq46re466CI64KY65SYXCIsXHJcbiAgXCLshLjsnbjtirjtgazrpqzsiqTthqDtjbwg64Sk67mE7IqkXCIsXHJcbiAgXCLshLjsnbjtirjtlLzsl5DrpbQt66+47LyA66GxXCIsXHJcbiAgXCLshLjsnbjtirjtl6zroIjrgphcIixcclxuICBcIuyGjOunkOumrOyVhFwiLFxyXG4gIFwi7IaU66Gc66qsIOygnOuPhFwiLFxyXG4gIFwi7IiY64uoXCIsXHJcbiAgXCLsiJjrpqzrgqhcIixcclxuICBcIuyJkOydtOyJmFwiLFxyXG4gIFwi7Iqk66as656R7Lm0XCIsXHJcbiAgXCLsiqTrsJzrsJTrpbTsoJzrj4Qt7JaA66eI7Jus7ISsXCIsXHJcbiAgXCLsiqTsmYDsp4jrnpzrk5xcIixcclxuICBcIuyKpOybqOuNtFwiLFxyXG4gIFwi7Iqk7JyE7IqkXCIsXHJcbiAgXCLsiqTtjpjsnbhcIixcclxuICBcIuyKrOuhnOuwlO2CpOyVhFwiLFxyXG4gIFwi7Iqs66Gc67Kg64uI7JWEXCIsXHJcbiAgXCLsi5zsl5DrnbzrpqzsmKhcIixcclxuICBcIuyLoO2KuOuniOultO2EtFwiLFxyXG4gIFwi7Iux6rCA7Y+s66W0XCIsXHJcbiAgXCLslYTrno3sl5Drr7jrpqztirgg7Jew7ZWpXCIsXHJcbiAgXCLslYTro6jrsJRcIixcclxuICBcIuyVhOultOuplOuLiOyVhFwiLFxyXG4gIFwi7JWE66W07Zeo7Yuw64KYXCIsXHJcbiAgXCLslYTrqZTrpqzsubgg7IKs66qo7JWEXCIsXHJcbiAgXCLslYTsnbTsiqzrnoDrk5xcIixcclxuICBcIuyVhOydtO2LsFwiLFxyXG4gIFwi7JWE7J28656c65OcXCIsXHJcbiAgXCLslYTsoJzrpbTrsJTsnbTsnpRcIixcclxuICBcIuyVhO2UhOqwgOuLiOyKpO2DhFwiLFxyXG4gIFwi7JWI6ri46528XCIsXHJcbiAgXCLslYjrj4TrnbxcIixcclxuICBcIuyVjOuwlOuLiOyVhFwiLFxyXG4gIFwi7JWM7KCc66asXCIsXHJcbiAgXCLslZnqs6jrnbxcIixcclxuICBcIuyVpO2LsOqwgCDrsJTrtoDri6RcIixcclxuICBcIuyXkOumrO2KuOumrOyVhFwiLFxyXG4gIFwi7JeQ7Iqk7Yag64uI7JWEXCIsXHJcbiAgXCLsl5DsvbDrj4TrpbRcIixcclxuICBcIuyXmOyCtOuwlOuPhOultFwiLFxyXG4gIFwi7JiB6rWtXCIsXHJcbiAgXCLsmIHqta3roLkg67KE7KeEIOyVhOydvOuenOuTnFwiLFxyXG4gIFwi7JiB6rWt66C57J2464+E7JaR7Iud66+87KeAXCIsXHJcbiAgXCLsmIjrqZhcIixcclxuICBcIuyYpOunjFwiLFxyXG4gIFwi7Jik7Iqk7Yq466CI7J2866as7JWEXCIsXHJcbiAgXCLsmKTsiqTtirjrpqzslYRcIixcclxuICBcIuyYqOuRkOudvOyKpFwiLFxyXG4gIFwi7Jis656A65OcIOygnOuPhFwiLFxyXG4gIFwi7JmI66as7IqkLe2RuO2IrOuCmCDsoJzrj4RcIixcclxuICBcIuyalOultOuLqFwiLFxyXG4gIFwi7Jqw6rCE64ukXCIsXHJcbiAgXCLsmrDro6jqs7zsnbRcIixcclxuICBcIuyasOymiOuyoO2CpOyKpO2DhFwiLFxyXG4gIFwi7Jqw7YGs65287J2064KYXCIsXHJcbiAgXCLsnbTrlJTsmKTtlLzslYRcIixcclxuICBcIuydtOudvO2BrFwiLFxyXG4gIFwi7J207Iqk65287JeYXCIsXHJcbiAgXCLsnbTsp5HtirhcIixcclxuICBcIuydtO2DiOumrOyVhFwiLFxyXG4gIFwi7J2464+EXCIsXHJcbiAgXCLsnbjrj4TrhKTsi5zslYRcIixcclxuICBcIuydvOuzuFwiLFxyXG4gIFwi7J6Q66mU7J207Lm0XCIsXHJcbiAgXCLsnqDruYTslYRcIixcclxuICBcIuyggOyngFwiLFxyXG4gIFwi7KCB64+EIOq4sOuLiFwiLFxyXG4gIFwi7KSR6rWtXCIsXHJcbiAgXCLspJHslZkg7JWE7ZSE66as7Lm0IOqzte2ZlOq1rVwiLFxyXG4gIFwi7KeA67aA7YuwXCIsXHJcbiAgXCLsp4DruIzroaTthLBcIixcclxuICBcIuynkOuwlOu4jOybqFwiLFxyXG4gIFwi7LCo65OcXCIsXHJcbiAgXCLssrTsvZRcIixcclxuICBcIuy5oOugiFwiLFxyXG4gIFwi7Lm066mU66OsXCIsXHJcbiAgXCLsubTsnpDtnZDsiqTtg4RcIixcclxuICBcIuy5tO2DgOultFwiLFxyXG4gIFwi7LqE67O065SU7JWEXCIsXHJcbiAgXCLsupDrgpjri6RcIixcclxuICBcIuy8gOuDkFwiLFxyXG4gIFwi7LyA7J2066eo7KCc64+EXCIsXHJcbiAgXCLsvZTrqqjroZzsiqRcIixcclxuICBcIuy9lOyGjOuztFwiLFxyXG4gIFwi7L2U7Iqk7YOA66as7Lm0XCIsXHJcbiAgXCLsvZTsvZTsiqTsoJzrj4RcIixcclxuICBcIuy9lO2KuOuUlOu2gOyVhOultFwiLFxyXG4gIFwi7L2c66Gs67mE7JWEXCIsXHJcbiAgXCLsvanqs6BcIixcclxuICBcIuy9qeqzoCDrr7zso7wg6rO17ZmU6rWtXCIsXHJcbiAgXCLsv6DrsJRcIixcclxuICBcIuy/oOybqOydtO2KuFwiLFxyXG4gIFwi7L+h7KCc64+EXCIsXHJcbiAgXCLtgLTrnbzshoxcIixcclxuICBcIu2BrOuhnOyVhO2LsOyVhFwiLFxyXG4gIFwi7YGs66as7Iqk66eI7Iqk7ISsXCIsXHJcbiAgXCLtgqTrpbTquLDsiqTsiqTtg4RcIixcclxuICBcIu2CpOumrOuwlOyLnFwiLFxyXG4gIFwi7YOA7KeA7YKk7Iqk7YOEXCIsXHJcbiAgXCLtg4TsnpDri4jslYRcIixcclxuICBcIu2DnOq1rVwiLFxyXG4gIFwi7YSw7YGs7Iqk7LyA7J207Luk7Iqk7KCc64+EXCIsXHJcbiAgXCLthLDtgqRcIixcclxuICBcIu2GoOqzoFwiLFxyXG4gIFwi7Yag7LyI65287JqwXCIsXHJcbiAgXCLthrXqsIBcIixcclxuICBcIu2IrOultO2BrOuplOuLiOyKpO2DhFwiLFxyXG4gIFwi7Yis67Cc66OoXCIsXHJcbiAgXCLtioDri4jsp4BcIixcclxuICBcIu2KuOumrOuLiOuLpOuTnCDthqDrsJTqs6BcIixcclxuICBcIu2MjOuCmOuniFwiLFxyXG4gIFwi7YyM65286rO87J20XCIsXHJcbiAgXCLtjIztgqTsiqTtg4RcIixcclxuICBcIu2MjO2RuOyVhOuJtOq4sOuLiFwiLFxyXG4gIFwi7YyU65287JqwXCIsXHJcbiAgXCLtjJTroIjsiqTtg4Dsnbgg7KeA6rWsXCIsXHJcbiAgXCLtjpjroZzsoJzrj4RcIixcclxuICBcIu2OmOujqFwiLFxyXG4gIFwi7Y+s66W07Yis6rCIXCIsXHJcbiAgXCLtj6ztgbTrnpzrk5wg7KCc64+EKOunkOu5hOuCmOyKpCDqtbDrj4QpXCIsXHJcbiAgXCLtj7TrnoDrk5xcIixcclxuICBcIu2RuOyXkOultO2GoOumrOy9lFwiLFxyXG4gIFwi7ZSE656R7IqkXCIsXHJcbiAgXCLtlITrnpHsiqTroLkg6riw7JWE64KYXCIsXHJcbiAgXCLtlITrnpHsiqTroLkg7Y+066as64Sk7Iuc7JWEXCIsXHJcbiAgXCLtlLzsp4BcIixcclxuICBcIu2VgOuegOuTnFwiLFxyXG4gIFwi7ZWE66as7ZWAXCIsXHJcbiAgXCLtlY/svIDslrjshKxcIixcclxuICBcIuuMgO2VnOuvvOq1rVwiLFxyXG4gIFwi7Zed6rCA66asXCIsXHJcbiAgXCLtmY3svalcIixcclxuXTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBSZWdpc3RlclJvb21Mb2NhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9yb29tL3JlZ2lzdGVyL1JlZ2lzdGVyUm9vbUxvY2F0aW9uXCI7XHJcbi8qXHJcblxyXG4gICAg7IiZ7IaMIOuTseuhne2VmOq4sCA064uo6rOEIOyKpO2DgOydvOungSAo7JyE7LmYKVxyXG5cclxuKi9cclxuY29uc3QgbG9jYXRpb246TmV4dFBhZ2U9KCk9PntcclxuICAgIHJldHVybiA8UmVnaXN0ZXJSb29tTG9jYXRpb24gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvbjsiLCIvLyDroZzqt7jsnbgg66qo64usIOunjOuTpOq4sFxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuXHJcbi8vIOy0iOq4sCDsg4Htg5xcclxuY29uc3QgaW5pdGlhbFN0YXRlOiB7YXV0aE1vZGU6IFwic2lnbnVwXCIgfCBcImxvZ2luXCJ9ID0ge1xyXG4gIGF1dGhNb2RlOiBcInNpZ251cFwiLFxyXG59O1xyXG5cclxuY29uc3QgYXV0aCA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIOyduOymnSDtjJ3sl4Ug67OA6rK97ZWY6riwXHJcbiAgICBzZXRBdXRoTW9kZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFwic2lnbnVwXCIgfCBcImxvZ2luXCI+KSB7XHJcbiAgICAgIHN0YXRlLmF1dGhNb2RlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhBY3Rpb25zID0gey4uLmF1dGguYWN0aW9uc307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoOyIsImltcG9ydCB7Y3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcbmltcG9ydCB7IENvbW1vblN0YXRlfSBmcm9tIFwiLi4vdHlwZXMvcmVkdXhTdGF0ZVwiXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IENvbW1vblN0YXRlID0ge1xyXG4gIHZhbGlkYXRlTW9kZTogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBjb21tb24gPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJjb21tb25cIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIHZhbGlkYXRlTW9kZSDrs4Dqsr3tlZjquLBcclxuICAgIHNldFZhbGlkYXRlTW9kZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KXtcclxuICAgICAgc3RhdGUudmFsaWRhdGVNb2RlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vbkFjdGlvbnMgPSB7Li4uY29tbW9uLmFjdGlvbnN9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsImltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIsIE1ha2VTdG9yZSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5pbXBvcnQge1xyXG4gIFR5cGVkVXNlU2VsZWN0b3JIb29rLFxyXG4gIHVzZVNlbGVjdG9yIGFzIHVzZVJlZHV4U2VsZWN0b3JcclxufSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCJcclxuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IGF1dGggZnJvbSBcIi4vYXV0aFwiO1xyXG5pbXBvcnQgcmVnaXN0ZXJSb29tIGZyb20gXCIuL3JlZ2lzdGVyUm9vbVwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGNvbW1vbjogY29tbW9uLnJlZHVjZXIsXHJcbiAgdXNlcjogdXNlci5yZWR1Y2VyLFxyXG4gIGF1dGg6IGF1dGgucmVkdWNlcixcclxuICByZWdpc3RlclJvb206IHJlZ2lzdGVyUm9vbS5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vIOyKpO2GoOyWtCDtg4DsnoVcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxubGV0IGluaXRpYWxSb290U3RhdGU6IFJvb3RTdGF0ZTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuICAgIGlmIChzdGF0ZSA9PT0gaW5pdGlhbFJvb3RTdGF0ZSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuICByZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbn07XHJcblxyXG4vLyDtg4DsnoUg7KeA7JuQ65CY64qUIOy7pOyKpO2FgCB1c2VTZWxlY3RvciDrp4zrk6TquLBcclxuZXhwb3J0IGNvbnN0IHVzZVNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlUmVkdXhTZWxlY3RvcjtcclxuXHJcbmNvbnN0IGluaXRTdG9yZTogTWFrZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcixcclxuICAgIGRldlRvb2xzOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGluaXRpYWxSb290U3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpO1xyXG5cclxuIiwiaW1wb3J0IHtjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHNlY29uZGFyeVVuaXRCdWlsZGluZ1R5cGVMaXN0IH0gZnJvbSBcIi4uL2xpYi9zdGF0aWNEYXRhXCI7XHJcbmltcG9ydCB7QmVkVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Jvb21cIjtcclxuXHJcbnR5cGUgUmVnaXN0ZXJSb29tU3RhdGUgPSB7XHJcbiAgICAvLyAqIOyImeyGjOuTseuhne2VmOq4sCAx64uo6rOEICjqsbTrrLwsIOyImeyGjCkg66as642V7IqkIOyEpOyglVxyXG4gICAgbGFyZ2VCdWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBidWlsZGluZ1R5cGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICByb29tVHlwZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIGlzU2V0VXBGb3JHdWVzdDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDLri6jqs4QgKOyduOybkCwg7Lmo64yALCDqs7Xsmqnqs7XqsIQpIOumrOuNleyKpCDshKTsoJVcclxuICAgIG1heGltdW1HdWVzdENvdW50Om51bWJlcjtcclxuICAgIGJlZHJvb21Db3VudDpudW1iZXI7XHJcbiAgICBiZWRDb3VudDpudW1iZXI7XHJcbiAgICBiZWRMaXN0OntpZDpudW1iZXI7IGJlZHM6e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfVtdfVtdO1xyXG4gICAgcHVibGljQmVkTGlzdDp7dHlwZTpCZWRUeXBlOyBjb3VudDpudW1iZXJ9W107XHJcbiAgICBcclxuICAgIC8vICog7IiZ7IaM65Ox66Gd7ZWY6riwIDPri6jqs4QgKOyaleyLpCkg66as642V7IqkIOyEpOyglVxyXG4gICAgYmF0aHJvb21Db3VudDpudW1iZXI7XHJcbiAgICBiYXRocm9vbVR5cGU6IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIiB8IG51bGw7XHJcblxyXG4gICAgLy8gKiDsiJnshozrk7HroZ3tlZjquLAgNOuLqOqzhCAo7JyE7LmYKSDrpqzrjZXsiqQg7ISk7KCVXHJcbiAgICBjb3VudHJ5OnN0cmluZztcclxuICAgIGNpdHk6c3RyaW5nO1xyXG4gICAgZGlzdHJpY3Q6c3RyaW5nO1xyXG4gICAgc3RyZWV0QWRkcmVzczpzdHJpbmc7XHJcbiAgICBkZXRhaWxBZGRyZXNzOnN0cmluZztcclxuICAgIHBvc3Rjb2RlOnN0cmluZztcclxuICAgIGxhdGl0dWRlOm51bWJlcjtcclxuICAgIGxvbmdpdHVkZTpudW1iZXI7XHJcbn07XHJcblxyXG4vLyAqIOy0iOq4sOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlZ2lzdGVyUm9vbVN0YXRlID0ge1xyXG4gICAgLy9cclxuICAgIGxhcmdlQnVpbGRpbmdUeXBlOiBudWxsLCAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVIO2BsCDrspTso7xcclxuICAgIGJ1aWxkaW5nVHlwZTpudWxsLCAgICAgICAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVXHJcbiAgICByb29tVHlwZTogbnVsbCwgICAgICAgICAgICAgICAgIC8vICog7IiZ7IaMIOycoO2YlVxyXG4gICAgaXNTZXRVcEZvckd1ZXN0Om51bGwsICAgICAgICAgICAvLyAqIOqyjOyKpO2KuOunjOydhCDsnITtlbQg66eM65Ok7Ja07KeEIOyImeyGjOyduOqwgD9cclxuICAgIC8vXHJcbiAgICBtYXhpbXVtR3Vlc3RDb3VudDoxLCAgICAgICAgICAgIC8vICog7LWc64yAIOyImeuwlSDsnbjsm5BcclxuICAgIGJlZHJvb21Db3VudDowLCAgICAgICAgICAgICAgICAgLy8gKiDsuajsi6Qg6rCc7IiYXHJcbiAgICBiZWRDb3VudDoxLCAgICAgICAgICAgICAgICAgICAgIC8vICog7Lmo64yAIOqwnOyImFxyXG4gICAgYmVkTGlzdDpbXSwgICAgICAgICAgICAgICAgICAgICAvLyAqIOy5qOuMgCDsnKDtmJVcclxuICAgIHB1YmxpY0JlZExpc3Q6W10sICAgICAgICAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlVxyXG4gICAgLy9cclxuICAgIGJhdGhyb29tQ291bnQ6IDEsICAgICAgICAgICAgICAgLy8gKiDsmpXsi6Qg6rCc7IiYXHJcbiAgICBiYXRocm9vbVR5cGU6IG51bGwsICAgICAgICAgICAgIC8vICog7JqV7IukIOycoO2YlVxyXG4gICAgLy9cclxuICAgIGNvdW50cnk6XCJcIiwgICAgICAgICAgICAgICAgICAgICAvLyAqIOq1reqwgC/sp4Dsl61cclxuICAgIGNpdHk6XCJcIiwgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIOyLnC/rj4RcclxuICAgIGRpc3RyaWN0OlwiXCIsICAgICAgICAgICAgICAgICAgICAvLyAqIOyLnC/qtbAv6rWsXHJcbiAgICBzdHJlZXRBZGRyZXNzOlwiXCIsICAgICAgICAgICAgICAgLy8gKiDrj4TroZzrqoXso7zshoxcclxuICAgIGRldGFpbEFkZHJlc3M6XCJcIiwgICAgICAgICAgICAgICAvLyAqIOuPme2YuOyImFxyXG4gICAgcG9zdGNvZGU6XCJcIiwgICAgICAgICAgICAgICAgICAgIC8vICog7Jqw7Y6467KI7Zi4XHJcbiAgICBsYXRpdHVkZTowLCAgICAgICAgICAgICAgICAgICAgIC8vICog7JyE64+EXHJcbiAgICBsb25naXR1ZGU6MCwgICAgICAgICAgICAgICAgICAgIC8vICog6rK964+EXHJcbn07XHJcblxyXG5jb25zdCByZWdpc3RlclJvb20gPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOlwicmVnaXN0ZXJSb29tXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczp7XHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAgICAgKiDsiJnshozrk7HroZ3tlZjquLAgMeuLqOqzhCAo6rG066y8LCDsiJnshowpIENoYW5nZVxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8g7YGwIOqxtOusvCDsnKDtmJUg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TGFyZ2VCdWlsZGluZ1R5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICBpZihhY3Rpb24ucGF5bG9hZCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXJnZUJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGF0ZS5sYXJnZUJ1aWxkaW5nVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDqsbTrrLwg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRCdWlsZGluZ1R5cGUoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPHN0cmluZz4pe1xyXG4gICAgICAgICAgICBpZihhY3Rpb24ucGF5bG9hZD09PVwiXCIpe1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYnVpbGRpbmdUeXBlPW51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuYnVpbGRpbmdUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7IiZ7IaMIOycoO2YlSDrs4Dqsr3tlZjquLAuXHJcbiAgICAgICAgc2V0Um9vbVR5cGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxcImVudGlyZVwiIHwgXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiPikge1xyXG4gICAgICAgICAgICBzdGF0ZS5yb29tVHlwZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqICfqsozsiqTtirjsmqkg7IiZ7IaM7J247KeAJyDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRJc1NldFVwRm9yR3Vlc3Qoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KXtcclxuICAgICAgICAgICAgc3RhdGUuaXNTZXRVcEZvckd1ZXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vICog7LWc64yAIOyImeuwlSDsnbjsm5Ag67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TWF4aW11bUd1ZXN0Q291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPG51bWJlcj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5tYXhpbXVtR3Vlc3RDb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCAy64uo6rOEICjsnbjsm5AsIOy5qOuMgCwg6rO17Jqp6rO16rCEKSBDaGFuZ2VcclxuICAgICAgICBcclxuICAgICAgICAqL1xyXG4gICAgICAgIC8vICog7Lmo7IukIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRyb29tQ291bnQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb21Db3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBsZXQgeyBiZWRMaXN0IH0gPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZHJvb21Db3VudCA9IGJlZHJvb21Db3VudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChiZWRyb29tQ291bnQgPCBiZWRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8qIOq4sOyhtCDsuajrjIAg6rCc7IiY6rCAIOuNlCDrp47snLzrqbQg7LSI6rO867aA67aEIOyemOudvOuCtOq4sFxyXG4gICAgICAgICAgICAgICAgYmVkTGlzdCA9IHN0YXRlLmJlZExpc3Quc2xpY2UoMCwgYmVkcm9vbUNvdW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vKiDrs4Dqsr3rkKAg7Lmo64yAIOqwnOyImOqwgCDrjZQg66eO7Jy866m0IOuCmOuouOyngCDsuajsi6Qg7LGE7Jqw6riwXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYmVkTGlzdC5sZW5ndGggKyAxOyBpIDwgYmVkcm9vbUNvdW50ICsgMTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBiZWRMaXN0LnB1c2goeyBpZDogaSwgYmVkczogW10gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmJlZExpc3QgPSBiZWRMaXN0O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAqIOy1nOuMgCDsuajrjIAg6rCc7IiYIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldEJlZENvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUuYmVkQ291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsuajrjIAg7Jyg7ZiVIOqwnOyImCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRCZWRUeXBlQ291bnQoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPHtiZWRyb29tSWQ6bnVtYmVyOyB0eXBlOkJlZFR5cGU7IGNvdW50Om51bWJlcn0+KXtcclxuICAgICAgICAgICAgY29uc3Qge2JlZHJvb21JZCwgdHlwZSwgY291bnR9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb20gPSBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2QmVkcyA9IGJlZHJvb20uYmVkcztcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2QmVkcy5maW5kSW5kZXgoKGJlZCkgPT4gYmVkLnR5cGUgPT09IHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcclxuICAgICAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyXhuuLpOuptC4uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmVkTGlzdFtiZWRyb29tSWQgLSAxXS5iZWRzID0gWy4uLnByZXZCZWRzLCB7dHlwZSwgY291bnR9XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7KG07J6sIO2VnOuLpOuptC4uLlxyXG4gICAgICAgICAgICBpZihjb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWRMaXN0W2JlZHJvb21JZCAtIDFdLmJlZHNbaW5kZXhdLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDqs7Xsmqnqs7XqsIQg7Lmo64yAIOycoO2YlSDqsJzsiJgg67OA6rK97ZWY6riwLlxyXG4gICAgICAgIHNldFB1YmxpY0JlZFR5cGVDb3VudChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248e3R5cGU6QmVkVHlwZTsgY291bnQ6bnVtYmVyfT4pe1xyXG4gICAgICAgICAgICBjb25zdCB7dHlwZSwgY291bnR9ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleD1zdGF0ZS5wdWJsaWNCZWRMaXN0LmZpbmRJbmRleCgoYmVkKT0+YmVkLnR5cGU9PT10eXBlKTtcclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKXtcclxuICAgICAgICAgICAgICAgIC8vICog7YOA7J6F7J20IOyXhuuLpOuptC4uLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdCA9IFsuLi5zdGF0ZS5wdWJsaWNCZWRMaXN0LCB7dHlwZSwgY291bnR9XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gKiDtg4DsnoXsnbQg7KG07J6sIO2VnOuLpOuptC4uLlxyXG4gICAgICAgICAgICBpZihjb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wdWJsaWNCZWRMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucHVibGljQmVkTGlzdFtpbmRleF0uY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAqIOyImeyGjOuTseuhne2VmOq4sCAz64uo6rOEICjsmpXsi6QpIENoYW5nZVxyXG4gICAgICAgIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy8gKiDsmpXsi6Qg6rCc7IiYIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRCYXRocm9vbUNvdW50KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxudW1iZXI+KXtcclxuICAgICAgICAgICAgc3RhdGUuYmF0aHJvb21Db3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gKiDsmpXsi6Qg7Jyg7ZiVIOuzgOqyve2VmOq4sC5cclxuICAgICAgICBzZXRCYXRocm9vbVR5cGUoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIj4pe1xyXG4gICAgICAgICAgICBzdGF0ZS5iYXRocm9vbVR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICog7IiZ7IaM65Ox66Gd7ZWY6riwIDTri6jqs4QgKOychOy5mCkgQ2hhbmdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgKi9cclxuICAgICAgIC8vICog6rWt6rCAIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldENvdW50cnkoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvdW50cnkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDsi5zrj4Qg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0Q2l0eShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuY2l0eSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOyLnOq1sOq1rCAg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0RGlzdHJpY3Qoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmRpc3RyaWN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog64+E66Gc66qF7KO87IaMIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldFN0cmVldEFkZHJlc3Moc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0cmVldEFkZHJlc3MgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDrj5ntmLjsiJgg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0RGV0YWlsQWRkcmVzcyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUuZGV0YWlsQWRkcmVzcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAvLyAqIOyasO2OuOuyiO2YuCDrs4Dqsr3tlZjquLBcclxuICAgICAgICBzZXRQb3N0Y29kZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgc3RhdGUucG9zdGNvZGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgLy8gKiDsnITrj4Qg67OA6rK97ZWY6riwXHJcbiAgICAgICAgc2V0TGF0aXR1ZGUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhdGl0dWRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgIC8vICog6rK964+EIOuzgOqyve2VmOq4sFxyXG4gICAgICAgIHNldExvbmdpdHVkZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgc3RhdGUubG9uZ2l0dWRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm9vbUFjdGlvbnM9ey4uLnJlZ2lzdGVyUm9vbS5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyUm9vbTsiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuaW1wb3J0IHtVc2VyVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXJcIlxyXG5pbXBvcnQge1VzZXJTdGF0ZX0gZnJvbSBcIi4uL3R5cGVzL3JlZHV4U3RhdGVcIlxyXG5cclxuLy8g7LSI6riwIOyDge2DnFxyXG5jb25zdCBpbml0aWFsU3RhdGU6VXNlclN0YXRlID0ge1xyXG4gIGlkOjAsXHJcbiAgZW1haWw6IFwiXCIsXHJcbiAgbGFzdG5hbWU6IFwiXCIsXHJcbiAgZmlyc3RuYW1lOiBcIlwiLFxyXG4gIGJpcnRoZGF5OiBcIlwiLFxyXG4gIGlzTG9nZ2VkOiBmYWxzZSxcclxuICBwcm9maWxlSW1hZ2U6IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCB1c2VyID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8g66Gc6re47J247ZWcIOycoOyggCDrs4Dqsr3tlZjquLBcclxuICAgIHNldExvZ2dlZFVzZXIoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxVc2VyVHlwZT4pIHtcclxuICAgICAgc3RhdGUgPSB7Li4uYWN0aW9uLnBheWxvYWQsIGlzTG9nZ2VkOiB0cnVlfTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfSxcclxuICAgIC8vIOycoOyggCDstIjquLDtmZQg7ZWY6riwXHJcbiAgICBpbml0VXNlcihzdGF0ZSkge1xyXG4gICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckFjdGlvbnMgPSB7Li4udXNlci5hY3Rpb25zfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXI7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY2FyZGluYWw6IFwiI2E0MTg1MFwiLFxyXG4gICAgZGF2aWRzb25fb3JhbmdlOiBcIiNjMTM1MTVcIixcclxuICAgIHRhd255OiBcIiNkOTM5MDBcIixcclxuICAgIGFtYXJhbnRoOiBcIiNFNTFFNTNcIixcclxuICAgIG9yYW5nZTogXCIjZmM2NDJkXCIsXHJcbiAgICBtYWluX3Bpbms6IFwiI0ZGMzg1Q1wiLFxyXG4gICAgYml0dGVyc3dlZXQ6IFwiI2ZmNWE1ZlwiLFxyXG4gICAgYmxhY2s6IFwiIzIyMjIyMlwiLFxyXG4gICAgY2hhcmNvYWw6IFwiIzQ4NDg0OFwiLFxyXG4gICAgc25vdzogXCIjRkZGOEY2XCIsXHJcbiAgICBncmF5XzQ4OiBcIiM0ODQ4NDhcIixcclxuICAgIGdyYXlfNzE6IFwiIzcxNzE3MVwiLFxyXG4gICAgZ3JheV83NjogXCIjNzY3Njc2XCIsXHJcbiAgICBncmF5XzgwOiBcIiM4MDgwODBcIixcclxuICAgIGdyYXlfODU6IFwiIzg1ODU4NVwiLFxyXG4gICAgZ3JheV9hYTogXCIjYWFhXCIsXHJcbiAgICBncmF5X2JiOiBcIiNiYmJcIixcclxuICAgIGdyYXlfYjA6IFwiI2IwYjBiMFwiLFxyXG4gICAgZ3JheV9jNDogXCIjYzRjNGM0XCIsXHJcbiAgICBncmF5X2RkOiBcIiNkZGRcIixcclxuICAgIGdyYXlfZWI6IFwiI2ViZWJlYlwiLFxyXG4gICAgZ3JheV9lNTogXCIjZTVlNWU1XCIsXHJcbiAgICBncmF5X2Y3OiBcIiNmN2Y3ZjdcIixcclxuICAgIGRhcmtfY3lhbjogXCIjMDA4NDg5XCIsXHJcbiAgICBncmVlbjogXCIjMDA4QTA1XCIsXHJcbiAgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==