function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { i as insertStyles } from '../../assets/scripts/insert-styles-46b31c24.js';
var styles = ".pointer {\n  background: radial-gradient(#fff 80%, #000 100%);\n  background: #fff;\n  mask-image: radial-gradient(#fff 0%, transparent 75%);\n  opacity: 0.5;\n}\n.pointer.pointer--light {\n  opacity: 1;\n  background: rgba(36, 36, 36, 0.4431372549);\n}";

/* eslint-disable no-param-reassign */

insertStyles(styles);
var SELECTORS = {
  COMPONENT: '[data-component-id="pointer-wrapper"]'
};
var components = _toConsumableArray(document.querySelectorAll(SELECTORS.COMPONENT));
var movePointerWrapper = function movePointerWrapper(event) {
  var x = event.clientX;
  var y = event.clientY;
  components.forEach(function (component) {
    component.style.top = "".concat(y, "px");
    component.style.left = "".concat(x, "px");
  });
};
var initLogicPointerWrapper = function initLogicPointerWrapper() {
  window.addEventListener('mousemove', movePointerWrapper);
};
initLogicPointerWrapper();
