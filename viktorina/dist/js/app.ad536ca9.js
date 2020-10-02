/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0761":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_109eed1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cb2a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_109eed1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_109eed1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_109eed1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "26b2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "442f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_id_183e69fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("26b2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_id_183e69fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_id_183e69fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_id_183e69fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0890d7df-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=3a8f9d7e&
var Appvue_type_template_id_3a8f9d7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"container"},[(_vm.state == "quiz")?_c('ProgressBar',{attrs:{"number":_vm.stage,"total":_vm.questions.length}}):_vm._e(),_c('transition-group',{attrs:{"name":"slide","tag":"div"}},[(_vm.state == 'start')?_c('StartScreen',{key:"start",attrs:{"bg":_vm.defaultBg,"bgMobile":_vm.defaultBgMobile,"mobile":_vm.isMobile,"title":_vm.title},on:{"start":_vm.goToQuiz}}):(_vm.state == "quiz")?_c('Question',{key:_vm.stage,attrs:{"question":_vm.currentQuestion.question,"answers":_vm.currentQuestion.answers,"correctAnswer":_vm.currentQuestion.correctAnswer,"correctText":_vm.currentQuestion.correctText,"incorrectText":_vm.currentQuestion.incorrectText,"answerType":_vm.currentQuestion.answerType,"stage":_vm.stage,"part":_vm.part,"bg":_vm.currentQuestion.bg || _vm.defaultBg,"bgMobile":_vm.currentQuestion.bgMobile || _vm.defaultBgMobile,"mobile":_vm.isMobile},on:{"answer":_vm.getAnswer,"next":_vm.next}}):(_vm.state == "results")?_c('FinalScreen',{key:"finish",attrs:{"result":_vm.testResult,"mobile":_vm.isMobile,"bg":_vm.defaultBg,"bgMobile":_vm.defaultBgMobile},on:{"restart":_vm.restart}}):_vm._e()],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=3a8f9d7e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0890d7df-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Question.vue?vue&type=template&id=66ec3a58&scoped=true&
var Questionvue_type_template_id_66ec3a58_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{key:_vm.stage,staticClass:"fullscreen question-slide",style:(_vm.getBg),attrs:{"name":"slide","tag":"div"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.part == 'question'),expression:"part == 'question'"}],key:"part__question",staticClass:"question-part"},[_c('div',{staticClass:"question-header"},[_vm._v(_vm._s(_vm.question))]),_c('div',{staticClass:"question-items"},_vm._l((_vm.answers),function(item,index){return _c('div',{key:index,staticClass:"answer-item"},[((_vm.answerType)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userAnswer),expression:"userAnswer"}],key:index,attrs:{"name":"question","id":item,"placeholder":item,"type":"checkbox"},domProps:{"value":item,"checked":Array.isArray(_vm.userAnswer)?_vm._i(_vm.userAnswer,item)>-1:(_vm.userAnswer)},on:{"change":[function($event){var $$a=_vm.userAnswer,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=item,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.userAnswer=$$a.concat([$$v]))}else{$$i>-1&&(_vm.userAnswer=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.userAnswer=$$c}},function($event){$event.preventDefault();return _vm.sendUserData($event)}]}}):((_vm.answerType)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userAnswer),expression:"userAnswer"}],key:index,attrs:{"name":"question","id":item,"placeholder":item,"type":"radio"},domProps:{"value":item,"checked":_vm._q(_vm.userAnswer,item)},on:{"change":[function($event){_vm.userAnswer=item},function($event){$event.preventDefault();return _vm.sendUserData($event)}]}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userAnswer),expression:"userAnswer"}],key:index,attrs:{"name":"question","id":item,"placeholder":item,"type":_vm.answerType},domProps:{"value":item,"value":(_vm.userAnswer)},on:{"change":function($event){$event.preventDefault();return _vm.sendUserData($event)},"input":function($event){if($event.target.composing){ return; }_vm.userAnswer=$event.target.value}}}),_c('label',{attrs:{"for":item}},[_c('div',{staticClass:"num"},[_vm._v(_vm._s(index + 1))]),_c('div',{staticClass:"question-text"},[_vm._v(_vm._s(item))])])])}),0)]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.part == 'answer'),expression:"part == 'answer'"}],key:"part__answer",staticClass:"answer-part"},[_c('div',{staticClass:"answer-header"},[_vm._v(_vm._s(_vm.answerHeader))]),_c('div',{staticClass:"answer-text"},[_vm._v(_vm._s(_vm.answerText))]),_c('div',{staticClass:"btn-container"},[_c('button',{staticClass:"btn",on:{"click":function($event){$event.preventDefault();return _vm.goNext($event)}}},[_c('span',[_vm._v("Далее")])])])])])}
var Questionvue_type_template_id_66ec3a58_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Question.vue?vue&type=template&id=66ec3a58&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Question.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Questionvue_type_script_lang_js_ = ({
  name: "Question",
  props: ['question', 'answers', 'answerType', 'stage', 'bg', 'bgMobile', 'mobile', 'part', 'correctAnswer', 'incorrectText', 'correctText'],
  data: function data() {
    return {
      userAnswer: [],
      animation: false
    };
  },
  computed: {
    getBg: function getBg() {
      var addr = this.mobile ? this.bgMobile : this.bg;
      return {
        'background-image': "url(".concat(addr, ")")
      };
    },
    answerHeader: function answerHeader() {
      return this.isCorrectAnswer() ? 'Верный ответ' : 'Неверный ответ';
    },
    answerText: function answerText() {
      return this.isCorrectAnswer() ? this.correctText : this.incorrectText;
    }
  },
  methods: {
    sendUserData: function sendUserData() {
      this.$emit('answer', {
        answer: this.userAnswer
      });
    },
    goNext: function goNext() {
      this.$emit('next');
    },
    isCorrectAnswer: function isCorrectAnswer() {
      if (Array.isArray(this.userAnswer)) {
        return this.correctAnswer.join() == this.userAnswer.join();
      } else {
        return this.correctAnswer.indexOf(this.userAnswer) !== -1;
      }
    }
  },
  updated: function updated() {}
});
// CONCATENATED MODULE: ./src/components/Question.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Questionvue_type_script_lang_js_ = (Questionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Question.vue?vue&type=style&index=0&id=66ec3a58&scoped=true&lang=css&
var Questionvue_type_style_index_0_id_66ec3a58_scoped_true_lang_css_ = __webpack_require__("77a0");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Question.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Questionvue_type_script_lang_js_,
  Questionvue_type_template_id_66ec3a58_scoped_true_render,
  Questionvue_type_template_id_66ec3a58_scoped_true_staticRenderFns,
  false,
  null,
  "66ec3a58",
  null
  
)

