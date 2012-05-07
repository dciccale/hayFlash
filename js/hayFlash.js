/*!
 * hayFlash.js
 * Copyright (c) 2012 Denis Ciccale (@tdecs)
 * Released under MIT license
 *
 * Usage:
 *
 * if (window.hayFlash) {
 *   // show flash thing
 *   console.log('flash version is:', hayFlash);
 * } else {
 *   // show an image?
 * }
 *
 */
window.hayFlash = function(a, b) {
  try {
    b = new ActiveXObject(a+b+'.'+a+b).GetVariable('$version')
  } catch (e) {
    b = navigator.plugins[a+' '+b];
    b = b ? b.description : "";
  }

  return b.match(/\d+/)[0];

}('Shockwave','Flash')