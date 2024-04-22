function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { i as insertStyles } from '../../assets/scripts/insert-styles-46b31c24.js';
import { C as CLASSES } from '../../assets/scripts/classes-c2f03831.js';
var setScrollbarWidth = function setScrollbarWidth() {
  var rootElement = document.documentElement;
  var scrollWidth = window.innerWidth - document.documentElement.clientWidth;
  rootElement.style.setProperty('--js-scrollbar-width', "".concat(scrollWidth, "px"));
};
var isScrollLocked = function isScrollLocked() {
  return document.body.classList.contains(CLASSES.LOCKED);
};
var lockScroll = function lockScroll() {
  if (isScrollLocked()) {
    return;
  }
  setScrollbarWidth();
  document.body.classList.add(CLASSES.LOCKED);
};
var unlockScroll = function unlockScroll() {
  document.body.classList.remove(CLASSES.LOCKED);
};
var styles = ".main-navigation.js--active .main-navigation__background {\n  transform: translate(0, 0%);\n}\n\n.secondary-navigation.js--active {\n  transform: translate(0, 0%);\n}\n\n.secondary-navigation__inner {\n  scrollbar-width: none;\n}\n.secondary-navigation__inner::-webkit-scrollbar {\n  width: 0;\n}\n\n.burger.js--active .burger__line {\n  transform: rotate(0deg) translate(0px, 0px);\n}\n.burger.js--active .burger__line.burger__line--top {\n  transform: rotate(45deg) translate(2px, 2px);\n}\n.burger.js--active .burger__line.burger__line--bottom {\n  transform: rotate(-45deg) translate(2px, -3px);\n}";
var openingLogic = function openingLogic(component, SELECTORS) {
  var mainNavigation = component.querySelector(SELECTORS.MAIN_NAVIGATION);
  var secondaryNavigation = component.querySelector(SELECTORS.SECONDARY_NAVIGATION);
  var burger = component.querySelector(SELECTORS.BURGER);
  var closeButtons = _toConsumableArray(component.querySelectorAll(SELECTORS.CLOSE_BUTTONS));
  var arrayOfNecessaryElements = [mainNavigation, closeButtons, secondaryNavigation, burger];
  var filteredArrayOfNecessaryElements = arrayOfNecessaryElements.filter(Boolean);
  if (arrayOfNecessaryElements.length !== filteredArrayOfNecessaryElements.length) {
    // eslint-disable-next-line no-console
    console.error('Some elements were not found', arrayOfNecessaryElements);
    return;
  }
  var closeNavigation = function closeNavigation() {
    mainNavigation.classList.remove(CLASSES.ACTIVE);
    secondaryNavigation.classList.remove(CLASSES.ACTIVE);
    burger.classList.remove(CLASSES.ACTIVE);
    unlockScroll();
  };
  var openNavigation = function openNavigation() {
    lockScroll();
    mainNavigation.classList.add(CLASSES.ACTIVE);
    secondaryNavigation.classList.add(CLASSES.ACTIVE);
    burger.classList.add(CLASSES.ACTIVE);
  };
  var toggleNavigation = function toggleNavigation() {
    if (burger.classList.contains(CLASSES.ACTIVE)) {
      closeNavigation();
    } else {
      openNavigation();
    }
  };
  burger.addEventListener('click', toggleNavigation);
  window.addEventListener('resize', closeNavigation);
  closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener('click', closeNavigation);
  });
};
insertStyles(styles);
var SELECTORS = {
  COMPONENT: '[data-component-id="navigation-wrapper"]',
  MAIN_NAVIGATION: '[data-role="main-navigation"]',
  SECONDARY_NAVIGATION: '[data-role="secondary-navigation"]',
  CLOSE_BUTTONS: '[data-role="close-navigation"]',
  BURGER: '[data-role="burger"]'
};
var component = document.querySelector(SELECTORS.COMPONENT);
var initLogicNavigationWrapper = function initLogicNavigationWrapper() {
  openingLogic(component, SELECTORS);
};
initLogicNavigationWrapper();
