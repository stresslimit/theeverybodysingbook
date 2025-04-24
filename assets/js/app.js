/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_js/index.js":
/*!**********************!*\
  !*** ./_js/index.js ***!
  \**********************/
/***/ (() => {

eval("// import _ from '_'\n\nwindow.addEventListener('load', function (e) {\n  externalLinks();\n  song();\n});\nfunction externalLinks() {\n  var a = document.querySelectorAll('a');\n  a.forEach(function (el) {\n    if (el.host != window.location.host) el.target = \"_blank\";\n  });\n}\nfunction song() {\n  var scriptURL = 'https://script.google.com/macros/s/AKfycbz4i7lqu9TNvJho_0HB26ZmzbDeQBnJzDeHkAkl4JNJyDU2oq2QKwd-yRuYhqY_R7UV/exec';\n  var form = document.forms['submit-to-google-sheet'];\n  console.log(form);\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    form.submitbutton.disabled = true;\n    fetch(scriptURL, {\n      method: 'POST',\n      body: new FormData(form)\n    }).then(function (response) {\n      console.log('Success!', response);\n      form.innerHTML = 'Thanks!!';\n    })[\"catch\"](function (error) {\n      return console.error('Error!', error.message);\n    });\n  });\n}\n\n//# sourceURL=webpack://theeverybodysingbook/./_js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_js/index.js"]();
/******/ 	
/******/ })()
;