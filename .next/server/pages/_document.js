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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head-manager-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/experimental-script.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/client/experimental-script.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'preload'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'defer'
  } = props;

  if (strategy === 'defer') {
    loadScript(props);
  } else if (strategy === 'lazy') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'defer',
    onError,
    preload = false
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "children", "strategy", "onError", "preload"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'defer') {
      loadScript(props);
    } else if (strategy === 'lazy') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (true) {
    return null;
  }

  if (strategy === 'dangerouslyBlockRendering') {
    const syncProps = (0, _extends2.default)({}, restProps);

    for (const [k, value] of Object.entries({
      src,
      onLoad,
      onError,
      dangerouslySetInnerHTML,
      children
    })) {
      if (!value) {
        continue;
      }

      if (k === 'children') {
        syncProps.dangerouslySetInnerHTML = {
          __html: typeof value === 'string' ? value : Array.isArray(value) ? value.join('') : ''
        };
      } else {
        ;
        syncProps[k] = value;
      }
    }

    return /*#__PURE__*/_react.default.createElement("script", syncProps);
  } else if (strategy === 'defer') {
    if (updateScripts && preload) {
      scripts.defer = (scripts.defer || []).concat([src]);
      updateScripts(scripts);
    }
  } else if (strategy === 'eager') {
    if (updateScripts) {
      scripts.eager = (scripts.eager || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

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

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

var _experimentalScript = _interopRequireDefault(__webpack_require__(/*! ../client/experimental-script */ "./node_modules/next/dist/client/experimental-script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.eager || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...(scriptLoader.defer || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: file,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _experimentalScript.default) {
        if (child.props.strategy === 'eager') {
          scriptLoader.eager = (scriptLoader.eager || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazy', 'defer'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", {
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPreNextScripts() {
    const {
      scriptLoader
    } = this.context;
    return (scriptLoader.eager || []).map(file => {
      const {
        strategy
      } = file,
            props = _objectWithoutProperties(file, ["strategy"]);

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, props, {
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      return /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && this.getPreNextScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

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

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\SUNGHO\\DEV\\Next Class\\next-airbnb\\pages\\_document.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheet"]();
    const originalRenderpage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderpage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(App, _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 35
        }, this))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [initialProps.styles, sheet.getStyleElement()]
        }, void 0, true)
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@1,400;1,700&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this);
  }

}

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi private-next-pages/_document.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.tsx */"./pages/_document.tsx");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9leHBlcmltZW50YWwtc2NyaXB0LnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2hlYWQtbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwibmFtZXMiOlsiU2NyaXB0Q2FjaGUiLCJMb2FkQ2FjaGUiLCJpZ25vcmVQcm9wcyIsImxvYWRTY3JpcHQiLCJwcm9wcyIsIm9uTG9hZCIsImNoaWxkcmVuIiwiY2FjaGVLZXkiLCJpZCIsImVsIiwiZG9jdW1lbnQiLCJsb2FkUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbkVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJBcnJheSIsIk9iamVjdCIsInZhbHVlIiwiYXR0ciIsIkRPTUF0dHJpYnV0ZU5hbWVzIiwiayIsInN0cmF0ZWd5Iiwid2luZG93Iiwic2NyaXB0TG9hZGVySXRlbXMiLCJzcmMiLCJwcmVsb2FkIiwicmVzdFByb3BzIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwibG9hZExhenlTY3JpcHQiLCJzeW5jUHJvcHMiLCJfX2h0bWwiLCJ1cGRhdGVTY3JpcHRzIiwic2NyaXB0cyIsIlNjcmlwdCIsImFjY2VwdENoYXJzZXQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaHR0cEVxdWl2Iiwibm9Nb2R1bGUiLCJwIiwidHlwZSIsImhlYWRFbCIsImhlYWRDb3VudEVsIiwiY29uc29sZSIsImhlYWRDb3VudCIsIk51bWJlciIsIm9sZFRhZ3MiLCJpIiwiaiIsIm5ld1RhZ3MiLCJjb21wb25lbnRzIiwibmV3VGFnIiwibGVuIiwib2xkVGFnIiwidCIsInVwZGF0ZVByb21pc2UiLCJtb3VudGVkSW5zdGFuY2VzIiwidXBkYXRlSGVhZCIsImhlYWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInRhZ3MiLCJoIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInVwZGF0ZUVsZW1lbnRzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJmaWxlcyIsImtlcHQiLCJidW5kbGUiLCJzaGFyZWRGaWxlcyIsInBhZ2VGaWxlcyIsImluQW1wTW9kZSIsImFsbEZpbGVzIiwiQ29tcG9uZW50IiwiZW5oYW5jZUFwcCIsIkFwcCIsImN0eCIsInN0eWxlcyIsInJlbmRlciIsIkRvY3VtZW50IiwiaGVhZFRhZ3NNaWRkbGV3YXJlIiwicHJvY2VzcyIsIkRvY3VtZW50Q29tcG9uZW50Q29udGV4dCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwidW5tYW5nZWRGaWxlcyIsImR5bmFtaWNDc3NGaWxlcyIsImRlZHVwZSIsImR5bmFtaWNJbXBvcnRzIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJmaWxlIiwiaXNTaGFyZWRGaWxlIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyIsImlzVW5tYW5hZ2VkRmlsZSIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsInNjcmlwdExvYWRlciIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJmaWx0ZXJlZENoaWxkcmVuIiwiUmVhY3QiLCJjaGlsZCIsIm1ha2VTdHlsZXNoZWV0SW5lcnQiLCJjIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwidXJsIiwibmV3UHJvcHMiLCJkaXNhYmxlUnVudGltZUpTIiwidW5zdGFibGVfcnVudGltZUpTIiwiZGlzYWJsZUpzUHJlbG9hZCIsInVuc3RhYmxlX0pzUHJlbG9hZCIsImNzc1ByZWxvYWRzIiwib3RoZXJIZWFkRWxlbWVudHMiLCJpc1JlYWN0SGVsbWV0IiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJwcm9wIiwiX19ORVhUX0RBVEFfXyIsInBhZ2UiLCJjdXJTdHlsZXMiLCJoYXNTdHlsZXMiLCJnZXREb2N1bWVudEZpbGVzIiwiY2Fub25pY2FsQmFzZSIsInN0eWxlIiwiZ2V0QW1wUGF0aCIsImhlYWRUYWdzIiwiSGVhZCIsImNvbnRleHRUeXBlIiwicHJvcFR5cGVzIiwibm9uY2UiLCJQcm9wVHlwZXMiLCJjcm9zc09yaWdpbiIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZ2V0RHluYW1pY0NodW5rcyIsImdldFByZU5leHRTY3JpcHRzIiwiZ2V0U2NyaXB0cyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJidWlsZE1hbmlmZXN0IiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwicG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImVyciIsImFtcERldkZpbGVzIiwiTmV4dFNjcmlwdCIsInNhZmFyaU5vbW9kdWxlRml4IiwiYW1wUGF0aCIsImFzUGF0aCIsIk15RG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJzaGVldCIsIlNlcnZlclN0eWxlU2hlZXQiLCJvcmlnaW5hbFJlbmRlcnBhZ2UiLCJyZW5kZXJQYWdlIiwiY29sbGVjdFN0eWxlcyIsImluaXRpYWxQcm9wcyIsImdldFN0eWxlRWxlbWVudCIsInNlYWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsSUFBcEIsR0FBb0IsRUFBcEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7QUFXQSxNQUFNQyxXQUFXLEdBQUcs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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTY3JpcHRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgRE9NQXR0cmlidXRlTmFtZXMgfSBmcm9tICcuL2hlYWQtbWFuYWdlcidcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuY29uc3QgU2NyaXB0Q2FjaGUgPSBuZXcgTWFwKClcbmNvbnN0IExvYWRDYWNoZSA9IG5ldyBTZXQoKVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgU2NyaXB0SFRNTEF0dHJpYnV0ZXM8SFRNTFNjcmlwdEVsZW1lbnQ+IHtcbiAgc3RyYXRlZ3k/OiAnZGVmZXInIHwgJ2xhenknIHwgJ2Rhbmdlcm91c2x5QmxvY2tSZW5kZXJpbmcnIHwgJ2VhZ2VyJ1xuICBpZD86IHN0cmluZ1xuICBvbkxvYWQ/OiAoKSA9PiB2b2lkXG4gIG9uRXJyb3I/OiAoKSA9PiB2b2lkXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIHByZWxvYWQ/OiBib29sZWFuXG59XG5cbmNvbnN0IGlnbm9yZVByb3BzID0gW1xuICAnb25Mb2FkJyxcbiAgJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJyxcbiAgJ2NoaWxkcmVuJyxcbiAgJ29uRXJyb3InLFxuICAnc3RyYXRlZ3knLFxuICAncHJlbG9hZCcsXG5dXG5cbmNvbnN0IGxvYWRTY3JpcHQgPSAocHJvcHM6IFByb3BzKTogdm9pZCA9PiB7XG4gIGNvbnN0IHtcbiAgICBzcmMsXG4gICAgaWQsXG4gICAgb25Mb2FkID0gKCkgPT4ge30sXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsXG4gICAgY2hpbGRyZW4gPSAnJyxcbiAgICBvbkVycm9yLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBjYWNoZUtleSA9IGlkIHx8IHNyY1xuICBpZiAoU2NyaXB0Q2FjaGUuaGFzKHNyYykpIHtcbiAgICBpZiAoIUxvYWRDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICBMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KVxuICAgICAgLy8gRXhlY3V0ZSBvbkxvYWQgc2luY2UgdGhlIHNjcmlwdCBsb2FkaW5nIGhhcyBiZWd1blxuICAgICAgU2NyaXB0Q2FjaGUuZ2V0KHNyYykudGhlbihvbkxvYWQsIG9uRXJyb3IpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gIGNvbnN0IGxvYWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKClcbiAgICAgIGlmIChvbkxvYWQpIHtcbiAgICAgICAgb25Mb2FkLmNhbGwodGhpcylcbiAgICAgIH1cbiAgICB9KVxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVqZWN0KClcbiAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgIG9uRXJyb3IoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgaWYgKHNyYykge1xuICAgIFNjcmlwdENhY2hlLnNldChzcmMsIGxvYWRQcm9taXNlKVxuICAgIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpXG4gIH1cblxuICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJydcbiAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgIGVsLnRleHRDb250ZW50ID1cbiAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICAgID8gY2hpbGRyZW4uam9pbignJylcbiAgICAgICAgOiAnJ1xuICB9IGVsc2UgaWYgKHNyYykge1xuICAgIGVsLnNyYyA9IHNyY1xuICB9XG5cbiAgZm9yIChjb25zdCBbaywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlnbm9yZVByb3BzLmluY2x1ZGVzKGspKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHIgPSBET01BdHRyaWJ1dGVOYW1lc1trXSB8fCBrLnRvTG93ZXJDYXNlKClcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGllbnRTY3JpcHRMb2FkKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IHN0cmF0ZWd5ID0gJ2RlZmVyJyB9ID0gcHJvcHNcbiAgaWYgKHN0cmF0ZWd5ID09PSAnZGVmZXInKSB7XG4gICAgbG9hZFNjcmlwdChwcm9wcylcbiAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenknKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IGxvYWRTY3JpcHQocHJvcHMpKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHM6IFByb3BzKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBsb2FkU2NyaXB0KHByb3BzKSlcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gbG9hZFNjcmlwdChwcm9wcykpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNjcmlwdExvYWRlcihzY3JpcHRMb2FkZXJJdGVtczogUHJvcHNbXSkge1xuICBzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpXG59XG5cbmZ1bmN0aW9uIFNjcmlwdChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7XG4gICAgc3JjID0gJycsXG4gICAgb25Mb2FkID0gKCkgPT4ge30sXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsXG4gICAgY2hpbGRyZW4gPSAnJyxcbiAgICBzdHJhdGVneSA9ICdkZWZlcicsXG4gICAgb25FcnJvcixcbiAgICBwcmVsb2FkID0gZmFsc2UsXG4gICAgLi4ucmVzdFByb3BzXG4gIH0gPSBwcm9wc1xuXG4gIC8vIENvbnRleHQgaXMgYXZhaWxhYmxlIG9ubHkgZHVyaW5nIFNTUlxuICBjb25zdCB7IHVwZGF0ZVNjcmlwdHMsIHNjcmlwdHMgfSA9IHVzZUNvbnRleHQoSGVhZE1hbmFnZXJDb250ZXh0KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSAnZGVmZXInKSB7XG4gICAgICBsb2FkU2NyaXB0KHByb3BzKVxuICAgIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdsYXp5Jykge1xuICAgICAgbG9hZExhenlTY3JpcHQocHJvcHMpXG4gICAgfVxuICB9LCBbcHJvcHMsIHN0cmF0ZWd5XSlcblxuICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JJUFRfTE9BREVSKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChzdHJhdGVneSA9PT0gJ2Rhbmdlcm91c2x5QmxvY2tSZW5kZXJpbmcnKSB7XG4gICAgY29uc3Qgc3luY1Byb3BzOiBQcm9wcyA9IHsgLi4ucmVzdFByb3BzIH1cblxuICAgIGZvciAoY29uc3QgW2ssIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh7XG4gICAgICBzcmMsXG4gICAgICBvbkxvYWQsXG4gICAgICBvbkVycm9yLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsXG4gICAgICBjaGlsZHJlbixcbiAgICB9KSkge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKGsgPT09ICdjaGlsZHJlbicpIHtcbiAgICAgICAgc3luY1Byb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge1xuICAgICAgICAgIF9faHRtbDpcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICAgID8gdmFsdWUuam9pbignJylcbiAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgOyhzeW5jUHJvcHMgYXMgYW55KVtrXSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDxzY3JpcHQgey4uLnN5bmNQcm9wc30gLz5cbiAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2RlZmVyJykge1xuICAgIGlmICh1cGRhdGVTY3JpcHRzICYmIHByZWxvYWQpIHtcbiAgICAgIHNjcmlwdHMuZGVmZXIgPSAoc2NyaXB0cy5kZWZlciB8fCBbXSkuY29uY2F0KFtzcmNdKVxuICAgICAgdXBkYXRlU2NyaXB0cyhzY3JpcHRzKVxuICAgIH1cbiAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2VhZ2VyJykge1xuICAgIGlmICh1cGRhdGVTY3JpcHRzKSB7XG4gICAgICBzY3JpcHRzLmVhZ2VyID0gKHNjcmlwdHMuZWFnZXIgfHwgW10pLmNvbmNhdChbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmMsXG4gICAgICAgICAgb25Mb2FkLFxuICAgICAgICAgIG9uRXJyb3IsXG4gICAgICAgICAgLi4ucmVzdFByb3BzLFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICAgIHVwZGF0ZVNjcmlwdHMoc2NyaXB0cylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRcbiIsImV4cG9ydCBjb25zdCBET01BdHRyaWJ1dGVOYW1lczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcbiAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICBodG1sRm9yOiAnZm9yJyxcbiAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXG4gIG5vTW9kdWxlOiAnbm9Nb2R1bGUnLFxufVxuXG5mdW5jdGlvbiByZWFjdEVsZW1lbnRUb0RPTSh7IHR5cGUsIHByb3BzIH06IEpTWC5FbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gIGZvciAoY29uc3QgcCBpbiBwcm9wcykge1xuICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkocCkpIGNvbnRpbnVlXG4gICAgaWYgKHAgPT09ICdjaGlsZHJlbicgfHwgcCA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykgY29udGludWVcblxuICAgIC8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuICAgIGlmIChwcm9wc1twXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxuXG4gICAgY29uc3QgYXR0ciA9IERPTUF0dHJpYnV0ZU5hbWVzW3BdIHx8IHAudG9Mb3dlckNhc2UoKVxuICAgIGlmIChcbiAgICAgIHR5cGUgPT09ICdzY3JpcHQnICYmXG4gICAgICAoYXR0ciA9PT0gJ2FzeW5jJyB8fCBhdHRyID09PSAnZGVmZXInIHx8IGF0dHIgPT09ICdub01vZHVsZScpXG4gICAgKSB7XG4gICAgICA7KGVsIGFzIEhUTUxTY3JpcHRFbGVtZW50KVthdHRyXSA9ICEhcHJvcHNbcF1cbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHByb3BzW3BdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIH0gPSBwcm9wc1xuICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJydcbiAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgIGVsLnRleHRDb250ZW50ID1cbiAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICAgID8gY2hpbGRyZW4uam9pbignJylcbiAgICAgICAgOiAnJ1xuICB9XG4gIHJldHVybiBlbFxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlOiBzdHJpbmcsIGNvbXBvbmVudHM6IEpTWC5FbGVtZW50W10pOiB2b2lkIHtcbiAgY29uc3QgaGVhZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICBjb25zdCBoZWFkQ291bnRFbDogSFRNTE1ldGFFbGVtZW50ID0gaGVhZEVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ21ldGFbbmFtZT1uZXh0LWhlYWQtY291bnRdJ1xuICApIGFzIEhUTUxNZXRhRWxlbWVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghaGVhZENvdW50RWwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdXYXJuaW5nOiBuZXh0LWhlYWQtY291bnQgaXMgbWlzc2luZy4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1oZWFkLWNvdW50LW1pc3NpbmcnXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWFkQ291bnQgPSBOdW1iZXIoaGVhZENvdW50RWwuY29udGVudClcbiAgY29uc3Qgb2xkVGFnczogRWxlbWVudFtdID0gW11cblxuICBmb3IgKFxuICAgIGxldCBpID0gMCwgaiA9IGhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaSA8IGhlYWRDb3VudDtcbiAgICBpKyssIGogPSBqIS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICkge1xuICAgIGlmIChqIS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHR5cGUpIHtcbiAgICAgIG9sZFRhZ3MucHVzaChqISlcbiAgICB9XG4gIH1cbiAgY29uc3QgbmV3VGFncyA9IChjb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkgYXMgSFRNTEVsZW1lbnRbXSkuZmlsdGVyKFxuICAgIChuZXdUYWcpID0+IHtcbiAgICAgIGZvciAobGV0IGsgPSAwLCBsZW4gPSBvbGRUYWdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGNvbnN0IG9sZFRhZyA9IG9sZFRhZ3Nba11cbiAgICAgICAgaWYgKG9sZFRhZy5pc0VxdWFsTm9kZShuZXdUYWcpKSB7XG4gICAgICAgICAgb2xkVGFncy5zcGxpY2UoaywgMSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIClcblxuICBvbGRUYWdzLmZvckVhY2goKHQpID0+IHQucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQodCkpXG4gIG5ld1RhZ3MuZm9yRWFjaCgodCkgPT4gaGVhZEVsLmluc2VydEJlZm9yZSh0LCBoZWFkQ291bnRFbCkpXG4gIGhlYWRDb3VudEVsLmNvbnRlbnQgPSAoaGVhZENvdW50IC0gb2xkVGFncy5sZW5ndGggKyBuZXdUYWdzLmxlbmd0aCkudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKToge1xuICBtb3VudGVkSW5zdGFuY2VzOiBTZXQ8dW5rbm93bj5cbiAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHZvaWRcbn0ge1xuICBsZXQgdXBkYXRlUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IG51bGwgPSBudWxsXG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudGVkSW5zdGFuY2VzOiBuZXcgU2V0KCksXG4gICAgdXBkYXRlSGVhZDogKGhlYWQ6IEpTWC5FbGVtZW50W10pID0+IHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSAodXBkYXRlUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAocHJvbWlzZSAhPT0gdXBkYXRlUHJvbWlzZSkgcmV0dXJuXG5cbiAgICAgICAgdXBkYXRlUHJvbWlzZSA9IG51bGxcbiAgICAgICAgY29uc3QgdGFnczogUmVjb3JkPHN0cmluZywgSlNYLkVsZW1lbnRbXT4gPSB7fVxuXG4gICAgICAgIGhlYWQuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0YWdzW2gudHlwZV0gfHwgW11cbiAgICAgICAgICBjb21wb25lbnRzLnB1c2goaClcbiAgICAgICAgICB0YWdzW2gudHlwZV0gPSBjb21wb25lbnRzXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdGl0bGVDb21wb25lbnQgPSB0YWdzLnRpdGxlID8gdGFncy50aXRsZVswXSA6IG51bGxcbiAgICAgICAgbGV0IHRpdGxlID0gJydcbiAgICAgICAgaWYgKHRpdGxlQ29tcG9uZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGl0bGVDb21wb25lbnQucHJvcHNcbiAgICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgICAgICAgICA/IGNoaWxkcmVuLmpvaW4oJycpXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICBpZiAodGl0bGUgIT09IGRvY3VtZW50LnRpdGxlKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gICAgICAgIDtbJ21ldGEnLCAnYmFzZScsICdsaW5rJywgJ3N0eWxlJywgJ3NjcmlwdCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICB1cGRhdGVFbGVtZW50cyh0eXBlLCB0YWdzW3R5cGVdIHx8IFtdKVxuICAgICAgICB9KVxuICAgICAgfSkpXG4gICAgfSxcbiAgfVxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBEb2N1bWVudENvbnRleHQgYXMgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQge1xuICBCdWlsZE1hbmlmZXN0LFxuICBnZXRQYWdlRmlsZXMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IGNsZWFuQW1wUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci91dGlscydcbmltcG9ydCB7IGh0bWxFc2NhcGVKc29uU3RyaW5nIH0gZnJvbSAnLi4vc2VydmVyL2h0bWxlc2NhcGUnXG5pbXBvcnQgU2NyaXB0LCB7XG4gIFByb3BzIGFzIFNjcmlwdExvYWRlclByb3BzLFxufSBmcm9tICcuLi9jbGllbnQvZXhwZXJpbWVudGFsLXNjcmlwdCdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBkZWR1cGU8VCBleHRlbmRzIHsgZmlsZTogc3RyaW5nIH0+KGJ1bmRsZXM6IFRbXSk6IFRbXSB7XG4gIGNvbnN0IGZpbGVzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29uc3Qga2VwdDogVFtdID0gW11cblxuICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiBidW5kbGVzKSB7XG4gICAgaWYgKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpIGNvbnRpbnVlXG4gICAgZmlsZXMuYWRkKGJ1bmRsZS5maWxlKVxuICAgIGtlcHQucHVzaChidW5kbGUpXG4gIH1cbiAgcmV0dXJuIGtlcHRcbn1cblxudHlwZSBEb2N1bWVudEZpbGVzID0ge1xuICBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBhbGxGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdCxcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4pOiBEb2N1bWVudEZpbGVzIHtcbiAgY29uc3Qgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpXG4gIGNvbnN0IHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBpbkFtcE1vZGVcbiAgICA/IFtdXG4gICAgOiBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUpXG5cbiAgcmV0dXJuIHtcbiAgICBzaGFyZWRGaWxlcyxcbiAgICBwYWdlRmlsZXMsXG4gICAgYWxsRmlsZXM6IFsuLi5uZXcgU2V0KFsuLi5zaGFyZWRGaWxlcywgLi4ucGFnZUZpbGVzXSldLFxuICB9XG59XG5cbi8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQ8UCA9IHt9PiBleHRlbmRzIENvbXBvbmVudDxEb2N1bWVudFByb3BzICYgUD4ge1xuICBzdGF0aWMgaGVhZFRhZ3NNaWRkbGV3YXJlID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICA/IGltcG9ydChcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG5cbiAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAocHJvcHM6IGFueSkgPT4gPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7IGVuaGFuY2VBcHAgfSlcbiAgICBjb25zdCBzdHlsZXMgPSBbLi4uZmx1c2goKV1cbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBzdHlsZXMgfVxuICB9XG5cbiAgc3RhdGljIHJlbmRlckRvY3VtZW50PFA+KFxuICAgIERvY3VtZW50Q29tcG9uZW50OiBuZXcgKCkgPT4gRG9jdW1lbnQ8UD4sXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHMgJiBQXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3BzfT5cbiAgICAgICAgPERvY3VtZW50Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvRG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWw+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSHRtbChcbiAgcHJvcHM6IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0Lkh0bWxIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+LFxuICAgIEhUTUxIdG1sRWxlbWVudFxuICA+XG4pIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCwgbG9jYWxlIH0gPSB1c2VDb250ZXh0KFxuICAgIERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuICApXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgbGFuZz17cHJvcHMubGFuZyB8fCBsb2NhbGUgfHwgdW5kZWZpbmVkfVxuICAgICAgYW1wPXtpbkFtcE1vZGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkIGV4dGVuZHMgQ29tcG9uZW50PFxuICBPcmlnaW5Qcm9wcyAmXG4gICAgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZEVsZW1lbnQ+LFxuICAgICAgSFRNTEhlYWRFbGVtZW50XG4gICAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICBnZXRDc3NMaW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcyk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgY29uc3Qgc2hhcmVkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcylcblxuICAgIC8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuICAgIC8vIHdlYnBhY2sgcnVudGltZSAoYG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luYCkuXG4gICAgbGV0IHVubWFuZ2VkRmlsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChbXSlcbiAgICBsZXQgZHluYW1pY0Nzc0ZpbGVzID0gZGVkdXBlKFxuICAgICAgZHluYW1pY0ltcG9ydHMuZmlsdGVyKChmKSA9PiBmLmZpbGUuZW5kc1dpdGgoJy5jc3MnKSlcbiAgICApLm1hcCgoZikgPT4gZi5maWxlKVxuICAgIGlmIChkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IG5ldyBTZXQoY3NzRmlsZXMpXG4gICAgICBkeW5hbWljQ3NzRmlsZXMgPSBkeW5hbWljQ3NzRmlsZXMuZmlsdGVyKFxuICAgICAgICAoZikgPT4gIShleGlzdGluZy5oYXMoZikgfHwgc2hhcmVkRmlsZXMuaGFzKGYpKVxuICAgICAgKVxuICAgICAgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKVxuICAgICAgY3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpXG4gICAgfVxuXG4gICAgbGV0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpXG5cbiAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUykge1xuICAgICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtgJHtmaWxlfS1wcmVsb2FkYH1cbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNVbm1hbmFnZWRGaWxlID0gdW5tYW5nZWRGaWxlcy5oYXMoZmlsZSlcbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGEtbi1nPXtpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBkYXRhLW4tcD17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gdW5kZWZpbmVkIDogJyd9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFNcbiAgICApIHtcbiAgICAgIGNzc0xpbmtFbGVtZW50cyA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChcbiAgICAgICAgY3NzTGlua0VsZW1lbnRzXG4gICAgICApIGFzIFJlYWN0RWxlbWVudFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzXG4gIH1cblxuICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIChcbiAgICAgIGRlZHVwZShkeW5hbWljSW1wb3J0cylcbiAgICAgICAgLm1hcCgoYnVuZGxlKSA9PiB7XG4gICAgICAgICAgaWYgKCFidW5kbGUuZmlsZS5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuXG4gIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIHNjcmlwdExvYWRlcixcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgcHJlbG9hZEZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uKHNjcmlwdExvYWRlci5lYWdlciB8fCBbXSkubWFwKChmaWxlKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlLnNyY31cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtmaWxlLnNyY31cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgICAuLi5wcmVsb2FkRmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKSxcbiAgICAgIC4uLihzY3JpcHRMb2FkZXIuZGVmZXIgfHwgW10pLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9e2ZpbGV9XG4gICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgIF1cbiAgfVxuXG4gIGhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSk6IFJlYWN0Tm9kZVtdIHtcbiAgICBjb25zdCB7IHNjcmlwdExvYWRlciB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3Qgc2NyaXB0TG9hZGVySXRlbXM6IFNjcmlwdExvYWRlclByb3BzW10gPSBbXVxuICAgIGNvbnN0IGZpbHRlcmVkQ2hpbGRyZW46IFJlYWN0Tm9kZVtdID0gW11cblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gU2NyaXB0KSB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5zdHJhdGVneSA9PT0gJ2VhZ2VyJykge1xuICAgICAgICAgIHNjcmlwdExvYWRlci5lYWdlciA9IChzY3JpcHRMb2FkZXIuZWFnZXIgfHwgW10pLmNvbmNhdChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmNoaWxkLnByb3BzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKFsnbGF6eScsICdkZWZlciddLmluY2x1ZGVzKGNoaWxkLnByb3BzLnN0cmF0ZWd5KSkge1xuICAgICAgICAgIHNjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5zY3JpcHRMb2FkZXIgPSBzY3JpcHRMb2FkZXJJdGVtc1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW5cbiAgfVxuXG4gIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZTogUmVhY3ROb2RlKTogUmVhY3ROb2RlW10ge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAobm9kZSwgKGM6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHVybCkgPT4gYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xuICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pXG4gICAgICB9XG4gICAgICByZXR1cm4gY1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICB1bnN0YWJsZV9Kc1ByZWxvYWQsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG4gICAgY29uc3QgZGlzYWJsZUpzUHJlbG9hZCA9IHVuc3RhYmxlX0pzUHJlbG9hZCA9PT0gZmFsc2VcblxuICAgIHRoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZCA9IHRydWVcblxuICAgIGxldCB7IGhlYWQgfSA9IHRoaXMuY29udGV4dFxuICAgIGxldCBjc3NQcmVsb2FkczogQXJyYXk8SlNYLkVsZW1lbnQ+ID0gW11cbiAgICBsZXQgb3RoZXJIZWFkRWxlbWVudHM6IEFycmF5PEpTWC5FbGVtZW50PiA9IFtdXG4gICAgaWYgKGhlYWQpIHtcbiAgICAgIGhlYWQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYyAmJlxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1sncmVsJ10gPT09ICdwcmVsb2FkJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2FzJ10gPT09ICdzdHlsZSdcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3NzUHJlbG9hZHMucHVzaChjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGMgJiYgb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaGVhZCA9IGNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cylcbiAgICB9XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgY2hpbGQ/LnR5cGUgPT09ICdtZXRhJyAmJlxuICAgICAgICAgICAgY2hpbGQ/LnByb3BzPy5uYW1lID09PSAndmlld3BvcnQnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmXG4gICAgICAhaW5BbXBNb2RlXG4gICAgKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjaGlsZHJlbilcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUklQVF9MT0FERVIpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICBsZXQgYmFkUHJvcDogc3RyaW5nID0gJydcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJ1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xKSB8fFxuICAgICAgICAgICAgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmXG4gICAgICAgICAgICAgICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfSlcblxuICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGNvbnN0IGN1clN0eWxlczogUmVhY3QuUmVhY3RFbGVtZW50W10gPSBBcnJheS5pc0FycmF5KHN0eWxlcylcbiAgICAgID8gKHN0eWxlcyBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXSlcbiAgICAgIDogW11cbiAgICBpZiAoXG4gICAgICBpbkFtcE1vZGUgJiZcbiAgICAgIHN0eWxlcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWw6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT5cbiAgICAgICAgZWw/LnByb3BzPy5kYW5nZXJvdXNseVNldElubmVySFRNTD8uX19odG1sXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKSA9PiBoYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLFxuICAgICAgaW5BbXBNb2RlXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAgeyFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIChcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGRhdGEtbi1jc3M9e3RoaXMucHJvcHMubm9uY2UgPz8gJyd9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmXG4gICAgICAgICAgICAgICFkaXNhYmxlSnNQcmVsb2FkICYmXG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZUpzUHJlbG9hZCAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAoXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgICAgIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAgICAgICA8bm9zY3JpcHQgaWQ9XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzdHlsZXMgfHwgbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oaGVhZFRhZ3MgfHwgW10pKX1cbiAgICAgIDwvaGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBodG1sLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgfSA9IHVzZUNvbnRleHQoXG4gICAgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG4gIClcblxuICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbiA9IHRydWVcblxuICBpZiAoaW5BbXBNb2RlKSByZXR1cm4gPD57QU1QX1JFTkRFUl9UQVJHRVR9PC8+XG4gIHJldHVybiA8ZGl2IGlkPVwiX19uZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PE9yaWdpblByb3BzPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICAvLyBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbXRob3IvNjRiMTE0ZTRhNGY1Mzk5MTVhOTViOTFmZmQzNDBhY2NcbiAgc3RhdGljIHNhZmFyaU5vbW9kdWxlRml4ID1cbiAgICAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnXG5cbiAgZ2V0RHluYW1pY0NodW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKChidW5kbGUpID0+IHtcbiAgICAgIGlmICghYnVuZGxlLmZpbGUuZW5kc1dpdGgoJy5qcycpIHx8IGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGJ1bmRsZS5maWxlKSlcbiAgICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudH1cbiAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVyIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoc2NyaXB0TG9hZGVyLmVhZ2VyIHx8IFtdKS5tYXAoKGZpbGU6IFNjcmlwdExvYWRlclByb3BzKSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmF0ZWd5LCAuLi5wcm9wcyB9ID0gZmlsZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFNjcmlwdHMoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgICBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIClcblxuICAgIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50fVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChwb2x5ZmlsbCkgPT5cbiAgICAgICAgICBwb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICAgIClcbiAgICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e3BvbHlmaWxsfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHM6IFJlYWRvbmx5PERvY3VtZW50UHJvcHM+KTogc3RyaW5nIHtcbiAgICBjb25zdCB7IF9fTkVYVF9EQVRBX18gfSA9IGRvY3VtZW50UHJvcHNcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pXG4gICAgICByZXR1cm4gaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NpcmN1bGFyLXN0cnVjdHVyZWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQgPSB0cnVlXG5cbiAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbXBEZXZGaWxlcyA9IFtcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyxcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YW1wRGV2RmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlczogRG9jdW1lbnRGaWxlcyA9IGdldERvY3VtZW50RmlsZXMoXG4gICAgICB0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCxcbiAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsXG4gICAgICBpbkFtcE1vZGVcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXNcbiAgICAgICAgICA/IGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiB0aGlzLmdldFNjcmlwdHMoZmlsZXMpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aDogc3RyaW5nLCBhc1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZG9jdW1lbnQnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBEb2N1bWVudCwge1xyXG4gICAgSHRtbCxcclxuICAgIEhlYWQsXHJcbiAgICBNYWluLFxyXG4gICAgTmV4dFNjcmlwdCxcclxuICAgIERvY3VtZW50Q29udGV4dH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuICBpbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4gIFxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eDogRG9jdW1lbnRDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKTtcclxuICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXJwYWdlID0gY3R4LnJlbmRlclBhZ2U7XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PiBcclxuICAgICAgICAgIG9yaWdpbmFsUmVuZGVycGFnZSh7XHJcbiAgICAgICAgICAgIGVuaGFuY2VBcHA6IChBcHApID0+IChwcm9wcykgPT5cclxuICAgICAgICAgICAgICBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfS8+KVxyXG4gICAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmluaXRpYWxQcm9wcyxcclxuICAgICAgICAgIHN0eWxlczogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtpbml0aWFsUHJvcHMuc3R5bGVzfVxyXG4gICAgICAgICAgICAgIHtzaGVldC5nZXRTdHlsZUVsZW1lbnQoKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2hlZXQuc2VhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEh0bWw+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgXHJcbiAgICAgICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiIFxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIFxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXCIgXHJcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIFxyXG4gICAgICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIiBcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGluayBcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnM6aXRhbCx3Z2h0QDEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcFwiIFxyXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxsaW5rIFxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2xnZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zOjQwMCw3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPGxpbmsgXHJcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIFxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2xnZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTYW5zK0tSOjQwMCw3MDAmZGlzcGxheT1zd2FwJnN1YnNldD1rb3JlYW5cIlxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIDwvSHRtbD5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9