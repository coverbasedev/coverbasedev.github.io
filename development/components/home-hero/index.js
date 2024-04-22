import { i as insertStyles } from '../../assets/scripts/insert-styles-46b31c24.js';
var styles = "";
insertStyles(styles);
var SELECTORS = {
  COMPONENT: '[data-component-id="home-hero"]',
  STAKEHOLDER_TEXT: '[data-role="stakeholder-text"]',
  STAKEHOLDERS_LIST: '[data-role="stakeholders-list"]'
};
var component = document.querySelector(SELECTORS.COMPONENT);
var initLogicPointerWrapperCopy = function initLogicPointerWrapperCopy() {
  var stakeholderNode = component.querySelector(SELECTORS.STAKEHOLDER_TEXT);
  var stakeholdersList = component.querySelector(SELECTORS.STAKEHOLDERS_LIST);
  var arrayOfRequiredElements = [stakeholderNode, stakeholdersList];
  var filteredArrayOfRequiredElements = arrayOfRequiredElements.filter(Boolean);
  if (arrayOfRequiredElements.length !== filteredArrayOfRequiredElements.length) {
    // eslint-disable-next-line no-console
    console.error('Some elements were not found', arrayOfRequiredElements);
    return;
  }
  var stakeholdersArray = [];
  stakeholdersList.childNodes.forEach(function (stakeholder) {
    stakeholdersArray.push(stakeholder.textContent);
  });
  if (stakeholdersArray.length === 0) {
    // eslint-disable-next-line no-console
    console.error('Stakeholders list is empty');
    return;
  }
  var currentTextIndex = 0;
  var currentCharacterIndex = 0;
  var typingSpeed = 35;
  var pauseBetweenTexts = 1200;
  function type() {
    if (currentCharacterIndex === stakeholdersArray[currentTextIndex].length) {
      currentTextIndex = (currentTextIndex + 1) % stakeholdersArray.length;
      currentCharacterIndex = 0;
      setTimeout(type, pauseBetweenTexts);
      return;
    }
    stakeholderNode.innerHTML = stakeholdersArray[currentTextIndex].slice(0, currentCharacterIndex + 1);
    currentCharacterIndex += 1;
    setTimeout(type, typingSpeed);
  }
  type();
};
initLogicPointerWrapperCopy();
