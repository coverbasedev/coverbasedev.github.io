import { C as CLASSES } from './assets/scripts/classes-c2f03831.js';
var main = '';
var CUSTOM_EVENTS = {
  FILES_LOAD: 'customFilesLoad'
};
window.addEventListener(CUSTOM_EVENTS.FILES_LOAD, function () {
  document.body.classList.add(CLASSES.LOADED);
});
