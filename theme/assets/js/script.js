(()=>{var t={"./node_modules/sweet-scroll/sweet-scroll.js":
/*!***************************************************!*\
  !*** ./node_modules/sweet-scroll/sweet-scroll.js ***!
  \***************************************************/function(t){
/*! @preserve sweet-scroll v4.0.0 - tsuyoshiwada | MIT License */
t.exports=function(){"use strict";
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
    ***************************************************************************** */var t=function(){return t=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},t.apply(this,arguments)},e=!("undefined"==typeof window||!window.document||!window.document.createElement),n=!!e&&window.history&&"pushState"in window.history&&"file:"!==window.location.protocol,o=function(){var t=!1;if(!e)return t;try{var n=window,o=Object.defineProperty({},"passive",{get:function(){t=!0}});n.addEventListener("test",null,o),n.removeEventListener("test",null,o)}catch(t){}return t}(),r=function(t){return"string"==typeof t},i=function(t){return"function"==typeof t},a=function(t){return Array.isArray(t)},u=function(t){return!a(t)&&t-parseFloat(t)+1>=0},l=function(t,e){return t&&t.hasOwnProperty(e)},s=e?window.requestAnimationFrame.bind(window):null,c=e?window.cancelAnimationFrame.bind(window):null,f=Math.cos,p=Math.sin,h=Math.pow,d=Math.sqrt,v=Math.PI,g={linear:function(t){return t},easeInQuad:function(t,e,n,o,r){return o*(e/=r)*e+n},easeOutQuad:function(t,e,n,o,r){return-o*(e/=r)*(e-2)+n},easeInOutQuad:function(t,e,n,o,r){return(e/=r/2)<1?o/2*e*e+n:-o/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,o,r){return o*(e/=r)*e*e+n},easeOutCubic:function(t,e,n,o,r){return o*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,o,r){return(e/=r/2)<1?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,o,r){return o*(e/=r)*e*e*e+n},easeOutQuart:function(t,e,n,o,r){return-o*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,o,r){return(e/=r/2)<1?o/2*e*e*e*e+n:-o/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,o,r){return o*(e/=r)*e*e*e*e+n},easeOutQuint:function(t,e,n,o,r){return o*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,o,r){return(e/=r/2)<1?o/2*e*e*e*e*e+n:o/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,o,r){return-o*f(e/r*(v/2))+o+n},easeOutSine:function(t,e,n,o,r){return o*p(e/r*(v/2))+n},easeInOutSine:function(t,e,n,o,r){return-o/2*(f(v*e/r)-1)+n},easeInExpo:function(t,e,n,o,r){return 0===e?n:o*h(2,10*(e/r-1))+n},easeOutExpo:function(t,e,n,o,r){return e===r?n+o:o*(1-h(2,-10*e/r))+n},easeInOutExpo:function(t,e,n,o,r){return 0===e?n:e===r?n+o:(e/=r/2)<1?o/2*h(2,10*(e-1))+n:o/2*(2-h(2,-10*--e))+n},easeInCirc:function(t,e,n,o,r){return-o*(d(1-(e/=r)*e)-1)+n},easeOutCirc:function(t,e,n,o,r){return o*d(1-(e=e/r-1)*e)+n},easeInOutCirc:function(t,e,n,o,r){return(e/=r/2)<1?-o/2*(d(1-e*e)-1)+n:o/2*(d(1-(e-=2)*e)+1)+n}},w=function(t){return Array.prototype.slice.call(t?document.querySelectorAll(t):[])},y=function(t){return w(t).shift()||null},m=function(t){return t instanceof Element},b=function(t){return t===window},x=function(t){return t===document.documentElement||t===document.body},O=function(t,e){if(m(e))return t===e;for(var n=w(e),o=n.length;--o>=0&&n[o]!==t;);return o>-1},M=function(t){return Math.max(t.scrollHeight,t.clientHeight,t.offsetHeight)},$=function(t){return Math.max(t.scrollWidth,t.clientWidth,t.offsetWidth)},E=function(t){return{width:$(t),height:M(t)}},S=function(t){var e=b(t)||x(t);return{viewport:{width:e?Math.min(window.innerWidth,document.documentElement.clientWidth):t.clientWidth,height:e?window.innerHeight:t.clientHeight},size:e?{width:Math.max($(document.body),$(document.documentElement)),height:Math.max(M(document.body),M(document.documentElement))}:E(t)}},I={y:"scrollTop",x:"scrollLeft"},C={y:"pageYOffset",x:"pageXOffset"},P=function(t,e){return b(t)?t[C[e]]:t[I[e]]},L=function(t,e,n){if(b(t)){var o="y"===n;t.scrollTo(o?t.pageXOffset:e,o?e:t.pageYOffset)}else t[I[n]]=e},k=function(t,e){var n=t.getBoundingClientRect();if(n.width||n.height){var o={top:0,left:0},r=void 0;if(b(e)||x(e))r=document.documentElement,o.top=window[C.y],o.left=window[C.x];else{var i=(r=e).getBoundingClientRect();o.top=-1*i.top+r[I.y],o.left=-1*i.left+r[I.x]}return{top:n.top+o.top-r.clientTop,left:n.left+o.left-r.clientLeft}}return n},Q=e?"onwheel"in document?"wheel":"mousewheel":"wheel",j=function(t){return"wheel"===t?Q:t},A=function(t,e,n,r,i){n.split(" ").forEach((function(n){t[e](j(n),r,!!o&&{passive:i})}))},z=function(t,e,n,o){return A(t,"addEventListener",e,n,o)},T=function(t,e,n,o){return A(t,"removeEventListener",e,n,o)},D=/^(\+|-)=(\d+(?:\.\d+)?)$/,W=function(e,n){var o={top:0,left:0,relative:!1};if(l(e,"top")||l(e,"left"))o=t({},o,e);else if(a(e))if(e.length>1)o.top=e[0],o.left=e[1];else{if(1!==e.length)return null;o.top=n?e[0]:0,o.left=n?0:e[0]}else if(u(e))n?o.top=e:o.left=e;else{if(!r(e))return null;var i=e.trim().match(D);if(!i)return null;var s=i[1],c=parseInt(i[2],10);"+"===s?(o.top=n?c:0,o.left=n?0:c):(o.top=n?-c:0,o.left=n?0:-c),o.relative=!0}return o},_={trigger:"[data-scroll]",header:"[data-scroll-header]",duration:1e3,easing:"easeOutQuint",offset:0,vertical:!0,horizontal:!1,cancellable:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0,before:null,after:null,cancel:null,complete:null,step:null},H="click",R="wheel touchstart touchmove",U=function(){function o(n,r){var i=this;this.$el=null,this.ctx={$trigger:null,opts:null,progress:!1,pos:null,startPos:null,easing:null,start:0,id:0,cancel:!1,hash:null},this.loop=function(t){var e=i,n=e.$el,r=e.ctx;if(r.start||(r.start=t),r.progress&&n){var a=r.opts,u=r.pos,l=r.start,s=r.startPos,c=r.easing,f=a.duration,p={top:"y",left:"x"},h=t-l,d=Math.min(1,Math.max(h/f,0));Object.keys(u).forEach((function(t){var e=u[t],o=s[t],r=e-o;if(0!==r){var i=c(d,f*d,0,1,f);L(n,Math.round(o+r*i),p[t])}})),h<=f?(i.hook(a,"step",d),r.id=o.raf(i.loop)):i.stop(!0)}else i.stop()},this.handleClick=function(e){for(var n=i.opts,o=e.target;o&&o!==document;o=o.parentNode)if(O(o,n.trigger)){var r=JSON.parse(o.getAttribute("data-scroll-options")||"{}"),a=o.getAttribute("data-scroll")||o.getAttribute("href"),u=t({},n,r),l=u.preventDefault,s=u.stopPropagation,c=u.vertical,f=u.horizontal;l&&e.preventDefault(),s&&e.stopPropagation(),i.ctx.$trigger=o,f&&c?i.to(a,u):c?i.toTop(a,u):f&&i.toLeft(a,u);break}},this.handleStop=function(t){var e=i.ctx,n=e.opts;n&&n.cancellable?(e.cancel=!0,i.stop()):t.preventDefault()},this.opts=t({},_,n||{});var a=null;e&&(a="string"==typeof r?y(r):null!=r?r:window),this.$el=a,a&&this.bind(!0,!1)}return o.create=function(t,e){return new o(t,e)},o.prototype.to=function(n,o){if(e){var i=this,a=i.$el,u=i.ctx,l=i.opts,s=u.$trigger,c=t({},l,o||{}),f=c.offset,p=c.vertical,h=c.horizontal,d=m(c.header)?c.header:y(c.header),v=/^#/,g=r(n)&&v.test(n)?n:null;if(u.opts=c,u.cancel=!1,u.hash=g,this.stop(),a){var w=W(f,p),b=W(n,p),x={top:0,left:0};if(b)if(b.relative){var O=P(a,p?"y":"x");x.top=p?O+b.top:b.top,x.left=p?b.left:O+b.left}else x=b;else if(r(n)&&"#"!==n){var M=y(n);if(!M)return;x=k(M,a)}w&&(x.top+=w.top,x.left+=w.left),d&&(x.top=Math.max(0,x.top-E(d).height));var $=S(a),I=$.viewport,C=$.size;x.top=p?Math.max(0,Math.min(C.height-I.height,x.top)):P(a,"y"),x.left=h?Math.max(0,Math.min(C.width-I.width,x.left)):P(a,"x"),!1!==this.hook(c,"before",x,s)?(u.pos=x,this.start(c),this.bind(!1,!0)):u.opts=null}}},o.prototype.toTop=function(e,n){this.to(e,t({},n||{},{vertical:!0,horizontal:!1}))},o.prototype.toLeft=function(e,n){this.to(e,t({},n||{},{vertical:!1,horizontal:!0}))},o.prototype.toElement=function(t,n){var o=this.$el;e&&o&&this.to(k(t,o),n||{})},o.prototype.stop=function(t){void 0===t&&(t=!1);var e=this,n=e.$el,r=e.ctx,i=r.pos;n&&r.progress&&(o.caf(r.id),r.progress=!1,r.start=0,r.id=0,t&&i&&(L(n,i.left,"x"),L(n,i.top,"y")),this.complete())},o.prototype.update=function(e){if(this.$el){var n=t({},this.opts,e);this.stop(),this.unbind(!0,!0),this.opts=n,this.bind(!0,!1)}},o.prototype.destroy=function(){this.$el&&(this.stop(),this.unbind(!0,!0),this.$el=null)},o.prototype.onBefore=function(t,e){return!0},o.prototype.onStep=function(t){},o.prototype.onAfter=function(t,e){},o.prototype.onCancel=function(){},o.prototype.onComplete=function(t){},o.prototype.start=function(t){var e=this.ctx;e.opts=t,e.progress=!0,e.easing=i(t.easing)?t.easing:g[t.easing];var n=this.$el,r={top:P(n,"y"),left:P(n,"x")};e.startPos=r,e.id=o.raf(this.loop)},o.prototype.complete=function(){var t=this,o=t.$el,r=t.ctx,i=r.hash,a=r.cancel,u=r.opts,l=r.pos,s=r.$trigger;if(o&&u){if(null!=i&&i!==window.location.hash){var c=u.updateURL;e&&n&&!1!==c&&window.history["replace"===c?"replaceState":"pushState"](null,"",i)}this.unbind(!1,!0),r.opts=null,r.$trigger=null,a?this.hook(u,"cancel"):this.hook(u,"after",l,s),this.hook(u,"complete",a)}},o.prototype.hook=function(t,e){for(var n,o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];var a,u,l=t[e];return i(l)&&(a=l.apply(this,o.concat([this]))),u=(n=this)["on"+(e[0].toUpperCase()+e.slice(1))].apply(n,o),void 0!==a?a:u},o.prototype.bind=function(t,e){var n=this,o=n.$el,r=n.ctx.opts;o&&(t&&z(o,H,this.handleClick,!1),e&&z(o,R,this.handleStop,!r||r.cancellable))},o.prototype.unbind=function(t,e){var n=this,o=n.$el,r=n.ctx.opts;o&&(t&&T(o,H,this.handleClick,!1),e&&T(o,R,this.handleStop,!r||r.cancellable))},o.raf=s,o.caf=c,o}();return U}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{"use strict";
/*!**********************************!*\
  !*** ./theme/js/entry/script.js ***!
  \**********************************/n.r(o);var t=n(/*! sweet-scroll */"./node_modules/sweet-scroll/sweet-scroll.js"),e=n.n(t);document.addEventListener("DOMContentLoaded",(()=>{new(e())({offset:0,vertical:!0,easing:"easeOutQuint",horizontal:!1,cancellable:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0}).update({trigger:'a[href^="#"]',duration:1e3})}))})()})();
//# sourceMappingURL=script.js.map