/* harmony default export */ var Question = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0890d7df-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StartScreen.vue?vue&type=template&id=183e69fd&scoped=true&
var StartScreenvue_type_template_id_183e69fd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fullscreen",style:(_vm.getBg)},[_c('div',{staticClass:"slide-title"},[_c('span',[_vm._v(_vm._s(_vm.title))])]),_c('button',{staticClass:"btn",on:{"click":function($event){$event.preventDefault();return _vm.start($event)}}},[_c('span',[_vm._v("Начать тест")])])])}
var StartScreenvue_type_template_id_183e69fd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/StartScreen.vue?vue&type=template&id=183e69fd&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StartScreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var StartScreenvue_type_script_lang_js_ = ({
  name: "StartScreen",
  props: ['bg', 'bgMobile', 'mobile', 'title'],
  data: function data() {
    return {};
  },
  methods: {
    start: function start() {
      this.$emit('start');
    }
  },
  computed: {
    getBg: function getBg() {
      var addr = this.mobile ? this.bgMobile : this.bg;
      return {
        'background-image': "url(".concat(addr, ")")
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/StartScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StartScreenvue_type_script_lang_js_ = (StartScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/StartScreen.vue?vue&type=style&index=0&id=183e69fd&scoped=true&lang=css&
var StartScreenvue_type_style_index_0_id_183e69fd_scoped_true_lang_css_ = __webpack_require__("442f");

// CONCATENATED MODULE: ./src/components/StartScreen.vue






/* normalize component */

var StartScreen_component = Object(componentNormalizer["a" /* default */])(
  components_StartScreenvue_type_script_lang_js_,
  StartScreenvue_type_template_id_183e69fd_scoped_true_render,
  StartScreenvue_type_template_id_183e69fd_scoped_true_staticRenderFns,
  false,
  null,
  "183e69fd",
  null
  
)

/* harmony default export */ var StartScreen = (StartScreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0890d7df-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FinalScreen.vue?vue&type=template&id=757d296e&scoped=true&
var FinalScreenvue_type_template_id_757d296e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fullscreen",style:(_vm.getBg)},[_c('div',{staticClass:"final-slide"},[_c('div',{staticClass:"slide-title1"},[_vm._v("Ваш результат:")]),_c('div',{staticClass:"slide-title2"},[_c('span',[_vm._v(_vm._s(_vm.result.title))])]),_c('div',{staticClass:"slide-text",domProps:{"innerHTML":_vm._s(_vm.result.html)}}),_c('button',{staticClass:"btn",on:{"click":function($event){$event.preventDefault();return _vm.restart($event)}}},[_vm._v("Пройти еще раз")])])])}
var FinalScreenvue_type_template_id_757d296e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FinalScreen.vue?vue&type=template&id=757d296e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FinalScreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FinalScreenvue_type_script_lang_js_ = ({
  name: "FinalScreen",
  props: ['result', 'bg', 'bgMobile', 'mobile'],
  data: function data() {
    return {
      isCorrectClass: []
    };
  },
  computed: {
    getBg: function getBg() {
      var addr = this.mobile ? this.bgMobile : this.bg;
      return {
        'background-image': "url(".concat(addr, ")")
      };
    }
  },
  methods: {
    restart: function restart() {
      this.$emit('restart');
    }
  }
});
// CONCATENATED MODULE: ./src/components/FinalScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FinalScreenvue_type_script_lang_js_ = (FinalScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FinalScreen.vue?vue&type=style&index=0&id=757d296e&scoped=true&lang=css&
var FinalScreenvue_type_style_index_0_id_757d296e_scoped_true_lang_css_ = __webpack_require__("eed9");

// CONCATENATED MODULE: ./src/components/FinalScreen.vue






/* normalize component */

var FinalScreen_component = Object(componentNormalizer["a" /* default */])(
  components_FinalScreenvue_type_script_lang_js_,
  FinalScreenvue_type_template_id_757d296e_scoped_true_render,
  FinalScreenvue_type_template_id_757d296e_scoped_true_staticRenderFns,
  false,
  null,
  "757d296e",
  null
  
)

/* harmony default export */ var FinalScreen = (FinalScreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0890d7df-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProgressBar.vue?vue&type=template&id=109eed1a&scoped=true&
var ProgressBarvue_type_template_id_109eed1a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"progress-root"}},_vm._l((_vm.total),function(n){return _c('div',{key:n,staticClass:"progress-element",class:{active: n <= (_vm.number + 1) }})}),0)}
var ProgressBarvue_type_template_id_109eed1a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ProgressBar.vue?vue&type=template&id=109eed1a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProgressBar.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var ProgressBarvue_type_script_lang_js_ = ({
  name: "ProgressBar",
  props: ['number', 'total']
});
// CONCATENATED MODULE: ./src/components/ProgressBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProgressBarvue_type_script_lang_js_ = (ProgressBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ProgressBar.vue?vue&type=style&index=0&id=109eed1a&scoped=true&lang=css&
var ProgressBarvue_type_style_index_0_id_109eed1a_scoped_true_lang_css_ = __webpack_require__("0761");

// CONCATENATED MODULE: ./src/components/ProgressBar.vue






/* normalize component */

var ProgressBar_component = Object(componentNormalizer["a" /* default */])(
  components_ProgressBarvue_type_script_lang_js_,
  ProgressBarvue_type_template_id_109eed1a_scoped_true_render,
  ProgressBarvue_type_template_id_109eed1a_scoped_true_staticRenderFns,
  false,
  null,
  "109eed1a",
  null
  
)

/* harmony default export */ var ProgressBar = (ProgressBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'app',
  components: {
    "ProgressBar": ProgressBar,
    "Question": Question,
    "StartScreen": StartScreen,
    "FinalScreen": FinalScreen
  },
  data: function data() {
    return {
      defaultBg: 'img/pictures-1.jpg',
      defaultBgMobile: 'img/pictures_mobile-1.jpg',
      questions: [],
      resultTexts: [],
      stage: 0,
      state: 'start',
      part: "question",
      title: 'Насколько хорошо вы знаете Арктику?',
      timeout: null
    };
  },
  methods: {
    goToQuiz: function goToQuiz() {
      this.stage = 0;
      this.state = 'quiz';
      window.sendGA('click_begin');
    },
    getAnswer: function getAnswer(data) {
      var object = this.questions[this.stage];
      window.sendGA('quest_' + (this.stage + 1));

      if (Array.isArray(data.answer)) {
        object.userAnswer = data.answer;
      } else {
        object.userAnswer.push(data.answer);
      }

      object.userAnswer.sort();
      object.correctAnswer.sort();
      this.part = "answer";
      this.timeout = setTimeout(this.next, 10000);
    },
    next: function next() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }

      if (this.stage == this.questions.length - 1) {
        this.state = 'results';
      } else {
        this.part = "question";
        this.stage++;
      }
    },
    restart: function restart() {
      window.sendGA('click_again');
      this.stage = 0;
      this.part = "question";
      this.state = 'quiz';
      this.questions.forEach(function (item) {
        item.userAnswer.length = 0;
      });
    },
    checkAnswer: function checkAnswer(question) {
      if (Array.isArray(question.userAnswer)) {
        return question.correctAnswer.join() == question.userAnswer.join();
      } else {
        return question.correctAnswer.indexOf(question.userAnswer) !== -1;
      }
    }
  },
  computed: {
    currentQuestion: function currentQuestion() {
      return this.questions[this.stage] || {};
    },
    isMobile: function isMobile() {
      var isMobileVar = {
        Android: function Android() {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function BlackBerry() {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function iOS() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function Opera() {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function Windows() {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function any() {
          return isMobileVar.Android() || isMobileVar.BlackBerry() || isMobileVar.iOS() || isMobileVar.Opera() || isMobileVar.Windows();
        }
      };
      return isMobileVar.any();
    },
    correctAnswersCount: function correctAnswersCount() {
      return this.questions.filter(this.checkAnswer).length;
    },
    testResult: function testResult() {
      var _this = this;

      return this.resultTexts.filter(function (v) {
        return v.from <= _this.correctAnswersCount && _this.correctAnswersCount <= v.to;
      })[0];
    }
  },
  created: function created() {
    var testData = window.testData;

    if (typeof testData !== 'undefined') {
      if (Array.isArray(testData.questions) && testData.questions.length) {
        this.questions = testData.questions;
      }

      if (Array.isArray(testData.resultTexts) && testData.resultTexts.length) {
        this.resultTexts = testData.resultTexts;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_3a8f9d7e_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./src/main.js






vue_runtime_esm["a" /* default */].config.productionTip = false;
new vue_runtime_esm["a" /* default */]({
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ }),

/***/ "5978":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6c86":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "77a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_style_index_0_id_66ec3a58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c86");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_style_index_0_id_66ec3a58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_style_index_0_id_66ec3a58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_style_index_0_id_66ec3a58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "85ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cb2a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "eed9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalScreen_vue_vue_type_style_index_0_id_757d296e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5978");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalScreen_vue_vue_type_style_index_0_id_757d296e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalScreen_vue_vue_type_style_index_0_id_757d296e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalScreen_vue_vue_type_style_index_0_id_757d296e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
//# sourceMappingURL=app.ad536ca9.js.map