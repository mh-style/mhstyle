/*=============tab============*/
try {
	var tabs = document.querySelectorAll(".mh-tab-s1 .mh-tabs ul li");
	var tabs_wrap = document.querySelectorAll(".mh-tab-s1 .mh-tab-content .mh-tab-wrap");
	tabs.forEach(function (tab, tab_index) {
		tab.addEventListener("click", function () {
			tabs.forEach(function (tab) {
				tab.classList.remove("active");
			});

			tab.classList.add("active");

			tabs_wrap.forEach(function (content, content_index) {
				if (content_index == tab_index) {
					content.style.display = "block";
				} else {
					content.style.display = "none";
				}
			});
		});
	});
} catch {}
/*==========/Tab===========*/

/*=========Accordion==========*/
try {
	var acc = document.getElementsByClassName("mh-accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("mh-accordion-active");
			var panel = this.nextElementSibling;
			/*if(panel.style.display === "block"){
				panel.style.display = "none";
			}else{
				panel.style.display = "block";
			}*/
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	};
} catch {}
/*==========/Accordion===========*/
try {
	const mh_range_slider = document.querySelector(".mh-range-slider input");
	const value = document.querySelector(".mh-range-s1 .mh-range-value");
	value.textContent = mh_range_slider.value;
	mh_range_slider.oninput = (function () {
		value.textContent = this.value;
	});
} catch {}
/*===========image filter===============*/
try {
	(function ($) {
		$(document).ready(function () {
			$(".mh-image-filter-button").click(function () {
				var image_filter_name = $(this).attr("mh-image-data-filter");
				if (image_filter_name == "all") {
					$(".mh-image-filter").show("2000");
				} else {
					$(".mh-image-filter").not("." + image_filter_name).hide("2000");
					$(".mh-image-filter").filter("." + image_filter_name).show("2000");
				}
			});
			$(".mh-image-filter-navigation a").click(function () {
				$(this).addClass("active").siblings().removeClass("active")
			});
		});
	}(jQuery));
} catch {}
try {
	function makesvg(percentage, inner_text = "") {

		var abs_percentage = Math.abs(percentage).toString();
		var percentage_str = percentage.toString();
		var classes = "";

		if (percentage < 0) {
			classes = "mh-danger-stroke mh-circle-chart__circle--negative";
		} else if (percentage > 0 && percentage <= 30) {
			classes = "mh-warning-stroke";
		} else {
			classes = "mh-success-stroke";
		};

		var svg = '<svg class="mh-circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">' +
			'<circle class="mh-circle-chart__background" cx="16.9" cy="16.9" r="15.9" />' +
			'<circle class="mh-circle-chart__circle ' + classes + '"' +
			'stroke-dasharray="' + abs_percentage + ',100"    cx="16.9" cy="16.9" r="15.9" />' +
			'<g class="mh-circle-chart__info">' +
			'   <text class="mh-circle-chart__percent" x="17.9" y="15.5">' + percentage_str + '%</text>';

		if (inner_text) {
			svg += '<text class="mh-circle-chart__subline" x="16.91549431" y="22">' + inner_text + '</text>'
		};

		svg += ' </g></svg>';

		return svg
	};

	(function ($) {

		$.fn.mh_circlechart = function () {
			this.each(function () {
				var percentage = $(this).data("percentage");
				var inner_text = $(this).text();
				$(this).html(makesvg(percentage, inner_text));
			});
			return this;
		};

	}(jQuery));
} catch {}

/**
 * login form
 */
try {
	var mh_form_login = document.querySelector(".mh-form-s1 #mh-form-login");
	var mh_form_register = document.querySelector(".mh-form-s1 #mh-form-register");
	var mh_form_btn = document.querySelector(".mh-form-s1 #mh-form-btn");

	function register() {
		mh_form_login.style.left = "-400px";
		mh_form_register.style.left = "50px";
		mh_form_btn.style.left = "110px";
	}

	function login() {
		mh_form_login.style.left = "50px";
		mh_form_register.style.left = "450px";
		mh_form_btn.style.left = "0";
	}
} catch {}
/**
 * image gallery
 */
try {
	let imagegallerymainImg = document.querySelectorAll('.mh-image-gallery-s1 .mh-image-gallery-main-img');
	let imagegallerymodalImg = document.querySelector('.mh-image-gallery-s1 .mh-image-gallery-display-img');
	let imagegalleryclose = document.querySelector('.mh-image-gallery-s1 .mh-image-gallery-close-button');
	let imagegallerydisplayId = document.querySelector('.mh-image-gallery-s1 #mh-image-gallery-display-section');
	for (let i = 0; i < imagegallerymainImg.length; i++) {
		imagegallerymainImg[i].addEventListener('click', function () {
			imagegallerydisplayId.style.display = 'block';
			imagegallerymodalImg.src = imagegallerymainImg[i].src;
		});
	}
	imagegalleryclose.addEventListener('click', function () {
		imagegallerydisplayId.style.display = 'none';
	});
} catch {}

/**
 * animation
 */
