(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["micro-child-app-app"]=t():e["micro-child-app-app"]=t()})(window,(function(){return function(e){function t(t){for(var n,i,u=t[0],l=t[1],c=t[2],s=0,d=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/micro-child-app/";var u=window["webpackJsonp_micro-child-app"]=window["webpackJsonp_micro-child-app"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;return o.push([0,"chunk-vendors"]),r()}({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"bootstrap",(function(){return k})),r.d(t,"mount",(function(){return x})),r.d(t,"unmount",(function(){return R})),r.d(t,"update",(function(){return E}));var n=r("1da1"),a=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("96cf"),r("83f4"),r("7a23")),o=r("cf05"),i=r.n(o),u=Object(a["d"])("img",{alt:"Vue logo",src:i.a},null,-1);function l(e,t,r,n,o,i){var l=Object(a["j"])("HelloWorld");return Object(a["g"])(),Object(a["c"])(a["a"],null,[u,Object(a["f"])(l,{msg:"Welcome to Your Vue.js App"})],64)}var c={class:"hello"},p=Object(a["e"])('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function s(e,t,r,n,o,i){return Object(a["g"])(),Object(a["c"])("div",c,[Object(a["d"])("h1",null,Object(a["k"])(r.msg),1),p])}var d={name:"HelloWorld",props:{msg:String}},f=(r("8497"),r("6b0d")),v=r.n(f);const b=v()(d,[["render",s],["__scopeId","data-v-b9167eee"]]);var h=b,g={name:"App",components:{HelloWorld:h}};r("f248");const m=v()(g,[["render",l]]);var j=m,_=null,w=Object(a["b"])(j);function y(e){var t=e.container;w.use(_).mount(t?t.querySelector("#app"):"#app")}function k(){return O.apply(this,arguments)}function O(){return O=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function x(e){return P.apply(this,arguments)}function P(){return P=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:y(t);case 1:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function R(){return W.apply(this,arguments)}function W(){return W=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w.$destroy(),w.$el.innerHTML="",w=null,_=null;case 4:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function E(e){return S.apply(this,arguments)}function S(){return S=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("props: ",t);case 1:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||y({}),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))}))},"7fb8":function(e,t,r){},"83f4":function(e,t,r){window.__POWERED_BY_QIANKUN__&&(r.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},8497:function(e,t,r){"use strict";r("c45a")},c45a:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},f248:function(e,t,r){"use strict";r("7fb8")}})}));
//# sourceMappingURL=app.d45c2ce7.js.map