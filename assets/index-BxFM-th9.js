(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))l(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const N of w.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&l(N)}).observe(document,{childList:!0,subtree:!0});function c(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function l(m){if(m.ep)return;m.ep=!0;const w=c(m);fetch(m.href,w)}})();function Sm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ks={exports:{}},ro={},Xs={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function Nm(){if(jd)return oe;jd=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),U=Symbol.iterator;function J(x){return x===null||typeof x!="object"?null:(x=U&&x[U]||x["@@iterator"],typeof x=="function"?x:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,W={};function Q(x,b,ee){this.props=x,this.context=b,this.refs=W,this.updater=ee||le}Q.prototype.isReactComponent={},Q.prototype.setState=function(x,b){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,b,"setState")},Q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function xe(){}xe.prototype=Q.prototype;function de(x,b,ee){this.props=x,this.context=b,this.refs=W,this.updater=ee||le}var ne=de.prototype=new xe;ne.constructor=de,X(ne,Q.prototype),ne.isPureReactComponent=!0;var T=Array.isArray,Z=Object.prototype.hasOwnProperty,H={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function F(x,b,ee){var te,se={},ie=null,pe=null;if(b!=null)for(te in b.ref!==void 0&&(pe=b.ref),b.key!==void 0&&(ie=""+b.key),b)Z.call(b,te)&&!E.hasOwnProperty(te)&&(se[te]=b[te]);var ue=arguments.length-2;if(ue===1)se.children=ee;else if(1<ue){for(var ge=Array(ue),_e=0;_e<ue;_e++)ge[_e]=arguments[_e+2];se.children=ge}if(x&&x.defaultProps)for(te in ue=x.defaultProps,ue)se[te]===void 0&&(se[te]=ue[te]);return{$$typeof:o,type:x,key:ie,ref:pe,props:se,_owner:H.current}}function ye(x,b){return{$$typeof:o,type:x.type,key:b,ref:x.ref,props:x.props,_owner:x._owner}}function Le(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function ae(x){var b={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ee){return b[ee]})}var ze=/\/+/g;function Ne(x,b){return typeof x=="object"&&x!==null&&x.key!=null?ae(""+x.key):b.toString(36)}function $e(x,b,ee,te,se){var ie=typeof x;(ie==="undefined"||ie==="boolean")&&(x=null);var pe=!1;if(x===null)pe=!0;else switch(ie){case"string":case"number":pe=!0;break;case"object":switch(x.$$typeof){case o:case u:pe=!0}}if(pe)return pe=x,se=se(pe),x=te===""?"."+Ne(pe,0):te,T(se)?(ee="",x!=null&&(ee=x.replace(ze,"$&/")+"/"),$e(se,b,ee,"",function(_e){return _e})):se!=null&&(Le(se)&&(se=ye(se,ee+(!se.key||pe&&pe.key===se.key?"":(""+se.key).replace(ze,"$&/")+"/")+x)),b.push(se)),1;if(pe=0,te=te===""?".":te+":",T(x))for(var ue=0;ue<x.length;ue++){ie=x[ue];var ge=te+Ne(ie,ue);pe+=$e(ie,b,ee,ge,se)}else if(ge=J(x),typeof ge=="function")for(x=ge.call(x),ue=0;!(ie=x.next()).done;)ie=ie.value,ge=te+Ne(ie,ue++),pe+=$e(ie,b,ee,ge,se);else if(ie==="object")throw b=String(x),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return pe}function Xe(x,b,ee){if(x==null)return x;var te=[],se=0;return $e(x,te,"","",function(ie){return b.call(ee,ie,se++)}),te}function Ve(x){if(x._status===-1){var b=x._result;b=b(),b.then(function(ee){(x._status===0||x._status===-1)&&(x._status=1,x._result=ee)},function(ee){(x._status===0||x._status===-1)&&(x._status=2,x._result=ee)}),x._status===-1&&(x._status=0,x._result=b)}if(x._status===1)return x._result.default;throw x._result}var we={current:null},P={transition:null},B={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:P,ReactCurrentOwner:H};function L(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:Xe,forEach:function(x,b,ee){Xe(x,function(){b.apply(this,arguments)},ee)},count:function(x){var b=0;return Xe(x,function(){b++}),b},toArray:function(x){return Xe(x,function(b){return b})||[]},only:function(x){if(!Le(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},oe.Component=Q,oe.Fragment=c,oe.Profiler=m,oe.PureComponent=de,oe.StrictMode=l,oe.Suspense=_,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,oe.act=L,oe.cloneElement=function(x,b,ee){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var te=X({},x.props),se=x.key,ie=x.ref,pe=x._owner;if(b!=null){if(b.ref!==void 0&&(ie=b.ref,pe=H.current),b.key!==void 0&&(se=""+b.key),x.type&&x.type.defaultProps)var ue=x.type.defaultProps;for(ge in b)Z.call(b,ge)&&!E.hasOwnProperty(ge)&&(te[ge]=b[ge]===void 0&&ue!==void 0?ue[ge]:b[ge])}var ge=arguments.length-2;if(ge===1)te.children=ee;else if(1<ge){ue=Array(ge);for(var _e=0;_e<ge;_e++)ue[_e]=arguments[_e+2];te.children=ue}return{$$typeof:o,type:x.type,key:se,ref:ie,props:te,_owner:pe}},oe.createContext=function(x){return x={$$typeof:N,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:w,_context:x},x.Consumer=x},oe.createElement=F,oe.createFactory=function(x){var b=F.bind(null,x);return b.type=x,b},oe.createRef=function(){return{current:null}},oe.forwardRef=function(x){return{$$typeof:z,render:x}},oe.isValidElement=Le,oe.lazy=function(x){return{$$typeof:G,_payload:{_status:-1,_result:x},_init:Ve}},oe.memo=function(x,b){return{$$typeof:K,type:x,compare:b===void 0?null:b}},oe.startTransition=function(x){var b=P.transition;P.transition={};try{x()}finally{P.transition=b}},oe.unstable_act=L,oe.useCallback=function(x,b){return we.current.useCallback(x,b)},oe.useContext=function(x){return we.current.useContext(x)},oe.useDebugValue=function(){},oe.useDeferredValue=function(x){return we.current.useDeferredValue(x)},oe.useEffect=function(x,b){return we.current.useEffect(x,b)},oe.useId=function(){return we.current.useId()},oe.useImperativeHandle=function(x,b,ee){return we.current.useImperativeHandle(x,b,ee)},oe.useInsertionEffect=function(x,b){return we.current.useInsertionEffect(x,b)},oe.useLayoutEffect=function(x,b){return we.current.useLayoutEffect(x,b)},oe.useMemo=function(x,b){return we.current.useMemo(x,b)},oe.useReducer=function(x,b,ee){return we.current.useReducer(x,b,ee)},oe.useRef=function(x){return we.current.useRef(x)},oe.useState=function(x){return we.current.useState(x)},oe.useSyncExternalStore=function(x,b,ee){return we.current.useSyncExternalStore(x,b,ee)},oe.useTransition=function(){return we.current.useTransition()},oe.version="18.3.1",oe}var Sd;function xl(){return Sd||(Sd=1,Xs.exports=Nm()),Xs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd;function Cm(){if(Nd)return ro;Nd=1;var o=xl(),u=Symbol.for("react.element"),c=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,m=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function N(z,_,K){var G,U={},J=null,le=null;K!==void 0&&(J=""+K),_.key!==void 0&&(J=""+_.key),_.ref!==void 0&&(le=_.ref);for(G in _)l.call(_,G)&&!w.hasOwnProperty(G)&&(U[G]=_[G]);if(z&&z.defaultProps)for(G in _=z.defaultProps,_)U[G]===void 0&&(U[G]=_[G]);return{$$typeof:u,type:z,key:J,ref:le,props:U,_owner:m.current}}return ro.Fragment=c,ro.jsx=N,ro.jsxs=N,ro}var Cd;function _m(){return Cd||(Cd=1,Ks.exports=Cm()),Ks.exports}var s=_m(),bi={},Zs={exports:{}},at={},Js={exports:{}},el={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function Pm(){return _d||(_d=1,(function(o){function u(P,B){var L=P.length;P.push(B);e:for(;0<L;){var x=L-1>>>1,b=P[x];if(0<m(b,B))P[x]=B,P[L]=b,L=x;else break e}}function c(P){return P.length===0?null:P[0]}function l(P){if(P.length===0)return null;var B=P[0],L=P.pop();if(L!==B){P[0]=L;e:for(var x=0,b=P.length,ee=b>>>1;x<ee;){var te=2*(x+1)-1,se=P[te],ie=te+1,pe=P[ie];if(0>m(se,L))ie<b&&0>m(pe,se)?(P[x]=pe,P[ie]=L,x=ie):(P[x]=se,P[te]=L,x=te);else if(ie<b&&0>m(pe,L))P[x]=pe,P[ie]=L,x=ie;else break e}}return B}function m(P,B){var L=P.sortIndex-B.sortIndex;return L!==0?L:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;o.unstable_now=function(){return w.now()}}else{var N=Date,z=N.now();o.unstable_now=function(){return N.now()-z}}var _=[],K=[],G=1,U=null,J=3,le=!1,X=!1,W=!1,Q=typeof setTimeout=="function"?setTimeout:null,xe=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(P){for(var B=c(K);B!==null;){if(B.callback===null)l(K);else if(B.startTime<=P)l(K),B.sortIndex=B.expirationTime,u(_,B);else break;B=c(K)}}function T(P){if(W=!1,ne(P),!X)if(c(_)!==null)X=!0,Ve(Z);else{var B=c(K);B!==null&&we(T,B.startTime-P)}}function Z(P,B){X=!1,W&&(W=!1,xe(F),F=-1),le=!0;var L=J;try{for(ne(B),U=c(_);U!==null&&(!(U.expirationTime>B)||P&&!ae());){var x=U.callback;if(typeof x=="function"){U.callback=null,J=U.priorityLevel;var b=x(U.expirationTime<=B);B=o.unstable_now(),typeof b=="function"?U.callback=b:U===c(_)&&l(_),ne(B)}else l(_);U=c(_)}if(U!==null)var ee=!0;else{var te=c(K);te!==null&&we(T,te.startTime-B),ee=!1}return ee}finally{U=null,J=L,le=!1}}var H=!1,E=null,F=-1,ye=5,Le=-1;function ae(){return!(o.unstable_now()-Le<ye)}function ze(){if(E!==null){var P=o.unstable_now();Le=P;var B=!0;try{B=E(!0,P)}finally{B?Ne():(H=!1,E=null)}}else H=!1}var Ne;if(typeof de=="function")Ne=function(){de(ze)};else if(typeof MessageChannel!="undefined"){var $e=new MessageChannel,Xe=$e.port2;$e.port1.onmessage=ze,Ne=function(){Xe.postMessage(null)}}else Ne=function(){Q(ze,0)};function Ve(P){E=P,H||(H=!0,Ne())}function we(P,B){F=Q(function(){P(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_continueExecution=function(){X||le||(X=!0,Ve(Z))},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return J},o.unstable_getFirstCallbackNode=function(){return c(_)},o.unstable_next=function(P){switch(J){case 1:case 2:case 3:var B=3;break;default:B=J}var L=J;J=B;try{return P()}finally{J=L}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=J;J=P;try{return B()}finally{J=L}},o.unstable_scheduleCallback=function(P,B,L){var x=o.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?x+L:x):L=x,P){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=L+b,P={id:G++,callback:B,priorityLevel:P,startTime:L,expirationTime:b,sortIndex:-1},L>x?(P.sortIndex=L,u(K,P),c(_)===null&&P===c(K)&&(W?(xe(F),F=-1):W=!0,we(T,L-x))):(P.sortIndex=b,u(_,P),X||le||(X=!0,Ve(Z))),P},o.unstable_shouldYield=ae,o.unstable_wrapCallback=function(P){var B=J;return function(){var L=J;J=B;try{return P.apply(this,arguments)}finally{J=L}}}})(el)),el}var Pd;function Em(){return Pd||(Pd=1,Js.exports=Pm()),Js.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function zm(){if(Ed)return at;Ed=1;var o=xl(),u=Em();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,m={};function w(e,t){N(e,t),N(e+"Capture",t)}function N(e,t){for(m[e]=t,e=0;e<t.length;e++)l.add(t[e])}var z=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),_=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},U={};function J(e){return _.call(U,e)?!0:_.call(G,e)?!1:K.test(e)?U[e]=!0:(G[e]=!0,!1)}function le(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,r,n){if(t===null||typeof t=="undefined"||le(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,r,n,i,a,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=d}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var xe=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xe,de);Q[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xe,de);Q[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xe,de);Q[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,r,n){var i=Q.hasOwnProperty(t)?Q[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,r,i,n)&&(r=null),n||i===null?J(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var T=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),H=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),ae=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),P=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,x;function b(e){if(x===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var ee=!1;function te(e,t){if(!e||ee)return"";ee=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var n=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){n=y}e.call(t.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),a=n.stack.split(`
`),d=i.length-1,p=a.length-1;1<=d&&0<=p&&i[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==a[p]){var f=`
`+i[d].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=d&&0<=p);break}}}finally{ee=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?b(e):""}function se(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case H:return"Portal";case ye:return"Profiler";case F:return"StrictMode";case Ne:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case ze:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xe:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _e(e){var t=ge(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,a.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qt(e){e._valueTracker||(e._valueTracker=_e(e))}function vr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ge(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function jt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function na(e,t){var r=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function zl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ue(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tl(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function oa(e,t){Tl(e,t);var r=ue(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ia(e,t.type,r):t.hasOwnProperty("defaultValue")&&ia(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ll(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ia(e,t,r){(t!=="number"||jt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var gn=Array.isArray;function Fr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ue(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function aa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Il(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(gn(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ue(r)}}function Ol(e,t){var r=ue(t.value),n=ue(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Rl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Al(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Al(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,Ml=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_p=["Webkit","ms","Moz","O"];Object.keys(yn).forEach(function(e){_p.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yn[t]=yn[e]})});function Fl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||yn.hasOwnProperty(e)&&yn[e]?(""+t).trim():t+"px"}function Dl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Fl(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Pp=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function ca(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=null;function da(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,Dr=null,Br=null;function Bl(e){if(e=Un(e)){if(typeof pa!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Ao(t),pa(e.stateNode,e.type,t))}}function Ul(e){Dr?Br?Br.push(e):Br=[e]:Dr=e}function Wl(){if(Dr){var e=Dr,t=Br;if(Br=Dr=null,Bl(e),t)for(e=0;e<t.length;e++)Bl(t[e])}}function Hl(e,t){return e(t)}function Yl(){}var fa=!1;function $l(e,t,r){if(fa)return e(t,r);fa=!0;try{return Hl(e,t,r)}finally{fa=!1,(Dr!==null||Br!==null)&&(Yl(),Wl())}}function wn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ao(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var ma=!1;if(z)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){ma=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{ma=!1}function Ep(e,t,r,n,i,a,d,p,f){var y=Array.prototype.slice.call(arguments,3);try{t.apply(r,y)}catch(j){this.onError(j)}}var kn=!1,mo=null,ho=!1,ha=null,zp={onError:function(e){kn=!0,mo=e}};function Tp(e,t,r,n,i,a,d,p,f){kn=!1,mo=null,Ep.apply(zp,arguments)}function Lp(e,t,r,n,i,a,d,p,f){if(Tp.apply(this,arguments),kn){if(kn){var y=mo;kn=!1,mo=null}else throw Error(c(198));ho||(ho=!0,ha=y)}}function yr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Vl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gl(e){if(yr(e)!==e)throw Error(c(188))}function Ip(e){var t=e.alternate;if(!t){if(t=yr(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Gl(i),e;if(a===n)return Gl(i),t;a=a.sibling}throw Error(c(188))}if(r.return!==n.return)r=i,n=a;else{for(var d=!1,p=i.child;p;){if(p===r){d=!0,r=i,n=a;break}if(p===n){d=!0,n=i,r=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===r){d=!0,r=a,n=i;break}if(p===n){d=!0,n=a,r=i;break}p=p.sibling}if(!d)throw Error(c(189))}}if(r.alternate!==n)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function Ql(e){return e=Ip(e),e!==null?ql(e):null}function ql(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ql(e);if(t!==null)return t;e=e.sibling}return null}var Kl=u.unstable_scheduleCallback,Xl=u.unstable_cancelCallback,Op=u.unstable_shouldYield,Rp=u.unstable_requestPaint,Ie=u.unstable_now,Ap=u.unstable_getCurrentPriorityLevel,xa=u.unstable_ImmediatePriority,Zl=u.unstable_UserBlockingPriority,xo=u.unstable_NormalPriority,Mp=u.unstable_LowPriority,Jl=u.unstable_IdlePriority,go=null,It=null;function Fp(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Up,Dp=Math.log,Bp=Math.LN2;function Up(e){return e>>>=0,e===0?32:31-(Dp(e)/Bp|0)|0}var vo=64,yo=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,d=r&268435455;if(d!==0){var p=d&~i;p!==0?n=jn(p):(a&=d,a!==0&&(n=jn(a)))}else d=r&~i,d!==0?n=jn(d):a!==0&&(n=jn(a));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-St(t),i=1<<r,n|=e[r],t&=~i;return n}function Wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-St(a),p=1<<d,f=i[d];f===-1?((p&r)===0||(p&n)!==0)&&(i[d]=Wp(p,t)):f<=t&&(e.expiredLanes|=p),a&=~p}}function ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ec(){var e=vo;return vo<<=1,(vo&4194240)===0&&(vo=64),e}function va(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Sn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=r}function Yp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-St(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function ya(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-St(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ve=0;function tc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var rc,wa,nc,oc,ic,ba=!1,bo=[],Kt=null,Xt=null,Zt=null,Nn=new Map,Cn=new Map,Jt=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ac(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function _n(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Un(t),t!==null&&wa(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vp(e,t,r,n,i){switch(t){case"focusin":return Kt=_n(Kt,e,t,r,n,i),!0;case"dragenter":return Xt=_n(Xt,e,t,r,n,i),!0;case"mouseover":return Zt=_n(Zt,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Nn.set(a,_n(Nn.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Cn.set(a,_n(Cn.get(a)||null,e,t,r,n,i)),!0}return!1}function sc(e){var t=wr(e.target);if(t!==null){var r=yr(t);if(r!==null){if(t=r.tag,t===13){if(t=Vl(r),t!==null){e.blockedOn=t,ic(e.priority,function(){nc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ua=n,r.target.dispatchEvent(n),ua=null}else return t=Un(r),t!==null&&wa(t),e.blockedOn=r,!1;t.shift()}return!0}function lc(e,t,r){ko(e)&&r.delete(t)}function Gp(){ba=!1,Kt!==null&&ko(Kt)&&(Kt=null),Xt!==null&&ko(Xt)&&(Xt=null),Zt!==null&&ko(Zt)&&(Zt=null),Nn.forEach(lc),Cn.forEach(lc)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,ba||(ba=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Gp)))}function En(e){function t(i){return Pn(i,e)}if(0<bo.length){Pn(bo[0],e);for(var r=1;r<bo.length;r++){var n=bo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Kt!==null&&Pn(Kt,e),Xt!==null&&Pn(Xt,e),Zt!==null&&Pn(Zt,e),Nn.forEach(t),Cn.forEach(t),r=0;r<Jt.length;r++)n=Jt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Jt.length&&(r=Jt[0],r.blockedOn===null);)sc(r),r.blockedOn===null&&Jt.shift()}var Ur=T.ReactCurrentBatchConfig,jo=!0;function Qp(e,t,r,n){var i=ve,a=Ur.transition;Ur.transition=null;try{ve=1,ka(e,t,r,n)}finally{ve=i,Ur.transition=a}}function qp(e,t,r,n){var i=ve,a=Ur.transition;Ur.transition=null;try{ve=4,ka(e,t,r,n)}finally{ve=i,Ur.transition=a}}function ka(e,t,r,n){if(jo){var i=ja(e,t,r,n);if(i===null)Ba(e,t,n,So,r),ac(e,n);else if(Vp(i,e,t,r,n))n.stopPropagation();else if(ac(e,n),t&4&&-1<$p.indexOf(e)){for(;i!==null;){var a=Un(i);if(a!==null&&rc(a),a=ja(e,t,r,n),a===null&&Ba(e,t,n,So,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else Ba(e,t,n,null,r)}}var So=null;function ja(e,t,r,n){if(So=null,e=da(n),e=wr(e),e!==null)if(t=yr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Vl(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return So=e,null}function cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ap()){case xa:return 1;case Zl:return 4;case xo:case Mp:return 16;case Jl:return 536870912;default:return 16}default:return 16}}var er=null,Sa=null,No=null;function uc(){if(No)return No;var e,t=Sa,r=t.length,n,i="value"in er?er.value:er.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var d=r-e;for(n=1;n<=d&&t[r-n]===i[a-n];n++);return No=i.slice(e,1<n?1-n:void 0)}function Co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function dc(){return!1}function ut(e){function t(r,n,i,a,d){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_o:dc,this.isPropagationStopped=dc,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Na=ut(Wr),zn=L({},Wr,{view:0,detail:0}),Kp=ut(zn),Ca,_a,Tn,Po=L({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ea,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(Ca=e.screenX-Tn.screenX,_a=e.screenY-Tn.screenY):_a=Ca=0,Tn=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:_a}}),pc=ut(Po),Xp=L({},Po,{dataTransfer:0}),Zp=ut(Xp),Jp=L({},zn,{relatedTarget:0}),Pa=ut(Jp),ef=L({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),tf=ut(ef),rf=L({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nf=ut(rf),of=L({},Wr,{data:0}),fc=ut(of),af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lf[e])?!!t[e]:!1}function Ea(){return cf}var uf=L({},zn,{key:function(e){if(e.key){var t=af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ea,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),df=ut(uf),pf=L({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=ut(pf),ff=L({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ea}),mf=ut(ff),hf=L({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=ut(hf),gf=L({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vf=ut(gf),yf=[9,13,27,32],za=z&&"CompositionEvent"in window,Ln=null;z&&"documentMode"in document&&(Ln=document.documentMode);var wf=z&&"TextEvent"in window&&!Ln,hc=z&&(!za||Ln&&8<Ln&&11>=Ln),xc=" ",gc=!1;function vc(e,t){switch(e){case"keyup":return yf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function bf(e,t){switch(e){case"compositionend":return yc(t);case"keypress":return t.which!==32?null:(gc=!0,xc);case"textInput":return e=t.data,e===xc&&gc?null:e;default:return null}}function kf(e,t){if(Hr)return e==="compositionend"||!za&&vc(e,t)?(e=uc(),No=Sa=er=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hc&&t.locale!=="ko"?null:t.data;default:return null}}var jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jf[e.type]:t==="textarea"}function bc(e,t,r,n){Ul(n),t=Io(t,"onChange"),0<t.length&&(r=new Na("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var In=null,On=null;function Sf(e){Dc(e,0)}function Eo(e){var t=Qr(e);if(vr(t))return e}function Nf(e,t){if(e==="change")return t}var kc=!1;if(z){var Ta;if(z){var La="oninput"in document;if(!La){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),La=typeof jc.oninput=="function"}Ta=La}else Ta=!1;kc=Ta&&(!document.documentMode||9<document.documentMode)}function Sc(){In&&(In.detachEvent("onpropertychange",Nc),On=In=null)}function Nc(e){if(e.propertyName==="value"&&Eo(On)){var t=[];bc(t,On,e,da(e)),$l(Sf,t)}}function Cf(e,t,r){e==="focusin"?(Sc(),In=t,On=r,In.attachEvent("onpropertychange",Nc)):e==="focusout"&&Sc()}function _f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(On)}function Pf(e,t){if(e==="click")return Eo(t)}function Ef(e,t){if(e==="input"||e==="change")return Eo(t)}function zf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:zf;function Rn(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!_.call(t,i)||!Nt(e[i],t[i]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,t){var r=Cc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Cc(r)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ec(){for(var e=window,t=jt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=jt(e.document)}return t}function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tf(e){var t=Ec(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Pc(r.ownerDocument.documentElement,r)){if(n!==null&&Ia(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=_c(r,a);var d=_c(r,n);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lf=z&&"documentMode"in document&&11>=document.documentMode,Yr=null,Oa=null,An=null,Ra=!1;function zc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ra||Yr==null||Yr!==jt(n)||(n=Yr,"selectionStart"in n&&Ia(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),An&&Rn(An,n)||(An=n,n=Io(Oa,"onSelect"),0<n.length&&(t=new Na("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Yr)))}function zo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var $r={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Aa={},Tc={};z&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function To(e){if(Aa[e])return Aa[e];if(!$r[e])return e;var t=$r[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Tc)return Aa[e]=t[r];return e}var Lc=To("animationend"),Ic=To("animationiteration"),Oc=To("animationstart"),Rc=To("transitionend"),Ac=new Map,Mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,t){Ac.set(e,t),w(t,[e])}for(var Ma=0;Ma<Mc.length;Ma++){var Fa=Mc[Ma],If=Fa.toLowerCase(),Of=Fa[0].toUpperCase()+Fa.slice(1);tr(If,"on"+Of)}tr(Lc,"onAnimationEnd"),tr(Ic,"onAnimationIteration"),tr(Oc,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Rc,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function Fc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Lp(n,t,void 0,e),e.currentTarget=null}function Dc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var d=n.length-1;0<=d;d--){var p=n[d],f=p.instance,y=p.currentTarget;if(p=p.listener,f!==a&&i.isPropagationStopped())break e;Fc(i,p,y),a=f}else for(d=0;d<n.length;d++){if(p=n[d],f=p.instance,y=p.currentTarget,p=p.listener,f!==a&&i.isPropagationStopped())break e;Fc(i,p,y),a=f}}}if(ho)throw e=ha,ho=!1,ha=null,e}function ke(e,t){var r=t[Va];r===void 0&&(r=t[Va]=new Set);var n=e+"__bubble";r.has(n)||(Bc(t,e,2,!1),r.add(n))}function Da(e,t,r){var n=0;t&&(n|=4),Bc(r,e,n,t)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[Lo]){e[Lo]=!0,l.forEach(function(r){r!=="selectionchange"&&(Rf.has(r)||Da(r,!1,e),Da(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lo]||(t[Lo]=!0,Da("selectionchange",!1,t))}}function Bc(e,t,r,n){switch(cc(t)){case 1:var i=Qp;break;case 4:i=qp;break;default:i=ka}r=i.bind(null,t,r,e),i=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ba(e,t,r,n,i){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var p=n.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=n.return;d!==null;){var f=d.tag;if((f===3||f===4)&&(f=d.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;d=d.return}for(;p!==null;){if(d=wr(p),d===null)return;if(f=d.tag,f===5||f===6){n=a=d;continue e}p=p.parentNode}}n=n.return}$l(function(){var y=a,j=da(r),S=[];e:{var k=Ac.get(e);if(k!==void 0){var I=Na,A=e;switch(e){case"keypress":if(Co(r)===0)break e;case"keydown":case"keyup":I=df;break;case"focusin":A="focus",I=Pa;break;case"focusout":A="blur",I=Pa;break;case"beforeblur":case"afterblur":I=Pa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=mf;break;case Lc:case Ic:case Oc:I=tf;break;case Rc:I=xf;break;case"scroll":I=Kp;break;case"wheel":I=vf;break;case"copy":case"cut":case"paste":I=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=mc}var M=(t&4)!==0,Oe=!M&&e==="scroll",g=M?k!==null?k+"Capture":null:k;M=[];for(var h=y,v;h!==null;){v=h;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=wn(h,g),C!=null&&M.push(Dn(h,C,v)))),Oe)break;h=h.return}0<M.length&&(k=new I(k,A,null,r,j),S.push({event:k,listeners:M}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",k&&r!==ua&&(A=r.relatedTarget||r.fromElement)&&(wr(A)||A[Ft]))break e;if((I||k)&&(k=j.window===j?j:(k=j.ownerDocument)?k.defaultView||k.parentWindow:window,I?(A=r.relatedTarget||r.toElement,I=y,A=A?wr(A):null,A!==null&&(Oe=yr(A),A!==Oe||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=y),I!==A)){if(M=pc,C="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(M=mc,C="onPointerLeave",g="onPointerEnter",h="pointer"),Oe=I==null?k:Qr(I),v=A==null?k:Qr(A),k=new M(C,h+"leave",I,r,j),k.target=Oe,k.relatedTarget=v,C=null,wr(j)===y&&(M=new M(g,h+"enter",A,r,j),M.target=v,M.relatedTarget=Oe,C=M),Oe=C,I&&A)t:{for(M=I,g=A,h=0,v=M;v;v=Vr(v))h++;for(v=0,C=g;C;C=Vr(C))v++;for(;0<h-v;)M=Vr(M),h--;for(;0<v-h;)g=Vr(g),v--;for(;h--;){if(M===g||g!==null&&M===g.alternate)break t;M=Vr(M),g=Vr(g)}M=null}else M=null;I!==null&&Uc(S,k,I,M,!1),A!==null&&Oe!==null&&Uc(S,Oe,A,M,!0)}}e:{if(k=y?Qr(y):window,I=k.nodeName&&k.nodeName.toLowerCase(),I==="select"||I==="input"&&k.type==="file")var D=Nf;else if(wc(k))if(kc)D=Ef;else{D=_f;var Y=Cf}else(I=k.nodeName)&&I.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(D=Pf);if(D&&(D=D(e,y))){bc(S,D,r,j);break e}Y&&Y(e,k,y),e==="focusout"&&(Y=k._wrapperState)&&Y.controlled&&k.type==="number"&&ia(k,"number",k.value)}switch(Y=y?Qr(y):window,e){case"focusin":(wc(Y)||Y.contentEditable==="true")&&(Yr=Y,Oa=y,An=null);break;case"focusout":An=Oa=Yr=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,zc(S,r,j);break;case"selectionchange":if(Lf)break;case"keydown":case"keyup":zc(S,r,j)}var $;if(za)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else Hr?vc(e,r)&&(q="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(q="onCompositionStart");q&&(hc&&r.locale!=="ko"&&(Hr||q!=="onCompositionStart"?q==="onCompositionEnd"&&Hr&&($=uc()):(er=j,Sa="value"in er?er.value:er.textContent,Hr=!0)),Y=Io(y,q),0<Y.length&&(q=new fc(q,e,null,r,j),S.push({event:q,listeners:Y}),$?q.data=$:($=yc(r),$!==null&&(q.data=$)))),($=wf?bf(e,r):kf(e,r))&&(y=Io(y,"onBeforeInput"),0<y.length&&(j=new fc("onBeforeInput","beforeinput",null,r,j),S.push({event:j,listeners:y}),j.data=$))}Dc(S,t)})}function Dn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Io(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=wn(e,r),a!=null&&n.unshift(Dn(e,a,i)),a=wn(e,t),a!=null&&n.push(Dn(e,a,i))),e=e.return}return n}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uc(e,t,r,n,i){for(var a=t._reactName,d=[];r!==null&&r!==n;){var p=r,f=p.alternate,y=p.stateNode;if(f!==null&&f===n)break;p.tag===5&&y!==null&&(p=y,i?(f=wn(r,a),f!=null&&d.unshift(Dn(r,f,p))):i||(f=wn(r,a),f!=null&&d.push(Dn(r,f,p)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var Af=/\r\n?/g,Mf=/\u0000|\uFFFD/g;function Wc(e){return(typeof e=="string"?e:""+e).replace(Af,`
`).replace(Mf,"")}function Oo(e,t,r){if(t=Wc(t),Wc(e)!==t&&r)throw Error(c(425))}function Ro(){}var Ua=null,Wa=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,Ff=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,Df=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc!="undefined"?function(e){return Hc.resolve(null).then(e).catch(Bf)}:Ya;function Bf(e){setTimeout(function(){throw e})}function $a(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),En(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);En(t)}function rr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Gr,Bn="__reactProps$"+Gr,Ft="__reactContainer$"+Gr,Va="__reactEvents$"+Gr,Uf="__reactListeners$"+Gr,Wf="__reactHandles$"+Gr;function wr(e){var t=e[Ot];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ft]||r[Ot]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Yc(e);e!==null;){if(r=e[Ot])return r;e=Yc(e)}return t}e=r,r=e.parentNode}return null}function Un(e){return e=e[Ot]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Ao(e){return e[Bn]||null}var Ga=[],qr=-1;function nr(e){return{current:e}}function je(e){0>qr||(e.current=Ga[qr],Ga[qr]=null,qr--)}function be(e,t){qr++,Ga[qr]=e.current,e.current=t}var or={},Ge=nr(or),tt=nr(!1),br=or;function Kr(e,t){var r=e.type.contextTypes;if(!r)return or;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function Mo(){je(tt),je(Ge)}function $c(e,t,r){if(Ge.current!==or)throw Error(c(168));be(Ge,t),be(tt,r)}function Vc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(c(108,pe(e)||"Unknown",i));return L({},r,n)}function Fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,br=Ge.current,be(Ge,e),be(tt,tt.current),!0}function Gc(e,t,r){var n=e.stateNode;if(!n)throw Error(c(169));r?(e=Vc(e,t,br),n.__reactInternalMemoizedMergedChildContext=e,je(tt),je(Ge),be(Ge,e)):je(tt),be(tt,r)}var Dt=null,Do=!1,Qa=!1;function Qc(e){Dt===null?Dt=[e]:Dt.push(e)}function Hf(e){Do=!0,Qc(e)}function ir(){if(!Qa&&Dt!==null){Qa=!0;var e=0,t=ve;try{var r=Dt;for(ve=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Dt=null,Do=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),Kl(xa,ir),i}finally{ve=t,Qa=!1}}return null}var Xr=[],Zr=0,Bo=null,Uo=0,xt=[],gt=0,kr=null,Bt=1,Ut="";function jr(e,t){Xr[Zr++]=Uo,Xr[Zr++]=Bo,Bo=e,Uo=t}function qc(e,t,r){xt[gt++]=Bt,xt[gt++]=Ut,xt[gt++]=kr,kr=e;var n=Bt;e=Ut;var i=32-St(n)-1;n&=~(1<<i),r+=1;var a=32-St(t)+i;if(30<a){var d=i-i%5;a=(n&(1<<d)-1).toString(32),n>>=d,i-=d,Bt=1<<32-St(t)+i|r<<i|n,Ut=a+e}else Bt=1<<a|r<<i|n,Ut=e}function qa(e){e.return!==null&&(jr(e,1),qc(e,1,0))}function Ka(e){for(;e===Bo;)Bo=Xr[--Zr],Xr[Zr]=null,Uo=Xr[--Zr],Xr[Zr]=null;for(;e===kr;)kr=xt[--gt],xt[gt]=null,Ut=xt[--gt],xt[gt]=null,Bt=xt[--gt],xt[gt]=null}var dt=null,pt=null,Ce=!1,Ct=null;function Kc(e,t){var r=bt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Xc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,pt=rr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=kr!==null?{id:Bt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=bt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dt=e,pt=null,!0):!1;default:return!1}}function Xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Za(e){if(Ce){var t=pt;if(t){var r=t;if(!Xc(e,t)){if(Xa(e))throw Error(c(418));t=rr(r.nextSibling);var n=dt;t&&Xc(e,t)?Kc(n,r):(e.flags=e.flags&-4097|2,Ce=!1,dt=e)}}else{if(Xa(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ce=!1,dt=e}}}function Zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Wo(e){if(e!==dt)return!1;if(!Ce)return Zc(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=pt)){if(Xa(e))throw Jc(),Error(c(418));for(;t;)Kc(e,t),t=rr(t.nextSibling)}if(Zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){pt=rr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=dt?rr(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=pt;e;)e=rr(e.nextSibling)}function Jr(){pt=dt=null,Ce=!1}function Ja(e){Ct===null?Ct=[e]:Ct.push(e)}var Yf=T.ReactCurrentBatchConfig;function Wn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var n=r.stateNode}if(!n)throw Error(c(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(d){var p=i.refs;d===null?delete p[a]:p[a]=d},t._stringRef=a,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Ho(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eu(e){var t=e._init;return t(e._payload)}function tu(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function r(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function n(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=fr(g,h),g.index=0,g.sibling=null,g}function a(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function p(g,h,v,C){return h===null||h.tag!==6?(h=Ys(v,g.mode,C),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v,C){var D=v.type;return D===E?j(g,h,v.props.children,C,v.key):h!==null&&(h.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ve&&eu(D)===h.type)?(C=i(h,v.props),C.ref=Wn(g,h,v),C.return=g,C):(C=fi(v.type,v.key,v.props,null,g.mode,C),C.ref=Wn(g,h,v),C.return=g,C)}function y(g,h,v,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=$s(v,g.mode,C),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function j(g,h,v,C,D){return h===null||h.tag!==7?(h=Tr(v,g.mode,C,D),h.return=g,h):(h=i(h,v),h.return=g,h)}function S(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ys(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Z:return v=fi(h.type,h.key,h.props,null,g.mode,v),v.ref=Wn(g,null,h),v.return=g,v;case H:return h=$s(h,g.mode,v),h.return=g,h;case Ve:var C=h._init;return S(g,C(h._payload),v)}if(gn(h)||B(h))return h=Tr(h,g.mode,v,null),h.return=g,h;Ho(g,h)}return null}function k(g,h,v,C){var D=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:p(g,h,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:return v.key===D?f(g,h,v,C):null;case H:return v.key===D?y(g,h,v,C):null;case Ve:return D=v._init,k(g,h,D(v._payload),C)}if(gn(v)||B(v))return D!==null?null:j(g,h,v,C,null);Ho(g,v)}return null}function I(g,h,v,C,D){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,p(h,g,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Z:return g=g.get(C.key===null?v:C.key)||null,f(h,g,C,D);case H:return g=g.get(C.key===null?v:C.key)||null,y(h,g,C,D);case Ve:var Y=C._init;return I(g,h,v,Y(C._payload),D)}if(gn(C)||B(C))return g=g.get(v)||null,j(h,g,C,D,null);Ho(h,C)}return null}function A(g,h,v,C){for(var D=null,Y=null,$=h,q=h=0,We=null;$!==null&&q<v.length;q++){$.index>q?(We=$,$=null):We=$.sibling;var me=k(g,$,v[q],C);if(me===null){$===null&&($=We);break}e&&$&&me.alternate===null&&t(g,$),h=a(me,h,q),Y===null?D=me:Y.sibling=me,Y=me,$=We}if(q===v.length)return r(g,$),Ce&&jr(g,q),D;if($===null){for(;q<v.length;q++)$=S(g,v[q],C),$!==null&&(h=a($,h,q),Y===null?D=$:Y.sibling=$,Y=$);return Ce&&jr(g,q),D}for($=n(g,$);q<v.length;q++)We=I($,g,q,v[q],C),We!==null&&(e&&We.alternate!==null&&$.delete(We.key===null?q:We.key),h=a(We,h,q),Y===null?D=We:Y.sibling=We,Y=We);return e&&$.forEach(function(mr){return t(g,mr)}),Ce&&jr(g,q),D}function M(g,h,v,C){var D=B(v);if(typeof D!="function")throw Error(c(150));if(v=D.call(v),v==null)throw Error(c(151));for(var Y=D=null,$=h,q=h=0,We=null,me=v.next();$!==null&&!me.done;q++,me=v.next()){$.index>q?(We=$,$=null):We=$.sibling;var mr=k(g,$,me.value,C);if(mr===null){$===null&&($=We);break}e&&$&&mr.alternate===null&&t(g,$),h=a(mr,h,q),Y===null?D=mr:Y.sibling=mr,Y=mr,$=We}if(me.done)return r(g,$),Ce&&jr(g,q),D;if($===null){for(;!me.done;q++,me=v.next())me=S(g,me.value,C),me!==null&&(h=a(me,h,q),Y===null?D=me:Y.sibling=me,Y=me);return Ce&&jr(g,q),D}for($=n(g,$);!me.done;q++,me=v.next())me=I($,g,q,me.value,C),me!==null&&(e&&me.alternate!==null&&$.delete(me.key===null?q:me.key),h=a(me,h,q),Y===null?D=me:Y.sibling=me,Y=me);return e&&$.forEach(function(jm){return t(g,jm)}),Ce&&jr(g,q),D}function Oe(g,h,v,C){if(typeof v=="object"&&v!==null&&v.type===E&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Z:e:{for(var D=v.key,Y=h;Y!==null;){if(Y.key===D){if(D=v.type,D===E){if(Y.tag===7){r(g,Y.sibling),h=i(Y,v.props.children),h.return=g,g=h;break e}}else if(Y.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Ve&&eu(D)===Y.type){r(g,Y.sibling),h=i(Y,v.props),h.ref=Wn(g,Y,v),h.return=g,g=h;break e}r(g,Y);break}else t(g,Y);Y=Y.sibling}v.type===E?(h=Tr(v.props.children,g.mode,C,v.key),h.return=g,g=h):(C=fi(v.type,v.key,v.props,null,g.mode,C),C.ref=Wn(g,h,v),C.return=g,g=C)}return d(g);case H:e:{for(Y=v.key;h!==null;){if(h.key===Y)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){r(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{r(g,h);break}else t(g,h);h=h.sibling}h=$s(v,g.mode,C),h.return=g,g=h}return d(g);case Ve:return Y=v._init,Oe(g,h,Y(v._payload),C)}if(gn(v))return A(g,h,v,C);if(B(v))return M(g,h,v,C);Ho(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(r(g,h.sibling),h=i(h,v),h.return=g,g=h):(r(g,h),h=Ys(v,g.mode,C),h.return=g,g=h),d(g)):r(g,h)}return Oe}var en=tu(!0),ru=tu(!1),Yo=nr(null),$o=null,tn=null,es=null;function ts(){es=tn=$o=null}function rs(e){var t=Yo.current;je(Yo),e._currentValue=t}function ns(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function rn(e,t){$o=e,es=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(nt=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(es!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if($o===null)throw Error(c(308));tn=e,$o.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Sr=null;function os(e){Sr===null?Sr=[e]:Sr.push(e)}function nu(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,os(t)):(r.next=i.next,i.next=r),t.interleaved=r,Wt(e,n)}function Wt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ar=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(fe&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Wt(e,r)}return i=n.interleaved,i===null?(t.next=t,os(n)):(t.next=i.next,i.next=t),n.interleaved=t,Wt(e,r)}function Vo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ya(e,r)}}function iu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=d:a=a.next=d,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Go(e,t,r,n){var i=e.updateQueue;ar=!1;var a=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,y=f.next;f.next=null,d===null?a=y:d.next=y,d=f;var j=e.alternate;j!==null&&(j=j.updateQueue,p=j.lastBaseUpdate,p!==d&&(p===null?j.firstBaseUpdate=y:p.next=y,j.lastBaseUpdate=f))}if(a!==null){var S=i.baseState;d=0,j=y=f=null,p=a;do{var k=p.lane,I=p.eventTime;if((n&k)===k){j!==null&&(j=j.next={eventTime:I,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var A=e,M=p;switch(k=t,I=r,M.tag){case 1:if(A=M.payload,typeof A=="function"){S=A.call(I,S,k);break e}S=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=M.payload,k=typeof A=="function"?A.call(I,S,k):A,k==null)break e;S=L({},S,k);break e;case 2:ar=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[p]:k.push(p))}else I={eventTime:I,lane:k,tag:p.tag,payload:p.payload,callback:p.callback,next:null},j===null?(y=j=I,f=S):j=j.next=I,d|=k;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;k=p,p=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(j===null&&(f=S),i.baseState=f,i.firstBaseUpdate=y,i.lastBaseUpdate=j,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);_r|=d,e.lanes=d,e.memoizedState=S}}function au(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(c(191,i));i.call(n)}}}var Hn={},Rt=nr(Hn),Yn=nr(Hn),$n=nr(Hn);function Nr(e){if(e===Hn)throw Error(c(174));return e}function as(e,t){switch(be($n,t),be(Yn,e),be(Rt,Hn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sa(t,e)}je(Rt),be(Rt,t)}function nn(){je(Rt),je(Yn),je($n)}function su(e){Nr($n.current);var t=Nr(Rt.current),r=sa(t,e.type);t!==r&&(be(Yn,e),be(Rt,r))}function ss(e){Yn.current===e&&(je(Rt),je(Yn))}var Pe=nr(0);function Qo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function cs(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var qo=T.ReactCurrentDispatcher,us=T.ReactCurrentBatchConfig,Cr=0,Ee=null,Me=null,Be=null,Ko=!1,Vn=!1,Gn=0,$f=0;function Qe(){throw Error(c(321))}function ds(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Nt(e[r],t[r]))return!1;return!0}function ps(e,t,r,n,i,a){if(Cr=a,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?qf:Kf,e=r(n,i),Vn){a=0;do{if(Vn=!1,Gn=0,25<=a)throw Error(c(301));a+=1,Be=Me=null,t.updateQueue=null,qo.current=Xf,e=r(n,i)}while(Vn)}if(qo.current=Jo,t=Me!==null&&Me.next!==null,Cr=0,Be=Me=Ee=null,Ko=!1,t)throw Error(c(300));return e}function fs(){var e=Gn!==0;return Gn=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ee.memoizedState=Be=e:Be=Be.next=e,Be}function yt(){if(Me===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Be===null?Ee.memoizedState:Be.next;if(t!==null)Be=t,Me=e;else{if(e===null)throw Error(c(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?Ee.memoizedState=Be=e:Be=Be.next=e}return Be}function Qn(e,t){return typeof t=="function"?t(e):t}function ms(e){var t=yt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var n=Me,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var d=i.next;i.next=a.next,a.next=d}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var p=d=null,f=null,y=a;do{var j=y.lane;if((Cr&j)===j)f!==null&&(f=f.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var S={lane:j,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};f===null?(p=f=S,d=n):f=f.next=S,Ee.lanes|=j,_r|=j}y=y.next}while(y!==null&&y!==a);f===null?d=n:f.next=p,Nt(n,t.memoizedState)||(nt=!0),t.memoizedState=n,t.baseState=d,t.baseQueue=f,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Ee.lanes|=a,_r|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function hs(e){var t=yt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var d=i=i.next;do a=e(a,d.action),d=d.next;while(d!==i);Nt(a,t.memoizedState)||(nt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function lu(){}function cu(e,t){var r=Ee,n=yt(),i=t(),a=!Nt(n.memoizedState,i);if(a&&(n.memoizedState=i,nt=!0),n=n.queue,xs(pu.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||Be!==null&&Be.memoizedState.tag&1){if(r.flags|=2048,qn(9,du.bind(null,r,n,i,t),void 0,null),Ue===null)throw Error(c(349));(Cr&30)!==0||uu(r,t,i)}return i}function uu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function du(e,t,r,n){t.value=r,t.getSnapshot=n,fu(t)&&mu(e)}function pu(e,t,r){return r(function(){fu(t)&&mu(e)})}function fu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Nt(e,r)}catch{return!0}}function mu(e){var t=Wt(e,1);t!==null&&zt(t,e,1,-1)}function hu(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=Qf.bind(null,Ee,e),[t.memoizedState,e]}function qn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function xu(){return yt().memoizedState}function Xo(e,t,r,n){var i=At();Ee.flags|=e,i.memoizedState=qn(1|t,r,void 0,n===void 0?null:n)}function Zo(e,t,r,n){var i=yt();n=n===void 0?null:n;var a=void 0;if(Me!==null){var d=Me.memoizedState;if(a=d.destroy,n!==null&&ds(n,d.deps)){i.memoizedState=qn(t,r,a,n);return}}Ee.flags|=e,i.memoizedState=qn(1|t,r,a,n)}function gu(e,t){return Xo(8390656,8,e,t)}function xs(e,t){return Zo(2048,8,e,t)}function vu(e,t){return Zo(4,2,e,t)}function yu(e,t){return Zo(4,4,e,t)}function wu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bu(e,t,r){return r=r!=null?r.concat([e]):null,Zo(4,4,wu.bind(null,t,e),r)}function gs(){}function ku(e,t){var r=yt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ds(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ju(e,t){var r=yt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ds(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Su(e,t,r){return(Cr&21)===0?(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=r):(Nt(r,t)||(r=ec(),Ee.lanes|=r,_r|=r,e.baseState=!0),t)}function Vf(e,t){var r=ve;ve=r!==0&&4>r?r:4,e(!0);var n=us.transition;us.transition={};try{e(!1),t()}finally{ve=r,us.transition=n}}function Nu(){return yt().memoizedState}function Gf(e,t,r){var n=dr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Cu(e))_u(t,r);else if(r=nu(e,t,r,n),r!==null){var i=Je();zt(r,e,n,i),Pu(r,t,n)}}function Qf(e,t,r){var n=dr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))_u(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var d=t.lastRenderedState,p=a(d,r);if(i.hasEagerState=!0,i.eagerState=p,Nt(p,d)){var f=t.interleaved;f===null?(i.next=i,os(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}r=nu(e,t,i,n),r!==null&&(i=Je(),zt(r,e,n,i),Pu(r,t,n))}}function Cu(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function _u(e,t){Vn=Ko=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Pu(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ya(e,r)}}var Jo={readContext:vt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},qf={readContext:vt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:gu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Xo(4194308,4,wu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xo(4,2,e,t)},useMemo:function(e,t){var r=At();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=At();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Gf.bind(null,Ee,e),[n.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:hu,useDebugValue:gs,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=hu(!1),t=e[0];return e=Vf.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ee,i=At();if(Ce){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),Ue===null)throw Error(c(349));(Cr&30)!==0||uu(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,gu(pu.bind(null,n,a,e),[e]),n.flags|=2048,qn(9,du.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=At(),t=Ue.identifierPrefix;if(Ce){var r=Ut,n=Bt;r=(n&~(1<<32-St(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Gn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=$f++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kf={readContext:vt,useCallback:ku,useContext:vt,useEffect:xs,useImperativeHandle:bu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:ju,useReducer:ms,useRef:xu,useState:function(){return ms(Qn)},useDebugValue:gs,useDeferredValue:function(e){var t=yt();return Su(t,Me.memoizedState,e)},useTransition:function(){var e=ms(Qn)[0],t=yt().memoizedState;return[e,t]},useMutableSource:lu,useSyncExternalStore:cu,useId:Nu,unstable_isNewReconciler:!1},Xf={readContext:vt,useCallback:ku,useContext:vt,useEffect:xs,useImperativeHandle:bu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:ju,useReducer:hs,useRef:xu,useState:function(){return hs(Qn)},useDebugValue:gs,useDeferredValue:function(e){var t=yt();return Me===null?t.memoizedState=e:Su(t,Me.memoizedState,e)},useTransition:function(){var e=hs(Qn)[0],t=yt().memoizedState;return[e,t]},useMutableSource:lu,useSyncExternalStore:cu,useId:Nu,unstable_isNewReconciler:!1};function _t(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function vs(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:L({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ei={isMounted:function(e){return(e=e._reactInternals)?yr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Je(),i=dr(e),a=Ht(n,i);a.payload=t,r!=null&&(a.callback=r),t=sr(e,a,i),t!==null&&(zt(t,e,i,n),Vo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Je(),i=dr(e),a=Ht(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=sr(e,a,i),t!==null&&(zt(t,e,i,n),Vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Je(),n=dr(e),i=Ht(r,n);i.tag=2,t!=null&&(i.callback=t),t=sr(e,i,n),t!==null&&(zt(t,e,n,r),Vo(t,e,n))}};function Eu(e,t,r,n,i,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,d):t.prototype&&t.prototype.isPureReactComponent?!Rn(r,n)||!Rn(i,a):!0}function zu(e,t,r){var n=!1,i=or,a=t.contextType;return typeof a=="object"&&a!==null?a=vt(a):(i=rt(t)?br:Ge.current,n=t.contextTypes,a=(n=n!=null)?Kr(e,i):or),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ei,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Tu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ei.enqueueReplaceState(t,t.state,null)}function ys(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},is(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=vt(a):(a=rt(t)?br:Ge.current,i.context=Kr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(vs(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ei.enqueueReplaceState(i,i.state,null),Go(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var r="",n=t;do r+=se(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ws(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function bs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Zf=typeof WeakMap=="function"?WeakMap:Map;function Lu(e,t,r){r=Ht(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){si||(si=!0,As=n),bs(e,t)},r}function Iu(e,t,r){r=Ht(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){bs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){bs(e,t),typeof n!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function Ou(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Zf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=pm.bind(null,e,t,r),t.then(e,e))}function Ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Au(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ht(-1,1),t.tag=2,sr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Jf=T.ReactCurrentOwner,nt=!1;function Ze(e,t,r,n){t.child=e===null?ru(t,null,r,n):en(t,e.child,r,n)}function Mu(e,t,r,n,i){r=r.render;var a=t.ref;return rn(t,i),n=ps(e,t,r,n,a,i),r=fs(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(Ce&&r&&qa(t),t.flags|=1,Ze(e,t,n,i),t.child)}function Fu(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!Hs(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Du(e,t,a,n,i)):(e=fi(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var d=a.memoizedProps;if(r=r.compare,r=r!==null?r:Rn,r(d,n)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=fr(a,n),e.ref=t.ref,e.return=t,t.child=e}function Du(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Rn(a,n)&&e.ref===t.ref)if(nt=!1,t.pendingProps=n=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return ks(e,t,r,n,i)}function Bu(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(sn,ft),ft|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(sn,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,be(sn,ft),ft|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,be(sn,ft),ft|=n;return Ze(e,t,i,r),t.child}function Uu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ks(e,t,r,n,i){var a=rt(r)?br:Ge.current;return a=Kr(t,a),rn(t,i),r=ps(e,t,r,n,a,i),n=fs(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(Ce&&n&&qa(t),t.flags|=1,Ze(e,t,r,i),t.child)}function Wu(e,t,r,n,i){if(rt(r)){var a=!0;Fo(t)}else a=!1;if(rn(t,i),t.stateNode===null)ri(e,t),zu(t,r,n),ys(t,r,n,i),n=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var f=d.context,y=r.contextType;typeof y=="object"&&y!==null?y=vt(y):(y=rt(r)?br:Ge.current,y=Kr(t,y));var j=r.getDerivedStateFromProps,S=typeof j=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==n||f!==y)&&Tu(t,d,n,y),ar=!1;var k=t.memoizedState;d.state=k,Go(t,n,d,i),f=t.memoizedState,p!==n||k!==f||tt.current||ar?(typeof j=="function"&&(vs(t,r,j,n),f=t.memoizedState),(p=ar||Eu(t,r,p,n,k,f,y))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=f),d.props=n,d.state=f,d.context=y,n=p):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{d=t.stateNode,ou(e,t),p=t.memoizedProps,y=t.type===t.elementType?p:_t(t.type,p),d.props=y,S=t.pendingProps,k=d.context,f=r.contextType,typeof f=="object"&&f!==null?f=vt(f):(f=rt(r)?br:Ge.current,f=Kr(t,f));var I=r.getDerivedStateFromProps;(j=typeof I=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==S||k!==f)&&Tu(t,d,n,f),ar=!1,k=t.memoizedState,d.state=k,Go(t,n,d,i);var A=t.memoizedState;p!==S||k!==A||tt.current||ar?(typeof I=="function"&&(vs(t,r,I,n),A=t.memoizedState),(y=ar||Eu(t,r,y,n,k,A,f)||!1)?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,A,f),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,A,f)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=A),d.props=n,d.state=A,d.context=f,n=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),n=!1)}return js(e,t,r,n,a,i)}function js(e,t,r,n,i,a){Uu(e,t);var d=(t.flags&128)!==0;if(!n&&!d)return i&&Gc(t,r,!1),Yt(e,t,a);n=t.stateNode,Jf.current=t;var p=d&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&d?(t.child=en(t,e.child,null,a),t.child=en(t,null,p,a)):Ze(e,t,p,a),t.memoizedState=n.state,i&&Gc(t,r,!0),t.child}function Hu(e){var t=e.stateNode;t.pendingContext?$c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$c(e,t.context,!1),as(e,t.containerInfo)}function Yu(e,t,r,n,i){return Jr(),Ja(i),t.flags|=256,Ze(e,t,r,n),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function $u(e,t,r){var n=t.pendingProps,i=Pe.current,a=!1,d=(t.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Pe,i&1),e===null)return Za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=n.children,e=n.fallback,a?(n=t.mode,a=t.child,d={mode:"hidden",children:d},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=mi(d,n,0,null),e=Tr(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ns(r),t.memoizedState=Ss,e):Cs(t,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return em(e,t,d,n,p,i,r);if(a){a=n.fallback,d=t.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:n.children};return(d&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=f,t.deletions=null):(n=fr(i,f),n.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=fr(p,a):(a=Tr(a,d,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,d=e.child.memoizedState,d=d===null?Ns(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~r,t.memoizedState=Ss,n}return a=e.child,e=a.sibling,n=fr(a,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Cs(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ti(e,t,r,n){return n!==null&&Ja(n),en(t,e.child,null,r),e=Cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,r,n,i,a,d){if(r)return t.flags&256?(t.flags&=-257,n=ws(Error(c(422))),ti(e,t,d,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=mi({mode:"visible",children:n.children},i,0,null),a=Tr(a,i,d,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,(t.mode&1)!==0&&en(t,e.child,null,d),t.child.memoizedState=Ns(d),t.memoizedState=Ss,a);if((t.mode&1)===0)return ti(e,t,d,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var p=n.dgst;return n=p,a=Error(c(419)),n=ws(a,n,void 0),ti(e,t,d,n)}if(p=(d&e.childLanes)!==0,nt||p){if(n=Ue,n!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|d))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Wt(e,i),zt(n,e,i,-1))}return Ws(),n=ws(Error(c(421))),ti(e,t,d,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fm.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,pt=rr(i.nextSibling),dt=t,Ce=!0,Ct=null,e!==null&&(xt[gt++]=Bt,xt[gt++]=Ut,xt[gt++]=kr,Bt=e.id,Ut=e.overflow,kr=t),t=Cs(t,n.children),t.flags|=4096,t)}function Vu(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ns(e.return,t,r)}function _s(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Gu(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(Ze(e,t,n.children,r),n=Pe.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vu(e,r,t);else if(e.tag===19)Vu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(be(Pe,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Qo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),_s(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}_s(t,!0,r,null,a);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ri(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),_r|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=fr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=fr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function tm(e,t,r){switch(t.tag){case 3:Hu(t),Jr();break;case 5:su(t);break;case 1:rt(t.type)&&Fo(t);break;case 4:as(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;be(Yo,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(be(Pe,Pe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?$u(e,t,r):(be(Pe,Pe.current&1),e=Yt(e,t,r),e!==null?e.sibling:null);be(Pe,Pe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Gu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Pe,Pe.current),n)break;return null;case 22:case 23:return t.lanes=0,Bu(e,t,r)}return Yt(e,t,r)}var Qu,Ps,qu,Ku;Qu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ps=function(){},qu=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Nr(Rt.current);var a=null;switch(r){case"input":i=na(e,i),n=na(e,n),a=[];break;case"select":i=L({},i,{value:void 0}),n=L({},n,{value:void 0}),a=[];break;case"textarea":i=aa(e,i),n=aa(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ro)}la(r,n);var d;r=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var p=i[y];for(d in p)p.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?a||(a=[]):(a=a||[]).push(y,null));for(y in n){var f=n[y];if(p=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&f!==p&&(f!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||f&&f.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in f)f.hasOwnProperty(d)&&p[d]!==f[d]&&(r||(r={}),r[d]=f[d])}else r||(a||(a=[]),a.push(y,r)),r=f;else y==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(a=a||[]).push(y,f)):y==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(y,""+f):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(f!=null&&y==="onScroll"&&ke("scroll",e),a||p===f||(a=[])):(a=a||[]).push(y,f))}r&&(a=a||[]).push("style",r);var y=a;(t.updateQueue=y)&&(t.flags|=4)}},Ku=function(e,t,r,n){r!==n&&(t.flags|=4)};function Kn(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function rm(e,t,r){var n=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return rt(t.type)&&Mo(),qe(t),null;case 3:return n=t.stateNode,nn(),je(tt),je(Ge),cs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Ds(Ct),Ct=null))),Ps(e,t),qe(t),null;case 5:ss(t);var i=Nr($n.current);if(r=t.type,e!==null&&t.stateNode!=null)qu(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(c(166));return qe(t),null}if(e=Nr(Rt.current),Wo(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Ot]=t,n[Bn]=a,e=(t.mode&1)!==0,r){case"dialog":ke("cancel",n),ke("close",n);break;case"iframe":case"object":case"embed":ke("load",n);break;case"video":case"audio":for(i=0;i<Mn.length;i++)ke(Mn[i],n);break;case"source":ke("error",n);break;case"img":case"image":case"link":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"input":zl(n,a),ke("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},ke("invalid",n);break;case"textarea":Il(n,a),ke("invalid",n)}la(r,a),i=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?n.textContent!==p&&(a.suppressHydrationWarning!==!0&&Oo(n.textContent,p,e),i=["children",p]):typeof p=="number"&&n.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Oo(n.textContent,p,e),i=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&ke("scroll",n)}switch(r){case"input":qt(n),Ll(n,a,!0);break;case"textarea":qt(n),Rl(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Ro)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Al(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(r,{is:n.is}):(e=d.createElement(r),r==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,r),e[Ot]=t,e[Bn]=n,Qu(e,t,!1,!1),t.stateNode=e;e:{switch(d=ca(r,n),r){case"dialog":ke("cancel",e),ke("close",e),i=n;break;case"iframe":case"object":case"embed":ke("load",e),i=n;break;case"video":case"audio":for(i=0;i<Mn.length;i++)ke(Mn[i],e);i=n;break;case"source":ke("error",e),i=n;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=n;break;case"details":ke("toggle",e),i=n;break;case"input":zl(e,n),i=na(e,n),ke("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=L({},n,{value:void 0}),ke("invalid",e);break;case"textarea":Il(e,n),i=aa(e,n),ke("invalid",e);break;default:i=n}la(r,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var f=p[a];a==="style"?Dl(e,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Ml(e,f)):a==="children"?typeof f=="string"?(r!=="textarea"||f!=="")&&vn(e,f):typeof f=="number"&&vn(e,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(m.hasOwnProperty(a)?f!=null&&a==="onScroll"&&ke("scroll",e):f!=null&&ne(e,a,f,d))}switch(r){case"input":qt(e),Ll(e,n,!1);break;case"textarea":qt(e),Rl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ue(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Fr(e,!!n.multiple,a,!1):n.defaultValue!=null&&Fr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ro)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(r=Nr($n.current),Nr(Rt.current),Wo(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ot]=t,(a=n.nodeValue!==r)&&(e=dt,e!==null))switch(e.tag){case 3:Oo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oo(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ot]=t,t.stateNode=n}return qe(t),null;case 13:if(je(Pe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&pt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Jc(),Jr(),t.flags|=98560,a=!1;else if(a=Wo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[Ot]=t}else Jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),a=!1}else Ct!==null&&(Ds(Ct),Ct=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Fe===0&&(Fe=3):Ws())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return nn(),Ps(e,t),e===null&&Fn(t.stateNode.containerInfo),qe(t),null;case 10:return rs(t.type._context),qe(t),null;case 17:return rt(t.type)&&Mo(),qe(t),null;case 19:if(je(Pe),a=t.memoizedState,a===null)return qe(t),null;if(n=(t.flags&128)!==0,d=a.rendering,d===null)if(n)Kn(a,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Qo(e),d!==null){for(t.flags|=128,Kn(a,!1),n=d.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Pe,Pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ie()>ln&&(t.flags|=128,n=!0,Kn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Qo(d),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Kn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Ce)return qe(t),null}else 2*Ie()-a.renderingStartTime>ln&&r!==1073741824&&(t.flags|=128,n=!0,Kn(a,!1),t.lanes=4194304);a.isBackwards?(d.sibling=t.child,t.child=d):(r=a.last,r!==null?r.sibling=d:t.child=d,a.last=d)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ie(),t.sibling=null,r=Pe.current,be(Pe,n?r&1|2:r&1),t):(qe(t),null);case 22:case 23:return Us(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(ft&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function nm(e,t){switch(Ka(t),t.tag){case 1:return rt(t.type)&&Mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),je(tt),je(Ge),cs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ss(t),null;case 13:if(je(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Pe),null;case 4:return nn(),null;case 10:return rs(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var ni=!1,Ke=!1,om=typeof WeakSet=="function"?WeakSet:Set,O=null;function an(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Te(e,t,n)}else r.current=null}function Es(e,t,r){try{r()}catch(n){Te(e,t,n)}}var Xu=!1;function im(e,t){if(Ua=jo,e=Ec(),Ia(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var d=0,p=-1,f=-1,y=0,j=0,S=e,k=null;t:for(;;){for(var I;S!==r||i!==0&&S.nodeType!==3||(p=d+i),S!==a||n!==0&&S.nodeType!==3||(f=d+n),S.nodeType===3&&(d+=S.nodeValue.length),(I=S.firstChild)!==null;)k=S,S=I;for(;;){if(S===e)break t;if(k===r&&++y===i&&(p=d),k===a&&++j===n&&(f=d),(I=S.nextSibling)!==null)break;S=k,k=S.parentNode}S=I}r=p===-1||f===-1?null:{start:p,end:f}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wa={focusedElem:e,selectionRange:r},jo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var A=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var M=A.memoizedProps,Oe=A.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?M:_t(t.type,M),Oe);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(C){Te(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return A=Xu,Xu=!1,A}function Xn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Es(t,r,a)}i=i.next}while(i!==n)}}function oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function zs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Zu(e){var t=e.alternate;t!==null&&(e.alternate=null,Zu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Bn],delete t[Va],delete t[Uf],delete t[Wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ju(e){return e.tag===5||e.tag===3||e.tag===4}function ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ro));else if(n!==4&&(e=e.child,e!==null))for(Ts(e,t,r),e=e.sibling;e!==null;)Ts(e,t,r),e=e.sibling}function Ls(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ls(e,t,r),e=e.sibling;e!==null;)Ls(e,t,r),e=e.sibling}var He=null,Pt=!1;function lr(e,t,r){for(r=r.child;r!==null;)td(e,t,r),r=r.sibling}function td(e,t,r){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(go,r)}catch{}switch(r.tag){case 5:Ke||an(r,t);case 6:var n=He,i=Pt;He=null,lr(e,t,r),He=n,Pt=i,He!==null&&(Pt?(e=He,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):He.removeChild(r.stateNode));break;case 18:He!==null&&(Pt?(e=He,r=r.stateNode,e.nodeType===8?$a(e.parentNode,r):e.nodeType===1&&$a(e,r),En(e)):$a(He,r.stateNode));break;case 4:n=He,i=Pt,He=r.stateNode.containerInfo,Pt=!0,lr(e,t,r),He=n,Pt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&Es(r,t,d),i=i.next}while(i!==n)}lr(e,t,r);break;case 1:if(!Ke&&(an(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(p){Te(r,t,p)}lr(e,t,r);break;case 21:lr(e,t,r);break;case 22:r.mode&1?(Ke=(n=Ke)||r.memoizedState!==null,lr(e,t,r),Ke=n):lr(e,t,r);break;default:lr(e,t,r)}}function rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new om),t.forEach(function(n){var i=mm.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Et(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 5:He=p.stateNode,Pt=!1;break e;case 3:He=p.stateNode.containerInfo,Pt=!0;break e;case 4:He=p.stateNode.containerInfo,Pt=!0;break e}p=p.return}if(He===null)throw Error(c(160));td(a,d,i),He=null,Pt=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(y){Te(i,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nd(t,e),t=t.sibling}function nd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Mt(e),n&4){try{Xn(3,e,e.return),oi(3,e)}catch(M){Te(e,e.return,M)}try{Xn(5,e,e.return)}catch(M){Te(e,e.return,M)}}break;case 1:Et(t,e),Mt(e),n&512&&r!==null&&an(r,r.return);break;case 5:if(Et(t,e),Mt(e),n&512&&r!==null&&an(r,r.return),e.flags&32){var i=e.stateNode;try{vn(i,"")}catch(M){Te(e,e.return,M)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,d=r!==null?r.memoizedProps:a,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&Tl(i,a),ca(p,d);var y=ca(p,a);for(d=0;d<f.length;d+=2){var j=f[d],S=f[d+1];j==="style"?Dl(i,S):j==="dangerouslySetInnerHTML"?Ml(i,S):j==="children"?vn(i,S):ne(i,j,S,y)}switch(p){case"input":oa(i,a);break;case"textarea":Ol(i,a);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var I=a.value;I!=null?Fr(i,!!a.multiple,I,!1):k!==!!a.multiple&&(a.defaultValue!=null?Fr(i,!!a.multiple,a.defaultValue,!0):Fr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Bn]=a}catch(M){Te(e,e.return,M)}}break;case 6:if(Et(t,e),Mt(e),n&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(M){Te(e,e.return,M)}}break;case 3:if(Et(t,e),Mt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(M){Te(e,e.return,M)}break;case 4:Et(t,e),Mt(e);break;case 13:Et(t,e),Mt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Rs=Ie())),n&4&&rd(e);break;case 22:if(j=r!==null&&r.memoizedState!==null,e.mode&1?(Ke=(y=Ke)||j,Et(t,e),Ke=y):Et(t,e),Mt(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!j&&(e.mode&1)!==0)for(O=e,j=e.child;j!==null;){for(S=O=j;O!==null;){switch(k=O,I=k.child,k.tag){case 0:case 11:case 14:case 15:Xn(4,k,k.return);break;case 1:an(k,k.return);var A=k.stateNode;if(typeof A.componentWillUnmount=="function"){n=k,r=k.return;try{t=n,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(M){Te(n,r,M)}}break;case 5:an(k,k.return);break;case 22:if(k.memoizedState!==null){ad(S);continue}}I!==null?(I.return=k,O=I):ad(S)}j=j.sibling}e:for(j=null,S=e;;){if(S.tag===5){if(j===null){j=S;try{i=S.stateNode,y?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=S.stateNode,f=S.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=Fl("display",d))}catch(M){Te(e,e.return,M)}}}else if(S.tag===6){if(j===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(M){Te(e,e.return,M)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;j===S&&(j=null),S=S.return}j===S&&(j=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Et(t,e),Mt(e),n&4&&rd(e);break;case 21:break;default:Et(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ju(r)){var n=r;break e}r=r.return}throw Error(c(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(vn(i,""),n.flags&=-33);var a=ed(e);Ls(e,a,i);break;case 3:case 4:var d=n.stateNode.containerInfo,p=ed(e);Ts(e,p,d);break;default:throw Error(c(161))}}catch(f){Te(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function am(e,t,r){O=e,od(e)}function od(e,t,r){for(var n=(e.mode&1)!==0;O!==null;){var i=O,a=i.child;if(i.tag===22&&n){var d=i.memoizedState!==null||ni;if(!d){var p=i.alternate,f=p!==null&&p.memoizedState!==null||Ke;p=ni;var y=Ke;if(ni=d,(Ke=f)&&!y)for(O=i;O!==null;)d=O,f=d.child,d.tag===22&&d.memoizedState!==null?sd(i):f!==null?(f.return=d,O=f):sd(i);for(;a!==null;)O=a,od(a),a=a.sibling;O=i,ni=p,Ke=y}id(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,O=a):id(e)}}function id(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||oi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ke)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:_t(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&au(t,a,n);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}au(t,d,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&r.focus();break;case"img":f.src&&(r.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var j=y.memoizedState;if(j!==null){var S=j.dehydrated;S!==null&&En(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ke||t.flags&512&&zs(t)}catch(k){Te(t,t.return,k)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function ad(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function sd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{oi(4,t)}catch(f){Te(t,r,f)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(f){Te(t,i,f)}}var a=t.return;try{zs(t)}catch(f){Te(t,a,f)}break;case 5:var d=t.return;try{zs(t)}catch(f){Te(t,d,f)}}}catch(f){Te(t,t.return,f)}if(t===e){O=null;break}var p=t.sibling;if(p!==null){p.return=t.return,O=p;break}O=t.return}}var sm=Math.ceil,ii=T.ReactCurrentDispatcher,Is=T.ReactCurrentOwner,wt=T.ReactCurrentBatchConfig,fe=0,Ue=null,Re=null,Ye=0,ft=0,sn=nr(0),Fe=0,Zn=null,_r=0,ai=0,Os=0,Jn=null,ot=null,Rs=0,ln=1/0,$t=null,si=!1,As=null,cr=null,li=!1,ur=null,ci=0,eo=0,Ms=null,ui=-1,di=0;function Je(){return(fe&6)!==0?Ie():ui!==-1?ui:ui=Ie()}function dr(e){return(e.mode&1)===0?1:(fe&2)!==0&&Ye!==0?Ye&-Ye:Yf.transition!==null?(di===0&&(di=ec()),di):(e=ve,e!==0||(e=window.event,e=e===void 0?16:cc(e.type)),e)}function zt(e,t,r,n){if(50<eo)throw eo=0,Ms=null,Error(c(185));Sn(e,r,n),((fe&2)===0||e!==Ue)&&(e===Ue&&((fe&2)===0&&(ai|=r),Fe===4&&pr(e,Ye)),it(e,n),r===1&&fe===0&&(t.mode&1)===0&&(ln=Ie()+500,Do&&ir()))}function it(e,t){var r=e.callbackNode;Hp(e,t);var n=wo(e,e===Ue?Ye:0);if(n===0)r!==null&&Xl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Xl(r),t===1)e.tag===0?Hf(cd.bind(null,e)):Qc(cd.bind(null,e)),Df(function(){(fe&6)===0&&ir()}),r=null;else{switch(tc(n)){case 1:r=xa;break;case 4:r=Zl;break;case 16:r=xo;break;case 536870912:r=Jl;break;default:r=xo}r=gd(r,ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ld(e,t){if(ui=-1,di=0,(fe&6)!==0)throw Error(c(327));var r=e.callbackNode;if(cn()&&e.callbackNode!==r)return null;var n=wo(e,e===Ue?Ye:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=pi(e,n);else{t=n;var i=fe;fe|=2;var a=dd();(Ue!==e||Ye!==t)&&($t=null,ln=Ie()+500,Er(e,t));do try{um();break}catch(p){ud(e,p)}while(!0);ts(),ii.current=a,fe=i,Re!==null?t=0:(Ue=null,Ye=0,t=Fe)}if(t!==0){if(t===2&&(i=ga(e),i!==0&&(n=i,t=Fs(e,i))),t===1)throw r=Zn,Er(e,0),pr(e,n),it(e,Ie()),r;if(t===6)pr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!lm(i)&&(t=pi(e,n),t===2&&(a=ga(e),a!==0&&(n=a,t=Fs(e,a))),t===1))throw r=Zn,Er(e,0),pr(e,n),it(e,Ie()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(c(345));case 2:zr(e,ot,$t);break;case 3:if(pr(e,n),(n&130023424)===n&&(t=Rs+500-Ie(),10<t)){if(wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ya(zr.bind(null,e,ot,$t),t);break}zr(e,ot,$t);break;case 4:if(pr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var d=31-St(n);a=1<<d,d=t[d],d>i&&(i=d),n&=~a}if(n=i,n=Ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*sm(n/1960))-n,10<n){e.timeoutHandle=Ya(zr.bind(null,e,ot,$t),n);break}zr(e,ot,$t);break;case 5:zr(e,ot,$t);break;default:throw Error(c(329))}}}return it(e,Ie()),e.callbackNode===r?ld.bind(null,e):null}function Fs(e,t){var r=Jn;return e.current.memoizedState.isDehydrated&&(Er(e,t).flags|=256),e=pi(e,t),e!==2&&(t=ot,ot=r,t!==null&&Ds(t)),e}function Ds(e){ot===null?ot=e:ot.push.apply(ot,e)}function lm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Nt(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pr(e,t){for(t&=~Os,t&=~ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-St(t),n=1<<r;e[r]=-1,t&=~n}}function cd(e){if((fe&6)!==0)throw Error(c(327));cn();var t=wo(e,0);if((t&1)===0)return it(e,Ie()),null;var r=pi(e,t);if(e.tag!==0&&r===2){var n=ga(e);n!==0&&(t=n,r=Fs(e,n))}if(r===1)throw r=Zn,Er(e,0),pr(e,t),it(e,Ie()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,ot,$t),it(e,Ie()),null}function Bs(e,t){var r=fe;fe|=1;try{return e(t)}finally{fe=r,fe===0&&(ln=Ie()+500,Do&&ir())}}function Pr(e){ur!==null&&ur.tag===0&&(fe&6)===0&&cn();var t=fe;fe|=1;var r=wt.transition,n=ve;try{if(wt.transition=null,ve=1,e)return e()}finally{ve=n,wt.transition=r,fe=t,(fe&6)===0&&ir()}}function Us(){ft=sn.current,je(sn)}function Er(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ff(r)),Re!==null)for(r=Re.return;r!==null;){var n=r;switch(Ka(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Mo();break;case 3:nn(),je(tt),je(Ge),cs();break;case 5:ss(n);break;case 4:nn();break;case 13:je(Pe);break;case 19:je(Pe);break;case 10:rs(n.type._context);break;case 22:case 23:Us()}r=r.return}if(Ue=e,Re=e=fr(e.current,null),Ye=ft=t,Fe=0,Zn=null,Os=ai=_r=0,ot=Jn=null,Sr!==null){for(t=0;t<Sr.length;t++)if(r=Sr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var d=a.next;a.next=i,n.next=d}r.pending=n}Sr=null}return e}function ud(e,t){do{var r=Re;try{if(ts(),qo.current=Jo,Ko){for(var n=Ee.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ko=!1}if(Cr=0,Be=Me=Ee=null,Vn=!1,Gn=0,Is.current=null,r===null||r.return===null){Fe=1,Zn=t,Re=null;break}e:{var a=e,d=r.return,p=r,f=t;if(t=Ye,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=f,j=p,S=j.tag;if((j.mode&1)===0&&(S===0||S===11||S===15)){var k=j.alternate;k?(j.updateQueue=k.updateQueue,j.memoizedState=k.memoizedState,j.lanes=k.lanes):(j.updateQueue=null,j.memoizedState=null)}var I=Ru(d);if(I!==null){I.flags&=-257,Au(I,d,p,a,t),I.mode&1&&Ou(a,y,t),t=I,f=y;var A=t.updateQueue;if(A===null){var M=new Set;M.add(f),t.updateQueue=M}else A.add(f);break e}else{if((t&1)===0){Ou(a,y,t),Ws();break e}f=Error(c(426))}}else if(Ce&&p.mode&1){var Oe=Ru(d);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),Au(Oe,d,p,a,t),Ja(on(f,p));break e}}a=f=on(f,p),Fe!==4&&(Fe=2),Jn===null?Jn=[a]:Jn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Lu(a,f,t);iu(a,g);break e;case 1:p=f;var h=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=Iu(a,p,t);iu(a,C);break e}}a=a.return}while(a!==null)}fd(r)}catch(D){t=D,Re===r&&r!==null&&(Re=r=r.return);continue}break}while(!0)}function dd(){var e=ii.current;return ii.current=Jo,e===null?Jo:e}function Ws(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ue===null||(_r&268435455)===0&&(ai&268435455)===0||pr(Ue,Ye)}function pi(e,t){var r=fe;fe|=2;var n=dd();(Ue!==e||Ye!==t)&&($t=null,Er(e,t));do try{cm();break}catch(i){ud(e,i)}while(!0);if(ts(),fe=r,ii.current=n,Re!==null)throw Error(c(261));return Ue=null,Ye=0,Fe}function cm(){for(;Re!==null;)pd(Re)}function um(){for(;Re!==null&&!Op();)pd(Re)}function pd(e){var t=xd(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?fd(e):Re=t,Is.current=null}function fd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=rm(r,t,ft),r!==null){Re=r;return}}else{if(r=nm(r,t),r!==null){r.flags&=32767,Re=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Fe===0&&(Fe=5)}function zr(e,t,r){var n=ve,i=wt.transition;try{wt.transition=null,ve=1,dm(e,t,r,n)}finally{wt.transition=i,ve=n}return null}function dm(e,t,r,n){do cn();while(ur!==null);if((fe&6)!==0)throw Error(c(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Yp(e,a),e===Ue&&(Re=Ue=null,Ye=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||li||(li=!0,gd(xo,function(){return cn(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=wt.transition,wt.transition=null;var d=ve;ve=1;var p=fe;fe|=4,Is.current=null,im(e,r),nd(r,e),Tf(Wa),jo=!!Ua,Wa=Ua=null,e.current=r,am(r),Rp(),fe=p,ve=d,wt.transition=a}else e.current=r;if(li&&(li=!1,ur=e,ci=i),a=e.pendingLanes,a===0&&(cr=null),Fp(r.stateNode),it(e,Ie()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(si)throw si=!1,e=As,As=null,e;return(ci&1)!==0&&e.tag!==0&&cn(),a=e.pendingLanes,(a&1)!==0?e===Ms?eo++:(eo=0,Ms=e):eo=0,ir(),null}function cn(){if(ur!==null){var e=tc(ci),t=wt.transition,r=ve;try{if(wt.transition=null,ve=16>e?16:e,ur===null)var n=!1;else{if(e=ur,ur=null,ci=0,(fe&6)!==0)throw Error(c(331));var i=fe;for(fe|=4,O=e.current;O!==null;){var a=O,d=a.child;if((O.flags&16)!==0){var p=a.deletions;if(p!==null){for(var f=0;f<p.length;f++){var y=p[f];for(O=y;O!==null;){var j=O;switch(j.tag){case 0:case 11:case 15:Xn(8,j,a)}var S=j.child;if(S!==null)S.return=j,O=S;else for(;O!==null;){j=O;var k=j.sibling,I=j.return;if(Zu(j),j===y){O=null;break}if(k!==null){k.return=I,O=k;break}O=I}}}var A=a.alternate;if(A!==null){var M=A.child;if(M!==null){A.child=null;do{var Oe=M.sibling;M.sibling=null,M=Oe}while(M!==null)}}O=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,O=d;else e:for(;O!==null;){if(a=O,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Xn(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,O=g;break e}O=a.return}}var h=e.current;for(O=h;O!==null;){d=O;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,O=v;else e:for(d=h;O!==null;){if(p=O,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:oi(9,p)}}catch(D){Te(p,p.return,D)}if(p===d){O=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,O=C;break e}O=p.return}}if(fe=i,ir(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(go,e)}catch{}n=!0}return n}finally{ve=r,wt.transition=t}}return!1}function md(e,t,r){t=on(r,t),t=Lu(e,t,1),e=sr(e,t,1),t=Je(),e!==null&&(Sn(e,1,t),it(e,t))}function Te(e,t,r){if(e.tag===3)md(e,e,r);else for(;t!==null;){if(t.tag===3){md(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(cr===null||!cr.has(n))){e=on(r,e),e=Iu(t,e,1),t=sr(t,e,1),e=Je(),t!==null&&(Sn(t,1,e),it(t,e));break}}t=t.return}}function pm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&r,Ue===e&&(Ye&r)===r&&(Fe===4||Fe===3&&(Ye&130023424)===Ye&&500>Ie()-Rs?Er(e,0):Os|=r),it(e,t)}function hd(e,t){t===0&&((e.mode&1)===0?t=1:(t=yo,yo<<=1,(yo&130023424)===0&&(yo=4194304)));var r=Je();e=Wt(e,t),e!==null&&(Sn(e,t,r),it(e,r))}function fm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),hd(e,r)}function mm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(c(314))}n!==null&&n.delete(t),hd(e,r)}var xd;xd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)nt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return nt=!1,tm(e,t,r);nt=(e.flags&131072)!==0}else nt=!1,Ce&&(t.flags&1048576)!==0&&qc(t,Uo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ri(e,t),e=t.pendingProps;var i=Kr(t,Ge.current);rn(t,r),i=ps(null,t,n,e,i,r);var a=fs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(n)?(a=!0,Fo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,is(t),i.updater=ei,t.stateNode=i,i._reactInternals=t,ys(t,n,e,r),t=js(null,t,n,!0,a,r)):(t.tag=0,Ce&&a&&qa(t),Ze(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ri(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=xm(n),e=_t(n,e),i){case 0:t=ks(null,t,n,e,r);break e;case 1:t=Wu(null,t,n,e,r);break e;case 11:t=Mu(null,t,n,e,r);break e;case 14:t=Fu(null,t,n,_t(n.type,e),r);break e}throw Error(c(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:_t(n,i),ks(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:_t(n,i),Wu(e,t,n,i,r);case 3:e:{if(Hu(t),e===null)throw Error(c(387));n=t.pendingProps,a=t.memoizedState,i=a.element,ou(e,t),Go(t,n,null,r);var d=t.memoizedState;if(n=d.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=on(Error(c(423)),t),t=Yu(e,t,n,r,i);break e}else if(n!==i){i=on(Error(c(424)),t),t=Yu(e,t,n,r,i);break e}else for(pt=rr(t.stateNode.containerInfo.firstChild),dt=t,Ce=!0,Ct=null,r=ru(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Jr(),n===i){t=Yt(e,t,r);break e}Ze(e,t,n,r)}t=t.child}return t;case 5:return su(t),e===null&&Za(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,d=i.children,Ha(n,i)?d=null:a!==null&&Ha(n,a)&&(t.flags|=32),Uu(e,t),Ze(e,t,d,r),t.child;case 6:return e===null&&Za(t),null;case 13:return $u(e,t,r);case 4:return as(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=en(t,null,n,r):Ze(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:_t(n,i),Mu(e,t,n,i,r);case 7:return Ze(e,t,t.pendingProps,r),t.child;case 8:return Ze(e,t,t.pendingProps.children,r),t.child;case 12:return Ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,d=i.value,be(Yo,n._currentValue),n._currentValue=d,a!==null)if(Nt(a.value,d)){if(a.children===i.children&&!tt.current){t=Yt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var f=p.firstContext;f!==null;){if(f.context===n){if(a.tag===1){f=Ht(-1,r&-r),f.tag=2;var y=a.updateQueue;if(y!==null){y=y.shared;var j=y.pending;j===null?f.next=f:(f.next=j.next,j.next=f),y.pending=f}}a.lanes|=r,f=a.alternate,f!==null&&(f.lanes|=r),ns(a.return,r,t),p.lanes|=r;break}f=f.next}}else if(a.tag===10)d=a.type===t.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(c(341));d.lanes|=r,p=d.alternate,p!==null&&(p.lanes|=r),ns(d,r,t),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===t){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}Ze(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,rn(t,r),i=vt(i),n=n(i),t.flags|=1,Ze(e,t,n,r),t.child;case 14:return n=t.type,i=_t(n,t.pendingProps),i=_t(n.type,i),Fu(e,t,n,i,r);case 15:return Du(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:_t(n,i),ri(e,t),t.tag=1,rt(n)?(e=!0,Fo(t)):e=!1,rn(t,r),zu(t,n,i),ys(t,n,i,r),js(null,t,n,!0,e,r);case 19:return Gu(e,t,r);case 22:return Bu(e,t,r)}throw Error(c(156,t.tag))};function gd(e,t){return Kl(e,t)}function hm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,r,n){return new hm(e,t,r,n)}function Hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xm(e){if(typeof e=="function")return Hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ze)return 11;if(e===Xe)return 14}return 2}function fr(e,t){var r=e.alternate;return r===null?(r=bt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function fi(e,t,r,n,i,a){var d=2;if(n=e,typeof e=="function")Hs(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case E:return Tr(r.children,i,a,t);case F:d=8,i|=8;break;case ye:return e=bt(12,r,t,i|2),e.elementType=ye,e.lanes=a,e;case Ne:return e=bt(13,r,t,i),e.elementType=Ne,e.lanes=a,e;case $e:return e=bt(19,r,t,i),e.elementType=$e,e.lanes=a,e;case we:return mi(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:d=10;break e;case ae:d=9;break e;case ze:d=11;break e;case Xe:d=14;break e;case Ve:d=16,n=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=bt(d,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function Tr(e,t,r,n){return e=bt(7,e,n,t),e.lanes=r,e}function mi(e,t,r,n){return e=bt(22,e,n,t),e.elementType=we,e.lanes=r,e.stateNode={isHidden:!1},e}function Ys(e,t,r){return e=bt(6,e,null,t),e.lanes=r,e}function $s(e,t,r){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gm(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=va(0),this.expirationTimes=va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=va(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vs(e,t,r,n,i,a,d,p,f){return e=new gm(e,t,r,p,f),t===1?(t=1,a===!0&&(t|=8)):t=0,a=bt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},is(a),e}function vm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function vd(e){if(!e)return or;e=e._reactInternals;e:{if(yr(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(rt(r))return Vc(e,r,t)}return t}function yd(e,t,r,n,i,a,d,p,f){return e=Vs(r,n,!0,e,i,a,d,p,f),e.context=vd(null),r=e.current,n=Je(),i=dr(r),a=Ht(n,i),a.callback=t!=null?t:null,sr(r,a,i),e.current.lanes=i,Sn(e,i,n),it(e,n),e}function hi(e,t,r,n){var i=t.current,a=Je(),d=dr(i);return r=vd(r),t.context===null?t.context=r:t.pendingContext=r,t=Ht(a,d),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=sr(i,t,d),e!==null&&(zt(e,i,d,a),Vo(e,i,d)),d}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Gs(e,t){wd(e,t),(e=e.alternate)&&wd(e,t)}function ym(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qs(e){this._internalRoot=e}gi.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));hi(e,t,null,null)},gi.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pr(function(){hi(null,e,null,null)}),t[Ft]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=oc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Jt.length&&t!==0&&t<Jt[r].priority;r++);Jt.splice(r,0,e),r===0&&sc(e)}};function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kd(){}function wm(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var y=xi(d);a.call(y)}}var d=yd(t,n,e,0,null,!1,!1,"",kd);return e._reactRootContainer=d,e[Ft]=d.current,Fn(e.nodeType===8?e.parentNode:e),Pr(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var p=n;n=function(){var y=xi(f);p.call(y)}}var f=Vs(e,0,!1,null,null,!1,!1,"",kd);return e._reactRootContainer=f,e[Ft]=f.current,Fn(e.nodeType===8?e.parentNode:e),Pr(function(){hi(t,f,r,n)}),f}function yi(e,t,r,n,i){var a=r._reactRootContainer;if(a){var d=a;if(typeof i=="function"){var p=i;i=function(){var f=xi(d);p.call(f)}}hi(t,d,e,i)}else d=wm(r,t,e,i,n);return xi(d)}rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=jn(t.pendingLanes);r!==0&&(ya(t,r|1),it(t,Ie()),(fe&6)===0&&(ln=Ie()+500,ir()))}break;case 13:Pr(function(){var n=Wt(e,1);if(n!==null){var i=Je();zt(n,e,1,i)}}),Gs(e,1)}},wa=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var r=Je();zt(t,e,134217728,r)}Gs(e,134217728)}},nc=function(e){if(e.tag===13){var t=dr(e),r=Wt(e,t);if(r!==null){var n=Je();zt(r,e,t,n)}Gs(e,t)}},oc=function(){return ve},ic=function(e,t){var r=ve;try{return ve=e,t()}finally{ve=r}},pa=function(e,t,r){switch(t){case"input":if(oa(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Ao(n);if(!i)throw Error(c(90));vr(n),oa(n,i)}}}break;case"textarea":Ol(e,r);break;case"select":t=r.value,t!=null&&Fr(e,!!r.multiple,t,!1)}},Hl=Bs,Yl=Pr;var bm={usingClientEntryPoint:!1,Events:[Un,Qr,Ao,Ul,Wl,Bs]},to={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},km={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ql(e),e===null?null:e.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||ym,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{go=wi.inject(km),It=wi}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bm,at.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qs(t))throw Error(c(200));return vm(e,t,null,r)},at.createRoot=function(e,t){if(!qs(e))throw Error(c(299));var r=!1,n="",i=bd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vs(e,1,!1,null,null,r,!1,n,i),e[Ft]=t.current,Fn(e.nodeType===8?e.parentNode:e),new Qs(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Ql(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return Pr(e)},at.hydrate=function(e,t,r){if(!vi(t))throw Error(c(200));return yi(null,e,t,!0,r)},at.hydrateRoot=function(e,t,r){if(!qs(e))throw Error(c(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",d=bd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=yd(t,null,e,1,r!=null?r:null,i,!1,a,d),e[Ft]=t.current,Fn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new gi(t)},at.render=function(e,t,r){if(!vi(t))throw Error(c(200));return yi(null,e,t,!1,r)},at.unmountComponentAtNode=function(e){if(!vi(e))throw Error(c(40));return e._reactRootContainer?(Pr(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1},at.unstable_batchedUpdates=Bs,at.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!vi(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return yi(e,t,r,!1,n)},at.version="18.3.1-next-f1338f8080-20240426",at}var zd;function Tm(){if(zd)return Zs.exports;zd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Zs.exports=zm(),Zs.exports}var Td;function Lm(){if(Td)return bi;Td=1;var o=Tm();return bi.createRoot=o.createRoot,bi.hydrateRoot=o.hydrateRoot,bi}var Im=Lm(),ce=xl();const ht=Sm(ce);var st=function(){return st=Object.assign||function(u){for(var c,l=1,m=arguments.length;l<m;l++){c=arguments[l];for(var w in c)Object.prototype.hasOwnProperty.call(c,w)&&(u[w]=c[w])}return u},st.apply(this,arguments)};function Wi(o,u,c){if(c||arguments.length===2)for(var l=0,m=u.length,w;l<m;l++)(w||!(l in u))&&(w||(w=Array.prototype.slice.call(u,0,l)),w[l]=u[l]);return o.concat(w||Array.prototype.slice.call(u))}var Se="-ms-",io="-moz-",he="-webkit-",Zd="comm",Ki="rule",gl="decl",Om="@import",Rm="@namespace",Jd="@keyframes",Am="@layer",ep=Math.abs,vl=String.fromCharCode,sl=Object.assign;function Mm(o,u){return De(o,0)^45?(((u<<2^De(o,0))<<2^De(o,1))<<2^De(o,2))<<2^De(o,3):0}function tp(o){return o.trim()}function Vt(o,u){return(o=u.exec(o))?o[0]:o}function re(o,u,c){return o.replace(u,c)}function Ai(o,u,c){return o.indexOf(u,c)}function De(o,u){return o.charCodeAt(u)|0}function Ar(o,u,c){return o.slice(u,c)}function Tt(o){return o.length}function rp(o){return o.length}function no(o,u){return u.push(o),o}function Fm(o,u){return o.map(u).join("")}function Ld(o,u){return o.filter(function(c){return!Vt(c,u)})}var Xi=1,dn=1,np=0,kt=0,Ae=0,xn="";function Zi(o,u,c,l,m,w,N,z){return{value:o,root:u,parent:c,type:l,props:m,children:w,line:Xi,column:dn,length:N,return:"",siblings:z}}function hr(o,u){return sl(Zi("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},u)}function un(o){for(;o.root;)o=hr(o.root,{children:[o]});no(o,o.siblings)}function Dm(){return Ae}function Bm(){return Ae=kt>0?De(xn,--kt):0,dn--,Ae===10&&(dn=1,Xi--),Ae}function Lt(){return Ae=kt<np?De(xn,kt++):0,dn++,Ae===10&&(dn=1,Xi++),Ae}function xr(){return De(xn,kt)}function Mi(){return kt}function Ji(o,u){return Ar(xn,o,u)}function so(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Um(o){return Xi=dn=1,np=Tt(xn=o),kt=0,[]}function Wm(o){return xn="",o}function tl(o){return tp(Ji(kt-1,ll(o===91?o+2:o===40?o+1:o)))}function Hm(o){for(;(Ae=xr())&&Ae<33;)Lt();return so(o)>2||so(Ae)>3?"":" "}function Ym(o,u){for(;--u&&Lt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return Ji(o,Mi()+(u<6&&xr()==32&&Lt()==32))}function ll(o){for(;Lt();)switch(Ae){case o:return kt;case 34:case 39:o!==34&&o!==39&&ll(Ae);break;case 40:o===41&&ll(o);break;case 92:Lt();break}return kt}function $m(o,u){for(;Lt()&&o+Ae!==57;)if(o+Ae===84&&xr()===47)break;return"/*"+Ji(u,kt-1)+"*"+vl(o===47?o:Lt())}function Vm(o){for(;!so(xr());)Lt();return Ji(o,kt)}function Gm(o){return Wm(Fi("",null,null,null,[""],o=Um(o),0,[0],o))}function Fi(o,u,c,l,m,w,N,z,_){for(var K=0,G=0,U=N,J=0,le=0,X=0,W=1,Q=1,xe=1,de=0,ne="",T=m,Z=w,H=l,E=ne;Q;)switch(X=de,de=Lt()){case 40:if(X!=108&&De(E,U-1)==58){Ai(E+=re(tl(de),"&","&\f"),"&\f",ep(K?z[K-1]:0))!=-1&&(xe=-1);break}case 34:case 39:case 91:E+=tl(de);break;case 9:case 10:case 13:case 32:E+=Hm(X);break;case 92:E+=Ym(Mi()-1,7);continue;case 47:switch(xr()){case 42:case 47:no(Qm($m(Lt(),Mi()),u,c,_),_),(so(X||1)==5||so(xr()||1)==5)&&Tt(E)&&Ar(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*W:z[K++]=Tt(E)*xe;case 125*W:case 59:case 0:switch(de){case 0:case 125:Q=0;case 59+G:xe==-1&&(E=re(E,/\f/g,"")),le>0&&(Tt(E)-U||W===0&&X===47)&&no(le>32?Od(E+";",l,c,U-1,_):Od(re(E," ","")+";",l,c,U-2,_),_);break;case 59:E+=";";default:if(no(H=Id(E,u,c,K,G,m,z,ne,T=[],Z=[],U,w),w),de===123)if(G===0)Fi(E,u,H,H,T,w,U,z,Z);else{switch(J){case 99:if(De(E,3)===110)break;case 108:if(De(E,2)===97)break;default:G=0;case 100:case 109:case 115:}G?Fi(o,H,H,l&&no(Id(o,H,H,0,0,m,z,ne,m,T=[],U,Z),Z),m,Z,U,z,l?T:Z):Fi(E,H,H,H,[""],Z,0,z,Z)}}K=G=le=0,W=xe=1,ne=E="",U=N;break;case 58:U=1+Tt(E),le=X;default:if(W<1){if(de==123)--W;else if(de==125&&W++==0&&Bm()==125)continue}switch(E+=vl(de),de*W){case 38:xe=G>0?1:(E+="\f",-1);break;case 44:z[K++]=(Tt(E)-1)*xe,xe=1;break;case 64:xr()===45&&(E+=tl(Lt())),J=xr(),G=U=Tt(ne=E+=Vm(Mi())),de++;break;case 45:X===45&&Tt(E)==2&&(W=0)}}return w}function Id(o,u,c,l,m,w,N,z,_,K,G,U){for(var J=m-1,le=m===0?w:[""],X=rp(le),W=0,Q=0,xe=0;W<l;++W)for(var de=0,ne=Ar(o,J+1,J=ep(Q=N[W])),T=o;de<X;++de)(T=tp(Q>0?le[de]+" "+ne:re(ne,/&\f/g,le[de])))&&(_[xe++]=T);return Zi(o,u,c,m===0?Ki:z,_,K,G,U)}function Qm(o,u,c,l){return Zi(o,u,c,Zd,vl(Dm()),Ar(o,2,-2),0,l)}function Od(o,u,c,l,m){return Zi(o,u,c,gl,Ar(o,0,l),Ar(o,l+1,-1),l,m)}function op(o,u,c){switch(Mm(o,u)){case 5103:return he+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return he+o+o;case 4855:return he+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return io+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return he+o+io+o+Se+o+o;case 5936:switch(De(o,u+11)){case 114:return he+o+Se+re(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return he+o+Se+re(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return he+o+Se+re(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return he+o+Se+o+o;case 6165:return he+o+Se+"flex-"+o+o;case 5187:return he+o+re(o,/(\w+).+(:[^]+)/,he+"box-$1$2"+Se+"flex-$1$2")+o;case 5443:return he+o+Se+"flex-item-"+re(o,/flex-|-self/g,"")+(Vt(o,/flex-|baseline/)?"":Se+"grid-row-"+re(o,/flex-|-self/g,""))+o;case 4675:return he+o+Se+"flex-line-pack"+re(o,/align-content|flex-|-self/g,"")+o;case 5548:return he+o+Se+re(o,"shrink","negative")+o;case 5292:return he+o+Se+re(o,"basis","preferred-size")+o;case 6060:return he+"box-"+re(o,"-grow","")+he+o+Se+re(o,"grow","positive")+o;case 4554:return he+re(o,/([^-])(transform)/g,"$1"+he+"$2")+o;case 6187:return re(re(re(o,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),o,"")+o;case 5495:case 3959:return re(o,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return re(re(o,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+he+o+o;case 4200:if(!Vt(o,/flex-|baseline/))return Se+"grid-column-align"+Ar(o,u)+o;break;case 2592:case 3360:return Se+re(o,"template-","")+o;case 4384:case 3616:return c&&c.some(function(l,m){return u=m,Vt(l.props,/grid-\w+-end/)})?~Ai(o+(c=c[u].value),"span",0)?o:Se+re(o,"-start","")+o+Se+"grid-row-span:"+(~Ai(c,"span",0)?Vt(c,/\d+/):+Vt(c,/\d+/)-+Vt(o,/\d+/))+";":Se+re(o,"-start","")+o;case 4896:case 4128:return c&&c.some(function(l){return Vt(l.props,/grid-\w+-start/)})?o:Se+re(re(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return re(o,/(.+)-inline(.+)/,he+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tt(o)-1-u>6)switch(De(o,u+1)){case 109:if(De(o,u+4)!==45)break;case 102:return re(o,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+io+(De(o,u+3)==108?"$3":"$2-$3"))+o;case 115:return~Ai(o,"stretch",0)?op(re(o,"stretch","fill-available"),u,c)+o:o}break;case 5152:case 5920:return re(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,m,w,N,z,_,K){return Se+m+":"+w+K+(N?Se+m+"-span:"+(z?_:+_-+w)+K:"")+o});case 4949:if(De(o,u+6)===121)return re(o,":",":"+he)+o;break;case 6444:switch(De(o,De(o,14)===45?18:11)){case 120:return re(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(De(o,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Se+"$2box$3")+o;case 100:return re(o,":",":"+Se)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(o,"scroll-","scroll-snap-")+o}return o}function Hi(o,u){for(var c="",l=0;l<o.length;l++)c+=u(o[l],l,o,u)||"";return c}function qm(o,u,c,l){switch(o.type){case Am:if(o.children.length)break;case Om:case Rm:case gl:return o.return=o.return||o.value;case Zd:return"";case Jd:return o.return=o.value+"{"+Hi(o.children,l)+"}";case Ki:if(!Tt(o.value=o.props.join(",")))return""}return Tt(c=Hi(o.children,l))?o.return=o.value+"{"+c+"}":""}function Km(o){var u=rp(o);return function(c,l,m,w){for(var N="",z=0;z<u;z++)N+=o[z](c,l,m,w)||"";return N}}function Xm(o){return function(u){u.root||(u=u.return)&&o(u)}}function Zm(o,u,c,l){if(o.length>-1&&!o.return)switch(o.type){case gl:o.return=op(o.value,o.length,c);return;case Jd:return Hi([hr(o,{value:re(o.value,"@","@"+he)})],l);case Ki:if(o.length)return Fm(c=o.props,function(m){switch(Vt(m,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(hr(o,{props:[re(m,/:(read-\w+)/,":"+io+"$1")]})),un(hr(o,{props:[m]})),sl(o,{props:Ld(c,l)});break;case"::placeholder":un(hr(o,{props:[re(m,/:(plac\w+)/,":"+he+"input-$1")]})),un(hr(o,{props:[re(m,/:(plac\w+)/,":"+io+"$1")]})),un(hr(o,{props:[re(m,/:(plac\w+)/,Se+"input-$1")]})),un(hr(o,{props:[m]})),sl(o,{props:Ld(c,l)});break}return""})}}var Jm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mt={},pn=typeof process!="undefined"&&mt!==void 0&&(mt.REACT_APP_SC_ATTR||mt.SC_ATTR)||"data-styled",ip="active",ap="data-styled-version",ea="6.3.10",yl=`/*!sc*/
`,ao=typeof window!="undefined"&&typeof document!="undefined",eh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&mt!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==""?mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mt.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&mt!==void 0&&mt.SC_DISABLE_SPEEDY!==void 0&&mt.SC_DISABLE_SPEEDY!==""&&mt.SC_DISABLE_SPEEDY!=="false"&&mt.SC_DISABLE_SPEEDY);function uo(o){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Di=new Map,Yi=new Map,Bi=1,oo=function(o){if(Di.has(o))return Di.get(o);for(;Yi.has(Bi);)Bi++;var u=Bi++;return Di.set(o,u),Yi.set(u,o),u},th=function(o,u){Bi=u+1,Di.set(o,u),Yi.set(u,o)},wl=Object.freeze([]),fn=Object.freeze({});function rh(o,u,c){return c===void 0&&(c=fn),o.theme!==c.theme&&o.theme||u||c.theme}var sp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),nh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oh=/(^-|-$)/g;function Rd(o){return o.replace(nh,"-").replace(oh,"")}var ih=/(a)(d)/gi,Ad=function(o){return String.fromCharCode(o+(o>25?39:97))};function cl(o){var u,c="";for(u=Math.abs(o);u>52;u=u/52|0)c=Ad(u%52)+c;return(Ad(u%52)+c).replace(ih,"$1-$2")}var rl,Lr=function(o,u){for(var c=u.length;c;)o=33*o^u.charCodeAt(--c);return o},lp=function(o){return Lr(5381,o)};function ah(o){return cl(lp(o)>>>0)}function sh(o){return o.displayName||o.name||"Component"}function nl(o){return typeof o=="string"&&!0}var cp=typeof Symbol=="function"&&Symbol.for,up=cp?Symbol.for("react.memo"):60115,lh=cp?Symbol.for("react.forward_ref"):60112,ch={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dh=((rl={})[lh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rl[up]=dp,rl);function Md(o){return("type"in(u=o)&&u.type.$$typeof)===up?dp:"$$typeof"in o?dh[o.$$typeof]:ch;var u}var ph=Object.defineProperty,fh=Object.getOwnPropertyNames,Fd=Object.getOwnPropertySymbols,mh=Object.getOwnPropertyDescriptor,hh=Object.getPrototypeOf,Dd=Object.prototype;function pp(o,u,c){if(typeof u!="string"){if(Dd){var l=hh(u);l&&l!==Dd&&pp(o,l,c)}var m=fh(u);Fd&&(m=m.concat(Fd(u)));for(var w=Md(o),N=Md(u),z=0;z<m.length;++z){var _=m[z];if(!(_ in uh||c&&c[_]||N&&_ in N||w&&_ in w)){var K=mh(u,_);try{ph(o,_,K)}catch{}}}}return o}function mn(o){return typeof o=="function"}function bl(o){return typeof o=="object"&&"styledComponentId"in o}function Or(o,u){return o&&u?"".concat(o," ").concat(u):o||u||""}function Bd(o,u){return o.join("")}function lo(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function ul(o,u,c){if(c===void 0&&(c=!1),!c&&!lo(o)&&!Array.isArray(o))return u;if(Array.isArray(u))for(var l=0;l<u.length;l++)o[l]=ul(o[l],u[l]);else if(lo(u))for(var l in u)o[l]=ul(o[l],u[l]);return o}function kl(o,u){Object.defineProperty(o,"toString",{value:u})}var xh=(function(){function o(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u,this._cGroup=0,this._cIndex=0}return o.prototype.indexOfGroup=function(u){if(u===this._cGroup)return this._cIndex;var c=this._cIndex;if(u>this._cGroup)for(var l=this._cGroup;l<u;l++)c+=this.groupSizes[l];else for(l=this._cGroup-1;l>=u;l--)c-=this.groupSizes[l];return this._cGroup=u,this._cIndex=c,c},o.prototype.insertRules=function(u,c){if(u>=this.groupSizes.length){for(var l=this.groupSizes,m=l.length,w=m;u>=w;)if((w<<=1)<0)throw uo(16,"".concat(u));this.groupSizes=new Uint32Array(w),this.groupSizes.set(l),this.length=w;for(var N=m;N<w;N++)this.groupSizes[N]=0}for(var z=this.indexOfGroup(u+1),_=0,K=(N=0,c.length);N<K;N++)this.tag.insertRule(z,c[N])&&(this.groupSizes[u]++,z++,_++);_>0&&this._cGroup>u&&(this._cIndex+=_)},o.prototype.clearGroup=function(u){if(u<this.length){var c=this.groupSizes[u],l=this.indexOfGroup(u),m=l+c;this.groupSizes[u]=0;for(var w=l;w<m;w++)this.tag.deleteRule(l);c>0&&this._cGroup>u&&(this._cIndex-=c)}},o.prototype.getGroup=function(u){var c="";if(u>=this.length||this.groupSizes[u]===0)return c;for(var l=this.groupSizes[u],m=this.indexOfGroup(u),w=m+l,N=m;N<w;N++)c+=this.tag.getRule(N)+yl;return c},o})(),gh="style[".concat(pn,"][").concat(ap,'="').concat(ea,'"]'),vh=new RegExp("^".concat(pn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ud=function(o){return typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11},dl=function(o){if(!o)return document;if(Ud(o))return o;if("getRootNode"in o){var u=o.getRootNode();if(Ud(u))return u}return document},yh=function(o,u,c){for(var l,m=c.split(","),w=0,N=m.length;w<N;w++)(l=m[w])&&o.registerName(u,l)},wh=function(o,u){for(var c,l=((c=u.textContent)!==null&&c!==void 0?c:"").split(yl),m=[],w=0,N=l.length;w<N;w++){var z=l[w].trim();if(z){var _=z.match(vh);if(_){var K=0|parseInt(_[1],10),G=_[2];K!==0&&(th(G,K),yh(o,G,_[3]),o.getTag().insertRules(K,m)),m.length=0}else m.push(z)}}},ol=function(o){for(var u=dl(o.options.target).querySelectorAll(gh),c=0,l=u.length;c<l;c++){var m=u[c];m&&m.getAttribute(pn)!==ip&&(wh(o,m),m.parentNode&&m.parentNode.removeChild(m))}};function bh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var fp=function(o){var u=document.head,c=o||u,l=document.createElement("style"),m=(function(z){var _=Array.from(z.querySelectorAll("style[".concat(pn,"]")));return _[_.length-1]})(c),w=m!==void 0?m.nextSibling:null;l.setAttribute(pn,ip),l.setAttribute(ap,ea);var N=bh();return N&&l.setAttribute("nonce",N),c.insertBefore(l,w),l},kh=(function(){function o(u){this.element=fp(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){var l;if(c.sheet)return c.sheet;for(var m=(l=c.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets,w=0,N=m.length;w<N;w++){var z=m[w];if(z.ownerNode===c)return z}throw uo(17)})(this.element),this.length=0}return o.prototype.insertRule=function(u,c){try{return this.sheet.insertRule(c,u),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},o.prototype.getRule=function(u){var c=this.sheet.cssRules[u];return c&&c.cssText?c.cssText:""},o})(),jh=(function(){function o(u){this.element=fp(u),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(u,c){if(u<=this.length&&u>=0){var l=document.createTextNode(c);return this.element.insertBefore(l,this.nodes[u]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},o.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},o})(),Sh=(function(){function o(u){this.rules=[],this.length=0}return o.prototype.insertRule=function(u,c){return u<=this.length&&(u===this.length?this.rules.push(c):this.rules.splice(u,0,c),this.length++,!0)},o.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},o.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},o})(),Wd=ao,Nh={isServer:!ao,useCSSOMInjection:!eh},mp=(function(){function o(u,c,l){u===void 0&&(u=fn),c===void 0&&(c={});var m=this;this.options=st(st({},Nh),u),this.gs=c,this.names=new Map(l),this.server=!!u.isServer,!this.server&&ao&&Wd&&(Wd=!1,ol(this)),kl(this,function(){return(function(w){for(var N=w.getTag(),z=N.length,_="",K=function(U){var J=(function(xe){return Yi.get(xe)})(U);if(J===void 0)return"continue";var le=w.names.get(J);if(le===void 0||!le.size)return"continue";var X=N.getGroup(U);if(X.length===0)return"continue";var W=pn+".g"+U+'[id="'+J+'"]',Q="";le.forEach(function(xe){xe.length>0&&(Q+=xe+",")}),_+=X+W+'{content:"'+Q+'"}'+yl},G=0;G<z;G++)K(G);return _})(m)})}return o.registerId=function(u){return oo(u)},o.prototype.rehydrate=function(){!this.server&&ao&&ol(this)},o.prototype.reconstructWithOptions=function(u,c){c===void 0&&(c=!0);var l=new o(st(st({},this.options),u),this.gs,c&&this.names||void 0);return!this.server&&ao&&u.target!==this.options.target&&dl(this.options.target)!==dl(u.target)&&ol(l),l},o.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(c){var l=c.useCSSOMInjection,m=c.target;return c.isServer?new Sh(m):l?new kh(m):new jh(m)})(this.options),new xh(u)));var u},o.prototype.hasNameForId=function(u,c){var l,m;return(m=(l=this.names.get(u))===null||l===void 0?void 0:l.has(c))!==null&&m!==void 0&&m},o.prototype.registerName=function(u,c){oo(u);var l=this.names.get(u);l?l.add(c):this.names.set(u,new Set([c]))},o.prototype.insertRules=function(u,c,l){this.registerName(u,c),this.getTag().insertRules(oo(u),l)},o.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},o.prototype.clearRules=function(u){this.getTag().clearGroup(oo(u)),this.clearNames(u)},o.prototype.clearTag=function(){this.tag=void 0},o})(),Ch=/&/g,Gt=47,Ir=42;function Hd(o){if(o.indexOf("}")===-1)return!1;for(var u=o.length,c=0,l=0,m=!1,w=0;w<u;w++){var N=o.charCodeAt(w);if(l!==0||m||N!==Gt||o.charCodeAt(w+1)!==Ir)if(m)N===Ir&&o.charCodeAt(w+1)===Gt&&(m=!1,w++);else if(N!==34&&N!==39||w!==0&&o.charCodeAt(w-1)===92){if(l===0){if(N===123)c++;else if(N===125&&--c<0)return!0}}else l===0?l=N:l===N&&(l=0);else m=!0,w++}return c!==0||l!==0}function hp(o,u){return o.map(function(c){return c.type==="rule"&&(c.value="".concat(u," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(u," ")),c.props=c.props.map(function(l){return"".concat(u," ").concat(l)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=hp(c.children,u)),c})}function _h(o){var u,c,l,m=fn,w=m.options,N=w===void 0?fn:w,z=m.plugins,_=z===void 0?wl:z,K=function(X,W,Q){return Q.startsWith(c)&&Q.endsWith(c)&&Q.replaceAll(c,"").length>0?".".concat(u):X},G=_.slice();G.push(function(X){X.type===Ki&&X.value.includes("&")&&(l||(l=new RegExp("\\".concat(c,"\\b"),"g")),X.props[0]=X.props[0].replace(Ch,c).replace(l,K))}),N.prefix&&G.push(Zm),G.push(qm);var U=[],J=Km(G.concat(Xm(function(X){return U.push(X)}))),le=function(X,W,Q,xe){W===void 0&&(W=""),Q===void 0&&(Q=""),xe===void 0&&(xe="&"),u=xe,c=W,l=void 0;var de=(function(T){if(!Hd(T))return T;for(var Z=T.length,H="",E=0,F=0,ye=0,Le=!1,ae=0;ae<Z;ae++){var ze=T.charCodeAt(ae);if(ye!==0||Le||ze!==Gt||T.charCodeAt(ae+1)!==Ir)if(Le)ze===Ir&&T.charCodeAt(ae+1)===Gt&&(Le=!1,ae++);else if(ze!==34&&ze!==39||ae!==0&&T.charCodeAt(ae-1)===92){if(ye===0)if(ze===123)F++;else if(ze===125){if(--F<0){for(var Ne=ae+1;Ne<Z;){var $e=T.charCodeAt(Ne);if($e===59||$e===10)break;Ne++}Ne<Z&&T.charCodeAt(Ne)===59&&Ne++,F=0,ae=Ne-1,E=Ne;continue}F===0&&(H+=T.substring(E,ae+1),E=ae+1)}else ze===59&&F===0&&(H+=T.substring(E,ae+1),E=ae+1)}else ye===0?ye=ze:ye===ze&&(ye=0);else Le=!0,ae++}if(E<Z){var Xe=T.substring(E);Hd(Xe)||(H+=Xe)}return H})((function(T){if(T.indexOf("//")===-1)return T;for(var Z=T.length,H=[],E=0,F=0,ye=0,Le=0;F<Z;){var ae=T.charCodeAt(F);if(ae!==34&&ae!==39||F!==0&&T.charCodeAt(F-1)===92)if(ye===0)if(ae===Gt&&F+1<Z&&T.charCodeAt(F+1)===Ir){for(F+=2;F+1<Z&&(T.charCodeAt(F)!==Ir||T.charCodeAt(F+1)!==Gt);)F++;F+=2}else if(ae===40&&F>=3&&(32|T.charCodeAt(F-1))==108&&(32|T.charCodeAt(F-2))==114&&(32|T.charCodeAt(F-3))==117)Le=1,F++;else if(Le>0)ae===41?Le--:ae===40&&Le++,F++;else if(ae===Ir&&F+1<Z&&T.charCodeAt(F+1)===Gt)F>E&&H.push(T.substring(E,F)),E=F+=2;else if(ae===Gt&&F+1<Z&&T.charCodeAt(F+1)===Gt){for(F>E&&H.push(T.substring(E,F));F<Z&&T.charCodeAt(F)!==10;)F++;E=F}else F++;else F++;else ye===0?ye=ae:ye===ae&&(ye=0),F++}return E===0?T:(E<Z&&H.push(T.substring(E)),H.join(""))})(X)),ne=Gm(Q||W?"".concat(Q," ").concat(W," { ").concat(de," }"):de);return N.namespace&&(ne=hp(ne,N.namespace)),U=[],Hi(ne,J),U};return le.hash=_.length?_.reduce(function(X,W){return W.name||uo(15),Lr(X,W.name)},5381).toString():"",le}var Ph=new mp,pl=_h(),xp=ht.createContext({shouldForwardProp:void 0,styleSheet:Ph,stylis:pl});xp.Consumer;ht.createContext(void 0);function Yd(){return ht.useContext(xp)}var Eh=(function(){function o(u,c){var l=this;this.inject=function(m,w){w===void 0&&(w=pl);var N=l.name+w.hash;m.hasNameForId(l.id,N)||m.insertRules(l.id,N,w(l.rules,N,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=c,kl(this,function(){throw uo(12,String(l.name))})}return o.prototype.getName=function(u){return u===void 0&&(u=pl),this.name+u.hash},o})();function zh(o,u){return u==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||o in Jm||o.startsWith("--")?String(u).trim():"".concat(u,"px")}var Th=function(o){return o>="A"&&o<="Z"};function $d(o){for(var u="",c=0;c<o.length;c++){var l=o[c];if(c===1&&l==="-"&&o[0]==="-")return o;Th(l)?u+="-"+l.toLowerCase():u+=l}return u.startsWith("ms-")?"-"+u:u}var gp=function(o){return o==null||o===!1||o===""},vp=function(o){var u=[];for(var c in o){var l=o[c];o.hasOwnProperty(c)&&!gp(l)&&(Array.isArray(l)&&l.isCss||mn(l)?u.push("".concat($d(c),":"),l,";"):lo(l)?u.push.apply(u,Wi(Wi(["".concat(c," {")],vp(l),!1),["}"],!1)):u.push("".concat($d(c),": ").concat(zh(c,l),";")))}return u};function Rr(o,u,c,l,m){if(m===void 0&&(m=[]),typeof o=="string")return o&&m.push(o),m;if(gp(o))return m;if(bl(o))return m.push(".".concat(o.styledComponentId)),m;if(mn(o)){if(!mn(N=o)||N.prototype&&N.prototype.isReactComponent||!u)return m.push(o),m;var w=o(u);return Rr(w,u,c,l,m)}var N;if(o instanceof Eh)return c?(o.inject(c,l),m.push(o.getName(l))):m.push(o),m;if(lo(o)){for(var z=vp(o),_=0;_<z.length;_++)m.push(z[_]);return m}if(!Array.isArray(o))return m.push(o.toString()),m;for(_=0;_<o.length;_++)Rr(o[_],u,c,l,m);return m}function Lh(o){for(var u=0;u<o.length;u+=1){var c=o[u];if(mn(c)&&!bl(c))return!1}return!0}var Ih=lp(ea),Oh=(function(){function o(u,c,l){this.rules=u,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&Lh(u),this.componentId=c,this.baseHash=Lr(Ih,c),this.baseStyle=l,mp.registerId(c)}return o.prototype.generateAndInjectStyles=function(u,c,l){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,c,l).className:"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))m=Or(m,this.staticRulesId);else{var w=Bd(Rr(this.rules,u,c,l)),N=cl(Lr(this.baseHash,w)>>>0);if(!c.hasNameForId(this.componentId,N)){var z=l(w,".".concat(N),void 0,this.componentId);c.insertRules(this.componentId,N,z)}m=Or(m,N),this.staticRulesId=N}else{for(var _=Lr(this.baseHash,l.hash),K="",G=0;G<this.rules.length;G++){var U=this.rules[G];if(typeof U=="string")K+=U;else if(U){var J=Bd(Rr(U,u,c,l));_=Lr(Lr(_,String(G)),J),K+=J}}if(K){var le=cl(_>>>0);if(!c.hasNameForId(this.componentId,le)){var X=l(K,".".concat(le),void 0,this.componentId);c.insertRules(this.componentId,le,X)}m=Or(m,le)}}return{className:m,css:typeof window=="undefined"?c.getTag().getGroup(oo(this.componentId)):""}},o})(),yp=ht.createContext(void 0);yp.Consumer;var il={};function Rh(o,u,c){var l=bl(o),m=o,w=!nl(o),N=u.attrs,z=N===void 0?wl:N,_=u.componentId,K=_===void 0?(function(T,Z){var H=typeof T!="string"?"sc":Rd(T);il[H]=(il[H]||0)+1;var E="".concat(H,"-").concat(ah(ea+H+il[H]));return Z?"".concat(Z,"-").concat(E):E})(u.displayName,u.parentComponentId):_,G=u.displayName,U=G===void 0?(function(T){return nl(T)?"styled.".concat(T):"Styled(".concat(sh(T),")")})(o):G,J=u.displayName&&u.componentId?"".concat(Rd(u.displayName),"-").concat(u.componentId):u.componentId||K,le=l&&m.attrs?m.attrs.concat(z).filter(Boolean):z,X=u.shouldForwardProp;if(l&&m.shouldForwardProp){var W=m.shouldForwardProp;if(u.shouldForwardProp){var Q=u.shouldForwardProp;X=function(T,Z){return W(T,Z)&&Q(T,Z)}}else X=W}var xe=new Oh(c,J,l?m.componentStyle:void 0);function de(T,Z){return(function(H,E,F){var ye=H.attrs,Le=H.componentStyle,ae=H.defaultProps,ze=H.foldedComponentIds,Ne=H.styledComponentId,$e=H.target,Xe=ht.useContext(yp),Ve=Yd(),we=H.shouldForwardProp||Ve.shouldForwardProp,P=rh(E,Xe,ae)||fn,B=(function(ie,pe,ue){for(var ge,_e=st(st({},pe),{className:void 0,theme:ue}),qt=0;qt<ie.length;qt+=1){var vr=mn(ge=ie[qt])?ge(_e):ge;for(var jt in vr)jt==="className"?_e.className=Or(_e.className,vr[jt]):jt==="style"?_e.style=st(st({},_e.style),vr[jt]):_e[jt]=vr[jt]}return"className"in pe&&typeof pe.className=="string"&&(_e.className=Or(_e.className,pe.className)),_e})(ye,E,P),L=B.as||$e,x={};for(var b in B)B[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&B.theme===P||(b==="forwardedAs"?x.as=B.forwardedAs:we&&!we(b,L)||(x[b]=B[b]));var ee=(function(ie,pe){var ue=Yd(),ge=ie.generateAndInjectStyles(pe,ue.styleSheet,ue.stylis);return ge})(Le,B),te=ee.className,se=Or(ze,Ne);return te&&(se+=" "+te),B.className&&(se+=" "+B.className),x[nl(L)&&!sp.has(L)?"class":"className"]=se,F&&(x.ref=F),ce.createElement(L,x)})(ne,T,Z)}de.displayName=U;var ne=ht.forwardRef(de);return ne.attrs=le,ne.componentStyle=xe,ne.displayName=U,ne.shouldForwardProp=X,ne.foldedComponentIds=l?Or(m.foldedComponentIds,m.styledComponentId):"",ne.styledComponentId=J,ne.target=l?m.target:o,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=l?(function(Z){for(var H=[],E=1;E<arguments.length;E++)H[E-1]=arguments[E];for(var F=0,ye=H;F<ye.length;F++)ul(Z,ye[F],!0);return Z})({},m.defaultProps,T):T}}),kl(ne,function(){return".".concat(ne.styledComponentId)}),w&&pp(ne,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function Vd(o,u){for(var c=[o[0]],l=0,m=u.length;l<m;l+=1)c.push(u[l],o[l+1]);return c}var Gd=function(o){return Object.assign(o,{isCss:!0})};function Ah(o){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];if(mn(o)||lo(o))return Gd(Rr(Vd(wl,Wi([o],u,!0))));var l=o;return u.length===0&&l.length===1&&typeof l[0]=="string"?Rr(l):Gd(Rr(Vd(l,u)))}function fl(o,u,c){if(c===void 0&&(c=fn),!u)throw uo(1,u);var l=function(m){for(var w=[],N=1;N<arguments.length;N++)w[N-1]=arguments[N];return o(u,c,Ah.apply(void 0,Wi([m],w,!1)))};return l.attrs=function(m){return fl(o,u,st(st({},c),{attrs:Array.prototype.concat(c.attrs,m).filter(Boolean)}))},l.withConfig=function(m){return fl(o,u,st(st({},c),m))},l}var wp=function(o){return fl(Rh,o)},R=wp;sp.forEach(function(o){R[o]=wp(o)});const al={Wrapper:R.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:R.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:R.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Qd={Wrapper:R.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:R.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Mh="/python-core-notes/images/transparentLogo.png";var bp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qd=ht.createContext&&ht.createContext(bp),Fh=["attr","size","title"];function Dh(o,u){if(o==null)return{};var c=Bh(o,u),l,m;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(o);for(m=0;m<w.length;m++)l=w[m],!(u.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(o,l)&&(c[l]=o[l])}return c}function Bh(o,u){if(o==null)return{};var c={};for(var l in o)if(Object.prototype.hasOwnProperty.call(o,l)){if(u.indexOf(l)>=0)continue;c[l]=o[l]}return c}function $i(){return $i=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(o[l]=c[l])}return o},$i.apply(this,arguments)}function Kd(o,u){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(o);u&&(l=l.filter(function(m){return Object.getOwnPropertyDescriptor(o,m).enumerable})),c.push.apply(c,l)}return c}function Vi(o){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?Kd(Object(c),!0).forEach(function(l){Uh(o,l,c[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):Kd(Object(c)).forEach(function(l){Object.defineProperty(o,l,Object.getOwnPropertyDescriptor(c,l))})}return o}function Uh(o,u,c){return u=Wh(u),u in o?Object.defineProperty(o,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[u]=c,o}function Wh(o){var u=Hh(o,"string");return typeof u=="symbol"?u:u+""}function Hh(o,u){if(typeof o!="object"||!o)return o;var c=o[Symbol.toPrimitive];if(c!==void 0){var l=c.call(o,u);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)}function kp(o){return o&&o.map((u,c)=>ht.createElement(u.tag,Vi({key:c},u.attr),kp(u.child)))}function V(o){return u=>ht.createElement(Yh,$i({attr:Vi({},o.attr)},u),kp(o.child))}function Yh(o){var u=c=>{var{attr:l,size:m,title:w}=o,N=Dh(o,Fh),z=m||c.size||"1em",_;return c.className&&(_=c.className),o.className&&(_=(_?_+" ":"")+o.className),ht.createElement("svg",$i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,l,N,{className:_,style:Vi(Vi({color:o.color||c.color},c.style),o.style),height:z,width:z,xmlns:"http://www.w3.org/2000/svg"}),w&&ht.createElement("title",null,w),o.children)};return qd!==void 0?ht.createElement(qd.Consumer,null,c=>u(c)):u(bp)}function jp(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(o)}function ml(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function $h(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"16 12 12 8 8 12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"8"},child:[]}]})(o)}function Vh(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function jl(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(o)}function Gh(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(o)}function lt(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function Qh(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(o)}function ct(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(o)}function Sp(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(o)}function Sl(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function qh(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"},child:[]}]})(o)}function Kh(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(o)}function ta(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(o)}function gr(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(o)}function Xh(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(o)}function Nl(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(o)}function Cl(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(o)}function Zh(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(o)}function Gi(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(o)}function Jh(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(o)}function ex(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(o)}function Np(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(o)}function po(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(o)}function Qt(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function hn(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function tx(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(o)}function _l(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(o)}function rx(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(o)}function nx(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function Qi(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function ra(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(o)}function ox(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"16"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(o)}function Pl(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(o)}function qi(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(o)}function ix(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(o)}function ax(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(o)}function El(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(o)}function Mr(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(o)}function Cp(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"},child:[]}]})(o)}function sx(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(o)}function lx(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function Ui(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(o)}function co(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}function cx(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(o)}function ux(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 18 13.5 8.5 8.5 13.5 1 6"},child:[]},{tag:"polyline",attr:{points:"17 18 23 18 23 12"},child:[]}]})(o)}function hl(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(o)}function dx(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(o)}function px(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(o)}function et(o){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(o)}const fx=()=>{const[o,u]=ce.useState(!1),[c,l]=ce.useState("dark");ce.useEffect(()=>{const z=localStorage.getItem("app-theme")||"dark";l(z),z==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ce.useEffect(()=>{c==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",c)},[c]);const m=ce.useMemo(()=>c==="light"?"dark":"light",[c]),w=()=>{l(m)};return s.jsx(Qd.Wrapper,{children:s.jsx(Qd.Main,{children:s.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[s.jsxs("div",{className:"logoNameWrapper",children:[s.jsxs("div",{className:"logoWrapper",children:[!o&&s.jsx("div",{className:"logoSkeleton"}),s.jsx("img",{src:Mh,alt:"python-core-notes",onLoad:()=>u(!0),style:{opacity:o?1:0}})]}),s.jsxs("div",{className:"nameWrapper",children:[s.jsx("div",{className:"title",children:"python-core-notes"}),s.jsx("div",{className:"subTitle",children:"At-a-glance python revision"})]})]}),s.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:w,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[s.jsx("span",{className:"icon",children:c==="light"?s.jsx(nx,{}):s.jsx(lx,{})}),s.jsx("span",{className:"label",children:c==="light"?"Light":"Dark"})]})]})})})},mx={Wrapper:R.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},hx=()=>s.jsxs(mx.Wrapper,{children:[s.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),s.jsxs("div",{className:"right",children:["By ",s.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Xd={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 70px 20px;
        margin-bottom: 5px;
    `,Content:R.div`
        max-width: 1440px;
        width: 100%;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        padding: 46px;
        box-shadow: 0 12px 32px var(--color-shadow);
        position: relative;
        transform: translateY(0);
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 52px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        .top {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 22px;
        }

        .badge {
            width: 46px;
            height: 46px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease,
                background 0.18s ease;

            svg {
                font-size: 20px;
            }
        }

        &:hover .badge {
            transform: scale(1.06) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .headText {
            min-width: 0;
        }

        .heading {
            font-size: 36px;
            margin-bottom: 6px;
            color: var(--color-primary);
            letter-spacing: 0.6px;
            font-weight: 900;
        }

        .sub {
            font-size: 14px;
            color: var(--color-text-muted);
            line-height: 1.65;
            max-width: 820px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-top: 22px;
        }

        .card {
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 18px 18px 16px;
            box-shadow: 0 10px 24px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.22s ease,
                box-shadow 0.22s ease,
                border-color 0.22s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 38px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 15px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .ico {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 16px;
            }
        }

        .card:hover .ico {
            transform: scale(1.05);
            border-color: var(--color-border-light);
        }

        .card p {
            font-size: 14px;
            line-height: 1.75;
            color: var(--color-text-secondary);
            margin-bottom: 0;
        }

        .tips ul {
            padding-left: 18px;
            margin: 0;

            li {
                list-style: disc;
                color: var(--color-text-secondary);
                font-size: 14px;
                line-height: 1.7;
                margin-bottom: 6px;
            }

            li:last-child {
                margin-bottom: 0;
            }
        }

        .meta {
            margin-top: 28px;
            padding-top: 18px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 12px;
            font-size: 13px;
            color: var(--color-text-muted);
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-accent);
        }

        @media (max-width: 900px) {
            padding: 26px 18px;

            .heading {
                font-size: 30px;
            }

            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},xx=()=>{const o="2026-09-21T16:58:29.668Z",u=new Date(o).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return s.jsx(Xd.Wrapper,{children:s.jsxs(Xd.Content,{children:[s.jsxs("div",{className:"top",children:[s.jsx("div",{className:"badge",children:s.jsx(Ui,{})}),s.jsxs("div",{className:"headText",children:[s.jsx("h2",{className:"heading",children:"About Python"}),s.jsx("p",{className:"sub",children:"A clean, single-page revision system for core Python concepts."})]})]}),s.jsxs("div",{className:"grid",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardTitle",children:[s.jsx("span",{className:"ico",children:s.jsx(et,{})}),"What is Python"]}),s.jsx("p",{children:"Python is a high-level, interpreted programming language known for readability and fast development. It is widely used in web development, scripting, automation, data work, and tooling."})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardTitle",children:[s.jsx("span",{className:"ico",children:s.jsx(Qt,{})}),"Execution model"]}),s.jsx("p",{children:"Python code runs inside the CPython interpreter (most common). It compiles source code into bytecode and executes it using a virtual machine. Concepts like references, mutability, and scope rules are key for writing predictable code."})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardTitle",children:[s.jsx("span",{className:"ico",children:s.jsx(Qi,{})}),"Project goal"]}),s.jsx("p",{children:"The python-core-notes project organizes essential syntax, core data structures, functions, OOP, exceptions, generators, modules, file handling, and Pythonic best practices into a structured, expandable single page."})]}),s.jsxs("div",{className:"card tips",children:[s.jsxs("div",{className:"cardTitle",children:[s.jsx("span",{className:"ico",children:s.jsx(Qh,{})}),"How to use"]}),s.jsxs("ul",{children:[s.jsx("li",{children:"Use search to jump to topics quickly."}),s.jsx("li",{children:"Expand sections, scan bullets, move on."}),s.jsx("li",{children:"Focus on patterns and common traps."})]})]})]}),s.jsxs("div",{className:"meta",children:[s.jsx("span",{className:"metaLabel",children:"Last build:"}),s.jsxs("span",{className:"metaValue",children:[u," hrs"]})]})]})})},ki={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},gx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"what-is-python",icon:s.jsx(po,{}),title:"What is Python",summary:"Python is a high-level language focused on readability and fast development.",points:["High-level means you write human-friendly code, not low-level machine instructions.","Python is used for scripting, web, automation, data, tooling, AI, and backend services.","Python code is usually executed by CPython (the most common interpreter)."],example:`# Python reads like plain English
name = "Ash"
age = 25

print(name, age)`,note:"Goal of Python is clarity. If your code reads cleanly, you are doing it right."},{id:"interpreted-vs-compiled",icon:s.jsx(gr,{}),title:"Interpreted vs compiled",summary:"Python is commonly called interpreted, but it still compiles to bytecode before running.",points:["Compiled languages usually produce a standalone binary (like C/C++).","Interpreted languages execute through an interpreter at runtime.","Python (CPython) compiles .py into bytecode (.pyc) and runs it in a virtual machine."],example:`# You run source code:
python app.py

# Internally CPython does:
# .py -> bytecode -> execute by interpreter`,note:"So Python is not 'no compilation'. It is 'no manual compilation step'."},{id:"cpython-overview",icon:s.jsx(gr,{}),title:"CPython overview",summary:"CPython is the default Python implementation written in C.",points:["CPython is what most people mean when they say 'Python'.","It converts Python code to bytecode and executes it.","It manages memory, objects, reference counting, and garbage collection."],example:`# Check your implementation
import platform
print(platform.python_implementation())  # often: CPython`,note:"Other implementations exist (PyPy, Jython), but CPython is the standard baseline."},{id:"running-python-files",icon:s.jsx(ra,{}),title:"Running Python files",summary:"You run Python scripts using the python command.",points:["A file with extension .py is a Python script.","You can run it from terminal with python file.py.","Use a virtual environment (venv) later for real projects."],example:`# Run a python file
python main.py

# If you have multiple versions:
python3 main.py`,note:"Keep one entry file like main.py or app.py for clean project structure."},{id:"repl-basics",icon:s.jsx(Ui,{}),title:"REPL basics",summary:"REPL is an interactive shell to quickly test Python code.",points:["REPL means Read Eval Print Loop.","Useful for quick experiments, not full programs.","Exit with Ctrl + D (Mac/Linux) or Ctrl + Z then Enter (Windows)."],example:`# Start REPL
python

# Then type:
>>> 2 + 3
5
>>> "py" * 3
'pypypy'`,note:"REPL is great for learning and debugging small logic."},{id:"variables-dynamic-typing",icon:s.jsx(Nl,{}),title:"Variables and dynamic typing",summary:"Python variables do not have fixed types. The object has the type, not the variable.",points:["A variable is just a name pointing to an object in memory.","The same variable can point to different types at different times.","Use type() to check the type at runtime."],example:`x = 10
print(type(x))  # int

x = "ten"
print(type(x))  # str`,note:"Dynamic typing is powerful but can create bugs if you mix types carelessly."},{id:"primitive-data-types",icon:s.jsx(Mr,{}),title:"Primitive data types",summary:"Python has core built-in types like int, float, bool, str, and NoneType.",points:["int: whole numbers","float: decimals","bool: True or False","str: text","None: represents 'no value'"],example:`a = 12          # int
b = 12.5        # float
c = True        # bool
d = "python"    # str
e = None        # NoneType

print(type(e))  # <class 'NoneType'>`,note:"In Python, everything is an object, even numbers."},{id:"type-conversion",icon:s.jsx(Pl,{}),title:"Type conversion",summary:"Use int(), float(), str(), bool() to convert types when needed.",points:["int('12') works, int('12.5') fails.","float('12.5') works.","bool('') is False, bool('hello') is True.","Always validate user input before converting."],example:`x = "12"
print(int(x) + 3)  # 15

y = "12.5"
print(float(y) + 1)  # 13.5

print(bool(""))       # False
print(bool("ok"))     # True`,note:"Most beginner bugs are input + conversion bugs. Be strict with conversions."},{id:"operators",icon:s.jsx(Jh,{}),title:"Operators",summary:"Operators allow arithmetic, comparisons, and boolean logic.",points:["Arithmetic: + - * / // % **","Comparison: == != > < >= <=","Logical: and or not","Membership: in, not in"],example:`a = 10
b = 3

print(a / b)   # 3.333...
print(a // b)  # 3 (floor division)
print(a % b)   # 1
print(a ** b)  # 1000

print(a > b and b == 3)  # True
print("py" in "python")  # True`,note:"Remember: == compares values, is compares identity (same object)."},{id:"control-flow",icon:s.jsx(ta,{}),title:"Control flow (if, match, loops)",summary:"Control flow lets your code make decisions and repeat work.",points:["if/elif/else handles decisions.","for loops iterate over sequences (list, string, range, etc.).","while loops repeat until condition becomes False.","match (Python 3.10+) is pattern matching, like switch but stronger."],example:`score = 78

if score >= 90:
    print("A")
elif score >= 70:
    print("B")
else:
    print("C")

for i in range(3):
    print(i)

n = 3
while n > 0:
    n -= 1

# match (Python 3.10+)
status = 404

match status:
    case 200:
        print("OK")
    case 404:
        print("Not Found")
    case _:
        print("Other")`,note:"Python uses indentation instead of braces. Indentation is the structure."},{id:"break-and-continue",icon:s.jsx(Cp,{}),title:"break and continue",summary:"break stops the loop. continue skips the current iteration.",points:["break exits the loop immediately.","continue jumps to the next iteration.","Both are used inside for and while loops."],example:`for i in range(1, 6):
    if i == 3:
        continue
    if i == 5:
        break
    print(i)

# Output:
# 1
# 2
# 4`,note:"Use them for clean loop control, but do not abuse them. Keep loops readable."},{id:"pass-statement",icon:s.jsx(Ui,{}),title:"pass statement",summary:"pass is a placeholder that does nothing, used when syntax requires a block.",points:["Useful while building code step-by-step.","Common in empty functions, classes, or conditional branches.","It keeps the program valid without adding behavior."],example:`def todo():
    pass

class Draft:
    pass

if True:
    pass`,note:"pass is not a 'skip'. It is literally an empty statement."}],[]);return s.jsx(ki.Wrapper,{children:s.jsxs(ki.Container,{className:o?"isOpen":"",children:[s.jsxs(ki.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Ui,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Foundations"}),s.jsx("div",{className:"subtitle",children:"This builds syntax muscle memory"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(ki.Content,{children:[s.jsx("div",{className:"topNote",children:"Foundations means you can write Python without thinking about syntax. Clean basics first, then the advanced stuff becomes easy."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},ji={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},vx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"string-creation",icon:s.jsx(hl,{}),title:"String creation",summary:"Strings are sequences of Unicode characters. You can create them using quotes and common patterns.",points:["Use single quotes or double quotes for normal strings.","Use triple quotes for multi-line strings.","Use str() to convert other values into strings."],example:`name1 = "Python"
name2 = 'Core Notes'

multi = """Line 1
Line 2
Line 3"""

x = 10
print(str(x))`,note:"In Python, strings are Unicode by default (text safe)."},{id:"immutability",icon:s.jsx(rx,{}),title:"Immutability",summary:"Strings are immutable. You cannot change a string in place, you create a new one.",points:["Any operation that looks like changing a string actually creates a new string.","Immutability makes strings safe to share and cache.","Use lists or StringIO-like approaches when doing heavy concatenation in loops."],example:`s = "hello"
# s[0] = "H"  # error (strings are immutable)

s2 = "H" + s[1:]
print(s2)  # Hello`,note:"If you need many edits, build pieces and join them at the end."},{id:"string-methods",icon:s.jsx(co,{}),title:"String methods",summary:"Python provides many built-in methods for searching, cleaning, and transforming strings.",points:["Common: lower, upper, strip, replace, split, join.","Search: find, startswith, endswith, in operator.","Validation: isdigit, isalpha, isalnum, isspace."],example:`s = "  Python Core Notes  "

print(s.strip())              # remove outer spaces
print(s.lower())              # python core notes
print(s.replace("Core", "X")) # Python X Notes

parts = "a,b,c".split(",")
print(parts)                  # ['a', 'b', 'c']

print("-".join(parts))        # a-b-c

print("py" in "python")       # True
print("123".isdigit())        # True`,note:"Strings are everywhere. Knowing these methods saves time daily."},{id:"f-strings",icon:s.jsx(et,{}),title:"f-strings",summary:"f-strings are the cleanest way to format strings in modern Python.",points:["Prefix with f and use {variable} inside.","Supports expressions inside braces.","Supports formatting like decimals, padding, alignment."],example:`name = "Ash"
score = 93.456

print(f"Name: {name}")
print(f"Score: {score:.2f}")   # 93.46
print(f"Next: {score + 1:.1f}")`,note:"Prefer f-strings over old % formatting and string concatenation."},{id:"escape-sequences",icon:s.jsx(Cp,{}),title:"Escape sequences",summary:"Escape sequences represent special characters like newline and tab inside strings.",points:[`\\n = newline, \\t = tab, \\\\ = backslash, \\' = single quote, \\" = double quote.`,"Use raw strings r'' for regex and Windows paths to avoid escaping."],example:`print("Line1\\nLine2")
print("Col1\\tCol2")

path1 = "C:\\\\Users\\\\Ash\\\\Docs"
path2 = r"C:\\Users\\Ash\\Docs"

print(path1)
print(path2)`,note:"Raw strings are very handy when working with regex and file paths."},{id:"bytes-vs-str",icon:s.jsx(gr,{}),title:"bytes vs str",summary:"str is text (Unicode). bytes is raw binary data. They are not the same.",points:["Use str for human-readable text.","Use bytes for files, network data, images, etc.","Convert using encode (str -> bytes) and decode (bytes -> str)."],example:`text = "python"
b = text.encode("utf-8")   # str -> bytes
print(b)                   # b'python'

text2 = b.decode("utf-8")  # bytes -> str
print(text2)               # python`,note:"If you mix bytes and str, Python will throw TypeError. Convert intentionally."},{id:"numeric-types",icon:s.jsx(po,{}),title:"Numeric types (int, float, complex)",summary:"Python supports integers, floating point numbers, and complex numbers.",points:["int: unlimited precision (no fixed 32-bit/64-bit limit).","float: double precision (watch rounding errors).","complex: numbers like 2 + 3j, used in math/science domains."],example:`a = 10          # int
b = 10.5        # float
c = 2 + 3j      # complex

print(type(a))
print(type(b))
print(type(c))

print(0.1 + 0.2)           # 0.30000000000000004 (float behavior)
print((2 + 3j) * 2)        # (4+6j)`,note:"Float is not exact for some decimals. Use round() or decimal module when needed."},{id:"boolean-logic",icon:s.jsx(jl,{}),title:"Boolean logic",summary:"Booleans are True/False. Python uses short-circuit logic with and/or.",points:["and returns the first falsy value or the last value.","or returns the first truthy value or the last value.","Falsy values include: 0, 0.0, '', [], {}, set(), None."],example:`print(True and False)   # False
print(True or False)    # True
print(not True)         # False

print("" or "fallback")     # fallback
print("ok" and "next")      # next

print(bool(0))              # False
print(bool("python"))       # True`,note:"Python and/or return values, not strictly True/False. This is useful for defaults."}],[]);return s.jsx(ji.Wrapper,{children:s.jsxs(ji.Container,{className:o?"isOpen":"",children:[s.jsxs(ji.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(hl,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Strings and Basic Data Types"}),s.jsx("div",{className:"subtitle",children:"Core text handling and fundamental values"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(ji.Content,{children:[s.jsx("div",{className:"topNote",children:"Strings and basic data types are used in almost every Python program. If these fundamentals are clear, everything else becomes easier."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Si={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},yx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"for-loops",icon:s.jsx(qi,{}),title:"for loops",summary:"Python for loops iterate over items in an iterable, not over indexes by default.",points:["You can loop over lists, strings, tuples, dicts, sets, files, and more.","for works with any iterable (anything that can return items one by one).","Prefer direct iteration over indexes unless you truly need the index."],example:`nums = [10, 20, 30]

for n in nums:
    print(n)

for ch in "python":
    print(ch)`,note:"In Python, for means: 'give me the next item'. Not 'increment i'."},{id:"enumerate",icon:s.jsx(ta,{}),title:"enumerate",summary:"enumerate gives you both index and value while iterating.",points:["Default start index is 0.","You can set start=1 for human-friendly numbering.","Cleaner than range(len(list))."],example:`names = ["Ash", "Neha", "Niraj"]

for idx, name in enumerate(names):
    print(idx, name)

for idx, name in enumerate(names, start=1):
    print(idx, name)`,note:"Use enumerate whenever you need index + item together."},{id:"zip",icon:s.jsx(Mr,{}),title:"zip",summary:"zip pairs items from multiple iterables into tuples.",points:["Stops at the shortest iterable by default.","Commonly used to combine two lists.","Useful for parallel iteration."],example:`names = ["Ash", "Neha", "Niraj"]
scores = [90, 95, 88]

for name, score in zip(names, scores):
    print(name, score)`,note:"If lengths differ and you want full pairing, use itertools.zip_longest later."},{id:"range",icon:s.jsx(ra,{}),title:"range",summary:"range generates a sequence of numbers lazily (it does not build a list).",points:["range(n): 0 to n-1","range(start, end): start to end-1","range(start, end, step): step can be negative too"],example:`for i in range(3):
    print(i)  # 0 1 2

for i in range(2, 6):
    print(i)  # 2 3 4 5

for i in range(10, 0, -2):
    print(i)  # 10 8 6 4 2`,note:"range is memory-friendly because it generates values on demand."},{id:"list-comprehension",icon:s.jsx(_l,{}),title:"List comprehension",summary:"A compact way to build lists using an expression and a loop.",points:["Faster and cleaner than appending in many cases.","Supports filtering with if condition.","Avoid very complex comprehensions, keep readability."],example:`nums = [1, 2, 3, 4, 5]

squares = [n * n for n in nums]
even_squares = [n * n for n in nums if n % 2 == 0]

print(squares)
print(even_squares)`,note:"If it becomes hard to read, use a normal for loop."},{id:"dict-comprehension",icon:s.jsx(po,{}),title:"Dictionary comprehension",summary:"A compact way to build dictionaries using key:value expressions.",points:["Useful for mapping one list into a lookup dict.","Can filter entries with if.","Keys must be unique; later values overwrite earlier ones."],example:`names = ["Ash", "Neha", "Niraj"]

lengths = {name: len(name) for name in names}
only_long = {name: len(name) for name in names if len(name) > 3}

print(lengths)
print(only_long)`,note:"Dict comprehensions are great for clean transformations."},{id:"set-comprehension",icon:s.jsx(Np,{}),title:"Set comprehension",summary:"A compact way to build sets. Sets automatically keep unique values.",points:["Duplicates are removed automatically.","Useful for extracting unique computed values.","Order is not guaranteed like lists."],example:`nums = [1, 2, 2, 3, 3, 3]

unique_squares = {n * n for n in nums}
print(unique_squares)`,note:"Set comprehension is perfect for uniqueness without extra logic."},{id:"generator-expression",icon:s.jsx(et,{}),title:"Generator expression",summary:"Like list comprehension but lazy. It produces values one by one instead of building a full list.",points:["Uses parentheses instead of brackets.","Memory efficient for large data.","Often used with sum(), any(), all(), max(), min()."],example:`nums = [1, 2, 3, 4, 5]

gen = (n * n for n in nums)

print(gen)        # generator object
print(next(gen))  # 1
print(next(gen))  # 4

total = sum(n * n for n in nums)
print(total)`,note:"Generators are Python's secret weapon for performance and clean pipelines."},{id:"iter-next",icon:s.jsx(gr,{}),title:"iter() and next()",summary:"iter() gives an iterator from an iterable. next() pulls the next item from the iterator.",points:["Iterable: can produce an iterator (like list, string).","Iterator: has __next__() method under the hood.","When iterator ends, it raises StopIteration."],example:`nums = [10, 20, 30]

it = iter(nums)

print(next(it))  # 10
print(next(it))  # 20
print(next(it))  # 30

# next(it) now would raise StopIteration`,note:"for loop internally uses iter() and next() repeatedly."},{id:"custom-iterator-basics",icon:s.jsx(qi,{}),title:"Custom iterator basics",summary:"You can create your own iterator by defining __iter__ and __next__ methods.",points:["__iter__ should return the iterator object (usually self).","__next__ should return the next value or raise StopIteration.","This is used for custom sequences or controlled iteration."],example:`class CountDown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        val = self.current
        self.current -= 1
        return val

for n in CountDown(3):
    print(n)
# Output:
# 3
# 2
# 1`,note:"Custom iterators teach you how Python iteration really works."}],[]);return s.jsx(Si.Wrapper,{children:s.jsxs(Si.Container,{className:o?"isOpen":"",children:[s.jsxs(Si.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(et,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Comprehensions and Iteration Model"}),s.jsx("div",{className:"subtitle",children:"This is where Python becomes Pythonic"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Si.Content,{children:[s.jsx("div",{className:"topNote",children:"Python iteration is built around iterables and iterators. Comprehensions and generators help you write clean, fast, and readable data transformations."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ni={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},wx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"function-definition",icon:s.jsx(Sl,{}),title:"Function definition",summary:"A function is a reusable block of code defined using def.",points:["Functions help avoid repetition and keep code organized.","A function can take inputs (parameters) and can return an output.","Use a docstring for short purpose notes."],example:`def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}"

print(greet("Ash"))`,note:"In Python, indentation is the block. No braces."},{id:"parameters",icon:s.jsx(sx,{}),title:"Parameters",summary:"Parameters are the named inputs in a function definition.",points:["Arguments are the actual values passed during a call.","Python supports positional and keyword arguments.","Parameter order matters when you call positionally."],example:`def add(a, b):
    return a + b

print(add(2, 3))        # positional arguments
print(add(a=2, b=3))    # keyword arguments`,note:"Positional is fast. Keyword is clearer for readability."},{id:"default-parameters",icon:s.jsx(qi,{}),title:"Default parameters",summary:"Default values are used when the caller does not pass that argument.",points:["Defaults are evaluated at function definition time, not call time.","Avoid using mutable defaults like [] or {}.","Use None and create inside the function for safe defaults."],example:`def safe_append(value, arr=None):
    if arr is None:
        arr = []
    arr.append(value)
    return arr

print(safe_append(1))
print(safe_append(2))`,note:"Mutable default argument is one of the biggest Python interview traps."},{id:"args-kwargs",icon:s.jsx(po,{}),title:"args and kwargs",summary:"*args collects extra positional args, **kwargs collects extra keyword args.",points:["*args becomes a tuple inside the function.","**kwargs becomes a dict inside the function.","Commonly used in decorators and flexible APIs."],example:`def show(*args, **kwargs):
    print("args:", args)
    print("kwargs:", kwargs)

show(1, 2, 3, name="Ash", role="dev")`,note:"Names are conventions: args and kwargs can be any name, but keep them standard."},{id:"keyword-only-arguments",icon:s.jsx(ta,{}),title:"Keyword-only arguments",summary:"Keyword-only arguments must be passed using name=value.",points:["Use * in parameter list to force keyword-only args.","This prevents confusion and improves function clarity.","Great for config-like parameters."],example:`def connect(host, port, *, timeout=10, retries=3):
    return f"{host}:{port} timeout={timeout} retries={retries}"

print(connect("localhost", 8080, timeout=5))
# connect("localhost", 8080, 5)  # invalid, must be keyword`,note:"Keyword-only args are a clean way to design safer APIs."},{id:"return-values",icon:s.jsx(et,{}),title:"Return values",summary:"return sends a value back to the caller and stops the function.",points:["If you do not return anything, Python returns None automatically.","You can return any object: number, string, list, dict, even a function.","Multiple return paths are common with early exits."],example:`def find_even(nums):
    for n in nums:
        if n % 2 == 0:
            return n
    return None

print(find_even([1, 3, 5, 8, 9]))`,note:"return ends the function immediately."},{id:"multiple-return",icon:s.jsx(Mr,{}),title:"Multiple return",summary:"Python can return multiple values by returning a tuple.",points:["Technically it returns one tuple object.","Tuple unpacking makes it look like multiple returns.","Used commonly for (value, error) or (min, max) patterns."],example:`def min_max(nums):
    return min(nums), max(nums)

mn, mx = min_max([4, 1, 9, 3])
print(mn, mx)`,note:"If you do: result = min_max(...), result is a tuple."},{id:"scope-rules-legb",icon:s.jsx(Qt,{}),title:"Scope rules (LEGB)",summary:"Python resolves names using LEGB: Local, Enclosing, Global, Built-in.",points:["Local: inside current function.","Enclosing: outer function scopes (closures).","Global: module level variables.","Built-in: Python builtins like len, print."],example:`x = "global"

def outer():
    x = "enclosing"

    def inner():
        x = "local"
        print(x)

    inner()

outer()`,note:"LEGB explains why closures work and why globals can be tricky."},{id:"closures",icon:s.jsx(hn,{}),title:"Closures",summary:"A closure is a function that remembers variables from an enclosing scope.",points:["Closures allow state without using classes.","Common in decorators and function factories.","Use nonlocal if you need to modify the enclosing variable."],example:`def make_counter():
    count = 0

    def inc():
        nonlocal count
        count += 1
        return count

    return inc

c = make_counter()
print(c())  # 1
print(c())  # 2`,note:"Closure = function + remembered environment."},{id:"lambda",icon:s.jsx(jp,{}),title:"lambda",summary:"lambda creates a small anonymous function (single expression).",points:["Use when the function is simple and short-lived.","Most commonly used with sorted, map, filter.","Avoid long lambdas, use def for readability."],example:`nums = [3, 1, 9, 2]
print(sorted(nums, key=lambda x: x))

users = [{"name": "Ash", "age": 25}, {"name": "Neha", "age": 22}]
print(sorted(users, key=lambda u: u["age"]))`,note:"lambda is an expression, not a full function block."},{id:"higher-order-functions",icon:s.jsx(et,{}),title:"Higher order functions",summary:"A higher order function accepts a function as input or returns a function.",points:["Functions are first-class in Python (can be stored in variables).","Used in callbacks, decorators, composition patterns.","Helps write flexible reusable logic."],example:`def apply(fn, value):
    return fn(value)

def square(x):
    return x * x

print(apply(square, 5))

def make_multiplier(n):
    def mul(x):
        return x * n
    return mul

double = make_multiplier(2)
print(double(10))`,note:"If you understand higher-order functions, decorators become easy."}],[]);return s.jsx(Ni.Wrapper,{children:s.jsxs(Ni.Container,{className:o?"isOpen":"",children:[s.jsxs(Ni.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(et,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Functions"}),s.jsx("div",{className:"subtitle",children:"Parameters, scope, closures, and function patterns"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Ni.Content,{children:[s.jsx("div",{className:"topNote",children:"Functions are the building blocks of Python. If this section is strong, you write cleaner code and you understand decorators, callbacks, and real project patterns faster."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ci={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},bx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"try",icon:s.jsx(El,{}),title:"try",summary:"try defines a block where an exception might happen.",points:["Put risky code inside try, like file reading, parsing, network calls.","If an exception happens inside try, Python jumps to the matching except block.","If no exception happens, except blocks are skipped."],example:`try:
    x = int("12")
    print(x)
except ValueError:
    print("Invalid number")`,note:"try is not for normal control flow. Use it only when failure is possible and expected."},{id:"except",icon:s.jsx(px,{}),title:"except",summary:"except catches exceptions and prevents the program from crashing.",points:["Catch specific exceptions whenever possible (ValueError, KeyError, etc.).","You can catch multiple exceptions in a tuple.","You can capture the exception object using as e."],example:`try:
    num = int("12x")
except ValueError as e:
    print("Conversion failed:", e)

try:
    d = {"a": 1}
    print(d["b"])
except (KeyError, TypeError):
    print("Key missing or wrong type")`,note:"Avoid bare except. It can hide real bugs and make debugging painful."},{id:"else",icon:s.jsx(jl,{}),title:"else",summary:"else runs only if no exception happens inside try.",points:["Use else for code that should run after try succeeds.","Keeps try block small and focused on the risky lines.","Helps avoid mixing success logic inside try."],example:`try:
    num = int("50")
except ValueError:
    print("Invalid number")
else:
    print("Converted value:", num)
    print("Now safe to use num")`,note:"Small try block + else for success path is a clean pattern."},{id:"finally",icon:s.jsx(ta,{}),title:"finally",summary:"finally runs no matter what, even if an exception occurs.",points:["Use finally for cleanup tasks like closing files, releasing locks, resetting state.","finally runs even if you return from try/except.","Context managers (with) are often better for cleanup, but finally is still important."],example:`f = None

try:
    f = open("data.txt", "r")
    data = f.read()
    print(data)
except FileNotFoundError:
    print("File not found")
finally:
    if f:
        f.close()
        print("File closed")`,note:"Prefer using with open(...) as f for files, but finally is universal cleanup."},{id:"raise",icon:s.jsx($h,{}),title:"raise",summary:"raise is used to throw an exception intentionally.",points:["Use raise when input is invalid or when a rule is broken.","You can raise built-in exceptions (ValueError, TypeError).","You can re-raise the same exception inside except by using raise alone."],example:`def set_age(age):
    if age < 0:
        raise ValueError("age cannot be negative")
    return age

try:
    set_age(-1)
except ValueError as e:
    print("Error:", e)

try:
    int("x")
except ValueError:
    print("failed, re-raising now")
    raise`,note:"Raise early, fail fast. It keeps bugs close to the cause."},{id:"custom-exceptions",icon:s.jsx(ml,{}),title:"Custom exceptions",summary:"Custom exceptions help you express domain errors clearly.",points:["Create a custom exception by subclassing Exception.","Use custom exceptions for business rules (PaymentError, ValidationError).","They make error handling more readable and specific."],example:`class ValidationError(Exception):
    pass

def validate_username(name):
    if len(name) < 3:
        raise ValidationError("username must be at least 3 characters")

try:
    validate_username("ab")
except ValidationError as e:
    print("Validation failed:", e)`,note:"Name your custom exception based on the domain, not the technical detail."},{id:"exception-hierarchy",icon:s.jsx(Qt,{}),title:"Exception hierarchy",summary:"Exceptions follow an inheritance chain. Catching a base class catches all derived ones.",points:["BaseException is the top-level base (SystemExit, KeyboardInterrupt live here).","Exception is the common base for most application errors.","Specific exceptions inherit from Exception (ValueError, KeyError, TypeError).","Catch the most specific first, then broader if needed."],example:`try:
    x = 1 / 0
except ZeroDivisionError:
    print("Specific: division by zero")
except Exception:
    print("General: some other exception")

# Common rule:
# except Exception is safer than bare except
# because it will not catch KeyboardInterrupt, SystemExit, etc.`,note:"Catch specific exceptions first. Broad catches should be last and intentional."}],[]);return s.jsx(Ci.Wrapper,{children:s.jsxs(Ci.Container,{className:o?"isOpen":"",children:[s.jsxs(Ci.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(ml,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Error Handling"}),s.jsx("div",{className:"subtitle",children:"Write safe code without hiding bugs"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Ci.Content,{children:[s.jsx("div",{className:"topNote",children:"Error handling is about control. You decide what to do when something fails instead of letting the program crash. Catch specific exceptions and keep the risky code small."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},_i={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},kx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"import-basics",icon:s.jsx(Xh,{}),title:"import basics",summary:"import loads code from another module so you can reuse functions, classes, and variables.",points:["A module is usually a single .py file.","import module gives access using module.name","Imports help you organize code and avoid copy-paste."],example:`# math is a standard library module
import math

print(math.sqrt(16))   # 4.0
print(math.pi)         # 3.14159...`,note:"Tip - importing a module runs its top-level code once (when first imported)."},{id:"from-import",icon:s.jsx(hn,{}),title:"from import",summary:"from module import name lets you import specific things without module prefix.",points:["Use when you only need a few items from a module.","Avoid importing too many names, it can reduce clarity.","You can import multiple names in one line."],example:`from math import sqrt, pi

print(sqrt(25))   # 5.0
print(pi)         # 3.14159...`,note:"Rule - prefer explicit imports. Avoid wildcard imports in real projects."},{id:"aliasing",icon:s.jsx(Mr,{}),title:"Aliasing",summary:"Aliasing renames an import, commonly used to shorten long module names.",points:["Use 'as' for aliasing: import numpy as np","Aliases improve readability when module names are long.","Be consistent with common aliases (np, pd, plt)."],example:`import math as m

print(m.sqrt(49))   # 7.0`,note:"Good aliasing is standard. Weird aliasing confuses everyone."},{id:"name-main",icon:s.jsx(ra,{}),title:'__name__ == "__main__"',summary:"This pattern prevents code from running on import. It runs only when the file is executed directly.",points:["__name__ is a special variable set by Python.",'When you run a file: __name__ becomes "__main__".',"When you import a file: __name__ becomes the module name."],example:`# file: app.py
def run():
    print("Running app logic")

if __name__ == "__main__":
    run()

# If you run: python app.py -> it prints
# If you import app in another file -> it does NOT auto run`,note:"This is one of the most important patterns for clean Python modules."},{id:"creating-modules",icon:s.jsx(Cl,{}),title:"Creating modules",summary:"Any .py file can be a module. Put reusable logic in it and import it elsewhere.",points:["Create a file like utils.py with helper functions.","Import it in main file and call its functions.","Keep module names lowercase and readable."],example:`# file: utils.py
def add(a, b):
    return a + b

# file: main.py
import utils

print(utils.add(2, 3))  # 5`,note:"Split code by responsibility. One big file becomes painful quickly."},{id:"package-structure",icon:s.jsx(Gi,{}),title:"Package structure",summary:"A package is a folder that groups multiple modules together.",points:["A package is typically a directory containing Python files.","Modern Python supports namespace packages, but commonly you will see __init__.py.","__init__.py can expose package-level imports and setup."],example:`project/
  app/
    __init__.py
    main.py
    utils.py

# file: app/main.py
from app.utils import add`,note:"Packages help scale projects. Modules are good for small pieces."},{id:"virtual-environments",icon:s.jsx(qh,{}),title:"Virtual environments",summary:"A virtual environment isolates project dependencies so they don't clash with other projects.",points:["Every project should have its own environment.","venv creates a local environment folder with Python + installed packages.","Activate it before installing packages."],example:`# Create venv
python -m venv .venv

# Activate (Windows)
.venv\\Scripts\\activate

# Activate (Mac/Linux)
source .venv/bin/activate

# Deactivate
deactivate`,note:"This prevents the 'it works on my system' dependency mess."},{id:"pip-basics",icon:s.jsx(Qi,{}),title:"pip basics",summary:"pip installs and manages Python packages from PyPI.",points:["Install a package: pip install requests","See installed packages: pip list","Freeze dependencies: pip freeze > requirements.txt","Install from file: pip install -r requirements.txt"],example:`pip install requests
pip list
pip freeze > requirements.txt
pip install -r requirements.txt`,note:"In real projects, always commit requirements.txt (or use pyproject.toml if using modern tooling)."}],[]);return s.jsx(_i.Wrapper,{children:s.jsxs(_i.Container,{className:o?"isOpen":"",children:[s.jsxs(_i.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Qi,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Modules and Packages"}),s.jsx("div",{className:"subtitle",children:"Organize code, reuse logic, manage dependencies"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(_i.Content,{children:[s.jsx("div",{className:"topNote",children:"This section is about writing Python like a real project. Imports, packages, venv, and pip are what make your code reusable and deployable."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Pi={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},jx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"open",icon:s.jsx(Gi,{}),title:"open",summary:"open() opens a file and returns a file object. You choose mode like read, write, append.",points:["Basic signature: open(path, mode, encoding=...)","Common modes: 'r' read, 'w' write (overwrite), 'a' append, 'rb' binary read","Always prefer using encoding='utf-8' for text files"],example:`# open a file for reading
f = open("notes.txt", "r", encoding="utf-8")
data = f.read()
f.close()

print(data)`,note:"If you forget close(), file handle can remain open longer than needed."},{id:"read",icon:s.jsx(Cl,{}),title:"read",summary:"Reading means getting file content into your program.",points:["read() reads the entire file as one string (careful for huge files)","readline() reads one line at a time","readlines() reads all lines into a list"],example:`f = open("notes.txt", "r", encoding="utf-8")

all_text = f.read()
print(all_text)

f.close()`,note:"For large files, prefer line-by-line iteration instead of read()."},{id:"write",icon:s.jsx(Nl,{}),title:"write",summary:"write() writes text to a file. Mode 'w' overwrites existing content.",points:["Mode 'w' creates the file if it does not exist","Mode 'w' clears old content before writing new content","write() does not add newline automatically, you must add '\\n' yourself"],example:`f = open("output.txt", "w", encoding="utf-8")
f.write("Line 1\\n")
f.write("Line 2\\n")
f.close()`,note:"If you run this again, output.txt will be overwritten from scratch."},{id:"append",icon:s.jsx(ox,{}),title:"append",summary:"Append adds new content at the end of an existing file using mode 'a'.",points:["Mode 'a' creates the file if it does not exist","Mode 'a' does not delete old content","Useful for logs and incremental saves"],example:`f = open("log.txt", "a", encoding="utf-8")
f.write("New log line\\n")
f.close()`,note:"Append is safer than write when you do not want to lose old data."},{id:"with-context-manager",icon:s.jsx(El,{}),title:"with context manager",summary:"with open(...) automatically closes the file, even if an error happens.",points:["Best practice for file handling","No need to manually call close()","Works for both reading and writing"],example:`with open("notes.txt", "r", encoding="utf-8") as f:
    data = f.read()

print(data)`,note:"This is the cleanest and safest way to work with files in Python."},{id:"json-read-write",icon:s.jsx(Sl,{}),title:"JSON read and write",summary:"Use the json module to store and load structured data.",points:["json.dumps() converts Python object -> JSON string","json.loads() converts JSON string -> Python object","json.dump() writes JSON to a file, json.load() reads JSON from a file"],example:`import json

data = {
    "name": "Ash",
    "role": "Developer",
    "skills": ["React", "Node", "Python"]
}

# write json
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)

# read json
with open("data.json", "r", encoding="utf-8") as f:
    loaded = json.load(f)

print(loaded["name"])`,note:"Always store JSON using utf-8 and indent=4 for readability in notes projects."},{id:"csv-basics",icon:s.jsx(Np,{}),title:"CSV basics",summary:"CSV is a simple table format. Use csv module for correct parsing and writing.",points:["csv.reader reads rows as lists","csv.DictReader reads rows as dictionaries using headers","csv.writer and csv.DictWriter write CSV correctly with commas and quoting"],example:`import csv

# writing a csv
rows = [
    ["name", "score"],
    ["Ash", 90],
    ["Neha", 95],
]

with open("scores.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(rows)

# reading a csv
with open("scores.csv", "r", newline="", encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)`,note:"newline='' is recommended for CSV on Windows to avoid blank lines."}],[]);return s.jsx(Pi.Wrapper,{children:s.jsxs(Pi.Container,{className:o?"isOpen":"",children:[s.jsxs(Pi.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Gi,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"File Handling and IO"}),s.jsx("div",{className:"subtitle",children:"Read, write, store structured data safely"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Pi.Content,{children:[s.jsx("div",{className:"topNote",children:"File IO is a core skill for scripts, automation, and backend work. Use with open(...) whenever possible to avoid file handle leaks."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ei={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Sx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"class-object",icon:s.jsx(Vh,{}),title:"Class and object",summary:"Class is a blueprint. Object is a real instance created from the class.",points:["Class defines attributes (data) and methods (behavior).","Object is created by calling the class like a function.","Everything in Python is an object, even numbers and functions."],example:`class Car:
    pass

c = Car()
print(type(c))  # <class '__main__.Car'>`,note:"In Python, creating an object is usually: obj = ClassName()."},{id:"init",icon:s.jsx(co,{}),title:"__init__",summary:"__init__ runs right after object creation and sets initial state.",points:["__init__ is not a constructor in the C++ sense, but it acts like an initializer.","self is the current instance passed automatically.","Use __init__ to set instance variables."],example:`class User:
    def __init__(self, name):
        self.name = name

u = User("Ash")
print(u.name)`,note:"__init__ runs after the object is created, to initialize it."},{id:"instance-variables",icon:s.jsx(dx,{}),title:"Instance variables",summary:"Instance variables belong to each object. Every object gets its own copy.",points:["Defined using self.variable inside methods (usually inside __init__).","Different objects can store different values.","They represent the object's state."],example:`class Counter:
    def __init__(self):
        self.count = 0  # instance variable

a = Counter()
b = Counter()

a.count = 5
print(a.count)  # 5
print(b.count)  # 0`,note:"If it starts with self., it is tied to that object."},{id:"class-variables",icon:s.jsx(Qt,{}),title:"Class variables",summary:"Class variables are shared across all objects of that class.",points:["Defined directly inside the class, not inside methods.","Useful for shared constants or counters.","If you reassign using self.var, you may create a new instance variable instead."],example:`class User:
    company = "A2RP"  # class variable

    def __init__(self, name):
        self.name = name

u1 = User("Ash")
u2 = User("Neha")

print(u1.company)  # A2RP
print(u2.company)  # A2RP`,note:"Access as ClassName.var for clarity when you mean shared data."},{id:"methods",icon:s.jsx(Sl,{}),title:"Methods",summary:"Methods are functions defined inside a class and usually operate on an object.",points:["Instance methods take self as first argument.","Class methods take cls as first argument and are marked with @classmethod.","Static methods do not take self or cls and are marked with @staticmethod."],example:`class Math:
    factor = 2

    def mul(self, x):
        return x * self.factor  # instance method

    @classmethod
    def make(cls):
        return cls()

    @staticmethod
    def add(a, b):
        return a + b

m = Math()
print(m.mul(5))        # 10
print(Math.add(2, 3))  # 5`,note:"Most of the time you will use instance methods."},{id:"self-keyword",icon:s.jsx(hn,{}),title:"self keyword",summary:"self is the current object reference. Python passes it automatically.",points:["When you call obj.method(), Python translates it to Class.method(obj).","self is not a keyword, but a strong naming convention.","Without self, you cannot access instance state."],example:`class Demo:
    def show(self):
        print("self is:", self)

d = Demo()
d.show()
# internally: Demo.show(d)`,note:"Always keep self as the first parameter for instance methods."},{id:"inheritance",icon:s.jsx(ex,{}),title:"Inheritance",summary:"Inheritance allows a child class to reuse and extend a parent class.",points:["Use class Child(Parent) syntax.","Child inherits methods and can override them.","Helps reuse behavior but keep it simple and readable."],example:`class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Bark"

d = Dog()
print(d.speak())`,note:"Override methods when the child needs different behavior."},{id:"multiple-inheritance",icon:s.jsx(Mr,{}),title:"Multiple inheritance",summary:"Python allows a class to inherit from multiple parents.",points:["Powerful but can become confusing if overused.","Used in mixins and small capability-based composition.","MRO decides which parent method is chosen first."],example:`class A:
    def show(self):
        return "A"

class B:
    def show(self):
        return "B"

class C(A, B):
    pass

c = C()
print(c.show())  # A (because A is first in inheritance list)`,note:"Prefer mixins for multiple inheritance, not deep complex trees."},{id:"mro",icon:s.jsx(gr,{}),title:"Method resolution order (MRO)",summary:"MRO is the rule Python uses to decide which method to call in inheritance chains.",points:["You can inspect it using ClassName.mro() or ClassName.__mro__.","Python uses C3 linearization for consistent method lookup.","MRO matters most in multiple inheritance."],example:`class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print(D.mro())`,note:"If you do multiple inheritance, always understand MRO."},{id:"super",icon:s.jsx(hn,{}),title:"super()",summary:"super() calls the next method in the MRO, usually the parent version.",points:["Common in __init__ to initialize parent attributes.","In multiple inheritance, super() follows MRO, not 'direct parent'.","Use super() for cooperative inheritance design."],example:`class Base:
    def __init__(self, name):
        self.name = name

class User(Base):
    def __init__(self, name, role):
        super().__init__(name)
        self.role = role

u = User("Ash", "dev")
print(u.name, u.role)`,note:"super() is clean and future-proof when inheritance expands."},{id:"polymorphism",icon:s.jsx(Mr,{}),title:"Polymorphism",summary:"Polymorphism means different objects can be used through the same interface.",points:["Python supports polymorphism naturally through duck typing.","If objects provide the needed method, they can be used interchangeably.","Helps write flexible and reusable code."],example:`class Cat:
    def speak(self):
        return "Meow"

class Dog:
    def speak(self):
        return "Bark"

def talk(animal):
    print(animal.speak())

talk(Cat())
talk(Dog())`,note:"Same function, different object types, same behavior contract."},{id:"duck-typing",icon:s.jsx(jl,{}),title:"Duck typing",summary:"If it behaves like a duck, treat it like a duck. Python cares about behavior, not type.",points:["Python checks methods and attributes at runtime.","You often avoid heavy type checks and rely on capabilities.","This is why interfaces are not required for polymorphism in Python."],example:`def print_len(x):
    print(len(x))

print_len([1, 2, 3])
print_len("python")
print_len({"a": 1, "b": 2})`,note:"Duck typing is powerful, but always write clear error messages and tests."},{id:"dunder-methods",icon:s.jsx(co,{}),title:"Dunder methods (__str__, __repr__, __len__)",summary:"Dunder methods customize how objects behave with built-in functions and operators.",points:["__str__ gives user-friendly text (print).","__repr__ gives developer-friendly representation (debugging).","__len__ allows len(obj)."],example:`class Bag:
    def __init__(self, items):
        self.items = items

    def __str__(self):
        return "Bag with " + str(len(self.items)) + " items"

    def __repr__(self):
        return "Bag(items=" + repr(self.items) + ")"

    def __len__(self):
        return len(self.items)

b = Bag([1, 2, 3])
print(str(b))
print(repr(b))
print(len(b))`,note:"Dunder methods make your classes feel like built-in types."},{id:"dataclasses",icon:s.jsx(Qt,{}),title:"Dataclasses",summary:"Dataclasses reduce boilerplate for classes that mainly store data.",points:["Auto-generates __init__, __repr__, and comparison methods.","Cleaner than writing everything manually.","Best for simple models and structured data."],example:`from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int

u = User("Ash", 25)
print(u)`,note:"Dataclasses are perfect when your class is mostly data + simple rules."}],[]);return s.jsx(Ei.Wrapper,{children:s.jsxs(Ei.Container,{className:o?"isOpen":"",children:[s.jsxs(Ei.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Qt,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Object Oriented Programming"}),s.jsx("div",{className:"subtitle",children:"Python version of OOP is slightly different"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Ei.Content,{children:[s.jsx("div",{className:"topNote",children:"Python OOP is practical. It supports inheritance and polymorphism, but also encourages simple, flexible designs using duck typing and clean data models."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},zi={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Nx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"object-identity",icon:s.jsx(po,{}),title:"Object identity",summary:"Identity means the object itself, not just its value. Two objects can have the same value but still be different objects.",points:["Value equality checks content (==).","Identity checks if two names point to the same object (is).","Use is mainly for None checks and identity checks, not normal value comparisons."],example:`a = [1, 2]
b = [1, 2]

print(a == b)  # True (same values)
print(a is b)  # False (different objects)

x = None
print(x is None)  # True`,note:"Rule - use == for values, use is for identity (mostly None)."},{id:"id-function",icon:s.jsx(gr,{}),title:"id()",summary:"id(obj) returns a unique identity of an object during its lifetime (commonly its memory address in CPython).",points:["id helps you understand reference behavior.","Two variables pointing to the same object will have the same id.","Do not depend on id for program logic, use it only for debugging/learning."],example:`a = [1, 2, 3]
b = a

print(id(a))
print(id(b))   # same as a

b.append(4)
print(a)       # [1, 2, 3, 4]`,note:"If id is same, you are looking at the same object."},{id:"mutability",icon:s.jsx(hn,{}),title:"Mutability vs immutability",summary:"Mutable objects can change after creation. Immutable objects cannot change, a new object is created instead.",points:["Mutable: list, dict, set","Immutable: int, float, bool, str, tuple (mostly)","Mutability affects copying, function arguments, and bugs in shared state."],example:`# Mutable example (list)
a = [1, 2]
b = a
b.append(3)
print(a)  # [1, 2, 3]

# Immutable example (int)
x = 10
y = x
y += 1
print(x)  # 10
print(y)  # 11`,note:"Mutation changes the same object. Immutability creates a new object."},{id:"shallow-copy",icon:s.jsx(Kh,{}),title:"Shallow copy",summary:"A shallow copy copies the outer container but keeps references to the same inner objects.",points:["Good for flat lists/dicts with primitives.","Dangerous for nested lists/dicts because inner objects are still shared.","Common methods: list.copy(), dict.copy(), copy.copy(obj)."],example:`import copy

a = [[1, 2], [3, 4]]
b = copy.copy(a)   # shallow copy

b[0].append(99)

print(a)  # [[1, 2, 99], [3, 4]]
print(b)  # [[1, 2, 99], [3, 4]]`,note:"Outer is new, inner is shared. That is the trap."},{id:"deep-copy",icon:s.jsx(Qt,{}),title:"Deep copy",summary:"A deep copy recursively copies everything, including nested objects.",points:["Useful for nested structures you want fully independent.","More expensive than shallow copy (time + memory).","Use copy.deepcopy(obj)."],example:`import copy

a = [[1, 2], [3, 4]]
b = copy.deepcopy(a)

b[0].append(99)

print(a)  # [[1, 2], [3, 4]]
print(b)  # [[1, 2, 99], [3, 4]]`,note:"Deep copy breaks shared references inside nested structures."},{id:"reference-behavior",icon:s.jsx(hn,{}),title:"Reference behavior",summary:"Variables in Python are names pointing to objects. Assignment never copies, it only binds a name to an object.",points:["a = b does not copy b, it makes a point to the same object.","Function arguments are passed as object references (passed by assignment).","Mutating a passed-in mutable object affects the caller."],example:`def add_item(lst):
    lst.append("x")

items = []
add_item(items)
print(items)  # ['x']`,note:"This is why default mutable arguments are a famous Python trap (we will cover it in Functions)."},{id:"gc-basics",icon:s.jsx(cx,{}),title:"Garbage collection basics",summary:"Python frees memory by removing unreachable objects. CPython uses reference counting plus a cyclic garbage collector.",points:["Reference counting frees objects immediately when count becomes zero.","Cyclic GC handles reference cycles (objects referencing each other).","You rarely manage memory manually, but you should avoid unnecessary references."],example:`# Reference count drops to zero example
a = [1, 2, 3]
a = None  # list object becomes unreachable and can be freed`,note:"Memory leaks in Python often come from global caches or long-lived references, not from missing 'free'."},{id:"small-integer-caching",icon:s.jsx(et,{}),title:"Small integer caching",summary:"CPython reuses small integers for performance, so some integers share the same identity.",points:["Commonly, integers like -5 to 256 are cached in CPython.","So a is b can be True for small integers even if created separately.","Never rely on this in code logic. Use == for numeric comparisons."],example:`a = 100
b = 100
print(a is b)  # often True in CPython

x = 1000
y = 1000
print(x is y)  # often False

print(a == b)  # True always`,note:"Identity caching is an implementation detail, not a language guarantee."},{id:"string-interning",icon:s.jsx(hl,{}),title:"String interning",summary:"CPython may reuse some strings (especially identifiers) to save memory and speed up comparisons.",points:["Some literals may point to the same object automatically.","Interning is more common for small strings and identifier-like strings.","Never rely on is for string comparisons, always use ==."],example:`a = "python"
b = "python"
print(a is b)   # often True for literals

c = "".join(["py", "thon"])
print(a == c)   # True
print(a is c)   # often False

# Correct comparison:
print(a == c)   # True`,note:"String interning exists, but your code should be correct without caring about it."}],[]);return s.jsx(zi.Wrapper,{children:s.jsxs(zi.Container,{className:o?"isOpen":"",children:[s.jsxs(zi.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(gr,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Memory Model and Mutability"}),s.jsx("div",{className:"subtitle",children:"This separates average from strong Python dev"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(zi.Content,{children:[s.jsx("div",{className:"topNote",children:"If you understand references, identity, and copying, you avoid 80% of confusing Python bugs."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ti={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Cx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"map",icon:s.jsx(et,{}),title:"map",summary:"map applies a function to every item and returns a lazy iterator.",points:["map(func, iterable) transforms items one by one.","Result is an iterator in Python 3, so wrap with list() to see values.","Use map when transformation is simple. For readability, list comprehensions are often preferred."],example:`nums = [1, 2, 3, 4]

squares = map(lambda x: x * x, nums)

print(list(squares))  # [1, 4, 9, 16]`,note:"Pythonic alternative: [x * x for x in nums]"},{id:"filter",icon:s.jsx(Zh,{}),title:"filter",summary:"filter keeps only items that pass a condition and returns a lazy iterator.",points:["filter(func, iterable) returns items where func(item) is True.","Result is an iterator in Python 3.","Most common alternative is list comprehension with if."],example:`nums = [1, 2, 3, 4, 5, 6]

evens = filter(lambda x: x % 2 == 0, nums)

print(list(evens))  # [2, 4, 6]`,note:"Pythonic alternative: [x for x in nums if x % 2 == 0]"},{id:"reduce",icon:s.jsx(ux,{}),title:"reduce",summary:"reduce combines items into a single value by repeatedly applying a function.",points:["reduce is in functools: from functools import reduce","It applies func(accumulator, item) repeatedly.","Use it when you truly need fold-style logic. For sum/product, built-ins are simpler."],example:`from functools import reduce

nums = [1, 2, 3, 4]

total = reduce(lambda acc, x: acc + x, nums, 0)

print(total)  # 10`,note:"Prefer built-ins when possible: sum(nums) is clearer than reduce for addition."},{id:"sorted-with-key",icon:s.jsx(_l,{}),title:"sorted with key",summary:"sorted sorts any iterable and returns a new list. key controls sorting logic.",points:["sorted(iterable, key=..., reverse=...) returns a new list.","key is a function that returns the value used for sorting.","Use key to sort complex structures (dicts, tuples, objects)."],example:`users = [
    {"name": "Ash", "age": 25},
    {"name": "Neha", "age": 22},
    {"name": "Niraj", "age": 28},
]

by_age = sorted(users, key=lambda u: u["age"])

print(by_age)
# [{'name': 'Neha', 'age': 22}, {'name': 'Ash', 'age': 25}, {'name': 'Niraj', 'age': 28}]`,note:"For in-place sorting of a list, use list.sort(...)."},{id:"functools",icon:s.jsx(co,{}),title:"functools",summary:"functools contains helper tools for working with functions and callables.",points:["Common utilities: reduce, partial, lru_cache, wraps.","wraps is important for decorators to preserve function metadata.","partial is useful to pre-fill arguments."],example:`import functools

# functools.wraps is used inside decorators
# functools.partial helps build a new callable with preset args`,note:"If you write decorators, functools.wraps is not optional."},{id:"partial",icon:s.jsx(tx,{}),title:"partial",summary:"partial creates a new function by fixing some arguments of an existing function.",points:["Useful when you need a function with fewer arguments.","Very common in callbacks and configuration-heavy code.","Returns a callable that behaves like the original function with preset args."],example:`from functools import partial

def power(base, exp):
    return base ** exp

square = partial(power, exp=2)
cube = partial(power, exp=3)

print(square(5))  # 25
print(cube(2))    # 8`,note:"partial is like making a customized version of a function."},{id:"decorators-basics",icon:s.jsx(Qt,{}),title:"Decorators basics",summary:"A decorator is a function that takes another function and returns a new function with extra behavior.",points:["Decorators wrap a function without changing its source code.","Used for logging, timing, caching, authorization, retries, etc.","Syntax sugar: @decorator above a function definition."],example:`def my_decorator(fn):
    def wrapper():
        print("Before")
        fn()
        print("After")
    return wrapper

@my_decorator
def hello():
    print("Hello")

hello()

# Output:
# Before
# Hello
# After`,note:"Decorators work because functions are objects in Python."},{id:"writing-decorators",icon:s.jsx(Nl,{}),title:"Writing decorators",summary:"Use *args and **kwargs to support any function signature. Use functools.wraps to preserve metadata.",points:["wrapper should accept *args and **kwargs to handle all inputs.","Return the result of the original function.","Use @wraps(fn) so name, docstring, and help() stay correct."],example:`from functools import wraps

def logger(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        print("Calling:", fn.__name__, "args:", args, "kwargs:", kwargs)
        result = fn(*args, **kwargs)
        print("Done:", fn.__name__)
        return result
    return wrapper

@logger
def add(a, b):
    return a + b

print(add(2, 3))`,note:"Always use wraps in real projects. Without it, debugging and docs become messy."}],[]);return s.jsx(Ti.Wrapper,{children:s.jsxs(Ti.Container,{className:o?"isOpen":"",children:[s.jsxs(Ti.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(et,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Functional Tools"}),s.jsx("div",{className:"subtitle",children:"Practical function-based helpers used in real Python code"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Ti.Content,{children:[s.jsx("div",{className:"topNote",children:"These tools help you write compact, reusable logic. Use them for clarity, not for showing off."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Li={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},_x=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"yield",icon:s.jsx(et,{}),title:"yield",summary:"yield pauses a function and returns a value. Next time, it resumes from where it stopped.",points:["return ends the function. yield pauses it.","A function with yield becomes a generator function.","Generators produce values one at a time (on-demand)."],example:`def demo():
    yield 1
    yield 2
    yield 3

g = demo()
print(next(g))  # 1
print(next(g))  # 2
print(next(g))  # 3`,note:"Think of yield as: 'pause here and remember the state'."},{id:"generator-functions",icon:s.jsx(ra,{}),title:"Generator functions",summary:"A generator function returns a generator object that can be iterated.",points:["Calling a generator function does not run the body immediately.","It returns a generator object that runs only when you iterate or call next().","When finished, it raises StopIteration automatically."],example:`def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

g = count_up_to(3)
for x in g:
    print(x)

# Output:
# 1
# 2
# 3`,note:"A generator is just an iterator that remembers its execution state."},{id:"generator-vs-list",icon:s.jsx(_l,{}),title:"Generator vs list",summary:"Lists store all values in memory. Generators produce values one by one.",points:["List comprehension creates a full list immediately.","Generator expression is lazy, it computes values on demand.","Generators are memory-friendly for large data."],example:`# List comprehension (eager)
nums_list = [x * 2 for x in range(5)]
print(nums_list)  # [0, 2, 4, 6, 8]

# Generator expression (lazy)
nums_gen = (x * 2 for x in range(5))
print(nums_gen)        # <generator object ...>
print(list(nums_gen))  # [0, 2, 4, 6, 8]`,note:"Use generators when data is large or when you do not need everything at once."},{id:"lazy-evaluation",icon:s.jsx(Pl,{}),title:"Lazy evaluation",summary:"Lazy evaluation means values are computed only when needed, not upfront.",points:["Generators are lazy by default.","This helps performance when you might not consume all values.","It is common in pipelines: filter -> map -> reduce style."],example:`def numbers():
    print("start")
    yield 1
    print("middle")
    yield 2
    print("end")
    yield 3

g = numbers()
print(next(g))  # prints: start, then 1
print(next(g))  # prints: middle, then 2`,note:"Notice how the prints happen only when next() is called."},{id:"sending-values",icon:s.jsx(ax,{}),title:"Sending values to generators",summary:"You can send values into a generator using .send(). The value becomes the result of yield.",points:["send(value) continues the generator and injects value into it.","The first call must be next() or send(None) to start the generator.","Useful for advanced workflows like coroutines and streaming processing."],example:`def worker():
    msg = yield "ready"
    while True:
        msg = yield f"got: {msg}"

g = worker()
print(next(g))          # ready (starts generator)
print(g.send("hi"))     # got: hi
print(g.send("again"))  # got: again`,note:"send() is advanced. Use it when you need a two-way generator."}],[]);return s.jsx(Li.Wrapper,{children:s.jsxs(Li.Container,{className:o?"isOpen":"",children:[s.jsxs(Li.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(et,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Generators and Advanced Iteration"}),s.jsx("div",{className:"subtitle",children:"Lazy, memory-friendly iteration patterns"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Li.Content,{children:[s.jsx("div",{className:"topNote",children:"Generators help you process large data without loading everything into memory. This is one of the most Pythonic performance tools."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ii={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Px=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"what-is-async",icon:s.jsx(et,{}),title:"What is async",summary:"Async means your program can start a task and continue doing other work while waiting for it to finish.",points:["Async is mainly useful for waiting tasks, like network calls, file I/O, database calls.","It helps avoid blocking the entire program while waiting.","In Python, async code is built around coroutines (functions marked with async)."],example:`# Async idea (concept)
# Start task A (waiting)
# Do task B while A is waiting
# Resume A when ready`,note:"Async is not 'faster CPU'. It is 'better waiting management'."},{id:"event-loop",icon:s.jsx(Pl,{}),title:"Event loop concept",summary:"The event loop is the scheduler that runs async tasks and switches between them when they are waiting.",points:["Async tasks run until they hit an await point (a waiting point).","When a task awaits, the event loop can run another task.","This creates concurrency without using multiple threads for each task."],example:`# Simple mental model:
# Task 1 runs -> awaits -> pauses
# Event loop runs Task 2 -> awaits -> pauses
# When Task 1 is ready -> resume it`,note:"Event loop = traffic controller for coroutines."},{id:"async-await",icon:s.jsx(jp,{}),title:"async and await",summary:"async defines a coroutine. await pauses it until an async operation completes.",points:["async def creates a coroutine function.","await can only be used inside async functions.","You run coroutines using an event loop (commonly asyncio.run)."],example:`import asyncio

async def fetch_data():
    await asyncio.sleep(1)  # pretend network wait
    return "data"

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())`,note:"await does not block the whole program. It pauses only that coroutine."},{id:"when-to-use-async",icon:s.jsx(Sp,{}),title:"When to use async",summary:"Use async when you have many I/O waits and want concurrency with low overhead.",points:["Good for: APIs, web scraping, many HTTP requests, websockets, chat servers.","Not good for: CPU-heavy tasks like image processing, ML training (use multiprocessing).","Async shines when you have many tasks mostly waiting on I/O."],example:`# Good use:
# - send 100 HTTP requests concurrently

# Not the best use:
# - heavy CPU loops (async won't speed that up)`,note:"Rule: if most time is waiting, async helps. If most time is computing, async doesn't."}],[]);return s.jsx(Ii.Wrapper,{children:s.jsxs(Ii.Container,{className:o?"isOpen":"",children:[s.jsxs(Ii.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(et,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Async Basics"}),s.jsx("div",{className:"subtitle",children:"Just core mental model"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Ii.Content,{children:[s.jsx("div",{className:"topNote",children:"Async is about handling waiting efficiently. It is not magic speed. Use it when tasks spend time waiting on I/O."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Oi={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},Ex=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"datetime",icon:s.jsx(Sp,{}),title:"datetime",summary:"Work with dates and times using datetime, date, time, and timedelta.",points:["datetime handles full date + time.","timedelta represents a duration (difference).","strftime formats datetime into a string.","Use datetime.now() for current local time."],example:`from datetime import datetime, timedelta

now = datetime.now()
print(now)

future = now + timedelta(days=7)
print(future)

print(now.strftime("%Y-%m-%d %H:%M:%S"))`,note:"For timezone-heavy work, start with datetime and later explore zoneinfo."},{id:"collections",icon:s.jsx(Qt,{}),title:"collections module",summary:"Extra data structures that are faster and cleaner for many tasks.",points:["Counter counts items quickly.","defaultdict avoids manual key checks.","deque is a fast queue from both ends.","namedtuple gives tuple-like objects with named fields."],example:`from collections import Counter, defaultdict, deque

# Counter
c = Counter("mississippi")
print(c)

# defaultdict
d = defaultdict(int)
d["a"] += 1
print(d["a"])

# deque
q = deque([1, 2, 3])
q.appendleft(0)
q.append(4)
print(q)`,note:"If a problem feels like 'counting' or 'queue', collections usually has the perfect tool."},{id:"itertools",icon:s.jsx(qi,{}),title:"itertools",summary:"Fast iterator building blocks for looping, combinations, and patterns.",points:["product creates Cartesian product (like nested loops).","permutations generates all orderings.","combinations picks unique groups.","chain joins multiple iterables into one stream."],example:`import itertools

print(list(itertools.product([1, 2], ["a", "b"])))
print(list(itertools.combinations([1, 2, 3], 2)))
print(list(itertools.permutations([1, 2, 3], 2)))

nums = itertools.chain([1, 2], [3, 4])
print(list(nums))`,note:"itertools is great for interview-style problems and efficient looping."},{id:"math",icon:s.jsx(gr,{}),title:"math",summary:"Mathematical functions and constants like sqrt, floor, ceil, pi.",points:["math.sqrt for square root.","math.floor and math.ceil for rounding boundaries.","math.pi and math.e are common constants.","math.gcd helps with fractions and number theory."],example:`import math

print(math.sqrt(25))
print(math.floor(3.9))
print(math.ceil(3.1))
print(math.pi)

print(math.gcd(24, 36))`,note:"Prefer math for numeric utilities instead of writing your own rounding logic."},{id:"random",icon:s.jsx(Mr,{}),title:"random",summary:"Generate random numbers, pick random elements, and shuffle lists.",points:["random.random gives float between 0 and 1.","randint gives inclusive random integers.","choice picks one random element.","shuffle shuffles a list in-place."],example:`import random

print(random.random())
print(random.randint(1, 10))

items = ["a", "b", "c", "d"]
print(random.choice(items))

random.shuffle(items)
print(items)`,note:"For security tokens, do not use random. Use secrets module instead."},{id:"re-regex",icon:s.jsx(ix,{}),title:"re (regex basics)",summary:"Pattern matching and search on strings using regular expressions.",points:["re.search finds first match anywhere.","re.match matches from the start of the string.","re.findall returns all matches as a list.","re.sub replaces patterns with new text."],example:`import re

text = "Email: test123@gmail.com"

m = re.search(r"\\w+@\\w+\\.\\w+", text)
print(m.group() if m else "No match")

nums = re.findall(r"\\d+", "a1 b22 c333")
print(nums)

clean = re.sub(r"\\d+", "#", "a1 b22 c333")
print(clean)`,note:"Regex is powerful but can get unreadable. Use it when patterns are truly pattern-like."},{id:"pathlib",icon:s.jsx(Gi,{}),title:"pathlib",summary:"Modern, readable way to work with files and paths.",points:["Path objects replace manual string path joining.","Use / operator to join paths cleanly.","Check existence using exists().","Read and write text files using read_text and write_text."],example:`from pathlib import Path

base = Path(".")
file = base / "notes.txt"

file.write_text("Hello Python", encoding="utf-8")
print(file.exists())
print(file.read_text(encoding="utf-8"))`,note:"pathlib makes code portable across Windows and Linux without manual slashes."}],[]);return s.jsx(Oi.Wrapper,{children:s.jsxs(Oi.Container,{className:o?"isOpen":"",children:[s.jsxs(Oi.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(Qi,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Standard Library Essentials"}),s.jsx("div",{className:"subtitle",children:"Core built-in modules you should know"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Oi.Content,{children:[s.jsx("div",{className:"topNote",children:"Python's standard library is a superpower. These modules cover most daily needs without installing extra packages."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Ri={Wrapper:R.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,Container:R.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transform: translateY(0);
        transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            border-color 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        &.isOpen {
            box-shadow: 0 18px 55px var(--color-shadow);
        }
    `,Header:R.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 34px;
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.18s ease,
            background 0.18s ease;

        &:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            flex: 0 0 auto;
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .badge {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .titleBlock {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 0 0 auto;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
            opacity: 0.9;
        }

        .chev {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            background: var(--color-surface);
            transition:
                transform 0.18s ease,
                border-color 0.18s ease;

            svg {
                font-size: 18px;
            }
        }

        &:hover .chev {
            transform: scale(1.06);
            border-color: var(--color-border-light);
        }
    `,Content:R.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-surface) 88%,
                var(--color-accent)
            );
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            box-shadow: 0 10px 26px var(--color-shadow);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
                border-color: var(--color-border-light);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);

            svg {
                font-size: 16px;
            }
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .cardSummary {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                color: var(--color-text-secondary);
                line-height: 1.65;
                font-size: 14px;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
            padding-top: 10px;
            border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }

            padding: 22px 18px 26px;
        }
    `},zx=()=>{const[o,u]=ce.useState(!1),c=ce.useMemo(()=>[{id:"assert",icon:s.jsx(Gh,{}),title:"assert",summary:"assert is a quick sanity check. It raises AssertionError if the condition is False.",points:["Use assert to verify assumptions during development.","Do not use assert for real input validation in production code.","assert can be disabled when Python runs with optimization (-O)."],example:`def add(a, b):
    return a + b

assert add(2, 3) == 5
assert add(-1, 1) == 0

# If condition fails:
# AssertionError is raised`,note:"Think of assert as a developer guardrail, not a user-facing error system."},{id:"basic-unit-testing",icon:s.jsx(co,{}),title:"Basic unit testing idea",summary:"Unit tests check small pieces of code (functions/classes) in isolation to prevent regressions.",points:["A unit test should be small, fast, and repeatable.","Test behavior, not implementation details.","Common pattern: Arrange, Act, Assert."],example:`# Example using built-in unittest

import unittest

def is_even(n):
    return n % 2 == 0

class TestNumbers(unittest.TestCase):
    def test_is_even(self):
        self.assertTrue(is_even(2))
        self.assertFalse(is_even(3))

if __name__ == "__main__":
    unittest.main()

# Run:
# python test_file.py`,note:"Even 5 to 10 small tests can save hours when refactoring."},{id:"pep8",icon:s.jsx(Cl,{}),title:"PEP8",summary:"PEP8 is the official Python style guide. Clean style improves readability and teamwork.",points:["Use 4 spaces for indentation (never tabs).","Use snake_case for variables and functions.","Use CapWords for classes.","Keep lines reasonably short (common target is 79 to 100).","Use blank lines to separate logical sections."],example:`# Good PEP8 style examples

class UserProfile:
    def __init__(self, user_id):
        self.user_id = user_id

def get_user_name(user_id):
    return "Ash"

is_active = True`,note:"PEP8 is not about being strict. It is about being readable and consistent."},{id:"common-interview-traps",icon:s.jsx(ml,{}),title:"Common interview traps",summary:"Python interviews often test fundamentals that look simple but have sharp edges.",points:["Mutable default arguments (very common trap).","Confusing == with is.","Late binding in closures inside loops.","Mutability and references in lists/dicts.","Shadowing built-ins like list, dict, str."],example:`# 1) Mutable default argument trap
def add_item(x, items=[]):
    items.append(x)
    return items

print(add_item(1))  # [1]
print(add_item(2))  # [1, 2]  (surprise)

# Fix:
def add_item_safe(x, items=None):
    if items is None:
        items = []
    items.append(x)
    return items

# 2) == vs is
a = [1, 2]
b = [1, 2]
print(a == b)  # True (same values)
print(a is b)  # False (different objects)`,note:"If you explain these clearly, you instantly look strong in interviews."},{id:"common-performance-traps",icon:s.jsx(et,{}),title:"Common performance traps",summary:"Most Python performance issues are from repeated work, slow loops, and unnecessary allocations.",points:["Using string concatenation in loops instead of join.","Recomputing the same result inside loops (no caching).","Using list when set lookup is needed (O(n) vs O(1) average).","Building huge lists when you can use generators.","Using slow patterns like nested loops without thinking about complexity."],example:`# 1) String concat in loop (slow)
s = ""
for i in range(5):
    s += str(i)

# Better:
parts = []
for i in range(5):
    parts.append(str(i))
s = "".join(parts)

# 2) List lookup vs set lookup
nums_list = [1, 2, 3, 4, 5]
nums_set = {1, 2, 3, 4, 5}

print(5 in nums_list)  # slower for large lists
print(5 in nums_set)   # faster average lookup

# 3) Prefer generator for large pipelines
squares = (x * x for x in range(1000000))`,note:"First write readable code, then optimize the real bottlenecks with measurements."}],[]);return s.jsx(Ri.Wrapper,{children:s.jsxs(Ri.Container,{className:o?"isOpen":"",children:[s.jsxs(Ri.Header,{type:"button",onClick:()=>u(l=>!l),"aria-expanded":o,children:[s.jsxs("div",{className:"left",children:[s.jsx("div",{className:"badge",children:s.jsx(El,{})}),s.jsxs("div",{className:"titleBlock",children:[s.jsx("div",{className:"title",children:"Testing and Best Practices"}),s.jsx("div",{className:"subtitle",children:"Write safer code, avoid common traps"})]})]}),s.jsxs("div",{className:"right",children:[s.jsx("span",{className:"hint",children:o?"Click to collapse":"Click to expand"}),s.jsx("span",{className:"chev",children:o?s.jsx(ct,{}):s.jsx(lt,{})})]})]}),o&&s.jsxs(Ri.Content,{children:[s.jsx("div",{className:"topNote",children:"Testing and best practices make your code reliable. Interviews love these because they show maturity, not just syntax knowledge."}),s.jsx("div",{className:"grid",children:c.map(l=>s.jsxs("div",{className:"card",id:l.id,children:[s.jsxs("div",{className:"cardHead",children:[s.jsx("div",{className:"cardIcon",children:l.icon}),s.jsx("div",{className:"cardTitle",children:l.title})]}),s.jsx("div",{className:"cardSummary",children:l.summary}),s.jsx("ul",{className:"list",children:l.points.map((m,w)=>s.jsx("li",{children:m},w))}),l.example&&s.jsx("pre",{className:"code",children:`${l.example}`}),l.note&&s.jsx("div",{className:"note",children:l.note})]},l.id))})]})]})})},Tx=()=>s.jsxs(al.Wrapper,{children:[s.jsx(al.Header,{children:s.jsx(fx,{})}),s.jsxs(al.Main,{children:[s.jsxs("div",{className:"contentWrapper",children:[s.jsx(xx,{}),s.jsx(gx,{}),s.jsx(vx,{}),s.jsx(yx,{}),s.jsx(wx,{}),s.jsx(bx,{}),s.jsx(kx,{}),s.jsx(jx,{}),s.jsx(Sx,{}),s.jsx(Nx,{}),s.jsx(Cx,{}),s.jsx(_x,{}),s.jsx(Px,{}),s.jsx(Ex,{}),s.jsx(zx,{})]}),s.jsx("div",{className:"footerWrapper",children:s.jsx(hx,{})})]})]});Im.createRoot(document.getElementById("root")).render(s.jsx(s.Fragment,{children:s.jsx(Tx,{})}));
