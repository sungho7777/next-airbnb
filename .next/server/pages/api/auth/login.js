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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/login.ts");
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


// * 유저 리스트 데이터 불러오기
const getList = () => {
  const userBuffer = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])("data/users.json");
  const usersString = userBuffer.toString();

  if (!usersString) {
    return [];
  }

  const users = JSON.parse(usersString);
  return users;
}; // * email의 유저가 있는지 확인하기.


const exist = ({
  email
}) => {
  const users = getList();
  return users.some(user => user.email === email);
}; // * 유저 리스트 저장하기


const write = async users => {
  Object(fs__WEBPACK_IMPORTED_MODULE_0__["writeFileSync"])("data/users.json", JSON.stringify(users));
}; // * email 또는 id 의 유저 불러오기


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

/***/ "./pages/api/auth/login.ts":
/*!*********************************!*\
  !*** ./pages/api/auth/login.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data */ "./lib/data/index.ts");



/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "POST") {
    try {
      const {
        email,
        password
      } = req.body;

      if (!email || !password) {
        res.statusCode = 400;
        return res.send("필수 데이터가 없습니다.");
      }

      const user = _lib_data__WEBPACK_IMPORTED_MODULE_2__["default"].user.find({
        email
      });

      if (!user) {
        res.statusCode = 404;
        return res.send("해당 이메일의 유저가 없습니다.");
      } //* 비밀번호 일치여부


      const isPasswordMatched = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compareSync(password, user.password);

      if (!isPasswordMatched) {
        res.statusCode = 403;
        return res.send("비밀번호가 일치하지 않습니다.");
      }

      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(String(user.id), process.env.JWT_SECRET);
      res.setHeader("Set-Cookie", `access_token=${token}; path=/; httponly`);
      /*
          expires=${new Date(
              Date.now() + 60 * 60 * 24 * 1000 * 3 //지금 시간 + 3일
          )};
      */

      const userWithoutPassword = user;
      delete userWithoutPassword.password;
      res.statusCode = 200;
      return res.send(user);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      return res.end(e);
    }
  }

  res.statusCode = 405;
  return res.end();
});

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiXSwibmFtZXMiOlsiRGF0YSIsInVzZXIiLCJnZXRMaXN0IiwidXNlckJ1ZmZlciIsInJlYWRGaWxlU3luYyIsInVzZXJzU3RyaW5nIiwidG9TdHJpbmciLCJ1c2VycyIsIkpTT04iLCJwYXJzZSIsImV4aXN0IiwiZW1haWwiLCJzb21lIiwid3JpdGUiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5IiwiZmluZCIsImlkIiwicmVxIiwicmVzIiwibWV0aG9kIiwicGFzc3dvcmQiLCJib2R5Iiwic3RhdHVzQ29kZSIsInNlbmQiLCJpc1Bhc3N3b3JkTWF0Y2hlZCIsImJjcnlwdCIsImNvbXBhcmVTeW5jIiwidG9rZW4iLCJqd3QiLCJzaWduIiwiU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJzZXRIZWFkZXIiLCJ1c2VyV2l0aG91dFBhc3N3b3JkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlbmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtR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QywrQ0FBTSxDQUFDQyxXQUFQLENBQW1CTixRQUFuQixFQUE2QnBCLElBQUksQ0FBQ29CLFFBQWxDLENBQTFCOztBQUNBLFVBQUksQ0FBQ0ksaUJBQUwsRUFBd0I7QUFDcEJOLFdBQUcsQ0FBQ0ksVUFBSixHQUFpQixHQUFqQjtBQUNBLGVBQU9KLEdBQUcsQ0FBQ0ssSUFBSixDQUFTLGtCQUFULENBQVA7QUFDSDs7QUFDRCxZQUFNSSxLQUFLLEdBQUdDLG1EQUFHLENBQUNDLElBQUosQ0FBU0MsTUFBTSxDQUFDOUIsSUFBSSxDQUFDZ0IsRUFBTixDQUFmLEVBQTBCZSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBdEMsQ0FBZDtBQUNBZixTQUFHLENBQUNnQixTQUFKLENBQ0ksWUFESixFQUNtQixnQkFBZVAsS0FBTSxvQkFEeEM7QUFHQTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUNZLFlBQU1RLG1CQUdKLEdBQUduQyxJQUhMO0FBS0EsYUFBT21DLG1CQUFtQixDQUFDZixRQUEzQjtBQUNBRixTQUFHLENBQUNJLFVBQUosR0FBaUIsR0FBakI7QUFDQSxhQUFPSixHQUFHLENBQUNLLElBQUosQ0FBU3ZCLElBQVQsQ0FBUDtBQUVILEtBckNELENBcUNFLE9BQU9vQyxDQUFQLEVBQVU7QUFDUkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQWxCLFNBQUcsQ0FBQ0ksVUFBSixHQUFlLEdBQWY7QUFDQSxhQUFPSixHQUFHLENBQUNxQixHQUFKLENBQVFILENBQVIsQ0FBUDtBQUNIO0FBQ0o7O0FBQ0RsQixLQUFHLENBQUNJLFVBQUosR0FBZSxHQUFmO0FBRUEsU0FBT0osR0FBRyxDQUFDcUIsR0FBSixFQUFQO0FBQ0gsQ0FoREQsRTs7Ozs7Ozs7Ozs7QUNOQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvbG9naW4udHNcIik7XG4iLCJpbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5jb25zdCBEYXRhID0ge3VzZXJ9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiLCJpbXBvcnQge3JlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luY30gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7U3RvcmVkVXNlclR5cGV9IGZyb20gXCIuLi8uLi90eXBlcy91c2VyXCI7XHJcblxyXG4vLyAqIOycoOyggCDrpqzsiqTtirgg642w7J207YSwIOu2iOufrOyYpOq4sFxyXG5jb25zdCBnZXRMaXN0PSgpPT57XHJcbiAgICBjb25zdCB1c2VyQnVmZmVyID0gcmVhZEZpbGVTeW5jKFwiZGF0YS91c2Vycy5qc29uXCIpO1xyXG4gICAgY29uc3QgdXNlcnNTdHJpbmcgPSB1c2VyQnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoIXVzZXJzU3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VyczogU3RvcmVkVXNlclR5cGVbXSA9IEpTT04ucGFyc2UodXNlcnNTdHJpbmcpO1xyXG4gICAgcmV0dXJuIHVzZXJzO1xyXG59O1xyXG5cclxuLy8gKiBlbWFpbOydmCDsnKDsoIDqsIAg7J6I64qU7KeAIO2ZleyduO2VmOq4sC5cclxuY29uc3QgZXhpc3Q9KHtlbWFpbH06e2VtYWlsOnN0cmluZ30pPT57XHJcbiAgICBjb25zdCB1c2Vycz1nZXRMaXN0KCk7XHJcbiAgICByZXR1cm4gdXNlcnMuc29tZSgodXNlcik9PnVzZXIuZW1haWw9PT1lbWFpbCk7XHJcbn07XHJcblxyXG4vLyAqIOycoOyggCDrpqzsiqTtirgg7KCA7J6l7ZWY6riwXHJcbmNvbnN0IHdyaXRlPWFzeW5jKHVzZXJzOlN0b3JlZFVzZXJUeXBlW10pPT57XHJcbiAgICB3cml0ZUZpbGVTeW5jKFwiZGF0YS91c2Vycy5qc29uXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJzKSk7XHJcbn07XHJcblxyXG4vLyAqIGVtYWlsIOuYkOuKlCBpZCDsnZgg7Jyg7KCAIOu2iOufrOyYpOq4sFxyXG5jb25zdCBmaW5kID0gKHsgZW1haWwsIGlkIH06IHsgZW1haWw/OiBzdHJpbmc7IGlkPzogbnVtYmVyIH0pID0+IHtcclxuICAgIGNvbnN0IHVzZXJzID0gZ2V0TGlzdCgpO1xyXG4gICAgcmV0dXJuIHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGVtYWlsIHx8IHVzZXIuaWQgPT09IGlkKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7Z2V0TGlzdCwgZXhpc3QsIHdyaXRlLCBmaW5kfTsiLCJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBEYXRhIGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YVwiO1xyXG5pbXBvcnQgeyBTdG9yZWRVc2VyVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy91c2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyhyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgICAgIGlmKCFlbWFpbCB8fCAhcGFzc3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGU9NDAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwi7ZWE7IiYIOuNsOydtO2EsOqwgCDsl4bsirXri4jri6QuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gRGF0YS51c2VyLmZpbmQoeyBlbWFpbCB9KTtcclxuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc2VuZChcIu2VtOuLuSDsnbTrqZTsnbzsnZgg7Jyg7KCA6rCAIOyXhuyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vKiDruYTrsIDrsojtmLgg7J287LmY7Jes67aAXHJcbiAgICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmRNYXRjaGVkID0gYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgaWYgKCFpc1Bhc3N3b3JkTWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoXCLruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihTdHJpbmcodXNlci5pZCksIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhKTtcclxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcihcclxuICAgICAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiLCBgYWNjZXNzX3Rva2VuPSR7dG9rZW59OyBwYXRoPS87IGh0dHBvbmx5YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgZXhwaXJlcz0ke25ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIERhdGUubm93KCkgKyA2MCAqIDYwICogMjQgKiAxMDAwICogMyAvL+yngOq4iCDsi5zqsIQgKyAz7J28XHJcbiAgICAgICAgICAgICAgICApfTtcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3QgdXNlcldpdGhvdXRQYXNzd29yZDogUGFydGlhbDxQaWNrPFxyXG4gICAgICAgICAgICAgICAgU3RvcmVkVXNlclR5cGUsXHJcbiAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgPj4gPSB1c2VyO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHVzZXJXaXRob3V0UGFzc3dvcmQucGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQodXNlcik7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlPTUwMDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5lbmQoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzLnN0YXR1c0NvZGU9NDA1O1xyXG5cclxuICAgIHJldHVybiByZXMuZW5kKCk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=