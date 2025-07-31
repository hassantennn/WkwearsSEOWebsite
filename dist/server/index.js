var vc=Object.defineProperty;var Ws=e=>{throw TypeError(e)};var xc=(e,t,r)=>t in e?vc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Jr=(e,t,r)=>xc(e,typeof t!="symbol"?t+"":t,r),Gs=(e,t,r)=>t.has(e)||Ws("Cannot "+r);var ct=(e,t,r)=>(Gs(e,t,"read from private field"),r?r.call(e):t.get(e)),ga=(e,t,r)=>t.has(e)?Ws("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ya=(e,t,r,n)=>(Gs(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var va={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs;function wc(){if(Qs)return ne;Qs=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function y(R){return R===null||typeof R!="object"?null:(R=g&&R[g]||R["@@iterator"],typeof R=="function"?R:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,b={};function j(R,B,ee){this.props=R,this.context=B,this.refs=b,this.updater=ee||C}j.prototype.isReactComponent={},j.prototype.setState=function(R,B){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,B,"setState")},j.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function $(){}$.prototype=j.prototype;function I(R,B,ee){this.props=R,this.context=B,this.refs=b,this.updater=ee||C}var L=I.prototype=new $;L.constructor=I,v(L,j.prototype),L.isPureReactComponent=!0;var F=Array.isArray,O=Object.prototype.hasOwnProperty,D={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function q(R,B,ee){var ie,le={},he=null,ye=null;if(B!=null)for(ie in B.ref!==void 0&&(ye=B.ref),B.key!==void 0&&(he=""+B.key),B)O.call(B,ie)&&!H.hasOwnProperty(ie)&&(le[ie]=B[ie]);var pe=arguments.length-2;if(pe===1)le.children=ee;else if(1<pe){for(var ae=Array(pe),be=0;be<pe;be++)ae[be]=arguments[be+2];le.children=ae}if(R&&R.defaultProps)for(ie in pe=R.defaultProps,pe)le[ie]===void 0&&(le[ie]=pe[ie]);return{$$typeof:e,type:R,key:he,ref:ye,props:le,_owner:D.current}}function W(R,B){return{$$typeof:e,type:R.type,key:B,ref:R.ref,props:R.props,_owner:R._owner}}function G(R){return typeof R=="object"&&R!==null&&R.$$typeof===e}function Z(R){var B={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ee){return B[ee]})}var ce=/\/+/g;function z(R,B){return typeof R=="object"&&R!==null&&R.key!=null?Z(""+R.key):B.toString(36)}function J(R,B,ee,ie,le){var he=typeof R;(he==="undefined"||he==="boolean")&&(R=null);var ye=!1;if(R===null)ye=!0;else switch(he){case"string":case"number":ye=!0;break;case"object":switch(R.$$typeof){case e:case t:ye=!0}}if(ye)return ye=R,le=le(ye),R=ie===""?"."+z(ye,0):ie,F(le)?(ee="",R!=null&&(ee=R.replace(ce,"$&/")+"/"),J(le,B,ee,"",function(be){return be})):le!=null&&(G(le)&&(le=W(le,ee+(!le.key||ye&&ye.key===le.key?"":(""+le.key).replace(ce,"$&/")+"/")+R)),B.push(le)),1;if(ye=0,ie=ie===""?".":ie+":",F(R))for(var pe=0;pe<R.length;pe++){he=R[pe];var ae=ie+z(he,pe);ye+=J(he,B,ee,ae,le)}else if(ae=y(R),typeof ae=="function")for(R=ae.call(R),pe=0;!(he=R.next()).done;)he=he.value,ae=ie+z(he,pe++),ye+=J(he,B,ee,ae,le);else if(he==="object")throw B=String(R),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return ye}function ue(R,B,ee){if(R==null)return R;var ie=[],le=0;return J(R,ie,"","",function(he){return B.call(ee,he,le++)}),ie}function de(R){if(R._status===-1){var B=R._result;B=B(),B.then(function(ee){(R._status===0||R._status===-1)&&(R._status=1,R._result=ee)},function(ee){(R._status===0||R._status===-1)&&(R._status=2,R._result=ee)}),R._status===-1&&(R._status=0,R._result=B)}if(R._status===1)return R._result.default;throw R._result}var oe={current:null},ge={transition:null},Se={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:ge,ReactCurrentOwner:D};function fe(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:ue,forEach:function(R,B,ee){ue(R,function(){B.apply(this,arguments)},ee)},count:function(R){var B=0;return ue(R,function(){B++}),B},toArray:function(R){return ue(R,function(B){return B})||[]},only:function(R){if(!G(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},ne.Component=j,ne.Fragment=r,ne.Profiler=o,ne.PureComponent=I,ne.StrictMode=n,ne.Suspense=l,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Se,ne.act=fe,ne.cloneElement=function(R,B,ee){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var ie=v({},R.props),le=R.key,he=R.ref,ye=R._owner;if(B!=null){if(B.ref!==void 0&&(he=B.ref,ye=D.current),B.key!==void 0&&(le=""+B.key),R.type&&R.type.defaultProps)var pe=R.type.defaultProps;for(ae in B)O.call(B,ae)&&!H.hasOwnProperty(ae)&&(ie[ae]=B[ae]===void 0&&pe!==void 0?pe[ae]:B[ae])}var ae=arguments.length-2;if(ae===1)ie.children=ee;else if(1<ae){pe=Array(ae);for(var be=0;be<ae;be++)pe[be]=arguments[be+2];ie.children=pe}return{$$typeof:e,type:R.type,key:le,ref:he,props:ie,_owner:ye}},ne.createContext=function(R){return R={$$typeof:s,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:a,_context:R},R.Consumer=R},ne.createElement=q,ne.createFactory=function(R){var B=q.bind(null,R);return B.type=R,B},ne.createRef=function(){return{current:null}},ne.forwardRef=function(R){return{$$typeof:i,render:R}},ne.isValidElement=G,ne.lazy=function(R){return{$$typeof:m,_payload:{_status:-1,_result:R},_init:de}},ne.memo=function(R,B){return{$$typeof:d,type:R,compare:B===void 0?null:B}},ne.startTransition=function(R){var B=ge.transition;ge.transition={};try{R()}finally{ge.transition=B}},ne.unstable_act=fe,ne.useCallback=function(R,B){return oe.current.useCallback(R,B)},ne.useContext=function(R){return oe.current.useContext(R)},ne.useDebugValue=function(){},ne.useDeferredValue=function(R){return oe.current.useDeferredValue(R)},ne.useEffect=function(R,B){return oe.current.useEffect(R,B)},ne.useId=function(){return oe.current.useId()},ne.useImperativeHandle=function(R,B,ee){return oe.current.useImperativeHandle(R,B,ee)},ne.useInsertionEffect=function(R,B){return oe.current.useInsertionEffect(R,B)},ne.useLayoutEffect=function(R,B){return oe.current.useLayoutEffect(R,B)},ne.useMemo=function(R,B){return oe.current.useMemo(R,B)},ne.useReducer=function(R,B,ee){return oe.current.useReducer(R,B,ee)},ne.useRef=function(R){return oe.current.useRef(R)},ne.useState=function(R){return oe.current.useState(R)},ne.useSyncExternalStore=function(R,B,ee){return oe.current.useSyncExternalStore(R,B,ee)},ne.useTransition=function(){return oe.current.useTransition()},ne.version="18.3.1",ne}var Ys;function Lo(){return Ys||(Ys=1,va.exports=wc()),va.exports}var S=Lo(),Zr={},Ks;function Cc(){if(Ks)return Zr;Ks=1,Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.parse=s,Zr.serialize=d;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,n=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function s(y,C){const v=new a,b=y.length;if(b<2)return v;const j=(C==null?void 0:C.decode)||m;let $=0;do{const I=y.indexOf("=",$);if(I===-1)break;const L=y.indexOf(";",$),F=L===-1?b:L;if(I>F){$=y.lastIndexOf(";",I-1)+1;continue}const O=i(y,$,I),D=l(y,I,O),H=y.slice(O,D);if(v[H]===void 0){let q=i(y,I+1,F),W=l(y,F,q);const G=j(y.slice(q,W));v[H]=G}$=F+1}while($<b);return v}function i(y,C,v){do{const b=y.charCodeAt(C);if(b!==32&&b!==9)return C}while(++C<v);return v}function l(y,C,v){for(;C>v;){const b=y.charCodeAt(--C);if(b!==32&&b!==9)return C+1}return v}function d(y,C,v){const b=(v==null?void 0:v.encode)||encodeURIComponent;if(!e.test(y))throw new TypeError(`argument name is invalid: ${y}`);const j=b(C);if(!t.test(j))throw new TypeError(`argument val is invalid: ${C}`);let $=y+"="+j;if(!v)return $;if(v.maxAge!==void 0){if(!Number.isInteger(v.maxAge))throw new TypeError(`option maxAge is invalid: ${v.maxAge}`);$+="; Max-Age="+v.maxAge}if(v.domain){if(!r.test(v.domain))throw new TypeError(`option domain is invalid: ${v.domain}`);$+="; Domain="+v.domain}if(v.path){if(!n.test(v.path))throw new TypeError(`option path is invalid: ${v.path}`);$+="; Path="+v.path}if(v.expires){if(!g(v.expires)||!Number.isFinite(v.expires.valueOf()))throw new TypeError(`option expires is invalid: ${v.expires}`);$+="; Expires="+v.expires.toUTCString()}if(v.httpOnly&&($+="; HttpOnly"),v.secure&&($+="; Secure"),v.partitioned&&($+="; Partitioned"),v.priority)switch(typeof v.priority=="string"?v.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${v.priority}`)}if(v.sameSite)switch(typeof v.sameSite=="string"?v.sameSite.toLowerCase():v.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${v.sameSite}`)}return $}function m(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function g(y){return o.call(y)==="[object Date]"}return Zr}var Js=Cc(),yr={exports:{}},Zs;function Sc(){if(Zs)return yr.exports;Zs=1;var e={decodeValues:!0,map:!1,silent:!1};function t(s){return typeof s=="string"&&!!s.trim()}function r(s,i){var l=s.split(";").filter(t),d=l.shift(),m=n(d),g=m.name,y=m.value;i=i?Object.assign({},e,i):e;try{y=i.decodeValues?decodeURIComponent(y):y}catch(v){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+y+"'. Set options.decodeValues to false to disable this feature.",v)}var C={name:g,value:y};return l.forEach(function(v){var b=v.split("="),j=b.shift().trimLeft().toLowerCase(),$=b.join("=");j==="expires"?C.expires=new Date($):j==="max-age"?C.maxAge=parseInt($,10):j==="secure"?C.secure=!0:j==="httponly"?C.httpOnly=!0:j==="samesite"?C.sameSite=$:j==="partitioned"?C.partitioned=!0:C[j]=$}),C}function n(s){var i="",l="",d=s.split("=");return d.length>1?(i=d.shift(),l=d.join("=")):l=s,{name:i,value:l}}function o(s,i){if(i=i?Object.assign({},e,i):e,!s)return i.map?{}:[];if(s.headers)if(typeof s.headers.getSetCookie=="function")s=s.headers.getSetCookie();else if(s.headers["set-cookie"])s=s.headers["set-cookie"];else{var l=s.headers[Object.keys(s.headers).find(function(m){return m.toLowerCase()==="set-cookie"})];!l&&s.headers.cookie&&!i.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),s=l}if(Array.isArray(s)||(s=[s]),i.map){var d={};return s.filter(t).reduce(function(m,g){var y=r(g,i);return m[y.name]=y,m},d)}else return s.filter(t).map(function(m){return r(m,i)})}function a(s){if(Array.isArray(s))return s;if(typeof s!="string")return[];var i=[],l=0,d,m,g,y,C;function v(){for(;l<s.length&&/\s/.test(s.charAt(l));)l+=1;return l<s.length}function b(){return m=s.charAt(l),m!=="="&&m!==";"&&m!==","}for(;l<s.length;){for(d=l,C=!1;v();)if(m=s.charAt(l),m===","){for(g=l,l+=1,v(),y=l;l<s.length&&b();)l+=1;l<s.length&&s.charAt(l)==="="?(C=!0,l=y,i.push(s.substring(d,g)),d=l):l=g+1}else l+=1;(!C||l>=s.length)&&i.push(s.substring(d,s.length))}return i}return yr.exports=o,yr.exports.parse=o,yr.exports.parseString=r,yr.exports.splitCookiesString=a,yr.exports}var bc=Sc(),xa={};/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pl=e=>{throw TypeError(e)},Ec=(e,t,r)=>t.has(e)||pl("Cannot "+r),wa=(e,t,r)=>(Ec(e,t,"read from private field"),r?r.call(e):t.get(e)),_c=(e,t,r)=>t.has(e)?pl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function je(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $c(){return Math.random().toString(36).substring(2,10)}function Xs(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?jr(t):t,state:r,key:t&&t.key||n||$c()}}function Ot({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function jr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}var nn,Cr=class{constructor(e){if(_c(this,nn,new Map),e)for(let[t,r]of e)this.set(t,r)}get(e){if(wa(this,nn).has(e))return wa(this,nn).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){wa(this,nn).set(e,t)}};nn=new WeakMap;var jc=new Set(["lazy","caseSensitive","path","id","index","children"]);function Rc(e){return jc.has(e)}var Ac=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function Pc(e){return Ac.has(e)}function Ic(e){return e.index===!0}function es(e,t,r=[],n={}){return e.map((o,a)=>{let s=[...r,String(a)],i=typeof o.id=="string"?o.id:s.join("-");if(se(o.index!==!0||!o.children,"Cannot specify children on an index route"),se(!n[i],`Found a route id collision on id "${i}".  Route id's must be globally unique within Data Router usages`),Ic(o)){let l={...o,...t(o),id:i};return n[i]=l,l}else{let l={...o,...t(o),id:i,children:void 0};return n[i]=l,o.children&&(l.children=es(o.children,t,s,n)),l}})}function $r(e,t,r="/"){return kc(e,t,r,!1)}function kc(e,t,r,n){let o=typeof t=="string"?jr(t):t,a=Le(o.pathname||"/",r);if(a==null)return null;let s=ml(e);Dc(s);let i=null;for(let l=0;i==null&&l<s.length;++l){let d=zc(a);i=Vc(s[l],d,n)}return i}function Tc(e,t){let{route:r,pathname:n,params:o}=e;return{id:r.id,pathname:n,params:o,data:t[r.id],handle:r.handle}}function ml(e,t=[],r=[],n=""){let o=(a,s,i)=>{let l={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(n),`Absolute route path "${l.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(n.length));let d=pt([n,l.relativePath]),m=r.concat(l);a.children&&a.children.length>0&&(se(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),ml(a.children,t,m,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Hc(d,a.index),routesMeta:m})};return e.forEach((a,s)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))o(a,s);else for(let l of gl(a.path))o(a,s,l)}),t}function gl(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let s=gl(n.join("/")),i=[];return i.push(...s.map(l=>l===""?a:[a,l].join("/"))),o&&i.push(...s),i.map(l=>e.startsWith("/")&&l===""?"/":l)}function Dc(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Bc(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Oc=/^:[\w-]+$/,Lc=3,Mc=2,Nc=1,Fc=10,Uc=-2,ei=e=>e==="*";function Hc(e,t){let r=e.split("/"),n=r.length;return r.some(ei)&&(n+=Uc),t&&(n+=Mc),r.filter(o=>!ei(o)).reduce((o,a)=>o+(Oc.test(a)?Lc:a===""?Nc:Fc),n)}function Bc(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Vc(e,t,r=!1){let{routesMeta:n}=e,o={},a="/",s=[];for(let i=0;i<n.length;++i){let l=n[i],d=i===n.length-1,m=a==="/"?t:t.slice(a.length)||"/",g=Eo({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},m),y=l.route;if(!g&&d&&r&&!n[n.length-1].route.index&&(g=Eo({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},m)),!g)return null;Object.assign(o,g.params),s.push({params:o,pathname:pt([a,g.pathname]),pathnameBase:Qc(pt([a,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(a=pt([a,g.pathnameBase]))}return s}function Eo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=qc(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),i=o.slice(1);return{params:n.reduce((d,{paramName:m,isOptional:g},y)=>{if(m==="*"){let v=i[y]||"";s=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const C=i[y];return g&&!C?d[m]=void 0:d[m]=(C||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:s,pattern:e}}function qc(e,t=!1,r=!0){je(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,i,l)=>(n.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function zc(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return je(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Le(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Wc(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?jr(e):e;return{pathname:r?r.startsWith("/")?r:Gc(r,t):t,search:Yc(n),hash:Kc(o)}}function Gc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Ca(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function yl(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ts(e){let t=yl(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function rs(e,t,r,n=!1){let o;typeof e=="string"?o=jr(e):(o={...e},se(!o.pathname||!o.pathname.includes("?"),Ca("?","pathname","search",o)),se(!o.pathname||!o.pathname.includes("#"),Ca("#","pathname","hash",o)),se(!o.search||!o.search.includes("#"),Ca("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,i;if(s==null)i=r;else{let g=t.length-1;if(!n&&s.startsWith("..")){let y=s.split("/");for(;y[0]==="..";)y.shift(),g-=1;o.pathname=y.join("/")}i=g>=0?t[g]:"/"}let l=Wc(o,i),d=s&&s!=="/"&&s.endsWith("/"),m=(a||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||m)&&(l.pathname+="/"),l}var pt=e=>e.join("/").replace(/\/\/+/g,"/"),Qc=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yc=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Kc=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Jc=class{constructor(e,t){this.type="DataWithResponseInit",this.data=e,this.init=t||null}};function De(e,t){return new Jc(e,typeof t=="number"?{status:t}:t)}var qe=(e,t=302)=>{let r=t;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let n=new Headers(r.headers);return n.set("Location",e),new Response(null,{...r,headers:n})},Zc=(e,t)=>{let r=qe(e,t);return r.headers.set("X-Remix-Reload-Document","true"),r},Xc=(e,t)=>{let r=qe(e,t);return r.headers.set("X-Remix-Replace","true"),r},er=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Pe(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var vl=["POST","PUT","PATCH","DELETE"],ed=new Set(vl),td=["GET",...vl],rd=new Set(td),xl=new Set([301,302,303,307,308]),nd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},wl={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},od={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ad=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sd=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),id=Symbol("ResetLoaderData");function ld(e,t){se(e.length>0,"You must provide a non-empty routes array to createStaticHandler");let r={},n=(t?t.basename:null)||"/",o=(t==null?void 0:t.mapRouteProperties)||sd,a=es(e,o,void 0,r);async function s(y,{requestContext:C,filterMatchesToLoad:v,skipLoaderErrorBubbling:b,skipRevalidation:j,dataStrategy:$,unstable_respond:I}={}){let L=new URL(y.url),F=y.method,O=Xs("",Ot(L),null,"default"),D=$r(a,O,n);if(C=C??new Cr,!ui(F)&&F!=="HEAD"){let q=dt(405,{method:F}),{matches:W,route:G}=li(a),Z={basename:n,location:O,matches:W,loaderData:{},actionData:null,errors:{[G.id]:q},statusCode:q.status,loaderHeaders:{},actionHeaders:{}};return I?I(Z):Z}else if(!D){let q=dt(404,{pathname:O.pathname}),{matches:W,route:G}=li(a),Z={basename:n,location:O,matches:W,loaderData:{},actionData:null,errors:{[G.id]:q},statusCode:q.status,loaderHeaders:{},actionHeaders:{}};return I?I(Z):Z}if(I&&D.some(q=>q.route.unstable_middleware||typeof q.route.lazy=="object"&&q.route.lazy.unstable_middleware)){se(C instanceof Cr,"When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`");try{await ai(D,r,o);let q,W=await si({request:y,matches:D,params:D[0].params,context:C},!0,async()=>{let G=await l(y,O,D,C,$||null,b===!0,null,v||null,j===!0);return _e(G)?G:(q={location:O,basename:n,...G},await I(q))},async(G,Z)=>{var ce;if(_e(G))return G;if(q)return Z in q.loaderData&&(q.loaderData[Z]=void 0),I(Cl(a,q,G,b?Z:on(D,Z).route.id));{let z=b?Z:on(D,((ce=D.find(J=>J.route.id===Z||J.route.loader))==null?void 0:ce.route.id)||Z).route.id;return I({matches:D,location:O,basename:n,loaderData:{},actionData:null,errors:{[z]:G},statusCode:Pe(G)?G.status:500,actionHeaders:{},loaderHeaders:{}})}});return se(_e(W),"Expected a response in query()"),W}catch(q){if(_e(q))return q;throw q}}let H=await l(y,O,D,C,$||null,b===!0,null,v||null,j===!0);return _e(H)?H:{location:O,basename:n,...H}}async function i(y,{routeId:C,requestContext:v,dataStrategy:b,unstable_respond:j}={}){let $=new URL(y.url),I=y.method,L=Xs("",Ot($),null,"default"),F=$r(a,L,n);if(v=v??new Cr,!ui(I)&&I!=="HEAD"&&I!=="OPTIONS")throw dt(405,{method:I});if(!F)throw dt(404,{pathname:L.pathname});let O=C?F.find(q=>q.route.id===C):ci(F,L);if(C&&!O)throw dt(403,{pathname:L.pathname,routeId:C});if(!O)throw dt(404,{pathname:L.pathname});if(j&&F.some(q=>q.route.unstable_middleware||typeof q.route.lazy=="object"&&q.route.lazy.unstable_middleware))return se(v instanceof Cr,"When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`"),await ai(F,r,o),await si({request:y,matches:F,params:F[0].params,context:v},!0,async()=>{let W=await l(y,L,F,v,b||null,!1,O,null,!1);if(_e(W))return j(W);let G=W.errors?Object.values(W.errors)[0]:void 0;if(G!==void 0)throw G;let Z=W.actionData?Object.values(W.actionData)[0]:Object.values(W.loaderData)[0];return typeof Z=="string"?new Response(Z):Response.json(Z)},W=>_e(W)?j(W):new Response(String(W),{status:500,statusText:"Unexpected Server Error"}));let D=await l(y,L,F,v,b||null,!1,O,null,!1);if(_e(D))return D;let H=D.errors?Object.values(D.errors)[0]:void 0;if(H!==void 0)throw H;if(D.actionData)return Object.values(D.actionData)[0];if(D.loaderData)return Object.values(D.loaderData)[0]}async function l(y,C,v,b,j,$,I,L,F){se(y.signal,"query()/queryRoute() requests must contain an AbortController signal");try{if(os(y.method))return await d(y,v,I||ci(v,C),b,j,$,I!=null,L,F);let O=await m(y,v,b,j,$,I,L);return _e(O)?O:{...O,actionData:null,actionHeaders:{}}}catch(O){if(vd(O)&&_e(O.result)){if(O.type==="error")throw O.result;return O.result}if(No(O))return O;throw O}}async function d(y,C,v,b,j,$,I,L,F){let O;if(!v.route.action&&!v.route.lazy){let q=dt(405,{method:y.method,pathname:new URL(y.url).pathname,routeId:v.route.id});if(I)throw q;O={type:"error",error:q}}else{let q=ii(o,r,y,C,v,[],b);O=(await g(y,q,I,b,j))[v.route.id],y.signal.aborted&&ti(y,I)}if(El(O))throw new Response(null,{status:O.response.status,headers:{Location:O.response.headers.get("Location")}});if(I){if(Zt(O))throw O.error;return{matches:[v],loaderData:{},actionData:{[v.route.id]:O.data},errors:null,statusCode:200,loaderHeaders:{},actionHeaders:{}}}if(F)if(Zt(O)){let q=$?v:on(C,v.route.id);return{statusCode:Pe(O.error)?O.error.status:O.statusCode!=null?O.statusCode:500,actionData:null,actionHeaders:{...O.headers?{[v.route.id]:O.headers}:{}},matches:C,loaderData:{},errors:{[q.route.id]:O.error},loaderHeaders:{}}}else return{actionData:{[v.route.id]:O.data},actionHeaders:O.headers?{[v.route.id]:O.headers}:{},matches:C,loaderData:{},errors:null,statusCode:O.statusCode||200,loaderHeaders:{}};let D=new Request(y.url,{headers:y.headers,redirect:y.redirect,signal:y.signal});if(Zt(O)){let q=$?v:on(C,v.route.id);return{...await m(D,C,b,j,$,null,L,[q.route.id,O]),statusCode:Pe(O.error)?O.error.status:O.statusCode!=null?O.statusCode:500,actionData:null,actionHeaders:{...O.headers?{[v.route.id]:O.headers}:{}}}}return{...await m(D,C,b,j,$,null,L),actionData:{[v.route.id]:O.data},...O.statusCode?{statusCode:O.statusCode}:{},actionHeaders:O.headers?{[v.route.id]:O.headers}:{}}}async function m(y,C,v,b,j,$,I,L){let F=$!=null;if(F&&!($!=null&&$.route.loader)&&!($!=null&&$.route.lazy))throw dt(400,{method:y.method,pathname:new URL(y.url).pathname,routeId:$==null?void 0:$.route.id});let O;if($)O=ii(o,r,y,C,$,[],v);else{let q=L&&Zt(L[1])?C.findIndex(W=>W.route.id===L[0])-1:void 0;O=C.map((W,G)=>q!=null&&G>q?Na(o,r,y,W,[],v,!1):Na(o,r,y,W,[],v,(W.route.loader||W.route.lazy)!=null&&(!I||I(W))))}if(!b&&!O.some(q=>q.shouldLoad))return{matches:C,loaderData:{},errors:L&&Zt(L[1])?{[L[0]]:L[1].error}:null,statusCode:200,loaderHeaders:{}};let D=await g(y,O,F,v,b);return y.signal.aborted&&ti(y,F),{...yd(C,D,L,!0,j),matches:C}}async function g(y,C,v,b,j){let $=await hd(j||fd,y,C,null,b),I={};return await Promise.all(C.map(async L=>{if(!(L.route.id in $))return;let F=$[L.route.id];if(xd(F)){let O=F.result;throw gd(O,y,L.route.id,C,n)}if(_e(F.result)&&v)throw F;I[L.route.id]=await md(F)})),I}return{dataRoutes:a,query:s,queryRoute:i}}function Cl(e,t,r,n){let o=n||t._deepestRenderedBoundaryId||e[0].id;return{...t,statusCode:Pe(r)?r.status:500,errors:{[o]:r}}}function ti(e,t){if(e.signal.reason!==void 0)throw e.signal.reason;let r=t?"queryRoute":"query";throw new Error(`${r}() call aborted without an \`AbortSignal.reason\`: ${e.method} ${e.url}`)}function ud(e,t,r,n,o,a){let s,i;s=t,i=t[t.length-1];let l=rs(n||".",ts(s),Le(e.pathname,r)||e.pathname,a==="path");if(n==null&&(l.search=e.search,l.hash=e.hash),(n==null||n===""||n===".")&&i){let d=_l(l.search);if(i.route.index&&!d)l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index";else if(!i.route.index&&d){let m=new URLSearchParams(l.search),g=m.getAll("index");m.delete("index"),g.filter(C=>C).forEach(C=>m.append("index",C));let y=m.toString();l.search=y?`?${y}`:""}}return r!=="/"&&(l.pathname=l.pathname==="/"?r:pt([r,l.pathname])),Ot(l)}function ri(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}var ni=new WeakMap,ns=({key:e,route:t,manifest:r,mapRouteProperties:n})=>{let o=r[t.id];if(se(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let a=o.lazy[e];if(!a)return;let s=ni.get(o);s||(s={},ni.set(o,s));let i=s[e];if(i)return i;let l=(async()=>{let d=Rc(e),g=o[e]!==void 0&&e!=="hasErrorBoundary";if(d)je(!d,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),s[e]=Promise.resolve();else if(g)je(!1,`Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let y=await a();y!=null&&(Object.assign(o,{[e]:y}),Object.assign(o,n(o)))}typeof o.lazy=="object"&&(o.lazy[e]=void 0,Object.values(o.lazy).every(y=>y===void 0)&&(o.lazy=void 0))})();return s[e]=l,l},oi=new WeakMap;function cd(e,t,r,n,o){let a=r[e.id];if(se(a,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let m=oi.get(a);if(m)return{lazyRoutePromise:m,lazyHandlerPromise:m};let g=(async()=>{se(typeof e.lazy=="function","No lazy route function found");let y=await e.lazy(),C={};for(let v in y){let b=y[v];if(b===void 0)continue;let j=Pc(v),I=a[v]!==void 0&&v!=="hasErrorBoundary";j?je(!j,"Route property "+v+" is not a supported property to be returned from a lazy route function. This property will be ignored."):I?je(!I,`Route "${a.id}" has a static property "${v}" defined but its lazy function is also returning a value for this property. The lazy route property "${v}" will be ignored.`):C[v]=b}Object.assign(a,C),Object.assign(a,{...n(a),lazy:void 0})})();return oi.set(a,g),g.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:g}}let s=Object.keys(e.lazy),i=[],l;for(let m of s){if(o&&o.includes(m))continue;let g=ns({key:m,route:e,manifest:r,mapRouteProperties:n});g&&(i.push(g),m===t&&(l=g))}let d=i.length>0?Promise.all(i).then(()=>{}):void 0;return d==null||d.catch(()=>{}),l==null||l.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:l}}function dd(e){return e!==void 0}function ai(e,t,r){let n=e.map(({route:o})=>{if(!(typeof o.lazy!="object"||!o.lazy.unstable_middleware))return ns({key:"unstable_middleware",route:o,manifest:t,mapRouteProperties:r})}).filter(dd);return n.length>0?Promise.all(n):void 0}async function fd(e){let t=e.matches.filter(o=>o.shouldLoad),r={};return(await Promise.all(t.map(o=>o.resolve()))).forEach((o,a)=>{r[t[a].route.id]=o}),r}async function si(e,t,r,n){let{matches:o,request:a,params:s,context:i}=e,l={handlerResult:void 0};try{let d=o.flatMap(g=>g.route.unstable_middleware?g.route.unstable_middleware.map(y=>[g.route.id,y]):[]),m=await Sl({request:a,params:s,context:i},d,t,l,r);return t?m:l.handlerResult}catch(d){if(!l.middlewareError)throw d;return await n(l.middlewareError.error,l.middlewareError.routeId)}}async function Sl(e,t,r,n,o,a=0){let{request:s}=e;if(s.signal.aborted)throw s.signal.reason?s.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${s.method} ${s.url}`);let i=t[a];if(!i)return n.handlerResult=await o(),n.handlerResult;let[l,d]=i,m=!1,g,y=async()=>{if(m)throw new Error("You may only call `next()` once per middleware");return m=!0,g=await Sl(e,t,r,n,o,a+1),g};try{let C=await d({request:e.request,params:e.params,context:e.context},y);return m?C===void 0?g:C:y()}catch(C){throw n.middlewareError?n.middlewareError.error!==C&&(n.middlewareError={routeId:l,error:C}):n.middlewareError={routeId:l,error:C},C}}function bl(e,t,r,n,o){let a=ns({key:"unstable_middleware",route:n.route,manifest:t,mapRouteProperties:e}),s=cd(n.route,os(r.method)?"action":"loader",t,e,o);return{middleware:a,route:s.lazyRoutePromise,handler:s.lazyHandlerPromise}}function Na(e,t,r,n,o,a,s,i=null){let l=!1,d=bl(e,t,r,n,o);return{...n,_lazyPromises:d,shouldLoad:s,unstable_shouldRevalidateArgs:i,unstable_shouldCallHandler(m){return l=!0,i?typeof m=="boolean"?ri(n,{...i,defaultShouldRevalidate:m}):ri(n,i):s},resolve(m){return l||s||m&&r.method==="GET"&&(n.route.lazy||n.route.loader)?pd({request:r,match:n,lazyHandlerPromise:d==null?void 0:d.handler,lazyRoutePromise:d==null?void 0:d.route,handlerOverride:m,scopedContext:a}):Promise.resolve({type:"data",result:void 0})}}}function ii(e,t,r,n,o,a,s,i=null){return n.map(l=>l.route.id!==o.route.id?{...l,shouldLoad:!1,unstable_shouldRevalidateArgs:i,unstable_shouldCallHandler:()=>!1,_lazyPromises:bl(e,t,r,l,a),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Na(e,t,r,l,a,s,!0,i))}async function hd(e,t,r,n,o,a){r.some(d=>{var m;return(m=d._lazyPromises)==null?void 0:m.middleware})&&await Promise.all(r.map(d=>{var m;return(m=d._lazyPromises)==null?void 0:m.middleware}));let s={request:t,params:r[0].params,context:o,matches:r},l=await e({...s,fetcherKey:n,unstable_runClientMiddleware:()=>{throw new Error("You cannot call `unstable_runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`")}});try{await Promise.all(r.flatMap(d=>{var m,g;return[(m=d._lazyPromises)==null?void 0:m.handler,(g=d._lazyPromises)==null?void 0:g.route]}))}catch{}return l}async function pd({request:e,match:t,lazyHandlerPromise:r,lazyRoutePromise:n,handlerOverride:o,scopedContext:a}){let s,i,l=os(e.method),d=l?"action":"loader",m=g=>{let y,C=new Promise((j,$)=>y=$);i=()=>y(),e.signal.addEventListener("abort",i);let v=j=>typeof g!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${t.route.id}]`)):g({request:e,params:t.params,context:a},...j!==void 0?[j]:[]),b=(async()=>{try{return{type:"data",result:await(o?o($=>v($)):v())}}catch(j){return{type:"error",result:j}}})();return Promise.race([b,C])};try{let g=l?t.route.action:t.route.loader;if(r||n)if(g){let y,[C]=await Promise.all([m(g).catch(v=>{y=v}),r,n]);if(y!==void 0)throw y;s=C}else{await r;let y=l?t.route.action:t.route.loader;if(y)[s]=await Promise.all([m(y),n]);else if(d==="action"){let C=new URL(e.url),v=C.pathname+C.search;throw dt(405,{method:e.method,pathname:v,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(g)s=await m(g);else{let y=new URL(e.url),C=y.pathname+y.search;throw dt(404,{pathname:C})}}catch(g){return{type:"error",result:g}}finally{i&&e.signal.removeEventListener("abort",i)}return s}async function md(e){var n,o,a,s,i,l;let{result:t,type:r}=e;if(_e(t)){let d;try{let m=t.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?t.body==null?d=null:d=await t.json():d=await t.text()}catch(m){return{type:"error",error:m}}return r==="error"?{type:"error",error:new er(t.status,t.statusText,d),statusCode:t.status,headers:t.headers}:{type:"data",data:d,statusCode:t.status,headers:t.headers}}return r==="error"?Fa(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:(n=t.init)==null?void 0:n.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new er(((a=t.init)==null?void 0:a.status)||500,void 0,t.data),statusCode:Pe(t)?t.status:void 0,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Pe(t)?t.status:void 0}:Fa(t)?{type:"data",data:t.data,statusCode:(i=t.init)==null?void 0:i.status,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function gd(e,t,r,n,o){let a=e.headers.get("Location");if(se(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!ad.test(a)){let s=n.slice(0,n.findIndex(i=>i.route.id===r)+1);a=ud(new URL(t.url),s,o,a),e.headers.set("Location",a)}return e}function yd(e,t,r,n=!1,o=!1){let a={},s=null,i,l=!1,d={},m=r&&Zt(r[1])?r[1].error:void 0;return e.forEach(g=>{if(!(g.route.id in t))return;let y=g.route.id,C=t[y];if(se(!El(C),"Cannot handle redirect results in processLoaderData"),Zt(C)){let v=C.error;if(m!==void 0&&(v=m,m=void 0),s=s||{},o)s[y]=v;else{let b=on(e,y);s[b.route.id]==null&&(s[b.route.id]=v)}n||(a[y]=id),l||(l=!0,i=Pe(C.error)?C.error.status:500),C.headers&&(d[y]=C.headers)}else a[y]=C.data,C.statusCode&&C.statusCode!==200&&!l&&(i=C.statusCode),C.headers&&(d[y]=C.headers)}),m!==void 0&&r&&(s={[r[0]]:m},r[2]&&(a[r[2]]=void 0)),{loaderData:a,errors:s,statusCode:i||200,loaderHeaders:d}}function on(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function li(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function dt(e,{pathname:t,routeId:r,method:n,type:o,message:a}={}){let s="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(s="Bad Request",n&&t&&r?i=`You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`:o==="invalid-body"&&(i="Unable to encode submission body")):e===403?(s="Forbidden",i=`Route "${r}" does not match URL "${t}"`):e===404?(s="Not Found",i=`No route matches URL "${t}"`):e===405&&(s="Method Not Allowed",n&&t&&r?i=`You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`:n&&(i=`Invalid request method "${n.toUpperCase()}"`)),new er(e||500,s,new Error(i),!0)}function vd(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function xd(e){return _e(e.result)&&xl.has(e.result.status)}function Zt(e){return e.type==="error"}function El(e){return(e&&e.type)==="redirect"}function Fa(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function _e(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Mo(e){return xl.has(e)}function No(e){return _e(e)&&Mo(e.status)&&e.headers.has("Location")}function ui(e){return rd.has(e.toUpperCase())}function os(e){return ed.has(e.toUpperCase())}function _l(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ci(e,t){let r=typeof t=="string"?jr(t).search:t.search;if(e[e.length-1].route.index&&_l(r||""))return e[e.length-1];let n=yl(e);return n[n.length-1]}var tr=S.createContext(null);tr.displayName="DataRouter";var Rr=S.createContext(null);Rr.displayName="DataRouterState";var as=S.createContext({isTransitioning:!1});as.displayName="ViewTransition";var ss=S.createContext(new Map);ss.displayName="Fetchers";var _o=S.createContext(null);_o.displayName="Await";var Je=S.createContext(null);Je.displayName="Navigation";var Fo=S.createContext(null);Fo.displayName="Location";var Ze=S.createContext({outlet:null,matches:[],isDataRoute:!1});Ze.displayName="Route";var is=S.createContext(null);is.displayName="RouteError";function wd(e,{relative:t}={}){se(hn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=S.useContext(Je),{hash:o,pathname:a,search:s}=mn(e,{relative:t}),i=a;return r!=="/"&&(i=a==="/"?r:pt([r,a])),n.createHref({pathname:i,search:s,hash:o})}function hn(){return S.useContext(Fo)!=null}function Me(){return se(hn(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Fo).location}var $l="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jl(e){S.useContext(Je).static||S.useLayoutEffect(e)}function pn(){let{isDataRoute:e}=S.useContext(Ze);return e?kd():Cd()}function Cd(){se(hn(),"useNavigate() may be used only in the context of a <Router> component.");let e=S.useContext(tr),{basename:t,navigator:r}=S.useContext(Je),{matches:n}=S.useContext(Ze),{pathname:o}=Me(),a=JSON.stringify(ts(n)),s=S.useRef(!1);return jl(()=>{s.current=!0}),S.useCallback((l,d={})=>{if(je(s.current,$l),!s.current)return;if(typeof l=="number"){r.go(l);return}let m=rs(l,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:pt([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,a,o,e])}var Rl=S.createContext(null);function Al(){return S.useContext(Rl)}function Sd(e){let t=S.useContext(Ze).outlet;return t&&S.createElement(Rl.Provider,{value:e},t)}function Pl(){let{matches:e}=S.useContext(Ze),t=e[e.length-1];return t?t.params:{}}function mn(e,{relative:t}={}){let{matches:r}=S.useContext(Ze),{pathname:n}=Me(),o=JSON.stringify(ts(r));return S.useMemo(()=>rs(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function Il(e,t,r,n){se(hn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:a}=S.useContext(Je),{matches:s}=S.useContext(Ze),i=s[s.length-1],l=i?i.params:{},d=i?i.pathname:"/",m=i?i.pathnameBase:"/",g=i&&i.route;{let I=g&&g.path||"";Tl(d,!g||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let y=Me(),C;C=y;let v=C.pathname||"/",b=v;if(m!=="/"){let I=m.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(I.length).join("/")}let j=!a&&r&&r.matches&&r.matches.length>0?r.matches:$r(e,{pathname:b});return je(g||j!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),je(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),jd(j&&j.map(I=>Object.assign({},I,{params:Object.assign({},l,I.params),pathname:pt([m,o.encodeLocation?o.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?m:pt([m,o.encodeLocation?o.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,r,n)}function bd(){let e=Ho(),t=Pe(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:a},"ErrorBoundary")," or"," ",S.createElement("code",{style:a},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),r?S.createElement("pre",{style:o},r):null,s)}var Ed=S.createElement(bd,null),_d=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?S.createElement(Ze.Provider,{value:this.props.routeContext},S.createElement(is.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $d({routeContext:e,match:t,children:r}){let n=S.useContext(tr);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(Ze.Provider,{value:e},r)}function jd(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,a=r==null?void 0:r.errors;if(a!=null){let l=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);se(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,l+1))}let s=!1,i=-1;if(r)for(let l=0;l<o.length;l++){let d=o[l];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(i=l),d.route.id){let{loaderData:m,errors:g}=r,y=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){s=!0,i>=0?o=o.slice(0,i+1):o=[o[0]];break}}}return o.reduceRight((l,d,m)=>{let g,y=!1,C=null,v=null;r&&(g=a&&d.route.id?a[d.route.id]:void 0,C=d.route.errorElement||Ed,s&&(i<0&&m===0?(Tl("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,v=null):i===m&&(y=!0,v=d.route.hydrateFallbackElement||null)));let b=t.concat(o.slice(0,m+1)),j=()=>{let $;return g?$=C:y?$=v:d.route.Component?$=S.createElement(d.route.Component,null):d.route.element?$=d.route.element:$=l,S.createElement($d,{match:d,routeContext:{outlet:l,matches:b,isDataRoute:r!=null},children:$})};return r&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?S.createElement(_d,{location:r.location,revalidation:r.revalidation,component:C,error:g,children:j(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):j()},null)}function ls(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rd(e){let t=S.useContext(tr);return se(t,ls(e)),t}function Ar(e){let t=S.useContext(Rr);return se(t,ls(e)),t}function Ad(e){let t=S.useContext(Ze);return se(t,ls(e)),t}function gn(e){let t=Ad(e),r=t.matches[t.matches.length-1];return se(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Pd(){return gn("useRouteId")}function Pr(){return Ar("useNavigation").navigation}function us(){let{matches:e,loaderData:t}=Ar("useMatches");return S.useMemo(()=>e.map(r=>Tc(r,t)),[e,t])}function Re(){let e=Ar("useLoaderData"),t=gn("useLoaderData");return e.loaderData[t]}function Id(e){return Ar("useRouteLoaderData").loaderData[e]}function Uo(){let e=Ar("useActionData"),t=gn("useLoaderData");return e.actionData?e.actionData[t]:void 0}function Ho(){var n;let e=S.useContext(is),t=Ar("useRouteError"),r=gn("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function kl(){let e=S.useContext(_o);return e==null?void 0:e._data}function kd(){let{router:e}=Rd("useNavigate"),t=gn("useNavigate"),r=S.useRef(!1);return jl(()=>{r.current=!0}),S.useCallback(async(o,a={})=>{je(r.current,$l),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...a}))},[e,t])}var di={};function Tl(e,t,r){!t&&!di[e]&&(di[e]=!0,je(!1,r))}var fi={};function Dl(e,t){!e&&!fi[t]&&(fi[t]=!0,console.warn(t))}function Td(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&je(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:S.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&je(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:S.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&je(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:S.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}S.memo(Dd);function Dd({routes:e,future:t,state:r}){return Il(e,void 0,r,t)}function Ol(e){return Sd(e.context)}function Od({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:a=!1}){se(!hn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),i=S.useMemo(()=>({basename:s,navigator:o,static:a,future:{}}),[s,o,a]);typeof r=="string"&&(r=jr(r));let{pathname:l="/",search:d="",hash:m="",state:g=null,key:y="default"}=r,C=S.useMemo(()=>{let v=Le(l,s);return v==null?null:{location:{pathname:v,search:d,hash:m,state:g,key:y},navigationType:n}},[s,l,d,m,g,y,n]);return je(C!=null,`<Router basename="${s}"> is not able to match the URL "${l}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:S.createElement(Je.Provider,{value:i},S.createElement(Fo.Provider,{children:t,value:C}))}function yn({children:e,errorElement:t,resolve:r}){return S.createElement(Ld,{resolve:r,errorElement:t},S.createElement(Md,null,e))}var Ld=class extends S.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,o=0;if(!(r instanceof Promise))o=1,n=Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});else if(this.state.error){o=2;let a=this.state.error;n=Promise.reject().catch(()=>{}),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>a})}else r._tracked?(n=r,o="_error"in n?2:"_data"in n?1:0):(o=0,Object.defineProperty(r,"_tracked",{get:()=>!0}),n=r.then(a=>Object.defineProperty(r,"_data",{get:()=>a}),a=>Object.defineProperty(r,"_error",{get:()=>a})));if(o===2&&!t)throw n._error;if(o===2)return S.createElement(_o.Provider,{value:n,children:t});if(o===1)return S.createElement(_o.Provider,{value:n,children:e});throw n}};function Md({children:e}){let t=kl(),r=typeof e=="function"?e(t):e;return S.createElement(S.Fragment,null,r)}var po="get",mo="application/x-www-form-urlencoded";function Bo(e){return e!=null&&typeof e.tagName=="string"}function Nd(e){return Bo(e)&&e.tagName.toLowerCase()==="button"}function Fd(e){return Bo(e)&&e.tagName.toLowerCase()==="form"}function Ud(e){return Bo(e)&&e.tagName.toLowerCase()==="input"}function Hd(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Bd(e,t){return e.button===0&&(!t||t==="_self")&&!Hd(e)}var io=null;function Vd(){if(io===null)try{new FormData(document.createElement("form"),0),io=!1}catch{io=!0}return io}var qd=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sa(e){return e!=null&&!qd.has(e)?(je(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mo}"`),null):e}function zd(e,t){let r,n,o,a,s;if(Fd(e)){let i=e.getAttribute("action");n=i?Le(i,t):null,r=e.getAttribute("method")||po,o=Sa(e.getAttribute("enctype"))||mo,a=new FormData(e)}else if(Nd(e)||Ud(e)&&(e.type==="submit"||e.type==="image")){let i=e.form;if(i==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||i.getAttribute("action");if(n=l?Le(l,t):null,r=e.getAttribute("formmethod")||i.getAttribute("method")||po,o=Sa(e.getAttribute("formenctype"))||Sa(i.getAttribute("enctype"))||mo,a=new FormData(i,e),!Vd()){let{name:d,type:m,value:g}=e;if(m==="image"){let y=d?`${d}.`:"";a.append(`${y}x`,"0"),a.append(`${y}y`,"0")}else d&&a.append(d,g)}}else{if(Bo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=po,n=null,o=mo,s=e}return a&&o==="text/plain"&&(s=a,a=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:a,body:s}}function vn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Wd(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gd(e,t,r){let n=e.map(a=>{var l;let s=t[a.route.id],i=r.routes[a.route.id];return[i&&i.css?i.css.map(d=>({rel:"stylesheet",href:d})):[],((l=s==null?void 0:s.links)==null?void 0:l.call(s))||[]]}).flat(2),o=cs(e,r);return Ml(n,o)}function Ll(e){return e!=null&&typeof e.page=="string"}function Qd(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Yd(e,t,r){let n=await Promise.all(e.map(async o=>{let a=t.routes[o.route.id];if(a){let s=await Wd(a,r);return s.links?s.links():[]}return[]}));return Ml(n.flat(1).filter(Qd).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function hi(e,t,r,n,o,a){let s=(l,d)=>r[d]?l.route.id!==r[d].route.id:!0,i=(l,d)=>{var m;return r[d].pathname!==l.pathname||((m=r[d].route.path)==null?void 0:m.endsWith("*"))&&r[d].params["*"]!==l.params["*"]};return a==="assets"?t.filter((l,d)=>s(l,d)||i(l,d)):a==="data"?t.filter((l,d)=>{var g;let m=n.routes[l.route.id];if(!m||!m.hasLoader)return!1;if(s(l,d)||i(l,d))return!0;if(l.route.shouldRevalidate){let y=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((g=r[0])==null?void 0:g.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function cs(e,t,{includeHydrateFallback:r}={}){return Kd(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function Kd(e){return[...new Set(e)]}function Jd(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Ml(e,t){let r=new Set,n=new Set(t);return e.reduce((o,a)=>{if(t&&!Ll(a)&&a.as==="script"&&a.href&&n.has(a.href))return o;let i=JSON.stringify(Jd(a));return r.has(i)||(r.add(i),o.push({key:i,link:a})),o},[])}var Zd={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Xd=/[&><\u2028\u2029]/g;function ef(e){return e.replace(Xd,t=>Zd[t])}function pi(e){return{__html:e}}var Nl=-1,Fl=-2,Ul=-3,Hl=-4,ds=-5,Bl=-6,Vl=-7,ql="B",zl="D",Sr="E",Ua="M",Wl="N",br="P",Gl="R",Ha="S",Ql="Y",Yl="U",Ba="Z",Kl=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};function tf(){const e=new TextDecoder;let t="";return new TransformStream({transform(r,n){const o=e.decode(r,{stream:!0}),a=(t+o).split(`
`);t=a.pop()||"";for(const s of a)n.enqueue(s)},flush(r){t&&r.enqueue(t)}})}function Ke(e){const{indices:t}=this,r=t.get(e);if(r)return[r];if(e===void 0)return Vl;if(e===null)return ds;if(Number.isNaN(e))return Fl;if(e===Number.POSITIVE_INFINITY)return Bl;if(e===Number.NEGATIVE_INFINITY)return Ul;if(e===0&&1/e<0)return Hl;const n=this.index++;return t.set(e,n),rf.call(this,e,n),n}function rf(e,t){const{deferred:r,plugins:n,postPlugins:o}=this,a=this.stringified,s=[[e,t]];for(;s.length>0;){const[i,l]=s.pop(),d=g=>Object.keys(g).map(y=>`"_${Ke.call(this,y)}":${Ke.call(this,g[y])}`).join(",");let m=null;switch(typeof i){case"boolean":case"number":case"string":a[l]=JSON.stringify(i);break;case"bigint":a[l]=`["${ql}","${i}"]`;break;case"symbol":{const g=Symbol.keyFor(i);g?a[l]=`["${Ql}",${JSON.stringify(g)}]`:m=new Error("Cannot encode symbol unless created with Symbol.for()");break}case"object":{if(!i){a[l]=`${ds}`;break}const g=Array.isArray(i);let y=!1;if(!g&&n)for(const C of n){const v=C(i);if(Array.isArray(v)){y=!0;const[b,...j]=v;a[l]=`[${JSON.stringify(b)}`,j.length>0&&(a[l]+=`,${j.map($=>Ke.call(this,$)).join(",")}`),a[l]+="]";break}}if(!y){let C=g?"[":"{";if(g){for(let v=0;v<i.length;v++)C+=(v?",":"")+(v in i?Ke.call(this,i[v]):Nl);a[l]=`${C}]`}else i instanceof Date?a[l]=`["${zl}",${i.getTime()}]`:i instanceof URL?a[l]=`["${Yl}",${JSON.stringify(i.href)}]`:i instanceof RegExp?a[l]=`["${Gl}",${JSON.stringify(i.source)},${JSON.stringify(i.flags)}]`:i instanceof Set?i.size>0?a[l]=`["${Ha}",${[...i].map(v=>Ke.call(this,v)).join(",")}]`:a[l]=`["${Ha}"]`:i instanceof Map?i.size>0?a[l]=`["${Ua}",${[...i].flatMap(([v,b])=>[Ke.call(this,v),Ke.call(this,b)]).join(",")}]`:a[l]=`["${Ua}"]`:i instanceof Promise?(a[l]=`["${br}",${l}]`,r[l]=i):i instanceof Error?(a[l]=`["${Sr}",${JSON.stringify(i.message)}`,i.name!=="Error"&&(a[l]+=`,${JSON.stringify(i.name)}`),a[l]+="]"):Object.getPrototypeOf(i)===null?a[l]=`["${Wl}",{${d(i)}}]`:of(i)?a[l]=`{${d(i)}}`:m=new Error("Cannot encode object with prototype")}break}default:{const g=Array.isArray(i);let y=!1;if(!g&&n)for(const C of n){const v=C(i);if(Array.isArray(v)){y=!0;const[b,...j]=v;a[l]=`[${JSON.stringify(b)}`,j.length>0&&(a[l]+=`,${j.map($=>Ke.call(this,$)).join(",")}`),a[l]+="]";break}}y||(m=new Error("Cannot encode function or unexpected type"))}}if(m){let g=!1;if(o)for(const y of o){const C=y(i);if(Array.isArray(C)){g=!0;const[v,...b]=C;a[l]=`[${JSON.stringify(v)}`,b.length>0&&(a[l]+=`,${b.map(j=>Ke.call(this,j)).join(",")}`),a[l]+="]";break}}if(!g)throw m}}}var nf=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function of(e){const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getOwnPropertyNames(t).sort().join("\0")===nf}var ba=typeof window<"u"?window:typeof globalThis<"u"?globalThis:void 0;function Va(e){const{hydrated:t,values:r}=this;if(typeof e=="number")return mi.call(this,e);if(!Array.isArray(e)||!e.length)throw new SyntaxError;const n=r.length;for(const o of e)r.push(o);return t.length=r.length,mi.call(this,n)}function mi(e){const{hydrated:t,values:r,deferred:n,plugins:o}=this;let a;const s=[[e,l=>{a=l}]];let i=[];for(;s.length>0;){const[l,d]=s.pop();switch(l){case Vl:d(void 0);continue;case ds:d(null);continue;case Fl:d(NaN);continue;case Bl:d(1/0);continue;case Ul:d(-1/0);continue;case Hl:d(-0);continue}if(t[l]){d(t[l]);continue}const m=r[l];if(!m||typeof m!="object"){t[l]=m,d(m);continue}if(Array.isArray(m))if(typeof m[0]=="string"){const[g,y,C]=m;switch(g){case zl:d(t[l]=new Date(y));continue;case Yl:d(t[l]=new URL(y));continue;case ql:d(t[l]=BigInt(y));continue;case Gl:d(t[l]=new RegExp(y,C));continue;case Ql:d(t[l]=Symbol.for(y));continue;case Ha:const v=new Set;t[l]=v;for(let F=m.length-1;F>0;F--)s.push([m[F],O=>{v.add(O)}]);d(v);continue;case Ua:const b=new Map;t[l]=b;for(let F=m.length-2;F>0;F-=2){const O=[];s.push([m[F+1],D=>{O[1]=D}]),s.push([m[F],D=>{O[0]=D}]),i.push(()=>{b.set(O[0],O[1])})}d(b);continue;case Wl:const j=Object.create(null);t[l]=j;for(const F of Object.keys(y).reverse()){const O=[];s.push([y[F],D=>{O[1]=D}]),s.push([Number(F.slice(1)),D=>{O[0]=D}]),i.push(()=>{j[O[0]]=O[1]})}d(j);continue;case br:if(t[y])d(t[l]=t[y]);else{const F=new Kl;n[y]=F,d(t[l]=F.promise)}continue;case Sr:const[,$,I]=m;let L=I&&ba&&ba[I]?new ba[I]($):new Error($);t[l]=L,d(L);continue;case Ba:d(t[l]=t[y]);continue;default:if(Array.isArray(o)){const F=[],O=m.slice(1);for(let D=0;D<O.length;D++){const H=O[D];s.push([H,q=>{F[D]=q}])}i.push(()=>{for(const D of o){const H=D(m[0],...F);if(H){d(t[l]=H.value);return}}throw new SyntaxError});continue}throw new SyntaxError}}else{const g=[];t[l]=g;for(let y=0;y<m.length;y++){const C=m[y];C!==Nl&&s.push([C,v=>{g[y]=v}])}d(g);continue}else{const g={};t[l]=g;for(const y of Object.keys(m).reverse()){const C=[];s.push([m[y],v=>{C[1]=v}]),s.push([Number(y.slice(1)),v=>{C[0]=v}]),i.push(()=>{g[C[0]]=C[1]})}d(g);continue}}for(;i.length>0;)i.pop()();return a}async function af(e,t){const{plugins:r}=t??{},n=new Kl,o=e.pipeThrough(tf()).getReader(),a={values:[],hydrated:[],deferred:{},plugins:r},s=await sf.call(a,o);let i=n.promise;return s.done?n.resolve():i=lf.call(a,o).then(n.resolve).catch(l=>{for(const d of Object.values(a.deferred))d.reject(l);n.reject(l)}),{done:i.then(()=>o.closed),value:s.value}}async function sf(e){const t=await e.read();if(!t.value)throw new SyntaxError;let r;try{r=JSON.parse(t.value)}catch{throw new SyntaxError}return{done:t.done,value:Va.call(this,r)}}async function lf(e){let t=await e.read();for(;!t.done;){if(!t.value)continue;const r=t.value;switch(r[0]){case br:{const n=r.indexOf(":"),o=Number(r.slice(1,n)),a=this.deferred[o];if(!a)throw new Error(`Deferred ID ${o} not found in stream`);const s=r.slice(n+1);let i;try{i=JSON.parse(s)}catch{throw new SyntaxError}const l=Va.call(this,i);a.resolve(l);break}case Sr:{const n=r.indexOf(":"),o=Number(r.slice(1,n)),a=this.deferred[o];if(!a)throw new Error(`Deferred ID ${o} not found in stream`);const s=r.slice(n+1);let i;try{i=JSON.parse(s)}catch{throw new SyntaxError}const l=Va.call(this,i);a.reject(l);break}default:throw new SyntaxError}t=await e.read()}}function uf(e,t){const{plugins:r,postPlugins:n,signal:o}=t??{},a={deferred:{},index:0,indices:new Map,stringified:[],plugins:r,postPlugins:n,signal:o},s=new TextEncoder;let i=0;return new ReadableStream({async start(d){const m=Ke.call(a,e);if(Array.isArray(m))throw new Error("This should never happen");m<0?d.enqueue(s.encode(`${m}
`)):(d.enqueue(s.encode(`[${a.stringified.join(",")}]
`)),i=a.stringified.length-1);const g=new WeakSet;if(Object.keys(a.deferred).length){let y;const C=new Promise((v,b)=>{if(y=v,o){const j=()=>b(o.reason||new Error("Signal was aborted."));o.aborted?j():o.addEventListener("abort",$=>{j()})}});for(;Object.keys(a.deferred).length>0;){for(const[v,b]of Object.entries(a.deferred))g.has(b)||g.add(a.deferred[Number(v)]=Promise.race([C,b]).then(j=>{const $=Ke.call(a,j);if(Array.isArray($))d.enqueue(s.encode(`${br}${v}:[["${Ba}",${$[0]}]]
`)),a.index++,i++;else if($<0)d.enqueue(s.encode(`${br}${v}:${$}
`));else{const I=a.stringified.slice(i+1).join(",");d.enqueue(s.encode(`${br}${v}:[${I}]
`)),i=a.stringified.length-1}},j=>{(!j||typeof j!="object"||!(j instanceof Error))&&(j=new Error("An unknown error occurred"));const $=Ke.call(a,j);if(Array.isArray($))d.enqueue(s.encode(`${Sr}${v}:[["${Ba}",${$[0]}]]
`)),a.index++,i++;else if($<0)d.enqueue(s.encode(`${Sr}${v}:${$}
`));else{const I=a.stringified.slice(i+1).join(",");d.enqueue(s.encode(`${Sr}${v}:[${I}]
`)),i=a.stringified.length-1}}).finally(()=>{delete a.deferred[Number(v)]}));await Promise.race(Object.values(a.deferred))}y()}await Promise.all(Object.values(a.deferred)),d.close()}})}var Lt=Symbol("SingleFetchRedirect"),ln=202,cf=new Set([100,101,204,205]);function Jl({context:e,identifier:t,reader:r,textDecoder:n,nonce:o}){if(!e.renderMeta||!e.renderMeta.didRenderScripts)return null;e.renderMeta.streamCache||(e.renderMeta.streamCache={});let{streamCache:a}=e.renderMeta,s=a[t];if(s||(s=a[t]=r.read().then(m=>{a[t].result={done:m.done,value:n.decode(m.value,{stream:!0})}}).catch(m=>{a[t].error=m})),s.error)throw s.error;if(s.result===void 0)throw s;let{done:i,value:l}=s.result,d=l?S.createElement("script",{nonce:o,dangerouslySetInnerHTML:{__html:`window.__reactRouterContext.streamController.enqueue(${ef(JSON.stringify(l))});`}}):null;return i?S.createElement(S.Fragment,null,d,S.createElement("script",{nonce:o,dangerouslySetInnerHTML:{__html:"window.__reactRouterContext.streamController.close();"}})):S.createElement(S.Fragment,null,d,S.createElement(S.Suspense,null,S.createElement(Jl,{context:e,identifier:t+1,reader:r,textDecoder:n,nonce:o})))}function df(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&Le(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function ff(e,t){return af(e,{plugins:[(r,...n)=>{if(r==="SanitizedError"){let[o,a,s]=n,i=Error;o&&o in t&&typeof t[o]=="function"&&(i=t[o]);let l=new i(a);return l.stack=s,{value:l}}if(r==="ErrorResponse"){let[o,a,s]=n;return{value:new er(a,s,o)}}if(r==="SingleFetchRedirect")return{value:{[Lt]:n[0]}};if(r==="SingleFetchClassInstance")return{value:n[0]};if(r==="SingleFetchFallback")return{value:void 0}}]})}var hf=class extends S.Component{constructor(e){super(e),this.state={error:e.error||null,location:e.location}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error||null,location:e.location}:{error:e.error||t.error,location:t.location}}render(){return this.state.error?S.createElement(Zl,{error:this.state.error,isOutsideRemixApp:!0}):this.props.children}};function Zl({error:e,isOutsideRemixApp:t}){console.error(e);let r=S.createElement("script",{dangerouslySetInnerHTML:{__html:`
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `}});if(Pe(e))return S.createElement(qa,{title:"Unhandled Thrown Response!"},S.createElement("h1",{style:{fontSize:"24px"}},e.status," ",e.statusText),r);let n;if(e instanceof Error)n=e;else{let o=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);n=new Error(o)}return S.createElement(qa,{title:"Application Error!",isOutsideRemixApp:t},S.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),S.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},n.stack),r)}function qa({title:e,renderScripts:t,isOutsideRemixApp:r,children:n}){var a;let{routeModules:o}=Ir();return(a=o.root)!=null&&a.Layout&&!r?n:S.createElement("html",{lang:"en"},S.createElement("head",null,S.createElement("meta",{charSet:"utf-8"}),S.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),S.createElement("title",null,e)),S.createElement("body",null,S.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},n,t?S.createElement(tu,null):null)))}function pf(){return S.createElement(qa,{title:"Loading...",renderScripts:!0},S.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `}}))}function mf(e){let t={};return Object.values(e).forEach(r=>{if(r){let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}}),t}function gf(e,t,r){let n=yf(t),o=t.HydrateFallback&&(!r||e.id==="root")?t.HydrateFallback:e.id==="root"?pf:void 0,a=t.ErrorBoundary?t.ErrorBoundary:e.id==="root"?()=>S.createElement(Zl,{error:Ho()}):void 0;return e.id==="root"&&t.Layout?{...n?{element:S.createElement(t.Layout,null,S.createElement(n,null))}:{Component:n},...a?{errorElement:S.createElement(t.Layout,null,S.createElement(a,null))}:{ErrorBoundary:a},...o?{hydrateFallbackElement:S.createElement(t.Layout,null,S.createElement(o,null))}:{HydrateFallback:o}}:{Component:n,ErrorBoundary:a,HydrateFallback:o}}function Xl(e,t,r,n,o="",a=mf(e),s=Promise.resolve({Component:()=>null})){return(a[o]||[]).map(i=>{let l=t[i.id];vn(l,"No `routeModule` available to create server routes");let d={...gf(i,l,n),caseSensitive:i.caseSensitive,id:i.id,index:i.index,path:i.path,handle:l.handle,lazy:n?()=>s:void 0,loader:i.hasLoader||i.hasClientLoader?()=>null:void 0},m=Xl(e,t,r,n,i.id,a,s);return m.length>0&&(d.children=m),d})}function yf(e){if(e.default==null)return;if(!(typeof e.default=="object"&&Object.keys(e.default).length===0))return e.default}function vf(e,t,r,n){return n&&e!=="root"||t!=null&&(t.hydrate===!0||r!==!0)}function xf(e,t){return e.mode==="lazy"&&t===!0}function wf({sri:e,...t},r){let n=new Set(r.state.matches.map(i=>i.route.id)),o=r.state.location.pathname.split("/").filter(Boolean),a=["/"];for(o.pop();o.length>0;)a.push(`/${o.join("/")}`),o.pop();a.forEach(i=>{let l=$r(r.routes,i,r.basename);l&&l.forEach(d=>n.add(d.route.id))});let s=[...n].reduce((i,l)=>Object.assign(i,{[l]:t.routes[l]}),{});return{...t,routes:s,sri:e?!0:void 0}}function Cf(e,t){let r=e||"/__manifest";return t==null?r:`${t}${r}`.replace(/\/+/g,"/")}function fs(){let e=S.useContext(tr);return vn(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Vo(){let e=S.useContext(Rr);return vn(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var xn=S.createContext(void 0);xn.displayName="FrameworkContext";function Ir(){let e=S.useContext(xn);return vn(e,"You must render this element inside a <HydratedRouter> element"),e}function Sf(e,t){let r=S.useContext(xn),[n,o]=S.useState(!1),[a,s]=S.useState(!1),{onFocus:i,onBlur:l,onMouseEnter:d,onMouseLeave:m,onTouchStart:g}=t,y=S.useRef(null);S.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let b=$=>{$.forEach(I=>{s(I.isIntersecting)})},j=new IntersectionObserver(b,{threshold:.5});return y.current&&j.observe(y.current),()=>{j.disconnect()}}},[e]),S.useEffect(()=>{if(n){let b=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(b)}}},[n]);let C=()=>{o(!0)},v=()=>{o(!1),s(!1)};return r?e!=="intent"?[a,y,{}]:[a,y,{onFocus:Xr(i,C),onBlur:Xr(l,v),onMouseEnter:Xr(d,C),onMouseLeave:Xr(m,v),onTouchStart:Xr(g,C)}]:[!1,y,{}]}function Xr(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function hs(e,t,r){if(r&&!go)return[e[0]];if(t){let n=e.findIndex(o=>t[o.route.id]!==void 0);return e.slice(0,n+1)}return e}function bf(){let{isSpaMode:e,manifest:t,routeModules:r,criticalCss:n}=Ir(),{errors:o,matches:a}=Vo(),s=hs(a,o,e),i=S.useMemo(()=>Gd(s,r,t),[s,r,t]);return S.createElement(S.Fragment,null,typeof n=="string"?S.createElement("style",{dangerouslySetInnerHTML:{__html:n}}):null,typeof n=="object"?S.createElement("link",{rel:"stylesheet",href:n.href}):null,i.map(({key:l,link:d})=>Ll(d)?S.createElement(eu,{key:l,...d}):S.createElement("link",{key:l,...d})))}function eu({page:e,...t}){let{router:r}=fs(),n=S.useMemo(()=>$r(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?S.createElement(_f,{page:e,matches:n,...t}):null}function Ef(e){let{manifest:t,routeModules:r}=Ir(),[n,o]=S.useState([]);return S.useEffect(()=>{let a=!1;return Yd(e,t,r).then(s=>{a||o(s)}),()=>{a=!0}},[e,t,r]),n}function _f({page:e,matches:t,...r}){let n=Me(),{manifest:o,routeModules:a}=Ir(),{basename:s}=fs(),{loaderData:i,matches:l}=Vo(),d=S.useMemo(()=>hi(e,t,l,o,n,"data"),[e,t,l,o,n]),m=S.useMemo(()=>hi(e,t,l,o,n,"assets"),[e,t,l,o,n]),g=S.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let v=new Set,b=!1;if(t.forEach($=>{var L;let I=o.routes[$.route.id];!I||!I.hasLoader||(!d.some(F=>F.route.id===$.route.id)&&$.route.id in i&&((L=a[$.route.id])!=null&&L.shouldRevalidate)||I.hasClientLoader?b=!0:v.add($.route.id))}),v.size===0)return[];let j=df(e,s);return b&&v.size>0&&j.searchParams.set("_routes",t.filter($=>v.has($.route.id)).map($=>$.route.id).join(",")),[j.pathname+j.search]},[s,i,n,o,d,t,e,a]),y=S.useMemo(()=>cs(m,o),[m,o]),C=Ef(m);return S.createElement(S.Fragment,null,g.map(v=>S.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...r})),y.map(v=>S.createElement("link",{key:v,rel:"modulepreload",href:v,...r})),C.map(({key:v,link:b})=>S.createElement("link",{key:v,...b})))}function $f(){let{isSpaMode:e,routeModules:t}=Ir(),{errors:r,matches:n,loaderData:o}=Vo(),a=Me(),s=hs(n,r,e),i=null;r&&(i=r[s[s.length-1].route.id]);let l=[],d=null,m=[];for(let g=0;g<s.length;g++){let y=s[g],C=y.route.id,v=o[C],b=y.params,j=t[C],$=[],I={id:C,data:v,meta:[],params:y.params,pathname:y.pathname,handle:y.route.handle,error:i};if(m[g]=I,j!=null&&j.meta?$=typeof j.meta=="function"?j.meta({data:v,params:b,location:a,matches:m,error:i}):Array.isArray(j.meta)?[...j.meta]:j.meta:d&&($=[...d]),$=$||[],!Array.isArray($))throw new Error("The route at "+y.route.path+` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);I.meta=$,m[g]=I,l=[...$],d=l}return S.createElement(S.Fragment,null,l.flat().map(g=>{if(!g)return null;if("tagName"in g){let{tagName:y,...C}=g;if(!jf(y))return console.warn(`A meta object uses an invalid tagName: ${y}. Expected either 'link' or 'meta'`),null;let v=y;return S.createElement(v,{key:JSON.stringify(C),...C})}if("title"in g)return S.createElement("title",{key:"title"},String(g.title));if("charset"in g&&(g.charSet??(g.charSet=g.charset),delete g.charset),"charSet"in g&&g.charSet!=null)return typeof g.charSet=="string"?S.createElement("meta",{key:"charSet",charSet:g.charSet}):null;if("script:ld+json"in g)try{let y=JSON.stringify(g["script:ld+json"]);return S.createElement("script",{key:`script:ld+json:${y}`,type:"application/ld+json",dangerouslySetInnerHTML:{__html:y}})}catch{return null}return S.createElement("meta",{key:JSON.stringify(g),...g})}))}function jf(e){return typeof e=="string"&&/^(meta|link)$/.test(e)}var go=!1;function tu(e){let{manifest:t,serverHandoffString:r,isSpaMode:n,renderMeta:o,routeDiscovery:a,ssr:s}=Ir(),{router:i,static:l,staticContext:d}=fs(),{matches:m}=Vo(),g=xf(a,s);o&&(o.didRenderScripts=!0);let y=hs(m,null,n);S.useEffect(()=>{go=!0},[]);let C=S.useMemo(()=>{var L;let $=d?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",I=l?`${(L=t.hmr)!=null&&L.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${g?"":`import ${JSON.stringify(t.url)}`};
${y.map((F,O)=>{let D=`route${O}`,H=t.routes[F.route.id];vn(H,`Route ${F.route.id} not found in manifest`);let{clientActionModule:q,clientLoaderModule:W,clientMiddlewareModule:G,hydrateFallbackModule:Z,module:ce}=H,z=[...q?[{module:q,varName:`${D}_clientAction`}]:[],...W?[{module:W,varName:`${D}_clientLoader`}]:[],...G?[{module:G,varName:`${D}_clientMiddleware`}]:[],...Z?[{module:Z,varName:`${D}_HydrateFallback`}]:[],{module:ce,varName:`${D}_main`}];if(z.length===1)return`import * as ${D} from ${JSON.stringify(ce)};`;let J=z.map(de=>`import * as ${de.varName} from "${de.module}";`).join(`
`),ue=`const ${D} = {${z.map(de=>`...${de.varName}`).join(",")}};`;return[J,ue].join(`
`)}).join(`
`)}
  ${g?`window.__reactRouterManifest = ${JSON.stringify(wf(t,i),null,2)};`:""}
  window.__reactRouterRouteModules = {${y.map((F,O)=>`${JSON.stringify(F.route.id)}:route${O}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`:" ";return S.createElement(S.Fragment,null,S.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:pi($),type:void 0}),S.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:pi(I),type:"module",async:!0}))},[]),v=go?[]:Rf(t.entry.imports.concat(cs(y,t,{includeHydrateFallback:!0}))),b=typeof t.sri=="object"?t.sri:{};return go?null:S.createElement(S.Fragment,null,typeof t.sri=="object"?S.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,g?null:S.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin,integrity:b[t.url],suppressHydrationWarning:!0}),S.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin,integrity:b[t.entry.module],suppressHydrationWarning:!0}),v.map(j=>S.createElement("link",{key:j,rel:"modulepreload",href:j,crossOrigin:e.crossOrigin,integrity:b[j],suppressHydrationWarning:!0})),C)}function Rf(e){return[...new Set(e)]}function Af(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var ru=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ru&&(window.__reactRouterVersion="7.6.0")}catch{}var nu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=S.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:a,replace:s,state:i,target:l,to:d,preventScrollReset:m,viewTransition:g,...y},C){let{basename:v}=S.useContext(Je),b=typeof d=="string"&&nu.test(d),j,$=!1;if(typeof d=="string"&&b&&(j=d,ru))try{let W=new URL(window.location.href),G=d.startsWith("//")?new URL(W.protocol+d):new URL(d),Z=Le(G.pathname,v);G.origin===W.origin&&Z!=null?d=Z+G.search+G.hash:$=!0}catch{je(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let I=wd(d,{relative:o}),[L,F,O]=Sf(n,y),D=Pf(d,{replace:s,state:i,target:l,preventScrollReset:m,relative:o,viewTransition:g});function H(W){t&&t(W),W.defaultPrevented||D(W)}let q=S.createElement("a",{...y,...O,href:j||I,onClick:$||a?t:H,ref:Af(C,F),target:l,"data-discover":!b&&r==="render"?"true":void 0});return L&&!b?S.createElement(S.Fragment,null,q,S.createElement(eu,{page:I})):q});Ce.displayName="Link";var kt=S.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:a,to:s,viewTransition:i,children:l,...d},m){let g=mn(s,{relative:d.relative}),y=Me(),C=S.useContext(Rr),{navigator:v,basename:b}=S.useContext(Je),j=C!=null&&Mf(g)&&i===!0,$=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,I=y.pathname,L=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;r||(I=I.toLowerCase(),L=L?L.toLowerCase():null,$=$.toLowerCase()),L&&b&&(L=Le(L,b)||L);const F=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let O=I===$||!o&&I.startsWith($)&&I.charAt(F)==="/",D=L!=null&&(L===$||!o&&L.startsWith($)&&L.charAt($.length)==="/"),H={isActive:O,isPending:D,isTransitioning:j},q=O?t:void 0,W;typeof n=="function"?W=n(H):W=[n,O?"active":null,D?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let G=typeof a=="function"?a(H):a;return S.createElement(Ce,{...d,"aria-current":q,className:W,ref:m,style:G,to:s,viewTransition:i},typeof l=="function"?l(H):l)});kt.displayName="NavLink";var kr=S.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:a,method:s=po,action:i,onSubmit:l,relative:d,preventScrollReset:m,viewTransition:g,...y},C)=>{let v=su(),b=Tf(i,{relative:d}),j=s.toLowerCase()==="get"?"get":"post",$=typeof i=="string"&&nu.test(i),I=L=>{if(l&&l(L),L.defaultPrevented)return;L.preventDefault();let F=L.nativeEvent.submitter,O=(F==null?void 0:F.getAttribute("formmethod"))||s;v(F||L.currentTarget,{fetcherKey:t,method:O,navigate:r,replace:o,state:a,relative:d,preventScrollReset:m,viewTransition:g})};return S.createElement("form",{ref:C,method:j,action:b,onSubmit:n?l:I,...y,"data-discover":!$&&e==="render"?"true":void 0})});kr.displayName="Form";function ou({getKey:e,storageKey:t,...r}){let n=S.useContext(xn),{basename:o}=S.useContext(Je),a=Me(),s=us();Of({getKey:e,storageKey:t});let i=S.useMemo(()=>{if(!n||!e)return null;let d=Wa(a,s,o,e);return d!==a.key?d:null},[]);if(!n||n.isSpaMode)return null;let l=((d,m)=>{if(!window.history.state||!window.history.state.key){let g=Math.random().toString(32).slice(2);window.history.replaceState({key:g},"")}try{let y=JSON.parse(sessionStorage.getItem(d)||"{}")[m||window.history.state.key];typeof y=="number"&&window.scrollTo(0,y)}catch(g){console.error(g),sessionStorage.removeItem(d)}}).toString();return S.createElement("script",{...r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${l})(${JSON.stringify(t||za)}, ${JSON.stringify(i)})`}})}ou.displayName="ScrollRestoration";function au(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qo(e){let t=S.useContext(tr);return se(t,au(e)),t}function ps(e){let t=S.useContext(Rr);return se(t,au(e)),t}function Pf(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:a,viewTransition:s}={}){let i=pn(),l=Me(),d=mn(e,{relative:a});return S.useCallback(m=>{if(Bd(m,t)){m.preventDefault();let g=r!==void 0?r:Ot(l)===Ot(d);i(e,{replace:g,state:n,preventScrollReset:o,relative:a,viewTransition:s})}},[l,i,d,r,n,t,e,o,a,s])}var If=0,kf=()=>`__${String(++If)}__`;function su(){let{router:e}=qo("useSubmit"),{basename:t}=S.useContext(Je),r=Pd();return S.useCallback(async(n,o={})=>{let{action:a,method:s,encType:i,formData:l,body:d}=zd(n,t);if(o.navigate===!1){let m=o.fetcherKey||kf();await e.fetch(m,r,o.action||a,{preventScrollReset:o.preventScrollReset,formData:l,body:d,formMethod:o.method||s,formEncType:o.encType||i,flushSync:o.flushSync})}else await e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:l,body:d,formMethod:o.method||s,formEncType:o.encType||i,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function Tf(e,{relative:t}={}){let{basename:r}=S.useContext(Je),n=S.useContext(Ze);se(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),a={...mn(e||".",{relative:t})},s=Me();if(e==null){a.search=s.search;let i=new URLSearchParams(a.search),l=i.getAll("index");if(l.some(m=>m==="")){i.delete("index"),l.filter(g=>g).forEach(g=>i.append("index",g));let m=i.toString();a.search=m?`?${m}`:""}}return(!e||e===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:pt([r,a.pathname])),Ot(a)}function ms({key:e}={}){var j;let{router:t}=qo("useFetcher"),r=ps("useFetcher"),n=S.useContext(ss),o=S.useContext(Ze),a=(j=o.matches[o.matches.length-1])==null?void 0:j.route.id;se(n,"useFetcher must be used inside a FetchersContext"),se(o,"useFetcher must be used inside a RouteContext"),se(a!=null,'useFetcher can only be used on routes that contain a unique "id"');let s=S.useId(),[i,l]=S.useState(e||s);e&&e!==i&&l(e),S.useEffect(()=>(t.getFetcher(i),()=>t.deleteFetcher(i)),[t,i]);let d=S.useCallback(async($,I)=>{se(a,"No routeId available for fetcher.load()"),await t.fetch(i,a,$,I)},[i,a,t]),m=su(),g=S.useCallback(async($,I)=>{await m($,{...I,navigate:!1,fetcherKey:i})},[i,m]),y=S.useMemo(()=>{let $=S.forwardRef((I,L)=>S.createElement(kr,{...I,navigate:!1,fetcherKey:i,ref:L}));return $.displayName="fetcher.Form",$},[i]),C=r.fetchers.get(i)||wl,v=n.get(i);return S.useMemo(()=>({Form:y,submit:g,load:d,...C,data:v}),[y,g,d,C,v])}function Df(){let e=ps("useFetchers");return Array.from(e.fetchers.entries()).map(([t,r])=>({...r,key:t}))}var za="react-router-scroll-positions",lo={};function Wa(e,t,r,n){let o=null;return n&&(r!=="/"?o=n({...e,pathname:Le(e.pathname,r)||e.pathname},t):o=n(e,t)),o==null&&(o=e.key),o}function Of({getKey:e,storageKey:t}={}){let{router:r}=qo("useScrollRestoration"),{restoreScrollPosition:n,preventScrollReset:o}=ps("useScrollRestoration"),{basename:a}=S.useContext(Je),s=Me(),i=us(),l=Pr();S.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),Lf(S.useCallback(()=>{if(l.state==="idle"){let d=Wa(s,i,a,e);lo[d]=window.scrollY}try{sessionStorage.setItem(t||za,JSON.stringify(lo))}catch(d){je(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${d}).`)}window.history.scrollRestoration="auto"},[l.state,e,a,s,i,t])),typeof document<"u"&&(S.useLayoutEffect(()=>{try{let d=sessionStorage.getItem(t||za);d&&(lo=JSON.parse(d))}catch{}},[t]),S.useLayoutEffect(()=>{let d=r==null?void 0:r.enableScrollRestoration(lo,()=>window.scrollY,e?(m,g)=>Wa(m,g,a,e):void 0);return()=>d&&d()},[r,a,e]),S.useLayoutEffect(()=>{if(n!==!1){if(typeof n=="number"){window.scrollTo(0,n);return}if(s.hash){let d=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(d){d.scrollIntoView();return}}o!==!0&&window.scrollTo(0,0)}},[s,n,o]))}function Lf(e,t){let{capture:r}={};S.useEffect(()=>{let n=r!=null?{capture:r}:void 0;return window.addEventListener("pagehide",e,n),()=>{window.removeEventListener("pagehide",e,n)}},[e,r])}function Mf(e,t={}){let r=S.useContext(as);se(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=qo("useViewTransitionState"),o=mn(e,{relative:t.relative});if(!r.isTransitioning)return!1;let a=Le(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=Le(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Eo(o.pathname,s)!=null||Eo(o.pathname,a)!=null}function Nf({context:e,router:t,hydrate:r=!0,nonce:n}){se(t&&e,"You must provide `router` and `context` to <StaticRouterProvider>");let o={router:t,navigator:Hf(),static:!0,staticContext:e,basename:e.basename||"/"},a=new Map,s="";if(r!==!1){let l={loaderData:e.loaderData,actionData:e.actionData,errors:Uf(e.errors)};s=`window.__staticRouterHydrationData = JSON.parse(${Wf(JSON.stringify(JSON.stringify(l)))});`}let{state:i}=o.router;return S.createElement(S.Fragment,null,S.createElement(tr.Provider,{value:o},S.createElement(Rr.Provider,{value:i},S.createElement(ss.Provider,{value:a},S.createElement(as.Provider,{value:{isTransitioning:!1}},S.createElement(Od,{basename:o.basename,location:i.location,navigationType:i.historyAction,navigator:o.navigator,static:o.static},S.createElement(Ff,{routes:t.routes,future:t.future,state:i})))))),s?S.createElement("script",{suppressHydrationWarning:!0,nonce:n,dangerouslySetInnerHTML:{__html:s}}):null)}function Ff({routes:e,future:t,state:r}){return Il(e,void 0,r,t)}function Uf(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,o]of t)Pe(o)?r[n]={...o,__type:"RouteErrorResponse"}:o instanceof Error?r[n]={message:o.message,__type:"Error",...o.name!=="Error"?{__subType:o.name}:{}}:r[n]=o;return r}function Hf(){return{createHref:iu,encodeLocation:lu,push(e){throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)})\` somewhere in your app.`)},replace(e){throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)}, { replace: true })\` somewhere in your app.`)},go(e){throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`)},back(){throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.")},forward(){throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.")}}}function Bf(e,t,r={}){let n={},o=es(e,Td,void 0,n),a=t.matches.map(i=>{let l=n[i.route.id]||i.route;return{...i,route:l}}),s=i=>`You cannot use router.${i}() on the server because it is a stateless environment`;return{get basename(){return t.basename},get future(){return{unstable_middleware:!1,...r==null?void 0:r.future}},get state(){return{historyAction:"POP",location:t.location,matches:a,loaderData:t.loaderData,actionData:t.actionData,errors:t.errors,initialized:!0,navigation:nd,restoreScrollPosition:null,preventScrollReset:!1,revalidation:"idle",fetchers:new Map,blockers:new Map}},get routes(){return o},get window(){},initialize(){throw s("initialize")},subscribe(){throw s("subscribe")},enableScrollRestoration(){throw s("enableScrollRestoration")},navigate(){throw s("navigate")},fetch(){throw s("fetch")},revalidate(){throw s("revalidate")},createHref:iu,encodeLocation:lu,getFetcher(){return wl},deleteFetcher(){throw s("deleteFetcher")},dispose(){throw s("dispose")},getBlocker(){return od},deleteBlocker(){throw s("deleteBlocker")},patchRoutes(){throw s("patchRoutes")},_internalFetchControllers:new Map,_internalSetRoutes(){throw s("_internalSetRoutes")}}}function iu(e){return typeof e=="string"?e:Ot(e)}function lu(e){let t=typeof e=="string"?e:Ot(e);t=t.replace(/ $/,"%20");let r=Vf.test(t)?new URL(t):new URL(t,"http://localhost");return{pathname:r.pathname,search:r.search,hash:r.hash}}var Vf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qf={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},zf=/[&><\u2028\u2029]/g;function Wf(e){return e.replace(zf,t=>qf[t])}function Gf({context:e,url:t,nonce:r}){typeof t=="string"&&(t=new URL(t));let{manifest:n,routeModules:o,criticalCss:a,serverHandoffString:s}=e,i=Xl(n.routes,o,e.future,e.isSpaMode);e.staticHandlerContext.loaderData={...e.staticHandlerContext.loaderData};for(let d of e.staticHandlerContext.matches){let m=d.route.id,g=o[m],y=e.manifest.routes[m];g&&y&&vf(m,g.clientLoader,y.hasLoader,e.isSpaMode)&&(g.HydrateFallback||!y.hasLoader)&&delete e.staticHandlerContext.loaderData[m]}let l=Bf(i,e.staticHandlerContext);return S.createElement(S.Fragment,null,S.createElement(xn.Provider,{value:{manifest:n,routeModules:o,criticalCss:a,serverHandoffString:s,future:e.future,ssr:e.ssr,isSpaMode:e.isSpaMode,routeDiscovery:e.routeDiscovery,serializeError:e.serializeError,renderMeta:e.renderMeta}},S.createElement(hf,{location:l.state.location},S.createElement(Nf,{router:l,context:e.staticHandlerContext,hydrate:!1}))),e.serverHandoffStream?S.createElement(S.Suspense,null,S.createElement(Jl,{context:e,identifier:0,reader:e.serverHandoffStream.getReader(),textDecoder:new TextDecoder,nonce:r})):null)}var gs=new TextEncoder,Qf=async(e,t)=>{let r=gs.encode(e),n=await uu(t,["sign"]),o=await crypto.subtle.sign("HMAC",n,r),a=btoa(String.fromCharCode(...new Uint8Array(o))).replace(/=+$/,"");return e+"."+a},Yf=async(e,t)=>{let r=e.lastIndexOf("."),n=e.slice(0,r),o=e.slice(r+1),a=gs.encode(n),s=await uu(t,["verify"]),i=Kf(atob(o));return await crypto.subtle.verify("HMAC",s,i,a)?n:!1},uu=async(e,t)=>crypto.subtle.importKey("raw",gs.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t);function Kf(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}var Jf=(e,t={})=>{let{secrets:r=[],...n}={path:"/",sameSite:"lax",...t};return oh(e,n.expires),{get name(){return e},get isSigned(){return r.length>0},get expires(){return typeof n.maxAge<"u"?new Date(Date.now()+n.maxAge*1e3):n.expires},async parse(o,a){if(!o)return null;let s=Js.parse(o,{...n,...a});if(e in s){let i=s[e];return typeof i=="string"&&i!==""?await eh(i,r):""}else return null},async serialize(o,a){return Js.serialize(e,o===""?"":await Xf(o,r),{...n,...a})}}},Zf=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function Xf(e,t){let r=th(e);return t.length>0&&(r=await Qf(r,t[0])),r}async function eh(e,t){if(t.length>0){for(let r of t){let n=await Yf(e,r);if(n!==!1)return gi(n)}return null}return gi(e)}function th(e){return btoa(nh(encodeURIComponent(JSON.stringify(e))))}function gi(e){try{return JSON.parse(decodeURIComponent(rh(atob(e))))}catch{return{}}}function rh(e){let t=e.toString(),r="",n=0,o,a;for(;n<t.length;)o=t.charAt(n++),/[\w*+\-./@]/.exec(o)?r+=o:(a=o.charCodeAt(0),a<256?r+="%"+yi(a,2):r+="%u"+yi(a,4).toUpperCase());return r}function yi(e,t){let r=e.toString(16);for(;r.length<t;)r="0"+r;return r}function nh(e){let t=e.toString(),r="",n=0,o,a;for(;n<t.length;){if(o=t.charAt(n++),o==="%"){if(t.charAt(n)==="u"){if(a=t.slice(n+1,n+5),/^[\da-f]{4}$/i.exec(a)){r+=String.fromCharCode(parseInt(a,16)),n+=5;continue}}else if(a=t.slice(n,n+2),/^[\da-f]{2}$/i.exec(a)){r+=String.fromCharCode(parseInt(a,16)),n+=2;continue}}r+=o}return r}function oh(e,t){Dl(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function ah(e){return Object.keys(e).reduce((t,r)=>{let n=e[r];return n&&(t[r]=n.module),t},{})}function sh(e){return e==="development"||e==="production"||e==="test"}function zo(e,t){if(e instanceof Error&&t!=="development"){let r=new Error("Unexpected Server Error");return r.stack=void 0,r}return e}function $o(e,t){return Object.entries(e).reduce((r,[n,o])=>Object.assign(r,{[n]:zo(o,t)}),{})}function cu(e,t){let r=zo(e,t);return{message:r.message,stack:r.stack}}function vi(e,t){if(!e)return null;let r=Object.entries(e),n={};for(let[o,a]of r)if(Pe(a))n[o]={...a,__type:"RouteErrorResponse"};else if(a instanceof Error){let s=zo(a,t);n[o]={message:s.message,stack:s.stack,__type:"Error",...s.name!=="Error"?{__subType:s.name}:{}}}else n[o]=a;return n}function Ga(e,t,r){let n=$r(e,t,r);return n?n.map(o=>({params:o.params,pathname:o.pathname,route:o.route})):null}async function xi(e,t){let r=await e({request:lh(ih(t.request)),params:t.params,context:t.context});if(Fa(r)&&r.init&&r.init.status&&Mo(r.init.status))throw new Response(null,r.init);return r}function ih(e){let t=new URL(e.url),r=t.searchParams.getAll("index");t.searchParams.delete("index");let n=[];for(let a of r)a&&n.push(a);for(let a of n)t.searchParams.append("index",a);let o={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return o.body&&(o.duplex="half"),new Request(t.href,o)}function lh(e){let t=new URL(e.url);t.searchParams.delete("_routes");let r={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return r.body&&(r.duplex="half"),new Request(t.href,r)}function yo(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"),new Error(t)}function du(e,t){if(typeof process<"u")try{if((xa==null?void 0:xa.IS_RR_BUILD_REQUEST)==="yes")return e.headers.get(t)}catch{}return null}function fu(e){let t={};return Object.values(e).forEach(r=>{if(r){let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}}),t}function hu(e,t="",r=fu(e)){return(r[t]||[]).map(n=>({...n,children:hu(e,n.id,r)}))}function pu(e,t,r="",n=fu(e)){return(n[r]||[]).map(o=>{let a={hasErrorBoundary:o.id==="root"||o.module.ErrorBoundary!=null,id:o.id,path:o.path,unstable_middleware:o.module.unstable_middleware,loader:o.module.loader?async s=>{let i=du(s.request,"X-React-Router-Prerender-Data");if(i!=null){let d=i&&decodeURI(i);yo(d,"Missing prerendered data for route");let m=new TextEncoder().encode(d),g=new ReadableStream({start(v){v.enqueue(m),v.close()}}),C=(await ff(g,global)).value;if(C&&Lt in C){let v=C[Lt],b={status:v.status};throw v.reload?Zc(v.redirect,b):v.replace?Xc(v.redirect,b):qe(v.redirect,b)}else{yo(C&&o.id in C,"Unable to decode prerendered data");let v=C[o.id];return yo("data"in v,"Unable to process prerendered data"),v.data}}return await xi(o.module.loader,s)}:void 0,action:o.module.action?s=>xi(o.module.action,s):void 0,handle:o.module.handle};return o.index?{index:!0,...a}:{caseSensitive:o.caseSensitive,children:pu(e,t,o.id,n),...a}})}var uh={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},ch=/[&><\u2028\u2029]/g;function dh(e){return e.replace(ch,t=>uh[t])}function wi(e){return dh(JSON.stringify(e))}function ys(e,t){let r=t.errors?t.matches.findIndex(a=>t.errors[a.route.id]):-1,n=r>=0?t.matches.slice(0,r+1):t.matches,o;if(r>=0){let{actionHeaders:a,actionData:s,loaderHeaders:i,loaderData:l}=t;t.matches.slice(r).some(d=>{let m=d.route.id;return a[m]&&(!s||!s.hasOwnProperty(m))?o=a[m]:i[m]&&!l.hasOwnProperty(m)&&(o=i[m]),o!=null})}return n.reduce((a,s,i)=>{let{id:l}=s.route,d=e.routes[l];yo(d,`Route with id "${l}" not found in build`);let m=d.module,g=t.loaderHeaders[l]||new Headers,y=t.actionHeaders[l]||new Headers,C=o!=null&&i===n.length-1,v=C&&o!==g&&o!==y;if(m.headers==null){let j=new Headers(a);return v&&Yt(o,j),Yt(y,j),Yt(g,j),j}let b=new Headers(m.headers?typeof m.headers=="function"?m.headers({loaderHeaders:g,parentHeaders:a,actionHeaders:y,errorHeaders:C?o:void 0}):m.headers:void 0);return v&&Yt(o,b),Yt(y,b),Yt(g,b),Yt(a,b),b},new Headers)}function Yt(e,t){let r=e.get("Set-Cookie");if(r){let n=bc.splitCookiesString(r),o=new Set(t.getSetCookie());n.forEach(a=>{o.has(a)||t.append("Set-Cookie",a)})}}var mu=new Set([...cf,304]);async function fh(e,t,r,n,o,a,s){try{let l=function(g){let y=ys(e,g);if(Mo(g.statusCode)&&y.has("Location"))return Pt(n,e,t,{result:un(g.statusCode,y,e.basename),headers:y,status:ln});g.errors&&(Object.values(g.errors).forEach(v=>{(!Pe(v)||v.error)&&s(v)}),g.errors=$o(g.errors,t));let C;return g.errors?C={error:Object.values(g.errors)[0]}:C={data:Object.values(g.actionData||{})[0]},Pt(n,e,t,{result:C,headers:y,status:g.statusCode})};var i=l;let d=new Request(o,{method:n.method,body:n.body,headers:n.headers,signal:n.signal,...n.body?{duplex:"half"}:void 0}),m=await r.query(d,{requestContext:a,skipLoaderErrorBubbling:!0,skipRevalidation:!0,unstable_respond:l});return _e(m)||(m=l(m)),No(m)?Pt(n,e,t,{result:un(m.status,m.headers,e.basename),headers:m.headers,status:ln}):m}catch(l){return s(l),Pt(n,e,t,{result:{error:l},headers:new Headers,status:500})}}async function hh(e,t,r,n,o,a,s){try{let l=function(C){let v=ys(e,C);if(Mo(C.statusCode)&&v.has("Location"))return Pt(n,e,t,{result:{[Lt]:un(C.statusCode,v,e.basename)},headers:v,status:ln});C.errors&&(Object.values(C.errors).forEach($=>{(!Pe($)||$.error)&&s($)}),C.errors=$o(C.errors,t));let b={},j=new Set(C.matches.filter($=>g?g.has($.route.id):$.route.loader!=null).map($=>$.route.id));if(C.errors)for(let[$,I]of Object.entries(C.errors))b[$]={error:I};for(let[$,I]of Object.entries(C.loaderData))!($ in b)&&j.has($)&&(b[$]={data:I});return Pt(n,e,t,{result:b,headers:v,status:C.statusCode})};var i=l;let d=new Request(o,{headers:n.headers,signal:n.signal}),m=new URL(n.url).searchParams.get("_routes"),g=m?new Set(m.split(",")):null,y=await r.query(d,{requestContext:a,filterMatchesToLoad:C=>!g||g.has(C.route.id),skipLoaderErrorBubbling:!0,unstable_respond:l});return _e(y)||(y=l(y)),No(y)?Pt(n,e,t,{result:{[Lt]:un(y.status,y.headers,e.basename)},headers:y.headers,status:ln}):y}catch(l){return s(l),Pt(n,e,t,{result:{root:{error:l}},headers:new Headers,status:500})}}function Pt(e,t,r,{result:n,headers:o,status:a}){let s=new Headers(o);return s.set("X-Remix-Response","yes"),mu.has(a)?new Response(null,{status:a,headers:s}):(s.set("Content-Type","text/x-script"),new Response(jo(n,e.signal,t.entry.module.streamTimeout,r),{status:a||200,headers:s}))}function un(e,t,r){let n=t.get("Location");return r&&(n=Le(n,r)||n),{redirect:n,status:e,revalidate:t.has("X-Remix-Revalidate")||t.has("Set-Cookie"),reload:t.has("X-Remix-Reload-Document"),replace:t.has("X-Remix-Replace")}}function jo(e,t,r,n){let o=new AbortController,a=setTimeout(()=>o.abort(new Error("Server Timeout")),typeof r=="number"?r:4950);return t.addEventListener("abort",()=>clearTimeout(a)),uf(e,{signal:o.signal,plugins:[s=>{if(s instanceof Error){let{name:i,message:l,stack:d}=n==="production"?zo(s,n):s;return["SanitizedError",i,l,d]}if(s instanceof er){let{data:i,status:l,statusText:d}=s;return["ErrorResponse",i,l,d]}if(s&&typeof s=="object"&&Lt in s)return["SingleFetchRedirect",s[Lt]]}],postPlugins:[s=>{if(s&&typeof s=="object")return["SingleFetchClassInstance",Object.fromEntries(Object.entries(s))]},()=>["SingleFetchFallback"]]})}function Ci(e,t){let r=hu(e.routes),n=pu(e.routes,e.future),o=sh(t)?t:"production",a=ld(n,{basename:e.basename}),s=e.entry.module.handleError||((i,{request:l})=>{l.signal.aborted||console.error(Pe(i)&&i.error?i.error:i)});return{routes:r,dataRoutes:n,serverMode:o,staticHandler:a,errorHandler:s}}var ph=(e,t)=>{let r,n,o,a,s;return async function(l,d){if(r=typeof e=="function"?await e():e,typeof e=="function"){let F=Ci(r,t);n=F.routes,o=F.serverMode,a=F.staticHandler,s=F.errorHandler}else if(!n||!o||!a||!s){let F=Ci(r,t);n=F.routes,o=F.serverMode,a=F.staticHandler,s=F.errorHandler}let m={},g,y=F=>{s(F,{context:g,params:m,request:l})};if(r.future.unstable_middleware)if(d==null)g=new Cr;else try{g=new Cr(d)}catch(F){let O=new Error(`Unable to create initial \`unstable_RouterContextProvider\` instance. Please confirm you are returning an instance of \`Map<unstable_routerContext, unknown>\` from your \`getLoadContext\` function.

Error: ${F instanceof Error?F.toString():F}`);return y(O),Ro(O,o)}else g=d||{};let C=new URL(l.url),v=r.basename||"/",b=C.pathname;Le(b,v)==="/_root.data"?b=v:b.endsWith(".data")&&(b=b.replace(/\.data$/,"")),Le(b,v)!=="/"&&b.endsWith("/")&&(b=b.slice(0,-1));let j=du(l,"X-React-Router-SPA-Mode")==="yes";if(!r.ssr){if(r.prerender.length===0)j=!0;else if(!r.prerender.includes(b)&&!r.prerender.includes(b+"/")){if(C.pathname.endsWith(".data"))return s(new er(404,"Not Found",`Refusing to SSR the path \`${b}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`),{context:g,params:m,request:l}),new Response("Not Found",{status:404,statusText:"Not Found"});j=!0}}let $=Cf(r.routeDiscovery.manifestPath,v);if(C.pathname===$)try{return await mh(r,n,C)}catch(F){return y(F),new Response("Unknown Server Error",{status:500})}let I=Ga(n,b,r.basename);I&&I.length>0&&Object.assign(m,I[0].params);let L;if(C.pathname.endsWith(".data")){let F=new URL(l.url);F.pathname=b;let O=Ga(n,F.pathname,r.basename);if(L=await gh(o,r,a,l,F,g,y),r.entry.module.handleDataRequest&&(L=await r.entry.module.handleDataRequest(L,{context:g,params:O?O[0].params:{},request:l}),No(L))){let D=un(L.status,L.headers,r.basename);l.method==="GET"&&(D={[Lt]:D});let H=new Headers(L.headers);return H.set("Content-Type","text/x-script"),new Response(jo(D,l.signal,r.entry.module.streamTimeout,o),{status:ln,headers:H})}}else if(!j&&I&&I[I.length-1].route.module.default==null&&I[I.length-1].route.module.ErrorBoundary==null)L=await vh(o,r,a,I.slice(-1)[0].route.id,l,g,y);else{let{pathname:F}=C,O;r.unstable_getCriticalCss&&(O=await r.unstable_getCriticalCss({pathname:F})),L=await yh(o,r,a,l,g,y,j,O)}return l.method==="HEAD"?new Response(null,{headers:L.headers,status:L.status,statusText:L.statusText}):L}};async function mh(e,t,r){if(e.assets.version!==r.searchParams.get("version"))return new Response(null,{status:204,headers:{"X-Remix-Reload-Document":"true"}});let n={};if(r.searchParams.has("p")){let o=new Set;r.searchParams.getAll("p").forEach(a=>{a.startsWith("/")||(a=`/${a}`);let s=a.split("/").slice(1);s.forEach((i,l)=>{let d=s.slice(0,l+1).join("/");o.add(`/${d}`)})});for(let a of o){let s=Ga(t,a,e.basename);if(s)for(let i of s){let l=i.route.id,d=e.assets.routes[l];d&&(n[l]=d)}}return Response.json(n,{headers:{"Cache-Control":"public, max-age=31536000, immutable"}})}return new Response("Invalid Request",{status:400})}async function gh(e,t,r,n,o,a,s){return n.method!=="GET"?await fh(t,e,r,n,o,a,s):await hh(t,e,r,n,o,a,s)}async function yh(e,t,r,n,o,a,s,i){try{let d=await r.query(n,{requestContext:o,unstable_respond:t.future.unstable_middleware?m=>l(m,s):void 0});return _e(d)?d:l(d,s)}catch(d){return a(d),new Response(null,{status:500})}async function l(d,m){if(_e(d))return d;let g=ys(t,d);if(mu.has(d.statusCode))return new Response(null,{status:d.statusCode,headers:g});d.errors&&(Object.values(d.errors).forEach(j=>{(!Pe(j)||j.error)&&a(j)}),d.errors=$o(d.errors,e));let y={loaderData:d.loaderData,actionData:d.actionData,errors:vi(d.errors,e)},C={basename:t.basename,future:t.future,routeDiscovery:t.routeDiscovery,ssr:t.ssr,isSpaMode:m},v={manifest:t.assets,routeModules:ah(t.routes),staticHandlerContext:d,criticalCss:i,serverHandoffString:wi({...C,criticalCss:i}),serverHandoffStream:jo(y,n.signal,t.entry.module.streamTimeout,e),renderMeta:{},future:t.future,ssr:t.ssr,routeDiscovery:t.routeDiscovery,isSpaMode:m,serializeError:j=>cu(j,e)},b=t.entry.module.default;try{return await b(n,d.statusCode,g,v,o)}catch(j){a(j);let $=j;if(_e(j))try{let L=await wh(j);$=new er(j.status,j.statusText,L)}catch{}d=Cl(r.dataRoutes,d,$),d.errors&&(d.errors=$o(d.errors,e));let I={loaderData:d.loaderData,actionData:d.actionData,errors:vi(d.errors,e)};v={...v,staticHandlerContext:d,serverHandoffString:wi(C),serverHandoffStream:jo(I,n.signal,t.entry.module.streamTimeout,e),renderMeta:{}};try{return await b(n,d.statusCode,g,v,o)}catch(L){return a(L),Ro(L,e)}}}}async function vh(e,t,r,n,o,a,s){try{let i=await r.queryRoute(o,{routeId:n,requestContext:a,unstable_respond:t.future.unstable_middleware?l=>l:void 0});return _e(i)?i:typeof i=="string"?new Response(i):Response.json(i)}catch(i){if(_e(i))return i.headers.set("X-Remix-Catch","yes"),i;if(Pe(i))return i&&s(i),xh(i,e);if(i instanceof Error&&i.message==="Expected a response from queryRoute"){let l=new Error("Expected a Response to be returned from resource route handler");return s(l),Ro(l,e)}return s(i),Ro(i,e)}}function xh(e,t){return Response.json(cu(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function Ro(e,t){let r="Unexpected Server Error";return t!=="production"&&(r+=`

${String(e)}`),new Response(r,{status:500,headers:{"Content-Type":"text/plain"}})}function wh(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}function Ea(e){return`__flash_${e}__`}var Ch=(e={},t="")=>{let r=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(r)},has(n){return r.has(n)||r.has(Ea(n))},get(n){if(r.has(n))return r.get(n);let o=Ea(n);if(r.has(o)){let a=r.get(o);return r.delete(o),a}},set(n,o){r.set(n,o)},flash(n,o){r.set(Ea(n),o)},unset(n){r.delete(n)}}};function Sh(e){Dl(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information.`)}function bh({cookie:e}={}){let t=Zf(e)?e:Jf((e==null?void 0:e.name)||"__session",e);return Sh(t),{async getSession(r,n){return Ch(r&&await t.parse(r,n)||{})},async commitSession(r,n){let o=await t.serialize(r.data,n);if(o.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+o.length);return o},async destroySession(r,n){return t.serialize("",{...n,maxAge:void 0,expires:new Date(0)})}}}var _a={exports:{}},en={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si;function Eh(){if(Si)return en;Si=1;var e=Lo(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(i,l,d){var m,g={},y=null,C=null;d!==void 0&&(y=""+d),l.key!==void 0&&(y=""+l.key),l.ref!==void 0&&(C=l.ref);for(m in l)n.call(l,m)&&!a.hasOwnProperty(m)&&(g[m]=l[m]);if(i&&i.defaultProps)for(m in l=i.defaultProps,l)g[m]===void 0&&(g[m]=l[m]);return{$$typeof:t,type:i,key:y,ref:C,props:g,_owner:o.current}}return en.Fragment=r,en.jsx=s,en.jsxs=s,en}var bi;function _h(){return bi||(bi=1,_a.exports=Eh()),_a.exports}var f=_h();function bt(e){if(!e){const t=`flattenConnection(): needs a 'connection' to flatten, but received '${e??""}' instead.`;return console.error(t+" Returning an empty array"),[]}return"nodes"in e?e.nodes:"edges"in e&&Array.isArray(e.edges)?e.edges.map(t=>{if(!(t!=null&&t.node))throw new Error("flattenConnection(): Connection edges must contain nodes");return t.node}):[]}const vo="2025-04",$h="mock.shop",$a=e=>e.includes($h);function jh({storeDomain:e,privateStorefrontToken:t,publicStorefrontToken:r,storefrontApiVersion:n=vo,contentType:o}){if(!e)throw new Error(ja+"`storeDomain` is required when creating a new Storefront client in production.");n!==vo&&Ah(`The Storefront API version that you're using is different than the version this build of Hydrogen React is targeting.
You may run into unexpected errors if these versions don't match. Received version: "${n}"; expected version "${vo}"`);const a=s=>{const i=(s==null?void 0:s.storeDomain)??e;return i.includes("://")?i:`https://${i}`};return{getShopifyDomain:a,getStorefrontApiUrl(s){const i=a(s),l=i+(i.endsWith("/")?"api":"/api");return $a(i)?l:`${l}/${(s==null?void 0:s.storefrontApiVersion)??n}/graphql.json`},getPrivateTokenHeaders(s){if(!t&&!(s!=null&&s.privateStorefrontToken)&&!$a(e))throw new Error(ja+"You did not pass in a `privateStorefrontToken` while using `createStorefrontClient()` or `getPrivateTokenHeaders()`");return{"content-type":((s==null?void 0:s.contentType)??o)==="graphql"?"application/graphql":"application/json","X-SDK-Variant":"hydrogen-react","X-SDK-Variant-Source":"react","X-SDK-Version":n,"Shopify-Storefront-Private-Token":(s==null?void 0:s.privateStorefrontToken)??t??"",...s!=null&&s.buyerIp?{"Shopify-Storefront-Buyer-IP":s.buyerIp}:{}}},getPublicTokenHeaders(s){if(!r&&!(s!=null&&s.publicStorefrontToken)&&!$a(e))throw new Error(ja+"You did not pass in a `publicStorefrontToken` while using `createStorefrontClient()` or `getPublicTokenHeaders()`");const i=(s==null?void 0:s.contentType)??o??"json";return Rh(i,n,(s==null?void 0:s.publicStorefrontToken)??r??"")}}}function Rh(e,t,r){return{"content-type":e==="graphql"?"application/graphql":"application/json","X-SDK-Variant":"hydrogen-react","X-SDK-Variant-Source":"react","X-SDK-Version":t,"X-Shopify-Storefront-Access-Token":r}}const Ei=new Set,ja="[h2:error:createStorefrontClient] ",Ah=(e,t="warn")=>{Ei.has(e)||(console[t](`[h2:${t}:createStorefrontClient] `+e),Ei.add(e))},Ph={storeDomain:"test",storefrontToken:"abc123",storefrontApiVersion:vo,countryIsoCode:"US",languageIsoCode:"EN",getStorefrontApiUrl(){return""},getPublicTokenHeaders(){return{}},getShopifyDomain(){return""}},Ih=S.createContext(Ph);function kh(){const e=S.useContext(Ih);if(!e)throw new Error("'useShop()' must be a descendent of <ShopifyProvider/>");return e}const Th="Shopify-Storefront-Id",Dh="Shopify-Storefront-Y",Oh="Shopify-Storefront-S",Tt="_shopify_y",Dt="_shopify_s";var Lh=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function gu(e){let t={},r,n,o=0,a=e.split(/;\s*/g),s,i;for(;o<a.length;o++)if(n=a[o],r=n.indexOf("="),~r){if(s=n.substring(0,r++).trim(),i=n.substring(r).trim(),i[0]==='"'&&(i=i.substring(1,i.length-1)),~i.indexOf("%"))try{i=decodeURIComponent(i)}catch{}Lh.has(n=s.toLowerCase())?n==="expires"?t.expires=new Date(i):n==="max-age"?t.maxage=+i:t[n]=i:t[s]=i}else(s=n.trim().toLowerCase())&&(s==="httponly"||s==="secure")&&(t[s]=!0);return t}function yu(e,t,r={}){let n=e+"="+encodeURIComponent(t);return r.expires&&(n+="; Expires="+new Date(r.expires).toUTCString()),r.maxage!=null&&r.maxage>=0&&(n+="; Max-Age="+(r.maxage|0)),r.domain&&(n+="; Domain="+r.domain),r.path&&(n+="; Path="+r.path),r.samesite&&(n+="; SameSite="+r.samesite),(r.secure||r.samesite==="None")&&(n+="; Secure"),r.httponly&&(n+="; HttpOnly"),n}const _i="xxxx-4xxx-xxxx-xxxxxxxxxxxx";function Ao(){let e="";try{const t=window.crypto,r=new Uint16Array(31);t.getRandomValues(r);let n=0;e=_i.replace(/[x]/g,o=>{const a=r[n]%16,s=o==="x"?a:a&3|8;return n++,s.toString(16)}).toUpperCase()}catch{e=_i.replace(/[x]/g,r=>{const n=Math.random()*16|0;return(r==="x"?n:n&3|8).toString(16)}).toUpperCase()}return`${Mh()}-${e}`}function Mh(){let e=0,t=0;e=new Date().getTime()>>>0;try{t=performance.now()>>>0}catch{t=0}return Math.abs(e+t).toString(16).toLowerCase().padStart(8,"0")}function vs(e){const t=gu(e);return{[Tt]:t[Tt]||"",[Dt]:t[Dt]||""}}const ot={PAGE_VIEW:"PAGE_VIEW",ADD_TO_CART:"ADD_TO_CART",PAGE_VIEW_2:"PAGE_VIEW_2",COLLECTION_VIEW:"COLLECTION_VIEW",PRODUCT_VIEW:"PRODUCT_VIEW",SEARCH_VIEW:"SEARCH_VIEW"},Er={collection:"collection",product:"product",search:"search"},Nh={headless:"headless"},$i={hydrogen:"6167201",headless:"12875497473"};function ht(e,t){return{schema_id:e,payload:t,metadata:{event_created_at_ms:Date.now()}}}function ze(e){const t={id:"",resource:null,resourceId:null,search:"",searchParams:new URLSearchParams,hash:""};if(typeof e!="string")return t;try{const{search:r,searchParams:n,pathname:o,hash:a}=new URL(e),s=o.split("/"),i=s[s.length-1],l=s[s.length-2];return!i||!l?t:{id:`${i}${r}${a}`||"",resource:l??null,resourceId:i||null,search:r,searchParams:n,hash:a}}catch{return t}}function at(e,t){return typeof e!="object"?{}:(Object.entries(e).forEach(([r,n])=>{n&&(t[r]=n)}),t)}function Fh(e){return typeof document>"u"?(console.error(`${e} should only be used within the useEffect callback or event handlers`),!0):!1}const Uh="trekkie_storefront_page_view/1.4",Hh="myshopify.dev";function ji(e){const t=e,{id:r,resource:n}=ze(t.resourceId),o=n?n.toLowerCase():void 0;return[ht(Uh,at({pageType:t.pageType,customerId:parseInt(ze(t.customerId).id||"0"),resourceType:o,resourceId:parseInt(r)},Bh(t)))]}function Bh(e){return{appClientId:e.shopifySalesChannel?$i[e.shopifySalesChannel]:$i.headless,isMerchantRequest:Vh(e.url),hydrogenSubchannelId:e.storefrontId||e.hydrogenSubchannelId||"0",isPersistentCookie:e.hasUserConsent,uniqToken:e.uniqueToken,visitToken:e.visitToken,microSessionId:Ao(),microSessionCount:1,url:e.url,path:e.path,search:e.search,referrer:e.referrer,title:e.title,shopId:parseInt(ze(e.shopId).id),currency:e.currency,contentLanguage:e.acceptedLanguage||"en"}}function Vh(e){if(typeof e!="string")return!1;const t=new URL(e).hostname;return t.indexOf(Hh)!==-1||t==="localhost"}const qh="2025.5.0",wt="custom_storefront_customer_tracking/1.2",vu="page_rendered",xu="collection_page_rendered",wu="product_page_rendered",zh="product_added_to_cart",Cu="search_submitted";function wn(e){return{canonical_url:e.canonicalUrl||e.url,customer_id:parseInt(ze(e.customerId).id||"0")}}function Wh(e){const t=e,r=wn(t),n=t.pageType,o=[];switch(o.push(ht(wt,at({event_name:vu,...r},Ct(t)))),n){case Er.collection:o.push(ht(wt,at({event_name:xu,...r,collection_name:t.collectionHandle,collection_id:parseInt(ze(t.collectionId).id)},Ct(t))));break;case Er.product:o.push(ht(wt,at({event_name:wu,...r,products:xs(t.products),total_value:t.totalValue},Ct(t))));break;case Er.search:o.push(ht(wt,at({event_name:Cu,...r,search_string:t.searchString},Ct(t))));break}return o}function Gh(e){const t=e,r=wn(t);return[ht(wt,at({event_name:vu,...r},Ct(t)))]}function Qh(e){const t=e,r=wn(t);return[ht(wt,at({event_name:xu,...r,collection_name:t.collectionHandle,collection_id:parseInt(ze(t.collectionId).id)},Ct(t)))]}function Yh(e){const t=e,r=wn(t);return[ht(wt,at({event_name:wu,...r,products:xs(t.products),total_value:t.totalValue},Ct(t)))]}function Kh(e){const t=e,r=wn(t);return[ht(wt,at({event_name:Cu,...r,search_string:t.searchString},Ct(t)))]}function Jh(e){const t=e,r=ze(t.cartId);return[ht(wt,at({event_name:zh,customerId:t.customerId,cart_token:r!=null&&r.id?`${r.id}`:null,total_value:t.totalValue,products:xs(t.products),customer_id:parseInt(ze(t.customerId).id||"0")},Ct(t)))]}function Ct(e){return{source:e.shopifySalesChannel||Nh.headless,asset_version_id:e.assetVersionId||qh,hydrogenSubchannelId:e.storefrontId||e.hydrogenSubchannelId||"0",is_persistent_cookie:e.hasUserConsent,deprecated_visit_token:e.visitToken,unique_token:e.uniqueToken,event_time:Date.now(),event_id:Ao(),event_source_url:e.url,referrer:e.referrer,user_agent:e.userAgent,navigation_type:e.navigationType,navigation_api:e.navigationApi,shop_id:parseInt(ze(e.shopId).id),currency:e.currency,ccpa_enforced:e.ccpaEnforced||!1,gdpr_enforced:e.gdprEnforced||!1,gdpr_enforced_as_string:e.gdprEnforced?"true":"false",analytics_allowed:e.analyticsAllowed||!1,marketing_allowed:e.marketingAllowed||!1,sale_of_data_allowed:e.saleOfDataAllowed||!1}}function xs(e){return e?e.map(t=>{const r=at({variant_gid:t.variantGid,category:t.category,sku:t.sku,product_id:parseInt(ze(t.productGid).id),variant_id:parseInt(ze(t.variantGid).id)},{product_gid:t.productGid,name:t.name,variant:t.variantName||"",brand:t.brand,price:parseFloat(t.price),quantity:Number(t.quantity||0)});return JSON.stringify(r)}):[]}function Cn(e,t){const{eventName:r,payload:n}=e;if(!n.hasUserConsent)return Promise.resolve();let o=[];const a=n;return r===ot.PAGE_VIEW?o=o.concat(ji(a),Wh(a)):r===ot.ADD_TO_CART?o=o.concat(Jh(n)):r===ot.PAGE_VIEW_2?o=o.concat(ji(a),Gh(a)):r===ot.COLLECTION_VIEW?o=o.concat(Qh(a)):r===ot.PRODUCT_VIEW?o=o.concat(Yh(a)):r===ot.SEARCH_VIEW&&(o=o.concat(Kh(a))),o.length?Xh(o,t):Promise.resolve()}function Zh(){return typeof window>"u"||!window.navigator?!1:/Chrome-Lighthouse/.test(window.navigator.userAgent)}const Ri="sendShopifyAnalytics request is unsuccessful";function Xh(e,t){if(Zh())return Promise.resolve();const r={events:e,metadata:{event_sent_at_ms:Date.now()}};try{return fetch(t?`https://${t}/.well-known/shopify/monorail/unstable/produce_batch`:"https://monorail-edge.shopifysvc.com/unstable/produce_batch",{method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify(r)}).then(n=>{if(!n.ok)throw new Error("Response failed");return n.text()}).then(n=>{n&&JSON.parse(n).result.forEach(a=>{a.status!==200&&console.error(Ri,`

`,a.message)})}).catch(n=>{console.error(Ri,n)})}catch{return Promise.resolve()}}function ep(){if(Fh("getClientBrowserParameters"))return{uniqueToken:"",visitToken:"",url:"",path:"",search:"",referrer:"",title:"",userAgent:"",navigationType:"",navigationApi:""};const[e,t]=np(),r=vs(document.cookie);return{uniqueToken:r[Tt],visitToken:r[Dt],url:location.href,path:location.pathname,search:location.search,referrer:document.referrer,title:document.title,userAgent:navigator.userAgent,navigationType:e,navigationApi:t}}function tp(){try{const e=(performance==null?void 0:performance.getEntriesByType)&&(performance==null?void 0:performance.getEntriesByType("navigation"));if(e&&e[0]){const t=window.performance.getEntriesByType("navigation")[0].type;return t&&t.toString()}}catch{}}function rp(){var e,t;try{if(PerformanceNavigation&&((e=performance==null?void 0:performance.navigation)==null?void 0:e.type)!==null&&((t=performance==null?void 0:performance.navigation)==null?void 0:t.type)!==void 0){const r=performance.navigation.type;switch(r){case PerformanceNavigation.TYPE_NAVIGATE:return"navigate";case PerformanceNavigation.TYPE_RELOAD:return"reload";case PerformanceNavigation.TYPE_BACK_FORWARD:return"back_forward";default:return`unknown: ${r}`}}}catch{}}function np(){try{let e="PerformanceNavigationTiming",t=tp();return t||(t=rp(),e="performance.navigation"),t?[t,e]:["unknown","unknown"]}catch{}return["error","error"]}function op(e){const{countryIsoCode:t,languageIsoCode:r}=kh(),n=r.includes("_")?r.replace("_","-"):`${r}-${t}`;if(!n)throw new Error("useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work");const o=parseFloat(e.amount),{defaultFormatter:a,nameFormatter:s,narrowSymbolFormatter:i,withoutTrailingZerosFormatter:l,withoutCurrencyFormatter:d,withoutTrailingZerosOrCurrencyFormatter:m}=S.useMemo(()=>{const C={style:"currency",currency:e.currencyCode};return{defaultFormatter:vr(n,C),nameFormatter:vr(n,{...C,currencyDisplay:"name"}),narrowSymbolFormatter:vr(n,{...C,currencyDisplay:"narrowSymbol"}),withoutTrailingZerosFormatter:vr(n,{...C,minimumFractionDigits:0,maximumFractionDigits:0}),withoutCurrencyFormatter:vr(n),withoutTrailingZerosOrCurrencyFormatter:vr(n,{minimumFractionDigits:0,maximumFractionDigits:0})}},[e.currencyCode,n]),g=C=>C.type==="currency",y=S.useMemo(()=>({original:()=>e,currencyCode:()=>e.currencyCode,localizedString:()=>a().format(o),parts:()=>a().formatToParts(o),withoutTrailingZeros:()=>o%1===0?l().format(o):a().format(o),withoutTrailingZerosAndCurrency:()=>o%1===0?m().format(o):d().format(o),currencyName:()=>{var C;return((C=s().formatToParts(o).find(g))==null?void 0:C.value)??e.currencyCode},currencySymbol:()=>{var C;return((C=a().formatToParts(o).find(g))==null?void 0:C.value)??e.currencyCode},currencyNarrowSymbol:()=>{var C;return((C=i().formatToParts(o).find(g))==null?void 0:C.value)??""},amount:()=>a().formatToParts(o).filter(C=>["decimal","fraction","group","integer","literal"].includes(C.type)).map(C=>C.value).join("")}),[e,o,s,a,i,d,l,m]);return S.useMemo(()=>new Proxy(y,{get:(C,v)=>{var b;return(b=Reflect.get(C,v))==null?void 0:b.call(null)}}),[y])}const Ai=new Map;function vr(e,t){const r=JSON.stringify([e,t]);return function(){let n=Ai.get(r);return n||(n=new Intl.NumberFormat(e,t),Ai.set(r,n)),n}}function Oe({data:e,as:t,withoutCurrency:r,withoutTrailingZeros:n,measurement:o,measurementSeparator:a="/",...s}){if(!ap(e))throw new Error("<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'");const i=op(e),l=t??"div";let d=i.localizedString;return(r||n)&&(r&&!n?d=i.amount:!r&&n?d=i.withoutTrailingZeros:d=i.withoutTrailingZerosAndCurrency),f.jsxs(l,{...s,children:[d,o&&o.referenceUnit&&f.jsxs(f.Fragment,{children:[a,o.referenceUnit]})]})}function ap(e){return typeof e.amount=="string"&&!!e.amount&&typeof e.currencyCode=="string"&&!!e.currencyCode}const Ra=",",xr={OPTION:":",END_OF_PREFIX:",",SEQUENCE_GAP:" ",RANGE:"-"},Pi=(()=>{const e=new Map;return function(t,r){var n;if(t.length===0)return!1;if(!e.has(r)){const o=new Set;for(const a of sp(r)){o.add(a.join(Ra));for(let s=0;s<a.length;s++)o.add(a.slice(0,s+1).join(Ra))}e.set(r,o)}return!!((n=e.get(r))!=null&&n.has(t.join(Ra)))}})();function sp(e){if(!e)return[];if(e.startsWith("v1_"))return lp(ip(e));throw new Error("Unsupported option value encoding")}const ip=e=>e.replace(/^v1_/,"");function lp(e){const t=/[ :,-]/g;let r=0,n;const o=[],a=[];let s=0,i=null;for(;n=t.exec(e);){const d=n[0],m=Number.parseInt(e.slice(r,n.index))||0;if(i!==null){for(;i<m;i++)a[s]=i,o.push([...a]);i=null}a[s]=m,d===xr.RANGE?i=m:d===xr.OPTION?s++:((d===xr.SEQUENCE_GAP||d===xr.END_OF_PREFIX&&e[n.index-1]!==xr.END_OF_PREFIX)&&o.push([...a]),d===xr.END_OF_PREFIX&&(a.pop(),s--)),r=t.lastIndex}const l=e.match(/\d+$/g);if(l){const d=parseInt(l[0]);if(i!=null)for(;i<=d;i++)a[s]=i,o.push([...a]);else o.push([d])}return o}function up(e){return Object.assign({},...e.map(t=>({[t.name]:Object.assign({},...t!=null&&t.optionValues?t.optionValues.map((r,n)=>({[r.name]:n})):[])})))}function Po(e){return Object.assign({},...e.map(t=>({[t.name]:t.value})))}function Aa(e){return JSON.stringify(Po(e))}function Su(e){return Array.isArray(e)?JSON.stringify(Object.assign({},...e.map(t=>({[t.name]:t.value})))):JSON.stringify(e)}function cp(e,t){return Object.keys(e).map(n=>t[n]?t[n][e[n]]:null).filter(n=>n!==null)}function dp(e){return Object.assign({},...e.map(t=>({[Su(t.selectedOptions||[])]:t})))}const Ii=["options","selectedOrFirstAvailableVariant","adjacentVariants"],fp=["handle","encodedVariantExistence","encodedVariantAvailability"];function It(e){return console.error(`[h2:error:getProductOptions] product.${e} is missing. Make sure you query for this field from the Storefront API.`),!1}function bu(e,t=!1){var r;let n=!0;const o=Object.keys(e);if((t?[...Ii,...fp]:Ii).forEach(a=>{o.includes(a)||(n=It(a))}),e.options){const a=e==null?void 0:e.options[0];if(t&&!(a!=null&&a.name)&&(n=It("options.name")),(r=e==null?void 0:e.options[0])!=null&&r.optionValues){let s=e.options[0].optionValues[0];t&&!(s!=null&&s.name)&&(n=It("options.optionValues.name")),s=e.options[0].optionValues.filter(i=>!!(i!=null&&i.firstSelectableVariant))[0],s!=null&&s.firstSelectableVariant&&(n=Pa(s.firstSelectableVariant,"options.optionValues.firstSelectableVariant",n,t))}else n=It("options.optionValues")}return e.selectedOrFirstAvailableVariant&&(n=Pa(e.selectedOrFirstAvailableVariant,"selectedOrFirstAvailableVariant",n,t)),e.adjacentVariants&&e.adjacentVariants[0]&&(n=Pa(e.adjacentVariants[0],"adjacentVariants",n,t)),n?e:{}}function Pa(e,t,r,n){var o;let a=r;if(n&&!((o=e.product)!=null&&o.handle)&&(a=It(`${t}.product.handle`)),e.selectedOptions){const s=e.selectedOptions[0];s!=null&&s.name||(a=It(`${t}.selectedOptions.name`)),s!=null&&s.value||(a=It(`${t}.selectedOptions.value`))}else a=It(`${t}.selectedOptions`);return a}function hp(e){const t=bu(e);if(!t.options)return[];const r={};t.options.map(o=>{var a;(a=o.optionValues)==null||a.map(s=>{if(s.firstSelectableVariant){const i=Aa(s.firstSelectableVariant.selectedOptions);r[i]=s.firstSelectableVariant}})}),t.adjacentVariants.map(o=>{const a=Aa(o.selectedOptions);r[a]=o});const n=t.selectedOrFirstAvailableVariant;if(n){const o=Aa(n.selectedOptions);r[o]=n}return Object.values(r)}function pp(e){const t=bu(e,!0);if(!t.options)return[];const{options:r,selectedOrFirstAvailableVariant:n,adjacentVariants:o,encodedVariantExistence:a,encodedVariantAvailability:s,handle:i}=t,l=n==null?void 0:n.selectedOptions.map(v=>v.name),d=r.filter(v=>l&&l.indexOf(v.name)>=0),m=up(r),g=dp(n?[n,...o]:o),y=Po(n?n.selectedOptions:[]);return d.map((v,b)=>({...v,optionValues:v.optionValues.map(j=>{var $;const I={...y};I[v.name]=j.name;const L=Su(I||[]),O=cp(I||[],m).slice(0,b+1),D=Pi(O,a||""),H=Pi(O,s||""),q=g[L]||j.firstSelectableVariant;let W={};q&&(W=Po(q.selectedOptions||[]));const G=new URLSearchParams(W),Z=(($=q==null?void 0:q.product)==null?void 0:$.handle)||i;return{...j,variant:q,handle:Z,variantUriQuery:G.toString(),selected:y[v.name]===j.name,exists:D,available:H,isDifferentProduct:Z!==i}})}))}const st=S.forwardRef(({alt:e,aspectRatio:t,crop:r="center",data:n,decoding:o="async",height:a="auto",loader:s=Wo,loading:i="lazy",sizes:l,src:d,srcSetOptions:m={intervals:15,startingWidth:200,incrementSize:200,placeholderWidth:100},width:g="100%",...y},C)=>{const v=S.useMemo(()=>{const D=n!=null&&n.width&&(n!=null&&n.height)?n==null?void 0:n.width:void 0,H=n!=null&&n.width&&(n!=null&&n.height)?n==null?void 0:n.height:void 0;return{width:D,height:H,unitsMatch:!!Eu(D,H)}},[n]),b=S.useMemo(()=>{const H=cn((g||"100%").toString()),q=`${H.number}${H.unit}`,W=a==null,G=W?null:cn(a.toString()),Z=G?`${G.number}${G.unit}`:"",ce=W?"auto":Z,z=d||(n==null?void 0:n.url),J=n!=null&&n.altText&&!e?n==null?void 0:n.altText:e||"",ue=t||(v.unitsMatch?[dn(v.width),dn(v.height)].join("/"):void 0);return{width:q,height:ce,src:z,alt:J,aspectRatio:ue}},[g,a,d,n,e,t,v,y==null?void 0:y.key]),{intervals:j,startingWidth:$,incrementSize:I,placeholderWidth:L}=m,F=S.useMemo(()=>yp(g,j,$,I),[g,j,$,I]);return _u(b.width)?f.jsx(mp,{aspectRatio:t,crop:r,decoding:o,height:a,imageWidths:F,loader:s,loading:i,normalizedProps:b,passthroughProps:y,ref:C,width:g,data:n}):f.jsx(gp,{aspectRatio:t,crop:r,decoding:o,imageWidths:F,loader:s,loading:i,normalizedProps:b,passthroughProps:y,placeholderWidth:L,ref:C,sizes:l,data:n})}),mp=S.forwardRef(({aspectRatio:e,crop:t,decoding:r,height:n,imageWidths:o,loader:a=Wo,loading:s,normalizedProps:i,passthroughProps:l,width:d,data:m},g)=>{const y=S.useMemo(()=>{const C=dn(d),v=dn(n),b=e||(Eu(i.width,i.height)?[C,v].join("/"):i.aspectRatio?i.aspectRatio:void 0),j=o===void 0?void 0:ju(o,b,t,{width:(m==null?void 0:m.width)??void 0,height:(m==null?void 0:m.height)??void 0}),$=v||(b&&C?C*(ws(b)??1):void 0),I=$u(i.src,j,a),L=a({src:i.src,width:C,height:$,crop:i.height==="auto"?void 0:t});return{width:C,aspectRatio:b,height:$,srcSet:I,src:L}},[e,t,m,n,o,a,i,d]);return f.jsx("img",{ref:g,alt:i.alt,decoding:r,height:y.height,loading:s,src:y.src,srcSet:y.srcSet,width:y.width,style:{aspectRatio:y.aspectRatio,...l.style},...l})}),gp=S.forwardRef(({crop:e,decoding:t,imageWidths:r,loader:n=Wo,loading:o,normalizedProps:a,passthroughProps:s,placeholderWidth:i,sizes:l,data:d},m)=>{const g=S.useMemo(()=>{const y=r===void 0?void 0:ju(r,a.aspectRatio,e,{width:(d==null?void 0:d.width)??void 0,height:(d==null?void 0:d.height)??void 0}),C=a.aspectRatio&&i?i*(ws(a.aspectRatio)??1):void 0,v=$u(a.src,y,n),b=n({src:a.src,width:i,height:C,crop:e});return{placeholderHeight:C,srcSet:v,src:b}},[e,d,r,n,a,i]);return f.jsx("img",{ref:m,alt:a.alt,decoding:t,height:g.placeholderHeight,loading:o,sizes:l,src:g.src,srcSet:g.srcSet,width:i,...s,style:{width:a.width,aspectRatio:a.aspectRatio,...s.style}})}),ki="https://placeholder.shopify.com";function Wo({src:e,width:t,height:r,crop:n}){if(!e)return"";const o=new URL(e,ki);return t&&o.searchParams.append("width",Math.round(t).toString()),r&&o.searchParams.append("height",Math.round(r).toString()),n&&o.searchParams.append("crop",n),o.href.replace(ki,"")}function Eu(e="100%",t="auto"){return cn(e.toString()).unit===cn(t.toString()).unit}function cn(e){const t=e.replace(/[0-9.]/g,""),r=parseFloat(e.replace(t,""));return{unit:t===""?r===void 0?"auto":"px":t,number:r}}function dn(e){if(e===void 0)return;const{unit:t,number:r}=cn(e.toString());switch(t){case"em":return r*16;case"rem":return r*16;case"px":return r;case"":return r;default:return}}function _u(e){return typeof e=="number"||/\d(px|em|rem)$/.test(e)}function $u(e,t,r=Wo){return e?(t==null?void 0:t.length)===0||!t?e:t.map((n,o)=>`${r({src:e,width:n.width,height:n.height,crop:n.crop})} ${t.length===3?`${o+1}x`:`${n.width??0}w`}`).join(", "):""}function yp(e="100%",t,r,n){const o=Array.from({length:t},(s,i)=>i*n+r),a=Array.from({length:3},(s,i)=>(i+1)*(dn(e)??0));return _u(e)?a:o}function ws(e){if(!e)return;const[t,r]=e.split("/");return 1/(Number(t)/Number(r))}function ju(e,t,r="center",n){if(e)return e.map(o=>({width:o,height:t?o*(ws(t)??1):void 0,crop:r})).filter(({width:o,height:a})=>!(n!=null&&n.width&&o>n.width||n!=null&&n.height&&a&&a>n.height))}const Ti={};function vp(e,t){const r=Ti[e];if(r)return r;const n=new Promise((o,a)=>{const s=document.createElement("script");t!=null&&t.module?s.type="module":s.type="text/javascript",s.src=e,s.onload=()=>{o(!0)},s.onerror=()=>{a(!1)},(t==null?void 0:t.in)==="head"?document.head.appendChild(s):document.body.appendChild(s);const i=t==null?void 0:t.attributes;i&&Object.keys(i).forEach(l=>{s.setAttribute(l,i[l])})});return Ti[e]=n,n}function Cs(e,t){const[r,n]=S.useState("loading");return S.useEffect(()=>{vp(e,t).then(()=>n("done")).catch(()=>n("error"))},[e]),r}function xp(e){return S.useEffect(()=>{const t=new URLSearchParams(Po(e||[])),r=new URLSearchParams(window.location.search),n=new URLSearchParams({...Object.fromEntries(r),...Object.fromEntries(t)});n.size>0&&window.history.replaceState({},"",`${window.location.pathname}?${n.toString()}`)},[JSON.stringify(e)]),null}const wp=60*60*24*360*1,Cp=60*30;function Sp(e){const{hasUserConsent:t=!1,domain:r="",checkoutDomain:n=""}=e||{};S.useEffect(()=>{const o=vs(document.cookie);let a=r||window.document.location.host;if(n){const i=n.split(".").reverse(),l=a.split(".").reverse(),d=[];i.forEach((m,g)=>{m===l[g]&&d.push(m)}),a=d.reverse().join(".")}/^localhost/.test(a)&&(a="");const s=a?/^\./.test(a)?a:`.${a}`:"";t?(uo(Tt,o[Tt]||Ao(),wp,s),uo(Dt,o[Dt]||Ao(),Cp,s)):(uo(Tt,"",0,s),uo(Dt,"",0,s))},[e,t,r,n])}function uo(e,t,r,n){document.cookie=yu(e,t,{maxage:r,domain:n,samesite:"Lax",path:"/"})}function bp({directives:e}){const t=[],r=e instanceof Map?e.entries():Object.entries(e),n=new Set;for(const[o,a]of r){const s=o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(n.has(s))throw new Error(`${o} is specified more than once`);if(n.add(s),a===!0){t.push(s);continue}if(a===!1)continue;const i=typeof a=="string"?a:a.join(" ");t.push(i?`${s} ${i}`:s)}return t.join("; ")}function Go(e){let{type:t,data:r={},customData:n}=e,o=Me(),{publish:a,cart:s,prevCart:i,shop:l,customData:d}=bn(),m=o.pathname+o.search,g={...r,customData:{...d,...n},cart:s,prevCart:i,shop:l};return S.useEffect(()=>{l!=null&&l.shopId&&(g={...g,url:window.location.href},a(t,g))},[a,m,l==null?void 0:l.shopId]),null}function Ep(e){return f.jsx(Go,{...e,type:"page_viewed"})}function _p(e){return f.jsx(Go,{...e,type:"product_viewed"})}function $p(e){return f.jsx(Go,{...e,type:"collection_viewed"})}function jp(e){return f.jsx(Go,{...e,type:"search_viewed"})}var ft={PAGE_VIEWED:"page_viewed",PRODUCT_VIEWED:"product_viewed",COLLECTION_VIEWED:"collection_viewed",CART_VIEWED:"cart_viewed",SEARCH_VIEWED:"search_viewed",PRODUCT_ADD_TO_CART:"product_added_to_cart"},Rp="https://cdn.shopify.com/shopifycloud/consent-tracking-api/v0.1/consent-tracking-api.js",Ap="https://cdn.shopify.com/shopifycloud/privacy-banner/storefront-banner.js";function Ia(e){console.error(`[h2:error:useCustomerPrivacy] Unable to setup Customer Privacy API: Missing consent.${e} configuration.`)}function Pp(e){let{withPrivacyBanner:t=!1,onVisitorConsentCollected:r,onReady:n,...o}=e;Cs(t?Ap:Rp,{attributes:{id:"customer-privacy-api"}});let{observing:a,setLoaded:s}=Ip({withPrivacyBanner:t,onLoaded:n}),i=S.useMemo(()=>{let{checkoutDomain:d,storefrontAccessToken:m}=o;return d||Ia("checkoutDomain"),m||Ia("storefrontAccessToken"),(m.startsWith("shpat_")||m.length!==32)&&console.error("[h2:error:useCustomerPrivacy] It looks like you passed a private access token, make sure to use the public token"),{checkoutRootDomain:d,storefrontAccessToken:m,storefrontRootDomain:Li(d),country:o.country,locale:o.locale}},[o,Li,Ia]);S.useEffect(()=>{let d=m=>{r&&r(m.detail)};return document.addEventListener("visitorConsentCollected",d),()=>{document.removeEventListener("visitorConsentCollected",d)}},[r]),S.useEffect(()=>{if(!t||a.current.privacyBanner)return;a.current.privacyBanner=!0;let d=window.privacyBanner||void 0;Object.defineProperty(window,"privacyBanner",{configurable:!0,get(){return d},set(m){if(typeof m=="object"&&m!==null&&"showPreferences"in m&&"loadBanner"in m){let g=m;g.loadBanner(i),d=Ni({privacyBanner:g,config:i}),s.privacyBanner(),Oi()}}})},[t,i,Ni,s.privacyBanner]),S.useEffect(()=>{if(a.current.customerPrivacy)return;a.current.customerPrivacy=!0;let d=null,m=window.Shopify||void 0;Object.defineProperty(window,"Shopify",{configurable:!0,get(){return m},set(g){typeof g=="object"&&g!==null&&Object.keys(g).length===0&&(m=g,Object.defineProperty(window.Shopify,"customerPrivacy",{configurable:!0,get(){return d},set(y){if(typeof y=="object"&&y!==null&&"setTrackingConsent"in y){let C=y;d={...C,setTrackingConsent:Mi({customerPrivacy:C,config:i})},m={...m,customerPrivacy:d},s.customerPrivacy(),Oi()}}}))}})},[i,Mi,s.customerPrivacy]);let l={customerPrivacy:Io()};return t&&(l.privacyBanner=Qa()),l}var Di=!1;function Oi(){if(Di)return;Di=!0;let e=new CustomEvent("shopifyCustomerPrivacyApiLoaded");document.dispatchEvent(e)}function Ip({withPrivacyBanner:e,onLoaded:t}){let r=S.useRef({customerPrivacy:!1,privacyBanner:!1}),[n,o]=S.useState(e?[!1,!1]:[!1]),a=n.every(Boolean),s={customerPrivacy:()=>{o(e?i=>[!0,i[1]]:()=>[!0])},privacyBanner:()=>{e&&o(i=>[i[0],!0])}};return S.useEffect(()=>{a&&t&&t()},[a,t]),{observing:r,setLoaded:s}}function Li(e){if(typeof window>"u")return;let t=window.document.location.host,r=e.split(".").reverse(),n=t.split(".").reverse(),o=[];return r.forEach((a,s)=>{a===n[s]&&o.push(a)}),o.reverse().join(".")}function Mi({customerPrivacy:e,config:t}){let r=e.setTrackingConsent,{locale:n,country:o,...a}=t;function s(i,l){r({...a,headlessStorefront:!0,...i},l)}return s}function Ni({privacyBanner:e,config:t}){let r=e.loadBanner,n=e.showPreferences;function o(s){if(typeof s=="object"){r({...t,...s});return}r(t)}function a(s){if(typeof s=="object"){n({...t,...s});return}n(t)}return{loadBanner:o,showPreferences:a}}function Io(){var e;try{return window.Shopify&&window.Shopify.customerPrivacy?(e=window.Shopify)==null?void 0:e.customerPrivacy:null}catch{return null}}function Qa(){try{return window&&(window!=null&&window.privacyBanner)?window.privacyBanner:null}catch{return null}}var kp="2025.5.0";function Tp(){let e=Io();if(!e)throw new Error("Shopify Customer Privacy API not available. Must be used within a useEffect. Make sure to load the Shopify Customer Privacy API with useCustomerPrivacy() or <AnalyticsProvider>.");return e}function Dp({consent:e,onReady:t,domain:r}){let{subscribe:n,register:o,canTrack:a}=bn(),[s,i]=S.useState(!1),[l,d]=S.useState(!1),m=S.useRef(!1),{checkoutDomain:g,storefrontAccessToken:y,language:C}=e,{ready:v}=o("Internal_Shopify_Analytics");return Pp({...e,locale:C,checkoutDomain:g||"mock.shop",storefrontAccessToken:y||"abcdefghijklmnopqrstuvwxyz123456",onVisitorConsentCollected:()=>d(!0),onReady:()=>d(!0)}),Sp({hasUserConsent:l?a():!0,domain:r,checkoutDomain:g}),S.useEffect(()=>{m.current||(m.current=!0,n(ft.PAGE_VIEWED,Lp),n(ft.PRODUCT_VIEWED,Mp),n(ft.COLLECTION_VIEWED,Np),n(ft.SEARCH_VIEWED,Fp),n(ft.PRODUCT_ADD_TO_CART,Up),i(!0))},[n]),S.useEffect(()=>{s&&l&&(v(),t())},[s,l,t]),null}function co(e){console.error(`[h2:error:ShopifyAnalytics] Unable to send Shopify analytics: Missing shop.${e} configuration.`)}function Sn(e){var n,o,a,s;let t=Tp(),r=t.analyticsProcessingAllowed();if(!((n=e==null?void 0:e.shop)!=null&&n.shopId)){co("shopId");return}if(!((o=e==null?void 0:e.shop)!=null&&o.acceptedLanguage)){co("acceptedLanguage");return}if(!((a=e==null?void 0:e.shop)!=null&&a.currency)){co("currency");return}if(!((s=e==null?void 0:e.shop)!=null&&s.hydrogenSubchannelId)){co("hydrogenSubchannelId");return}return{shopifySalesChannel:"hydrogen",assetVersionId:kp,...e.shop,hasUserConsent:r,...ep(),ccpaEnforced:!t.saleOfDataAllowed(),gdprEnforced:!(t.marketingAllowed()&&t.analyticsProcessingAllowed()),analyticsAllowed:t.analyticsProcessingAllowed(),marketingAllowed:t.marketingAllowed(),saleOfDataAllowed:t.saleOfDataAllowed()}}function Op(e,t){if(t===null)return;let r=Sn(e);return r?{...r,cartId:t.id}:void 0}var Mt={};function Lp(e){let t=Sn(e);t&&(Cn({eventName:ot.PAGE_VIEW_2,payload:{...t,...Mt}}),Mt={})}function Mp(e){let t=Sn(e);if(t&&Ru({type:"product",products:e.products})){let r=Ya(e.products);Mt={pageType:Er.product,resourceId:r[0].productGid},t={...t,...Mt,products:Ya(e.products)},Cn({eventName:ot.PRODUCT_VIEW,payload:t})}}function Np(e){let t=Sn(e);t&&(Mt={pageType:Er.collection,resourceId:e.collection.id},t={...t,...Mt,collectionHandle:e.collection.handle,collectionId:e.collection.id},Cn({eventName:ot.COLLECTION_VIEW,payload:t}))}function Fp(e){let t=Sn(e);t&&(Mt={pageType:Er.search},t={...t,...Mt,searchString:e.searchTerm},Cn({eventName:ot.SEARCH_VIEW,payload:t}))}function Up(e){let{cart:t,currentLine:r}=e,n=Op(e,t);!n||!(r!=null&&r.id)||Hp({matchedLine:r,eventPayload:n})}function Hp({matchedLine:e,eventPayload:t}){let r={id:e.merchandise.product.id,variantId:e.merchandise.id,title:e.merchandise.product.title,variantTitle:e.merchandise.title,vendor:e.merchandise.product.vendor,price:e.merchandise.price.amount,quantity:e.quantity,productType:e.merchandise.product.productType,sku:e.merchandise.sku};Ru({type:"cart",products:[r]})&&Cn({eventName:ot.ADD_TO_CART,payload:{...t,products:Ya([r])}})}function Kt(e,t,r,n){if(e==="cart"){let o=`${r?"merchandise":"merchandise.product"}.${t}`;console.error(`[h2:error:ShopifyAnalytics] Can't set up cart analytics events because the \`cart.lines[].${o}\` value is missing from your GraphQL cart query. In your project, search for where \`fragment CartLine on CartLine\` is defined and make sure \`${o}\` is part of your cart query. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/lib/fragments.ts#L25-L56.`)}else{let o=`${n||t}`;console.error(`[h2:error:ShopifyAnalytics] Can't set up product view analytics events because the \`${o}\` is missing from your \`<Analytics.ProductView>\`. Make sure \`${o}\` is part of your products data prop. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/routes/products.%24handle.tsx#L159-L165.`)}}function Ru({type:e,products:t}){return!t||t.length===0?(Kt(e,"",!1,"data.products"),!1):(t.forEach(r=>{if(!r.id)return Kt(e,"id",!1),!1;if(!r.title)return Kt(e,"title",!1),!1;if(!r.price)return Kt(e,"price.amount",!0,"price"),!1;if(!r.vendor)return Kt(e,"vendor",!1),!1;if(!r.variantId)return Kt(e,"id",!0,"variantId"),!1;if(!r.variantTitle)return Kt(e,"title",!0,"variantTitle"),!1}),!0)}function Ya(e){return e.map(t=>{let r={productGid:t.id,variantGid:t.variantId,name:t.title,variantName:t.variantTitle,brand:t.vendor,price:t.price,quantity:t.quantity||1,category:t.productType};return t.sku&&(r.sku=t.sku),t.productType&&(r.category=t.productType),r})}function Fi(e){console.error(`[h2:error:CartAnalytics] Can't set up cart analytics events because the \`cart.${e}\` value is missing from your GraphQL cart query. In your project, search for where \`fragment CartApiQuery on Cart\` is defined and make sure \`${e}\` is part of your cart query. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/lib/fragments.ts#L59.`)}function Bp({cart:e,setCarts:t}){let{publish:r,shop:n,customData:o,canTrack:a,cart:s,prevCart:i}=bn(),l=S.useRef(null);return S.useEffect(()=>{if(e)return Promise.resolve(e).then(d=>{if(d&&d.lines){if(!d.id){Fi("id");return}if(!d.updatedAt){Fi("updatedAt");return}}t(({cart:m,prevCart:g})=>(d==null?void 0:d.updatedAt)!==(m==null?void 0:m.updatedAt)?{cart:d,prevCart:m}:{cart:m,prevCart:g})}),()=>{}},[t,e]),S.useEffect(()=>{if(!s||!(s!=null&&s.updatedAt)||(s==null?void 0:s.updatedAt)===(i==null?void 0:i.updatedAt))return;let d;try{d=JSON.parse(localStorage.getItem("cartLastUpdatedAt")||"")}catch{d=null}if(s.id===(d==null?void 0:d.id)&&s.updatedAt===(d==null?void 0:d.updatedAt))return;let m={eventTimestamp:Date.now(),cart:s,prevCart:i,shop:n,customData:o};if(s.updatedAt===l.current)return;l.current=s.updatedAt,r("cart_updated",m),localStorage.setItem("cartLastUpdatedAt",JSON.stringify({id:s.id,updatedAt:s.updatedAt}));let g=i!=null&&i.lines?bt(i==null?void 0:i.lines):[],y=s.lines?bt(s.lines):[];g==null||g.forEach(C=>{let v=y.filter(b=>C.id===b.id);if((v==null?void 0:v.length)===1){let b=v[0];C.quantity<b.quantity?r("product_added_to_cart",{...m,prevLine:C,currentLine:b}):C.quantity>b.quantity&&r("product_removed_from_cart",{...m,prevLine:C,currentLine:b})}else r("product_removed_from_cart",{...m,prevLine:C})}),y==null||y.forEach(C=>{let v=g.filter(b=>C.id===b.id);(!v||v.length===0)&&r("product_added_to_cart",{...m,currentLine:C})})},[s,i,r,n,o,a]),null}var Vp="https://cdn.shopify.com/shopifycloud/perf-kit/shopify-perf-kit-spa.min.js";function qp({shop:e}){let t=S.useRef(!1),{subscribe:r,register:n}=bn(),{ready:o}=n("Internal_Shopify_Perf_Kit"),a=Cs(Vp,{attributes:{id:"perfkit","data-application":"hydrogen","data-shop-id":ze(e.shopId).id.toString(),"data-storefront-id":e.hydrogenSubchannelId,"data-monorail-region":"global","data-spa-mode":"true","data-resource-timing-sampling-rate":"100"}});return S.useEffect(()=>{a!=="done"||t.current||(t.current=!0,r(ft.PAGE_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.navigate()}),r(ft.PRODUCT_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.setPageType("product")}),r(ft.COLLECTION_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.setPageType("collection")}),r(ft.SEARCH_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.setPageType("search")}),r(ft.CART_VIEWED,()=>{var s;(s=window.PerfKit)==null||s.setPageType("cart")}),o())},[r,o,a]),null}var Ui=new Set,ko=e=>{Ui.has(e)||(console.warn(e),Ui.add(e))},Hi=new Set,Bi=e=>{Hi.has(e)||(console.error(new Error(e)),Hi.add(e))},zp={canTrack:()=>!1,cart:null,customData:{},prevCart:null,publish:()=>{},shop:null,subscribe:()=>{},register:()=>({ready:()=>{}}),customerPrivacy:null,privacyBanner:null},Au=S.createContext(zp),xo=new Map,sn={};function Pu(){return Object.values(sn).every(Boolean)}function Vi(e,t){var r;xo.has(e)||xo.set(e,new Map),(r=xo.get(e))==null||r.set(t.toString(),t)}var wo=new Map;function qi(e,t){if(!Pu()){wo.set(e,t);return}Iu(e,t)}function Iu(e,t){(xo.get(e)??new Map).forEach((r,n)=>{try{r(t)}catch(o){typeof o=="object"&&o instanceof Error?console.error("Analytics publish error",o.message,n,o.stack):console.error("Analytics publish error",o,n)}})}function zi(e){return sn.hasOwnProperty(e)||(sn[e]=!1),{ready:()=>{sn[e]=!0,Pu()&&wo.size>0&&(wo.forEach((t,r)=>{Iu(r,t)}),wo.clear())}}}function Wi(){try{return window.Shopify.customerPrivacy.analyticsProcessingAllowed()}catch{}return!1}function Gi(e,t){return`[h2:error:Analytics.Provider] - ${e} is required. Make sure ${t} is defined in your environment variables. See https://h2o.fyi/analytics/consent to learn how to setup environment variables in the Shopify admin.`}function Wp({canTrack:e,cart:t,children:r,consent:n,customData:o={},shop:a=null,cookieDomain:s}){var j;let i=S.useRef(!1),{shop:l}=Gp(a),[d,m]=S.useState(!!e),[g,y]=S.useState({cart:null,prevCart:null}),[C,v]=S.useState(e?()=>e:()=>Wi);if(l)if(/\/68817551382$/.test(l.shopId))ko("[h2:error:Analytics.Provider] - Mock shop is used. Analytics will not work properly.");else{if(!n.checkoutDomain){let $=Gi("consent.checkoutDomain","PUBLIC_CHECKOUT_DOMAIN");Bi($)}if(!n.storefrontAccessToken){let $=Gi("consent.storefrontAccessToken","PUBLIC_STOREFRONT_API_TOKEN");Bi($)}n!=null&&n.country||(n.country="US"),n!=null&&n.language||(n.language="EN"),n.withPrivacyBanner===void 0&&(n.withPrivacyBanner=!1)}let b=S.useMemo(()=>({canTrack:C,...g,customData:o,publish:C()?qi:()=>{},shop:l,subscribe:Vi,register:zi,customerPrivacy:Io(),privacyBanner:Qa()}),[d,C,g,(j=g.cart)==null?void 0:j.updatedAt,g.prevCart,qi,Vi,o,l,zi,JSON.stringify(sn),Io,Qa]);return f.jsxs(Au.Provider,{value:b,children:[r,!!l&&f.jsx(Ep,{}),!!l&&!!t&&f.jsx(Bp,{cart:t,setCarts:y}),!!l&&n.checkoutDomain&&f.jsx(Dp,{consent:n,onReady:()=>{i.current=!0,m(!0),v(e?()=>e:()=>Wi)},domain:s}),!!l&&f.jsx(qp,{shop:l})]})}function bn(){let e=S.useContext(Au);if(!e)throw new Error("[h2:error:useAnalytics] 'useAnalytics()' must be a descendent of <AnalyticsProvider/>");return e}function Gp(e){let[t,r]=S.useState(null);return S.useEffect(()=>(Promise.resolve(e).then(r),()=>{}),[r,e]),{shop:t}}async function Qp({storefront:e,publicStorefrontId:t="0"}){return e.query(Yp,{cache:e.CacheLong()}).then(({shop:r,localization:n})=>({shopId:r.id,acceptedLanguage:n.language.isoCode,currency:n.country.currency.isoCode,hydrogenSubchannelId:t}))}var Yp=`#graphql
  query ShopData(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    shop {
      id
    }
    localization {
      country {
        currency {
          isoCode
        }
      }
      language {
        isoCode
      }
    }
  }
`,Qo={CollectionView:$p,ProductView:_p,Provider:Wp,SearchView:jp};function Xt(e,t){return ku(e.headers,t)}function ku(e,t){var n;let r=((n=e==null?void 0:e.get)==null?void 0:n.call(e,t))??(e==null?void 0:e[t]);return typeof r=="string"?r:null}function Qi(e){return{requestId:e?Xt(e,"request-id"):void 0,purpose:e?Xt(e,"purpose"):void 0}}function To(e,t={}){let r=new Error,n=(o,a="Error")=>{let s=(r.stack??"").split(`
`).slice(3+(t.stackOffset??0)).join(`
`).replace(/ at loader(\d+) \(/,(i,l)=>i.replace(l,""));return`${a}: ${o}
`+s};return e.then(o=>{if(o!=null&&o.errors&&Array.isArray(o.errors)){let a=typeof t.logErrors=="function"?t.logErrors:()=>t.logErrors??!1;o.errors.forEach(s=>{s&&(s.stack=n(s.message,s.name),a(s)&&console.error(s))})}return o}).catch(o=>{throw o&&(o.stack=n(o.message,o.name)),o})}var vt=void 0,Yo="public",Kp="private",Tu="no-store",Yi={maxAge:"max-age",staleWhileRevalidate:"stale-while-revalidate",sMaxAge:"s-maxage",staleIfError:"stale-if-error"};function Du(e){let t=[];return Object.keys(e).forEach(r=>{r==="mode"?t.push(e[r]):Yi[r]&&t.push(`${Yi[r]}=${e[r]}`)}),t.join(", ")}function Jp(){return{mode:Tu}}function Ss(e){if(e!=null&&e.mode&&(e==null?void 0:e.mode)!==Yo&&(e==null?void 0:e.mode)!==Kp)throw Error("'mode' must be either 'public' or 'private'")}function bs(e){return Ss(e),{mode:Yo,maxAge:1,staleWhileRevalidate:9,...e}}function Zp(e){return Ss(e),{mode:Yo,maxAge:3600,staleWhileRevalidate:82800,...e}}function Es(e){return Ss(e),{mode:Yo,maxAge:1,staleWhileRevalidate:86399,...e}}function Xp(e){return e}function fn(e){return String(e).includes("__proto__")?JSON.parse(e,em):JSON.parse(e)}function em(e,t){if(e!=="__proto__")return t}function Co(e,t){return e&&t?{...e,...t}:e||Es()}function Ka(e){return Du(Co(e))}async function tm(e,t){if(!e)return;let r=await e.match(t);if(r)return r}async function rm(e,t,r,n){if(!e)return;let o=Co(n),a=Ka(Co(o,{maxAge:(o.maxAge||0)+(o.staleWhileRevalidate||0)})),s=Ka(Co(o));r.headers.set("cache-control",a),r.headers.set("real-cache-control",s),r.headers.set("cache-put-date",String(Date.now())),await e.put(t,r)}async function nm(e,t){e&&await e.delete(t)}function om(e,t){let r=e.headers.get("real-cache-control"),n=0;if(r){let o=r.match(/max-age=(\d*)/);o&&o.length>1&&(n=parseFloat(o[1]))}return[(Date.now()-Number(t))/1e3,n]}function am(e,t){let r=t.headers.get("cache-put-date");if(!r)return!1;let[n,o]=om(t,r);return n>o}var _s={get:tm,set:rm,delete:nm,generateDefaultCacheControlHeader:Ka,isStale:am};function $s(e){return`https://shopify.dev/?${e}`}function sm(e){return e||Es()}async function im(e,t){if(!e)return;let r=$s(t),n=new Request(r),o=await _s.get(e,n);if(!o)return;let a=await o.text();try{return[fn(a),o]}catch{return[a,o]}}async function lm(e,t,r,n){if(!e)return;let o=$s(t),a=new Request(o),s=new Response(JSON.stringify(r));await _s.set(e,a,s,sm(n))}function um(e,t){return _s.isStale(new Request($s(e)),t)}function cm(e){let t=Array.isArray(e)?e:[e],r="";for(let n of t)n!=null&&(typeof n=="object"?r+=JSON.stringify(n):r+=n.toString());return encodeURIComponent(r)}var ka=new Set;async function dm(e,t,{strategy:r=bs(),cacheInstance:n,shouldCacheResult:o=()=>!0,waitUntil:a,debugInfo:s}){let i=cm([...typeof e=="string"?[e]:e]),l=C=>{var v,b,j,$;C.displayName,(v=C.response)==null||v.url,(b=C.response)!=null&&b.status,(j=C.response)!=null&&j.statusText,Array.from((($=C.response)==null?void 0:$.headers.entries())||[])},d;if(!n||!r||r.mode===Tu)return await t({addDebugData:l});let m=C=>lm(n,i,{value:C,debugInfo:void 0},r),g=await im(n,i);if(g&&typeof g[0]!="string"){let[{value:C,debugInfo:v},b]=g,j=um(i,b)?"STALE":"HIT";if(!ka.has(i)&&j==="STALE"){ka.add(i);let $=Promise.resolve().then(async()=>{let I=Date.now();try{let L=await t({addDebugData:l});o(L)&&(await m(L),d==null||d({result:L,cacheStatus:"PUT",overrideStartTime:I}))}catch(L){L.message&&(L.message="SWR in sub-request failed: "+L.message),console.error(L)}finally{ka.delete(i)}});a==null||a($)}return C}let y=await t({addDebugData:l});if(o(y)){let C=Promise.resolve().then(async()=>{await m(y)});a==null||a(C)}return y}function fm(e,t){return[e,{status:t.status,statusText:t.statusText,headers:Array.from(t.headers.entries())}]}function Ki([e,t]){return[e,new Response(e,t)]}async function hm(e,t,{cacheInstance:r,cache:n,cacheKey:o=[e,t],shouldCacheResponse:a,waitUntil:s,debugInfo:i}){return!n&&(!t.method||t.method==="GET")&&(n=bs()),dm(o,async()=>{let l=await fetch(e,t);if(!l.ok)return l;let d=await l.text().catch(()=>"");try{d&&(d=fn(d))}catch{}return fm(d,l)},{cacheInstance:r,waitUntil:s,strategy:n??null,debugInfo:i,shouldCacheResult:l=>"ok"in l?!1:a(...Ki(l))}).then(l=>"ok"in l?[null,l]:Ki(l))}var Ou="cartFormInput";function we({children:e,action:t,inputs:r,route:n,fetcherKey:o}){let a=ms({key:o});return f.jsxs(a.Form,{action:n||"",method:"post",children:[(t||r)&&f.jsx("input",{type:"hidden",name:Ou,value:JSON.stringify({action:t,inputs:r})}),typeof e=="function"?e(a):e]})}we.INPUT_NAME=Ou;we.ACTIONS={AttributesUpdateInput:"AttributesUpdateInput",BuyerIdentityUpdate:"BuyerIdentityUpdate",Create:"Create",DiscountCodesUpdate:"DiscountCodesUpdate",GiftCardCodesUpdate:"GiftCardCodesUpdate",LinesAdd:"LinesAdd",LinesRemove:"LinesRemove",LinesUpdate:"LinesUpdate",NoteUpdate:"NoteUpdate",SelectedDeliveryOptionsUpdate:"SelectedDeliveryOptionsUpdate",MetafieldsSet:"MetafieldsSet",MetafieldDelete:"MetafieldDelete",DeliveryAddressesAdd:"DeliveryAddressesAdd",DeliveryAddressesUpdate:"DeliveryAddressesUpdate",DeliveryAddressesRemove:"DeliveryAddressesRemove"};function pm(e){let t={};for(let s of e.entries()){let i=s[0],l=e.getAll(i);t[i]=l.length>1?l:s[1],t[i]==="on"?t[i]=!0:t[i]==="off"&&(t[i]=!1)}let{cartFormInput:r,...n}=t,{action:o,inputs:a}=r?JSON.parse(String(r)):{};return{action:o,inputs:{...a,...n}}}we.getFormInput=pm;var mm=e=>{let t=gu(ku(e,"Cookie")||"");return()=>t.cart?`gid://shopify/Cart/${t.cart}`:void 0},gm=e=>t=>{let r=new Headers;return r.append("Set-Cookie",yu("cart",t.split("/").pop()||"",{path:"/",...e})),r},Ji="Custom-Storefront-Request-Group-ID",Zi="X-Shopify-Storefront-Access-Token",Xi="X-SDK-Variant",el="X-SDK-Variant-Source",tl="X-SDK-Version";function ym(){return typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`weak-${Math.random().toString(16).substring(2)}`}var Lu="2025.5.0";function Do(e){return e.replace(/\s*#.*$/gm,"").replace(/\s+/gm," ").trim()}var vm=/(^|}\s)query[\s({]/im,xm=/(^|}\s)mutation[\s({]/im;function Mu(e,t){if(!vm.test(e))throw new Error(`[h2:error:${t}] Can only execute queries`)}function Nu(e,t){if(!xm.test(e))throw new Error(`[h2:error:${t}] Can only execute mutations`)}var js=class extends Error{constructor(t,r={}){let n=(r.clientOperation?`[h2:error:${r.clientOperation}] `:"")+t+(r.requestId?` - Request ID: ${r.requestId}`:"");super(n);Jr(this,"locations");Jr(this,"path");Jr(this,"extensions");this.name="GraphQLError",this.extensions=r.extensions,this.locations=r.locations,this.path=r.path,this.stack=r.stack||void 0;try{this.cause=JSON.stringify({...typeof r.cause=="object"?r.cause:{},requestId:r.requestId})}catch{r.cause&&(this.cause=r.cause)}}get[Symbol.toStringTag](){return this.name}toString(){let t=`${this.name}: ${this.message}`;if(this.path)try{t+=` | path: ${JSON.stringify(this.path)}`}catch{}if(this.extensions)try{t+=` | extensions: ${JSON.stringify(this.extensions)}`}catch{}return t+=`
`,this.stack&&(t+=`${this.stack.slice(this.stack.indexOf(`
`)+1)}
`),t}toJSON(){return{name:"Error",message:""}}};function Ja({url:e,response:t,errors:r,type:n,query:o,queryVariables:a,ErrorConstructor:s=Error,client:i="storefront"}){var m;let l=(typeof r=="string"?r:(m=r==null?void 0:r.map)==null?void 0:m.call(r,g=>g.message).join(`
`))||`URL: ${e}
API response error: ${t.status}`,d=new js(l,{query:o,queryVariables:a,cause:{errors:r},clientOperation:`${i}.${n}`,requestId:t.headers.get("x-request-id")});throw new s(d.message,{cause:d.cause})}var wm={language:"EN",country:"US"};function Cm(e){let{storefrontHeaders:t,cache:r,waitUntil:n,i18n:o,storefrontId:a,logErrors:s=!0,...i}=e,{getPublicTokenHeaders:l,getPrivateTokenHeaders:d,getStorefrontApiUrl:m,getShopifyDomain:g}=jh(i),y=(i.privateStorefrontToken?d:l)({contentType:"json",buyerIp:(t==null?void 0:t.buyerIp)||""});if(y[Ji]=(t==null?void 0:t.requestGroupId)||ym(),a&&(y[Th]=a),y["user-agent"]=`Hydrogen ${Lu}`,t&&t.cookie){let b=vs(t.cookie??"");b[Tt]&&(y[Dh]=b[Tt]),b[Dt]&&(y[Oh]=b[Dt])}let C=JSON.stringify({"content-type":y["content-type"],"user-agent":y["user-agent"],[Xi]:y[Xi],[el]:y[el],[tl]:y[tl],[Zi]:y[Zi]});async function v({query:b,mutation:j,variables:$,cache:I,headers:L=[],storefrontApiVersion:F,displayName:O,stackInfo:D}){let H=L instanceof Headers?Object.fromEntries(L.entries()):Array.isArray(L)?Object.fromEntries(L):L,q=b??j,W={...$};o&&(!($!=null&&$.country)&&/\$country/.test(q)&&(W.country=o.country),!($!=null&&$.language)&&/\$language/.test(q)&&(W.language=o.language));let G=m({storefrontApiVersion:F}),Z=JSON.stringify({query:q,variables:W}),ce={method:"POST",headers:{...y,...H},body:Z},z=[G,ce.method,C,ce.body],[J,ue]=await hm(G,ce,{cacheInstance:j?void 0:r,cache:I||Es(),cacheKey:z,waitUntil:n,shouldCacheResponse:fe=>!(fe!=null&&fe.errors),debugInfo:{requestId:ce.headers[Ji],displayName:O,url:G,stackInfo:D,graphql:Z,purpose:t==null?void 0:t.purpose}}),de={url:G,response:ue,type:j?"mutation":"query",query:q,queryVariables:W,errors:void 0};if(!ue.ok){let fe,R=J;try{R??(R=await ue.text()),fe=fn(R)}catch{fe=[{message:R??"Could not parse Storefront API response"}]}Ja({...de,errors:fe})}let{data:oe,errors:ge}=J,Se=ge==null?void 0:ge.map(({message:fe,...R})=>new js(fe,{...R,clientOperation:`storefront.${de.type}`,requestId:ue.headers.get("x-request-id"),queryVariables:W,query:q}));return Ie(oe,Se)}return{storefront:{query(b,j){b=Do(b),Mu(b,"storefront.query");let $=wr==null?void 0:wr(b);return To(v({...j,query:b,stackInfo:vt==null?void 0:vt($)}),{stackOffset:$,logErrors:s})},mutate(b,j){b=Do(b),Nu(b,"storefront.mutate");let $=wr==null?void 0:wr(b);return To(v({...j,mutation:b,stackInfo:vt==null?void 0:vt($)}),{stackOffset:$,logErrors:s})},cache:r,CacheNone:Jp,CacheLong:Zp,CacheShort:bs,CacheCustom:Xp,generateCacheControlHeader:Du,getPublicTokenHeaders:l,getPrivateTokenHeaders:d,getShopifyDomain:g,getApiUrl:m,i18n:o??wm}}}var wr=void 0;function Ie(e,t){return{...e,...t&&{errors:t}}}function Sm({storefront:e,customerAccount:t,getCartId:r,cartFragment:n}){return async o=>{let a=r();if(!a)return null;let[s,{cart:i,errors:l}]=await Promise.all([t?t.isLoggedIn():!1,e.query(bm(n),{variables:{cartId:a,...o},cache:e.CacheNone()})]);if(s&&(i!=null&&i.checkoutUrl)){let d=new URL(i.checkoutUrl);d.searchParams.set("logged_in","true"),i.checkoutUrl=d.toString()}return i||l?Ie(i,l):null}}var bm=(e=Em)=>`#graphql
  query CartQuery(
    $cartId: ID!
    $numCartLines: Int = 100
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartApiQuery
    }
  }

  ${e}
`,Em=`#graphql
  fragment CartApiQuery on Cart {
    updatedAt
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...CartApiMoney
              }
              price {
                ...CartApiMoney
              }
              requiresShipping
              title
              image {
                ...CartApiImage
              }
              product {
                handle
                title
                id
                vendor
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...CartApiMoney
      }
      totalAmount {
        ...CartApiMoney
      }
      totalDutyAmount {
        ...CartApiMoney
      }
      totalTaxAmount {
        ...CartApiMoney
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      applicable
      code
    }
  }

  fragment CartApiMoney on MoneyV2 {
    currencyCode
    amount
  }

  fragment CartApiImage on Image {
    id
    url
    altText
    width
    height
  }
`,We=`#graphql
  fragment CartApiError on CartUserError {
    message
    field
    code
  }
`,Ge=`#graphql
  fragment CartApiMutation on Cart {
    id
    totalQuantity
    checkoutUrl
  }
`,Qe=`#graphql
  fragment CartApiWarning on CartWarning {
    code
    message
    target
  }
`;function _m(e){return async(t,r)=>{let n=e.customerAccount?await e.customerAccount.getBuyer():void 0,{cartId:o,...a}=r||{},{buyerIdentity:s,...i}=t,{cartCreate:l,errors:d}=await e.storefront.mutate($m(e.cartFragment),{variables:{input:{...i,buyerIdentity:{...n,...s}},...a}});return Ie(l,d)}}var $m=(e=Ge)=>`#graphql
  mutation cartCreate(
    $input: CartInput!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartApiMutation
        checkoutUrl
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function jm(e){return async(t,r)=>{let{cartLinesAdd:n,errors:o}=await e.storefront.mutate(Rm(e.cartFragment),{variables:{cartId:e.getCartId(),lines:t,...r}});return Ie(n,o)}}var Rm=(e=Ge)=>`#graphql
  mutation cartLinesAdd(
    $cartId: ID!
    $lines: [CartLineInput!]!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`,Fu="__h_pending_";function Am(e){return Fu+e}function Za(e){return e.startsWith(Fu)}function Uu(e,t){if(t.some(r=>Za(typeof r=="string"?r:r.id)))throw new Error(`Tried to perform an action on an optimistic line. Make sure to disable your "${e}" CartForm action when the line is optimistic.`)}function Pm(e){return async(t,r)=>{Uu("updateLines",t);let{cartLinesUpdate:n,errors:o}=await e.storefront.mutate(Im(e.cartFragment),{variables:{cartId:e.getCartId(),lines:t,...r}});return Ie(n,o)}}var Im=(e=Ge)=>`#graphql
  mutation cartLinesUpdate(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function km(e){return async(t,r)=>{Uu("removeLines",t);let{cartLinesRemove:n,errors:o}=await e.storefront.mutate(Tm(e.cartFragment),{variables:{cartId:e.getCartId(),lineIds:t,...r}});return Ie(n,o)}}var Tm=(e=Ge)=>`#graphql
  mutation cartLinesRemove(
    $cartId: ID!
    $lineIds: [ID!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function Dm(e){return async(t,r)=>{let n=t.filter((s,i,l)=>l.indexOf(s)===i),{cartDiscountCodesUpdate:o,errors:a}=await e.storefront.mutate(Om(e.cartFragment),{variables:{cartId:e.getCartId(),discountCodes:n,...r}});return Ie(o,a)}}var Om=(e=Ge)=>`#graphql
  mutation cartDiscountCodesUpdate(
    $cartId: ID!
    $discountCodes: [String!]
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function Lm(e){return async(t,r)=>{t.companyLocationId&&e.customerAccount&&e.customerAccount.setBuyer({companyLocationId:t.companyLocationId});let n=e.customerAccount?await e.customerAccount.getBuyer():void 0,{cartBuyerIdentityUpdate:o,errors:a}=await e.storefront.mutate(Mm(e.cartFragment),{variables:{cartId:e.getCartId(),buyerIdentity:{...n,...t},...r}});return Ie(o,a)}}var Mm=(e=Ge)=>`#graphql
  mutation cartBuyerIdentityUpdate(
    $cartId: ID!
    $buyerIdentity: CartBuyerIdentityInput!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function Nm(e){return async(t,r)=>{let{cartNoteUpdate:n,errors:o}=await e.storefront.mutate(Fm(e.cartFragment),{variables:{cartId:e.getCartId(),note:t,...r}});return Ie(n,o)}}var Fm=(e=Ge)=>`#graphql
  mutation cartNoteUpdate(
    $cartId: ID!
    $note: String!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartNoteUpdate(cartId: $cartId, note: $note) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function Um(e){return async(t,r)=>{let{cartSelectedDeliveryOptionsUpdate:n,errors:o}=await e.storefront.mutate(Hm(e.cartFragment),{variables:{cartId:e.getCartId(),selectedDeliveryOptions:t,...r}});return Ie(n,o)}}var Hm=(e=Ge)=>`#graphql
  mutation cartSelectedDeliveryOptionsUpdate(
    $cartId: ID!
    $selectedDeliveryOptions: [CartSelectedDeliveryOptionInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartSelectedDeliveryOptionsUpdate(cartId: $cartId, selectedDeliveryOptions: $selectedDeliveryOptions) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function Bm(e){return async(t,r)=>{let{cartAttributesUpdate:n,errors:o}=await e.storefront.mutate(Vm(e.cartFragment),{variables:{cartId:(r==null?void 0:r.cartId)||e.getCartId(),attributes:t}});return Ie(n,o)}}var Vm=(e=Ge)=>`#graphql
  mutation cartAttributesUpdate(
    $cartId: ID!
    $attributes: [AttributeInput!]!
  ) {
    cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function qm(e){return async(t,r)=>{let n=(r==null?void 0:r.cartId)||e.getCartId(),o=t.map(i=>({...i,ownerId:n})),{cartMetafieldsSet:a,errors:s}=await e.storefront.mutate(zm(),{variables:{metafields:o}});return Ie({cart:{id:n},...a},s)}}var zm=()=>`#graphql
  mutation cartMetafieldsSet(
    $metafields: [CartMetafieldsSetInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartMetafieldsSet(metafields: $metafields) {
      userErrors {
        code
        elementIndex
        field
        message
      }
    }
  }
`;function Wm(e){return async(t,r)=>{let n=(r==null?void 0:r.cartId)||e.getCartId(),{cartMetafieldDelete:o,errors:a}=await e.storefront.mutate(Gm(),{variables:{input:{ownerId:n,key:t}}});return Ie({cart:{id:n},...o},a)}}var Gm=()=>`#graphql
  mutation cartMetafieldDelete(
    $input: CartMetafieldDeleteInput!
  ) {
    cartMetafieldDelete(input: $input) {
      userErrors {
        code
        field
        message
      }
    }
  }
`;function Qm(e){return async(t,r)=>{let n=t.filter((s,i,l)=>l.indexOf(s)===i),{cartGiftCardCodesUpdate:o,errors:a}=await e.storefront.mutate(Ym(e.cartFragment),{variables:{cartId:e.getCartId(),giftCardCodes:n,...r}});return Ie(o,a)}}var Ym=(e=Ge)=>`#graphql
  mutation cartGiftCardCodesUpdate(
    $cartId: ID!
    $giftCardCodes: [String!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartGiftCardCodesUpdate(cartId: $cartId, giftCardCodes: $giftCardCodes) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function Km(e){return async(t,r)=>{let{cartDeliveryAddressesAdd:n,errors:o}=await e.storefront.mutate(Jm(e.cartFragment),{variables:{cartId:e.getCartId(),addresses:t,...r}});return Ie(n,o)}}var Jm=(e=Ge)=>`#graphql
  mutation cartDeliveryAddressesAdd(
    $cartId: ID!
    $addresses: [CartSelectableAddressInput!]!,
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartDeliveryAddressesAdd(addresses: $addresses, cartId: $cartId) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function Zm(e){return async(t,r)=>{let{cartDeliveryAddressesRemove:n,errors:o}=await e.storefront.mutate(Xm(e.cartFragment),{variables:{cartId:e.getCartId(),addressIds:t,...r}});return Ie(n,o)}}var Xm=(e=Ge)=>`#graphql
  mutation cartDeliveryAddressesRemove(
    $cartId: ID!
    $addressIds: [ID!]!,
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartDeliveryAddressesRemove(addressIds: $addressIds, cartId: $cartId) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function eg(e){return async(t,r)=>{let{cartDeliveryAddressesUpdate:n,errors:o}=await e.storefront.mutate(tg(e.cartFragment),{variables:{cartId:e.getCartId(),addresses:t,...r}});return Ie(n,o)}}var tg=(e=Ge)=>`#graphql
  mutation cartDeliveryAddressesUpdate(
    $cartId: ID!
    $addresses: [CartSelectableAddressUpdateInput!]!,
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartDeliveryAddressesUpdate(addresses: $addresses, cartId: $cartId) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${e}
  ${We}
  ${Qe}
`;function rg(e){let{getCartId:t,setCartId:r,storefront:n,customerAccount:o,cartQueryFragment:a,cartMutateFragment:s,buyerIdentity:i}=e,l=t(),d=()=>l||t(),m={storefront:n,getCartId:d,cartFragment:s,customerAccount:o},g=_m(m),y=async function(...v){var j;v[0].buyerIdentity={...i,...v[0].buyerIdentity};let b=await g(...v);return l=(j=b==null?void 0:b.cart)==null?void 0:j.id,b},C={get:Sm({storefront:n,customerAccount:o,getCartId:d,cartFragment:a}),getCartId:d,setCartId:r,create:y,addLines:async(v,b)=>{let j=v.map($=>({attributes:$.attributes,quantity:$.quantity,merchandiseId:$.merchandiseId,sellingPlanId:$.sellingPlanId}));return l||b!=null&&b.cartId?await jm(m)(j,b):await y({lines:j,buyerIdentity:i},b)},updateLines:Pm(m),removeLines:km(m),updateDiscountCodes:async(v,b)=>l||b!=null&&b.cartId?await Dm(m)(v,b):await y({discountCodes:v},b),updateGiftCardCodes:async(v,b)=>l||b!=null&&b.cartId?await Qm(m)(v,b):await y({giftCardCodes:v},b),updateBuyerIdentity:async(v,b)=>l||b!=null&&b.cartId?await Lm(m)(v,b):await y({buyerIdentity:v},b),updateNote:async(v,b)=>l||b!=null&&b.cartId?await Nm(m)(v,b):await y({note:v},b),updateSelectedDeliveryOption:Um(m),updateAttributes:async(v,b)=>l||b!=null&&b.cartId?await Bm(m)(v,b):await y({attributes:v},b),setMetafields:async(v,b)=>l||b!=null&&b.cartId?await qm(m)(v,b):await y({metafields:v},b),deleteMetafield:Wm(m),addDeliveryAddresses:Km(m),removeDeliveryAddresses:Zm(m),updateDeliveryAddresses:eg(m)};return"customMethods"in e?{...C,...e.customMethods??{}}:C}function Hu(e){let t=Df();if(!t||!t.length)return e;let r=e!=null&&e.lines?structuredClone(e):{lines:{nodes:[]}},n=r.lines.nodes,o=!1;for(let{formData:a}of t){if(!a)continue;let s=we.getFormInput(a);if(s.action===we.ACTIONS.LinesAdd)for(let i of s.inputs.lines){if(!i.selectedVariant){console.error("[h2:error:useOptimisticCart] No selected variant was passed in the cart action. Make sure to pass the selected variant if you want to use an optimistic cart");continue}let l=n.find(d=>{var m;return d.merchandise.id===((m=i.selectedVariant)==null?void 0:m.id)});o=!0,l?(l.quantity=(l.quantity||1)+(i.quantity||1),l.isOptimistic=!0):n.unshift({id:Am(i.selectedVariant.id),merchandise:i.selectedVariant,isOptimistic:!0,quantity:i.quantity||1})}else if(s.action===we.ACTIONS.LinesRemove)for(let i of s.inputs.lineIds){let l=n.findIndex(d=>d.id===i);if(l!==-1){if(Za(n[l].id)){console.error("[h2:error:useOptimisticCart] Tried to remove an optimistic line that has not been added to the cart yet");continue}n.splice(l,1),o=!0}else console.warn(`[h2:warn:useOptimisticCart] Tried to remove line '${i}' but it doesn't exist in the cart`)}else if(s.action===we.ACTIONS.LinesUpdate)for(let i of s.inputs.lines){let l=n.findIndex(d=>i.id===d.id);if(l>-1){if(Za(n[l].id)){console.error("[h2:error:useOptimisticCart] Tried to update an optimistic line that has not been added to the cart yet");continue}n[l].quantity=i.quantity,n[l].quantity===0&&n.splice(l,1),o=!0}else console.warn(`[h2:warn:useOptimisticCart] Tried to update line '${i.id}' but it doesn't exist in the cart`)}}return o&&(r.isOptimistic=o),r.totalQuantity=n.reduce((a,s)=>a+s.quantity,0),r}var Ta="2025-04",Oo=`Shopify Hydrogen ${Lu}`,ng="30243aa5-17c1-465a-8493-944bcc4e88aa",Be="customerAccount",So="buyer",St=class extends Response{constructor(e,t,r){super(`Bad request: ${e}`,{status:400,headers:r})}};function bo(e,t={}){let r=t.headers?new Headers(t.headers):new Headers({});return r.set("location",e),new Response(null,{status:t.status||302,headers:r})}async function og({session:e,customerAccountId:t,customerAccountTokenExchangeUrl:r,httpsOrigin:n,debugInfo:o}){let a=new URLSearchParams,s=e.get(Be),i=s==null?void 0:s.refreshToken,l=s==null?void 0:s.idToken;if(!i)throw new St("Unauthorized","No refreshToken found in the session. Make sure your session is configured correctly and passed to `createCustomerAccountClient`.");a.append("grant_type","refresh_token"),a.append("refresh_token",i),a.append("client_id",t);let d={"content-type":"application/x-www-form-urlencoded","User-Agent":Oo,Origin:n};new Date().getTime();let m=r,g=await fetch(m,{method:"POST",headers:d,body:a});if(!g.ok){let b=await g.text();throw new Response(b,{status:g.status,headers:{"Content-Type":"text/html; charset=utf-8"}})}let{access_token:y,expires_in:C,refresh_token:v}=await g.json();if(!y||y.length===0)throw new St("Unauthorized","Invalid access token received.");e.set(Be,{accessToken:y,expiresAt:new Date(new Date().getTime()+(C-120)*1e3).getTime()+"",refreshToken:v,idToken:l})}function an(e){e.unset(Be),e.unset(So)}async function ag({locks:e,expiresAt:t,session:r,customerAccountId:n,customerAccountTokenExchangeUrl:o,httpsOrigin:a,debugInfo:s}){if(parseInt(t,10)-1e3<new Date().getTime())try{e.refresh||(e.refresh=og({session:r,customerAccountId:n,customerAccountTokenExchangeUrl:o,httpsOrigin:a,debugInfo:s})),await e.refresh,delete e.refresh}catch(i){throw an(r),i&&i.status!==401?i:new St("Unauthorized","Login before querying the Customer Account API.")}}function sg(){let e=lg();return Bu(e)}async function ig(e){let t=await crypto.subtle.digest({name:"SHA-256"},new TextEncoder().encode(e)),r=ug(t);return Bu(r)}function lg(){let e=new Uint8Array(32);return crypto.getRandomValues(e),String.fromCharCode.apply(null,Array.from(e))}function Bu(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function ug(e){let t=new Uint8Array(e),r=Array.from(t);return String.fromCharCode(...r)}function cg(){let e=Date.now().toString(),t=Math.random().toString(36).substring(2);return e+t}async function dg(e,t,r,n,o){let a=t;if(!e)throw new St("Unauthorized","oAuth access token was not provided during token exchange.");let s=new URLSearchParams;s.append("grant_type","urn:ietf:params:oauth:grant-type:token-exchange"),s.append("client_id",a),s.append("audience",ng),s.append("subject_token",e),s.append("subject_token_type","urn:ietf:params:oauth:token-type:access_token"),s.append("scopes","https://api.customers.com/auth/customer.graphql");let i={"content-type":"application/x-www-form-urlencoded","User-Agent":Oo,Origin:n};new Date().getTime();let m=await(await fetch(r,{method:"POST",headers:i,body:s})).json();if(m.error)throw new St(m.error_description);return m.access_token}function fg(e){return hg(e).payload.nonce}function hg(e){let[t,r,n]=e.split("."),o=JSON.parse(atob(t)),a=JSON.parse(atob(r));return{header:o,payload:a,signature:n}}function Vu(){return mg(pg())}function pg(){try{return crypto.getRandomValues(new Uint8Array(16))}catch{return new Uint8Array(16).map(()=>Math.random()*255|0)}}function mg(e){return Array.from(e,function(t){return("0"+(t&255).toString(16)).slice(-2)}).join("")}function qu(e){if(!e)return;let{pathname:t,search:r}=new URL(e),n=t+r,o=new URLSearchParams(r),a=o.get("return_to")||o.get("redirect");if(a){if(zu(e,a))return a;console.warn(`Cross-domain redirects are not supported. Tried to redirect from ${n} to ${a}`)}}function zu(e,t){try{return new URL(e).origin===new URL(t,e).origin}catch{return!1}}function rl({requestUrl:e,defaultUrl:t,redirectUrl:r}){let n=e,o=nl(e,t),a=r?nl(e,r):o;return zu(e,a.toString())?a.toString():(console.warn(`Cross-domain redirects are not supported. Tried to redirect from ${n} to ${a}. Default url ${o} is used instead.`),o.toString())}function nl(e,t){return gg(t)?new URL(t):new URL(t,new URL(e).origin)}function gg(e){try{return new URL(e),!0}catch{return!1}}function yg(e,t){let r=`https://shopify.com/${t}`,n=`https://shopify.com/authentication/${t}`;return function(o){switch(o){case"CA_BASE_URL":return r;case"CA_BASE_AUTH_URL":return n;case"GRAPHQL":return`${r}/account/customer/api/${e}/graphql`;case"AUTH":return`${n}/oauth/authorize`;case"LOGIN_SCOPE":return t?"openid email customer-account-api:full":"openid email https://api.customers.com/auth/customer.graphql";case"TOKEN_EXCHANGE":return`${n}/oauth/token`;case"LOGOUT":return`${n}/logout`}}}function vg(e,t){if(!e.url)return t;let{pathname:r}=new URL(e.url),n=r.replace(/\.data$/,"").replace(/\/_root$/,"/").replace(/(.+)\/$/,"$1"),o=t+`?${new URLSearchParams({return_to:n}).toString()}`;return bo(o)}function xg({session:e,customerAccountId:t,shopId:r,customerApiVersion:n=Ta,request:o,waitUntil:a,authUrl:s,customAuthStatusHandler:i,logErrors:l=!0,loginPath:d="/account/login",authorizePath:m="/account/authorize",defaultRedirectPath:g="/account",language:y}){if(n!==Ta&&console.warn(`[h2:warn:createCustomerAccountClient] You are using Customer Account API version ${n} when this version of Hydrogen was built for ${Ta}.`),e||console.warn("[h2:warn:createCustomerAccountClient] session is required to use Customer Account API. Ensure the session object passed in exist."),!(o!=null&&o.url))throw new Error("[h2:error:createCustomerAccountClient] The request object does not contain a URL.");let C=i||(()=>vg(o,d)),v=new URL(o.url),b=v.protocol==="http:"?v.origin.replace("http","https"):v.origin,j=rl({requestUrl:b,defaultUrl:m,redirectUrl:s}),$=yg(n,r),I=wg($,t),L=$("GRAPHQL"),F={};async function O({query:z,type:J,variables:ue={}}){let de=await q();if(!de)throw C();new Date().getTime();let oe=await fetch(L,{method:"POST",headers:{"Content-Type":"application/json","User-Agent":Oo,Origin:b,Authorization:de},body:JSON.stringify({query:z,variables:ue})}),ge=await oe.text(),Se={url:L,response:oe,type:J,query:z,queryVariables:ue,errors:void 0,client:"customer"};if(!oe.ok){if(oe.status===401)throw an(e),C();let fe;try{fe=fn(ge)}catch{fe=[{message:ge}]}Ja({...Se,errors:fe})}try{let fe=fn(ge),{errors:R}=fe,B=R==null?void 0:R.map(({message:ee,...ie})=>new js(ee,{...ie,clientOperation:`customerAccount.${Se.type}`,requestId:oe.headers.get("x-request-id"),queryVariables:ue,query:z}));return{...fe,...R&&{errors:B}}}catch{Ja({...Se,errors:[{message:ge}]})}}async function D(){if(!r)return!1;let z=e.get(Be),J=z==null?void 0:z.accessToken,ue=z==null?void 0:z.expiresAt;if(!J||!ue)return!1;let de=vt==null?void 0:vt();try{await ag({locks:F,expiresAt:ue,session:e,customerAccountId:t,customerAccountTokenExchangeUrl:$("TOKEN_EXCHANGE"),httpsOrigin:b,debugInfo:{waitUntil:a,stackInfo:de,...Qi(o)}})}catch{return!1}return!0}async function H(){if(!await D())throw C()}async function q(){var z;if(await D())return(z=e.get(Be))==null?void 0:z.accessToken}async function W(z,J){return I(),z=Do(z),Nu(z,"customer.mutate"),To(O({query:z,type:"mutation",...J}),{logErrors:l})}async function G(z,J){return I(),z=Do(z),Mu(z,"customer.query"),To(O({query:z,type:"query",...J}),{logErrors:l})}function Z(z){e.set(So,{...e.get(So),...z})}async function ce(){let z=await q();if(z)return{...e.get(So),customerAccessToken:z}}return{login:async z=>{I();let J=new URL($("AUTH")),ue=cg(),de=Vu();J.searchParams.set("client_id",t),J.searchParams.set("scope","openid email"),J.searchParams.append("response_type","code"),J.searchParams.append("redirect_uri",j),J.searchParams.set("scope",$("LOGIN_SCOPE")),J.searchParams.append("state",ue),J.searchParams.append("nonce",de);let oe=Cg({contextLanguage:y??null,uiLocalesOverride:(z==null?void 0:z.uiLocales)??null});oe!=null&&J.searchParams.append("ui_locales",oe);let ge=sg(),Se=await ig(ge);return e.set(Be,{...e.get(Be),codeVerifier:ge,state:ue,nonce:de,redirectPath:qu(o.url)||Xt(o,"Referer")||g}),J.searchParams.append("code_challenge",Se),J.searchParams.append("code_challenge_method","S256"),bo(J.toString())},logout:async z=>{var ge;I();let J=(ge=e.get(Be))==null?void 0:ge.idToken,ue=rl({requestUrl:b,defaultUrl:b,redirectUrl:z==null?void 0:z.postLogoutRedirectUri}),de=J?new URL(`${$("LOGOUT")}?${new URLSearchParams([["id_token_hint",J],["post_logout_redirect_uri",ue]]).toString()}`).toString():ue;an(e);let oe=(z==null?void 0:z.headers)instanceof Headers?z==null?void 0:z.headers:new Headers(z==null?void 0:z.headers);return z!=null&&z.keepSession||(e.destroy?oe.set("Set-Cookie",await e.destroy()):console.warn("[h2:warn:customerAccount] session.destroy is not available on your session implementation. All session data might not be cleared on logout."),e.isPending=!1),bo(de,{headers:oe})},isLoggedIn:D,handleAuthStatus:H,getAccessToken:q,getApiUrl:()=>L,mutate:W,query:G,authorize:async()=>{var ae,be,Ne,Et;I();let z=v.searchParams.get("code"),J=v.searchParams.get("state");if(!z||!J)throw an(e),new St("Unauthorized","No code or state parameter found in the redirect URL.");if(((ae=e.get(Be))==null?void 0:ae.state)!==J)throw an(e),new St("Unauthorized","The session state does not match the state parameter. Make sure that the session is configured correctly and passed to `createCustomerAccountClient`.");let ue=t,de=new URLSearchParams;de.append("grant_type","authorization_code"),de.append("client_id",ue),de.append("redirect_uri",j),de.append("code",z);let oe=(be=e.get(Be))==null?void 0:be.codeVerifier;if(!oe)throw new St("Unauthorized","No code verifier found in the session. Make sure that the session is configured correctly and passed to `createCustomerAccountClient`.");de.append("code_verifier",oe);let ge={"content-type":"application/x-www-form-urlencoded","User-Agent":Oo,Origin:b};new Date().getTime();let Se=$("TOKEN_EXCHANGE"),fe=await fetch(Se,{method:"POST",headers:ge,body:de});if(!fe.ok)throw new Response(await fe.text(),{status:fe.status,headers:{"Content-Type":"text/html; charset=utf-8"}});let{access_token:R,expires_in:B,id_token:ee,refresh_token:ie}=await fe.json(),le=(Ne=e.get(Be))==null?void 0:Ne.nonce,he=await fg(ee);if(le!==he)throw new St("Unauthorized",`Returned nonce does not match: ${le} !== ${he}`);let ye=R;r||(ye=await dg(R,t,$("TOKEN_EXCHANGE"),b,{...Qi(o)}));let pe=(Et=e.get(Be))==null?void 0:Et.redirectPath;return e.set(Be,{accessToken:ye,expiresAt:new Date(new Date().getTime()+(B-120)*1e3).getTime()+"",refreshToken:ie,idToken:ee}),bo(pe||g)},setBuyer:Z,getBuyer:ce,UNSTABLE_setBuyer:z=>{ko("[h2:warn:customerAccount] `customerAccount.UNSTABLE_setBuyer` is deprecated. Please use `customerAccount.setBuyer`."),Z(z)},UNSTABLE_getBuyer:()=>(ko("[h2:warn:customerAccount] `customerAccount.UNSTABLE_getBuyer` is deprecated. Please use `customerAccount.getBuyer`."),ce())}}function wg(e,t){return function(){try{if(!t)throw Error();new URL(e("CA_BASE_URL")),new URL(e("CA_BASE_AUTH_URL"))}catch{console.error(new Error("[h2:error:customerAccount] You do not have the valid credential to use Customer Account API.\nRun `h2 env pull` to link your store credentials."));let r="Internal Server Error";throw new Response(r,{status:500})}}}function Cg(e){let t=ol(e.contextLanguage??null);return ol(e.uiLocalesOverride)??t??null}function ol(e){if(e==null)return null;let t=bg(e).toLowerCase().replaceAll("_","-").split("-"),r=t.at(0)??null,n=t.at(1)??null;return n?`${r}-${n.toUpperCase()}`:r}var Sg={PT:"PT_PT",ZH:"ZH_CN"};function bg(e){return Sg[e]??e}function Eg(e){let{env:t,request:r,cache:n,waitUntil:o,i18n:a,session:s,logErrors:i,storefront:l={},customerAccount:d,cart:m={},buyerIdentity:g}=e;s||console.warn("[h2:warn:createHydrogenContext] A session object is required to create hydrogen context."),d!=null&&d.unstableB2b&&ko("[h2:warn:createHydrogenContext] `customerAccount.unstableB2b` is now stable. Please remove the `unstableB2b` option.");let{storefront:y}=Cm({cache:n,waitUntil:o,i18n:a,logErrors:i,storefrontHeaders:l.headers||_g(r),storefrontApiVersion:l.apiVersion,storefrontId:t.PUBLIC_STOREFRONT_ID,storeDomain:t.PUBLIC_STORE_DOMAIN,privateStorefrontToken:t.PRIVATE_STOREFRONT_API_TOKEN,publicStorefrontToken:t.PUBLIC_STOREFRONT_API_TOKEN}),C=xg({session:s,request:r,waitUntil:o,logErrors:i,customerApiVersion:d==null?void 0:d.apiVersion,authUrl:d==null?void 0:d.authUrl,customAuthStatusHandler:d==null?void 0:d.customAuthStatusHandler,language:a==null?void 0:a.language,customerAccountId:t.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID,shopId:t.SHOP_ID}),v=rg({getCartId:m.getId||mm(r.headers),setCartId:m.setId||gm(),cartQueryFragment:m.queryFragment,cartMutateFragment:m.mutateFragment,customMethods:m.customMethods,buyerIdentity:g,storefront:y,customerAccount:C});return{storefront:y,customerAccount:C,cart:v,env:t,waitUntil:o,session:s}}function _g(e){return{requestGroupId:Xt(e,"request-id"),buyerIp:Xt(e,"oxygen-buyer-ip"),cookie:Xt(e,"cookie"),purpose:Xt(e,"purpose")}}var Wu=S.createContext(void 0),$g=Wu.Provider,Gu=()=>S.useContext(Wu);function jg(e){let t=Vu(),r=Rg(t,e);return{nonce:t,header:r,NonceProvider:({children:n})=>S.createElement($g,{value:t},n)}}function Rg(e,t){let{shop:r,...n}=t??{},o=`'nonce-${e}'`,a=["'self'","'unsafe-inline'","https://cdn.shopify.com"],s=["'self'","https://monorail-edge.shopifysvc.com"];r&&r.checkoutDomain&&s.push(`https://${r.checkoutDomain}`),r&&r.storeDomain&&s.push(`https://${r.storeDomain}`);let i={baseUri:["'self'"],defaultSrc:["'self'",o,"https://cdn.shopify.com","https://shopify.com"],frameAncestors:["'none'"],styleSrc:a,connectSrc:s},l=Object.assign({},i,n);for(let d in i){let m=n[d];d&&m&&(l[d]=Ag(m,i[d]))}return l.scriptSrc instanceof Array?l.scriptSrc=[...l.scriptSrc.filter(d=>!d.startsWith("'nonce")),o]:l.defaultSrc instanceof Array&&(l.defaultSrc=[...l.defaultSrc.filter(d=>!d.startsWith("'nonce")),o]),bp({directives:l})}function Ag(e,t){let r=typeof t=="string"?[t]:t,n=Array.isArray(e)?e:[String(e)];return Array.isArray(r)?r.every(o=>o==="'none'")?n:[...n,...r]:r}S.forwardRef((e,t)=>{let{waitForHydration:r,src:n,...o}=e,a=Gu();return r?f.jsx(Pg,{src:n,options:o}):f.jsx("script",{suppressHydrationWarning:!0,...o,src:n,nonce:a,ref:t})});function Pg({src:e,options:t}){if(!e)throw new Error("`waitForHydration` with the Script component requires a `src` prop");return Cs(e,{attributes:t}),null}function Qu({connection:e,children:t=()=>(console.warn("<Pagination> requires children to work properly"),null),namespace:r=""}){let[n,o]=S.useState(!1),a=Pr(),s=Me();pn(),S.useEffect(()=>{a.state==="idle"&&o(!1)},[a.state]);let{endCursor:i,hasNextPage:l,hasPreviousPage:d,nextPageUrl:m,nodes:g,previousPageUrl:y,startCursor:C}=Ig(e,r),v=S.useMemo(()=>{var $;return{...s.state,pagination:{...(($=s.state)==null?void 0:$.pagination)||{},[r]:{pageInfo:{endCursor:i,hasPreviousPage:d,hasNextPage:l,startCursor:C},nodes:g}}}},[i,l,d,C,g,r,s.state]),b=S.useMemo(()=>S.forwardRef(function($,I){return l?S.createElement(Ce,{preventScrollReset:!0,...$,to:m,state:v,replace:!0,ref:I,onClick:()=>o(!0)}):null}),[l,m,v]),j=S.useMemo(()=>S.forwardRef(function($,I){return d?S.createElement(Ce,{preventScrollReset:!0,...$,to:y,state:v,replace:!0,ref:I,onClick:()=>o(!0)}):null}),[d,y,v]);return t({state:v,hasNextPage:l,hasPreviousPage:d,isLoading:n,nextPageUrl:m,nodes:g,previousPageUrl:y,NextLink:b,PreviousLink:j})}function fo(e,t){let r=new URLSearchParams(e);return Object.keys((t==null?void 0:t.pagination)||{}).forEach(n=>{let o=n===""?"":`${n}_`,a=`${o}cursor`,s=`${o}direction`;r.delete(a),r.delete(s)}),r.toString()}function tn(e){throw new Error(`The Pagination component requires ${"`"+e+"`"} to be a part of your query. See the guide on how to setup your query to include ${"`"+e+"`"}: https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/pagination#setup-the-paginated-query`)}function Ig(e,t=""){e.pageInfo||tn("pageInfo"),typeof e.pageInfo.startCursor>"u"&&tn("pageInfo.startCursor"),typeof e.pageInfo.endCursor>"u"&&tn("pageInfo.endCursor"),typeof e.pageInfo.hasNextPage>"u"&&tn("pageInfo.hasNextPage"),typeof e.pageInfo.hasPreviousPage>"u"&&tn("pageInfo.hasPreviousPage");let r=Pr(),n=pn(),{state:o,search:a,pathname:s}=Me(),i=t?`${t}_cursor`:"cursor",l=t?`${t}_direction`:"direction",d=new URLSearchParams(a).get(l)==="previous",m=S.useMemo(()=>{var b,j,$;return!((b=globalThis==null?void 0:globalThis.window)!=null&&b.__hydrogenHydrated)||!(($=(j=o==null?void 0:o.pagination)==null?void 0:j[t])!=null&&$.nodes)?bt(e):d?[...bt(e),...o.pagination[t].nodes||[]]:[...o.pagination[t].nodes||[],...bt(e)]},[o,e,t]),g=S.useMemo(()=>{var O,D,H,q,W;let b=(O=globalThis==null?void 0:globalThis.window)==null?void 0:O.__hydrogenHydrated,j=(H=(D=o==null?void 0:o.pagination)==null?void 0:D[t])==null?void 0:H.pageInfo,$=!b||(j==null?void 0:j.startCursor)===void 0?e.pageInfo.startCursor:j.startCursor,I=!b||(j==null?void 0:j.endCursor)===void 0?e.pageInfo.endCursor:j.endCursor,L=!b||(j==null?void 0:j.hasPreviousPage)===void 0?e.pageInfo.hasPreviousPage:j.hasPreviousPage,F=!b||(j==null?void 0:j.hasNextPage)===void 0?e.pageInfo.hasNextPage:j.hasNextPage;return(W=(q=o==null?void 0:o.pagination)==null?void 0:q[t])!=null&&W.nodes&&(d?($=e.pageInfo.startCursor,L=e.pageInfo.hasPreviousPage):(I=e.pageInfo.endCursor,F=e.pageInfo.hasNextPage)),{startCursor:$,endCursor:I,hasPreviousPage:L,hasNextPage:F}},[d,o,t,e.pageInfo.hasNextPage,e.pageInfo.hasPreviousPage,e.pageInfo.startCursor,e.pageInfo.endCursor]),y=S.useRef({params:fo(a,o),pathname:s});S.useEffect(()=>{window.__hydrogenHydrated=!0},[]),S.useEffect(()=>{let b=fo(a,o),j=y.current.params;(s!==y.current.pathname||b!==j)&&!(r.state==="idle"&&!r.location)&&(y.current={pathname:s,params:fo(a,o)},n(`${s}?${fo(a,o)}`,{replace:!0,preventScrollReset:!0,state:{nodes:void 0,pageInfo:void 0}}))},[s,a,o]);let C=S.useMemo(()=>{let b=new URLSearchParams(a);return b.set(l,"previous"),g.startCursor&&b.set(i,g.startCursor),`?${b.toString()}`},[a,g.startCursor]),v=S.useMemo(()=>{let b=new URLSearchParams(a);return b.set(l,"next"),g.endCursor&&b.set(i,g.endCursor),`?${b.toString()}`},[a,g.endCursor]);return{...g,previousPageUrl:C,nextPageUrl:v,nodes:m}}function rr(e,t={pageBy:20}){if(typeof(e==null?void 0:e.url)>"u")throw new Error("getPaginationVariables must be called with the Request object passed to your loader function");let{pageBy:r,namespace:n=""}=t,o=new URLSearchParams(new URL(e.url).search),a=n?`${n}_cursor`:"cursor",s=n?`${n}_direction`:"direction",i=o.get(a)??void 0;return(o.get(s)==="previous"?"previous":"next")=="previous"?{last:r,startCursor:i??null}:{first:r,endCursor:i??null}}function kg(e,t){let r=Pr(),[n,o]=S.useState([]);if(S.useEffect(()=>{Promise.resolve(t).then(a=>{var s,i;a&&o(a instanceof Array?a:((i=(s=a.product)==null?void 0:s.variants)==null?void 0:i.nodes)||[])}).catch(a=>{reportError(new Error("[h2:error:useOptimisticVariant] An error occurred while resolving the variants for the optimistic product hook.",{cause:a}))})},[JSON.stringify(t)]),r.state==="loading"){let a=new URLSearchParams(r.location.search),s=!1,i=n.find(l=>l.selectedOptions?l.selectedOptions.every(d=>a.get(d.name)===d.value):(s||(s=!0,reportError(new Error("[h2:error:useOptimisticVariant] The optimistic product hook requires your product query to include variants with the selectedOptions field."))),!1));if(i)return{...i,isOptimistic:!0}}return e}var Tg=e=>{if(typeof(e==null?void 0:e.url)>"u")throw new TypeError(`Expected a Request instance, got ${typeof e}`);let t=new URL(e.url).searchParams,r=[];return t.forEach((n,o)=>{r.push({name:o,value:n})}),r};async function Dg(e){var g,y,C;let{storefront:t,request:r,noAdminRedirect:n,matchQueryParams:o,response:a=new Response("Not Found",{status:404})}=e,s=new URL(r.url),{pathname:i,searchParams:l}=s,d=l.has("_data");l.delete("redirect"),l.delete("return_to"),l.delete("_data");let m=(o?s.toString().replace(s.origin,""):i).toLowerCase();if(s.pathname==="/admin"&&!n)return Oa(`${t.getShopifyDomain()}/admin`,d,l,o);try{let{urlRedirects:v}=await t.query(Og,{variables:{query:"path:"+m.replace(/\/+$/,"")}}),b=(C=(y=(g=v==null?void 0:v.edges)==null?void 0:g[0])==null?void 0:y.node)==null?void 0:C.target;if(b)return Oa(b,d,l,o);let j=qu(r.url);if(j)return Oa(j,d,l,o)}catch(v){console.error(`Failed to fetch redirects from Storefront API for route ${m}`,v)}return a}var Da="https://example.com";function Oa(e,t,r,n){let o=new URL(e,Da);if(!n)for(let[a,s]of r)o.searchParams.append(a,s);return t?new Response(null,{status:200,headers:{"X-Remix-Redirect":o.toString().replace(Da,""),"X-Remix-Status":"301"}}):new Response(null,{status:301,headers:{location:o.toString().replace(Da,"")}})}var Og=`#graphql
  query redirects($query: String) {
    urlRedirects(first: 1, query: $query) {
      edges {
        node {
          target
        }
      }
    }
  }
`;S.lazy(()=>Promise.resolve().then(()=>uy));var Lg=`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`,Mg=`
</sitemapindex>`,al=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,sl="</urlset>";async function Ng(e){let{storefront:t,request:r,types:n=["products","pages","collections","metaObjects","articles","blogs"],customChildSitemaps:o=[]}=e;if(!r||!r.url)throw new Error("A request object is required to generate a sitemap index");if(!t||!t.query)throw new Error("A storefront client is required to generate a sitemap index");let a=await t.query(Yg);if(!a)throw console.warn("[h2:sitemap:warning] Sitemap index is available in API version 2024-10 and later"),new Response("Sitemap index not found.",{status:404});let s=new URL(r.url).origin,i=Lg+n.map(l=>{if(!a[l])throw new Error(`[h2:sitemap:error] No data found for type ${l}. Check types passed to \`getSitemapIndex\``);return Ug(l,a[l].pagesCount.count,s)}).join(`
`)+o.map(l=>"  <sitemap><loc>"+(s+(l.startsWith("/")?l:"/"+l))+"</loc></sitemap>").join(`
`)+Mg;return new Response(i,{headers:{"Content-Type":"application/xml","Cache-Control":`max-age=${60*60*24}`}})}async function Fg(e){var C,v,b;let{storefront:t,request:r,params:n,getLink:o,locales:a=[],getChangeFreq:s,noItemsFallback:i="/"}=e;if(!n)throw new Error("[h2:sitemap:error] Remix params object is required to generate a sitemap");if(!r||!r.url)throw new Error("A request object is required to generate a sitemap");if(!t||!t.query)throw new Error("A storefront client is required to generate a index");if(!o)throw new Error("A `getLink` function to generate each resource is required to build a sitemap");if(!n.type||!n.page)throw new Response("No data found",{status:404});let l=n.type,d=Kg[l];if(!d)throw new Response("Not found",{status:404});let m=await t.query(d,{variables:{page:parseInt(n.page,10)}});if(!m)throw console.warn("[h2:sitemap:warning] Sitemap is available in API version 2024-10 and later"),new Response("Sitemap not found.",{status:404});let g=new URL(r.url).origin,y="";return(b=(v=(C=m==null?void 0:m.sitemap)==null?void 0:C.resources)==null?void 0:v.items)!=null&&b.length?y=al+m.sitemap.resources.items.map(j=>Hg({getChangeFreq:s,url:o({type:j.type??l,baseUrl:g,handle:j.handle}),type:l,getLink:o,updatedAt:j.updatedAt,handle:j.handle,metaobjectType:j.type,locales:a,baseUrl:g})).join(`
`)+sl:y=al+`
  <url><loc>${g+i}</loc></url>
`+sl,new Response(y,{headers:{"Content-Type":"application/xml","Cache-Control":`max-age=${60*60*24}`}})}function Ug(e,t,r){let n="";for(let o=1;o<=t;o++)n+=`  <sitemap><loc>${r}/sitemap/${e}/${o}.xml</loc></sitemap>
`;return n}function Hg({url:e,updatedAt:t,locales:r,type:n,getLink:o,baseUrl:a,handle:s,getChangeFreq:i,metaobjectType:l}){return`<url>
  <loc>${e}</loc>
  <lastmod>${t}</lastmod>
  <changefreq>${i?i({type:l??n,handle:s}):"weekly"}</changefreq>
${r.map(d=>Bg(o({type:l??n,baseUrl:a,handle:s,locale:d}),d)).join(`
`)}
</url>
  `.trim()}function Bg(e,t){return`  <xhtml:link rel="alternate" hreflang="${t}" href="${e}" />`}var Vg=`#graphql
    query SitemapProducts($page: Int!) {
      sitemap(type: PRODUCT) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,qg=`#graphql
    query SitemapCollections($page: Int!) {
      sitemap(type: COLLECTION) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,zg=`#graphql
    query SitemapArticles($page: Int!) {
      sitemap(type: ARTICLE) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,Wg=`#graphql
    query SitemapPages($page: Int!) {
      sitemap(type: PAGE) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,Gg=`#graphql
    query SitemapBlogs($page: Int!) {
      sitemap(type: BLOG) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`,Qg=`#graphql
    query SitemapMetaobjects($page: Int!) {
      sitemap(type: METAOBJECT) {
        resources(page: $page) {
          items {
            handle
            updatedAt
            ... on SitemapResourceMetaobject {
              type
            }
          }
        }
      }
    }
`,Yg=`#graphql
query SitemapIndex {
  products: sitemap(type: PRODUCT) {
    pagesCount {
      count
    }
  }
  collections: sitemap(type: COLLECTION) {
    pagesCount {
      count
    }
  }
  articles: sitemap(type: ARTICLE) {
    pagesCount {
      count
    }
  }
  pages: sitemap(type: PAGE) {
    pagesCount {
      count
    }
  }
  blogs: sitemap(type: BLOG) {
    pagesCount {
      count
    }
  }
  metaObjects: sitemap(type: METAOBJECT) {
    pagesCount {
      count
    }
  }
}
`,Kg={products:Vg,articles:zg,collections:qg,pages:Wg,blogs:Gg,metaObjects:Qg};//! @see https://shopify.dev/docs/api/storefront/latest/queries/cart
var Jg=Error.prototype.toString;Error.prototype.toString=function(){return this.stack||Jg.call(this)};function Zg({build:e,mode:t,poweredByHeader:r=!0,getLoadContext:n}){let o=ph(e,t);return async a=>{let s=a.method;if((s==="GET"||s==="HEAD")&&a.body)return new Response(`${s} requests cannot have a body`,{status:400});let i=new URL(a.url);if(i.pathname.includes("//"))return new Response(null,{status:301,headers:{location:i.pathname.replace(/\/+/g,"/")}});let l=n?await n(a):void 0,d=await o(a,l);return r&&d.headers.append("powered-by","Shopify, Hydrogen"),d}}var _r,nt;class Xg{constructor(t,r){Jr(this,"isPending",!1);ga(this,_r);ga(this,nt);ya(this,_r,t),ya(this,nt,r)}static async init(t,r){const n=bh({cookie:{name:"session",httpOnly:!0,path:"/",sameSite:"lax",secrets:r}}),o=await n.getSession(t.headers.get("Cookie")).catch(()=>n.getSession());return new this(n,o)}get has(){return ct(this,nt).has}get get(){return ct(this,nt).get}get flash(){return ct(this,nt).flash}get unset(){return this.isPending=!0,ct(this,nt).unset}get set(){return this.isPending=!0,ct(this,nt).set}destroy(){return ct(this,_r).destroySession(ct(this,nt))}commit(){return this.isPending=!1,ct(this,_r).commitSession(ct(this,nt))}}_r=new WeakMap,nt=new WeakMap;const ey=`#graphql
  fragment Money on MoneyV2 {
    currencyCode
    amount
  }
  fragment CartLine on CartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...Money
      }
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...Money
        }
        price {
          ...Money
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height

        }
        product {
          handle
          title
          id
          vendor
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  fragment CartLineComponent on ComponentizableCartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...Money
      }
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...Money
        }
        price {
          ...Money
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height
        }
        product {
          handle
          title
          id
          vendor
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  fragment CartApiQuery on Cart {
    updatedAt
    id
    appliedGiftCards {
      lastCharacters
      amountUsed {
        ...Money
      }
    }
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      nodes {
        ...CartLine
      }
      nodes {
        ...CartLineComponent
      }
    }
    cost {
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
      totalDutyAmount {
        ...Money
      }
      totalTaxAmount {
        ...Money
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
      applicable
    }
  }
`,Yu=`#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`,ty=`#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${Yu}
`,ry=`#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${Yu}
`;function ny(e){var s;const r=((s=new URL(e.url).pathname.split("/")[1])==null?void 0:s.toUpperCase())??"";let n="",[o,a]=["EN","US"];return/^[A-Z]{2}-[A-Z]{2}$/i.test(r)&&(n="/"+r,[o,a]=r.split("-")),{language:o,country:a,pathPrefix:n}}async function oy(e,t,r){if(!(t!=null&&t.SESSION_SECRET))throw new Error("SESSION_SECRET environment variable is not set");const n=r.waitUntil.bind(r),[o,a]=await Promise.all([caches.open("hydrogen"),Xg.init(e,[t.SESSION_SECRET])]);return{...Eg({env:t,request:e,cache:o,waitUntil:n,session:a,i18n:ny(e),cart:{queryFragment:ey}})}}const N0={async fetch(e,t,r){try{const n=await oy(e,t,r),a=await Zg({build:await Promise.resolve().then(()=>L0),mode:"production",getLoadContext:()=>n})(e);return n.session.isPending&&a.headers.set("Set-Cookie",await n.session.commit()),a.status===404?Dg({request:e,response:a,storefront:n.storefront}):a}catch(n){return console.error(n),new Response("An unexpected error occurred",{status:500})}}};function ay({headTags:e}){return Ku(e),null}var La="text-transform: uppercase;",sy="text-transform: uppercase; font-weight: bold; text-transform: uppercase;font-weight: bold";function Ku(e){console.log(" "),console.log("%cSEO Meta Tags",`${sy}`),console.log(" "),e.forEach(t=>{if(t.tag==="script"){if(console.log("%c• JSON LD ",La),t.children)try{console.table(JSON.parse(t.children),["name","content"])}catch{console.log(t.children)}}else{if(console.log(`%c• ${t.tag} `,La),t.children)if(typeof t.children=="string")console.log(`↳ ${t.children}`);else try{Object.entries(JSON.parse(t.children)).map(([r,n])=>console.log(`↳ ${n}`))}catch{console.log(t.children)}if(t.props.property==="og:image:url"){let r=t.props.content;iy(r).then(n=>{let o=`font-size: 400px; padding: 10px; background: white url(${n}) no-repeat center; background-size: contain;`;console.log("%c• Share image preview",La),console.log("%c  ",o),console.log(`↳ ${r}`)}).catch(n=>{console.error(n)})}Object.entries(t.props).map(([r,n])=>{console.log(`↳ ${r} → ${n}`)})}console.log(" ")})}async function iy(e){let t=await(await(await fetch(e)).blob()).arrayBuffer();return`data:image/png;base64,${ly(t)}`}function ly(e){let t="",r=new Uint8Array(e),n=r.byteLength;for(let o=0;o<n;o++)t+=String.fromCharCode(r[o]);return btoa(t)}const uy=Object.freeze(Object.defineProperty({__proto__:null,default:ay,logSeoTags:Ku},Symbol.toStringTag,{value:"Module"}));var cy=" daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|(?<!cam)scan|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|\\||^<|^[\\w \\.\\-\\(?:\\):%]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d\\s[\\w\\.-]+$|^mozilla/\\d\\.\\d\\s\\(compatible;?(?:\\s\\w+\\/\\d+\\.\\d+)?\\)$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|analyzer|archive|ask jeeves/teoma|audit|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|grab|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|onetrust|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|retriever|rexx;|rigor|rss\\b|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|transcoder|url|validator|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|xtate/",dy=/bot|crawl|http|lighthouse|scan|search|spider/i,rn;function fy(){if(rn instanceof RegExp)return rn;try{rn=new RegExp(cy,"i")}catch{rn=dy}return rn}function hy(e){return!!e&&fy().test(e)}var At={},Jt={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il;function py(){if(il)return Jt;il=1;var e=Lo();function t(u){for(var p="https://reactjs.org/docs/error-decoder.html?invariant="+u,w=1;w<arguments.length;w++)p+="&args[]="+encodeURIComponent(arguments[w]);return"Minified React error #"+u+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=Object.prototype.hasOwnProperty,n=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,o={},a={};function s(u){return r.call(a,u)?!0:r.call(o,u)?!1:n.test(u)?a[u]=!0:(o[u]=!0,!1)}function i(u,p,w,_,T,A,M){this.acceptsBooleans=p===2||p===3||p===4,this.attributeName=_,this.attributeNamespace=T,this.mustUseProperty=w,this.propertyName=u,this.type=p,this.sanitizeURL=A,this.removeEmptyString=M}var l={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(u){l[u]=new i(u,0,!1,u,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(u){var p=u[0];l[p]=new i(p,1,!1,u[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(u){l[u]=new i(u,2,!1,u.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(u){l[u]=new i(u,2,!1,u,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(u){l[u]=new i(u,3,!1,u.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(u){l[u]=new i(u,3,!0,u,null,!1,!1)}),["capture","download"].forEach(function(u){l[u]=new i(u,4,!1,u,null,!1,!1)}),["cols","rows","size","span"].forEach(function(u){l[u]=new i(u,6,!1,u,null,!1,!1)}),["rowSpan","start"].forEach(function(u){l[u]=new i(u,5,!1,u.toLowerCase(),null,!1,!1)});var d=/[\-:]([a-z])/g;function m(u){return u[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(u){var p=u.replace(d,m);l[p]=new i(p,1,!1,u,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(u){var p=u.replace(d,m);l[p]=new i(p,1,!1,u,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(u){var p=u.replace(d,m);l[p]=new i(p,1,!1,u,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(u){l[u]=new i(u,1,!1,u.toLowerCase(),null,!1,!1)}),l.xlinkHref=new i("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(u){l[u]=new i(u,1,!1,u.toLowerCase(),null,!0,!0)});var g={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y=["Webkit","ms","Moz","O"];Object.keys(g).forEach(function(u){y.forEach(function(p){p=p+u.charAt(0).toUpperCase()+u.substring(1),g[p]=g[u]})});var C=/["'&<>]/;function v(u){if(typeof u=="boolean"||typeof u=="number")return""+u;u=""+u;var p=C.exec(u);if(p){var w="",_,T=0;for(_=p.index;_<u.length;_++){switch(u.charCodeAt(_)){case 34:p="&quot;";break;case 38:p="&amp;";break;case 39:p="&#x27;";break;case 60:p="&lt;";break;case 62:p="&gt;";break;default:continue}T!==_&&(w+=u.substring(T,_)),T=_+1,w+=p}u=T!==_?w+u.substring(T,_):w}return u}var b=/([A-Z])/g,j=/^ms-/,$=Array.isArray;function I(u,p){return{insertionMode:u,selectedValue:p}}function L(u,p,w){switch(p){case"select":return I(1,w.value!=null?w.value:w.defaultValue);case"svg":return I(2,null);case"math":return I(3,null);case"foreignObject":return I(1,null);case"table":return I(4,null);case"thead":case"tbody":case"tfoot":return I(5,null);case"colgroup":return I(7,null);case"tr":return I(6,null)}return 4<=u.insertionMode||u.insertionMode===0?I(1,null):u}var F=new Map;function O(u,p,w){if(typeof w!="object")throw Error(t(62));p=!0;for(var _ in w)if(r.call(w,_)){var T=w[_];if(T!=null&&typeof T!="boolean"&&T!==""){if(_.indexOf("--")===0){var A=v(_);T=v((""+T).trim())}else{A=_;var M=F.get(A);M!==void 0||(M=v(A.replace(b,"-$1").toLowerCase().replace(j,"-ms-")),F.set(A,M)),A=M,T=typeof T=="number"?T===0||r.call(g,_)?""+T:T+"px":v((""+T).trim())}p?(p=!1,u.push(' style="',A,":",T)):u.push(";",A,":",T)}}p||u.push('"')}function D(u,p,w,_){switch(w){case"style":O(u,p,_);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<w.length)||w[0]!=="o"&&w[0]!=="O"||w[1]!=="n"&&w[1]!=="N"){if(p=l.hasOwnProperty(w)?l[w]:null,p!==null){switch(typeof _){case"function":case"symbol":return;case"boolean":if(!p.acceptsBooleans)return}switch(w=p.attributeName,p.type){case 3:_&&u.push(" ",w,'=""');break;case 4:_===!0?u.push(" ",w,'=""'):_!==!1&&u.push(" ",w,'="',v(_),'"');break;case 5:isNaN(_)||u.push(" ",w,'="',v(_),'"');break;case 6:!isNaN(_)&&1<=_&&u.push(" ",w,'="',v(_),'"');break;default:p.sanitizeURL&&(_=""+_),u.push(" ",w,'="',v(_),'"')}}else if(s(w)){switch(typeof _){case"function":case"symbol":return;case"boolean":if(p=w.toLowerCase().slice(0,5),p!=="data-"&&p!=="aria-")return}u.push(" ",w,'="',v(_),'"')}}}function H(u,p,w){if(p!=null){if(w!=null)throw Error(t(60));if(typeof p!="object"||!("__html"in p))throw Error(t(61));p=p.__html,p!=null&&u.push(""+p)}}function q(u){var p="";return e.Children.forEach(u,function(w){w!=null&&(p+=w)}),p}function W(u,p,w,_){u.push(ce(w));var T=w=null,A;for(A in p)if(r.call(p,A)){var M=p[A];if(M!=null)switch(A){case"children":w=M;break;case"dangerouslySetInnerHTML":T=M;break;default:D(u,_,A,M)}}return u.push(">"),H(u,T,w),typeof w=="string"?(u.push(v(w)),null):w}var G=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Z=new Map;function ce(u){var p=Z.get(u);if(p===void 0){if(!G.test(u))throw Error(t(65,u));p="<"+u,Z.set(u,p)}return p}function z(u,p,w,_,T){switch(p){case"select":u.push(ce("select"));var A=null,M=null;for(X in w)if(r.call(w,X)){var V=w[X];if(V!=null)switch(X){case"children":A=V;break;case"dangerouslySetInnerHTML":M=V;break;case"defaultValue":case"value":break;default:D(u,_,X,V)}}return u.push(">"),H(u,M,A),A;case"option":M=T.selectedValue,u.push(ce("option"));var Q=V=null,K=null,X=null;for(A in w)if(r.call(w,A)){var Ee=w[A];if(Ee!=null)switch(A){case"children":V=Ee;break;case"selected":K=Ee;break;case"dangerouslySetInnerHTML":X=Ee;break;case"value":Q=Ee;default:D(u,_,A,Ee)}}if(M!=null)if(w=Q!==null?""+Q:q(V),$(M)){for(_=0;_<M.length;_++)if(""+M[_]===w){u.push(' selected=""');break}}else""+M===w&&u.push(' selected=""');else K&&u.push(' selected=""');return u.push(">"),H(u,X,V),V;case"textarea":u.push(ce("textarea")),X=M=A=null;for(V in w)if(r.call(w,V)&&(Q=w[V],Q!=null))switch(V){case"children":X=Q;break;case"value":A=Q;break;case"defaultValue":M=Q;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:D(u,_,V,Q)}if(A===null&&M!==null&&(A=M),u.push(">"),X!=null){if(A!=null)throw Error(t(92));if($(X)&&1<X.length)throw Error(t(93));A=""+X}return typeof A=="string"&&A[0]===`
`&&u.push(`
`),A!==null&&u.push(v(""+A)),null;case"input":u.push(ce("input")),Q=X=V=A=null;for(M in w)if(r.call(w,M)&&(K=w[M],K!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"defaultChecked":Q=K;break;case"defaultValue":V=K;break;case"checked":X=K;break;case"value":A=K;break;default:D(u,_,M,K)}return X!==null?D(u,_,"checked",X):Q!==null&&D(u,_,"checked",Q),A!==null?D(u,_,"value",A):V!==null&&D(u,_,"value",V),u.push("/>"),null;case"menuitem":u.push(ce("menuitem"));for(var Xe in w)if(r.call(w,Xe)&&(A=w[Xe],A!=null))switch(Xe){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:D(u,_,Xe,A)}return u.push(">"),null;case"title":u.push(ce("title")),A=null;for(Ee in w)if(r.call(w,Ee)&&(M=w[Ee],M!=null))switch(Ee){case"children":A=M;break;case"dangerouslySetInnerHTML":throw Error(t(434));default:D(u,_,Ee,M)}return u.push(">"),A;case"listing":case"pre":u.push(ce(p)),M=A=null;for(Q in w)if(r.call(w,Q)&&(V=w[Q],V!=null))switch(Q){case"children":A=V;break;case"dangerouslySetInnerHTML":M=V;break;default:D(u,_,Q,V)}if(u.push(">"),M!=null){if(A!=null)throw Error(t(60));if(typeof M!="object"||!("__html"in M))throw Error(t(61));w=M.__html,w!=null&&(typeof w=="string"&&0<w.length&&w[0]===`
`?u.push(`
`,w):u.push(""+w))}return typeof A=="string"&&A[0]===`
`&&u.push(`
`),A;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":u.push(ce(p));for(var et in w)if(r.call(w,et)&&(A=w[et],A!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,p));default:D(u,_,et,A)}return u.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return W(u,w,p,_);case"html":return T.insertionMode===0&&u.push("<!DOCTYPE html>"),W(u,w,p,_);default:if(p.indexOf("-")===-1&&typeof w.is!="string")return W(u,w,p,_);u.push(ce(p)),M=A=null;for(K in w)if(r.call(w,K)&&(V=w[K],V!=null))switch(K){case"children":A=V;break;case"dangerouslySetInnerHTML":M=V;break;case"style":O(u,_,V);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:s(K)&&typeof V!="function"&&typeof V!="symbol"&&u.push(" ",K,'="',v(V),'"')}return u.push(">"),H(u,M,A),A}}function J(u,p,w){if(u.push('<!--$?--><template id="'),w===null)throw Error(t(395));return u.push(w),u.push('"></template>')}function ue(u,p,w,_){switch(w.insertionMode){case 0:case 1:return u.push('<div hidden id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 2:return u.push('<svg aria-hidden="true" style="display:none" id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 3:return u.push('<math aria-hidden="true" style="display:none" id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 4:return u.push('<table hidden id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 5:return u.push('<table hidden><tbody id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 6:return u.push('<table hidden><tr id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');case 7:return u.push('<table hidden><colgroup id="'),u.push(p.segmentPrefix),p=_.toString(16),u.push(p),u.push('">');default:throw Error(t(397))}}function de(u,p){switch(p.insertionMode){case 0:case 1:return u.push("</div>");case 2:return u.push("</svg>");case 3:return u.push("</math>");case 4:return u.push("</table>");case 5:return u.push("</tbody></table>");case 6:return u.push("</tr></table>");case 7:return u.push("</colgroup></table>");default:throw Error(t(397))}}var oe=/[<\u2028\u2029]/g;function ge(u){return JSON.stringify(u).replace(oe,function(p){switch(p){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function Se(u,p){return p=p===void 0?"":p,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:p+"P:",segmentPrefix:p+"S:",boundaryPrefix:p+"B:",idPrefix:p,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:u}}function fe(u,p,w,_){return w.generateStaticMarkup?(u.push(v(p)),!1):(p===""?u=_:(_&&u.push("<!-- -->"),u.push(v(p)),u=!0),u)}var R=Object.assign,B=Symbol.for("react.element"),ee=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),pe=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),it=Symbol.for("react.scope"),jn=Symbol.for("react.debug_trace_mode"),or=Symbol.for("react.legacy_hidden"),Ko=Symbol.for("react.default_value"),ar=Symbol.iterator;function Ft(u){if(u==null)return null;if(typeof u=="function")return u.displayName||u.name||null;if(typeof u=="string")return u;switch(u){case ie:return"Fragment";case ee:return"Portal";case he:return"Profiler";case le:return"StrictMode";case be:return"Suspense";case Ne:return"SuspenseList"}if(typeof u=="object")switch(u.$$typeof){case pe:return(u.displayName||"Context")+".Consumer";case ye:return(u._context.displayName||"Context")+".Provider";case ae:var p=u.render;return u=u.displayName,u||(u=p.displayName||p.name||"",u=u!==""?"ForwardRef("+u+")":"ForwardRef"),u;case Et:return p=u.displayName||null,p!==null?p:Ft(u.type)||"Memo";case Ae:p=u._payload,u=u._init;try{return Ft(u(p))}catch{}}return null}var sr={};function Rn(u,p){if(u=u.contextTypes,!u)return sr;var w={},_;for(_ in u)w[_]=p[_];return w}var lt=null;function ke(u,p){if(u!==p){u.context._currentValue2=u.parentValue,u=u.parent;var w=p.parent;if(u===null){if(w!==null)throw Error(t(401))}else{if(w===null)throw Error(t(401));ke(u,w)}p.context._currentValue2=p.value}}function An(u){u.context._currentValue2=u.parentValue,u=u.parent,u!==null&&An(u)}function Pn(u){var p=u.parent;p!==null&&Pn(p),u.context._currentValue2=u.value}function In(u,p){if(u.context._currentValue2=u.parentValue,u=u.parent,u===null)throw Error(t(402));u.depth===p.depth?ke(u,p):In(u,p)}function kn(u,p){var w=p.parent;if(w===null)throw Error(t(402));u.depth===w.depth?ke(u,w):kn(u,w),p.context._currentValue2=p.value}function ir(u){var p=lt;p!==u&&(p===null?Pn(u):u===null?An(p):p.depth===u.depth?ke(p,u):p.depth>u.depth?In(p,u):kn(p,u),lt=u)}var Tn={isMounted:function(){return!1},enqueueSetState:function(u,p){u=u._reactInternals,u.queue!==null&&u.queue.push(p)},enqueueReplaceState:function(u,p){u=u._reactInternals,u.replace=!0,u.queue=[p]},enqueueForceUpdate:function(){}};function Dn(u,p,w,_){var T=u.state!==void 0?u.state:null;u.updater=Tn,u.props=w,u.state=T;var A={queue:[],replace:!1};u._reactInternals=A;var M=p.contextType;if(u.context=typeof M=="object"&&M!==null?M._currentValue2:_,M=p.getDerivedStateFromProps,typeof M=="function"&&(M=M(w,T),T=M==null?T:R({},T,M),u.state=T),typeof p.getDerivedStateFromProps!="function"&&typeof u.getSnapshotBeforeUpdate!="function"&&(typeof u.UNSAFE_componentWillMount=="function"||typeof u.componentWillMount=="function"))if(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Tn.enqueueReplaceState(u,u.state,null),A.queue!==null&&0<A.queue.length)if(p=A.queue,M=A.replace,A.queue=null,A.replace=!1,M&&p.length===1)u.state=p[0];else{for(A=M?p[0]:u.state,T=!0,M=M?1:0;M<p.length;M++){var V=p[M];V=typeof V=="function"?V.call(u,A,w,_):V,V!=null&&(T?(T=!1,A=R({},A,V)):R(A,V))}u.state=A}else A.queue=null}var Jo={id:1,overflow:""};function Tr(u,p,w){var _=u.id;u=u.overflow;var T=32-lr(_)-1;_&=~(1<<T),w+=1;var A=32-lr(p)+T;if(30<A){var M=T-T%5;return A=(_&(1<<M)-1).toString(32),_>>=M,T-=M,{id:1<<32-lr(p)+T|w<<T|_,overflow:A+u}}return{id:1<<A|w<<T|_,overflow:u}}var lr=Math.clz32?Math.clz32:ea,Zo=Math.log,Xo=Math.LN2;function ea(u){return u>>>=0,u===0?32:31-(Zo(u)/Xo|0)|0}function ta(u,p){return u===p&&(u!==0||1/u===1/p)||u!==u&&p!==p}var ra=typeof Object.is=="function"?Object.is:ta,Ye=null,Dr=null,ur=null,me=null,Ut=!1,cr=!1,Ht=0,ut=null,dr=0;function mt(){if(Ye===null)throw Error(t(321));return Ye}function On(){if(0<dr)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function Or(){return me===null?ur===null?(Ut=!1,ur=me=On()):(Ut=!0,me=ur):me.next===null?(Ut=!1,me=me.next=On()):(Ut=!0,me=me.next),me}function Lr(){Dr=Ye=null,cr=!1,ur=null,dr=0,me=ut=null}function Ln(u,p){return typeof p=="function"?p(u):p}function Mn(u,p,w){if(Ye=mt(),me=Or(),Ut){var _=me.queue;if(p=_.dispatch,ut!==null&&(w=ut.get(_),w!==void 0)){ut.delete(_),_=me.memoizedState;do _=u(_,w.action),w=w.next;while(w!==null);return me.memoizedState=_,[_,p]}return[me.memoizedState,p]}return u=u===Ln?typeof p=="function"?p():p:w!==void 0?w(p):p,me.memoizedState=u,u=me.queue={last:null,dispatch:null},u=u.dispatch=na.bind(null,Ye,u),[me.memoizedState,u]}function Nn(u,p){if(Ye=mt(),me=Or(),p=p===void 0?null:p,me!==null){var w=me.memoizedState;if(w!==null&&p!==null){var _=w[1];e:if(_===null)_=!1;else{for(var T=0;T<_.length&&T<p.length;T++)if(!ra(p[T],_[T])){_=!1;break e}_=!0}if(_)return w[0]}}return u=u(),me.memoizedState=[u,p],u}function na(u,p,w){if(25<=dr)throw Error(t(301));if(u===Ye)if(cr=!0,u={action:w,next:null},ut===null&&(ut=new Map),w=ut.get(p),w===void 0)ut.set(p,u);else{for(p=w;p.next!==null;)p=p.next;p.next=u}}function oa(){throw Error(t(394))}function fr(){}var Fn={readContext:function(u){return u._currentValue2},useContext:function(u){return mt(),u._currentValue2},useMemo:Nn,useReducer:Mn,useRef:function(u){Ye=mt(),me=Or();var p=me.memoizedState;return p===null?(u={current:u},me.memoizedState=u):p},useState:function(u){return Mn(Ln,u)},useInsertionEffect:fr,useLayoutEffect:function(){},useCallback:function(u,p){return Nn(function(){return u},p)},useImperativeHandle:fr,useEffect:fr,useDebugValue:fr,useDeferredValue:function(u){return mt(),u},useTransition:function(){return mt(),[!1,oa]},useId:function(){var u=Dr.treeContext,p=u.overflow;u=u.id,u=(u&~(1<<32-lr(u)-1)).toString(32)+p;var w=hr;if(w===null)throw Error(t(404));return p=Ht++,u=":"+w.idPrefix+"R"+u,0<p&&(u+="H"+p.toString(32)),u+":"},useMutableSource:function(u,p){return mt(),p(u._source)},useSyncExternalStore:function(u,p,w){if(w===void 0)throw Error(t(407));return w()}},hr=null,Mr=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function aa(u){return console.error(u),null}function Bt(){}function sa(u,p,w,_,T,A,M,V,Q){var K=[],X=new Set;return p={destination:null,responseState:p,progressiveChunkSize:_===void 0?12800:_,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:X,pingedTasks:K,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:T===void 0?aa:T,onAllReady:Bt,onShellReady:M===void 0?Bt:M,onShellError:Bt,onFatalError:Bt},w=pr(p,0,null,w,!1,!1),w.parentFlushed=!0,u=Nr(p,u,null,w,X,sr,null,Jo),K.push(u),p}function Nr(u,p,w,_,T,A,M,V){u.allPendingTasks++,w===null?u.pendingRootTasks++:w.pendingTasks++;var Q={node:p,ping:function(){var K=u.pingedTasks;K.push(Q),K.length===1&&zn(u)},blockedBoundary:w,blockedSegment:_,abortSet:T,legacyContext:A,context:M,treeContext:V};return T.add(Q),Q}function pr(u,p,w,_,T,A){return{status:0,id:-1,index:p,parentFlushed:!1,chunks:[],children:[],formatContext:_,boundary:w,lastPushedText:T,textEmbedded:A}}function Vt(u,p){if(u=u.onError(p),u!=null&&typeof u!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof u+'" instead');return u}function mr(u,p){var w=u.onShellError;w(p),w=u.onFatalError,w(p),u.destination!==null?(u.status=2,u.destination.destroy(p)):(u.status=1,u.fatalError=p)}function Un(u,p,w,_,T){for(Ye={},Dr=p,Ht=0,u=w(_,T);cr;)cr=!1,Ht=0,dr+=1,me=null,u=w(_,T);return Lr(),u}function Hn(u,p,w,_){var T=w.render(),A=_.childContextTypes;if(A!=null){var M=p.legacyContext;if(typeof w.getChildContext!="function")_=M;else{w=w.getChildContext();for(var V in w)if(!(V in A))throw Error(t(108,Ft(_)||"Unknown",V));_=R({},M,w)}p.legacyContext=_,Te(u,p,T),p.legacyContext=M}else Te(u,p,T)}function Bn(u,p){if(u&&u.defaultProps){p=R({},p),u=u.defaultProps;for(var w in u)p[w]===void 0&&(p[w]=u[w]);return p}return p}function Fr(u,p,w,_,T){if(typeof w=="function")if(w.prototype&&w.prototype.isReactComponent){T=Rn(w,p.legacyContext);var A=w.contextType;A=new w(_,typeof A=="object"&&A!==null?A._currentValue2:T),Dn(A,w,_,T),Hn(u,p,A,w)}else{A=Rn(w,p.legacyContext),T=Un(u,p,w,_,A);var M=Ht!==0;if(typeof T=="object"&&T!==null&&typeof T.render=="function"&&T.$$typeof===void 0)Dn(T,w,_,A),Hn(u,p,T,w);else if(M){_=p.treeContext,p.treeContext=Tr(_,1,0);try{Te(u,p,T)}finally{p.treeContext=_}}else Te(u,p,T)}else if(typeof w=="string"){switch(T=p.blockedSegment,A=z(T.chunks,w,_,u.responseState,T.formatContext),T.lastPushedText=!1,M=T.formatContext,T.formatContext=L(M,w,_),Ur(u,p,A),T.formatContext=M,w){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:T.chunks.push("</",w,">")}T.lastPushedText=!1}else{switch(w){case or:case jn:case le:case he:case ie:Te(u,p,_.children);return;case Ne:Te(u,p,_.children);return;case it:throw Error(t(343));case be:e:{w=p.blockedBoundary,T=p.blockedSegment,A=_.fallback,_=_.children,M=new Set;var V={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:M,errorDigest:null},Q=pr(u,T.chunks.length,V,T.formatContext,!1,!1);T.children.push(Q),T.lastPushedText=!1;var K=pr(u,0,null,T.formatContext,!1,!1);K.parentFlushed=!0,p.blockedBoundary=V,p.blockedSegment=K;try{if(Ur(u,p,_),u.responseState.generateStaticMarkup||K.lastPushedText&&K.textEmbedded&&K.chunks.push("<!-- -->"),K.status=1,_t(V,K),V.pendingTasks===0)break e}catch(X){K.status=4,V.forceClientRender=!0,V.errorDigest=Vt(u,X)}finally{p.blockedBoundary=w,p.blockedSegment=T}p=Nr(u,A,w,Q,M,p.legacyContext,p.context,p.treeContext),u.pingedTasks.push(p)}return}if(typeof w=="object"&&w!==null)switch(w.$$typeof){case ae:if(_=Un(u,p,w.render,_,T),Ht!==0){w=p.treeContext,p.treeContext=Tr(w,1,0);try{Te(u,p,_)}finally{p.treeContext=w}}else Te(u,p,_);return;case Et:w=w.type,_=Bn(w,_),Fr(u,p,w,_,T);return;case ye:if(T=_.children,w=w._context,_=_.value,A=w._currentValue2,w._currentValue2=_,M=lt,lt=_={parent:M,depth:M===null?0:M.depth+1,context:w,parentValue:A,value:_},p.context=_,Te(u,p,T),u=lt,u===null)throw Error(t(403));_=u.parentValue,u.context._currentValue2=_===Ko?u.context._defaultValue:_,u=lt=u.parent,p.context=u;return;case pe:_=_.children,_=_(w._currentValue2),Te(u,p,_);return;case Ae:T=w._init,w=T(w._payload),_=Bn(w,_),Fr(u,p,w,_,void 0);return}throw Error(t(130,w==null?w:typeof w,""))}}function Te(u,p,w){if(p.node=w,typeof w=="object"&&w!==null){switch(w.$$typeof){case B:Fr(u,p,w.type,w.props,w.ref);return;case ee:throw Error(t(257));case Ae:var _=w._init;w=_(w._payload),Te(u,p,w);return}if($(w)){Vn(u,p,w);return}if(w===null||typeof w!="object"?_=null:(_=ar&&w[ar]||w["@@iterator"],_=typeof _=="function"?_:null),_&&(_=_.call(w))){if(w=_.next(),!w.done){var T=[];do T.push(w.value),w=_.next();while(!w.done);Vn(u,p,T)}return}throw u=Object.prototype.toString.call(w),Error(t(31,u==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":u))}typeof w=="string"?(_=p.blockedSegment,_.lastPushedText=fe(p.blockedSegment.chunks,w,u.responseState,_.lastPushedText)):typeof w=="number"&&(_=p.blockedSegment,_.lastPushedText=fe(p.blockedSegment.chunks,""+w,u.responseState,_.lastPushedText))}function Vn(u,p,w){for(var _=w.length,T=0;T<_;T++){var A=p.treeContext;p.treeContext=Tr(A,_,T);try{Ur(u,p,w[T])}finally{p.treeContext=A}}}function Ur(u,p,w){var _=p.blockedSegment.formatContext,T=p.legacyContext,A=p.context;try{return Te(u,p,w)}catch(Q){if(Lr(),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"){w=Q;var M=p.blockedSegment,V=pr(u,M.chunks.length,null,M.formatContext,M.lastPushedText,!0);M.children.push(V),M.lastPushedText=!1,u=Nr(u,p.node,p.blockedBoundary,V,p.abortSet,p.legacyContext,p.context,p.treeContext).ping,w.then(u,u),p.blockedSegment.formatContext=_,p.legacyContext=T,p.context=A,ir(A)}else throw p.blockedSegment.formatContext=_,p.legacyContext=T,p.context=A,ir(A),Q}}function Hr(u){var p=u.blockedBoundary;u=u.blockedSegment,u.status=3,$t(this,p,u)}function qn(u,p,w){var _=u.blockedBoundary;u.blockedSegment.status=3,_===null?(p.allPendingTasks--,p.status!==2&&(p.status=2,p.destination!==null&&p.destination.push(null))):(_.pendingTasks--,_.forceClientRender||(_.forceClientRender=!0,u=w===void 0?Error(t(432)):w,_.errorDigest=p.onError(u),_.parentFlushed&&p.clientRenderedBoundaries.push(_)),_.fallbackAbortableTasks.forEach(function(T){return qn(T,p,w)}),_.fallbackAbortableTasks.clear(),p.allPendingTasks--,p.allPendingTasks===0&&(_=p.onAllReady,_()))}function _t(u,p){if(p.chunks.length===0&&p.children.length===1&&p.children[0].boundary===null){var w=p.children[0];w.id=p.id,w.parentFlushed=!0,w.status===1&&_t(u,w)}else u.completedSegments.push(p)}function $t(u,p,w){if(p===null){if(w.parentFlushed){if(u.completedRootSegment!==null)throw Error(t(389));u.completedRootSegment=w}u.pendingRootTasks--,u.pendingRootTasks===0&&(u.onShellError=Bt,p=u.onShellReady,p())}else p.pendingTasks--,p.forceClientRender||(p.pendingTasks===0?(w.parentFlushed&&w.status===1&&_t(p,w),p.parentFlushed&&u.completedBoundaries.push(p),p.fallbackAbortableTasks.forEach(Hr,u),p.fallbackAbortableTasks.clear()):w.parentFlushed&&w.status===1&&(_t(p,w),p.completedSegments.length===1&&p.parentFlushed&&u.partialBoundaries.push(p)));u.allPendingTasks--,u.allPendingTasks===0&&(u=u.onAllReady,u())}function zn(u){if(u.status!==2){var p=lt,w=Mr.current;Mr.current=Fn;var _=hr;hr=u.responseState;try{var T=u.pingedTasks,A;for(A=0;A<T.length;A++){var M=T[A],V=u,Q=M.blockedSegment;if(Q.status===0){ir(M.context);try{Te(V,M,M.node),V.responseState.generateStaticMarkup||Q.lastPushedText&&Q.textEmbedded&&Q.chunks.push("<!-- -->"),M.abortSet.delete(M),Q.status=1,$t(V,M.blockedBoundary,Q)}catch(Fe){if(Lr(),typeof Fe=="object"&&Fe!==null&&typeof Fe.then=="function"){var K=M.ping;Fe.then(K,K)}else{M.abortSet.delete(M),Q.status=4;var X=M.blockedBoundary,Ee=Fe,Xe=Vt(V,Ee);if(X===null?mr(V,Ee):(X.pendingTasks--,X.forceClientRender||(X.forceClientRender=!0,X.errorDigest=Xe,X.parentFlushed&&V.clientRenderedBoundaries.push(X))),V.allPendingTasks--,V.allPendingTasks===0){var et=V.onAllReady;et()}}}finally{}}}T.splice(0,A),u.destination!==null&&gr(u,u.destination)}catch(Fe){Vt(u,Fe),mr(u,Fe)}finally{hr=_,Mr.current=w,w===Fn&&ir(p)}}}function qt(u,p,w){switch(w.parentFlushed=!0,w.status){case 0:var _=w.id=u.nextSegmentId++;return w.lastPushedText=!1,w.textEmbedded=!1,u=u.responseState,p.push('<template id="'),p.push(u.placeholderPrefix),u=_.toString(16),p.push(u),p.push('"></template>');case 1:w.status=2;var T=!0;_=w.chunks;var A=0;w=w.children;for(var M=0;M<w.length;M++){for(T=w[M];A<T.index;A++)p.push(_[A]);T=zt(u,p,T)}for(;A<_.length-1;A++)p.push(_[A]);return A<_.length&&(T=p.push(_[A])),T;default:throw Error(t(390))}}function zt(u,p,w){var _=w.boundary;if(_===null)return qt(u,p,w);if(_.parentFlushed=!0,_.forceClientRender)return u.responseState.generateStaticMarkup||(_=_.errorDigest,p.push("<!--$!-->"),p.push("<template"),_&&(p.push(' data-dgst="'),_=v(_),p.push(_),p.push('"')),p.push("></template>")),qt(u,p,w),u=u.responseState.generateStaticMarkup?!0:p.push("<!--/$-->"),u;if(0<_.pendingTasks){_.rootSegmentID=u.nextSegmentId++,0<_.completedSegments.length&&u.partialBoundaries.push(_);var T=u.responseState,A=T.nextSuspenseID++;return T=T.boundaryPrefix+A.toString(16),_=_.id=T,J(p,u.responseState,_),qt(u,p,w),p.push("<!--/$-->")}if(_.byteSize>u.progressiveChunkSize)return _.rootSegmentID=u.nextSegmentId++,u.completedBoundaries.push(_),J(p,u.responseState,_.id),qt(u,p,w),p.push("<!--/$-->");if(u.responseState.generateStaticMarkup||p.push("<!--$-->"),w=_.completedSegments,w.length!==1)throw Error(t(391));return zt(u,p,w[0]),u=u.responseState.generateStaticMarkup?!0:p.push("<!--/$-->"),u}function Br(u,p,w){return ue(p,u.responseState,w.formatContext,w.id),zt(u,p,w),de(p,w.formatContext)}function Vr(u,p,w){for(var _=w.completedSegments,T=0;T<_.length;T++)qr(u,p,w,_[T]);if(_.length=0,u=u.responseState,_=w.id,w=w.rootSegmentID,p.push(u.startInlineScript),u.sentCompleteBoundaryFunction?p.push('$RC("'):(u.sentCompleteBoundaryFunction=!0,p.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),_===null)throw Error(t(395));return w=w.toString(16),p.push(_),p.push('","'),p.push(u.segmentPrefix),p.push(w),p.push('")<\/script>')}function qr(u,p,w,_){if(_.status===2)return!0;var T=_.id;if(T===-1){if((_.id=w.rootSegmentID)===-1)throw Error(t(392));return Br(u,p,_)}return Br(u,p,_),u=u.responseState,p.push(u.startInlineScript),u.sentCompleteSegmentFunction?p.push('$RS("'):(u.sentCompleteSegmentFunction=!0,p.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),p.push(u.segmentPrefix),T=T.toString(16),p.push(T),p.push('","'),p.push(u.placeholderPrefix),p.push(T),p.push('")<\/script>')}function gr(u,p){try{var w=u.completedRootSegment;if(w!==null&&u.pendingRootTasks===0){zt(u,p,w),u.completedRootSegment=null;var _=u.responseState.bootstrapChunks;for(w=0;w<_.length-1;w++)p.push(_[w]);w<_.length&&p.push(_[w])}var T=u.clientRenderedBoundaries,A;for(A=0;A<T.length;A++){var M=T[A];_=p;var V=u.responseState,Q=M.id,K=M.errorDigest,X=M.errorMessage,Ee=M.errorComponentStack;if(_.push(V.startInlineScript),V.sentClientRenderFunction?_.push('$RX("'):(V.sentClientRenderFunction=!0,_.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),Q===null)throw Error(t(395));if(_.push(Q),_.push('"'),K||X||Ee){_.push(",");var Xe=ge(K||"");_.push(Xe)}if(X||Ee){_.push(",");var et=ge(X||"");_.push(et)}if(Ee){_.push(",");var Fe=ge(Ee);_.push(Fe)}if(!_.push(")<\/script>")){u.destination=null,A++,T.splice(0,A);return}}T.splice(0,A);var Wt=u.completedBoundaries;for(A=0;A<Wt.length;A++)if(!Vr(u,p,Wt[A])){u.destination=null,A++,Wt.splice(0,A);return}Wt.splice(0,A);var gt=u.partialBoundaries;for(A=0;A<gt.length;A++){var Wr=gt[A];e:{T=u,M=p;var Gt=Wr.completedSegments;for(V=0;V<Gt.length;V++)if(!qr(T,M,Wr,Gt[V])){V++,Gt.splice(0,V);var Qn=!1;break e}Gt.splice(0,V),Qn=!0}if(!Qn){u.destination=null,A++,gt.splice(0,A);return}}gt.splice(0,A);var jt=u.completedBoundaries;for(A=0;A<jt.length;A++)if(!Vr(u,p,jt[A])){u.destination=null,A++,jt.splice(0,A);return}jt.splice(0,A)}finally{u.allPendingTasks===0&&u.pingedTasks.length===0&&u.clientRenderedBoundaries.length===0&&u.completedBoundaries.length===0&&p.push(null)}}function Wn(u,p){try{var w=u.abortableTasks;w.forEach(function(_){return qn(_,u,p)}),w.clear(),u.destination!==null&&gr(u,u.destination)}catch(_){Vt(u,_),mr(u,_)}}function Gn(){}function zr(u,p,w,_){var T=!1,A=null,M="",V={push:function(K){return K!==null&&(M+=K),!0},destroy:function(K){T=!0,A=K}},Q=!1;if(u=sa(u,Se(w,p?p.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,Gn,void 0,function(){Q=!0}),zn(u),Wn(u,_),u.status===1)u.status=2,V.destroy(u.fatalError);else if(u.status!==2&&u.destination===null){u.destination=V;try{gr(u,V)}catch(K){Vt(u,K),mr(u,K)}}if(T)throw A;if(!Q)throw Error(t(426));return M}return Jt.renderToNodeStream=function(){throw Error(t(207))},Jt.renderToStaticMarkup=function(u,p){return zr(u,p,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Jt.renderToStaticNodeStream=function(){throw Error(t(208))},Jt.renderToString=function(u,p){return zr(u,p,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Jt.version="18.3.1",Jt}var ho={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll;function my(){if(ll)return ho;ll=1;var e=Lo();function t(c){for(var h="https://reactjs.org/docs/error-decoder.html?invariant="+c,x=1;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x]);return"Minified React error #"+c+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=null,n=0;function o(c,h){if(h.length!==0)if(512<h.length)0<n&&(c.enqueue(new Uint8Array(r.buffer,0,n)),r=new Uint8Array(512),n=0),c.enqueue(h);else{var x=r.length-n;x<h.length&&(x===0?c.enqueue(r):(r.set(h.subarray(0,x),n),c.enqueue(r),h=h.subarray(x)),r=new Uint8Array(512),n=0),r.set(h,n),n+=h.length}}function a(c,h){return o(c,h),!0}function s(c){r&&0<n&&(c.enqueue(new Uint8Array(r.buffer,0,n)),r=null,n=0)}var i=new TextEncoder;function l(c){return i.encode(c)}function d(c){return i.encode(c)}function m(c,h){typeof c.error=="function"?c.error(h):c.close()}var g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},v={};function b(c){return g.call(v,c)?!0:g.call(C,c)?!1:y.test(c)?v[c]=!0:(C[c]=!0,!1)}function j(c,h,x,E,k,P,N){this.acceptsBooleans=h===2||h===3||h===4,this.attributeName=E,this.attributeNamespace=k,this.mustUseProperty=x,this.propertyName=c,this.type=h,this.sanitizeURL=P,this.removeEmptyString=N}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(c){$[c]=new j(c,0,!1,c,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(c){var h=c[0];$[h]=new j(h,1,!1,c[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(c){$[c]=new j(c,2,!1,c.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(c){$[c]=new j(c,2,!1,c,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(c){$[c]=new j(c,3,!1,c.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(c){$[c]=new j(c,3,!0,c,null,!1,!1)}),["capture","download"].forEach(function(c){$[c]=new j(c,4,!1,c,null,!1,!1)}),["cols","rows","size","span"].forEach(function(c){$[c]=new j(c,6,!1,c,null,!1,!1)}),["rowSpan","start"].forEach(function(c){$[c]=new j(c,5,!1,c.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function L(c){return c[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(c){var h=c.replace(I,L);$[h]=new j(h,1,!1,c,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(c){var h=c.replace(I,L);$[h]=new j(h,1,!1,c,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(c){var h=c.replace(I,L);$[h]=new j(h,1,!1,c,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(c){$[c]=new j(c,1,!1,c.toLowerCase(),null,!1,!1)}),$.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(c){$[c]=new j(c,1,!1,c.toLowerCase(),null,!0,!0)});var F={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O=["Webkit","ms","Moz","O"];Object.keys(F).forEach(function(c){O.forEach(function(h){h=h+c.charAt(0).toUpperCase()+c.substring(1),F[h]=F[c]})});var D=/["'&<>]/;function H(c){if(typeof c=="boolean"||typeof c=="number")return""+c;c=""+c;var h=D.exec(c);if(h){var x="",E,k=0;for(E=h.index;E<c.length;E++){switch(c.charCodeAt(E)){case 34:h="&quot;";break;case 38:h="&amp;";break;case 39:h="&#x27;";break;case 60:h="&lt;";break;case 62:h="&gt;";break;default:continue}k!==E&&(x+=c.substring(k,E)),k=E+1,x+=h}c=k!==E?x+c.substring(k,E):x}return c}var q=/([A-Z])/g,W=/^ms-/,G=Array.isArray,Z=d("<script>"),ce=d("<\/script>"),z=d('<script src="'),J=d('<script type="module" src="'),ue=d('" async=""><\/script>'),de=/(<\/|<)(s)(cript)/gi;function oe(c,h,x,E){return""+h+(x==="s"?"\\u0073":"\\u0053")+E}function ge(c,h,x,E,k){c=c===void 0?"":c,h=h===void 0?Z:d('<script nonce="'+H(h)+'">');var P=[];if(x!==void 0&&P.push(h,l((""+x).replace(de,oe)),ce),E!==void 0)for(x=0;x<E.length;x++)P.push(z,l(H(E[x])),ue);if(k!==void 0)for(E=0;E<k.length;E++)P.push(J,l(H(k[E])),ue);return{bootstrapChunks:P,startInlineScript:h,placeholderPrefix:d(c+"P:"),segmentPrefix:d(c+"S:"),boundaryPrefix:c+"B:",idPrefix:c,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Se(c,h){return{insertionMode:c,selectedValue:h}}function fe(c){return Se(c==="http://www.w3.org/2000/svg"?2:c==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function R(c,h,x){switch(h){case"select":return Se(1,x.value!=null?x.value:x.defaultValue);case"svg":return Se(2,null);case"math":return Se(3,null);case"foreignObject":return Se(1,null);case"table":return Se(4,null);case"thead":case"tbody":case"tfoot":return Se(5,null);case"colgroup":return Se(7,null);case"tr":return Se(6,null)}return 4<=c.insertionMode||c.insertionMode===0?Se(1,null):c}var B=d("<!-- -->");function ee(c,h,x,E){return h===""?E:(E&&c.push(B),c.push(l(H(h))),!0)}var ie=new Map,le=d(' style="'),he=d(":"),ye=d(";");function pe(c,h,x){if(typeof x!="object")throw Error(t(62));h=!0;for(var E in x)if(g.call(x,E)){var k=x[E];if(k!=null&&typeof k!="boolean"&&k!==""){if(E.indexOf("--")===0){var P=l(H(E));k=l(H((""+k).trim()))}else{P=E;var N=ie.get(P);N!==void 0||(N=d(H(P.replace(q,"-$1").toLowerCase().replace(W,"-ms-"))),ie.set(P,N)),P=N,k=typeof k=="number"?k===0||g.call(F,E)?l(""+k):l(k+"px"):l(H((""+k).trim()))}h?(h=!1,c.push(le,P,he,k)):c.push(ye,P,he,k)}}h||c.push(Ne)}var ae=d(" "),be=d('="'),Ne=d('"'),Et=d('=""');function Ae(c,h,x,E){switch(x){case"style":pe(c,h,E);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<x.length)||x[0]!=="o"&&x[0]!=="O"||x[1]!=="n"&&x[1]!=="N"){if(h=$.hasOwnProperty(x)?$[x]:null,h!==null){switch(typeof E){case"function":case"symbol":return;case"boolean":if(!h.acceptsBooleans)return}switch(x=l(h.attributeName),h.type){case 3:E&&c.push(ae,x,Et);break;case 4:E===!0?c.push(ae,x,Et):E!==!1&&c.push(ae,x,be,l(H(E)),Ne);break;case 5:isNaN(E)||c.push(ae,x,be,l(H(E)),Ne);break;case 6:!isNaN(E)&&1<=E&&c.push(ae,x,be,l(H(E)),Ne);break;default:h.sanitizeURL&&(E=""+E),c.push(ae,x,be,l(H(E)),Ne)}}else if(b(x)){switch(typeof E){case"function":case"symbol":return;case"boolean":if(h=x.toLowerCase().slice(0,5),h!=="data-"&&h!=="aria-")return}c.push(ae,l(x),be,l(H(E)),Ne)}}}var it=d(">"),jn=d("/>");function or(c,h,x){if(h!=null){if(x!=null)throw Error(t(60));if(typeof h!="object"||!("__html"in h))throw Error(t(61));h=h.__html,h!=null&&c.push(l(""+h))}}function Ko(c){var h="";return e.Children.forEach(c,function(x){x!=null&&(h+=x)}),h}var ar=d(' selected=""');function Ft(c,h,x,E){c.push(ke(x));var k=x=null,P;for(P in h)if(g.call(h,P)){var N=h[P];if(N!=null)switch(P){case"children":x=N;break;case"dangerouslySetInnerHTML":k=N;break;default:Ae(c,E,P,N)}}return c.push(it),or(c,k,x),typeof x=="string"?(c.push(l(H(x))),null):x}var sr=d(`
`),Rn=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,lt=new Map;function ke(c){var h=lt.get(c);if(h===void 0){if(!Rn.test(c))throw Error(t(65,c));h=d("<"+c),lt.set(c,h)}return h}var An=d("<!DOCTYPE html>");function Pn(c,h,x,E,k){switch(h){case"select":c.push(ke("select"));var P=null,N=null;for(te in x)if(g.call(x,te)){var U=x[te];if(U!=null)switch(te){case"children":P=U;break;case"dangerouslySetInnerHTML":N=U;break;case"defaultValue":case"value":break;default:Ae(c,E,te,U)}}return c.push(it),or(c,N,P),P;case"option":N=k.selectedValue,c.push(ke("option"));var Y=U=null,re=null,te=null;for(P in x)if(g.call(x,P)){var xe=x[P];if(xe!=null)switch(P){case"children":U=xe;break;case"selected":re=xe;break;case"dangerouslySetInnerHTML":te=xe;break;case"value":Y=xe;default:Ae(c,E,P,xe)}}if(N!=null)if(x=Y!==null?""+Y:Ko(U),G(N)){for(E=0;E<N.length;E++)if(""+N[E]===x){c.push(ar);break}}else""+N===x&&c.push(ar);else re&&c.push(ar);return c.push(it),or(c,te,U),U;case"textarea":c.push(ke("textarea")),te=N=P=null;for(U in x)if(g.call(x,U)&&(Y=x[U],Y!=null))switch(U){case"children":te=Y;break;case"value":P=Y;break;case"defaultValue":N=Y;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:Ae(c,E,U,Y)}if(P===null&&N!==null&&(P=N),c.push(it),te!=null){if(P!=null)throw Error(t(92));if(G(te)&&1<te.length)throw Error(t(93));P=""+te}return typeof P=="string"&&P[0]===`
`&&c.push(sr),P!==null&&c.push(l(H(""+P))),null;case"input":c.push(ke("input")),Y=te=U=P=null;for(N in x)if(g.call(x,N)&&(re=x[N],re!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"defaultChecked":Y=re;break;case"defaultValue":U=re;break;case"checked":te=re;break;case"value":P=re;break;default:Ae(c,E,N,re)}return te!==null?Ae(c,E,"checked",te):Y!==null&&Ae(c,E,"checked",Y),P!==null?Ae(c,E,"value",P):U!==null&&Ae(c,E,"value",U),c.push(jn),null;case"menuitem":c.push(ke("menuitem"));for(var He in x)if(g.call(x,He)&&(P=x[He],P!=null))switch(He){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:Ae(c,E,He,P)}return c.push(it),null;case"title":c.push(ke("title")),P=null;for(xe in x)if(g.call(x,xe)&&(N=x[xe],N!=null))switch(xe){case"children":P=N;break;case"dangerouslySetInnerHTML":throw Error(t(434));default:Ae(c,E,xe,N)}return c.push(it),P;case"listing":case"pre":c.push(ke(h)),N=P=null;for(Y in x)if(g.call(x,Y)&&(U=x[Y],U!=null))switch(Y){case"children":P=U;break;case"dangerouslySetInnerHTML":N=U;break;default:Ae(c,E,Y,U)}if(c.push(it),N!=null){if(P!=null)throw Error(t(60));if(typeof N!="object"||!("__html"in N))throw Error(t(61));x=N.__html,x!=null&&(typeof x=="string"&&0<x.length&&x[0]===`
`?c.push(sr,l(x)):c.push(l(""+x)))}return typeof P=="string"&&P[0]===`
`&&c.push(sr),P;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":c.push(ke(h));for(var tt in x)if(g.call(x,tt)&&(P=x[tt],P!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,h));default:Ae(c,E,tt,P)}return c.push(jn),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Ft(c,x,h,E);case"html":return k.insertionMode===0&&c.push(An),Ft(c,x,h,E);default:if(h.indexOf("-")===-1&&typeof x.is!="string")return Ft(c,x,h,E);c.push(ke(h)),N=P=null;for(re in x)if(g.call(x,re)&&(U=x[re],U!=null))switch(re){case"children":P=U;break;case"dangerouslySetInnerHTML":N=U;break;case"style":pe(c,E,U);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:b(re)&&typeof U!="function"&&typeof U!="symbol"&&c.push(ae,l(re),be,l(H(U)),Ne)}return c.push(it),or(c,N,P),P}}var In=d("</"),kn=d(">"),ir=d('<template id="'),Tn=d('"></template>'),Dn=d("<!--$-->"),Jo=d('<!--$?--><template id="'),Tr=d('"></template>'),lr=d("<!--$!-->"),Zo=d("<!--/$-->"),Xo=d("<template"),ea=d('"'),ta=d(' data-dgst="');d(' data-msg="'),d(' data-stck="');var ra=d("></template>");function Ye(c,h,x){if(o(c,Jo),x===null)throw Error(t(395));return o(c,x),a(c,Tr)}var Dr=d('<div hidden id="'),ur=d('">'),me=d("</div>"),Ut=d('<svg aria-hidden="true" style="display:none" id="'),cr=d('">'),Ht=d("</svg>"),ut=d('<math aria-hidden="true" style="display:none" id="'),dr=d('">'),mt=d("</math>"),On=d('<table hidden id="'),Or=d('">'),Lr=d("</table>"),Ln=d('<table hidden><tbody id="'),Mn=d('">'),Nn=d("</tbody></table>"),na=d('<table hidden><tr id="'),oa=d('">'),fr=d("</tr></table>"),Fn=d('<table hidden><colgroup id="'),hr=d('">'),Mr=d("</colgroup></table>");function aa(c,h,x,E){switch(x.insertionMode){case 0:case 1:return o(c,Dr),o(c,h.segmentPrefix),o(c,l(E.toString(16))),a(c,ur);case 2:return o(c,Ut),o(c,h.segmentPrefix),o(c,l(E.toString(16))),a(c,cr);case 3:return o(c,ut),o(c,h.segmentPrefix),o(c,l(E.toString(16))),a(c,dr);case 4:return o(c,On),o(c,h.segmentPrefix),o(c,l(E.toString(16))),a(c,Or);case 5:return o(c,Ln),o(c,h.segmentPrefix),o(c,l(E.toString(16))),a(c,Mn);case 6:return o(c,na),o(c,h.segmentPrefix),o(c,l(E.toString(16))),a(c,oa);case 7:return o(c,Fn),o(c,h.segmentPrefix),o(c,l(E.toString(16))),a(c,hr);default:throw Error(t(397))}}function Bt(c,h){switch(h.insertionMode){case 0:case 1:return a(c,me);case 2:return a(c,Ht);case 3:return a(c,mt);case 4:return a(c,Lr);case 5:return a(c,Nn);case 6:return a(c,fr);case 7:return a(c,Mr);default:throw Error(t(397))}}var sa=d('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Nr=d('$RS("'),pr=d('","'),Vt=d('")<\/script>'),mr=d('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),Un=d('$RC("'),Hn=d('","'),Bn=d('")<\/script>'),Fr=d('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Te=d('$RX("'),Vn=d('"'),Ur=d(")<\/script>"),Hr=d(","),qn=/[<\u2028\u2029]/g;function _t(c){return JSON.stringify(c).replace(qn,function(h){switch(h){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var $t=Object.assign,zn=Symbol.for("react.element"),qt=Symbol.for("react.portal"),zt=Symbol.for("react.fragment"),Br=Symbol.for("react.strict_mode"),Vr=Symbol.for("react.profiler"),qr=Symbol.for("react.provider"),gr=Symbol.for("react.context"),Wn=Symbol.for("react.forward_ref"),Gn=Symbol.for("react.suspense"),zr=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),w=Symbol.for("react.scope"),_=Symbol.for("react.debug_trace_mode"),T=Symbol.for("react.legacy_hidden"),A=Symbol.for("react.default_value"),M=Symbol.iterator;function V(c){if(c==null)return null;if(typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c;switch(c){case zt:return"Fragment";case qt:return"Portal";case Vr:return"Profiler";case Br:return"StrictMode";case Gn:return"Suspense";case zr:return"SuspenseList"}if(typeof c=="object")switch(c.$$typeof){case gr:return(c.displayName||"Context")+".Consumer";case qr:return(c._context.displayName||"Context")+".Provider";case Wn:var h=c.render;return c=c.displayName,c||(c=h.displayName||h.name||"",c=c!==""?"ForwardRef("+c+")":"ForwardRef"),c;case u:return h=c.displayName||null,h!==null?h:V(c.type)||"Memo";case p:h=c._payload,c=c._init;try{return V(c(h))}catch{}}return null}var Q={};function K(c,h){if(c=c.contextTypes,!c)return Q;var x={},E;for(E in c)x[E]=h[E];return x}var X=null;function Ee(c,h){if(c!==h){c.context._currentValue=c.parentValue,c=c.parent;var x=h.parent;if(c===null){if(x!==null)throw Error(t(401))}else{if(x===null)throw Error(t(401));Ee(c,x)}h.context._currentValue=h.value}}function Xe(c){c.context._currentValue=c.parentValue,c=c.parent,c!==null&&Xe(c)}function et(c){var h=c.parent;h!==null&&et(h),c.context._currentValue=c.value}function Fe(c,h){if(c.context._currentValue=c.parentValue,c=c.parent,c===null)throw Error(t(402));c.depth===h.depth?Ee(c,h):Fe(c,h)}function Wt(c,h){var x=h.parent;if(x===null)throw Error(t(402));c.depth===x.depth?Ee(c,x):Wt(c,x),h.context._currentValue=h.value}function gt(c){var h=X;h!==c&&(h===null?et(c):c===null?Xe(h):h.depth===c.depth?Ee(h,c):h.depth>c.depth?Fe(h,c):Wt(h,c),X=c)}var Wr={isMounted:function(){return!1},enqueueSetState:function(c,h){c=c._reactInternals,c.queue!==null&&c.queue.push(h)},enqueueReplaceState:function(c,h){c=c._reactInternals,c.replace=!0,c.queue=[h]},enqueueForceUpdate:function(){}};function Gt(c,h,x,E){var k=c.state!==void 0?c.state:null;c.updater=Wr,c.props=x,c.state=k;var P={queue:[],replace:!1};c._reactInternals=P;var N=h.contextType;if(c.context=typeof N=="object"&&N!==null?N._currentValue:E,N=h.getDerivedStateFromProps,typeof N=="function"&&(N=N(x,k),k=N==null?k:$t({},k,N),c.state=k),typeof h.getDerivedStateFromProps!="function"&&typeof c.getSnapshotBeforeUpdate!="function"&&(typeof c.UNSAFE_componentWillMount=="function"||typeof c.componentWillMount=="function"))if(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&Wr.enqueueReplaceState(c,c.state,null),P.queue!==null&&0<P.queue.length)if(h=P.queue,N=P.replace,P.queue=null,P.replace=!1,N&&h.length===1)c.state=h[0];else{for(P=N?h[0]:c.state,k=!0,N=N?1:0;N<h.length;N++){var U=h[N];U=typeof U=="function"?U.call(c,P,x,E):U,U!=null&&(k?(k=!1,P=$t({},P,U)):$t(P,U))}c.state=P}else P.queue=null}var Qn={id:1,overflow:""};function jt(c,h,x){var E=c.id;c=c.overflow;var k=32-Yn(E)-1;E&=~(1<<k),x+=1;var P=32-Yn(h)+k;if(30<P){var N=k-k%5;return P=(E&(1<<N)-1).toString(32),E>>=N,k-=N,{id:1<<32-Yn(h)+k|x<<k|E,overflow:P+c}}return{id:1<<P|x<<k|E,overflow:c}}var Yn=Math.clz32?Math.clz32:cc,lc=Math.log,uc=Math.LN2;function cc(c){return c>>>=0,c===0?32:31-(lc(c)/uc|0)|0}function dc(c,h){return c===h&&(c!==0||1/c===1/h)||c!==c&&h!==h}var fc=typeof Object.is=="function"?Object.is:dc,yt=null,ia=null,Kn=null,ve=null,Gr=!1,Jn=!1,Qr=0,Rt=null,Zn=0;function Qt(){if(yt===null)throw Error(t(321));return yt}function As(){if(0<Zn)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function la(){return ve===null?Kn===null?(Gr=!1,Kn=ve=As()):(Gr=!0,ve=Kn):ve.next===null?(Gr=!1,ve=ve.next=As()):(Gr=!0,ve=ve.next),ve}function ua(){ia=yt=null,Jn=!1,Kn=null,Zn=0,ve=Rt=null}function Ps(c,h){return typeof h=="function"?h(c):h}function Is(c,h,x){if(yt=Qt(),ve=la(),Gr){var E=ve.queue;if(h=E.dispatch,Rt!==null&&(x=Rt.get(E),x!==void 0)){Rt.delete(E),E=ve.memoizedState;do E=c(E,x.action),x=x.next;while(x!==null);return ve.memoizedState=E,[E,h]}return[ve.memoizedState,h]}return c=c===Ps?typeof h=="function"?h():h:x!==void 0?x(h):h,ve.memoizedState=c,c=ve.queue={last:null,dispatch:null},c=c.dispatch=hc.bind(null,yt,c),[ve.memoizedState,c]}function ks(c,h){if(yt=Qt(),ve=la(),h=h===void 0?null:h,ve!==null){var x=ve.memoizedState;if(x!==null&&h!==null){var E=x[1];e:if(E===null)E=!1;else{for(var k=0;k<E.length&&k<h.length;k++)if(!fc(h[k],E[k])){E=!1;break e}E=!0}if(E)return x[0]}}return c=c(),ve.memoizedState=[c,h],c}function hc(c,h,x){if(25<=Zn)throw Error(t(301));if(c===yt)if(Jn=!0,c={action:x,next:null},Rt===null&&(Rt=new Map),x=Rt.get(h),x===void 0)Rt.set(h,c);else{for(h=x;h.next!==null;)h=h.next;h.next=c}}function pc(){throw Error(t(394))}function Xn(){}var Ts={readContext:function(c){return c._currentValue},useContext:function(c){return Qt(),c._currentValue},useMemo:ks,useReducer:Is,useRef:function(c){yt=Qt(),ve=la();var h=ve.memoizedState;return h===null?(c={current:c},ve.memoizedState=c):h},useState:function(c){return Is(Ps,c)},useInsertionEffect:Xn,useLayoutEffect:function(){},useCallback:function(c,h){return ks(function(){return c},h)},useImperativeHandle:Xn,useEffect:Xn,useDebugValue:Xn,useDeferredValue:function(c){return Qt(),c},useTransition:function(){return Qt(),[!1,pc]},useId:function(){var c=ia.treeContext,h=c.overflow;c=c.id,c=(c&~(1<<32-Yn(c)-1)).toString(32)+h;var x=eo;if(x===null)throw Error(t(404));return h=Qr++,c=":"+x.idPrefix+"R"+c,0<h&&(c+="H"+h.toString(32)),c+":"},useMutableSource:function(c,h){return Qt(),h(c._source)},useSyncExternalStore:function(c,h,x){if(x===void 0)throw Error(t(407));return x()}},eo=null,ca=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function mc(c){return console.error(c),null}function Yr(){}function gc(c,h,x,E,k,P,N,U,Y){var re=[],te=new Set;return h={destination:null,responseState:h,progressiveChunkSize:E===void 0?12800:E,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:te,pingedTasks:re,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:k===void 0?mc:k,onAllReady:P===void 0?Yr:P,onShellReady:N===void 0?Yr:N,onShellError:U===void 0?Yr:U,onFatalError:Y===void 0?Yr:Y},x=to(h,0,null,x,!1,!1),x.parentFlushed=!0,c=da(h,c,null,x,te,Q,null,Qn),re.push(c),h}function da(c,h,x,E,k,P,N,U){c.allPendingTasks++,x===null?c.pendingRootTasks++:x.pendingTasks++;var Y={node:h,ping:function(){var re=c.pingedTasks;re.push(Y),re.length===1&&Us(c)},blockedBoundary:x,blockedSegment:E,abortSet:k,legacyContext:P,context:N,treeContext:U};return k.add(Y),Y}function to(c,h,x,E,k,P){return{status:0,id:-1,index:h,parentFlushed:!1,chunks:[],children:[],formatContext:E,boundary:x,lastPushedText:k,textEmbedded:P}}function Kr(c,h){if(c=c.onError(h),c!=null&&typeof c!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof c+'" instead');return c}function ro(c,h){var x=c.onShellError;x(h),x=c.onFatalError,x(h),c.destination!==null?(c.status=2,m(c.destination,h)):(c.status=1,c.fatalError=h)}function Ds(c,h,x,E,k){for(yt={},ia=h,Qr=0,c=x(E,k);Jn;)Jn=!1,Qr=0,Zn+=1,ve=null,c=x(E,k);return ua(),c}function Os(c,h,x,E){var k=x.render(),P=E.childContextTypes;if(P!=null){var N=h.legacyContext;if(typeof x.getChildContext!="function")E=N;else{x=x.getChildContext();for(var U in x)if(!(U in P))throw Error(t(108,V(E)||"Unknown",U));E=$t({},N,x)}h.legacyContext=E,Ue(c,h,k),h.legacyContext=N}else Ue(c,h,k)}function Ls(c,h){if(c&&c.defaultProps){h=$t({},h),c=c.defaultProps;for(var x in c)h[x]===void 0&&(h[x]=c[x]);return h}return h}function fa(c,h,x,E,k){if(typeof x=="function")if(x.prototype&&x.prototype.isReactComponent){k=K(x,h.legacyContext);var P=x.contextType;P=new x(E,typeof P=="object"&&P!==null?P._currentValue:k),Gt(P,x,E,k),Os(c,h,P,x)}else{P=K(x,h.legacyContext),k=Ds(c,h,x,E,P);var N=Qr!==0;if(typeof k=="object"&&k!==null&&typeof k.render=="function"&&k.$$typeof===void 0)Gt(k,x,E,P),Os(c,h,k,x);else if(N){E=h.treeContext,h.treeContext=jt(E,1,0);try{Ue(c,h,k)}finally{h.treeContext=E}}else Ue(c,h,k)}else if(typeof x=="string"){switch(k=h.blockedSegment,P=Pn(k.chunks,x,E,c.responseState,k.formatContext),k.lastPushedText=!1,N=k.formatContext,k.formatContext=R(N,x,E),ha(c,h,P),k.formatContext=N,x){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:k.chunks.push(In,l(x),kn)}k.lastPushedText=!1}else{switch(x){case T:case _:case Br:case Vr:case zt:Ue(c,h,E.children);return;case zr:Ue(c,h,E.children);return;case w:throw Error(t(343));case Gn:e:{x=h.blockedBoundary,k=h.blockedSegment,P=E.fallback,E=E.children,N=new Set;var U={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:N,errorDigest:null},Y=to(c,k.chunks.length,U,k.formatContext,!1,!1);k.children.push(Y),k.lastPushedText=!1;var re=to(c,0,null,k.formatContext,!1,!1);re.parentFlushed=!0,h.blockedBoundary=U,h.blockedSegment=re;try{if(ha(c,h,E),re.lastPushedText&&re.textEmbedded&&re.chunks.push(B),re.status=1,no(U,re),U.pendingTasks===0)break e}catch(te){re.status=4,U.forceClientRender=!0,U.errorDigest=Kr(c,te)}finally{h.blockedBoundary=x,h.blockedSegment=k}h=da(c,P,x,Y,N,h.legacyContext,h.context,h.treeContext),c.pingedTasks.push(h)}return}if(typeof x=="object"&&x!==null)switch(x.$$typeof){case Wn:if(E=Ds(c,h,x.render,E,k),Qr!==0){x=h.treeContext,h.treeContext=jt(x,1,0);try{Ue(c,h,E)}finally{h.treeContext=x}}else Ue(c,h,E);return;case u:x=x.type,E=Ls(x,E),fa(c,h,x,E,k);return;case qr:if(k=E.children,x=x._context,E=E.value,P=x._currentValue,x._currentValue=E,N=X,X=E={parent:N,depth:N===null?0:N.depth+1,context:x,parentValue:P,value:E},h.context=E,Ue(c,h,k),c=X,c===null)throw Error(t(403));E=c.parentValue,c.context._currentValue=E===A?c.context._defaultValue:E,c=X=c.parent,h.context=c;return;case gr:E=E.children,E=E(x._currentValue),Ue(c,h,E);return;case p:k=x._init,x=k(x._payload),E=Ls(x,E),fa(c,h,x,E,void 0);return}throw Error(t(130,x==null?x:typeof x,""))}}function Ue(c,h,x){if(h.node=x,typeof x=="object"&&x!==null){switch(x.$$typeof){case zn:fa(c,h,x.type,x.props,x.ref);return;case qt:throw Error(t(257));case p:var E=x._init;x=E(x._payload),Ue(c,h,x);return}if(G(x)){Ms(c,h,x);return}if(x===null||typeof x!="object"?E=null:(E=M&&x[M]||x["@@iterator"],E=typeof E=="function"?E:null),E&&(E=E.call(x))){if(x=E.next(),!x.done){var k=[];do k.push(x.value),x=E.next();while(!x.done);Ms(c,h,k)}return}throw c=Object.prototype.toString.call(x),Error(t(31,c==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":c))}typeof x=="string"?(E=h.blockedSegment,E.lastPushedText=ee(h.blockedSegment.chunks,x,c.responseState,E.lastPushedText)):typeof x=="number"&&(E=h.blockedSegment,E.lastPushedText=ee(h.blockedSegment.chunks,""+x,c.responseState,E.lastPushedText))}function Ms(c,h,x){for(var E=x.length,k=0;k<E;k++){var P=h.treeContext;h.treeContext=jt(P,E,k);try{ha(c,h,x[k])}finally{h.treeContext=P}}}function ha(c,h,x){var E=h.blockedSegment.formatContext,k=h.legacyContext,P=h.context;try{return Ue(c,h,x)}catch(Y){if(ua(),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"){x=Y;var N=h.blockedSegment,U=to(c,N.chunks.length,null,N.formatContext,N.lastPushedText,!0);N.children.push(U),N.lastPushedText=!1,c=da(c,h.node,h.blockedBoundary,U,h.abortSet,h.legacyContext,h.context,h.treeContext).ping,x.then(c,c),h.blockedSegment.formatContext=E,h.legacyContext=k,h.context=P,gt(P)}else throw h.blockedSegment.formatContext=E,h.legacyContext=k,h.context=P,gt(P),Y}}function yc(c){var h=c.blockedBoundary;c=c.blockedSegment,c.status=3,Fs(this,h,c)}function Ns(c,h,x){var E=c.blockedBoundary;c.blockedSegment.status=3,E===null?(h.allPendingTasks--,h.status!==2&&(h.status=2,h.destination!==null&&h.destination.close())):(E.pendingTasks--,E.forceClientRender||(E.forceClientRender=!0,c=x===void 0?Error(t(432)):x,E.errorDigest=h.onError(c),E.parentFlushed&&h.clientRenderedBoundaries.push(E)),E.fallbackAbortableTasks.forEach(function(k){return Ns(k,h,x)}),E.fallbackAbortableTasks.clear(),h.allPendingTasks--,h.allPendingTasks===0&&(E=h.onAllReady,E()))}function no(c,h){if(h.chunks.length===0&&h.children.length===1&&h.children[0].boundary===null){var x=h.children[0];x.id=h.id,x.parentFlushed=!0,x.status===1&&no(c,x)}else c.completedSegments.push(h)}function Fs(c,h,x){if(h===null){if(x.parentFlushed){if(c.completedRootSegment!==null)throw Error(t(389));c.completedRootSegment=x}c.pendingRootTasks--,c.pendingRootTasks===0&&(c.onShellError=Yr,h=c.onShellReady,h())}else h.pendingTasks--,h.forceClientRender||(h.pendingTasks===0?(x.parentFlushed&&x.status===1&&no(h,x),h.parentFlushed&&c.completedBoundaries.push(h),h.fallbackAbortableTasks.forEach(yc,c),h.fallbackAbortableTasks.clear()):x.parentFlushed&&x.status===1&&(no(h,x),h.completedSegments.length===1&&h.parentFlushed&&c.partialBoundaries.push(h)));c.allPendingTasks--,c.allPendingTasks===0&&(c=c.onAllReady,c())}function Us(c){if(c.status!==2){var h=X,x=ca.current;ca.current=Ts;var E=eo;eo=c.responseState;try{var k=c.pingedTasks,P;for(P=0;P<k.length;P++){var N=k[P],U=c,Y=N.blockedSegment;if(Y.status===0){gt(N.context);try{Ue(U,N,N.node),Y.lastPushedText&&Y.textEmbedded&&Y.chunks.push(B),N.abortSet.delete(N),Y.status=1,Fs(U,N.blockedBoundary,Y)}catch(rt){if(ua(),typeof rt=="object"&&rt!==null&&typeof rt.then=="function"){var re=N.ping;rt.then(re,re)}else{N.abortSet.delete(N),Y.status=4;var te=N.blockedBoundary,xe=rt,He=Kr(U,xe);if(te===null?ro(U,xe):(te.pendingTasks--,te.forceClientRender||(te.forceClientRender=!0,te.errorDigest=He,te.parentFlushed&&U.clientRenderedBoundaries.push(te))),U.allPendingTasks--,U.allPendingTasks===0){var tt=U.onAllReady;tt()}}}finally{}}}k.splice(0,P),c.destination!==null&&pa(c,c.destination)}catch(rt){Kr(c,rt),ro(c,rt)}finally{eo=E,ca.current=x,x===Ts&&gt(h)}}}function oo(c,h,x){switch(x.parentFlushed=!0,x.status){case 0:var E=x.id=c.nextSegmentId++;return x.lastPushedText=!1,x.textEmbedded=!1,c=c.responseState,o(h,ir),o(h,c.placeholderPrefix),c=l(E.toString(16)),o(h,c),a(h,Tn);case 1:x.status=2;var k=!0;E=x.chunks;var P=0;x=x.children;for(var N=0;N<x.length;N++){for(k=x[N];P<k.index;P++)o(h,E[P]);k=ao(c,h,k)}for(;P<E.length-1;P++)o(h,E[P]);return P<E.length&&(k=a(h,E[P])),k;default:throw Error(t(390))}}function ao(c,h,x){var E=x.boundary;if(E===null)return oo(c,h,x);if(E.parentFlushed=!0,E.forceClientRender)E=E.errorDigest,a(h,lr),o(h,Xo),E&&(o(h,ta),o(h,l(H(E))),o(h,ea)),a(h,ra),oo(c,h,x);else if(0<E.pendingTasks){E.rootSegmentID=c.nextSegmentId++,0<E.completedSegments.length&&c.partialBoundaries.push(E);var k=c.responseState,P=k.nextSuspenseID++;k=d(k.boundaryPrefix+P.toString(16)),E=E.id=k,Ye(h,c.responseState,E),oo(c,h,x)}else if(E.byteSize>c.progressiveChunkSize)E.rootSegmentID=c.nextSegmentId++,c.completedBoundaries.push(E),Ye(h,c.responseState,E.id),oo(c,h,x);else{if(a(h,Dn),x=E.completedSegments,x.length!==1)throw Error(t(391));ao(c,h,x[0])}return a(h,Zo)}function Hs(c,h,x){return aa(h,c.responseState,x.formatContext,x.id),ao(c,h,x),Bt(h,x.formatContext)}function Bs(c,h,x){for(var E=x.completedSegments,k=0;k<E.length;k++)Vs(c,h,x,E[k]);if(E.length=0,c=c.responseState,E=x.id,x=x.rootSegmentID,o(h,c.startInlineScript),c.sentCompleteBoundaryFunction?o(h,Un):(c.sentCompleteBoundaryFunction=!0,o(h,mr)),E===null)throw Error(t(395));return x=l(x.toString(16)),o(h,E),o(h,Hn),o(h,c.segmentPrefix),o(h,x),a(h,Bn)}function Vs(c,h,x,E){if(E.status===2)return!0;var k=E.id;if(k===-1){if((E.id=x.rootSegmentID)===-1)throw Error(t(392));return Hs(c,h,E)}return Hs(c,h,E),c=c.responseState,o(h,c.startInlineScript),c.sentCompleteSegmentFunction?o(h,Nr):(c.sentCompleteSegmentFunction=!0,o(h,sa)),o(h,c.segmentPrefix),k=l(k.toString(16)),o(h,k),o(h,pr),o(h,c.placeholderPrefix),o(h,k),a(h,Vt)}function pa(c,h){r=new Uint8Array(512),n=0;try{var x=c.completedRootSegment;if(x!==null&&c.pendingRootTasks===0){ao(c,h,x),c.completedRootSegment=null;var E=c.responseState.bootstrapChunks;for(x=0;x<E.length-1;x++)o(h,E[x]);x<E.length&&a(h,E[x])}var k=c.clientRenderedBoundaries,P;for(P=0;P<k.length;P++){var N=k[P];E=h;var U=c.responseState,Y=N.id,re=N.errorDigest,te=N.errorMessage,xe=N.errorComponentStack;if(o(E,U.startInlineScript),U.sentClientRenderFunction?o(E,Te):(U.sentClientRenderFunction=!0,o(E,Fr)),Y===null)throw Error(t(395));o(E,Y),o(E,Vn),(re||te||xe)&&(o(E,Hr),o(E,l(_t(re||"")))),(te||xe)&&(o(E,Hr),o(E,l(_t(te||"")))),xe&&(o(E,Hr),o(E,l(_t(xe)))),a(E,Ur)}k.splice(0,P);var He=c.completedBoundaries;for(P=0;P<He.length;P++)Bs(c,h,He[P]);He.splice(0,P),s(h),r=new Uint8Array(512),n=0;var tt=c.partialBoundaries;for(P=0;P<tt.length;P++){var rt=tt[P];e:{k=c,N=h;var so=rt.completedSegments;for(U=0;U<so.length;U++)if(!Vs(k,N,rt,so[U])){U++,so.splice(0,U);var zs=!1;break e}so.splice(0,U),zs=!0}if(!zs){c.destination=null,P++,tt.splice(0,P);return}}tt.splice(0,P);var ma=c.completedBoundaries;for(P=0;P<ma.length;P++)Bs(c,h,ma[P]);ma.splice(0,P)}finally{s(h),c.allPendingTasks===0&&c.pingedTasks.length===0&&c.clientRenderedBoundaries.length===0&&c.completedBoundaries.length===0&&h.close()}}function qs(c,h){try{var x=c.abortableTasks;x.forEach(function(E){return Ns(E,c,h)}),x.clear(),c.destination!==null&&pa(c,c.destination)}catch(E){Kr(c,E),ro(c,E)}}return ho.renderToReadableStream=function(c,h){return new Promise(function(x,E){var k,P,N=new Promise(function(te,xe){P=te,k=xe}),U=gc(c,ge(h?h.identifierPrefix:void 0,h?h.nonce:void 0,h?h.bootstrapScriptContent:void 0,h?h.bootstrapScripts:void 0,h?h.bootstrapModules:void 0),fe(h?h.namespaceURI:void 0),h?h.progressiveChunkSize:void 0,h?h.onError:void 0,P,function(){var te=new ReadableStream({type:"bytes",pull:function(xe){if(U.status===1)U.status=2,m(xe,U.fatalError);else if(U.status!==2&&U.destination===null){U.destination=xe;try{pa(U,xe)}catch(He){Kr(U,He),ro(U,He)}}},cancel:function(){qs(U)}},{highWaterMark:0});te.allReady=N,x(te)},function(te){N.catch(function(){}),E(te)},k);if(h&&h.signal){var Y=h.signal,re=function(){qs(U,Y.reason),Y.removeEventListener("abort",re)};Y.addEventListener("abort",re)}Us(U)})},ho.version="18.3.1",ho}var ul;function gy(){if(ul)return At;ul=1;var e,t;return e=py(),t=my(),At.version=e.version,At.renderToString=e.renderToString,At.renderToStaticMarkup=e.renderToStaticMarkup,At.renderToNodeStream=e.renderToNodeStream,At.renderToStaticNodeStream=e.renderToStaticNodeStream,At.renderToReadableStream=t.renderToReadableStream,At}var yy=gy();async function vy(e,t,r,n,o){const{nonce:a,header:s,NonceProvider:i}=jg({shop:{checkoutDomain:o.env.PUBLIC_CHECKOUT_DOMAIN,storeDomain:o.env.PUBLIC_STORE_DOMAIN}}),l=await yy.renderToReadableStream(f.jsx(i,{children:f.jsx(Gf,{context:n,url:e.url,nonce:a})}),{nonce:a,signal:e.signal,onError(d){console.error(d),t=500}});return hy(e.headers.get("user-agent"))&&await l.allReady,r.set("Content-Type","text/html"),r.set("Content-Security-Policy",s),new Response(l,{headers:r,status:t})}const xy=Object.freeze(Object.defineProperty({__proto__:null,default:vy},Symbol.toStringTag,{value:"Module"}));function $e(e){return function(){const r={params:Pl(),loaderData:Re(),actionData:Uo(),matches:us()};return S.createElement(e,r)}}function wy(e){return function(){const r={params:Pl(),loaderData:Re(),actionData:Uo(),error:Ho()};return S.createElement(e,r)}}const Cy="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/favicon-DZkC1E9c.svg",Sy="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/reset-BKioPaen.css",by="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/app-Bv0Oluef.css",Ey="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/tailwind-D8qJMz9q.css";function En({children:e,heading:t,type:r}){const{type:n,close:o}=Nt(),a=r===n;return S.useEffect(()=>{const s=new AbortController;return a&&document.addEventListener("keydown",function(l){l.key==="Escape"&&o()},{signal:s.signal}),()=>s.abort()},[o,a]),f.jsxs("div",{"aria-modal":!0,className:`overlay ${a?"expanded":""}`,role:"dialog",children:[f.jsx("button",{className:"close-outside",onClick:o}),f.jsxs("aside",{children:[f.jsxs("header",{children:[f.jsx("h3",{children:t}),f.jsx("button",{className:"close reset",onClick:o,"aria-label":"Close",children:"×"})]}),f.jsx("main",{children:e})]})]})}const Ju=S.createContext(null);En.Provider=function({children:t}){const[r,n]=S.useState("closed");return f.jsx(Ju.Provider,{value:{type:r,open:n,close:()=>n("closed")},children:t})};function Nt(){const e=S.useContext(Ju);if(!e)throw new Error("useAside must be used within an AsideProvider");return e}function _y({footer:e,header:t,publicStoreDomain:r}){return f.jsx(S.Suspense,{children:f.jsx(yn,{resolve:e,children:n=>{var o;return f.jsx("footer",{className:"footer",children:(n==null?void 0:n.menu)&&((o=t.shop.primaryDomain)==null?void 0:o.url)&&f.jsx($y,{menu:n.menu,primaryDomainUrl:t.shop.primaryDomain.url,publicStoreDomain:r})})}})})}function $y({menu:e,primaryDomainUrl:t,publicStoreDomain:r}){return f.jsx("nav",{className:"footer-menu",role:"navigation",children:(e||jy).items.map(n=>{if(!n.url)return null;const o=n.url.includes("myshopify.com")||n.url.includes(r)||n.url.includes(t)?new URL(n.url).pathname:n.url;return!o.startsWith("/")?f.jsx("a",{href:o,rel:"noopener noreferrer",target:"_blank",children:n.title},n.id):f.jsx(kt,{end:!0,prefetch:"intent",style:Ry,to:o,children:n.title},n.id)})})}const jy={items:[{id:"gid://shopify/MenuItem/461633060920",resourceId:"gid://shopify/ShopPolicy/23358046264",tags:[],title:"Privacy Policy",type:"SHOP_POLICY",url:"/policies/privacy-policy",items:[]},{id:"gid://shopify/MenuItem/461633093688",resourceId:"gid://shopify/ShopPolicy/23358013496",tags:[],title:"Refund Policy",type:"SHOP_POLICY",url:"/policies/refund-policy",items:[]},{id:"gid://shopify/MenuItem/461633126456",resourceId:"gid://shopify/ShopPolicy/23358111800",tags:[],title:"Shipping Policy",type:"SHOP_POLICY",url:"/policies/shipping-policy",items:[]},{id:"gid://shopify/MenuItem/461633159224",resourceId:"gid://shopify/ShopPolicy/23358079032",tags:[],title:"Terms of Service",type:"SHOP_POLICY",url:"/policies/terms-of-service",items:[]}]};function Ry({isActive:e,isPending:t}){return{fontWeight:e?"bold":void 0,color:t?"grey":"white"}}function Ay({header:e,isLoggedIn:t,cart:r,publicStoreDomain:n}){const{shop:o,menu:a}=e;return f.jsxs(f.Fragment,{children:[f.jsxs("header",{className:"header",children:[f.jsxs("form",{className:"search-form",role:"search","aria-label":"Search entire store",children:[f.jsx("input",{type:"search",placeholder:"Search entire store here...","aria-label":"Search entire store",className:"search-input",spellCheck:!1,autoComplete:"off"}),f.jsx("button",{type:"submit",className:"search-button","aria-label":"Search",children:f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",width:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[f.jsx("circle",{cx:"11",cy:"11",r:"7"}),f.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),f.jsx("a",{href:"/",className:"logo-link","aria-label":"Home",children:f.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0704/7908/5731/files/logo.png?v=1752934162",alt:o.name||"Logo",className:"logo"})}),f.jsxs("nav",{className:"header-ctas",role:"navigation",children:[f.jsx(kt,{to:"/account",prefetch:"intent",className:({isActive:i})=>i?"account-link active":"account-link",children:f.jsx(S.Suspense,{fallback:"Account",children:f.jsx(yn,{resolve:t,errorElement:"Account",children:i=>"Account"})})}),f.jsx(Py,{cart:r})]})]}),f.jsx("div",{className:"header-menu-block",children:f.jsx(Zu,{menu:a,viewport:"desktop",primaryDomainUrl:e.shop.primaryDomain.url,publicStoreDomain:n})}),f.jsx("style",{children:`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          border-bottom: 1px solid #eaeaea;
          background: white;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 5px rgb(0 0 0 / 0.05);
        }
        .search-form {
          display: flex;
          align-items: center;
          max-width: 320px;
          flex-grow: 1;
          margin-right: auto;
          border: 1px solid #ccc;
          border-radius: 40px;
          padding: 0 0.75rem;
          background: #fff;
          height: 32px;
        }
        .search-input {
          flex-grow: 1;
          border: none;
          outline: none;
          padding: 0 1rem;
          font-style: italic;
          font-size: 0.9rem;
          color: #555;
          background: transparent;
          height: 100%;
        }
        .search-button {
          background: transparent;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-link {
          flex-shrink: 0;
          margin: 0 2rem;
          margin-left: -10em; /* Shift logo left */
          display: flex;
          justify-content: center;
          flex-grow: 0;
          flex-basis: 15%;
        }
        .logo {
          max-width: 100%;
          max-height: 60px;
          height: auto;
          width: auto;
          cursor: pointer;
        }
        .header-ctas {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-left: auto;
          font-weight: 500;
          color: #333;
        }
        .account-link {
          color: inherit;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          text-transform: uppercase;
          font-size: 0.85rem; /* Adjust this value as needed */
        }
        .account-link:hover {
          text-decoration: none !important;
          cursor: pointer;
        }
        .account-link.active {
          font-weight: 700;
          border-bottom: 2px solid #855f3f;
        }
        .header-menu-block {
          border-top: 1px solid #eaeaea;
          background: white;
          padding: 0.75rem 2rem;
          display: flex;
          justify-content: center;
          box-shadow: 0 2px 5px rgb(0 0 0 / 0.05);
        }
        .header-menu-desktop {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .header-menu-item {
          font-weight: 500;
          color: black;
          text-decoration: none;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          font-size: 0.85rem;
          text-transform: uppercase;
          border-bottom: 2px solid transparent;
          transition: none;
        }
        .header-menu-item:hover {
          color: black;
          cursor: pointer;
          text-decoration: none !important;
          border-bottom-color: transparent !important;
        }
        .header-menu-item.active {
          border-bottom-color: #855f3f;
          font-weight: 700;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .cart-count {
          background: red;
          color: white;
          font-weight: bold;
          font-size: 0.75rem;
          padding: 2px 6px;
          border-radius: 50%;
          margin-left: 4px;
        }
        .cart-link svg {
          display: block;
          stroke: #666;
          transition: stroke 0.2s ease;
          width: 20px;
          height: 20px;
        }
        .cart-link:hover svg {
          stroke: #0071e3;
          cursor: pointer;
        }
      `})]})}function Zu({menu:e,primaryDomainUrl:t,viewport:r,publicStoreDomain:n}){const o=`header-menu-${r}`,{close:a}=Nt();return f.jsxs("nav",{className:o,role:"navigation",children:[r==="mobile"&&f.jsx(kt,{end:!0,onClick:a,prefetch:"intent",className:({isActive:s})=>s?"header-menu-item active":"header-menu-item",to:"/",children:"Home"}),e==null?void 0:e.items.map(s=>{if(!s.url)return null;const i=s.url.includes("myshopify.com")||s.url.includes(n)||s.url.includes(t)?new URL(s.url).pathname:s.url;return f.jsx(kt,{className:({isActive:l})=>l?"header-menu-item active":"header-menu-item",end:!0,onClick:a,prefetch:"intent",to:i,children:s.title},s.id)})]})}function Py({cart:e}){return f.jsx(S.Suspense,{fallback:f.jsx(Xu,{count:null}),children:f.jsx(yn,{resolve:e,children:f.jsx(Iy,{})})})}function Iy(){const e=kl(),t=Hu(e);return f.jsx(Xu,{count:(t==null?void 0:t.totalQuantity)??0})}function Xu({count:e}){const{open:t}=Nt(),{publish:r,shop:n,cart:o,prevCart:a}=bn(),s=typeof e=="number"&&e>0;return f.jsxs("a",{href:"/cart",onClick:i=>{i.preventDefault(),t("cart"),r("cart_viewed",{cart:o,prevCart:a,shop:n,url:window.location.href||""})},"aria-label":`Cart with ${e??0} items`,className:"cart-link",children:[f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[f.jsx("circle",{cx:"9",cy:"21",r:"1"}),f.jsx("circle",{cx:"20",cy:"21",r:"1"}),f.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),s&&f.jsx("span",{className:"cart-count",children:e})]})}function ec(e,t){const{pathname:r}=Me();return S.useMemo(()=>ky({handle:e,pathname:r,searchParams:new URLSearchParams,selectedOptions:t}),[e,t,r])}function ky({handle:e,pathname:t,searchParams:r,selectedOptions:n}){const o=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(t),s=o&&o.length>0?`${o[0]}products/${e}`:`/products/${e}`;n==null||n.forEach(l=>{r.set(l.name,l.value)});const i=r.toString();return s+(i?"?"+r.toString():"")}function tc({price:e,compareAtPrice:t}){return f.jsx("div",{className:"product-price",children:t?f.jsxs("div",{className:"product-price-on-sale",children:[e?f.jsx(Oe,{data:e}):null,f.jsx("s",{children:f.jsx(Oe,{data:t})})]}):e?f.jsx(Oe,{data:e}):f.jsx("span",{children:" "})})}function Ty({layout:e,line:t}){var m;const{id:r,merchandise:n}=t,{product:o,title:a,image:s,selectedOptions:i}=n,l=ec(o.handle,i),{close:d}=Nt();return f.jsxs("li",{className:"cart-line",children:[s&&f.jsx(st,{alt:a,aspectRatio:"1/1",data:s,height:100,loading:"lazy",width:100}),f.jsxs("div",{children:[f.jsx(Ce,{prefetch:"intent",to:l,onClick:()=>{e==="aside"&&d()},children:f.jsx("p",{children:f.jsx("strong",{children:o.title})})}),f.jsx(tc,{price:(m=t==null?void 0:t.cost)==null?void 0:m.totalAmount}),f.jsx("ul",{children:i.map(g=>f.jsx("li",{children:f.jsxs("small",{children:[g.name,": ",g.value]})},g.name))}),f.jsx(Dy,{line:t})]})]},r)}function Dy({line:e}){if(!e||typeof(e==null?void 0:e.quantity)>"u")return null;const{id:t,quantity:r,isOptimistic:n}=e,o=Number(Math.max(0,r-1).toFixed(0)),a=Number((r+1).toFixed(0));return f.jsxs("div",{className:"cart-line-quantity",children:[f.jsxs("small",{children:["Quantity: ",r,"   "]}),f.jsx(cl,{lines:[{id:t,quantity:o}],children:f.jsx("button",{"aria-label":"Decrease quantity",disabled:r<=1||!!n,name:"decrease-quantity",value:o,children:f.jsx("span",{children:"− "})})})," ",f.jsx(cl,{lines:[{id:t,quantity:a}],children:f.jsx("button",{"aria-label":"Increase quantity",name:"increase-quantity",value:a,disabled:!!n,children:f.jsx("span",{children:"+"})})})," ",f.jsx(Oy,{lineIds:[t],disabled:!!n})]})}function Oy({lineIds:e,disabled:t}){return f.jsx(we,{fetcherKey:rc(e),route:"/cart",action:we.ACTIONS.LinesRemove,inputs:{lineIds:e},children:f.jsx("button",{disabled:t,type:"submit",children:"Remove"})})}function cl({children:e,lines:t}){const r=t.map(n=>n.id);return f.jsx(we,{fetcherKey:rc(r),route:"/cart",action:we.ACTIONS.LinesUpdate,inputs:{lines:t},children:e})}function rc(e){return[we.ACTIONS.LinesUpdate,...e].join("-")}function Ly({cart:e,layout:t}){var n,o,a;const r=t==="page"?"cart-summary-page":"cart-summary-aside";return f.jsxs("div",{"aria-labelledby":"cart-summary",className:r,children:[f.jsx("h4",{children:"Totals"}),f.jsxs("dl",{className:"cart-subtotal",children:[f.jsx("dt",{children:"Subtotal"}),f.jsx("dd",{children:(o=(n=e.cost)==null?void 0:n.subtotalAmount)!=null&&o.amount?f.jsx(Oe,{data:(a=e.cost)==null?void 0:a.subtotalAmount}):"-"})]}),f.jsx(Ny,{discountCodes:e.discountCodes}),f.jsx(Fy,{giftCardCodes:e.appliedGiftCards}),f.jsx(My,{checkoutUrl:e.checkoutUrl})]})}function My({checkoutUrl:e}){return e?f.jsxs("div",{children:[f.jsx("a",{href:e,target:"_self",children:f.jsx("p",{children:"Continue to Checkout →"})}),f.jsx("br",{})]}):null}function Ny({discountCodes:e}){var r;const t=((r=e==null?void 0:e.filter(n=>n.applicable))==null?void 0:r.map(({code:n})=>n))||[];return f.jsxs("div",{children:[f.jsx("dl",{hidden:!t.length,children:f.jsxs("div",{children:[f.jsx("dt",{children:"Discount(s)"}),f.jsx(dl,{children:f.jsxs("div",{className:"cart-discount",children:[f.jsx("code",{children:t==null?void 0:t.join(", ")})," ",f.jsx("button",{children:"Remove"})]})})]})}),f.jsx(dl,{discountCodes:t,children:f.jsxs("div",{children:[f.jsx("input",{type:"text",name:"discountCode",placeholder:"Discount code"})," ",f.jsx("button",{type:"submit",children:"Apply"})]})})]})}function dl({discountCodes:e,children:t}){return f.jsx(we,{route:"/cart",action:we.ACTIONS.DiscountCodesUpdate,inputs:{discountCodes:e||[]},children:t})}function Fy({giftCardCodes:e}){const t=S.useRef([]),r=S.useRef(null),n=(e==null?void 0:e.map(({lastCharacters:s})=>`***${s}`))||[];function o(s){const i=s.replace(/\s/g,"");t.current.includes(i)||t.current.push(i),r.current.value=""}function a(){t.current=[]}return f.jsxs("div",{children:[f.jsx("dl",{hidden:!n.length,children:f.jsxs("div",{children:[f.jsx("dt",{children:"Applied Gift Card(s)"}),f.jsx(fl,{children:f.jsxs("div",{className:"cart-discount",children:[f.jsx("code",{children:n==null?void 0:n.join(", ")})," ",f.jsx("button",{onSubmit:()=>a,children:"Remove"})]})})]})}),f.jsx(fl,{giftCardCodes:t.current,saveAppliedCode:o,children:f.jsxs("div",{children:[f.jsx("input",{type:"text",name:"giftCardCode",placeholder:"Gift card code",ref:r})," ",f.jsx("button",{type:"submit",children:"Apply"})]})})]})}function fl({giftCardCodes:e,saveAppliedCode:t,children:r}){return f.jsx(we,{route:"/cart",action:we.ACTIONS.GiftCardCodesUpdate,inputs:{giftCardCodes:e||[]},children:n=>{var a;const o=(a=n.formData)==null?void 0:a.get("giftCardCode");return o&&t&&t(o),r}})}function nc({layout:e,cart:t}){var i,l,d,m,g;const r=Hu(t),n=!!((l=(i=r==null?void 0:r.lines)==null?void 0:i.nodes)!=null&&l.length),a=`cart-main ${r&&!!((m=(d=r==null?void 0:r.discountCodes)==null?void 0:d.filter(y=>y.applicable))!=null&&m.length)?"with-discount":""}`,s=r!=null&&r.totalQuantity?r.totalQuantity>0:!1;return f.jsxs("div",{className:a,children:[f.jsx(Uy,{hidden:n,layout:e}),f.jsxs("div",{className:"cart-details",children:[f.jsx("div",{"aria-labelledby":"cart-lines",children:f.jsx("ul",{children:(((g=r==null?void 0:r.lines)==null?void 0:g.nodes)??[]).map(y=>f.jsx(Ty,{line:y,layout:e},y.id))})}),s&&f.jsx(Ly,{cart:r,layout:e})]})]})}function Uy({hidden:e=!1}){const{close:t}=Nt();return f.jsxs("div",{hidden:e,children:[f.jsx("br",{}),f.jsx("p",{children:"Looks like you haven’t added anything yet, let’s get you started!"}),f.jsx("br",{}),f.jsx(Ce,{to:"/collections",onClick:t,prefetch:"viewport",children:"Continue shopping →"})]})}const Xa="/search";function Hy({children:e,className:t="predictive-search-form",...r}){const n=ms({key:"search"}),o=S.useRef(null),a=pn(),s=Nt();function i(m){var g;m.preventDefault(),m.stopPropagation(),(g=o==null?void 0:o.current)!=null&&g.value&&o.current.blur()}function l(){var g;const m=(g=o==null?void 0:o.current)==null?void 0:g.value;a(Xa+(m?`?q=${m}`:"")),s.close()}function d(m){n.submit({q:m.target.value||"",limit:5,predictive:!0},{method:"GET",action:Xa})}return S.useEffect(()=>{var m;(m=o==null?void 0:o.current)==null||m.setAttribute("type","search")},[]),typeof e!="function"?null:f.jsx(n.Form,{...r,className:t,onSubmit:i,children:e({inputRef:o,fetcher:n,fetchResults:d,goToSearch:l})})}function oc(){return{total:0,items:{articles:[],collections:[],products:[],pages:[],queries:[]}}}function nr({baseUrl:e,trackingParams:t,params:r,term:n}){let o=new URLSearchParams({...r,q:encodeURIComponent(n)}).toString();return t&&(o=`${o}&${t}`),`${e}?${o}`}function Ve({children:e}){const t=Nt(),{term:r,inputRef:n,fetcher:o,total:a,items:s}=Qy();function i(){n.current&&(n.current.blur(),n.current.value="")}function l(){i(),t.close()}return e({items:s,closeSearch:l,inputRef:n,state:o.state,term:r,total:a})}Ve.Articles=By;Ve.Collections=Vy;Ve.Pages=qy;Ve.Products=zy;Ve.Queries=Wy;Ve.Empty=Gy;function By({term:e,articles:t,closeSearch:r}){return t.length?f.jsxs("div",{className:"predictive-search-result",children:[f.jsx("h5",{children:"Articles"}),f.jsx("ul",{children:t.map(n=>{var a;const o=nr({baseUrl:`/blogs/${n.blog.handle}/${n.handle}`,trackingParams:n.trackingParameters,term:e.current??""});return f.jsx("li",{className:"predictive-search-result-item",children:f.jsxs(Ce,{onClick:r,to:o,children:[((a=n.image)==null?void 0:a.url)&&f.jsx(st,{alt:n.image.altText??"",src:n.image.url,width:50,height:50}),f.jsx("div",{children:f.jsx("span",{children:n.title})})]})},n.id)})})]},"articles"):null}function Vy({term:e,collections:t,closeSearch:r}){return t.length?f.jsxs("div",{className:"predictive-search-result",children:[f.jsx("h5",{children:"Collections"}),f.jsx("ul",{children:t.map(n=>{var a;const o=nr({baseUrl:`/collections/${n.handle}`,trackingParams:n.trackingParameters,term:e.current});return f.jsx("li",{className:"predictive-search-result-item",children:f.jsxs(Ce,{onClick:r,to:o,children:[((a=n.image)==null?void 0:a.url)&&f.jsx(st,{alt:n.image.altText??"",src:n.image.url,width:50,height:50}),f.jsx("div",{children:f.jsx("span",{children:n.title})})]})},n.id)})})]},"collections"):null}function qy({term:e,pages:t,closeSearch:r}){return t.length?f.jsxs("div",{className:"predictive-search-result",children:[f.jsx("h5",{children:"Pages"}),f.jsx("ul",{children:t.map(n=>{const o=nr({baseUrl:`/pages/${n.handle}`,trackingParams:n.trackingParameters,term:e.current});return f.jsx("li",{className:"predictive-search-result-item",children:f.jsx(Ce,{onClick:r,to:o,children:f.jsx("div",{children:f.jsx("span",{children:n.title})})})},n.id)})})]},"pages"):null}function zy({term:e,products:t,closeSearch:r}){return t.length?f.jsxs("div",{className:"predictive-search-result",children:[f.jsx("h5",{children:"Products"}),f.jsx("ul",{children:t.map(n=>{var i,l;const o=nr({baseUrl:`/products/${n.handle}`,trackingParams:n.trackingParameters,term:e.current}),a=(i=n==null?void 0:n.selectedOrFirstAvailableVariant)==null?void 0:i.price,s=(l=n==null?void 0:n.selectedOrFirstAvailableVariant)==null?void 0:l.image;return f.jsx("li",{className:"predictive-search-result-item",children:f.jsxs(Ce,{to:o,onClick:r,children:[s&&f.jsx(st,{alt:s.altText??"",src:s.url,width:50,height:50}),f.jsxs("div",{children:[f.jsx("p",{children:n.title}),f.jsx("small",{children:a&&f.jsx(Oe,{data:a})})]})]})},n.id)})})]},"products"):null}function Wy({queries:e,queriesDatalistId:t}){return e.length?f.jsx("datalist",{id:t,children:e.map(r=>r?f.jsx("option",{value:r.text},r.text):null)}):null}function Gy({term:e}){return e.current?f.jsxs("p",{children:["No results found for ",f.jsx("q",{children:e.current})]}):null}function Qy(){var a,s;const e=ms({key:"search"}),t=S.useRef(""),r=S.useRef(null);(e==null?void 0:e.state)==="loading"&&(t.current=String(((a=e.formData)==null?void 0:a.get("q"))||"")),S.useEffect(()=>{r.current||(r.current=document.querySelector('input[type="search"]'))},[]);const{items:n,total:o}=((s=e==null?void 0:e.data)==null?void 0:s.result)??oc();return{items:n,total:o,inputRef:r,term:t,fetcher:e}}function Yy({cart:e,children:t=null,footer:r,header:n,isLoggedIn:o,publicStoreDomain:a}){return f.jsxs(En.Provider,{children:[f.jsx(Ky,{cart:e}),f.jsx(Jy,{}),f.jsx(Zy,{header:n,publicStoreDomain:a}),n&&f.jsx(Ay,{header:n,cart:e,isLoggedIn:o,publicStoreDomain:a}),f.jsx("main",{children:t}),f.jsx(_y,{footer:r,header:n,publicStoreDomain:a})]})}function Ky({cart:e}){return f.jsx(En,{type:"cart",heading:"CART",children:f.jsx(S.Suspense,{fallback:f.jsx("p",{children:"Loading cart ..."}),children:f.jsx(yn,{resolve:e,children:t=>f.jsx(nc,{cart:t,layout:"aside"})})})})}function Jy(){const e=S.useId();return f.jsx(En,{type:"search",heading:"SEARCH",children:f.jsxs("div",{className:"predictive-search",children:[f.jsx("br",{}),f.jsx(Hy,{children:({fetchResults:t,goToSearch:r,inputRef:n})=>f.jsxs(f.Fragment,{children:[f.jsx("input",{name:"q",onChange:t,onFocus:t,placeholder:"Search",ref:n,type:"search",list:e})," ",f.jsx("button",{onClick:r,children:"Search"})]})}),f.jsx(Ve,{children:({items:t,total:r,term:n,state:o,closeSearch:a})=>{const{articles:s,collections:i,pages:l,products:d,queries:m}=t;return o==="loading"&&n.current?f.jsx("div",{children:"Loading..."}):r?f.jsxs(f.Fragment,{children:[f.jsx(Ve.Queries,{queries:m,queriesDatalistId:e}),f.jsx(Ve.Products,{products:d,closeSearch:a,term:n}),f.jsx(Ve.Collections,{collections:i,closeSearch:a,term:n}),f.jsx(Ve.Pages,{pages:l,closeSearch:a,term:n}),f.jsx(Ve.Articles,{articles:s,closeSearch:a,term:n}),n.current&&r?f.jsx(Ce,{onClick:a,to:`${Xa}?q=${n.current}`,children:f.jsxs("p",{children:["View all results for ",f.jsx("q",{children:n.current}),"  →"]})}):null]}):f.jsx(Ve.Empty,{term:n})}})]})})}function Zy({header:e,publicStoreDomain:t}){var r;return e.menu&&((r=e.shop.primaryDomain)==null?void 0:r.url)&&f.jsx(En,{type:"mobile",heading:"MENU",children:f.jsx(Zu,{menu:e.menu,viewport:"mobile",primaryDomainUrl:e.shop.primaryDomain.url,publicStoreDomain:t})})}const Xy=({formMethod:e,currentUrl:t,nextUrl:r})=>!!(e&&e!=="GET"||t.toString()===r.toString());function ev(){return[{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"icon",type:"image/svg+xml",href:Cy}]}async function tv(e){const t=nv(e),r=await rv(e),{storefront:n,env:o}=e.context;return{...t,...r,publicStoreDomain:o.PUBLIC_STORE_DOMAIN,shop:Qp({storefront:n,publicStorefrontId:o.PUBLIC_STOREFRONT_ID}),consent:{checkoutDomain:o.PUBLIC_CHECKOUT_DOMAIN,storefrontAccessToken:o.PUBLIC_STOREFRONT_API_TOKEN,withPrivacyBanner:!1,country:e.context.storefront.i18n.country,language:e.context.storefront.i18n.language}}}async function rv({context:e}){const{storefront:t}=e,[r]=await Promise.all([t.query(ty,{cache:t.CacheLong(),variables:{headerMenuHandle:"main-menu"}})]);return{header:r}}function nv({context:e}){const{storefront:t,customerAccount:r,cart:n}=e,o=t.query(ry,{cache:t.CacheLong(),variables:{footerMenuHandle:"footer"}}).catch(a=>(console.error(a),null));return{cart:n.get(),isLoggedIn:r.isLoggedIn(),footer:o}}function ov({children:e}){const t=Gu(),r=Id("root");return f.jsxs("html",{lang:"en",children:[f.jsxs("head",{children:[f.jsx("meta",{charSet:"utf-8"}),f.jsx("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),f.jsx("link",{rel:"stylesheet",href:Ey}),f.jsx("link",{rel:"stylesheet",href:Sy}),f.jsx("link",{rel:"stylesheet",href:by}),f.jsx($f,{}),f.jsx(bf,{})]}),f.jsxs("body",{children:[r?f.jsx(Qo.Provider,{cart:r.cart,shop:r.shop,consent:r.consent,children:f.jsx(Yy,{...r,children:e})}):e,f.jsx(ou,{nonce:t}),f.jsx(tu,{nonce:t})]})]})}const av=$e(function(){return f.jsx(Ol,{})}),sv=wy(function(){var o;const t=Ho();let r="Unknown error",n=500;return Pe(t)?(r=((o=t==null?void 0:t.data)==null?void 0:o.message)??t.data,n=t.status):t instanceof Error&&(r=t.message),f.jsxs("div",{className:"route-error",children:[f.jsx("h1",{children:"Oops"}),f.jsx("h2",{children:n}),r&&f.jsx("fieldset",{children:f.jsx("pre",{children:r})})]})}),iv=Object.freeze(Object.defineProperty({__proto__:null,ErrorBoundary:sv,Layout:ov,default:av,links:ev,loader:tv,shouldRevalidate:Xy},Symbol.toStringTag,{value:"Module"}));async function lv({request:e,context:t}){const r=new URL(e.url),{shop:n}=await t.storefront.query(cv),o=ze(n.id).id,a=uv({url:r.origin,shopId:o});return new Response(a,{status:200,headers:{"Content-Type":"text/plain","Cache-Control":`max-age=${60*60*24}`}})}function uv({url:e,shopId:t}){const r=e?`${e}/sitemap.xml`:void 0;return`
User-agent: *
${Ma({sitemapUrl:r,shopId:t})}

# Google adsbot ignores robots.txt unless specifically named!
User-agent: adsbot-google
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /orders
${t?`Disallow: /${t}/checkouts`:""}
${t?`Disallow: /${t}/orders`:""}
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*

User-agent: Nutch
Disallow: /

User-agent: AhrefsBot
Crawl-delay: 10
${Ma({sitemapUrl:r,shopId:t})}

User-agent: AhrefsSiteAudit
Crawl-delay: 10
${Ma({sitemapUrl:r,shopId:t})}

User-agent: MJ12bot
Crawl-Delay: 10

User-agent: Pinterest
Crawl-delay: 1
`.trim()}function Ma({shopId:e,sitemapUrl:t}){return`Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
${e?`Disallow: /${e}/checkouts`:""}
${e?`Disallow: /${e}/orders`:""}
Disallow: /carts
Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*
Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: */collections/*filter*&*filter*
Disallow: /blogs/*+*
Disallow: /blogs/*%2B*
Disallow: /blogs/*%2b*
Disallow: /*/blogs/*+*
Disallow: /*/blogs/*%2B*
Disallow: /*/blogs/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /policies/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /search
Allow: /search/
Disallow: /search/?*
Disallow: /apple-app-site-association
Disallow: /.well-known/shopify/monorail
${t?`Sitemap: ${t}`:""}`}const cv=`#graphql
  query StoreRobots($country: CountryCode, $language: LanguageCode)
   @inContext(country: $country, language: $language) {
    shop {
      id
    }
  }
`,dv=Object.freeze(Object.defineProperty({__proto__:null,loader:lv},Symbol.toStringTag,{value:"Module"}));async function fv({params:e,context:t}){const{language:r,country:n}=t.storefront.i18n;if(e.locale&&e.locale.toLowerCase()!==`${r}-${n}`.toLowerCase())throw new Response(null,{status:404});return null}const hv=Object.freeze(Object.defineProperty({__proto__:null,loader:fv},Symbol.toStringTag,{value:"Module"}));function _n(e,...t){const r=new URL(e.url);let n=!1;if(t.forEach(({handle:o,data:a})=>{o!==a.handle&&(r.pathname=r.pathname.replace(o,a.handle),n=!0)}),n)throw qe(r.toString())}const pv=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.article.title)??""} article`}];async function mv(e){const t=yv(e),r=await gv(e);return{...t,...r}}async function gv({context:e,request:t,params:r}){const{blogHandle:n,articleHandle:o}=r;if(!o||!n)throw new Response("Not found",{status:404});const[{blog:a}]=await Promise.all([e.storefront.query(xv,{variables:{blogHandle:n,articleHandle:o}})]);if(!(a!=null&&a.articleByHandle))throw new Response(null,{status:404});return _n(t,{handle:o,data:a.articleByHandle},{handle:n,data:a}),{article:a.articleByHandle}}function yv({context:e}){return{}}const vv=$e(function(){const{article:t}=Re(),{title:r,image:n,contentHtml:o,author:a}=t,s=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(t.publishedAt));return f.jsxs("div",{className:"article",children:[f.jsxs("h1",{children:[r,f.jsxs("div",{children:[f.jsx("time",{dateTime:t.publishedAt,children:s})," ·"," ",f.jsx("address",{children:a==null?void 0:a.name})]})]}),n&&f.jsx(st,{data:n,sizes:"90vw",loading:"eager"}),f.jsx("div",{dangerouslySetInnerHTML:{__html:o},className:"article"})]})}),xv=`#graphql
  query Article(
    $articleHandle: String!
    $blogHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $blogHandle) {
      handle
      articleByHandle(handle: $articleHandle) {
        handle
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
      }
    }
  }
`,wv=Object.freeze(Object.defineProperty({__proto__:null,default:vv,loader:mv,meta:pv},Symbol.toStringTag,{value:"Module"}));async function Cv({params:e,context:t,request:r}){const n=await fetch(`https://${t.env.PUBLIC_CHECKOUT_DOMAIN}/api/${e.version}/graphql.json`,{method:"POST",body:r.body,headers:r.headers});return new Response(n.body,{headers:new Headers(n.headers)})}const Sv=Object.freeze(Object.defineProperty({__proto__:null,action:Cv},Symbol.toStringTag,{value:"Module"}));async function bv({request:e,params:t,context:{storefront:r}}){const n=await Fg({storefront:r,request:e,params:t,locales:["EN-US","EN-CA","FR-CA"],getLink:({type:o,baseUrl:a,handle:s,locale:i})=>i?`${a}/${i}/${o}/${s}`:`${a}/${o}/${s}`});return n.headers.set("Cache-Control",`max-age=${60*60*24}`),n}const Ev=Object.freeze(Object.defineProperty({__proto__:null,loader:bv},Symbol.toStringTag,{value:"Module"}));function $n({connection:e,children:t,resourcesClassName:r}){return f.jsx(Qu,{connection:e,children:({nodes:n,isLoading:o,PreviousLink:a,NextLink:s})=>{const i=n.map((l,d)=>t({node:l,index:d}));return f.jsxs("div",{children:[f.jsx(a,{children:o?"Loading...":f.jsx("span",{children:"↑ Load previous"})}),r?f.jsx("div",{className:r,children:i}):i,f.jsx(s,{children:o?"Loading...":f.jsx("span",{children:"Load more ↓"})})]})}})}const _v=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.blog.title)??""} blog`}];async function $v(e){const t=Rv(e),r=await jv(e);return{...t,...r}}async function jv({context:e,request:t,params:r}){const n=rr(t,{pageBy:4});if(!r.blogHandle)throw new Response("blog not found",{status:404});const[{blog:o}]=await Promise.all([e.storefront.query(Iv,{variables:{blogHandle:r.blogHandle,...n}})]);if(!(o!=null&&o.articles))throw new Response("Not found",{status:404});return _n(t,{handle:r.blogHandle,data:o}),{blog:o}}function Rv({context:e}){return{}}const Av=$e(function(){const{blog:t}=Re(),{articles:r}=t;return f.jsxs("div",{className:"blog",children:[f.jsx("h1",{children:t.title}),f.jsx("div",{className:"blog-grid",children:f.jsx($n,{connection:r,children:({node:n,index:o})=>f.jsx(Pv,{article:n,loading:o<2?"eager":"lazy"},n.id)})})]})});function Pv({article:e,loading:t}){const r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(e.publishedAt));return f.jsx("div",{className:"blog-article",children:f.jsxs(Ce,{to:`/blogs/${e.blog.handle}/${e.handle}`,children:[e.image&&f.jsx("div",{className:"blog-article-image",children:f.jsx(st,{alt:e.image.altText||e.title,aspectRatio:"3/2",data:e.image,loading:t,sizes:"(min-width: 768px) 50vw, 100vw"})}),f.jsx("h3",{children:e.title}),f.jsx("small",{children:r})]})},e.id)}const Iv=`#graphql
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      handle
      seo {
        title
        description
      }
      articles(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ArticleItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
          startCursor
        }

      }
    }
  }
  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
`,kv=Object.freeze(Object.defineProperty({__proto__:null,default:Av,loader:$v,meta:_v},Symbol.toStringTag,{value:"Module"}));function ac({product:e,loading:t="lazy"}){const r=ec(e.handle),n=e.featuredImage;return f.jsxs(Ce,{to:r,prefetch:"intent",className:"group block bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden",children:[n&&f.jsx("div",{className:"aspect-[3/4] bg-gray-50 overflow-hidden",children:f.jsx(st,{alt:n.altText||e.title,aspectRatio:"1/1",data:n,loading:t,sizes:"(min-width: 45em) 400px, 100vw",className:"object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"})}),f.jsxs("div",{className:"p-4",children:[f.jsx("h4",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:e.title}),f.jsx("p",{className:"mt-1 text-sm font-semibold text-gray-900",children:f.jsx(Oe,{data:e.priceRange.minVariantPrice})})]})]})}const Tv=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.collection.title)??""} Collection`}];async function Dv(e){const t=Lv(e),r=await Ov(e);return{...t,...r}}async function Ov({context:e,params:t,request:r}){const{handle:n}=t,{storefront:o}=e,a=rr(r,{pageBy:8});if(!n)throw qe("/collections");const[{collection:s}]=await Promise.all([o.query(Fv,{variables:{handle:n,...a}})]);if(!s)throw new Response(`Collection ${n} not found`,{status:404});return _n(r,{handle:n,data:s}),{collection:s}}function Lv({context:e}){return{}}const Mv=$e(function(){var l;const{collection:t}=Re(),[r,n]=S.useState("All"),[o,a]=S.useState("featured"),i=[...((l=t.products)==null?void 0:l.nodes)||[]].sort((d,m)=>{const g=parseFloat(d.priceRange.minVariantPrice.amount),y=parseFloat(m.priceRange.minVariantPrice.amount);return o==="price-asc"?g-y:o==="price-desc"?y-g:0});return f.jsxs("section",{className:"collection-page w-full",children:[f.jsx("div",{className:"relative h-[25vh] flex flex-col items-center justify-center bg-[#1a1a1a] text-center px-4",children:f.jsx("h1",{className:"text-5xl md:text-7xl font-bold drop-shadow-xl",style:{color:"#d4af37",fontSize:"3rem",fontFamily:"'Great Vibes', cursive",lineHeight:1.1},children:t.title})}),f.jsx("div",{className:"bg-white py-6 border-b border-gray-200",children:f.jsxs("div",{className:"container mx-auto px-4 flex flex-wrap items-center justify-between gap-4",children:[f.jsx("div",{className:"flex gap-2 flex-wrap",children:["All","New Arrivals","Sale"].map(d=>f.jsx("button",{onClick:()=>n(d),className:`px-4 py-2 rounded-md border transition ${r===d?"bg-gray-900 text-white border-gray-900":"bg-gray-100 text-black hover:bg-gray-200 border-transparent"}`,children:d},d))}),f.jsx("div",{children:f.jsxs("select",{className:"border border-gray-300 rounded px-3 py-2 text-black",value:o,onChange:d=>a(d.target.value),children:[f.jsx("option",{value:"featured",children:"Sort: Featured"}),f.jsx("option",{value:"price-asc",children:"Price: Low to High"}),f.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})})]})}),f.jsx("div",{id:"products",className:"container mx-auto px-4 py-10",children:f.jsx("div",{className:"grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:i.map((d,m)=>f.jsx(ac,{product:d,loading:m<8?"eager":void 0},d.id))})}),f.jsx(Qo.CollectionView,{data:{collection:{id:t.id,handle:t.handle}}})]})}),Nv=`#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
`,Fv=`#graphql
  ${Nv}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`,Uv=Object.freeze(Object.defineProperty({__proto__:null,default:Mv,loader:Dv,meta:Tv},Symbol.toStringTag,{value:"Module"}));async function Hv({context:e}){return e.customerAccount.authorize()}const Bv=Object.freeze(Object.defineProperty({__proto__:null,loader:Hv},Symbol.toStringTag,{value:"Module"}));async function Vv(e){const t=zv(e),r=await qv(e);return{...t,...r}}async function qv({context:e,request:t}){const r=rr(t,{pageBy:4}),[{collections:n}]=await Promise.all([e.storefront.query(Qv,{variables:r})]);return{collections:n}}function zv({context:e}){return{}}const Wv=$e(function(){const{collections:t}=Re();return f.jsxs("div",{className:"collections",children:[f.jsx("h1",{children:"Collections"}),f.jsx($n,{connection:t,resourcesClassName:"collections-grid",children:({node:r,index:n})=>f.jsx(Gv,{collection:r,index:n},r.id)})]})});function Gv({collection:e,index:t}){return f.jsxs(Ce,{className:"collection-item",to:`/collections/${e.handle}`,prefetch:"intent",children:[(e==null?void 0:e.image)&&f.jsx(st,{alt:e.image.altText||e.title,aspectRatio:"1/1",data:e.image,loading:t<3?"eager":void 0,sizes:"(min-width: 45em) 400px, 100vw"}),f.jsx("h5",{children:e.title})]},e.id)}const Qv=`#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`,Yv=Object.freeze(Object.defineProperty({__proto__:null,default:Wv,loader:Vv},Symbol.toStringTag,{value:"Module"})),Kv=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.policy.title)??""}`}];async function Jv({params:e,context:t}){var a,s;if(!e.handle)throw new Response("No handle was passed in",{status:404});const r=e.handle.replace(/-([a-z])/g,(i,l)=>l.toUpperCase()),o=(s=(await t.storefront.query(Xv,{variables:{privacyPolicy:!1,shippingPolicy:!1,termsOfService:!1,refundPolicy:!1,[r]:!0,language:(a=t.storefront.i18n)==null?void 0:a.language}})).shop)==null?void 0:s[r];if(!o)throw new Response("Could not find the policy",{status:404});return{policy:o}}const Zv=$e(function(){const{policy:t}=Re();return f.jsxs("div",{className:"policy",children:[f.jsx("br",{}),f.jsx("br",{}),f.jsx("div",{children:f.jsx(Ce,{to:"/policies",children:"← Back to Policies"})}),f.jsx("br",{}),f.jsx("h1",{children:t.title}),f.jsx("div",{dangerouslySetInnerHTML:{__html:t.body}})]})}),Xv=`#graphql
  fragment Policy on ShopPolicy {
    body
    handle
    id
    title
    url
  }
  query Policy(
    $country: CountryCode
    $language: LanguageCode
    $privacyPolicy: Boolean!
    $refundPolicy: Boolean!
    $shippingPolicy: Boolean!
    $termsOfService: Boolean!
  ) @inContext(language: $language, country: $country) {
    shop {
      privacyPolicy @include(if: $privacyPolicy) {
        ...Policy
      }
      shippingPolicy @include(if: $shippingPolicy) {
        ...Policy
      }
      termsOfService @include(if: $termsOfService) {
        ...Policy
      }
      refundPolicy @include(if: $refundPolicy) {
        ...Policy
      }
    }
  }
`,ex=Object.freeze(Object.defineProperty({__proto__:null,default:Zv,loader:Jv,meta:Kv},Symbol.toStringTag,{value:"Module"}));function tx({image:e}){return e?f.jsx("div",{className:"product-image",children:f.jsx(st,{alt:e.altText||"Product Image",aspectRatio:"1/1",data:e,sizes:"(min-width: 45em) 50vw, 100vw"},e.id)}):f.jsx("div",{className:"product-image"})}function rx({analytics:e,children:t,disabled:r,lines:n,onClick:o}){return f.jsx(we,{route:"/cart",inputs:{lines:n},action:we.ACTIONS.LinesAdd,children:a=>f.jsxs(f.Fragment,{children:[f.jsx("input",{name:"analytics",type:"hidden",value:JSON.stringify(e)}),f.jsx("button",{type:"submit",onClick:o,disabled:r??a.state!=="idle",children:t})]})})}function nx({productOptions:e,selectedVariant:t}){const r=pn(),{open:n}=Nt();return f.jsxs("div",{className:"product-form",children:[e.map(o=>o.optionValues.length===1?null:f.jsxs("div",{className:"product-options",children:[f.jsx("h5",{children:o.name}),f.jsx("div",{className:"product-options-grid",children:o.optionValues.map(a=>{const{name:s,handle:i,variantUriQuery:l,selected:d,available:m,exists:g,isDifferentProduct:y,swatch:C}=a;return y?f.jsx(Ce,{className:"product-options-item",prefetch:"intent",preventScrollReset:!0,replace:!0,to:`/products/${i}?${l}`,style:{border:d?"1px solid black":"1px solid transparent",opacity:m?1:.3},children:f.jsx(hl,{swatch:C,name:s})},o.name+s):f.jsx("button",{type:"button",className:`product-options-item${g&&!d?" link":""}`,style:{border:d?"1px solid black":"1px solid transparent",opacity:m?1:.3},disabled:!g,onClick:()=>{d||r(`?${l}`,{replace:!0,preventScrollReset:!0})},children:f.jsx(hl,{swatch:C,name:s})},o.name+s)})}),f.jsx("br",{})]},o.name)),f.jsx(rx,{disabled:!t||!t.availableForSale,onClick:()=>{n("cart")},lines:t?[{merchandiseId:t.id,quantity:1,selectedVariant:t}]:[],children:t!=null&&t.availableForSale?"Add to cart":"Sold out"})]})}function hl({swatch:e,name:t}){var o,a;const r=(a=(o=e==null?void 0:e.image)==null?void 0:o.previewImage)==null?void 0:a.url,n=e==null?void 0:e.color;return!r&&!n?t:f.jsx("div",{"aria-label":t,className:"product-option-label-swatch",style:{backgroundColor:n||"transparent"},children:!!r&&f.jsx("img",{src:r,alt:t})})}const ox=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.product.title)??""}`},{rel:"canonical",href:`/products/${e==null?void 0:e.product.handle}`}];async function ax(e){const t=ix(e),r=await sx(e);return{...t,...r}}async function sx({context:e,params:t,request:r}){const{handle:n}=t,{storefront:o}=e;if(!n)throw new Error("Expected product handle to be defined");const[{product:a}]=await Promise.all([o.query(dx,{variables:{handle:n,selectedOptions:Tg(r)}})]);if(!(a!=null&&a.id))throw new Response(null,{status:404});return _n(r,{handle:n,data:a}),{product:a}}function ix({context:e,params:t}){return{}}const lx=$e(function(){const{product:t}=Re(),r=kg(t.selectedOrFirstAvailableVariant,hp(t));xp(r.selectedOptions);const n=pp({...t,selectedOrFirstAvailableVariant:r}),{title:o,descriptionHtml:a}=t;return f.jsxs("div",{className:"product",children:[f.jsx(tx,{image:r==null?void 0:r.image}),f.jsxs("div",{className:"product-main",children:[f.jsx("h1",{children:o}),f.jsx(tc,{price:r==null?void 0:r.price,compareAtPrice:r==null?void 0:r.compareAtPrice}),f.jsx("br",{}),f.jsx(nx,{productOptions:n,selectedVariant:r}),f.jsx("br",{}),f.jsx("br",{}),f.jsx("p",{children:f.jsx("strong",{children:"Description"})}),f.jsx("br",{}),f.jsx("div",{dangerouslySetInnerHTML:{__html:a}}),f.jsx("br",{})]}),f.jsx(Qo.ProductView,{data:{products:[{id:t.id,title:t.title,price:(r==null?void 0:r.price.amount)||"0",vendor:t.vendor,variantId:(r==null?void 0:r.id)||"",variantTitle:(r==null?void 0:r.title)||"",quantity:1}]}})]})}),ux=`#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`,cx=`#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${ux}
`,dx=`#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${cx}
`,fx=Object.freeze(Object.defineProperty({__proto__:null,default:lx,loader:ax,meta:ox},Symbol.toStringTag,{value:"Module"}));async function hx(){return qe("/")}async function px({context:e}){return e.customerAccount.logout()}const mx=Object.freeze(Object.defineProperty({__proto__:null,action:px,loader:hx},Symbol.toStringTag,{value:"Module"})),gx=()=>[{title:"Hydrogen | Products"}];async function yx(e){const t=xx(e),r=await vx(e);return{...t,...r}}async function vx({context:e,request:t}){const{storefront:r}=e,n=rr(t,{pageBy:8}),[{products:o}]=await Promise.all([r.query(Sx,{variables:{...n}})]);return{products:o}}function xx({context:e}){return{}}const wx=$e(function(){const{products:t}=Re();return f.jsxs("div",{className:"collection",children:[f.jsx("h1",{children:"Products"}),f.jsx($n,{connection:t,resourcesClassName:"products-grid",children:({node:r,index:n})=>f.jsx(ac,{product:r,loading:n<8?"eager":void 0},r.id)})]})}),Cx=`#graphql
  fragment MoneyCollectionItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment CollectionItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyCollectionItem
      }
      maxVariantPrice {
        ...MoneyCollectionItem
      }
    }
  }
`,Sx=`#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...CollectionItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${Cx}
`,bx=Object.freeze(Object.defineProperty({__proto__:null,default:wx,loader:yx,meta:gx},Symbol.toStringTag,{value:"Module"}));async function Ex({context:e}){const t=await e.storefront.query($x),r=Object.values(t.shop||{});if(!r.length)throw new Response("No policies found",{status:404});return{policies:r}}const _x=$e(function(){const{policies:t}=Re();return f.jsxs("div",{className:"policies",children:[f.jsx("h1",{children:"Policies"}),f.jsx("div",{children:t.map(r=>r?f.jsx("fieldset",{children:f.jsx(Ce,{to:`/policies/${r.handle}`,children:r.title})},r.id):null)})]})}),$x=`#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`,jx=Object.freeze(Object.defineProperty({__proto__:null,default:_x,loader:Ex},Symbol.toStringTag,{value:"Module"}));async function Rx({request:e,context:t}){return t.customerAccount.login()}const Ax=Object.freeze(Object.defineProperty({__proto__:null,loader:Rx},Symbol.toStringTag,{value:"Module"}));async function Px({request:e,context:t,params:r}){const{cart:n}=t,{code:o}=r,a=new URL(e.url),s=new URLSearchParams(a.search);let i=s.get("redirect")||s.get("return_to")||"/";i.includes("//")&&(i="/"),s.delete("redirect"),s.delete("return_to");const l=`${i}?${s}`;if(!o)return qe(l);const d=await n.updateDiscountCodes([o]),m=n.setCartId(d.cart.id);return qe(l,{status:303,headers:m})}const Ix=Object.freeze(Object.defineProperty({__proto__:null,loader:Px},Symbol.toStringTag,{value:"Module"}));async function kx({request:e,context:{storefront:t}}){const r=await Ng({storefront:t,request:e});return r.headers.set("Cache-Control",`max-age=${60*60*24}`),r}const Tx=Object.freeze(Object.defineProperty({__proto__:null,loader:kx},Symbol.toStringTag,{value:"Module"})),Dx=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.page.title)??""}`}];async function Ox(e){const t=Mx(e),r=await Lx(e);return{...t,...r}}async function Lx({context:e,request:t,params:r}){if(!r.handle)throw new Error("Missing page handle");const[{page:n}]=await Promise.all([e.storefront.query(Fx,{variables:{handle:r.handle}})]);if(!n)throw new Response("Not Found",{status:404});return _n(t,{handle:r.handle,data:n}),{page:n}}function Mx({context:e}){return{}}const Nx=$e(function(){const{page:t}=Re();return f.jsxs("div",{className:"page",children:[f.jsx("header",{children:f.jsx("h1",{children:t.title})}),f.jsx("main",{dangerouslySetInnerHTML:{__html:t.body}})]})}),Fx=`#graphql
  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      handle
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`,Ux=Object.freeze(Object.defineProperty({__proto__:null,default:Nx,loader:Ox,meta:Dx},Symbol.toStringTag,{value:"Module"})),Hx=()=>[{title:"Hydrogen | Blogs"}];async function Bx(e){const t=qx(e),r=await Vx(e);return{...t,...r}}async function Vx({context:e,request:t}){const r=rr(t,{pageBy:10}),[{blogs:n}]=await Promise.all([e.storefront.query(Wx,{variables:{...r}})]);return{blogs:n}}function qx({context:e}){return{}}const zx=$e(function(){const{blogs:t}=Re();return f.jsxs("div",{className:"blogs",children:[f.jsx("h1",{children:"Blogs"}),f.jsx("div",{className:"blogs-grid",children:f.jsx($n,{connection:t,children:({node:r})=>f.jsx(Ce,{className:"blog",prefetch:"intent",to:`/blogs/${r.handle}`,children:f.jsx("h2",{children:r.title})},r.handle)})})]})}),Wx=`#graphql
  query Blogs(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    blogs(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        title
        handle
        seo {
          title
          description
        }
      }
    }
  }
`,Gx=Object.freeze(Object.defineProperty({__proto__:null,default:zx,loader:Bx,meta:Hx},Symbol.toStringTag,{value:"Module"})),Qx=`#graphql
  fragment Customer on Customer {
    id
    firstName
    lastName
    defaultAddress {
      ...Address
    }
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
  }
  fragment Address on CustomerAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    territoryCode
    zoneCode
    city
    zip
    phoneNumber
  }
`,Yx=`#graphql
  query CustomerDetails {
    customer {
      ...Customer
    }
  }
  ${Qx}
`;function Kx(){return!0}async function Jx({context:e}){const{data:t,errors:r}=await e.customerAccount.query(Yx);if(r!=null&&r.length||!(t!=null&&t.customer))throw new Error("Customer not found");return De({customer:t.customer},{headers:{"Cache-Control":"no-cache, no-store, must-revalidate"}})}const Zx=$e(function(){const{customer:t}=Re(),r=t?t.firstName?`Welcome, ${t.firstName}`:"Welcome to your account.":"Account Details";return f.jsxs("div",{className:"account",children:[f.jsx("h1",{children:r}),f.jsx("br",{}),f.jsx(Xx,{}),f.jsx("br",{}),f.jsx("br",{}),f.jsx(Ol,{context:{customer:t}})]})});function Xx(){function e({isActive:t,isPending:r}){return{fontWeight:t?"bold":void 0,color:r?"grey":"black"}}return f.jsxs("nav",{role:"navigation",children:[f.jsx(kt,{to:"/account/orders",style:e,children:"Orders  "})," | ",f.jsx(kt,{to:"/account/profile",style:e,children:"  Profile  "})," | ",f.jsx(kt,{to:"/account/addresses",style:e,children:"  Addresses  "})," | ",f.jsx(ew,{})]})}function ew(){return f.jsxs(kr,{className:"account-logout",method:"POST",action:"/account/logout",children:[" ",f.jsx("button",{type:"submit",children:"Sign out"})]})}const tw=Object.freeze(Object.defineProperty({__proto__:null,default:Zx,loader:Jx,shouldRevalidate:Kx},Symbol.toStringTag,{value:"Module"})),rw=`#graphql
  fragment OrderItem on Order {
    totalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillments(first: 1) {
      nodes {
        status
      }
    }
    id
    number
    processedAt
  }
`,nw=`#graphql
  fragment CustomerOrders on Customer {
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
  ${rw}
`,ow=`#graphql
  ${nw}
  query CustomerOrders(
    $endCursor: String
    $first: Int
    $last: Int
    $startCursor: String
  ) {
    customer {
      ...CustomerOrders
    }
  }
`,aw=()=>[{title:"Orders"}];async function sw({request:e,context:t}){const r=rr(e,{pageBy:20}),{data:n,errors:o}=await t.customerAccount.query(ow,{variables:{...r}});if(o!=null&&o.length||!(n!=null&&n.customer))throw Error("Customer orders not found");return{customer:n.customer}}const iw=$e(function(){const{customer:t}=Re(),{orders:r}=t;return f.jsx("div",{className:"orders",children:r.nodes.length?f.jsx(lw,{orders:r}):f.jsx(sc,{})})});function lw({orders:e}){return f.jsx("div",{className:"acccount-orders",children:e!=null&&e.nodes.length?f.jsx($n,{connection:e,children:({node:t})=>f.jsx(uw,{order:t},t.id)}):f.jsx(sc,{})})}function sc(){return f.jsxs("div",{children:[f.jsx("p",{children:"You haven't placed any orders yet."}),f.jsx("br",{}),f.jsx("p",{children:f.jsx(Ce,{to:"/collections",children:"Start Shopping →"})})]})}function uw({order:e}){var r;const t=(r=bt(e.fulfillments)[0])==null?void 0:r.status;return f.jsxs(f.Fragment,{children:[f.jsxs("fieldset",{children:[f.jsx(Ce,{to:`/account/orders/${btoa(e.id)}`,children:f.jsxs("strong",{children:["#",e.number]})}),f.jsx("p",{children:new Date(e.processedAt).toDateString()}),f.jsx("p",{children:e.financialStatus}),t&&f.jsx("p",{children:t}),f.jsx(Oe,{data:e.totalPrice}),f.jsx(Ce,{to:`/account/orders/${btoa(e.id)}`,children:"View Order →"})]}),f.jsx("br",{})]})}const cw=Object.freeze(Object.defineProperty({__proto__:null,default:iw,loader:sw,meta:aw},Symbol.toStringTag,{value:"Module"})),dw=`#graphql
  fragment OrderMoney on MoneyV2 {
    amount
    currencyCode
  }
  fragment DiscountApplication on DiscountApplication {
    value {
      __typename
      ... on MoneyV2 {
        ...OrderMoney
      }
      ... on PricingPercentageValue {
        percentage
      }
    }
  }
  fragment OrderLineItemFull on LineItem {
    id
    title
    quantity
    price {
      ...OrderMoney
    }
    discountAllocations {
      allocatedAmount {
        ...OrderMoney
      }
      discountApplication {
        ...DiscountApplication
      }
    }
    totalDiscount {
      ...OrderMoney
    }
    image {
      altText
      height
      url
      id
      width
    }
    variantTitle
  }
  fragment Order on Order {
    id
    name
    statusPageUrl
    processedAt
    fulfillments(first: 1) {
      nodes {
        status
      }
    }
    totalTax {
      ...OrderMoney
    }
    totalPrice {
      ...OrderMoney
    }
    subtotal {
      ...OrderMoney
    }
    shippingAddress {
      name
      formatted(withName: true)
      formattedArea
    }
    discountApplications(first: 100) {
      nodes {
        ...DiscountApplication
      }
    }
    lineItems(first: 100) {
      nodes {
        ...OrderLineItemFull
      }
    }
  }
  query Order($orderId: ID!) {
    order(id: $orderId) {
      ... on Order {
        ...Order
      }
    }
  }
`,fw=({data:e})=>{var t;return[{title:`Order ${(t=e==null?void 0:e.order)==null?void 0:t.name}`}]};async function hw({params:e,context:t}){var y,C;if(!e.id)return qe("/account/orders");const r=atob(e.id),{data:n,errors:o}=await t.customerAccount.query(dw,{variables:{orderId:r}});if(o!=null&&o.length||!(n!=null&&n.order))throw new Error("Order not found");const{order:a}=n,s=bt(a.lineItems),i=bt(a.discountApplications),l=((y=bt(a.fulfillments)[0])==null?void 0:y.status)??"N/A",d=(C=i[0])==null?void 0:C.value,m=(d==null?void 0:d.__typename)==="MoneyV2"&&d,g=(d==null?void 0:d.__typename)==="PricingPercentageValue"&&(d==null?void 0:d.percentage);return{order:a,lineItems:s,discountValue:m,discountPercentage:g,fulfillmentStatus:l}}const pw=$e(function(){const{order:t,lineItems:r,discountValue:n,discountPercentage:o,fulfillmentStatus:a}=Re();return f.jsxs("div",{className:"account-order",children:[f.jsxs("h2",{children:["Order ",t.name]}),f.jsxs("p",{children:["Placed on ",new Date(t.processedAt).toDateString()]}),f.jsx("br",{}),f.jsxs("div",{children:[f.jsxs("table",{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",children:"Product"}),f.jsx("th",{scope:"col",children:"Price"}),f.jsx("th",{scope:"col",children:"Quantity"}),f.jsx("th",{scope:"col",children:"Total"})]})}),f.jsx("tbody",{children:r.map((s,i)=>f.jsx(mw,{lineItem:s},i))}),f.jsxs("tfoot",{children:[(n&&n.amount||o)&&f.jsxs("tr",{children:[f.jsx("th",{scope:"row",colSpan:3,children:f.jsx("p",{children:"Discounts"})}),f.jsx("th",{scope:"row",children:f.jsx("p",{children:"Discounts"})}),f.jsx("td",{children:o?f.jsxs("span",{children:["-",o,"% OFF"]}):n&&f.jsx(Oe,{data:n})})]}),f.jsxs("tr",{children:[f.jsx("th",{scope:"row",colSpan:3,children:f.jsx("p",{children:"Subtotal"})}),f.jsx("th",{scope:"row",children:f.jsx("p",{children:"Subtotal"})}),f.jsx("td",{children:f.jsx(Oe,{data:t.subtotal})})]}),f.jsxs("tr",{children:[f.jsx("th",{scope:"row",colSpan:3,children:"Tax"}),f.jsx("th",{scope:"row",children:f.jsx("p",{children:"Tax"})}),f.jsx("td",{children:f.jsx(Oe,{data:t.totalTax})})]}),f.jsxs("tr",{children:[f.jsx("th",{scope:"row",colSpan:3,children:"Total"}),f.jsx("th",{scope:"row",children:f.jsx("p",{children:"Total"})}),f.jsx("td",{children:f.jsx(Oe,{data:t.totalPrice})})]})]})]}),f.jsxs("div",{children:[f.jsx("h3",{children:"Shipping Address"}),t!=null&&t.shippingAddress?f.jsxs("address",{children:[f.jsx("p",{children:t.shippingAddress.name}),t.shippingAddress.formatted?f.jsx("p",{children:t.shippingAddress.formatted}):"",t.shippingAddress.formattedArea?f.jsx("p",{children:t.shippingAddress.formattedArea}):""]}):f.jsx("p",{children:"No shipping address defined"}),f.jsx("h3",{children:"Status"}),f.jsx("div",{children:f.jsx("p",{children:a})})]})]}),f.jsx("br",{}),f.jsx("p",{children:f.jsx("a",{target:"_blank",href:t.statusPageUrl,rel:"noreferrer",children:"View Order Status →"})})]})});function mw({lineItem:e}){return f.jsxs("tr",{children:[f.jsx("td",{children:f.jsxs("div",{children:[(e==null?void 0:e.image)&&f.jsx("div",{children:f.jsx(st,{data:e.image,width:96,height:96})}),f.jsxs("div",{children:[f.jsx("p",{children:e.title}),f.jsx("small",{children:e.variantTitle})]})]})}),f.jsx("td",{children:f.jsx(Oe,{data:e.price})}),f.jsx("td",{children:e.quantity}),f.jsx("td",{children:f.jsx(Oe,{data:e.totalDiscount})})]},e.id)}const gw=Object.freeze(Object.defineProperty({__proto__:null,default:pw,loader:hw,meta:fw},Symbol.toStringTag,{value:"Module"})),yw=`#graphql
  mutation customerAddressUpdate(
    $address: CustomerAddressInput!
    $addressId: ID!
    $defaultAddress: Boolean
 ) {
    customerAddressUpdate(
      address: $address
      addressId: $addressId
      defaultAddress: $defaultAddress
    ) {
      customerAddress {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,vw=`#graphql
  mutation customerAddressDelete(
    $addressId: ID!,
  ) {
    customerAddressDelete(addressId: $addressId) {
      deletedAddressId
      userErrors {
        code
        field
        message
      }
    }
  }
`,xw=`#graphql
  mutation customerAddressCreate(
    $address: CustomerAddressInput!
    $defaultAddress: Boolean
  ) {
    customerAddressCreate(
      address: $address
      defaultAddress: $defaultAddress
    ) {
      customerAddress {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,ww=()=>[{title:"Addresses"}];async function Cw({context:e}){return await e.customerAccount.handleAuthStatus(),{}}async function Sw({request:e,context:t}){var n,o,a,s,i,l,d,m,g,y,C,v,b;const{customerAccount:r}=t;try{const j=await e.formData(),$=j.has("addressId")?String(j.get("addressId")):null;if(!$)throw new Error("You must provide an address id.");if(!await r.isLoggedIn())return De({error:{[$]:"Unauthorized"}},{status:401});const L=j.has("defaultAddress")?String(j.get("defaultAddress"))==="on":!1,F={},O=["address1","address2","city","company","territoryCode","firstName","lastName","phoneNumber","zoneCode","zip"];for(const D of O){const H=j.get(D);typeof H=="string"&&(F[D]=H)}switch(e.method){case"POST":try{const{data:D,errors:H}=await r.mutate(xw,{variables:{address:F,defaultAddress:L}});if(H!=null&&H.length)throw new Error(H[0].message);if((o=(n=D==null?void 0:D.customerAddressCreate)==null?void 0:n.userErrors)!=null&&o.length)throw new Error((a=D==null?void 0:D.customerAddressCreate)==null?void 0:a.userErrors[0].message);if(!((s=D==null?void 0:D.customerAddressCreate)!=null&&s.customerAddress))throw new Error("Customer address create failed.");return{error:null,createdAddress:(i=D==null?void 0:D.customerAddressCreate)==null?void 0:i.customerAddress,defaultAddress:L}}catch(D){return D instanceof Error?De({error:{[$]:D.message}},{status:400}):De({error:{[$]:D}},{status:400})}case"PUT":try{const{data:D,errors:H}=await r.mutate(yw,{variables:{address:F,addressId:decodeURIComponent($),defaultAddress:L}});if(H!=null&&H.length)throw new Error(H[0].message);if((d=(l=D==null?void 0:D.customerAddressUpdate)==null?void 0:l.userErrors)!=null&&d.length)throw new Error((m=D==null?void 0:D.customerAddressUpdate)==null?void 0:m.userErrors[0].message);if(!((g=D==null?void 0:D.customerAddressUpdate)!=null&&g.customerAddress))throw new Error("Customer address update failed.");return{error:null,updatedAddress:F,defaultAddress:L}}catch(D){return D instanceof Error?De({error:{[$]:D.message}},{status:400}):De({error:{[$]:D}},{status:400})}case"DELETE":try{const{data:D,errors:H}=await r.mutate(vw,{variables:{addressId:decodeURIComponent($)}});if(H!=null&&H.length)throw new Error(H[0].message);if((C=(y=D==null?void 0:D.customerAddressDelete)==null?void 0:y.userErrors)!=null&&C.length)throw new Error((v=D==null?void 0:D.customerAddressDelete)==null?void 0:v.userErrors[0].message);if(!((b=D==null?void 0:D.customerAddressDelete)!=null&&b.deletedAddressId))throw new Error("Customer address delete failed.");return{error:null,deletedAddress:$}}catch(D){return D instanceof Error?De({error:{[$]:D.message}},{status:400}):De({error:{[$]:D}},{status:400})}default:return De({error:{[$]:"Method not allowed"}},{status:405})}}catch(j){return j instanceof Error?De({error:j.message},{status:400}):De({error:j},{status:400})}}const bw=$e(function(){const{customer:t}=Al(),{defaultAddress:r,addresses:n}=t;return f.jsxs("div",{className:"account-addresses",children:[f.jsx("h2",{children:"Addresses"}),f.jsx("br",{}),n.nodes.length?f.jsxs("div",{children:[f.jsxs("div",{children:[f.jsx("legend",{children:"Create address"}),f.jsx(Ew,{})]}),f.jsx("br",{}),f.jsx("hr",{}),f.jsx("br",{}),f.jsx(_w,{addresses:n,defaultAddress:r})]}):f.jsx("p",{children:"You have no addresses saved."})]})});function Ew(){const e={address1:"",address2:"",city:"",company:"",territoryCode:"",firstName:"",id:"new",lastName:"",phoneNumber:"",zoneCode:"",zip:""};return f.jsx(Rs,{addressId:"NEW_ADDRESS_ID",address:e,defaultAddress:null,children:({stateForMethod:t})=>f.jsx("div",{children:f.jsx("button",{disabled:t("POST")!=="idle",formMethod:"POST",type:"submit",children:t("POST")!=="idle"?"Creating":"Create"})})})}function _w({addresses:e,defaultAddress:t}){return f.jsxs("div",{children:[f.jsx("legend",{children:"Existing addresses"}),e.nodes.map(r=>f.jsx(Rs,{addressId:r.id,address:r,defaultAddress:t,children:({stateForMethod:n})=>f.jsxs("div",{children:[f.jsx("button",{disabled:n("PUT")!=="idle",formMethod:"PUT",type:"submit",children:n("PUT")!=="idle"?"Saving":"Save"}),f.jsx("button",{disabled:n("DELETE")!=="idle",formMethod:"DELETE",type:"submit",children:n("DELETE")!=="idle"?"Deleting":"Delete"})]})},r.id))]})}function Rs({addressId:e,address:t,defaultAddress:r,children:n}){var d;const{state:o,formMethod:a}=Pr(),s=Uo(),i=(d=s==null?void 0:s.error)==null?void 0:d[e],l=(r==null?void 0:r.id)===e;return f.jsx(kr,{id:e,children:f.jsxs("fieldset",{children:[f.jsx("input",{type:"hidden",name:"addressId",defaultValue:e}),f.jsx("label",{htmlFor:"firstName",children:"First name*"}),f.jsx("input",{"aria-label":"First name",autoComplete:"given-name",defaultValue:(t==null?void 0:t.firstName)??"",id:"firstName",name:"firstName",placeholder:"First name",required:!0,type:"text"}),f.jsx("label",{htmlFor:"lastName",children:"Last name*"}),f.jsx("input",{"aria-label":"Last name",autoComplete:"family-name",defaultValue:(t==null?void 0:t.lastName)??"",id:"lastName",name:"lastName",placeholder:"Last name",required:!0,type:"text"}),f.jsx("label",{htmlFor:"company",children:"Company"}),f.jsx("input",{"aria-label":"Company",autoComplete:"organization",defaultValue:(t==null?void 0:t.company)??"",id:"company",name:"company",placeholder:"Company",type:"text"}),f.jsx("label",{htmlFor:"address1",children:"Address line*"}),f.jsx("input",{"aria-label":"Address line 1",autoComplete:"address-line1",defaultValue:(t==null?void 0:t.address1)??"",id:"address1",name:"address1",placeholder:"Address line 1*",required:!0,type:"text"}),f.jsx("label",{htmlFor:"address2",children:"Address line 2"}),f.jsx("input",{"aria-label":"Address line 2",autoComplete:"address-line2",defaultValue:(t==null?void 0:t.address2)??"",id:"address2",name:"address2",placeholder:"Address line 2",type:"text"}),f.jsx("label",{htmlFor:"city",children:"City*"}),f.jsx("input",{"aria-label":"City",autoComplete:"address-level2",defaultValue:(t==null?void 0:t.city)??"",id:"city",name:"city",placeholder:"City",required:!0,type:"text"}),f.jsx("label",{htmlFor:"zoneCode",children:"State / Province*"}),f.jsx("input",{"aria-label":"State/Province",autoComplete:"address-level1",defaultValue:(t==null?void 0:t.zoneCode)??"",id:"zoneCode",name:"zoneCode",placeholder:"State / Province",required:!0,type:"text"}),f.jsx("label",{htmlFor:"zip",children:"Zip / Postal Code*"}),f.jsx("input",{"aria-label":"Zip",autoComplete:"postal-code",defaultValue:(t==null?void 0:t.zip)??"",id:"zip",name:"zip",placeholder:"Zip / Postal Code",required:!0,type:"text"}),f.jsx("label",{htmlFor:"territoryCode",children:"Country Code*"}),f.jsx("input",{"aria-label":"territoryCode",autoComplete:"country",defaultValue:(t==null?void 0:t.territoryCode)??"",id:"territoryCode",name:"territoryCode",placeholder:"Country",required:!0,type:"text",maxLength:2}),f.jsx("label",{htmlFor:"phoneNumber",children:"Phone"}),f.jsx("input",{"aria-label":"Phone Number",autoComplete:"tel",defaultValue:(t==null?void 0:t.phoneNumber)??"",id:"phoneNumber",name:"phoneNumber",placeholder:"+16135551111",pattern:"^\\+?[1-9]\\d{3,14}$",type:"tel"}),f.jsxs("div",{children:[f.jsx("input",{defaultChecked:l,id:"defaultAddress",name:"defaultAddress",type:"checkbox"}),f.jsx("label",{htmlFor:"defaultAddress",children:"Set as default address"})]}),i?f.jsx("p",{children:f.jsx("mark",{children:f.jsx("small",{children:i})})}):f.jsx("br",{}),n({stateForMethod:m=>a===m?o:"idle"})]})})}const $w=Object.freeze(Object.defineProperty({__proto__:null,AddressForm:Rs,action:Sw,default:bw,loader:Cw,meta:ww},Symbol.toStringTag,{value:"Module"})),jw=`#graphql
  # https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
  ){
    customerUpdate(input: $customer) {
      customer {
        firstName
        lastName
        emailAddress {
          emailAddress
        }
        phoneNumber {
          phoneNumber
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`,Rw=()=>[{title:"Profile"}];async function Aw({context:e}){return await e.customerAccount.handleAuthStatus(),{}}async function Pw({request:e,context:t}){var o,a;const{customerAccount:r}=t;if(e.method!=="PUT")return De({error:"Method not allowed"},{status:405});const n=await e.formData();try{const s={},i=["firstName","lastName"];for(const[m,g]of n.entries())i.includes(m)&&typeof g=="string"&&g.length&&(s[m]=g);const{data:l,errors:d}=await r.mutate(jw,{variables:{customer:s}});if(d!=null&&d.length)throw new Error(d[0].message);if(!((o=l==null?void 0:l.customerUpdate)!=null&&o.customer))throw new Error("Customer profile update failed.");return{error:null,customer:(a=l==null?void 0:l.customerUpdate)==null?void 0:a.customer}}catch(s){return De({error:s.message,customer:null},{status:400})}}const Iw=$e(function(){const t=Al(),{state:r}=Pr(),n=Uo(),o=(n==null?void 0:n.customer)??(t==null?void 0:t.customer);return f.jsxs("div",{className:"account-profile",children:[f.jsx("h2",{children:"My profile"}),f.jsx("br",{}),f.jsxs(kr,{method:"PUT",children:[f.jsx("legend",{children:"Personal information"}),f.jsxs("fieldset",{children:[f.jsx("label",{htmlFor:"firstName",children:"First name"}),f.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",placeholder:"First name","aria-label":"First name",defaultValue:o.firstName??"",minLength:2}),f.jsx("label",{htmlFor:"lastName",children:"Last name"}),f.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",placeholder:"Last name","aria-label":"Last name",defaultValue:o.lastName??"",minLength:2})]}),n!=null&&n.error?f.jsx("p",{children:f.jsx("mark",{children:f.jsx("small",{children:n.error})})}):f.jsx("br",{}),f.jsx("button",{type:"submit",disabled:r!=="idle",children:r!=="idle"?"Updating":"Update"})]})]})}),kw=Object.freeze(Object.defineProperty({__proto__:null,action:Pw,default:Iw,loader:Aw,meta:Rw},Symbol.toStringTag,{value:"Module"}));async function Tw(){return qe("/account/orders")}const Dw=Object.freeze(Object.defineProperty({__proto__:null,loader:Tw},Symbol.toStringTag,{value:"Module"}));async function Ow({context:e}){return await e.customerAccount.handleAuthStatus(),qe("/account")}const Lw=Object.freeze(Object.defineProperty({__proto__:null,loader:Ow},Symbol.toStringTag,{value:"Module"})),Mw=()=>[{title:"Hydrogen | Home"}];async function Nw(e){return Fw(e)}function Fw({context:e}){return{recommendedProducts:e.storefront.query(Vw).catch(r=>(console.error(r),null))}}const Uw=$e(function(){const t=Re();return f.jsxs("div",{className:"w-full max-w-none m-0 p-0 overflow-x-hidden",children:[f.jsx(Hw,{}),f.jsx(Bw,{products:t.recommendedProducts})]})});function Hw(){const e=["https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed-2.png?v=1752944229","https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed_1.png?v=1752944229","https://cdn.shopify.com/s/files/1/0704/7908/5731/files/upscalemedia-transformed.png?v=1752944228"],[t,r]=S.useState(0);return S.useEffect(()=>{const n=setInterval(()=>{r(o=>(o+1)%e.length)},5e3);return()=>clearInterval(n)},[e.length]),f.jsx("section",{className:"w-full h-screen relative overflow-hidden m-0 p-0",children:e.map((n,o)=>f.jsx("img",{src:n,alt:`Slide ${o+1}`,className:`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${o===t?"opacity-100":"opacity-0"}`},o))})}function Bw({products:e}){return f.jsxs("div",{className:"recommended-products px-4 sm:px-8 py-14 bg-white",children:[f.jsxs("div",{className:"text-center max-w-7xl mx-auto mb-10",children:[f.jsx("h2",{className:"text-3xl sm:text-4xl font-semibold tracking-wide uppercase mb-4",children:"Timeless Elegance"}),f.jsx("p",{className:"text-gray-600 text-base sm:text-lg leading-relaxed",children:"A celebration of refinement and distinction, where fluid silhouettes meet intricate embroidery, and every thread speaks to quiet sophistication. These curated pieces transcend fleeting trends, embodying a timeless elegance for the modern woman who dresses with purpose."})]}),f.jsx(S.Suspense,{fallback:f.jsx("div",{className:"text-center",children:"Loading..."}),children:f.jsx(yn,{resolve:e,children:t=>f.jsx("div",{className:"overflow-x-auto scrollbar-hide",children:f.jsx("div",{className:"flex gap-6 px-4 sm:px-0 max-w-7xl mx-auto",children:t==null?void 0:t.products.nodes.map(r=>{var n,o;return f.jsx(Ce,{to:`/products/${r.handle}`,className:"flex-shrink-0 w-[300px] block group transition-all duration-300 transform hover:scale-105",children:f.jsx("div",{className:"bg-white rounded-2xl shadow-md group-hover:shadow-xl overflow-hidden h-[420px]",children:f.jsx("img",{src:(n=r.featuredImage)==null?void 0:n.url,alt:((o=r.featuredImage)==null?void 0:o.altText)??"Product Image",className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"})})},r.id)})})})})})]})}const Vw=`#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 20, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`,qw=Object.freeze(Object.defineProperty({__proto__:null,default:Uw,loader:Nw,meta:Mw},Symbol.toStringTag,{value:"Module"}));function zw({children:e,...t}){const r=S.useRef(null);return Ww(r),typeof e!="function"?null:f.jsx(kr,{method:"get",...t,children:e({inputRef:r})})}function Ww(e){S.useEffect(()=>{function t(r){var n,o;r.key==="k"&&r.metaKey&&(r.preventDefault(),(n=e.current)==null||n.focus()),r.key==="Escape"&&((o=e.current)==null||o.blur())}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[e])}function xt({term:e,result:t,children:r}){return t!=null&&t.total?r({...t.items,term:e}):null}xt.Articles=Gw;xt.Pages=Qw;xt.Products=Yw;xt.Empty=Kw;function Gw({term:e,articles:t}){var r;return t!=null&&t.nodes.length?f.jsxs("div",{className:"search-result",children:[f.jsx("h2",{children:"Articles"}),f.jsx("div",{children:(r=t==null?void 0:t.nodes)==null?void 0:r.map(n=>{const o=nr({baseUrl:`/blogs/${n.handle}`,trackingParams:n.trackingParameters,term:e});return f.jsx("div",{className:"search-results-item",children:f.jsx(Ce,{prefetch:"intent",to:o,children:n.title})},n.id)})}),f.jsx("br",{})]}):null}function Qw({term:e,pages:t}){var r;return t!=null&&t.nodes.length?f.jsxs("div",{className:"search-result",children:[f.jsx("h2",{children:"Pages"}),f.jsx("div",{children:(r=t==null?void 0:t.nodes)==null?void 0:r.map(n=>{const o=nr({baseUrl:`/pages/${n.handle}`,trackingParams:n.trackingParameters,term:e});return f.jsx("div",{className:"search-results-item",children:f.jsx(Ce,{prefetch:"intent",to:o,children:n.title})},n.id)})}),f.jsx("br",{})]}):null}function Yw({term:e,products:t}){return t!=null&&t.nodes.length?f.jsxs("div",{className:"search-result",children:[f.jsx("h2",{children:"Products"}),f.jsx(Qu,{connection:t,children:({nodes:r,isLoading:n,NextLink:o,PreviousLink:a})=>{const s=r.map(i=>{var g,y;const l=nr({baseUrl:`/products/${i.handle}`,trackingParams:i.trackingParameters,term:e}),d=(g=i==null?void 0:i.selectedOrFirstAvailableVariant)==null?void 0:g.price,m=(y=i==null?void 0:i.selectedOrFirstAvailableVariant)==null?void 0:y.image;return f.jsx("div",{className:"search-results-item",children:f.jsxs(Ce,{prefetch:"intent",to:l,children:[m&&f.jsx(st,{data:m,alt:i.title,width:50}),f.jsxs("div",{children:[f.jsx("p",{children:i.title}),f.jsx("small",{children:d&&f.jsx(Oe,{data:d})})]})]})},i.id)});return f.jsxs("div",{children:[f.jsx("div",{children:f.jsx(a,{children:n?"Loading...":f.jsx("span",{children:"↑ Load previous"})})}),f.jsxs("div",{children:[s,f.jsx("br",{})]}),f.jsx("div",{children:f.jsx(o,{children:n?"Loading...":f.jsx("span",{children:"Load more ↓"})})})]})}}),f.jsx("br",{})]}):null}function Kw(){return f.jsx("p",{children:"No results, try a different search."})}const Jw=()=>[{title:"Hydrogen | Search"}];async function Zw({request:e,context:t}){const o=new URL(e.url).searchParams.has("predictive")?d0({request:e,context:t}):o0({request:e,context:t});return o.catch(a=>(console.error(a),{term:"",result:null,error:a.message})),await o}const Xw=$e(function(){const{type:t,term:r,result:n,error:o}=Re();return t==="predictive"?null:f.jsxs("div",{className:"search",children:[f.jsx("h1",{children:"Search"}),f.jsx(zw,{children:({inputRef:a})=>f.jsxs(f.Fragment,{children:[f.jsx("input",{defaultValue:r,name:"q",placeholder:"Search…",ref:a,type:"search"})," ",f.jsx("button",{type:"submit",children:"Search"})]})}),o&&f.jsx("p",{style:{color:"red"},children:o}),!r||!(n!=null&&n.total)?f.jsx(xt.Empty,{}):f.jsx(xt,{result:n,term:r,children:({articles:a,pages:s,products:i,term:l})=>f.jsxs("div",{children:[f.jsx(xt.Products,{products:i,term:l}),f.jsx(xt.Pages,{pages:s,term:l}),f.jsx(xt.Articles,{articles:a,term:l})]})}),f.jsx(Qo.SearchView,{data:{searchTerm:r,searchResults:n}})]})}),e0=`#graphql
  fragment SearchProduct on Product {
    __typename
    handle
    id
    publishedAt
    title
    trackingParameters
    vendor
    selectedOrFirstAvailableVariant(
      selectedOptions: []
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      id
      image {
        url
        altText
        width
        height
      }
      price {
        amount
        currencyCode
      }
      compareAtPrice {
        amount
        currencyCode
      }
      selectedOptions {
        name
        value
      }
      product {
        handle
        title
      }
    }
  }
`,t0=`#graphql
  fragment SearchPage on Page {
     __typename
     handle
    id
    title
    trackingParameters
  }
`,r0=`#graphql
  fragment SearchArticle on Article {
    __typename
    handle
    id
    title
    trackingParameters
  }
`,n0=`#graphql
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`,ic=`#graphql
  query RegularSearch(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $term: String!
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    articles: search(
      query: $term,
      types: [ARTICLE],
      first: $first,
    ) {
      nodes {
        ...on Article {
          ...SearchArticle
        }
      }
    }
    pages: search(
      query: $term,
      types: [PAGE],
      first: $first,
    ) {
      nodes {
        ...on Page {
          ...SearchPage
        }
      }
    }
    products: search(
      after: $endCursor,
      before: $startCursor,
      first: $first,
      last: $last,
      query: $term,
      sortKey: RELEVANCE,
      types: [PRODUCT],
      unavailableProducts: HIDE,
    ) {
      nodes {
        ...on Product {
          ...SearchProduct
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
  ${e0}
  ${t0}
  ${r0}
  ${n0}
`;async function o0({request:e,context:t}){const{storefront:r}=t,n=new URL(e.url),o=rr(e,{pageBy:8}),a=String(n.searchParams.get("q")||""),{errors:s,...i}=await r.query(ic,{variables:{...o,term:a}});if(!i)throw new Error("No search data returned from Shopify API");const l=Object.values(i).reduce((m,{nodes:g})=>m+g.length,0),d=s?s.map(({message:m})=>m).join(", "):void 0;return{type:"regular",term:a,error:d,result:{total:l,items:i}}}const a0=`#graphql
  fragment PredictiveArticle on Article {
    __typename
    id
    title
    handle
    blog {
      handle
    }
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
`,s0=`#graphql
  fragment PredictiveCollection on Collection {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
`,i0=`#graphql
  fragment PredictivePage on Page {
    __typename
    id
    title
    handle
    trackingParameters
  }
`,l0=`#graphql
  fragment PredictiveProduct on Product {
    __typename
    id
    title
    handle
    trackingParameters
    selectedOrFirstAvailableVariant(
      selectedOptions: []
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      id
      image {
        url
        altText
        width
        height
      }
      price {
        amount
        currencyCode
      }
    }
  }
`,u0=`#graphql
  fragment PredictiveQuery on SearchQuerySuggestion {
    __typename
    text
    styledText
    trackingParameters
  }
`,c0=`#graphql
  query PredictiveSearch(
    $country: CountryCode
    $language: LanguageCode
    $limit: Int!
    $limitScope: PredictiveSearchLimitScope!
    $term: String!
    $types: [PredictiveSearchType!]
  ) @inContext(country: $country, language: $language) {
    predictiveSearch(
      limit: $limit,
      limitScope: $limitScope,
      query: $term,
      types: $types,
    ) {
      articles {
        ...PredictiveArticle
      }
      collections {
        ...PredictiveCollection
      }
      pages {
        ...PredictivePage
      }
      products {
        ...PredictiveProduct
      }
      queries {
        ...PredictiveQuery
      }
    }
  }
  ${a0}
  ${s0}
  ${i0}
  ${l0}
  ${u0}
`;async function d0({request:e,context:t}){const{storefront:r}=t,n=new URL(e.url),o=String(n.searchParams.get("q")||"").trim(),a=Number(n.searchParams.get("limit")||10),s="predictive";if(!o)return{type:s,term:o,result:oc()};const{predictiveSearch:i,errors:l}=await r.query(c0,{variables:{limit:a,limitScope:"EACH",term:o}});if(l)throw new Error(`Shopify API errors: ${l.map(({message:m})=>m).join(", ")}`);if(!i)throw new Error("No predictive search data returned from Shopify API");const d=Object.values(i).reduce((m,g)=>m+g.length,0);return{type:s,term:o,result:{items:i,total:d}}}const f0=Object.freeze(Object.defineProperty({__proto__:null,SEARCH_QUERY:ic,default:Xw,loader:Zw,meta:Jw},Symbol.toStringTag,{value:"Module"})),h0=()=>[{title:"Hydrogen | Cart"}],p0=({actionHeaders:e})=>e;async function m0({request:e,context:t}){var v;const{cart:r}=t,n=await e.formData(),{action:o,inputs:a}=we.getFormInput(n);if(!o)throw new Error("No action provided");let s=200,i;switch(o){case we.ACTIONS.LinesAdd:i=await r.addLines(a.lines);break;case we.ACTIONS.LinesUpdate:i=await r.updateLines(a.lines);break;case we.ACTIONS.LinesRemove:i=await r.removeLines(a.lineIds);break;case we.ACTIONS.DiscountCodesUpdate:{const b=a.discountCode,j=b?[b]:[];j.push(...a.discountCodes),i=await r.updateDiscountCodes(j);break}case we.ACTIONS.GiftCardCodesUpdate:{const b=a.giftCardCode,j=b?[b]:[];j.push(...a.giftCardCodes),i=await r.updateGiftCardCodes(j);break}case we.ACTIONS.BuyerIdentityUpdate:{i=await r.updateBuyerIdentity({...a.buyerIdentity});break}default:throw new Error(`${o} cart action is not defined`)}const l=(v=i==null?void 0:i.cart)==null?void 0:v.id,d=l?r.setCartId(i.cart.id):new Headers,{cart:m,errors:g,warnings:y}=i,C=n.get("redirectTo")??null;return typeof C=="string"&&(s=303,d.set("Location",C)),De({cart:m,errors:g,warnings:y,analytics:{cartId:l}},{status:s,headers:d})}async function g0({context:e}){const{cart:t}=e;return await t.get()}const y0=$e(function(){const t=Re();return f.jsxs("div",{className:"cart",children:[f.jsx("h1",{children:"Cart"}),f.jsx(nc,{layout:"page",cart:t})]})}),v0=Object.freeze(Object.defineProperty({__proto__:null,action:m0,default:y0,headers:p0,loader:g0,meta:h0},Symbol.toStringTag,{value:"Module"}));async function x0({request:e,context:t,params:r}){var C;const{cart:n}=t,{lines:o}=r;if(!o)return qe("/cart");const a=o.split(",").map(v=>{const b=v.split(":"),j=b[0],$=parseInt(b[1],10);return{merchandiseId:`gid://shopify/ProductVariant/${j}`,quantity:$}}),s=new URL(e.url),l=new URLSearchParams(s.search).get("discount"),d=l?[l]:[],m=await n.create({lines:a,discountCodes:d}),g=m.cart;if((C=m.errors)!=null&&C.length||!g)throw new Response("Link may be expired. Try checking the URL.",{status:410});const y=n.setCartId(g.id);if(g.checkoutUrl)return qe(g.checkoutUrl,{headers:y});throw new Error("No checkout URL found")}const w0=$e(function(){return null}),C0=Object.freeze(Object.defineProperty({__proto__:null,default:w0,loader:x0},Symbol.toStringTag,{value:"Module"}));async function S0({request:e}){throw new Response(`${new URL(e.url).pathname} not found`,{status:404})}const b0=$e(function(){return null}),E0=Object.freeze(Object.defineProperty({__proto__:null,default:b0,loader:S0},Symbol.toStringTag,{value:"Module"})),_0={entry:{module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/entry.client-BzHiJ9Or.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[]},routes:{root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!0,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/root-SP8AYpwu.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/ProductPrice-wUdys-RI.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/CartMain-CxmoU66u.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/search-DOeYwaXi.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Money-D5nHN9tR.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/variants-Cdxbna-A.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/[robots.txt]":{id:"routes/[robots.txt]",parentId:"root",path:"robots.txt",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/_robots.txt_-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale)":{id:"routes/($locale)",parentId:"root",path:":locale?",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale)-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).blogs.$blogHandle.$articleHandle":{id:"routes/($locale).blogs.$blogHandle.$articleHandle",parentId:"routes/($locale)",path:"blogs/:blogHandle/:articleHandle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).blogs._blogHandle._articleHandle-LJtfrWQa.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).api.$version.[graphql.json]":{id:"routes/($locale).api.$version.[graphql.json]",parentId:"routes/($locale)",path:"api/:version/graphql.json",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!1,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).api._version._graphql.json_-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).sitemap.$type.$page[.xml]":{id:"routes/($locale).sitemap.$type.$page[.xml]",parentId:"routes/($locale)",path:"sitemap/:type/:page.xml",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).sitemap._type._page_.xml_-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).blogs.$blogHandle._index":{id:"routes/($locale).blogs.$blogHandle._index",parentId:"routes/($locale)",path:"blogs/:blogHandle",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).blogs._blogHandle._index-7ghQPurH.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/PaginatedResourceSection-BwoypRwW.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).collections.$handle":{id:"routes/($locale).collections.$handle",parentId:"routes/($locale)",path:"collections/:handle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).collections._handle-DYUXZO9h.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/ProductItem-C3VONsyB.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/variants-Cdxbna-A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account_.authorize":{id:"routes/($locale).account_.authorize",parentId:"routes/($locale)",path:"account/authorize",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account_.authorize-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).collections._index":{id:"routes/($locale).collections._index",parentId:"routes/($locale)",path:"collections",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).collections._index-CZIyeKU9.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/PaginatedResourceSection-BwoypRwW.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).policies.$handle":{id:"routes/($locale).policies.$handle",parentId:"routes/($locale)",path:"policies/:handle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).policies._handle-Bi6PhVvb.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).products.$handle":{id:"routes/($locale).products.$handle",parentId:"routes/($locale)",path:"products/:handle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).products._handle-Exn_Ov8l.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/ProductPrice-wUdys-RI.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account_.logout":{id:"routes/($locale).account_.logout",parentId:"routes/($locale)",path:"account/logout",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account_.logout-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).collections.all":{id:"routes/($locale).collections.all",parentId:"routes/($locale)",path:"collections/all",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).collections.all-DlrfTlgB.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/PaginatedResourceSection-BwoypRwW.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/ProductItem-C3VONsyB.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/variants-Cdxbna-A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).policies._index":{id:"routes/($locale).policies._index",parentId:"routes/($locale)",path:"policies",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).policies._index-B7AClpI2.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account_.login":{id:"routes/($locale).account_.login",parentId:"routes/($locale)",path:"account/login",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account_.login-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).discount.$code":{id:"routes/($locale).discount.$code",parentId:"routes/($locale)",path:"discount/:code",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).discount._code-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).[sitemap.xml]":{id:"routes/($locale).[sitemap.xml]",parentId:"routes/($locale)",path:"sitemap.xml",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale)._sitemap.xml_-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).pages.$handle":{id:"routes/($locale).pages.$handle",parentId:"routes/($locale)",path:"pages/:handle",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).pages._handle-oYM1bBHM.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).blogs._index":{id:"routes/($locale).blogs._index",parentId:"routes/($locale)",path:"blogs",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).blogs._index-ByTunIpW.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/PaginatedResourceSection-BwoypRwW.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account":{id:"routes/($locale).account",parentId:"routes/($locale)",path:"account",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account-BtJy_XWb.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.orders._index":{id:"routes/($locale).account.orders._index",parentId:"routes/($locale).account",path:"orders",index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account.orders._index-xrv6dYM-.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/PaginatedResourceSection-BwoypRwW.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.orders.$id":{id:"routes/($locale).account.orders.$id",parentId:"routes/($locale).account",path:"orders/:id",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account.orders._id-fvwQcCj4.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Money-D5nHN9tR.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.addresses":{id:"routes/($locale).account.addresses",parentId:"routes/($locale).account",path:"addresses",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account.addresses-B2VRSbt3.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.profile":{id:"routes/($locale).account.profile",parentId:"routes/($locale).account",path:"profile",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account.profile-CTexDSaq.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account._index":{id:"routes/($locale).account._index",parentId:"routes/($locale).account",path:void 0,index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account._index-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).account.$":{id:"routes/($locale).account.$",parentId:"routes/($locale).account",path:"*",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).account._-l0sNRNKZ.js",imports:[],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale)._index":{id:"routes/($locale)._index",parentId:"routes/($locale)",path:void 0,index:!0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale)._index-CntrEvoy.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).search":{id:"routes/($locale).search",parentId:"routes/($locale)",path:"search",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).search-DcMrGhD6.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/search-DOeYwaXi.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Money-D5nHN9tR.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).cart":{id:"routes/($locale).cart",parentId:"routes/($locale)",path:"cart",index:void 0,caseSensitive:void 0,hasAction:!0,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).cart-DW6qWICr.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/jsx-runtime-B1QxFx_A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/CartMain-CxmoU66u.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/index-JEcTe66N.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/ProductPrice-wUdys-RI.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Money-D5nHN9tR.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/variants-Cdxbna-A.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/Image-Lob9_gmS.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).cart.$lines":{id:"routes/($locale).cart.$lines",parentId:"routes/($locale).cart",path:":lines",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale).cart._lines-BHTEHLjV.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0},"routes/($locale).$":{id:"routes/($locale).$",parentId:"routes/($locale)",path:"*",index:void 0,caseSensitive:void 0,hasAction:!1,hasLoader:!0,hasClientAction:!1,hasClientLoader:!1,hasClientMiddleware:!1,hasErrorBoundary:!1,module:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/(_locale)._-Ch91UYVy.js",imports:["https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/with-props-DVGQI9yc.js","https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/chunk-D4RADZKF-CYQil85_.js"],css:[],clientActionModule:void 0,clientLoaderModule:void 0,clientMiddlewareModule:void 0,hydrateFallbackModule:void 0}},url:"https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/manifest-71979e3d.js",version:"71979e3d",sri:void 0},$0="dist/client",j0="/",R0={unstable_middleware:!1,unstable_optimizeDeps:!1,unstable_splitRouteModules:!1,unstable_subResourceIntegrity:!1,unstable_viteEnvironmentApi:!1},A0=!0,P0=!1,I0=[],k0={mode:"lazy",manifestPath:"/__manifest"},T0="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/",D0={module:xy},O0={root:{id:"root",parentId:void 0,path:"",index:void 0,caseSensitive:void 0,module:iv},"routes/[robots.txt]":{id:"routes/[robots.txt]",parentId:"root",path:"robots.txt",index:void 0,caseSensitive:void 0,module:dv},"routes/($locale)":{id:"routes/($locale)",parentId:"root",path:":locale?",index:void 0,caseSensitive:void 0,module:hv},"routes/($locale).blogs.$blogHandle.$articleHandle":{id:"routes/($locale).blogs.$blogHandle.$articleHandle",parentId:"routes/($locale)",path:"blogs/:blogHandle/:articleHandle",index:void 0,caseSensitive:void 0,module:wv},"routes/($locale).api.$version.[graphql.json]":{id:"routes/($locale).api.$version.[graphql.json]",parentId:"routes/($locale)",path:"api/:version/graphql.json",index:void 0,caseSensitive:void 0,module:Sv},"routes/($locale).sitemap.$type.$page[.xml]":{id:"routes/($locale).sitemap.$type.$page[.xml]",parentId:"routes/($locale)",path:"sitemap/:type/:page.xml",index:void 0,caseSensitive:void 0,module:Ev},"routes/($locale).blogs.$blogHandle._index":{id:"routes/($locale).blogs.$blogHandle._index",parentId:"routes/($locale)",path:"blogs/:blogHandle",index:!0,caseSensitive:void 0,module:kv},"routes/($locale).collections.$handle":{id:"routes/($locale).collections.$handle",parentId:"routes/($locale)",path:"collections/:handle",index:void 0,caseSensitive:void 0,module:Uv},"routes/($locale).account_.authorize":{id:"routes/($locale).account_.authorize",parentId:"routes/($locale)",path:"account/authorize",index:void 0,caseSensitive:void 0,module:Bv},"routes/($locale).collections._index":{id:"routes/($locale).collections._index",parentId:"routes/($locale)",path:"collections",index:!0,caseSensitive:void 0,module:Yv},"routes/($locale).policies.$handle":{id:"routes/($locale).policies.$handle",parentId:"routes/($locale)",path:"policies/:handle",index:void 0,caseSensitive:void 0,module:ex},"routes/($locale).products.$handle":{id:"routes/($locale).products.$handle",parentId:"routes/($locale)",path:"products/:handle",index:void 0,caseSensitive:void 0,module:fx},"routes/($locale).account_.logout":{id:"routes/($locale).account_.logout",parentId:"routes/($locale)",path:"account/logout",index:void 0,caseSensitive:void 0,module:mx},"routes/($locale).collections.all":{id:"routes/($locale).collections.all",parentId:"routes/($locale)",path:"collections/all",index:void 0,caseSensitive:void 0,module:bx},"routes/($locale).policies._index":{id:"routes/($locale).policies._index",parentId:"routes/($locale)",path:"policies",index:!0,caseSensitive:void 0,module:jx},"routes/($locale).account_.login":{id:"routes/($locale).account_.login",parentId:"routes/($locale)",path:"account/login",index:void 0,caseSensitive:void 0,module:Ax},"routes/($locale).discount.$code":{id:"routes/($locale).discount.$code",parentId:"routes/($locale)",path:"discount/:code",index:void 0,caseSensitive:void 0,module:Ix},"routes/($locale).[sitemap.xml]":{id:"routes/($locale).[sitemap.xml]",parentId:"routes/($locale)",path:"sitemap.xml",index:void 0,caseSensitive:void 0,module:Tx},"routes/($locale).pages.$handle":{id:"routes/($locale).pages.$handle",parentId:"routes/($locale)",path:"pages/:handle",index:void 0,caseSensitive:void 0,module:Ux},"routes/($locale).blogs._index":{id:"routes/($locale).blogs._index",parentId:"routes/($locale)",path:"blogs",index:!0,caseSensitive:void 0,module:Gx},"routes/($locale).account":{id:"routes/($locale).account",parentId:"routes/($locale)",path:"account",index:void 0,caseSensitive:void 0,module:tw},"routes/($locale).account.orders._index":{id:"routes/($locale).account.orders._index",parentId:"routes/($locale).account",path:"orders",index:!0,caseSensitive:void 0,module:cw},"routes/($locale).account.orders.$id":{id:"routes/($locale).account.orders.$id",parentId:"routes/($locale).account",path:"orders/:id",index:void 0,caseSensitive:void 0,module:gw},"routes/($locale).account.addresses":{id:"routes/($locale).account.addresses",parentId:"routes/($locale).account",path:"addresses",index:void 0,caseSensitive:void 0,module:$w},"routes/($locale).account.profile":{id:"routes/($locale).account.profile",parentId:"routes/($locale).account",path:"profile",index:void 0,caseSensitive:void 0,module:kw},"routes/($locale).account._index":{id:"routes/($locale).account._index",parentId:"routes/($locale).account",path:void 0,index:!0,caseSensitive:void 0,module:Dw},"routes/($locale).account.$":{id:"routes/($locale).account.$",parentId:"routes/($locale).account",path:"*",index:void 0,caseSensitive:void 0,module:Lw},"routes/($locale)._index":{id:"routes/($locale)._index",parentId:"routes/($locale)",path:void 0,index:!0,caseSensitive:void 0,module:qw},"routes/($locale).search":{id:"routes/($locale).search",parentId:"routes/($locale)",path:"search",index:void 0,caseSensitive:void 0,module:f0},"routes/($locale).cart":{id:"routes/($locale).cart",parentId:"routes/($locale)",path:"cart",index:void 0,caseSensitive:void 0,module:v0},"routes/($locale).cart.$lines":{id:"routes/($locale).cart.$lines",parentId:"routes/($locale).cart",path:":lines",index:void 0,caseSensitive:void 0,module:C0},"routes/($locale).$":{id:"routes/($locale).$",parentId:"routes/($locale)",path:"*",index:void 0,caseSensitive:void 0,module:E0}},L0=Object.freeze(Object.defineProperty({__proto__:null,assets:_0,assetsBuildDirectory:$0,basename:j0,entry:D0,future:R0,isSpaMode:P0,prerender:I0,publicPath:T0,routeDiscovery:k0,routes:O0,ssr:A0},Symbol.toStringTag,{value:"Module"}));export{N0 as default};
//# sourceMappingURL=index.js.map
