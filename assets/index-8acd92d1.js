function $E(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function UE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Z_(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(e,i);return new o}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var e1={exports:{}},Wu={},t1={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),zE=Symbol.for("react.portal"),BE=Symbol.for("react.fragment"),VE=Symbol.for("react.strict_mode"),WE=Symbol.for("react.profiler"),HE=Symbol.for("react.provider"),GE=Symbol.for("react.context"),qE=Symbol.for("react.forward_ref"),KE=Symbol.for("react.suspense"),YE=Symbol.for("react.memo"),QE=Symbol.for("react.lazy"),Pv=Symbol.iterator;function JE(t){return t===null||typeof t!="object"?null:(t=Pv&&t[Pv]||t["@@iterator"],typeof t=="function"?t:null)}var n1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r1=Object.assign,i1={};function ss(t,e,n){this.props=t,this.context=e,this.refs=i1,this.updater=n||n1}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o1(){}o1.prototype=ss.prototype;function Jp(t,e,n){this.props=t,this.context=e,this.refs=i1,this.updater=n||n1}var Xp=Jp.prototype=new o1;Xp.constructor=Jp;r1(Xp,ss.prototype);Xp.isPureReactComponent=!0;var Nv=Array.isArray,s1=Object.prototype.hasOwnProperty,Zp={current:null},a1={key:!0,ref:!0,__self:!0,__source:!0};function l1(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)s1.call(e,r)&&!a1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:tl,type:t,key:o,ref:s,props:i,_owner:Zp.current}}function XE(t,e){return{$$typeof:tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function em(t){return typeof t=="object"&&t!==null&&t.$$typeof===tl}function ZE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Av=/\/+/g;function Xd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZE(""+t.key):e.toString(36)}function uc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case tl:case zE:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Xd(s,0):r,Nv(i)?(n="",t!=null&&(n=t.replace(Av,"$&/")+"/"),uc(i,e,n,"",function(c){return c})):i!=null&&(em(i)&&(i=XE(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Av,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Nv(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Xd(o,a);s+=uc(o,e,n,l,i)}else if(l=JE(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Xd(o,a++),s+=uc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Fl(t,e,n){if(t==null)return t;var r=[],i=0;return uc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function eI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},dc={transition:null},tI={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:dc,ReactCurrentOwner:Zp};oe.Children={map:Fl,forEach:function(t,e,n){Fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fl(t,function(){e++}),e},toArray:function(t){return Fl(t,function(e){return e})||[]},only:function(t){if(!em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=ss;oe.Fragment=BE;oe.Profiler=WE;oe.PureComponent=Jp;oe.StrictMode=VE;oe.Suspense=KE;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tI;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=r1({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Zp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)s1.call(e,l)&&!a1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:tl,type:t.type,key:i,ref:o,props:r,_owner:s}};oe.createContext=function(t){return t={$$typeof:GE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HE,_context:t},t.Consumer=t};oe.createElement=l1;oe.createFactory=function(t){var e=l1.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:qE,render:t}};oe.isValidElement=em;oe.lazy=function(t){return{$$typeof:QE,_payload:{_status:-1,_result:t},_init:eI}};oe.memo=function(t,e){return{$$typeof:YE,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=dc.transition;dc.transition={};try{t()}finally{dc.transition=e}};oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};oe.useCallback=function(t,e){return Rt.current.useCallback(t,e)};oe.useContext=function(t){return Rt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Rt.current.useEffect(t,e)};oe.useId=function(){return Rt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Rt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};oe.useRef=function(t){return Rt.current.useRef(t)};oe.useState=function(t){return Rt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Rt.current.useTransition()};oe.version="18.2.0";t1.exports=oe;var b=t1.exports;const qt=UE(b),nI=$E({__proto__:null,default:qt},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rI=b,iI=Symbol.for("react.element"),oI=Symbol.for("react.fragment"),sI=Object.prototype.hasOwnProperty,aI=rI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lI={key:!0,ref:!0,__self:!0,__source:!0};function c1(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)sI.call(e,r)&&!lI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iI,type:t,key:o,ref:s,props:i,_owner:aI.current}}Wu.Fragment=oI;Wu.jsx=c1;Wu.jsxs=c1;e1.exports=Wu;var d=e1.exports,uh={},u1={exports:{}},Xt={},d1={exports:{}},f1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var H=D.length;D.push(z);e:for(;0<H;){var me=H-1>>>1,Ce=D[me];if(0<i(Ce,z))D[me]=z,D[H]=Ce,H=me;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],H=D.pop();if(H!==z){D[0]=H;e:for(var me=0,Ce=D.length,vn=Ce>>>1;me<vn;){var ue=2*(me+1)-1,Ot=D[ue],pt=ue+1,jt=D[pt];if(0>i(Ot,H))pt<Ce&&0>i(jt,Ot)?(D[me]=jt,D[pt]=H,me=pt):(D[me]=Ot,D[ue]=H,me=ue);else if(pt<Ce&&0>i(jt,H))D[me]=jt,D[pt]=H,me=pt;else break e}}return z}function i(D,z){var H=D.sortIndex-z.sortIndex;return H!==0?H:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],f=1,u=null,h=3,p=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(D){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=D)r(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function _(D){if(y=!1,w(D),!v)if(n(l)!==null)v=!0,Xe(E);else{var z=n(c);z!==null&&We(_,z.startTime-D)}}function E(D,z){v=!1,y&&(y=!1,g(j),j=-1),p=!0;var H=h;try{for(w(z),u=n(l);u!==null&&(!(u.expirationTime>z)||D&&!Fe());){var me=u.callback;if(typeof me=="function"){u.callback=null,h=u.priorityLevel;var Ce=me(u.expirationTime<=z);z=t.unstable_now(),typeof Ce=="function"?u.callback=Ce:u===n(l)&&r(l),w(z)}else r(l);u=n(l)}if(u!==null)var vn=!0;else{var ue=n(c);ue!==null&&We(_,ue.startTime-z),vn=!1}return vn}finally{u=null,h=H,p=!1}}var k=!1,T=null,j=-1,M=5,U=-1;function Fe(){return!(t.unstable_now()-U<M)}function O(){if(T!==null){var D=t.unstable_now();U=D;var z=!0;try{z=T(!0,D)}finally{z?re():(k=!1,T=null)}}else k=!1}var re;if(typeof m=="function")re=function(){m(O)};else if(typeof MessageChannel<"u"){var Vt=new MessageChannel,St=Vt.port2;Vt.port1.onmessage=O,re=function(){St.postMessage(null)}}else re=function(){x(O,0)};function Xe(D){T=D,k||(k=!0,re())}function We(D,z){j=x(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Xe(E))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var H=h;h=z;try{return D()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=h;h=D;try{return z()}finally{h=H}},t.unstable_scheduleCallback=function(D,z,H){var me=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?me+H:me):H=me,D){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=H+Ce,D={id:f++,callback:z,priorityLevel:D,startTime:H,expirationTime:Ce,sortIndex:-1},H>me?(D.sortIndex=H,e(c,D),n(l)===null&&D===n(c)&&(y?(g(j),j=-1):y=!0,We(_,H-me))):(D.sortIndex=Ce,e(l,D),v||p||(v=!0,Xe(E))),D},t.unstable_shouldYield=Fe,t.unstable_wrapCallback=function(D){var z=h;return function(){var H=h;h=z;try{return D.apply(this,arguments)}finally{h=H}}}})(f1);d1.exports=f1;var cI=d1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=b,Jt=cI;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p1=new Set,ga={};function Bi(t,e){Oo(t,e),Oo(t+"Capture",e)}function Oo(t,e){for(ga[t]=e,t=0;t<e.length;t++)p1.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dh=Object.prototype.hasOwnProperty,uI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ov={},jv={};function dI(t){return dh.call(jv,t)?!0:dh.call(Ov,t)?!1:uI.test(t)?jv[t]=!0:(Ov[t]=!0,!1)}function fI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hI(t,e,n,r){if(e===null||typeof e>"u"||fI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var tm=/[\-:]([a-z])/g;function nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tm,nm);ft[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tm,nm);ft[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tm,nm);ft[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rm(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hI(e,n,i,r)&&(n=null),r||i===null?dI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hr=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$l=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),g1=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),ph=Symbol.for("react.suspense_list"),sm=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),v1=Symbol.for("react.offscreen"),Dv=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=Dv&&t[Dv]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Zd;function Hs(t){if(Zd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zd=e&&e[1]||""}return`
`+Zd+t}var ef=!1;function tf(t,e){if(!t||ef)return"";ef=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ef=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function pI(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=tf(t.type,!1),t;case 11:return t=tf(t.type.render,!1),t;case 1:return t=tf(t.type,!0),t;default:return""}}function mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case no:return"Portal";case fh:return"Profiler";case im:return"StrictMode";case hh:return"Suspense";case ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case g1:return(t.displayName||"Context")+".Consumer";case m1:return(t._context.displayName||"Context")+".Provider";case om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sm:return e=t.displayName||null,e!==null?e:mh(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return mh(t(e))}catch{}}return null}function mI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mh(e);case 8:return e===im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function y1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gI(t){var e=y1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ul(t){t._valueTracker||(t._valueTracker=gI(t))}function _1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=y1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gh(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w1(t,e){e=e.checked,e!=null&&rm(t,"checked",e,!1)}function vh(t,e){w1(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yh(t,e.type,n):e.hasOwnProperty("defaultValue")&&yh(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yh(t,e,n){(e!=="number"||Dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function wo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(Gs(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function b1(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $v(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zl,C1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zl=zl||document.createElement("div"),zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vI=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){vI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function x1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function E1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=x1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yI=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bh(t,e){if(e){if(yI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Sh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=null;function am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xh=null,bo=null,So=null;function Uv(t){if(t=il(t)){if(typeof xh!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Yu(e),xh(t.stateNode,t.type,e))}}function I1(t){bo?So?So.push(t):So=[t]:bo=t}function T1(){if(bo){var t=bo,e=So;if(So=bo=null,Uv(t),e)for(t=0;t<e.length;t++)Uv(e[t])}}function k1(t,e){return t(e)}function R1(){}var nf=!1;function P1(t,e,n){if(nf)return t(e,n);nf=!0;try{return k1(t,e,n)}finally{nf=!1,(bo!==null||So!==null)&&(R1(),T1())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var r=Yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Eh=!1;if(sr)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Eh=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Eh=!1}function _I(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Zs=!1,Mc=null,Lc=!1,Ih=null,wI={onError:function(t){Zs=!0,Mc=t}};function bI(t,e,n,r,i,o,s,a,l){Zs=!1,Mc=null,_I.apply(wI,arguments)}function SI(t,e,n,r,i,o,s,a,l){if(bI.apply(this,arguments),Zs){if(Zs){var c=Mc;Zs=!1,Mc=null}else throw Error(N(198));Lc||(Lc=!0,Ih=c)}}function Vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function N1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zv(t){if(Vi(t)!==t)throw Error(N(188))}function CI(t){var e=t.alternate;if(!e){if(e=Vi(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zv(i),t;if(o===r)return zv(i),e;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function A1(t){return t=CI(t),t!==null?O1(t):null}function O1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O1(t);if(e!==null)return e;t=t.sibling}return null}var j1=Jt.unstable_scheduleCallback,Bv=Jt.unstable_cancelCallback,xI=Jt.unstable_shouldYield,EI=Jt.unstable_requestPaint,$e=Jt.unstable_now,II=Jt.unstable_getCurrentPriorityLevel,lm=Jt.unstable_ImmediatePriority,D1=Jt.unstable_UserBlockingPriority,Fc=Jt.unstable_NormalPriority,TI=Jt.unstable_LowPriority,M1=Jt.unstable_IdlePriority,Hu=null,Ln=null;function kI(t){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Hu,t,void 0,(t.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:NI,RI=Math.log,PI=Math.LN2;function NI(t){return t>>>=0,t===0?32:31-(RI(t)/PI|0)|0}var Bl=64,Vl=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $c(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=qs(a):(o&=s,o!==0&&(r=qs(o)))}else s=n&~i,s!==0?r=qs(s):o!==0&&(r=qs(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-En(e),i=1<<n,r|=t[n],e&=~i;return r}function AI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-En(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=AI(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L1(){var t=Bl;return Bl<<=1,!(Bl&4194240)&&(Bl=64),t}function rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-En(e),t[e]=n}function jI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-En(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function cm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-En(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function F1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $1,um,U1,z1,B1,kh=!1,Wl=[],Or=null,jr=null,Dr=null,_a=new Map,wa=new Map,xr=[],DI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vv(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function Rs(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=il(e),e!==null&&um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MI(t,e,n,r,i){switch(e){case"focusin":return Or=Rs(Or,t,e,n,r,i),!0;case"dragenter":return jr=Rs(jr,t,e,n,r,i),!0;case"mouseover":return Dr=Rs(Dr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return _a.set(o,Rs(_a.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wa.set(o,Rs(wa.get(o)||null,t,e,n,r,i)),!0}return!1}function V1(t){var e=pi(t.target);if(e!==null){var n=Vi(e);if(n!==null){if(e=n.tag,e===13){if(e=N1(n),e!==null){t.blockedOn=e,B1(t.priority,function(){U1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ch=r,n.target.dispatchEvent(r),Ch=null}else return e=il(n),e!==null&&um(e),t.blockedOn=n,!1;e.shift()}return!0}function Wv(t,e,n){fc(t)&&n.delete(e)}function LI(){kh=!1,Or!==null&&fc(Or)&&(Or=null),jr!==null&&fc(jr)&&(jr=null),Dr!==null&&fc(Dr)&&(Dr=null),_a.forEach(Wv),wa.forEach(Wv)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,kh||(kh=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,LI)))}function ba(t){function e(i){return Ps(i,t)}if(0<Wl.length){Ps(Wl[0],t);for(var n=1;n<Wl.length;n++){var r=Wl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&Ps(Or,t),jr!==null&&Ps(jr,t),Dr!==null&&Ps(Dr,t),_a.forEach(e),wa.forEach(e),n=0;n<xr.length;n++)r=xr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)V1(n),n.blockedOn===null&&xr.shift()}var Co=hr.ReactCurrentBatchConfig,Uc=!0;function FI(t,e,n,r){var i=fe,o=Co.transition;Co.transition=null;try{fe=1,dm(t,e,n,r)}finally{fe=i,Co.transition=o}}function $I(t,e,n,r){var i=fe,o=Co.transition;Co.transition=null;try{fe=4,dm(t,e,n,r)}finally{fe=i,Co.transition=o}}function dm(t,e,n,r){if(Uc){var i=Rh(t,e,n,r);if(i===null)pf(t,e,r,zc,n),Vv(t,r);else if(MI(i,t,e,n,r))r.stopPropagation();else if(Vv(t,r),e&4&&-1<DI.indexOf(t)){for(;i!==null;){var o=il(i);if(o!==null&&$1(o),o=Rh(t,e,n,r),o===null&&pf(t,e,r,zc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else pf(t,e,r,null,n)}}var zc=null;function Rh(t,e,n,r){if(zc=null,t=am(r),t=pi(t),t!==null)if(e=Vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=N1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zc=t,null}function W1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(II()){case lm:return 1;case D1:return 4;case Fc:case TI:return 16;case M1:return 536870912;default:return 16}default:return 16}}var Pr=null,fm=null,hc=null;function H1(){if(hc)return hc;var t,e=fm,n=e.length,r,i="value"in Pr?Pr.value:Pr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return hc=i.slice(t,1<r?1-r:void 0)}function pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function Hv(){return!1}function Zt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Hl:Hv,this.isPropagationStopped=Hv,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hm=Zt(as),rl=Ne({},as,{view:0,detail:0}),UI=Zt(rl),of,sf,Ns,Gu=Ne({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(of=t.screenX-Ns.screenX,sf=t.screenY-Ns.screenY):sf=of=0,Ns=t),of)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),Gv=Zt(Gu),zI=Ne({},Gu,{dataTransfer:0}),BI=Zt(zI),VI=Ne({},rl,{relatedTarget:0}),af=Zt(VI),WI=Ne({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),HI=Zt(WI),GI=Ne({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qI=Zt(GI),KI=Ne({},as,{data:0}),qv=Zt(KI),YI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JI[t])?!!e[t]:!1}function pm(){return XI}var ZI=Ne({},rl,{key:function(t){if(t.key){var e=YI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pm,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eT=Zt(ZI),tT=Ne({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kv=Zt(tT),nT=Ne({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pm}),rT=Zt(nT),iT=Ne({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),oT=Zt(iT),sT=Ne({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aT=Zt(sT),lT=[9,13,27,32],mm=sr&&"CompositionEvent"in window,ea=null;sr&&"documentMode"in document&&(ea=document.documentMode);var cT=sr&&"TextEvent"in window&&!ea,G1=sr&&(!mm||ea&&8<ea&&11>=ea),Yv=String.fromCharCode(32),Qv=!1;function q1(t,e){switch(t){case"keyup":return lT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function uT(t,e){switch(t){case"compositionend":return K1(e);case"keypress":return e.which!==32?null:(Qv=!0,Yv);case"textInput":return t=e.data,t===Yv&&Qv?null:t;default:return null}}function dT(t,e){if(io)return t==="compositionend"||!mm&&q1(t,e)?(t=H1(),hc=fm=Pr=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G1&&e.locale!=="ko"?null:e.data;default:return null}}var fT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fT[t.type]:e==="textarea"}function Y1(t,e,n,r){I1(r),e=Bc(e,"onChange"),0<e.length&&(n=new hm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ta=null,Sa=null;function hT(t){sw(t,0)}function qu(t){var e=ao(t);if(_1(e))return t}function pT(t,e){if(t==="change")return e}var Q1=!1;if(sr){var lf;if(sr){var cf="oninput"in document;if(!cf){var Xv=document.createElement("div");Xv.setAttribute("oninput","return;"),cf=typeof Xv.oninput=="function"}lf=cf}else lf=!1;Q1=lf&&(!document.documentMode||9<document.documentMode)}function Zv(){ta&&(ta.detachEvent("onpropertychange",J1),Sa=ta=null)}function J1(t){if(t.propertyName==="value"&&qu(Sa)){var e=[];Y1(e,Sa,t,am(t)),P1(hT,e)}}function mT(t,e,n){t==="focusin"?(Zv(),ta=e,Sa=n,ta.attachEvent("onpropertychange",J1)):t==="focusout"&&Zv()}function gT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qu(Sa)}function vT(t,e){if(t==="click")return qu(e)}function yT(t,e){if(t==="input"||t==="change")return qu(e)}function _T(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:_T;function Ca(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dh.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function ey(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ty(t,e){var n=ey(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ey(n)}}function X1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z1(){for(var t=window,e=Dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dc(t.document)}return e}function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wT(t){var e=Z1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X1(n.ownerDocument.documentElement,n)){if(r!==null&&gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=ty(n,o);var s=ty(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bT=sr&&"documentMode"in document&&11>=document.documentMode,oo=null,Ph=null,na=null,Nh=!1;function ny(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nh||oo==null||oo!==Dc(r)||(r=oo,"selectionStart"in r&&gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),na&&Ca(na,r)||(na=r,r=Bc(Ph,"onSelect"),0<r.length&&(e=new hm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=oo)))}function Gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var so={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},uf={},ew={};sr&&(ew=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Ku(t){if(uf[t])return uf[t];if(!so[t])return t;var e=so[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ew)return uf[t]=e[n];return t}var tw=Ku("animationend"),nw=Ku("animationiteration"),rw=Ku("animationstart"),iw=Ku("transitionend"),ow=new Map,ry="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(t,e){ow.set(t,e),Bi(e,[t])}for(var df=0;df<ry.length;df++){var ff=ry[df],ST=ff.toLowerCase(),CT=ff[0].toUpperCase()+ff.slice(1);oi(ST,"on"+CT)}oi(tw,"onAnimationEnd");oi(nw,"onAnimationIteration");oi(rw,"onAnimationStart");oi("dblclick","onDoubleClick");oi("focusin","onFocus");oi("focusout","onBlur");oi(iw,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function iy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,SI(r,e,void 0,t),t.currentTarget=null}function sw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;iy(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;iy(i,a,c),o=l}}}if(Lc)throw t=Ih,Lc=!1,Ih=null,t}function we(t,e){var n=e[Mh];n===void 0&&(n=e[Mh]=new Set);var r=t+"__bubble";n.has(r)||(aw(e,t,2,!1),n.add(r))}function hf(t,e,n){var r=0;e&&(r|=4),aw(n,t,r,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[ql]){t[ql]=!0,p1.forEach(function(n){n!=="selectionchange"&&(xT.has(n)||hf(n,!1,t),hf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,hf("selectionchange",!1,e))}}function aw(t,e,n,r){switch(W1(e)){case 1:var i=FI;break;case 4:i=$I;break;default:i=dm}n=i.bind(null,e,n,t),i=void 0,!Eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=pi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}P1(function(){var c=o,f=am(n),u=[];e:{var h=ow.get(t);if(h!==void 0){var p=hm,v=t;switch(t){case"keypress":if(pc(n)===0)break e;case"keydown":case"keyup":p=eT;break;case"focusin":v="focus",p=af;break;case"focusout":v="blur",p=af;break;case"beforeblur":case"afterblur":p=af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=BI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rT;break;case tw:case nw:case rw:p=HI;break;case iw:p=oT;break;case"scroll":p=UI;break;case"wheel":p=aT;break;case"copy":case"cut":case"paste":p=qI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kv}var y=(e&4)!==0,x=!y&&t==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,w;m!==null;){w=m;var _=w.stateNode;if(w.tag===5&&_!==null&&(w=_,g!==null&&(_=ya(m,g),_!=null&&y.push(Ea(m,_,w)))),x)break;m=m.return}0<y.length&&(h=new p(h,v,null,n,f),u.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Ch&&(v=n.relatedTarget||n.fromElement)&&(pi(v)||v[ar]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?pi(v):null,v!==null&&(x=Vi(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=Gv,_="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Kv,_="onPointerLeave",g="onPointerEnter",m="pointer"),x=p==null?h:ao(p),w=v==null?h:ao(v),h=new y(_,m+"leave",p,n,f),h.target=x,h.relatedTarget=w,_=null,pi(f)===c&&(y=new y(g,m+"enter",v,n,f),y.target=w,y.relatedTarget=x,_=y),x=_,p&&v)t:{for(y=p,g=v,m=0,w=y;w;w=Xi(w))m++;for(w=0,_=g;_;_=Xi(_))w++;for(;0<m-w;)y=Xi(y),m--;for(;0<w-m;)g=Xi(g),w--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=Xi(y),g=Xi(g)}y=null}else y=null;p!==null&&oy(u,h,p,y,!1),v!==null&&x!==null&&oy(u,x,v,y,!0)}}e:{if(h=c?ao(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=pT;else if(Jv(h))if(Q1)E=yT;else{E=gT;var k=mT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=vT);if(E&&(E=E(t,c))){Y1(u,E,n,f);break e}k&&k(t,h,c),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&yh(h,"number",h.value)}switch(k=c?ao(c):window,t){case"focusin":(Jv(k)||k.contentEditable==="true")&&(oo=k,Ph=c,na=null);break;case"focusout":na=Ph=oo=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,ny(u,n,f);break;case"selectionchange":if(bT)break;case"keydown":case"keyup":ny(u,n,f)}var T;if(mm)e:{switch(t){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else io?q1(t,n)&&(j="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(G1&&n.locale!=="ko"&&(io||j!=="onCompositionStart"?j==="onCompositionEnd"&&io&&(T=H1()):(Pr=f,fm="value"in Pr?Pr.value:Pr.textContent,io=!0)),k=Bc(c,j),0<k.length&&(j=new qv(j,t,null,n,f),u.push({event:j,listeners:k}),T?j.data=T:(T=K1(n),T!==null&&(j.data=T)))),(T=cT?uT(t,n):dT(t,n))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(f=new qv("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=T))}sw(u,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ya(t,n),o!=null&&r.unshift(Ea(t,o,i)),o=ya(t,e),o!=null&&r.push(Ea(t,o,i))),t=t.return}return r}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oy(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ya(n,o),l!=null&&s.unshift(Ea(n,l,a))):i||(l=ya(n,o),l!=null&&s.push(Ea(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var ET=/\r\n?/g,IT=/\u0000|\uFFFD/g;function sy(t){return(typeof t=="string"?t:""+t).replace(ET,`
`).replace(IT,"")}function Kl(t,e,n){if(e=sy(e),sy(t)!==e&&n)throw Error(N(425))}function Vc(){}var Ah=null,Oh=null;function jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dh=typeof setTimeout=="function"?setTimeout:void 0,TT=typeof clearTimeout=="function"?clearTimeout:void 0,ay=typeof Promise=="function"?Promise:void 0,kT=typeof queueMicrotask=="function"?queueMicrotask:typeof ay<"u"?function(t){return ay.resolve(null).then(t).catch(RT)}:Dh;function RT(t){setTimeout(function(){throw t})}function mf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ba(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ba(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ly(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),Mn="__reactFiber$"+ls,Ia="__reactProps$"+ls,ar="__reactContainer$"+ls,Mh="__reactEvents$"+ls,PT="__reactListeners$"+ls,NT="__reactHandles$"+ls;function pi(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ar]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ly(t);t!==null;){if(n=t[Mn])return n;t=ly(t)}return e}t=n,n=t.parentNode}return null}function il(t){return t=t[Mn]||t[ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Yu(t){return t[Ia]||null}var Lh=[],lo=-1;function si(t){return{current:t}}function Se(t){0>lo||(t.current=Lh[lo],Lh[lo]=null,lo--)}function _e(t,e){lo++,Lh[lo]=t.current,t.current=e}var Yr={},_t=si(Yr),Ut=si(!1),Ti=Yr;function jo(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function zt(t){return t=t.childContextTypes,t!=null}function Wc(){Se(Ut),Se(_t)}function cy(t,e,n){if(_t.current!==Yr)throw Error(N(168));_e(_t,e),_e(Ut,n)}function lw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,mI(t)||"Unknown",i));return Ne({},n,r)}function Hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,Ti=_t.current,_e(_t,t),_e(Ut,Ut.current),!0}function uy(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=lw(t,e,Ti),r.__reactInternalMemoizedMergedChildContext=t,Se(Ut),Se(_t),_e(_t,t)):Se(Ut),_e(Ut,n)}var Gn=null,Qu=!1,gf=!1;function cw(t){Gn===null?Gn=[t]:Gn.push(t)}function AT(t){Qu=!0,cw(t)}function ai(){if(!gf&&Gn!==null){gf=!0;var t=0,e=fe;try{var n=Gn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gn=null,Qu=!1}catch(i){throw Gn!==null&&(Gn=Gn.slice(t+1)),j1(lm,ai),i}finally{fe=e,gf=!1}}return null}var co=[],uo=0,Gc=null,qc=0,rn=[],on=0,ki=null,Kn=1,Yn="";function ci(t,e){co[uo++]=qc,co[uo++]=Gc,Gc=t,qc=e}function uw(t,e,n){rn[on++]=Kn,rn[on++]=Yn,rn[on++]=ki,ki=t;var r=Kn;t=Yn;var i=32-En(r)-1;r&=~(1<<i),n+=1;var o=32-En(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Kn=1<<32-En(e)+i|n<<i|r,Yn=o+t}else Kn=1<<o|n<<i|r,Yn=t}function vm(t){t.return!==null&&(ci(t,1),uw(t,1,0))}function ym(t){for(;t===Gc;)Gc=co[--uo],co[uo]=null,qc=co[--uo],co[uo]=null;for(;t===ki;)ki=rn[--on],rn[on]=null,Yn=rn[--on],rn[on]=null,Kn=rn[--on],rn[on]=null}var Yt=null,Kt=null,Ie=!1,Sn=null;function dw(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,Kt=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ki!==null?{id:Kn,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,Kt=null,!0):!1;default:return!1}}function Fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $h(t){if(Ie){var e=Kt;if(e){var n=e;if(!dy(t,e)){if(Fh(t))throw Error(N(418));e=Mr(n.nextSibling);var r=Yt;e&&dy(t,e)?dw(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Yt=t)}}else{if(Fh(t))throw Error(N(418));t.flags=t.flags&-4097|2,Ie=!1,Yt=t}}}function fy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function Yl(t){if(t!==Yt)return!1;if(!Ie)return fy(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jh(t.type,t.memoizedProps)),e&&(e=Kt)){if(Fh(t))throw fw(),Error(N(418));for(;e;)dw(t,e),e=Mr(e.nextSibling)}if(fy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Yt?Mr(t.stateNode.nextSibling):null;return!0}function fw(){for(var t=Kt;t;)t=Mr(t.nextSibling)}function Do(){Kt=Yt=null,Ie=!1}function _m(t){Sn===null?Sn=[t]:Sn.push(t)}var OT=hr.ReactCurrentBatchConfig;function _n(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Kc=si(null),Yc=null,fo=null,wm=null;function bm(){wm=fo=Yc=null}function Sm(t){var e=Kc.current;Se(Kc),t._currentValue=e}function Uh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xo(t,e){Yc=t,wm=fo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(wm!==t)if(t={context:t,memoizedValue:e,next:null},fo===null){if(Yc===null)throw Error(N(308));fo=t,Yc.dependencies={lanes:0,firstContext:t}}else fo=fo.next=t;return e}var mi=null;function Cm(t){mi===null?mi=[t]:mi.push(t)}function hw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cm(e)):(n.next=i.next,i.next=n),e.interleaved=n,lr(t,r)}function lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function xm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,lr(t,n)}return i=r.interleaved,i===null?(e.next=e,Cm(r)):(e.next=i.next,i.next=e),r.interleaved=e,lr(t,n)}function mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}function hy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qc(t,e,n,r){var i=t.updateQueue;Sr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(o!==null){var u=i.baseState;s=0,f=c=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){u=v.call(p,u,h);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,u,h):v,h==null)break e;u=Ne({},u,h);break e;case 2:Sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=u):f=f.next=p,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(f===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Pi|=s,t.lanes=s,t.memoizedState=u}}function py(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var mw=new h1.Component().refs;function zh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?Vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=$r(t),o=Zn(r,i);o.payload=e,n!=null&&(o.callback=n),e=Lr(t,o,i),e!==null&&(In(e,t,i,r),mc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=$r(t),o=Zn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Lr(t,o,i),e!==null&&(In(e,t,i,r),mc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=$r(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(In(e,t,r,n),mc(e,t,r))}};function my(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,r)||!Ca(i,o):!0}function gw(t,e,n){var r=!1,i=Yr,o=e.contextType;return typeof o=="object"&&o!==null?o=un(o):(i=zt(e)?Ti:_t.current,r=e.contextTypes,o=(r=r!=null)?jo(t,i):Yr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function gy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function Bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=mw,xm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=un(o):(o=zt(e)?Ti:_t.current,i.context=jo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(zh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ju.enqueueReplaceState(i,i.state,null),Qc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===mw&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function Ql(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vy(t){var e=t._init;return e(t._payload)}function vw(t){function e(g,m){if(t){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Ur(g,m),g.index=0,g.sibling=null,g}function o(g,m,w){return g.index=w,t?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,w,_){return m===null||m.tag!==6?(m=Cf(w,g.mode,_),m.return=g,m):(m=i(m,w),m.return=g,m)}function l(g,m,w,_){var E=w.type;return E===ro?f(g,m,w.props.children,_,w.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===br&&vy(E)===m.type)?(_=i(m,w.props),_.ref=As(g,m,w),_.return=g,_):(_=bc(w.type,w.key,w.props,null,g.mode,_),_.ref=As(g,m,w),_.return=g,_)}function c(g,m,w,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=xf(w,g.mode,_),m.return=g,m):(m=i(m,w.children||[]),m.return=g,m)}function f(g,m,w,_,E){return m===null||m.tag!==7?(m=Si(w,g.mode,_,E),m.return=g,m):(m=i(m,w),m.return=g,m)}function u(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Cf(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case $l:return w=bc(m.type,m.key,m.props,null,g.mode,w),w.ref=As(g,null,m),w.return=g,w;case no:return m=xf(m,g.mode,w),m.return=g,m;case br:var _=m._init;return u(g,_(m._payload),w)}if(Gs(m)||Ts(m))return m=Si(m,g.mode,w,null),m.return=g,m;Ql(g,m)}return null}function h(g,m,w,_){var E=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return E!==null?null:a(g,m,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $l:return w.key===E?l(g,m,w,_):null;case no:return w.key===E?c(g,m,w,_):null;case br:return E=w._init,h(g,m,E(w._payload),_)}if(Gs(w)||Ts(w))return E!==null?null:f(g,m,w,_,null);Ql(g,w)}return null}function p(g,m,w,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(w)||null,a(m,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $l:return g=g.get(_.key===null?w:_.key)||null,l(m,g,_,E);case no:return g=g.get(_.key===null?w:_.key)||null,c(m,g,_,E);case br:var k=_._init;return p(g,m,w,k(_._payload),E)}if(Gs(_)||Ts(_))return g=g.get(w)||null,f(m,g,_,E,null);Ql(m,_)}return null}function v(g,m,w,_){for(var E=null,k=null,T=m,j=m=0,M=null;T!==null&&j<w.length;j++){T.index>j?(M=T,T=null):M=T.sibling;var U=h(g,T,w[j],_);if(U===null){T===null&&(T=M);break}t&&T&&U.alternate===null&&e(g,T),m=o(U,m,j),k===null?E=U:k.sibling=U,k=U,T=M}if(j===w.length)return n(g,T),Ie&&ci(g,j),E;if(T===null){for(;j<w.length;j++)T=u(g,w[j],_),T!==null&&(m=o(T,m,j),k===null?E=T:k.sibling=T,k=T);return Ie&&ci(g,j),E}for(T=r(g,T);j<w.length;j++)M=p(T,g,j,w[j],_),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?j:M.key),m=o(M,m,j),k===null?E=M:k.sibling=M,k=M);return t&&T.forEach(function(Fe){return e(g,Fe)}),Ie&&ci(g,j),E}function y(g,m,w,_){var E=Ts(w);if(typeof E!="function")throw Error(N(150));if(w=E.call(w),w==null)throw Error(N(151));for(var k=E=null,T=m,j=m=0,M=null,U=w.next();T!==null&&!U.done;j++,U=w.next()){T.index>j?(M=T,T=null):M=T.sibling;var Fe=h(g,T,U.value,_);if(Fe===null){T===null&&(T=M);break}t&&T&&Fe.alternate===null&&e(g,T),m=o(Fe,m,j),k===null?E=Fe:k.sibling=Fe,k=Fe,T=M}if(U.done)return n(g,T),Ie&&ci(g,j),E;if(T===null){for(;!U.done;j++,U=w.next())U=u(g,U.value,_),U!==null&&(m=o(U,m,j),k===null?E=U:k.sibling=U,k=U);return Ie&&ci(g,j),E}for(T=r(g,T);!U.done;j++,U=w.next())U=p(T,g,j,U.value,_),U!==null&&(t&&U.alternate!==null&&T.delete(U.key===null?j:U.key),m=o(U,m,j),k===null?E=U:k.sibling=U,k=U);return t&&T.forEach(function(O){return e(g,O)}),Ie&&ci(g,j),E}function x(g,m,w,_){if(typeof w=="object"&&w!==null&&w.type===ro&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case $l:e:{for(var E=w.key,k=m;k!==null;){if(k.key===E){if(E=w.type,E===ro){if(k.tag===7){n(g,k.sibling),m=i(k,w.props.children),m.return=g,g=m;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===br&&vy(E)===k.type){n(g,k.sibling),m=i(k,w.props),m.ref=As(g,k,w),m.return=g,g=m;break e}n(g,k);break}else e(g,k);k=k.sibling}w.type===ro?(m=Si(w.props.children,g.mode,_,w.key),m.return=g,g=m):(_=bc(w.type,w.key,w.props,null,g.mode,_),_.ref=As(g,m,w),_.return=g,g=_)}return s(g);case no:e:{for(k=w.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(g,m.sibling),m=i(m,w.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=xf(w,g.mode,_),m.return=g,g=m}return s(g);case br:return k=w._init,x(g,m,k(w._payload),_)}if(Gs(w))return v(g,m,w,_);if(Ts(w))return y(g,m,w,_);Ql(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,w),m.return=g,g=m):(n(g,m),m=Cf(w,g.mode,_),m.return=g,g=m),s(g)):n(g,m)}return x}var Mo=vw(!0),yw=vw(!1),ol={},Fn=si(ol),Ta=si(ol),ka=si(ol);function gi(t){if(t===ol)throw Error(N(174));return t}function Em(t,e){switch(_e(ka,e),_e(Ta,t),_e(Fn,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wh(e,t)}Se(Fn),_e(Fn,e)}function Lo(){Se(Fn),Se(Ta),Se(ka)}function _w(t){gi(ka.current);var e=gi(Fn.current),n=wh(e,t.type);e!==n&&(_e(Ta,t),_e(Fn,n))}function Im(t){Ta.current===t&&(Se(Fn),Se(Ta))}var ke=si(0);function Jc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vf=[];function Tm(){for(var t=0;t<vf.length;t++)vf[t]._workInProgressVersionPrimary=null;vf.length=0}var gc=hr.ReactCurrentDispatcher,yf=hr.ReactCurrentBatchConfig,Ri=0,Pe=null,Ge=null,tt=null,Xc=!1,ra=!1,Ra=0,jT=0;function mt(){throw Error(N(321))}function km(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function Rm(t,e,n,r,i,o){if(Ri=o,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=t===null||t.memoizedState===null?FT:$T,t=n(r,i),ra){o=0;do{if(ra=!1,Ra=0,25<=o)throw Error(N(301));o+=1,tt=Ge=null,e.updateQueue=null,gc.current=UT,t=n(r,i)}while(ra)}if(gc.current=Zc,e=Ge!==null&&Ge.next!==null,Ri=0,tt=Ge=Pe=null,Xc=!1,e)throw Error(N(300));return t}function Pm(){var t=Ra!==0;return Ra=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Pe.memoizedState=tt=t:tt=tt.next=t,tt}function dn(){if(Ge===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=tt===null?Pe.memoizedState:tt.next;if(e!==null)tt=e,Ge=t;else{if(t===null)throw Error(N(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},tt===null?Pe.memoizedState=tt=t:tt=tt.next=t}return tt}function Pa(t,e){return typeof e=="function"?e(t):e}function _f(t){var e=dn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var f=c.lane;if((Ri&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,s=r):l=l.next=u,Pe.lanes|=f,Pi|=f}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Rn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Pe.lanes|=o,Pi|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wf(t){var e=dn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Rn(o,e.memoizedState)||(Ft=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function ww(){}function bw(t,e){var n=Pe,r=dn(),i=e(),o=!Rn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ft=!0),r=r.queue,Nm(xw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Na(9,Cw.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(N(349));Ri&30||Sw(n,e,i)}return i}function Sw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cw(t,e,n,r){e.value=n,e.getSnapshot=r,Ew(e)&&Iw(t)}function xw(t,e,n){return n(function(){Ew(e)&&Iw(t)})}function Ew(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function Iw(t){var e=lr(t,1);e!==null&&In(e,t,1,-1)}function yy(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=LT.bind(null,Pe,t),[e.memoizedState,t]}function Na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Tw(){return dn().memoizedState}function vc(t,e,n,r){var i=On();Pe.flags|=t,i.memoizedState=Na(1|e,n,void 0,r===void 0?null:r)}function Xu(t,e,n,r){var i=dn();r=r===void 0?null:r;var o=void 0;if(Ge!==null){var s=Ge.memoizedState;if(o=s.destroy,r!==null&&km(r,s.deps)){i.memoizedState=Na(e,n,o,r);return}}Pe.flags|=t,i.memoizedState=Na(1|e,n,o,r)}function _y(t,e){return vc(8390656,8,t,e)}function Nm(t,e){return Xu(2048,8,t,e)}function kw(t,e){return Xu(4,2,t,e)}function Rw(t,e){return Xu(4,4,t,e)}function Pw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nw(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4,4,Pw.bind(null,e,t),n)}function Am(){}function Aw(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&km(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ow(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&km(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jw(t,e,n){return Ri&21?(Rn(n,e)||(n=L1(),Pe.lanes|=n,Pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function DT(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=yf.transition;yf.transition={};try{t(!1),e()}finally{fe=n,yf.transition=r}}function Dw(){return dn().memoizedState}function MT(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mw(t))Lw(e,n);else if(n=hw(t,e,n,r),n!==null){var i=Et();In(n,t,r,i),Fw(n,e,r)}}function LT(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mw(t))Lw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,s)){var l=e.interleaved;l===null?(i.next=i,Cm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=hw(t,e,i,r),n!==null&&(i=Et(),In(n,t,r,i),Fw(n,e,r))}}function Mw(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function Lw(t,e){ra=Xc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}var Zc={readContext:un,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},FT={readContext:un,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:_y,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vc(4194308,4,Pw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vc(4194308,4,t,e)},useInsertionEffect:function(t,e){return vc(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=On();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MT.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:yy,useDebugValue:Am,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=yy(!1),e=t[0];return t=DT.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=On();if(Ie){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),ot===null)throw Error(N(349));Ri&30||Sw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,_y(xw.bind(null,r,o,t),[t]),r.flags|=2048,Na(9,Cw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=On(),e=ot.identifierPrefix;if(Ie){var n=Yn,r=Kn;n=(r&~(1<<32-En(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$T={readContext:un,useCallback:Aw,useContext:un,useEffect:Nm,useImperativeHandle:Nw,useInsertionEffect:kw,useLayoutEffect:Rw,useMemo:Ow,useReducer:_f,useRef:Tw,useState:function(){return _f(Pa)},useDebugValue:Am,useDeferredValue:function(t){var e=dn();return jw(e,Ge.memoizedState,t)},useTransition:function(){var t=_f(Pa)[0],e=dn().memoizedState;return[t,e]},useMutableSource:ww,useSyncExternalStore:bw,useId:Dw,unstable_isNewReconciler:!1},UT={readContext:un,useCallback:Aw,useContext:un,useEffect:Nm,useImperativeHandle:Nw,useInsertionEffect:kw,useLayoutEffect:Rw,useMemo:Ow,useReducer:wf,useRef:Tw,useState:function(){return wf(Pa)},useDebugValue:Am,useDeferredValue:function(t){var e=dn();return Ge===null?e.memoizedState=t:jw(e,Ge.memoizedState,t)},useTransition:function(){var t=wf(Pa)[0],e=dn().memoizedState;return[t,e]},useMutableSource:ww,useSyncExternalStore:bw,useId:Dw,unstable_isNewReconciler:!1};function Fo(t,e){try{var n="",r=e;do n+=pI(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function bf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zT=typeof WeakMap=="function"?WeakMap:Map;function $w(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tu||(tu=!0,Zh=r),Vh(t,e)},n}function Uw(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vh(t,e),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function wy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tk.bind(null,t,e,n),e.then(t,t))}function by(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var BT=hr.ReactCurrentOwner,Ft=!1;function Ct(t,e,n,r){e.child=t===null?yw(e,null,n,r):Mo(e,t.child,n,r)}function Cy(t,e,n,r,i){n=n.render;var o=e.ref;return xo(e,i),r=Rm(t,e,n,r,o,i),n=Pm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Ie&&n&&vm(e),e.flags|=1,Ct(t,e,r,i),e.child)}function xy(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Um(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,zw(t,e,o,r,i)):(t=bc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(s,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=Ur(o,r),t.ref=e.ref,t.return=e,e.child=t}function zw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ca(o,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,cr(t,e,i)}return Wh(t,e,n,r,i)}function Bw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(po,Ht),Ht|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(po,Ht),Ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(po,Ht),Ht|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,_e(po,Ht),Ht|=r;return Ct(t,e,i,n),e.child}function Vw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wh(t,e,n,r,i){var o=zt(n)?Ti:_t.current;return o=jo(e,o),xo(e,i),n=Rm(t,e,n,r,o,i),r=Pm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Ie&&r&&vm(e),e.flags|=1,Ct(t,e,n,i),e.child)}function Ey(t,e,n,r,i){if(zt(n)){var o=!0;Hc(e)}else o=!1;if(xo(e,i),e.stateNode===null)yc(t,e),gw(e,n,r),Bh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=un(c):(c=zt(n)?Ti:_t.current,c=jo(e,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&gy(e,s,r,c),Sr=!1;var h=e.memoizedState;s.state=h,Qc(e,r,s,i),l=e.memoizedState,a!==r||h!==l||Ut.current||Sr?(typeof f=="function"&&(zh(e,n,f,r),l=e.memoizedState),(a=Sr||my(e,n,a,r,h,l,c))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,pw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:_n(e.type,a),s.props=c,u=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=un(l):(l=zt(n)?Ti:_t.current,l=jo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==u||h!==l)&&gy(e,s,r,l),Sr=!1,h=e.memoizedState,s.state=h,Qc(e,r,s,i);var v=e.memoizedState;a!==u||h!==v||Ut.current||Sr?(typeof p=="function"&&(zh(e,n,p,r),v=e.memoizedState),(c=Sr||my(e,n,c,r,h,v,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Hh(t,e,n,r,o,i)}function Hh(t,e,n,r,i,o){Vw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&uy(e,n,!1),cr(t,e,o);r=e.stateNode,BT.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Mo(e,t.child,null,o),e.child=Mo(e,null,a,o)):Ct(t,e,a,o),e.memoizedState=r.state,i&&uy(e,n,!0),e.child}function Ww(t){var e=t.stateNode;e.pendingContext?cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cy(t,e.context,!1),Em(t,e.containerInfo)}function Iy(t,e,n,r,i){return Do(),_m(i),e.flags|=256,Ct(t,e,n,r),e.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hw(t,e,n){var r=e.pendingProps,i=ke.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(ke,i&1),t===null)return $h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=td(s,r,0,null),t=Si(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=qh(n),e.memoizedState=Gh,t):Om(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return VT(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ur(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ur(a,o):(o=Si(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?qh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Gh,r}return o=t.child,t=o.sibling,r=Ur(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Om(t,e){return e=td({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jl(t,e,n,r){return r!==null&&_m(r),Mo(e,t.child,null,n),t=Om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VT(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=bf(Error(N(422))),Jl(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=td({mode:"visible",children:r.children},i,0,null),o=Si(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Mo(e,t.child,null,s),e.child.memoizedState=qh(s),e.memoizedState=Gh,o);if(!(e.mode&1))return Jl(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(N(419)),r=bf(o,r,void 0),Jl(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ft||a){if(r=ot,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,lr(t,i),In(r,t,i,-1))}return $m(),r=bf(Error(N(421))),Jl(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nk.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Kt=Mr(i.nextSibling),Yt=e,Ie=!0,Sn=null,t!==null&&(rn[on++]=Kn,rn[on++]=Yn,rn[on++]=ki,Kn=t.id,Yn=t.overflow,ki=e),e=Om(e,r.children),e.flags|=4096,e)}function Ty(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uh(t.return,e,n)}function Sf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Gw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Ct(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ty(t,n,e);else if(t.tag===19)Ty(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Jc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Jc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sf(e,!0,n,null,o);break;case"together":Sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WT(t,e,n){switch(e.tag){case 3:Ww(e),Do();break;case 5:_w(e);break;case 1:zt(e.type)&&Hc(e);break;case 4:Em(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Kc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?Hw(t,e,n):(_e(ke,ke.current&1),t=cr(t,e,n),t!==null?t.sibling:null);_e(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,Bw(t,e,n)}return cr(t,e,n)}var qw,Kh,Kw,Yw;qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kh=function(){};Kw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gi(Fn.current);var o=null;switch(n){case"input":i=gh(t,i),r=gh(t,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=_h(t,i),r=_h(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vc)}bh(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ga.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ga.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&we("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Yw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Os(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function HT(t,e,n){var r=e.pendingProps;switch(ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return zt(e.type)&&Wc(),gt(e),null;case 3:return r=e.stateNode,Lo(),Se(Ut),Se(_t),Tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Sn!==null&&(np(Sn),Sn=null))),Kh(t,e),gt(e),null;case 5:Im(e);var i=gi(ka.current);if(n=e.type,t!==null&&e.stateNode!=null)Kw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return gt(e),null}if(t=gi(Fn.current),Yl(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Mn]=e,r[Ia]=o,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Ks.length;i++)we(Ks[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Mv(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":Fv(r,o),we("invalid",r)}bh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),i=["children",""+a]):ga.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&we("scroll",r)}switch(n){case"input":Ul(r),Lv(r,o,!0);break;case"textarea":Ul(r),$v(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Mn]=e,t[Ia]=r,qw(t,e,!1,!1),e.stateNode=t;e:{switch(s=Sh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ks.length;i++)we(Ks[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Mv(t,r),i=gh(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),we("invalid",t);break;case"textarea":Fv(t,r),i=_h(t,r),we("invalid",t);break;default:i=r}bh(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?E1(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C1(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(t,l):typeof l=="number"&&va(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ga.hasOwnProperty(o)?l!=null&&o==="onScroll"&&we("scroll",t):l!=null&&rm(t,o,l,s))}switch(n){case"input":Ul(t),Lv(t,r,!1);break;case"textarea":Ul(t),$v(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?wo(t,!!r.multiple,o,!1):r.defaultValue!=null&&wo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)Yw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=gi(ka.current),gi(Fn.current),Yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(o=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:Kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Kl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return gt(e),null;case 13:if(Se(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Kt!==null&&e.mode&1&&!(e.flags&128))fw(),Do(),e.flags|=98560,o=!1;else if(o=Yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(N(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Mn]=e}else Do(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),o=!1}else Sn!==null&&(np(Sn),Sn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ye===0&&(Ye=3):$m())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return Lo(),Kh(t,e),t===null&&xa(e.stateNode.containerInfo),gt(e),null;case 10:return Sm(e.type._context),gt(e),null;case 17:return zt(e.type)&&Wc(),gt(e),null;case 19:if(Se(ke),o=e.memoizedState,o===null)return gt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Os(o,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Jc(t),s!==null){for(e.flags|=128,Os(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(ke,ke.current&1|2),e.child}t=t.sibling}o.tail!==null&&$e()>$o&&(e.flags|=128,r=!0,Os(o,!1),e.lanes=4194304)}else{if(!r)if(t=Jc(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ie)return gt(e),null}else 2*$e()-o.renderingStartTime>$o&&n!==1073741824&&(e.flags|=128,r=!0,Os(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=$e(),e.sibling=null,n=ke.current,_e(ke,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return Fm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ht&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function GT(t,e){switch(ym(e),e.tag){case 1:return zt(e.type)&&Wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Lo(),Se(Ut),Se(_t),Tm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Im(e),null;case 13:if(Se(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Do()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(ke),null;case 4:return Lo(),null;case 10:return Sm(e.type._context),null;case 22:case 23:return Fm(),null;case 24:return null;default:return null}}var Xl=!1,vt=!1,qT=typeof WeakSet=="function"?WeakSet:Set,L=null;function ho(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Yh(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var ky=!1;function KT(t,e){if(Ah=Uc,t=Z1(),gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,f=0,u=t,h=null;t:for(;;){for(var p;u!==n||i!==0&&u.nodeType!==3||(a=s+i),u!==o||r!==0&&u.nodeType!==3||(l=s+r),u.nodeType===3&&(s+=u.nodeValue.length),(p=u.firstChild)!==null;)h=u,u=p;for(;;){if(u===t)break t;if(h===n&&++c===i&&(a=s),h===o&&++f===r&&(l=s),(p=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oh={focusedElem:t,selectionRange:n},Uc=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:_n(e.type,y),x);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(_){Oe(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return v=ky,ky=!1,v}function ia(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Yh(e,n,o)}i=i.next}while(i!==r)}}function Zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qw(t){var e=t.alternate;e!==null&&(t.alternate=null,Qw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[Ia],delete e[Mh],delete e[PT],delete e[NT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jw(t){return t.tag===5||t.tag===3||t.tag===4}function Ry(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vc));else if(r!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}function Xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xh(t,e,n),t=t.sibling;t!==null;)Xh(t,e,n),t=t.sibling}var lt=null,wn=!1;function yr(t,e,n){for(n=n.child;n!==null;)Xw(t,e,n),n=n.sibling}function Xw(t,e,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Hu,n)}catch{}switch(n.tag){case 5:vt||ho(n,e);case 6:var r=lt,i=wn;lt=null,yr(t,e,n),lt=r,wn=i,lt!==null&&(wn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(wn?(t=lt,n=n.stateNode,t.nodeType===8?mf(t.parentNode,n):t.nodeType===1&&mf(t,n),ba(t)):mf(lt,n.stateNode));break;case 4:r=lt,i=wn,lt=n.stateNode.containerInfo,wn=!0,yr(t,e,n),lt=r,wn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Yh(n,e,s),i=i.next}while(i!==r)}yr(t,e,n);break;case 1:if(!vt&&(ho(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,yr(t,e,n),vt=r):yr(t,e,n);break;default:yr(t,e,n)}}function Py(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qT),e.forEach(function(r){var i=rk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,wn=!1;break e;case 3:lt=a.stateNode.containerInfo,wn=!0;break e;case 4:lt=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(lt===null)throw Error(N(160));Xw(o,s,i),lt=null,wn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zw(e,t),e=e.sibling}function Zw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yn(e,t),An(t),r&4){try{ia(3,t,t.return),Zu(3,t)}catch(y){Oe(t,t.return,y)}try{ia(5,t,t.return)}catch(y){Oe(t,t.return,y)}}break;case 1:yn(e,t),An(t),r&512&&n!==null&&ho(n,n.return);break;case 5:if(yn(e,t),An(t),r&512&&n!==null&&ho(n,n.return),t.flags&32){var i=t.stateNode;try{va(i,"")}catch(y){Oe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&w1(i,o),Sh(a,s);var c=Sh(a,o);for(s=0;s<l.length;s+=2){var f=l[s],u=l[s+1];f==="style"?E1(i,u):f==="dangerouslySetInnerHTML"?C1(i,u):f==="children"?va(i,u):rm(i,f,u,c)}switch(a){case"input":vh(i,o);break;case"textarea":b1(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?wo(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?wo(i,!!o.multiple,o.defaultValue,!0):wo(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ia]=o}catch(y){Oe(t,t.return,y)}}break;case 6:if(yn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(y){Oe(t,t.return,y)}}break;case 3:if(yn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(y){Oe(t,t.return,y)}break;case 4:yn(e,t),An(t);break;case 13:yn(e,t),An(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mm=$e())),r&4&&Py(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||f,yn(e,t),vt=c):yn(e,t),An(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(L=t,f=t.child;f!==null;){for(u=L=f;L!==null;){switch(h=L,p=h.child,h.tag){case 0:case 11:case 14:case 15:ia(4,h,h.return);break;case 1:ho(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Oe(r,n,y)}}break;case 5:ho(h,h.return);break;case 22:if(h.memoizedState!==null){Ay(u);continue}}p!==null?(p.return=h,L=p):Ay(u)}f=f.sibling}e:for(f=null,u=t;;){if(u.tag===5){if(f===null){f=u;try{i=u.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=u.stateNode,l=u.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x1("display",s))}catch(y){Oe(t,t.return,y)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){Oe(t,t.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:yn(e,t),An(t),r&4&&Py(t);break;case 21:break;default:yn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jw(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(va(i,""),r.flags&=-33);var o=Ry(t);Xh(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ry(t);Jh(t,a,s);break;default:throw Error(N(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YT(t,e,n){L=t,eb(t)}function eb(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Xl;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=Xl;var c=vt;if(Xl=s,(vt=l)&&!c)for(L=i;L!==null;)s=L,l=s.child,s.tag===22&&s.memoizedState!==null?Oy(i):l!==null?(l.return=s,L=l):Oy(i);for(;o!==null;)L=o,eb(o),o=o.sibling;L=i,Xl=a,vt=c}Ny(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Ny(t)}}function Ny(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Zu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&py(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}py(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&ba(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}vt||e.flags&512&&Qh(e)}catch(h){Oe(e,e.return,h)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Ay(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Oy(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zu(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var o=e.return;try{Qh(e)}catch(l){Oe(e,o,l)}break;case 5:var s=e.return;try{Qh(e)}catch(l){Oe(e,s,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var QT=Math.ceil,eu=hr.ReactCurrentDispatcher,jm=hr.ReactCurrentOwner,cn=hr.ReactCurrentBatchConfig,se=0,ot=null,Be=null,ut=0,Ht=0,po=si(0),Ye=0,Aa=null,Pi=0,ed=0,Dm=0,oa=null,Lt=null,Mm=0,$o=1/0,Wn=null,tu=!1,Zh=null,Fr=null,Zl=!1,Nr=null,nu=0,sa=0,ep=null,_c=-1,wc=0;function Et(){return se&6?$e():_c!==-1?_c:_c=$e()}function $r(t){return t.mode&1?se&2&&ut!==0?ut&-ut:OT.transition!==null?(wc===0&&(wc=L1()),wc):(t=fe,t!==0||(t=window.event,t=t===void 0?16:W1(t.type)),t):1}function In(t,e,n,r){if(50<sa)throw sa=0,ep=null,Error(N(185));nl(t,n,r),(!(se&2)||t!==ot)&&(t===ot&&(!(se&2)&&(ed|=n),Ye===4&&Er(t,ut)),Bt(t,r),n===1&&se===0&&!(e.mode&1)&&($o=$e()+500,Qu&&ai()))}function Bt(t,e){var n=t.callbackNode;OI(t,e);var r=$c(t,t===ot?ut:0);if(r===0)n!==null&&Bv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bv(n),e===1)t.tag===0?AT(jy.bind(null,t)):cw(jy.bind(null,t)),kT(function(){!(se&6)&&ai()}),n=null;else{switch(F1(r)){case 1:n=lm;break;case 4:n=D1;break;case 16:n=Fc;break;case 536870912:n=M1;break;default:n=Fc}n=lb(n,tb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tb(t,e){if(_c=-1,wc=0,se&6)throw Error(N(327));var n=t.callbackNode;if(Eo()&&t.callbackNode!==n)return null;var r=$c(t,t===ot?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ru(t,r);else{e=r;var i=se;se|=2;var o=rb();(ot!==t||ut!==e)&&(Wn=null,$o=$e()+500,bi(t,e));do try{ZT();break}catch(a){nb(t,a)}while(1);bm(),eu.current=o,se=i,Be!==null?e=0:(ot=null,ut=0,e=Ye)}if(e!==0){if(e===2&&(i=Th(t),i!==0&&(r=i,e=tp(t,i))),e===1)throw n=Aa,bi(t,0),Er(t,r),Bt(t,$e()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!JT(i)&&(e=ru(t,r),e===2&&(o=Th(t),o!==0&&(r=o,e=tp(t,o))),e===1))throw n=Aa,bi(t,0),Er(t,r),Bt(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:ui(t,Lt,Wn);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=Mm+500-$e(),10<e)){if($c(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dh(ui.bind(null,t,Lt,Wn),e);break}ui(t,Lt,Wn);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-En(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QT(r/1960))-r,10<r){t.timeoutHandle=Dh(ui.bind(null,t,Lt,Wn),r);break}ui(t,Lt,Wn);break;case 5:ui(t,Lt,Wn);break;default:throw Error(N(329))}}}return Bt(t,$e()),t.callbackNode===n?tb.bind(null,t):null}function tp(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&(bi(t,e).flags|=256),t=ru(t,e),t!==2&&(e=Lt,Lt=n,e!==null&&np(e)),t}function np(t){Lt===null?Lt=t:Lt.push.apply(Lt,t)}function JT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Rn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Dm,e&=~ed,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-En(e),r=1<<n;t[n]=-1,e&=~r}}function jy(t){if(se&6)throw Error(N(327));Eo();var e=$c(t,0);if(!(e&1))return Bt(t,$e()),null;var n=ru(t,e);if(t.tag!==0&&n===2){var r=Th(t);r!==0&&(e=r,n=tp(t,r))}if(n===1)throw n=Aa,bi(t,0),Er(t,e),Bt(t,$e()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ui(t,Lt,Wn),Bt(t,$e()),null}function Lm(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&($o=$e()+500,Qu&&ai())}}function Ni(t){Nr!==null&&Nr.tag===0&&!(se&6)&&Eo();var e=se;se|=1;var n=cn.transition,r=fe;try{if(cn.transition=null,fe=1,t)return t()}finally{fe=r,cn.transition=n,se=e,!(se&6)&&ai()}}function Fm(){Ht=po.current,Se(po)}function bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TT(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(ym(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wc();break;case 3:Lo(),Se(Ut),Se(_t),Tm();break;case 5:Im(r);break;case 4:Lo();break;case 13:Se(ke);break;case 19:Se(ke);break;case 10:Sm(r.type._context);break;case 22:case 23:Fm()}n=n.return}if(ot=t,Be=t=Ur(t.current,null),ut=Ht=e,Ye=0,Aa=null,Dm=ed=Pi=0,Lt=oa=null,mi!==null){for(e=0;e<mi.length;e++)if(n=mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}mi=null}return t}function nb(t,e){do{var n=Be;try{if(bm(),gc.current=Zc,Xc){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xc=!1}if(Ri=0,tt=Ge=Pe=null,ra=!1,Ra=0,jm.current=null,n===null||n.return===null){Ye=1,Aa=e,Be=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=by(s);if(p!==null){p.flags&=-257,Sy(p,s,a,o,e),p.mode&1&&wy(o,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){wy(o,c,e),$m();break e}l=Error(N(426))}}else if(Ie&&a.mode&1){var x=by(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Sy(x,s,a,o,e),_m(Fo(l,a));break e}}o=l=Fo(l,a),Ye!==4&&(Ye=2),oa===null?oa=[o]:oa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=$w(o,l,e);hy(o,g);break e;case 1:a=l;var m=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Fr===null||!Fr.has(w)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=Uw(o,a,e);hy(o,_);break e}}o=o.return}while(o!==null)}ob(n)}catch(E){e=E,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(1)}function rb(){var t=eu.current;return eu.current=Zc,t===null?Zc:t}function $m(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),ot===null||!(Pi&268435455)&&!(ed&268435455)||Er(ot,ut)}function ru(t,e){var n=se;se|=2;var r=rb();(ot!==t||ut!==e)&&(Wn=null,bi(t,e));do try{XT();break}catch(i){nb(t,i)}while(1);if(bm(),se=n,eu.current=r,Be!==null)throw Error(N(261));return ot=null,ut=0,Ye}function XT(){for(;Be!==null;)ib(Be)}function ZT(){for(;Be!==null&&!xI();)ib(Be)}function ib(t){var e=ab(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,e===null?ob(t):Be=e,jm.current=null}function ob(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GT(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,Be=null;return}}else if(n=HT(n,e,Ht),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ye===0&&(Ye=5)}function ui(t,e,n){var r=fe,i=cn.transition;try{cn.transition=null,fe=1,ek(t,e,n,r)}finally{cn.transition=i,fe=r}return null}function ek(t,e,n,r){do Eo();while(Nr!==null);if(se&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(jI(t,o),t===ot&&(Be=ot=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zl||(Zl=!0,lb(Fc,function(){return Eo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=cn.transition,cn.transition=null;var s=fe;fe=1;var a=se;se|=4,jm.current=null,KT(t,n),Zw(n,t),wT(Oh),Uc=!!Ah,Oh=Ah=null,t.current=n,YT(n),EI(),se=a,fe=s,cn.transition=o}else t.current=n;if(Zl&&(Zl=!1,Nr=t,nu=i),o=t.pendingLanes,o===0&&(Fr=null),kI(n.stateNode),Bt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tu)throw tu=!1,t=Zh,Zh=null,t;return nu&1&&t.tag!==0&&Eo(),o=t.pendingLanes,o&1?t===ep?sa++:(sa=0,ep=t):sa=0,ai(),null}function Eo(){if(Nr!==null){var t=F1(nu),e=cn.transition,n=fe;try{if(cn.transition=null,fe=16>t?16:t,Nr===null)var r=!1;else{if(t=Nr,Nr=null,nu=0,se&6)throw Error(N(331));var i=se;for(se|=4,L=t.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(L=c;L!==null;){var f=L;switch(f.tag){case 0:case 11:case 15:ia(8,f,o)}var u=f.child;if(u!==null)u.return=f,L=u;else for(;L!==null;){f=L;var h=f.sibling,p=f.return;if(Qw(f),f===c){L=null;break}if(h!==null){h.return=p,L=h;break}L=p}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ia(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,L=g;break e}L=o.return}}var m=t.current;for(L=m;L!==null;){s=L;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,L=w;else e:for(s=m;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zu(9,a)}}catch(E){Oe(a,a.return,E)}if(a===s){L=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,L=_;break e}L=a.return}}if(se=i,ai(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Hu,t)}catch{}r=!0}return r}finally{fe=n,cn.transition=e}}return!1}function Dy(t,e,n){e=Fo(n,e),e=$w(t,e,1),t=Lr(t,e,1),e=Et(),t!==null&&(nl(t,1,e),Bt(t,e))}function Oe(t,e,n){if(t.tag===3)Dy(t,t,n);else for(;e!==null;){if(e.tag===3){Dy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){t=Fo(n,t),t=Uw(e,t,1),e=Lr(e,t,1),t=Et(),e!==null&&(nl(e,1,t),Bt(e,t));break}}e=e.return}}function tk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(ut&n)===n&&(Ye===4||Ye===3&&(ut&130023424)===ut&&500>$e()-Mm?bi(t,0):Dm|=n),Bt(t,e)}function sb(t,e){e===0&&(t.mode&1?(e=Vl,Vl<<=1,!(Vl&130023424)&&(Vl=4194304)):e=1);var n=Et();t=lr(t,e),t!==null&&(nl(t,e,n),Bt(t,n))}function nk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sb(t,n)}function rk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),sb(t,n)}var ab;ab=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,WT(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,Ie&&e.flags&1048576&&uw(e,qc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yc(t,e),t=e.pendingProps;var i=jo(e,_t.current);xo(e,n),i=Rm(null,e,r,t,i,n);var o=Pm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zt(r)?(o=!0,Hc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xm(e),i.updater=Ju,e.stateNode=i,i._reactInternals=e,Bh(e,r,t,n),e=Hh(null,e,r,!0,o,n)):(e.tag=0,Ie&&o&&vm(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ok(r),t=_n(r,t),i){case 0:e=Wh(null,e,r,t,n);break e;case 1:e=Ey(null,e,r,t,n);break e;case 11:e=Cy(null,e,r,t,n);break e;case 14:e=xy(null,e,r,_n(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Ey(t,e,r,i,n);case 3:e:{if(Ww(e),t===null)throw Error(N(387));r=e.pendingProps,o=e.memoizedState,i=o.element,pw(t,e),Qc(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Fo(Error(N(423)),e),e=Iy(t,e,r,n,i);break e}else if(r!==i){i=Fo(Error(N(424)),e),e=Iy(t,e,r,n,i);break e}else for(Kt=Mr(e.stateNode.containerInfo.firstChild),Yt=e,Ie=!0,Sn=null,n=yw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Do(),r===i){e=cr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return _w(e),t===null&&$h(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,jh(r,i)?s=null:o!==null&&jh(r,o)&&(e.flags|=32),Vw(t,e),Ct(t,e,s,n),e.child;case 6:return t===null&&$h(e),null;case 13:return Hw(t,e,n);case 4:return Em(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mo(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Cy(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,_e(Kc,r._currentValue),r._currentValue=s,o!==null)if(Rn(o.value,s)){if(o.children===i.children&&!Ut.current){e=cr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Zn(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Uh(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Uh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xo(e,n),i=un(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=_n(r,e.pendingProps),i=_n(r.type,i),xy(t,e,r,i,n);case 15:return zw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),yc(t,e),e.tag=1,zt(r)?(t=!0,Hc(e)):t=!1,xo(e,n),gw(e,r,i),Bh(e,r,i,n),Hh(null,e,r,!0,t,n);case 19:return Gw(t,e,n);case 22:return Bw(t,e,n)}throw Error(N(156,e.tag))};function lb(t,e){return j1(t,e)}function ik(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new ik(t,e,n,r)}function Um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ok(t){if(typeof t=="function")return Um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===om)return 11;if(t===sm)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Um(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ro:return Si(n.children,i,o,e);case im:s=8,i|=8;break;case fh:return t=an(12,n,e,i|2),t.elementType=fh,t.lanes=o,t;case hh:return t=an(13,n,e,i),t.elementType=hh,t.lanes=o,t;case ph:return t=an(19,n,e,i),t.elementType=ph,t.lanes=o,t;case v1:return td(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m1:s=10;break e;case g1:s=9;break e;case om:s=11;break e;case sm:s=14;break e;case br:s=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=an(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Si(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function td(t,e,n,r){return t=an(22,t,r,e),t.elementType=v1,t.lanes=n,t.stateNode={isHidden:!1},t}function Cf(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function xf(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rf(0),this.expirationTimes=rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zm(t,e,n,r,i,o,s,a,l){return t=new sk(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=an(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xm(o),t}function ak(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cb(t){if(!t)return Yr;t=t._reactInternals;e:{if(Vi(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(zt(n))return lw(t,n,e)}return e}function ub(t,e,n,r,i,o,s,a,l){return t=zm(n,r,!0,t,i,o,s,a,l),t.context=cb(null),n=t.current,r=Et(),i=$r(n),o=Zn(r,i),o.callback=e??null,Lr(n,o,i),t.current.lanes=i,nl(t,i,r),Bt(t,r),t}function nd(t,e,n,r){var i=e.current,o=Et(),s=$r(i);return n=cb(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,s),t!==null&&(In(t,i,s,o),mc(t,i,s)),s}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function My(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bm(t,e){My(t,e),(t=t.alternate)&&My(t,e)}function lk(){return null}var db=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vm(t){this._internalRoot=t}rd.prototype.render=Vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));nd(t,e,null,null)};rd.prototype.unmount=Vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ni(function(){nd(null,t,null,null)}),e[ar]=null}};function rd(t){this._internalRoot=t}rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=z1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&V1(t)}};function Wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ly(){}function ck(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=iu(s);o.call(c)}}var s=ub(e,r,t,0,null,!1,!1,"",Ly);return t._reactRootContainer=s,t[ar]=s.current,xa(t.nodeType===8?t.parentNode:t),Ni(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=iu(l);a.call(c)}}var l=zm(t,0,!1,null,null,!1,!1,"",Ly);return t._reactRootContainer=l,t[ar]=l.current,xa(t.nodeType===8?t.parentNode:t),Ni(function(){nd(e,l,n,r)}),l}function od(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=iu(s);a.call(l)}}nd(e,s,t,i)}else s=ck(n,e,t,i,r);return iu(s)}$1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(cm(e,n|1),Bt(e,$e()),!(se&6)&&($o=$e()+500,ai()))}break;case 13:Ni(function(){var r=lr(t,1);if(r!==null){var i=Et();In(r,t,1,i)}}),Bm(t,1)}};um=function(t){if(t.tag===13){var e=lr(t,134217728);if(e!==null){var n=Et();In(e,t,134217728,n)}Bm(t,134217728)}};U1=function(t){if(t.tag===13){var e=$r(t),n=lr(t,e);if(n!==null){var r=Et();In(n,t,e,r)}Bm(t,e)}};z1=function(){return fe};B1=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};xh=function(t,e,n){switch(e){case"input":if(vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yu(r);if(!i)throw Error(N(90));_1(r),vh(r,i)}}}break;case"textarea":b1(t,n);break;case"select":e=n.value,e!=null&&wo(t,!!n.multiple,e,!1)}};k1=Lm;R1=Ni;var uk={usingClientEntryPoint:!1,Events:[il,ao,Yu,I1,T1,Lm]},js={findFiberByHostInstance:pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dk={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A1(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||lk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Hu=ec.inject(dk),Ln=ec}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uk;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wm(e))throw Error(N(200));return ak(t,e,null,n)};Xt.createRoot=function(t,e){if(!Wm(t))throw Error(N(299));var n=!1,r="",i=db;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zm(t,1,!1,null,null,n,!1,r,i),t[ar]=e.current,xa(t.nodeType===8?t.parentNode:t),new Vm(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=A1(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Ni(t)};Xt.hydrate=function(t,e,n){if(!id(e))throw Error(N(200));return od(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!Wm(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=db;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ub(e,null,t,1,n??null,i,!1,o,s),t[ar]=e.current,xa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rd(e)};Xt.render=function(t,e,n){if(!id(e))throw Error(N(200));return od(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!id(t))throw Error(N(40));return t._reactRootContainer?(Ni(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[ar]=null})}),!0):!1};Xt.unstable_batchedUpdates=Lm;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!id(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return od(t,e,n,!1,r)};Xt.version="18.2.0-next-9e3b772b8-20220608";function fb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fb)}catch(t){console.error(t)}}fb(),u1.exports=Xt;var fk=u1.exports,Fy=fk;uh.createRoot=Fy.createRoot,uh.hydrateRoot=Fy.hydrateRoot;/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ee.apply(this,arguments)}var Ue;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ue||(Ue={}));const $y="popstate";function hk(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Oa("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sl(i)}return mk(e,n,null,t)}function ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Uo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pk(){return Math.random().toString(36).substr(2,8)}function Uy(t,e){return{usr:t.state,key:t.key,idx:e}}function Oa(t,e,n,r){return n===void 0&&(n=null),Ee({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?pr(e):e,{state:n,key:e&&e.key||r||pk()})}function sl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function pr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function mk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ue.Pop,l=null,c=f();c==null&&(c=0,s.replaceState(Ee({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function u(){a=Ue.Pop;let x=f(),g=x==null?null:x-c;c=x,l&&l({action:a,location:y.location,delta:g})}function h(x,g){a=Ue.Push;let m=Oa(y.location,x,g);n&&n(m,x),c=f()+1;let w=Uy(m,c),_=y.createHref(m);try{s.pushState(w,"",_)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(_)}o&&l&&l({action:a,location:y.location,delta:1})}function p(x,g){a=Ue.Replace;let m=Oa(y.location,x,g);n&&n(m,x),c=f();let w=Uy(m,c),_=y.createHref(m);s.replaceState(w,"",_),o&&l&&l({action:a,location:y.location,delta:0})}function v(x){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof x=="string"?x:sl(x);return ie(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let y={get action(){return a},get location(){return t(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener($y,u),l=x,()=>{i.removeEventListener($y,u),l=null}},createHref(x){return e(i,x)},createURL:v,encodeLocation(x){let g=v(x);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(x){return s.go(x)}};return y}var He;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(He||(He={}));const gk=new Set(["lazy","caseSensitive","path","id","index","children"]);function vk(t){return t.index===!0}function rp(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,o)=>{let s=[...n,o],a=typeof i.id=="string"?i.id:s.join("-");if(ie(i.index!==!0||!i.children,"Cannot specify children on an index route"),ie(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),vk(i)){let l=Ee({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ee({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=rp(i.children,e,s,r)),l}})}function mo(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?pr(e):e,i=al(r.pathname||"/",n);if(i==null)return null;let o=hb(t);yk(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Tk(o[a],Pk(i));return s}function hb(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=zr([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hb(o.children,e,f,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:Ek(c,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of pb(o.path))i(o,s,l)}),e}function pb(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=pb(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function yk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ik(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _k=/^:\w+$/,wk=3,bk=2,Sk=1,Ck=10,xk=-2,zy=t=>t==="*";function Ek(t,e){let n=t.split("/"),r=n.length;return n.some(zy)&&(r+=xk),e&&(r+=bk),n.filter(i=>!zy(i)).reduce((i,o)=>i+(_k.test(o)?wk:o===""?Sk:Ck),r)}function Ik(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Tk(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",f=kk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!f)return null;Object.assign(r,f.params);let u=a.route;o.push({params:r,pathname:zr([i,f.pathname]),pathnameBase:jk(zr([i,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(i=zr([i,f.pathnameBase]))}return o}function kk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Rk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,u)=>{if(f==="*"){let h=a[u]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return c[f]=Nk(a[u]||"",f),c},{}),pathname:o,pathnameBase:s,pattern:t}}function Rk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Uo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Pk(t){try{return decodeURI(t)}catch(e){return Uo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nk(t,e){try{return decodeURIComponent(t)}catch(n){return Uo(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function al(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ak(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?pr(t):t;return{pathname:n?n.startsWith("/")?n:Ok(n,e):e,search:Dk(r),hash:Mk(i)}}function Ok(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ef(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function mb(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=pr(t):(i=Ee({},t),ie(!i.pathname||!i.pathname.includes("?"),Ef("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),Ef("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),Ef("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let u=e.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),u-=1;i.pathname=h.join("/")}a=u>=0?e[u]:"/"}let l=Ak(i,a),c=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const zr=t=>t.join("/").replace(/\/\/+/g,"/"),jk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Dk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Mk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Gm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function gb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vb=["post","put","patch","delete"],Lk=new Set(vb),Fk=["get",...vb],$k=new Set(Fk),Uk=new Set([301,302,303,307,308]),zk=new Set([307,308]),If={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Bk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ds={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vk=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function Wk(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ie(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let S=t.detectErrorBoundary;i=I=>({hasErrorBoundary:S(I)})}else i=Vk;let o={},s=rp(t.routes,i,void 0,o),a,l=t.basename||"/",c=Ee({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),f=null,u=new Set,h=null,p=null,v=null,y=t.hydrationData!=null,x=mo(s,t.history.location,l),g=null;if(x==null){let S=nn(404,{pathname:t.history.location.pathname}),{matches:I,route:P}=Yy(s);x=I,g={[P.id]:S}}let m=!x.some(S=>S.route.lazy)&&(!x.some(S=>S.route.loader)||t.hydrationData!=null),w,_={historyAction:t.history.action,location:t.history.location,matches:x,initialized:m,navigation:If,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},E=Ue.Pop,k=!1,T,j=!1,M=!1,U=[],Fe=[],O=new Map,re=0,Vt=-1,St=new Map,Xe=new Set,We=new Map,D=new Map,z=new Map,H=!1;function me(){return f=t.history.listen(S=>{let{action:I,location:P,delta:F}=S;if(H){H=!1;return}Uo(z.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let J=Iv({currentLocation:_.location,nextLocation:P,historyAction:I});if(J&&F!=null){H=!0,t.history.go(F*-1),jl(J,{state:"blocked",location:P,proceed(){jl(J,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go(F)},reset(){let Y=new Map(_.blockers);Y.set(J,Ds),ue({blockers:Y})}});return}return en(I,P)}),_.initialized||en(Ue.Pop,_.location),w}function Ce(){f&&f(),u.clear(),T&&T.abort(),_.fetchers.forEach((S,I)=>Gd(I)),_.blockers.forEach((S,I)=>Ev(I))}function vn(S){return u.add(S),()=>u.delete(S)}function ue(S){_=Ee({},_,S),u.forEach(I=>I(_))}function Ot(S,I){var P,F;let J=_.actionData!=null&&_.navigation.formMethod!=null&&bn(_.navigation.formMethod)&&_.navigation.state==="loading"&&((P=S.state)==null?void 0:P._isRedirect)!==!0,Y;I.actionData?Object.keys(I.actionData).length>0?Y=I.actionData:Y=null:J?Y=_.actionData:Y=null;let Q=I.loaderData?Ky(_.loaderData,I.loaderData,I.matches||[],I.errors):_.loaderData,G=_.blockers;G.size>0&&(G=new Map(G),G.forEach((ge,ae)=>G.set(ae,Ds)));let $=k===!0||_.navigation.formMethod!=null&&bn(_.navigation.formMethod)&&((F=S.state)==null?void 0:F._isRedirect)!==!0;a&&(s=a,a=void 0),j||E===Ue.Pop||(E===Ue.Push?t.history.push(S,S.state):E===Ue.Replace&&t.history.replace(S,S.state)),ue(Ee({},I,{actionData:Y,loaderData:Q,historyAction:E,location:S,initialized:!0,navigation:If,revalidation:"idle",restoreScrollPosition:kv(S,I.matches||_.matches),preventScrollReset:$,blockers:G})),E=Ue.Pop,k=!1,j=!1,M=!1,U=[],Fe=[]}async function pt(S,I){if(typeof S=="number"){t.history.go(S);return}let P=ip(_.location,_.matches,l,c.v7_prependBasename,S,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:F,submission:J,error:Y}=By(c.v7_normalizeFormMethod,!1,P,I),Q=_.location,G=Oa(_.location,F,I&&I.state);G=Ee({},G,t.history.encodeLocation(G));let $=I&&I.replace!=null?I.replace:void 0,ge=Ue.Push;$===!0?ge=Ue.Replace:$===!1||J!=null&&bn(J.formMethod)&&J.formAction===_.location.pathname+_.location.search&&(ge=Ue.Replace);let ae=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,Wt=Iv({currentLocation:Q,nextLocation:G,historyAction:ge});if(Wt){jl(Wt,{state:"blocked",location:G,proceed(){jl(Wt,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),pt(S,I)},reset(){let Ze=new Map(_.blockers);Ze.set(Wt,Ds),ue({blockers:Ze})}});return}return await en(ge,G,{submission:J,pendingError:Y,preventScrollReset:ae,replace:I&&I.replace})}function jt(){if(Hd(),ue({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){en(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}en(E||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function en(S,I,P){T&&T.abort(),T=null,E=S,j=(P&&P.startUninterruptedRevalidation)===!0,ME(_.location,_.matches),k=(P&&P.preventScrollReset)===!0;let F=a||s,J=P&&P.overrideNavigation,Y=mo(F,I,l);if(!Y){let Ze=nn(404,{pathname:I.pathname}),{matches:Dt,route:Nn}=Yy(F);qd(),Ot(I,{matches:Dt,loaderData:{},errors:{[Nn.id]:Ze}});return}if(_.initialized&&!M&&Yk(_.location,I)&&!(P&&P.submission&&bn(P.submission.formMethod))){Ot(I,{matches:Y});return}T=new AbortController;let Q=Ls(t.history,I,T.signal,P&&P.submission),G,$;if(P&&P.pendingError)$={[go(Y).route.id]:P.pendingError};else if(P&&P.submission&&bn(P.submission.formMethod)){let Ze=await Qi(Q,I,P.submission,Y,{replace:P.replace});if(Ze.shortCircuited)return;G=Ze.pendingActionData,$=Ze.pendingActionError,J=tc(I,P.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:ge,loaderData:ae,errors:Wt}=await Pn(Q,I,Y,J,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,G,$);ge||(T=null,Ot(I,Ee({matches:Y},G?{actionData:G}:{},{loaderData:ae,errors:Wt})))}async function Qi(S,I,P,F,J){J===void 0&&(J={}),Hd();let Y=e2(I,P);ue({navigation:Y});let Q,G=sp(F,I);if(!G.route.action&&!G.route.lazy)Q={type:He.error,error:nn(405,{method:S.method,pathname:I.pathname,routeId:G.route.id})};else if(Q=await Ms("action",S,G,F,o,i,l),S.signal.aborted)return{shortCircuited:!0};if(Io(Q)){let $;return J&&J.replace!=null?$=J.replace:$=Q.location===_.location.pathname+_.location.search,await xs(_,Q,{submission:P,replace:$}),{shortCircuited:!0}}if(aa(Q)){let $=go(F,G.route.id);return(J&&J.replace)!==!0&&(E=Ue.Push),{pendingActionData:{},pendingActionError:{[$.route.id]:Q.error}}}if(vi(Q))throw nn(400,{type:"defer-action"});return{pendingActionData:{[G.route.id]:Q.data}}}async function Pn(S,I,P,F,J,Y,Q,G,$){let ge=F||tc(I,J),ae=J||Y||Xy(ge),Wt=a||s,[Ze,Dt]=Vy(t.history,_,P,ae,I,M,U,Fe,We,Xe,Wt,l,G,$);if(qd(xe=>!(P&&P.some(tn=>tn.route.id===xe))||Ze&&Ze.some(tn=>tn.route.id===xe)),Ze.length===0&&Dt.length===0){let xe=Cv();return Ot(I,Ee({matches:P,loaderData:{},errors:$||null},G?{actionData:G}:{},xe?{fetchers:new Map(_.fetchers)}:{})),{shortCircuited:!0}}if(!j){Dt.forEach(tn=>{let Ji=_.fetchers.get(tn.key),at=Fs(void 0,Ji?Ji.data:void 0);_.fetchers.set(tn.key,at)});let xe=G||_.actionData;ue(Ee({navigation:ge},xe?Object.keys(xe).length===0?{actionData:null}:{actionData:xe}:{},Dt.length>0?{fetchers:new Map(_.fetchers)}:{}))}Vt=++re,Dt.forEach(xe=>{O.has(xe.key)&&vr(xe.key),xe.controller&&O.set(xe.key,xe.controller)});let Nn=()=>Dt.forEach(xe=>vr(xe.key));T&&T.signal.addEventListener("abort",Nn);let{results:Es,loaderResults:Kd,fetcherResults:Dl}=await bv(_.matches,P,Ze,Dt,S);if(S.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",Nn),Dt.forEach(xe=>O.delete(xe.key));let Vn=Qy(Es);if(Vn)return await xs(_,Vn,{replace:Q}),{shortCircuited:!0};let{loaderData:Ml,errors:Yd}=qy(_,P,Ze,Kd,$,Dt,Dl,D);D.forEach((xe,tn)=>{xe.subscribe(Ji=>{(Ji||xe.done)&&D.delete(tn)})});let Qd=Cv(),Jd=xv(Vt),Ll=Qd||Jd||Dt.length>0;return Ee({loaderData:Ml,errors:Yd},Ll?{fetchers:new Map(_.fetchers)}:{})}function wv(S){return _.fetchers.get(S)||Bk}function NE(S,I,P,F){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");O.has(S)&&vr(S);let J=a||s,Y=ip(_.location,_.matches,l,c.v7_prependBasename,P,I,F==null?void 0:F.relative),Q=mo(J,Y,l);if(!Q){Ol(S,I,nn(404,{pathname:Y}));return}let{path:G,submission:$,error:ge}=By(c.v7_normalizeFormMethod,!0,Y,F);if(ge){Ol(S,I,ge);return}let ae=sp(Q,G);if(k=(F&&F.preventScrollReset)===!0,$&&bn($.formMethod)){AE(S,I,G,ae,Q,$);return}We.set(S,{routeId:I,path:G}),OE(S,I,G,ae,Q,$)}async function AE(S,I,P,F,J,Y){if(Hd(),We.delete(S),!F.route.action&&!F.route.lazy){let at=nn(405,{method:Y.formMethod,pathname:P,routeId:I});Ol(S,I,at);return}let Q=_.fetchers.get(S),G=t2(Y,Q);_.fetchers.set(S,G),ue({fetchers:new Map(_.fetchers)});let $=new AbortController,ge=Ls(t.history,P,$.signal,Y);O.set(S,$);let ae=await Ms("action",ge,F,J,o,i,l);if(ge.signal.aborted){O.get(S)===$&&O.delete(S);return}if(Io(ae)){O.delete(S),Xe.add(S);let at=Fs(Y);return _.fetchers.set(S,at),ue({fetchers:new Map(_.fetchers)}),xs(_,ae,{submission:Y,isFetchActionRedirect:!0})}if(aa(ae)){Ol(S,I,ae.error);return}if(vi(ae))throw nn(400,{type:"defer-action"});let Wt=_.navigation.location||_.location,Ze=Ls(t.history,Wt,$.signal),Dt=a||s,Nn=_.navigation.state!=="idle"?mo(Dt,_.navigation.location,l):_.matches;ie(Nn,"Didn't find any matches after fetcher action");let Es=++re;St.set(S,Es);let Kd=Fs(Y,ae.data);_.fetchers.set(S,Kd);let[Dl,Vn]=Vy(t.history,_,Nn,Y,Wt,M,U,Fe,We,Xe,Dt,l,{[F.route.id]:ae.data},void 0);Vn.filter(at=>at.key!==S).forEach(at=>{let Is=at.key,Rv=_.fetchers.get(Is),FE=Fs(void 0,Rv?Rv.data:void 0);_.fetchers.set(Is,FE),O.has(Is)&&vr(Is),at.controller&&O.set(Is,at.controller)}),ue({fetchers:new Map(_.fetchers)});let Ml=()=>Vn.forEach(at=>vr(at.key));$.signal.addEventListener("abort",Ml);let{results:Yd,loaderResults:Qd,fetcherResults:Jd}=await bv(_.matches,Nn,Dl,Vn,Ze);if($.signal.aborted)return;$.signal.removeEventListener("abort",Ml),St.delete(S),O.delete(S),Vn.forEach(at=>O.delete(at.key));let Ll=Qy(Yd);if(Ll)return xs(_,Ll);let{loaderData:xe,errors:tn}=qy(_,_.matches,Dl,Qd,void 0,Vn,Jd,D);if(_.fetchers.has(S)){let at=Sc(ae.data);_.fetchers.set(S,at)}let Ji=xv(Es);_.navigation.state==="loading"&&Es>Vt?(ie(E,"Expected pending action"),T&&T.abort(),Ot(_.navigation.location,{matches:Nn,loaderData:xe,errors:tn,fetchers:new Map(_.fetchers)})):(ue(Ee({errors:tn,loaderData:Ky(_.loaderData,xe,Nn,tn)},Ji||Vn.length>0?{fetchers:new Map(_.fetchers)}:{})),M=!1)}async function OE(S,I,P,F,J,Y){let Q=_.fetchers.get(S),G=Fs(Y,Q?Q.data:void 0);_.fetchers.set(S,G),ue({fetchers:new Map(_.fetchers)});let $=new AbortController,ge=Ls(t.history,P,$.signal);O.set(S,$);let ae=await Ms("loader",ge,F,J,o,i,l);if(vi(ae)&&(ae=await bb(ae,ge.signal,!0)||ae),O.get(S)===$&&O.delete(S),ge.signal.aborted)return;if(Io(ae)){Xe.add(S),await xs(_,ae);return}if(aa(ae)){let Ze=go(_.matches,I);_.fetchers.delete(S),ue({fetchers:new Map(_.fetchers),errors:{[Ze.route.id]:ae.error}});return}ie(!vi(ae),"Unhandled fetcher deferred data");let Wt=Sc(ae.data);_.fetchers.set(S,Wt),ue({fetchers:new Map(_.fetchers)})}async function xs(S,I,P){let{submission:F,replace:J,isFetchActionRedirect:Y}=P===void 0?{}:P;I.revalidate&&(M=!0);let Q=Oa(S.location,I.location,Ee({_isRedirect:!0},Y?{_isFetchActionRedirect:!0}:{}));if(ie(Q,"Expected a location on the redirect navigation"),yb.test(I.location)&&n){let ge=t.history.createURL(I.location),ae=al(ge.pathname,l)==null;if(e.location.origin!==ge.origin||ae){J?e.location.replace(I.location):e.location.assign(I.location);return}}T=null;let G=J===!0?Ue.Replace:Ue.Push,$=F||Xy(S.navigation);if(zk.has(I.status)&&$&&bn($.formMethod))await en(G,Q,{submission:Ee({},$,{formAction:I.location}),preventScrollReset:k});else if(Y)await en(G,Q,{overrideNavigation:tc(Q),fetcherSubmission:$,preventScrollReset:k});else{let ge=tc(Q,$);await en(G,Q,{overrideNavigation:ge,preventScrollReset:k})}}async function bv(S,I,P,F,J){let Y=await Promise.all([...P.map($=>Ms("loader",J,$,I,o,i,l)),...F.map($=>$.matches&&$.match&&$.controller?Ms("loader",Ls(t.history,$.path,$.controller.signal),$.match,$.matches,o,i,l):{type:He.error,error:nn(404,{pathname:$.path})})]),Q=Y.slice(0,P.length),G=Y.slice(P.length);return await Promise.all([Jy(S,P,Q,Q.map(()=>J.signal),!1,_.loaderData),Jy(S,F.map($=>$.match),G,F.map($=>$.controller?$.controller.signal:null),!0)]),{results:Y,loaderResults:Q,fetcherResults:G}}function Hd(){M=!0,U.push(...qd()),We.forEach((S,I)=>{O.has(I)&&(Fe.push(I),vr(I))})}function Ol(S,I,P){let F=go(_.matches,I);Gd(S),ue({errors:{[F.route.id]:P},fetchers:new Map(_.fetchers)})}function Gd(S){let I=_.fetchers.get(S);O.has(S)&&!(I&&I.state==="loading"&&St.has(S))&&vr(S),We.delete(S),St.delete(S),Xe.delete(S),_.fetchers.delete(S)}function vr(S){let I=O.get(S);ie(I,"Expected fetch controller: "+S),I.abort(),O.delete(S)}function Sv(S){for(let I of S){let P=wv(I),F=Sc(P.data);_.fetchers.set(I,F)}}function Cv(){let S=[],I=!1;for(let P of Xe){let F=_.fetchers.get(P);ie(F,"Expected fetcher: "+P),F.state==="loading"&&(Xe.delete(P),S.push(P),I=!0)}return Sv(S),I}function xv(S){let I=[];for(let[P,F]of St)if(F<S){let J=_.fetchers.get(P);ie(J,"Expected fetcher: "+P),J.state==="loading"&&(vr(P),St.delete(P),I.push(P))}return Sv(I),I.length>0}function jE(S,I){let P=_.blockers.get(S)||Ds;return z.get(S)!==I&&z.set(S,I),P}function Ev(S){_.blockers.delete(S),z.delete(S)}function jl(S,I){let P=_.blockers.get(S)||Ds;ie(P.state==="unblocked"&&I.state==="blocked"||P.state==="blocked"&&I.state==="blocked"||P.state==="blocked"&&I.state==="proceeding"||P.state==="blocked"&&I.state==="unblocked"||P.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+I.state);let F=new Map(_.blockers);F.set(S,I),ue({blockers:F})}function Iv(S){let{currentLocation:I,nextLocation:P,historyAction:F}=S;if(z.size===0)return;z.size>1&&Uo(!1,"A router only supports one blocker at a time");let J=Array.from(z.entries()),[Y,Q]=J[J.length-1],G=_.blockers.get(Y);if(!(G&&G.state==="proceeding")&&Q({currentLocation:I,nextLocation:P,historyAction:F}))return Y}function qd(S){let I=[];return D.forEach((P,F)=>{(!S||S(F))&&(P.cancel(),I.push(F),D.delete(F))}),I}function DE(S,I,P){if(h=S,v=I,p=P||null,!y&&_.navigation===If){y=!0;let F=kv(_.location,_.matches);F!=null&&ue({restoreScrollPosition:F})}return()=>{h=null,v=null,p=null}}function Tv(S,I){return p&&p(S,I.map(F=>Zk(F,_.loaderData)))||S.key}function ME(S,I){if(h&&v){let P=Tv(S,I);h[P]=v()}}function kv(S,I){if(h){let P=Tv(S,I),F=h[P];if(typeof F=="number")return F}return null}function LE(S){o={},a=rp(S,i,void 0,o)}return w={get basename(){return l},get state(){return _},get routes(){return s},initialize:me,subscribe:vn,enableScrollRestoration:DE,navigate:pt,fetch:NE,revalidate:jt,createHref:S=>t.history.createHref(S),encodeLocation:S=>t.history.encodeLocation(S),getFetcher:wv,deleteFetcher:Gd,dispose:Ce,getBlocker:jE,deleteBlocker:Ev,_internalFetchControllers:O,_internalActiveDeferreds:D,_internalSetRoutes:LE},w}function Hk(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function ip(t,e,n,r,i,o,s){let a,l;if(o!=null&&s!=="path"){a=[];for(let f of e)if(a.push(f),f.route.id===o){l=f;break}}else a=e,l=e[e.length-1];let c=mb(i||".",Hm(a).map(f=>f.pathnameBase),al(t.pathname,n)||t.pathname,s==="path");return i==null&&(c.search=t.search,c.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!qm(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:zr([n,c.pathname])),sl(c)}function By(t,e,n,r){if(!r||!Hk(r))return{path:n};if(r.formMethod&&!Xk(r.formMethod))return{path:n,error:nn(405,{method:r.formMethod})};let i=()=>({path:n,error:nn(400,{type:"invalid-body"})}),o=r.formMethod||"get",s=t?o.toUpperCase():o.toLowerCase(),a=wb(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!bn(s))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,v)=>{let[y,x]=v;return""+p+y+"="+x+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!bn(s))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}ie(typeof FormData=="function","FormData is not available in this environment");let l,c;if(r.formData)l=op(r.formData),c=r.formData;else if(r.body instanceof FormData)l=op(r.body),c=r.body;else if(r.body instanceof URLSearchParams)l=r.body,c=Gy(l);else if(r.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(r.body),c=Gy(l)}catch{return i()}let f={formMethod:s,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(bn(f.formMethod))return{path:n,submission:f};let u=pr(n);return e&&u.search&&qm(u.search)&&l.append("index",""),u.search="?"+l,{path:sl(u),submission:f}}function Gk(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Vy(t,e,n,r,i,o,s,a,l,c,f,u,h,p){let v=p?Object.values(p)[0]:h?Object.values(h)[0]:void 0,y=t.createURL(e.location),x=t.createURL(i),g=p?Object.keys(p)[0]:void 0,w=Gk(n,g).filter((E,k)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(qk(e.loaderData,e.matches[k],E)||s.some(M=>M===E.route.id))return!0;let T=e.matches[k],j=E;return Wy(E,Ee({currentUrl:y,currentParams:T.params,nextUrl:x,nextParams:j.params},r,{actionResult:v,defaultShouldRevalidate:o||y.pathname+y.search===x.pathname+x.search||y.search!==x.search||_b(T,j)}))}),_=[];return l.forEach((E,k)=>{if(!n.some(O=>O.route.id===E.routeId))return;let T=mo(f,E.path,u);if(!T){_.push({key:k,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let j=e.fetchers.get(k),M=j&&j.state!=="idle"&&j.data===void 0&&!c.has(k),U=sp(T,E.path);(a.includes(k)||M||Wy(U,Ee({currentUrl:y,currentParams:e.matches[e.matches.length-1].params,nextUrl:x,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:o})))&&_.push({key:k,routeId:E.routeId,path:E.path,matches:T,match:U,controller:new AbortController})}),[w,_]}function qk(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function _b(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Wy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Hy(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ie(i,"No route found in manifest");let o={};for(let s in r){let l=i[s]!==void 0&&s!=="hasErrorBoundary";Uo(!l,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!gk.has(s)&&(o[s]=r[s])}Object.assign(i,o),Object.assign(i,Ee({},e(i),{lazy:void 0}))}async function Ms(t,e,n,r,i,o,s,a){a===void 0&&(a={});let l,c,f,u=v=>{let y,x=new Promise((g,m)=>y=m);return f=()=>y(),e.signal.addEventListener("abort",f),Promise.race([v({request:e,params:n.params,context:a.requestContext}),x])};try{let v=n.route[t];if(n.route.lazy)if(v)c=(await Promise.all([u(v),Hy(n.route,o,i)]))[0];else if(await Hy(n.route,o,i),v=n.route[t],v)c=await u(v);else if(t==="action"){let y=new URL(e.url),x=y.pathname+y.search;throw nn(405,{method:e.method,pathname:x,routeId:n.route.id})}else return{type:He.data,data:void 0};else if(v)c=await u(v);else{let y=new URL(e.url),x=y.pathname+y.search;throw nn(404,{pathname:x})}ie(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=He.error,c=v}finally{f&&e.signal.removeEventListener("abort",f)}if(Jk(c)){let v=c.status;if(Uk.has(v)){let g=c.headers.get("Location");if(ie(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!yb.test(g))g=ip(new URL(e.url),r.slice(0,r.indexOf(n)+1),s,!0,g);else if(!a.isStaticRequest){let m=new URL(e.url),w=g.startsWith("//")?new URL(m.protocol+g):new URL(g),_=al(w.pathname,s)!=null;w.origin===m.origin&&_&&(g=w.pathname+w.search+w.hash)}if(a.isStaticRequest)throw c.headers.set("Location",g),c;return{type:He.redirect,status:v,location:g,revalidate:c.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||He.data,response:c};let y,x=c.headers.get("Content-Type");return x&&/\bapplication\/json\b/.test(x)?y=await c.json():y=await c.text(),l===He.error?{type:l,error:new Gm(v,c.statusText,y),headers:c.headers}:{type:He.data,data:y,statusCode:c.status,headers:c.headers}}if(l===He.error)return{type:l,error:c};if(Qk(c)){var h,p;return{type:He.deferred,deferredData:c,statusCode:(h=c.init)==null?void 0:h.status,headers:((p=c.init)==null?void 0:p.headers)&&new Headers(c.init.headers)}}return{type:He.data,data:c}}function Ls(t,e,n,r){let i=t.createURL(wb(e)).toString(),o={signal:n};if(r&&bn(r.formMethod)){let{formMethod:s,formEncType:a}=r;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(r.json)):a==="text/plain"?o.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?o.body=op(r.formData):o.body=r.formData}return new Request(i,o)}function op(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Gy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function Kk(t,e,n,r,i){let o={},s=null,a,l=!1,c={};return n.forEach((f,u)=>{let h=e[u].route.id;if(ie(!Io(f),"Cannot handle redirect results in processLoaderData"),aa(f)){let p=go(t,h),v=f.error;r&&(v=Object.values(r)[0],r=void 0),s=s||{},s[p.route.id]==null&&(s[p.route.id]=v),o[h]=void 0,l||(l=!0,a=gb(f.error)?f.error.status:500),f.headers&&(c[h]=f.headers)}else vi(f)?(i.set(h,f.deferredData),o[h]=f.deferredData.data):o[h]=f.data,f.statusCode!=null&&f.statusCode!==200&&!l&&(a=f.statusCode),f.headers&&(c[h]=f.headers)}),r&&(s=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:c}}function qy(t,e,n,r,i,o,s,a){let{loaderData:l,errors:c}=Kk(e,n,r,i,a);for(let f=0;f<o.length;f++){let{key:u,match:h,controller:p}=o[f];ie(s!==void 0&&s[f]!==void 0,"Did not find corresponding fetcher result");let v=s[f];if(!(p&&p.signal.aborted))if(aa(v)){let y=go(t.matches,h==null?void 0:h.route.id);c&&c[y.route.id]||(c=Ee({},c,{[y.route.id]:v.error})),t.fetchers.delete(u)}else if(Io(v))ie(!1,"Unhandled fetcher revalidation redirect");else if(vi(v))ie(!1,"Unhandled fetcher deferred data");else{let y=Sc(v.data);t.fetchers.set(u,y)}}return{loaderData:l,errors:c}}function Ky(t,e,n,r){let i=Ee({},e);for(let o of n){let s=o.route.id;if(e.hasOwnProperty(s)?e[s]!==void 0&&(i[s]=e[s]):t[s]!==void 0&&o.route.loader&&(i[s]=t[s]),r&&r.hasOwnProperty(s))break}return i}function go(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Yy(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function nn(t,e){let{pathname:n,routeId:r,method:i,type:o}=e===void 0?{}:e,s="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(s="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):t===403?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(s="Not Found",a='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Gm(t||500,s,new Error(a),!0)}function Qy(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Io(n))return n}}function wb(t){let e=typeof t=="string"?pr(t):t;return sl(Ee({},e,{hash:""}))}function Yk(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function vi(t){return t.type===He.deferred}function aa(t){return t.type===He.error}function Io(t){return(t&&t.type)===He.redirect}function Qk(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function Jk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Xk(t){return $k.has(t.toLowerCase())}function bn(t){return Lk.has(t.toLowerCase())}async function Jy(t,e,n,r,i,o){for(let s=0;s<n.length;s++){let a=n[s],l=e[s];if(!l)continue;let c=t.find(u=>u.route.id===l.route.id),f=c!=null&&!_b(c,l)&&(o&&o[l.route.id])!==void 0;if(vi(a)&&(i||f)){let u=r[s];ie(u,"Expected an AbortSignal for revalidating fetcher deferred result"),await bb(a,u,i).then(h=>{h&&(n[s]=h||n[s])})}}}async function bb(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:He.data,data:t.deferredData.unwrappedData}}catch(i){return{type:He.error,error:i}}return{type:He.data,data:t.deferredData.data}}}function qm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Zk(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function sp(t,e){let n=typeof e=="string"?pr(e).search:e.search;if(t[t.length-1].route.index&&qm(n||""))return t[t.length-1];let r=Hm(t);return r[r.length-1]}function Xy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:o,json:s}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:e,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function tc(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function e2(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Fs(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function t2(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Sc(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ou(){return ou=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ou.apply(this,arguments)}const sd=b.createContext(null),Sb=b.createContext(null),ad=b.createContext(null),ld=b.createContext(null),Wi=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Cb=b.createContext(null);function cd(){return b.useContext(ld)!=null}function xb(){return cd()||ie(!1),b.useContext(ld).location}function Eb(t){b.useContext(ad).static||b.useLayoutEffect(t)}function mn(){let{isDataRoute:t}=b.useContext(Wi);return t?h2():n2()}function n2(){cd()||ie(!1);let t=b.useContext(sd),{basename:e,navigator:n}=b.useContext(ad),{matches:r}=b.useContext(Wi),{pathname:i}=xb(),o=JSON.stringify(Hm(r).map(l=>l.pathnameBase)),s=b.useRef(!1);return Eb(()=>{s.current=!0}),b.useCallback(function(l,c){if(c===void 0&&(c={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let f=mb(l,JSON.parse(o),i,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:zr([e,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[e,n,o,i,t])}function Ib(){let{matches:t}=b.useContext(Wi),e=t[t.length-1];return e?e.params:{}}function r2(t,e,n){cd()||ie(!1);let{navigator:r}=b.useContext(ad),{matches:i}=b.useContext(Wi),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=xb(),c;if(e){var f;let y=typeof e=="string"?pr(e):e;a==="/"||(f=y.pathname)!=null&&f.startsWith(a)||ie(!1),c=y}else c=l;let u=c.pathname||"/",h=a==="/"?u:u.slice(a.length)||"/",p=mo(t,{pathname:h}),v=l2(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:zr([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:zr([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?b.createElement(ld.Provider,{value:{location:ou({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ue.Pop}},v):v}function i2(){let t=f2(),e=gb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,o)}const o2=b.createElement(i2,null);class s2 extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?b.createElement(Wi.Provider,{value:this.props.routeContext},b.createElement(Cb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a2(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(sd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Wi.Provider,{value:e},r)}function l2(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||ie(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,c)=>{let f=l.route.id?s==null?void 0:s[l.route.id]:null,u=null;n&&(u=l.route.errorElement||o2);let h=e.concat(o.slice(0,c+1)),p=()=>{let v;return f?v=u:l.route.Component?v=b.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,b.createElement(a2,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?b.createElement(s2,{location:n.location,revalidation:n.revalidation,component:u,error:f,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var ap;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(ap||(ap={}));var ja;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(ja||(ja={}));function c2(t){let e=b.useContext(sd);return e||ie(!1),e}function u2(t){let e=b.useContext(Sb);return e||ie(!1),e}function d2(t){let e=b.useContext(Wi);return e||ie(!1),e}function Tb(t){let e=d2(),n=e.matches[e.matches.length-1];return n.route.id||ie(!1),n.route.id}function f2(){var t;let e=b.useContext(Cb),n=u2(ja.UseRouteError),r=Tb(ja.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function h2(){let{router:t}=c2(ap.UseNavigateStable),e=Tb(ja.UseNavigateStable),n=b.useRef(!1);return Eb(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ou({fromRouteId:e},o)))},[t,e])}const p2="startTransition",Zy=nI[p2];function m2(t){let{fallbackElement:e,router:n,future:r}=t,[i,o]=b.useState(n.state),{v7_startTransition:s}=r||{},a=b.useCallback(u=>{s&&Zy?Zy(()=>o(u)):o(u)},[o,s]);b.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:u=>n.navigate(u),push:(u,h,p)=>n.navigate(u,{state:h,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(u,h,p)=>n.navigate(u,{replace:!0,state:h,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),c=n.basename||"/",f=b.useMemo(()=>({router:n,navigator:l,static:!1,basename:c}),[n,l,c]);return b.createElement(b.Fragment,null,b.createElement(sd.Provider,{value:f},b.createElement(Sb.Provider,{value:i},b.createElement(v2,{basename:c,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?b.createElement(g2,{routes:n.routes,state:i}):e))),null)}function g2(t){let{routes:e,state:n}=t;return r2(e,void 0,n)}function v2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ue.Pop,navigator:o,static:s=!1}=t;cd()&&ie(!1);let a=e.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=pr(r));let{pathname:c="/",search:f="",hash:u="",state:h=null,key:p="default"}=r,v=b.useMemo(()=>{let y=al(c,a);return y==null?null:{location:{pathname:y,search:f,hash:u,state:h,key:p},navigationType:i}},[a,c,f,u,h,p,i]);return v==null?null:b.createElement(ad.Provider,{value:l},b.createElement(ld.Provider,{children:n,value:v}))}var e0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(e0||(e0={}));new Promise(()=>{});function y2(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:b.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:b.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function su(){return su=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},su.apply(this,arguments)}function _2(t,e){return Wk({basename:e==null?void 0:e.basename,future:su({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:hk({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||w2(),routes:t,mapRouteProperties:y2}).initialize()}function w2(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=su({},e,{errors:b2(e.errors)})),e}function b2(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Gm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}var t0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(t0||(t0={}));var n0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(n0||(n0={}));const S2="/assets/landing-library-9e06b1a7.png",C2=S2;var it=function(){return it=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},it.apply(this,arguments)};function Km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Da(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var be="-ms-",la="-moz-",de="-webkit-",kb="comm",ud="rule",Ym="decl",x2="@import",Rb="@keyframes",E2="@layer",I2=Math.abs,Qm=String.fromCharCode,lp=Object.assign;function T2(t,e){return nt(t,0)^45?(((e<<2^nt(t,0))<<2^nt(t,1))<<2^nt(t,2))<<2^nt(t,3):0}function Pb(t){return t.trim()}function Hn(t,e){return(t=e.exec(t))?t[0]:t}function X(t,e,n){return t.replace(e,n)}function Cc(t,e){return t.indexOf(e)}function nt(t,e){return t.charCodeAt(e)|0}function zo(t,e,n){return t.slice(e,n)}function Dn(t){return t.length}function Nb(t){return t.length}function Ys(t,e){return e.push(t),t}function k2(t,e){return t.map(e).join("")}function r0(t,e){return t.filter(function(n){return!Hn(n,e)})}var dd=1,Bo=1,Ab=0,fn=0,ze=0,cs="";function fd(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:dd,column:Bo,length:s,return:"",siblings:a}}function wr(t,e){return lp(fd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Zi(t){for(;t.root;)t=wr(t.root,{children:[t]});Ys(t,t.siblings)}function R2(){return ze}function P2(){return ze=fn>0?nt(cs,--fn):0,Bo--,ze===10&&(Bo=1,dd--),ze}function Tn(){return ze=fn<Ab?nt(cs,fn++):0,Bo++,ze===10&&(Bo=1,dd++),ze}function Ci(){return nt(cs,fn)}function xc(){return fn}function hd(t,e){return zo(cs,t,e)}function cp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N2(t){return dd=Bo=1,Ab=Dn(cs=t),fn=0,[]}function A2(t){return cs="",t}function Tf(t){return Pb(hd(fn-1,up(t===91?t+2:t===40?t+1:t)))}function O2(t){for(;(ze=Ci())&&ze<33;)Tn();return cp(t)>2||cp(ze)>3?"":" "}function j2(t,e){for(;--e&&Tn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return hd(t,xc()+(e<6&&Ci()==32&&Tn()==32))}function up(t){for(;Tn();)switch(ze){case t:return fn;case 34:case 39:t!==34&&t!==39&&up(ze);break;case 40:t===41&&up(t);break;case 92:Tn();break}return fn}function D2(t,e){for(;Tn()&&t+ze!==47+10;)if(t+ze===42+42&&Ci()===47)break;return"/*"+hd(e,fn-1)+"*"+Qm(t===47?t:Tn())}function M2(t){for(;!cp(Ci());)Tn();return hd(t,fn)}function L2(t){return A2(Ec("",null,null,null,[""],t=N2(t),0,[0],t))}function Ec(t,e,n,r,i,o,s,a,l){for(var c=0,f=0,u=s,h=0,p=0,v=0,y=1,x=1,g=1,m=0,w="",_=i,E=o,k=r,T=w;x;)switch(v=m,m=Tn()){case 40:if(v!=108&&nt(T,u-1)==58){Cc(T+=X(Tf(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:T+=Tf(m);break;case 9:case 10:case 13:case 32:T+=O2(v);break;case 92:T+=j2(xc()-1,7);continue;case 47:switch(Ci()){case 42:case 47:Ys(F2(D2(Tn(),xc()),e,n,l),l);break;default:T+="/"}break;case 123*y:a[c++]=Dn(T)*g;case 125*y:case 59:case 0:switch(m){case 0:case 125:x=0;case 59+f:g==-1&&(T=X(T,/\f/g,"")),p>0&&Dn(T)-u&&Ys(p>32?o0(T+";",r,n,u-1,l):o0(X(T," ","")+";",r,n,u-2,l),l);break;case 59:T+=";";default:if(Ys(k=i0(T,e,n,c,f,i,a,w,_=[],E=[],u,o),o),m===123)if(f===0)Ec(T,e,k,k,_,o,u,a,E);else switch(h===99&&nt(T,3)===110?100:h){case 100:case 108:case 109:case 115:Ec(t,k,k,r&&Ys(i0(t,k,k,0,0,i,a,w,i,_=[],u,E),E),i,E,u,a,r?_:E);break;default:Ec(T,k,k,k,[""],E,0,a,E)}}c=f=p=0,y=g=1,w=T="",u=s;break;case 58:u=1+Dn(T),p=v;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&P2()==125)continue}switch(T+=Qm(m),m*y){case 38:g=f>0?1:(T+="\f",-1);break;case 44:a[c++]=(Dn(T)-1)*g,g=1;break;case 64:Ci()===45&&(T+=Tf(Tn())),h=Ci(),f=u=Dn(w=T+=M2(xc())),m++;break;case 45:v===45&&Dn(T)==2&&(y=0)}}return o}function i0(t,e,n,r,i,o,s,a,l,c,f,u){for(var h=i-1,p=i===0?o:[""],v=Nb(p),y=0,x=0,g=0;y<r;++y)for(var m=0,w=zo(t,h+1,h=I2(x=s[y])),_=t;m<v;++m)(_=Pb(x>0?p[m]+" "+w:X(w,/&\f/g,p[m])))&&(l[g++]=_);return fd(t,e,n,i===0?ud:a,l,c,f,u)}function F2(t,e,n,r){return fd(t,e,n,kb,Qm(R2()),zo(t,2,-2),0,r)}function o0(t,e,n,r,i){return fd(t,e,n,Ym,zo(t,0,r),zo(t,r+1,-1),r,i)}function Ob(t,e,n){switch(T2(t,e)){case 5103:return de+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+t+t;case 4789:return la+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return de+t+la+t+be+t+t;case 5936:switch(nt(t,e+11)){case 114:return de+t+be+X(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return de+t+be+X(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return de+t+be+X(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return de+t+be+t+t;case 6165:return de+t+be+"flex-"+t+t;case 5187:return de+t+X(t,/(\w+).+(:[^]+)/,de+"box-$1$2"+be+"flex-$1$2")+t;case 5443:return de+t+be+"flex-item-"+X(t,/flex-|-self/g,"")+(Hn(t,/flex-|baseline/)?"":be+"grid-row-"+X(t,/flex-|-self/g,""))+t;case 4675:return de+t+be+"flex-line-pack"+X(t,/align-content|flex-|-self/g,"")+t;case 5548:return de+t+be+X(t,"shrink","negative")+t;case 5292:return de+t+be+X(t,"basis","preferred-size")+t;case 6060:return de+"box-"+X(t,"-grow","")+de+t+be+X(t,"grow","positive")+t;case 4554:return de+X(t,/([^-])(transform)/g,"$1"+de+"$2")+t;case 6187:return X(X(X(t,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),t,"")+t;case 5495:case 3959:return X(t,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return X(X(t,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+t+t;case 4200:if(!Hn(t,/flex-|baseline/))return be+"grid-column-align"+zo(t,e)+t;break;case 2592:case 3360:return be+X(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Hn(r.props,/grid-\w+-end/)})?~Cc(t+(n=n[e].value),"span")?t:be+X(t,"-start","")+t+be+"grid-row-span:"+(~Cc(n,"span")?Hn(n,/\d+/):+Hn(n,/\d+/)-+Hn(t,/\d+/))+";":be+X(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Hn(r.props,/grid-\w+-start/)})?t:be+X(X(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return X(t,/(.+)-inline(.+)/,de+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(t)-1-e>6)switch(nt(t,e+1)){case 109:if(nt(t,e+4)!==45)break;case 102:return X(t,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+la+(nt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Cc(t,"stretch")?Ob(X(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return X(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return be+i+":"+o+c+(s?be+i+"-span:"+(a?l:+l-+o)+c:"")+t});case 4949:if(nt(t,e+6)===121)return X(t,":",":"+de)+t;break;case 6444:switch(nt(t,nt(t,14)===45?18:11)){case 120:return X(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+de+(nt(t,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+be+"$2box$3")+t;case 100:return X(t,":",":"+be)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(t,"scroll-","scroll-snap-")+t}return t}function au(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function $2(t,e,n,r){switch(t.type){case E2:if(t.children.length)break;case x2:case Ym:return t.return=t.return||t.value;case kb:return"";case Rb:return t.return=t.value+"{"+au(t.children,r)+"}";case ud:if(!Dn(t.value=t.props.join(",")))return""}return Dn(n=au(t.children,r))?t.return=t.value+"{"+n+"}":""}function U2(t){var e=Nb(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function z2(t){return function(e){e.root||(e=e.return)&&t(e)}}function B2(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Ym:t.return=Ob(t.value,t.length,n);return;case Rb:return au([wr(t,{value:X(t.value,"@","@"+de)})],r);case ud:if(t.length)return k2(n=t.props,function(i){switch(Hn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zi(wr(t,{props:[X(i,/:(read-\w+)/,":"+la+"$1")]})),Zi(wr(t,{props:[i]})),lp(t,{props:r0(n,r)});break;case"::placeholder":Zi(wr(t,{props:[X(i,/:(plac\w+)/,":"+de+"input-$1")]})),Zi(wr(t,{props:[X(i,/:(plac\w+)/,":"+la+"$1")]})),Zi(wr(t,{props:[X(i,/:(plac\w+)/,be+"input-$1")]})),Zi(wr(t,{props:[i]})),lp(t,{props:r0(n,r)});break}return""})}}var V2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Jm=typeof window<"u"&&"HTMLElement"in window,W2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),H2={},pd=Object.freeze([]),Wo=Object.freeze({});function jb(t,e,n){return n===void 0&&(n=Wo),t.theme!==n.theme&&t.theme||e||n.theme}var Db=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),G2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q2=/(^-|-$)/g;function s0(t){return t.replace(G2,"-").replace(q2,"")}var K2=/(a)(d)/gi,a0=function(t){return String.fromCharCode(t+(t>25?39:97))};function dp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=a0(e%52)+n;return(a0(e%52)+n).replace(K2,"$1-$2")}var kf,vo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Mb=function(t){return vo(5381,t)};function Lb(t){return dp(Mb(t)>>>0)}function Y2(t){return t.displayName||t.name||"Component"}function Rf(t){return typeof t=="string"&&!0}var Fb=typeof Symbol=="function"&&Symbol.for,$b=Fb?Symbol.for("react.memo"):60115,Q2=Fb?Symbol.for("react.forward_ref"):60112,J2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},X2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ub={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z2=((kf={})[Q2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kf[$b]=Ub,kf);function l0(t){return("type"in(e=t)&&e.type.$$typeof)===$b?Ub:"$$typeof"in t?Z2[t.$$typeof]:J2;var e}var eR=Object.defineProperty,tR=Object.getOwnPropertyNames,c0=Object.getOwnPropertySymbols,nR=Object.getOwnPropertyDescriptor,rR=Object.getPrototypeOf,u0=Object.prototype;function zb(t,e,n){if(typeof e!="string"){if(u0){var r=rR(e);r&&r!==u0&&zb(t,r,n)}var i=tR(e);c0&&(i=i.concat(c0(e)));for(var o=l0(t),s=l0(e),a=0;a<i.length;++a){var l=i[a];if(!(l in X2||n&&n[l]||s&&l in s||o&&l in o)){var c=nR(e,l);try{eR(t,l,c)}catch{}}}}return t}function Ai(t){return typeof t=="function"}function Xm(t){return typeof t=="object"&&"styledComponentId"in t}function yi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function fp(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Ma(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function hp(t,e,n){if(n===void 0&&(n=!1),!n&&!Ma(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=hp(t[r],e[r]);else if(Ma(e))for(var r in e)t[r]=hp(t[r],e[r]);return t}function Zm(t,e){Object.defineProperty(t,"toString",{value:e})}function Qr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var iR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Qr(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},t}(),Ic=new Map,lu=new Map,Pf=1,nc=function(t){if(Ic.has(t))return Ic.get(t);for(;lu.has(Pf);)Pf++;var e=Pf++;return Ic.set(t,e),lu.set(e,t),e},oR=function(t,e){Ic.set(t,e),lu.set(e,t)},sR="style[".concat(Vo,"][").concat("data-styled-version",'="').concat("6.0.4",'"]'),aR=new RegExp("^".concat(Vo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lR=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},cR=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(aR);if(l){var c=0|parseInt(l[1],10),f=l[2];c!==0&&(oR(f,c),lR(t,f,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function uR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bb=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Vo,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vo,"active"),r.setAttribute("data-styled-version","6.0.4");var s=uR();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},dR=function(){function t(e){this.element=Bb(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Qr(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),fR=function(){function t(e){this.element=Bb(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),hR=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),d0=Jm,pR={isServer:!Jm,useCSSOMInjection:!W2},cu=function(){function t(e,n,r){e===void 0&&(e=Wo),n===void 0&&(n={});var i=this;this.options=it(it({},pR),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Jm&&d0&&(d0=!1,function(o){for(var s=document.querySelectorAll(sR),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(Vo)!=="active"&&(cR(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Zm(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(u){var h=function(g){return lu.get(g)}(u);if(h===void 0)return"continue";var p=o.names.get(h),v=s.getGroup(u);if(p===void 0||v.length===0)return"continue";var y="".concat(Vo,".g").concat(u,'[id="').concat(h,'"]'),x="";p!==void 0&&p.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),l+="".concat(v).concat(y,'{content:"').concat(x,'"}').concat(`/*!sc*/
`)},f=0;f<a;f++)c(f);return l}(i)})}return t.registerId=function(e){return nc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(it(it({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new hR(i):r?new dR(i):new fR(i)}(this.options),new iR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(nc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(nc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(nc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),mR=/&/g,gR=/^\s*\/\/.*$/gm;function Vb(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Vb(n.children,e)),n})}function vR(t){var e,n,r,i=t===void 0?Wo:t,o=i.options,s=o===void 0?Wo:o,a=i.plugins,l=a===void 0?pd:a,c=function(h,p,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):h},f=l.slice();f.push(function(h){h.type===ud&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(mR,n).replace(r,c))}),s.prefix&&f.push(B2),f.push($2);var u=function(h,p,v,y){p===void 0&&(p=""),v===void 0&&(v=""),y===void 0&&(y="&"),e=y,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var x=h.replace(gR,""),g=L2(v||p?"".concat(v," ").concat(p," { ").concat(x," }"):x);s.namespace&&(g=Vb(g,s.namespace));var m=[];return au(g,U2(f.concat(z2(function(w){return m.push(w)})))),m};return u.hash=l.length?l.reduce(function(h,p){return p.name||Qr(15),vo(h,p.name)},5381).toString():"",u}var yR=new cu,pp=vR(),Wb=qt.createContext({shouldForwardProp:void 0,styleSheet:yR,stylis:pp});Wb.Consumer;qt.createContext(void 0);function mp(){return b.useContext(Wb)}var _R=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=pp);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Zm(this,function(){throw Qr(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=pp),this.name+e.hash},t}(),wR=function(t){return t>="A"&&t<="Z"};function f0(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;wR(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Hb=function(t){return t==null||t===!1||t===""},Gb=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Hb(o)&&(Array.isArray(o)&&o.isCss||Ai(o)?r.push("".concat(f0(i),":"),o,";"):Ma(o)?r.push.apply(r,Da(Da(["".concat(i," {")],Gb(o),!1),["}"],!1)):r.push("".concat(f0(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in V2||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Br(t,e,n,r){if(Hb(t))return[];if(Xm(t))return[".".concat(t.styledComponentId)];if(Ai(t)){if(!Ai(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Br(i,e,n,r)}var o;return t instanceof _R?n?(t.inject(n,r),[t.getName(r)]):[t]:Ma(t)?Gb(t):Array.isArray(t)?Array.prototype.concat.apply(pd,t.map(function(s){return Br(s,e,n,r)})):[t.toString()]}function qb(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ai(n)&&!Xm(n))return!1}return!0}var bR=Mb("6.0.4"),SR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qb(e),this.componentId=n,this.baseHash=vo(bR,n),this.baseStyle=r,cu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=yi(i,this.staticRulesId);else{var o=fp(Br(this.rules,e,n,r)),s=dp(vo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=yi(i,s),this.staticRulesId=s}else{for(var l=vo(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var u=this.rules[f];if(typeof u=="string")c+=u;else if(u){var h=fp(Br(u,e,n,r));l=vo(l,h),c+=h}}if(c){var p=dp(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),i=yi(i,p)}}return i},t}(),Ho=qt.createContext(void 0);Ho.Consumer;function CR(){var t=b.useContext(Ho);if(!t)throw Qr(18);return t}function xR(t){var e=qt.useContext(Ho),n=b.useMemo(function(){return function(r,i){if(!r)throw Qr(14);if(Ai(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Qr(8);return i?it(it({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?qt.createElement(Ho.Provider,{value:n},t.children):null}var Nf={};function ER(t,e,n){var r=Xm(t),i=t,o=!Rf(t),s=e.attrs,a=s===void 0?pd:s,l=e.componentId,c=l===void 0?function(w,_){var E=typeof w!="string"?"sc":s0(w);Nf[E]=(Nf[E]||0)+1;var k="".concat(E,"-").concat(Lb("6.0.4"+E+Nf[E]));return _?"".concat(_,"-").concat(k):k}(e.displayName,e.parentComponentId):l,f=e.displayName;f===void 0&&function(w){return Rf(w)?"styled.".concat(w):"Styled(".concat(Y2(w),")")}(t);var u=e.displayName&&e.componentId?"".concat(s0(e.displayName),"-").concat(e.componentId):e.componentId||c,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var y=e.shouldForwardProp;p=function(w,_){return v(w,_)&&y(w,_)}}else p=v}var x=new SR(n,u,r?i.componentStyle:void 0);function g(w,_){return function(E,k,T){var j=E.attrs,M=E.componentStyle,U=E.defaultProps,Fe=E.foldedComponentIds,O=E.styledComponentId,re=E.target,Vt=qt.useContext(Ho),St=mp(),Xe=E.shouldForwardProp||St.shouldForwardProp,We=function(vn,ue,Ot){for(var pt,jt=it(it({},ue),{className:void 0,theme:Ot}),en=0;en<vn.length;en+=1){var Qi=Ai(pt=vn[en])?pt(jt):pt;for(var Pn in Qi)jt[Pn]=Pn==="className"?yi(jt[Pn],Qi[Pn]):Pn==="style"?it(it({},jt[Pn]),Qi[Pn]):Qi[Pn]}return ue.className&&(jt.className=yi(jt.className,ue.className)),jt}(j,k,jb(k,Vt,U)||Wo),D=We.as||re,z={};for(var H in We)We[H]===void 0||H[0]==="$"||H==="as"||H==="theme"||(H==="forwardedAs"?z.as=We.forwardedAs:Xe&&!Xe(H,D)||(z[H]=We[H]));var me=function(vn,ue){var Ot=mp(),pt=vn.generateAndInjectStyles(ue,Ot.styleSheet,Ot.stylis);return pt}(M,We),Ce=yi(Fe,O);return me&&(Ce+=" "+me),We.className&&(Ce+=" "+We.className),z[Rf(D)&&!Db.has(D)?"class":"className"]=Ce,z.ref=T,b.createElement(D,z)}(m,w,_)}var m=qt.forwardRef(g);return m.attrs=h,m.componentStyle=x,m.shouldForwardProp=p,m.foldedComponentIds=r?yi(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=u,m.target=r?i.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(_){for(var E=[],k=1;k<arguments.length;k++)E[k-1]=arguments[k];for(var T=0,j=E;T<j.length;T++)hp(_,j[T],!0);return _}({},i.defaultProps,w):w}}),Zm(m,function(){return".".concat(m.styledComponentId)}),o&&zb(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function h0(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var p0=function(t){return Object.assign(t,{isCss:!0})};function Kb(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ai(t)||Ma(t)){var r=t;return p0(Br(h0(pd,Da([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Br(i):p0(Br(h0(i,e)))}function gp(t,e,n){if(n===void 0&&(n=Wo),!e)throw Qr(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,Kb.apply(void 0,Da([i],o,!1)))};return r.attrs=function(i){return gp(t,e,it(it({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return gp(t,e,it(it({},n),i))},r}var Yb=function(t){return gp(ER,t)},C=Yb;Db.forEach(function(t){C[t]=Yb(t)});var IR=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=qb(e),cu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var o=i(fp(Br(this.rules,n,r,i)),""),s=this.componentId+e;r.insertRules(s,s,o)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&cu.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function TR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Kb.apply(void 0,Da([t],e,!1)),i="sc-global-".concat(Lb(JSON.stringify(r))),o=new IR(r,i),s=function(l){var c=mp(),f=qt.useContext(Ho),u=qt.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(u,l,c.styleSheet,f,c.stylis),(qt.useInsertionEffect||qt.useLayoutEffect)(function(){if(!c.styleSheet.server)return a(u,l,c.styleSheet,f,c.stylis),function(){return o.removeStyles(u,c.styleSheet)}},[u,l,c.styleSheet,f,c.stylis]),null};function a(l,c,f,u,h){if(o.isStatic)o.renderStyles(l,H2,f,h);else{var p=it(it({},c),{theme:jb(c,u,s.defaultProps)});o.renderStyles(l,p,f,h)}}return qt.memo(s)}const kR=C.div`
    position: relative;

    height: 100vh;
    width: 100vw;

    padding-left: 5vw;
    padding-right: 5vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
`,RR=C.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    object-fit: cover;
    z-index: -1;
`,PR=C.h1``,NR=C.h2`
    font-family: ${t=>t.theme.fonts.secondary};
`,AR=C.div`
    margin-top: 1em;

    display: flex;
    flex-direction: row;
`,OR=t=>({primary:{primary:t.colors.primary,background:t.colors.primary,text:t.colors.text,border:t.colors.primary},secondary:{primary:t.colors.secondary,background:t.colors.secondary,text:t.colors.text,border:t.colors.secondary},danger:{primary:"#E02C2A",background:"#E02C2A",text:t.colors.text,border:"#E02C2A"},secondaryInverted:{primary:"var(--ink-turquoise-green-main)",background:"var(--ink-transparent)",text:"var(--ink-turquoise-green-main)",border:"var(--ink-turquoise-green-main)"}}),jR=t=>{const e=CR();return OR(e)[t]},DR=C.div`
    box-sizing: border-box;
    transition: all
        ${t=>t.theme.transitions.duration+" "+t.theme.transitions.easing};

    border-radius: var(--ink-global-radius);

    background: ${t=>t.scheme.background};
    color: ${t=>t.scheme.text};
    border: 3px solid ${t=>t.scheme.border};

    position: relative;
    &:active {
        transform: translateY(3px);
    }

    &::after,
    &::before {
        border-radius: var(--ink-global-radius);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: 3px solid ${t=>t.scheme.border};
        opacity: 0;
        z-index: -1;
        transform: scaleX(1.3) scaleY(1.5);
        transition: transform 0.3s, opacity 0.3s;
    }

    &:hover::after {
        opacity: 1;
        transform: scaleX(1) scaleY(1);
    }

    button {
        margin: 0;
        cursor: pointer;
        font-size: 1em;
        font-weight: bold;
        font-family: var(--ink-font-family-desc);
        padding: 0.75em 1.5em;
        border: none;

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        // Will be overwritten by the styled component
        background: none;
    }
`,Ve=t=>d.jsx(DR,{onClick:t.onClick,style:t.style,scheme:jR(t.config.style+(t.config.inverted?"Inverted":"")),children:d.jsx("button",{children:t.children})}),MR=()=>{const t=mn(),e=n=>{window.open(n,"_blank","noreferrer")};return d.jsxs(kR,{children:[d.jsx(RR,{src:C2,alt:"Landing image."}),d.jsxs("div",{children:[d.jsx(PR,{children:"Inkwell"}),d.jsxs(NR,{children:["Shape up"," ",d.jsx("span",{style:{color:"var(--ink-blue-main)"},children:"intricate stories"})," ","with a simple and",d.jsx("br",{}),d.jsx("span",{style:{color:"var(--ink-turquoise-green-main)"},children:"flexible system"}),"."]})]}),d.jsxs(AR,{children:[d.jsx(Ve,{config:{style:"primary",inverted:!1},style:{marginRight:"2.5em"},onClick:()=>t("/sign/in"),children:"Get Started"}),d.jsx(Ve,{config:{style:"secondary",inverted:!0},style:{marginRight:"2.5em"},onClick:()=>e("https://github.com/Inkwell-Systems/Inkwell"),children:"Contribute"})]})]})},LR="/assets/discord-ab1efb9f.svg",FR="/assets/github-6624344a.svg",$R="/assets/theme-17942c3f.svg",UR="/assets/inkwell-3672a387.svg",zR="/assets/settings-d5551b87.svg",BR="/assets/sign-out-ae841800.svg",VR="/assets/projects-b96221c8.svg",ll={isAuthenticated:!1,id:"not-a-valid-id",name:"Debug User",email:"not-a-valid-email",profilePicture:"https://robohash.org/debug.png",projects:[]},Qb=b.createContext({value:ll,setValue:()=>{console.log("UserProvider: setValue() is not implemented")}}),WR=({children:t})=>{const[e,n]=b.useState(ll);return b.useEffect(()=>{const r=localStorage.getItem("user");r&&n(JSON.parse(r))},[]),b.useEffect(()=>{localStorage.setItem("user",JSON.stringify(e))},[e]),d.jsx(Qb.Provider,{value:{value:e,setValue:n},children:t})},Nt=()=>{const t=b.useContext(Qb);if(!t)throw new Error("useUserProvider must be used within a UserProvider");return t};/**
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
 */const Jb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw us(e)},us=function(t){return new Error("Firebase Database ("+Jb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Xb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,f=o>>2,u=(o&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,s||(h=64)),r.push(n[f],n[u],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||u==null)throw new GR;const h=o<<2|a>>4;if(r.push(h),c!==64){const p=a<<4&240|c>>2;if(r.push(p),u!==64){const v=c<<6&192|u;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zb=function(t){const e=Xb(t);return eg.encodeByteArray(e,!0)},uu=function(t){return Zb(t).replace(/\./g,"")},du=function(t){try{return eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qR(t){return eS(void 0,t)}function eS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!KR(n)||(t[n]=eS(t[n],e[n]));return t}function KR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function YR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const QR=()=>YR().__FIREBASE_DEFAULTS__,JR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&du(t[1]);return e&&JSON.parse(e)},tg=()=>{try{return QR()||JR()||XR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tS=t=>{var e,n;return(n=(e=tg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ZR=t=>{const e=tS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nS=()=>{var t;return(t=tg())===null||t===void 0?void 0:t.config},rS=t=>{var e;return(e=tg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function eP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[uu(JSON.stringify(n)),uu(JSON.stringify(s)),a].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ng(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function tP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nP(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oS(){return Jb.NODE_ADMIN===!0}function rP(){try{return typeof indexedDB=="object"}catch{return!1}}function iP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const oP="FirebaseError";class li extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oP,Object.setPrototypeOf(this,li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ul.prototype.create)}}class ul{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?sP(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new li(i,a,r)}}function sP(t,e){return t.replace(aP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aP=/\{\$([^}]+)}/g;/**
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
 */function La(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
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
 */const sS=function(t){let e={},n={},r={},i="";try{const o=t.split(".");e=La(du(o[0])||""),n=La(du(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},lP=function(t){const e=sS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cP=function(t){const e=sS(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Go(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function hu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(m0(o)&&m0(s)){if(!hu(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function m0(t){return t!==null&&typeof t=="object"}/**
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
 */function ds(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class uP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let u=0;u<80;u++){u<40?u<20?(c=a^o&(s^a),f=1518500249):(c=o^s^a,f=1859775393):u<60?(c=o&s|a&(o|s),f=2400959708):(c=o^s^a,f=3395469782);const h=(i<<5|i>>>27)+c+l+f+r[u]&4294967295;l=a,a=s,s=(o<<30|o>>>2)&4294967295,o=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const o=this.buf_;let s=this.inbuf_;for(;i<n;){if(s===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(o[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}else for(;i<n;)if(o[s]=e[i],++s,++i,s===this.blockSize){this.compress_(o),s=0;break}}this.inbuf_=s,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}function dP(t,e){const n=new fP(t,e);return n.subscribe.bind(n)}class fP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Af),i.error===void 0&&(i.error=Af),i.complete===void 0&&(i.complete=Af);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Af(){}function dl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const pP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const o=i-55296;r++,A(r<t.length,"Surrogate pair missing trail surrogate.");const s=t.charCodeAt(r)-56320;i=65536+(o<<10)+s}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},md=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function At(t){return t&&t._delegate?t._delegate:t}class Oi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const di="[DEFAULT]";/**
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
 */class mP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vP(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gP(t){return t===di?void 0:t}function vP(t){return t.instantiationMode==="EAGER"}/**
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
 */class yP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const _P={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},wP=pe.INFO,bP={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},SP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rg{constructor(e){this.name=e,this._logLevel=wP,this._logHandler=SP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_P[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const CP=(t,e)=>e.some(n=>t instanceof n);let g0,v0;function xP(){return g0||(g0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EP(){return v0||(v0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aS=new WeakMap,yp=new WeakMap,lS=new WeakMap,Of=new WeakMap,ig=new WeakMap;function IP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Vr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&aS.set(n,t)}).catch(()=>{}),ig.set(e,t),e}function TP(t){if(yp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});yp.set(t,e)}let _p={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kP(t){_p=t(_p)}function RP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jf(this),e,...n);return lS.set(r,e.sort?e.sort():[e]),Vr(r)}:EP().includes(t)?function(...e){return t.apply(jf(this),e),Vr(aS.get(this))}:function(...e){return Vr(t.apply(jf(this),e))}}function PP(t){return typeof t=="function"?RP(t):(t instanceof IDBTransaction&&TP(t),CP(t,xP())?new Proxy(t,_p):t)}function Vr(t){if(t instanceof IDBRequest)return IP(t);if(Of.has(t))return Of.get(t);const e=PP(t);return e!==t&&(Of.set(t,e),ig.set(e,t)),e}const jf=t=>ig.get(t);function NP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Vr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Vr(s.result),l.oldVersion,l.newVersion,Vr(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const AP=["get","getKey","getAll","getAllKeys","count"],OP=["put","add","delete","clear"],Df=new Map;function y0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Df.get(e))return Df.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AP.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Df.set(e,o),o}kP(t=>({...t,get:(e,n,r)=>y0(e,n)||t.get(e,n,r),has:(e,n)=>!!y0(e,n)||t.has(e,n)}));/**
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
 */class jP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wp="@firebase/app",_0="0.9.14";/**
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
 */const ji=new rg("@firebase/app"),MP="@firebase/app-compat",LP="@firebase/analytics-compat",FP="@firebase/analytics",$P="@firebase/app-check-compat",UP="@firebase/app-check",zP="@firebase/auth",BP="@firebase/auth-compat",VP="@firebase/database",WP="@firebase/database-compat",HP="@firebase/functions",GP="@firebase/functions-compat",qP="@firebase/installations",KP="@firebase/installations-compat",YP="@firebase/messaging",QP="@firebase/messaging-compat",JP="@firebase/performance",XP="@firebase/performance-compat",ZP="@firebase/remote-config",e5="@firebase/remote-config-compat",t5="@firebase/storage",n5="@firebase/storage-compat",r5="@firebase/firestore",i5="@firebase/firestore-compat",o5="firebase",s5="10.0.0";/**
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
 */const bp="[DEFAULT]",a5={[wp]:"fire-core",[MP]:"fire-core-compat",[FP]:"fire-analytics",[LP]:"fire-analytics-compat",[UP]:"fire-app-check",[$P]:"fire-app-check-compat",[zP]:"fire-auth",[BP]:"fire-auth-compat",[VP]:"fire-rtdb",[WP]:"fire-rtdb-compat",[HP]:"fire-fn",[GP]:"fire-fn-compat",[qP]:"fire-iid",[KP]:"fire-iid-compat",[YP]:"fire-fcm",[QP]:"fire-fcm-compat",[JP]:"fire-perf",[XP]:"fire-perf-compat",[ZP]:"fire-rc",[e5]:"fire-rc-compat",[t5]:"fire-gcs",[n5]:"fire-gcs-compat",[r5]:"fire-fst",[i5]:"fire-fst-compat","fire-js":"fire-js",[o5]:"fire-js-all"};/**
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
 */const pu=new Map,Sp=new Map;function l5(t,e){try{t.container.addComponent(e)}catch(n){ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qo(t){const e=t.name;if(Sp.has(e))return ji.debug(`There were multiple attempts to register component ${e}.`),!1;Sp.set(e,t);for(const n of pu.values())l5(n,t);return!0}function og(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const c5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wr=new ul("app","Firebase",c5);/**
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
 */class u5{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=s5;function cS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=nS()),!n)throw Wr.create("no-options");const o=pu.get(i);if(o){if(hu(n,o.options)&&hu(r,o.config))return o;throw Wr.create("duplicate-app",{appName:i})}const s=new yP(i);for(const l of Sp.values())s.addComponent(l);const a=new u5(n,r,s);return pu.set(i,a),a}function uS(t=bp){const e=pu.get(t);if(!e&&t===bp&&nS())return cS();if(!e)throw Wr.create("no-app",{appName:t});return e}function Hr(t,e,n){var r;let i=(r=a5[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ji.warn(a.join(" "));return}qo(new Oi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const d5="firebase-heartbeat-database",f5=1,Fa="firebase-heartbeat-store";let Mf=null;function dS(){return Mf||(Mf=NP(d5,f5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fa)}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),Mf}async function h5(t){try{return await(await dS()).transaction(Fa).objectStore(Fa).get(fS(t))}catch(e){if(e instanceof li)ji.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ji.warn(n.message)}}}async function w0(t,e){try{const r=(await dS()).transaction(Fa,"readwrite");await r.objectStore(Fa).put(e,fS(t)),await r.done}catch(n){if(n instanceof li)ji.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ji.warn(r.message)}}}function fS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const p5=1024,m5=30*24*60*60*1e3;class g5{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y5(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=b0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=m5}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=b0(),{heartbeatsToSend:n,unsentEntries:r}=v5(this._heartbeatsCache.heartbeats),i=uu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function b0(){return new Date().toISOString().substring(0,10)}function v5(t,e=p5){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),S0(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),S0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class y5{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rP()?iP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await h5(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return w0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return w0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function S0(t){return uu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _5(t){qo(new Oi("platform-logger",e=>new jP(e),"PRIVATE")),qo(new Oi("heartbeat",e=>new g5(e),"PRIVATE")),Hr(wp,_0,t),Hr(wp,_0,"esm2017"),Hr("fire-js","")}_5("");var w5="firebase",b5="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */Hr(w5,b5,"app");function hS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S5=hS,pS=new ul("auth","Firebase",hS());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const mu=new rg("@firebase/auth");function C5(t,...e){mu.logLevel<=pe.WARN&&mu.warn(`Auth (${fs}): ${t}`,...e)}function Tc(t,...e){mu.logLevel<=pe.ERROR&&mu.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function hn(t,...e){throw sg(t,...e)}function $n(t,...e){return sg(t,...e)}function mS(t,e,n){const r=Object.assign(Object.assign({},S5()),{[e]:n});return new ul("auth","Firebase",r).create(e,{appName:t.name})}function x5(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),mS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pS.create(t,...e)}function K(t,e,...n){if(!t)throw sg(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tc(e),new Error(e)}function ur(t,e){t||Qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function E5(){return C0()==="http:"||C0()==="https:"}function C0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function I5(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E5()||tP()||"connection"in navigator)?navigator.onLine:!0}function T5(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class fl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=ng()||iS()}get(){return I5()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ag(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class gS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const k5={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const R5=new fl(3e4,6e4);function hs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ps(t,e,n,r,i={}){return vS(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=ds(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),gS.fetch()(yS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function vS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},k5),e);try{const i=new P5(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw rc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw rc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw rc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw rc(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mS(t,f,c);hn(t,f)}}catch(i){if(i instanceof li)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function hl(t,e,n,r,i={}){const o=await ps(t,e,n,r,i);return"mfaPendingCredential"in o&&hn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function yS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ag(t.config,i):`${t.config.apiScheme}://${i}`}class P5{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),R5.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$n(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function N5(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function A5(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O5(t,e=!1){const n=At(t),r=await n.getIdToken(e),i=lg(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ca(Lf(i.auth_time)),issuedAtTime:ca(Lf(i.iat)),expirationTime:ca(Lf(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Lf(t){return Number(t)*1e3}function lg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const i=du(n);return i?JSON.parse(i):(Tc("Failed to decode base64 JWT payload"),null)}catch(i){return Tc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function j5(t){const e=lg(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function $a(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof li&&D5(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function D5({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class M5{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class _S{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ca(this.lastLoginAt),this.creationTime=ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $a(t,A5(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?$5(o.providerUserInfo):[],a=F5(t.providerData,s),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,u={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new _S(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function L5(t){const e=At(t);await gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function F5(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $5(t){return t.map(e=>{var{providerId:n}=e,r=Km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function U5(t,e){const n=await vS(t,{},async()=>{const r=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=yS(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gS.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):j5(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await U5(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ua;return r&&(K(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(K(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ua,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function _r(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new M5(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _S(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await $a(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return O5(this,e)}reload(){return L5(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $a(this,N5(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,c,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:w,emailVerified:_,isAnonymous:E,providerData:k,stsTokenManager:T}=n;K(w&&T,e,"internal-error");const j=Ua.fromJSON(this.name,T);K(typeof w=="string",e,"internal-error"),_r(u,e.name),_r(h,e.name),K(typeof _=="boolean",e,"internal-error"),K(typeof E=="boolean",e,"internal-error"),_r(p,e.name),_r(v,e.name),_r(y,e.name),_r(x,e.name),_r(g,e.name),_r(m,e.name);const M=new xi({uid:w,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:E,photoURL:v,phoneNumber:p,tenantId:y,stsTokenManager:j,createdAt:g,lastLoginAt:m});return k&&Array.isArray(k)&&(M.providerData=k.map(U=>Object.assign({},U))),x&&(M._redirectEventId=x),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ua;i.updateFromServerResponse(n);const o=new xi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gu(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const x0=new Map;function Jn(t){ur(t instanceof Function,"Expected a class definition");let e=x0.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,x0.set(t,e),e)}/**
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
 */class wS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wS.type="NONE";const E0=wS;/**
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
 */function kc(t,e,n){return`firebase:${t}:${e}:${n}`}class To{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=kc(this.userKey,i.apiKey,o),this.fullPersistenceKey=kc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new To(Jn(E0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||Jn(E0);const s=kc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(s);if(f){const u=xi._fromJSON(e,f);c!==o&&(a=u),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new To(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new To(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function I0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ES(e))return"Blackberry";if(IS(e))return"Webos";if(cg(e))return"Safari";if((e.includes("chrome/")||SS(e))&&!e.includes("edge/"))return"Chrome";if(xS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bS(t=wt()){return/firefox\//i.test(t)}function cg(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SS(t=wt()){return/crios\//i.test(t)}function CS(t=wt()){return/iemobile/i.test(t)}function xS(t=wt()){return/android/i.test(t)}function ES(t=wt()){return/blackberry/i.test(t)}function IS(t=wt()){return/webos/i.test(t)}function gd(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function z5(t=wt()){var e;return gd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function B5(){return nP()&&document.documentMode===10}function TS(t=wt()){return gd(t)||xS(t)||IS(t)||ES(t)||/windows phone/i.test(t)||CS(t)}function V5(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function kS(t,e=[]){let n;switch(t){case"Browser":n=I0(wt());break;case"Worker":n=`${I0(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}async function RS(t,e){return ps(t,"GET","/v2/recaptchaConfig",hs(t,e))}function T0(t){return t!==void 0&&t.enterprise!==void 0}class PS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function W5(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function NS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=$n("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",W5().appendChild(r)})}function H5(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const G5="https://www.google.com/recaptcha/enterprise.js?render=",q5="recaptcha-enterprise",K5="NO_RECAPTCHA";class AS{constructor(e){this.type=q5,this.auth=Hi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{RS(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new PS(l);return o.tenantId==null?o._agentRecaptchaConfig=c:o._tenantRecaptchaConfigs[o.tenantId]=c,s(c.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;T0(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(c=>{s(c)}).catch(()=>{s(K5)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&T0(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}NS(G5+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function vu(t,e,n,r=!1){const i=new AS(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Y5{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Q5{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new k0(this),this.idTokenSubscription=new k0(this),this.beforeStateQueue=new Y5(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T5()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?At(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}async initializeRecaptchaConfig(){const e=await RS(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new PS(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new AS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ul("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return K(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&C5(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hi(t){return At(t)}let k0=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=dP(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
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
 */function J5(t,e){const n=og(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(hu(o,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function X5(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Z5(t,e,n){const r=Hi(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=OS(e),{host:s,port:a}=eN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tN()}function OS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eN(t){const e=OS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:R0(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:R0(s)}}}function R0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ug{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}async function nN(t,e){return ps(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ff(t,e){return hl(t,"POST","/v1/accounts:signInWithPassword",hs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function rN(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",hs(t,e))}async function iN(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",hs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class za extends ug{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new za(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new za(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await vu(e,r,"signInWithPassword");return Ff(e,i)}else return Ff(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await vu(e,r,"signInWithPassword");return Ff(e,o)}else return Promise.reject(i)});case"emailLink":return rN(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iN(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ko(t,e){return hl(t,"POST","/v1/accounts:signInWithIdp",hs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const oN="http://localhost";class Di extends ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Km(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Di(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return ko(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ko(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ko(e,n)}buildRequest(){const e={requestUri:oN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ds(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function sN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aN(t){const e=Qs(Js(t)).link,n=e?Qs(Js(e)).deep_link_id:null,r=Qs(Js(t)).deep_link_id;return(r?Qs(Js(r)).link:null)||r||n||e||t}class dg{constructor(e){var n,r,i,o,s,a;const l=Qs(Js(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,u=sN((i=l.mode)!==null&&i!==void 0?i:null);K(c&&f&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aN(e);try{return new dg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return za._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dg.parseLink(n);return K(r,"argument-error"),za._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class fg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pl extends fg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ir extends pl{constructor(){super("facebook.com")}static credential(e){return Di._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class qn extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Di._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Tr extends pl{constructor(){super("github.com")}static credential(e){return Di._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class kr extends pl{constructor(){super("twitter.com")}static credential(e,n){return Di._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function $f(t,e){return hl(t,"POST","/v1/accounts:signUp",hs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await xi._fromIdTokenResponse(e,r,i),s=P0(r);return new Mi({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=P0(r);return new Mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function P0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class yu extends li{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yu.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yu(e,n,r,i)}}function jS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?yu._fromErrorAndOperation(t,o,e,r):o})}async function lN(t,e,n=!1){const r=await $a(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
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
 */async function cN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await $a(t,jS(r,i,e,t),n);K(o.idToken,r,"internal-error");const s=lg(o.idToken);K(s,r,"internal-error");const{sub:a}=s;return K(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function DS(t,e,n=!1){const r="signIn",i=await jS(t,r,e),o=await Mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function uN(t,e){return DS(Hi(t),e)}async function dN(t,e,n){var r;const i=Hi(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await vu(i,o,"signUpPassword");s=$f(i,c)}else s=$f(i,o).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await vu(i,o,"signUpPassword");return $f(i,f)}else return Promise.reject(c)});const a=await s.catch(c=>Promise.reject(c)),l=await Mi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function fN(t,e,n){return uN(At(t),ms.credential(e,n))}function hN(t,e,n,r){return At(t).onIdTokenChanged(e,n,r)}function pN(t,e,n){return At(t).beforeAuthStateChanged(e,n)}const _u="__sak";/**
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
 */class MS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_u,"1"),this.storage.removeItem(_u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function mN(){const t=wt();return cg(t)||gd(t)}const gN=1e3,vN=10;class LS extends MS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mN()&&V5(),this.fallbackToPolling=TS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);B5()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LS.type="LOCAL";const yN=LS;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class FS extends MS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FS.type="SESSION";const $S=FS;/**
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
 */function _N(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await _N(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function hg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=hg("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Un(){return window}function bN(t){Un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function US(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function SN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xN(){return US()?self:null}/**
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
 */const zS="firebaseLocalStorageDb",EN=1,wu="firebaseLocalStorage",BS="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yd(t,e){return t.transaction([wu],e?"readwrite":"readonly").objectStore(wu)}function IN(){const t=indexedDB.deleteDatabase(zS);return new ml(t).toPromise()}function xp(){const t=indexedDB.open(zS,EN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wu,{keyPath:BS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wu)?e(r):(r.close(),await IN(),e(await xp()))})})}async function N0(t,e,n){const r=yd(t,!0).put({[BS]:e,value:n});return new ml(r).toPromise()}async function TN(t,e){const n=yd(t,!1).get(e),r=await new ml(n).toPromise();return r===void 0?null:r.value}function A0(t,e){const n=yd(t,!0).delete(e);return new ml(n).toPromise()}const kN=800,RN=3;class VS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return US()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vd._getInstance(xN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SN(),!this.activeServiceWorker)return;this.sender=new wN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xp();return await N0(e,_u,"1"),await A0(e,_u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>N0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=yd(i,!1).getAll();return new ml(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VS.type="LOCAL";const PN=VS;new fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function WS(t,e){return e?Jn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pg extends ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ko(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ko(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NN(t){return DS(t.auth,new pg(t),t.bypassAuthState)}function AN(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),cN(n,new pg(t),t.bypassAuthState)}async function ON(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),lN(n,new pg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class HS{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NN;case"linkViaPopup":case"linkViaRedirect":return ON;case"reauthViaPopup":case"reauthViaRedirect":return AN;default:hn(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const jN=new fl(2e3,1e4);async function DN(t,e,n){const r=Hi(t);x5(t,e,fg);const i=WS(r,n);return new _i(r,"signInViaPopup",e,i).executeNotNull()}class _i extends HS{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=hg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jN.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const MN="pendingRedirect",Rc=new Map;class LN extends HS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rc.get(this.auth._key());if(!e){try{const r=await FN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rc.set(this.auth._key(),e)}return this.bypassAuthState||Rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FN(t,e){const n=zN(e),r=UN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $N(t,e){Rc.set(t._key(),e)}function UN(t){return Jn(t._redirectPersistence)}function zN(t){return kc(MN,t.config.apiKey,t.name)}async function BN(t,e,n=!1){const r=Hi(t),i=WS(r,e),s=await new LN(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const VN=10*60*1e3;class WN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!GS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VN&&this.cachedEventUids.clear(),this.cachedEventUids.has(O0(e))}saveEventToCache(e){this.cachedEventUids.add(O0(e)),this.lastProcessedEventTime=Date.now()}}function O0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function GS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function GN(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const qN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KN=/^https?/;async function YN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GN(t);for(const n of e)try{if(QN(n))return}catch{}hn(t,"unauthorized-domain")}function QN(t){const e=Cp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!KN.test(n))return!1;if(qN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const JN=new fl(3e4,6e4);function j0(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XN(t){return new Promise((e,n)=>{var r,i,o;function s(){j0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{j0(),n($n(t,"network-request-failed"))},timeout:JN.get()})}if(!((i=(r=Un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Un().gapi)===null||o===void 0)&&o.load)s();else{const a=H5("iframefcb");return Un()[a]=()=>{gapi.load?s():n($n(t,"network-request-failed"))},NS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Pc=null,e})}let Pc=null;function ZN(t){return Pc=Pc||XN(t),Pc}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const eA=new fl(5e3,15e3),tA="__/auth/iframe",nA="emulator/auth/iframe",rA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oA(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ag(e,nA):`https://${t.config.authDomain}/${tA}`,r={apiKey:e.apiKey,appName:t.name,v:fs},i=iA.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ds(r).slice(1)}`}async function sA(t){const e=await ZN(t),n=Un().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:oA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rA,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=$n(t,"network-request-failed"),a=Un().setTimeout(()=>{o(s)},eA.get());function l(){Un().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const aA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lA=500,cA=600,uA="_blank",dA="http://localhost";class D0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fA(t,e,n,r=lA,i=cA){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aA),{width:r.toString(),height:i.toString(),top:o,left:s}),c=wt().toLowerCase();n&&(a=SS(c)?uA:n),bS(c)&&(e=e||dA,l.scrollbars="yes");const f=Object.entries(l).reduce((h,[p,v])=>`${h}${p}=${v},`,"");if(z5(c)&&a!=="_self")return hA(e||"",a),new D0(null);const u=window.open(e||"",a,f);K(u,t,"popup-blocked");try{u.focus()}catch{}return new D0(u)}function hA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const pA="__/auth/handler",mA="emulator/auth/handler",gA=encodeURIComponent("fac");async function M0(t,e,n,r,i,o){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:i};if(e instanceof fg){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",vp(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(o||{}))s[f]=u}if(e instanceof pl){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),c=l?`#${gA}=${encodeURIComponent(l)}`:"";return`${vA(t)}?${ds(a).slice(1)}${c}`}function vA({config:t}){return t.emulator?ag(t,mA):`https://${t.authDomain}/${pA}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Uf="webStorageSupport";class yA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$S,this._completeRedirectFn=BN,this._overrideRedirectResult=$N}async _openPopup(e,n,r,i){var o;ur((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await M0(e,n,r,Cp(),i);return fA(e,s,hg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await M0(e,n,r,Cp(),i);return bN(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ur(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sA(e),r=new WN(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uf,{type:Uf},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Uf];s!==void 0&&n(!!s),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return TS()||cg()||gd()}}const _A=yA;var L0="@firebase/auth",F0="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class wA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function bA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SA(t){qo(new Oi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;K(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kS(t)},c=new Q5(r,i,o,l);return X5(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qo(new Oi("auth-internal",e=>{const n=Hi(e.getProvider("auth").getImmediate());return(r=>new wA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hr(L0,F0,bA(t)),Hr(L0,F0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const CA=5*60,xA=rS("authIdTokenMaxAge")||CA;let $0=null;const EA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xA)return;const i=n==null?void 0:n.token;$0!==i&&($0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function IA(t=uS()){const e=og(t,"auth");if(e.isInitialized())return e.getImmediate();const n=J5(t,{popupRedirectResolver:_A,persistence:[PN,yN,$S]}),r=rS("authTokenSyncURL");if(r){const o=EA(r);pN(n,o,()=>o(n.currentUser)),hN(n,s=>o(s))}const i=tS("auth");return i&&Z5(n,`http://${i}`),n}SA("Browser");const U0="@firebase/database",z0="1.0.0";/**
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
 */let qS="";function TA(t){qS=t}/**
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
 */class kA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:La(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class RA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const KS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kA(e)}}catch{}return new RA},wi=KS("localStorage"),Ep=KS("sessionStorage");/**
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
 */const Ro=new rg("@firebase/database"),PA=function(){let t=1;return function(){return t++}}(),YS=function(t){const e=pP(t),n=new uP;n.update(e);const r=n.digest();return eg.encodeByteArray(r)},gl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=gl.apply(null,r):typeof r=="object"?e+=Ke(r):e+=r,e+=" "}return e};let Ei=null,B0=!0;const NA=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ro.logLevel=pe.VERBOSE,Ei=Ro.log.bind(Ro),e&&Ep.set("logging_enabled",!0)):typeof t=="function"?Ei=t:(Ei=null,Ep.remove("logging_enabled"))},ct=function(...t){if(B0===!0&&(B0=!1,Ei===null&&Ep.get("logging_enabled")===!0&&NA(!0)),Ei){const e=gl.apply(null,t);Ei(e)}},vl=function(t){return function(...e){ct(t,...e)}},Ip=function(...t){const e="FIREBASE INTERNAL ERROR: "+gl(...t);Ro.error(e)},dr=function(...t){const e=`FIREBASE FATAL ERROR: ${gl(...t)}`;throw Ro.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+gl(...t);Ro.warn(e)},AA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},OA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Li="[MIN_NAME]",Jr="[MAX_NAME]",Gi=function(t,e){if(t===e)return 0;if(t===Li||e===Jr)return-1;if(e===Li||t===Jr)return 1;{const n=V0(t),r=V0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},jA=function(t,e){return t===e?0:t<e?-1:1},$s=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},gg=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ke(e[r]),n+=":",n+=gg(t[e[r]]);return n+="}",n},QS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const JS=function(t){A(!mg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,o,s,a,l;t===0?(o=0,s=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=a+r,s=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(l=e;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);c.push(i?1:0),c.reverse();const f=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(f.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},DA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function LA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const FA=new RegExp("^-?(0*)\\d{1,10}$"),$A=-2147483648,UA=2147483647,V0=function(t){if(FA.test(t)){const e=Number(t);if(e>=$A&&e<=UA)return e}return null},gs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},zA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ua=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class BA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class VA{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class Po{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Po.OWNER="owner";/**
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
 */const vg="5",XS="v",ZS="s",eC="r",tC="f",nC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rC="ls",iC="p",Tp="ac",oC="websocket",sC="long_polling";/**
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
 */class aC{constructor(e,n,r,i,o=!1,s="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function WA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function lC(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(e===oC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WA(t)&&(n.ns=t.namespace);const i=[];return ht(n,(o,s)=>{i.push(o+"="+s)}),r+i.join("&")}/**
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
 */class HA{constructor(){this.counters_={}}incrementCounter(e,n=1){zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qR(this.counters_)}}/**
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
 */const zf={},Bf={};function yg(t){const e=t.toString();return zf[e]||(zf[e]=new HA),zf[e]}function GA(t,e){const n=t.toString();return Bf[n]||(Bf[n]=e()),Bf[n]}/**
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
 */class qA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&gs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const W0="start",KA="close",YA="pLPCommand",QA="pRTLPCB",cC="id",uC="pw",dC="ser",JA="cb",XA="seg",ZA="ts",eO="d",tO="dframe",fC=1870,hC=30,nO=fC-hC,rO=25e3,iO=3e4;class yo{constructor(e,n,r,i,o,s,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vl(e),this.stats_=yg(n),this.urlFn=l=>(this.appCheckToken&&(l[Tp]=this.appCheckToken),lC(n,sC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iO)),OA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _g((...o)=>{const[s,a,l,c,f]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,s===W0)this.id=a,this.password=l;else if(s===KA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+s)},(...o)=>{const[s,a]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(s,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[W0]="t",r[dC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[JA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[XS]=vg,this.transportSessionId&&(r[ZS]=this.transportSessionId),this.lastSessionId&&(r[rC]=this.lastSessionId),this.applicationId&&(r[iC]=this.applicationId),this.appCheckToken&&(r[Tp]=this.appCheckToken),typeof location<"u"&&location.hostname&&nC.test(location.hostname)&&(r[eC]=tC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yo.forceAllow_=!0}static forceDisallow(){yo.forceDisallow_=!0}static isAvailable(){return yo.forceAllow_?!0:!yo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!DA()&&!MA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Zb(n),i=QS(r,nO);for(let o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[tO]="t",r[cC]=e,r[uC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _g{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=PA(),window[YA+this.uniqueCallbackIdentifier]=e,window[QA+this.uniqueCallbackIdentifier]=n,this.myIFrame=_g.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(a){ct("frame writing exception"),a.stack&&ct(a.stack),ct(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ct("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cC]=this.myID,e[uC]=this.myPW,e[dC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hC+r.length<=fC;){const s=this.pendingSegs.shift();r=r+"&"+XA+i+"="+s.seg+"&"+ZA+i+"="+s.ts+"&"+eO+i+"="+s.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(rO)),o=()=>{clearTimeout(i),r()};this.addTag(e,o)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const oO=16384,sO=45e3;let bu=null;typeof MozWebSocket<"u"?bu=MozWebSocket:typeof WebSocket<"u"&&(bu=WebSocket);class Cn{constructor(e,n,r,i,o,s,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vl(this.connId),this.stats_=yg(n),this.connURL=Cn.connectionURL_(n,s,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,o){const s={};return s[XS]=vg,typeof location<"u"&&location.hostname&&nC.test(location.hostname)&&(s[eC]=tC),n&&(s[ZS]=n),r&&(s[rC]=r),i&&(s[Tp]=i),o&&(s[iC]=o),lC(e,oC,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wi.set("previous_websocket_failure",!0);try{let r;oS(),this.mySock=new bu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bu!==null&&!Cn.forceDisallow_}static previouslyFailed(){return wi.isInMemoryStorage||wi.get("previous_websocket_failure")===!0}markConnectionHealthy(){wi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=La(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=QS(n,oO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Cn.responsesRequiredToBeHealthy=2;Cn.healthyTimeout=3e4;/**
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
 */class Ba{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yo,Cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Cn&&Cn.isAvailable();let r=n&&!Cn.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Cn];else{const i=this.transports_=[];for(const o of Ba.ALL_TRANSPORTS)o&&o.isAvailable()&&i.push(o);Ba.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ba.globalTransportInitialized_=!1;/**
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
 */const aO=6e4,lO=5e3,cO=10*1024,uO=100*1024,Vf="t",H0="d",dO="s",G0="r",fO="e",q0="o",K0="a",Y0="n",Q0="p",hO="h";class pO{constructor(e,n,r,i,o,s,a,l,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vl("c:"+this.id+":"),this.transportManager_=new Ba(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ua(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vf in e){const n=e[Vf];n===K0?this.upgradeIfSecondaryHealthy_():n===G0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===q0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$s("t",e),r=$s("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Q0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:K0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Y0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$s("t",e),r=$s("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$s(Vf,e);if(H0 in e){const r=e[H0];if(n===hO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Y0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dO?this.onConnectionShutdown_(r):n===G0?this.onReset_(r):n===fO?Ip("Server Error: "+r):n===q0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ip("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vg!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ua(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ua(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Q0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class pC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class mC{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Su extends mC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ng()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Su}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const J0=32,X0=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new he("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xr(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function wg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Va(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function je(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof he)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new he(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function xt(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return xt(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gO(t,e){const n=Va(t,0),r=Va(e,0);for(let i=0;i<n.length&&i<r.length;i++){const o=Gi(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function bg(t,e){if(Xr(t)!==Xr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ln(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Xr(t)>Xr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class vO{constructor(e,n){this.errorPrefix_=n,this.parts_=Va(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=md(this.parts_[r]);vC(this)}}function yO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=md(e),vC(t)}function _O(t){const e=t.parts_.pop();t.byteLength_-=md(e),t.parts_.length>0&&(t.byteLength_-=1)}function vC(t){if(t.byteLength_>X0)throw new Error(t.errorPrefix_+"has a key path longer than "+X0+" bytes ("+t.byteLength_+").");if(t.parts_.length>J0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+J0+") or object contains a cycle "+fi(t))}function fi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Sg extends mC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Sg}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Us=1e3,wO=60*5*1e3,Z0=30*1e3,bO=1.3,SO=3e4,CO="server_kill",e_=3;class er extends pC{constructor(e,n,r,i,o,s,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=er.nextPersistentConnectionId_++,this.log_=vl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Us,this.maxReconnectDelay_=wO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!oS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Su.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,o={r:i,a:e,b:n};this.log_(Ke(o)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new cl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:s=>{const a=s.d;s.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,r,i){this.initConnection_();const o=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+o),this.listens.has(s)||this.listens.set(s,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(s).has(o),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(s).set(o,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const o={p:r},s="q";e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(s,o,a=>{const l=a.d,c=a.s;er.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zn(e,"w")){const r=Go(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',o=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Z0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const o=i.s,s=i.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const o={p:e},s="n";i&&(o.q=r,o.t=i),this.sendRequest(s,o)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const o={p:n,d:r};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,s=>{i&&setTimeout(()=>{i(s.s,s.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,o){this.initConnection_();const s={p:n,d:r};o!==void 0&&(s.h=o),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,o=>{this.log_(n+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(o.s,o.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const o=r.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ip("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SO&&(this.reconnectDelay_=Us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+er.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},c=function(u){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);s?ct("getToken() completed but was canceled"):(ct("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new pO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{It(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(CO)},o))}catch(u){this.log_("Failed to get token: "+u),s||(this.repoInfo_.nodeAdmin&&It(u),l())}}}interrupt(e){ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vp(this.interruptReasons_)&&(this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(o=>gg(o)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new he(e).toString();let i;if(this.listens.has(r)){const o=this.listens.get(r);i=o.get(n),o.delete(n),o.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ct("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=e_&&(this.reconnectDelay_=Z0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ct("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=e_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qS.replace(/\./g,"-")]=1,ng()?e["framework.cordova"]=1:iS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Su.getInstance().currentlyOnline();return vp(this.interruptReasons_)&&e}}er.nextPersistentConnectionId_=0;er.nextConnectionId_=0;/**
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
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
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
 */class _d{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ne(Li,e),i=new ne(Li,n);return this.compare(r,i)!==0}minPost(){return ne.MIN}}/**
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
 */let ic;class yC extends _d{static get __EMPTY_NODE(){return ic}static set __EMPTY_NODE(e){ic=e}compare(e,n){return Gi(e.name,n.name)}isDefinedOn(e){throw us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Jr,ic)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,ic)}toString(){return".key"}}const Ii=new yC;/**
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
 */class oc{constructor(e,n,r,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=n?r(e.key,n):1,i&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??$t.EMPTY_NODE,this.right=o??$t.EMPTY_NODE}copy(e,n,r,i,o){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class xO{copy(e,n,r,i,o){return this}insert(e,n,r){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,n=$t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new oc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new oc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new oc(this.root_,null,this.comparator_,!0,e)}}$t.EMPTY_NODE=new xO;/**
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
 */function EO(t,e){return Gi(t.name,e.name)}function Cg(t,e){return Gi(t,e)}/**
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
 */let kp;function IO(t){kp=t}const _C=function(t){return typeof t=="number"?"number:"+JS(t):"string:"+t},wC=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zn(e,".sv"),"Priority must be a string or number.")}else A(t===kp||t.isEmpty(),"priority of unexpected type.");A(t===kp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let t_;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wC(this.priorityNode_)}static set __childrenNodeConstructor(e){t_=e}static get __childrenNodeConstructor(){return t_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:ee(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||Xr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_C(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=JS(this.value_):e+=this.value_,this.lazyHash_=YS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=et.VALUE_TYPE_ORDER.indexOf(n),o=et.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let bC,SC;function TO(t){bC=t}function kO(t){SC=t}class RO extends _d{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),o=r.compareTo(i);return o===0?Gi(e.name,n.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Jr,new et("[PRIORITY-POST]",SC))}makePost(e,n){const r=bC(e);return new ne(n,new et("[PRIORITY-POST]",r))}toString(){return".priority"}}const Re=new RO;/**
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
 */const PO=Math.log(2);class NO{constructor(e){const n=o=>parseInt(Math.log(o)/PO,10),r=o=>parseInt(Array(o+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cu=function(t,e,n,r){t.sort(e);const i=function(l,c){const f=c-l;let u,h;if(f===0)return null;if(f===1)return u=t[l],h=n?n(u):u,new rt(h,u.node,rt.BLACK,null,null);{const p=parseInt(f/2,10)+l,v=i(l,p),y=i(p+1,c);return u=t[p],h=n?n(u):u,new rt(h,u.node,rt.BLACK,v,y)}},o=function(l){let c=null,f=null,u=t.length;const h=function(v,y){const x=u-v,g=u;u-=v;const m=i(x+1,g),w=t[x],_=n?n(w):w;p(new rt(_,w.node,y,null,m))},p=function(v){c?(c.left=v,c=v):(f=v,c=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),x=Math.pow(2,l.count-(v+1));y?h(x,rt.BLACK):(h(x,rt.BLACK),h(x,rt.RED))}return f},s=new NO(t.length),a=o(s);return new $t(r||e,a)};/**
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
 */let Wf;const eo={};class Xn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(eo&&Re,"ChildrenNode.ts has not been loaded"),Wf=Wf||new Xn({".priority":eo},{".priority":Re}),Wf}get(e){const n=Go(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $t?n:null}hasIndex(e){return zn(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Ii,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const o=n.getIterator(ne.Wrap);let s=o.getNext();for(;s;)i=i||e.isDefinedOn(s.node),r.push(s),s=o.getNext();let a;i?a=Cu(r,e.getCompare()):a=eo;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new Xn(f,c)}addToIndexes(e,n){const r=fu(this.indexes_,(i,o)=>{const s=Go(this.indexSet_,o);if(A(s,"Missing index implementation for "+o),i===eo)if(s.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Cu(a,s.getCompare())}else return eo;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new Xn(r,this.indexSet_)}removeFromIndexes(e,n){const r=fu(this.indexes_,i=>{if(i===eo)return i;{const o=n.get(e.name);return o?i.remove(new ne(e.name,o)):i}});return new Xn(r,this.indexSet_)}}/**
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
 */let zs;class q{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&wC(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zs||(zs=new q(new $t(Cg),null,Xn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zs}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zs:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ne(e,n);let i,o;n.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));const s=i.isEmpty()?zs:this.priorityNode_;return new q(i,s,o)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{A(ee(e)!==".priority"||Xr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ye(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,o=!0;if(this.forEachChild(Re,(s,a)=>{n[s]=a.val(e),r++,o&&q.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):o=!1}),!e&&o&&i<2*r){const s=[];for(const a in n)s[a]=n[a];return s}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_C(this.getPriority().val())+":"),this.forEachChild(Re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":YS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const o=i.getPredecessorKey(new ne(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ne.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)<0;)i.getNext(),o=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let o=i.peek();for(;o!=null&&n.compare(o,e)>0;)i.getNext(),o=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yl?-1:0}withIndex(e){if(e===Ii||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ii||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Re),i=n.getIterator(Re);let o=r.getNext(),s=i.getNext();for(;o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1}}resolveIndex_(e){return e===Ii?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AO extends q{constructor(){super(new $t(Cg),q.EMPTY_NODE,Xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const yl=new AO;Object.defineProperties(ne,{MIN:{value:new ne(Li,q.EMPTY_NODE)},MAX:{value:new ne(Jr,yl)}});yC.__EMPTY_NODE=q.EMPTY_NODE;et.__childrenNodeConstructor=q;IO(yl);kO(yl);/**
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
 */const OO=!0;function qe(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,qe(e))}if(!(t instanceof Array)&&OO){const n=[];let r=!1;if(ht(t,(s,a)=>{if(s.substring(0,1)!=="."){const l=qe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ne(s,l)))}}),n.length===0)return q.EMPTY_NODE;const o=Cu(n,EO,s=>s.name,Cg);if(r){const s=Cu(n,Re.getCompare());return new q(o,qe(e),new Xn({".priority":s},{".priority":Re}))}else return new q(o,qe(e),Xn.Default)}else{let n=q.EMPTY_NODE;return ht(t,(r,i)=>{if(zn(t,r)&&r.substring(0,1)!=="."){const o=qe(i);(o.isLeafNode()||!o.isEmpty())&&(n=n.updateImmediateChild(r,o))}}),n.updatePriority(qe(e))}}TO(qe);/**
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
 */class xg extends _d{constructor(e){super(),this.indexPath_=e,A(!te(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),o=r.compareTo(i);return o===0?Gi(e.name,n.name):o}makePost(e,n){const r=qe(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,r);return new ne(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,yl);return new ne(Jr,e)}toString(){return Va(this.indexPath_,0).join("/")}}/**
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
 */class jO extends _d{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Gi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const r=qe(e);return new ne(n,r)}toString(){return".value"}}const CC=new jO;/**
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
 */function xC(t){return{type:"value",snapshotNode:t}}function Ko(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Wa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ha(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function DO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Eg{constructor(e){this.index_=e}updateChild(e,n,r,i,o,s){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?e.hasChild(n)?s.trackChildChange(Wa(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(Ko(n,r)):s.trackChildChange(Ha(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Re,(i,o)=>{n.hasChild(i)||r.trackChildChange(Wa(i,o))}),n.isLeafNode()||n.forEachChild(Re,(i,o)=>{if(e.hasChild(i)){const s=e.getImmediateChild(i);s.equals(o)||r.trackChildChange(Ha(i,o,s))}else r.trackChildChange(Ko(i,o))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ga{constructor(e){this.indexedFilter_=new Eg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ga.getStartPost_(e),this.endPost_=Ga.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,o,s){return this.matches(new ne(n,r))||(r=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,o,s)}updateFullNode(e,n,r){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const o=this;return n.forEachChild(Re,(s,a)=>{o.matches(new ne(s,a))||(i=i.updateImmediateChild(s,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class MO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ga(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,o,s){return this.rangedFilter_.matches(new ne(n,r))||(r=q.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,o,s):this.fullLimitUpdateChild_(e,n,r,o,s)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let s=0;for(;o.hasNext()&&s<this.limit_;){const a=o.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),s++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let o;this.reverse_?o=i.getReverseIterator(this.index_):o=i.getIterator(this.index_);let s=0;for(;o.hasNext();){const a=o.getNext();s<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?s++:i=i.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,o){let s;if(this.reverse_){const u=this.index_.getCompare();s=(h,p)=>u(p,h)}else s=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new ne(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:s(h,l);if(f&&!r.isEmpty()&&p>=0)return o!=null&&o.trackChildChange(Ha(n,r,u)),a.updateImmediateChild(n,r);{o!=null&&o.trackChildChange(Wa(n,u));const y=a.updateImmediateChild(n,q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(o!=null&&o.trackChildChange(Ko(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:f&&s(c,l)>=0?(o!=null&&(o.trackChildChange(Wa(c.name,c.node)),o.trackChildChange(Ko(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,q.EMPTY_NODE)):e}}/**
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
 */class Ig{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new Ig;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function LO(t){return t.loadsAllData()?new Eg(t.getIndex()):t.hasLimit()?new MO(t):new Ga(t)}function FO(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function $O(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function UO(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function zO(t,e){const n=t.copy();return n.index_=e,n}function n_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Re?n="$priority":t.index_===CC?n="$value":t.index_===Ii?n="$key":(A(t.index_ instanceof xg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function r_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Re&&(e.i=t.index_.toString()),e}/**
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
 */class xu extends pC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=vl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const s=xu.getListenId_(e,r),a={};this.listens_[s]=a;const l=n_(e._queryParams);this.restRequest_(o+".json",l,(c,f)=>{let u=f;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(o,u,!1,r),Go(this.listens_,s)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=xu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=n_(e._queryParams),r=e._path.toString(),i=new cl;return this.restRequest_(r+".json",n,(o,s)=>{let a=s;o===404&&(a=null,o=null),o===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,o])=>{i&&i.accessToken&&(n.auth=i.accessToken),o&&o.token&&(n.ac=o.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ds(n);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=La(a.responseText)}catch{It("Failed to parse JSON response for "+s+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+s+" Status: "+a.status),r(a.status);r=null}},a.open("GET",s,!0),a.send()})}}/**
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
 */class BO{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Eu(){return{value:null,children:new Map}}function EC(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,Eu());const i=t.children.get(r);e=ye(e),EC(i,e,n)}}function Rp(t,e,n){t.value!==null?n(e,t.value):VO(t,(r,i)=>{const o=new he(e.toString()+"/"+r);Rp(i,o,n)})}function VO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class WO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ht(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const i_=10*1e3,HO=30*1e3,GO=5*60*1e3;class qO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WO(e);const r=i_+(HO-i_)*Math.random();ua(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ht(e,(i,o)=>{o>0&&zn(this.statsToReport_,i)&&(n[i]=o,r=!0)}),r&&this.server_.reportStats(n),ua(this.reportStats_.bind(this),Math.floor(Math.random()*2*GO))}}/**
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
 */var xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function Tg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Iu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=xn.ACK_USER_WRITE,this.source=Tg()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Iu(le(),n,this.revert)}}else return A(ee(this.path)===e,"operationForChild called for unrelated child."),new Iu(ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class qa{constructor(e,n){this.source=e,this.path=n,this.type=xn.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new qa(this.source,le()):new qa(this.source,ye(this.path))}}/**
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
 */class Fi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=xn.OVERWRITE}operationForChild(e){return te(this.path)?new Fi(this.source,le(),this.snap.getImmediateChild(e)):new Fi(this.source,ye(this.path),this.snap)}}/**
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
 */class Yo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=xn.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new Fi(this.source,le(),n.value):new Yo(this.source,le(),n)}else return A(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yo(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Zr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class KO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function YO(t,e,n,r){const i=[],o=[];return e.forEach(s=>{s.type==="child_changed"&&t.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(DO(s.childName,s.snapshotNode))}),Bs(t,i,"child_removed",e,r,n),Bs(t,i,"child_added",e,r,n),Bs(t,i,"child_moved",o,r,n),Bs(t,i,"child_changed",e,r,n),Bs(t,i,"value",e,r,n),i}function Bs(t,e,n,r,i,o){const s=r.filter(a=>a.type===n);s.sort((a,l)=>JO(t,a,l)),s.forEach(a=>{const l=QO(t,a,o);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function QO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JO(t,e,n){if(e.childName==null||n.childName==null)throw us("Should only compare child_ events.");const r=new ne(e.childName,e.snapshotNode),i=new ne(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function wd(t,e){return{eventCache:t,serverCache:e}}function da(t,e,n,r){return wd(new Zr(e,n,r),t.serverCache)}function IC(t,e,n,r){return wd(t.eventCache,new Zr(e,n,r))}function Tu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $i(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Hf;const XO=()=>(Hf||(Hf=new $t(jA)),Hf);class ve{constructor(e,n=XO()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return ht(e,(r,i)=>{n=n.set(new he(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(te(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const o=i.findRootMostMatchingPathAndValue(ye(e),n);return o!=null?{path:je(new he(r),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(ye(e)):new ve(null)}}set(e,n){if(te(e))return new ve(n,this.children);{const r=ee(e),o=(this.children.get(r)||new ve(null)).set(ye(e),n),s=this.children.insert(r,o);return new ve(this.value,s)}}remove(e){if(te(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(ye(e));let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new ve(null):new ve(this.value,o)}else return this}}get(e){if(te(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(ye(e)):null}}setTree(e,n){if(te(e))return n;{const r=ee(e),o=(this.children.get(r)||new ve(null)).setTree(ye(e),n);let s;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new ve(this.value,s)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,o)=>{r[i]=o.fold_(je(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(te(e))return null;{const o=ee(e),s=this.children.get(o);return s?s.findOnPath_(ye(e),je(n,o),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,r){if(te(e))return this;{this.value&&r(n,this.value);const i=ee(e),o=this.children.get(i);return o?o.foreachOnPath_(ye(e),je(n,i),r):new ve(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(je(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class kn{constructor(e){this.writeTree_=e}static empty(){return new kn(new ve(null))}}function fa(t,e,n){if(te(e))return new kn(new ve(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let o=r.value;const s=xt(i,e);return o=o.updateChild(s,n),new kn(t.writeTree_.set(i,o))}else{const i=new ve(n),o=t.writeTree_.setTree(e,i);return new kn(o)}}}function Pp(t,e,n){let r=t;return ht(n,(i,o)=>{r=fa(r,je(e,i),o)}),r}function o_(t,e){if(te(e))return kn.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new kn(n)}}function Np(t,e){return qi(t,e)!=null}function qi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xt(n.path,e)):null}function s_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Re,(r,i)=>{e.push(new ne(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ne(r,i.value))}),e}function Gr(t,e){if(te(e))return t;{const n=qi(t,e);return n!=null?new kn(new ve(n)):new kn(t.writeTree_.subtree(e))}}function Ap(t){return t.writeTree_.isEmpty()}function Qo(t,e){return TC(le(),t.writeTree_,e)}function TC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,o)=>{i===".priority"?(A(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=TC(je(t,i),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(je(t,".priority"),r)),n}}/**
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
 */function bd(t,e){return NC(e,t)}function ZO(t,e,n,r,i){A(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=fa(t.visibleWrites,e,n)),t.lastWriteId=r}function ej(t,e,n,r){A(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Pp(t.visibleWrites,e,n),t.lastWriteId=r}function tj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,o=!1,s=t.allWrites.length-1;for(;i&&s>=0;){const a=t.allWrites[s];a.visible&&(s>=n&&rj(a,r.path)?i=!1:ln(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return ij(t),!0;if(r.snap)t.visibleWrites=o_(t.visibleWrites,r.path);else{const a=r.children;ht(a,l=>{t.visibleWrites=o_(t.visibleWrites,je(r.path,l))})}return!0}else return!1}function rj(t,e){if(t.snap)return ln(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ln(je(t.path,n),e))return!0;return!1}function ij(t){t.visibleWrites=kC(t.allWrites,oj,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function oj(t){return t.visible}function kC(t,e,n){let r=kn.empty();for(let i=0;i<t.length;++i){const o=t[i];if(e(o)){const s=o.path;let a;if(o.snap)ln(n,s)?(a=xt(n,s),r=fa(r,a,o.snap)):ln(s,n)&&(a=xt(s,n),r=fa(r,le(),o.snap.getChild(a)));else if(o.children){if(ln(n,s))a=xt(n,s),r=Pp(r,a,o.children);else if(ln(s,n))if(a=xt(s,n),te(a))r=Pp(r,le(),o.children);else{const l=Go(o.children,ee(a));if(l){const c=l.getChild(ye(a));r=fa(r,le(),c)}}}else throw us("WriteRecord should have .snap or .children")}}return r}function RC(t,e,n,r,i){if(!r&&!i){const o=qi(t.visibleWrites,e);if(o!=null)return o;{const s=Gr(t.visibleWrites,e);if(Ap(s))return n;if(n==null&&!Np(s,le()))return null;{const a=n||q.EMPTY_NODE;return Qo(s,a)}}}else{const o=Gr(t.visibleWrites,e);if(!i&&Ap(o))return n;if(!i&&n==null&&!Np(o,le()))return null;{const s=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ln(c.path,e)||ln(e,c.path))},a=kC(t.allWrites,s,e),l=n||q.EMPTY_NODE;return Qo(a,l)}}}function sj(t,e,n){let r=q.EMPTY_NODE;const i=qi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Re,(o,s)=>{r=r.updateImmediateChild(o,s)}),r;if(n){const o=Gr(t.visibleWrites,e);return n.forEachChild(Re,(s,a)=>{const l=Qo(Gr(o,new he(s)),a);r=r.updateImmediateChild(s,l)}),s_(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}else{const o=Gr(t.visibleWrites,e);return s_(o).forEach(s=>{r=r.updateImmediateChild(s.name,s.node)}),r}}function aj(t,e,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=je(e,n);if(Np(t.visibleWrites,o))return null;{const s=Gr(t.visibleWrites,o);return Ap(s)?i.getChild(n):Qo(s,i.getChild(n))}}function lj(t,e,n,r){const i=je(e,n),o=qi(t.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){const s=Gr(t.visibleWrites,i);return Qo(s,r.getNode().getImmediateChild(n))}else return null}function cj(t,e){return qi(t.visibleWrites,e)}function uj(t,e,n,r,i,o,s){let a;const l=Gr(t.visibleWrites,e),c=qi(l,le());if(c!=null)a=c;else if(n!=null)a=Qo(l,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){const f=[],u=s.getCompare(),h=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let p=h.getNext();for(;p&&f.length<i;)u(p,r)!==0&&f.push(p),p=h.getNext();return f}else return[]}function dj(){return{visibleWrites:kn.empty(),allWrites:[],lastWriteId:-1}}function ku(t,e,n,r){return RC(t.writeTree,t.treePath,e,n,r)}function Pg(t,e){return sj(t.writeTree,t.treePath,e)}function a_(t,e,n,r){return aj(t.writeTree,t.treePath,e,n,r)}function Ru(t,e){return cj(t.writeTree,je(t.treePath,e))}function fj(t,e,n,r,i,o){return uj(t.writeTree,t.treePath,e,n,r,i,o)}function Ng(t,e,n){return lj(t.writeTree,t.treePath,e,n)}function PC(t,e){return NC(je(t.treePath,e),t.writeTree)}function NC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class hj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,Ha(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,Wa(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,Ko(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,Ha(r,e.snapshotNode,i.oldSnap));else throw us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class pj{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const AC=new pj;class Ag{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Zr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ng(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$i(this.viewCache_),o=fj(this.writes_,i,n,1,r,e);return o.length===0?null:o[0]}}/**
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
 */function mj(t){return{filter:t}}function gj(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vj(t,e,n,r,i){const o=new hj;let s,a;if(n.type===xn.OVERWRITE){const c=n;c.source.fromUser?s=Op(t,e,c.path,c.snap,r,i,o):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),s=Pu(t,e,c.path,c.snap,r,i,a,o))}else if(n.type===xn.MERGE){const c=n;c.source.fromUser?s=_j(t,e,c.path,c.children,r,i,o):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),s=jp(t,e,c.path,c.children,r,i,a,o))}else if(n.type===xn.ACK_USER_WRITE){const c=n;c.revert?s=Sj(t,e,c.path,r,i,o):s=wj(t,e,c.path,c.affectedTree,r,i,o)}else if(n.type===xn.LISTEN_COMPLETE)s=bj(t,e,n.path,r,o);else throw us("Unknown operation type: "+n.type);const l=o.getChanges();return yj(e,s,l),{viewCache:s,changes:l}}function yj(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Tu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(xC(Tu(e)))}}function OC(t,e,n,r,i,o){const s=e.eventCache;if(Ru(r,n)!=null)return e;{let a,l;if(te(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$i(e),f=c instanceof q?c:q.EMPTY_NODE,u=Pg(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),u,o)}else{const c=ku(r,$i(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,o)}else{const c=ee(n);if(c===".priority"){A(Xr(n)===1,"Can't have a priority with additional path components");const f=s.getNode();l=e.serverCache.getNode();const u=a_(r,n,f,l);u!=null?a=t.filter.updatePriority(f,u):a=s.getNode()}else{const f=ye(n);let u;if(s.isCompleteForChild(c)){l=e.serverCache.getNode();const h=a_(r,n,s.getNode(),l);h!=null?u=s.getNode().getImmediateChild(c).updateChild(f,h):u=s.getNode().getImmediateChild(c)}else u=Ng(r,c,e.serverCache);u!=null?a=t.filter.updateChild(s.getNode(),c,u,f,i,o):a=s.getNode()}}return da(e,a,s.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function Pu(t,e,n,r,i,o,s,a){const l=e.serverCache;let c;const f=s?t.filter:t.filter.getIndexedFilter();if(te(n))c=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=f.updateFullNode(l.getNode(),p,null)}else{const p=ee(n);if(!l.isCompleteForPath(n)&&Xr(n)>1)return e;const v=ye(n),x=l.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?c=f.updatePriority(l.getNode(),x):c=f.updateChild(l.getNode(),p,x,v,AC,null)}const u=IC(e,c,l.isFullyInitialized()||te(n),f.filtersNodes()),h=new Ag(i,u,o);return OC(t,u,n,i,h,a)}function Op(t,e,n,r,i,o,s){const a=e.eventCache;let l,c;const f=new Ag(i,e,o);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,s),l=da(e,c,!0,t.filter.filtersNodes());else{const u=ee(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=da(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ye(n),p=a.getNode().getImmediateChild(u);let v;if(te(h))v=r;else{const y=f.getCompleteChild(u);y!=null?wg(h)===".priority"&&y.getChild(gC(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=q.EMPTY_NODE}if(p.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),u,v,h,f,s);l=da(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function l_(t,e){return t.eventCache.isCompleteForChild(e)}function _j(t,e,n,r,i,o,s){let a=e;return r.foreach((l,c)=>{const f=je(n,l);l_(e,ee(f))&&(a=Op(t,a,f,c,i,o,s))}),r.foreach((l,c)=>{const f=je(n,l);l_(e,ee(f))||(a=Op(t,a,f,c,i,o,s))}),a}function c_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function jp(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=r:c=new ve(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(f.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),v=c_(t,p,h);l=Pu(t,l,new he(u),v,i,o,s,a)}}),c.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!f.hasChild(u)&&!p){const v=e.serverCache.getNode().getImmediateChild(u),y=c_(t,v,h);l=Pu(t,l,new he(u),y,i,o,s,a)}}),l}function wj(t,e,n,r,i,o,s){if(Ru(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Pu(t,e,n,l.getNode().getChild(n),i,o,a,s);if(te(n)){let c=new ve(null);return l.getNode().forEachChild(Ii,(f,u)=>{c=c.set(new he(f),u)}),jp(t,e,n,c,i,o,a,s)}else return e}else{let c=new ve(null);return r.foreach((f,u)=>{const h=je(n,f);l.isCompleteForPath(h)&&(c=c.set(f,l.getNode().getChild(h)))}),jp(t,e,n,c,i,o,a,s)}}function bj(t,e,n,r,i){const o=e.serverCache,s=IC(e,o.getNode(),o.isFullyInitialized()||te(n),o.isFiltered());return OC(t,s,n,r,AC,i)}function Sj(t,e,n,r,i,o){let s;if(Ru(r,n)!=null)return e;{const a=new Ag(r,e,i),l=e.eventCache.getNode();let c;if(te(n)||ee(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=ku(r,$i(e));else{const u=e.serverCache.getNode();A(u instanceof q,"serverChildren would be complete if leaf node"),f=Pg(r,u)}f=f,c=t.filter.updateFullNode(l,f,o)}else{const f=ee(n);let u=Ng(r,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=l.getImmediateChild(f)),u!=null?c=t.filter.updateChild(l,f,u,ye(n),a,o):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(l,f,q.EMPTY_NODE,ye(n),a,o):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=ku(r,$i(e)),s.isLeafNode()&&(c=t.filter.updateFullNode(c,s,o)))}return s=e.serverCache.isFullyInitialized()||Ru(r,le())!=null,da(e,c,s,t.filter.filtersNodes())}}/**
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
 */class Cj{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Eg(r.getIndex()),o=LO(r);this.processor_=mj(o);const s=n.serverCache,a=n.eventCache,l=i.updateFullNode(q.EMPTY_NODE,s.getNode(),null),c=o.updateFullNode(q.EMPTY_NODE,a.getNode(),null),f=new Zr(l,s.isFullyInitialized(),i.filtersNodes()),u=new Zr(c,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=wd(u,f),this.eventGenerator_=new KO(this.query_)}get query(){return this.query_}}function xj(t){return t.viewCache_.serverCache.getNode()}function Ej(t){return Tu(t.viewCache_)}function Ij(t,e){const n=$i(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function u_(t){return t.eventRegistrations_.length===0}function Tj(t,e){t.eventRegistrations_.push(e)}function d_(t,e,n){const r=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(o=>{const s=o.createCancelEvent(n,i);s&&r.push(s)})}if(e){let i=[];for(let o=0;o<t.eventRegistrations_.length;++o){const s=t.eventRegistrations_[o];if(!s.matches(e))i.push(s);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(o+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function f_(t,e,n,r){e.type===xn.MERGE&&e.source.queryId!==null&&(A($i(t.viewCache_),"We should always have a full cache before handling merges"),A(Tu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,o=vj(t.processor_,i,e,n,r);return gj(t.processor_,o.viewCache),A(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,jC(t,o.changes,o.viewCache.eventCache.getNode(),null)}function kj(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Re,(o,s)=>{r.push(Ko(o,s))}),n.isFullyInitialized()&&r.push(xC(n.getNode())),jC(t,r,n.getNode(),e)}function jC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return YO(t.eventGenerator_,e,n,i)}/**
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
 */let Nu;class DC{constructor(){this.views=new Map}}function Rj(t){A(!Nu,"__referenceConstructor has already been defined"),Nu=t}function Pj(){return A(Nu,"Reference.ts has not been loaded"),Nu}function Nj(t){return t.views.size===0}function Og(t,e,n,r){const i=e.source.queryId;if(i!==null){const o=t.views.get(i);return A(o!=null,"SyncTree gave us an op for an invalid query."),f_(o,e,n,r)}else{let o=[];for(const s of t.views.values())o=o.concat(f_(s,e,n,r));return o}}function MC(t,e,n,r,i){const o=e._queryIdentifier,s=t.views.get(o);if(!s){let a=ku(n,i?r:null),l=!1;a?l=!0:r instanceof q?(a=Pg(n,r),l=!1):(a=q.EMPTY_NODE,l=!1);const c=wd(new Zr(a,l,!1),new Zr(r,i,!1));return new Cj(e,c)}return s}function Aj(t,e,n,r,i,o){const s=MC(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),Tj(s,n),kj(s,n)}function Oj(t,e,n,r){const i=e._queryIdentifier,o=[];let s=[];const a=ei(t);if(i==="default")for(const[l,c]of t.views.entries())s=s.concat(d_(c,n,r)),u_(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||o.push(c.query));else{const l=t.views.get(i);l&&(s=s.concat(d_(l,n,r)),u_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||o.push(l.query)))}return a&&!ei(t)&&o.push(new(Pj())(e._repo,e._path)),{removed:o,events:s}}function LC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qr(t,e){let n=null;for(const r of t.views.values())n=n||Ij(r,e);return n}function FC(t,e){if(e._queryParams.loadsAllData())return Sd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $C(t,e){return FC(t,e)!=null}function ei(t){return Sd(t)!=null}function Sd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Au;function jj(t){A(!Au,"__referenceConstructor has already been defined"),Au=t}function Dj(){return A(Au,"Reference.ts has not been loaded"),Au}let Mj=1;class h_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=dj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function UC(t,e,n,r,i){return ZO(t.pendingWriteTree_,e,n,r,i),i?vs(t,new Fi(Tg(),e,n)):[]}function Lj(t,e,n,r){ej(t.pendingWriteTree_,e,n,r);const i=ve.fromObject(n);return vs(t,new Yo(Tg(),e,i))}function Ar(t,e,n=!1){const r=tj(t.pendingWriteTree_,e);if(nj(t.pendingWriteTree_,e)){let o=new ve(null);return r.snap!=null?o=o.set(le(),!0):ht(r.children,s=>{o=o.set(new he(s),!0)}),vs(t,new Iu(r.path,o,n))}else return[]}function _l(t,e,n){return vs(t,new Fi(kg(),e,n))}function Fj(t,e,n){const r=ve.fromObject(n);return vs(t,new Yo(kg(),e,r))}function $j(t,e){return vs(t,new qa(kg(),e))}function Uj(t,e,n){const r=Dg(t,n);if(r){const i=Mg(r),o=i.path,s=i.queryId,a=xt(o,e),l=new qa(Rg(s),a);return Lg(t,o,l)}else return[]}function Ou(t,e,n,r,i=!1){const o=e._path,s=t.syncPointTree_.get(o);let a=[];if(s&&(e._queryIdentifier==="default"||$C(s,e))){const l=Oj(s,e,n,r);Nj(s)&&(t.syncPointTree_=t.syncPointTree_.remove(o));const c=l.removed;if(a=l.events,!i){const f=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(o,(h,p)=>ei(p));if(f&&!u){const h=t.syncPointTree_.subtree(o);if(!h.isEmpty()){const p=Vj(h);for(let v=0;v<p.length;++v){const y=p[v],x=y.query,g=WC(t,y);t.listenProvider_.startListening(ha(x),Ka(t,x),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(ha(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(Cd(h));t.listenProvider_.stopListening(ha(h),p)}))}Wj(t,c)}return a}function zC(t,e,n,r){const i=Dg(t,r);if(i!=null){const o=Mg(i),s=o.path,a=o.queryId,l=xt(s,e),c=new Fi(Rg(a),l,n);return Lg(t,s,c)}else return[]}function zj(t,e,n,r){const i=Dg(t,r);if(i){const o=Mg(i),s=o.path,a=o.queryId,l=xt(s,e),c=ve.fromObject(n),f=new Yo(Rg(a),l,c);return Lg(t,s,f)}else return[]}function Dp(t,e,n,r=!1){const i=e._path;let o=null,s=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const v=xt(h,i);o=o||qr(p,v),s=s||ei(p)});let a=t.syncPointTree_.get(i);a?(s=s||ei(a),o=o||qr(a,le())):(a=new DC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;o!=null?l=!0:(l=!1,o=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const y=qr(v,le());y&&(o=o.updateImmediateChild(p,y))}));const c=$C(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Cd(e);A(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=Hj();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const f=bd(t.pendingWriteTree_,i);let u=Aj(a,e,n,f,o,l);if(!c&&!s&&!r){const h=FC(a,e);u=u.concat(Gj(t,e,h))}return u}function jg(t,e,n){const i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,(s,a)=>{const l=xt(s,e),c=qr(a,l);if(c)return c});return RC(i,e,o,n,!0)}function Bj(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const u=xt(c,n);r=r||qr(f,u)});let i=t.syncPointTree_.get(n);i?r=r||qr(i,le()):(i=new DC,t.syncPointTree_=t.syncPointTree_.set(n,i));const o=r!=null,s=o?new Zr(r,!0,!1):null,a=bd(t.pendingWriteTree_,e._path),l=MC(i,e,a,o?s.getNode():q.EMPTY_NODE,o);return Ej(l)}function vs(t,e){return BC(e,t.syncPointTree_,null,bd(t.pendingWriteTree_,le()))}function BC(t,e,n,r){if(te(t.path))return VC(t,e,n,r);{const i=e.get(le());n==null&&i!=null&&(n=qr(i,le()));let o=[];const s=ee(t.path),a=t.operationForChild(s),l=e.children.get(s);if(l&&a){const c=n?n.getImmediateChild(s):null,f=PC(r,s);o=o.concat(BC(a,l,c,f))}return i&&(o=o.concat(Og(i,t,r,n))),o}}function VC(t,e,n,r){const i=e.get(le());n==null&&i!=null&&(n=qr(i,le()));let o=[];return e.children.inorderTraversal((s,a)=>{const l=n?n.getImmediateChild(s):null,c=PC(r,s),f=t.operationForChild(s);f&&(o=o.concat(VC(f,a,l,c)))}),i&&(o=o.concat(Og(i,t,r,n))),o}function WC(t,e){const n=e.query,r=Ka(t,n);return{hashFn:()=>(xj(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Uj(t,n._path,r):$j(t,n._path);{const o=LA(i,n);return Ou(t,n,null,o)}}}}function Ka(t,e){const n=Cd(e);return t.queryToTagMap.get(n)}function Cd(t){return t._path.toString()+"$"+t._queryIdentifier}function Dg(t,e){return t.tagToQueryMap.get(e)}function Mg(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Lg(t,e,n){const r=t.syncPointTree_.get(e);A(r,"Missing sync point for query tag that we're tracking");const i=bd(t.pendingWriteTree_,e);return Og(r,n,i,null)}function Vj(t){return t.fold((e,n,r)=>{if(n&&ei(n))return[Sd(n)];{let i=[];return n&&(i=LC(n)),ht(r,(o,s)=>{i=i.concat(s)}),i}})}function ha(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Dj())(t._repo,t._path):t}function Wj(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Cd(r),o=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(o)}}}function Hj(){return Mj++}function Gj(t,e,n){const r=e._path,i=Ka(t,e),o=WC(t,n),s=t.listenProvider_.startListening(ha(e),i,o.hashFn,o.onComplete),a=t.syncPointTree_.subtree(r);if(i)A(!ei(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,f,u)=>{if(!te(c)&&f&&ei(f))return[Sd(f).query];{let h=[];return f&&(h=h.concat(LC(f).map(p=>p.query))),ht(u,(p,v)=>{h=h.concat(v)}),h}});for(let c=0;c<l.length;++c){const f=l[c];t.listenProvider_.stopListening(ha(f),Ka(t,f))}}return s}/**
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
 */class Fg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fg(n)}node(){return this.node_}}class $g{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new $g(this.syncTree_,n)}node(){return jg(this.syncTree_,this.path_)}}const qj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},p_=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Kj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Yj(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Kj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},Yj=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return typeof s!="number"?r:s+r},HC=function(t,e,n,r){return Ug(e,new $g(n,t),r)},GC=function(t,e,n){return Ug(t,new Fg(e),n)};function Ug(t,e,n){const r=t.getPriority().val(),i=p_(r,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const s=t,a=p_(s.getValue(),e,n);return a!==s.getValue()||i!==s.getPriority().val()?new et(a,qe(i)):t}else{const s=t;return o=s,i!==s.getPriority().val()&&(o=o.updatePriority(new et(i))),s.forEachChild(Re,(a,l)=>{const c=Ug(l,e.getImmediateChild(a),n);c!==l&&(o=o.updateImmediateChild(a,c))}),o}}/**
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
 */class zg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Bg(t,e){let n=e instanceof he?e:new he(e),r=t,i=ee(n);for(;i!==null;){const o=Go(r.node.children,i)||{children:{},childCount:0};r=new zg(i,r,o),n=ye(n),i=ee(n)}return r}function ys(t){return t.node.value}function qC(t,e){t.node.value=e,Mp(t)}function KC(t){return t.node.childCount>0}function Qj(t){return ys(t)===void 0&&!KC(t)}function xd(t,e){ht(t.node.children,(n,r)=>{e(new zg(n,t,r))})}function YC(t,e,n,r){n&&!r&&e(t),xd(t,i=>{YC(i,e,!0,r)}),n&&r&&e(t)}function Jj(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function wl(t){return new he(t.parent===null?t.name:wl(t.parent)+"/"+t.name)}function Mp(t){t.parent!==null&&Xj(t.parent,t.name,t)}function Xj(t,e,n){const r=Qj(n),i=zn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Mp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Mp(t))}/**
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
 */const Zj=/[\[\].#$\/\u0000-\u001F\u007F]/,e3=/[\[\].#$\u0000-\u001F\u007F]/,Gf=10*1024*1024,Ed=function(t){return typeof t=="string"&&t.length!==0&&!Zj.test(t)},QC=function(t){return typeof t=="string"&&t.length!==0&&!e3.test(t)},t3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),QC(t)},Lp=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!mg(t)||t&&typeof t=="object"&&zn(t,".sv")},bl=function(t,e,n,r){r&&e===void 0||Id(dl(t,"value"),e,n)},Id=function(t,e,n){const r=n instanceof he?new vO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fi(r));if(typeof e=="function")throw new Error(t+"contains a function "+fi(r)+" with contents = "+e.toString());if(mg(e))throw new Error(t+"contains "+e.toString()+" "+fi(r));if(typeof e=="string"&&e.length>Gf/3&&md(e)>Gf)throw new Error(t+"contains a string greater than "+Gf+" utf8 bytes "+fi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,o=!1;if(ht(e,(s,a)=>{if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!Ed(s)))throw new Error(t+" contains an invalid key ("+s+") "+fi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yO(r,s),Id(t,a,r),_O(r)}),i&&o)throw new Error(t+' contains ".value" child '+fi(r)+" in addition to actual children.")}},n3=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const o=Va(r);for(let s=0;s<o.length;s++)if(!(o[s]===".priority"&&s===o.length-1)){if(!Ed(o[s]))throw new Error(t+"contains an invalid key ("+o[s]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gO);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ln(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},r3=function(t,e,n,r){if(r&&e===void 0)return;const i=dl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const o=[];ht(e,(s,a)=>{const l=new he(s);if(Id(i,a,je(n,l)),wg(l)===".priority"&&!Lp(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(l)}),n3(i,o)},i3=function(t,e,n,r){if(!(r&&n===void 0)&&!Ed(n))throw new Error(dl(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Vg=function(t,e,n,r){if(!(r&&n===void 0)&&!QC(n))throw new Error(dl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},o3=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vg(t,e,n,r)},JC=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},s3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ed(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!t3(n))throw new Error(dl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class a3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Td(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],o=i.getPath();n!==null&&!bg(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function XC(t,e,n){Td(t,n),ZC(t,r=>bg(r,e))}function pn(t,e,n){Td(t,n),ZC(t,r=>ln(r,e)||ln(e,r))}function ZC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const o=i.path;e(o)?(l3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function l3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ei&&ct("event: "+n.toString()),gs(r)}}}/**
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
 */const c3="repo_interrupt",u3=25;class d3{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new a3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Eu(),this.transactionQueueTree_=new zg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function f3(t,e,n){if(t.stats_=yg(t.repoInfo_),t.forceRestClient_||zA())t.server_=new xu(t.repoInfo_,(r,i,o,s)=>{m_(t,r,i,o,s)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>g_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new er(t.repoInfo_,e,(r,i,o,s)=>{m_(t,r,i,o,s)},r=>{g_(t,r)},r=>{h3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=GA(t.repoInfo_,()=>new qO(t.stats_,t.server_)),t.infoData_=new BO,t.infoSyncTree_=new h_({startListening:(r,i,o,s)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=_l(t.infoSyncTree_,r._path,l),setTimeout(()=>{s("ok")},0)),a},stopListening:()=>{}}),Wg(t,"connected",!1),t.serverSyncTree_=new h_({startListening:(r,i,o,s)=>(t.server_.listen(r,o,i,(a,l)=>{const c=s(a,l);pn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ex(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kd(t){return qj({timestamp:ex(t)})}function m_(t,e,n,r,i){t.dataUpdateCount++;const o=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let s=[];if(i)if(r){const l=fu(n,c=>qe(c));s=zj(t.serverSyncTree_,o,l,i)}else{const l=qe(n);s=zC(t.serverSyncTree_,o,l,i)}else if(r){const l=fu(n,c=>qe(c));s=Fj(t.serverSyncTree_,o,l)}else{const l=qe(n);s=_l(t.serverSyncTree_,o,l)}let a=o;s.length>0&&(a=Jo(t,o)),pn(t.eventQueue_,a,s)}function g_(t,e){Wg(t,"connected",e),e===!1&&v3(t)}function h3(t,e){ht(e,(n,r)=>{Wg(t,n,r)})}function Wg(t,e,n){const r=new he("/.info/"+e),i=qe(n);t.infoData_.updateSnapshot(r,i);const o=_l(t.infoSyncTree_,r,i);pn(t.eventQueue_,r,o)}function Hg(t){return t.nextWriteId_++}function p3(t,e,n){const r=Bj(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const o=qe(i).withIndex(e._queryParams.getIndex());Dp(t.serverSyncTree_,e,n,!0);let s;if(e._queryParams.loadsAllData())s=_l(t.serverSyncTree_,e._path,o);else{const a=Ka(t.serverSyncTree_,e);s=zC(t.serverSyncTree_,e._path,o,a)}return pn(t.eventQueue_,e._path,s),Ou(t.serverSyncTree_,e,n,null,!0),o},i=>(Sl(t,"get for query "+Ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function m3(t,e,n,r,i){Sl(t,"set",{path:e.toString(),value:n,priority:r});const o=kd(t),s=qe(n,r),a=jg(t.serverSyncTree_,e),l=GC(s,a,o),c=Hg(t),f=UC(t.serverSyncTree_,e,l,c,!0);Td(t.eventQueue_,f),t.server_.put(e.toString(),s.val(!0),(h,p)=>{const v=h==="ok";v||It("set at "+e+" failed: "+h);const y=Ar(t.serverSyncTree_,c,!v);pn(t.eventQueue_,e,y),Fp(t,i,h,p)});const u=qg(t,e);Jo(t,u),pn(t.eventQueue_,u,[])}function g3(t,e,n,r){Sl(t,"update",{path:e.toString(),value:n});let i=!0;const o=kd(t),s={};if(ht(n,(a,l)=>{i=!1,s[a]=HC(je(e,a),qe(l),t.serverSyncTree_,o)}),i)ct("update() called with empty data.  Don't do anything."),Fp(t,r,"ok",void 0);else{const a=Hg(t),l=Lj(t.serverSyncTree_,e,s,a);Td(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,f)=>{const u=c==="ok";u||It("update at "+e+" failed: "+c);const h=Ar(t.serverSyncTree_,a,!u),p=h.length>0?Jo(t,e):e;pn(t.eventQueue_,p,h),Fp(t,r,c,f)}),ht(n,c=>{const f=qg(t,je(e,c));Jo(t,f)}),pn(t.eventQueue_,e,[])}}function v3(t){Sl(t,"onDisconnectEvents");const e=kd(t),n=Eu();Rp(t.onDisconnect_,le(),(i,o)=>{const s=HC(i,o,t.serverSyncTree_,e);EC(n,i,s)});let r=[];Rp(n,le(),(i,o)=>{r=r.concat(_l(t.serverSyncTree_,i,o));const s=qg(t,i);Jo(t,s)}),t.onDisconnect_=Eu(),pn(t.eventQueue_,le(),r)}function y3(t,e,n){let r;ee(e._path)===".info"?r=Dp(t.infoSyncTree_,e,n):r=Dp(t.serverSyncTree_,e,n),XC(t.eventQueue_,e._path,r)}function v_(t,e,n){let r;ee(e._path)===".info"?r=Ou(t.infoSyncTree_,e,n):r=Ou(t.serverSyncTree_,e,n),XC(t.eventQueue_,e._path,r)}function _3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(c3)}function Sl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ct(n,...e)}function Fp(t,e,n,r){e&&gs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let o=i;r&&(o+=": "+r);const s=new Error(o);s.code=i,e(s)}})}function tx(t,e,n){return jg(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function Gg(t,e=t.transactionQueueTree_){if(e||Rd(t,e),ys(e)){const n=rx(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&w3(t,wl(e),n)}else KC(e)&&xd(e,n=>{Gg(t,n)})}function w3(t,e,n){const r=n.map(c=>c.currentWriteId),i=tx(t,e,r);let o=i;const s=i.hash();for(let c=0;c<n.length;c++){const f=n[c];A(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=xt(e,f.path);o=o.updateChild(u,f.currentOutputSnapshotRaw)}const a=o.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Sl(t,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(Ar(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Rd(t,Bg(t.transactionQueueTree_,e)),Gg(t,t.transactionQueueTree_),pn(t.eventQueue_,e,f);for(let h=0;h<u.length;h++)gs(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{It("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Jo(t,e)}},s)}function Jo(t,e){const n=nx(t,e),r=wl(n),i=rx(t,n);return b3(t,i,r),r}function b3(t,e,n){if(e.length===0)return;const r=[];let i=[];const s=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=xt(n,l.path);let f=!1,u;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,u=l.abortReason,i=i.concat(Ar(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=u3)f=!0,u="maxretry",i=i.concat(Ar(t.serverSyncTree_,l.currentWriteId,!0));else{const h=tx(t,l.path,s);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Id("transaction failed: Data returned ",p,l.path);let v=qe(p);typeof p=="object"&&p!=null&&zn(p,".priority")||(v=v.updatePriority(h.getPriority()));const x=l.currentWriteId,g=kd(t),m=GC(v,h,g);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=m,l.currentWriteId=Hg(t),s.splice(s.indexOf(x),1),i=i.concat(UC(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(Ar(t.serverSyncTree_,x,!0))}else f=!0,u="nodata",i=i.concat(Ar(t.serverSyncTree_,l.currentWriteId,!0))}pn(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}Rd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)gs(r[a]);Gg(t,t.transactionQueueTree_)}function nx(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&ys(r)===void 0;)r=Bg(r,n),e=ye(e),n=ee(e);return r}function rx(t,e){const n=[];return ix(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ix(t,e,n){const r=ys(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);xd(e,i=>{ix(t,i,n)})}function Rd(t,e){const n=ys(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,qC(e,n.length>0?n:void 0)}xd(e,r=>{Rd(t,r)})}function qg(t,e){const n=wl(nx(t,e)),r=Bg(t.transactionQueueTree_,e);return Jj(r,i=>{qf(t,i)}),qf(t,r),YC(r,i=>{qf(t,i)}),n}function qf(t,e){const n=ys(e);if(n){const r=[];let i=[],o=-1;for(let s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(A(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(A(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(Ar(t.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?qC(e,void 0):n.length=o+1,pn(t.eventQueue_,wl(e),i);for(let s=0;s<r.length;s++)gs(r[s])}}/**
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
 */function S3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function C3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const y_=function(t,e){const n=x3(t),r=n.namespace;n.domain==="firebase.com"&&dr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&dr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||AA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new aC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new he(n.pathString)}},x3=function(t){let e="",n="",r="",i="",o="",s=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(f,u)),f<u&&(i=S3(t.substring(f,u)));const h=C3(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(s=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),o=r}"ns"in h&&(o=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
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
 */const __="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",E3=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const o=new Array(8);for(i=7;i>=0;i--)o[i]=__.charAt(n%64),n=Math.floor(n/64);A(n===0,"Cannot push at time == 0");let s=o.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=__.charAt(e[i]);return A(s.length===20,"nextPushId: Length should be 20."),s}}();/**
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
 */class ox{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class sx{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ax{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ki{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return te(this._path)?null:wg(this._path)}get ref(){return new Bn(this._repo,this._path)}get _queryIdentifier(){const e=r_(this._queryParams),n=gg(e);return n==="{}"?"default":n}get _queryObject(){return r_(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof Ki))return!1;const n=this._repo===e._repo,r=bg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mO(this._path)}}function I3(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Kg(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Ii){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Li)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Jr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Re){if(e!=null&&!Lp(e)||n!=null&&!Lp(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(A(t.getIndex()instanceof xg||t.getIndex()===CC,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function lx(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Bn extends Ki{constructor(e,n){super(e,n,new Ig,!1)}get parent(){const e=gC(this._path);return e===null?null:new Bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),r=Zo(this.ref,e);return new Xo(this._node.getChild(n),r,Re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Xo(i,Zo(this.ref,r),Re)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function B(t,e){return t=At(t),t._checkNotDeleted("ref"),e!==void 0?Zo(t._root,e):t._root}function Zo(t,e){return t=At(t),ee(t._path)===null?o3("child","path",e,!1):Vg("child","path",e,!1),new Bn(t._repo,je(t._path,e))}function cx(t,e){t=At(t),JC("push",t._path),bl("push",e,t._path,!0);const n=ex(t._repo),r=E3(n),i=Zo(t,r),o=Zo(t,r);let s;return e!=null?s=Te(o,e).then(()=>o):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function Te(t,e){t=At(t),JC("set",t._path),bl("set",e,t._path,!1);const n=new cl;return m3(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bt(t,e){r3("update",e,t._path,!1);const n=new cl;return g3(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Qe(t){t=At(t);const e=new ax(()=>{}),n=new Pd(e);return p3(t._repo,t,n).then(r=>new Xo(r,new Bn(t._repo,t._path),t._queryParams.getIndex()))}class Pd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ox("value",this,new Xo(e.snapshotNode,new Bn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sx(this,e,n):null}matches(e){return e instanceof Pd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Yg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sx(this,e,n):null}createEvent(e,n){A(e.childName!=null,"Child events should have a childName.");const r=Zo(new Bn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ox(e.type,this,new Xo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Yg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function T3(t,e,n,r,i){let o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){const l=n,c=(f,u)=>{v_(t._repo,t,a),l(f,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const s=new ax(n,o||void 0),a=e==="value"?new Pd(s):new Yg(e,s);return y3(t._repo,t,a),()=>v_(t._repo,t,a)}function k3(t,e,n,r){return T3(t,"value",e,n,r)}class Cl{}class R3 extends Cl{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bl("endAt",this._value,e._path,!0);const n=UO(e._queryParams,this._value,this._key);if(lx(n),Kg(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ki(e._repo,e._path,n,e._orderByCalled)}}class P3 extends Cl{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){bl("startAt",this._value,e._path,!0);const n=$O(e._queryParams,this._value,this._key);if(lx(n),Kg(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ki(e._repo,e._path,n,e._orderByCalled)}}class N3 extends Cl{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ki(e._repo,e._path,FO(e._queryParams,this._limit),e._orderByCalled)}}function A3(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new N3(t)}class O3 extends Cl{constructor(e){super(),this._path=e}_apply(e){I3(e,"orderByChild");const n=new he(this._path);if(te(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new xg(n),i=zO(e._queryParams,r);return Kg(i),new Ki(e._repo,e._path,i,!0)}}function Ya(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Vg("orderByChild","path",t,!1),new O3(t)}class j3 extends Cl{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(bl("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new R3(this._value,this._key)._apply(new P3(this._value,this._key)._apply(e))}}function Qa(t,e){return i3("equalTo","key",e,!0),new j3(t,e)}function Ja(t,...e){let n=At(t);for(const r of e)n=r._apply(n);return n}Rj(Bn);jj(Bn);/**
 * @license
 * Copyright 2020 Google LLC
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
 */const D3="FIREBASE_DATABASE_EMULATOR_HOST",$p={};let M3=!1;function L3(t,e,n,r){t.repoInfo_=new aC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function F3(t,e,n,r,i){let o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||dr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ct("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let s=y_(o,i),a=s.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[D3]),c?(l=!0,o=`http://${c}?ns=${a.namespace}`,s=y_(o,i),a=s.repoInfo):l=!s.repoInfo.secure;const f=i&&l?new Po(Po.OWNER):new VA(t.name,t.options,e);s3("Invalid Firebase Database URL",s),te(s.path)||dr("Database URL must point to the root of a Firebase Database (not including a child path).");const u=U3(a,t,f,new BA(t.name,n));return new z3(u,t)}function $3(t,e){const n=$p[e];(!n||n[t.key]!==t)&&dr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_3(t),delete n[t.key]}function U3(t,e,n,r){let i=$p[e.name];i||(i={},$p[e.name]=i);let o=i[t.toURLString()];return o&&dr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new d3(t,M3,n,r),i[t.toURLString()]=o,o}let z3=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(f3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&($3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&dr("Cannot call "+e+" on a deleted database.")}};function B3(t=uS(),e){const n=og(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=ZR("database");r&&V3(n,...r)}return n}function V3(t,e,n,r={}){t=At(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&dr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&dr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Po(Po.OWNER);else if(r.mockUserToken){const s=typeof r.mockUserToken=="string"?r.mockUserToken:eP(r.mockUserToken,t.app.options.projectId);o=new Po(s)}L3(i,e,n,o)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function W3(t){TA(fs),qo(new Oi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return F3(r,i,o,n)},"PUBLIC").setMultipleInstances(!0)),Hr(U0,z0,t),Hr(U0,z0,"esm2017")}er.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};er.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};W3();const H3=async t=>{try{return await bt(B(V,`users/${t.id}`),{name:t.name,profilePicture:t.profilePicture}),console.log(`Updated user ${t.id} in database. (UpdateUserInDatabase)`),{data:t,error:null}}catch(e){return console.log(`Error updating user ${t.id} in database. (UpdateUserInDatabase)
${e}`),{data:null,error:e}}},G3=async t=>{try{return await Te(B(V,`users/${t.uid}`),null),console.log(`Deleted user ${t.uid} from database. (DeleteUserFromDatabase)`),{data:null,error:null}}catch(e){return console.log(`Error deleting user ${t.uid} from database. (DeleteUserFromDatabase)
${e}`),{data:null,error:e}}},ux=async t=>{try{const e=t.displayName??"Default Name",n=t.photoURL??`https://robohash.org/${t.uid}`,r={id:t.uid,email:t.email,name:e,profilePicture:n,projects:[]},i=B(V,`users/${t.uid}`),o=await Qe(i);if(!o.exists())console.log(`Set user ${t.uid} to database. (SaveUserToDatabase)`),await Te(i,r);else return console.log(`User ${t.uid} already exists in database. (SaveUserToDatabase)`),{data:{isAuthenticated:!0,id:o.val().id,email:o.val().email,name:o.val().name,profilePicture:o.val().profilePicture,projects:o.val().projects},error:null};return{data:{isAuthenticated:!0,...r},error:null}}catch(e){return{data:null,error:e}}},w_={id:0,key:"global",level:0},dx=(t,e,n)=>({id:t,key:e,level:n}),Qg={};Qg[w_.id]=w_;const q3=(t,e)=>({cloud:!1,scopes:Qg,projectBanner:"https://images.unsplash.com/photo-1482514194978-3ed8cc9d86c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",projectId:"",projectName:t,projectDescription:e,projectCreatedAt:Date.now(),entryMap:{},tables:[],owner:"",members:[],inviteCode:""}),b_=(t,e)=>{const{tables:n}=t;for(const r of Object.values(n)){const{events:i,facts:o,rules:s}=r;if(e in i)return i[e];if(e in o)return o[e];if(e in s)return s[e]}return null},Nc=t=>Nd(t.entryMap),Nd=t=>{const e=Object.keys(t).map(Number);return e.length===0?0:Math.max(...e)+1},fx=t=>{const e=Object.keys(t).map(Number);return e.length===0?0:Math.max(...e)+1},hx=t=>{const e=Math.floor((new Date().getTime()-t.getTime())/864e5);return e<7?`${e} days ago`:e>=365?`${Math.floor(e/365)} year(s) ago`:e>=30?`${Math.floor(e/30)} month(s) ago`:e>=7?`${Math.floor(e/4)} week(s) ago`:"How did we get here?!"},K3=t=>Object.values(t.tables).length,Y3=t=>Object.keys(t.entryMap).length,Q3=t=>Object.keys(t.scopes).length,J3=t=>{const e=Object.values(t.scopes);return e.length>0?Math.max(...e.map(n=>n.level)):0},X3=t=>t.members.length,px=t=>`${t.projectId}/${t.inviteCode}`,Z3=t=>`inkwell.systems/invite/${px(t)}}`,e4=()=>{function t(n){return n.toString(16).padStart(2,"0")}const e=new Uint8Array(40/2);return window.crypto.getRandomValues(e),Array.from(e,t).join("")},mx=async(t,e,n,r,i,o)=>{try{const s=await cx(B(V,"projects/")),a={projectId:s.key,projectBanner:"https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",scopes:r,projectName:t,projectDescription:e,projectCreatedAt:Date.now(),entryMap:o,tables:i,owner:n.id,members:[],inviteCode:e4()};await Te(B(V,`projects/${s.key}`),a);const l=await Qe(B(V,`users/${n.id}`));if(l.exists()&&l.val().projects!==void 0){const c=l.val().projects;await Te(B(V,`users/${n.id}/projects`),[...c,s.key])}else await Te(B(V,`users/${n.id}/projects`),[s.key]);return console.log(`Created project ${s.key} in database. (CreateProjectInDatabase)`),{data:{cloud:!0,...a},error:null}}catch(s){return console.log(`Failed to create project in database. (CreateProjectInDatabase)
 ${s}`),{data:null,error:s}}},_s=async t=>{try{const e=await Qe(B(V,`projects/${t}`));return e.exists()?{data:yx(e),error:null}:{data:null,error:new Error("Project does not exist.")}}catch(e){return{data:null,error:e}}},Jg=async t=>{try{const e=await Qe(B(V,`users/${t}/projects`));if(!e.exists())return{data:[],error:null};const n=[];for(const r of e.val()){const i=await _s(r);i.error||n.push(i.data)}return console.log(`Fetched ${n.length} projects from database. (FetchUserProjectsFromDatabase)`),{data:n,error:null}}catch(e){return console.log(`Failed to fetch user projects from database. (FetchUserProjectsFromDatabase)
 ${e}`),{data:null,error:e}}},t4=async(t,e)=>{try{const n=await _s(t);return n.error?(console.log(`Error fetching project ${t} from database. (FetchProjectInviteLink)`),console.error(n.error),{data:null,error:n.error}):n.data.inviteCode!==e?(console.log(`Invalid invite code for project ${t}. (FetchProjectInviteLink)`),{data:null,error:new Error(`Invalid invite code for project ${t}.`)}):{data:n.data,error:null}}catch(n){return console.log("Failed to fetch project invite link from database. (FetchProjectInviteLink)"),console.error(n),{data:null,error:n}}},n4=async t=>{try{return t.cloud?(await bt(B(V,`projects/${t.projectId}`),{entryMap:t.entryMap,scopes:t.scopes,projectBanner:t.projectBanner,projectName:t.projectName,projectDescription:t.projectDescription}),console.log(`Updated project ${t.projectId} in database. (UpdateProject)`),{data:t,error:null}):(console.log(`Project ${t.projectId} is being removed from the cloud. (UpdateProject)`),await gx(t),{data:null,error:null})}catch(e){return console.log(`Failed to update project ${t.projectId} in database. (UpdateProject)`),console.error(e),{data:null,error:e}}},gx=async t=>{try{const e=[t.owner,...t.members];for(const i of e){const o=await Qe(B(V,`users/${i}`));o.exists()&&await bt(B(V,`users/${i}`),{projects:[...o.val().projects.filter(s=>s!==t.projectId)]})}const n=Ja(B(V,"invitations"),Ya("projectId"),Qa(t.projectId)),r=await Qe(n);if(r.exists()){const i=Object.values(r.val());for(const o of i)await Te(B(V,`invitations/${o.id}`),null)}return await Te(B(V,`projects/${t.projectId}`),null),console.log(`Deleted project ${t.projectId} from database. (DeleteProject)`),{data:null,error:null}}catch(e){return console.log(`Failed to delete project ${t.projectId} in database. (DeleteProject)`),console.error(e),{data:null,error:e}}},r4=(t,e)=>{const n=B(V,`projects/${t}`);return k3(n,e)},vx=async(t,e)=>{try{const n=await _s(e);if(n.error)return console.log(`Error fetching project ${e} from database. (AddUserToProject)`),console.error(n.error),{data:null,error:n.error};if(n.data.members.includes(t))return console.log(`User ${t} is already a member of project ${e}. (AddUserToProject)`),{data:null,error:new Error(`User ${t} is already a member of project ${e}.`)};await bt(B(V,`projects/${e}`),{members:[...n.data.members,t]});const r=await Jg(t);return r.error?(console.log(`Error fetching projects for user ${t} from database. (AddUserToProject)`),console.error(r.error),{data:null,error:r.error}):(await bt(B(V,`users/${t}`),{projects:[...r.data,e]}),{data:null,error:null})}catch(n){return console.log(`Error adding user ${t} to project ${e}. (AddUserToProject)`),console.error(n),{data:null,error:n}}},i4=async(t,e)=>{try{const n=await _s(t);if(n.error)return console.log(`Error fetching project ${t} to remove user ${e}. (RemoveUserFromProject)`),console.error(n.error),{data:null,error:n.error};if(e===n.data.owner)return console.log(`Attempted to remove owner ${e} from project ${t}. Aborting (RemoveUserFromProject)`),{data:null,error:new Error(`Attempted to remove owner ${e} from project ${t}. (RemoveUserFromProject)`)};if(!n.data.members.includes(e))return console.log(`Attempted to remove user ${e} from project ${t} but they are not a member. Aborting (RemoveUserFromProject)`),{data:null,error:new Error(`Attempted to remove user ${e} from project ${t} but they are not a member. (RemoveUserFromProject)`)};const r=await Jg(e);return r.error?(console.log(`Error fetching user ${e} projects. (RemoveUserFromProject)`),console.error(r.error),{data:null,error:r.error}):(await bt(B(V,`projects/${t}`),{members:n.data.members.filter(i=>i!==e)}),await bt(B(V,`users/${e}`),{projects:r.data.filter(i=>i.projectId!==t)}),console.log(`Removed user ${e} from project ${t}. (RemoveUserFromProject)`),{data:null,error:null})}catch(n){return console.log(`Error removing user ${e} from project ${t}. (RemoveUserFromProject)`),console.error(n),{data:null,error:n}}},yx=t=>{const e={cloud:!0,...t.val()};e.entryMap===void 0&&(e.entryMap={}),e.members===void 0&&(e.members=[]),e.tables===void 0&&(e.tables={}),e.scopes===void 0&&(e.scopes={});for(const n of Object.values(e.tables))if(n!==void 0){n.facts===void 0&&(n.facts={}),n.events===void 0&&(n.events={}),n.rules===void 0&&(n.rules={});for(const r of Object.values(n.events))r!==void 0&&r.triggers===void 0&&(r.triggers=[]);for(const r of Object.values(n.rules))r!==void 0&&(r.ruleCriteria===void 0&&(r.ruleCriteria=[]),r.ruleModifications===void 0&&(r.ruleModifications=[]))}return e},S_=async t=>{try{const e=await Qe(B(V,`users/${t}`));return e.exists()?(console.log(`Successfully fetched user ${t} from database. (FetchUser)`),{data:{id:t,name:e.val().name,email:e.val().email,profilePicture:e.val().profilePicture},error:null}):(console.log(`Tried fetching user ${t}, but such a user does not exist. (FetchUser)`),{data:null,error:new Error(`User ${t} does not exist.`)})}catch(e){return console.log(`Error fetching user ${t}from database. (FetchUser)`),console.error(e),{data:null,error:e}}},o4=async t=>{try{const e=B(V,"users"),n=Ja(e,Ya("email"),Qa(t),A3(1)),r=await Qe(n);return r.exists()?{data:r.val()[Object.keys(r.val())[0]],error:null}:(console.log(`Tried fetching user with email ${t}, but such a user does not exist. (FetchUser)`),{data:null,error:new Error(`User with email ${t} does not exist.`)})}catch(e){return console.log(`Error fetching user with email ${t} from database. (FetchUser)`),console.error(e),{data:null,error:e}}},s4=async(t,e,n,r)=>{try{const i=await o4(t);if(i.error)return console.log(`Error fetching user ${t} from database. (CreateInvitation)`),console.error(i.error),{data:null,error:i.error};const o=await _s(n);if(o.error)return console.log(`Error fetching project ${n} from database. (CreateInvitation)`),console.error(o.error),{data:null,error:o.error};if(o.data.members.includes(i.data.id))return console.log(`User ${i.data.id} is already a member of project ${n}. (CreateInvitation)`),{data:null,error:new Error(`User ${i.data.id} is already a member of project ${n}.`)};const s=B(V,"invitations/"),a=Ja(s,Ya("userIdTo"),Qa(i.data.id)),l=await Qe(a),c=Ja(s,Ya("projectId"),Qa(n)),f=await Qe(c);if(l.exists()&&f.exists()){const p=l.val(),v=f.val();console.log(p),console.log(v);for(const y in p)if(v[y])return console.log(`User ${i.data.id} already has an invitation to project ${n}. (CreateInvitation)`),{data:null,error:new Error(`User ${i.data.id} already has an invitation to project ${n}.`)}}const u={id:"",userIdTo:i.data.id,userIdFrom:e,projectId:n,createdAt:new Date,message:r},h=await cx(B(V,"invitations/"));return u.id=h.key,await Te(h.ref,u),console.log(`Invitation created: ${u.id}. From ${e} to ${i.data.id}. (CreateInvitation)`),{data:u,error:null}}catch(i){return{data:null,error:i}}},a4=async(t,e)=>{try{const n=await vx(t,e);return n.error?(console.log(`Error adding user ${t} to project ${e}. (AcceptLinkInvitation)`),console.error(n.error),{data:null,error:n.error}):{data:null,error:null}}catch(n){return console.log(`Error accepting invitation for user ${t}. (AcceptLinkInvitation)`),console.error(n),{data:null,error:n}}},l4=async t=>{try{const e=await vx(t.userIdTo,t.projectId);return e.error?(console.log(`Error adding user ${t.userIdTo} to project ${t.projectId}. (AcceptInvitation)`),console.error(e.error),{data:null,error:e.error}):(await Te(B(V,`invitations/${t.id}`),null),console.log(`Successfully accepted invitation to ${t.projectId} for user ${t.userIdTo}. (AcceptInvitation)`),{data:null,error:null})}catch(e){return console.log(`Error accepting invitation to ${t.projectId} for user ${t.userIdTo}. (AcceptInvitation)`),console.error(e),{data:null,error:e}}},c4=async t=>{try{const e=Ja(B(V,"invitations"),Ya("userIdTo"),Qa(t)),n=await Qe(e);if(!n.exists())return console.log("No invitations found!"),{data:[],error:null};const r=[];return n.forEach(i=>{const o=i.val();r.push(o)}),{data:r,error:null}}catch(e){return console.log(`Error fetching invitations for user ${t}! (FetchUserInvitations)`),console.error(e),{data:null,error:e}}},u4=t=>Object.values(t.events),d4=t=>Object.values(t.facts),f4=t=>Object.values(t.rules),_x=t=>[...u4(t),...d4(t),...f4(t)],h4=t=>_x(t).map(e=>e.id),wx=(t,e)=>({id:Nc(e),key:t,events:{},facts:{},rules:{}}),p4=async(t,e)=>{try{const n=await _s(e);if(n.error)return console.log(`Error fetching project ${e}. (CreateTable)`),{data:null,error:n.error};const r=n.data.entryMap||{},i=wx(t,n.data);return console.log(i),await Te(B(V,`projects/${e}/tables/${i.id}`),i),await bt(B(V,`projects/${e}/`),{entryMap:{...r,[i.id]:t}}),console.log(`Created table ${t} in project ${e}. (CreateTable)`),{data:i,error:null}}catch(n){return console.log(`Error creating table ${t} in project ${e}. (CreateTable)`),{data:null,error:n}}},m4=async(t,e,n)=>{try{await bt(B(V,`projects/${e}/tables/${n}`),{key:t}),await Te(B(V,`projects/${e}/entryMap/${n}`),t)}catch(r){console.log(`Error updating table key ${t} in project ${e}. (UpdateTableName)`),console.error(r)}},g4=async(t,e)=>{try{const n=[],r=await Qe(B(V,`projects/${t}/tables/${e}`));if(r.exists()){const o=r.val();o.facts===void 0&&(o.facts={}),o.events===void 0&&(o.events={}),o.rules===void 0&&(o.rules={}),n.push(...Object.keys(o.facts)),n.push(...Object.keys(o.events)),n.push(...Object.keys(o.rules))}const i=(await Qe(B(V,`projects/${t}/entryMap`))).val();for(const o of n)i[o]=null;await Te(B(V,`projects/${t}/entryMap`),i),await Te(B(V,`projects/${t}/tables/${e}`),null),await Te(B(V,`projects/${t}/entryMap/${e}`),null)}catch(n){console.log(`Error deleting table ${e} in project ${t}. (DeleteTable)`),console.error(n)}},No=t=>bx(t)?"facts":Sx(t)?"events":"rules",bx=t=>t.factGuard!==void 0,Sx=t=>t.eventGuard!==void 0,v4=t=>t.ruleGuard!==void 0,Cx=t=>({key:"New Event",id:t,value:0,eventGuard:1,triggers:[]}),xx=t=>({key:"New Fact",id:t,value:0,factGuard:1}),y4=t=>{switch(t){case"=":return"set";case"+":return"increment";default:return null}},_4=t=>{switch(t){case"set":return"=";case"increment":return"+";default:return""}},w4=t=>{const e=y4(t[1]),n=parseInt(t[0]),r=parseInt(t[2]);return!isNaN(n)&&e!==null&&!isNaN(r)?{modifiedEntry:n,modificationOperator:e,modifyWithValue:r}:null},b4=t=>{const e=_4(t.modificationOperator),n=t.modifiedEntry,r=t.modifyWithValue;return`|${n}, ${e}, ${r}|`};var Gt=(t=>(t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanOrEqual="greaterThanOrEqual",t.LessThan="lessThan",t.LessThanOrEqual="lessThanOrEqual",t))(Gt||{});const S4=t=>{switch(t){case"==":return Gt.Equal;case"!=":return Gt.NotEqual;case">":return Gt.GreaterThan;case">=":return Gt.GreaterThanOrEqual;case"<":return Gt.LessThan;case"<=":return Gt.LessThanOrEqual;default:return null}},C4=t=>{switch(t){case Gt.Equal:return"==";case Gt.NotEqual:return"!=";case Gt.GreaterThan:return">";case Gt.GreaterThanOrEqual:return">=";case Gt.LessThan:return"<";case Gt.LessThanOrEqual:return"<=";default:return""}},x4=t=>{const e=S4(t[1]),n=parseInt(t[0]),r=parseInt(t[2]);return!isNaN(n)&&e!==null&&!isNaN(r)?{comparedEntry:n,compareValue:r,comparisonOperator:e}:null},E4=t=>{const e=C4(t.comparisonOperator),n=t.comparedEntry,r=t.compareValue;return`|${n}, ${e}, ${r}|`},Ex=t=>({key:"New Rule",id:t,value:0,ruleGuard:1,ruleTriggers:[],ruleCriteria:[],ruleModifications:[]}),I4=async(t,e)=>{try{const n=(await Qe(B(V,`projects/${t}/entryMap`))).val(),r=Nd(n),i=xx(r);await Te(B(V,`projects/${t}/tables/${e}/facts/${r}`),i),await bt(B(V,`projects/${t}/`),{entryMap:{...n,[i.id]:i.key}}),console.log(`Fact ${r} created in project ${t}. (CreateFact)`)}catch(n){console.log(`Error creating fact in project ${t}. (CreateFact)`),console.error(n)}},T4=async(t,e)=>{try{const n=(await Qe(B(V,`projects/${t}/entryMap`))).val(),r=Nd(n),i=Cx(r);await Te(B(V,`projects/${t}/tables/${e}/events/${r}`),i),await bt(B(V,`projects/${t}/`),{entryMap:{...n,[i.id]:i.key}}),console.log(`Event ${r} created in project ${t}. (CreateEvent)`)}catch(n){console.log(`Error creating event in project ${t}. (CreateEvent)`),console.error(n)}},k4=async(t,e)=>{try{const n=(await Qe(B(V,`projects/${t}/entryMap`))).val(),r=Nd(n),i=Ex(r);await Te(B(V,`projects/${t}/tables/${e}/rules/${i.id}`),i),await bt(B(V,`projects/${t}/`),{entryMap:{...n,[i.id]:i.key}}),console.log(`Rule ${r} created in project ${t}. (CreateRule)`)}catch(n){console.log(`Error creating rule in project ${t}. (CreateRule)`),console.error(n)}},Ix=async(t,e,n,r,i,o)=>{try{const s={};i&&(s.key=i),o&&(s.value=o);const a=B(V,`projects/${e}/tables/${n}/${t}/${r}`);await bt(a,s),i&&await bt(B(V,`projects/${e}/entryMap`),{[r]:i})}catch(s){console.log(`Error updating entry ${r} in project ${e}. (UpdateEntryKey)`),console.error(s)}},R4=async(t,e,n,r)=>{try{console.log(r);const i=B(V,`projects/${t}/tables/${e}/events/${n}`),o=(await Qe(i)).val();typeof o.triggers>"u"?await Te(i,{...o,triggers:r}):await bt(i,{triggers:r}),console.log(`Updated triggers for event ${n} in project ${t}. (UpdateEventTriggers)`)}catch(i){console.log(`Error updating triggers for event ${n} in project ${t}. (UpdateEventTriggers)`),console.error(i)}},P4=async(t,e,n,r,i)=>{try{const o=B(V,`projects/${t}/tables/${e}/rules/${n}`),s=(await Qe(o)).val();console.log("Trying to update rule specific with",r,i),await Te(o,{...s,ruleCriteria:r,ruleModifications:i}),console.log(`Updated rule ${n} in project ${t}. (UpdateRuleSpecific)`)}catch(o){console.log(`Error updating rule ${n} in project ${t}. (UpdateRuleSpecific)`),console.error(o)}},N4=async(t,e,n,r)=>{try{await Te(B(V,`projects/${t}/tables/${e}/${n}/${r}`),null),await Te(B(V,`projects/${t}/entryMap/${r}`),null)}catch(i){console.log(`Error deleting entry ${r} in project ${t}. (DeleteEntry)`),console.error(i)}},A4=async t=>{try{const e=(await Qe(B(V,`projects/${t}/scopes`))).val(),n=fx(e||{}),r=dx(n,"New Scope",-1);await Te(B(V,`projects/${t}/scopes/${n}`),r),console.log(`Created scope ${n} for project ${t}.`)}catch(e){console.log(`An error occurred while creating a scope for project ${t}.`),console.error(e)}},O4=async(t,e)=>{try{await Te(B(V,`projects/${t}/scopes/${e}`),null),console.log(`Deleted scope ${e} from project ${t}.`)}catch(n){console.log(`An error occurred while deleting scope ${e} from project ${t}.`),console.error(n)}},j4=async(t,e,n,r)=>{try{const i={};n&&(i.level=n),r&&(i.key=r);const o=B(V,`projects/${t}/scopes/${e}`);await bt(o,i),console.log(`Scope ${e} in project ${t} updated.`)}catch(i){console.log(`Error updating scope ${e} in project ${t}.`),console.error(i)}},D4={apiKey:"AIzaSyAHJwmfTin3xmfEhlupyDKI4yllk8FsJwM",authDomain:"inkwell-7dff3.firebaseapp.com",projectId:"inkwell-7dff3",storageBucket:"inkwell-7dff3.appspot.com",messagingSenderId:"48189402311",appId:"1:48189402311:web:912ba068609ce2fe0b22e2",databaseURL:"https://inkwell-7dff3-default-rtdb.europe-west1.firebasedatabase.app"};console.log("Initialized firebase!");const Tx=cS(D4),V=B3(Tx),xl=IA(Tx),kx=new qn;kx.setCustomParameters({prompt:"select_account"});const Rx=async()=>{try{const e=(await DN(xl,kx)).user,n=await ux(e);if(n.error)return{data:null,error:n.error};const r=n.data;return typeof r.projects>"u"&&(r.projects=[]),console.log("GOOGLE SIGN IN"),console.log(r),{data:r,error:null}}catch(t){return{data:null,error:t}}},M4=async(t,e)=>{try{const r=(await dN(xl,t,e)).user,i=await ux(r);return i.error?{data:null,error:i.error}:{data:i.data,error:null}}catch(n){return{data:null,error:n}}},L4=async(t,e)=>{try{const r=(await fN(xl,t,e)).user;return{data:{isAuthenticated:!0,id:r.uid,email:r.email,name:r.displayName,profilePicture:r.photoURL,projects:[]},error:null}}catch(n){return{data:null,error:n}}},F4=async()=>{await xl.signOut(),console.log("Signed out user. (SignUserOut)")},$4=async()=>{const t=xl.currentUser;if(t){const e=await G3(t);return e.error?{data:null,error:e.error}:(await t.delete(),{data:null,error:null})}},Px=b.createContext({value:null,setValue:()=>{console.log("ProjectProvider: setValue() is not implemented")}}),U4=({children:t})=>{const[e,n]=b.useState(null);return b.useEffect(()=>{const r=localStorage.getItem("project");if(r&&r!=="null"){const i=JSON.parse(r);i.cloud||n(i)}},[]),b.useEffect(()=>{e!==null&&!e.cloud&&localStorage.setItem("project",JSON.stringify(e))},[e]),d.jsx(Px.Provider,{value:{value:e,setValue:n},children:t})},Je=()=>{const t=b.useContext(Px);if(!t)throw new Error("useProjectProvider must be used within a ProjectProvider");return t},Kf=C.img`
    width: 1.5em;
    height: 1.5em;

    margin-right: 1em;

    cursor: pointer;
`,z4=C.div`
    z-index: 999;

    display: flex;
    justify-content: space-between;

    padding-left: 1em;
    padding-right: 1em;

    position: fixed;
    top: 0;
    left: 0;

    background: rgba(29, 29, 31, 0.13);
    width: 100%;
    height: 8vh;
`,B4=C.img`
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;

    cursor: pointer;
    user-select: none;
`,V4=C.h1`
    font-size: 1.5em;
    font-weight: 500;

    margin: 0 1em 0 0;

    cursor: pointer;
    user-select: none;
`,C_=C.div`
    display: flex;
    align-items: center;
`,Yf=C.a`
    color: ${t=>t.theme.colors.text};
    text-decoration: none;
    font-size: 1em;
    font-weight: 200;
    margin-right: 1em;
    cursor: pointer;

    user-select: none;
    &:hover {
        text-decoration: underline;
    }
`,W4=C.img`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;

    cursor: pointer;
`,H4=C.div`
    position: absolute;
    width: 15rem;
    background: #3e3e3e;
    border-color: #1d1d1f;
    border-width: 3px;
    border-style: solid;
    border-radius: 0.5rem;

    overflow: hidden;
`,Qf=C.div`
    display: flex;
    align-items: center;
    padding: 0.8rem 1.2rem;

    cursor: pointer;
    user-select: none;

    transition: background 0.2s ease-in-out;

    &:hover {
        background-color: #747474;
    }
`,Jf=C.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
`,Xf=C.p`
    font-size: 1rem;
    font-weight: 300;
    flex: 1;
`,El=()=>{const t=Nt(),e=Je(),n=mn(),[r,i]=b.useState(!1),[o,s]=b.useState(),a=p=>{window.open(p,"_blank","noreferrer")},l=()=>{n("/sign/in")},c=()=>{n("/")},f=()=>{i(!1),n("/account")},u=async()=>{i(!1),t.setValue(ll),e.setValue(null),window.location.pathname!=="/"&&n("/"),await F4()},h=()=>{i(!r)};return d.jsxs(z4,{children:[r&&d.jsxs(H4,{style:{top:(o==null?void 0:o.offsetTop)+(o==null?void 0:o.offsetHeight)+20,right:window.innerWidth-(o==null?void 0:o.offsetLeft)-(o==null?void 0:o.offsetWidth)},children:[d.jsxs(Qf,{onClick:f,children:[d.jsx(Jf,{src:zR}),d.jsx(Xf,{children:"Account Settings"})]}),d.jsxs(Qf,{onClick:()=>{i(!1),n("/projects")},children:[d.jsx(Jf,{src:VR}),d.jsx(Xf,{children:"Projects"})]}),d.jsxs(Qf,{onClick:u,children:[d.jsx(Jf,{src:BR}),d.jsx(Xf,{children:"Sign Out"})]})]}),d.jsxs(C_,{children:[d.jsx(B4,{src:UR,onClick:c}),d.jsx(V4,{onClick:c,children:"Inkwell"}),d.jsx(Yf,{onAuxClick:()=>a("https://github.com/Inkwell-Systems/InkwellAPI"),onClick:()=>a("https://github.com/Inkwell-Systems/InkwellAPI"),children:"Docs"}),d.jsx(Yf,{onAuxClick:()=>a("https://github.com/CalcoDev"),onClick:()=>a("https://github.com/CalcoDev"),children:"Blog"}),d.jsx(Yf,{onAuxClick:()=>()=>n("/projects"),onClick:()=>n("/projects"),children:"Showcase"})]}),d.jsxs(C_,{children:[d.jsx(Kf,{src:LR}),d.jsx(Kf,{src:FR}),d.jsx(Kf,{src:$R}),t.value.isAuthenticated?d.jsx(W4,{ref:s,src:t.value.profilePicture,onClick:h}):d.jsx(Ve,{onClick:l,config:{style:"primary",inverted:!1},children:"SIGN IN"})]})]})},G4=()=>d.jsxs("div",{className:"page-container",children:[d.jsx(El,{}),d.jsx(MR,{})]}),q4=()=>{const t=mn(),e=()=>{t(-1)};return d.jsxs("div",{children:[d.jsx("h1",{children:"Wrong path! Page not found!"}),d.jsxs("div",{children:[d.jsx("button",{onClick:e,children:"Go back"}),d.jsx("button",{onClick:()=>t("/"),children:"Go to home page"})]})]})},K4=C.div`
    background: ${t=>t.theme.colors.lightBackground};
    border-radius: 0.5em;

    min-width: 30rem;
    width: 30%;
    height: 30rem;

    overflow-x: hidden;
    overflow-y: scroll;
`,Y4=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,Q4=C.h1`
    font-size: 1.5em;
    font-weight: 500;
    margin: 1.5rem 2rem;
`,J4=C.div`
    font-size: 1.5rem;
    margin: 1.5rem 2rem;
    user-select: none;
    cursor: pointer;
`,X4=C.hr`
    border: 0;
    height: 0.2rem;
    background: ${t=>t.theme.colors.midBackground};
`,Z4=C.div`
    margin: 2rem;
`,hi=({outerStyles:t,styles:e,title:n,children:r,addon:i,addonOnClick:o})=>d.jsxs(K4,{style:t,children:[d.jsxs(Y4,{children:[d.jsx(Q4,{children:n}),i!==null&&d.jsx(J4,{onClick:o,children:i})]}),d.jsx(X4,{}),d.jsx(Z4,{style:e,children:r})]}),Ad=C.div`
    position: relative;
    width: 100%;

    color: ${t=>t.theme.colors.text};
    background: ${t=>t.theme.colors.midBackground};
    border-radius: 0.5em;
`;C.div`
    display: flex;
    width: fit-content;

    align-items: center;
`;const Nx=C.label`
    pointer-events: none;
    position: absolute;

    color: #b4b4b4;
    font-weight: 400;

    transition: all 0.2s ease-in-out;

    left: 1rem;
    top: -1rem;
    font-size: 0.8rem;
`;C.label`
    pointer-events: none;

    margin-right: 1rem;
`;const Od=t=>`
    width: 100%;
    height: 100%;
    padding: 1rem;

    color: ${t.theme.colors.text};

    border: none;
    background: transparent;

    &:focus {
        outline: none;
    }
`,Xg=C(Nx)`
    ${t=>t.value.length>0?"left: 0rem; top: -1rem; font-size: 0.8rem":"top: 1.25rem"}
`,eD=C.input`
    ${Od}
`,yt=t=>d.jsxs(Ad,{style:t.styles,children:[d.jsx(Xg,{style:t.labelStyles,value:t.value,children:t.label}),d.jsx(eD,{disabled:(t==null?void 0:t.disabled)??!1,style:t.innerStyles,type:t.type,value:t.value,onChange:t.onChange})]}),Ax="/assets/separator-f7bcaa06.svg",Ox="/assets/google-aa34539e.svg",jd=C.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;

    margin-top: 8vh;
    height: 92vh;

    background: ${t=>t.theme.colors.midBackground};
`,jx=C.img`
    width: 3rem;
    height: 3rem;

    cursor: pointer;
`,Dx=C.span`
    color: #18a5ec;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`,dt=C.p`
    color: #e02c2a;
    font-size: 0.85rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
    text-align: center;
`,tD=C.p`
    color: #10e094;
    font-size: 0.85rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
    text-align: center;
`,nD=()=>{const t=Nt(),e=mn(),[n,r]=b.useState(""),[i,o]=b.useState(""),[s,a]=b.useState(null),l=async()=>{r(""),o("");const u=await L4(n,i);a(u.error),u.data&&(t.setValue(u.data),e("/projects"))},c=async()=>{const u=await Rx();a(u.error),u.error===null&&(t.setValue(u.data),e("/projects"))},f=()=>{e("/sign/up")};return d.jsxs(jd,{children:[d.jsx(El,{}),d.jsxs(hi,{outerStyles:{},addonOnClick:{},addon:null,styles:{display:"flex",flexDirection:"column",gap:"1em",alignItems:"center"},title:"SIGN IN",children:[d.jsx(yt,{value:n,label:"Email",onChange:u=>r(u.target.value)}),d.jsx(yt,{value:i,label:"Password",onChange:u=>o(u.target.value)}),d.jsx(dt,{style:{color:"red"},children:s==null?void 0:s.message}),d.jsx(Ve,{style:{color:"#1D1D1F",margin:"auto",width:"50%"},config:{style:"secondary",inverted:!1},onClick:l,children:"Sign In"}),d.jsx("img",{src:Ax,style:{width:"100%"},alt:"Sign up with google",onClick:f}),d.jsx(jx,{onClick:c,src:Ox}),d.jsxs("p",{children:["Need an account?"," ",d.jsx(Dx,{onClick:f,children:"SIGN UP"})]})]})]})},rD=()=>{const t=Nt(),e=mn(),[n,r]=b.useState(""),[i,o]=b.useState(""),[s,a]=b.useState(""),[l,c]=b.useState(null),f=()=>{e("/sign/in")},u=async()=>{r(""),o("");const p=await M4(n,i);c(p.error),p.data&&(t.setValue(p.data),e("/projects"))},h=async()=>{const p=await Rx();c(p.error),p.data&&(t.setValue(p.data),e("/projects"))};return d.jsxs(jd,{children:[d.jsx(El,{}),d.jsxs(hi,{addonOnClick:{},outerStyles:{},addon:null,styles:{display:"flex",flexDirection:"column",gap:"1em",alignItems:"center"},title:"SIGN UP",children:[d.jsx(yt,{value:n,label:"Email",onChange:p=>r(p.target.value)}),d.jsx(yt,{type:"password",value:i,label:"Password",onChange:p=>o(p.target.value)}),d.jsx(yt,{type:"password",value:s,label:"Confirm Password",onChange:p=>a(p.target.value)}),d.jsx(dt,{style:{color:"red"},children:l==null?void 0:l.message}),d.jsx(Ve,{style:{color:"#1D1D1F",margin:"auto",width:"50%"},config:{style:"secondary",inverted:!1},onClick:u,children:"Sign Up"}),d.jsx("img",{src:Ax,style:{width:"100%"},alt:"Sign up with google"}),d.jsx(jx,{onClick:h,src:Ox}),d.jsxs("p",{children:["Already have an account?"," ",d.jsx(Dx,{onClick:f,children:"SIGN IN"})]})]})]})},iD="/assets/cloud-false-baca5b93.svg",oD="/assets/cloud-true-5a05bd35.svg",sD="/assets/favourite-true-b5eede21.svg",aD="/assets/owner-65a7c7f1.svg",lD=C.div`
    width: 100%;
    display: flex;
    border-radius: 0.5rem;

    padding: 1rem;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #1d1d1f;
    }
`,cD=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
`,uD=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    padding-right: 2rem;

    h1 {
        font-size: 1.3rem;
        font-weight: normal;
        margin: 0;
        color: #e3e3e3;
    }

    p {
        font-size: 1rem;
        font-weight: lighter;
        color: #b4b4b4;
    }
`,dD=C.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h2 {
        font-size: 1rem;
        font-weight: lighter;
        color: #b4b4b4;
        margin: 0;
    }

    img {
        margin-left: 1rem;
        margin-top: 0.5rem;

        width: 1.5rem;
        height: 1.5rem;
    }
`,fD=C.div`
    display: flex;
`,hD=({project:t})=>{const e=Nt(),n=mn(),r=()=>{t.cloud?n(`/editor/${t.projectId}`):n("/editor/local")};return d.jsxs(lD,{onClick:r,children:[d.jsx(cD,{children:d.jsx("img",{src:sD,alt:"Favourite"})}),d.jsxs(uD,{children:[d.jsx("h1",{children:t.projectName}),d.jsx("p",{children:t.projectDescription})]}),d.jsxs(dD,{children:[d.jsx("h2",{children:hx(new Date(t.projectCreatedAt))}),d.jsxs(fD,{children:[t.owner==e.value.id||!t.cloud?d.jsx("img",{src:aD,alt:"Owner"}):null,t.cloud?d.jsx("img",{src:oD,alt:"Cloud"}):d.jsx("img",{src:iD,alt:"Local"})]})]})]})},pD=C.div`
    width: 100%;
    display: flex;
    border-radius: 0.5rem;

    padding: 1rem;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #1d1d1f;
    }

    h1 {
        font-size: 1.3rem;
        font-weight: normal;
        margin: 0;
        color: #e3e3e3;
    }

    p {
        font-size: 1rem;
        font-weight: lighter;
        color: #b4b4b4;
    }
`,mD=C.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    font-size: 2rem;
`,Zf=({title:t,description:e,onClick:n})=>d.jsxs(pD,{onClick:n,children:[d.jsx(mD,{children:"+"}),d.jsxs("div",{children:[d.jsx("h1",{children:t}),d.jsx("p",{children:e})]})]}),gD=C.textarea`
    ${t=>Od(t)}
`,Mx=t=>d.jsxs(Ad,{style:t.styles,children:[d.jsx(Xg,{value:t.value,children:t.label}),d.jsx(gD,{style:t.innerStyles,value:t.value,onChange:t.onChange})]}),vD=C.input`
    ${t=>Od(t)}
`,yD=t=>d.jsxs(Ad,{style:{aspectRatio:"1/1",width:"1.5rem",height:"1.5rem",...t.styles},children:[d.jsx(Nx,{style:{left:"0px"},children:t.label}),d.jsx(vD,{type:"checkbox",checked:t.value,onChange:t.onChange})]}),_D=()=>{const[t,e]=b.useState(null),[n,r]=b.useState(0),[i,o]=b.useState(null),s=mn(),a=Je(),l=Nt(),[c,f]=b.useState(""),[u,h]=b.useState(""),[p,v]=b.useState(""),[y,x]=b.useState(!1),[g,m]=b.useState(""),w=()=>{const M=JSON.parse(c);a.setValue(M),console.log(a),s("/editor/local")},_=async()=>{if(y){const M=await mx(u,p,l.value,Qg,{},{});e(M.error),M.data&&(a.setValue(M.data),s(`/editor/${M.data.projectId}`))}else{const M=q3(u,p);a.setValue(M),s("/editor/local")}},E=async()=>{const M=await Jg(l.value.id);if(!M.error)return M.data},k=()=>{const M=localStorage.getItem("project");return M!=="null"&&M!==null?[JSON.parse(M)]:[]},T=async()=>{s(`/invite/${g}`)};b.useEffect(()=>{o(k())},[]),b.useEffect(()=>{l.value!==ll&&E().then(M=>{o([...M,...k()])})},[l.value]);const j=[d.jsx(hi,{addon:"+",addonOnClick:()=>r(1),outerStyles:{maxWidth:"50%"},styles:{},title:"PROJECTS",children:i===null?d.jsxs(d.Fragment,{children:[d.jsx("h2",{children:"Loading..."}),d.jsx(dt,{children:t==null?void 0:t.message})]}):i.map((M,U)=>d.jsx(hD,{project:M},U))}),d.jsxs(hi,{addon:"<-",addonOnClick:()=>r(0),styles:{},outerStyles:{maxWidth:"50%"},title:"PROJECTS",children:[d.jsx(Zf,{description:"Load a project from your machine.",title:"Load Local Project",onClick:()=>r(2)}),d.jsx(Zf,{description:"Create a new project in the cloud.",title:"New project",onClick:()=>r(3)}),d.jsx(Zf,{description:"Join via a received code from friends, family or foes.",title:"Join via Code",onClick:()=>r(4)})]}),d.jsxs(hi,{addon:"<-",addonOnClick:()=>r(1),styles:{display:"flex",flexDirection:"column",alignItems:"center"},outerStyles:{},title:"PROJECTS",children:[d.jsx("input",{type:"file",onChange:M=>{const U=new FileReader;U.onload=()=>{f(U.result)},U.readAsText(M.target.files[0])}}),d.jsx(Ve,{config:{style:"secondary",inverted:!1},style:{color:"#3e3e3e"},onClick:w,children:"Load Project"}),d.jsxs(dt,{children:["Currently, there is no validation done on the JSON.",d.jsx("br",{}),d.jsx("br",{}),"As such, loading a file which has been changed from the default",d.jsx("br",{}),"exported versions by the app",d.jsx("br",{}),d.jsx("br",{}),"MAY RESULT IN CRASHES"]})]}),d.jsxs(hi,{addon:"<-",addonOnClick:()=>r(1),styles:{display:"flex",flexDirection:"column",justifyContent:"space-between"},outerStyles:{},title:"PROJECTS",children:[d.jsxs("div",{children:[d.jsx(yt,{styles:{marginBottom:"2rem"},label:"Title",value:u,onChange:M=>h(M.target.value)}),d.jsx(Mx,{styles:{marginBottom:"2rem",height:"10rem"},label:"Description",value:p,onChange:M=>v(M.target.value)}),d.jsx(dt,{children:t==null?void 0:t.message})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx(yD,{label:"Cloud",value:y,onChange:M=>x(M.target.checked)}),d.jsx(Ve,{config:{style:"primary",inverted:!1},style:{},onClick:_,children:"Create"})]})]}),d.jsxs(hi,{addon:"<-",addonOnClick:()=>r(1),styles:{},outerStyles:{},title:"PROJECTS",children:[d.jsx(yt,{styles:{marginBottom:"2rem"},label:"Code",value:g,onChange:M=>m(M.target.value)}),d.jsx(Ve,{config:{style:"secondary",inverted:!0},style:{},onClick:T,children:"Join"})]})];return d.jsxs(jd,{children:[d.jsx(El,{}),j[n]]})},wD=()=>d.jsxs("div",{children:[d.jsx("h1",{children:"Unable to load project. Among possible causes:"}),d.jsxs("ul",{children:[d.jsx("li",{children:"Project does not exist"}),d.jsx("li",{children:"Project is not public"}),d.jsx("li",{children:"You do not have access to the project"})]})]}),bD="/assets/logo-aaa1e8b7.svg",SD="/assets/help-61fb12bb.svg",CD="/assets/free-download-here-cfc09c97.svg",xD=C.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${t=>t.selected?"#143649":"#131315"};

    user-select: none;
    cursor: pointer;

    width: 100%;
    aspect-ratio: 1/1;

    margin-bottom: 0.5rem;
    border-radius: 50%;
`,ED=t=>d.jsx(xD,{onMouseEnter:()=>t.setHovered(!0),onMouseLeave:()=>t.setHovered(!1),selected:t.selected,onClick:t.onClick,children:t.icon}),ID=C.div`
    width: 4rem;
    height: 100vh;

    background-color: #131315;
    border-right: 2px solid #000;

    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;
`,TD=C.div`
    margin-top: 1rem;

    display: flex;
    flex-direction: column;

    align-items: center;
`,kD=C.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`,RD=C.div`
    width: 100%;
    height: 2rem;

    margin-bottom: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    user-select: none;
    cursor: pointer;
`,eh=C.div`
    user-select: none;
    cursor: pointer;

    width: 100%;
    aspect-ratio: 1/1;

    margin-bottom: 0.5rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    &:last-child {
        margin-bottom: 1rem;
    }
`,PD=({selected:t,setSelected:e,elements:n,setHovered:r})=>{const i=Nt(),o=Je(),s=mn(),a=()=>{const c=o.value;c.cloud=!1;const f=JSON.stringify(c,null,4),u=document.createElement("a"),h=new Blob([f],{type:"inkwell"});u.href=URL.createObjectURL(h),u.download=`${o.value.projectName}.inkwell`,document.body.appendChild(u),u.click(),document.body.removeChild(u)},l=c=>{window.open(c,"_blank","noreferrer")};return d.jsxs(ID,{children:[d.jsxs(TD,{children:[d.jsx(RD,{onClick:()=>s("/"),children:d.jsx("img",{src:bD,alt:"Inkwell Logo"})}),n.map((c,f)=>d.jsx(ED,{icon:c.icon,selected:t===f,onClick:()=>e(f),setHovered:r},f))]}),d.jsxs(kD,{children:[d.jsx(eh,{onClick:a,children:d.jsx("img",{alt:"Export Project File",src:CD})}),d.jsx(eh,{onAuxClick:()=>l("https://github.com/Inkwell-Systems/InkwellAPI"),onClick:()=>l("https://github.com/Inkwell-Systems/InkwellAPI"),children:d.jsx("img",{alt:"Help",src:SD})}),d.jsx(eh,{onClick:()=>s("/account"),children:d.jsx("img",{style:{borderRadius:"50%"},src:i.value.profilePicture,alt:"User profile"})})]})]})},ND=({selected:t,hovered:e})=>d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("path",{d:"M4.875 6C4.77554 6 4.68016 6.03951 4.60984 6.10983C4.53951 6.18016 4.5 6.27554 4.5 6.375V19.875C4.5 20.1734 4.38147 20.4595 4.1705 20.6705C3.95952 20.8815 3.67337 21 3.375 21H1.125C0.826631 21 0.540483 20.8815 0.329505 20.6705C0.118526 20.4595 0 20.1734 0 19.875C0 19.5766 0.118526 19.2905 0.329505 19.0795C0.540483 18.8685 0.826631 18.75 1.125 18.75H2.25V6.375C2.25 4.926 3.426 3.75 4.875 3.75H19.125C20.574 3.75 21.75 4.926 21.75 6.375V18.75H22.875C23.1734 18.75 23.4595 18.8685 23.6705 19.0795C23.8815 19.2905 24 19.5766 24 19.875C24 20.1734 23.8815 20.4595 23.6705 20.6705C23.4595 20.8815 23.1734 21 22.875 21H20.625C20.3266 21 20.0405 20.8815 19.8295 20.6705C19.6185 20.4595 19.5 20.1734 19.5 19.875V6.375C19.5 6.27554 19.4605 6.18016 19.3902 6.10983C19.3198 6.03951 19.2245 6 19.125 6H4.875Z",fill:t?"#18A5EC":e?"#e3e3e3":"#B4B4B4"}),d.jsx("path",{d:"M11.955 11.955L7.82999 16.08C7.71946 16.183 7.6308 16.3072 7.56931 16.4452C7.50783 16.5832 7.47476 16.7322 7.4721 16.8832C7.46943 17.0343 7.49722 17.1843 7.5538 17.3244C7.61038 17.4645 7.6946 17.5917 7.80143 17.6986C7.90826 17.8054 8.03551 17.8896 8.17559 17.9462C8.31567 18.0028 8.46572 18.0306 8.61677 18.0279C8.76782 18.0252 8.91679 17.9922 9.05479 17.9307C9.19279 17.8692 9.31699 17.7805 9.41999 17.67L13.545 13.545L15.8595 15.8595C15.9119 15.9121 15.9788 15.9479 16.0516 15.9624C16.1245 15.977 16.2 15.9695 16.2686 15.9411C16.3372 15.9127 16.3958 15.8645 16.437 15.8027C16.4782 15.7409 16.5001 15.6683 16.5 15.594V9.375C16.5 9.27554 16.4605 9.18016 16.3902 9.10984C16.3198 9.03951 16.2244 9 16.125 9H9.90599C9.83172 8.99987 9.75909 9.02179 9.6973 9.06299C9.6355 9.10418 9.58734 9.1628 9.5589 9.2314C9.53046 9.30001 9.52303 9.37551 9.53756 9.44834C9.55208 9.52117 9.58791 9.58805 9.64049 9.6405L11.955 11.955Z",fill:t?"#18A5EC":e?"#e3e3e3":"#B4B4B4"})]}),AD=({selected:t,hovered:e})=>d.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("g",{clipPath:"url(#clip0_212_186)",children:d.jsx("path",{d:"M12 0C12.351 0.00048965 12.7018 0.0160039 13.0515 0.0465C14.166 0.1425 14.985 0.9675 15.24 1.935L15.672 3.5955C15.699 3.6945 15.7905 3.8325 15.99 3.9315C16.3365 4.1025 16.671 4.296 16.992 4.5105C17.1765 4.6335 17.3415 4.6455 17.4405 4.617L19.095 4.1625C20.061 3.8985 21.183 4.194 21.825 5.1075C22.23 5.685 22.584 6.2955 22.881 6.9345C23.3535 7.947 23.0475 9.0675 22.335 9.771L21.114 10.98C21.0405 11.052 20.967 11.2005 20.982 11.421C21.006 11.8065 21.006 12.1935 20.982 12.579C20.967 12.7995 21.039 12.948 21.114 13.02L22.335 14.229C23.0475 14.9325 23.3535 16.053 22.881 17.0655C22.5834 17.7039 22.23 18.3148 21.825 18.891C21.183 19.806 20.061 20.1015 19.095 19.836L17.442 19.383C17.3415 19.3545 17.1765 19.3665 16.992 19.4895C16.6709 19.7041 16.3362 19.8975 15.99 20.0685C15.7905 20.1675 15.699 20.3055 15.6735 20.4045L15.2385 22.0635C14.9865 23.0325 14.166 23.8575 13.0515 23.9535C12.3518 24.015 11.6481 24.015 10.9485 23.9535C9.83395 23.8575 9.01495 23.0325 8.76145 22.0635L8.32795 20.4045C8.30095 20.3055 8.20945 20.1675 8.00995 20.0685C7.66334 19.8982 7.32858 19.7048 7.00795 19.4895C6.82345 19.3665 6.65845 19.3545 6.55945 19.383L4.90495 19.8375C3.93895 20.1015 2.81695 19.806 2.17495 18.8925C1.77076 18.3152 1.41743 17.7039 1.11895 17.0655C0.646452 16.053 0.952452 14.9325 1.66345 14.229L2.88595 13.02C2.96095 12.948 3.03295 12.7995 3.01795 12.579C2.99395 12.1934 2.99395 11.8066 3.01795 11.421C3.03295 11.2005 2.96095 11.052 2.88595 10.98L1.66345 9.771C0.952452 9.0675 0.646452 7.947 1.11895 6.9345C1.41614 6.2959 1.76953 5.68499 2.17495 5.109C2.81695 4.194 3.93895 3.8985 4.90495 4.164L6.55795 4.617C6.65845 4.6455 6.82345 4.6335 7.00795 4.5105C7.32895 4.296 7.66345 4.1025 8.00995 3.9315C8.20945 3.8325 8.30095 3.6945 8.32645 3.5955L8.76145 1.9365C9.01345 0.9675 9.83395 0.1425 10.9485 0.045C11.295 0.015 11.646 0 12 0ZM11.1435 2.2875C11.0895 2.292 10.9815 2.3415 10.938 2.5065L10.5045 4.164C10.284 5.0055 9.68095 5.6145 9.00745 5.9475C8.74795 6.0765 8.49745 6.222 8.25745 6.3825C7.63195 6.7995 6.80245 7.017 5.96395 6.7875L4.30945 6.333C4.14595 6.288 4.04695 6.357 4.01695 6.4005C3.68695 6.8685 3.39895 7.3665 3.15745 7.8855C3.13645 7.932 3.12595 8.0505 3.24595 8.1705L4.46845 9.3795C5.08495 9.9885 5.31145 10.815 5.26345 11.5635C5.24545 11.8542 5.24545 12.1458 5.26345 12.4365C5.31145 13.185 5.08495 14.0115 4.46845 14.6205L3.24595 15.8295C3.12445 15.9495 3.13645 16.068 3.15745 16.1145C3.40045 16.6335 3.68695 17.13 4.01695 17.598C4.04695 17.643 4.14445 17.712 4.30945 17.667L5.96245 17.2125C6.80245 16.983 7.63195 17.2005 8.25745 17.6175C8.49895 17.778 8.74945 17.9235 9.00895 18.0525C9.67945 18.3855 10.284 18.996 10.5045 19.836L10.938 21.4935C10.9815 21.657 11.0895 21.708 11.1435 21.7125C11.7134 21.762 12.2865 21.762 12.8565 21.7125C12.9105 21.708 13.0185 21.6585 13.062 21.4935L13.4955 19.836C13.716 18.9945 14.319 18.3855 14.9925 18.0525C15.252 17.9235 15.5025 17.778 15.7425 17.6175C16.368 17.2005 17.1975 16.983 18.036 17.2125L19.6905 17.667C19.854 17.7105 19.953 17.643 19.983 17.5995C20.313 17.13 20.5995 16.6335 20.8425 16.1145C20.8635 16.068 20.874 15.9495 20.754 15.8295L19.5315 14.6205C18.915 14.0115 18.6885 13.185 18.7365 12.4365C18.7545 12.1458 18.7545 11.8542 18.7365 11.5635C18.6885 10.815 18.915 9.9885 19.5315 9.3795L20.754 8.1705C20.8755 8.0505 20.8635 7.932 20.8425 7.8855C20.6003 7.36659 20.3127 6.87015 19.983 6.402C19.953 6.357 19.8555 6.288 19.6905 6.333L18.0375 6.7875C17.1975 7.017 16.368 6.7995 15.7425 6.3825C15.5017 6.22131 15.2506 6.076 14.991 5.9475C14.3205 5.6145 13.716 5.004 13.4955 4.164L13.062 2.5065C13.0185 2.3415 12.9105 2.292 12.8565 2.2875C12.2865 2.23801 11.7134 2.23801 11.1435 2.2875ZM16.5 12C16.5 13.1935 16.0258 14.3381 15.1819 15.182C14.338 16.0259 13.1934 16.5 12 16.5C10.8065 16.5 9.66189 16.0259 8.81797 15.182C7.97406 14.3381 7.49995 13.1935 7.49995 12C7.49995 10.8065 7.97406 9.66193 8.81797 8.81802C9.66189 7.97411 10.8065 7.5 12 7.5C13.1934 7.5 14.338 7.97411 15.1819 8.81802C16.0258 9.66193 16.5 10.8065 16.5 12ZM14.25 12C14.2498 11.4031 14.0124 10.8307 13.5902 10.4087C13.168 9.98674 12.5954 9.7498 11.9985 9.75C11.4015 9.7502 10.8291 9.98752 10.4072 10.4098C9.98519 10.832 9.74825 11.4046 9.74845 12.0015C9.74865 12.5984 9.98597 13.1708 10.4082 13.5928C10.6173 13.8017 10.8655 13.9674 11.1386 14.0805C11.4117 14.1935 11.7044 14.2516 12 14.2515C12.2955 14.2514 12.5882 14.1931 12.8612 14.0799C13.1343 13.9667 13.3823 13.8008 13.5913 13.5917C13.8002 13.3827 13.9659 13.1345 14.0789 12.8614C14.1919 12.5883 14.25 12.2956 14.25 12Z",fill:t?"#18A5EC":e?"#e3e3e3":"#B4B4B4"})}),d.jsx("defs",{children:d.jsx("clipPath",{id:"clip0_212_186",children:d.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),OD=({selected:t,hovered:e})=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M24 5.625V18.375C24 18.5741 23.9471 18.7696 23.8469 18.9416C23.7466 19.1136 23.6024 19.2559 23.4292 19.354C23.2559 19.4521 23.0597 19.5024 22.8606 19.4998C22.6615 19.4973 22.4667 19.442 22.296 19.3395L16.5 15.8625V16.875C16.5 17.5712 16.2234 18.2389 15.7312 18.7312C15.2389 19.2234 14.5712 19.5 13.875 19.5H2.625C1.92881 19.5 1.26113 19.2234 0.768845 18.7312C0.276562 18.2389 0 17.5712 0 16.875L0 7.125C0 5.676 1.176 4.5 2.625 4.5H13.875C15.324 4.5 16.5 5.676 16.5 7.125V8.1375L22.296 4.6605C22.4667 4.55803 22.6615 4.5027 22.8606 4.50016C23.0597 4.49761 23.2559 4.54795 23.4292 4.64602C23.6024 4.74409 23.7466 4.88639 23.8469 5.05838C23.9471 5.23038 24 5.4259 24 5.625ZM14.25 7.125C14.25 7.02554 14.2105 6.93016 14.1402 6.85983C14.0698 6.78951 13.9745 6.75 13.875 6.75H2.625C2.52554 6.75 2.43016 6.78951 2.35984 6.85983C2.28951 6.93016 2.25 7.02554 2.25 7.125V16.875C2.25 17.082 2.418 17.25 2.625 17.25H13.875C13.9745 17.25 14.0698 17.2105 14.1402 17.1402C14.2105 17.0698 14.25 16.9745 14.25 16.875V7.125ZM16.5 13.2375L21.75 16.3875V7.6125L16.5 10.7625V13.2375Z",fill:t?"#18A5EC":e?"#e3e3e3":"#B4B4B4"})}),jD=C.div`
    padding: 1rem 0.5rem;

    background-color: ${t=>t.selected?"#131315":"transparent"};
    border-radius: 0.5rem;

    color: #b4b4b4;
    font-size: 1rem;
    font-weight: 300;

    cursor: pointer;
    user-select: none;

    &:hover {
        color: #e3e3e3;
    }
`,DD=({title:t,selected:e,onClick:n})=>d.jsx(jD,{selected:e,onClick:n,children:t}),MD=C.div`
    background: ${t=>t.bg};

    width: 100%;
    aspect-ratio: 16/9;
    max-height: 10rem;

    border-radius: 1rem;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: end;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #3e3e3e;
        scale: 1.05;
    }

    &:active {
        scale: 0.95;
    }
`,LD=C.h1`
    font-size: 1.1rem;
    font-weight: normal;
    margin: 0;
    color: #e3e3e3;
`,FD=C.p`
    font-size: 1rem;
    font-weight: lighter;
    color: #b4b4b4;
`,Vs=({title:t,description:e,background:n})=>d.jsxs(MD,{bg:n,children:[d.jsx(LD,{children:t}),d.jsx(FD,{children:e})]}),$D=C.div`
    width: 100%;
    padding: 2rem;

    overflow: hidden;
    overflow-y: scroll;
`,UD=C.img`
    width: 100%;
    aspect-ratio: 16/5;
    max-height: 20rem;
    object-fit: cover;

    border-radius: 1rem;
    margin-bottom: 2rem;
`,x_=C.p`
    font-size: 1.1rem;
    font-weight: 400;
    color: #b4b4b4;
    margin-bottom: 2rem;

    &:last-child {
        margin-left: auto;
    }
`,sc=C.div`
    display: grid;
    grid-template-columns: repeat(${t=>t.n}, 1fr);
    grid-gap: 2rem;
    margin-bottom: 2rem;
`,E_=C.hr`
    border: 2px solid #48484a;
    margin-bottom: 1rem;
    border-radius: 1rem;
    width: ${t=>(t==null?void 0:t.w)??"25%"};

    &:last-child {
        margin-left: auto;
    }
`,zD=()=>{const t=Je(),[e,n]=b.useState(!1);b.useEffect(()=>{n(t.value!==null)},[t.value]);const r={marginLeft:"auto",marginRight:"auto"};return e?d.jsxs($D,{children:[d.jsx(UD,{src:t.value.projectBanner,alt:"Project banner."}),d.jsxs(sc,{n:2,children:[d.jsx(x_,{style:{width:"50%"},children:t.value.projectDescription}),d.jsx(x_,{children:hx(new Date(t.value.projectCreatedAt))})]}),d.jsxs(sc,{n:3,children:[d.jsx(E_,{w:"50%"}),d.jsx("p",{style:{fontSize:"1rem",fontWeight:700,color:"#b4b4b4",...r},children:"Stats"}),d.jsx(E_,{w:"50%"})]}),d.jsxs(sc,{n:3,children:[d.jsx(Vs,{title:"Entries",description:`You've created ${Y3(t.value)} entries! Woah!`,background:"#1D1D1F"}),d.jsx(Vs,{title:"Tables",description:`You've created ${K3(t.value)} tables! Insane!`,background:"#1D1D1F"}),d.jsx(Vs,{title:"Scopes 1",description:`You've created ${Q3(t.value)} scopes! Crazy!`,background:"#1D1D1F"})]}),d.jsxs(sc,{n:2,children:[d.jsx(Vs,{title:"Scopes 2",description:`You've gone over ${J3(t.value)} levels deep! Insanity!`,background:"#1D1D1F"}),d.jsx(Vs,{title:"Members",description:`You've invited ${X3(t.value)} members! Wow!`,background:"#1D1D1F"})]})]}):d.jsx("h1",{children:"No"})},ws=C.div`
    width: 60%;
    min-width: 40rem;

    margin-left: auto;
    margin-right: auto;

    height: 100%;

    overflow: hidden;
    overflow-y: auto;

    padding: 2rem;
`,tr=C.h1`
    font-size: 0.8rem;
    font-weight: 300;
    color: #b4b4b4;
    margin-bottom: 0.5rem;
`,nr=C.div`
    width: 100%;
    background-color: #1e1e1f;
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`,BD=C.div`
    display: flex;
`,I_=C.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
        font-size: 1rem;
        font-weight: 400;
        min-height: 1.75rem;
        color: #b4b4b4;
    }
`,VD=C.input`
    width: 1.5rem;
    height: 1.5rem;
    aspect-ratio: 1/1;
    margin-right: 1rem;
`,T_=C.input`
    width: 100%;
    height: 2rem;

    background-color: #2c2c2e;
    border: 2px solid #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
        border: 2px solid #18a5ec;
    }
`,WD=C.textarea`
    width: 100%;
    height: 10rem;

    background-color: #2c2c2e;
    border: 2px solid #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
        border: 2px solid #18a5ec;
    }
`,HD=()=>{const t=Nt(),e=Je(),n=mn(),[r,i]=b.useState(null),[o,s]=b.useState(!1),[a,l]=b.useState(""),[c,f]=b.useState(""),[u,h]=b.useState(""),p=async()=>{const g=await mx(a,u,t.value,e.value.scopes,e.value.tables,e.value.entryMap);i(g.error),g.error?console.log("Failed to move local project to cloud. (project-settings.view.tsx)"):(localStorage.setItem("project",null),e.setValue(g.data),n(`/editor/${g.data.projectId}`),console.log("Moved local project to cloud. (project-settings.view.tsx)"))},v=()=>{const g=px(e.value);navigator.clipboard.writeText(g)},y=async()=>{e.value.cloud?e.value.owner===t.value.id&&await gx(e.value):localStorage.setItem("project",null),n("/projects")},x=async()=>{if(i(null),!e.value.cloud){if(o){await p();return}e.setValue({...e.value,projectName:a,projectBanner:c,projectDescription:u}),console.log("Updated project settings locally. (project-settings.view.tsx)");return}if(t.value.id!==e.value.owner&&!o){i(new Error("Only the owner of the project can take it down!"));return}const g={...e.value,cloud:o,projectName:a,projectBanner:c,projectDescription:u},m=await n4(g);i(m.error),!m.error&&m.data===null&&(g.members=[],g.owner=t.value.id,g.cloud=!1,g.inviteCode="",e.setValue(g),n("/editor/local"),console.log("Moved cloud project to local. (project-settings.view.tsx)"))};return b.useEffect(()=>{s(e.value.cloud),l(e.value.projectName),f(e.value.projectBanner),h(e.value.projectDescription)},[]),d.jsxs(ws,{children:[d.jsx(tr,{children:"Your Project"}),d.jsxs(nr,{children:[d.jsxs(BD,{children:[d.jsxs(I_,{style:{width:"30%"},children:[d.jsx("p",{children:"Cloud"}),d.jsx("p",{children:"Name"}),d.jsx("p",{children:"Banner"}),d.jsx("p",{children:"Description"})]}),d.jsxs(I_,{style:{width:"70%"},children:[d.jsx(VD,{type:"checkbox",checked:o,onChange:g=>s(g.target.checked)}),d.jsx(T_,{type:"text",value:a,onChange:g=>l(g.target.value)}),d.jsx(T_,{type:"text",value:c,onChange:g=>f(g.target.value)}),d.jsx(WD,{value:u,onChange:g=>h(g.target.value)})]})]}),d.jsx(dt,{children:"WARNING: Setting CLOUD to OFF will delete the project from the database! Please have a backup! This will also set your local project to the current project, and redirect you to the local editor."}),r!==null&&d.jsx(dt,{children:r==null?void 0:r.message}),d.jsx(Ve,{config:{style:"primary",inverted:!1},onClick:x,children:"Save"})]}),d.jsx(tr,{children:"Project Info"}),d.jsx(nr,{children:d.jsx(Ve,{config:{style:"secondary",inverted:!0},onClick:v,children:"Copy Invite Code"})}),(e.value.owner===t.value.id||!e.value.cloud)&&d.jsxs(d.Fragment,{children:[d.jsx(tr,{children:"Management"}),d.jsxs(nr,{children:[d.jsx(Ve,{config:{style:"danger",inverted:!1},onClick:y,children:"DELETE PROJECT"}),d.jsx(dt,{children:"!!!THIS IS IRREVERSIBLE!!!"})]})]})]})},Lx=C.div`
    width: 100%;
    height: 5rem;
    border-radius: 0.5rem;
    background-color: #131315;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
`,GD=C(Lx)``,qD=C.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 3rem;
        height: 3rem;
        aspect-ratio: 1/1;
        border-radius: 0.3rem;

        margin-right: 1rem;
    }

    flex: 1;
`,KD=C.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        font-size: 1.1rem;
        font-weight: 400;
        color: #b4b4b4;
    }

    p {
        font-size: 0.9rem;
        font-weight: 300;
        color: #616161;
    }
`,k_=t=>d.jsxs(qD,{children:[d.jsx("img",{src:t.profilePicture,alt:`${t.name}s profile picture.`}),d.jsxs(KD,{children:[d.jsx("h1",{children:t.name}),d.jsx("p",{children:t.email})]})]}),YD=C.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`,QD=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`,JD=C.div`
    width: 10rem;
    height: 2rem;
    background-color: #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    position: relative;

    label {
        position: absolute;
    }
`,XD=C.select`
    width: 100%;
    height: 100%;
    background-color: #2c2c2e;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
    }
`,R_=C.option`
    width: 100%;
    height: 100%;
    background-color: #2c2c2e;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
`,ZD=({onChange:t,defaultRole:e,disabled:n})=>{const[r,i]=b.useState(e),o=s=>{i(s.target.value),t(s.target.value),console.log(s.target.value)};return d.jsxs(JD,{children:[d.jsx("label",{children:r}),d.jsxs(XD,{disabled:n,value:r,onChange:o,children:[d.jsx(R_,{value:"owner",children:"Owner"}),d.jsx(R_,{value:"member",children:"Member"})]})]})},eM=C.svg`
    cursor: pointer;
    fill: #b4b4b4;

    transition: all 0.2s ease-in-out;

    &:hover {
        scale: 1.5;
        fill: #e02c2a;
    }

    &:active {
        scale: 0.8;
    }
`,tM=({user:t,handleKick:e,disabled:n})=>{const r=Nt(),i=Je(),o=async s=>{console.log("Changing user role: "+t.id+" to "+s)};return d.jsx(d.Fragment,{children:i.value.owner===t.id?d.jsxs(GD,{children:[d.jsx(k_,{id:t.id,name:t.name,email:t.email,profilePicture:t.profilePicture}),d.jsx(YD,{children:d.jsx("p",{children:"--/--/----"})})]}):d.jsxs(Lx,{children:[d.jsx(k_,{id:t.id,name:t.name,email:t.email,profilePicture:t.profilePicture}),d.jsxs(QD,{children:[d.jsx("p",{children:"--/--/----"}),d.jsx(ZD,{disabled:r.value.id!==i.value.owner,defaultRole:"member",onChange:o}),!n&&d.jsx(eM,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:e,children:d.jsx("path",{d:"M5.57999 5.58021C5.79092 5.36953 6.07686 5.2512 6.37499 5.2512C6.67311 5.2512 6.95905 5.36953 7.16999 5.58021L12 10.4102L16.83 5.58021C16.9675 5.43212 17.1424 5.32387 17.3363 5.26684C17.5301 5.20982 17.7358 5.20615 17.9316 5.25621C18.1274 5.30627 18.306 5.40821 18.4487 5.55129C18.5915 5.69437 18.6929 5.87329 18.7425 6.06921C18.7926 6.26477 18.7891 6.47023 18.7324 6.66398C18.6756 6.85772 18.5677 7.0326 18.42 7.17021L13.59 12.0002L18.42 16.8302C18.5681 16.9677 18.6763 17.1426 18.7333 17.3365C18.7904 17.5304 18.794 17.736 18.744 17.9318C18.6939 18.1276 18.592 18.3063 18.4489 18.449C18.3058 18.5917 18.1269 18.6932 17.931 18.7427C17.7354 18.7928 17.53 18.7893 17.3362 18.7326C17.1425 18.6758 16.9676 18.5679 16.83 18.4202L12 13.5902L7.16999 18.4202C6.95659 18.6188 6.67452 18.727 6.38304 18.7219C6.09157 18.7169 5.81339 18.5991 5.60699 18.3932C5.40112 18.1868 5.28329 17.9086 5.27825 17.6172C5.27322 17.3257 5.38137 17.0436 5.57999 16.8302L10.41 12.0002L5.57999 7.17021C5.36931 6.95927 5.25098 6.67334 5.25098 6.37521C5.25098 6.07708 5.36931 5.79115 5.57999 5.58021Z"})})]})]})})},nM=C.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,rM=()=>{const t=Nt(),e=Je(),[n,r]=b.useState(""),[i,o]=b.useState(""),[s,a]=b.useState(),l=async()=>{a(null),r(""),o("");const c=await s4(n,t.value.id,e.value.projectId,i);a(c.error),c.error||console.log(`Successfully sent invitation to ${n}. (email-invitation.component.tsx)`)};return d.jsxs(d.Fragment,{children:[s&&d.jsx(dt,{children:s.message}),d.jsxs(nM,{children:[d.jsxs("div",{style:{flex:"1"},children:[d.jsx(yt,{styles:{backgroundColor:"#131315",marginBottom:"1.5rem"},innerStyles:{color:"#b4b4b4",fontSize:"0.8rem"},label:"Email",value:n,onChange:c=>r(c.target.value)}),d.jsx(Mx,{styles:{backgroundColor:"#131315"},innerStyles:{height:"10rem",color:"#b4b4b4",fontSize:"0.8rem"},label:"Message - OPTIONAL",value:i,onChange:c=>o(c.target.value)})]}),d.jsx("div",{style:{width:"10rem"},children:d.jsx(Ve,{config:{style:"primary",inverted:!1},onClick:l,children:"Send"})})]})]})},iM=C.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`,oM=({link:t})=>{const e=async()=>{await navigator.clipboard.writeText(t),console.log(`Copied link ${t} invitation to clipboard. (link-invitation.component.tsx)`)};return d.jsxs(iM,{children:[d.jsx(yt,{disabled:!0,styles:{backgroundColor:"#131315",marginBottom:"1.5rem"},innerStyles:{color:"#b4b4b4",fontSize:"0.8rem"},label:"Invitation Link",value:t,onChange:n=>{}}),d.jsx("div",{children:d.jsx(Ve,{config:{style:"secondary",inverted:!0},onClick:e,children:"Copy"})})]})},sM=C.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`,aM=C.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`,lM=C.h1`
    font-size: 1rem;
    font-weight: 500;
    color: ${t=>t.selected?"#e3e3e3":"#616161"};
    cursor: pointer;

    padding-bottom: 0.5rem;

    border-radius: 0.2rem;
    border-bottom: 0.2rem solid;
    border-color: ${t=>t.selected?"#e3e3e3":"#616161"};
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #e3e3e3;
        border-bottom: 0.2rem solid #e3e3e3;
    }
`,cM=C.div`
    width: 100%;
    height: 100%;

    margin-top: 2rem;
`,uM=()=>{const[t,e]=b.useState(0),n=Nt(),r=Je(),i=[{title:"Invite via Email",content:d.jsx(rM,{})},{title:"Invite via Link",content:d.jsx(oM,{link:Z3(r.value)})}];return d.jsxs(sM,{children:[d.jsx(aM,{children:i.map((o,s)=>d.jsx(lM,{onClick:()=>e(s),selected:t===s,children:o.title},s))}),d.jsx(cM,{children:n.value.id===r.value.owner?i[t].content:d.jsx(dt,{children:"Only the owner can invite new members!"})})]})},dM=()=>{const t=Je(),e=Nt(),[n,r]=b.useState(),[i,o]=b.useState(null),s=async l=>{var f;if(o(null),l===t.value.owner){o(new Error("Cannot kick owner"));return}if(((f=e.value)==null?void 0:f.id)!==t.value.owner){o(new Error("Only the owner can kick members"));return}const c=await i4(t.value.projectId,l);o(c.error)},a=async()=>{o(null);const l=[];{const c=await S_(t.value.owner);o(c.error),c.error||l.push(c.data)}for(const c of t.value.members){const f=await S_(c);o(f.error),f.error||l.push(f.data)}r(l)};return b.useEffect(()=>{t.value&&a()},[t.value]),d.jsx(d.Fragment,{children:t.value.cloud?d.jsxs(ws,{children:[d.jsx(tr,{children:"Current Members"}),i!==null&&d.jsx(dt,{children:i==null?void 0:i.message}),d.jsxs(nr,{children:[d.jsx(dt,{children:"Changing user roles has no effect. It is a work in progress. For now, only the owner can delete the project and control member flow."}),n==null?void 0:n.map(l=>{var c;return d.jsx(tM,{disabled:l.id===t.value.owner||((c=e.value)==null?void 0:c.id)!==t.value.owner,user:l,handleKick:()=>s(l.id)},l.id)})]}),d.jsx(tr,{children:"Invitations"}),d.jsx(nr,{style:{gap:"1rem"},children:d.jsx(uM,{})})]}):d.jsx("h1",{children:"A cloud project is required for this."})})},fM=()=>d.jsxs(ws,{children:[d.jsx(tr,{children:"Custom Entries"}),d.jsx(nr,{children:d.jsx("p",{children:"Custom entries are not yet supported."})})]});var Dd={},Md={};/*! *****************************************************************************
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
***************************************************************************** */var Up=function(t,e){return Up=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Up(t,e)};function R(t,e){Up(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function es(t){return typeof t=="function"}var P_=!1,sn={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var e=new Error;""+e.stack}P_=t},get useDeprecatedSynchronousErrorHandling(){return P_}};function _o(t){setTimeout(function(){throw t},0)}var ju={closed:!0,next:function(t){},error:function(t){if(sn.useDeprecatedSynchronousErrorHandling)throw t;_o(t)},complete:function(){}},Tt=function(){return Array.isArray||function(t){return t&&typeof t.length=="number"}}();function Zg(t){return t!==null&&typeof t=="object"}var hM=function(){function t(e){return Error.call(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e,this}return t.prototype=Object.create(Error.prototype),t}(),pa=hM,Ae=function(){function t(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this,r=n._parentOrParents,i=n._ctorUnsubscribe,o=n._unsubscribe,s=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof t)r.remove(this);else if(r!==null)for(var a=0;a<r.length;++a){var l=r[a];l.remove(this)}if(es(o)){i&&(this._unsubscribe=void 0);try{o.call(this)}catch(u){e=u instanceof pa?N_(u.errors):[u]}}if(Tt(s))for(var a=-1,c=s.length;++a<c;){var f=s[a];if(Zg(f))try{f.unsubscribe()}catch(h){e=e||[],h instanceof pa?e=e.concat(N_(h.errors)):e.push(h)}}if(e)throw new pa(e)}},t.prototype.add=function(e){var n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||typeof n.unsubscribe!="function")return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var r=n;n=new t,n._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=n._parentOrParents;if(i===null)n._parentOrParents=this;else if(i instanceof t){if(i===this)return n;n._parentOrParents=[i,this]}else if(i.indexOf(this)===-1)i.push(this);else return n;var o=this._subscriptions;return o===null?this._subscriptions=[n]:o.push(n),n},t.prototype.remove=function(e){var n=this._subscriptions;if(n){var r=n.indexOf(e);r!==-1&&n.splice(r,1)}},t.EMPTY=function(e){return e.closed=!0,e}(new t),t}();function N_(t){return t.reduce(function(e,n){return e.concat(n instanceof pa?n.errors:n)},[])}var Du=function(){return typeof Symbol=="function"?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),W=function(t){R(e,t);function e(n,r,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=ju;break;case 1:if(!n){o.destination=ju;break}if(typeof n=="object"){n instanceof e?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new A_(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new A_(o,n,r,i);break}return o}return e.prototype[Du]=function(){return this},e.create=function(n,r,i){var o=new e(n,r,i);return o.syncErrorThrowable=!1,o},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){this.destination.error(n),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var n=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=n,this},e}(Ae),A_=function(t){R(e,t);function e(n,r,i,o){var s=t.call(this)||this;s._parentSubscriber=n;var a,l=s;return es(r)?a=r:r&&(a=r.next,i=r.error,o=r.complete,r!==ju&&(l=Object.create(r),es(l.unsubscribe)&&s.add(l.unsubscribe.bind(l)),l.unsubscribe=s.unsubscribe.bind(s))),s._context=l,s._next=a,s._error=i,s._complete=o,s}return e.prototype.next=function(n){if(!this.isStopped&&this._next){var r=this._parentSubscriber;!sn.useDeprecatedSynchronousErrorHandling||!r.syncErrorThrowable?this.__tryOrUnsub(this._next,n):this.__tryOrSetError(r,this._next,n)&&this.unsubscribe()}},e.prototype.error=function(n){if(!this.isStopped){var r=this._parentSubscriber,i=sn.useDeprecatedSynchronousErrorHandling;if(this._error)!i||!r.syncErrorThrowable?(this.__tryOrUnsub(this._error,n),this.unsubscribe()):(this.__tryOrSetError(r,this._error,n),this.unsubscribe());else if(r.syncErrorThrowable)i?(r.syncErrorValue=n,r.syncErrorThrown=!0):_o(n),this.unsubscribe();else{if(this.unsubscribe(),i)throw n;_o(n)}}},e.prototype.complete=function(){var n=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var i=function(){return n._complete.call(n._context)};!sn.useDeprecatedSynchronousErrorHandling||!r.syncErrorThrowable?(this.__tryOrUnsub(i),this.unsubscribe()):(this.__tryOrSetError(r,i),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(n,r){try{n.call(this._context,r)}catch(i){if(this.unsubscribe(),sn.useDeprecatedSynchronousErrorHandling)throw i;_o(i)}},e.prototype.__tryOrSetError=function(n,r,i){if(!sn.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,i)}catch(o){return sn.useDeprecatedSynchronousErrorHandling?(n.syncErrorValue=o,n.syncErrorThrown=!0,!0):(_o(o),!0)}return!1},e.prototype._unsubscribe=function(){var n=this._parentSubscriber;this._context=null,this._parentSubscriber=null,n.unsubscribe()},e}(W);function ev(t){for(;t;){var e=t,n=e.closed,r=e.destination,i=e.isStopped;if(n||i)return!1;r&&r instanceof W?t=r:t=null}return!0}function pM(t,e,n){if(t){if(t instanceof W)return t;if(t[Du])return t[Du]()}return!t&&!e&&!n?new W(ju):new W(t,e,n)}var bs=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function ti(t){return t}function zp(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Fx(t)}function Fx(t){return t.length===0?ti:t.length===1?t[0]:function(n){return t.reduce(function(r,i){return i(r)},n)}}var Z=function(){function t(e){this._isScalar=!1,e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this.operator,o=pM(e,n,r);if(i?o.add(i.call(o,this.source)):o.add(this.source||sn.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),sn.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){sn.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=n),ev(e)?e.error(n):console.warn(n)}},t.prototype.forEach=function(e,n){var r=this;return n=O_(n),new n(function(i,o){var s;s=r.subscribe(function(a){try{e(a)}catch(l){o(l),s&&s.unsubscribe()}},o,i)})},t.prototype._subscribe=function(e){var n=this.source;return n&&n.subscribe(e)},t.prototype[bs]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.length===0?this:Fx(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=O_(e),new e(function(r,i){var o;n.subscribe(function(s){return o=s},function(s){return i(s)},function(){return r(o)})})},t.create=function(e){return new t(e)},t}();function O_(t){if(t||(t=sn.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var mM=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),Rr=mM,$x=function(t){R(e,t);function e(n,r){var i=t.call(this)||this;return i.subject=n,i.subscriber=r,i.closed=!1,i}return e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var n=this.subject,r=n.observers;if(this.subject=null,!(!r||r.length===0||n.isStopped||n.closed)){var i=r.indexOf(this.subscriber);i!==-1&&r.splice(i,1)}}},e}(Ae),Ux=function(t){R(e,t);function e(n){var r=t.call(this,n)||this;return r.destination=n,r}return e}(W),st=function(t){R(e,t);function e(){var n=t.call(this)||this;return n.observers=[],n.closed=!1,n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype[Du]=function(){return new Ux(this)},e.prototype.lift=function(n){var r=new j_(this,this);return r.operator=n,r},e.prototype.next=function(n){if(this.closed)throw new Rr;if(!this.isStopped)for(var r=this.observers,i=r.length,o=r.slice(),s=0;s<i;s++)o[s].next(n)},e.prototype.error=function(n){if(this.closed)throw new Rr;this.hasError=!0,this.thrownError=n,this.isStopped=!0;for(var r=this.observers,i=r.length,o=r.slice(),s=0;s<i;s++)o[s].error(n);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new Rr;this.isStopped=!0;for(var n=this.observers,r=n.length,i=n.slice(),o=0;o<r;o++)i[o].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(n){if(this.closed)throw new Rr;return t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){if(this.closed)throw new Rr;return this.hasError?(n.error(this.thrownError),Ae.EMPTY):this.isStopped?(n.complete(),Ae.EMPTY):(this.observers.push(n),new $x(this,n))},e.prototype.asObservable=function(){var n=new Z;return n.source=this,n},e.create=function(n,r){return new j_(n,r)},e}(Z),j_=function(t){R(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r=this.destination;r&&r.next&&r.next(n)},e.prototype.error=function(n){var r=this.destination;r&&r.error&&this.destination.error(n)},e.prototype.complete=function(){var n=this.destination;n&&n.complete&&this.destination.complete()},e.prototype._subscribe=function(n){var r=this.source;return r?this.source.subscribe(n):Ae.EMPTY},e}(st);function tv(){return function(e){return e.lift(new gM(e))}}var gM=function(){function t(e){this.connectable=e}return t.prototype.call=function(e,n){var r=this.connectable;r._refCount++;var i=new vM(e,r),o=n.subscribe(i);return i.closed||(i.connection=r.connect()),o},t}(),vM=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.connectable=r,i}return e.prototype._unsubscribe=function(){var n=this.connectable;if(!n){this.connection=null;return}this.connectable=null;var r=n._refCount;if(r<=0){this.connection=null;return}if(n._refCount=r-1,r>1){this.connection=null;return}var i=this.connection,o=n._connection;this.connection=null,o&&(!i||o===i)&&o.unsubscribe()},e}(W),zx=function(t){R(e,t);function e(n,r){var i=t.call(this)||this;return i.source=n,i.subjectFactory=r,i._refCount=0,i._isComplete=!1,i}return e.prototype._subscribe=function(n){return this.getSubject().subscribe(n)},e.prototype.getSubject=function(){var n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject},e.prototype.connect=function(){var n=this._connection;return n||(this._isComplete=!1,n=this._connection=new Ae,n.add(this.source.subscribe(new _M(this.getSubject(),this))),n.closed&&(this._connection=null,n=Ae.EMPTY)),n},e.prototype.refCount=function(){return tv()(this)},e}(Z),yM=function(){var t=zx.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}}(),_M=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.connectable=r,i}return e.prototype._error=function(n){this._unsubscribe(),t.prototype._error.call(this,n)},e.prototype._complete=function(){this.connectable._isComplete=!0,this._unsubscribe(),t.prototype._complete.call(this)},e.prototype._unsubscribe=function(){var n=this.connectable;if(n){this.connectable=null;var r=n._connection;n._refCount=0,n._subject=null,n._connection=null,r&&r.unsubscribe()}},e}(Ux);function wM(t,e,n,r){return function(i){return i.lift(new bM(t,e,n,r))}}var bM=function(){function t(e,n,r,i){this.keySelector=e,this.elementSelector=n,this.durationSelector=r,this.subjectSelector=i}return t.prototype.call=function(e,n){return n.subscribe(new SM(e,this.keySelector,this.elementSelector,this.durationSelector,this.subjectSelector))},t}(),SM=function(t){R(e,t);function e(n,r,i,o,s){var a=t.call(this,n)||this;return a.keySelector=r,a.elementSelector=i,a.durationSelector=o,a.subjectSelector=s,a.groups=null,a.attemptedToUnsubscribe=!1,a.count=0,a}return e.prototype._next=function(n){var r;try{r=this.keySelector(n)}catch(i){this.error(i);return}this._group(n,r)},e.prototype._group=function(n,r){var i=this.groups;i||(i=this.groups=new Map);var o=i.get(r),s;if(this.elementSelector)try{s=this.elementSelector(n)}catch(c){this.error(c)}else s=n;if(!o){o=this.subjectSelector?this.subjectSelector():new st,i.set(r,o);var a=new Bp(r,o,this);if(this.destination.next(a),this.durationSelector){var l=void 0;try{l=this.durationSelector(new Bp(r,o))}catch(c){this.error(c);return}this.add(l.subscribe(new CM(r,o,this)))}}o.closed||o.next(s)},e.prototype._error=function(n){var r=this.groups;r&&(r.forEach(function(i,o){i.error(n)}),r.clear()),this.destination.error(n)},e.prototype._complete=function(){var n=this.groups;n&&(n.forEach(function(r,i){r.complete()}),n.clear()),this.destination.complete()},e.prototype.removeGroup=function(n){this.groups.delete(n)},e.prototype.unsubscribe=function(){this.closed||(this.attemptedToUnsubscribe=!0,this.count===0&&t.prototype.unsubscribe.call(this))},e}(W),CM=function(t){R(e,t);function e(n,r,i){var o=t.call(this,r)||this;return o.key=n,o.group=r,o.parent=i,o}return e.prototype._next=function(n){this.complete()},e.prototype._unsubscribe=function(){var n=this,r=n.parent,i=n.key;this.key=this.parent=null,r&&r.removeGroup(i)},e}(W),Bp=function(t){R(e,t);function e(n,r,i){var o=t.call(this)||this;return o.key=n,o.groupSubject=r,o.refCountSubscription=i,o}return e.prototype._subscribe=function(n){var r=new Ae,i=this,o=i.refCountSubscription,s=i.groupSubject;return o&&!o.closed&&r.add(new xM(o)),r.add(s.subscribe(n)),r},e}(Z),xM=function(t){R(e,t);function e(n){var r=t.call(this)||this;return r.parent=n,n.count++,r}return e.prototype.unsubscribe=function(){var n=this.parent;!n.closed&&!this.closed&&(t.prototype.unsubscribe.call(this),n.count-=1,n.count===0&&n.attemptedToUnsubscribe&&n.unsubscribe())},e}(Ae),Bx=function(t){R(e,t);function e(n){var r=t.call(this)||this;return r._value=n,r}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(n){var r=t.prototype._subscribe.call(this,n);return r&&!r.closed&&n.next(this._value),r},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new Rr;return this._value},e.prototype.next=function(n){t.prototype.next.call(this,this._value=n)},e}(st),EM=function(t){R(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Ae),Il=function(t){R(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(o,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!==null&&this.delay===i&&this.pending===!1)return r;clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,o=void 0;try{this.work(n)}catch(s){i=!0,o=!!s&&s||new Error(s)}if(i)return this.unsubscribe(),o},e.prototype._unsubscribe=function(){var n=this.id,r=this.scheduler,i=r.actions,o=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,o!==-1&&i.splice(o,1),n!=null&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null},e}(EM),IM=function(t){R(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i}return e.prototype.schedule=function(n,r){return r===void 0&&(r=0),r>0?t.prototype.schedule.call(this,n,r):(this.delay=r,this.state=n,this.scheduler.flush(this),this)},e.prototype.execute=function(n,r){return r>0||this.closed?t.prototype.execute.call(this,n,r):this._execute(n,r)},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),i!==null&&i>0||i===null&&this.delay>0?t.prototype.requestAsyncId.call(this,n,r,i):n.flush(this)},e}(Il),Vp=function(){function t(e,n){n===void 0&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.SchedulerAction(this,e).schedule(r,n)},t.now=function(){return Date.now()},t}(),Tl=function(t){R(e,t);function e(n,r){r===void 0&&(r=Vp.now);var i=t.call(this,n,function(){return e.delegate&&e.delegate!==i?e.delegate.now():r()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return e.prototype.schedule=function(n,r,i){return r===void 0&&(r=0),e.delegate&&e.delegate!==this?e.delegate.schedule(n,r,i):t.prototype.schedule.call(this,n,r,i)},e.prototype.flush=function(n){var r=this.actions;if(this.active){r.push(n);return}var i;this.active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this.active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(Vp),TM=function(t){R(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e}(Tl),Vx=new TM(IM),Wx=Vx,ts=new Z(function(t){return t.complete()});function Ss(t){return t?kM(t):ts}function kM(t){return new Z(function(e){return t.schedule(function(){return e.complete()})})}function Qt(t){return t&&typeof t.schedule=="function"}var Hx=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()}};function nv(t,e){return new Z(function(n){var r=new Ae,i=0;return r.add(e.schedule(function(){if(i===t.length){n.complete();return}n.next(t[i++]),n.closed||r.add(this.schedule())})),r})}function kl(t,e){return e?nv(t,e):new Z(Hx(t))}function Ld(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return Qt(n)?(t.pop(),nv(t,n)):kl(t)}function rv(t,e){return e?new Z(function(n){return e.schedule(RM,0,{error:t,subscriber:n})}):new Z(function(n){return n.error(t)})}function RM(t){var e=t.error,n=t.subscriber;n.error(e)}var Wp;Wp||(Wp={});var rr=function(){function t(e,n,r){this.kind=e,this.value=n,this.error=r,this.hasValue=e==="N"}return t.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}},t.prototype.do=function(e,n,r){var i=this.kind;switch(i){case"N":return e&&e(this.value);case"E":return n&&n(this.error);case"C":return r&&r()}},t.prototype.accept=function(e,n,r){return e&&typeof e.next=="function"?this.observe(e):this.do(e,n,r)},t.prototype.toObservable=function(){var e=this.kind;switch(e){case"N":return Ld(this.value);case"E":return rv(this.error);case"C":return Ss()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return typeof e<"u"?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();function PM(t,e){return e===void 0&&(e=0),function(r){return r.lift(new NM(t,e))}}var NM=function(){function t(e,n){n===void 0&&(n=0),this.scheduler=e,this.delay=n}return t.prototype.call=function(e,n){return n.subscribe(new Gx(e,this.scheduler,this.delay))},t}(),Gx=function(t){R(e,t);function e(n,r,i){i===void 0&&(i=0);var o=t.call(this,n)||this;return o.scheduler=r,o.delay=i,o}return e.dispatch=function(n){var r=n.notification,i=n.destination;r.observe(i),this.unsubscribe()},e.prototype.scheduleMessage=function(n){var r=this.destination;r.add(this.scheduler.schedule(e.dispatch,this.delay,new AM(n,this.destination)))},e.prototype._next=function(n){this.scheduleMessage(rr.createNext(n))},e.prototype._error=function(n){this.scheduleMessage(rr.createError(n)),this.unsubscribe()},e.prototype._complete=function(){this.scheduleMessage(rr.createComplete()),this.unsubscribe()},e}(W),AM=function(){function t(e,n){this.notification=e,this.destination=n}return t}(),iv=function(t){R(e,t);function e(n,r,i){n===void 0&&(n=Number.POSITIVE_INFINITY),r===void 0&&(r=Number.POSITIVE_INFINITY);var o=t.call(this)||this;return o.scheduler=i,o._events=[],o._infiniteTimeWindow=!1,o._bufferSize=n<1?1:n,o._windowTime=r<1?1:r,r===Number.POSITIVE_INFINITY?(o._infiniteTimeWindow=!0,o.next=o.nextInfiniteTimeWindow):o.next=o.nextTimeWindow,o}return e.prototype.nextInfiniteTimeWindow=function(n){if(!this.isStopped){var r=this._events;r.push(n),r.length>this._bufferSize&&r.shift()}t.prototype.next.call(this,n)},e.prototype.nextTimeWindow=function(n){this.isStopped||(this._events.push(new OM(this._getNow(),n)),this._trimBufferThenGetEvents()),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){var r=this._infiniteTimeWindow,i=r?this._events:this._trimBufferThenGetEvents(),o=this.scheduler,s=i.length,a;if(this.closed)throw new Rr;if(this.isStopped||this.hasError?a=Ae.EMPTY:(this.observers.push(n),a=new $x(this,n)),o&&n.add(n=new Gx(n,o)),r)for(var l=0;l<s&&!n.closed;l++)n.next(i[l]);else for(var l=0;l<s&&!n.closed;l++)n.next(i[l].value);return this.hasError?n.error(this.thrownError):this.isStopped&&n.complete(),a},e.prototype._getNow=function(){return(this.scheduler||Wx).now()},e.prototype._trimBufferThenGetEvents=function(){for(var n=this._getNow(),r=this._bufferSize,i=this._windowTime,o=this._events,s=o.length,a=0;a<s&&!(n-o[a].time<i);)a++;return s>r&&(a=Math.max(a,s-r)),a>0&&o.splice(0,a),o},e}(st),OM=function(){function t(e,n){this.time=e,this.value=n}return t}(),Cs=function(t){R(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.value=null,n.hasNext=!1,n.hasCompleted=!1,n}return e.prototype._subscribe=function(n){return this.hasError?(n.error(this.thrownError),Ae.EMPTY):this.hasCompleted&&this.hasNext?(n.next(this.value),n.complete(),Ae.EMPTY):t.prototype._subscribe.call(this,n)},e.prototype.next=function(n){this.hasCompleted||(this.value=n,this.hasNext=!0)},e.prototype.error=function(n){this.hasCompleted||t.prototype.error.call(this,n)},e.prototype.complete=function(){this.hasCompleted=!0,this.hasNext&&t.prototype.next.call(this,this.value),t.prototype.complete.call(this)},e}(st),jM=1,DM=function(){return Promise.resolve()}(),Hp={};function D_(t){return t in Hp?(delete Hp[t],!0):!1}var M_={setImmediate:function(t){var e=jM++;return Hp[e]=!0,DM.then(function(){return D_(e)&&t()}),e},clearImmediate:function(t){D_(t)}},MM=function(t){R(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i}return e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),i!==null&&i>0?t.prototype.requestAsyncId.call(this,n,r,i):(n.actions.push(this),n.scheduled||(n.scheduled=M_.setImmediate(n.flush.bind(n,null))))},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!==null&&i>0||i===null&&this.delay>0)return t.prototype.recycleAsyncId.call(this,n,r,i);n.actions.length===0&&(M_.clearImmediate(r),n.scheduled=void 0)},e}(Il),LM=function(t){R(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.flush=function(n){this.active=!0,this.scheduled=void 0;var r=this.actions,i,o=-1,s=r.length;n=n||r.shift();do if(i=n.execute(n.state,n.delay))break;while(++o<s&&(n=r.shift()));if(this.active=!1,i){for(;++o<s&&(n=r.shift());)n.unsubscribe();throw i}},e}(Tl),qx=new LM(MM),Ac=qx,Kx=new Tl(Il),kt=Kx,FM=function(t){R(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i}return e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),i!==null&&i>0?t.prototype.requestAsyncId.call(this,n,r,i):(n.actions.push(this),n.scheduled||(n.scheduled=requestAnimationFrame(function(){return n.flush(null)})))},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!==null&&i>0||i===null&&this.delay>0)return t.prototype.recycleAsyncId.call(this,n,r,i);n.actions.length===0&&(cancelAnimationFrame(r),n.scheduled=void 0)},e}(Il),$M=function(t){R(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.flush=function(n){this.active=!0,this.scheduled=void 0;var r=this.actions,i,o=-1,s=r.length;n=n||r.shift();do if(i=n.execute(n.state,n.delay))break;while(++o<s&&(n=r.shift()));if(this.active=!1,i){for(;++o<s&&(n=r.shift());)n.unsubscribe();throw i}},e}(Tl),Yx=new $M(FM),UM=Yx,zM=function(t){R(e,t);function e(n,r){n===void 0&&(n=Qx),r===void 0&&(r=Number.POSITIVE_INFINITY);var i=t.call(this,n,function(){return i.frame})||this;return i.maxFrames=r,i.frame=0,i.index=-1,i}return e.prototype.flush=function(){for(var n=this,r=n.actions,i=n.maxFrames,o,s;(s=r[0])&&s.delay<=i&&(r.shift(),this.frame=s.delay,!(o=s.execute(s.state,s.delay))););if(o){for(;s=r.shift();)s.unsubscribe();throw o}},e.frameTimeFactor=10,e}(Tl),Qx=function(t){R(e,t);function e(n,r,i){i===void 0&&(i=n.index+=1);var o=t.call(this,n,r)||this;return o.scheduler=n,o.work=r,o.index=i,o.active=!0,o.index=n.index=i,o}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),!this.id)return t.prototype.schedule.call(this,n,r);this.active=!1;var i=new e(this.scheduler,this.work);return this.add(i),i.schedule(n,r)},e.prototype.requestAsyncId=function(n,r,i){i===void 0&&(i=0),this.delay=n.frame+i;var o=n.actions;return o.push(this),o.sort(e.sortActions),!0},e.prototype.recycleAsyncId=function(n,r,i){},e.prototype._execute=function(n,r){if(this.active===!0)return t.prototype._execute.call(this,n,r)},e.sortActions=function(n,r){return n.delay===r.delay?n.index===r.index?0:n.index>r.index?1:-1:n.delay>r.delay?1:-1},e}(Il);function jn(){}function BM(t){return!!t&&(t instanceof Z||typeof t.lift=="function"&&typeof t.subscribe=="function")}var VM=function(){function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t}(),ns=VM,WM=function(){function t(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return t.prototype=Object.create(Error.prototype),t}(),Rl=WM,HM=function(){function t(){return Error.call(this),this.message="Timeout has occurred",this.name="TimeoutError",this}return t.prototype=Object.create(Error.prototype),t}(),Jx=HM;function gn(t,e){return function(r){if(typeof t!="function")throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new GM(t,e))}}var GM=function(){function t(e,n){this.project=e,this.thisArg=n}return t.prototype.call=function(e,n){return n.subscribe(new qM(e,this.project,this.thisArg))},t}(),qM=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.project=r,o.count=0,o.thisArg=i||o,o}return e.prototype._next=function(n){var r;try{r=this.project.call(this.thisArg,n,this.count++)}catch(i){this.destination.error(i);return}this.destination.next(r)},e}(W);function Xx(t,e,n){if(e)if(Qt(e))n=e;else return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return Xx(t,n).apply(void 0,r).pipe(gn(function(o){return Tt(o)?e.apply(void 0,o):e(o)}))};return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var o=this,s,a={context:o,subject:s,callbackFunc:t,scheduler:n};return new Z(function(l){if(n){var f={args:r,subscriber:l,params:a};return n.schedule(KM,0,f)}else{if(!s){s=new Cs;var c=function(){for(var u=[],h=0;h<arguments.length;h++)u[h]=arguments[h];s.next(u.length<=1?u[0]:u),s.complete()};try{t.apply(o,r.concat([c]))}catch(u){ev(s)?s.error(u):console.warn(u)}}return s.subscribe(l)}})}}function KM(t){var e=this,n=t.args,r=t.subscriber,i=t.params,o=i.callbackFunc,s=i.context,a=i.scheduler,l=i.subject;if(!l){l=i.subject=new Cs;var c=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];var h=f.length<=1?f[0]:f;e.add(a.schedule(YM,0,{value:h,subject:l}))};try{o.apply(s,n.concat([c]))}catch(f){l.error(f)}}this.add(l.subscribe(r))}function YM(t){var e=t.value,n=t.subject;n.next(e),n.complete()}function Zx(t,e,n){if(e)if(Qt(e))n=e;else return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return Zx(t,n).apply(void 0,r).pipe(gn(function(o){return Tt(o)?e.apply(void 0,o):e(o)}))};return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var o={subject:void 0,args:r,callbackFunc:t,scheduler:n,context:this};return new Z(function(s){var a=o.context,l=o.subject;if(n)return n.schedule(QM,0,{params:o,subscriber:s,context:a});if(!l){l=o.subject=new Cs;var c=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];var h=f.shift();if(h){l.error(h);return}l.next(f.length<=1?f[0]:f),l.complete()};try{t.apply(a,r.concat([c]))}catch(f){ev(l)?l.error(f):console.warn(f)}}return l.subscribe(s)})}}function QM(t){var e=this,n=t.params,r=t.subscriber,i=t.context,o=n.callbackFunc,s=n.args,a=n.scheduler,l=n.subject;if(!l){l=n.subject=new Cs;var c=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];var h=f.shift();if(h)e.add(a.schedule(L_,0,{err:h,subject:l}));else{var p=f.length<=1?f[0]:f;e.add(a.schedule(JM,0,{value:p,subject:l}))}};try{o.apply(i,s.concat([c]))}catch(f){this.add(a.schedule(L_,0,{err:f,subject:l}))}}this.add(l.subscribe(r))}function JM(t){var e=t.value,n=t.subject;n.next(e),n.complete()}function L_(t){var e=t.err,n=t.subject;n.error(e)}var Yi=function(t){R(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.notifyNext=function(n,r,i,o,s){this.destination.next(r)},e.prototype.notifyError=function(n,r){this.destination.error(n)},e.prototype.notifyComplete=function(n){this.destination.complete()},e}(W),XM=function(t){R(e,t);function e(n,r,i){var o=t.call(this)||this;return o.parent=n,o.outerValue=r,o.outerIndex=i,o.index=0,o}return e.prototype._next=function(n){this.parent.notifyNext(this.outerValue,n,this.outerIndex,this.index++,this)},e.prototype._error=function(n){this.parent.notifyError(n,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(W),ZM=function(t){return function(e){return t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,_o),e}};function eL(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ni=eL(),tL=function(t){return function(e){var n=t[ni]();do{var r=void 0;try{r=n.next()}catch(i){return e.error(i),e}if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}while(!0);return typeof n.return=="function"&&e.add(function(){n.return&&n.return()}),e}},nL=function(t){return function(e){var n=t[bs]();if(typeof n.subscribe!="function")throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(e)}},eE=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function tE(t){return!!t&&typeof t.subscribe!="function"&&typeof t.then=="function"}var Xa=function(t){if(t&&typeof t[bs]=="function")return nL(t);if(eE(t))return Hx(t);if(tE(t))return ZM(t);if(t&&typeof t[ni]=="function")return tL(t);var e=Zg(t)?"an invalid object":"'"+t+"'",n="You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";throw new TypeError(n)};function fr(t,e,n,r,i){if(i===void 0&&(i=new XM(t,n,r)),!i.closed)return e instanceof Z?e.subscribe(i):Xa(e)(i)}var F_={};function rL(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=void 0,r=void 0;return Qt(t[t.length-1])&&(r=t.pop()),typeof t[t.length-1]=="function"&&(n=t.pop()),t.length===1&&Tt(t[0])&&(t=t[0]),kl(t,r).lift(new ov(n))}var ov=function(){function t(e){this.resultSelector=e}return t.prototype.call=function(e,n){return n.subscribe(new iL(e,this.resultSelector))},t}(),iL=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.resultSelector=r,i.active=0,i.values=[],i.observables=[],i}return e.prototype._next=function(n){this.values.push(F_),this.observables.push(n)},e.prototype._complete=function(){var n=this.observables,r=n.length;if(r===0)this.destination.complete();else{this.active=r,this.toRespond=r;for(var i=0;i<r;i++){var o=n[i];this.add(fr(this,o,void 0,i))}}},e.prototype.notifyComplete=function(n){(this.active-=1)===0&&this.destination.complete()},e.prototype.notifyNext=function(n,r,i){var o=this.values,s=o[i],a=this.toRespond?s===F_?--this.toRespond:this.toRespond:0;o[i]=r,a===0&&(this.resultSelector?this._tryResultSelector(o):this.destination.next(o.slice()))},e.prototype._tryResultSelector=function(n){var r;try{r=this.resultSelector.apply(this,n)}catch(i){this.destination.error(i);return}this.destination.next(r)},e}(Yi);function oL(t,e){return new Z(function(n){var r=new Ae;return r.add(e.schedule(function(){var i=t[bs]();r.add(i.subscribe({next:function(o){r.add(e.schedule(function(){return n.next(o)}))},error:function(o){r.add(e.schedule(function(){return n.error(o)}))},complete:function(){r.add(e.schedule(function(){return n.complete()}))}}))})),r})}function sL(t,e){return new Z(function(n){var r=new Ae;return r.add(e.schedule(function(){return t.then(function(i){r.add(e.schedule(function(){n.next(i),r.add(e.schedule(function(){return n.complete()}))}))},function(i){r.add(e.schedule(function(){return n.error(i)}))})})),r})}function aL(t,e){if(!t)throw new Error("Iterable cannot be null");return new Z(function(n){var r=new Ae,i;return r.add(function(){i&&typeof i.return=="function"&&i.return()}),r.add(e.schedule(function(){i=t[ni](),r.add(e.schedule(function(){if(!n.closed){var o,s;try{var a=i.next();o=a.value,s=a.done}catch(l){n.error(l);return}s?n.complete():(n.next(o),this.schedule())}}))})),r})}function lL(t){return t&&typeof t[bs]=="function"}function cL(t){return t&&typeof t[ni]=="function"}function nE(t,e){if(t!=null){if(lL(t))return oL(t,e);if(tE(t))return sL(t,e);if(eE(t))return nv(t,e);if(cL(t)||typeof t=="string")return aL(t,e)}throw new TypeError((t!==null&&typeof t||t)+" is not observable")}function mr(t,e){return e?nE(t,e):t instanceof Z?t:new Z(Xa(t))}var De=function(t){R(e,t);function e(n){var r=t.call(this)||this;return r.parent=n,r}return e.prototype._next=function(n){this.parent.notifyNext(n)},e.prototype._error=function(n){this.parent.notifyError(n),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},e}(W),Me=function(t){R(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.notifyNext=function(n){this.destination.next(n)},e.prototype.notifyError=function(n){this.destination.error(n)},e.prototype.notifyComplete=function(){this.destination.complete()},e}(W);function Le(t,e){if(!e.closed){if(t instanceof Z)return t.subscribe(e);var n;try{n=Xa(t)(e)}catch(r){e.error(r)}return n}}function Ui(t,e,n){return n===void 0&&(n=Number.POSITIVE_INFINITY),typeof e=="function"?function(r){return r.pipe(Ui(function(i,o){return mr(t(i,o)).pipe(gn(function(s,a){return e(i,s,o,a)}))},n))}:(typeof e=="number"&&(n=e),function(r){return r.lift(new uL(t,n))})}var uL=function(){function t(e,n){n===void 0&&(n=Number.POSITIVE_INFINITY),this.project=e,this.concurrent=n}return t.prototype.call=function(e,n){return n.subscribe(new dL(e,this.project,this.concurrent))},t}(),dL=function(t){R(e,t);function e(n,r,i){i===void 0&&(i=Number.POSITIVE_INFINITY);var o=t.call(this,n)||this;return o.project=r,o.concurrent=i,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return e.prototype._next=function(n){this.active<this.concurrent?this._tryNext(n):this.buffer.push(n)},e.prototype._tryNext=function(n){var r,i=this.index++;try{r=this.project(n,i)}catch(o){this.destination.error(o);return}this.active++,this._innerSub(r)},e.prototype._innerSub=function(n){var r=new De(this),i=this.destination;i.add(r);var o=Le(n,r);o!==r&&i.add(o)},e.prototype._complete=function(){this.hasCompleted=!0,this.active===0&&this.buffer.length===0&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(n){this.destination.next(n)},e.prototype.notifyComplete=function(){var n=this.buffer;this.active--,n.length>0?this._next(n.shift()):this.active===0&&this.hasCompleted&&this.destination.complete()},e}(Me),fL=Ui;function sv(t){return t===void 0&&(t=Number.POSITIVE_INFINITY),Ui(ti,t)}function rE(){return sv(1)}function Za(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return rE()(Ld.apply(void 0,t))}function av(t){return new Z(function(e){var n;try{n=t()}catch(i){e.error(i);return}var r=n?mr(n):Ss();return r.subscribe(e)})}function hL(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t.length===1){var n=t[0];if(Tt(n))return ac(n,null);if(Zg(n)&&Object.getPrototypeOf(n)===Object.prototype){var r=Object.keys(n);return ac(r.map(function(o){return n[o]}),r)}}if(typeof t[t.length-1]=="function"){var i=t.pop();return t=t.length===1&&Tt(t[0])?t[0]:t,ac(t,null).pipe(gn(function(o){return i.apply(void 0,o)}))}return ac(t,null)}function ac(t,e){return new Z(function(n){var r=t.length;if(r===0){n.complete();return}for(var i=new Array(r),o=0,s=0,a=function(c){var f=mr(t[c]),u=!1;n.add(f.subscribe({next:function(h){u||(u=!0,s++),i[c]=h},error:function(h){return n.error(h)},complete:function(){o++,(o===r||!u)&&(s===r&&n.next(e?e.reduce(function(h,p,v){return h[p]=i[v],h},{}):i),n.complete())}}))},l=0;l<r;l++)a(l)})}function iE(t,e,n,r){return es(n)&&(r=n,n=void 0),r?iE(t,e,n).pipe(gn(function(i){return Tt(i)?r.apply(void 0,i):r(i)})):new Z(function(i){function o(s){arguments.length>1?i.next(Array.prototype.slice.call(arguments)):i.next(s)}oE(t,e,o,i,n)})}function oE(t,e,n,r,i){var o;if(gL(t)){var s=t;t.addEventListener(e,n,i),o=function(){return s.removeEventListener(e,n,i)}}else if(mL(t)){var a=t;t.on(e,n),o=function(){return a.off(e,n)}}else if(pL(t)){var l=t;t.addListener(e,n),o=function(){return l.removeListener(e,n)}}else if(t&&t.length)for(var c=0,f=t.length;c<f;c++)oE(t[c],e,n,r,i);else throw new TypeError("Invalid event target");r.add(o)}function pL(t){return t&&typeof t.addListener=="function"&&typeof t.removeListener=="function"}function mL(t){return t&&typeof t.on=="function"&&typeof t.off=="function"}function gL(t){return t&&typeof t.addEventListener=="function"&&typeof t.removeEventListener=="function"}function sE(t,e,n){return n?sE(t,e).pipe(gn(function(r){return Tt(r)?n.apply(void 0,r):n(r)})):new Z(function(r){var i=function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return r.next(s.length===1?s[0]:s)},o;try{o=t(i)}catch(s){r.error(s);return}if(es(e))return function(){return e(i,o)}})}function vL(t,e,n,r,i){var o,s;if(arguments.length==1){var a=t;s=a.initialState,e=a.condition,n=a.iterate,o=a.resultSelector||ti,i=a.scheduler}else r===void 0||Qt(r)?(s=t,o=ti,i=r):(s=t,o=r);return new Z(function(l){var c=s;if(i)return i.schedule(yL,0,{subscriber:l,iterate:n,condition:e,resultSelector:o,state:c});do{if(e){var f=void 0;try{f=e(c)}catch(h){l.error(h);return}if(!f){l.complete();break}}var u=void 0;try{u=o(c)}catch(h){l.error(h);return}if(l.next(u),l.closed)break;try{c=n(c)}catch(h){l.error(h);return}}while(!0)})}function yL(t){var e=t.subscriber,n=t.condition;if(!e.closed){if(t.needIterate)try{t.state=t.iterate(t.state)}catch(o){e.error(o);return}else t.needIterate=!0;if(n){var r=void 0;try{r=n(t.state)}catch(o){e.error(o);return}if(!r){e.complete();return}if(e.closed)return}var i;try{i=t.resultSelector(t.state)}catch(o){e.error(o);return}if(!e.closed&&(e.next(i),!e.closed))return this.schedule(t)}}function _L(t,e,n){return e===void 0&&(e=ts),n===void 0&&(n=ts),av(function(){return t()?e:n})}function rs(t){return!Tt(t)&&t-parseFloat(t)+1>=0}function wL(t,e){return t===void 0&&(t=0),e===void 0&&(e=kt),(!rs(t)||t<0)&&(t=0),(!e||typeof e.schedule!="function")&&(e=kt),new Z(function(n){return n.add(e.schedule(bL,t,{subscriber:n,counter:0,period:t})),n})}function bL(t){var e=t.subscriber,n=t.counter,r=t.period;e.next(n),this.schedule({subscriber:e,counter:n+1,period:r},r)}function aE(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Number.POSITIVE_INFINITY,r=null,i=t[t.length-1];return Qt(i)?(r=t.pop(),t.length>1&&typeof t[t.length-1]=="number"&&(n=t.pop())):typeof i=="number"&&(n=t.pop()),r===null&&t.length===1&&t[0]instanceof Z?t[0]:sv(n)(kl(t,r))}var lE=new Z(jn);function SL(){return lE}function Gp(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t.length===0)return ts;var n=t[0],r=t.slice(1);return t.length===1&&Tt(n)?Gp.apply(void 0,n):new Z(function(i){var o=function(){return i.add(Gp.apply(void 0,r).subscribe(i))};return mr(n).subscribe({next:function(s){i.next(s)},error:o,complete:o})})}function CL(t,e){return e?new Z(function(n){var r=Object.keys(t),i=new Ae;return i.add(e.schedule(xL,0,{keys:r,index:0,subscriber:n,subscription:i,obj:t})),i}):new Z(function(n){for(var r=Object.keys(t),i=0;i<r.length&&!n.closed;i++){var o=r[i];t.hasOwnProperty(o)&&n.next([o,t[o]])}n.complete()})}function xL(t){var e=t.keys,n=t.index,r=t.subscriber,i=t.subscription,o=t.obj;if(!r.closed)if(n<e.length){var s=e[n];r.next([s,o[s]]),i.add(this.schedule({keys:e,index:n+1,subscriber:r,subscription:i,obj:o}))}else r.complete()}function cE(t,e){function n(){return!n.pred.apply(n.thisArg,arguments)}return n.pred=t,n.thisArg=e,n}function ri(t,e){return function(r){return r.lift(new EL(t,e))}}var EL=function(){function t(e,n){this.predicate=e,this.thisArg=n}return t.prototype.call=function(e,n){return n.subscribe(new IL(e,this.predicate,this.thisArg))},t}(),IL=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.predicate=r,o.thisArg=i,o.count=0,o}return e.prototype._next=function(n){var r;try{r=this.predicate.call(this.thisArg,n,this.count++)}catch(i){this.destination.error(i);return}r&&this.destination.next(n)},e}(W);function TL(t,e,n){return[ri(e,n)(new Z(Xa(t))),ri(cE(e,n))(new Z(Xa(t)))]}function uE(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t.length===1)if(Tt(t[0]))t=t[0];else return t[0];return kl(t,void 0).lift(new kL)}var kL=function(){function t(){}return t.prototype.call=function(e,n){return n.subscribe(new RL(e))},t}(),RL=function(t){R(e,t);function e(n){var r=t.call(this,n)||this;return r.hasFirst=!1,r.observables=[],r.subscriptions=[],r}return e.prototype._next=function(n){this.observables.push(n)},e.prototype._complete=function(){var n=this.observables,r=n.length;if(r===0)this.destination.complete();else{for(var i=0;i<r&&!this.hasFirst;i++){var o=n[i],s=fr(this,o,void 0,i);this.subscriptions&&this.subscriptions.push(s),this.add(s)}this.observables=null}},e.prototype.notifyNext=function(n,r,i){if(!this.hasFirst){this.hasFirst=!0;for(var o=0;o<this.subscriptions.length;o++)if(o!==i){var s=this.subscriptions[o];s.unsubscribe(),this.remove(s)}this.subscriptions=null}this.destination.next(r)},e}(Yi);function PL(t,e,n){return t===void 0&&(t=0),new Z(function(r){e===void 0&&(e=t,t=0);var i=0,o=t;if(n)return n.schedule(NL,0,{index:i,count:e,start:t,subscriber:r});do{if(i++>=e){r.complete();break}if(r.next(o++),r.closed)break}while(!0)})}function NL(t){var e=t.start,n=t.index,r=t.count,i=t.subscriber;if(n>=r){i.complete();return}i.next(e),!i.closed&&(t.index=n+1,t.start=e+1,this.schedule(t))}function dE(t,e,n){t===void 0&&(t=0);var r=-1;return rs(e)?r=Number(e)<1&&1||Number(e):Qt(e)&&(n=e),Qt(n)||(n=kt),new Z(function(i){var o=rs(t)?t:+t-n.now();return n.schedule(AL,o,{index:0,period:r,subscriber:i})})}function AL(t){var e=t.index,n=t.period,r=t.subscriber;if(r.next(e),!r.closed){if(n===-1)return r.complete();t.index=e+1,this.schedule(t,n)}}function OL(t,e){return new Z(function(n){var r;try{r=t()}catch(a){n.error(a);return}var i;try{i=e(r)}catch(a){n.error(a);return}var o=i?mr(i):ts,s=o.subscribe(n);return function(){s.unsubscribe(),r&&r.unsubscribe()}})}function fE(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return typeof n=="function"&&t.pop(),kl(t,void 0).lift(new hE(n))}var hE=function(){function t(e){this.resultSelector=e}return t.prototype.call=function(e,n){return n.subscribe(new jL(e,this.resultSelector))},t}(),jL=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.resultSelector=r,o.iterators=[],o.active=0,o.resultSelector=typeof r=="function"?r:void 0,o}return e.prototype._next=function(n){var r=this.iterators;Tt(n)?r.push(new ML(n)):typeof n[ni]=="function"?r.push(new DL(n[ni]())):r.push(new LL(this.destination,this,n))},e.prototype._complete=function(){var n=this.iterators,r=n.length;if(this.unsubscribe(),r===0){this.destination.complete();return}this.active=r;for(var i=0;i<r;i++){var o=n[i];if(o.stillUnsubscribed){var s=this.destination;s.add(o.subscribe())}else this.active--}},e.prototype.notifyInactive=function(){this.active--,this.active===0&&this.destination.complete()},e.prototype.checkIterators=function(){for(var n=this.iterators,r=n.length,i=this.destination,o=0;o<r;o++){var s=n[o];if(typeof s.hasValue=="function"&&!s.hasValue())return}for(var a=!1,l=[],o=0;o<r;o++){var s=n[o],c=s.next();if(s.hasCompleted()&&(a=!0),c.done){i.complete();return}l.push(c.value)}this.resultSelector?this._tryresultSelector(l):i.next(l),a&&i.complete()},e.prototype._tryresultSelector=function(n){var r;try{r=this.resultSelector.apply(this,n)}catch(i){this.destination.error(i);return}this.destination.next(r)},e}(W),DL=function(){function t(e){this.iterator=e,this.nextResult=e.next()}return t.prototype.hasValue=function(){return!0},t.prototype.next=function(){var e=this.nextResult;return this.nextResult=this.iterator.next(),e},t.prototype.hasCompleted=function(){var e=this.nextResult;return!!(e&&e.done)},t}(),ML=function(){function t(e){this.array=e,this.index=0,this.length=0,this.length=e.length}return t.prototype[ni]=function(){return this},t.prototype.next=function(e){var n=this.index++,r=this.array;return n<this.length?{value:r[n],done:!1}:{value:null,done:!0}},t.prototype.hasValue=function(){return this.array.length>this.index},t.prototype.hasCompleted=function(){return this.array.length===this.index},t}(),LL=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.parent=r,o.observable=i,o.stillUnsubscribed=!0,o.buffer=[],o.isComplete=!1,o}return e.prototype[ni]=function(){return this},e.prototype.next=function(){var n=this.buffer;return n.length===0&&this.isComplete?{value:null,done:!0}:{value:n.shift(),done:!1}},e.prototype.hasValue=function(){return this.buffer.length>0},e.prototype.hasCompleted=function(){return this.buffer.length===0&&this.isComplete},e.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},e.prototype.notifyNext=function(n){this.buffer.push(n),this.parent.checkIterators()},e.prototype.subscribe=function(){return Le(this.observable,new De(this))},e}(Me);const FL=Object.freeze(Object.defineProperty({__proto__:null,ArgumentOutOfRangeError:ns,AsyncSubject:Cs,BehaviorSubject:Bx,ConnectableObservable:zx,EMPTY:ts,EmptyError:Rl,GroupedObservable:Bp,NEVER:lE,Notification:rr,get NotificationKind(){return Wp},ObjectUnsubscribedError:Rr,Observable:Z,ReplaySubject:iv,Scheduler:Vp,Subject:st,Subscriber:W,Subscription:Ae,TimeoutError:Jx,UnsubscriptionError:pa,VirtualAction:Qx,VirtualTimeScheduler:zM,animationFrame:UM,animationFrameScheduler:Yx,asap:Ac,asapScheduler:qx,async:kt,asyncScheduler:Kx,bindCallback:Xx,bindNodeCallback:Zx,combineLatest:rL,concat:Za,config:sn,defer:av,empty:Ss,forkJoin:hL,from:mr,fromEvent:iE,fromEventPattern:sE,generate:vL,identity:ti,iif:_L,interval:wL,isObservable:BM,merge:aE,never:SL,noop:jn,observable:bs,of:Ld,onErrorResumeNext:Gp,pairs:CL,partition:TL,pipe:zp,queue:Wx,queueScheduler:Vx,race:uE,range:PL,scheduled:nE,throwError:rv,timer:dE,using:OL,zip:fE},Symbol.toStringTag,{value:"Module"})),lv=Z_(FL);function pE(t){return function(n){return n.lift(new $L(t))}}var $L=function(){function t(e){this.durationSelector=e}return t.prototype.call=function(e,n){return n.subscribe(new UL(e,this.durationSelector))},t}(),UL=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.durationSelector=r,i.hasValue=!1,i}return e.prototype._next=function(n){if(this.value=n,this.hasValue=!0,!this.throttled){var r=void 0;try{var i=this.durationSelector;r=i(n)}catch(s){return this.destination.error(s)}var o=Le(r,new De(this));!o||o.closed?this.clearThrottle():this.add(this.throttled=o)}},e.prototype.clearThrottle=function(){var n=this,r=n.value,i=n.hasValue,o=n.throttled;o&&(this.remove(o),this.throttled=void 0,o.unsubscribe()),i&&(this.value=void 0,this.hasValue=!1,this.destination.next(r))},e.prototype.notifyNext=function(){this.clearThrottle()},e.prototype.notifyComplete=function(){this.clearThrottle()},e}(Me);function zL(t,e){return e===void 0&&(e=kt),pE(function(){return dE(t,e)})}function BL(t){return function(n){return n.lift(new VL(t))}}var VL=function(){function t(e){this.closingNotifier=e}return t.prototype.call=function(e,n){return n.subscribe(new WL(e,this.closingNotifier))},t}(),WL=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.buffer=[],i.add(Le(r,new De(i))),i}return e.prototype._next=function(n){this.buffer.push(n)},e.prototype.notifyNext=function(){var n=this.buffer;this.buffer=[],this.destination.next(n)},e}(Me);function HL(t,e){return e===void 0&&(e=null),function(r){return r.lift(new GL(t,e))}}var GL=function(){function t(e,n){this.bufferSize=e,this.startBufferEvery=n,!n||e===n?this.subscriberClass=qL:this.subscriberClass=KL}return t.prototype.call=function(e,n){return n.subscribe(new this.subscriberClass(e,this.bufferSize,this.startBufferEvery))},t}(),qL=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.bufferSize=r,i.buffer=[],i}return e.prototype._next=function(n){var r=this.buffer;r.push(n),r.length==this.bufferSize&&(this.destination.next(r),this.buffer=[])},e.prototype._complete=function(){var n=this.buffer;n.length>0&&this.destination.next(n),t.prototype._complete.call(this)},e}(W),KL=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.bufferSize=r,o.startBufferEvery=i,o.buffers=[],o.count=0,o}return e.prototype._next=function(n){var r=this,i=r.bufferSize,o=r.startBufferEvery,s=r.buffers,a=r.count;this.count++,a%o===0&&s.push([]);for(var l=s.length;l--;){var c=s[l];c.push(n),c.length===i&&(s.splice(l,1),this.destination.next(c))}},e.prototype._complete=function(){for(var n=this,r=n.buffers,i=n.destination;r.length>0;){var o=r.shift();o.length>0&&i.next(o)}t.prototype._complete.call(this)},e}(W);function YL(t){var e=arguments.length,n=kt;Qt(arguments[arguments.length-1])&&(n=arguments[arguments.length-1],e--);var r=null;e>=2&&(r=arguments[1]);var i=Number.POSITIVE_INFINITY;return e>=3&&(i=arguments[2]),function(s){return s.lift(new QL(t,r,i,n))}}var QL=function(){function t(e,n,r,i){this.bufferTimeSpan=e,this.bufferCreationInterval=n,this.maxBufferSize=r,this.scheduler=i}return t.prototype.call=function(e,n){return n.subscribe(new XL(e,this.bufferTimeSpan,this.bufferCreationInterval,this.maxBufferSize,this.scheduler))},t}(),JL=function(){function t(){this.buffer=[]}return t}(),XL=function(t){R(e,t);function e(n,r,i,o,s){var a=t.call(this,n)||this;a.bufferTimeSpan=r,a.bufferCreationInterval=i,a.maxBufferSize=o,a.scheduler=s,a.contexts=[];var l=a.openContext();if(a.timespanOnly=i==null||i<0,a.timespanOnly){var c={subscriber:a,context:l,bufferTimeSpan:r};a.add(l.closeAction=s.schedule($_,r,c))}else{var f={subscriber:a,context:l},u={bufferTimeSpan:r,bufferCreationInterval:i,subscriber:a,scheduler:s};a.add(l.closeAction=s.schedule(mE,r,f)),a.add(s.schedule(ZL,i,u))}return a}return e.prototype._next=function(n){for(var r=this.contexts,i=r.length,o,s=0;s<i;s++){var a=r[s],l=a.buffer;l.push(n),l.length==this.maxBufferSize&&(o=a)}o&&this.onBufferFull(o)},e.prototype._error=function(n){this.contexts.length=0,t.prototype._error.call(this,n)},e.prototype._complete=function(){for(var n=this,r=n.contexts,i=n.destination;r.length>0;){var o=r.shift();i.next(o.buffer)}t.prototype._complete.call(this)},e.prototype._unsubscribe=function(){this.contexts=null},e.prototype.onBufferFull=function(n){this.closeContext(n);var r=n.closeAction;if(r.unsubscribe(),this.remove(r),!this.closed&&this.timespanOnly){n=this.openContext();var i=this.bufferTimeSpan,o={subscriber:this,context:n,bufferTimeSpan:i};this.add(n.closeAction=this.scheduler.schedule($_,i,o))}},e.prototype.openContext=function(){var n=new JL;return this.contexts.push(n),n},e.prototype.closeContext=function(n){this.destination.next(n.buffer);var r=this.contexts,i=r?r.indexOf(n):-1;i>=0&&r.splice(r.indexOf(n),1)},e}(W);function $_(t){var e=t.subscriber,n=t.context;n&&e.closeContext(n),e.closed||(t.context=e.openContext(),t.context.closeAction=this.schedule(t,t.bufferTimeSpan))}function ZL(t){var e=t.bufferCreationInterval,n=t.bufferTimeSpan,r=t.subscriber,i=t.scheduler,o=r.openContext(),s=this;r.closed||(r.add(o.closeAction=i.schedule(mE,n,{subscriber:r,context:o})),s.schedule(t,e))}function mE(t){var e=t.subscriber,n=t.context;e.closeContext(n)}function e6(t,e){return function(r){return r.lift(new t6(t,e))}}var t6=function(){function t(e,n){this.openings=e,this.closingSelector=n}return t.prototype.call=function(e,n){return n.subscribe(new n6(e,this.openings,this.closingSelector))},t}(),n6=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.closingSelector=i,o.contexts=[],o.add(fr(o,r)),o}return e.prototype._next=function(n){for(var r=this.contexts,i=r.length,o=0;o<i;o++)r[o].buffer.push(n)},e.prototype._error=function(n){for(var r=this.contexts;r.length>0;){var i=r.shift();i.subscription.unsubscribe(),i.buffer=null,i.subscription=null}this.contexts=null,t.prototype._error.call(this,n)},e.prototype._complete=function(){for(var n=this.contexts;n.length>0;){var r=n.shift();this.destination.next(r.buffer),r.subscription.unsubscribe(),r.buffer=null,r.subscription=null}this.contexts=null,t.prototype._complete.call(this)},e.prototype.notifyNext=function(n,r){n?this.closeBuffer(n):this.openBuffer(r)},e.prototype.notifyComplete=function(n){this.closeBuffer(n.context)},e.prototype.openBuffer=function(n){try{var r=this.closingSelector,i=r.call(this,n);i&&this.trySubscribe(i)}catch(o){this._error(o)}},e.prototype.closeBuffer=function(n){var r=this.contexts;if(r&&n){var i=n.buffer,o=n.subscription;this.destination.next(i),r.splice(r.indexOf(n),1),this.remove(o),o.unsubscribe()}},e.prototype.trySubscribe=function(n){var r=this.contexts,i=[],o=new Ae,s={buffer:i,subscription:o};r.push(s);var a=fr(this,n,s);!a||a.closed?this.closeBuffer(s):(a.context=s,this.add(a),o.add(a))},e}(Yi);function r6(t){return function(e){return e.lift(new i6(t))}}var i6=function(){function t(e){this.closingSelector=e}return t.prototype.call=function(e,n){return n.subscribe(new o6(e,this.closingSelector))},t}(),o6=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.closingSelector=r,i.subscribing=!1,i.openBuffer(),i}return e.prototype._next=function(n){this.buffer.push(n)},e.prototype._complete=function(){var n=this.buffer;n&&this.destination.next(n),t.prototype._complete.call(this)},e.prototype._unsubscribe=function(){this.buffer=void 0,this.subscribing=!1},e.prototype.notifyNext=function(){this.openBuffer()},e.prototype.notifyComplete=function(){this.subscribing?this.complete():this.openBuffer()},e.prototype.openBuffer=function(){var n=this.closingSubscription;n&&(this.remove(n),n.unsubscribe());var r=this.buffer;this.buffer&&this.destination.next(r),this.buffer=[];var i;try{var o=this.closingSelector;i=o()}catch(s){return this.error(s)}n=new Ae,this.closingSubscription=n,this.add(n),this.subscribing=!0,n.add(Le(i,new De(this))),this.subscribing=!1},e}(Me);function s6(t){return function(n){var r=new a6(t),i=n.lift(r);return r.caught=i}}var a6=function(){function t(e){this.selector=e}return t.prototype.call=function(e,n){return n.subscribe(new l6(e,this.selector,this.caught))},t}(),l6=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.selector=r,o.caught=i,o}return e.prototype.error=function(n){if(!this.isStopped){var r=void 0;try{r=this.selector(n,this.caught)}catch(s){t.prototype.error.call(this,s);return}this._unsubscribeAndRecycle();var i=new De(this);this.add(i);var o=Le(r,i);o!==i&&this.add(o)}},e}(Me);function c6(t){return function(e){return e.lift(new ov(t))}}function u6(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=null;return typeof t[t.length-1]=="function"&&(n=t.pop()),t.length===1&&Tt(t[0])&&(t=t[0].slice()),function(r){return r.lift.call(mr([r].concat(t)),new ov(n))}}function d6(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){return n.lift.call(Za.apply(void 0,[n].concat(t)))}}function gE(t,e){return Ui(t,e,1)}function f6(t,e){return gE(function(){return t},e)}function h6(t){return function(e){return e.lift(new p6(t,e))}}var p6=function(){function t(e,n){this.predicate=e,this.source=n}return t.prototype.call=function(e,n){return n.subscribe(new m6(e,this.predicate,this.source))},t}(),m6=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.predicate=r,o.source=i,o.count=0,o.index=0,o}return e.prototype._next=function(n){this.predicate?this._tryPredicate(n):this.count++},e.prototype._tryPredicate=function(n){var r;try{r=this.predicate(n,this.index++,this.source)}catch(i){this.destination.error(i);return}r&&this.count++},e.prototype._complete=function(){this.destination.next(this.count),this.destination.complete()},e}(W);function g6(t){return function(e){return e.lift(new v6(t))}}var v6=function(){function t(e){this.durationSelector=e}return t.prototype.call=function(e,n){return n.subscribe(new y6(e,this.durationSelector))},t}(),y6=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.durationSelector=r,i.hasValue=!1,i}return e.prototype._next=function(n){try{var r=this.durationSelector.call(this,n);r&&this._tryNext(n,r)}catch(i){this.destination.error(i)}},e.prototype._complete=function(){this.emitValue(),this.destination.complete()},e.prototype._tryNext=function(n,r){var i=this.durationSubscription;this.value=n,this.hasValue=!0,i&&(i.unsubscribe(),this.remove(i)),i=Le(r,new De(this)),i&&!i.closed&&this.add(this.durationSubscription=i)},e.prototype.notifyNext=function(){this.emitValue()},e.prototype.notifyComplete=function(){this.emitValue()},e.prototype.emitValue=function(){if(this.hasValue){var n=this.value,r=this.durationSubscription;r&&(this.durationSubscription=void 0,r.unsubscribe(),this.remove(r)),this.value=void 0,this.hasValue=!1,t.prototype._next.call(this,n)}},e}(Me);function _6(t,e){return e===void 0&&(e=kt),function(n){return n.lift(new w6(t,e))}}var w6=function(){function t(e,n){this.dueTime=e,this.scheduler=n}return t.prototype.call=function(e,n){return n.subscribe(new b6(e,this.dueTime,this.scheduler))},t}(),b6=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.dueTime=r,o.scheduler=i,o.debouncedSubscription=null,o.lastValue=null,o.hasValue=!1,o}return e.prototype._next=function(n){this.clearDebounce(),this.lastValue=n,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(S6,this.dueTime,this))},e.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},e.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var n=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(n)}},e.prototype.clearDebounce=function(){var n=this.debouncedSubscription;n!==null&&(this.remove(n),n.unsubscribe(),this.debouncedSubscription=null)},e}(W);function S6(t){t.debouncedNext()}function Pl(t){return t===void 0&&(t=null),function(e){return e.lift(new C6(t))}}var C6=function(){function t(e){this.defaultValue=e}return t.prototype.call=function(e,n){return n.subscribe(new x6(e,this.defaultValue))},t}(),x6=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.defaultValue=r,i.isEmpty=!0,i}return e.prototype._next=function(n){this.isEmpty=!1,this.destination.next(n)},e.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},e}(W);function vE(t){return t instanceof Date&&!isNaN(+t)}function E6(t,e){e===void 0&&(e=kt);var n=vE(t),r=n?+t-e.now():Math.abs(t);return function(i){return i.lift(new I6(r,e))}}var I6=function(){function t(e,n){this.delay=e,this.scheduler=n}return t.prototype.call=function(e,n){return n.subscribe(new T6(e,this.delay,this.scheduler))},t}(),T6=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.delay=r,o.scheduler=i,o.queue=[],o.active=!1,o.errored=!1,o}return e.dispatch=function(n){for(var r=n.source,i=r.queue,o=n.scheduler,s=n.destination;i.length>0&&i[0].time-o.now()<=0;)i.shift().notification.observe(s);if(i.length>0){var a=Math.max(0,i[0].time-o.now());this.schedule(n,a)}else this.unsubscribe(),r.active=!1},e.prototype._schedule=function(n){this.active=!0;var r=this.destination;r.add(n.schedule(e.dispatch,this.delay,{source:this,destination:this.destination,scheduler:n}))},e.prototype.scheduleNotification=function(n){if(this.errored!==!0){var r=this.scheduler,i=new k6(r.now()+this.delay,n);this.queue.push(i),this.active===!1&&this._schedule(r)}},e.prototype._next=function(n){this.scheduleNotification(rr.createNext(n))},e.prototype._error=function(n){this.errored=!0,this.queue=[],this.destination.error(n),this.unsubscribe()},e.prototype._complete=function(){this.scheduleNotification(rr.createComplete()),this.unsubscribe()},e}(W),k6=function(){function t(e,n){this.time=e,this.notification=n}return t}();function R6(t,e){return e?function(n){return new N6(n,e).lift(new U_(t))}:function(n){return n.lift(new U_(t))}}var U_=function(){function t(e){this.delayDurationSelector=e}return t.prototype.call=function(e,n){return n.subscribe(new P6(e,this.delayDurationSelector))},t}(),P6=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.delayDurationSelector=r,i.completed=!1,i.delayNotifierSubscriptions=[],i.index=0,i}return e.prototype.notifyNext=function(n,r,i,o,s){this.destination.next(n),this.removeSubscription(s),this.tryComplete()},e.prototype.notifyError=function(n,r){this._error(n)},e.prototype.notifyComplete=function(n){var r=this.removeSubscription(n);r&&this.destination.next(r),this.tryComplete()},e.prototype._next=function(n){var r=this.index++;try{var i=this.delayDurationSelector(n,r);i&&this.tryDelay(i,n)}catch(o){this.destination.error(o)}},e.prototype._complete=function(){this.completed=!0,this.tryComplete(),this.unsubscribe()},e.prototype.removeSubscription=function(n){n.unsubscribe();var r=this.delayNotifierSubscriptions.indexOf(n);return r!==-1&&this.delayNotifierSubscriptions.splice(r,1),n.outerValue},e.prototype.tryDelay=function(n,r){var i=fr(this,n,r);if(i&&!i.closed){var o=this.destination;o.add(i),this.delayNotifierSubscriptions.push(i)}},e.prototype.tryComplete=function(){this.completed&&this.delayNotifierSubscriptions.length===0&&this.destination.complete()},e}(Yi),N6=function(t){R(e,t);function e(n,r){var i=t.call(this)||this;return i.source=n,i.subscriptionDelay=r,i}return e.prototype._subscribe=function(n){this.subscriptionDelay.subscribe(new A6(n,this.source))},e}(Z),A6=function(t){R(e,t);function e(n,r){var i=t.call(this)||this;return i.parent=n,i.source=r,i.sourceSubscribed=!1,i}return e.prototype._next=function(n){this.subscribeToSource()},e.prototype._error=function(n){this.unsubscribe(),this.parent.error(n)},e.prototype._complete=function(){this.unsubscribe(),this.subscribeToSource()},e.prototype.subscribeToSource=function(){this.sourceSubscribed||(this.sourceSubscribed=!0,this.unsubscribe(),this.source.subscribe(this.parent))},e}(W);function O6(){return function(e){return e.lift(new j6)}}var j6=function(){function t(){}return t.prototype.call=function(e,n){return n.subscribe(new D6(e))},t}(),D6=function(t){R(e,t);function e(n){return t.call(this,n)||this}return e.prototype._next=function(n){n.observe(this.destination)},e}(W);function M6(t,e){return function(n){return n.lift(new L6(t,e))}}var L6=function(){function t(e,n){this.keySelector=e,this.flushes=n}return t.prototype.call=function(e,n){return n.subscribe(new F6(e,this.keySelector,this.flushes))},t}(),F6=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.keySelector=r,o.values=new Set,i&&o.add(Le(i,new De(o))),o}return e.prototype.notifyNext=function(){this.values.clear()},e.prototype.notifyError=function(n){this._error(n)},e.prototype._next=function(n){this.keySelector?this._useKeySelector(n):this._finalizeNext(n,n)},e.prototype._useKeySelector=function(n){var r,i=this.destination;try{r=this.keySelector(n)}catch(o){i.error(o);return}this._finalizeNext(r,n)},e.prototype._finalizeNext=function(n,r){var i=this.values;i.has(n)||(i.add(n),this.destination.next(r))},e}(Me);function yE(t,e){return function(n){return n.lift(new $6(t,e))}}var $6=function(){function t(e,n){this.compare=e,this.keySelector=n}return t.prototype.call=function(e,n){return n.subscribe(new U6(e,this.compare,this.keySelector))},t}(),U6=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.keySelector=i,o.hasKey=!1,typeof r=="function"&&(o.compare=r),o}return e.prototype.compare=function(n,r){return n===r},e.prototype._next=function(n){var r;try{var i=this.keySelector;r=i?i(n):n}catch(a){return this.destination.error(a)}var o=!1;if(this.hasKey)try{var s=this.compare;o=s(this.key,r)}catch(a){return this.destination.error(a)}else this.hasKey=!0;o||(this.key=r,this.destination.next(n))},e}(W);function z6(t,e){return yE(function(n,r){return e?e(n[t],r[t]):n[t]===r[t]})}function Fd(t){return t===void 0&&(t=W6),function(e){return e.lift(new B6(t))}}var B6=function(){function t(e){this.errorFactory=e}return t.prototype.call=function(e,n){return n.subscribe(new V6(e,this.errorFactory))},t}(),V6=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.errorFactory=r,i.hasValue=!1,i}return e.prototype._next=function(n){this.hasValue=!0,this.destination.next(n)},e.prototype._complete=function(){if(this.hasValue)return this.destination.complete();var n=void 0;try{n=this.errorFactory()}catch(r){n=r}this.destination.error(n)},e}(W);function W6(){return new Rl}function cv(t){return function(e){return t===0?Ss():e.lift(new H6(t))}}var H6=function(){function t(e){if(this.total=e,this.total<0)throw new ns}return t.prototype.call=function(e,n){return n.subscribe(new G6(e,this.total))},t}(),G6=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.total=r,i.count=0,i}return e.prototype._next=function(n){var r=this.total,i=++this.count;i<=r&&(this.destination.next(n),i===r&&(this.destination.complete(),this.unsubscribe()))},e}(W);function q6(t,e){if(t<0)throw new ns;var n=arguments.length>=2;return function(r){return r.pipe(ri(function(i,o){return o===t}),cv(1),n?Pl(e):Fd(function(){return new ns}))}}function K6(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){return Za(n,Ld.apply(void 0,t))}}function Y6(t,e){return function(n){return n.lift(new Q6(t,e,n))}}var Q6=function(){function t(e,n,r){this.predicate=e,this.thisArg=n,this.source=r}return t.prototype.call=function(e,n){return n.subscribe(new J6(e,this.predicate,this.thisArg,this.source))},t}(),J6=function(t){R(e,t);function e(n,r,i,o){var s=t.call(this,n)||this;return s.predicate=r,s.thisArg=i,s.source=o,s.index=0,s.thisArg=i||s,s}return e.prototype.notifyComplete=function(n){this.destination.next(n),this.destination.complete()},e.prototype._next=function(n){var r=!1;try{r=this.predicate.call(this.thisArg,n,this.index++,this.source)}catch(i){this.destination.error(i);return}r||this.notifyComplete(!1)},e.prototype._complete=function(){this.notifyComplete(!0)},e}(W);function X6(){return function(t){return t.lift(new Z6)}}var Z6=function(){function t(){}return t.prototype.call=function(e,n){return n.subscribe(new e9(e))},t}(),e9=function(t){R(e,t);function e(n){var r=t.call(this,n)||this;return r.hasCompleted=!1,r.hasSubscription=!1,r}return e.prototype._next=function(n){this.hasSubscription||(this.hasSubscription=!0,this.add(Le(n,new De(this))))},e.prototype._complete=function(){this.hasCompleted=!0,this.hasSubscription||this.destination.complete()},e.prototype.notifyComplete=function(){this.hasSubscription=!1,this.hasCompleted&&this.destination.complete()},e}(Me);function _E(t,e){return e?function(n){return n.pipe(_E(function(r,i){return mr(t(r,i)).pipe(gn(function(o,s){return e(r,o,i,s)}))}))}:function(n){return n.lift(new t9(t))}}var t9=function(){function t(e){this.project=e}return t.prototype.call=function(e,n){return n.subscribe(new n9(e,this.project))},t}(),n9=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.project=r,i.hasSubscription=!1,i.hasCompleted=!1,i.index=0,i}return e.prototype._next=function(n){this.hasSubscription||this.tryNext(n)},e.prototype.tryNext=function(n){var r,i=this.index++;try{r=this.project(n,i)}catch(o){this.destination.error(o);return}this.hasSubscription=!0,this._innerSub(r)},e.prototype._innerSub=function(n){var r=new De(this),i=this.destination;i.add(r);var o=Le(n,r);o!==r&&i.add(o)},e.prototype._complete=function(){this.hasCompleted=!0,this.hasSubscription||this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(n){this.destination.next(n)},e.prototype.notifyError=function(n){this.destination.error(n)},e.prototype.notifyComplete=function(){this.hasSubscription=!1,this.hasCompleted&&this.destination.complete()},e}(Me);function r9(t,e,n){return e===void 0&&(e=Number.POSITIVE_INFINITY),e=(e||0)<1?Number.POSITIVE_INFINITY:e,function(r){return r.lift(new i9(t,e,n))}}var i9=function(){function t(e,n,r){this.project=e,this.concurrent=n,this.scheduler=r}return t.prototype.call=function(e,n){return n.subscribe(new o9(e,this.project,this.concurrent,this.scheduler))},t}(),o9=function(t){R(e,t);function e(n,r,i,o){var s=t.call(this,n)||this;return s.project=r,s.concurrent=i,s.scheduler=o,s.index=0,s.active=0,s.hasCompleted=!1,i<Number.POSITIVE_INFINITY&&(s.buffer=[]),s}return e.dispatch=function(n){var r=n.subscriber,i=n.result,o=n.value,s=n.index;r.subscribeToProjection(i,o,s)},e.prototype._next=function(n){var r=this.destination;if(r.closed){this._complete();return}var i=this.index++;if(this.active<this.concurrent){r.next(n);try{var o=this.project,s=o(n,i);if(!this.scheduler)this.subscribeToProjection(s,n,i);else{var a={subscriber:this,result:s,value:n,index:i},l=this.destination;l.add(this.scheduler.schedule(e.dispatch,0,a))}}catch(c){r.error(c)}}else this.buffer.push(n)},e.prototype.subscribeToProjection=function(n,r,i){this.active++;var o=this.destination;o.add(Le(n,new De(this)))},e.prototype._complete=function(){this.hasCompleted=!0,this.hasCompleted&&this.active===0&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(n){this._next(n)},e.prototype.notifyComplete=function(){var n=this.buffer;this.active--,n&&n.length>0&&this._next(n.shift()),this.hasCompleted&&this.active===0&&this.destination.complete()},e}(Me);function s9(t){return function(e){return e.lift(new a9(t))}}var a9=function(){function t(e){this.callback=e}return t.prototype.call=function(e,n){return n.subscribe(new l9(e,this.callback))},t}(),l9=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.add(new Ae(r)),i}return e}(W);function c9(t,e){if(typeof t!="function")throw new TypeError("predicate is not a function");return function(n){return n.lift(new wE(t,n,!1,e))}}var wE=function(){function t(e,n,r,i){this.predicate=e,this.source=n,this.yieldIndex=r,this.thisArg=i}return t.prototype.call=function(e,n){return n.subscribe(new u9(e,this.predicate,this.source,this.yieldIndex,this.thisArg))},t}(),u9=function(t){R(e,t);function e(n,r,i,o,s){var a=t.call(this,n)||this;return a.predicate=r,a.source=i,a.yieldIndex=o,a.thisArg=s,a.index=0,a}return e.prototype.notifyComplete=function(n){var r=this.destination;r.next(n),r.complete(),this.unsubscribe()},e.prototype._next=function(n){var r=this,i=r.predicate,o=r.thisArg,s=this.index++;try{var a=i.call(o||this,n,s,this.source);a&&this.notifyComplete(this.yieldIndex?s:n)}catch(l){this.destination.error(l)}},e.prototype._complete=function(){this.notifyComplete(this.yieldIndex?-1:void 0)},e}(W);function d9(t,e){return function(n){return n.lift(new wE(t,n,!0,e))}}function f9(t,e){var n=arguments.length>=2;return function(r){return r.pipe(t?ri(function(i,o){return t(i,o,r)}):ti,cv(1),n?Pl(e):Fd(function(){return new Rl}))}}function h9(){return function(e){return e.lift(new p9)}}var p9=function(){function t(){}return t.prototype.call=function(e,n){return n.subscribe(new m9(e))},t}(),m9=function(t){R(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._next=function(n){},e}(W);function g9(){return function(t){return t.lift(new v9)}}var v9=function(){function t(){}return t.prototype.call=function(e,n){return n.subscribe(new y9(e))},t}(),y9=function(t){R(e,t);function e(n){return t.call(this,n)||this}return e.prototype.notifyComplete=function(n){var r=this.destination;r.next(n),r.complete()},e.prototype._next=function(n){this.notifyComplete(!1)},e.prototype._complete=function(){this.notifyComplete(!0)},e}(W);function Mu(t){return function(n){return t===0?Ss():n.lift(new _9(t))}}var _9=function(){function t(e){if(this.total=e,this.total<0)throw new ns}return t.prototype.call=function(e,n){return n.subscribe(new w9(e,this.total))},t}(),w9=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.total=r,i.ring=new Array,i.count=0,i}return e.prototype._next=function(n){var r=this.ring,i=this.total,o=this.count++;if(r.length<i)r.push(n);else{var s=o%i;r[s]=n}},e.prototype._complete=function(){var n=this.destination,r=this.count;if(r>0)for(var i=this.count>=this.total?this.total:this.count,o=this.ring,s=0;s<i;s++){var a=r++%i;n.next(o[a])}n.complete()},e}(W);function b9(t,e){var n=arguments.length>=2;return function(r){return r.pipe(t?ri(function(i,o){return t(i,o,r)}):ti,Mu(1),n?Pl(e):Fd(function(){return new Rl}))}}function S9(t){return function(e){return e.lift(new C9(t))}}var C9=function(){function t(e){this.value=e}return t.prototype.call=function(e,n){return n.subscribe(new x9(e,this.value))},t}(),x9=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.value=r,i}return e.prototype._next=function(n){this.destination.next(this.value)},e}(W);function E9(){return function(e){return e.lift(new I9)}}var I9=function(){function t(){}return t.prototype.call=function(e,n){return n.subscribe(new T9(e))},t}(),T9=function(t){R(e,t);function e(n){return t.call(this,n)||this}return e.prototype._next=function(n){this.destination.next(rr.createNext(n))},e.prototype._error=function(n){var r=this.destination;r.next(rr.createError(n)),r.complete()},e.prototype._complete=function(){var n=this.destination;n.next(rr.createComplete()),n.complete()},e}(W);function Lu(t,e){var n=!1;return arguments.length>=2&&(n=!0),function(i){return i.lift(new k9(t,e,n))}}var k9=function(){function t(e,n,r){r===void 0&&(r=!1),this.accumulator=e,this.seed=n,this.hasSeed=r}return t.prototype.call=function(e,n){return n.subscribe(new R9(e,this.accumulator,this.seed,this.hasSeed))},t}(),R9=function(t){R(e,t);function e(n,r,i,o){var s=t.call(this,n)||this;return s.accumulator=r,s._seed=i,s.hasSeed=o,s.index=0,s}return Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(n){this.hasSeed=!0,this._seed=n},enumerable:!0,configurable:!0}),e.prototype._next=function(n){if(!this.hasSeed)this.seed=n,this.destination.next(n);else return this._tryNext(n)},e.prototype._tryNext=function(n){var r=this.index++,i;try{i=this.accumulator(this.seed,n,r)}catch(o){this.destination.error(o)}this.seed=i,this.destination.next(i)},e}(W);function $d(t,e){return arguments.length>=2?function(r){return zp(Lu(t,e),Mu(1),Pl(e))(r)}:function(r){return zp(Lu(function(i,o,s){return t(i,o,s+1)}),Mu(1))(r)}}function P9(t){var e=typeof t=="function"?function(n,r){return t(n,r)>0?n:r}:function(n,r){return n>r?n:r};return $d(e)}function N9(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){return n.lift.call(aE.apply(void 0,[n].concat(t)))}}function A9(t,e,n){return n===void 0&&(n=Number.POSITIVE_INFINITY),typeof e=="function"?Ui(function(){return t},e,n):(typeof e=="number"&&(n=e),Ui(function(){return t},n))}function O9(t,e,n){return n===void 0&&(n=Number.POSITIVE_INFINITY),function(r){return r.lift(new j9(t,e,n))}}var j9=function(){function t(e,n,r){this.accumulator=e,this.seed=n,this.concurrent=r}return t.prototype.call=function(e,n){return n.subscribe(new D9(e,this.accumulator,this.seed,this.concurrent))},t}(),D9=function(t){R(e,t);function e(n,r,i,o){var s=t.call(this,n)||this;return s.accumulator=r,s.acc=i,s.concurrent=o,s.hasValue=!1,s.hasCompleted=!1,s.buffer=[],s.active=0,s.index=0,s}return e.prototype._next=function(n){if(this.active<this.concurrent){var r=this.index++,i=this.destination,o=void 0;try{var s=this.accumulator;o=s(this.acc,n,r)}catch(a){return i.error(a)}this.active++,this._innerSub(o)}else this.buffer.push(n)},e.prototype._innerSub=function(n){var r=new De(this),i=this.destination;i.add(r);var o=Le(n,r);o!==r&&i.add(o)},e.prototype._complete=function(){this.hasCompleted=!0,this.active===0&&this.buffer.length===0&&(this.hasValue===!1&&this.destination.next(this.acc),this.destination.complete()),this.unsubscribe()},e.prototype.notifyNext=function(n){var r=this.destination;this.acc=n,this.hasValue=!0,r.next(n)},e.prototype.notifyComplete=function(){var n=this.buffer;this.active--,n.length>0?this._next(n.shift()):this.active===0&&this.hasCompleted&&(this.hasValue===!1&&this.destination.next(this.acc),this.destination.complete())},e}(Me);function M9(t){var e=typeof t=="function"?function(n,r){return t(n,r)<0?n:r}:function(n,r){return n<r?n:r};return $d(e)}function zi(t,e){return function(r){var i;if(typeof t=="function"?i=t:i=function(){return t},typeof e=="function")return r.lift(new L9(i,e));var o=Object.create(r,yM);return o.source=r,o.subjectFactory=i,o}}var L9=function(){function t(e,n){this.subjectFactory=e,this.selector=n}return t.prototype.call=function(e,n){var r=this.selector,i=this.subjectFactory(),o=r(i).subscribe(e);return o.add(n.subscribe(i)),o},t}();function F9(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length===1&&Tt(t[0])&&(t=t[0]),function(n){return n.lift(new $9(t))}}var $9=function(){function t(e){this.nextSources=e}return t.prototype.call=function(e,n){return n.subscribe(new U9(e,this.nextSources))},t}(),U9=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.destination=n,i.nextSources=r,i}return e.prototype.notifyError=function(){this.subscribeToNextSource()},e.prototype.notifyComplete=function(){this.subscribeToNextSource()},e.prototype._error=function(n){this.subscribeToNextSource(),this.unsubscribe()},e.prototype._complete=function(){this.subscribeToNextSource(),this.unsubscribe()},e.prototype.subscribeToNextSource=function(){var n=this.nextSources.shift();if(n){var r=new De(this),i=this.destination;i.add(r);var o=Le(n,r);o!==r&&i.add(o)}else this.destination.complete()},e}(Me);function z9(){return function(t){return t.lift(new B9)}}var B9=function(){function t(){}return t.prototype.call=function(e,n){return n.subscribe(new V9(e))},t}(),V9=function(t){R(e,t);function e(n){var r=t.call(this,n)||this;return r.hasPrev=!1,r}return e.prototype._next=function(n){var r;this.hasPrev?r=[this.prev,n]:this.hasPrev=!0,this.prev=n,r&&this.destination.next(r)},e}(W);function W9(t,e){return function(n){return[ri(t,e)(n),ri(cE(t,e))(n)]}}function H9(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t.length;if(n===0)throw new Error("list of properties cannot be empty.");return function(r){return gn(G9(t,n))(r)}}function G9(t,e){var n=function(r){for(var i=r,o=0;o<e;o++){var s=i!=null?i[t[o]]:void 0;if(s!==void 0)i=s;else return}return i};return n}function q9(t){return t?zi(function(){return new st},t):zi(new st)}function K9(t){return function(e){return zi(new Bx(t))(e)}}function Y9(){return function(t){return zi(new Cs)(t)}}function Q9(t,e,n,r){n&&typeof n!="function"&&(r=n);var i=typeof n=="function"?n:void 0,o=new iv(t,e,r);return function(s){return zi(function(){return o},i)(s)}}function J9(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(r){return t.length===1&&Tt(t[0])&&(t=t[0]),r.lift.call(uE.apply(void 0,[r].concat(t)))}}function X9(t){return t===void 0&&(t=-1),function(e){return t===0?Ss():t<0?e.lift(new z_(-1,e)):e.lift(new z_(t-1,e))}}var z_=function(){function t(e,n){this.count=e,this.source=n}return t.prototype.call=function(e,n){return n.subscribe(new Z9(e,this.count,this.source))},t}(),Z9=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.count=r,o.source=i,o}return e.prototype.complete=function(){if(!this.isStopped){var n=this,r=n.source,i=n.count;if(i===0)return t.prototype.complete.call(this);i>-1&&(this.count=i-1),r.subscribe(this._unsubscribeAndRecycle())}},e}(W);function e8(t){return function(e){return e.lift(new t8(t))}}var t8=function(){function t(e){this.notifier=e}return t.prototype.call=function(e,n){return n.subscribe(new n8(e,this.notifier,n))},t}(),n8=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.notifier=r,o.source=i,o.sourceIsBeingSubscribedTo=!0,o}return e.prototype.notifyNext=function(){this.sourceIsBeingSubscribedTo=!0,this.source.subscribe(this)},e.prototype.notifyComplete=function(){if(this.sourceIsBeingSubscribedTo===!1)return t.prototype.complete.call(this)},e.prototype.complete=function(){if(this.sourceIsBeingSubscribedTo=!1,!this.isStopped){if(this.retries||this.subscribeToRetries(),!this.retriesSubscription||this.retriesSubscription.closed)return t.prototype.complete.call(this);this._unsubscribeAndRecycle(),this.notifications.next(void 0)}},e.prototype._unsubscribe=function(){var n=this,r=n.notifications,i=n.retriesSubscription;r&&(r.unsubscribe(),this.notifications=void 0),i&&(i.unsubscribe(),this.retriesSubscription=void 0),this.retries=void 0},e.prototype._unsubscribeAndRecycle=function(){var n=this._unsubscribe;return this._unsubscribe=null,t.prototype._unsubscribeAndRecycle.call(this),this._unsubscribe=n,this},e.prototype.subscribeToRetries=function(){this.notifications=new st;var n;try{var r=this.notifier;n=r(this.notifications)}catch{return t.prototype.complete.call(this)}this.retries=n,this.retriesSubscription=Le(n,new De(this))},e}(Me);function r8(t){return t===void 0&&(t=-1),function(e){return e.lift(new i8(t,e))}}var i8=function(){function t(e,n){this.count=e,this.source=n}return t.prototype.call=function(e,n){return n.subscribe(new o8(e,this.count,this.source))},t}(),o8=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.count=r,o.source=i,o}return e.prototype.error=function(n){if(!this.isStopped){var r=this,i=r.source,o=r.count;if(o===0)return t.prototype.error.call(this,n);o>-1&&(this.count=o-1),i.subscribe(this._unsubscribeAndRecycle())}},e}(W);function s8(t){return function(e){return e.lift(new a8(t,e))}}var a8=function(){function t(e,n){this.notifier=e,this.source=n}return t.prototype.call=function(e,n){return n.subscribe(new l8(e,this.notifier,this.source))},t}(),l8=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.notifier=r,o.source=i,o}return e.prototype.error=function(n){if(!this.isStopped){var r=this.errors,i=this.retries,o=this.retriesSubscription;if(i)this.errors=void 0,this.retriesSubscription=void 0;else{r=new st;try{var s=this.notifier;i=s(r)}catch(a){return t.prototype.error.call(this,a)}o=Le(i,new De(this))}this._unsubscribeAndRecycle(),this.errors=r,this.retries=i,this.retriesSubscription=o,r.next(n)}},e.prototype._unsubscribe=function(){var n=this,r=n.errors,i=n.retriesSubscription;r&&(r.unsubscribe(),this.errors=void 0),i&&(i.unsubscribe(),this.retriesSubscription=void 0),this.retries=void 0},e.prototype.notifyNext=function(){var n=this._unsubscribe;this._unsubscribe=null,this._unsubscribeAndRecycle(),this._unsubscribe=n,this.source.subscribe(this)},e}(Me);function c8(t){return function(e){return e.lift(new u8(t))}}var u8=function(){function t(e){this.notifier=e}return t.prototype.call=function(e,n){var r=new d8(e),i=n.subscribe(r);return i.add(Le(this.notifier,new De(r))),i},t}(),d8=function(t){R(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.hasValue=!1,n}return e.prototype._next=function(n){this.value=n,this.hasValue=!0},e.prototype.notifyNext=function(){this.emitValue()},e.prototype.notifyComplete=function(){this.emitValue()},e.prototype.emitValue=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.value))},e}(Me);function f8(t,e){return e===void 0&&(e=kt),function(n){return n.lift(new h8(t,e))}}var h8=function(){function t(e,n){this.period=e,this.scheduler=n}return t.prototype.call=function(e,n){return n.subscribe(new p8(e,this.period,this.scheduler))},t}(),p8=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.period=r,o.scheduler=i,o.hasValue=!1,o.add(i.schedule(m8,r,{subscriber:o,period:r})),o}return e.prototype._next=function(n){this.lastValue=n,this.hasValue=!0},e.prototype.notifyNext=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))},e}(W);function m8(t){var e=t.subscriber,n=t.period;e.notifyNext(),this.schedule(t,n)}function g8(t,e){return function(n){return n.lift(new v8(t,e))}}var v8=function(){function t(e,n){this.compareTo=e,this.comparator=n}return t.prototype.call=function(e,n){return n.subscribe(new y8(e,this.compareTo,this.comparator))},t}(),y8=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.compareTo=r,o.comparator=i,o._a=[],o._b=[],o._oneComplete=!1,o.destination.add(r.subscribe(new _8(n,o))),o}return e.prototype._next=function(n){this._oneComplete&&this._b.length===0?this.emit(!1):(this._a.push(n),this.checkValues())},e.prototype._complete=function(){this._oneComplete?this.emit(this._a.length===0&&this._b.length===0):this._oneComplete=!0,this.unsubscribe()},e.prototype.checkValues=function(){for(var n=this,r=n._a,i=n._b,o=n.comparator;r.length>0&&i.length>0;){var s=r.shift(),a=i.shift(),l=!1;try{l=o?o(s,a):s===a}catch(c){this.destination.error(c)}l||this.emit(!1)}},e.prototype.emit=function(n){var r=this.destination;r.next(n),r.complete()},e.prototype.nextB=function(n){this._oneComplete&&this._a.length===0?this.emit(!1):(this._b.push(n),this.checkValues())},e.prototype.completeB=function(){this._oneComplete?this.emit(this._a.length===0&&this._b.length===0):this._oneComplete=!0},e}(W),_8=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.parent=r,i}return e.prototype._next=function(n){this.parent.nextB(n)},e.prototype._error=function(n){this.parent.error(n),this.unsubscribe()},e.prototype._complete=function(){this.parent.completeB(),this.unsubscribe()},e}(W);function w8(){return new st}function b8(){return function(t){return tv()(zi(w8)(t))}}function S8(t,e,n){var r;return t&&typeof t=="object"?r=t:r={bufferSize:t,windowTime:e,refCount:!1,scheduler:n},function(i){return i.lift(C8(r))}}function C8(t){var e=t.bufferSize,n=e===void 0?Number.POSITIVE_INFINITY:e,r=t.windowTime,i=r===void 0?Number.POSITIVE_INFINITY:r,o=t.refCount,s=t.scheduler,a,l=0,c,f=!1,u=!1;return function(p){l++;var v;!a||f?(f=!1,a=new iv(n,i,s),v=a.subscribe(this),c=p.subscribe({next:function(y){a.next(y)},error:function(y){f=!0,a.error(y)},complete:function(){u=!0,c=void 0,a.complete()}}),u&&(c=void 0)):v=a.subscribe(this),this.add(function(){l--,v.unsubscribe(),v=void 0,c&&!u&&o&&l===0&&(c.unsubscribe(),c=void 0,a=void 0)})}}function x8(t){return function(e){return e.lift(new E8(t,e))}}var E8=function(){function t(e,n){this.predicate=e,this.source=n}return t.prototype.call=function(e,n){return n.subscribe(new I8(e,this.predicate,this.source))},t}(),I8=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.predicate=r,o.source=i,o.seenValue=!1,o.index=0,o}return e.prototype.applySingleValue=function(n){this.seenValue?this.destination.error("Sequence contains more than one element"):(this.seenValue=!0,this.singleValue=n)},e.prototype._next=function(n){var r=this.index++;this.predicate?this.tryNext(n,r):this.applySingleValue(n)},e.prototype.tryNext=function(n,r){try{this.predicate(n,r,this.source)&&this.applySingleValue(n)}catch(i){this.destination.error(i)}},e.prototype._complete=function(){var n=this.destination;this.index>0?(n.next(this.seenValue?this.singleValue:void 0),n.complete()):n.error(new Rl)},e}(W);function T8(t){return function(e){return e.lift(new k8(t))}}var k8=function(){function t(e){this.total=e}return t.prototype.call=function(e,n){return n.subscribe(new R8(e,this.total))},t}(),R8=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.total=r,i.count=0,i}return e.prototype._next=function(n){++this.count>this.total&&this.destination.next(n)},e}(W);function P8(t){return function(e){return e.lift(new N8(t))}}var N8=function(){function t(e){if(this._skipCount=e,this._skipCount<0)throw new ns}return t.prototype.call=function(e,n){return this._skipCount===0?n.subscribe(new W(e)):n.subscribe(new A8(e,this._skipCount))},t}(),A8=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i._skipCount=r,i._count=0,i._ring=new Array(r),i}return e.prototype._next=function(n){var r=this._skipCount,i=this._count++;if(i<r)this._ring[i]=n;else{var o=i%r,s=this._ring,a=s[o];s[o]=n,this.destination.next(a)}},e}(W);function O8(t){return function(e){return e.lift(new j8(t))}}var j8=function(){function t(e){this.notifier=e}return t.prototype.call=function(e,n){return n.subscribe(new D8(e,this.notifier))},t}(),D8=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;i.hasValue=!1;var o=new De(i);i.add(o),i.innerSubscription=o;var s=Le(r,o);return s!==o&&(i.add(s),i.innerSubscription=s),i}return e.prototype._next=function(n){this.hasValue&&t.prototype._next.call(this,n)},e.prototype.notifyNext=function(){this.hasValue=!0,this.innerSubscription&&this.innerSubscription.unsubscribe()},e.prototype.notifyComplete=function(){},e}(Me);function M8(t){return function(e){return e.lift(new L8(t))}}var L8=function(){function t(e){this.predicate=e}return t.prototype.call=function(e,n){return n.subscribe(new F8(e,this.predicate))},t}(),F8=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.predicate=r,i.skipping=!0,i.index=0,i}return e.prototype._next=function(n){var r=this.destination;this.skipping&&this.tryCallPredicate(n),this.skipping||r.next(n)},e.prototype.tryCallPredicate=function(n){try{var r=this.predicate(n,this.index++);this.skipping=!!r}catch(i){this.destination.error(i)}},e}(W);function $8(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return Qt(n)?(t.pop(),function(r){return Za(t,r,n)}):function(r){return Za(t,r)}}var U8=function(t){R(e,t);function e(n,r,i){r===void 0&&(r=0),i===void 0&&(i=Ac);var o=t.call(this)||this;return o.source=n,o.delayTime=r,o.scheduler=i,(!rs(r)||r<0)&&(o.delayTime=0),(!i||typeof i.schedule!="function")&&(o.scheduler=Ac),o}return e.create=function(n,r,i){return r===void 0&&(r=0),i===void 0&&(i=Ac),new e(n,r,i)},e.dispatch=function(n){var r=n.source,i=n.subscriber;return this.add(r.subscribe(i))},e.prototype._subscribe=function(n){var r=this.delayTime,i=this.source,o=this.scheduler;return o.schedule(e.dispatch,r,{source:i,subscriber:n})},e}(Z);function z8(t,e){return e===void 0&&(e=0),function(r){return r.lift(new B8(t,e))}}var B8=function(){function t(e,n){this.scheduler=e,this.delay=n}return t.prototype.call=function(e,n){return new U8(n,this.delay,this.scheduler).subscribe(e)},t}();function el(t,e){return typeof e=="function"?function(n){return n.pipe(el(function(r,i){return mr(t(r,i)).pipe(gn(function(o,s){return e(r,o,i,s)}))}))}:function(n){return n.lift(new V8(t))}}var V8=function(){function t(e){this.project=e}return t.prototype.call=function(e,n){return n.subscribe(new W8(e,this.project))},t}(),W8=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.project=r,i.index=0,i}return e.prototype._next=function(n){var r,i=this.index++;try{r=this.project(n,i)}catch(o){this.destination.error(o);return}this._innerSub(r)},e.prototype._innerSub=function(n){var r=this.innerSubscription;r&&r.unsubscribe();var i=new De(this),o=this.destination;o.add(i),this.innerSubscription=Le(n,i),this.innerSubscription!==i&&o.add(this.innerSubscription)},e.prototype._complete=function(){var n=this.innerSubscription;(!n||n.closed)&&t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=void 0},e.prototype.notifyComplete=function(){this.innerSubscription=void 0,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(n){this.destination.next(n)},e}(Me);function H8(){return el(ti)}function G8(t,e){return e?el(function(){return t},e):el(function(){return t})}function q8(t){return function(e){return e.lift(new K8(t))}}var K8=function(){function t(e){this.notifier=e}return t.prototype.call=function(e,n){var r=new Y8(e),i=Le(this.notifier,new De(r));return i&&!r.seenValue?(r.add(i),n.subscribe(r)):r},t}(),Y8=function(t){R(e,t);function e(n){var r=t.call(this,n)||this;return r.seenValue=!1,r}return e.prototype.notifyNext=function(){this.seenValue=!0,this.complete()},e.prototype.notifyComplete=function(){},e}(Me);function Q8(t,e){return e===void 0&&(e=!1),function(n){return n.lift(new J8(t,e))}}var J8=function(){function t(e,n){this.predicate=e,this.inclusive=n}return t.prototype.call=function(e,n){return n.subscribe(new X8(e,this.predicate,this.inclusive))},t}(),X8=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.predicate=r,o.inclusive=i,o.index=0,o}return e.prototype._next=function(n){var r=this.destination,i;try{i=this.predicate(n,this.index++)}catch(o){r.error(o);return}this.nextOrComplete(n,i)},e.prototype.nextOrComplete=function(n,r){var i=this.destination;r?i.next(n):(this.inclusive&&i.next(n),i.complete())},e}(W);function Z8(t,e,n){return function(i){return i.lift(new eF(t,e,n))}}var eF=function(){function t(e,n,r){this.nextOrObserver=e,this.error=n,this.complete=r}return t.prototype.call=function(e,n){return n.subscribe(new tF(e,this.nextOrObserver,this.error,this.complete))},t}(),tF=function(t){R(e,t);function e(n,r,i,o){var s=t.call(this,n)||this;return s._tapNext=jn,s._tapError=jn,s._tapComplete=jn,s._tapError=i||jn,s._tapComplete=o||jn,es(r)?(s._context=s,s._tapNext=r):r&&(s._context=r,s._tapNext=r.next||jn,s._tapError=r.error||jn,s._tapComplete=r.complete||jn),s}return e.prototype._next=function(n){try{this._tapNext.call(this._context,n)}catch(r){this.destination.error(r);return}this.destination.next(n)},e.prototype._error=function(n){try{this._tapError.call(this._context,n)}catch(r){this.destination.error(r);return}this.destination.error(n)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(n){this.destination.error(n);return}return this.destination.complete()},e}(W),bE={leading:!0,trailing:!1};function nF(t,e){return e===void 0&&(e=bE),function(n){return n.lift(new rF(t,!!e.leading,!!e.trailing))}}var rF=function(){function t(e,n,r){this.durationSelector=e,this.leading=n,this.trailing=r}return t.prototype.call=function(e,n){return n.subscribe(new iF(e,this.durationSelector,this.leading,this.trailing))},t}(),iF=function(t){R(e,t);function e(n,r,i,o){var s=t.call(this,n)||this;return s.destination=n,s.durationSelector=r,s._leading=i,s._trailing=o,s._hasValue=!1,s}return e.prototype._next=function(n){this._hasValue=!0,this._sendValue=n,this._throttled||(this._leading?this.send():this.throttle(n))},e.prototype.send=function(){var n=this,r=n._hasValue,i=n._sendValue;r&&(this.destination.next(i),this.throttle(i)),this._hasValue=!1,this._sendValue=void 0},e.prototype.throttle=function(n){var r=this.tryDurationSelector(n);r&&this.add(this._throttled=Le(r,new De(this)))},e.prototype.tryDurationSelector=function(n){try{return this.durationSelector(n)}catch(r){return this.destination.error(r),null}},e.prototype.throttlingDone=function(){var n=this,r=n._throttled,i=n._trailing;r&&r.unsubscribe(),this._throttled=void 0,i&&this.send()},e.prototype.notifyNext=function(){this.throttlingDone()},e.prototype.notifyComplete=function(){this.throttlingDone()},e}(Me);function oF(t,e,n){return e===void 0&&(e=kt),n===void 0&&(n=bE),function(r){return r.lift(new sF(t,e,n.leading,n.trailing))}}var sF=function(){function t(e,n,r,i){this.duration=e,this.scheduler=n,this.leading=r,this.trailing=i}return t.prototype.call=function(e,n){return n.subscribe(new aF(e,this.duration,this.scheduler,this.leading,this.trailing))},t}(),aF=function(t){R(e,t);function e(n,r,i,o,s){var a=t.call(this,n)||this;return a.duration=r,a.scheduler=i,a.leading=o,a.trailing=s,a._hasTrailingValue=!1,a._trailingValue=null,a}return e.prototype._next=function(n){this.throttled?this.trailing&&(this._trailingValue=n,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(lF,this.duration,{subscriber:this})),this.leading?this.destination.next(n):this.trailing&&(this._trailingValue=n,this._hasTrailingValue=!0))},e.prototype._complete=function(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()},e.prototype.clearThrottle=function(){var n=this.throttled;n&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),n.unsubscribe(),this.remove(n),this.throttled=null)},e}(W);function lF(t){var e=t.subscriber;e.clearThrottle()}function cF(t){return t===void 0&&(t=kt),function(e){return av(function(){return e.pipe(Lu(function(n,r){var i=n.current;return{value:r,current:t.now(),last:i}},{current:t.now(),value:void 0,last:void 0}),gn(function(n){var r=n.current,i=n.last,o=n.value;return new uF(o,r-i)}))})}}var uF=function(){function t(e,n){this.value=e,this.interval=n}return t}();function SE(t,e,n){return n===void 0&&(n=kt),function(r){var i=vE(t),o=i?+t-n.now():Math.abs(t);return r.lift(new dF(o,i,e,n))}}var dF=function(){function t(e,n,r,i){this.waitFor=e,this.absoluteTimeout=n,this.withObservable=r,this.scheduler=i}return t.prototype.call=function(e,n){return n.subscribe(new fF(e,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))},t}(),fF=function(t){R(e,t);function e(n,r,i,o,s){var a=t.call(this,n)||this;return a.absoluteTimeout=r,a.waitFor=i,a.withObservable=o,a.scheduler=s,a.scheduleTimeout(),a}return e.dispatchTimeout=function(n){var r=n.withObservable;n._unsubscribeAndRecycle(),n.add(Le(r,new De(n)))},e.prototype.scheduleTimeout=function(){var n=this.action;n?this.action=n.schedule(this,this.waitFor):this.add(this.action=this.scheduler.schedule(e.dispatchTimeout,this.waitFor,this))},e.prototype._next=function(n){this.absoluteTimeout||this.scheduleTimeout(),t.prototype._next.call(this,n)},e.prototype._unsubscribe=function(){this.action=void 0,this.scheduler=null,this.withObservable=null},e}(Me);function hF(t,e){return e===void 0&&(e=kt),SE(t,rv(new Jx),e)}function pF(t){return t===void 0&&(t=kt),gn(function(e){return new mF(e,t.now())})}var mF=function(){function t(e,n){this.value=e,this.timestamp=n}return t}();function gF(t,e,n){return n===0?[e]:(t.push(e),t)}function vF(){return $d(gF,[])}function yF(t){return function(n){return n.lift(new _F(t))}}var _F=function(){function t(e){this.windowBoundaries=e}return t.prototype.call=function(e,n){var r=new wF(e),i=n.subscribe(r);return i.closed||r.add(Le(this.windowBoundaries,new De(r))),i},t}(),wF=function(t){R(e,t);function e(n){var r=t.call(this,n)||this;return r.window=new st,n.next(r.window),r}return e.prototype.notifyNext=function(){this.openWindow()},e.prototype.notifyError=function(n){this._error(n)},e.prototype.notifyComplete=function(){this._complete()},e.prototype._next=function(n){this.window.next(n)},e.prototype._error=function(n){this.window.error(n),this.destination.error(n)},e.prototype._complete=function(){this.window.complete(),this.destination.complete()},e.prototype._unsubscribe=function(){this.window=null},e.prototype.openWindow=function(){var n=this.window;n&&n.complete();var r=this.destination,i=this.window=new st;r.next(i)},e}(Me);function bF(t,e){return e===void 0&&(e=0),function(r){return r.lift(new SF(t,e))}}var SF=function(){function t(e,n){this.windowSize=e,this.startWindowEvery=n}return t.prototype.call=function(e,n){return n.subscribe(new CF(e,this.windowSize,this.startWindowEvery))},t}(),CF=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.destination=n,o.windowSize=r,o.startWindowEvery=i,o.windows=[new st],o.count=0,n.next(o.windows[0]),o}return e.prototype._next=function(n){for(var r=this.startWindowEvery>0?this.startWindowEvery:this.windowSize,i=this.destination,o=this.windowSize,s=this.windows,a=s.length,l=0;l<a&&!this.closed;l++)s[l].next(n);var c=this.count-o+1;if(c>=0&&c%r===0&&!this.closed&&s.shift().complete(),++this.count%r===0&&!this.closed){var f=new st;s.push(f),i.next(f)}},e.prototype._error=function(n){var r=this.windows;if(r)for(;r.length>0&&!this.closed;)r.shift().error(n);this.destination.error(n)},e.prototype._complete=function(){var n=this.windows;if(n)for(;n.length>0&&!this.closed;)n.shift().complete();this.destination.complete()},e.prototype._unsubscribe=function(){this.count=0,this.windows=null},e}(W);function xF(t){var e=kt,n=null,r=Number.POSITIVE_INFINITY;return Qt(arguments[3])&&(e=arguments[3]),Qt(arguments[2])?e=arguments[2]:rs(arguments[2])&&(r=Number(arguments[2])),Qt(arguments[1])?e=arguments[1]:rs(arguments[1])&&(n=Number(arguments[1])),function(o){return o.lift(new EF(t,n,r,e))}}var EF=function(){function t(e,n,r,i){this.windowTimeSpan=e,this.windowCreationInterval=n,this.maxWindowSize=r,this.scheduler=i}return t.prototype.call=function(e,n){return n.subscribe(new TF(e,this.windowTimeSpan,this.windowCreationInterval,this.maxWindowSize,this.scheduler))},t}(),IF=function(t){R(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._numberOfNextedValues=0,n}return e.prototype.next=function(n){this._numberOfNextedValues++,t.prototype.next.call(this,n)},Object.defineProperty(e.prototype,"numberOfNextedValues",{get:function(){return this._numberOfNextedValues},enumerable:!0,configurable:!0}),e}(st),TF=function(t){R(e,t);function e(n,r,i,o,s){var a=t.call(this,n)||this;a.destination=n,a.windowTimeSpan=r,a.windowCreationInterval=i,a.maxWindowSize=o,a.scheduler=s,a.windows=[];var l=a.openWindow();if(i!==null&&i>=0){var c={subscriber:a,window:l,context:null},f={windowTimeSpan:r,windowCreationInterval:i,subscriber:a,scheduler:s};a.add(s.schedule(CE,r,c)),a.add(s.schedule(RF,i,f))}else{var u={subscriber:a,window:l,windowTimeSpan:r};a.add(s.schedule(kF,r,u))}return a}return e.prototype._next=function(n){for(var r=this.windows,i=r.length,o=0;o<i;o++){var s=r[o];s.closed||(s.next(n),s.numberOfNextedValues>=this.maxWindowSize&&this.closeWindow(s))}},e.prototype._error=function(n){for(var r=this.windows;r.length>0;)r.shift().error(n);this.destination.error(n)},e.prototype._complete=function(){for(var n=this.windows;n.length>0;){var r=n.shift();r.closed||r.complete()}this.destination.complete()},e.prototype.openWindow=function(){var n=new IF;this.windows.push(n);var r=this.destination;return r.next(n),n},e.prototype.closeWindow=function(n){n.complete();var r=this.windows;r.splice(r.indexOf(n),1)},e}(W);function kF(t){var e=t.subscriber,n=t.windowTimeSpan,r=t.window;r&&e.closeWindow(r),t.window=e.openWindow(),this.schedule(t,n)}function RF(t){var e=t.windowTimeSpan,n=t.subscriber,r=t.scheduler,i=t.windowCreationInterval,o=n.openWindow(),s=this,a={action:s,subscription:null},l={subscriber:n,window:o,context:a};a.subscription=r.schedule(CE,e,l),s.add(a.subscription),s.schedule(t,i)}function CE(t){var e=t.subscriber,n=t.window,r=t.context;r&&r.action&&r.subscription&&r.action.remove(r.subscription),e.closeWindow(n)}function PF(t,e){return function(n){return n.lift(new NF(t,e))}}var NF=function(){function t(e,n){this.openings=e,this.closingSelector=n}return t.prototype.call=function(e,n){return n.subscribe(new AF(e,this.openings,this.closingSelector))},t}(),AF=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;return o.openings=r,o.closingSelector=i,o.contexts=[],o.add(o.openSubscription=fr(o,r,r)),o}return e.prototype._next=function(n){var r=this.contexts;if(r)for(var i=r.length,o=0;o<i;o++)r[o].window.next(n)},e.prototype._error=function(n){var r=this.contexts;if(this.contexts=null,r)for(var i=r.length,o=-1;++o<i;){var s=r[o];s.window.error(n),s.subscription.unsubscribe()}t.prototype._error.call(this,n)},e.prototype._complete=function(){var n=this.contexts;if(this.contexts=null,n)for(var r=n.length,i=-1;++i<r;){var o=n[i];o.window.complete(),o.subscription.unsubscribe()}t.prototype._complete.call(this)},e.prototype._unsubscribe=function(){var n=this.contexts;if(this.contexts=null,n)for(var r=n.length,i=-1;++i<r;){var o=n[i];o.window.unsubscribe(),o.subscription.unsubscribe()}},e.prototype.notifyNext=function(n,r,i,o,s){if(n===this.openings){var a=void 0;try{var l=this.closingSelector;a=l(r)}catch(p){return this.error(p)}var c=new st,f=new Ae,u={window:c,subscription:f};this.contexts.push(u);var h=fr(this,a,u);h.closed?this.closeWindow(this.contexts.length-1):(h.context=u,f.add(h)),this.destination.next(c)}else this.closeWindow(this.contexts.indexOf(n))},e.prototype.notifyError=function(n){this.error(n)},e.prototype.notifyComplete=function(n){n!==this.openSubscription&&this.closeWindow(this.contexts.indexOf(n.context))},e.prototype.closeWindow=function(n){if(n!==-1){var r=this.contexts,i=r[n],o=i.window,s=i.subscription;r.splice(n,1),o.complete(),s.unsubscribe()}},e}(Yi);function OF(t){return function(n){return n.lift(new jF(t))}}var jF=function(){function t(e){this.closingSelector=e}return t.prototype.call=function(e,n){return n.subscribe(new DF(e,this.closingSelector))},t}(),DF=function(t){R(e,t);function e(n,r){var i=t.call(this,n)||this;return i.destination=n,i.closingSelector=r,i.openWindow(),i}return e.prototype.notifyNext=function(n,r,i,o,s){this.openWindow(s)},e.prototype.notifyError=function(n){this._error(n)},e.prototype.notifyComplete=function(n){this.openWindow(n)},e.prototype._next=function(n){this.window.next(n)},e.prototype._error=function(n){this.window.error(n),this.destination.error(n),this.unsubscribeClosingNotification()},e.prototype._complete=function(){this.window.complete(),this.destination.complete(),this.unsubscribeClosingNotification()},e.prototype.unsubscribeClosingNotification=function(){this.closingNotification&&this.closingNotification.unsubscribe()},e.prototype.openWindow=function(n){n===void 0&&(n=null),n&&(this.remove(n),n.unsubscribe());var r=this.window;r&&r.complete();var i=this.window=new st;this.destination.next(i);var o;try{var s=this.closingSelector;o=s()}catch(a){this.destination.error(a),this.window.error(a);return}this.add(this.closingNotification=fr(this,o))},e}(Yi);function MF(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(n){var r;typeof t[t.length-1]=="function"&&(r=t.pop());var i=t;return n.lift(new LF(i,r))}}var LF=function(){function t(e,n){this.observables=e,this.project=n}return t.prototype.call=function(e,n){return n.subscribe(new FF(e,this.observables,this.project))},t}(),FF=function(t){R(e,t);function e(n,r,i){var o=t.call(this,n)||this;o.observables=r,o.project=i,o.toRespond=[];var s=r.length;o.values=new Array(s);for(var a=0;a<s;a++)o.toRespond.push(a);for(var a=0;a<s;a++){var l=r[a];o.add(fr(o,l,void 0,a))}return o}return e.prototype.notifyNext=function(n,r,i){this.values[i]=r;var o=this.toRespond;if(o.length>0){var s=o.indexOf(i);s!==-1&&o.splice(s,1)}},e.prototype.notifyComplete=function(){},e.prototype._next=function(n){if(this.toRespond.length===0){var r=[n].concat(this.values);this.project?this._tryProject(r):this.destination.next(r)}},e.prototype._tryProject=function(n){var r;try{r=this.project.apply(this,n)}catch(i){this.destination.error(i);return}this.destination.next(r)},e}(Yi);function $F(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(r){return r.lift.call(fE.apply(void 0,[r].concat(t)))}}function UF(t){return function(e){return e.lift(new hE(t))}}const zF=Object.freeze(Object.defineProperty({__proto__:null,audit:pE,auditTime:zL,buffer:BL,bufferCount:HL,bufferTime:YL,bufferToggle:e6,bufferWhen:r6,catchError:s6,combineAll:c6,combineLatest:u6,concat:d6,concatAll:rE,concatMap:gE,concatMapTo:f6,count:h6,debounce:g6,debounceTime:_6,defaultIfEmpty:Pl,delay:E6,delayWhen:R6,dematerialize:O6,distinct:M6,distinctUntilChanged:yE,distinctUntilKeyChanged:z6,elementAt:q6,endWith:K6,every:Y6,exhaust:X6,exhaustMap:_E,expand:r9,filter:ri,finalize:s9,find:c9,findIndex:d9,first:f9,flatMap:fL,groupBy:wM,ignoreElements:h9,isEmpty:g9,last:b9,map:gn,mapTo:S9,materialize:E9,max:P9,merge:N9,mergeAll:sv,mergeMap:Ui,mergeMapTo:A9,mergeScan:O9,min:M9,multicast:zi,observeOn:PM,onErrorResumeNext:F9,pairwise:z9,partition:W9,pluck:H9,publish:q9,publishBehavior:K9,publishLast:Y9,publishReplay:Q9,race:J9,reduce:$d,refCount:tv,repeat:X9,repeatWhen:e8,retry:r8,retryWhen:s8,sample:c8,sampleTime:f8,scan:Lu,sequenceEqual:g8,share:b8,shareReplay:S8,single:x8,skip:T8,skipLast:P8,skipUntil:O8,skipWhile:M8,startWith:$8,subscribeOn:z8,switchAll:H8,switchMap:el,switchMapTo:G8,take:cv,takeLast:Mu,takeUntil:q8,takeWhile:Q8,tap:Z8,throttle:nF,throttleTime:oF,throwIfEmpty:Fd,timeInterval:cF,timeout:hF,timeoutWith:SE,timestamp:pF,toArray:vF,window:yF,windowCount:bF,windowTime:xF,windowToggle:PF,windowWhen:OF,withLatestFrom:MF,zip:$F,zipAll:UF},Symbol.toStringTag,{value:"Module"})),uv=Z_(zF);var Nl={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.ACTIVATE="activate",e.MOVE="move",e.DEACTIVATE="deactivate"}(t.BarActionType||(t.BarActionType={}))})(Nl);var gr={};Object.defineProperty(gr,"__esModule",{value:!0});function BF(t){return typeof t=="number"&&t===t}gr.isValidNumber=BF;function VF(){}gr.noop=VF;function WF(t,e){var n=e.reduce(function(r,i){return r[i]=!0,r},{});return Object.keys(t).reduce(function(r,i){return n[i]||(r[i]=t[i]),r},{})}gr.omit=WF;var Ud={};(function(t){var e=ce&&ce.__assign||function(){return e=Object.assign||function(a){for(var l,c=1,f=arguments.length;c<f;c++){l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(a[u]=l[u])}return a},e.apply(this,arguments)},n;Object.defineProperty(t,"__esModule",{value:!0});var r=b,i=lv,o=gr;t.ResizerProvider=(n=r.createContext({createID:function(){return-1},populateInstance:o.noop,triggerBarAction:o.noop,vertical:!1,sizeRelatedInfo$:i.EMPTY}),n.Provider),t.ResizerConsumer=n.Consumer;function s(a){return function(l){return r.createElement(t.ResizerConsumer,null,function(c){var f=e(e({},l),{context:c});return r.createElement(a,e({},f))})}}t.withResizerContext=s})(Ud);var dv={},zd={};(function(t){var e=ce&&ce.__assign||function(){return e=Object.assign||function(u){for(var h,p=1,v=arguments.length;p<v;p++){h=arguments[p];for(var y in h)Object.prototype.hasOwnProperty.call(h,y)&&(u[y]=h[y])}return u},e.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n=gr;t.DEFAULT_COORDINATE_OFFSET={x:0,y:0};function r(u,h){var p=h.maxSize,v=h.minSize,y=v===void 0?0:v;return u<y?{nextSize:y,remainingOffset:u-y}:n.isValidNumber(p)&&u>p?{nextSize:p,remainingOffset:u-p}:{nextSize:u,remainingOffset:0}}function i(u){var h=u.size;return n.isValidNumber(h)}t.isSolid=i;function o(u){var h=u.disableResponsive;return i(u)&&h===void 0?!0:!!h}t.isDisabledResponsive=o;function s(u,h){return h?{x:u.x-h.x,y:u.y-h.y}:t.DEFAULT_COORDINATE_OFFSET}t.calculateCoordinateOffset=s;function a(){var u=[],h=0,p=0;return{collect:function(v){u.push(v),v.disableResponsive||(h+=1,p+=v.currentSize)},getResult:function(){return{sizeInfoArray:u,flexGrowRatio:h/p}}}}t.collectSizeRelatedInfo=a;function l(u,h){if(h.isSolid)return{remainingOffset:u,sizeInfo:h};var p=r(h.currentSize+u,h),v=p.nextSize,y=p.remainingOffset;return{sizeInfo:e(e({},h),{currentSize:v}),remainingOffset:y}}function c(u,h,p,v){for(var y=[],x=h,g=u+p;k(g);g+=p)if(x){var m=l(x,v[g]),w=m.sizeInfo,_=m.remainingOffset;x=_,E(w)}else E(v[g]);function E(T){p===-1?y.unshift(T):y.push(T)}function k(T){return p===-1?T>=0:T<=v.length-1}return{sizeInfoArray:y,remainingOffset:x}}function f(u,h,p){var v=a(),y=v.collect,x=v.getResult,g=c(u,h,-1,p),m=c(u,-h,1,p),w=h-g.remainingOffset,_=-h-m.remainingOffset;function E(j,M){j.forEach(y),y(p[u]),M.forEach(y)}if(w===-_)E(g.sizeInfoArray,m.sizeInfoArray);else if(Math.abs(w)<Math.abs(_)){var k=c(u,-w,1,p);E(g.sizeInfoArray,k.sizeInfoArray)}else{var T=c(u,-_,-1,p);E(T.sizeInfoArray,m.sizeInfoArray)}return x()}t.getNextSizeRelatedInfo=f})(zd);var Fu=ce&&ce.__assign||function(){return Fu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Fu.apply(this,arguments)};Object.defineProperty(dv,"__esModule",{value:!0});var HF=zd;function B_(t){return t*2+1}function th(t){return t*2}var GF=function(){function t(e){this.resizeResult=e,this.isDiscarded=!1}return t.prototype.resizeSection=function(e,n){if(!this.isDiscarded){var r=th(e),i=this.getSize(r);if(i>=0&&n.toSize>=0){var o=n.toSize-i;r===this.resizeResult.sizeInfoArray.length-1||n.preferMoveLeftBar?this.moveBar(e-1,{withOffset:-o}):this.moveBar(e,{withOffset:o})}}},t.prototype.moveBar=function(e,n){this.isDiscarded||(this.resizeResult=HF.getNextSizeRelatedInfo(B_(e),n.withOffset,this.resizeResult.sizeInfoArray))},t.prototype.discard=function(){this.isDiscarded=!0},t.prototype.isSectionResized=function(e){var n=th(e);return"defaultSizeInfoArray"in this.resizeResult?this.getSize(n)!==this.resizeResult.defaultSizeInfoArray[n].currentSize:!1},t.prototype.isBarActivated=function(e){return"barID"in this.resizeResult?this.resizeResult.barID===B_(e):!1},t.prototype.getSectionSize=function(e){return this.getSize(th(e))},t.prototype.getResult=function(){return Fu(Fu({},this.resizeResult),{discard:this.isDiscarded})},t.prototype.getTotalSize=function(){return this.resizeResult.sizeInfoArray.filter(function(e,n){return e&&n%2===0}).reduce(function(e,n){var r=n.currentSize;return e+r},0)},t.prototype.getSize=function(e){var n=this.resizeResult.sizeInfoArray[e];return n?n.currentSize:-1},t}();dv.Resizer=GF;var fv={},Cr=ce&&ce.__assign||function(){return Cr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Cr.apply(this,arguments)};Object.defineProperty(fv,"__esModule",{value:!0});var qF=uv,Oc=Nl,xE=zd,nh={barID:-1,offset:0,type:Oc.BarActionType.DEACTIVATE,originalCoordinate:xE.DEFAULT_COORDINATE_OFFSET,defaultSizeInfoArray:[],sizeInfoArray:[],discard:!0,flexGrowRatio:0};function KF(t){return qF.scan(function(e,n){var r={barID:n.barID,type:n.type};switch(n.type){case Oc.BarActionType.ACTIVATE:var i=t.getSizeRelatedInfo(),o=i.sizeInfoArray,s=i.flexGrowRatio;return Cr(Cr(Cr({},nh),r),{originalCoordinate:n.coordinate,defaultSizeInfoArray:o,sizeInfoArray:o,flexGrowRatio:s});case Oc.BarActionType.MOVE:var a=t.calculateOffset(n.coordinate,e.originalCoordinate);return Cr(Cr(Cr({},r),xE.getNextSizeRelatedInfo(n.barID,a,e.defaultSizeInfoArray)),{offset:a,originalCoordinate:e.originalCoordinate,defaultSizeInfoArray:e.defaultSizeInfoArray,discard:!1});case Oc.BarActionType.DEACTIVATE:return nh}},nh)}fv.scanBarAction=KF;var hv={},$u=ce&&ce.__assign||function(){return $u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},$u.apply(this,arguments)},YF=ce&&ce.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty(hv,"__esModule",{value:!0});var V_=b;hv.StyledContainer=V_.forwardRef(function(t,e){var n=t.vertical,r=t.style,i=YF(t,["vertical","style"]);return V_.createElement("div",$u({},i,{ref:e,style:$u({display:"flex",flexDirection:n?"column":"row"},r)}))});var QF=ce&&ce.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),qp=ce&&ce.__assign||function(){return qp=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},qp.apply(this,arguments)};Object.defineProperty(Md,"__esModule",{value:!0});var rh=b,lc=lv,to=uv,W_=Nl,JF=gr,XF=Ud,Kp=dv;Md.Resizer=Kp.Resizer;var ZF=fv,cc=zd,e7=hv,t7=function(t){QF(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.childrenProps=[],n.childrenInstance=[],n.barActions$=new lc.Subject,n.sizeRelatedInfoAction$=new lc.Subject,n.sizeRelatedInfo$=lc.merge(n.sizeRelatedInfoAction$,n.barActions$.pipe(ZF.scanBarAction({calculateOffset:function(r,i){return cc.calculateCoordinateOffset(r,i)[n.axis]},getSizeRelatedInfo:function(){return n.makeSizeInfos()}}),to.tap(function(r){return n.monitorBarStatusChanges(r)}))).pipe(to.filter(function(r){var i=r.discard;return!i}),to.map(function(r){if(typeof n.props.beforeApplyResizer=="function"){var i=new Kp.Resizer(r);return n.props.beforeApplyResizer(i),i.getResult()}else return r}),to.filter(function(r){var i=r.discard;return!i}),to.observeOn(lc.animationFrameScheduler),to.share()),n.triggerBarAction=function(r){n.barActions$.next(r)},n.createID=function(r){return n.childrenProps.push(r),n.childrenProps.length-1},n.populateChildInstance=function(r,i){i.current&&(n.childrenInstance[r]=i.current)},n}return Object.defineProperty(e.prototype,"axis",{get:function(){return this.props.vertical?"y":"x"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dimension",{get:function(){return this.props.vertical?"height":"width"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contextValue",{get:function(){return{vertical:!!this.props.vertical,sizeRelatedInfo$:this.sizeRelatedInfo$,createID:this.createID,populateInstance:this.populateChildInstance,triggerBarAction:this.triggerBarAction}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"containerProps",{get:function(){return JF.omit(this.props,["onActivate","beforeApplyResizer","afterResizing"])},enumerable:!0,configurable:!0}),e.prototype.componentDidMount=function(){this.refreshSizeInfos()},e.prototype.render=function(){return rh.createElement(XF.ResizerProvider,{value:this.contextValue},rh.createElement(e7.StyledContainer,qp({},this.containerProps),this.props.children))},e.prototype.getResizer=function(){return new Kp.Resizer(this.makeSizeInfos())},e.prototype.applyResizer=function(n){this.sizeRelatedInfoAction$.next(n.getResult())},e.prototype.monitorBarStatusChanges=function(n){var r=n.type;switch(r){case W_.BarActionType.ACTIVATE:typeof this.props.onActivate=="function"&&this.props.onActivate();return;case W_.BarActionType.DEACTIVATE:typeof this.props.afterResizing=="function"&&this.props.afterResizing();return;default:return}},e.prototype.refreshSizeInfos=function(){this.sizeRelatedInfoAction$.next(this.makeSizeInfos())},e.prototype.makeSizeInfos=function(){var n=this,r=cc.collectSizeRelatedInfo(),i=r.collect,o=r.getResult;return this.childrenProps.forEach(function(s,a){var l=n.childrenInstance[a];i({maxSize:s.maxSize,minSize:s.minSize,disableResponsive:cc.isDisabledResponsive(s),isSolid:cc.isSolid(s),currentSize:l.getBoundingClientRect()[n.dimension]})}),o()},e}(rh.PureComponent);Md.Container=t7;var pv={},mv={},Uu=ce&&ce.__assign||function(){return Uu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Uu.apply(this,arguments)},n7=ce&&ce.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty(mv,"__esModule",{value:!0});var H_=b;mv.StyledSection=H_.forwardRef(function(t,e){var n,r=t.context,i=t.maxSize,o=t.minSize,s=t.flexGrow,a=t.flexShrink,l=t.flexBasis,c=t.style,f=n7(t,["context","maxSize","minSize","flexGrow","flexShrink","flexBasis","style"]);return H_.createElement("div",Uu({},f,{ref:e,style:Uu((n={overflow:"hidden"},n[r.vertical?"maxHeight":"maxWidth"]=i,n[r.vertical?"minHeight":"minWidth"]=o,n.flexGrow=s,n.flexShrink=a,n.flexBasis=l,n),c)}))});var r7=ce&&ce.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),ma=ce&&ce.__assign||function(){return ma=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ma.apply(this,arguments)};Object.defineProperty(pv,"__esModule",{value:!0});var ih=b,i7=lv,oh=uv,o7=Ud,sh=gr,s7=mv,a7=function(t){r7(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.defaultInnerRef=ih.createRef(),n.id=n.props.context.createID(n.props),n.subscription=new i7.Subscription,n.flexGrowRatio=0,n.resize$=n.props.context.sizeRelatedInfo$.pipe(oh.map(function(r){var i=r.sizeInfoArray,o=r.flexGrowRatio;return{sizeInfo:i[n.id],flexGrowRatio:o}}),oh.filter(function(r){var i=r.sizeInfo;return!!i}),oh.tap(function(r){var i=r.sizeInfo,o=r.flexGrowRatio;if(n.sizeInfo=i,n.flexGrowRatio=o,n.ref.current){var s=n.getStyle(i,o),a=s.flexGrow,l=s.flexShrink,c=s.flexBasis;n.ref.current.style.flexGrow=""+a,n.ref.current.style.flexShrink=""+l,n.ref.current.style.flexBasis=c+"px",n.onSizeChanged(i.currentSize)}})),n}return Object.defineProperty(e.prototype,"ref",{get:function(){return this.props.innerRef||this.defaultInnerRef},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"childProps",{get:function(){return ma(ma({},sh.omit(this.props,["defaultSize","size","disableResponsive","innerRef","onSizeChanged"])),this.getStyle())},enumerable:!0,configurable:!0}),e.prototype.componentDidMount=function(){this.subscription.add(this.resize$.subscribe()),this.props.context.populateInstance(this.id,this.ref)},e.prototype.componentWillUnmount=function(){this.subscription.unsubscribe()},e.prototype.render=function(){return ih.createElement(s7.StyledSection,ma({},this.childProps,{ref:this.ref}))},e.prototype.onSizeChanged=function(n){typeof this.props.onSizeChanged=="function"&&this.props.onSizeChanged(n)},e.prototype.getFlexShrink=function(){return sh.isValidNumber(this.props.size)?0:this.props.disableResponsive?1:0},e.prototype.getStyle=function(n,r){n===void 0&&(n=this.sizeInfo),r===void 0&&(r=this.flexGrowRatio);var i=this.getFlexShrink();if(n){var o=n.disableResponsive,s=n.currentSize;return{flexShrink:i,flexGrow:o?0:r*s,flexBasis:o?s:0}}else{var a=this.props.size||this.props.defaultSize;return sh.isValidNumber(a)?{flexShrink:i,flexGrow:0,flexBasis:a}:{flexShrink:i,flexGrow:1,flexBasis:0}}},e}(ih.PureComponent);pv.Section=o7.withResizerContext(a7);var gv={},Bd={},is=ce&&ce.__assign||function(){return is=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},is.apply(this,arguments)},EE=ce&&ce.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty(Bd,"__esModule",{value:!0});var zu=b;Bd.StyledBar=zu.forwardRef(function(t,e){var n=t.size,r=t.style,i=EE(t,["size","style"]);return zu.createElement("div",is({},i,{ref:e,style:is({position:"relative",flex:"0 0 "+n+"px"},r)}))});Bd.StyledInteractiveArea=zu.forwardRef(function(t,e){var n=t.top,r=n===void 0?0:n,i=t.right,o=i===void 0?0:i,s=t.bottom,a=s===void 0?0:s,l=t.left,c=l===void 0?0:l,f=t.vertical,u=t.style,h=EE(t,["top","right","bottom","left","vertical","style"]);return zu.createElement("div",is({},h,{style:is({position:"absolute",top:-r,left:-c,right:-o,bottom:-a,cursor:f?"row-resize":"col-resize",WebkitTapHighlightColor:"transparent",userSelect:"none"},u),ref:e}))});var Vd={};Object.defineProperty(Vd,"__esModule",{value:!0});var l7=Vd.disablePassive=!0;try{window.addEventListener("test",null,{get passive(){return l7=Vd.disablePassive={passive:!1},!0}})}catch{}var c7=ce&&ce.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Bu=ce&&ce.__assign||function(){return Bu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Bu.apply(this,arguments)};Object.defineProperty(gv,"__esModule",{value:!0});var Ws=b,Mt=Nl,u7=gr,d7=Ud,G_=Bd,q_=Vd,f7=function(t){c7(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.defaultInnerRef=Ws.createRef(),n.interactiveAreaRef=Ws.createRef(),n.id=n.props.context.createID(n.props),n.isValidClick=!0,n.isActivated=!1,n.onMouseDown=n.triggerMouseAction(Mt.BarActionType.ACTIVATE),n.onMouseMove=n.triggerMouseAction(Mt.BarActionType.MOVE),n.onMouseUp=n.triggerMouseAction(Mt.BarActionType.DEACTIVATE),n.onTouchStart=n.triggerTouchAction(Mt.BarActionType.ACTIVATE),n.onTouchMove=n.triggerTouchAction(Mt.BarActionType.MOVE),n.onTouchEnd=n.triggerTouchAction(Mt.BarActionType.DEACTIVATE),n.onTouchCancel=n.triggerTouchAction(Mt.BarActionType.DEACTIVATE),n}return Object.defineProperty(e.prototype,"ref",{get:function(){return this.props.innerRef||this.defaultInnerRef},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"childProps",{get:function(){return u7.omit(this.props,["context","innerRef","onClick","expandInteractiveArea","onStatusChanged"])},enumerable:!0,configurable:!0}),e.prototype.componentDidMount=function(){this.props.context.populateInstance(this.id,this.ref),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("touchmove",this.onTouchMove,q_.disablePassive),document.addEventListener("touchend",this.onTouchEnd),document.addEventListener("touchcancel",this.onTouchCancel),this.interactiveAreaRef.current&&(this.interactiveAreaRef.current.addEventListener("mousedown",this.onMouseDown),this.interactiveAreaRef.current.addEventListener("touchstart",this.onTouchStart,q_.disablePassive))},e.prototype.componentWillUnmount=function(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd),document.removeEventListener("touchcancel",this.onTouchCancel),this.interactiveAreaRef.current&&(this.interactiveAreaRef.current.removeEventListener("mousedown",this.onMouseDown),this.interactiveAreaRef.current.removeEventListener("touchstart",this.onTouchStart))},e.prototype.render=function(){return Ws.createElement(G_.StyledBar,Bu({},this.childProps,{ref:this.ref}),this.props.children,Ws.createElement(G_.StyledInteractiveArea,Bu({},this.props.expandInteractiveArea,{ref:this.interactiveAreaRef,vertical:this.props.context.vertical})))},e.prototype.onStatusChanged=function(n){this.isActivated!==n&&(this.isActivated=n,typeof this.props.onStatusChanged=="function"&&this.props.onStatusChanged(n))},e.prototype.updateStatusIfNeed=function(n){n===Mt.BarActionType.ACTIVATE?this.onStatusChanged(!0):n===Mt.BarActionType.DEACTIVATE&&this.onStatusChanged(!1)},e.prototype.triggerAction=function(n,r){(this.isActivated||n===Mt.BarActionType.ACTIVATE)&&this.props.context.triggerBarAction({type:n,coordinate:r,barID:this.id}),this.isActivated&&n===Mt.BarActionType.DEACTIVATE&&this.onClick(),this.updateStatusIfNeed(n),this.updateClickStatus(n)},e.prototype.triggerMouseAction=function(n){var r=this;return function(i){r.disableUserSelectIfResizing(i,n);var o=i.clientX,s=i.clientY;r.triggerAction(n,{x:o,y:s})}},e.prototype.triggerTouchAction=function(n){var r=this;return function(i){r.disableUserSelectIfResizing(i,n);var o=i.touches[0]||{clientX:0,clientY:0},s=o.clientX,a=o.clientY;r.triggerAction(n,{x:s,y:a})}},e.prototype.disableUserSelectIfResizing=function(n,r){(this.isActivated||r===Mt.BarActionType.ACTIVATE)&&n.preventDefault()},e.prototype.updateClickStatus=function(n){this.isActivated&&(n===Mt.BarActionType.ACTIVATE?this.isValidClick=!0:n===Mt.BarActionType.MOVE&&(this.isValidClick=!1))},e.prototype.onClick=function(){this.isValidClick&&typeof this.props.onClick=="function"&&(this.isValidClick=!1,this.props.onClick())},e}(Ws.PureComponent);gv.Bar=d7.withResizerContext(f7);(function(t){function e(n){for(var r in n)t.hasOwnProperty(r)||(t[r]=n[r])}Object.defineProperty(t,"__esModule",{value:!0}),e(Md),e(pv),e(gv),e(Nl)})(Dd);const Wd=C.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;

    padding: 0.5rem 1rem;

    border-bottom: 5px solid #131315;
`,vv=C.div`
    width: 100%;
    padding: 1rem;
    flex: 1;

    overflow-y: auto;
`,IE=C(Dd.Container)`
    height: 100%;
`,Ao=C(Dd.Section)`
    background-color: #1d1d1f;
    display: flex;
    flex-direction: column;

    h1 {
        color: #b4b4b4;
        font-size: 1rem;
        font-weight: 300;
        margin: 0.5rem;
    }
`,Vu=C(Dd.Bar)`
    background-color: #131315;
    cursor: col-resize;
`,h7="/assets/search-fed701dd.svg",K_="/assets/plus-192e3ccd.svg",p7=C.div`
    display: flex;
    width: 100%;
    height: 100%;

    justify-content: space-between;
    gap: 1rem;
`,m7=C.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-left: 1rem;
        aspect-ratio: 1;
        cursor: pointer;

        user-select: none;
    }
`,ah=C.img`
    aspect-ratio: 1;
    cursor: pointer;
    height: 1.5rem;
`,yv=({label:t,value:e,setValue:n,handleDelete:r,handleAdd:i,setAddEntryRef:o,secondInput:s})=>d.jsxs(p7,{children:[d.jsx("div",{children:d.jsx(ah,{src:h7,alt:"Search Icon"})}),d.jsxs("div",{style:{flex:"1",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[d.jsx("div",{style:{flex:1},children:d.jsx(yt,{label:t,value:e,innerStyles:{color:"#b4b4b4",backgroundColor:"#131315",padding:0},labelStyles:{top:"0.2rem",left:"0rem",fontSize:"0.9rem",opacity:`${e.length>0?"0":"100"}`},onChange:a=>n(a.target.value)})}),s!==null&&d.jsx("div",{style:{flex:1},children:s})]}),d.jsxs(m7,{children:[d.jsx(ah,{ref:o||null,src:K_,alt:"New table / entry",onClick:i}),d.jsx(ah,{style:{transform:"rotate(45deg)"},src:K_,alt:"Remove table / entry",onClick:r})]})]}),g7=C.div`
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    margin-left: ${t=>t.indent*.5}rem;
    width: calc(100% - ${t=>t.indent*.5}rem);

    border-radius: 0.5rem;
    background-color: ${t=>t.selected?"#3d3d40":"#1d1d1f"};
    cursor: pointer;

    transition: all 0.1s ease-in-out;

    &:hover {
        background-color: #3d3d40;
    }
`,v7=C.input`
    width: 100%;
    height: 100%;
    padding: 0.5rem;

    background-color: transparent;
    border: none;

    cursor: pointer;

    color: #b4b4b4;
    font-size: 1rem;
    font-weight: 300;

    &:focus {
        outline: none;

        color: #e3e3e3;
    }
`,Y_=C.svg`
    width: 1.5rem;
    height: 1.5rem;
`,jc=({defaultKey:t,onClick:e,selected:n,onFinishEditing:r,indentLevel:i})=>{const[o,s]=b.useState(t),[a,l]=b.useState(!1),c=b.useRef(null),f=async()=>{l(!1),await r(o)},u=async h=>{h.key==="Enter"&&await f()};return b.useEffect(()=>{a&&c.current.focus()},[a]),d.jsxs(g7,{indent:i||0,selected:n,onClick:e,children:[d.jsx(v7,{ref:c,disabled:!a,value:o,onChange:h=>s(h.target.value),onKeyDown:u}),a?d.jsx(Y_,{onClick:f,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M13.7801 4.22007C13.9205 4.3607 13.9994 4.55132 13.9994 4.75007C13.9994 4.94882 13.9205 5.13945 13.7801 5.28007L6.53007 12.5301C6.38944 12.6705 6.19882 12.7494 6.00007 12.7494C5.80132 12.7494 5.61069 12.6705 5.47007 12.5301L2.22007 9.28007C2.08766 9.13781 2.01555 8.94976 2.01891 8.75544C2.02227 8.56113 2.10082 8.37568 2.23807 8.23807C2.37567 8.10083 2.56112 8.02227 2.75544 8.01892C2.94975 8.01556 3.1378 8.08766 3.28007 8.22007L6.00007 10.9401L12.7201 4.22007C12.8607 4.07962 13.0513 4.00073 13.2501 4.00073C13.4488 4.00073 13.6394 4.07962 13.7801 4.22007Z",fill:"#E3E3E3"})}):d.jsx(Y_,{onClick:()=>l(!0),width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M11.0131 1.42692C11.3412 1.099 11.7862 0.914795 12.2501 0.914795C12.714 0.914795 13.1589 1.099 13.4871 1.42692L14.5731 2.51292C14.901 2.84107 15.0852 3.28601 15.0852 3.74992C15.0852 4.21384 14.901 4.65877 14.5731 4.98692L5.9631 13.5969C5.7531 13.8069 5.4931 13.9609 5.2071 14.0419L1.9561 14.9719C1.82742 15.0087 1.69124 15.0104 1.5617 14.9768C1.43216 14.9432 1.31396 14.8755 1.21938 14.7808C1.1248 14.6862 1.05728 14.5679 1.02382 14.4383C0.99036 14.3087 0.992181 14.1726 1.0291 14.0439L1.9581 10.7939C2.0391 10.5079 2.1931 10.2469 2.4031 10.0359L11.0131 1.42592V1.42692ZM11.1891 6.24992L9.7501 4.80992L3.4641 11.0969C3.43403 11.127 3.41202 11.1641 3.4001 11.2049L2.8421 13.1579L4.7951 12.5999C4.8359 12.588 4.87304 12.566 4.9031 12.5359L11.1891 6.24992ZM12.4271 2.48692C12.4039 2.46364 12.3763 2.44517 12.3459 2.43256C12.3155 2.41996 12.283 2.41347 12.2501 2.41347C12.2172 2.41347 12.1847 2.41996 12.1543 2.43256C12.1239 2.44517 12.0963 2.46364 12.0731 2.48692L10.8111 3.74992L12.2501 5.18992L13.5131 3.92692C13.5364 3.9037 13.5548 3.87611 13.5675 3.84574C13.5801 3.81537 13.5865 3.7828 13.5865 3.74992C13.5865 3.71704 13.5801 3.68448 13.5675 3.6541C13.5548 3.62373 13.5364 3.59614 13.5131 3.57292L12.4271 2.48692Z",fill:"#B4B4B4"})})]})},y7=({setBigSelectedTable:t})=>{const e=Je(),[n,r]=b.useState(""),[i,o]=b.useState([]),[s,a]=b.useState(0);b.useEffect(()=>{const u=Object.values(e.value.tables).filter(h=>h.key.toLowerCase().includes(n.toLowerCase()));o(u)},[n,e.value]),b.useEffect(()=>{(s===-1||!e.value.tables[s])&&(console.log("Deselecting table."),a(-1),t(null)),t(e.value.tables[s])},[s,e.value]);const l=async()=>{if(!e.value.cloud){const u=h4(e.value.tables[s]),h={...e.value.tables};delete h[s];const p={...e.value.entryMap};delete p[s],u.forEach(v=>{delete p[v]}),e.setValue({...e.value,tables:h,entryMap:p}),console.log("Deleting local table.");return}await g4(e.value.projectId,s)},c=async()=>{if(!e.value.cloud){const h=wx("New Table",e.value);e.setValue({...e.value,tables:{...e.value.tables,[h.id]:h},entryMap:{...e.value.entryMap,[h.id]:h.key}}),console.log("Created a local table.");return}const u=await p4("New Table",e.value.projectId);if(u.error){console.log("Error creating cloud table. (tables-panel.component.tsx)"),console.error(u.error);return}},f=async(u,h)=>{if(!e.value.cloud){e.setValue({...e.value,tables:{...e.value.tables,[h.id]:{...h,key:u}},entryMap:{...e.value.entryMap,[h.id]:u}}),console.log("Renaming local table.");return}await m4(u,e.value.projectId,h.id)};return d.jsxs(d.Fragment,{children:[d.jsx(Wd,{children:d.jsx(yv,{label:"Tables",value:n,setValue:r,handleDelete:l,handleAdd:c})}),d.jsx(vv,{children:i.map(u=>d.jsx(jc,{onFinishEditing:h=>f(h,u),defaultKey:u.key,onClick:()=>{a(u.id)},selected:s===u.id},u.id))})]})},lh=C.div`
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;

    overflow-x: hidden;
    overflow-y: auto;
`,_7=C.div`
    position: absolute;
    z-index: 100;
    background-color: #131315;
    border-radius: 0.5rem;
    padding: 0.5rem;
`,ch=C.div`
    width: 100%;
    padding: 0.5rem;

    border-radius: 0.5rem;

    color: #b4b4b4;

    display: flex;
    align-items: center;
    cursor: pointer;

    user-select: none;

    &:hover {
        background-color: #1d1d1f;
        color: #e3e3e3;
    }
`,w7=({selectedTable:t,setBigSelectedEntry:e})=>{const n=Je(),[r,i]=b.useState(""),[o,s]=b.useState([]),[a,l]=b.useState(0),[c,f]=b.useState(300),[u,h]=b.useState(null),[p,v]=b.useState(!1),[y,x]=b.useState(null),[g,m]=b.useState(0),w=async()=>{const O=b_(n.value,a),re=No(O);if(!n.value.cloud){const Vt={...n.value.entryMap};delete Vt[a];const St={...t};delete St[re][a],n.setValue({...n.value,entryMap:Vt,tables:{...n.value.tables}}),console.log("Deleted local entry!");return}await N4(n.value.projectId,t.id,re,a)},_=async()=>{if(t===null){console.log("Tried adding entry with no table selected. Aborting...");return}v(!p)},E=async()=>{if(v(!1),!n.value.cloud){const O=Nc(n.value),re=xx(O);n.setValue({...n.value,tables:{...n.value.tables,[t.id]:{...t,facts:{...t.facts,[O]:re}}},entryMap:{...n.value.entryMap,[O]:re.key}}),console.log("Created local fact!");return}await I4(n.value.projectId,t.id),i("")},k=async()=>{if(v(!1),!n.value.cloud){const O=Nc(n.value),re=Cx(O);n.setValue({...n.value,tables:{...n.value.tables,[t.id]:{...t,events:{...t.events,[O]:re}}},entryMap:{...n.value.entryMap,[O]:re.key}}),console.log("Created local event!");return}await T4(n.value.projectId,t.id),i("")},T=async()=>{if(v(!1),!n.value.cloud){const O=Nc(n.value),re=Ex(O);n.setValue({...n.value,tables:{...n.value.tables,[t.id]:{...t,rules:{...t.rules,[O]:re}}},entryMap:{...n.value.entryMap,[O]:re.key}}),console.log("Created local rule!");return}await k4(n.value.projectId,t.id),i("")},j=async(O,re)=>{if(!n.value.cloud){const St={...n.value.entryMap};St[re.id]=O;const Xe={...t};Xe[No(re)][re.id].key=O,n.setValue({...n.value,entryMap:St,tables:{...n.value.tables,[t.id]:Xe}}),console.log("Renamed local entry!");return}const Vt=No(re);await Ix(Vt,n.value.projectId,t.id,re.id,O)},M=()=>o.filter(O=>bx(O)).map(O=>O),U=()=>o.filter(O=>Sx(O)).map(O=>O),Fe=()=>o.filter(O=>v4(O)).map(O=>O);return b.useEffect(()=>{if(t==null){s([]);return}const O=_x(t).filter(re=>re.key.toLowerCase().includes(r.toLowerCase()));s(O),m(g+1)},[r,t,n.value]),b.useEffect(()=>{typeof u<"u"&&u!=null&&f(u.offsetWidth/3)},[u]),b.useEffect(()=>{if(a==null||t==null)return;const O=b_(n.value,a);O!=null&&e(O)},[a,n.value]),d.jsxs(d.Fragment,{children:[p&&d.jsxs(_7,{style:{top:(y==null?void 0:y.offsetTop)+(y==null?void 0:y.offsetHeight)+20,right:window.innerWidth-(y==null?void 0:y.offsetLeft)-(y==null?void 0:y.offsetWidth)},children:[d.jsx(ch,{onClick:E,children:"Fact"}),d.jsx(ch,{onClick:k,children:"Event"}),d.jsx(ch,{onClick:T,children:"Rule"})]}),d.jsx(Wd,{children:d.jsx(yv,{setAddEntryRef:x,label:"Entries",value:r,setValue:i,handleDelete:w,handleAdd:_})}),d.jsx(vv,{ref:h,children:d.jsxs(IE,{vertical:!0,children:[d.jsxs(Ao,{defaultSize:c,minSize:100,children:[d.jsx("h1",{children:"> Facts"}),d.jsx(lh,{children:M().map(O=>d.jsx(jc,{indentLevel:2,onFinishEditing:re=>j(re,O),defaultKey:O.key,onClick:()=>{l(O.id)},selected:a===O.id},O.id+g*2))})]}),d.jsx(Vu,{size:5}),d.jsxs(Ao,{defaultSize:c,minSize:100,children:[d.jsx("h1",{children:"> Events"}),d.jsx(lh,{children:U().map(O=>d.jsx(jc,{indentLevel:2,onFinishEditing:re=>j(re,O),defaultKey:O.key,onClick:()=>{l(O.id)},selected:a===O.id},O.id+g))})]}),d.jsx(Vu,{size:5}),d.jsxs(Ao,{defaultSize:c,minSize:100,children:[d.jsx("h1",{children:"> Rules"}),d.jsx(lh,{children:Fe().map(O=>d.jsx(jc,{indentLevel:2,onFinishEditing:re=>j(re,O),defaultKey:O.key,onClick:()=>{l(O.id)},selected:a===O.id},O.id+g))})]})]})})]})},b7="/assets/copy-da803dfd.svg",TE=C.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,ir=C.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    align-items: center;

    margin: 0.5rem 0;
`,or=C.span`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 300;
    color: #b4b4b4;

    flex: 3;
`,os=C.input`
    width: 100%;
    height: 2rem;

    flex: 7;

    background-color: #2c2c2e;
    border: 2px solid #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
        border: 2px solid #18a5ec;
    }
`,Q_=C.textarea`
    width: 100%;
    height: 10rem;

    flex: 7;

    background-color: #2c2c2e;
    border: 2px solid #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
        border: 2px solid #18a5ec;
    }
`,S7=C.div`
    flex: 7;
    position: relative;
`,C7=C.img`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    cursor: pointer;

    transition: all 0.1s ease-in-out;

    &:hover {
        filter: brightness(2);
        scale: 1.1;
    }

    &:active {
        filter: invert(75%) sepia(100%) saturate(100%) hue-rotate(100deg)
            brightness(4);

        scale: 0.9;
    }
`,kE=({value:t})=>{const e=()=>{navigator.clipboard.writeText(t)};return d.jsxs(S7,{children:[d.jsx(os,{disabled:!0,value:t}),d.jsx(C7,{onClick:e,src:b7,alt:"Copy"})]})},x7=C(Wd)`
    display: inline-table;
    padding: 0.4rem;

    div {
        width: 100%;
        height: 100%;

        padding: 0.5rem 1rem;

        border-radius: 0.5rem;

        display: flex;
        justify-content: space-between;

        background-color: #131315;
        color: #b4b4b4;
    }
`,Yp=(t,e)=>{if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0},Qp=(t,e)=>{if(t==null||e==null||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(typeof t[n]=="object"){if(!Qp(t[n],e[n]))return!1}else if(t[n]!==e[n])return!1;return!0},E7=({selectedTable:t,selectedEntry:e})=>{const n=Je(),r=()=>e==null||t==null?"":`#${n.value.projectName} > (${t==null?void 0:t.id})${t.key}/${No(e)}`,i=()=>{if(e==null)return d.jsx("div",{children:"Nothing selected"});switch(No(e)){case"facts":return d.jsx(_v,{selectedTable:t,selectedEntry:e});case"events":return d.jsx(I7,{selectedTable:t,selectedEvent:e});case"rules":return d.jsx(T7,{selectedTable:t,selectedRule:e});default:return d.jsx("div",{children:"HMMM"})}};return d.jsxs(d.Fragment,{children:[d.jsx(x7,{children:d.jsxs("div",{children:[d.jsx("p",{children:r()}),d.jsx("p",{children:e==null?void 0:e.key})]})}),d.jsx(vv,{children:i()})]})},_v=({selectedTable:t,selectedEntry:e,children:n})=>{const r=Je(),[i,o]=b.useState(""),[s,a]=b.useState(0),[l,c]=b.useState(!1);b.useEffect(()=>{e!==null&&(a(e.value),o(e.key))},[e]);const f=p=>{const v=parseInt(p.target.value);a(v),c(!0)},u=p=>{const v=p.target.value;o(v),c(!0)},h=async()=>{const p=No(e);if(!r.value.cloud){const v={...e,key:i,value:s};r.setValue({...r.value,tables:{...r.value.tables,[t.id]:{...t,[p]:{...t[p],[e.id]:v}}},entryMap:{...r.value.entryMap,[e.id]:i}}),console.log("Updating entry locally!");return}await Ix(p,r.value.projectId,t.id,e.id,i,s)};return b.useEffect(()=>{l&&(c(!1),h())},[s,i]),d.jsxs(TE,{children:[d.jsxs(ir,{children:[d.jsx(or,{children:"ID: "}),d.jsx(kE,{value:e.id.toString()})]}),d.jsxs(ir,{children:[d.jsx(or,{children:"Key: "}),d.jsx("div",{style:{flex:7},children:d.jsx(os,{value:i,type:"text",onChange:u})})]}),d.jsxs(ir,{children:[d.jsx(or,{children:"Value: "}),d.jsx("div",{style:{flex:7},children:d.jsx(os,{value:s,type:"number",onChange:f})})]}),n]})},I7=({selectedTable:t,selectedEvent:e})=>{const n=Je(),[r,i]=b.useState(""),[o,s]=b.useState([]);b.useEffect(()=>{if(e!==null&&e.triggers.length>0){const l=e.triggers.join(", ");i(l)}},[e]);const a=async l=>{if(e===null||r===null)return;const c=l.target.value;i(c);const f=c.split(",").map(u=>parseInt(u.trim())).filter(u=>!isNaN(u)&&u>0);if(!n.value.cloud){if(Yp(f,o))return;const u={...e,triggers:f};n.setValue({...n.value,tables:{...n.value.tables,[t.id]:{...t,events:{...t.events,[e.id]:u}}}}),console.log("Updating event locally!"),s(f);return}await R4(n.value.projectId,t.id,e.id,f)};return d.jsx(_v,{selectedTable:t,selectedEntry:e,children:d.jsxs(d.Fragment,{children:[d.jsxs(ir,{children:[d.jsx(or,{children:"Triggers: "}),d.jsx("div",{style:{flex:7},children:d.jsx(os,{value:r,type:"text",onChange:a})})]}),d.jsxs(dt,{children:["The `triggers` field is not yet fully UX friendly.",d.jsx("br",{}),"For now, you can enter a comma separated list of rule keys. !!! NO RULE VALIDATION IS DONE !!!"]})]})})},T7=({selectedTable:t,selectedRule:e})=>{const n=Je(),[r,i]=b.useState(""),[o,s]=b.useState(""),[a,l]=b.useState([]),[c,f]=b.useState([]),u=(p,v)=>p.split(`
`).filter(y=>y.startsWith("|")&&y.endsWith("|")&&y.length>2).map(y=>v(y.slice(1,y.length-1).split(",").map(x=>x.trim()))).filter(y=>y!==null);b.useEffect(()=>{if(e===null)return;const p=e.ruleCriteria.map(y=>E4(y)).join(`
`);i(p);const v=e.ruleModifications.map(y=>b4(y)).join(`
`);s(v),n.value.cloud?(l(null),f(null)):(l(e.ruleCriteria),f(e.ruleModifications))},[e]);const h=async(p,v)=>{if(e===null||r==null||o==null)return;let y=null,x=null;if(v==="criteria"){const g=p.target.value;if(i(g),y=u(g,x4),!n.value.cloud&&!Qp(y,a)){const w={...e,ruleCriteria:y};n.setValue({...n.value,tables:{...n.value.tables,[t.id]:{...t,rules:{...t.rules,[e.id]:w}}}}),console.log("Updating rule locally!")}if(Yp(y,a))return;l(y)}else if(v==="modifications"){const g=p.target.value;if(s(g),x=u(g,w4),!n.value.cloud&&!Qp(x,c)){const w={...e,ruleModifications:x};n.setValue({...n.value,tables:{...n.value.tables,[t.id]:{...t,rules:{...t.rules,[e.id]:w}}}}),console.log("Updating rule locally!")}if(Yp(x,c))return;f(x)}n.value.cloud&&(y=y??e.ruleCriteria,x=x??e.ruleModifications,await P4(n.value.projectId,t.id,e.id,y,x))};return d.jsx(_v,{selectedTable:t,selectedEntry:e,children:d.jsxs(d.Fragment,{children:[d.jsxs(ir,{children:[d.jsxs(or,{style:{alignSelf:"flex-start"},children:["Criteria:"," "]}),d.jsx("div",{style:{flex:7},children:d.jsx(Q_,{value:r,onChange:p=>h(p,"criteria")})})]}),d.jsxs(ir,{children:[d.jsxs(or,{style:{alignSelf:"flex-start"},children:["Modifications:"," "]}),d.jsx("div",{style:{flex:7},children:d.jsx(Q_,{value:o,onChange:p=>h(p,"modifications")})})]}),d.jsxs(dt,{children:["Rule editing is not yet fully UX friendly.",d.jsx("br",{}),d.jsx("br",{}),"`ruleTriggers` is a comma separated list of event keys.",d.jsx("br",{}),d.jsx("br",{}),"`ruleCriteria` is a ","'\\n'"," separated list of the format.",d.jsx("br",{}),"`","|entryToCheck: id, operator: '=/<=/>=/</>', value: number|","`",d.jsx("br",{}),d.jsx("br",{}),"`ruleModifications` is a ","'\\n'"," separated list of the format.",d.jsx("br",{}),"`","|entryToModify: id, operator: '=/+', newValue: number|",d.jsx("br",{}),d.jsx("br",{}),"!!! NO ENTRY EXISTENCE VALIDATION IS DONE !!!"]})]})})},k7=C.div`
    flex: 1;

    border-radius: 0.65rem;
    overflow: hidden;
`,R7=()=>{const[t,e]=b.useState(300),[n,r]=b.useState(null),[i,o]=b.useState(null),[s,a]=b.useState(null);return b.useEffect(()=>{typeof n<"u"&&n!=null&&e(n.offsetWidth/3)},[n]),d.jsx(k7,{children:d.jsxs(IE,{ref:r,children:[d.jsx(Ao,{defaultSize:t,minSize:250,children:d.jsx(y7,{setBigSelectedTable:o})}),d.jsx(Vu,{size:5}),d.jsx(Ao,{defaultSize:t,minSize:250,children:d.jsx(w7,{selectedTable:i,setBigSelectedEntry:a})}),d.jsx(Vu,{size:5}),d.jsx(Ao,{defaultSize:t,minSize:250,children:d.jsx(E7,{selectedTable:i,selectedEntry:s})})]})})},P7=()=>d.jsxs(ws,{children:[d.jsx(tr,{children:"Spreadsheet View"}),d.jsx(nr,{children:d.jsx("p",{children:"The spreadsheet view is still a work-in-progress."})})]}),N7=()=>d.jsxs(ws,{children:[d.jsx(tr,{children:"Diagram view"}),d.jsx(nr,{children:d.jsx("p",{children:"Diagram view is still in development."})})]}),A7=C.div`
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    // margin-left: ${t=>t.indent*1}rem;
    // width: calc(100% - ${t=>t.indent*1}rem);

    border-radius: 0.5rem;
    background-color: ${t=>t.selected?"#3d3d40":"#1d1d1f"};
    cursor: pointer;

    transition: all 0.1s ease-in-out;

    &:hover {
        background-color: #3d3d40;
    }
`,O7=({scope:t,selected:e,onClick:n})=>{const r=()=>t.level<0?`- ${t.key} > (${t.level})`:`--${"--".repeat(t.level)} ${t.key} > (${t.level})`;return d.jsx(A7,{onClick:n,selected:e,indent:t.level,children:r()})},j7=C.input`
    ${Od}
`,D7=t=>d.jsxs(Ad,{style:t.styles,children:[d.jsx(Xg,{style:t.labelStyles,value:"a",children:t.label}),d.jsx(j7,{type:"number",style:t.innerStyles,value:t.value,onChange:t.onChange})]}),M7=C.div`
    height: 10rem;
    display: flex;
    flex-direction: column;
`,L7=C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 2;

        h1 {
            font-size: 1rem;
            font-weight: 500;
            color: #b4b4b4;
        }
    }
`,J_=C.hr`
    margin: 0.5rem 0;
    border: none;
    border-bottom: 5px solid #141419;
    flex: 1;
`,F7=C.div`
    flex: 1;
`,$7=({selectedScope:t})=>{const e=Je(),[n,r]=b.useState(""),[i,o]=b.useState(0),[s,a]=b.useState(!1),l=u=>{r(u.target.value),a(!0)},c=u=>{const h=parseInt(u.target.value);if(h<0){console.log("Level can't be negative.");return}if(isNaN(h)){console.log("Level must be a number.");return}o(h),a(!0)},f=async()=>{if(!e.value.cloud){const u={id:t.id,key:n,level:i};e.setValue({...e.value,scopes:{...e.value.scopes,[t.id]:u}}),console.log("Editing local scope.");return}await j4(e.value.projectId,t.id,i,n)};return b.useEffect(()=>{t!=null&&(r(t.key),o(t.level))},[t]),b.useEffect(()=>{s&&(a(!1),f())},[n,i]),d.jsxs(M7,{children:[d.jsxs(L7,{children:[d.jsx(J_,{}),d.jsx("div",{children:d.jsx("h1",{children:"SCOPE EDITOR"})}),d.jsx(J_,{})]}),d.jsx(F7,{children:t===null?d.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:d.jsx("p",{children:"Please select a scope."})}):d.jsxs(TE,{children:[d.jsxs(ir,{children:[d.jsx(or,{children:"ID: "}),d.jsx(kE,{value:(t==null?void 0:t.id.toString())||-69})]}),d.jsxs(ir,{children:[d.jsx(or,{children:"Key: "}),d.jsx("div",{style:{flex:7},children:d.jsx(os,{value:n,onChange:l})})]}),d.jsxs(ir,{children:[d.jsx(or,{children:"Level: "}),d.jsx("div",{style:{flex:7},children:d.jsx(os,{value:i.toString(),type:"number",onChange:c})})]})]})})]})},U7=()=>{const t=Je(),[e,n]=b.useState(""),[r,i]=b.useState(null),[o,s]=b.useState(!1),[a,l]=b.useState([]),[c,f]=b.useState(null),[u,h]=b.useState(0),p=async()=>{if(!t.value.cloud){const y=fx(t.value.scopes),x=dx(y,"New Scope",-1);t.setValue({...t.value,scopes:{...t.value.scopes,[y]:x}}),console.log("Creating local scope!");return}await A4(t.value.projectId)},v=async()=>{if(c!=null){if(!t.value.cloud){const y=t.value.scopes;delete y[c],t.setValue({...t.value,scopes:y}),console.log("Deleting local scope!");return}await O4(t.value.projectId,c),f(null)}};return b.useEffect(()=>{var m;if(((m=t.value)==null?void 0:m.scopes)==null)return;const y=t.value.scopes,g=Object.values(y).filter(w=>(!o||w.level===-1||w.level==r)&&w.key.toLowerCase().includes(e.toLowerCase())).sort((w,_)=>w.level==_.level?w.key.localeCompare(_.key):w.level-_.level);l(g),h(u+1)},[r,e,t.value]),d.jsxs(ws,{children:[d.jsx(tr,{children:"Scopes"}),d.jsxs(nr,{children:[d.jsx(Wd,{children:d.jsx(yv,{label:"Scopes",value:e,setValue:n,handleAdd:p,handleDelete:v,secondInput:d.jsx(D7,{label:"Level",value:r,innerStyles:{color:"#b4b4b4",backgroundColor:"#131315",padding:0},labelStyles:{top:"0.2rem",left:"0rem",fontSize:"0.9rem",opacity:`${o?"0":"100"}`},onChange:y=>{const x=parseInt(y.target.value);x<0||(isNaN(x)?(s(!1),i(null)):(i(x),s(!0)))}})})}),d.jsx("div",{children:a.map(y=>d.jsx(O7,{onClick:()=>f(y.id),selected:c===null?!1:c===y.id,scope:y},y.id+u))}),d.jsx($7,{selectedScope:c==null?null:t==null?void 0:t.value.scopes[c]})]})]})},z7=C.div`
    display: flex;

    height: 100%;
`,B7=C.div`
    min-width: 15rem;
    width: 15vw;
    max-width: 20rem;
    height: 100%;

    background-color: #1d1d1f;

    padding: 1.5rem;
`,V7=C.h1`
    color: #b4b4b4;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
`,X_=C.hr`
    border: 2px solid #131315;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-radius: 1rem;
`,W7=({setElement:t})=>{const[e,n]=b.useState(-1),[r,i]=b.useState(0),[o,s]=b.useState(0),a=(c,f)=>(c+f)*(c+f+1)+f,l=[{icon:d.jsx(ND,{hovered:e===0,selected:r===0}),title:"OVERVIEW",options:[[{title:"Overview",element:d.jsx(zD,{})}]]},{icon:d.jsx(AD,{hovered:e===1,selected:r===1}),title:"MANAGEMENT",options:[[{title:"Project Settings",element:d.jsx(HD,{})},{title:"Collaboration",element:d.jsx(dM,{})},{title:"Custom Entries",element:d.jsx(fM,{})}]]},{icon:d.jsx(OD,{hovered:e===2,selected:r===2}),title:"VIEWS",options:[[{title:"Table",element:d.jsx(R7,{})},{title:"Spreadsheet",element:d.jsx(P7,{})},{title:"Diagram",element:d.jsx(N7,{})}],[{title:"Scopes",element:d.jsx(U7,{})}]]}];return b.useEffect(()=>{t(l[r].options[0][0].element)},[]),d.jsxs(z7,{children:[d.jsx(PD,{selected:r,setSelected:i,setHovered:n,elements:l}),d.jsxs(B7,{children:[d.jsx(V7,{children:l[r].title}),d.jsx(X_,{}),d.jsx("div",{children:l[r].options.map((c,f)=>d.jsxs("div",{children:[c.map((u,h)=>d.jsx(DD,{title:u.title,selected:o===a(f,h),onClick:()=>{s(a(f,h)),t(u.element)}},a(f,h))),d.jsx(X_,{})]},f))})]})]})},H7=C.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    z-index: 0;

    background-color: #131315;
`,G7=C.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 2rem;
`,q7=C.h1`
    font-size: 0.9rem;
    font-weight: 400;
    color: #b4b4b4;

    margin-bottom: 3rem;
`,K7=C.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: #b4b4b4;
`,Y7=C.hr`
    border: 2px solid #48484a;
    margin-bottom: 1rem;
    border-radius: 1rem;
    width: 100%;
`,Q7=()=>{const{id:t}=Ib(),[e,n]=b.useState(),r=Je(),[i,o]=b.useState(null);return b.useEffect(()=>{var a;if(e===t){console.log(`Reloaded editor page with same ID: ${t}. No changes. (editor.page.tsx)`);return}if(n(t),t==="local"){if((a=r==null?void 0:r.value)!=null&&a.cloud){const l=localStorage.getItem("project");if(l===null){console.log("No local project found");return}r.setValue(JSON.parse(l)),console.log("Loaded local project from storage.")}return}const s=r4(t,l=>{if(l.val()===null){console.log(`Project ${t} updated, but value was null. Unsubscribing. (OnValue Callback) (editor.page.tsx)`),s();return}console.log(`Project ${t} updated. Updating context. (OnValue Callback) (editor.page.tsx)`);const c=yx(l);r.setValue(c)});return console.log(`Subscribing to project ${t} (editor.page.tsx)`),()=>{console.log(`Unsubscribing from project ${t} (editor.page.tsx)`),s()}},[t]),d.jsx(H7,{children:r.value===null?d.jsx(wD,{}):d.jsxs(d.Fragment,{children:[d.jsx(W7,{setElement:o}),d.jsxs(G7,{children:[d.jsx(q7,{children:r.value.projectName}),d.jsx(K7,{children:r.value.projectName}),d.jsx(Y7,{}),i!==null&&i]})]})})},J7="/assets/account-effa87fa.svg",X7="/assets/security-d3a1e4de.svg",Z7="/assets/help-86de8fee.svg",e$="/assets/management-2a787d44.svg",t$="/assets/notifications-5f2fc53c.svg",n$=C.div`
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;

    padding: 2rem 1rem;

    cursor: pointer;
    user-select: none;

    &:last-child {
        margin-top: auto;
    }

    background-color: ${t=>t.selected?"#1d1d1f":"#3e3e3e"};
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #1d1d1f;
    }

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    h1 {
        font-size: 1rem;
        font-weight: 400;
        color: #e3e3e3;

        margin: 0 0 0 1rem;
    }
`,r$=({props:t,onClick:e,selected:n})=>d.jsxs(n$,{onClick:e,selected:n,children:[d.jsx("img",{src:t.icon,alt:t.title}),d.jsx("h1",{children:t.title})]}),ii=C.div`
    min-width: 20rem;
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`,Al=C.h1`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
`,RE=C.div`
    margin-top: auto;
`,PE=C.p`
    font-size: 0.75rem;
    color: #a0a0a0;
    margin-top: 0.25rem;
`,i$=()=>{const t=Nt(),[e,n]=b.useState(null),[r,i]=b.useState(null),[o,s]=b.useState(""),[a,l]=b.useState(""),c=async()=>{n(null),i(null);const f={...t.value,name:o,profilePicture:a},u=await H3(f);n(u.error),u.data&&(t.setValue(u.data),i("Successfully updated user!"))};return b.useEffect(()=>{s(t.value.name),l(t.value.profilePicture)},[]),d.jsxs(ii,{children:[d.jsx(Al,{children:"General Info"}),d.jsx(yt,{label:"DISPLAY NAME",value:o,onChange:f=>s(f.target.value)}),d.jsx(yt,{label:"PROFILE URL",value:a,onChange:f=>l(f.target.value)}),d.jsx(tD,{children:r}),d.jsx(dt,{children:e==null?void 0:e.message}),d.jsx(RE,{children:d.jsx(Ve,{config:{style:"primary",inverted:!1},onClick:c,children:"Save Settings"})})]})},o$=()=>{const[t,e]=b.useState(""),[n,r]=b.useState(""),i=()=>{console.log("Saving user settings.")};return d.jsxs(ii,{children:[d.jsx(Al,{children:"Security"}),d.jsx(yt,{type:"password",label:"PASSWORD",value:t,onChange:o=>e(o.target.value)}),d.jsx(yt,{type:"password",label:"CONFIRM PASSWORD",value:n,onChange:o=>r(o.target.value)}),d.jsx(RE,{children:d.jsx(Ve,{config:{style:"primary",inverted:!1},onClick:i,children:"Save Settings"})})]})},s$=C.a`
    color: #18a5ec;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`,a$=()=>d.jsxs(ii,{children:[d.jsx(Al,{children:"Help"}),d.jsxs(ii,{children:[d.jsx(yt,{disabled:!0,label:"Support Email",value:"support@inkwell.systems",onChange:t=>{}}),d.jsxs("div",{children:[d.jsx(yt,{disabled:!0,label:"Documentation",value:"https://github.com/Inkwell-Systems/InkwellAPI",onChange:t=>{}}),d.jsxs(PE,{children:["Or click"," ",d.jsx(s$,{href:"https://github.com/Inkwell-Systems/InkwellAPI",children:"here"}),"."]})]})]})]}),l$=()=>{const t=Nt(),e=Je(),n=mn(),r=async()=>{t.setValue(ll),e.setValue(null),await $4(),n("/")};return d.jsxs(ii,{children:[d.jsx(Al,{children:"Management"}),d.jsx(ii,{children:d.jsxs("div",{children:[d.jsx(Ve,{config:{style:"danger",inverted:!1},onClick:r,children:"DELETE ACCOUNT"}),d.jsx(PE,{children:"WARNING: This action is irreversible, and there is no confirmation prompt."})]})})]})},c$=C.div`
    display: flex;
    justify-content: space-between;

    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #1d1d1f;
`,u$=C.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #e3e3e3;
    }

    p {
        font-size: 1rem;
        font-weight: 300;
        color: #b4b4b4;
    }

    span {
        font-size: 0.75rem;
        font-weight: 300;
        color: #b4b4b4;
    }
`,d$=C.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`,f$=({invitation:t,setError:e})=>{const n=mn(),r=async()=>{e(null);const o=await l4(t);e(o.error),o.error||n("/projects")},i=async()=>{console.log("decline")};return d.jsxs(c$,{children:[d.jsxs(u$,{children:[d.jsx("h1",{children:t.projectId}),d.jsxs("div",{children:[d.jsxs("p",{children:['"',t.message,'"']}),d.jsxs("span",{children:["- ",t.userIdFrom]})]})]}),d.jsxs(d$,{children:[d.jsx(Ve,{style:{scale:"0.75"},config:{style:"secondary",inverted:!0},onClick:r,children:"Accept"}),d.jsx(Ve,{style:{scale:"0.75"},config:{style:"danger",inverted:!1},onClick:i,children:"Decline"})]})]})},h$=()=>{const t=Nt(),[e,n]=b.useState([]),[r,i]=b.useState(null),o=async()=>{i(null);const s=await c4(t.value.id);i(s.error),s.error||n(s.data)};return b.useEffect(()=>{t.value.isAuthenticated&&o()},[t.value]),d.jsxs(ii,{style:{width:"unset"},children:[d.jsx(Al,{children:"Notifications"}),d.jsx(dt,{children:r==null?void 0:r.message}),d.jsx(ii,{style:{flex:"1",width:"unset"},children:e.map(s=>d.jsx(f$,{setError:i,invitation:s},s.id))})]})},p$=C.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 4rem;
`,m$=C.div`
    margin-bottom: 4rem;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #e3e3e3;
    }

    p {
        font-size: 1.25rem;
        font-weight: 300;
        color: #b4b4b4;
    }
`,g$=C.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex: 1;
`,v$=C.div`
    display: flex;
    flex-direction: column;
    flex: 2;

    background-color: #3e3e3e;
    border-radius: 0.5rem;

    overflow: hidden;

    min-width: 15rem;
`,y$=C.div`
    background-color: #3e3e3e;
    border-radius: 0.5rem;

    padding: 1rem;
    flex: 5;
`,_$=()=>{const t=[{icon:J7,title:"User Profile",element:d.jsx(i$,{})},{icon:X7,title:"Password & Security",element:d.jsx(o$,{})},{icon:Z7,title:"Help & Support",element:d.jsx(a$,{})},{icon:t$,title:"Notifications",element:d.jsx(h$,{})},{icon:e$,title:"Management",element:d.jsx(l$,{})}],[e,n]=b.useState(0);return d.jsxs(jd,{children:[d.jsx(El,{}),d.jsxs(p$,{children:[d.jsxs(m$,{children:[d.jsx("h1",{children:"Account Settings"}),d.jsx("p",{children:"Change your profile and account settings."})]}),d.jsxs(g$,{children:[d.jsx(v$,{children:t.map((r,i)=>d.jsx(r$,{props:r,onClick:()=>n(i),selected:i===e},i))}),d.jsx(y$,{children:t[e].element})]})]})]})},w$=C.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
`,b$=C.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 20rem;
`,S$=()=>{const{projectId:t,projectInviteKey:e}=Ib(),n=Nt(),r=mn(),[i,o]=b.useState(null),[s,a]=b.useState(null),[l,c]=b.useState(0),f=async()=>{const p=await a4(n.value.id,t);p.error?a(p.error):r("/projects")},u=async()=>{r("/")},h=async()=>{a(null);const p=await t4(t,e);a(p.error),p.error||o(p.data)};return b.useEffect(()=>{c(l+1),!(l<1)&&(n.value.isAuthenticated?h():r("/sign/in"))},[n.value]),d.jsx(d.Fragment,{children:i===null?s?d.jsx(dt,{children:s.message}):d.jsx("h1",{children:"Loading"}):d.jsxs(w$,{children:[d.jsx("h3",{children:"You've been invited to join"}),d.jsx("h1",{children:i.projectName}),d.jsx("p",{children:i.projectDescription}),d.jsxs(b$,{children:[d.jsx(Ve,{config:{style:"secondary",inverted:!1},onClick:f,children:"Accept"}),d.jsx(Ve,{config:{style:"danger",inverted:!1},onClick:u,children:"Reject"})]})]})})},C$=()=>{const e=_2([{path:"/",element:d.jsx(G4,{})},{path:"/sign/in",element:d.jsx(nD,{})},{path:"/sign/up",element:d.jsx(rD,{})},{path:"/projects",element:d.jsx(_D,{})},{path:"/editor/:id",element:d.jsx(Q7,{})},{path:"/account",element:d.jsx(_$,{})},{path:"/invite/:projectId/:projectInviteKey",element:d.jsx(S$,{})},{path:"*",element:d.jsx(q4,{})}]);return d.jsx("div",{className:"App",children:d.jsx(WR,{children:d.jsx(U4,{children:d.jsx(m2,{router:e})})})})},x$={colors:{primary:"var(--ink-blue-main)",secondary:"var(--ink-turquoise-green-main)",lightBackground:"var(--ink-grey-light)",midBackground:"var(--ink-grey-medium)",darkBackground:"var(--ink-grey-dark)",text:"var(--ink-grey-lightest)",primaryText:"var(--ink-blue-main)",secondaryText:"var(--ink-turquoise-green-main)",darkText:"var(--ink-grey-darkest)",transparent:"transparent"},fonts:{primary:"var(--ink-font-family-base)",secondary:"var(--ink-font-family-desc)"},paddings:{navbarPadding:{x:"1rem",y:"0.5rem"},buttonPadding:{x:"1rem",y:"0.5rem"}},margins:{},transitions:{duration:"0.2s",easing:"ease-in-out"}},E$=TR`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    
    html {
        font-size: 100%;
    }
    
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        //min-height: 100vh;
        text-rendering: optimizeSpeed;
        font-family: ${({theme:t})=>t.fonts.primary}, sans-serif;
        font-size: 1rem;
        color: ${({theme:t})=>t.colors.text};
        background-color: ${({theme:t})=>t.colors.midBackground};
        line-height: 1;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    figure,
    blockquote,
    dl,
    dd {
        padding: 0;
        margin: 0;
    }
    button {
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        
      font-family: inherit;
      color: inherit;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }
    li {
        list-style-type: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }
    
    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
    
    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    
    // Custom preset styles
    h1 {
        font-size: 3.5em;
        font-weight: 800;
        margin-bottom: 0.25em;
    }
    
    h2 {
        font-weight: 100;
        font-size: 1.5em;
        margin-bottom: 0.15em;
    }
`;uh.createRoot(document.getElementById("root")).render(d.jsxs(xR,{theme:x$,children:[d.jsx(E$,{}),d.jsx(C$,{})]}));
