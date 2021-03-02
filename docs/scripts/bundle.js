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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function getGridSize() {
    return (window.innerWidth < 480) ? 1 :
            (window.innerWidth < 720) ? 2 :
            (window.innerWidth < 1140) ? 3 : 4;
}
function throttle(f, t) {
    return function (args) {
      let previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall === undefined // function is being called for the first time
          || (this.lastCall - previousCall) > t) { // throttle time has elapsed
        f(args);
      }
    }
  }

$(window).load(function(){

    $('.js-mult-slider').flexslider({
        animation: "slide"
    });
    $('.js-mult-buy-slider').flexslider({
        animation: "slide",
        itemWidth: 229,
        itemMargin: 40,
        controlNav: false,
        prevText: "",
        nextText: "",
        minItems: getGridSize(),
        maxItems: getGridSize()
    });
    $(document).on('click','.js-product-item', function(e){
        e.preventDefault();
        let ref = $(this).attr('href')
        $('.js-product-description').removeClass('open');
        $(ref).addClass('open');
    });
    $(document).on('click','.js-product-description-close', function(e){
        e.preventDefault();
        $('.js-product-description').removeClass('open');
    });
    $(document).on('click','.js-hide-block', function(e){
        e.preventDefault();
        let ref = $(this).data('block');
        $('section').not('.'+ref).slideDown('slow');
        $('section.' + ref).slideToggle('slow');
    });
    var clY =  0.5;
    var clX =  0.5;
    if ($('.js-parallax').length){
        window.addEventListener('scroll', parallax);
        window.addEventListener('mousemove', parallax);
    }

    function parallax(e){
        let scroll = $(window).scrollTop();
        let height = $(window).height(); 
        clY = e.pageY ? e.pageY / window.innerHeight : clY;
        clX = e.pageX ? e.pageX / window.innerWidth : clX;
        $('.js-parallax').each(function(){
            $this = $(this);
            let offset = $this.offset();
            if ($this.hasClass('mod-p-1')){
                $this.css('transform', 'translate3d('+(clX-0.5)*50+'px, '+((-scroll+(offset.top+height)/2)*0.12+(clY-0.5)*30)+'px, 0)');
                return;
            }
            if ($this.hasClass('mod-p-2')){
                $this.css('transform', 'translate3d('+(clX-0.5)*30+'px, '+((-scroll+(offset.top+height)/2)*0.08+(clY-0.5)*20)+'px, 0)');
                return;
            }
            if ($this.hasClass('mod-p-3')){
                $this.css('transform', 'translate3d('+(clX-0.5)*10+'px, '+((-scroll+(offset.top+height)/2)*0.04+(clY-0.5)*10)+'px, 0)');
                return;
            }
            $this.css('transform', 'translate3d('+(clX-0.5)*10+'px, '+(0+(clY-0.5)*10)+'px, 0)');
        });

    }
    
    $(document).on('click', function(e){
        var element = $('.js-product-description');
        var parent = $('.js-product-item');
        if (!element.is(e.target) && element.has(e.target).length === 0 && parent.has(e.target).length === 0){
            element.removeClass('open');
        }
    });
});

/***/ })
/******/ ]);