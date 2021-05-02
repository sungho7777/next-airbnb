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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/signup.ts");
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

/***/ "./pages/api/auth/signup.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_data_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/data/index */ "./lib/data/index.ts");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);



// import { SignUpAPIBody } from "../../../lib/api/auth"
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  console.log("=========================");

  if (req.method === "POST") {
    const {
      email,
      firstname,
      lastname,
      password,
      birthday
    } = req.body;

    if (!email || !firstname || !lastname || !password || !birthday) {
      res.statusCode = 400;
      return res.send("필수 데이터가 없습니다.");
    }

    const userExist = _lib_data_index__WEBPACK_IMPORTED_MODULE_1__["default"].user.exist({
      email
    });
    console.log("userExist : " + userExist);

    if (userExist) {
      res.statusCode = 405;
      res.send("이미 가입된 이메일입니다.");
    }

    const users = _lib_data_index__WEBPACK_IMPORTED_MODULE_1__["default"].user.getList();
    let userId;

    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }

    const hashedPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.hashSync(password, 8);
    const user = _lib_data_index__WEBPACK_IMPORTED_MODULE_1__["default"].user.find({
      email
    });
    console.log("hashedPassword : " + hashedPassword);
    const newUser = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      birthday,
      profileImage: "/static/image/default_user_profile_image.jpg"
    };
    _lib_data_index__WEBPACK_IMPORTED_MODULE_1__["default"].user.write([...users, newUser]);
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign(String(newUser.id), process.env.JWT_SECRET);
    console.log("token : " + token);
    res.setHeader("Set-Cookie", `access_token=${token}; path=/; expires=${new Date(Date.now() + 60 * 60 * 24 * 1000 * 3).toISOString()}; httponly`);
    const newUserWithoutPassword = newUser; // delete을 사용하여 객체의 속성을 제거할 수 있다.
    // 비밀번호가 일치한다면, 유저 정보에서 password를 제거하여 보내고, 회원가입 떄와 동일하게 token을 전달하도록 한다.

    delete newUserWithoutPassword.password;
    res.statusCode = 200;
    return res.send(newUser);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIl0sIm5hbWVzIjpbIkRhdGEiLCJ1c2VyIiwiZ2V0TGlzdCIsInVzZXJzQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidXNlcnNTdHJpbmciLCJ0b1N0cmluZyIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwiZXhpc3QiLCJlbWFpbCIsInNvbWUiLCJ3cml0ZSIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJmaW5kIiwiaWQiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJwYXNzd29yZCIsImJpcnRoZGF5IiwiYm9keSIsInN0YXR1c0NvZGUiLCJzZW5kIiwidXNlckV4aXN0IiwidXNlcklkIiwibGVuZ3RoIiwiaGFzaGVkUGFzc3dvcmQiLCJiY3J5cHQiLCJoYXNoU3luYyIsIm5ld1VzZXIiLCJwcm9maWxlSW1hZ2UiLCJ0b2tlbiIsImp3dCIsInNpZ24iLCJTdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInNldEhlYWRlciIsIkRhdGUiLCJub3ciLCJ0b0lTT1N0cmluZyIsIm5ld1VzZXJXaXRob3V0UGFzc3dvcmQiLCJlbmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FB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SyxHQUFHQyxtREFBRyxDQUFDQyxJQUFKLENBQVNDLE1BQU0sQ0FBQ0wsT0FBTyxDQUFDbkIsRUFBVCxDQUFmLEVBQTZCeUIsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQXpDLENBQWQ7QUFDQXhCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVlpQixLQUF4QjtBQUVBbkIsT0FBRyxDQUFDMEIsU0FBSixDQUNFLFlBREYsRUFFRyxnQkFBZVAsS0FBTSxxQkFBb0IsSUFBSVEsSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBZixHQUFzQixDQUE1QyxFQUErQ0MsV0FBL0MsRUFBNkQsWUFGekc7QUFLQSxVQUFNQyxzQkFBZ0UsR0FBR2IsT0FBekUsQ0FqRHNCLENBbUR0QjtBQUNBOztBQUNBLFdBQU9hLHNCQUFzQixDQUFDeEIsUUFBOUI7QUFDQU4sT0FBRyxDQUFDUyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsV0FBT1QsR0FBRyxDQUFDVSxJQUFKLENBQVNPLE9BQVQsQ0FBUDtBQUNEOztBQUVEakIsS0FBRyxDQUFDUyxVQUFKLEdBQWlCLEdBQWpCO0FBRUEsU0FBT1QsR0FBRyxDQUFDK0IsR0FBSixFQUFQO0FBQ0gsQ0FqRUQsRTs7Ozs7Ozs7Ozs7QUNUQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC50c1wiKTtcbiIsImltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIlxyXG5cclxuY29uc3QgRGF0YSA9IHsgdXNlciB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiLCJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tIFwiZnNcIlxyXG5pbXBvcnQgeyBTdG9yZWRVc2VyVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy91c2VyXCJcclxuXHJcbi8vIOycoOyggCDrpqzsiqTtirgg642w7J207YSwIOu2iOufrOyYpOq4sFxyXG5jb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJzQnVmZmVyID0gcmVhZEZpbGVTeW5jKFwiZGF0YS91c2Vycy5qc29uXCIpO1xyXG4gIGNvbnN0IHVzZXJzU3RyaW5nID0gdXNlcnNCdWZmZXIudG9TdHJpbmcoKTtcclxuICBpZiAoIXVzZXJzU3RyaW5nKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGNvbnN0IHVzZXJzOiBTdG9yZWRVc2VyVHlwZVtdID0gSlNPTi5wYXJzZSh1c2Vyc1N0cmluZyk7XHJcbiAgcmV0dXJuIHVzZXJzO1xyXG59XHJcblxyXG5jb25zdCBleGlzdCA9ICh7ZW1haWx9OiB7ZW1haWw6c3RyaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJzID0gZ2V0TGlzdCgpO1xyXG4gIHJldHVybiB1c2Vycy5zb21lKCh1c2VyKSA9PiB1c2VyLmVtYWlsID09PSBlbWFpbCk7XHJcbn07XHJcblxyXG5jb25zdCB3cml0ZSA9IGFzeW5jICh1c2VyczogU3RvcmVkVXNlclR5cGVbXSkgPT4ge1xyXG4gIHdyaXRlRmlsZVN5bmMoXCJkYXRhL3VzZXJzLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodXNlcnMpKTtcclxufTtcclxuXHJcbi8vIGVtYWlsIOuYkOuKlCBpZOydmCDsnKDsoIAg67aI65+s7Jik6riwXHJcbmNvbnN0IGZpbmQgPSAoe2VtYWlsLCBpZH06IHtlbWFpbD86IHN0cmluZzsgaWQ/OiBudW1iZXJ9KSA9PiB7XHJcbiAgY29uc3QgdXNlcnMgPSBnZXRMaXN0KCk7XHJcbiAgcmV0dXJuIHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGVtYWlsIHx8IHVzZXIuaWQgPT09IGlkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge2dldExpc3QsIGV4aXN0LCB3cml0ZSwgZmluZH07IiwiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0eyBTdG9yZWRVc2VyVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy91c2VyXCJcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIlxyXG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS9pbmRleCc7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzaWdudXBBUEkgfSBmcm9tICcuLi8uLi8uLi9saWIvYXBpL2F1dGgnO1xyXG4vLyBpbXBvcnQgeyBTaWduVXBBUElCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hcGkvYXV0aFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOk5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcclxuICBcclxuXHJcbiAgaWYocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgICAgY29uc3QgeyBlbWFpbCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgcGFzc3dvcmQsIGJpcnRoZGF5IH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgIGlmICghZW1haWwgfHwgIWZpcnN0bmFtZSB8fCAhbGFzdG5hbWUgfHwgIXBhc3N3b3JkIHx8ICFiaXJ0aGRheSkge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwO1xyXG4gICAgICAgIHJldHVybiByZXMuc2VuZChcIu2VhOyImCDrjbDsnbTthLDqsIAg7JeG7Iq164uI64ukLlwiKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1c2VyRXhpc3QgPSBEYXRhLnVzZXIuZXhpc3Qoe2VtYWlsfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlckV4aXN0IDogXCIgKyB1c2VyRXhpc3QpO1xyXG5cclxuICAgICAgaWYgKHVzZXJFeGlzdCkge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG4gICAgICAgIHJlcy5zZW5kKFwi7J2066+4IOqwgOyeheuQnCDsnbTrqZTsnbzsnoXri4jri6QuXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB1c2VycyA9IERhdGEudXNlci5nZXRMaXN0KCk7XHJcbiAgICAgIGxldCB1c2VySWQ7XHJcbiAgICAgIGlmICh1c2Vycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB1c2VySWQgPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVzZXJJZCA9IHVzZXJzW3VzZXJzLmxlbmd0aCAtIDFdLmlkICsgMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIDgpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgdXNlciA9IERhdGEudXNlci5maW5kKHtlbWFpbH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImhhc2hlZFBhc3N3b3JkIDogXCIgKyBoYXNoZWRQYXNzd29yZCk7XHJcblxyXG4gICAgICBjb25zdCBuZXdVc2VyOiBTdG9yZWRVc2VyVHlwZSA9IHtcclxuICAgICAgICBpZDogdXNlcklkLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGZpcnN0bmFtZSxcclxuICAgICAgICBsYXN0bmFtZSxcclxuICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcbiAgICAgICAgYmlydGhkYXksXHJcbiAgICAgICAgcHJvZmlsZUltYWdlOiBcIi9zdGF0aWMvaW1hZ2UvZGVmYXVsdF91c2VyX3Byb2ZpbGVfaW1hZ2UuanBnXCIsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBEYXRhLnVzZXIud3JpdGUoWy4uLnVzZXJzLCBuZXdVc2VyXSk7XHJcblxyXG4gICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFN0cmluZyhuZXdVc2VyLmlkKSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRva2VuIDogXCIrIHRva2VuKTtcclxuXHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoXHJcbiAgICAgICAgXCJTZXQtQ29va2llXCIsXHJcbiAgICAgICAgYGFjY2Vzc190b2tlbj0ke3Rva2VufTsgcGF0aD0vOyBleHBpcmVzPSR7bmV3IERhdGUoRGF0ZS5ub3coKSArIDYwICogNjAgKiAyNCAqIDEwMDAgKiAzKS50b0lTT1N0cmluZygpfTsgaHR0cG9ubHlgXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBuZXdVc2VyV2l0aG91dFBhc3N3b3JkOiBQYXJ0aWFsPFBpY2s8U3RvcmVkVXNlclR5cGUsXCJwYXNzd29yZFwiPj4gPSBuZXdVc2VyO1xyXG5cclxuICAgICAgLy8gZGVsZXRl7J2EIOyCrOyaqe2VmOyXrCDqsJ3ssrTsnZgg7IaN7ISx7J2EIOygnOqxsO2VoCDsiJgg7J6I64ukLlxyXG4gICAgICAvLyDruYTrsIDrsojtmLjqsIAg7J287LmY7ZWc64uk66m0LCDsnKDsoIAg7KCV67O07JeQ7IScIHBhc3N3b3Jk66W8IOygnOqxsO2VmOyXrCDrs7TrgrTqs6AsIO2ajOybkOqwgOyehSDrloTsmYAg64+Z7J287ZWY6rKMIHRva2Vu7J2EIOyghOuLrO2VmOuPhOuhnSDtlZzri6QuXHJcbiAgICAgIGRlbGV0ZSBuZXdVc2VyV2l0aG91dFBhc3N3b3JkLnBhc3N3b3JkO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kKG5ld1VzZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG5cclxuICAgIHJldHVybiByZXMuZW5kKCk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=