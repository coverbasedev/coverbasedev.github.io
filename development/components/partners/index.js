function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { i as insertStyles } from '../../assets/scripts/insert-styles-46b31c24.js';
var Marquee = /*#__PURE__*/_createClass(function Marquee(_ref) {
  var _this = this;
  var marqueeElement = _ref.marqueeElement,
    templateListElement = _ref.templateListElement,
    movingElement = _ref.movingElement,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 10 : _ref$duration;
  _classCallCheck(this, Marquee);
  _defineProperty(this, "getListsNumber", function () {
    var _window = window,
      innerWidth = _window.innerWidth;
    return 2 * Math.ceil(innerWidth / _this.templateListElement.clientWidth || 1);
  });
  _defineProperty(this, "addEventListenerToImages", function () {
    var images = _this.marqueeElement.querySelectorAll('img');
    images.forEach(function (image) {
      if (!image.complete) {
        image.addEventListener('load', _this.update);
      }
    });
  });
  _defineProperty(this, "init", function () {
    _this.addEventListenerToImages();
    _this.update();
    _this.initResizeObserver();
  });
  _defineProperty(this, "initResizeObserver", function () {
    _this.resizeObserver.observe(_this.marqueeElement);
  });
  _defineProperty(this, "generateListElement", function () {
    var templateElementCopy = _this.templateListElement.cloneNode(true);
    delete templateElementCopy.dataset.role;
    return templateElementCopy;
  });
  _defineProperty(this, "update", function () {
    if (_this.getListsNumber()) {
      var listsNeeded = _this.getListsNumber();
      if (_this.listsNumber <= listsNeeded) {
        var listsToAddNumber = listsNeeded - _this.listsNumber;
        for (var listIndex = 0; listIndex < listsToAddNumber; listIndex += 1) {
          _this.templateListElement.after(_this.generateListElement());
        }
        _this.listsNumber = listsNeeded;
        _this.movingElement.style.animationDuration = "".concat(_this.listsNumber * _this.duration, "s");
      }
    }
  });
  this.marqueeElement = marqueeElement;
  this.templateListElement = templateListElement;
  this.movingElement = movingElement;
  this.listsNumber = 1;
  this.duration = duration;
  this.resizeObserver = new ResizeObserver(function () {
    _this.update();
  });
});
var styles = "@media screen and (max-width: 991px) {\n  .partners__moving-line {\n    min-width: max-content;\n    animation-play-state: running;\n    animation-iteration-count: infinite;\n    animation-duration: 10s;\n    animation-timing-function: linear;\n    animation-name: movingLine;\n    width: max-content;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .partners__list:not(:first-child) {\n    display: none;\n  }\n}";
insertStyles(styles);
var component = document.querySelector('[data-component-id="partners"]');
var templateListElement = component.querySelector('[data-role="marquee-list"]');
var movingElement = component.querySelector('[data-role="moving-line"]');
var logosMarquee = new Marquee({
  marqueeElement: component,
  templateListElement: templateListElement,
  movingElement: movingElement
});
logosMarquee.init();