try {
	(function (global, factory) {
		if (typeof define === "function" && define.amd) {
			define(['module', 'exports'], factory);
		} else if (typeof exports !== "undefined") {
			factory(module, exports);
		} else {
			var mod = {
				exports: {}
			};
			factory(mod, mod.exports);
			global.mhstyle_animate = mod.exports;
		}
	})(this, function (module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _class, _temp;

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		function isIn(needle, haystack) {
			return haystack.indexOf(needle) >= 0;
		}

		function extend(custom, defaults) {
			for (var key in defaults) {
				if (custom[key] == null) {
					var value = defaults[key];
					custom[key] = value;
				}
			}
			return custom;
		}

		function isMobile(agent) {
			return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent));
		}

		function createEvent(event) {
			var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
			var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
			var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

			var customEvent = void 0;
			if (document.createEvent != null) {
				customEvent = document.createEvent('CustomEvent');
				customEvent.initCustomEvent(event, bubble, cancel, detail);
			} else if (document.createEventObject != null) {
				customEvent = document.createEventObject();
				customEvent.eventType = event;
			} else {
				customEvent.eventName = event;
			}

			return customEvent;
		}

		function emitEvent(elem, event) {
			if (elem.dispatchEvent != null) {
				elem.dispatchEvent(event);
			} else if (event in (elem != null)) {
				elem[event]();
			} else if ('on' + event in (elem != null)) {
				elem['on' + event]();
			}
		}

		function addEvent(elem, event, fn) {
			if (elem.addEventListener != null) {
				elem.addEventListener(event, fn, false);
			} else if (elem.attachEvent != null) {
				elem.attachEvent('on' + event, fn);
			} else {
				elem[event] = fn;
			}
		}

		function removeEvent(elem, event, fn) {
			if (elem.removeEventListener != null) {
				elem.removeEventListener(event, fn, false);
			} else if (elem.detachEvent != null) {
				elem.detachEvent('on' + event, fn);
			} else {
				delete elem[event];
			}
		}

		function getInnerHeight() {
			if ('innerHeight' in window) {
				return window.innerHeight;
			}

			return document.documentElement.clientHeight;
		}

		var WeakMap = window.WeakMap || window.MozWeakMap || function () {
			function WeakMap() {
				_classCallCheck(this, WeakMap);

				this.keys = [];
				this.values = [];
			}

			_createClass(WeakMap, [{
				key: 'get',
				value: function get(key) {
					for (var i = 0; i < this.keys.length; i++) {
						var item = this.keys[i];
						if (item === key) {
							return this.values[i];
						}
					}
					return undefined;
				}
			}, {
				key: 'set',
				value: function set(key, value) {
					for (var i = 0; i < this.keys.length; i++) {
						var item = this.keys[i];
						if (item === key) {
							this.values[i] = value;
							return this;
						}
					}
					this.keys.push(key);
					this.values.push(value);
					return this;
				}
			}]);

			return WeakMap;
		}();

		var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
			function MutationObserver() {
				_classCallCheck(this, MutationObserver);

				if (typeof console !== 'undefined' && console !== null) {
					console.warn('MutationObserver is not supported by your browser.');
					console.warn('mhstyle_animate.js cannot detect dom mutations, please call .sync() after loading new content.');
				}
			}

			_createClass(MutationObserver, [{
				key: 'observe',
				value: function observe() {}
			}]);

			return MutationObserver;
		}(), _class.notSupported = true, _temp);

		var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
			var getComputedStyleRX = /(\-([a-z]){1})/g;
			return {
				getPropertyValue: function getPropertyValue(prop) {
					if (prop === 'float') {
						prop = 'styleFloat';
					}
					if (getComputedStyleRX.test(prop)) {
						prop.replace(getComputedStyleRX, function (_, _char) {
							return _char.toUpperCase();
						});
					}
					var currentStyle = el.currentStyle;

					return (currentStyle != null ? currentStyle[prop] : void 0) || null;
				}
			};
		};

		var mhstyle_animate = function () {
			function mhstyle_animate() {
				var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

				_classCallCheck(this, mhstyle_animate);

				this.defaults = {
					boxClass: 'mh-animated',
					animateClass: 'mh-animate',
					offset: 0,
					mobile: true,
					live: true,
					callback: null,
					scrollContainer: null,
					resetAnimation: true
				};

				this.animate = function animateFactory() {
					if ('requestAnimationFrame' in window) {
						return function (callback) {
							return window.requestAnimationFrame(callback);
						};
					}
					return function (callback) {
						return callback();
					};
				}();

				this.vendors = ['moz', 'webkit'];

				this.start = this.start.bind(this);
				this.resetAnimation = this.resetAnimation.bind(this);
				this.scrollHandler = this.scrollHandler.bind(this);
				this.scrollCallback = this.scrollCallback.bind(this);
				this.scrolled = true;
				this.config = extend(options, this.defaults);
				if (options.scrollContainer != null) {
					this.config.scrollContainer = document.querySelector(options.scrollContainer);
				}
				this.animationNameCache = new WeakMap();
				this.mhEvent = createEvent(this.config.boxClass);
			}

			_createClass(mhstyle_animate, [{
				key: 'init',
				value: function init() {
					this.element = window.document.documentElement;
					if (isIn(document.readyState, ['interactive', 'complete'])) {
						this.start();
					} else {
						addEvent(document, 'DOMContentLoaded', this.start);
					}
					this.finished = [];
				}
			}, {
				key: 'start',
				value: function start() {
					var _this = this;

					this.stopped = false;
					this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
					this.all = this.boxes.slice(0);
					if (this.boxes.length) {
						if (this.disabled()) {
							this.resetStyle();
						} else {
							for (var i = 0; i < this.boxes.length; i++) {
								var box = this.boxes[i];
								this.applyStyle(box, true);
							}
						}
					}
					if (!this.disabled()) {
						addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
						addEvent(window, 'resize', this.scrollHandler);
						this.interval = setInterval(this.scrollCallback, 50);
					}
					if (this.config.live) {
						var mut = new MutationObserver(function (records) {
							for (var j = 0; j < records.length; j++) {
								var record = records[j];
								for (var k = 0; k < record.addedNodes.length; k++) {
									var node = record.addedNodes[k];
									_this.doSync(node);
								}
							}
							return undefined;
						});
						mut.observe(document.body, {
							childList: true,
							subtree: true
						});
					}
				}
			}, {
				key: 'stop',
				value: function stop() {
					this.stopped = true;
					removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
					removeEvent(window, 'resize', this.scrollHandler);
					if (this.interval != null) {
						clearInterval(this.interval);
					}
				}
			}, {
				key: 'sync',
				value: function sync() {
					if (MutationObserver.notSupported) {
						this.doSync(this.element);
					}
				}
			}, {
				key: 'doSync',
				value: function doSync(element) {
					if (typeof element === 'undefined' || element === null) {
						element = this.element;
					}
					if (element.nodeType !== 1) {
						return;
					}
					element = element.parentNode || element;
					var iterable = element.querySelectorAll('.' + this.config.boxClass);
					for (var i = 0; i < iterable.length; i++) {
						var box = iterable[i];
						if (!isIn(box, this.all)) {
							this.boxes.push(box);
							this.all.push(box);
							if (this.stopped || this.disabled()) {
								this.resetStyle();
							} else {
								this.applyStyle(box, true);
							}
							this.scrolled = true;
						}
					}
				}
			}, {
				key: 'show',
				value: function show(box) {
					this.applyStyle(box);
					box.className = box.className + ' ' + this.config.animateClass;
					if (this.config.callback != null) {
						this.config.callback(box);
					}
					emitEvent(box, this.mhEvent);

					if (this.config.resetAnimation) {
						addEvent(box, 'animationend', this.resetAnimation);
						addEvent(box, 'oanimationend', this.resetAnimation);
						addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
						addEvent(box, 'MSAnimationEnd', this.resetAnimation);
					}

					return box;
				}
			}, {
				key: 'applyStyle',
				value: function applyStyle(box, hidden) {
					var _this2 = this;

					var duration = box.getAttribute('data-mh-animated-duration');
					var delay = box.getAttribute('data-mh-animated-delay');
					var iteration = box.getAttribute('data-mh-animated-iteration');

					return this.animate(function () {
						return _this2.customStyle(box, hidden, duration, delay, iteration);
					});
				}
			}, {
				key: 'resetStyle',
				value: function resetStyle() {
					for (var i = 0; i < this.boxes.length; i++) {
						var box = this.boxes[i];
						box.style.visibility = 'visible';
					}
					return undefined;
				}
			}, {
				key: 'resetAnimation',
				value: function resetAnimation(event) {
					if (event.type.toLowerCase().indexOf('animationend') >= 0) {
						var target = event.target || event.srcElement;
						target.className = target.className.replace(this.config.animateClass, '').trim();
					}
				}
			}, {
				key: 'customStyle',
				value: function customStyle(box, hidden, duration, delay, iteration) {
					if (hidden) {
						this.cacheAnimationName(box);
					}
					box.style.visibility = hidden ? 'hidden' : 'visible';

					if (duration) {
						this.vendorSet(box.style, {
							animationDuration: duration
						});
					}
					if (delay) {
						this.vendorSet(box.style, {
							animationDelay: delay
						});
					}
					if (iteration) {
						this.vendorSet(box.style, {
							animationIterationCount: iteration
						});
					}
					this.vendorSet(box.style, {
						animationName: hidden ? 'none' : this.cachedAnimationName(box)
					});

					return box;
				}
			}, {
				key: 'vendorSet',
				value: function vendorSet(elem, properties) {
					for (var name in properties) {
						if (properties.hasOwnProperty(name)) {
							var value = properties[name];
							elem['' + name] = value;
							for (var i = 0; i < this.vendors.length; i++) {
								var vendor = this.vendors[i];
								elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
							}
						}
					}
				}
			}, {
				key: 'vendorCSS',
				value: function vendorCSS(elem, property) {
					var style = getComputedStyle(elem);
					var result = style.getPropertyCSSValue(property);
					for (var i = 0; i < this.vendors.length; i++) {
						var vendor = this.vendors[i];
						result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
					}
					return result;
				}
			}, {
				key: 'animationName',
				value: function animationName(box) {
					var aName = void 0;
					try {
						aName = this.vendorCSS(box, 'animation-name').cssText;
					} catch (error) {
						aName = getComputedStyle(box).getPropertyValue('animation-name');
					}

					if (aName === 'none') {
						return '';
					}

					return aName;
				}
			}, {
				key: 'cacheAnimationName',
				value: function cacheAnimationName(box) {
					return this.animationNameCache.set(box, this.animationName(box));
				}
			}, {
				key: 'cachedAnimationName',
				value: function cachedAnimationName(box) {
					return this.animationNameCache.get(box);
				}
			}, {
				key: 'scrollHandler',
				value: function scrollHandler() {
					this.scrolled = true;
				}
			}, {
				key: 'scrollCallback',
				value: function scrollCallback() {
					if (this.scrolled) {
						this.scrolled = false;
						var results = [];
						for (var i = 0; i < this.boxes.length; i++) {
							var box = this.boxes[i];
							if (box) {
								if (this.isVisible(box)) {
									this.show(box);
									continue;
								}
								results.push(box);
							}
						}
						this.boxes = results;
						if (!this.boxes.length && !this.config.live) {
							this.stop();
						}
					}
				}
			}, {
				key: 'offsetTop',
				value: function offsetTop(element) {
					while (element.offsetTop === undefined) {
						element = element.parentNode;
					}
					var top = element.offsetTop;
					while (element.offsetParent) {
						element = element.offsetParent;
						top += element.offsetTop;
					}
					return top;
				}
			}, {
				key: 'isVisible',
				value: function isVisible(box) {
					var offset = box.getAttribute('data-mh-animated-offset') || this.config.offset;
					var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
					var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
					var top = this.offsetTop(box);
					var bottom = top + box.clientHeight;

					return top <= viewBottom && bottom >= viewTop;
				}
			}, {
				key: 'disabled',
				value: function disabled() {
					return !this.config.mobile && isMobile(navigator.userAgent);
				}
			}]);

			return mhstyle_animate;
		}();

		exports.default = mhstyle_animate;
		module.exports = exports['default'];
	});

} catch {}
try {
	const dropArea = document.querySelector(".mh-drag-drop"),
		dragText = dropArea.querySelector(".mh-drag-drop-header"),
		dragbutton = dropArea.querySelector(".mh-drag-drop-button"),
		draginput = dropArea.querySelector(".mh-drag-drop-input");
	let file;

	dragbutton.onclick = () => {
		draginput.click();
	}
	draginput.addEventListener("change", function () {
		file = this.files[0];
		showFile();
		dropArea.classList.add("active");
	});
	dropArea.addEventListener("dragover", (event) => {
		event.preventDefault();
		dropArea.classList.add("active");
		dragText.textContent = "Release to Upload File";
	});
	dropArea.addEventListener("dragleave", () => {
		dropArea.classList.remove("active");
		dragText.textContent = "Drag & Drop to Upload File";
	});
	dropArea.addEventListener("drop", (event) => {
		event.preventDefault();
		file = event.dataTransfer.files[0];
		showFile();
	});

	function showFile() {
		let fileType = file.type;
		let validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/svg"];
		if (validExtensions.includes(fileType)) {
			let fileReader = new FileReader();
			fileReader.onload = () => {
				let fileURL = fileReader.result;
				let imgTag = `<img src="${fileURL}" alt="">`;
				dropArea.innerHTML = imgTag;
			}
			fileReader.readAsDataURL(file);
		} else {
			dropArea.classList.remove("active");
			alert("It's don't support");
		}
	}
} catch {}
try {
	(function ($) {
		$(document).ready(function () {
			$(".mh-sidebar-menu li").click(function () {
				$(".mh-sidebar-menu li").removeClass("active");
				$(this).addClass("active");
			});

			$(".mh-hamburger").click(function () {
				$(".mh-sidebar-s2").addClass("active");
			});
			$(".mh-hamburger-nav").click(function () {
				$(".mh-navbar-s4").toggleClass("active");
			});

			$(".mh-close, .mh-bg-shadow").click(function () {
				$(".mh-sidebar-s2").removeClass("active");
			});
		});
	}(jQuery));
} catch {}


