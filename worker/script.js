!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){async function n(){return new Response("Error Occured!!",{status:500})}addEventListener("fetch",e=>{e.respondWith(async function(e){const t=e.headers.get("cookie"),r=await fetch("https://cfw-takehome.developers.workers.dev/api/variants",{headers:{"Content-Type":"application/json"}});if(!r.ok)return n();const a=await r.text(),o=JSON.parse(a);if(!Array.isArray(o.variants)||2!=o.variants.length)return n();let i;i=t&&t.includes("variant=variant1")?o.variants[0]:t&&t.includes("variant=variant2")?o.variants[1]:Math.random()<.5?o.variants[0]:o.variants[1];let u=await fetch(i);u=new Response(u.body,u);let s=i===o.variants[0]?"variant1":"variant2";return console.log("cookie = "+s),u.headers.set("Set-Cookie",`variant=${s}; Path=/`),u}(e.request))})}]);