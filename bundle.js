!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},9670:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},8457:function(t,n,e){"use strict";var r=e(9974),o=e(7908),i=e(3411),c=e(7659),u=e(7466),a=e(6135),f=e(1246);t.exports=function(t){var n,e,s,l,p,v,y=o(t),h="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,m=void 0!==g,b=f(y),x=0;if(m&&(g=r(g,d>2?arguments[2]:void 0,2)),null==b||h==Array&&c(b))for(e=new h(n=u(y.length));n>x;x++)v=m?g(y[x],x):y[x],a(e,x,v);else for(p=(l=b.call(y)).next,e=new h;!(s=p.call(l)).done;x++)v=m?i(l,g,[s.value,x],!0):s.value,a(e,x,v);return e.length=x,e}},1318:function(t,n,e){var r=e(5656),o=e(7466),i=e(1400),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},3411:function(t,n,e){var r=e(9670),o=e(9212);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){throw o(t),n}}},7072:function(t,n,e){var r=e(5112)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,e){var r=e(1694),o=e(4326),i=e(5112)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},9920:function(t,n,e){var r=e(6656),o=e(3887),i=e(1236),c=e(3070);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},8544:function(t,n,e){var r=e(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:function(t,n,e){"use strict";var r=e(3383).IteratorPrototype,o=e(30),i=e(9114),c=e(8003),u=e(7497),a=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,f,!1,!0),u[f]=a,t}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:function(t,n,e){"use strict";var r=e(7593),o=e(3070),i=e(9114);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},654:function(t,n,e){"use strict";var r=e(2109),o=e(4994),i=e(9518),c=e(7674),u=e(8003),a=e(8880),f=e(1320),s=e(5112),l=e(1913),p=e(7497),v=e(3383),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),g="keys",m="values",b="entries",x=function(){return this};t.exports=function(t,n,e,s,v,w,S){o(e,n,s);var O,j,A,P=function(t){if(t===v&&T)return T;if(!h&&t in C)return C[t];switch(t){case g:case m:case b:return function(){return new e(this,t)}}return function(){return new e(this)}},E=n+" Iterator",k=!1,C=t.prototype,_=C[d]||C["@@iterator"]||v&&C[v],T=!h&&_||P(v),I="Array"==n&&C.entries||_;if(I&&(O=i(I.call(new t)),y!==Object.prototype&&O.next&&(l||i(O)===y||(c?c(O,y):"function"!=typeof O[d]&&a(O,d,x)),u(O,E,!0,!0),l&&(p[E]=x))),v==m&&_&&_.name!==m&&(k=!0,T=function(){return _.call(this)}),l&&!S||C[d]===T||a(C,d,T),p[n]=T,v)if(j={values:P(m),keys:w?T:P(g),entries:P(b)},S)for(A in j)(h||k||!(A in C))&&f(C,A,j[A]);else r({target:n,proto:!0,forced:h||k},j);return j}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},5268:function(t,n,e){var r=e(4326),o=e(7854);t.exports="process"==r(o.process)},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),c=e(8113),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),c=e(1320),u=e(3505),a=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,v,y=t.target,h=t.global,d=t.stat;if(e=h?r:d?r[y]||u(y,{}):(r[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,n,e){var r=e(3099);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},5005:function(t,n,e){var r=e(857),o=e(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},1246:function(t,n,e){var r=e(648),o=e(7497),i=e(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},3501:function(t){t.exports={}},490:function(t,n,e){var r=e(5005);t.exports=r("document","documentElement")},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7293),o=e(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,e){var r=e(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,n,e){var r,o,i,c=e(8536),u=e(7854),a=e(111),f=e(8880),s=e(6656),l=e(5465),p=e(6200),v=e(3501),y=u.WeakMap;if(c){var h=l.state||(l.state=new y),d=h.get,g=h.has,m=h.set;r=function(t,n){return n.facade=t,m.call(h,t,n),n},o=function(t){return d.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var b=p("state");v[b]=!0,r=function(t,n){return n.facade=t,f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7659:function(t,n,e){var r=e(5112),o=e(7497),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},4705:function(t,n,e){var r=e(7293),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},9212:function(t,n,e){var r=e(9670);t.exports=function(t){var n=t.return;if(void 0!==n)return r(n.call(t)).value}},3383:function(t,n,e){"use strict";var r,o,i,c=e(7293),u=e(9518),a=e(8880),f=e(6656),s=e(5112),l=e(1913),p=s("iterator"),v=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):v=!0);var y=null==r||c((function(){var t={};return r[p].call(t)!==t}));y&&(r={}),l&&!y||f(r,p)||a(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},7497:function(t){t.exports={}},133:function(t,n,e){var r=e(5268),o=e(7392),i=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},8536:function(t,n,e){var r=e(7854),o=e(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},30:function(t,n,e){var r,o=e(9670),i=e(6048),c=e(748),u=e(3501),a=e(490),f=e(317),s=e(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=r?function(t){t.write(p("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete v.prototype[c[e]];return v()};u[s]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[s]=t):e=v(),void 0===n?e:i(e,n)}},6048:function(t,n,e){var r=e(9781),o=e(3070),i=e(9670),c=e(1956);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(9670),c=e(7593),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(5296),i=e(9114),c=e(5656),u=e(7593),a=e(6656),f=e(4664),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},9518:function(t,n,e){var r=e(6656),o=e(7908),i=e(6200),c=e(8544),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},6324:function(t,n,e){var r=e(6656),o=e(5656),i=e(1318).indexOf,c=e(3501);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},1956:function(t,n,e){var r=e(6324),o=e(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},7674:function(t,n,e){var r=e(9670),o=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},3887:function(t,n,e){var r=e(5005),o=e(8006),i=e(5181),c=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},857:function(t,n,e){var r=e(7854);t.exports=r},1320:function(t,n,e){var r=e(7854),o=e(8880),i=e(6656),c=e(3505),u=e(2788),a=e(9909),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=e(8880);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},8003:function(t,n,e){var r=e(3070).f,o=e(6656),i=e(5112)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8710:function(t,n,e){var r=e(9958),o=e(4488),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},1400:function(t,n,e){var r=e(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:function(t,n,e){var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,n,e){var r=e(111);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},9711:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(6656),c=e(9711),u=e(133),a=e(3307),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},1038:function(t,n,e){var r=e(2109),o=e(8457);r({target:"Array",stat:!0,forced:!e(7072)((function(t){Array.from(t)}))},{from:o})},8783:function(t,n,e){"use strict";var r=e(8710).charAt,o=e(9909),i=e(654),c="String Iterator",u=o.set,a=o.getterFor(c);i(String,"String",(function(t){u(this,{type:c,string:String(t),index:0})}),(function(){var t,n=a(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))}},n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function n(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.boardSize=4,this.board=null,this.boardEl=null,this.cells=[],this.stop=!1}var e,r;return e=n,(r=[{key:"renderBoard",value:function(){this.board=document.querySelector(".board"),this.boardEl=document.createElement("div"),this.boardEl.classList.add("cells"),this.board.appendChild(this.boardEl);for(var t=0;t<Math.pow(this.boardSize,2);t+=1){var n=document.createElement("div");n.classList.add("cell"),this.boardEl.appendChild(n),this.cells.push(n)}}},{key:"getCell",value:function(t){return this.cells[t]}},{key:"deactivateCell",value:function(t){this.getCell(t).classList.remove("cell_has-goblin")}},{key:"activateCell",value:function(t){this.getCell(t).classList.add("cell_has-goblin")}},{key:"next",value:function(){var t=this;setTimeout((function(){if(!0!==t.stop){var n=Math.floor(Math.random()*t.cells.length);n!==t.activeCell?(t.deactivateCell(t.activeCell),t.activeCell=n,t.activateCell(t.activeCell),t.next()):t.next()}}),1e3)}}])&&t(e.prototype,r),n}();function r(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,a=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return u=t.done,t},e:function(t){a=!0,c=t},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw c}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(1038),e(8783),new(function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.gamePlay=n,this.success=0,this.fail=0,this.modal=document.querySelector(".modal")}var n,e;return n=t,(e=[{key:"init",value:function(){this.gamePlay.renderBoard(),this.gamePlay.activeCell=Math.floor(Math.random()*this.gamePlay.cells.length),this.gamePlay.next(),this.setMoveListeners(),this.setResetListeners()}},{key:"setMoveListeners",value:function(){var t,n=this,e=r(this.gamePlay.cells);try{for(e.s();!(t=e.n()).done;)t.value.addEventListener("click",(function(t){t.target.classList.contains("cell_has-goblin")?(n.success+=1,document.querySelector(".success-counter-value").textContent=n.success,n.checkWin()):(n.fail+=1,document.querySelector(".fail-counter-value").textContent=n.fail,n.checkFail())}))}catch(t){e.e(t)}finally{e.f()}}},{key:"checkWin",value:function(){10===this.success&&(this.gamePlay.stop=!0,this.text="Вы поймали всех гоблинов!\nОтпустите их и давайте ещё разок.",this.showModal())}},{key:"checkFail",value:function(){5===this.fail&&(this.gamePlay.stop=!0,this.text="Вы проиграли.\nНачнём заново?",this.showModal("red"))}},{key:"showModal",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"green";this.modal.classList.add("modal_active"),this.modal.querySelector(".modal-text").textContent=this.text,document.querySelector(".modal-btn").style.backgroundColor=t}},{key:"setResetListeners",value:function(){var t=this;this.btns=Array.from(document.getElementsByClassName("reset"));var n,e=r(this.btns);try{for(e.s();!(n=e.n()).done;)n.value.addEventListener("click",(function(){t.modal.classList.contains("modal_active")&&t.modal.classList.remove("modal_active"),window.location.reload()}))}catch(t){e.e(t)}finally{e.f()}}}])&&i(n.prototype,e),t}())(new n).init()}()}();