/**supermodal */
try {
	(function ($) {

		$.supermodal = function (options) {

			var settings = $.extend({
				backButton: true,
				maxWidth: '90%',
				maxHeight: '90%',
				background: '#fff',
				color: '',
				shadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
				containerBackground: 'rgba(0,0,0,0.2)',
				containerClass: '',
				containerZIndex: '1000',
				showTitle: true,
				title: '',
				titleColor: '#fff',
				titleBackground: '#02A1FF',
				closeButton: true,
				closeButtonIcon: 'mh mhi-times',
				lazyLoading: false,
				ajax: false
			}, options);

			var selector = '[data-modal]';

			$(selector).click(function () {
				initSuperModal(this, settings);
			});

		};

		$(window).on('hashchange', function () {
			if (window.location.hash == '') {
				closeModal($('.mh-supermodal-container'));
			} else {
				var hash = window.location.hash.replace('#', '').split('_');
				$('.mh-supermodal-container').each(function () {
					var level = $(this).attr('data-modal-level');
					if (level > hash[0]) {
						closeModal($(this));
					}
				});
			}
		});

		$(document).ready(function () {
			if (window.location.hash != '') {
				var hash = window.location.hash.replace('#', '').split('_');
				$('[data-modal="' + hash[1] + '"').click();
			}
		});

		function initSuperModal(selector, settings) {

			var localSettings = Object.assign({}, settings);
			var id = $(selector).attr('data-modal');
			var title = '';
			var modalHtml;

			for ([key, value] of Object.entries(settings)) {
				if ($(selector).attr('data-modal-' + key)) {
					var val = $(selector).attr('data-modal-' + key);
					if (val == 'true') val = true;
					if (val == 'false') val = false;
					localSettings[key] = val;
				}
			}

			if (localSettings.ajax) {
				$.ajaxSetup({
					async: false
				});
				$.get(id, function (data) {
					modalHtml = data;
					id = new Date().getTime();
				});
			} else {
				modalHtml = $('#' + id).html();
			}

			if (modalHtml) {

				var modalSelector = '.mh-supermodal-container[id="modal_' + id + '"]';
				var level = 1;

				if ($('.mh-supermodal-container').length)
					level = $('.mh-supermodal-container').length + 1;

				$('body').append('<div id="modal_' + id + '" data-modal-level="' + level + '" class="mh-supermodal-container"><div class="mh-supermodal-window"><div class="mh-supermodal-body">' + modalHtml + '</div></div></div>');

				if (localSettings.showTitle) {
					if (localSettings.title)
						title = localSettings.title;
					else
						title = id;

					$(modalSelector + ' .mh-supermodal-window').prepend('<div class="mh-supermodal-title">' + title + '</div>');
				}

				if (localSettings.closeButton) {
					$(modalSelector + ' .mh-supermodal-window .mh-supermodal-title').prepend('<div class="mh-supermodal-close"><i class="' + localSettings.closeButtonIcon + '"></i></div>');
				}

				$(modalSelector + ' .mh-supermodal-window').css('max-height', localSettings.maxHeight);
				$(modalSelector + ' .mh-supermodal-window').css('max-width', localSettings.maxWidth);
				$(modalSelector + ' .mh-supermodal-window').css('background', localSettings.background);
				$(modalSelector + ' .mh-supermodal-window').css('color', localSettings.color);
				$(modalSelector + ' .mh-supermodal-window').css('box-shadow', localSettings.shadow);
				$(modalSelector).css('background', localSettings.containerBackground);
				$(modalSelector).css('z-index', localSettings.containerZIndex);
				$(modalSelector + ' .mh-supermodal-window .mh-supermodal-title').css('background', localSettings.titleBackground);
				$(modalSelector + ' .mh-supermodal-window .mh-supermodal-title').css('color', localSettings.titleColor);

				if (localSettings.containerClass != '') {
					$(modalSelector).addClass(localSettings.containerClass);
				}

				$(modalSelector + ' .mh-supermodal-window').addClass('show');

				if (localSettings.backButton)
					window.location.hash = level + '_' + id;

				$(modalSelector + ' .mh-supermodal-window .mh-supermodal-close, ' + modalSelector + ' [data-modal-close]').click(function () {
					closeButton($(modalSelector), localSettings);
				});

				$('html').css('overflow', 'hidden');

				$(modalSelector + ' [data-modal]').click(function () {
					initSuperModal(this, localSettings)
				});

				if (localSettings.lazyLoading) {
					$(modalSelector + ' img[data-src]').each(function () {
						$(this).attr('src', $(this).attr('data-src'));
					});
				}
			}
		}

		function closeButton(obj, settings = Array()) {
			if (settings.backButton)
				window.history.back();
			else
				closeModal(obj);
		}

		function closeModal(obj) {
			var window = false;
			var container = false;

			if (obj.find('.mh-supermodal-window').length) {
				window = obj.find('.mh-supermodal-window');
				container = obj;
			} else if (obj.parents('.mh-supermodal-window:first').length) {
				window = obj.parents('.mh-supermodal-window:first');
				container = obj.parents('.mh-supermodal-container:first');
			}

			if (window) {
				window.removeClass('show').addClass('hide');
				setTimeout(function () {
					container.remove();
					if (!$('.mh-supermodal-container').length) {
						$('html').css('overflow', 'auto');
					}
				}, 300);
			}
		}

	}(jQuery));
} catch {}
/**navbar */
try {
	let navbarMenuToggleButtons = document.querySelectorAll(".mh-navbar-toggle");
	let navbarMenuBodyNavs = document.querySelectorAll(".mh-navbar-collapse");
	// let sidebarnavbarBodyNavs = document.querySelectorAll(".mh-navbar-collapse.mh-sidebar");
	// let sidebarnavMenuToggleButtons = document.querySelectorAll(".mh-sidebar-nav-btn");
	// let sidebarnavMenuBodyNavsClosebtn = document.querySelectorAll(".close-btn");
	// if (sidebarnavMenuToggleButtons) {
	// 	for (let sidebarnavMenuToggleButton of sidebarnavMenuToggleButtons) {
	// 		for (let sidebarnavbarBodyNav of sidebarnavbarBodyNavs) {
	// 			sidebarnavMenuToggleButton.addEventListener("click", (event) => {
	// 				let sidebarnavMenuToggleButtonAttribute = sidebarnavMenuToggleButton.getAttribute(
	// 					"mh-navtoggle");
	// 				let sidebarnavMenuBodyNavAttribute = sidebarnavbarBodyNav.getAttribute("id");
	// 				if (sidebarnavMenuToggleButtonAttribute == sidebarnavMenuBodyNavAttribute) {
	// 				if (sidebarnavMenuBodyNavsClosebtn) {
						
	// 						sidebarnavbarBodyNav.classList.remove("mh-collapse");
	// 						for (let sidebarnavMenuBodyNavsClose of sidebarnavMenuBodyNavsClosebtn) {
	// 							sidebarnavMenuBodyNavsClose.addEventListener("click", (event) => {
	// 								sidebarnavbarBodyNav.classList.add("mh-collapse");
	// 							});
	// 						}
	// 					}
						
	// 				}
	// 			});
	// 		}
	// 	}
	// }

	for (let navbarMenuToggleButton of navbarMenuToggleButtons) {
		for (let navbarMenuBodyNav of navbarMenuBodyNavs) {
				
			
			navbarMenuToggleButton.addEventListener("click", (event) => {
				let navbarMenuToggleButtonAttribute = navbarMenuToggleButton.getAttribute("mh-navtoggle");
				let navbarMenuBodyNavAttribute = navbarMenuBodyNav.getAttribute("id");
				if (navbarMenuToggleButtonAttribute == navbarMenuBodyNavAttribute) {
					
							navbarMenuBodyNav.classList.toggle("mh-collapse");
						
					}
			});
		}
	}
	
} catch {}
/** Dropdown */
try {
	let dropdownmenubtns = document.querySelectorAll(".mh-dropdown");
	let dropdownmenus = document.querySelectorAll(".mh-dropdown-menu");
	for (const dropdownmenubtn of dropdownmenubtns) {
		for (let dropdownmenu of dropdownmenus) {
			dropdownmenubtn.addEventListener('click',(event)=>{
				dropdownmenu.classList.toggle("mh-dropdown-menu-show");
			});
		}
		
	}
} catch{}
/*** theme btn */
try{
	const themeBtn = document.querySelector('.mh-theme-btn');
	themeBtn.addEventListener('click', () => {
		document.body.classList.toggle('mh-dark-theme');
		themeBtn.querySelector('i:first-child').classList.toggle('active');
		themeBtn.querySelector('i:last-child').classList.toggle('active');

	});
}catch{}
/*** background image Url */
try {
	let bg_img_url = document.querySelectorAll('.mh-bg-img-url');
	for (let i = 0; i < bg_img_url.length; i++) {
		let bg_url = bg_img_url[i].getAttribute('mh-bg-img-url');
		bg_img_url[i].style.backgroundImage = "url('" + bg_url + "')";
	}
} catch {}
/**Number Counter */
try {
	let counters = document.querySelectorAll('.mh-counter');
	counters.forEach(counter => {
		let updateCount = () => {
			let counterTarget = +counter.getAttribute('mh-numcount');
			let counterCount = +counter.innerText;
			let counterIncrement = counterTarget / 300;
			if (counterCount < counterTarget) {
				counter.innerText = Math.ceil(counterCount + counterIncrement);
				setTimeout(updateCount, 1);
			} else {
				counter.innerText = counterTarget;
			}
		};
		updateCount();
	});
} catch {}

