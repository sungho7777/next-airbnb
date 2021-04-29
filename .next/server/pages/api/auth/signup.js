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
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data */ "./lib/data/index.ts");



/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  //* 계정 생성하기
  if (req.method === "POST") {
    //* 값을 받았는지 확인
    const {
      body
    } = req;
    const {
      email,
      firstname,
      lastname,
      password,
      birthday
    } = body;

    if (!email || !firstname || !lastname || !password || !birthday) {
      res.statusCode = 400;
      return res.send("필수 데이터가 없습니다.");
    }

    const hashedPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.hashSync(password, 8);
    const users = await _lib_data__WEBPACK_IMPORTED_MODULE_2__["default"].user.getList();
    let userId;

    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }

    const newUser = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      birthday,
      profileImage: "/public/staic/image/user/default_user_profile_image.jpg"
    };
    _lib_data__WEBPACK_IMPORTED_MODULE_2__["default"].user.write([...users, newUser]);
    const userExists = await _lib_data__WEBPACK_IMPORTED_MODULE_2__["default"].user.exist({
      email
    });

    if (userExists) {
      res.statusCode = 409;
      return res.send("이미 가입한 이메일 입니다.");
    }

    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign(String(newUser.id), process.env.JWT_SECRETI);
    res.setHeader("Set-Cookie", `access_token=${token}; path=/; expires=${new Date(Date.now() + 60 * 60 * 24 * 1000 * 3 //3일
    )}; httponly`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIl0sIm5hbWVzIjpbIkRhdGEiLCJ1c2VyIiwiZ2V0TGlzdCIsInVzZXJCdWZmZXIiLCJyZWFkRmlsZVN5bmMiLCJ1c2Vyc1N0cmluZyIsInRvU3RyaW5nIiwidXNlcnMiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImVtYWlsIiwic29tZSIsIndyaXRlIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsImZpbmQiLCJpZCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInBhc3N3b3JkIiwiYmlydGhkYXkiLCJzdGF0dXNDb2RlIiwic2VuZCIsImhhc2hlZFBhc3N3b3JkIiwiYmNyeXB0IiwiaGFzaFN5bmMiLCJ1c2VySWQiLCJsZW5ndGgiLCJuZXdVc2VyIiwicHJvZmlsZUltYWdlIiwidXNlckV4aXN0cyIsInRva2VuIiwiand0Iiwic2lnbiIsIlN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUSSIsInNldEhlYWRlciIsIkRhdGUiLCJub3ciLCJlbmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsSUFBSSxHQUFHO0FBQUNDLHFEQUFJQTtBQUFMLENBQWI7QUFFZUQsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQSxNQUFNRSxPQUFPLEdBQUMsTUFBSTtBQUNkLFFBQU1DLFVBQVUsR0FBR0MsdURBQVksQ0FBQyxpQkFBRCxDQUEvQjtBQUNBLFFBQU1DLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxRQUFYLEVBQXBCOztBQUNBLE1BQUksQ0FBQ0QsV0FBTCxFQUFpQjtBQUNiLFdBQU8sRUFBUDtBQUNIOztBQUNELFFBQU1FLEtBQXVCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixXQUFYLENBQWhDO0FBQ0EsU0FBT0UsS0FBUDtBQUNILENBUkQsQyxDQVVBOzs7QUFDQSxNQUFNRyxLQUFLLEdBQUMsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBMEI7QUFDbEMsUUFBTUosS0FBSyxHQUFDTCxPQUFPLEVBQW5CO0FBQ0EsU0FBT0ssS0FBSyxDQUFDSyxJQUFOLENBQVlYLElBQUQsSUFBUUEsSUFBSSxDQUFDVSxLQUFMLEtBQWFBLEtBQWhDLENBQVA7QUFDSCxDQUhELEMsQ0FLQTs7O0FBQ0EsTUFBTUUsS0FBSyxHQUFDLE1BQU1OLEtBQU4sSUFBK0I7QUFDdkNPLDBEQUFhLENBQUMsaUJBQUQsRUFBb0JOLElBQUksQ0FBQ08sU0FBTCxDQUFlUixLQUFmLENBQXBCLENBQWI7QUFDSCxDQUZELEMsQ0FJQTs7O0FBQ0EsTUFBTVMsSUFBSSxHQUFHLENBQUM7QUFBRUwsT0FBRjtBQUFTTTtBQUFULENBQUQsS0FBb0Q7QUFDN0QsUUFBTVYsS0FBSyxHQUFHTCxPQUFPLEVBQXJCO0FBQ0EsU0FBT0ssS0FBSyxDQUFDUyxJQUFOLENBQVlmLElBQUQsSUFBVUEsSUFBSSxDQUFDVSxLQUFMLEtBQWVBLEtBQWYsSUFBd0JWLElBQUksQ0FBQ2dCLEVBQUwsS0FBWUEsRUFBekQsQ0FBUDtBQUNILENBSEQ7O0FBTWU7QUFBQ2YsU0FBRDtBQUFVUSxPQUFWO0FBQWlCRyxPQUFqQjtBQUF3Qkc7QUFBeEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSWUsc0VBQU9FLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2hFO0FBQ0EsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFFdkI7QUFDQSxVQUFNO0FBQ0ZDO0FBREUsUUFJRkgsR0FKSjtBQU9BLFVBQU07QUFBRVAsV0FBRjtBQUFTVyxlQUFUO0FBQW9CQyxjQUFwQjtBQUE4QkMsY0FBOUI7QUFBd0NDO0FBQXhDLFFBQXFESixJQUEzRDs7QUFDQSxRQUFJLENBQUNWLEtBQUQsSUFBVSxDQUFDVyxTQUFYLElBQXdCLENBQUNDLFFBQXpCLElBQXFDLENBQUNDLFFBQXRDLElBQWtELENBQUNDLFFBQXZELEVBQWlFO0FBQzdETixTQUFHLENBQUNPLFVBQUosR0FBaUIsR0FBakI7QUFDQSxhQUFPUCxHQUFHLENBQUNRLElBQUosQ0FBUyxlQUFULENBQVA7QUFDSDs7QUFFRCxVQUFNQyxjQUFjLEdBQUdDLCtDQUFNLENBQUNDLFFBQVAsQ0FBZ0JOLFFBQWhCLEVBQTBCLENBQTFCLENBQXZCO0FBRUEsVUFBTWpCLEtBQUssR0FBRyxNQUFNUCxpREFBSSxDQUFDQyxJQUFMLENBQVVDLE9BQVYsRUFBcEI7QUFDQSxRQUFJNkIsTUFBSjs7QUFDQSxRQUFHeEIsS0FBSyxDQUFDeUIsTUFBTixLQUFlLENBQWxCLEVBQW9CO0FBQ2hCRCxZQUFNLEdBQUMsQ0FBUDtBQUNILEtBRkQsTUFFSztBQUNEQSxZQUFNLEdBQUN4QixLQUFLLENBQUNBLEtBQUssQ0FBQ3lCLE1BQU4sR0FBYSxDQUFkLENBQUwsQ0FBc0JmLEVBQXRCLEdBQTBCLENBQWpDO0FBQ0g7O0FBQ0QsVUFBTWdCLE9BQXNCLEdBQUM7QUFDekJoQixRQUFFLEVBQUNjLE1BRHNCO0FBRXpCcEIsV0FGeUI7QUFHekJXLGVBSHlCO0FBSXpCQyxjQUp5QjtBQUt6QkMsY0FBUSxFQUFFSSxjQUxlO0FBTXpCSCxjQU55QjtBQU96QlMsa0JBQVksRUFBQztBQVBZLEtBQTdCO0FBVUFsQyxxREFBSSxDQUFDQyxJQUFMLENBQVVZLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFHTixLQUFKLEVBQVcwQixPQUFYLENBQWhCO0FBRUEsVUFBTUUsVUFBVSxHQUFHLE1BQU1uQyxpREFBSSxDQUFDQyxJQUFMLENBQVVTLEtBQVYsQ0FBZ0I7QUFBRUM7QUFBRixLQUFoQixDQUF6Qjs7QUFDQSxRQUFJd0IsVUFBSixFQUFnQjtBQUNaaEIsU0FBRyxDQUFDTyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsYUFBT1AsR0FBRyxDQUFDUSxJQUFKLENBQVMsaUJBQVQsQ0FBUDtBQUNIOztBQUVELFVBQU1TLEtBQUssR0FBR0MsbURBQUcsQ0FBQ0MsSUFBSixDQUFTQyxNQUFNLENBQUNOLE9BQU8sQ0FBQ2hCLEVBQVQsQ0FBZixFQUE2QnVCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUF6QyxDQUFkO0FBQ0F2QixPQUFHLENBQUN3QixTQUFKLENBQ0ksWUFESixFQUVLLGdCQUFlUCxLQUFNLHFCQUFvQixJQUFJUSxJQUFKLENBQ3RDQSxJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBZixHQUFzQixDQURHLENBQ0Q7QUFEQyxLQUV4QyxZQUpOO0FBU0EsV0FBTzFCLEdBQUcsQ0FBQzJCLEdBQUosRUFBUDtBQUNIOztBQUdEM0IsS0FBRyxDQUFDTyxVQUFKLEdBQWlCLEdBQWpCO0FBRUEsU0FBT1AsR0FBRyxDQUFDMkIsR0FBSixFQUFQO0FBQ0gsQ0E5REQsRTs7Ozs7Ozs7Ozs7QUNSQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC50c1wiKTtcbiIsImltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbmNvbnN0IERhdGEgPSB7dXNlcn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhOyIsImltcG9ydCB7cmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHtTdG9yZWRVc2VyVHlwZX0gZnJvbSBcIi4uLy4uL3R5cGVzL3VzZXJcIjtcclxuXHJcbi8vICog7Jyg7KCAIOumrOyKpO2KuCDrjbDsnbTthLAg67aI65+s7Jik6riwXHJcbmNvbnN0IGdldExpc3Q9KCk9PntcclxuICAgIGNvbnN0IHVzZXJCdWZmZXIgPSByZWFkRmlsZVN5bmMoXCJkYXRhL3VzZXJzLmpzb25cIik7XHJcbiAgICBjb25zdCB1c2Vyc1N0cmluZyA9IHVzZXJCdWZmZXIudG9TdHJpbmcoKTtcclxuICAgIGlmICghdXNlcnNTdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVzZXJzOiBTdG9yZWRVc2VyVHlwZVtdID0gSlNPTi5wYXJzZSh1c2Vyc1N0cmluZyk7XHJcbiAgICByZXR1cm4gdXNlcnM7XHJcbn07XHJcblxyXG4vLyAqIGVtYWls7J2YIOycoOyggOqwgCDsnojripTsp4Ag7ZmV7J247ZWY6riwLlxyXG5jb25zdCBleGlzdD0oe2VtYWlsfTp7ZW1haWw6c3RyaW5nfSk9PntcclxuICAgIGNvbnN0IHVzZXJzPWdldExpc3QoKTtcclxuICAgIHJldHVybiB1c2Vycy5zb21lKCh1c2VyKT0+dXNlci5lbWFpbD09PWVtYWlsKTtcclxufTtcclxuXHJcbi8vICog7Jyg7KCAIOumrOyKpO2KuCDsoIDsnqXtlZjquLBcclxuY29uc3Qgd3JpdGU9YXN5bmModXNlcnM6U3RvcmVkVXNlclR5cGVbXSk9PntcclxuICAgIHdyaXRlRmlsZVN5bmMoXCJkYXRhL3VzZXJzLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodXNlcnMpKTtcclxufTtcclxuXHJcbi8vICogZW1haWwg65iQ64qUIGlkIOydmCDsnKDsoIAg67aI65+s7Jik6riwXHJcbmNvbnN0IGZpbmQgPSAoeyBlbWFpbCwgaWQgfTogeyBlbWFpbD86IHN0cmluZzsgaWQ/OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlcnMgPSBnZXRMaXN0KCk7XHJcbiAgICByZXR1cm4gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5lbWFpbCA9PT0gZW1haWwgfHwgdXNlci5pZCA9PT0gaWQpO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtnZXRMaXN0LCBleGlzdCwgd3JpdGUsIGZpbmR9OyIsImltcG9ydCB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vLi4vLi4vbGliL2RhdGFcIjtcclxuaW1wb3J0IHsgU2luZ1VwQVBJQm9keSB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9hdXRoXCI7XHJcbmltcG9ydCB7IFN0b3JlZFVzZXJUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3VzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgLy8qIOqzhOyglSDsg53shLHtlZjquLBcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyog6rCS7J2EIOuwm+yVmOuKlOyngCDtmZXsnbhcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgfToge1xyXG4gICAgICAgICAgICBib2R5OiBTaW5nVXBBUElCb2R5O1xyXG4gICAgICAgIH0gPSByZXE7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIGZpcnN0bmFtZSwgbGFzdG5hbWUsIHBhc3N3b3JkLCBiaXJ0aGRheSB9ID0gYm9keTtcclxuICAgICAgICBpZiAoIWVtYWlsIHx8ICFmaXJzdG5hbWUgfHwgIWxhc3RuYW1lIHx8ICFwYXNzd29yZCB8fCAhYmlydGhkYXkpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDA7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc2VuZChcIu2VhOyImCDrjbDsnbTthLDqsIAg7JeG7Iq164uI64ukLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCA4KTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBEYXRhLnVzZXIuZ2V0TGlzdCgpO1xyXG4gICAgICAgIGxldCB1c2VySWQ7XHJcbiAgICAgICAgaWYodXNlcnMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIHVzZXJJZD0xO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB1c2VySWQ9dXNlcnNbdXNlcnMubGVuZ3RoLTFdLmlkICsxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdVc2VyOlN0b3JlZFVzZXJUeXBlPXtcclxuICAgICAgICAgICAgaWQ6dXNlcklkLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICBsYXN0bmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG4gICAgICAgICAgICBiaXJ0aGRheSxcclxuICAgICAgICAgICAgcHJvZmlsZUltYWdlOlwiL3B1YmxpYy9zdGFpYy9pbWFnZS91c2VyL2RlZmF1bHRfdXNlcl9wcm9maWxlX2ltYWdlLmpwZ1wiLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIERhdGEudXNlci53cml0ZShbLi4udXNlcnMsIG5ld1VzZXJdKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IERhdGEudXNlci5leGlzdCh7IGVtYWlsIH0pO1xyXG4gICAgICAgIGlmICh1c2VyRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA5O1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoXCLsnbTrr7gg6rCA7J6F7ZWcIOydtOuplOydvCDsnoXri4jri6QuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihTdHJpbmcobmV3VXNlci5pZCksIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRJKTtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKFxyXG4gICAgICAgICAgICBcIlNldC1Db29raWVcIixcclxuICAgICAgICAgICAgYGFjY2Vzc190b2tlbj0ke3Rva2VufTsgcGF0aD0vOyBleHBpcmVzPSR7bmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICBEYXRlLm5vdygpICsgNjAgKiA2MCAqIDI0ICogMTAwMCAqIDMgLy8z7J28XHJcbiAgICAgICAgICAgICl9OyBodHRwb25seWBcclxuICAgICAgICApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiByZXMuZW5kKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG5cclxuICAgIHJldHVybiByZXMuZW5kKCk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9