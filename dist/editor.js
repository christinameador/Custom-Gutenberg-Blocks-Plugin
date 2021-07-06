/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/button-block/index.js":
/*!******************************************!*\
  !*** ./src/blocks/button-block/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;
registerBlockType('tophat-blocks/button-block', {
  title: __('Button Block', 'tophat-blocks'),
  description: __('A Custom Button Block', 'tophat-blocks'),
  category: 'design',
  icon: 'admin-network',
  keywords: [__('button', 'tophat-blocks'), __('link', 'tophat-blocks'), __('custom', 'tophat-blocks')],
  edit: function edit() {
    return el('p', null, 'Editor');
  },
  save: function save() {
    return el('p', null, 'Saved content');
    ;
  }
});

/***/ }),

/***/ "./src/blocks/tophat-button-block/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/tophat-button-block/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/src/blocks/tophat-button-block/index.js: Identifier '__' has already been declared. (7:8)\n\n\u001b[0m \u001b[90m  5 |\u001b[39m \u001b[36mimport\u001b[39m { \u001b[33mButton\u001b[39m\u001b[33m,\u001b[39m \u001b[33mToolbar\u001b[39m\u001b[33m,\u001b[39m \u001b[33mTooltip\u001b[39m\u001b[33m,\u001b[39m \u001b[33mPanelBody\u001b[39m\u001b[33m,\u001b[39m \u001b[33mPanelRow\u001b[39m\u001b[33m,\u001b[39m \u001b[33mFormToggle\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m'@wordpress/components'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  6 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 |\u001b[39m \u001b[36mconst\u001b[39m { __ } \u001b[33m=\u001b[39m wp\u001b[33m.\u001b[39mi18n\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m \u001b[36mconst\u001b[39m { registerBlockType\u001b[33m,\u001b[39m \u001b[33mBlockAlignmentToolbar\u001b[39m\u001b[33m,\u001b[39m \u001b[33mInspectorControls\u001b[39m\u001b[33m,\u001b[39m \u001b[33mRichText\u001b[39m\u001b[33m,\u001b[39m \u001b[33mAlignmentToolbar\u001b[39m\u001b[33m,\u001b[39m \u001b[33mBlockControls\u001b[39m } \u001b[33m=\u001b[39m wp\u001b[33m.\u001b[39mblocks\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m \u001b[36mconst\u001b[39m { \u001b[33mButton\u001b[39m\u001b[33m,\u001b[39m \u001b[33mToolbar\u001b[39m\u001b[33m,\u001b[39m \u001b[33mTooltip\u001b[39m\u001b[33m,\u001b[39m \u001b[33mPanelBody\u001b[39m\u001b[33m,\u001b[39m \u001b[33mPanelRow\u001b[39m\u001b[33m,\u001b[39m \u001b[33mFormToggle\u001b[39m } \u001b[33m=\u001b[39m wp\u001b[33m.\u001b[39mcomponents\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m\u001b[0m\n    at Object._raise (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:816:17)\n    at Object.raiseWithData (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:809:17)\n    at Object.raise (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:770:17)\n    at ScopeHandler.checkRedeclarationInScope (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:1425:12)\n    at ScopeHandler.declareName (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:1391:12)\n    at Object.checkLVal (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:10428:24)\n    at Object.checkLVal (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:10444:16)\n    at Object.parseVarId (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:13226:10)\n    at Object.parseVar (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:13201:12)\n    at Object.parseVarStatement (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:13018:10)\n    at Object.parseStatementContent (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:12601:21)\n    at Object.parseStatement (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:12534:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:13123:25)\n    at Object.parseBlockBody (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:13114:10)\n    at Object.parseProgram (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:12457:10)\n    at Object.parseTopLevel (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:12448:25)\n    at Object.parse (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:14175:10)\n    at parse (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/parser/lib/index.js:14227:38)\n    at parser (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/core/lib/transformation/normalize-file.js:82:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/core/lib/transformation/index.js:29:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/@babel/core/lib/transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/gensync/index.js:261:32)\n    at /Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/christinameador/Code/playground/site/web/app/plugins/top-hat-plugin/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_button_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/button-block */ "./src/blocks/button-block/index.js");
/* harmony import */ var _blocks_button_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_block__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_tophat_button_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/tophat-button-block */ "./src/blocks/tophat-button-block/index.js");



/***/ })

/******/ });
//# sourceMappingURL=editor.js.map