/***slider */
try {
	(function ($) {
		(function ($, window, document, undefined) {

			function mh(element, options) {

				this.settings = null;

				this.options = $.extend({}, mh.Defaults, options);

				this.$element = $(element);

				this._handlers = {};

				this._plugins = {};

				this._supress = {};

				this._current = null;

				this._speed = null;

				this._coordinates = [];

				this._breakpoint = null;

				this._width = null;

				this._items = [];

				this._clones = [];

				this._mergers = [];

				this._widths = [];

				this._invalidated = {};

				this._pipe = [];

				this._drag = {
					time: null,
					target: null,
					pointer: null,
					stage: {
						start: null,
						current: null
					},
					direction: null
				};

				this._states = {
					current: {},
					tags: {
						'initializing': ['busy'],
						'animating': ['busy'],
						'dragging': ['interacting']
					}
				};

				$.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
					this._handlers[handler] = $.proxy(this[handler], this);
				}, this));

				$.each(mh.Plugins, $.proxy(function (key, plugin) {
					this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
				}, this));

				$.each(mh.Workers, $.proxy(function (priority, worker) {
					this._pipe.push({
						'filter': worker.filter,
						'run': $.proxy(worker.run, this)
					});
				}, this));

				this.setup();
				this.initialize();
			}

			mh.Defaults = {
				items: 3,
				loop: false,
				center: false,
				rewind: false,
				checkVisibility: true,

				mouseDrag: true,
				touchDrag: true,
				pullDrag: true,
				freeDrag: false,

				margin: 0,
				stagePadding: 0,

				merge: false,
				mergeFit: true,
				autoWidth: false,

				startPosition: 0,
				rtl: false,

				smartSpeed: 250,
				fluidSpeed: false,
				dragEndSpeed: false,

				responsive: {},
				responsiveRefreshRate: 200,
				responsiveBaseElement: window,

				fallbackEasing: 'swing',
				slideTransition: '',

				info: false,

				nestedItemSelector: false,
				itemElement: 'div',
				stageElement: 'div',

				refreshClass: 'mh-refresh',
				loadedClass: 'mh-loaded',
				loadingClass: 'mh-loading',
				rtlClass: 'mh-rtl',
				responsiveClass: 'mh-responsive',
				dragClass: 'mh-drag',
				itemClass: 'mh-item',
				stageClass: 'mh-stage',
				stageOuterClass: 'mh-stage-outer',
				grabClass: 'mh-grab',
			};

			mh.Width = {
				Default: 'default',
				Inner: 'inner',
				Outer: 'outer'
			};

			mh.Type = {
				Event: 'event',
				State: 'state'
			};

			mh.Plugins = {};

			mh.Workers = [{
				filter: ['width', 'settings'],
				run: function () {
					this._width = this.$element.width();
				}
			}, {
				filter: ['width', 'items', 'settings'],
				run: function (cache) {
					cache.current = this._items && this._items[this.relative(this._current)];
				}
			}, {
				filter: ['items', 'settings'],
				run: function () {
					this.$stage.children('.cloned').remove();
				}
			}, {
				filter: ['width', 'items', 'settings'],
				run: function (cache) {
					var margin = this.settings.margin || '',
						grid = !this.settings.autoWidth,
						rtl = this.settings.rtl,
						css = {
							'width': 'auto',
							'margin-left': rtl ? margin : '',
							'margin-right': rtl ? '' : margin
						};

					!grid && this.$stage.children().css(css);

					cache.css = css;
				}
			}, {
				filter: ['width', 'items', 'settings'],
				run: function (cache) {
					var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
						merge = null,
						iterator = this._items.length,
						grid = !this.settings.autoWidth,
						widths = [];

					cache.items = {
						merge: false,
						width: width
					};

					while (iterator--) {
						merge = this._mergers[iterator];
						merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

						cache.items.merge = merge > 1 || cache.items.merge;

						widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
					}

					this._widths = widths;
				}
			}, {
				filter: ['items', 'settings'],
				run: function () {
					var clones = [],
						items = this._items,
						settings = this.settings,
						view = Math.max(settings.items * 2, 4),
						size = Math.ceil(items.length / 2) * 2,
						repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
						append = '',
						prepend = '';

					repeat /= 2;

					while (repeat > 0) {
						clones.push(this.normalize(clones.length / 2, true));
						append = append + items[clones[clones.length - 1]][0].outerHTML;
						clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
						prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
						repeat -= 1;
					}

					this._clones = clones;

					$(append).addClass('cloned').appendTo(this.$stage);
					$(prepend).addClass('cloned').prependTo(this.$stage);
				}
			}, {
				filter: ['width', 'items', 'settings'],
				run: function () {
					var rtl = this.settings.rtl ? 1 : -1,
						size = this._clones.length + this._items.length,
						iterator = -1,
						previous = 0,
						current = 0,
						coordinates = [];

					while (++iterator < size) {
						previous = coordinates[iterator - 1] || 0;
						current = this._widths[this.relative(iterator)] + this.settings.margin;
						coordinates.push(previous + current * rtl);
					}

					this._coordinates = coordinates;
				}
			}, {
				filter: ['width', 'items', 'settings'],
				run: function () {
					var padding = this.settings.stagePadding,
						coordinates = this._coordinates,
						css = {
							'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
							'padding-left': padding || '',
							'padding-right': padding || ''
						};

					this.$stage.css(css);
				}
			}, {
				filter: ['width', 'items', 'settings'],
				run: function (cache) {
					var iterator = this._coordinates.length,
						grid = !this.settings.autoWidth,
						items = this.$stage.children();

					if (grid && cache.items.merge) {
						while (iterator--) {
							cache.css.width = this._widths[this.relative(iterator)];
							items.eq(iterator).css(cache.css);
						}
					} else if (grid) {
						cache.css.width = cache.items.width;
						items.css(cache.css);
					}
				}
			}, {
				filter: ['items'],
				run: function () {
					this._coordinates.length < 1 && this.$stage.removeAttr('style');
				}
			}, {
				filter: ['width', 'items', 'settings'],
				run: function (cache) {
					cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
					cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
					this.reset(cache.current);
				}
			}, {
				filter: ['position'],
				run: function () {
					this.animate(this.coordinates(this._current));
				}
			}, {
				filter: ['width', 'position', 'items', 'settings'],
				run: function () {
					var rtl = this.settings.rtl ? 1 : -1,
						padding = this.settings.stagePadding * 2,
						begin = this.coordinates(this.current()) + padding,
						end = begin + this.width() * rtl,
						inner, outer, matches = [],
						i, n;

					for (i = 0, n = this._coordinates.length; i < n; i++) {
						inner = this._coordinates[i - 1] || 0;
						outer = Math.abs(this._coordinates[i]) + padding * rtl;

						if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) ||
							(this.op(outer, '<', begin) && this.op(outer, '>', end))) {
							matches.push(i);
						}
					}

					this.$stage.children('.active').removeClass('active');
					this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

					this.$stage.children('.center').removeClass('center');
					if (this.settings.center) {
						this.$stage.children().eq(this.current()).addClass('center');
					}
				}
			}];

			mh.prototype.initializeStage = function () {
				this.$stage = this.$element.find('.' + this.settings.stageClass);

				if (this.$stage.length) {
					return;
				}

				this.$element.addClass(this.options.loadingClass);

				this.$stage = $('<' + this.settings.stageElement + '>', {
					"class": this.settings.stageClass
				}).wrap($('<div/>', {
					"class": this.settings.stageOuterClass
				}));

				this.$element.append(this.$stage.parent());
			};
			
			mh.prototype.initializeItems = function () {
				var $items = this.$element.find('.mh-item');

				if ($items.length) {
					this._items = $items.get().map(function (item) {
						return $(item);
					});

					this._mergers = this._items.map(function () {
						return 1;
					});

					this.refresh();

					return;
				}

				this.replace(this.$element.children().not(this.$stage.parent()));

				if (this.isVisible()) {
					this.refresh();
				} else {
					this.invalidate('width');
				}

				this.$element
					.removeClass(this.options.loadingClass)
					.addClass(this.options.loadedClass);
			};

			mh.prototype.initialize = function () {
				this.enter('initializing');
				this.trigger('initialize');

				this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

				if (this.settings.autoWidth && !this.is('pre-loading')) {
					var imgs, nestedSelector, width;
					imgs = this.$element.find('img');
					nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
					width = this.$element.children(nestedSelector).width();

					if (imgs.length && width <= 0) {
						this.preloadAutoWidthImages(imgs);
					}
				}

				this.initializeStage();
				this.initializeItems();

				this.registerEventHandlers();

				this.leave('initializing');
				this.trigger('initialized');
			};

			mh.prototype.isVisible = function () {
				return this.settings.checkVisibility ?
					this.$element.is(':visible') :
					true;
			};

			mh.prototype.setup = function () {
				var viewport = this.viewport(),
					overwrites = this.options.responsive,
					match = -1,
					settings = null;

				if (!overwrites) {
					settings = $.extend({}, this.options);
				} else {
					$.each(overwrites, function (breakpoint) {
						if (breakpoint <= viewport && breakpoint > match) {
							match = Number(breakpoint);
						}
					});

					settings = $.extend({}, this.options, overwrites[match]);
					if (typeof settings.stagePadding === 'function') {
						settings.stagePadding = settings.stagePadding();
					}
					delete settings.responsive;

					if (settings.responsiveClass) {
						this.$element.attr('class',
							this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
						);
					}
				}

				this.trigger('change', {
					property: {
						name: 'settings',
						value: settings
					}
				});
				this._breakpoint = match;
				this.settings = settings;
				this.invalidate('settings');
				this.trigger('changed', {
					property: {
						name: 'settings',
						value: this.settings
					}
				});
			};

			mh.prototype.optionsLogic = function () {
				if (this.settings.autoWidth) {
					this.settings.stagePadding = false;
					this.settings.merge = false;
				}
			};

			mh.prototype.prepare = function (item) {
				var event = this.trigger('prepare', {
					content: item
				});

				if (!event.data) {
					event.data = $('<' + this.settings.itemElement + '/>')
						.addClass(this.options.itemClass).append(item)
				}

				this.trigger('prepared', {
					content: event.data
				});

				return event.data;
			};

			mh.prototype.update = function () {
				var i = 0,
					n = this._pipe.length,
					filter = $.proxy(function (p) {
						return this[p]
					}, this._invalidated),
					cache = {};

				while (i < n) {
					if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
						this._pipe[i].run(cache);
					}
					i++;
				}

				this._invalidated = {};

				!this.is('valid') && this.enter('valid');
			};

			mh.prototype.width = function (dimension) {
				dimension = dimension || mh.Width.Default;
				switch (dimension) {
					case mh.Width.Inner:
					case mh.Width.Outer:
						return this._width;
					default:
						return this._width - this.settings.stagePadding * 2 + this.settings.margin;
				}
			};

			mh.prototype.refresh = function () {
				this.enter('refreshing');
				this.trigger('refresh');

				this.setup();

				this.optionsLogic();

				this.$element.addClass(this.options.refreshClass);

				this.update();

				this.$element.removeClass(this.options.refreshClass);

				this.leave('refreshing');
				this.trigger('refreshed');
			};

			mh.prototype.onThrottledResize = function () {
				window.clearTimeout(this.resizeTimer);
				this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
			};

			mh.prototype.onResize = function () {
				if (!this._items.length) {
					return false;
				}

				if (this._width === this.$element.width()) {
					return false;
				}

				if (!this.isVisible()) {
					return false;
				}

				this.enter('resizing');

				if (this.trigger('resize').isDefaultPrevented()) {
					this.leave('resizing');
					return false;
				}

				this.invalidate('width');

				this.refresh();

				this.leave('resizing');
				this.trigger('resized');
			};

			mh.prototype.registerEventHandlers = function () {
				if ($.support.transition) {
					this.$stage.on($.support.transition.end + '.mh.core', $.proxy(this.onTransitionEnd, this));
				}

				if (this.settings.responsive !== false) {
					this.on(window, 'resize', this._handlers.onThrottledResize);
				}

				if (this.settings.mouseDrag) {
					this.$element.addClass(this.options.dragClass);
					this.$stage.on('mousedown.mh.core', $.proxy(this.onDragStart, this));
					this.$stage.on('dragstart.mh.core selectstart.mh.core', function () {
						return false
					});
				}

				if (this.settings.touchDrag) {
					this.$stage.on('touchstart.mh.core', $.proxy(this.onDragStart, this));
					this.$stage.on('touchcancel.mh.core', $.proxy(this.onDragEnd, this));
				}
			};

			mh.prototype.onDragStart = function (event) {
				var stage = null;

				if (event.which === 3) {
					return;
				}

				if ($.support.transform) {
					stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
					stage = {
						x: stage[stage.length === 16 ? 12 : 4],
						y: stage[stage.length === 16 ? 13 : 5]
					};
				} else {
					stage = this.$stage.position();
					stage = {
						x: this.settings.rtl ?
							stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
						y: stage.top
					};
				}

				if (this.is('animating')) {
					$.support.transform ? this.animate(stage.x) : this.$stage.stop()
					this.invalidate('position');
				}

				this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

				this.speed(0);

				this._drag.time = new Date().getTime();
				this._drag.target = $(event.target);
				this._drag.stage.start = stage;
				this._drag.stage.current = stage;
				this._drag.pointer = this.pointer(event);

				$(document).on('mouseup.mh.core touchend.mh.core', $.proxy(this.onDragEnd, this));

				$(document).one('mousemove.mh.core touchmove.mh.core', $.proxy(function (event) {
					var delta = this.difference(this._drag.pointer, this.pointer(event));

					$(document).on('mousemove.mh.core touchmove.mh.core', $.proxy(this.onDragMove, this));

					if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
						return;
					}

					event.preventDefault();

					this.enter('dragging');
					this.trigger('drag');
				}, this));
			};

			mh.prototype.onDragMove = function (event) {
				var minimum = null,
					maximum = null,
					pull = null,
					delta = this.difference(this._drag.pointer, this.pointer(event)),
					stage = this.difference(this._drag.stage.start, delta);

				if (!this.is('dragging')) {
					return;
				}

				event.preventDefault();

				if (this.settings.loop) {
					minimum = this.coordinates(this.minimum());
					maximum = this.coordinates(this.maximum() + 1) - minimum;
					stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
				} else {
					minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
					maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
					pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
					stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
				}

				this._drag.stage.current = stage;

				this.animate(stage.x);
			};

			mh.prototype.onDragEnd = function (event) {
				var delta = this.difference(this._drag.pointer, this.pointer(event)),
					stage = this._drag.stage.current,
					direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

				$(document).off('.mh.core');

				this.$element.removeClass(this.options.grabClass);

				if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
					this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
					this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
					this.invalidate('position');
					this.update();

					this._drag.direction = direction;

					if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
						this._drag.target.one('click.mh.core', function () {
							return false;
						});
					}
				}

				if (!this.is('dragging')) {
					return;
				}

				this.leave('dragging');
				this.trigger('dragged');
			};

			mh.prototype.closest = function (coordinate, direction) {
				var position = -1,
					pull = 30,
					width = this.width(),
					coordinates = this.coordinates();

				if (!this.settings.freeDrag) {
					$.each(coordinates, $.proxy(function (index, value) {
						if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
							position = index;
						} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
							position = index + 1;
						} else if (this.op(coordinate, '<', value) &&
							this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
							position = direction === 'left' ? index + 1 : index;
						}
						return position === -1;
					}, this));
				}

				if (!this.settings.loop) {
					if (this.op(coordinate, '>', coordinates[this.minimum()])) {
						position = coordinate = this.minimum();
					} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
						position = coordinate = this.maximum();
					}
				}

				return position;
			};
			mh.prototype.animate = function (coordinate) {
				var animate = this.speed() > 0;

				this.is('animating') && this.onTransitionEnd();

				if (animate) {
					this.enter('animating');
					this.trigger('translate');
				}

				if ($.support.transform3d && $.support.transition) {
					this.$stage.css({
						transform: 'translate3d(' + coordinate + 'px,0px,0px)',
						transition: (this.speed() / 1000) + 's' + (
							this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
						)
					});
				} else if (animate) {
					this.$stage.animate({
						left: coordinate + 'px'
					}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
				} else {
					this.$stage.css({
						left: coordinate + 'px'
					});
				}
			};
			
			mh.prototype.is = function (state) {
				return this._states.current[state] && this._states.current[state] > 0;
			};
			mh.prototype.current = function (position) {
				if (position === undefined) {
					return this._current;
				}

				if (this._items.length === 0) {
					return undefined;
				}

				position = this.normalize(position);

				if (this._current !== position) {
					var event = this.trigger('change', {
						property: {
							name: 'position',
							value: position
						}
					});

					if (event.data !== undefined) {
						position = this.normalize(event.data);
					}

					this._current = position;

					this.invalidate('position');

					this.trigger('changed', {
						property: {
							name: 'position',
							value: this._current
						}
					});
				}

				return this._current;
			};
			mh.prototype.invalidate = function (part) {
				if ($.type(part) === 'string') {
					this._invalidated[part] = true;
					this.is('valid') && this.leave('valid');
				}
				return $.map(this._invalidated, function (v, i) {
					return i
				});
			};

			mh.prototype.reset = function (position) {
				position = this.normalize(position);

				if (position === undefined) {
					return;
				}

				this._speed = 0;
				this._current = position;

				this.suppress(['translate', 'translated']);

				this.animate(this.coordinates(position));

				this.release(['translate', 'translated']);
			};

			mh.prototype.normalize = function (position, relative) {
				var n = this._items.length,
					m = relative ? 0 : this._clones.length;

				if (!this.isNumeric(position) || n < 1) {
					position = undefined;
				} else if (position < 0 || position >= n + m) {
					position = ((position - m / 2) % n + n) % n + m / 2;
				}

				return position;
			};

			mh.prototype.relative = function (position) {
				position -= this._clones.length / 2;
				return this.normalize(position, true);
			};
			
			mh.prototype.maximum = function (relative) {
				var settings = this.settings,
					maximum = this._coordinates.length,
					iterator,
					reciprocalItemsWidth,
					elementWidth;

				if (settings.loop) {
					maximum = this._clones.length / 2 + this._items.length - 1;
				} else if (settings.autoWidth || settings.merge) {
					iterator = this._items.length;
					if (iterator) {
						reciprocalItemsWidth = this._items[--iterator].width();
						elementWidth = this.$element.width();
						while (iterator--) {
							reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
							if (reciprocalItemsWidth > elementWidth) {
								break;
							}
						}
					}
					maximum = iterator + 1;
				} else if (settings.center) {
					maximum = this._items.length - 1;
				} else {
					maximum = this._items.length - settings.items;
				}

				if (relative) {
					maximum -= this._clones.length / 2;
				}

				return Math.max(maximum, 0);
			};

			mh.prototype.minimum = function (relative) {
				return relative ? 0 : this._clones.length / 2;
			};

			mh.prototype.items = function (position) {
				if (position === undefined) {
					return this._items.slice();
				}

				position = this.normalize(position, true);
				return this._items[position];
			};

			mh.prototype.mergers = function (position) {
				if (position === undefined) {
					return this._mergers.slice();
				}

				position = this.normalize(position, true);
				return this._mergers[position];
			};

			mh.prototype.clones = function (position) {
				var odd = this._clones.length / 2,
					even = odd + this._items.length,
					map = function (index) {
						return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
					};

				if (position === undefined) {
					return $.map(this._clones, function (v, i) {
						return map(i)
					});
				}

				return $.map(this._clones, function (v, i) {
					return v === position ? map(i) : null
				});
			};

			mh.prototype.speed = function (speed) {
				if (speed !== undefined) {
					this._speed = speed;
				}

				return this._speed;
			};

			mh.prototype.coordinates = function (position) {
				var multiplier = 1,
					newPosition = position - 1,
					coordinate;

				if (position === undefined) {
					return $.map(this._coordinates, $.proxy(function (coordinate, index) {
						return this.coordinates(index);
					}, this));
				}

				if (this.settings.center) {
					if (this.settings.rtl) {
						multiplier = -1;
						newPosition = position + 1;
					}

					coordinate = this._coordinates[position];
					coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
				} else {
					coordinate = this._coordinates[newPosition] || 0;
				}

				coordinate = Math.ceil(coordinate);

				return coordinate;
			};

			mh.prototype.duration = function (from, to, factor) {
				if (factor === 0) {
					return 0;
				}

				return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
			};

			mh.prototype.to = function (position, speed) {
				var current = this.current(),
					revert = null,
					distance = position - this.relative(current),
					direction = (distance > 0) - (distance < 0),
					items = this._items.length,
					minimum = this.minimum(),
					maximum = this.maximum();

				if (this.settings.loop) {
					if (!this.settings.rewind && Math.abs(distance) > items / 2) {
						distance += direction * -1 * items;
					}

					position = current + distance;
					revert = ((position - minimum) % items + items) % items + minimum;

					if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
						current = revert - distance;
						position = revert;
						this.reset(current);
					}
				} else if (this.settings.rewind) {
					maximum += 1;
					position = (position % maximum + maximum) % maximum;
				} else {
					position = Math.max(minimum, Math.min(maximum, position));
				}

				this.speed(this.duration(current, position, speed));
				this.current(position);

				if (this.isVisible()) {
					this.update();
				}
			};

			mh.prototype.next = function (speed) {
				speed = speed || false;
				this.to(this.relative(this.current()) + 1, speed);
			};

			mh.prototype.prev = function (speed) {
				speed = speed || false;
				this.to(this.relative(this.current()) - 1, speed);
			};

			mh.prototype.onTransitionEnd = function (event) {

				if (event !== undefined) {
					event.stopPropagation();

					if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
						return false;
					}
				}

				this.leave('animating');
				this.trigger('translated');
			};

			mh.prototype.viewport = function () {
				var width;
				if (this.options.responsiveBaseElement !== window) {
					width = $(this.options.responsiveBaseElement).width();
				} else if (window.innerWidth) {
					width = window.innerWidth;
				} else if (document.documentElement && document.documentElement.clientWidth) {
					width = document.documentElement.clientWidth;
				} else {
					console.warn('Can not detect viewport width.');
				}
				return width;
			};
			
			mh.prototype.replace = function (content) {
				this.$stage.empty();
				this._items = [];

				if (content) {
					content = (content instanceof jQuery) ? content : $(content);
				}

				if (this.settings.nestedItemSelector) {
					content = content.find('.' + this.settings.nestedItemSelector);
				}

				content.filter(function () {
					return this.nodeType === 1;
				}).each($.proxy(function (index, item) {
					item = this.prepare(item);
					this.$stage.append(item);
					this._items.push(item);
					this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
				}, this));

				this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

				this.invalidate('items');
			};
			
			mh.prototype.add = function (content, position) {
				var current = this.relative(this._current);

				position = position === undefined ? this._items.length : this.normalize(position, true);
				content = content instanceof jQuery ? content : $(content);

				this.trigger('add', {
					content: content,
					position: position
				});

				content = this.prepare(content);

				if (this._items.length === 0 || position === this._items.length) {
					this._items.length === 0 && this.$stage.append(content);
					this._items.length !== 0 && this._items[position - 1].after(content);
					this._items.push(content);
					this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
				} else {
					this._items[position].before(content);
					this._items.splice(position, 0, content);
					this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
				}

				this._items[current] && this.reset(this._items[current].index());

				this.invalidate('items');

				this.trigger('added', {
					content: content,
					position: position
				});
			};

			mh.prototype.remove = function (position) {
				position = this.normalize(position, true);

				if (position === undefined) {
					return;
				}

				this.trigger('remove', {
					content: this._items[position],
					position: position
				});

				this._items[position].remove();
				this._items.splice(position, 1);
				this._mergers.splice(position, 1);

				this.invalidate('items');

				this.trigger('removed', {
					content: null,
					position: position
				});
			};

			mh.prototype.preloadAutoWidthImages = function (images) {
				images.each($.proxy(function (i, element) {
					this.enter('pre-loading');
					element = $(element);
					$(new Image()).one('load', $.proxy(function (e) {
						element.attr('src', e.target.src);
						element.css('opacity', 1);
						this.leave('pre-loading');
						!this.is('pre-loading') && !this.is('initializing') && this.refresh();
					}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
				}, this));
			};

			mh.prototype.destroy = function () {

				this.$element.off('.mh.core');
				this.$stage.off('.mh.core');
				$(document).off('.mh.core');

				if (this.settings.responsive !== false) {
					window.clearTimeout(this.resizeTimer);
					this.off(window, 'resize', this._handlers.onThrottledResize);
				}

				for (var i in this._plugins) {
					this._plugins[i].destroy();
				}

				this.$stage.children('.cloned').remove();

				this.$stage.unwrap();
				this.$stage.children().contents().unwrap();
				this.$stage.children().unwrap();
				this.$stage.remove();
				this.$element
					.removeClass(this.options.refreshClass)
					.removeClass(this.options.loadingClass)
					.removeClass(this.options.loadedClass)
					.removeClass(this.options.rtlClass)
					.removeClass(this.options.dragClass)
					.removeClass(this.options.grabClass)
					.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
					.removeData('mh.slider');
			};

			mh.prototype.op = function (a, o, b) {
				var rtl = this.settings.rtl;
				switch (o) {
					case '<':
						return rtl ? a > b : a < b;
					case '>':
						return rtl ? a < b : a > b;
					case '>=':
						return rtl ? a <= b : a >= b;
					case '<=':
						return rtl ? a >= b : a <= b;
					default:
						break;
				}
			};

			mh.prototype.on = function (element, event, listener, capture) {
				if (element.addEventListener) {
					element.addEventListener(event, listener, capture);
				} else if (element.attachEvent) {
					element.attachEvent('on' + event, listener);
				}
			};

			mh.prototype.off = function (element, event, listener, capture) {
				if (element.removeEventListener) {
					element.removeEventListener(event, listener, capture);
				} else if (element.detachEvent) {
					element.detachEvent('on' + event, listener);
				}
			};

			mh.prototype.trigger = function (name, data, namespace, state, enter) {
				var status = {
						item: {
							count: this._items.length,
							index: this.current()
						}
					},
					handler = $.camelCase(
						$.grep(['on', name, namespace], function (v) {
							return v
						})
						.join('-').toLowerCase()
					),
					event = $.Event(
						[name, 'mh', namespace || 'slider'].join('.').toLowerCase(),
						$.extend({
							relatedTarget: this
						}, status, data)
					);

				if (!this._supress[name]) {
					$.each(this._plugins, function (name, plugin) {
						if (plugin.onTrigger) {
							plugin.onTrigger(event);
						}
					});

					this.register({
						type: mh.Type.Event,
						name: name
					});
					this.$element.trigger(event);

					if (this.settings && typeof this.settings[handler] === 'function') {
						this.settings[handler].call(this, event);
					}
				}

				return event;
			};

			mh.prototype.enter = function (name) {
				$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
					if (this._states.current[name] === undefined) {
						this._states.current[name] = 0;
					}

					this._states.current[name]++;
				}, this));
			};

			mh.prototype.leave = function (name) {
				$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
					this._states.current[name]--;
				}, this));
			};

			mh.prototype.register = function (object) {
				if (object.type === mh.Type.Event) {
					if (!$.event.special[object.name]) {
						$.event.special[object.name] = {};
					}

					if (!$.event.special[object.name].mh) {
						var _default = $.event.special[object.name]._default;
						$.event.special[object.name]._default = function (e) {
							if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('mh') === -1)) {
								return _default.apply(this, arguments);
							}
							return e.namespace && e.namespace.indexOf('mh') > -1;
						};
						$.event.special[object.name].mh = true;
					}
				} else if (object.type === mh.Type.State) {
					if (!this._states.tags[object.name]) {
						this._states.tags[object.name] = object.tags;
					} else {
						this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
					}

					this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
						return $.inArray(tag, this._states.tags[object.name]) === i;
					}, this));
				}
			};

			mh.prototype.suppress = function (events) {
				$.each(events, $.proxy(function (index, event) {
					this._supress[event] = true;
				}, this));
			};

			mh.prototype.release = function (events) {
				$.each(events, $.proxy(function (index, event) {
					delete this._supress[event];
				}, this));
			};

			mh.prototype.pointer = function (event) {
				var result = {
					x: null,
					y: null
				};

				event = event.originalEvent || event || window.event;

				event = event.touches && event.touches.length ?
					event.touches[0] : event.changedTouches && event.changedTouches.length ?
					event.changedTouches[0] : event;

				if (event.pageX) {
					result.x = event.pageX;
					result.y = event.pageY;
				} else {
					result.x = event.clientX;
					result.y = event.clientY;
				}

				return result;
			};

			mh.prototype.isNumeric = function (number) {
				return !isNaN(parseFloat(number));
			};


			mh.prototype.difference = function (first, second) {
				return {
					x: first.x - second.x,
					y: first.y - second.y
				};
			};

			$.fn.mhSlider = function (option) {
				var args = Array.prototype.slice.call(arguments, 1);

				return this.each(function () {
					var $this = $(this),
						data = $this.data('mh.slider');

					if (!data) {
						data = new mh(this, typeof option == 'object' && option);
						$this.data('mh.slider', data);

						$.each([
							'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
						], function (i, event) {
							data.register({
								type: mh.Type.Event,
								name: event
							});
							data.$element.on(event + '.mh.slider.core', $.proxy(function (e) {
								if (e.namespace && e.relatedTarget !== this) {
									this.suppress([event]);
									data[event].apply(this, [].slice.call(arguments, 1));
									this.release([event]);
								}
							}, data));
						});
					}

					if (typeof option == 'string' && option.charAt(0) !== '_') {
						data[option].apply(data, args);
					}
				});
			};

			$.fn.mhSlider.Constructor = mh;

		})(window.Zepto || window.jQuery, window, document);


		(function ($, window, document, undefined) {

			var AutoRefresh = function (slider) {

				this._core = slider;

				this._interval = null;

				this._visible = null;

				this._handlers = {
					'initialized.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.settings.autoRefresh) {
							this.watch();
						}
					}, this)
				};

				this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

				this._core.$element.on(this._handlers);
			};

			AutoRefresh.Defaults = {
				autoRefresh: true,
				autoRefreshInterval: 500
			};

			AutoRefresh.prototype.watch = function () {
				if (this._interval) {
					return;
				}

				this._visible = this._core.isVisible();
				this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
			};

			AutoRefresh.prototype.refresh = function () {
				if (this._core.isVisible() === this._visible) {
					return;
				}

				this._visible = !this._visible;

				this._core.$element.toggleClass('mh-hidden', !this._visible);

				this._visible && (this._core.invalidate('width') && this._core.refresh());
			};

			AutoRefresh.prototype.destroy = function () {
				var handler, property;

				window.clearInterval(this._interval);

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.mhSlider.Constructor.Plugins.AutoRefresh = AutoRefresh;

		})(window.Zepto || window.jQuery, window, document);
		(function ($, window, document, undefined) {

			var Lazy = function (slider) {

				this._core = slider;

				this._loaded = [];

				this._handlers = {
					'initialized.mh.slider change.mh.slider resized.mh.slider': $.proxy(function (e) {
						if (!e.namespace) {
							return;
						}

						if (!this._core.settings || !this._core.settings.lazyLoad) {
							return;
						}

						if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
							var settings = this._core.settings,
								n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
								i = ((settings.center && n * -1) || 0),
								position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
								clones = this._core.clones().length,
								load = $.proxy(function (i, v) {
									this.load(v)
								}, this);
							if (settings.lazyLoadEager > 0) {
								n += settings.lazyLoadEager;
								if (settings.loop) {
									position -= settings.lazyLoadEager;
									n++;
								}
							}

							while (i++ < n) {
								this.load(clones / 2 + this._core.relative(position));
								clones && $.each(this._core.clones(this._core.relative(position)), load);
								position++;
							}
						}
					}, this)
				};

				this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

				this._core.$element.on(this._handlers);
			};

			Lazy.Defaults = {
				lazyLoad: false,
				lazyLoadEager: 0
			};

			Lazy.prototype.load = function (position) {
				var $item = this._core.$stage.children().eq(position),
					$elements = $item && $item.find('.mh-lazy');

				if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
					return;
				}

				$elements.each($.proxy(function (index, element) {
					var $element = $(element),
						image,
						url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

					this._core.trigger('load', {
						element: $element,
						url: url
					}, 'lazy');

					if ($element.is('img')) {
						$element.one('load.mh.lazy', $.proxy(function () {
							$element.css('opacity', 1);
							this._core.trigger('loaded', {
								element: $element,
								url: url
							}, 'lazy');
						}, this)).attr('src', url);
					} else if ($element.is('source')) {
						$element.one('load.mh.lazy', $.proxy(function () {
							this._core.trigger('loaded', {
								element: $element,
								url: url
							}, 'lazy');
						}, this)).attr('srcset', url);
					} else {
						image = new Image();
						image.onload = $.proxy(function () {
							$element.css({
								'background-image': 'url("' + url + '")',
								'opacity': '1'
							});
							this._core.trigger('loaded', {
								element: $element,
								url: url
							}, 'lazy');
						}, this);
						image.src = url;
					}
				}, this));

				this._loaded.push($item.get(0));
			};

			Lazy.prototype.destroy = function () {
				var handler, property;

				for (handler in this.handlers) {
					this._core.$element.off(handler, this.handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.mhSlider.Constructor.Plugins.Lazy = Lazy;

		})(window.Zepto || window.jQuery, window, document);

		(function ($, window, document, undefined) {

			var AutoHeight = function (slider) {

				this._core = slider;

				this._previousHeight = null;

				this._handlers = {
					'initialized.mh.slider refreshed.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.settings.autoHeight) {
							this.update();
						}
					}, this),
					'changed.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
							this.update();
						}
					}, this),
					'loaded.mh.lazy': $.proxy(function (e) {
						if (e.namespace && this._core.settings.autoHeight &&
							e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
							this.update();
						}
					}, this)
				};

				this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

				this._core.$element.on(this._handlers);
				this._intervalId = null;
				var refThis = this;

				$(window).on('load', function () {
					if (refThis._core.settings.autoHeight) {
						refThis.update();
					}
				});

				$(window).resize(function () {
					if (refThis._core.settings.autoHeight) {
						if (refThis._intervalId != null) {
							clearTimeout(refThis._intervalId);
						}

						refThis._intervalId = setTimeout(function () {
							refThis.update();
						}, 250);
					}
				});

			};

			AutoHeight.Defaults = {
				autoHeight: false,
				autoHeightClass: 'mh-height'
			};

			AutoHeight.prototype.update = function () {
				var start = this._core._current,
					end = start + this._core.settings.items,
					lazyLoadEnabled = this._core.settings.lazyLoad,
					visible = this._core.$stage.children().toArray().slice(start, end),
					heights = [],
					maxheight = 0;

				$.each(visible, function (index, item) {
					heights.push($(item).height());
				});

				maxheight = Math.max.apply(null, heights);

				if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
					maxheight = this._previousHeight;
				}

				this._previousHeight = maxheight;

				this._core.$stage.parent()
					.height(maxheight)
					.addClass(this._core.settings.autoHeightClass);
			};

			AutoHeight.prototype.destroy = function () {
				var handler, property;

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] !== 'function' && (this[property] = null);
				}
			};

			$.fn.mhSlider.Constructor.Plugins.AutoHeight = AutoHeight;

		})(window.Zepto || window.jQuery, window, document);

		(function ($, window, document, undefined) {

			var Video = function (slider) {

				this._core = slider;

				this._videos = {};

				this._playing = null;

				this._handlers = {
					'initialized.mh.slider': $.proxy(function (e) {
						if (e.namespace) {
							this._core.register({
								type: 'state',
								name: 'playing',
								tags: ['interacting']
							});
						}
					}, this),
					'resize.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
							e.preventDefault();
						}
					}, this),
					'refreshed.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.is('resizing')) {
							this._core.$stage.find('.cloned .mh-video-frame').remove();
						}
					}, this),
					'changed.mh.slider': $.proxy(function (e) {
						if (e.namespace && e.property.name === 'position' && this._playing) {
							this.stop();
						}
					}, this),
					'prepared.mh.slider': $.proxy(function (e) {
						if (!e.namespace) {
							return;
						}

						var $element = $(e.content).find('.mh-video');

						if ($element.length) {
							$element.css('display', 'none');
							this.fetch($element, $(e.content));
						}
					}, this)
				};

				this._core.options = $.extend({}, Video.Defaults, this._core.options);

				this._core.$element.on(this._handlers);

				this._core.$element.on('click.mh.video', '.mh-video-play-icon', $.proxy(function (e) {
					this.play(e);
				}, this));
			};

			Video.Defaults = {
				video: false,
				videoHeight: false,
				videoWidth: false
			};

			Video.prototype.fetch = function (target, item) {
				var type = (function () {
						if (target.attr('data-vimeo-id')) {
							return 'vimeo';
						} else if (target.attr('data-vzaar-id')) {
							return 'vzaar'
						} else {
							return 'youtube';
						}
					})(),
					id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
					width = target.attr('data-width') || this._core.settings.videoWidth,
					height = target.attr('data-height') || this._core.settings.videoHeight,
					url = target.attr('href');

				if (url) {


					id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

					if (id[3].indexOf('youtu') > -1) {
						type = 'youtube';
					} else if (id[3].indexOf('vimeo') > -1) {
						type = 'vimeo';
					} else if (id[3].indexOf('vzaar') > -1) {
						type = 'vzaar';
					} else {
						throw new Error('Video URL not supported.');
					}
					id = id[6];
				} else {
					throw new Error('Missing video URL.');
				}

				this._videos[url] = {
					type: type,
					id: id,
					width: width,
					height: height
				};

				item.attr('data-video', url);

				this.thumbnail(target, this._videos[url]);
			};

			Video.prototype.thumbnail = function (target, video) {
				var tnLink,
					icon,
					path,
					dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
					customTn = target.find('img'),
					srcType = 'src',
					lazyClass = '',
					settings = this._core.settings,
					create = function (path) {
						icon = '<div class="mh-video-play-icon"></div>';

						if (settings.lazyLoad) {
							tnLink = $('<div/>', {
								"class": 'mh-video-tn ' + lazyClass,
								"srcType": path
							});
						} else {
							tnLink = $('<div/>', {
								"class": "mh-video-tn",
								"style": 'opacity:1;background-image:url(' + path + ')'
							});
						}
						target.after(tnLink);
						target.after(icon);
					};

				target.wrap($('<div/>', {
					"class": "mh-video-wrapper",
					"style": dimensions
				}));

				if (this._core.settings.lazyLoad) {
					srcType = 'data-src';
					lazyClass = 'mh-lazy';
				}

				if (customTn.length) {
					create(customTn.attr(srcType));
					customTn.remove();
					return false;
				}

				if (video.type === 'youtube') {
					path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
					create(path);
				} else if (video.type === 'vimeo') {
					$.ajax({
						type: 'GET',
						url: '//vimeo.com/api/v2/video/' + video.id + '.json',
						jsonp: 'callback',
						dataType: 'jsonp',
						success: function (data) {
							path = data[0].thumbnail_large;
							create(path);
						}
					});
				} else if (video.type === 'vzaar') {
					$.ajax({
						type: 'GET',
						url: '//vzaar.com/api/videos/' + video.id + '.json',
						jsonp: 'callback',
						dataType: 'jsonp',
						success: function (data) {
							path = data.framegrab_url;
							create(path);
						}
					});
				}
			};

			Video.prototype.stop = function () {
				this._core.trigger('stop', null, 'video');
				this._playing.find('.mh-video-frame').remove();
				this._playing.removeClass('mh-video-playing');
				this._playing = null;
				this._core.leave('playing');
				this._core.trigger('stopped', null, 'video');
			};

			Video.prototype.play = function (event) {
				var target = $(event.target),
					item = target.closest('.' + this._core.settings.itemClass),
					video = this._videos[item.attr('data-video')],
					width = video.width || '100%',
					height = video.height || this._core.$stage.height(),
					html,
					iframe;

				if (this._playing) {
					return;
				}

				this._core.enter('playing');
				this._core.trigger('play', null, 'video');

				item = this._core.items(this._core.relative(item.index()));

				this._core.reset(item.index());

				html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
				html.attr('height', height);
				html.attr('width', width);
				if (video.type === 'youtube') {
					html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
				} else if (video.type === 'vimeo') {
					html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
				} else if (video.type === 'vzaar') {
					html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
				}

				iframe = $(html).wrap('<div class="mh-video-frame" />').insertAfter(item.find('.mh-video'));

				this._playing = item.addClass('mh-video-playing');
			};

			Video.prototype.isInFullScreen = function () {
				var element = document.fullscreenElement || document.mozFullScreenElement ||
					document.webkitFullscreenElement;

				return element && $(element).parent().hasClass('mh-video-frame');
			};

			Video.prototype.destroy = function () {
				var handler, property;

				this._core.$element.off('click.mh.video');

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.mhSlider.Constructor.Plugins.Video = Video;

		})(window.Zepto || window.jQuery, window, document);

		(function ($, window, document, undefined) {

			var Animate = function (scope) {
				this.core = scope;
				this.core.options = $.extend({}, Animate.Defaults, this.core.options);
				this.swapping = true;
				this.previous = undefined;
				this.next = undefined;

				this.handlers = {
					'change.mh.slider': $.proxy(function (e) {
						if (e.namespace && e.property.name == 'position') {
							this.previous = this.core.current();
							this.next = e.property.value;
						}
					}, this),
					'drag.mh.slider dragged.mh.slider translated.mh.slider': $.proxy(function (e) {
						if (e.namespace) {
							this.swapping = e.type == 'translated';
						}
					}, this),
					'translate.mh.slider': $.proxy(function (e) {
						if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
							this.swap();
						}
					}, this)
				};

				this.core.$element.on(this.handlers);
			};

			Animate.Defaults = {
				animateOut: false,
				animateIn: false
			};

			Animate.prototype.swap = function () {

				if (this.core.settings.items !== 1) {
					return;
				}

				if (!$.support.animation || !$.support.transition) {
					return;
				}

				this.core.speed(0);

				var left,
					clear = $.proxy(this.clear, this),
					previous = this.core.$stage.children().eq(this.previous),
					next = this.core.$stage.children().eq(this.next),
					incoming = this.core.settings.animateIn,
					outgoing = this.core.settings.animateOut;

				if (this.core.current() === this.previous) {
					return;
				}

				if (outgoing) {
					left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
					previous.one($.support.animation.end, clear)
						.css({
							'left': left + 'px'
						})
						.addClass('animated mh-animated-out')
						.addClass(outgoing);
				}

				if (incoming) {
					next.one($.support.animation.end, clear)
						.addClass('animated mh-animated-in')
						.addClass(incoming);
				}
			};

			Animate.prototype.clear = function (e) {
				$(e.target).css({
						'left': ''
					})
					.removeClass('animated mh-animated-out mh-animated-in')
					.removeClass(this.core.settings.animateIn)
					.removeClass(this.core.settings.animateOut);
				this.core.onTransitionEnd();
			};

			Animate.prototype.destroy = function () {
				var handler, property;

				for (handler in this.handlers) {
					this.core.$element.off(handler, this.handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.mhSlider.Constructor.Plugins.Animate = Animate;

		})(window.Zepto || window.jQuery, window, document);
		(function ($, window, document, undefined) {

			var Autoplay = function (slider) {

				this._core = slider;

				this._call = null;

				this._time = 0;

				this._timeout = 0;

				this._paused = true;

				this._handlers = {
					'changed.mh.slider': $.proxy(function (e) {
						if (e.namespace && e.property.name === 'settings') {
							if (this._core.settings.autoplay) {
								this.play();
							} else {
								this.stop();
							}
						} else if (e.namespace && e.property.name === 'position' && this._paused) {
							this._time = 0;
						}
					}, this),
					'initialized.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.settings.autoplay) {
							this.play();
						}
					}, this),
					'play.mh.autoplay': $.proxy(function (e, t, s) {
						if (e.namespace) {
							this.play(t, s);
						}
					}, this),
					'stop.mh.autoplay': $.proxy(function (e) {
						if (e.namespace) {
							this.stop();
						}
					}, this),
					'mouseover.mh.autoplay': $.proxy(function () {
						if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
							this.pause();
						}
					}, this),
					'mouseleave.mh.autoplay': $.proxy(function () {
						if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
							this.play();
						}
					}, this),
					'touchstart.mh.core': $.proxy(function () {
						if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
							this.pause();
						}
					}, this),
					'touchend.mh.core': $.proxy(function () {
						if (this._core.settings.autoplayHoverPause) {
							this.play();
						}
					}, this)
				};

				this._core.$element.on(this._handlers);

				this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
			};

			Autoplay.Defaults = {
				autoplay: false,
				autoplayTimeout: 5000,
				autoplayHoverPause: false,
				autoplaySpeed: false
			};

			Autoplay.prototype._next = function (speed) {
				this._call = window.setTimeout(
					$.proxy(this._next, this, speed),
					this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
				);

				if (this._core.is('interacting') || document.hidden) {
					return;
				}
				this._core.next(speed || this._core.settings.autoplaySpeed);
			}

			Autoplay.prototype.read = function () {
				return new Date().getTime() - this._time;
			};

			Autoplay.prototype.play = function (timeout, speed) {
				var elapsed;

				if (!this._core.is('rotating')) {
					this._core.enter('rotating');
				}

				timeout = timeout || this._core.settings.autoplayTimeout;

				elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

				if (this._paused) {
					this._time = this.read();
					this._paused = false;
				} else {
					window.clearTimeout(this._call);
				}

				this._time += this.read() % timeout - elapsed;

				this._timeout = timeout;
				this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
			};

			Autoplay.prototype.stop = function () {
				if (this._core.is('rotating')) {
					// Reset the clock.
					this._time = 0;
					this._paused = true;

					window.clearTimeout(this._call);
					this._core.leave('rotating');
				}
			};

			Autoplay.prototype.pause = function () {
				if (this._core.is('rotating') && !this._paused) {
					this._time = this.read();
					this._paused = true;

					window.clearTimeout(this._call);
				}
			};

			Autoplay.prototype.destroy = function () {
				var handler, property;

				this.stop();

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.mhSlider.Constructor.Plugins.autoplay = Autoplay;

		})(window.Zepto || window.jQuery, window, document);
		(function ($, window, document, undefined) {
			'use strict';

			var Navigation = function (slider) {

				this._core = slider;

				this._initialized = false;

				this._pages = [];

				this._controls = {};

				this._templates = [];

				this.$element = this._core.$element;

				this._overrides = {
					next: this._core.next,
					prev: this._core.prev,
					to: this._core.to
				};

				this._handlers = {
					'prepared.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.settings.dotsData) {
							this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
								$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
						}
					}, this),
					'added.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.settings.dotsData) {
							this._templates.splice(e.position, 0, this._templates.pop());
						}
					}, this),
					'remove.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.settings.dotsData) {
							this._templates.splice(e.position, 1);
						}
					}, this),
					'changed.mh.slider': $.proxy(function (e) {
						if (e.namespace && e.property.name == 'position') {
							this.draw();
						}
					}, this),
					'initialized.mh.slider': $.proxy(function (e) {
						if (e.namespace && !this._initialized) {
							this._core.trigger('initialize', null, 'navigation');
							this.initialize();
							this.update();
							this.draw();
							this._initialized = true;
							this._core.trigger('initialized', null, 'navigation');
						}
					}, this),
					'refreshed.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._initialized) {
							this._core.trigger('refresh', null, 'navigation');
							this.update();
							this.draw();
							this._core.trigger('refreshed', null, 'navigation');
						}
					}, this)
				};

				this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

				this.$element.on(this._handlers);
			};

			Navigation.Defaults = {
				nav: true,
				navText: [
					'<span aria-label="' + 'Previous' + '">&#10094;</span>',
					'<span aria-label="' + 'Next' + '">&#10095;</span>'
				],
				navSpeed: false,
				navElement: 'button type="button" role="presentation"',
				navContainer: false,
				navContainerClass: 'mh-nav',
				navClass: [
					'mh-prev',
					'mh-next'
				],
				slideBy: 1,
				dotClass: 'mh-dot',
				dotsClass: 'mh-dots',
				dots: true,
				dotsEach: false,
				dotsData: false,
				dotsSpeed: false,
				dotsContainer: false
			};

			Navigation.prototype.initialize = function () {
				var override,
					settings = this._core.settings;

				this._controls.$relative = (settings.navContainer ? $(settings.navContainer) :
					$('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

				this._controls.$previous = $('<' + settings.navElement + '>')
					.addClass(settings.navClass[0])
					.html(settings.navText[0])
					.prependTo(this._controls.$relative)
					.on('click', $.proxy(function (e) {
						this.prev(settings.navSpeed);
					}, this));
				this._controls.$next = $('<' + settings.navElement + '>')
					.addClass(settings.navClass[1])
					.html(settings.navText[1])
					.appendTo(this._controls.$relative)
					.on('click', $.proxy(function (e) {
						this.next(settings.navSpeed);
					}, this));

				if (!settings.dotsData) {
					this._templates = [$('<button role="button">')
						.addClass(settings.dotClass)
						.append($('<span>'))
						.prop('outerHTML')
					];
				}

				this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) :
					$('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

				this._controls.$absolute.on('click', 'button', $.proxy(function (e) {
					var index = $(e.target).parent().is(this._controls.$absolute) ?
						$(e.target).index() : $(e.target).parent().index();

					e.preventDefault();

					this.to(index, settings.dotsSpeed);
				}, this));

				for (override in this._overrides) {
					this._core[override] = $.proxy(this[override], this);
				}
			};

			Navigation.prototype.destroy = function () {
				var handler, control, property, override, settings;
				settings = this._core.settings;

				for (handler in this._handlers) {
					this.$element.off(handler, this._handlers[handler]);
				}
				for (control in this._controls) {
					if (control === '$relative' && settings.navContainer) {
						this._controls[control].html('');
					} else {
						this._controls[control].remove();
					}
				}
				for (override in this.overides) {
					this._core[override] = this._overrides[override];
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			Navigation.prototype.update = function () {
				var i, j, k,
					lower = this._core.clones().length / 2,
					upper = lower + this._core.items().length,
					maximum = this._core.maximum(true),
					settings = this._core.settings,
					size = settings.center || settings.autoWidth || settings.dotsData ?
					1 : settings.dotsEach || settings.items;

				if (settings.slideBy !== 'page') {
					settings.slideBy = Math.min(settings.slideBy, settings.items);
				}

				if (settings.dots || settings.slideBy == 'page') {
					this._pages = [];

					for (i = lower, j = 0, k = 0; i < upper; i++) {
						if (j >= size || j === 0) {
							this._pages.push({
								start: Math.min(maximum, i - lower),
								end: i - lower + size - 1
							});
							if (Math.min(maximum, i - lower) === maximum) {
								break;
							}
							j = 0, ++k;
						}
						j += this._core.mergers(this._core.relative(i));
					}
				}
			};

			Navigation.prototype.draw = function () {
				var difference,
					settings = this._core.settings,
					disabled = this._core.items().length <= settings.items,
					index = this._core.relative(this._core.current()),
					loop = settings.loop || settings.rewind;

				this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

				if (settings.nav) {
					this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
					this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
				}

				this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

				if (settings.dots) {
					difference = this._pages.length - this._controls.$absolute.children().length;

					if (settings.dotsData && difference !== 0) {
						this._controls.$absolute.html(this._templates.join(''));
					} else if (difference > 0) {
						this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
					} else if (difference < 0) {
						this._controls.$absolute.children().slice(difference).remove();
					}

					this._controls.$absolute.find('.active').removeClass('active');
					this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
				}
			};

			Navigation.prototype.onTrigger = function (event) {
				var settings = this._core.settings;

				event.page = {
					index: $.inArray(this.current(), this._pages),
					count: this._pages.length,
					size: settings && (settings.center || settings.autoWidth || settings.dotsData ?
						1 : settings.dotsEach || settings.items)
				};
			};

			Navigation.prototype.current = function () {
				var current = this._core.relative(this._core.current());
				return $.grep(this._pages, $.proxy(function (page, index) {
					return page.start <= current && page.end >= current;
				}, this)).pop();
			};

			Navigation.prototype.getPosition = function (successor) {
				var position, length,
					settings = this._core.settings;

				if (settings.slideBy == 'page') {
					position = $.inArray(this.current(), this._pages);
					length = this._pages.length;
					successor ? ++position : --position;
					position = this._pages[((position % length) + length) % length].start;
				} else {
					position = this._core.relative(this._core.current());
					length = this._core.items().length;
					successor ? position += settings.slideBy : position -= settings.slideBy;
				}

				return position;
			};

			Navigation.prototype.next = function (speed) {
				$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
			};

			Navigation.prototype.prev = function (speed) {
				$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
			};

			Navigation.prototype.to = function (position, speed, standard) {
				var length;

				if (!standard && this._pages.length) {
					length = this._pages.length;
					$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
				} else {
					$.proxy(this._overrides.to, this._core)(position, speed);
				}
			};

			$.fn.mhSlider.Constructor.Plugins.Navigation = Navigation;

		})(window.Zepto || window.jQuery, window, document);

		(function ($, window, document, undefined) {
			'use strict';

			var Hash = function (slider) {

				this._core = slider;

				this._hashes = {};

				this.$element = this._core.$element;

				this._handlers = {
					'initialized.mh.slider': $.proxy(function (e) {
						if (e.namespace && this._core.settings.startPosition === 'URLHash') {
							$(window).trigger('hashchange.mh.navigation');
						}
					}, this),
					'prepared.mh.slider': $.proxy(function (e) {
						if (e.namespace) {
							var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

							if (!hash) {
								return;
							}

							this._hashes[hash] = e.content;
						}
					}, this),
					'changed.mh.slider': $.proxy(function (e) {
						if (e.namespace && e.property.name === 'position') {
							var current = this._core.items(this._core.relative(this._core.current())),
								hash = $.map(this._hashes, function (item, hash) {
									return item === current ? hash : null;
								}).join();

							if (!hash || window.location.hash.slice(1) === hash) {
								return;
							}

							window.location.hash = hash;
						}
					}, this)
				};

				this._core.options = $.extend({}, Hash.Defaults, this._core.options);

				this.$element.on(this._handlers);

				$(window).on('hashchange.mh.navigation', $.proxy(function (e) {
					var hash = window.location.hash.substring(1),
						items = this._core.$stage.children(),
						position = this._hashes[hash] && items.index(this._hashes[hash]);

					if (position === undefined || position === this._core.current()) {
						return;
					}

					this._core.to(this._core.relative(position), false, true);
				}, this));
			};

			Hash.Defaults = {
				URLhashListener: false
			};

			Hash.prototype.destroy = function () {
				var handler, property;

				$(window).off('hashchange.mh.navigation');

				for (handler in this._handlers) {
					this._core.$element.off(handler, this._handlers[handler]);
				}
				for (property in Object.getOwnPropertyNames(this)) {
					typeof this[property] != 'function' && (this[property] = null);
				}
			};

			$.fn.mhSlider.Constructor.Plugins.Hash = Hash;

		})(window.Zepto || window.jQuery, window, document);
		(function ($, window, document, undefined) {

			var style = $('<support>').get(0).style,
				prefixes = 'Webkit Moz O ms'.split(' '),
				events = {
					transition: {
						end: {
							WebkitTransition: 'webkitTransitionEnd',
							MozTransition: 'transitionend',
							OTransition: 'oTransitionEnd',
							transition: 'transitionend'
						}
					},
					animation: {
						end: {
							WebkitAnimation: 'webkitAnimationEnd',
							MozAnimation: 'animationend',
							OAnimation: 'oAnimationEnd',
							animation: 'animationend'
						}
					}
				},
				tests = {
					csstransforms: function () {
						return !!test('transform');
					},
					csstransforms3d: function () {
						return !!test('perspective');
					},
					csstransitions: function () {
						return !!test('transition');
					},
					cssanimations: function () {
						return !!test('animation');
					}
				};

			function test(property, prefixed) {
				var result = false,
					upper = property.charAt(0).toUpperCase() + property.slice(1);

				$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
					if (style[property] !== undefined) {
						result = prefixed ? property : true;
						return false;
					}
				});

				return result;
			}

			function prefixed(property) {
				return test(property, true);
			}

			if (tests.csstransitions()) {
				$.support.transition = new String(prefixed('transition'))
				$.support.transition.end = events.transition.end[$.support.transition];
			}

			if (tests.cssanimations()) {
				$.support.animation = new String(prefixed('animation'))
				$.support.animation.end = events.animation.end[$.support.animation];
			}

			if (tests.csstransforms()) {
				$.support.transform = new String(prefixed('transform'));
				$.support.transform3d = tests.csstransforms3d();
			}

		})(window.Zepto || window.jQuery, window, document);

	}(jQuery));
} catch {}
/* digital-clock */
try {
	setInterval(() => {
		const time = document.querySelectorAll(".mh-digital-clock");
		for (let a = 0; a < time.length; a++) {
			let date = new Date();
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let seconds = date.getSeconds();
			let day_night = "AM";

			if (hours > 12) {
				day_night = "PM";
				hours = hours - 12;
			}
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			if (hours < 10) {
				hours = "0" + hours;
			}
			time[a].innerHTML = "<font class='mh-dc-hours'>" + hours + "</font>:<font class='mh-dc-minutes'>" +
				minutes + "</font>:<font class='mh-dc-seconds'>" + seconds + "</font> <font class='mh-dc-day-night'>" + day_night + "</font>";
		}
	});
} catch {}

