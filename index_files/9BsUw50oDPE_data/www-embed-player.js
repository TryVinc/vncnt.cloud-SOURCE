(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function ka(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function la(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function oa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var pa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)oa(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||pa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function w(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ba=b.prototype}
function xa(){this.A=!1;this.v=null;this.i=void 0;this.h=1;this.m=this.l=0;this.K=this.j=null}
function ya(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
xa.prototype.D=function(a){this.i=a};
function za(a,b){a.j={exception:b,nd:!0};a.h=a.l||a.m}
xa.prototype.return=function(a){this.j={return:a};this.h=this.m};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.m=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.l||a.m:void 0!=b.B&&a.m<b.B?(a.h=b.B,a.j=null):a.h=a.m:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Ea(a,b){ya(a.h);var c=a.h.v;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.v,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.v=null,za(a.h,g),Ga(a)}a.h.v=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ya(a.h);a.h.v?b=Fa(a,a.h.v.next,b,a.h.D):(a.h.D(b),b=Ga(a));return b};
this.throw=function(b){ya(a.h);a.h.v?b=Fa(a,a.h.v["throw"],b,a.h.D):(za(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ra});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.Z),reject:g(this.v)}};
b.prototype.Z=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.U(g):this.m(g)}};
b.prototype.U=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.ha(h,g):this.m(g)};
b.prototype.v=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.K()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.A)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Wb(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Wb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Wb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(y){t[x]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Wb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!oa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!oa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&oa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&oa(k,g)&&oa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&oa(k,g)&&oa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&oa(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||wa});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)oa(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)oa(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||ea});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(){return Date.now()}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ib(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a){for(var b in a)return!1;return!0}
function ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){C.console&&C.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(a,b){this.h=a===zb&&b||""}
yb.prototype.toString=function(){return this.h};
function Ab(a){return new yb(zb,a)}
var zb={};Ab("");function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h+""};
function Cb(a){if(a instanceof Bb&&a.constructor===Bb)return a.h;Ma(a);return"type_error:TrustedResourceUrl"}
var Db={};function Eb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Bb(a,Db)}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h.toString()};
var Gb={},Hb=new Fb("about:invalid#zClosurez",Gb);var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Jb,Kb=E("CLOSURE_FLAGS"),Lb=Kb&&Kb[610401301];Jb=null!=Lb?Lb:!1;function Mb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Nb,Ob=C.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Jb?Nb?Nb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Mb().indexOf(a)}
;function Qb(){return Jb?!!Nb&&0<Nb.brands.length:!1}
function Rb(){return Qb()?!1:F("Opera")}
function Sb(){return Qb()?!1:F("Trident")||F("MSIE")}
function Tb(){return F("Firefox")||F("FxiOS")}
function Ub(){return Qb()?Pb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Qb()?0:F("Edge"))||F("Silk")}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Wb={};function Xb(){}
Xb.prototype.toString=function(){return this.vd.toString()};function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a,b){return b.match(Zb)[a]||null}
function bc(a){return $b(ac(3,a))}
function cc(a){var b=a.match(Zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function dc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function hc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function ic(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var jc=/#|$/,kc=/[?&]($|#)/;function lc(a,b){for(var c=a.search(jc),d=0,e,f=[];0<=(e=ic(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(kc,"$1")}
;function mc(a){this.h=a}
;function nc(a,b,c){this.j=a;this.v=b;this.i=c||[];this.h=new Map}
m=nc.prototype;m.Pd=function(a){var b=B.apply(1,arguments),c=this.xc(b);c?c.push(new mc(a)):this.Cd(a,b)};
m.Cd=function(a){var b=this.getKey(B.apply(1,arguments));this.h.set(b,[new mc(a)])};
m.xc=function(){var a=this.getKey(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.he=function(){var a=this.xc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.getKey=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function oc(a,b){nc.call(this,a,3,b)}
w(oc,nc);oc.prototype.l=function(a){var b=B.apply(1,arguments),c=0,d=this.he(b);d&&(c=d.h);this.Cd(c+a,b)};function pc(a,b){nc.call(this,a,2,b)}
w(pc,nc);pc.prototype.record=function(a){this.Pd(a,B.apply(1,arguments))};function qc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function rc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?rc.apply(null,d):qc(d)}}
;function J(){this.ob=this.ob;this.v=this.v}
m=J.prototype;m.ob=!1;m.aa=function(){return this.ob};
m.dispose=function(){this.ob||(this.ob=!0,this.S())};
function sc(a,b){a.addOnDisposeCallback(Va(qc,b))}
m.addOnDisposeCallback=function(a,b){this.ob?void 0!==b?a.call(b):a():(this.v||(this.v=[]),this.v.push(void 0!==b?Ua(a,b):a))};
m.S=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function tc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
tc.prototype.stopPropagation=function(){this.j=!0};
tc.prototype.preventDefault=function(){this.defaultPrevented=!0};function uc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=vc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,wc[c])c=wc[c];else{c=String(c);if(!wc[c]){var f=/function\s+([^\(]+)/m.exec(c);wc[c]=f?f[1]:"[Anonymous]"}c=wc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function vc(a,b){b||(b={});b[xc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[xc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=vc(a,b));return c}
function xc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var wc={};var yc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function zc(){return Jb?!!Nb&&!!Nb.platform:!1}
function Ac(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Bc(a){Bc[" "](a);return a}
Bc[" "]=function(){};var Cc=Rb(),Dc=Sb(),Ec=F("Edge"),Fc=F("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Gc=-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge");Gc&&F("Mobile");zc()||F("Macintosh");zc()||F("Windows");(zc()?"Linux"===Nb.platform:F("Linux"))||zc()||F("CrOS");var Hc=zc()?"Android"===Nb.platform:F("Android");Ac();F("iPad");F("iPod");Ac()||F("iPad")||F("iPod");Mb().toLowerCase().indexOf("kaios");
function Ic(){var a=C.document;return a?a.documentMode:void 0}
var Jc;a:{var Mc="",Nc=function(){var a=Mb();if(Fc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ec)return/Edge\/([\d\.]+)/.exec(a);if(Dc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Gc)return/WebKit\/(\S+)/.exec(a);if(Cc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Nc&&(Mc=Nc?Nc[1]:"");if(Dc){var Oc=Ic();if(null!=Oc&&Oc>parseFloat(Mc)){Jc=String(Oc);break a}}Jc=Mc}var Pc=Jc,Qc;if(C.document&&Dc){var Rc=Ic();Qc=Rc?Rc:parseInt(Pc,10)||void 0}else Qc=void 0;var Sc=Qc;function Tc(a,b){tc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(Tc,tc);var Uc={2:"touch",3:"pen",4:"mouse"};
Tc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Fc){a:{try{Bc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Uc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Tc.Ba.preventDefault.call(this)};
Tc.prototype.stopPropagation=function(){Tc.Ba.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Tc.prototype.preventDefault=function(){Tc.Ba.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vc="closure_listenable_"+(1E6*Math.random()|0);var Wc=0;function Xc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ac=e;this.key=++Wc;this.Lb=this.Vb=!1}
function Yc(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.ac=null}
;function Zc(a){this.src=a;this.listeners={};this.h=0}
Zc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=$c(a,b,d,e);-1<g?(b=a[g],c||(b.Vb=!1)):(b=new Xc(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
Zc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=$c(e,b,c,d);return-1<b?(Yc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ad(a,b){var c=b.type;c in a.listeners&&ib(a.listeners[c],b)&&(Yc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function $c(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.ac==d)return e}return-1}
;var bd="closure_lm_"+(1E6*Math.random()|0),cd={},dd=0;function ed(a,b,c,d,e){if(d&&d.once)fd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ed(a,b[f],c,d,e);else c=gd(c),a&&a[Vc]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):hd(a,b,c,!1,d,e)}
function hd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=id(a);h||(a[bd]=h=new Zc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=jd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)yc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(kd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");dd++}}
function jd(){function a(c){return b.call(a.src,a.listener,c)}
var b=ld;return a}
function fd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)fd(a,b[f],c,d,e);else c=gd(c),a&&a[Vc]?a.h.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):hd(a,b,c,!0,d,e)}
function md(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)md(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=gd(c),a&&a[Vc])?a.h.remove(String(b),c,d,e):a&&(a=id(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=$c(b,c,d,e)),(c=-1<a?b[a]:null)&&nd(c))}
function nd(a){if("number"!==typeof a&&a&&!a.Lb){var b=a.src;if(b&&b[Vc])ad(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(kd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);dd--;(c=id(b))?(ad(c,a),0==c.h&&(c.src=null,b[bd]=null)):Yc(a)}}}
function kd(a){return a in cd?cd[a]:cd[a]="on"+a}
function ld(a,b){if(a.Lb)a=!0;else{b=new Tc(b,this);var c=a.listener,d=a.ac||a.src;a.Vb&&nd(a);a=c.call(d,b)}return a}
function id(a){a=a[bd];return a instanceof Zc?a:null}
var od="__closure_events_fn_"+(1E9*Math.random()>>>0);function gd(a){if("function"===typeof a)return a;a[od]||(a[od]=function(b){return a.handleEvent(b)});
return a[od]}
;function pd(){J.call(this);this.h=new Zc(this);this.Za=this;this.fa=null}
Xa(pd,J);pd.prototype[Vc]=!0;m=pd.prototype;m.addEventListener=function(a,b,c,d){ed(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){md(this,a,b,c,d)};
function qd(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new tc(b,a):b instanceof tc?b.target=b.target||a:(e=b,b=new tc(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=rd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=rd(g,c,!0,b)&&e,b.j||(e=rd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=rd(g,c,!1,b)&&e}
m.S=function(){pd.Ba.S.call(this);this.removeAllListeners();this.fa=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Yc(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function rd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.ac||g.src;g.Vb&&ad(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function sd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
sd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function td(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function ud(a,b){return a+Math.random()*(b-a)}
;function vd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=vd.prototype;m.clone=function(){return new vd(this.x,this.y)};
m.equals=function(a){return a instanceof vd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function wd(a,b){this.width=a;this.height=b}
m=wd.prototype;m.clone=function(){return new wd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function xd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function yd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function zd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Ad;function Bd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=yd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Cd(a){C.setTimeout(function(){throw a;},0)}
;function Dd(){this.i=this.h=null}
Dd.prototype.add=function(a,b){var c=Ed.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Dd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Ed=new sd(function(){return new Fd},function(a){return a.reset()});
function Fd(){this.next=this.scope=this.h=null}
Fd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Fd.prototype.reset=function(){this.next=this.scope=this.h=null};var Gd,Hd=!1,Id=new Dd;function Jd(a,b){Gd||Kd();Hd||(Gd(),Hd=!0);Id.add(a,b)}
function Kd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Gd=function(){a.then(Ld)}}else Gd=function(){var b=Ld;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Qb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Ad||(Ad=Bd()),Ad(b)):C.setImmediate(b)}}
function Ld(){for(var a;a=Id.remove();){try{a.h.call(a.scope)}catch(b){Cd(b)}td(Ed,a)}Hd=!1}
;function Md(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.v=this.m=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Nd(b,2,c)},function(c){Nd(b,3,c)})}catch(c){Nd(this,3,c)}}
function Od(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Od.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Pd=new sd(function(){return new Od},function(a){a.reset()});
function Qd(a,b,c){var d=Pd.get();d.i=a;d.h=b;d.context=c;return d}
function Rd(a){return new Md(function(b,c){c(a)})}
Md.prototype.then=function(a,b,c){return Sd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Md.prototype.$goog_Thenable=!0;m=Md.prototype;m.oc=function(a,b){return Sd(this,null,a,b)};
m.catch=Md.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new Td(a);Jd(function(){Ud(this,b)},this)}};
function Ud(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ud(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Vd(c),Wd(c,e,3,b)))}a.j=null}else Nd(a,3,b)}
function Xd(a,b){a.i||2!=a.h&&3!=a.h||Yd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Sd(a,b,c,d){var e=Qd(null,null,null);e.child=new Md(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Td?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Xd(a,e);return e.child}
m.ff=function(a){this.h=0;Nd(this,2,a)};
m.gf=function(a){this.h=0;Nd(this,3,a)};
function Nd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.ff,f=a.gf;if(d instanceof Md){Xd(d,Qd(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if("function"===typeof k){Zd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,Yd(a),3!=b||c instanceof Td||$d(a,c))}}
function Zd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Yd(a){a.m||(a.m=!0,Jd(a.be,a))}
function Vd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.be=function(){for(var a;a=Vd(this);)Wd(this,a,this.h,this.A);this.m=!1};
function Wd(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.v;a=a.j)a.v=!1;if(b.child)b.child.j=null,be(b,c,d);else try{b.j?b.i.call(b.context):be(b,c,d)}catch(e){ce.call(null,e)}td(Pd,b)}
function be(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function $d(a,b){a.v=!0;Jd(function(){a.v&&ce.call(null,b)})}
var ce=Cd;function Td(a){Za.call(this,a)}
Xa(Td,Za);Td.prototype.name="cancel";function de(a,b){pd.call(this);this.j=a||1;this.i=b||C;this.l=Ua(this.df,this);this.m=Wa()}
Xa(de,pd);m=de.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.df=function(){if(this.enabled){var a=Wa()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),qd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Wa())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.S=function(){de.Ba.S.call(this);this.stop();delete this.i};
function ee(a,b,c){if("function"===typeof a)c&&(a=Ua(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ua(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function fe(a){J.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new de(this.flushInterval);this.h.listen("tick",this.Pa,!1,this);sc(this,this.h)}
w(fe,J);m=fe.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ge(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Pa()}
m.Pa=function(){var a=this.i.values();a=[].concat(la(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);he(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Rb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new oc(a,b))};
m.sc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new pc(a,b))};
function ie(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.Pb=function(a){this.Od.apply(this,[a,1].concat(la(B.apply(1,arguments))))};
m.Od=function(a,b){var c=B.apply(2,arguments),d=ie(this,a);d&&d instanceof oc&&(d.l(b,c),ge(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=ie(this,a);d&&d instanceof pc&&(d.record(b,c),ge(this))};
function he(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function je(a){this.h=a;this.h.Rb("/client_streamz/bg/fic",{pa:3,oa:"ke"})}
function ke(a){this.h=a;this.h.Rb("/client_streamz/bg/fiec",{pa:3,oa:"rk"},{pa:3,oa:"ke"},{pa:2,oa:"ec"},{pa:3,oa:"em"})}
function le(a){this.h=a;this.h.sc("/client_streamz/bg/fil",{pa:3,oa:"rk"},{pa:3,oa:"ke"})}
le.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function me(a){this.h=a;this.h.Rb("/client_streamz/bg/fcc",{pa:2,oa:"ph"},{pa:3,oa:"ke"})}
function ne(a){this.h=a;this.h.sc("/client_streamz/bg/fcd",{pa:2,oa:"ph"},{pa:3,oa:"ke"})}
ne.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function oe(a){this.h=a;this.h.Rb("/client_streamz/bg/fsc",{pa:3,oa:"rk"},{pa:3,oa:"ke"})}
function pe(a){this.h=a;this.h.sc("/client_streamz/bg/fsl",{pa:3,oa:"rk"},{pa:3,oa:"ke"})}
pe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var qe={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function re(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=se(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=te(a,h),d+=te(a,h+4),e+=te(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return qe.toString(e)}
function se(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function te(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Tb();var ue=Ac()||F("iPod"),ve=F("iPad");!F("Android")||Ub()||Tb()||Rb()||F("Silk");Ub();var we=F("Safari")&&!(Ub()||(Qb()?0:F("Coast"))||Rb()||(Qb()?0:F("Edge"))||(Qb()?Pb("Microsoft Edge"):F("Edg/"))||(Qb()?Pb("Opera"):F("OPR"))||Tb()||F("Silk")||F("Android"))&&!(Ac()||F("iPad")||F("iPod"));var xe={},ye=null;function ze(a,b){Na(a);void 0===b&&(b=0);Ae();b=xe[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Be(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ce(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ce(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=ye[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ae();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Ae(){if(!ye){ye={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));xe[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===ye[f]&&(ye[f]=e)}}}}
;var De="undefined"!==typeof Uint8Array,Ee=!Dc&&"function"===typeof btoa;function Fe(a){if(!Ee)return ze(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ge=/[-_.]/g,He={"-":"+",_:"/",".":"="};function Ie(a){return He[a]||""}
function Je(a){return De&&null!=a&&a instanceof Uint8Array}
var Ke={};var Le;function Me(a){if(a!==Ke)throw Error("illegal external caller");}
function Ne(a,b){Me(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Ne.prototype.sizeBytes=function(){Me(Ke);var a=this.h;if(null!=a&&!Je(a))if("string"===typeof a)if(Ee){Ge.test(a)&&(a=a.replace(Ge,Ie));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Be(a);else Ma(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function Oe(){return"function"===typeof BigInt}
;function Pe(a){return Array.prototype.slice.call(a)}
;var Qe;Qe="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,la(Object.values({Jf:1,Hf:2,Gf:4,Mf:8,Lf:16,Kf:32,xf:64,Of:128,Ff:256,Ef:512,If:1024,Cf:2048,Nf:4096,Df:8192})));var Re=Qe?function(a,b){a[Qe]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Se(a,b,c){return c?a|b:a&~b}
var Te=Qe?function(a){return a[Qe]|0}:function(a){return a.Sa|0},Ue=Qe?function(a){return a[Qe]}:function(a){return a.Sa},Ve=Qe?function(a,b){a[Qe]=b;
return a}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function We(a,b){Ve(b,(a|0)&-14591)}
function Xe(a,b){Ve(b,(a|34)&-14557)}
function Ye(a){a=a>>14&1023;return 0===a?536870912:a}
;var Ze={},$e={};function af(a){return!(!a||"object"!==typeof a||a.h!==$e)}
function bf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var cf;function df(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Ne(a,Ke):Le||(Le=new Ne(null,Ke));else if(a.constructor!==Ne)if(Je(a))a=a.length?new Ne(new Uint8Array(a),Ke):Le||(Le=new Ne(null,Ke));else throw Error();return a}
function ef(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Te(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Ve(a,d|1);return!0}
var ff,gf=[];Ve(gf,55);ff=Object.freeze(gf);function hf(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var jf=0,kf=0;function lf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(mf(c,a)),b=c.next().value,a=c.next().value,c=b);jf=c>>>0;kf=a>>>0}
function nf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Oe()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+of(c)+of(a));return c}
function of(a){a=String(a);return"0000000".slice(a.length)+a}
function pf(){var a=jf,b=kf;b&2147483648?Oe()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(mf(a,b)),a=b.next().value,b=b.next().value,a="-"+nf(a,b)):a=nf(a,b);return a}
function mf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function qf(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function rf(a){return a.displayName||a.name||"unknown type name"}
function sf(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var tf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function uf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:tf.test(a)}
function vf(a){if(null!=a){if("number"!==typeof a)throw qf("int32");if(!Number.isFinite(a))throw qf("int32");a|=0}return a}
function wf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function xf(a){if(null!=a){var b=!!b;if(!uf(a))throw qf("int64");a="string"===typeof a?yf(a):b?zf(a):Af(a)}return a}
function Bf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Af(a){uf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){lf(a);var b=jf,c=kf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function zf(a){uf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Bf(b)?a=b:(lf(a),a=pf())}return a}
function yf(a){uf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Bf(a)){if(16>a.length)lf(Number(a));else if(Oe())a=BigInt(a),jf=Number(a&BigInt(4294967295))>>>0,kf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);kf=jf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),kf*=1E6,jf=1E6*jf+d,4294967296<=jf&&(kf+=Math.trunc(jf/4294967296),kf>>>=0,jf>>>=0);b&&(b=v(mf(jf,kf)),
a=b.next().value,b=b.next().value,jf=a,kf=b)}a=pf()}return a}
function Cf(a){if("string"!==typeof a)throw Error();return a}
function Df(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Ef(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+rf(b)+" but got "+(a&&rf(a.constructor)));}
function Ff(a,b,c){if(null!=a&&"object"===typeof a&&a.Jc===Ze)return a;if(Array.isArray(a)){var d=Te(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Ve(a,e);return new b(a)}}
;var Gf;function Hf(a,b){Te(b);Gf=b;a=new a(b);Gf=void 0;return a}
function If(a,b,c){null==a&&(a=Gf);Gf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Te(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(bf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}Ve(a,d);return a}
;function Jf(a,b){return Kf(b)}
function Kf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(ef(a,void 0,0))return}else{if(Je(a))return Fe(a);if(a instanceof Ne){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Fe(b)}}}return a}
;function Lf(a,b,c){a=Pe(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Mf(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=ef(a,void 0,0)?void 0:e&&Te(a)&2?a:Nf(a,b,c,void 0!==d,e);else if(bf(a)){var f={},g;for(g in a)f[g]=Mf(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Nf(a,b,c,d,e){var f=d||c?Te(a):0;d=d?!!(f&32):void 0;a=Pe(a);for(var g=0;g<a.length;g++)a[g]=Mf(a[g],b,c,d,e);c&&c(f,a);return a}
function Of(a){return a.Jc===Ze?a.toJSON():Kf(a)}
;function Pf(a,b,c){c=void 0===c?Xe:c;if(null!=a){if(De&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Te(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?Ve(a,(d|34)&-12293):Nf(a,Pf,d&4?Xe:c,!0,!0)}a.Jc===Ze&&(c=a.F,d=Ue(c),a=d&2?a:Hf(a.constructor,Qf(c,d,!0)));return a}}
function Qf(a,b,c){var d=c||b&2?Xe:We,e=!!(b&32);a=Lf(a,b,function(f){return Pf(f,e,d)});
Re(a,32|(c?2:0));return a}
function Rf(a){var b=a.F,c=Ue(b);return c&2?Hf(a.constructor,Qf(b,c,!1)):a}
;function Sf(a,b){a=a.F;return Tf(a,Ue(a),b)}
function Tf(a,b,c,d){if(-1===c)return null;if(c>=Ye(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Uf(a,b,c){var d=a.F,e=Ue(d);hf(e);Vf(d,e,b,c);return a}
function Vf(a,b,c,d,e){bf(d);var f=Ye(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&Ve(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Wf(a){return void 0!==Xf(a,Yf,11,!1)}
function Zf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function $f(a,b,c,d){var e=a.F,f=Ue(e);hf(f);if(null==c)return Vf(e,f,b),a;if(!Array.isArray(c))throw qf();var g=Te(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g))for(g=21,k&&(c=Pe(c),h=0,g=ag(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(c=Pe(c),h=0,g=ag(g,f,!0));g!==h&&Ve(c,g);Vf(e,f,b,c);return a}
function bg(a,b,c,d){a=a.F;var e=Ue(a);hf(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=Tf(a,f,k)&&(0!==g&&(f=Vf(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=Vf(a,e,c));Vf(a,e,b,d)}
function Xf(a,b,c,d){a=a.F;var e=Ue(a),f=Tf(a,e,c,d);b=Ff(f,b,e);b!==f&&null!=b&&Vf(a,e,c,b,d);return b}
function cg(a,b,c,d){d=void 0===d?!1:d;b=Xf(a,b,c,d);if(null==b)return b;a=a.F;var e=Ue(a);if(!(e&2)){var f=Rf(b);f!==b&&(b=f,Vf(a,e,c,b,d))}return b}
function dg(a,b,c,d){null!=d?Ef(d,b):d=void 0;return Uf(a,c,d)}
function eg(a,b,c,d){var e=a.F,f=Ue(e);hf(f);if(null==d)return Vf(e,f,c),a;if(!Array.isArray(d))throw qf();for(var g=Te(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var x=d[r];Ef(x,b);k||(x=!!(Te(x.F)&2),p&&(p=!x),t&&(t=x))}k||(g=Se(g,5,!0),g=Se(g,8,p),g=Se(g,16,t));if(n||l&&g!==h)d=Pe(d),h=0,g=ag(g,f,!0);g!==h&&Ve(d,g);Vf(e,f,c,d);return a}
function ag(a,b,c){a=Se(a,2,!!(2&b));a=Se(a,32,!!(32&b)&&c);return a=Se(a,2048,!1)}
function fg(a,b){a=Sf(a,b);var c;null==a?c=a:uf(a)?"number"===typeof a?c=Af(a):c=yf(a):c=void 0;return c}
function gg(a){a=Sf(a,1);var b=void 0===b?!1:b;b=null==a?a:uf(a)?"string"===typeof a?yf(a):b?zf(a):Af(a):void 0;return b}
function hg(a){a=Sf(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function ig(a){return df(a,!1)}
function jg(a,b,c){return Uf(a,b,Df(c))}
function kg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw qf("enum");c|=0}return Uf(a,b,c)}
;function lg(a,b,c){this.F=If(a,b,c)}
m=lg.prototype;m.toJSON=function(){if(cf)var a=mg(this,this.F,!1);else a=Nf(this.F,Of,void 0,void 0,!1),a=mg(this,a,!0);return a};
m.serialize=function(){cf=!0;try{return JSON.stringify(this.toJSON(),Jf)}finally{cf=!1}};
function ng(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Re(b,32);return Hf(a,b)}
m.clone=function(){var a=this.F,b=Ue(a);return Hf(this.constructor,Qf(a,b,!1))};
m.Jc=Ze;m.toString=function(){return mg(this,this.F,!1).toString()};
function mg(a,b,c){var d=a.constructor.Ua,e=Ue(c?a.F:b);a=b.length;if(!a)return b;var f;if(bf(c=b[a-1])){a:{var g=c;var h={},k=!1,l;for(l in g){var n=g[l];if(Array.isArray(n)){var p=n;if(ef(n,d,+l)||af(n)&&0===n.size)n=null;n!=p&&(k=!0)}null!=n?h[l]=n:k=!0}if(k){for(var t in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(l=+!!(e&512)-1;0<a;a--){t=a-1;c=b[t];t-=l;if(!(null==c||ef(c,d,t)||af(c)&&0===c.size))break;var r=!0}if(!f&&!r)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);return b}
;function og(a){this.F=If(a)}
w(og,lg);var pg=[1,2,3];function qg(a){this.F=If(a)}
w(qg,lg);var rg=[1,2,3];function sg(a){this.F=If(a)}
w(sg,lg);sg.Ua=[1];function tg(a){this.F=If(a)}
w(tg,lg);tg.Ua=[3,6,4];function ug(a){this.F=If(a)}
w(ug,lg);ug.Ua=[1];function vg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function wg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],z=e[3],G=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var K=z^x&(y^z);var I=1518500249}else K=x^y^z,I=1859775393;else 60>r?(K=x&y|z&(x|y),I=2400959708):(K=x^y^z,I=3395469782);K=((p<<5|p>>>27)&4294967295)+K+G+I+t[r]&4294967295;G=z;z=y;y=(x<<30|x>>>2)&4294967295;x=p;p=K}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],x=0,y=p.length;x<y;++x)r.push(p.charCodeAt(x));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var x=24;0<=x;x-=8)p[t++]=e[r]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Xd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function xg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,yg(vg(d),a,c||null)].join(" "):null}
function yg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),zg(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=zg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function zg(a){var b=wg();b.update(a);return b.Xd().toLowerCase()}
;var Ag={};function Bg(a){this.h=a||{cookie:""}}
m=Bg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.jg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fc:0,path:b,domain:c});return d};
m.Ac=function(){return Cg(this).keys};
m.clear=function(){for(var a=Cg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Cg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Dg=new Bg("undefined"==typeof document?null:document);function Eg(a){return!!Ag.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Fg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Eg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Bg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Eg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Gg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Bg(document)).get(b));return a?xg(a,c,d):null}
function Hg(a,b){b=void 0===b?!1:b;var c=vg(String(C.location.href)),d=[];if(Fg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Bg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?xg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Eg(b)&&((b=Gg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Gg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Ig(a){this.F=If(a)}
w(Ig,lg);Ig.Ua=[2];function Jg(a){pd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Wa()};
this.j=this.i()}
w(Jg,pd);Jg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Jg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Jg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Jg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),qd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Kg(a){this.F=If(a)}
w(Kg,lg);function Lg(a){this.F=If(a)}
w(Lg,lg);function Mg(a){this.h=this.i=this.j=a}
Mg.prototype.reset=function(){this.h=this.i=this.j};
Mg.prototype.getValue=function(){return this.i};function Ng(a){this.F=If(a)}
w(Ng,lg);Ng.prototype.Bc=function(){return hg(this)};function Og(a){this.F=If(a)}
w(Og,lg);function Pg(a){this.F=If(a)}
w(Pg,lg);function Qg(a,b){eg(a,Og,1,b)}
Pg.Ua=[1];function Yf(a){this.F=If(a)}
w(Yf,lg);var Rg=["platform","platformVersion","architecture","model","uaFullVersion"],Sg=new Pg,Tg=null;function Ug(a,b){b=void 0===b?Rg:b;if(!Tg){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(d){var e=new Og;e=jg(e,1,d.brand);return jg(e,2,d.version)});
Qg(Uf(Sg,2,sf(a.mobile)),c);Tg=a.getHighEntropyValues(b)}return Tg.then(function(d){var e=Sg.clone();b.includes("platform")&&jg(e,3,d.platform);b.includes("platformVersion")&&jg(e,4,d.platformVersion);b.includes("architecture")&&jg(e,5,d.architecture);b.includes("model")&&jg(e,6,d.model);b.includes("uaFullVersion")&&jg(e,7,d.uaFullVersion);return e}).catch(function(){return Sg.clone()})}
;function Vg(a){this.F=If(a)}
w(Vg,lg);function Wg(a){this.F=If(a,4)}
w(Wg,lg);function Xg(a){this.F=If(a,35)}
w(Xg,lg);Xg.Ua=[3,20,27];function Yg(a){this.F=If(a,19)}
w(Yg,lg);Yg.prototype.Mb=function(a){return kg(this,2,a)};
Yg.Ua=[3,5];function Zg(a){this.F=If(a,7)}
w(Zg,lg);var $g=function(a){return function(b){return ng(a,b)}}(Zg);
Zg.Ua=[5,6];function ah(a){this.F=If(a)}
w(ah,lg);var bh=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=cg;this.defaultValue=void 0}(175237375,ah);function ch(a){J.call(this);var b=this;this.componentId="";this.j=[];this.fa="";this.ha=this.Z=-1;this.ea=!1;this.A=this.experimentIds=null;this.U=this.m=0;this.va=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new dh(a.logSource,a.eb);this.network=a.network;this.Kb=a.Kb||null;this.bufferSize=1E3;this.Fa=Va(ud,0,1);this.D=a.hf||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.ed;this.eb=a.eb||!1;this.T="undefined"!==typeof URLSearchParams&&!!(new URL(eh(this))).searchParams&&!!(new URL(eh(this))).searchParams.set;var c=kg(new Vg,1,1);fh(this.i,c);this.l=new Mg(1E4);this.h=new Jg(this.l.getValue());a=gh(this,a.Xc);ed(this.h,
"tick",a,!1,this);this.K=new Jg(6E5);ed(this.K,"tick",a,!1,this);this.Db||this.K.start();this.eb||(ed(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.vc()}),ed(document,"pagehide",this.vc,!1,this))}
w(ch,J);function gh(a,b){return a.T?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=ch.prototype;m.S=function(){this.vc();this.h.stop();this.K.stop();J.prototype.S.call(this)};
function hh(a,b){a.l=new Mg(1>b?1:b);a.h.setInterval(a.l.getValue())}
m.log=function(a){if(this.T){a=a.clone();var b=this.va++;a=Uf(a,21,xf(b));this.componentId&&jg(a,26,this.componentId);if(!gg(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";Uf(b,1,xf(c))}null==fg(a,15)&&Uf(a,15,xf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),dg(b,Ig,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ha>d&&this.Z<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.Bc?ih(this.i,this.network.Bc()):ih(this.i,0));var e=jh(this.i,this.j,this.m,this.U,this.Kb);d={};var f=this.Fb();f&&(d.Authorization=f);this.D||(this.D=eh(this));try{var g=(new URL(this.D)).toString()}catch(r){g=(new URL(this.D,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g.searchParams.set("pageId",this.pageId));if(f&&this.fa===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize(),k;this.A&&this.A.isSupported(h.length)&&(k=this.A.compress(h));var l={url:g.toString(),body:h,Td:1,Pc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.l.reset();c.h.setInterval(c.l.getValue());
if(r){var x=null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));x=$g(y)}catch(G){}if(x){r=Number;y="-1";y=void 0===y?"0":y;var z=gg(x);r=r(null!=z?z:y);0<r&&(c.Z=Date.now(),c.ha=c.Z+r);x=bh.ctor?bh.i(x,bh.ctor,bh.h,!0):bh.i(x,bh.h,null,!0);if(r=null===x?void 0:x)x=-1,x=void 0===x?0:x,r=wf(Sf(r,1)),x=null!=r?r:x,-1!==x&&(c.ea||hh(c,x))}}a&&a();c.U=0},p=function(r,x){var y=e.F;
var z=Ue(y),G=z,K=!(2&z),I=!!(2&G),S=I?1:2;z=1===S;S=2===S;K&&(K=!I);I=Tf(y,G,3);I=Array.isArray(I)?I:ff;var H=Te(I),fa=!!(4&H);if(!fa){var L=H;0===L&&(L=ag(L,G,!1));L=Se(L,1,!0);H=I;var X=G,da=!!(2&L);da&&(X=Se(X,2,!0));for(var ma=!da,na=!0,rb=0,Kc=0;rb<H.length;rb++){var Lc=Ff(H[rb],Xg,X);if(Lc instanceof Xg){if(!da){var ae=!!(Te(Lc.F)&2);ma&&(ma=!ae);na&&(na=ae)}H[Kc++]=Lc}}Kc<rb&&(H.length=Kc);L=Se(L,4,!0);L=Se(L,16,na);L=Se(L,8,ma);Ve(H,L);da&&Object.freeze(H);H=L}L=!!(8&H)||z&&!I.length;if(K&&
!L){Zf(H)&&(I=Pe(I),H=ag(H,G,!1),G=Vf(y,G,3,I));K=I;for(L=0;L<K.length;L++)X=K[L],da=Rf(X),X!==da&&(K[L]=da);H=Se(H,8,!0);H=Se(H,16,!K.length);Ve(K,H)}Zf(H)||(K=H,z?H=Se(H,!I.length||16&H&&(!fa||32&H)?2:2048,!0):H=Se(H,32,!1),H!==K&&Ve(I,H),z&&Object.freeze(I));S&&Zf(H)&&(I=Pe(I),H=ag(H,G,!1),Ve(I,H),Vf(y,G,3,I));y=I;G=fg(e,14);z=c.l;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.h.setInterval(c.l.getValue());401===r&&f&&(c.fa=f);G&&(c.m+=G);void 0===x&&(x=c.isRetryable(r));
x&&(c.j=y.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.U},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Pc["Content-Encoding"]="gzip";l.Pc["Content-Type"]="application/binary";l.body=r;l.Td=2;t()},function(){t()}):t()}}}};
m.vc=function(){kh(this.i,!0);this.flush();kh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function eh(a){return.01>a.Fa()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true"}
function dh(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Yg;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));fh(this,new Vg)}
dh.prototype.Mb=function(a){this.h.Mb(a);return this};
function fh(a,b){dg(a.h,Vg,1,b);hg(b)||kg(b,1,1);if(!a.eb){b=lh(a);var c=Sf(b,5);(null==c||"string"===typeof c)&&c||jg(b,5,a.locale)}a.uach&&(b=lh(a),cg(b,Pg,9)||dg(b,Pg,9,a.uach))}
function ih(a,b){Wf(mh(a))&&(a=nh(a),kg(a,1,b))}
function kh(a,b){Wf(mh(a))&&(a=nh(a),Uf(a,2,sf(b)))}
function mh(a){return cg(a.h,Vg,1)}
function oh(a,b){var c=void 0===c?Rg:c;var d=a.eb?void 0:window;d?b(d,c).then(function(e){a.uach=e;e=lh(a);dg(e,Pg,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function lh(a){a=mh(a);var b=cg(a,Yf,11);b||(b=new Yf,dg(a,Yf,11,b));return b}
function nh(a){a=lh(a);var b=cg(a,Ng,10);b||(b=new Ng,Uf(b,2,sf(!1)),dg(a,Ng,10,b));return b}
function jh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(Wf(mh(a))){var h=nh(a);Uf(h,3,vf(d))}Wf(mh(a))&&(d=nh(a),Uf(d,4,vf(f)));Wf(mh(a))&&(f=nh(a),Uf(f,5,vf(g)));a=a.h.clone();g=Date.now().toString();a=Uf(a,4,xf(g));b=eg(a,Xg,3,b);e&&(a=new Kg,e=Uf(a,13,vf(e)),a=new Lg,e=dg(a,Kg,2,e),a=new Wg,e=dg(a,Lg,1,e),e=kg(e,2,9),dg(b,Wg,18,e));c&&Uf(b,14,xf(c));return b}
;function ph(){}
ph.prototype.serialize=function(a){var b=[];qh(this,a,b);return b.join("")};
function qh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),qh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),rh(d,c),c.push(":"),qh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":rh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var sh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},th=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function rh(a,b){b.push('"',a.replace(th,function(c){var d=sh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),sh[c]=d);return d}),'"')}
;function uh(){}
uh.prototype.h=null;uh.prototype.getOptions=function(){var a;(a=this.h)||(a={},vh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var wh;function xh(){}
Xa(xh,uh);function yh(a){return(a=vh(a))?new ActiveXObject(a):new XMLHttpRequest}
function vh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
wh=new xh;function zh(a){pd.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.K=this.J=null;this.l=this.ea="";this.j=this.Z=this.A=this.U=!1;this.m=0;this.D=null;this.Fa="";this.ha=this.va=!1}
Xa(zh,pd);var Ah=/^https?$/i,Bh=["POST","PUT"],Ch=[];function Dh(a,b,c,d,e,f,g){var h=new zh;Ch.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Vd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.va=g);h.send(a,c,d,e)}
m=zh.prototype;m.Vd=function(){this.dispose();ib(Ch,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.U=!1;this.i=!0;this.J=this.T?yh(this.T):yh(wh);this.K=this.T?this.T.getOptions():wh.getOptions();this.J.onreadystatechange=Ua(this.sd,this);try{this.getStatus(),this.Z=!0,this.J.open(b,String(a),!0),this.Z=!1}catch(g){this.getStatus();Eh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=cb(Bh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Fa&&(this.J.responseType=this.Fa);"withCredentials"in this.J&&this.J.withCredentials!==this.va&&(this.J.withCredentials=this.va);try{Fh(this),0<this.m&&(this.ha=Gh(this.J),this.getStatus(),this.ha?(this.J.timeout=this.m,this.J.ontimeout=Ua(this.Hd,
this)):this.D=ee(this.Hd,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),Eh(this,g)}};
function Gh(a){return Dc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Hd=function(){"undefined"!=typeof La&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),qd(this,"timeout"),this.abort(8))};
function Eh(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;Hh(a);Ih(a)}
function Hh(a){a.U||(a.U=!0,qd(a,"complete"),qd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,qd(this,"complete"),qd(this,"abort"),Ih(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),Ih(this,!0));zh.Ba.S.call(this)};
m.sd=function(){this.aa()||(this.Z||this.A||this.j?Jh(this):this.Ce())};
m.Ce=function(){Jh(this)};
function Jh(a){if(a.i&&"undefined"!=typeof La)if(a.K[1]&&4==Kh(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Kh(a))ee(a.sd,0,a);else if(qd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Lh(a))qd(a,"complete"),qd(a,"success");else{try{var b=2<Kh(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Hh(a)}}finally{Ih(a)}}}
function Ih(a,b){if(a.J){Fh(a);var c=a.J,d=a.K[0]?function(){}:null;
a.J=null;a.K=null;b||qd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Fh(a){a.J&&a.ha&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==Kh(this)};
function Lh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=ac(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Ah.test(a?a.toLowerCase():"");c=b}return c}
function Kh(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<Kh(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Mh(){}
Mh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Dh(a.url,function(d){d=d.target;if(Lh(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Pc,a.timeoutMillis,a.withCredentials)};
Mh.prototype.Bc=function(){return 1};function Nh(a,b){J.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Mh}
w(Nh,J);Nh.prototype.ed=function(){this.U=!0;return this};function Oh(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;J.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Nh(a,"0"),a.componentId=b,sc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),b=new ch({logSource:a.logSource,Fb:a.Fb?a.Fb:Hg,sessionIndex:a.sessionIndex,hf:a.i,eb:a.j,Db:!1,ed:a.U,pageId:a.pageId,Xc:a.Xc,network:a.network?a.network:void 0}),sc(a,b),a.A&&fh(b.i,a.A),a.h&&(c=a.h,d=lh(b.i),jg(d,7,c)),a.m&&(b.A=
a.m),a.componentId&&(b.componentId=a.componentId),a.Kb&&(b.Kb=a.Kb),a.l&&((d=a.l)?(b.experimentIds||(b.experimentIds=new Ig),c=b.experimentIds,d=d.serialize(),jg(c,4,d)):b.experimentIds&&Uf(b.experimentIds,4)),a.K&&(c=a.K,b.experimentIds||(b.experimentIds=new Ig),$f(b.experimentIds,2,c,ig)),a.D&&(c=a.D,b.ea=!0,hh(b,c)),oh(b.i,Ug),a.T&&oh(b.i,a.T),a.network.Mb&&a.network.Mb(a.logSource),a.network.We&&a.network.We(b),a=b);this.h=a}
w(Oh,J);
Oh.prototype.flush=function(a){var b=a||[];if(b.length){a=new ug;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new tg;f=jg(f,1,e.j);for(var g=[],h=0;h<e.i.length;h++)g.push(e.i[h].oa);f=$f(f,3,g,Cf);g=[];h=[];for(var k=v(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.v;for(var p=e.xc(l)||[],t=[],r=0;r<p.length;r++){var x=p[r],y=x&&x.h;x=new qg;switch(n){case 3:y=Number(y);Number.isFinite(y)&&bg(x,1,rg,xf(y));break;case 2:y=Number(y);if(null!=
y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);bg(x,2,rg,y)}t.push(x)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new sg;t=dg(r,qg,2,t);r=l;x=[];y=[];for(var z=0;z<e.i.length;z++)y.push(e.i[z].pa);for(z=0;z<y.length;z++){var G=y[z],K=r[z],I=new og;switch(G){case 3:bg(I,1,pg,Df(String(K)));break;case 2:G=Number(K);Number.isFinite(G)&&bg(I,2,pg,vf(G));break;case 1:bg(I,3,pg,sf("true"===K))}x.push(I)}eg(t,og,1,x);g.push(t)}}eg(f,sg,4,g);c.push(f);
e.clear()}eg(a,tg,1,c);b=this.h;b.T&&(a instanceof Xg?b.log(a):(c=new Xg,a=a.serialize(),a=jg(c,8,a),b.log(a)));this.h.flush()}};function Ph(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=Qh()}
Ph.prototype.start=function(){this.h=Qh()};
Ph.prototype.done=function(){null!=this.h&&this.logger.pd(this.event,Qh()-this.h)};
function Rh(){}
m=Rh.prototype;m.Gc=function(){};
m.pd=function(){};
m.ec=function(){};
m.od=function(){};
m.Pa=function(){};
function Sh(a,b){this.i=b;this.l=new Map;this.v=new Oh(1828,"","",!1,"",void 0,new Mh);this.h=new fe(this.v);this.K=new le(this.h);this.T=new oe(this.h);this.U=new pe(this.h);this.D=new ke(this.h);this.m=new me(this.h);this.A=new ne(this.h);this.j=re(a);(new je(this.h)).h.Pb("/client_streamz/bg/fic",this.i)}
m=Sh.prototype;m.Gc=function(){this.T.h.Pb("/client_streamz/bg/fsc",this.j,this.i)};
m.pd=function(a,b){0===a?this.K.record(b,this.j,this.i):1===a&&this.U.record(b,this.j,this.i)};
m.ec=function(a,b){this.D.h.Pb("/client_streamz/bg/fiec",this.j,this.i,a,b)};
function Th(a,b,c){var d,e=null!=(d=a.l.get(c))?d:0;++e;a.l.set(c,e);a.m.h.Pb("/client_streamz/bg/fcc",c,a.i);150>=e&&a.A.record(b,c,a.i)}
m.od=function(a,b,c){b?Th(this,a,1):c?Th(this,a,2):Th(this,a,3)};
m.Pa=function(){this.h.Pa()};
function Qh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Uh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Vh(a){function b(p,t,r){Promise.resolve().then(function(){l.done();k.resolve({Rd:p,Ze:t,eg:r})})}
function c(p,t,r){d.na.od(p,t,r)}
var d=this;this.h=!1;var e=a.program;var f=a.ke;if(!1!==a.Ie){var g,h;this.na=null!=(h=a.na)?h:new Sh(f,null!=(g=a.dg)?g:"_")}else this.na=new Rh;var k=new Uh;this.i=k.promise;var l=new Ph(this.na,0,!1);C[f]?C[f].a||(this.na.ec(2,""),this.na.Pa()):(this.na.ec(1,""),this.na.Pa());try{var n=C[f].a;l.start();this.j=v(n(e,b,!0,a.og,c)).next().value;this.Ye=k.promise.then(function(){})}catch(p){throw this.na.ec(4,p.message),this.na.Pa(),p;
}}
Vh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");this.na.Gc();return this.i.then(function(c){var d=c.Rd;return new Promise(function(e){var f=new Ph(b.na,1);d(function(g){f.done();e(g)},[a.dd,
a.af,a.kf])})})};
Vh.prototype.Ed=function(a){if(this.h)throw Error("Already disposed");this.na.Gc();var b=new Ph(this.na,1);a=this.j([a.dd,a.af,a.kf]);b.done();return a};
Vh.prototype.dispose=function(){this.na.Pa();this.h=!0;this.i.then(function(a){(a=a.Ze)&&a()})};
Vh.prototype.aa=function(){return this.h};var Wh=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");var Xh=ia([""]),Yh=ka(["\x00"],["\\0"]),Zh=ka(["\n"],["\\n"]),$h=ka(["\x00"],["\\u0000"]);function ai(a){return-1===a.toString().indexOf("`")}
ai(function(a){return a(Xh)})||ai(function(a){return a(Yh)})||ai(function(a){return a(Zh)})||ai(function(a){return a($h)});function bi(a){this.te=a}
function ci(a){return new bi(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var di=[ci("data"),ci("http"),ci("https"),ci("mailto"),ci("ftp"),new bi(function(a){return/^[^:]*([/?#]|$)/.test(a)})],ei="function"===typeof URL;
function fi(a){if(a instanceof Fb)a instanceof Fb&&a.constructor===Fb?a=a.h:(Ma(a),a="type_error:SafeUrl");else{b:if(ei){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function gi(a,b){b=fi(b);void 0!==b&&(a.href=b)}
;function hi(){}
function ii(a){this.h=a}
w(ii,hi);ii.prototype.toString=function(){return this.h};function ji(a){var b="true".toString(),c=[new ii(ki[0].toLowerCase(),Wb)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ii)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function li(){throw Error("unknown trace type");}
;var mi="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function ni(a,b){if(b instanceof Bb)a.href=Cb(b).toString();else{if(-1===mi.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=fi(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function oi(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function pi(a){var b=oi(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function qi(a,b){if(b instanceof Xb)b=b.vd;else throw Error("");a.textContent=b;pi(a)}
function ri(a,b){a.src=Cb(b);pi(a)}
;function si(a){var b=ti;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ui(){var a=[];si(function(b){a.push(b)});
return a}
var ti={lf:"allow-forms",mf:"allow-modals",nf:"allow-orientation-lock",pf:"allow-pointer-lock",qf:"allow-popups",rf:"allow-popups-to-escape-sandbox",sf:"allow-presentation",tf:"allow-same-origin",uf:"allow-scripts",vf:"allow-top-navigation",wf:"allow-top-navigation-by-user-activation"},vi=bb(function(){return ui()});
function wi(){var a=xi(),b={};db(vi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function xi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function yi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var zi=(new Date).getTime();function Ai(a){pd.call(this);var b=this;this.A=this.j=0;this.Da=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ra:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(Bi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||Ci(this)}
w(Ai,pd);function Di(){var a=Ei;Ai.h||(Ai.h=new Ai(a));return Ai.h}
Ai.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.ra(this.A);delete Ai.h};
Ai.prototype.xa=function(){return this.i};
function Ci(a){a.A=a.Da.qa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(Bi(a),3):c.yield(Bi(a),3);Ci(a);c.h=0})},3E4)}
function Bi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Da.qa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.l=0;h.m=0;a.m=void 0;a.j&&(a.Da.ra(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?qd(a,"networkstatus-online"):qd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function Fi(){this.data=[];this.h=-1}
Fi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Fi.prototype.get=function(a){return!!this.data[a]};
function Gi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Hi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Hi.prototype[Symbol.iterator]=function(){return this};
Hi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ii(a,b){return new Hi(a,b)}
;function Ji(){this.blockSize=-1}
;function Ki(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(Ki,Ji);Ki.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Li(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ki.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Li(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Li(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Li(this,e);f=0;break}}this.i=f;this.l+=b}};
Ki.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Li(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Mi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ni(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Oi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Mi(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function Pi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Oi(a,"inverted-hdpi")&&Ni(a,Array.prototype.filter.call(a.classList?a.classList:Mi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Qi(){}
Qi.prototype.next=function(){return Ri};
var Ri={done:!0,value:void 0};function Si(a){return{value:a,done:!1}}
Qi.prototype.Ga=function(){return this};function Ti(a){if(a instanceof Ui||a instanceof Vi||a instanceof Wi)return a;if("function"==typeof a.next)return new Ui(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ui(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Ui(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Ui(a){this.i=a}
Ui.prototype.Ga=function(){return new Vi(this.i())};
Ui.prototype[Symbol.iterator]=function(){return new Wi(this.i())};
Ui.prototype.h=function(){return new Wi(this.i())};
function Vi(a){this.i=a}
w(Vi,Qi);Vi.prototype.next=function(){return this.i.next()};
Vi.prototype[Symbol.iterator]=function(){return new Wi(this.i)};
Vi.prototype.h=function(){return new Wi(this.i)};
function Wi(a){Ui.call(this,function(){return a});
this.j=a}
w(Wi,Ui);Wi.prototype.next=function(){return this.j.next()};function Xi(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Xi)for(c=a.Ac(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Xi.prototype;m.Ac=function(){Yi(this);return this.h.concat()};
m.has=function(a){return Zi(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||$i;Yi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function $i(a,b){return a===b}
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Zi(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&Yi(this),!0):!1};
function Yi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Zi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Zi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Zi(this.i,a)?this.i[a]:b};
m.set=function(a,b){Zi(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Ac(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Xi(this)};
m.keys=function(){return Ti(this.Ga(!0)).h()};
m.values=function(){return Ti(this.Ga(!1)).h()};
m.entries=function(){var a=this;return Ii(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){Yi(this);var b=0,c=this.Wa,d=this,e=new Qi;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ri;var f=d.h[b++];return Si(a?f:d.i[f])};
return e};
function Zi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function M(a){J.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
Xa(M,J);m=M.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.zb(a)}return!1};
m.zb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];aj(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.aa();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.zb(c)}}return 0!=e}return!1};
function aj(a,b,c){Jd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.zb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){M.Ba.S.call(this);this.clear();this.j.length=0};function bj(a){this.h=a}
bj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new ph).serialize(b))};
bj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bj.prototype.remove=function(a){this.h.remove(a)};function cj(a){this.h=a}
Xa(cj,bj);function dj(a){this.data=a}
function ej(a){return void 0===a||a instanceof dj?a:new dj(a)}
cj.prototype.set=function(a,b){cj.Ba.set.call(this,a,ej(b))};
cj.prototype.i=function(a){a=cj.Ba.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function fj(a){this.h=a}
Xa(fj,cj);fj.prototype.set=function(a,b,c){if(b=ej(b)){if(c){if(c<Wa()){fj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}fj.Ba.set.call(this,a,b)};
fj.prototype.i=function(a){var b=fj.Ba.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())fj.prototype.remove.call(this,a);else return b}};function gj(){}
;function hj(){}
Xa(hj,gj);hj.prototype[Symbol.iterator]=function(){return Ti(this.Ga(!0)).h()};
hj.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ij(a){this.h=a;this.i=null}
Xa(ij,hj);m=ij.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){jj(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){jj(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){jj(this);this.h.removeItem(a)};
m.Ga=function(a){jj(this);var b=0,c=this.h,d=new Qi;d.next=function(){if(b>=c.length)return Ri;var e=c.key(b++);if(a)return Si(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Si(e)};
return d};
m.clear=function(){jj(this);this.h.clear()};
m.key=function(a){jj(this);return this.h.key(a)};
function jj(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Cd(Error("Storage mechanism: Storage unavailable"))}
;function kj(){var a=null;try{a=C.localStorage||null}catch(b){}ij.call(this,a)}
Xa(kj,ij);function lj(a,b){this.i=a;this.h=null;var c;if(c=Dc)c=!(9<=Number(Sc));if(c){mj||(mj=new Xi);this.h=mj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),mj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(lj,hj);var nj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},mj=null;function oj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return nj[b]})}
m=lj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(oj(a),b);pj(this)};
m.get=function(a){a=this.h.getAttribute(oj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(oj(a));pj(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Qi;d.next=function(){if(b>=c.length)return Ri;var e=c[b++];if(a)return Si(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Si(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);pj(this)};
function pj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function qj(a,b){this.i=a;this.h=b+"::"}
Xa(qj,hj);qj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
qj.prototype.get=function(a){return this.i.get(this.h+a)};
qj.prototype.remove=function(a){this.i.remove(this.h+a)};
qj.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Qi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Si(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},rj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Sc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var sj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},tj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
N.Xe=function(){rj?(N.lb=Uint8Array,N.Ia=Uint16Array,N.Nd=Int32Array,N.assign(N,sj)):(N.lb=Array,N.Ia=Array,N.Nd=Array,N.assign(N,tj))};
N.Xe();var uj=!0;try{new Uint8Array(1)}catch(a){uj=!1}
function vj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var wj={};wj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var xj={},yj,zj=[],Aj=0;256>Aj;Aj++){yj=Aj;for(var Bj=0;8>Bj;Bj++)yj=yj&1?3988292384^yj>>>1:yj>>>1;zj[Aj]=yj}xj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^zj[(a^b[d])&255];return a^-1};var Cj={};Cj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Dj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Ej=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Fj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Gj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Hj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ij=Array(576);Dj(Ij);var Jj=Array(60);Dj(Jj);var Kj=Array(512);Dj(Kj);var Lj=Array(256);Dj(Lj);var Mj=Array(29);Dj(Mj);var Nj=Array(30);Dj(Nj);function Oj(a,b,c,d,e){this.Fd=a;this.de=b;this.ce=c;this.Yd=d;this.ze=e;this.ld=a&&a.length}
var Pj,Qj,Rj;function Sj(a,b){this.gd=a;this.vb=0;this.Va=b}
function Tj(a,b){a.X[a.pending++]=b&255;a.X[a.pending++]=b>>>8&255}
function Uj(a,b,c){a.ga>16-c?(a.ma|=b<<a.ga&65535,Tj(a,a.ma),a.ma=b>>16-a.ga,a.ga+=c-16):(a.ma|=b<<a.ga&65535,a.ga+=c)}
function Vj(a,b,c){Uj(a,c[2*b],c[2*b+1])}
function Wj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Xj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Wj(d[e]++,e))}
function Yj(a){var b;for(b=0;286>b;b++)a.sa[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ia[2*b]=0;a.sa[512]=1;a.Oa=a.yb=0;a.za=a.matches=0}
function Zj(a){8<a.ga?Tj(a,a.ma):0<a.ga&&(a.X[a.pending++]=a.ma);a.ma=0;a.ga=0}
function ak(a,b,c){Zj(a);Tj(a,c);Tj(a,~c);N.mb(a.X,a.window,b,c,a.pending);a.pending+=c}
function bk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ck(a,b,c){for(var d=a.Y[c],e=c<<1;e<=a.Ma;){e<a.Ma&&bk(b,a.Y[e+1],a.Y[e],a.depth)&&e++;if(bk(b,d,a.Y[e],a.depth))break;a.Y[c]=a.Y[e];c=e;e<<=1}a.Y[c]=d}
function dk(a,b,c){var d=0;if(0!==a.za){do{var e=a.X[a.Cb+2*d]<<8|a.X[a.Cb+2*d+1];var f=a.X[a.Fc+d];d++;if(0===e)Vj(a,f,b);else{var g=Lj[f];Vj(a,g+256+1,b);var h=Ej[g];0!==h&&(f-=Mj[g],Uj(a,f,h));e--;g=256>e?Kj[e]:Kj[256+(e>>>7)];Vj(a,g,c);h=Fj[g];0!==h&&(e-=Nj[g],Uj(a,e,h))}}while(d<a.za)}Vj(a,256,b)}
function ek(a,b){var c=b.gd,d=b.Va.Fd,e=b.Va.ld,f=b.Va.Yd,g,h=-1;a.Ma=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Y[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.Y[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.yb-=d[2*k+1])}b.vb=h;for(g=a.Ma>>1;1<=g;g--)ck(a,c,g);k=f;do g=a.Y[1],a.Y[1]=a.Y[a.Ma--],ck(a,c,1),d=a.Y[1],a.Y[--a.qb]=g,a.Y[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Y[1]=k++,ck(a,c,1);while(2<=a.Ma);a.Y[--a.qb]=
a.Y[1];g=b.gd;k=b.vb;d=b.Va.Fd;e=b.Va.ld;f=b.Va.de;var l=b.Va.ce,n=b.Va.ze,p,t=0;for(p=0;15>=p;p++)a.Ja[p]=0;g[2*a.Y[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var r=a.Y[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ja[p]++;var x=0;r>=l&&(x=f[r-l]);var y=g[2*r];a.Oa+=y*(p+x);e&&(a.yb+=y*(d[2*r+1]+x))}}if(0!==t){do{for(p=n-1;0===a.Ja[p];)p--;a.Ja[p]--;a.Ja[p+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ja[p];0!==r;)d=a.Y[--b],d>k||(g[2*d+1]!==p&&(a.Oa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}Xj(c,h,a.Ja)}
function fk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ia[2*l]+=g:0!==l?(l!==e&&a.ia[2*l]++,a.ia[32]++):10>=g?a.ia[34]++:a.ia[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function gk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Vj(a,l,a.ia);while(0!==--g)}else 0!==l?(l!==e&&(Vj(a,l,a.ia),g--),Vj(a,16,a.ia),Uj(a,g-3,2)):10>=g?(Vj(a,17,a.ia),Uj(a,g-3,3)):(Vj(a,18,a.ia),Uj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function hk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.sa[2*c])return 0;if(0!==a.sa[18]||0!==a.sa[20]||0!==a.sa[26])return 1;for(c=32;256>c;c++)if(0!==a.sa[2*c])return 1;return 0}
var ik=!1;function jk(a,b,c){a.X[a.Cb+2*a.za]=b>>>8&255;a.X[a.Cb+2*a.za+1]=b&255;a.X[a.Fc+a.za]=c&255;a.za++;0===b?a.sa[2*c]++:(a.matches++,b--,a.sa[2*(Lj[c]+256+1)]++,a.bb[2*(256>b?Kj[b]:Kj[256+(b>>>7)])]++);return a.za===a.Hb-1}
;function kk(a,b){a.msg=Cj[b];return b}
function lk(a){for(var b=a.length;0<=--b;)a[b]=0}
function mk(a){var b=a.state,c=b.pending;c>a.P&&(c=a.P);0!==c&&(N.mb(a.output,b.X,b.Jb,c,a.wb),a.wb+=c,b.Jb+=c,a.Tc+=c,a.P-=c,b.pending-=c,0===b.pending&&(b.Jb=0))}
function nk(a,b){var c=0<=a.wa?a.wa:-1,d=a.o-a.wa,e=0;if(0<a.level){2===a.I.uc&&(a.I.uc=hk(a));ek(a,a.dc);ek(a,a.Yb);fk(a,a.sa,a.dc.vb);fk(a,a.bb,a.Yb.vb);ek(a,a.Yc);for(e=18;3<=e&&0===a.ia[2*Hj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Uj(a,b?1:0,3),ak(a,c,d);else if(4===a.strategy||g===f)Uj(a,2+(b?1:0),3),dk(a,Ij,Jj);else{Uj(a,4+(b?1:0),3);c=a.dc.vb+1;d=a.Yb.vb+1;e+=1;Uj(a,c-257,5);Uj(a,d-1,5);Uj(a,e-4,4);for(f=0;f<e;f++)Uj(a,a.ia[2*
Hj[f]+1],3);gk(a,a.sa,c-1);gk(a,a.bb,d-1);dk(a,a.sa,a.bb)}Yj(a);b&&Zj(a);a.wa=a.o;mk(a.I)}
function O(a,b){a.X[a.pending++]=b}
function ok(a,b){a.X[a.pending++]=b>>>8&255;a.X[a.pending++]=b&255}
function pk(a,b){var c=a.qd,d=a.o,e=a.ya,f=a.rd,g=a.o>a.ka-262?a.o-(a.ka-262):0,h=a.window,k=a.Xa,l=a.Ha,n=a.o+258,p=h[d+e-1],t=h[d+e];a.ya>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.ub=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function qk(a){var b=a.ka,c;do{var d=a.Ld-a.u-a.o;if(a.o>=b+(b-262)){N.mb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.wa-=b;var e=c=a.cc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.la)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,N.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=wj(e.H,c,g,f):2===e.state.wrap&&(e.H=xj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.ta)for(d=a.o-a.ta,a.M=a.window[d],
a.M=(a.M<<a.La^a.window[d+1])&a.Ka;a.ta&&!(a.M=(a.M<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Xa]=a.head[a.M],a.head[a.M]=d,d++,a.ta--,3>a.u+a.ta););}while(262>a.u&&0!==a.I.la)}
function rk(a,b){for(var c;;){if(262>a.u){qk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);0!==c&&a.o-c<=a.ka-262&&(a.R=pk(a,c));if(3<=a.R)if(c=jk(a,a.o-a.ub,a.R-3),a.u-=a.R,a.R<=a.Hc&&3<=a.u){a.R--;do a.o++,a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o;while(0!==--a.R);a.o++}else a.o+=a.R,a.R=0,a.M=a.window[a.o],a.M=(a.M<<a.La^a.window[a.o+1])&a.Ka;else c=jk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(nk(a,!1),0===a.I.P))return 1}a.ta=2>a.o?a.o:2;return 4===b?(nk(a,!0),0===a.I.P?3:4):a.za&&(nk(a,!1),0===a.I.P)?1:2}
function sk(a,b){for(var c,d;;){if(262>a.u){qk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);a.ya=a.R;a.ud=a.ub;a.R=2;0!==c&&a.ya<a.Hc&&a.o-c<=a.ka-262&&(a.R=pk(a,c),5>=a.R&&(1===a.strategy||3===a.R&&4096<a.o-a.ub)&&(a.R=2));if(3<=a.ya&&a.R<=a.ya){d=a.o+a.u-3;c=jk(a,a.o-1-a.ud,a.ya-3);a.u-=a.ya-1;a.ya-=2;do++a.o<=d&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);
while(0!==--a.ya);a.fb=0;a.R=2;a.o++;if(c&&(nk(a,!1),0===a.I.P))return 1}else if(a.fb){if((c=jk(a,0,a.window[a.o-1]))&&nk(a,!1),a.o++,a.u--,0===a.I.P)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(jk(a,0,a.window[a.o-1]),a.fb=0);a.ta=2>a.o?a.o:2;return 4===b?(nk(a,!0),0===a.I.P?3:4):a.za&&(nk(a,!1),0===a.I.P)?1:2}
function tk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){qk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.R=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.R=258-(e-d);a.R>a.u&&(a.R=a.u)}3<=a.R?(c=jk(a,1,a.R-3),a.u-=a.R,a.o+=a.R,a.R=0):(c=jk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(nk(a,!1),0===a.I.P))return 1}a.ta=0;return 4===b?(nk(a,!0),0===a.I.P?3:4):
a.za&&(nk(a,!1),0===a.I.P)?1:2}
function uk(a,b){for(var c;;){if(0===a.u&&(qk(a),0===a.u)){if(0===b)return 1;break}a.R=0;c=jk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(nk(a,!1),0===a.I.P))return 1}a.ta=0;return 4===b?(nk(a,!0),0===a.I.P?3:4):a.za&&(nk(a,!1),0===a.I.P)?1:2}
function vk(a,b,c,d,e){this.le=a;this.ye=b;this.Be=c;this.xe=d;this.ge=e}
var wk;wk=[new vk(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(1>=a.u){qk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.wa+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,nk(a,!1),0===a.I.P)return 1;if(a.o-a.wa>=a.ka-262&&(nk(a,!1),0===a.I.P))return 1}a.ta=0;if(4===b)return nk(a,!0),0===a.I.P?3:4;a.o>a.wa&&nk(a,!1);return 1}),
new vk(4,4,8,4,rk),new vk(4,5,16,8,rk),new vk(4,6,32,32,rk),new vk(4,4,16,16,sk),new vk(8,16,32,32,sk),new vk(8,16,128,128,sk),new vk(8,32,128,256,sk),new vk(32,128,258,1024,sk),new vk(32,258,258,4096,sk)];
function xk(){this.I=null;this.status=0;this.X=null;this.wrap=this.pending=this.Jb=this.Aa=0;this.G=null;this.Ca=0;this.method=8;this.sb=-1;this.Xa=this.Vc=this.ka=0;this.window=null;this.Ld=0;this.head=this.Ha=null;this.rd=this.kd=this.strategy=this.level=this.Hc=this.qd=this.ya=this.u=this.ub=this.o=this.fb=this.ud=this.R=this.wa=this.La=this.Ka=this.Cc=this.cc=this.M=0;this.sa=new N.Ia(1146);this.bb=new N.Ia(122);this.ia=new N.Ia(78);lk(this.sa);lk(this.bb);lk(this.ia);this.Yc=this.Yb=this.dc=
null;this.Ja=new N.Ia(16);this.Y=new N.Ia(573);lk(this.Y);this.qb=this.Ma=0;this.depth=new N.Ia(573);lk(this.depth);this.ga=this.ma=this.ta=this.matches=this.yb=this.Oa=this.Cb=this.za=this.Hb=this.Fc=0}
function yk(a,b){if(!a||!a.state||5<b||0>b)return a?kk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return kk(a,0===a.P?-5:-2);c.I=a;var d=c.sb;c.sb=b;if(42===c.status)if(2===c.wrap)a.H=0,O(c,31),O(c,139),O(c,8),c.G?(O(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),O(c,c.G.time&255),O(c,c.G.time>>8&255),O(c,c.G.time>>16&255),O(c,c.G.time>>24&255),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(O(c,c.G.extra.length&255),O(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=xj(a.H,c.X,c.pending,0)),c.Ca=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,3),c.status=113);else{var e=8+(c.Vc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;ok(c,e+(31-e%31));0!==c.o&&(ok(c,a.H>>>16),ok(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.Aa||
(c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.X,c.pending-e,e)),mk(a),e=c.pending,c.pending!==c.Aa));)O(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.X,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.Aa&&(c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.X,c.pending-e,e)),mk(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;O(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=xj(a.H,c.X,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.X,c.pending-e,e)),mk(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;O(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.X,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.Aa&&mk(a),c.pending+2<=c.Aa&&(O(c,a.H&
255),O(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(mk(a),0===a.P)return c.sb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return kk(a,-5);if(666===c.status&&0!==a.la)return kk(a,-5);if(0!==a.la||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?uk(c,b):3===c.strategy?tk(c,b):wk[c.level].ge(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.P&&(c.sb=-1),0;if(2===d&&(1===b?(Uj(c,2,3),Vj(c,256,Ij),16===c.ga?(Tj(c,c.ma),c.ma=0,c.ga=0):8<=c.ga&&
(c.X[c.pending++]=c.ma&255,c.ma>>=8,c.ga-=8)):5!==b&&(Uj(c,0,3),ak(c,0,0),3===b&&(lk(c.head),0===c.u&&(c.o=0,c.wa=0,c.ta=0))),mk(a),0===a.P))return c.sb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(O(c,a.H&255),O(c,a.H>>8&255),O(c,a.H>>16&255),O(c,a.H>>24&255),O(c,a.kb&255),O(c,a.kb>>8&255),O(c,a.kb>>16&255),O(c,a.kb>>24&255)):(ok(c,a.H>>>16),ok(c,a.H&65535));mk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var zk={};zk=function(){this.input=null;this.kb=this.la=this.hb=0;this.output=null;this.Tc=this.P=this.wb=0;this.msg="";this.state=null;this.uc=2;this.H=0};var Ak=Object.prototype.toString;
function Bk(a){if(!(this instanceof Bk))return new Bk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new zk;this.I.P=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=kk(b,-2);else{8===e&&(e=9);var k=new xk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Vc=e;k.ka=1<<k.Vc;k.Xa=k.ka-1;k.Cc=f+7;k.cc=1<<k.Cc;k.Ka=k.cc-1;k.La=~~((k.Cc+3-1)/3);k.window=new N.lb(2*k.ka);k.head=new N.Ia(k.cc);k.Ha=new N.Ia(k.ka);k.Hb=1<<f+6;k.Aa=4*k.Hb;k.X=new N.lb(k.Aa);k.Cb=1*k.Hb;k.Fc=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Tc=0;b.uc=2;c=b.state;c.pending=0;c.Jb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.sb=0;if(!ik){d=Array(16);for(f=g=0;28>f;f++)for(Mj[f]=g,e=0;e<1<<Ej[f];e++)Lj[g++]=f;Lj[g-1]=f;for(f=g=0;16>f;f++)for(Nj[f]=g,e=0;e<1<<Fj[f];e++)Kj[g++]=f;for(g>>=7;30>f;f++)for(Nj[f]=g<<7,e=0;e<1<<Fj[f]-7;e++)Kj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Ij[2*e+1]=8,e++,d[8]++;for(;255>=e;)Ij[2*e+1]=9,e++,d[9]++;for(;279>=e;)Ij[2*e+1]=7,e++,d[7]++;for(;287>=e;)Ij[2*e+1]=8,e++,d[8]++;Xj(Ij,287,d);for(e=0;30>e;e++)Jj[2*e+1]=5,Jj[2*e]=Wj(e,5);Pj=new Oj(Ij,Ej,257,286,15);Qj=new Oj(Jj,
Fj,0,30,15);Rj=new Oj([],Gj,0,19,7);ik=!0}c.dc=new Sj(c.sa,Pj);c.Yb=new Sj(c.bb,Qj);c.Yc=new Sj(c.ia,Rj);c.ma=0;c.ga=0;Yj(c);c=0}else c=kk(b,-2);0===c&&(b=b.state,b.Ld=2*b.ka,lk(b.head),b.Hc=wk[b.level].ye,b.kd=wk[b.level].le,b.rd=wk[b.level].Be,b.qd=wk[b.level].xe,b.o=0,b.wa=0,b.u=0,b.ta=0,b.R=b.ya=2,b.fb=0,b.M=0);b=c}}else b=-2;if(0!==b)throw Error(Cj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=vj(a.dictionary):
"[object ArrayBuffer]"===Ak.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=wj(a.H,f,g,0));l.wrap=0;g>=l.ka&&(0===b&&(lk(l.head),l.o=0,l.wa=0,l.ta=0),c=new N.lb(l.ka),N.mb(c,f,g-l.ka,l.ka,0),f=c,g=l.ka);c=a.la;d=a.hb;e=a.input;a.la=g;a.hb=0;a.input=f;for(qk(l);3<=l.u;){f=l.o;g=l.u-2;do l.M=(l.M<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Xa]=l.head[l.M],l.head[l.M]=f,f++;while(--g);
l.o=f;l.u=2;qk(l)}l.o+=l.u;l.wa=l.o;l.ta=l.u;l.u=0;l.R=l.ya=2;l.fb=0;a.hb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Cj[b]);this.Pf=!0}}
Bk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=vj(a):"[object ArrayBuffer]"===Ak.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.la=c.input.length;do{0===c.P&&(c.output=new N.lb(d),c.wb=0,c.P=d);a=yk(c,e);if(1!==a&&0!==a)return Ck(this,a),this.ended=!0,!1;if(0===c.P||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=N.Sc(c.output,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&uj||!b.subarray))b=
String.fromCharCode.apply(null,N.Sc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Sc(c.output,c.wb),this.chunks.push(b)}while((0<c.la||0===c.P)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=kk(c,-2):(c.state=null,a=113===d?kk(c,-3):0)):a=-2,Ck(this,a),this.ended=!0,0===a;2===e&&(Ck(this,0),c.P=0);return!0};
function Ck(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):N.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function Dk(a,b){b=b||{};b.gzip=!0;b=new Bk(b);b.push(a,!0);if(b.err)throw b.msg||Cj[b.err];return b.result}
;function Ek(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Eb(a):b=null;return b}
;function Fk(a){return Eb(null===a?"null":void 0===a?"undefined":a)}
;function Gk(a){this.name=a}
;var Hk=new Gk("rawColdConfigGroup");var Ik=new Gk("rawHotConfigGroup");function Jk(a){this.F=If(a)}
w(Jk,lg);var Kk=new Gk("continuationCommand");var Lk=new Gk("webCommandMetadata");var Mk=new Gk("signalServiceEndpoint");var Nk={Bf:"EMBEDDED_PLAYER_MODE_UNKNOWN",yf:"EMBEDDED_PLAYER_MODE_DEFAULT",Af:"EMBEDDED_PLAYER_MODE_PFP",zf:"EMBEDDED_PLAYER_MODE_PFL"};var Ok=new Gk("feedbackEndpoint");function Pk(a){this.F=If(a)}
w(Pk,lg);Pk.prototype.setTrackingParams=function(a){return Uf(this,1,df(a,!0))};var Qk=new Gk("webPlayerShareEntityServiceEndpoint");var Rk=new Gk("playlistEditEndpoint");var Sk=new Gk("modifyChannelNotificationPreferenceEndpoint");var Tk=new Gk("unsubscribeEndpoint");var Uk=new Gk("subscribeEndpoint");function Vk(){var a=Wk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Xk(a){D("yt.ads.biscotti.lastId_",a)}
;function Yk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Zk=C.window,$k,al,bl=(null==Zk?void 0:null==($k=Zk.yt)?void 0:$k.config_)||(null==Zk?void 0:null==(al=Zk.ytcfg)?void 0:al.data_)||{};D("yt.config_",bl);function cl(){Yk(bl,arguments)}
function P(a,b){return a in bl?bl[a]:b}
function dl(a){var b=bl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var el=[];function fl(a){el.forEach(function(b){return b(a)})}
function gl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hl(b)}}:a}
function hl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),cl("ERRORS",b));fl(a)}
function il(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),cl("ERRORS",f))}
;var jl=/^[\w.]*$/,kl={q:!0,search_query:!0};function ll(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=ml(f[0]||""),h=ml(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?jb(k,h):c[g]=[k,h]}else c[g]=h}catch(t){var l=t,n=f[0],p=String(ll);l.args=[{key:n,value:f[1],query:a,method:nl===p?"unchanged":p}];kl.hasOwnProperty(n)||il(l)}}return c}
var nl=String(ll);function ol(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];db(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function pl(a){"?"===a.charAt(0)&&(a=a.substring(1));return ll(a,"&")}
function ql(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),pl(1<a.length?a[1]:a[0])):{}}
function rl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=pl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return hc(a,e)+d}
function sl(a){if(!b)var b=window.location.href;var c=ac(1,a),d=bc(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)===d&&(Number(ac(4,b))||null)===(Number(ac(4,a))||null):!0;return a}
function ml(a){return a&&a.match(jl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function tl(a){var b=ul;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=zi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(na){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Wh:g;try{var h=g.history.length}catch(na){h=0}e.u_his=h;var k;e.u_h=null==(k=Wh.screen)?void 0:k.height;var l;e.u_w=null==(l=Wh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Wh.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Wh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Wh.screen)?void 0:t.colorDepth}catch(na){}h=b.h;try{var r=h.screenX;var x=h.screenY}catch(na){}try{var y=h.outerWidth;var z=h.outerHeight}catch(na){}try{var G=h.innerWidth;var K=h.innerHeight}catch(na){}try{var I=h.screenLeft;var S=h.screenTop}catch(na){}try{G=h.innerWidth,K=h.innerHeight}catch(na){}try{var H=h.screen.availWidth;var fa=h.screen.availTop}catch(na){}r=[I,S,r,x,H,fa,y,z,G,K];try{var L=(b.h.top||window).document,X="CSS1Compat"==
L.compatMode?L.documentElement:L.body;var da=(new wd(X.clientWidth,X.clientHeight)).round()}catch(na){da=new wd(-12245933,-12245933)}L=da;da={};var ma=void 0===ma?C:ma;X=new Fi;"SVGElement"in ma&&"createElementNS"in ma.document&&X.set(0);x=wi();x["allow-top-navigation-by-user-activation"]&&X.set(1);x["allow-popups-to-escape-sandbox"]&&X.set(2);ma.crypto&&ma.crypto.subtle&&X.set(3);"TextDecoder"in ma&&"TextEncoder"in ma&&X.set(4);ma=Gi(X);da.bc=ma;da.bih=L.height;da.biw=L.width;da.brdim=r.join();b=
b.i;b=(da.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,da.wgl=!!Wh.WebGLRenderingContext,da);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ul=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return ol(tl(a))});Wa();navigator.userAgent.indexOf(" (CrKey ");function R(a){a=vl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function T(a,b){a=vl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function vl(a){return P("EXPERIMENT_FLAGS",{})[a]}
function wl(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var xl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function yl(){if(!xl)return null;var a=xl();return"open"in a?a:null}
function zl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Al(a,b){"function"===typeof a&&(a=gl(a));return window.setTimeout(a,b)}
;var Bl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(la(Bl),["client_dev_set_cookie"]);var Cl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Dl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(la(Bl)),El=!1;
function Fl(a,b){b=void 0===b?{}:b;var c=sl(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in Cl){var f=P(Cl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&bc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===P("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!bc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=ol(tl()));return b}
function Gl(a){var b=window.location.search,c=bc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&sl(a)&&(c=document.location.hostname);var d=$b(ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=pl(b),f={};db(Dl,function(g){e[g]&&(f[g]=e[g])});
return rl(a,f||{},!1)}
function Hl(a,b){var c=b.format||"JSON";a=Il(a,b);var d=Jl(a,b),e=!1,f=Kl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=zl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Ll(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Al(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Il(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=rl(a,b||{},!0);return a}
function Jl(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=pl(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):fc(e));f=e||f&&!nb(f);!El&&f&&"POST"!=b.method&&(El=!0,hl(Error("AJAX request with postData should use POST")));return e}
function Ll(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,il(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ml(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Nl(g)})}d&&Ol(e);
return e}
function Ol(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else Ol(a[b])}}
function Ml(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Nl(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Pl(a,b){b.method="POST";b.postParams||(b.postParams={});return Hl(a,b)}
function Kl(a,b,c,d,e,f,g,h){function k(){4===(l&&"readyState"in l?l.readyState:0)&&b&&gl(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=yl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Gl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Fl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Ql=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Sl={Ta:[],Qa:[{callback:Rl,weight:500}]};function Rl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Tl(){this.Qa=[];this.Ta=[]}
var Ul;function Vl(){if(!Ul){var a=Ul=new Tl;a.Ta.length=0;a.Qa.length=0;Sl.Ta&&a.Ta.push.apply(a.Ta,Sl.Ta);Sl.Qa&&a.Qa.push.apply(a.Qa,Sl.Qa)}return Ul}
;var Wl=new M;function Xl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Yl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Yl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Yl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Yl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Zl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=$l(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Xl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?$l(f+".ve",g,h,k):0;d+=f;d+=$l(e,a[e],b,c);if(500<d)break}}else c[b]=am(a),d+=c[b].length;else c[b]=am(a),d+=c[b].length;return d}
function $l(a,b,c,d){c+="."+a;a=am(b);d[c]=a;return c.length+a.length}
function am(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function bm(){this.bf=!0}
function cm(){bm.h||(bm.h=new bm);return bm.h}
function dm(a,b){a={};var c=Hg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in bl||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in bl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return a}
;var em={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function fm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function gm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function hm(a,b,c,d,e){Dg.set(""+a,b,{fc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function im(a){return Dg.get(""+a,void 0)}
function jm(a,b,c){Dg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function km(){if(!Dg.isEnabled())return!1;if(Dg.h.cookie)return!0;Dg.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==Dg.get("TESTCOOKIESENABLED"))return!1;Dg.remove("TESTCOOKIESENABLED");return!0}
;var lm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",lm);function mm(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=im(this.h);a&&this.parse(a)}
var nm;function om(){nm||(nm=new mm);return nm}
m=mm.prototype;m.get=function(a,b){pm(a);qm(a);a=void 0!==lm[a]?lm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){pm(a);qm(a);if(null==b)throw Error("ExpectedNotNull");lm[a]=b.toString()};
function rm(a){return!!((sm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){pm(a);qm(a);delete lm[a]};
m.clear=function(){for(var a in lm)delete lm[a]};
function qm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function pm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function sm(a){a=void 0!==lm[a]?lm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(lm[d]=c.toString())}};var tm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},um={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function wm(){var a=C.navigator;return a?a.connection:void 0}
function xm(){var a=wm();if(a){var b=tm[a.type||"unknown"]||"CONN_UNKNOWN";a=tm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function ym(){var a=wm();if(null!=a&&a.effectiveType)return um.hasOwnProperty(a.effectiveType)?um[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(la(b))}
w(U,Error);function zm(){try{return Am(),!0}catch(a){return!1}}
function Am(a){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new U("Datasync ID not set",void 0===a?"unknown":a);}
;function Bm(){}
function Cm(a,b){return Ei.ab(a,0,b)}
Bm.prototype.qa=function(a,b){return this.ab(a,1,b)};
Bm.prototype.Ab=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Dm=T("web_emulated_idle_callback_delay",300),Em=1E3/60-3,Fm=[8,5,4,3,2,1,0];
function Gm(a){a=void 0===a?{}:a;J.call(this);this.i=[];this.j={};this.Z=this.h=0;this.U=this.m=!1;this.K=[];this.T=this.ea=!1;for(var b=v(Fm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.qc=a.timeout||1;this.D=Em;this.A=0;this.ha=this.De.bind(this);this.pc=this.ef.bind(this);this.Fa=this.Qd.bind(this);this.Za=this.me.bind(this);this.Qb=this.Ge.bind(this);this.va=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.fa=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ha)}
w(Gm,J);m=Gm.prototype;m.Ab=function(a){var b=Wa();Hm(this,a);a=Wa()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.Z;if(10===b)return this.Ab(a),this.Z;var d=this.Z;this.j[d]=a;this.m&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.U||this.m||(0!==this.h&&Im(this)!==this.A&&this.stop(),this.start()));return d};
m.ra=function(a){delete this.j[a]};
function Jm(a){a.K.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Km(a){return!a.isHidden()&&a.fa}
function Im(a){if(a.i[8].length){if(a.T)return 4;if(Km(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Km(a)?3:2:1;return 0}
m.Ib=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Hm(a,b){try{b()}catch(c){a.Ib(c)}}
function Lm(a){for(var b=v(Fm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.me=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Mm(this,b);this.ea=!1};
m.ef=function(){Mm(this)};
m.Qd=function(){Nm(this)};
m.Ge=function(a){this.T=!0;var b=Im(this);4===b&&b!==this.A&&(this.stop(),this.start());Mm(this,void 0,a);this.T=!1};
m.De=function(){this.isHidden()||Nm(this);this.h&&(this.stop(),this.start())};
function Nm(a){a.stop();a.m=!0;for(var b=Wa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Hm(a,e)}Om(a);a.m=!1;Lm(a)&&a.start();b=Wa()-b;a.D-=b}
function Om(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function Mm(a,b,c){a.T&&4===a.A&&a.h||a.stop();a.m=!0;b=Wa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ib(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Hm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Wa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Hm(a,c)}while(c&&Wa()<b)}a.m=!1;Om(a);a.D=Em;Lm(a)&&a.start()}
m.start=function(){this.U=!1;if(0===this.h)switch(this.A=Im(this),this.A){case 1:var a=this.Za;this.h=this.va?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Dm);break;case 2:this.h=window.setTimeout(this.pc,this.qc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Fa,0)}};
m.pause=function(){this.stop();this.U=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.va?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Jm(this);this.stop();this.fa&&document.removeEventListener("visibilitychange",this.ha);J.prototype.S.call(this)};var Pm=E("yt.scheduler.instance.timerIdMap_")||{},Qm=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),Rm=0,Sm=0;function Tm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.aa())a=new Gm(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Um(){Vm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(qc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Vm(){Jm(Tm());for(var a in Pm)Pm.hasOwnProperty(a)&&delete Pm[Number(a)]}
function Wm(a,b,c){if(!c)return c=void 0===c,-Tm().ab(a,b,c);var d=window.setTimeout(function(){var e=Tm().ab(a,b);Pm[d]=e},c);
return d}
function Xm(a){Tm().Ab(a)}
function Ym(a){var b=Tm();if(0>a)b.ra(-a);else{var c=Pm[a];c?(b.ra(c),delete Pm[a]):window.clearTimeout(a)}}
function Zm(){$m()}
function $m(){window.clearTimeout(Rm);Tm().start()}
function an(){Tm().pause();window.clearTimeout(Rm);Rm=window.setTimeout(Zm,Qm)}
function bn(){window.clearTimeout(Sm);Sm=window.setTimeout(function(){cn(0)},Qm)}
function cn(a){bn();var b=Tm();b.l=a;b.start()}
function dn(a){bn();var b=Tm();b.l>a&&(b.l=a,b.start())}
function en(){window.clearTimeout(Sm);var a=Tm();a.l=0;a.start()}
function fn(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Um),D("yt.scheduler.instance.addJob",Wm),D("yt.scheduler.instance.addImmediateJob",Xm),D("yt.scheduler.instance.cancelJob",Ym),D("yt.scheduler.instance.cancelAllJobs",Vm),D("yt.scheduler.instance.start",$m),D("yt.scheduler.instance.pause",an),D("yt.scheduler.instance.setPriorityThreshold",cn),D("yt.scheduler.instance.enablePriorityThreshold",dn),D("yt.scheduler.instance.clearPriorityThreshold",en),D("yt.scheduler.initialized",
!0))}
;function gn(){Bm.apply(this,arguments)}
w(gn,Bm);function hn(){gn.h||(gn.h=new gn);return gn.h}
gn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Al(a,c||0)};
gn.prototype.ra=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
gn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
gn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Ei=hn();R("web_scheduler_auto_init")&&fn();function jn(a){var b=new kj;(b=b.isAvailable()?a?new qj(b,a):b:null)||(a=new lj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new fj(a):null;this.i=document.domain||window.location.hostname}
jn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new ph).serialize(b))}catch(f){return}else e=escape(b);hm(a,e,c,this.i)};
jn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=im(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
jn.prototype.remove=function(a){this.h&&this.h.remove(a);jm(a,"/",this.i)};var kn=function(){var a;return function(){a||(a=new jn("ytidb"));return a}}();
function ln(){var a;return null==(a=kn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var mn=[],nn,on=!1;function pn(){var a={};for(nn=new qn(void 0===a.handleError?rn:a.handleError,void 0===a.logEvent?sn:a.logEvent);0<mn.length;)switch(a=mn.shift(),a.type){case "ERROR":nn.Ib(a.payload);break;case "EVENT":nn.logEvent(a.eventType,a.payload)}}
function tn(a){on||(nn?nn.Ib(a):(mn.push({type:"ERROR",payload:a}),10<mn.length&&mn.shift()))}
function un(a,b){on||(nn?nn.logEvent(a,b):(mn.push({type:"EVENT",eventType:a,payload:b}),10<mn.length&&mn.shift()))}
;function vn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function wn(a){return a.substr(0,a.indexOf(":"))||a}
;var xn=ue||ve;function yn(a){var b=Mb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var zn={},An=(zn.AUTH_INVALID="No user identifier specified.",zn.EXPLICIT_ABORT="Transaction was explicitly aborted.",zn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",zn.MISSING_INDEX="Index not created.",zn.MISSING_OBJECT_STORES="Object stores not created.",zn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",zn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",zn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
zn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",zn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",zn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",zn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",zn),Bn={},Cn=(Bn.AUTH_INVALID="ERROR",Bn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Bn.EXPLICIT_ABORT="IGNORED",Bn.IDB_NOT_SUPPORTED="ERROR",Bn.MISSING_INDEX=
"WARNING",Bn.MISSING_OBJECT_STORES="ERROR",Bn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Bn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Bn.QUOTA_EXCEEDED="WARNING",Bn.QUOTA_MAYBE_EXCEEDED="WARNING",Bn.UNKNOWN_ABORT="WARNING",Bn.INCOMPATIBLE_DB_VERSION="WARNING",Bn),Dn={},En=(Dn.AUTH_INVALID=!1,Dn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Dn.EXPLICIT_ABORT=!1,Dn.IDB_NOT_SUPPORTED=!1,Dn.MISSING_INDEX=!1,Dn.MISSING_OBJECT_STORES=!1,Dn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Dn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Dn.QUOTA_EXCEEDED=!1,Dn.QUOTA_MAYBE_EXCEEDED=!0,Dn.UNKNOWN_ABORT=!0,Dn.INCOMPATIBLE_DB_VERSION=!1,Dn);function Fn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?An[a]:c;d=void 0===d?Cn[a]:d;e=void 0===e?En[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Fn.prototype)}
w(Fn,U);function Gn(a,b){Fn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},An.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Gn.prototype)}
w(Gn,Fn);function Hn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Hn.prototype)}
w(Hn,Error);var In=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Jn(a,b,c,d){b=wn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Fn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Fn("QUOTA_EXCEEDED",a);if(we&&"UnknownError"===e.name)return new Fn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Hn)return new Fn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&In.some(function(f){return e.message.includes(f)}))return new Fn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Fn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",td:e.name})];e.level="WARNING";return e}
function Kn(a,b,c){var d=ln();return new Fn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ln(a){if(!a)throw Error();throw a;}
function Mn(a){return a}
function Nn(a){this.h=a}
function On(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
On.all=function(a){return new On(new Nn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)On.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
On.resolve=function(a){return new On(new Nn(function(b,c){a instanceof On?a.then(b,c):b(a)}))};
On.reject=function(a){return new On(new Nn(function(b,c){c(a)}))};
On.prototype.then=function(a,b){var c=this,d=null!=a?a:Mn,e=null!=b?b:Ln;return new On(new Nn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Pn(c,c,d,f,g)}),c.i.push(function(){Qn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Pn(c,c,d,f,g):"REJECTED"===c.state.status&&Qn(c,c,e,f,g)}))};
On.prototype.catch=function(a){return this.then(void 0,a)};
function Pn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof On?Rn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof On?Rn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof On?Rn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Sn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Tn(a){return new Promise(function(b,c){Sn(a,b,c)})}
function Un(a){return new On(new Nn(function(b,c){Sn(a,b,c)}))}
;function Vn(a,b){return new On(new Nn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Wn=window,V=Wn.ytcsi&&Wn.ytcsi.now?Wn.ytcsi.now:Wn.performance&&Wn.performance.timing&&Wn.performance.now&&Wn.performance.timing.navigationStart?function(){return Wn.performance.timing.navigationStart+Wn.performance.now()}:function(){return(new Date).getTime()};function Xn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
m=Xn.prototype;m.add=function(a,b,c){return Yn(this,[a],{mode:"readwrite",ja:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Yn(this,[a],{mode:"readwrite",ja:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Yn(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).count(b)})};
function Zn(a,b,c){a=a.h.createObjectStore(b,c);return new $n(a)}
m.delete=function(a,b){return Yn(this,[a],{mode:"readwrite",ja:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Yn(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).get(b)})};
function ao(a,b,c){return Yn(a,[b],{mode:"readwrite",ja:!0},function(d){d=d.objectStore(b);return Un(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Yn(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,x,y;return A(function(z){switch(z.h){case 1:var G={mode:"readonly",ja:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ja?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(V());Aa(z,5);l=a.h.transaction(b,e.mode);G=z.yield;var K=new bo(l);K=co(K,d);return G.call(z,K,7);case 7:return n=z.i,p=Math.round(V()),eo(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Ba(z);r=Math.round(V());x=Jn(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof Fn&&!x.h)||g>=f)eo(a,k,r,g,x,b.join(),e),h=x;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function eo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Fn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&un("QUOTA_EXCEEDED",{dbName:wn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Fn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),un("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),fo(a,!1,d,f,b,g.tag),tn(e)):fo(a,!0,d,f,b,g.tag)}
function fo(a,b,c,d,e,f){un("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function $n(a){this.h=a}
m=$n.prototype;m.add=function(a,b){return Un(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Un(this.h.clear()).then(function(){})};
function go(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Un(this.h.count(a))};
function ho(a,b){return io(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?ho(this,a):Un(this.h.delete(a))};
m.get=function(a){return Un(this.h.get(a))};
m.index=function(a){try{return new jo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Hn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function io(a,b,c){a=a.h.openCursor(b.query,b.direction);return ko(a).then(function(d){return Vn(d,c)})}
function bo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Fn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function co(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
bo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Fn("EXPLICIT_ABORT");};
bo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new $n(a),this.i.set(a,b));return b};
function jo(a){this.h=a}
m=jo.prototype;m.count=function(a){return Un(this.h.count(a))};
m.delete=function(a){return lo(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Un(this.h.get(a))};
m.getKey=function(a){return Un(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function lo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ko(a).then(function(d){return Vn(d,c)})}
function mo(a,b){this.request=a;this.cursor=b}
function ko(a){return Un(a).then(function(b){return b?new mo(a,b):null})}
m=mo.prototype;m.advance=function(a){this.cursor.advance(a);return ko(this.request)};
m.continue=function(a){this.cursor.continue(a);return ko(this.request)};
m.delete=function(){return Un(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Un(this.cursor.update(a))};function no(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Xn(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Sd,k=c.blocking,l=c.cf,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&un("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:wn(a)});var x=f(),y=new bo(g.transaction);
n&&n(x,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){un("IDB_UNEXPECTEDLY_CLOSED",{dbName:wn(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function oo(a,b,c){c=void 0===c?{}:c;return no(a,b,c)}
function po(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Sd)&&c.addEventListener("blocked",function(){e()}),g.yield(Tn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),Jn(f,a,"",-1);})}
;function qo(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.l=0}
qo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return oo(a,b,c)};
qo.prototype.delete=function(a){a=void 0===a?{}:a;return po(this.name,a)};
function ro(a,b){return new Fn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function so(a,b){if(!b)throw Kn("openWithToken",wn(a.name));return a.open()}
qo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=y.i,G=c.options,K=[],I=v(Object.keys(G.xb)),S=I.next();!S.done;S=I.next()){S=S.value;var H=G.xb[S],fa=void 0===H.Je?Number.MAX_VALUE:H.Je;!(z.h.version>=H.Bb)||z.h.version>=fa||z.h.objectStoreNames.contains(S)||K.push(S)}k=K;if(0===k.length){y.B(5);break}l=Object.keys(c.options.xb);n=h.objectStoreNames();
if(c.v<T("ytidb_reopen_db_retries",0))return c.v++,h.close(),tn(new Fn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<T("ytidb_remake_db_retries",1))){y.B(6);break}c.l++;return y.yield(c.delete(),7);case 7:return tn(new Fn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Gn(n,l);case 5:return y.return(h);case 2:p=Ba(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.B(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,ro(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Jn(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw ro(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,cf:b,upgrade:this.options.upgrade};return this.h=d=a()};var to=new qo("YtIdbMeta",{xb:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&Zn(a,"databases",{keyPath:"actualName"})}});
function uo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(so(to,b),2);c=d.i;return d.return(Yn(c,["databases"],{ja:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Un(f.h.put(a,void 0)).then(function(){})})}))})}
function vo(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(so(to,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function wo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(so(to,b),2)):3!=e.h?(d=e.i,e.yield(Yn(d,["databases"],{ja:!0,mode:"readonly"},function(f){c.length=0;return io(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function xo(a){return wo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function yo(a,b,c){return wo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function zo(a){var b,c;return A(function(d){if(1==d.h)return b=Am("YtIdbMeta hasAnyMeta other"),d.yield(wo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Ao,Bo=new function(){}(new function(){});
function Co(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=ln();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=xn)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Ec)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(uo(d,Bo),4);case 4:return e.yield(vo("yt-idb-test-do-not-use",Bo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Do(){if(void 0!==Ao)return Ao;on=!0;return Ao=Co().then(function(a){on=!1;var b;if(null!=(b=kn())&&b.h){var c;b={hasSucceededOnce:(null==(c=ln())?void 0:c.hasSucceededOnce)||a};var d;null==(d=kn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Eo(){return E("ytglobal.idbToken_")||void 0}
function Fo(){var a=Eo();return a?Promise.resolve(a):Do().then(function(b){(b=b?Bo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Go=0;function Ho(a,b){Go||(Go=Ei.qa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Fo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(yo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(po(f.actualName),7);case 7:return h.yield(vo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),tn(g),d=!1;case 4:Ei.ra(Go),Go=0,d&&Ho(a,b),h.h=0}})}))}
function Io(){var a;return A(function(b){return 1==b.h?b.yield(Fo(),2):(a=b.i)?b.return(zo(a)):b.return(!1)})}
new Uh;function Jo(a){if(!zm())throw a=new Fn("AUTH_INVALID",{dbName:a}),tn(a),a;var b=Am();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ko(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Fo(),2);case 2:g=n.i;if(!g)throw h=Kn("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),tn(h),h;vn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Jo(a);Aa(n,3);return n.yield(uo(k,g),5);case 5:return n.yield(oo(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(vo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Lo(a,b,c){c=void 0===c?{}:c;return Ko(a,b,!1,c)}
function Mo(a,b,c){c=void 0===c?{}:c;return Ko(a,b,!0,c)}
function No(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Fo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();vn(a);d=Jo(a);return e.yield(po(d.actualName,b),3)}return e.yield(vo(d.actualName,c),0)})}
function Oo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(po(d.actualName,b),2):e.yield(vo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Po(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Fo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();vn("LogsDatabaseV2");return d.yield(xo(b),3)}c=d.i;return d.yield(Oo(c,a,b),0)})}
function Qo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Fo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();vn(a);return d.yield(po(a,b),3)}return d.yield(vo(a,c),0)})}
;function Ro(a,b){qo.call(this,a,b);this.options=b;vn(a)}
w(Ro,qo);function So(a,b){var c;return function(){c||(c=new Ro(a,b));return c}}
Ro.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?Mo:Lo)(a,b,Object.assign({},c))};
Ro.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?Qo:No)(this.name,a)};
function To(a,b){return So(a,b)}
;var Uo={},Vo=To("ytGcfConfig",{xb:(Uo.coldConfigStore={Bb:1},Uo.hotConfigStore={Bb:1},Uo),nc:!1,upgrade:function(a,b){b(1)&&(go(Zn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),go(Zn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Wo(a){return so(Vo(),a)}
function Xo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Wo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(ao(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Yo(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Wo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(ao(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Zo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Wo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Yn(b,["coldConfigStore"],{mode:"readwrite",ja:!0},function(e){return lo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function $o(a){var b,c;return A(function(d){return 1==d.h?d.yield(Wo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Yn(b,["hotConfigStore"],{mode:"readwrite",ja:!0},function(e){return lo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ap(){J.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(la(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(ap,J);ap.prototype.S=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;J.prototype.S.call(this)};function bp(){this.h=0;this.i=new ap}
function cp(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:P("RAW_HOT_CONFIG_GROUP")}
function dp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Eo();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield($o(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Xo(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function ep(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!R("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Eo())?c?h.B(4):h.yield(Zo(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(Yo(c,b,g,d),0)})}
function fp(){if(!bp.h){var a=new bp;bp.h=a}a=bp.h;var b=V()-a.h;if(!(0!==a.h&&b<T("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
bp.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function gp(){return"INNERTUBE_API_KEY"in bl&&"INNERTUBE_API_VERSION"in bl}
function hp(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),ne:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wf:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),pe:P("INNERTUBE_CONTEXT_HL"),oe:P("INNERTUBE_CONTEXT_GL"),qe:P("INNERTUBE_HOST_OVERRIDE")||"",se:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),re:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ip(a){var b={client:{hl:a.pe,gl:a.oe,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.ne}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=wl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=gm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=xm())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=ym())&&
b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=fp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(pl(P("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function jp(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Qf:(a=dm(cm()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var kp="undefined"!==typeof TextEncoder?new TextEncoder:null,lp=kp?function(a){return kp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function mp(a,b){this.version=a;this.args=b}
mp.prototype.serialize=function(){return{version:this.version,args:this.args}};function np(a,b){this.topic=a;this.h=b}
np.prototype.toString=function(){return this.topic};var op=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.zb;M.prototype.publish=M.prototype.Ya;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",op);var pp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",pp);var qp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",qp);var rp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",rp);
D("ytPubsub2Pubsub2SkipSubKey",null);function sp(a,b){var c=tp();c&&c.publish.call(c,a.toString(),a,b)}
function up(a){var b=vp,c=tp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(pp[d])try{if(f&&b instanceof np&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var x=Array(r);for(k=0;k<r;k++)x[k]=t[k];var y=x}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){hl(z)}},rp[b.toString()]?E("yt.scheduler.instance")?Ei.qa(g):Al(g,0):g())});
pp[d]=!0;qp[b.toString()]||(qp[b.toString()]=[]);qp[b.toString()].push(d);return d}
function wp(){var a=xp,b=up(function(c){a.apply(void 0,arguments);yp(b)});
return b}
function yp(a){var b=tp();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete pp[c]}))}
function tp(){return E("ytPubsub2Pubsub2Instance")}
;function zp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&sp("meta_logging_csi_event",{timerName:a,ng:b})}
;var Ap=void 0,Bp=void 0;function Cp(){Bp||(Bp=Ek(P("WORKER_SERIALIZATION_URL")));return Bp||void 0}
function Dp(){var a=Cp();Ap||void 0===a||(Ap=new Worker(Cb(a),void 0));return Ap}
;var Ep=T("max_body_size_to_compress",5E5),Fp=T("min_body_size_to_compress",500),Gp=!0,Hp=0,Ip=0,Jp=T("compression_performance_threshold_lr",250),Kp=T("slow_compressions_before_abandon_count",4),Lp=!1,Mp=new Map,Np=1,Op=!0;function Pp(){if("function"===typeof Worker&&Cp()&&!Lp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Mp.get(c.key);d&&(Qp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Mp.delete(c.key))}},b=Dp();
b&&(b.addEventListener("message",a),b.onerror=function(){Mp.clear()},Lp=!0)}}
function Rp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Gp)try{var g=Sp(b);if(null!=g&&(g>Ep||g<Fp))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Op||!R("initial_gzip_use_main_thread"))){Lp||Pp();var h=Dp();if(h&&!e){Mp.set(Np,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Np});Np++;return}}var k=Dk(lp(b));Qp(k,f,a,c,d)}}catch(l){il(l),d(a,c)}else d(a,c)}
function Qp(a,b,c,d,e){Op=!1;var f=V();b.ticks.gelc=f;Ip++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Jp&&(Hp++,R("abandon_compression_after_N_slow_zips")?Ip===T("compression_disable_point")&&Hp>Kp&&(Gp=!1):Gp=!1);Tp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Up(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Gp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Sp(g);if(null!=h&&(h>Ep||h<Fp))return a;c=b?{level:1}:void 0;f=Dk(lp(g),c);var k=V();e.ticks.gelc=k;if(b){Ip++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Jp)if(Hp++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Hp/Ip;var l=Kp/T("compression_disable_point");0<Ip&&0===Ip%T("compression_disable_point")&&b>=l&&(Gp=!1)}else Gp=!1;Tp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return il(n),a}}else return a}
function Sp(a){try{return(new Blob(a.split(""))).size}catch(b){return il(b),null}}
function Tp(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||zp("gel_compression",a,{sampleRate:.1})}
;function Vp(a){a=Object.assign({},a);delete a.Authorization;var b=Hg();if(b){var c=new Ki;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=ze(c.digest(),3)}return a}
;var Wp;function Xp(){Wp||(Wp=new jn("yt.innertube"));return Wp}
function Yp(a,b,c,d){if(d)return null;d=Xp().get("nextId",!0)||1;var e=Xp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Vp(c),requestTime:Math.round(V())};Xp().set("nextId",d+1,86400,!0);Xp().set("requests",e,86400,!0);return d}
function Zp(a){var b=Xp().get("requests",!0)||{};delete b[a];Xp().set("requests",b,86400,!0)}
function $p(a){var b=Xp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=Vp(jp(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),aq(a,d.method,e,{}));delete b[c]}}Xp().set("requests",b,86400,!0)}}
;function bq(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Eb=!1;var b;this.Gd=null!=(b=a.Gd)?b:100;var c;this.Ad=null!=(c=a.Ad)?c:1;var d;this.yd=null!=(d=a.yd)?d:2592E6;var e;this.wd=null!=(e=a.wd)?e:12E4;var f;this.zd=null!=(f=a.zd)?f:5E3;var g;this.V=null!=(g=a.V)?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=null!=(h=a.Xb)?h:.1;var k;this.jc=null!=(k=a.jc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Eb&&(this.Eb=a.Eb);a.Ub&&(this.Ub=a.Ub);this.W=a.W;this.Da=a.Da;this.da=a.da;this.ba=a.ba;this.sendFn=a.sendFn;
this.Oc=a.Oc;this.Lc=a.Lc;cq(this)&&(!this.W||this.W("networkless_logging"))&&dq(this)}
function dq(a){cq(a)&&!a.Eb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.da.Ud(a.V),eq(a),a.ba.xa()&&a.Ob(),a.ba.listen(a.Oc,a.Ob.bind(a)),a.ba.listen(a.Lc,a.Zc.bind(a)))}
m=bq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(cq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.V).then(function(e){d.id=e;c.ba.xa()&&fq(c,d)}).catch(function(e){fq(c,d);
gq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(cq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.ba.xa()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.da.set(e,d.V).catch(function(l){gq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
gq(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(cq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.nb(d.id,c.V):e=!0;c.ba.gb&&c.W&&c.W("vss_network_hint")&&c.ba.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.V).then(function(g){d.id=g;e&&c.da.nb(d.id,c.V)}).catch(function(g){gq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Ob=function(){var a=this;if(!cq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.qa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.da.jd("NEW",a.V),2);if(3!=c.h)return b=c.i,b?c.yield(fq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.Gd))};
m.Zc=function(){this.Da.ra(this.i);this.i=0};
function fq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!cq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.we(b.id,a.V),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(hq(a,b,a.yd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.nb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=iq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.nb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function iq(a,b){if(!cq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=jq(f);(h=kq(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){n.B(2);break}if(!a.ba.mc){n.B(3);break}return n.yield(a.ba.mc(),3);case 3:if(a.ba.xa()){n.B(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Qc(b.id,a.V,!1),6);case 6:return n.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.Ad?n.yield(a.da.Qc(b.id,a.V,!0,h?!1:void 0),12):n.yield(a.da.nb(b.id,a.V),8);case 12:a.Da.qa(function(){a.ba.xa()&&a.Ob()},a.zd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.nb(b.id,a.V),2);a.ba.gb&&a.W&&a.W("vss_network_hint")&&a.ba.gb(!0);d(e,f);h.h=0})};
return b}
function hq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function eq(a){if(!cq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.jd("QUEUED",a.V).then(function(b){b&&!hq(a,b,a.wd)?a.Da.qa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Qc(b.id,a.V),2);eq(a);c.h=0})}):a.ba.xa()&&a.Ob()})}
function gq(a,b){a.Md&&!a.ba.xa()?a.Md(b):a.handleError(b)}
function cq(a){return!!a.V||a.Ub}
function jq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function kq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var lq;
function mq(){if(lq)return lq();var a={};lq=To("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Bb:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&Zn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),go(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return lq()}
;function nq(a){return so(mq(),a)}
function oq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(nq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(ao(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();pq(c);return g.return(f)})}
function qq(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(nq(b),2);if(3!=l.h)return d=l.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Yn(d,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(n){return lo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=V();pq(c);return l.return(k)})}
function rq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(nq(b),2);c=d.i;return d.return(Yn(c,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Un(f.h.put(g,void 0)).then(function(){return g})})}))})}
function sq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(nq(b),2);e=f.i;return f.return(Yn(e,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Un(h.h.put(k,void 0)).then(function(){return k})):On.resolve(void 0)})}))})}
function tq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(nq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function uq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(nq(a),2);b=d.i;c=V()-2592E6;return d.yield(Yn(b,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){return io(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function vq(){A(function(a){return a.yield(Po(),0)})}
function pq(a){R("nwl_csi_killswitch")||zp("networkless_performance",a,{sampleRate:1})}
;var wq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var xq={},yq=To("ServiceWorkerLogsDatabase",{xb:(xq.SWHealthLog={Bb:1},xq),nc:!0,upgrade:function(a,b){b(1)&&go(Zn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function zq(a){return so(yq(),a)}
function Aq(a){var b,c;A(function(d){if(1==d.h)return d.yield(zq(a),2);b=d.i;c=V()-2592E6;return d.yield(Yn(b,["SWHealthLog"],{mode:"readwrite",ja:!0},function(e){return io(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Bq(a){var b;return A(function(c){if(1==c.h)return c.yield(zq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Cq={},Dq=0;function Eq(a){var b=new Image,c=""+Dq++;Cq[c]=b;b.onload=b.onerror=function(){delete Cq[c]};
b.src=a}
;function Fq(){this.h=new Map;this.i=!1}
function Gq(){if(!Fq.h){var a=E("yt.networkRequestMonitor.instance")||new Fq;D("yt.networkRequestMonitor.instance",a);Fq.h=a}return Fq.h}
Fq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Fq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Fq.prototype.removeParams=function(a){return a.split("?")[0]};
Fq.prototype.removeParams=Fq.prototype.removeParams;Fq.prototype.isEndpointCFR=Fq.prototype.isEndpointCFR;Fq.prototype.requestComplete=Fq.prototype.requestComplete;Fq.getInstance=Gq;var Hq;function Iq(){Hq||(Hq=new jn("yt.offline"));return Hq}
function Jq(a){if(R("offline_error_handling")){var b=Iq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Iq().set("errors",b,2592E3,!0)}}
;function Kq(){pd.call(this);var a=this;this.j=!1;this.i=Di();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Iq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;hl(d)}Iq().set("errors",{},2592E3,!0)}}})}
w(Kq,pd);function Lq(){if(!Kq.h){var a=E("yt.networkStatusManager.instance")||new Kq;D("yt.networkStatusManager.instance",a);Kq.h=a}return Kq.h}
m=Kq.prototype;m.xa=function(){return this.i.xa()};
m.gb=function(a){this.i.i=a};
m.je=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Zd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.mc=function(a){a=Bi(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Gq().requestComplete("generate_204",b)});
return a};
Kq.prototype.sendNetworkCheckRequest=Kq.prototype.mc;Kq.prototype.listen=Kq.prototype.listen;Kq.prototype.enableErrorFlushing=Kq.prototype.Zd;Kq.prototype.getWindowStatus=Kq.prototype.je;Kq.prototype.networkStatusHint=Kq.prototype.gb;Kq.prototype.isNetworkAvailable=Kq.prototype.xa;Kq.getInstance=Lq;function Mq(a){a=void 0===a?{}:a;pd.call(this);var b=this;this.i=this.m=0;this.j=Lq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Nq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Nq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){qd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){qd(b,"publicytnetworkstatus-offline")})))}
w(Mq,pd);Mq.prototype.xa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Mq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Mq.prototype.mc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Gq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.xa())})):c?d.return(c(a)):d.return(!0)})};
function Nq(a,b){a.rateLimit?a.i?(Ei.ra(a.m),a.m=Ei.qa(function(){a.l!==b&&(qd(a,b),a.l=b,a.i=V())},a.rateLimit-(V()-a.i))):(qd(a,b),a.l=b,a.i=V()):qd(a,b)}
;var Oq;function Pq(){var a=bq.call;Oq||(Oq=new Mq({ag:!0,Uf:!0}));a.call(bq,this,{da:{Ud:uq,nb:tq,jd:qq,we:rq,Qc:sq,set:oq},ba:Oq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;il(new U(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else hl(b)},
pb:il,sendFn:Qq,now:V,Md:Jq,Da:hn(),Oc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,jc:T("potential_esf_error_limit",10),W:R,Eb:!(zm()&&Rq())});this.j=new Uh;R("networkless_immediately_drop_all_requests")&&vq();Qo("LogsDatabaseV2")}
w(Pq,bq);function Sq(){var a=E("yt.networklessRequestController.instance");a||(a=new Pq,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Fo().then(function(b){a.V=b;dq(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.V&&Aq(a.V);R("networkless_immediately_drop_sw_health_store")&&Tq(a)}));
return a}
Pq.prototype.writeThenSend=function(a,b){b||(b={});b=Uq(a,b);zm()||(this.h=!1);bq.prototype.writeThenSend.call(this,a,b)};
Pq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Uq(a,b);zm()||(this.h=!1);bq.prototype.sendThenWrite.call(this,a,b,c)};
Pq.prototype.sendAndWrite=function(a,b){b||(b={});b=Uq(a,b);zm()||(this.h=!1);bq.prototype.sendAndWrite.call(this,a,b)};
Pq.prototype.awaitInitialization=function(){return this.j.promise};
function Tq(a){var b;A(function(c){if(!a.V)throw b=Kn("clearSWHealthLogsDb"),b;return c.return(Bq(a.V).catch(function(d){a.handleError(d)}))})}
function Qq(a,b,c,d){d=void 0===d?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Vq(a,b);if(R("use_request_time_ms_header"))b.headers&&sl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Kl(a,void 0,"POST",f);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Kl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new $a({url:a});if(k.j&&k.i||k.l){var l=$b(ac(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(jc),t=ic(a,0,"ri",p);if(0>t)var r=null;else{var x=a.indexOf("&",t);if(0>x||x>p)x=p;r=decodeURIComponent(a.slice(t+3,-1!==x?x:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(G){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(G){}z=!1}c=z?!0:!1}else c=
!1;c||Eq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Rp(a,b.postBody,b,Hl,d)):Rp(a,JSON.stringify(b.postParams),b,Pl,d):Hl(a,b)}
function Uq(a,b){R("use_event_time_ms_header")&&sl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function Vq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Gq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Gq().requestComplete(a,!0);d(e,f)}}
function Rq(){return"www.youtube-nocookie.com"!==bc(document.location.toString())}
;var Wq=!1,Xq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Wq};D("ytNetworklessLoggingInitializationOptions",Xq);function Yq(){var a;A(function(b){if(1==b.h)return b.yield(Fo(),2);a=b.i;if(!a||!zm()&&!R("nwl_init_require_datasync_id_killswitch")||!Rq())return b.B(0);Wq=!0;Xq.isNwlInitialized=Wq;return b.yield(Sq().awaitInitialization(),0)})}
;function Zq(a){var b=this;this.config_=null;a?this.config_=a:gp()&&(this.config_=hp());Cm(function(){$p(b)},5E3)}
Zq.prototype.isReady=function(){!this.config_&&gp()&&(this.config_=hp());return!!this.config_};
function aq(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Yp(b,c,l,k)),y)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(S,H){Zp(y);z(S,H)};
c.onFetchSuccess=function(S,H){Zp(y);G(S,H)}}try{if(x&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Sq().writeThenSend(r,g):Sq().sendAndWrite(r,g);
else if(d.compress){var K=!d.networklessOptions.writeThenSend;if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));Rp(r,I,g,Hl,K)}else Rp(r,JSON.stringify(g.postParams),g,Pl,K)}else R("web_all_payloads_via_jspb")?Hl(r,g):Pl(r,g)}catch(S){if("InvalidAccessError"===S.name)y&&(Zp(y),y=0),il(Error("An extension is blocking network request."));else throw S;}y&&Cm(function(){$p(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&il(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);hl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.qe)&&(h=f);var k=a.config_.se||!1,l=jp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.re&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=rl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Xq.isNwlInitialized:Wq)?Do().then(function(x){e(x)}):e(!1)}
;var $q=0,ar=Gc?"webkit":Fc?"moz":Dc?"ms":Cc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++$q});var br={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function cr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in br||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function dr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
cr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
cr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
cr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",mb);var er=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",er);
function fr(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var gr=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function hr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=fr(a,b,c,d);if(e)return e;e=++er.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new cr(h);if(!zd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new cr(h);
h.currentTarget=a;return c.call(a,h)};
g=gl(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),gr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d];return e}
function ir(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?gr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
;function jr(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.T=hr(window,"mousemove",Ua(this.U,this));a=Ua(this.K,this);"function"===typeof a&&(a=gl(a));this.Z=window.setInterval(a,25)}
Xa(jr,J);jr.prototype.U=function(a){void 0===a.h&&dr(a);var b=a.h;void 0===a.i&&dr(a);this.h=new vd(b,a.i)};
jr.prototype.K=function(){if(this.h){var a=V();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
jr.prototype.S=function(){window.clearInterval(this.Z);ir(this.T)};var kr={};
function lr(a){var b=void 0===a?{}:a;a=void 0===b.Fe?!1:b.Fe;b=void 0===b.ae?!0:b.ae;if(null==E("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&mr();hr(document,"keydown",mr);hr(document,"keyup",mr);hr(document,"mousedown",mr);hr(document,"mouseup",mr);a?hr(window,"touchmove",function(){nr("touchmove",200)},{passive:!0}):(hr(window,"resize",function(){nr("resize",200)}),b&&hr(window,"scroll",function(){nr("scroll",200)}));
new jr(function(){nr("mouse",100)});
hr(document,"touchstart",mr,{passive:!0});hr(document,"touchend",mr,{passive:!0})}}
function nr(a,b){kr[a]||(kr[a]=!0,Ei.qa(function(){mr();kr[a]=!1},b))}
function mr(){null==E("_lact",window)&&lr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function or(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var pr=C.ytPubsubPubsubInstance||new M,qr=C.ytPubsubPubsubSubscribedKeys||{},rr=C.ytPubsubPubsubTopicToKeys||{},sr=C.ytPubsubPubsubIsSynchronous||{};function tr(a,b){var c=ur();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){qr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{sr[a]?f():Al(f,0)}catch(g){hl(g)}},void 0);
qr[d]=!0;rr[a]||(rr[a]=[]);rr[a].push(d);return d}return 0}
function vr(a){var b=ur();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete qr[c]}))}
function wr(a,b){var c=ur();c&&c.publish.apply(c,arguments)}
function xr(a){var b=ur();if(b)if(b.clear(a),a)yr(a);else for(var c in rr)yr(c)}
function ur(){return C.ytPubsubPubsubInstance}
function yr(a){rr[a]&&(a=rr[a],db(a,function(b){qr[b]&&delete qr[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.zb;M.prototype.publish=M.prototype.Ya;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",pr);D("ytPubsubPubsubTopicToKeys",rr);D("ytPubsubPubsubIsSynchronous",sr);D("ytPubsubPubsubSubscribedKeys",qr);var zr=Symbol("injectionDeps");function Ar(a){this.name=a}
Ar.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Br(a){this.key=a}
function Cr(){this.i=new Map;this.j=new Map;this.h=new Map}
function Dr(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);c&&c.ig(a.resolve(b.lc))}
Cr.prototype.resolve=function(a){return a instanceof Br?Er(this,a.key,[],!0):Er(this,a,[])};
function Er(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Jd)var e=d.Jd;else if(d.jf)e=d[zr]?Fr(a,d[zr],c):[],e=d.jf.apply(d,la(e));else if(d.Id){e=d.Id;var f=e[zr]?Fr(a,e[zr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(la(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.mg||a.h.set(b,e);return e}
function Fr(a,b,c){return b?b.map(function(d){return d instanceof Br?Er(a,d.key,c,!0):Er(a,d,c)}):[]}
;var Gr;function Hr(){Gr||(Gr=new Cr);return Gr}
;var Ir=window;function Jr(){var a,b;return"h5vcc"in Ir&&(null==(a=Ir.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Ir.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Ir&&Ir.performance.mark&&Ir.performance.measure?2:0}
function Kr(a){switch(Jr()){case 1:Ir.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ir.performance.mark(a+"-start");break;case 0:break;default:li()}}
function Lr(a){switch(Jr()){case 1:Ir.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Ir.performance.mark(c);Ir.performance.measure(a,b,c);break;case 0:break;default:li()}}
;var Mr=R("web_enable_lifecycle_monitoring")&&0!==Jr(),Nr=R("web_enable_lifecycle_monitoring");function Or(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?hn():d;this.j=c;this.scheduler=d;this.i=new Uh;this.h=a;for(a={cb:0};a.cb<this.h.length;a={ic:void 0,cb:a.cb},a.cb++)a.ic=this.h[a.cb],c=function(e){return function(){e.ic.Ec();b.h[e.cb].kc=!0;b.h.every(function(f){return!0===f.kc})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.ic,{Ec:c,
jobId:d})}
function Pr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.kc||(a.scheduler.ra(c.jobId),a.scheduler.ab(c.Ec,10))}
Or.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.kc||this.scheduler.ra(b.jobId),b.kc=!0;this.i.resolve()};
Or.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Qr(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Mr&&Kr(this.state)}
m=Qr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Mr&&Lr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Pr(this.j),this.j=void 0);Rr(this,a,b);this.state=a;Mr&&Kr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Sr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Sr(a,b){var c=b.filter(function(e){return 10===Tr(a,e)}),d=b.filter(function(e){return 10!==Tr(a,e)});
return a.A.lg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Me.apply(a,[c].concat(la(e))),2);a.Dd.apply(a,[d].concat(la(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Ne.apply(a,[c].concat(la(e)));a.Dd.apply(a,[d].concat(la(e)))}}
m.Ne=function(a){for(var b=B.apply(1,arguments),c=hn(),d=v(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.Ab(function(g){return function(){Ur(g.Gb.name);g.Gb.callback.apply(g.Gb,la(b));Vr(g.Gb.name)}}(f))};
m.Me=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=hn(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.tb=e.value;f.Sb=void 0;g=function(k){return function(){Ur(k.tb.name);var l=k.tb.callback.apply(k.tb,la(b));"function"===typeof(null==l?void 0:l.then)?k.Sb=l.then(function(){Vr(k.tb.name)}):Vr(k.tb.name)}}(f);
c.Ab(g);return f.Sb?h.yield(f.Sb,3):h.B(3)}f={tb:void 0,Sb:void 0};e=d.next();return h.B(2)})};
m.Dd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Ur(e.name);e.callback.apply(e,la(b));Vr(e.name)},
priority:Tr(c,e)}});
d.length&&(this.j=new Or(d))};
function Tr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Ur(a){Mr&&a&&Kr(a)}
function Vr(a){Mr&&a&&Lr(a)}
function Rr(a,b,c){Nr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Qr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Wr(a){Qr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.v},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Xr;w(Wr,Qr);Wr.prototype.i=function(a,b){var c=this;this.h=Cm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Wr.prototype.v=function(a,b){this.h&&(Ei.ra(this.h),this.h=null);a(null==b?void 0:b.event)};
function Yr(){Xr||(Xr=new Wr);return Xr}
;var Zr=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Zr});function $r(){this.store={};this.h={}}
$r.prototype.storePayload=function(a,b){a=as(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
$r.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=bs(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,la(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,la(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,la(this.smartExtractMatchingEntries(a))));return c};
$r.prototype.extractMatchingEntries=function(a){a=bs(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,la(this.store[a[c]])),delete this.store[a[c]]);return b};
$r.prototype.getSequenceCount=function(a){a=bs(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function bs(a,b){var c=as(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&as(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(cs(b.auth,g[0])){var h=b.isJspb;cs(void 0===h?"undefined":h?"true":"false",g[1])&&cs(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),cs(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function cs(a,b){return void 0===a||"undefined"===a?!0:a===b}
$r.prototype.getSequenceCount=$r.prototype.getSequenceCount;$r.prototype.extractMatchingEntries=$r.prototype.extractMatchingEntries;$r.prototype.smartExtractMatchingEntries=$r.prototype.smartExtractMatchingEntries;$r.prototype.storePayload=$r.prototype.storePayload;function as(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function ds(a,b){if(a)return a[b.name]}
;var es=T("initial_gel_batch_timeout",2E3),gs=T("gel_queue_timeout_max_ms",6E4),hs=Math.pow(2,16)-1,is=T("gel_min_batch_size",5),js=void 0,ks=null;function ls(){this.l=this.h=this.i=0;this.j=!1}
var ms=new ls,ns=new ls,ps=new ls,qs=new ls,rs,ss=!0,ts=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",ts);var us={};function vs(){var a=E("yt.logging.ims");a||(a=new $r,D("yt.logging.ims",a));return a}
function ws(a,b){if("log_event"===a.endpoint){xs();var c=ys(a),d=zs(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=wq[d||""];var f,g,h,k=null==Hr().resolve(new Br(bp))?void 0:null==(f=cp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!R("web_payload_policy_disabled_killswitch"))return;k=As(e.tier);if(400===k){Bs(a,b);return}}us[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};vs().storePayload(e,a.payload);Cs(b,c,e,"gelDebuggingEvent"===d)}}
function Cs(a,b,c,d){function e(){Ds({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;R("web_enable_cached_it_client")&&a&&a!==ks?(js=new a,ks=a):!R("web_enable_cached_it_client")&&a&&(js=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("web_logging_max_batch")||100;var g=V(),h=Es(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=vs().getSequenceCount(c));1E3<=d?e():d>=a?rs||(rs=Fs(function(){e();rs=void 0},0)):10<=g-k&&(Gs(f,c.tier),h.l=g)}
function Bs(a,b){if("log_event"===a.endpoint){xs();var c=ys(a),d=new Map;d.set(c,[a.payload]);var e=zs(a.payload)||"";b&&(js=new b);return new Md(function(f,g){js&&js.isReady()?Hs(d,js,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function ys(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ts[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Ds(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Md(function(e,f){var g=Es(c,d),h=g.j;g.j=!1;Is(g.i);Is(g.h);g.h=0;js&&js.isReady()?void 0===d&&R("enable_web_tiered_gel")?Js(e,f,a,b,c,300,h):Js(e,f,a,b,c,d,h):(Gs(c,d),e())})}
function Js(a,b,c,d,e,f,g){var h=js;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=R("enable_web_tiered_gel")?vs().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):vs().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(us)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?vs().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):vs().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete us[l];Hs(k,h,a,b,c,!1,g)}
function Gs(a,b){function c(){Ds({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Es(a,b),e=d===qs||d===ps?5E3:gs;R("web_gel_timeout_cap")&&!d.h&&(e=Fs(function(){c()},e),d.h=e);
Is(d.i);e=P("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&ss&&(e=es);e=Fs(function(){0<T("gel_min_batch_size")?vs().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=is&&c():c()},e);
d.i=e}
function Hs(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(V()),k=a.size,l=(void 0===g?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Kc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Nc:void 0,Mc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=tb({context:ip(b.config_||hp())});if(!Na(p)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=ts[n])&&
Ks(g.batchRequest,n,p);delete ts[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Ls(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Nc=function(t){R("start_client_gcf")&&Ei.qa(function(){return A(function(r){return r.yield(Ms(t),0)})});
k--;k||c()};
g.Kc=0;g.Mc=function(t){return function(){t.Kc++;if(e.bypassNetworkless&&1===t.Kc)try{aq(b,l,t.batchRequest,Ns({writeThenSend:!0},t.dangerousLogToVisitorSession,t.Nc,t.Mc,f)),ss=!1}catch(r){hl(r),d()}k--;k||c()}}(g);
try{aq(b,l,g.batchRequest,Ns(e,g.dangerousLogToVisitorSession,g.Nc,g.Mc,f)),ss=!1}catch(t){hl(t),d()}}}
function Ns(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Rf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Os()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Ls(a,b,c){Os()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*hs/2)),c++,c>hs&&(c=1),cl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ks(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function xs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=vl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Zr=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Zr),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Os(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Fs(a,b){return!1===R("embeds_transport_use_scheduler")?Al(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Cm(function(){if("none"===Yr().currentState)a();else{var c={};Yr().install((c.none={callback:a},c))}},b):Cm(a,b)}
function Is(a){R("transport_use_scheduler")?Ei.ra(a):window.clearTimeout(a)}
function Ms(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=ds(d,Ik),g=null==(f=d)?void 0:f.hotHashData,h=ds(d,Hk),l=null==(k=d)?void 0:k.coldHashData,(n=Hr().resolve(new Br(bp)))?g?e?p.yield(dp(n,g,e),2):p.yield(dp(n,g),2):p.B(2):p.return()):l?h?p.yield(ep(n,l,h),0):p.yield(ep(n,l),0):p.B(0)})}
function Es(a,b){b=void 0===b?200:b;return a?300===b?qs:ns:300===b?ps:ms}
function zs(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,wq[b])return b}
function As(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ps=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ps);
function Qs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=or();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ps[b]=b in Ps?Ps[b]+1:0,a.sequence={index:Ps[b],groupKey:b},d.endOfSequence&&delete Ps[d.sequenceGroup]);(d.sendIsolatedPayload?Bs:ws)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function sn(a,b,c){c=void 0===c?{}:c;var d=Zq;P("ytLoggingEventsDefaultDisabled",!1)&&Zq===Zq&&(d=null);R("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=or(),c.timestamp=V());Qs(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Rs=new Set,Ss=0,Ts=0,Us=0,Vs=[],Ws=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function rn(a){Xs(a)}
function Ys(a){Xs(a,"WARNING")}
function Zs(a){a instanceof Error?Xs(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",Ys(a))}
function Xs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Ss))){d=Vs;var k=uc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=Zl(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var x="params."+t,y=am(r[t]);c[x]=y;p+=x.length+y.length;if(500<p)break}}else c.params=am(r)}if(d.length)for(t=0;t<d.length&&!(p=Zl(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Vl();c=v(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.cg)){a=d.weight;break a}a=v(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(Ql);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[t.name])for(e=v(c.hc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Ic(f);break}t.params||(t.params={});a=Vl();t.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Ab("sample").constructor!==yb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Rs.has(t.message)){if(g&&R("web_enable_error_204"))$s(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Wl.Ya("handleError",t),R("record_app_crashed_web")&&0===Us&&1===t.sampleWeight&&(Us++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),sn("appCrashed",g)),Ts++):"WARNING"===b&&Wl.Ya("handleWarning",t);if(R("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Ws);for(c=a.next();!c.done;c=a.next())if(yn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!dl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=t.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(sn("clientError",h),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&Ds(void 0,void 0,!1))}R("suppress_error_204_logging")||$s(b,t)}try{Rs.add(t.message)}catch(z){}Ss++}}}
function $s(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Hl(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function at(){this.register=new Map}
function bt(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.gg("ABORTED")}
at.prototype.clear=function(){bt(this);this.register.clear()};
var ct=new at;var dt=Date.now().toString();function et(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(dt)for(b=1,c=0;c<dt.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^dt.charCodeAt(c),b++;return a}
function ft(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=et()}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));return a.join("")}
;var gt,ht=C.ytLoggingDocDocumentNonce_;ht||(ht=ft(),D("ytLoggingDocDocumentNonce_",ht));gt=ht;function jt(a){this.h=a}
m=jt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Pk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&Uf(a,2,vf(this.h.veType)),void 0!==this.h.veCounter&&Uf(a,6,vf(this.h.veCounter)),void 0!==this.h.elementIndex&&Uf(a,3,vf(this.h.elementIndex)),this.h.isCounterfactual&&Uf(a,5,sf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();dg(a,Pk,7,b)}void 0!==this.h.youtubeData&&dg(a,Jk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function kt(a){return P("client-screen-nonce-store",{})[void 0===a?0:a]}
function lt(a,b){b=void 0===b?0:b;var c=P("client-screen-nonce-store");c||(c={},cl("client-screen-nonce-store",c));c[b]=a}
function mt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function nt(a){return P(mt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",nt);function ot(){var a=P("csn-to-ctt-auth-info");a||(a={},cl("csn-to-ctt-auth-info",a));return a}
function pt(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function qt(a){a=kt(void 0===a?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",qt);function rt(a,b,c){var d=ot();(c=qt(c))&&delete d[c];b&&(d[a]=b)}
function st(a){return ot()[a]}
D("yt_logging_screen.getCttAuthInfo",st);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==kt(c)||b!==P(mt(c)))if(rt(a,d,c),lt(a,c),cl(mt(c),b),b=function(){setTimeout(function(){a&&sn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:gt,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var tt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",tt);function ut(a){Yk(tt,arguments)}
;function vt(){var a=sb(wt),b;return(new Md(function(c,d){a.onSuccess=function(e){zl(e)?c(new xt(e)):d(new zt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new zt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new zt("Request timed out","net.timeout",e))};
b=Hl("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){c instanceof Td&&b.abort();
return Rd(c)})}
function zt(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(zt,Za);function xt(a){this.xhr=a}
;function At(){this.h=0;this.i=null}
At.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:Bt(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:Ct(a):this};
At.prototype.getValue=function(){return this.i};
At.prototype.isRejected=function(){return 2==this.h};
At.prototype.$goog_Thenable=!0;function Ct(a){var b=new At;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function Bt(a){var b=new At;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function Dt(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:sl(a)?"same-origin":"cors",credentials:sl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Et(){return Fg()||(ue||ve)&&yn("applewebkit")&&!yn("version")&&(!yn("safari")||yn("gsa/"))||Hc&&yn("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Ft(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Nk)if(Nk[d]==c.embeddedPlayerMode){b=Nk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Gt(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ht;this.isTimeout=a instanceof zt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Td}
w(Gt,Za);Gt.prototype.name="BiscottiError";function Ht(){Za.call(this,"Biscotti ID is missing from server")}
w(Ht,Za);Ht.prototype.name="BiscottiMissingError";var wt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},It=null;function Jt(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Et())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if("1"==pb(a))return Error("Biscotti ID is not available in private embed mode");if(Ft(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Wk(){var a=Jt();if(void 0!==a)return Rd(a);It||(It=vt().then(Kt).oc(function(b){return Lt(2,b)}));
return It}
function Kt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ht;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ht;a=a.id;Xk(a);It=Bt(a);Mt(18E5,2);return a}
function Lt(a,b){b=new Gt(b);Xk("");It=Ct(b);0<a&&Mt(12E4,a-1);throw b;}
function Mt(a,b){Al(function(){vt().then(Kt,function(c){return Lt(b,c)}).oc(ab)},a)}
function Nt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Wk()}catch(b){return Rd(b)}}
;function Ot(a){if("1"!=pb(P("PLAYER_VARS",{}))){a&&Vk();try{Nt().then(function(){},function(){}),Al(Ot,18E5)}catch(b){hl(b)}}}
;var Pt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Qt(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;$b(ac(5,a));try{var b=ql(a).theme;return Pt.get(b)||null}catch(c){}return null}
;function Rt(){this.h={};if(this.i=km()){var a=im("CONSISTENCY");a&&St(this,{encryptedTokenJarContents:a})}}
Rt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];St(this,a)}};
function St(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&hm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Tt=window.location.hostname.split(".").slice(-2).join(".");function Ut(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.h=Vt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Wt;function Xt(){Wt=E("yt.clientLocationService.instance");Wt||(Wt=new Ut,D("yt.clientLocationService.instance",Wt));return Wt}
m=Ut.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===P("INNERTUBE_CLIENT_NAME")?(this.h=Vt(this))&&this.h.set("yt-location-playability-token",a,15552E3):hm("YT_CL",JSON.stringify({loctok:a}),15552E3,Tt,!0))};
function Vt(a){return void 0===a.h?new jn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Vt(this))&&this.h.remove("yt-location-playability-token"):jm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===P("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Yt(a,b){var c,d=null==(c=ds(a,Mk))?void 0:c.signal;if(d&&b.Nb&&(c=b.Nb[d]))return c();var e;if((c=null==(e=ds(a,Kk))?void 0:e.request)&&b.Wd&&(e=b.Wd[c]))return e();for(var f in a)if(b.cd[f]&&(a=b.cd[f]))return a()}
;function Zt(a){return function(){return new a}}
;var $t={},au=($t.WEB_UNPLUGGED="^unplugged/",$t.WEB_UNPLUGGED_ONBOARDING="^unplugged/",$t.WEB_UNPLUGGED_OPS="^unplugged/",$t.WEB_UNPLUGGED_PUBLIC="^unplugged/",$t.WEB_CREATOR="^creator/",$t.WEB_KIDS="^kids/",$t.WEB_EXPERIMENTS="^experiments/",$t.WEB_MUSIC="^music/",$t.WEB_REMIX="^music/",$t.WEB_MUSIC_EMBEDDED_PLAYER="^music/",$t.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",$t);
function bu(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=au[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(au).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function cu(){}
cu.prototype.v=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?em:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=tb(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;om();var l="USER_INTERFACE_THEME_LIGHT";rm(165)?l="USER_INTERFACE_THEME_DARK":rm(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Qt()||l;h.userInterfaceTheme=k;if(!f){if(k=xm())h.connectionType=k;R("web_log_effective_connection_type")&&(k=ym())&&(g.client.effectiveConnectionType=k)}var n;if(R("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}R("web_gcf_hashes_innertube")&&(k=fp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=
p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=k);p=ql(C.location.href);!R("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&fm.h&&(p=fm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=gm(),h.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(p=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(X){}t=void 0}t&&(h.timeZone=t)}(t=P("EXPERIMENTS_TOKEN",
""))?h.experimentsToken=t:delete h.experimentsToken;t=wl();Rt.h||(Rt.h=new Rt);h=Rt.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!R("web_prequest_context_killswitch")&&(r=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=r);t=om();r=rm(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=qt())&&
(g.clientScreenNonce=f):!f&&(f=qt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Xt().setLocationOnInnerTubeContext(g);try{var x=tl(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));for(var G=z.next();!G.done;G=z.next()){var K=v(G.value),I=K.next().value,S=K.next().value;x=I;y=S;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}var H;if(R("add_ifa_to_tvh5_requests")&&
"TVHTML5"===(null==(H=g.client)?void 0:H.clientName)){var fa=P("INNERTUBE_CONTEXT");fa.adSignalsInfo&&(g.adSignalsInfo.advertisingId=fa.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=fa.adSignalsInfo.limitAdTracking)}}catch(X){Xs(X)}z=g}else Xs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(G=this.i(a)){this.h(z,G,b);var L;b="/youtubei/v1/"+bu(this.j());(G=null==(L=ds(a.commandMetadata,Lk))?void 0:L.apiUrl)&&(b=G);L=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&
(L=String(b)+String(cc(L)));b={};b.key=P("INNERTUBE_API_KEY");R("json_condensed_response")&&(b.prettyPrint="false");L=rl(L,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:L,ib:Dt(L),Na:z,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}Xs(new U("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(cu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function du(){}
w(du,cu);function eu(){}
w(eu,du);eu.prototype.v=function(){return{input:"/getDatasyncIdsEndpoint",ib:Dt("/getDatasyncIdsEndpoint","GET"),Na:{}}};
eu.prototype.j=function(){return[]};
eu.prototype.i=function(){};
eu.prototype.h=function(){};var fu={},gu=(fu.GET_DATASYNC_IDS=Zt(eu),fu);var hu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function iu(a,b){var c=void 0===c?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=bc(window.location.href);e&&d.push(e);e=bc(a);if(0<=cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),gi(d,a),a=d.href)if(a=cc(a),a=dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:qt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&ju(a,b,f)}else ju(a,b)}
function ju(a,b,c){a=ku(a);b=b?fc(b):"";c=c||5;Et()&&hm(a,b,c)}
function ku(a){for(var b=v(hu),c=b.next();!c.done;c=b.next())a=lc(a,c.value);return"ST-"+Yb(a).toString(36)}
;function lu(a){mp.call(this,1,arguments);this.csn=a}
w(lu,mp);var vp=new np("screen-created",lu),mu=[],nu=0,ou=new Map,pu=new Map,qu=new Map;
function ru(a,b,c,d,e){e=void 0===e?!1:e;for(var f=su({cttAuthInfo:st(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(nb(k)||!k.trackingParams&&!k.veType)&&Ys(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=tu(h,b);if(k.veType&&!pu.has(l)&&!qu.has(l)&&!e){ou.set(l,[a,b,c,h]);return}h=tu(c,b);ou.has(h)?uu(c,b):qu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:fb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?vu("visualElementAttached",f,c):a?Qs("visualElementAttached",c,a,f):sn("visualElementAttached",c,f)}
function vu(a,b,c){mu.push({Ee:a,payload:c,Xf:void 0,options:b});nu||(nu=wp())}
function xp(a){if(mu){for(var b=v(mu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,sn(c.Ee,c.payload,c.options));mu.length=0}nu=0}
function tu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function uu(a,b){a=tu(a,b);ou.has(a)&&(b=ou.get(a)||[],ru(b[0],b[1],b[2],[b[3]],!0),ou.delete(a))}
function su(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function wu(){try{return!!self.localStorage}catch(a){return!1}}
;function xu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function yu(a){if(wu()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=xu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function zu(){if(!wu())return!1;var a=Am(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=xu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Au(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return R("copy_login_info_to_st_cookie")&&("WEB"===P("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===P("INNERTUBE_CLIENT_NAME"))&&a}
function Bu(a){if(P("LOGGED_IN",!0)&&Au()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=bc(window.location.href);c&&b.push(c);c=bc(a);0<=cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=cc(a),(b=dc(b))?(b=ku(b),b=(b=im(b)||null)?pl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Au()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&iu(a,b)}}
;function Cu(a){var b=B.apply(1,arguments);if(!Du(a)||b.some(function(d){return!Du(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Eu(a,c.value)}
function Eu(a,b){for(var c in b)if(Du(b[c])){if(c in a&&!Du(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Eu(a[c],b[c])}else if(Fu(b[c])){if(c in a&&!Fu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Gu(a[c],b[c])}else a[c]=b[c];return a}
function Gu(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Du(c)?a.push(Eu({},c)):Fu(c)?a.push(Gu([],c)):a.push(c);return a}
function Du(a){return"object"===typeof a&&!Array.isArray(a)}
function Fu(a){return"object"===typeof a&&Array.isArray(a)}
;function Hu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Iu(){var a=Hu();a.info||(a.info={});return a.info}
function Ju(a){a=Hu(a);a.metadata||(a.metadata={});return a.metadata}
function Ku(a){a=Hu(a);a.tick||(a.tick={});return a.tick}
function Lu(a){a=Hu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Mu(a){a=Lu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Nu(a){var b=Hu(a).nonce;if(!b){if(R("enable_lr_96_bit_can_no_crypto")){b=et();for(var c=[],d=0;d<b.length;d++)c.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[d]&63));b=c.join("")}else b=ft();Hu(a).nonce=b}return b}
;function Ou(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Pu(a){a=a||"";var b=E("ytcsi.reference");b||(Ou(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Ou(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Qu=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",
W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",
W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att=
"LATENCY_ACTION_PLAYER_ATTESTATION",W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W);function Ru(a,b){mp.call(this,1,arguments);this.timer=b}
w(Ru,mp);var Su=new np("aft-recorded",Ru);var Tu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Tu);function Uu(){this.h=0}
function Vu(){Uu.h||(Uu.h=new Uu);return Uu.h}
Uu.prototype.tick=function(a,b,c,d){Wu(this,"tick_"+a+"_"+b)||sn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Uu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Wu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,sn("latencyActionInfo",a,{cttAuthInfo:c}))};
Uu.prototype.jspbInfo=function(){};
Uu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Wu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,sn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Wu(a,b){Tu[b]=Tu[b]||{count:0};var c=Tu[b];c.count++;c.time=V();a.h||(a.h=Cm(function(){var d=V(),e;for(e in Tu)Tu[e]&&6E4<d-Tu[e].time&&delete Tu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ys(c)),!0):!1}
;var Xu=window;function Yu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Zu(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=$u(e.requestStart),e.responseEnd=$u(e.responseEnd),e.redirectStart=$u(e.redirectStart),e.redirectEnd=$u(e.redirectEnd),e.domainLookupEnd=$u(e.domainLookupEnd),e.connectStart=$u(e.connectStart),e.connectEnd=
$u(e.connectEnd),e.responseStart=$u(e.responseStart),e.secureConnectionStart=$u(e.secureConnectionStart),e.domainLookupStart=$u(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function $u(a){return Math.round(av()+a)}
function av(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Xu.performance||Xu.mozPerformance||Xu.msPerformance||Xu.webkitPerformance||new Yu;var bv=!1,cv=!1,dv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Ua(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||ab,Y);function ev(a,b){if(!R("web_csi_action_sampling_enabled")||!Hu(b).actionDisabled){var c=Pu(b||"");Cu(c.info,a);a.loadType&&(c=a.loadType,Ju(b).loadType=c);Cu(Mu(b),a);c=Nu(b);b=Hu(b).cttAuthInfo;Vu().info(a,c,b)}}
function fv(){var a,b,c,d;return(null!=(d=null==Hr().resolve(new Br(bp))?void 0:null==(a=cp())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!R("web_csi_action_sampling_enabled")||!Hu(c).actionDisabled){var d=Nu(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(null==Hr().resolve(new Br(bp))?0:cp())&&!cv&&(cv=!0,Z("gcfl",V(),c));var f,g,h;e=(null==Hr().resolve(new Br(bp))?void 0:null==(f=cp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=fv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Hu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,ev(f,c));Hu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=Pu(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Lu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Ku(c);e=b||V();R("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;
f=Hu(c).cttAuthInfo;"_start"===a?(a=Vu(),Wu(a,"baseline_"+d)||sn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Vu().tick(a,d,b,f);gv(c);return e}}}
function hv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ar+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function iv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function jv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);oi(window)&&a.setAttribute("nonce",oi(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=av(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function kv(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",$u(b.startTime)),Z("wffe",$u(b.responseEnd)))}
function lv(a){var b=mv("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=mv(b[d],a);if(e)return e}return NaN}
function mv(a,b){if(a=Ku(b)[a])return"number"===typeof a?a:a[a.length-1]}
function gv(a){var b=mv("_start",a),c=lv(a);b&&c&&!bv&&(sp(Su,new Ru(Math.round(c-b),a)),bv=!0)}
function nv(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=hb(a,function(b){return"first-paint"===b.name}))return $u(a.startTime)}a=Y.timing;
return a.Ae?Math.max(0,a.Ae):0}
;function ov(a,b){gl(function(){Pu("").info.actionType=a;b&&cl("TIMING_AFT_KEYS",b);cl("TIMING_ACTION",a);var c=iv();0<Object.keys(c).length&&ev(c);c={isNavigation:!0,actionType:Qu[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=Qu[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=qt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=hv();if(1===d||-1===d)c.isVisible=!0;Ju();Iu();
c.loadType="cold";d=Iu();var e=Zu(),f=av(),g=P("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),1!==d.prerender&&Z("_start",f,void 0));d=nv();0<d&&Z("fpt",d);d=Zu();d.isPerformanceNavigationTiming&&ev({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=av()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&kv();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in dv)dv.hasOwnProperty(h)&&(e=dv[h],
jv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});ev(c);c=Lu();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Mu();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===Ju().loadType&&("cold"===c.loadType||"cold"===d)){d=Ku();e=Lu();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Z(k,mv(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,Cu(c,d),Cu(k,d),d=!0;d&&ev(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&pv()&&lv()&&gv()})()}
function qv(a,b,c){gl(ev)(a,b,void 0===c?!1:c)}
function rv(a,b,c){return gl(Z)(a,b,c)}
function pv(){return gl(function(){return"_start"in Ku()})()}
function sv(){gl(function(){var a=Nu();requestAnimationFrame(function(){setTimeout(function(){a===Nu()&&rv("ol",void 0,void 0)},0)})})()}
var tv=window;tv.ytcsi&&(tv.ytcsi.infoGel=qv,tv.ytcsi.tick=rv);var uv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),vv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function wv(a,b,c,d){this.v=a;this.ba=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},gu,a.Nb)}
function xv(a,b,c,d){if(void 0!==wv.h){if(d=wv.h,a=[a!==d.v,b!==d.ba,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else wv.h=new wv(a,b,c,d)}
function yv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?em:c;var d=Yt(b,a.v);if(!d)return Rd(new U("Error: No request builder found for command.",b));var e=d.v(b,void 0,c);return e?(Bu(e.input),new Md(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.bf){var n=e.config,p;n=null==n?void 0:null==(p=n.Tb)?void 0:p.sessionIndex;p=dm(0,{sessionIndex:n});k=Object.assign({},zv(h),p);return l.B(2)}return l.yield(Av(e.config,
h),3)}2!=l.h&&(k=l.i);f(Bv(a,e,k));l.h=0})})):Rd(new U("Error: Failed to build request for command.",b))}
function Cv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(uv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Bv(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,x,y,z,G,K,I,S,H,fa,L,X,da,ma,na,rb,Kc,Lc,ae;return A(function(ja){switch(ja.h){case 1:ja.B(2);break;case 3:if((d=ja.i)&&!d.isExpired())return ja.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){ja.B(4);break}g=b.Na.context;ja.B(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ja.B(4);break}l=k.value;return ja.yield(l.fg(g),8);case 8:k=h.next();ja.B(7);break;case 4:if(null==(n=a.i)||!n.kg(b.input,b.Na)){ja.B(11);
break}return ja.yield(a.i.Zf(b.input,b.Na),12);case 12:return p=ja.i,R("kevlar_process_local_innertube_responses_killswitch")||Cv(a,p,b),ja.return(p);case 11:return(x=null==(r=b.config)?void 0:r.hg)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.Na),K=null!=(G=null==(z=b.ib)?void 0:z.headers)?G:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},K,c)}),I=Object.assign({},b.ib),"POST"===b.ib.method&&(I=Object.assign({},I,{body:y})),(null==(S=b.config)?0:S.Ke)&&rv(b.config.Ke),H=function(){return a.ba.fetch(b.input,
I,b.config)},t=H(),x&&a.h.set(x,t)),ja.yield(t,13);
case 13:if((fa=ja.i)&&"error"in fa&&(null==(L=fa)?0:null==(X=L.error)?0:X.details))for(da=fa.error.details,ma=v(da),na=ma.next();!na.done;na=ma.next())rb=na.value,(Kc=rb["@type"])&&-1<vv.indexOf(Kc)&&(delete rb["@type"],fa=rb);x&&a.h.has(x)&&a.h.delete(x);(null==(Lc=b.config)?0:Lc.Le)&&rv(b.config.Le);if(fa||null==(ae=a.i)||!ae.Sf(b.input,b.Na)){ja.B(14);break}return ja.yield(a.i.Yf(b.input,b.Na),15);case 15:fa=ja.i;case 14:return Cv(a,fa,b),ja.return(fa||void 0)}})}
function Av(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Tb)?void 0:d.sessionIndex;var h=g.yield;var k=dm(0,{sessionIndex:e});if(!(k instanceof Md)){var l=new Md(ab);Nd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},zv(b),f)))})}
function zv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Dv=new Ar("INNERTUBE_TRANSPORT_TOKEN");var Ev=["share/get_web_player_share_panel"],Fv=["feedback"],Gv=["notification/modify_channel_preference"],Hv=["browse/edit_playlist"],Iv=["subscription/subscribe"],Jv=["subscription/unsubscribe"];function Kv(){}
w(Kv,du);Kv.prototype.j=function(){return Iv};
Kv.prototype.i=function(a){return ds(a,Uk)||void 0};
Kv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Kv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Lv(){}
w(Lv,du);Lv.prototype.j=function(){return Jv};
Lv.prototype.i=function(a){return ds(a,Tk)||void 0};
Lv.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Lv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Mv(){}
w(Mv,du);Mv.prototype.j=function(){return Fv};
Mv.prototype.i=function(a){return ds(a,Ok)||void 0};
Mv.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Mv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Nv(){}
w(Nv,du);Nv.prototype.j=function(){return Gv};
Nv.prototype.i=function(a){return ds(a,Sk)||void 0};
Nv.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ov(){}
w(Ov,du);Ov.prototype.j=function(){return Hv};
Ov.prototype.i=function(a){return ds(a,Rk)||void 0};
Ov.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Pv(){}
w(Pv,du);Pv.prototype.j=function(){return Ev};
Pv.prototype.i=function(a){return ds(a,Qk)};
Pv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Qv=new Ar("NETWORK_SLI_TOKEN");function Rv(a){this.h=a}
Rv.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=Sv(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Ys(g)}))})};
function Sv(a,b,c){if(a.h){var d=$b(ac(5,lc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=Up(c));return new window.Request(b,a)}
Rv.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.ue)&&a.ok?ng(b.ue,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Vf(),c=c.then(function(d){Ys(new U("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Rv[zr]=[new Br(Qv)];var Tv=new Ar("NETWORK_MANAGER_TOKEN");var Uv;function Vv(){var a,b,c;return A(function(d){if(1==d.h)return a=Hr().resolve(Dv),a?d.yield(yv(a),2):(Ys(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Ys(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Tf;return d.return(c)}Ys(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Wv=C.caches,Xv;function Yv(a){var b=a.indexOf(":");return-1===b?{td:a}:{td:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Zv(){return A(function(a){if(void 0!==Xv)return a.return(Xv);Xv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(Wv.open("test-only"),4);case 4:return d.yield(Wv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Xv)})}
function $v(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(Zv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Wv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Yv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Wv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function aw(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(Zv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Am("cache contains other");return h.yield(Wv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Yv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function bw(){Vv().then(function(a){a&&(Ho(a),$v(a),yu(a))})}
function cw(){var a=new Mq;Ei.qa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=Am("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Ho(g);$v(g);yu(g);return f.return()}c=zu();return f.yield(aw(),3);case 3:return d=f.i,f.yield(Io(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.xa()?bw():a.h.add("publicytnetworkstatus-online",bw,!0,void 0,void 0),f.h=0}})})}
;var ki=ia(["data-"]);function dw(a){a&&(a.dataset?a.dataset[ew()]="true":ji(a))}
function fw(a){return a?a.dataset?a.dataset[ew()]:a.getAttribute("data-loaded"):null}
var gw={};function ew(){return gw.loaded||(gw.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var hw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,iw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function jw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(hw,""),c=c.replace(iw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else kw(a,b,c)}
function kw(a,b,c){c=void 0===c?null:c;var d=lw(a),e=document.getElementById(d),f=e&&fw(e),g=e&&!f;f?b&&b():(b&&(f=tr(d,b),b=""+Pa(b),mw[b]=f),g||(e=nw(a,d,function(){if(!fw(e)){dw(e);wr(d);var h=Va(xr,d);Al(h,0)}},c)))}
function nw(a,b,c,d){d=void 0===d?null:d;var e=yd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);ri(e,Fk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ow(a){a=lw(a);var b=document.getElementById(a);b&&(xr(a),b.parentNode.removeChild(b))}
function pw(a,b){a&&b&&(a=""+Pa(b),(a=mw[a])&&vr(a))}
function lw(a){var b=document.createElement("a");gi(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var mw={};var qw=[],rw=!1;function sw(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Et()){var a=P("PLAYER_VARS",{});if("1"!=pb(a)&&!Ft(a)){var b=function(){rw=!0;"google_ad_status"in window?cl("DCLKSTAT",1):cl("DCLKSTAT",2)};
try{jw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}qw.push(Ei.qa(function(){if(!(rw||"google_ad_status"in window)){try{pw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}rw=!0;cl("DCLKSTAT",3)}},5E3))}}}
function tw(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function uw(a){Qr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(uw,Qr);uw.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
uw.prototype.v=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
uw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
uw.prototype.i=function(){this.h=new Map};function vw(a){Qr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.v},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.v},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.v},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(vw,Qr);vw.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
vw.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
vw.prototype.v=function(a,b){a(null==b?void 0:b.event)};
vw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function ww(){this.l=new uw;this.v=new vw}
ww.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.v.install(c)})};function xw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
xw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=qt(void 0===c?0:c)){a=this.client;d=new jt({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=tu(d,c);pu.set(f,!0);uu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=su({cttAuthInfo:st(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?vu("visualElementGestured",f,d):a?Qs("visualElementGestured",d,a,f):sn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
xw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new jt({trackingParams:a}),b,void 0===c?0:c)};
xw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=qt(d);a||(a=(a=nt(void 0===d?0:d))?new jt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=su({cttAuthInfo:st(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?vu("visualElementStateChanged",d,b):a?Qs("visualElementStateChanged",b,a,d):sn("visualElementStateChanged",b,d))}};
function yw(a,b){if(void 0===b)for(var c=pt(),d=0;d<c.length;d++)void 0!==c[d]&&yw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&ru(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function zw(){ww.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(zw,ww);zw.prototype.j=function(){sn("finalPayload",{csn:qt()})};
zw.prototype.h=function(){bt(ct)};
zw.prototype.i=function(){var a=yw;xw.h||(xw.h=new xw);a(xw.h)};function Aw(){}
function Bw(){var a=E("ytglobal.storage_");a||(a=new Aw,D("ytglobal.storage_",a));return a}
Aw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Cw()):d.return()})};
function Cw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Aw);function qn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=T("ytidb_transaction_ended_event_rate_limit_session",.2)}
qn.prototype.Ib=function(a){this.handleError(a)};
qn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Dw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=T("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Dw(a,b){Bw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Ew(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Ew(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Ew(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Fw(a,b,c){J.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=cb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
w(Fw,J);Fw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){il(d)}}};
Fw.prototype.S=function(){window.removeEventListener("message",this.A);J.prototype.S.call(this)};function Gw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Fw(!!P("WIDGET_ID_ENFORCE")),b=this.He.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a}
m=Gw.prototype;m.He=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Wc(a,b,c)};
m.Wc=function(){};
m.wc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.wc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ee=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.zc());this.sendMessage("onReady");db(this.i,this.Bd,this);this.i=[]};
m.zc=function(){return null};
function Hw(a,b){a.sendMessage("infoDelivery",b)}
m.Bd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Bd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Iw={},Jw=(Iw["api.invalidparam"]=2,Iw.auth=150,Iw["drm.auth"]=150,Iw["heartbeat.net"]=150,Iw["heartbeat.servererror"]=150,Iw["heartbeat.stop"]=150,Iw["html5.unsupportedads"]=5,Iw["fmt.noneavailable"]=5,Iw["fmt.decode"]=5,Iw["fmt.unplayable"]=5,Iw["html5.missingapi"]=5,Iw["html5.unsupportedlive"]=5,Iw["drm.unavailable"]=5,Iw["mrm.blocked"]=151,Iw);var Kw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Lw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Mw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Kw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Nw(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Ow(a){Gw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Te.bind(this));this.addEventListener("onVolumeChange",this.Ue.bind(this));this.addEventListener("onApiChange",this.Oe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Qe.bind(this));this.addEventListener("onPlaybackRateChange",this.Re.bind(this));this.addEventListener("onStateChange",this.Se.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ve.bind(this))}
w(Ow,Gw);m=Ow.prototype;
m.Wc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Lw(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Mw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Mw(e);break;case "loadPlaylist":case "cuePlaylist":e=Nw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Lw(a)&&Hw(this,this.zc())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Gw.prototype.Dc.call(this,a,b)};
m.wc=function(a,b){var c=this,d=Gw.prototype.wc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.ee.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Jw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.zc=function(){if(!this.api)return null;var a=this.api.getApiInterface();ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Se=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Hw(this,a)};
m.Qe=function(a){Hw(this,{playbackQuality:a})};
m.Re=function(a){Hw(this,{playbackRate:a})};
m.Oe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Ue=function(){Hw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Te=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Hw(this,a)};
m.Ve=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Hw(this,a)};
m.dispose=function(){Gw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Pw(a){J.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.xd,this)}
w(Pw,J);m=Pw.prototype;m.start=function(){this.started||this.aa()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.aa()&&this.connection.jb(a,b)};
m.xd=function(a,b,c){if(this.started&&!this.aa()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Qw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Rw(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Pe.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Pe=function(a,b){this.started&&!this.aa()&&this.connection.jb(a,this.yc(a,b))};
m.yc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.xd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);J.prototype.S.call(this)};function Sw(a,b){Pw.call(this,b);this.api=a;this.start()}
w(Sw,Pw);Sw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Sw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Qw(a,b){switch(a){case "loadVideoById":return a=Mw(b),[a];case "cueVideoById":return a=Mw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Nw(b),[a];case "cuePlaylist":return a=Nw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Rw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Sw.prototype.yc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Pw.prototype.yc.call(this,a,b)};
Sw.prototype.S=function(){Pw.prototype.S.call(this);delete this.api};function Tw(a){a=void 0===a?!1:a;J.call(this);this.h=new M(a);sc(this,this.h)}
Xa(Tw,J);Tw.prototype.subscribe=function(a,b,c){return this.aa()?0:this.h.subscribe(a,b,c)};
Tw.prototype.unsubscribe=function(a,b,c){return this.aa()?!1:this.h.unsubscribe(a,b,c)};
Tw.prototype.l=function(a,b){this.aa()||this.h.Ya.apply(this.h,arguments)};function Uw(a,b,c){Tw.call(this);this.j=a;this.i=b;this.id=c}
w(Uw,Tw);Uw.prototype.jb=function(a,b){this.aa()||this.j.jb(this.i,this.id,a,b)};
Uw.prototype.S=function(){this.i=this.j=null;Tw.prototype.S.call(this)};function Vw(a,b,c){J.call(this);this.h=a;this.origin=c;this.i=hr(window,"message",this.j.bind(this));this.connection=new Uw(this,a,b);sc(this,this.connection)}
w(Vw,J);Vw.prototype.jb=function(a,b,c,d){this.aa()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Vw.prototype.j=function(a){if(!this.aa()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.aa()||c.l("command",b.command,b.data,a.origin)}}}};
Vw.prototype.S=function(){ir(this.i);this.h=null;J.prototype.S.call(this)};function Ww(){this.state=1;this.h=null}
m=Ww.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=xb())?d.createScript(f):f,d=new Xb,d.vd=f,f=d):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=Ek(a.interpreterSafeUrl).toString());Xw(this,d,e,a.program,b,c)}else Ys(Error("Cannot initialize botguard without program"))};
function Xw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,jw(c,function(){window[g]?Yw(a,d,g,e):(a.state=3,ow(c),Ys(new U("Unable to load Botguard","from "+c)))},f)):b?(f=yd("SCRIPT"),b instanceof Xb?qi(f,b):f.textContent=b,f.nonce=oi(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Yw(a,d,g,e):(a.state=4,Ys(new U("Unable to load Botguard from JS")))):Ys(new U("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function Yw(a,b,c,d){a.state=5;try{var e=new Vh({program:b,ke:c,Ie:R("att_web_record_metrics")});e.Ye.then(function(){a.state=6;d&&d(b)});
a.Rc(e)}catch(f){a.state=7,f instanceof Error&&Ys(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Uc()?this.Kd({dd:a}):null};
m.dispose=function(){this.Rc(null);this.state=8};
m.Uc=function(){return!!this.h};
m.Kd=function(a){return this.h.Ed(a)};
m.Rc=function(a){qc(this.h);this.h=a};function Zw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function $w(){Ww.apply(this,arguments)}
w($w,Ww);$w.prototype.Rc=function(a){var b;null==(b=Zw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ed.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
$w.prototype.Uc=function(){return!!Zw()};
$w.prototype.Kd=function(a){return Zw().bgvmc(a)};var ax=new $w;function bx(){return ax.Uc()}
function cx(a){a=void 0===a?{}:a;return ax.invoke(a)}
;function dx(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
dx.prototype.clone=function(){var a=new dx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=sb(c):a[b]=c}return a};var ex=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function fx(a){a=a||"";if(window.spf){var b=a.match(ex);spf.style.load(a,b?b[1]:"",void 0)}else gx(a)}
function gx(a){var b=hx(a),c=document.getElementById(b),d=c&&fw(c);d||c&&!d||(c=ix(a,b,function(){if(!fw(c)){dw(c);wr(b);var e=Va(xr,b);Al(e,0)}}))}
function ix(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Fk(a);ni(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function hx(a){var b=yd("A");gi(b,new Fb(a,Gb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function jx(a,b,c,d,e){J.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.pc=e;this.Fa=!1;this.api={};this.fa=this.m=null;this.T=new M;this.h={};this.Z=this.ha=this.elementId=this.Za=this.config=null;this.U=!1;this.j=this.D=null;this.va={};this.qc=["onReady"];this.lastError=null;this.Qb=NaN;this.K={};this.ea=0;this.i=this.l=a;sc(this,this.T);kx(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(lx(this),mx(this))}
w(jx,J);m=jx.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.aa()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof dx||(b=new dx(b));this.config=b;this.setConfig(a);mx(this);this.isReady()&&nx(this)}};
function lx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=ox(a);lx(this);if(!this.ha){var b;this.ha=px(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=yi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=yi(Number(a)||a))};
function nx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function qx(a){var b=!0,c=rx(a);c&&a.config&&(b=c.dataset.version===sx(a));return b&&!!E("yt.player.Application.create")}
function mx(a){if(!a.aa()&&!a.U){var b=qx(a);if(b&&"html5"===(rx(a)?"html5":null))a.Z="html5",a.isReady()||tx(a);else if(ux(a),a.Z="html5",b&&a.j&&a.l)a.l.appendChild(a.j),tx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=vx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?ox(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.pc);tx(a)};
a.U=!0;b?a.D():(jw(sx(a),a.D),(b=wx(a))&&fx(b),xx(a)&&!c&&D("yt.player.Application.create",null))}}}
function rx(a){var b=xd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function tx(a){if(!a.aa()){var b=rx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.U=!1;if(!vx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}yx(a)}else a.Qb=setTimeout(function(){tx(a)},50)}}
function yx(a){kx(a);a.Fa=!0;var b=rx(a);if(b){a.m=zx(a,b,"addEventListener");a.fa=zx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=zx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);nx(a);a.ha&&a.ha(a.api);a.T.Ya("onReady",a.api)}
function zx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function kx(a){a.Fa=!1;if(a.fa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.fa(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.m=null;a.fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Fa};
m.addEventListener=function(a,b){var c=this,d=px(this,b);d&&(0<=cb(this.qc,a)||this.h[a]||(b=Ax(this,a),this.m&&this.m(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.aa()||(b=px(this,b))&&this.T.unsubscribe(a,b)};
function px(a,b){var c=b;if("string"===typeof b){if(a.va[b])return a.va[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.va[b]=c}return c?c:null}
function Ax(a,b){function c(d){var e=setTimeout(function(){if(!a.aa()){try{a.T.Ya(b,null!=d?d:void 0)}catch(h){var f=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
ob(a.K,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.Z||(rx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function ux(a){a.cancel();kx(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=rx(a);b&&(qx(a)||!xx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&pw(sx(this),this.D);clearTimeout(this.Qb);this.U=!1};
m.S=function(){ux(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.va=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.l;delete this.i;J.prototype.S.call(this)};
function xx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function sx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function wx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function vx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function ox(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
;var Bx={},Cx="player_uid_"+(1E9*Math.random()>>>0);function Dx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?xd(c):c;var e=Cx+"_"+Pa(c),f=Bx[e];if(f&&d)return Ex(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new jx(c,e,a,b,void 0);Bx[e]=f;f.addOnDisposeCallback(function(){delete Bx[f.getId()]});
return f.api}
function Ex(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Fx=null,Gx=null,Hx=null;
function Ix(){sv();var a=om(),b=rm(119),c=1<window.devicePixelRatio;if(document.body&&Oi(document.body,"exp-invert-logo"))if(c&&!Oi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Oi(d,"inverted-hdpi")){var e=Mi(d);Ni(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Oi(document.body,"inverted-hdpi")&&Pi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=sm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete lm[b]:(c=d.toString(16),lm[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in lm)lm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(lm[f])));var f=d.join("&");hm(b,f,63072E3,a.i,c)}}
function Jx(){Kx()}
function Lx(){rv("ep_init_pr");Kx()}
function Kx(){var a=Fx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Mx(){Fx&&Fx.sendAbandonmentPing&&Fx.sendAbandonmentPing();P("PL_ATT")&&ax.dispose();for(var a=Ei,b=0,c=qw.length;b<c;b++)a.ra(qw[b]);qw.length=0;ow("//static.doubleclick.net/instream/ad_status.js");rw=!1;cl("DCLKSTAT",0);rc(Hx,Gx);Fx&&(Fx.removeEventListener("onVideoDataChange",Jx),Fx.destroy())}
;function Nx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&iu(a,b);if(c)return!1;Bu(a);var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=hc(a,e);Bu(a);f=a+f;var h=void 0===h?di:h;a:if(h=void 0===h?di:h,f instanceof Fb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof bi&&b.te(f)){h=new Fb(f,Gb);break a}h=void 0}g=g.location;h=fi(h||Hb);void 0!==h&&(g.href=h);return!0}
;D("yt.setConfig",cl);D("yt.config.set",cl);D("yt.setMsg",ut);D("yt.msgs.set",ut);D("yt.logging.errors.log",Xs);
D("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}Ot(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);ov("embed",["ol"]);c=P("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ql(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&ov("watch",["pbs","pbu","pbp"]);Fx=Dx(a,c);Fx.addEventListener("onVideoDataChange",Jx);Fx.addEventListener("onReady",Lx);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Hx=new Ow(Fx):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Gx=new Vw(window.parent,a,b),Hx=new Sw(Fx,Gx.connection));sw();R("ytidb_create_logger_embed_killswitch")||pn();a={};zw.h||(zw.h=new zw);
zw.h.install((a.flush_logs={callback:function(){Ds()}},a));
Yq();R("ytidb_clear_embedded_player")&&Ei.qa(function(){var f,g;if(!Uv){var h=Hr();Dr(h,{lc:Tv,Id:Rv});var k={cd:{feedbackEndpoint:Zt(Mv),modifyChannelNotificationPreferenceEndpoint:Zt(Nv),playlistEditEndpoint:Zt(Ov),subscribeEndpoint:Zt(Kv),unsubscribeEndpoint:Zt(Lv),webPlayerShareEntityServiceEndpoint:Zt(Pv)}},l=Xt(),n={};l&&(n.client_location=l);void 0===f&&(f=cm());void 0===g&&(g=h.resolve(Tv));xv(k,g,f,n);Dr(h,{lc:Dv,Jd:wv.h});Uv=h.resolve(Dv)}cw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||bx);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||cx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||tw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Nx);D("yt.util.activity.init",E("yt.util.activity.init")||lr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||or);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||mr);window.addEventListener("load",gl(function(){Ix()}));
window.addEventListener("pageshow",gl(function(a){a.persisted||Ix()}));
window.addEventListener("pagehide",gl(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Mx():a.persisted||Mx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=dl("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new U(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Xs(e):Ys(e))};
ce=Zs;window.addEventListener("unhandledrejection",function(a){Zs(a.reason)});
db(P("ERRORS")||[],function(a){Xs.apply(null,a)});
cl("ERRORS",[]);R("embeds_web_enable_scheduler_to_player_binary")&&fn();}).call(this);
