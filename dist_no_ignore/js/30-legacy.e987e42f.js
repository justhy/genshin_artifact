(function(){var n={9030:function(n,t,e){async function r(){const n=await Promise.all([e.e(793),e.e(189)]).then(e.bind(e,5309));self.onmessage=function(t){const e=t.data.optimizeConfig,r=t.data.artifacts,o=n.OptimizeSingleWasm.optimize(e,r);self.postMessage({type:"results",data:{results:o}})},self.postMessage({type:"ready"})}e(3948),r()}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return n[r](i,i.exports,e),i.loaded=!0,i.exports}e.m=n,e.x=function(){var n=e.O(void 0,[948],(function(){return e(9030)}));return n=e.O(n),n},function(){var n="function"===typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r=function(n){n&&(n.forEach((function(n){n.r--})),n.forEach((function(n){n.r--?n.r++:n()})))},o=function(n){!--n.r&&n()},i=function(n,t){n?n.push(t):o(t)},u=function(e){return e.map((function(e){if(null!==e&&"object"===typeof e){if(e[n])return e;if(e.then){var u=[];e.then((function(n){c[t]=n,r(u),u=0}));var c={};return c[n]=function(n,t){i(u,n),e["catch"](t)},c}}var f={};return f[n]=function(n){o(n)},f[t]=e,f}))};e.a=function(e,c,f){var a,s,p,l=f&&[],b=e.exports,d=!0,h=!1,m=function(t,e,r){h||(h=!0,e.r+=t.length,t.map((function(t,o){t[n](e,r)})),h=!1)},y=new Promise((function(n,t){p=t,s=function(){n(b),r(l),l=0}}));y[t]=b,y[n]=function(n,t){if(d)return o(n);a&&m(a,n,t),i(l,n),y["catch"](t)},e.exports=y,c((function(n){if(!n)return s();var e,r;a=u(n);var o=new Promise((function(n,o){e=function(){n(r=a.map((function(n){return n[t]})))},e.r=0,m(a,e,o)}));return e.r?o:r})).then(s,p),d=!1}}(),function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var c=!0,f=0;f<r.length;f++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[f])}))?r.splice(f--,1):(c=!1,i<u&&(u=i));if(c){n.splice(s--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+"-legacy."+{189:"1e5c5abe",793:"d3c21fb4",948:"994d137c"}[n]+".js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.v=function(n,t,r,o){var i=fetch(e.p+""+r+".module.wasm");return"function"===typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(i,o).then((function(t){return Object.assign(n,t.instance.exports)})):i.then((function(n){return n.arrayBuffer()})).then((function(n){return WebAssembly.instantiate(n,o)})).then((function(t){return Object.assign(n,t.instance.exports)}))}}(),function(){e.p="/"}(),function(){var n={30:1},t=function(t){var r=t[0],i=t[1],u=t[2];for(var c in i)e.o(i,c)&&(e.m[c]=i[c]);u&&u(e);while(r.length)n[r.pop()]=1;o(t)};e.f.i=function(t,r){n[t]||importScripts(e.p+e.u(t))};var r=self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[],o=r.push.bind(r);r.push=t}(),function(){var n=e.x;e.x=function(){return e.e(948).then(n)}}();e.x()})();