/** analog clock */
try {
	let analog_clock = document.querySelector('.mh-analog-clock');
	let analog = '<span class="mh-hour12 mh-hour">12</span>' + '<span class="mh-hour11 mh-hourl">|</span>' +
		'<span class="mh-hour10 mh-hourl">|</span>' + '<span class="mh-hour mh-hour9">9</span>' +
		'<span class="mh-hour8 mh-hourl">|</span>' + '<span class="mh-hour7 mh-hourl">|</span>' +
		'<span class="mh-hour mh-hour6">6</span>' + '<span class="mh-hour5 mh-hourl">|</span>' +
		'<span class="mh-hour4 mh-hourl">|</span>' + '<span class="mh-hour mh-hour3">3</span>' +
		'<span class="mh-hour2 mh-hourl">|</span>' + '<span class="mh-hour1 mh-hourl">|</span>' + '<span class="mh-hour">' +
		'<span class="hr" id="hr">' +
		'</span>' + '</span>' + '<span class="mh-minute">' + '<span class="mn" id="mn">' + '</span>' + '</span>' +
		'<span class="mh-second">' + '<span class="sc" id="sc">' + '</span>' + '</span>';
	analog_clock.innerHTML = analog;
	let hr = analog_clock.querySelector('#hr');
	let mn = analog_clock.querySelector('#mn');
	let sc = analog_clock.querySelector('#sc');

	setInterval(() => {
		let deg = 6;
		let day = new Date();
		let hh = day.getHours() * 30;
		let mm = day.getMinutes() * deg;
		let ss = day.getSeconds() * deg;

		hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
		mn.style.transform = `rotateZ(${mm}deg)`;
		sc.style.transform = `rotateZ(${ss}deg)`;
	});
} catch {}
/**
 * Slider
 */
