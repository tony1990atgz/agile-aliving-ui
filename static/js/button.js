!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.agile=n():t.agile=n()}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=24)}({0:function(t,n,e){"use strict";function o(t,n,e,o,r,i,a,u){var c,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=c):r&&(c=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(s.functional){s._injectStyles=c;var l=s.render;s.render=function(t,n){return c.call(n),l(t,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:s}}e.d(n,"a",function(){return o})},1:function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(a=o,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")});return[e].concat(i).concat([r]).join("\n")}var a,u,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var u=t[a];null!=u[0]&&o[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="(".concat(u[2],") and (").concat(e,")")),n.push(u))}},n}},2:function(t,n,e){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}();function u(t,n){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],a=n.base?i[0]+n.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(u):e.push(o[a]={id:a,parts:[u]})}return e}function c(t,n){for(var e=0;e<t.length;e++){var o=t[e],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(h(o.parts[a],n))}else{for(var u=[];a<o.parts.length;a++)u.push(h(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:u}}}}function s(t){var n=document.createElement("style");if(void 0===t.attributes.nonce){var o=e.nc;o&&(t.attributes.nonce=o)}if(Object.keys(t.attributes).forEach(function(e){n.setAttribute(e,t.attributes[e])}),"function"==typeof t.insert)t.insert(n);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,f=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function d(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=f(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}var p=null,b=0;function h(t,n){var e,o,r;if(n.singleton){var i=b++;e=p||(p=s(n)),o=d.bind(null,e,i,!1),r=d.bind(null,e,i,!0)}else e=s(n),o=function(t,n,e){var o=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=u(t,n);return c(e,n),function(t){for(var o=[],i=0;i<e.length;i++){var a=e[i],s=r[a.id];s&&(s.refs--,o.push(s))}t&&c(u(t,n),n);for(var l=0;l<o.length;l++){var f=o[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete r[f.id]}}}}},24:function(t,n,e){"use strict";e.r(n);var o=e(4);function r(t){t.component(o.a.name,o.a)}o.a.install=r,"undefined"!=typeof window&&window.Vue&&r(window.Vue),n.default=o.a},38:function(t,n,e){"use strict";var o=e(7);e.n(o).a},39:function(t,n,e){(t.exports=e(1)(!1)).push([t.i,".agile-button-container {\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n  transition: opacity 0.1s;\n  background: #fff;\n}\n.agile-button-container .agile-button {\n  outline: none;\n  color: #fff;\n  border: 1px solid #dcdfe6;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.agile-button-container .agile-button.active {\n  opacity: 0.8;\n}\n.agile-button-container .agile-button.radius {\n  border-radius: 4px;\n}\n.agile-button-container .agile-button.radius50 {\n  border-radius: 40px;\n}\n.agile-button-container .agile-button.agile {\n  background-color: #14c8b7;\n  border-color: #14c8b7;\n}\n.agile-button-container .agile-button.primary {\n  background-color: #409eff;\n  border-color: #409eff;\n}\n.agile-button-container .agile-button.success {\n  background-color: #67c23a;\n  border-color: #67c23a;\n}\n.agile-button-container .agile-button.warning {\n  background-color: #f56c6c;\n  border-color: #f56c6c;\n}\n.agile-button-container .agile-button.default {\n  background-color: #fff;\n  border-color: #dcdfe6;\n  color: #000;\n}\n",""])},4:function(t,n,e){"use strict";var o=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"agile-button-container"},[n("button",{staticClass:"agile-button",class:[this.type,this.radiusCls,{active:!0===this.flag}],on:{click:this.click}},[this._t("default")],2)])};o._withStripped=!0;var r={name:"agile-button",props:{type:{type:String,default:"agile"},radius:{type:Number,default:0}},computed:{radiusCls(){const t=this.radius;return 1===t?"radius":2===t?"radius50":""}},data:()=>({flag:!1}),methods:{click(){this.flag=!0,function(t,n){let e;return()=>{e||(e=setTimeout(()=>{e=null,t()},n))}}(()=>{this.flag=!1,this.$emit("click")},100)()}}},i=(e(38),e(0)),a=Object(i.a)(r,o,[],!1,null,null,null);a.options.__file="components/button/button.vue";n.a=a.exports},7:function(t,n,e){var o=e(39);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};e(2)(o,r);o.locals&&(t.exports=o.locals)}})});