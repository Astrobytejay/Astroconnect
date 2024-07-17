(()=>{var e={"./node_modules/loglevel/lib/loglevel.js":function(e,t,o){var n,r;!function(){"use strict";n=function(){var e=function(){},t="undefined",o=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"],r={},l=null;function i(e,t){var o=e[t];if("function"==typeof o.bind)return o.bind(e);try{return Function.prototype.bind.call(o,e)}catch(t){return function(){return Function.prototype.apply.apply(o,[e,arguments])}}}function c(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(n){return"debug"===n&&(n="log"),typeof console!==t&&("trace"===n&&o?c:void 0!==console[n]?i(console,n):void 0!==console.log?i(console,"log"):e)}function a(){for(var o=this.getLevel(),r=0;r<n.length;r++){var l=n[r];this[l]=r<o?e:this.methodFactory(l,o,this.name)}if(this.log=this.debug,typeof console===t&&o<this.levels.SILENT)return"No console available for logging"}function u(e){return function(){typeof console!==t&&(a.call(this),this[e].apply(this,arguments))}}function d(e,t,o){return s(e)||u.apply(this,arguments)}function f(e,o){var i,c,s,u=this,f="loglevel";function v(e){var o=(n[e]||"silent").toUpperCase();if(typeof window!==t&&f){try{return void(window.localStorage[f]=o)}catch(e){}try{window.document.cookie=encodeURIComponent(f)+"="+o+";"}catch(e){}}}function p(){var e;if(typeof window!==t&&f){try{e=window.localStorage[f]}catch(e){}if(typeof e===t)try{var o=window.document.cookie,n=encodeURIComponent(f),r=o.indexOf(n+"=");-1!==r&&(e=/^([^;]+)/.exec(o.slice(r+n.length+1))[1])}catch(e){}return void 0===u.levels[e]&&(e=void 0),e}}function m(){if(typeof window!==t&&f){try{window.localStorage.removeItem(f)}catch(e){}try{window.document.cookie=encodeURIComponent(f)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}function g(e){var t=e;if("string"==typeof t&&void 0!==u.levels[t.toUpperCase()]&&(t=u.levels[t.toUpperCase()]),"number"==typeof t&&t>=0&&t<=u.levels.SILENT)return t;throw new TypeError("log.setLevel() called with invalid level: "+e)}"string"==typeof e?f+=":"+e:"symbol"==typeof e&&(f=void 0),u.name=e,u.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},u.methodFactory=o||d,u.getLevel=function(){return null!=s?s:null!=c?c:i},u.setLevel=function(e,t){return s=g(e),!1!==t&&v(s),a.call(u)},u.setDefaultLevel=function(e){c=g(e),p()||u.setLevel(e,!1)},u.resetLevel=function(){s=null,m(),a.call(u)},u.enableAll=function(e){u.setLevel(u.levels.TRACE,e)},u.disableAll=function(e){u.setLevel(u.levels.SILENT,e)},u.rebuild=function(){if(l!==u&&(i=g(l.getLevel())),a.call(u),l===u)for(var e in r)r[e].rebuild()},i=g(l?l.getLevel():"WARN");var y=p();null!=y&&(s=g(y)),a.call(u)}(l=new f).getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=r[e];return t||(t=r[e]=new f(e,l.methodFactory)),t};var v=typeof window!==t?window.log:void 0;return l.noConflict=function(){return typeof window!==t&&window.log===l&&(window.log=v),l},l.getLoggers=function(){return r},l.default=l,l},void 0===(r="function"==typeof n?n.call(t,o,t,e):n)||(e.exports=r)}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=o("./node_modules/loglevel/lib/loglevel.js"),t=o.n(e);const n="matrix";function r(e){const o=e;o.getChild=o.withPrefix=function(e){return function(e){const o=t().getLogger(`${n}-${e}`);o.prefix!==e&&(r(o),o.prefix=e,o.setLevel(t().levels.DEBUG,!1));return o}((this.prefix||"")+e)}}t().methodFactory=function(e,t,o){return function(...t){this.prefix&&t.unshift(this.prefix);return"error"===e||"warn"===e||"trace"===e||"info"===e||"debug"===e?console[e](...t):console.log(...t)}};const l=t().getLogger(n);l.setLevel(t().levels.DEBUG,!1),r(l);async function i(e){const t=new URL(e,window.location.href);t.searchParams.set("cachebuster",Date.now().toString());const o=await fetch(t,{cache:"no-cache",method:"GET"});return 404===o.status||0===o.status?{}:o.ok?o.json():void 0}function c(){document.cookie="element_mobile_redirect_to_guide=false;path=/;max-age=14400",window.location.href="../"}function s(e){e=`<h2>Error loading Element</h2><p>${e}</p><p>If this is unexpected, please contact your system administrator or technical support representative.</p>`;const t=document.getElementsByClassName("mx_HomePage_container"),o=document.getElementsByClassName("mx_HomePage_errorContainer");for(const e of t)e.innerHTML="";for(const t of o)t.style.display="block",t.innerHTML=e}!async function(){var e;document.getElementById("back_to_element_button").onclick=c;const t=await async function(e=""){""===e||e.endsWith("/")||(e+="/");let t=window.location.hostname.trimEnd();"."===t[t.length-1]&&(t=t.slice(0,-1));const o=i(`${e}config.${t}.json`),n=i(e+"config.json");try{const e=await o;if(!e||0===Object.keys(e).length)throw new Error;return e}catch(e){return n}}(".."),o=null==t?void 0:t.default_server_config,n=null==t?void 0:t.default_server_name,r=null==t?void 0:t.default_hs_url,a=null==t?void 0:t.default_is_url,u=[o,n,r].filter((e=>!!e));if(r&&(o||n))return s("Invalid configuration: a default_hs_url can't be specified along with default_server_name or default_server_config");if(u.length<1)return s("Invalid configuration: no default server specified.");let d,f;var v;if(n||"string"!=typeof(null==o||null===(e=o["m.homeserver"])||void 0===e?void 0:e.base_url)||(d=o["m.homeserver"].base_url,"string"==typeof(null===(v=o["m.identity_server"])||void 0===v?void 0:v.base_url)&&(f=o["m.identity_server"].base_url)),n)try{const e=await fetch(`https://${n}/.well-known/matrix/client`),t=await e.json();t&&t["m.homeserver"]&&(d=t["m.homeserver"].base_url,t["m.identity_server"]&&(f=t["m.identity_server"].base_url))}catch(e){if(!o||!o["m.homeserver"])return l.error(e),s("Unable to fetch homeserver configuration");d=o["m.homeserver"].base_url||void 0,o["m.identity_server"]&&(f=o["m.identity_server"].base_url||void 0)}if(r&&(d=r,f=a),!d)return s("Unable to locate homeserver");if(d&&!d.endsWith("/")&&(d+="/"),f&&!f.endsWith("/")&&(f+="/"),"https://matrix.org/"!==d){let e="https://mobile.element.io?hs_url="+encodeURIComponent(d);var p;if(f)document.getElementById("custom_is").style.display="block",document.getElementById("is_url").style.display="block",document.getElementById("is_url").innerText=f,e+="&is_url="+encodeURIComponent(null!==(p=f)&&void 0!==p?p:"");document.getElementById("configure_element_button").href=e,document.getElementById("step1_heading").innerHTML="1: Install the app",document.getElementById("step2_container").style.display="block",document.getElementById("hs_url").innerText=d}}()})()})();
//# sourceMappingURL=mobileguide.js.map