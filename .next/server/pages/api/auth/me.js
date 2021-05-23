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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/me.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./lib/data/user.ts");

const Data = {
  user: _user__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Data);

/***/ }),

/***/ "./lib/data/user.ts":
/*!**************************!*\
  !*** ./lib/data/user.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);


// 유저 리스트 데이터 불러오기
const getList = () => {
  const usersBuffer = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])("data/users.json");
  const usersString = usersBuffer.toString();

  if (!usersString) {
    return [];
  }

  const users = JSON.parse(usersString);
  return users;
};

const exist = ({
  email
}) => {
  const users = getList();
  return users.some(user => user.email === email);
};

const write = async users => {
  Object(fs__WEBPACK_IMPORTED_MODULE_0__["writeFileSync"])("data/users.json", JSON.stringify(users));
}; // email 또는 id의 유저 불러오기


const find = ({
  email,
  id
}) => {
  const users = getList();
  return users.find(user => user.email === email || user.id === id);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getList,
  exist,
  write,
  find
});

/***/ }),

/***/ "./pages/api/auth/me.ts":
/*!******************************!*\
  !*** ./pages/api/auth/me.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data */ "./lib/data/index.ts");


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "GET") {
    try {
      const accessToken = req.headers.cookie;

      if (!accessToken) {
        res.statusCode = 400;
        return res.send("access_token이 없습니다.");
      }

      const userId = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(accessToken, process.env.JWT_SECRET);
      console.log(userId);
      const user = _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].user.find({
        id: Number(userId)
      });

      if (!user) {
        res.statusCode = 404;
        return res.send("해당 유저가 없습니다.");
      }

      const userWithoutPassword = user;
      delete userWithoutPassword.password;
      res.statusCode = 200;
      return res.send(userWithoutPassword);
    } catch (error) {
      res.statusCode = 500;
      return res.send(error);
    }
  }

  res.statusCode = 405;
  return res.end();
});

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9tZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIl0sIm5hbWVzIjpbIkRhdGEiLCJ1c2VyIiwiZ2V0TGlzdCIsInVzZXJzQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidXNlcnNTdHJpbmciLCJ0b1N0cmluZyIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwiZXhpc3QiLCJlbWFpbCIsInNvbWUiLCJ3cml0ZSIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJmaW5kIiwiaWQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhY2Nlc3NUb2tlbiIsImhlYWRlcnMiLCJjb29raWUiLCJzdGF0dXNDb2RlIiwic2VuZCIsInVzZXJJZCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsInVzZXJXaXRob3V0UGFzc3dvcmQiLCJwYXNzd29yZCIsImVycm9yIiwiZW5kIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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Q0FBUDtBQUNEOztBQUVELFlBQU1VLG1CQUE2RCxHQUFHbEMsSUFBdEU7QUFFQSxhQUFPa0MsbUJBQW1CLENBQUNDLFFBQTNCO0FBQ0FqQixTQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7QUFFQSxhQUFPTCxHQUFHLENBQUNNLElBQUosQ0FBU1UsbUJBQVQsQ0FBUDtBQUNELEtBdEJELENBc0JFLE9BQU9FLEtBQVAsRUFBYztBQUNkbEIsU0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsYUFBT0wsR0FBRyxDQUFDTSxJQUFKLENBQVNZLEtBQVQsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0RsQixLQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7QUFFQSxTQUFPTCxHQUFHLENBQUNtQixHQUFKLEVBQVA7QUFDRCxDQWhDRCxFOzs7Ozs7Ozs7OztBQ0xBLCtCOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXV0aC9tZS50c1wiKTtcbiIsImltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIlxyXG5cclxuY29uc3QgRGF0YSA9IHsgdXNlciB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiLCJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tIFwiZnNcIlxyXG5pbXBvcnQgeyBTdG9yZWRVc2VyVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy91c2VyXCJcclxuXHJcbi8vIOycoOyggCDrpqzsiqTtirgg642w7J207YSwIOu2iOufrOyYpOq4sFxyXG5jb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJzQnVmZmVyID0gcmVhZEZpbGVTeW5jKFwiZGF0YS91c2Vycy5qc29uXCIpO1xyXG4gIGNvbnN0IHVzZXJzU3RyaW5nID0gdXNlcnNCdWZmZXIudG9TdHJpbmcoKTtcclxuICBpZiAoIXVzZXJzU3RyaW5nKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGNvbnN0IHVzZXJzOiBTdG9yZWRVc2VyVHlwZVtdID0gSlNPTi5wYXJzZSh1c2Vyc1N0cmluZyk7XHJcbiAgcmV0dXJuIHVzZXJzO1xyXG59XHJcblxyXG5jb25zdCBleGlzdCA9ICh7ZW1haWx9OiB7ZW1haWw6c3RyaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJzID0gZ2V0TGlzdCgpO1xyXG4gIHJldHVybiB1c2Vycy5zb21lKCh1c2VyKSA9PiB1c2VyLmVtYWlsID09PSBlbWFpbCk7XHJcbn07XHJcblxyXG5jb25zdCB3cml0ZSA9IGFzeW5jICh1c2VyczogU3RvcmVkVXNlclR5cGVbXSkgPT4ge1xyXG4gIHdyaXRlRmlsZVN5bmMoXCJkYXRhL3VzZXJzLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodXNlcnMpKTtcclxufTtcclxuXHJcbi8vIGVtYWlsIOuYkOuKlCBpZOydmCDsnKDsoIAg67aI65+s7Jik6riwXHJcbmNvbnN0IGZpbmQgPSAoe2VtYWlsLCBpZH06IHtlbWFpbD86IHN0cmluZzsgaWQ/OiBudW1iZXJ9KSA9PiB7XHJcbiAgY29uc3QgdXNlcnMgPSBnZXRMaXN0KCk7XHJcbiAgcmV0dXJuIHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGVtYWlsIHx8IHVzZXIuaWQgPT09IGlkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge2dldExpc3QsIGV4aXN0LCB3cml0ZSwgZmluZH07IiwiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgU3RvcmVkVXNlclR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy91c2VyJztcclxuaW1wb3J0IERhdGEgZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVxLmhlYWRlcnMuY29va2llO1xyXG4gICAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAgNDAwO1xyXG4gICAgICAgIHJldHVybiByZXMuc2VuZChcImFjY2Vzc190b2tlbuydtCDsl4bsirXri4jri6QuXCIpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXNlcklkID0gand0LnZlcmlmeShhY2Nlc3NUb2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codXNlcklkKTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBEYXRhLnVzZXIuZmluZCh7aWQ6IE51bWJlcih1c2VySWQpfSk7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xyXG4gICAgICAgIHJldHVybiByZXMuc2VuZChcIu2VtOuLuSDsnKDsoIDqsIAg7JeG7Iq164uI64ukLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlcldpdGhvdXRQYXNzd29yZDogUGFydGlhbDxQaWNrPFN0b3JlZFVzZXJUeXBlLFwicGFzc3dvcmRcIj4+ID0gdXNlcjtcclxuXHJcbiAgICAgIGRlbGV0ZSB1c2VyV2l0aG91dFBhc3N3b3JkLnBhc3N3b3JkO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc2VuZCh1c2VyV2l0aG91dFBhc3N3b3JkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICByZXR1cm4gcmVzLnNlbmQoZXJyb3IpOyAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICByZXMuc3RhdHVzQ29kZSA9IDQwNTtcclxuXHJcbiAgcmV0dXJuIHJlcy5lbmQoKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9