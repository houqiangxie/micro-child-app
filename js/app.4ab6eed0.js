(function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports["micro-child-app-app"]=n():e["micro-child-app-app"]=n()})(window,(function(){return function(e){function n(n){for(var r,o,u=n[0],a=n[1],p=n[2],f=0,s=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(n);while(s.length)s.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},c={app:0},i=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-06f3f6c4":"d4a31735","chunk-2d0b68f8":"75cec590"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t={"chunk-06f3f6c4":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-06f3f6c4":"df77676e","chunk-2d0b68f8":"31d6cfe0"}[e]+".css",c=a.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var p=i[u],f=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(f===r||f===c))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){p=s[u],f=p.getAttribute("data-href");if(f===r||f===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],l.parentNode.removeChild(l),t(i)},l.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=i);var p,f=document.createElement("script");f.charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.src=u(e);var s=new Error;p=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,t[1](s)}c[e]=void 0}};var l=setTimeout((function(){p({type:"timeout",target:f})}),12e4);f.onerror=f.onload=p,document.head.appendChild(f)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/micro-child-app/",a.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp_micro-child-app"]=window["webpackJsonp_micro-child-app"]||[],f=p.push.bind(p);p.push=n,p=p.slice();for(var s=0;s<p.length;s++)n(p[s]);var l=f;return i.push([0,"chunk-vendors"]),t()}({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n),t.d(n,"bootstrap",(function(){return b})),t.d(n,"mount",(function(){return y})),t.d(n,"unmount",(function(){return j})),t.d(n,"update",(function(){return P}));var r=t("1da1"),o=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("96cf"),t("83f4"),t("7a23")),c=t("cf05"),i=t.n(c),u=Object(o["e"])("img",{alt:"Vue logo",src:i.a},null,-1);function a(e,n,t,r,c,i){var a=Object(o["t"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[u,Object(o["g"])(a)],64)}var p={name:"App",components:{}},f=(t("ecfa"),t("6b0d")),s=t.n(f);const l=s()(p,[["render",a]]);var d=l,h=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),m=[{path:"/app-child",name:"Index",component:function(){return t.e("chunk-2d0b68f8").then(t.bind(null,"1e4b"))}},{path:"/app-child/a",name:"A",component:function(){return t.e("chunk-06f3f6c4").then(t.bind(null,"ae69"))}},{path:"/:pathMatch(.*)*",redirect:"/app-child"}],_=Object(h["a"])({history:Object(h["b"])(window.__MICRO_APP_BASE_ROUTE__||(window.__POWERED_BY_QIANKUN__?"/app-child/":"/")),routes:m}),g=Object(o["c"])(d);function w(e){var n=e.container;g.use(_).mount(n?n.querySelector("#app2"):"#app2")}function b(){return v.apply(this,arguments)}function v(){return v=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function y(e){return O.apply(this,arguments)}function O(){return O=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w(n);case 1:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function j(){return E.apply(this,arguments)}function E(){return E=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:g.$destroy(),g.$el.innerHTML="",g=null;case 3:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function P(e){return k.apply(this,arguments)}function k(){return k=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("props: ",n);case 1:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}window.__POWERED_BY_QIANKUN__&&!window.__MICRO_APP_ENVIRONMENT__||w({}),window.addEventListener("unmount",(function(){g.unmount()})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))}))},"7e85":function(e,n,t){},"83f4":function(e,n,t){window.__POWERED_BY_QIANKUN__&&(t.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__),window.__MICRO_APP_ENVIRONMENT__&&(t.p=window.__MICRO_APP_PUBLIC_PATH__)},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"},ecfa:function(e,n,t){"use strict";t("7e85")}})}));
//# sourceMappingURL=app.4ab6eed0.js.map