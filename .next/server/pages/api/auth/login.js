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

/***/ "./pages/api/auth/login.ts":
/*!*********************************!*\
  !*** ./pages/api/auth/login.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data */ "./lib/data/index.ts");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);



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
      } // 이메일 유저 확인


      const user = _lib_data__WEBPACK_IMPORTED_MODULE_1__["default"].user.find({
        email
      });

      if (!user) {
        res.statusCode = 405;
        return res.send("해당 이메일의 유저가 없습니다.");
      } // 비밀번호 일치 여부


      const isPasswordMatched = bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.compareSync(password, user.password);

      if (!isPasswordMatched) {
        res.statusCode = 403;
        return res.send("비밀번호가 일치하지 않습니다.");
      }

      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign(String(user.id), process.env.JWT_SECRET);
      res.setHeader("Set-Cookie", `access_token=${token}; path=/;expires=${new Date(Date.now() + 60 * 60 * 24 * 1000 * 3).toISOString()};
        httponly`);
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      return res.send(error);
    }

    return res.end();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiXSwibmFtZXMiOlsiRGF0YSIsInVzZXIiLCJnZXRMaXN0IiwidXNlcnNCdWZmZXIiLCJyZWFkRmlsZVN5bmMiLCJ1c2Vyc1N0cmluZyIsInRvU3RyaW5nIiwidXNlcnMiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImVtYWlsIiwic29tZSIsIndyaXRlIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsImZpbmQiLCJpZCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInBhc3N3b3JkIiwiYm9keSIsInN0YXR1c0NvZGUiLCJzZW5kIiwiaXNQYXNzd29yZE1hdGNoZWQiLCJiY3J5cHQiLCJjb21wYXJlU3luYyIsInRva2VuIiwiand0Iiwic2lnbiIsIlN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwic2V0SGVhZGVyIiwiRGF0ZSIsIm5vdyIsInRvSVNPU3RyaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZW5kIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FB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QUFpQixHQUFHQywrQ0FBTSxDQUFDQyxXQUFQLENBQW1CTixRQUFuQixFQUE2QnBCLElBQUksQ0FBQ29CLFFBQWxDLENBQTFCOztBQUNBLFVBQUksQ0FBQ0ksaUJBQUwsRUFBd0I7QUFDdEJOLFdBQUcsQ0FBQ0ksVUFBSixHQUFpQixHQUFqQjtBQUNBLGVBQU9KLEdBQUcsQ0FBQ0ssSUFBSixDQUFTLGtCQUFULENBQVA7QUFDRDs7QUFFRCxZQUFNSSxLQUFLLEdBQUdDLG1EQUFHLENBQUNDLElBQUosQ0FBU0MsTUFBTSxDQUFDOUIsSUFBSSxDQUFDZ0IsRUFBTixDQUFmLEVBQTBCZSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBdEMsQ0FBZDtBQUNBZixTQUFHLENBQUNnQixTQUFKLENBQ0UsWUFERixFQUVHLGdCQUFlUCxLQUFNLG9CQUFtQixJQUFJUSxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxJQUFmLEdBQXNCLENBQTVDLEVBQStDQyxXQUEvQyxFQUE2RDtBQUM5RyxpQkFITTtBQU1ELEtBNUJELENBNEJFLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBcEIsU0FBRyxDQUFDSSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsYUFBT0osR0FBRyxDQUFDSyxJQUFKLENBQVNlLEtBQVQsQ0FBUDtBQUNEOztBQUVELFdBQU9wQixHQUFHLENBQUN1QixHQUFKLEVBQVA7QUFDRDs7QUFDRHZCLEtBQUcsQ0FBQ0ksVUFBSixHQUFpQixHQUFqQjtBQUVBLFNBQU9KLEdBQUcsQ0FBQ3VCLEdBQUosRUFBUDtBQUNELENBekNELEU7Ozs7Ozs7Ozs7O0FDTEEscUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLnRzXCIpO1xuIiwiaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiXHJcblxyXG5jb25zdCBEYXRhID0geyB1c2VyIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhOyIsImltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gXCJmc1wiXHJcbmltcG9ydCB7IFN0b3JlZFVzZXJUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3VzZXJcIlxyXG5cclxuLy8g7Jyg7KCAIOumrOyKpO2KuCDrjbDsnbTthLAg67aI65+s7Jik6riwXHJcbmNvbnN0IGdldExpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXNlcnNCdWZmZXIgPSByZWFkRmlsZVN5bmMoXCJkYXRhL3VzZXJzLmpzb25cIik7XHJcbiAgY29uc3QgdXNlcnNTdHJpbmcgPSB1c2Vyc0J1ZmZlci50b1N0cmluZygpO1xyXG4gIGlmICghdXNlcnNTdHJpbmcpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgY29uc3QgdXNlcnM6IFN0b3JlZFVzZXJUeXBlW10gPSBKU09OLnBhcnNlKHVzZXJzU3RyaW5nKTtcclxuICByZXR1cm4gdXNlcnM7XHJcbn1cclxuXHJcbmNvbnN0IGV4aXN0ID0gKHtlbWFpbH06IHtlbWFpbDpzdHJpbmd9KSA9PiB7XHJcbiAgY29uc3QgdXNlcnMgPSBnZXRMaXN0KCk7XHJcbiAgcmV0dXJuIHVzZXJzLnNvbWUoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGVtYWlsKTtcclxufTtcclxuXHJcbmNvbnN0IHdyaXRlID0gYXN5bmMgKHVzZXJzOiBTdG9yZWRVc2VyVHlwZVtdKSA9PiB7XHJcbiAgd3JpdGVGaWxlU3luYyhcImRhdGEvdXNlcnMuanNvblwiLCBKU09OLnN0cmluZ2lmeSh1c2VycykpO1xyXG59O1xyXG5cclxuLy8gZW1haWwg65iQ64qUIGlk7J2YIOycoOyggCDrtojrn6zsmKTquLBcclxuY29uc3QgZmluZCA9ICh7ZW1haWwsIGlkfToge2VtYWlsPzogc3RyaW5nOyBpZD86IG51bWJlcn0pID0+IHtcclxuICBjb25zdCB1c2VycyA9IGdldExpc3QoKTtcclxuICByZXR1cm4gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5lbWFpbCA9PT0gZW1haWwgfHwgdXNlci5pZCA9PT0gaWQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7Z2V0TGlzdCwgZXhpc3QsIHdyaXRlLCBmaW5kfTsiLCJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIlxyXG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YSc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDA7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwi7ZWE7IiYIOuNsOydtO2EsOqwgCDsl4bsirXri4jri6QuXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDsnbTrqZTsnbwg7Jyg7KCAIO2ZleyduFxyXG4gICAgICBjb25zdCB1c2VyID0gRGF0YS51c2VyLmZpbmQoe2VtYWlsfSk7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG4gICAgICAgIHJldHVybiByZXMuc2VuZChcIu2VtOuLuSDsnbTrqZTsnbzsnZgg7Jyg7KCA6rCAIOyXhuyKteuLiOuLpC5cIilcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g67mE67CA67KI7Zi4IOydvOy5mCDsl6zrtoBcclxuICAgICAgY29uc3QgaXNQYXNzd29yZE1hdGNoZWQgPSBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICBpZiAoIWlzUGFzc3dvcmRNYXRjaGVkKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDM7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKFwi67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFN0cmluZyh1c2VyLmlkKSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCEpO1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiLFxyXG4gICAgICAgIGBhY2Nlc3NfdG9rZW49JHt0b2tlbn07IHBhdGg9LztleHBpcmVzPSR7bmV3IERhdGUoRGF0ZS5ub3coKSArIDYwICogNjAgKiAyNCAqIDEwMDAgKiAzKS50b0lTT1N0cmluZygpfTtcclxuICAgICAgICBodHRwb25seWBcclxuICAgICAgKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XHJcbiAgICAgIHJldHVybiByZXMuc2VuZChlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5lbmQoKTtcclxuICB9XHJcbiAgcmVzLnN0YXR1c0NvZGUgPSA0MDU7XHJcblxyXG4gIHJldHVybiByZXMuZW5kKCk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=