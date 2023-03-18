!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.TTWidInstance=t():e.TTWidInstance=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=17)}([function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return o})),r.d(t,"__assign",(function(){return i})),r.d(t,"__rest",(function(){return a})),r.d(t,"__decorate",(function(){return s})),r.d(t,"__param",(function(){return u})),r.d(t,"__metadata",(function(){return c})),r.d(t,"__awaiter",(function(){return f})),r.d(t,"__generator",(function(){return l})),r.d(t,"__createBinding",(function(){return p})),r.d(t,"__exportStar",(function(){return h})),r.d(t,"__values",(function(){return d})),r.d(t,"__read",(function(){return v})),r.d(t,"__spread",(function(){return y})),r.d(t,"__spreadArrays",(function(){return g})),r.d(t,"__await",(function(){return b})),r.d(t,"__asyncGenerator",(function(){return m})),r.d(t,"__asyncDelegator",(function(){return _})),r.d(t,"__asyncValues",(function(){return w})),r.d(t,"__makeTemplateObject",(function(){return E})),r.d(t,"__importStar",(function(){return O})),r.d(t,"__importDefault",(function(){return S})),r.d(t,"__classPrivateFieldGet",(function(){return A})),r.d(t,"__classPrivateFieldSet",(function(){return C}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function s(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function u(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function p(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function h(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function d(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function g(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function m(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(u,c):f(i[0][2],r)}catch(e){f(i[0][3],e)}var r}function u(e){s("next",e)}function c(e){s("throw",e)}function f(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=d(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function S(e){return e&&e.__esModule?e:{default:e}}function A(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function C(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},function(e,t,r){"use strict";var n=r(7),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===o.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,u=o+2<e.length,c=u?e[o+2]:0,f=i>>2,l=(3&i)<<4|s>>4,p=(15&s)<<2|c>>6,h=63&c;u||(h=64,a||(p=64)),n.push(r[f],r[l],r[p],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var a=((7&o)<<18|(63&(i=e[r++]))<<12|(63&(s=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{i=e[r++];var s=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length?r[e.charAt(o)]:0,s=++o<e.length?r[e.charAt(o)]:64,u=++o<e.length?r[e.charAt(o)]:64;if(++o,null==i||null==a||null==s||null==u)throw Error();var c=i<<2|a>>4;if(n.push(c),64!==s){var f=a<<4&240|s>>2;if(n.push(f),64!==u){var l=s<<6&192|u;n.push(l)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},c=function(e){try{return u.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=f(e[r],t[r]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var d=function(e){function t(r,n){var o=e.call(this,n)||this;return o.code=r,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,v.prototype.create),o}return n.__extends(t,e),t}(Error),v=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?y(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",u=new d(o,s),c=0,f=Object.keys(n);c<f.length;c++){var l=f[c];"_"!==l.slice(-1)&&(l in u&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),u[l]=n[l])}return u},e}();function y(e,t){return e.replace(g,(function(e,r){var n=t[r];return null!=n?String(n):"<"+r+"?>"}))}var g=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){return JSON.parse(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var m=function(e){var t={},r={},n={},o="";try{var i=e.split(".");t=b(c(i[0])||""),r=b(c(i[1])||""),o=i[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],u=this.chain_[1],c=this.chain_[2],f=this.chain_[3],l=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=f^u&(c^f),a=1518500249):(i=u^c^f,a=1859775393):n<60?(i=u&c|f&(u|c),a=2400959708):(i=u^c^f,a=3395469782);o=(s<<5|s>>>27)+i+l+a+r[n]&4294967295;l=f,f=c,c=4294967295&(u<<30|u>>>2),u=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;n<t;){if(0===i)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(o[i]=e.charCodeAt(n),++n,++i===this.blockSize){this.compress_(o),i=0;break}}else for(;n<t;)if(o[i]=e[n],++n,++i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e},e}();var w=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=E),void 0===n.error&&(n.error=E),void 0===n.complete&&(n.complete=E);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}})),this.observers.push(n),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function E(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument "}t.CONSTANTS=o,t.Deferred=l,t.ErrorFactory=v,t.FirebaseError=d,t.MAX_VALUE_MILLIS=144e5,t.RANDOM_FACTOR=.5,t.Sha1=_,t.areCookiesEnabled=function(){return!(!navigator||!navigator.cookieEnabled)},t.assert=i,t.assertionError=a,t.async=function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}},t.base64=u,t.base64Decode=c,t.base64Encode=function(e){var t=s(e);return u.encodeByteArray(t,!0)},t.calculateBackoffMillis=function(e,t,r){void 0===t&&(t=1e3),void 0===r&&(r=2);var n=t*Math.pow(r,e),o=Math.round(.5*n*(Math.random()-.5)*2);return Math.min(144e5,n+o)},t.contains=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var r=new w(e,t);return r.subscribe.bind(r)},t.decode=m,t.deepCopy=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return f(void 0,e)},t.deepExtend=f,t.errorPrefix=O,t.getUA=p,t.isAdmin=function(e){var t=m(e).claims;return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isBrowserExtension=function(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id},t.isElectron=function(){return p().indexOf("Electron/")>=0},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},t.isIE=function(){var e=p();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},t.isIndexedDBAvailable=function(){return"indexedDB"in self&&null!=indexedDB},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())},t.isNode=h,t.isNodeSdk=function(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isSafari=function(){return!h()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},t.isUWP=function(){return p().indexOf("MSAppHost/")>=0},t.isValidFormat=function(e){var t=m(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=m(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),o=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!o&&r>=n&&r<=o},t.issuedAtTime=function(e){var t=m(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=b,t.map=function(e,t,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t.call(r,e[o],o,e));return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.querystring=function(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},n=0,o=Object.entries(e);n<o.length;n++){var i=o[n];r(i[0],i[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319){var a=o-55296;n++,i(n<e.length,"Surrogate pair missing trail surrogate."),o=65536+(a<<10)+(e.charCodeAt(n)-56320)}o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):o<65536?(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,r,n){var o;if(n<t?o="at least "+t:n>r&&(o=0===r?"none":"no more than "+r),o)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".")},t.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(O(e,t,n)+"must be a valid function.")},t.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(O(e,t,n)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.validateIndexedDBOpenable=function(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",o=window.indexedDB.open(n);o.onsuccess=function(){o.result.close(),r||window.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=function(){r=!1},o.onerror=function(){var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))},t.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(O(e,t,n)+"must be a valid firebase namespace.")}}).call(this,r(6))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,i=r(0),a=r(2),s=r(4),u=r(38),c=((n={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",n["bad-app-name"]="Illegal App name: '{$appName}",n["duplicate-app"]="Firebase App named '{$appName}' already exists",n["app-deleted"]="Firebase App named '{$appName}' already deleted",n["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",n["invalid-log-argument"]="First argument to `onLog` must be null or a function.",n),f=new a.ErrorFactory("app","Firebase",c),l=((o={})["@firebase/app"]="fire-core",o["@firebase/analytics"]="fire-analytics",o["@firebase/auth"]="fire-auth",o["@firebase/database"]="fire-rtdb",o["@firebase/functions"]="fire-fn",o["@firebase/installations"]="fire-iid",o["@firebase/messaging"]="fire-fcm",o["@firebase/performance"]="fire-perf",o["@firebase/remote-config"]="fire-rc",o["@firebase/storage"]="fire-gcs",o["@firebase/firestore"]="fire-fst",o["fire-js"]="fire-js",o["firebase-wrapper"]="fire-js-all",o),p=new u.Logger("@firebase/app"),h=function(){function e(e,t,r){var n,o,u=this;this.firebase_=r,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=a.deepCopy(e),this.container=new s.ComponentContainer(t.name),this._addComponent(new s.Component("app",(function(){return u}),"PUBLIC"));try{for(var c=i.__values(this.firebase_.INTERNAL.components.values()),f=c.next();!f.done;f=c.next()){var l=f.value;this._addComponent(l)}}catch(e){n={error:e}}finally{try{f&&!f.done&&(o=c.return)&&o.call(c)}finally{if(n)throw n.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t="[DEFAULT]"),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t="[DEFAULT]"),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){p.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw f.create("app-deleted",{appName:this.name_})},e}();h.prototype.name&&h.prototype.options||h.prototype.delete||console.log("dc");var d=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){var t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t={},r=new Map,n={__esModule:!0,initializeApp:function(r,o){void 0===o&&(o={});if("object"!=typeof o||null===o){o={name:o}}var i=o;void 0===i.name&&(i.name="[DEFAULT]");var s=i.name;if("string"!=typeof s||!s)throw f.create("bad-app-name",{appName:String(s)});if(a.contains(t,s))throw f.create("duplicate-app",{appName:s});var u=new e(r,i,n);return t[s]=u,u},app:o,registerVersion:function(e,t,r){var n,o=null!==(n=l[e])&&void 0!==n?n:e;r&&(o+="-"+r);var i=o.match(/\s|\//),a=t.match(/\s|\//);if(i||a){var u=['Unable to register library "'+o+'" with version "'+t+'":'];return i&&u.push('library name "'+o+'" contains illegal characters (whitespace or "/")'),i&&a&&u.push("and"),a&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void p.warn(u.join(" "))}c(new s.Component(o+"-version",(function(){return{library:o,version:t}}),"VERSION"))},setLogLevel:u.setLogLevel,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw f.create("invalid-log-argument",{appName:name});u.setUserLogHandler(e,t)},apps:null,SDK_VERSION:"7.20.0",INTERNAL:{registerComponent:c,removeApp:function(e){delete t[e]},components:r,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function o(e){if(e=e||"[DEFAULT]",!a.contains(t,e))throw f.create("no-app",{appName:e});return t[e]}function c(s){var u,c,l=s.name;if(r.has(l))return p.debug("There were multiple attempts to register component "+l+"."),"PUBLIC"===s.type?n[l]:null;if(r.set(l,s),"PUBLIC"===s.type){var h=function(e){if(void 0===e&&(e=o()),"function"!=typeof e[l])throw f.create("invalid-app-argument",{appName:l});return e[l]()};void 0!==s.serviceProps&&a.deepExtend(h,s.serviceProps),n[l]=h,e.prototype[l]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=this._getService.bind(this,l);return r.apply(this,s.multipleInstances?e:[])}}try{for(var d=i.__values(Object.keys(t)),v=d.next();!v.done;v=d.next()){var y=v.value;t[y]._addComponent(s)}}catch(e){u={error:e}}finally{try{v&&!v.done&&(c=d.return)&&c.call(d)}finally{if(u)throw u.error}}return"PUBLIC"===s.type?n[l]:null}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),o.App=e,n}(h);return t.INTERNAL=i.__assign(i.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){a.deepExtend(t,e)},createSubscribe:a.createSubscribe,ErrorFactory:a.ErrorFactory,deepExtend:a.deepExtend}),t}(),v=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(a.isBrowser()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var y=self.firebase.SDK_VERSION;y&&y.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var g=d.initializeApp;d.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.isNode()&&p.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),g.apply(void 0,e)};var b=d;!function(e,t){e.INTERNAL.registerComponent(new s.Component("platform-logger",(function(e){return new v(e)}),"PRIVATE")),e.registerVersion("@firebase/app","0.6.11",t),e.registerVersion("fire-js","")}(b),t.default=b,t.firebase=b},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2),i=function(){function e(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e="[DEFAULT]");var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new o.Deferred;this.instancesDeferred.set(t,r);try{var n=this.getOrInitializeService(t);n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=n.__assign({identifier:"[DEFAULT]",optional:!1},e),r=t.identifier,o=t.optional,i=this.normalizeInstanceIdentifier(r);try{var a=this.getOrInitializeService(i);if(!a){if(o)return null;throw Error("Service "+this.name+" is not available")}return a}catch(e){if(o)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService("[DEFAULT]")}catch(e){}try{for(var o=n.__values(this.instancesDeferred.entries()),i=o.next();!i.done;i=o.next()){var a=n.__read(i.value,2),s=a[0],u=a[1],c=this.normalizeInstanceIdentifier(s);try{var f=this.getOrInitializeService(c);u.resolve(f)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return n.__awaiter(this,void 0,void 0,(function(){var e;return n.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(n.__spread(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})),e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return"[DEFAULT]"===e?void 0:e}(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e}();var s=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();t.Component=i,t.ComponentContainer=s,t.Provider=a},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,c=[],f=!1,l=-1;function p(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&h())}function h(){if(!f){var e=s(p);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||f||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(1);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";(function(t){var n=r(1),o=r(26),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=r(11)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){u.headers[e]=n.merge(i)})),e.exports=u}).call(this,r(5))},function(e,t,r){"use strict";var n=r(1),o=r(27),i=r(8),a=r(29),s=r(32),u=r(33),c=r(12);e.exports=function(e){return new Promise((function(t,f){var l=e.data,p=e.headers;n.isFormData(l)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",v=e.auth.password||"";p.Authorization="Basic "+btoa(d+":"+v)}var y=a(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),i(y,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};o(t,f,n),h=null}},h.onabort=function(){h&&(f(c("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){f(c("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var g=r(34),b=(e.withCredentials||u(y))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}if("setRequestHeader"in h&&n.forEach(p,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),f(e),h=null)})),void 0===l&&(l=null),h.send(l)}))}},function(e,t,r){"use strict";var n=r(28);e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},function(e,t,r){"use strict";var n=r(1);e.exports=function(e,t){t=t||{};var r={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,(function(e){void 0!==t[e]&&(r[e]=t[e])})),n.forEach(i,(function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])})),n.forEach(a,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}));var s=o.concat(i).concat(a),u=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return n.forEach(u,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])})),r}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(0).__importDefault(r(18)).default.polyfill();var n=r(19);t.TtWid=n.TtWid},function(e,t,r){!function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function r(e){return new Promise((function(t,r){e.onsuccess=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function n(e,t,n){var o,i=new Promise((function(i,a){r(o=e[t].apply(e,n)).then(i,a)}));return i.request=o,i}function o(e,t,r){var o=n(e,t,r);return o.then((function(e){if(e)return new f(e,o.request)}))}function i(e,t,r){r.forEach((function(r){Object.defineProperty(e.prototype,r,{get:function(){return this[t][r]},set:function(e){this[t][r]=e}})}))}function a(e,t,r,o){o.forEach((function(o){o in r.prototype&&(e.prototype[o]=function(){return n(this[t],o,arguments)})}))}function s(e,t,r,n){n.forEach((function(n){n in r.prototype&&(e.prototype[n]=function(){return this[t][n].apply(this[t],arguments)})}))}function u(e,t,r,n){n.forEach((function(n){n in r.prototype&&(e.prototype[n]=function(){return o(this[t],n,arguments)})}))}function c(e){this._index=e}function f(e,t){this._cursor=e,this._request=t}function l(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise((function(t,r){e.oncomplete=function(){t()},e.onerror=function(){r(e.error)},e.onabort=function(){r(e.error)}}))}function h(e,t,r){this._db=e,this.oldVersion=t,this.transaction=new p(r)}function d(e){this._db=e}i(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(f,"_cursor",["direction","key","primaryKey","value"]),a(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(f.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,n),r(t._request).then((function(e){if(e)return new f(e,t._request)}))}))})})),l.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},i(l,"_store",["name","keyPath","indexNames","autoIncrement"]),a(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(l,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},i(p,"_tx",["objectStoreNames","mode"]),s(p,"_tx",IDBTransaction,["abort"]),h.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},i(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["deleteObjectStore","close"]),d.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},i(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[l,c].forEach((function(r){e in r.prototype&&(r.prototype[e.replace("open","iterate")]=function(){var r=t(arguments),n=r[r.length-1],o=this._store||this._index,i=o[e].apply(o,r.slice(0,-1));i.onsuccess=function(){n(i.result)}})}))})),[c,l].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var r=this,n=[];return new Promise((function(o){r.iterateCursor(e,(function(e){e?(n.push(e.value),void 0===t||n.length!=t?e.continue():o(n)):o(n)}))}))})})),e.openDb=function(e,t,r){var o=n(indexedDB,"open",[e,t]),i=o.request;return i&&(i.onupgradeneeded=function(e){r&&r(new h(i.result,e.oldVersion,i.transaction))}),o.then((function(e){return new d(e)}))},e.deleteDb=function(e){return n(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){"use strict";r.r(t);var n=r(15);t.default=n.TtWid},function(e,t,r){(function(t,r){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */var n;n=function(){"use strict";function e(e){return"function"==typeof e}var n=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=0,i=void 0,a=void 0,s=function(e,t){d[o]=e,d[o+1]=t,2===(o+=2)&&(a?a(v):_())},u="undefined"!=typeof window?window:void 0,c=u||{},f=c.MutationObserver||c.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==t&&"[object process]"==={}.toString.call(t),p="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var e=setTimeout;return function(){return e(v,1)}}var d=new Array(1e3);function v(){for(var e=0;e<o;e+=2)(0,d[e])(d[e+1]),d[e]=void 0,d[e+1]=void 0;o=0}var y,g,b,m,_=void 0;function w(e,t){var r=this,n=new this.constructor(S);void 0===n[O]&&L(n);var o=r._state;if(o){var i=arguments[o-1];s((function(){return N(o,n,i,r._result)}))}else I(r,n,e,t);return n}function E(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(S);return C(t,e),t}l?_=function(){return t.nextTick(v)}:f?(g=0,b=new f(v),m=document.createTextNode(""),b.observe(m,{characterData:!0}),_=function(){m.data=g=++g%2}):p?((y=new MessageChannel).port1.onmessage=v,_=function(){return y.port2.postMessage(0)}):_=void 0===u?function(){try{var e=Function("return this")().require("vertx");return void 0!==(i=e.runOnLoop||e.runOnContext)?function(){i(v)}:h()}catch(e){return h()}}():h();var O=Math.random().toString(36).substring(2);function S(){}function A(t,r,n){r.constructor===t.constructor&&n===w&&r.constructor.resolve===E?function(e,t){1===t._state?T(e,t._result):2===t._state?x(e,t._result):I(t,void 0,(function(t){return C(e,t)}),(function(t){return x(e,t)}))}(t,r):void 0===n?T(t,r):e(n)?function(e,t,r){s((function(e){var n=!1,o=function(e,t,r,n){try{e.call(t,r,n)}catch(e){return e}}(r,t,(function(r){n||(n=!0,t!==r?C(e,r):T(e,r))}),(function(t){n||(n=!0,x(e,t))}),e._label);!n&&o&&(n=!0,x(e,o))}),e)}(t,r,n):T(t,r)}function C(e,t){if(e===t)x(e,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(n=t),null===n||"object"!==o&&"function"!==o)T(e,t);else{var r=void 0;try{r=t.then}catch(t){return void x(e,t)}A(e,t,r)}var n,o}function j(e){e._onerror&&e._onerror(e._result),D(e)}function T(e,t){void 0===e._state&&(e._result=t,e._state=1,0!==e._subscribers.length&&s(D,e))}function x(e,t){void 0===e._state&&(e._state=2,e._result=t,s(j,e))}function I(e,t,r,n){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+1]=r,o[i+2]=n,0===i&&e._state&&s(D,e)}function D(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var n=void 0,o=void 0,i=e._result,a=0;a<t.length;a+=3)n=t[a],o=t[a+r],n?N(r,n,o,i):o(i);e._subscribers.length=0}}function N(t,r,n,o){var i=e(n),a=void 0,s=void 0,u=!0;if(i){try{a=n(o)}catch(e){u=!1,s=e}if(r===a)return void x(r,new TypeError("A promises callback cannot return that same promise."))}else a=o;void 0!==r._state||(i&&u?C(r,a):!1===u?x(r,s):1===t?T(r,a):2===t&&x(r,a))}var P=0;function L(e){e[O]=P++,e._state=void 0,e._result=void 0,e._subscribers=[]}var R=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(S),this.promise[O]||L(this.promise),n(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&T(this.promise,this._result))):x(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;void 0===this._state&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve;if(n===E){var o=void 0,i=void 0,a=!1;try{o=e.then}catch(e){a=!0,i=e}if(o===w&&void 0!==e._state)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(r===k){var s=new r(S);a?x(s,i):A(s,e,o),this._willSettleAt(s,t)}else this._willSettleAt(new r((function(t){return t(e)})),t)}else this._willSettleAt(n(e),t)},e.prototype._settledAt=function(e,t,r){var n=this.promise;void 0===n._state&&(this._remaining--,2===e?x(n,r):this._result[t]=r),0===this._remaining&&T(n,this._result)},e.prototype._willSettleAt=function(e,t){var r=this;I(e,void 0,(function(e){return r._settledAt(1,t,e)}),(function(e){return r._settledAt(2,t,e)}))},e}(),k=function(){function t(e){this[O]=P++,this._result=this._state=void 0,this._subscribers=[],S!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){C(e,t)}),(function(t){x(e,t)}))}catch(t){x(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var r=this.constructor;return e(t)?this.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):this.then(t,t)},t}();return k.prototype.then=w,k.all=function(e){return new R(this,e).promise},k.race=function(e){var t=this;return n(e)?new t((function(r,n){for(var o=e.length,i=0;i<o;i++)t.resolve(e[i]).then(r,n)})):new t((function(e,t){return t(new TypeError("You must pass an array to race."))}))},k.resolve=E,k.reject=function(e){var t=new this(S);return x(t,e),t},k._setScheduler=function(e){a=e},k._setAsap=function(e){s=e},k._asap=s,k.polyfill=function(){var e=void 0;if(void 0!==r)e=r;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=k},k.Promise=k,k},e.exports=n()}).call(this,r(5),r(6))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.__importDefault(r(20)),i=n.__importDefault(r(37));r(40);var a=r(39),s={timeout:3e3,withCredentials:!0,headers:{"content-type":"application/x-www-form-urlencoded"}},u={apiKey:"AIzaSyCuM3x-qGZoez2mBUq1_RcNrRFysHdRxfY",authDomain:"byted-ucenter.firebaseapp.com",databaseURL:"https://byted-ucenter.firebaseio.com",projectId:"byted-ucenter",storageBucket:"byted-ucenter.appspot.com",messagingSenderId:"995120244681",appId:"1:995120244681:web:d175caeb43de4353deea18"},c=function(){function e(e){var t=this;this.hostMap={boe:"https://boe.i.snssdk.com",cn:"https://ttwid.bytedance.com",va:"https://ttwid-va.byteoversea.com",sg:"https://ttwid-sg.byteoversea.com"},this.host="",this.installations=null,this.fid="",e.region||(e.region="cn"),void 0===e.union&&(e.union=!0),void 0===e.needFid&&(e.needFid=!0),e.host&&(this.host=e.host),this.options=e;try{if(e.needFid){var r=i.default.initializeApp(u,"byted-webapp-register").installations();r&&(this.installations=r,r.getId().then((function(e){void 0===e&&(e=""),t.fid=e})))}}catch(e){}}return e.prototype.checkWebId=function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,r,i,u,c,f,l;return n.__generator(this,(function(p){switch(p.label){case 0:return p.trys.push([0,14,,15]),t=e||a.CookieReadConfigEnum.COOKIE_READ_DEFAULT,r="",this.options.needFid?(i=this.fid)?[3,2]:[4,this.getInstanceId()]:[3,3];case 1:i=p.sent(),p.label=2;case 2:r=i,p.label=3;case 3:return[4,o.default.post(this.host+"/ttwid/check/",n.__assign(n.__assign({},this.options),{fid:r,migrate_priority:t}),s)];case 4:if(u=p.sent(),c=u.data,!((f=void 0===c?null:c)&&f.status_code>1001))return[3,12];l=f.migrate_info,p.label=5;case 5:return p.trys.push([5,10,,11]),this.options.union?[4,this.registerUnionWebId({migrate_info:l,fid:r})]:[3,7];case 6:return[2,p.sent()];case 7:return[4,this.registerOpenWebId({migrate_info:l,fid:r})];case 8:return[2,p.sent()];case 9:return[3,11];case 10:return p.sent(),[2,f||u];case 11:return[3,13];case 12:return[2,f||u];case 13:return[3,15];case 14:throw p.sent();case 15:return[2]}}))}))},e.prototype.checkWebIdFromTea=function(){return n.__awaiter(this,void 0,void 0,(function(){var e,t,r,o,i;return n.__generator(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=localStorage&&localStorage.getItem("__tea_cache_tokens_"+this.options.aid)||"",t=e&&JSON.parse(e)||{},r=t.web_id,(o=void 0===r?"":r)&&(i=new Date(Date.now()+864e5).toUTCString(),document.cookie="_tea_web_id="+o+"; expires="+i+"; path=/;"),[4,this.checkWebId(a.CookieReadConfigEnum.COOKIE_READ_TEA_PRIOR)];case 1:return[2,n.sent()];case 2:throw n.sent();case 3:return[2]}}))}))},e.prototype.registerUnionWebId=function(e,t){return n.__awaiter(this,void 0,void 0,(function(){var r,i,a,u,c,f,l,p,h,d,v,y,g,b,m;return n.__generator(this,(function(_){switch(_.label){case 0:return _.trys.push([0,6,,7]),r=this.options,i=r.region,a=void 0===i?"cn":i,u=r.unionHost,c=void 0===u?"":u,f=r.cbUrlProtocol,l=void 0===f?"":f,p=c||this.hostMap[a],[4,o.default.post(p+"/ttwid/union/register/",n.__assign(n.__assign({},this.options),e),s)];case 1:if(h=_.sent(),d=h.data,!(v=void 0===d?null:d)||!v.redirect_url)return[3,5];_.label=2;case 2:return _.trys.push([2,4,,5]),y=v.redirect_url,l&&y&&(y=y.replace(/^https?/,l)),[4,o.default.get(y,s)];case 3:return g=_.sent(),t?[2,t(null,g.data||{})]:[2,g.data||{}];case 4:return b=_.sent(),t?[2,t(b,v||{})]:[2,v];case 5:if(t)return[2,t(new Error("ttwid union register error"))];throw new Error("ttwid union register error");case 6:if(m=_.sent(),t)return[2,t(m)];throw m;case 7:return[2]}}))}))},e.prototype.registerOpenWebId=function(e){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,o.default.post(this.host+"/ttwid/register/",n.__assign(n.__assign({},this.options),e),s)];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},e.prototype.getInstanceId=function(){return n.__awaiter(this,void 0,void 0,(function(){var e=this;return n.__generator(this,(function(t){return this.installations?[2,new Promise((function(t,r){return n.__awaiter(e,void 0,void 0,(function(){var e,r;return n.__generator(this,(function(n){switch(n.label){case 0:setTimeout((function(){t("")}),2e3),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.installations.getId()];case 2:return e=n.sent(),this.fid=e||"",t(e||""),[3,4];case 3:throw r=n.sent(),this.fid="",r;case 4:return[2]}}))}))}))]:[2,""]}))}))},e.prototype.deleteInstallation=function(){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(e){try{this.installations&&this.installations.delete()}catch(e){throw e}return[2]}))}))},e}();t.TtWid=c},function(e,t,r){e.exports=r(21)},function(e,t,r){"use strict";var n=r(1),o=r(7),i=r(22),a=r(13);function s(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=s(r(10));u.Axios=i,u.create=function(e){return s(a(u.defaults,e))},u.Cancel=r(14),u.CancelToken=r(35),u.isCancel=r(9),u.all=function(e){return Promise.all(e)},u.spread=r(36),e.exports=u,e.exports.default=u},function(e,t,r){"use strict";var n=r(1),o=r(8),i=r(23),a=r(24),s=r(13);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},u.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}})),e.exports=u},function(e,t,r){"use strict";var n=r(1);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,r){"use strict";var n=r(1),o=r(25),i=r(9),a=r(10);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){"use strict";var n=r(1);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t,r){"use strict";var n=r(1);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){"use strict";var n=r(12);e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){"use strict";var n=r(30),o=r(31);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(1),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},function(e,t,r){"use strict";var n=r(1);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(1);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(14);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(r(3));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
o.default.registerVersion("firebase","7.24.0","app"),e.exports=o.default},function(e,t,r){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function n(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var o;r.r(t),r.d(t,"LogLevel",(function(){return i})),r.d(t,"Logger",(function(){return l})),r.d(t,"setLogLevel",(function(){return p})),r.d(t,"setUserLogHandler",(function(){return h}));var i,a=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));var s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},u=i.INFO,c=((o={})[i.DEBUG]="log",o[i.VERBOSE]="log",o[i.INFO]="info",o[i.WARN]="warn",o[i.ERROR]="error",o),f=function(e,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];if(!(t<e.logLevel)){var i=(new Date).toISOString(),a=c[t];if(!a)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[a].apply(console,n(["["+i+"]  "+e.name+":"],r))}},l=function(){function e(e){this.name=e,this._logLevel=u,this._logHandler=f,this._userLogHandler=null,a.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?s[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,i.DEBUG],e)),this._logHandler.apply(this,n([this,i.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,i.VERBOSE],e)),this._logHandler.apply(this,n([this,i.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,i.INFO],e)),this._logHandler.apply(this,n([this,i.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,i.WARN],e)),this._logHandler.apply(this,n([this,i.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,i.ERROR],e)),this._logHandler.apply(this,n([this,i.ERROR],e))},e}();function p(e){a.forEach((function(t){t.setLogLevel(e)}))}function h(e,t){for(var r=function(r){var n=null;t&&t.level&&(n=s[t.level]),r.userLogHandler=null===e?null:function(t,r){for(var o=[],a=2;a<arguments.length;a++)o[a-2]=arguments[a];var s=o.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");r>=(null!=n?n:t.logLevel)&&e({level:i[r].toLowerCase(),message:s,args:o,type:t.name})}},n=0,o=a;n<o.length;n++){r(o[n])}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.COOKIE_READ_DEFAULT=0]="COOKIE_READ_DEFAULT",e[e.COOKIE_READ_TEA_PRIOR=1]="COOKIE_READ_TEA_PRIOR"}(t.CookieReadConfigEnum||(t.CookieReadConfigEnum={}))},function(e,t,r){"use strict";r.r(t);var n,o=r(3),i=r.n(o),a=r(4),s=r(0),u=r(2),c=r(16),f=((n={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',n["not-registered"]="Firebase Installation is not registered.",n["installation-not-found"]="Firebase Installation not found.",n["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',n["app-offline"]="Could not process request. Application offline.",n["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",n),l=new u.ErrorFactory("installations","Installations",f);function p(e){return e instanceof u.FirebaseError&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function d(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function v(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,n;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,t.json()];case 1:return r=o.sent(),n=r.error,[2,l.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}}))}))}function y(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function g(e,t){var r=t.refreshToken,n=y(e);return n.append("Authorization",function(e){return"FIS_v2 "+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)),n}function b(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,e()];case 1:return(t=r.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function m(e,t){var r=t.fid;return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,o,i,a,u;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return t=h(e),n=y(e),o={fid:r,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.17"},i={method:"POST",headers:n,body:JSON.stringify(o)},[4,b((function(){return fetch(t,i)}))];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return u=s.sent(),[2,{fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:d(u.authToken)}];case 3:return[4,v("Create Installation",a)];case 4:throw s.sent()}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var w=/^[cdef][\w-]{21}$/;function E(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,Object(s.__spread)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return w.test(t)?t:""}catch(e){return""}}function O(e){return e.appName+"!"+e.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S=new Map;function A(e,t){var r=O(e);C(r,t),function(e,t){var r=T();r&&r.postMessage({key:e,fid:t});x()}(r,t)}function C(e,t){var r,n,o=S.get(e);if(o)try{for(var i=Object(s.__values)(o),a=i.next();!a.done;a=i.next()){(0,a.value)(t)}}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}}var j=null;function T(){return!j&&"BroadcastChannel"in self&&((j=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){C(e.data.key,e.data.fid)}),j}function x(){0===S.size&&j&&(j.close(),j=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I,D="firebase-installations-store",N=null;function P(){return N||(N=Object(c.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(D)}}))),N}function L(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,n,o,i,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return r=O(e),[4,P()];case 1:return n=s.sent(),o=n.transaction(D,"readwrite"),[4,(i=o.objectStore(D)).get(r)];case 2:return a=s.sent(),[4,i.put(t,r)];case 3:return s.sent(),[4,o.complete];case 4:return s.sent(),a&&a.fid===t.fid||A(e,t.fid),[2,t]}}))}))}function R(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,r,n;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return t=O(e),[4,P()];case 1:return r=o.sent(),[4,(n=r.transaction(D,"readwrite")).objectStore(D).delete(t)];case 2:return o.sent(),[4,n.complete];case 3:return o.sent(),[2]}}))}))}function k(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,n,o,i,a,u;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return r=O(e),[4,P()];case 1:return n=s.sent(),o=n.transaction(D,"readwrite"),[4,(i=o.objectStore(D)).get(r)];case 2:return a=s.sent(),void 0!==(u=t(a))?[3,4]:[4,i.delete(r)];case 3:return s.sent(),[3,6];case 4:return[4,i.put(u,r)];case 5:s.sent(),s.label=6;case 6:return[4,o.complete];case 7:return s.sent(),!u||a&&a.fid===u.fid||A(e,u.fid),[2,u]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,r,n;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,k(e,(function(r){var n=function(e){return U(e||{fid:E(),registrationStatus:0})}(r),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var r=Promise.reject(l.create("app-offline"));return{installationEntry:t,registrationPromise:r}}var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,n;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,7]),[4,m(e,t)];case 1:return r=o.sent(),[2,L(e,r)];case 2:return p(n=o.sent())&&409===n.serverCode?[4,R(e)]:[3,4];case 3:return o.sent(),[3,6];case 4:return[4,L(e,{fid:t.fid,registrationStatus:0})];case 5:o.sent(),o.label=6;case 6:throw n;case 7:return[2]}}))}))}(e,n);return{installationEntry:n,registrationPromise:o}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:F(e)}:{installationEntry:t}}(e,n);return t=o.registrationPromise,o.installationEntry}))];case 1:return""!==(r=o.sent()).fid?[3,3]:(n={},[4,t]);case 2:return[2,(n.installationEntry=o.sent(),n)];case 3:return[2,{installationEntry:r,registrationPromise:t}]}}))}))}function F(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,r,n,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,M(e)];case 1:t=i.sent(),i.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,_(100)];case 3:return i.sent(),[4,M(e)];case 4:return t=i.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,B(e)];case 6:return r=i.sent(),n=r.installationEntry,(o=r.registrationPromise)?[2,o]:[2,n];case 7:return[2,t]}}))}))}function M(e){return k(e,(function(e){if(!e)throw l.create("installation-not-found");return U(e)}))}function U(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function q(e,t){var r=e.appConfig,n=e.platformLoggerProvider;return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,o,i,a,u,c,f;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return e=function(e,t){var r=t.fid;return h(e)+"/"+r+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t),o=g(r,t),(i=n.getImmediate({optional:!0}))&&o.append("x-firebase-client",i.getPlatformInfoString()),a={installation:{sdkVersion:"w:0.4.17"}},u={method:"POST",headers:o,body:JSON.stringify(a)},[4,b((function(){return fetch(e,u)}))];case 1:return(c=s.sent()).ok?[4,c.json()]:[3,3];case 2:return f=s.sent(),[2,d(f)];case 3:return[4,v("Generate Auth Token",c)];case 4:throw s.sent()}}))}))}function V(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){var r,n,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,k(e.appConfig,(function(n){if(!W(n))throw l.create("not-registered");var o=n.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(o))return n;if(1===o.requestStatus)return r=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,n;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,H(e.appConfig)];case 1:r=o.sent(),o.label=2;case 2:return 1!==r.authToken.requestStatus?[3,5]:[4,_(100)];case 3:return o.sent(),[4,H(e.appConfig)];case 4:return r=o.sent(),[3,2];case 5:return 0===(n=r.authToken).requestStatus?[2,V(e,t)]:[2,n]}}))}))}(e,t),n;if(!navigator.onLine)throw l.create("app-offline");var i=function(e){var t={requestStatus:1,requestTime:Date.now()};return Object(s.__assign)(Object(s.__assign)({},e),{authToken:t})}(n);return r=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,n,o;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,8]),[4,q(e,t)];case 1:return r=i.sent(),o=Object(s.__assign)(Object(s.__assign)({},t),{authToken:r}),[4,L(e.appConfig,o)];case 2:return i.sent(),[2,r];case 3:return!p(n=i.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,R(e.appConfig)];case 4:return i.sent(),[3,7];case 5:return o=Object(s.__assign)(Object(s.__assign)({},t),{authToken:{requestStatus:0}}),[4,L(e.appConfig,o)];case 6:i.sent(),i.label=7;case 7:throw n;case 8:return[2]}}))}))}(e,i),i}))];case 1:return n=i.sent(),r?[4,r]:[3,3];case 2:return o=i.sent(),[3,4];case 3:o=n.authToken,i.label=4;case 4:return[2,o]}}))}))}function H(e){return k(e,(function(e){if(!W(e))throw l.create("not-registered");var t,r=e.authToken;return 1===(t=r).requestStatus&&t.requestTime+1e4<Date.now()?Object(s.__assign)(Object(s.__assign)({},e),{authToken:{requestStatus:0}}):e}))}function W(e){return void 0!==e&&2===e.registrationStatus}function z(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,B(e)];case 1:return(t=r.sent().registrationPromise)?[4,t]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,n,o,i;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return r=function(e,t){var r=t.fid;return h(e)+"/"+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t),n=g(e,t),o={method:"DELETE",headers:n},[4,b((function(){return fetch(r,o)}))];case 1:return(i=a.sent()).ok?[3,3]:[4,v("Delete Installation",i)];case 2:throw a.sent();case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e,t){var r=e.appConfig;return function(e,t){T();var r=O(e),n=S.get(r);n||(n=new Set,S.set(r,n)),n.add(t)}(r,t),function(){!function(e,t){var r=O(e),n=S.get(r);n&&(n.delete(t),0===n.size&&S.delete(r),x())}(r,t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){return l.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(I=i.a).INTERNAL.registerComponent(new a.Component("installations",(function(e){var t=e.getProvider("app").getImmediate(),r={appConfig:function(e){var t,r;if(!e||!e.options)throw G("App Configuration");if(!e.name)throw G("App Name");try{for(var n=Object(s.__values)(["projectId","apiKey","appId"]),o=n.next();!o.done;o=n.next()){var i=o.value;if(!e.options[i])throw G(i)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,r,n;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,B(e.appConfig)];case 1:return t=o.sent(),r=t.installationEntry,(n=t.registrationPromise)?n.catch(console.error):V(e).catch(console.error),[2,r.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,z(e.appConfig)];case 1:return r.sent(),[4,V(e,t)];case 2:return[2,r.sent().token]}}))}))}(r,e)},delete:function(){return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,r;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,k(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(r=n.sent()))return[3,6];if(1!==r.registrationStatus)return[3,2];throw l.create("delete-pending-registration");case 2:if(2!==r.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw l.create("app-offline");case 3:return[4,K(t,r)];case 4:return n.sent(),[4,R(t)];case 5:n.sent(),n.label=6;case 6:return[2]}}))}))}(r)},onIdChange:function(e){return $(r,e)}}}),"PUBLIC")),I.registerVersion("@firebase/installations","0.4.17")}]).default}));
//# sourceMappingURL=index.umd.production.js.map