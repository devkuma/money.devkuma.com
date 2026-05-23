/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const alert=document.getElementById("page-alert"),closeBtn=document.getElementById("page-alert-btn-close");if(alert!==null&&closeBtn!==null){const e=alert.getAttribute("data-page-alert-version")||"unknown",t=getSessionStorage(`page-alert-${e}`,null,"functional")!==null;t&&alert.classList.add("d-none"),closeBtn.addEventListener("click",()=>{setSessionStorage(`page-alert-${e}`,"seen","functional"),alert.classList.add("d-none")})}function reveal(){const e=document.querySelectorAll(".reveal");for(let t=0;t<e.length;t++){const n=window.innerHeight,s=e[t].getBoundingClientRect().top,o=150;s<n-o?(e[t].classList.add("active"),e[t].classList.remove("reveal")):e[t].classList.remove("active")}}window.addEventListener("scroll",reveal);const svgCopy='<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>',svgCheck='<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>',addCopyButtons=e=>{document.querySelectorAll("pre > code").forEach(t=>{const n=document.createElement("button");n.className="clipboard-button",n.setAttribute("data-toast-target","toast-copied-code-message"),n.setAttribute("aria-label","copy to clipboard"),n.type="button",n.innerHTML=svgCopy,n.addEventListener("click",()=>{const s=t.innerText.split(`
`).filter(Boolean).join(`
`);e.writeText(s).then(()=>{n.blur(),n.innerHTML=svgCheck,setTimeout(()=>n.innerHTML=svgCopy,2e3)},()=>n.innerHTML="Error")});const s=t.parentNode;s.parentNode.insertBefore(n,s)})};navigator&&navigator.clipboard&&addCopyButtons(navigator.clipboard),document.querySelectorAll("[data-clipboard]").forEach(e=>{const t=e.getAttribute("data-clipboard");e.addEventListener("click",()=>{navigator.clipboard.writeText(t)})});const url=new URL(window.location.href),menu=url.searchParams.get("menu"),child=url.searchParams.get("child"),menuItems=document.querySelectorAll('[data-nav="main"]');if(menu!==null){menuItems.forEach(e=>{e.classList.remove("active")});const e=document.querySelectorAll(`[data-nav-main="${menu}"]:not([data-nav-child])`);e.forEach(e=>{e.classList.add("active")});const t=document.querySelectorAll(`[data-nav-main="${menu}"][data-nav-child="${child}"]`);t.forEach(e=>{e.classList.add("active")})}document.addEventListener("hide.bs.modal",function(){document.activeElement&&document.activeElement.blur()}),function(e,t){typeof exports=="object"&&typeof module!="undefined"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self,e.bootstrap=t())}(this,function(){"use strict";const C=new Map,gt={set(e,t,n){C.has(e)||C.set(e,new Map);const s=C.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return C.has(e)?C.get(e).get(t)||null:null},remove(e,t){if(!C.has(e))return;const n=C.get(e);n.delete(t),n.size===0&&C.delete(e)}},Jr=1e6,Xr=1e3,dt="transitionend",is=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),Gr=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),Yr=e=>{do e+=Math.floor(Math.random()*Jr);while(document.getElementById(e))return e},Pr=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),o=Number.parseFloat(n);return!s&&!o?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*Xr)},ns=e=>{e.dispatchEvent(new Event(dt))},g=e=>!!e&&typeof e=="object"&&(typeof e.jquery!="undefined"&&(e=e[0]),typeof e.nodeType!="undefined"),w=e=>g(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(is(e)):null,R=e=>{if(!g(e)||e.getClientRects().length===0)return!1;const n=getComputedStyle(e).getPropertyValue("visibility")==="visible",t=e.closest("details:not([open])");if(!t)return n;if(t!==e){const n=e.closest("summary");if(n&&n.parentNode!==t)return!1;if(n===null)return!1}return n},y=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(typeof e.disabled!="undefined"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false"),ts=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?ts(e.parentNode):null},ve=()=>{},te=e=>{e.offsetHeight},Jn=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ke=[],Nr=e=>{document.readyState==="loading"?(Ke.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Ke)e()}),Ke.push(e)):e()},c=()=>document.documentElement.dir==="rtl",u=e=>{Nr(()=>{const t=Jn();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},o=(e,t=[],n=e)=>typeof e=="function"?e.call(...t):n,Zn=(e,t,n=!0)=>{if(!n){o(e);return}const a=5,r=Pr(t)+a;let s=!1;const i=({target:n})=>{if(n!==t)return;s=!0,t.removeEventListener(dt,i),o(e)};t.addEventListener(dt,i),setTimeout(()=>{s||ns(t)},r)},We=(e,t,n,s)=>{const i=e.length;let o=e.indexOf(t);return o===-1?!n&&s?e[i-1]:e[0]:(o+=n?1:-1,s&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))])},zr=/[^.]*(?=\..*)\.|.*/,Tr=/\..*/,Ar=/::\d+$/,Ne={};let qn=1;const Un={mouseenter:"mouseover",mouseleave:"mouseout"},Er=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Hn(e,t){return t&&`${t}::${qn++}`||e.uidEvent||qn++}function Ln(e){const t=Hn(e);return e.uidEvent=t,Ne[t]=Ne[t]||{},Ne[t]}function xr(t,n){return function s(o){return at(o,{delegateTarget:t}),s.oneOff&&e.off(t,o.type,n),n.apply(t,[o])}}function Or(t,n,s){return function o(i){const a=t.querySelectorAll(n);for(let{target:r}=i;r&&r!==this;r=r.parentNode)for(const c of a){if(c!==r)continue;return at(i,{delegateTarget:r}),o.oneOff&&e.off(t,i.type,n,s),s.apply(r,[i])}}}function Sn(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function An(e,t,n){const o=typeof t=="string",i=o?n:t||n;let s=Cn(e);return Er.has(s)||(s=e),[o,i,s]}function kn(e,t,n,s,o){if(typeof t!="string"||!e)return;let[r,i,c]=An(t,n,s);if(t in Un){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};i=e(i)}const d=Ln(e),u=d[c]||(d[c]={}),l=Sn(u,i,r?n:null);if(l){l.oneOff=l.oneOff&&o;return}const h=Hn(i,t.replace(zr,"")),a=r?Or(e,n,i):xr(e,i);a.delegationSelector=r?n:null,a.callable=i,a.oneOff=o,a.uidEvent=h,u[h]=a,e.addEventListener(c,a,r)}function nt(e,t,n,s,o){const i=Sn(t[n],s,o);if(!i)return;e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent]}function wr(e,t,n,s){const o=t[n]||{};for(const[a,i]of Object.entries(o))a.includes(s)&&nt(e,t,n,i.callable,i.delegationSelector)}function Cn(e){return e=e.replace(Tr,""),Un[e]||e}const e={on(e,t,n,s){kn(e,t,n,s,!1)},one(e,t,n,s){kn(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[c,a,i]=An(t,n,s),l=i!==t,o=Ln(e),r=o[i]||{},d=t.startsWith(".");if(typeof a!="undefined"){if(!Object.keys(r).length)return;nt(e,o,i,a,c?n:null);return}if(d)for(const n of Object.keys(o))wr(e,o,n,t.slice(1));for(const[s,n]of Object.entries(r)){const a=s.replace(Ar,"");(!l||t.includes(a))&&nt(e,o,i,n.callable,n.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const i=Jn(),l=Cn(t),d=t!==l;let s=null,a=!0,r=!0,c=!1;d&&i&&(s=i.Event(t,n),i(e).trigger(s),a=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),c=s.isDefaultPrevented());const o=at(new Event(t,{bubbles:a,cancelable:!0}),n);return c&&o.preventDefault(),r&&e.dispatchEvent(o),o.defaultPrevented&&s&&s.preventDefault(),o}};function at(e,t={}){for(const[n,s]of Object.entries(t))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}function xn(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function ut(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const v={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${ut(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${ut(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(const o of n){let s=o.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),t[s]=xn(e.dataset[o])}return t},getDataAttribute(e,t){return xn(e.getAttribute(`data-bs-${ut(t)}`))}};class se{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=g(t)?v.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...g(t)?v.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,s]of Object.entries(t)){const o=e[n],i=g(o)?"element":Gr(o);if(!new RegExp(s).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${s}".`)}}}const _r="5.3.8";class h extends se{constructor(e,t){if(super(),e=w(e),!e)return;this._element=e,this._config=this._getConfig(t),gt.set(this._element,this.constructor.DATA_KEY,this)}dispose(){gt.remove(this._element,this.constructor.DATA_KEY),e.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Zn(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return gt.get(w(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return _r}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const mt=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t?t.split(",").map(e=>is(e)).join(","):null},t={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const s=[];let n=e.parentNode.closest(t);for(;n;)s.push(n),n=n.parentNode.closest(t);return s},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(e=>!y(e)&&R(e))},getSelectorFromElement(e){const n=mt(e);return n?t.findOne(n)?n:null:null},getElementFromSelector(e){const n=mt(e);return n?t.findOne(n):null},getMultipleElementsFromSelector(e){const n=mt(e);return n?t.find(n):[]}},ge=(n,s="hide")=>{const i=`click.dismiss${n.EVENT_KEY}`,o=n.NAME;e.on(document,i,`[data-bs-dismiss="${o}"]`,function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),y(this))return;const i=t.getElementFromSelector(this)||this.closest(`.${o}`),a=n.getOrCreateInstance(i);a[s]()})},yr="alert",jr="bs.alert",jn=`.${jr}`,vr=`close${jn}`,cr=`closed${jn}`,ir="fade",Qa="show";class pe extends h{static get NAME(){return yr}close(){const t=e.trigger(this._element,vr);if(t.defaultPrevented)return;this._element.classList.remove(Qa);const n=this._element.classList.contains(ir);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),e.trigger(this._element,cr),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=pe.getOrCreateInstance(this);if(typeof e!="string")return;if(t[e]===0[0]||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)})}}ge(pe,"close"),u(pe);const Ga="button",qa="bs.button",Wa=`.${qa}`,Ba=".data-api",Pa="active",fn='[data-bs-toggle="button"]',Ta=`click${Wa}${Ba}`;class fe extends h{static get NAME(){return Ga}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Pa))}static jQueryInterface(e){return this.each(function(){const t=fe.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}e.on(document,Ta,fn,e=>{e.preventDefault();const t=e.target.closest(fn),n=fe.getOrCreateInstance(t);n.toggle()}),u(fe);const va="swipe",P=".bs.swipe",ga=`touchstart${P}`,pa=`touchmove${P}`,fa=`touchend${P}`,ma=`pointerdown${P}`,ua=`pointerup${P}`,la="touch",Qi="pen",Gi="pointer-event",Vi=40,Bi={endCallback:null,leftCallback:null,rightCallback:null},Ri={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Pe extends se{constructor(e,t){if(super(),this._element=e,!e||!Pe.isSupported())return;this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents()}static get Default(){return Bi}static get DefaultType(){return Ri}static get NAME(){return va}dispose(){e.off(this._element,P)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),o(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Vi)return;const t=e/this._deltaX;if(this._deltaX=0,!t)return;o(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(e.on(this._element,ma,e=>this._start(e)),e.on(this._element,ua,e=>this._end(e)),this._element.classList.add(Gi)):(e.on(this._element,ga,e=>this._start(e)),e.on(this._element,pa,e=>this._move(e)),e.on(this._element,fa,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Qi||e.pointerType===la)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ni="carousel",Di="bs.carousel",_=`.${Di}`,qt=".data-api",zi="ArrowLeft",Mi="ArrowRight",Si=500,ne="next",W="prev",U="left",ke="right",Ei=`slide${_}`,Be=`slid${_}`,ji=`keydown${_}`,bi=`mouseenter${_}`,gi=`mouseleave${_}`,li=`dragstart${_}`,ci=`load${_}${qt}`,si=`click${_}${qt}`,Pt="carousel",xe="active",ei="slide",Jo="carousel-item-end",Zo="carousel-item-start",Qo="carousel-item-next",Xo="carousel-item-prev",Dt=".active",vt=".carousel-item",Go=Dt+vt,Ko=".carousel-item img",Bo=".carousel-indicators",Po="[data-bs-slide], [data-bs-slide-to]",No='[data-bs-ride="carousel"]',Do={[zi]:ke,[Mi]:U},To={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Fo={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ie extends h{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=t.findOne(Bo,this._element),this._addEventListeners(),this._config.ride===Pt&&this.cycle()}static get Default(){return To}static get DefaultType(){return Fo}static get NAME(){return Ni}next(){this._slide(ne)}nextWhenVisible(){!document.hidden&&R(this._element)&&this.next()}prev(){this._slide(W)}pause(){this._isSliding&&ns(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!this._config.ride)return;if(this._isSliding){e.one(this._element,Be,()=>this.cycle());return}this.cycle()}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){e.one(this._element,Be,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const o=t>s?ne:W;this._slide(o,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&e.on(this._element,ji,e=>this._keydown(e)),this._config.pause==="hover"&&(e.on(this._element,bi,()=>this.pause()),e.on(this._element,gi,()=>this._maybeEnableCycle())),this._config.touch&&Pe.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of t.find(Ko,this._element))e.on(n,li,e=>e.preventDefault());const n=()=>{if(this._config.pause!=="hover")return;this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Si+this._config.interval)},s={leftCallback:()=>this._slide(this._directionToOrder(U)),rightCallback:()=>this._slide(this._directionToOrder(ke)),endCallback:n};this._swipeHelper=new Pe(this._element,s)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Do[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const s=t.findOne(Dt,this._indicatorsElement);s.classList.remove(xe),s.removeAttribute("aria-current");const n=t.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(xe),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const o=this._getActive(),a=t===ne,s=n||We(this._getItems(),o,a,this._config.wrap);if(s===o)return;const c=this._getItemIndex(s),l=n=>e.trigger(this._element,n,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(o),to:c}),d=l(Ei);if(d.defaultPrevented)return;if(!o||!s)return;const u=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(c),this._activeElement=s;const i=a?Zo:Jo,r=a?Qo:Xo;s.classList.add(r),te(s),o.classList.add(i),s.classList.add(i);const h=()=>{s.classList.remove(i,r),s.classList.add(xe),o.classList.remove(xe,r,i),this._isSliding=!1,l(Be)};this._queueCallback(h,o,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(ei)}_getActive(){return t.findOne(Go,this._element)}_getItems(){return t.find(vt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return c()?e===U?W:ne:e===U?ne:W}_orderToDirection(e){return c()?e===W?U:ke:e===W?ke:U}static jQueryInterface(e){return this.each(function(){const t=ie.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===0[0]||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}e.on(document,si,Po,function(e){const s=t.getElementFromSelector(this);if(!s||!s.classList.contains(Pt))return;e.preventDefault();const n=ie.getOrCreateInstance(s),o=this.getAttribute("data-bs-slide-to");if(o){n.to(o),n._maybeEnableCycle();return}if(v.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()}),e.on(window,ci,()=>{const e=t.find(No);for(const t of e)ie.getOrCreateInstance(t)}),u(ie);const cs="collapse",vo="bs.collapse",ee=`.${vo}`,po=".data-api",co=`show${ee}`,ao=`shown${ee}`,io=`hide${ee}`,Js=`hidden${ee}`,Qs=`click${ee}${po}`,Fe="show",L="collapse",me="collapsing",Gs="collapsed",Ys=`:scope .${L} .${L}`,Ks="collapse-horizontal",Us="width",Ws="height",$s=".collapse.show, .collapse.collapsing",st='[data-bs-toggle="collapse"]',Vs={parent:null,toggle:!0},Bs={parent:"(null|element)",toggle:"boolean"};class re extends h{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=t.find(st);for(const e of s){const n=t.getSelectorFromElement(e),o=t.find(n).filter(e=>e===this._element);n!==null&&o.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Vs}static get DefaultType(){return Bs}static get NAME(){return cs}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let n=[];if(this._config.parent&&(n=this._getFirstLevelChildren($s).filter(e=>e!==this._element).map(e=>re.getOrCreateInstance(e,{toggle:!1}))),n.length&&n[0]._isTransitioning)return;const s=e.trigger(this._element,co);if(s.defaultPrevented)return;for(const e of n)e.hide();const t=this._getDimension();this._element.classList.remove(L),this._element.classList.add(me),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(me),this._element.classList.add(L,Fe),this._element.style[t]="",e.trigger(this._element,ao)},i=t[0].toUpperCase()+t.slice(1),a=`scroll${i}`;this._queueCallback(o,this._element,!0),this._element.style[t]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const s=e.trigger(this._element,io);if(s.defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,te(this._element),this._element.classList.add(me),this._element.classList.remove(L,Fe);for(const e of this._triggerArray){const n=t.getElementFromSelector(e);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(me),this._element.classList.add(L),e.trigger(this._element,Js)};this._element.style[n]="",this._queueCallback(o,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Fe)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=w(e.parent),e}_getDimension(){return this._element.classList.contains(Ks)?Us:Ws}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(st);for(const n of e){const s=t.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=t.find(Ys,this._config.parent);return t.find(e,this._config.parent).filter(e=>!n.includes(e))}_addAriaAndCollapsedClass(e,t){if(!e.length)return;for(const n of e)n.classList.toggle(Gs,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const n=re.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e]()}})}}e.on(document,Qs,st,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const e of t.getMultipleElementsFromSelector(this))re.getOrCreateInstance(e,{toggle:!1}).toggle()}),u(re);var E,ce,A,Nn,In,Q,Yn,Xn,Se,dn,Tt,Ft,St,ue,s="top",a="bottom",i="right",n="left",Ce="auto",Y=[s,a,i,n],T="start",q="end",Vt="clippingParents",$e="viewport",I="popper",Ut="reference",ze=Y.reduce(function(e,t){return e.concat([t+"-"+T,t+"-"+q])},[]),Te=[].concat(Y,[Ce]).reduce(function(e,t){return e.concat([t,t+"-"+T,t+"-"+q])},[]),Yt="beforeRead",Gt="read",Xt="afterRead",Qt="beforeMain",Zt="main",Jt="afterMain",en="beforeWrite",tn="write",nn="afterWrite",sn=[Yt,Gt,Xt,Qt,Zt,Jt,en,tn,nn];function f(e){return e?(e.nodeName||"").toLowerCase():null}function r(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t?t.defaultView||window:window}return e}function D(e){var t=r(e).Element;return e instanceof t||e instanceof Element}function l(e){var t=r(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ye(e){if(typeof ShadowRoot=="undefined")return!1;var t=r(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Is(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},s=t.attributes[e]||{},n=t.elements[e];if(!l(n)||!f(n))return;Object.assign(n.style,o),Object.keys(s).forEach(function(e){var t=s[e];t===!1?n.removeAttribute(e):n.setAttribute(e,t===!0?"":t)})})}function Hs(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var s=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),a=i.reduce(function(e,t){return e[t]="",e},{});if(!l(s)||!f(s))return;Object.assign(s.style,a),Object.keys(o).forEach(function(e){s.removeAttribute(e)})})}}const Ze={name:"applyStyles",enabled:!0,phase:"write",fn:Is,effect:Hs,requires:["computeStyles"]};function p(e){return e.split("-")[0]}E=Math.max,ce=Math.min,A=Math.round;function ht(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function bn(){return!/^((?!chrome|android).)*safari/i.test(ht())}function X(e,t,n){t===0[0]&&(t=!1),n===0[0]&&(n=!1),s=e.getBoundingClientRect(),o=1,i=1,t&&l(e)&&(o=e.offsetWidth>0?A(s.width)/e.offsetWidth||1:1,i=e.offsetHeight>0?A(s.height)/e.offsetHeight||1:1);var s,o,i,f=D(e)?r(e):window,a=f.visualViewport,u=!bn()&&n,c=(s.left+(u&&a?a.offsetLeft:0))/o,d=(s.top+(u&&a?a.offsetTop:0))/i,h=s.width/o,m=s.height/i;return{width:h,height:m,top:d,right:c+h,bottom:d+m,left:c,x:c,y:d}}function ft(e){var t=X(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function _n(e,t){var n,s=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(s&&Ye(s)){n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function j(e){return r(e).getComputedStyle(e)}function Ps(e){return["table","td","th"].indexOf(f(e))>=0}function k(e){return((D(e)?e.ownerDocument:e.document)||window.document).documentElement}function he(e){return f(e)==="html"?e:e.assignedSlot||e.parentNode||(Ye(e)?e.host:null)||k(e)}function En(e){return!l(e)||j(e).position==="fixed"?null:e.offsetParent}function Rs(e){var t,n,o,s=/firefox/i.test(ht()),i=/Trident/i.test(ht());if(i&&l(e)&&(o=j(e),o.position==="fixed"))return null;for(t=he(e),Ye(t)&&(t=t.host);l(t)&&["html","body"].indexOf(f(t))<0;){if(n=j(t),n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].indexOf(n.willChange)!==-1||s&&n.willChange==="filter"||s&&n.filter&&n.filter!=="none")return t;t=t.parentNode}return null}function Z(e){for(var n=r(e),t=En(e);t&&Ps(t)&&j(t).position==="static";)t=En(t);return t&&(f(t)==="html"||f(t)==="body"&&j(t).position==="static")?n:t||Rs(e)||n}function Ge(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e,t,n){return E(e,ce(t,n))}function As(e,t,n){var s=J(e,t,n);return s>n?n:s}function Tn(){return{top:0,right:0,bottom:0,left:0}}function zn(e){return Object.assign({},Tn(),e)}function Dn(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}Nn=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,zn(typeof t!="number"?t:Dn(t,Y))};function Cs(e){var r,c,d,u,f,g,v,b,j,y,_,O,x,C,E,t=e.state,S=e.name,A=e.options,h=t.elements.arrow,m=t.modifiersData.popperOffsets,w=p(t.placement),o=Ge(w),k=[n,i].indexOf(w)>=0,l=k?"height":"width";if(!h||!m)return;g=Nn(A.padding,t),v=ft(h),b=o==="y"?s:n,j=o==="y"?a:i,y=t.rects.reference[l]+t.rects.reference[o]-m[o]-t.rects.popper[l],_=m[o]-t.rects.reference[o],c=Z(h),f=c?o==="y"?c.clientHeight||0:c.clientWidth||0:0,O=y/2-_/2,x=g[b],C=f-v[l]-g[j],u=f/2-v[l]/2+O,d=J(x,u,C),E=o,t.modifiersData[S]=(r={},r[E]=d,r.centerOffset=d-u,r)}function Os(e){var n=e.state,o=e.options,s=o.element,t=s===0[0]?"[data-popper-arrow]":s;if(t==null)return;if(typeof t=="string"&&(t=n.elements.popper.querySelector(t),!t))return;if(!_n(n.elements.popper,t))return;n.elements.arrow=t}const Pn={name:"arrow",enabled:!0,phase:"main",fn:Cs,effect:Os,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function V(e){return e.split("-")[1]}In={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ys(e,t){var s=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:A(s*n)/n||0,y:A(o*n)/n||0}}function Vn(e){var c,u,h,g,v,b,w,T,z,m=e.popper,F=e.popperRect,d=e.placement,L=e.variation,f=e.offsets,S=e.position,y=e.gpuAcceleration,E=e.adaptive,p=e.roundOffsets,M=e.isFixed,N=f.x,t=N===0[0]?0:N,C=f.y,o=C===0[0]?0:C,D=typeof p=="function"?p({x:t,y:o}):{x:t,y:o},t=D.x,o=D.y,A=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),O=n,_=s,l=window;return E&&(c=Z(m),g="clientHeight",b="clientWidth",c===r(m)&&(c=k(m),j(c).position!=="static"&&S==="absolute"&&(g="scrollHeight",b="scrollWidth")),c=c,(d===s||(d===n||d===i)&&L===q)&&(_=a,T=M&&c===l&&l.visualViewport?l.visualViewport.height:c[g],o-=T-F.height,o*=y?1:-1),(d===n||(d===s||d===a)&&L===q)&&(O=i,z=M&&c===l&&l.visualViewport?l.visualViewport.width:c[b],t-=z-F.width,t*=y?1:-1)),w=Object.assign({position:S},E&&In),v=p===!0?ys({x:t,y:o},r(m)):{x:t,y:o},t=v.x,o=v.y,y?Object.assign({},w,(u={},u[_]=x?"0":"",u[O]=A?"0":"",u.transform=(l.devicePixelRatio||1)<=1?"translate("+t+"px, "+o+"px)":"translate3d("+t+"px, "+o+"px, 0)",u)):Object.assign({},w,(h={},h[_]=x?o+"px":"",h[O]=A?t+"px":"",h.transform="",h))}function bs(e){var t=e.state,n=e.options,s=n.gpuAcceleration,c=s===0[0]||s,o=n.adaptive,l=o===0[0]||o,i=n.roundOffsets,a=i===0[0]||i,r={placement:p(t.placement),variation:V(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:c,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Vn(Object.assign({},r,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Vn(Object.assign({},r,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Xe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:bs,data:{}};Q={passive:!0};function vs(e){var n=e.state,t=e.instance,s=e.options,o=s.scroll,i=o===0[0]||o,a=s.resize,c=a===0[0]||a,l=r(n.elements.popper),d=[].concat(n.scrollParents.reference,n.scrollParents.popper);return i&&d.forEach(function(e){e.addEventListener("scroll",t.update,Q)}),c&&l.addEventListener("resize",t.update,Q),function(){i&&d.forEach(function(e){e.removeEventListener("scroll",t.update,Q)}),c&&l.removeEventListener("resize",t.update,Q)}}const De={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vs,data:{}};Yn={left:"right",right:"left",bottom:"top",top:"bottom"};function Ae(e){return e.replace(/left|right|bottom|top/g,function(e){return Yn[e]})}Xn={start:"end",end:"start"};function Qn(e){return e.replace(/start|end/g,function(e){return Xn[e]})}function Ue(e){var t=r(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}}function qe(e){return X(k(e)).left+Ue(e).scrollLeft}function gs(e,t){var s,d=r(e),o=k(e),n=d.visualViewport,i=o.clientWidth,a=o.clientHeight,c=0,l=0;return n&&(i=n.width,a=n.height,s=bn(),(s||!s&&t==="fixed")&&(c=n.offsetLeft,l=n.offsetTop)),{width:i,height:a,x:c+qe(e),y:l}}function hs(e){var s,n=k(e),o=Ue(e),t=(s=e.ownerDocument)==null?0[0]:s.body,i=E(n.scrollWidth,n.clientWidth,t?t.scrollWidth:0,t?t.clientWidth:0),r=E(n.scrollHeight,n.clientHeight,t?t.scrollHeight:0,t?t.clientHeight:0),a=-o.scrollLeft+qe(e),c=-o.scrollTop;return j(t||n).direction==="rtl"&&(a+=E(n.clientWidth,t?t.clientWidth:0)-i),{width:i,height:r,x:a,y:c}}function et(e){var t=j(e),n=t.overflow,s=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+s)}function ss(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:l(e)&&et(e)?e:ss(he(e))}function ae(e,t){t===0[0]&&(t=[]);var s,n=ss(e),o=n===((s=e.ownerDocument)==null?0[0]:s.body),i=r(n),a=o?[i].concat(i.visualViewport||[],et(n)?n:[]):n,c=t.concat(a);return o?c:c.concat(ae(he(a)))}function lt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function us(e,t){var n=X(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function zt(e,t,n){return t===$e?lt(gs(e,n)):D(t)?us(t,n):lt(hs(k(e)))}function Ti(e){var n=ae(he(e)),s=["absolute","fixed"].indexOf(j(e).position)>=0,t=s&&l(e)?Z(e):e;return D(t)?n.filter(function(e){return D(e)&&_n(e,t)&&f(e)!=="body"}):[]}function ds(e,t,n,s){var a=t==="clippingParents"?Ti(e):[].concat(t),i=[].concat(a,[n]),r=i[0],o=i.reduce(function(t,n){var o=zt(e,n,s);return t.top=E(o.top,t.top),t.right=ce(o.right,t.right),t.bottom=ce(o.bottom,t.bottom),t.left=E(o.left,t.left),t},zt(e,r,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function rs(e){var o,r,l,t=e.reference,c=e.element,d=e.placement,u=d?p(d):null,f=d?V(d):null,h=t.x+t.width/2-c.width/2,m=t.y+t.height/2-c.height/2;switch(u){case s:o={x:h,y:t.y-c.height};break;case a:o={x:h,y:t.y+t.height};break;case i:o={x:t.x+t.width,y:m};break;case n:o={x:t.x-c.width,y:m};break;default:o={x:t.x,y:t.y}}if(r=u?Ge(u):null,r!=null)switch(l=r==="y"?"height":"width",f){case T:o[r]=o[r]-(t[l]/2-c[l]/2);break;case q:o[r]=o[r]+(t[l]/2-c[l]/2);break}return o}function N(e,t){t===0[0]&&(t={});var g,n=t,m=n.placement,f=m===0[0]?e.placement:m,x=n.strategy,T=x===0[0]?e.strategy:x,O=n.boundary,C=O===0[0]?Vt:O,j=n.rootBoundary,F=j===0[0]?$e:j,_=n.elementContext,c=_===0[0]?I:_,p=n.altBoundary,M=p!==0[0]&&p,b=n.padding,h=b===0[0]?0:b,o=zn(typeof h!="number"?h:Dn(h,Y)),S=c===I?Ut:I,w=e.rects.popper,u=e.elements[M?S:c],r=ds(D(u)?u:u.contextElement||k(e.elements.popper),C,F,T),y=X(e.elements.reference),E=rs({reference:y,element:w,placement:f}),A=lt(Object.assign({},w,E)),l=c===I?A:y,d={top:r.top-l.top+o.top,bottom:l.bottom-r.bottom+o.bottom,left:r.left-l.left+o.left,right:l.right-r.right+o.right},v=e.modifiersData.offset;return c===I&&v&&(g=v[f],Object.keys(d).forEach(function(e){var t=[i,a].indexOf(e)>=0?1:-1,n=[s,a].indexOf(e)>=0?"y":"x";d[e]+=g[n]*t})),d}function ms(e,t){t===0[0]&&(t={});var s,n=t,c=n.placement,l=n.boundary,d=n.rootBoundary,u=n.padding,h=n.flipVariations,i=n.allowedAutoPlacements,m=i===0[0]?Te:i,a=V(c),r=a?h?ze:ze.filter(function(e){return V(e)===a}):Y,o=r.filter(function(e){return m.indexOf(e)>=0});return o.length===0&&(o=r),s=o.reduce(function(t,n){return t[n]=N(e,{placement:n,boundary:l,rootBoundary:d,padding:u})[p(n)],t},{}),Object.keys(s).sort(function(e,t){return s[e]-s[t]})}function fs(e){if(p(e)===Ce)return[];var t=Ae(e);return[Qn(e),t,Qn(t)]}function ps(e){var t=e.state,o=e.options,C=e.name;if(t.modifiersData[C]._skip)return;for(var r,c,l,u,h,g,v,y,_,x,E,k,z,M=o.mainAxis,I=M===0[0]||M,D=o.altAxis,P=D===0[0]||D,R=o.fallbackPlacements,L=o.padding,w=o.boundary,O=o.rootBoundary,B=o.altBoundary,F=o.flipVariations,j=F===0[0]||F,$=o.allowedAutoPlacements,d=t.options.placement,K=p(d),H=K===d,q=R||(H||!j?[Ae(d)]:fs(d)),f=[d].concat(q).reduce(function(e,n){return e.concat(p(n)===Ce?ms(t,{placement:n,boundary:w,rootBoundary:O,padding:L,flipVariations:j,allowedAutoPlacements:$}):n)},[]),U=t.rects.reference,W=t.rects.popper,A=new Map,S=!0,m=f[0],b=0;b<f.length;b++){if(r=f[b],v=p(r),g=V(r)===T,y=[s,a].indexOf(v)>=0,_=y?"width":"height",h=N(t,{placement:r,boundary:w,rootBoundary:O,altBoundary:B,padding:L}),l=y?g?i:n:g?a:s,U[_]>W[_]&&(l=Ae(l)),z=Ae(l),c=[],I&&c.push(h[v]<=0),P&&c.push(h[l]<=0,h[z]<=0),c.every(function(e){return e})){m=r,S=!1;break}A.set(r,c)}if(S)for(k=j?3:1,E=function(t){var n=f.find(function(e){var n=A.get(e);if(n)return n.slice(0,t).every(function(e){return e})});if(n)return m=n,"break"},u=k;u>0;u--)if(x=E(u),x==="break")break;t.placement!==m&&(t.modifiersData[C]._skip=!0,t.placement=m,t.reset=!0)}const es={name:"flip",enabled:!0,phase:"main",fn:ps,requiresIfExists:["offset"],data:{_skip:!1}};function Kn(e,t,n){return n===0[0]&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function $n(e){return[s,i,a,n].some(function(t){return e[t]>=0})}function js(e){var t=e.state,a=e.name,r=t.rects.reference,c=t.rects.popper,l=t.modifiersData.preventOverflow,d=N(t,{elementContext:"reference"}),u=N(t,{altBoundary:!0}),n=Kn(d,r),s=Kn(u,c,l),o=$n(n),i=$n(s);t.modifiersData[a]={referenceClippingOffsets:n,popperEscapeOffsets:s,isReferenceHidden:o,hasPopperEscaped:i},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":o,"data-popper-escaped":i})}const Bn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:js};function _s(e,t,o){var c=p(e),d=[n,s].indexOf(c)>=0?-1:1,l=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,a=l[0],r=l[1],a=a||0,r=(r||0)*d;return[n,i].indexOf(c)>=0?{x:r,y:a}:{x:a,y:r}}function ws(e){var t=e.state,i=e.options,a=e.name,n=i.offset,r=n===0[0]?[0,0]:n,s=Te.reduce(function(e,n){return e[n]=_s(n,t.rects,r),e},{}),o=s[t.placement],c=o.x,l=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[a]=s}const Rn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ws};function xs(e){var t=e.state,n=e.name;t.modifiersData[n]=rs({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Le={name:"popperOffsets",enabled:!0,phase:"read",fn:xs,data:{}};function Es(e){return e==="x"?"y":"x"}function ks(e){var fe,r,h,P,H,$,W,U,ee,Y,Q,ue,v,k,K,q,ne,se,x,ie,B,re,le,G,me,c,f,w,A,M,F,z,D,R,I,X,t=e.state,l=e.options,be=e.name,pe=l.mainAxis,ge=pe===0[0]||pe,oe=l.altAxis,we=oe!==0[0]&&oe,_e=l.boundary,ye=l.rootBoundary,ve=l.altBoundary,je=l.padding,de=l.tether,d=de===0[0]||de,ae=l.tetherOffset,S=ae===0[0]?0:ae,O=N(t,{boundary:_e,rootBoundary:ye,padding:je,altBoundary:ve}),te=p(t.placement),C=V(t.placement),he=!C,o=Ge(te),j=Es(o),b=t.modifiersData.popperOffsets,u=t.rects.reference,g=t.rects.popper,_=typeof S=="function"?S(Object.assign({},t.rects,{placement:t.placement})):S,m=typeof _=="number"?{mainAxis:_,altAxis:_}:Object.assign({mainAxis:0,altAxis:0},_),y=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(!b)return;ge&&(P=o==="y"?s:n,H=o==="y"?a:i,r=o==="y"?"height":"width",h=b[o],$=h+O[P],W=h-O[H],U=d?-g[r]/2:0,ee=C===T?u[r]:g[r],Q=C===T?-g[r]:-u[r],Y=t.elements.arrow,ue=d&&Y?ft(Y):{width:0,height:0},k=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Tn(),q=k[P],K=k[H],v=J(0,u[r],ue[r]),ne=he?u[r]/2-U-v-q-m.mainAxis:ee-v-q-m.mainAxis,se=he?-u[r]/2+U+v+K+m.mainAxis:Q+v+K+m.mainAxis,x=t.elements.arrow&&Z(t.elements.arrow),ie=x?o==="y"?x.clientTop||0:x.clientLeft||0:0,B=(fe=y?.[o])!=null?fe:0,re=h+ne-B-ie,le=h+se-B,I=J(d?ce($,re):$,h,d?E(W,le):W),b[o]=I,L[o]=I-h),we&&(G=o==="x"?s:n,me=o==="x"?a:i,c=b[j],f=j==="y"?"height":"width",R=c+O[G],D=c-O[me],w=[s,n].indexOf(te)!==-1,z=(X=y?.[j])!=null?X:0,F=w?R:c-u[f]-g[f]-z+m.altAxis,M=w?c+u[f]+g[f]-z-m.altAxis:D,A=d&&w?As(F,c,M):J(d?F:R,c,d?M:D),b[j]=A,L[j]=A-c),t.modifiersData[be]=L}const Fn={name:"preventOverflow",enabled:!0,phase:"main",fn:ks,requiresIfExists:["offset"]};function Ss(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ms(e){return e===r(e)||!l(e)?Ue(e):Ss(e)}function Fs(e){var t=e.getBoundingClientRect(),n=A(t.width)/e.offsetWidth||1,s=A(t.height)/e.offsetHeight||1;return n!==1||s!==1}function Ts(e,t,n){n===0[0]&&(n=!1);var r=l(t),c=l(t)&&Fs(t),i=k(t),o=X(e,c,n),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(r||!r&&!n)&&((f(t)!=="body"||et(i))&&(a=Ms(t)),l(t)?(s=X(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=qe(i))),{x:o.left+a.scrollLeft-s.x,y:o.top+a.scrollTop-s.y,width:o.width,height:o.height}}function zs(e){var n=new Map,t=new Set,s=[];e.forEach(function(e){n.set(e.name,e)});function o(e){t.add(e.name);var i=[].concat(e.requires||[],e.requiresIfExists||[]);i.forEach(function(e){if(!t.has(e)){var s=n.get(e);s&&o(s)}}),s.push(e)}return e.forEach(function(e){t.has(e.name)||o(e)}),s}function Ds(e){var t=zs(e);return sn.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function Ns(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=0[0],n(e())})})),t}}function Ls(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}Se={placement:"bottom",modifiers:[],strategy:"absolute"};function On(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return!n.some(function(e){return!e||typeof e.getBoundingClientRect!="function"})}function Oe(e){e===0[0]&&(e={});var n=e,s=n.defaultModifiers,i=s===0[0]?[]:s,o=n.defaultOptions,t=o===0[0]?Se:o;return function(n,s,o){o===0[0]&&(o=t);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Se,t),modifiersData:{},elements:{reference:n,popper:s},attributes:{},styles:{}},c=[],l=!1,r={state:a,setOptions:function(o){var c,l=typeof o=="function"?o(a.options):o;return d(),a.options=Object.assign({},t,a.options,l),a.scrollParents={reference:D(n)?ae(n):n.contextElement?ae(n.contextElement):[],popper:ae(s)},c=Ds(Ls([].concat(i,a.options.modifiers))),a.orderedModifiers=c.filter(function(e){return e.enabled}),u(),r.update()},forceUpdate:function(){if(l)return;var o=a.elements,i=o.reference,n=o.popper;if(!On(i,n))return;a.rects={reference:Ts(i,Z(n),a.options.strategy==="fixed"),popper:ft(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(t=0;t<a.orderedModifiers.length;t++){if(a.reset===!0){a.reset=!1,t=-1;continue}var t,s=a.orderedModifiers[t],c=s.fn,d=s.options,u=d===0[0]?{}:d,h=s.name;typeof c=="function"&&(a=c({state:a,options:u,name:h,instance:r})||a)}},update:Ns(function(){return new Promise(function(e){r.forceUpdate(),e(a)})}),destroy:function(){d(),l=!0}};if(!On(n,s))return r;r.setOptions(o).then(function(e){!l&&o.onFirstUpdate&&o.onFirstUpdate(e)});function u(){a.orderedModifiers.forEach(function(e){var s,o,i=e.name,t=e.options,l=t===0[0]?{}:t,n=e.effect;typeof n=="function"&&(s=n({state:a,name:i,instance:r,options:l}),o=function(){},c.push(s||o))})}function d(){c.forEach(function(e){return e()}),c=[]}return r}}dn=Oe(),Tt=[De,Le,Xe,Ze],Ft=Oe({defaultModifiers:Tt}),St=[De,Le,Xe,Ze,Rn,es,Fn,Pn,Bn],ue=Oe({defaultModifiers:St});const kt=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Jt,afterRead:Xt,afterWrite:nn,applyStyles:Ze,arrow:Pn,auto:Ce,basePlacements:Y,beforeMain:Qt,beforeRead:Yt,beforeWrite:en,bottom:a,clippingParents:Vt,computeStyles:Xe,createPopper:ue,createPopperBase:dn,createPopperLite:Ft,detectOverflow:N,end:q,eventListeners:De,flip:es,hide:Bn,left:n,main:Zt,modifierPhases:sn,offset:Rn,placements:Te,popper:I,popperGenerator:Oe,popperOffsets:Le,preventOverflow:Fn,read:Gt,reference:Ut,right:i,start:T,top:s,variationPlacements:ze,viewport:$e,write:tn},Symbol.toStringTag,{value:"Module"})),Et="dropdown",qs="bs.dropdown",F=`.${qs}`,rt=".data-api",Xs="Escape",yt="Tab",Zs="ArrowUp",jt="ArrowDown",eo=2,to=`hide${F}`,no=`hidden${F}`,so=`show${F}`,oo=`shown${F}`,bt=`click${F}${rt}`,_t=`keydown${F}${rt}`,ro=`keyup${F}${rt}`,G="show",lo="dropup",uo="dropend",ho="dropstart",mo="dropup-center",fo="dropdown-center",z='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',go=`${z}.${G}`,we=".dropdown-menu",bo=".navbar",jo=".navbar-nav",yo=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",_o=c()?"top-end":"top-start",wo=c()?"top-start":"top-end",Oo=c()?"bottom-end":"bottom-start",xo=c()?"bottom-start":"bottom-end",Co=c()?"left-start":"right-start",Eo=c()?"right-start":"left-start",ko="top",Ao="bottom",So={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Mo={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class m extends h{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=t.next(this._element,we)[0]||t.prev(this._element,we)[0]||t.findOne(we,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return So}static get DefaultType(){return Mo}static get NAME(){return Et}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const t={relatedTarget:this._element},n=e.trigger(this._element,so,t);if(n.defaultPrevented)return;if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(jo))for(const t of[].concat(...document.body.children))e.on(t,"mouseover",ve);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(G),this._element.classList.add(G),e.trigger(this._element,oo,t)}hide(){if(y(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){const n=e.trigger(this._element,to,t);if(n.defaultPrevented)return;if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))e.off(t,"mouseover",ve);this._popper&&this._popper.destroy(),this._menu.classList.remove(G),this._element.classList.remove(G),this._element.setAttribute("aria-expanded","false"),v.removeDataAttribute(this._menu,"popper"),e.trigger(this._element,no,t)}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!g(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Et.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof kt=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:g(this._config.reference)?e=w(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=ue(e,this._menu,t)}_isShown(){return this._menu.classList.contains(G)}_getPlacement(){const e=this._parent;if(e.classList.contains(uo))return Co;if(e.classList.contains(ho))return Eo;if(e.classList.contains(mo))return ko;if(e.classList.contains(fo))return Ao;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(lo)?t?wo:_o:t?xo:Oo}_detectNavbar(){return this._element.closest(bo)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(e=>Number.parseInt(e,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(v.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...o(this._config.popperConfig,[0[0],e])}}_selectMenuItem({key:e,target:n}){const s=t.find(yo,this._menu).filter(e=>R(e));if(!s.length)return;We(s,n,e===jt,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const t=m.getOrCreateInstance(this,e);if(typeof e!="string")return;if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()})}static clearMenus(e){if(e.button===eo||e.type==="keyup"&&e.key!==yt)return;const n=t.find(go);for(const a of n){const t=m.getInstance(a);if(!t||t._config.autoClose===!1)continue;const s=e.composedPath(),o=s.includes(t._menu);if(s.includes(t._element)||t._config.autoClose==="inside"&&!o||t._config.autoClose==="outside"&&o)continue;if(t._menu.contains(e.target)&&(e.type==="keyup"&&e.key===yt||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const i={relatedTarget:t._element};e.type==="click"&&(i.clickEvent=e),t._completeHide(i)}}static dataApiKeydownHandler(e){const a=/input|textarea/i.test(e.target.tagName),s=e.key===Xs,o=[Zs,jt].includes(e.key);if(!o&&!s)return;if(a&&!s)return;e.preventDefault();const i=this.matches(z)?this:t.prev(this,z)[0]||t.next(this,z)[0]||t.findOne(z,e.delegateTarget.parentNode),n=m.getOrCreateInstance(i);if(o){e.stopPropagation(),n.show(),n._selectMenuItem(e);return}n._isShown()&&(e.stopPropagation(),n.hide(),i.focus())}}e.on(document,_t,z,m.dataApiKeydownHandler),e.on(document,_t,we,m.dataApiKeydownHandler),e.on(document,bt,m.clearMenus),e.on(document,ro,m.clearMenus),e.on(document,bt,z,function(e){e.preventDefault(),m.getOrCreateInstance(this).toggle()}),u(m);const wt="backdrop",zo="fade",Ot="show",xt=`mousedown.bs.${wt}`,Lo={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ro={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ct extends se{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Lo}static get DefaultType(){return Ro}static get NAME(){return wt}show(e){if(!this._config.isVisible){o(e);return}this._append();const t=this._getElement();this._config.isAnimated&&te(t),t.classList.add(Ot),this._emulateAnimation(()=>{o(e)})}hide(e){if(!this._config.isVisible){o(e);return}this._getElement().classList.remove(Ot),this._emulateAnimation(()=>{this.dispose(),o(e)})}dispose(){if(!this._isAppended)return;e.off(this._element,xt),this._element.remove(),this._isAppended=!1}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(zo),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=w(e.rootElement),e}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),e.on(t,xt,()=>{o(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Zn(e,this._getElement(),this._config.isAnimated)}}const Ho="focustrap",Io="bs.focustrap",de=`.${Io}`,Vo=`focusin${de}`,$o=`keydown.tab${de}`,Wo="Tab",Uo="forward",At="backward",qo={autofocus:!0,trapElement:null},Yo={autofocus:"boolean",trapElement:"element"};class Mt extends se{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return qo}static get DefaultType(){return Yo}static get NAME(){return Ho}activate(){if(this._isActive)return;this._config.autofocus&&this._config.trapElement.focus(),e.off(document,de),e.on(document,Vo,e=>this._handleFocusin(e)),e.on(document,$o,e=>this._handleKeydown(e)),this._isActive=!0}deactivate(){if(!this._isActive)return;this._isActive=!1,e.off(document,de)}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=t.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===At?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){if(e.key!==Wo)return;this._lastTabNavDirection=e.shiftKey?At:Uo}}const Nt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Lt=".sticky-top",ye="padding-right",Rt="margin-right";class Me{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ye,t=>t+e),this._setElementAttributes(Nt,ye,t=>t+e),this._setElementAttributes(Lt,Rt,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ye),this._resetElementAttributes(Nt,ye),this._resetElementAttributes(Lt,Rt)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const s=this.getWidth(),o=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+s)return;this._saveInitialAttribute(e,t);const o=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(o))}px`)};this._applyManipulationCallback(e,o)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&v.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=v.getDataAttribute(e,t);if(n===null){e.style.removeProperty(t);return}v.removeDataAttribute(e,t),e.style.setProperty(t,n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,n){if(g(e)){n(e);return}for(const s of t.find(e,this._element))n(s)}}const ti="modal",ni="bs.modal",d=`.${ni}`,oi=".data-api",ii="Escape",ai=`hide${d}`,ri=`hidePrevented${d}`,Ht=`hidden${d}`,It=`show${d}`,di=`shown${d}`,ui=`resize${d}`,hi=`click.dismiss${d}`,mi=`mousedown.dismiss${d}`,fi=`keydown.dismiss${d}`,pi=`click${d}${oi}`,Bt="modal-open",vi="fade",$t="show",Ve="modal-static",yi=".modal.show",_i=".modal-dialog",wi=".modal-body",Oi='[data-bs-toggle="modal"]',xi={backdrop:!0,focus:!0,keyboard:!0},Ci={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class K extends h{constructor(e,n){super(e,n),this._dialog=t.findOne(_i,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Me,this._addEventListeners()}static get Default(){return xi}static get DefaultType(){return Ci}static get NAME(){return ti}toggle(e){return this._isShown?this.hide():this.show(e)}show(t){if(this._isShown||this._isTransitioning)return;const n=e.trigger(this._element,It,{relatedTarget:t});if(n.defaultPrevented)return;this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Bt),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t))}hide(){if(!this._isShown||this._isTransitioning)return;const t=e.trigger(this._element,ai);if(t.defaultPrevented)return;this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove($t),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())}dispose(){e.off(window,d),e.off(this._dialog,d),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ct({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Mt({trapElement:this._element})}_showElement(n){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=t.findOne(wi,this._dialog);s&&(s.scrollTop=0),te(this._element),this._element.classList.add($t);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,e.trigger(this._element,di,{relatedTarget:n})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){e.on(this._element,fi,e=>{if(e.key!==ii)return;if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}),e.on(window,ui,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),e.on(this._element,mi,t=>{e.one(this._element,hi,e=>{if(this._element!==t.target||this._element!==e.target)return;if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Bt),this._resetAdjustments(),this._scrollBar.reset(),e.trigger(this._element,Ht)})}_isAnimated(){return this._element.classList.contains(vi)}_triggerBackdropTransition(){const n=e.trigger(this._element,ri);if(n.defaultPrevented)return;const s=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;if(t==="hidden"||this._element.classList.contains(Ve))return;s||(this._element.style.overflowY="hidden"),this._element.classList.add(Ve),this._queueCallback(()=>{this._element.classList.remove(Ve),this._queueCallback(()=>{this._element.style.overflowY=t},this._dialog)},this._dialog),this._element.focus()}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const t=c()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!n&&t){const t=c()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const n=K.getOrCreateInstance(this,e);if(typeof e!="string")return;if(typeof n[e]=="undefined")throw new TypeError(`No method named "${e}"`);n[e](t)})}}e.on(document,pi,Oi,function(n){const s=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),e.one(s,It,t=>{if(t.defaultPrevented)return;e.one(s,Ht,()=>{R(this)&&this.focus()})});const o=t.findOne(yi);o&&K.getInstance(o).hide();const i=K.getOrCreateInstance(s);i.toggle(this)}),ge(K),u(K);const ki="offcanvas",Ai="bs.offcanvas",b=`.${Ai}`,Wt=".data-api",Fi=`load${b}${Wt}`,ls="Escape",Kt="show",on="showing",an="hiding",Li="offcanvas-backdrop",rn=".offcanvas.show",Pi=`show${b}`,Hi=`shown${b}`,Ii=`hide${b}`,cn=`hidePrevented${b}`,ln=`hidden${b}`,$i=`resize${b}`,Wi=`click${b}${Wt}`,Ui=`keydown.dismiss${b}`,Ki='[data-bs-toggle="offcanvas"]',qi={backdrop:!0,keyboard:!0,scroll:!1},Yi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class O extends h{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return qi}static get DefaultType(){return Yi}static get NAME(){return ki}toggle(e){return this._isShown?this.hide():this.show(e)}show(t){if(this._isShown)return;const n=e.trigger(this._element,Pi,{relatedTarget:t});if(n.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Me).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(on);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Kt),this._element.classList.remove(on),e.trigger(this._element,Hi,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown)return;const t=e.trigger(this._element,Ii);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(an),this._backdrop.hide();const n=()=>{this._element.classList.remove(Kt,an),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Me).reset(),e.trigger(this._element,ln)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const n=()=>{if(this._config.backdrop==="static"){e.trigger(this._element,cn);return}this.hide()},t=Boolean(this._config.backdrop);return new Ct({className:Li,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?n:null})}_initializeFocusTrap(){return new Mt({trapElement:this._element})}_addEventListeners(){e.on(this._element,Ui,t=>{if(t.key!==ls)return;if(this._config.keyboard){this.hide();return}e.trigger(this._element,cn)})}static jQueryInterface(e){return this.each(function(){const t=O.getOrCreateInstance(this,e);if(typeof e!="string")return;if(t[e]===0[0]||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)})}}e.on(document,Wi,Ki,function(n){const s=t.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),y(this))return;e.one(s,ln,()=>{R(this)&&this.focus()});const o=t.findOne(rn);o&&o!==s&&O.getInstance(o).hide();const i=O.getOrCreateInstance(s);i.toggle(this)}),e.on(window,Fi,()=>{for(const e of t.find(rn))O.getOrCreateInstance(e).show()}),e.on(window,$i,()=>{for(const e of t.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&O.getOrCreateInstance(e).hide()}),ge(O),u(O);const Xi=/^aria-[\w-]*$/i,un={"*":["class","dir","id","lang","role",Xi],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Zi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ji=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,ea=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Zi.has(n)||Boolean(Ji.test(e.nodeValue)):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))};function ta(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const o=new window.DOMParser,s=o.parseFromString(e,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const e of i){const n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const s=[].concat(...e.attributes),o=[].concat(t["*"]||[],t[n]||[]);for(const t of s)ea(t,o)||e.removeAttribute(t.nodeName)}return s.body.innerHTML}const na="TemplateFactory",sa={allowList:un,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},oa={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},ia={entry:"(string|element|function|null)",selector:"(string|element)"};class aa extends se{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return sa}static get DefaultType(){return oa}static get NAME(){return na}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},ia)}_setContent(e,n,s){const o=t.findOne(s,e);if(!o)return;if(n=this._resolvePossibleFunction(n),!n){o.remove();return}if(g(n)){this._putElementInTemplate(w(n),o);return}if(this._config.html){o.innerHTML=this._maybeSanitize(n);return}o.textContent=n}_maybeSanitize(e){return this._config.sanitize?ta(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return o(e,[0[0],this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const ra="tooltip",ca=new Set(["sanitize","allowList","sanitizeFn"]),Qe="fade",da="modal",_e="show",ha=".tooltip-inner",hn=`.${da}`,mn="hide.bs.modal",oe="hover",Je="focus",tt="click",ba="manual",ja="hide",ya="hidden",_a="show",wa="shown",Oa="inserted",xa="click",Ca="focusin",Ea="focusout",ka="mouseenter",Aa="mouseleave",Sa={AUTO:"auto",TOP:"top",RIGHT:c()?"left":"right",BOTTOM:"bottom",LEFT:c()?"right":"left"},Ma={allowList:un,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Fa={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class H extends h{constructor(e,t){if(typeof kt=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Ma}static get DefaultType(){return Fa}static get NAME(){return ra}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(!this._isEnabled)return;if(this._isShown()){this._leave();return}this._enter()}dispose(){clearTimeout(this._timeout),e.off(this._element.closest(hn),mn,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const n=e.trigger(this._element,this.constructor.eventName(_a)),s=ts(this._element),o=(s||this._element.ownerDocument.documentElement).contains(this._element);if(n.defaultPrevented||!o)return;this._disposePopper();const t=this._getTipElement();this._element.setAttribute("aria-describedby",t.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(t),e.trigger(this._element,this.constructor.eventName(Oa))),this._popper=this._createPopper(t),t.classList.add(_e),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))e.on(t,"mouseover",ve);const a=()=>{e.trigger(this._element,this.constructor.eventName(wa)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const t=e.trigger(this._element,this.constructor.eventName(ja));if(t.defaultPrevented)return;const n=this._getTipElement();if(n.classList.remove(_e),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))e.off(t,"mouseover",ve);this._activeTrigger[tt]=!1,this._activeTrigger[Je]=!1,this._activeTrigger[oe]=!1,this._isHovered=null;const s=()=>{if(this._isWithActiveTrigger())return;this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),e.trigger(this._element,this.constructor.eventName(ya))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(Qe,_e),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=Yr(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(Qe),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new aa({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ha]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Qe)}_isShown(){return this.tip&&this.tip.classList.contains(_e)}_createPopper(e){const t=o(this._config.placement,[this,e,this._element]),n=Sa[t.toUpperCase()];return ue(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(e=>Number.parseInt(e,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return o(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...o(this._config.popperConfig,[0[0],t])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")e.on(this._element,this.constructor.eventName(xa),this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger[tt]=!t._isShown()||!t._activeTrigger[tt],t.toggle()});else if(n!==ba){const t=n===oe?this.constructor.eventName(ka):this.constructor.eventName(Ca),s=n===oe?this.constructor.eventName(Aa):this.constructor.eventName(Ea);e.on(this._element,t,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type==="focusin"?Je:oe]=!0,t._enter()}),e.on(this._element,s,this._config.selector,e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type==="focusout"?Je:oe]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},e.on(this._element.closest(hn),mn,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");if(!e)return;!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title")}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){if(this._isWithActiveTrigger())return;this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide)}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=v.getDataAttributes(this._element);for(const e of Object.keys(t))ca.has(e)&&delete t[e];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:w(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=H.getOrCreateInstance(this,e);if(typeof e!="string")return;if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()})}}u(H);const za="popover",Da=".popover-header",Na=".popover-body",La={...H.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ra={...H.DefaultType,content:"(null|string|element|function)"};class ot extends H{static get Default(){return La}static get DefaultType(){return Ra}static get NAME(){return za}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Da]:this._getTitle(),[Na]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=ot.getOrCreateInstance(this,e);if(typeof e!="string")return;if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e]()})}}u(ot);const Ha="scrollspy",Ia="bs.scrollspy",it=`.${Ia}`,Va=".data-api",$a=`activate${it}`,pn=`click${it}`,Ua=`load${it}${Va}`,Ka="dropdown-item",$="active",Ya='[data-bs-spy="scroll"]',ct="[href]",Xa=".nav, .list-group",gn=".nav-link",Za=".nav-item",Ja=".list-group-item",er=`${gn}, ${Za} > ${gn}, ${Ja}`,tr=".dropdown",nr=".dropdown-toggle",sr={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},or={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class be extends h{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sr}static get DefaultType(){return or}static get NAME(){return Ha}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=w(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){if(!this._config.smoothScroll)return;e.off(this._config.target,pn),e.on(this._config.target,pn,ct,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,s=t.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:s,behavior:"smooth"});return}n.scrollTop=s}})}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){const n=e=>this._targetLinks.get(`#${e.target.id}`),s=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(n(e))},t=(this._rootElement||document.documentElement).scrollTop,o=t>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=t;for(const i of e){if(!i.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(i));continue}const a=i.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(s(i),!t)return;continue}!o&&!a&&s(i)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=t.find(ct,this._config.target);for(const n of e){if(!n.hash||y(n))continue;const s=t.findOne(decodeURI(n.hash),this._element);R(s)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,s))}}_process(t){if(this._activeTarget===t)return;this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add($),this._activateParents(t),e.trigger(this._element,$a,{relatedTarget:t})}_activateParents(e){if(e.classList.contains(Ka)){t.findOne(nr,e.closest(tr)).classList.add($);return}for(const n of t.parents(e,Xa))for(const e of t.prev(n,er))e.classList.add($)}_clearActiveClass(e){e.classList.remove($);const n=t.find(`${ct}.${$}`,e);for(const e of n)e.classList.remove($)}static jQueryInterface(e){return this.each(function(){const t=be.getOrCreateInstance(this,e);if(typeof e!="string")return;if(t[e]===0[0]||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()})}}e.on(window,Ua,()=>{for(const e of t.find(Ya))be.getOrCreateInstance(e)}),u(be);const ar="tab",rr="bs.tab",M=`.${rr}`,lr=`hide${M}`,dr=`hidden${M}`,ur=`show${M}`,hr=`shown${M}`,mr=`click${M}`,fr=`keydown${M}`,pr=`load${M}`,gr="ArrowLeft",vn="ArrowRight",br="ArrowUp",yn="ArrowDown",pt="Home",wn="End",S="active",Mn="fade",He="show",Cr="dropdown",Wn=".dropdown-toggle",kr=".dropdown-menu",Re=`:not(${Wn})`,Sr='.list-group, .nav, [role="tablist"]',Mr=".nav-item, .list-group-item",Fr=`.nav-link${Re}, .list-group-item${Re}, [role="tab"]${Re}`,Gn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ie=`${Fr}, ${Gn}`,Dr=`.${S}[data-bs-toggle="tab"], .${S}[data-bs-toggle="pill"], .${S}[data-bs-toggle="list"]`;class B extends h{constructor(t){if(super(t),this._parent=this._element.closest(Sr),!this._parent)return;this._setInitialAttributes(this._parent,this._getChildren()),e.on(this._element,fr,e=>this._keydown(e))}static get NAME(){return ar}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?e.trigger(n,lr,{relatedTarget:t}):null,o=e.trigger(t,ur,{relatedTarget:n});if(o.defaultPrevented||s&&s.defaultPrevented)return;this._deactivate(n,t),this._activate(t,n)}_activate(n,s){if(!n)return;n.classList.add(S),this._activate(t.getElementFromSelector(n));const o=()=>{if(n.getAttribute("role")!=="tab"){n.classList.add(He);return}n.removeAttribute("tabindex"),n.setAttribute("aria-selected",!0),this._toggleDropDown(n,!0),e.trigger(n,hr,{relatedTarget:s})};this._queueCallback(o,n,n.classList.contains(Mn))}_deactivate(n,s){if(!n)return;n.classList.remove(S),n.blur(),this._deactivate(t.getElementFromSelector(n));const o=()=>{if(n.getAttribute("role")!=="tab"){n.classList.remove(He);return}n.setAttribute("aria-selected",!1),n.setAttribute("tabindex","-1"),this._toggleDropDown(n,!1),e.trigger(n,dr,{relatedTarget:s})};this._queueCallback(o,n,n.classList.contains(Mn))}_keydown(e){if(![gr,vn,br,yn,pt,wn].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(e=>!y(e));let t;if([pt,wn].includes(e.key))t=n[e.key===pt?0:n.length-1];else{const s=[vn,yn].includes(e.key);t=We(n,e.target,s,!0)}t&&(t.focus({preventScroll:!0}),B.getOrCreateInstance(t).show())}_getChildren(){return t.find(Ie,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=t.getElementFromSelector(e);if(!n)return;this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`)}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(Cr))return;const o=(e,o)=>{const i=t.findOne(e,s);i&&i.classList.toggle(o,n)};o(Wn,S),o(kr,He),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(S)}_getInnerElement(e){return e.matches(Ie)?e:t.findOne(Ie,e)}_getOuterElement(e){return e.closest(Mr)||e}static jQueryInterface(e){return this.each(function(){const t=B.getOrCreateInstance(this);if(typeof e!="string")return;if(t[e]===0[0]||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()})}}e.on(document,mr,Gn,function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),y(this))return;B.getOrCreateInstance(this).show()}),e.on(window,pr,()=>{for(const e of t.find(Dr))B.getOrCreateInstance(e)}),u(B);const Lr="toast",Rr="bs.toast",x=`.${Rr}`,Hr=`mouseover${x}`,Ir=`mouseout${x}`,Br=`focusin${x}`,Vr=`focusout${x}`,$r=`hide${x}`,Wr=`hidden${x}`,Ur=`show${x}`,Kr=`shown${x}`,qr="fade",os="hide",le="show",je="showing",Qr={animation:"boolean",autohide:"boolean",delay:"number"},Zr={animation:!0,autohide:!0,delay:5e3};class Ee extends h{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Zr}static get DefaultType(){return Qr}static get NAME(){return Lr}show(){const t=e.trigger(this._element,Ur);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(qr);const n=()=>{this._element.classList.remove(je),e.trigger(this._element,Kr),this._maybeScheduleHide()};this._element.classList.remove(os),te(this._element),this._element.classList.add(le,je),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,$r);if(t.defaultPrevented)return;const n=()=>{this._element.classList.add(os),this._element.classList.remove(je,le),e.trigger(this._element,Wr)};this._element.classList.add(je),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(le),super.dispose()}isShown(){return this._element.classList.contains(le)}_maybeScheduleHide(){if(!this._config.autohide)return;if(this._hasMouseInteraction||this._hasKeyboardInteraction)return;this._timeout=setTimeout(()=>{this.hide()},this._config.delay)}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const n=e.relatedTarget;if(this._element===n||this._element.contains(n))return;this._maybeScheduleHide()}_setListeners(){e.on(this._element,Hr,e=>this._onInteraction(e,!0)),e.on(this._element,Ir,e=>this._onInteraction(e,!1)),e.on(this._element,Br,e=>this._onInteraction(e,!0)),e.on(this._element,Vr,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=Ee.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]=="undefined")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}ge(Ee),u(Ee);const ec={Alert:pe,Button:fe,Carousel:ie,Collapse:re,Dropdown:m,Modal:K,Offcanvas:O,Popover:ot,ScrollSpy:be,Tab:B,Toast:Ee,Tooltip:H};return ec}),function e(t){"use strict";typeof module!="undefined"?t=module:typeof process!="undefined"&&(t=process),t._factory=e;function i(e,t,n){const a=typeof n,o=typeof e;if(a!=="undefined"){if(o!=="undefined"){if(n){if(o==="function"&&a===o)return function(t){return e(n(t))};if(t=e.constructor,t===n.constructor){if(t===Array)return n.concat(e);if(t===Map){var s,i=new Map(n);for(s of e)i.set(s[0],s[1]);return i}if(t===Set){s=new Set(n);for(i of e.values())s.add(i);return s}}}return e}return n}return o==="undefined"?t:e}function _(e,t){return typeof e=="undefined"?t:e}function o(){return Object.create(null)}function r(e){return typeof e=="string"}function E(e){return typeof e=="object"}function k(e,t){if(r(t))e=e[t];else for(let n=0;e&&n<t.length;n++)e=e[t[n]];return e}const Pe=/[^\p{L}\p{N}]+/u,Le=/(\d{3})/g,De=/(\D)(\d{3})/g,Te=/(\d{3})(\D)/g,ae=/[\u0300-\u036f]/g;function O(e={}){if(!this||this.constructor!==O)return new O(...arguments);if(arguments.length)for(e=0;e<arguments.length;e++)this.assign(arguments[e]);else this.assign(e)}n=O.prototype,n.assign=function(e){this.normalize=i(e.normalize,!0,this.normalize);let n=e.include,t=n||e.exclude||e.split,s;if(t||t===""){if(typeof t=="object"&&t.constructor!==RegExp){let e="";s=!n,n||(e+="\\p{Z}"),t.letter&&(e+="\\p{L}"),t.number&&(e+="\\p{N}",s=!!n),t.symbol&&(e+="\\p{S}"),t.punctuation&&(e+="\\p{P}"),t.control&&(e+="\\p{C}"),(t=t.char)&&(e+=typeof t=="object"?t.join(""):t);try{this.split=new RegExp("["+(n?"^":"")+e+"]+","u")}catch{this.split=/\s+/}}else this.split=t,s=t===!1||"a1a".split(t).length<2;this.numeric=i(e.numeric,s)}else{try{this.split=i(this.split,Pe)}catch{this.split=/\s+/}this.numeric=i(e.numeric,i(this.numeric,!0))}if(this.prepare=i(e.prepare,null,this.prepare),this.finalize=i(e.finalize,null,this.finalize),t=e.filter,this.filter=typeof t=="function"?t:i(t&&new Set(t),null,this.filter),this.dedupe=i(e.dedupe,!0,this.dedupe),this.matcher=i((t=e.matcher)&&new Map(t),null,this.matcher),this.mapper=i((t=e.mapper)&&new Map(t),null,this.mapper),this.stemmer=i((t=e.stemmer)&&new Map(t),null,this.stemmer),this.replacer=i(e.replacer,null,this.replacer),this.minlength=i(e.minlength,1,this.minlength),this.maxlength=i(e.maxlength,1024,this.maxlength),this.rtl=i(e.rtl,!1,this.rtl),(this.cache=t=i(e.cache,!0,this.cache))&&(this.F=null,this.L=typeof t=="number"?t:2e5,this.B=new Map,this.D=new Map,this.I=this.H=128),this.h="",this.J=null,this.A="",this.K=null,this.matcher)for(const e of this.matcher.keys())this.h+=(this.h?"|":"")+e;if(this.stemmer)for(const e of this.stemmer.keys())this.A+=(this.A?"|":"")+e;return this},n.addStemmer=function(e,t){return this.stemmer||(this.stemmer=new Map),this.stemmer.set(e,t),this.A+=(this.A?"|":"")+e,this.K=null,this.cache&&v(this),this},n.addFilter=function(e){return typeof e=="function"?this.filter=e:(this.filter||(this.filter=new Set),this.filter.add(e)),this.cache&&v(this),this},n.addMapper=function(e,t){return typeof e=="object"?this.addReplacer(e,t):e.length>1?this.addMatcher(e,t):(this.mapper||(this.mapper=new Map),this.mapper.set(e,t),this.cache&&v(this),this)},n.addMatcher=function(e,t){return typeof e=="object"?this.addReplacer(e,t):e.length<2&&(this.dedupe||this.mapper)?this.addMapper(e,t):(this.matcher||(this.matcher=new Map),this.matcher.set(e,t),this.h+=(this.h?"|":"")+e,this.J=null,this.cache&&v(this),this)},n.addReplacer=function(e,t){return typeof e=="string"?this.addMatcher(e,t):(this.replacer||(this.replacer=[]),this.replacer.push(e,t),this.cache&&v(this),this)},n.encode=function(e,t){if(this.cache&&e.length<=this.H)if(this.F){if(this.B.has(e))return this.B.get(e)}else this.F=setTimeout(v,50,this);this.normalize&&(typeof this.normalize=="function"?e=this.normalize(e):e=ae?e.normalize("NFKD").replace(ae,"").toLowerCase():e.toLowerCase()),this.prepare&&(e=this.prepare(e)),this.numeric&&e.length>3&&(e=e.replace(De,"$1 $2").replace(Te,"$1 $2").replace(Le,"$1 "));const l=!(this.dedupe||this.mapper||this.filter||this.matcher||this.stemmer||this.replacer);let s=[],i=o(),a,r,c=this.split||this.split===""?e.split(this.split):[e];for(let d=0,e,o;d<c.length;d++)if((e=o=c[d])&&!(e.length<this.minlength||e.length>this.maxlength)){if(t){if(i[e])continue;i[e]=1}else{if(a===e)continue;a=e}if(l)s.push(e);else if(!this.filter||(typeof this.filter=="function"?this.filter(e):!this.filter.has(e))){if(this.cache&&e.length<=this.I)if(this.F){{var n=this.D.get(e);if(n||n===""){n&&s.push(n);continue}}}else this.F=setTimeout(v,50,this);if(this.stemmer){this.K||(this.K=new RegExp("(?!^)("+this.A+")$"));let t;for(;t!==e&&e.length>2;)t=e,e=e.replace(this.K,e=>this.stemmer.get(e))}if(e&&(this.mapper||this.dedupe&&e.length>1)){n="";for(let i=0,s="",o,t;i<e.length;i++)o=e.charAt(i),o===s&&this.dedupe||((t=this.mapper&&this.mapper.get(o))||t===""?t===s&&this.dedupe||!(s=t)||(n+=t):n+=s=o);e=n}if(this.matcher&&e.length>1&&(this.J||(this.J=new RegExp("("+this.h+")","g")),e=e.replace(this.J,e=>this.matcher.get(e))),e&&this.replacer)for(n=0;e&&n<this.replacer.length;n+=2)e=e.replace(this.replacer[n],this.replacer[n+1]);if(this.cache&&o.length<=this.I&&(this.D.set(o,e),this.D.size>this.L&&(this.D.clear(),this.I=this.I/1.1|0)),e){if(e!==o)if(t){if(i[e])continue;i[e]=1}else{if(r===e)continue;r=e}s.push(e)}}}return this.finalize&&(s=this.finalize(s)||s),this.cache&&e.length<=this.H&&(this.B.set(e,s),this.B.size>this.L&&(this.B.clear(),this.H=this.H/1.1|0)),s};function v(e){e.F=null,e.B.clear(),e.D.clear()}function X(e,t,n){n||(t||typeof e!="object"?typeof t=="object"&&(n=t,t=0):n=e),n&&(e=n.query||e,t=n.limit||t);let o=""+(t||0);n&&(o+=(n.offset||0)+!!n.context+!!n.suggest+(n.resolve!==!1)+(n.resolution||this.resolution)+(n.boost||0)),e=(""+e).toLowerCase(),this.cache||(this.cache=new b);let s=this.cache.get(e+o);if(!s){const i=n&&n.cache;i&&(n.cache=!1),s=this.search(e,t,n),i&&(n.cache=i),this.cache.set(e+o,s)}return s}function b(e){this.limit=e&&e!==!0?e:1e3,this.cache=new Map,this.h=""}b.prototype.set=function(e,t){this.cache.set(this.h=e,t),this.cache.size>this.limit&&this.cache.delete(this.cache.keys().next().value)},b.prototype.get=function(e){const t=this.cache.get(e);return t&&this.h!==e&&(this.cache.delete(e),this.cache.set(this.h=e,t)),t},b.prototype.remove=function(e){for(const t of this.cache){const n=t[0];t[1].includes(e)&&this.cache.delete(n)}},b.prototype.clear=function(){this.cache.clear(),this.h=""};const we={normalize:!1,numeric:!1,dedupe:!1},M={},Z=new Map([["b","p"],["v","f"],["w","f"],["z","s"],["x","s"],["d","t"],["n","m"],["c","k"],["g","k"],["j","k"],["q","k"],["i","e"],["y","e"],["u","o"]]),_e=new Map([["ae","a"],["oe","o"],["sh","s"],["kh","k"],["th","t"],["ph","f"],["pf","f"]]),ve=[/([^aeo])h(.)/g,"$1$2",/([aeo])h([^aeo]|$)/g,"$1$2",/(.)\1+/g,"$1"],de={a:"",e:"",i:"",o:"",u:"",y:"",b:1,f:1,p:1,v:1,c:2,g:2,j:2,k:2,q:2,s:2,x:2,z:2,"ß":2,d:3,t:3,l:4,m:5,n:5,r:6};var n,B={Exact:we,Default:M,Normalize:M,LatinBalance:{mapper:Z},LatinAdvanced:{mapper:Z,matcher:_e,replacer:ve},LatinExtra:{mapper:Z,replacer:ve.concat([/(?!^)[aeo]/g,""]),matcher:_e},LatinSoundex:{dedupe:!1,include:{letter:!0},finalize:function(e){for(let n=0;n<e.length;n++){var t=e[n];let s=t.charAt(0),o=de[s];for(let n=1,e;n<t.length&&(e=t.charAt(n),e==="h"||e==="w"||!(e=de[e])||e===o||(s+=e,o=e,s.length!==4));n++);e[n]=s}}},CJK:{split:""},LatinExact:we,LatinDefault:M,LatinSimple:M};function ce(e,t,n,s){let o=[];for(let a=0,i;a<e.index.length;a++)if(i=e.index[a],t>=i.length)t-=i.length;else{t=i[s?"splice":"slice"](t,n);const a=t.length;if(a&&(o=o.length?o.concat(t):t,n-=a,s&&(e.length-=a),!n))break;t=0}return o}function x(e){if(!this||this.constructor!==x)return new x(e);this.index=e?[e]:[],this.length=e?e.length:0;const t=this;return new Proxy([],{get(e,n){if(n==="length")return t.length;if(n==="push")return function(e){t.index[t.index.length-1].push(e),t.length++};if(n==="pop")return function(){if(t.length)return t.length--,t.index[t.index.length-1].pop()};if(n==="indexOf")return function(e){let n=0;for(let s=0,o,i;s<t.index.length;s++){if(o=t.index[s],i=o.indexOf(e),i>=0)return n+i;n+=o.length}return-1};if(n==="includes")return function(e){for(let n=0;n<t.index.length;n++)if(t.index[n].includes(e))return!0;return!1};if(n==="slice")return function(e,n){return ce(t,e||0,n||t.length,!1)};if(n==="splice")return function(e,n){return ce(t,e||0,n||t.length,!0)};if(n==="constructor")return Array;if(typeof n!="symbol")return(e=t.index[n/2**31|0])&&e[n]},set(e,n,s){return e=n/2**31|0,(t.index[e]||(t.index[e]=[]))[n]=s,t.length++,!0}})}x.prototype.clear=function(){this.index.length=0},x.prototype.push=function(){};function l(e=8){if(!this||this.constructor!==l)return new l(e);this.index=o(),this.h=[],this.size=0,e>32?(this.B=ue,this.A=BigInt(e)):(this.B=re,this.A=e)}l.prototype.get=function(e){const t=this.index[this.B(e)];return t&&t.get(e)},l.prototype.set=function(e,t){var s=this.B(e);let n=this.index[s];n?(s=n.size,n.set(e,t),(s-=n.size)&&this.size++):(this.index[s]=n=new Map([[e,t]]),this.h.push(n),this.size++)};function a(e=8){if(!this||this.constructor!==a)return new a(e);this.index=o(),this.h=[],this.size=0,e>32?(this.B=ue,this.A=BigInt(e)):(this.B=re,this.A=e)}a.prototype.add=function(e){var n=this.B(e);let t=this.index[n];t?(n=t.size,t.add(e),(n-=t.size)&&this.size++):(this.index[n]=t=new Set([e]),this.h.push(t),this.size++)},n=l.prototype,n.has=a.prototype.has=function(e){const t=this.index[this.B(e)];return t&&t.has(e)},n.delete=a.prototype.delete=function(e){const t=this.index[this.B(e)];t&&t.delete(e)&&this.size--},n.clear=a.prototype.clear=function(){this.index=o(),this.h=[],this.size=0},n.values=a.prototype.values=function*(){for(let e=0;e<this.h.length;e++)for(let t of this.h[e].values())yield t},n.keys=a.prototype.keys=function*(){for(let e=0;e<this.h.length;e++)for(let t of this.h[e].keys())yield t},n.entries=a.prototype.entries=function*(){for(let e=0;e<this.h.length;e++)for(let t of this.h[e].entries())yield t};function re(e){let n=2**this.A-1;if(typeof e=="number")return e&n;let t=0,s=this.A+1;for(let o=0;o<e.length;o++)t=(t*s^e.charCodeAt(o))&n;return this.A===32?t+2**31:t}function ue(e){let n=BigInt(2)**this.A-BigInt(1);var t=typeof e;if(t==="bigint")return e&n;if(t==="number")return BigInt(e)&n;t=BigInt(0);let s=this.A+BigInt(1);for(let o=0;o<e.length;o++)t=(t*s^BigInt(e.charCodeAt(o)))&n;return t}let y,A;async function Me(e){e=e.data;var s=e.task;const o=e.id;let n=e.args;switch(s){case"init":A=e.options||{},(s=e.factory)?(Function("return "+s)()(t),y=new t.FlexSearch.Index(A),delete t.FlexSearch):y=new c(A),postMessage({id:o});break;default:let i;s==="export"&&(n[1]?(n[0]=A.export,n[2]=0,n[3]=1):n=null),s==="import"?n[0]&&(e=await A.import.call(y,n[0]),y.import(n[0],e)):((i=n&&y[s].apply(y,n))&&i.then&&(i=await i),i&&i.await&&(i=await i.await),s==="search"&&i.result&&(i=i.result)),postMessage(s==="search"?{id:o,msg:i}:{id:o})}}function J(e){w.call(e,"add"),w.call(e,"append"),w.call(e,"search"),w.call(e,"update"),w.call(e,"remove"),w.call(e,"searchCache")}let Y,oe,R;function ke(){Y=R=0}function w(e){this[e+"Async"]=function(){const t=arguments;var n=t[t.length-1];let s;if(typeof n=="function"&&(s=n,delete t[t.length-1]),Y?R||(R=Date.now()-oe>=this.priority*this.priority*3):(Y=setTimeout(ke,0),oe=Date.now()),R){const n=this;return new Promise(s=>{setTimeout(function(){s(n[e+"Async"].apply(n,t))},0)})}const o=this[e].apply(this,t);return n=o.then?o:new Promise(e=>e(o)),s&&n.then(s),n}}let m=0;function p(e={},n){function r(t){function a(e){e=e.data||e;const t=e.id,n=t&&i.h[t];n&&(n(e.msg),delete i.h[t])}if(this.worker=t,this.h=o(),this.worker)return c?this.worker.on("message",a):this.worker.onmessage=a,e.config?new Promise(function(t){m>1e9&&(m=0),i.h[++m]=function(){t(i)},i.worker.postMessage({id:m,task:"init",factory:s,options:e})}):(this.priority=e.priority||4,this.encoder=n||null,this.worker.postMessage({task:"init",factory:s,options:e}),this)}if(!this||this.constructor!==p)return new p(e);let s=typeof t!="undefined"?t._factory:typeof window!="undefined"?window._factory:null;s&&(s=s.toString());const c=typeof window=="undefined",i=this,a=He(s,c,e.worker);return a.then?a.then(function(e){return r.call(i,e)}):r.call(this,a)}h("add"),h("append"),h("search"),h("update"),h("remove"),h("clear"),h("export"),h("import"),p.prototype.searchCache=X,J(p.prototype);function h(e){p.prototype[e]=function(){const o=this,t=[].slice.call(arguments);var n=t[t.length-1];let s;return typeof n=="function"&&(s=n,t.pop()),n=new Promise(function(n){e==="export"&&typeof t[0]=="function"&&(t[0]=null),m>1e9&&(m=0),o.h[++m]=n,o.worker.postMessage({task:e,id:m,args:t})}),s?(n.then(s),this):n}}function He(e,t,n){return t?typeof module!="undefined"?new(require("worker_threads").Worker)(__dirname+"/node/node.js"):import("worker_threads").then(function(e){return new e.Worker((1,eval)("import.meta.dirname")+"/node/node.mjs")}):e?new window.Worker(URL.createObjectURL(new Blob(["onmessage="+Me.toString()],{type:"text/javascript"}))):new window.Worker(typeof n=="string"?n:(0,eval)("import.meta.url").replace("/worker.js","/worker/worker.js").replace("flexsearch.bundle.module.min.js","module/worker/worker.js").replace("flexsearch.bundle.module.min.mjs","module/worker/worker.js"),{type:"module"})}g.prototype.add=function(e,t,n){if(E(e)&&(t=e,e=k(t,this.key)),t&&(e||e===0)){if(!n&&this.reg.has(e))return this.update(e,t);for(let l=0,o;l<this.field.length;l++){o=this.B[l];var s,i,a,c=this.index.get(this.field[l]);typeof o=="function"?(i=o(t),i&&c.add(e,i,n,!0)):(i=o.G,!i||i(t))&&(o.constructor===String?o=[""+o]:r(o)&&(o=[o]),U(t,o,this.D,0,c,e,o[0],n))}if(this.tag)for(c=0;c<this.A.length;c++){s=this.A[c],i=this.tag.get(this.F[c]);let l=o();if(typeof s=="function"){if(s=s(t),!s)continue}else{if(a=s.G,a&&!a(t))continue;s.constructor===String&&(s=""+s),s=k(t,s)}if(i&&s){r(s)&&(s=[s]);for(let r=0,o,t;r<s.length;r++)if(o=s[r],!l[o]&&(l[o]=1,(a=i.get(o))?t=a:i.set(o,t=[]),!n||!t.includes(e))){if(t.length===2**31-1){if(a=new x(t),this.fastupdate)for(let e of this.reg.values())e.includes(t)&&(e[e.indexOf(t)]=a);i.set(o,t=a)}t.push(e),this.fastupdate&&((a=this.reg.get(e))?a.push(t):this.reg.set(e,[t]))}}}if(this.store&&(!n||!this.store.has(e))){let s;if(this.h){s=o();for(let o=0,e;o<this.h.length;o++){if(e=this.h[o],(n=e.G)&&!n(t))continue;let i;if(typeof e=="function"){if(i=e(t),!i)continue;e=[e.O]}else if(r(e)||e.constructor===String){s[e]=t[e];continue}W(t,s,e,0,e[0],i)}}this.store.set(e,s||t)}this.worker&&(this.fastupdate||this.reg.add(e))}return this};function W(e,t,n,s,i,a){if(e=e[i],s===n.length-1)t[i]=a||e;else if(e)if(e.constructor===Array)for(t=t[i]=Array(e.length),i=0;i<e.length;i++)W(e,t,n,s,i);else t=t[i]||(t[i]=o()),i=n[++s],W(e,t,n,s,i)}function U(e,t,n,s,o,i,a,r){if(e=e[a])if(s===t.length-1){if(e.constructor===Array){if(n[s]){for(t=0;t<e.length;t++)o.add(i,e[t],!0,!0);return}e=e.join(" ")}o.add(i,e,r,!0)}else if(e.constructor===Array)for(a=0;a<e.length;a++)U(e,t,n,s,o,i,a,r);else a=t[++s],U(e,t,n,s,o,i,a,r)}function K(e,t,n,s){if(!e.length)return e;if(e.length===1)return e=e[0],e=n||e.length>t?e.slice(n,n+t):e,s?j.call(this,e):e;let o=[];for(let r=0,i,a;r<e.length;r++)if((i=e[r])&&(a=i.length)){if(n){if(n>=a){n-=a;continue}i=i.slice(n,n+t),a=i.length,n=0}if(a>t&&(i=i.slice(0,t),a=t),!o.length&&a>=t)return s?j.call(this,i):i;if(o.push(i),t-=a,!t)break}return o=o.length>1?[].concat.apply([],o):o[0],s?j.call(this,o):o}function L(e,t,n,o){var a,i=o[0];if(i[0]&&i[0].query)return e[t].apply(e,i);if(!(t!=="and"&&t!=="not"||e.result.length||e.await||i.suggest))return o.length>1&&(i=o[o.length-1]),(o=i.resolve)?e.await||e.result:e;let d=[],h=0,m=0,u,r,f,c,l;for(t=0;t<o.length;t++)if(i=o[t]){if(a=0[0],i.constructor===s)a=i.await||i.result;else if(i.then||i.constructor===Array)a=i;else{h=i.limit||0,m=i.offset||0,f=i.suggest,r=i.resolve,u=((c=i.highlight||e.highlight)||i.enrich)&&r,a=i.queue;let o=i.async||a,n=i.index,s=i.query;if(n?e.index||(e.index=n):n=e.index,s||i.tag){const h=i.field||i.pluck;if(h&&(!s||e.query&&!c||(e.query=s,e.field=h,e.highlight=c),n=n.index.get(h)),a&&(l||e.await)){l=1;let s;const r=e.C.length,a=new Promise(function(e){s=e});(function(t,n){a.h=function(){n.index=null,n.resolve=!1,n.enrich=!1;let i=o?t.searchAsync(n):t.search(n);return i.then?i.then(function(t){return e.C[r]=t=t.result||t,s(t),t}):(i=i.result||i,s(i),i)}})(n,Object.assign({},i)),e.C.push(a),d[t]=a;continue}i.resolve=!1,i.enrich=!1,i.index=null,a=o?n.searchAsync(i):n.search(i),i.resolve=r,i.enrich=u,i.index=n}else if(i.and)a=N(i,"and",n);else if(i.or)a=N(i,"or",n);else if(i.not)a=N(i,"not",n);else if(i.xor)a=N(i,"xor",n);else continue}a.await?(l=1,a=a.await):a.then?(l=1,a=a.then(function(e){return e.result||e})):a=a.result||a,d[t]=a}if(l&&!e.await&&(e.await=new Promise(function(t){e.return=t})),l){const t=Promise.all(d).then(function(s){for(let o=0;o<e.C.length;o++)if(e.C[o]===t){e.C[o]=function(){return n.call(e,s,h,m,u,r,f,c)};break}te(e)});e.C.push(t)}else if(e.await)e.C.push(function(){return n.call(e,d,h,m,u,r,f,c)});else return n.call(e,d,h,m,u,r,f,c);return r?e.await||e.result:e}function N(e,t,n){e=e[t];const o=e[0]||e;return o.index||(o.index=n),n=new s(o),e.length>1&&(n=n[t].apply(n,e.slice(1))),n}s.prototype.or=function(){return L(this,"or",Ne,arguments)};function Ne(e,t,n,s,o,i,a){return e.length&&(this.result.length&&e.push(this.result),e.length<2?this.result=e[0]:(this.result=he(e,t,n,!1,this.h),n=0)),o&&(this.await=null),o?this.resolve(t,n,s,a):this}s.prototype.and=function(){return L(this,"and",Se,arguments)};function Se(e,t,n,s,o,i,a){if(!i&&!this.result.length)return o?this.result:this;let r;if(e.length)if(this.result.length&&e.unshift(this.result),e.length<2)this.result=e[0];else{let s=0;for(let t=0,o,n;t<e.length;t++)if((o=e[t])&&(n=o.length))s<n&&(s=n);else if(!i){s=0;break}s?(this.result=S(e,s,t,n,i,this.h,o),r=!0):this.result=[]}else i||(this.result=e);return o&&(this.await=null),o?this.resolve(t,n,s,a,r):this}s.prototype.xor=function(){return L(this,"xor",Ae,arguments)};function Ae(e,t,n,s,i,a,r){if(e.length)if(this.result.length&&e.unshift(this.result),e.length<2)this.result=e[0];else{a:{a=n;var c=this.h;const s=[],r=o();let l=0;for(let n=0,t;n<e.length;n++)if(t=e[n]){l<t.length&&(l=t.length);for(let e=0,n;e<t.length;e++)if(n=t[e])for(let e=0,t;e<n.length;e++)t=n[e],r[t]=r[t]?2:1}for(let n=0,o,d=0;n<l;n++)for(let l=0,u;l<e.length;l++)if((u=e[l])&&(o=u[n]))for(let h=0,u;h<o.length;h++)if(u=o[h],r[u]===1)if(a)a--;else if(i){if(s.push(u),s.length===t){e=s;break a}}else{const o=n+(l?c:0);if(s[o]||(s[o]=[]),s[o].push(u),++d===t){e=s;break a}}e=s}this.result=e,c=!0}else a||(this.result=e);return i&&(this.await=null),i?this.resolve(t,n,s,r,c):this}s.prototype.not=function(){return L(this,"not",ze,arguments)};function ze(e,t,n,s,o,i,a){if(!i&&!this.result.length)return o?this.result:this;if(e.length&&this.result.length){a:{i=n;var r=[];e=new Set(e.flat().flat());for(let n=0,s,a=0;n<this.result.length;n++)if(s=this.result[n])for(let l=0,c;l<s.length;l++)if(c=s[l],!e.has(c))if(i)i--;else if(o){if(r.push(c),r.length===t){e=r;break a}}else if(r[n]||(r[n]=[]),r[n].push(c),++a===t){e=r;break a}e=r}this.result=e,r=!0}return o&&(this.await=null),o?this.resolve(t,n,s,a,r):this}function D(e,t,n,s,o){let S,M,T;typeof o=="string"?(S=o,o=""):S=o.template,M=S.indexOf("$1"),T=S.substring(M+2),M=S.substring(0,M);let u=o&&o.boundary,F=!o||o.clip!==!1,z=o&&o.merge&&T&&M&&new RegExp(T+" "+M,"g");o=o&&o.ellipsis,A=0,typeof o=="object"&&(g=o.template,A=g.length-2,o=o.pattern),typeof o!="string"&&(o=o===!1?"":"..."),A&&(o=g.replace("$1",o)),g=o.length-A;let y,j;typeof u=="object"&&(y=u.before,y===0&&(y=-1),j=u.after,j===0&&(j=-1),u=u.total||9e5),A=new Map;for(let R=0,D,P,N;R<t.length;R++){let L;if(s)L=t,N=s;else{if(x=t[R],N=x.field,!N)continue;L=x.result}P=n.get(N),D=P.encoder,x=A.get(D),typeof x!="string"&&(x=D.encode(e),A.set(D,x));for(let e=0;e<L.length;e++){if(i=L[e].doc,!i)continue;if(i=k(i,N),!i)continue;if(d=i.trim().split(/\s+/),!d.length)continue;i="",r=[];let t=[];for(var O=-1,m=-1,l=0,a=0;a<d.length;a++){f=d[a],b=D.encode(f),b=b.length>1?b.join(" "):b[0];let e;if(b&&f){for(var i,r,c,d,f,g,v,b,_,x,A,h=f.length,w=(D.split?f.replace(D.split,""):f).length-b.length,p="",C=0,E=0;E<x.length;E++)v=x[E],v&&(c=v.length,c+=w<0?0:w,C&&c<=C||(v=b.indexOf(v),v>-1&&(p=(v?f.substring(0,v):"")+M+f.substring(v,v+c)+T+(v+c<h?f.substring(v+c):""),C=c,e=!0)));p&&(u&&(O<0&&(O=i.length+(i?1:0)),m=i.length+(i?1:0)+p.length,l+=h,t.push(r.length),r.push({match:p})),i+=(i?" ":"")+p)}if(e){if(u&&l>=u)break}else f=d[a],i+=(i?" ":"")+f,u&&r.push({text:f})}if(l=t.length*(S.length-2),y||j||u&&i.length-l>u)if(l=u+l-g*2,a=m-O,y>0&&(a+=y),j>0&&(a+=j),a<=l)d=y?O-(y>0?y:0):O-((l-a)/2|0),r=j?m+(j>0?j:0):d+l,F||(d>0&&i.charAt(d)!==" "&&i.charAt(d-1)!==" "&&(d=i.indexOf(" ",d),d<0&&(d=0)),r<i.length&&i.charAt(r-1)!==" "&&i.charAt(r)!==" "&&(r=i.lastIndexOf(" ",r),r<m?r=m:++r)),i=(d?o:"")+i.substring(d,r)+(r<i.length?o:"");else{m=[],O={},l={},a={},f={},b={},p=w=h=0;for(E=C=1;;){_=0[0];for(let e=0,n;e<t.length;e++){if(n=t[e],p)if(w!==p){if(a[e+1])continue;if(n+=p,O[n]){h-=g,l[e+1]=1,a[e+1]=1;continue}if(n>=r.length-1){if(n>=r.length){a[e+1]=1,n>=d.length&&(l[e+1]=1);continue}h-=g}if(i=r[n].text,c=j&&b[e])if(c>0){if(i.length>c)if(a[e+1]=1,F)i=i.substring(0,c);else continue;(c-=i.length)||(c=-1),b[e]=c}else{a[e+1]=1;continue}if(h+i.length+1<=u)i=" "+i,m[e]+=i;else if(F)_=u-h-1,_>0&&(i=" "+i.substring(0,_),m[e]+=i),a[e+1]=1;else{a[e+1]=1;continue}}else{if(a[e])continue;if(n-=w,O[n]){h-=g,a[e]=1,l[e]=1;continue}if(n<=0){if(n<0){a[e]=1,l[e]=1;continue}h-=g}if(i=r[n].text,c=y&&f[e])if(c>0){if(i.length>c)if(a[e]=1,F)i=i.substring(i.length-c);else continue;(c-=i.length)||(c=-1),f[e]=c}else{a[e]=1;continue}if(h+i.length+1<=u)i+=" ",m[e]=i+m[e];else if(F)_=i.length+1-(u-h),_>=0&&_<i.length&&(i=i.substring(_)+" ",m[e]=i+m[e]),a[e]=1;else{a[e]=1;continue}}else{i=r[n].match,y&&(f[e]=y),j&&(b[e]=j),e&&h++;let t;if(n?!e&&g&&(h+=g):(l[e]=1,a[e]=1),n>=d.length-1?t=1:n<r.length-1&&r[n+1].match?t=1:g&&(h+=g),h-=S.length-2,!e||h+i.length<=u)m[e]=i;else{_=C=E=l[e]=0;break}t&&(l[e+1]=1,a[e+1]=1)}h+=i.length,_=O[n]=1}if(_)w===p?p++:w++;else{if(w===p?C=0:E=0,!C&&!E)break;C?(w++,p=w):p++}}i="";for(let e=0,t;e<m.length;e++)t=(l[e]?e?" ":"":(e&&!o?" ":"")+o)+m[e],i+=t;o&&!l[m.length]&&(i+=o)}z&&(i=i.replace(z," ")),L[e].highlight=i}if(s)break}return t}function s(e,t){if(!this||this.constructor!==s)return new s(e,t);let o=0,i,a,r,n,c,l;if(e&&e.index){const s=e;if(t=s.index,o=s.boost||0,a=s.query){r=s.field||s.pluck,n=s.highlight;const o=s.resolve;e=s.async||s.queue,s.resolve=!1,s.highlight="",s.index=null,e=e?t.searchAsync(s):t.search(s),s.resolve=o,s.highlight=n,s.index=t,e=e.result||e}else e=[]}if(e&&e.then){const t=this;e=e.then(function(e){t.C[0]=t.result=e.result||e,te(t)}),i=[e],e=[],c=new Promise(function(e){l=e})}this.index=t||null,this.result=e||[],this.h=o,this.C=i||[],this.await=c||null,this.return=l||null,this.highlight=n||null,this.query=a||"",this.field=r||""}n=s.prototype,n.limit=function(e){if(this.await){const t=this;this.C.push(function(){return t.limit(e).result})}else if(this.result.length){const t=[];for(let n=0,s;n<this.result.length;n++)if(s=this.result[n])if(s.length<=e){if(t[n]=s,e-=s.length,!e)break}else{t[n]=s.slice(0,e);break}this.result=t}return this},n.offset=function(e){if(this.await){const t=this;this.C.push(function(){return t.offset(e).result})}else if(this.result.length){const t=[];for(let n=0,s;n<this.result.length;n++)(s=this.result[n])&&(s.length<=e?e-=s.length:(t[n]=s.slice(e),e=0));this.result=t}return this},n.boost=function(e){if(this.await){const t=this;this.C.push(function(){return t.boost(e).result})}else this.h+=e;return this};function te(e,t){let n=e.result;var s=e.await;e.await=null;for(let t=0,o;t<e.C.length;t++)if(o=e.C[t])if(typeof o=="function")n=o(),e.C[t]=n=n.result||n,t--;else if(o.h)n=o.h(),e.C[t]=n=n.result||n,t--;else if(o.then)return e.await=s;return s=e.return,e.C=[],e.return=null,t||s(n),n}n.resolve=function(e,t,n,s,o){let i=this.await?te(this,!0):this.result;if(i.then){const a=this;return i.then(function(){return a.resolve(e,t,n,s,o)})}return i.length&&(typeof e=="object"?(s=e.highlight||this.highlight,n=!!s||e.enrich,t=e.offset,e=e.limit):(s=s||this.highlight,n=!!s||n),i=o?n?j.call(this.index,i):i:K.call(this.index,i,e||100,t,n)),this.finalize(i,s)},n.finalize=function(e,t){if(e.then){const n=this;return e.then(function(e){return n.finalize(e,t)})}t&&e.length&&this.query&&(e=D(this.query,e,this.index.index,this.field,t));const n=this.return;return this.highlight=this.index=this.result=this.C=this.await=this.return=null,this.query=this.field="",n&&n(e),e};function S(e,t,n,s,i,a,r){const u=e.length;let c=[],d,l;d=o();for(let h=0,f,m,p,o;h<t;h++)for(let t=0;t<u;t++)if(p=e[t],h<p.length&&(f=p[h]))for(let e=0;e<f.length;e++){if(m=f[e],(l=d[m])?d[m]++:(l=0,d[m]=1),o=c[l]||(c[l]=[]),!r){let e=h+(t||!i?0:a||0);o=o[e]||(o[e]=[])}if(o.push(m),r&&n&&l===u-1&&o.length-s===n)return s?o.slice(s):o}if(e=c.length)if(i)c=c.length>1?he(c,n,s,r,a):(c=c[0])&&n&&c.length>n||s?c.slice(s,n+s):c;else{if(e<u)return[];if(c=c[e-1],n||s)if(r)(c.length>n||s)&&(c=c.slice(s,n+s));else{i=[];for(let t=0,e;t<c.length;t++)if(e=c[t])if(s&&e.length>s)s-=e.length;else if((n&&e.length>n||s)&&(e=e.slice(s,n+s),n-=e.length,s&&(s-=e.length)),i.push(e),!n)break;c=i}}return c}function he(e,t,n,s,i){const r=[],l=o();let a;var c=e.length;let d;if(s){for(i=c-1;i>=0;i--)if(d=(s=e[i])&&s.length)for(c=0;c<d;c++)if(a=s[c],!l[a])if(l[a]=1,n)n--;else if(r.push(a),r.length===t)return r}else for(let o=c-1,u,h=0;o>=0;o--){u=e[o];for(let e=0;e<u.length;e++)if(d=(s=u[e])&&s.length)for(let u=0;u<d;u++)if(a=s[u],!l[a])if(l[a]=1,n)n--;else{let n=(e+(o<c-1?i||0:0))/(o+1)|0;if((r[n]||(r[n]=[])).push(a),++h===t)return r}}return r}function Re(e,t,n,s,i){const a=o(),r=[];for(let e=0,n;e<t.length;e++){n=t[e];for(let e=0;e<n.length;e++)a[n[e]]=1}if(i){for(let o=0,t;o<e.length;o++)if(t=e[o],a[t])if(s)s--;else if(r.push(t),a[t]=0,n&&--n===0)break}else{e=e.result||e;for(let n=0,o,s;n<e.length;n++)for(o=e[n],t=0;t<o.length;t++)s=o[t],a[s]&&((r[n]||(r[n]=[])).push(s),a[s]=0)}return r}o(),g.prototype.search=function(e,t,n,o){n||(!t&&E(e)?(n=e,e=""):E(t)&&(n=t,t=0));let a=[];var i,l,d,h,m,f,w,b=[];let v,k,g,C,O,c,x=0,u=!0,p;if(n){if(n.constructor===Array&&(n={index:n}),e=n.query||e,v=n.pluck,k=n.merge,C=n.boost,c=v||n.field||(c=n.index)&&(c.index?null:c),i=this.tag&&n.tag,g=n.suggest,u=n.resolve!==!1,O=n.cache,p=u&&this.store&&n.highlight,f=!!p||u&&this.store&&n.enrich,t=n.limit||t,m=n.offset||0,t||(t=u?100:0),i&&(!this.db||!o)){i.constructor!==Array&&(i=[i]),d=[];for(let t=0,e;t<i.length;t++)if(e=i[t],e.field&&e.tag)if(l=e.tag,l.constructor===Array)for(h=0;h<l.length;h++)d.push(e.field,l[h]);else d.push(e.field,l);else{l=Object.keys(e);for(let s=0,n,t;s<l.length;s++)if(n=l[s],t=e[n],t.constructor===Array)for(h=0;h<t.length;h++)d.push(n,t[h]);else d.push(n,t)}if(i=d,!e){if(b=[],d.length)for(i=0;i<d.length;i+=2){if(this.db){if(o=this.index.get(d[i]),!o)continue;b.push(o=o.db.tag(d[i+1],t,m,f))}else o=xe.call(this,d[i],d[i+1],t,m,f);a.push(u?{field:d[i],tag:d[i+1],result:o}:[o])}if(b.length){const e=this;return Promise.all(b).then(function(t){for(let e=0;e<t.length;e++)u?a[e].result=t[e]:a[e]=t[e];return u?a:new s(a.length>1?S(a,1,0,0,g,C):a[0],e)})}return u?a:new s(a.length>1?S(a,1,0,0,g,C):a[0],this)}}u||v||!(c=c||this.field)||(r(c)?v=c:(c.constructor===Array&&c.length===1&&(c=c[0]),v=c.field||c.index)),c&&c.constructor!==Array&&(c=[c])}c||(c=this.field);let y;d=(this.worker||this.db)&&!o&&[];for(let C=0,v,E,k;C<c.length;C++){if(E=c[C],this.db&&this.tag&&!this.B[C])continue;let j;if(r(E)||(j=E,E=j.field,e=j.query||e,t=_(j.limit,t),m=_(j.offset,m),g=_(j.suggest,g),p=u&&this.store&&_(j.highlight,p),f=!!p||u&&this.store&&_(j.enrich,f),O=_(j.cache,O)),o)v=o[C];else if(l=j||n||{},h=l.enrich,w=this.index.get(E),i&&(this.db&&(l.tag=i,l.field=c,y=w.db.support_tag_search),!y&&h&&(l.enrich=!1),y||(l.limit=0,l.offset=0)),v=O?w.searchCache(e,i&&!y?0:t,l):w.search(e,i&&!y?0:t,l),i&&!y&&(l.limit=t,l.offset=m),h&&(l.enrich=h),d){d[C]=v;continue}if(k=(v=v.result||v)&&v.length,i&&k){if(l=[],h=0,this.db&&o){if(!y)for(w=c.length;w<o.length;w++){let e=o[w];if(e&&e.length)h++,l.push(e);else if(!g)return u?a:new s(a,this)}}else for(let t=0,e,n;t<i.length;t+=2){if(e=this.tag.get(i[t]),!e)if(g)continue;else return u?a:new s(a,this);if(n=(e=e&&e.get(i[t+1]))&&e.length)h++,l.push(e);else if(!g)return u?a:new s(a,this)}if(h){if(v=Re(v,l,t,m,u),k=v.length,!k&&!g)return u?v:new s(v,this);h--}}if(k)b[x]=E,a.push(v),x++;else if(c.length===1)return u?a:new s(a,this)}if(d){if(this.db&&i&&i.length&&!y)for(f=0;f<i.length;f+=2){if(b=this.index.get(i[f]),!b)if(g)continue;else return u?a:new s(a,this);d.push(b.db.tag(i[f+1],t,m,!1))}const o=this;return Promise.all(d).then(function(s){return n&&(n.resolve=u),s.length&&(s=o.search(e,t,n,s)),s})}if(!x)return u?a:new s(a,this);if(v&&(!f||!this.store))return a=a[0],u?a:new s(a,this);d=[];for(m=0;m<b.length;m++){if(i=a[m],f&&i.length&&typeof i[0].doc=="undefined"&&(this.db?d.push(i=this.index.get(this.field[0]).db.enrich(i)):i=j.call(this,i)),v)return u?p?D(e,i,this.index,v,p):i:new s(i,this);a[m]={field:b[m],result:i}}if(f&&this.db&&d.length){const t=this;return Promise.all(d).then(function(n){for(let e=0;e<n.length;e++)a[e].result=n[e];return p&&(a=D(e,a,t.index,v,p)),k?ie(a):a})}return p&&(a=D(e,a,this.index,v,p)),k?ie(a):a};function ie(e){const t=[],n=o(),s=o();for(let c=0,l,r,d,a,o,i,u;c<e.length;c++){l=e[c],r=l.field,d=l.result;for(let e=0;e<d.length;e++)(o=d[e],typeof o!="object"?o={id:a=o}:a=o.id,(i=n[a])?i.push(r):(o.field=n[a]=[r],t.push(o)),u=o.highlight)&&(i=s[a],i||(s[a]=i={},o.highlight=i),i[r]=u)}return t}function xe(e,t,n,s,o){return e=this.tag.get(e),e?(e=e.get(t),e?(t=e.length-s,t>0&&((n&&t>n||s)&&(e=e.slice(s,s+n)),o&&(e=j.call(this,e))),e):[]):[]}function j(e){if(!this||!this.store)return e;if(this.db)return this.index.get(this.field[0]).db.enrich(e);const t=Array(e.length);for(let n=0,s;n<e.length;n++)s=e[n],t[n]={id:s,doc:this.store.get(s)};return t}function g(e){if(!this||this.constructor!==g)return new g(e);const s=e.document||e.doc||e;let t,n;if(this.B=[],this.field=[],this.D=[],this.key=(t=s.key||s.id)&&H(t,this.D)||"id",(n=e.keystore||0)&&(this.keystore=n),this.fastupdate=!!e.fastupdate,this.reg=!this.fastupdate||e.worker||e.db?n?new a(n):new Set:n?new l(n):new Map,this.h=(t=s.store||null)&&t&&t!==!0&&[],this.store=t?n?new l(n):new Map:null,this.cache=(t=e.cache||null)&&new b(t),e.cache=!1,this.worker=e.worker,this.priority=e.priority||4,this.index=Oe.call(this,e,s),this.tag=null,(t=s.tag)&&(typeof t=="string"&&(t=[t]),t.length)){this.tag=new Map,this.A=[],this.F=[];for(let e=0,n,s;e<t.length;e++){if(n=t[e],s=n.field||n,!s)throw Error("The tag field from the document descriptor is undefined.");n.custom?this.A[e]=n.custom:(this.A[e]=H(s,this.D),n.filter&&(typeof this.A[e]=="string"&&(this.A[e]=new String(this.A[e])),this.A[e].G=n.filter)),this.F[e]=s,this.tag.set(s,new Map)}}if(this.worker){{this.fastupdate=!1,e=[];for(const t of this.index.values())t.then&&e.push(t);if(e.length){const t=this;return Promise.all(e).then(function(e){let n=0;for(const o of t.index.entries()){const i=o[0];let s=o[1];s.then&&(s=e[n],t.index.set(i,s),n++)}return t})}}}else e.db&&(this.fastupdate=!1,this.mount(e.db))}n=g.prototype,n.mount=function(e){let t=this.field;if(this.tag)for(let s=0,e;s<this.F.length;s++){e=this.F[s];var n=0[0];this.index.set(e,n=new c({},this.reg)),t===this.field&&(t=t.slice(0)),t.push(e),n.tag=this.tag.get(e)}n=[];const s={db:e.db,type:e.type,fastupdate:e.fastupdate};for(let o=0,i,a;o<t.length;o++){s.field=a=t[o],i=this.index.get(a);const r=new e.constructor(e.id,s);r.id=e.id,n[o]=r.mount(i),i.document=!0,o?i.bypass=!0:i.store=this.store}const o=this;return this.db=Promise.all(n).then(function(){o.db=!0})},n.commit=async function(){const e=[];for(const t of this.index.values())e.push(t.commit());await Promise.all(e),this.reg.clear()},n.destroy=function(){const e=[];for(const t of this.index.values())e.push(t.destroy());return Promise.all(e)};function Oe(e,t){const o=new Map;let s=t.index||t.field||t;r(s)&&(s=[s]);for(let i=0,a,t;i<s.length;i++){if(a=s[i],r(a)||(t=a,a=a.field),t=E(t)?Object.assign({},e,t):e,this.worker){var n=0[0],n=(n=t.encoder)&&n.encode?n:new O(typeof n=="string"?B[n]:n||{}),n=new p(t,n);o.set(a,n)}this.worker||o.set(a,new c(t,this.reg)),t.custom?this.B[i]=t.custom:(this.B[i]=H(a,this.D),t.filter&&(typeof this.B[i]=="string"&&(this.B[i]=new String(this.B[i])),this.B[i].G=t.filter)),this.field[i]=a}if(this.h){e=t.store,r(e)&&(e=[e]);for(let t=0,n,s;t<e.length;t++)n=e[t],s=n.field||n,n.custom?(this.h[t]=n.custom,n.custom.O=s):(this.h[t]=H(s,this.D),n.filter&&(typeof this.h[t]=="string"&&(this.h[t]=new String(this.h[t])),this.h[t].G=n.filter))}return o}function H(e,t){const n=e.split(":");let s=0;for(let o=0;o<n.length;o++)e=n[o],e[e.length-1]==="]"&&(e=e.substring(0,e.length-2))&&(t[s]=!0),e&&(n[s++]=e);return s<n.length&&(n.length=s),s>1?n:n[0]}n.append=function(e,t){return this.add(e,t,!0)},n.update=function(e,t){return this.remove(e).add(e,t)},n.remove=function(e){E(e)&&(e=k(e,this.key));for(var t of this.index.values())t.remove(e,!0);if(this.reg.has(e)){if(this.tag&&!this.fastupdate)for(let n of this.tag.values())for(let o of n){t=o[0];const s=o[1],i=s.indexOf(e);i>-1&&(s.length>1?s.splice(i,1):n.delete(t))}this.store&&this.store.delete(e),this.reg.delete(e)}return this.cache&&this.cache.remove(e),this},n.clear=function(){const e=[];for(const n of this.index.values()){const t=n.clear();t.then&&e.push(t)}if(this.tag)for(const e of this.tag.values())e.clear();return this.store&&this.store.clear(),this.cache&&this.cache.clear(),e.length?Promise.all(e):this},n.contain=function(e){return this.db?this.index.get(this.field[0]).db.has(e):this.reg.has(e)},n.cleanup=function(){for(const e of this.index.values())e.cleanup();return this},n.get=function(e){return this.db?this.index.get(this.field[0]).db.enrich(e).then(function(e){return e[0]&&e[0].doc||null}):this.store.get(e)||null},n.set=function(e,t){return typeof e=="object"&&(t=e,e=k(t,this.key)),this.store.set(e,t),this},n.searchCache=X,n.export=Ee,n.import=Ce,J(g.prototype);function V(e,t=0){let s=[],n=[];t&&(t=25e4/t*5e3|0);for(const o of e.entries())n.push(o),n.length===t&&(s.push(n),n=[]);return n.length&&s.push(n),s}function ee(e,t){t||(t=new Map);for(let n=0,s;n<e.length;n++)s=e[n],t.set(s[0],s[1]);return t}function me(e,t=0){let s=[],n=[];t&&(t=25e4/t*1e3|0);for(const o of e.entries())n.push([o[0],V(o[1])[0]||[]]),n.length===t&&(s.push(n),n=[]);return n.length&&s.push(n),s}function ne(e,t){t||(t=new Map);for(let s=0,n,o;s<e.length;s++)n=e[s],o=t.get(n[0]),t.set(n[0],ee(n[1],o));return t}function pe(e){let n=[],t=[];for(const s of e.keys())t.push(s),t.length===25e4&&(n.push(t),t=[]);return t.length&&n.push(t),n}function ge(e,t){t||(t=new Set);for(let n=0;n<e.length;n++)t.add(e[n]);return t}function I(e,t,n,s,o,i,a=0){const c=s&&s.constructor===Array;var r=c?s.shift():s;if(!r)return this.export(e,t,o,i+1);if((r=e((t?t+".":"")+(a+1)+"."+n,JSON.stringify(r)))&&r.then){const l=this;return r.then(function(){return I.call(l,e,t,n,c?s:null,o,i,a+1)})}return I.call(this,e,t,n,c?s:null,o,i,a+1)}function Ee(e,t,n=0,s=0){if(n<this.field.length){const o=this.field[n];if((t=this.index.get(o).export(e,o,n,s=1))&&t.then){const s=this;return t.then(function(){return s.export(e,o,n+1)})}return this.export(e,o,n+1)}let o,i;switch(s){case 0:o="reg",i=pe(this.reg),t=null;break;case 1:o="tag",i=this.tag&&me(this.tag,this.reg.size),t=null;break;case 2:o="doc",i=this.store&&V(this.store),t=null;break;default:return}return I.call(this,e,t,o,i||null,n,s)}function Ce(e,t){var n=e.split(".");n[n.length-1]==="json"&&n.pop();const s=n.length>2?n[0]:"";if(n=n.length>2?n[2]:n[1],this.worker&&s)return this.index.get(s).import(e);if(t){if(typeof t=="string"&&(t=JSON.parse(t)),s)return this.index.get(s).import(n,t);switch(n){case"reg":this.fastupdate=!1,this.reg=ge(t,this.reg);for(let e=0,t;e<this.field.length;e++)t=this.index.get(this.field[e]),t.fastupdate=!1,t.reg=this.reg;if(this.worker){t=[];for(const n of this.index.values())t.push(n.import(e));return Promise.all(t)}break;case"tag":this.tag=ne(t,this.tag);break;case"doc":this.store=ee(t,this.store)}}}function ye(e,t){let n="";for(const o of e.entries()){e=o[0];const i=o[1];let s="";for(let o=0,n;o<i.length;o++){n=i[o]||[""];let e="";for(let s=0;s<n.length;s++)e+=(e?",":"")+(t==="string"?'"'+n[s]+'"':n[s]);e="["+e+"]",s+=(s?",":"")+e}s='["'+e+'",['+s+"]]",n+=(n?",":"")+s}return n}c.prototype.remove=function(e,t){const n=this.reg.size&&(this.fastupdate?this.reg.get(e):this.reg.has(e));if(n){if(this.fastupdate){for(let s=0,t,o;s<n.length;s++)if((t=n[s])&&(o=t.length))if(t[o-1]===e)t.pop();else{const n=t.indexOf(e);n>=0&&t.splice(n,1)}}else C(this.map,e),this.depth&&C(this.ctx,e);t||this.reg.delete(e)}return this.db&&(this.commit_task.push({del:e}),this.M&&se(this)),this.cache&&this.cache.remove(e),this};function C(e,t){let n=0;var s=typeof t=="undefined";if(e.constructor===Array){for(let i=0,o,a,r;i<e.length;i++)if((o=e[i])&&o.length){if(s)return 1;if(a=o.indexOf(t),a>=0){if(o.length>1)return o.splice(a,1),1;if(delete e[i],n)return 1;r=1}else{if(r)return 1;n++}}}else for(let o of e.entries())s=o[0],C(o[1],t)?n++:e.delete(s);return n}const Fe={memory:{resolution:1},performance:{resolution:3,fastupdate:!0,context:{depth:1,resolution:1}},match:{tokenize:"full"},score:{resolution:9,context:{depth:2,resolution:3}}};c.prototype.add=function(e,t,n,s){if(t&&(e||e===0)){if(!s&&!n&&this.reg.has(e))return this.update(e,t);s=this.depth,t=this.encoder.encode(t,!s);const u=t.length;if(u){const f=o(),h=o(),m=this.resolution;for(let p=0;p<u;p++){let o=t[this.rtl?u-1-p:p];if(a=o.length,a&&(s||!h[o])){var i,a,l,c=this.score?this.score(t,o,p,null,0):P(m,u,p),r="";switch(this.tokenize){case"tolerant":if(d(this,h,o,c,e,n),a>2){for(let t=1,l,u,s,i;t<a-1;t++)l=o.charAt(t),u=o.charAt(t+1),s=o.substring(0,t)+u,i=o.substring(t+2),r=s+l+i,d(this,h,r,c,e,n),r=s+i,d(this,h,r,c,e,n);d(this,h,o.substring(0,o.length-1),c,e,n)}break;case"full":if(a>2){for(let s=0,l;s<a;s++)for(c=a;c>s;c--)r=o.substring(s,c),l=this.rtl?a-1-s:s,i=this.score?this.score(t,o,p,r,l):P(m,u,p,a,l),d(this,h,r,i,e,n);break}case"bidirectional":case"reverse":if(a>1){for(i=a-1;i>0;i--)r=o[this.rtl?a-1-i:i]+r,l=this.score?this.score(t,o,p,r,i):P(m,u,p,a,i),d(this,h,r,l,e,n);r=""}case"forward":if(a>1){for(i=0;i<a;i++)r+=o[this.rtl?a-1-i:i],d(this,h,r,c,e,n);break}default:if(d(this,h,o,c,e,n),s&&u>1&&p<u-1)for(a=this.N,r=o,c=Math.min(s+1,this.rtl?p+1:u-p),i=1;i<c;i++){o=t[this.rtl?u-1-p-i:p+i],l=this.bidirectional&&o>r;const h=this.score?this.score(t,r,p,o,i-1):P(a+(u/2>a?0:1),u,p,c-1,i-1);d(this,f,l?r:o,h,e,n,l?o:r)}}}}this.fastupdate||this.reg.add(e)}}return this.db&&(this.commit_task.push(n?{ins:e}:{del:e}),this.M&&se(this)),this};function d(e,t,n,s,i,a,r){let d,c;if(!(d=t[n])||r&&!d[r]){if(r?(t=d||(t[n]=o()),t[r]=1,c=e.ctx,(d=c.get(r))?c=d:c.set(r,c=e.keystore?new l(e.keystore):new Map)):(c=e.map,t[n]=1),(d=c.get(n))?c=d:c.set(n,c=d=[]),a)for(let o=0,n;o<d.length;o++)if((n=d[o])&&n.includes(i)){if(o<=s)return;n.splice(n.indexOf(i),1),e.fastupdate&&(t=e.reg.get(i))&&t.splice(t.indexOf(n),1);break}if(c=c[s]||(c[s]=[]),c.push(i),c.length===2**31-1){if(t=new x(c),e.fastupdate)for(let n of e.reg.values())n.includes(c)&&(n[n.indexOf(c)]=t);d[s]=c=t}e.fastupdate&&((s=e.reg.get(i))?s.push(c):e.reg.set(i,[c]))}}function P(e,t,n,s,o){return n&&e>1?t+(s||0)<=e?n+(o||0):(e-1)/(t+(s||0))*(n+(o||0))+1|0:0}c.prototype.search=function(e,t,n){if(n||(t||typeof e!="object"?typeof t=="object"&&(n=t,t=0):(n=e,e="")),n&&n.cache)return n.cache=!1,e=this.searchCache(e,t,n),n.cache=!0,e;let r=[],u,m,i,f=0,l,p,v,c,g;n&&(e=n.query||e,t=n.limit||t,f=n.offset||0,m=n.context,i=n.suggest,g=(l=n.resolve)&&n.enrich,v=n.boost,c=n.resolution,p=this.db&&n.tag),typeof l=="undefined"&&(l=this.resolve),m=this.depth&&m!==!1;let d=this.encoder.encode(e,!m);if(u=d.length,t=t||(l?100:0),u===1)return be.call(this,d[0],"",t,f,l,g,p);if(u===2&&m&&!i)return be.call(this,d[1],d[0],t,f,l,g,p);let h=o(),a=0,s;if(m&&(s=d[0],a=1),c||c===0||(c=s?this.N:this.resolution),this.db){if(this.db.search&&(n=this.db.search(this,d,t,f,i,l,g,p),n!==!1))return n;const e=this;return async function(){for(let t,n;a<u;a++){if((n=d[a])&&!h[n]){if(h[n]=1,t=await Q(e,n,s,0,0,!1,!1),t=fe(t,r,i,c)){r=t;break}s&&(i&&t&&r.length||(s=n))}i&&s&&a===u-1&&!r.length&&(c=e.resolution,s="",a=-1,h=o())}return je(r,c,t,f,i,v,l)}()}for(let e,t;a<u;a++){if((t=d[a])&&!h[t]){if(h[t]=1,e=Q(this,t,s,0,0,!1,!1),e=fe(e,r,i,c)){r=e;break}s&&(i&&e&&r.length||(s=t))}i&&s&&a===u-1&&!r.length&&(c=this.resolution,s="",a=-1,h=o())}return je(r,c,t,f,i,v,l)};function je(e,t,n,o,i,a,r){let l=e.length,c=e;if(l>1)c=S(e,t,n,o,i,a,r);else if(l===1)return r?K.call(null,e[0],n,o):new s(e[0],this);return r?c:new s(c,this)}function be(e,t,n,o,i,a,r){return e=Q(this,e,t,n,o,i,a,r),this.db?e.then(function(e){return i?e||[]:new s(e,this)}):e&&e.length?i?K.call(this,e,n,o):new s(e,this):i?[]:new s([],this)}function fe(e,t,n,s){let o=[];if(e&&e.length){if(e.length<=s){t.push(e);return}for(let t=0,n;t<s;t++)(n=e[t])&&(o[t]=n);if(o.length){t.push(o);return}}if(!n)return o}function Q(e,t,n,s,o,i,a,r){let c;return n&&(c=e.bidirectional&&t>n)&&(c=n,n=t,t=c),e.db?e.db.get(t,n,s,o,i,a,r):(e=n?(e=e.ctx.get(n))&&e.get(t):e.map.get(t),e)}function c(e,t){if(!this||this.constructor!==c)return new c(e);if(e){var n=r(e)?e:e.preset;n&&(e=Object.assign({},Fe[n],e))}else e={};n=e.context;const o=n===!0?{depth:1}:n||{},s=r(e.encoder)?B[e.encoder]:e.encode||e.encoder||{};this.encoder=s.encode?s:typeof s=="object"?new O(s):{encode:s},this.resolution=e.resolution||9,this.tokenize=n=(n=e.tokenize)&&n!=="default"&&n!=="exact"&&n||"strict",this.depth=n==="strict"&&o.depth||0,this.bidirectional=o.bidirectional!==!1,this.fastupdate=!!e.fastupdate,this.score=e.score||null,(n=e.keystore||0)&&(this.keystore=n),this.map=n?new l(n):new Map,this.ctx=n?new l(n):new Map,this.reg=t||(this.fastupdate?n?new l(n):new Map:n?new a(n):new Set),this.N=o.resolution||3,this.rtl=s.rtl||e.rtl,this.cache=(n=e.cache||null)&&new b(n),this.resolve=e.resolve!==!1,(n=e.db)&&(this.db=this.mount(n)),this.M=e.commit!==!1,this.commit_task=[],this.commit_timer=null,this.priority=e.priority||4}n=c.prototype,n.mount=function(e){return this.commit_timer&&(clearTimeout(this.commit_timer),this.commit_timer=null),e.mount(this)},n.commit=function(){return this.commit_timer&&(clearTimeout(this.commit_timer),this.commit_timer=null),this.db.commit(this)},n.destroy=function(){return this.commit_timer&&(clearTimeout(this.commit_timer),this.commit_timer=null),this.db.destroy()};function se(e){e.commit_timer||(e.commit_timer=setTimeout(function(){e.commit_timer=null,e.db.commit(e)},1))}n.clear=function(){return this.map.clear(),this.ctx.clear(),this.reg.clear(),this.cache&&this.cache.clear(),this.db?(this.commit_timer&&clearTimeout(this.commit_timer),this.commit_timer=null,this.commit_task=[],this.db.clear()):this},n.append=function(e,t){return this.add(e,t,!0)},n.contain=function(e){return this.db?this.db.has(e):this.reg.has(e)},n.update=function(e,t){const s=this,n=this.remove(e);return n&&n.then?n.then(()=>s.add(e,t)):this.add(e,t)},n.cleanup=function(){return this.fastupdate?(C(this.map),this.depth&&C(this.ctx),this):this},n.searchCache=X,n.export=function(e,t,n=0,s=0){let o,i;switch(s){case 0:o="reg",i=pe(this.reg);break;case 1:o="cfg",i=null;break;case 2:o="map",i=V(this.map,this.reg.size);break;case 3:o="ctx",i=me(this.ctx,this.reg.size);break;default:return}return I.call(this,e,t,o,i,n,s)},n.import=function(e,t){if(t)switch(typeof t=="string"&&(t=JSON.parse(t)),e=e.split("."),e[e.length-1]==="json"&&e.pop(),e.length===3&&e.shift(),e=e.length>1?e[1]:e[0],e){case"reg":this.fastupdate=!1,this.reg=ge(t,this.reg);break;case"map":this.map=ee(t,this.map);break;case"ctx":this.ctx=ne(t,this.ctx)}},n.serialize=function(e=!0){let t="",s="",n="";if(this.reg.size){let e;for(var o of this.reg.keys())e||(e=typeof o),t+=(t?",":"")+(e==="string"?'"'+o+'"':o);t="index.reg=new Set(["+t+"]);",s=ye(this.map,e),s="index.map=new Map(["+s+"]);";for(const s of this.ctx.entries()){o=s[0];let t=ye(s[1],e);t="new Map(["+t+"])",t='["'+o+'",'+t+"]",n+=(n?",":"")+t}n="index.ctx=new Map(["+n+"]);"}return e?"function inject(index){"+t+s+n+"}":t+s+n},J(c.prototype);const le=typeof window!="undefined"&&(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB),z=["map","ctx","tag","reg","cfg"],f=o();function T(e,t={}){if(!this||this.constructor!==T)return new T(e,t);typeof e=="object"&&(t=e,e=e.name),e||console.info("Default storage space was used, because a name was not passed."),this.id="flexsearch"+(e?":"+e.toLowerCase().replace(/[^a-z0-9_-]/g,""):""),this.field=t.field?t.field.toLowerCase().replace(/[^a-z0-9_-]/g,""):"",this.type=t.type,this.fastupdate=this.support_tag_search=!1,this.db=null,this.h={}}n=T.prototype,n.mount=function(e){return e.index?e.mount(this):(e.db=this,this.open())},n.open=function(){if(this.db)return this.db;let e=this;navigator.storage&&navigator.storage.persist&&navigator.storage.persist(),f[e.id]||(f[e.id]=[]),f[e.id].push(e.field);const t=le.open(e.id,1);return t.onupgradeneeded=function(){const t=e.db=this.result;for(let s=0,n;s<z.length;s++){n=z[s];for(let o=0,s;o<f[e.id].length;o++)s=f[e.id][o],t.objectStoreNames.contains(n+(n!=="reg"?s?":"+s:"":""))||t.createObjectStore(n+(n!=="reg"?s?":"+s:"":""))}},e.db=u(t,function(t){e.db=t,e.db.onversionchange=function(){e.close()}})},n.close=function(){this.db&&this.db.close(),this.db=null},n.destroy=function(){const e=le.deleteDatabase(this.id);return u(e)},n.clear=function(){const e=[];for(let t=0,n;t<z.length;t++){n=z[t];for(let t=0,s;t<f[this.id].length;t++)s=f[this.id][t],e.push(n+(n!=="reg"?s?":"+s:"":""))}const t=this.db.transaction(e,"readwrite");for(let n=0;n<e.length;n++)t.objectStore(e[n]).clear();return u(t)},n.get=function(e,t,n=0,s=0,o=!0,i=!1){e=this.db.transaction((t?"ctx":"map")+(this.field?":"+this.field:""),"readonly").objectStore((t?"ctx":"map")+(this.field?":"+this.field:"")).get(t?t+":"+e:e);const a=this;return u(e).then(function(e){let t=[];if(!e||!e.length)return t;if(o){if(!n&&!s&&e.length===1)return e[0];for(let i=0,o;i<e.length;i++)if((o=e[i])&&o.length){if(s>=o.length){s-=o.length;continue}const e=n?s+Math.min(o.length-s,n):o.length;for(let n=s;n<e;n++)t.push(o[n]);if(s=0,t.length===n)break}return i?a.enrich(t):t}return e})},n.tag=function(e,t=0,n=0,s=!1){e=this.db.transaction("tag"+(this.field?":"+this.field:""),"readonly").objectStore("tag"+(this.field?":"+this.field:"")).get(e);const o=this;return u(e).then(function(e){return!e||!e.length||n>=e.length?[]:!t&&!n?e:(e=e.slice(n,n+t),s?o.enrich(e):e)})},n.enrich=function(e){typeof e!="object"&&(e=[e]);const n=this.db.transaction("reg","readonly").objectStore("reg"),t=[];for(let s=0;s<e.length;s++)t[s]=u(n.get(e[s]));return Promise.all(t).then(function(t){for(let n=0;n<t.length;n++)t[n]={id:e[n],doc:t[n]?JSON.parse(t[n]):null};return t})},n.has=function(e){return e=this.db.transaction("reg","readonly").objectStore("reg").getKey(e),u(e).then(function(e){return!!e})},n.search=null,n.info=function(){},n.transaction=function(e,t,n){e+=e!=="reg"?this.field?":"+this.field:"":"";let s=this.h[e+":"+t];if(s)return n.call(this,s);let o=this.db.transaction(e,t);this.h[e+":"+t]=s=o.objectStore(e);const i=n.call(this,s);return this.h[e+":"+t]=null,u(o).finally(function(){return i})},n.commit=async function(e){let n=e.commit_task,t=[];e.commit_task=[];for(let e=0,s;e<n.length;e++)s=n[e],s.del&&t.push(s.del);t.length&&await this.remove(t),e.reg.size&&(await this.transaction("map","readwrite",function(t){for(const s of e.map){const o=s[0],n=s[1];n.length&&(t.get(o).onsuccess=function(){let e=this.result;var s;if(e&&e.length){{const t=Math.max(e.length,n.length);for(let o=0,a,i;o<t;o++)if((i=n[o])&&i.length){if((a=e[o])&&a.length)for(s=0;s<i.length;s++)a.push(i[s]);else e[o]=i;s=1}}}else e=n,s=1;s&&t.put(e,o)})}}),await this.transaction("ctx","readwrite",function(t){for(const n of e.ctx){const s=n[0],o=n[1];for(const n of o){const i=n[0],e=n[1];e.length&&(t.get(s+":"+i).onsuccess=function(){let n=this.result;var o;if(n&&n.length){{const t=Math.max(n.length,e.length);for(let s=0,a,i;s<t;s++)if((i=e[s])&&i.length){if((a=n[s])&&a.length)for(o=0;o<i.length;o++)a.push(i[o]);else n[s]=i;o=1}}}else n=e,o=1;o&&t.put(n,s+":"+i)})}}}),e.store?await this.transaction("reg","readwrite",function(t){for(const n of e.store){const o=n[0],s=n[1];t.put(typeof s=="object"?JSON.stringify(s):1,o)}}):e.bypass||await this.transaction("reg","readwrite",function(t){for(const n of e.reg.keys())t.put(1,n)}),e.tag&&await this.transaction("tag","readwrite",function(t){for(const s of e.tag){const o=s[0],n=s[1];n.length&&(t.get(o).onsuccess=function(){let e=this.result;e=e&&e.length?e.concat(n):n,t.put(e,o)})}}),e.map.clear(),e.ctx.clear(),e.tag&&e.tag.clear(),e.store&&e.store.clear(),e.document||e.reg.clear())};function G(e,t,n){const s=e.value;let o,i=0;for(let a=0,e;a<s.length;a++){if(e=n?s:s[a]){for(let n=0,i,r;n<t.length;n++)if(r=t[n],i=e.indexOf(r),i>=0)if(o=1,e.length>1)e.splice(i,1);else{s[a]=[];break}i+=e.length}if(n)break}i?o&&e.update(s):e.delete(),e.continue()}n.remove=function(e){return typeof e!="object"&&(e=[e]),Promise.all([this.transaction("map","readwrite",function(t){t.openCursor().onsuccess=function(){const t=this.result;t&&G(t,e)}}),this.transaction("ctx","readwrite",function(t){t.openCursor().onsuccess=function(){const t=this.result;t&&G(t,e)}}),this.transaction("tag","readwrite",function(t){t.openCursor().onsuccess=function(){const t=this.result;t&&G(t,e,!0)}}),this.transaction("reg","readwrite",function(t){for(let n=0;n<e.length;n++)t.delete(e[n])})])};function u(e,t){return new Promise((n,s)=>{e.onsuccess=e.oncomplete=function(){t&&t(this.result),t=null,n(this.result)},e.onerror=e.onblocked=s,e=null})}const q={Index:c,Charset:B,Encoder:O,Document:g,Worker:p,Resolver:s,IndexedDB:T,Language:{}},F=typeof t!="undefined"?t:typeof global!="undefined"?global:t;let $;($=F.define)&&$.amd?$([],function(){return q}):typeof F.exports=="object"?F.exports=q:F.FlexSearch=q}(this||self);const search=document.querySelector(".search-input"),suggestions=document.querySelector(".search-suggestions"),background=document.querySelector(".search-background"),encoder=new FlexSearch.Encoder(FlexSearch.Charset.LatinSimple);encoder.assign({minlength:3});var index=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:[{field:"title",tokenize:"forward",resolution:3},{field:"description",encoder,resolution:20,tokenize:"full"},{field:"content",encoder,resolution:20,tokenize:"full"}]}});function initIndex(){index.add({id:0,href:"/docs/isa/maturity/after-three-years-checklist/",title:"3년 지난 ISA 점검",description:"가입 후 3년이 지난 ISA를 해지할지 유지할지 고민된다면 만기, 납입한도, 과세 대상 수익, 서민형 요건, 금융소득종합과세 여부부터 점검해야 한다.",content:`[시리즈 연재] 3년 된 ISA, 어떻게 해야 할까?
가입 후 3년 지난 ISA, 해지 전에 꼭 점검해야 할 5가지 ISA 유지한다면 제대로 활용하고 있는지 점검하는 방법 ISA 해지한다면 계좌 해지부터 연금 전환까지 완벽 가이드 ISA 계좌를 만든 지 3년이 지나면 괜히 마음이 급해진다. &ldquo;이제 세제 혜택을 받을 수 있다던데 해지해야 하나?&rdquo;, &ldquo;그냥 계속 두면 손해인가?&rdquo;, &ldquo;다시 가입하면 비과세 한도가 새로 생기나?&rdquo; 같은 생각이 자연스럽게 든다.
ISA는 3년이라는 숫자가 중요하다. 의무가입기간 3년을 넘기면 중도해지하더라도 비과세와 저율 분리과세 혜택을 받을 수 있기 때문이다. 하지만 3년이 지났다고 바로 해지하는 것이 항상 정답은 아니다. 계좌 안의 수익, 남은 납입한도, 본인의 소득 조건에 따라 유지가 더 유리할 수도 있고, 해지 후 재가입이 더 나을 수도 있다.
이 글에서는 가입 후 3년이 지난 ISA를 가지고 있다면 해지 전에 꼭 확인해야 할 5가지를 정리하였다.
ISA(개인종합자산관리계좌) 가입 및 세제혜택 요건
구분 일반형 서민형 가입 요건 만 19세 이상 또는 직전 연도 근로소득이 있는 만 15~19세 미만 직전연도 총급여 5,000만 원 또는 종합소득 3,800만 원 이하 가입제한 - 직전 3개년 금융소득종합과세 대상자 가입 불가 비과세 한도 200만 원 400만 원 비과세 한도 초과 시 - 9.9%(지방소득세 포함) 저율 분리과세 적용 의무가입기간 - 3년 납입 한도 - 연간 2,000만 원, 최대 1억 원 (미불입 납입한도 이월 가능) 1. 만기와 의무가입기간은 다르다 &nbsp; 가장 먼저 봐야 할 것은 ISA의 &ldquo;만기일&quot;이다. 여기서 헷갈리기 쉬운 부분이 있다. ISA의 의무가입기간과 계좌 만기는 같은 말이 아니다.
ISA는 세제 혜택을 받기 위해 최소 3년 이상 유지해야 한다. 이것이 의무가입기간이다. 반면 만기는 계좌를 만들 때 설정한 종료 시점이다. 가입자가 3년, 5년, 10년처럼 기간을 정해둘 수 있다.
즉, 가입 후 3년이 지났다면 아직 만기가 남아 있더라도 조건을 충족한 상태에서 해지할 수 있다. 반대로 만기일이 얼마 남지 않았는데 계속 운용하고 싶다면 만기 연장을 검토해야 한다.
중요한 점은 ISA의 세제 혜택이 만기일 이후 아무 때나 적용되는 것이 아니라는 점이다. 만기 이후 일정 기간 안에 이자, 배당, 매도 수익 등이 확정되어야 세제 혜택을 받을 수 있다. 계좌 안에 만기가 긴 예금이나 채권형 상품이 들어 있다면, 계좌 만기와 상품 만기가 어긋나서 예상보다 불리한 상황이 생길 수 있다.
예를 들어 ISA 만기일은 곧 다가오는데 계좌 안 예금의 만기가 더 늦다면 선택지가 애매해진다. 예금을 중도해지하면 이자가 줄어들 수 있고, 그대로 두면 ISA 세제 혜택 적용 시점과 맞지 않을 수 있다. 이런 경우에는 만기 연장을 먼저 확인하는 것이 좋다.
ISA 만기 연장은 보통 만기일 기준 3개월 전부터 만기일 전 영업일까지 가능하다. 만기일이 지나면 연장이 어려울 수 있으니 금융회사 앱이나 홈페이지에서 미리 확인해두는 편이 안전하다.
2. 남은 납입한도가 충분하면 서둘러 해지할 이유가 적다 &nbsp; ISA는 납입한도가 있다. 연간 납입한도는 2,000만 원이고, 사용하지 않은 한도는 다음 해로 이월된다. 총 납입한도는 1억 원이다.
여기서 봐야 할 것은 &ldquo;내가 ISA를 얼마나 채워서 쓰고 있는가&quot;다. 계좌를 만들어두기만 하고 실제 납입을 거의 하지 않았다면, 3년이 지났다는 이유만으로 해지할 필요는 크지 않다. 아직 절세 계좌로 쓸 수 있는 공간이 많이 남아 있기 때문이다.
반대로 이미 납입을 꽤 많이 했고, 비과세 한도도 충분히 채웠다면 해지 후 재가입을 고민해볼 수 있다. ISA는 해지 후 다시 가입하면 새 계좌에서 납입한도와 비과세 한도를 다시 받을 수 있기 때문이다.
다만 이 판단은 단순히 &ldquo;3년 지났으니까 리셋하자&quot;로 접근하면 안 된다. 계좌 안의 실제 과세 대상 수익이 얼마인지, 서민형 ISA 자격을 다시 받을 수 있는지, 최근 금융소득종합과세 대상자가 된 적은 없는지까지 함께 봐야 한다.
초보자라면 이렇게 생각하면 쉽다.
상황 판단 방향 납입을 거의 안 했다 유지하면서 더 활용하는 쪽 검토 납입한도를 많이 썼고 수익도 충분하다 해지 후 재가입 검토 손실 중이다 유지하면서 회복 후 혜택 활용 검토 서민형 재가입이 어려울 수 있다 무작정 해지하지 말고 유지 검토 ISA는 계좌를 가지고 있다는 사실보다 &ldquo;얼마나 잘 채워서 쓰고 있는지&quot;가 더 중요하다.
3. 계좌 수익률이 아니라 과세 대상 수익을 봐야 한다 &nbsp; ISA를 해지할지 판단할 때 가장 중요한 숫자는 단순 수익률이 아니다. 실제 세제 혜택을 받을 &ldquo;과세 대상 순이익&quot;이다.
ISA의 비과세 한도는 유형에 따라 다르다.
구분 비과세 한도 일반형 ISA 200만 원 서민형 ISA 400만 원 비과세 한도를 넘는 순이익에 대해서는 지방소득세를 포함해 9.9%로 분리과세된다. 일반 금융상품의 이자·배당소득세율이 보통 15.4%라는 점을 생각하면, 비과세 한도 초과분도 세율 측면에서 유리한 편이다.
다만 계좌 화면에 보이는 평가손익만 보고 판단하면 안 된다. ISA는 계좌 안의 이익과 손실을 합산하는 손익통산 구조가 있다. 배당금, 이자, 펀드나 ETF의 분배금, 일부 매매손익이 서로 영향을 준다.
예를 들어 배당으로 100만 원을 받았지만 다른 상품에서 50만 원 손실이 확정되었다면, 과세 대상 순이익은 단순히 100만 원이 아니라 50만 원으로 줄어들 수 있다. 이 구조 때문에 비과세 한도를 얼마나 사용했는지는 금융회사 앱의 ISA 세제 혜택 관련 화면에서 확인하는 것이 좋다.
특히 국내주식과 국내주식형 ETF는 계산 방식이 직관적이지 않을 수 있다. 국내주식 매매차익이 생겼다고 해서 그 금액이 그대로 ISA 비과세 한도를 채운다고 단정하면 안 된다. 반대로 손실이 있는 경우에는 앞으로 발생할 이익과 통산되면서 향후 비과세 효과가 더 커질 여지도 있다.
그래서 해지 전에는 최소한 이 3가지를 확인해야 한다.
계좌 전체 평가손익이 아니라 세제상 순이익이 얼마인지 일반형 또는 서민형 비과세 한도를 얼마나 사용했는지 손실 중인 상품을 지금 정리하는 것이 유리한지 ISA에서 손실이 난 상태라면 해지보다 유지가 더 나을 수 있다. 일반형 ISA에서 현재 손실이 200만 원이라면, 앞으로 발생하는 이익과 기존 손실이 통산되면서 비과세 한도를 더 넓게 활용하는 효과가 생길 수 있기 때문이다.
4. 서민형 ISA라면 전년도 소득을 다시 확인해야 한다 &nbsp; 서민형 ISA 가입자는 해지 전에 더 신중해야 한다. 서민형 ISA는 일반형보다 비과세 한도가 크다. 일반형은 200만 원, 서민형은 400만 원이다.
문제는 해지 후 다시 가입할 때도 서민형 요건을 새로 판단한다는 점이다. 과거에 서민형으로 가입했더라도 지금 소득이 올라 요건을 넘었다면, 재가입할 때는 일반형만 가능할 수 있다.
서민형 ISA는 전년도 종합소득금액 또는 근로소득 기준을 본다. 근로소득만 있는 경우 총급여 5,000만 원 이하, 종합소득금액 기준으로는 3,800만 원 이하일 때 서민형 가입 대상이 될 수 있다.
여기서 실무적으로 헷갈리는 시점이 있다. 전년도 소득은 보통 7월 무렵 확정된다. 그래서 1월부터 6월 사이에는 전전년도 소득을 기준으로 판단하는 경우가 있고, 하반기에는 전년도 소득을 기준으로 보는 경우가 많다.
예를 들어 예전에는 소득이 낮아서 서민형 ISA를 만들었지만 최근 연봉이 올라 총급여 5,000만 원을 넘었다면, 해지 후 재가입 시 서민형 혜택을 다시 받기 어려울 수 있다. 이런 상황에서 아직 비과세 한도 400만 원을 충분히 쓰지 못했다면, 기존 계좌를 유지하는 쪽이 더 나을 수 있다.
서민형 ISA를 가지고 있다면 해지 버튼을 누르기 전에 이렇게 확인해야 한다.
지금 계좌가 일반형인지 서민형인지 서민형 비과세 한도 400만 원을 얼마나 사용했는지 최근 소득으로 다시 서민형 가입이 가능한지 만기 연장 시에도 가입 요건 재확인이 필요한지 특히 앞으로 소득이 더 오를 가능성이 있다면 만기를 짧게 두는 것보다 여유 있게 연장해두는 전략도 고려할 만하다.
5. 금융소득종합과세 대상 이력이 있으면 재가입이 막힐 수 있다 &nbsp; ISA는 누구나 언제든 다시 만들 수 있는 계좌처럼 보이지만, 그렇지 않다. 개설 신청일 기준 직전 3개년 동안 한 번이라도 금융소득종합과세 대상자가 된 적이 있으면 ISA 가입이 제한될 수 있다.
금융소득종합과세는 이자소득과 배당소득을 합친 금융소득이 연 2,000만 원을 초과할 때 적용된다. 예금 이자, 채권 이자, 배당주, 고배당 ETF 등을 많이 보유한 사람이라면 생각보다 쉽게 관련될 수 있다.
이 조건은 해지 후 재가입을 판단할 때 매우 중요하다. 현재 ISA는 정상적으로 유지하고 있는데, 최근 금융소득이 늘어 직전 3개년 중 어느 한 해라도 금융소득종합과세 대상이 되었다면 새 ISA를 만들기 어려울 수 있다. 이때 기존 ISA를 해지해버리면 다시 절세 계좌를 만들 수 없는 공백이 생길 수 있다.
또 하나 봐야 할 점은 만기 연장이다. ISA 만기를 연장할 때도 가입 요건을 다시 확인할 수 있다. 따라서 금융소득이 많아질 가능성이 있는 사람은 만기를 너무 짧게 잡아두면 나중에 선택지가 줄어들 수 있다.
금융소득이 많은 사람에게 ISA가 의미 있는 이유는 비과세 한도를 초과한 소득도 9.9% 분리과세로 처리된다는 점이다. 금융소득종합과세 구간에 들어가는 사람일수록 이 분리과세 혜택의 가치가 더 크게 느껴질 수 있다.
해지 전에는 홈택스, 종합소득세 신고 내역, 금융회사 안내 등을 통해 최근 3개년 금융소득종합과세 대상 여부를 확인하는 것이 좋다.
해지와 유지를 가르는 현실적인 판단 기준 &nbsp; 가입 후 3년이 지난 ISA는 크게 두 방향으로 나뉜다. 하나는 해지 후 재가입해서 한도와 비과세 혜택을 새로 받는 것이고, 다른 하나는 기존 계좌를 유지하면서 남은 혜택을 계속 쓰는 것이다.
해지 후 재가입이 유리할 수 있는 경우는 다음과 같다.
비과세 한도를 이미 충분히 사용했다 계좌 내 순이익이 확정되어 세제 혜택을 받을 수 있다 재가입 시 일반형 또는 서민형 요건에 문제가 없다 새 납입한도와 비과세 한도를 다시 활용할 계획이 있다 반대로 유지가 나을 수 있는 경우도 있다.
납입한도가 많이 남아 있다 계좌가 손실 중이거나 비과세 한도를 거의 쓰지 못했다 서민형 ISA 재가입이 어려울 수 있다 금융소득종합과세 대상 이력 때문에 재가입이 막힐 수 있다 계좌 안 상품 만기와 ISA 만기가 맞지 않는다 결국 핵심은 &ldquo;3년이 지났는가&quot;가 아니라 &ldquo;지금 해지했을 때 잃는 혜택보다 얻는 혜택이 큰가&quot;다.
개인적으로는 해지 전에 금융회사 앱에서 ISA 계좌 상세 화면을 열고 아래 항목을 하나씩 적어보는 방식을 추천한다.
체크 항목 확인 내용 가입일 의무가입기간 3년 충족 여부 만기일 연장 가능 기간인지 누적 납입액 총 납입한도 1억 원 중 사용 금액 잔여 납입한도 앞으로 더 넣을 수 있는 금액 세제상 순이익 비과세 한도 사용 정도 ISA 유형 일반형인지 서민형인지 최근 소득 서민형 재가입 가능성 금융소득 종합과세 대상 이력 여부 이 표를 채워보면 의외로 답이 선명해진다. 수익이 크고 재가입 요건에 문제가 없다면 해지 후 재가입이 자연스럽다. 아직 제대로 활용하지 못했거나 재가입이 불리하다면 유지가 더 합리적이다.
정리 &nbsp; ISA는 가입 후 3년이 지나면 선택지가 넓어진다. 하지만 선택지가 넓어졌다는 말이 곧바로 해지해야 한다는 뜻은 아니다.
핵심만 다시 정리하면 이렇다.
ISA의 의무가입기간 3년과 계좌 만기는 다르다. 만기가 가까우면 연장 가능 기간을 먼저 확인해야 한다. 납입한도가 많이 남아 있다면 유지하면서 더 활용할 수 있다. 계좌 수익률이 아니라 세제상 과세 대상 순이익을 봐야 한다. 서민형 ISA는 해지 후 재가입 시 소득 요건을 다시 따진다. 금융소득종합과세 대상 이력이 있으면 ISA 재가입이 제한될 수 있다. 해지 후 재가입은 비과세 한도와 납입한도를 새로 받는 장점이 있지만, 기존 계좌의 조건을 잃을 수 있다. 3년 지난 ISA를 가지고 있다면 먼저 해지 여부부터 결정하지 말고, 계좌 현황을 숫자로 확인하는 것이 좋다. 만기일, 남은 납입한도, 세제상 순이익, 본인의 소득 조건을 확인하면 지금 해야 할 선택이 훨씬 분명해진다.`}).add({id:1,href:"/docs/isa/maturity/maintenance-checklist/",title:"ISA 유지 활용법",description:"ISA를 해지하지 않고 유지하기로 했다면 만기, 잔여 납입한도, 세제상 소득, 포트폴리오, 금융회사와 유형, 중도인출 전략까지 함께 점검해야 한다.",content:`[시리즈 연재] 3년 된 ISA, 어떻게 해야 할까?
가입 후 3년 지난 ISA, 해지 전에 꼭 점검해야 할 5가지 ISA 유지한다면 제대로 활용하고 있는지 점검하는 방법 ISA 해지한다면 계좌 해지부터 연금 전환까지 완벽 가이드 ISA 가입 후 3년이 지나면 해지할지 유지할지 고민하게 된다. 그런데 유지하기로 마음먹었다고 해서 그대로 방치하면 ISA의 장점을 제대로 쓰기 어렵다. ISA는 단순히 세금이 줄어드는 계좌가 아니라, 납입한도와 투자 상품, 손익통산, 중도인출 기능을 함께 활용해야 효과가 커지는 절세 계좌다.
특히 가입만 해두고 몇 년 동안 거의 납입하지 않았거나, 예금이나 현금성 자산만 넣어둔 상태라면 다시 점검할 필요가 있다. 반대로 이미 납입한도를 거의 채운 사람이라면 하락장 대응과 리밸런싱 전략을 더 신경 써야 한다.
이 글에서는 ISA를 해지하지 않고 유지하기로 했다면 무엇을 확인해야 하는지 실전 기준으로 정리하였다.
만기와 잔여 납입한도부터 확인한다 &nbsp; ISA를 유지하기로 했다면 가장 먼저 만기일을 확인해야 한다. 만기가 곧 도래한다면 만기일이 지나기 전에 연장을 신청해야 한다. 일반적으로 만기 연장은 만기일 기준 3개월 전부터 만기일 전 영업일까지 가능하다.
만기일을 놓치면 더 이상 연장하지 못할 수 있다. 계좌 안에 만기가 긴 상품이 있거나 계속 운용할 계획이 있다면, 금융회사 앱이나 홈페이지에서 만기일을 먼저 확인하는 것이 좋다.
만기까지 시간이 충분하다면 다음으로 볼 것은 잔여 납입한도다. ISA는 연간 2,000만 원까지 납입할 수 있고, 사용하지 않은 납입한도는 다음 해로 이월된다. 총 납입한도는 1억 원이다.
예를 들어 ISA에 가입한 지 3년이 지났는데 지금까지 500만 원만 납입했다면, 아직 꽤 큰 납입 여력이 남아 있다. 이 경우에는 계좌를 해지하기보다 목돈이 생겼을 때 ISA에 우선 납입해 절세 공간을 활용하는 전략이 더 자연스럽다.
반대로 납입한도를 거의 다 채운 상태라면 상황이 다르다. 추가로 돈을 넣어 하락장에서 평균 매입단가를 낮추는 방식이 제한된다. 이때는 현금 비중, 안전자산 비중, 리밸런싱 기준을 미리 세워야 한다.
ISA 상태 점검 방향 납입한도가 많이 남아 있음 추가 납입 계획과 투자 자산 검토 납입한도를 거의 채움 하락장 대응, 리밸런싱, 현금 비중 점검 만기일이 가까움 만기 연장 가능 기간 확인 만기까지 여유 있음 포트폴리오와 세제상 수익 점검 ISA는 빨리 만들수록 납입한도가 쌓이는 장점이 있다. 하지만 한도가 쌓였다고 자동으로 수익이 나는 것은 아니다. 남은 한도를 어떻게 채우고 어떤 자산으로 운용할지가 핵심이다.
계좌 수익률보다 ISA 내 소득 현황을 봐야 한다 &nbsp; ISA를 유지할 때는 계좌 평가수익률만 보면 판단이 흐려질 수 있다. 중요한 것은 &ldquo;지금 해지한다고 가정했을 때 세제 혜택을 받을 수 있는 순이익이 얼마인가&quot;다.
ISA는 손익통산 구조를 가지고 있다. 계좌 안에서 발생한 이자, 배당, 분배금, 일부 매매손익을 합산한 뒤 최종 순이익에 대해 세제 혜택을 적용한다. 일반형 ISA는 200만 원, 서민형 ISA는 400만 원까지 비과세되고, 초과분은 지방소득세 포함 9.9%로 분리과세된다.
다만 모든 수익과 손실이 같은 방식으로 계산되는 것은 아니다. 국내주식이나 국내주식형 펀드·ETF의 일부 매매손익은 손익통산 과정에서 다르게 처리될 수 있다. 그래서 단순 평가수익률이 높다고 비과세 한도를 많이 쓴 것도 아니고, 평가손실이 있다고 무조건 불리한 것도 아니다.
예를 들어 국내주식형 ETF에 투자해 매매차익이 생겼더라도, 그 차익이 ISA 비과세 한도를 그대로 차감한다고 단정하면 안 된다. 반면 배당금이나 ETF 분배금은 과세 대상 소득 계산에 영향을 줄 수 있다.
이 구조를 이해하면 포트폴리오 구성도 달라진다. 국내주식형 ETF를 활용한다면 단순 시세차익만 노리는 상품보다 분배금 흐름이 있는 상품을 함께 검토할 수 있다. 물론 분배금이 높다고 무조건 좋은 상품은 아니다. 분배금의 재원, 총보수, 변동성, 장기 수익률을 같이 봐야 한다.
ISA 앱에서 확인할 때는 다음 항목을 따로 보는 것이 좋다.
계좌 전체 평가손익 세제 혜택 적용 대상 소득 비과세 한도 사용 정도 이자·배당·분배금 발생 내역 손실 확정 상품과 미실현 손익 ISA는 세금 구조 때문에 만들어진 계좌다. 그래서 유지 여부를 판단할 때도 투자 수익률과 세제상 순이익을 나누어 보는 습관이 필요하다.
포트폴리오가 물가상승률을 이길 수 있는지 점검한다 &nbsp; ISA를 자산증식 계좌로 쓰려면 단순히 돈을 넣어두는 것만으로는 부족하다. 예금 위주로만 운용하면 안정적일 수는 있지만, 장기적으로 물가상승률을 따라가지 못할 가능성이 있다.
최근 몇 년간 물가상승률이 높았던 시기를 지나면서 많은 사람이 체감했듯이, 돈의 가치는 시간이 지나면서 줄어들 수 있다. ISA를 유지한다면 내 포트폴리오가 최소한 물가상승률 이상을 목표로 할 수 있는 구조인지 점검해야 한다.
ISA는 유형에 따라 운용 가능한 상품이 다르다.
구분 특징 신탁형 ISA 예금, 펀드 등 중심으로 운용 가능 중개형 ISA 국내 상장주식, ETF, 리츠 등 직접 거래 가능 일임형 ISA 금융회사가 투자 성향에 맞춰 운용 직접 투자에 관심이 있다면 중개형 ISA가 활용도가 높다. 국내 상장주식과 ETF를 직접 사고팔 수 있고, S&amp;P500, 나스닥100, 배당주, 채권, 리츠 등 다양한 자산에 접근할 수 있기 때문이다.
다만 많이 투자되는 상품이 항상 나에게 맞는 상품은 아니다. 미국 대표지수 ETF는 장기적으로 우상향해왔다는 기대가 있지만, 단기적으로는 큰 하락을 겪을 수 있다. ISA는 절세계좌일 뿐 원금보장 계좌가 아니다.
포트폴리오를 점검할 때는 다음 질문을 던져보는 것이 좋다.
특정 국가나 업종에 너무 몰려 있지 않은가? 주식형 자산 비중이 내 투자 성향보다 높지 않은가? 하락장이 왔을 때 추가 납입이나 리밸런싱이 가능한가? 배당·분배금이 필요한 계좌인지, 장기 성장 중심 계좌인지 분명한가? 예금, 채권, 주식, 리츠 등 자산군이 적절히 섞여 있는가? 직접 자산배분을 하기 어렵다면 자산배분형 펀드나 투자 성향에 맞춘 일임 서비스도 대안이 될 수 있다. 자산배분형 펀드는 정해진 전략에 따라 여러 자산을 나누어 담고, 필요하면 리밸런싱까지 수행하는 상품이다.
중요한 것은 ISA 안에 아무 상품이나 넣는 것이 아니라, 내 목표에 맞는 구조를 만드는 것이다.
금융회사나 ISA 유형 변경도 검토할 수 있다 &nbsp; ISA를 계속 유지한다고 해서 반드시 현재 금융회사와 현재 유형을 그대로 가져가야 하는 것은 아니다. 투자 방식이 바뀌었다면 금융회사 이전이나 ISA 유형 변경을 검토할 수 있다.
예를 들어 은행에서 신탁형 ISA를 만들었는데 이제 국내 상장 ETF나 주식에 직접 투자하고 싶다면 중개형 ISA가 더 적합할 수 있다. 중개형 ISA는 증권사에서 가입할 수 있고, 일반 주식계좌처럼 ETF나 국내 상장주식을 실시간으로 거래할 수 있다.
다만 ISA 이전은 보통 현금 이전이 원칙이다. 현재 계좌에서 운용 중인 상품이 있다면 이전 전에 매도하거나 만기 처리해야 할 수 있다. 이 과정에서 손익 확정, 중도해지 이율, 시장 가격 변동이 생길 수 있으니 이전 시점을 신중하게 잡아야 한다.
금융회사를 고를 때는 단순히 이벤트 혜택만 볼 일이 아니다. 장기적으로 계속 쓸 계좌라면 다음 요소가 더 중요하다.
ETF와 주식 거래 편의성 ISA 계좌 화면에서 세제상 소득을 쉽게 확인할 수 있는지 수수료와 상품 보수 리밸런싱이나 자산배분 서비스 제공 여부 월배당 ETF, 채권형 ETF, 리츠 등 관심 상품 거래 가능 여부 모바일 앱 사용성이 괜찮은지 ISA는 3년 이상 길게 가져가는 계좌다. 처음 만들 때는 큰 차이를 못 느껴도, 시간이 지나면 거래 편의성과 정보 확인 화면의 차이가 꽤 크게 느껴질 수 있다.
중도인출 기능은 현금흐름 전략으로 활용한다 &nbsp; ISA는 납입원금 범위 안에서 중도인출이 가능하다. 이 기능 때문에 ISA를 단순 투자계좌가 아니라 현금흐름 관리 계좌로도 활용할 수 있다.
예를 들어 은퇴 전후나 소득 공백기에 ISA 안에서 발생하는 분배금과 일부 현금을 활용해 생활비를 보탤 수 있다. 다만 주의할 점이 있다. 중도인출한 금액만큼 납입한도가 다시 살아나는 것은 아니다.
예를 들어 1,000만 원을 납입한 뒤 300만 원을 인출했다고 해서, 그 300만 원 한도가 새로 생기는 구조가 아니다. 납입한도는 이미 사용한 것으로 본다. 그래서 중도인출은 &ldquo;필요하면 꺼낼 수 있다&quot;는 장점은 있지만, 너무 자주 쓰면 ISA의 장기 운용 효과가 약해질 수 있다.
또 하나의 문제는 시장 상황이다. 현금이 필요할 때마다 투자자산을 매도해야 한다면, 하락장에서 손실을 확정할 수 있다. 이 부담을 줄이려면 계좌 안에 일정 현금 비중을 두거나, 주기적으로 현금흐름을 만드는 자산을 활용할 수 있다.
대표적인 예가 월배당 ETF다. 월배당 ETF는 매월 분배금을 지급하는 ETF다. 상품에 따라 고배당주, 채권, 리츠, 커버드콜, 해외 자산 등 전략이 다양하다.
다만 월배당 ETF도 무조건 안정적인 현금흐름 상품은 아니다. 기초자산 가격이 하락하면 평가손실이 생길 수 있고, 분배금도 줄어들 수 있다. 커버드콜 전략처럼 분배율은 높지만 상승장에서 수익이 제한될 수 있는 구조도 있다.
월배당 ETF를 ISA에서 활용한다면 이렇게 접근하는 편이 낫다.
분배율만 보지 말고 기초자산과 운용전략을 확인한다. 한 상품에 몰아넣기보다 국가, 자산군, 전략을 나눈다. 생활비처럼 꼭 필요한 돈은 투자자산 매도에 의존하지 않는다. 분배금은 재투자할지 인출할지 기준을 정해둔다. 수익률보다 장기 유지 가능한 변동성인지 먼저 본다. ISA의 중도인출 기능은 잘 쓰면 유연성이 커지지만, 무계획적으로 쓰면 절세계좌의 장점을 줄일 수 있다. 필요한 현금흐름과 장기 투자 목적을 함께 놓고 판단해야 한다.
ISA 유지 점검표 &nbsp; ISA를 유지하기로 했다면 1년에 한 번 정도는 아래 항목을 점검하는 것이 좋다.
점검 항목 확인할 내용 만기일 연장 가능 기간과 만기 도래 여부 잔여 납입한도 올해 추가 납입 가능한 금액 누적 납입액 총 1억 원 한도 중 사용한 금액 세제상 순이익 비과세 한도 사용 정도 ISA 유형 신탁형, 중개형, 일임형 중 현재 목적에 맞는지 포트폴리오 주식, 채권, 예금, 리츠, 현금 비중 리밸런싱 특정 자산 쏠림 여부 현금흐름 배당·분배금, 중도인출 계획 금융회사 수수료, 앱 편의성, 상품 접근성 이 표를 채워보면 ISA를 유지할지, 이전할지, 일부 상품을 바꿀지 판단하기 쉬워진다. 계좌를 오래 유지하는 것 자체가 목표가 아니라, 절세 혜택을 받으면서 내 자산 목표에 맞게 운용하는 것이 목표다.
정리 &nbsp; ISA를 유지하기로 했다면 방치하지 말고 계좌를 다시 설계해야 한다. 3년을 넘겼다는 사실보다 중요한 것은 앞으로 이 계좌를 어떻게 쓸 것인지다.
핵심만 정리하면 이렇다.
만기일이 가까우면 연장 가능 기간부터 확인한다. 잔여 납입한도가 많다면 추가 납입 계획을 세운다. 납입한도를 거의 채웠다면 하락장 대응과 리밸런싱 전략이 필요하다. 계좌 평가수익률보다 세제상 순이익과 비과세 한도 사용 정도를 봐야 한다. 포트폴리오가 물가상승률을 이길 수 있는 구조인지 점검한다. 투자 방식이 바뀌었다면 중개형 ISA나 금융회사 이전도 검토할 수 있다. 중도인출은 가능하지만, 인출한 금액만큼 납입한도가 다시 생기지는 않는다. 월배당 ETF는 현금흐름에 도움이 될 수 있지만 분배율만 보고 고르면 안 된다. ISA는 잘 유지하면 예금, ETF, 주식, 배당, 연금 전환까지 연결할 수 있는 유용한 계좌다. 1년에 한 번이라도 만기, 한도, 수익, 포트폴리오를 점검하면 단순한 절세계좌를 내 자산관리의 중심 계좌로 바꿀 수 있다.`}).add({id:2,href:"/docs/isa/maturity/closure-pension-transfer-guide/",title:"ISA 해지 연금전환",description:"ISA를 해지하기로 했다면 자산 현금화, 세후 수령액, 60일 이내 연금 전환, IRP와 연금저축 선택, 세액공제받지 않은 자금 활용까지 순서대로 확인해야 한다.",content:`[시리즈 연재] 3년 된 ISA, 어떻게 해야 할까?
가입 후 3년 지난 ISA, 해지 전에 꼭 점검해야 할 5가지 ISA 유지한다면 제대로 활용하고 있는지 점검하는 방법 ISA 해지한다면 계좌 해지부터 연금 전환까지 완벽 가이드 ISA를 해지하기로 결정했다면 다음 고민은 &ldquo;돈을 어디로 옮길 것인가&quot;다. 단순히 현금으로 빼서 쓰는 것도 가능하지만, 당장 쓸 돈이 아니라 노후자금으로 이어갈 계획이라면 연금계좌 전환을 꼭 검토할 만하다.
ISA 만기해지자금을 연금계좌로 전환하면 전환금액의 10%, 최대 300만 원까지 추가 세액공제 혜택을 받을 수 있다. 원래 연금저축과 IRP의 연간 세액공제 한도는 합산 900만 원인데, ISA 만기자금 전환이 있는 해에는 최대 1,200만 원까지 세액공제 대상이 될 수 있다.
다만 ISA 해지와 연금 전환은 순서와 기한이 중요하다. 자산을 언제 팔아야 하는지, 세후 수령액은 얼마인지, 60일 기한은 어디서부터 계산하는지, IRP와 연금저축 중 어디로 옮길지에 따라 결과가 달라질 수 있다.
이 글에서는 ISA 해지부터 연금 전환, 그리고 전환 후 자금 활용까지 순서대로 정리하였다.
ISA 해지 전에는 자산을 먼저 현금화해야 한다 &nbsp; ISA를 해지하기 전에 가장 먼저 할 일은 계좌 안의 자산을 확인하는 것이다. 예금, 펀드, ETF, 주식, 리츠 등 운용 중인 상품이 있다면 해지 전에 현금화가 필요한지 따져봐야 한다.
ISA는 해지할 때 계좌 안에서 실현된 소득을 기준으로 세제 혜택을 적용한다. 만기일 기준 30일 이내에 자산을 매도하지 않아 수익이 실현되지 않았다면, 해당 수익은 ISA 세제 혜택을 받지 못할 수 있다.
예를 들어 ISA 안의 ETF가 평가수익 상태인데 매도하지 않은 채 해지를 진행하면, 그 평가수익은 아직 확정된 소득이 아니다. 세제 혜택을 받으려면 해지 전에 매도해 수익을 실현해야 한다.
다만 보유 자산을 꼭 팔고 싶지 않은 경우도 있다. 이때는 일부 자산을 일반 주식위탁계좌 등으로 이전하는 방법을 검토할 수 있다. 하지만 이 경우 해당 자산에 대해서는 ISA 세제 혜택을 받지 못한다. 또 ISA나 연금계좌로 실물 이전하는 것은 어렵고, 일반계좌로 이전하는 방식이 일반적이다.
해지 전 체크할 내용은 다음과 같다.
점검 항목 확인할 내용 보유 상품 예금, ETF, 주식, 펀드, 리츠 등 상품 만기 ISA 만기와 상품 만기가 맞는지 평가손익 매도 시 실현손익이 얼마인지 세제 혜택 대상 해지 전 실현해야 할 수익이 있는지 이전 가능 여부 팔지 않을 자산을 일반계좌로 옮길 수 있는지 ISA 해지는 금융회사마다 절차가 다를 수 있다. 영업점 방문이나 고객센터 ARS를 통해 진행하는 경우가 많고, 모바일 앱에서 바로 해지를 지원하지 않는 곳도 있다. 그래서 해지 전에는 해당 금융회사 안내를 먼저 확인하는 것이 좋다.
세후 수령액이 연금 전환 가능한 금액이다 &nbsp; ISA를 해지하면 계좌 안의 순이익에 대해 세금 계산이 이루어진다. 일반형 ISA는 200만 원, 서민형 ISA는 400만 원까지 비과세 혜택이 적용된다. 비과세 한도를 초과한 순이익에는 지방소득세를 포함해 9.9% 세율로 분리과세된다.
연금계좌로 전환할 수 있는 금액은 세금을 계산한 뒤 실제로 받는 세후 수령액이다. 그래서 해지 전에는 &ldquo;계좌 평가금액&quot;이 아니라 &ldquo;세후로 실제 수령할 금액&quot;을 확인해야 한다.
간단한 예를 들어보자.
구분 금액 ISA 납입원금 3,000만 원 순이익 500만 원 비과세 한도 200만 원 과세 대상 초과수익 300만 원 세금 9.9% 29만 7천 원 예상 세후 수령액 3,470만 3천 원 이 경우 연금계좌로 전환할 수 있는 기준 금액은 세전 3,500만 원이 아니라 세후 수령액인 3,470만 3천 원이다.
ISA 해지를 결정했다면 금융회사 앱이나 상담을 통해 예상 세금과 세후 수령액을 먼저 확인해야 한다. 특히 여러 상품에서 이익과 손실이 섞여 있다면 손익통산 결과에 따라 실제 과세 대상 소득이 달라질 수 있다.
연금 전환은 60일 이내에 완료해야 한다 &nbsp; ISA 만기해지자금을 연금계좌로 옮길 때 가장 중요한 기한은 60일이다. ISA 만기해지자금을 연금계좌로 전환하려면 정해진 기한 안에 전환을 완료해야 한다.
여기서 주의할 점은 기준일이다. 만기일에 맞춰 해지했다면 해지일 기준으로 생각하면 되지만, 만기일이 지난 뒤에 해지했다면 해지일이 아니라 만기일을 기준으로 60일을 계산해야 할 수 있다. 이 부분은 금융회사와 반드시 확인하는 것이 좋다.
또 하나 중요한 점은 단순 계좌이체로 처리하면 안 된다는 것이다. ISA 해지자금을 내 입출금계좌로 받은 뒤 연금저축이나 IRP에 직접 송금한다고 해서 자동으로 ISA 연금 전환으로 인정되는 것은 아니다. 금융회사의 &ldquo;ISA 만기자금 연금 전환&rdquo; 절차를 이용해야 한다.
전환은 전액만 가능한 것이 아니다. 일부만 전환할 수도 있고, 기한 안에서 여러 번 나누어 전환할 수도 있다. 예를 들어 ISA 해지자금 3,000만 원 중 2,000만 원만 연금계좌로 전환하고 나머지는 생활자금으로 둘 수 있다.
다만 두 해에 걸쳐 나누어 전환한다고 해서 추가 세액공제 한도 300만 원을 두 번 받을 수 있는 것은 아니다. ISA 만기해지자금 전환에 따른 추가 세액공제는 전환금액의 10%, 최대 300만 원이 기본 틀이다.
정리하면 절차는 이렇게 보는 것이 쉽다.
ISA 보유 자산 현금화 여부 확인 ISA 해지 신청 세후 수령액 확인 60일 이내 연금 전환 신청 전환할 연금계좌와 금액 확정 연말정산 또는 종합소득세 신고 시 세액공제 반영 확인 기한을 놓치면 추가 세액공제 기회가 사라질 수 있으니, ISA 해지일과 만기일은 따로 기록해두는 편이 좋다.
ISA 만기자금을 연금계좌로 옮기면 세액공제 한도가 커진다 &nbsp; ISA 만기해지자금을 연금계좌에 전환하면 전환금액의 10%, 최대 300만 원까지 추가 세액공제 대상이 된다. 기존 연금계좌 세액공제 한도 900만 원과 합치면, 해당 연도에는 최대 1,200만 원까지 세액공제 대상이 될 수 있다.
예를 들어 ISA 만기자금 3,000만 원을 연금계좌로 전환하면 전환금액의 10%는 300만 원이다. 이 경우 추가 세액공제 대상 금액은 300만 원이다.
구분 세액공제 대상 한도 연금저축·IRP 기본 한도 최대 900만 원 ISA 만기자금 전환 추가 한도 최대 300만 원 합산 최대 1,200만 원 여기서 중요한 포인트가 있다. ISA 만기자금을 연금계좌로 전환하는 해에는 별도로 연금저축이나 IRP에 납입하지 않았더라도, 전환금액으로 기존 900만 원 한도까지 채울 수 있다.
예를 들어 그해 연금계좌에 아무것도 납입하지 않은 상태에서 ISA 만기자금 3,000만 원을 전환했다고 해보자. 이 경우 기본 세액공제 한도 900만 원과 ISA 전환 추가 한도 300만 원을 합쳐 최대 1,200만 원까지 세액공제 대상이 될 수 있다.
세액공제율은 소득 구간에 따라 달라진다. 보통 총급여 5,500만 원 이하 또는 종합소득금액 4,500만 원 이하라면 지방소득세 포함 16.5%, 그보다 높으면 13.2%가 적용된다.
세액공제 대상 금액 공제율 16.5% 공제율 13.2% 900만 원 148만 5천 원 118만 8천 원 1,200만 원 198만 원 158만 4천 원 단, 실제 환급액은 이미 낸 세금과 다른 공제 항목에 따라 달라진다. 세액공제 가능액이 크다고 해서 무조건 그 금액 전부를 현금으로 돌려받는 것은 아니다.
IRP와 연금저축 중 어디로 전환할지 고른다 &nbsp; ISA 만기해지자금을 연금계좌로 전환할 때 꼭 같은 금융회사를 이용할 필요는 없다. ISA를 해지한 금융회사와 다른 금융회사의 연금계좌로도 전환할 수 있다. 중요한 것은 어떤 연금계좌가 내 운용 목적에 맞는지다.
대표적인 선택지는 IRP와 연금저축펀드다. 둘 다 세액공제를 받을 수 있고, 펀드나 ETF를 활용한 장기투자가 가능하다. 하지만 차이도 분명하다.
구분 IRP 연금저축펀드 위험자산 투자한도 일반적으로 70% 제한 별도 제한 없음 원리금보장상품 가능 제한적 중도인출 법정 사유 중심으로 제한 상대적으로 자유로움 ETF 투자 가능 가능 성격 퇴직연금 성격 강함 개인연금 성격 강함 안정성을 더 중시하고 예금 같은 원리금보장상품도 함께 운용하고 싶다면 IRP가 맞을 수 있다. 반대로 ETF 중심으로 더 자유롭게 운용하고 싶고, 나중에 세액공제받지 않은 원금을 비교적 유연하게 인출하고 싶다면 연금저축펀드가 더 편할 수 있다.
둘 중 하나만 선택해야 하는 것도 아니다. ISA 만기해지자금을 여러 연금계좌로 나누어 전환할 수 있다. 예를 들어 일부는 IRP에 넣어 안정적으로 운용하고, 일부는 연금저축펀드에 넣어 ETF 중심으로 운용하는 방식도 가능하다.
금융회사를 고를 때는 이벤트보다 장기 운용 편의성을 먼저 보는 것이 좋다.
ETF 거래가 편한지 연금계좌 내 상품 선택 폭이 넓은지 수수료와 상품 보수가 적절한지 앱에서 세액공제, 납입한도, 수익률 확인이 쉬운지 연금수령 신청과 관리가 편한지 연금계좌는 1~2년 쓰고 끝나는 계좌가 아니다. ISA보다 더 길게 가져갈 가능성이 크기 때문에, 장기 관리가 편한 곳을 고르는 것이 중요하다.
ISA 해지 후 재가입까지 연결하면 절세 루틴이 된다 &nbsp; ISA는 해지하고 끝나는 계좌가 아니다. 해지 후 계좌 폐쇄가 완료되면 새 ISA를 다시 개설할 수 있다. 새 ISA에는 납입한도와 비과세 한도가 다시 부여된다.
이 구조를 활용하면 ISA와 연금계좌를 연결한 절세 루틴을 만들 수 있다.
예를 들어 이런 방식이다.
매년 연금계좌에 900만 원을 납입해 세액공제 한도를 채운다. ISA에도 3년 이상 꾸준히 납입하고 운용한다. ISA 의무가입기간이 지난 뒤 해지한다. ISA 만기해지자금을 연금계좌로 전환한다. 해당 연도에는 최대 1,200만 원까지 세액공제 대상이 될 수 있다. ISA를 다시 개설해 다음 3년 주기를 시작한다. 꼭 매년 900만 원을 납입할 수 있어야만 가능한 전략은 아니다. 저축 여력이 부족한 해에는 ISA 만기자금 전환만으로도 연금계좌 세액공제 한도를 채우는 데 도움이 된다.
예를 들어 연금계좌에 따로 납입하지 않은 해에 ISA 만기자금 3,000만 원을 전환하면, 기본 세액공제 한도 900만 원과 추가 300만 원을 함께 채울 수 있다. 이 방식은 현금흐름이 일정하지 않은 사람에게도 꽤 유용하다.
다만 반복 전략을 쓰려면 ISA 재가입 요건도 확인해야 한다. 직전 3개년 동안 금융소득종합과세 대상자가 된 적이 있으면 ISA 신규 가입이 제한될 수 있다. 또 서민형 ISA로 다시 가입하려면 소득 요건도 다시 봐야 한다.
세액공제받지 않은 자금도 활용 가치가 있다 &nbsp; ISA 만기해지자금을 연금계좌로 전환하면 반드시 &ldquo;세액공제받지 않은 자금&quot;이 생긴다. 전환금액 전체가 세액공제 대상이 되는 것이 아니기 때문이다.
예를 들어 ISA 만기자금 3,000만 원을 IRP로 전환했다고 해보자. 그해 세액공제 대상은 기본 한도 900만 원과 ISA 전환 추가 한도 300만 원을 합쳐 최대 1,200만 원이다. 나머지 1,800만 원은 세액공제받지 않은 자금으로 남는다.
이 돈은 그냥 묶인 돈처럼 보일 수 있지만, 활용 가치가 크다.
연금수령할 때 먼저 빠지고 과세되지 않는다 &nbsp; 연금계좌에서 돈을 받을 때는 재원별로 출금 순서와 과세 방식이 다르다. 세액공제받지 않은 자금은 먼저 출금되고, 과세되지 않는다. 이미 세액공제를 받지 않은 원금이기 때문이다.
이 특징은 연금수령 계획을 세울 때 도움이 된다. 노후 초기에는 여행, 의료비, 주거비 등으로 지출이 커질 수 있다. 이때 세액공제받지 않은 자금을 먼저 활용하면 연금수령 초반의 현금흐름을 더 유연하게 만들 수 있다.
급한 지출이 있을 때 중도인출 재원으로 쓸 수 있다 &nbsp; 연금계좌 안에 세액공제받지 않은 자금이 있으면 급한 목돈이 필요할 때 활용할 수 있다. 다만 계좌 종류에 따라 차이가 있다.
연금저축은 세액공제받지 않은 자금을 비교적 자유롭게 중도인출할 수 있다. 반면 IRP는 무주택자의 주택 구입 등 법에서 정한 사유가 있어야 중도인출이 가능한 경우가 많다.
그래서 ISA 만기자금을 어디로 전환할지 정할 때는 세액공제만 보지 말고, 나중에 인출 유연성까지 함께 봐야 한다. 중도인출 가능성을 중시한다면 일부를 연금저축펀드로 전환하는 방식이 더 편할 수 있다.
다음 해 세액공제받은 자금으로 전환할 수 있다 &nbsp; 세액공제받지 않은 자금은 다음 해 이후 세액공제받은 자금으로 전환하는 특례를 활용할 수 있다. 쉽게 말해 올해는 공제 한도를 초과해 세액공제를 못 받은 금액이라도, 다음 해 저축 여력이 부족할 때 세액공제 대상 금액으로 돌릴 수 있다는 뜻이다.
예를 들어 ISA 전환 후 세액공제받지 않은 자금이 2,700만 원 남아 있고, 다음 해에 새로 연금계좌에 납입할 여력이 없다면 그중 900만 원을 세액공제받은 금액으로 전환해 해당 연도 공제 한도를 채우는 식이다.
다만 세액공제 한도는 과거로 소급되지 않는다. 작년에 못 채운 한도를 올해 몰아서 적용하는 방식은 어렵다. 전환 신청도 금융회사 절차를 따라야 하므로 모바일 앱이나 영업점 안내를 확인해야 한다.
정리 &nbsp; ISA 해지는 단순히 계좌를 닫는 일이 아니다. 해지 전에 자산을 어떻게 현금화할지, 세후 수령액은 얼마인지, 연금계좌로 전환할지, 전환 후 세액공제받지 않은 자금은 어떻게 활용할지까지 한 번에 봐야 한다.
핵심만 정리하면 이렇다.
ISA 해지 전에는 보유 자산을 현금화해야 세제 혜택 적용이 쉬워진다. 팔지 않을 자산은 일반계좌로 이전할 수 있지만 ISA 세제 혜택을 받지 못할 수 있다. 연금계좌로 전환할 수 있는 금액은 세후 수령액이다. ISA 만기해지자금은 정해진 기한, 보통 60일 이내에 연금계좌로 전환해야 한다. 단순 계좌이체가 아니라 금융회사의 ISA 연금 전환 절차를 이용해야 한다. 전환금액의 10%, 최대 300만 원까지 추가 세액공제 대상이 된다. 기존 연금계좌 세액공제 한도 900만 원과 합치면 최대 1,200만 원까지 공제 대상이 될 수 있다. IRP와 연금저축펀드는 투자한도, 중도인출, 운용 가능 상품이 다르다. ISA 해지 후 재가입하면 납입한도와 비과세 한도를 새로 활용할 수 있다. 세액공제받지 않은 자금은 연금수령, 중도인출, 다음 해 세액공제 전환에 활용할 수 있다. ISA를 해지할 계획이라면 해지 신청부터 누르기보다, 먼저 &ldquo;현금화, 세후 수령액, 60일 기한, 연금계좌 선택, 재가입 여부&quot;를 순서대로 적어보는 것이 좋다. 이 순서를 놓치지 않으면 ISA의 절세 혜택을 연금자산으로 자연스럽게 이어갈 수 있다.`}).add({id:3,href:"/posts/first-second-financial-sector-difference/",title:"1금융권과 2금융권 차이, 은행과 저축은행을 고르기 전...",description:"1금융권과 2금융권의 차이를 은행법 적용 여부, 기관 종류, 예금자보호, 예금금리와 대출금리 관점에서 초보자도 이해하기 쉽게 정리했다.",content:`은행 앱에서 예금을 찾다 보면 제1금융권, 제2금융권이라는 말을 자주 보게 된다. 대출을 알아볼 때도 마찬가지다. 어떤 곳은 금리가 낮지만 심사가 까다롭고, 어떤 곳은 금리가 높지만 승인 가능성이 상대적으로 높다고 말한다. 그러다 보면 자연스럽게 이런 생각이 든다. 도대체 1금융권과 2금융권은 무엇이 다를까.
결론부터 말하면 제1금융권은 우리가 보통 &ldquo;은행&quot;이라고 부르는 기관이고, 제2금융권은 은행은 아니지만 금융 서비스를 제공하는 제도권 금융기관이다. 둘 다 돈을 맡기고 빌리는 금융 업무를 하지만, 적용받는 법, 취급하는 상품, 금리 수준, 심사 기준, 안정성에서 차이가 있다.
이 글에서는 금융권의 뜻부터 1금융권과 2금융권의 차이, 예금과 대출을 이용할 때 꼭 확인해야 할 기준까지 쉽게 정리하였다.
금융권이란 무엇인가 &nbsp; 금융권은 금융과 관련된 일을 하는 기관과 시장의 범위를 말한다. 어렵게 들리지만 핵심은 단순하다. 돈이 남는 사람에게서 돈을 맡아두고, 돈이 필요한 사람이나 기업에게 돈을 빌려주는 역할이다.
예를 들어 직장인이 월급 일부를 정기예금에 넣으면 금융기관은 그 돈을 보관하고 이자를 지급한다. 반대로 집을 사려는 사람이 주택담보대출을 받으면 금융기관은 돈을 빌려주고 이자를 받는다. 이렇게 돈을 맡는 기능을 &ldquo;수신&rdquo;, 돈을 빌려주는 기능을 &ldquo;여신&quot;이라고 한다.
금융기관을 제1금융권, 제2금융권, 제3금융권으로 나누어 부르기도 하지만, 사실 이것은 법에 딱 정해진 공식 분류명이라기보다 사람들이 금융기관을 이해하기 쉽게 나눈 표현에 가깝다. 그래도 일상생활과 금융 기사에서 자주 쓰이기 때문에 차이를 알아두면 예금, 대출, 보험, 카드 상품을 고를 때 훨씬 편하다.
제1금융권은 일반적인 은행이다 &nbsp; 제1금융권은 은행법의 적용을 받는 은행을 말한다. 우리가 일상에서 가장 익숙하게 이용하는 국민은행, 신한은행, 우리은행, 하나은행 같은 시중은행이 대표적이다. 지방은행, 외국계은행, 인터넷전문은행, 특수은행도 제1금융권에 포함된다.
인터넷전문은행도 헷갈리기 쉽다. 지점이 없고 앱으로만 이용하니 2금융권처럼 느껴질 수 있지만, 카카오뱅크, 케이뱅크, 토스뱅크는 모두 제1금융권이다. 은행법에 따라 인가를 받고 금융당국의 감독을 받는 은행이기 때문이다.
제1금융권에는 다음과 같은 기관이 있다.
구분 예시 시중은행 KB국민은행, 신한은행, 우리은행, 하나은행 등 지방은행 부산은행, 대구은행, 광주은행, 전북은행, 제주은행 등 인터넷전문은행 카카오뱅크, 케이뱅크, 토스뱅크 외국계은행 SC제일은행, 씨티은행 등 특수은행 IBK기업은행, KDB산업은행, NH농협은행, Sh수협은행 등 제1금융권의 장점은 안정성과 편의성이다. 예금, 적금, 대출, 외환, 펀드, 카드, 자동이체, 급여이체 같은 서비스를 폭넓게 이용할 수 있다. 정책 금융이나 주택청약종합저축처럼 제1금융권 중심으로 취급되는 상품도 있다.
다만 대출 심사는 비교적 까다로운 편이다. 신용점수, 소득, 재직 상태, 기존 대출, 담보 가치 등을 종합적으로 보기 때문이다. 대신 심사를 통과하면 제2금융권보다 낮은 금리로 대출을 받을 가능성이 높다.
제2금융권은 은행이 아닌 제도권 금융기관이다 &nbsp; 제2금융권은 제1금융권 은행을 제외한 금융기관을 말한다. 은행법의 적용을 받지는 않지만, 각 업종에 맞는 법과 규제를 받는 제도권 금융기관이다. 그래서 제2금융권이라고 해서 무조건 위험한 곳으로 보면 안 된다. 역할과 상품 성격이 은행과 다를 뿐이다.
제2금융권에는 저축은행, 증권회사, 보험회사, 카드회사, 캐피탈, 자산운용회사, 신협, 새마을금고, 지역농협 같은 상호금융기관이 포함된다. 우체국 금융도 은행법 적용을 받는 은행은 아니기 때문에 제2금융권으로 분류되는 경우가 많다.
제2금융권은 특정 기능에 강한 경우가 많다. 증권사는 주식과 펀드 같은 투자 상품에 강하고, 보험사는 보험 상품을 다루며, 카드사와 캐피탈은 카드 결제와 자동차 할부, 개인신용대출 같은 여신 업무를 주로 한다. 저축은행은 예금과 대출을 모두 다루지만 시중은행과는 다른 법 체계에서 운영된다.
제2금융권의 특징은 예금금리가 상대적으로 높고, 대출 심사가 제1금융권보다 덜 까다로운 경우가 많다는 점이다. 대신 대출금리도 높은 편이다. 금융기관 입장에서는 신용 위험이 더 큰 고객에게 돈을 빌려주는 경우가 많기 때문에 그 위험이 금리에 반영된다.
1금융권과 2금융권의 핵심 차이 &nbsp; 1금융권과 2금융권을 구분할 때 가장 중요한 기준은 은행법 적용 여부다. 제1금융권은 은행법의 적용을 받는 은행이고, 제2금융권은 은행법을 적용받지는 않지만 금융 관련 개별 법률에 따라 운영되는 기관이다.
차이를 표로 보면 더 쉽다.
구분 제1금융권 제2금융권 대표 기관 시중은행, 지방은행, 인터넷전문은행, 특수은행 저축은행, 증권사, 보험사, 카드사, 캐피탈, 신협, 새마을금고 등 법적 성격 은행법 적용 은행법 미적용, 업종별 개별 법률 적용 예금금리 상대적으로 낮은 편 상대적으로 높은 편 대출금리 상대적으로 낮은 편 상대적으로 높은 편 대출 심사 비교적 까다로운 편 비교적 완화된 편 취급 상품 예금, 대출, 외환, 청약, 펀드 등 폭넓음 업종별 특화 상품 중심 안정성 상대적으로 높음 기관과 상품에 따라 차이 큼 예금만 놓고 보면 2금융권의 금리가 더 매력적으로 보일 수 있다. 하지만 금리만 보고 가입하면 안 된다. 반드시 예금자보호 대상인지, 보호 한도를 넘지 않는지, 중도해지 조건은 어떤지 확인해야 한다.
대출은 반대로 봐야 한다. 제1금융권 대출이 가능하다면 금리 부담이 상대적으로 낮을 수 있다. 하지만 소득 증빙이 어렵거나 신용점수가 낮아 제1금융권 심사가 어렵다면 제2금융권을 알아보게 될 수 있다. 이때는 승인 가능성만 볼 것이 아니라 총 이자 부담, 중도상환수수료, 연체금리까지 함께 봐야 한다.
예금자보호와 금리는 꼭 같이 봐야 한다 &nbsp; 예금자보호제도는 금융기관이 영업정지나 파산 등으로 예금을 돌려주지 못할 때 예금자를 보호하기 위한 제도다. 2025년 9월 1일부터는 원금과 소정의 이자를 합해 1인당, 금융회사별 최고 1억 원까지 보호된다.
여기서 중요한 표현은 &ldquo;금융회사별&quot;이다. 예를 들어 A저축은행에 예금 원금과 이자를 합쳐 1억 2천만 원을 맡겼다면 보호 한도를 넘는 금액은 보호받지 못할 수 있다. 반면 A저축은행과 B저축은행에 각각 보호 한도 안에서 나누어 맡기면 보호 범위를 관리하기 쉽다.
다만 모든 금융상품이 예금자보호 대상은 아니다. 정기예금이나 적금은 보호 대상인 경우가 많지만, 펀드, 주식, 채권형 상품, 일부 투자성 상품은 원금 보장이 되지 않는다. 제1금융권 상품이라고 해서 모든 상품이 보호되는 것도 아니고, 제2금융권 상품이라고 해서 전부 보호되지 않는 것도 아니다. 결국 상품 설명서와 보호금융상품 여부를 직접 확인해야 한다.
예금금리도 마찬가지다. 제2금융권 정기예금 금리가 제1금융권보다 높게 보이는 경우가 있다. 이것은 고객의 돈을 더 적극적으로 유치해야 하거나, 기관의 자금 조달 비용과 영업 전략이 다르기 때문이다. 높은 금리는 장점이지만, 그만큼 보호 여부와 한도 확인이 더 중요하다.
대출금리는 더 신중해야 한다. 제2금융권 대출은 심사 문턱이 낮은 대신 금리가 높을 수 있다. 지금 당장 돈이 급하다고 월 상환액을 대충 보고 빌리면 나중에 이자 부담이 커질 수 있다. 대출은 가능 여부보다 갚을 수 있는지가 먼저다.
어떤 금융권을 선택하면 좋을까 &nbsp; 예금이라면 먼저 예금자보호 대상인지 확인하고, 보호 한도 안에서 금리를 비교하는 것이 좋다. 1금융권의 안정성과 편의성을 우선할 수도 있고, 2금융권의 상대적으로 높은 예금금리를 활용할 수도 있다. 다만 한 금융회사에 너무 큰 금액을 몰아넣기보다는 보호 한도와 만기 일정을 나누어 관리하는 편이 현실적이다.
대출이라면 제1금융권부터 확인하는 것이 일반적으로 유리하다. 같은 금액을 빌리더라도 금리가 낮으면 매달 내는 이자와 총 상환액이 크게 줄어든다. 제1금융권 승인이 어렵다면 제2금융권을 검토할 수 있지만, 이때는 금리, 한도, 상환 방식, 중도상환수수료, 연체 시 불이익까지 함께 비교해야 한다.
투자나 보험 상품을 이용할 때는 금융권 구분보다 상품의 성격이 더 중요하다. 증권사 계좌에서 예수금을 보관하는 것과 주식을 사는 것은 전혀 다르다. 보험사의 저축성 보험도 예금과 비슷해 보일 수 있지만 중도해지 환급금, 사업비, 보장 내용에 따라 실제 결과가 달라진다.
초보자라면 이렇게 기억하면 된다.
목적 먼저 볼 기준 월급 통장, 자동이체, 카드 연결 편의성과 수수료 정기예금, 적금 금리, 예금자보호 여부, 보호 한도 신용대출, 주택담보대출 총 이자 부담, 상환 가능성 투자 상품 원금 손실 가능성, 수수료, 투자 기간 보험 상품 보장 내용, 납입 기간, 해지 환급 구조 1금융권이 항상 정답이고 2금융권이 항상 나쁜 선택인 것은 아니다. 반대로 금리가 높다고 2금융권 상품이 항상 좋은 것도 아니다. 내 목적이 예금인지, 대출인지, 투자용 계좌인지에 따라 기준을 바꾸어 봐야 한다.
마무리 &nbsp; 1금융권과 2금융권의 가장 큰 차이는 은행법 적용 여부와 기관의 성격이다. 제1금융권은 은행 중심이라 안정성과 종합 금융 서비스에 강하고, 제2금융권은 저축은행, 증권사, 보험사, 카드사처럼 특정 금융 서비스에 강하다.
예금에서는 2금융권 금리가 더 높게 보일 수 있지만 예금자보호 대상과 보호 한도를 확인해야 한다. 대출에서는 2금융권이 승인 가능성은 높을 수 있지만 이자 부담이 커질 수 있으므로 총 상환액을 반드시 따져야 한다.
금융상품을 고를 때는 &ldquo;몇 금융권인가&quot;만 보지 말고, 내가 이용하려는 상품이 무엇인지부터 봐야 한다. 예금은 보호 여부, 대출은 상환 가능성, 투자 상품은 손실 가능성이 핵심이다. 이 세 가지만 놓치지 않아도 불필요한 금융 실수를 크게 줄일 수 있다.
자주 묻는 질문 &nbsp; 카카오뱅크, 케이뱅크, 토스뱅크는 1금융권인가? &nbsp; 그렇다. 카카오뱅크, 케이뱅크, 토스뱅크는 인터넷전문은행이고 제1금융권에 속한다. 영업점이 없거나 앱 중심으로 운영된다고 해서 제2금융권이 되는 것은 아니다.
저축은행은 이름에 은행이 들어가는데 왜 2금융권인가? &nbsp; 저축은행은 상호저축은행법에 따라 운영되는 금융기관이다. 이름에 은행이 들어가지만 일반 시중은행처럼 은행법을 적용받는 제1금융권 은행은 아니다. 그래서 보통 제2금융권으로 분류한다.
2금융권 예금은 무조건 위험한가? &nbsp; 무조건 위험하다고 볼 수는 없다. 다만 금융회사와 상품에 따라 안정성과 보호 여부가 다르다. 가입 전 예금자보호 대상인지 확인하고, 원금과 이자를 합쳐 금융회사별 보호 한도 안에서 관리하는 것이 좋다.`}).add({id:4,href:"/posts/high-oil-price-support-2026/",title:"2026년 고유가 피해지원금 총정리: 대상, 금액, 신...",description:"2026년 고유가 피해지원금의 의미, 지급 대상과 금액, 신청 기간, 온라인·오프라인 신청 방법, 사용기한과 사용처를 초보자도 이해하기 쉽게 정리했다.",content:`기름값이 오르면 주유비만 오르는 게 아니다. 물류비가 올라가고, 장바구니 물가도 영향을 받고, 출퇴근이나 생업에 차를 써야 하는 사람은 매달 고정비가 바로 늘어난다. 특히 소득이 빠르게 늘지 않는 상황에서 유가, 환율, 물가가 동시에 오르면 생활비 부담이 꽤 크게 느껴진다.
2026년 고유가 피해지원금은 이런 부담을 줄이기 위해 마련된 지원금이다. 행정안전부 안내 기준으로 고유가·고환율·고물가로 인한 서민층의 어려움을 완화하기 위한 목적이 있다.
이 글에서는 고유가 피해지원금이 무엇인지, 누가 받을 수 있는지, 얼마를 받는지, 언제까지 신청하고 사용할 수 있는지, 온라인 신청도 가능한지까지 한 번에 정리하였다.
고유가 피해지원금이란 무엇인가 &nbsp; 고유가 피해지원금은 국제 유가 상승과 환율, 물가 상승으로 생활비 부담이 커진 사람들을 지원하기 위한 정부 지원금이다. 이름만 보면 기름을 많이 쓰는 사람에게만 주는 지원금처럼 느껴질 수 있지만, 실제 안내 기준으로는 국민의 70%를 대상으로 하는 생활 안정 성격의 지원금에 가깝다.
핵심은 &ldquo;기름값이 올랐으니 주유비만 보전해준다&quot;가 아니다. 고유가가 생활 전반의 비용을 끌어올리기 때문에, 소득과 지역에 따라 맞춤형으로 지원하는 구조다.
국제 유가가 오르는 이유는 여러 가지가 겹친다. 산유국의 생산 조절, 중동 지역의 지정학적 불안, 원유 수요 증가, 달러 환율 상승, 물류 비용 증가 같은 요인이 함께 작용한다. 한국은 원유를 대부분 수입하기 때문에 국제 유가와 환율 변화에 민감하다. 같은 원유 가격이라도 원화 가치가 낮아지면 국내에서 체감하는 비용은 더 커질 수 있다.
그래서 고유가 피해지원금은 단순한 교통비 지원이라기보다, 고유가로 인해 커진 생활비 부담을 줄이는 임시 완충 장치로 보면 된다.
지급 대상과 지원 금액 &nbsp; 행정안전부 안내 기준으로 고유가 피해지원금 대상은 국민의 70% 다. 지원 금액은 소득 수준과 지역에 따라 달라진다. 기본적으로 기초수급자, 차상위·한부모, 소득하위 70%로 구분하고, 수도권과 비수도권 여부에 따라 금액이 다르다.
구분 수도권 비수도권 기초수급자 55만 원 60만 원 차상위·한부모 45만 원 50만 원 소득하위 70% 10만 원 15만 원 여기에 일부 지역은 추가 우대가 있다.
지역 구분 추가 또는 별도 지원 금액 인구감소지역 우대지원지역 20만 원 특별지원지역 25만 원 정리하면 1인당 지원 금액은 10만 원부터 60만 원까지 차이가 날 수 있다. 내가 어디에 해당하는지는 소득 구간, 복지 대상 여부, 주소지 지역에 따라 달라지므로 신청 단계에서 확인하는 게 가장 정확하다.
중요한 점은 이 지원금이 현금으로 자유롭게 입금되는 방식만 있는 게 아니라는 것이다. 지급수단은 지역사랑상품권, 신용·체크카드, 선불카드 중에서 선택하는 방식이다.
신청 기간과 사용 기간 &nbsp; 2026년 고유가 피해지원금은 대상별로 신청·지급 기간이 나뉜다. 현재 날짜인 2026년 5월 3일 기준으로 보면 기초·차상위 대상 1차 신청 기간이 진행 중이다.
대상 신청·지급 기간 기초수급자·차상위·한부모 1차 2026년 4월 27일 월요일 ~ 2026년 5월 8일 금요일 기초수급자·차상위·한부모 2차 2026년 5월 18일 월요일 ~ 2026년 7월 3일 금요일 국민의 70% 2차 2026년 5월 18일 월요일 ~ 2026년 7월 3일 금요일 다만 기초수급자·차상위·한부모 대상자가 1차 기간에 이미 신청해서 지급받았다면 2차 기간에는 다시 신청하거나 지급받을 수 없다. 같은 지원금을 중복으로 받는 구조가 아니라는 뜻이다.
사용기한도 중요하다. 고유가 피해지원금은 2026년 8월 31일 월요일까지 사용해야 한다. 1차와 2차 모두 사용기한은 같다.
지원금을 받았다고 끝이 아니다. 사용기한 안에 써야 실제 생활비 절감 효과가 생긴다. 기한을 놓치면 혜택을 제대로 활용하지 못할 수 있으니, 지급받은 뒤에는 먼저 사용 가능한 매장과 남은 기간을 확인하는 게 좋다.
신청 방법: 온라인 신청도 가능할까 &nbsp; 고유가 피해지원금은 온라인과 오프라인 신청이 모두 안내되어 있다.
온라인 신청은 카드사, 지역사랑상품권 앱과 홈페이지를 통해 가능하다. 신용·체크카드로 지급받고 싶다면 본인이 사용하는 카드사의 안내를 확인하면 된다. 지역사랑상품권으로 받고 싶다면 해당 지역의 지역사랑상품권 앱이나 홈페이지를 확인하는 방식이다.
오프라인 신청은 주민센터와 은행 영업점에서 가능하다. 온라인 신청이 어렵거나 본인 인증, 앱 사용이 익숙하지 않다면 주소지 주민센터를 이용하는 편이 더 편할 수 있다.
신청 전에 미리 확인하면 좋은 것은 다음과 같다.
본인 주소지가 어디로 등록되어 있는지 내가 기초수급자, 차상위·한부모, 소득하위 70% 중 어디에 해당하는지 신용·체크카드, 선불카드, 지역사랑상품권 중 어떤 방식이 편한지 자주 가는 매장이 사용 가능한 곳인지 사용기한인 2026년 8월 31일까지 쓸 계획이 있는지 온라인 신청이 가능하다고 해도 모든 사람이 같은 앱에서 신청하는 구조는 아닐 수 있다. 지급수단에 따라 카드사 앱, 카드사 홈페이지, 지역사랑상품권 앱 등이 달라질 수 있으니 안내 문구를 잘 확인해야 한다.
어디에서 어떻게 사용할 수 있을까 &nbsp; 고유가 피해지원금은 신청자 본인의 주소지 기준으로 사용할 수 있다. 사용지역은 특·광역시 및 시·군 단위로 안내되어 있다. 예를 들어 주소지가 특정 시에 있다면 그 지역 안에서 쓰는 방식이라고 이해하면 쉽다.
사용처는 지급수단에 따라 조금 다르다.
지급수단 사용처 지역사랑상품권 지역사랑상품권 가맹점 신용·체크카드·선불카드 사용불가 업종을 제외한 매출액 30억 원 이하 소상공인 매장 유흥·사행업종 등은 사용이 제한된다. 또 대형마트, 백화점, 일부 온라인 쇼핑몰처럼 정책 취지와 맞지 않는 곳은 제한될 가능성이 높다. 정확한 사용 가능 여부는 지급받은 카드사나 지역사랑상품권 앱에서 확인하는 게 좋다.
어떻게 쓰면 좋을까. 지원금은 생활비 부담을 낮추는 데 쓰는 것이 가장 현실적이다.
동네 마트에서 식료품 구입 전통시장이나 지역 가맹점 이용 주유비나 차량 관련 지출에 활용 가능한지 확인 아이 학용품, 생필품, 외식비 일부로 사용 평소 미루던 생활 필수 지출에 사용 고유가 피해지원금은 &ldquo;공짜 돈&quot;처럼 쓰기보다, 이번 달 카드값이나 생활비 부담을 줄이는 용도로 쓰는 게 좋다. 특히 기름값 때문에 교통비가 늘어난 가구라면 주유소 사용 가능 여부를 먼저 확인해보는 것도 방법이다.
신청할 때 주의할 점 &nbsp; 고유가 피해지원금은 기간과 사용처가 정해져 있다. 그래서 받을 수 있는지 확인하는 것만큼, 제때 신청하고 제때 쓰는 것이 중요하다.
첫째, 신청 기간을 놓치지 않아야 한다. 기초수급자·차상위·한부모 1차 신청은 2026년 5월 8일 금요일까지다. 2차 신청은 2026년 5월 18일 월요일부터 2026년 7월 3일 금요일까지다.
둘째, 중복 지급 여부를 확인해야 한다. 1차 기간에 이미 신청·지급받았다면 2차에는 다시 받을 수 없다.
셋째, 사용기한을 기억해야 한다. 2026년 8월 31일 월요일까지 사용해야 하므로, 지급받은 뒤 너무 오래 묵혀두지 않는 게 좋다.
넷째, 문자나 링크 사기를 조심해야 한다. 지원금 신청을 빌미로 개인정보, 계좌 비밀번호, 카드 비밀번호를 요구하는 메시지는 의심해야 한다. 신청은 카드사, 지역사랑상품권 공식 앱과 홈페이지, 주민센터, 은행 영업점처럼 공식 경로를 이용하는 게 안전하다.
문의가 필요하면 행정안전부 안내에 있는 고유가 피해지원금 전담 콜센터 1670-2626을 활용할 수 있다.
정리 &nbsp; 고유가 피해지원금은 2026년 고유가·고환율·고물가로 커진 생활비 부담을 줄이기 위한 지원금이다. 국민의 70%를 대상으로 하며, 소득과 지역에 따라 1인당 10만 원부터 60만 원까지 차등 지원된다.
핵심만 다시 보면 이렇다.
지급 대상은 국민의 70%다. 지원 금액은 1인당 10만 원~60만 원이다. 기초수급자·차상위·한부모 1차 신청은 2026년 4월 27일부터 5월 8일까지다. 2차 신청은 2026년 5월 18일부터 7월 3일까지다. 사용기한은 2026년 8월 31일까지다. 온라인 신청은 카드사, 지역사랑상품권 앱과 홈페이지에서 가능하다. 오프라인 신청은 주민센터와 은행 영업점에서 가능하다. 지원금은 신청하지 않으면 받을 수 없고, 받아도 기한 안에 쓰지 않으면 의미가 줄어든다. 대상 가능성이 있다면 신청 기간과 지급수단부터 먼저 확인해보자.
자주 묻는 질문 &nbsp; 고유가 피해지원금은 누구나 받을 수 있을까? &nbsp; 전 국민 대상은 아니고, 행정안전부 안내 기준으로 국민의 70%가 대상이다. 기초수급자, 차상위·한부모, 소득하위 70% 여부와 지역에 따라 금액이 달라진다.
온라인 신청도 가능할까? &nbsp; 가능하다. 카드사 앱과 홈페이지, 지역사랑상품권 앱과 홈페이지를 통한 온라인 신청이 안내되어 있다. 온라인 신청이 어렵다면 주민센터나 은행 영업점에서 오프라인으로 신청할 수 있다.
지원금은 아무 곳에서나 쓸 수 있을까? &nbsp; 아니다. 신청자 본인의 주소지 지역에서 사용할 수 있고, 지급수단별 사용처가 정해져 있다. 지역사랑상품권은 가맹점에서, 신용·체크카드와 선불카드는 사용불가 업종을 제외한 매출액 30억 원 이하 소상공인 매장에서 사용할 수 있다.`}).add({id:5,href:"/posts/may-2026-stock-market-trends/",title:"2026년 최신 주식 시장 동향, AI 반도체와 전력 ...",description:"2026년 주식 시장을 움직이는 AI 반도체, 전력 인프라, 원전, 유가 하락, 미국 정치 이벤트를 초보 투자자 관점에서 정리하였다.",content:`주식 투자를 하려고 하면 가장 먼저 드는 고민이 있다. &ldquo;지금은 어떤 산업을 봐야 할까?&ldquo;라는 질문이다. 뉴스를 보면 AI, 반도체, 전력망, 원전, 유가, 금리, 미국 정치 이야기까지 한꺼번에 쏟아진다. 하나씩 보면 다 중요해 보이지만, 막상 내 돈을 투자하려고 하면 어디서부터 봐야 할지 헷갈린다.
2026년 현재 주식 시장은 크게 두 축으로 움직이고 있다. 하나는 AI가 실제 돈을 벌기 시작했는지 확인하려는 흐름이고, 다른 하나는 AI를 돌리기 위해 필요한 전력과 인프라에 돈이 몰리는 흐름이다. 여기에 중동 긴장 완화와 유가 하락 기대, 미국 중간선거를 앞둔 정책 불확실성이 더해져 시장의 방향을 만들고 있다.
이 글은 특정 종목을 추천하려는 글이 아니다. 초보 투자자가 최근 시장을 이해할 때 어떤 산업과 변수를 봐야 하는지 정리한 글이다. 주식은 결국 &ldquo;좋아 보이는 이야기&quot;보다 &ldquo;실제로 돈이 어디서 벌리고 있는가&quot;를 보는 싸움에 가깝다.
2026년 주식 시장의 핵심 흐름 &nbsp; 2026년 시장의 중심에는 여전히 AI가 있다. 다만 2023년과 2024년에 AI가 막연한 기대감으로 움직였다면, 지금은 조금 더 까다로운 질문을 던지는 시기다.
&ldquo;AI가 대단하다&quot;는 말만으로는 부족하다. 이제 투자자는 이런 질문을 한다.
질문 투자자가 확인하려는 것 AI 인프라 투자가 계속 늘어나는가? 반도체, 서버, 전력설비 수요 AI 기업이 실제 매출과 이익을 내는가? 소프트웨어와 플랫폼 기업의 수익화 전력 공급이 AI 성장 속도를 따라가는가? 전력망, 구리, 원전, 데이터센터 투자 유가와 금리가 안정되는가? 기업 비용과 증시 밸류에이션 정치 이벤트가 정책 방향을 바꾸는가? 세금, 보조금, 규제, 국방, 에너지 정책 결국 시장은 &ldquo;AI 기대감&quot;에서 &ldquo;AI 수익화와 인프라 병목&quot;으로 이동하고 있다. 단순히 AI라는 단어가 붙은 기업보다, AI 투자 사이클에서 실제 매출이 확인되는 기업을 더 선호하는 분위기다.
반대로 조심해야 할 부분도 있다. AI 관련 설비투자가 너무 빠르게 늘어나면 비용 부담도 커진다. 빅테크가 데이터센터와 반도체에 막대한 돈을 쓰고 있는데, 그 돈이 충분한 이익으로 돌아오지 못하면 주가는 흔들릴 수 있다. 그래서 2026년 시장은 AI에 대해 낙관적이지만, 아무 종목이나 오르는 장은 아니다.
AI 반도체는 여전히 시장의 중심이다 &nbsp; AI 시장을 이야기할 때 가장 먼저 봐야 할 산업은 반도체다. AI 모델을 학습하고 서비스로 제공하려면 GPU, HBM, 네트워크 칩, 고성능 메모리, 첨단 패키징이 필요하다. AI가 커질수록 반도체 수요도 같이 커지는 구조다.
Gartner는 2026년 전 세계 반도체 매출이 1조 3,000억 달러를 넘어설 것으로 전망했다. AI 처리, 데이터센터 네트워킹, 전력, 메모리 가격 상승이 성장의 핵심 이유로 제시되었다. Deloitte도 2026년 반도체 산업이 AI 인프라 붐을 중심으로 사상 최대 규모에 도달할 수 있다고 분석했다.
여기서 중요한 것은 반도체 안에서도 온도 차가 크다는 점이다. 모든 반도체가 같은 속도로 좋아지는 게 아니다. AI에 직접 연결되는 고성능 칩과 메모리는 강하지만, 스마트폰, 자동차, 일반 PC용 반도체는 상대적으로 흐름이 약할 수 있다.
HBM4와 삼성전자·SK하이닉스 &nbsp; 한국 투자자 입장에서 가장 익숙한 키워드는 HBM이다. HBM은 고대역폭 메모리로, AI 가속기와 함께 쓰이는 핵심 메모리다. AI 서버가 빠르게 늘어나면서 HBM 수요가 커졌고, 삼성전자와 SK하이닉스의 경쟁도 더 중요해졌다.
2026년에는 HBM4가 중요한 관전 포인트다. HBM3E까지는 누가 더 빨리 공급하고 인증받느냐가 중요했다면, HBM4부터는 성능, 수율, 고객사 확보, 첨단 패키징 역량까지 함께 봐야 한다. 단순히 &ldquo;HBM을 만든다&quot;가 아니라 &ldquo;고객사가 원하는 품질과 물량을 안정적으로 공급할 수 있느냐&quot;가 주가의 핵심이 된다.
초보 투자자는 반도체 뉴스를 볼 때 매출 성장률만 보지 말고 아래 질문도 함께 보는 것이 좋다.
체크포인트 봐야 하는 이유 HBM 공급 계약 실제 매출로 이어질 가능성 수율 개선 이익률과 납기 안정성 고객사 다변화 특정 고객 의존도 완화 설비투자 규모 미래 성장과 단기 비용 부담 메모리 가격 실적 개선 속도 반도체는 좋은 산업이지만 변동성이 큰 산업이다. 지금처럼 수요가 강한 시기에도 주가가 먼저 많이 오르면 작은 실적 실망에도 크게 흔들릴 수 있다.
AI 다음 수혜는 전력 인프라와 원전이다 &nbsp; AI가 커질수록 같이 커지는 문제가 있다. 전기다. 데이터센터는 엄청난 전력을 사용한다. AI 모델을 학습할 때도 전기가 필요하고, 실제 서비스로 추론을 돌릴 때도 계속 전기가 들어간다. 그래서 시장은 이제 반도체 다음 단계로 전력 인프라를 보기 시작했다.
전력 인프라에는 변압기, 전선, 전력기기, 해저케이블, 송배전망, 데이터센터 전력 설비가 포함된다. AI 서버가 많아져도 전기를 안정적으로 공급하지 못하면 데이터센터를 늘릴 수 없다. 이 때문에 전력망 투자는 AI 성장의 숨은 병목으로 평가된다.
Evelyn Partners의 2026년 투자 전망도 AI와 전기화가 구리와 금속 수요를 밀어 올리고 있다고 설명한다. 데이터센터, 전력망, 냉각 시스템, 송배전 설비에는 많은 구리와 금속이 들어간다. AI 투자가 계속된다면 반도체뿐 아니라 &ldquo;전기를 전달하는 기업&quot;도 같이 봐야 하는 이유다.
국내에서는 전력설비, 전선, 해저케이블 관련 기업들이 이런 흐름과 연결된다. 예를 들어 변압기, 전력기기, 전선, 해저케이블을 만드는 기업은 AI 데이터센터 증설, 노후 전력망 교체, 신재생에너지 연결망 확대에서 수주 기회를 얻을 수 있다.
원전과 SMR이 다시 주목받는 이유 &nbsp; AI 전력 수요가 커지면서 원전도 다시 시장의 관심을 받고 있다. 태양광과 풍력은 중요한 에너지원이지만, 날씨와 시간대에 따라 발전량이 달라진다. 데이터센터는 24시간 안정적인 전력이 필요하다. 이 때문에 안정적인 기저 전원으로 원전이 재평가되고 있다.
특히 SMR, 즉 소형모듈원전은 장기 테마로 자주 언급된다. 아직 상용화와 경제성 검증이 남아 있지만, AI 데이터센터와 탄소중립을 동시에 이야기할 때 빠지지 않는 키워드가 되었다.
다만 원전은 단기간 실적보다 정책, 인허가, 수주, 건설 기간이 더 중요하다. 주가가 기대감으로 먼저 오를 수 있지만, 실제 매출과 이익은 긴 시간을 두고 나타난다. 그래서 원전 관련주는 단기 급등을 따라가기보다 정책 방향과 수주 현실성을 함께 봐야 한다.
유가 하락과 지정학 리스크 완화가 주는 신호 &nbsp; 2026년 초 시장을 흔든 큰 변수 중 하나는 중동 리스크와 에너지 가격이었다. 에너지 가격이 오르면 기업 비용이 올라가고, 물가가 다시 불안해질 수 있다. 물가가 불안하면 금리 인하 기대가 약해지고, 성장주 밸류에이션에도 부담이 생긴다.
5월에는 미국과 이란의 협상 기대, 중동 긴장 완화 가능성, 국제 유가 하락이 시장에 긍정적인 신호로 받아들여지고 있다. 유가가 안정되면 인플레이션 부담이 줄어들고, 기업 이익에도 도움이 될 수 있다.
유가 하락의 수혜를 볼 수 있는 업종은 대체로 에너지 비용 비중이 큰 산업이다.
업종 유가 하락이 긍정적인 이유 항공 항공유 비용 부담 감소 운송 물류비와 연료비 부담 완화 화학 원재료와 에너지 비용 안정 소비재 물가 부담 완화로 소비 심리 개선 가능 하지만 유가 하락이 항상 좋은 것만은 아니다. 경기 둔화 때문에 유가가 떨어지는 것이라면 이야기가 달라진다. 수요가 약해서 유가가 떨어지는 경우에는 기업 매출 전망도 함께 나빠질 수 있다.
그래서 유가를 볼 때는 &ldquo;왜 떨어지는가&quot;를 함께 봐야 한다. 지정학 리스크 완화로 떨어지는 유가는 시장에 긍정적일 수 있지만, 경기 침체 우려로 떨어지는 유가는 오히려 경고 신호가 될 수 있다.
미국 중간선거와 정책 테마도 봐야 한다 &nbsp; 2026년 11월에는 미국 중간선거가 예정되어 있다. 선거가 가까워질수록 시장은 정책 변화 가능성을 가격에 반영하기 시작한다. 세금, 친환경 보조금, 국방비, 헬스케어 규제, 금융 규제, 에너지 정책 같은 이슈가 업종별 주가를 흔들 수 있다.
정치 테마는 단기적으로 강하게 움직일 수 있지만, 초보 투자자에게는 위험한 면도 있다. 뉴스 한 줄에 주가가 급등락하고, 실제 정책으로 이어지지 않는 경우도 많기 때문이다.
중간선거를 투자 관점에서 볼 때는 &ldquo;누가 이긴다&quot;보다 &ldquo;어떤 정책이 어떤 업종의 이익에 영향을 주는가&quot;를 보는 편이 낫다.
예를 들어 세금 감면과 규제 완화 기대가 커지면 금융, 산업재, 에너지 업종이 주목받을 수 있다. 반대로 친환경 보조금과 전기차 지원 정책이 강화될 것이라는 기대가 커지면 신재생에너지, 전기차, 배터리 관련주가 관심을 받을 수 있다.
다만 정책 테마는 실적보다 기대감이 앞서는 경우가 많다. 테마가 뜨겁다고 해서 기업의 매출과 이익이 바로 좋아지는 것은 아니다. 그래서 정치 테마는 포트폴리오의 중심이라기보다 변동성을 활용하는 보조 전략 정도로 보는 것이 현실적이다.
초보 투자자는 어떤 순서로 시장을 보면 좋을까 &nbsp; 2026년 시장을 보면 투자하고 싶은 산업이 많아 보인다. AI 반도체도 좋아 보이고, 전력 인프라도 좋아 보이고, 원전도 장기적으로 매력 있어 보인다. 하지만 모든 테마를 한꺼번에 따라가면 오히려 판단이 흐려진다.
초보 투자자는 아래 순서로 보는 것이 좋다.
시장의 큰 흐름을 먼저 본다. 지금은 AI 수익화, 반도체, 전력 인프라, 유가 안정이 핵심이다. 업종 안에서 실제 매출이 늘어나는 기업을 찾는다. 테마 이름보다 실적이 중요하다. 이미 주가가 너무 많이 올랐는지 확인한다. 좋은 산업도 비싸게 사면 수익률이 낮아질 수 있다. 한 종목에 몰아넣지 않는다. 반도체, 인프라, 방어주, 현금 비중을 나누는 것이 필요하다. 투자 기간을 정한다. 단기 테마 매매인지, 장기 산업 성장에 투자하는지에 따라 판단 기준이 달라진다. 내가 지금 투자를 고민한다면 가장 먼저 볼 것은 &ldquo;AI가 실제로 돈이 되는 구간이 어디인가&quot;다. 반도체는 이미 중심에 있고, 전력 인프라는 AI 성장의 필수 조건이 되고 있다. 다만 주가가 많이 오른 종목은 기대가 이미 반영되어 있을 수 있으니 무리해서 따라가기보다 조정 구간과 실적 확인을 같이 보는 편이 낫다.
정리 &nbsp; 2026년 주식 시장은 AI 반도체와 전력 인프라를 중심으로 움직이고 있다. 반도체는 HBM과 AI 가속기 수요가 핵심이고, 전력 인프라는 데이터센터 증설과 전력망 투자에서 기회가 나온다. 원전과 SMR은 장기 테마로 다시 주목받고 있으며, 유가 하락과 지정학 리스크 완화는 시장 심리에 긍정적인 영향을 줄 수 있다.
하지만 모든 테마가 좋은 투자처가 되는 것은 아니다. 이미 많이 오른 종목은 작은 실망에도 크게 흔들릴 수 있고, 정책 테마는 기대감만으로 움직이다가 빠르게 꺼질 수 있다.
초보 투자자라면 &ldquo;어떤 산업이 뜨는가&quot;보다 &ldquo;그 산업에서 실제 이익을 내는 기업은 어디인가&quot;를 먼저 봐야 한다. 2026년 시장의 핵심은 AI라는 단어 자체가 아니라, AI를 통해 매출과 현금흐름을 만드는 기업을 구분하는 것이다.
자주 묻는 질문 &nbsp; 2026년에는 AI 반도체만 보면 될까? &nbsp; AI 반도체는 여전히 핵심 테마다. 하지만 이미 기대가 많이 반영된 종목도 많다. 반도체와 함께 전력 인프라, 구리, 원전, 데이터센터 관련 기업처럼 AI 성장에 필요한 주변 산업도 함께 보는 것이 좋다.
전력 인프라 관련주는 왜 AI 수혜주로 불릴까? &nbsp; AI 데이터센터는 많은 전기를 사용한다. 서버와 반도체가 있어도 전력망, 변압기, 전선, 냉각 설비가 부족하면 데이터센터를 제대로 운영하기 어렵다. 그래서 전력설비와 전선, 원전 관련 기업이 AI의 숨은 수혜주로 평가된다.
지금 같은 시장에서 초보자는 어떻게 투자해야 할까? &nbsp; 한 가지 테마에 몰아넣기보다 분산해서 접근하는 것이 좋다. AI 반도체, 전력 인프라, 우량 지수 ETF, 현금 비중을 나누고, 급등한 종목은 실적과 밸류에이션을 확인한 뒤 접근하는 편이 안전하다.`}).add({id:6,href:"/about/",title:"About Me",description:"Money is a great servant but a bad master.",content:`지금까지 나는 &lsquo;대출은 절대 받으면 안 되는 것&rsquo;, &lsquo;주식은 손실 위험이 크니 멀리해야 하는 것&rsquo;, &lsquo;본인이 관리만 잘한다면 연금은 불필요한 것&rsquo;이라 굳게 믿어왔다. 특히 인구 감소가 시작되면 주택 가격은 결국 무너질 것이라 확신했다.
그러나 세월이 흘러 나이가 들고 보니, 이러한 믿음들이 얼마나 단편적이고 무지한 생각이었는지 깨닫게 되었다. 때로는 과거의 내 자신이 부끄러워 불쾌감이 느껴질 정도다.
도대체 이 바보 같은 생각들은 어디서부터 잘못되었까? &nbsp; 기억을 거슬러 올라가면 유년 시절의 부모님이 떠오른다. 우리 부모 세대는 자녀가 돈에 관심을 가지면 &ldquo;너희는 몰라도 되니 공부나 열심히 해라&quot;라고 말씀하시곤 했다. 아마도 어린 나이에 돈을 알면 황금만능주의에 빠지거나 돈의 노예가 될까 염려하셨던 마음이었을 것이다. 하지만 그 선의의 가르침이 결과적으로는 돈에 대해 입을 닫게 만드는 일종의 &lsquo;가스라이팅&rsquo;이 되어버린 건 아닐까 조심스럽게 추측해 본다.
그 가르침을 충실히 따른 대가는 혹독했다. 오로지 &lsquo;저축만이 살길&rsquo;이라 믿으며 소득의 대부분을 은행에 맡겼고, 쥐꼬리만한 이자를 받으며 소박한 행복에 만족하며 살아왔다.
변화는 위기감에서 시작되었다. &nbsp; 현재 전세로 거주 중인 아파트 매매가가 최근 2년 사이 2~3억 원이나 오르는 것을 목격하며 큰 충격을 받았다. 이대로라면 지금 사는 동네에서조차 밀려나겠다는 위기감이 엄습했다. 결국 저축한 돈에 대출을 더해 주택을 매수하기로 결심하며 나의 &lsquo;금융 공부&rsquo;는 시작되었다.
대출 이자율을 0.1%라도 낮추기 위해 발품을 팔다 보니 자연스럽게 적금 혜택이 보였고, 꼬리에 꼬리를 물듯 연금저축, IRP, ISA, 주식, ETF 같은 금융 용어들이 눈에 들어오기 시작했다. 공부를 하면 할수록 그동안 내가 얼마나 무지했는지, 이른바 &lsquo;금융 문맹&rsquo;이었음을 처절하게 인정할 수밖에 없었다.
늦었다고 생각할 때가 가장 빠른 때다. &nbsp; 관련 서적들을 읽으며 받은 충격은 말로 다 할 수 없다. 남들보다 한참 늦었다는 후회가 밀려오기도 한다. 하지만 흐르는 세월을 되돌릴 수는 없는 법. 이제라도 정신을 차리고 세상의 흐름을 제대로 배워보려 한다.
그래서 용기를 내어 이 사이트를 하나 개설했다.
money.devkuma.com &nbsp; 주제는 아주 노골적으로 &lsquo;돈&rsquo; 이다. 금융, 경제, 대출, 주식, 세금, 부동산 등 자본주의 시대를 살아가기 위해 필수적인 지식들을 하나하나 쌓아갈 예정이다. 늦은 만큼 더 치열하게 흡수하고 기록하며, 더 이상 무지가 부끄러움이 되지 않도록 나만의 경제 지도를 그려나가려 한다.`}).add({id:7,href:"/posts/bis-capital-ratio/",title:"BIS 비율이란? 은행 건전성을 보는 자본 적정성 지표...",description:"BIS 비율의 뜻과 계산 공식, 위험가중자산과 자기자본의 의미, 은행 건전성 평가에서 중요한 이유와 한계를 초보자도 이해하기 쉽게 정리했다.",content:`은행은 평소에는 안전해 보인다. 예금을 받고, 대출을 해주고, 이자를 받는 구조라 단순해 보이기도 한다. 하지만 은행의 자산 대부분은 대출과 투자자산이다. 경기 침체가 오거나 부동산 가격이 급락하거나 기업이 대출을 갚지 못하면 은행도 손실을 볼 수 있다.
이때 중요한 질문이 생긴다. &ldquo;은행이 손실을 감당할 만큼 충분한 자본을 갖고 있는가?&rdquo; 이 질문에 답하기 위해 쓰는 대표적인 지표가 BIS 비율이다.
BIS 비율은 은행의 자기자본을 위험가중자산으로 나눈 비율이다. 쉽게 말하면 은행이 위험한 자산을 얼마나 갖고 있고, 그 위험을 버틸 자기자본은 얼마나 준비했는지 보는 지표다. 은행의 체력을 보는 숫자라고 이해하면 된다.
BIS 비율이란 무엇인가 &nbsp; BIS 비율은 은행의 자본 적정성을 평가하는 국제 기준이다. 여기서 자본 적정성이란 은행이 예상치 못한 손실을 감당할 만큼 충분한 자기자본을 가지고 있는지를 뜻한다.
공식은 단순하다.
BIS 비율 = 자기자본 / 위험가중자산 x 100예를 들어 어떤 은행의 자기자본이 1,000억 원이고 위험가중자산이 1조 원이라면 BIS 비율은 10%다.
1,000억 원 / 1조 원 x 100 = 10%숫자만 보면 어렵지 않다. 핵심은 분자인 자기자본과 분모인 위험가중자산을 이해하는 것이다.
자기자본은 은행이 손실을 흡수할 수 있는 자기 돈에 가깝다. 자본금, 이익잉여금, 일부 보완자본 등이 포함된다. 은행이 대출 부실이나 투자 손실을 입었을 때 먼저 버팀목이 되는 부분이다.
위험가중자산은 은행이 가진 자산을 위험도에 따라 다시 계산한 금액이다. 은행이 보유한 모든 자산을 똑같이 위험하다고 보지 않는다. 안전한 자산은 낮은 가중치를 적용하고, 위험한 자산은 높은 가중치를 적용한다.
예를 들어 정부가 발행한 국채는 상대적으로 안전하다고 평가되어 위험가중치가 낮을 수 있다. 반대로 일반 기업 대출이나 신용도가 낮은 자산은 위험가중치가 높게 적용될 수 있다. 그래서 같은 1조 원의 자산을 가진 은행이라도 자산 구성이 다르면 위험가중자산은 달라진다.
왜 BIS 비율이 필요할까 &nbsp; 은행은 일반 기업과 다르다. 은행 하나가 부실해지면 그 은행만의 문제가 아니라 금융시장 전체로 불안이 번질 수 있다. 예금자는 돈을 찾으려 하고, 다른 은행도 서로 믿지 못하게 되고, 기업과 가계는 대출을 받기 어려워질 수 있다.
은행이 충분한 자본을 갖고 있어야 하는 이유가 여기에 있다. 손실이 발생해도 자기자본으로 일정 부분을 흡수할 수 있어야 예금자와 투자자의 불안이 줄어든다.
BIS 비율은 은행이 과도하게 위험을 떠안지 못하게 만드는 장치이기도 하다. 은행이 위험한 대출과 투자를 많이 늘리면 위험가중자산이 커진다. 그러면 BIS 비율을 유지하려면 자기자본도 더 많이 쌓아야 한다. 결국 은행이 무리하게 자산을 키우는 것을 제한하는 효과가 있다.
또 BIS 비율은 은행 간 비교를 가능하게 한다. 단순히 총자산이 큰 은행이 안전한 것은 아니다. 자산이 커도 위험한 대출이 많고 자기자본이 부족하면 위기에 약할 수 있다. 반대로 자산 규모가 작아도 자본이 충분하고 위험 관리가 잘되어 있으면 건전성이 높게 평가될 수 있다.
그래서 BIS 비율은 예금자, 투자자, 금융당국 모두가 보는 중요한 지표다. 예금자는 은행의 안정성을 가늠할 수 있고, 투자자는 은행주의 리스크를 판단할 수 있으며, 금융당국은 금융시스템 전체의 위험을 관리할 수 있다.
BIS 비율은 어떻게 도입되었을까 &nbsp; BIS 비율은 국제결제은행(BIS) 산하 바젤은행감독위원회에서 마련한 자본 규제와 연결되어 있다. 은행이 국경을 넘어 영업하고 금융시장이 서로 연결되면서, 각국 은행의 건전성을 비교할 수 있는 공통 기준이 필요해졌다.
1988년에 도입된 바젤 I은 은행의 신용위험을 중심으로 최소 자기자본 기준을 제시했다. 흔히 말하는 &ldquo;BIS 비율 8%&ldquo;라는 기준도 이 흐름에서 널리 알려졌다. 은행이 위험가중자산 대비 일정 수준 이상의 자기자본을 갖추도록 요구한 것이다.
이후 금융상품이 복잡해지고 은행의 위험 관리 방식도 달라지면서 규제는 바젤 II, 바젤 III로 발전했다. 특히 2008년 글로벌 금융위기 이후에는 은행이 겉으로는 수익성이 좋아 보여도 실제로는 레버리지가 높고 손실 흡수 능력이 약할 수 있다는 점이 드러났다.
그래서 바젤 III에서는 보통주자본, 기본자본, 총자본 같은 자본의 질을 더 엄격하게 보고, 레버리지 비율과 유동성 규제도 함께 강화했다. 단순히 자본이 많아 보이는 것보다 실제 위기 때 버틸 수 있는 좋은 자본을 충분히 갖고 있는지가 중요해진 것이다.
초보자 입장에서는 세부 규제 이름을 모두 외울 필요는 없다. 핵심은 금융위기를 겪으면서 &ldquo;은행은 위험한 자산을 많이 가질수록 그만큼 더 튼튼한 자본을 쌓아야 한다&quot;는 방향으로 규제가 발전해 왔다는 점이다.
BIS 비율 계산에서 중요한 두 가지 &nbsp; BIS 비율을 제대로 이해하려면 자기자본과 위험가중자산을 조금 더 구체적으로 봐야 한다.
자기자본은 손실을 흡수하는 완충장치다 &nbsp; 은행의 자기자본은 위기 때 손실을 흡수하는 완충장치다. 대출이 부실화되거나 투자자산 가격이 떨어지면 은행은 손실을 인식해야 한다. 이 손실을 감당할 자기자본이 충분하면 은행은 계속 영업할 수 있다.
반대로 자기자본이 너무 얇으면 작은 손실에도 은행의 신뢰가 흔들릴 수 있다. 예금자는 돈을 빼려고 하고, 투자자는 주식을 팔고, 금융기관끼리 돈을 빌려주는 시장도 얼어붙을 수 있다.
다만 모든 자본이 같은 품질은 아니다. 위기 때 바로 손실을 흡수할 수 있는 보통주자본이 가장 강한 자본으로 평가된다. 후순위채처럼 일정 조건에서 자본으로 인정되는 항목도 있지만, 실제 안정성은 자본의 종류에 따라 다르다.
위험가중자산은 자산의 위험도를 반영한다 &nbsp; 위험가중자산은 은행 자산을 위험도에 맞게 조정한 금액이다. 은행의 총자산이 100조 원이라고 해서 전부 같은 위험을 가진 것은 아니다.
예를 들어 현금이나 우량 국채는 손실 가능성이 낮다. 반면 신용등급이 낮은 기업 대출, 부동산 프로젝트파이낸싱, 고위험 투자상품은 손실 가능성이 높다. 위험가중자산은 이런 차이를 반영해 계산한다.
간단한 예를 들어보자.
자산 금액 위험가중치 위험가중자산 현금성 자산 1,000억 원 0% 0억 원 우량 담보대출 1,000억 원 50% 500억 원 일반 기업대출 1,000억 원 100% 1,000억 원 같은 1,000억 원이라도 위험가중치가 다르면 BIS 비율 계산에 반영되는 금액이 달라진다. 위험한 자산을 많이 가질수록 분모가 커지고, BIS 비율은 낮아지기 쉽다.
BIS 비율이 높으면 무조건 좋은 은행일까 &nbsp; BIS 비율이 높다는 것은 기본적으로 긍정적인 신호다. 은행이 위험가중자산에 비해 충분한 자본을 갖고 있다는 뜻이기 때문이다. 하지만 BIS 비율 하나만 보고 은행을 완전히 판단하면 안 된다.
첫째, BIS 비율이 높아도 수익성이 낮을 수 있다. 은행이 대출을 너무 보수적으로 운영하거나 자본을 많이 쌓아두면 안정성은 높아질 수 있지만, 수익률은 낮아질 수 있다. 투자자 입장에서는 안정성과 수익성을 함께 봐야 한다.
둘째, 위험가중자산 계산이 실제 위험을 완벽하게 반영하지 못할 수 있다. 금융상품이 복잡해지면 겉으로 보이는 위험가중치보다 실제 위험이 더 클 수 있다. 특정 산업이나 부동산 시장에 대출이 집중되어 있다면 위기 때 손실이 한꺼번에 커질 수도 있다.
셋째, 유동성 문제는 BIS 비율만으로 충분히 보이지 않는다. 은행이 자본은 충분해 보여도 단기적으로 현금이 부족하면 위기를 겪을 수 있다. 예금 인출이 급증하거나 시장에서 자금을 조달하기 어려워지면 자본비율과 별개로 유동성 리스크가 커진다.
넷째, 규제 차익 거래 가능성이 있다. 은행은 실제 위험을 크게 줄이지 않으면서도 규제상 위험가중자산을 낮추는 구조를 활용할 수 있다. 복잡한 금융상품, 보증, 파생상품, 자산 구조화가 이런 논란과 연결될 수 있다.
그래서 BIS 비율은 은행 건전성을 보는 핵심 지표지만, 예대율, 연체율, 고정이하여신비율, 유동성커버리지비율, 수익성 지표와 함께 보는 편이 좋다.
예금자와 투자자는 BIS 비율을 어떻게 봐야 할까 &nbsp; 예금자라면 BIS 비율을 은행의 기본 체력 지표로 보면 된다. 특히 저축은행이나 지방은행처럼 특정 지역, 특정 대출 분야에 노출이 큰 금융기관을 볼 때는 자본비율과 부실채권 지표를 함께 확인하는 것이 좋다.
예금자 입장에서 가장 먼저 확인할 것은 예금자보호 한도다. BIS 비율이 높다고 해서 모든 예금이 무조건 안전하다는 뜻은 아니다. 한국에서는 예금자보호제도에 따라 보호 대상 금융상품은 원금과 이자를 합쳐 일정 한도까지 보호된다. 은행 건전성 지표와 예금자보호 여부를 함께 봐야 한다.
은행주에 투자하는 사람이라면 BIS 비율을 수익성과 함께 봐야 한다. BIS 비율이 너무 낮으면 증자 가능성, 배당 제한, 금융당국의 관리 강화 같은 리스크가 생길 수 있다. 반대로 BIS 비율이 충분히 높으면 배당 여력이나 주주환원 정책을 검토할 여지가 생긴다.
다만 높은 BIS 비율이 곧 높은 주가 수익률을 의미하지는 않는다. 은행주는 순이자마진, 대출 성장률, 연체율, 충당금, 경기 상황, 금리 흐름에도 크게 영향을 받는다. BIS 비율은 그중에서도 &ldquo;위기 때 버틸 수 있는가&quot;를 보는 안전판 역할에 가깝다.
금융 뉴스를 볼 때는 다음 표현을 눈여겨보면 좋다.
뉴스 표현 의미 자본 확충 BIS 비율을 높이기 위해 증자나 후순위채 발행 등을 하는 것 위험가중자산 증가 대출이나 투자 확대, 위험도 상승으로 BIS 비율이 낮아질 수 있는 요인 건전성 규제 강화 은행이 더 많은 자본을 쌓아야 할 가능성 부실채권 증가 손실 위험이 커져 자본비율에 부담이 될 수 있는 요인 이 표현들이 함께 나오면 은행의 성장보다 안정성을 더 꼼꼼히 봐야 하는 시기일 수 있다.
BIS 비율의 한계도 알아두자 &nbsp; BIS 비율은 중요하지만 완벽한 지표는 아니다. 숫자가 깔끔하게 보인다고 해서 은행의 모든 위험을 설명해주지는 못한다.
가장 큰 한계는 리스크 측정의 어려움이다. 위험가중자산은 규칙에 따라 계산되지만, 실제 시장의 위험은 계속 바뀐다. 평소에는 안전해 보이던 자산도 경기 침체나 금리 급등기에 갑자기 위험해질 수 있다.
또 BIS 비율은 유동성 리스크를 충분히 보여주지 못한다. 자본이 충분해도 당장 현금이 부족하면 은행은 어려움을 겪을 수 있다. 그래서 금융당국은 BIS 비율뿐 아니라 유동성커버리지비율 같은 별도의 유동성 지표도 함께 본다.
새로운 금융 리스크도 문제다. 사이버 공격, 내부통제 실패, 복잡한 파생상품 손실, 플랫폼 금융과 연결된 리스크는 전통적인 대출 위험과 다르게 움직일 수 있다. BIS 비율이 이런 위험을 완벽히 반영한다고 보기는 어렵다.
마지막으로 회계와 규제 기준의 차이도 있다. 은행이 어떤 자산을 어떻게 분류하고, 어떤 내부모형을 사용하는지에 따라 위험가중자산이 달라질 수 있다. 그래서 투자자는 단순 숫자만 보지 말고 은행이 어떤 자산을 많이 보유하고 있는지도 함께 봐야 한다.
BIS 비율은 은행을 보는 출발점이지 결론은 아니다. 출발점으로는 매우 유용하지만, 다른 건전성 지표와 같이 봐야 제대로 된 판단이 가능하다.
정리 &nbsp; BIS 비율은 은행의 자기자본을 위험가중자산으로 나눈 비율이다. 은행이 위험한 자산을 보유한 만큼 손실을 흡수할 자본을 충분히 갖고 있는지 보여주는 지표다.
BIS 비율이 높으면 은행의 위기 대응 능력이 상대적으로 좋다고 볼 수 있다. 금융당국은 이 비율을 통해 은행의 과도한 위험 추구를 제한하고, 금융시스템 전체의 안정성을 관리한다.
하지만 BIS 비율 하나만으로 은행을 판단해서는 안 된다. 실제 리스크 측정의 한계, 유동성 문제, 자산 집중도, 새로운 금융 리스크가 있을 수 있다. 예금자와 투자자는 BIS 비율과 함께 연체율, 부실채권, 유동성, 수익성 지표를 같이 확인하는 습관을 들이는 것이 좋다.
자주 묻는 질문 &nbsp; BIS 비율은 몇 퍼센트 이상이면 괜찮은가? &nbsp; 국제적으로 널리 알려진 최소 기준은 위험가중자산 대비 8% 수준이다. 다만 실제로는 국가별 규제, 은행의 중요도, 추가 자본 완충 요건에 따라 더 높은 수준을 요구받을 수 있다. 단순히 8%만 넘었다고 충분하다고 보기는 어렵다.
BIS 비율이 높으면 예금이 무조건 안전한가? &nbsp; 무조건 안전하다는 뜻은 아니다. BIS 비율은 은행의 손실 흡수 능력을 보여주는 중요한 지표지만, 유동성 리스크나 부실채권 증가 같은 다른 위험도 있다. 예금자는 BIS 비율과 함께 예금자보호 대상 여부와 한도를 확인해야 한다.
BIS 비율이 낮아지면 은행은 무엇을 할까? &nbsp; 은행은 자기자본을 늘리거나 위험가중자산을 줄이는 방식으로 BIS 비율을 개선할 수 있다. 증자, 이익 유보, 후순위채 발행, 고위험 대출 축소, 자산 매각 등이 대표적인 방법이다.`}).add({id:8,href:"/posts/build-transfer-lease/",title:"BTL이란? Build Transfer Lease 민간...",description:"BTL의 뜻과 등장 배경, 사업 추진 절차, 정부와 민간사업자의 역할, 장점과 단점, BTO와의 차이를 초보자도 이해하기 쉽게 정리했다.",content:`학교, 병원, 군 시설, 문화시설 같은 공공시설은 필요하지만 한 번에 큰 돈이 들어간다. 정부나 지방자치단체 입장에서는 당장 지어야 할 시설은 많은데 예산은 한정되어 있다. 그렇다고 모든 사업을 뒤로 미루면 주민이 이용할 공공서비스가 부족해진다.
이럴 때 활용되는 방식 중 하나가 BTL(Build Transfer Lease) 이다. 우리말로는 보통 임대형 민간투자사업이라고 부른다. 민간사업자가 먼저 공공시설을 짓고, 완공 후 소유권을 정부나 지방자치단체에 넘긴 다음, 일정 기간 정부로부터 임대료를 받으며 투자비를 회수하는 구조다.
BTL은 민간의 돈과 운영 역량을 활용해 공공시설을 빠르게 확충할 수 있다는 장점이 있다. 하지만 장기 계약, 임대료 부담, 공공성 약화 같은 문제도 함께 따라온다. 그래서 BTL은 &ldquo;정부 돈을 아끼는 방법&quot;으로만 보면 안 되고, 미래 예산과 서비스 품질까지 같이 봐야 한다.
BTL은 어떤 방식의 민간투자사업일까 &nbsp; BTL은 Build, Transfer, Lease의 앞 글자를 딴 말이다. 순서대로 보면 구조가 훨씬 쉽다.
단계 의미 설명 Build 건설 민간사업자가 자금을 조달해 공공시설을 짓는다 Transfer 이전 완공된 시설의 소유권을 정부나 지자체에 넘긴다 Lease 임대 정부가 시설을 빌려 쓰는 형태로 임대료를 지급한다 핵심은 민간사업자가 먼저 돈을 들여 시설을 짓고, 정부가 장기간 임대료를 지급하면서 그 비용을 나누어 갚는다는 점이다. 민간사업자는 임대료와 운영비 지급을 통해 투자비와 금융비용, 운영비, 일정 수익을 회수한다.
예를 들어 지방자치단체가 새 도서관을 지어야 한다고 하자. 일반적인 방식이라면 지자체가 예산을 확보해 설계와 공사를 발주한다. 반면 BTL 방식에서는 민간사업자가 도서관을 짓고, 완공 후 소유권을 지자체에 넘긴다. 이후 지자체는 20년 안팎의 기간 동안 민간사업자에게 임대료와 운영 관련 대가를 지급한다.
그래서 BTL은 당장의 예산 부담을 줄이는 대신, 미래 예산으로 장기간 비용을 부담하는 구조라고 이해하면 된다.
BTL이 등장한 배경 &nbsp; BTL이 등장한 가장 큰 이유는 공공시설 수요와 정부 재정 사이의 차이다. 국민 생활 수준이 높아지면 학교, 보육시설, 병원, 문화시설, 복지시설, 환경시설에 대한 요구도 함께 늘어난다. 하지만 정부 예산은 항상 제한되어 있고, 모든 시설을 한 번에 짓기는 어렵다.
이때 민간 자본을 활용하면 공공시설을 더 빨리 만들 수 있다. 정부는 초기 공사비를 한 번에 지출하지 않고, 시설이 완공된 뒤 여러 해에 걸쳐 임대료 형태로 비용을 나누어 부담한다. 예산 지출 시점을 분산할 수 있기 때문에 재정 운용이 조금 더 유연해진다.
또 하나의 배경은 민간의 전문성이다. 민간기업은 설계, 시공, 유지관리, 금융 조달에 경험이 많다. BTL은 단순히 건물만 짓는 것이 아니라 일정 기간 유지관리까지 함께 맡기는 경우가 많기 때문에, 민간의 효율성을 활용할 수 있다는 기대가 있었다.
다만 민간이 참여한다고 해서 무조건 더 싸고 좋은 결과가 나오는 것은 아니다. 계약을 잘못 설계하면 오히려 장기 비용이 커질 수 있고, 서비스 품질을 제대로 감독하지 않으면 공공시설 이용자의 불편이 생길 수 있다. BTL의 성패는 사업 구조와 계약 관리에 크게 달려 있다.
BTL 사업은 어떤 절차로 진행될까 &nbsp; BTL 사업은 공공시설을 다루기 때문에 비교적 긴 절차를 거친다. 단순히 민간사업자가 아이디어를 내고 바로 짓는 방식이 아니다. 사업 필요성, 재정 부담, 시설 수요, 운영 방식, 위험 배분을 여러 단계에서 검토한다.
1. 사업 타당성 검토 &nbsp; 먼저 정부나 지방자치단체가 해당 시설이 정말 필요한지 검토한다. 이용 수요가 충분한지, 기존 시설로 대체할 수 없는지, BTL 방식이 일반 재정사업보다 나은지 따져본다.
이 단계가 약하면 나중에 문제가 커진다. 실제 이용자가 적은 시설을 지으면 임대료는 계속 나가는데 공공서비스 효과는 낮아질 수 있다.
2. 사업계획 수립 &nbsp; 다음으로 시설 규모, 위치, 총사업비, 운영기간, 임대료 산정 방식, 성과 기준 등을 정한다. 여기서 중요한 것은 정부와 민간이 어떤 위험을 나누어 가질지다.
예를 들어 공사비가 늘어나는 위험, 금리가 오르는 위험, 시설 이용 수요가 예상보다 낮아지는 위험, 유지관리 비용이 커지는 위험을 누가 부담할지 계약 구조에 반영해야 한다.
3. 입찰 공고와 사업자 선정 &nbsp; 정부는 사업 내용을 공고하고 민간사업자를 모집한다. 민간사업자는 설계, 시공, 자금 조달, 운영 계획을 담은 제안서를 낸다. 정부는 가격만 보는 것이 아니라 시설 품질, 운영 계획, 재무 안정성, 유지관리 능력 등을 함께 평가해 우선협상대상자를 선정한다.
BTL은 장기 사업이기 때문에 사업자 선정 과정의 투명성이 중요하다. 시작 단계에서 특혜나 부실 평가가 생기면 수십 년 동안 공공 부담으로 이어질 수 있다.
4. 실시협약 체결 &nbsp; 선정된 민간사업자와 정부는 실시협약을 맺는다. 실시협약에는 사업비, 공사 기간, 운영 기간, 임대료 지급 방식, 성과 평가, 위약금, 해지 조건, 시설 인수 기준 등이 들어간다.
실시협약은 BTL의 핵심 문서다. 나중에 분쟁이 생기면 이 협약을 기준으로 판단하기 때문에, 애매한 표현을 줄이고 권리와 의무를 명확히 해야 한다.
5. 건설, 운영, 유지관리 &nbsp; 민간사업자는 자금을 조달해 시설을 짓고, 완공 후에는 계약에 따라 운영과 유지관리를 맡는다. 정부는 시설이 약속한 수준으로 유지되는지 점검하고, 성과 기준에 따라 임대료나 운영비를 지급한다.
시설 이용자는 이 과정의 최종 수혜자다. 학교라면 학생과 교직원, 병원이라면 환자와 의료진, 문화시설이라면 지역 주민이 이용자가 된다. BTL의 목적은 민간사업자의 수익이 아니라 공공서비스 제공이라는 점을 잊으면 안 된다.
BTL의 참여 주체와 돈의 흐름 &nbsp; BTL에는 정부, 민간사업자, 금융기관, 이용자가 함께 참여한다. 각 주체의 역할을 나누어 보면 구조가 더 선명해진다.
정부나 지방자치단체는 발주자이자 임대료 지급자다. 필요한 공공시설을 정하고, 사업자를 선정하며, 완공된 시설을 소유한다. 운영 기간에는 민간사업자가 계약 조건을 지키는지 감독한다.
민간사업자는 시설을 설계하고 건설하며, 일정 기간 운영과 유지관리를 맡는다. 보통 여러 회사가 특수목적법인, 즉 SPC를 만들어 사업을 수행한다. 건설사는 시공을 맡고, 운영사는 시설 관리를 맡고, 재무 투자자는 자금을 대는 식으로 역할이 나뉠 수 있다.
금융기관은 프로젝트 파이낸싱 방식으로 돈을 빌려준다. BTL 사업은 정부가 장기간 임대료를 지급하는 구조라 비교적 안정적인 현금흐름이 예상된다. 금융기관은 이 임대료를 바탕으로 대출 회수 가능성을 평가한다.
돈의 흐름을 간단히 정리하면 이렇다.
금융기관 -&gt; 민간사업자: 건설자금 대출 민간사업자 -&gt; 공공시설: 설계, 건설, 유지관리 민간사업자 -&gt; 정부: 완공 시설 소유권 이전 정부 -&gt; 민간사업자: 장기 임대료 지급 민간사업자 -&gt; 금융기관: 대출 원리금 상환즉, BTL은 민간이 먼저 투자하고 정부가 나중에 장기간 갚아가는 구조다. 이 때문에 &ldquo;공짜로 공공시설을 짓는 방식&quot;이 아니라 &ldquo;지급 시점을 뒤로 나누는 방식&quot;에 가깝다.
BTL의 장점 &nbsp; BTL의 첫 번째 장점은 초기 재정 부담을 줄일 수 있다는 점이다. 정부가 공사비를 한 번에 마련하지 않아도 되기 때문에 필요한 시설을 비교적 빨리 공급할 수 있다. 특히 학교, 병영시설, 하수처리시설처럼 주민 생활과 밀접한 시설은 공급 시기가 중요하다.
두 번째 장점은 민간의 전문성을 활용할 수 있다는 점이다. 민간사업자가 설계, 건설, 유지관리를 통합적으로 맡으면 시설의 생애주기 비용을 고려한 설계가 가능해진다. 처음에는 조금 더 튼튼하게 짓고, 나중에 유지보수 비용을 줄이는 식의 판단이 가능하다.
세 번째 장점은 서비스 성과를 계약으로 관리할 수 있다는 점이다. 실시협약에 청소 상태, 시설 안전, 고장 대응 시간, 유지관리 기준을 넣으면 단순히 건물을 지어주는 것에서 끝나지 않고 일정 수준의 서비스를 요구할 수 있다.
네 번째 장점은 재정 지출을 분산할 수 있다는 점이다. 정부는 시설이 완공된 뒤 매년 임대료를 지급하므로 예산 계획을 장기적으로 나눌 수 있다. 다만 이 장점은 동시에 미래 예산 부담이라는 단점이 될 수 있다.
BTL의 단점과 주의할 점 &nbsp; BTL의 가장 큰 단점은 장기 재정 부담이다. 초기에는 예산을 아끼는 것처럼 보이지만, 운영 기간 동안 임대료를 계속 지급해야 한다. 계약 기간이 20년 이상이면 미래 세대의 예산까지 묶이는 효과가 생긴다.
두 번째 단점은 계약의 경직성이다. 공공서비스 수요는 시간이 지나며 바뀐다. 인구가 줄거나 지역 구조가 변하면 처음 계획한 시설 규모가 맞지 않을 수 있다. 하지만 장기 계약으로 묶여 있으면 중간에 구조를 바꾸기가 쉽지 않다.
세 번째 단점은 민간사업자 부실 위험이다. 사업자가 재무적으로 어려워지거나 운영 능력이 부족하면 시설 관리와 서비스 품질이 흔들릴 수 있다. 공공시설은 중단되면 주민 피해가 크기 때문에, 사업자 선정 단계에서 재무 건전성과 운영 역량을 엄격히 봐야 한다.
네 번째 단점은 공공성 약화 우려다. 민간사업자는 수익을 내야 한다. 이윤 추구 자체가 문제는 아니지만, 비용 절감을 지나치게 우선하면 시설 품질이나 이용자 편의가 낮아질 수 있다. 그래서 정부의 성과 평가와 감독이 중요하다.
마지막으로 투명성 문제가 있다. BTL은 사업 구조가 복잡하고 계약 기간이 길다. 총사업비, 수익률, 임대료 산정 방식, 위험 배분이 충분히 공개되지 않으면 시민 입장에서 사업의 적정성을 판단하기 어렵다.
BTL과 BTO는 어떻게 다를까 &nbsp; 민간투자사업을 공부하다 보면 BTL과 함께 BTO라는 말도 자주 나온다. 둘 다 민간이 공공시설을 짓는 방식이지만 투자비를 회수하는 방법이 다르다.
BTO(Build Transfer Operate)는 민간사업자가 시설을 짓고 소유권을 정부에 넘긴 뒤, 일정 기간 직접 운영하면서 이용자로부터 요금을 받아 투자비를 회수하는 방식이다. 고속도로, 터널, 항만처럼 이용자가 요금을 내는 시설에서 많이 떠올릴 수 있다.
BTL은 이용자에게 직접 요금을 받기보다 정부가 임대료를 지급한다. 그래서 학교, 군 시설, 공공청사처럼 이용자에게 요금을 받기 어렵거나 공공성이 강한 시설에 상대적으로 잘 맞는다.
구분 BTL BTO 투자비 회수 정부 임대료 이용자 요금 수요 위험 정부 부담 성격이 큼 민간 부담 성격이 큼 적합 시설 학교, 병영, 공공청사, 복지시설 도로, 터널, 항만 등 요금 징수 시설 핵심 관리 포인트 장기 임대료와 서비스 품질 이용 수요와 요금 수준 쉽게 말해 BTL은 정부가 빌려 쓰며 갚는 방식이고, BTO는 민간이 운영하며 이용료로 회수하는 방식이다.
BTL이 제대로 작동하려면 &nbsp; BTL이 좋은 제도로 작동하려면 몇 가지 조건이 필요하다.
첫째, 사업 타당성 검토가 엄격해야 한다. 시설이 정말 필요한지, BTL 방식이 일반 재정사업보다 나은지, 장기 임대료를 감당할 수 있는지 냉정하게 봐야 한다. 필요성이 약한 사업을 BTL로 추진하면 미래 예산만 부담하게 된다.
둘째, 입찰과 계약 과정이 투명해야 한다. 사업자 선정 기준, 총사업비, 수익률, 임대료 산정 방식, 위험 배분 원칙이 명확해야 한다. 복잡하다는 이유로 핵심 정보가 가려지면 특혜 논란과 불신이 커질 수 있다.
셋째, 운영 기간의 성과 평가가 중요하다. BTL은 시설을 짓고 끝나는 사업이 아니다. 운영과 유지관리가 핵심이다. 고장 대응, 청결, 안전, 이용자 만족도 같은 기준을 정기적으로 점검하고, 기준을 지키지 못하면 임대료 감액이나 제재가 가능해야 한다.
넷째, 공공성을 지키는 장치가 있어야 한다. 민간의 효율성을 활용하되, 공공시설의 목적은 주민에게 안정적인 서비스를 제공하는 것이다. 수익성만 앞세우면 BTL의 본래 취지가 흔들린다.
BTL은 민간과 정부가 역할을 나누는 제도다. 민간은 자금과 전문성을 제공하고, 정부는 공공성·감독·장기 재정 책임을 맡는다. 이 균형이 맞을 때 BTL은 공공 인프라 확충에 도움이 된다.
정리 &nbsp; BTL은 민간사업자가 공공시설을 먼저 짓고, 완공 후 소유권을 정부에 넘긴 뒤, 정부로부터 장기간 임대료를 받아 투자비를 회수하는 민간투자사업 방식이다. 초기 재정 부담을 줄이고 민간의 전문성을 활용할 수 있다는 장점이 있다.
하지만 BTL은 공짜 인프라가 아니다. 정부가 미래 예산으로 임대료를 지급하는 구조이기 때문에 장기 재정 부담, 계약 경직성, 공공성 약화, 운영 품질 저하 위험을 함께 관리해야 한다.
경제 기사를 읽을 때 BTL이 나오면 세 가지를 보면 된다. 왜 이 시설이 필요한지, 정부가 앞으로 얼마를 얼마나 오래 지급하는지, 민간사업자의 서비스 품질을 어떻게 감독하는지다. 이 세 가지가 명확해야 BTL 사업을 제대로 평가할 수 있다.
자주 묻는 질문 &nbsp; BTL은 정부가 돈을 안 들이고 시설을 짓는 방식인가? &nbsp; 아니다. BTL은 정부가 초기 공사비를 한 번에 내지 않는 대신, 완공 후 장기간 임대료를 지급하는 방식이다. 당장 지출은 줄어들 수 있지만 미래 예산 부담은 생긴다.
BTL과 BTO의 가장 큰 차이는 무엇인가? &nbsp; 투자비 회수 방식이 다르다. BTL은 정부가 임대료를 지급해 민간사업자가 투자비를 회수하고, BTO는 민간사업자가 시설을 운영하면서 이용자 요금으로 투자비를 회수한다.
BTL은 어떤 시설에 많이 쓰일까? &nbsp; 이용자에게 직접 요금을 받기 어렵고 공공성이 큰 시설에 주로 어울린다. 학교, 병영시설, 공공청사, 복지시설, 문화시설, 환경시설 같은 공공 인프라가 대표적이다.`}).add({id:9,href:"/posts/cma-account-guide/",title:"CMA 통장이란? 장단점과 종류, 원금손실 위험까지 쉽...",description:"CMA 통장의 뜻, 장점과 단점, RP형·발행어음형·종금형·MMF형·MMW형 차이, 원금손실 가능성과 활용법을 초보자 눈높이에서 정리하였다.",content:`월급이 들어오면 며칠 뒤 카드값, 관리비, 통신비가 빠져나간다. 투자하려고 모아둔 돈도 당장 매수할 종목이 없으면 며칠 또는 몇 주 동안 현금으로 남아 있다. 이런 돈을 일반 입출금 통장에 그대로 두면 이자가 거의 붙지 않는다.
이럴 때 많이 찾는 계좌가 CMA 통장 이다. CMA는 자유롭게 입출금하면서도 일반 통장보다 높은 수익을 기대할 수 있어 &ldquo;재테크 기본 통장&quot;처럼 쓰인다. 다만 은행 예금과 완전히 같은 상품은 아니므로, 장점만 보고 큰돈을 넣기 전에 구조와 위험을 같이 이해해야 한다.
CMA 통장이란 &nbsp; CMA는 Cash Management Account의 줄임말이고, 우리말로는 종합자산관리계좌라고 부른다. 이름은 조금 어렵지만 핵심은 간단하다. 증권사에서 만드는 수시입출금 계좌 다.
은행 입출금 통장은 예금을 맡기는 구조에 가깝다. 반면 CMA는 계좌에 들어온 돈을 증권사가 환매조건부채권, 발행어음, MMF 같은 단기 금융상품으로 운용하고, 그 운용 수익을 고객에게 지급하는 방식이다. 그래서 은행 예금처럼 &ldquo;금리&quot;라고 말하기도 하지만, 정확히는 상품에 따라 &ldquo;수익률&quot;이라는 표현이 더 어울린다.
CMA도 일상적인 통장처럼 쓸 수 있다. 증권사 앱에서 만들 수 있고, 체크카드 연결, 이체, 자동이체, 일부 ATM 출금도 가능하다. 요즘은 비대면 계좌 개설이 익숙해져서 은행 앱에서 통장 만드는 것과 체감 난이도도 크게 다르지 않다.
다만 출발점은 은행이 아니라 증권사다. 이 차이 때문에 예금자보호 여부, 원금손실 가능성, 상품 종류를 반드시 확인해야 한다.
CMA 통장의 장점 &nbsp; 일반 입출금 통장보다 수익률이 높다 &nbsp; CMA를 쓰는 가장 큰 이유는 이자다. 일반 입출금 통장은 금리가 매우 낮은 경우가 많다. 1,000만 원을 넣어두어도 1년 이자가 몇 만 원도 안 되는 경우가 흔하다.
반면 CMA는 시장금리와 상품 유형에 따라 다르지만 일반 입출금 통장보다 높은 수익률을 기대할 수 있다. 예를 들어 연 3% 수준의 CMA에 1,000만 원을 1년 동안 넣어둔다면 단순 계산으로 세전 약 30만 원의 수익이 발생한다. 같은 돈을 연 0.1% 입출금 통장에 넣어두면 세전 1만 원 수준이다.
물론 실제 수익률은 증권사, 상품 유형, 금리 환경에 따라 달라진다. 그래도 &ldquo;며칠 뒤 쓸 돈&quot;에서 조금이라도 수익을 만들 수 있다는 점이 CMA의 핵심 매력이다.
돈을 묶지 않고 입출금할 수 있다 &nbsp; 정기예금은 약정 기간을 채워야 제 이자를 받을 수 있다. 중간에 해지하면 이자가 크게 줄어드는 경우가 많다. CMA는 수시입출금 계좌라서 필요할 때 돈을 넣고 뺄 수 있다.
그래서 생활비, 비상금, 투자 대기자금처럼 언제 쓸지 모르는 돈을 넣어두기 좋다. 특히 주식이나 ETF 투자를 하는 사람은 매수 타이밍을 기다리는 동안 예수금을 그냥 놀리지 않고 CMA에 보관하는 식으로 활용할 수 있다.
이자가 매일 쌓이는 상품이 많다 &nbsp; CMA는 상품에 따라 매일 수익이 계산되거나 지급되는 구조가 많다. 하루만 넣어도 하루치 수익이 붙는다는 점 때문에 체감이 좋다.
예를 들어 월급날부터 카드 결제일까지 15일 정도 여유가 있다면, 그 기간 동안 생활비 일부를 CMA에 넣어둘 수 있다. 큰돈이 아니어도 이런 습관이 쌓이면 &ldquo;현금도 관리 대상&quot;이라는 감각이 생긴다.
투자 계좌와 연결해 쓰기 쉽다 &nbsp; CMA는 증권사 계좌이므로 투자와 연결하기 편하다. 현금을 보관하다가 주식, ETF, 채권, ISA, 연금저축, IRP 등으로 옮기는 흐름이 자연스럽다. 은행 계좌에서 증권 계좌로 매번 이체하는 번거로움을 줄일 수 있다.
CMA 통장의 단점과 원금손실 위험 &nbsp; 대부분 예금자보호 대상이 아니다 &nbsp; CMA를 은행 통장처럼 생각하면 가장 크게 오해하는 부분이 예금자보호다. 은행 예금은 금융회사가 문제가 생겼을 때 원금과 이자를 합쳐 1인당 1개 금융회사 기준 최대 1억 원까지 보호된다. 2025년 9월 1일부터 보호 한도가 기존 5,000만 원에서 1억 원으로 올라갔다.
하지만 일반적인 CMA는 예금이 아니라 투자성 금융상품에 가깝다. RP형, 발행어음형, MMF형, MMW형 CMA는 대체로 예금자보호 대상이 아니다. 증권사가 파산하거나 운용 상품에 문제가 생기면 손실 가능성을 완전히 배제할 수 없다.
예외적으로 종금형 CMA처럼 예금자보호가 적용되는 유형도 있다. 그래서 CMA를 만들 때는 상품명만 보지 말고 &ldquo;예금자보호 대상인지&quot;를 반드시 확인해야 한다.
수익률이 고정되지 않을 수 있다 &nbsp; CMA 수익률은 시장금리와 운용 상품에 따라 바뀔 수 있다. 오늘 보이는 수익률이 계속 유지된다고 생각하면 안 된다. 특히 MMF형처럼 펀드 성격이 강한 상품은 운용 결과에 따라 수익률이 달라질 수 있다.
금리가 내려가는 시기에는 CMA 수익률도 같이 내려갈 수 있다. 그래서 CMA는 장기 고정 수익을 노리는 상품이라기보다 단기 현금 관리용으로 보는 편이 맞다.
증권사 서비스 조건을 확인해야 한다 &nbsp; CMA라고 해서 모든 기능이 동일한 것은 아니다. 자동이체 가능 여부, 체크카드 연결, ATM 수수료, 이체 수수료, 야간 출금 조건, 우대 수익률 조건이 증권사마다 다르다.
특히 월급 통장처럼 쓰려면 자동이체와 카드 결제가 안정적으로 되는지 확인해야 한다. 단순히 수익률만 보고 만들었다가 생활비 통장으로 쓰기 불편하면 오래 유지하기 어렵다.
CMA 통장 종류 &nbsp; CMA는 돈을 어디에 운용하느냐에 따라 여러 유형으로 나뉜다. 이름이 비슷해서 헷갈리지만, 초보자는 아래 정도만 이해해도 충분하다.
RP형 CMA &nbsp; RP는 환매조건부채권을 뜻한다. 증권사가 일정 기간 뒤 다시 사들이는 조건으로 채권을 팔고, CMA 자금은 이 RP에 투자된다. 가장 흔하게 접하는 CMA 유형 중 하나다.
구조가 비교적 단순하고 수익률도 확인하기 쉬워 초보자가 접근하기 좋다. 다만 예금자보호 대상은 아니므로 증권사 신용도와 상품 설명을 확인해야 한다.
발행어음형 CMA &nbsp; 발행어음형은 증권사가 직접 발행한 단기 어음에 투자하는 방식이다. 모든 증권사가 발행어음을 만들 수 있는 것은 아니고, 자기자본 규모가 큰 종합금융투자사업자 중심으로 취급한다.
수익률이 비교적 매력적인 경우가 많지만, 이 역시 예금이 아니라 증권사의 신용을 보고 맡기는 성격이 있다. &ldquo;대형 증권사니까 무조건 안전하다&quot;가 아니라, 원금보장 상품은 아니라는 점을 기억해야 한다.
종금형 CMA &nbsp; 종금형은 종합금융회사가 취급하는 CMA다. 다른 CMA와 달리 예금자보호가 적용될 수 있다는 점이 특징이다. 안전성을 가장 중요하게 본다면 먼저 확인해볼 만한 유형이다.
다만 취급 회사와 상품 선택지가 많지 않을 수 있고, 수익률이 항상 가장 높은 것은 아니다. 보호 여부와 수익률을 같이 비교해야 한다.
MMF형 CMA &nbsp; MMF는 Money Market Fund의 줄임말이다. 단기 금융상품에 투자하는 펀드라고 보면 된다. 시장 상황에 따라 수익률이 달라질 수 있고, 실적배당형 성격이 강하다.
수익률이 괜찮을 때도 있지만 &ldquo;펀드&quot;라는 단어가 들어가는 만큼 원금보장형 예금과는 다르게 봐야 한다. 안정성보다 수익률을 조금 더 보는 사람에게 맞을 수 있다.
MMW형 CMA &nbsp; MMW는 Money Market Wrap의 줄임말이다. 증권사와 고객이 랩 계약을 맺고, 고객 자금을 한국증권금융 예수금 등으로 운용하는 방식이다. 일복리 효과를 기대할 수 있는 상품으로 소개되는 경우가 많다.
다만 가입 조건, 출금 시간, 이자 계산 방식이 증권사마다 다를 수 있다. MMW형은 약관과 운용 방식을 조금 더 꼼꼼히 읽는 것이 좋다.
CMA와 파킹통장, ISA는 어떻게 다를까 &nbsp; CMA와 파킹통장은 둘 다 &ldquo;잠깐 돈을 넣어두는 계좌&quot;라는 점에서 비슷하다. 하지만 파킹통장은 보통 은행이나 저축은행의 수시입출금 예금이고, CMA는 증권사의 단기 금융상품 운용 계좌다.
안전성을 가장 우선한다면 예금자보호가 되는 파킹통장이 편할 수 있다. 반대로 증권 계좌와 연결해 투자 대기자금을 관리하고 싶다면 CMA가 더 편하다.
ISA와도 목적이 다르다. ISA는 절세 혜택을 노리는 투자 계좌에 가깝고, 의무 가입 기간과 납입 한도 같은 조건이 있다. CMA는 언제든 입출금하면서 현금을 관리하는 계좌다. 단기 자금은 CMA, 중장기 투자와 절세는 ISA로 역할을 나누면 이해하기 쉽다.
파킹 통장 활용법 같이 보기 &nbsp; CMA는 이렇게 활용하면 좋다 &nbsp; 첫째, 투자 대기자금 보관용으로 쓰기 좋다. 주식이나 ETF를 바로 사지 않고 기다리는 동안 현금을 CMA에 넣어두면, 매수 전까지 작은 수익이라도 만들 수 있다.
둘째, 월급 통장 보조 계좌로 활용할 수 있다. 월급이 들어온 뒤 고정 지출이 빠져나가기 전까지 남는 돈을 CMA에 잠시 옮겨두는 방식이다. 다만 자동이체와 카드 결제까지 모두 CMA에서 처리할지는 증권사 서비스 조건을 보고 결정하는 편이 좋다.
셋째, 비상금 일부를 보관할 수 있다. 단, 비상금 전부를 CMA에 넣기보다는 예금자보호가 되는 은행 계좌와 나누는 것이 더 안정적이다. 당장 병원비나 생활비로 써야 하는 최소 비상금은 은행 입출금 통장이나 파킹통장에 두고, 투자 대기 성격의 현금을 CMA에 두는 식이 무난하다.
넷째, 증권사별 수익률만 보지 말고 한도와 조건을 같이 봐야 한다. 높은 수익률이 특정 금액까지만 적용되거나, 일정 시간대 출금 시 이자 계산이 달라지는 상품도 있다. 계좌 개설 화면의 상품 설명서와 약관을 확인하는 습관이 필요하다.
정리 &nbsp; CMA 통장은 증권사에서 만드는 수시입출금 계좌다. 일반 입출금 통장보다 높은 수익률을 기대할 수 있고, 투자 대기자금이나 단기 현금 관리에 특히 잘 맞는다.
하지만 CMA는 은행 예금과 다르다. 대부분 예금자보호 대상이 아니고, 상품 유형에 따라 원금손실 가능성도 있다. 그래서 CMA를 고를 때는 수익률, 예금자보호 여부, 운용 유형, 자동이체와 출금 조건을 함께 봐야 한다.
처음 시작한다면 큰돈을 한 번에 넣기보다 소액으로 구조를 익히는 편이 좋다. 월급에서 곧 빠져나갈 돈, 투자 전 잠깐 쉬고 있는 돈, 비상금 일부처럼 목적이 분명한 돈부터 CMA로 관리해보면 현금 관리 감각이 훨씬 좋아진다.
자주 묻는 질문 &nbsp; CMA 통장은 원금이 보장되나? &nbsp; 대부분의 CMA는 원금보장 상품이 아니다. RP형, 발행어음형, MMF형, MMW형은 예금자보호 대상이 아닌 경우가 많다. 다만 종금형 CMA처럼 예금자보호가 적용되는 유형도 있으므로 가입 전 상품 설명서에서 보호 여부를 확인해야 한다.
CMA 통장과 파킹통장 중 뭐가 더 좋나? &nbsp; 안전성과 예금자보호를 우선하면 파킹통장이 편하고, 증권 계좌와 연결해 투자 대기자금을 관리하려면 CMA가 편하다. 둘 중 하나만 고르기보다 생활비와 비상금은 파킹통장, 투자 대기자금은 CMA처럼 역할을 나누는 방법이 현실적이다.
CMA 통장은 어디서 만들 수 있나? &nbsp; 대부분 증권사 앱에서 비대면으로 만들 수 있다. 계좌 개설 전에 CMA 유형, 수익률, 예금자보호 여부, 이체와 출금 수수료, 체크카드와 자동이체 가능 여부를 확인하면 된다. 같은 CMA라도 증권사와 상품 유형에 따라 조건이 꽤 다르다.`}).add({id:10,href:"/docs/",title:"Docs",description:"",content:""}).add({id:11,href:"/posts/etf-tax-guide/",title:"ETF 세금 총정리, 국내 ETF와 해외상장 ETF 매...",description:"국내 주식형 ETF, 국내 상장 해외 ETF, 해외 상장 ETF의 매매차익과 분배금 세금을 2026년 기준으로 쉽게 비교했다.",content:`ETF는 주식처럼 사고팔 수 있어서 세금도 주식과 똑같다고 생각하기 쉽다. 그런데 실제로는 그렇지 않다. 국내 증시에 상장된 ETF인지, 해외 거래소에 직접 상장된 ETF인지, 또 ETF가 국내 주식에 투자하는지 해외 주식에 투자하는지에 따라 세금이 달라진다.
특히 초보자가 가장 많이 헷갈리는 부분은 &ldquo;국내 상장 해외 ETF&quot;다. 예를 들어 TIGER 미국S&amp;P500, KODEX 미국나스닥100처럼 한국거래소에서 원화로 사고파는 ETF는 미국 주식에 투자하더라도 세금은 해외 상장 ETF와 다르게 처리된다.
이 글에서는 ETF 투자자가 꼭 알아야 할 세금을 매매차익과 분배금으로 나누어 정리하였다. 세금은 투자 수익률의 마지막 숫자를 바꾸기 때문에, 상품을 고르기 전에 한 번은 확인해두는 것이 좋다.
ETF 세금은 두 가지 수익으로 나누면 쉽다 &nbsp; ETF에서 생기는 수익은 크게 두 가지다. 하나는 싸게 사서 비싸게 팔았을 때 생기는 매매차익이고, 다른 하나는 ETF를 보유하는 동안 받는 분배금이다.
ETF 수익 = 매매차익 + 분배금매매차익은 ETF를 매도했을 때 확정된다. 100만 원에 산 ETF를 130만 원에 팔았다면 30만 원의 매매차익이 생긴다. 반대로 팔지 않고 보유 중인 평가이익은 아직 세금 계산 대상이 아니다.
분배금은 ETF가 보유한 주식의 배당, 채권 이자, 기타 운용 수익 등을 투자자에게 나누어주는 돈이다. 월배당 ETF, 고배당 ETF, 채권 ETF를 투자할 때 자주 보게 된다. 주식의 배당금과 비슷하게 이해하면 된다.
문제는 매매차익과 분배금의 과세 방식이 ETF 종류별로 다르다는 점이다. ETF 이름에 &ldquo;미국&rdquo;, &ldquo;S&amp;P500&rdquo;, &ldquo;나스닥&quot;이 들어가더라도 한국에 상장된 상품인지, 미국에 상장된 상품인지에 따라 세금이 달라진다.
국내 상장 ETF 매매차익 세금 &nbsp; 국내 증시에 상장된 ETF는 크게 국내 주식형 ETF와 기타 ETF로 나누어 보는 것이 실전에서 가장 편하다.
국내 주식형 ETF는 KOSPI 200, 코스닥150, 국내 배당주처럼 국내 주식 가격을 기초로 움직이는 ETF다. 대표적으로 KODEX 200, TIGER 200 같은 상품을 생각하면 된다. 이런 국내 주식형 ETF는 일반 계좌에서 매매차익에 대해 세금을 내지 않는다.
예를 들어 KODEX 200을 100만 원에 매수해서 130만 원에 매도했다면 매매차익 30만 원에 대한 세금은 없다. 물론 증권사 매매수수료는 별도이고, 분배금을 받았다면 분배금 세금은 따로 적용된다.
반면 국내에 상장되어 있지만 해외 주식, 채권, 원자재, 파생상품 등을 기초자산으로 하는 ETF는 매매차익에 대해 배당소득세가 붙을 수 있다. 초보자가 자주 사는 국내 상장 해외 ETF가 여기에 들어간다.
예를 들어 국내 증시에서 TIGER 미국S&amp;P500, KODEX 미국나스닥100 같은 ETF를 매수했다면 거래는 원화로 편하게 하지만, 세금은 국내 주식형 ETF처럼 단순 비과세로 끝나지 않는다. 매도 시 과세 대상 이익에 대해 보통 15.4% 배당소득세가 원천징수된다.
정리하면 아래와 같다.
구분 예시 매매차익 세금 국내 주식형 ETF KODEX 200, TIGER 200 비과세 국내 상장 해외 주식형 ETF TIGER 미국S&amp;P500, KODEX 미국나스닥100 배당소득세 15.4% 국내 상장 채권·원자재·파생형 ETF 채권 ETF, 금 ETF, 레버리지 ETF 등 배당소득세 15.4% 가능 여기서 중요한 것은 &ldquo;어디에 투자하느냐&quot;와 &ldquo;어디에 상장되어 있느냐&quot;를 같이 봐야 한다는 점이다. 국내 증권 앱에서 원화로 거래한다고 해서 모든 ETF 매매차익이 비과세인 것은 아니다.
해외 상장 ETF 매매차익 세금 &nbsp; 해외 상장 ETF는 미국 거래소나 다른 해외 거래소에 직접 상장된 ETF를 말한다. 대표적으로 SPY, VOO, IVV, QQQ, SCHD 같은 미국 ETF가 여기에 해당한다.
해외 상장 ETF는 세금 측면에서 해외주식과 비슷하게 본다. 매도해서 이익이 나면 양도소득세 대상이 될 수 있다. 국내 상장 해외 ETF처럼 매도 시 15.4%가 바로 원천징수되는 구조가 아니라, 한 해 동안의 해외주식·해외 ETF 양도손익을 합산해 다음 해 5월에 신고하는 방식이다.
기본 구조는 아래처럼 이해하면 된다.
해외 상장 ETF 과세표준 = 연간 양도차익 - 필요경비 - 기본공제 250만 원 예상 세액 = 과세표준 x 22%여기서 22%는 양도소득세 20%와 지방소득세 2%를 합친 숫자다. 연간 양도차익에서 250만 원까지는 기본공제가 적용된다.
예를 들어 미국 ETF를 팔아 1년 동안 600만 원의 순이익이 났다고 해보자. 기본공제 250만 원을 빼면 과세표준은 350만 원이다. 여기에 22%를 적용하면 예상 세금은 77만 원이다.
구분 금액 연간 해외 ETF 순이익 6,000,000원 기본공제 2,500,000원 과세표준 3,500,000원 예상 세액 22% 770,000원 해외 상장 ETF는 손익통산도 중요하다. A ETF에서 700만 원 이익, B ETF에서 300만 원 손실이 났다면 순이익은 400만 원이다. 여기서 기본공제 250만 원을 뺀 150만 원에 대해 세금을 계산한다.
또 하나 주의할 점은 환율이다. 해외 ETF 세금은 원화 기준으로 계산된다. 달러 기준으로는 수익이 작아 보여도 매수·매도 시점의 환율 차이 때문에 원화 기준 양도차익이 달라질 수 있다. 여러 증권사를 사용한다면 계좌별 손익을 모두 합산해야 한다.
ETF 분배금 세금은 대부분 15.4%로 보면 된다 &nbsp; ETF 분배금은 주식 배당금과 비슷하게 배당소득으로 본다. 일반적으로 분배금을 받을 때 배당소득세 15.4%가 원천징수된다. 소득세 14%와 지방소득세 1.4%를 합친 금액이다.
예를 들어 ETF 분배금이 100,000원이라면 세금 15,400원이 빠지고 실제 계좌에는 84,600원이 들어오는 식이다.
분배금 100,000원 배당소득세 15,400원 실제 입금액 84,600원국내 주식형 ETF는 매매차익이 비과세라고 했지만, 분배금까지 비과세라는 뜻은 아니다. KOSPI 200 ETF를 보유하다가 분배금을 받으면 분배금에 대한 배당소득세는 적용될 수 있다.
해외 상장 ETF의 배당도 세금이 붙는다. 미국 ETF라면 현지에서 배당세가 원천징수되는 구조를 먼저 생각해야 하고, 국내 세법상 금융소득 계산에도 영향을 줄 수 있다. 실제 원천징수와 추가 과세 여부는 투자 국가, 조세조약, 증권사 처리 방식에 따라 달라질 수 있으므로 큰 금액이라면 증권사 세금 안내를 확인하는 편이 좋다.
분배금 투자에서 특히 조심할 부분은 &ldquo;분배금을 많이 주는 ETF가 무조건 유리하다&quot;는 착각이다. 분배금은 세후로 받아야 하고, ETF 가격이 하락하면 총수익률은 낮아질 수 있다. 월배당 ETF를 볼 때는 분배율만 보지 말고 가격 흐름, 총보수, 과세 방식까지 함께 봐야 한다.
국내 ETF와 해외 ETF 세금 비교 &nbsp; 국내 주식형 ETF, 국내 상장 해외 ETF, 해외 상장 ETF를 한 번에 비교하면 차이가 더 명확하다.
항목 국내 주식형 ETF 국내 상장 해외 ETF 해외 상장 ETF 거래 시장 한국거래소 한국거래소 미국 등 해외 거래소 대표 예시 KODEX 200, TIGER 200 TIGER 미국S&amp;P500, KODEX 미국나스닥100 SPY, VOO, QQQ, SCHD 매매차익 비과세 배당소득세 15.4% 양도소득세 22%, 연 250만 원 기본공제 분배금 배당소득세 15.4% 배당소득세 15.4% 배당 과세 적용 신고 부담 보통 낮음 원천징수 중심 다음 해 5월 신고 필요 가능 금융소득종합과세 분배금 중심 매매차익과 분배금이 금융소득에 포함될 수 있음 배당소득은 금융소득에 영향 가능 국내 상장 해외 ETF는 편의성이 좋다. 원화로 사고팔 수 있고, 환전 부담이 작고, 증권사 앱에서 국내 주식처럼 거래할 수 있다. 대신 매매차익이 배당소득으로 잡힐 수 있어서 금융소득이 큰 투자자는 금융소득종합과세를 신경 써야 한다.
해외 상장 ETF는 연 250만 원 기본공제가 있고 손익통산이 가능하다는 장점이 있다. 하지만 다음 해 5월 양도소득세 신고를 해야 할 수 있고, 환율과 여러 계좌 손익을 직접 확인해야 한다. 투자 금액이 커질수록 세금 계산이 더 중요해진다.
국내 주식형 ETF는 세금 구조가 비교적 단순하다. 매매차익이 비과세라 장기 투자에 유리할 수 있다. 다만 국내 주식시장에 투자하는 상품이므로 해외 자산 분산 효과는 제한적이다.
ETF 세금에서 꼭 확인할 것 &nbsp; ETF를 고를 때 세금만 보고 결정하면 안 되지만, 세금을 아예 빼고 보면 실수가 생긴다. 최소한 아래 항목은 확인하는 것이 좋다.
확인 항목 봐야 하는 이유 상장 시장 국내 상장인지 해외 상장인지에 따라 세금이 달라진다 기초자산 국내 주식형인지 해외 주식형인지, 채권·원자재형인지 확인해야 한다 매매차익 과세 비과세인지, 배당소득세인지, 양도소득세인지 구분해야 한다 분배금 과세 분배금은 세후 금액으로 계산해야 한다 금융소득 규모 이자와 배당 합계가 연 2,000만 원을 넘는지 확인해야 한다 신고 필요성 해외 상장 ETF는 다음 해 5월 신고 대상이 될 수 있다 특히 금융소득종합과세는 국내 상장 해외 ETF 투자자에게 중요하다. 국내 상장 해외 ETF의 매매차익과 분배금이 금융소득으로 잡히면 예금 이자, 배당금과 합산된다. 연간 금융소득이 2,000만 원을 넘으면 다른 종합소득과 합산되어 세율이 달라질 수 있다.
해외 상장 ETF는 신고 기한을 놓치지 않는 것이 중요하다. 보통 전년도에 매도한 해외주식과 해외 ETF의 양도손익을 다음 해 5월에 신고한다. 신고하지 않거나 적게 신고하면 가산세가 붙을 수 있으므로, 수익이 난 해에는 증권사 양도소득세 자료를 꼭 확인해야 한다.
소액 투자자는 세금 차이보다 투자 목적과 상품 이해가 더 중요할 때도 많다. 하지만 투자 금액이 커지거나 매매가 잦아지면 세금이 수익률에 미치는 영향이 커진다. 같은 S&amp;P 500 투자라도 국내 상장 ETF로 할지, 해외 상장 ETF로 할지에 따라 세후 결과가 달라질 수 있다.
정리 &nbsp; ETF 세금은 복잡해 보이지만 핵심은 단순하다. ETF를 사고팔아 생긴 매매차익과 보유 중 받는 분배금을 나누어 보고, 그 ETF가 어디에 상장되어 있는지와 무엇에 투자하는지를 확인하면 된다.
핵심만 다시 정리하면 이렇다.
국내 주식형 ETF의 매매차익은 일반적으로 비과세다. 국내 상장 해외 ETF의 매매차익은 보통 배당소득세 15.4%가 적용된다. 해외 상장 ETF의 매매차익은 해외주식처럼 연 250만 원 기본공제 후 22% 양도소득세 대상이 될 수 있다. ETF 분배금은 대부분 배당소득세 15.4% 원천징수를 기본으로 생각하면 된다. 국내 상장 해외 ETF는 금융소득종합과세, 해외 상장 ETF는 다음 해 5월 양도소득세 신고를 특히 주의해야 한다. ETF를 고를 때 수익률, 보수, 거래량만 보는 경우가 많다. 여기에 세금까지 함께 보면 실제로 내 손에 남는 수익을 더 현실적으로 계산할 수 있다. ETF 투자는 상품을 고르는 일에서 끝나지 않고, 세후 수익률까지 이해할 때 더 안정적으로 이어갈 수 있다.
자주 묻는 질문 &nbsp; 국내 ETF는 매매차익이 모두 비과세인가? &nbsp; 아니다. 국내 주식형 ETF는 일반적으로 매매차익이 비과세지만, 국내 상장 해외 ETF나 채권·원자재·파생형 ETF는 매매차익에 배당소득세가 붙을 수 있다. 국내에 상장되어 있다는 사실만으로 비과세라고 판단하면 안 된다.
TIGER 미국S&amp;P500 같은 ETF는 해외 ETF인가? &nbsp; 투자 대상은 해외 주식이지만, 상장 시장은 한국거래소다. 그래서 세금은 해외 상장 ETF인 SPY, VOO와 다르게 볼 수 있다. 국내 상장 해외 ETF는 매매차익이 배당소득으로 과세될 수 있다.
해외 상장 ETF 양도소득세는 언제 신고하나? &nbsp; 전년도에 매도한 해외 상장 ETF와 해외주식 양도손익을 다음 해 5월에 신고하는 구조로 보면 된다. 예를 들어 2026년에 매도한 해외 ETF 손익은 2027년 5월 신고 대상이 될 수 있다.
ETF 분배금은 세금이 자동으로 빠지나? &nbsp; 대부분 원천징수 후 입금된다. 국내 ETF 분배금은 보통 15.4% 배당소득세가 빠진 뒤 계좌에 들어온다. 해외 상장 ETF 배당은 현지 원천징수와 국내 과세 관계가 있을 수 있으므로 증권사 안내를 확인하는 것이 좋다.
ETF 세금을 줄이려면 어떻게 해야 하나? &nbsp; ISA, 연금저축, IRP 같은 절세 계좌를 활용할 수 있다. 다만 계좌마다 투자 가능한 ETF, 세제 혜택, 중도해지 불이익, 연금 수령 조건이 다르다. 단순히 세금만 보고 선택하기보다 투자 기간과 자금 목적에 맞춰 고르는 것이 좋다.`}).add({id:12,href:"/posts/etf-pros-cons-selection-guide/",title:"ETF 장점과 단점, 초보자가 꼭 확인해야 할 투자 유...",description:"ETF의 장점과 단점, 투자 전 확인해야 할 유의사항, 초보자가 ETF를 고를 때 봐야 할 선정 기준을 쉽게 정리했다.",content:`ETF는 주식 투자를 처음 시작하는 사람이 가장 자주 접하는 상품 중 하나다. 개별 종목을 하나씩 고르지 않아도 여러 자산에 나누어 투자할 수 있고, 주식처럼 사고팔 수 있어서 접근성이 좋다.
하지만 ETF가 쉽다는 말이 곧 안전하다는 뜻은 아니다. ETF도 가격이 떨어질 수 있고, 상품 구조를 잘못 이해하면 생각보다 큰 손실을 볼 수 있다. 특히 레버리지, 인버스, 해외 ETF, 원자재 ETF처럼 구조가 복잡한 상품은 &ldquo;ETF니까 분산투자겠지&quot;라고 단순하게 접근하면 위험하다.
이 글에서는 ETF의 장점과 단점, 투자할 때 조심해야 할 부분, 그리고 초보자가 ETF를 고를 때 확인해야 할 기준을 정리하였다.
ETF란 무엇인가 &nbsp; ETF는 &ldquo;Exchange Traded Fund&quot;의 줄임말로, 한국어로는 상장지수펀드라고 부른다. 말 그대로 거래소에 상장되어 주식처럼 사고팔 수 있는 펀드다.
예를 들어 KOSPI 200을 추종하는 ETF를 매수하면, 코스피 대표 기업 200개에 나누어 투자하는 효과를 얻을 수 있다. S&amp;P 500 ETF를 매수하면 미국 대표 대형주 500개에 분산 투자하는 것과 비슷한 효과를 기대할 수 있다.
일반 펀드는 보통 하루에 한 번 기준가로 거래되고, 환매에도 시간이 걸릴 수 있다. 반면 ETF는 장중에 주식처럼 실시간으로 매수와 매도가 가능하다. 그래서 펀드의 분산투자 장점과 주식의 거래 편의성을 함께 가진 상품으로 이해하면 쉽다.
ETF가 담는 자산은 다양하다.
종류 투자 대상 국내 주식 ETF 코스피, 코스닥, 배당주, 특정 업종 해외 주식 ETF S&amp;P 500, 나스닥100, 글로벌 주식 채권 ETF 국채, 회사채, 단기채, 미국채 원자재 ETF 금, 은, 원유 등 테마 ETF 반도체, 2차전지, AI, 헬스케어 등 레버리지·인버스 ETF 지수의 2배 수익률, 지수 하락 방향 추종 등 ETF는 구조가 단순한 상품도 있지만, 모든 ETF가 초보자에게 적합한 것은 아니다. 어떤 지수를 따라가는지, 어떤 자산을 담고 있는지 먼저 확인해야 한다.
ETF의 장점 &nbsp; ETF의 가장 큰 장점은 소액으로 분산투자를 할 수 있다는 점이다. 개별 주식을 직접 사려면 여러 종목을 골라야 하고, 종목마다 비중도 정해야 한다. ETF는 하나의 상품 안에 여러 종목이나 자산이 들어 있기 때문에 한 종목만 매수해도 어느 정도 분산 효과를 얻을 수 있다.
예를 들어 미국 대표 지수 ETF를 매수하면 애플, 마이크로소프트, 엔비디아 같은 대형 기업을 따로따로 사지 않아도 미국 주식시장 전체에 가까운 투자를 할 수 있다. 국내 배당 ETF를 매수하면 여러 배당주에 나누어 투자하는 효과를 기대할 수 있다.
두 번째 장점은 거래가 편하다는 점이다. ETF는 주식시장에 상장되어 있어서 장중에 원하는 가격으로 매수하거나 매도할 수 있다. 일반 펀드처럼 환매 신청 후 며칠을 기다리는 구조보다 훨씬 직관적이다.
세 번째 장점은 운용보수가 비교적 낮은 편이라는 점이다. 특히 특정 지수를 그대로 따라가는 패시브 ETF는 운용 방식이 단순해서 일반 액티브 펀드보다 비용이 낮은 경우가 많다. 장기 투자에서는 보수 차이가 누적 수익률에 영향을 줄 수 있기 때문에 비용은 생각보다 중요하다.
네 번째 장점은 투자 대상이 넓다는 점이다. 국내 주식뿐 아니라 미국 주식, 채권, 금, 원유, 리츠, 특정 산업 테마까지 ETF로 투자할 수 있다. 개인이 직접 접근하기 어려운 자산에도 비교적 쉽게 투자할 수 있다는 점은 ETF의 큰 매력이다.
다섯 번째 장점은 투자 전략을 단순하게 만들 수 있다는 점이다. 예를 들어 매월 일정 금액으로 S&amp;P 500 ETF를 적립식으로 매수하거나, 주식 ETF와 채권 ETF를 일정 비율로 나누어 보유하는 식으로 규칙을 만들기 쉽다. 초보자에게는 복잡한 종목 분석보다 이런 단순한 규칙이 더 현실적일 때가 많다.
ETF의 단점 &nbsp; ETF에도 단점은 있다. 가장 먼저 알아야 할 점은 원금 보장 상품이 아니라는 것이다. ETF는 예금이 아니다. 주식 ETF는 주식시장이 하락하면 같이 떨어질 수 있고, 채권 ETF도 금리 변동에 따라 가격이 흔들릴 수 있다. 금 ETF나 원유 ETF도 원자재 가격이 하락하면 손실이 난다.
두 번째 단점은 추종 오차가 생길 수 있다는 점이다. ETF는 특정 지수나 자산을 따라가도록 설계되지만 실제 수익률이 지수와 완전히 같지는 않을 수 있다. 운용보수, 거래 비용, 구성 종목 조정, 환율, 배당 반영 방식 등이 영향을 준다. 장기 투자자는 ETF가 얼마나 잘 따라가고 있는지 확인할 필요가 있다.
세 번째 단점은 거래량이 적은 ETF의 매매 비용이 커질 수 있다는 점이다. ETF는 주식처럼 호가가 형성된다. 거래량이 적고 매수·매도 호가 차이가 크면 원하는 가격보다 불리하게 거래될 수 있다. 이를 스프레드라고 한다. 초보자는 거래량과 순자산 규모가 너무 작은 ETF는 피하는 편이 낫다.
네 번째 단점은 상품명이 쉬워 보여도 내부 구조가 복잡할 수 있다는 점이다. 특히 레버리지 ETF와 인버스 ETF는 단기 매매용 성격이 강하다. 지수가 장기적으로 같은 수준에 머물러도 변동성이 크면 기대와 다른 결과가 나올 수 있다. &ldquo;2배 수익&quot;이라는 말만 보고 장기 보유하면 위험하다.
다섯 번째 단점은 세금과 환율 영향을 놓치기 쉽다는 점이다. 해외 주식형 ETF, 국내 상장 해외 ETF, 원자재 ETF는 과세 방식이 다를 수 있다. 해외 자산에 투자하는 ETF는 환율 변동도 수익률에 영향을 준다. 달러가 오르면 이익이 커질 수 있지만, 반대로 환율이 내려가면 투자 대상이 올라도 원화 기준 수익률은 낮아질 수 있다.
ETF는 편리한 도구지만, 편리함 때문에 검토를 생략하면 안 된다.
ETF 투자 유의사항 &nbsp; ETF를 살 때는 수익률 순위만 보고 고르면 안 된다. 최근 1개월 수익률이 높다는 이유만으로 매수하면 이미 많이 오른 테마에 늦게 들어가는 상황이 될 수 있다. 특히 시장에서 유행하는 테마 ETF는 상승할 때는 화려하지만 하락할 때도 빠르게 무너질 수 있다.
첫 번째로 투자 대상부터 확인해야 한다. ETF 이름만 보면 비슷해 보여도 실제 구성 종목은 다를 수 있다. 예를 들어 같은 반도체 ETF라도 어떤 상품은 국내 반도체 기업 중심이고, 어떤 상품은 미국 반도체 기업 중심일 수 있다. 같은 배당 ETF라도 고배당주 중심인지, 배당 성장주 중심인지에 따라 성격이 다르다.
두 번째로 운용보수와 기타 비용을 확인해야 한다. 보수 차이가 작아 보여도 장기 투자에서는 누적된다. 단기 매매가 아니라 장기 적립식 투자라면 비용이 낮고 구조가 단순한 상품이 유리한 경우가 많다.
세 번째로 순자산 규모와 거래량을 확인해야 한다. 순자산이 너무 작으면 ETF가 안정적으로 운용되는지 확인할 필요가 있고, 거래량이 적으면 매수·매도할 때 가격이 불리할 수 있다. 초보자는 시장에서 널리 거래되는 대표 ETF부터 보는 것이 좋다.
네 번째로 환헤지 여부를 확인해야 한다. 해외 자산 ETF에는 환헤지형과 환노출형이 있다. 환헤지형은 환율 영향을 줄이는 구조이고, 환노출형은 환율 변동이 수익률에 함께 반영된다. 어느 쪽이 무조건 좋다고 말할 수는 없고, 투자 목적에 따라 선택해야 한다.
다섯 번째로 분배금만 보고 판단하지 말아야 한다. 분배금을 많이 주는 ETF가 항상 좋은 ETF는 아니다. 분배금이 높아 보여도 가격이 하락하면 전체 수익률은 낮을 수 있다. 배당형 ETF를 볼 때는 분배금, 주가 흐름, 구성 종목, 총수익률을 함께 봐야 한다.
초보자를 위한 ETF 선정 기준 &nbsp; 초보자가 ETF를 고를 때는 복잡한 상품보다 넓은 시장을 추종하는 대표 ETF부터 보는 것이 좋다. 처음부터 특정 테마, 레버리지, 원자재처럼 변동성이 큰 상품에 집중하면 투자 경험을 쌓기도 전에 손실 스트레스가 커질 수 있다.
ETF를 고를 때는 다음 순서로 확인하면 실수가 줄어든다.
내가 투자하려는 자산이 무엇인지 정한다. ETF가 추종하는 지수를 확인한다. 구성 종목과 상위 비중을 확인한다. 운용보수와 기타 비용을 비교한다. 순자산 규모와 거래량을 확인한다. 최근 수익률보다 장기 수익률과 변동성을 함께 본다. 해외 자산 ETF라면 환율과 세금 영향을 확인한다. 예를 들어 &ldquo;미국 주식에 장기 투자하고 싶다&quot;는 목적이라면 S&amp;P 500이나 나스닥100 같은 대표 지수를 추종하는 ETF를 먼저 비교할 수 있다. &ldquo;안정적인 자산도 섞고 싶다&quot;면 단기채 ETF나 국채 ETF를 함께 볼 수 있다. &ldquo;배당 현금흐름이 필요하다&quot;면 고배당 ETF와 배당성장 ETF의 차이를 비교해야 한다.
초보자에게 중요한 것은 &ldquo;가장 많이 오른 ETF&quot;를 찾는 것이 아니라 &ldquo;내가 오래 이해하고 보유할 수 있는 ETF&quot;를 찾는 것이다. 상품 구조를 설명할 수 없다면 아직 투자할 준비가 덜 된 것이다.
실전에서는 하나의 ETF만 보는 것보다 비슷한 ETF 2~3개를 나란히 비교하는 것이 좋다.
확인 항목 보는 이유 추종 지수 ETF의 실제 투자 방향을 알 수 있음 구성 종목 특정 종목이나 업종에 과도하게 몰렸는지 확인 총보수 장기 투자 비용에 영향 순자산 규모 상품의 안정성과 시장 관심도 확인 거래량 매매 편의성과 호가 차이 확인 분배금 현금흐름과 과세 영향 확인 환헤지 여부 환율 변동 리스크 확인 ETF 선정 기준은 어렵게 보일 수 있지만, 결국 &ldquo;무엇에 투자하는지&rdquo;, &ldquo;비용은 적절한지&rdquo;, &ldquo;거래는 원활한지&rdquo;, &ldquo;내 투자 기간과 맞는지&quot;를 확인하는 과정이다.
정리 &nbsp; ETF는 초보 투자자에게 좋은 출발점이 될 수 있다. 소액으로 분산투자가 가능하고, 주식처럼 쉽게 사고팔 수 있으며, 다양한 자산에 접근할 수 있기 때문이다. 하지만 ETF도 투자 상품이므로 원금 손실 가능성이 있고, 상품 구조에 따라 위험도가 크게 달라진다.
핵심만 다시 정리하면 이렇다.
ETF는 주식처럼 거래되는 펀드이며, 여러 종목이나 자산에 나누어 투자할 수 있다. 장점은 분산투자, 낮은 비용, 거래 편의성, 다양한 투자 대상이다. 단점은 원금 손실 가능성, 추종 오차, 거래량 부족, 복잡한 상품 구조, 세금과 환율 영향이다. 레버리지와 인버스 ETF는 초보자의 장기 투자용으로 적합하지 않은 경우가 많다. ETF를 고를 때는 수익률보다 추종 지수, 구성 종목, 보수, 순자산, 거래량, 환헤지 여부를 먼저 확인해야 한다. ETF 투자를 시작한다면 처음에는 대표 지수형 ETF와 채권 ETF처럼 구조가 단순한 상품부터 공부하는 것이 좋다. 이후 투자 경험이 쌓이면 배당, 섹터, 테마, 해외 자산 ETF로 범위를 넓혀도 늦지 않다. 중요한 것은 남들이 좋다고 하는 상품을 따라 사는 것이 아니라, 내가 이해할 수 있는 상품을 내 계획에 맞게 선택하는 것이다.
자주 묻는 질문 &nbsp; ETF는 예금처럼 안전한가? &nbsp; 아니다. ETF는 예금자보호 대상 예금이 아니며, 시장 가격이 하락하면 손실이 날 수 있다. 다만 여러 종목에 분산 투자하는 구조라 개별 종목 투자보다 위험이 낮아질 수는 있다.
ETF는 장기 투자에 적합한가? &nbsp; 대표 지수를 추종하는 저비용 ETF는 장기 투자에 자주 활용된다. 하지만 레버리지, 인버스, 일부 원자재 ETF처럼 단기 변동성에 민감한 상품은 장기 보유에 적합하지 않을 수 있다.
ETF를 고를 때 수익률이 가장 중요한가? &nbsp; 최근 수익률만 보는 것은 위험하다. ETF를 고를 때는 추종 지수, 구성 종목, 총보수, 순자산 규모, 거래량, 환헤지 여부를 함께 확인해야 한다. 수익률은 그 결과를 보여주는 지표일 뿐, 상품의 구조를 대신 설명해주지는 않는다.`}).add({id:13,href:"/posts/hbm-ai-semiconductor-memory/",title:"HBM이란? AI 반도체와 SK하이닉스 삼성전자 주가가...",description:"HBM이 무엇인지, AI 반도체에서 왜 중요한지, SK하이닉스와 삼성전자 주가가 HBM 기대감에 움직인 이유를 초보자도 이해하기 쉽게 정리했다.",content:`요즘 주식을 공부하다 보면 반도체, AI, 엔비디아, HBM이라는 단어가 계속 나온다. 처음에는 모두 따로 노는 말처럼 보이지만, 실제로는 하나의 흐름으로 연결되어 있다. AI 서비스를 돌리려면 고성능 반도체가 필요하고, 그 반도체가 제 성능을 내려면 데이터를 아주 빠르게 주고받는 메모리가 필요하다. 여기서 등장하는 핵심 부품이 HBM이다.
HBM은 High Bandwidth Memory의 줄임말이고, 우리말로는 고대역 메모리라고 부른다. 쉽게 말하면 데이터를 아주 넓은 도로로 빠르게 보내는 D램이다. 일반 D램보다 구조가 복잡하고 만들기 어렵지만, AI 연산에서는 그만큼 가치가 커졌다.
최근 SK하이닉스와 삼성전자 주가가 반도체 기대감에 크게 움직인 이유도 여기에 있다. 단순히 &ldquo;반도체가 좋다&quot;가 아니라, AI 칩에 꼭 필요한 HBM 시장에서 한국 기업들이 중요한 위치를 차지하고 있기 때문이다.
HBM은 무엇인가 &nbsp; HBM은 D램의 한 종류다. D램은 컴퓨터, 스마트폰, 서버에서 데이터를 임시로 저장하는 메모리 반도체다. 우리가 프로그램을 실행하거나 앱을 열 때 데이터를 잠깐 올려두는 공간이라고 생각하면 된다.
기존 D램은 칩을 평면으로 놓고 사용하는 방식에 가깝다. 반면 HBM은 D램 칩 여러 장을 수직으로 쌓아 올린다. 같은 면적 안에 더 많은 데이터 통로를 만들고, GPU 바로 옆에 붙여 데이터 이동 거리를 줄이는 구조다.
비유하면 일반 D램은 차선이 적은 도로이고, HBM은 차선을 넓히고 목적지 바로 옆까지 도로를 붙인 구조다. AI 연산은 데이터를 계속 불러오고 계산하고 다시 저장하는 일을 반복하기 때문에, 이 도로가 좁으면 아무리 좋은 연산 장치를 써도 병목이 생긴다.
대역폭이 중요한 이유 &nbsp; 대역폭은 한 번에 얼마나 많은 데이터를 옮길 수 있는지를 뜻한다. AI 모델은 엄청난 양의 데이터를 빠르게 처리해야 하므로 대역폭이 매우 중요하다. GPU가 아무리 빠르게 계산할 준비가 되어 있어도, 메모리에서 데이터를 늦게 가져오면 전체 속도는 느려진다.
HBM은 이 문제를 줄이기 위해 만들어진 고성능 메모리다. 특히 엔비디아의 AI 가속기처럼 대규모 연산을 처리하는 칩에서는 HBM이 사실상 필수 부품처럼 쓰인다.
AI 반도체에서 HBM이 중요한 이유 &nbsp; 챗GPT 같은 생성형 AI는 사용자의 질문을 이해하고 답을 만들기 위해 수많은 계산을 한다. 이 계산을 주로 담당하는 부품이 GPU다. GPU는 원래 그래픽 처리를 위해 쓰였지만, 여러 계산을 동시에 처리하는 데 강해서 AI 시대의 핵심 반도체가 되었다.
문제는 GPU 혼자서는 충분하지 않다는 점이다. GPU가 계산하려면 계속 데이터를 가져와야 한다. 이때 메모리 속도가 느리면 GPU가 기다리는 시간이 생긴다. 비싼 GPU를 사놓고도 메모리 병목 때문에 성능을 다 쓰지 못하는 상황이 생길 수 있다.
HBM은 GPU 가까이에 배치되어 데이터를 빠르게 공급한다. 그래서 AI 데이터센터에서는 GPU와 HBM이 한 묶음처럼 중요하게 다뤄진다. 엔비디아 AI 칩 수요가 늘어나면 HBM 수요도 같이 늘어나는 구조다.
엔비디아와 HBM의 연결고리 &nbsp; 엔비디아는 AI 가속기 시장에서 강한 위치를 가진 회사다. H100, H200, B200 같은 제품은 AI 데이터센터 투자와 함께 자주 언급된다. 이런 고성능 AI 칩에는 일반 메모리보다 훨씬 빠른 HBM이 필요하다.
그래서 투자자들은 엔비디아 실적만 보는 것이 아니라, 엔비디아에 HBM을 공급하는 메모리 기업도 함께 본다. AI 칩이 많이 팔릴수록 그 칩에 들어가는 HBM도 많이 필요해지기 때문이다. 이 연결고리가 SK하이닉스와 삼성전자 주가를 움직이는 중요한 배경이 되었다.
HBM은 왜 만들기 어려울까 &nbsp; HBM은 단순히 D램을 여러 장 쌓으면 끝나는 제품이 아니다. 층층이 쌓인 칩 사이를 전기적으로 연결해야 하고, 열도 잡아야 하며, 완성품이 정상적으로 작동하는 비율도 높여야 한다.
HBM 제조에서 자주 나오는 기술이 TSV다. TSV는 Through Silicon Via의 약자로, 실리콘 칩을 수직으로 관통하는 미세한 전극을 뜻한다. 칩을 여러 층으로 쌓아도 데이터가 위아래로 빠르게 오가려면 이 연결 통로가 정밀하게 만들어져야 한다.
수율이 핵심이다 &nbsp; 반도체에서 수율은 만든 제품 중 정상 제품의 비율을 말한다. HBM은 여러 장의 칩을 쌓는 구조라 수율 관리가 더 어렵다. 한 층이 정상이어도 다른 층에서 문제가 생기면 전체 제품이 불량이 될 수 있다.
예를 들어 칩을 8단, 12단, 16단으로 높게 쌓을수록 용량과 성능은 좋아질 수 있지만, 그만큼 불량을 줄이는 난도도 올라간다. 미세 공정, 적층, 검사, 패키징 노하우가 모두 필요하다. 이 때문에 HBM은 돈만 투자한다고 단기간에 쉽게 따라잡기 어려운 분야로 평가된다.
발열과 패키징도 어렵다 &nbsp; 칩을 여러 장 겹치면 열이 빠져나가기 어렵다. AI 연산은 전력 소모가 크고 열도 많이 발생한다. 열을 제대로 관리하지 못하면 성능이 떨어지거나 제품 신뢰성이 낮아질 수 있다.
또 HBM은 GPU와 함께 고급 패키징 공정을 거친다. GPU와 HBM을 가까운 위치에 놓고 빠르게 연결해야 하므로, 단순한 메모리 생산 능력뿐 아니라 패키징 기술도 중요해진다. 결국 HBM 경쟁력은 D램 기술, 적층 기술, 수율 관리, 발열 제어, 패키징 역량이 모두 합쳐진 결과다.
SK하이닉스와 삼성전자 주가가 HBM에 반응한 이유 &nbsp; SK하이닉스와 삼성전자는 모두 글로벌 메모리 반도체 시장의 핵심 기업이다. 과거에는 PC, 스마트폰, 서버 수요에 따라 D램 업황이 크게 움직였다. 그런데 AI 시대가 열리면서 메모리 시장의 중심이 조금 달라졌다. 범용 D램보다 고성능 HBM이 더 높은 부가가치를 만들 수 있는 제품으로 떠올랐다.
SK하이닉스는 HBM 시장에서 앞서 있다는 평가를 받으며 투자자 관심을 크게 받았다. AI 칩에 들어가는 HBM 공급이 실적 개선으로 이어질 수 있다는 기대가 주가에 반영된 것이다. 특히 HBM은 일반 D램보다 가격과 수익성이 높게 평가되기 때문에, 공급 계약과 양산 능력이 기업 가치에 직접적인 영향을 줄 수 있다.
삼성전자도 HBM 경쟁에서 중요한 기업이다. 삼성전자는 메모리뿐 아니라 파운드리와 패키징 역량까지 함께 보유하고 있어, HBM 세대가 올라갈수록 다시 주목받을 가능성이 있다. 다만 시장에서는 제품 승인, 수율, 고객사 확보 같은 구체적인 진척을 민감하게 본다.
주가 상승은 기대와 실적이 함께 움직인다 &nbsp; 반도체주는 기대만으로도 먼저 움직이는 경우가 많다. AI 투자 확대, 엔비디아 신제품, HBM 공급 부족, 메모리 가격 상승 같은 뉴스가 나오면 투자자들은 앞으로의 실적을 미리 계산한다.
하지만 주가가 계속 오르려면 기대가 실제 실적으로 이어져야 한다. HBM 생산량이 늘고, 수율이 안정되고, 주요 고객사 공급이 확대되어야 한다. 반대로 고객사 승인 지연, 경쟁 심화, 가격 하락, AI 투자 둔화가 나타나면 주가도 흔들릴 수 있다.
그래서 HBM 관련주를 볼 때는 &ldquo;좋은 산업인가&quot;만 보면 부족하다. 해당 기업이 실제로 어느 세대 HBM을 양산하고 있는지, 고객사는 누구인지, 수율과 공급 물량은 안정적인지, 전체 매출에서 HBM 비중이 얼마나 커지고 있는지를 함께 봐야 한다.
HBM3E에서 HBM4로 넘어가는 흐름 &nbsp; 현재 AI 반도체 시장에서 많이 언급되는 제품은 HBM3E와 HBM4다. HBM3E는 기존 HBM3보다 성능을 높인 세대이고, HBM4는 그다음 단계로 더 높은 대역폭과 용량을 목표로 한다.
세대가 올라갈수록 단순히 속도만 빨라지는 것이 아니다. 더 많은 층을 안정적으로 쌓아야 하고, 전력 효율도 좋아져야 하며, GPU와 연결되는 구조도 더 정교해진다. 특히 HBM4부터는 메모리 기업의 기술력뿐 아니라 고급 패키징과 파운드리 협업 능력도 더 중요해질 수 있다.
투자 관점에서는 이 부분이 중요하다. HBM은 한 번 잘 만들었다고 끝나는 제품이 아니다. 고객사는 계속 더 빠르고 전력 효율이 좋은 제품을 요구한다. 따라서 HBM 경쟁은 현재 점유율만이 아니라 다음 세대 제품을 누가 먼저 안정적으로 공급하느냐의 싸움이기도 하다.
투자자가 확인하면 좋은 지표 &nbsp; HBM 관련 뉴스를 볼 때는 다음 기준을 같이 보면 좋다.
확인할 내용 왜 중요한가 HBM 세대 HBM3E, HBM4처럼 세대가 올라갈수록 고객사 요구 수준이 높아진다 주요 고객사 엔비디아, AMD, 빅테크향 공급 여부가 실적 기대에 영향을 준다 수율 생산해도 정상 제품 비율이 낮으면 이익으로 연결되기 어렵다 공급 물량 실제 매출과 직결되는 부분이다 평균판매가격 HBM 수익성에 큰 영향을 준다 설비투자 향후 생산 능력 확대를 가늠할 수 있다 반도체 뉴스는 숫자와 기술 용어가 많아서 어렵게 느껴진다. 그래도 위 기준만 잡고 보면 단순한 홍보성 뉴스와 실적에 가까운 뉴스를 어느 정도 구분할 수 있다.
마무리 &nbsp; HBM은 AI 반도체 시대에 중요해진 고성능 D램이다. D램 칩을 수직으로 쌓고, GPU 가까이 배치해 데이터를 빠르게 주고받도록 만든 메모리라고 이해하면 쉽다.
SK하이닉스와 삼성전자 주가가 HBM에 민감하게 반응한 이유는 AI 칩 수요가 곧 HBM 수요로 이어지기 때문이다. 특히 HBM은 만들기 어렵고 공급 기업이 제한적이어서, 기술을 확보한 기업은 높은 수익성을 기대할 수 있다.
다만 HBM이 좋다고 해서 모든 반도체주가 항상 오르는 것은 아니다. 주가는 기대를 먼저 반영하고, 이후 실적과 경쟁 상황에 따라 다시 조정된다. HBM 관련 투자를 볼 때는 기술력, 고객사, 수율, 공급 물량, 다음 세대 제품 경쟁력을 함께 확인하는 습관이 필요하다.
처음 주식을 공부하는 단계라면 HBM을 복잡한 기술 용어로만 보지 말고, AI 칩의 성능을 받쳐주는 핵심 부품으로 이해하면 된다. 그 관점에서 뉴스를 보면 SK하이닉스, 삼성전자, 엔비디아 관련 기사가 훨씬 자연스럽게 연결된다.
자주 묻는 질문 &nbsp; HBM은 일반 D램과 무엇이 다른가? &nbsp; 일반 D램은 보통 평면 구조로 쓰이지만, HBM은 D램 칩을 여러 층으로 쌓아 데이터 통로를 넓힌 구조다. GPU 가까이에 배치되어 데이터를 빠르게 주고받을 수 있기 때문에 AI 연산에 적합하다.
HBM이 좋으면 SK하이닉스와 삼성전자 주가는 계속 오르나? &nbsp; 그렇게 단순하게 볼 수는 없다. HBM 수요가 늘면 실적 기대가 커질 수 있지만, 주가는 이미 기대를 먼저 반영하기도 한다. 실제 공급 물량, 수율, 고객사 확보, 가격, 경쟁 상황을 함께 봐야 한다.
엔비디아가 잘되면 HBM 기업도 무조건 좋은가? &nbsp; 엔비디아 AI 칩 판매가 늘면 HBM 수요에도 긍정적일 가능성이 크다. 다만 어떤 기업이 실제로 공급 계약을 따내는지, 제품 승인을 받았는지, 충분한 물량을 안정적으로 생산할 수 있는지가 더 중요하다.`}).add({id:14,href:"/docs/isa/basic/account-guide-tax-saving/",title:"ISA 계좌 완벽 정리",description:"ISA 계좌의 뜻, 가입 조건, 신탁형·일임형·중개형 차이, 비과세와 분리과세 혜택, 가입 전 확인할 절세 전략까지 쉽게 정리했다.",content:`ISA 계좌, 이름은 많이 들어봤는데 막상 만들려고 하면 생각보다 헷갈린다. 예금도 된다고 하고, ETF도 된다고 하고, 세금을 줄여준다고 하는데 &ldquo;그래서 내게 진짜 필요한 계좌인가?&ldquo;라는 질문이 먼저 나온다.
결론부터 말하면 ISA는 투자나 저축을 조금이라도 할 계획이 있는 사람에게 꽤 쓸모 있는 절세 계좌다. 다만 종류가 여러 가지라서 아무 계좌나 만들면 기대한 방식으로 운용하기 어렵다. 이 글에서는 ISA 뜻부터 가입 조건, 계좌 종류, 세제 혜택, 가입 전 체크할 포인트까지 한 번에 정리했다.
ISA 계좌란 무엇인가 &nbsp; ISA는 &ldquo;Individual Savings Account&quot;의 약자이고, 한국어로는 개인종합자산관리계좌라고 부른다. 말 그대로 여러 금융상품을 하나의 계좌 안에서 관리할 수 있는 계좌다.
ISA 계좌에서는 계좌 유형에 따라 예금, 펀드, ETF, 국내 상장주식 같은 상품을 운용할 수 있다. 일반 입출금 통장처럼 그냥 돈을 넣어두는 계좌라기보다, 투자와 저축을 한 계좌에서 묶어 관리하면서 세제 혜택을 받는 구조에 가깝다.
핵심은 단순하다.
여러 금융상품을 한 계좌에서 운용할 수 있다. 계좌 안에서 발생한 이익과 손실을 합산해 세금을 계산한다. 일정 순이익까지는 비과세 혜택을 받을 수 있다. 비과세 한도를 넘은 순이익도 일반 과세보다 낮은 세율로 분리과세된다. 그래서 ISA는 &ldquo;만능통장&quot;이라고도 불린다. 이름만 보면 거창하지만, 실제로는 세금을 줄이기 위해 만든 투자용 바구니라고 이해하면 쉽다.
ISA 주요 특징: 가입 자격, 납입 한도, 의무가입기간 &nbsp; ISA를 만들기 전에 가장 먼저 봐야 할 것은 가입 가능 여부와 돈을 넣을 수 있는 한도다. 계좌 자체는 어렵지 않게 만들 수 있지만, 세제 혜택을 받으려면 기본 조건을 알아야 한다.
가입 자격 &nbsp; ISA는 원칙적으로 19세 이상 국내 거주자라면 가입할 수 있다. 직전 연도에 근로소득이 있다면 15세 이상 19세 미만도 가입 가능하다. 이 경우에는 가입 직전 연도에 소득이 있었다는 사실을 증명해야 하므로 소득확인증명서가 필요하다.
다만 직전 3년 중 1회 이상 금융소득종합과세 대상자였던 사람은 가입할 수 없다. 이 조건은 ISA가 일반 투자자와 중산층 자산 형성을 돕기 위한 제도라는 성격 때문에 붙어 있다.
납입 한도 &nbsp; ISA는 1년에 최대 2,000만원까지 납입할 수 있다. 매년 한도를 다 채우지 못했다면 남은 한도는 다음 해로 이월할 수 있고, 전체 납입 한도는 최대 1억원이다.
예를 들어 올해 500만원만 넣었다면 사용하지 않은 1,500만원 한도가 다음 해로 넘어간다. 그래서 처음부터 매년 2,000만원을 꽉 채우지 못해도 너무 부담 가질 필요는 없다.
의무가입기간 &nbsp; ISA의 의무가입기간은 3년이다. 중간에 해지 자체는 가능하지만, 세제 혜택을 제대로 받으려면 3년을 유지해야 한다. 3년을 채우지 못하고 일반 중도해지를 하면 그동안 받은 세제 혜택이 추징될 수 있다.
다만 무조건 3년 뒤에 끝내야 하는 것은 아니다. 만기일은 연장할 수 있고, 만기 이후에도 상황에 따라 계속 운용하거나 해지해 다른 계좌로 옮길 수 있다.
ISA 종류: 신탁형, 일임형, 중개형 차이 &nbsp; ISA는 운용 방식에 따라 신탁형, 일임형, 중개형으로 나뉜다. 이름이 어렵지만 기준은 &ldquo;누가 투자 결정을 하느냐&quot;다.
신탁형 ISA &nbsp; 신탁형 ISA는 내가 상품을 고르고 금융기관에 운용 지시를 하는 방식이다. 정기예금, 펀드 등 비교적 다양한 상품을 담을 수 있고, 금융기관별로 취급 상품이 다르다.
예금성 상품을 ISA 안에서 함께 운용하고 싶다면 신탁형을 먼저 확인해볼 만하다. 안정적인 상품 위주로 가져가고 싶거나, 은행에서 상담을 받으며 관리하고 싶은 사람에게 잘 맞는다.
일임형 ISA (은행 및 증권사 가입 가능) &nbsp; 일임형 ISA는 금융기관의 전문가에게 운용을 맡기는 방식이다. 투자자가 직접 종목이나 상품을 하나하나 고르기보다, 본인의 투자성향에 맞는 포트폴리오를 선택하고 운용은 금융기관이 진행한다.
투자 경험이 적고 상품 선택이 부담스럽다면 일임형이 편할 수 있다. 대신 운용 방식과 수수료를 반드시 확인해야 한다. 알아서 해준다는 말만 보고 가입하면 실제 수익률과 비용 구조를 놓치기 쉽다.
중개형 ISA (증권사에서만 가입 가능) &nbsp; 중개형 ISA는 일반 주식계좌처럼 투자자가 직접 상품을 사고파는 방식이다. 국내 상장주식, ETF, 펀드 등 직접 투자에 익숙한 사람에게 적합하다. 다만 예금성 상품에는 투자할 수 없고, 증권사에서 가입하는 형태가 일반적이다.
요즘 ISA를 검색하면 중개형 ISA 이야기가 많이 나오는 이유도 여기에 있다. ETF나 국내 주식 중심으로 직접 운용하고 싶다면 중개형이 가장 직관적이다.
ISA 유형: 일반형, 서민형, 농어민형 세제 혜택이 달라진다 &nbsp; ISA는 운용 방식뿐 아니라 가입자의 소득 수준과 직업에 따라 일반형, 서민형, 농어민형으로도 나뉜다. 여기서 중요한 차이는 비과세 한도다.
일반형 ISA &nbsp; 일반형은 19세 이상 국내 거주자라면 대부분 가입할 수 있는 기본 유형이다. 별도 소득 요건을 따지지 않기 때문에 가장 흔한 형태라고 보면 된다.
일반형 ISA는 계좌 내 순이익 200만원까지 비과세 혜택을 받을 수 있다. 이 한도를 넘는 순이익은 9.9%로 분리과세된다.
서민형 ISA &nbsp; 서민형은 소득 요건을 충족할 때 가입할 수 있다. 소득이 없거나, 근로소득 5,000만원 이하 또는 종합소득 3,800만원 이하라면 서민형 대상이 될 수 있다.
서민형의 장점은 비과세 한도가 더 크다는 점이다. 일반형은 순이익 200만원까지 비과세지만, 서민형은 순이익 400만원까지 비과세다. 조건이 된다면 일반형으로 둘 이유가 거의 없다.
가입할 때는 소득확인증명서가 필요할 수 있으므로, 금융기관 앱이나 지점 안내를 확인하는 것이 좋다.
농어민형 ISA &nbsp; 농어민형은 농어업에 종사하는 사람을 위한 유형이다. 종합소득금액 3,800만원 이하 요건이 붙고, 농어업인 확인서나 농어업경영체 등록확인서 같은 서류가 필요할 수 있다.
세제 혜택은 서민형과 비슷하게 순이익 400만원까지 비과세를 받을 수 있다. 농어업 종사자라면 일반형으로 바로 만들기 전에 농어민형 가능 여부를 먼저 확인하는 것이 낫다.
ISA 세제 혜택: 비과세, 분리과세, 손익통산 &nbsp; ISA의 가장 큰 장점은 세금이다. 일반 계좌에서는 이자나 배당소득에 보통 15.4% 세금이 붙는다. 그런데 ISA는 일정 순이익까지 비과세가 되고, 초과분도 9.9%로 분리과세된다.
예를 들어 일반형 ISA에서 순이익이 300만원 발생했다고 가정해보자. 일반형은 200만원까지 비과세이므로, 남은 100만원에 대해서만 9.9% 분리과세가 적용된다. 일반 계좌에서 전체 이익에 과세되는 것과 비교하면 차이가 생긴다.
서민형이나 농어민형은 비과세 한도가 400만원이므로, 같은 수익이라면 절세 효과가 더 크다.
손익통산이 중요한 이유 &nbsp; ISA는 계좌 안의 이익과 손실을 합산해 순이익을 계산한다. 이것을 손익통산이라고 한다.
예를 들어 ISA 안에서 A ETF로 100만원 이익이 나고, B 펀드에서 40만원 손실이 났다면 과세 판단 기준은 100만원이 아니라 60만원 순이익이다. 손실까지 반영되므로 일반 계좌보다 세금 계산이 유리해질 수 있다.
단, 국내 상장주식 매매차익처럼 원래 비과세인 소득은 손익통산 대상에서 제외될 수 있다. 그래서 ISA 안에 어떤 상품을 담을지 정할 때는 수익률뿐 아니라 과세 구조도 같이 봐야 한다.
ISA 가입 방법과 가입 전 체크리스트 &nbsp; ISA는 은행, 증권사 앱 또는 지점에서 가입할 수 있다. 다만 모든 금융기관이 모든 유형을 똑같이 취급하는 것은 아니다. 중개형 ISA는 증권사 중심이고, 신탁형이나 일임형은 은행과 증권사별로 제공 방식이 다르다.
가입 전에는 아래 순서로 확인하면 된다.
내가 일반형, 서민형, 농어민형 중 어디에 해당하는지 확인한다. 예금성 상품을 담을지, ETF와 주식 중심으로 직접 운용할지 정한다. 신탁형, 일임형, 중개형 중 목적에 맞는 유형을 고른다. 수수료, 취급 상품, 모바일 거래 편의성을 비교한다. 3년 이상 유지할 수 있는 돈만 납입한다. 개인적으로는 초보자라면 &ldquo;계좌를 어디서 만들까&quot;보다 &ldquo;무엇을 담을 계좌인가&quot;를 먼저 정하는 편이 낫다고 본다. 예금 중심이면 신탁형이 편할 수 있고, ETF를 직접 사고 싶다면 중개형이 더 자연스럽다.
ISA 절세팁: 이렇게 쓰면 효율이 좋아진다 &nbsp; ISA는 만들기만 한다고 무조건 큰 이익이 나는 계좌는 아니다. 세제 혜택을 받으려면 운용 방식이 중요하다.
3년 이상 유지할 돈만 넣기 &nbsp; ISA는 의무가입기간 3년이 핵심이다. 당장 써야 할 전세자금, 생활비, 비상금까지 ISA에 넣는 것은 좋지 않다. 중도해지 가능성까지 고려하면 여유자금 중심으로 넣는 것이 안정적이다.
이자와 배당이 나는 상품을 우선 검토하기 &nbsp; ISA의 절세 효과는 과세되는 소득이 있을 때 더 잘 드러난다. 예금 이자, 채권형 상품 이자, 배당 ETF처럼 세금이 붙는 수익이 발생하는 상품을 ISA 안에서 운용하면 혜택을 체감하기 쉽다.
배당 + ETF 조합
배당 ETF 인덱스 ETF 이 조합은 세금 절감 효과를 가장 체감하기 쉽다.
서민형 전환 가능성을 확인하기 &nbsp; 처음에는 일반형으로 가입했더라도 이후 소득 요건이 맞으면 서민형 전환이 가능할 수 있다. 서민형은 비과세 한도가 400만원으로 더 크기 때문에, 조건이 된다면 놓치지 않는 게 좋다.
만기 후 연금계좌 이전도 고려하기 &nbsp; ISA 만기 자금을 연금저축이나 IRP로 옮기면 추가 절세 전략을 만들 수 있다. 단순히 만기 때 현금으로 빼는 것보다, 장기 자금이라면 연금계좌와 함께 설계하는 편이 더 유리할 수 있다.
즉, ISA로 세금 줄이고, 연금으로 한 번 더 절세 이중 절세 구조가 만들어진다.
재테크를 처음 시작하는 입장이라면 이 구조만 잡아도 방향은 제대로 잡은 거다.
정리: ISA는 절세 계좌지만 목적에 맞게 골라야 한다 &nbsp; ISA는 여러 금융상품을 한 계좌에서 운용하면서 세금 부담을 줄일 수 있는 계좌다. 1년에 최대 2,000만원, 총 1억원까지 납입할 수 있고, 3년 이상 유지하면 비과세와 분리과세 혜택을 받을 수 있다.
핵심만 다시 정리하면 이렇다.
ISA는 개인종합자산관리계좌다. 19세 이상 국내 거주자는 대부분 가입할 수 있다. 연 납입 한도는 2,000만원, 총 한도는 1억원이다. 일반형은 순이익 200만원, 서민형·농어민형은 400만원까지 비과세다. 비과세 한도 초과분은 9.9% 분리과세된다. 신탁형, 일임형, 중개형은 운용 방식이 다르다. 3년 이상 유지해야 세제 혜택을 제대로 받을 수 있다. ISA는 재테크 초보에게도 좋은 출발점이 될 수 있다. 다만 &ldquo;남들이 좋다니까 만든다&quot;보다 내 돈의 목적을 먼저 정해야 한다. 안정적으로 예금과 펀드를 담을지, ETF와 주식을 직접 운용할지에 따라 맞는 ISA 유형이 달라진다.
세법과 금융상품 조건은 바뀔 수 있으므로 실제 가입 전에는 금융기관의 최신 안내와 상품설명서를 확인하는 것이 좋다. 특히 이 글에서 참고한 KB Think 자료는 2025년 12월 3일 기준 내용이므로, 가입 시점의 조건을 한 번 더 확인해야 한다.
자주 묻는 질문 &nbsp; Q1. ISA 계좌는 여러 개 만들 수 있나? &nbsp; 아니다. ISA는 전 금융기관을 통틀어 1인 1계좌만 가입할 수 있다. 은행과 증권사에 각각 하나씩 만드는 방식은 불가능하다.
Q2. ISA 계좌에서 일부 출금할 수 있나? &nbsp; 가능한 경우가 있지만, 운용 중인 상품 종류와 금융기관 기준에 따라 달라진다. 일부해약을 하더라도 세금, 보수, 정산 금액이 반영될 수 있으므로 출금 전에 예상 금액을 확인해야 한다.
Q3. 중개형 ISA가 무조건 가장 좋은가? &nbsp; 그렇지 않다. ETF나 국내 주식을 직접 운용할 사람에게는 중개형이 편하지만, 예금성 상품을 담고 싶다면 중개형은 맞지 않을 수 있다. 투자 방식에 따라 신탁형이나 일임형이 더 나을 수도 있다.
Q4. ISA를 중도해지하면 어떻게 되나? &nbsp; 일반 중도해지를 하면 세제 혜택을 받지 못하거나 이미 받은 혜택이 추징될 수 있다. 그래서 ISA에는 3년 이상 묶어둘 수 있는 여유자금만 넣는 것이 좋다.
Q5. 일반형으로 가입한 뒤 서민형으로 바꿀 수 있나? &nbsp; 소득 요건을 충족하면 전환이 가능할 수 있다. 보통 소득확인증명서 같은 서류가 필요하므로, 가입한 금융기관에 전환 가능 시점과 필요 서류를 확인해야 한다.`}).add({id:15,href:"/docs/isa/basic/low-income-conversion/",title:"ISA 서민형 전환 방법",description:"ISA 일반형과 서민형의 가입 조건, 비과세 한도 차이, 소득확인증명서 발급과 서민형 전환 방법, 주의할 점을 짧고 쉽게 정리했다.",content:`ISA 계좌를 만들 때 대부분은 일반형으로 시작한다. 그런데 소득 조건을 충족한다면 서민형 ISA로 전환하는 것이 유리할 수 있다. 이유는 단순하다. 비과세 한도가 일반형보다 2배 크기 때문이다.
일반형 ISA는 순이익 200만원까지 비과세지만, 서민형 ISA는 순이익 400만원까지 비과세다. 같은 계좌를 운용하더라도 조건이 맞으면 세금 혜택을 더 받을 수 있다.
ISA 일반형과 서민형 차이 &nbsp; ISA는 소득 수준에 따라 일반형과 서민형으로 나뉜다. 둘 다 개인종합자산관리계좌이고, 한 계좌에서 여러 금융상품을 운용하면서 비과세와 분리과세 혜택을 받을 수 있다.
차이는 가입 대상과 비과세 한도다.
구분 일반형 ISA 서민형 ISA 가입 대상 19세 이상 거주자, 15~19세 미만 근로소득자 총급여 5,000만원 이하 근로자 또는 종합소득금액 3,800만원 이하 사업자 비과세 한도 순이익 200만원 순이익 400만원 의무가입기간 3년 3년 납입한도 연 2,000만원, 총 1억원 연 2,000만원, 총 1억원 서민형은 조건을 충족하는 사람만 가입할 수 있다. 대신 비과세 한도가 일반형보다 크다. ISA에서 이자, 배당, 펀드 수익 등이 발생할 가능성이 있다면 서민형 전환 여부를 확인해볼 만하다.
ISA 서민형 전환 조건 &nbsp; ISA 서민형은 다음 조건에 해당할 때 가입하거나 전환할 수 있다.
근로소득자: 총급여 5,000만원 이하 사업자 등 종합소득자: 종합소득금액 3,800만원 이하 소득이 없는 사람도 요건에 따라 서민형 대상이 될 수 있음 이미 ISA 일반형에 가입했더라도 조건을 만족하면 서민형으로 전환할 수 있다. 기준은 가입 시점 또는 만기 연장 시점의 직전년도 소득이다.
예를 들어 올해 ISA 일반형에 가입했는데 직전년도 총급여가 5,000만원 이하라면, 필요한 서류를 제출해 서민형 전환을 신청할 수 있다.
ISA 서민형 전환 방법 &nbsp; ISA 일반형을 서민형으로 전환하려면 소득확인증명서가 필요하다. 정확한 서류명은 &ldquo;소득확인증명서(개인종합자산관리계좌 가입용)&ldquo;이다.
전환 절차는 보통 다음 순서로 진행된다.
국세청 홈택스에서 소득확인증명서를 발급한다. ISA 계좌를 개설한 금융기관에 전환 가능 여부를 확인한다. 필요한 서류를 준비해 지점에 방문한다. 일반형에서 서민형으로 전환 신청을 한다. 금융기관 심사 후 전환 결과를 확인한다. KB Think 안내에 따르면 ISA 서민형 전환은 비대면으로 불가능하고, 은행 지점 방문이 필요하다. 또한 전환은 계좌에 가입한 해와 만기된 ISA 계좌를 연장한 해에만 변경할 수 있다고 안내되어 있다.
소득확인증명서는 어디서 발급할까? &nbsp; 소득확인증명서는 국세청 홈택스에서 발급할 수 있다. 금융기관에 따라 은행 앱의 전자문서지갑이나 국민지갑 같은 기능으로 발급을 안내하기도 한다.
서류를 발급할 때는 일반 소득금액증명원이 아니라 &ldquo;개인종합자산관리계좌 가입용&rdquo; 소득확인증명서인지 확인해야 한다. 이름이 비슷한 서류가 많아서 잘못 발급하면 다시 준비해야 할 수 있다.
전환 신청 전에 금융기관 고객센터나 지점에 아래 내용을 먼저 물어보는 것이 좋다.
지금 전환 가능한 시점인지 필요한 서류가 소득확인증명서 외에 더 있는지 지점 방문 예약이 필요한지 서민형 전환 처리에 며칠 정도 걸리는지 주의할 점 &nbsp; 서민형 조건을 충족하지 못하면 일반형으로 전환될 수 있다. 국세청은 ISA 가입 및 만기 연장 계좌에 대해 서민형 대상 여부를 검증하고, 금융기관에 결과를 통보한다. 이때 요건이 맞지 않는 것으로 판단되면 일반형으로 바뀔 수 있다.
또한 ISA는 의무가입기간 3년을 지켜야 세제 혜택을 제대로 받을 수 있다. 서민형으로 전환했다고 해도 중도해지하거나 부적격 통보를 받으면 과세특례를 적용받은 세액이 추징될 수 있다.
세법과 금융기관 업무 기준은 바뀔 수 있으므로, 실제 전환 전에는 가입한 금융기관의 최신 안내를 확인해야 한다.
정리: 조건이 맞으면 서민형 전환부터 확인하자 &nbsp; ISA 서민형 전환은 복잡해 보이지만 핵심은 간단하다.
일반형은 순이익 200만원까지 비과세다. 서민형은 순이익 400만원까지 비과세다. 총급여 5,000만원 이하 또는 종합소득금액 3,800만원 이하라면 서민형 대상이 될 수 있다. 전환에는 소득확인증명서(개인종합자산관리계좌 가입용)가 필요하다. 비대면 전환이 어려울 수 있고, 지점 방문이 필요할 수 있다. 전환 가능 시점은 가입한 해 또는 만기 연장한 해로 제한될 수 있다. ISA를 이미 일반형으로 만들었다면 그대로 두기 전에 서민형 전환 대상인지 확인해보는 것이 좋다. 조건이 맞는다면 같은 계좌를 운용하면서 비과세 한도를 더 크게 가져갈 수 있다.
자주 묻는 질문 &nbsp; Q1. ISA 일반형으로 가입했는데 서민형으로 바꿀 수 있나? &nbsp; 가능할 수 있다. 가입 시점 또는 만기 연장 시점의 직전년도 소득이 서민형 기준을 충족하면 전환을 신청할 수 있다.
Q2. ISA 서민형 전환에 필요한 서류는 무엇인가? &nbsp; 소득확인증명서(개인종합자산관리계좌 가입용)가 필요하다. 금융기관에 따라 추가 신분증이나 신청서가 필요할 수 있다.
Q3. ISA 서민형 전환은 앱으로 가능한가? &nbsp; KB Think 안내 기준으로는 비대면 전환이 불가하고 지점 방문이 필요하다. 금융기관별로 업무 방식이 다를 수 있으므로 가입한 곳에 확인해야 한다.
Q4. 서민형 조건이 안 되면 어떻게 되나? &nbsp; 국세청 검증 결과 서민형 요건을 충족하지 못하면 일반형으로 전환될 수 있다.`}).add({id:16,href:"/posts/irs-irp-pension-savings/",title:"ISA, IRP, 연금저축에 대한 쉬운 설명",description:"ISA, IRP, 연금저축은 개인의 자산 형성과 노후 대비를 지원하기 위하여 정부가 세제 혜택을 부여하는 대표적인 절세 금융상품이다. 이 3가지 제도는 목적과 세제 구조, 인출 조건에서 차이가 있으므로 이를 구분하여 이해할 필요가 있다.",content:`1. ISA (개인종합자산관리계좌) &nbsp; ISA(Individual Savings Account)는 하나의 계좌에서 예금, 펀드, ETF, 주식 등 다양한 금융상품을 통합 관리하면서 세제 혜택을 받을 수 있는 계좌이다.
① 주요 특징 &nbsp; 하나의 계좌로 다양한 금융상품 운용 가능 일정 한도 내 수익에 대해 비과세 혜택 초과 수익에 대해서는 저율(9.9%) 분리과세 적용 의무 가입기간: 일반적으로 3년 ② 세제 혜택 &nbsp; 일반형: 순이익 200만원까지 비과세 서민형/농어민형: 순이익 400만원까지 비과세 비과세 한도 초과분은 9.9% 분리과세 (일반 금융소득세 15.4%보다 낮음) ③ 납입 한도 &nbsp; 연 2,000만원 최대 1억원까지 누적 납입 가능 ④ 목적 &nbsp; 중·단기 자산 형성 절세를 통한 투자 수익 극대화 금융상품 통합 관리 ISA는 비교적 유연한 인출이 가능하며, 노후 전용 상품은 아니다.
2. IRP (개인형 퇴직연금) &nbsp; IRP(Individual Retirement Pension)는 노후 대비를 목적으로 하는 퇴직연금 계좌이다. 근로자, 자영업자 모두 가입 가능하며 세액공제 혜택이 매우 큰 것이 특징이다.
① 주요 특징 &nbsp; 노후 자금 마련 목적 세액공제 혜택 제공 55세 이후 연금 형태로 수령 중도 인출은 제한적 ② 세제 혜택 &nbsp; 연간 납입액에 대해 세액공제 가능
연금저축 + IRP 합산 900만원 한도 (2024년 기준) 공제율 13.2% ~ 16.5% (소득 수준에 따라 다름) 예를 들어 900만원을 납입할 경우 최대 약 148만원의 세금 환급 효과가 발생할 수 있다.
③ 과세 구조 &nbsp; 납입 시: 세액공제 운용 중: 과세 이연 수령 시: 연금소득세(3.3~5.5%) 부과 즉, 세금을 나중으로 미루면서 노후에 낮은 세율로 과세하는 구조이다.
④ 목적 &nbsp; 노후 대비 소득공제를 통한 연말정산 절세 장기 복리 투자 3. 연금저축 &nbsp; 연금저축은 개인이 노후 대비를 위해 가입하는 연금 상품이다. 보험, 펀드, 신탁 형태가 존재한다.
① 주요 특징 &nbsp; 개인이 자유롭게 가입 연간 납입 한도 600만원 IRP와 합산하여 세액공제 한도 900만원 ② 세액공제 혜택 &nbsp; 공제율: IRP와 동일 (13.2%~16.5%) ③ 수령 조건 &nbsp; 만 55세 이후 연금 수령 가능 연금소득세 3.3~5.5% 연금저축은 IRP보다 운용이 비교적 자유롭고 중도 인출이 일부 가능하다는 점이 차이이다.
연금저축은 “기본적인 노후 세액공제 상품” 으로 이해하면 된다.
3. ISA와 IRP의 비교 &nbsp; 구분 ISA 연금저축 IRP 목적 투자 절세,자산 증식 노후 대비 퇴직·노후 대비 세제 혜택 비과세/분리과세 세액공제 세액공제 세액공제 한도 없음 600만원 연금저축 포함 900만원 의무 기간 3년 55세까지 55세까지 중도 인출 비교적 자유 일부 가능 매우 제한적 투자 성격 중기 투자 장기 투자 장기 투자 4. 어떻게 활용하는 것이 좋은가 &nbsp; 일반적으로 다음과 같은 전략이 활용된다.
1단계: 연금저축 600만원 납입한다. 2단계: IRP 추가 납입하여 총 900만원 채운다. 연말정산 환급 효과가 즉시 발생하기 때문에 세액공제를 최대한 활용한다. 3단계: 여유 자금은 ISA에서 납입하여 투자 수익에 대한 비과세 혜택을 활용한다. ISA 만기 자금을 IRP로 이전하여 추가 세액공제 혜택을 받는 전략도 가능하다.`}).add({id:17,href:"/posts/kcb-nice-credit-score-difference/",title:"KCB NICE 신용점수 차이 나는 이유와 점수 올리는 방법",description:"KCB와 NICE 신용점수가 다르게 나오는 이유를 평가 기준별로 설명하고, 내 점수가 낮은 쪽을 중심으로 신용점수를 관리하는 방법을 정리하였다.",content:`신용점수를 조회했는데 KCB 점수와 NICE 점수가 서로 다르게 나오는 경우가 많다. 어떤 사람은 NICE가 더 높고, 어떤 사람은 KCB가 더 높다. 그래서 &ldquo;내 신용점수가 정확히 몇 점이라는 거지?&ldquo;라는 생각이 들 수 있다.
결론부터 말하면 둘 다 내 신용점수다. 다만 점수를 계산하는 회사가 다르고, 각 회사가 중요하게 보는 기준도 조금씩 다르다. 은행이나 카드사가 대출 한도, 금리, 카드 발급 가능성을 볼 때도 두 점수 중 하나만 기계적으로 보는 것이 아니라 자체 심사 기준과 함께 참고한다.
그래서 KCB와 NICE 신용점수 차이를 이해하면 점수를 올릴 때도 막연하지 않다. 내가 어떤 항목에서 약한지 보고, 낮게 나온 쪽의 평가 성향에 맞춰 관리하면 된다.
KCB와 NICE는 무엇이 다른가 &nbsp; KCB와 NICE는 개인의 신용도를 평가하는 대표적인 민간 신용평가회사다. 신용도는 쉽게 말해 &ldquo;돈을 빌렸을 때 약속대로 갚을 가능성&quot;을 점수로 표현한 것이다.
KCB는 코리아크레딧뷰로를 말한다. KB국민은행, 삼성카드, 서울보증 등 여러 금융회사가 참여해 2005년에 만들어진 신용평가회사다.
NICE는 NICE평가정보를 말한다. 1985년에 설립된 신용평가회사로, 국내에서 오래전부터 개인 신용정보와 기업정보 관련 서비스를 제공해 왔다.
두 회사 모두 신용점수를 만들지만 같은 계산식을 쓰지는 않는다. 같은 사람의 카드 사용 내역, 대출 내역, 연체 이력 등을 보더라도 어떤 항목에 더 높은 비중을 두느냐에 따라 결과가 달라진다.
신용점수를 평가하는 주요 항목 &nbsp; KCB와 NICE가 보는 큰 항목은 비슷하다. 대표적으로 상환 이력, 부채 수준, 신용거래 형태, 신용거래 기간, 비금융 정보가 있다.
상환 이력은 대출금이나 카드값을 제때 갚았는지를 보는 항목이다. 연체가 있으면 가장 직접적으로 영향을 받는다.
부채 수준은 현재 빚이 얼마나 있는지를 보는 항목이다. 대출 잔액이 많거나 카드 결제 예정 금액이 계속 커지면 부담으로 볼 수 있다.
신용거래 형태는 어떤 방식으로 신용거래를 해 왔는지를 본다. 예를 들어 신용카드를 정상적으로 쓰고 갚았는지, 현금서비스나 카드론 같은 고위험 거래가 많은지, 제1금융권 대출인지 제2금융권 또는 대부업 대출인지 등이 영향을 줄 수 있다.
신용거래 기간은 신용카드나 대출 같은 신용거래를 얼마나 오래 해 왔는지를 보는 항목이다. 오래 거래했다고 무조건 높은 점수가 되는 것은 아니지만, 연체 없이 꾸준한 기록이 있으면 유리하게 작용할 수 있다.
비금융 정보는 통신요금, 건강보험료, 국민연금, 공과금처럼 금융 대출은 아니지만 납부 성실성을 보여 줄 수 있는 정보다. 이런 자료는 자동으로 모두 반영되는 것이 아니라 앱이나 신용평가사 서비스를 통해 제출해야 반영되는 경우가 많다.
KCB와 NICE 점수가 다르게 나오는 이유 &nbsp; 점수 차이의 핵심은 평가 비중이다. KB Think에서 정리한 2025년 10월 기준 자료에 따르면 일반 고객 기준 KCB는 신용거래 형태를 가장 크게 보고, NICE는 상환 이력과 신용거래 형태를 비교적 중요하게 본다.
KCB 일반 고객 평가에서는 신용거래 형태 비중이 38%로 가장 크고, 부채 수준 24%, 상환 이력 21%, 신용거래 기간 9%, 비금융 8% 순서로 제시되어 있다.
NICE 일반 고객 평가에서는 신용거래 형태 28.9%, 상환 이력 27.4%, 부채 수준 23.6%, 신용거래 기간 12.5%, 비금융 7.7%로 제시되어 있다. NICE도 신용거래 형태를 보지만, 상환 이력의 비중이 KCB보다 더 높게 잡혀 있다.
장기 연체 이력이 있는 경우에는 구조가 더 달라진다. KCB는 장기 연체 고객에 대해 상환 이력 32%, 신용거래 형태 27%, 부채 수준 25%를 주요하게 보고, NICE는 상환 이력 47.8%, 부채 수준 42.8%처럼 연체와 빚의 무게를 훨씬 크게 본다.
예를 들어 연체는 없지만 현금서비스, 카드론, 고금리 대출을 자주 이용했다면 KCB 점수가 상대적으로 낮게 나올 수 있다. 반대로 최근 연체 이력이나 상환 관련 문제가 있었다면 NICE 점수가 더 민감하게 반응할 수 있다.
즉 KCB와 NICE 점수 차이는 &ldquo;어느 회사가 맞고 틀리다&quot;의 문제가 아니다. 같은 신용정보를 두고 평가 관점이 다른 것이다.
KCB 신용점수가 낮을 때 관리 방법 &nbsp; NICE보다 KCB 점수가 눈에 띄게 낮다면 신용거래 형태와 부채 수준을 먼저 점검하는 것이 좋다. KCB는 일반 고객 기준으로 신용거래 형태를 크게 보기 때문에 &ldquo;어떤 빚을 어떻게 쓰고 있는지&quot;가 중요하다.
고위험 대출과 카드성 대출부터 줄이기 &nbsp; 현금서비스, 카드론, 리볼빙, 대부업 대출, 고금리 제2금융권 대출은 신용평가에서 부담 요인으로 해석될 수 있다. 당장 모두 정리하기 어렵다면 금리가 높은 것, 만기가 짧은 것, 반복적으로 쓰는 것부터 줄이는 방식이 현실적이다.
대출이 필요하다면 가능하면 제1금융권, 정책금융, 보증부 상품처럼 상대적으로 위험도가 낮게 평가될 수 있는 상품부터 확인하는 것이 좋다. 물론 승인 가능성, 금리, 중도상환수수료를 함께 비교해야 한다.
카드 사용은 꾸준하지만 과하지 않게 &nbsp; 신용카드를 아예 쓰지 않는다고 신용점수가 무조건 좋아지는 것은 아니다. 연체 없이 꾸준히 사용하고 제때 갚는 기록은 신용거래 이력으로 남는다.
다만 한도에 너무 가깝게 쓰거나 결제 예정 금액이 계속 커지는 것은 좋지 않다. 카드값은 매달 갚더라도 한도 대비 사용액이 지나치게 높으면 부채 부담처럼 보일 수 있다. 생활비 결제 정도로 관리하고, 할부는 꼭 필요한 경우에만 쓰는 편이 낫다.
신용성향분석과 비금융 정보도 활용하기 &nbsp; KCB 점수는 올크레딧의 신용성향분석 설문이나 비금융 납부 정보 제출을 통해 일부 가점을 받을 수 있다. 큰 폭의 점수 상승을 기대하기보다는, 연체 없이 부채를 줄이는 기본 관리에 더해 보조 수단으로 활용하는 것이 맞다.
NICE 신용점수가 낮을 때 관리 방법 &nbsp; KCB보다 NICE 점수가 낮다면 상환 이력과 부채 수준을 먼저 봐야 한다. 특히 연체는 NICE 점수에 강하게 영향을 줄 수 있다.
연체는 금액보다 먼저 기간을 막아야 한다 &nbsp; 카드값이나 대출 이자를 하루 늦게 냈다고 무조건 바로 신용점수가 크게 떨어지는 것은 아니다. 하지만 10만 원 이상을 영업일 기준 5일 이상 연체하면 단기 연체로 분류될 수 있고, 90일 이상이면 장기 연체로 넘어갈 수 있다.
단기 연체 이력은 상환 후에도 일정 기간 남을 수 있고, 장기 연체는 더 오래 영향을 줄 수 있다. 그래서 연체가 생겼다면 금액이 작더라도 빠르게 정리하는 것이 중요하다. 여러 건이 있다면 오래된 연체, 기간이 길어질 가능성이 큰 연체부터 우선순위를 잡는 편이 낫다.
빚의 총량을 줄이고 상환 흐름을 안정시키기 &nbsp; NICE는 부채 수준도 크게 본다. 대출 잔액이 많고 카드 결제 예정액까지 크면 상환 여력이 낮아 보일 수 있다.
가장 좋은 관리는 새 대출을 급하게 늘리지 않고, 기존 대출의 원리금을 계획대로 갚아 나가는 것이다. 여유 자금이 있다면 금리가 높은 대출부터 줄이고, 매달 갚아야 하는 금액이 부담스럽다면 대환대출이나 상환 방식 조정을 검토할 수 있다.
납부 자료 제출로 보완하기 &nbsp; 국민연금, 건강보험료, 통신요금, 공과금 등을 성실히 낸 기록은 신용점수 보완 자료가 될 수 있다. 특히 금융거래 이력이 짧은 사회초년생이나 신용카드를 거의 쓰지 않는 사람은 비금융 정보 제출이 도움이 될 수 있다.
다만 납부 자료 제출만으로 연체나 과도한 대출 문제가 사라지지는 않는다. 기본은 연체 방지, 부채 축소, 안정적인 카드 사용이다.
신용점수가 오르면 바로 대출이 쉬워질까 &nbsp; KCB나 NICE 신용점수가 오르면 대출 심사에 긍정적인 신호가 될 수 있다. 하지만 점수가 올랐다고 해서 대출이 무조건 승인되거나 금리가 바로 낮아지는 것은 아니다.
은행, 카드사, 저축은행 등 금융회사는 자체 신용평가시스템을 따로 운영한다. 소득, 재직기간, 직업 안정성, 기존 대출, 연체 이력, 담보 여부, 거래 실적 등을 함께 본다. KCB와 NICE 신용점수는 그중 중요한 참고 자료 중 하나다.
그래도 신용점수 관리는 필요하다. 대출이 필요할 때 선택지가 넓어질 수 있고, 카드 발급이나 한도 심사에서도 불리한 상황을 줄일 수 있기 때문이다. 특히 점수가 낮아진 뒤 급하게 회복하려고 하면 시간이 걸리므로 평소에 관리하는 것이 훨씬 낫다.
핵심 정리 &nbsp; KCB와 NICE 신용점수가 다르게 나오는 이유는 평가 기준의 비중이 다르기 때문이다. KCB는 일반 고객 기준으로 신용거래 형태를 크게 보고, NICE는 상환 이력과 신용거래 형태를 중요하게 본다.
KCB 점수가 낮다면 현금서비스, 카드론, 고금리 대출처럼 위험하게 보일 수 있는 신용거래를 줄이고, 카드와 대출을 안정적으로 관리하는 것이 중요하다.
NICE 점수가 낮다면 연체 이력과 부채 수준을 먼저 점검해야 한다. 연체는 기간이 길어질수록 회복이 어려워지고, 빚이 많으면 상환 부담이 크게 보일 수 있다.
두 점수를 모두 올리는 가장 현실적인 방법은 단순하다. 연체하지 않고, 빚을 과하게 늘리지 않고, 신용카드와 체크카드를 꾸준히 사용하며, 필요한 경우 비금융 납부 자료를 제출하는 것이다. 신용점수는 한 번에 확 뛰는 숫자가 아니라 생활 속 금융 습관이 천천히 반영되는 기록에 가깝다.
자주 묻는 질문 &nbsp; KCB와 NICE 중 어떤 신용점수가 더 중요한가 &nbsp; 둘 중 하나만 더 중요하다고 보기는 어렵다. 금융회사마다 심사할 때 참고하는 신용평가사가 다를 수 있고, 자체 심사 기준도 함께 사용한다. 그래서 한쪽 점수만 관리하기보다 KCB와 NICE를 모두 확인하면서 공통적으로 영향을 주는 연체, 부채, 카드 사용 습관을 관리하는 것이 좋다.
신용점수를 조회하면 점수가 떨어지나 &nbsp; 본인이 금융앱이나 신용평가사 서비스를 통해 신용점수를 확인하는 것은 일반적으로 신용점수 하락 요인이 아니다. 예전에는 조회 기록에 대한 오해가 많았지만, 단순 조회와 대출 심사를 위한 조회는 성격이 다르다. 내 점수를 자주 확인하면서 변화를 보는 것은 오히려 관리에 도움이 된다.
KCB 점수와 NICE 점수 차이가 크면 문제가 있는 건가 &nbsp; 반드시 문제가 있다는 뜻은 아니다. 두 회사가 보는 평가 비중이 다르기 때문에 점수 차이는 자연스럽게 생길 수 있다. 다만 한쪽 점수만 유난히 낮다면 그 회사가 중요하게 보는 항목을 점검할 필요가 있다. KCB가 낮으면 신용거래 형태와 부채 수준을, NICE가 낮으면 상환 이력과 연체 여부를 먼저 보는 식이다.
연체금을 갚으면 신용점수가 바로 오르나 &nbsp; 연체금을 갚는 것은 반드시 해야 할 일이지만, 갚자마자 점수가 바로 크게 오르지는 않을 수 있다. 연체 이력은 일정 기간 신용정보에 남을 수 있고, 이후 정상적인 상환 기록이 쌓이면서 천천히 회복되는 경우가 많다. 그래서 연체가 생긴 뒤 회복을 기다리는 것보다 애초에 연체를 만들지 않는 것이 가장 중요하다.
신용카드를 안 쓰면 신용점수에 유리한가 &nbsp; 무조건 유리하다고 보기 어렵다. 신용카드를 연체 없이 적정하게 사용하고 제때 갚은 기록은 신용거래 이력으로 남는다. 반대로 신용거래 기록이 너무 부족하면 평가할 자료가 적어서 점수 상승이 더딜 수 있다. 한도에 가깝게 쓰지 않고, 매달 감당 가능한 수준에서 꾸준히 사용하는 것이 더 현실적인 방법이다.`}).add({id:18,href:"",title:"Modal elements",description:"",content:""}).add({id:19,href:"/news/",title:"News",description:"금융, 경제에 대한 최신 동향 기사 요약",content:""}).add({id:20,href:"/posts/per-pbr-roe-stock-indicators/",title:"PER PBR ROE 뜻과 계산법, 초보 투자자가 꼭 ...",description:"PER, PBR, ROE의 뜻과 계산법, 숫자가 높고 낮을 때의 의미, 업종별 비교와 투자 시 주의할 점을 초보자도 이해하기 쉽게 정리했다.",content:`주식투자를 시작하면 가장 자주 만나는 숫자가 PER, PBR, ROE다. 증권 앱에서 종목 정보를 열어도 나오고, 기업 분석 리포트에서도 빠지지 않는다. 그런데 처음 보면 영어 약자부터 막힌다. 숫자가 낮으면 좋은 것인지, 높으면 위험한 것인지도 헷갈린다.
PER, PBR, ROE는 기업을 한 번에 판단해주는 정답지는 아니다. 하지만 회사의 주가가 이익에 비해 비싼지, 자산에 비해 비싼지, 자기자본으로 돈을 잘 벌고 있는지 확인하는 기본 도구다. 이 세 가지를 이해하면 주식 가격을 감이 아니라 기준으로 바라볼 수 있다.
핵심은 간단하다. PER은 이익, PBR은 자산, ROE는 수익성을 보는 지표다. 숫자 하나만 보고 매수하거나 매도하기보다, 같은 업종의 다른 기업과 비교하고 왜 그런 숫자가 나왔는지 함께 살펴야 한다.
PER은 이익 대비 주가가 비싼지 보는 지표다 &nbsp; PER은 Price Earning Ratio의 줄임말로, 한국어로는 주가수익비율이라고 한다. 기업의 주가가 그 기업이 벌어들이는 이익에 비해 어느 정도 수준인지 보여준다.
공식은 다음과 같다.
구분 계산식 PER 주가 / 주당순이익 PER 시가총액 / 순이익 주당순이익은 EPS라고도 부른다. 회사가 벌어들인 순이익을 발행 주식 수로 나눈 값이다. 예를 들어 주가가 50,000원이고 주당순이익이 5,000원이라면 PER은 10배다. 단순하게 보면 현재 이익 수준이 계속된다고 가정했을 때 투자 원금을 이익으로 회수하는 데 약 10년이 걸린다는 의미로 이해할 수 있다.
보통 PER이 높으면 기업이 벌어들이는 이익에 비해 주가가 높게 평가되고 있다는 뜻이다. 성장 기대가 큰 기업은 현재 이익이 많지 않아도 높은 PER을 받을 수 있다. 반대로 PER이 낮으면 이익 대비 주가가 낮다는 뜻이라 저평가로 보일 수 있다.
하지만 낮은 PER이 항상 좋은 것은 아니다. 실적이 앞으로 줄어들 것으로 예상되거나, 산업이 침체되어 시장이 낮게 평가하는 경우도 있다. 또 일회성 이익 때문에 순이익이 일시적으로 커지면 PER이 낮아 보일 수 있다. 그래서 PER은 같은 업종, 비슷한 사업 모델을 가진 기업끼리 비교해야 의미가 있다.
PER을 볼 때의 핵심 &nbsp; PER은 &ldquo;이 회사가 버는 돈에 비해 지금 주가가 비싼가?&ldquo;를 묻는 지표다. 다만 기업의 성장성, 이익의 안정성, 경기 사이클을 함께 봐야 한다. 현재 PER이 낮아도 이익이 앞으로 급감하면 실제로는 비싸게 산 것이 될 수 있다.
PBR은 자산가치 대비 주가를 보는 지표다 &nbsp; PBR은 Price Book value Ratio의 줄임말로, 한국어로는 주가순자산비율이라고 한다. 기업의 주가가 장부상 순자산가치에 비해 어느 정도인지 보여준다.
공식은 다음과 같다.
구분 계산식 PBR 주가 / 주당순자산가치 PBR 시가총액 / 순자산 순자산은 기업의 총자산에서 총부채를 뺀 금액이다. 쉽게 말하면 회사가 가진 자산에서 갚아야 할 빚을 제외하고 남는 몫이다.
예를 들어 어떤 회사의 시가총액이 1조 원이고 순자산이 1조 원이라면 PBR은 1배다. 시가총액이 2조 원이고 순자산이 1조 원이라면 PBR은 2배다. 시장이 이 회사를 장부상 순자산보다 두 배 높게 평가하고 있다는 뜻이다.
PBR이 1보다 낮으면 시장 가격이 장부상 순자산보다 낮다는 뜻이다. 그래서 &ldquo;회사를 통째로 사도 장부상 자산보다 싸다&quot;는 식으로 설명되기도 한다. 하지만 이것만 보고 무조건 싸다고 판단하면 위험하다. 장부에 적힌 자산이 실제 시장에서 그 가격으로 팔리지 않을 수 있고, 자산은 많지만 이익을 잘 내지 못하는 회사도 있기 때문이다.
특히 제조업, 금융업, 부동산 관련 기업처럼 자산 규모가 중요한 업종에서는 PBR이 자주 활용된다. 반대로 플랫폼, 소프트웨어, 바이오처럼 눈에 보이는 유형자산보다 기술력과 성장성이 중요한 기업은 PBR만으로 평가하기 어렵다.
PBR을 볼 때의 핵심 &nbsp; PBR은 &ldquo;이 회사의 자산가치에 비해 주가가 비싼가?&ldquo;를 묻는 지표다. 숫자가 낮으면 저평가 가능성을 볼 수 있지만, 자산의 질과 수익성을 반드시 함께 확인해야 한다.
ROE는 자기자본으로 돈을 얼마나 잘 버는지 보는 지표다 &nbsp; ROE는 Return On Equity의 줄임말로, 한국어로는 자기자본이익률이라고 한다. 기업이 주주의 자본을 활용해 얼마나 효율적으로 이익을 내고 있는지 보여준다.
공식은 다음과 같다.
구분 계산식 ROE 순이익 / 자기자본 x 100 예를 들어 자기자본이 1,000억 원인 회사가 1년 동안 순이익 100억 원을 냈다면 ROE는 10%다. 주주가 맡긴 자본 100원으로 1년에 10원의 이익을 냈다고 볼 수 있다.
ROE가 높다는 것은 회사가 자기자본을 효율적으로 활용하고 있다는 신호일 수 있다. 같은 돈을 넣었을 때 더 많은 이익을 만들어내는 회사라면 시장에서 좋은 평가를 받을 가능성이 높다.
하지만 ROE도 숫자만 보면 안 된다. 부채를 많이 써서 이익을 키우면 자기자본 대비 수익률이 높아 보일 수 있다. 또 자산 매각이나 일회성 이익으로 순이익이 갑자기 늘어난 해에는 ROE가 실제 체력보다 좋아 보일 수 있다.
그래서 ROE는 한 해 숫자보다 여러 해의 흐름을 보는 것이 좋다. 꾸준히 높은 ROE를 유지하는 기업은 경쟁력, 브랜드, 비용 구조, 시장 지위가 탄탄할 가능성이 있다. 반대로 ROE가 들쭉날쭉하다면 이익의 안정성을 더 확인해야 한다.
PER, PBR, ROE는 함께 봐야 의미가 있다 &nbsp; PER, PBR, ROE는 각각 보는 방향이 다르다. 하나만 보면 기업의 일부만 보는 셈이다.
지표 보는 기준 핵심 질문 PER 이익 이익에 비해 주가가 비싼가? PBR 순자산 자산가치에 비해 주가가 비싼가? ROE 수익성 자기자본으로 이익을 잘 내는가? 예를 들어 PER이 낮고 PBR도 낮은 기업이 있다고 하자. 언뜻 보면 싸 보인다. 하지만 ROE가 계속 낮다면 회사가 자산은 많아도 돈을 잘 벌지 못하는 상태일 수 있다. 이런 경우에는 저평가가 아니라 시장이 낮게 평가할 만한 이유가 있는 것일 수 있다.
반대로 PER과 PBR이 높지만 ROE도 꾸준히 높은 기업이 있다. 이 경우 시장은 이 회사의 성장성과 수익성을 높게 평가하고 있을 가능성이 있다. 다만 이미 기대가 주가에 많이 반영되어 있다면, 실적이 조금만 흔들려도 주가가 크게 조정될 수 있다.
초보 투자자라면 아래 순서로 보는 것이 현실적이다.
회사가 무엇으로 돈을 버는지 확인한다. 최근 몇 년간 매출과 순이익이 꾸준한지 본다. PER과 PBR이 같은 업종 평균보다 높은지 낮은지 비교한다. ROE가 꾸준히 유지되는지 확인한다. 지표가 낮거나 높은 이유를 사업 내용과 뉴스로 확인한다. 지표는 투자 판단의 출발점이지 결론이 아니다. 숫자를 보고 &ldquo;왜 이렇게 낮을까?&rdquo;, &ldquo;왜 이렇게 높을까?&ldquo;라고 질문하는 습관이 중요하다.
업종별 차이를 무시하면 잘못 판단하기 쉽다 &nbsp; PER, PBR, ROE를 볼 때 가장 흔한 실수는 업종 차이를 무시하는 것이다. 모든 기업을 같은 기준으로 비교하면 판단이 어긋날 수 있다.
IT, 헬스케어, 2차전지, AI 관련 기업처럼 미래 성장 기대가 큰 업종은 현재 이익보다 앞으로의 성장 가능성을 더 크게 평가받는 경우가 많다. 그래서 PER이나 PBR이 높게 나타날 수 있다. 이때 높은 PER이 무조건 거품이라는 뜻은 아니다. 다만 기대가 실제 실적으로 이어질 수 있는지 따져봐야 한다.
반대로 은행, 보험, 철강, 화학처럼 경기와 자산 규모의 영향을 크게 받는 업종은 상대적으로 낮은 PER이나 PBR을 보이는 경우가 많다. 낮다고 해서 모두 저평가라고 볼 수는 없다. 경기 둔화, 금리 변화, 원자재 가격, 규제 같은 요인이 주가에 반영되어 있을 수 있다.
같은 PER 10배라도 업종에 따라 의미가 다르다. 성장성이 높은 기업의 PER 10배는 낮게 평가될 수 있고, 이익이 줄어드는 기업의 PER 10배는 높게 평가될 수 있다. 그래서 비교 대상은 &ldquo;전체 시장 평균&quot;보다 &ldquo;같은 업종의 비슷한 기업&quot;이 더 적절하다.
정리하면 숫자보다 이유를 봐야 한다 &nbsp; PER, PBR, ROE는 초보 투자자가 기업을 이해할 때 꼭 알아야 할 기본 지표다. PER은 이익 대비 주가, PBR은 자산가치 대비 주가, ROE는 자기자본 대비 수익성을 보여준다.
다만 세 지표는 혼자서 답을 주지 않는다. PER이 낮아도 이익이 줄어들면 위험할 수 있고, PBR이 낮아도 자산의 질이 나쁘면 매력적이지 않을 수 있다. ROE가 높아도 부채나 일회성 이익 때문에 숫자가 좋아 보이는 경우가 있다.
투자할 기업을 볼 때는 지표를 먼저 확인한 뒤, 그 숫자가 나온 이유를 기업의 사업 구조와 실적 흐름에서 찾아야 한다. 숫자를 외우는 것보다 중요한 것은 숫자를 해석하는 습관이다. 처음에는 PER, PBR, ROE 세 가지만 제대로 봐도 종목을 바라보는 눈이 훨씬 차분해진다.
자주 묻는 질문 &nbsp; PER과 PBR의 가장 큰 차이는 무엇인가? &nbsp; PER은 기업이 벌어들이는 이익을 기준으로 주가를 평가하고, PBR은 기업이 가진 순자산을 기준으로 주가를 평가한다. 쉽게 말해 PER은 &ldquo;돈을 얼마나 버는가&rdquo;, PBR은 &ldquo;얼마나 가진 회사인가&quot;에 더 가깝다.
PER, PBR, ROE가 모두 낮으면 좋은 주식인가? &nbsp; 그렇지 않다. PER과 PBR이 낮으면 싸 보일 수 있지만, ROE까지 낮다면 회사가 자본을 효율적으로 쓰지 못하고 있을 가능성이 있다. 실적 악화, 산업 침체, 경쟁력 약화 때문에 낮은 평가를 받는 것일 수도 있으므로 원인을 확인해야 한다.
ROE는 높을수록 무조건 좋은가? &nbsp; ROE가 높으면 수익성이 좋다는 신호일 수 있지만 무조건 좋은 것은 아니다. 부채를 많이 활용했거나 일회성 이익이 반영되면 ROE가 실제보다 좋아 보일 수 있다. 부채비율, 순이익의 지속성, 최근 몇 년간의 흐름을 함께 보는 것이 좋다.`}).add({id:21,href:"/posts/sp500-etf-provider-comparison-guide/",title:"S&P500 ETF 종류 비교, KODEX TIGER ...",description:"S&P500 ETF를 검색하면 KODEX, TIGER, ACE, RISE가 왜 여러 개 나오는지와 초보자가 운용사를 고를 때 볼 기준을 정리했다.",content:`주식을 처음 시작하는 사람에게 ETF를 추천하고 한다고 하는 이야기는 많다. 그중에서도 미국 S&amp;P500 ETF는 가장 자주 언급된다. 미국 대표 기업 500개에 분산 투자할 수 있고, 장기 투자 대상으로도 많이 쓰이기 때문이다.
그런데 막상 증권사 앱에서 &ldquo;S&amp;P500 ETF&quot;를 검색하면 생각치 않게 많은 상품이 나온다. KODEX 미국S&amp;P500, TIGER 미국S&amp;P500, ACE 미국S&amp;P500, RISE 미국S&amp;P500처럼 앞에 붙은 이름만 다르고 비슷해 보이는 ETF가 줄줄이 보인다.
초보자 입장에서는 여기서 막힌다. &ldquo;다 S&amp;P500이면 아무거나 사도 되나?&rdquo;, &ldquo;KODEX와 TIGER는 뭐가 다른가?&rdquo;, &ldquo;이런게 운영사라는데, 한국 운용사 ETF와 미국 운용사 ETF는 또 뭐가 다른가?&rdquo; 같은 질문이 생긴다.
결론부터 말하면, 국내 상장 S&amp;P500 ETF끼리는 큰 방향이 비슷하다. 다만 완전히 같은 상품은 아니다. 운용사, 보수, 순자산 규모, 거래량, 분배금 방식, 환율 노출, 계좌와 세금에서 차이가 난다.
왜 S&amp;P500 ETF가 여러 개일까 &nbsp; ETF 이름 앞에 붙는 KODEX, TIGER, ACE, RISE는 ETF 브랜드명이다. 쉽게 말해 자산운용사의 상품 브랜드다.
브랜드 운용사 KODEX 삼성자산운용 TIGER 미래에셋자산운용 ACE 한국투자신탁운용 RISE KB자산운용 같은 라면을 여러 회사가 만드는 것처럼, S&amp;P500 ETF도 여러 운용사가 각각 만든다. 목표는 비슷하다. 미국 S&amp;P500 지수를 따라가는 것이다. 하지만 상품을 운용하는 회사, 비용 구조, 실제 거래 규모, 분배금 정책, 세부 운용 방식은 다를 수 있다.
예를 들어 KODEX 미국S&amp;P500은 &ldquo;S&amp;P 500 Total Return Index&quot;를 기초지수로 사용한다고 표시되어 있다. Total Return 지수는 배당을 재투자한 성과를 반영하는 방식이다. 반면 TIGER, ACE, RISE 미국S&amp;P500은 일반 S&amp;P500 Index를 기초지수로 표시한다. 이름은 비슷하지만 지수 표기와 분배금 처리 방식에서 차이가 생길 수 있다.
초보자는 이 차이를 너무 어렵게 받아들일 필요는 없다. 중요한 것은 &ldquo;앞 이름이 다르다고 완전히 다른 시장에 투자하는 것은 아니다&quot;라는 점이다. 네 상품 모두 미국 대표 대형주 시장에 투자하는 ETF라는 큰 틀은 비슷하다.
KODEX TIGER ACE RISE 간단 비교 &nbsp; 2026년 5월 기준 K-ETF에 표시된 주요 정보를 기준으로 보면 국내 대표 S&amp;P500 ETF는 다음처럼 비교할 수 있다. ETF 보수, 시가총액, 거래대금은 계속 바뀌므로 실제 매수 전에는 증권사 앱이나 운용사 페이지에서 최신 수치를 다시 확인해야 한다.
ETF 종목코드 운용사 상장일 총보수 특징 KODEX 미국S&amp;P500 379800 삼성자산운용 2021-04-09 0.0062% 거래 규모가 크고 KODEX 브랜드 접근성이 높음 TIGER 미국S&amp;P500 360750 미래에셋자산운용 2020-08-07 0.0068% 순자산과 거래대금 규모가 큰 대표 상품 ACE 미국S&amp;P500 360200 한국투자신탁운용 2020-08-07 0.0047% 보수가 낮은 편이고 장기 투자자들이 자주 비교함 RISE 미국S&amp;P500 379780 KB자산운용 2021-04-09 0.0047% 보수가 낮은 편이고 KB 계열 브랜드 상품 이 표만 보면 보수가 가장 낮은 ACE나 RISE가 무조건 좋아 보일 수 있다. 하지만 ETF는 보수 하나만 보고 고르면 부족하다. 거래량이 너무 적으면 매수·매도 호가 차이가 커질 수 있고, 순자산 규모가 큰 상품은 시장에서 더 많이 거래되어 접근성이 좋은 경우가 많다.
초보자가 보기에는 TIGER와 KODEX가 거래 규모 면에서 편해 보일 수 있고, 보수만 보면 ACE와 RISE가 눈에 들어올 수 있다. 그렇다고 하나만 정답이라고 말하기는 어렵다. 같은 S&amp;P500을 따라가는 대표 상품끼리는 수익률 차이가 장기적으로 아주 크게 벌어지기보다, 비용과 운용 효율, 분배금 처리, 환율 영향이 조금씩 누적되는 구조에 가깝다.
처음 주식을 사보는 단계라면 가장 중요한 기준은 &ldquo;내가 이해하고 계속 확인할 수 있는 상품인가&quot;다. 보수 0.001% 차이를 따지기 전에, 이 ETF가 어떤 지수를 추종하고 국내 상장 해외 ETF라서 세금이 어떻게 붙는지부터 이해하는 편이 더 중요하다.
초보자는 어떤 기준으로 고르면 좋을까 &nbsp; S&amp;P500 ETF를 고를 때는 수익률 순위보다 아래 기준을 먼저 보는 것이 좋다.
1. 순자산 규모와 거래량 &nbsp; 순자산 규모가 크고 거래량이 많은 ETF는 매수·매도가 비교적 수월하다. 초보자는 주문을 넣었는데 체결이 잘 안 되거나, 매수 호가와 매도 호가 차이가 큰 상황을 불편하게 느낄 수 있다. 그래서 처음에는 시장에서 많이 거래되는 대표 상품을 고르는 것이 편하다.
2. 총보수와 실제 비용 &nbsp; 총보수는 ETF를 운용하는 데 드는 기본 비용이다. 장기 투자에서는 비용 차이가 누적될 수 있다. 다만 총보수만으로 모든 비용이 끝나는 것은 아니다. 기타 비용, 매매중개 비용, 추적 오차까지 실제 수익률에 영향을 줄 수 있다. 그래서 보수는 낮을수록 좋지만, 보수 하나만 보고 선택하지는 않는 것이 좋다.
3. 기초지수와 분배금 방식 &nbsp; ETF가 어떤 지수를 따라가는지도 확인해야 한다. 일반 S&amp;P500 지수인지, 배당 재투자 성격이 반영된 TR 지수인지에 따라 표시 수익률과 분배금 체감이 달라질 수 있다. 분배금을 현금으로 받는 상품이 좋은지, 재투자 성격이 강한 상품이 좋은지는 투자 목적에 따라 다르다.
분배금을 받아 생활비나 재투자에 쓰고 싶다면 분배금 내역을 확인해야 한다. 반대로 장기 복리 효과를 생각한다면 분배금이 자동으로 성과에 반영되는 구조가 더 편하게 느껴질 수 있다.
4. 증권사 이벤트와 적립식 매수 편의성 &nbsp; 처음 투자자는 사용하는 증권사 앱에서 쉽게 검색되고, 소수점이 아니라 1주 단위로 부담 없이 매수할 수 있는 상품이 좋다. 자동 적립식 매수, ISA나 연금계좌 매수 가능 여부, 이벤트 혜택도 현실적인 기준이 된다.
다만 이벤트 때문에 ETF를 고르면 안 된다. 이벤트는 시작 비용을 줄여주는 보조 요소일 뿐이다. ETF 자체가 내 투자 목적에 맞는지 먼저 봐야 한다.
한국 운용사 ETF와 미국 운용사 ETF의 차이 &nbsp; 여기서 한 번 더 헷갈리는 부분이 있다. KODEX, TIGER, ACE, RISE는 한국 운용사의 국내 상장 ETF다. 반면 VOO, IVV, SPY 같은 상품은 미국 거래소에 상장된 미국 운용사 ETF다.
둘 다 S&amp;P500에 투자할 수 있지만 투자 방식은 다르다.
구분 국내 상장 S&amp;P500 ETF 미국 상장 S&amp;P500 ETF 예시 KODEX, TIGER, ACE, RISE 미국S&amp;P500 VOO, IVV, SPY 거래 통화 원화 달러 거래 시간 한국 주식시장 시간 미국 주식시장 시간 계좌 국내주식 거래 계좌에서 가능 해외주식 거래 신청 필요 환전 보통 직접 환전 없이 매수 달러 환전 필요 세금 국내 상장 해외 ETF 과세 적용 해외주식 양도소득세 체계 적용 초보자 접근성 비교적 쉬움 환전과 해외주식 거래 이해 필요 한국 운용사 ETF의 장점은 편의성이다. 원화로 사고팔 수 있고, 국내 주식 주문 화면에서 거래된다. ISA나 연금저축계좌에서 활용할 수 있는 상품도 있어 절세계좌와 함께 쓰기 좋다.
미국 운용사 ETF의 장점은 상품의 역사와 규모, 낮은 비용, 다양한 상품 선택지다. VOO, IVV, SPY 같은 ETF는 전 세계 투자자가 거래하는 대표 상품이다. 다만 달러 환전, 미국장 거래 시간, 해외주식 양도소득세 신고, 환율 변동을 직접 관리해야 한다.
초보자에게는 국내 상장 S&amp;P500 ETF가 시작하기 쉽다. 원화로 1주를 사보며 ETF 구조를 익히고, 나중에 투자 금액이 커지거나 세금 구조를 더 공부한 뒤 미국 상장 ETF까지 비교해도 늦지 않다.
세금과 계좌까지 같이 봐야 한다 &nbsp; S&amp;P500 ETF는 같은 지수를 따라가도 어디에 상장되어 있는지에 따라 세금이 달라질 수 있다. 국내 상장 해외주식형 ETF는 매매차익과 분배금에 대해 배당소득세가 적용될 수 있다. 반면 미국 상장 ETF는 해외주식처럼 양도차익에 대해 연간 기본공제 250만원을 뺀 뒤 양도소득세가 적용되는 구조다.
이 차이 때문에 일반계좌에서는 투자 금액과 수익 규모에 따라 유리한 선택이 달라질 수 있다. 또 국내 상장 ETF는 ISA, 연금저축, IRP 같은 절세계좌에서 활용할 수 있다는 장점이 있다. 초보자라면 세금을 복잡하게 계산하기 전에, 내가 어떤 계좌에서 살 것인지부터 정하는 것이 좋다.
예를 들어 처음 1주를 사보는 경험용이라면 일반 주식 계좌에서 국내 상장 S&amp;P500 ETF를 사도 충분하다. 매달 장기 적립식으로 투자할 생각이라면 ISA나 연금저축계좌에서 살 수 있는지 확인해보는 것이 좋다. 큰 금액으로 장기 투자할 계획이라면 국내 상장 ETF와 미국 상장 ETF의 세금 차이를 따로 비교해야 한다.
세금은 제도와 개인 상황에 따라 달라질 수 있다. 특히 금융소득이 많거나 연금계좌를 활용하는 경우에는 단순히 &ldquo;어느 ETF가 수익률이 좋다&quot;보다 세후 수익률이 더 중요해진다.
그래서 무엇을 사면 될까 &nbsp; 초보자에게 현실적인 답은 이렇다. 국내 상장 S&amp;P500 ETF 중에서 순자산 규모와 거래량이 충분하고, 보수가 낮으며, 내가 쓰는 증권사 앱에서 매수하기 편한 상품을 고르면 된다.
조금 더 구체적으로 나누면 다음과 같다.
상황 보기 좋은 기준 처음 주식을 매매하는 경우 거래량 많고 앱에서 찾기 쉬운 대표 상품 장기 적립식 투자 보수, 추적 오차, 분배금 방식, 계좌 유형 ISA나 연금계좌 투자 해당 계좌에서 매수 가능한 국내 상장 ETF 달러 자산을 직접 보유하고 싶은 경우 미국 상장 VOO, IVV, SPY 등도 비교 세금 최적화가 중요한 경우 국내 상장 ETF와 미국 상장 ETF의 세후 수익률 비교 KODEX, TIGER, ACE, RISE 중 어느 하나만 절대 정답이라고 보기는 어렵다. 초보자라면 먼저 TIGER나 KODEX처럼 거래 규모가 큰 상품을 기준으로 보고, 보수까지 신경 쓰고 싶다면 ACE와 RISE도 함께 비교하면 된다.
가장 피해야 할 선택은 이름이 비슷하다는 이유로 아무 상품이나 사는 것이다. &ldquo;미국S&amp;P500&quot;이라는 단어가 들어가도 환헤지형인지, TR형인지, 선물형인지, 레버리지인지에 따라 성격이 달라질 수 있다. 처음에는 &ldquo;미국S&amp;P500&rdquo; 뒤에 추가 단어가 많이 붙은 상품보다 기본형 ETF부터 보는 것이 좋다.
정리 &nbsp; S&amp;P500 ETF가 여러 개 나오는 이유는 여러 운용사가 같은 미국 대표 지수를 목표로 ETF를 만들기 때문이다. KODEX, TIGER, ACE, RISE는 각각 삼성자산운용, 미래에셋자산운용, 한국투자신탁운용, KB자산운용의 ETF 브랜드다.
핵심만 다시 정리하면 이렇다.
국내 상장 S&amp;P500 ETF는 원화로 국내 주식처럼 살 수 있어 초보자가 접근하기 쉽다. KODEX, TIGER, ACE, RISE는 큰 방향은 비슷하지만 보수, 규모, 거래량, 기초지수, 분배금 방식이 다를 수 있다. 처음 1주를 사보는 단계에서는 거래량과 접근성이 중요하고, 장기 적립식 투자에서는 보수와 추적 오차, 계좌와 세금도 중요하다. 한국 운용사 ETF는 원화 거래와 절세계좌 활용이 편하고, 미국 운용사 ETF는 달러 거래와 해외주식 세금 구조를 이해해야 한다. 이벤트나 최근 수익률만 보고 고르지 말고, 내가 오래 이해하고 보유할 수 있는 상품인지 먼저 봐야 한다. 처음 투자라면 완벽한 ETF를 고르려고 시간을 너무 오래 쓰기보다, 대표 상품을 1주 사보며 투자 화면과 가격 변동을 익히는 것이 더 도움이 될 수 있다. 이후 보수, 세금, 계좌를 공부하면서 내 투자 방식에 맞게 상품을 조정하면 된다.
자주 묻는 질문 &nbsp; KODEX, TIGER, ACE, RISE 중 수익률이 가장 좋은 것을 사면 되나? &nbsp; 최근 수익률만 보고 고르는 것은 좋지 않다. 같은 S&amp;P500 ETF라도 보수, 추적 오차, 분배금 방식, 거래량에 따라 결과가 조금씩 달라진다. 초보자는 수익률 순위보다 상품 구조와 거래 편의성을 먼저 보는 편이 낫다.
국내 상장 S&amp;P500 ETF와 VOO는 같은 상품인가? &nbsp; 같은 S&amp;P500에 투자한다는 점은 비슷하지만 같은 상품은 아니다. 국내 상장 ETF는 원화로 한국 시장에서 거래하고, VOO는 미국 시장에서 달러로 거래한다. 세금, 거래 시간, 환전, 계좌 활용 방식도 다르다.
처음 사는 S&amp;P500 ETF는 몇 주부터 시작하면 좋을까? &nbsp; 처음이라면 1주로 충분하다. 중요한 것은 큰돈을 넣는 것이 아니라 매수, 체결, 평가손익, 분배금, 세금 안내를 직접 확인하는 경험이다. 1주를 사보고 상품 구조를 이해한 뒤에 적립식 투자 여부를 정해도 늦지 않다.`}).add({id:22,href:"/posts/sp500-vs-schd-which-to-buy/",title:"S&P500 vs SCHD, 뭐 사야 할까? 수익률부터...",description:"S&P500과 SCHD 중 무엇을 사야 할지 고민이라면 이 글 하나로 끝내자. 수익률, 배당, 투자 성향별 추천까지 초보자 기준으로 쉽게 정리했다.",content:`S&amp;P500 vs SCHD, 처음 투자 시작할 때 거의 무조건 마주치는 고민이다.
&ldquo;성장에 투자할까, 배당을 받을까?&rdquo; 이 질문 하나로도 머리가 복잡해진다.
나도 처음 시작할 때는 아는 게 거의 없어서, 그냥 유명한 것부터 찾아봤다. 그런데 막상 비교해보니 성격이 완전히 다른 투자 상품이었다. 그래서 더 헷갈린다.
이 글에서는 초보자 기준에서 S&amp;P500 vs SCHD를 딱 필요한 만큼만, 현실적으로 선택할 수 있게 정리해보겠다.
S&amp;P500 vs SCHD, 핵심 차이부터 이해하자 &nbsp; S&amp;P500과 SCHD는 같은 미국 ETF지만, 완전히 다른 전략을 가지고 있다.
S&amp;P500: 미국 대표 500개 기업에 투자하는 성장형 ETF 애플, 마이크로소프트 같은 빅테크 중심으로 자본 이득을 노린다. SCHD: 배당을 꾸준히 주는 기업에 투자하는 배당형 ETF 안정적인 현금 흐름을 만드는 데 초점이 있다. 쉽게 말하면 이거다.
S&amp;P500 → &ldquo;돈을 불리는 투자&rdquo;, 자산을 크게 불리고 싶을 때 SCHD → &ldquo;돈을 받는 투자&rdquo;, 꾸준한 현금 흐름을 만들고 싶을 때 S&amp;P500은 애플, 마이크로소프트 같은 대형 기술주 중심이라 장기적으로 꾸준히 오른다. 반면 SCHD는 배당을 잘 주는 안정적인 기업 위주라 현금 흐름이 생긴다.
여기서 이미 방향이 갈린다.
수익률 비교: 결국 돈은 누가 더 벌까? &nbsp; 결론부터 말하면 장기 수익률은 S&amp;P500이 더 높다.
S&amp;P500: 연평균 약 8~10% SCHD: 연평균 약 7~9% + 배당 차이는 크지 않아 보이지만, 복리로 보면 엄청 벌어진다.
예를 들어 10년 이상 투자한다고 하면 S&amp;P500이 더 크게 불어날 가능성이 높다.
하지만 여기서 중요한 포인트 하나.
SCHD는 배당이 있다.
이 배당을 재투자하면 실제 체감 수익률은 꽤 올라간다.
즉,
순수 성장: S&amp;P500 승 안정 + 현금 흐름: SCHD 강점 배당 vs 성장, 투자 성향에 따라 선택이 달라진다 &nbsp; 여기서부터는 정답이 아니라 선택의 문제다.
S&amp;P500이 맞는 사람 &nbsp; 아직 젊고 투자 기간이 길다 배당보다 자산 증가가 더 중요하다 변동성을 감당할 수 있다 SCHD가 맞는 사람 &nbsp; 매달 들어오는 현금 흐름이 중요하다 은퇴 준비 또는 안정적인 투자 선호 시장이 흔들려도 덜 불안한 구조를 원한다 나는 처음 투자 알아볼 때 &ldquo;배당 받으면 좋지 않을까?&ldquo;라고 생각했는데, 막상 금액을 계산해보니까 초기에는 배당이 크지 않았다. 그래서 성장 중심으로 시작하는 게 더 낫겠다고 판단했다.
초보자라면 이 포인트를 꼭 생각해야 한다.
TR ETF, 장기 투자라면 반드시 고려해야 한다 &nbsp; 여기서 하나 더 중요한 포인트가 있다. 바로 TR ETF다.
TR(Total Return) ETF는 배당금을 자동으로 재투자한다. 즉, 내가 따로 신경 쓰지 않아도 복리 효과가 극대화된다.
이건 생각보다 차이가 크다.
예를 들어 배당을 그냥 받으면 그 돈은 소비되거나 방치되기 쉽다. 하지만 TR ETF는 그 돈이 다시 투자되면서 &ldquo;눈덩이처럼 불어난다&rdquo;.
장기 투자에서는 이 차이가 결국 자산 규모를 갈라놓는다.
그래서 개인적으로는 이렇게 추천한다.
장기 투자 → 무조건 TR ETF 우선 고려 단기 현금 흐름 → 일반 배당 ETF S&amp;P500 투자 ETF 추천 (국내) &nbsp; 국내에서도 S&amp;P500에 투자할 수 있는 ETF는 꽤 많다. 그중 대표적인 상품만 간단히 정리해보자.
TIGER 미국S&amp;P500 ETF
미래에셋에서 운용하며 가장 대중적인 상품이다. 미국 대표 기업에 그대로 투자하는 구조라 이해하기 쉽다.
KODEX 미국S&amp;P500TR ETF
삼성자산운용 상품으로, 배당을 자동 재투자하는 TR 구조다. 장기 투자에 특히 적합하다.
KBSTAR 미국S&amp;P500 ETF
KB자산운용 상품으로, 안정적인 지수 추종이 특징이다.
이 중에서 하나만 고르라면, 장기 투자 기준으로는 TR ETF를 먼저 고려하는 게 합리적이다.
SCHD 대안 ETF (국내 배당형) &nbsp; SCHD는 미국 ETF라서 직접 투자해야 하지만, 국내에도 유사한 상품들이 있다.
대표적인 것만 보면 이렇다.
TIGER 미국고배당S&amp;P ETF
S&amp;P500 내 고배당 기업 중심으로 구성되어 SCHD와 성격이 비슷하다.
KODEX 미국고배당커버드콜 ETF
배당 + 옵션 전략을 결합한 구조다. 수익률을 높이는 대신 상승 제한이 있을 수 있다.
KBSTAR 미국고배당 ETF
안정적인 배당 수익을 목표로 하는 전통적인 배당형 ETF다.
배당을 통한 현금 흐름을 원한다면 이런 ETF를 ISA 계좌에 담는 전략이 꽤 유효하다.
현실적인 추천 전략: 하나만 고르지 마라 &nbsp; 사실 가장 현실적인 방법은 따로 있다.
&ldquo;둘 다 사는 것&rdquo; 이다.
추천 비율 예시는 이렇다.
공격형: S&amp;P500 80% + SCHD 20% 균형형: S&amp;P500 60% + SCHD 40% 안정형: S&amp;P500 40% + SCHD 60% 이렇게 하면
성장 + 배당 둘 다 잡을 수 있다 시장 상황에 덜 흔들린다 특히 초보자는 한쪽에 몰빵하는 것보다 훨씬 안정적이다.
결국 어떤 걸 사야 할까? &nbsp; 여기까지 읽었으면 답은 이미 정리됐을 거다.
투자는 &ldquo;정답&quot;이 아니라 &ldquo;전략&quot;이다.
자산을 빠르게 키우고 싶다 → S&amp;P500 (특히 TR ETF) 꾸준한 현금 흐름이 필요하다 → SCHD 계열 ETF 고민된다 → 둘 다 ISA 계좌 활용 → 배당 ETF 비중을 높이는 것도 전략 개인적으로는 이렇게 가져가는 걸 추천한다.
ISA 계좌 → 배당 ETF (SCHD 계열) 일반 계좌 → S&amp;P500 TR ETF 이 조합이 성장성과 현금 흐름을 동시에 잡는 가장 현실적인 방법이다.
처음 시작할 때 완벽한 선택은 없다. 중요한 건 빨리 시작하고, 계속 투자하는 것이다.
나처럼 이제 막 시작하려고 알아보는 단계라면, 일단 S&amp;P500 중심으로 시작하고 SCHD를 조금씩 추가하는 방식이 가장 무난하다.
자주 묻는 질문 &nbsp; Q1. S&amp;P500만 사도 괜찮을까? &nbsp; 괜찮다. 오히려 초보자에게는 가장 단순하고 좋은 선택이다. 장기 투자 기준으로 검증된 전략이다.
Q2. SCHD는 언제 사는 게 좋을까? &nbsp; 현금 흐름이 필요하거나, 포트폴리오 안정성을 높이고 싶을 때 추가하는 게 좋다.
Q3. 둘 중 하나만 꼭 골라야 한다면? &nbsp; 초보자 기준에서는 S&amp;P500을 먼저 선택하는 게 더 합리적이다. 이후 상황에 따라 SCHD를 추가하면 된다.`}).add({id:23,href:"/posts/tqqq-qld-qqq-nasdaq-etf/",title:"TQQQ QLD QQQ 뜻, 나스닥 100 추종 ETF...",description:"QQQ, QLD, TQQQ의 뜻과 차이를 나스닥 100 ETF 구조, 레버리지 배율, 장단점, 초보 투자자가 조심해야 할 부분까지 쉽게 정리했다.",content:`미국 기술주 투자를 이야기할 때 나스닥 100을 빼놓기 어렵다. 애플, 마이크로소프트, 엔비디아, 아마존, 테슬라처럼 전 세계 투자자가 관심을 갖는 기업들이 많이 들어 있기 때문이다. 그래서 미국 주식에 직접 투자하지 않더라도 &ldquo;나스닥 ETF 하나쯤은 사야 하나?&ldquo;라는 고민을 하게 된다.
그때 가장 자주 보이는 티커가 QQQ, QLD, TQQQ다. 이름은 비슷하지만 위험도는 크게 다르다. QQQ는 나스닥 100을 그대로 따라가는 대표 ETF이고, QLD는 하루 수익률의 2배, TQQQ는 하루 수익률의 3배를 목표로 하는 레버리지 ETF다.
이 글에서는 QQQ, QLD, TQQQ 뜻과 차이를 초보자도 이해하기 쉽게 정리하였다. 특히 레버리지 ETF는 &ldquo;오르면 많이 번다&quot;만 보고 접근하면 손실도 크게 커질 수 있으므로, 구조를 먼저 알고 들어가는 것이 중요하다.
나스닥과 나스닥 100 뜻 &nbsp; 나스닥은 미국의 대표적인 주식시장 중 하나다. 전통 제조업보다 기술, 인터넷, 반도체, 소프트웨어, 바이오 같은 성장 산업 기업이 많이 상장되어 있다. 우리가 흔히 말하는 미국 빅테크 기업 상당수가 나스닥 시장에서 거래된다.
다만 QQQ, QLD, TQQQ가 따라가는 것은 나스닥 시장 전체가 아니라 나스닥 100 지수다. 나스닥 100은 나스닥에 상장된 비금융 대형주 100개 안팎으로 구성된 지수다. 은행, 보험 같은 금융주는 제외되고, 시가총액이 큰 성장주 비중이 높다.
그래서 나스닥 100 ETF를 산다는 것은 미국 주식 전체에 넓게 투자한다는 뜻과는 조금 다르다. S&amp;P 500보다 기술주와 성장주 색깔이 강하고, 특정 대형 기술 기업의 비중도 높다. 상승장에서는 강하게 오를 수 있지만, 금리 상승이나 기술주 조정기에는 하락폭도 커질 수 있다.
나스닥 100을 이해할 때는 아래처럼 보면 쉽다.
구분 의미 나스닥 미국의 주식 거래 시장 나스닥 종합지수 나스닥 상장 기업 전체 흐름을 보여주는 지수 나스닥 100 나스닥 상장 비금융 대형주 중심 지수 QQQ·QLD·TQQQ 나스닥 100을 기초로 움직이는 ETF 즉, QQQ를 &ldquo;나스닥 전체 ETF&quot;라고 표현하는 경우가 있지만 엄밀히 말하면 나스닥 100 ETF에 가깝다.
QQQ 뜻: 나스닥 100 대표 ETF &nbsp; QQQ는 Invesco QQQ Trust의 티커다. 나스닥 100 지수를 추종하는 가장 대표적인 미국 상장 ETF로, 미국 기술주와 성장주에 투자하고 싶은 사람들이 많이 활용한다.
QQQ의 핵심은 단순하다. 나스닥 100이 오르면 QQQ도 비슷하게 오르고, 나스닥 100이 내리면 QQQ도 비슷하게 내리도록 설계되어 있다. 레버리지가 없기 때문에 QLD, TQQQ보다 구조가 이해하기 쉽고 장기 투자 대상으로도 자주 언급된다.
예를 들어 나스닥 100이 하루에 1% 상승했다면 QQQ도 대략 1% 안팎으로 상승하는 것을 목표로 한다. 반대로 나스닥 100이 1% 하락하면 QQQ도 비슷하게 하락한다. 실제 수익률은 보수, 추적오차, 시장 가격 차이 때문에 완전히 같지는 않을 수 있다.
QQQ의 장점은 거래량이 많고, 운용 규모가 크고, 편입 종목이 익숙하다는 점이다. 애플, 마이크로소프트, 엔비디아, 아마존, 메타, 테슬라 같은 기업에 한 번에 분산 투자하는 효과가 있다.
다만 QQQ도 안전자산은 아니다. 기술주 비중이 높기 때문에 고평가 논란, 금리 변화, 반도체 경기, 인공지능 투자 사이클 같은 이슈에 민감하게 움직일 수 있다. &ldquo;미국 대표 ETF니까 무조건 안전하다&quot;라고 보기보다 성장주 중심 ETF로 이해하는 편이 맞다.
QLD 뜻: 나스닥 100 하루 수익률 2배 ETF &nbsp; QLD는 ProShares Ultra QQQ의 티커다. 나스닥 100 지수의 하루 수익률 2배를 목표로 하는 레버리지 ETF다. 여기서 중요한 단어는 &ldquo;하루&quot;다. QLD는 장기간 수익률이 무조건 나스닥 100의 2배가 되도록 설계된 상품이 아니다.
예를 들어 나스닥 100이 오늘 1% 오르면 QLD는 오늘 약 2% 상승을 목표로 한다. 반대로 나스닥 100이 오늘 1% 내리면 QLD는 약 2% 하락을 목표로 한다.
나스닥 100 하루 수익률 +1% → QLD 목표 수익률 약 +2% 나스닥 100 하루 수익률 -1% → QLD 목표 수익률 약 -2%QLD는 강한 상승장이 이어질 때 QQQ보다 높은 수익률을 기대할 수 있다. 하지만 하락장에서는 손실도 빠르게 커진다. 특히 상승과 하락이 반복되는 횡보장에서는 복리 효과 때문에 기초지수보다 불리한 결과가 나올 수 있다.
예를 들어 어떤 지수가 100에서 10% 하락하면 90이 된다. 다음 날 10% 상승하면 99가 된다. 하락 전 100으로 돌아오지 못한다. 레버리지 ETF는 이 움직임이 더 크게 확대된다. 그래서 단순히 &ldquo;2배 ETF니까 장기적으로 수익도 2배&quot;라고 생각하면 위험하다.
QLD는 QQQ보다 공격적이지만 TQQQ보다는 변동성이 낮은 중간 단계 상품으로 볼 수 있다. 그래도 초보자가 아무 기준 없이 장기 보유하기에는 부담이 큰 상품이다.
TQQQ 뜻: 나스닥 100 하루 수익률 3배 ETF &nbsp; TQQQ는 ProShares UltraPro QQQ의 티커다. 나스닥 100 지수의 하루 수익률 3배를 목표로 하는 레버리지 ETF다. QLD보다 더 공격적인 상품이고, 수익과 손실이 모두 훨씬 크게 움직인다.
예를 들어 나스닥 100이 하루에 1% 오르면 TQQQ는 약 3% 상승을 목표로 한다. 반대로 나스닥 100이 하루에 2% 하락하면 TQQQ는 약 6% 하락을 목표로 한다.
나스닥 100 하루 수익률 +1% → TQQQ 목표 수익률 약 +3% 나스닥 100 하루 수익률 -2% → TQQQ 목표 수익률 약 -6%강한 상승장이 길게 이어지면 TQQQ의 수익률은 매우 크게 보일 수 있다. 그래서 투자 커뮤니티에서 자주 화제가 된다. 하지만 그만큼 하락장에서는 계좌가 빠르게 줄어든다. 단기간에 20~30% 하락하는 일도 충분히 가능하고, 큰 조정장에서는 회복까지 오랜 시간이 걸릴 수 있다.
TQQQ의 가장 큰 위험은 변동성이다. 3배 레버리지는 방향을 맞혔을 때는 강력하지만, 방향이 틀리거나 시장이 흔들릴 때 손실을 크게 만든다. 특히 투자 경험이 적은 상태에서 큰 비중으로 들어가면 가격 변동을 견디기 어렵다.
TQQQ는 장기 적립식 ETF라기보다 고위험 레버리지 상품으로 보는 것이 맞다. 사용할 수는 있지만, 포트폴리오의 중심에 두기보다는 손실 가능 금액을 정해두고 제한적으로 접근하는 편이 현실적이다.
QQQ, QLD, TQQQ 차이 한눈에 비교 &nbsp; 세 상품은 모두 나스닥 100을 기초로 움직이지만 배율과 위험도가 다르다. 초보자라면 아래 표만 봐도 큰 차이를 잡을 수 있다.
구분 QQQ QLD TQQQ 운용사 Invesco ProShares ProShares 기초지수 나스닥 100 나스닥 100 나스닥 100 목표 배율 1배 일일 2배 일일 3배 변동성 상대적으로 낮음 높음 매우 높음 적합한 성향 장기 성장주 투자 공격적 투자 고위험 단기·전술 투자 핵심 위험 기술주 집중 레버리지 손실 큰 변동성과 복리 손실 가장 중요한 차이는 &ldquo;일일 배율&quot;이다. QLD와 TQQQ는 하루 단위 수익률을 2배, 3배로 맞추려는 상품이다. 그래서 1년 수익률이 나스닥 100의 정확한 2배, 3배가 되지는 않는다.
또 하나 중요한 차이는 심리적 부담이다. QQQ가 하루 2% 빠지는 날 TQQQ는 약 6% 하락할 수 있다. QQQ 기준으로는 흔한 조정이어도 TQQQ 투자자에게는 꽤 큰 손실처럼 느껴진다. 투자 상품은 숫자뿐 아니라 내가 버틸 수 있는 변동성까지 함께 봐야 한다.
국내 상장 나스닥 ETF와 비교하면? &nbsp; 미국 ETF를 직접 매수하지 않아도 국내 증시에 상장된 나스닥 100 ETF로 비슷한 투자를 할 수 있다. 예를 들어 국내에는 KODEX 미국나스닥100, TIGER 미국나스닥100, ACE 미국나스닥100 같은 상품들이 있다. 상품명과 운용사는 시기에 따라 달라질 수 있으므로 실제 매수 전에는 증권사 앱에서 총보수, 거래량, 추적오차, 환헤지 여부를 확인해야 한다.
국내 상장 나스닥 ETF의 장점은 원화로 거래할 수 있고, 연금저축이나 IRP 같은 계좌에서 활용할 수 있는 상품이 있다는 점이다. 장기 투자자는 세금과 계좌 구조까지 같이 보는 것이 중요하다.
반대로 미국 상장 ETF인 QQQ, QLD, TQQQ는 달러로 거래하고 해외주식 세금 체계를 따른다. 매매차익이 발생하면 해외주식 양도소득세 신고 대상이 될 수 있고, 환율에 따라 원화 기준 수익률도 달라진다.
정리하면 선택 기준은 이렇게 볼 수 있다.
투자 방식 장점 확인할 점 미국 상장 QQQ 거래량과 인지도가 높고 직접 투자 느낌이 강함 환전, 해외주식 세금, 달러 변동 국내 상장 나스닥 100 ETF 원화 거래가 편하고 절세 계좌 활용 가능 총보수, 거래량, 추적오차, 환헤지 여부 QLD·TQQQ 상승장 수익 확대 가능 큰 손실, 일일 레버리지 구조, 장기 보유 위험 연금저축이나 IRP에서 장기 투자할 목적이라면 국내 상장 나스닥 100 ETF를 먼저 비교해보는 것도 좋다. 반면 미국 ETF 자체를 직접 사고 싶고 달러 자산을 보유하려는 목적이 있다면 QQQ 같은 미국 상장 ETF가 더 직관적일 수 있다.
초보자는 어떤 순서로 접근하는 것이 좋을까? &nbsp; 처음부터 TQQQ를 크게 매수하는 것은 권하기 어렵다. 3배 레버리지는 수익률 그래프가 매력적으로 보일 수 있지만, 실제로는 하락 구간을 견디는 일이 훨씬 어렵다.
초보자라면 먼저 QQQ 또는 국내 상장 나스닥 100 ETF로 나스닥 100의 움직임을 경험하는 편이 낫다. 기술주가 좋은 시기에는 얼마나 빠르게 오르는지, 조정장에서는 얼마나 흔들리는지 직접 느껴보면 레버리지 상품을 바라보는 기준도 생긴다.
그다음 공격적인 투자를 일부 하고 싶다면 QLD처럼 2배 상품부터 소액으로 테스트해볼 수 있다. 이때도 전체 자산의 큰 비중을 넣기보다, 손실이 나도 투자 계획이 망가지지 않는 범위로 제한하는 것이 중요하다.
TQQQ는 더 신중해야 한다. 단순 장기 보유보다 시장 방향에 대한 판단, 손절 기준, 리밸런싱 기준, 현금 비중 관리가 필요하다. &ldquo;언젠가는 오르겠지&quot;라는 생각만으로 버티기에는 변동성이 너무 크다.
실전 기준은 아래처럼 잡아볼 수 있다.
투자자 성향 우선 검토할 상품 미국 성장주에 장기 투자하고 싶다 QQQ 또는 국내 상장 나스닥 100 ETF 변동성을 감수하고 수익을 높이고 싶다 QLD 소액 비중 단기 방향성에 강한 확신이 있고 손실 기준이 있다 TQQQ 제한적 활용 가격 변동에 스트레스를 크게 받는다 레버리지 ETF보다 일반 ETF 투자에서 중요한 것은 남들이 많이 사는 상품을 따라가는 것이 아니라, 내가 이해하고 감당할 수 있는 상품을 고르는 것이다.
정리 &nbsp; QQQ, QLD, TQQQ는 모두 나스닥 100을 기초로 하는 ETF지만 투자 난이도와 위험도가 크게 다르다.
QQQ는 나스닥 100을 1배로 추종하는 대표 ETF다. QLD는 나스닥 100의 하루 수익률 2배를 목표로 하는 레버리지 ETF다. TQQQ는 나스닥 100의 하루 수익률 3배를 목표로 하는 고위험 레버리지 ETF다. QLD와 TQQQ는 장기 수익률이 단순히 지수의 2배, 3배가 되는 상품이 아니다. 초보자라면 QQQ나 국내 상장 나스닥 100 ETF로 먼저 구조를 익히는 것이 현실적이다. 나스닥 100은 좋은 성장 기업에 한 번에 투자할 수 있다는 장점이 있지만, 기술주 집중도가 높은 지수다. 여기에 레버리지를 더하면 수익 기회도 커지지만 손실 속도도 빨라진다. QQQ, QLD, TQQQ를 고를 때는 기대수익률보다 먼저 &ldquo;내가 감당할 수 있는 하락폭인가&quot;를 확인해야 한다.
자주 묻는 질문 &nbsp; QQQ는 나스닥 전체에 투자하는 ETF인가? &nbsp; 정확히는 나스닥 전체가 아니라 나스닥 100 지수를 추종하는 ETF다. 나스닥에 상장된 비금융 대형주 중심으로 구성되어 있어 기술주와 성장주 비중이 높다.
QLD는 QQQ보다 무조건 수익률이 2배인가? &nbsp; 아니다. QLD는 하루 수익률의 2배를 목표로 한다. 장기간 보유했을 때 최종 수익률이 QQQ의 정확한 2배가 되는 구조는 아니다. 시장이 크게 오르내리는 구간에서는 복리 효과 때문에 결과가 달라질 수 있다.
TQQQ는 장기 투자해도 괜찮을까? &nbsp; 가능하다고 말하는 투자자도 있지만, 초보자에게는 위험도가 높다. TQQQ는 하루 수익률 3배를 목표로 하기 때문에 하락장에서 손실이 매우 빠르게 커질 수 있다. 장기 보유를 생각한다면 비중, 현금, 손절 기준, 리밸런싱 기준을 먼저 정해야 한다.
QQQ와 국내 상장 나스닥 100 ETF 중 무엇이 좋을까? &nbsp; 정답은 투자 목적에 따라 다르다. QQQ는 미국 상장 ETF라 달러 자산을 직접 보유하는 느낌이 강하고 거래량이 풍부하다. 국내 상장 나스닥 100 ETF는 원화 거래가 편하고 연금저축, IRP 같은 절세 계좌에서 활용할 수 있는 상품이 있다.
레버리지 ETF는 왜 횡보장에 불리할 수 있나? &nbsp; 레버리지 ETF는 매일 목표 배율을 맞추는 구조다. 가격이 오르내리는 과정에서 손실과 회복이 반복되면 단순 배율 계산과 다른 결과가 나온다. 특히 변동성이 큰 횡보장에서는 기초지수가 제자리여도 레버리지 ETF 수익률은 나빠질 수 있다.`}).add({id:24,href:"/posts/vix-index/",title:"VIX 지수란? 공포지수로 보는 주식시장 변동성과 투자...",description:"VIX 지수의 뜻과 계산 원리, S&P500과의 관계, 투자자가 활용하는 방법, VIX 선물과 ETF 투자 시 주의할 점을 쉽게 정리했다.",content:`주식시장이 크게 흔들릴 때 뉴스에서 자주 나오는 말이 있다. 바로 VIX 지수다. &ldquo;공포지수가 급등했다&rdquo;, &ldquo;VIX가 안정되면서 증시가 반등했다&rdquo; 같은 표현을 한 번쯤 봤을 것이다.
VIX 지수는 시장 참여자들이 앞으로 주식시장이 얼마나 크게 움직일 것으로 예상하는지 보여주는 변동성 지표다. 미국 S&amp;P 500 지수 옵션 가격을 바탕으로 향후 30일 동안의 기대 변동성을 계산한다.
쉽게 말하면 VIX는 주가의 방향을 직접 맞히는 지표가 아니다. 대신 시장이 앞으로 얼마나 불안하게 움직일 것인지, 투자자들이 위험을 얼마나 크게 보고 있는지를 보여준다. 그래서 흔히 &ldquo;공포지수&quot;라고도 부른다.
VIX 지수란 무엇인가 &nbsp; VIX 지수(Volatility Index)는 미국 시카고옵션거래소(CBOE)가 발표하는 변동성 지수다. S&amp;P 500 지수 옵션 가격에 반영된 시장의 기대를 이용해 앞으로 약 30일 동안의 변동성을 추정한다.
여기서 변동성이란 가격이 오르고 내리는 폭을 말한다. 변동성이 크다는 것은 주가가 크게 출렁일 가능성이 높다는 뜻이고, 변동성이 낮다는 것은 주가 움직임이 상대적으로 안정적일 가능성이 높다는 뜻이다.
VIX 지수가 높아지면 시장 참여자들이 앞으로 큰 가격 변동을 예상한다는 의미다. 보통 금융위기, 전쟁, 경기 침체 우려, 금리 충격, 대형 기업 실적 쇼크 같은 불확실성이 커질 때 VIX가 상승한다.
반대로 VIX 지수가 낮아지면 시장이 비교적 안정적이라고 보는 투자자가 많다는 뜻이다. 주가가 꾸준히 오르거나 특별한 충격이 적은 시기에는 VIX가 낮은 수준에 머무르는 경우가 많다.
다만 VIX가 낮다고 해서 앞으로 주가가 반드시 오른다는 뜻은 아니다. VIX는 방향이 아니라 변동성의 크기를 보는 지표다. 시장이 조용해 보이는 시기에도 갑작스러운 악재가 나오면 VIX는 빠르게 튈 수 있다.
VIX는 어떻게 계산될까 &nbsp; VIX는 S&amp;P 500 지수 옵션 가격을 이용해 계산된다. 옵션은 미래에 특정 가격으로 지수를 사거나 팔 수 있는 권리다. 투자자들이 시장 하락이나 급등에 대비하려고 옵션을 많이 사면 옵션 가격이 오른다.
옵션 가격에는 시장의 기대가 들어 있다. 투자자들이 앞으로 시장이 크게 흔들릴 것이라고 생각하면 보험료처럼 옵션 가격을 더 비싸게 지불하려 한다. 반대로 시장이 안정적일 것이라고 보면 옵션 가격은 상대적으로 낮아진다.
VIX는 이 옵션 가격들에 담긴 기대 변동성을 모아 계산한다. 특정 옵션 하나만 보는 것이 아니라 여러 행사가격의 콜옵션과 풋옵션 가격을 활용해 향후 30일 기대 변동성을 추정한다.
여기서 중요한 점은 VIX가 과거 주가 변동만 보고 계산되는 지표가 아니라는 것이다. 과거 데이터로 계산한 변동성을 역사적 변동성이라고 부른다. VIX는 옵션 시장 가격에 담긴 미래 기대를 반영하므로 시장 참여자들의 현재 심리를 더 빠르게 보여준다.
예를 들어 어떤 악재가 갑자기 터졌다고 하자. 아직 주가가 크게 빠지지 않았더라도 투자자들이 급락에 대비해 풋옵션을 많이 사면 옵션 가격이 오르고 VIX가 먼저 상승할 수 있다. 이 때문에 VIX는 시장 불안의 온도계처럼 활용된다.
VIX와 주가 지수는 왜 반대로 움직일까 &nbsp; VIX는 S&amp;P 500 지수와 대체로 반대로 움직이는 경향이 있다. 주가가 급락할 때 투자자들은 손실을 피하거나 방어하기 위해 옵션을 찾는다. 특히 하락에 대비하는 풋옵션 수요가 늘어나면 옵션 가격이 오르고 VIX도 상승한다.
반대로 주가가 안정적으로 오르는 시기에는 투자자들이 위험을 크게 느끼지 않는다. 방어용 옵션 수요가 줄고 옵션 가격도 낮아지기 쉬워 VIX가 내려가는 경우가 많다.
이 흐름을 간단히 정리하면 이렇다.
시장 상황 투자자 심리 VIX 움직임 주가 급락 불안, 방어 수요 증가 상승 주가 안정 위험 인식 완화 하락 갑작스러운 악재 옵션 수요 증가 급등 가능 완만한 상승장 변동성 기대 감소 낮은 수준 유지 그래서 VIX는 공포지수라고 불린다. VIX가 급등했다는 것은 시장 참여자들이 앞으로 큰 변동을 걱정하고 있다는 뜻에 가깝다.
다만 &ldquo;VIX 상승 = 주가 하락 확정&quot;으로 이해하면 안 된다. VIX는 기대 변동성 지표이기 때문에 주가가 크게 오를 가능성까지 포함한 변동성을 보여준다. 현실에서는 급락 공포가 커질 때 VIX가 오르는 경우가 많아 하락장과 연결되어 보일 뿐이다.
VIX 지수는 어떻게 해석해야 할까 &nbsp; VIX의 절대 수준은 시장 분위기를 파악하는 데 도움이 된다. 일반적으로 VIX가 낮으면 시장이 차분하다고 보고, 높으면 불안이 커졌다고 본다.
대략적인 감각은 다음과 같이 이해할 수 있다.
VIX 수준 시장 분위기 10~15 안팎 매우 안정적이거나 경계감이 낮은 구간 15~20 안팎 비교적 평상시와 가까운 구간 20~30 안팎 불확실성이 커지고 변동성이 확대되는 구간 30 이상 시장 불안이 강한 구간 40 이상 위기 국면에서 나타날 수 있는 높은 공포 구간 이 숫자는 절대 법칙이 아니다. 시장 환경, 금리 수준, 경기 상황에 따라 해석은 달라질 수 있다. 중요한 것은 VIX의 숫자 하나보다 방향과 속도다.
예를 들어 VIX가 18에서 28로 빠르게 상승했다면 시장의 위험 인식이 갑자기 커졌다는 뜻이다. 반대로 VIX가 35에서 25로 내려왔다면 아직 높은 수준이더라도 공포가 조금 완화되고 있다고 볼 수 있다.
또 VIX가 너무 낮은 상태가 오래 이어질 때도 주의가 필요하다. 시장이 지나치게 안심하고 있다는 뜻일 수 있기 때문이다. 모두가 위험을 가볍게 볼 때 작은 충격에도 변동성이 크게 튈 수 있다.
투자자는 VIX를 어떻게 활용할까 &nbsp; VIX는 투자자가 시장 리스크를 점검할 때 유용하다. 특히 미국 주식이나 글로벌 ETF에 투자하는 사람이라면 시장 분위기를 빠르게 파악하는 보조 지표로 쓸 수 있다.
포트폴리오 위험 점검 &nbsp; VIX가 빠르게 상승하면 시장이 불안해지고 있다는 신호다. 이때 투자자는 주식 비중이 너무 높은지, 특정 섹터에 자금이 몰려 있는지, 레버리지 상품을 과하게 보유하고 있지는 않은지 점검할 수 있다.
예를 들어 VIX가 낮을 때 공격적으로 투자하던 사람이 VIX 급등을 확인했다면 손절 기준, 현금 비중, 분산 투자 상태를 다시 볼 필요가 있다. VIX는 매수와 매도의 자동 신호라기보다 위험 관리 알람에 가깝다.
시장 과열과 공포 확인 &nbsp; VIX는 시장 심리를 보는 데도 도움이 된다. VIX가 지나치게 낮으면 투자자들이 위험을 너무 가볍게 보고 있을 가능성이 있다. 반대로 VIX가 급등하면 공포가 크게 확산된 상황일 수 있다.
일부 투자자는 VIX가 매우 높아진 구간을 장기 분할매수 기회로 보기도 한다. 공포가 극단적으로 커진 시기에는 좋은 자산까지 함께 팔리는 경우가 있기 때문이다. 다만 VIX가 높다고 바로 바닥이라는 뜻은 아니다. 위기 국면에서는 VIX가 높은 상태로 오래 머물 수 있다.
헤지 전략 참고 &nbsp; 기관투자자나 숙련된 투자자는 VIX 선물, 옵션, 관련 ETF나 ETN을 활용해 변동성에 투자하거나 주식 포트폴리오를 방어한다. 주가가 급락할 때 VIX 관련 상품이 오를 수 있기 때문에 헤지 수단으로 쓰이는 것이다.
하지만 개인 투자자가 VIX 상품을 장기 보유하는 것은 조심해야 한다. VIX 자체는 직접 살 수 있는 주식이 아니고, 대부분 선물 가격을 바탕으로 만든 상품이다. 선물 구조 때문에 장기 보유 수익률이 VIX 지수 움직임과 다르게 나타날 수 있다.
VIX 관련 상품 투자 시 주의할 점 &nbsp; VIX가 유명하다 보니 VIX 선물, 옵션, ETF, ETN 같은 상품에 관심을 갖는 투자자도 많다. 하지만 VIX 관련 상품은 일반 주식이나 ETF보다 구조가 훨씬 어렵다.
첫째, VIX 지수 자체를 직접 사는 것은 불가능하다. 투자자는 보통 VIX 선물이나 그 선물을 편입한 ETF·ETN에 투자한다. 그래서 실제 수익률은 VIX 현물 지수와 다르게 움직일 수 있다.
둘째, 선물 만기 구조의 영향을 받는다. VIX 선물 시장은 평상시에 먼 만기의 선물 가격이 가까운 만기보다 높은 콘탱고 상태가 자주 나타난다. 이 경우 상품이 만기 교체를 반복할 때 비용이 발생해 장기 수익률이 깎일 수 있다.
셋째, 변동성이 매우 크다. VIX 관련 상품은 하루에도 크게 움직일 수 있다. 특히 레버리지나 인버스 상품은 손실 속도가 빠르다. 단기 대응 도구로 만들어진 상품을 장기 투자처럼 들고 가면 기대와 다른 결과가 나올 수 있다.
넷째, VIX가 이미 급등한 뒤 따라 사면 늦을 수 있다. 공포가 커진 뒤에는 VIX 관련 상품 가격도 이미 많이 올라 있을 가능성이 높다. 이후 시장이 조금만 안정되어도 VIX가 빠르게 내려가며 손실이 날 수 있다.
그래서 초보 투자자는 VIX 관련 상품을 수익 창출 수단으로 접근하기보다, 먼저 VIX 지수를 시장 위험을 읽는 지표로 활용하는 편이 현실적이다.
VIX의 한계와 함께 보면 좋은 지표 &nbsp; VIX는 좋은 지표지만 모든 시장을 설명하지는 못한다. 가장 큰 한계는 S&amp;P 500 옵션을 기반으로 한다는 점이다. 미국 대형주 시장의 기대 변동성을 잘 보여주지만, 한국 주식시장이나 채권, 원자재, 암호화폐의 변동성을 직접 나타내지는 않는다.
또 VIX는 향후 약 30일의 단기 기대 변동성을 보는 지표다. 장기 투자자가 3년, 5년 관점으로 기업가치를 판단할 때 VIX 하나로 결론을 내리기는 어렵다. 단기 시장 심리를 보는 도구로 쓰는 것이 적절하다.
VIX는 방향을 예측하는 지표도 아니다. VIX가 높다는 것은 시장이 크게 움직일 가능성을 반영할 뿐, 주가가 반드시 내려간다는 뜻은 아니다. 다만 실제 시장에서는 하락 공포가 커질 때 VIX가 오르는 일이 많아 하락장 신호처럼 해석되는 경우가 많다.
함께 보면 좋은 지표도 있다.
지표 의미 S&amp;P 500 지수 미국 대형주 시장의 실제 가격 흐름 미국 10년물 국채금리 금리 변화와 위험자산 부담 확인 달러인덱스 글로벌 위험 회피 심리 확인 신용스프레드 기업 부도 위험과 금융시장 스트레스 확인 VXN 나스닥 중심 기술주 변동성 확인 VVIX VIX 자체의 변동성 확인 VIX를 다른 지표와 함께 보면 시장의 공포가 단순한 단기 이벤트인지, 금융시장 전반의 스트레스로 번지고 있는지 더 잘 판단할 수 있다.
정리 &nbsp; VIX 지수는 S&amp;P 500 옵션 가격을 바탕으로 향후 30일 동안의 기대 변동성을 나타내는 지표다. 시장이 앞으로 크게 흔들릴 것으로 예상하면 VIX가 오르고, 시장이 안정적이라고 보면 VIX가 낮아지는 경향이 있다.
VIX는 주가 방향을 직접 맞히는 도구가 아니라 시장 불안과 위험 인식을 읽는 도구다. 그래서 투자자는 VIX를 매수·매도 신호로 단순하게 쓰기보다, 포트폴리오 위험을 점검하고 시장 심리를 파악하는 보조 지표로 활용하는 것이 좋다.
특히 VIX 관련 ETF나 ETN은 구조가 복잡하고 선물 만기 교체 비용, 큰 변동성, 레버리지 위험이 있다. 초보 투자자는 먼저 VIX의 의미와 한계를 이해하고, 실제 상품 투자는 상품 구조를 충분히 확인한 뒤 접근해야 한다.
자주 묻는 질문 &nbsp; VIX 지수가 높으면 주식을 팔아야 할까? &nbsp; 반드시 그런 것은 아니다. VIX가 높다는 것은 시장 변동성이 커졌다는 뜻이지, 앞으로 주가가 무조건 더 떨어진다는 뜻은 아니다. 주식 비중, 투자 기간, 현금 여력, 손절 기준을 점검하는 신호로 보는 것이 더 적절하다.
VIX 지수는 몇이면 위험한 수준인가? &nbsp; 일반적으로 20을 넘으면 변동성이 커졌다고 보고, 30 이상이면 시장 불안이 강한 구간으로 해석하는 경우가 많다. 다만 시장 환경에 따라 기준은 달라질 수 있으므로 절대 숫자보다 상승 속도와 추세를 함께 봐야 한다.
VIX ETF를 장기 보유해도 될까? &nbsp; 주의가 필요하다. VIX ETF나 ETN은 대부분 VIX 선물을 활용하기 때문에 장기 보유 수익률이 VIX 지수와 다르게 움직일 수 있다. 선물 만기 교체 비용과 큰 변동성 때문에 단기 대응 상품에 가까운 경우가 많다.`}).add({id:25,href:"/posts/sole-proprietor-vs-corporation/",title:"개인사업자와 법인사업자 차이, 창업 전에 꼭 알아야 할 기준",description:"창업할 때 개인사업자와 법인사업자 중 무엇을 선택해야 할지 설립 절차, 세금, 책임 범위, 자금 조달, 운영 방식 차이로 쉽게 정리했다.",content:`창업을 준비하다 보면 생각보다 빨리 마주치는 질문이 있다. &ldquo;개인사업자로 시작할까, 법인사업자로 시작할까?&ldquo;라는 문제다. 아이템을 정하고, 상호를 고민하고, 사업장을 알아보는 일도 중요하지만 사업 형태를 어떻게 정하느냐에 따라 세금, 책임, 회계 처리, 투자 유치 방식이 달라진다.
작게 시작하는 가게나 1인 서비스업은 개인사업자가 편한 경우가 많다. 반대로 외부 투자를 받을 계획이 있거나, 직원과 주주가 함께 참여하는 구조라면 법인이 더 어울릴 수 있다. 어느 쪽이 무조건 좋다고 말하기는 어렵다. 사업 규모, 위험도, 예상 이익, 자금 조달 계획에 따라 답이 달라진다.
이 글에서는 개인사업자와 법인사업자의 차이를 창업자가 실제로 판단할 수 있는 기준으로 정리하였다.
개인사업자와 법인사업자의 가장 큰 차이 &nbsp; 개인사업자는 말 그대로 개인이 사업의 주체가 되는 형태다. 사업자등록증은 있지만 사업체와 대표 개인이 완전히 분리된 존재로 보지는 않는다. 그래서 사업으로 번 돈도 대표 개인의 소득이 되고, 사업 과정에서 생긴 채무도 대표 개인이 책임지는 구조다.
법인사업자는 법에 따라 별도의 인격을 가진 회사가 사업의 주체가 된다. 대표이사나 주주가 회사를 운영하고 소유하더라도, 회사 돈과 개인 돈은 구분된다. 법인은 계약을 맺고, 재산을 소유하고, 세금을 내는 독립된 주체로 취급된다.
쉽게 비교하면 다음과 같다.
구분 개인사업자 법인사업자 사업 주체 대표 개인 법인 돈의 소유 사업 돈과 개인 돈의 경계가 약함 회사 돈과 개인 돈이 분리됨 세금 종합소득세 법인세, 배당·급여 관련 세금 책임 범위 대표 개인이 무한책임 원칙적으로 출자금 한도 책임 설립 난이도 비교적 간단함 등기, 정관, 임원 구성 등 필요 투자 유치 주식 발행 구조가 없음 주식 발행과 지분 투자 가능 핵심은 &ldquo;분리&quot;다. 개인사업자는 대표와 사업체가 붙어 있고, 법인사업자는 대표와 회사가 분리되어 있다.
설립 절차와 운영 난이도 차이 &nbsp; 개인사업자는 시작이 비교적 쉽다. 업종에 따라 인허가가 필요한 경우를 제외하면 홈택스나 세무서에서 사업자등록을 신청하면 된다. 준비해야 할 서류도 상대적으로 적고, 사업 초기 비용도 낮은 편이다.
법인은 설립 과정이 더 복잡하다. 정관을 만들고, 상호와 본점 소재지를 정하고, 자본금과 주식 수를 정한 뒤 법인 설립 등기를 해야 한다. 이후 법인 명의로 사업자등록을 진행한다. 업종에 따라 최소 자본금이나 별도 인허가가 필요할 수도 있다.
운영도 법인이 더 엄격하다. 개인사업자는 사업용 계좌에서 돈을 꺼내 쓰는 일이 상대적으로 자유롭지만, 법인은 다르다. 대표가 지분 100%를 가진 회사라도 회사 돈은 대표 개인 돈이 아니다. 대표가 회사 자금을 개인적으로 사용하면 가지급금, 인정이자, 배당, 급여, 횡령 문제로 이어질 수 있다.
법인은 회계 처리도 더 빡빡하다. 법인사업자는 규모와 관계없이 복식부기 장부를 작성해야 한다. 개인사업자도 매출 규모가 커지면 복식부기 의무가 생기지만, 소규모라면 간편장부로 시작할 수 있는 경우가 있다.
사업 초기에 회계와 세무를 직접 처리하고 싶다면 개인사업자가 편하다. 반대로 처음부터 회계 투명성, 주주 관리, 외부 투자 구조가 필요하다면 법인을 고려할 만하다.
세금은 개인사업자와 법인사업자가 다르게 계산된다 &nbsp; 개인사업자의 사업 이익은 대표 개인의 종합소득에 합산된다. 그래서 사업소득이 많아질수록 종합소득세 누진세율의 영향을 크게 받는다. 2025년 귀속 종합소득세 기준으로 과세표준은 6%부터 45%까지 누진세율이 적용된다.
법인사업자는 회사가 벌어들인 이익에 법인세가 붙는다. 2026년 이후 일반 영리법인의 각 사업연도 소득 법인세율은 과세표준 2억 원 이하 10%, 2억 원 초과 200억 원 이하 20%, 200억 원 초과 3,000억 원 이하 22%, 3,000억 원 초과 25% 구조다.
겉으로 보면 법인세율이 개인 종합소득세 최고세율보다 낮아 보인다. 그래서 &ldquo;이익이 많으면 무조건 법인이 유리하다&quot;고 생각하기 쉽다. 하지만 실제 판단은 더 복잡하다.
법인이 번 돈을 대표가 개인적으로 가져가려면 급여, 상여, 배당 같은 절차를 거쳐야 한다. 급여로 가져가면 근로소득세와 4대 보험 이슈가 생기고, 배당으로 가져가면 배당소득세와 종합과세 문제를 봐야 한다. 법인에 이익을 남겨 재투자할 것인지, 대표가 생활비로 가져갈 것인지에 따라 유불리가 달라진다.
비교 포인트 개인사업자 법인사업자 기본 세금 종합소득세 법인세 대표가 돈을 가져가는 방식 사업소득이 대표 소득 급여, 상여, 배당 등 세금 구조 대표 개인 소득에 누진세 적용 법인세 후 자금 인출 방식별 추가 과세 가능 절세 판단 소득 규모와 비용 처리 중요 법인 유보, 급여 설계, 배당 정책까지 함께 봐야 함 따라서 세금만 보고 결정하기보다는 예상 순이익, 대표 급여, 법인에 남길 자금, 투자 계획을 함께 계산해야 한다.
책임 범위와 자금 조달 방식이 다르다 &nbsp; 개인사업자는 사업상 채무에 대해 대표가 직접 책임진다. 사업이 잘 안되어 거래처 대금, 임대료, 대출금이 남으면 대표 개인 재산으로 갚아야 할 수 있다. 이를 무한책임이라고 한다.
법인사업자는 원칙적으로 주주가 출자한 금액 한도에서 책임을 진다. 주식회사라면 회사가 어려워졌을 때 주주는 투자한 돈을 잃는 선에서 책임이 제한되는 구조다. 이를 유한책임이라고 한다.
다만 현실에서는 예외가 있다. 법인이 금융기관에서 대출을 받을 때 대표가 연대보증을 서거나, 세금 체납이 발생하거나, 대표가 회사 돈을 부적절하게 사용한 경우에는 대표 개인에게도 책임이 번질 수 있다. 법인이라고 해서 모든 책임에서 자동으로 벗어나는 것은 아니다.
자금 조달 방식도 차이가 크다. 개인사업자는 주식이 없기 때문에 지분 투자를 받기 어렵다. 자기 돈, 사업 이익, 대출을 중심으로 사업을 키워야 한다. 법인은 주식을 발행하거나 지분을 넘기는 방식으로 외부 투자자를 받을 수 있다. 스타트업이 처음부터 법인을 선택하는 큰 이유가 여기에 있다.
정리하면 위험이 큰 사업, 투자 유치가 필요한 사업, 여러 사람이 지분을 나누어 참여하는 사업은 법인 구조가 더 적합할 수 있다. 반대로 혼자 작게 시작하고 고정비를 낮춰야 하는 사업은 개인사업자가 부담이 적다.
어떤 경우에 개인사업자와 법인사업자가 유리할까 &nbsp; 개인사업자가 어울리는 경우는 비교적 명확하다. 혼자 시작하는 사업, 초기 매출이 크지 않은 사업, 외부 투자를 받을 계획이 없는 사업, 회계 관리 부담을 낮추고 싶은 사업이라면 개인사업자가 편하다. 음식점, 온라인 쇼핑몰, 프리랜서 서비스, 소규모 강의나 컨설팅처럼 대표 개인의 역량으로 시작하는 업종이 여기에 해당한다.
법인사업자가 어울리는 경우도 있다. 투자 유치가 필요하거나, 공동창업자가 있거나, 사업 위험이 커서 개인 책임을 줄이고 싶거나, 매출과 이익 규모가 빠르게 커질 가능성이 있다면 법인을 검토할 수 있다. B2B 거래에서 법인 신뢰도가 중요한 경우에도 법인이 유리하게 작용할 때가 있다.
처음 선택이 끝까지 고정되는 것은 아니다. 개인사업자로 시작한 뒤 사업이 커지면 법인으로 전환할 수 있다. 실제로 많은 사업자가 초기에는 개인사업자로 비용과 절차를 줄이고, 매출과 이익이 안정된 뒤 법인전환을 검토한다.
다만 법인전환은 단순히 사업자등록증만 바꾸는 일이 아니다. 자산 이전, 부가가치세, 양도소득세, 영업권 평가, 거래처 계약 변경, 직원 승계 등을 검토해야 한다. 사업 규모가 커진 뒤에는 세무사와 상담해 전환 시점과 방식을 정하는 편이 낫다.
정리 &nbsp; 개인사업자와 법인사업자의 차이는 단순히 세율만의 문제가 아니다. 사업 주체가 누구인지, 돈을 어떻게 가져갈 수 있는지, 채무를 누가 책임지는지, 외부 투자를 받을 수 있는지까지 연결된다.
핵심만 정리하면 이렇다.
작게 혼자 시작하고 절차를 단순하게 가져가고 싶다면 개인사업자가 편하다. 외부 투자, 공동창업, 지분 구조, 대외 신뢰도가 중요하다면 법인사업자가 어울릴 수 있다. 개인사업자는 대표가 사업 채무를 직접 책임지는 구조다. 법인사업자는 회사와 대표가 분리되지만, 회사 돈을 개인 돈처럼 쓰면 문제가 생긴다. 세금은 단순 세율만 보지 말고 대표 급여, 배당, 4대 보험, 법인 유보금까지 함께 봐야 한다. 창업 초기에 가장 현실적인 기준은 &ldquo;내 사업이 지금 얼마나 단순하게 시작되어야 하는가&quot;와 &ldquo;앞으로 얼마나 빠르게 커질 가능성이 있는가&quot;다. 처음부터 완벽한 선택을 하려고 하기보다, 현재 규모와 1~3년 뒤 계획을 기준으로 고르는 것이 더 실용적이다.
자주 묻는 질문 &nbsp; 개인사업자로 시작했다가 나중에 법인으로 바꿀 수 있을까? &nbsp; 가능하다. 다만 법인전환 과정에서 자산 이전, 세금, 계약 승계, 직원 처리 문제가 생길 수 있으므로 매출과 이익이 커지기 전에 미리 준비하는 것이 좋다.
법인사업자는 대표가 회사 돈을 마음대로 써도 될까? &nbsp; 안 된다. 법인은 회사와 대표가 분리되어 있으므로 회사 돈은 법인의 돈이다. 대표가 개인적으로 사용하려면 급여, 상여, 배당, 대여금 등 회계와 세무상 적절한 처리가 필요하다.
세금만 보면 법인사업자가 무조건 유리할까? &nbsp; 무조건 그렇지 않다. 법인세율만 보면 낮아 보일 수 있지만, 대표가 돈을 가져가는 과정에서 급여나 배당 관련 세금이 추가로 생길 수 있다. 예상 순이익과 자금 사용 계획을 함께 계산해야 한다.`}).add({id:26,href:"/news/2026/kumyang-delisting-cleanup-trading/",title:"거래소 금양 상장폐지 결정, 27일부터 정리매매 예정과...",description:"한국거래소가 감사의견 거절을 이유로 금양 상장폐지를 결정했다. 정리매매 일정, 가처분 변수, 재무 리스크와 투자자 유의점을 정리한다.",content:`이번 브리핑은 관련 보도가 충분히 확인되는 2026년 3월 25일부터 2026년 5월 20일까지의 기사와 공시 기반 보도를 함께 정리했다.
주요 내용 &nbsp; 한국거래소는 2026년 5월 20일 유가증권시장 상장공시위원회를 열고 금양 주권의 상장폐지를 결정했다. 거래소는 5월 26일까지 상장폐지를 예고한 뒤, 절차가 그대로 진행되면 5월 27일부터 7영업일간 정리매매를 허용할 계획이다. 금양 사안의 핵심은 단순한 주가 급락이 아니라 재무제표 신뢰성, 계속기업 불확실성, 유동성 위기가 동시에 드러난 사례다. 2024사업연도에 이어 2025사업연도 감사보고서에서도 의견거절을 받으면서 2년 연속 상장폐지 사유가 발생했다. 2025사업연도 감사보고서 관련 보도에 따르면 금양은 영업손실 418억3600만원, 당기순손실 535억8700만원을 기록했고, 유동부채가 유동자산을 6112억4300만원 초과했다. 감사인은 이런 상황이 계속기업 존속능력에 유의적인 의문을 만든다고 봤다. 2024년과 2025년 감사의견 거절이 병합 심의되면서 거래소 판단의 초점은 개선계획의 형식보다 실제 재무개선 가능성에 맞춰졌다. 특히 4050억원 규모 제3자배정 유상증자 납입이 여러 차례 지연되고, 납입일이 2026년 6월 30일로 재연장된 점은 심의 전 재무개선 입증을 어렵게 만든 변수다. 부산 기장 이차전지 공장 부지 경매 절차, BNK부산은행의 약 1356억원 규모 대여금 청구 소송, 과거 유상증자 철회에 따른 불성실공시법인 지정 이력도 투자자 신뢰를 약화시킨 배경으로 거론된다. 금양은 발포제·정밀화학 중심 기업에서 이차전지 기업으로 사업 확장을 시도했고, 한때 시가총액이 9조~10조원 수준까지 커졌다. 그러나 대규모 설비투자와 자금조달 계획이 실제 현금 유입과 실적 전환으로 이어지지 못하면서 테마 기대와 재무 체력 사이의 괴리가 커졌다. 소액주주 피해도 핵심 쟁점이다. 보도에 따라 23만명대에서 24만명 안팎의 소액주주가 언급되고 있으며, 일부 보도는 소액주주 보유 비중이 전체 물량의 약 72%에 달한다고 전했다. 이차전지 테마주 전반에 대해 시장이 성장 스토리보다 자금조달 능력, 공시 신뢰도, 실제 매출 전환 여부를 더 엄격히 보는 흐름이 강해지고 있다. 금양 사례는 ESS·원통형 배터리 등 장기 성장 산업에서도 회계 신뢰와 유동성 관리가 무너지면 투자 논리가 급격히 훼손될 수 있음을 보여준다. 절차와 일정 &nbsp; 2025년 3월 24일: 2024사업연도 감사의견 거절 여파로 금양 주식 매매거래가 정지됐다. 2026년 3월 25일: 2025사업연도 감사보고서에서도 의견거절이 확인되며 2년 연속 감사의견 거절 이슈가 부각됐다. 2026년 4월 14일: 2024사업연도 감사의견 거절 관련 개선기간이 만료됐다. 2026년 4월 23일: 금양이 개선계획 이행 여부 심의요청서를 제출했고, 거래소는 20영업일 이내 상장공시위원회 판단 절차에 들어갔다. 2026년 5월 20일: 거래소가 상장폐지를 결정했다. 2026년 5월 26일: 거래소가 예고한 상장폐지 예고 기간의 종료일이다. 2026년 5월 27일 이후: 효력정지 가처분 등으로 절차가 멈추지 않으면 7영업일간 정리매매가 진행될 예정이다. 핵심 이슈 &nbsp; 정리매매는 2026년 5월 27일부터 7영업일간 진행될 예정이지만, 금양이 효력정지 가처분을 신청하면 일정이 보류될 수 있다. 정리매매 구간은 가격제한폭이 일반 거래와 다르게 작동하고 변동성이 매우 커질 수 있어 단기 반등 기대만으로 접근하기 어렵다. 상장폐지 이후에는 장내 유동성이 사라지므로 보유 주식의 환금성이 크게 낮아진다. 감사의견 거절은 기업 가치가 낮다는 의미를 넘어 재무제표를 신뢰하기 어렵다는 신호이기 때문에 투자 판단의 불확실성이 크다. 시장 영향 &nbsp; 금양은 한때 이차전지 기대감으로 시가총액 10조원에 근접했던 종목이라 개인투자자 손실과 테마주 신뢰도 훼손이 클 수 있다. 감사의견 미달 기업, 관리종목, 대규모 유상증자 지연 기업에 대한 투자자 경계심이 커질 가능성이 있다. 거래소의 상장폐지 심사가 강화되는 흐름 속에서 재무 취약 기업의 거래정지·상장폐지 리스크가 시장의 주요 변수로 부각될 수 있다. 향후 전망 &nbsp; 단기적으로는 금양의 가처분 신청 여부와 법원 판단이 정리매매 일정의 핵심 변수가 된다. 가처분이 기각되면 거래소가 예고한 절차에 따라 정리매매와 상장폐지가 진행될 가능성이 높다. 가처분이 인용되면 절차는 일시 중단될 수 있지만, 감사의견 거절과 유동성 문제 자체가 해소되는 것은 아니므로 본질적 불확실성은 남는다. 투자자는 정리매매 일정, 법원 결정, 유상증자 납입 여부, 채권자 대응, 공장·자산 경매 진행 상황을 함께 확인해야 한다. 주요 뉴스 &nbsp; 2026-05-20 연합뉴스: 거래소, &lsquo;감사의견 거절&rsquo; 금양 상장폐지 결정
한국거래소가 2026년 5월 20일 유가증권시장 상장공시위원회를 열고 금양의 상장폐지를 결정했다. 거래소는 5월 26일까지 상장폐지를 예고한 뒤 7영업일 동안 정리매매를 허용할 계획이다. 다만 금양이 효력정지 가처분을 신청하면 법원 판단 전까지 정리매매가 보류될 수 있다.
2026-05-20 뉴시스: 거래소, 금양 상폐 결정&hellip;27일부터 정리매매 뉴시스는 거래소가 외부감사인의 감사의견 거절을 이유로 금양 상장폐지를 심의·의결했다고 전했다. 금양은 2024사업연도와 2025사업연도 감사보고서에서 2년 연속 의견거절을 받았고, 이에 따라 상장폐지 사유가 이어졌다. 회사 측의 법적 대응 예고 때문에 실제 정리매매 일정은 변동 가능성이 있다.
2026-05-20 경기일보: 거래소, 금양 상장폐지 결정&hellip;&lsquo;이차전지 신화&rsquo;의 몰락 경기일보는 금양이 한때 이차전지 테마로 시가총액 10조원에 근접했지만, 대규모 사업 확장과 자금조달 차질이 겹치며 상장폐지 결정까지 이어졌다고 분석했다. 몽골 광산 실적 추정치 하향, 유상증자 철회, 불성실공시법인 지정 등도 시장 신뢰 훼손 요인으로 언급됐다.
2026-05-06 조선비즈: 금양 상폐 심사 초읽기&hellip;장부에 담긴 &lsquo;계속기업&rsquo; 경고음
조선비즈는 금양의 상장폐지 심사가 2024년과 2025년 감사의견 거절 사유를 병합해 판단되는 구조라고 설명했다. 2025년 말 기준 유동자산 779억원, 유동부채 6491억원, 현금성자산 급감, 공장 부지 경매 절차 등 유동성 압박이 핵심 리스크로 제시됐다. 4050억원 규모 유상증자 납입이 6월 30일로 미뤄진 점도 심사 전 재무개선 입증을 어렵게 만든 요인이다.
2026-03-31 이데일리: 금양, &lsquo;4050억&rsquo; 유상증자 납입 또 미뤘다&hellip;상장폐지 불가피
이데일리는 금양의 4050억원 규모 제3자배정 유상증자 납입이 여러 차례 지연됐고, 2026년 6월 30일로 다시 미뤄졌다고 전했다. 유상증자 불확실성, 기장 공장 부지 경매, 부산은행 대여금 청구 소송이 겹치면서 재무구조 개선의 실현 가능성이 약해졌다는 점을 짚었다. 기사에서는 소액주주가 약 24만명, 보유 물량이 전체의 약 72%라는 점도 투자자 피해 변수로 언급됐다.
2026-04-24 뉴시스: 금양 상폐 여부 다음달 말 결정&hellip;개선계획 이행 내역 제출
금양은 2026년 4월 23일 거래소에 개선계획 이행 여부 심의요청서를 제출했다. 거래소는 접수일로부터 20영업일 이내인 5월 26일까지 상장공시위원회를 열어 상장폐지 여부를 결정할 예정이었다. 이 기사 단계에서도 2024년과 2025년 감사의견 거절 사유의 병합 심의가 핵심 절차로 확인됐다.
2026-04-15 한국경제TV: 금양, 다음달 상폐 결정&hellip;ESS 열풍에 투자 경고등
한국경제TV는 금양의 개선기간 만료와 상장폐지 판단 일정, 소액주주 피해 가능성을 짚었다. 기사에 따르면 금양 주가는 2023년 7월 19만4000원까지 올랐지만 거래정지 전 9900원 수준까지 떨어졌고, 2025년 기준 소액주주는 23만5865명으로 집계됐다. ESS와 이차전지 기대감이 다시 커지는 상황에서도 실적·기술 검증과 재무 체력을 확인해야 한다는 경고로 연결했다.
2026-04-13 아이뉴스24: 금양, 상폐 이의신청했지만 재무개선 미비
아이뉴스24는 금양이 상장폐지 이의신청서를 제출했지만 심의 전 재무구조 개선을 입증하기 어렵다고 봤다. 신한회계법인은 계속기업 존속능력 불확실성을 이유로 의견거절을 냈고, 4050억원 유상증자 납입일이 6월 말로 연기되면서 5월 심의에 반영되기 어려운 상황이 됐다.
2026-03-25 연합뉴스: 2년 연속 &lsquo;감사의견 거절&rsquo; 금양, 결국 상장폐지 수순
연합뉴스는 2026년 3월 25일 금양이 2024년에 이어 2025사업연도 감사보고서에서도 의견거절을 받았다고 보도했다. 감사인은 영업손실, 당기순손실, 유동부채 초과 등으로 계속기업 존속능력에 의문이 있다고 판단했다. 이 시점부터 2년 연속 감사의견 거절에 따른 상장폐지 가능성이 본격화됐다.
한줄 요약 &nbsp; 금양 상장폐지 결정은 이차전지 성장 기대보다 감사의견 거절, 유동성 위기, 자금조달 지연, 공시 신뢰 훼손이 더 크게 작용한 사례이며, 정리매매 일정은 효력정지 가처분 신청과 법원 판단에 따라 달라질 수 있다.`}).add({id:27,href:"/posts/gyeonggi-local-currency/",title:"경기지역화폐 신청 방법과 충전 혜택, 사용처까지 초보자...",description:"경기지역화폐 뜻과 카드 신청 방법, 앱 설치 링크, 충전 방법, 인센티브와 소득공제 혜택, 사용처 확인 방법을 누구나 이해하기 쉽게 정리하였다.",content:`생활비를 아끼는 방법을 찾다 보면 경기지역화폐라는 말을 자주 보게 된다. 동네 마트, 병원, 학원, 음식점처럼 자주 가는 곳에서 쓸 수 있고, 충전할 때 인센티브를 받을 수 있어서 잘만 쓰면 체감 할인 효과가 꽤 크다.
하지만 처음 쓰려면 헷갈리는 부분도 많다. 어느 앱을 설치해야 하는지, 카드는 어떻게 신청하는지, 충전하면 얼마를 더 받을 수 있는지, 아무 가게에서나 결제되는지 바로 감이 오지 않는다.
경기지역화폐는 경기도 31개 시·군에서 발행하는 지역화폐다. 지역 안에서 돈이 돌게 만들어 전통시장과 소상공인 매출을 돕고, 사용자에게는 인센티브와 소득공제 혜택을 주는 구조다. 이 글에서는 경기지역화폐 신청 방법, 구매와 충전 방법, 앱 설치 링크, 실제 혜택과 사용처 확인 방법을 누구나 이해하기 쉽게 정리하였다.
경기지역화폐란 무엇인가 &nbsp; 경기지역화폐는 경기도 각 시·군에서 발행하고 해당 지역 안에서 사용하는 지역사랑상품권이다. 쉽게 말하면 &ldquo;경기도 지역별 선불카드&quot;에 가깝다. 수원페이, 용인와이페이, 부천페이, 안산 다온, 파주페이처럼 지역마다 이름은 다르지만, 대부분 경기지역화폐 앱에서 카드 신청과 충전을 관리할 수 있다.
경기지역화폐는 크게 일반발행과 정책발행으로 나눌 수 있다.
일반발행: 사용자가 직접 충전해서 쓰는 지역화폐 정책발행: 청년기본소득, 산후조리비 같은 정책수당을 지역화폐로 받는 방식 일반 사용자가 생활비 절약 목적으로 쓰는 것은 보통 일반발행이다. 앱에서 카드를 신청하고, 은행계좌를 연결한 뒤 원하는 금액을 충전해서 결제한다.
경기지역화폐의 핵심은 사용 지역이 정해져 있다는 점이다. 예를 들어 수원페이는 수원시 가맹점에서 쓰는 방식이고, 용인와이페이는 용인시 가맹점에서 쓰는 방식이다. 경기도 전체 어디서나 자유롭게 쓰는 카드가 아니라, 내가 선택한 시·군 안에서 사용하는 지역화폐다.
경기지역화폐 신청 방법 &nbsp; 가장 일반적인 신청 방법은 스마트폰에 경기지역화폐 앱을 설치하고 카드형 지역화폐를 신청하는 것이다. 복잡한 은행 방문 없이 앱에서 지역 선택, 카드 신청, 배송지 입력까지 진행할 수 있다.
앱 설치 링크는 아래에서 바로 확인할 수 있다.
iPhone: App Store 경기지역화폐 Android: Google Play 경기지역화폐 신청 절차는 보통 다음 순서로 진행된다.
경기지역화폐 앱을 설치한다. 회원가입과 본인인증을 진행한다. 사용할 시·군을 선택한다. 해당 지역의 지역화폐 카드를 신청한다. 배송지를 입력하고 카드 수령을 기다린다. 카드를 받은 뒤 앱에서 카드 등록을 한다. 은행계좌를 연결하고 충전한다. 여기서 중요한 것은 &ldquo;거주지&quot;와 &ldquo;주 사용 지역&quot;을 생각해서 카드를 고르는 것이다. 꼭 주민등록상 주소지만 기준으로 볼 필요는 없다. 평소 장을 보거나 병원, 학원, 음식점 이용이 많은 지역을 기준으로 선택하는 것이 실용적이다. 다만 시·군별 발행 방식과 사용 가능 지역은 다를 수 있으니 신청 전 앱에서 해당 지역 안내를 확인하는 것이 좋다.
일부 시·군은 카드형 외에도 모바일형이나 지류형을 운영한다. 카드형은 충전식 체크카드처럼 쓸 수 있고, 모바일형은 바코드나 QR 결제 방식으로 쓰며, 지류형은 종이 상품권 형태다. 대부분의 초보자는 카드형부터 시작하는 것이 가장 편하다.
구매와 충전 방법 &nbsp; 경기지역화폐 카드가 등록되면 앱에서 충전할 수 있다. 일반적인 흐름은 은행계좌를 연결하고, 충전 메뉴에서 금액을 입력한 뒤 계좌에서 돈을 이체하는 방식이다.
충전 전에 꼭 확인해야 할 것은 세 가지다.
이번 달 내 지역 인센티브율 1인당 월 충전 한도 예산 소진 여부 경기지역화폐의 인센티브는 모든 지역이 항상 같은 비율로 지급되는 구조가 아니다. 시·군 정책, 예산 상황, 이벤트 기간에 따라 달라질 수 있다. 어떤 달에는 10% 혜택을 주는 지역이 있을 수 있고, 어떤 지역은 한도가 낮거나 예산 소진으로 조기 종료될 수 있다.
예를 들어 10% 인센티브가 적용되는 지역에서 10만 원을 충전하면, 실제로는 11만 원을 쓸 수 있는 식이다. 다만 이 비율과 월 한도는 수시로 바뀔 수 있으므로 충전 버튼을 누르기 전에 앱 또는 경기지역화폐 공식 홈페이지의 인센티브 현황을 확인해야 한다.
충전 후 결제는 일반 카드처럼 하면 된다. 실물 카드가 있는 경우 가맹점 카드 단말기에 꽂거나 긁어서 결제하고, 모바일 결제를 지원하는 지역과 매장에서는 앱 결제를 사용할 수 있다.
어떤 혜택이 있을까 &nbsp; 경기지역화폐의 가장 큰 장점은 인센티브다. 충전할 때 일정 비율의 금액을 추가로 받아 결제할 때 현금처럼 사용할 수 있다. 생활비 지출이 어차피 발생하는 동네 마트, 병원, 학원, 음식점에서 쓴다면 체감 절약 효과가 좋다.
충전 인센티브 &nbsp; 인센티브는 충전 금액에 붙는 추가 혜택이다. 예를 들어 20만 원을 충전했을 때 10% 인센티브가 적용되면 2만 원의 혜택이 붙어 총 22만 원을 사용할 수 있다.
다만 이 혜택은 고정된 금융상품 수익률처럼 보면 안 된다. 시·군별 정책에 따라 다르고, 월별 한도와 예산 소진 여부에 영향을 받는다. 그래서 경기지역화폐는 &ldquo;무조건 몇 퍼센트 할인&quot;이라고 외우기보다 &ldquo;충전 전 이번 달 내 지역 혜택을 확인하는 카드&quot;로 이해하는 것이 정확하다.
소득공제 혜택 &nbsp; 경기지역화폐 앱 설명에 따르면 회원가입 시 연말정산 약관에 동의하거나 앱의 소득공제 신청 메뉴에서 동의하면, 체크카드와 같은 30% 소득공제 혜택을 받을 수 있다.
여기서 놓치기 쉬운 점은 소득공제 신청 여부다. 카드를 등록했다고 자동으로 모든 사용분이 무조건 공제되는 것으로 생각하기보다, 앱에서 소득공제 신청 상태를 확인하는 것이 좋다. 특히 이미 카드를 등록해 사용 중이었다면 앱 메뉴에서 소득공제 신청이 되어 있는지 한 번 확인해두는 편이 안전하다.
지역 상점 추가 혜택 &nbsp; 일부 가맹점은 자체 할인이나 이벤트를 제공하기도 한다. 앱의 결제 매장 찾기, 공식 홈페이지의 가맹점 찾기, 시·군 공지사항을 확인하면 지역별 이벤트를 찾을 수 있다. 전통시장 행사나 특정 기간 페이백 이벤트가 열릴 때는 기본 인센티브보다 체감 혜택이 커질 수 있다.
사용처 확인과 주의사항 &nbsp; 경기지역화폐는 모든 매장에서 쓸 수 있는 카드가 아니다. 기본적으로 지역 내 소상공인 점포와 등록 가맹점에서 사용할 수 있고, 백화점, 대형마트, 기업형 슈퍼마켓, 프랜차이즈 직영점, 유흥·사행업소 등은 제한된다.
공식 안내 기준으로는 연 매출 30억 원 이하 점포가 기준으로 제시되어 있지만, 세부 기준은 시·군별로 다를 수 있다. 그래서 결제 전에 가맹점 여부를 확인하는 습관이 필요하다.
사용처를 확인하는 방법은 간단하다.
경기지역화폐 앱을 실행한다. &ldquo;결제 매장 찾기&rdquo; 또는 가맹점 찾기 메뉴로 들어간다. 사용할 시·군을 선택한다. 매장명이나 업종을 검색한다. 결제 가능 여부를 확인한 뒤 방문한다. 처음에는 자주 가는 마트, 병원, 약국, 학원, 음식점부터 검색해보는 것이 좋다. 자주 쓰는 곳이 가맹점이라면 매달 충전 한도 안에서 계획적으로 사용하기 쉽다.
주의할 점도 있다. 충전한 돈이 있다고 해서 다른 시·군에서 모두 결제되는 것은 아니다. 내가 신청한 지역화폐의 사용 지역을 확인해야 한다. 또 인센티브는 예산에 따라 중단되거나 한도가 바뀔 수 있으므로, 큰 금액을 한 번에 충전하기보다 실제로 쓸 금액을 기준으로 충전하는 편이 좋다.
정리 &nbsp; 경기지역화폐는 경기도 지역 안에서 생활비를 아낄 수 있는 실용적인 결제 수단이다. 앱으로 카드를 신청하고 충전해서 쓰는 방식이라 진입장벽이 낮고, 충전 인센티브와 소득공제 혜택을 함께 기대할 수 있다.
핵심만 다시 정리하면 이렇다.
경기지역화폐는 경기도 31개 시·군에서 발행하는 지역화폐다. 앱에서 카드 신청, 카드 등록, 계좌 연결, 충전을 진행할 수 있다. 인센티브율과 월 충전 한도는 시·군별로 다르며 수시로 바뀔 수 있다. 소득공제 신청을 하면 체크카드와 같은 30% 공제 혜택을 받을 수 있다. 사용 전 앱이나 공식 홈페이지에서 가맹점 여부를 확인해야 한다. 경기지역화폐를 처음 쓴다면 큰 금액부터 충전하기보다, 자주 가는 가맹점이 있는지 먼저 확인하는 것이 좋다. 그다음 이번 달 인센티브와 한도를 보고 실제로 쓸 만큼만 충전하면 생활비 절약에 꽤 도움이 된다.
자주 묻는 질문 &nbsp; 경기지역화폐는 경기도 어디서나 쓸 수 있을까? &nbsp; 아니다. 경기지역화폐는 시·군별로 발행되기 때문에 보통 해당 지역의 가맹점에서 사용한다. 예를 들어 수원페이는 수원시 가맹점, 파주페이는 파주시 가맹점 중심으로 쓰는 방식이다.
경기지역화폐 인센티브는 항상 10%일까? &nbsp; 항상 10%라고 볼 수 없다. 인센티브율, 월 충전 한도, 지급 기간은 시·군 정책과 예산 상황에 따라 달라진다. 충전 전 앱이나 공식 홈페이지의 인센티브 현황을 확인하는 것이 가장 정확하다.
경기지역화폐 카드를 받기 전에도 충전할 수 있을까? &nbsp; 지역과 카드 상태에 따라 앱에서 충전 메뉴가 보일 수 있지만, 실제 결제는 카드 등록 이후 가능한 경우가 많다. 처음 신청했다면 카드를 수령한 뒤 앱에 등록하고 계좌 연결까지 마친 다음 충전하는 흐름으로 보는 것이 안전하다.`}).add({id:28,href:"/posts/how-to-study-economics/",title:"경제 공부하는 방법, 금융 문맹을 벗어나기 위한 현실적...",description:"경제 공부를 어디서부터 시작해야 할지 모르는 초보자를 위해 기본 용어, 경제 뉴스 읽기, 책 선택, 가계부와 소액 투자까지 현실적인 공부 방법을 정리했다.",content:`경제 공부를 해야겠다고 마음먹는 순간은 대개 불편함에서 온다. 월급은 들어오는데 돈이 어디로 나가는지 모르겠고, 금리가 오른다는데 내 대출이 왜 부담스러워지는지 모르겠고, 뉴스에서는 환율과 물가 이야기가 계속 나오는데 내 생활과 어떻게 연결되는지 감이 잡히지 않는다.
나도 처음에는 경제라는 말이 너무 크게 느껴졌다. 경제학 교과서부터 봐야 할 것 같고, 주식 차트를 읽어야 할 것 같고, 어려운 용어를 전부 외워야 할 것 같았다. 그런데 금융 문맹을 벗어나기 위한 공부는 그렇게 거창하게 시작할 필요가 없다.
경제 공부의 목표는 전문가처럼 말하는 것이 아니다. 내 돈을 지키고, 소비를 조절하고, 대출과 투자 판단을 조금 더 낫게 만드는 것이다. 이 글에서는 초보자가 경제 공부를 현실적으로 시작하는 방법을 단계별로 정리하였다.
경제 공부는 왜 필요할까 &nbsp; 경제 공부가 필요한 이유는 단순히 돈을 많이 벌기 위해서만은 아니다. 경제를 모르면 일상에서 이미 하고 있는 선택을 제대로 해석하기 어렵다.
예를 들어 금리가 오르면 예금 이자는 좋아질 수 있지만 대출 이자는 부담스러워진다. 물가가 오르면 같은 월급으로 살 수 있는 물건이 줄어든다. 환율이 오르면 해외여행 비용, 수입 물가, 일부 기업 실적에도 영향을 준다. 주식시장만의 이야기가 아니라 장보기, 월세, 대출, 보험, 연금과 모두 연결된다.
경제 공부를 하면 다음 질문에 조금씩 답할 수 있게 된다.
지금 저축을 늘려야 할까, 대출을 먼저 줄여야 할까? 고정금리와 변동금리 중 무엇이 내 상황에 맞을까? 물가가 오를 때 내 생활비는 어떻게 조정해야 할까? 투자 상품을 볼 때 수익률 말고 무엇을 봐야 할까? 뉴스에서 말하는 경기 침체가 내 직장과 소득에 어떤 영향을 줄까? 경제 공부는 결국 돈과 관련된 판단력을 키우는 일이다. 모르는 상태에서는 남의 말에 쉽게 흔들리지만, 조금씩 공부하면 적어도 &ldquo;왜 그런 선택을 하는지&rdquo; 스스로 설명할 수 있게 된다.
첫 단계는 기본 용어부터 익히는 것이다 &nbsp; 경제 공부를 시작할 때 가장 먼저 막히는 부분은 용어다. 뉴스 한 문단 안에도 금리, 물가, 환율, GDP, 경기, 채권, 유동성 같은 단어가 계속 나온다. 모르는 단어가 많으면 읽는 속도도 느려지고, 결국 포기하기 쉽다.
처음부터 모든 용어를 완벽하게 외울 필요는 없다. 생활과 자주 연결되는 단어부터 잡으면 된다.
용어 쉽게 이해하는 뜻 금리 돈을 빌리거나 맡길 때 적용되는 이자율 물가 상품과 서비스 가격의 전반적인 수준 인플레이션 물가가 지속적으로 오르는 현상 환율 다른 나라 돈과 우리 돈을 바꾸는 비율 GDP 한 나라 안에서 일정 기간 생산된 재화와 서비스의 가치 경기 경제 활동이 활발한지 침체되어 있는지를 보는 흐름 용어 공부는 따로 시간을 많이 내기보다 경제 뉴스나 블로그 글을 읽다가 모르는 단어가 나오면 그때그때 정리하는 방식이 좋다. 노트 앱에 &ldquo;경제 용어장&quot;을 하나 만들고, 한 줄 설명과 실제 예시를 같이 적어두면 오래 기억된다.
예를 들어 금리를 공부했다면 &ldquo;금리 = 돈의 가격&quot;이라고만 적지 말고, &ldquo;기준금리가 오르면 예금금리와 대출금리가 같이 움직일 수 있다&quot;처럼 내 생활과 연결해서 적는 것이 좋다.
경제 뉴스는 매일 조금씩 읽는 편이 좋다 &nbsp; 경제 뉴스는 공부의 재료다. 책은 개념을 잡는 데 좋고, 뉴스는 지금 경제가 어떻게 움직이는지 보는 데 좋다. 다만 처음부터 모든 뉴스를 읽으려고 하면 금방 지친다.
초보자는 하루에 10분 정도만 정해도 충분하다. 중요한 것은 많이 읽는 것이 아니라 같은 주제를 반복해서 보는 것이다.
처음에는 아래 순서로 읽으면 부담이 줄어든다.
헤드라인만 훑어보며 오늘 많이 나오는 단어를 찾는다. 금리, 물가, 환율, 부동산, 주식 중 하나의 주제를 고른다. 같은 주제의 기사 2~3개를 비교해서 읽는다. 모르는 용어는 따로 적는다. 마지막에 &ldquo;내 생활과 무슨 관련이 있나&quot;를 한 문장으로 적는다. 예를 들어 &ldquo;물가 상승&rdquo; 기사를 읽었다면 그냥 기사 내용을 저장하는 데서 끝내지 않는다. &ldquo;식비가 오르면 외식 횟수를 줄이고 장보기 예산을 다시 잡아야 한다&quot;처럼 내 돈과 연결해야 한다.
뉴스를 읽을 때는 한 매체만 보지 않는 것도 중요하다. 같은 금리 인상 소식도 어떤 기사는 대출 부담을 중심으로 보고, 어떤 기사는 예금 수익률을 중심으로 본다. 여러 관점을 보면 경제 현상이 한쪽으로만 설명되지 않는다는 것을 알게 된다.
책과 강의는 쉬운 것부터 고르는 게 낫다 &nbsp; 경제 공부를 시작하면 유명한 경제학 책이나 투자 고전부터 사는 경우가 많다. 물론 좋은 책은 도움이 된다. 하지만 초보자에게 너무 어려운 책은 오히려 공부 의욕을 꺾을 수 있다.
처음에는 다음 기준으로 책을 고르는 것이 좋다.
어려운 수식보다 생활 예시가 많은 책 금리, 물가, 환율, 경기처럼 기본 개념을 설명하는 책 투자 방법보다 돈 관리와 위험 관리도 함께 다루는 책 한 번에 읽기보다 필요한 부분을 찾아 읽기 쉬운 책 책을 읽을 때도 완독에 집착하지 않아도 된다. 경제 공부의 목적은 책장을 채우는 것이 아니라 판단력을 키우는 것이다. 한 권을 읽고 딱 세 가지만 남겨도 충분하다.
예를 들어 책을 읽은 뒤 아래처럼 정리하면 좋다.
오늘 배운 것: 인플레이션은 돈의 구매력을 낮춘다. 내 상황에 적용할 점: 생활비 예산을 6개월마다 다시 본다. 더 찾아볼 것: 물가상승률과 기준금리 관계강의도 마찬가지다. 긴 강의를 많이 듣는 것보다, 하나를 듣고 내 가계부나 투자 기록에 적용해보는 것이 훨씬 낫다.
가계부와 소액 투자로 현실 감각을 만든다 &nbsp; 경제 공부가 머리로만 끝나면 금방 흐려진다. 실제 돈의 흐름과 연결해야 오래 간다. 가장 좋은 시작은 가계부다.
가계부라고 해서 모든 지출을 완벽하게 적을 필요는 없다. 초보자는 먼저 큰 항목만 나누면 된다.
고정비: 월세, 대출 이자, 보험료, 통신비 생활비: 식비, 교통비, 생필품 변동비: 외식, 쇼핑, 취미 저축과 투자: 예금, 적금, 연금, ETF 등 이렇게 나누면 경제 뉴스가 내 생활로 들어오기 시작한다. 금리가 오르면 대출 이자가 고정비에 영향을 준다. 물가가 오르면 생활비가 늘어난다. 주가가 흔들리면 투자 비중을 어떻게 가져갈지 고민하게 된다.
소액 투자도 공부에 도움이 될 수 있다. 다만 처음부터 큰돈을 넣는 것은 좋지 않다. 목적은 돈을 빨리 불리는 것이 아니라 시장의 움직임을 경험하는 것이다. ETF나 예금, 적금, 채권형 상품처럼 비교적 이해하기 쉬운 것부터 공부하고, 감당 가능한 작은 금액으로 시작하는 편이 낫다.
모의 투자도 괜찮다. 실제 돈을 넣지 않아도 가격이 왜 움직이는지, 뉴스와 시장이 어떻게 연결되는지 연습할 수 있다. 다만 모의 투자는 손실의 감정이 약하기 때문에, 실전 투자와 완전히 같지는 않다는 점을 기억해야 한다.
경제 공부를 지속하는 루틴 &nbsp; 경제 공부는 한 번에 몰아서 끝나는 공부가 아니다. 매일 조금씩 쌓는 쪽이 훨씬 효과적이다. 처음부터 완벽한 계획을 세우기보다, 오래 할 수 있는 낮은 강도의 루틴을 만드는 것이 중요하다.
초보자에게는 아래 정도면 충분하다.
주기 할 일 매일 10분 경제 뉴스 헤드라인 보기 주 2회 모르는 경제 용어 3개 정리 주 1회 가계부를 보고 지출 흐름 확인 월 1회 예금, 대출, 투자, 보험 상태 점검 분기 1회 경제 책 한 권 또는 강의 하나 정리 이 루틴의 핵심은 기록이다. 읽기만 하면 지나가지만, 한 줄이라도 적으면 내 생각이 된다. 특히 &ldquo;이 뉴스가 내 돈에 어떤 영향을 줄까&quot;라는 질문을 반복하면 경제 공부가 훨씬 실용적으로 바뀐다.
금융 문맹을 벗어난다는 것은 어려운 말을 많이 아는 상태가 아니다. 내 월급, 소비, 저축, 대출, 투자, 세금이 어떻게 연결되는지 이해하는 상태다. 그 연결이 보이기 시작하면 경제 뉴스가 남의 이야기가 아니라 내 생활 설명서처럼 읽히기 시작한다.
정리 &nbsp; 경제 공부는 어렵고 거창한 공부처럼 보이지만, 실제로는 내 돈을 이해하는 훈련에 가깝다. 기본 용어를 익히고, 경제 뉴스를 조금씩 읽고, 쉬운 책으로 개념을 잡고, 가계부와 소액 투자로 현실 감각을 만들면 된다.
핵심만 다시 정리하면 이렇다.
경제 공부의 목적은 전문가처럼 말하는 것이 아니라 돈과 관련된 판단력을 키우는 것이다. 처음에는 금리, 물가, 환율, GDP 같은 기본 용어부터 익히는 것이 좋다. 경제 뉴스는 하루 10분이라도 꾸준히 읽고, 내 생활과 연결해보는 습관이 중요하다. 책과 강의는 어려운 것보다 생활 예시가 많은 쉬운 자료부터 선택한다. 가계부를 쓰면 경제 변화가 내 지출과 자산에 어떻게 반영되는지 보이기 시작한다. 투자는 큰돈보다 소액 또는 모의 투자로 시장 감각을 익히는 것부터 시작하는 편이 낫다. 경제 공부는 속도보다 지속성이 중요하다. 하루에 하나씩만 제대로 이해해도 1년이면 돈을 보는 눈이 많이 달라진다. 오늘은 경제 뉴스 한 꼭지와 모르는 용어 하나부터 시작해도 충분하다.
자주 묻는 질문 &nbsp; 경제 공부는 하루에 얼마나 해야 할까? &nbsp; 처음에는 하루 10분에서 30분이면 충분하다. 중요한 것은 긴 시간보다 꾸준함이다. 경제 뉴스 한 꼭지를 읽고 모르는 용어 하나를 정리하는 것부터 시작하면 부담이 적다.
경제 공부를 하려면 투자부터 해야 할까? &nbsp; 아니다. 투자보다 먼저 돈의 흐름, 금리, 물가, 대출, 저축 같은 기본 개념을 이해하는 것이 좋다. 투자는 공부의 일부일 수 있지만, 경제 공부 전체가 투자를 뜻하는 것은 아니다.
경제 뉴스가 너무 어려우면 어떻게 해야 할까? &nbsp; 처음에는 헤드라인과 반복되는 단어만 봐도 된다. 금리, 환율, 물가처럼 자주 나오는 주제 하나를 정하고 같은 주제의 기사를 여러 번 읽으면 점점 익숙해진다.`}).add({id:29,href:"/posts/trickle-down-vs-fountain-effect/",title:"경제 용어: 낙수효과와 분수효과, 경제정책이 위에서 내...",description:"낙수효과와 분수효과의 뜻과 차이를 경제정책 방향, 세금 감면, 복지 지출, 소비 확대 관점에서 초보자도 이해하기 쉽게 정리했다.",content:`경제 기사를 읽다 보면 낙수효과와 분수효과라는 말을 자주 보게 된다. 둘 다 경제를 살리기 위한 정책 논리와 관련된 말인데, 방향이 완전히 다르다. 낙수효과는 위에서 아래로 흘러내리는 효과를 기대하고, 분수효과는 아래에서 위로 솟아오르는 효과를 기대한다.
말만 들으면 그림은 쉽게 떠오른다. 하지만 실제 의미는 조금 더 복잡하다. 세금을 누구에게 줄일 것인지, 정부 지출을 어디에 집중할 것인지, 기업 투자와 가계 소비 중 무엇을 먼저 살릴 것인지가 모두 연결되어 있기 때문이다.
이 글에서는 낙수효과와 분수효과의 뜻, 두 개념의 차이, 실제 정책 사례, 그리고 경제 뉴스를 볼 때 어떤 기준으로 이해하면 좋은지 정리하였다.
낙수효과란 무엇인가 &nbsp; 낙수효과는 영어로 Trickle-Down Effect라고 한다. 물이 위에서 아래로 조금씩 흘러내린다는 뜻이다. 경제에서는 대기업, 고소득층, 부유층의 소득과 부를 먼저 늘려주면 이들이 투자와 소비를 늘리고, 그 결과 경제 전체가 활발해져 중소기업과 저소득층도 혜택을 본다는 주장이다.
쉽게 말하면 &ldquo;위쪽을 먼저 키우면 아래쪽도 결국 좋아진다&quot;는 논리다. 기업이 세금을 덜 내면 투자를 늘리고, 투자가 늘면 일자리가 생기고, 일자리가 생기면 가계 소득도 늘어난다는 흐름을 기대한다.
낙수효과는 성장과 효율성을 중시하는 정책과 잘 맞는다. 정부가 시장에 직접 돈을 뿌리기보다 기업 활동을 촉진하고, 규제를 줄이고, 법인세나 고소득층 세금을 낮춰 경제의 공급 능력을 키우려는 방식이다.
낙수효과의 대표적인 정책 &nbsp; 낙수효과를 기대하는 정책은 보통 친기업 정책과 함께 언급된다.
정책 방향 기대하는 효과 법인세 인하 기업 이익 증가, 투자 여력 확대 고소득층 세금 감면 투자와 소비 증가 규제 완화 기업 활동 확대 수출 기업 지원 대기업 실적 개선과 협력업체 수혜 대규모 인프라 투자 건설, 자재, 고용 확산 예를 들어 수출 대기업이 성장하면 부품을 납품하는 협력업체도 주문을 더 받을 수 있다. 기업이 공장을 새로 짓거나 설비를 늘리면 건설사, 장비업체, 근로자에게도 돈이 흘러갈 수 있다. 이런 흐름이 잘 작동한다면 낙수효과는 경제 전체의 성장으로 이어질 수 있다.
다만 핵심은 &ldquo;잘 작동한다면&quot;이다. 기업 이익이 늘어도 투자와 고용으로 연결되지 않고 내부 유보, 주주 환원, 해외 투자로 흘러갈 수도 있다. 이 경우 아래쪽까지 물이 충분히 내려오지 않을 수 있다.
분수효과란 무엇인가 &nbsp; 분수효과는 영어로 Trickle-Up Effect 또는 Fountain Effect라고 한다. 분수에서 물이 아래에서 위로 솟아오르는 모습처럼, 저소득층과 중산층의 소득을 먼저 늘리면 소비가 증가하고 그 소비가 기업 매출과 투자로 이어져 경제 전체가 살아난다는 주장이다.
쉽게 말하면 &ldquo;아래쪽 구매력을 먼저 키우면 위쪽 기업도 좋아진다&quot;는 논리다. 저소득층과 중산층은 소득이 늘었을 때 그 돈을 생활비, 교육비, 외식, 교통, 주거비 등에 바로 쓰는 경향이 크다. 이처럼 추가 소득 중 소비로 쓰는 비율을 한계소비성향이라고 한다.
분수효과는 이 한계소비성향에 주목한다. 같은 100만원이 생겨도 이미 자산이 많은 사람은 일부만 소비하고 나머지를 저축하거나 투자할 수 있다. 반면 생활비가 빠듯한 사람은 상당 부분을 바로 소비할 가능성이 크다. 이 소비가 자영업자와 기업의 매출로 이어지고, 다시 고용과 투자로 연결될 수 있다는 것이다.
분수효과의 대표적인 정책 &nbsp; 분수효과를 기대하는 정책은 가계 소득 지원, 복지 지출, 소비 진작 정책과 함께 쓰인다.
정책 방향 기대하는 효과 근로장려금 저소득 근로 가구의 실질 소득 보완 아동수당, 기초연금 생활 안정과 소비 여력 확대 저소득층 세금 감면 가처분소득 증가 지역화폐, 소비쿠폰 지역 소비 촉진 최저임금 인상 임금 근로자의 소득 증가 기대 예를 들어 근로장려금은 일하지만 소득이 낮은 가구의 실질 소득을 보완하는 제도다. 지원금을 받은 가구가 생필품, 식비, 교육비 등에 돈을 쓰면 동네 가게와 기업 매출에도 영향을 줄 수 있다. 이 흐름이 충분히 넓게 퍼지면 경기 회복에 도움이 된다는 것이 분수효과의 생각이다.
낙수효과와 분수효과의 차이 &nbsp; 낙수효과와 분수효과는 모두 경제를 살리려는 목적을 가진다. 차이는 출발점이다. 낙수효과는 대기업과 고소득층에서 시작하고, 분수효과는 저소득층과 중산층에서 시작한다.
표로 보면 더 분명하다.
구분 낙수효과 분수효과 방향 위에서 아래로 아래에서 위로 출발점 대기업, 고소득층, 부유층 저소득층, 중산층, 가계 중시하는 가치 성장, 효율성, 투자 분배, 소비, 총수요 대표 정책 법인세 인하, 규제 완화, 기업 지원 복지 지출, 소득 지원, 소비 지원 기대 경로 기업 이익 증가 -&gt; 투자·고용 확대 -&gt; 가계 소득 증가 가계 소득 증가 -&gt; 소비 확대 -&gt; 기업 매출·투자 증가 주요 우려 혜택이 아래로 충분히 내려오지 않을 수 있음 재정 부담과 물가 상승 압력이 생길 수 있음 낙수효과는 공급 측면을 중시한다. 기업이 더 많이 생산하고 투자할 수 있는 환경을 만들면 경제가 커진다고 본다. 분수효과는 수요 측면을 중시한다. 사람들이 실제로 돈을 써야 기업도 매출을 올리고 투자할 이유가 생긴다고 본다.
둘 중 하나가 항상 정답이라고 말하기는 어렵다. 경기가 어떤 상황인지, 기업 투자 여력이 있는지, 가계 소비가 위축되어 있는지, 정부 재정 여력이 어느 정도인지에 따라 정책 조합이 달라질 수 있다.
낙수효과는 실제로 작동할까 &nbsp; 낙수효과는 오래된 경제 논쟁의 주제다. 지지하는 쪽에서는 기업 활동이 살아야 고용과 임금도 늘어난다고 본다. 실제로 기업 투자가 늘어나면 협력업체, 근로자, 지역 경제가 함께 좋아지는 경우도 있다. 반도체 공장이 들어서면 주변 부동산, 식당, 물류, 장비 업체가 영향을 받는 식이다.
하지만 비판도 많다. 기업과 고소득층의 소득이 늘어도 그 돈이 반드시 국내 투자와 고용으로 이어지는 것은 아니기 때문이다. 기업은 자동으로 임금을 올리기보다 설비 자동화, 해외 투자, 배당, 자사주 매입을 선택할 수 있다. 고소득층도 추가 소득을 소비보다 금융자산 투자에 더 많이 쓸 수 있다.
국제통화기금(IMF)은 2015년 소득불평등과 성장에 관한 연구에서 상위 소득층의 소득 비중 확대가 경제성장률을 낮출 수 있다는 분석을 제시한 바 있다. 이는 낙수효과가 언제나 자연스럽게 작동한다고 보기 어렵다는 점을 보여준다.
핵심은 정책의 연결 장치다. 기업 세금을 줄여준다면 그 혜택이 투자, 고용, 임금, 연구개발로 이어지도록 유도하는 장치가 필요하다. 그렇지 않으면 위쪽 컵만 가득 차고 아래쪽 컵은 계속 비어 있는 상황이 생길 수 있다.
분수효과도 한계가 있다 &nbsp; 분수효과 역시 장점만 있는 것은 아니다. 저소득층과 중산층의 소득을 늘리면 소비가 빠르게 늘어날 수 있지만, 정부 재정이 필요하다. 세금을 더 걷거나 국채를 발행해야 할 수 있다. 지출이 계속 늘어나면 장기적으로 재정 부담이 커질 수 있다.
또 공급이 충분하지 않은 상황에서 소비만 빠르게 늘면 물가가 오를 수 있다. 예를 들어 주거, 의료, 교육처럼 공급이 제한된 분야에서는 지원금이 실제 생활 안정으로 이어지기보다 가격 상승을 자극할 수도 있다.
최저임금 인상처럼 임금을 올리는 정책도 상황에 따라 효과가 달라진다. 근로자의 소득을 높이는 데 도움이 될 수 있지만, 영세 자영업자나 소규모 기업에는 인건비 부담으로 작용할 수 있다. 결국 분수효과도 세부 설계가 중요하다.
좋은 분수효과 정책은 단순히 돈을 나눠주는 데서 끝나지 않는다. 소비 여력이 부족한 계층을 지원하되, 일자리, 교육, 직업훈련, 주거 안정, 보육처럼 장기 생산성을 높이는 정책과 함께 가야 효과가 커진다.
경제 뉴스를 볼 때 이렇게 이해하면 좋다 &nbsp; 낙수효과와 분수효과는 정치적 구호처럼 쓰일 때가 많다. 그래서 뉴스를 볼 때는 단어 자체보다 정책이 어떤 경로로 효과를 내겠다는 것인지 보는 것이 좋다.
먼저 누가 첫 번째 혜택을 받는지 확인해야 한다. 법인세 인하, 규제 완화, 대기업 지원이라면 낙수효과에 가까운 논리일 가능성이 크다. 근로장려금, 소비쿠폰, 저소득층 세금 감면, 복지 지출 확대라면 분수효과에 가까운 논리다.
다음으로 그 혜택이 어디로 이어지는지 봐야 한다. 기업 지원이라면 실제 투자와 고용 확대 조건이 있는지 봐야 한다. 가계 지원이라면 소비 증가뿐 아니라 물가와 재정 부담을 어떻게 관리하는지도 봐야 한다.
마지막으로 경제 상황을 함께 봐야 한다. 기업이 투자를 망설이는 불황기에는 수요를 살리는 정책이 더 중요할 수 있다. 반대로 특정 산업의 경쟁력을 빠르게 키워야 하는 시기에는 기업 투자 지원이 필요할 수 있다. 대부분의 현실 정책은 낙수효과와 분수효과 중 하나만 쓰기보다 두 방향을 섞어서 설계된다.
마무리 &nbsp; 낙수효과는 대기업과 고소득층의 성장을 먼저 지원하면 그 효과가 아래로 퍼져 전체 경제가 좋아진다는 주장이다. 분수효과는 저소득층과 중산층의 소득을 먼저 늘리면 소비가 살아나고, 그 소비가 기업 매출과 투자로 이어져 전체 경제가 좋아진다는 주장이다.
두 개념의 차이는 물이 흐르는 방향에 있다. 낙수효과는 위에서 아래로, 분수효과는 아래에서 위로 움직인다. 낙수효과는 성장과 효율성을, 분수효과는 소비와 분배를 더 강조한다.
다만 현실 경제에서는 어느 하나만으로 모든 문제가 해결되지 않는다. 기업이 투자할 환경도 필요하고, 가계가 소비할 여력도 필요하다. 경제정책을 볼 때는 &ldquo;누구를 먼저 지원하는가&rdquo;, &ldquo;그 돈이 어떤 경로로 퍼지는가&rdquo;, &ldquo;부작용을 줄이는 장치가 있는가&quot;를 함께 보면 훨씬 이해하기 쉽다.
자주 묻는 질문 &nbsp; 낙수효과는 부자를 위한 정책인가? &nbsp; 항상 그렇게만 볼 수는 없다. 낙수효과는 대기업과 고소득층을 먼저 지원해 투자와 고용을 늘리겠다는 경제 논리다. 다만 실제 혜택이 중소기업과 저소득층까지 충분히 내려오지 않으면 부자 감세라는 비판을 받을 수 있다.
분수효과는 복지 정책과 같은 말인가? &nbsp; 완전히 같은 말은 아니다. 분수효과는 저소득층과 중산층의 소득을 늘려 소비와 경제활동을 살리겠다는 논리다. 복지 정책이 그 수단이 될 수 있지만, 근로장려금, 세금 감면, 소비 지원처럼 다양한 방식이 포함될 수 있다.
낙수효과와 분수효과 중 어느 쪽이 더 좋은가? &nbsp; 경제 상황에 따라 다르다. 기업 투자가 부족한 시기에는 기업 활동을 돕는 정책이 필요할 수 있고, 가계 소비가 크게 위축된 시기에는 소득 지원이 더 효과적일 수 있다. 중요한 것은 한쪽 구호보다 실제 정책 설계와 효과를 보는 것이다.`}).add({id:30,href:"/posts/economic-crisis-asset-management/",title:"경제 위기 역사에서 배우는 자산관리법 5가지",description:"대공황, 외환위기, 금융위기, 팬데믹, 인플레이션 사례를 바탕으로 개인이 위기에도 돈을 지키는 자산관리 원칙 5가지를 정리했다.",content:`경제 위기는 늘 갑자기 온 것처럼 느껴진다. 뉴스에서는 경기 침체, 고금리, 환율 급등, 금융 불안 같은 말이 반복되고, 실제 생활에서는 대출 이자와 생활비 부담이 먼저 다가온다. 투자 계좌가 흔들리는 것도 불안하지만, 더 무서운 것은 월급과 일자리, 사업 매출처럼 생활의 기반이 같이 흔들릴 수 있다는 점이다.
하지만 역사를 보면 경제 위기는 처음 겪는 일이 아니다. 1929년 대공황, 1997년 외환위기, 2008년 글로벌 금융위기, 2020년 코로나19 팬데믹, 그리고 최근의 인플레이션 충격까지 위기는 형태를 바꾸며 반복되어 왔다.
위기를 정확히 맞히는 것은 어렵다. 대신 위기가 와도 버틸 수 있는 구조는 미리 만들 수 있다. 이 글에서는 경제 위기 역사에서 배울 수 있는 자산관리법 5가지를 초보자도 바로 점검할 수 있게 정리하였다.
대공황에서 배운 현금의 힘 &nbsp; 1929년 미국 대공황은 주식시장 붕괴와 은행 부실, 실업 증가가 한꺼번에 겹친 대표적인 경제 위기다. 평소에는 자산이 많아 보여도, 위기 때 당장 쓸 수 있는 돈이 없으면 생활이 빠르게 어려워진다.
현금은 수익률이 낮아 보인다. 주식이나 부동산처럼 크게 오르는 자산도 아니다. 하지만 위기 때 현금은 선택권을 준다. 실직이나 휴직을 버틸 수 있고, 병원비나 이사비처럼 갑작스러운 지출에도 대응할 수 있다. 투자 자산을 손실 상태에서 억지로 팔지 않게 막아주는 역할도 한다.
비상금은 투자금과 분리해서 준비하는 것이 좋다. 초보자는 최소 3개월치 생활비를 먼저 목표로 잡고, 소득이 불안정하거나 부양가족이 있다면 6개월치 이상을 생각해야 한다.
월 생활비 3개월 비상금 6개월 비상금 150만 원 450만 원 900만 원 200만 원 600만 원 1,200만 원 300만 원 900만 원 1,800만 원 비상금은 주식형 상품보다 입출금 통장, 파킹통장, 단기 예금처럼 바로 꺼낼 수 있는 곳에 두는 편이 낫다. 이 돈의 목적은 돈을 크게 불리는 것이 아니라 나쁜 시기를 버티는 것이다.
외환위기에서 배운 외화 자산과 분산투자 &nbsp; 1997년 외환위기는 한국 사람에게 환율과 외화 유동성이 얼마나 중요한지 보여준 사건이었다. 원화 가치가 크게 흔들리면 수입 물가가 오르고, 기업 비용이 늘고, 금융시장 불안이 개인 생활까지 이어질 수 있다.
이때 국내 자산에만 모든 돈이 묶여 있던 사람은 충격을 크게 받을 수밖에 없었다. 반대로 일부 자산을 달러, 금, 해외 주식형 ETF처럼 원화와 다르게 움직일 수 있는 자산에 나누어 둔 사람은 상대적으로 방어력이 생긴다.
분산투자는 &ldquo;무조건 많이 벌기 위한 기술&quot;이 아니다. 한쪽이 흔들릴 때 전체 자산이 같이 무너지지 않도록 충격을 나누는 방법이다.
분산 기준 예시 자산군 분산 현금, 예금, 주식, 채권, 금, 연금 지역 분산 한국, 미국, 선진국, 신흥국 통화 분산 원화, 달러 등 시점 분산 한 번에 사지 않고 나누어 매수 상품 분산 개별 종목보다 ETF나 펀드 활용 초보자라면 복잡한 포트폴리오부터 만들 필요는 없다. 먼저 내 자산이 한국 부동산, 특정 주식, 원화 예금처럼 한 방향에 지나치게 몰려 있지 않은지 확인하면 된다. 자산관리의 시작은 대단한 예측보다 과한 집중을 피하는 데 있다.
금융위기에서 배운 채무관리 &nbsp; 2008년 글로벌 금융위기는 부동산 대출과 금융상품의 위험이 금융 시스템 전체로 번진 사례다. 개인 입장에서는 &ldquo;감당하기 어려운 빚은 위기 때 가장 먼저 터진다&quot;는 교훈을 남겼다.
자산 가격은 떨어질 수 있지만, 대출 원금과 이자는 사라지지 않는다. 특히 변동금리 대출이 많거나, 신용대출과 카드론처럼 금리가 높은 빚이 있거나, 매달 상환액이 월소득에서 큰 비중을 차지하면 위기 때 생활이 빠르게 압박받는다.
먼저 내 빚을 다음 항목으로 정리해야 한다.
전체 대출 원금이 얼마인지 확인한다. 고정금리인지 변동금리인지 구분한다. 매달 원리금 상환액이 월소득의 몇 퍼센트인지 계산한다. 만기일과 중도상환수수료를 확인한다. 카드론, 리볼빙, 현금서비스처럼 고금리 부채가 있는지 확인한다. 대출이 모두 나쁜 것은 아니다. 집을 마련하거나 사업을 운영하거나 필요한 교육을 받기 위한 대출도 있다. 문제는 소득이 줄어도 버틸 수 있는 범위를 넘는 빚이다.
투자 기대수익률이 불확실한 상황에서는 고금리 부채를 줄이는 것이 더 현실적인 자산관리일 수 있다. 연 15% 이자를 내는 빚을 두고 연 7% 수익을 기대하는 투자를 하는 것은 숫자로도 맞지 않을 때가 많다.
팬데믹에서 배운 긴급자금의 중요성 &nbsp; 2020년 코로나19 팬데믹은 경제 위기가 금융시장 안에서만 생기는 것이 아니라는 점을 보여주었다. 감염병 하나로 소비, 생산, 여행, 자영업, 고용이 동시에 멈출 수 있었다. 평소 안정적이라고 생각했던 소득도 갑자기 줄어들 수 있다는 사실을 많은 사람이 체감했다.
긴급자금은 비상금보다 조금 더 넓은 개념으로 보면 된다. 생활비뿐 아니라 보험료, 대출 상환액, 병원비, 가족 지원금처럼 위기 때 반드시 빠져나갈 돈까지 포함해서 계산해야 한다.
예를 들어 월 생활비가 200만 원이고, 대출 상환액이 80만 원이며, 보험료와 통신비 같은 고정비가 40만 원이라면 한 달에 반드시 필요한 돈은 320만 원이다. 이 경우 6개월 긴급자금은 1,200만 원이 아니라 1,920만 원에 가깝다.
월 필수 지출 = 생활비 + 대출 상환액 + 고정비 긴급자금 목표 = 월 필수 지출 x 3개월 또는 6개월이 계산을 해보면 생각보다 필요한 현금이 크다는 사실을 알게 된다. 그래서 긴급자금은 한 번에 만들려고 하기보다 매달 자동이체로 따로 모으는 방식이 현실적이다. 월급이 들어오면 남는 돈을 저축하는 것이 아니라, 먼저 긴급자금 통장으로 일정 금액을 빼두는 식이다.
인플레이션 시대에는 현금 가치도 점검한다 &nbsp; 현금은 위기 때 중요하지만, 인플레이션이 심해지면 현금의 구매력은 떨어질 수 있다. 예전에는 10만 원으로 살 수 있던 장바구니가 시간이 지나 12만 원, 15만 원이 필요해지는 식이다. 통장 잔고 숫자는 그대로여도 실제로 살 수 있는 물건과 서비스가 줄어드는 것이다.
그래서 비상금 이상의 장기 자금은 인플레이션을 고려해 나누어 관리해야 한다. 대표적으로 금, 물가연동채, 글로벌 주식형 ETF, 우량 배당주, 실수요 부동산 같은 자산이 인플레이션 방어 수단으로 자주 언급된다. 다만 어떤 자산도 항상 안전한 것은 아니다.
자산 장점 주의할 점 금 화폐 가치 불안 때 방어 자산으로 활용 이자나 배당이 없고 가격 변동이 있음 물가연동채 물가 상승을 일부 반영하는 구조 금리 변화에 따라 가격이 흔들릴 수 있음 글로벌 ETF 지역과 통화 분산에 도움 주식시장 하락기에는 손실 가능 부동산 장기적으로 물가와 임대료 영향을 받을 수 있음 유동성이 낮고 대출 부담이 큼 핵심은 &ldquo;현금만 들고 있자&quot;도 아니고 &ldquo;실물자산에 전부 넣자&quot;도 아니다. 단기 생존을 위한 현금과 장기 구매력을 지키기 위한 자산을 구분하는 것이다.
위기 대비 자산관리 체크리스트 &nbsp; 경제 위기 대비는 거창한 예측에서 시작하지 않는다. 지금 내 돈의 구조를 확인하는 것부터 시작한다. 아래 항목 중 절반 이상이 비어 있다면 투자 상품을 늘리기 전에 기본 체력부터 만드는 것이 좋다.
3-6개월치 필수 지출을 현금성 자산으로 준비했는가. 월 대출 상환액이 소득에서 과도한 비중을 차지하지 않는가. 변동금리 대출과 고금리 부채를 구분해두었는가. 자산이 한 국가, 한 통화, 한 종목, 한 부동산에 몰려 있지 않은가. 1년 안에 쓸 돈과 3년 이상 투자할 돈을 나누어 관리하는가. 달러, 금, 글로벌 ETF 등 방어용 자산의 필요성을 검토했는가. 시장이 하락했을 때 팔지 않을 기준과 리밸런싱 기준이 있는가. 경제 위기는 피할 수 없어도 준비할 수는 있다. 비상금, 부채 관리, 분산투자, 긴급자금, 인플레이션 방어라는 다섯 가지 원칙을 갖추면 시장이 흔들려도 선택지가 늘어난다. 자산관리는 최고 수익률을 맞히는 게임이 아니라, 나쁜 시기에도 생활과 투자를 이어갈 수 있는 구조를 만드는 일이다.
자주 묻는 질문 &nbsp; 경제 위기 때 가장 먼저 해야 할 일은 무엇일까? &nbsp; 가장 먼저 현금 흐름을 확인해야 한다. 월 필수 지출, 대출 상환액, 비상금 잔액을 계산하고 최소 3개월 이상 버틸 수 있는지 점검하는 것이 우선이다.
달러나 금 투자는 지금 시작해도 괜찮을까? &nbsp; 달러와 금은 단기 수익을 노리고 몰아서 사는 자산이라기보다 위험을 나누기 위한 방어 자산에 가깝다. 한 번에 큰돈을 넣기보다 전체 자산 중 일부 비중으로 천천히 접근하는 편이 현실적이다.
위기 때 주식은 모두 팔아야 할까? &nbsp; 모든 주식을 감정적으로 매도하는 것은 위험할 수 있다. 당장 쓸 돈으로 투자했다면 줄이는 것이 맞지만, 장기 자금이라면 비상금과 부채 상황을 먼저 확인한 뒤 분할 매수나 리밸런싱 기준에 따라 판단하는 것이 낫다.`}).add({id:31,href:"/posts/spillover-effect/",title:"경제용어: 스필오버 효과, 경제에서 좋은 영향과 나쁜 ...",description:"스필오버 효과의 뜻과 경제, 관광, 조직관리, 상권에서 나타나는 긍정적 영향과 부정적 영향을 초보자도 이해하기 쉽게 정리했다.",content:`경제 기사를 읽다 보면 &ldquo;스필오버 효과&quot;라는 표현이 종종 나온다. 영어로는 Spillover Effect라고 하고, 말 그대로 어떤 영향이 한곳에만 머무르지 않고 주변으로 흘러넘치는 현상을 뜻한다.
물이 넘치면 옆의 마른 땅까지 젖는다. 스필오버 효과도 비슷하다. 특정 지역, 산업, 기업, 사람이 받은 영향이 주변 지역이나 다른 산업, 다른 사람에게까지 퍼지는 것이다.
좋은 영향이 퍼질 수도 있고, 나쁜 영향이 퍼질 수도 있다. 관광객이 한 지역에 몰리면서 옆 동네 상권까지 살아나는 것은 긍정적인 스필오버다. 반대로 유명 점포가 들어온 뒤 임대료가 오르고 기존 상인이 밀려나는 것은 부정적인 스필오버에 가깝다.
스필오버 효과란 무엇인가 &nbsp; 스필오버 효과는 어떤 현상이나 혜택, 비용, 충격이 원래 발생한 곳을 넘어 다른 곳으로 퍼지는 효과를 말한다. 경제에서는 한 요소의 변화가 다른 요소의 생산성이나 수익성, 비용 구조에 영향을 주면서 전체 결과를 바꾸는 현상으로 이해하면 쉽다.
예를 들어 대기업이 한 지역에 공장을 세웠다고 하자. 공장 자체의 고용만 늘어나는 것이 아니다. 주변 식당, 편의점, 숙박업, 물류업, 부품업체도 함께 영향을 받을 수 있다. 이처럼 한 경제활동이 주변 경제활동까지 움직이는 것이 스필오버 효과다.
스필오버는 &ldquo;직접 효과&quot;와 구분해서 보면 더 이해하기 쉽다.
구분 의미 예시 직접 효과 어떤 사건이 바로 영향을 주는 부분 공장 신설로 공장 직원 채용 증가 스필오버 효과 그 영향이 주변으로 번지는 부분 주변 식당 매출 증가, 협력업체 주문 증가 즉, 스필오버 효과는 중심 사건 자체보다 그 주변으로 번져나간 파급효과를 보는 개념이다.
경제에서 스필오버 효과가 중요한 이유 &nbsp; 경제는 서로 연결되어 있다. 기업 하나가 잘되면 그 기업만 좋아지는 것이 아니라 협력업체, 근로자, 지역 상권, 투자자에게도 영향을 줄 수 있다. 반대로 한 산업이 흔들리면 관련 산업과 지역 경제가 같이 어려워질 수 있다.
이 연결성을 설명할 때 스필오버 효과라는 말이 자주 쓰인다. 어떤 정책이나 투자, 기술 변화가 예상보다 더 넓은 범위에 영향을 줄 수 있기 때문이다.
기술과 생산성의 스필오버 &nbsp; 기술 발전은 대표적인 긍정적 스필오버 사례다. 한 기업이 새로운 기술을 개발하면 그 기술이 협력업체, 경쟁사, 산업 전체로 퍼질 수 있다. 처음에는 특정 기업의 경쟁력이었지만, 시간이 지나면 업계 전체의 생산성을 높이는 방향으로 작동할 수 있다.
예를 들어 반도체, 배터리, 인공지능 같은 산업에서는 특정 기업의 기술투자가 장비업체, 소재업체, 소프트웨어 기업까지 영향을 준다. 한 기업의 투자가 생태계 전체의 역량을 끌어올릴 수 있는 것이다.
금융시장의 스필오버 &nbsp; 금융시장에서도 스필오버는 자주 나타난다. 미국 금리가 오르면 미국 안에서만 끝나지 않는다. 달러 가치, 신흥국 환율, 한국 주식시장, 외국인 자금 흐름에도 영향을 줄 수 있다.
예를 들어 미국의 긴축 정책으로 달러가 강해지면 원화 가치가 약해질 수 있고, 외국인 투자자가 한국 주식을 팔고 달러 자산으로 이동할 수도 있다. 이 경우 미국의 통화정책 충격이 한국 금융시장으로 번진 스필오버 효과라고 볼 수 있다.
명동 관광객이 강남으로 번진 사례 &nbsp; 스필오버 효과는 어려운 경제 이론이 아니라 일상에서도 볼 수 있다. 입력 자료에서 언급된 &ldquo;명동 스필오버&rdquo; 사례가 좋은 예다.
과거 원화 대비 엔화 가치가 높아지면서 한국을 찾는 일본인 관광객이 크게 늘어난 적이 있었다. 일본인 관광객이 서울 명동에 몰리자 명동 일대 호텔 객실이 부족해졌고, 방을 구하지 못한 관광객들이 강남 등 다른 지역으로 이동했다.
처음 수혜 지역은 명동이었다. 하지만 관광객 수요가 넘치면서 숙박, 쇼핑, 음식점 소비가 다른 지역으로 퍼졌다. 이때 강남이나 주변 상권이 얻은 추가 수요가 스필오버 효과다.
이 사례를 단계별로 보면 이렇다.
엔화 강세로 일본인 관광객의 한국 여행 부담이 줄어든다. 관광객이 명동에 집중된다. 명동 호텔과 상권 수용력이 부족해진다. 관광객이 강남 등 다른 지역으로 이동한다. 다른 지역 숙박업과 상권도 매출 증가 효과를 얻는다. 핵심은 처음 발생한 수요가 한 지역에 갇히지 않고 주변 지역으로 흘러넘쳤다는 점이다.
조직관리에서도 스필오버 효과가 나타난다 &nbsp; 스필오버 효과는 기업 내부에서도 나타날 수 있다. 생산성이 높은 직원과 낮은 직원이 함께 일할 때, 한 사람의 일하는 방식이 주변 동료에게 영향을 줄 수 있기 때문이다.
예를 들어 일을 빠르게 처리하는 직원이 옆자리에 있으면 주변 직원도 업무 흐름을 더 빠르게 맞추게 될 수 있다. 반대로 꼼꼼하게 품질을 확인하는 직원과 함께 일하면 팀 전체의 실수율이 줄어들 수 있다.
입력 자료에서는 &ldquo;빠른 속도 집단&quot;과 &ldquo;고품질 집단&quot;을 나란히 배치했을 때 조직성과와 업무 속도가 개선된 사례를 언급했다. 구체적으로 조직성과가 15% 향상되고 업무 속도가 13% 증가했다는 결과가 제시되어 있다.
이런 방식은 조직관리에서 스필오버 효과를 활용한 예다. 뛰어난 개인 한 명의 성과만 보는 것이 아니라, 그 사람이 주변 팀원에게 어떤 영향을 주는지도 함께 보는 것이다.
다만 자리 배치만으로 모든 문제가 해결되지는 않는다. 생산성이 높은 직원에게 업무 부담이 과도하게 몰리거나, 낮은 생산성의 원인이 교육 부족인지 업무 구조 문제인지 확인하지 않으면 오히려 갈등이 생길 수 있다. 스필오버 효과를 활용하려면 사람 배치, 역할 설계, 피드백 문화가 함께 맞아야 한다.
스필오버 효과는 항상 좋은 것만은 아니다 &nbsp; 스필오버 효과는 긍정적으로 들리지만, 반드시 좋은 방향으로만 나타나는 것은 아니다. 어떤 영향이 주변으로 퍼진다는 것은 혜택뿐 아니라 비용과 부작용도 퍼질 수 있다는 뜻이다.
대표적인 사례가 상권과 임대료다. 유명 카페, 대형 브랜드, 인기 식당이 들어오면 주변 유동인구가 늘고 상권이 살아날 수 있다. 처음에는 주변 점포도 손님이 늘어나는 긍정적 효과를 얻는다.
하지만 시간이 지나면서 건물 가치와 임대료가 함께 오를 수 있다. 특정 점포가 높은 임대료를 감당하고 입점하면 주변 임대인도 &ldquo;우리 건물도 더 받을 수 있다&quot;고 판단할 수 있다. 이때 임대료 상승이 주변 상인에게 비용으로 번진다.
결과적으로 추가 매출보다 임대료 상승폭이 더 크면 기존 상인은 버티기 어렵다. 장사가 조금 더 잘되어도 월세가 훨씬 많이 오르면 남는 돈은 줄어든다. 이런 흐름은 젠트리피케이션과 비슷한 문제로 이어질 수 있다.
부정적 스필오버의 예시 &nbsp; 부정적 스필오버는 여러 곳에서 나타난다.
분야 부정적 스필오버 예시 상권 유명 점포 입점 후 임대료 상승으로 기존 상인 이탈 금융 한 나라의 금리 인상이 다른 나라 자금 유출로 연결 부동산 특정 지역 개발 기대가 주변 집값과 전세가격 상승으로 확산 환경 한 지역의 오염이 바람과 하천을 타고 다른 지역에 피해 기업 한 계열사의 위기가 같은 그룹 회사의 신뢰 하락으로 확산 스필오버 효과를 볼 때는 &ldquo;퍼지는가&quot;만 보지 말고 &ldquo;무엇이 퍼지는가&quot;를 봐야 한다. 수요, 기술, 생산성처럼 좋은 것이 퍼질 수도 있고, 비용, 위험, 불안, 가격 상승처럼 나쁜 것이 퍼질 수도 있다.
경제 뉴스를 볼 때 이렇게 이해하면 된다 &nbsp; 스필오버 효과라는 말이 나오면 먼저 출발점을 찾는 것이 좋다. 어떤 사건이 처음 발생했는지 확인해야 한다. 금리 인상인지, 대기업 투자 발표인지, 관광객 증가인지, 특정 상권의 인기 상승인지부터 봐야 한다.
다음으로 영향을 받는 대상을 봐야 한다. 원래 사건과 직접 관련된 곳뿐 아니라 주변 산업, 지역, 사람, 기업이 어떤 영향을 받는지 확인하면 된다.
마지막으로 긍정과 부정을 나누어 보면 좋다. 같은 사건도 누군가에게는 기회이고 누군가에게는 부담일 수 있다.
예를 들어 대형 쇼핑몰이 들어오면 지역 소비가 늘고 일자리가 생길 수 있다. 이것은 긍정적 스필오버다. 하지만 주변 소규모 상점의 매출이 줄거나 임대료가 오를 수 있다면 부정적 스필오버도 함께 발생한다.
그래서 경제정책이나 개발사업을 평가할 때는 직접 효과만 보면 부족하다. 주변으로 번지는 효과까지 봐야 실제 영향이 보인다.
마무리 &nbsp; 스필오버 효과는 어떤 영향이 한곳에만 머무르지 않고 주변으로 흘러넘치는 현상이다. 경제에서는 특정 기업, 산업, 지역, 정책의 변화가 다른 영역의 생산성, 매출, 비용, 위험에 영향을 주는 방식으로 나타난다.
좋은 스필오버는 경제 전체의 생산성을 높이고, 지역 상권을 살리고, 기술과 지식을 퍼뜨리는 역할을 한다. 반대로 나쁜 스필오버는 임대료 상승, 금융 불안, 환경 피해, 지역 간 불균형처럼 예상하지 못한 부담을 만들 수 있다.
경제 뉴스를 볼 때 스필오버 효과라는 말이 나오면 &ldquo;어디서 시작됐는가&rdquo;, &ldquo;어디까지 퍼지는가&rdquo;, &ldquo;누가 이익을 보고 누가 부담을 지는가&quot;를 함께 보면 된다. 이 세 가지 질문만 잡아도 복잡한 경제 현상을 훨씬 쉽게 읽을 수 있다.
자주 묻는 질문 &nbsp; 스필오버 효과는 외부효과와 같은 말일까? &nbsp; 비슷하게 쓰이는 경우가 많지만 완전히 같은 말은 아니다. 외부효과는 어떤 경제활동이 거래 당사자 밖의 사람에게 영향을 주는 현상을 말하고, 스필오버 효과는 그 영향이 주변으로 퍼져나가는 파급 과정에 더 초점을 둔다.
스필오버 효과는 항상 좋은 의미일까? &nbsp; 아니다. 스필오버 효과는 긍정적일 수도 있고 부정적일 수도 있다. 관광객 증가가 주변 상권을 살리는 것은 긍정적 효과지만, 인기 상권의 임대료 상승이 기존 상인을 밀어내는 것은 부정적 효과다.
투자할 때도 스필오버 효과를 볼 수 있을까? &nbsp; 볼 수 있다. 특정 산업의 대규모 투자가 장비, 소재, 부품, 물류 기업으로 번질 수 있고, 한 나라의 금리 변화가 다른 나라 주식시장과 환율에 영향을 줄 수도 있다. 투자자는 직접 수혜주뿐 아니라 주변으로 번지는 영향을 함께 살펴볼 필요가 있다.`}).add({id:32,href:"/posts/financial-freedom-roadmap/",title:"경제적 자유, 누구나 이룰 수 있는 실천 로드맵",description:"경제적 자유를 막연한 꿈이 아니라 실천 가능한 목표로 만들기 위해 지출 관리, 비상금, 부채 정리, 투자, 부수입 로드맵을 정리했다.",content:`경제적 자유라는 말을 들으면 거창하게 느껴진다. 회사를 그만두고, 건물주가 되고, 배당금만으로 여행을 다니는 모습을 떠올리기 쉽다. 하지만 현실적인 경제적 자유는 그런 장면보다 훨씬 작고 구체적인 곳에서 시작된다.
월급날 전에 잔고를 걱정하지 않는 것, 갑자기 병원비가 생겨도 대출부터 떠올리지 않는 것, 싫은 선택을 돈 때문에 억지로 하지 않아도 되는 것, 시간이 갈수록 내 자산이 조금씩 일하게 만드는 것이 경제적 자유의 출발점이다.
경제적 자유는 한 번에 이루어지는 사건이 아니다. 소득, 지출, 저축, 부채, 투자, 시간 사용이 조금씩 정리되면서 만들어지는 상태다. 이 글에서는 초보자도 따라갈 수 있는 경제적 자유 실천 로드맵을 단계별로 정리하였다.
경제적 자유의 기준부터 정해야 한다 &nbsp; 경제적 자유는 사람마다 기준이 다르다. 어떤 사람에게는 월 300만 원의 안정적인 현금흐름이면 충분하고, 어떤 사람에게는 가족 생활비와 주거비까지 포함해 월 700만 원 이상이 필요할 수 있다. 그래서 남의 목표를 그대로 가져오면 오래 지속하기 어렵다.
먼저 내 기준을 숫자로 잡아야 한다.
경제적 자유에 필요한 월 현금흐름 = 월 생활비 + 주거비 + 보험료 + 교육비 + 여유비예를 들어 한 달에 꼭 필요한 돈이 250만 원이고, 여유 있게 살기 위해 100만 원이 더 필요하다면 1차 목표는 월 350만 원의 현금흐름이다. 이 돈을 월급이 아니라 자산소득, 사업소득, 부업소득, 연금 등으로 일부라도 채울 수 있다면 경제적 자유에 가까워진다.
처음부터 완전한 은퇴를 목표로 잡을 필요는 없다. 단계별 목표가 더 현실적이다.
단계 의미 1단계 월급 전에 잔고 걱정이 없는 상태 2단계 6개월치 생활비를 비상금으로 보유한 상태 3단계 고금리 부채가 없는 상태 4단계 월 투자금이 자동으로 쌓이는 상태 5단계 월 생활비 일부를 자산소득이나 부수입이 대신하는 상태 경제적 자유는 &ldquo;돈이 아주 많은 상태&quot;라기보다 &ldquo;돈 때문에 선택지가 막히지 않는 상태&quot;에 가깝다. 기준을 낮추라는 뜻이 아니라, 내 삶에 맞는 숫자부터 정해야 한다는 뜻이다.
1단계: 지출을 파악하고 새는 돈을 막는다 &nbsp; 경제적 자유의 첫 단계는 투자가 아니라 지출 파악이다. 돈이 어디로 나가는지 모르면 아무리 벌어도 남지 않는다. 월급이 늘었는데도 항상 부족하다면 소득 문제가 아니라 지출 구조 문제일 수 있다.
가계부를 완벽하게 쓸 필요는 없다. 처음에는 한 달 지출을 네 가지로 나누면 충분하다.
구분 예시 고정비 월세, 대출 이자, 보험료, 통신비, 구독료 생활비 식비, 교통비, 생필품 변동비 외식, 쇼핑, 여행, 취미 미래비용 저축, 투자, 연금, 자기계발 여기서 가장 먼저 볼 것은 고정비다. 고정비는 한 번 줄이면 매달 효과가 반복된다. 통신비를 낮추거나, 쓰지 않는 구독 서비스를 끊거나, 보험을 정리하거나, 대출 금리를 점검하는 일은 생각보다 큰 차이를 만든다.
예를 들어 매달 10만 원의 고정비를 줄이면 1년에 120만 원이다. 이 돈을 그냥 아끼는 데서 끝내지 않고 투자나 비상금으로 돌리면 경제적 자유의 속도가 조금씩 빨라진다.
지출 관리는 절약만을 뜻하지 않는다. 내가 중요하게 생각하는 곳에는 쓰고, 습관적으로 새는 돈은 줄이는 것이다. 경제적 자유를 원한다면 돈을 쓰는 기준부터 가져야 한다.
2단계: 비상금과 부채 정리로 바닥을 단단하게 만든다 &nbsp; 돈 관리에서 가장 먼저 만들어야 할 안전장치는 비상금이다. 비상금이 없으면 작은 사고도 대출로 이어질 수 있다. 카드값이 밀리고, 신용대출을 받고, 다시 이자를 갚느라 저축을 못 하는 구조가 반복된다.
비상금은 최소 3개월치 생활비, 가능하면 6개월치 생활비를 목표로 잡는 것이 좋다. 소득이 불안정한 프리랜서, 자영업자, 계약직이라면 더 길게 잡아도 된다.
비상금이 어느 정도 쌓이면 부채를 정리해야 한다. 특히 신용대출, 카드론, 리볼빙, 현금서비스처럼 금리가 높은 빚은 투자보다 먼저 줄이는 편이 낫다. 연 15% 이자를 내면서 연 7% 수익률을 기대하는 투자를 하는 것은 구조적으로 불리하다.
부채를 정리할 때는 다음 순서로 보면 된다.
금리가 높은 빚부터 확인한다. 매달 상환액이 월소득에서 차지하는 비율을 계산한다. 변동금리 대출은 금리 상승 시 부담이 얼마나 늘어나는지 본다. 중도상환수수료가 있는지 확인한다. 새 대출로 기존 빚을 돌려막는 습관을 끊는다. 경제적 자유는 공격적인 투자만으로 만들어지지 않는다. 위기 때 무너지지 않는 바닥이 있어야 한다. 비상금과 낮은 부채 부담은 그 바닥이다.
3단계: 저축률을 높이고 자동화한다 &nbsp; 경제적 자유를 만들려면 저축률이 중요하다. 수익률도 중요하지만, 초반에는 투자 원금이 너무 작기 때문에 저축률이 더 큰 영향을 준다. 월 10만 원을 투자하면서 수익률 1% 차이에 집착하는 것보다, 월 투자금을 30만 원으로 늘리는 것이 더 현실적인 변화일 수 있다.
저축률은 월소득 중 저축과 투자로 남기는 비율이다.
저축률 = 저축과 투자 금액 / 월 실수령액 x 100월 실수령액이 300만 원이고 매달 60만 원을 저축하거나 투자한다면 저축률은 20%다. 처음부터 50%를 목표로 잡으면 지치기 쉽다. 먼저 10%, 그다음 20%, 이후 30%처럼 단계적으로 올리는 편이 좋다.
핵심은 자동화다. 월급이 들어오면 남는 돈을 저축하는 방식은 실패하기 쉽다. 먼저 저축과 투자금을 자동이체하고, 남은 돈으로 생활하는 구조를 만들어야 한다.
예를 들어 월급날 다음 날에 다음 흐름을 자동화할 수 있다.
항목 자동화 예시 비상금 파킹통장으로 자동이체 장기투자 ETF 또는 연금계좌로 자동 납입 목적자금 여행, 이사, 자동차 등 별도 통장 적립 고정비 생활비 통장에 필요한 금액만 이동 경제적 자유는 의지력만으로 가기 어렵다. 자동화된 구조가 있어야 바쁜 달에도 돈이 쌓인다.
4단계: 투자로 자산이 일하게 만든다 &nbsp; 저축만으로 경제적 자유를 이루기는 어렵다. 물가는 오르고, 돈의 구매력은 시간이 지나며 약해질 수 있다. 그래서 어느 시점부터는 자산이 스스로 일하게 만드는 투자 구조가 필요하다.
투자는 단기 수익을 맞히는 게임이 아니다. 장기적으로 자산을 늘리고, 소득원을 월급 외에도 나누는 과정이다. 초보자는 복잡한 상품보다 이해하기 쉬운 것부터 시작하는 편이 낫다.
대표적인 투자 선택지는 다음과 같다.
투자 대상 특징 예금·적금 안정적이지만 장기 수익률은 제한적 ETF 소액으로 분산투자 가능 연금저축·IRP 노후 준비와 세액공제 효과 채권형 상품 주식보다 변동성이 낮은 편 배당주·배당 ETF 현금흐름을 만들 수 있음 부동산 큰 자금과 대출 관리가 필요 투자에서 중요한 것은 내 투자 기간과 위험 감내 수준이다. 1년 안에 써야 할 돈을 주식형 상품에 넣으면 하락장에서 곤란해질 수 있다. 반대로 10년 이상 투자할 돈이라면 단기 하락을 버티는 전략을 세울 수 있다.
초보자는 먼저 넓은 시장에 투자하는 ETF, 연금계좌, 예금과 채권형 상품을 조합해보는 방식이 현실적이다. 수익률이 높은 상품을 찾기보다 오래 유지할 수 있는 구조를 만드는 것이 먼저다.
5단계: 소득원을 늘리고 시간을 되찾는다 &nbsp; 경제적 자유의 마지막 핵심은 소득원 분산이다. 월급 하나에만 의존하면 회사 상황, 경기, 건강 문제에 취약해진다. 반대로 작은 부수입이라도 생기면 돈 관리의 여유가 커진다.
부수입은 처음부터 큰돈일 필요가 없다. 월 10만 원, 30만 원, 50만 원처럼 작게 시작해도 의미가 있다. 중요한 것은 한 번 하고 끝나는 일이 아니라, 경험과 자산으로 쌓이는 방향을 찾는 것이다.
수입원은 크게 근로소득, 사업소득, 투자소득으로 나눌 수 있다. 근로소득은 가장 안정적인 출발점이지만 내 시간이 계속 들어간다. 사업소득은 불확실성이 크지만 확장성이 있고, 투자소득은 자산이 쌓일수록 시간 의존도가 낮아질 수 있다.
수입원 특징 예시 근로소득 노동과 시간을 제공해 얻는 소득 월급, 프리랜서 수입 사업소득 상품이나 서비스를 팔아 얻는 소득 온라인 판매, 창업, 콘텐츠 사업 투자소득 자산에서 나오는 소득 배당금, 이자, 임대료, ETF 수익 부수입의 예시는 다양하다.
블로그, 콘텐츠, 전자책처럼 지식과 경험을 정리하는 일 온라인 판매, 중고거래, 작은 사업 실험 디자인, 번역, 개발, 글쓰기 같은 프리랜서 업무 배당, 이자, 임대료 같은 자산소득 본업 역량을 높여 연봉이나 단가를 올리는 일 많은 사람이 부수입을 본업과 별개로만 생각하지만, 가장 강력한 소득 증가는 본업에서 나오는 경우가 많다. 자격증, 포트폴리오, 업무 성과, 협상력을 통해 연봉을 올리는 것도 경제적 자유 로드맵의 중요한 일부다.
패시브 인컴도 이 단계에서 함께 생각할 수 있다. 배당주나 배당 ETF, 임대 수입, 블로그 광고 수익, 전자책 판매처럼 한 번 만든 구조가 반복 수익으로 이어지는 방식이다. 다만 완전히 손이 안 가는 수입은 드물다. 처음에는 시간과 노력이 들어가고, 이후 관리 비용이 줄어드는 구조에 가깝게 보는 것이 현실적이다.
다만 소득을 늘리는 과정에서 시간을 모두 잃으면 오래 가지 못한다. 경제적 자유의 목적은 더 많은 일을 하기 위한 것이 아니라, 결국 시간을 되찾기 위한 것이다. 그래서 부수입도 내 체력과 생활을 망치지 않는 방식으로 설계해야 한다.
정리 &nbsp; 경제적 자유는 운 좋게 큰돈을 버는 사건이 아니라, 돈이 들어오고 나가는 구조를 바꾸는 과정이다. 시작은 거창하지 않아도 된다. 내 생활비를 알고, 새는 돈을 줄이고, 비상금을 만들고, 고금리 부채를 줄이고, 자동 저축과 장기 투자를 시작하면 된다.
핵심 로드맵은 다음과 같다.
내 경제적 자유 기준을 월 현금흐름으로 계산한다. 지출을 파악하고 반복되는 고정비를 줄인다. 비상금과 부채 정리로 생활의 바닥을 단단하게 만든다. 저축률을 높이고 자동이체로 돈이 쌓이는 구조를 만든다. 장기 투자와 소득원 분산으로 월급 의존도를 낮춘다. 경제적 자유는 모두에게 같은 모습으로 오지 않는다. 누군가에게는 조기 은퇴일 수 있고, 누군가에게는 일은 계속하지만 돈 때문에 불안하지 않은 상태일 수 있다. 중요한 것은 지금 내 위치에서 다음 한 단계를 실행하는 것이다. 오늘 고정비 하나를 줄이고, 비상금 통장을 만들고, 자동이체를 설정하는 작은 행동이 로드맵의 출발점이다.
자주 묻는 질문 &nbsp; 경제적 자유를 이루려면 얼마가 필요할까? &nbsp; 정답은 없다. 먼저 한 달 생활비와 원하는 여유비를 계산해야 한다. 월 300만 원으로 충분한 사람도 있고, 가족 구성과 주거비에 따라 월 700만 원 이상이 필요한 사람도 있다.
월급이 적어도 경제적 자유를 준비할 수 있을까? &nbsp; 가능하다. 다만 초반에는 투자 수익률보다 지출 관리, 저축률 개선, 본업 소득 증가가 더 중요하다. 작은 금액이라도 자동 저축과 비상금 만들기부터 시작하면 된다.
경제적 자유를 위해 투자는 꼭 해야 할까? &nbsp; 장기적으로는 투자가 필요할 가능성이 크다. 저축만으로는 물가 상승과 노후 생활비를 감당하기 어려울 수 있기 때문이다. 다만 비상금과 고금리 부채 정리가 먼저이고, 투자는 이해할 수 있는 상품부터 천천히 시작하는 것이 좋다.`}).add({id:33,href:"/posts/account-opening-20-business-day-rule/",title:"계좌개설 20일 제한 뜻과 해제일 확인 방법",description:"계좌개설 20일 제한의 뜻, 적용 대상, 해제일 확인 방법, 예금 특판 가입 때 주의할 점을 초보자도 이해하기 쉽게 정리하였다.",content:`예금 금리가 조금만 올라가도 &ldquo;이번에는 저 은행 특판으로 갈아타야겠다&quot;는 생각이 든다. 그런데 막상 새 통장을 만들려고 하면 &ldquo;최근 입출금 계좌를 개설해 신규 계좌 개설이 어렵다&quot;는 안내가 뜨는 경우가 있다. 이때 걸리는 것이 흔히 말하는 계좌개설 20일 제한이다.
정확한 이름은 &ldquo;단기간 다수계좌 개설 제한&quot;이다. 한 금융회사에서 입출금 통장이나 증권 계좌를 새로 만든 뒤 일정 기간 안에 다른 금융회사에서 또 새 계좌를 만드는 것을 제한하는 방식이다. 대포통장, 보이스피싱, 명의도용 계좌를 줄이기 위한 목적이지만, 예금 특판이나 공모주 청약을 준비하는 사람에게는 꽤 답답한 규칙으로 느껴진다.
계좌개설 20일 제한이란 &nbsp; 계좌개설 20일 제한은 새 계좌를 만든 뒤 20영업일이 지나야 다른 금융회사에서 새 입출금 계좌를 만들 수 있도록 막는 관행이다. 여기서 중요한 단어는 &ldquo;영업일&quot;이다. 토요일, 일요일, 공휴일은 계산에서 빠진다.
예를 들어 4월 1일에 계좌를 만들었다고 해서 4월 21일에 바로 새 계좌를 만들 수 있는 것이 아니다. 주말과 공휴일을 빼고 20일을 세야 하므로 실제 체감 기간은 거의 한 달에 가까워질 수 있다.
이 제한은 2010년 금융감독원이 대포통장 근절을 위해 도입한 행정지도에서 출발했다. 이후 2020년에 공식 규제 자체는 폐지되었지만, 많은 금융회사들이 금융사고 예방 차원에서 자율적으로 계속 운영하고 있다. 그래서 법 조항처럼 딱 하나의 규칙으로 끝나는 것이 아니라, 금융회사별로 적용 방식이 조금씩 다를 수 있다.
어떤 계좌가 제한에 걸릴까 &nbsp; 가장 많이 걸리는 계좌는 입출금 통장이다. 은행, 저축은행, 상호금융, 증권사 등 금융권 전반에서 비슷하게 확인한다. 1금융권 은행에서 계좌를 만든 뒤 20영업일 안에 저축은행 입출금 통장을 만들려고 해도 막힐 수 있고, 증권사 계좌를 만든 뒤 다른 증권사 계좌를 추가로 만들 때도 제한을 만날 수 있다.
정기예금 자체가 문제라기보다는, 정기예금에 가입하려면 보통 그 금융회사 입출금 계좌가 먼저 필요하다는 점이 문제다. 고금리 예금 특판이 나왔는데 해당 금융회사 통장이 없다면, 입출금 통장 개설 단계에서 20일 제한에 걸려 예금 가입까지 막힐 수 있다.
예금 갈아타기에서 특히 불편한 이유 &nbsp; 금리가 빠르게 오르거나 저축은행 특판이 짧게 열릴 때는 하루 차이로 가입 가능 여부가 갈린다. 이미 다른 은행에서 통장을 만든 지 얼마 되지 않았다면 새 특판이 보여도 바로 움직이기 어렵다. 기사에서 언급된 것처럼 고금리 예금으로 옮기고 싶어도 20영업일을 기다려야 하는 상황이 생긴다.
다만 모든 금융회사가 완전히 똑같이 처리하는 것은 아니다. 일부 은행은 영업점 방문, 거래 목적 확인, 증빙 자료 제출 등을 통해 예외적으로 계좌를 열어주기도 한다. 반대로 저축은행이나 상호금융권은 비대면 계좌 개설에서 더 엄격하게 적용하는 경우가 많다.
20일 제한 해제일 확인 방법 &nbsp; 계좌를 여러 개 만들다 보면 &ldquo;내가 마지막으로 언제 계좌를 만들었지?&ldquo;부터 헷갈린다. 이럴 때는 직접 날짜를 세기보다 앱에서 확인하는 편이 빠르다.
1. 케이뱅크 앱에서 확인 &nbsp; 케이뱅크 앱에서 입출금 통장 개설을 진행해 보면 현재 20일 제한에 걸려 있는지 확인할 수 있다. 제한에 걸린 상태라면 신규 가입 가능일이 안내되는 경우가 있다. 실제로 새 계좌를 끝까지 만들 필요는 없고, 개설 가능 여부를 확인하는 용도로 쓸 수 있다.
2. KB스타뱅킹 앱에서 확인 &nbsp; KB국민은행의 KB스타뱅킹 앱에서도 입출금 통장 가입 절차를 진행하면 단기간 다수계좌 개설 제한 안내가 나올 수 있다. 이 화면에서 언제부터 가입 가능한지 확인할 수 있다. 은행 앱마다 메뉴 위치는 바뀔 수 있지만, 보통 &ldquo;상품가입&rdquo;, &ldquo;입출금&rdquo;, &ldquo;통장 만들기&rdquo; 흐름에서 확인하게 된다.
3. 카카오뱅크 고객센터 챗봇 활용 &nbsp; 카카오뱅크 고객센터 챗봇에서 계좌개설 계산기를 이용하는 방법도 있다. 다만 이 방식은 마지막 계좌 개설일을 알고 있어야 계산하기 쉽다. 개설일 자체가 기억나지 않는다면 은행 앱에서 제한 안내를 확인하거나, 아래의 계좌정보 조회 서비스를 먼저 보는 편이 낫다.
계좌정보통합관리서비스에서 내 계좌 확인 &nbsp; 이미 만든 계좌를 한 번에 확인하는 방법 &nbsp; 마지막 계좌 개설일이 기억나지 않는다면 계좌정보통합관리서비스의 &ldquo;내 계좌 한눈에&rdquo; 기능을 확인해볼 수 있다. 은행권, 제2금융권, 증권사, 휴면예금 등을 나누어 조회할 수 있어서 본인이 만든 계좌를 정리하는 데 도움이 된다.
잠자고 있는 입출금 통장이 생각보다 많을 때도 있다. 쓰지 않는 계좌가 많으면 관리가 어렵고, 보이스피싱이나 명의도용 위험을 늦게 알아차릴 수도 있다. 계좌개설 20일 제한을 확인하는 김에 오래 쓰지 않는 계좌까지 같이 정리하면 좋다.
주의할 점은 계좌정보통합관리서비스가 &ldquo;다음 계좌 개설 가능일&quot;을 항상 직접 알려주는 도구는 아니라는 점이다. 개설한 계좌 목록을 확인하고, 실제 신규 가입 가능일은 은행 앱의 계좌 개설 화면이나 고객센터를 통해 확인하는 방식이 더 정확하다.
특판 예금 가입 전 체크할 것 &nbsp; 고금리 특판 예금에 가입하려면 금리만 보면 안 된다. 먼저 해당 금융회사에 입출금 통장이 이미 있는지 확인해야 한다. 이미 통장이 있다면 20일 제한과 상관없이 정기예금 가입이 가능한 경우가 많다. 반대로 통장이 없다면 입출금 계좌부터 만들어야 하므로 제한에 걸릴 수 있다.
저축은행 특판을 자주 보는 사람이라면 SB톡톡플러스 같은 저축은행 통합 앱도 확인해볼 만하다. 저축은행중앙회가 도입한 비대면 전용 보통계좌를 활용하면 여러 저축은행 정기예금 가입 과정에서 20일 제한 부담을 줄일 수 있는 경우가 있다. 다만 상품별 조건과 앱 정책은 바뀔 수 있으므로 가입 전 화면 안내를 꼭 확인해야 한다.
영업점 방문도 하나의 방법이 될 수 있다. 일부 금융회사는 방문 고객에게 금융거래한도계좌를 개설해주고 정기예금 가입을 허용하기도 한다. 하지만 이체 한도가 작으면 큰 금액을 넣을 때 불편할 수 있고, 금융회사마다 처리 기준이 다르다. 무작정 방문하기보다는 지점에 먼저 전화해서 &ldquo;20영업일 제한 중인데 정기예금 가입이 가능한지&quot;를 확인하는 편이 낫다.
정리 &nbsp; 계좌개설 20일 제한은 새 입출금 계좌를 짧은 기간에 여러 개 만드는 것을 막기 위한 금융권의 관행이다. 공식 규제는 폐지되었지만 금융회사들이 자율적으로 유지하고 있어 여전히 많은 사람이 계좌 개설 단계에서 제한을 경험한다.
핵심은 세 가지다. 첫째, 20일은 달력 기준이 아니라 영업일 기준이다. 둘째, 정기예금보다 입출금 통장 개설 단계에서 제한이 걸리는 경우가 많다. 셋째, 해제일은 은행 앱의 통장 개설 화면, 챗봇 계산기, 고객센터를 통해 확인하는 것이 가장 빠르다.
예금 특판이나 공모주 청약을 자주 챙긴다면 마지막 계좌 개설일을 따로 적어두는 습관이 도움이 된다. 금리만 보고 움직이다가 계좌 개설 제한에 막히면 좋은 상품을 놓칠 수 있으니, 새 금융회사 상품에 가입하기 전에는 통장 보유 여부와 20영업일 제한부터 먼저 확인하는 것이 좋다.
자주 묻는 질문 &nbsp; 계좌개설 20일 제한은 모든 금융회사에 똑같이 적용되나? &nbsp; 큰 틀에서는 은행, 저축은행, 상호금융, 증권사 등 금융권 전반에서 확인하는 경우가 많다. 다만 공식 규제가 아니라 금융회사 자율 운영 성격이 강해 세부 기준은 회사마다 다를 수 있다. 비대면 개설은 엄격하고, 영업점 방문은 예외가 있는 경우도 있다.
20일 제한 중에도 정기예금에 가입할 수 있나? &nbsp; 이미 해당 금융회사 입출금 계좌를 가지고 있다면 정기예금 가입이 가능할 수 있다. 문제가 되는 것은 새 입출금 계좌를 만들어야 하는 경우다. 일부 금융회사는 영업점 방문이나 비대면 전용 계좌를 통해 다른 방법을 제공하기도 하므로 가입 전 고객센터에 확인하는 것이 좋다.
마지막 계좌 개설일을 모르면 어떻게 확인하나? &nbsp; 먼저 계좌정보통합관리서비스에서 본인 명의 계좌를 조회해볼 수 있다. 이후 은행 앱에서 입출금 통장 개설을 진행해 보면 제한 여부와 가입 가능일이 안내되는 경우가 있다. 정확한 날짜가 필요하면 해당 금융회사 고객센터에 문의하는 것이 가장 확실하다.
적금 개설도 포함이 되나요? &nbsp; 입/출금 계좌만 해당된다. 적금이나 예금 게좌는 하루에 여러개 개설하여도 가능하다.`}).add({id:34,href:"/posts/fixed-variable-loan-interest/",title:"고정금리와 변동금리 차이 쉽게 정리: 대출받을 때 어떤...",description:"고정금리와 변동금리의 뜻, 대출금리 계산 구조, 시장금리 상승기와 하락기 선택 기준, 혼합금리까지 초보자도 이해하기 쉽게 정리했다.",content:`대출을 알아보다 보면 가장 헷갈리는 말 중 하나가 고정금리와 변동금리다. 은행 앱에서는 금리 숫자만 크게 보이지만, 실제로 중요한 것은 그 금리가 앞으로 계속 같은지, 일정 주기마다 바뀌는지다.
처음에는 변동금리가 더 낮아 보여서 좋아 보일 수 있다. 반대로 고정금리는 조금 비싸 보여도 마음이 편해 보인다. 그런데 대출은 몇 달 쓰고 끝나는 경우도 있지만, 주택담보대출처럼 몇 년에서 수십 년까지 이어지는 경우도 많다. 금리 방식 하나가 매달 이자 부담과 가계 계획을 크게 바꿀 수 있다.
이 글에서는 고정금리와 변동금리가 정확히 무엇인지, 어떤 상황에서 각각 유리한지, 혼합금리는 어떻게 봐야 하는지 쉽게 정리하였다.
대출금리는 어떻게 정해질까 &nbsp; 고정금리와 변동금리를 이해하기 전에 대출금리가 어떻게 만들어지는지부터 알면 훨씬 쉽다. 대출금리는 보통 다음 구조로 계산된다.
대출금리 = 기준금리 + 가산금리 - 우대금리
여기서 기준금리 는 금융사가 대출금리를 정할 때 바탕으로 삼는 금리다. 대출 종류에 따라 COFIX, CD금리, 금융채 금리 등이 쓰일 수 있다. 시장에서 돈을 조달하는 비용이 오르면 기준금리도 영향을 받는다.
가산금리 는 금융사가 고객의 신용도, 소득, 담보, 대출 기간, 내부 심사 기준 등을 반영해 더하는 금리다. 같은 은행에서 같은 상품을 신청해도 사람마다 금리가 다르게 나오는 이유가 여기에 있다.
우대금리 는 급여 이체, 카드 사용, 자동이체, 예금 거래 같은 조건을 충족하면 빼주는 금리다. 다만 우대금리는 조건을 유지하지 못하면 사라질 수 있으니, 실제로 오래 유지할 수 있는 조건인지 봐야 한다.
고정금리와 변동금리의 차이는 이 금리가 대출 기간 동안 고정되는지, 아니면 일정 주기마다 다시 계산되는지에 있다.
고정금리란 무엇인가 &nbsp; 고정금리는 처음 약정한 금리가 만기까지 그대로 유지되는 방식이다. 예를 들어 만기 1년 대출을 연 4% 고정금리로 받았다면, 1년 동안 시장금리가 오르거나 내려도 내 대출금리는 4%로 유지된다.
고정금리의 가장 큰 장점은 예측 가능성이다. 매달 내야 할 이자나 원리금을 계산하기 쉽고, 금리가 갑자기 오르더라도 내 대출금리가 같이 오르지 않는다. 그래서 장기 대출을 받거나, 매달 상환액이 흔들리는 것을 부담스러워하는 사람에게 안정적인 선택이 될 수 있다.
반대로 단점도 있다. 일반적으로 같은 만기라면 고정금리가 변동금리보다 높게 제시되는 경우가 많다. 은행 입장에서는 대출 기간 중 금리가 올라갈 위험을 떠안아야 하므로, 그 위험에 대한 비용이 금리에 반영되기 때문이다.
고정금리가 잘 맞는 경우 &nbsp; 고정금리는 앞으로 시장금리가 오를 가능성이 크다고 생각될 때 유리할 수 있다. 금리가 오른 뒤에도 내 금리는 그대로이기 때문이다.
또 월급처럼 소득이 일정하고, 매달 나가는 돈을 안정적으로 관리하고 싶은 사람에게도 잘 맞는다. 특히 주택담보대출처럼 대출 기간이 길수록 금리 변동에 따른 부담이 커질 수 있으므로 고정금리를 함께 비교하는 것이 좋다.
다만 고정금리를 선택하면 금리가 내려가는 시기에는 아쉬울 수 있다. 시장금리가 내려가도 내 금리는 그대로라서, 변동금리를 선택한 사람보다 이자를 더 낼 수 있다.
변동금리란 무엇인가 &nbsp; 변동금리는 시장금리를 반영해 일정 주기마다 대출금리가 바뀌는 방식이다. 보통 3개월, 6개월, 12개월처럼 정해진 주기마다 기준금리가 다시 적용된다.
예를 들어 만기 1년, 변동주기 3개월, 금리 조건이 &ldquo;CD금리 + 0.5%&ldquo;인 대출을 받았다고 해보자. 처음 CD금리가 3.0%라면 대출금리는 3.5%다. 3개월 뒤 CD금리가 3.2%로 오르면 대출금리는 3.7%가 된다. 6개월 뒤 CD금리가 3.5%가 되면 대출금리는 4.0%, 9개월 뒤 4.0%가 되면 대출금리는 4.5%가 되는 식이다.
변동금리의 장점은 처음 금리가 고정금리보다 낮게 제시되는 경우가 많다는 점이다. 시장금리가 내려가면 내 대출금리도 낮아질 수 있다. 그래서 금리 하락이 예상되거나 대출을 오래 쓰지 않을 계획이라면 검토해볼 수 있다.
하지만 단점은 불확실성이다. 금리가 오르면 이자 부담도 같이 늘어난다. 특히 대출금액이 크면 0.5%포인트, 1%포인트 차이도 매달 부담에 크게 반영된다.
변동금리가 잘 맞는 경우 &nbsp; 변동금리는 앞으로 시장금리가 내려갈 가능성이 높다고 판단될 때 유리할 수 있다. 금리가 하락하면 대출금리도 낮아질 수 있기 때문이다.
또 대출 이용 기간이 짧거나, 중간에 상환할 계획이 뚜렷한 사람에게도 선택지가 될 수 있다. 예를 들어 몇 달 뒤 전세보증금이 들어오거나, 집을 팔아 대출을 갚을 계획이 확실하다면 처음 금리가 낮은 변동금리가 더 실용적일 수 있다.
다만 계획이 틀어질 가능성도 함께 봐야 한다. &ldquo;곧 갚을 수 있을 것 같다&quot;와 &ldquo;언제 어떤 돈으로 갚을지 정해져 있다&quot;는 전혀 다르다. 상환 계획이 약하다면 변동금리의 위험이 커질 수 있다.
혼합금리도 함께 봐야 한다 &nbsp; 대출 상품을 보면 고정금리와 변동금리만 있는 것은 아니다. 혼합금리라는 방식도 있다. 혼합금리는 일정 기간 고정금리를 적용하다가, 이후 변동금리로 바뀌는 구조다.
예를 들어 처음 5년은 고정금리로 적용하고, 그 이후에는 6개월 또는 12개월 단위로 금리가 바뀌는 식이다. 은행이나 상품에 따라 &ldquo;고정형 금리&quot;라는 표현을 쓰기도 하지만, 실제 구조는 일정 기간 뒤 변동금리로 전환되는 경우가 있으니 약정 내용을 확인해야 한다.
혼합금리의 장점은 초반 안정성을 확보할 수 있다는 점이다. 대출 초기에 금리 변동을 피하면서, 일정 기간 뒤에는 시장금리 흐름에 맞춰 다시 금리가 조정된다.
다만 고정 기간이 끝난 뒤 금리가 어떻게 바뀌는지 반드시 봐야 한다. 처음 몇 년만 보고 선택했다가, 전환 시점에 금리가 크게 오르면 상환 부담이 갑자기 커질 수 있다.
혼합금리는 특히 주택담보대출에서 자주 접한다. 대출 기간이 길고 금액이 클수록 &ldquo;처음 몇 년 동안의 안정성&quot;과 &ldquo;이후 금리 변동 가능성&quot;을 같이 따져야 한다.
고정금리와 변동금리 선택 기준 &nbsp; 고정금리와 변동금리 중 항상 더 좋은 선택은 없다. 시장 상황, 대출 기간, 상환 계획, 소득 안정성에 따라 답이 달라진다.
가장 먼저 볼 것은 시장금리 전망이다. 앞으로 금리가 오를 가능성이 크다면 고정금리가 유리할 수 있다. 반대로 금리가 내려갈 가능성이 크다면 변동금리가 유리할 수 있다.
두 번째는 대출 이용 기간이다. 대출을 오래 가져갈수록 금리 변동의 영향을 크게 받는다. 장기 대출이라면 조금 높은 금리를 감수하더라도 안정성을 선택할 가치가 있다. 반대로 단기 대출이고 상환 계획이 확실하다면 변동금리도 비교해볼 만하다.
세 번째는 내 소득 구조다. 매달 소득이 일정하고 생활비 계획을 보수적으로 세워야 한다면 고정금리가 편하다. 소득 변동이 크거나 사업 자금처럼 현금흐름이 불규칙하다면, 금리뿐 아니라 상환 방식과 만기 구조까지 같이 봐야 한다.
마지막으로 중도상환수수료를 확인해야 한다. 나중에 더 낮은 금리 상품으로 갈아타거나 목돈이 생겨 빨리 갚고 싶어도, 수수료가 크면 실제 이득이 줄어들 수 있다.
구분 고정금리 변동금리 금리 변화 만기까지 동일 일정 주기마다 변경 장점 월 상환액 예측이 쉽다 금리 하락 시 이자 부담이 줄 수 있다 단점 처음 금리가 높을 수 있다 금리 상승 시 부담이 커진다 유리한 상황 금리 상승 예상, 장기 대출, 안정적 관리 금리 하락 예상, 단기 대출, 조기 상환 계획 대출을 고를 때는 &ldquo;지금 당장 낮은 금리&quot;만 보면 부족하다. 금리가 6개월 뒤, 1년 뒤, 5년 뒤 어떻게 바뀌어도 감당 가능한지 계산해야 한다.
정리 &nbsp; 고정금리는 처음 약정한 금리가 만기까지 유지되는 방식이고, 변동금리는 시장금리를 반영해 일정 주기마다 금리가 바뀌는 방식이다. 고정금리는 안정성이 강하고, 변동금리는 금리 하락기에 이자 부담이 줄어들 가능성이 있다.
핵심만 다시 정리하면 이렇다.
고정금리는 금리 상승이 걱정되거나 월 상환액을 안정적으로 관리하고 싶을 때 유리할 수 있다. 변동금리는 금리 하락이 예상되거나 대출 기간이 짧고 조기 상환 계획이 명확할 때 검토할 수 있다. 혼합금리는 초반에는 고정금리, 이후에는 변동금리로 바뀌는 구조가 많으므로 전환 시점을 확인해야 한다. 대출금리는 기준금리, 가산금리, 우대금리 구조로 이해하면 쉽다. 금리 방식만 보지 말고 대출 기간, 상환 방식, 중도상환수수료, 소득 안정성까지 함께 봐야 한다. 대출은 가장 낮은 금리를 찾는 일처럼 보이지만, 실제로는 내가 감당할 수 있는 위험을 고르는 일에 가깝다. 금리가 조금 낮다는 이유만으로 선택하기보다, 최악의 경우에도 매달 상환할 수 있는지 먼저 계산하는 것이 좋다.
자주 묻는 질문 &nbsp; 고정금리가 변동금리보다 항상 좋은가? &nbsp; 항상 좋은 것은 아니다. 고정금리는 안정적이지만 처음 금리가 변동금리보다 높을 수 있다. 금리가 내려가는 시기에는 변동금리가 더 유리할 수도 있다.
변동금리는 얼마나 자주 바뀔까? &nbsp; 상품마다 다르지만 보통 3개월, 6개월, 12개월 단위로 바뀐다. 대출 약정서에 변동주기와 기준금리가 적혀 있으므로 신청 전에 반드시 확인해야 한다.
대출을 빨리 갚을 예정이면 어떤 금리가 나을까? &nbsp; 상환 시점과 금리 전망에 따라 다르다. 단기간만 사용할 계획이고 금리 상승 위험이 크지 않다면 변동금리도 검토할 수 있다. 다만 중도상환수수료가 있으면 빨리 갚아도 절감 효과가 줄어들 수 있다.`}).add({id:35,href:"/posts/ipo-stock-subscription/",title:"공모주 청약이란? 뜻부터 신청 방법, 배정 방식, 장단...",description:"공모주와 IPO의 뜻, 공모주 청약 신청 절차, 청약 증거금, 균등 배정과 비례 배정 차이, 장단점과 주의사항을 초보자도 이해하기 쉽게 정리했다.",content:`주식 투자를 하다 보면 &ldquo;공모주 청약&rdquo;, &ldquo;IPO 대어&rdquo;, &ldquo;상장 첫날 따상&rdquo; 같은 말을 자주 보게 된다. 뉴스에서는 큰돈을 번 사례가 먼저 보이지만, 막상 직접 해보려면 어디서 신청하는지, 얼마를 넣어야 하는지, 신청하면 무조건 주식을 받는지부터 헷갈린다.
공모주 청약은 구조만 이해하면 어렵지 않다. 다만 은행 예금처럼 원금이 보장되는 상품은 아니고, 인기가 많다고 해서 항상 수익이 나는 것도 아니다. 공모주가 무엇인지, 청약은 어떤 순서로 진행되는지, 배정은 어떻게 나뉘는지까지 알고 시작해야 불필요한 실수를 줄일 수 있다.
공모주가 무엇인지 먼저 알아야 한다 &nbsp; 공모주는 말 그대로 일반 투자자에게 공개적으로 모집해서 파는 주식이다. 어떤 회사가 주식시장에 처음 들어오려면 기존 일부 투자자만 가진 주식을 더 넓은 투자자에게 공개하고, 시장에서 사고팔 수 있는 형태로 만들어야 한다.
이 과정을 보통 IPO라고 부른다. IPO는 &ldquo;Initial Public Offering&quot;의 줄임말로, 기업이 처음으로 주식을 공개해 투자자에게 판매하는 절차를 뜻한다. 한국어로는 기업공개라고도 한다.
쉽게 말하면 공모주는 &ldquo;상장 전에 미리 신청할 수 있는 주식&quot;에 가깝다. 회사는 상장을 통해 자금을 조달하고, 투자자는 상장 전 정해진 공모가로 주식을 받을 기회를 얻는다.
다만 공모주라고 해서 항상 싸게 사는 것은 아니다. 공모가는 기관투자자 수요예측, 기업 가치, 시장 분위기 등을 바탕으로 정해진다. 상장 후 주가가 공모가보다 오르면 수익이 나지만, 반대로 공모가보다 내려가면 손실이 난다.
구분 뜻 공모주 상장을 앞두고 일반 투자자에게 공개 모집하는 주식 IPO 기업이 처음으로 주식을 공개하고 상장하는 과정 공모가 공모주를 배정받을 때 적용되는 주당 가격 상장 주식시장에서 자유롭게 사고팔 수 있게 되는 것 공모주 청약은 어떤 투자 방식인가 &nbsp; 공모주 청약은 상장 예정 기업의 주식을 받기 위해 투자자가 정해진 기간에 신청하는 절차다. 아파트 청약처럼 &ldquo;신청하면 모두 받는 구조&quot;가 아니라, 신청자 수와 청약 금액에 따라 실제 배정 수량이 달라진다.
예를 들어 어떤 회사의 공모가가 20,000원이고 최소 청약 수량이 10주라면, 최소 신청 금액은 200,000원이다. 다만 공모주 청약에서는 보통 신청 금액 전부가 아니라 일정 비율의 청약 증거금을 먼저 넣는다. 많은 공모주 청약에서 증거금률은 50%로 적용되는 경우가 많다.
이 경우 10주를 신청하려면 200,000원의 50%인 100,000원을 증거금으로 넣는 식이다. 이후 실제로 1주만 배정받았다면 1주 가격을 제외한 나머지 증거금은 환불된다.
공모주 청약 3줄 요약 &nbsp; 공모주 청약은 상장 전 기업의 주식을 미리 신청해 배정받는 투자 방식이다. 상장 후 주가가 오르면 수익을 기대할 수 있지만, 공모가보다 떨어지면 손실이 날 수 있다. 참여하려면 청약 가능한 증권사 계좌, 청약 일정 확인, 청약 증거금 준비가 필요하다. 공모주 청약 신청 절차 &nbsp; 공모주 청약은 대체로 3단계로 진행된다. 처음에는 복잡해 보여도 실제 흐름은 &ldquo;계좌 준비, 일정 확인, 증거금 넣고 신청&quot;으로 이해하면 된다.
1. 청약 가능한 증권사 계좌를 준비한다 &nbsp; 공모주마다 청약을 받는 증권사가 정해져 있다. 이를 주관사 또는 인수회사라고 부른다. 모든 증권사에서 신청할 수 있는 것이 아니기 때문에, 관심 있는 공모주가 있다면 먼저 어느 증권사에서 청약을 받는지 확인해야 한다.
계좌는 청약 당일에 만들면 참여가 제한될 수 있다. 증권사마다 조건이 다르지만, 청약 시작 전날까지 개설된 계좌만 허용하는 경우도 있다. 공모주 투자를 자주 할 생각이라면 주요 증권사 계좌를 미리 준비해두는 편이 편하다.
2. 공모주 일정을 확인한다 &nbsp; 공모주 청약은 보통 이틀 정도만 진행된다. 청약 기간을 놓치면 상장 전에는 다시 신청할 수 없다. 그래서 공모주 일정에서는 최소한 다음 항목을 확인해야 한다.
확인 항목 보는 이유 청약일 실제 신청 가능한 날짜 환불일 배정받지 못한 증거금이 돌아오는 날짜 상장일 주식시장 거래가 시작되는 날짜 공모가 배정받을 때 적용되는 가격 주관사 어느 증권사 앱에서 신청할지 결정 3. 청약 수량을 입력하고 증거금을 넣는다 &nbsp; 청약 기간이 되면 증권사 앱이나 홈페이지에서 원하는 수량을 입력해 신청한다. 이때 필요한 돈이 청약 증거금이다.
청약 증거금은 주식을 사겠다는 의사를 표시하기 위해 미리 넣는 돈이다. 실제 배정 결과가 나오면 배정받은 주식 금액만 결제되고, 남은 금액은 환불일에 돌아온다.
예를 들어 공모가 30,000원짜리 주식을 20주 신청하고 증거금률이 50%라면 신청 금액은 600,000원, 필요한 증거금은 300,000원이다. 이후 2주를 배정받으면 60,000원이 실제 주식 매수에 쓰이고, 나머지는 환불된다. 수수료가 있는 증권사라면 환불 금액에서 청약 수수료가 빠질 수 있다.
공모주 배정 방식은 균등과 비례로 나뉜다 &nbsp; 공모주 청약에서 가장 헷갈리는 부분이 배정 방식이다. 신청했다고 해서 신청한 수량을 그대로 받는 것이 아니다. 일반 청약 물량은 보통 균등 배정과 비례 배정으로 나뉜다.
균등 배정 &nbsp; 균등 배정은 최소 청약 수량 이상을 신청한 투자자에게 최대한 공평하게 나눠주는 방식이다. 소액 투자자도 공모주를 받을 기회를 얻을 수 있도록 만든 구조다.
예를 들어 균등 배정 물량이 10만 주이고 청약자가 10만 명이면 이론적으로 1명당 1주씩 받을 수 있다. 반대로 청약자가 20만 명이면 2명 중 1명 정도만 1주를 받는 식으로 추첨이 들어갈 수 있다.
그래서 경쟁률이 매우 높은 인기 공모주는 최소 수량만 청약해도 0주를 받을 수 있다.
비례 배정 &nbsp; 비례 배정은 청약 증거금을 많이 넣은 투자자에게 더 많은 주식을 배정하는 방식이다. 경쟁률이 높을수록 같은 1주를 받기 위해 필요한 증거금이 커진다.
예를 들어 비례 경쟁률이 1,000대 1이라면, 1주를 받기 위해 이론적으로 1,000주를 신청해야 하는 구조에 가깝다. 공모가가 높고 경쟁률까지 높으면 많은 자금이 며칠 동안 묶일 수 있다.
구분 균등 배정 비례 배정 기준 청약자 수 청약 금액 유리한 투자자 소액 투자자 자금 여력이 큰 투자자 특징 최소 수량만 신청해도 기회가 있음 많이 신청할수록 배정 가능성이 커짐 주의점 인기 종목은 0주 배정 가능 증거금이 크게 묶일 수 있음 공모주 청약의 장점과 단점 &nbsp; 공모주 청약의 가장 큰 장점은 상장 전에 정해진 공모가로 주식을 받을 수 있다는 점이다. 기업 가치가 시장에서 좋게 평가되고 상장 후 매수세가 강하면 단기간 수익이 날 수 있다. 균등 배정 덕분에 큰돈이 없어도 최소 청약으로 참여할 수 있다는 점도 매력적이다.
또 하나의 장점은 투자 판단 자료가 비교적 공개되어 있다는 것이다. 상장을 앞둔 기업은 증권신고서, 투자설명서 등을 통해 사업 내용, 재무 정보, 위험 요소를 공개한다. 금융감독원 전자공시시스템에서 이런 자료를 확인할 수 있다.
금융감독원 DART에서 공시 확인 &nbsp; 하지만 단점도 분명하다. 상장일 주가가 공모가보다 낮아지면 바로 손실이 발생한다. 특히 시장 분위기가 나쁘거나 공모가가 높게 책정됐다는 평가를 받는 종목은 상장 후 주가가 약할 수 있다.
경쟁률이 높으면 배정 수량도 적다. 며칠 동안 큰 증거금을 넣었는데 실제로는 0주 또는 1주만 받을 수도 있다. 증권사에 따라 청약 수수료가 붙기 때문에, 1주만 배정받고 주가가 크게 오르지 않으면 실익이 작을 수 있다.
청약 전 꼭 확인할 체크리스트 &nbsp; 공모주 청약은 신청 버튼을 누르기 전 확인해야 할 것이 많다. 아래 항목을 대충 넘기면 청약이 불가능하거나, 배정 후 원하지 않는 손실을 볼 수 있다.
체크 항목 확인할 내용 주관사 내가 가진 증권사 계좌로 청약 가능한지 확인 계좌 조건 청약 전날 개설 계좌만 가능한지 확인 공모가 기업 가치 대비 너무 비싸게 책정됐는지 검토 의무보유확약 기관투자자가 상장 후 오래 보유하려는 비율인지 확인 유통 가능 물량 상장일 바로 팔 수 있는 물량이 많은지 확인 환불일 증거금이 며칠 동안 묶이는지 확인 청약 수수료 배정 수량이 적을 때 수수료 부담이 있는지 확인 특히 초보자는 &ldquo;상장일에 무조건 오른다&quot;는 생각을 버리는 것이 좋다. 공모주 청약은 단기 이벤트처럼 보이지만 결국 주식 투자다. 기업의 실적, 성장성, 공모가 수준, 시장 분위기를 함께 봐야 한다.
공모주 일정만 따라다니기보다 관심 기업의 사업 모델을 먼저 읽어보는 습관을 들이면 좋다. 어떤 회사가 돈을 버는지 이해하지 못한 상태에서 경쟁률만 보고 청약하면, 상장일 주가가 흔들릴 때 판단이 어려워진다.
마무리 &nbsp; 공모주는 상장을 앞둔 기업이 일반 투자자에게 공개적으로 모집하는 주식이고, 공모주 청약은 그 주식을 받기 위해 정해진 기간에 신청하는 절차다.
핵심은 단순하다. 청약 가능한 증권사 계좌를 준비하고, 공모주 일정을 확인한 뒤, 증거금을 넣어 신청한다. 이후 균등 배정과 비례 배정 방식에 따라 실제 받을 주식 수가 결정되고, 배정받지 못한 증거금은 환불된다.
공모주 청약은 소액으로도 참여할 수 있고 단기 수익을 기대할 수 있다는 장점이 있다. 하지만 공모가보다 주가가 내려가면 손실이 나고, 인기 종목은 경쟁률이 높아 배정 수량이 적을 수 있다.
처음 시작한다면 큰 금액을 넣기보다 최소 청약으로 흐름을 익히는 편이 좋다. 몇 번 경험해보면 청약 일정, 환불일, 상장일, 배정 결과가 어떤 식으로 움직이는지 자연스럽게 감이 잡힌다.
자주 묻는 질문 &nbsp; 공모주 청약은 아무 때나 할 수 있나? &nbsp; 아니다. 기업마다 정해진 청약 기간이 있고, 보통 이틀 정도만 신청을 받는다. 청약 기간이 지나면 해당 공모주는 상장 전 청약으로 신청할 수 없다.
공모주를 배정받지 못하면 증거금은 어떻게 되나? &nbsp; 배정받지 못한 금액은 환불일에 돌아온다. 예를 들어 300,000원을 증거금으로 넣었는데 1주도 배정받지 못했다면 증거금은 환불된다. 다만 증권사별 청약 수수료가 있을 수 있으니 미리 확인해야 한다.
증권사 계좌는 꼭 미리 만들어야 하나? &nbsp; 미리 만드는 것이 좋다. 일부 증권사는 청약 시작 전날까지 개설된 계좌만 청약을 허용한다. 관심 있는 공모주가 있다면 청약일에 계좌를 만들기보다 주관사를 확인한 뒤 미리 준비하는 편이 안전하다.`}).add({id:36,href:"/posts/official-land-price-vs-actual-transaction-price/",title:"공시지가와 실거래가 차이: 부동산 세금 기준 한눈에 정리",description:"공시지가와 실거래가의 뜻, 주택 세금에서 어떤 가격을 기준으로 쓰는지, 취득세·재산세·양도소득세·상속증여 평가까지 쉽게 정리했다.",content:`집을 사거나 팔 때 가장 헷갈리는 말 중 하나가 공시지가와 실거래가다. 집값이 8억 원이라고 들었는데 세금 계산에서는 5억 원대 공시가격이 나오고, 토지는 공시지가라는 말을 쓰고, 아파트는 공동주택 공시가격이라는 말이 따로 나온다. 처음 보면 전부 &ldquo;부동산 가격&quot;처럼 보여서 뭐가 기준인지 헷갈릴 수밖에 없다.
핵심은 간단하다. 실거래가는 실제로 사고판 가격 이고, 공시지가는 정부가 공시하는 토지 가격 이다. 다만 주택에서는 공시지가보다 &ldquo;공시가격&quot;이라는 표현을 더 정확히 써야 한다. 아파트나 빌라 같은 공동주택은 공동주택 공시가격, 단독주택은 개별주택가격 또는 표준주택가격을 확인하는 식이다.
이 글에서는 공시지가와 실거래가의 차이, 부동산 세금에서 어떤 가격이 쓰이는지, 상속이나 증여처럼 예외적으로 시가 판단이 중요한 경우까지 정리하였다.
공시지가와 실거래가의 뜻 &nbsp; 실거래가는 이름 그대로 실제 거래된 가격이다. 아파트를 8억 원에 매수했다면 그 계약의 실거래가는 8억 원이다. 부동산 거래계약을 체결하면 계약일로부터 일정 기간 안에 신고해야 하고, 국토교통부 실거래가 공개시스템에서 아파트, 연립·다세대, 단독·다가구, 오피스텔, 토지 등의 거래 정보를 확인할 수 있다.
공시지가는 정부가 조사해 공시하는 토지 가격이다. 엄밀히 말하면 &ldquo;집 전체 가격&quot;이 아니라 땅값에 가까운 개념이다. 공시지가는 다시 표준지공시지가와 개별공시지가로 나뉜다.
구분 뜻 주로 쓰이는 곳 표준지공시지가 대표성이 있는 표준 토지의 단위면적당 가격 개별 토지 가격 산정의 기준 개별공시지가 표준지공시지가를 바탕으로 개별 토지 특성을 반영한 가격 토지 관련 세금, 부담금, 보상 참고 공동주택 공시가격 아파트, 연립, 다세대 주택의 공시가격 재산세, 종부세 등 보유세 개별주택가격 단독주택, 다가구주택 등의 공시가격 재산세, 종부세 등 보유세 실거래가 실제 매매계약에서 거래된 가격 취득세, 양도소득세, 시세 판단 일상에서는 &ldquo;우리 집 공시지가가 얼마야?&ldquo;라고 말하는 경우가 많다. 하지만 아파트나 빌라를 말하는 상황이라면 보통은 공시지가가 아니라 공동주택 공시가격을 뜻하는 경우가 많다. 세금이나 대출 상담에서 이 말을 섞어 쓰면 오해가 생길 수 있으니, 내 집이 주택인지 토지인지에 따라 용어를 구분하는 게 좋다.
부동산 공시가격 알리미에서 공시가격 확인 &nbsp; 왜 실거래가와 공시가격은 다를까 &nbsp; 실거래가는 시장에서 실제로 체결된 가격이다. 같은 아파트 단지라도 층, 향, 조망, 인테리어 상태, 급매 여부, 매수 경쟁 정도에 따라 가격이 달라진다. 개발 호재가 있거나 인기 학군에 속하면 기대감이 붙어 실거래가가 빠르게 오르기도 한다.
반면 공시가격은 정부가 일정한 기준과 절차에 따라 산정해 공시하는 가격이다. 매일 변하는 시장 가격을 실시간으로 따라가는 숫자가 아니다. 조사 기준일과 공시 시점이 있고, 의견 청취와 이의신청 절차도 거친다. 그래서 실거래가보다 낮게 느껴지는 경우가 많다.
예를 들어 어떤 아파트가 최근 8억 원에 거래되었더라도 공동주택 공시가격은 5억 원대일 수 있다. 반대로 거래가 거의 없는 지역에서는 실거래가 사례가 부족해 공시가격과 체감 시세를 바로 비교하기 어려울 수도 있다.
둘 중 어느 하나가 &ldquo;진짜 가격&quot;이고 다른 하나가 &ldquo;가짜 가격&quot;인 것은 아니다. 목적이 다르다. 실거래가는 시장에서 실제로 돈이 오간 가격이고, 공시가격은 세금과 행정 목적에 쓰기 위해 정한 기준 가격이다.
집을 살 때와 팔 때는 실거래가가 중요하다 &nbsp; 주택을 사고팔 때 발생하는 대표적인 세금은 취득세와 양도소득세다. 이 둘은 공시가격보다 실제 거래가와 더 가깝게 움직인다.
취득세는 취득 당시 가액이 기준이다 &nbsp; 취득세는 집을 취득했을 때 내는 지방세다. 매매로 집을 사거나, 분양을 받아 소유권을 취득하거나, 상속·증여로 소유권을 넘겨받을 때 문제가 된다.
매매로 주택을 산 경우에는 보통 실제 매매가격을 기준으로 취득세를 생각하면 된다. 예를 들어 아파트를 7억 원에 매수했다면 취득세 계산의 출발점은 &ldquo;내가 실제로 취득한 가격&quot;이다. 그래서 매수자는 계약서 금액, 잔금일, 주택 수, 조정대상지역 여부, 생애 최초 감면 가능 여부를 함께 확인해야 한다.
생애 최초 주택 구입자라면 취득세 감면 제도도 확인할 필요가 있다. 2026년 기준으로 일정 요건을 충족하는 생애 최초 주택 구입자는 주택 가격 요건과 감면 한도 안에서 취득세 부담을 줄일 수 있다. 다만 감면 제도는 적용 기한, 주택가액, 보유 이력, 전입·거주 요건, 추징 조건이 바뀔 수 있으니 계약 전에는 관할 지자체나 세무 전문가에게 최신 요건을 확인하는 것이 안전하다.
양도소득세는 실제 차익이 핵심이다 &nbsp; 양도소득세는 집을 팔아서 이익이 생겼을 때 내는 세금이다. 기본 구조는 단순하다.
양도가액 - 취득가액 - 필요경비 = 양도차익
여기서 양도가액은 판 가격, 취득가액은 산 가격이다. 즉 양도소득세는 공시가격보다 실제 거래가격과 더 직접적으로 연결된다. 물론 장기보유특별공제, 1세대 1주택 비과세, 보유기간, 거주기간, 다주택 여부 같은 조건이 세액에 큰 영향을 준다.
특히 주택을 팔 때는 &ldquo;얼마에 팔았는가&quot;만 보면 안 된다. 취득가액을 입증할 계약서, 중개보수, 법무사 비용, 취득세, 자본적 지출 등 필요경비로 인정될 수 있는 자료를 챙겨야 한다. 실거래가가 기준이 되더라도 증빙이 약하면 세금 계산에서 불리해질 수 있다.
국토교통부 실거래가 공개시스템에서 확인 &nbsp; 집을 보유할 때는 공시가격이 중요하다 &nbsp; 집을 가지고 있는 동안 매년 신경 써야 하는 세금은 재산세와 종합부동산세다. 이때는 실제로 얼마에 샀는지보다 공시가격이 중요하다.
재산세는 공시가격을 바탕으로 계산한다 &nbsp; 재산세는 매년 6월 1일 현재 주택, 토지, 건축물 등을 보유한 사람에게 부과되는 지방세다. 주택 재산세는 보통 7월과 9월에 나눠 낸다.
주택 재산세는 실거래가에 바로 세율을 곱하지 않는다. 공시가격에 공정시장가액비율을 적용해 과세표준을 만들고, 여기에 세율을 적용하는 흐름이다.
공시가격 × 공정시장가액비율 = 과세표준
과세표준 × 재산세율 = 재산세 본세
예를 들어 내가 8억 원에 산 집이라도 공동주택 공시가격이 5억 원이라면 재산세 계산은 8억 원이 아니라 공시가격 5억 원에서 출발한다. 그래서 실거래가가 크게 올랐더라도 공시가격이 얼마나 반영되었는지에 따라 보유세 부담이 달라진다.
종합부동산세도 공시가격 기준으로 본다 &nbsp; 종합부동산세는 일정 기준을 넘는 부동산 보유자에게 추가로 부과되는 국세다. 재산세처럼 보유세 성격이 있고, 주택의 공시가격 합산액이 중요한 기준이 된다.
실제로는 기본공제, 1세대 1주택 여부, 부부 공동명의, 공정시장가액비율, 세율, 세부담 상한 같은 조건이 복잡하게 얽힌다. 그래서 공시가격이 높아졌다고 해서 종부세가 무조건 같은 비율로 늘어난다고 단정하면 안 된다. 그래도 출발점은 공시가격이라는 점만큼은 기억해두면 좋다.
공시가격은 매년 달라질 수 있다. 집을 보유하고 있다면 매년 공시가격 열람 기간에 내 주택 가격이 어떻게 바뀌었는지 확인하는 습관이 필요하다. 보유세 예상액뿐 아니라 건강보험료, 기초연금, 각종 부담금 판단에도 영향을 줄 수 있기 때문이다.
상속과 증여는 시가 판단이 먼저다 &nbsp; 상속이나 증여에서는 &ldquo;무조건 공시지가로 계산한다&quot;라고 생각하면 위험하다. 상속세와 증여세에서 재산 평가는 원칙적으로 평가기준일 현재의 시가를 따른다. 여기서 시가에는 실제 매매가액뿐 아니라 감정가액, 수용가액, 경매가액, 공매가액 등이 포함될 수 있다.
예를 들어 부모가 자녀에게 아파트를 증여하려고 할 때, 같은 단지 같은 면적의 유사 매매사례가액이 있다면 그 금액이 시가 판단에 반영될 수 있다. 이 경우 단순히 공동주택 공시가격만 보고 증여세를 예상하면 실제 신고 기준과 차이가 날 수 있다.
다만 시가를 산정하기 어려운 경우에는 보충적 평가방법을 쓴다. 이때 토지는 개별공시지가, 주택은 개별주택가격이나 공동주택가격이 활용될 수 있다.
재산 종류 시가 산정이 어려울 때 참고하는 평가 기준 토지 개별공시지가 공동주택 공동주택 공시가격 단독주택 개별주택가격 또는 표준주택가격 오피스텔·상업용 건물 국세청 기준시가 또는 별도 평가 기준 상속과 증여는 금액이 크고, 신고 이후 문제가 발견되면 가산세 부담이 생길 수 있다. 가족 간 거래나 증여를 준비한다면 공시가격만 확인하고 끝내기보다 유사 매매사례가액, 감정평가 필요 여부, 신고기한을 함께 검토하는 것이 좋다.
상황별로 어떤 가격을 보면 될까 &nbsp; 헷갈릴 때는 &ldquo;내가 지금 하려는 일이 거래인지, 보유인지, 평가인지&quot;부터 나누면 쉽다.
상황 먼저 봐야 할 가격 이유 집을 사려는 경우 실거래가 실제 시세, 협상 가격, 취득세 예상에 필요 집을 팔려는 경우 실거래가 양도가액, 양도차익, 양도소득세 계산에 필요 재산세를 예상하는 경우 공시가격 보유세 과세표준의 출발점 종합부동산세를 예상하는 경우 공시가격 주택 공시가격 합산액이 중요 토지 관련 세금을 보는 경우 개별공시지가 토지 가격의 행정 기준 상속·증여를 준비하는 경우 시가 우선, 어려우면 공시가격 등 세법상 재산 평가 원칙이 시가이기 때문 실무적으로는 두 가격을 같이 보는 것이 좋다. 집을 살 때는 실거래가로 시장 가격을 보고, 공시가격으로 향후 보유세 부담을 예상한다. 집을 팔 때는 실거래가로 양도차익을 계산하고, 보유기간과 비과세 요건을 함께 본다. 상속이나 증여를 할 때는 공시가격만 보지 말고 시가로 볼 만한 거래 사례가 있는지 확인한다.
정리 &nbsp; 공시지가와 실거래가는 모두 부동산 가격이지만 쓰임새가 다르다. 실거래가는 실제로 계약이 체결된 가격이고, 공시지가는 정부가 공시하는 토지 가격이다. 주택에서는 공시지가보다 공동주택 공시가격, 개별주택가격이라는 표현이 더 정확하다.
집을 사고팔 때는 취득세와 양도소득세 때문에 실거래가가 중요하다. 집을 보유할 때는 재산세와 종합부동산세 때문에 공시가격이 중요하다. 상속이나 증여에서는 시가 평가가 원칙이고, 시가를 산정하기 어려울 때 공시가격이나 개별공시지가 같은 보충적 평가 기준이 활용된다.
부동산 세금은 용어 하나만 잘못 이해해도 예상 금액이 달라질 수 있다. 계약 전에는 실거래가를 확인하고, 보유 중에는 공시가격을 확인하고, 증여나 상속처럼 금액이 큰 의사결정은 세무 전문가에게 한 번 더 확인하는 것이 현실적인 절세의 출발점이다.
자주 묻는 질문 &nbsp; 공시지가와 공시가격은 같은 말일까? &nbsp; 정확히는 다르다. 공시지가는 토지 가격을 말할 때 쓰는 표현이고, 주택은 공동주택 공시가격이나 개별주택가격이라는 표현이 더 정확하다. 다만 일상에서는 주택 공시가격을 공시지가라고 부르는 경우가 많다.
아파트 재산세는 실거래가로 계산할까? &nbsp; 아니다. 아파트 재산세는 실거래가가 아니라 공동주택 공시가격을 바탕으로 계산한다. 공시가격에 공정시장가액비율을 적용해 과세표준을 만들고, 세율을 적용하는 구조다.
양도소득세는 공시가격으로 계산할까? &nbsp; 일반적인 주택 매매의 양도소득세는 실제 판 가격과 실제 산 가격을 기준으로 양도차익을 계산한다. 다만 취득가액 증빙, 필요경비, 비과세 요건, 보유기간 등에 따라 세액이 달라지므로 계약서와 비용 자료를 잘 보관해야 한다.`}).add({id:37,href:"/posts/korea-stock-tax-guide/",title:"국내 주식 세금 총정리, 양도소득세 배당소득세 증권거래...",description:"국내 주식 투자자가 알아야 할 양도소득세, 배당소득세, 증권거래세를 2026년 기준으로 정리하고 신고 여부와 절세 계좌 활용법까지 쉽게 설명했다.",content:`국내 주식을 처음 시작하면 수익률과 종목만 보게 된다. 그런데 실제로 계좌를 오래 굴리다 보면 세금도 수익률에 영향을 준다. 주식을 팔 때 빠져나가는 세금이 있고, 배당금을 받을 때 원천징수되는 세금이 있으며, 특정 조건에 해당하면 직접 신고해야 하는 세금도 있다.
국내 주식 세금은 크게 세 가지로 나누면 이해하기 쉽다. 주식을 팔아 이익이 났을 때 보는 양도소득세, 배당금을 받을 때 붙는 배당소득세, 주식을 매도할 때 거래금액에 붙는 증권거래세 다.
대부분의 일반 개인 투자자는 국내 상장주식을 장내에서 사고팔 때 양도소득세를 크게 신경 쓰지 않는 경우가 많다. 하지만 배당소득세와 증권거래세는 소액 투자자에게도 바로 적용된다. 이 글에서는 국내 주식 투자자가 꼭 알아야 할 세금 구조를 초보자 기준으로 정리하였다.
국내 주식 세금은 세 가지로 보면 된다 &nbsp; 국내 주식 투자에서 자주 만나는 세금은 아래처럼 정리할 수 있다.
세금 언제 내는가 일반 개인 투자자에게 중요한 점 양도소득세 주식을 팔아 차익이 생겼을 때 국내 상장주식은 보통 대주주 중심으로 과세된다 배당소득세 배당금을 받을 때 배당금 지급 시 15.4%가 원천징수된다 증권거래세 주식을 팔 때 손실이 나도 매도금액 기준으로 부과된다 여기서 가장 헷갈리는 부분은 &ldquo;주식으로 돈을 벌면 무조건 양도소득세를 내는가&quot;라는 질문이다. 해외 주식은 연간 양도차익이 기본공제 250만 원을 넘으면 양도소득세 문제가 생긴다. 반면 국내 상장주식은 일반적인 소액주주가 코스피나 코스닥 시장에서 거래하는 경우 양도소득세를 내지 않는 구조에 가깝다.
다만 &ldquo;국내 주식은 세금이 없다&quot;라고 이해하면 틀리다. 배당을 받으면 배당소득세가 붙고, 주식을 팔면 증권거래세가 붙는다. 또 대주주, 비상장주식, 장외거래처럼 조건이 달라지면 양도소득세 신고 대상이 될 수 있다.
세금은 투자 성과를 계산할 때 마지막에 남는 돈을 바꾼다. 매매 차익만 보고 &ldquo;10만 원 벌었다&quot;라고 생각했는데, 실제로는 거래세와 배당세, 수수료까지 반영하면 체감 수익률이 달라질 수 있다.
양도소득세는 대부분 대주주가 신경 써야 한다 &nbsp; 양도소득세는 주식을 산 가격보다 비싸게 팔아 이익이 생겼을 때 내는 세금이다. 예를 들어 1,000만 원에 산 주식을 1,300만 원에 팔았다면 차익 300만 원이 생긴다. 이 차익에 대해 과세하는 세금이 양도소득세다.
하지만 국내 상장주식은 모든 개인 투자자에게 똑같이 양도소득세를 매기지 않는다. 일반적으로 코스피, 코스닥, 코넥스 같은 시장에서 거래하는 소액주주는 양도소득세 과세 대상이 아닌 경우가 많다. 그래서 많은 투자자가 국내 주식 매매 차익에 대해 별도 신고를 하지 않는다.
문제는 대주주에 해당할 때다. 특정 종목을 많이 보유하고 있거나 지분율이 높은 투자자는 양도소득세 대상이 될 수 있다.
대주주 기준은 금액과 지분율을 함께 본다 &nbsp; 국내 주식 대주주 여부는 보유 금액과 지분율을 함께 본다. 일반적으로 2024년 1월 1일 이후 양도분 기준으로 상장주식은 종목별 보유금액 50억 원 이상이 중요한 기준으로 쓰인다. 시장별 지분율 기준도 따로 있다.
시장 대주주 판단 기준 코스피 지분율 1% 이상 또는 종목별 50억 원 이상 코스닥 지분율 2% 이상 또는 종목별 50억 원 이상 코넥스 지분율 4% 이상 또는 종목별 50억 원 이상 비상장주식 지분율 4% 이상 또는 10억 원 이상 예를 들어 한 종목을 1억 원 정도 보유한 일반 투자자라면 대주주 기준과 거리가 멀다. 하지만 특정 종목을 수십억 원 이상 보유하거나, 유통 주식 수가 작은 회사의 지분을 많이 가지고 있다면 대주주 여부를 확인해야 한다.
대주주 기준은 본인만 보면 끝나는 문제가 아닐 수 있다. 세법상 특수관계인 보유분을 함께 판단하는 경우가 있으므로, 큰 금액을 운용한다면 증권사 안내나 세무 전문가 확인을 받는 편이 안전하다.
대주주 양도소득세율은 차익 규모에 따라 달라진다 &nbsp; 대주주가 국내 주식을 팔아 양도차익을 얻으면 기본공제 250만 원을 차감한 뒤 세율을 적용한다. 일반적인 경우 지방소득세를 포함해 과세표준 3억 원 이하는 22%, 3억 원 초과분은 27.5%로 이해하면 된다.
과세표준 세율 3억 원 이하 22% 3억 원 초과 27.5% 다만 중소기업 주식, 보유기간, 비상장주식 여부 등에 따라 세율이 달라질 수 있다. 특히 대주주가 중소기업이 아닌 법인의 주식을 1년 미만 보유하고 양도하는 경우에는 더 높은 세율이 적용될 수 있다.
장외거래와 비상장주식은 일반 투자자도 주의해야 한다 &nbsp; 국내 상장주식을 정규 시장에서 거래하는 소액주주는 양도소득세 부담이 크지 않다. 하지만 장외거래나 비상장주식 거래는 이야기가 달라진다.
상장주식을 코스피, 코스닥, 코넥스 같은 증권시장 밖에서 거래하거나 비상장주식을 양도하면 대주주가 아니더라도 양도소득세 대상이 될 수 있다. 비상장주식은 스타트업, 우리사주, 스톡옵션, 가족 간 주식 거래처럼 일반 투자자도 마주칠 수 있는 영역이다.
예를 들어 지인 회사의 비상장주식을 샀다가 나중에 다른 사람에게 팔아 차익이 생겼다면 단순히 증권 앱에서 매매한 국내 주식과 다르게 신고 의무가 생길 수 있다. 이런 거래는 금액이 작아도 세금 처리를 확인해야 한다.
양도소득세 신고는 보통 양도일이 속하는 반기의 말일부터 2개월 안에 예정신고를 하고, 필요한 경우 다음 해 5월 확정신고로 정리한다. 홈택스를 이용하거나 세무서를 통해 신고할 수 있다.
배당소득세는 배당금을 받을 때 자동으로 빠진다 &nbsp; 배당은 회사가 벌어들인 이익 일부를 주주에게 나누어주는 것이다. 삼성전자, 현대차, 금융주, 리츠, 고배당 ETF처럼 배당을 주는 종목을 보유하면 배당금이 계좌로 들어온다.
이때 계좌에 찍히는 금액은 세금을 뗀 뒤의 금액인 경우가 많다. 국내 주식 배당소득세는 소득세 14%와 지방소득세 1.4%를 합쳐 총 15.4%가 원천징수된다.
예를 들어 배당금이 100,000원이라면 세금은 15,400원이고 실제 입금액은 84,600원이다.
배당금 100,000원 배당소득세 15,400원 실제 입금액 84,600원배당소득세는 보통 투자자가 따로 신고하지 않아도 된다. 배당금을 지급하는 과정에서 세금이 먼저 빠져나가기 때문이다. 이것을 원천징수라고 한다.
금융소득이 2,000만 원을 넘으면 종합과세를 확인해야 한다 &nbsp; 배당소득세가 원천징수된다고 해서 언제나 세금 문제가 끝나는 것은 아니다. 이자소득과 배당소득을 합친 금융소득이 연간 2,000만 원을 넘으면 금융소득종합과세 대상이 될 수 있다.
금융소득종합과세 대상이 되면 초과 금융소득이 근로소득, 사업소득 등 다른 소득과 합산되어 종합소득세율로 과세된다. 종합소득세율은 소득 구간에 따라 달라지기 때문에 고소득자일수록 세 부담이 커질 수 있다.
예를 들어 고배당주와 예금 이자를 합쳐 1년에 1,500만 원을 받는 투자자라면 보통 원천징수로 정리되는 경우가 많다. 하지만 배당과 이자를 합쳐 2,500만 원을 받는다면 다음 해 5월 종합소득세 신고 여부를 확인해야 한다.
배당 투자를 크게 하는 사람은 세후 배당률을 봐야 한다. 표면 배당률이 6%라도 15.4% 세금을 반영하면 실제로 손에 남는 배당률은 낮아진다.
ISA를 활용하면 배당세 부담을 줄일 수 있다 &nbsp; 배당소득세를 줄이는 대표적인 방법 중 하나가 ISA, 즉 개인종합자산관리계좌다. ISA 계좌에서는 일정 한도까지 이자와 배당소득에 비과세 혜택이 적용되고, 초과분도 일반 배당소득세보다 낮은 분리과세 혜택을 받을 수 있다.
일반형 ISA는 순이익 200만 원까지, 서민형이나 농어민형은 순이익 400만 원까지 비과세 혜택이 적용되는 구조로 이해하면 쉽다. 이를 초과한 금액은 9.9% 분리과세가 적용될 수 있다.
예를 들어 배당 ETF를 장기 보유할 생각이라면 일반 위탁계좌와 ISA 계좌의 세후 수익률이 달라질 수 있다. 다만 ISA는 가입 조건, 납입 한도, 의무가입기간, 투자 가능 상품에 제한이 있으므로 계좌를 만들기 전에 본인 조건을 확인해야 한다.
증권거래세는 손실이 나도 매도할 때 낸다 &nbsp; 증권거래세는 주식을 팔 때 내는 세금이다. 양도소득세는 이익이 났는지를 보지만, 증권거래세는 매도 거래 자체에 붙는다. 그래서 손실을 보고 팔아도 증권거래세는 빠져나간다.
예를 들어 1,000만 원에 산 주식을 900만 원에 팔아 100만 원 손실이 났다고 해도, 매도금액 900만 원을 기준으로 증권거래세가 계산된다. 투자자는 &ldquo;손해 봤는데 세금까지 냈다&quot;라고 느낄 수 있지만, 증권거래세는 거래세라서 이런 구조를 가진다.
2026년 기준 국내 주요 시장의 증권거래세율은 아래처럼 보면 된다.
시장 2026년 기준 세율 코스피 0.20% 코스닥 0.20% K-OTC 0.20% 코넥스 0.10% 비상장주식 및 상장주식 장외거래 0.35% 코스피는 증권거래세 0.05%에 농어촌특별세 0.15%가 붙어 투자자가 체감하는 합계가 0.20%가 된다. 코스닥과 K-OTC는 0.20%, 코넥스는 0.10%로 보면 된다.
2025년에는 코스피와 코스닥 기준 0.15%였지만, 2026년 1월 1일 이후 양도분부터는 코스피와 코스닥 모두 합계 0.20% 수준으로 이해하는 것이 맞다. 세금 글을 볼 때 작성 시점이 중요한 이유가 여기에 있다.
잦은 매매를 하면 거래세가 수익률을 깎는다 &nbsp; 증권거래세는 한 번 보면 작아 보인다. 0.20%라는 숫자는 별것 아닌 것처럼 느껴진다. 하지만 매매를 자주 하면 이야기가 달라진다.
예를 들어 1,000만 원어치 주식을 팔면 증권거래세는 대략 20,000원이다.
10,000,000원 x 0.20% = 20,000원한 달에 몇 번만 매매하면 크게 느껴지지 않을 수 있다. 하지만 단기 매매를 반복하면 증권거래세와 수수료가 계속 누적된다. 특히 수익률이 작게 나는 단타 매매에서는 세금과 수수료를 빼고 나면 실제 수익이 기대보다 줄어들 수 있다.
그래서 투자 성과를 볼 때는 매매 차익만 보지 말고 세후 수익률을 봐야 한다. 장기투자가 무조건 정답이라는 뜻은 아니지만, 잦은 매매에는 비용이 따른다는 점은 분명하다.
투자자가 실제로 확인해야 할 체크리스트 &nbsp; 국내 주식 세금은 복잡해 보이지만, 일반 투자자는 아래 질문부터 확인하면 된다.
내가 보유한 특정 종목 금액이 대주주 기준에 가까운가? 비상장주식이나 장외거래를 한 적이 있는가? 배당과 이자를 합친 금융소득이 연 2,000만 원을 넘는가? 배당 투자를 많이 한다면 ISA 같은 절세 계좌를 활용하고 있는가? 잦은 매매로 증권거래세와 수수료가 계속 빠져나가고 있지는 않은가? 대부분의 초보 투자자는 1번과 2번보다 3번, 4번, 5번이 더 현실적이다. 배당금을 받을 때 15.4%가 빠지는지, 금융소득이 커질 가능성이 있는지, 매매를 너무 자주 해서 거래비용을 키우고 있지는 않은지부터 점검하면 된다.
세금은 투자 판단의 전부는 아니다. 좋은 기업을 적정 가격에 사고 오래 보유하는 것이 더 중요할 때가 많다. 하지만 세금을 전혀 고려하지 않으면 같은 수익률을 올려도 실제 손에 남는 돈이 달라진다.
특히 배당 투자자는 &ldquo;세전 배당률&quot;과 &ldquo;세후 배당률&quot;을 구분해야 한다. 단기 매매를 자주 하는 투자자는 매도할 때마다 거래세가 붙는다는 점을 계산해야 한다. 비상장주식이나 큰 금액을 다루는 투자자는 양도소득세 신고 의무를 놓치지 않아야 한다.
마무리 &nbsp; 국내 주식 세금은 양도소득세, 배당소득세, 증권거래세 세 가지로 나누면 훨씬 쉽게 이해할 수 있다. 일반 개인 투자자는 국내 상장주식 양도소득세보다 배당소득세와 증권거래세를 더 자주 체감한다.
양도소득세는 대주주, 비상장주식, 장외거래 여부를 확인해야 한다. 배당소득세는 배당금 지급 시 15.4%가 원천징수되고, 금융소득이 연 2,000만 원을 넘으면 종합과세를 확인해야 한다. 증권거래세는 수익과 손실에 관계없이 매도할 때 부과되며, 2026년 기준 코스피와 코스닥은 합계 0.20% 수준으로 보면 된다.
주식투자는 세전 수익률이 아니라 세후 수익률이 내 돈이다. 종목을 고르는 것만큼 세금이 언제, 얼마나, 어떤 방식으로 빠져나가는지 이해해두면 투자 계획을 더 현실적으로 세울 수 있다.
자주 묻는 질문 &nbsp; 국내 주식으로 수익을 내면 무조건 양도소득세를 내야 할까? &nbsp; 아니다. 국내 상장주식을 정규 시장에서 거래하는 일반 소액주주는 보통 양도소득세를 내지 않는 경우가 많다. 다만 대주주에 해당하거나 비상장주식, 장외거래를 했다면 양도소득세 대상이 될 수 있다.
배당소득세는 따로 신고해야 할까? &nbsp; 대부분은 따로 신고하지 않는다. 배당금이 지급될 때 15.4%가 원천징수되기 때문이다. 다만 이자소득과 배당소득을 합친 금융소득이 연간 2,000만 원을 넘으면 다음 해 5월 종합소득세 신고 여부를 확인해야 한다.
주식을 손해 보고 팔아도 증권거래세를 내야 할까? &nbsp; 내야 한다. 증권거래세는 이익이 아니라 매도 거래금액에 붙는 세금이다. 손실을 보고 팔아도 매도금액을 기준으로 세금이 계산되므로 잦은 매매를 할수록 거래비용이 누적될 수 있다.`}).add({id:38,href:"/posts/gross-domestic-product-gdp/",title:"국내총생산 GDP 뜻 쉽게 정리, 명목GDP와 실질GD...",description:"국내총생산 GDP의 뜻과 계산 개념, 명목GDP와 실질GDP의 차이, 1인당 GDP와 GNI까지 초보자도 이해하기 쉽게 정리했다.",content:`경제 뉴스를 보다 보면 GDP라는 단어가 정말 자주 나온다. &ldquo;한국 GDP 성장률&rdquo;, &ldquo;1인당 GDP&rdquo;, &ldquo;명목 GDP&rdquo;, &ldquo;실질 GDP&rdquo; 같은 표현이 계속 등장한다.
처음에는 대충 나라 경제 규모를 말하는 것 같지만, 막상 설명하려고 하면 헷갈린다. 국내총생산이라는 말도 어렵고, 명목과 실질로 나뉘면 더 복잡하게 느껴진다.
GDP는 경제를 공부할 때 가장 먼저 알아야 하는 기본 지표다. 한 나라가 일정 기간 동안 얼마나 많은 가치를 만들어냈는지 보여주기 때문이다. 이 글에서는 GDP의 뜻부터 명목GDP와 실질GDP의 차이, GNI와의 관계까지 최대한 쉽게 정리하였다.
국내총생산 GDP란 무엇인가 &nbsp; GDP는 Gross Domestic Product의 약자이고, 한국어로는 국내총생산이라고 한다. 쉽게 말하면 한 나라 안에서 일정 기간 동안 새롭게 만들어진 최종 생산물과 서비스의 시장가치 합계 다.
여기서 중요한 표현은 세 가지다.
한 나라 안에서 일정 기간 동안 최종 생산물과 서비스 &ldquo;한 나라 안에서&quot;라는 말은 국적보다 장소가 중요하다는 뜻이다. 한국 기업이든 외국 기업이든 한국 안에서 생산활동을 해서 가치를 만들었다면 한국 GDP에 포함된다. 반대로 한국 기업이 해외 공장에서 생산한 것은 한국 GDP가 아니라 그 나라 GDP에 들어간다.
&ldquo;일정 기간 동안&quot;은 보통 1년 또는 분기를 말한다. 그래서 경제성장률을 볼 때 전년 대비, 전분기 대비 같은 표현이 나온다.
&ldquo;최종 생산물과 서비스&quot;라는 말도 중요하다. 빵을 만들 때 밀가루 가격까지 따로 더하고, 완성된 빵 가격도 또 더하면 중복 계산이 된다. 그래서 GDP는 최종적으로 팔리는 재화와 서비스의 가치 중심으로 계산한다.
GDP가 경제 규모를 보여주는 이유 &nbsp; GDP는 한 나라의 경제 체력을 보는 대표적인 숫자다. 가계, 기업, 정부 등 경제주체가 생산활동에 참여해서 만든 부가가치를 합친 것이기 때문이다.
예를 들어 어떤 나라에서 자동차, 반도체, 음식, 병원 진료, 교육 서비스, 운송 서비스 등이 많이 생산되고 거래된다면 GDP도 커진다. 그만큼 경제 안에서 만들어지는 가치가 많다는 뜻이다.
국가지표체계 설명에 따르면 GDP는 한 국가의 전반적인 생산활동 수준과 경제규모를 나타내는 지표다. 한국의 GDP도 장기적으로 꾸준히 증가해 왔고, 2010년에 1,000조 원을 넘었으며 2012년에는 미국 달러 기준 1조 달러를 넘어섰다.
다만 GDP가 크다고 해서 모든 국민이 똑같이 잘산다는 뜻은 아니다. GDP는 나라 전체의 생산 규모를 보여주는 숫자이지, 소득 분배나 삶의 만족도까지 직접 보여주는 지표는 아니다.
그래서 GDP는 경제의 큰 흐름을 보는 출발점으로 쓰는 것이 좋다. 경제가 커지고 있는지, 성장 속도가 둔화되는지, 물가를 제외한 실제 생산량이 늘었는지 같은 질문에 답할 때 특히 유용하다.
명목GDP와 실질GDP의 차이 &nbsp; GDP를 이해할 때 가장 많이 헷갈리는 부분이 명목GDP와 실질GDP다. 둘 다 GDP지만 쓰임새가 다르다.
명목GDP &nbsp; 명목GDP는 그해의 생산량에 그해의 시장가격을 곱해서 계산한다. 현재 가격을 그대로 반영하기 때문에 물가 상승의 영향이 포함된다.
예를 들어 작년에 빵 100개를 개당 1,000원에 팔았다면 생산액은 10만 원이다. 올해도 빵 100개를 팔았는데 가격이 개당 1,200원으로 올랐다면 생산액은 12만 원이 된다.
이 경우 생산량은 그대로인데 가격이 올라서 명목GDP는 증가한다. 그래서 명목GDP는 국가경제의 전체 규모나 산업 구조를 파악할 때 주로 사용된다.
실질GDP &nbsp; 실질GDP는 물가 변동을 제거한 GDP다. 당해 연도 생산량에 기준 연도 가격을 적용해서 계산한다.
위의 빵 예시에서 올해도 빵을 100개만 만들었다면, 가격이 올랐더라도 실제 생산량은 늘지 않았다. 실질GDP는 이런 점을 보정해서 &ldquo;정말 생산이 늘었는가&quot;를 보게 해준다.
그래서 경제성장률이나 경기 흐름을 볼 때는 실질GDP가 더 중요하게 쓰인다. 물가 때문에 숫자만 커진 것인지, 실제로 생산과 소비가 늘어난 것인지 구분해야 하기 때문이다.
간단히 정리하면 이렇다.
구분 의미 주로 보는 목적 명목GDP 현재 가격으로 계산한 GDP 경제 규모, 산업 구조 실질GDP 물가 영향을 제거한 GDP 경제성장, 경기 흐름 1인당 GDP와 체감 소득이 다른 이유 &nbsp; 뉴스에서는 1인당 GDP도 자주 나온다. 1인당 GDP는 나라 전체 GDP를 인구수로 나눈 값이다. 국민 한 사람이 평균적으로 얼마만큼의 생산 가치를 만들어낸 셈인지 보여준다.
하지만 1인당 GDP를 내 월급이나 가계소득처럼 이해하면 오해가 생긴다. 1인당 GDP는 실제로 국민 한 명에게 그 돈이 입금된다는 뜻이 아니다.
GDP에는 기업이 벌어들인 이윤, 감가상각, 법인세, 간접세 같은 항목도 포함된다. 그래서 가계가 실제로 가져가는 소득보다 1인당 GDP가 더 크게 보일 수 있다.
예를 들어 나라 전체에서 기업 생산과 투자가 크게 늘면 GDP는 올라갈 수 있다. 하지만 그 이익이 임금이나 가계소득으로 바로 연결되지 않으면 개인이 체감하는 생활은 크게 달라지지 않을 수 있다.
이 때문에 GDP를 볼 때는 다음 지표도 함께 보는 것이 좋다.
경제성장률 물가상승률 실업률 가계소득 소득분배 지표 GDP는 중요한 지표지만, 경제 전체를 한 번에 설명하는 만능 숫자는 아니다.
GDP와 GNI는 어떻게 다를까 &nbsp; GDP와 함께 자주 나오는 용어가 GNI다. GNI는 국민총소득을 뜻한다. GDP가 &ldquo;국내에서 생산된 가치&quot;를 본다면, GNI는 &ldquo;국민이 벌어들인 소득&quot;에 더 초점을 둔다.
차이를 쉽게 말하면 기준이 다르다.
GDP: 장소 기준 GNI: 국민 기준 외국인이 한국 안에서 벌어간 소득은 한국 GDP에는 포함될 수 있지만, 한국 국민의 소득인 GNI와는 다르게 처리된다. 반대로 한국 국민이나 한국 기업이 해외에서 벌어들인 소득은 GDP보다는 GNI와 연결해서 보는 것이 더 자연스럽다.
그래서 나라 안에서 얼마나 생산했는지를 보고 싶으면 GDP를 보고, 국민이 실제로 벌어들인 소득 흐름을 보고 싶으면 GNI도 함께 확인하는 것이 좋다.
초보자 입장에서는 이렇게 기억하면 된다. GDP는 경제 규모를 보는 대표 지표이고, GNI는 국민 소득에 더 가까운 지표다.
정리: GDP는 경제를 읽는 가장 기본적인 숫자다 &nbsp; 국내총생산 GDP는 한 나라 안에서 일정 기간 동안 만들어진 최종 생산물과 서비스의 시장가치를 합한 것이다. 경제 뉴스에서 GDP가 계속 등장하는 이유는 그만큼 한 나라의 생산활동 수준과 경제 규모를 파악하는 데 기본이 되는 지표이기 때문이다.
핵심만 다시 정리하면 이렇다.
GDP는 국내에서 만들어진 최종 생산물과 서비스의 가치 합계다. 명목GDP는 현재 가격을 반영한 숫자라 경제 규모를 볼 때 유용하다. 실질GDP는 물가 영향을 제거한 숫자라 경제성장률과 경기 흐름을 볼 때 중요하다. 1인당 GDP는 평균 생산 규모를 보여주지만 개인의 실제 소득과 같지는 않다. GNI는 국민이 벌어들인 소득을 볼 때 함께 참고하면 좋다. 경제 공부를 시작했다면 GDP를 어렵게 외우기보다 &ldquo;나라 안에서 새롭게 만든 가치의 총합&quot;이라고 먼저 이해하면 된다. 그다음 명목GDP와 실질GDP를 구분할 수 있으면 경제 기사 읽기가 훨씬 쉬워진다.
자주 묻는 질문 &nbsp; GDP가 높으면 무조건 잘사는 나라일까? &nbsp; 무조건 그렇지는 않다. GDP가 높다는 것은 경제 규모가 크다는 뜻이지만, 소득 분배, 물가, 복지, 생활비, 삶의 질까지 모두 설명하지는 못한다.
경제성장률은 명목GDP로 계산할까, 실질GDP로 계산할까? &nbsp; 일반적으로 경제성장률을 볼 때는 실질GDP 증가율을 중요하게 본다. 물가 상승으로 숫자만 커진 것이 아니라 실제 생산량이 늘었는지를 봐야 하기 때문이다.
GDP와 GNI 중 무엇을 봐야 할까? &nbsp; 경제 규모와 생산활동을 보고 싶다면 GDP가 기본이다. 국민이 벌어들인 소득 흐름을 더 보고 싶다면 GNI를 함께 보면 된다.`}).add({id:39,href:"/posts/national-growth-fund/",title:"국민성장펀드란? 2026년 판매 일정, 투자 방법, 세...",description:"2026년 국민참여형 국민성장펀드의 판매 일정, 투자 대상, 가입 방법, 소득공제와 분리과세 혜택, 손실 우선부담 구조를 쉽게 정리했다.",content:`투자를 하다 보면 늘 같은 고민이 생긴다. 예금보다 높은 수익은 기대하고 싶은데, 막상 원금이 크게 흔들릴 가능성을 생각하면 선뜻 돈을 넣기 어렵다. 특히 펀드는 투자 대상과 구조가 복잡해 보이고, 세금까지 따져야 해서 초보자에게는 더 어렵게 느껴진다.
2026년에 판매되는 국민참여형 국민성장펀드는 이런 고민 때문에 관심을 받고 있다. 정부가 추진하는 국민성장펀드의 일부를 일반 국민도 투자할 수 있게 만든 상품이고, 첨단전략산업에 투자하면서 소득공제와 분리과세 혜택까지 붙어 있다.
다만 이름만 보고 &ldquo;정부가 원금을 보장해주는 안전한 상품&quot;이라고 이해하면 곤란하다. 이 펀드는 예금자보호가 되는 예금이 아니라 투자상품이다. 손실을 줄여주는 구조는 있지만, 손실 가능성 자체가 사라지는 것은 아니다. 그래서 가입 전에는 판매 일정, 한도, 세제 혜택, 환매 제한을 같이 봐야 한다.
국민성장펀드는 무엇에 투자하는 펀드일까 &nbsp; 국민성장펀드는 정부가 첨단전략산업 육성을 위해 조성하는 대규모 정책 펀드다. 5년간 총 150조원 규모의 자금을 첨단산업 생태계에 공급하는 것을 목표로 하고, 2026년에는 30조원 공급 계획이 잡혀 있다.
이 중 일반 투자자가 가입할 수 있는 상품이 국민참여형 국민성장펀드다. 전체 국민성장펀드 중 간접투자 방식의 일부를 공모펀드 형태로 판매하는 구조라고 보면 된다. 2026년 국민참여형 상품은 국민 모집액 6,000억원과 손실 우선부담 목적의 재정 1,200억원을 합쳐 총 7,200억원 조성을 목표로 한다.
투자 대상은 반도체, 이차전지, 백신, 디스플레이, 수소, 미래차, 바이오, AI, 방산, 로봇, 콘텐츠, 핵심광물 등 12개 첨단전략산업과 관련 기업이다. 단순히 이미 큰 기업의 주식을 사는 데 그치지 않고, 비상장기업이나 코스닥 기술특례상장사에도 신규 자금을 공급하는 방식이 포함된다.
구조는 조금 복잡하다. 일반 국민이 가입한 공모펀드가 모펀드 역할을 하고, 이 돈이 여러 자펀드에 나뉘어 투자된다. 자펀드 운용사는 총 10개사가 선정되었고, 투자자는 3개 공모펀드 운용사 상품 중 하나를 통해 가입한다. 어느 공모펀드에 가입하더라도 기본적으로 같은 자펀드 포트폴리오의 성과를 공유하는 구조다.
2026년 판매 일정과 가입 방법 &nbsp; 2026년 국민참여형 국민성장펀드는 2026년 5월 22일 금요일부터 6월 11일 목요일까지 3주간 판매될 예정이다. 선착순 판매 방식이라 6,000억원 물량이 먼저 소진되면 조기 마감될 수 있다.
판매사는 은행 10곳과 증권사 15곳, 총 25곳이다. 영업점 현장과 온라인에서 동시에 판매되며, 일반적인 판매 시간은 판매사 영업시간인 오전 9시부터 오후 4시 전후로 보면 된다. 실제 판매 가능 시간과 앱 메뉴는 판매사마다 다를 수 있으니 가입하려는 금융사 공지를 확인해야 한다.
공모펀드 운용사는 미래에셋자산운용, 삼성자산운용, KB자산운용 3곳이다. 판매사는 운용사별로 나뉜다.
공모펀드 운용사 주요 판매사 미래에셋자산운용 부산은행, 우리은행, 하나은행, NH투자증권, 미래에셋증권, 유안타증권 삼성자산운용 경남은행, 광주은행, 농협은행, 신한은행, 메리츠증권, 삼성증권, 신한투자증권, 우리투자증권, 하나증권 KB자산운용 국민은행, 기업은행, 아이엠뱅크, KB증권, 대신증권, 신영증권, 아이엠증권, 키움증권, 한국투자증권, 한화투자증권 세제 혜택을 받으려면 일반 계좌가 아니라 국민참여성장펀드 전용계좌 를 통해 가입해야 한다. 전용계좌는 복수 판매사에 만들 수 있지만, 전용계좌 전체 투자한도는 5년간 2억원이다. 2026년 판매분은 더 많은 사람이 참여할 수 있도록 1인당 연간 1억원 한도로 설정될 예정이다.
세제 혜택 없이 일반계좌로도 가입할 수는 있다. 이 경우 일반계좌 투자한도는 1인당 연간 3,000만원으로 예정되어 있다. 하지만 이 상품의 핵심 장점이 세금 혜택이라는 점을 생각하면, 요건을 충족하는 투자자는 전용계좌 가입 가능 여부부터 확인하는 편이 낫다.
핵심 혜택은 손실 우선부담, 소득공제, 분리과세다 &nbsp; 국민참여형 국민성장펀드가 주목받는 이유는 크게 세 가지다. 손실 우선부담 구조, 투자금액별 소득공제, 배당소득 분리과세다.
첫째, 재정이 각 자펀드에 후순위 출자자로 참여해 각 자펀드별로 20% 범위에서 손실을 먼저 부담하는 구조가 있다. 쉽게 말해 자펀드에서 손실이 발생했을 때 정부 재정이 일반 투자자보다 뒤쪽에서 손실을 먼저 맞는 형태다.
다만 이것을 &ldquo;내 투자원금의 20%가 무조건 보호된다&quot;라고 단순하게 받아들이면 안 된다. 손실 우선부담은 자펀드 단위로 적용되는 구조이고, 펀드 전체 운용 결과와 비용, 상장 후 거래 가격, 양도 시점 등에 따라 실제 투자자 손익은 달라질 수 있다. 예금자보호 상품도 아니므로 원금보장이라는 표현은 피하는 게 맞다.
둘째, 투자금액에 따라 소득공제를 받을 수 있다. 공식 발표 기준 소득공제율은 다음과 같다.
투자금액 구간 소득공제율 3,000만원 이하 40% 3,000만원 초과 5,000만원 이하 20% 5,000만원 초과 7,000만원 이하 10% 최대 소득공제액은 1,800만원이다. 예를 들어 3,000만원을 투자하면 40%인 1,200만원이 소득공제 대상이 된다. 7,000만원을 투자하면 3,000만원 구간 1,200만원, 다음 2,000만원 구간 400만원, 마지막 2,000만원 구간 200만원을 합쳐 총 1,800만원이 소득공제 대상이 되는 식이다.
소득공제는 세금을 그대로 돌려주는 세액공제와 다르다. 내 과세표준에서 일정 금액을 빼주는 방식이라 실제 절세액은 본인의 소득세율에 따라 달라진다. 소득이 높아 높은 세율을 적용받는 사람일수록 같은 소득공제액의 절세 효과가 커진다.
셋째, 배당소득에 대해 투자일로부터 5년간 9% 분리과세 혜택이 적용된다. 지방소득세까지 포함하면 흔히 9.9% 수준으로 이해하면 된다. 일반적인 배당소득 원천징수세율 15.4%와 비교하면 세율이 낮고, 분리과세라 금융소득종합과세 부담을 줄이는 데도 도움이 될 수 있다.
가입 전 반드시 확인해야 할 조건 &nbsp; 국민참여형 국민성장펀드는 혜택이 큰 대신 조건도 분명하다. 먼저 세제 혜택을 받는 전용계좌는 19세 이상인 사람 또는 15세 이상 근로소득자 가 가입할 수 있다. 그리고 펀드 출시 연도 직전 3개년 중 한 번이라도 금융소득종합과세자에 해당했다면 전용계좌 가입이 불가능하다.
금융소득종합과세자는 이자와 배당 등 금융소득이 연간 2,000만원을 넘는 경우를 말한다. 평소 예금 이자나 배당이 많았던 사람이라면 가입 전에 본인이 해당되는지 확인해야 한다.
또 하나 중요한 점은 소득증빙 서류다. 판매 물량 중 20% 이상은 서민 전용으로 배정된다. 2026년 판매분에서는 전체 6,000억원 중 1,200억원이 판매기간 첫 2주 동안 서민 전용 물량으로 배정될 예정이다. 서민 기준은 서민형 ISA 요건과 같아서 근로소득 5,000만원 이하, 근로소득 외 종합소득이 있으면 종합소득 3,800만원 이하 기준이 적용된다.
이 때문에 모든 가입자는 가입할 때 소득확인증명서 또는 증명서 발급 번호를 제출해야 한다. 국세청 홈택스나 정부24에서 &ldquo;개인종합자산관리계좌 가입용 소득확인증명서&quot;를 발급받는 방식이다.
환매 제한도 크다. 국민참여형 국민성장펀드는 만기 5년의 환매금지형 펀드 로 설계된다. 5년 동안 중도 환매가 불가능하다. 펀드가 설정된 뒤 거래소에 상장되면 매도는 가능하지만, 거래가 활발하지 않을 수 있고 기준가격보다 낮은 가격에 거래될 수 있다.
특히 투자 후 3년 이내에 양도하면 감면받은 세액 상당액이 추징될 수 있다. 결국 이 상품은 단기 자금이나 비상금으로 접근할 상품이 아니다. 최소 5년 동안 묶여도 괜찮은 여유자금으로 검토해야 한다.
어떤 사람에게 맞고, 어떤 사람에게는 애매할까 &nbsp; 국민참여형 국민성장펀드는 세제 혜택을 활용할 수 있고 장기 투자 기간을 감당할 수 있는 사람에게 유리하다. 특히 이미 ISA, 연금저축, IRP 같은 절세 계좌를 어느 정도 활용하고 있고, 추가로 소득공제와 분리과세 혜택을 찾는 투자자라면 검토할 만하다.
반대로 1~2년 안에 써야 할 돈이라면 맞지 않는다. 결혼, 전세, 주택 구입, 사업 자금처럼 사용 시점이 정해져 있는 돈을 넣으면 유동성 문제가 생길 수 있다. 상장 후 양도가 가능하더라도 원하는 가격에 팔 수 있다는 보장이 없다.
투자 성향도 중요하다. 손실 우선부담 구조가 있다고 해도 이 상품은 첨단전략산업에 투자하는 펀드다. 비상장기업, 코스닥 기술기업, 메자닌 투자 등이 포함될 수 있어 일반 예금이나 채권형 상품보다 변동성이 클 수 있다. &ldquo;정부가 만든 상품이니 안전하겠지&quot;라는 생각만으로 가입하면 기대와 실제 경험이 달라질 수 있다.
가입 금액은 세제 구간을 기준으로 생각해볼 수 있다. 가장 단순한 기준은 3,000만원 이하 구간이다. 이 구간은 소득공제율이 40%로 가장 높다. 더 큰 금액을 넣을수록 공제율은 낮아지지만, 7,000만원까지는 소득공제액이 늘어난다. 다만 절세액만 보고 금액을 키우기보다 5년간 묶어둘 수 있는지부터 따져야 한다.
개인적으로는 이런 상품을 볼 때 &ldquo;혜택이 얼마인가&quot;보다 &ldquo;내 돈의 사용 시점과 맞는가&quot;를 먼저 본다. 혜택이 좋아도 중간에 돈이 필요해 낮은 가격에 팔거나 세제 혜택을 반납하게 되면 전체 계산이 흐트러진다. 장기 여유자금, 세금효과, 투자위험을 함께 놓고 봐야 한다.
정리하면 &nbsp; 국민참여형 국민성장펀드는 2026년 5월 22일부터 6월 11일까지 3주간 판매될 예정인 정책형 공모펀드다. 국민성장펀드의 일부를 일반 국민이 투자할 수 있게 만든 상품이고, 첨단전략산업 기업과 관련 인프라에 자금을 공급하는 구조다.
핵심 장점은 자펀드별 20% 범위 손실 우선부담, 투자금액별 최대 1,800만원 소득공제, 배당소득 9% 분리과세다. 판매 규모는 6,000억원이고, 25개 은행과 증권사를 통해 선착순으로 판매된다.
하지만 원금보장 상품은 아니다. 만기 5년 환매금지형 펀드이고, 3년 이내 양도 시 감면세액이 추징될 수 있다. 가입하려면 소득증빙도 필요하다. 결국 이 상품은 &ldquo;안전한 예금 대체재&quot;라기보다 &ldquo;세제 혜택이 붙은 장기 정책 투자상품&quot;으로 보는 게 정확하다.
가입을 고민한다면 먼저 세 가지를 확인하면 된다. 첫째, 5년간 묶어둘 여유자금인지 확인한다. 둘째, 전용계좌 가입 요건과 금융소득종합과세 해당 여부를 확인한다. 셋째, 내 소득세율에서 소득공제 효과가 어느 정도인지 계산한다. 이 세 가지가 맞아야 국민성장펀드의 혜택도 제대로 의미가 있다.
자주 묻는 질문 &nbsp; 국민성장펀드는 원금보장 상품인가? &nbsp; 아니다. 정부 재정이 자펀드별로 20% 범위에서 손실을 우선 부담하는 구조는 있지만, 예금자보호가 되는 원금보장 상품은 아니다. 투자 결과에 따라 손실이 날 수 있다.
2026년 국민참여형 국민성장펀드는 언제 살 수 있나? &nbsp; 2026년 5월 22일 금요일부터 6월 11일 목요일까지 3주간 판매될 예정이다. 다만 선착순 판매라 6,000억원 물량이 조기 소진되면 판매가 일찍 끝날 수 있다.
세제 혜택을 받으려면 어떤 계좌로 가입해야 하나? &nbsp; 세제 혜택을 받으려면 국민참여성장펀드 전용계좌를 통해 가입해야 한다. 일반계좌로도 가입할 수는 있지만, 전용계좌에 적용되는 소득공제와 분리과세 혜택은 받을 수 없다.`}).add({id:40,href:"/posts/gray-capitalism/",title:"그레이 캐피털리즘이란? 합법과 비윤리 사이에서 이익을 ...",description:"그레이 캐피털리즘의 뜻과 등장 배경, 조세 회피와 소비자 기만 같은 대표 사례, 기업과 소비자가 주의해야 할 기준을 쉽게 정리했다.",content:`기업 뉴스를 보다 보면 이상한 장면을 자주 보게 된다. 법적으로는 문제가 없다고 하는데, 소비자나 투자자 입장에서는 납득하기 어려운 일이 있다. 세금을 거의 내지 않는 구조를 만들거나, 소비자가 알아보기 어려운 약관으로 비용을 떠넘기거나, 환경을 생각하는 것처럼 홍보하면서 실제로는 책임을 회피하는 경우가 그렇다.
이런 행위를 설명할 때 사용할 수 있는 말이 그레이 캐피털리즘(Gray Capitalism) 이다. 말 그대로 흑백이 분명하지 않은 회색 지대의 자본주의다. 완전히 불법이라고 말하기는 어렵지만, 공정성이나 사회적 책임의 관점에서는 문제가 있는 기업 활동을 뜻한다.
그레이 캐피털리즘은 단순히 &ldquo;기업이 돈을 많이 번다&quot;는 이야기가 아니다. 법과 제도의 빈틈을 이용해 단기 이익을 키우는 방식이 사회 전체의 신뢰, 세금 부담, 환경 비용, 소비자 피해로 이어질 수 있다는 점이 핵심이다.
그레이 캐피털리즘이란 무엇인가 &nbsp; 그레이 캐피털리즘은 기업이 법적으로 허용되는 범위 안에서 움직이지만, 윤리적으로는 비판받을 수 있는 방식으로 이익을 추구하는 현상을 말한다. 여기서 중요한 단어는 &ldquo;합법&quot;과 &ldquo;윤리&quot;의 차이다.
어떤 행위가 법에 걸리지 않는다고 해서 항상 바람직한 것은 아니다. 법은 사회의 모든 상황을 완벽하게 미리 정해두지 못한다. 새로운 금융상품, 디지털 플랫폼, 글로벌 조세 구조, 온라인 광고 방식처럼 변화가 빠른 영역에서는 법이 현실을 늦게 따라가는 경우가 많다.
기업은 이 틈을 활용할 수 있다. 예를 들어 법적으로 허용된 세제 구조를 이용해 세금을 크게 줄이거나, 이용자가 쉽게 이해하기 어려운 방식으로 수수료를 설계하거나, 규제가 약한 국가나 지역으로 사업 구조를 옮기는 식이다.
이때 기업은 &ldquo;법을 어기지 않았다&quot;고 말할 수 있다. 하지만 사회는 &ldquo;그렇다고 공정한가?&rdquo;, &ldquo;소비자가 제대로 알고 선택했는가?&rdquo;, &ldquo;기업이 부담해야 할 비용을 사회에 떠넘긴 것은 아닌가?&ldquo;라고 묻게 된다. 이 질문이 생기는 지점이 그레이 캐피털리즘의 출발점이다.
왜 그레이 캐피털리즘이 늘어났을까 &nbsp; 그레이 캐피털리즘은 특정 기업의 성격만으로 설명하기 어렵다. 경쟁 환경, 주주 압박, 규제 속도, 글로벌 사업 구조가 함께 만든 결과에 가깝다.
단기 실적 압박이 커졌다 &nbsp; 상장기업은 분기 실적, 주가, 투자자 반응에 민감하다. 매출과 이익이 기대보다 낮으면 주가가 흔들리고, 경영진은 비용 절감과 수익성 개선을 강하게 요구받는다.
문제는 이 압박이 지나치게 커질 때다. 장기적인 신뢰와 지속가능성보다 당장의 이익률을 우선하면 법의 빈틈을 찾는 유인이 커진다. 세금을 줄이고, 비용을 외부로 넘기고, 소비자가 알아차리기 어려운 방식으로 가격을 올리는 행동이 단기 성과에는 도움이 될 수 있기 때문이다.
글로벌 경쟁이 규제의 빈틈을 넓혔다 &nbsp; 기업은 이제 한 나라 안에서만 사업하지 않는다. 생산은 A국가, 본사는 B국가, 지식재산권은 C국가, 매출은 전 세계에서 발생하는 구조가 흔하다. 이런 구조에서는 어느 나라의 법을 기준으로 볼 것인지가 복잡해진다.
글로벌 기업은 각국의 세율, 노동 규제, 환경 규제, 보조금 제도를 비교하며 가장 유리한 구조를 선택할 수 있다. 이 자체가 모두 불법은 아니다. 하지만 조세 부담이나 환경 책임을 지나치게 낮추는 방향으로만 설계되면 사회적 비판을 피하기 어렵다.
기술 변화가 법보다 빠르다 &nbsp; 디지털 플랫폼, 인공지능 광고, 구독 서비스, 데이터 수집 같은 분야는 변화 속도가 빠르다. 소비자가 무엇에 동의했는지 알기 어렵고, 기업이 어떤 방식으로 수익을 내는지도 한눈에 보이지 않는다.
예를 들어 무료 서비스처럼 보이지만 실제로는 개인정보와 행동 데이터를 활용해 광고 수익을 내는 구조가 있다. 또 해지 버튼은 찾기 어렵게 만들고 가입 버튼은 크게 보여주는 화면 설계도 있다. 이런 방식은 법적으로 명확히 금지되기 전까지 회색 지대에 머무를 수 있다.
대표적인 그레이 캐피털리즘 사례 &nbsp; 그레이 캐피털리즘은 여러 형태로 나타난다. 핵심은 기업이 비용과 책임을 줄이기 위해 법적 허용 범위의 끝까지 밀고 간다는 점이다.
조세 회피 구조 &nbsp; 대표적인 사례는 조세 회피다. 기업이 세율이 낮은 국가에 법인을 두거나, 지식재산권 사용료와 내부 거래 구조를 활용해 과세 대상 이익을 줄이는 방식이다.
조세 회피는 탈세와 다르다. 탈세는 법을 어겨 세금을 숨기는 행위이고, 조세 회피는 법의 틈을 이용해 세금을 줄이는 행위에 가깝다. 그래서 법적으로 처벌하기 어렵더라도 &ldquo;큰 기업이 사회 인프라를 이용해 돈을 벌면서 세금 부담은 최소화한다&quot;는 비판이 나온다.
구글, 애플 같은 글로벌 빅테크 기업은 여러 나라에서 조세 구조와 관련한 논쟁의 중심에 선 적이 있다. 이 사례들은 그레이 캐피털리즘을 설명할 때 자주 언급된다. 기업 입장에서는 합법적인 세무 전략이라고 볼 수 있지만, 사회 입장에서는 공정한 조세 부담이라는 질문을 남긴다.
지배구조와 경영권 승계 논란 &nbsp; 기업 지배구조에서도 그레이 캐피털리즘이 나타난다. 복잡한 지분 구조, 계열사 간 거래, 지주회사 체제, 우호 지분 등을 활용해 특정 지배주주나 가족이 기업 전체를 계속 지배하는 방식이다.
삼성그룹을 포함한 대기업 집단의 경영권 승계 문제는 한국에서 오랫동안 논쟁이 되어 왔다. 모든 지배구조 개편이 불법이라는 뜻은 아니다. 다만 일반 주주와 회사 전체의 이익보다 특정 지배주주의 영향력 유지가 우선되는 것처럼 보이면 비판이 생긴다.
기업은 안정적인 경영권이 장기 투자에 도움이 된다고 주장할 수 있다. 반대로 투자자와 시민은 &ldquo;소유와 경영이 투명하게 분리되어 있는가?&rdquo;, &ldquo;계열사와 일반 주주의 이익이 공정하게 고려되는가?&ldquo;를 묻는다. 이처럼 법적 구조와 윤리적 정당성 사이에 간격이 생길 때 회색 지대가 만들어진다.
소비자 기만과 다크패턴 &nbsp; 소비자 영역에서는 기만적인 가격 표시, 복잡한 약관, 해지하기 어려운 구독 구조, 의도적으로 헷갈리게 만든 화면 설계가 문제가 된다. 이런 설계를 흔히 다크패턴이라고 부른다.
예를 들어 무료 체험을 강조해 가입을 쉽게 만들고, 체험 종료 후 자동 결제 사실은 작게 표시하는 방식이 있다. 또는 해지 메뉴를 여러 단계 뒤에 숨겨 사용자가 포기하게 만드는 경우도 있다. 소비자가 법적으로 동의 버튼을 눌렀더라도, 실제로 충분히 이해하고 선택했는지는 별개의 문제다.
기업 입장에서는 전환율과 매출을 높이는 마케팅 기법일 수 있다. 하지만 소비자 입장에서는 정보 비대칭을 이용당한 느낌을 받는다. 장기적으로는 브랜드 신뢰를 갉아먹는 방식이다.
환경 규제 회피와 그린워싱 &nbsp; 환경 분야에서도 회색 지대는 많다. 규제가 약한 지역에서 생산하거나, 배출량 산정 기준을 유리하게 적용하거나, 실제 개선보다 친환경 이미지를 앞세우는 방식이 대표적이다.
특히 그린워싱은 소비자가 친환경 제품이라고 믿게 만들지만 실제로는 환경 개선 효과가 제한적인 경우를 말한다. 포장에는 초록색과 자연 이미지를 쓰지만, 생산 과정의 탄소 배출이나 폐기물 문제는 충분히 공개하지 않는 식이다.
이런 방식은 단기적으로 판매에 도움이 될 수 있다. 하지만 소비자가 속았다고 느끼는 순간 기업의 ESG 평판은 빠르게 나빠질 수 있다.
그레이 캐피털리즘이 위험한 이유 &nbsp; 그레이 캐피털리즘의 가장 큰 문제는 비용이 보이지 않는 곳으로 이동한다는 점이다. 기업의 비용은 줄어들지만, 그 부담은 소비자, 근로자, 납세자, 지역사회, 미래 세대가 나누어 지게 된다.
조세 회피가 늘어나면 정부 재정이 줄어든다. 그러면 복지, 교육, 사회 인프라에 쓸 돈이 부족해지고, 부족한 세금은 다른 납세자가 부담하게 된다. 기업 하나의 세무 전략이 사회 전체의 조세 형평성 문제로 이어지는 것이다.
소비자 기만은 시장 신뢰를 떨어뜨린다. 소비자가 가격과 조건을 믿지 못하면 좋은 상품을 고르는 데 더 많은 시간과 비용을 써야 한다. 결국 정직하게 설명하는 기업까지 손해를 볼 수 있다.
환경 규제 회피는 미래 비용을 키운다. 지금 기업이 오염 비용을 충분히 부담하지 않으면 나중에 정화 비용, 건강 피해, 기후 리스크가 사회 전체로 돌아온다. 회계장부에서는 이익이 늘어난 것처럼 보이지만, 사회 전체의 장부에서는 손실이 쌓이는 셈이다.
기업 자신에게도 위험하다. 단기 이익은 높아질 수 있지만, 한 번 신뢰가 무너지면 회복 비용이 크다. 불매운동, 규제 강화, 소송, 인재 이탈, 투자자 신뢰 하락이 뒤따를 수 있다. 회색 지대 전략은 당장은 효율적으로 보여도 장기적으로 기업가치를 훼손할 수 있다.
소비자와 투자자는 무엇을 봐야 할까 &nbsp; 그레이 캐피털리즘은 거대한 기업 윤리 문제처럼 보이지만, 소비자와 투자자도 확인할 수 있는 기준이 있다.
첫째, 기업이 돈을 버는 방식이 명확한지 봐야 한다. 상품 가격, 수수료, 약관, 해지 조건, 개인정보 활용 방식이 지나치게 복잡하다면 주의할 필요가 있다. 좋은 기업은 소비자가 이해하기 어렵게 만들어 이익을 얻으려 하지 않는다.
둘째, 세금과 사회적 책임에 대한 태도를 봐야 한다. 기업이 법적으로 세금을 줄이는 것은 가능하다. 하지만 매출 규모에 비해 납세가 지나치게 낮거나, 여러 나라에서 반복적으로 조세 논란이 생긴다면 장기 리스크로 볼 수 있다.
셋째, 지배구조를 봐야 한다. 특정 대주주나 경영진의 이익이 일반 주주와 회사 전체의 이익보다 앞서는 구조인지 확인해야 한다. 계열사 간 거래, 내부거래 비중, 이사회 독립성, 주주환원 정책은 투자자가 참고할 수 있는 지표다.
넷째, ESG나 친환경 홍보를 그대로 믿기보다 실제 행동을 봐야 한다. 환경 목표를 숫자로 공개하는지, 외부 검증을 받는지, 공급망 문제까지 설명하는지 확인하면 그린워싱 가능성을 줄여 볼 수 있다.
개인 소비자가 모든 정보를 완벽하게 분석할 수는 없다. 그래도 &ldquo;이 기업은 고객이 잘 모르는 틈에서 돈을 버는가, 아니면 고객이 이해하고 선택할 수 있게 하는가&quot;라는 질문만 던져도 많은 것이 보인다.
그레이 캐피털리즘을 줄이려면 &nbsp; 그레이 캐피털리즘을 줄이려면 기업, 정부, 소비자가 함께 움직여야 한다. 어느 한쪽의 선의만으로는 부족하다.
기업은 법만 지키는 수준을 넘어 사회적 책임을 경영 기준에 넣어야 한다. 단기 이익을 위해 소비자를 헷갈리게 만들거나, 세금과 환경 비용을 회피하는 방식은 결국 신뢰를 잃게 만든다. 투명한 정보 공개, 공정한 지배구조, 이해하기 쉬운 약관, 실질적인 ESG 개선이 필요하다.
정부는 규제의 빈틈을 줄여야 한다. 변화가 빠른 산업에서는 사후 처벌만으로 충분하지 않다. 조세 회피 방지, 다크패턴 규제, 환경 정보 공개, 기업 지배구조 개선처럼 회색 지대가 반복되는 영역을 계속 정비해야 한다.
소비자와 투자자도 역할이 있다. 가격이 싸거나 수익성이 높다는 이유만으로 기업을 평가하면 회색 지대 전략이 보상받기 쉽다. 기업이 어떻게 돈을 버는지, 그 과정에서 누가 비용을 부담하는지까지 보는 태도가 필요하다.
그레이 캐피털리즘은 자본주의 자체를 부정하는 말이 아니다. 오히려 시장이 오래 작동하려면 신뢰와 공정성이 필요하다는 경고에 가깝다. 법을 지키는 것만으로 충분하지 않고, 사회가 납득할 수 있는 방식으로 이익을 만들어야 한다는 뜻이다.
정리 &nbsp; 그레이 캐피털리즘은 법적으로는 합법이지만 윤리적으로는 문제가 될 수 있는 기업 활동을 말한다. 조세 회피, 복잡한 지배구조, 소비자 기만, 다크패턴, 환경 규제 회피, 그린워싱 같은 사례가 여기에 포함될 수 있다.
이런 방식은 기업에 단기 이익을 줄 수 있다. 하지만 장기적으로는 소비자 신뢰를 떨어뜨리고, 정부 재정과 환경, 시장 공정성에 비용을 남긴다. 결국 기업 자신에게도 규제 리스크와 평판 리스크로 돌아올 수 있다.
경제 뉴스를 볼 때 &ldquo;불법인가 아닌가&quot;만 보는 것으로는 부족하다. &ldquo;누가 이익을 얻고, 누가 비용을 부담하는가&rdquo;, &ldquo;소비자와 투자자가 충분히 알고 선택했는가&rdquo;, &ldquo;장기적으로 신뢰를 높이는 방식인가&quot;까지 함께 봐야 한다. 이 질문이 그레이 캐피털리즘을 이해하는 가장 현실적인 출발점이다.
자주 묻는 질문 &nbsp; 그레이 캐피털리즘은 불법 행위와 같은 뜻인가? &nbsp; 같은 뜻은 아니다. 불법 행위는 법을 어긴 것이고, 그레이 캐피털리즘은 법적으로는 허용되더라도 윤리적으로 문제가 될 수 있는 행위를 말한다. 다만 회색 지대였던 행위가 사회적 논란이 커지면서 나중에 규제 대상이 되는 경우는 있다.
조세 회피와 탈세는 어떻게 다른가? &nbsp; 탈세는 소득을 숨기거나 허위 신고를 하는 등 법을 어겨 세금을 내지 않는 행위다. 조세 회피는 법의 허점을 이용해 세금 부담을 줄이는 행위에 가깝다. 조세 회피는 처벌하기 어려울 수 있지만, 공정한 세금 부담이라는 관점에서는 비판받을 수 있다.
개인 투자자는 그레이 캐피털리즘을 왜 신경 써야 할까? &nbsp; 회색 지대 전략으로 이익을 내는 기업은 단기 실적이 좋아 보일 수 있다. 하지만 소비자 신뢰 하락, 규제 강화, 소송, 불매운동 같은 리스크가 생기면 기업가치가 흔들릴 수 있다. 투자자는 숫자만 보지 말고 그 숫자가 만들어지는 방식도 함께 봐야 한다.`}).add({id:41,href:"/posts/employment-income-tax-vs-global-income-tax/",title:"근로소득세와 종합소득세 차이, 직장인과 사업자는 세금 ...",description:"근로소득세와 종합소득세의 차이, 직장인 연말정산과 사업자 5월 신고, 부업 소득이 있는 직장인이 종합소득세를 신고해야 하는 경우를 쉽게 정리했다.",content:`나는 직장인이라 월급에서 근로소득세가 빠진다. 그런데 사업을 하는 친구는 매년 5월에 종합소득세를 신고한다고 했다. 둘 다 소득에 붙는 세금인 것 같은데, 왜 이름도 다르고 신고 방식도 다를까.
처음에는 &ldquo;직장인은 근로소득세, 사업자는 종합소득세&rdquo; 정도로만 이해하기 쉽다. 완전히 틀린 말은 아니지만 이것만으로는 부족하다. 직장인도 부업, 금융소득, 임대소득이 있으면 종합소득세 신고 대상이 될 수 있고, 사업자도 원천징수된 세금을 종합소득세 신고에서 다시 정산할 수 있다.
핵심은 소득의 종류와 신고 방식이다. 근로소득세는 회사에서 받는 월급에 붙는 세금이고, 종합소득세는 1년 동안 발생한 여러 소득을 합산해 신고하는 세금이다. 이 글에서는 근로소득세와 종합소득세의 차이를 누구나 이해하기 쉽게 정리하였다.
근로소득세란 무엇인가 &nbsp; 근로소득세는 회사에서 일하고 받는 월급, 상여금, 수당 같은 근로소득에 붙는 세금이다. 쉽게 말하면 직장인이 회사로부터 받는 급여에 대한 소득세다.
직장인은 보통 월급을 받을 때 이미 세금이 빠져 있다. 회사가 월급을 지급하기 전에 근로소득세와 지방소득세를 원천징수하고, 나머지 금액을 통장에 입금하기 때문이다.
흐름으로 보면 이렇다.
세전 월급 -&gt; 회사가 근로소득세 원천징수 -&gt; 세후 월급 입금예를 들어 세전 월급이 300만 원이라면 통장에 300만 원이 그대로 들어오지 않는다. 근로소득세, 지방소득세, 국민연금, 건강보험, 고용보험 등이 빠진 뒤 실수령액이 입금된다.
직장인이 매달 세금을 직접 계산해서 세무서에 내지 않는 이유는 회사가 원천징수의무자 역할을 하기 때문이다. 회사가 세금을 대신 부담하는 것은 아니고, 직원 월급에서 미리 떼어 신고·납부하는 구조다.
종합소득세란 무엇인가 &nbsp; 종합소득세는 개인이 1년 동안 벌어들인 여러 소득을 합산해 신고하는 세금이다. 이름 그대로 소득을 종합해서 계산한다.
종합소득세에서 합산하는 대표적인 소득은 다음과 같다.
이자소득 배당소득 사업소득 근로소득 연금소득 기타소득 사업자나 프리랜서는 보통 종합소득세 신고를 한다. 직장인처럼 회사가 모든 세금을 정리해주는 구조가 아니기 때문이다. 국세청 안내 기준으로 종합소득세는 다음 해 5월 1일부터 5월 31일까지 신고·납부하는 것이 원칙이다. 신고기한이 공휴일이나 토요일이면 다음 날로 밀릴 수 있다.
예를 들어 2026년에 벌어들인 사업소득은 2027년 5월에 종합소득세로 신고하는 식이다. 사업자는 매출에서 필요경비를 빼고 소득금액을 계산한 뒤, 각종 공제와 세율을 적용해 세금을 계산한다.
종합소득세는 단순히 &ldquo;사업자가 내는 세금&quot;만은 아니다. 여러 소득을 합산하는 신고 제도에 가깝다. 그래서 직장인도 조건에 따라 종합소득세 신고를 해야 할 수 있다.
근로소득세와 종합소득세의 핵심 차이 &nbsp; 근로소득세와 종합소득세의 가장 큰 차이는 소득 범위와 신고 방식이다. 근로소득세는 월급이라는 근로소득에 붙는 세금이고, 종합소득세는 1년 동안 발생한 여러 소득을 합산해 계산한다.
구분 근로소득세 종합소득세 대상 월급, 상여금, 수당 등 근로소득 이자, 배당, 사업, 근로, 연금, 기타소득 등 대표 대상자 직장인 개인사업자, 프리랜서, 부업 소득자 세금 처리 회사가 원천징수 본인이 직접 신고하는 경우가 많음 정산 시기 연말정산 다음 해 5월 종합소득세 신고 핵심 서류 원천징수영수증, 연말정산 자료 장부, 경비 자료, 지급명세서, 소득자료 직장인은 회사가 매달 근로소득세를 원천징수하고, 다음 해 초 연말정산으로 실제 세금을 다시 계산한다. 의료비, 교육비, 보험료, 신용카드 사용액 같은 공제 항목을 반영해서 많이 냈으면 환급받고, 적게 냈으면 추가 납부한다.
반면 사업자나 프리랜서는 1년 동안의 수입과 비용을 모아 종합소득세를 신고한다. 이미 원천징수된 세금이 있다면 그것도 신고 과정에서 반영된다. 그래서 3.3%를 떼고 받은 프리랜서 소득도 종합소득세 신고에서 다시 정산될 수 있다.
직장인도 종합소득세 신고를 해야 할까 &nbsp; 직장인은 보통 회사의 연말정산으로 세금 처리가 끝난다. 회사 월급만 있고 다른 소득이 없다면 별도로 5월 종합소득세 신고를 하지 않는 경우가 많다.
하지만 직장인도 다른 소득이 있으면 종합소득세 신고 대상이 될 수 있다. 예를 들어 회사 월급 외에 부업 소득, 프리랜서 소득, 임대소득, 금융소득이 있으면 확인이 필요하다.
직장인이 종합소득세 신고를 검토해야 하는 대표적인 경우는 다음과 같다.
회사 월급 외에 사업소득이나 프리랜서 소득이 있다. 강연료, 원고료, 경품 등 기타소득이 일정 규모 이상 있다. 이자와 배당 같은 금융소득이 연 2,000만 원을 초과한다. 부동산 임대소득이 있다. 연말정산 때 누락한 공제를 5월에 다시 반영하고 싶다. 중도퇴사 후 연말정산을 제대로 하지 못했다. 예를 들어 직장인이 주말에 강의를 하고 강연료를 받았거나, 블로그·유튜브·스마트스토어 등으로 소득이 생겼다면 종합소득세 신고 여부를 확인해야 한다. 소득을 지급받을 때 이미 세금을 떼였더라도 신고가 끝난 것은 아닐 수 있다.
반대로 모든 직장인이 무조건 종합소득세 신고를 해야 하는 것은 아니다. 회사 근로소득만 있고 연말정산이 정상적으로 끝났다면 보통 별도 신고가 필요하지 않다.
사업자와 프리랜서는 무엇을 준비해야 할까 &nbsp; 사업자와 프리랜서는 종합소득세 신고에서 수입과 비용을 정리해야 한다. 직장인처럼 회사가 알아서 연말정산을 해주는 구조가 아니기 때문이다.
사업자의 세금 계산은 단순히 매출 전체에 세율을 곱하는 방식이 아니다. 매출에서 사업과 관련된 필요경비를 빼고 소득금액을 계산한다. 그래서 비용 자료를 잘 챙기는 것이 중요하다.
기본적으로 준비할 자료는 다음과 같다.
매출 내역 사업 관련 비용 영수증 세금계산서, 계산서, 카드 사용 내역 인건비 지급 내역 임차료, 통신비, 소모품비 등 경비 자료 원천징수된 세금 내역 프리랜서는 용역비를 받을 때 3.3%를 떼고 받는 경우가 많다. 이 3.3%는 최종 세금이라기보다 미리 낸 세금에 가깝다. 다음 해 5월 종합소득세 신고에서 실제 소득과 경비를 반영해 다시 계산한다. 미리 낸 세금이 실제 세금보다 많으면 환급이 생길 수 있고, 적으면 추가 납부가 생길 수 있다.
종합소득세는 신고를 놓치면 무신고가산세나 납부지연가산세가 붙을 수 있다. 소득이 크지 않더라도 신고 대상인지 확인하는 습관이 필요하다.
세금을 이해할 때 기억할 흐름 &nbsp; 근로소득세와 종합소득세를 어렵게 느끼는 이유는 세금 이름과 신고 절차가 섞여 보이기 때문이다. 흐름으로 나누면 훨씬 쉽다.
직장인 월급만 있는 경우는 보통 이렇게 흘러간다.
월급 수령 -&gt; 회사가 근로소득세 원천징수 -&gt; 다음 해 초 연말정산 -&gt; 환급 또는 추가 납부사업자나 프리랜서는 보통 이렇게 본다.
1년 동안 수입 발생 -&gt; 비용 자료 정리 -&gt; 다음 해 5월 종합소득세 신고 -&gt; 납부 또는 환급직장인이 부업을 하는 경우는 두 흐름이 합쳐진다.
회사 월급은 연말정산 부업·사업·기타소득은 5월 종합소득세 신고에서 합산 여부 확인핵심은 &ldquo;내가 어떤 소득을 벌었는가&quot;다. 같은 돈을 벌어도 월급인지, 사업소득인지, 기타소득인지에 따라 세금 처리 방식이 달라진다.
정리 &nbsp; 근로소득세는 회사에서 받는 월급에 붙는 세금이고, 종합소득세는 개인이 1년 동안 벌어들인 여러 소득을 합산해 신고하는 세금이다. 직장인은 회사가 원천징수하고 연말정산으로 정리하는 경우가 많고, 사업자와 프리랜서는 다음 해 5월에 종합소득세를 직접 신고하는 경우가 많다.
핵심만 다시 정리하면 이렇다.
근로소득세는 월급, 상여금, 수당 같은 근로소득에 붙는 세금이다. 종합소득세는 이자, 배당, 사업, 근로, 연금, 기타소득 등을 합산해 계산한다. 직장인은 보통 회사가 원천징수하고 연말정산으로 세금을 정리한다. 사업자와 프리랜서는 수입과 경비를 정리해 다음 해 5월 종합소득세를 신고한다. 직장인도 부업, 임대, 금융소득 등이 있으면 종합소득세 신고가 필요할 수 있다. 3.3% 원천징수된 프리랜서 소득도 종합소득세 신고에서 다시 정산될 수 있다. 직장인인 나와 사업을 하는 친구가 서로 다른 세금을 내는 것처럼 보였던 이유는 소득의 종류와 신고 방식이 달랐기 때문이다. 결국 중요한 것은 이름을 외우는 것이 아니라, 내 소득이 어떤 종류이고 언제 어떻게 신고되는지 아는 것이다.
자주 묻는 질문 &nbsp; 직장인은 종합소득세 신고를 안 해도 될까? &nbsp; 회사 근로소득만 있고 연말정산이 정상적으로 끝났다면 보통 별도 종합소득세 신고를 하지 않는다. 다만 부업, 사업소득, 임대소득, 일정 규모 이상의 금융소득이 있으면 5월 신고 대상인지 확인해야 한다.
프리랜서가 3.3% 세금을 떼고 받으면 끝난 걸까? &nbsp; 아니다. 3.3%는 미리 낸 세금에 가깝다. 다음 해 5월 종합소득세 신고에서 실제 소득과 필요경비를 반영해 다시 계산하고, 환급이나 추가 납부가 생길 수 있다.
근로소득세와 종합소득세는 세율이 완전히 다를까? &nbsp; 둘 다 개인 소득세 체계 안에서 계산된다. 다만 근로소득은 근로소득공제와 연말정산 구조가 적용되고, 사업소득은 수입에서 필요경비를 뺀 뒤 종합소득세 신고로 계산한다는 점이 다르다.`}).add({id:42,href:"/posts/economic-financial-terms-guide-download/",title:'금융 문맹 탈출 첫걸음, "경제금융용어" 무료 다운로드...',description:'금융 문맹에서 벗어나고 싶다면 한국은행 "경제금융용어" 책자부터 시작해라. 무료 다운로드 방법과 실전 활용법까지 정리했다.',content:`왜 지금 &ldquo;경제금융용어&quot;를 봐야 할까 &nbsp; 회사 일만 하면서 월급 들어오면 저축만 반복하던 시기가 있었다. 그때는 나름 안정적으로 살고 있다고 생각했는데, 어느 순간 깨달았다. 나는 금융을 전혀 모르고 있었다.
금리, 인플레이션, 채권 같은 단어는 뉴스에 계속 나오는데 정확히 이해하지 못했다. 결국 이건 선택이 아니라 생존 문제라는 생각이 들었다.
그 과정에서 발견한 게 바로 &ldquo;경제금융용어&rdquo; 책자 다. 어렵게 느껴졌던 경제 용어를 가장 기초부터 정리해주는 자료였다.
한국은행 &ldquo;경제금융용어&quot;란 무엇인가 &nbsp; 이 책자는 한국은행에서 발간한 공식 경제 용어 정리집이다.
특징은 명확하다.
실제 경제 기사에 나오는 핵심 용어 중심 불필요한 이론 없이 개념 위주 설명 초보자도 이해할 수 있는 수준 즉, 경제 공부를 어디서 시작해야 할지 모르겠다면 이 책이 출발점이 된다.
무료 다운로드 방법 (바로 받기) &nbsp; 복잡한 절차 없다. 아래 링크 하나면 끝이다.
‘경제금융용어&rsquo; 다운로드 &nbsp; PDF 파일 형태로 제공되기 때문에
스마트폰 태블릿 PC 어디서든 바로 볼 수 있다.
개인적으로는 아이패드나 태블릿에 넣어두고 틈날 때마다 보는 걸 추천한다.
어떻게 공부하면 효과가 좋을까 &nbsp; 이 책을 그냥 읽기만 하면 효과가 떨어진다.
실제로 내가 해보면서 괜찮았던 방법은 이거다.
1. 하루 5개씩만 본다 &nbsp; 욕심내서 50개씩 보면 바로 포기하게 된다.
5개씩 꾸준히 보는 게 훨씬 오래 간다.
2. 뉴스랑 같이 연결한다 &nbsp; 예를 들어 &ldquo;기준금리&quot;를 봤다면, 그날 뉴스에서 실제로 어떻게 쓰이는지 확인한다.
이 순간부터 단어가 지식으로 바뀐다.
3. 모르는 건 따로 정리한다 &nbsp; 처음에는 70%도 이해 못 해도 괜찮다.
반복하면서 이해도가 올라간다.
이 방식으로 보면 단순 암기가 아니라 &ldquo;이해&quot;가 된다.
책자 변화 포인트 (알고 보면 더 좋다) &nbsp; 처음에는 700개 용어로 시작했지만 최근에는 개정되면서 800개로 확장됐다.
2018년: 초판 (700개) 2026년: 개정판 (800개) 최신 경제 이슈와 기술 트렌드 반영 기존 용어 수정 + 일부 삭제 + 신규 추가 즉, 지금 보는 버전이 더 현실에 가까운 내용이다.
특히 디지털 금융, 플랫폼 경제 같은 내용이 추가된 게 체감된다.
금융 공부, 이걸로 충분히 시작된다 &nbsp; 솔직히 금융 공부는 시작이 가장 어렵다.
유튜브, 책, 강의 다 많지만, 기초 없이 보면 결국 다시 돌아오게 된다.
&ldquo;경제금융용어&quot;는 그 기초를 가장 빠르게 채워준다.
나도 이걸 보면서 처음으로 뉴스가 이해되기 시작했다.
이 차이가 생각보다 크다.
정리: 지금 바로 시작해라 &nbsp; 금융 문맹은 시간이 해결해주지 않는다.
기초 용어부터 이해해야 한다 무료 자료로 충분히 시작 가능하다 꾸준히 보면 체감이 확실히 온다 지금 당장 다운로드해서
하루 5개만 시작해보면 된다.
자주 묻는 질문 &nbsp; Q1. 완전 초보도 이해할 수 있을까? &nbsp; 가능하다. 설명 자체가 어렵지 않게 풀려 있어서 입문용으로 적합하다.
Q2. 700선이랑 800선 중 뭘 봐야 할까? &nbsp; 무조건 최신 버전인 800선을 보는 게 좋다. 최신 경제 흐름이 반영되어 있다.
Q3. 이거 하나로 충분할까? &nbsp; 기초는 충분하다. 이후에는 뉴스나 투자 서적으로 확장하면 된다.`}).add({id:43,href:"/posts/financial-intelligence/",title:"금융 지능이란?",description:`금융 지능(Financial Intelligence) 은 쉽게 말해서 돈의 흐름을 이해하고, 합리적으로 돈을 관리하고, 장기적으로 자산을 늘릴 수 있는 능력을 의미한다.
단순히 &ldquo;돈을 많이 아는 것&quot;이 아니라 돈을 다루는 사고방식 + 판단력 + 실행 능력을 포함한다.
금융 지능이란? &nbsp; 금융 지능(Financial Intelligence) 이란 개인이 재무와 관련된 정보를 이해하고 분석하여 합리적인 의사결정을 내릴 수 있는 능력을 의미한다. 이는 단순히 금융 지식을 보유하는 수준을 넘어, 수입과 지출을 관리하고 자산을 형성하며 장기적으로 재정적 안정과 성장을 달성하는 종합적인 역량을 포함한다.
`,content:`금융 지능(Financial Intelligence) 은 쉽게 말해서 돈의 흐름을 이해하고, 합리적으로 돈을 관리하고, 장기적으로 자산을 늘릴 수 있는 능력을 의미한다.
단순히 &ldquo;돈을 많이 아는 것&quot;이 아니라 돈을 다루는 사고방식 + 판단력 + 실행 능력을 포함한다.
금융 지능이란? &nbsp; 금융 지능(Financial Intelligence) 이란 개인이 재무와 관련된 정보를 이해하고 분석하여 합리적인 의사결정을 내릴 수 있는 능력을 의미한다. 이는 단순히 금융 지식을 보유하는 수준을 넘어, 수입과 지출을 관리하고 자산을 형성하며 장기적으로 재정적 안정과 성장을 달성하는 종합적인 역량을 포함한다.
즉, 돈과 관련된 의사결정을 잘 내리는 능력이라고 할 수 있다.
예를 들면:
수입과 지출을 관리하는 능력 투자와 위험을 이해하는 능력 빚을 현명하게 사용하는 능력 자산을 장기적으로 성장시키는 능력 금융 지능을 구성하는 4가지 핵심 요소 &nbsp; 돈의 흐름 이해 (Cash Flow 이해) &nbsp; 금융 지능은 우선 현금 흐름에 대한 이해 능력을 포함한다. 개인은 자신의 수입, 지출, 그리고 잔여 자금을 정확히 파악해야 한다. 이를 통해 소비와 저축, 투자 간의 균형을 설정할 수 있으며, 장기적인 재무 계획 수립이 가능해진다.
수입: 내가 버는 돈 지출: 내가 쓰는 돈 잔여 자금: 남는 돈 예를 들어,
월급 500만원 생활비 350만원 남는 돈 150만원 금융 지능 높은 사람은 &ldquo;남는 돈을 어떻게 굴릴까?&ldquo;를 먼저 고민함
금융 지능 낮은 사람은 &ldquo;남는 돈으로 뭘 살까?&ldquo;를 고민함
자산과 부채 구분 능력 &nbsp; 또한 금융 지능은 자산과 부채를 구분하는 능력을 요구한다. 일반적으로 자산은 지속적으로 수익이나 경제적 가치를 창출하는 요소를 의미하며, 부채는 지속적인 비용을 발생시키는 요소를 의미한다. 이러한 구분을 명확히 이해함으로써 개인은 재무 구조를 보다 안정적으로 설계할 수 있다.
가장 중요한 개념 중 하나이다.
자산 = 내 주머니에 돈을 넣어주는 것 부채 = 내 주머니에서 돈을 빼가는 것 예를 들어,
항목 자산/부채 배당 주식 자산 월세 나오는 건물 자산 자동차 대부분 부채 카드 할부 부채 ※ 집은 상황에 따라 다름
(거주용은 소비 성격, 임대용은 자산 성격)
투자 이해 능력 &nbsp; 다음으로 금융 지능은 투자에 대한 이해 능력을 포함한다. 투자에는 항상 수익과 위험이 동시에 존재하며, 투자자는 이를 균형 있게 고려해야 한다. 분산 투자와 장기 투자 전략을 이해하고 활용하는 것은 안정적인 자산 증식에 중요한 요소로 평가된다.
수익률과 위험 관계 이해 분산 투자 개념 이해 장기 투자 관점 예를 들어,
&ldquo;고수익 = 고위험&rdquo; &ldquo;몰빵은 위험&rdquo; &ldquo;시간이 투자에서 매우 중요&rdquo; 재무 계획 수립 능력 &nbsp; 마지막으로 금융 지능은 재무 계획 수립 능력을 포함한다. 개인은 생애 주기에 따라 주택 마련, 자녀 교육, 노후 대비 등의 목표를 설정하고 이에 맞는 자산 운용 전략을 수립해야 한다. 이러한 계획은 단기적인 소비 욕구보다 장기적인 재정 안정성을 확보하는 데 목적이 있다.
목표 설정 은퇴 준비 자산 포트폴리오 설계 예시:
10년 후 자산 목표 자녀 교육비 준비 주택 구매 전략 금융 지능이 높은 사람 특징 &nbsp; 소비 전에 투자 먼저 생각 감정이 아니라 데이터로 판단 단기 이익보다 장기 안정성 중시 빚을 무조건 나쁘다고 보지 않고 레버리지 도구로 사용 레버리지(Leverage)는 &lsquo;지렛대&rsquo;라는 뜻으로, 금융에서는 부채(차입금)를 지렛대 삼아 자기 자본 이익률을 높이는 투자 기법을 말한다. 시장 상황에 흔들리지 않음 금융 지능이 낮을 때 흔한 패턴 &nbsp; 수입 늘면 소비 같이 증가 대출 구조 이해 없이 집 구매 유행 투자 따라가기 저축만 하고 투자 안 함 보험/세금 구조 모름 금융 지능을 키우는 방법 &nbsp; 기본 재무 공부 &nbsp; 금리 구조 세금 대출 구조 투자 상품 현금 흐름 관리 습관 &nbsp; 가계부 작성 자산 현황 정리 순자산 추적 투자 경험 &nbsp; 소액이라도 직접 경험 시장 변동 겪어보기 장기 관점 훈련 &nbsp; 최소 5~10년 시야 금융 지능 = IQ + EQ + 경험 &nbsp; 금용 지능은 다음 세 가지가 합쳐진 개념이다.
금융 지식 감정 통제 실제 경험 결론적으로 금융 지능은 금융 지식, 합리적 판단 능력, 그리고 실제 재무 관리 경험이 결합된 개념이며, 개인의 경제적 안정과 자산 형성에 핵심적인 역할을 수행한다.`}).add({id:44,href:"/posts/",title:"금융의 모든 지식!",description:"금융 문맹 탈출 프로젝트",content:""}).add({id:45,href:"/posts/bond-investing-when-rates-fall/",title:"기준금리가 내려가면 채권 가격은 왜 오를까? 금리 하락...",description:"기준금리와 채권 가격의 반비례 관계, 금리 하락기에 채권 투자가 주목받는 이유, 직접 채권과 채권 ETF 선택 기준을 초보자도 이해하기 쉽게 정리했다.",content:`채권 투자를 처음 공부하면 가장 자주 듣는 말이 있다. &ldquo;금리가 내려가면 채권 가격은 오른다&quot;는 말이다. 말 자체는 간단한데, 막상 왜 그런지 설명하려면 조금 헷갈린다. 예금 금리가 내려가면 이자를 덜 받는 것 같은데, 채권 가격은 왜 올라간다는 걸까.
핵심은 기존 채권의 매력이다. 과거에 높은 이자를 약속하고 발행된 채권은 시장금리가 내려갈수록 상대적으로 더 좋아 보인다. 새로 나오는 채권이나 예금보다 이자를 더 많이 주기 때문이다. 그래서 사람들이 기존 채권을 더 비싼 가격에 사려고 하고, 그 결과 채권 가격이 오를 수 있다.
2026년 5월 11일 현재 확인 가능한 한국은행 기준금리는 연 2.50%다. 한국은행 금융통화위원회는 2026년 4월 10일 기준금리를 연 2.50%로 동결했다. 이미 금리가 한 차례 내려온 뒤 동결이 이어지는 구간이지만, 물가와 환율, 경기 상황에 따라 앞으로의 방향은 계속 바뀔 수 있다. 그래서 지금 채권 투자를 볼 때는 &ldquo;금리가 내려갈 것 같다&quot;는 기대만으로 접근하기보다, 금리 방향과 보유 기간, 투자 상품의 성격을 함께 봐야 한다.
채권 투자를 3줄로 이해하기 &nbsp; 채권은 정부, 공공기관, 금융기관, 기업 등이 돈을 빌리면서 투자자에게 발행하는 증서다. 투자자는 채권을 사면서 돈을 빌려주는 사람이 되고, 발행자는 정해진 방식으로 이자와 원금을 갚아야 한다.
채권 가격은 보통 시장금리와 반대로 움직인다. 금리가 올라가면 기존 채권 가격은 내려가고, 금리가 내려가면 기존 채권 가격은 올라가는 경향이 있다.
금리가 높은 수준에서 더 오르기 어렵거나 앞으로 내려갈 가능성이 커지는 시기에는 채권 투자가 주목받는다. 다만 금리 전망이 빗나가거나 발행기관의 신용이 나빠지면 손실도 날 수 있다.
금리가 내려가면 채권 가격이 오르는 이유 &nbsp; 채권은 발행될 때 이자 조건이 정해진다. 예를 들어 액면가 100만 원, 만기 1년, 이자율 연 5%인 채권이 있다고 하자. 이 채권을 만기까지 들고 있으면 세전 기준으로 1년 뒤 원금 100만 원과 이자 5만 원을 받을 수 있다.
그런데 시간이 지나 시장금리가 연 3%로 내려갔다고 하자. 새로 발행되는 채권이나 예금은 대체로 3% 안팎의 수익을 제공할 가능성이 크다. 이때 기존에 연 5% 이자를 주는 채권은 더 매력적인 상품이 된다. 투자자들은 그 채권을 액면가보다 조금 비싸게 사더라도 괜찮다고 판단할 수 있다.
반대로 시장금리가 연 7%로 올라가면 상황이 달라진다. 새로 나오는 채권은 더 높은 이자를 줄 수 있는데, 기존 연 5% 채권을 굳이 같은 가격에 살 이유가 줄어든다. 그러면 기존 채권은 가격을 낮춰야 거래가 된다.
정리하면 다음과 같다.
시장 상황 기존 채권의 매력 기존 채권 가격 금리 상승 낮아짐 하락하기 쉬움 금리 하락 높아짐 상승하기 쉬움 여기서 중요한 것은 &ldquo;채권 가격&quot;과 &ldquo;채권 이자&quot;를 구분하는 것이다. 이미 발행된 채권의 이자 조건은 그대로인데, 시장에서 사고파는 가격이 바뀐다. 그래서 채권 투자자는 이자 수익뿐 아니라 가격 변동에 따른 매매 차익이나 손실도 경험할 수 있다.
지금은 채권 투자할 때인가 &nbsp; 이 질문에는 단정적인 답을 하기 어렵다. 채권 투자는 금리 하락 기대가 있을 때 유리해질 수 있지만, 실제 수익은 내가 어떤 채권을 어떤 가격에 사서 얼마나 오래 보유하는지에 따라 달라진다.
현재처럼 기준금리가 고점에서 내려왔거나 동결되는 구간에서는 투자자들이 다음 두 가지를 기대한다.
첫째, 앞으로 금리가 더 내려가면 기존 채권 가격이 오를 수 있다. 특히 만기가 긴 채권은 금리 변화에 더 민감하게 반응한다. 금리가 조금만 내려가도 장기채 가격은 크게 오를 수 있다.
둘째, 현재 금리 수준에서 비교적 높은 이자 수익을 확보할 수 있다. 채권을 만기까지 보유할 계획이라면 중간 가격 변동보다 발행기관의 신용도와 만기 수익률이 더 중요해진다.
하지만 반대 위험도 있다. 물가가 다시 오르거나 환율이 불안해지거나 경기 상황이 예상과 달라지면 기준금리 인하가 늦어질 수 있다. 금리가 오히려 다시 올라가면 채권 가격은 떨어질 수 있다. 특히 장기채 ETF처럼 만기가 긴 채권을 많이 담은 상품은 가격 변동이 생각보다 클 수 있다.
그래서 초보자는 &ldquo;지금이 기회인가&quot;보다 &ldquo;내가 감당할 수 있는 채권인가&quot;를 먼저 물어야 한다. 만기까지 들고 갈 돈인지, 중간에 팔 가능성이 있는 돈인지, 가격이 5~10% 흔들려도 버틸 수 있는지부터 확인하는 편이 낫다.
직접 채권과 채권 ETF, 무엇이 다를까 &nbsp; 채권에 투자하는 방법은 크게 직접 투자와 간접 투자로 나눌 수 있다. 직접 투자는 증권사에서 국채, 금융채, 회사채 등을 골라 사는 방식이다. 간접 투자는 채권형 펀드나 채권 ETF를 사는 방식이다.
직접 채권은 조건이 비교적 명확하다. 발행기관, 만기일, 표면금리, 매수수익률, 신용등급을 보고 살 수 있다. 만기까지 보유하면 발행기관이 원리금을 정상 지급한다는 전제 아래 받을 현금 흐름을 어느 정도 예상할 수 있다. 다만 중간에 팔면 시장 가격에 따라 손익이 달라지고, 일부 채권은 원하는 때에 쉽게 팔기 어려울 수 있다.
채권 ETF는 접근성이 좋다. 주식처럼 장중에 사고팔 수 있고, 여러 채권에 분산 투자하는 효과도 있다. 국채 ETF, 회사채 ETF, 미국 장기채 ETF처럼 선택지도 다양하다. 다만 ETF에는 만기가 딱 한 번 오는 구조가 아니라, 펀드 안의 채권이 계속 교체되는 구조가 많다. 그래서 &ldquo;만기까지 들고 있으면 원금이 돌아온다&quot;는 개별 채권식 사고를 그대로 적용하면 안 된다.
초보자 기준으로는 이렇게 나눠볼 수 있다.
투자 방식 어울리는 경우 주의할 점 직접 채권 만기와 이자 흐름을 정해두고 싶을 때 신용등급, 중도 매도 가격, 유동성 확인 필요 채권 ETF 소액 분산 투자와 쉬운 매매를 원할 때 금리 변동에 따른 가격 하락 가능성 확인 필요 채권형 펀드 직접 고르기 어렵고 운용을 맡기고 싶을 때 보수, 환매 조건, 편입 채권 성격 확인 필요 금리 하락에 따른 가격 상승을 적극적으로 기대한다면 장기채나 장기채 ETF가 더 민감하게 반응할 수 있다. 반대로 가격 변동을 줄이고 이자 수익 중심으로 접근하고 싶다면 단기채, 만기가 짧은 금융채, 단기채 ETF가 더 편할 수 있다.
채권 투자 전에 꼭 확인할 것 &nbsp; 채권은 안정적인 자산으로 분류되지만, 손실 가능성이 없는 상품은 아니다. 특히 &ldquo;금리가 내려가면 오른다&quot;는 한 문장만 믿고 투자하면 위험하다.
발행기관과 신용등급 &nbsp; 채권은 누군가에게 돈을 빌려주는 투자다. 따라서 가장 먼저 봐야 할 것은 누가 갚는가다. 국채는 국가가 발행하므로 신용위험이 낮은 편이지만, 회사채는 기업의 재무상태에 따라 위험이 달라진다. 이자가 높다면 왜 높은지도 생각해야 한다. 높은 이자는 대개 높은 위험의 대가일 수 있다.
만기와 듀레이션 &nbsp; 만기가 길수록 금리 변화에 민감하다. 금리가 내려갈 때는 장기채 가격이 크게 오를 수 있지만, 금리가 올라갈 때는 손실도 커질 수 있다. ETF를 볼 때는 만기뿐 아니라 듀레이션도 확인해야 한다. 듀레이션은 금리 변화에 가격이 얼마나 민감한지를 보여주는 핵심 지표다.
만기 보유인지 중도 매도인지 &nbsp; 직접 채권을 만기까지 보유할 계획이라면 중간 가격 변동은 심리적으로 덜 중요할 수 있다. 하지만 중간에 팔아야 한다면 이야기가 달라진다. 금리가 오른 상태에서 팔면 손실이 날 수 있고, 거래가 활발하지 않은 채권은 원하는 가격에 팔기 어려울 수 있다.
세금과 실제 수익률 &nbsp; 채권 이자에는 세금이 붙을 수 있다. 또 증권사 화면에 보이는 수익률과 실제 손에 남는 수익률은 수수료, 세금, 매수 가격에 따라 달라질 수 있다. 채권은 예금보다 구조가 복잡하므로 세전 수익률만 보고 판단하지 않는 것이 좋다.
마무리 &nbsp; 기준금리와 채권 가격은 보통 반대로 움직인다. 금리가 내려가면 이미 높은 이자를 주는 기존 채권의 매력이 커지고, 그 결과 채권 가격이 오를 수 있다. 그래서 금리 인하가 기대되는 시기에는 채권 투자 이야기가 늘어난다.
하지만 채권 투자는 금리 방향 맞히기 게임만은 아니다. 발행기관의 신용도, 만기, 듀레이션, 중도 매도 가능성, 세금까지 함께 봐야 한다. 금리가 내려갈 것 같다는 전망이 맞더라도 내가 고른 상품의 구조를 모르면 기대와 다른 결과가 나올 수 있다.
처음 채권을 시작한다면 국채나 우량 금융채, 단기채 ETF처럼 구조가 비교적 단순한 상품부터 살펴보는 것이 좋다. 이후 금리 방향에 대한 판단이 생기면 중기채, 장기채, 채권 ETF로 범위를 넓혀도 늦지 않다. 채권은 빠르게 사고파는 상품이라기보다, 금리와 시간을 이해할수록 장점이 보이는 투자 자산이다.
자주 묻는 질문 &nbsp; 기준금리가 내려가면 모든 채권 가격이 오르나? &nbsp; 항상 그렇지는 않다. 일반적으로 금리 하락은 채권 가격 상승 요인이지만, 발행기관의 신용이 나빠지거나 시장 유동성이 부족하거나 이미 금리 인하 기대가 가격에 많이 반영되어 있으면 가격이 기대만큼 오르지 않을 수 있다.
채권은 만기까지 들고 있으면 무조건 안전한가? &nbsp; 발행기관이 원리금을 정상적으로 지급한다는 전제가 필요하다. 국채처럼 신용위험이 낮은 채권도 있지만, 회사채는 기업 상황에 따라 위험이 달라진다. 또한 만기 전에 팔면 시장 가격에 따라 손실이 날 수 있다.
금리 하락기에는 장기채가 무조건 좋은가? &nbsp; 장기채는 금리 하락기에 가격 상승폭이 클 수 있지만, 금리 상승기에는 손실폭도 커질 수 있다. 금리 방향에 확신이 약하거나 가격 변동을 견디기 어렵다면 단기채나 중기채처럼 변동성이 낮은 쪽부터 보는 것이 현실적이다.`}).add({id:46,href:"/posts/base-rate-deposit-loan-interest/",title:"기준금리가 오르면 예금금리와 대출금리는 왜 같이 움직일까",description:"기준금리의 뜻과 예금금리, 대출금리의 차이, 기준금리 인상과 인하가 은행 예금과 대출 이자에 반영되는 과정을 초보자도 이해하기 쉽게 정리했다.",content:`뉴스에서 &ldquo;한국은행이 기준금리를 올렸다&quot;는 말을 들으면 바로 궁금해진다. 그러면 내 예금 이자도 오를까. 대출 이자는 언제부터 늘어날까. 은행 앱에서 보는 금리는 왜 뉴스에 나온 기준금리와 숫자가 다를까.
금리는 돈의 가격이다. 돈을 맡기는 사람에게는 이자가 수익이고, 돈을 빌리는 사람에게는 이자가 비용이다. 그래서 기준금리가 움직이면 예금금리와 대출금리도 영향을 받는다. 다만 버튼을 누르듯이 동시에 똑같이 움직이는 것은 아니다.
이 글에서는 기준금리가 무엇인지, 예금금리와 대출금리는 무엇이 다른지, 기준금리가 오를 때 왜 예금과 대출 금리가 같이 움직일 수 있는지 쉽게 정리하였다.
기준금리란 무엇인가 &nbsp; 기준금리는 한 나라의 중앙은행이 정하는 금리의 기준점이다. 한국에서는 한국은행 금융통화위원회가 기준금리를 결정한다. 쉽게 말하면 시중의 돈 흐름을 조절하기 위해 중앙은행이 제시하는 &ldquo;가장 중요한 출발 금리&quot;라고 보면 된다.
기준금리는 경제 전체에 영향을 준다. 경기가 너무 뜨겁고 물가가 빠르게 오르면 한국은행은 기준금리를 올려 돈을 빌리기 어렵게 만들 수 있다. 반대로 경기가 너무 위축되고 소비와 투자가 줄어들면 기준금리를 내려 돈이 더 잘 돌도록 유도할 수 있다.
기준금리가 중요한 이유는 은행, 기업, 개인이 실제로 거래하는 여러 금리의 기준이 되기 때문이다. 예금금리, 대출금리, 채권금리, 금융채 금리, 코픽스 같은 시장금리는 기준금리의 영향을 받는다.
다만 기준금리와 내가 은행에서 실제로 보는 금리는 같은 숫자가 아니다.
구분 뜻 기준금리 한국은행이 정하는 통화정책의 기준 금리 시장금리 금융시장에서 실제 거래되며 움직이는 금리 예금금리 은행이 예금자에게 주는 이자율 대출금리 은행이 돈을 빌려주는 사람에게 받는 이자율 기준금리는 출발점이고, 예금금리와 대출금리는 그 영향을 받은 결과물에 가깝다.
예금금리와 대출금리는 무엇이 다를까 &nbsp; 예금금리는 내가 은행에 돈을 맡길 때 받는 금리다. 은행 입장에서는 예금이 돈을 빌리는 행위와 비슷하다. 고객에게 돈을 맡아두고, 그 대가로 이자를 지급한다. 그래서 예금금리는 은행이 돈을 모으기 위해 지불하는 비용이다.
예를 들어 정기예금 금리가 연 4%라면, 은행은 고객의 돈을 1년 동안 맡아두는 대신 약속한 이자를 지급한다. 고객 입장에서는 이자 수익이고, 은행 입장에서는 자금 조달 비용이다.
반대로 대출금리는 은행이 고객에게 돈을 빌려줄 때 받는 금리다. 대출을 받은 사람에게는 비용이고, 은행에게는 수익이 된다.
대출금리는 보통 다음 구조로 이해하면 쉽다.
대출금리 = 기준이 되는 금리 + 가산금리 - 우대금리여기서 기준이 되는 금리는 코픽스, 금융채 금리, CD금리처럼 상품마다 다를 수 있다. 가산금리는 은행의 비용, 위험, 고객 신용도, 담보 조건 등이 반영되는 부분이다. 우대금리는 급여 이체, 카드 사용, 자동이체 같은 조건을 충족하면 빼주는 금리다.
그래서 기준금리가 내려도 내 대출금리가 바로 똑같이 내려가지 않을 수 있다. 기준이 되는 금리의 반영 시점, 변동주기, 은행의 가산금리, 내 우대금리 조건이 함께 작동하기 때문이다.
기준금리가 오르면 왜 예금금리도 오를까 &nbsp; 기준금리가 오르면 은행이 돈을 구하는 비용이 전반적으로 올라간다. 은행도 돈이 있어야 대출을 해줄 수 있다. 돈을 구하는 방법은 여러 가지다. 고객 예금을 모을 수도 있고, 은행채를 발행해 시장에서 자금을 조달할 수도 있다.
기준금리가 올라 시장금리도 오르면, 은행은 고객의 예금을 끌어오기 위해 예금금리를 올릴 유인이 생긴다. 고객 입장에서는 더 높은 금리를 주는 은행으로 돈을 옮길 수 있기 때문이다.
예를 들어 A은행은 정기예금 금리를 3%로 주고, B은행은 4%로 준다고 해보자. 조건이 비슷하다면 많은 사람은 B은행으로 돈을 옮기려 할 것이다. 그러면 A은행도 예금을 모으기 위해 금리를 올릴 수밖에 없다.
하지만 예금금리가 항상 기준금리만큼 바로 오르는 것은 아니다. 은행이 이미 충분한 예금을 가지고 있거나, 은행채 발행 같은 다른 방법으로 싸게 돈을 구할 수 있다면 예금금리를 크게 올리지 않을 수 있다. 금융당국의 정책 방향이나 은행 간 경쟁 강도도 영향을 준다.
어느 기사에서도 예금금리가 내려가는데 대출금리는 높게 유지되는 상황을 설명하면서, 은행채 금리와 은행의 자금 조달 필요성이 예금금리에 영향을 준다고 다루었다. 즉, 예금금리는 기준금리만 보는 것이 아니라 은행이 지금 얼마나 돈을 필요로 하는지도 함께 봐야 한다.
기준금리가 오르면 왜 대출금리도 오를까 &nbsp; 대출금리는 은행이 돈을 빌려주는 가격이다. 은행이 돈을 구하는 비용이 올라가면, 고객에게 빌려주는 돈의 가격도 올라갈 가능성이 크다.
예를 들어 은행이 돈을 조달하는 비용이 연 3%인데 대출을 연 3.2%로만 내준다면, 은행은 위험과 운영비를 감당하기 어렵다. 그래서 은행은 조달 비용에 가산금리를 붙여 대출금리를 정한다.
기준금리가 오르면 금융채 금리, 코픽스, CD금리 같은 대출의 준거금리가 같이 오를 수 있다. 그러면 변동금리 대출은 정해진 변동주기에 맞춰 금리가 올라갈 수 있다.
특히 주택담보대출 변동금리는 코픽스의 영향을 받는 경우가 많다. 코픽스는 은행이 실제로 돈을 조달하는 데 든 비용을 반영한 지표다. 예금금리와 은행채 금리 같은 조달 비용이 오르면 코픽스도 영향을 받을 수 있고, 이것이 대출금리에 반영될 수 있다.
다만 대출금리도 예금금리처럼 바로 똑같이 움직이지 않는다. 대출 종류마다 기준이 다르고, 변동주기도 다르다.
대출 유형 금리 반영 방식 변동금리 대출 코픽스, 금융채 등 준거금리가 변동주기에 따라 반영 고정금리 대출 약정 기간 동안 금리가 유지되는 경우가 많음 혼합금리 대출 일정 기간 고정 후 변동금리로 전환 신용대출 금융채 금리, 은행 정책, 개인 신용도 영향 그래서 같은 기준금리 인상 뉴스가 나와도 어떤 사람은 대출 이자가 바로 늘고, 어떤 사람은 몇 달 뒤 반영되고, 어떤 사람은 고정금리라 당장은 변하지 않을 수 있다.
예금금리와 대출금리가 같은 속도로 움직이지 않는 이유 &nbsp; 많은 사람이 헷갈리는 지점은 이것이다. 기준금리가 오르면 예금금리와 대출금리가 같이 오를 수는 있지만, 같은 폭과 같은 속도로 움직이지는 않는다.
첫 번째 이유는 은행의 조달 구조가 다르기 때문이다. 은행은 예금만으로 돈을 마련하지 않는다. 은행채, 금융시장 차입, 기존 예금, 자기자본 등 여러 방식으로 자금을 조달한다. 어느 쪽 비용이 더 싼지에 따라 예금금리 조정 폭이 달라질 수 있다.
두 번째 이유는 대출금리 안에 가산금리가 있기 때문이다. 대출금리는 단순히 기준금리만 더해서 정해지지 않는다. 고객의 신용도, 담보 안정성, 은행의 리스크 관리, 영업 전략이 반영된다. 그래서 기준금리가 그대로여도 가산금리가 오르면 대출금리는 올라갈 수 있다.
세 번째 이유는 상품의 적용 시점이 다르기 때문이다. 새로 가입하는 정기예금은 금리가 빨리 바뀔 수 있지만, 이미 가입한 정기예금은 만기까지 약정금리가 유지된다. 대출도 고정금리인지 변동금리인지, 변동주기가 3개월인지 6개월인지에 따라 체감 시점이 달라진다.
네 번째 이유는 은행 간 경쟁과 정책 환경이다. 은행들이 예금을 많이 모아야 하는 시기에는 예금금리를 더 공격적으로 올릴 수 있다. 반대로 대출 수요가 줄고 자금이 충분하면 예금금리 인상 폭이 작을 수 있다.
결국 기준금리는 방향을 만드는 큰 신호이고, 실제 예금금리와 대출금리는 여러 조건을 거쳐 결정된다.
금리 변화를 볼 때 개인이 확인할 것 &nbsp; 기준금리가 오르거나 내려갈 때는 뉴스 제목만 보고 판단하기보다 내 금융상품에 어떻게 반영되는지 확인해야 한다.
예금을 가진 사람은 신규 가입 금리와 기존 가입 금리를 나누어 봐야 한다. 이미 가입한 정기예금은 대부분 만기까지 약정금리가 유지된다. 기준금리가 올랐다고 해서 기존 예금 이자가 자동으로 올라가는 것은 아니다. 새로 가입하거나 만기 후 재예치할 때 적용 금리를 확인해야 한다.
대출을 가진 사람은 대출 약정서를 확인해야 한다. 내가 고정금리인지 변동금리인지, 변동금리라면 기준이 코픽스인지 금융채인지, 변동주기가 몇 개월인지 봐야 한다.
확인할 항목은 다음과 같다.
내 예금은 고정금리인지, 회전식인지 확인한다. 새 예금 가입 전에는 세전금리와 세후금리를 함께 본다. 내 대출이 고정금리인지 변동금리인지 확인한다. 변동금리라면 기준금리, 변동주기, 다음 금리 변경일을 확인한다. 대출금리는 가산금리와 우대금리 조건까지 함께 본다. 금리가 오르는 시기에는 만기 짧은 대출과 고금리 대출부터 점검한다. 특히 대출이 있다면 &ldquo;기준금리가 얼마나 올랐나&quot;보다 &ldquo;내 월 상환액이 얼마나 늘어나는가&quot;를 계산하는 것이 더 중요하다. 예금은 금리가 오르면 반갑지만, 대출은 현금흐름에 바로 부담이 될 수 있기 때문이다.
정리 &nbsp; 기준금리는 한국은행이 정하는 금리의 기준점이고, 예금금리와 대출금리는 은행과 고객 사이에서 실제로 적용되는 금리다. 기준금리가 오르면 시장금리와 은행의 조달비용이 올라가면서 예금금리와 대출금리도 함께 움직일 수 있다.
핵심만 다시 정리하면 이렇다.
기준금리는 한국은행이 정하는 금리의 출발점이다. 예금금리는 은행이 고객의 돈을 맡기 위해 지급하는 이자율이다. 대출금리는 은행이 고객에게 돈을 빌려주며 받는 이자율이다. 기준금리가 오르면 은행의 자금 조달 비용이 올라 예금금리와 대출금리에 영향을 줄 수 있다. 실제 금리는 코픽스, 금융채, 가산금리, 우대금리, 은행 경쟁 상황에 따라 다르게 움직인다. 기존 예금과 기존 대출은 상품 구조와 약정 조건에 따라 반영 시점이 다르다. 기준금리 뉴스를 볼 때는 &ldquo;금리가 올랐다&quot;에서 멈추지 말고, 내 예금과 대출이 어떤 방식으로 연결되어 있는지 확인해야 한다. 금리를 이해하면 예금 갈아타기, 대출 상환, 고정금리와 변동금리 선택을 훨씬 현실적으로 판단할 수 있다.
자주 묻는 질문 &nbsp; 기준금리가 오르면 내 예금금리도 바로 오를까? &nbsp; 이미 가입한 정기예금은 보통 만기까지 약정금리가 유지된다. 기준금리 인상은 주로 새로 가입하는 예금 상품이나 만기 후 재예치 금리에 먼저 반영되는 경우가 많다.
기준금리가 내려가면 대출금리도 바로 내려갈까? &nbsp; 바로 내려가지 않을 수 있다. 대출금리는 코픽스, 금융채 금리, 가산금리, 우대금리, 변동주기 영향을 받는다. 특히 변동금리 대출은 다음 금리 변경일에 반영되는 구조가 많다.
예금금리보다 대출금리가 더 높은 이유는 무엇일까? &nbsp; 은행은 예금으로 돈을 조달하고 대출로 돈을 운용한다. 대출금리에는 은행의 조달비용뿐 아니라 운영비, 신용위험, 가산금리 등이 반영된다. 그래서 일반적으로 대출금리는 예금금리보다 높게 형성된다.`}).add({id:47,href:"/posts/multifamily-house-use-change-tax-risk/",title:"다가구주택 용도변경 주의점, 다세대주택으로 보이면 양도...",description:"다가구주택과 다세대주택의 차이, 건축물대장 확인 방법, 상가를 주택으로 바꾸거나 옥탑방을 만든 경우 생길 수 있는 양도소득세 리스크를 정리했다.",content:`다가구주택을 가진 사람이라면 &ldquo;건물 한 채니까 1주택이겠지&quot;라고 생각하기 쉽다. 특히 건축물대장에 다가구주택이라고 적혀 있고, 등기부도 건물 전체가 하나로 되어 있으면 더 그렇다. 그런데 실제 사용 현황이 달라지면 세금 판단은 예상과 다르게 흘러갈 수 있다.
대표적인 사례가 1층 상가를 주택으로 바꾸는 경우다. 공실이 오래되거나 상권이 약해져 월세가 잘 나오지 않으면, 상가를 원룸처럼 고쳐 임대하고 싶은 마음이 생긴다. 당장 월세 몇십만 원이 더 들어오는 것처럼 보이지만, 나중에 건물을 팔 때 양도소득세가 크게 늘어날 수 있다.
이 문제를 이해하려면 먼저 다가구주택과 다세대주택의 차이를 알아야 한다. 두 건물은 겉모습이 비슷하지만 세법에서는 주택 수 판단이 달라질 수 있다. 이 글에서는 다가구주택 용도변경이 왜 위험한지, 어떤 부분을 확인해야 하는지 초보자 눈높이에서 정리하였다.
다가구주택과 다세대주택은 겉모습보다 법적 성격이 중요하다 &nbsp; 다가구주택과 다세대주택은 모두 한 건물 안에 여러 세대가 산다는 공통점이 있다. 그래서 골목길에서 건물 외관만 보고는 둘을 구분하기 어렵다. 현관이 여러 개 있고, 우편함이 나뉘어 있고, 각 세대가 따로 생활한다는 점도 비슷하다.
하지만 법적 성격은 다르다. 다가구주택은 단독주택의 한 종류이고, 다세대주택은 공동주택의 한 종류다. 이 차이가 양도소득세에서 매우 중요하게 작용한다.
다가구주택은 보통 건물 전체가 하나의 소유권으로 등기된다. 여러 가구가 임차해 살더라도 소유자는 건물 한 채를 가진 구조에 가깝다. 반면 다세대주택은 각 호수별로 구분등기가 가능하다. 101호, 201호, 301호처럼 각각의 주택이 독립된 소유권 단위가 될 수 있다.
간단히 비교하면 다음과 같다.
구분 다가구주택 다세대주택 법적 분류 단독주택 공동주택 소유 형태 건물 전체를 하나로 소유하는 구조 호수별 구분소유 가능 등기 형태 보통 1개 건물로 등기 각 세대별 구분등기 세금상 주의점 요건을 갖추면 1주택 판단 가능 호수별 주택 수 문제가 생길 수 있음 건축법령상 다가구주택은 주택으로 쓰는 층수, 바닥면적, 세대 수 요건을 갖춰야 한다. 일반적으로 주택으로 쓰는 층수가 3개 층 이하이고, 1개 동의 주택으로 쓰는 바닥면적 합계가 660㎡ 이하이며, 19세대 이하가 거주할 수 있어야 한다. 세부 판단은 실제 건축물 구조와 법령 기준을 함께 봐야 한다.
국가법령정보센터 다가구주택 해석례 확인 &nbsp; 건축물대장만 믿으면 위험한 이유 &nbsp; 내 건물이 다가구주택인지 다세대주택인지 확인할 때 가장 먼저 볼 서류는 건축물대장이다. 건축물대장에는 건물의 용도, 층별 현황, 면적 등이 적혀 있다. 그래서 매입 전에는 반드시 건축물대장의 &ldquo;용도&quot;와 &ldquo;층별 현황&quot;을 확인해야 한다.
다만 건축물대장에 &ldquo;다가구주택&quot;이라고 적혀 있다고 해서 세금상 항상 1주택으로 인정된다고 단정하면 안 된다. 세금은 서류상 명칭만 보는 것이 아니라 실제 사용 현황도 본다. 이것을 흔히 실질과세 원칙이라고 설명한다.
예를 들어 건축물대장에는 1층이 근린생활시설로 되어 있는데 실제로는 주방, 화장실, 침실을 갖춘 주거 공간으로 개조해 임대하고 있다면 문제가 될 수 있다. 서류상 상가라도 실제로 주택처럼 사용했다면 주택 층수와 주택 수 판단에 영향을 줄 수 있다.
반대로 건축허가를 받았는지, 받지 않았는지만으로 세금 문제가 끝나는 것도 아니다. 세법 판단에서는 실제로 어떻게 사용했는지, 양도 당시 현황이 어떤지, 다가구주택 요건을 충족하는지가 중요하다.
그래서 다가구주택을 매수하거나 보유 중이라면 아래 항목을 같이 봐야 한다.
건축물대장상 용도가 다가구주택인지 층별 용도가 주택인지, 근린생활시설인지 주택으로 쓰는 층수가 3개 층 이하인지 실제 임대 현황이 공부상 용도와 맞는지 옥탑방, 불법 증축, 상가의 주거 전환이 있는지 전입신고, 계량기, 우편함, 출입구 등 실제 주거 흔적이 있는지 부동산 계약서만 보고 판단하기에는 부족하다. 건축물대장, 등기부등본, 현장 확인, 임대차 현황까지 함께 봐야 한다.
상가를 주택으로 바꾸면 왜 양도세가 커질 수 있을까 &nbsp; 가장 흔한 위험 사례를 보자. 4층짜리 건물이 있고, 2층부터 4층까지는 주택으로 사용하며 1층은 근린생활시설로 되어 있다고 가정해보자. 이 경우 주택으로 쓰는 층수는 3개 층이다. 다른 요건도 충족한다면 다가구주택으로 볼 수 있다.
그런데 1층 상가 월세가 잘 나오지 않아 1층을 원룸처럼 개조해 임대했다면 이야기가 달라진다. 실제 사용 기준으로 보면 1층도 주택이 된다. 그러면 주택으로 쓰는 층수가 4개 층이 되어 다가구주택 요건을 벗어날 수 있다.
다가구주택 요건을 벗어나면 세금상 건물 전체를 1주택처럼 보기 어려워질 수 있다. 특히 각 층이나 각 호실이 독립된 주거 공간으로 사용되고 있다면, 양도 시점에 여러 주택을 양도한 것으로 판단될 위험이 생긴다.
예를 들어 5억 원에 산 건물을 8억 원에 팔았고 양도차익이 3억 원이라고 해보자. 정상적인 다가구주택으로 인정되고 1세대 1주택 비과세 요건을 갖췄다면 세금 부담이 크게 줄 수 있다. 하지만 실제 사용 현황 때문에 다주택으로 판단되면 비과세가 깨지고, 양도소득세가 예상보다 훨씬 커질 수 있다.
여기서 중요한 점은 2026년 5월 현재 다주택자 양도소득세 중과 규정도 양도 시점, 조정대상지역 여부, 경과조치, 계약일, 잔금일 등에 따라 달라질 수 있다는 것이다. 그래서 &ldquo;무조건 중과된다&quot;거나 &ldquo;무조건 안 된다&quot;라고 단정하기보다, 양도하기 전 현재 법령과 본인 건물의 실제 현황을 확인해야 한다.
국세청 양도소득세 안내 확인 &nbsp; 세무서는 실제 사용 현황을 어떻게 알 수 있을까 &nbsp; &ldquo;몰래 바꾸면 모를 것&quot;이라고 생각하면 위험하다. 예전에는 현장 조사를 나가지 않으면 건물의 실제 용도 변경을 확인하기 어려운 경우가 많았다. 하지만 지금은 여러 자료가 연결되어 있어 실제 사용 현황이 드러날 가능성이 높다.
대표적으로 전입신고 자료가 있다. 상가로 되어 있는 1층에 세입자가 전입신고를 했다면, 해당 공간이 주거용으로 사용되었다는 강한 단서가 된다. 수도, 전기, 가스 사용 형태도 확인될 수 있다. 별도 계량기가 설치되어 있고, 주거용 요금 납부 흔적이 있으면 실제 거주 여부를 판단하는 자료가 될 수 있다.
인터넷 지도와 항공사진도 단서가 된다. 건물 외벽에 별도 출입문이 생겼는지, 에어컨 실외기가 세대별로 설치되어 있는지, 우편함이 호수별로 나뉘어 있는지 같은 내용이 확인될 수 있다. 주변 부동산 광고, 임대차계약서, 보증금 입금 내역도 함께 검토될 수 있다.
세금 문제에서 &ldquo;서류에는 상가로 되어 있다&quot;는 말만으로는 충분하지 않다. 실제 구조와 사용 방식이 주택에 가깝다면 세무상 주택으로 볼 수 있다. 특히 양도세는 금액이 크기 때문에 사후에 소명하려면 훨씬 피곤해진다.
이미 용도를 바꿨다면 어떻게 해야 할까 &nbsp; 이미 1층 상가를 주택으로 개조했거나, 옥탑방을 만들어 임대하고 있다면 먼저 현재 상태를 정확히 확인해야 한다. 가장 위험한 대응은 &ldquo;별일 없겠지&rdquo; 하고 양도 직전까지 그대로 두는 것이다.
첫째, 건축물대장과 실제 현황을 비교해야 한다. 공부상 용도와 실제 사용 용도가 다르면 어느 부분이 다른지 정리해야 한다. 주택으로 쓰는 층수, 세대 수, 면적, 출입 구조를 확인해야 한다.
둘째, 양도 계획이 있다면 세무사와 사전에 상담하는 편이 좋다. 다가구주택의 1세대 1주택 비과세는 보유기간, 거주기간, 고가주택 여부, 부수토지, 겸용주택 여부, 실제 사용 현황에 따라 판단이 달라질 수 있다. 특히 매매계약을 먼저 체결하고 나서 절세 방법을 찾으면 선택지가 크게 줄어든다.
셋째, 가능한 경우 원상복구를 검토해야 한다. 참조 사례에서는 다가구주택을 주택 등으로 용도 변경했다면 원상복구 후 일정 기간 보유하고 양도해야 1주택으로 인정받을 수 있다는 취지의 설명이 나온다. 다만 실제 적용 여부와 필요한 기간은 개별 사정과 법령에 따라 달라질 수 있으므로 반드시 전문가 확인이 필요하다.
넷째, 임대수익만 보고 판단하지 말아야 한다. 상가를 주택으로 바꿔 월세를 더 받더라도, 나중에 양도세가 수천만 원에서 수억 원까지 늘어난다면 전체 수익은 오히려 나빠질 수 있다. 용도변경은 인테리어 문제가 아니라 세금과 건축법, 임대차가 함께 얽힌 의사결정이다.
요약 &nbsp; 다가구주택은 겉으로 여러 세대가 살아도 세법상 1주택으로 판단될 수 있는 중요한 자산이다. 하지만 이 장점은 다가구주택 요건을 지킬 때 의미가 있다. 상가를 주택으로 바꾸거나, 옥탑방을 만들거나, 실제 사용 현황이 달라지면 다세대주택 또는 다주택처럼 판단될 위험이 생긴다.
핵심은 세 가지다. 건축물대장상 용도를 확인하고, 실제 사용 현황이 그 용도와 맞는지 살피고, 양도 전에 세무 검토를 받는 것이다. 특히 1층 근린생활시설을 주택으로 개조하는 결정은 작은 임대수익보다 큰 양도세 리스크를 먼저 계산해야 한다.
다가구주택을 매수하거나 보유 중이라면 계약서와 등기부만 보지 말고 건축물대장, 층별 용도, 전입 현황, 불법 증축 여부까지 함께 확인하는 습관이 필요하다.
자주 묻는 질문 &nbsp; 건축물대장에 다가구주택이라고 되어 있으면 무조건 1주택인가? &nbsp; 무조건은 아니다. 건축물대장은 중요한 자료지만 세금은 실제 사용 현황도 함께 본다. 건축물대장에는 다가구주택으로 되어 있어도 실제로 주택 층수나 세대 수 요건을 벗어나면 세무상 불리하게 판단될 수 있다.
1층 상가를 원룸으로 바꾸면 바로 문제가 되나? &nbsp; 문제가 될 가능성이 크다. 1층이 실제 주택으로 사용되면 주택으로 쓰는 층수가 늘어나 다가구주택 요건을 벗어날 수 있다. 특히 양도할 때 1세대 1주택 비과세 판단에 영향을 줄 수 있으므로 용도변경 전 세무 검토가 필요하다.
다가구주택을 살 때 무엇을 확인해야 하나? &nbsp; 건축물대장상 용도, 층별 현황, 등기부등본, 실제 임대차 현황, 전입세대 여부, 불법 증축 여부를 확인해야 한다. 외관상 원룸 건물처럼 보여도 법적으로 다가구인지 다세대인지에 따라 세금과 권리관계가 달라질 수 있다.`}).add({id:48,href:"/posts/multi-homeowner-capital-gains-tax-surcharge/",title:"다주택자 양도소득세 중과 5월 10일부터 시행: 대상,...",description:"2026년 5월 10일부터 다시 적용될 다주택자 양도소득세 중과의 뜻, 대상, 세율, 장기보유특별공제 배제, 매도 전 체크할 내용을 쉽게 정리했다.",content:`집을 여러 채 갖고 있는 사람에게 가장 민감한 세금 중 하나가 양도소득세다. 집을 보유하는 동안에는 재산세나 종부세가 부담이고, 집을 팔 때는 양도소득세가 부담이 된다. 특히 다주택자가 조정대상지역 주택을 팔 때 적용되는 양도세 중과 는 세금 차이가 꽤 크게 벌어질 수 있다.
2026년 5월 3일 기준으로 보면, 다주택자 양도소득세 중과 유예는 2026년 5월 9일까지로 알려져 있다. 유예가 끝나면 2026년 5월 10일부터 조정대상지역 내 주택을 파는 다주택자에게 중과세율이 다시 적용될 수 있다.
이 글에서는 양도소득세 중과가 무엇인지, 누가 대상인지, 5월 10일부터 무엇이 달라지는지, 매도 전에 어떤 점을 확인해야 하는지 누구나 이해하기 쉽게 정리하였다.
양도소득세 중과란 무엇인가 &nbsp; 양도소득세는 자산을 팔아서 생긴 이익에 대해 내는 세금이다. 주택을 예로 들면, 5억 원에 산 집을 8억 원에 팔았다면 단순하게는 3억 원의 차익이 생긴다. 이 양도차익에서 필요경비, 장기보유특별공제, 기본공제 등을 반영한 뒤 세율을 적용해 세금을 계산한다.
양도세 중과는 여기서 한 단계 더 무겁게 세금을 매기는 제도다. 기본 양도소득세율에 추가 세율을 붙이는 방식이다.
쉽게 말하면 이렇다.
일반 양도세: 기본세율 적용 다주택자 중과: 기본세율에 20%p 또는 30%p 추가 이 제도는 다주택자의 투기 수요를 억제하고, 보유 주택을 시장에 내놓도록 유도하기 위해 만들어졌다. 다만 부동산 시장 상황에 따라 중과가 강화되거나 유예되는 일이 반복돼 왔다.
2022년 5월부터는 다주택자 양도세 중과가 한시적으로 유예되어 왔고, 이 유예가 2026년 5월 9일 종료되는 흐름이다. 그래서 2026년 5월 10일이 중요한 기준일로 언급되는 것이다.
중과 대상은 누구일까 &nbsp; 다주택자라고 해서 모든 주택 매도에 무조건 중과가 붙는 것은 아니다. 핵심은 조정대상지역에 있는 주택을 다주택자가 양도하는 경우 다.
중과 여부를 볼 때는 보통 아래 순서로 확인한다.
내가 2주택 이상 보유자인지 확인한다. 팔려는 주택이 조정대상지역 안에 있는지 확인한다. 보유기간이 1년 미만인지, 1년 이상 2년 미만인지, 2년 이상인지 확인한다. 일시적 2주택, 상속주택, 장기임대주택 등 예외에 해당하는지 확인한다. 조정대상지역은 집값 상승률이 높거나 청약 경쟁이 과열된 지역을 정부가 규제지역으로 지정한 곳이다. 참고 글 기준으로는 서울 전역과 경기 일부 지역이 조정대상지역으로 언급된다. 다만 조정대상지역은 정책에 따라 바뀔 수 있으므로 실제 매도 시점에는 반드시 최신 지정 현황을 확인해야 한다.
비조정대상지역 주택을 파는 경우에는 다주택자라도 일반 기본세율이 적용될 수 있다. 그래서 &ldquo;집을 몇 채 갖고 있느냐&quot;만큼이나 &ldquo;어느 지역의 집을 파느냐&quot;가 중요하다.
5월 10일부터 세율은 어떻게 달라질까 &nbsp; 양도세 중과가 적용되면 2주택자와 3주택 이상 보유자의 세율이 달라진다.
구분 중과 적용 시 세율 2주택자 기본세율 + 20%p 3주택 이상 기본세율 + 30%p 양도소득세 기본세율은 과세표준 구간에 따라 6%부터 45%까지 적용된다. 여기에 중과세율이 붙으면 2주택자는 최대 65%, 3주택 이상은 최대 75%까지 올라갈 수 있다.
지방소득세는 양도소득세의 10%가 별도로 붙는다. 그래서 3주택 이상 보유자의 최고 실효세율은 지방소득세까지 포함하면 82.5% 수준까지 언급된다.
단기 보유 주택은 별도 고율 세율도 고려해야 한다.
구분 세율 구조 2주택, 1년 미만 보유 70% 2주택, 1년 이상 2년 미만 60% 또는 기본세율 + 20%p 중 큰 금액 2주택, 2년 이상 기본세율 + 20%p 3주택 이상, 1년 미만 70% 또는 기본세율 + 30%p 중 큰 금액 3주택 이상, 1년 이상 2년 미만 60% 또는 기본세율 + 30%p 중 큰 금액 3주택 이상, 2년 이상 기본세율 + 30%p 여기서 중요한 건 단순히 세율만 오르는 게 아니라는 점이다. 중과 대상이 되면 장기보유특별공제가 배제될 수 있다.
장기보유특별공제 배제가 더 무서울 수 있다 &nbsp; 집을 오래 보유하면 양도차익에서 일정 금액을 빼주는 장기보유특별공제를 받을 수 있다. 일반적으로 오래 보유한 주택일수록 공제 효과가 커진다. 그래서 10년 이상 보유한 집을 팔 때는 장기보유특별공제가 세금을 크게 줄여주는 역할을 한다.
그런데 다주택자 중과 대상이 되면 이 장기보유특별공제가 적용되지 않을 수 있다. 이게 세금 차이를 크게 만든다.
예를 들어 서울에 오래 보유한 아파트가 있고, 취득가와 양도가의 차이가 크다고 해보자. 중과 유예 상태에서는 기본세율과 장기보유특별공제를 적용받을 수 있다. 하지만 중과가 적용되면 세율이 올라가고, 장기보유특별공제까지 빠지면서 세금이 크게 늘 수 있다.
참고 글에서도 중과 적용 후 2주택자와 3주택자의 세 부담이 수억 원 단위로 늘어날 수 있는 사례를 소개한다. 실제 세금은 취득가, 필요경비, 보유기간, 거주 여부, 주택 수, 지역, 양도 시점에 따라 달라지지만, 핵심은 분명하다.
중과는 세율 인상 + 장기보유특별공제 배제 가 함께 작동할 수 있다는 점이다.
5월 9일까지 계약한 경우는 어떻게 될까 &nbsp; 참고 글에서는 2026년 5월 9일까지 계약한 매매에 대해 중과 유예를 적용하는 방안을 검토 중이라고 설명한다. 기존에는 잔금일이나 양도일 기준으로 유예 여부를 판단하는 흐름이 중요했는데, 계약일 기준으로 유예를 인정하면 다주택자 입장에서는 매도할 시간이 조금 더 생길 수 있다.
다만 이 부분은 &ldquo;검토 중&quot;인 내용과 실제 확정된 세법·시행령을 구분해야 한다. 계약만 했다고 무조건 유예가 적용된다고 단정하면 위험하다. 특히 토지거래허가구역은 허가 절차가 필요하고, 계약부터 잔금까지 시간이 걸릴 수 있다.
매도 계획이 있다면 아래 내용을 꼭 확인해야 한다.
계약일 기준인지, 잔금일 기준인지 양도일을 어떻게 판단하는지 주택이 조정대상지역에 있는지 토지거래허가구역 등 별도 절차가 있는지 일시적 2주택 등 예외 적용이 가능한지 세무사에게 예상 양도세를 계산받았는지 양도세는 금액이 큰 세금이다. 기사나 블로그 글만 보고 판단하기보다는, 실제 매도 전에 세무 전문가와 계산해보는 게 안전하다.
매도, 보유, 증여를 어떻게 판단해야 할까 &nbsp; 양도세 중과가 다시 적용되면 다주택자의 선택지는 크게 세 가지로 나뉜다. 팔 것인지, 계속 보유할 것인지, 가족에게 증여할 것인지다.
먼저 매도는 세금 부담이 크더라도 자산을 정리하고 현금을 확보할 수 있다는 장점이 있다. 특히 수익성이 낮거나 앞으로 가격 상승 기대가 낮은 주택이라면 매도를 검토할 수 있다. 다만 중과세율과 장기보유특별공제 배제를 반영하면 실제 손에 남는 돈이 생각보다 적을 수 있다.
보유는 당장 양도세를 내지 않아도 된다는 장점이 있다. 양도세는 팔 때 내는 세금이기 때문이다. 하지만 계속 보유하면 재산세와 종부세 같은 보유세 부담이 이어진다. 정부 정책 방향에 따라 보유세가 더 부담될 가능성도 고려해야 한다.
증여는 양도소득세를 피하는 방법처럼 보일 수 있지만, 증여세와 취득세가 발생한다. 가족 간 저가 거래나 편법 증여로 보이면 세무조사 위험도 있다. 그래서 단순히 &ldquo;팔면 양도세가 크니 증여하면 된다&quot;라고 생각하면 안 된다.
결국 판단 기준은 하나다. 세금을 뺀 뒤 실제로 남는 돈과 앞으로의 보유 비용을 함께 비교해야 한다.
정리 &nbsp; 다주택자 양도소득세 중과는 조정대상지역 내 주택을 파는 다주택자에게 기본세율보다 높은 세율을 적용하는 제도다. 2026년 5월 9일까지 유예된 중과가 종료되면, 2026년 5월 10일부터 세금 부담이 크게 늘 수 있다.
핵심만 다시 정리하면 이렇다.
양도세는 주택을 팔아 생긴 이익에 대해 내는 세금이다. 양도세 중과는 기본세율에 추가 세율을 붙이는 제도다. 조정대상지역 내 주택을 파는 2주택 이상 보유자가 주요 대상이다. 2주택자는 기본세율 + 20%p, 3주택 이상은 기본세율 + 30%p가 적용될 수 있다. 중과 대상이면 장기보유특별공제가 배제될 수 있다. 2026년 5월 9일까지 계약한 건에 대한 유예 적용 여부는 실제 확정 기준을 확인해야 한다. 다주택자라면 &ldquo;세율이 오른다&rdquo; 정도로만 볼 게 아니라, 장기보유특별공제 배제와 지방소득세까지 포함해 실제 납부세액을 계산해봐야 한다. 매도나 증여를 고민 중이라면 계약 전에 세무 검토부터 하는 게 좋다.
자주 묻는 질문 &nbsp; 비조정대상지역 주택도 양도세 중과 대상일까? &nbsp; 아니다. 양도세 중과는 조정대상지역 내 주택을 양도하는 다주택자에게 주로 적용된다. 비조정대상지역 주택은 일반 기본세율이 적용될 수 있지만, 실제 세금은 보유기간과 주택 수, 예외 규정에 따라 달라진다.
일시적 2주택자도 중과될까? &nbsp; 일시적 2주택자는 일정 요건을 충족하면 중과 대상에서 제외될 수 있다. 다만 기존 주택 처분기한, 신규 주택 취득 시기, 조정대상지역 여부에 따라 요건이 달라질 수 있으니 매도 전에 확인해야 한다.
증여하면 양도세 중과를 피할 수 있을까? &nbsp; 증여는 양도가 아니므로 양도소득세와는 구조가 다르다. 하지만 증여세와 취득세가 발생할 수 있고, 가족 간 저가 거래나 편법 증여로 판단되면 세무 리스크가 생길 수 있다. 양도세만 보고 결정하면 안 된다.`}).add({id:49,href:"/posts/simple-vs-compound-interest/",title:"단리와 복리 차이 쉽게 비교: 이자 계산법과 그래프까지",description:"은행 이자를 비교할 때 꼭 헷갈리는 단리와 복리의 차이를 초보자 눈높이로 풀었다. 단리와 복리 계산법, 실제 비교 그래프, 그리고 복리가 무조건 좋은지까지 같이 정리했다.",content:`은행에 이자율을 알아보다 보면 단리, 복리라는 말이 꼭 나온다. 처음에는 그냥 &ldquo;이자 붙는 방식이 다르겠지&rdquo; 하고 넘기기 쉬운데, 막상 예금이나 적금을 고를 때는 이 차이가 생각보다 크게 느껴진다. 나도 최근에 예금 금리를 비교하다가 단리인지 복리인지부터 다시 확인하게 되더라.
이 글에서는 단리와 복리를 가장 쉬운 방식으로 비교해보고, 이자를 어떻게 계산하는지, 실제로 얼마나 차이가 나는지 그래프로 보여줄게. 그리고 복리가 무조건 좋은 건 아닌 이유도 같이 보자.
단리와 복리, 뭐가 다른가 &nbsp; 단리는 원금에만 이자가 붙는 방식이다. 반대로 복리는 원금에 붙은 이자까지 다시 원금처럼 계산하는 방식이다. 말은 어렵지만 핵심은 단순하다. 단리는 이자가 늘어도 계산 기준이 그대로이고, 복리는 시간이 지날수록 계산 기준이 커진다.
예를 들어 100만 원을 넣었다고 해보자.
단리: 매번 100만 원을 기준으로 이자를 계산한다 복리: 첫 이자가 붙으면 다음부터는 100만 원보다 더 큰 금액을 기준으로 이자를 계산한다 그래서 같은 금리라도 기간이 길어질수록 복리가 더 유리해진다. 이걸 흔히 &ldquo;이자가 이자를 낳는다&quot;라고 표현한다.
이자 계산법은 이렇게 보면 된다 &nbsp; 단리 계산법 &nbsp; 단리 공식은 아주 간단하다.
이자 = 원금 × 금리 × 기간
예를 들어 1,000만 원을 연 5% 단리로 3년 맡기면 이렇게 계산한다.
1년 이자: 1,000만 원 × 5% = 50만 원 3년 이자: 50만 원 × 3 = 150만 원 만기 금액: 1,150만 원 단리는 계산이 쉽고 결과도 예측하기 편하다. 그래서 만기 구조가 단순한 상품에서 자주 보인다.
복리 계산법 &nbsp; 복리는 매년 이자가 원금에 더해진 뒤, 다음 해에는 그 합계로 다시 이자를 계산한다.
복리 공식은 이렇게 볼 수 있다.
최종 금액 = 원금 × (1 + 금리)^기간
같은 조건으로 1,000만 원을 연 5% 복리로 3년 맡기면 다음처럼 늘어난다.
1년 뒤: 1,050만 원 2년 뒤: 1,102만 5천 원 3년 뒤: 약 1,157만 6천 원 3년만 보면 차이가 작아 보여도, 기간이 길어질수록 격차가 빠르게 커진다. 그래서 복리는 장기 투자나 장기 저축에서 강하다.
단리와 복리 비교 그래프 &nbsp; 아래는 원금 1,000만 원, 연 5% 기준으로 5년 동안 늘어나는 모습을 단순하게 비교한 그래프다.
기간 단리 복리 1년 1,050만 원 1,050만 원 2년 1,100만 원 1,102만 5천 원 3년 1,150만 원 1,157만 6천 원 4년 1,200만 원 1,215만 5천 원 5년 1,250만 원 1,276만 3천 원 원금 1,000만 원 / 연 5% 5년 후 비교 단리 | █████████████████████ 1,250만 원 복리 | ██████████████████████ 1,276만 원 10년 후 비교 단리 | ███████████████████████████████ 1,500만 원 복리 | █████████████████████████████████ 1,628만 원5년만 해도 차이가 조금씩 보이고, 10년이 되면 복리의 힘이 훨씬 뚜렷해진다. 이게 바로 복리가 &ldquo;시간이 만들어내는 차이&quot;라는 뜻이다.
복리가 무조건 좋은 건 아닌 이유 &nbsp; 복리는 투자나 저축에서는 유리하지만, 빚에서는 반대다. 이자가 원금에 더해지고 다시 이자가 붙는 구조라서, 돈을 빌린 입장에서는 부담이 빠르게 커진다.
특히 이런 경우는 복리 효과를 조심해야 한다.
신용카드 리볼빙 연체 이자 장기 미상환 대출 즉, 복리는 돈을 불리는 쪽에서는 강력하지만, 돈을 갚는 쪽에서는 위험하다. 그래서 복리가 좋냐 나쁘냐는 결국 내가 돈을 넣는 입장인지, 빌리는 입장인지에 따라 달라진다.
내가 은행 이자율을 비교할 때도 이 부분이 헷갈렸다. 예금은 복리가 조금이라도 유리할 수 있지만, 대출은 복리 구조가 붙는 순간 부담이 커진다. 같은 &ldquo;이자&quot;라는 단어를 써도 방향이 완전히 다르다.
언제 단리를 보고, 언제 복리를 봐야 할까 &nbsp; 예금이나 적금이라면 &nbsp; 저축 상품에서는 복리가 유리한 경우가 많다. 다만 실제로는 대부분의 정기예금이 단리 구조인 경우가 많아서, 상품 설명서에서 이자 계산 방식을 꼭 확인해야 한다.
대출이라면 &nbsp; 대출은 가능한 한 이자 부담이 적은 구조가 좋다. 그래서 금리뿐 아니라 상환 방식까지 같이 봐야 한다. 원금이 빨리 줄어들수록 총이자도 줄어든다.
장기 투자라면 &nbsp; 주식, ETF, 연금처럼 오래 가져가는 상품은 복리 효과가 잘 드러난다. 매년 수익이 다시 투자에 반영되면 시간이 갈수록 차이가 커진다.
실제로 복리의 위력은 짧은 기간보다 긴 기간에서 크게 나온다. 1년짜리에서는 별 차이 없어 보여도, 10년, 20년 단위로 가면 이야기가 완전히 달라진다.
정리하면 이렇게 보면 된다 &nbsp; 단리와 복리의 차이는 결국 이자 계산 기준이 어디까지 커지느냐의 차이다.
단리: 원금에만 이자가 붙는다 복리: 원금과 이자에 다시 이자가 붙는다 저축과 투자에서는 복리가 유리한 경우가 많다 대출과 연체에서는 복리가 부담을 키운다 은행 금리를 비교할 때는 단순히 숫자만 보지 말고, 단리인지 복리인지까지 같이 봐야 한다. 같은 5%라도 계산 방식이 다르면 최종 금액이 달라지기 때문이다.
나처럼 &ldquo;어떤 게 더 좋은지&rdquo; 비교 중이라면, 금리 숫자보다 먼저 계산 방식을 확인하는 습관부터 들이는 게 좋다. 이게 쌓이면 돈을 보는 눈이 꽤 빨리 달라진다.
자주 묻는 질문 &nbsp; Q1. 단리와 복리 중에 무조건 복리가 더 좋은가? &nbsp; 아니다. 저축이나 투자에서는 복리가 유리한 경우가 많지만, 대출이나 연체처럼 돈을 빌린 상황에서는 복리가 훨씬 불리하다.
Q2. 예금은 보통 단리인가 복리인가? &nbsp; 대부분의 정기예금은 단리인 경우가 많다. 다만 상품마다 다르니 가입 전에 약관이나 상품 설명을 확인하는 게 좋다.
Q3. 복리 효과는 언제부터 크게 느껴지나? &nbsp; 기간이 길어질수록 차이가 커진다. 짧게 보면 거의 비슷하지만, 5년, 10년, 20년처럼 장기로 갈수록 복리의 장점이 확실해진다.`}).add({id:50,href:"/posts/loan-ltv-dti-dsr/",title:"대출 받을 때 알아야 하는 LTV, DTI, DSR",description:" ",content:`LTV, DTI, DSR은 금융기관이 주택담보대출 심사 시 차주(借主, 돈을 빌리는 사람)의 상환 능력과 담보 가치를 평가하기 위해 사용하는 대표적인 규제 지표이다. 즉, 은행이 &ldquo;이 사람이 얼마나 대출을 감당할 수 있는지&rdquo; 판단하는 핵심 지표라고 할 수 있다.
각 개념에 다음과 같이 설명할 수 있다.
LTV (Loan To Value ratio) - 담보 기준 &nbsp; LTV는 주택의 담보가치 대비 대출 가능 금액의 비율을 의미한다. 이는 금융기관이 담보로 제공된 부동산의 가치에 근거하여 대출 한도를 산정할 때 활용되는 지표이다.
쉽게 말해서 집 가격 대비 얼마나 대출이 가능한지를 나타내는 비율을 말하고, &ldquo;집 자체 가치 기준으로 얼마나 빌려줄까?&ldquo;를 의미한다.
계산식 &nbsp; LTV = 대출금 / 주택 가격예를 들어, 주택 가격이 10억 원이고 LTV가 70%로 적용될 경우, 최대 대출 가능 금액은 7억 원이 된다.
최대 대출 = 10억 × 70% = 7억
특징 &nbsp; LTV는 차주의 소득이나 기존 부채보다는 담보 자산의 가치에 중점을 둔 지표이며, 정부의 부동산 정책이나 지역 규제에 따라 허용 비율이 달라질 수 있다.
집 가격만 기준 소득은 고려 안함 정부 부동산 규제에 따라 지역별로 다름 DTI (Debt To Income) - 소득 대비 &ldquo;주담대 중심&rdquo; &nbsp; DTI는 연 소득 대비 주택담보대출 원리금 상환액과 일부 기타 부채 이자의 비율을 의미한다. 이는 차주의 소득 수준을 기준으로 주택담보대출 상환 부담을 평가하기 위해 사용된다.
여기서는 주택담보대출 비중이 크고, 기타 대출은 일부만 반영된다.
계산식 &nbsp; DTI = (주택담보대출 원리금 + 기타 대출 이자) / 연 소득예를 들어, 연 소득이 1억 원이고 주택담보대출 원리금 상환액이 3천만 원이며 기타 대출 이자가 5백만 원일 경우, DTI는 35%가 된다.
연 소득 : 1억 주담대 원리금 : 3천만 기타 대출 이자 : 5백만 DTI = 3,500 / 10,000 = 35%
특징 &nbsp; DTI는 과거 대출 규제에서 핵심적인 역할을 하였으나, 현재는 DSR 제도의 도입으로 상대적으로 중요성이 감소하였다.
예전 대출 규제 핵심 현재는 DSR보다 영향이 작음 DSR (Debt Service Ratio) - 전체 대출 기준(가장 중요) &nbsp; DSR은 차주의 모든 대출 원리금 상환액을 연 소득과 비교하여 산정하는 비율이다. 이는 차주의 전체 부채 상환 능력을 종합적으로 평가하는 가장 강력한 금융 규제 지표로 활용된다.
간단히 말해 모든 대출의 원리금을 소득 대비 계산이며, &ldquo;이 사람이 가진 모든 빚을 감당 가능?&ldquo;를 평가한다.
계산 공식 &nbsp; DSR = 모든 대출 원리금 합 / 연 소득여기에는 주택담보대출뿐 아니라 신용대출, 자동차 할부, 카드론, 학자금 대출 등 대부분의 금융 부채가 포함된다.
주택담보대출 신용대출 자동차 할부 카드론 학자금 대출 등 예를 들어, 연 소득이 1억 원이고 전체 대출 원리금 상환액이 4천5백만 원이라면 DSR은 45%가 된다.
연 소득 : 1억 주담대 원리금 : 3천만 신용대출 원리금 : 1천만 자동차 할부 : 5백만 DSR = 4,500 / 10,000 = 45%
특징 &nbsp; 현재 금융권에서는 통상적으로 은행권 기준 약 40% 내외의 DSR 규제를 적용하고 있다.
보통 은행 : 40% 전후 비은행 : 더 높음 정리 &nbsp; 한 번에 비교 &nbsp; 구분 기준 핵심 질문 LTV 집 가격 담보가치 DTI 소득 주담대 상환 가능? DSR 소득 전체 빚 상환 가능? ⭐ 쉽게 비유하면 &nbsp; LTV: &ldquo;이 집 자체가 얼마짜리냐?&rdquo; DTI: &ldquo;월급 대비 집 대출 감당 가능?&rdquo; DSR: &ldquo;지금 가진 모든 빚 감당 가능?&rdquo; 실제 대출 영향 순서 (중요도) &nbsp; 현재 기준
DSR &gt; LTV &gt; DTI요즘은 DSR 때문에 대출 한도가 막히는 경우가 가장 많다.
@
실무 팁 (부동산 구매 시 매우 중요) &nbsp; LTV는 집 가격 영향 DSR은 개인 재무 영향 즉, &ldquo;집 가격 낮춰도&rdquo;, &ldquo;기존 신용대출 많으면&rdquo; 대출 안 나올 수 있음
사람들이 자주 오해하는 점 &nbsp; LTV 70%면 무조건 70% 대출 가능 → DSR에서 막히면 불가능 소득 높으면 대출 무조건 많이 가능 → LTV 제한 있음 한 줄 정리 &nbsp; LTV = 집 기준 DTI = 주담대 중심 소득 기준 DSR = 전체 빚 기준 (현재 핵심)`}).add({id:51,href:"/posts/loan-repayment-methods/",title:"대출 상환 방법 쉽게 정리, 원리금 균등·원금 균등·만...",description:"대출 상환 방법은 매달 갚는 금액과 총이자 비용을 크게 바꾼다. 원리금 균등, 원금 균등, 만기 일시, 거치 후 상환의 차이를 쉽게 정리한다.",content:`대출을 받을 때 금리만 보는 경우가 많다. 물론 금리는 중요하다. 그런데 실제로 매달 내 통장에서 빠져나가는 돈은 &ldquo;상환 방법&quot;에 따라 크게 달라진다.
같은 금액을 같은 금리로 빌려도 원리금 균등 상환인지, 원금 균등 상환인지, 만기 일시 상환인지에 따라 매달 부담과 총이자 비용이 달라진다. 그래서 대출을 받을 때는 &ldquo;얼마나 빌릴 수 있나&quot;만 볼 것이 아니라 &ldquo;어떤 방식으로 갚을 것인가&quot;도 같이 봐야 한다.
이번 글에서는 대출 상환 방법을 처음 접하는 사람도 이해할 수 있도록 가장 많이 쓰이는 방식들을 쉽게 정리해 보겠다.
대출 상환에서 먼저 알아야 할 단어 &nbsp; 대출 상환을 이해하려면 원금, 이자, 원리금이라는 단어부터 알아야 한다.
원금 은 실제로 빌린 돈이다. 은행에서 1,000만 원을 빌렸다면 원금은 1,000만 원이다.
이자 는 돈을 빌린 대가로 내는 비용이다. 대출 금리가 높을수록 이자 부담도 커진다.
원리금 은 원금과 이자를 합친 금액이다. 매달 &ldquo;원리금을 상환한다&quot;는 말은 원금 일부와 이자를 함께 갚는다는 뜻이다.
대출 상환 방식은 결국 이 원금과 이자를 어떤 순서와 비율로 갚을지 정하는 방식이라고 보면 된다.
[원리금 균등 상환] 매달 같은 금액을 내는 방식 &nbsp; 원리금 균등 상환은 매달 갚는 금액이 거의 동일한 방식이다. 원금과 이자를 합친 원리금이 매월 일정하게 계산되기 때문에 자금 계획을 세우기 쉽다.
예를 들어 매달 50만 원씩 갚는 구조라면 대출 기간 동안 비슷한 금액이 계속 빠져나간다. 초기에는 이자 비중이 크고 원금 상환 비중은 작다. 시간이 지날수록 이자 비중은 줄고 원금 상환 비중이 커진다.
이런 사람에게 잘 맞는다 &nbsp; 매월 고정적인 월급이 들어오는 직장인에게 잘 맞는다. 매달 나가는 금액이 일정하니 생활비, 저축, 카드값 등을 함께 관리하기 편하다.
처음 대출을 받는 사람도 이해하기 쉽다. &ldquo;매달 얼마를 내면 되는지&quot;가 명확하기 때문에 가계부를 짜기 좋다.
장점과 단점 &nbsp; 장점은 매달 상환액이 일정하다는 점이다. 소득이 안정적인 사람에게는 가장 무난한 방식이다.
단점은 원금 균등 상환보다 총이자 비용이 더 많이 나올 수 있다는 점이다. 초반에 원금이 천천히 줄어들기 때문에 이자가 붙는 기간이 상대적으로 길어진다.
[원금 균등 상환] 원금을 똑같이 나누어 갚는 방식 &nbsp; 원금 균등 상환은 매달 갚는 원금이 같은 방식이다. 예를 들어 1,200만 원을 12개월 동안 원금 균등으로 갚는다면 매달 원금 100만 원씩 상환한다. 여기에 남은 원금에 대한 이자가 붙는다.
이 방식은 시간이 지날수록 남은 원금이 줄어들기 때문에 이자도 같이 줄어든다. 그래서 매달 내는 전체 상환액은 처음에는 크고, 뒤로 갈수록 점점 작아진다.
총이자를 줄이고 싶다면 유리하다 &nbsp; 원금 균등 상환의 가장 큰 장점은 총이자 비용이 적다는 점이다. 원금을 초반부터 빠르게 줄이기 때문에 이자가 붙는 금액도 빨리 줄어든다.
대출 기간 전체로 보면 원리금 균등 상환보다 이자 부담이 작아지는 경우가 많다.
초반 부담은 더 크다 &nbsp; 단점은 초반 월 상환액이 크다는 점이다. 대출을 받은 직후에는 이자도 많이 붙고 원금도 일정하게 갚아야 하므로 첫 몇 달의 부담이 크게 느껴질 수 있다.
그래서 소득에 여유가 있거나, 앞으로 빨리 빚을 줄이고 싶은 사람에게 더 잘 맞는다.
[만기 일시 상환] 이자만 내다가 마지막에 원금을 갚는 방식 &nbsp; 만기 일시 상환은 대출 기간 중에는 이자만 내고, 만기일에 원금을 한 번에 갚는 방식이다. 예를 들어 1,000만 원을 빌렸다면 매달 이자만 내다가 만기일에 1,000만 원을 한꺼번에 상환한다.
이 방식은 초기에 매달 나가는 돈이 가장 적다. 원금을 갚지 않고 이자만 내기 때문이다.
초기 부담은 작지만 마지막 부담은 크다 &nbsp; 만기 일시 상환의 장점은 당장 현금 흐름이 가벼워진다는 점이다. 사업 자금, 전세자금, 단기 자금처럼 일정 기간 뒤 목돈이 들어올 가능성이 있는 경우에 활용되기도 한다.
하지만 단점도 분명하다. 원금을 대출 기간 내내 그대로 두기 때문에 총이자가 커질 수 있고, 만기 때 큰돈을 한 번에 갚아야 한다.
만기일에 원금을 갚을 계획이 확실하지 않다면 위험할 수 있다. &ldquo;나중에 어떻게든 되겠지&quot;라는 생각으로 선택하기에는 부담이 큰 방식이다.
거치 후 상환: 일정 기간 이자만 내고 나중에 원금을 갚는 방식 &nbsp; 거치 후 상환은 처음 일정 기간 동안 이자만 내다가, 거치 기간이 끝난 뒤 원리금 균등 또는 원금 균등 방식으로 갚는 구조다.
예를 들어 1년 거치 후 4년 상환이라면 첫 1년은 이자만 내고, 이후 4년 동안 원금과 이자를 나누어 갚는다.
당장 소득이 낮거나 지출이 큰 시기에 활용된다 &nbsp; 거치 기간이 있으면 초반 상환 부담을 낮출 수 있다. 이사 직후, 창업 초기, 학업 기간, 출산이나 육아처럼 당장 현금 지출이 큰 시기에 도움이 될 수 있다.
하지만 거치 기간 동안 원금은 줄지 않는다. 그래서 전체 대출 기간으로 보면 이자 부담이 커질 수 있다. 거치 기간이 길수록 &ldquo;편한 기간&quot;은 늘어나지만, 그만큼 나중에 갚아야 할 부담도 커진다.
상환 방식별 차이 한 번에 비교 &nbsp; 상환 방식을 고를 때는 매달 부담, 총이자, 내 소득 흐름을 함께 봐야 한다.
상환 방식 매달 부담 총이자 부담 특징 원리금 균등 상환 매달 비슷함 중간 수준 자금 계획을 세우기 쉽다 원금 균등 상환 초반 높고 점점 낮아짐 가장 적은 편 총이자를 줄이기 좋다 만기 일시 상환 대출 기간 중 가장 낮음 큰 편 만기에 원금을 한 번에 갚는다 거치 후 상환 초반 낮고 이후 증가 커질 수 있음 일정 기간 이자만 낸다 단순히 편한 방식만 고르면 나중에 이자 부담이 커질 수 있다. 반대로 총이자만 보고 원금 균등 상환을 선택했다가 초반 월 상환액이 부담되어 생활비가 꼬일 수도 있다.
대출은 &ldquo;가장 좋은 방식&quot;이 따로 있다기보다 &ldquo;내 상황에 맞는 방식&quot;이 중요하다.
어떤 상환 방식을 선택하면 좋을까? &nbsp; 월급이 일정하고 매달 나가는 돈을 예측하고 싶다면 원리금 균등 상환이 무난하다. 대부분의 직장인에게 이해하기 쉽고 관리하기 쉬운 방식이다.
총이자를 최대한 줄이고 싶고 초반 상환 부담을 감당할 수 있다면 원금 균등 상환이 유리하다. 빚을 빠르게 줄이고 싶은 사람에게 잘 맞는다.
당장 월 상환 부담을 낮춰야 하고, 만기 때 원금을 갚을 계획이 확실하다면 만기 일시 상환을 고려할 수 있다. 다만 만기 자금 계획이 약하면 위험하다.
초기에는 소득이 낮지만 시간이 지나면서 상환 능력이 좋아질 가능성이 있다면 거치 후 상환도 선택지가 될 수 있다. 하지만 거치 기간 동안 원금이 줄지 않는다는 점은 꼭 기억해야 한다.
대출을 여러 개 가지고 있다면 상환 방식과 별개로 금리가 높은 대출부터 먼저 갚는 것이 일반적으로 효율적이다. 같은 100만 원을 갚더라도 금리 10% 대출을 줄이는 것이 금리 4% 대출을 줄이는 것보다 이자 절감 효과가 크다.
정리 &nbsp; 대출 상환 방법은 단순한 선택지가 아니라 내 현금 흐름과 총이자 비용을 결정하는 중요한 조건이다.
핵심만 정리하면 원리금 균등 상환은 매달 같은 금액을 내기 좋아서 안정적인 직장인에게 잘 맞고, 원금 균등 상환은 초반 부담은 크지만 총이자를 줄이기 좋다. 만기 일시 상환은 초기 부담이 가장 작지만 만기 때 원금을 한 번에 갚아야 하며, 거치 후 상환은 초반 여유를 주는 대신 전체 이자가 늘어날 수 있다.
대출을 받을 때는 금리, 한도, 상환 기간만 보지 말고 상환 방식까지 같이 비교하자. 매달 실제로 감당 가능한 금액을 먼저 계산해 보면 무리한 대출을 피하는 데 도움이 된다.
자주 묻는 질문 &nbsp; 원리금 균등 상환과 원금 균등 상환 중 무엇이 더 좋을까? &nbsp; 매달 같은 금액을 내고 싶다면 원리금 균등 상환이 편하다. 총이자를 줄이고 싶고 초반 상환 부담을 감당할 수 있다면 원금 균등 상환이 유리하다.
만기 일시 상환은 왜 조심해야 할까? &nbsp; 대출 기간 중에는 이자만 내서 부담이 작아 보이지만, 만기일에 원금을 한 번에 갚아야 한다. 만기 자금 계획이 확실하지 않으면 대출 연장이나 추가 대출에 의존하게 될 수 있다.
대출을 빨리 갚고 싶다면 어떤 순서가 좋을까? &nbsp; 일반적으로 금리가 높은 대출부터 먼저 갚는 것이 효율적이다. 다만 중도상환수수료가 있는 상품도 있으므로 실제로 갚기 전에는 수수료와 절감되는 이자를 함께 계산해야 한다.`}).add({id:52,href:"/docs/loan/glossary/",title:"대출 용어",description:` 대출이란? 돈을 빌리는 것을 말한다. 그러면 돈은 어디서 빌려야 하나? 흔하게 은행을 생각해 볼 수 있다. 그런데 처음 돈을 빌리기 위해 처음 은행에 가면 도대체 무슨 말을 하는지 알 수가 없다. 실은 나도 그랬고, 지금도 모르는 단어가 나올 때도 있다. 그래서 당황하지 말고 미리 간단히 단어라도 읶혀 가면 도움을 될 것이다. 여기에서는 최대한 쉽게 설명해 보도록 하겠다.
`,content:`대출이란? 돈을 빌리는 것을 말한다. 그러면 돈은 어디서 빌려야 하나? 흔하게 은행을 생각해 볼 수 있다. 그런데 처음 돈을 빌리기 위해 처음 은행에 가면 도대체 무슨 말을 하는지 알 수가 없다. 실은 나도 그랬고, 지금도 모르는 단어가 나올 때도 있다. 그래서 당황하지 말고 미리 간단히 단어라도 읶혀 가면 도움을 될 것이다. 여기에서는 최대한 쉽게 설명해 보도록 하겠다.
용어 정리 &nbsp; 대출(貸出: 빌리 대, 날 출) : 돈이나 물건 따위를 빌려주거나 빌리는 행위를 말한다.
융자(融資: 녹을 용, 재물 자) : 채무의 일종으로 자금을 융통하는 일이나 그 자금을 말한다. 즉 돈을 빌라는 것을 말하므로 대출과 같은 의미이다.
담보(擔保: 멜 담, 지킬 보) : 돈을 빌리는 대출자(채무자)가 돈을 제대로 갚지 않을 것에 대비하는 장치이다.
이자(利子: 이로울 이, 아들 자) : 돈을 빌리게 되면 빌린 돈에 대한 금액과 기간에 따라 이자가 발생한다. 이자는 돈을 빌리면서 발생하는 사용료라고 볼수 있다. 그 이자를 결정하는 것이 금리가 된다.
금리(金利: 쇠 금, 이로울 이) : 빌려준 돈이나 예금 따위에 붙는 이자 뜨는 그 비율을 말한다.
원금(元金: 으뜸 원, 쇠 금) : 실제 빌린 금액을 말한다.
원리금(元利金: 으뜸 원, 이로울 이, 쇠 금) : 원금과 이자를 합한 말이다.
대출의 종류 &nbsp; 신용대출 : 대출을 하려는 사람의 신용도를 판단하여 돈을 빌리는 것을 말한다. 신용도는 신용평가기관에서 대출자의 직업, 거래사항, 가족사항, 경제적 상황 등을 고려하여 &ldquo;신용등급(점수)&ldquo;을 참고하기 때문에 대출금액과 금리를 결정하게 된다. 그러기 때문에 평소 신용점수를 지속해서 관리하면 더욱 유리한 조건으로 대출을 받을 수가 있다. 장점으로 간단한 대출 절차를 들 수 있고, 단점으로는 담보대출에 대해 높은 대출 이자가 단점이다.
담보대출 : 돈을 빌릴 때 부동산, 전세보증금, 동산, 유가증권, 채권, 보증보험증권 등의 물적 담보로 하여 돈을 빌리는 것을 말한다. 아파트, 연립주택 등 주택을 담보로하는 주택담보 대출이 대표적이다. 대출절차는 신용대출보다 복잡하지만, 대출이자율이 낮다는 장점이 있다.
전세자금대출 : 전세자금을 담보로 대출받는 것을 말하는데 대다수의 전세자금대출 상품은 주택도시보증공사, 한국주택금융공사, 서울보증보험 등의 보증서를 담보로 하여 대출을 받을 수 있다. 낮은 대출이자가 장점이다.
대출금리 &nbsp; 변동금리 : 금리가 대출기간 동안 고정되어 있지 않고 주기적으로 변하는 것을 변동금리라고 한다. 대출 상품에 따란 6개월, 1년 등 변동주기도 다르다. 변동금리 대출상품의 경우 시장금리에 따라서 대출금리가 조정되기 때문에 시장금리가 상승하면 대출금리도 같이 상승한다. 따라서 금리 상승기에는 대출자에게 불리한 측면이 있다.
고정금리 : 대출받는 시점의 금리가 대출의 만기까지 변하지 않는 경우를 고정금리라고 한다. 고정금리 대출상품의 경우 시중금리가 올라가도 대출금리를 올릴 수가 없기 때문에 이에 대한 위험을 반영하여 일반적으로 변동금리보다 대출금리가 0.5%~1% 정도 높게 측정되지만, 금리 상승기에는 영향을 받지 않기 때문에 유리할 수도 있다. 그리고 금리가 변경되지 않기 때문에 계획적으로 대출금을 상환하기에는 고정 금리가 적합하다.
대출상환 &nbsp; 만기일시상환 : 대출 기간이 끝날 때까지는 매월 이자만 갚다가 대출 만기일에 되원을 때 대출의 원금과 남은 이자를 한 번에 갚는 방식이다. 만기일까지는 이자만 내기 때문에 달마다 갚아야 할 돈의 부담이 적지만, 한 번에 큰돈을 갚아야 하는 단점이 있다.
원금 균등분할상환 : 매월 원금을 균등하게 상환하는 방식이다. 원금의 &ldquo;잔액에 따른 금리를 적용하여 이자를 산출하기에 매월 이자가 줄어드는 형태로 총 이자액이 가장 적다. 예를 들어, 만기 1년에 1000만원을 빌렸을 때, 첫달은 1000만원에 대한 이자가 붙지만, 그 다음 달은 900만원에 대한 이자가 붙게 된다.
원리금 균등분할상환 : 원금과 이자를 매월 균등하게 분할하여 갚는 방식으로 총 상환금액을 대출 기간으로 균등하게 나눠서 상환하게 된다. 초기에는 이자금액이 높고 점차 원금 상환 비율이 높아진다.
중도상환 : 대출만기가 끝나기 전에 대출금을 갚는 것을 의미한다. 여유자금이 생겼을 때, 미리 대출원금을 상환해서 이자 부담을 줄일 수 있으나 대출상품에 따라 중도상환을 할 때 수수료가 붙는 경우도 있다.
완제 &nbsp; 대출 받은 금액을 전액 상환하면 대출을 완제하였다고 한다.`}).add({id:53,href:"/news/2026/taihan-fiberoptics-ai-infrastructure/",title:"대한광통신, AI 데이터센터 광케이블 기대와 1분기 적...",description:"대한광통신은 인캡아메리카 인수와 AI 데이터센터 광케이블 수요 기대가 커졌지만, 1분기 적자 지속과 밸류에이션 부담도 함께 확인됐다.",content:`이번 브리핑은 대한광통신 관련 보도가 최근 7일 안에 충분히 누적되지 않아, 신뢰할 만한 기사와 공시가 확인되는 2026년 4월 20일부터 2026년 5월 20일까지의 자료를 함께 정리했다.
주요 내용 &nbsp; 대한광통신은 2026년 5월 6일 미국 광섬유 케이블 업체 인캡아메리카(Incab America LLC) 인수를 완료했다고 밝혔다. 100% 자회사 티에프오네트웍스를 통해 최종 지분 90%를 확보하면서 북미 전력·광통신 인프라 시장 대응 기반을 마련했다. 시장의 핵심 기대는 AI 데이터센터 확산으로 광섬유·광케이블 수급이 빡빡해지고, 미국 내 생산 거점과 BABA(Build America, Buy America) 요건 대응력이 대한광통신의 수주 기회로 이어질 수 있다는 점이다. 한국투자증권은 2026년 5월 6일 분석에서 대한광통신이 모재(Preform)부터 광섬유, 광케이블까지 이어지는 수직계열화 구조를 갖춘 점을 강점으로 봤다. 2026년 하반기 미국 BEAD 보조금 집행이 본격화되면 통신망 투자 확대에 따른 추가 수주 가능성도 거론했다. 다만 2026년 5월 15일 접수된 1분기 분기보고서 이후에는 실적 검증 부담도 커졌다. 시장 분석 자료에 따르면 1분기 매출은 전년 동기보다 늘었지만 영업손실이 지속돼 흑자전환 시점은 인캡아메리카 연결 편입과 864심 초고밀도 케이블 매출 인식이 본격화되는 2~3분기 이후로 밀린 모습이다. 2026년 4월에는 유상증자를 통해 약 550억원을 조달했다는 보도도 나왔다. 청약 흥행과 재무구조 개선은 긍정적이지만, 주식 수 증가에 따른 희석과 지배력 약화, 조달 자금의 실제 투자 효율은 계속 확인해야 할 변수다. 주가는 AI 인프라와 광통신 쇼티지 기대를 빠르게 반영하며 단기 변동성이 커졌다. 5월 4일에는 외국인과 기관의 동시 순매수 속에 장중 13%대 상승이 보도됐고, 5월 20일 기준으로도 투자자 관심이 높은 상태다. 결론적으로 대한광통신의 투자 포인트는 &ldquo;북미 현지 생산 기반과 AI 데이터센터용 광케이블 수요&quot;이고, 리스크는 &ldquo;아직 확인되지 않은 흑자전환, 높은 기대를 반영한 주가, 유상증자 이후 주주가치 희석&quot;으로 요약된다. 주요 트렌드 &nbsp; AI 데이터센터 투자가 서버와 반도체를 넘어 전력망, 송전망, 광통신망 같은 물리 인프라 수요로 확장되고 있다. 글로벌 광섬유 병목이 모재와 고성능 케이블 생산능력에서 발생한다는 분석이 나오면서 수직계열화 업체에 대한 관심이 커지고 있다. 미국 인프라 시장에서는 BEAD 보조금과 BABA 규정 때문에 현지 생산·공급망 확보 여부가 수주 경쟁력의 핵심 조건으로 부각되고 있다. 광통신 관련주는 실적보다 먼저 테마 기대가 반영되는 구간에 들어서면서 수급 변화에 따른 주가 진폭이 커졌다. 핵심 이슈 &nbsp; 인캡아메리카 인수 완료는 북미 사업 확장의 실질적 기반이지만, 연결 편입 이후 매출·마진 기여가 얼마나 빠르게 나타나는지는 아직 확인 단계다. 1분기 영업손실 지속은 대한광통신의 턴어라운드 스토리가 아직 숫자로 완성되지 않았다는 신호다. 864심 초고밀도 케이블 공급 계약과 빅테크향 매출 인식 기대는 긍정적이지만, 구체적인 고객·물량·마진 구조가 제한적으로 공개돼 있다. 유상증자로 조달한 자금이 차입금 상환, 미국 사업 운영자금, 설비투자에 쓰일 예정이지만, 주가 상승기에 이뤄진 증자라 투자자는 희석 효과도 함께 봐야 한다. 시장 영향 &nbsp; 대한광통신은 국내 광통신·전력 케이블 관련주 가운데 AI 인프라 수혜 기대가 집중되는 종목으로 자리 잡았다. 인캡아메리카 인수는 미국 현지 생산 거점을 가진 국내 중소형 광통신 업체라는 희소성을 강화한다. 반대로 실적 개선 속도가 기대보다 늦어지면 테마 프리미엄이 빠르게 줄어들 수 있다. 특히 1분기 적자 지속 이후에는 2분기 연결 편입 효과와 3분기 수주 매출 인식 여부가 시장의 검증 포인트가 된다. 광통신 테마 전반에는 긍정적 수요 논리와 단기 과열 논리가 동시에 존재한다. 따라서 종목별로 실제 수주, 매출 전환, 원가 부담, 운전자본 흐름을 구분해 볼 필요가 있다. 향후 전망 &nbsp; 단기적으로는 2026년 2분기부터 인캡아메리카 연결 편입 효과가 재무제표에 어떻게 반영되는지가 중요하다. 하반기에는 북미 BEAD 집행, 데이터센터 투자 확대, 864심 초고밀도 케이블 매출 인식 여부가 실적 방향을 좌우할 가능성이 크다. 원재료 가격, 관세 부담, 미국 현지 생산 전환 비용이 마진 개선 속도를 제한할 수 있다. 주가 측면에서는 수주 뉴스보다 분기 실적과 현금흐름이 더 중요해질 수 있다. 이미 기대가 크게 반영된 상태라 숫자로 확인되는 턴어라운드가 필요하다. 주요 뉴스 &nbsp; 2026-05-15 DART: 대한광통신 2026년 1분기 분기보고서
대한광통신은 2026년 5월 15일 1분기 분기보고서를 제출했다. 공시 자체는 회사의 공식 재무·사업 현황을 확인할 수 있는 1차 자료이며, 이후 시장에서는 매출 증가에도 영업손실이 이어졌다는 점과 인캡아메리카 연결 편입 전 실적이라는 점이 함께 해석됐다.
2026-05-06 뉴시스: 대한광통신, 美 인캡아메리카 인수 완료&hellip;지분 90% 확보
대한광통신은 100% 자회사 티에프오네트웍스를 통해 미국 광섬유 케이블 업체 인캡아메리카 인수를 완료했다. 최종 지분율은 90%이며, 회사는 AI 데이터센터 확산으로 늘어나는 북미 전력·통신망 수요에 대응할 현지 생산 기반을 확보했다고 설명했다.
2026-05-06 아시아경제 CORE: 대한광통신, 美인캡아메리카 인수 마무리
아시아경제는 인캡아메리카가 텍사스 그레이프바인 생산시설을 기반으로 OPGW, ADSS, 덕트용·옥내외 광케이블 등을 생산한다고 전했다. 미국 BEAD 프로그램과 BABA 규정 때문에 미국 내 생산 제품 사용 요구가 커지는 만큼, 이번 인수가 북미 인프라 수주 대응력을 높이는 계기로 해석된다.
2026-05-06 이데일리: 대한광통신, 광케이블 쇼티지 수혜&hellip;AI 인프라 진입으로 성장 가속-한투
한국투자증권은 대한광통신이 모재부터 광섬유·광케이블까지 수직계열화한 업체라는 점을 강점으로 평가했다. 2026년 하반기 BEAD 보조금 집행과 글로벌 데이터센터 확장이 맞물리면 추가 수주 기대가 생길 수 있지만, 원재료 가격과 실제 매출 인식 속도는 확인이 필요하다.
2026-05-04 뉴스핌: 대한광통신, 외국인·기관 동시 순매수&hellip;주가 +13.53%
뉴스핌은 2026년 5월 4일 장중 대한광통신에 외국인과 기관 순매수가 동시에 유입되며 주가가 13%대 상승했다고 전했다. 이 보도는 기업 펀더멘털 변화보다는 AI 인프라 기대와 광통신 테마 수급이 단기 주가 변동성을 키우고 있음을 보여준다.
2026-04-20 블로터: 유증 흥행&hellip;지배력 약화는 과제 I 대한광통신
블로터는 대한광통신이 주주배정 후 실권주 일반공모 방식 유상증자로 약 550억원을 조달했다고 보도했다. 청약률은 105.19%로 흥행했지만, 조달 자금 사용처와 주주 희석, 지배력 약화가 향후 투자자가 확인해야 할 과제로 제시됐다.
2026-05-18 알파증류소: 대한광통신 1Q26 흑전 시계는 1분기를 건너뛰었다
알파증류소는 2026년 1분기 실적에서 매출 증가에도 영업손실이 이어졌다고 평가하며, 흑자전환 기대가 2분기 이후로 미뤄졌다고 분석했다. 인캡아메리카 연결 편입과 864심 케이블 매출 인식은 하반기 개선 요인이지만, 현재 주가에는 상당한 기대가 반영됐다는 경계도 함께 제시했다.
한줄 요약 &nbsp; 대한광통신은 AI 데이터센터 광케이블과 북미 현지 생산 거점이라는 강한 성장 스토리를 확보했지만, 2026년 1분기 적자 지속 이후에는 인캡아메리카 연결 효과와 실제 수주 매출 전환을 숫자로 증명해야 하는 국면에 들어섰다.`}).add({id:54,href:"/posts/deposit-loan-interest-basics/",title:"돈을 맡기면 왜 이자를 줄까? 예금금리와 대출금리의 원리",description:"은행에 돈을 맡기면 왜 이자를 주는지, 예금금리와 대출금리는 어떻게 다른지, 은행이 돈을 버는 예대마진 구조까지 초보자 눈높이로 정리했다.",content:`은행에 돈을 맡기면 시간이 지난 뒤 이자가 붙는다. 처음 금융을 배울 때는 이 부분이 조금 이상하게 느껴질 수 있다. 은행이 내 돈을 보관해주는데 왜 오히려 나에게 돈을 더 줄까.
반대로 대출을 받으면 은행에 이자를 내야 한다. 같은 이자인데 예금할 때는 받고, 대출할 때는 낸다. 결국 이자를 이해하려면 은행이 돈을 어떻게 모으고, 그 돈을 어떻게 굴리는지 알아야 한다.
이 글에서는 이자와 금리의 기본 개념부터 예금금리, 대출금리, 예대마진까지 초보자도 이해하기 쉽게 정리하였다.
이자와 금리는 무엇이 다를까 &nbsp; 이자는 돈을 빌려준 대가로 받거나, 돈을 빌려 쓴 대가로 내는 돈이다. 친구에게 10,000원을 빌려줬는데 나중에 11,000원을 돌려받았다면, 추가로 받은 1,000원이 이자다.
은행 예금도 구조는 비슷하다. 내가 은행에 돈을 맡기면 은행은 그 돈을 일정 기간 사용할 수 있다. 은행은 그 대가로 예금자에게 이자를 준다.
금리는 이자가 붙는 비율이다. 예를 들어 예금금리가 연 3%라면, 1년 동안 돈을 맡겼을 때 원금의 3%만큼 이자가 붙는다는 뜻이다.
이자 = 원금 x 금리 x 기간예를 들어 100만 원을 연 3% 정기예금에 1년 동안 맡기면 세전 이자는 3만 원이다.
항목 예시 원금 100만 원 예금금리 연 3% 기간 1년 세전 이자 3만 원 실제로 통장에 들어오는 이자는 세금이 빠진 뒤 금액이다. 그래서 예금 상품을 볼 때는 세전 이자와 세후 이자를 구분해서 봐야 한다.
은행은 왜 예금자에게 이자를 줄까 &nbsp; 은행은 돈을 단순히 보관만 하는 곳이 아니다. 은행은 예금을 통해 돈을 모으고, 그 돈을 필요한 사람이나 기업에 대출해준다.
예금자 입장에서는 은행에 돈을 맡기는 것이고, 은행 입장에서는 고객에게서 돈을 빌리는 것과 비슷하다. 그래서 은행은 돈을 맡겨준 사람에게 예금이자를 지급한다.
은행이 예금자에게 이자를 주는 이유는 간단하다. 고객이 돈을 맡겨야 은행도 대출을 해줄 자금을 마련할 수 있기 때문이다. 아무런 이자를 주지 않는다면 사람들은 굳이 돈을 오래 맡기려 하지 않을 수 있다.
예금금리는 은행이 돈을 모으기 위해 지불하는 비용이라고 보면 된다. 금리가 높을수록 예금자는 더 많은 이자를 받을 수 있지만, 은행 입장에서는 돈을 조달하는 비용이 커진다.
예를 들어 A은행은 정기예금 금리를 연 2%로 주고, B은행은 연 4%로 준다고 해보자. 조건이 비슷하다면 많은 사람은 B은행을 선택할 가능성이 크다. 그래서 은행들은 필요한 자금을 모으기 위해 예금금리를 조정한다.
대출금리는 왜 예금금리보다 높을까 &nbsp; 대출금리는 은행에서 돈을 빌릴 때 내는 이자율이다. 은행은 예금자에게는 이자를 주고, 대출자에게는 이자를 받는다.
예를 들어 은행이 예금자에게 연 3% 이자를 주고 돈을 모은 뒤, 대출자에게 연 5%로 돈을 빌려준다고 해보자. 은행은 받은 대출이자와 지급한 예금이자의 차이에서 수익을 낼 수 있다.
구분 은행 입장 고객 입장 예금금리 비용 이자 수익 대출금리 수익 이자 비용 대출금리가 예금금리보다 높은 이유는 은행도 위험과 비용을 부담하기 때문이다. 대출을 받은 사람이 돈을 제때 갚지 못할 수도 있고, 은행은 지점 운영비, 인건비, 시스템 비용, 자본 규제 같은 여러 비용도 감당해야 한다.
그래서 대출금리에는 단순한 조달비용만 들어가지 않는다. 고객의 신용도, 담보 여부, 대출 기간, 은행의 가산금리, 우대금리 조건까지 함께 반영된다.
대출금리 = 기준이 되는 금리 + 가산금리 - 우대금리신용점수가 높고 안정적인 소득이 있으며 담보가 충분하면 대출금리가 낮아질 수 있다. 반대로 연체 위험이 크거나 담보가 부족하면 은행은 더 높은 금리를 요구할 수 있다.
예대마진을 알면 은행 수익 구조가 보인다 &nbsp; 은행이 예금자에게 주는 이자보다 대출자에게 받는 이자가 더 클 때, 그 차이를 예대마진이라고 한다. 예금과 대출 사이에서 생기는 금리 차이라고 보면 된다.
예를 들어 은행이 예금금리 연 3%로 돈을 모아 대출금리 연 5%로 빌려준다면, 단순하게는 2%포인트 차이가 생긴다. 이 차이가 은행의 중요한 수익원이 된다.
다만 예대마진이 전부 은행의 순이익이 되는 것은 아니다. 은행은 대출 부실에 대비해 충당금을 쌓아야 하고, 지점과 전산 시스템을 운영해야 하며, 각종 규제 비용도 부담한다.
그래도 예대마진은 은행업을 이해할 때 가장 기본이 되는 개념이다. 은행은 돈이 남는 사람에게서 예금을 모으고, 돈이 필요한 사람에게 대출해주며, 그 과정에서 금리 차이를 통해 수익을 만든다.
이 구조를 알면 뉴스에서 &ldquo;예금금리는 내려가는데 대출금리는 높다&quot;거나 &ldquo;은행의 이자이익이 늘었다&quot;는 말을 들었을 때 훨씬 이해하기 쉽다.
내 돈에 적용할 때 확인할 점 &nbsp; 이자와 금리를 알면 예금과 대출을 볼 때 기준이 생긴다. 단순히 &ldquo;금리가 높다&rdquo;, &ldquo;금리가 낮다&quot;만 볼 것이 아니라 내 상황에서 실제로 받거나 내는 돈이 얼마인지 계산해야 한다.
예금을 볼 때는 다음 항목을 확인하는 것이 좋다.
세전금리와 세후금리를 구분한다. 정기예금인지 적금인지 확인한다. 단리인지 복리인지 확인한다. 중도해지하면 약정금리를 받을 수 있는지 확인한다. 예금자보호 대상인지 확인한다. 대출을 볼 때는 다음 항목을 함께 봐야 한다.
고정금리인지 변동금리인지 확인한다. 기준금리, 가산금리, 우대금리 조건을 나눠서 본다. 매달 갚을 원리금과 총이자를 계산한다. 중도상환수수료가 있는지 확인한다. 금리가 오를 때 월 상환액이 얼마나 늘어나는지 본다. 예금은 금리가 높을수록 좋지만, 대출은 금리가 낮을수록 부담이 줄어든다. 같은 이자라도 내가 돈을 맡기는 입장인지, 돈을 빌리는 입장인지에 따라 완전히 다르게 작동한다.
정리 &nbsp; 이자는 돈을 빌려준 대가로 받거나, 돈을 빌려 쓴 대가로 내는 돈이다. 금리는 이자가 붙는 비율이다. 은행에 돈을 맡기면 예금자는 이자를 받고, 은행에서 돈을 빌리면 대출자는 이자를 낸다.
핵심만 다시 정리하면 이렇다.
예금금리는 은행이 예금자에게 지급하는 이자율이다. 대출금리는 은행이 대출자에게 받는 이자율이다. 은행은 예금을 통해 돈을 모으고, 그 돈을 대출로 운용한다. 대출금리가 예금금리보다 높은 차이를 예대마진이라고 한다. 실제 이자는 원금, 금리, 기간, 세금, 상품 조건에 따라 달라진다. 처음에는 이자와 금리가 비슷한 말처럼 보이지만, 한 번 구조를 이해하면 금융상품을 보는 눈이 달라진다. 예금을 가입하기 전에는 내가 받을 세후 이자를 계산하고, 대출을 받기 전에는 내가 낼 총이자를 먼저 확인하는 습관이 필요하다.
자주 묻는 질문 &nbsp; Q1. 예금금리가 연 3%면 100만 원을 맡겼을 때 정확히 3만 원을 받나? &nbsp; 세전 기준으로는 1년 동안 맡겼을 때 3만 원이다. 하지만 실제로 받는 금액은 이자소득세가 빠진 세후 이자다. 또 가입 기간이 1년보다 짧으면 기간에 맞춰 이자가 줄어든다.
Q2. 대출금리는 왜 사람마다 다를까? &nbsp; 대출금리는 기준이 되는 금리에 가산금리와 우대금리가 반영되어 정해진다. 신용도, 소득, 담보, 거래 실적, 대출 종류가 다르기 때문에 같은 은행에서도 사람마다 적용 금리가 달라질 수 있다.
Q3. 예금금리보다 대출금리가 항상 높나? &nbsp; 일반적으로는 대출금리가 예금금리보다 높다. 은행은 예금으로 조달한 돈을 대출로 운용하면서 위험과 운영비를 감당해야 하기 때문이다. 다만 상품 종류, 우대 조건, 시장 상황에 따라 개별 금리는 다르게 보일 수 있다.`}).add({id:55,href:"/posts/what-is-money/",title:"돈이란 무엇인가? 경제에서 돈이 움직이는 원리와 화폐의 기능",description:"돈의 뜻, 화폐가 필요한 이유, 돈의 기능과 종류, 통화량 지표까지 경제 초보자도 이해하기 쉽게 일상 사례로 정리하였다.",content:`돈은 매일 쓰지만 막상 &ldquo;돈이 뭐야?&ldquo;라고 물으면 대답이 생각보다 쉽지 않다. 지갑에 있는 현금도 돈이고, 은행 앱에 찍힌 예금 잔액도 돈이고, 카드로 결제할 수 있는 한도도 어떤 의미에서는 돈처럼 느껴진다.
돈을 단순히 종이 지폐나 동전으로만 보면 경제를 이해하기 어렵다. 지금의 경제에서는 월급, 예금, 대출, 카드 결제, 주식 투자, 금리, 인플레이션이 모두 돈의 흐름과 연결되어 있다. 그래서 돈을 제대로 이해한다는 것은 &ldquo;많이 버는 방법&quot;을 알기 전에, 돈이 왜 가치가 있고 어떻게 움직이는지 이해하는 일에 가깝다.
돈이란 무엇인가? &nbsp; 돈은 사람들이 상품이나 서비스를 사고팔 때 중간에서 가치를 전달해주는 수단이다. 더 쉽게 말하면, 돈은 &ldquo;서로가 받아주기로 약속한 가치의 표시&quot;다.
예를 들어 빵집에서 빵을 살 때 나는 빵집 사장에게 쌀이나 옷이나 노동력을 직접 주지 않는다. 대신 3,000원을 낸다. 빵집 사장은 그 3,000원으로 재료를 사거나 임대료를 내거나 다른 물건을 살 수 있다. 여기서 중요한 점은 지폐 자체가 빵만큼 쓸모 있어서가 아니라, 사회 전체가 그 지폐의 가치를 인정하기 때문에 거래가 된다는 것이다.
돈이 없던 시절에는 물물교환을 해야 했다. 쌀을 가진 사람이 생선을 얻으려면, 생선을 가진 사람이 쌀을 원해야 거래가 가능했다. 내가 원하는 것과 상대가 원하는 것이 정확히 맞아야 하니 거래가 매우 불편했다. 돈은 이 불편함을 줄이기 위해 등장했다.
돈이 있으면 먼저 내 물건이나 노동을 돈으로 바꾸고, 나중에 필요한 것을 돈으로 살 수 있다. 그래서 돈은 거래를 빠르게 만들고, 경제 활동을 훨씬 넓게 연결한다.
돈이 돈으로 인정받기 위한 조건 &nbsp; 아무 물건이나 돈이 될 수는 없다. 역사적으로 조개껍질, 소금, 금, 은, 종이 지폐, 디지털 화폐처럼 여러 형태의 돈이 있었지만, 오래 쓰인 돈에는 공통점이 있다.
알아보기 쉬워야 한다 &nbsp; 돈은 사람들이 쉽게 알아볼 수 있어야 한다. 위조 여부를 구분하기 어렵거나 모양이 제각각이면 거래할 때마다 확인 비용이 커진다. 지폐에 고유한 디자인, 번호, 위조 방지 장치가 들어가는 이유도 여기에 있다.
우리가 1만 원권을 보면 바로 1만 원이라고 인식하는 것처럼, 돈은 누구나 같은 기준으로 알아볼 수 있어야 한다.
오래 보관할 수 있어야 한다 &nbsp; 돈은 어느 정도 내구성이 있어야 한다. 쉽게 썩거나 부서지거나 사라지는 물건은 가치 저장 수단으로 쓰기 어렵다. 생선이나 과일은 실생활에서는 유용하지만 시간이 지나면 상하기 때문에 돈으로 쓰기 어렵다.
금이나 은 같은 귀금속이 과거에 돈으로 많이 쓰인 이유도 희소하고 오래 보관할 수 있었기 때문이다. 종이돈은 물리적으로는 약하지만, 국가의 제도와 신뢰가 뒷받침되기 때문에 돈으로 쓰인다.
서로 바꿔도 가치가 같아야 한다 &nbsp; 돈은 대체 가능해야 한다. 내가 가진 1만 원권 한 장과 다른 사람이 가진 1만 원권 한 장은 특별한 사연이 없다면 같은 가치로 취급된다. 은행 계좌에 있는 10만 원도 누구 계좌에 있든 같은 10만 원이다.
이 성질이 있어야 가격 계산과 거래가 쉬워진다. 만약 지폐마다 품질과 출처에 따라 가치가 달라진다면, 우리는 물건을 살 때마다 돈 자체의 품질을 평가해야 할 것이다.
가치가 너무 심하게 흔들리면 안 된다 &nbsp; 돈은 가치가 어느 정도 안정적이어야 한다. 오늘 1만 원으로 살 수 있던 물건을 내일은 5만 원을 줘야 살 수 있다면 사람들은 그 돈을 믿기 어렵다. 반대로 돈의 가치가 계속 오를 것이라고 믿으면 사람들은 소비를 미루고 돈만 쥐고 있으려 할 수 있다.
암호화폐가 투자 대상으로는 관심을 받지만 일상 결제 수단으로 널리 쓰이기 어려운 이유도 여기에 있다. 가격 변동이 너무 크면 물건값을 정하기도 어렵고, 받은 사람도 손실 위험을 부담해야 한다.
들고 다니거나 옮기기 쉬워야 한다 &nbsp; 돈은 휴대하기 쉬워야 한다. 너무 무겁거나 운반하기 어렵다면 거래 수단으로 불편하다. 과거에는 큰 돌이나 금속 덩어리도 가치 저장 수단으로 쓰였지만, 일상 거래에는 한계가 있었다.
요즘은 물리적인 휴대성보다 디지털 접근성이 더 중요해졌다. 현금을 들고 다니지 않아도 계좌이체, 카드, 간편결제로 돈을 주고받을 수 있기 때문이다.
돈의 세 가지 기능 &nbsp; 돈은 보통 세 가지 기능으로 설명한다. 교환 매개체, 가치 저장 수단, 회계 단위다. 이 세 가지를 알면 금리, 물가, 투자 이야기를 이해하기가 훨씬 쉬워진다.
교환 매개체 &nbsp; 돈의 가장 기본적인 기능은 교환 매개체다. 물건이나 서비스를 직접 맞바꾸지 않고 돈을 중간에 놓고 거래할 수 있게 해준다.
회사에서 일하고 월급을 받는 것도 같은 구조다. 회사는 내 노동에 대한 대가를 돈으로 지급하고, 나는 그 돈으로 식비, 교통비, 통신비, 주거비를 해결한다. 내가 일한 회사가 식당, 통신사, 집주인과 직접 물물교환을 할 필요가 없다.
가치 저장 수단 &nbsp; 돈은 지금 쓰지 않고 나중에 쓰기 위해 보관할 수도 있다. 월급을 받은 뒤 전부 소비하지 않고 예금이나 현금으로 남겨두는 것은 돈을 가치 저장 수단으로 쓰는 것이다.
다만 돈의 가치가 완전히 고정되는 것은 아니다. 물가가 오르면 같은 1만 원으로 살 수 있는 물건의 양이 줄어든다. 그래서 장기적으로는 돈을 그냥 보관하는 것과 예금, 채권, 주식, 부동산 같은 자산으로 나누어 보유하는 것의 차이를 생각해야 한다.
회계 단위 &nbsp; 돈은 가치를 숫자로 표시하는 기준이 된다. 커피 한 잔 4,500원, 월세 80만 원, 자동차 3,000만 원처럼 서로 다른 물건과 서비스를 같은 단위로 비교할 수 있게 한다.
회계 단위 기능이 있기 때문에 우리는 수입과 지출을 계산하고, 회사는 매출과 이익을 기록하고, 투자자는 기업 가치를 비교할 수 있다. 돈이 없다면 &ldquo;이 물건이 저 물건보다 얼마나 비싼가&quot;를 공통 기준으로 판단하기 어렵다.
돈의 종류는 어떻게 나뉠까? &nbsp; 돈은 형태와 신뢰의 근거에 따라 여러 종류로 나눌 수 있다. 지금 우리가 쓰는 원화는 대부분 법정 화폐와 은행 예금의 형태로 존재하지만, 돈의 역사를 보면 훨씬 다양한 모습이 있었다.
상품 화폐 &nbsp; 상품 화폐는 그 물건 자체에 가치가 있는 돈이다. 금, 은, 소금, 담배, 곡물처럼 사람들이 필요로 하거나 희소하다고 인정한 물건이 거래 수단으로 쓰인 경우다.
상품 화폐의 장점은 물건 자체의 가치가 비교적 분명하다는 점이다. 하지만 보관, 운반, 품질 확인이 어렵고 경제 규모가 커질수록 거래가 불편해진다.
대표 화폐 &nbsp; 대표 화폐는 실제 가치 있는 자산을 대신 나타내는 돈이다. 과거 금본위제에서 지폐가 금과 교환될 수 있었던 구조를 떠올리면 된다. 종이 자체는 큰 가치가 없지만, 그 종이가 일정한 금을 대표한다고 믿었기 때문에 돈으로 쓰였다.
대표 화폐는 상품 화폐보다 운반과 거래가 편하지만, 그 뒤에 있는 자산을 실제로 교환할 수 있다는 신뢰가 중요하다.
법정 화폐 &nbsp; 법정 화폐는 정부와 중앙은행의 제도적 신뢰를 바탕으로 쓰이는 돈이다. 지금 우리가 쓰는 원화, 미국 달러, 유로, 일본 엔화가 여기에 가깝다. 지폐 자체가 금이나 은으로 바뀌는 것은 아니지만, 국가가 세금 납부와 거래에서 통용되는 화폐로 인정하고 사람들이 그 가치를 믿기 때문에 사용된다.
법정 화폐에서 핵심은 신뢰다. 정부 재정, 중앙은행 정책, 물가 안정, 금융 시스템에 대한 믿음이 약해지면 화폐 가치도 흔들릴 수 있다.
신용 화폐 &nbsp; 신용 화폐는 실제 현금을 바로 주고받지 않아도 신용을 바탕으로 돈처럼 기능하는 수단이다. 수표, 어음, 신용카드 결제, 은행 예금 기반의 이체가 여기에 연결된다.
예를 들어 카드로 결제하면 그 자리에서 내 지갑의 현금이 상점으로 넘어가는 것은 아니다. 카드사와 은행 시스템이 거래를 보증하고, 나중에 내 계좌에서 돈이 빠져나간다. 현대 경제에서는 이런 신용 기반 거래가 매우 큰 비중을 차지한다.
경제에서 돈의 양은 어떻게 측정할까? &nbsp; 경제 뉴스에서 &ldquo;시중에 돈이 많이 풀렸다&rdquo;, &ldquo;유동성이 줄었다&quot;라는 말을 자주 볼 수 있다. 여기서 말하는 돈은 단순히 지폐와 동전만 뜻하지 않는다. 은행 예금, 단기 금융상품, 일부 채권성 자산까지 포함해 돈의 범위를 단계별로 본다.
한국에서는 통화량을 볼 때 본원통화, 협의통화, 광의통화 같은 개념을 사용한다.
본원통화와 협의통화 &nbsp; 본원통화는 현금통화와 금융기관이 중앙은행에 맡긴 지급준비금 등을 포함하는 가장 기초적인 돈이다. 중앙은행이 통화정책을 펼칠 때 출발점이 되는 돈이라고 이해하면 된다.
협의통화(M1)는 현금과 요구불예금, 수시입출식 저축성예금처럼 바로 결제와 인출에 사용할 수 있는 돈을 포함한다. 쉽게 말해 사람들이 당장 쓸 수 있는 돈에 가깝다.
광의통화와 유동성 &nbsp; 광의통화(M2)는 협의통화보다 범위가 넓다. 수시입출식 돈뿐 아니라 정기예금, 적금, 머니마켓펀드(MMF), 단기 금융상품 등을 포함한다. 당장 지갑에서 꺼내 쓰는 돈은 아니지만 비교적 쉽게 현금화할 수 있는 자산까지 보는 것이다.
이보다 더 넓게 보면 금융기관 유동성(Lf), 광의유동성(L) 같은 지표도 있다. 국채, 회사채처럼 경제 전체의 자금 흐름과 연결된 자산까지 포함해 유동성을 파악한다.
통화량이 중요한 이유는 물가, 금리, 경기와 연결되기 때문이다. 돈이 빠르게 늘고 소비와 투자가 함께 증가하면 경기가 좋아질 수 있지만, 생산보다 돈의 증가 속도가 지나치게 빠르면 물가 상승 압력이 커질 수 있다.
돈을 이해하면 경제 뉴스가 다르게 보인다 &nbsp; 돈을 단순히 &ldquo;많으면 좋은 것&quot;으로만 보면 경제를 입체적으로 보기 어렵다. 개인에게 돈은 생활비이자 저축이고, 기업에게 돈은 투자와 운영 자금이며, 국가 경제에서는 물가와 금리와 성장을 움직이는 핵심 변수다.
예금금리가 오르면 사람들은 돈을 소비하기보다 은행에 맡기려 할 수 있다. 대출금리가 오르면 집을 사거나 사업을 확장하려는 수요가 줄어들 수 있다. 반대로 금리가 낮아지고 돈이 많이 풀리면 소비와 투자가 늘 수 있지만, 자산 가격이나 물가가 함께 오를 위험도 생긴다.
결국 돈은 종이, 동전, 숫자 그 자체가 아니라 사회적 신뢰와 경제 활동이 연결된 시스템이다. 돈을 이해하면 월급 관리, 저축, 대출, 투자, 인플레이션을 따로따로 보지 않고 하나의 흐름으로 볼 수 있다.
정리 &nbsp; 돈은 사람들이 공통으로 인정하는 가치의 표시이며, 거래를 쉽게 만들고 가치를 저장하며 서로 다른 물건의 가격을 비교하게 해준다. 좋은 돈이 되려면 알아보기 쉽고, 오래 보관할 수 있고, 서로 바꿔도 가치가 같고, 비교적 안정적이며, 이동하기 쉬워야 한다.
현대 경제의 돈은 대부분 국가와 금융 시스템에 대한 신뢰 위에서 움직인다. 그래서 돈을 이해한다는 것은 현금만 보는 것이 아니라 예금, 신용, 통화량, 금리, 물가의 관계를 함께 보는 일이다.
경제 공부를 처음 시작한다면 어려운 투자 상품보다 먼저 &ldquo;돈이 무엇인지&quot;부터 잡아두는 것이 좋다. 이 기본 개념이 있어야 금리, 대출, 주식, 부동산, 연금 같은 주제도 훨씬 자연스럽게 이어진다.
자주 묻는 질문 &nbsp; 돈과 화폐는 같은 뜻인가? &nbsp; 일상에서는 거의 같은 뜻으로 쓰지만, 엄밀히 보면 돈은 더 넓은 개념이다. 화폐는 지폐, 동전, 예금처럼 제도적으로 통용되는 돈의 형태를 말하고, 돈은 가치 저장과 교환 기능을 하는 수단 전체를 포함한다.
은행 계좌에 찍힌 숫자도 돈인가? &nbsp; 그렇다. 은행 예금은 현금처럼 직접 만질 수는 없지만 이체, 카드 결제, 자동이체에 사용할 수 있으므로 현대 경제에서 중요한 돈의 형태다.
돈이 많아지면 모두가 부자가 되는가? &nbsp; 항상 그렇지는 않다. 경제 전체의 생산과 소득이 함께 늘지 않은 상태에서 돈의 양만 빠르게 늘면 물가가 오를 수 있다. 그러면 숫자로 표시된 돈은 많아져도 실제 구매력은 크게 늘지 않을 수 있다.
금은 지금도 돈인가? &nbsp; 금은 일상 결제 수단으로 쓰이지 않기 때문에 현대적인 의미의 화폐는 아니다. 다만 희소성과 보관성 때문에 가치 저장 수단으로 여전히 중요하게 다뤄진다.`}).add({id:56,href:"/posts/stock-buy-sell-basics/",title:"매수 매도 뜻과 주식 투자자 유형, 초보자가 알아야 할...",description:"주식 매수와 매도의 뜻, 호가와 주문 방식, 개인·기관·외국인 투자자 구분, 순매수와 순매도 의미를 초보자 눈높이에서 쉽게 정리했다.",content:`주식 앱을 처음 켜면 가장 먼저 눈에 들어오는 버튼이 있다. 바로 &ldquo;매수&quot;와 &ldquo;매도&quot;다. 단어는 짧지만 실제로 누르는 순간 내 돈이 움직인다. 그래서 뜻을 대충 알고 넘어가면 주문 화면에서 괜히 손이 멈춘다.
매수는 주식을 사는 것이고, 매도는 주식을 파는 것이다. 여기까지는 쉽다. 그런데 실제 거래에서는 호가, 시장가, 지정가, 체결, 순매수, 순매도 같은 단어가 함께 나온다. 뉴스를 보면 &ldquo;외국인 순매수&rdquo;, &ldquo;기관 순매도&rdquo; 같은 표현도 자주 보인다.
이 글에서는 주식 거래의 가장 기본이 되는 매수와 매도 뜻부터 주문 방식, 투자자 유형, 순매수와 순매도까지 한 번에 정리했다. 주식 계좌를 막 만들었거나, 주식 뉴스를 봐도 단어가 낯선 사람이라면 이 정도만 알아도 주문 화면이 훨씬 덜 어렵게 느껴진다.
매수와 매도는 주식 거래의 출발점이다 &nbsp; 매수는 주식을 사는 행위다. 내가 어떤 회사의 주식을 보유하고 싶을 때 돈을 내고 주식을 사는 것이 매수다. 예를 들어 삼성전자 주식을 10주 샀다면 &ldquo;삼성전자를 10주 매수했다&quot;고 말한다.
‘살 매(買)’와 ‘거둘 수(收)’ 자를 써서 ‘사서 거두다’라는 의미한다.
‘매도(賣渡)’는 ‘팔 매(賣)’와 ‘건널 도(渡)’ 자를 써서 ‘물건의 소유권을 다른 사람에게 넘긴다’라는 의미한다.
매도는 반대로 보유한 주식을 파는 행위다. 이미 가지고 있는 주식을 다른 사람에게 넘기고 돈을 받는 것이다. 예를 들어 보유 중이던 주식을 팔아 현금화했다면 &ldquo;주식을 매도했다&quot;고 표현한다.
처음에는 매수와 매도가 헷갈릴 수 있다. 간단하게 &ldquo;수&quot;를 &ldquo;수집한다&quot;로 떠올리면 조금 쉽다. 매수는 내 계좌에 주식을 모으는 것이고, 매도는 내 계좌에서 주식을 내보내는 것이다.
매매와 체결도 같이 알아두면 좋다 &nbsp; 매매는 사고파는 행위 전체를 뜻한다. 매수와 매도를 합쳐 주식 매매라고 부른다. 체결은 내가 넣은 주문이 실제 거래로 성립된 상태를 말한다.
예를 들어 내가 1주를 사고 싶다고 주문을 넣었더라도, 그 가격에 팔겠다는 사람이 없으면 바로 체결되지 않을 수 있다. 반대로 내가 제시한 가격과 상대방이 원하는 가격이 맞으면 거래가 체결된다.
그래서 주식 앱에서 &ldquo;주문 완료&quot;와 &ldquo;체결 완료&quot;는 다르게 봐야 한다. 주문을 넣었다고 무조건 산 것이 아니다. 실제로 내 계좌에 주식이 들어왔는지, 미체결 주문으로 남아 있는지 확인하는 습관이 필요하다.
호가는 사고팔겠다고 부르는 가격이다 &nbsp; 주식 거래는 매수자와 매도자가 가격을 맞추는 과정이다. 이때 각자가 부르는 가격을 호가라고 한다. 매수 호가는 사려는 사람이 제시한 가격이고, 매도 호가는 팔려는 사람이 제시한 가격이다.
호가란 ‘부를 호(呼)’에 ‘값 가(價)’를 써서 ‘부르는 가격’을 의미한다.
주식 앱의 호가창을 보면 위아래로 가격과 수량이 빠르게 움직인다. 위쪽에는 보통 팔려는 주문이 쌓여 있고, 아래쪽에는 사려는 주문이 쌓여 있다. 이 가격들이 맞물리면서 거래가 이루어진다.
예를 들어 어떤 주식의 매도 호가가 10,000원이고 매수 호가가 9,990원이라면 아직 가격 차이가 있다. 누군가 10,000원에 사겠다고 하거나, 누군가 9,990원에 팔겠다고 하면 거래가 체결될 수 있다.
호가창은 분위기를 보는 도구다 &nbsp; 호가창은 단순히 현재 가격만 보여주는 화면이 아니다. 어느 가격에 사고 싶은 사람이 많은지, 어느 가격에 팔고 싶은 사람이 많은지 대략적인 분위기를 볼 수 있다.
다만 호가창만 보고 투자 판단을 끝내면 위험하다. 큰 주문이 갑자기 사라질 수도 있고, 짧은 시간의 매수·매도 물량만 보고 기업의 가치를 판단하기는 어렵다. 초보자라면 호가창은 &ldquo;주문이 어떻게 체결되는지 이해하는 화면&rdquo; 정도로 먼저 접근하는 편이 낫다.
시장가 주문과 지정가 주문의 차이를 알아야 한다 &nbsp; 주식을 주문할 때는 보통 시장가 주문과 지정가 주문을 많이 사용한다. 두 방식은 체결 속도와 가격 통제에서 차이가 크다.
시장가 주문은 빠른 체결이 목적이다 &nbsp; 시장가 주문은 현재 시장에서 거래 가능한 가격으로 즉시 사거나 팔겠다는 주문이다. 가격을 직접 지정하지 않고, 지금 체결될 수 있는 가격을 따라간다.
장점은 빠르다는 것이다. 지금 바로 사고 싶거나, 지금 바로 팔고 싶을 때 유리하다. 단점은 내가 예상한 가격보다 불리한 가격에 체결될 수 있다는 점이다. 특히 거래량이 적거나 가격이 빠르게 움직이는 종목에서는 체결 가격이 생각보다 달라질 수 있다.
예를 들어 현재가가 10,000원이라고 보고 시장가 매수를 눌렀는데, 매도 물량이 얇다면 일부는 10,010원, 일부는 10,020원에 체결될 수도 있다. 금액이 작으면 차이가 작게 느껴지지만, 주문 금액이 커질수록 무시하기 어렵다.
지정가 주문은 원하는 가격을 정하는 방식이다 &nbsp; 지정가 주문은 내가 원하는 가격을 직접 입력하는 주문이다. 현재 10,000원인 주식을 9,800원에 사고 싶다면 9,800원 지정가 매수 주문을 넣을 수 있다. 반대로 10,200원에 팔고 싶다면 10,200원 지정가 매도 주문을 넣는다.
장점은 가격을 통제할 수 있다는 것이다. 단점은 원하는 가격까지 오지 않으면 거래가 체결되지 않을 수 있다는 점이다. 즉, 지정가 주문은 &ldquo;이 가격이면 거래하고, 아니면 기다리겠다&quot;는 방식에 가깝다.
초보자라면 급하게 사고팔아야 하는 상황이 아니라면 지정가 주문부터 익히는 것이 좋다. 내가 얼마에 사는지, 얼마에 파는지 명확히 확인하는 습관을 만들 수 있기 때문이다.
투자자는 개인, 기관, 외국인으로 나누어 본다 &nbsp; 주식 뉴스에서는 투자자를 크게 개인, 기관, 외국인으로 나누어 설명한다. 이 구분을 알면 뉴스에 나오는 수급 표현을 이해하기 쉬워진다.
개인은 자기 돈으로 주식을 사고파는 일반 투자자다. 직장인, 자영업자, 학생, 은퇴자처럼 개인 계좌로 거래하는 사람이 여기에 해당한다. 흔히 말하는 &ldquo;개미 투자자&quot;도 개인 투자자를 뜻한다.
기관은 금융회사, 자산운용사, 연기금, 보험사, 은행, 사모펀드처럼 큰 자금을 운용하는 주체다. 국민연금이나 자산운용사가 대표적인 기관 투자자다. 개인보다 자금 규모가 크고, 내부 기준과 전략에 따라 투자하는 경우가 많다.
외국인은 해외 국적의 개인이나 해외 기관이 국내 주식에 투자하는 경우를 말한다. 주식 기사에서는 외국인을 줄여 &ldquo;외인&quot;이라고 부르기도 한다. 해외 투자은행, 글로벌 펀드, 헤지펀드 등이 국내 주식을 사고팔면 외국인 수급으로 잡힌다.
투자자 유형은 방향을 참고하는 자료다 &nbsp; 뉴스에서 &ldquo;외국인이 샀다&rdquo;, &ldquo;기관이 팔았다&quot;는 표현을 보면 그 종목이나 시장의 분위기를 짐작하는 데 도움이 된다. 하지만 외국인이 샀다고 무조건 오르고, 기관이 팔았다고 무조건 내리는 것은 아니다.
수급은 주가에 영향을 줄 수 있지만 기업 실적, 금리, 환율, 산업 전망, 시장 심리 같은 요소도 함께 작용한다. 투자자 유형별 매매 동향은 판단 재료 중 하나로 보는 것이 현실적이다.
순매수와 순매도는 사고판 금액의 차이다 &nbsp; 순매수는 일정 기간 동안 산 금액이 판 금액보다 많은 상태를 말한다. 계산하면 &ldquo;매수 금액 - 매도 금액&quot;이다. 결과가 플러스라면 순매수라고 본다.
예를 들어 외국인이 하루 동안 어떤 종목을 100억 원어치 사고 70억 원어치 팔았다면 순매수 금액은 30억 원이다. 기사에서는 &ldquo;외국인 30억 원 순매수&quot;라고 표현할 수 있다.
순매도는 반대다. 일정 기간 동안 판 금액이 산 금액보다 많은 상태다. 계산하면 &ldquo;매도 금액 - 매수 금액&quot;이다. 예를 들어 기관이 50억 원어치 사고 120억 원어치 팔았다면 기관 순매도는 70억 원이다.
순매수 전환, 순매도 전환은 흐름이 바뀌었다는 뜻이다 &nbsp; &ldquo;외국인 순매수 전환&quot;이라는 말은 이전에는 팔던 흐름이 강했는데, 이제는 산 금액이 더 많아졌다는 뜻이다. 반대로 &ldquo;기관 순매도 전환&quot;은 기관이 사는 쪽보다 파는 쪽으로 기울었다는 의미다.
이 표현은 시장 흐름을 볼 때 자주 나온다. 특히 코스피, 코스닥 지수 기사에서는 개인·기관·외국인의 순매수와 순매도를 함께 보여주는 경우가 많다. 처음에는 숫자보다 방향을 먼저 보면 된다. 누가 사고 있는지, 누가 팔고 있는지 파악하는 것만으로도 기사 이해가 쉬워진다.
초보자가 주문 전에 확인할 것 &nbsp; 매수와 매도 뜻을 알았다고 바로 주문을 많이 넣을 필요는 없다. 주식 거래는 클릭 몇 번으로 끝나지만, 결과는 내 돈으로 돌아온다. 주문 전에는 최소한 아래 내용을 확인하는 습관이 필요하다.
종목명이 내가 사려는 회사가 맞는지 확인한다. 매수인지 매도인지 버튼을 다시 본다. 주문 수량과 주문 금액을 확인한다. 시장가인지 지정가인지 확인한다. 지정가라면 입력한 가격이 맞는지 확인한다. 미체결 주문이 남아 있는지 확인한다. 특히 초보자는 매수와 매도 버튼을 착각하거나, 수량을 잘못 입력하는 실수를 할 수 있다. 1주를 사려다 10주를 사거나, 팔려고 했는데 매수를 누르는 식이다. 주문 전 확인은 귀찮아 보여도 큰 실수를 막아준다.
또 하나 중요한 점은 &ldquo;왜 사는지&quot;를 적어보는 것이다. 단순히 남들이 산다고 따라 사면 가격이 흔들릴 때 버티기 어렵다. 실적이 좋아서인지, 배당을 기대해서인지, 장기 성장성을 보고 사는지 이유가 있어야 나중에 매도 기준도 세울 수 있다.
정리 &nbsp; 매수는 주식을 사는 것이고, 매도는 주식을 파는 것이다. 주식 거래는 매수자와 매도자가 호가를 제시하고, 가격이 맞으면 체결되는 구조로 움직인다.
주문 방식은 빠른 체결을 중시하는 시장가 주문과 원하는 가격을 정하는 지정가 주문으로 나누어 볼 수 있다. 초보자라면 지정가 주문부터 익히며 내가 얼마에 사고파는지 확인하는 습관을 만드는 것이 좋다.
주식 시장의 투자자는 개인, 기관, 외국인으로 구분한다. 뉴스에 나오는 순매수는 산 금액이 판 금액보다 많은 상태이고, 순매도는 판 금액이 산 금액보다 많은 상태다. 이 개념을 알면 &ldquo;외국인 순매수&rdquo;, &ldquo;기관 순매도&rdquo; 같은 기사가 훨씬 쉽게 읽힌다.
처음부터 어려운 분석을 모두 하려고 하기보다, 매수·매도·호가·주문 방식·투자자 유형 같은 기본 단어부터 확실히 익히는 편이 좋다. 주식 투자는 용어를 이해하는 것에서 시작된다.
자주 묻는 질문 &nbsp; 매수 주문을 넣으면 바로 주식을 사게 되나? &nbsp; 항상 바로 사지는 않는다. 시장가 주문은 대체로 빠르게 체결되지만, 지정가 주문은 내가 입력한 가격에 팔려는 사람이 있어야 체결된다. 주문 후에는 체결 여부와 미체결 내역을 확인해야 한다.
시장가 주문과 지정가 주문 중 초보자에게 더 나은 방식은? &nbsp; 급하게 거래해야 하는 상황이 아니라면 지정가 주문이 더 이해하기 쉽다. 내가 원하는 가격을 직접 정할 수 있고, 체결 가격을 예측하기 쉽기 때문이다. 다만 원하는 가격까지 오지 않으면 거래가 안 될 수 있다.
외국인이나 기관이 순매수하면 무조건 좋은 신호인가? &nbsp; 무조건 좋은 신호는 아니다. 순매수는 해당 기간에 산 금액이 판 금액보다 많았다는 뜻일 뿐이다. 주가는 수급뿐 아니라 기업 실적, 금리, 환율, 산업 전망, 전체 시장 분위기의 영향을 함께 받는다.
매도는 손해 볼 때만 하는 것인가? &nbsp; 아니다. 이익을 확정하기 위해 매도할 수도 있고, 더 좋은 투자처로 옮기기 위해 매도할 수도 있다. 손실을 줄이기 위한 매도도 있지만, 매도 자체가 항상 나쁜 의미는 아니다.`}).add({id:57,href:"/posts/us-treasury-investing/",title:"미국채 투자 방법, 직접 투자와 미국채 ETF 차이 쉽...",description:"미국채가 안전자산으로 불리는 이유, 단기·중기·장기 미국채 차이, 직접 투자와 미국채 ETF 투자 방법, 환율과 금리 위험까지 쉽게 정리했다.",content:`미국채에 관심을 갖는 사람은 보통 두 가지 상황에 놓여 있다. 주식시장이 너무 흔들려서 조금 안정적인 자산을 찾고 있거나, 달러 자산을 일부라도 가져가고 싶은 경우다. &ldquo;미국 정부가 발행한 채권&quot;이라는 말만 들으면 안전해 보이지만, 막상 투자하려고 하면 만기, 금리, 환율, ETF 같은 단어가 한꺼번에 나온다.
미국채는 미국 정부가 돈을 빌리기 위해 발행하는 채권이다. 쉽게 말해 투자자가 미국 정부에 돈을 빌려주고, 정해진 기간 동안 이자를 받다가 만기 때 원금을 돌려받는 구조다. 그래서 미국채는 전 세계 금융시장에서 대표적인 안전자산으로 다뤄진다.
다만 안전자산이라는 말이 &ldquo;언제 사도 손실이 없다&quot;는 뜻은 아니다. 만기 전에 팔면 채권 가격 변동으로 손실이 날 수 있고, 원화 투자자라면 환율 변동도 함께 겪는다. 이 글에서는 미국채의 기본 구조, 투자하는 이유, 직접 투자와 ETF의 차이, 초보자가 조심해야 할 부분을 정리하였다.
미국채란 무엇인가? &nbsp; 미국채는 미국 재무부가 발행하는 국채다. 미국 정부가 필요한 돈을 조달하기 위해 채권을 발행하고, 투자자는 그 채권을 사면서 미국 정부에 돈을 빌려주는 구조다.
채권에는 보통 만기와 이자가 정해져 있다. 만기는 돈을 돌려받는 시점이고, 이자는 돈을 빌려준 대가다. 예를 들어 10년 만기 미국채를 산다면 10년 동안 정해진 방식으로 이자를 받고, 만기에는 원금을 돌려받는 식이다.
미국채가 안전자산으로 불리는 이유는 미국 정부의 상환 능력과 달러의 국제적 지위 때문이다. 미국은 세계 최대 경제권 중 하나이고, 달러는 국제 금융시장에서 가장 널리 쓰이는 기축통화다. 그래서 시장이 불안해질 때 투자자들이 미국채와 달러로 몰리는 경우가 많다.
다만 신용등급은 시점에 따라 바뀔 수 있다. 참고 글에서는 무디스 기준 미국 신용등급을 Aaa로 설명하지만, 무디스는 2025년 5월 16일 미국 장기 발행자 및 선순위 무담보 등급을 Aaa에서 Aa1으로 낮췄다. 그래도 미국채가 여전히 글로벌 핵심 안전자산으로 취급된다는 점은 크게 달라지지 않았지만, &ldquo;미국채는 절대 위험이 없다&quot;는 식으로 이해하면 안 된다.
미국채에 투자하는 이유 &nbsp; 미국채에 투자하는 가장 큰 이유는 안정성이다. 주식은 기업 실적과 투자 심리에 따라 가격이 크게 흔들릴 수 있지만, 미국채는 미국 정부가 원리금을 지급하는 구조라 신용위험이 상대적으로 낮다.
둘째, 정기적인 이자수익을 기대할 수 있다. 중기와 장기 미국채는 일반적으로 6개월마다 이자를 지급한다. 금리가 높은 시기에 채권을 사면 비교적 높은 이자수익을 확보할 수 있다. 물론 이후 시장금리가 오르면 보유 채권 가격은 떨어질 수 있다.
셋째, 달러 자산을 보유하는 효과가 있다. 한국 투자자가 미국채를 사려면 보통 원화를 달러로 바꿔 투자한다. 미국채 이자도 달러로 받고, 매도하거나 만기 상환을 받아도 달러 자금이 생긴다. 원화 가치가 약해지고 달러 가치가 오르면 환차익이 날 수 있다.
반대로 환율이 불리하게 움직이면 손실도 생긴다. 예를 들어 미국채 가격은 그대로인데 내가 살 때보다 달러 환율이 내려가면 원화 기준 평가금액은 줄어든다. 그래서 미국채 투자는 채권 투자이면서 동시에 달러 투자 성격도 갖는다.
미국채 종류는 만기에 따라 나뉜다 &nbsp; 미국채는 만기에 따라 크게 단기, 중기, 장기로 나눌 수 있다. 만기가 짧을수록 금리 변동에 따른 가격 흔들림이 상대적으로 작고, 만기가 길수록 가격 변동이 커지는 편이다.
구분 대표 만기 이자 지급 특징 단기 국채 4주, 8주, 13주, 17주, 26주, 52주 보통 할인 발행 후 만기 상환 중기 국채 2년, 3년, 5년, 7년, 10년 보통 6개월마다 이자 지급 장기 국채 20년, 30년 보통 6개월마다 이자 지급 단기 미국채는 만기가 짧아 현금성 자산처럼 활용하기 좋다. 금리 변동에 따른 가격 변동이 비교적 작고, 돈을 오래 묶어두기 부담스러운 사람에게 맞는다.
중기 미국채는 안정성과 수익성의 균형을 노리는 투자자가 많이 본다. 2년물, 5년물, 10년물 미국채는 경제 뉴스에서도 자주 등장한다. 특히 미국 10년물 국채금리는 전 세계 금융시장의 기준 금리처럼 해석되는 경우가 많다.
장기 미국채는 금리 하락기에 가격 상승폭이 클 수 있다. 하지만 반대로 금리가 오르면 가격 하락폭도 커진다. 그래서 장기채는 &ldquo;안전한 채권&quot;이라는 말만 보고 접근하기보다, 금리 방향과 투자 기간을 함께 고려해야 한다.
미국채 투자 방법은 직접 투자와 ETF가 있다 &nbsp; 개인투자자가 미국채에 투자하는 방법은 크게 두 가지다. 직접 미국채를 사는 방법과 미국채 ETF를 사는 방법이다.
미국채 직접 투자 &nbsp; 미국채 직접 투자는 증권사 앱이나 영업점을 통해 특정 만기의 미국채를 직접 매수하는 방식이다. 보통 해외채권 메뉴에서 만기, 표면금리, 매수수익률, 최소 투자금액 등을 확인하고 매수한다.
일반적인 흐름은 이렇다.
증권사에서 해외주식 또는 해외채권 거래가 가능한 계좌를 준비한다. 원화를 달러로 환전한다. 원하는 만기와 수익률의 미국채를 고른다. 매수 후 이자를 받거나, 만기까지 보유하거나, 중간에 매도한다. 직접 투자 장점은 만기와 수익률을 비교적 명확히 보고 투자할 수 있다는 점이다. 만기까지 보유하면 시장 가격이 중간에 흔들려도 원금 상환 구조를 기대할 수 있다. 물론 미국 정부의 상환 불이행 같은 극단적 상황은 별도 위험으로 남는다.
직접 투자 단점은 초보자에게 상품 구조가 어렵게 느껴질 수 있다는 점이다. 표면금리, 매수수익률, 잔존만기, 경과이자 같은 개념을 이해해야 하고, 중도 매도 때는 가격이 예상과 다를 수 있다.
미국채 ETF 투자 &nbsp; 미국채 ETF는 여러 미국채를 한 바구니에 담아 주식처럼 거래할 수 있는 상품이다. 개별 채권을 직접 고르지 않아도 되고, 소액으로도 투자하기 쉽다.
대표적인 미국 상장 미국채 ETF로는 단기채 ETF인 SHY, 중기채 ETF인 IEF, 장기채 ETF인 TLT가 자주 언급된다. 국내에도 미국채에 투자하는 ETF가 많이 상장되어 있어 원화로 투자할 수 있다.
ETF의 장점은 편리함이다. 주식처럼 사고팔 수 있고, 여러 채권에 자동으로 분산된다. 만기가 다른 채권을 운용사가 교체해주므로 개인이 직접 만기 관리를 할 필요도 적다.
단점은 만기 상환 구조가 직접 투자와 다르다는 점이다. ETF는 계속 운용되는 상품이라 &ldquo;만기까지 들고 있으면 원금을 돌려받는다&quot;는 개별 채권의 느낌과 다르다. 시장금리가 오르면 ETF 가격도 하락할 수 있고, 장기채 ETF일수록 변동성이 커질 수 있다.
채권 가격과 금리는 반대로 움직인다 &nbsp; 미국채 투자에서 가장 중요한 원리 중 하나는 채권 가격과 금리가 반대로 움직인다는 점이다.
이미 연 4% 이자를 주는 채권을 가지고 있다고 해보자. 그런데 새로 발행되는 비슷한 채권이 연 5% 이자를 준다면, 기존 4% 채권의 매력은 떨어진다. 그래서 기존 채권 가격은 내려가야 새 투자자 입장에서 수익률이 맞아진다.
반대로 시장금리가 내려가면 기존 고금리 채권의 매력이 올라간다. 새 채권은 낮은 이자만 주는데, 내가 가진 채권은 더 높은 이자를 주기 때문이다. 이때 기존 채권 가격은 오를 수 있다.
그래서 미국 기준금리가 내려갈 것 같다는 기대가 커지면 장기 미국채 가격이 오르는 경우가 많다. 하지만 예상과 달리 금리가 더 오래 높게 유지되거나 다시 오르면 장기채 가격은 크게 흔들릴 수 있다.
초보자는 이 원리를 꼭 기억해야 한다. 미국채는 안전자산이지만, 만기 전에 사고팔면 가격 손실이 날 수 있다. 특히 장기채 ETF는 주식처럼 큰 폭으로 움직일 때도 있다.
미국채 투자에서 세금과 환율도 봐야 한다 &nbsp; 미국채 투자는 세금 구조도 확인해야 한다. 국내 투자자가 해외 채권에 직접 투자할 경우 이자수익에는 보통 배당소득세가 과세된다. 반면 채권 매매차익은 상품과 거래 구조에 따라 과세 방식이 달라질 수 있으므로, 실제 투자 전에는 이용하는 증권사의 세금 안내를 확인하는 것이 좋다.
미국채 ETF는 더 단순하게 생각하면 된다. ETF에서 받는 분배금에는 세금이 붙고, ETF를 사고팔아 생긴 이익에도 과세될 수 있다. 국내 상장 해외채권 ETF인지, 미국 상장 ETF인지에 따라 과세 체계가 달라질 수 있다.
환율도 중요하다. 미국채에서 달러 기준으로 4% 수익이 났더라도, 같은 기간 원화 강세로 달러 환율이 크게 내려가면 원화 기준 수익률은 낮아질 수 있다. 반대로 달러가 강해지면 채권 수익에 환차익이 더해질 수 있다.
환율을 정확히 맞히기는 어렵다. 그래서 미국채를 한 번에 크게 사기보다 나누어 매수하거나, 전체 자산 중 일정 비중만 달러 채권으로 가져가는 방식이 현실적이다.
어떤 투자자에게 미국채가 맞을까? &nbsp; 미국채는 주식처럼 큰 수익을 빠르게 노리는 자산은 아니다. 대신 자산의 일부를 안정적으로 보관하고, 달러 현금흐름을 만들고, 시장이 흔들릴 때 포트폴리오 변동성을 줄이는 데 활용할 수 있다.
비상금처럼 곧 써야 할 돈이라면 장기 미국채보다 단기채나 달러 예금성 상품이 더 적합할 수 있다. 1~2년 안에 써야 할 돈을 장기채 ETF에 넣었다가 금리가 오르면 필요한 시점에 손실을 보고 팔아야 할 수 있다.
반대로 장기적으로 금리 하락 가능성을 보고 가격 상승까지 기대한다면 중장기 미국채나 장기채 ETF를 검토할 수 있다. 다만 이 경우에는 변동성을 감당할 수 있어야 한다.
초보자에게 가장 무난한 접근은 목적별로 나누는 것이다. 안정적인 달러 자산이 목적이면 단기 미국채나 단기채 ETF를 보고, 금리 하락에 따른 가격 상승을 기대한다면 중장기채 비중을 일부만 가져가는 식이다. 모든 돈을 한 방향에 몰아넣는 것은 피하는 편이 좋다.
정리 &nbsp; 미국채는 미국 정부가 발행하는 채권이고, 전 세계 금융시장에서 대표적인 안전자산으로 다뤄진다. 하지만 안전자산이라는 말이 원금이 항상 보장된다는 뜻은 아니다. 만기 전에 팔면 채권 가격 변동으로 손실이 날 수 있고, 한국 투자자는 환율 변동도 함께 고려해야 한다.
미국채는 단기, 중기, 장기로 나뉜다. 단기채는 변동성이 낮고 현금 관리에 가깝고, 중기채는 균형형에 가깝고, 장기채는 금리 변화에 민감하다. 직접 투자하면 만기와 수익률을 명확히 볼 수 있지만 구조를 이해해야 하고, ETF는 편리하지만 가격 변동과 과세 구조를 확인해야 한다.
처음 시작한다면 &ldquo;미국채가 좋다더라&quot;보다 &ldquo;내가 언제 쓸 돈인가&rdquo;, &ldquo;달러 자산이 필요한가&rdquo;, &ldquo;금리 변동을 얼마나 감당할 수 있는가&quot;를 먼저 정하는 것이 좋다. 그다음 직접 미국채와 미국채 ETF 중 내 투자 목적에 맞는 방식을 고르면 된다.
자주 묻는 질문 &nbsp; 미국채는 원금 손실이 없나? &nbsp; 만기까지 보유하고 미국 정부가 원리금을 정상 지급한다면 원금 상환을 기대할 수 있다. 하지만 만기 전에 팔면 시장금리와 채권 가격 변화에 따라 손실이 날 수 있다. ETF는 개별 채권처럼 정해진 만기 상환 구조가 아니므로 가격 변동을 더 신경 써야 한다.
미국채 ETF와 직접 미국채 중 무엇이 더 좋나? &nbsp; 정답은 투자 목적에 따라 다르다. 만기와 수익률을 정해두고 보유하고 싶다면 직접 투자가 잘 맞을 수 있고, 소액으로 편하게 분산투자하고 싶다면 ETF가 편하다. 다만 ETF는 금리 변동에 따라 가격이 계속 움직인다.
미국채를 사면 환차익도 얻을 수 있나? &nbsp; 가능하다. 미국채는 달러 자산이므로 매수할 때보다 달러 환율이 오르면 원화 기준 수익이 늘어날 수 있다. 반대로 달러 환율이 내려가면 채권 수익이 있어도 원화 기준 수익률은 낮아질 수 있다.
장기 미국채 ETF는 안전한 상품인가? &nbsp; 장기 미국채 ETF는 미국채에 투자하지만 가격 변동성이 작지 않다. 금리가 내려가면 크게 오를 수 있지만, 금리가 오르면 크게 떨어질 수 있다. 안정적인 현금 관리 목적이라면 장기채 ETF보다 단기채 상품이 더 적합한 경우가 많다.`}).add({id:58,href:"/posts/memory-semiconductor-supply-crunch/",title:"반도체 메모리 가격 급등, AI 수요가 D램·낸드·HB...",description:"AI 서버 수요로 HBM과 서버 D램 공급이 우선되면서 범용 D램·낸드 가격까지 급등하고 있다. 최근 메모리 반도체 수급과 시장 영향을 정리한다.",content:`주요 내용 &nbsp; 최근 메모리 반도체 시장의 핵심은 &ldquo;AI 서버가 메모리를 빨아들이고 있다&quot;는 점이다. HBM과 서버용 D램, 엔터프라이즈 SSD 수요가 급증하면서 삼성전자, SK하이닉스, 마이크론 등 주요 공급사는 수익성이 높은 서버·AI용 제품에 생산능력을 우선 배분하고 있다.
그 결과 범용 D램, 모바일 D램, 소비자용 낸드, 2D 낸드 같은 레거시 제품까지 공급 부족과 가격 상승 압력을 받고 있다. 이번 브리핑은 최근 7일 내 기사만으로는 핵심 흐름을 충분히 설명하기 어려워, 실제 기사 범위를 2026년 4월 30일부터 5월 18일까지 확장해 정리했다.
주요 트렌드 &nbsp; AI 서버와 클라우드 사업자의 물량 확보 경쟁이 HBM뿐 아니라 서버 D램, 고용량 RDIMM, 엔터프라이즈 SSD 수요를 동시에 끌어올리고 있다. 메모리 업체들은 한정된 웨이퍼와 클린룸을 HBM·서버용 제품에 우선 배분하면서 PC·모바일·소비자용 메모리 공급이 상대적으로 줄고 있다. 가격 협상 주도권이 고객사에서 공급사로 이동했고, 일부 고객은 장기공급계약으로 물량을 선점하려는 흐름을 보이고 있다. 레거시 낸드 공급 축소가 자동차, 산업 장비, 의료기기처럼 장기 안정성이 필요한 시장에도 비용 부담을 키우고 있다. 핵심 이슈 &nbsp; TrendForce는 2026년 2분기 일반 D램 계약가격이 전분기 대비 58~63%, 낸드플래시 계약가격이 70~75% 오를 것으로 전망했다. SK하이닉스는 2026년 1분기 실적발표에서 향후 3년간 HBM 수요가 공급능력을 웃돌 것으로 봤고, 고객들이 가격보다 물량 확보를 우선시하고 있다고 설명했다. 삼성전자도 2026년 1분기 컨퍼런스콜에서 AI 확산으로 HBM, 서버 D램, 서버 SSD 수요가 크게 늘었고 일부 고객은 2027년 수요까지 선제 확보에 나섰다고 밝혔다. 삼성전자와 키옥시아의 2D 낸드 축소, 마이크론의 소비자용 브랜드 종료 등으로 레거시 낸드 공급 기반이 약해지고 있다. 가격 상승은 메모리 제조사에는 이익 개선 요인이지만, 스마트폰·PC·SSD·자동차 전장 업체에는 원가 부담으로 전가되고 있다. 시장 영향 &nbsp; SK하이닉스와 삼성전자 메모리 사업에는 우호적인 가격 환경이 이어질 가능성이 크다. 특히 HBM, 서버 D램, 엔터프라이즈 SSD 비중이 높은 업체일수록 제품 믹스 개선 효과가 클 수 있다. 메모리 모듈·SSD 조립업체는 재고 확보 비용이 급증하고 있다. 대만 모듈업체들이 대규모 차입과 전환사채 발행으로 칩 매입 자금을 조달하는 흐름은 가격 상승이 공급망 하단까지 압박하고 있음을 보여준다. 완제품 업체는 선택을 강요받고 있다. 스마트폰과 PC 제조사는 가격을 올리거나, 탑재 메모리 용량을 낮추거나, 생산 계획을 조정해야 할 수 있다. 투자자 입장에서는 메모리 가격 상승이 반도체 대형주와 HBM 장비·소재주에는 긍정적일 수 있지만, 단기간 급등한 주가에는 공급 확대, 가격 피크아웃, 경기 둔화 리스크가 함께 반영될 수 있다. 향후 전망 &nbsp; 메모리 공급 부족은 2026년 하반기에도 쉽게 풀리기 어렵다는 전망이 우세하다. 신규 팹과 클린룸, EUV 장비, HBM 패키징 증설은 시간이 걸리기 때문이다. AI 인프라 투자가 계속된다면 HBM뿐 아니라 일반 서버 D램과 eSSD까지 가격 강세가 이어질 가능성이 있다. 반대로 PC·스마트폰 수요가 비용 부담으로 둔화하면 범용 제품 일부에서는 수요 저항이 커질 수 있다. 2027년 이후 신규 생산능력이 본격적으로 들어오는 시점에는 공급 과잉 우려가 다시 부각될 수 있어, 장기 투자자는 가격 상승률보다 실제 물량, 장기계약, 고객 다변화를 함께 봐야 한다. 주요 뉴스 &nbsp; 2026-05-18 Tom&rsquo;s Hardware: 메모리 모듈업체들, 칩 구매 자금으로 8억8000만 달러 조달
Tom&rsquo;s Hardware는 Adata와 TeamGroup 등 대만 메모리 모듈업체들이 칩 재고 확보를 위해 280억 대만달러, 약 8억8000만 달러 규모의 자금을 조달하고 있다고 전했다. 기사에서는 TrendForce 전망을 인용해 2026년 1분기 D램 계약가격이 90~95% 올랐고, 2분기에도 추가 상승이 예상된다고 설명했다.
2026-05-12 조선비즈: 삼성전자·키옥시아 떠난 2D 낸드플래시 공급 절벽
조선비즈는 삼성전자가 화성 12라인의 2D 낸드 생산을 중단하고 1c D램용 엔드팹으로 전환하는 작업에 착수했다고 보도했다. 키옥시아와 마이크론도 레거시 낸드 축소 흐름에 동참하면서 자동차 전장, 산업 장비, 의료기기용 구형 낸드 수급 불균형이 심화될 수 있다고 짚었다.
2026-05-11 TechRadar: AI 메모리 부족이 스마트폰 가격을 높일 수 있다
TechRadar는 AI 데이터센터가 글로벌 D램과 낸드 공급을 흡수하면서 스마트폰과 PC 제조사가 더 비싼 메모리를 쓰거나 탑재 용량을 줄여야 할 수 있다고 분석했다. HBM 생산에 웨이퍼가 배정될수록 소비자용 D램과 낸드 공급 여력이 줄어드는 구조를 지적했다.
2026-04-30 대한경제: 삼성전자, HBM 공급 타이트…2027년 수요까지 확보
대한경제는 삼성전자 2026년 1분기 컨퍼런스콜을 정리하며, AI 수요 확대로 HBM, 서버 D램, 서버 SSD 중심의 수요가 크게 증가했다고 전했다. 삼성전자는 일부 고객이 2027년 수요까지 선제 확보에 나섰고, D램과 낸드 ASP 상승이 실적 개선을 이끌었다고 설명했다.
2026-04-30 재경일보: D램 가격 4월 23% 급등, 낸드 16개월 연속 상승
재경일보는 D램익스체인지와 TrendForce 자료를 바탕으로 4월 PC용 DDR4 8Gb 평균 고정거래가격이 전월 대비 23.08% 오른 16.00달러를 기록했다고 보도했다. 128Gb MLC 낸드 가격도 전월 대비 36.29% 급등하며 낸드 가격 상승세가 16개월째 이어졌다고 전했다.
2026-04-30 Tom&rsquo;s Hardware: 삼성·SK하이닉스, AI발 메모리 부족이 2027년 이후까지 이어질 수 있다고 경고
Tom&rsquo;s Hardware는 삼성전자와 SK하이닉스의 실적 발표 발언을 종합해 AI 메모리 부족이 최소 2027년 이후까지 이어질 수 있다고 분석했다. HBM 수요가 직접적인 원인이지만, 생산능력과 투자 자원이 HBM으로 이동하면서 일반 D램 시장까지 타이트해지고 있다고 설명했다.
2026-04-23 비즈워치: SK하이닉스, 분기 최대 또 경신…HBM 3년간 공급 부족
비즈워치는 SK하이닉스가 2026년 1분기 매출 52조5763억 원, 영업이익 37조6103억 원을 기록했다고 전했다. 회사는 HBM 수요가 향후 3년간 공급능력을 웃돌고, 고객들이 가격보다 물량 확보를 중시한다고 설명했다.
2026-03-31 TrendForce: AI 서버 수요가 2분기 메모리 계약가격 상승을 견인
TrendForce는 2026년 2분기 일반 D램 계약가격이 전분기 대비 58~63%, 낸드플래시 계약가격이 70~75% 오를 것으로 전망했다. 북미 클라우드 사업자의 AI 추론 인프라 확대와 고용량 RDIMM, 엔터프라이즈 SSD 수요가 가격 상승의 핵심 배경으로 제시됐다.
2026-02-12 삼성전자 뉴스룸: 삼성전자, 세계 최초 업계 최고 성능의 HBM4 양산 출하
삼성전자는 HBM4 양산 출하를 발표하며 2026년 HBM 매출이 2025년 대비 3배 이상 증가할 것으로 전망했다. 회사는 HBM4E 샘플을 2026년 하반기에 출하하고, 2027년부터 고객 맞춤형 HBM 샘플링을 시작할 계획이라고 밝혔다.
한줄 요약 &nbsp; AI 서버가 HBM과 서버 메모리를 우선 흡수하면서 D램·낸드 전반의 공급 부족과 가격 상승이 확산되고 있으며, 메모리 업체에는 호재지만 완제품 업체에는 원가 부담으로 번지고 있다.`}).add({id:59,href:"/posts/bancassurance-guide/",title:"방카슈랑스란? 은행에서 보험 가입할 때 알아야 할 장점...",description:"방카슈랑스의 뜻과 구조, 은행에서 보험에 가입할 때의 장점, 판매되는 보험 종류, 가입 전 확인해야 할 핵심 주의사항을 쉽게 정리하였다.",content:`은행에 갔다가 예금이나 대출 상담을 받는 줄 알았는데 보험 상품을 안내받는 경우가 있다. 처음에는 &ldquo;은행에서 왜 보험을 팔지?&ldquo;라는 생각이 들 수 있다. 은행은 예금과 대출, 보험사는 보험이라는 구분이 익숙하기 때문이다.
이렇게 은행 창구나 은행 앱을 통해 보험 상품을 판매하는 구조를 방카슈랑스라고 한다. 이름은 어렵지만 생활 속에서는 이미 꽤 익숙한 방식이다. 연금보험, 저축성보험, 여행자보험, 화재보험 같은 상품을 은행에서 가입할 수 있다면 대부분 방카슈랑스와 관련이 있다.
방카슈랑스는 편리하고 보험료가 상대적으로 낮을 수 있다는 장점이 있지만, 은행에서 권유받았다고 해서 무조건 예금처럼 안전한 상품은 아니다. 보험은 보험이고, 가입 전에는 보장 내용과 해지환급금, 수수료, 납입 기간을 따로 확인해야 한다.
방카슈랑스란 &nbsp; 방카슈랑스(Bancassurance)는 은행을 뜻하는 프랑스어 &ldquo;Banque&quot;와 보험을 뜻하는 &ldquo;Assurance&quot;가 합쳐진 말이다. 말 그대로 은행과 보험이 결합된 금융 서비스를 의미한다.
좁은 의미로는 보험회사가 만든 보험 상품을 은행 지점이나 은행 앱에서 판매하는 방식을 말한다. 고객 입장에서는 은행 직원에게 보험 상품 설명을 듣고 가입하지만, 실제 보험 계약의 책임과 보장 제공은 보험회사가 맡는다.
넓은 의미로는 은행과 보험회사가 함께 상품을 개발하거나, 금융그룹 안에서 은행과 보험사가 제휴해 종합 금융 서비스를 제공하는 형태까지 포함한다. 그래서 방카슈랑스를 단순히 &ldquo;은행이 보험을 파는 것&quot;으로만 보기보다는 은행과 보험사가 서로의 영업망과 상품을 연결한 구조라고 이해하면 쉽다.
우리나라에서는 2003년 8월부터 방카슈랑스 제도가 시행되었다. 유럽에서는 1980년대 중반부터 확산되었고, 은행과 보험의 경계가 점점 낮아지면서 여러 나라에서 일반적인 금융 판매 방식으로 자리 잡았다.
우리은행 방카슈랑스 안내 보기 &nbsp; 방카슈랑스가 생긴 이유 &nbsp; 방카슈랑스가 등장한 가장 큰 이유는 은행과 보험회사가 서로에게 필요한 것을 가지고 있기 때문이다.
은행은 전국적인 지점망과 고객 기반을 가지고 있다. 고객은 월급 통장, 예금, 대출, 카드, 자산관리 상담 때문에 은행을 자주 찾는다. 보험회사 입장에서는 이미 고객이 많이 모이는 은행 창구를 활용하면 별도의 판매망을 새로 만드는 부담을 줄일 수 있다.
보험회사는 보장 설계, 보험료 산정, 계약 관리, 보험금 지급 같은 전문 영역을 가지고 있다. 은행은 이 보험 상품을 고객에게 소개하고 판매하면서 수수료 수입을 얻을 수 있다.
경제학에서는 여러 상품이나 서비스를 따로 운영할 때보다 함께 운영할 때 평균비용이 줄고 시너지가 나는 현상을 &ldquo;범위의 경제&quot;라고 한다. 은행과 보험의 제휴도 여기에 가깝다. 은행은 기존 점포와 고객 접점을 활용하고, 보험회사는 판매 채널을 넓히는 방식이다.
고객 입장에서도 장점이 있다. 은행 업무를 보면서 보험까지 비교하고 가입할 수 있어 동선이 줄어든다. 예금, 대출, 연금, 보험을 한곳에서 상담받을 수 있으므로 자산관리 관점에서도 편리하다.
방카슈랑스의 장점 &nbsp; 보험료가 낮을 수 있다 &nbsp; 방카슈랑스 상품은 일반 설계사 채널보다 사업비가 낮게 설계되는 경우가 있다. 은행은 이미 지점망과 상담 인력을 갖추고 있기 때문에 보험회사가 별도 판매 조직을 새로 만드는 비용을 줄일 수 있다.
보험료는 크게 순보험료와 부가보험료로 나뉜다. 순보험료는 보험금 지급을 위한 재원이고, 부가보험료는 계약 모집과 유지, 관리에 필요한 사업비 성격이다. 방카슈랑스는 이 사업비를 줄일 여지가 있어 고객이 내는 보험료가 상대적으로 낮아질 수 있다.
다만 모든 방카슈랑스 상품이 항상 가장 저렴하다는 뜻은 아니다. 보험료는 보장 범위, 납입 기간, 환급 구조, 특약 구성에 따라 달라진다. 은행에서 가입할 수 있다는 점만 보지 말고, 같은 조건의 다른 보험 상품과 비교해야 한다.
한곳에서 금융 상담을 받을 수 있다 &nbsp; 방카슈랑스의 또 다른 장점은 원스톱 서비스다. 예금, 적금, 대출, 연금, 보험을 따로따로 알아보면 시간이 많이 걸린다. 은행에서는 기존 거래 정보와 상담 흐름을 바탕으로 필요한 금융상품을 함께 안내받을 수 있다.
예를 들어 결혼을 앞두고 목돈을 모으는 사람은 적금과 저축성보험을 같이 비교할 수 있다. 자녀가 태어난 가정은 어린이보험이나 교육자금 마련 상품을 상담받을 수 있다. 은퇴를 준비하는 사람은 연금보험과 IRP, 연금저축을 함께 살펴볼 수 있다.
이런 통합 상담은 바쁜 사람에게 편리하다. 다만 편리함이 곧 최적의 선택을 뜻하지는 않는다. 은행에서 안내받은 상품도 보험 상품 설명서와 약관을 직접 확인하는 과정이 필요하다.
은행 거래 고객에게 접근성이 좋다 &nbsp; 보험 가입을 어렵게 느끼는 사람에게 은행은 심리적 문턱이 낮은 편이다. 이미 거래 중인 은행 앱이나 지점을 통해 가입할 수 있기 때문이다. 보험사 지점이나 설계사를 따로 찾지 않아도 된다는 점은 초보자에게 꽤 큰 장점이다.
특히 여행자보험, 화재보험처럼 비교적 단순한 상품은 은행 앱에서 빠르게 가입할 수 있다. 짧은 기간 필요한 보험을 찾는다면 방카슈랑스 채널이 편할 수 있다.
은행에서 판매되는 보험 종류 &nbsp; 방카슈랑스에서 판매되는 상품은 은행과 보험회사 제휴 상황에 따라 다르지만, 일반적으로 다음과 같은 보험을 많이 볼 수 있다.
연금보험 &nbsp; 연금보험은 노후 생활비 마련을 목적으로 하는 보험이다. 일정 기간 보험료를 납입한 뒤 나중에 연금 형태로 받는 구조다. 은퇴 준비를 시작하려는 사람이 은행에서 자주 상담받는 상품 중 하나다.
연금보험은 장기 상품이므로 중도해지 시 손해가 발생할 수 있다. 가입 전에는 연금 개시 시점, 예상 연금액, 최저보증 여부, 해지환급금 예시를 반드시 확인해야 한다.
저축성보험 &nbsp; 저축성보험은 목돈 마련과 보험 기능을 함께 넣은 상품이다. 예금처럼 보일 수 있지만 은행 예금과는 다르다. 보험기간, 사업비, 해지환급금 구조가 있기 때문에 단기 자금 운용에는 맞지 않을 수 있다.
저축성보험은 오래 유지할수록 효과가 나는 상품이 많다. 1년이나 2년 안에 쓸 돈이라면 예금, 적금, 파킹통장과 비교하는 편이 좋다.
건강보험과 어린이보험 &nbsp; 건강보험은 질병, 상해, 수술, 입원 등으로 생길 수 있는 의료비 부담을 줄이기 위한 상품이다. 어린이보험은 자녀의 질병과 사고, 성장 과정에서 필요한 보장을 준비하는 상품이다.
이런 보장성보험은 보험료보다 보장 범위가 더 중요하다. 이미 가입한 실손보험이나 진단비 보험과 중복되는 부분은 없는지 확인해야 한다.
여행자보험과 화재보험 &nbsp; 해외여행보험, 국내여행보험, 골프보험, 주택 화재보험도 방카슈랑스 채널에서 접할 수 있다. 여행자보험은 여행 중 상해, 질병, 배상책임, 휴대품 손해 등을 담보하는 경우가 많고, 화재보험은 주택이나 가재도구 손해를 보장한다.
이런 상품은 필요 시점이 분명한 편이라 은행 앱으로 가입하면 편리하다. 다만 보장 한도와 면책사항은 상품마다 차이가 크므로 가입 화면에서 핵심 보장만 보고 넘기지 않는 것이 좋다.
방카슈랑스 가입 전 확인할 점 &nbsp; 은행 상품이 아니라 보험 상품이다 &nbsp; 방카슈랑스에서 가장 많이 생기는 오해는 &ldquo;은행에서 가입했으니 예금처럼 안전하겠지&quot;라는 생각이다. 하지만 방카슈랑스는 은행이 판매 창구 역할을 할 뿐, 실제 계약은 보험회사와 맺는 보험 계약이다.
예금자보호 여부도 상품마다 다르다. 일부 보험상품은 예금자보호 대상이 될 수 있지만, 투자성 보험이나 변액보험처럼 운용 실적에 따라 손실이 발생할 수 있는 상품도 있다. 은행에서 가입했다는 사실만으로 원금이 보장되는 것은 아니다.
중도해지 환급금을 확인해야 한다 &nbsp; 보험은 장기 유지가 전제된 상품이 많다. 특히 저축성보험이나 연금보험은 초기에 해지하면 납입한 보험료보다 적은 금액을 돌려받을 수 있다. 이 부분을 모르고 가입하면 나중에 &ldquo;은행에서 가입한 저축상품인 줄 알았다&quot;며 실망하기 쉽다.
가입 전에는 해지환급금 예시표를 꼭 봐야 한다. 1년 후, 3년 후, 5년 후에 해지하면 얼마를 돌려받는지 확인하면 이 상품이 단기 저축용인지 장기 유지용인지 감이 잡힌다.
보장 내용과 특약을 따로 봐야 한다 &nbsp; 보험료가 낮아 보여도 보장 범위가 좁으면 좋은 상품이라고 보기 어렵다. 반대로 특약이 너무 많으면 보험료가 부담스러워질 수 있다. 필요한 보장과 불필요한 특약을 구분하는 과정이 중요하다.
이미 가입한 보험이 있다면 중복 보장도 확인해야 한다. 실손보험, 암보험, 운전자보험, 화재보험처럼 생활 속에서 자주 가입하는 보험은 중복되기 쉽다. 보험은 많이 가입하는 것보다 필요한 위험을 빠짐없이, 감당 가능한 보험료로 준비하는 것이 중요하다.
비교할 시간을 가져야 한다 &nbsp; 은행 창구에서 설명을 들으면 바로 가입해야 할 것 같은 분위기를 느낄 수 있다. 하지만 보험은 한 번 가입하면 오래 유지하는 상품이 많다. 하루 이틀 시간을 두고 약관, 상품설명서, 해지환급금, 보장 제외 조건을 다시 읽어보는 편이 좋다.
특히 저축성보험이나 연금보험은 금리, 수익률, 세제 혜택, 중도해지 손실을 함께 봐야 한다. 예금이나 적금과 비교할 때도 단순히 만기 금액만 보지 말고, 중간에 돈이 필요할 가능성까지 생각해야 한다.
정리 &nbsp; 방카슈랑스는 은행과 보험이 결합된 금융 서비스다. 좁게는 은행 창구나 은행 앱에서 보험상품을 판매하는 방식이고, 넓게는 은행과 보험회사가 상품 개발과 판매, 자산관리 서비스를 함께 제공하는 구조까지 포함한다.
장점은 분명하다. 은행을 통해 보험에 쉽게 접근할 수 있고, 상품에 따라 보험료가 낮을 수 있으며, 예금과 대출, 연금, 보험을 한곳에서 상담받을 수 있다. 여행자보험이나 화재보험처럼 필요할 때 빠르게 가입해야 하는 상품도 편리하다.
하지만 방카슈랑스는 예금이 아니라 보험이다. 은행에서 가입했다고 해서 무조건 원금이 보장되는 것은 아니며, 중도해지 손실이나 보장 제외 조건이 있을 수 있다. 가입 전에는 보험회사, 보장 내용, 보험료, 납입 기간, 해지환급금, 예금자보호 여부를 차분히 확인해야 한다.
처음 방카슈랑스를 접한다면 &ldquo;은행에서 파니까 안전하다&quot;보다 &ldquo;은행을 통해 보험회사 상품을 가입한다&quot;라고 생각하는 편이 정확하다. 이 관점만 가져도 불필요한 오해를 꽤 줄일 수 있다.
자주 묻는 질문 &nbsp; 방카슈랑스는 은행 상품인가? &nbsp; 은행에서 판매하지만 본질은 보험회사 상품이다. 은행은 판매 창구 역할을 하고, 보험 계약의 보장과 지급 책임은 상품을 만든 보험회사가 맡는다. 그래서 가입 전에는 은행 이름뿐 아니라 보험회사와 상품 약관을 함께 확인해야 한다.
방카슈랑스 보험은 일반 보험보다 무조건 저렴한가? &nbsp; 무조건 저렴하다고 말할 수는 없다. 은행 지점망을 활용해 사업비가 낮아질 수는 있지만, 실제 보험료는 보장 범위, 특약, 납입 기간, 환급 구조에 따라 달라진다. 같은 조건으로 다른 보험 상품과 비교해야 제대로 판단할 수 있다.
은행에서 가입한 보험도 중도해지하면 손해가 날 수 있나? &nbsp; 그렇다. 특히 저축성보험이나 연금보험은 초기에 해지하면 해지환급금이 납입 보험료보다 적을 수 있다. 가입 전에 해지환급금 예시표를 보고, 중간에 돈이 필요할 가능성이 있다면 예금이나 적금 같은 다른 상품과 비교하는 것이 좋다.`}).add({id:60,href:"/posts/dividend-stock-investing/",title:"배당주 투자 방법: 고배당주, 배당기준일, 배당소득세까...",description:"배당주 뜻부터 고배당주와 우선주 차이, 배당금을 받기 위한 매수 시점, 배당소득세와 분리과세 기준까지 초보자 눈높이로 정리했다.",content:`주식을 하다 보면 &ldquo;찬 바람이 불면 배당주를 보라&quot;는 말을 자주 듣는다. 연말이 가까워질수록 배당을 기대하는 투자자가 늘고, 실제로 많은 기업이 연말 기준으로 배당금을 정하기 때문이다.
배당주는 주가가 오르지 않아도 현금 흐름을 만들 수 있다는 점에서 매력적이다. 주식을 팔아야만 수익이 나는 구조가 아니라, 보유하는 동안 기업 이익의 일부를 배당금으로 받을 수 있다. 다만 배당수익률만 보고 고르면 생각보다 위험할 수 있다. 배당을 받으려면 언제까지 주식을 사야 하는지, 세금은 얼마나 떼는지, 배당이 줄어들 가능성은 없는지도 같이 봐야 한다.
이 글에서는 배당주의 뜻, 고배당주와 배당성장주의 차이, 배당금을 받는 방법, 배당소득세와 2026~2028년 배당소득 분리과세까지 한 번에 정리하였다.
배당주는 이익을 주주에게 나눠주는 기업의 주식이다 &nbsp; 배당은 기업이 벌어들인 이익의 일부를 주주에게 나눠주는 것이다. 배당주는 이런 배당을 비교적 꾸준히 하는 기업의 주식을 말한다.
예를 들어 어떤 회사가 보통주 1주당 1,000원의 현금 배당을 결정했다고 해보자. 내가 그 회사 주식을 100주 가지고 있다면 세전 배당금은 10만 원이다. 이후 배당소득세가 원천징수되고, 남은 금액이 증권 계좌로 들어온다.
배당은 보통 현금으로 지급되지만, 꼭 현금만 있는 것은 아니다. 회사가 보유한 주식이나 다른 자산으로 나눠주는 현물 배당도 있다. 다만 일반 투자자가 뉴스나 증권사 앱에서 자주 보는 배당은 대부분 현금 배당이다.
배당주 투자의 핵심은 &ldquo;기업이 앞으로도 이익을 내고, 그 이익을 주주에게 나눠줄 수 있는가&quot;다. 현재 배당금이 높아 보여도 실적이 나빠지면 다음 해 배당이 줄거나 없어질 수 있다. 그래서 배당주는 단순히 이자를 주는 예금처럼 보면 안 되고, 주식 투자라는 기본 성격을 먼저 이해해야 한다.
배당주 투자 전 알아둘 용어 &nbsp; 배당주를 볼 때 자주 나오는 용어는 네 가지다.
용어 뜻 배당금 주주가 받는 실제 배당 금액 배당성향 당기순이익 중 배당으로 지급한 비율 배당수익률 현재 주가 대비 1년 배당금의 비율 시가배당률 주가를 기준으로 계산한 현금 배당 비율 초보자에게 가장 직관적인 지표는 배당수익률이다. 주가가 50,000원인 주식이 1년에 2,500원을 배당하면 배당수익률은 5%다. 다만 이 숫자는 주가와 배당금에 따라 계속 바뀐다. 주가가 크게 떨어지면 배당수익률이 높아 보일 수 있는데, 그 이유가 실적 악화라면 오히려 조심해야 한다.
고배당주, 우선주, 배당성장주는 성격이 다르다 &nbsp; 배당주라고 해서 모두 같은 투자 대상은 아니다. 배당을 바라보는 방식에 따라 고배당주, 우선주, 배당성장주로 나눠서 볼 수 있다.
고배당주는 배당수익률이 높은 주식이다 &nbsp; 고배당주는 현재 주가 대비 배당금이 큰 주식이다. 일반적으로 배당수익률이 연 4~5% 이상이면 고배당주로 보는 경우가 많다.
금융주, 통신주, 전기가스 관련 업종은 전통적으로 배당이 높은 편에 속한다. 사업이 비교적 성숙해 있고, 큰 폭의 성장 투자보다 안정적인 현금 흐름을 주주에게 돌려주는 기업이 많기 때문이다.
하지만 고배당주를 볼 때는 &ldquo;왜 배당수익률이 높은가&quot;를 따져야 한다. 배당금이 꾸준히 늘어서 수익률이 높은 것이라면 긍정적일 수 있다. 반대로 주가가 급락해서 배당수익률만 높아진 경우라면 기업 실적, 부채, 업황을 더 꼼꼼히 봐야 한다.
우선주는 배당을 먼저 받을 권리가 있는 주식이다 &nbsp; 우선주는 보통주보다 배당이나 잔여재산 분배에서 우선권이 있는 주식이다. 대신 일반적으로 의결권은 없다. 주주총회에서 회사의 주요 의사결정에 표를 행사하는 권리는 약한 대신, 배당 측면에서 우대를 받는 구조다.
국내 주식에서는 종목명 뒤에 &ldquo;우&quot;가 붙어 있으면 우선주인 경우가 많다. 예를 들어 같은 회사라도 보통주와 우선주의 주가, 거래량, 배당수익률이 다르게 움직일 수 있다.
우선주는 배당 매력이 커 보일 수 있지만 거래량이 적은 종목도 많다. 거래량이 부족하면 사고팔 때 원하는 가격에 체결되지 않을 수 있으니, 배당수익률과 함께 유동성도 확인하는 것이 좋다.
배당성장주는 배당금이 꾸준히 늘어나는 기업이다 &nbsp; 배당성장주는 지금 당장 배당수익률이 아주 높지는 않아도, 이익과 배당금이 꾸준히 늘어날 가능성이 있는 기업을 말한다.
예를 들어 현재 배당수익률은 2% 수준이지만 매년 배당금이 조금씩 오르는 기업이 있다. 이런 기업을 오래 보유하면 내가 처음 산 가격 기준 배당수익률은 시간이 갈수록 높아질 수 있다. 배당성장주는 단기 현금 흐름보다 장기 복리 효과를 기대하는 투자자에게 잘 맞는다.
배당금을 받으려면 배당기준일을 확인해야 한다 &nbsp; 배당주를 샀다고 해서 언제든 배당금을 받을 수 있는 것은 아니다. 배당을 받을 권리가 확정되는 날인 배당기준일에 주주명부에 올라 있어야 한다.
국내 주식은 매매 체결 후 실제 결제까지 보통 2영업일이 걸린다. 그래서 배당을 받으려면 배당기준일 2영업일 전까지 주식을 사야 한다. 이 날짜를 놓치면 하루 차이로도 배당을 받지 못할 수 있다.
예를 들어 배당기준일이 수요일이고 중간에 공휴일이 없다면 월요일까지는 주식을 매수해야 한다. 화요일에 사면 결제가 목요일에 끝나기 때문에 수요일 기준 주주명부에 오르지 못한다.
배당기준일 배당을 받기 위한 마지막 매수일 수요일 월요일 목요일 화요일 금요일 수요일 월요일 전주 목요일 주말과 공휴일은 영업일 계산에서 빠진다. 특히 연말에는 휴장일이 있을 수 있으니 증권사 앱이나 한국거래소 일정을 함께 확인하는 편이 안전하다.
기업별 배당금과 배당기준일은 금융감독원 전자공시시스템(DART)이나 한국거래소 기업공시채널(KIND)에서 확인할 수 있다. 포털 증권, 증권사 앱에서도 요약 정보를 볼 수 있지만, 중요한 결정은 공시 원문을 기준으로 확인하는 습관이 좋다.
금융감독원 DART에서 배당 공시 확인 &nbsp; 한국거래소 KIND에서 배당기준일 확인 &nbsp; 배당주를 고를 때는 수익률보다 지속성을 먼저 본다 &nbsp; 배당주를 고를 때 배당수익률은 출발점일 뿐이다. 실제로는 배당을 계속 줄 수 있는 기업인지가 더 중요하다.
먼저 최근 몇 년간 배당금이 어떻게 변했는지 확인해야 한다. 1년만 반짝 배당을 많이 준 기업인지, 3~5년 이상 꾸준히 배당을 유지하거나 늘린 기업인지에 따라 의미가 다르다.
둘째, 배당성향을 본다. 배당성향이 너무 낮으면 주주환원 의지가 약할 수 있고, 너무 높으면 이익보다 무리하게 배당하는 상태일 수 있다. 예를 들어 순이익 대부분을 배당으로 지급하는 기업은 업황이 나빠졌을 때 배당을 유지하기 어려울 수 있다.
셋째, 기업의 이익 흐름을 봐야 한다. 배당은 결국 이익에서 나온다. 매출과 영업이익이 줄어드는 기업의 높은 배당수익률은 오래가지 않을 가능성이 있다. 반대로 이익이 안정적이고 현금흐름이 좋은 기업은 배당을 꾸준히 유지할 힘이 있다.
넷째, 주가 변동 위험도 생각해야 한다. 배당수익률 5%를 기대하고 샀는데 주가가 20% 떨어지면 배당금만으로는 손실을 메우기 어렵다. 배당주는 안정적인 이미지가 있지만 원금 보장 상품이 아니다.
초보자라면 개별 고배당주만 고르기보다 배당 ETF를 함께 검토해볼 수 있다. 여러 종목에 분산 투자하면 한 기업의 배당 축소나 주가 하락이 전체 포트폴리오에 주는 충격을 줄일 수 있다. 다만 ETF도 운용보수, 구성 종목, 분배금 지급 방식은 꼭 확인해야 한다.
배당금에는 세금이 붙는다 &nbsp; 배당금을 받으면 일반적으로 배당소득세가 원천징수된다. 국내 배당소득세는 소득세 14%와 지방소득세 1.4%를 합쳐 15.4%다.
예를 들어 세전 배당금이 100만 원이라면 15만 4,000원이 세금으로 원천징수되고, 실제 계좌에는 84만 6,000원이 들어오는 식이다. 일반적인 경우에는 배당금을 받을 때 세금이 이미 빠지기 때문에 별도로 신고하지 않아도 된다.
다만 연간 금융소득이 2,000만 원을 넘으면 이야기가 달라진다. 이자소득과 배당소득을 합친 금융소득이 2,000만 원을 초과하면 금융소득종합과세 대상이 될 수 있다. 이때는 근로소득, 사업소득 등 다른 소득과 합산해 종합소득세를 계산한다.
2026년부터 2028년까지는 고배당 기업으로부터 받은 배당소득에 대해 한시적으로 분리과세가 적용될 수 있다. 고배당 기업은 배당성향이 40% 이상인 기업, 또는 배당성향이 25% 이상이면서 전년보다 배당을 10% 이상 늘린 기업을 기준으로 설명된다.
과세표준 세율 2,000만 원 이하 14% 2,000만 원 초과~3억 원 이하 20% 3억 원 초과~50억 원 이하 25% 50억 원 초과 30% 위 세율은 지방소득세를 제외한 기준이다. 세법은 해마다 바뀔 수 있으므로 실제 투자나 신고 전에는 최신 세법, 증권사 안내, 세무 전문가 의견을 함께 확인하는 것이 좋다.
배당주 투자는 현금 흐름을 만드는 방식이다 &nbsp; 배당주 투자의 장점은 투자자가 주식을 팔지 않아도 현금 흐름을 얻을 수 있다는 점이다. 월급처럼 매달 정확히 들어오는 구조는 아니지만, 분기 배당이나 반기 배당을 하는 기업을 조합하면 일정한 현금 흐름을 만들 수도 있다.
하지만 배당만 보고 투자하면 실망하기 쉽다. 배당금은 확정 이자가 아니고, 기업 실적과 이사회 결정에 따라 줄어들 수 있다. 주가가 크게 떨어지면 배당을 받아도 전체 수익률은 마이너스가 될 수 있다.
그래서 배당주를 볼 때는 배당수익률, 배당성향, 이익 안정성, 부채 수준, 업종 전망을 같이 봐야 한다. 배당을 많이 주는 기업보다 오래 줄 수 있는 기업이 더 좋은 투자 대상일 때가 많다.
처음 시작한다면 관심 기업 3~5개를 정해 최근 배당 공시와 실적을 직접 확인해보는 것이 좋다. 숫자를 한 번씩 직접 찾아보면 배당주가 단순히 &ldquo;배당을 많이 주는 주식&quot;이 아니라 기업의 현금흐름과 주주환원 정책을 함께 보는 투자라는 점이 더 잘 보인다.
자주 묻는 질문 &nbsp; 배당주란 무엇인가? &nbsp; 배당주는 기업이 벌어들인 이익의 일부를 주주에게 정기적으로 나눠주는 주식이다. 보통 현금 배당을 꾸준히 하는 기업을 배당주라고 부른다.
배당금을 받으려면 언제까지 주식을 사야 하나? &nbsp; 배당기준일 2영업일 전까지 주식을 사야 한다. 국내 주식은 매매 체결 후 결제까지 보통 2영업일이 걸리기 때문에, 배당기준일 당일이나 하루 전 매수로는 배당을 받지 못할 수 있다.
배당금에도 세금이 붙나? &nbsp; 배당금에는 보통 15.4%의 배당소득세가 원천징수된다. 연간 이자와 배당을 합친 금융소득이 2,000만 원을 넘으면 금융소득종합과세 대상이 될 수 있으므로 세금 부담을 따로 확인해야 한다.`}).add({id:61,href:"/posts/dividend-investing-principles/",title:"배당투자 원리, 주가보다 현금흐름을 먼저 보는 이유",description:"배당투자가 왜 매력적인지 배당수익률 계산, 하락장에서의 방어력, 정기적인 현금흐름, 배당 재투자의 복리 효과까지 쉽게 정리했다.",content:`주식투자를 시작하면 대부분 &ldquo;언제 사서 언제 팔아야 할까?&ldquo;부터 생각한다. 주가가 오르면 수익이고, 떨어지면 손실이라고 보기 쉽다. 그런데 주식에는 사고파는 차익 말고도 중요한 수익원이 하나 더 있다. 바로 배당금이다.
배당은 기업이 벌어들인 이익 중 일부를 주주에게 나눠주는 돈이다. 내가 그 회사에서 일하지 않아도, 주식을 보유하고 있다는 이유로 기업 이익의 일부를 받을 수 있다. 그래서 배당투자는 단순히 주가 상승만 기다리는 투자와 조금 다르다. 주식을 오래 보유하면서 현금흐름을 만들고, 그 현금흐름을 다시 투자해 자산을 키우는 방식에 가깝다.
이 글에서는 배당투자가 왜 매력적인지, 배당수익률은 어떻게 계산하는지, 주가가 흔들릴 때 배당주가 어떤 역할을 하는지, 배당 재투자가 장기적으로 어떤 힘을 갖는지 정리하였다.
배당투자는 기업 이익을 나눠 받는 투자다 &nbsp; 배당투자는 배당금을 꾸준히 지급하는 기업의 주식을 보유하면서 현금흐름을 만드는 투자 방식이다. 여기서 핵심은 &ldquo;주식을 팔아야만 돈을 번다&quot;는 생각에서 조금 벗어나는 것이다.
예를 들어 어떤 기업이 1주당 2,000원의 배당금을 지급한다고 해보자. 내가 이 주식을 100주 가지고 있다면 세전 배당금은 20만 원이다. 이후 배당소득세가 원천징수되고, 남은 금액이 증권 계좌로 들어온다.
배당금은 회사가 마음대로 주는 보너스처럼 보일 수 있지만, 실제로는 기업의 이익, 현금흐름, 주주환원 정책이 합쳐진 결과다. 기업이 돈을 잘 벌고, 그 돈을 주주와 나누겠다는 정책을 유지해야 배당도 이어질 수 있다.
그래서 배당투자는 예금처럼 원금이 보장되는 상품이 아니다. 주가가 떨어질 수도 있고, 기업 실적이 나빠지면 배당금이 줄거나 없어질 수도 있다. 다만 좋은 기업을 합리적인 가격에 보유한다면, 주가 상승과 배당금이라는 두 가지 수익원을 동시에 기대할 수 있다.
배당수익률은 배당투자의 출발점이다 &nbsp; 배당투자를 이해하려면 먼저 배당수익률을 알아야 한다. 배당수익률은 현재 주가 대비 1년에 받을 수 있는 배당금의 비율이다.
배당수익률 = 주당 배당금 ÷ 주가 × 100예를 들어 주가가 100,000원인 주식이 1년에 5,000원을 배당한다면 배당수익률은 5%다.
5,000원 ÷ 100,000원 × 100 = 5%그런데 같은 기업이 같은 배당금을 유지하는데 주가만 80,000원으로 내려가면 배당수익률은 6.25%가 된다.
5,000원 ÷ 80,000원 × 100 = 6.25%이 구조 때문에 배당주는 주가가 내려갔을 때 오히려 더 매력적으로 보이기도 한다. 배당금이 유지된다는 전제가 있다면, 낮은 가격에 살수록 내가 투자한 돈 대비 받을 수 있는 배당 비율이 높아지기 때문이다.
다만 배당수익률이 높다고 무조건 좋은 주식은 아니다. 주가가 기업 실적 악화 때문에 크게 떨어졌고, 앞으로 배당금도 줄어들 가능성이 크다면 높은 배당수익률은 착시일 수 있다. 숫자만 보지 말고 &ldquo;이 배당이 계속 유지될 수 있는가&quot;를 같이 봐야 한다.
배당주는 하락장에서 방어력이 생길 수 있다 &nbsp; 성장주는 기업이 빠르게 커질 때 큰 주가 상승을 기대할 수 있다. 하지만 기대가 꺾이면 주가도 크게 흔들린다. 특히 아직 이익보다 미래 성장 기대가 더 크게 반영된 주식은 시장 금리, 실적 전망, 투자 심리에 민감하게 움직인다.
반면 배당주는 조금 다른 힘을 갖는다. 배당을 꾸준히 지급하는 기업은 보통 일정한 이익과 현금흐름을 가지고 있는 경우가 많다. 주가가 내려가면 배당수익률이 높아지고, 그 수익률을 매력적으로 보는 투자자가 새로 들어올 수 있다.
예를 들어 배당금이 유지되는 상황에서 주가가 20% 내려가면, 신규 투자자 입장에서는 같은 배당금을 더 낮은 가격에 살 수 있다. 이때 기업의 기초체력이 무너지지 않았다면, 높은 배당수익률이 주가 하락을 어느 정도 막아주는 요인이 될 수 있다.
물론 이것이 배당주는 안 떨어진다는 뜻은 아니다. 금융위기, 경기침체, 업황 악화가 오면 배당주도 하락한다. 배당을 많이 주던 기업이 실적 부진으로 배당을 줄이면 주가는 더 크게 흔들릴 수 있다. 그래서 배당투자에서도 분산투자와 기업 분석은 필요하다.
배당주의 방어력은 &ldquo;주가가 무조건 안전하다&quot;가 아니라 &ldquo;배당이라는 현금흐름이 있어 투자자가 버틸 이유가 하나 더 생긴다&quot;에 가깝다.
배당금은 계좌에 들어오는 실제 현금흐름이다 &nbsp; 주식 평가손익은 팔기 전까지 숫자에 가깝다. 계좌에 수익률이 20%로 찍혀 있어도 매도하지 않으면 생활비로 쓸 수 없다. 반대로 수익률이 마이너스라도 좋은 기업을 보유하고 있고 배당이 계속 들어온다면, 투자자는 현금흐름을 얻는다.
배당금의 장점은 이 현금흐름이 비교적 구체적으로 느껴진다는 점이다. 분기마다 5만 원, 10만 원, 20만 원씩 들어오면 투자 성과가 먼 미래의 숫자로만 느껴지지 않는다. 전기요금, 통신비, 식비 일부를 배당금으로 충당할 수도 있고, 다시 투자할 수도 있다.
처음에는 금액이 작아 보일 수 있다. 배당금 1만 원, 3만 원은 인생을 바꿀 만큼 큰돈이 아니다. 하지만 중요한 것은 방향이다. 매달 노동소득만 들어오는 구조에서, 자산이 만들어내는 현금흐름이 조금씩 생기기 시작한다는 점이 배당투자의 매력이다.
특히 은퇴 준비나 장기 자산 형성을 생각한다면 현금흐름은 더 중요해진다. 주가가 오를 때만 기분 좋은 투자가 아니라, 시장이 조용하거나 흔들리는 시기에도 내 계좌로 돈이 들어오는 구조를 만들 수 있기 때문이다.
배당 재투자는 복리 효과를 만든다 &nbsp; 배당금을 바로 써도 되지만, 장기적으로 자산을 키우고 싶다면 배당 재투자가 강력하다. 배당 재투자는 받은 배당금으로 다시 주식이나 ETF를 사는 방식이다.
복리의 핵심은 수익이 다시 수익을 만든다는 점이다. 처음에는 원금에서만 배당이 나오지만, 배당금을 재투자하면 다음에는 원금과 재투자한 금액에서 함께 배당이 나온다. 시간이 지날수록 배당을 낳는 자산 자체가 커지는 구조다.
예를 들어 1,000만 원을 배당수익률 4% 수준의 자산에 투자했다고 가정해보자. 1년에 세전 40만 원의 배당이 나온다. 이 돈을 모두 써버리면 다음 해에도 원금은 그대로다. 하지만 배당금을 다시 투자하면 다음 해에는 1,040만 원에 가까운 자산이 배당을 만든다. 여기에 주가 상승과 배당금 증가가 함께 붙으면 장기 성과는 더 커질 수 있다.
물론 현실에서는 주가도 변하고, 배당금도 변하고, 세금도 있다. 그래도 원리는 분명하다. 배당을 소비하면 현금흐름의 만족을 얻고, 배당을 재투자하면 자산이 더 빨리 커질 가능성을 얻는다.
초보자라면 처음부터 모든 배당금을 재투자해야 한다고 부담 가질 필요는 없다. 일부는 생활비나 작은 보상으로 쓰고, 일부는 다시 투자하는 방식도 가능하다. 중요한 것은 배당금이 들어왔을 때 그냥 흘려보내지 않고, 목적을 정해 관리하는 것이다.
배당투자를 시작할 때 확인할 것 &nbsp; 배당투자는 단순히 배당수익률이 높은 종목을 고르는 일이 아니다. 높은 배당수익률 뒤에 위험이 숨어 있을 수 있기 때문이다.
먼저 배당금이 꾸준했는지 확인해야 한다. 최근 몇 년간 배당을 유지했는지, 줄였는지, 늘렸는지를 보면 기업의 주주환원 태도와 이익 안정성을 어느 정도 짐작할 수 있다.
둘째, 배당성향을 본다. 배당성향은 기업이 번 순이익 중 얼마를 배당으로 지급했는지를 나타낸다. 배당성향이 지나치게 높으면 당장은 좋아 보여도 경기 침체나 실적 악화 때 배당을 유지하기 어려울 수 있다.
셋째, 기업의 이익과 현금흐름을 봐야 한다. 배당은 결국 현금에서 나온다. 회계상 이익은 나지만 실제 현금흐름이 약한 기업은 장기적으로 안정적인 배당을 이어가기 어렵다.
넷째, 한 종목에 몰아넣지 않는 것이 좋다. 아무리 안정적인 배당주처럼 보여도 기업 하나에는 예상하지 못한 문제가 생길 수 있다. 여러 업종, 여러 종목, 또는 배당 ETF를 활용해 분산하는 편이 초보자에게 더 현실적이다.
마지막으로 세금도 생각해야 한다. 국내 투자자가 받는 배당금에는 보통 배당소득세가 원천징수된다. 배당금 규모가 커지면 금융소득 종합과세 대상이 될 수도 있으니, 배당투자가 커질수록 세금 구조도 함께 이해해야 한다.
정리 &nbsp; 배당투자의 매력은 주식을 팔지 않아도 현금흐름을 만들 수 있다는 데 있다. 주가 상승만 바라보는 투자는 시장이 흔들릴 때 버티기 어렵지만, 배당금이 꾸준히 들어오면 장기투자를 이어갈 이유가 하나 더 생긴다.
배당수익률은 주당 배당금을 주가로 나눈 값이다. 주가가 내려가면 배당수익률은 높아질 수 있지만, 그 배당이 계속 유지될 수 있는지는 따로 확인해야 한다. 높은 수익률보다 중요한 것은 지속 가능한 배당이다.
배당금을 다시 투자하면 복리 효과도 기대할 수 있다. 처음에는 작아 보여도 시간이 지나면 배당이 다시 주식을 사고, 그 주식이 다시 배당을 만드는 구조가 된다. 배당투자는 빠르게 부자가 되는 방법이라기보다, 현금흐름과 시간을 내 편으로 만드는 투자 방식에 가깝다.
처음 시작한다면 배당수익률이 높은 종목만 찾기보다 배당 이력, 이익 안정성, 배당성향, 현금흐름, 분산투자 여부를 함께 보는 습관을 들이는 것이 좋다.
자주 묻는 질문 &nbsp; 배당수익률이 높으면 무조건 좋은 주식인가? &nbsp; 아니다. 주가가 급락해서 배당수익률이 높아 보이는 경우도 있다. 기업 실적이 나빠져 앞으로 배당이 줄어들 수 있다면 높은 배당수익률은 오히려 위험 신호일 수 있다.
배당주는 성장주보다 안전한가? &nbsp; 상대적으로 변동성이 낮은 배당주도 있지만, 배당주도 주식이므로 원금 손실 위험이 있다. 배당이 안정적인 기업인지, 실적과 현금흐름이 뒷받침되는지 확인해야 한다.
배당금은 쓰는 것이 좋을까, 재투자하는 것이 좋을까? &nbsp; 생활비 현금흐름이 필요하다면 일부를 써도 된다. 다만 장기 자산 형성이 목적이라면 배당금을 재투자하는 편이 복리 효과를 기대하기 좋다.
초보자는 개별 배당주와 배당 ETF 중 무엇이 나을까? &nbsp; 개별 기업을 분석하기 어렵다면 배당 ETF로 시작하는 것도 방법이다. 여러 종목에 나누어 투자할 수 있어 특정 기업의 배당 축소나 주가 하락 위험을 줄이는 데 도움이 된다.`}).add({id:62,href:"/posts/bank-run/",title:"뱅크런 뜻과 원인, 실제 사례로 쉽게 이해하는 은행 대...",description:"뱅크런의 뜻과 발생 원인, 실리콘밸리은행 등 실제 사례, 디지털 뱅크런의 특징과 개인이 확인해야 할 예금자보호 기준을 쉽게 정리했다.",content:`은행은 평소에는 가장 안전한 금융기관처럼 느껴진다. 월급이 들어오고, 카드값이 빠져나가고, 정기예금과 적금을 맡겨두는 곳이기 때문이다. 그런데 금융 뉴스에서 가끔 &ldquo;뱅크런 우려&rdquo;, &ldquo;대규모 예금 인출&rdquo;, &ldquo;은행 유동성 위기&rdquo; 같은 표현이 나오면 갑자기 불안해진다.
뱅크런은 은행에 맡긴 돈을 사람들이 한꺼번에 찾으려는 현상이다. 단순히 예금이 조금 줄어드는 수준이 아니라, 예금자들의 불안이 빠르게 번지면서 은행의 지급 능력 자체를 흔드는 상황을 말한다.
이 글에서는 뱅크런의 뜻, 왜 은행에 이런 일이 생기는지, 실제 사례와 디지털 시대의 특징, 그리고 개인이 어떤 기준으로 예금을 관리하면 좋은지 정리하였다.
뱅크런이란 무엇인가 &nbsp; 뱅크런(Bank Run)은 예금자들이 은행에 문제가 생겼다고 판단해 동시에 예금을 인출하는 현상이다. 말 그대로 사람들이 은행으로 달려가 돈을 찾는 상황에서 나온 표현이다.
핵심은 &ldquo;동시에&quot;라는 점이다. 은행은 고객이 맡긴 돈을 모두 현금으로 보관하지 않는다. 예금을 받아 대출을 해주고, 채권이나 다른 안전자산에 투자하며, 일부만 현금성 자산으로 들고 있다. 평소에는 이 구조가 문제 되지 않는다. 모든 예금자가 같은 날 돈을 찾으러 오는 일은 거의 없기 때문이다.
예를 들어 100명이 각각 100만 원씩 은행에 맡겨 총 1억 원의 예금이 있다고 해보자. 은행은 이 돈 중 상당 부분을 대출로 내주고 일부만 현금으로 보관한다. 평소에는 하루에 몇 명만 인출하니 충분히 대응할 수 있다.
그런데 &ldquo;이 은행이 위험하다&quot;는 소문이 퍼져 100명이 한꺼번에 돈을 찾으려 하면 이야기가 달라진다. 은행 입장에서는 자산은 있어도 당장 현금으로 돌려줄 돈이 부족할 수 있다. 이때 생기는 문제가 뱅크런이다.
뱅크런이 무서운 이유는 처음에는 단순한 불안이나 소문으로 시작해도 실제 위기로 커질 수 있다는 데 있다. 사람들이 돈을 찾기 시작하면 은행의 현금이 줄고, 그 모습을 본 다른 예금자도 더 불안해져 인출에 동참한다. 결국 루머가 현실의 위기를 만드는 악순환이 생긴다.
뱅크런은 왜 발생할까 &nbsp; 뱅크런은 보통 은행 자체의 문제와 금융시장 전체의 불안이 겹칠 때 발생한다. 한 가지 이유만으로 터지기보다 여러 불안 요인이 동시에 쌓이는 경우가 많다.
은행의 건전성에 대한 불신 &nbsp; 가장 직접적인 원인은 은행이 부실해졌다는 의심이다. 대출 부실이 늘어나거나, 투자한 자산에서 큰 손실이 발생하거나, 자본비율이 악화되었다는 뉴스가 나오면 예금자들은 &ldquo;내 돈을 돌려받을 수 있을까&quot;를 걱정한다.
특히 은행은 신뢰가 중요한 업종이다. 실제 손실 규모가 감당 가능한 수준이라도, 사람들이 은행을 믿지 못하는 순간 유동성 압박이 커질 수 있다. 은행의 장부상 자산과 당장 지급 가능한 현금은 다른 문제이기 때문이다.
금리와 자산 가격의 급격한 변화 &nbsp; 금리가 빠르게 오르면 은행이 보유한 채권 가격이 떨어질 수 있다. 채권은 금리가 오르면 가격이 내려가는 성격이 있다. 은행이 만기까지 보유하면 손실이 확정되지 않을 수도 있지만, 예금 인출에 대응하기 위해 채권을 급히 팔아야 하면 손실이 현실화될 수 있다.
2023년 미국 실리콘밸리은행(SVB) 사태도 이런 구조와 연결되어 있다. 금리 상승으로 보유 채권의 평가손실이 커졌고, 이를 본 주요 고객들이 빠르게 예금을 빼면서 위기가 단기간에 커졌다.
소문과 공포의 확산 &nbsp; 뱅크런은 심리의 문제이기도 하다. 은행이 정말 위험한지 정확히 따져보기 전에 &ldquo;남들이 먼저 돈을 빼면 나만 손해 볼 수 있다&quot;는 생각이 퍼진다. 그래서 개인 입장에서는 합리적인 행동처럼 보이는 예금 인출이 전체적으로는 은행 위기를 악화시킨다.
금융시장에서 신뢰는 천천히 쌓이지만 무너질 때는 빠르다. 특히 예금자는 투자자와 다르게 원금 손실을 기대하지 않는다. 은행 예금은 안전하다고 생각해왔기 때문에 작은 불안에도 민감하게 반응할 수 있다.
실제 뱅크런 사례로 보는 흐름 &nbsp; 뱅크런은 오래된 금융 현상이다. 은행이 예금을 받아 대출과 투자로 운용하는 구조를 가진 이상, 신뢰가 무너지면 언제든 반복될 수 있다.
1929년 대공황과 은행 위기 &nbsp; 1929년 미국 주식시장 폭락 이후 경제 불안이 커지면서 많은 은행이 위기를 겪었다. 예금자들은 은행이 문을 닫기 전에 돈을 찾으려 했고, 은행 앞에는 긴 줄이 생겼다. 이 과정에서 수많은 은행이 파산했고, 예금자 손실도 커졌다.
이 경험은 이후 예금보험제도가 중요한 금융 안전장치로 자리 잡는 계기가 되었다. 예금자가 일정 한도까지 보호받는다는 믿음이 있어야 불필요한 인출 경쟁을 줄일 수 있기 때문이다.
2008년 글로벌 금융위기와 노던록 &nbsp; 2008년 글로벌 금융위기 전후로 영국의 노던록(Northern Rock) 은행도 뱅크런을 겪었다. 자금 조달에 어려움이 생겼다는 소식이 알려지자 예금자들이 돈을 찾기 위해 몰려들었고, 결국 정부 개입으로 이어졌다.
노던록 사례는 은행이 예금뿐 아니라 금융시장에서 빌린 돈에 지나치게 의존할 때 어떤 위험이 생기는지 보여준다. 시장 자금 조달이 막히면 은행은 짧은 시간 안에 큰 압박을 받을 수 있다.
2023년 실리콘밸리은행 사태 &nbsp; 실리콘밸리은행은 스타트업과 벤처캐피털 고객 비중이 높았다. 고객층이 서로 촘촘히 연결되어 있었고, 온라인 커뮤니케이션 속도도 빨랐다. 은행의 손실 우려가 알려지자 고객들이 모바일 뱅킹으로 빠르게 자금을 옮겼고, 뱅크런은 과거보다 훨씬 짧은 시간에 진행되었다.
이 사례가 중요한 이유는 뱅크런의 속도가 달라졌다는 점이다. 예전에는 사람들이 은행 창구 앞에 줄을 서야 했지만, 이제는 앱에서 몇 번 누르는 것만으로 거액을 이체할 수 있다.
디지털 뱅크런은 무엇이 다를까 &nbsp; 디지털 뱅크런은 모바일 뱅킹, 인터넷뱅킹, SNS가 결합되면서 예금 인출이 매우 빠르게 진행되는 현상을 말한다. 본질은 기존 뱅크런과 같지만 속도와 확산 방식이 다르다.
과거에는 은행 영업시간, 창구 대기, 실제 현금 인출 같은 물리적 제한이 있었다. 하지만 지금은 영업점에 가지 않아도 돈을 옮길 수 있다. 큰 금액도 모바일 앱에서 이체할 수 있고, 기업 고객은 여러 계좌의 자금을 빠르게 이동시킬 수 있다.
정보 확산 방식도 달라졌다. 과거에는 신문, 방송, 공시처럼 비교적 느린 경로를 통해 정보가 전달되었다. 지금은 메신저, SNS, 온라인 커뮤니티를 통해 불안이 순식간에 퍼진다. 사실 확인이 덜 된 이야기도 빠르게 공유되고, 사람들은 &ldquo;일단 빼고 보자&quot;는 쪽으로 움직일 수 있다.
특히 고객층이 비슷한 은행은 더 취약할 수 있다. 특정 산업, 특정 지역, 특정 투자자 집단에 예금이 몰려 있으면 같은 정보를 보고 동시에 행동할 가능성이 커진다. 실리콘밸리은행처럼 스타트업과 벤처캐피털 고객이 많은 은행에서 이런 특징이 두드러졌다.
뱅크런을 막는 안전장치 &nbsp; 뱅크런을 완전히 없앨 수는 없지만, 금융당국과 제도는 위험을 줄이기 위한 장치를 두고 있다. 개인이 금융 뉴스를 볼 때도 이 장치를 이해하면 불안을 조금 더 차분하게 판단할 수 있다.
예금자보호제도 &nbsp; 예금자보호제도는 금융회사가 파산하거나 영업정지 등으로 예금을 돌려주지 못할 때 일정 한도까지 예금자를 보호하는 제도다. 우리나라는 2025년 9월 1일부터 예금보호한도가 기존 5,000만 원에서 1억 원으로 상향되었다. 기준은 원금과 이자를 합산해 금융회사별, 1인당 최고 1억 원이다.
중요한 것은 모든 금융상품이 보호되는 것은 아니라는 점이다. 일반 예금과 적금은 보호 대상인 경우가 많지만, 펀드, 주식, 채권, 파생상품, 가상자산, P2P 투자상품 등은 성격이 다르다. 이름이 비슷해 보여도 예금자보호 대상인지 반드시 확인해야 한다.
예금보험공사에서 예금자보호제도 확인 &nbsp; 중앙은행의 유동성 공급 &nbsp; 은행이 일시적으로 현금 부족에 빠졌을 때 중앙은행이 자금을 공급하는 역할을 할 수 있다. 이를 최종대부자 기능이라고 부른다. 은행의 자산이 모두 부실한 것이 아니라 단기 유동성에 문제가 생긴 경우라면, 중앙은행의 지원이 시장 불안을 줄이는 데 도움이 될 수 있다.
다만 이 장치는 모든 은행을 무조건 살려준다는 뜻이 아니다. 실제로 은행의 자본이 크게 훼손되었는지, 담보가 충분한지, 금융시스템 전체에 미치는 영향이 어떤지 등을 따져 판단한다.
자본비율과 유동성 규제 &nbsp; 은행은 일정 수준 이상의 자본과 유동성을 갖추도록 규제를 받는다. BIS 비율 같은 자본 적정성 지표는 은행이 손실을 흡수할 체력이 있는지 보여주고, 유동성 규제는 단기 인출 요구에 대응할 능력이 있는지 확인하는 장치다.
예금자 입장에서는 모든 세부 지표를 외울 필요는 없다. 다만 은행이 단순히 많은 예금을 받는 곳이 아니라, 자본과 유동성 규제를 받으며 운영된다는 점은 알아두면 좋다.
개인은 어떻게 대비하면 좋을까 &nbsp; 뱅크런은 개인이 통제할 수 있는 사건은 아니다. 하지만 예금을 맡기는 방식과 정보를 확인하는 습관은 스스로 관리할 수 있다.
가장 먼저 할 일은 예금자보호 한도를 기준으로 자금을 나누는 것이다. 한 금융회사에 원금과 이자를 합쳐 1억 원을 넘는 돈을 맡기고 있다면 초과분은 보호받지 못할 수 있다. 큰 금액을 예치할 때는 금융회사별로 나누거나 만기와 목적에 따라 분산하는 편이 좋다.
두 번째는 상품의 성격을 확인하는 것이다. 은행 앱 안에 있다고 해서 모두 예금은 아니다. 펀드, ELS, 채권, 보험, 외화 관련 상품은 원금 손실 가능성과 보호 여부가 다를 수 있다. &ldquo;금리가 높다&quot;는 문구보다 &ldquo;보호금융상품인지&quot;를 먼저 확인해야 한다.
세 번째는 루머보다 공식 정보를 우선하는 것이다. 금융회사에 대한 불안한 이야기를 들었다면 금융당국 발표, 금융회사 공시, 신뢰할 수 있는 언론 보도를 확인해야 한다. 급한 마음에 사실 확인 없이 움직이면 불필요한 손실이나 중도해지 불이익을 볼 수 있다.
마지막으로 생활비와 비상자금은 너무 복잡한 상품에 넣지 않는 것이 좋다. 3~6개월치 생활비는 바로 찾을 수 있는 예금성 상품이나 입출금 계좌에 두는 편이 현실적이다. 수익률보다 접근성과 안정성이 중요한 돈이기 때문이다.
정리 &nbsp; 뱅크런은 예금자들이 은행의 안정성을 의심해 한꺼번에 돈을 찾는 현상이다. 은행은 예금을 모두 현금으로 보관하지 않고 대출과 투자로 운용하기 때문에, 대규모 인출이 동시에 발생하면 유동성 위기에 빠질 수 있다.
과거의 뱅크런은 은행 창구 앞 줄로 나타났지만, 지금은 모바일 뱅킹과 SNS를 통해 훨씬 빠르게 진행될 수 있다. 그래서 디지털 시대에는 은행의 건전성뿐 아니라 고객층의 집중도, 정보 확산 속도, 유동성 관리가 더 중요해졌다.
개인에게 가장 중요한 기준은 단순하다. 예금자보호 대상인지 확인하고, 원금과 이자를 합쳐 금융회사별 1억 원 한도를 넘지 않게 관리하며, 루머보다 공식 정보를 먼저 확인하는 것이다. 뱅크런을 예측하기는 어렵지만, 내 돈이 어떤 보호를 받는지 알고 관리하면 불필요한 불안을 줄일 수 있다.
자주 묻는 질문 &nbsp; 뱅크런이 생기면 은행은 바로 망하나? &nbsp; 반드시 바로 망하는 것은 아니다. 은행의 자산 건전성이 괜찮고 일시적인 유동성 부족이라면 중앙은행 지원, 금융당국 조치, 다른 금융회사와의 합병 등으로 위기를 넘길 수 있다. 다만 신뢰가 무너지면 상황이 빠르게 악화될 수 있다.
예금자보호 한도 안에 있으면 뱅크런을 걱정하지 않아도 될까? &nbsp; 보호 대상 상품이고 금융회사별 1인당 원금과 이자 합산 1억 원 안에 있다면 제도상 보호를 받을 수 있다. 다만 실제 지급 절차에는 시간이 걸릴 수 있고, 보호 대상이 아닌 투자상품은 한도와 관계없이 원금 손실 가능성이 있다.
저축은행이나 인터넷은행도 뱅크런이 생길 수 있나? &nbsp; 가능하다. 뱅크런은 특정 금융권에만 생기는 현상이 아니라 신뢰가 흔들릴 때 발생한다. 인터넷은행은 앱으로 거래가 빠르기 때문에 인출 속도가 빠를 수 있고, 저축은행은 예금금리가 높아 큰 금액이 몰릴 수 있어 보호 한도와 상품 성격을 더 꼼꼼히 확인하는 것이 좋다.`}).add({id:63,href:"/posts/holding-tax-property-comprehensive-real-estate-tax/",title:"보유세란? 재산세, 종부세 기준과 공시가격 쉽게 정리",description:"보유세의 뜻부터 재산세와 종합부동산세 차이, 6월 1일 과세 기준일, 공시가격 조회와 이의신청, 계산 흐름까지 초보자 눈높이로 정리했다.",content:`집을 갖고 있으면 매년 세금 고지서가 온다. 집을 팔아서 차익이 생긴 것도 아닌데 왜 세금을 내야 하는지 처음에는 헷갈릴 수 있다. 이때 나오는 말이 바로 보유세다.
보유세는 부동산을 갖고 있다는 이유로 매년 내는 세금 이다. 주택을 기준으로 보면 크게 재산세와 종합부동산세로 나뉜다. 재산세는 대부분의 주택 보유자가 내고, 종합부동산세는 공시가격이 일정 기준을 넘는 사람이 추가로 낸다.
문제는 보유세가 집값 자체가 아니라 공시가격, 공정시장가액비율, 세율, 주택 수, 6월 1일 소유 여부 같은 여러 기준으로 계산된다는 점이다. 이 글에서는 보유세가 무엇인지, 재산세와 종부세가 어떻게 다른지, 공시가격은 어디서 확인하는지 쉽게 정리하였다.
보유세란 무엇인가 &nbsp; 보유세는 부동산을 보유한 사람에게 매년 부과되는 세금이다. 주택을 갖고 있다면 보통 두 가지를 함께 생각하면 된다.
재산세: 주택을 가진 사람에게 부과되는 지방세 종합부동산세: 일정 기준을 넘는 고가 주택 보유자에게 부과되는 국세 재산세는 지방자치단체에 내는 세금이고, 종부세는 국가에 내는 세금이다. 둘 다 부동산을 보유한다는 점에서 연결되어 있지만, 적용 대상과 계산 방식은 다르다.
가장 중요한 기준일은 매년 6월 1일 이다. 재산세와 종부세는 그해 6월 1일 현재 소유자를 기준으로 부과된다. 예를 들어 5월 31일까지 잔금을 치르고 소유권이 넘어갔다면 매수자가 그해 보유세 대상이 될 수 있고, 6월 2일에 취득했다면 그해 보유세는 피할 수 있다.
그래서 부동산 매수나 매도 일정에서는 6월 1일 전후 잔금일이 중요하다. 하루 차이로 그해 보유세 부담 주체가 달라질 수 있기 때문이다.
공시가격이 중요한 이유 &nbsp; 보유세를 이해하려면 공시가격부터 알아야 한다. 공시가격은 정부가 매년 1월 1일 기준으로 조사해 공시하는 부동산 가격이다. 실제 거래되는 시세와 같지는 않다.
공동주택은 국토교통부가, 단독주택은 시·군·구청장이 산정한다. 이 공시가격은 재산세, 종부세뿐 아니라 건강보험료, 복지 기준, 일부 청약 자격 판단에도 영향을 줄 수 있다.
보유세는 보통 이런 흐름으로 계산된다.
공시가격 → 과세표준 → 세율 적용 → 최종 세액
여기서 과세표준은 세금을 매기는 기준 금액이다. 공시가격을 그대로 과세표준으로 쓰는 것이 아니라, 공정시장가액비율이라는 비율을 곱해 계산한다.
예를 들어 주택 공시가격이 5억 원이고 공정시장가액비율이 60%라면 과세표준은 3억 원이다.
5억 원 × 60% = 3억 원
2026년 공동주택 공시가격은 전국 평균 상승률이 높았고, 특히 서울은 상승폭이 큰 지역으로 언급되었다. 공시가격이 오르면 같은 집을 계속 갖고 있어도 보유세가 늘어날 수 있다. 집을 새로 산 것도 아니고 월급이 오른 것도 아닌데 세금 부담이 커지는 이유가 여기에 있다.
재산세는 어떻게 계산할까 &nbsp; 재산세는 주택을 보유한 사람이라면 기본적으로 확인해야 하는 세금이다. 주택분 재산세는 보통 7월과 9월에 나눠 낸다.
계산 흐름은 단순하게 보면 3단계다.
공시가격에 공정시장가액비율을 곱해 과세표준을 구한다. 과세표준 구간별 재산세율을 적용한다. 도시지역분과 지방교육세를 더한다. 주택분 재산세 기본 세율은 과세표준 구간에 따라 0.1%부터 0.4%까지 적용된다.
과세표준 재산세율 6,000만 원 이하 0.1% 6,000만 원 초과 ~ 1억 5,000만 원 이하 6만 원 + 6,000만 원 초과분의 0.15% 1억 5,000만 원 초과 ~ 3억 원 이하 19만 5천 원 + 1억 5,000만 원 초과분의 0.25% 3억 원 초과 57만 원 + 3억 원 초과분의 0.4% 여기에 도시지역분과 지방교육세가 붙는다.
도시지역분: 과세표준 × 0.14% 지방교육세: 재산세액 × 20% 1세대 1주택자가 보유한 공시가격 9억 원 이하 주택은 일반 재산세율보다 낮은 특례 세율이 적용될 수 있다. 다만 특례 적용 여부와 공정시장가액비율은 연도별 정책에 따라 달라질 수 있으니 실제 고지서나 지방자치단체 안내를 확인하는 게 안전하다.
종부세는 누가 내고 어떻게 계산할까 &nbsp; 종합부동산세는 모든 주택 보유자가 내는 세금은 아니다. 공시가격 합계가 일정 기준을 넘는 경우에 부과된다.
2026년 5월 기준으로 주택분 종부세 기본 공제는 다음처럼 이해하면 된다.
구분 공제 기준 1세대 1주택자 12억 원 그 외 다주택자 등 9억 원 법인 0원 즉 1세대 1주택자가 보유한 주택의 공시가격이 12억 원 이하라면 주택분 종부세는 보통 나오지 않는다. 다주택자는 보유 주택의 공시가격을 합산해 9억 원을 넘는지 확인해야 한다.
종부세 과세표준은 이렇게 계산한다.
종부세 과세표준 = (공시가격 합계 - 공제금액) × 공정시장가액비율
국세청 안내 기준으로 주택분 종부세 공정시장가액비율은 60%다.
예를 들어 공시가격 15억 원인 아파트를 1세대 1주택으로 보유하고 있다면 단순 계산은 이렇게 된다.
공시가격: 15억 원 1세대 1주택 공제: 12억 원 공제 후 금액: 3억 원 공정시장가액비율 60% 적용: 1억 8,000만 원 (15억 원 - 12억 원) × 60% = 1억 8,000만 원
이 과세표준에 종부세율을 적용하고, 이미 재산세로 낸 부분을 조정한 뒤 세액공제를 반영해 최종 종부세가 나온다.
종부세율은 주택 수와 과세표준 구간에 따라 다르다. 국세청 안내 기준으로 2주택 이하는 0.5%부터 2.7%, 3주택 이상은 0.5%부터 5.0%까지 적용된다.
또 1세대 1주택자는 고령자 공제와 장기보유 공제를 받을 수 있다. 만 60세 이상이면 연령별 공제가 있고, 5년 이상 보유하면 보유기간별 공제가 있다. 두 공제를 합산해 최대 80%까지 세액공제가 가능하다.
공시가격 조회와 이의신청은 어떻게 할까 &nbsp; 내 집 공시가격은 부동산 공시가격 알리미에서 확인할 수 있다. 공동주택은 주소나 단지명을 입력해 조회할 수 있고, 관할 시·군·구청 민원실에서도 확인할 수 있다.
2026년 공동주택 공시가격은 4월 30일 최종 공시 후 이의신청 절차가 진행된다. 공시가격이 실제 시세나 주변 유사 단지와 비교해 지나치게 높다고 생각된다면 이의신청을 검토할 수 있다.
다만 이의신청을 한다고 무조건 낮아지는 것은 아니다. 단순히 &ldquo;세금이 부담된다&quot;는 이유만으로 조정되기는 어렵다. 인근 유사 주택의 실거래가, 면적 오류, 동·호수 특성 반영 오류처럼 객관적인 근거가 필요하다.
보유세를 확인할 때는 아래 순서로 보면 된다.
부동산 공시가격 알리미에서 내 주택 공시가격을 확인한다. 작년 공시가격과 비교해 얼마나 올랐는지 본다. 재산세 과세표준을 대략 계산한다. 1세대 1주택인지, 다주택자인지 확인한다. 종부세 기준인 12억 원 또는 9억 원을 넘는지 본다. 이의신청이 필요하다면 객관적인 자료를 준비한다. 공시가격은 단순히 세금 계산용 숫자가 아니다. 부동산을 보유하는 비용을 가늠하는 출발점이다.
보유세를 볼 때 자주 하는 오해 &nbsp; 첫째, &ldquo;시세가 12억 원이면 종부세를 낸다&quot;는 오해가 있다. 종부세 기준은 시세가 아니라 공시가격이다. 시세가 12억 원이어도 공시가격이 12억 원 이하라면 1세대 1주택자는 종부세 대상이 아닐 수 있다.
둘째, &ldquo;재산세와 종부세는 같은 세금&quot;이라고 생각하기 쉽다. 둘 다 보유세에 속하지만 재산세는 지방세, 종부세는 국세다. 납부 시기와 계산 방식도 다르다.
셋째, &ldquo;6월 전에 팔기만 하면 된다&quot;는 식으로 단순하게 보면 위험하다. 세금 기준은 계약일이 아니라 보통 소유권 이전과 잔금일 흐름으로 판단한다. 매수·매도 계획이 있다면 6월 1일 기준 소유자가 누구인지 확인해야 한다.
넷째, &ldquo;공시가격이 오르면 세금도 똑같은 비율로 오른다&quot;는 것도 정확하지 않다. 공정시장가액비율, 세율 구간, 세부담 상한, 특례 세율, 세액공제에 따라 실제 증가폭은 달라질 수 있다.
정리 &nbsp; 보유세는 부동산을 보유한 사람이 매년 부담하는 세금이고, 주택 기준으로는 재산세와 종합부동산세를 함께 봐야 한다.
핵심만 다시 정리하면 이렇다.
보유세는 재산세와 종부세로 나눠 볼 수 있다. 재산세와 종부세는 매년 6월 1일 기준 소유자에게 부과된다. 재산세는 주택 보유자 대부분이 확인해야 하는 지방세다. 종부세는 공시가격이 1세대 1주택 12억 원, 다주택자 합산 9억 원을 넘는지부터 본다. 보유세 계산의 출발점은 실거래가가 아니라 공시가격이다. 공시가격은 부동산 공시가격 알리미에서 확인할 수 있다. 집을 갖고 있다면 올해 공시가격부터 확인해보는 게 좋다. 세금은 고지서가 온 뒤에야 체감되지만, 기준은 이미 6월 1일에 정해진다.
자주 묻는 질문 &nbsp; 보유세는 언제 기준으로 부과될까? &nbsp; 재산세와 종부세는 매년 6월 1일 현재 소유자를 기준으로 부과된다. 집을 사고팔 계획이 있다면 6월 1일 전후 잔금일과 소유권 이전 일정을 꼭 확인해야 한다.
1세대 1주택자도 종부세를 낼 수 있을까? &nbsp; 낼 수 있다. 1세대 1주택자는 공시가격 12억 원까지 공제되지만, 공시가격이 12억 원을 넘으면 종부세 계산 대상이 된다. 다만 고령자·장기보유 공제 등으로 실제 납부액은 줄어들 수 있다.
공시가격 이의신청을 하면 세금이 줄어들까? &nbsp; 공시가격이 조정되면 보유세 부담이 줄어들 수 있다. 하지만 이의신청이 항상 받아들여지는 것은 아니다. 주변 유사 주택 실거래가, 면적 오류, 주택 특성 반영 오류 같은 객관적인 근거가 필요하다.`}).add({id:64,href:"/posts/stock-flat-sideways-mixed-market/",title:"보합 횡보 혼조세 뜻, 주식 뉴스에서 자주 나오는 장세...",description:"주식 뉴스에 자주 나오는 보합, 강보합, 약보합, 횡보, 혼조세 뜻을 초보자도 이해하기 쉽게 예시와 투자 관점으로 정리했다.",content:`주식 뉴스를 보다 보면 &ldquo;코스피 보합권 마감&rdquo;, &ldquo;지수는 횡보했지만 업종별 혼조세&rdquo;, &ldquo;강보합 출발 후 약보합 전환&rdquo; 같은 표현이 자주 나온다. 단어는 익숙해 보여도 막상 뜻을 물어보면 애매하다. 오른다는 말인지, 내린다는 말인지, 그냥 가만히 있다는 말인지 헷갈린다.
이런 표현들은 대부분 시장의 방향과 분위기를 짧게 설명하기 위해 쓰인다. 상승, 하락처럼 명확한 말보다 미묘한 차이를 담고 있어서 처음 주식 투자를 시작한 사람에게는 더 어렵게 느껴진다.
이 글에서는 주식 시황에서 자주 나오는 보합, 강보합, 약보합, 횡보, 혼조세를 한 번에 정리하였다. 단어 뜻만 외우는 것보다 &ldquo;뉴스를 어떻게 읽어야 하는지&quot;에 초점을 맞추면 훨씬 오래 기억된다.
보합은 전날과 거의 비슷한 상태다 &nbsp; 보합은 가격이나 지수가 전날과 비교해 거의 변하지 않은 상태를 말한다. 조금 오르거나 조금 내렸지만, 시장에서 의미 있는 상승이나 하락으로 보기 어려울 때 사용한다.
예를 들어 코스피가 전날 2,800.00이었는데 오늘 2,800.50에 마감했다면 숫자상으로는 올랐다. 하지만 변동 폭이 너무 작다면 &ldquo;상승 마감&quot;이라고 강하게 표현하기보다 &ldquo;보합권 마감&quot;이라고 말할 수 있다.
보합은 주식뿐 아니라 환율, 금리, 부동산 가격 기사에서도 자주 쓰인다. 환율이 1원 안팎으로만 움직이거나, 주가가 아주 좁은 범위에서 끝났을 때도 보합이라는 표현이 나온다.
강보합과 약보합의 차이 &nbsp; 보합은 다시 강보합과 약보합으로 나뉜다.
강보합은 거의 변동이 없지만 살짝 오른 상태이거나, 상승 쪽 힘이 조금 더 강해 보이는 상태다. 숫자로는 큰 상승이 아니지만 매수세가 버티고 있거나, 하락할 만한 악재를 견디는 분위기일 때 쓰인다.
약보합은 반대로 거의 변동이 없지만 살짝 내린 상태이거나, 하락 쪽 압력이 조금 더 강해 보이는 상태다. 주가가 크게 빠진 것은 아니지만 매도세가 우세하거나, 투자자들이 조심스러워하는 분위기일 때 많이 나온다.
간단히 보면 아래와 같다.
표현 의미 느낌 보합 전날과 거의 비슷함 방향 판단 유보 강보합 거의 비슷하지만 소폭 상승 또는 매수세 우위 살짝 긍정적 약보합 거의 비슷하지만 소폭 하락 또는 매도세 우위 살짝 부정적 중요한 점은 보합이 &ldquo;아무 일도 없었다&quot;는 뜻은 아니라는 것이다. 지수는 거의 그대로여도 내부에서는 특정 업종이 크게 오르고, 다른 업종이 크게 내렸을 수 있다. 그래서 보합이라는 단어만 보고 시장을 너무 단순하게 판단하면 안 된다.
횡보는 일정 기간 방향 없이 움직이는 장세다 &nbsp; 횡보는 가격이나 지수가 뚜렷한 상승 추세도, 하락 추세도 없이 일정 범위 안에서 오르내리는 상태를 말한다. 보합이 하루 시황을 설명할 때 많이 쓰인다면, 횡보는 며칠에서 몇 주, 길게는 몇 달 흐름을 볼 때 자주 쓴다.
예를 들어 어떤 주식이 한 달 동안 48,000원에서 52,000원 사이만 왔다 갔다 한다고 해보자. 크게 보면 오르지도, 내리지도 않았다. 이런 상태를 &ldquo;박스권 횡보&quot;라고 부른다.
횡보장은 시장이 방향을 정하지 못한 시간에 가깝다. 투자자들이 더 사기에는 부담스럽고, 그렇다고 팔기에도 애매한 상황에서 자주 나타난다. 금리 결정, 기업 실적 발표, 선거, 경기 지표 발표처럼 큰 이벤트를 앞두고도 횡보가 길어질 수 있다.
횡보장에서 초보자가 많이 하는 실수 &nbsp; 횡보장은 겉으로 보면 위험해 보이지 않는다. 급락장이 아니기 때문이다. 하지만 초보 투자자에게는 의외로 까다로운 구간이다.
주가가 조금 오르면 &ldquo;이제 올라가나 보다&rdquo; 하고 따라 사고, 다시 내려오면 불안해서 판다. 그런데 며칠 뒤 다시 오르니 또 사고, 다시 빠지면 또 판다. 이렇게 반복하면 지수는 그대로인데 내 계좌만 조금씩 줄어들 수 있다.
횡보장에서는 먼저 가격 범위를 확인해야 한다. 최근 몇 주 동안 고점과 저점이 어디였는지 보고, 그 범위 안에서 움직이는지 살펴본다. 박스권 상단에 가까울수록 추격 매수는 조심하고, 하단에 가까울수록 기업 가치와 손절 기준을 같이 확인하는 식으로 접근하는 편이 낫다.
중장기 투자자라면 횡보장을 무조건 나쁘게 볼 필요는 없다. 좋은 기업이 실적을 유지하면서 시장 분위기 때문에 쉬어가는 중이라면 분할 매수 기회가 될 수 있다. 다만 &ldquo;횡보가 끝나면 반드시 오른다&quot;는 식으로 단정하면 위험하다. 횡보 이후에는 상승 돌파도 있고, 하락 이탈도 있다.
혼조세는 시장 안에서 오르는 것과 내리는 것이 갈리는 상태다 &nbsp; 혼조세는 시장 내부의 움직임이 서로 엇갈리는 상태를 말한다. 어떤 업종은 오르고, 어떤 업종은 내리며, 종목별 성과가 뚜렷하게 갈릴 때 사용한다.
예를 들어 코스피 지수는 0.1% 상승 마감했는데 반도체 업종은 크게 오르고, 이차전지 업종은 크게 내렸다고 해보자. 전체 지수만 보면 거의 보합이지만 실제 시장 안에서는 분위기가 많이 다르다. 이런 상황을 혼조세라고 표현한다.
혼조세에서 중요한 것은 &ldquo;시장이 방향이 없다&quot;가 아니다. 오히려 시장이 오를 종목과 내릴 종목을 가려내고 있다는 뜻에 가깝다. 그래서 혼조세에서는 지수보다 업종, 테마, 시가총액 규모, 수급을 함께 봐야 한다.
뉴스에서 &ldquo;뉴욕증시 혼조 마감&quot;이라고 나오면 세 지수가 모두 같은 방향으로 움직이지 않았다는 뜻일 수 있다. 예를 들어 다우지수는 오르고, 나스닥은 내리고, S&amp;P500은 보합권에 머무는 식이다. 국내 증시에서도 코스피는 오르는데 코스닥은 내리거나, 대형주는 강한데 중소형주는 약한 날이 있다.
혼조세에서는 내 종목의 위치가 더 중요하다 &nbsp; 혼조세에서는 &ldquo;오늘 지수가 올랐는가&quot;보다 &ldquo;내가 가진 종목이 어느 쪽에 속하는가&quot;가 더 중요하다.
지수가 올라도 내 종목이 속한 업종이 계속 약하다면 계좌는 손실일 수 있다. 반대로 지수가 약보합이어도 내가 보유한 업종에 수급이 몰리면 수익이 날 수 있다. 그래서 혼조세 기사에서는 지수 등락률만 보지 말고 어떤 업종이 강했고, 어떤 업종이 약했는지까지 확인해야 한다.
초보자라면 혼조세에서 무리하게 종목을 늘리기보다 보유 종목을 점검하는 편이 좋다. 실적이 좋아서 버티는 종목인지, 단기 테마로만 움직이는 종목인지, 시장이 약해질 때도 방어력이 있는지 확인해야 한다.
보합, 횡보, 혼조세를 함께 읽는 법 &nbsp; 세 단어는 서로 비슷해 보이지만 보는 기준이 다르다.
용어 주로 보는 기준 핵심 의미 보합 하루 또는 짧은 시황 전날과 거의 비슷함 횡보 일정 기간의 흐름 방향 없이 범위 안에서 움직임 혼조세 시장 내부의 차이 업종과 종목별 방향이 엇갈림 예를 들어 &ldquo;코스피는 보합권에서 마감했지만 업종별로는 혼조세가 나타났고, 최근 한 달간 지수는 횡보 중이다&quot;라는 문장을 보자.
이 문장은 세 가지 정보를 담고 있다.
첫째, 오늘 코스피는 전날과 큰 차이가 없었다. 이것이 보합이다.
둘째, 오늘 시장 안에서는 오르는 업종과 내리는 업종이 갈렸다. 이것이 혼조세다.
셋째, 최근 한 달 전체로 봐도 지수는 뚜렷한 상승이나 하락 없이 일정 범위에서 움직였다. 이것이 횡보다.
이렇게 기간과 대상을 나누어 읽으면 뉴스 문장이 훨씬 명확해진다. 보합은 오늘의 움직임, 횡보는 기간 흐름, 혼조세는 시장 내부의 차이라고 보면 된다.
투자 판단에 바로 적용하는 체크포인트 &nbsp; 보합, 횡보, 혼조세는 매수나 매도 신호 자체가 아니다. 시장 상황을 설명하는 단어다. 그래서 이 단어를 봤을 때 바로 행동하기보다 몇 가지를 함께 확인하는 것이 좋다.
보합 기사라면 거래량을 같이 봐야 한다. 거래량이 줄어든 보합은 관망세일 수 있고, 거래량이 늘어난 보합은 매수와 매도가 강하게 부딪힌 결과일 수 있다.
횡보 기사라면 박스권 상단과 하단을 확인해야 한다. 고점과 저점이 반복되는 구간을 모르고 매수하면, 매번 비싼 구간에서 사고 싼 구간에서 파는 실수를 할 수 있다.
혼조세 기사라면 업종별 흐름을 봐야 한다. 전체 지수가 약해도 특정 업종이 강할 수 있고, 전체 지수가 좋아도 내 종목이 속한 업종은 소외될 수 있다.
마지막으로 하루 뉴스 하나만 보고 결론을 내리지 않는 습관이 필요하다. 특히 보합과 약보합은 단기 표현이라 큰 추세를 판단하기에는 부족하다. 최소한 최근 10거래일 정도의 흐름을 보고, 가능하면 거래량과 주요 뉴스까지 같이 확인하는 것이 좋다.
정리 &nbsp; 보합은 전날과 거의 비슷한 상태다. 강보합은 보합권이지만 상승 쪽 힘이 조금 더 강한 상태이고, 약보합은 하락 쪽 힘이 조금 더 강한 상태다.
횡보는 며칠이나 몇 주 이상 뚜렷한 방향 없이 일정 범위 안에서 움직이는 장세다. 급락장이 아니라서 쉬워 보이지만, 추격 매수와 조급한 매도로 손실을 만들기 쉬운 구간이다.
혼조세는 시장 안에서 오르는 업종과 내리는 업종이 갈리는 상태다. 이때는 지수보다 내 종목이 속한 업종과 수급을 보는 것이 더 중요하다.
주식 뉴스의 장세 표현은 단어 하나만 외우면 금방 잊힌다. &ldquo;오늘 움직임인가, 기간 흐름인가, 시장 내부 차이인가&quot;를 나누어 보면 보합, 횡보, 혼조세를 훨씬 쉽게 구분할 수 있다.
자주 묻는 질문 &nbsp; 보합이면 주가가 아예 안 움직였다는 뜻인가? &nbsp; 아니다. 조금 오르거나 조금 내렸지만 의미 있는 변동으로 보기 어려울 때 보합이라고 한다. 정확히 0.00%여야만 보합인 것은 아니다.
강보합이면 매수해도 된다는 뜻인가? &nbsp; 강보합은 상승 쪽 분위기가 조금 더 있다는 뜻이지, 무조건 매수 신호는 아니다. 거래량, 업종 흐름, 기업 실적, 최근 주가 위치를 함께 봐야 한다.
횡보장은 언제 끝나는가? &nbsp; 정해진 기간은 없다. 박스권 상단을 거래량과 함께 돌파하면 상승 전환 가능성을 보고, 하단을 이탈하면 하락 전환 가능성을 본다. 단순히 오래 횡보했다고 반드시 위로 가는 것은 아니다.
혼조세에서는 투자하기 어려운가? &nbsp; 혼조세는 종목 선택이 더 중요해지는 장세다. 전체 지수만 보고 투자하기보다 업종별 강약, 수급, 실적을 함께 확인해야 한다.`}).add({id:65,href:"/posts/insurance-basic/",title:"보험의 구조와 역사",description:"보험의 구조, 보험의 역사, 보험에 대한 기본 지식에 대해 설명한다.",content:`보험에 가입하지 않고, 스스로 미래에 필요한 돈을 모아두면 되지 않을까? 라고 생각하는 사람들도 있을 것이다. 하지만 보험의 구조와 역사를 알고 나면 개인 저축과 보험은 전혀 다른 의미이며, 보험이 더 중요하다는 것을 알 수 있다. 보험에 대해 막연하게만 생각해본 적이 있다면 꼭 읽어보시기 바란다.
보험의 구조 &nbsp; 긴 인생을 살아가면서 필연적으로 찾아오는 신체적 문제들. 이를 대비하기 위한 보험이 바로 &lsquo;생명보험&rsquo;이다. 경우에 따라서는 매우 큰 금액이 보험금으로 지급되기도 하는데, 도대체 어떤 구조로 이루어져 있는 것일까?
많은 사람들이 서로 돈을 내고 무언가를 대비하는 상황을 상상해 보자. 그 중 한 사람이 아주 곤란한 상황에 빠졌다고 가정해 보자. 그러면 서로 낸 돈은 그 사람을 위해 쓰이게 된다. 또 어느 순간 다른 사람이 어려운 상황에 처하게 되면, 이번에는 그 사람을 위해 돈이 쓰이게 된다.
이처럼 생명보험은 많은 사람들이 서로를 위해 서로 돕는다는 &lsquo;상호부조&rsquo;의 개념에서 탄생한 제도이다.
이 구조에서 사람들은 &lsquo;나를 위해서도, 남을 위해서도 돈을 내고 대비한다&rsquo;는 것이다. 혼자서 돈을 모으는 것보다 훨씬 더 큰 보장을 받을 수 있는 것이다. 그래서 개인이 모은 돈보다 더 높은 보장금액이 지급되는 경우도 있다.
&lsquo;나한테 문제가 없으면 보험료가 아깝다&rsquo;고 생각할 수도 있지만, 보험료는 반드시 누군가에게 도움이 된다. 또한, 자신도 언제 어떤 문제가 생길지 모른다. 만일의 경우에 보장을 받을 수 있고, 안심하고 하루하루를 보낼 수 있도록 하는 것도 보험의 중요한 역할이다.
물론 너무 큰 보험료를 내기 위해 가계가 어려워진다면 의미가 없다. 현재 자신과 가정에 어떤 보장이 필요한지, 어느 정도의 보장이 필요한지 생각해보는 것은 돈을 절약하는 데에도 매우 중요한 일이다.
보험의 역사 &nbsp; 세계 보험의 역사 &nbsp; 보험의 역사는 고대 오리엔트 시대까지 거슬러 올라간다. 이 시대에는 다양한 교역이 이루어졌고, 사람들의 문화도 화려했다. 하지만 교역은 결코 안전한 것이 아니다. 자연재해나 도적이나 해적의 습격을 받을 위험도 있었다. 이러한 위험으로 인한 손실에 대비하기 위해 자금을 빌리는 일이 많았다고 합니다. 이 시대에는 인질도 포함돼 지금의 보험과는 거리가 멀었지만, 그래도 &lsquo;보험의 기원&rsquo;이라 할 수 있다.
이후 기원전 300년경에 등장한 것이 &lsquo;모험 대출&rsquo;이다. 지중해 무역에 종사하는 상인들에 의해 발전했다. 이는 선박이나 화물의 소유자가 이를 담보로 금융업자로부터 돈을 빌리고, 만약 선박이나 화물이 무사히 교역을 마칠 수 있다면 이자를 붙여서 상환하는 제도이다. 반면, 선박이나 화물이 무사하지 않으면 상환이 면제된다는 조건이 붙었다. 현재의 보험에 더 가까운 것으로, &lsquo;해상보험&rsquo;의 원형이라고 할 수 있다.
지중해에서는 이후에도 무역의 발전과 함께 제도로서 성장했고, 중세 유럽의 근대적 보험제도는 일본에도 전해지게 되었다.
보험에 대한 기본 지식 &nbsp; 보험에는 몇 가지 기억해야 할 용어가 있습니다. 특히 다음과 같은 기본적인 용어는 반드시 숙지해야 한다.
보험을 알 때 알아두면 좋은 용어들
보험료 보험에 가입한 사람이 보험회사에 지불하는 돈을 말한다. &lsquo;보험금&rsquo;과 혼동하기 쉬우므로 주의해야 한다. 보험금 보험회사가 보험금 수령인으로 지정된 사람에게 지급하는 돈을 말한다. 지급 시기와 금액은 계약 내용에 따라 달라진다. 해약환급금 보험금이 계약된 보장으로 지급되는 것이라면, 해약환급금은 해약하여 보험 자체가 없어졌을 때 지급되는 돈이다. 보통 그 금액은 납입한 보험료의 총액보다 적으며, 특히 계약 후 단기간에 해약하는 경우 전혀 없거나 있어도 극히 적은 금액이다. 보험기간 계약에 따라 보장이 적용되는 기간을 말한다. 보험료 납입이 완료되어도 보장이 계속되는 보험도 있다. 만기 보험기간이 종료되는 것을 말한다. 종신보험 등 저축성 생명보험의 경우 &lsquo;납입 만기&rsquo;를 가리키기도 한다. 보험의 종류 &nbsp; 사람의 생명이나 신체에 관한 문제로 인한 손실을 보장하는 보험을 &lsquo;생명보험&rsquo;이라고 한다. 생명보험도 보험기간의 차이, 해약환급금의 차이 등에 따라 다음과 같은 세 가지 종류가 있다.
정기보험 보험 기간이 정해져 있는 보험이다. 대부분 해약해도 해약환급금이 없거나 매우 적은 소멸성 보험으로 보험료가 저렴하고 가입하기 쉽다는 특징이 있다. 양로보험 정기보험과 마찬가지로 보험기간이 정해져 있으며, 보험기간 중 사망하면 사망보험금을, 만기까지 생존해 있으면 만기보험금을 받을 수 있다. 사망보험금과 만기보험금이 동일한 금액으로 &lsquo;생사혼합형 보험&rsquo;이라고도 한다. 종신보험 피보험자가 사망할 때까지 보장이 지속되는 보험이다. 사망 시점에 사망보험금이 지급된다. 보험료는 정기보험에 비해 비싸고, 보험기간 중 중도해지 시 해약환급금이 지급된다. 보험료는 정기보험에 비해 비싸다.`}).add({id:66,href:"/posts/value-added-tax-basics/",title:"부가가치세란 어떤 세금일까, 부가세 별도와 계산 방법 ...",description:"부가가치세의 뜻과 부가세 별도 의미, 최종소비자와 사업자의 관계, 매출세액과 매입세액을 이용한 계산 방법과 신고 기간을 쉽게 정리했다.",content:`물건을 사거나 서비스를 이용할 때 &ldquo;부가세 포함&rdquo;, &ldquo;부가세 별도&quot;라는 말을 자주 듣는다. 특히 견적서를 받을 때 100만 원이라고 생각했는데 마지막에 부가세 10만 원이 붙어 110만 원이 되는 경우가 있다. 그냥 내라고 하니까 내기는 하지만, 이 돈이 정확히 어떤 세금인지 헷갈릴 수 있다.
부가가치세는 이름부터 어렵다. 하지만 구조는 생각보다 단순하다. 물건이나 서비스가 만들어지고 팔리는 과정에서 생긴 부가가치에 붙는 세금이고, 실제 부담은 최종소비자가 한다. 사업자는 소비자에게 받은 부가세를 잠시 보관했다가 국가에 납부하는 역할을 한다.
이 글에서는 부가가치세가 어떤 세금인지, &ldquo;부가세 별도&quot;가 무슨 뜻인지, 사업자는 부가세를 어떻게 계산하고 신고하는지 쉽게 정리하였다.
부가가치세란 무엇인가 &nbsp; 부가가치세는 상품이나 서비스가 거래되는 과정에서 생기는 부가가치에 붙는 세금이다. 여기서 부가가치는 쉽게 말해 사업자가 물건을 사 오거나 서비스를 준비한 뒤, 여기에 자기 이윤과 가치를 더해 판매하면서 생기는 차이라고 보면 된다.
예를 들어 카페가 원두, 우유, 컵 같은 재료를 사서 커피를 만든 뒤 판매한다고 해보자. 단순히 재료를 그대로 파는 것이 아니라, 공간, 인건비, 기술, 서비스, 브랜드 같은 요소를 더해 커피라는 상품으로 판다. 이 과정에서 생기는 가치에 세금이 붙는다는 개념이다.
다만 소비자 입장에서는 이렇게 복잡하게 생각할 필요는 없다. 일반적인 소비에서는 물건값에 부가가치세가 이미 포함되어 있는 경우가 많다. 편의점에서 2,200원짜리 음료를 사면 그 안에 부가세가 들어 있다. 별도로 세무서에 신고할 일은 없다.
핵심은 이렇다.
소비자는 물건값에 포함된 부가세를 부담한다. 사업자는 소비자에게 받은 부가세를 모아 신고하고 납부한다.그래서 부가가치세는 소비자가 부담하지만, 신고와 납부는 사업자가 하는 세금이라고 이해하면 쉽다.
&ldquo;부가세 별도&quot;는 무슨 뜻일까 &nbsp; &ldquo;부가세 별도&quot;는 표시된 금액에 부가가치세가 포함되어 있지 않다는 뜻이다. 즉, 표시 가격에 부가세를 추가로 더 내야 한다.
예를 들어 견적서에 서비스 비용이 100만 원이고 &ldquo;부가세 별도&quot;라고 적혀 있다면 실제 결제 금액은 보통 110만 원이 된다.
공급가액 1,000,000원 부가가치세 100,000원 총 결제금액 1,100,000원반대로 &ldquo;부가세 포함 110만 원&quot;이라고 되어 있다면 이미 부가세가 들어간 금액이다. 이 경우 총 결제금액은 110만 원이고, 그 안에 공급가액과 부가세가 나뉘어 들어 있다고 보면 된다.
헷갈리기 쉬운 부분은 소비자 거래와 사업자 거래의 표현 방식이 다르다는 점이다. 일반 소비자 대상 매장에서는 보통 부가세 포함 가격을 보여준다. 하지만 사업자끼리 거래하는 견적서, 외주 계약, 광고비, 임대료, 장비 구매에서는 공급가액과 부가세를 따로 표시하는 경우가 많다.
그래서 견적을 비교할 때는 반드시 총 결제금액 기준으로 봐야 한다. A업체가 100만 원 부가세 별도이고, B업체가 108만 원 부가세 포함이라면 단순히 100만 원이 더 싼 것이 아니다. A업체의 실제 결제 금액은 110만 원이기 때문이다.
부가가치세는 어떻게 계산될까 &nbsp; 일반과세자의 부가가치세는 기본적으로 매출세액에서 매입세액을 빼서 계산한다.
부가가치세 납부세액 = 매출세액 - 매입세액매출세액 은 내가 물건이나 서비스를 팔면서 고객에게 받은 부가세다. 일반적인 경우 공급가액의 10%가 매출세액이 된다.
매입세액 은 내가 사업을 위해 물건이나 서비스를 사면서 거래처에 지급한 부가세다. 사업용 재료, 비품, 광고비, 임차료 등에서 부가세가 포함될 수 있다.
예를 들어 작은 온라인 쇼핑몰을 운영한다고 해보자.
구분 금액 상품 판매 공급가액 10,000,000원 고객에게 받은 부가세 1,000,000원 사업용 물품 매입 공급가액 4,000,000원 거래처에 지급한 부가세 400,000원 이 경우 납부할 부가가치세는 다음과 같다.
매출세액 1,000,000원 - 매입세액 400,000원 = 납부세액 600,000원이 계산을 보면 부가세가 왜 &ldquo;사업자의 돈&quot;이 아닌지 이해하기 쉽다. 고객에게 받은 부가세 100만 원 전체가 내 수익이 아니다. 그중 사업 과정에서 이미 지급한 매입세액을 빼고 나머지를 국가에 납부하는 구조다.
부가세는 손해가 나도 낼 수 있다 &nbsp; 부가가치세를 처음 접할 때 가장 낯선 부분이 이것이다. 사업이 적자여도 부가세를 낼 수 있다.
소득세나 법인세는 기본적으로 사업 결과 남은 소득이나 이익을 기준으로 계산한다. 벌어들인 돈보다 비용이 커서 소득이 없다면 세금이 줄거나 없을 수 있다. 하지만 부가세는 성격이 다르다. 고객에게 받은 세금을 사업자가 대신 보관했다가 내는 구조이기 때문이다.
예를 들어 매출은 있었지만 임대료, 인건비, 광고비가 많이 나가서 실제로는 손해를 봤다고 해보자. 그래도 고객에게 받은 부가세가 있고, 공제받을 매입세액보다 매출세액이 크다면 부가세 납부가 생길 수 있다.
그래서 사업자는 매출이 들어왔을 때 부가세까지 전부 내 돈처럼 쓰면 안 된다. 통장에 입금된 금액 안에는 나중에 납부해야 할 부가세가 섞여 있을 수 있다.
실무적으로는 매출 입금액 중 부가세에 해당하는 금액을 따로 생각해두는 습관이 좋다. 예를 들어 부가세 포함 110만 원을 받았다면, 이 중 10만 원은 나중에 낼 수 있는 세금이라고 보고 자금 계획을 세우는 식이다.
신고 기간과 사업자 유형도 알아야 한다 &nbsp; 부가가치세는 정해진 과세기간에 따라 신고하고 납부한다. 일반적인 경우 개인 일반과세자는 1년에 2회, 법인사업자는 1년에 4회 신고 구조를 가진다.
개인 일반과세자는 보통 다음 일정으로 신고한다.
구분 과세대상기간 신고·납부기간 제1기 확정신고 1월 1일 ~ 6월 30일 7월 1일 ~ 7월 25일 제2기 확정신고 7월 1일 ~ 12월 31일 다음 해 1월 1일 ~ 1월 25일 법인사업자는 예정신고까지 포함해 일반적으로 1년에 4회 신고한다. 간이과세자는 일반과세자와 계산 구조와 신고 주기가 다르며, 보통 1년 단위로 다음 해 1월에 신고한다. 다만 세금계산서 발급 여부나 매출 규모 등에 따라 예외가 있을 수 있으니 본인의 사업자 유형을 확인해야 한다.
처음 사업을 시작했다면 내가 일반과세자인지 간이과세자인지부터 확인하는 것이 좋다. 같은 부가세라도 계산 방식, 세금계산서 발급, 매입세액 공제, 환급 가능 여부가 달라질 수 있기 때문이다.
특히 사업자는 세금계산서, 카드 매출, 현금영수증, 매입 증빙을 잘 챙겨야 한다. 매입세액을 공제받으려면 사업 관련 지출이라는 점과 적격증빙이 중요하다. 개인적인 소비를 사업 비용처럼 처리하면 문제가 될 수 있다.
정리 &nbsp; 부가가치세는 상품이나 서비스가 거래되는 과정에서 생긴 부가가치에 붙는 세금이다. 소비자는 물건값에 포함된 부가세를 부담하고, 사업자는 그 세금을 모아 신고·납부한다.
핵심만 다시 정리하면 이렇다.
부가가치세는 소비자가 부담하고 사업자가 신고·납부하는 세금이다. &ldquo;부가세 별도&quot;는 표시 금액에 부가세가 포함되어 있지 않다는 뜻이다. 일반적인 부가세율은 10%로 이해하면 된다. 일반과세자의 납부세액은 매출세액에서 매입세액을 빼서 계산한다. 사업이 적자여도 고객에게 받은 부가세가 있으면 납부세액이 생길 수 있다. 개인 일반과세자는 보통 1월과 7월에 부가세를 신고·납부한다. 부가세를 정확히 이해하면 견적서를 볼 때도, 사업 매출을 관리할 때도 실수가 줄어든다. 특히 사업자라면 통장에 들어온 돈을 전부 수익으로 보지 말고, 그 안에 나중에 납부할 세금이 포함되어 있는지 먼저 나누어 보는 습관이 필요하다.
자주 묻는 질문 &nbsp; 부가세 포함과 부가세 별도는 어떻게 다를까? &nbsp; 부가세 포함은 표시된 금액 안에 부가가치세가 이미 들어 있다는 뜻이다. 부가세 별도는 표시된 금액에 부가세를 추가로 더해야 한다는 뜻이다. 예를 들어 100만 원 부가세 별도라면 실제 결제 금액은 보통 110만 원이다.
소비자도 부가가치세 신고를 해야 할까? &nbsp; 일반 소비자는 물건값에 포함된 부가세를 부담할 뿐, 따로 신고하지 않는다. 부가가치세 신고와 납부는 부가세 과세대상 사업자가 한다.
사업이 적자인데도 부가세를 내야 할 수 있을까? &nbsp; 그럴 수 있다. 부가세는 소득이 아니라 거래 과정에서 고객에게 받은 세금을 정산하는 구조다. 매출세액이 매입세액보다 크면 실제 사업 이익이 적거나 손해가 나도 납부세액이 생길 수 있다.`}).add({id:67,href:"/posts/real-estate-purchase-costs/",title:"부동산 매매 세금과 비용 총정리: 취득세, 중개수수료,...",description:"집을 살 때 매매가 외에 필요한 취득세, 지방교육세, 농어촌특별세, 중개수수료, 등기비용, 이사비와 5억 원 아파트 예시를 쉽게 정리했다.",content:`집을 살 때 가장 먼저 보는 숫자는 매매가다. 5억 원짜리 집이면 &ldquo;5억 원만 준비하면 되겠지&quot;라고 생각하기 쉽다. 그런데 실제로는 그렇지 않다. 집을 사면 매매가 외에도 취득세, 중개수수료, 등기비용, 국민주택채권 비용, 이사비 같은 부대비용이 추가로 들어간다.
문제는 이 비용들이 생각보다 크다는 점이다. 주택담보대출을 받더라도 취득세나 중개수수료까지 대출에 포함되지 않는 경우가 많다. 결국 잔금일 전까지 현금으로 따로 준비해야 한다.
이 글에서는 부동산 매매를 할 때 어떤 세금과 비용이 드는지, 5억 원 아파트를 살 때 대략 얼마를 더 준비해야 하는지 누구나 이해하기 쉽게 정리하였다.
집 살 때 매매가 말고 들어가는 비용 &nbsp; 부동산 매매 비용은 크게 세금, 수수료, 기타 비용으로 나눌 수 있다.
구분 주요 항목 세금 취득세, 지방교육세, 농어촌특별세 수수료 부동산 중개수수료, 법무사 수수료 기타 비용 국민주택채권 할인 비용, 인지세, 등기신청수수료, 이사비 이 중 가장 큰 비중을 차지하는 것은 보통 취득세다. 그다음으로 중개수수료, 등기 관련 비용, 이사비가 붙는다. 집값이 높아질수록 취득세와 중개수수료도 같이 커지기 때문에, 매매가만 보고 자금 계획을 세우면 잔금일에 돈이 부족해질 수 있다.
처음 집을 살 때는 &ldquo;대출 가능 금액 + 내 돈 = 매매가&quot;까지만 계산하기 쉽다. 하지만 실제로는 이렇게 봐야 한다.
필요한 총자금 = 매매가 + 취득세 등 세금 + 중개수수료 + 등기비용 + 이사비 + 예비비
예비비까지 넣어야 하는 이유는 잔금일 전후로 예상 못 한 비용이 자주 생기기 때문이다. 관리비 정산, 선수관리비, 인테리어 계약금, 가전·가구 구입비까지 생각하면 여유 자금이 필요하다.
취득세는 얼마나 내야 할까 &nbsp; 취득세는 집을 취득할 때 내는 지방세다. 보통 취득세라고 말할 때는 취득세 본세뿐 아니라 지방교육세, 농어촌특별세까지 함께 생각하는 경우가 많다.
1세대 1주택 기준으로 주택 취득세율은 취득가액에 따라 달라진다.
취득가액 취득세율 6억 원 이하 1% 6억 원 초과 ~ 9억 원 이하 1~3% 9억 원 초과 3% 6억 원 초과 9억 원 이하 구간은 딱 2%처럼 고정된 것이 아니라 가격에 따라 1%에서 3% 사이로 계산된다. 예를 들어 7억 5천만 원 주택은 대략 2% 수준으로 보면 된다.
여기에 지방교육세가 붙는다. 일반적으로 취득세액의 10% 수준으로 생각하면 이해하기 쉽다. 전용면적 85㎡를 초과하는 주택은 농어촌특별세가 추가될 수 있다. 전용면적 85㎡ 이하라면 농어촌특별세는 보통 부과되지 않는다.
예를 들어 5억 원 아파트를 1세대 1주택으로 취득하고 전용면적이 85㎡ 이하라면 취득세는 이렇게 볼 수 있다.
취득세: 5억 원 × 1% = 500만 원 지방교육세: 취득세 500만 원 × 10% = 50만 원 농어촌특별세: 전용면적 85㎡ 이하라면 일반적으로 없음 합계: 약 550만 원 다주택자라면 이야기가 달라진다. 조정대상지역 여부와 보유 주택 수에 따라 취득세율이 8%, 12%로 중과될 수 있다. 그래서 집을 추가로 사는 경우에는 반드시 취득세 중과 여부를 먼저 확인해야 한다.
취득세 감면을 받을 수 있는 경우 &nbsp; 처음 집을 사거나 출산·양육 요건을 충족하면 취득세 감면을 받을 수 있는 경우가 있다.
대표적으로 생애최초 취득세 감면이 있다. 본인과 배우자가 모두 주택을 취득한 적이 없고, 취득 당시 주택 가액이 12억 원 이하라면 취득세를 감면받을 수 있다. 감면 한도는 일반적으로 최대 200만 원이고, 인구감소지역 주택은 한도가 더 커질 수 있다.
출산·양육 취득세 감면도 있다. 2028년 12월 31일까지 자녀를 출산한 부모가 일정 기간 안에 주택을 취득하고, 취득 당시 가액이 12억 원 이하이며 1가구 1주택 요건을 충족하면 최대 500만 원까지 감면받을 수 있다.
간단히 비교하면 이렇다.
구분 주요 요건 감면 한도 생애최초 취득세 감면 본인·배우자 모두 주택 취득 이력 없음, 12억 원 이하 주택 최대 200만 원 출산·양육 취득세 감면 출산 부모, 12억 원 이하, 1가구 1주택 등 최대 500만 원 감면은 받는 것보다 유지 요건도 중요하다. 감면을 받은 뒤 일정 기간 안에 집을 팔거나 증여하거나 임대하면 감면받은 세금을 다시 내야 할 수 있다. 실제 신청 전에는 관할 시군구 세무부서나 위택스 안내를 확인하는 게 좋다.
중개수수료는 얼마나 들까 &nbsp; 부동산 중개수수료의 정확한 이름은 중개보수다. 공인중개사를 통해 매매계약을 하면 중개보수를 내야 한다. 중개보수는 거래금액별 상한 요율이 정해져 있고, 그 범위 안에서 협의할 수 있다.
주택 매매 기준 상한 요율은 대략 이렇게 볼 수 있다.
거래금액 상한 요율 5,000만 원 미만 0.6%, 한도 25만 원 5,000만 원 이상 ~ 2억 원 미만 0.5%, 한도 80만 원 2억 원 이상 ~ 9억 원 미만 0.4% 9억 원 이상 ~ 12억 원 미만 0.5% 12억 원 이상 ~ 15억 원 미만 0.6% 15억 원 이상 0.7% 예를 들어 5억 원짜리 아파트라면 2억 원 이상 9억 원 미만 구간이므로 상한 요율은 0.4%다.
5억 원 × 0.4% = 200만 원
여기에 중개업자가 일반과세자라면 부가가치세 10%가 붙을 수 있다.
200만 원 + 부가세 20만 원 = 220만 원
중개수수료 상한 요율은 말 그대로 최대치다. 실제 금액은 그 범위 안에서 중개사와 협의할 수 있다. 다만 계약이 거의 끝난 뒤에 이야기하면 협의가 어려울 수 있으니, 매물 확인 단계나 계약 전 단계에서 미리 확인하는 것이 좋다.
등기비용, 국민주택채권, 이사비도 필요하다 &nbsp; 집을 사면 내 이름으로 소유권 이전 등기를 해야 한다. 이때 등기비용이 든다. 등기비용에는 법무사 수수료, 인지세, 등기신청수수료, 국민주택채권 비용 등이 포함된다.
대표적인 항목은 다음과 같다.
법무사 수수료: 등기 업무를 맡기는 비용 인지세: 거래금액에 따라 부과되는 세금 등기신청수수료: 등기 신청 처리 비용 국민주택채권 할인 비용: 의무 매입한 채권을 바로 팔 때 생기는 차액 참고 글 기준으로 1억 원 초과 10억 원 이하 거래의 인지세는 15만 원, 등기신청수수료는 1만 8천 원 수준으로 설명된다. 법무사 수수료는 매매가와 대출 여부에 따라 달라질 수 있고, 대출을 받으면 근저당 설정 등기 비용이 추가될 수 있다.
이사비도 빼놓으면 안 된다. 일반 가정 기준으로 포장이사는 80만 원에서 150만 원 정도를 생각할 수 있지만, 이삿짐 양, 거리, 사다리차 사용 여부, 에어컨 이전 설치 여부에 따라 달라진다.
그리고 실제 잔금일에는 이런 비용도 생길 수 있다.
선수관리비 정산 관리비·공과금 정산 입주청소 비용 도배·장판·인테리어 비용 가전·가구 구입비 그래서 부대비용은 딱 맞춰 준비하기보다 여유 있게 잡는 게 안전하다.
5억 원 아파트를 산다면 얼마가 더 필요할까 &nbsp; 전용면적 85㎡ 이하, 1세대 1주택, 매매가 5억 원 아파트를 예로 들어보자.
항목 예상 금액 취득세 500만 원 지방교육세 50만 원 중개수수료 200만 원 중개수수료 부가세 20만 원 등기비용 약 70만 원 국민주택채권 할인 비용 약 30만 원 이사비 약 100만 원 합계 약 970만 원 즉 5억 원짜리 집을 산다고 해서 5억 원만 준비하면 되는 게 아니다. 대략 1,000만 원 안팎의 부대비용이 추가로 필요할 수 있다. 매매가의 약 2% 수준이다.
여기에는 인테리어 비용, 대출 관련 비용, 관리비 정산, 가전·가구 구입비는 포함하지 않았다. 실제로는 집 상태와 대출 여부에 따라 더 필요할 수 있다.
이 계산이 중요한 이유는 부대비용 대부분이 잔금일 전후에 한꺼번에 나가기 때문이다. 계약금, 중도금, 잔금만 맞춰놓고 부대비용을 빼먹으면 마지막에 자금이 부족해질 수 있다.
잔금 전 체크리스트 &nbsp; 잔금일이 다가오면 매매가 외 비용까지 모두 합쳐서 점검해야 한다. 특히 대출 실행일과 잔금일이 맞는지, 취득세를 낼 현금이나 카드 한도가 충분한지 확인해야 한다.
잔금 전에는 최소한 아래 항목을 확인하자.
취득세와 지방교육세 예상 금액을 계산했는가? 생애최초 또는 출산·양육 취득세 감면 대상인지 확인했는가? 중개수수료와 부가세 포함 금액을 중개사와 확인했는가? 법무사 수수료와 국민주택채권 비용 견적을 받았는가? 대출 실행일과 잔금일이 같은지 확인했는가? 취득세 카드 납부를 할 경우 카드 한도를 확인했는가? 이사비, 입주청소, 관리비 정산 비용을 따로 준비했는가? 취득세는 신용카드 납부가 가능할 수 있고, 카드사에 따라 무이자 할부가 제공되는 경우도 있다. 다만 취득세 금액이 카드 한도보다 크면 결제가 되지 않을 수 있으니 잔금일 전에 한도 증액 여부를 확인하는 게 좋다.
정리 &nbsp; 부동산 매매 비용은 매매가만 보면 안 된다. 집을 사는 순간 취득세, 중개수수료, 등기비용, 국민주택채권 비용, 이사비가 함께 따라온다.
핵심만 다시 정리하면 이렇다.
집을 살 때는 매매가 외 부대비용이 수백만 원에서 수천만 원까지 들 수 있다. 1세대 1주택 취득세율은 6억 원 이하 1%, 6억9억 원 13%, 9억 원 초과 3%다. 지방교육세와 농어촌특별세가 추가될 수 있다. 중개수수료는 거래금액별 상한 요율 안에서 협의할 수 있다. 등기비용, 국민주택채권 할인 비용, 이사비도 따로 준비해야 한다. 5억 원 아파트 기준 부대비용은 약 970만 원 정도로 볼 수 있다. 집을 살 계획이라면 &ldquo;내가 살 수 있는 집값&quot;만 계산하지 말고, &ldquo;잔금일에 실제로 필요한 총 현금&quot;을 계산해야 한다. 이 차이를 알아야 자금 계획이 흔들리지 않는다.
자주 묻는 질문 &nbsp; 취득세는 언제까지 내야 할까? &nbsp; 일반적으로 취득일, 즉 잔금 지급일과 등기 접수일 중 빠른 날부터 60일 이내에 신고하고 납부해야 한다. 기한을 넘기면 가산세가 붙을 수 있다.
중개수수료는 무조건 상한 요율만큼 내야 할까? &nbsp; 아니다. 상한 요율은 최대치다. 그 범위 안에서 중개사와 협의할 수 있다. 다만 실제 수수료 금액은 계약 전에 확인하고, 가능하면 계약서에 명확히 적어두는 게 좋다.
부대비용도 주택담보대출로 낼 수 있을까? &nbsp; 일반적으로 취득세, 중개수수료, 이사비 같은 부대비용은 주택담보대출에 포함되지 않는 경우가 많다. 그래서 매매가와 별도로 현금 계획을 세워야 한다.`}).add({id:68,href:"/posts/real-estate-electronic-contract/",title:"부동산 매매 전자 계약서 작성 방법과 대출 금리 우대 ...",description:"부동산 매매 전자 계약서가 무엇인지, 공인중개사와 매도자, 매수자가 어떤 흐름으로 작성하는지, 대출 금리 우대 확인 포인트까지 정리했다.",content:`집을 매매하려고 은행에 대출 상담을 받으러 가면 생각보다 여러 가지 조건을 듣게 된다. 금리, 한도, 상환 방식도 중요하지만, 의외로 계약서 작성 방식 때문에 금리 우대를 받을 수 있는 경우도 있다.
이번에 아파트 주택 매매를 준비하면서 은행에 갔는데, 주택 매매 시에 부동산 매매 전자 계약서 를 작성해서 제출하면 대출 이자를 0.2% 감면해 줄 수 있다는 안내를 받았다. 0.2%라고 하면 작아 보이지만, 주택담보대출처럼 금액이 크고 기간이 긴 대출에서는 꽤 의미 있는 차이가 된다.
그래서 매매 계약을 하기 전에 부동산 측에 전자계약서 작성이 가능한지 꼭 확인하라는 말도 들었다. 이 글에서는 부동산 매매 전자 계약서가 무엇인지, 누가 작성하는지, 실제로 어떤 점을 조심하면 좋은지 초보자 기준으로 정리해본다.
부동산 매매 전자 계약서란? &nbsp; 부동산 매매 전자 계약서는 종이 계약서에 도장을 찍는 대신, 온라인 시스템에서 계약서를 작성하고 전자서명으로 계약을 완료하는 방식이다. 국토교통부와 한국부동산원이 운영하는 부동산거래 전자계약시스템을 통해 이용할 수 있다.
전자계약이라고 해서 계약 내용이 완전히 다른 것은 아니다. 매도자, 매수자, 공인중개사가 확인해야 할 매매대금, 계약금, 중도금, 잔금일, 특약사항 같은 핵심 내용은 일반 종이 계약서와 마찬가지로 중요하다.
차이는 작성과 서명 방식에 있다. 종이 계약서는 출력한 문서에 서명 또는 날인을 하고 보관하지만, 전자 계약서는 시스템에서 계약 내용을 입력하고 당사자들이 본인인증과 전자서명을 거쳐 계약을 완료한다.
부동산거래 전자계약시스템에서는 매매계약 작성, 임대계약 작성, 나의 전자계약 조회, 전자계약 절차, 전자계약 매뉴얼, 전자계약 연습 같은 메뉴를 제공한다. 처음 이용한다면 계약 전에 사이트에서 절차와 연습 메뉴를 한 번 보는 것도 도움이 된다.
전자계약은 누가 작성해야 하나? &nbsp; 부동산 매매 전자 계약서는 공인중개사만 작성하고 끝나는 문서가 아니다. 기본적으로 공인중개사, 매도자, 매수자 모두가 확인하고 참여해야 하는 계약서 다.
공인중개사의 역할 &nbsp; 실무에서는 공인중개사가 계약 내용을 시스템에 입력하는 경우가 많다. 매매 대상 부동산 정보, 거래금액, 잔금일, 특약사항, 중개대상물 확인설명 관련 내용 등을 정리해서 계약서의 기본 틀을 만든다.
그래서 계약 전에 부동산 중개사무소에 &ldquo;전자계약으로 진행 가능한가요?&ldquo;라고 먼저 물어보는 것이 좋다. 모든 중개사무소가 전자계약에 익숙한 것은 아니기 때문이다. 특히 대출 금리 우대 때문에 전자계약서가 필요한 상황이라면, 계약 당일이 아니라 계약 전 상담 단계에서 확인해야 한다.
매도자와 매수자의 역할 &nbsp; 매도자와 매수자는 계약 내용을 확인하고 본인인증, 전자서명 절차를 진행한다. 계약 금액, 계좌 정보, 잔금일, 특약사항은 종이 계약서보다 더 꼼꼼히 봐야 한다. 화면에서 확인한다고 해서 대충 넘기면 안 된다.
전자계약 작성 자체는 어렵지 않은 편이다. 다만 모바일로 진행하는 경우가 많기 때문에 스마트폰 사용이 서투른 사람이 있으면 시간이 걸릴 수 있다. 문자로 온 링크를 열고, 본인인증을 하고, 화면을 내려가며 계약 내용을 확인하고, 전자서명을 완료하는 과정이 낯설 수 있다.
부모님 명의로 매도하거나 매수하는 경우처럼 계약 당사자가 모바일 사용에 익숙하지 않다면, 계약 당일에 당황하지 않도록 미리 설명해두는 편이 좋다. 본인 명의 휴대폰, 공동인증서 또는 간편인증 수단, 신분증 등을 미리 챙겨두면 진행이 수월하다.
왜 전자계약을 쓰면 대출 금리 우대가 나올까? &nbsp; 은행에서 전자계약서를 요구하는 이유는 금융기관마다 다를 수 있지만, 보통은 거래 내용 확인이 명확하고 계약 정보가 시스템으로 관리되기 때문이다. 종이 계약서보다 위변조나 누락 가능성을 줄이고, 대출 심사 과정에서 계약 사실을 확인하기 쉬운 장점이 있다.
내가 은행에서 들은 안내는 주택 매매 시 부동산 매매 전자 계약서를 제출하면 대출 이자를 0.2% 감면해 줄 수 있다는 내용이었다. 다만 이 금리 우대는 모든 은행, 모든 대출 상품에 자동으로 적용되는 조건은 아닐 수 있다.
그래서 전자계약을 고려한다면 다음 세 가지를 먼저 확인해야 한다.
내가 신청할 주택담보대출 상품에서 전자계약 우대금리가 있는지 우대금리가 몇 %인지 어떤 서류나 화면을 은행에 제출해야 하는지 특히 &ldquo;전자계약으로 작성하면 무조건 싸진다&quot;라고 생각하면 안 된다. 은행별로 우대 조건이 다르고, 대출 실행 시점의 상품 기준도 바뀔 수 있다. 대출 상담을 받을 때 &ldquo;부동산거래 전자계약시스템으로 작성한 매매계약서가 있으면 금리 우대가 되나요?&ldquo;라고 직접 물어보는 게 가장 정확하다.
전자계약 진행 전에 꼭 확인할 것들 &nbsp; 전자계약은 편리하지만 계약 당일에 처음 이야기하면 오히려 진행이 꼬일 수 있다. 매수인 입장에서는 대출 금리 우대와 연결될 수 있으니 더 미리 확인하는 것이 좋다.
부동산 중개사무소가 전자계약을 할 수 있는지 확인한다 &nbsp; 가장 먼저 확인할 것은 공인중개사가 전자계약을 실제로 진행할 수 있는지다. 시스템 사용 경험이 있는지, 매매 계약 작성이 가능한지, 계약 당일에 필요한 준비물이 무엇인지 물어보면 된다.
전자계약이 가능하다고 해도 중개사무소 내부 일정이나 시스템 준비 때문에 시간이 더 필요할 수 있다. 그래서 가계약 단계나 계약일 조율 단계에서 미리 말하는 편이 좋다.
매도자도 전자서명에 동의해야 한다 &nbsp; 전자계약은 매수자만 원한다고 되는 것이 아니다. 매도자도 전자계약 방식으로 진행하는 데 동의해야 하고, 본인인증과 전자서명을 해야 한다.
매도자가 스마트폰 사용에 익숙하지 않거나 전자서명 자체를 불안해할 수 있다. 이럴 때는 전자계약이 종이 계약을 대체하는 공식 시스템이고, 국토교통부 부동산거래 전자계약시스템에서 진행된다는 점을 중개사를 통해 차분히 설명하는 것이 좋다.
특약사항은 종이 계약서처럼 꼼꼼히 봐야 한다 &nbsp; 전자계약이라고 해서 특약이 자동으로 좋아지는 것은 아니다. 근저당 말소 조건, 잔금일 전 하자 확인, 관리비 정산, 선수관리비, 전입 가능일, 대출 불가 시 계약 처리 같은 내용은 여전히 중요하다.
특히 매수인이 대출을 받아 잔금을 치르는 경우라면 대출 실행 조건과 잔금일이 맞아야 한다. 전자계약서 작성 여부와 별개로, 계약 내용 자체는 반드시 꼼꼼히 확인해야 한다.
은행 제출용 자료를 미리 물어본다 &nbsp; 은행이 요구하는 자료는 상품과 지점에 따라 다를 수 있다. 전자계약서 출력본이 필요한지, 계약 완료 화면이나 계약번호가 필요한지, 시스템에서 발급되는 문서가 필요한지 미리 확인해두면 좋다.
계약을 완료한 뒤 은행에 다시 가서 &ldquo;이 자료가 아니라 다른 자료가 필요하다&quot;라는 말을 들으면 일정이 번거로워진다. 대출 상담 단계에서 필요한 제출 방식까지 물어보는 것이 가장 깔끔하다.
모바일 작성이 어려운 사람을 위한 현실적인 팁 &nbsp; 전자계약서 작성은 절차만 보면 어렵지 않다. 하지만 실제 계약 자리에서는 긴장도 되고, 금액도 크고, 여러 사람이 동시에 기다리기 때문에 작은 인증 오류도 크게 느껴질 수 있다.
모바일 사용이 서투른 사람이 있다면 계약 전에 다음을 확인해두면 좋다.
본인 명의 휴대폰을 가지고 있는지 휴대폰 배터리가 충분한지 문자나 카카오톡으로 온 링크를 열 수 있는지 간편인증, 공동인증서, 금융인증서 중 사용할 수 있는 인증 수단이 있는지 신분증을 지참했는지 계약 내용을 화면에서 천천히 읽어볼 시간이 있는지 특히 부모님이나 연세가 있는 가족이 계약 당사자라면, 옆에서 대신 눌러주는 것보다 본인이 무엇에 서명하는지 이해하게 하는 것이 중요하다. 계약은 결국 본인의 의사표시이기 때문이다.
계약 당일에는 공인중개사에게 너무 빨리 진행하지 말고, 각 단계에서 확인할 시간을 달라고 이야기해도 된다. 큰돈이 오가는 계약에서 천천히 확인하는 것은 이상한 일이 아니다.
정리 &nbsp; 부동산 매매 전자 계약서는 종이 계약서 대신 온라인에서 계약 내용을 작성하고 전자서명으로 완료하는 방식이다. 공인중개사, 매도자, 매수자가 모두 참여해야 하고, 계약 내용 확인은 종이 계약서와 똑같이 중요하다.
내 경우에는 은행 대출 상담 과정에서 전자계약서를 제출하면 대출 이자를 0.2% 감면받을 수 있다는 안내를 받았다. 그래서 매매 계약 전에 부동산 측에서 전자계약 진행이 가능한지 꼭 확인하라는 조언도 들었다.
전자계약 자체는 어렵지 않지만, 모바일 본인인증과 전자서명 과정이 낯선 사람에게는 부담이 될 수 있다. 계약 당사자 중 스마트폰 사용이 서투른 사람이 있다면 미리 준비물을 챙기고 절차를 설명해두는 것이 좋다.
주택 매매를 앞두고 있다면 계약 방식도 대출 조건의 일부라고 생각하면 된다. 은행에는 전자계약 우대금리 여부를 확인하고, 부동산에는 전자계약 진행 가능 여부를 확인하자. 작은 확인 하나가 장기 대출 이자에서는 꽤 큰 차이를 만들 수 있다.
자주 묻는 질문 &nbsp; 부동산 매매 전자 계약서는 어디에서 진행하나? &nbsp; 국토교통부와 한국부동산원이 운영하는 부동산거래 전자계약시스템에서 진행할 수 있다. 사이트에는 전자계약 절차, 매뉴얼, 전자계약 연습 메뉴도 제공된다.
전자계약을 하면 대출 금리가 무조건 낮아지나? &nbsp; 무조건은 아니다. 은행과 대출 상품에 따라 전자계약 우대금리 적용 여부가 다를 수 있다. 대출 상담 때 전자계약서 제출 시 우대금리가 있는지, 우대 폭이 얼마인지, 어떤 자료를 제출해야 하는지 확인해야 한다.
매도자가 모바일 사용을 어려워하면 전자계약을 못 하나? &nbsp; 반드시 못 하는 것은 아니다. 다만 본인인증과 전자서명 과정이 필요하므로 시간이 더 걸릴 수 있다. 본인 명의 휴대폰, 인증 수단, 신분증을 미리 준비하고, 공인중개사에게 천천히 진행해달라고 요청하는 것이 좋다.`}).add({id:69,href:"/posts/diversified-investing-portfolio/",title:"분산투자 왜 해야 할까? 포트폴리오 뜻과 투자 자산 나...",description:"분산투자와 포트폴리오의 뜻, 한 종목에 몰아서 투자할 때 생기는 위험, 자산과 투자 시점을 나누는 방법을 초보자 눈높이로 정리했다.",content:`투자를 시작하면 가장 자주 듣는 말이 있다. &ldquo;계란을 한 바구니에 담지 말라&quot;는 말이다. 말은 쉬운데 막상 내 계좌를 보면 한두 종목, 한 가지 자산, 한 번의 매수 타이밍에 돈이 몰려 있는 경우가 많다.
집중투자는 맞았을 때 수익이 크게 보인다. 하지만 틀렸을 때 회복이 어렵다. 한 종목이 급락하거나, 특정 업종 전체가 흔들리거나, 내가 산 직후 시장이 조정을 받으면 계좌 전체가 같이 무너질 수 있다. 분산투자는 이런 위험을 줄이기 위한 가장 기본적인 투자 원칙이다.
이 글에서는 분산투자와 포트폴리오의 뜻, 분산투자가 필요한 이유, 초보자가 바로 적용할 수 있는 자산 분산과 시점 분산 방법을 정리하였다.
분산투자는 투자 자산을 여러 곳에 나누는 것이다 &nbsp; 분산투자는 한 곳에 돈을 몰아넣지 않고 여러 자산에 나눠서 투자하는 방법이다. 특정 주식 한 종목에 전부 투자하는 대신 여러 종목, 여러 업종, 여러 자산군으로 나누는 것이 핵심이다.
예를 들어 투자금 1,000만 원이 있다고 해보자. 이 돈을 한 종목에 모두 넣으면 그 종목의 흐름이 내 투자 성과를 거의 결정한다. 반면 국내 주식, 해외 주식, 채권형 ETF, 현금성 자산 등으로 나누면 한 자산이 흔들릴 때 다른 자산이 충격을 줄여줄 수 있다.
분산투자는 수익을 포기하는 방법이 아니다. 손실이 너무 커져서 시장에서 버티지 못하는 상황을 줄이는 방법에 가깝다. 투자에서 중요한 것은 한 번 크게 맞히는 것만이 아니라 오래 살아남는 것이다.
포트폴리오는 내 자산 구성표다 &nbsp; 포트폴리오는 내가 가진 투자 자산의 구성표다. 예금, 적금, 주식, ETF, 채권, 금, 리츠, 현금 등을 어떤 비율로 담고 있는지 보여주는 자산 바구니라고 보면 된다.
예를 들어 &ldquo;국내 주식 30%, 미국 주식 40%, 채권 20%, 현금 10%&ldquo;처럼 적어볼 수 있다. 이렇게 숫자로 정리하면 내 돈이 어디에 얼마나 쏠려 있는지 바로 보인다.
포트폴리오를 만드는 이유는 멋진 투자표를 만들기 위해서가 아니다. 내가 감당할 수 있는 위험 안에서 투자하기 위해서다. 계좌가 크게 흔들렸을 때 잠을 못 잘 정도라면 포트폴리오가 내 성향보다 공격적으로 짜여 있을 가능성이 크다.
분산투자는 큰 손실을 줄이는 데 도움이 된다 &nbsp; 투자에서 손실은 단순히 숫자만의 문제가 아니다. 10% 손실은 11.1% 수익을 내면 회복할 수 있지만, 50% 손실은 다시 100% 수익을 내야 원금으로 돌아온다. 손실이 커질수록 회복에 필요한 수익률은 훨씬 가파르게 올라간다.
그래서 분산투자의 목적은 모든 투자에서 이기는 것이 아니다. 한 번의 실수나 한 자산의 부진이 전체 계좌를 망치지 않게 만드는 것이다.
주식 한 종목에 투자했는데 실적이 나빠지거나, 예상치 못한 악재가 나오거나, 업종 분위기가 바뀌면 손실이 크게 날 수 있다. 하지만 여러 종목과 자산으로 나누어 두면 특정 자산의 악재가 계좌 전체에 미치는 영향이 줄어든다.
집중투자와 분산투자는 성격이 다르다 &nbsp; 집중투자는 소수 자산에 크게 베팅하는 투자 방식이다. 기업을 깊이 분석하고 확신이 높을 때는 높은 수익을 기대할 수 있다. 다만 판단이 틀렸을 때 손실도 집중된다.
분산투자는 한 자산의 대박보다 전체 계좌의 안정성을 중시한다. 기대 수익률이 조금 낮아 보일 수 있지만, 예측이 틀렸을 때도 버틸 여지를 남긴다. 특히 투자 경험이 많지 않거나, 목돈, 전세 보증금, 노후 자금처럼 잃으면 곤란한 돈을 운용할 때는 분산투자가 더 현실적인 선택이 될 수 있다.
서로 다르게 움직이는 자산을 섞어야 한다 &nbsp; 분산투자는 단순히 종목 수를 늘리는 것만으로 끝나지 않는다. 비슷하게 움직이는 자산만 많이 담으면 겉으로만 분산된 포트폴리오가 된다.
예를 들어 반도체 주식 10개를 샀다고 해보자. 종목 수는 많지만 모두 같은 업종에 속해 있다. 반도체 업황이 나빠지면 10개 종목이 동시에 하락할 수 있다. 이 경우에는 종목 분산은 했지만 업종 분산은 부족한 셈이다.
그래서 중요한 개념이 상관관계다. 쉽게 말해 두 자산이 얼마나 비슷하게 움직이는지를 보는 것이다. 같은 방향으로 강하게 움직이는 자산끼리만 담으면 위기 때 같이 흔들린다. 반대로 서로 다르게 움직이는 자산을 섞으면 계좌 변동성을 낮추는 데 도움이 된다.
자산군을 나누면 충격이 줄어든다 &nbsp; 초보자는 먼저 자산군을 나누는 것부터 시작하면 좋다. 자산군은 주식, 채권, 현금, 금, 부동산 리츠처럼 성격이 다른 투자 묶음을 말한다.
주식은 기업 성장에 따른 수익을 기대할 수 있지만 가격 변동이 크다. 채권은 상대적으로 안정적인 이자 수익을 기대할 수 있지만 금리 변화에 영향을 받는다. 현금은 수익률은 낮아도 급락장에서 기회를 잡거나 생활비를 지키는 역할을 한다. 금이나 리츠 같은 자산은 주식과 다른 흐름을 보일 때가 있어 보완재로 활용되기도 한다.
처음부터 복잡하게 짤 필요는 없다. 예를 들어 공격적인 투자자는 주식 비중을 높이고, 안정성을 중시하는 투자자는 채권과 현금 비중을 높이는 식으로 시작하면 된다. 중요한 것은 &ldquo;남들이 좋다고 해서&quot;가 아니라 &ldquo;내가 감당할 수 있는 흔들림&quot;에 맞추는 것이다.
ETF는 초보자가 분산투자를 시작하기 쉬운 도구다 &nbsp; ETF는 여러 종목을 한 바구니에 담아 거래소에서 주식처럼 사고팔 수 있는 상품이다. 예를 들어 코스피200 ETF를 사면 국내 대표 기업 여러 곳에 나누어 투자하는 효과를 얻을 수 있다. S&amp;P500 ETF를 사면 미국 대형주 여러 종목에 한 번에 투자하는 구조가 된다.
ETF가 무조건 안전하다는 뜻은 아니다. 주식형 ETF는 시장이 하락하면 같이 떨어진다. 다만 개별 종목을 직접 고르는 부담을 줄이고, 적은 금액으로 넓게 나누어 투자할 수 있다는 점에서 초보자에게 유용하다.
투자 시점도 나누는 것이 좋다 &nbsp; 분산투자는 자산만 나누는 것이 아니다. 투자하는 시점도 나눌 수 있다. 한 번에 전액을 투자하는 대신 매달 일정 금액을 나누어 투자하는 방식이 대표적이다.
예를 들어 600만 원을 한 번에 투자할 수도 있지만, 6개월 동안 매달 100만 원씩 투자할 수도 있다. 한 번에 투자하면 매수 직후 시장이 오를 때 유리하지만, 반대로 바로 하락장이 오면 심리적으로 버티기 어렵다. 시점을 나누면 최고점에 전부 사는 위험을 줄일 수 있다.
이런 방식을 적립식 투자라고 부른다. 가격이 높을 때는 같은 돈으로 적게 사고, 가격이 낮을 때는 더 많이 사게 된다. 장기적으로 평균 매입 단가를 완만하게 만드는 효과를 기대할 수 있다.
적립식 투자는 투자 습관을 만드는 데도 좋다 &nbsp; 적립식 투자의 장점은 가격 예측 부담을 줄여준다는 점이다. 초보자는 &ldquo;지금 사도 될까?&rdquo;, &ldquo;내일 더 떨어지면 어떡하지?&ldquo;라는 고민 때문에 투자 결정을 계속 미루기 쉽다.
매달 월급날 다음 날에 일정 금액을 투자하기로 정하면 시장을 맞히려는 부담이 줄어든다. 투자 금액도 생활비와 비상금을 제외한 범위 안에서 정하면 된다. 이렇게 해야 하락장이 와도 무리해서 팔 가능성이 낮아진다.
다만 적립식 투자도 손실을 완전히 막아주지는 않는다. 하락장이 길어지면 평가손실은 생긴다. 그래도 한 번에 큰돈을 넣는 것보다 심리적 충격이 작고, 장기 투자를 이어가기 쉽다는 장점이 있다.
초보자는 단순한 포트폴리오부터 시작하면 된다 &nbsp; 처음부터 완벽한 포트폴리오를 만들려고 하면 오히려 시작이 늦어진다. 중요한 것은 내 돈이 어디에 얼마나 들어가 있는지 알고, 너무 한쪽으로 쏠리지 않게 조정하는 것이다.
가장 먼저 할 일은 현재 자산을 적어보는 것이다. 예금과 적금, 주식, ETF, 코인, 연금, 현금까지 모두 적고 비율을 계산해보면 된다. 이 과정만 해도 &ldquo;생각보다 특정 종목에 많이 들어가 있네&rdquo;, &ldquo;현금이 너무 없네&rdquo;, &ldquo;국내 주식에만 몰려 있네&rdquo; 같은 문제가 보인다.
그다음에는 목표 비중을 정한다. 예를 들어 장기 투자 목적이라면 주식형 ETF 비중을 높일 수 있고, 1~2년 안에 써야 할 돈이라면 현금과 예금 비중을 높이는 것이 낫다. 투자 기간이 짧은 돈일수록 가격 변동이 큰 자산에 많이 넣지 않는 편이 좋다.
리밸런싱으로 원래 비중을 되돌린다 &nbsp; 포트폴리오는 한 번 정해두면 끝나는 것이 아니다. 시간이 지나면 자산별 수익률이 달라져서 비중이 바뀐다. 주식이 많이 오르면 주식 비중이 처음보다 커지고, 채권이나 현금 비중은 상대적으로 작아질 수 있다.
이때 원래 정한 비중에 가깝게 다시 맞추는 것을 리밸런싱이라고 한다. 예를 들어 목표 비중이 주식 70%, 현금 30%였는데 주식 상승으로 85%, 15%가 되었다면 일부 수익을 현금으로 옮겨 위험을 낮출 수 있다.
리밸런싱은 너무 자주 할 필요는 없다. 분기, 반기, 1년에 한 번처럼 정해진 주기로 점검하면 충분하다. 중요한 것은 시장 분위기에 휘둘려 계속 바꾸는 것이 아니라, 처음 정한 기준을 지키는 것이다.
정리 &nbsp; 분산투자는 투자 수익을 무조건 높여주는 마법 같은 방법은 아니다. 하지만 한 번의 판단 실수나 특정 자산의 급락이 전체 계좌를 크게 망가뜨리는 일을 줄여준다. 투자에서 오래 버티는 힘을 만들어주는 기본기라고 볼 수 있다.
포트폴리오는 내 자산 바구니의 구성표다. 주식, 채권, 현금, ETF 같은 자산을 어떤 비율로 담을지 정하고, 시간이 지나면서 너무 한쪽으로 쏠리지 않게 관리하는 것이 중요하다.
처음에는 복잡하게 시작하지 않아도 된다. 내가 가진 자산을 적고, 특정 종목이나 자산에 돈이 몰려 있는지 확인하고, 매달 일정 금액을 나누어 투자하는 것부터 시작하면 된다. 투자는 한 번에 완성하는 것이 아니라 오래 조정해가는 과정이다.
자주 묻는 질문 &nbsp; 분산투자란 무엇인가? &nbsp; 분산투자는 한 종목이나 한 자산에 돈을 몰아넣지 않고 여러 자산에 나누어 투자하는 방법이다. 특정 투자 대상에서 손실이 나도 전체 계좌 손실을 줄이는 데 도움이 된다.
포트폴리오란 무엇인가? &nbsp; 포트폴리오는 내가 가진 자산의 구성표다. 예금, 주식, ETF, 채권, 현금 등을 어떤 비율로 가지고 있는지 보여주는 자산 바구니라고 보면 된다.
분산투자는 어떻게 시작하면 좋은가? &nbsp; 먼저 현재 자산 비중을 적어보고, 특정 종목이나 업종에 돈이 몰려 있는지 확인하면 된다. 이후 주식, 채권, 현금, ETF처럼 성격이 다른 자산으로 나누고, 한 번에 투자하기보다 매달 일정 금액을 나누어 투자하는 방식으로 시작할 수 있다.`}).add({id:70,href:"/posts/illegal-building-home-purchase/",title:"불법 건축물 매매해도 괜찮을까? 위반건축물 확인 방법과...",description:"불법 건축물과 위반건축물이 무엇인지, 매매할 때 어떤 위험이 있는지, 건축물대장 확인 방법과 계약 전 체크포인트를 누구나 이해하기 쉽게 정리하였다.",content:`집을 보러 다니다 보면 생각보다 자주 듣는 말이 있다. &ldquo;이 부분은 불법 건축물이긴 한데 사는 데는 전혀 지장 없어요&rdquo;, &ldquo;나중에 양성화되면 괜찮아져요&rdquo;, &ldquo;다들 이렇게 하고 살아요&rdquo; 같은 말이다. 처음 집을 사는 사람 입장에서는 이 말이 꽤 그럴듯하게 들린다. 집이 깨끗하고 가격도 괜찮으면 더 흔들린다.
나도 예전에 불법 건축물이 포함된 주택을 매매하려다가 포기한 적이 있다. 부동산 중개인은 사는 데 지장이 없고 나중에 양성화가 되면 괜찮아질 수 있다고 설명했다. 집 자체는 마음에 들었지만, 정말 괜찮은 건지 계속 불안했다. 결국 매매를 포기했는데, 지금 생각하면 그 판단이 정말 다행이었다.
불법 건축물은 단순히 &ldquo;조금 고쳐 쓰는 집&rdquo; 정도로 보면 안 된다. 매수 후에는 이행강제금, 원상복구, 대출 제한, 매도 어려움 같은 문제가 새 집주인에게 따라올 수 있다. 이 글에서는 불법 건축물이 무엇인지, 어떤 유형이 많은지, 집을 살 때 무엇을 확인해야 하는지 쉽게 정리하였다.
불법 건축물과 위반건축물은 무엇일까 &nbsp; 일상에서는 보통 &ldquo;불법 건축물&quot;이라고 부르지만, 행정 실무에서는 &ldquo;위반건축물&quot;이라는 표현을 많이 쓴다. 건축허가나 건축신고를 받아야 하는데 받지 않았거나, 허가받은 내용과 다르게 증축, 대수선, 용도변경 등을 한 건축물을 말한다.
찾기쉬운 생활법령정보에서는 건축물의 기본 개념을 토지에 정착하는 공작물 중 지붕과 기둥 또는 벽이 있는 것과 그에 딸린 시설물로 설명한다. 즉, 단순한 가구나 이동식 물건이 아니라 건물의 일부처럼 붙어 있는 구조물이라면 건축법상 문제가 될 수 있다.
실제 주택 거래에서 자주 나오는 위반 사례는 이런 것들이다.
유형 예시 무단 증축 베란다 확장, 옥탑방 설치, 창고 증축, 컨테이너 설치 무단 대수선 벽을 새로 세워 가구 수를 늘림, 내부 구조를 허가 없이 변경 무단 용도변경 근린생활시설을 주거용으로 사용, 고시원 호실에 취사시설 설치 기타 위반 신고 없이 높은 담장 설치, 조경 의무 면적 훼손, 일조권 기준 위반 초보자가 특히 조심해야 할 부분은 &ldquo;겉으로 봐서는 모른다&quot;는 점이다. 집이 깨끗하고 살기 좋아 보여도 건축물대장과 실제 구조가 다르면 위반건축물일 수 있다.
왜 매수자에게 위험할까 &nbsp; 불법 건축물이 무서운 이유는 문제가 과거 소유자에게만 머물지 않기 때문이다. 집을 산 뒤에는 현재 소유자인 매수자가 행정상 책임을 부담하게 될 수 있다.
대표적인 위험은 이행강제금이다. 허가권자는 건축법을 위반한 건축물에 대해 시정명령을 할 수 있고, 시정명령을 이행하지 않으면 이행강제금이 부과될 수 있다. 쉽게 말해 &ldquo;원상복구하라&quot;는 명령이 나오고, 따르지 않으면 돈을 내야 하는 구조다.
문제는 이행강제금이 한 번 내고 끝나는 벌금처럼 느껴질 수 있지만, 실제로는 위반 상태가 해소될 때까지 반복적으로 부담될 수 있다는 점이다. 위반 면적, 시가표준액, 위반 내용에 따른 비율 등에 따라 금액도 달라진다. 작은 베란다 확장처럼 보여도 매년 부담이 생기면 생각보다 큰 비용이 된다.
두 번째 위험은 대출과 매매다. 금융기관은 담보가치와 권리관계를 본다. 위반건축물 표시가 있거나 실제 면적과 공부상 면적이 맞지 않으면 대출 심사에서 불리하게 작용할 수 있다. 나중에 다시 팔 때도 매수자가 같은 걱정을 하게 되니 거래가 잘 안 되거나 가격을 낮춰야 할 수 있다.
세 번째 위험은 원상복구 비용이다. 불법 증축한 부분을 철거해야 한다면 단순히 철거비만 드는 게 아니다. 방수, 단열, 전기, 배관, 마감까지 다시 손봐야 할 수 있다. 처음에는 싸게 산 것처럼 보여도 나중에 비용을 합치면 전혀 싸지 않을 수 있다.
&ldquo;나중에 양성화된다&quot;는 말을 조심해야 한다 &nbsp; 불법 건축물 매물에서 가장 많이 듣는 말이 &ldquo;양성화되면 괜찮다&quot;는 말이다. 여기서 양성화는 위반 상태인 건축물을 일정 요건에 따라 합법 상태로 인정받거나 정리하는 절차를 말한다.
하지만 양성화는 자동으로 되는 게 아니다. 특정 기간에 특별법이나 제도가 시행되어야 할 수 있고, 대상 건축물의 규모, 용도, 안전, 주차장, 일조권, 용적률, 건폐율 등 여러 조건을 충족해야 한다. 위반 건축물이 있다고 해서 모두 양성화 대상이 되는 것도 아니다.
더 현실적인 문제는 &ldquo;언제 될지 모른다&quot;는 점이다. 중개인이 &ldquo;나중에 될 수도 있다&quot;고 말해도, 그 말은 확정된 권리가 아니다. 매수자는 확정되지 않은 가능성에 수천만 원, 수억 원짜리 결정을 걸게 된다.
내가 매매를 고민했던 집도 그랬다. 중개인의 설명만 들으면 당장 사는 데 문제는 없어 보였다. 하지만 곰곰이 생각해보니 이상했다. 정말 문제가 없다면 왜 건축물대장에 맞게 정리하지 않았을까? 왜 매수자인 내가 양성화 가능성을 떠안아야 할까? 결국 포기했는데, 지금 생각해도 잘한 결정이었다.
부동산 거래에서 중요한 원칙은 단순하다. 불확실한 가능성은 가격 할인의 이유가 될 수는 있어도, 위험이 사라졌다는 증거는 아니다. 양성화 가능성을 믿고 매수하려면 최소한 관할 구청 건축과, 건축사, 법무사 등에게 구체적으로 확인해야 한다.
계약 전 반드시 확인해야 할 것 &nbsp; 불법 건축물 여부를 확인할 때 가장 먼저 볼 서류는 건축물대장이다. 등기부등본은 소유권과 권리관계를 보는 서류이고, 건축물대장은 건물의 구조, 용도, 면적, 층수, 위반건축물 표시 등을 보는 서류다. 둘은 역할이 다르다.
건축물대장에서 확인할 핵심은 아래와 같다.
확인 항목 봐야 할 내용 위반건축물 표시 표제부나 변동사항에 위반건축물 표시가 있는지 확인 용도 공부상 용도와 실제 사용 용도가 같은지 확인 면적 실제 사용 면적이 건축물대장 면적보다 과하게 넓지 않은지 확인 층수 옥탑, 다락, 지하, 증축 부분이 대장에 반영되어 있는지 확인 변동사항 시정명령, 위반 표시, 말소 이력 등이 있는지 확인 현장에서는 서류와 실제 구조를 같이 봐야 한다. 예를 들어 건축물대장에는 2층 건물인데 실제로는 옥상에 방처럼 쓰는 공간이 있거나, 근린생활시설인데 실제로는 주거용 원룸처럼 쓰고 있다면 위험 신호다.
공인중개사에게도 구체적으로 물어봐야 한다. &ldquo;불법 건축물 없죠?&ldquo;라고만 묻기보다 아래처럼 물어보는 게 좋다.
건축물대장상 위반건축물 표시가 있는지 실제 면적과 공부상 면적이 다른 부분이 있는지 베란다, 옥탑, 창고, 다락, 주차장 변경 사항이 있는지 관할 구청에서 시정명령이나 이행강제금이 나온 적이 있는지 대출 진행에 문제가 없는지 은행에 사전 확인했는지 말로만 듣고 넘기면 안 된다. 답변을 받았다면 건축물대장, 현장 사진, 계약서 특약으로 남겨두는 것이 좋다.
그래도 사고 싶다면 특약과 비용을 따져야 한다 &nbsp; 위반건축물이 있다고 해서 모든 거래가 절대 불가능한 것은 아니다. 다만 초보 매수자라면 웬만하면 피하는 쪽이 안전하다. 특히 실거주 첫 집, 대출 비중이 큰 집, 나중에 되팔아야 할 가능성이 큰 집이라면 더 조심해야 한다.
그래도 매수를 검토한다면 최소한 아래 계산을 해야 한다.
위반 부분을 합법화할 수 있는지 관할 구청에 확인한다. 합법화가 안 된다면 원상복구 비용을 견적받는다. 이미 부과된 이행강제금이나 앞으로 부과될 가능성을 확인한다. 은행 대출이 가능한지 사전 심사를 받아본다. 나중에 매도할 때 가격이 얼마나 깎일지 보수적으로 본다. 계약서 특약도 중요하다. 예를 들어 &ldquo;매도인은 잔금일까지 위반건축물 표시를 말소한다&rdquo;, &ldquo;위반건축물로 인해 대출이 불가할 경우 계약금을 반환하고 계약을 해제한다&rdquo;, &ldquo;기존 이행강제금 및 잔금 전 발생한 행정처분은 매도인이 부담한다&quot;처럼 구체적으로 적어야 한다.
다만 특약이 있다고 해서 모든 문제가 해결되는 것은 아니다. 매도인이 특약을 지키지 않으면 결국 분쟁이 된다. 그래서 가장 좋은 방법은 애초에 위반 상태가 정리된 뒤 계약하는 것이다.
정리하면 &nbsp; 불법 건축물은 단순히 &ldquo;조금 손본 집&quot;이 아니다. 겉으로는 멀쩡해 보여도 건축물대장, 실제 구조, 행정처분 이력이 맞지 않으면 매수자에게 큰 부담이 될 수 있다.
핵심만 정리하면 이렇다.
불법 건축물은 허가나 신고 없이 증축, 대수선, 용도변경 등을 한 건축물이다. 매수 후에는 이행강제금, 원상복구, 대출 제한, 재매도 어려움이 생길 수 있다. &ldquo;나중에 양성화된다&quot;는 말은 확정된 권리가 아니므로 그대로 믿으면 안 된다. 등기부등본만 보지 말고 건축물대장을 반드시 확인해야 한다. 위반 표시가 있다면 관할 구청, 건축사, 은행에 먼저 확인한 뒤 판단해야 한다. 집을 살 때는 마음에 드는 집을 놓치는 것보다, 문제 있는 집을 덜컥 사는 게 더 위험하다. 불법 건축물이라는 말이 조금이라도 나오면 급하게 결정하지 말고 서류와 비용부터 차분히 확인하자.
자주 묻는 질문 &nbsp; 건축물대장에 위반건축물 표시가 없으면 안전한 걸까? &nbsp; 표시가 없다고 무조건 안전하다고 볼 수는 없다. 아직 적발되지 않은 위반 부분이 있을 수 있고, 실제 구조와 건축물대장이 다를 수도 있다. 건축물대장 확인과 현장 확인을 함께 해야 한다.
불법 증축된 집을 사면 이행강제금은 누가 내야 할까? &nbsp; 일반적으로 행정처분 시점의 소유자나 관리자에게 부담이 갈 수 있다. 그래서 매수 전에 기존 이행강제금 부과 이력과 앞으로의 시정 가능성을 확인해야 한다. 계약서에는 잔금 전 발생한 부담을 누가 책임질지도 특약으로 남기는 것이 좋다.
양성화 가능하다고 하면 매수해도 될까? &nbsp; 양성화 가능하다는 말만으로 매수하면 위험하다. 관할 구청에서 해당 건축물이 실제로 양성화 대상인지, 어떤 비용과 절차가 필요한지 확인해야 한다. 가능성이 아니라 확인된 사실을 기준으로 판단해야 한다.`}).add({id:71,href:"/posts/private-fund/",title:"사모펀드 뜻과 특징, 장단점까지 한눈에 이해하기",description:"사모펀드의 뜻, 공모펀드와의 차이, 주요 특징, 장점과 단점, 투자 전 확인해야 할 위험 요소를 초보자도 이해하기 쉽게 정리하였다.",content:`사모펀드는 경제 뉴스에서 자주 나오지만, 막상 설명하려고 하면 조금 애매한 투자 상품이다. &ldquo;큰돈을 가진 사람들만 하는 투자&rdquo;, &ldquo;기업을 사고파는 펀드&rdquo;, &ldquo;수익률은 높지만 위험한 상품&quot;처럼 여러 이미지가 섞여 있기 때문이다.
사모펀드를 이해할 때 가장 먼저 잡아야 할 기준은 &ldquo;누구에게 돈을 모으는가&quot;다. 많은 사람에게 공개적으로 판매하는 펀드는 공모펀드이고, 제한된 소수 투자자에게 비공개로 자금을 모아 운용하는 펀드는 사모펀드다.
다만 사모펀드는 구조가 복잡하고, 투자 대상도 주식이나 채권처럼 단순하지 않은 경우가 많다. 그래서 수익 가능성만 보고 접근하기보다, 돈이 얼마나 오래 묶이는지, 손실이 났을 때 감당할 수 있는지, 운용사가 무엇에 투자하는지를 먼저 봐야 한다.
사모펀드란 무엇인가? &nbsp; 사모펀드는 소수의 투자자로부터 자금을 모아 운용하는 펀드다. 여기서 &ldquo;사모&quot;는 공개적으로 모집하지 않는다는 뜻이고, 펀드는 여러 투자자의 돈을 모아 운용하는 구조를 뜻한다.
자본시장법에서는 사모집합투자기구를 집합투자증권을 사모로만 발행하는 집합투자기구로 본다. 현재 제도상 사모펀드는 크게 기관전용 사모집합투자기구와 일반 사모집합투자기구로 구분된다. 예전에는 전문투자형 사모펀드와 경영참여형 사모펀드라는 표현을 많이 썼지만, 지금은 투자자 기준에 따라 나누는 방식으로 이해하는 편이 더 정확하다.
사모펀드는 영어로 private fund라고 부르는 경우가 많고, 기업 인수나 경영 참여를 중심으로 하는 펀드는 PEF(Private Equity Fund)라고 부르기도 한다. 다만 모든 사모펀드가 PEF인 것은 아니다. 어떤 사모펀드는 비상장 기업에 투자하고, 어떤 사모펀드는 부동산, 채권, 메자닌, 인프라, 구조화 상품 등 다양한 자산에 투자한다.
쉽게 말하면 사모펀드는 &ldquo;소수 투자자에게 돈을 모아, 일반 펀드보다 더 넓은 방식으로 투자하는 펀드&quot;라고 볼 수 있다.
공모펀드와 사모펀드의 차이 &nbsp; 사모펀드는 공모펀드와 비교하면 훨씬 이해하기 쉽다. 공모펀드는 은행, 증권사, 앱 등을 통해 일반 투자자에게 공개적으로 판매되는 펀드다. 많은 사람이 가입할 수 있고, 투자설명서와 운용 정보도 비교적 표준화되어 있다.
반면 사모펀드는 제한된 투자자를 대상으로 한다. 가입 요건이 까다롭고, 최소 투자금이 큰 경우가 많으며, 상품 구조도 일반 펀드보다 복잡하다. 운용 전략도 더 자유로운 편이라서 수익 기회가 넓어질 수 있지만, 그만큼 위험도 커질 수 있다.
투자 대상이 더 넓다 &nbsp; 공모펀드는 일반 투자자를 보호해야 하므로 운용 규제가 상대적으로 촘촘하다. 반면 사모펀드는 전문성이 있는 투자자나 기관 투자자를 대상으로 하는 경우가 많기 때문에 비상장주식, 부동산, 인수금융, 사모채권, 구조화 상품처럼 일반 투자자가 직접 접근하기 어려운 자산에도 투자할 수 있다.
예를 들어 아직 상장하지 않은 성장 기업에 투자하거나, 저평가된 기업을 인수한 뒤 구조조정과 경영 개선을 거쳐 가치를 높이는 전략을 쓸 수 있다. 성공하면 높은 수익을 기대할 수 있지만, 예상대로 기업 가치가 오르지 않으면 손실도 커질 수 있다.
환매가 쉽지 않은 경우가 많다 &nbsp; 공모펀드는 상품에 따라 차이가 있지만 비교적 환매가 쉬운 편이다. 반면 사모펀드는 투자 기간이 정해져 있고 중간에 돈을 빼기 어려운 구조가 많다. 비상장 기업이나 부동산처럼 바로 팔기 어려운 자산에 투자하는 경우가 많기 때문이다.
그래서 사모펀드에 투자할 때는 &ldquo;이 돈을 몇 년 동안 쓰지 않아도 되는가&quot;를 먼저 생각해야 한다. 높은 수익률 전망보다 유동성 부족이 실제 생활에는 더 큰 부담이 될 수 있다.
사모펀드의 주요 특징 &nbsp; 사모펀드는 일반 펀드보다 자유롭고 공격적인 운용이 가능하다는 특징이 있다. 하지만 이 자유로움은 장점이 되기도 하고 위험 요인이 되기도 한다.
비공개 시장 중심으로 움직인다 &nbsp; 사모펀드는 공개 시장보다 비공개 시장에서 기회를 찾는 경우가 많다. 상장주식처럼 누구나 가격을 확인하고 사고팔 수 있는 자산보다, 비상장 기업이나 특수한 거래 구조에 투자하는 식이다.
이런 투자는 정보 접근성이 중요하다. 일반 개인이 보기 어려운 기업 자료, 산업 전망, 인수 조건, 재무 구조를 분석해야 하므로 운용사의 역량이 수익률에 큰 영향을 준다.
고위험 고수익 성격이 강하다 &nbsp; 사모펀드는 높은 수익을 목표로 하지만 원금 손실 가능성도 크다. 특히 비상장 기업, 초기 성장 기업, 부실채권, 레버리지 구조가 들어간 투자에서는 시장 상황이 나빠질 때 손실 폭이 커질 수 있다.
여기서 중요한 점은 &ldquo;고수익 가능성&quot;과 &ldquo;고수익 보장&quot;은 완전히 다르다는 것이다. 사모펀드는 은행 예금처럼 원금이 보장되는 상품이 아니며, 운용 결과에 따라 큰 손실이 날 수 있다.
전문가가 운용하지만 결과를 보장하지 않는다 &nbsp; 사모펀드는 전문 운용사가 투자 대상을 고르고 매매 시점과 구조를 설계한다. 개인이 직접 하기 어려운 분석과 협상을 운용사가 대신한다는 점은 분명한 장점이다.
하지만 전문가가 운용한다고 해서 항상 좋은 결과가 나오는 것은 아니다. 운용사의 판단이 틀릴 수 있고, 경기 침체나 금리 상승, 산업 변화처럼 외부 환경이 투자 성과를 크게 흔들 수 있다. 그래서 운용사의 과거 성과, 투자 철학, 위험 관리 방식, 수수료 구조를 함께 봐야 한다.
사모펀드의 장점 &nbsp; 사모펀드가 계속 투자자들의 관심을 받는 이유는 분명하다. 일반적인 예금이나 공모펀드로 접근하기 어려운 투자 기회에 참여할 수 있고, 성공했을 때 기대 수익도 클 수 있기 때문이다.
높은 수익을 기대할 수 있다 &nbsp; 사모펀드는 저평가된 기업을 발굴하거나, 성장 가능성이 큰 비상장 기업에 투자하거나, 시장에서 잘 거래되지 않는 자산을 싸게 매입하는 전략을 쓸 수 있다. 이런 전략이 맞아떨어지면 상장주식이나 채권보다 높은 수익률을 낼 수 있다.
예를 들어 한 기업이 일시적으로 실적 부진을 겪고 있지만 본업 경쟁력은 살아 있다고 판단되면, 사모펀드가 지분을 인수해 비용 구조를 개선하고 사업 방향을 조정할 수 있다. 이후 기업 가치가 올라가면 지분을 매각해 수익을 얻는 방식이다.
포트폴리오를 넓힐 수 있다 &nbsp; 사모펀드는 주식과 채권만으로 구성된 포트폴리오에 다른 성격의 자산을 더할 수 있다. 부동산, 인프라, 사모대출, 비상장주식 같은 자산은 상장 시장과 다르게 움직일 때가 있어 분산 효과를 기대할 수 있다.
물론 단순히 종류가 다르다고 해서 자동으로 분산투자가 되는 것은 아니다. 같은 경기 침체에 함께 흔들릴 수도 있고, 레버리지나 환율 변동이 숨어 있을 수도 있다. 그래도 제대로 설계된 사모펀드는 투자 선택지를 넓혀준다는 장점이 있다.
운용사의 전문 전략을 활용할 수 있다 &nbsp; 사모펀드는 개인이 직접 하기 어려운 전략을 활용할 수 있다. 기업 실사, 경영진 협상, 자금 조달 구조 설계, 인수합병, 구조조정 같은 영역은 일반 투자자가 혼자 접근하기 어렵다.
이런 부분에서 운용사의 경험과 네트워크가 강점이 된다. 특히 기관투자자들은 장기 자금을 운용하면서 사모펀드를 대체투자의 한 축으로 활용하기도 한다.
사모펀드의 단점과 주의할 점 &nbsp; 사모펀드는 장점만큼 단점도 뚜렷하다. 특히 초보 투자자라면 &ldquo;수익률이 높다&quot;는 설명보다 &ldquo;어떤 상황에서 돈을 잃을 수 있는가&quot;를 먼저 확인해야 한다.
원금 손실 위험이 크다 &nbsp; 사모펀드는 예금자보호 대상이 아니며 원금 보장 상품도 아니다. 투자한 기업이 실패하거나, 부동산 가격이 하락하거나, 금리가 올라 자금 조달 비용이 커지면 손실이 발생할 수 있다.
비상장 자산은 가격을 매일 확인하기 어렵기 때문에 손실이 늦게 드러나는 경우도 있다. 장부상 평가금액은 괜찮아 보여도 실제 매각할 때 가격이 크게 낮아질 수 있다.
자금이 오래 묶일 수 있다 &nbsp; 사모펀드의 가장 현실적인 단점은 유동성 부족이다. 투자 기간이 3년, 5년, 그 이상으로 길어질 수 있고, 중간 환매가 제한되거나 사실상 불가능한 경우도 있다.
생활비, 전세자금, 대출 상환 자금처럼 일정 시점에 꼭 필요한 돈을 사모펀드에 넣는 것은 위험하다. 사모펀드는 여유자금 중에서도 장기간 묶여도 괜찮은 돈으로만 검토해야 한다.
수수료가 높을 수 있다 &nbsp; 사모펀드는 운용보수와 성과보수가 붙는 경우가 많다. 성과가 좋으면 운용사도 일정 비율의 보수를 가져가는 구조다. 운용사가 열심히 성과를 내도록 유도한다는 장점도 있지만, 투자자 입장에서는 실제 손에 남는 수익률이 줄어들 수 있다.
그래서 예상 수익률만 보지 말고 수수료를 차감한 뒤의 수익률을 봐야 한다. 특히 성과보수 기준, 손실 발생 후 보수 계산 방식, 조기 청산 비용 같은 조건은 반드시 확인해야 한다.
불완전판매와 운용 투명성 문제를 조심해야 한다 &nbsp; 과거 국내외 사모펀드 사례를 보면, 투자자가 상품 구조를 충분히 이해하지 못한 상태에서 가입하거나, 운용 자산의 위험이 제대로 설명되지 않아 문제가 된 경우가 있었다. 일부 기업 인수형 사모펀드는 구조조정, 배당, 자산 매각 과정에서 &ldquo;먹튀&rdquo; 논란이 생기기도 했다.
다만 모든 사모펀드를 한꺼번에 부정적으로 볼 필요는 없다. 핵심은 해당 펀드가 무엇에 투자하는지, 운용사가 어떤 방식으로 수익을 내는지, 손실이 났을 때 책임 구조가 어떻게 되는지 확인하는 것이다. 설명이 지나치게 복잡하거나 &ldquo;안전하면서 고수익&quot;처럼 말한다면 더 신중해야 한다.
사모펀드 투자 전 확인할 것 &nbsp; 사모펀드는 초보자가 쉽게 접근할 상품은 아니다. 그래도 구조를 이해하고 검토해야 하는 상황이라면 최소한 다음 항목은 확인해야 한다.
첫째, 투자 대상이 무엇인지 봐야 한다. 비상장 기업인지, 부동산인지, 채권인지, 해외 자산인지에 따라 위험이 완전히 달라진다.
둘째, 투자 기간과 환매 조건을 확인해야 한다. 언제 돈을 돌려받을 수 있는지, 중간 환매가 가능한지, 환매가 가능하더라도 불이익이 있는지 봐야 한다.
셋째, 운용사의 경험과 과거 성과를 봐야 한다. 단순히 높은 수익률만 볼 것이 아니라, 손실이 났던 기간에 어떻게 대응했는지도 중요하다.
넷째, 수수료 구조를 확인해야 한다. 운용보수, 판매보수, 성과보수, 기타 비용을 모두 고려해야 실제 수익률을 판단할 수 있다.
다섯째, 내 자금 성격과 맞는지 봐야 한다. 사모펀드는 단기 생활자금으로 투자할 상품이 아니다. 손실이 나도 생활이 흔들리지 않는 여유자금인지가 가장 중요한 기준이다.
정리 &nbsp; 사모펀드는 소수 투자자로부터 자금을 모아 비교적 자유로운 전략으로 운용하는 펀드다. 비상장 기업, 부동산, 사모채권, 인프라, 기업 인수 같은 다양한 투자 기회에 접근할 수 있어 높은 수익을 기대할 수 있지만, 그만큼 손실 위험과 유동성 부족도 크다.
사모펀드를 볼 때는 &ldquo;고수익 상품&quot;이라는 말보다 &ldquo;왜 수익이 날 수 있는지&quot;와 &ldquo;어떤 경우 손실이 날 수 있는지&quot;를 먼저 봐야 한다. 투자 구조가 이해되지 않거나, 환매 조건이 불리하거나, 위험 설명이 부족하다면 가입하지 않는 편이 낫다.
결국 사모펀드는 누구에게나 맞는 상품이 아니다. 장기 투자 여력이 있고, 손실 가능성을 감당할 수 있으며, 상품 구조를 충분히 이해한 투자자에게만 검토할 만한 선택지다.
자주 묻는 질문 &nbsp; 사모펀드와 PEF는 같은 뜻인가? &nbsp; 완전히 같은 뜻은 아니다. PEF는 보통 기업 지분에 투자하거나 경영에 참여하는 사모투자펀드를 가리킬 때 많이 쓴다. 사모펀드는 더 넓은 개념이라서 부동산, 채권, 구조화 상품 등 다양한 자산에 투자하는 펀드까지 포함할 수 있다.
개인도 사모펀드에 투자할 수 있는가? &nbsp; 상품 구조와 투자자 요건에 따라 가능할 수 있지만, 일반적인 공모펀드처럼 누구나 쉽게 가입하는 상품은 아니다. 최소 투자금, 투자자 적격성, 위험 설명 확인 등 여러 조건이 붙을 수 있다.
사모펀드는 원금이 보장되는가? &nbsp; 보장되지 않는다. 사모펀드는 투자 상품이므로 운용 결과에 따라 원금 손실이 발생할 수 있다. 예금자보호 대상도 아니므로 원금 보장을 기대하고 가입하면 안 된다.
사모펀드가 위험한 이유는 무엇인가? &nbsp; 투자 대상이 복잡하고, 비상장 자산처럼 가격 확인이 어려운 자산에 투자하는 경우가 많으며, 자금이 오래 묶일 수 있기 때문이다. 수익 가능성이 큰 만큼 손실 가능성과 환매 제한도 함께 봐야 한다.`}).add({id:72,href:"/posts/samsung-electro-mechanics-ai-components/",title:"삼성전기, AI 부품 대형 수주와 MLCC·FC-BGA...",description:"삼성전기가 1.5조원대 실리콘 커패시터 공급계약과 AI 서버용 MLCC·FC-BGA 수요 확대로 주가와 실적 기대가 동시에 재평가되고 있다.",content:`주요 내용 &nbsp; 삼성전기 이슈의 중심은 AI 서버용 고부가 부품이다. 2026년 5월 20일 회사가 약 1조 5,000억 원 규모의 실리콘 커패시터 공급계약을 발표하면서, 기존 MLCC와 FC-BGA 중심의 성장 기대에 새로운 축이 더해졌다.
최근 기사 범위는 2026년 5월 14일부터 5월 21일까지이며, 1분기 실적 수치는 삼성전기의 2026년 4월 30일 공식 발표를 함께 참고했다. 핵심은 &ldquo;AI 서버와 고성능 반도체 패키징이 커질수록 삼성전기가 공급할 수 있는 부품의 단가와 기술 난도가 같이 올라간다&quot;는 점이다.
주요 트렌드 &nbsp; AI 서버용 GPU, HBM, NPU 등 고성능 반도체 패키지에서 전력 안정성과 신호 무결성이 중요해지며 실리콘 커패시터와 고부가 MLCC 수요가 부각되고 있다. 삼성전기는 MLCC, FC-BGA, 실리콘 커패시터를 함께 보유한 구조라서 단일 부품사가 아니라 AI 패키징 부품 포트폴리오 기업으로 평가받기 시작했다. 증권가는 2027년 이후 실리콘 커패시터 매출 반영과 FC-BGA 가격 상승 가능성을 근거로 목표주가를 빠르게 올리고 있다. 주가가 단기간 급등하면서 실적 기대와 밸류에이션 부담이 동시에 커졌다. 핵심 이슈 &nbsp; 삼성전기는 글로벌 대형 기업과 2027년 1월 1일부터 2028년 12월 31일까지 2년간 실리콘 커패시터를 공급하는 계약을 체결했다. 계약 규모는 보도와 공시 기준으로 약 1조 5,000억~1조 5,570억 원 수준이며, 계약 상대방은 비밀유지 조건으로 공개되지 않았다. 실리콘 커패시터는 AI 서버용 GPU와 HBM 등 고성능 반도체 패키지 안에서 전력 공급을 안정화하는 부품이다. 삼성전기의 2026년 1분기 매출은 3조 2,091억 원, 영업이익은 2,806억 원으로 창사 이래 분기 매출 3조 원을 처음 넘어섰다. 패키지솔루션 부문은 AI 가속기·서버 CPU·네트워크용 FC-BGA 공급 확대로 1분기 매출이 전년 동기 대비 45% 증가했다. 시장 영향 &nbsp; 단기적으로는 대형 공급계약과 증권사 목표주가 상향이 주가 상승을 자극했다. 2026년 5월 21일 장 초반 삼성전기 주가는 120만 원을 돌파하며 사상 최고가를 새로 썼다는 보도가 나왔다. 중기적으로는 실리콘 커패시터가 삼성전기의 수익성 높은 신사업으로 자리 잡을지가 관건이다. 일부 증권사는 범용 MLCC보다 높은 단가와 2027년 이후 본격 매출 기여 가능성을 강조했다. 산업적으로는 AI 서버 투자 확대가 MLCC와 FC-BGA 수급을 동시에 밀어 올리는 구조다. 데이터센터용 고성능 기판, 전장용 부품, 전력 안정화 부품이 함께 성장하면서 삼성전기의 사업 조합이 재평가되고 있다. 다만 주가 급등 이후에는 계약의 실제 매출 인식 시점, 고객사 확대 속도, 수율, 경쟁사 대응, AI 투자 사이클 둔화 여부가 리스크로 남는다. 향후 전망 &nbsp; 2026년 하반기에는 AI 서버와 데이터센터용 고부가 MLCC, FC-BGA 수요가 계속 강한지가 실적의 핵심 확인 포인트가 될 가능성이 크다. 실리콘 커패시터 공급계약은 2027년부터 본격 반영되는 구조라서, 단기 실적보다 중장기 성장성을 앞당겨 반영한 재료에 가깝다. 삼성전기가 추가 고객사를 확보하거나 MLCC·FC-BGA 장기공급계약으로 확장할 경우, 시장은 삼성전기를 전통 전자부품주보다 AI 인프라 부품주로 더 강하게 평가할 수 있다. 반대로 주가가 이미 기대를 크게 반영한 만큼, 신규 수주 공백이나 가격 인상 지연, 생산능력 확대 지연이 나오면 변동성도 커질 수 있다. 주요 뉴스 &nbsp; 2026-05-20 삼성전기: 글로벌 대형기업과 1.5조 규모 실리콘 캐패시터 공급계약 체결
삼성전기는 글로벌 대형 기업을 대상으로 약 1조 5,000억 원 규모의 실리콘 커패시터 공급계약을 체결했다고 발표했다. 계약 기간은 2027년 1월 1일부터 2028년 12월 31일까지이며, 회사는 이를 AI 반도체 핵심 공급망 진입의 성과로 설명했다.
2026-05-21 조선비즈: 삼성전기, 1.5조원 실리콘 캐패시터 공급 계약 소식에 120만원 돌파
조선비즈는 삼성전기가 2026년 5월 21일 장 초반 120만 원을 넘어서며 사상 최고가를 경신했다고 보도했다. 주가 상승 배경으로 1조 5,570억 원 규모 실리콘 커패시터 공급계약과 증권가의 성장 기대를 짚었다.
2026-05-21 동아일보: 삼성전기, 美서 AI 반도체 핵심부품 1.5조 잭팟
동아일보는 이번 계약을 AI 반도체 전력 안정화 핵심 부품의 대량 공급계약으로 정리했다. 실리콘 커패시터가 GPU와 HBM 등 고성능 반도체 내부에서 전력 변동을 완화하는 역할을 하며, 기존에는 소수 업체가 시장을 과점해왔다는 점도 설명했다.
2026-05-21 머니투데이: 1.5조 공급계약 잭팟, 삼성전기 120만원 돌파 신고가
머니투데이는 계약 규모가 삼성전기 지난해 연결 매출의 13.8%에 해당한다고 보도했다. iM증권 분석을 인용해 2027년과 2028년에 나누어 매출이 반영될 가능성과 AI 서버용 MLCC 장기공급계약 확장 가능성을 다뤘다.
2026-05-20 ZDNet Korea: 삼성전기, 글로벌 고객사와 실리콘 커패시터 1.5조원 공급계약 체결
ZDNet Korea는 실리콘 커패시터의 기술적 의미를 중심으로 보도했다. AI 서버용 패키지가 커지고 층수가 늘어나면서 전력 안정성과 신호 무결성이 중요해졌고, 삼성전기는 MLCC와 패키지기판 역량을 바탕으로 공급망 진입에 성공했다고 분석했다.
2026-05-21 뉴스핌: 삼성전기, 실리콘 커패시터 공급계약 코멘트 목표가 160만원
뉴스핌은 DB증권 리포트를 인용해 삼성전기의 목표주가가 160만 원으로 제시됐다고 전했다. DB증권은 실리콘 커패시터 매출 증분과 MLCC 단가 인상 가능성을 반영해 추정치를 높였고, 삼성전기를 업종 내 최선호주로 유지했다.
2026-05-21 매일경제: 삼성전기 목표가 105만에서 160만원
매일경제는 DB증권과 KB증권의 목표주가 상향을 함께 정리했다. 기사에서는 실리콘 커패시터의 평균판매단가가 범용 MLCC보다 높게 추정되고, 삼성전기가 설계와 테스트 중심으로 사업을 운영하면 추가 설비투자 부담을 줄일 수 있다는 분석을 소개했다.
2026-05-21 데이터뉴스: 삼성전기, AI·전장 호조에 최대 매출
데이터뉴스는 삼성전기의 2026년 1분기 매출이 3조 2,091억 원, 영업이익이 2,806억 원으로 증가한 배경을 분석했다. 패키지솔루션 부문의 FC-BGA와 컴포넌트 부문의 AI·전장용 MLCC가 실적 개선을 이끌었고, AI 서버용 MLCC 수급 개선도 긍정적 요인으로 제시했다.
2026-04-30 삼성전기: 2026년 1분기 경영실적
삼성전기는 2026년 1분기 연결 기준 매출 3조 2,091억 원, 영업이익 2,806억 원을 기록했다고 발표했다. 회사는 AI 서버·ADAS용 MLCC와 AI 가속기·서버 CPU용 FC-BGA 공급 확대가 실적 개선에 기여했다고 설명했다.
한줄 요약 &nbsp; 삼성전기는 실리콘 커패시터 대형 수주를 계기로 MLCC·FC-BGA를 묶은 AI 인프라 부품주로 재평가받고 있지만, 주가에는 이미 상당한 성장 기대가 반영되기 시작했다.`}).add({id:73,href:"/news/2026/samsung-union-strike/",title:"삼성전자 총파업 유보, 노사 잠정합의와 반도체 공급망 ...",description:"삼성전자 노사가 5월 20일 밤 잠정합의안을 마련하며 21일 총파업을 유보했다. 찬반투표 일정과 반도체 공급망 변수를 정리한다.",content:`이번 브리핑은 2026년 5월 18일부터 5월 20일까지 나온 삼성전자 노사 사후조정, 총파업 예고, 막판 잠정합의, 성과급 배분 갈등, 반도체 공급망 관련 보도를 중심으로 정리했다.
주요 내용 &nbsp; 삼성전자 노사는 2026년 5월 18일부터 20일까지 중앙노동위원회 2차 사후조정을 이어갔지만 20일 오전에는 최종 합의에 이르지 못했다. 이에 노조는 5월 21일부터 6월 7일까지 18일간 총파업에 돌입하겠다고 밝혔다. 그러나 20일 밤 정부 중재 이후 노사가 임금협약 잠정합의안을 마련하면서, 노조는 5월 21일~6월 7일 총파업을 추후 별도 지침까지 유보한다고 공지했다. 조합원 찬반투표는 복수 보도 기준 5월 22일 오후 2시부터 5월 27일 오전 10시까지 진행될 예정이다. 잠정합의안이 가결되면 초유의 반도체 총파업은 일단 피하게 된다. 쟁점은 성과급 제도화, 성과급 상한 폐지, 반도체 DS 부문 내 사업부별 배분 방식이다. 특히 메모리 사업부와 파운드리·시스템LSI 등 적자 사업부 사이의 보상 격차를 어떻게 처리할지가 막판 쟁점으로 부각됐다. 국내 보도는 노조가 총파업 시 약 5만명 참여를 예상한다고 전했고, AP는 노조가 7만명 이상을 대표한다고 보도했다. 다만 파업 유보로 당장의 생산 차질 우려는 완화됐다. 수원지법의 가처분 판단으로 시설 점거, 출입 방해, 설비 안전·품질 유지를 해칠 수 있는 방식의 파업은 제한될 수 있다는 보도도 나왔다. 향후 합의안이 부결되더라도 실제 생산 영향은 참여율, 필수 인력, 법적 제한에 따라 달라질 수 있다. 이번 갈등은 단순 임금 인상보다 AI 반도체 호황의 이익 배분, 인재 유출 방지, 사업부별 성과 책임 원칙이 충돌한 사안으로 해석된다. 주요 트렌드 &nbsp; AI와 HBM 수요가 커지면서 반도체 인력 보상이 기업 경쟁력의 핵심 변수로 올라섰다. 성과급 논쟁이 일회성 지급액보다 산식의 제도화, 상한선, 영업이익 연동 구조로 이동하고 있다. 메모리 호황과 파운드리·시스템LSI 부진이 같은 DS 부문 안에서 보상 형평성 논쟁을 키우고 있다. 정부 중재로 총파업은 유보됐지만, 조합원 투표 결과에 따라 노사 갈등이 다시 산업 정책 리스크로 번질 수 있다. 핵심 이슈 &nbsp; 노조는 반도체 부문 영업이익을 성과급 재원과 더 직접적으로 연결하고, 사업부 간 보상 격차를 줄이는 방향을 요구해왔다. 사측은 적자 사업부에까지 고액 보상을 보장하면 성과에 따른 보상 원칙과 투자 판단이 흔들릴 수 있다고 본다. 잠정합의안의 구체 문구와 사업부별 성과급 배분 방식이 조합원 투표에서 얼마나 수용될지가 첫 번째 변수다. 총파업은 유보됐지만 철회가 아니라 유보다. 합의안이 부결되면 파업 가능성과 생산 차질 우려가 다시 부각될 수 있다. 시장 영향 &nbsp; 단기적으로는 총파업 리스크가 낮아지며 삼성전자와 국내 반도체 대형주 투자심리에 부담을 덜어주는 재료가 될 수 있다. 실제 생산 차질 우려가 완화되면 D램, 낸드, HBM 공급 일정에 민감한 고객사와 장비·소재 협력사의 불확실성도 일부 줄어든다. 다만 합의안이 가결되더라도 성과급 제도 변화와 인건비 부담은 향후 실적 추정과 조직 운영의 변수로 남는다. 합의안 부결 시 시장은 파업 참여 규모, 핵심 라인 운영, 정부 추가 중재 여부를 다시 확인하게 될 가능성이 크다. 향후 전망 &nbsp; 1차 관전 포인트는 2026년 5월 22일부터 27일까지 진행되는 조합원 찬반투표 결과다. 2차 관전 포인트는 잠정합의안에 성과급 산식, 상한, 적자 사업부 보상 기준이 어느 수준으로 담겼는지다. 투표가 가결되면 노사 갈등은 임금협약 마무리 국면으로 이동하겠지만, DS 부문 내 보상 형평성 논쟁은 다음 임단협에서도 반복될 수 있다. 투표가 부결되면 5월 말~6월 초 파업 재개 가능성, 고객사 재고 확보, 경쟁사 반사이익 기대, 정부 추가 중재가 함께 시장 변수로 떠오를 수 있다. 주요 뉴스 &nbsp; 2026-05-20 AP: Samsung&rsquo;s union puts off strike after reaching wage deal with company
AP는 삼성전자 노조가 사측과 막판 잠정합의에 이르러 예정된 파업을 유보하고 합의안을 조합원 투표에 부치기로 했다고 보도했다. 최승호 노조위원장은 18일간의 파업을 진행하지 않기로 했고, 조합원 투표는 5월 22일부터 27일까지 진행된다고 설명했다.
2026-05-20 조선비즈: 삼성전자 노조 &ldquo;총파업 유보&hellip;잠정합의안 찬반투표 실시&rdquo;
조선비즈는 삼성그룹 초기업노조 삼성전자지부가 5월 21일부터 6월 7일까지 예정했던 총파업을 별도 지침 시까지 유보한다고 공지했다고 전했다. 노조는 전 조합원에게 5월 22일 오후 2시부터 27일 오전 10시까지 임금협약 잠정합의안 찬반투표에 참여하라고 안내했다.
2026-05-20 동아일보: 삼전, 파국 피했다&hellip;노사, 총파업 90분 전 잠정 합의
동아일보는 노사가 파업 예정 시점을 약 90분 앞두고 잠정합의안을 마련했다고 보도했다. 기사에 따르면 20일 오전까지는 성과급 지급 여부를 둘러싼 이견으로 사후조정이 불성립됐지만, 노동부 장관 중재 아래 추가 교섭이 이뤄지며 파국은 일단 피했다.
2026-05-20 SBS: 삼성 노조 &ldquo;총파업 유보&hellip;잠정합의안 찬반투표 실시&rdquo;
SBS는 삼성전자 노조 공동투쟁본부가 5월 21일~6월 7일 총파업을 추후 별도 지침까지 유보한다고 공지했다고 전했다. 찬반투표 일정도 5월 22일 오후 2시부터 27일 오전 10시까지로 안내됐다고 보도했다.
2026-05-20 연합뉴스: 삼성 노조 &ldquo;조정안 수용했지만 사측이 거부&hellip;총파업 돌입&rdquo;
연합뉴스는 삼성그룹 초기업노조 삼성전자지부가 중노위 조정안을 수용했지만 사측이 거부했다며 21일 총파업 돌입을 선언했다고 전했다. 이 보도는 20일 오전 사후조정 불성립 직후의 국면을 보여준다.
2026-05-20 조선비즈: 삼성전자 노조 &ldquo;예정대로 총파업 돌입&rdquo;&hellip;사측 &ldquo;과도한 요구 수용 불가&rdquo;
조선비즈는 중노위 2차 사후조정이 불성립됐고, 노조가 예정대로 총파업에 들어가겠다고 밝혔다고 보도했다. 삼성전자는 노조 요구가 적자 사업부 보상까지 포함해 회사의 성과 보상 원칙을 흔들 수 있다며 수용하기 어렵다는 입장을 냈다.
2026-05-20 뉴스핌: 중노위 조정안 사측 거부&hellip;삼성전자 노조, 21일 총파업 돌입
뉴스핌은 노조가 5월 21일부터 6월 7일까지 총 18일간 파업을 강행할 계획이라고 전했다. 기사에서는 이번 사후조정의 핵심 쟁점이 DS 부문 내 적자 사업부에 대한 성과급 배분 수준이었다고 짚었다.
2026-05-20 이투데이: 삼성 노사 끝내 결렬&hellip;노조 &ldquo;총파업 강행&rdquo; vs 사측 &ldquo;과도한 요구 수용 못해&rdquo;
이투데이는 중노위가 조정안을 제시했지만 노조만 수락하고 사측이 수용하지 않으면서 2차 사후조정이 불성립됐다고 전했다. 양측 모두 파업 기간에도 협상 여지를 남겼지만, 성과급 제도와 지급 기준을 둘러싼 장기 갈등은 이어지고 있다.
2026-05-20 한겨레: 삼성전자 노조 &ldquo;내일 총파업&rdquo;&hellip;중노위 조정 최종 결렬
한겨레는 18일부터 사흘간 이어진 사후조정이 끝내 합의에 이르지 못했고, 노조가 21일 파업 돌입을 선언했다고 보도했다. 노조는 사측이 최종 입장을 밝히지 않았다고 설명했고, 성과급 배분 문제가 갈등의 핵심으로 제시됐다.
2026-05-18 Tom&rsquo;s Hardware: Samsung meeting transcripts show memory workers offered 607% bonus
Tom&rsquo;s Hardware는 로이터가 입수한 협상 자료를 인용해 메모리 사업부와 파운드리·시스템LSI 사업부 사이의 제안 보상률 격차가 컸다고 전했다. 이 보도는 파업의 배경이 단순 총액 문제가 아니라 사업부별 성과급 배분과 인재 유출 우려라는 점을 보여준다.
2026-05-18 Tom&rsquo;s Hardware: Samsung granted court injunction against imminent strike action
Tom&rsquo;s Hardware는 파이낸셜타임스를 인용해 수원지법이 파업 방식 일부를 제한하는 가처분을 일부 인용했다고 보도했다. 보도에 따르면 안전, 설비 손상 방지, 품질 유지를 위한 필수 인력은 유지돼야 하고 시설 점거·봉쇄·출입 방해는 제한된다.
한줄 요약 &nbsp; 삼성전자 노사는 5월 20일 오전 결렬 후 같은 날 밤 잠정합의안을 마련해 21일 총파업을 유보했으며, 시장의 다음 관심은 5월 22~27일 조합원 찬반투표 결과와 성과급 제도 변화로 이동했다.`}).add({id:74,href:"/posts/samsung-securities-isa-event/",title:"삼성증권 중개형 ISA 개설 이벤트 혜택 정리: 신규·...",description:"삼성증권 중개형 ISA 이벤트의 기간, 신규 개설 혜택, 타사 ISA 이전 금액 2배 인정, 국내주식 첫 거래 혜택과 주의사항을 쉽게 정리했다.",content:`요즘 ISA 계좌 하나쯤은 다들 고민한다. 절세에 좋다는 건 알겠는데, 막상 만들려고 하면 증권사도 많고 이벤트도 자주 바뀌어서 언제 개설해야 할지 애매하다.
나도 ISA 만기가 다가오면서 증권사 이벤트를 찾아보다가 삼성증권 중개형 ISA 이벤트를 보게 되었다. 조건을 보니 신규 개설자, 기존 고객, 타사 ISA 이전을 고민하는 사람에게 각각 볼 만한 포인트가 있었다.
다만 먼저 분명히 해둘 점이 있다. 이 글은 삼성증권 ISA 계좌 개설 추천이나 투자 권유가 아니다. 계좌 개설 여부, 이벤트 참여 여부, 투자 여부는 모두 본인이 직접 판단해야 한다. 그리고 모든 증권사 이벤트를 비교한 것이 아니므로 다른 증권사에 더 좋은 조건이 있을 가능성도 있다.
이번 글에서는 2026년 5월 1일부터 2026년 7월 31일까지 진행되는 삼성증권 중개형 ISA 이벤트를 기준으로, 어떤 사람이 어떤 혜택을 볼 수 있는지 초보자도 이해하기 쉽게 정리했다.
삼성증권 중개형 ISA 이벤트에 들어가서 ISA로 검색 &nbsp; 삼성증권 중개형 ISA 이벤트 핵심 요약 &nbsp; 내용이 조금 많아서 핵심만 먼저 보면 이렇다.
구분 내용 이벤트 기간 2026년 5월 1일 ~ 2026년 7월 31일 대상 계좌 삼성증권 중개형 ISA 주요 대상 신규 개설 고객, 기존 보유 고객, 타사 ISA 이전 고객 주요 혜택 이마트·GS 상품권 핵심 포인트 타사 ISA 이전 금액은 순입금액 산정 시 2배 인정 최대 혜택 조건 충족 시 최대 60만 원 상품권 가능 이번 이벤트에서 가장 눈에 띄는 부분은 단순히 계좌를 새로 만드는 사람만 보는 이벤트가 아니라는 점이다. 이미 ISA를 갖고 있거나, 다른 증권사 ISA를 삼성증권으로 옮길 생각이 있는 사람도 혜택 대상에 들어갈 수 있다.
특히 타사 ISA 이전 금액을 2배로 인정하는 조건은 금액이 큰 사람에게 체감 혜택이 커질 수 있다. 예를 들어 타사 ISA에서 5,000만 원을 이전하면 이벤트 산정 기준에서는 1억 원으로 인정되는 구조다.
중개형 ISA가 왜 이벤트 대상이 될까 &nbsp; ISA는 개인종합자산관리계좌다. 쉽게 말하면 예금, 펀드, ETF, 국내 상장주식 같은 금융상품을 한 계좌 안에서 운용하고 일정 부분 세제 혜택을 받을 수 있는 절세 계좌다.
중개형 ISA는 그중에서도 투자자가 직접 국내 상장주식, ETF, 채권형 상품 등을 골라 운용할 수 있는 형태다. 그래서 예금 위주로 돈을 넣어두는 계좌라기보다 장기 투자용 절세 계좌에 가깝다.
ISA가 인기 있는 이유는 세금 때문이다. 일반 계좌에서 금융상품으로 이익이 나면 배당소득세나 이자소득세가 붙는다. 반면 ISA는 일정 한도까지 비과세 혜택이 있고, 비과세 한도를 넘는 이익도 일반 과세보다 낮은 세율로 분리과세되는 구조다.
다만 ISA는 무조건 좋다고만 볼 수는 없다. 의무 가입 기간, 납입 한도, 투자상품 손실 가능성, 중도 해지 시 불이익 등을 같이 봐야 한다. 이벤트 상품권만 보고 계좌를 만들기보다는 본인의 투자 기간과 자금 계획에 맞는지 먼저 따져봐야 한다.
신규 고객이 볼 수 있는 웰컴 이벤트 &nbsp; 중개형 ISA를 처음 만드는 사람이라면 가장 먼저 웰컴 이벤트를 확인하면 된다. 입력 자료 기준으로 이번 이벤트는 중개형 ISA 신규 개설 후 일정 금액을 순입금하면 상품권 혜택을 받을 수 있는 구조다.
조건 혜택 중개형 ISA 신규 개설 기본 조건 이벤트 인정 기간 내 100만 원 이상 1,000만 원 미만 순입금 이마트·GS 상품권 1만 원 신규 고객 입장에서는 조건이 비교적 단순하다. ISA를 처음 시작하려고 했던 사람이라면 100만 원 이상을 넣는 것만으로도 작은 혜택을 받을 수 있다.
다만 여기서 중요한 점은 &ldquo;신규&rdquo; 기준이다. 과거에 ISA를 만들었다가 폐쇄하고 다시 개설하는 경우, 이벤트에서 말하는 최초 신규 고객으로 인정되지 않을 수 있다. 이런 조건은 증권사 이벤트마다 다르게 적용될 수 있으니 신청 전에 이벤트 유의사항을 반드시 봐야 한다.
또 순입금은 단순 입금액과 다를 수 있다. 입금했다가 다시 출금하면 순입금액이 줄어들 수 있고, 잔고 유지 조건이 붙을 수도 있다. 이벤트 혜택을 생각한다면 입금 금액뿐 아니라 유지 기간도 같이 확인해야 한다.
타사 ISA 이전 고객이 특히 봐야 할 레벨업 이벤트 &nbsp; 이번 이벤트의 핵심은 레벨업 이벤트다. 삼성증권 중개형 ISA 계좌에 순입금한 금액이 커질수록 상품권 혜택도 커지는 방식이다.
입력 자료와 공개된 이벤트 안내를 기준으로 보면, 순입금액 구간에 따라 상품권이 단계적으로 지급되고 최대 60만 원까지 가능하다. 특히 중요한 조건은 타사 ISA 이전 금액을 2배로 인정한다는 점이다.
예를 들어보자.
실제 이전 금액 이벤트 산정 기준 1,000만 원 2,000만 원 3,000만 원 6,000만 원 5,000만 원 1억 원 1억 원 2억 원 타사 ISA에서 삼성증권 ISA로 옮기는 사람은 같은 돈을 입금해도 이벤트 산정 금액이 더 크게 잡힐 수 있다. 그래서 이미 ISA를 운용 중이고, 만기나 이전을 고민하던 사람에게는 신규 개설자보다 더 큰 혜택이 생길 수 있다.
다만 ISA 이전은 단순히 상품권만 보고 결정할 문제는 아니다. 기존 증권사에서 보유 중인 상품, 매도 필요 여부, 이전 처리 기간, 수수료, 투자 편의성, 모바일 앱 사용성까지 같이 봐야 한다. 특히 ETF나 주식처럼 가격이 움직이는 자산을 보유하고 있다면 이전 과정에서 예상하지 못한 불편이 생길 수 있다.
그래서 큰 금액을 옮길 계획이라면 이벤트 페이지의 구간별 지급 조건을 확인하고, 삼성증권 고객센터나 앱 안내에서 이전 절차를 한 번 더 확인하는 편이 좋다.
국내주식 첫 거래 이벤트도 함께 확인하자 &nbsp; 중개형 ISA를 처음 만드는 사람이라면 국내주식 첫 거래 이벤트도 같이 볼 만하다. 입력 자료 기준 조건은 다음과 같다.
조건 혜택 중개형 ISA 최초 신규 고객 기본 조건 중개형 ISA 계좌에서 국내주식 100만 원 이상 온라인 거래 이마트·GS 상품권 5,000원 여기서 국내주식은 코스피, 코스닥 상장 주식뿐 아니라 이벤트 기준에 따라 ETF나 ETN이 포함될 수 있다. 거래 금액은 매수와 매도 금액을 합산해서 계산되는 방식으로 안내되는 경우가 많다.
하지만 상품권 5,000원을 받기 위해 필요 없는 거래를 하는 것은 좋지 않다. 주식은 거래하는 순간 가격 변동 위험이 생기고, 매수·매도 과정에서 수수료와 세금도 고려해야 한다. 원래 ISA 안에서 국내 ETF나 주식을 살 계획이 있던 사람이라면 부가 혜택으로 보면 되고, 투자 계획이 없다면 굳이 거래를 만들 필요는 없다.
이벤트 혜택은 작고 투자 손실은 클 수 있다. 이벤트는 투자 결정을 보조하는 요소일 뿐, 투자 이유가 되어서는 안 된다.
이벤트 참여 전에 꼭 확인할 주의사항 &nbsp; ISA 이벤트는 겉으로 보면 단순해 보이지만, 실제로는 유의사항이 많다. 아래 항목은 참여 전에 꼭 확인해야 한다.
이벤트 신청을 해야 하는지 확인한다 &nbsp; 증권사 이벤트는 계좌 개설만으로 자동 참여되는 경우도 있고, 이벤트 페이지에서 &ldquo;신청하기&quot;를 눌러야 참여되는 경우도 있다. 혜택 조건을 모두 채웠는데 신청을 안 해서 제외되면 아깝다.
삼성증권 앱이나 홈페이지에서 이벤트 상세 페이지에 들어가 참여 신청 여부를 먼저 확인하는 것이 좋다.
순입금액과 잔고 유지 조건을 구분한다 &nbsp; 이벤트에서 말하는 순입금액은 단순히 입금한 금액이 아니다. 일정 기간 동안 입금액에서 출금액을 뺀 금액으로 계산될 수 있다. 또 혜택 지급 전까지 순입금액 이상의 잔고를 유지해야 하는 조건이 붙을 수 있다.
예를 들어 1,000만 원을 넣었다가 중간에 500만 원을 출금하면 순입금액 기준이 달라질 수 있다. 이벤트 혜택을 노린다면 입금 후 언제까지 잔고를 유지해야 하는지 확인해야 한다.
중복 지급 여부를 확인한다 &nbsp; 이벤트가 여러 개로 나뉘어 있으면 모두 받을 수 있을 것처럼 보이지만, 실제로는 일부 이벤트만 중복 가능하거나 고객별 최대 혜택 하나만 지급되는 구조일 수 있다.
신규 개설 혜택, 레벨업 혜택, 국내주식 첫 거래 혜택이 각각 어떤 방식으로 중복되는지 확인해야 한다. 특히 같은 이벤트 안에서는 구간별 혜택이 중복 지급되지 않는 경우가 많다.
상품권 지급일과 지급 방식을 확인한다 &nbsp; 상품권은 조건을 채운 즉시 지급되지 않는 경우가 많다. 이벤트 종료 후 별도 검증 기간을 거쳐 모바일 상품권으로 지급될 수 있다.
또 휴대전화 번호가 잘못 등록되어 있거나 마케팅 수신 동의가 필요한 이벤트라면 지급 과정에서 문제가 생길 수 있다. 이벤트 참여 전 개인정보와 알림 수신 조건도 같이 확인해두는 편이 좋다.
이런 사람에게 특히 잘 맞는다 &nbsp; 이번 삼성증권 중개형 ISA 이벤트는 아래에 해당하는 사람에게 특히 볼 만하다.
유형 확인할 포인트 ISA를 처음 만드는 사람 신규 개설 후 100만 원 이상 순입금 혜택 타사 ISA를 운용 중인 사람 이전 금액 2배 인정 조건 ISA 만기가 다가오는 사람 기존 계좌 정리와 이전 타이밍 장기 절세 투자를 계획하는 사람 ISA 세제 혜택과 이벤트 혜택 동시 검토 국내 ETF·주식 투자 계획이 있는 사람 국내주식 첫 거래 이벤트 중복 가능 여부 반대로 단기 자금만 잠깐 넣어둘 사람, 투자 계획 없이 상품권만 보고 거래하려는 사람, 의무 가입 기간을 지키기 어려운 사람은 신중해야 한다.
ISA는 이벤트보다 계좌의 목적이 먼저다. 절세 계좌로 장기 운용할 돈인지, 중간에 쓸 가능성이 큰 돈인지, 주식이나 ETF 변동성을 감당할 수 있는지 먼저 정리해야 한다.
정리 &nbsp; 삼성증권 중개형 ISA 이벤트는 2026년 5월 1일부터 2026년 7월 31일까지 진행되는 이벤트를 기준으로 보면 신규 개설 고객, 기존 고객, 타사 ISA 이전 고객이 각각 확인할 만한 혜택이 있다.
가장 중요한 포인트는 타사 ISA 이전 금액이 순입금액 산정 시 2배로 인정된다는 점이다. 이미 ISA를 운용 중이고 이전을 고민하던 사람에게는 상품권 혜택이 꽤 크게 느껴질 수 있다.
다만 이벤트는 어디까지나 부가 혜택이다. ISA 계좌는 절세 효과가 있지만 의무 가입 기간, 투자 위험, 중도 해지 불이익, 상품 선택 책임이 함께 따라온다. 계좌를 만들기 전에는 이벤트 조건뿐 아니라 본인의 투자 목적과 자금 계획을 먼저 확인하는 것이 좋다.
삼성증권 이벤트에 관심이 있다면 공식 이벤트 페이지에서 신청 여부, 순입금 인정 기간, 잔고 유지 조건, 중복 지급 여부, 상품권 지급일을 확인한 뒤 참여하는 편이 안전하다.
자주 묻는 질문 &nbsp; 삼성증권 중개형 ISA 이벤트 기간은 언제인가? &nbsp; 이 글은 2026년 5월 1일부터 2026년 7월 31일까지 진행되는 이벤트 기준으로 작성했다. 증권사 이벤트는 기간이 연장되거나 조건이 바뀔 수 있으므로 참여 전 삼성증권 공식 이벤트 페이지에서 최신 내용을 다시 확인해야 한다.
타사 ISA를 삼성증권으로 이전하면 무조건 유리한가? &nbsp; 무조건 유리하다고 볼 수는 없다. 이벤트 산정 시 타사 ISA 이전 금액이 2배로 인정되는 점은 장점이지만, 기존 보유 상품, 이전 절차, 투자 수수료, 앱 사용성, 향후 운용 계획까지 함께 봐야 한다. 상품권 혜택보다 계좌를 오래 편하게 운용할 수 있는지가 더 중요하다.
상품권을 받으려고 국내주식을 거래해도 될까? &nbsp; 원래 국내주식이나 ETF를 살 계획이 있었다면 이벤트 혜택을 함께 확인해볼 수 있다. 하지만 상품권 5,000원을 받기 위해 필요 없는 거래를 만드는 것은 좋지 않다. 주식 거래에는 가격 변동 위험이 있고, 작은 이벤트 혜택보다 투자 손실이 훨씬 클 수 있다.`}).add({id:75,href:"/posts/delisting-rules-tightened/",title:"상장폐지 요건 강화, 동전주와 부실기업 퇴출 기준 쉽게 정리",description:"상장폐지 뜻부터 2026년 강화되는 시가총액, 동전주, 완전자본잠식, 공시위반 기준과 개인 투자자가 확인해야 할 점을 쉽게 정리했다.",content:`주식을 하다 보면 &ldquo;상장폐지&quot;라는 말이 가장 무섭게 들릴 때가 있다. 주가가 많이 빠지는 것도 힘들지만, 상장폐지는 아예 시장에서 거래할 자격을 잃는 일이기 때문이다. 특히 코스닥 소형주나 동전주를 매매하는 사람이라면 상장폐지 요건이 어떻게 바뀌는지 꼭 알아둘 필요가 있다.
2026년에는 부실기업을 더 빠르게 걸러내기 위한 상장폐지 개혁이 본격적으로 시행된다. 핵심은 시가총액 기준을 더 빨리 올리고, 주가 1,000원 미만인 동전주 기준을 새로 만들며, 완전자본잠식과 공시위반 기준도 강화하는 것이다.
이 제도는 시장 전체로 보면 건전성을 높이는 방향이지만, 개인 투자자 입장에서는 보유 종목의 위험 신호를 더 빨리 확인해야 한다는 뜻이기도 하다. 상장폐지가 무엇인지, 어떤 기준이 강화되는지, 내 주식이 상장폐지되면 어떤 절차를 거치는지 차근차근 살펴보자.
상장폐지란 무엇인가 &nbsp; 상장폐지는 기업이 코스피나 코스닥 같은 거래소 시장에서 주식을 거래할 수 있는 자격을 잃는 것을 말한다. 상장된 회사는 일정한 재무 요건, 공시 의무, 회계 투명성, 주식 분산 요건 등을 지켜야 한다. 이 기준을 충족하지 못하면 거래소가 관리종목 지정, 실질심사, 상장폐지 절차를 진행할 수 있다.
상장폐지 사유는 하나로 정해져 있지 않다. 대표적으로 완전자본잠식, 매출액 미달, 시가총액 미달, 감사의견 거절, 횡령·배임, 중대한 공시위반, 불공정거래 등이 있다. 쉽게 말해 회사가 정상적으로 사업을 이어가기 어렵거나, 투자자가 믿고 거래하기 어려운 상태가 되면 퇴출 대상이 될 수 있다.
다만 상장폐지 요건에 걸렸다고 해서 무조건 바로 퇴출되는 것은 아니다. 일부 사유는 먼저 관리종목으로 지정되고, 개선 기간이 주어진다. 회사가 그 기간 안에 문제를 해결하지 못하면 거래소 심사를 거쳐 상장폐지가 확정된다. 반대로 감사의견 거절이나 사업연도 말 완전자본잠식처럼 사안이 무거운 경우에는 훨씬 빠르게 절차가 진행될 수 있다.
왜 상장폐지 요건을 강화하는가 &nbsp; 이번 개혁의 배경에는 코스닥 시장의 체질 개선이 있다. 그동안 코스닥은 새로 상장하는 기업은 많았지만, 부실기업이 시장에서 빠져나가는 속도는 상대적으로 느리다는 지적을 받아왔다. 성장성이 있는 기업은 시장에 들어오고, 투자자 보호에 문제가 있는 기업은 빠르게 정리되어야 시장 신뢰가 높아진다.
부실기업이 오래 남아 있으면 개인 투자자에게도 좋지 않다. 실적이나 재무 상태가 나쁜 회사가 테마, 루머, 단기 수급만으로 급등락하면 초보 투자자가 손실을 보기 쉽다. 특히 주가가 낮고 시가총액이 작은 종목은 적은 자금으로도 가격이 크게 움직일 수 있어 불공정거래의 표적이 되기 쉽다.
정부와 거래소가 말하는 방향은 &ldquo;다산다사&rdquo; 구조다. 좋은 기업은 더 쉽게 성장 기회를 얻고, 문제가 큰 기업은 시장에서 빠르게 정리되는 구조를 만들겠다는 뜻이다. 투자자 입장에서는 단기적으로 상장폐지 위험 종목이 늘어나는 것처럼 보일 수 있지만, 장기적으로는 시장의 신뢰도를 높이는 조치로 볼 수 있다.
강화되는 4대 상장폐지 요건 &nbsp; 이번 개편에서 특히 봐야 할 부분은 시가총액, 동전주, 완전자본잠식, 공시위반이다. 네 가지 모두 개인 투자자가 종목을 고를 때 실제로 확인할 수 있는 위험 신호와 연결된다.
시가총액 기준이 더 빨리 올라간다 &nbsp; 시가총액 기준은 기업 규모가 지나치게 작아진 회사를 걸러내는 장치다. 기존에는 단계적으로 기준을 올릴 예정이었지만, 개편안에서는 상향 시점이 앞당겨졌다. 코스닥 시가총액 상장폐지 기준은 2026년 1월 150억원, 2026년 7월 200억원, 2027년 1월 300억원으로 강화된다.
중요한 점은 일시적으로 주가를 끌어올려 기준을 피하기 어렵게 했다는 것이다. 관리종목으로 지정된 뒤 90거래일 동안 연속 45거래일 시가총액 기준을 충족하지 못하면 상장폐지로 이어질 수 있다. 하루 이틀 반짝 오른다고 해결되는 문제가 아니라는 뜻이다.
동전주 기준이 새로 생긴다 &nbsp; 주가가 1,000원 미만인 종목은 흔히 동전주라고 부른다. 모든 동전주가 나쁜 것은 아니지만, 주가가 낮고 거래대금이 작은 종목은 변동성이 크다. 작은 호재성 소문에도 급등하고, 나쁜 뉴스가 나오면 매도 물량을 받아줄 사람이 없어 급락하기 쉽다.
새 기준에 따르면 주가가 30거래일 연속 1,000원 미만이면 관리종목으로 지정될 수 있다. 이후 90거래일 동안 연속 45거래일 이상 1,000원 이상을 유지하지 못하면 상장폐지 대상이 된다. 단순히 &ldquo;싸 보여서&rdquo; 사는 방식이 더 위험해지는 이유다.
반기 완전자본잠식도 심사 대상이 된다 &nbsp; 완전자본잠식은 회사의 누적 손실이 커져 자본총계가 0 이하로 내려간 상태를 말한다. 쉽게 말해 회사가 주주가 넣은 돈을 모두 까먹고, 장부상으로는 빚이 자산보다 많은 상태에 가까워진 것이다.
기존에는 주로 사업연도 말 기준 완전자본잠식이 상장폐지 요건으로 중요하게 다뤄졌다. 앞으로는 반기 기준 완전자본잠식도 요건에 추가된다. 사업연도 말 완전자본잠식은 즉시 상장폐지 사유가 될 수 있고, 반기 기준 완전자본잠식은 기업의 계속 가능성을 따지는 실질심사를 거쳐 판단된다.
공시위반 기준도 더 엄격해진다 &nbsp; 상장사는 투자자에게 중요한 정보를 정해진 방식으로 알려야 한다. 이를 어기면 공시벌점이 부과된다. 개편안에서는 최근 1년간 공시벌점 누적 기준이 15점에서 10점으로 낮아진다. 즉, 예전보다 적은 위반만으로도 상장폐지 심사 대상이 될 수 있다.
특히 고의적이고 중대한 공시위반은 한 번만으로도 심사에 들어갈 수 있다. 투자자 입장에서는 공시 정정이 잦거나, 불성실공시법인 지정 이력이 있는 종목을 가볍게 보면 안 된다. 실적보다 먼저 봐야 할 것이 회사의 신뢰도인 경우가 많다.
내 주식이 상장폐지되면 어떻게 되는가 &nbsp; 상장폐지가 확정되면 보통 정리매매 기간이 주어진다. 정리매매는 투자자가 마지막으로 보유 주식을 팔 수 있도록 열어주는 거래 기간이다. 일반적으로 7거래일 동안 진행되며, 이 기간에는 가격제한폭이 적용되지 않는다. 그래서 주가가 하루에도 크게 오르내릴 수 있고, 실제로는 급락하는 경우가 많다.
정리매매가 끝나면 해당 주식은 거래소 시장에서 사라진다. 회사가 바로 없어지는 것은 아니지만, 주식은 비상장주식이 된다. 이후에는 장외시장에서 거래해야 하는데, 매수자를 찾기 어렵고 가격을 객관적으로 판단하기도 쉽지 않다. 일부 종목은 K-OTC 같은 장외시장 거래 가능성이 있지만, 모든 상장폐지 종목이 원활하게 거래되는 것은 아니다.
그래서 상장폐지는 &ldquo;언젠가 팔면 되겠지&quot;라고 버틸 문제가 아니다. 관리종목 지정, 감사의견, 자본잠식, 공시위반, 거래정지 같은 신호가 나오면 손실 여부와 별개로 투자 판단을 다시 해야 한다.
DART에서 보유 종목 공시 확인 &nbsp; KIND에서 관리종목·상장폐지 공시 확인 &nbsp; 개인 투자자가 확인해야 할 체크포인트 &nbsp; 상장폐지 위험은 뉴스가 크게 나오기 전에 이미 공시와 재무제표에 신호가 나타나는 경우가 많다. 초보 투자자라도 아래 정도는 매수 전에 확인하는 습관을 들이는 것이 좋다.
첫째, 시가총액이 지나치게 작은 종목은 조심해야 한다. 특히 코스닥에서 시가총액이 상장폐지 기준 근처에 있는 종목은 주가 변동뿐 아니라 제도 리스크까지 함께 봐야 한다.
둘째, 주가가 1,000원 아래에서 오래 머무는 종목은 &ldquo;싸다&quot;가 아니라 &ldquo;왜 이렇게 낮게 평가받는가&quot;부터 봐야 한다. 주가가 낮은 이유가 실적 부진, 자본잠식, 유상증자 반복, 신뢰도 하락이라면 단기 반등만 보고 들어가는 것은 위험하다.
셋째, 감사의견을 확인해야 한다. 감사의견 거절, 한정, 부적정은 매우 강한 위험 신호다. 사업보고서 제출 지연이나 감사보고서 제출 지연도 가볍게 넘기면 안 된다.
넷째, 불성실공시법인 지정 이력과 횡령·배임 공시를 확인해야 한다. 주식 투자는 숫자만 보는 일이 아니다. 회사가 투자자에게 정보를 제대로 공개하는지, 경영진 리스크가 없는지도 중요하다.
다섯째, 거래정지가 반복되는 종목은 이유를 반드시 확인해야 한다. 거래정지는 투자자가 팔고 싶어도 팔 수 없는 상황을 만들 수 있다. 단기 수익을 노리고 들어갔다가 자금이 묶이는 경우가 생긴다.
자주 묻는 질문 &nbsp; 주가가 1,000원 미만이면 바로 상장폐지되나? &nbsp; 바로 상장폐지되는 것은 아니다. 주가가 30거래일 연속 1,000원 미만이면 관리종목으로 지정될 수 있고, 이후 일정 기간 동안 기준을 회복하지 못하면 상장폐지 대상이 된다. 다만 이 기준에 가까운 종목은 이미 시장 신뢰가 낮아졌을 가능성이 크므로 주의해야 한다.
시가총액은 어디서 확인할 수 있나? &nbsp; 증권사 앱, 포털 금융 페이지, 한국거래소 정보데이터시스템에서 확인할 수 있다. 단기 주가보다 중요한 것은 시가총액이 상장폐지 기준 근처에서 계속 머무는지 여부다.
상장폐지되면 주식 가치가 완전히 0원이 되나? &nbsp; 반드시 0원이 되는 것은 아니다. 회사가 존속하면 비상장주식으로 남을 수 있고, 장외시장에서 거래될 수도 있다. 하지만 유동성이 크게 떨어지고 원하는 가격에 팔기 어렵다. 개인 투자자에게는 사실상 회수가 매우 어려운 자산이 될 수 있다.
상장폐지 위험 종목을 피하려면 무엇을 먼저 봐야 하나? &nbsp; 감사의견, 자본잠식 여부, 시가총액, 주가 1,000원 미만 지속 여부, 공시위반 이력, 거래정지 여부를 먼저 보면 된다. 재무제표를 깊게 분석하지 못하더라도 이 신호들만 확인해도 위험한 종목을 상당 부분 걸러낼 수 있다.
정리 &nbsp; 상장폐지 요건 강화는 부실기업을 더 빨리 시장에서 정리하기 위한 제도 변화다. 시가총액 기준은 더 빠르게 올라가고, 동전주 기준이 새로 생기며, 반기 완전자본잠식과 공시위반 기준도 더 엄격해진다.
개인 투자자에게 중요한 것은 &ldquo;상장폐지될 종목을 맞히는 것&quot;이 아니라 위험 신호가 보이는 종목을 피하는 것이다. 시가총액이 너무 작고, 주가가 1,000원 아래에 오래 머물며, 감사의견이나 공시에 문제가 있는 회사는 단기 반등 가능성이 보여도 신중하게 봐야 한다.
주식은 싸게 사는 것도 중요하지만, 팔 수 있는 시장이 유지되는 것이 더 중요하다. 매수 버튼을 누르기 전에 DART 공시와 거래소 공시를 한 번 확인하는 습관만으로도 피할 수 있는 손실이 꽤 많다.`}).add({id:76,href:"/posts/year-end-tax-settlements/",title:"쉽게 설명하는 연말정산",description:"연말정산에 대해서 설명한다.",content:"&ldquo;연말정산&quot;이란? &nbsp; 직장인이라면 매월 지급받는 월급 속에서 &ldquo;세전, 세후&quot;라는 단어를 들어봤을 것이다. 세전이라는 것은 세금공제 전이고, 세후는 세금 공제 후를 뜻한다. 매월 발생하는 소득에 대해 우리는 그대로를 받는 것이 아니라, 소득에 대한 세금(소득세)을 뗀 후 나머지 금액을 받게 된다. 이렇게 회사에서 월급을 지급하기 전에 미리 세금을 떼고 지급하는 것을 &lsquo;원천징수&rsquo;라고 한다. 미리 떼이는 세금은 각 근로자 한 사람, 한 사람의 세금 부과 기준을 매달 고려하여 징수할 수 없기 때문에, 원천징수할 때에는 급여수준과 가족 수 등만을 고려한 기준(근로소득 간이세액표)을 통해 일괄적으로 책정이 된다. 정부가 1년 동안 근로소득 간이세액표에 따라 거둬들인 소득세를 연말에 다시 따져보고, 실소득보다 많은 세금을 냈으면 그만큼을 돌려주고 적게 거뒀으면 더 징수하는 절차이다. 정부는 1년 동안 근로소득 간이세액표에 따라 세금을 매달 원천징수하는데, 1년 동안 소득공제를 받을 수 있는 의료비나 교육비 지출이 증가한다거나 관련 규정이 바뀌면 내야 하는 세금의 액수가 달라지기 때문에 연말정산을 통해 이를 조정한다. 원천징수 금액 &gt; 소득세액 = 13월의 월급 원천징수 금액 &lt; 소득세액 = 13월의 세금폭 근로소득 간이세액표 &nbsp; 근로소득 간이세액표란? 월급여와 공제대상 부양가족 수 별로 매월 원천징수 해야하는 세액을 정한 표이다. 원천징수 &nbsp; 원천징수는 근로자처럼 급여를 받는 사람이 자신의 소득에 대한 세금을 직접 신고/납부하는 대신 회사에서 즉, 소득을 주는 측에서 소득을 줄 때 세금을 미리 징수하는 제도이다. 징수(徵收)는 거두어들인다는 뜻이다. 나라가 세금 걷을 때 주로 쓰는 단어이다. 소득세 &nbsp; 개인이 얻은 소득에 대해 부과하는 세금이다. 소득공제 &nbsp; 과세의 대상이 되는 소득액을 결정하기 위하여 총소득액에서 법으로 정해진 일부 항목에 대한 금액을 제외하는 것을 말한다. 공제된 금액을 제외한 액수를 기준으로 세금이 최종 부과된다. 기본 공제, 부양가족 공제, 의료비 공제 등이 있다. 세액공제 &nbsp; 산출된 세액에서 정책적으로 일정액을 공제하고 납부할 세금을 정하는 말한다. 비과세 &nbsp; 한자로 非(아닐 비)+ 課(매길 과) +稅(세금 세)를 보면 알수 있듯이 세금을 매기지 않는 것을 말한다. 우리나라에서는 소득이 발생하면 일정한 세금을 매겨(=과세) 다양한 방법으로 세금 확보를 하고, 해당 세금으로 나라를 운영할 재정을 충당한다. 그러나 일정 소득 항목에 대해서는 세금을 매기지 않는 &lsquo;비과세&rsquo; 혜택을 주기도 한다."}).add({id:77,href:"/posts/stablecoin-theme-stocks/",title:"스테이블코인 테마주 투자, 급등 전에 꼭 봐야 할 핵심...",description:"스테이블코인 테마주가 주목받는 이유와 국내외 관련 기업, 급등락 위험, 고평가 논란, 투자 전 확인해야 할 체크포인트를 초보자 눈높이로 정리했다.",content:`스테이블코인 테마주가 다시 주식시장의 관심을 받고 있다. 미국에서 스테이블코인 규제 틀이 만들어졌고, 한국에서도 원화 스테이블코인 논의가 이어지면서 결제, 송금, 핀테크, 블록체인 관련 기업들이 수혜 후보로 거론되고 있다.
테마주가 움직일 때는 이야기가 쉽고 강하다. &ldquo;앞으로 결제가 바뀐다&rdquo;, &ldquo;은행과 카드사를 대체할 수 있다&rdquo;, &ldquo;원화 스테이블코인이 나오면 이 회사가 수혜를 본다&rdquo; 같은 설명이 붙으면 주가가 짧은 기간에 크게 오르기도 한다.
하지만 테마가 강할수록 더 조심해야 한다. 실제 매출이 아직 없는데 기대만으로 주가가 먼저 오를 수 있고, 법안이 늦어지거나 사업 모델이 예상과 다르면 급락도 빠르게 나온다. 이 글에서는 스테이블코인이 무엇인지, 왜 테마주가 주목받는지, 어떤 기업들이 거론되는지, 투자 전 무엇을 확인해야 하는지 정리하였다.
스테이블코인은 가격을 안정시키도록 설계된 코인이다 &nbsp; 스테이블코인은 이름 그대로 가격이 안정되도록 만든 암호화폐다. 비트코인이나 이더리움처럼 가격이 크게 움직이는 코인과 달리, 미국 달러나 원화 같은 법정화폐와 가치를 1대 1로 맞추는 것을 목표로 한다.
예를 들어 달러 기반 스테이블코인은 1코인이 1달러에 가깝게 거래되도록 설계된다. 이를 위해 발행사는 현금, 예금, 미국 국채 같은 안전자산을 준비금으로 보유하고, 투자자가 원할 때 코인을 법정화폐로 바꿀 수 있도록 한다.
스테이블코인이 주목받는 이유는 결제와 송금에 쓰기 쉽기 때문이다. 가격이 하루에 10%, 20%씩 움직이면 결제 수단으로 쓰기 어렵다. 하지만 1달러에 가깝게 유지되는 코인이라면 해외 송금, 온라인 결제, 디지털자산 거래, 기업 간 정산 등에 활용할 여지가 생긴다.
다만 이름이 스테이블이라고 해서 항상 안전한 것은 아니다. 준비금이 충분한지, 발행사가 규제를 잘 지키는지, 실제로 1대 1 상환이 가능한지에 따라 위험이 달라진다. 과거 일부 알고리즘형 스테이블코인이 무너진 사례도 있어, 제도권 규제가 중요하게 다뤄진다.
스테이블코인 테마주가 뜨는 이유 &nbsp; 스테이블코인 테마주가 주목받는 가장 큰 이유는 제도화 기대다. 미국에서는 2025년 7월 18일 GENIUS Act가 법으로 서명되며 지급결제용 스테이블코인에 대한 연방 규제 틀이 만들어졌다. 이 법은 허용된 발행자, 준비금, 소비자 보호, 감독 체계 등을 다루는 것이 핵심이다.
제도가 생기면 시장은 &ldquo;이제 큰 기업과 금융회사가 들어올 수 있다&quot;고 해석한다. 규제가 없을 때는 불확실성이 커서 기관투자자나 대형 기업이 적극적으로 움직이기 어렵지만, 규칙이 생기면 사업화 가능성이 커질 수 있기 때문이다.
한국에서도 원화 스테이블코인과 디지털자산기본법 논의가 이어지고 있다. 다만 2026년 5월 현재 국내 입법은 아직 쟁점이 남아 있다. 전자신문 보도에 따르면 디지털자산기본법은 원화 스테이블코인과 디지털 결제 인프라 설계와 관련된 법안으로 거론되지만, 대주주 지분 제한 등 이슈로 논의가 지연되고 있다.
이런 상황에서는 기대만으로 주가가 먼저 움직이기 쉽다. 법안이 통과되기 전부터 상표권을 출원하거나 사업 목적에 블록체인, 디지털자산, 정보서비스업 등을 추가한 기업이 수혜주로 묶인다. 시장은 실제 실적보다 &ldquo;관련 있어 보이는가&quot;에 먼저 반응하는 경우가 많다.
국내에서 거론되는 스테이블코인 관련 기업 &nbsp; 국내 스테이블코인 테마주로는 결제 인프라, 간편결제, 송금, 보안, 블록체인 기술과 관련된 기업들이 자주 언급된다. 대표적으로 카카오페이, NHN KCP, 헥토파이낸셜, 다날, SGA, 미투온, 아이티센글로벌 같은 기업들이 시장에서 거론된다.
카카오페이는 간편결제와 금융 플랫폼을 갖고 있다는 점 때문에 원화 스테이블코인 유통 채널 후보로 자주 언급된다. 아주경제 보도에 따르면 카카오페이는 2026년 3월 주주총회 안건으로 &ldquo;기타 정보 서비스업&quot;을 사업 목적에 추가하는 방안을 올렸고, 시장에서는 이를 스테이블코인 등 디지털자산 사업 준비와 연결해 해석했다.
NHN KCP는 PG, 즉 전자결제대행 인프라를 갖고 있다는 점이 강점으로 꼽힌다. ZDNet Korea는 2026년 4월 NHN KCP가 NH농협은행과 스테이블코인 결제 인프라 구축을 위한 업무협약을 맺었다고 보도했다. 더벨 보도에 따르면 NHN KCP는 스테이블코인 관련 상표권과 디자인권 출원, 블록체인 사업 목적 추가 등도 추진해왔다.
헥토파이낸셜은 지급결제 인프라와 송금 관련 역량 때문에 수혜 후보로 언급된다. 스테이블코인이 실제 결제와 정산에 쓰이려면 코인 발행만으로 끝나지 않고, 은행 계좌, 가맹점, 송금, 정산, 보안 시스템이 함께 필요하다. 이 지점에서 기존 결제 인프라 기업들이 테마로 묶이는 것이다.
다만 &ldquo;관련 기업&quot;과 &ldquo;실제 수혜 기업&quot;은 다르다. 상표권을 냈다고 반드시 사업이 성공하는 것은 아니고, 사업 목적을 추가했다고 바로 매출이 생기는 것도 아니다. 테마주를 볼 때는 이름보다 실제 사업 구조를 먼저 확인해야 한다.
해외에서는 어떤 기업이 주목받을까? &nbsp; 해외에서는 달러 스테이블코인 생태계와 직접 연결된 기업이 먼저 주목받는다. 대표적으로 USDC 발행사인 Circle, 가상자산 거래소 Coinbase, 결제 네트워크와 블록체인 인프라 기업들이 시장의 관심을 받는다.
Circle은 USDC라는 달러 기반 스테이블코인을 발행한다. 스테이블코인 발행사는 준비금을 운용하면서 이자수익을 얻을 수 있다. 금리가 높은 구간에서는 준비금에서 나오는 이자수익이 커지기 때문에 실적 기대가 붙기 쉽다.
Coinbase는 거래소이면서 USDC 생태계와 연결되어 있다는 점 때문에 스테이블코인 제도화 수혜주로 자주 언급된다. 스테이블코인 거래, 보관, 결제, 기관 서비스가 확대되면 거래소와 수탁 인프라의 역할도 커질 수 있다.
그 밖에 비트코인 채굴업체나 이더리움 보유 기업이 함께 움직이는 경우도 있다. 다만 이들은 스테이블코인과 직접적인 사업 연결성이 약할 수 있다. 가상자산 투자심리가 좋아지면 같이 오르는 &ldquo;넓은 의미의 코인 테마주&quot;일 뿐, 스테이블코인 수익모델과 직접 연결된 기업은 아닐 수 있다.
초보자는 해외 테마주를 볼 때 &ldquo;이 회사가 스테이블코인에서 어떻게 돈을 버는가&quot;를 물어봐야 한다. 발행 수수료인지, 준비금 이자수익인지, 거래 수수료인지, 결제 인프라 수수료인지가 분명하지 않으면 단순 테마에 가까울 수 있다.
스테이블코인 테마주가 위험한 이유 &nbsp; 스테이블코인 테마주는 기대가 빠르게 붙는 만큼 급등락도 심하다. 주가가 단기간에 2배, 3배 오르면 뒤늦게 들어간 투자자는 작은 악재에도 큰 손실을 볼 수 있다.
첫째, 고평가 위험이 있다. 아직 스테이블코인 매출이 본격적으로 나오지 않았는데, 몇 년 뒤 가능성을 미리 반영해 주가가 오를 수 있다. 이때 PER, PSR, 영업이익률 같은 기본 지표를 보면 이미 부담스러운 가격인 경우가 많다.
둘째, 수익성이 불확실하다. 원화 스테이블코인이 도입된다고 해도 모든 결제 기업이 큰돈을 버는 것은 아니다. 원화 스테이블코인은 달러 스테이블코인보다 글로벌 수요가 제한될 수 있고, 규제에 따라 발행 주체와 수익 배분 구조가 달라질 수 있다.
셋째, 규제 불확실성이 크다. 국내에서는 누가 스테이블코인을 발행할 수 있는지, 준비금은 어떤 자산으로 보유해야 하는지, 은행과 핀테크 기업의 역할을 어떻게 나눌지 아직 확정되지 않은 부분이 있다. 규제 방향이 기대와 다르면 관련주 주가도 바로 흔들릴 수 있다.
넷째, 테마가 너무 넓다. 결제, 보안, 게임, 가상자산, 블록체인, 은행, 증권사까지 모두 관련주로 묶이면 실제 수혜를 구분하기 어렵다. 이럴 때는 시장이 먼저 올리고 나중에 이유를 붙이는 흐름이 나오기 쉽다.
투자 전 확인해야 할 체크포인트 &nbsp; 스테이블코인 테마주를 볼 때는 먼저 사업 연결성을 확인해야 한다. 단순히 &ldquo;블록체인 사업 목적 추가&rdquo; 수준인지, 실제 결제 인프라와 고객사를 보유하고 있는지, 은행이나 가상자산 사업자와 구체적인 협약이 있는지를 구분해야 한다.
둘째, 매출이 언제부터 생길 수 있는지 봐야 한다. 법안 논의 단계인지, 실증사업 단계인지, 실제 서비스 출시 단계인지에 따라 투자 판단은 크게 달라진다. 아직 매출이 없는 기업이라면 주가는 기대에 의해 움직이는 것이다.
셋째, 밸류에이션을 봐야 한다. 테마주가 급등하면 &ldquo;앞으로 더 좋아질 것&quot;이라는 말만 들리지만, 이미 주가가 미래 실적을 상당 부분 반영했을 수 있다. PER이 지나치게 높거나 적자 기업이라면 작은 실망에도 주가가 크게 빠질 수 있다.
넷째, 관련 뉴스의 성격을 구분해야 한다. 법안 통과, 공식 사업 계약, 은행과의 업무협약은 의미가 있지만, 상표권 출원이나 사업 목적 추가만으로는 실제 수익을 보장하지 않는다. 제목만 보고 매수하기보다 원문과 공시를 함께 보는 습관이 필요하다.
마지막으로 비중 관리가 중요하다. 테마주는 맞히면 수익이 커 보이지만, 틀렸을 때 손실도 빠르다. 초보자라면 한 종목에 몰아넣기보다 전체 투자금 중 감당 가능한 일부만 배정하는 편이 현실적이다.
정리 &nbsp; 스테이블코인은 달러나 원화 같은 법정화폐와 가치를 맞추도록 설계된 암호화폐다. 미국에서는 2025년 7월 GENIUS Act가 법제화되면서 제도권 편입 기대가 커졌고, 한국에서도 원화 스테이블코인 논의가 이어지고 있다.
이 흐름 속에서 카카오페이, NHN KCP, 헥토파이낸셜, 다날 같은 결제·핀테크 기업들이 스테이블코인 테마주로 거론된다. 해외에서는 Circle, Coinbase처럼 달러 스테이블코인 생태계와 직접 연결된 기업들이 주목받는다.
하지만 테마주는 기대와 현실 사이의 간격이 크다. 법안이 통과되어도 누가 발행하고, 누가 유통하고, 누가 실제 수익을 가져갈지는 별개의 문제다. 주가가 먼저 오르고 실적은 나중에 따라오는 구조라면 변동성은 커질 수밖에 없다.
스테이블코인 테마주에 관심이 있다면 &ldquo;이 회사가 실제로 어떻게 돈을 벌 수 있는가&rdquo;, &ldquo;규제가 이 회사에 유리한가&rdquo;, &ldquo;현재 주가가 이미 기대를 반영했는가&quot;를 먼저 확인하는 것이 좋다.
자주 묻는 질문 &nbsp; 스테이블코인 테마주는 어떤 종목을 말하나? &nbsp; 스테이블코인 발행, 결제, 송금, 보안, 블록체인 인프라와 연결될 가능성이 있는 종목을 말한다. 국내에서는 간편결제와 PG 인프라를 가진 기업들이 자주 언급되고, 해외에서는 스테이블코인 발행사와 거래소가 주목받는다.
원화 스테이블코인이 나오면 관련주는 무조건 오르나? &nbsp; 그렇지 않다. 법안이 통과되어도 발행 주체, 준비금 규제, 수익 배분 구조에 따라 실제 수혜 기업은 제한될 수 있다. 기대만으로 오른 종목은 재료가 현실화되는 과정에서 오히려 조정을 받을 수도 있다.
스테이블코인 테마주는 장기투자에 적합한가? &nbsp; 기업마다 다르다. 실제 결제 인프라와 고객 기반을 갖고 있고, 규제 안에서 수익모델을 만들 수 있는 기업이라면 장기적으로 볼 수 있다. 하지만 단순히 이름만 테마에 묶인 기업은 장기투자보다 단기 투기 성격이 강할 수 있다.
초보자는 어떻게 접근하는 것이 좋나? &nbsp; 처음에는 종목명보다 산업 구조를 먼저 이해하는 것이 좋다. 이후 실제 매출 가능성, 공시, 사업 협약, 밸류에이션을 확인하고, 투자하더라도 전체 자산 중 작은 비중으로 접근하는 편이 안전하다.`}).add({id:78,href:"/posts/why-stablecoins-were-created/",title:"스테이블코인은 왜 만들어졌을까? 비트코인과 다른 점 쉽...",description:"스테이블코인이 비트코인의 가격 변동성 문제에서 어떻게 탄생했는지, USDT와 USDC의 역할, 송금·결제·디지털자산 시장에서의 쓰임새를 쉽게 설명한다.",content:`스테이블코인이라는 말을 자주 듣지만, 처음 접하면 조금 헷갈린다. 코인인데 가격이 안정적이라니, 비트코인이나 이더리움처럼 오르내리는 자산과 무엇이 다른지 감이 잘 오지 않는다.
스테이블코인은 비트코인 같은 암호화폐가 가진 큰 약점에서 출발했다. 바로 가격 변동성이다. 블록체인 위에서 빠르게 주고받을 수 있다는 장점은 있지만, 가격이 너무 크게 움직이면 일상 결제나 송금에 쓰기 어렵다. 오늘 1만 원어치였던 코인이 내일 8천 원이 되거나 1만 2천 원이 되면, 화폐처럼 쓰기 어렵기 때문이다.
그래서 등장한 것이 스테이블코인이다. 달러 같은 법정화폐나 국채 같은 안전자산에 가치를 연결해, 코인의 이동성과 화폐의 안정성을 함께 가지려는 시도다. 이 글에서는 스테이블코인이 왜 만들어졌는지, 비트코인과 무엇이 다른지, 앞으로 어떤 역할을 할 수 있는지 정리하였다.
비트코인은 전자화폐를 꿈꾸며 시작됐다 &nbsp; 비트코인의 출발점은 &ldquo;개인 간 전자화폐&quot;였다. 2008년 10월 공개된 비트코인 백서 제목도 &ldquo;Bitcoin: A Peer-to-Peer Electronic Cash System&quot;이다. 말 그대로 은행 같은 중개기관 없이 개인과 개인이 직접 돈을 주고받는 시스템을 만들겠다는 구상이었다.
이 아이디어는 당시로서는 매우 강했다. 인터넷은 이미 정보를 자유롭게 이동시켰지만, 돈을 보내는 일은 여전히 은행, 카드사, 결제망 같은 중개기관에 의존했다. 해외 송금을 하려면 시간이 걸리고 수수료도 비쌌다. 거래를 믿기 위해서는 누군가 장부를 관리해야 했다.
비트코인은 이 문제를 블록체인으로 풀려고 했다. 중앙기관이 장부를 독점하지 않고, 네트워크 참여자들이 거래 기록을 함께 검증하는 방식이다. 이론적으로는 은행 없이도 가치가 이동할 수 있는 길이 열린 셈이다.
하지만 시간이 지나면서 비트코인은 처음 기대했던 &ldquo;일상 화폐&quot;보다는 &ldquo;디지털 금&quot;에 가까워졌다. 희소성, 탈중앙성, 장기 보유 가치가 부각되면서 투자자산으로 자리 잡았고, 가격은 크게 오르내렸다.
가격 변동성이 화폐의 역할을 어렵게 만들었다 &nbsp; 화폐가 되려면 몇 가지 조건이 필요하다. 물건을 사고팔 때 쓰이는 교환의 매개여야 하고, 가격을 비교할 수 있는 가치의 척도여야 하며, 일정 기간 가치를 보관할 수 있어야 한다.
비트코인은 이 중 일부 기능은 갖췄지만, 일상적인 화폐로 쓰기에는 변동성이 너무 컸다. 예를 들어 커피 한 잔이 오늘은 0.00003BTC인데, 내일은 비트코인 가격이 급등해서 0.00002BTC가 될 수 있다. 반대로 가격이 급락하면 판매자 입장에서는 방금 받은 비트코인의 가치가 순식간에 줄어들 수 있다.
결제 수단은 안정적이어야 한다. 월급, 임대료, 물건값, 송금액은 대체로 예측 가능해야 한다. 매 순간 눈금이 바뀌는 자로 길이를 잴 수 없듯이, 가격이 크게 흔들리는 자산으로 일상적인 가격을 표시하기는 어렵다.
그래서 비트코인은 &ldquo;은행 없는 돈&quot;이라는 철학을 열었지만, 실제 결제와 송금의 빈자리는 다른 형태의 디지털 화폐가 채우기 시작했다. 그 대표적인 형태가 스테이블코인이다.
스테이블코인은 변동성을 줄이기 위해 태어났다 &nbsp; 스테이블코인은 특정 자산에 가치를 고정하도록 설계된 암호화폐다. 가장 흔한 형태는 달러 기반 스테이블코인이다. 1개의 코인이 1달러에 가깝게 유지되도록 만들고, 발행사는 그만큼의 준비자산을 보유하는 구조다.
대표적인 예가 테더의 USDT다. USDT는 달러 가치에 연동되는 스테이블코인으로, 코인 거래소에서 널리 쓰인다. 투자자가 비트코인이나 이더리움을 팔고 잠시 현금처럼 대기하고 싶을 때, 실제 은행 계좌로 달러를 빼지 않고 USDT로 바꿔둘 수 있다.
이 구조는 특히 법정화폐 입출금이 불편한 환경에서 유용했다. 어떤 국가에서는 거래소에 달러나 원화를 넣고 빼는 과정이 까다롭다. 하지만 스테이블코인이 있으면 블록체인 지갑만으로 거래소 사이를 이동하거나 다른 코인을 살 수 있다.
스테이블코인은 비트코인의 철학을 완전히 버린 것이 아니다. 은행 없이 개인 간에 가치를 이동시키는 블록체인의 장점은 유지하면서, 가격 안정성 문제를 달러 같은 실물 자산 연결로 보완한 것이다.
스테이블코인은 디지털 금융의 다리 역할을 한다 &nbsp; 스테이블코인의 역할은 처음에는 코인 거래소 안에서 컸다. 변동성이 큰 코인을 팔고 잠시 쉬어가는 안전지대에 가까웠다. 하지만 지금은 그 쓰임새가 더 넓어지고 있다.
첫째, 국경 간 송금에 쓰일 수 있다. 기존 해외 송금은 은행망을 거치기 때문에 시간이 걸리고 수수료도 부담될 수 있다. 스테이블코인은 블록체인 네트워크를 이용하므로 지갑 주소만 있으면 비교적 빠르게 보낼 수 있다. 물론 실제 현금화 과정에서는 거래소, 지갑, 규제, 수수료를 따져야 한다.
둘째, 프로그래밍 가능한 돈으로 활용될 수 있다. 스테이블코인은 블록체인 위에서 움직이기 때문에 스마트 컨트랙트와 연결할 수 있다. 예를 들어 특정 조건이 충족되면 자동으로 대금이 지급되도록 만들 수 있다. 수출입 거래, 온라인 서비스 정산, 게임 아이템 거래, 디지털 콘텐츠 결제처럼 자동화가 필요한 영역에서 가능성이 생긴다.
셋째, 디지털자산 시장의 대기자금 역할을 한다. 코인 시장은 24시간 움직인다. 투자자가 매번 은행 계좌로 돈을 넣고 빼기보다, 스테이블코인으로 보유하면서 다음 투자 기회를 기다리는 경우가 많다. 그래서 스테이블코인은 디지털자산 시장의 현금성 자산처럼 쓰인다.
이런 이유로 스테이블코인은 전통 금융과 디지털자산 시장을 연결하는 다리로 불린다. 달러 같은 기존 화폐의 안정성과 블록체인의 이동성을 함께 가져가려는 시도이기 때문이다.
스테이블코인과 알트코인은 목적이 다르다 &nbsp; 스테이블코인을 이해할 때 알트코인과 구분하면 더 쉽다. 알트코인은 비트코인을 제외한 다양한 암호화폐를 넓게 부르는 말이다. 이더리움, 솔라나, 트론, 리플, 바이낸스코인, 도지코인 등이 여기에 들어간다.
알트코인은 각자 목표가 다르다. 이더리움은 스마트 컨트랙트와 탈중앙 애플리케이션 플랫폼을 지향한다. 솔라나와 트론은 빠른 처리 속도와 낮은 수수료를 앞세운다. 리플은 국제 송금과 금융기관 간 결제 효율화를 목표로 한다. 도지코인은 커뮤니티와 밈 문화에서 출발했다.
반면 스테이블코인의 핵심 목표는 &ldquo;가치 안정&quot;이다. 가격이 크게 오르는 것이 목적이 아니다. 1달러 기반 스테이블코인이라면 1달러에 가깝게 유지되는 것이 성공이다.
그래서 투자 관점도 다르다. 알트코인은 가격 상승을 기대하고 사는 경우가 많지만, 스테이블코인은 보통 거래, 송금, 대기자금, 결제 수단으로 쓴다. 스테이블코인을 사서 몇 배 수익을 기대하는 구조가 아니라, 가격이 안정적으로 유지되는지를 보는 자산에 가깝다.
스테이블코인이 완전히 안전한 것은 아니다 &nbsp; 스테이블코인은 안정성을 목표로 하지만, 완전히 안전한 자산은 아니다. 핵심은 준비자산과 운영 방식이다.
달러 기반 스테이블코인이라면 발행사가 실제로 충분한 달러성 자산을 보유하고 있는지 중요하다. 준비금이 현금, 단기 국채, 예금처럼 유동성이 높은 자산으로 구성되어 있는지, 외부 감사나 공시가 제대로 이루어지는지도 봐야 한다.
또 하나는 디페깅 위험이다. 디페깅은 1달러에 맞춰져야 할 스테이블코인이 1달러에서 벗어나는 현상을 말한다. 시장이 발행사의 준비금이나 상환 능력을 의심하면 스테이블코인 가격이 흔들릴 수 있다.
알고리즘형 스테이블코인은 특히 조심해야 한다. 실물 자산을 충분히 담보로 잡기보다 알고리즘과 다른 코인의 수요에 의존하는 구조는 시장 충격에 약할 수 있다. 과거 일부 알고리즘형 스테이블코인이 무너진 사례가 이 위험을 보여준다.
규제도 중요하다. 스테이블코인이 결제와 송금 영역으로 확장될수록 각국 정부는 자금세탁, 소비자 보호, 금융 안정성 문제를 더 엄격하게 볼 수밖에 없다. 규제가 명확해지면 시장 신뢰는 높아질 수 있지만, 동시에 발행사와 서비스 사업자에게는 비용과 제한이 생길 수 있다.
정리 &nbsp; 스테이블코인은 비트코인의 높은 가격 변동성 문제를 보완하기 위해 등장했다. 비트코인이 은행 없는 전자화폐의 가능성을 열었지만, 가격이 너무 크게 움직이면서 일상 결제와 송금에는 한계가 있었다. 스테이블코인은 달러 같은 실물 자산에 가치를 연결해 이 문제를 줄이려는 시도다.
처음에는 코인 거래소에서 대기자금처럼 쓰이는 역할이 컸지만, 지금은 송금, 결제, 스마트 컨트랙트, 디지털자산 시장의 현금성 자산으로 쓰임새가 넓어지고 있다. 전통 금융의 안정성과 블록체인의 이동성을 연결한다는 점에서 디지털 금융의 다리라고 볼 수 있다.
다만 스테이블코인이 완전히 안전한 것은 아니다. 준비자산이 충분한지, 1대 1 상환이 가능한지, 디페깅 위험은 없는지, 규제를 제대로 지키는지 확인해야 한다. 이름은 안정적이지만, 구조를 모르면 위험을 놓칠 수 있다.
자주 묻는 질문 &nbsp; 스테이블코인은 왜 만들어졌나? &nbsp; 비트코인 같은 암호화폐의 가격 변동성이 너무 커서 결제와 송금에 쓰기 어렵다는 문제가 있었다. 스테이블코인은 달러 같은 실물 자산에 가치를 고정해 블록체인의 이동성과 화폐의 안정성을 함께 가지기 위해 만들어졌다.
USDT와 USDC는 무엇이 다른가? &nbsp; 둘 다 달러 기반 스테이블코인이지만 발행사와 운영 방식, 준비금 공개 수준, 규제 대응 방식이 다르다. USDT는 테더가 발행하고, USDC는 Circle이 발행한다. 투자자나 이용자는 각 코인의 준비금, 상환 구조, 거래소 지원 여부를 확인해야 한다.
스테이블코인은 투자 수익을 내기 위한 코인인가? &nbsp; 일반적으로는 가격 상승을 노리는 코인이 아니다. 1달러 기반 스테이블코인은 1달러에 가깝게 유지되는 것이 목적이다. 주된 쓰임새는 송금, 결제, 코인 거래 대기자금, 디지털자산 시장의 현금성 자산에 가깝다.
스테이블코인은 은행 송금을 대체할 수 있나? &nbsp; 일부 영역에서는 가능성이 있다. 지갑 간 전송은 빠르고 국경을 넘기 쉽기 때문이다. 다만 실제 생활에서 쓰려면 규제, 신원확인, 세금, 현금화, 소비자 보호 문제가 함께 해결되어야 한다.`}).add({id:79,href:"/posts/personal-credit-loan-basics/",title:"신용대출 완벽 개념정리: 뜻, 금리, 한도, 마이너스통...",description:"신용대출의 뜻과 담보대출과의 차이, 금리와 한도 결정 기준, 건별대출과 마이너스통장, 상환 방식과 주의사항을 초보자도 이해하기 쉽게 정리했다.",content:`급하게 돈이 필요할 때 가장 먼저 떠올리는 대출이 신용대출이다. 집이나 자동차 같은 담보가 없어도 신청할 수 있고, 모바일 앱으로 비교적 빠르게 한도와 금리를 확인할 수 있기 때문이다.
하지만 쉽고 빠르다는 이유만으로 가볍게 보면 안 된다. 신용대출은 말 그대로 내 신용을 기반으로 돈을 빌리는 대출이다. 연체가 생기면 신용점수에 직접 영향을 줄 수 있고, 이후 주택담보대출이나 전세대출을 받을 때도 불리해질 수 있다.
이 글에서는 신용대출이 정확히 무엇인지, 금리와 한도는 어떻게 정해지는지, 마이너스통장과 일반 신용대출은 무엇이 다른지, 신청 전에 꼭 확인해야 할 것까지 누구나 이해하기 쉽게 정리하였다.
신용대출이란 무엇인가 &nbsp; 신용대출은 담보 없이 개인의 신용을 보고 돈을 빌려주는 대출이다. 여기서 말하는 신용은 단순히 신용점수 하나만 뜻하지 않는다. 금융사는 직업, 소득, 재직 기간, 기존 대출, 카드 사용 이력, 연체 이력, 은행 거래 실적 등을 종합적으로 본다.
대출은 크게 담보대출과 신용대출로 나눌 수 있다.
구분 기준 대표 예시 담보대출 집, 땅, 보증서 같은 담보 가치 주택담보대출, 전세자금대출 신용대출 개인의 상환 능력과 신용도 직장인 신용대출, 마이너스통장 담보대출은 돈을 갚지 못할 경우 금융사가 담보를 통해 대출금을 회수할 수 있다. 그래서 비교적 금리가 낮고 한도가 크게 나올 수 있다. 반대로 신용대출은 담보가 없기 때문에 금융사 입장에서는 위험이 더 크다. 그래서 담보대출보다 금리가 높게 나오는 경우가 많다.
다만 신용대출은 절차가 간단하다는 장점이 있다. 주택담보대출처럼 담보 평가, 근저당 설정, 등기 절차가 필요하지 않다. 소득과 재직 확인이 가능하고 신용 조건이 맞으면 빠르게 실행되는 편이다.
신용대출 금리와 한도는 어떻게 정해질까 &nbsp; 신용대출을 알아볼 때 가장 중요한 것은 금리와 한도다. 같은 1,000만 원을 빌려도 금리가 5%인지 10%인지에 따라 매달 부담이 달라진다.
금리를 결정하는 요소 &nbsp; 신용대출 금리는 보통 다음 요소를 종합해서 정해진다.
신용점수 소득 수준 재직 기간과 직장 안정성 기존 대출 규모 연체 이력 주거래 은행 거래 실적 금융사 내부 심사 기준 많은 사람이 신용점수만 높으면 무조건 낮은 금리가 나온다고 생각한다. 하지만 실제로는 소득과 기존 대출도 중요하다. 신용점수가 좋아도 이미 대출이 많다면 추가 대출 금리가 높아지거나 한도가 줄어들 수 있다.
금리는 보통 기준금리 + 가산금리 - 우대금리 구조로 이해하면 쉽다. 기준금리는 시장금리 흐름을 반영하고, 가산금리는 개인의 위험도와 금융사 심사 기준이 반영된다. 우대금리는 급여 이체, 카드 사용, 자동이체, 예금 거래 같은 조건을 충족하면 낮아질 수 있다.
한도를 결정하는 요소 &nbsp; 신용대출 한도는 보통 연소득을 기준으로 정해진다. 다만 연봉이 5,000만 원이라고 해서 무조건 5,000만 원을 빌릴 수 있는 것은 아니다. 기존 대출이 있으면 그만큼 추가 한도가 줄어들 수 있다.
예를 들어 금융사 심사상 총 신용대출 가능 한도가 4,000만 원인데 이미 다른 은행에서 1,500만 원을 빌린 상태라면, 새로 받을 수 있는 한도는 줄어든다. 또 DSR 규제 때문에 소득 대비 전체 원리금 상환 부담이 크면 한도가 더 낮아질 수 있다.
그래서 대출 앱에서 보이는 예상 한도는 말 그대로 예상일 뿐이다. 최종 한도와 금리는 실제 신청, 서류 확인, 금융사 심사 이후 달라질 수 있다.
건별대출과 마이너스통장 차이 &nbsp; 신용대출은 돈을 빌리는 방식에 따라 크게 건별대출과 한도대출로 나눌 수 있다. 한도대출의 대표적인 형태가 마이너스통장이다.
건별대출 &nbsp; 건별대출은 필요한 금액을 한 번에 빌리는 방식이다. 예를 들어 1,000만 원 신용대출을 받으면 계좌에 1,000만 원이 입금되고, 약정한 방식에 따라 이자나 원리금을 갚아나간다.
건별대출은 목돈이 확실히 필요한 경우에 맞다. 이사비, 병원비, 기존 고금리 대출 상환, 일시적인 생활비 부족처럼 필요한 금액과 사용 시점이 비교적 명확할 때 쓰기 좋다.
다만 일부 상품은 대출 만기 전에 원금을 갚으면 중도상환수수료가 발생할 수 있다. 대출을 빨리 갚을 계획이 있다면 이 부분을 반드시 확인해야 한다.
마이너스통장 &nbsp; 마이너스통장은 정해진 한도 안에서 필요한 만큼 꺼내 쓰고, 다시 채워 넣을 수 있는 방식이다. 예를 들어 한도 1,000만 원의 마이너스통장을 만들었다고 해서 바로 1,000만 원 전체에 이자가 붙는 것은 아니다. 실제로 사용한 금액에 대해서만 이자가 붙는다.
이 방식은 자금이 들쭉날쭉 필요한 사람에게 편하다. 프리랜서, 개인사업자, 급여일 전후로 현금흐름이 불규칙한 사람에게 유용할 수 있다.
하지만 편하다는 점이 단점이 되기도 한다. 통장 잔액이 마이너스로 표시되다 보니 실제로 빚을 쓰고 있다는 감각이 약해질 수 있다. 또 일반 건별대출보다 금리가 조금 높게 책정되는 경우도 있다.
구분 건별대출 마이너스통장 사용 방식 한 번에 대출 실행 한도 안에서 자유롭게 사용 이자 계산 대출 실행 금액 기준 실제 사용 금액 기준 재사용 상환 후 재사용 불가한 경우 많음 상환 후 다시 사용 가능 적합한 경우 필요한 금액이 명확할 때 현금흐름 관리가 필요할 때 상환 방식과 금리 방식도 꼭 봐야 한다 &nbsp; 신용대출을 받을 때 금리와 한도만 보고 결정하면 부족하다. 어떻게 갚을지, 금리가 고정인지 변동인지도 함께 봐야 한다.
일시상환과 분할상환 &nbsp; 일시상환은 대출 기간 동안 이자만 내다가 만기일에 원금을 한 번에 갚는 방식이다. 매달 부담은 작아 보이지만, 만기 때 큰돈을 마련해야 한다. 만기 연장이 안 되거나 조건이 나빠지면 부담이 커질 수 있다.
분할상환은 매달 원금과 이자를 함께 갚는 방식이다. 월 납입액은 일시상환보다 클 수 있지만, 시간이 갈수록 원금이 줄어든다. 빚을 계획적으로 줄이고 싶다면 분할상환이 더 안정적일 수 있다.
고정금리와 변동금리 &nbsp; 고정금리는 대출 기간 동안 금리가 일정하게 유지되는 방식이다. 매달 낼 돈을 예측하기 쉽고, 금리가 오를 때 부담이 커지지 않는 장점이 있다.
변동금리는 시장금리나 기준금리 흐름에 따라 금리가 바뀌는 방식이다. 처음에는 고정금리보다 낮게 보일 수 있지만, 금리가 오르면 이자 부담도 같이 늘어날 수 있다.
대출 기간이 짧고 조기 상환 계획이 명확하다면 변동금리도 검토할 수 있다. 반대로 금리 상승이 걱정되거나 월 상환액을 안정적으로 관리하고 싶다면 고정금리 조건을 함께 비교하는 것이 좋다.
신용대출 신청 전 체크리스트 &nbsp; 신용대출은 승인 가능 여부보다 상환 가능 여부가 더 중요하다. 은행에서 빌려준다고 해서 내 생활에 무리가 없는 것은 아니다.
신청 전에는 최소한 아래 항목을 확인하는 것이 좋다.
대출 목적이 분명한지 확인한다. 필요한 금액만 빌리는지 점검한다. 월 상환액이 소득 대비 무리 없는지 계산한다. 기존 대출과 카드론, 할부까지 함께 본다. 고정금리와 변동금리를 비교한다. 중도상환수수료가 있는지 확인한다. 연체가 생겼을 때 신용점수에 미칠 영향을 생각한다. 특히 생활비가 부족해서 신용대출을 받는 경우에는 더 신중해야 한다. 단순히 이번 달 부족한 돈을 메우는 데서 끝나지 않고, 다음 달부터 이자와 원금 상환이 새 고정비로 들어오기 때문이다.
가장 피해야 할 흐름은 신용대출로 카드값을 막고, 다시 카드론이나 현금서비스로 대출 상환을 막는 구조다. 이런 식으로 빚이 돌기 시작하면 금리는 점점 높아지고 선택지는 줄어든다.
신용대출은 필요한 순간에 도움이 되는 도구지만, 감당 가능한 범위를 넘으면 빠르게 부담이 커질 수 있다. 대출 가능 금액보다 &ldquo;매달 얼마까지 무리 없이 갚을 수 있는가&quot;를 먼저 계산해야 한다.
정리 &nbsp; 신용대출은 담보 없이 개인의 신용과 상환 능력을 바탕으로 돈을 빌리는 대출이다. 절차가 비교적 간단하고 빠르지만, 담보대출보다 금리가 높을 수 있고 연체 시 신용점수에 직접 영향을 줄 수 있다.
핵심만 다시 정리하면 이렇다.
신용대출은 직업, 소득, 신용점수, 기존 대출, 연체 이력 등을 종합해 심사한다. 금리는 기준금리, 가산금리, 우대금리 구조로 이해하면 쉽다. 한도는 연소득뿐 아니라 기존 대출과 DSR 영향을 함께 받는다. 건별대출은 목돈이 필요할 때, 마이너스통장은 현금흐름 관리가 필요할 때 적합하다. 대출 전에는 월 상환액, 중도상환수수료, 금리 방식, 연체 위험을 반드시 확인해야 한다. 신용대출을 잘 쓰려면 빠른 실행보다 명확한 계획이 먼저다. 돈이 필요한 이유, 갚을 방법, 최악의 경우 버틸 수 있는 기간까지 생각한 뒤 결정하는 것이 좋다.
자주 묻는 질문 &nbsp; 신용대출과 마이너스통장은 같은 것일까? &nbsp; 마이너스통장도 신용대출의 한 종류다. 다만 일반 건별대출은 한 번에 돈을 빌리는 방식이고, 마이너스통장은 정해진 한도 안에서 필요한 만큼 꺼내 쓰는 방식이다.
신용점수가 높으면 무조건 낮은 금리로 받을 수 있을까? &nbsp; 무조건은 아니다. 신용점수는 중요한 요소지만 소득, 재직 기간, 기존 대출, 연체 이력, 금융사 내부 기준도 함께 반영된다. 그래서 같은 신용점수라도 금융사마다 금리와 한도가 다를 수 있다.
신용대출을 빨리 갚으면 좋은가? &nbsp; 이자 부담을 줄일 수 있다는 점에서는 좋다. 다만 건별 신용대출은 상품에 따라 중도상환수수료가 있을 수 있으므로, 조기 상환 전에 수수료와 절감되는 이자를 함께 비교해야 한다.`}).add({id:80,href:"/docs/isa/account-type/trust/",title:"신탁형 ISA",description:"신탁형 ISA의 뜻, 운용 가능 상품, 국내 상장주식 투자 가능 여부, 손익통산, 신탁보수, 중개형 ISA와의 차이를 초보자도 이해하기 쉽게 정리했다.",content:`ISA 계좌를 알아보다 보면 신탁형, 일임형, 중개형이라는 말이 계속 나온다. 이름만 봐서는 차이가 잘 안 느껴진다. 특히 신탁형 ISA는 &ldquo;은행에서 만드는 ISA인가?&rdquo;, &ldquo;국내 주식도 살 수 있나?&rdquo;, &ldquo;중개형 ISA와 뭐가 다른가?&rdquo; 같은 질문이 자연스럽게 생긴다.
신탁형 ISA는 내가 원하는 금융상품을 고르고, 금융기관에 운용을 지시하는 방식의 ISA다. 정기예금, 펀드 같은 상품을 한 계좌 안에서 운용할 수 있고, 일부 금융기관에서는 국내 상장주식도 선택할 수 있다.
다만 모든 신탁형 ISA가 똑같은 상품을 제공하는 것은 아니다. 금융기관마다 운용 가능 상품, 최저 가입 금액, 보수율, 주식 투자 가능 범위가 다르다. 이 글에서는 신탁형 ISA의 개념과 투자 가능 상품, 국내 주식 투자 가능 여부, 신탁보수와 주의사항을 정리했다.
신탁형 ISA란 무엇인가? &nbsp; 신탁형 ISA는 투자자가 직접 금융상품을 선택하고, 금융기관에 구체적인 운용 지시를 내리는 ISA다. ISA는 개인종합자산관리계좌라는 뜻이고, 한 계좌 안에서 여러 금융상품을 운용하면서 세제 혜택을 받을 수 있는 계좌다.
ISA는 운용 방식에 따라 크게 세 가지로 나뉜다.
신탁형 ISA: 내가 상품을 고르고 금융기관에 운용 지시를 한다. 일임형 ISA: 모델포트폴리오를 고르면 금융기관 전문가가 운용한다. 중개형 ISA: 증권사 계좌처럼 투자자가 직접 주식, ETF 등을 사고판다. 신탁형 ISA의 핵심은 &ldquo;직접 선택하되, 신탁계약을 통해 운용한다&quot;는 점이다. 예금성 상품을 담을 수 있다는 점도 중개형 ISA와 구분되는 중요한 특징이다.
세제 혜택 구조는 다른 ISA와 비슷하다. 의무가입기간 3년 이상을 유지하면 계좌 안에서 발생한 통산이익에 대해 비과세 또는 분리과세 혜택을 받을 수 있다.
신탁형 ISA로 운용할 수 있는 상품 &nbsp; 신탁형 ISA는 금융기관이 제공하는 상품 목록 안에서 운용할 상품을 선택하는 방식이다. 일반적으로 정기예금, 펀드, 현금성 자산 등을 담을 수 있다. 일부 금융기관에서는 국내 상장주식도 운용 대상에 포함된다.
KB Think 자료에 따르면 KB국민은행 신탁형 ISA는 2025년 12월 기준 정기예금, 펀드, 국내 상장주식 일부에 투자할 수 있다. 특히 국내 상장주식은 36개 종목이 대상이라고 안내되어 있다. 이 숫자와 대상 종목은 기준일 이후 바뀔 수 있으므로 가입 전 최신 목록을 확인해야 한다.
운용 가능 상품과 최저 가입 금액은 예시로 보면 다음과 같다.
투자 가능 상품 최저 가입 금액 정기예금 1만원 펀드 10만원 국내 상장주식 50만원, 100만원, 200만원 등 상품별 상이 이 표에서 중요한 것은 &ldquo;신탁형 ISA에서도 국내 주식이 가능할 수 있다&quot;는 점과 &ldquo;모든 주식을 자유롭게 살 수 있는 것은 아니다&quot;라는 점이다. 중개형 ISA처럼 원하는 국내 주식을 자유롭게 매매하는 구조와는 다르다.
국내 주식도 신탁형 ISA에서 살 수 있을까? &nbsp; 가능한 경우가 있다. 다만 조건이 붙는다.
예를 들어 KB국민은행 신탁형 ISA는 2025년 12월 기준 일부 국내 상장주식에 투자할 수 있다고 안내한다. 하지만 해외 주식은 현재 투자 대상이 아니며, 국내 상장주식도 금융기관이 정한 범위 안에서만 가능하다.
그래서 질문을 정확히 나누면 답이 명확해진다.
&ldquo;신탁형 ISA에서 국내 주식 투자가 가능한가?&rdquo; 가능할 수 있다. &ldquo;모든 국내 주식을 자유롭게 사고팔 수 있나?&rdquo; 그렇지 않다. &ldquo;해외 주식도 가능한가?&rdquo; KB국민은행 신탁형 ISA 기준으로는 불가능하다고 안내되어 있다. &ldquo;주식 매매를 자유롭게 하고 싶다면?&rdquo; 중개형 ISA가 더 적합할 수 있다. 신탁형 ISA의 국내 주식 투자는 선택지가 넓어졌다는 의미는 있지만, 일반 주식계좌나 중개형 ISA와 같은 자유로운 매매를 기대하면 다를 수 있다.
손익통산을 이해해야 세제 혜택이 보인다 &nbsp; ISA의 절세 효과를 이해하려면 손익통산을 알아야 한다. 손익통산은 계좌 안에서 여러 상품을 운용해 생긴 이익과 손실을 합쳐 최종 순이익을 계산하는 방식이다.
예를 들어 ISA 안에서 예금 이자 30만원이 생기고, 펀드에서 20만원 손실이 났다면 단순히 이자 30만원만 보는 것이 아니라 전체적으로 10만원 순이익을 기준으로 세제 혜택을 판단하는 식이다.
다만 국내 상장주식은 주의가 필요하다. 국내 상장주식 매매차익은 원래 비과세 성격이 있기 때문에, 이익이 발생해도 ISA 손익통산에 반영되지 않을 수 있다. 반대로 손실이 발생하면 그 손실 금액은 손익통산에 반영된다고 안내되어 있다.
이 부분은 초보자가 헷갈리기 쉽다. &ldquo;ISA 안에서 주식을 샀으니 모든 수익과 손실이 똑같이 합산되겠지&quot;라고 생각하면 안 된다. 상품별 과세 구조에 따라 손익통산 반영 방식이 달라질 수 있다.
신탁형 ISA와 중개형 ISA 차이 &nbsp; 신탁형 ISA와 중개형 ISA는 둘 다 ISA지만 사용감이 꽤 다르다. 가장 큰 차이는 가입 기관과 운용 가능 상품이다.
구분 신탁형 ISA 중개형 ISA 주된 가입 기관 은행 중심 증권사 운용 방식 투자자가 상품을 골라 운용 지시 투자자가 직접 매매 예금성 상품 가능 일반적으로 불가능 국내 주식 금융기관이 정한 범위 내 가능할 수 있음 국내 상장주식 직접 매매 가능 적합한 사람 예금, 펀드, 일부 투자상품을 함께 담고 싶은 사람 ETF, 국내 주식 중심으로 직접 투자하고 싶은 사람 신탁형 ISA는 예금성 상품을 담고 싶은 사람에게 장점이 있다. 예금과 펀드를 함께 운용하면서 ISA 세제 혜택을 받고 싶다면 신탁형이 맞을 수 있다.
반대로 ETF나 국내 주식을 직접 사고팔고 싶다면 중개형 ISA가 더 직관적이다. 다만 중개형 ISA는 예금성 상품 운용이 어렵기 때문에 안정적인 정기예금을 함께 담고 싶은 사람에게는 맞지 않을 수 있다.
신탁보수는 어떻게 계산될까? &nbsp; 신탁형 ISA는 운용자산별로 신탁보수가 발생한다. 쉽게 말하면 계좌 안에 어떤 상품을 얼마나 담고 있느냐에 따라 비용이 달라진다.
신탁보수는 보통 다음 구조로 계산된다.
신탁보수 = 운용자산별 평균잔액 x 운용자산별 보수율의 합계
KB Think 자료 기준으로 2025년 12월 신탁형 ISA 운용자산별 보수 예시는 다음과 같다.
상품 종류 신탁보수 현금성자산 후취 연 0.1% 타행정기예금 후취 연 0.1% 펀드 후취 연 0.3% 이하 주식 후취 연 0.2% 여기서 후취는 먼저 떼는 것이 아니라 나중에 보수를 받는 방식이라는 뜻이다. 펀드는 신탁보수 외에 펀드 자체의 운용보수나 판매보수 같은 비용이 따로 있을 수 있다. 특히 A클래스 펀드처럼 선취판매수수료가 있는 상품은 비용 구조를 더 꼼꼼히 봐야 한다.
수수료가 작아 보여도 장기 투자에서는 수익률에 영향을 준다. 그래서 신탁형 ISA에 가입할 때는 세제 혜택만 보지 말고 보수율도 같이 확인해야 한다.
신탁형 ISA 가입 전 체크할 점 &nbsp; 신탁형 ISA는 예금, 펀드, 일부 주식까지 함께 담을 수 있어 편해 보이지만 가입 전 확인할 것이 많다.
먼저 투자 가능 상품 목록을 확인해야 한다. &ldquo;국내 주식 가능&quot;이라는 말만 보고 가입했는데 내가 사고 싶은 종목이 목록에 없을 수 있다. 해외 주식 투자를 기대했다면 현재 제공 여부도 반드시 확인해야 한다.
둘째, 상품별 위험등급을 봐야 한다. 신탁형 ISA 안에서 운용할 수 있는 상품은 위험도에 따라 등급이 나뉜다. 예금은 비교적 안정적이지만 펀드나 주식은 원금손실 가능성이 있다.
셋째, 의무가입기간을 확인해야 한다. ISA 세제 혜택을 받으려면 원칙적으로 3년 이상 유지해야 한다. 중도해지하거나 국세청 부적격 통보를 받으면 과세특례를 적용받은 세액이 추징될 수 있다.
넷째, 예금자보호 범위를 구분해야 한다. ISA 계좌 안에 예금보호 대상 상품이 들어 있으면 해당 상품은 보호 대상이 될 수 있지만, 투자성 상품은 원금손실이 투자자에게 귀속된다. ISA 계좌 자체가 전부 원금보장되는 것은 아니다.
정리: 신탁형 ISA는 예금과 투자상품을 함께 운용하고 싶을 때 유용하다 &nbsp; 신탁형 ISA는 한 계좌 안에서 정기예금, 펀드, 일부 국내 상장주식 같은 상품을 선택해 운용할 수 있는 ISA다. 투자자가 직접 상품을 고르고 금융기관에 운용 지시를 한다는 점에서 일임형과 다르고, 예금성 상품을 담을 수 있다는 점에서 중개형과 다르다.
핵심만 정리하면 이렇다.
신탁형 ISA는 투자자가 상품을 선택해 금융기관에 운용 지시하는 계좌다. 정기예금, 펀드, 현금성 자산 등을 담을 수 있다. 일부 금융기관에서는 국내 상장주식도 운용 가능하다. 해외 주식은 금융기관별 제공 여부를 확인해야 하며, KB국민은행 신탁형 ISA 기준으로는 불가능하다고 안내되어 있다. 국내 상장주식은 이익과 손실의 손익통산 반영 방식이 다를 수 있다. 신탁보수는 운용자산별 평균잔액과 보수율에 따라 계산된다. 세제 혜택을 받으려면 3년 이상 유지하는 것이 중요하다. 신탁형 ISA는 안정적인 예금성 상품과 투자상품을 한 계좌에서 함께 관리하고 싶은 사람에게 잘 맞는다. 다만 직접 주식과 ETF를 자유롭게 사고팔고 싶다면 중개형 ISA가 더 적합할 수 있다. 가입 전에는 &ldquo;내가 원하는 상품을 실제로 담을 수 있는지&quot;와 &ldquo;보수까지 고려해도 유리한지&quot;를 먼저 확인하는 것이 좋다.
자주 묻는 질문 &nbsp; Q1. 신탁형 ISA에서 국내 주식도 살 수 있나? &nbsp; 가능한 금융기관이 있다. 다만 모든 국내 주식을 자유롭게 살 수 있는 것은 아니고, 금융기관이 정한 운용 가능 종목 안에서 선택해야 한다.
Q2. 신탁형 ISA에서 해외 주식도 살 수 있나? &nbsp; 금융기관별로 다르지만, KB국민은행 신탁형 ISA 기준으로는 현재 해외 주식 투자가 불가능하다고 안내되어 있다. 해외 주식이나 해외 ETF를 원한다면 가입 전 상품 범위를 확인해야 한다.
Q3. 신탁형 ISA와 중개형 ISA 중 무엇이 더 좋나? &nbsp; 예금성 상품과 펀드를 함께 담고 싶다면 신탁형 ISA가 유리할 수 있다. 국내 주식이나 ETF를 직접 매매하고 싶다면 중개형 ISA가 더 편할 수 있다.
Q4. 신탁형 ISA도 3년을 유지해야 하나? &nbsp; 세제 혜택을 받으려면 의무가입기간 3년 이상을 유지해야 한다. 3년을 채우지 않고 중도해지하면 세제 혜택이 줄거나 추징될 수 있다.
Q5. 신탁형 ISA는 원금보장 상품인가? &nbsp; 아니다. 계좌 안에 예금보호 대상 상품이 있으면 해당 상품은 보호 대상이 될 수 있지만, 펀드나 주식 같은 투자성 상품은 원금손실이 발생할 수 있다.`}).add({id:81,href:"/posts/medical-expense-insurance-non-covered-items/",title:"실비보험 비급여 보장 총정리, 급여와 비급여 차이부터 ...",description:"실비보험에서 헷갈리는 급여와 비급여 차이, 비급여 보장 항목, 자기부담금, 도수치료·MRI·수액 청구 시 주의할 점을 누구나 이해하기 쉽게 정리하였다.",content:`병원비 영수증을 보면 급여, 비급여라는 단어가 나온다. 처음에는 그냥 병원에서 쓰는 어려운 말처럼 보이지만, 실비보험을 청구할 때는 이 두 단어를 반드시 알아야 한다. 내가 낸 병원비 중 어디까지 건강보험이 적용됐는지, 어디까지 실비보험으로 받을 수 있는지가 여기서 갈리기 때문이다.
특히 비급여는 병원비 부담이 커지기 쉬운 영역이다. 건강보험이 적용되지 않기 때문에 환자가 전액 부담하고, 병원마다 가격도 다를 수 있다. 도수치료, 체외충격파, 일부 MRI·초음파, 영양수액, 비급여 주사 같은 항목에서 &ldquo;생각보다 병원비가 많이 나왔다&quot;고 느끼는 경우가 많다.
그렇다고 비급여가 전부 실비보험으로 보장되는 것은 아니다. 가입한 실손보험 세대, 특약 가입 여부, 치료 목적, 약관의 보장 제외 항목에 따라 결과가 달라진다. 이 글에서는 급여와 비급여의 차이, 실비보험에서 비급여가 어떻게 보장되는지, 청구 전에 확인해야 할 내용을 누구나 이해하기 쉽게 정리하였다.
급여와 비급여 차이 &nbsp; 급여와 비급여는 건강보험 적용 여부로 나뉜다. 건강보험심사평가원 설명에 따르면 일반적으로 건강보험 혜택이 적용되는 진료항목을 급여, 그렇지 않은 항목을 비급여라고 한다.
쉽게 말하면 급여는 국가 건강보험 체계 안에서 가격과 기준이 관리되는 항목이고, 비급여는 건강보험이 적용되지 않아 환자가 비용을 전부 부담하는 항목이다.
구분 급여 비급여 건강보험 적용 적용됨 적용 안 됨 비용 부담 공단+본인 전액 본인 가격 결정 국가 고시 또는 기준 적용 병원 자율, 병원마다 다를 수 있음 주요 목적 치료 목적 선택 진료, 일부 검사, 미용, 예방, 비급여 치료 등 예를 들어 감기 진료처럼 건강보험이 적용되는 일반 진료는 급여 항목에 해당하는 경우가 많다. 이때 병원비 전체를 내가 다 내는 것이 아니라, 건강보험공단이 일부를 부담하고 나는 본인부담금만 낸다.
반대로 라식·라섹 같은 시력교정술, 일부 치과 보철, 일반진단서 발급, 미용 목적 시술, 일부 비급여 검사와 치료는 비급여로 처리될 수 있다. 비급여는 병원마다 가격 차이가 날 수 있으므로 같은 치료명이라도 병원비가 다르게 나올 수 있다.
여기서 중요한 점은 &ldquo;비급여 = 나쁜 진료&quot;가 아니라는 것이다. 건강보험 적용 대상이 아니거나 급여 기준을 벗어난 진료라는 뜻에 가깝다. 치료에 꼭 필요할 수도 있고, 선택적 목적일 수도 있다. 그래서 병원에서 비급여 설명을 들을 때는 왜 필요한지, 대체 가능한 급여 진료가 있는지, 비용은 얼마인지 확인하는 것이 좋다.
실비보험은 비급여를 어디까지 보장할까 &nbsp; 실비보험은 실제 부담한 의료비를 약관 기준에 따라 보장하는 보험이다. 급여 본인부담금뿐 아니라 일부 비급여 항목도 보장될 수 있다. 다만 모든 비급여가 자동으로 보장되는 것은 아니다.
비급여 보장에서 가장 먼저 확인할 것은 내가 가입한 실손보험의 세대와 특약이다. 최근 실손보험은 급여와 비급여 보장을 나누어 관리하는 구조가 강해졌고, 4세대 실손보험은 비급여 보장을 특약 형태로 분리해서 보는 경우가 많다.
일반적으로 실비보험에서 보장 가능성이 있는 비급여 항목은 다음과 같다.
치료 목적의 MRI, CT, 초음파 검사 도수치료, 체외충격파, 증식치료 일부 비급여 주사나 약제 일부 수술·처치 관련 비급여 상급병실료 차액 일부 하지만 아래 항목은 보장되지 않거나 제한될 가능성이 크다.
미용 목적 성형수술 라식·라섹 같은 시력교정술 단순 피로 회복 목적의 영양수액 예방 목적의 건강검진 추가 항목 예방접종 치아교정, 미백 등 미용·교정 목적 치과 치료 의학적 필요성이 확인되지 않는 검사나 치료 핵심은 치료 목적 이다. 같은 수액이라도 질병 치료를 위해 의사가 필요하다고 판단한 경우와 단순 영양 보충이나 피로 회복 목적은 보험금 판단이 달라질 수 있다. 같은 검사라도 진단이나 치료 과정에서 필요한 검사인지, 단순 확인이나 예방 목적의 검사인지에 따라 보장 여부가 달라질 수 있다.
그래서 비급여 진료를 받기 전에는 병원에 &ldquo;실손보험 청구용으로 진료비 세부내역서와 진단명 확인 서류가 필요한지&quot;를 물어보는 것이 좋다. 보험사에는 &ldquo;이 항목이 내 약관에서 보장되는지&quot;를 확인해야 한다.
자기부담금과 세대별 차이를 봐야 한다 &nbsp; 실비보험에서 비급여가 보장된다고 해도 병원비 전액을 돌려받는다는 뜻은 아니다. 대부분 자기부담금이 있다. 자기부담금은 보험사가 지급하지 않고 가입자가 직접 부담하는 금액 또는 비율이다.
예를 들어 비급여 치료비 10만 원이 나왔고 자기부담금이 30%라면, 단순 계산으로 3만 원은 본인이 부담하고 나머지 7만 원이 보장 대상이 될 수 있다. 다만 실제 지급액은 약관의 공제금액, 보장 한도, 횟수 제한, 통원 한도에 따라 달라진다.
실손보험은 가입 시기에 따라 흔히 1세대, 2세대, 3세대, 4세대로 나누어 설명한다.
구분 대략적인 가입 시기 비급여 보장 특징 1세대 2009년 9월 이전 자기부담금이 낮거나 없는 상품이 많지만 약관별 차이가 큼 2세대 2009년 10월~2017년 3월 자기부담금 구조가 본격적으로 적용됨 3세대 2017년 4월~2021년 6월 도수치료·비급여 주사·MRI 등이 특약으로 분리됨 4세대 2021년 7월 이후 급여와 비급여를 구분하고 비급여 이용량에 따라 보험료 변동 가능 특히 4세대 실손보험은 비급여 보험금 수령액에 따라 다음 갱신 때 보험료가 달라질 수 있다. 비급여 진료를 많이 청구하면 보험료가 오를 수 있고, 청구가 적으면 할인될 수 있는 구조다. 그래서 4세대 실손보험 가입자는 &ldquo;청구하면 무조건 이득&quot;이라고만 보기보다, 실제 받을 보험금과 향후 보험료 영향을 함께 생각해야 한다.
물론 병원비가 크고 치료가 필요한 상황이라면 보험을 쓰는 것이 맞다. 다만 소액 비급여를 자주 청구하는 경우에는 내 상품 구조를 알고 판단하는 편이 좋다.
비급여 진료 전후 체크리스트 &nbsp; 비급여는 병원마다 가격이 다를 수 있고, 실비보험 보장 여부도 약관에 따라 달라진다. 그래서 진료를 받은 뒤에야 &ldquo;이건 보험금이 안 나온다&quot;는 말을 들으면 당황하기 쉽다.
비급여 진료 전에는 아래 내용을 확인하는 것이 좋다.
이 진료가 급여인지 비급여인지 묻는다. 비급여라면 총 예상 비용을 확인한다. 치료 목적이 명확한지 확인한다. 대체 가능한 급여 진료가 있는지 물어본다. 내 실비보험 약관에서 보장되는 항목인지 보험사에 확인한다. 횟수 제한이나 연간 보장 한도를 확인한다. 진료비 영수증과 진료비 세부내역서를 챙긴다. 진료 후 청구할 때는 서류가 중요하다. 비급여 항목은 보험사가 치료 목적과 세부 내용을 확인하려는 경우가 많기 때문이다.
기본적으로 챙길 서류는 다음과 같다.
진료비 영수증 진료비 세부내역서 처방전 또는 진단명 확인 서류 필요 시 의사 소견서, 진단서, 통원확인서 특히 도수치료, 체외충격파, 증식치료, 비급여 주사, MRI 같은 항목은 보험사에서 추가 서류를 요구할 수 있다. 병원비가 큰 편이라면 진료 당일에 원무과에서 &ldquo;실손보험 청구에 필요한 서류를 모두 발급해달라&quot;고 요청하는 것이 편하다.
비급여 비용은 건강보험심사평가원의 비급여진료비정보 서비스를 통해 일부 항목을 비교할 수 있다. 병원마다 가격이 다를 수 있으므로, 급하지 않은 검사나 치료라면 미리 가격을 확인해보는 것도 도움이 된다.
실비보험 비급여를 볼 때 흔한 오해 &nbsp; 비급여와 실비보험을 헷갈리게 만드는 오해가 몇 가지 있다. 대표적인 것은 &ldquo;비급여는 실비보험으로 다 받을 수 있다&quot;는 생각이다. 실제로는 보장되는 비급여와 보장되지 않는 비급여가 나뉜다.
또 하나는 &ldquo;의사가 권하면 무조건 보험금이 나온다&quot;는 생각이다. 의학적으로 필요하다는 판단과 보험 약관상 보장 여부는 다를 수 있다. 병원에서는 치료상 필요하다고 설명했지만, 보험사는 약관상 면책 항목 또는 보장 제외 항목으로 볼 수 있다.
반대로 &ldquo;비급여는 전부 보험이 안 된다&quot;는 생각도 틀리다. 치료 목적이 명확하고 약관에서 보장하는 항목이라면 비급여도 실비보험 청구가 가능하다. MRI, 초음파, 도수치료처럼 많은 사람이 청구하는 항목도 있다. 다만 한도와 횟수, 자기부담금이 중요하다.
결국 비급여 실비보험의 핵심은 세 가지다.
치료 목적이 있는가 내 약관에서 보장하는 항목인가 한도, 횟수, 자기부담금을 감안해도 청구 실익이 있는가 이 세 가지를 확인하면 비급여 진료비 때문에 생기는 불필요한 당황을 줄일 수 있다.
정리 &nbsp; 급여는 건강보험이 적용되는 진료항목이고, 비급여는 건강보험이 적용되지 않아 환자가 비용을 전액 부담하는 항목이다. 비급여는 병원마다 가격이 다를 수 있고, 실비보험 보장 여부도 상품과 약관에 따라 달라진다.
핵심만 다시 정리하면 이렇다.
급여는 건강보험이 적용되고, 비급여는 건강보험이 적용되지 않는다. 비급여는 병원마다 가격 차이가 날 수 있어 사전 확인이 중요하다. 실비보험은 일부 비급여를 보장하지만 모든 비급여를 보장하지는 않는다. 도수치료, 체외충격파, 비급여 주사, MRI 등은 한도와 횟수 제한을 확인해야 한다. 4세대 실손보험은 비급여 청구 이력에 따라 보험료가 달라질 수 있다. 비급여 청구에는 진료비 영수증과 진료비 세부내역서가 특히 중요하다. 비급여 진료는 비용 부담이 커질 수 있는 만큼, 진료 전에 가격과 필요성을 확인하고 내 실비보험 약관까지 함께 보는 습관이 필요하다. 병원비를 줄이는 가장 현실적인 방법은 치료를 미루는 것이 아니라, 알고 선택하고 필요한 서류를 제대로 챙기는 것이다.
자주 묻는 질문 &nbsp; 비급여 항목은 실비보험으로 전부 보장될까? &nbsp; 아니다. 치료 목적이 명확하고 약관에서 보장하는 비급여만 보험금 지급 대상이 될 수 있다. 미용, 예방, 단순 피로 회복, 건강검진 목적의 항목은 보장되지 않을 가능성이 크다.
도수치료는 실비보험 청구가 가능할까? &nbsp; 가능한 경우가 많지만 가입한 실손보험 세대와 특약, 치료 목적, 횟수 제한에 따라 달라진다. 특히 3세대 이후 상품은 도수치료가 별도 특약으로 관리되는 경우가 많으므로 약관 확인이 필요하다.
비급여 진료를 받으면 어떤 서류를 챙겨야 할까? &nbsp; 기본적으로 진료비 영수증과 진료비 세부내역서를 챙기는 것이 좋다. 항목에 따라 처방전, 진단서, 의사 소견서, 통원확인서가 추가로 필요할 수 있으므로 보험사 앱의 청구 안내를 함께 확인해야 한다.`}).add({id:82,href:"/posts/medical-expense-insurance-claim-documents/",title:"실비보험 청구서류 정리, 통원·입원·약제비 청구 방법까...",description:"실비보험의 뜻과 통원·입원·약제비 청구서류, 진료비 영수증과 세부내역서 차이, 청구기간과 실손24 활용법을 누구나 이해하기 쉽게 정리하였다.",content:`살면서 아프지 않은 사람은 거의 없다. 가벼운 감기처럼 병원비가 몇천 원으로 끝날 때도 있지만, 검사나 치료가 이어지면 갑자기 몇십만 원이 나가기도 한다. 여유 자금이 있으면 버틸 수 있지만, 예상하지 못한 병원비는 누구에게나 부담이 된다.
이럴 때 떠올리게 되는 것이 실비보험이다. 정확히는 실손의료보험이라고 부르며, 병원이나 약국에서 내가 실제로 부담한 의료비 일부를 보험금으로 돌려받는 보험이다. 문제는 가입만 해놓고 청구를 미루는 사람이 많다는 점이다. 서류가 복잡해 보이고, 어떤 영수증을 내야 하는지 헷갈리기 때문이다.
실비보험은 청구해야 받을 수 있다. 보험료를 매달 내고 있어도 병원비를 자동으로 돌려주는 구조가 아니다. 이 글에서는 실비보험이 무엇인지, 통원·입원·약제비별 청구서류는 무엇인지, 청구기간과 실손24 활용법까지 누구나 이해하기 쉽게 정리하였다.
실비보험이란 무엇인가 &nbsp; 실비보험은 병원이나 약국에서 실제로 쓴 의료비 중 약관에서 보장하는 금액을 돌려받는 보험이다. 그래서 &ldquo;실제 손해를 보전한다&quot;는 의미로 실손의료보험이라고도 부른다.
예를 들어 병원 진료와 검사로 10만 원을 냈다고 하자. 이 금액 전부가 무조건 돌아오는 것은 아니다. 가입한 상품의 세대, 자기부담금, 급여·비급여 여부, 보장 제외 항목에 따라 실제 지급액이 달라진다. 그래도 갑작스럽게 병원비가 많이 나왔을 때 부담을 줄여주는 대표적인 생활 보험이라는 점은 분명하다.
실비보험을 이해할 때 가장 중요한 것은 두 가지다.
먼저 병원비를 본인이 결제한다. 이후 필요한 서류를 준비해 보험사에 보험금을 청구한다. 즉, 실비보험은 병원 창구에서 바로 할인받는 제도가 아니다. 병원비를 낸 뒤 보험사 앱, 홈페이지, 팩스, 우편, 방문 접수 등으로 청구해야 보험금 심사가 진행된다.
실비보험 청구서류 기본 구조 &nbsp; 실비보험 청구서류는 보험사와 청구 금액, 통원인지 입원인지, 비급여 항목이 있는지에 따라 달라질 수 있다. 그래도 기본 뼈대는 비슷하다.
가장 자주 쓰이는 서류는 다음과 같다.
서류 어디서 받나 왜 필요한가 보험금 청구서 보험사 앱·홈페이지·고객센터 보험사에 보험금을 요청하는 기본 양식 신분증 사본 본인 준비 본인 확인용 진료비 영수증 병원·약국 실제 결제한 의료비 확인 진료비 세부내역서 병원 급여·비급여, 검사·치료 항목 확인 처방전 병원 질병분류코드와 처방 내용 확인 약제비 영수증 약국 약국에서 결제한 약값 확인 여기서 특히 헷갈리는 것이 진료비 영수증과 카드 영수증이다. 실비 청구에 필요한 것은 카드 결제 영수증이 아니라 병원에서 발급하는 진료비 영수증이다. 카드 영수증에는 어떤 진료를 받았는지, 급여와 비급여가 어떻게 나뉘는지 나오지 않기 때문에 보험금 심사 자료로 부족할 수 있다.
진료비 세부내역서는 검사, 처치, 주사, 비급여 항목 등을 자세히 보여주는 서류다. 비급여 치료가 포함되어 있으면 보험사가 이 서류를 요구하는 경우가 많다. 병원비가 적더라도 비급여가 있다면 미리 발급받아두는 편이 좋다.
상황별 실비보험 청구서류 &nbsp; 실비보험은 통원, 입원, 약제비 청구로 나누어 생각하면 쉽다. 병원에 잠깐 다녀온 경우와 입원한 경우는 필요한 서류가 다르다.
통원 진료 청구서류 &nbsp; 통원은 병원에 방문해 진료나 검사를 받고 집으로 돌아온 경우다. 감기 진료, 정형외과 물리치료, 피부과 치료, 내과 검사 등이 여기에 들어간다.
통원 청구에서 기본적으로 준비할 서류는 다음과 같다.
보험금 청구서 신분증 사본 진료비 영수증 진료비 세부내역서 처방전 의료비가 크지 않고 비급여 항목이 없다면 일부 서류가 생략될 수 있다. 반대로 의료비가 10만 원을 넘거나 검사·치료 내용 확인이 필요한 경우에는 진단서, 통원확인서, 소견서 같은 추가 서류를 요청받을 수 있다.
처방전은 단순히 약을 받기 위한 종이로만 보면 안 된다. 실비 청구에서는 질병분류코드가 적힌 처방전이 중요한 증빙이 될 수 있다. 보험사가 &ldquo;왜 진료를 받았는지&quot;를 확인해야 하기 때문이다.
입원 청구서류 &nbsp; 입원은 통원보다 청구 금액이 커지는 경우가 많다. 그래서 보험사 심사도 더 꼼꼼하게 진행될 수 있다.
입원 청구에서 자주 필요한 서류는 다음과 같다.
보험금 청구서 신분증 사본 진료비 영수증 진료비 세부내역서 진단서, 입·퇴원 확인서, 진료확인서 중 하나 입원 관련 서류에는 입원 기간, 진단명, 질병분류코드가 확인되는 것이 좋다. 수술을 했다면 수술확인서나 수술기록 관련 서류를 추가로 요구받을 수 있다.
입원비는 금액이 커서 서류가 하나 빠지면 지급 심사가 지연되기 쉽다. 퇴원 수납할 때 &ldquo;실손보험 청구할 서류가 필요하다&quot;고 말하면 병원 원무과에서 필요한 서류를 안내해주는 경우가 많다.
약제비 청구서류 &nbsp; 병원 진료 후 약국에서 약을 받았다면 약제비도 실비보험 청구 대상이 될 수 있다. 이때 병원 영수증만 제출하면 약국 결제분이 누락될 수 있다.
약제비 청구에는 보통 다음 서류를 준비한다.
약제비 영수증 처방전 보험금 청구서 약국 영수증도 카드 영수증이 아니라 약제비 영수증이어야 한다. 약국에서 &ldquo;실비보험 청구용 영수증 주세요&quot;라고 말하면 더 정확하다.
실비보험 청구방법과 청구기간 &nbsp; 서류를 준비했다면 보험사에 청구하면 된다. 예전에는 팩스나 우편 접수가 많았지만, 지금은 대부분 보험사 앱에서 사진을 찍어 올리는 방식으로 처리할 수 있다.
실비보험 청구 방법은 보통 다음 중 하나다.
보험사 모바일 앱 보험사 홈페이지 보험사 콜센터 또는 담당 설계사 지점 방문 팩스 또는 우편 접수 실손24 앱 또는 홈페이지 가장 편한 방법은 보험사 앱이다. 병원과 약국에서 받은 서류를 휴대폰으로 촬영해 업로드하고, 지급받을 계좌를 입력하면 된다. 다만 금액이 크거나 서류가 부족하면 보험사에서 추가 자료를 요청할 수 있다.
실손24도 알아두면 좋다. 실손24는 보험개발원이 운영하는 실손보험 청구 전산화 서비스다. 참여 병원이나 약국에서 발생한 진료 관련 서류를 전자적으로 전송해 청구를 더 간편하게 할 수 있다. 다만 모든 의료기관이 연계된 것은 아니므로, 내가 이용한 병원이나 약국이 실손24 청구를 지원하는지 확인해야 한다.
청구기간도 중요하다. 보험금 청구권은 일반적으로 3년의 소멸시효가 있다. 병원비가 적다고 미루다가 기간을 넘기면 보험금을 받기 어려울 수 있다. 소액이라도 진료를 받은 뒤 서류를 모아 바로 청구하는 습관을 들이는 것이 좋다.
청구 전에 꼭 확인할 것 &nbsp; 실비보험은 가입 시기와 상품에 따라 보장 범위가 다르다. 같은 병원비를 냈더라도 어떤 사람은 더 많이 돌려받고, 어떤 사람은 적게 받을 수 있다. 자기부담금, 급여·비급여 구분, 보장 제외 항목, 특약 여부가 다르기 때문이다.
청구 전에는 아래 항목을 확인하는 것이 좋다.
내가 가입한 보험사가 어디인지 확인한다. 보험사 앱에서 청구 가능 금액과 필요서류 안내를 본다. 진료비 영수증과 카드 영수증을 헷갈리지 않는다. 비급여가 있다면 진료비 세부내역서를 발급받는다. 약국 결제분은 약제비 영수증을 따로 챙긴다. 의료비가 크면 진단서나 입·퇴원 확인서 필요 여부를 보험사에 확인한다. 청구를 미루지 말고 가능한 빨리 접수한다. 실비보험 청구는 한 번 해보면 어렵지 않다. 처음이 번거로울 뿐이다. 병원 수납창구에서 &ldquo;실손보험 청구할 서류 주세요&quot;라고 말하는 것부터 시작하면 된다. 이후에는 보험사 앱으로 사진을 찍어 올리는 방식에 익숙해지면 소액 병원비도 놓치지 않고 챙길 수 있다.
정리 &nbsp; 실비보험은 병원비 부담을 줄여주는 보험이지만, 자동으로 돈이 들어오는 구조는 아니다. 내가 병원비를 낸 뒤 필요한 서류를 준비해서 보험사에 청구해야 한다.
핵심만 다시 정리하면 이렇다.
실비보험은 실제 부담한 의료비 일부를 약관 기준에 따라 돌려받는 보험이다. 통원은 진료비 영수증, 진료비 세부내역서, 처방전이 중요하다. 입원은 입·퇴원 확인서나 진단서처럼 입원 사실과 진단명을 확인할 서류가 필요하다. 약제비는 약국의 약제비 영수증과 처방전을 따로 챙겨야 한다. 보험금 청구권은 일반적으로 3년 안에 행사해야 하므로 미루지 않는 것이 좋다. 실손24나 보험사 앱을 활용하면 청구 절차를 줄일 수 있다. 실비보험은 아플 때를 대비하는 보험이다. 병원비가 작다고 넘기지 말고, 서류를 챙기는 습관을 만들어두면 갑자기 큰 의료비가 생겼을 때도 덜 당황할 수 있다.
자주 묻는 질문 &nbsp; 실비보험 청구할 때 카드 영수증만 내도 될까? &nbsp; 대부분은 부족하다. 보험사 심사에는 병원에서 발급하는 진료비 영수증과 진료비 세부내역서가 필요할 수 있다. 카드 영수증은 결제 사실만 보여주기 때문에 진료 내용 확인 자료로는 한계가 있다.
병원비가 1만 원 정도여도 실비보험 청구할 수 있을까? &nbsp; 청구 자체는 가능할 수 있지만, 자기부담금과 최소 공제금액 때문에 실제 받을 보험금이 없거나 적을 수 있다. 가입한 상품의 자기부담금 기준을 확인한 뒤 청구하는 것이 좋다.
진료비 세부내역서는 항상 필요한가? &nbsp; 항상 필요한 것은 아니다. 비급여 항목이 없거나 소액 청구라면 생략되는 경우도 있다. 다만 보험사마다 기준이 다르고, 비급여 치료가 있으면 요구될 가능성이 높으므로 병원에 간 김에 발급받아두면 청구가 편하다.`}).add({id:83,href:"/posts/medical-expense-insurance-generation-premium/",title:"실손보험 가입시기별 보험료 차이, 1세대부터 4세대까지...",description:"실손보험은 가입시기에 따라 1세대부터 4세대까지 나뉘고 보험료와 보장범위가 다르다. 세대별 특징과 전환 전 확인할 내용을 쉽게 정리했다.",content:`실손보험은 대부분 한 번쯤 들어본 보험이다. 병원이나 약국에서 쓴 의료비를 일부 돌려받을 수 있어서 &ldquo;제2의 건강보험&quot;처럼 생각하는 사람도 많다. 그런데 같은 실손보험이라고 해도 보험료가 모두 같지는 않다.
특히 가입한 시기에 따라 보험료와 보장 범위가 크게 달라질 수 있다. 오래전에 가입한 실손보험은 보장이 넓은 대신 보험료가 비싼 경우가 있고, 최근 상품은 보험료가 비교적 낮은 대신 자기부담금과 비급여 관리가 더 엄격한 편이다.
그래서 실손보험을 볼 때는 &ldquo;내가 실손보험에 가입되어 있는가&quot;만 확인하면 부족하다. 언제 가입했는지, 몇 세대 실손보험인지, 갱신 때 보험료가 어떻게 오를 수 있는지까지 알아야 한다. 이 글에서는 실손보험 가입시기별 차이와 보험료가 달라지는 이유를 누구나 이해하기 쉽게 정리하였다.
실손보험은 가입시기에 따라 세대가 나뉜다 &nbsp; 실손보험은 병원비를 보장한다는 큰 틀은 같지만, 판매 시기마다 상품 구조가 바뀌었다. 보통 1세대, 2세대, 3세대, 4세대 실손보험으로 구분한다.
현재 새로 가입할 수 있는 실손보험은 4세대 실손보험이다. 1~3세대 상품은 과거에 가입한 사람만 유지하고 있는 형태라고 보면 된다.
대략적인 구분은 다음과 같다.
구분 대략적인 가입 시기 특징 1세대 실손보험 2009년 9월 이전 자기부담금이 낮거나 없는 상품이 많고 보장 범위가 넓은 편 2세대 실손보험 2009년 10월~2017년 3월 표준화 이후 상품으로 자기부담금 구조가 적용됨 3세대 실손보험 2017년 4월~2021년 6월 도수치료, 비급여 주사, MRI 등 일부 비급여 특약 분리 4세대 실손보험 2021년 7월 이후 급여와 비급여를 구분하고 비급여 이용량에 따라 보험료 변동 가능 정확한 세대는 보험증권, 보험사 앱, 보험사 고객센터에서 확인할 수 있다. 가입일만 봐도 대략적인 세대는 추정할 수 있지만, 상품마다 세부 약관이 다를 수 있으므로 실제 판단은 내 보험증권을 기준으로 해야 한다.
오래된 실손보험은 왜 보험료가 비쌀까 &nbsp; 오래전에 가입한 실손보험은 보장 범위가 넓은 경우가 많다. 특히 1세대 실손보험은 자기부담금이 낮거나 없는 상품이 많아 병원비가 발생했을 때 가입자가 부담하는 금액이 적은 편이다.
가입자 입장에서는 좋은 구조처럼 보인다. 병원비가 많이 나와도 보험에서 보장되는 비율이 높기 때문이다. 하지만 보험사 입장에서는 지급해야 할 보험금이 많아질 수 있고, 그 부담은 갱신보험료에 반영된다.
실손보험은 대부분 갱신형이다. 갱신형 보험은 일정 기간마다 보험료가 다시 계산된다. 나이가 들수록 질병이나 치료 가능성이 높아지고, 전체 가입자의 보험금 청구가 많아지면 보험료가 오를 수 있다.
그래서 오래된 실손보험은 다음과 같은 특징이 나타날 수 있다.
보장 범위가 넓은 편이다. 자기부담금이 낮은 상품이 많다. 보험료가 상대적으로 비싸질 수 있다. 갱신 때 보험료 인상 폭이 부담될 수 있다. 중요한 것은 오래된 실손보험이 무조건 나쁘다는 뜻이 아니라는 점이다. 병원 이용이 많거나 앞으로 치료 가능성이 걱정되는 사람에게는 넓은 보장이 오히려 유리할 수 있다. 다만 매달 내는 보험료를 감당할 수 있는지, 실제로 보장을 얼마나 활용하고 있는지 따져봐야 한다.
4세대 실손보험은 무엇이 다를까 &nbsp; 2021년 7월 이후 판매되는 4세대 실손보험은 기존 실손보험보다 보험료가 비교적 낮게 설계된 편이다. 대신 보장 구조가 더 세분화되었고, 비급여 이용량에 따라 보험료가 달라질 수 있다.
4세대 실손보험의 핵심은 급여와 비급여를 나누어 관리한다는 점이다. 급여는 건강보험이 적용되는 진료항목이고, 비급여는 건강보험이 적용되지 않아 환자가 전액 부담하는 항목이다.
4세대 실손보험은 비급여 진료를 많이 이용하고 보험금을 많이 청구하면 다음 갱신 때 보험료가 할증될 수 있다. 반대로 비급여 보험금 청구가 적으면 할인 혜택을 받을 수 있는 구조다.
이 구조는 병원을 거의 가지 않는 사람에게는 유리할 수 있다. 보험료 부담을 낮게 가져갈 수 있기 때문이다. 반대로 도수치료, 체외충격파, 비급여 주사, MRI 같은 비급여 진료를 자주 받는 사람이라면 실제 부담이 커질 수 있다.
4세대 실손보험을 볼 때는 아래 내용을 꼭 확인해야 한다.
기존 실손보험보다 월 보험료가 얼마나 줄어드는지 확인한다. 자기부담금이 얼마나 늘어나는지 본다. 비급여 특약 보장 한도와 횟수 제한을 확인한다. 비급여 보험금 청구 시 보험료 할증 가능성을 본다. 내가 자주 받는 치료가 보장 대상인지 확인한다. 보험료가 싸다는 이유만으로 전환하면 안 된다. 실손보험은 보험료와 보장 범위를 같이 봐야 한다.
보험료가 오르는 이유는 내 청구만 때문이 아니다 &nbsp; 실손보험료가 오르면 많은 사람이 &ldquo;내가 병원을 많이 안 갔는데 왜 오르지?&ldquo;라고 생각한다. 하지만 1~3세대 실손보험은 개인의 청구 이력만으로 보험료가 정해지는 구조가 아니다.
같은 상품군, 같은 연령대, 같은 성별의 전체 손해율이 반영될 수 있다. 쉽게 말해 내가 병원비를 거의 청구하지 않았더라도 같은 그룹의 가입자들이 보험금을 많이 청구하면 갱신보험료가 오를 수 있다.
여기에 나이 증가도 영향을 준다. 보험료는 보통 나이가 들수록 올라간다. 의료 이용 가능성이 커진다고 보기 때문이다.
실손보험료가 오르는 대표적인 이유는 다음과 같다.
나이 증가 전체 가입자의 보험금 청구 증가 의료비 상승 비급여 진료 이용 증가 상품 세대별 손해율 반영 반면 4세대 실손보험은 비급여 보험금 청구 이력에 따라 개인별 할인·할증 구조가 더 뚜렷하게 적용된다. 그래서 내가 비급여를 얼마나 쓰는지가 보험료에 더 직접적으로 영향을 줄 수 있다.
기존 실손보험을 유지할지 전환할지 판단하는 방법 &nbsp; 기존 실손보험료가 많이 올랐다면 4세대 실손보험 전환을 고민할 수 있다. 하지만 전환은 단순히 보험료만 보고 결정하면 위험하다. 한 번 전환하면 예전 상품으로 되돌리기 어렵거나 제한이 있을 수 있기 때문이다.
유지와 전환을 판단할 때는 아래 질문을 해보는 것이 좋다.
최근 1~2년 동안 병원비 청구가 많았는가? 앞으로 꾸준히 치료가 필요한 질환이 있는가? 도수치료, 주사치료, MRI 같은 비급여 이용이 많은가? 현재 보험료가 가계에 부담될 정도인가? 전환 후 줄어드는 보험료보다 줄어드는 보장이 더 큰가? 내 기존 상품의 자기부담금과 보장 한도는 어떤가? 4세대 전환 시 면책, 부담보, 보장 제한이 없는지 확인했는가? 몸이 건강하고 병원 이용이 적으며 매달 보험료 부담이 큰 사람이라면 4세대 실손보험 전환을 검토할 수 있다. 반대로 이미 병원 이용이 많고 비급여 치료를 자주 받는 사람이라면 오래된 실손보험을 유지하는 편이 더 나을 수 있다.
가장 현실적인 방법은 기존 보험증권과 최근 병원비 청구 내역을 놓고 비교하는 것이다. 현재 보험료, 예상 갱신보험료, 최근 받은 보험금, 자주 이용하는 치료 항목을 함께 보면 판단이 쉬워진다.
정리 &nbsp; 실손보험은 가입시기에 따라 보험료와 보장 범위가 달라진다. 오래된 실손보험은 보장이 넓은 대신 보험료가 비싸질 수 있고, 4세대 실손보험은 보험료가 비교적 낮은 대신 자기부담금과 비급여 관리가 더 엄격한 편이다.
핵심만 다시 정리하면 이렇다.
실손보험은 가입시기에 따라 1세대부터 4세대까지 나뉜다. 현재 새로 가입 가능한 상품은 4세대 실손보험이다. 1세대 실손보험은 보장 범위가 넓은 편이지만 갱신보험료 부담이 커질 수 있다. 4세대 실손보험은 보험료가 낮은 대신 비급여 이용량에 따라 보험료가 달라질 수 있다. 1~3세대는 내가 청구하지 않아도 같은 그룹의 손해율 때문에 보험료가 오를 수 있다. 전환 여부는 월 보험료만 보지 말고 보장 범위, 자기부담금, 병원 이용 패턴을 함께 봐야 한다. 실손보험은 오래된 상품이 무조건 좋거나, 새 상품이 무조건 유리한 구조가 아니다. 내 건강 상태, 병원 이용 빈도, 비급여 치료 가능성, 매달 감당 가능한 보험료를 기준으로 판단하는 것이 가장 현실적이다.
자주 묻는 질문 &nbsp; 내 실손보험이 몇 세대인지 어떻게 확인할 수 있을까? &nbsp; 보험증권의 가입일과 상품명을 확인하면 대략 알 수 있다. 더 정확하게는 보험사 앱이나 고객센터에서 &ldquo;내 실손보험 세대와 보장 구조를 확인하고 싶다&quot;고 문의하면 된다.
1세대 실손보험은 무조건 유지하는 것이 좋을까? &nbsp; 무조건은 아니다. 보장 범위가 넓은 장점은 있지만 보험료가 많이 오를 수 있다. 병원 이용이 많고 보장이 필요하다면 유지가 유리할 수 있고, 병원 이용이 거의 없고 보험료 부담이 크다면 전환을 검토할 수 있다.
4세대 실손보험으로 전환하면 보험료가 항상 싸질까? &nbsp; 초기 보험료는 낮아질 수 있지만, 비급여 진료를 많이 청구하면 이후 보험료가 오를 수 있다. 전환 전에는 줄어드는 보험료와 줄어드는 보장, 자기부담금 증가 가능성을 함께 비교해야 한다.`}).add({id:84,href:"/posts/stock-investing-beginner-guide/",title:"실패하지 않는 주식투자 입문 가이드, 초보자가 먼저 알...",description:"주식투자를 처음 시작하는 초보자가 계좌 개설 전 알아야 할 위험 관리, 종목 선택, 분산 투자, 장기 투자 원칙과 흔한 실수를 쉽게 정리했다.",content:`주식투자를 시작하려고 하면 마음이 복잡해진다. 주변에서는 누가 어떤 종목으로 돈을 벌었다고 하고, 뉴스에서는 AI, 반도체, 2차전지, 바이오 같은 이야기가 계속 나온다. 증권 앱을 열면 당장이라도 매수 버튼을 눌러야 할 것 같지만, 막상 내 돈을 넣으려면 겁이 난다.
나도 금융 문맹을 벗어나야겠다고 생각하면서 가장 먼저 부딪힌 벽이 주식이었다. 예금과 적금은 원금과 이자가 비교적 분명한데, 주식은 하루에도 가격이 오르내린다. 공부하지 않고 들어가면 투자가 아니라 감정 게임이 되기 쉽다.
주식투자 입문에서 가장 중요한 목표는 대박을 잡는 것이 아니다. 오래 살아남는 것이다. 처음부터 큰돈을 벌려고 하면 조급해지고, 조급하면 위험한 선택을 하기 쉽다. 이 글에서는 초보자가 주식투자를 시작하기 전에 꼭 알아야 할 기본 원칙을 정리하였다.
주식투자는 무엇을 사는 것인가 &nbsp; 주식은 회사의 일부를 소유하는 권리다. 주식을 산다는 것은 단순히 숫자가 오르내리는 화면을 사는 것이 아니라, 그 회사의 미래 이익과 성장 가능성에 돈을 맡기는 것이다.
예를 들어 어떤 회사가 꾸준히 매출을 늘리고 이익을 내며, 앞으로도 시장에서 경쟁력을 유지할 가능성이 높다면 그 회사의 주식 가치는 장기적으로 올라갈 수 있다. 반대로 매출은 줄고 빚은 늘고 경쟁력도 약해진다면 주가는 오래 버티기 어렵다.
초보자가 가장 먼저 버려야 할 생각은 &ldquo;싼 주식이 좋은 주식&quot;이라는 착각이다. 1주에 1,000원인 주식이 1주에 100,000원인 주식보다 무조건 싼 것이 아니다. 중요한 것은 회사 전체 가치, 이익, 성장성, 부채, 시장 지위다.
주식투자는 결국 세 가지 질문에서 시작한다.
이 회사는 무엇으로 돈을 버는가? 앞으로도 돈을 잘 벌 가능성이 있는가? 지금 가격은 그 가능성에 비해 너무 비싸지 않은가? 이 질문에 답하지 못한 채 매수한다면, 주가가 떨어졌을 때 버텨야 할 이유도 설명하지 못한다. 남의 추천으로 산 주식은 오를 때는 편하지만, 떨어질 때는 불안하다.
처음부터 개별 종목에 몰빵하지 않는다 &nbsp; 초보 투자자가 가장 많이 하는 실수는 한 종목에 큰돈을 넣는 것이다. 자신이 보기에는 확실해 보여도, 시장은 늘 예상과 다르게 움직일 수 있다. 좋은 회사의 주식도 비싸게 사면 오래 고생할 수 있고, 실적이 잠깐 흔들리면 주가가 크게 빠질 수 있다.
그래서 처음에는 분산투자부터 이해해야 한다. 분산투자는 수익을 포기하는 전략이 아니라, 한 번의 판단 실수로 계좌가 망가지는 것을 막는 안전장치다.
초보자에게 현실적인 분산 방법은 다음과 같다.
방법 의미 종목 분산 한 회사에만 투자하지 않는다 업종 분산 반도체, 금융, 소비재, 헬스케어 등 업종을 나눈다 시간 분산 한 번에 사지 않고 여러 번 나누어 산다 자산 분산 주식만 보유하지 않고 예금, 현금, 연금도 함께 본다 특히 처음 투자한다면 개별 종목보다 지수 ETF를 먼저 공부하는 것도 좋다. 코스피200, S&amp;P500, 나스닥100 같은 지수를 따라가는 ETF는 여러 기업에 나누어 투자하는 효과가 있다. 한 회사의 실적에 모든 돈이 흔들리는 위험을 줄일 수 있다.
물론 ETF도 손실이 날 수 있다. 하지만 초보자가 개별 종목을 제대로 분석하지 못한 상태에서 여러 종목을 감으로 사는 것보다는 구조를 이해하기 쉽다.
주식 계좌를 열기 전에 투자 기준부터 정한다 &nbsp; 증권 계좌를 만드는 것은 쉽다. 문제는 계좌를 만든 뒤 무엇을 어떤 기준으로 살 것인지 정하지 않은 채 시작하는 것이다. 기준이 없으면 가격이 오를 때는 더 사고 싶고, 떨어질 때는 무서워서 팔고 싶어진다.
투자 전에는 최소한 아래 기준을 정해두는 것이 좋다.
총 투자금은 얼마로 시작할 것인가? 이 돈은 최소 몇 년 동안 쓰지 않아도 되는 돈인가? 한 종목에 최대 몇 퍼센트까지 넣을 것인가? 손실이 났을 때 추가 매수할 기준은 무엇인가? 어떤 경우에는 매도할 것인가? 여기서 가장 중요한 것은 투자 기간이다. 다음 달 전세금, 6개월 뒤 결혼자금, 곧 써야 할 생활비로 주식투자를 하면 마음이 흔들릴 수밖에 없다. 주식은 언제든 손실 구간이 올 수 있기 때문에, 당장 필요한 돈으로 투자하면 좋은 판단을 하기 어렵다.
처음에는 투자금을 작게 잡는 것이 낫다. 예를 들어 월급의 일부를 정해 매달 일정 금액만 투자하는 식이다. 소액으로도 충분히 배울 수 있다. 오히려 처음부터 큰돈을 넣으면 공부보다 감정이 앞서기 쉽다.
좋은 종목을 고를 때 봐야 할 것 &nbsp; 초보자는 주가 차트부터 보는 경우가 많다. 차트도 참고할 수 있지만, 주식은 결국 기업의 가치와 이익에 연결된다. 그래서 기본적으로 회사가 돈을 잘 벌고 있는지부터 봐야 한다.
가장 먼저 확인할 항목은 다음과 같다.
항목 확인하는 이유 매출 회사의 사업 규모가 커지고 있는지 본다 영업이익 본업으로 돈을 벌고 있는지 본다 부채비율 빚 부담이 지나치게 큰지 본다 현금흐름 실제로 돈이 들어오고 있는지 본다 배당 주주에게 이익을 나누는지 본다 경쟁력 경쟁사와 비교해 강점이 있는지 본다 예를 들어 매출은 계속 늘지만 영업이익이 줄고 있다면 비용이 너무 많이 드는 구조일 수 있다. 영업이익은 좋은데 부채가 지나치게 많다면 금리가 오를 때 부담이 커질 수 있다. 주가가 많이 올랐는데 실적이 따라오지 못한다면 기대가 너무 앞선 것일 수 있다.
종목을 고를 때는 &ldquo;이 회사가 좋아 보인다&quot;에서 멈추지 말고, &ldquo;왜 좋아 보이는지 숫자로 설명할 수 있는가&quot;까지 가야 한다. 초보자는 완벽한 분석을 하기 어렵지만, 최소한 매출과 이익이 늘고 있는지, 빚이 과한지, 사업이 이해되는지는 확인해야 한다.
그리고 이해하지 못하는 기업은 사지 않는 편이 낫다. 누가 좋다고 해도 내가 사업 구조를 설명하지 못한다면, 하락장에서 버틸 근거가 없다.
초보자가 피해야 할 투자 습관 &nbsp; 주식투자에서 실패를 줄이려면 좋은 종목을 찾는 것만큼 나쁜 습관을 피하는 것이 중요하다. 특히 초보자는 수익보다 손실 관리가 먼저다.
가장 피해야 할 습관은 빚내서 투자하는 것이다. 신용거래, 미수거래, 대출 투자처럼 빌린 돈으로 주식을 사면 하락장에서 버티기 어렵다. 주식은 언제든 10%, 20% 이상 하락할 수 있는데, 빌린 돈에는 이자와 상환 압박이 붙는다.
두 번째는 급등주 따라잡기다. 이미 많이 오른 종목을 뉴스만 보고 따라 사면, 내가 산 지점이 고점일 수 있다. 급등에는 이유가 있을 수 있지만, 그 이유가 이미 주가에 반영되었는지도 함께 봐야 한다.
세 번째는 손실을 인정하지 못하는 습관이다. 주가가 떨어졌을 때 무조건 버티는 것이 장기투자는 아니다. 회사의 실적과 전망이 유지되는데 시장 전체 하락으로 빠진 것인지, 기업 자체의 문제가 생긴 것인지 구분해야 한다.
네 번째는 매일 계좌만 보는 것이다. 장기투자를 하겠다고 해놓고 하루에도 수십 번 가격을 확인하면 마음이 흔들린다. 공부는 기업과 산업을 보는 데 써야지, 초 단위 가격 움직임에 에너지를 다 쓰면 안 된다.
초보자가 기억할 원칙은 단순하다.
빚내서 투자하지 않는다. 이해하지 못하는 종목은 사지 않는다. 한 종목에 몰아넣지 않는다. 급등한 뒤 따라 사기 전에 이유와 가격을 확인한다. 손실이 났을 때 감정이 아니라 기준으로 판단한다. 오래 살아남는 투자 루틴 만들기 &nbsp; 주식투자는 한 번의 매수로 끝나는 일이 아니다. 꾸준히 공부하고 점검하는 루틴이 있어야 한다. 초보자에게 필요한 루틴은 복잡하지 않다.
주기 할 일 매일 경제 뉴스 헤드라인과 시장 흐름 확인 주 1회 관심 종목 뉴스와 주가 흐름 정리 월 1회 투자 비중과 현금 비중 점검 분기 1회 보유 기업 실적 발표 확인 연 1회 투자 목표와 자산 배분 다시 조정 여기서 가장 중요한 것은 기록이다. 매수할 때 왜 샀는지 적어두면 나중에 판단이 훨씬 쉬워진다.
예를 들어 이렇게 적을 수 있다.
매수 이유: 매출과 영업이익이 3년 연속 증가했고, 시장 점유율이 높다. 투자 기간: 최소 3년 확인할 위험: 부채 증가, 경쟁사 가격 인하, 실적 둔화 매도 기준: 투자 아이디어가 깨지거나 과도하게 비싸졌을 때이렇게 적어두면 주가가 떨어졌을 때도 단순히 무서워서 파는 것이 아니라, 처음 생각한 이유가 여전히 맞는지 확인할 수 있다. 금융 문맹을 벗어난다는 것은 이런 식으로 내 돈의 선택을 설명할 수 있게 되는 과정이다.
정리 &nbsp; 주식투자 입문에서 가장 중요한 것은 많이 버는 방법보다 크게 잃지 않는 방법을 먼저 배우는 것이다. 주식은 회사의 일부를 사는 것이고, 회사의 실적과 성장 가능성에 투자하는 일이다. 남의 추천이나 단기 뉴스만 보고 매수하면 가격이 흔들릴 때 버티기 어렵다.
핵심만 다시 정리하면 이렇다.
주식은 단순한 숫자가 아니라 회사의 일부를 소유하는 권리다. 초보자는 개별 종목 몰빵보다 분산투자와 지수 ETF부터 이해하는 것이 좋다. 당장 써야 할 돈이 아니라 오래 묶어둘 수 있는 돈으로 시작해야 한다. 종목을 고를 때는 매출, 영업이익, 부채, 현금흐름, 경쟁력을 확인해야 한다. 빚내서 투자하거나 급등주를 무리하게 따라 사는 습관은 피해야 한다. 매수 이유와 매도 기준을 기록하면 감정적인 투자를 줄일 수 있다. 주식투자는 단기간에 인생을 바꾸는 도구라기보다, 시간을 두고 자산을 키우는 방법에 가깝다. 처음 목표는 화려한 수익률이 아니라 시장에서 오래 살아남는 기본기를 만드는 것이다.
자주 묻는 질문 &nbsp; 주식투자는 얼마로 시작하는 것이 좋을까? &nbsp; 처음에는 잃어도 생활에 영향을 주지 않는 작은 금액으로 시작하는 것이 좋다. 금액보다 중요한 것은 매수 이유를 적고, 주가 변동을 경험하며, 투자 원칙을 만들어가는 것이다.
초보자는 개별 종목과 ETF 중 무엇이 나을까? &nbsp; 기업 분석이 익숙하지 않다면 지수 ETF부터 공부하는 것이 부담이 적다. ETF는 여러 기업에 분산 투자하는 효과가 있어 한 종목에 모든 돈이 흔들리는 위험을 줄일 수 있다.
주가가 떨어지면 무조건 버텨야 할까? &nbsp; 무조건 버티는 것은 장기투자가 아니다. 회사의 실적과 경쟁력이 유지되는데 시장 전체 하락으로 빠진 것인지, 기업 자체의 문제가 생긴 것인지 확인해야 한다. 처음 매수한 이유가 깨졌다면 매도도 검토해야 한다.`}).add({id:85,href:"/news/2026/nvidia-earnings-preview/",title:"엔비디아 1분기 실적 발표 전 관전 포인트, AI 반도...",description:"엔비디아가 2026년 5월 21일 한국시간 새벽 2027회계연도 1분기 실적을 발표한다. 매출 컨센서스, 블랙웰 출하, 중국 수출 변수와 국내 반도체주 영향을 정리한다.",content:`이번 브리핑은 2026년 5월 15일부터 5월 20일까지 나온 엔비디아 실적 발표 일정, 시장 컨센서스, AI 반도체 수요, 중국 수출 규제, 국내 반도체주 영향 관련 보도를 중심으로 정리했다. 작성 시점은 2026년 5월 20일 밤 한국시간으로, 엔비디아의 2027회계연도 1분기 실적은 아직 공식 발표 전이다.
주요 내용 &nbsp; 엔비디아는 미국 현지시간 2026년 5월 20일 장 마감 후 2027회계연도 1분기 실적을 발표하고, 한국시간으로 5월 21일 오전 6시 컨퍼런스콜을 진행할 예정이다. 공식 IR에 따르면 해당 분기는 2026년 4월 26일 종료됐다. 직전 분기인 2026회계연도 4분기 매출은 681억 달러로 전년 대비 73% 증가했고, 데이터센터 매출은 623억 달러로 전년 대비 75% 늘었다. 연간 매출도 2159억 달러로 65% 증가했다. 엔비디아는 직전 실적 발표에서 2027회계연도 1분기 매출 가이던스를 780억 달러, 오차 범위 2%로 제시했다. 이 가이던스에는 중국향 데이터센터 컴퓨트 매출을 반영하지 않았다고 밝혔다. 시장 컨센서스는 대체로 매출 786억790억 달러 안팎, EPS 1.741.77달러 수준에 형성돼 있다. 숫자 자체보다 2분기 가이던스, 블랙웰 출하 속도, 매출총이익률 유지 여부가 주가 반응을 좌우할 가능성이 크다. 국내 보도는 엔비디아 실적이 삼성전자, SK하이닉스, HBM·반도체 장비·소재주 투자심리에도 직접 영향을 줄 수 있다고 보고 있다. AI 데이터센터 투자가 실제 주문과 매출로 이어지는지 확인하는 이벤트이기 때문이다. 중국 변수도 핵심이다. 엔비디아는 직전 가이던스에서 중국 데이터센터 매출을 제외했고, 시장은 젠슨 황 CEO가 H200·블랙웰 계열 칩의 중국 공급 가능성이나 규제 환경에 대해 어떤 발언을 내놓을지 주목하고 있다. 단기적으로는 호실적 자체가 이미 상당 부분 기대에 반영됐다는 점이 부담이다. 실적이 좋아도 가이던스가 시장의 높은 기대를 넘지 못하면 차익실현이 나올 수 있다. 주요 트렌드 &nbsp; AI 데이터센터 투자가 클라우드 기업의 설비투자 계획에서 엔비디아 매출로 빠르게 전환되는지에 시장 관심이 집중되고 있다. 블랙웰과 차세대 루빈 플랫폼은 단순 제품 전환이 아니라 추론 비용 절감, 대규모 AI 에이전트 수요, HBM 공급망의 방향성을 함께 결정하는 변수로 평가된다. 엔비디아의 성장률은 여전히 압도적이지만, 주가와 밸류에이션이 먼저 올라간 만큼 시장은 실적 서프라이즈보다 더 강한 가이던스와 주주환원 신호까지 요구하는 분위기다. 중국 수출 규제는 일회성 리스크가 아니라 엔비디아의 지역별 성장성과 미국 반도체 정책, 중국 빅테크의 국산 칩 전환 속도를 함께 흔드는 구조적 변수로 남아 있다. 핵심 이슈 &nbsp; 첫 번째 관전 포인트는 2027회계연도 1분기 매출이 엔비디아 자체 가이던스 780억 달러와 시장 컨센서스 790억 달러 안팎을 얼마나 상회하는지다. 두 번째는 데이터센터 매출과 블랙웰 출하량이다. 직전 분기 데이터센터 매출이 623억 달러였기 때문에, 이번 분기 성장률이 AI 인프라 수요의 지속성을 보여주는 핵심 지표가 된다. 세 번째는 매출총이익률이다. 엔비디아는 직전 가이던스에서 2027회계연도 1분기 비GAAP 매출총이익률을 75.0% 안팎으로 제시했다. 블랙웰 전환 과정에서 이 수준이 유지되는지가 중요하다. 네 번째는 중국 관련 발언이다. 중국향 매출 회복 가능성이 커지면 추가 성장 동력이 될 수 있지만, 규제와 중국 정부의 국산화 기조가 강해지면 기대가 다시 낮아질 수 있다. 시장 영향 &nbsp; 엔비디아가 강한 실적과 2분기 가이던스를 동시에 제시하면 미국 AI 반도체주뿐 아니라 국내 HBM, 메모리, 기판, 장비 관련 종목의 투자심리도 개선될 수 있다. 반대로 가이던스가 시장 기대에 못 미치거나 중국 관련 불확실성이 커지면 AI 반도체 랠리의 속도 조절 압력이 커질 수 있다. 국내 투자자 입장에서는 엔비디아 매출총이익률보다 데이터센터 매출 성장률, 블랙웰 출하 코멘트, 클라우드 고객의 주문 지속성, HBM 공급 언급을 함께 봐야 한다. 금리 상승과 인플레이션 우려가 동시에 존재하는 환경에서는 실적이 좋아도 고밸류 성장주 전반의 변동성이 커질 수 있다. 향후 전망 &nbsp; 실적 발표 직후 시장은 1분기 실제 매출보다 2분기 매출 가이던스와 컨퍼런스콜 발언에 더 민감하게 반응할 가능성이 크다. 블랙웰 출하가 예상보다 빠르고 루빈 일정에 지연 신호가 없다면 AI 인프라 투자 사이클은 더 길게 평가될 수 있다. 중국 매출이 가이던스에 다시 반영될 수 있다는 신호가 나오면 상승 재료가 될 수 있지만, 실제 허가와 중국 고객 구매까지 확인되기 전에는 불확실성이 남는다. 국내 반도체주는 엔비디아 실적 자체보다 HBM 수요 지속성, 고객사 인증, 공급단가와 물량 확대 가능성에 따라 종목별 차별화가 커질 수 있다. 주요 뉴스 &nbsp; 2026-04-29 NVIDIA: NVIDIA Sets Conference Call for First-Quarter Financial Results
엔비디아는 2026년 5월 20일 오후 2시 태평양시간에 2027회계연도 1분기 실적 컨퍼런스콜을 열겠다고 공지했다. 해당 분기는 2026년 4월 26일 종료됐고, 실적 자료는 컨퍼런스콜 전에 투자자 관계 사이트에 공개될 예정이다.
2026-02-25 NVIDIA: NVIDIA Announces Financial Results for Fourth Quarter and Fiscal 2026
엔비디아는 2026회계연도 4분기 매출 681억 달러, 데이터센터 매출 623억 달러, 연간 매출 2159억 달러를 발표했다. 회사는 2027회계연도 1분기 매출 전망을 780억 달러, 오차 범위 2%로 제시하면서 중국향 데이터센터 컴퓨트 매출은 가이던스에 넣지 않았다고 밝혔다.
2026-05-20 매일경제: 이번에도 어닝 서프라이즈? 엔비디아 실적 앞두고 반도체주 촉각
매일경제는 엔비디아 실적 발표를 앞두고 국내 반도체주가 민감하게 반응하고 있다고 전했다. 기사에서는 한국시간 5월 21일 오전 실적 발표 일정과 함께 엔비디아와 동조화 흐름을 보여온 국내 반도체주의 투자심리 변화를 짚었다.
2026-05-20 주간동아: 시가총액 6조 달러 바라보는 엔비디아, 1분기 실적도 어닝서프라이즈 전망
주간동아는 엔비디아 주가가 최근 한 달간 크게 올랐고, 시장이 2027회계연도 1분기 매출 789억 달러와 EPS 1.77달러 수준을 예상한다고 보도했다. 기사에서는 2분기 가이던스, 블랙웰 출하 확대, 중국 관련 발언이 향후 주가 방향을 결정할 주요 변수로 제시됐다.
2026-05-15 이데일리: 20일 실적 발표, 반도체 랠리 시험대 오를 것
이데일리는 로이터 보도를 인용해 엔비디아 실적이 AI 반도체 랠리의 건강 상태를 가늠하는 시험대가 될 것이라고 전했다. 시장 예상치로 매출 786억2000만 달러와 EPS 1.74달러가 제시됐고, 높은 주가와 데이터센터 투자 확대의 실질 수혜를 입증해야 한다는 분석이 소개됐다.
2026-05-18 파이낸셜뉴스: 엔비디아 실적에 쏠린 눈, FOMC 의사록·물가지표 촉각
파이낸셜뉴스는 이번 주 뉴욕증시의 핵심 이벤트로 엔비디아 실적, FOMC 의사록, 물가지표를 함께 꼽았다. 기사에서는 투자자들이 젠슨 황 CEO의 중국 관련 발언에 주목하고 있으며, 엔비디아 실적이 AI와 빅테크 전반의 투자심리를 가늠하는 지표라고 설명했다.
2026-05-20 Benzinga: NVIDIA Earnings Estimates, EPS &amp; Revenue
Benzinga의 실적 추정 데이터는 엔비디아의 2027회계연도 1분기 예상 EPS를 1.76달러, 예상 매출을 약 790억4000만 달러로 제시했다. 과거 분기별 실적도 함께 제시해 엔비디아가 최근 여러 분기 연속 시장 예상치를 웃돌았다는 흐름을 확인할 수 있다.
2026-05-20 Axios: Why Nvidia lost some of its luster
Axios는 엔비디아가 여전히 강한 수익 성장을 기대받고 있지만, 투자자들이 이제 높은 성장 자체를 당연하게 받아들이는 단계에 들어섰다고 분석했다. 기사에서는 매출이 전년 대비 약 80% 증가한 789억 달러 안팎, EPS가 1.75달러 수준으로 예상된다고 전했다.
한줄 요약 &nbsp; 엔비디아의 5월 실적 발표는 매출 서프라이즈보다 2분기 가이던스, 블랙웰 출하, 중국 매출 회복 가능성, HBM 수요 지속성을 확인하는 이벤트이며 국내 반도체주 투자심리에도 곧바로 영향을 줄 수 있다.`}).add({id:86,href:"/posts/pension-savings-irp-tax-credit/",title:"연금저축·IRP 세액공제 총정리: 한도, 환급액, IS...",description:"연금저축과 IRP 세액공제 한도, 소득별 공제율, 최대 환급액, ISA 만기자금 전환까지 연말정산 전에 알아둘 내용을 초보자 눈높이로 정리했다.",content:`연말정산을 할 때마다 &ldquo;이번에는 돌려받을까, 더 낼까&rdquo; 하는 생각이 먼저 든다. 연말정산은 1년 동안 미리 낸 세금과 실제로 부담해야 할 세금을 다시 맞추는 과정이다. 미리 낸 세금이 많으면 환급을 받고, 적게 냈으면 추가로 납부한다.
그래서 많은 사람이 연말정산 전에 세액공제 항목을 찾는다. 그중에서도 연금저축과 IRP는 비교적 구조가 명확하다. 노후 자금을 준비하면서 지금 내야 할 세금을 줄일 수 있기 때문이다.
다만 처음 보면 용어가 꽤 헷갈린다. 연금저축은 얼마까지 되는지, IRP는 꼭 필요한지, 얼마를 넣어야 최대 환급을 받을 수 있는지 감이 잘 안 온다. 이 글에서는 연금저축과 IRP 세액공제를 누구나 이해하기 쉽게 정리하였다.
연금저축과 IRP는 왜 세액공제가 될까 &nbsp; 연금저축과 IRP는 노후 준비를 위한 연금계좌다. 정부 입장에서는 개인이 스스로 노후 자금을 준비하도록 유도할 필요가 있다. 그래서 일정 금액까지 납입하면 세금을 직접 깎아주는 혜택을 준다.
여기서 중요한 건 소득공제 가 아니라 세액공제 라는 점이다.
소득공제: 세금을 계산하기 전의 소득을 줄여준다 세액공제: 계산된 세금 자체를 줄여준다 예를 들어 세액공제액이 100만 원이라면, 조건을 충족했을 때 내가 낼 세금에서 100만 원을 직접 빼주는 방식에 가깝다. 그래서 연금저축과 IRP는 연말정산에서 체감이 큰 편이다.
물론 &ldquo;무조건 그 금액을 현금으로 받는다&quot;는 뜻은 아니다. 이미 낸 세금이 충분해야 환급으로 돌아온다. 결정세액이 적거나 이미 다른 공제를 많이 받은 경우에는 계산상 공제액보다 실제 환급액이 적을 수 있다.
세액공제 한도는 연금저축 600만 원, IRP 포함 900만 원 &nbsp; 2026년 기준으로 개인연금 세액공제 한도는 이렇게 보면 된다.
구분 세액공제 대상 한도 연금저축 연 600만 원 연금저축 + IRP 합산 연 900만 원 IRP만 납입 연 900만 원까지 가능 가장 많이 쓰는 조합은 연금저축 600만 원 + IRP 300만 원 이다. 이렇게 넣으면 합산 900만 원 한도를 꽉 채우게 된다.
연금저축에 700만 원을 넣었다고 해서 700만 원 전부가 세액공제 대상이 되는 건 아니다. 연금저축은 600만 원까지만 세액공제 대상이다. 나머지 100만 원은 납입 자체는 가능해도 세액공제 한도에서는 빠진다.
반대로 IRP는 연금저축과 합쳐서 900만 원 한도를 채우는 역할을 한다. 연금저축 없이 IRP에만 900만 원을 넣는 것도 가능하지만, 일반적으로는 연금저축 600만 원을 먼저 채우고 부족한 300만 원을 IRP로 채우는 방식이 많이 쓰인다.
그 이유는 단순하다. 연금저축은 IRP보다 상대적으로 운용과 인출 조건이 덜 빡빡하게 느껴질 수 있다. IRP는 노후 자금 성격이 더 강하고, 위험자산 투자 비중 제한 같은 규칙도 있어서 계좌를 만들기 전에 구조를 이해하는 게 좋다.
소득에 따라 공제율과 최대 환급액이 달라진다 &nbsp; 연금저축과 IRP는 같은 900만 원을 넣어도 소득 구간에 따라 세액공제율이 달라진다. 지방소득세까지 포함해서 보면 보통 16.5% 또는 13.2%로 계산한다.
소득 구간 세액공제율 900만 원 납입 시 최대 세액공제 총급여 5,500만 원 이하 또는 종합소득금액 4,500만 원 이하 16.5% 148만 5천 원 총급여 5,500만 원 초과 또는 종합소득금액 4,500만 원 초과 13.2% 118만 8천 원 계산은 어렵지 않다.
세액공제액 = 세액공제 대상 납입액 × 공제율
예를 들어 총급여가 5,500만 원 이하인 직장인이 연금저축 600만 원과 IRP 300만 원을 넣었다면 이렇게 계산한다.
세액공제 대상 납입액: 900만 원 공제율: 16.5% 세액공제액: 900만 원 × 16.5% = 148만 5천 원 총급여가 5,500만 원을 넘는다면 공제율은 13.2%로 내려간다.
세액공제 대상 납입액: 900만 원 공제율: 13.2% 세액공제액: 900만 원 × 13.2% = 118만 8천 원 여기서 말하는 금액은 &ldquo;최대 세액공제 가능액&quot;으로 보면 된다. 실제 환급액은 내가 이미 낸 세금, 다른 공제 항목, 결정세액에 따라 달라진다.
얼마씩 넣어야 한도를 채울 수 있을까 &nbsp; 900만 원을 한 번에 넣는 건 부담스럽다. 그래서 월 납입액으로 쪼개서 생각하면 훨씬 현실적이다.
목표 연 납입액 월 납입액 연금저축 한도만 채우기 600만 원 월 50만 원 연금저축 + IRP 한도 채우기 900만 원 월 75만 원 IRP 300만 원만 추가하기 300만 원 월 25만 원 개인적으로는 처음부터 900만 원을 목표로 잡기보다, 연금저축 600만 원부터 보는 게 더 현실적이라고 생각한다. 월 50만 원도 작지 않은 돈이다. 생활비, 비상금, 대출 상환, 투자 계획을 다 고려해야 한다.
만약 월 50만 원이 부담스럽다면 월 10만 원이나 20만 원부터 시작해도 된다. 세액공제는 납입한 금액에 공제율을 곱하는 구조라서, 꼭 한도를 다 채워야만 의미가 있는 건 아니다.
예를 들어 총급여 5,500만 원 이하인 사람이 연금저축에 300만 원만 넣어도 49만 5천 원의 세액공제 효과가 생긴다.
300만 원 × 16.5% = 49만 5천 원 총급여 5,500만 원 초과 구간이라면 39만 6천 원이다.
300만 원 × 13.2% = 39만 6천 원 연말정산을 &ldquo;한 번에 많이 돌려받는 이벤트&quot;로만 보면 부담이 커진다. 매달 조금씩 노후 계좌에 넣고, 그 결과로 세금도 줄어드는 구조로 보는 게 더 편하다.
ISA 만기자금을 연금계좌로 옮기면 추가 공제도 가능하다 &nbsp; ISA를 이미 활용하고 있다면 만기자금 전환도 같이 볼 만하다. ISA 만기자금을 연금계좌로 옮기면, 일반 연금저축·IRP 한도와 별도로 추가 세액공제 한도가 생길 수 있다.
핵심은 전환금액의 10%와 300만 원 중 작은 금액 이 추가 세액공제 대상이 된다는 점이다.
예를 들어 ISA 만기자금 3,000만 원을 연금계좌로 전환하면 10%는 300만 원이다. 이 경우 추가 세액공제 대상은 300만 원이 된다.
만약 기존 연금저축과 IRP로 900만 원 한도를 채우고, ISA 전환으로 추가 300만 원까지 인정받는다면 세액공제 대상 금액은 최대 1,200만 원까지 커질 수 있다.
구분 세액공제 대상 금액 연금저축 + IRP 기본 한도 최대 900만 원 ISA 만기자금 전환 추가 한도 최대 300만 원 합산 최대 1,200만 원 총급여 5,500만 원 이하 구간에서 1,200만 원이 모두 세액공제 대상이 된다면 계산상 최대 세액공제액은 198만 원이다.
1,200만 원 × 16.5% = 198만 원 총급여 5,500만 원 초과 구간이라면 158만 4천 원이다.
1,200만 원 × 13.2% = 158만 4천 원 다만 ISA 전환은 만기 시점, 전환 방법, 연금계좌 납입 처리 방식이 중요하다. 그냥 계좌에서 돈을 빼서 다른 계좌로 옮기는 식으로 생각하면 안 된다. 실제로 진행할 때는 금융회사 안내를 확인하고, 세액공제 대상 전환으로 처리되는지 꼭 체크해야 한다.
연금저축과 IRP를 넣기 전에 꼭 볼 것 &nbsp; 세액공제만 보면 연금저축과 IRP는 꽤 좋아 보인다. 하지만 단점도 있다. 이 돈은 기본적으로 노후 자금이다. 중간에 마음대로 꺼내 쓰기 어려울 수 있고, 조건에 맞지 않게 해지하거나 인출하면 기타소득세 등 세금 부담이 생길 수 있다.
그래서 순서는 이렇게 보는 게 좋다.
비상금이 충분한지 확인한다. 고금리 대출이 있다면 먼저 상환을 검토한다. 연금저축부터 가능한 금액만큼 납입한다. 여유가 있으면 IRP로 합산 900만 원 한도를 채운다. ISA 만기가 있다면 연금계좌 전환까지 검토한다. 특히 사회초년생이라면 한도부터 꽉 채우려고 하기보다 현금흐름을 먼저 봐야 한다. 세액공제 때문에 넣은 돈을 얼마 지나지 않아 해지하면, 절세보다 손해가 커질 수 있다.
연금저축과 IRP는 &ldquo;올해 환급을 많이 받는 방법&quot;이기도 하지만, 더 정확히는 &ldquo;노후 준비를 하면서 세금 혜택을 받는 방법&quot;이다. 이 관점을 놓치지 않는 게 중요하다.
정리 &nbsp; 연금저축과 IRP 세액공제는 연말정산에서 가장 현실적으로 챙겨볼 만한 절세 수단이다. 구조만 이해하면 계산도 어렵지 않다.
핵심만 다시 정리하면 이렇다.
연금저축은 연 600만 원까지 세액공제 대상이다. IRP를 포함하면 합산 900만 원까지 세액공제 대상이 된다. 총급여 5,500만 원 이하라면 공제율은 지방소득세 포함 16.5%다. 총급여 5,500만 원 초과라면 공제율은 지방소득세 포함 13.2%다. 900만 원을 꽉 채우면 최대 148만 5천 원 또는 118만 8천 원의 세액공제 효과가 있다. ISA 만기자금을 연금계좌로 전환하면 추가 공제도 가능하다. 처음부터 무리해서 한도를 다 채울 필요는 없다. 월 10만 원이라도 시작하면 납입액만큼 세액공제 효과가 생긴다. 중요한 건 내 현금흐름 안에서 오래 유지할 수 있는 금액을 정하는 것이다.
자주 묻는 질문 &nbsp; 연금저축만 넣어도 세액공제를 받을 수 있을까? &nbsp; 가능하다. 연금저축은 연 600만 원까지 세액공제 대상이다. IRP까지 꼭 만들어야만 공제를 받는 건 아니다. 다만 합산 900만 원 한도를 채우려면 IRP가 필요하다.
연금저축 600만 원, IRP 300만 원을 넣으면 무조건 148만 5천 원을 돌려받을까? &nbsp; 무조건은 아니다. 총급여 5,500만 원 이하 구간이라면 계산상 세액공제액은 148만 5천 원이지만, 실제 환급액은 이미 낸 세금과 결정세액에 따라 달라진다. 낸 세금이 적으면 전부 환급되지 않을 수 있다.
연말에 한 번에 넣어도 세액공제가 될까? &nbsp; 해당 과세기간 안에 납입했다면 연말에 한 번에 넣어도 세액공제 대상이 될 수 있다. 다만 금융회사별 입금 마감 시간이나 처리일이 다를 수 있으니 12월 말에 너무 늦게 넣는 건 피하는 게 좋다.`}).add({id:87,href:"/posts/deposit-vs-savings/",title:"예금과 적금 차이, 이자 계산까지 쉽게 이해하기",description:"예금과 적금은 돈을 맡기는 방식부터 이자 계산 구조까지 다르다. 목돈이 있을 때와 매달 저축할 때 어떤 상품이 유리한지 쉽게 설명한다.",content:`예금과 적금은 둘 다 은행에 돈을 맡기고 이자를 받는 저축 상품이다. 그런데 막상 가입하려고 보면 &ldquo;예금이랑 적금이 뭐가 다르지?&rdquo;, &ldquo;금리가 같으면 이자도 같은 것 아닌가?&rdquo; 같은 생각이 들 수 있다.
핵심은 간단하다. 예금은 목돈을 한 번에 맡기는 방식이고, 적금은 돈을 여러 번 나누어 넣는 방식이다. 금액과 금리가 같다면 보통 정기예금이 정기적금보다 이자가 더 많다. 예금은 처음부터 전체 금액에 이자가 붙지만, 적금은 매달 넣은 돈마다 이자가 붙는 기간이 다르기 때문이다.
예금이란? &nbsp; 예금은 은행에 돈을 맡기는 상품을 말한다. 넓게 보면 입출금통장도 예금이고, 일정 기간 돈을 묶어두는 정기예금도 예금이다.
보통예금 &nbsp; 보통예금은 자유롭게 돈을 넣고 뺄 수 있는 예금이다. 월급통장, 생활비 통장, 체크카드와 연결된 입출금통장이 여기에 가깝다.
장점은 편리함이다. 필요할 때 바로 출금할 수 있고, 자동이체나 카드 결제에도 쓸 수 있다. 대신 금리는 낮은 편이다. 은행 입장에서는 고객이 언제 돈을 뺄지 모르기 때문에 높은 이자를 주기 어렵다.
정기예금 &nbsp; 정기예금은 일정 금액을 정해진 기간 동안 맡겨두는 상품이다. 예를 들어 1,200만 원을 1년 정기예금에 넣으면, 만기 때 원금 1,200만 원과 약정 이자를 함께 받는다.
정기예금은 목돈이 이미 있을 때 쓰기 좋다. 다만 만기 전에 해지하면 약속한 금리를 다 받지 못하는 경우가 많으니, 당장 쓸 가능성이 있는 돈까지 전부 넣는 것은 조심해야 한다.
적금이란? &nbsp; 적금은 돈을 한 번에 넣는 것이 아니라 일정 기간 동안 나누어 저축하는 상품이다. 매달 월급에서 일부를 떼어 저축하는 방식이 대표적이다.
정기적금 &nbsp; 정기적금은 매달 정해진 금액을 넣는 방식이다. 예를 들어 매달 100만 원씩 12개월 동안 납입하면, 만기 때 원금 1,200만 원과 이자를 받는다.
정기적금은 저축 습관을 만들기 좋다. 매달 같은 금액이 빠져나가므로 소비를 줄이고 돈을 모으는 구조를 만들 수 있다.
자유적금 &nbsp; 자유적금은 납입 금액이 비교적 자유로운 적금이다. 어떤 달은 10만 원, 어떤 달은 50만 원처럼 여유 자금에 맞춰 넣을 수 있다.
수입이 일정하지 않은 프리랜서나 자영업자에게는 자유적금이 더 편할 수 있다. 다만 상품마다 월 납입 한도, 우대금리 조건, 최소 납입 조건이 다르므로 가입 전에 확인해야 한다.
예금과 적금은 이자 계산이 다르다 &nbsp; 예금과 적금의 차이는 이자 계산에서 크게 드러난다. 같은 1,200만 원을 모으더라도 처음부터 1,200만 원을 맡기는 것과 매달 100만 원씩 넣는 것은 이자가 붙는 기간이 다르다.
예를 들어 연 10% 금리로 1년 동안 운용한다고 가정해보자. 세금은 계산하지 않은 단순 예시다.
정기예금은 처음부터 1,200만 원 전액이 12개월 동안 예치된다. 그래서 세전 이자는 120만 원이 된다.
1,200만 원 x 10% = 120만 원반면 정기적금은 매달 100만 원씩 들어간다. 첫 달에 넣은 100만 원은 12개월 동안 이자가 붙지만, 마지막 달에 넣은 100만 원은 1개월만 이자가 붙는다.
1월 납입금: 12개월 이자 적용 2월 납입금: 11개월 이자 적용 3월 납입금: 10개월 이자 적용 ... 12월 납입금: 1개월 이자 적용이 조건에서는 정기적금의 세전 이자가 약 65만 원 수준이 된다. 입력 예시처럼 단순화하면 약 64만 원 정도로 이해해도 된다. 그래서 금리가 같고 총 납입 원금도 같다면, 이미 목돈이 있는 사람에게는 정기예금이 더 유리한 경우가 많다.
어떤 상품을 선택하면 좋을까? &nbsp; 이미 목돈이 있다면 정기예금부터 검토하는 것이 자연스럽다. 당장 쓰지 않을 돈을 일정 기간 맡겨두고, 전체 금액에 대해 이자를 받을 수 있기 때문이다.
반대로 아직 목돈이 없다면 적금이 더 현실적이다. 매달 월급에서 일정 금액을 떼어 모으면 소비를 통제하기 쉽고, 만기 때 목돈을 만들 수 있다.
선택할 때는 금리만 보지 말고 아래 항목도 같이 봐야 한다.
만기 전에 해지하면 이자가 얼마나 줄어드는지 우대금리를 받으려면 어떤 조건이 필요한지 월 납입 한도나 가입 금액 제한이 있는지 예금자보호 한도 안에서 관리되는지 중간에 돈이 필요할 가능성은 없는지 특히 적금의 높은 금리만 보고 가입하면 실제 이자가 기대보다 적게 느껴질 수 있다. 적금 금리는 매달 납입하는 돈에 적용되는 기간이 다르다는 점을 기억해야 한다.
정리 &nbsp; 예금은 목돈을 한 번에 맡기는 상품이고, 적금은 돈을 여러 번 나누어 넣는 상품이다. 목돈이 있다면 정기예금이 이자 면에서 유리한 경우가 많고, 매달 돈을 모아야 한다면 적금이 더 실용적이다.
중요한 것은 &ldquo;예금이 무조건 좋다&rdquo; 또는 &ldquo;적금이 무조건 좋다&quot;가 아니다. 지금 내 손에 목돈이 있는지, 매달 얼마를 저축할 수 있는지, 중간에 돈을 써야 할 가능성이 있는지를 보고 선택하는 것이 좋다.
처음 저축을 시작한다면 생활비 통장에는 필요한 돈만 남기고, 비상금은 바로 뺄 수 있는 통장에 두고, 당장 쓸 계획이 없는 돈은 예금이나 적금으로 나누어 관리하는 방식이 무난하다.
자주 묻는 질문 &nbsp; 예금과 적금 중 이자가 더 많은 것은 무엇인가? &nbsp; 같은 금액, 같은 금리, 같은 기간이라면 보통 정기예금의 이자가 더 많다. 정기예금은 처음부터 전체 금액에 이자가 붙고, 정기적금은 매달 납입한 돈마다 이자가 붙는 기간이 다르기 때문이다.
적금 금리가 예금 금리보다 높으면 적금이 더 유리한가? &nbsp; 항상 그렇지는 않다. 적금은 납입 시점마다 이자 적용 기간이 짧아지므로, 표시 금리가 높아도 실제 이자는 예금보다 적을 수 있다. 금리뿐 아니라 납입 방식과 총 이자를 함께 봐야 한다.
목돈이 없으면 예금은 가입할 수 없나? &nbsp; 상품마다 최소 가입 금액이 다르다. 소액으로도 가입할 수 있는 정기예금이 있지만, 매달 돈을 모아 목돈을 만드는 목적이라면 적금이 더 잘 맞는 경우가 많다.`}).add({id:88,href:"/posts/why-americans-tip/",title:"왜 미국에서는 팁을 내야 할까? 팁 문화의 역사와 경제...",description:"미국에서 팁을 내야 하는 이유를 역사, 임금 제도, 소비자 심리, 팁플레이션, 한국과의 차이까지 초보자도 이해하기 쉽게 정리했다.",content:`미국 여행을 가면 계산대 앞에서 묘한 압박을 느끼는 순간이 있다. 커피 한 잔을 주문했을 뿐인데 결제 단말기가 내 쪽으로 돌아오고, 화면에는 15%, 20%, 25% 같은 팁 선택지가 뜬다. 0%를 누르자니 눈치가 보이고, 25%를 누르자니 커피값이 갑자기 너무 비싸진 느낌이 든다.
한국에서는 음식값을 내면 계산이 끝난다. 서비스가 좋았다고 해서 반드시 추가 돈을 얹어야 한다는 생각은 약하다. 그래서 미국의 팁 문화는 여행자에게도, 해외 뉴스를 보는 사람에게도 꽤 낯설다.
하지만 미국에서 팁은 단순한 친절 보상이 아니다. 오래된 관습, 낮은 서비스업 임금, 고용주와 종업원의 이해관계, 그리고 손님이 느끼는 사회적 압박이 겹쳐 만들어진 제도에 가깝다. 그래서 &ldquo;왜 손님이 직원 월급을 대신 내야 하지?&ldquo;라는 질문이 계속 나오면서도, 막상 현장에서는 쉽게 사라지지 않는다.
팁은 원래 감사 표시였지만 지금은 계산 구조가 됐다 &nbsp; 팁은 기본적으로 정해진 요금 외에 서비스 제공자에게 따로 주는 돈을 말한다. 좋은 응대에 대한 감사 표시라는 의미가 강하지만, 미국에서는 이 의미가 훨씬 무겁다. 많은 서비스업 종사자에게 팁은 보너스가 아니라 실질 소득의 중요한 부분이다.
팁의 기원에 대해서는 여러 설명이 있다. 유럽 귀족 사회에서 하인에게 수고비를 주던 관습에서 시작됐다는 설명도 있고, 영국의 카페나 술집에서 빠른 서비스를 기대하며 돈을 올려놓던 문화에서 퍼졌다는 설명도 있다. &ldquo;To Insure Promptitude&rdquo; 또는 &ldquo;To Insure Promptness&quot;의 앞 글자를 따서 tip이라는 말이 생겼다는 이야기도 널리 알려져 있지만, 어원에 대해서는 단정하기 어렵다.
분명한 것은 19세기 중반 이후 부유한 미국인들이 유럽 여행을 하며 팁 문화를 받아들였고, 이것이 미국 사회에 퍼졌다는 점이다. 당시 일부 미국 상류층은 팁을 유럽 귀족처럼 행동하는 세련된 습관으로 여겼다. 처음에는 예절이나 과시의 성격이 강했지만, 시간이 지나면서 미국의 서비스업 임금 구조와 결합했다.
예의로 시작한 돈이 업계의 임금 계산 방식 안으로 들어가면서 팁은 선택과 의무의 중간쯤에 놓이게 됐다. 법적으로는 손님이 반드시 내야 하는 돈이 아니지만, 실제 식당에서는 내지 않으면 무례한 사람처럼 보일 수 있다. 이 애매함이 미국 팁 문화를 이해하기 어렵게 만든다.
미국에서 팁은 왜 암묵적인 룰이 되었나 &nbsp; 미국에서 팁 문화가 특히 강하게 남은 이유를 보려면 역사와 임금 구조를 함께 봐야 한다. 팁은 유럽에서 들어온 관습이었지만, 미국에서는 남북전쟁 이후의 노동 현실과 만나면서 더 깊게 뿌리내렸다.
캘리포니아 대학교 식품 노동 연구센터장을 지낸 사루 자야라만(Saru Jayaraman)은 미국 팁 문화의 배경을 노예제 폐지 이후의 노동시장과 연결해 설명한다. 남북전쟁 이후 노예제는 사라졌지만, 해방된 흑인 노동자들이 선택할 수 있는 일자리는 매우 제한적이었다. 이들은 식당 종업원, 철도 짐꾼, 하인, 이발사 같은 서비스 노동에 많이 종사했고, 고용주는 충분한 임금을 지급하는 대신 손님이 주는 팁에 의존하게 만들었다.
19세기 중반 미국 도시에서는 산업화가 빠르게 진행됐다. 농촌에서 도시 공장으로 이동한 노동자들은 집에서 식사하던 생활에서 벗어나, 짧은 점심시간에 빠르게 끼니를 해결해야 했다. 뉴욕 같은 대도시에는 값싸고 빠르게 음식을 내는 초기형 식당이 늘어났고, 낮은 비용으로 운영하기 위해 저임금 흑인 노동자가 주방과 홀을 채우는 경우가 많았다. 손님이 테이블 위에 작은 동전을 남기면, 그것이 노동자의 중요한 수입이 되는 구조가 만들어진 것이다.
이런 구조는 당연히 비판을 받았다. 20세기 초 미국에서는 팁을 불평등하고 비민주적인 관습으로 보는 반팁운동이 일어났고, 워싱턴주와 여러 남부 주를 포함한 일부 주에서는 팁을 금지하는 법이 통과되기도 했다. 하지만 고용주 입장에서는 낮은 임금을 유지할 수 있는 팁 구조가 매력적이었다. 결국 관련 법은 오래 버티지 못했고, 미국에서는 팁 문화가 계속 남았다.
흥미로운 점은 유럽에서는 오히려 팁 문화가 상대적으로 옅어졌다는 것이다. 노동자는 손님의 호의가 아니라 고용주에게 정당한 임금을 받아야 한다는 인식이 강해졌고, 서비스 비용을 가격에 포함하는 방식이 더 자연스럽게 자리 잡았다. 반면 미국은 이민자와 유색인종 노동자가 서비스업의 낮은 임금 구조를 떠받치는 시간이 길었고, 기업 중심의 고용 문화 속에서 팁이 쉽게 사라지지 않았다.
오늘날에도 미국 팁 논쟁의 중심에는 저임금 노동자의 생계 문제가 있다. 미국 연방 노동부 기준으로 팁을 받는 직원에게 고용주가 직접 지급할 수 있는 현금 임금은 시간당 2.13달러까지 낮아질 수 있다. 단, 팁과 현금 임금을 합친 금액이 연방 최저임금인 시간당 7.25달러에 미치지 못하면 고용주가 차액을 보전해야 한다.
이 구조를 팁 크레딧이라고 부른다. 고용주는 손님이 낸 팁을 직원 임금의 일부처럼 계산할 수 있고, 직원은 실제 생활비의 상당 부분을 손님의 팁에 의존하게 된다. 주마다 기준이 다르기 때문에 모든 미국 식당이 같은 방식은 아니지만, 팁이 임금 체계 안에 들어가 있다는 점은 미국 팁 문화를 설명하는 핵심이다.
또 팁을 받는 서비스업 노동자 안에서도 임금 격차 문제가 꾸준히 지적된다. 서빙 직원 중에는 유색인종과 여성이 많고, 같은 일을 해도 백인 노동자보다 낮은 임금을 받는다는 조사 결과가 반복해서 나온다. 결국 팁은 손님이 느끼는 예의 문제를 넘어, 미국 서비스업의 낮은 기본급과 불평등한 노동 구조를 드러내는 장치이기도 하다.
그래서 미국에서 팁은 단순히 &ldquo;친절했으니 조금 더 준다&quot;는 문제가 아니다. 손님 입장에서는 부담스러운 추가 비용이지만, 직원 입장에서는 임금의 빈칸을 채우는 돈이 된다. 손님이 팁을 주지 않으면 직원의 하루 수입이 직접 줄어들 수 있고, 그래서 팁은 법적 의무가 아니면서도 암묵적인 룰처럼 작동한다.
팁은 서비스를 좋아지게 만들까 &nbsp; 팁 문화가 긍정적으로 설명될 때 자주 나오는 말은 &ldquo;팁이 있으면 직원이 더 친절해진다&quot;는 주장이다. 고용주가 옆에서 계속 감시하지 않아도, 직원이 좋은 서비스를 제공하면 더 많은 팁을 받을 수 있으니 자연스럽게 서비스 품질이 올라간다는 논리다.
경제학적으로 보면 그럴듯하다. 고용주와 직원 사이에는 항상 정보 차이가 있다. 고용주는 직원이 손님에게 얼마나 친절하게 응대하는지 모든 순간을 확인하기 어렵다. 이때 팁은 손님이 직접 서비스 품질에 대해 보상하는 장치처럼 작동할 수 있다.
하지만 현실은 그렇게 단순하지 않다. 팁을 많이 받는 이유가 반드시 서비스 품질 때문만은 아니다. 손님의 기분, 외모와 인종에 대한 편견, 식당의 분위기, 계산 금액, 단체 손님 여부, 결제 화면의 기본 선택지까지 영향을 준다. 좋은 서비스를 했는데도 팁이 적을 수 있고, 평범한 서비스였는데도 분위기상 높은 팁을 받는 경우도 있다.
더구나 요즘은 키오스크, 테이크아웃 카페, 드라이브스루, 온라인 주문에서도 팁 선택 화면이 뜬다. 직원의 직접 서비스가 거의 없었는데도 팁을 요구받으면 소비자는 &ldquo;이건 서비스 보상인가, 추가 요금인가&quot;라고 느낀다. 팁이 서비스 개선 장치라기보다 눈치 비용처럼 보이기 시작하는 지점이다.
팁플레이션이 미국 소비자를 더 피곤하게 만들었다 &nbsp; 최근 미국에서는 팁플레이션이라는 말이 자주 나온다. 팁과 인플레이션을 합친 표현으로, 팁을 요구하는 장소가 늘고 권장 비율도 높아지는 현상을 뜻한다.
과거에는 레스토랑에서 15% 정도를 기본 팁으로 생각하는 경우가 많았다. 하지만 팬데믹 이후 서비스업 종사자에 대한 응원 분위기, 물가 상승, 인건비 부담, 결제 단말기 보급이 겹치면서 18%, 20%, 22%, 25% 같은 선택지가 흔해졌다. 손님은 주문 전부터 팁을 요구받고, 직원이 보는 앞에서 화면을 눌러야 하니 심리적 압박을 느낀다.
디지털 결제 단말기는 팁 문화를 더 강하게 만들었다. 예전에는 영수증에 직접 금액을 적거나 현금을 남겼다면, 지금은 화면에 미리 정해진 버튼이 뜬다. 기본 선택지가 높게 설정되어 있으면 소비자는 낮은 버튼을 누르기 어렵다. 0% 버튼이 숨겨져 있거나 &ldquo;No tip&quot;을 직접 눌러야 하는 화면도 있다.
이런 변화 때문에 미국 내부에서도 피로감이 커지고 있다. 팁이 필요한 서비스와 그렇지 않은 서비스의 경계가 흐려졌기 때문이다. 테이블 서비스를 받은 식당에서 팁을 내는 것과, 직접 음식을 받아가는 카운터 주문에서 팁을 요구받는 것은 소비자가 받아들이는 감각이 다르다.
여행자는 어디서 얼마나 팁을 내야 할까 &nbsp; 미국 여행에서 팁을 완전히 피하기는 어렵다. 특히 직원이 테이블로 와서 주문을 받고 음식을 가져다주는 레스토랑에서는 팁을 계산에 포함해 생각하는 것이 현실적이다.
일반적인 식당에서는 세전 음식값을 기준으로 15~20% 정도를 많이 생각한다. 서비스가 매우 좋았다면 더 줄 수 있고, 불만족스러웠다면 낮게 줄 수도 있다. 다만 아무 이유 없이 0%에 가깝게 주면 현지에서는 상당히 무례하게 받아들여질 수 있다.
호텔 포터에게 짐을 맡겼다면 가방 개수에 따라 1~2달러 정도를 주는 방식이 흔하고, 하우스키핑에는 하루 2~5달러 정도를 방에 놓는 경우가 많다. 택시나 차량 호출 서비스도 요금의 10~20% 정도를 선택하는 경우가 많다.
반대로 패스트푸드점처럼 손님이 직접 주문하고 직접 음식을 받아가는 곳에서는 팁을 내지 않아도 되는 경우가 많다. 카페 테이크아웃도 필수라고 보기는 어렵다. 다만 화면에 팁 선택지가 뜰 수 있으므로, 본인이 받은 서비스 수준과 현지 분위기를 보고 판단하면 된다.
중요한 것은 영수증을 확인하는 습관이다. 일부 레스토랑은 단체 손님이나 관광지 매장에서 service charge, gratuity, tip included 같은 항목을 이미 붙이기도 한다. 이 경우 추가 팁을 또 내면 이중으로 내는 셈이 될 수 있다.
한국에는 왜 팁 문화가 자리 잡지 못했을까 &nbsp; 한국에서는 팁 문화가 대중적인 음식점 문화로 자리 잡지 못했다. 이유는 여러 가지다. 먼저 가격에 서비스가 포함되어 있다는 인식이 강하다. 식당에서 음식값을 내면 조리, 서빙, 자리 이용까지 함께 포함된다고 보는 것이다.
또 한국에서 팁은 오랫동안 유흥업소, 골프장, 호텔, 일부 고급 서비스와 연결되어 있었다. 그래서 팁을 좋은 서비스에 대한 자연스러운 감사 표시라기보다 과시, 접대, 불투명한 돈거래처럼 보는 시선이 있었다. 1970~1990년대 언론과 정부가 팁 문화를 사치나 폐습으로 비판했던 흐름도 이런 인식에 영향을 줬다.
최근에는 일부 가게의 팁 박스, 택시 앱의 감사 팁 기능, 해외식 결제 화면이 논란이 되기도 했다. 한국 소비자들이 민감하게 반응하는 이유는 단순히 돈이 아까워서만은 아니다. 이미 음식값과 서비스 요금을 지불했는데, 추가 부담을 소비자에게 넘기는 것처럼 보이기 때문이다.
물론 한국에서도 서비스업 노동자의 임금과 처우 문제는 중요하다. 하지만 그 해결을 손님의 자발적 팁에 맡길 것인지, 가격과 임금 체계 안에서 투명하게 풀 것인지는 별개의 문제다. 한국 사회는 아직 후자에 더 가까운 감각을 가지고 있다.
마무리 &nbsp; 미국에서 팁을 내야 하는 이유는 &ldquo;미국인은 친절해서&quot;도 아니고, &ldquo;서비스가 항상 훌륭해서&quot;도 아니다. 팁은 유럽에서 들어온 관습이 미국의 남북전쟁 이후 노동 현실, 인종 문제, 서비스업 저임금 구조와 결합하면서 사실상 암묵적인 룰이 되었다.
팁은 직원에게 중요한 생계 수단이지만, 동시에 소비자에게는 불투명한 추가 비용이다. 특히 팁플레이션이 심해지면서 미국 소비자들조차 &ldquo;도대체 어디까지 팁을 내야 하느냐&quot;는 피로감을 느끼고 있다.
한국인이 미국을 여행할 때는 팁을 단순히 이해 안 되는 문화로만 보지 말고, 현지 임금 구조와 연결된 관습으로 받아들이는 편이 낫다. 다만 모든 상황에서 무조건 높은 팁을 낼 필요는 없다. 테이블 서비스, 호텔 서비스, 택시처럼 팁이 일반적인 곳과 카운터 주문, 키오스크 주문처럼 선택에 가까운 곳을 구분하면 부담을 줄일 수 있다.
작은 결제 화면 하나에도 사회의 임금 구조와 문화가 들어 있다. 팁 문화를 이해하면 해외여행 예산을 더 현실적으로 잡을 수 있고, 동시에 &ldquo;좋은 서비스의 비용은 누가 부담해야 하는가&quot;라는 질문도 조금 더 선명하게 보인다.
자주 묻는 질문 &nbsp; 미국 식당에서는 팁을 꼭 내야 할까? &nbsp; 법적으로 손님이 반드시 팁을 내야 하는 것은 아니지만, 테이블 서비스를 받은 레스토랑에서는 사실상 관습에 가깝다. 보통 세전 음식값의 15~20%를 많이 생각하며, 영수증에 서비스 요금이 이미 포함되어 있는지는 먼저 확인하는 것이 좋다.
카페에서 테이크아웃할 때도 팁을 내야 할까? &nbsp; 필수라고 보기는 어렵다. 미국에서는 카페 결제 화면에도 팁 선택지가 뜨는 경우가 많지만, 테이크아웃이나 카운터 주문은 레스토랑 테이블 서비스와 성격이 다르다. 특별히 친절한 응대나 복잡한 주문이 있었다면 줄 수 있고, 아니면 0%를 선택해도 된다.
미국 직원은 팁을 못 받으면 최저임금도 못 받는 걸까? &nbsp; 연방 기준으로는 팁과 현금 임금을 합친 금액이 최저임금에 미치지 못하면 고용주가 차액을 보전해야 한다. 다만 실제 현장에서는 팁이 직원 소득에서 큰 비중을 차지하고, 주마다 임금 기준도 다르기 때문에 팁이 생계와 깊게 연결되어 있다.`}).add({id:89,href:"/posts/withholding-tax-system/",title:"원천징수 제도 뜻 쉽게 정리, 세전·세후 월급 차이까지...",description:"원천징수 제도의 뜻과 원천징수의무자, 세전·세후 월급 차이, 근로소득세가 미리 빠지는 이유, 연말정산과의 관계를 누구나 이해하기 쉽게 정리하였다.",content:`월급을 받으면 세전, 세후라는 말을 자주 듣는다. 연봉 계약서에는 분명 5,000만 원이라고 적혀 있는데, 실제 통장에 들어오는 돈을 계산해보면 생각보다 적다. 대략 &ldquo;세금 떼고 들어오는 돈이구나&rdquo; 정도는 알지만, 정확히 무엇이 빠지는지는 헷갈린다.
여기에 원천징수라는 말까지 나오면 더 어렵게 느껴진다. 월급명세서에도 원천징수, 근로소득세, 지방소득세 같은 항목이 보이고, 연말정산 때도 원천징수영수증이라는 서류가 등장한다.
원천징수는 어렵게 말하면 세금 제도지만, 쉽게 말하면 돈을 지급하기 전에 세금을 먼저 떼는 방식 이다. 이 글에서는 원천징수 제도가 무엇인지, 세전과 세후는 어떻게 다른지, 왜 회사가 세금을 대신 떼는지, 연말정산과는 어떤 관계가 있는지 누구나 이해하기 쉽게 정리하였다.
원천징수란 무엇인가 &nbsp; 원천징수는 소득을 받는 사람이 세금을 직접 내기 전에, 소득을 지급하는 쪽에서 세금을 미리 떼어 국가에 납부하는 제도다. 국세청 설명에 따르면 원천징수는 원천징수 대상 소득을 지급하는 원천징수의무자가 소득자로부터 세금을 미리 징수해 국가에 납부하는 제도다.
가장 쉬운 예는 월급이다. 회사가 직원에게 월급 300만 원을 지급한다고 해서 300만 원 전부를 통장에 넣어주는 것은 아니다. 소득세, 지방소득세, 4대보험료 등을 먼저 공제하고 나머지를 지급한다.
흐름으로 보면 이렇다.
세전 월급 -&gt; 원천징수와 공제 -&gt; 세후 실수령액예를 들어 세전 월급이 300만 원이라면 실제 통장에 들어오는 돈은 300만 원보다 적다. 회사가 근로소득세와 지방소득세 등을 미리 떼고 지급하기 때문이다. 이때 미리 떼는 세금이 원천징수된 세금이다.
원천징수에서 등장하는 사람은 크게 두 쪽이다.
소득자: 돈을 받는 사람 원천징수의무자: 돈을 지급하면서 세금을 미리 떼어 납부하는 사람이나 회사 직장인 기준으로 보면 직원은 소득자이고, 회사는 원천징수의무자다. 회사는 월급을 줄 때 세금을 미리 떼고, 그 세금을 세무서에 신고·납부한다.
세전과 세후 차이 &nbsp; 원천징수를 이해하려면 세전과 세후를 같이 알아야 한다. 이 두 단어는 월급, 연봉, 프리랜서 계약, 아르바이트 급여를 볼 때 거의 항상 따라다닌다.
세전 &nbsp; 세전은 세금과 각종 공제를 빼기 전 금액이다. 연봉 협상이나 근로계약서에 적히는 금액은 보통 세전 기준이다.
예를 들어 연봉 5,000만 원이라고 하면, 이 금액이 그대로 통장에 들어온다는 뜻이 아니다. 1년 동안 회사가 지급하기로 한 총급여 기준에 가깝다. 여기서 소득세, 지방소득세, 국민연금, 건강보험, 고용보험, 장기요양보험료 등이 빠진 뒤 실제 수령액이 결정된다.
세후 &nbsp; 세후는 세금과 공제를 뺀 뒤 실제로 받는 돈이다. 직장인에게는 통장에 찍히는 월급이 세후 금액에 가깝다.
예를 들어 세전 월급이 300만 원이어도 세후 실수령액은 250만 원대나 260만 원대가 될 수 있다. 실제 금액은 부양가족 수, 비과세 항목, 4대보험료, 회사 급여 구조에 따라 달라진다.
정리하면 이렇게 볼 수 있다.
구분 의미 예시 세전 세금과 공제 전 금액 연봉계약서의 연봉, 세전 월급 세후 세금과 공제 후 실제 수령액 통장에 입금되는 월급 연봉을 비교할 때 세전 금액만 보면 체감이 다를 수 있다. 실제 생활비 계획은 세후 실수령액 기준으로 세우는 것이 더 현실적이다.
왜 원천징수를 할까 &nbsp; 원천징수는 국가와 개인 모두에게 행정 부담을 줄이는 장치다. 모든 사람이 매달 자기 월급에 대한 세금을 직접 계산해서 납부해야 한다면 굉장히 번거롭다. 계산 실수도 많아지고, 납부를 놓치는 사람도 생길 수 있다.
원천징수를 하면 회사나 지급자가 일정한 기준에 따라 세금을 먼저 떼고 납부한다. 국가는 세금을 안정적으로 확보할 수 있고, 개인은 매번 직접 신고·납부하는 부담을 줄일 수 있다.
원천징수를 하는 이유는 크게 세 가지다.
세금 납부를 편하게 만들기 위해서다. 세금 누락과 탈세를 줄이기 위해서다. 국가가 세수를 안정적으로 확보하기 위해서다. 직장인 입장에서는 월급을 받을 때 이미 세금이 빠져나가므로 &ldquo;내가 세금을 낸다&quot;는 느낌이 약할 수 있다. 하지만 실제로는 회사가 대신 걷어 납부하는 구조일 뿐, 세금 부담자는 소득자인 본인이다.
원천징수는 월급에만 적용될까 &nbsp; 원천징수는 월급에만 적용되는 제도가 아니다. 국세청 안내에서도 원천징수 대상 소득으로 근로소득뿐 아니라 이자소득, 배당소득, 사업소득, 연금소득, 기타소득, 퇴직소득 등이 언급된다.
일상에서 자주 만나는 원천징수 사례는 다음과 같다.
직장인이 받는 월급 프리랜서가 받는 인적용역 사업소득 은행 예금 이자 주식 배당금 강연료, 원고료, 경품 당첨금 같은 기타소득 퇴직금 예를 들어 은행에서 이자를 받을 때도 세금이 이미 빠진 뒤 입금되는 경우가 많다. 프리랜서가 용역비를 받을 때도 지급하는 회사가 일정 세율로 세금을 떼고 지급할 수 있다. 경품 당첨금을 받을 때도 기타소득세가 원천징수될 수 있다.
다만 모든 돈 거래에 원천징수가 적용되는 것은 아니다. 소득 종류, 지급자, 거래 구조에 따라 원천징수 여부가 달라진다. 그래서 사업자나 프리랜서라면 내가 받는 돈이 근로소득인지, 사업소득인지, 기타소득인지 구분하는 것이 중요하다.
원천징수와 연말정산의 관계 &nbsp; 원천징수는 세금을 미리 떼는 제도이고, 연말정산은 1년 동안 미리 낸 세금을 다시 계산하는 절차다. 직장인이 매달 월급에서 낸 근로소득세는 최종 확정 세금이 아니라 예상에 가까운 금액이다.
회사는 매달 간이세액표 등을 기준으로 세금을 원천징수한다. 하지만 실제 세금은 1년 전체 소득, 부양가족, 보험료, 의료비, 교육비, 기부금, 신용카드 사용액 같은 공제 항목을 반영해야 정확히 계산된다.
그래서 연말정산을 한다. 1년 동안 미리 낸 세금과 실제 내야 할 세금을 비교하는 것이다.
1년 동안 원천징수한 세금 &gt; 실제 내야 할 세금 = 환급 가능 1년 동안 원천징수한 세금 &lt; 실제 내야 할 세금 = 추가 납부 가능연말정산 때 받는 원천징수영수증은 한 해 동안 회사가 지급한 소득과 원천징수한 세금, 각종 공제 내역을 정리한 서류다. 이직, 대출, 종합소득세 신고, 각종 소득 증빙에서 자주 쓰인다.
원천징수를 많이 했다고 무조건 손해는 아니다. 연말정산에서 돌려받을 수 있기 때문이다. 반대로 원천징수를 적게 했다고 무조건 좋은 것도 아니다. 나중에 추가로 세금을 낼 수 있다.
원천징수를 볼 때 헷갈리는 부분 &nbsp; 원천징수를 처음 이해할 때 가장 많이 헷갈리는 부분은 &ldquo;회사가 내 세금을 대신 내주는 것인가&quot;라는 점이다. 회사가 세금을 부담해주는 것이 아니다. 회사는 지급할 돈에서 세금을 떼어 대신 납부하는 역할을 한다.
또 하나는 세전 월급과 실수령액 차이다. 세전 월급에서 빠지는 것은 소득세와 지방소득세만이 아니다. 국민연금, 건강보험, 고용보험, 장기요양보험료 같은 사회보험료도 함께 빠진다. 엄밀히 말하면 4대보험료는 세금은 아니지만, 실수령액을 줄이는 공제 항목이라 월급명세서에서 함께 보인다.
프리랜서도 주의할 점이 있다. 용역비에서 3.3%를 떼고 받는다고 해서 세금 문제가 완전히 끝나는 것은 아니다. 이는 미리 낸 세금에 가깝고, 다음 해 종합소득세 신고 때 실제 소득과 필요경비를 반영해 다시 계산해야 한다. 경우에 따라 환급을 받을 수도 있고, 추가 납부가 생길 수도 있다.
원천징수를 이해할 때는 아래 세 가지를 기억하면 좋다.
원천징수는 세금을 미리 떼는 방식이다. 세후 금액은 세전 금액에서 세금과 공제가 빠진 실제 수령액이다. 미리 뗀 세금은 연말정산이나 종합소득세 신고에서 다시 정산될 수 있다. 정리 &nbsp; 원천징수는 소득을 지급하는 사람이 세금을 미리 떼어 국가에 납부하는 제도다. 직장인에게는 월급에서 근로소득세가 먼저 빠지는 방식으로 가장 익숙하고, 프리랜서 용역비, 이자, 배당, 기타소득에서도 자주 등장한다.
핵심만 다시 정리하면 이렇다.
원천징수는 돈을 받기 전에 세금을 먼저 떼는 제도다. 회사는 직원의 세금을 대신 부담하는 것이 아니라 대신 걷어 납부한다. 세전은 공제 전 금액이고, 세후는 실제 통장에 들어오는 금액이다. 원천징수는 근로소득뿐 아니라 이자, 배당, 사업소득, 기타소득 등에도 적용될 수 있다. 연말정산은 1년 동안 원천징수한 세금과 실제 세금을 다시 맞춰보는 절차다. 프리랜서의 원천징수도 종합소득세 신고에서 다시 정산될 수 있다. 월급명세서에서 빠지는 금액을 그냥 &ldquo;세금&quot;으로만 넘기지 말고, 원천징수와 4대보험료를 구분해서 보면 내 실수령액이 훨씬 잘 이해된다. 세전 연봉보다 중요한 것은 실제 생활비 계획에 쓸 수 있는 세후 금액이다.
자주 묻는 질문 &nbsp; 원천징수는 회사가 내 세금을 대신 내주는 것일까? &nbsp; 대신 납부하는 것은 맞지만 대신 부담하는 것은 아니다. 회사는 직원에게 지급할 월급에서 세금을 미리 떼어 세무서에 납부하는 원천징수의무자 역할을 한다.
세전 월급과 세후 월급은 왜 차이가 날까? &nbsp; 세전 월급에서 근로소득세, 지방소득세, 국민연금, 건강보험, 고용보험, 장기요양보험료 등이 빠지기 때문이다. 그래서 계약서의 세전 금액과 통장에 입금되는 세후 금액은 다르다.
원천징수하면 세금 신고를 안 해도 될까? &nbsp; 직장인은 보통 회사의 연말정산으로 대부분 정리되지만, 다른 소득이 있거나 프리랜서·사업소득이 있는 경우 종합소득세 신고가 필요할 수 있다. 원천징수는 최종 확정이 아니라 미리 낸 세금인 경우가 많다.`}).add({id:90,href:"/posts/bank-site-list/",title:"은행 사이트 주소 모음, 국내 은행 공식 홈페이지 한눈...",description:"국내 주요 은행 공식 홈페이지 주소를 시중은행, 지방은행, 특수은행, 인터넷전문은행, 기타 금융기관으로 나누고 안전한 인터넷뱅킹 이용법까지 정리했다.",content:`은행 홈페이지 주소는 평소에는 별것 아닌 것처럼 보이지만, 막상 계좌 조회나 이체, 대출 상담, 예·적금 가입을 하려 할 때 정확히 알아두면 꽤 중요하다. 특히 문자나 검색 광고를 통해 비슷하게 생긴 사이트에 잘못 들어가면 개인정보나 금융 정보가 노출될 수 있다.
인터넷뱅킹과 모바일뱅킹을 자주 쓴다면 은행 이름을 매번 검색하기보다 공식 홈페이지 주소를 즐겨찾기에 등록해두는 편이 안전하다. 은행 앱도 공식 앱마켓에서 직접 검색해 설치하는 것이 좋고, 문자나 이메일에 들어 있는 링크를 눌러 접속하는 습관은 피하는 것이 좋다.
아래는 국내 주요 은행과 금융기관의 공식 사이트 주소를 성격별로 정리한 목록이다. 시중은행, 지방은행, 특수은행, 인터넷전문은행, 상호금융과 저축은행 관련 사이트까지 한 번에 확인할 수 있게 구성했다.
시중은행 공식 홈페이지 &nbsp; 시중은행은 전국 단위로 영업하는 대형 은행이다. 급여 통장, 자동이체, 주택담보대출, 신용대출, 예·적금, 외환, 카드 연계 서비스처럼 대부분의 생활 금융 업무를 처리할 때 가장 먼저 떠올리는 은행이다.
은행 공식 사이트 특징 KB국민은행 https://www.kbstar.com KB스타뱅킹, 급여 계좌, 자산관리 서비스 신한은행 https://www.shinhan.com 신한 SOL 앱, 통합 금융 서비스 하나은행 https://www.kebhana.com 환전, 외화예금, 해외송금 서비스 우리은행 https://www.wooribank.com WON뱅킹, 급여 계좌, 기업금융 iM뱅크 https://www.imbank.co.kr 구 DGB대구은행, 전국 영업 체제 전환 SC제일은행 https://www.standardchartered.co.kr 외국계 은행, 외화와 자산관리 서비스 한국씨티은행 https://www.citibank.co.kr 기존 고객 인터넷뱅킹과 기업금융 중심 KB국민은행, 신한은행, 하나은행, 우리은행은 급여 통장이나 주거래 은행으로 많이 쓰인다. 계좌 이체, 자동이체, 대출, 카드 결제 계좌를 한곳에 묶어두면 관리가 편하지만, 금리나 수수료 조건은 상품별로 다르기 때문에 가입 전에는 꼭 비교해야 한다.
iM뱅크는 DGB대구은행에서 이름을 바꾼 은행이다. 지방은행에서 출발했지만 시중은행 전환 이후 전국 단위 영업을 강화하고 있다. SC제일은행과 한국씨티은행은 외국계 은행 성격이 강해 외화, 글로벌 금융, 자산관리 서비스를 확인할 때 함께 살펴볼 만하다.
지방은행 공식 홈페이지 &nbsp; 지방은행은 특정 지역을 기반으로 성장한 은행이다. 해당 지역에서 거주하거나 사업을 운영한다면 지역 밀착형 대출, 소상공인 지원, 우대 금리 상품을 활용할 수 있다. 요즘은 비대면 계좌 개설과 모바일뱅킹이 보편화되어 거주 지역과 관계없이 상품을 비교하는 사람도 많다.
은행 공식 사이트 기반 지역 BNK부산은행 https://www.busanbank.co.kr 부산·울산·경남 BNK경남은행 https://www.knbank.co.kr 경남 광주은행 https://www.kjbank.com 광주·전남 전북은행 https://www.jbbank.co.kr 전북 제주은행 https://www.e-jejubank.com 제주 지방은행은 지역 고객을 대상으로 한 우대 상품이 나오는 경우가 있다. 예·적금 특판, 소상공인 대출, 지역화폐 연계 서비스처럼 생활권과 맞물린 혜택이 있을 수 있으니, 거주 지역 은행은 한 번쯤 확인해볼 만하다.
다만 비대면으로 가입할 수 있는 상품이라도 우대 조건이 까다로울 수 있다. 급여 이체, 카드 사용, 자동이체, 지역 거주 여부 같은 조건이 붙는 경우가 있으니 금리 숫자만 보고 가입하지 말고 우대 조건을 끝까지 읽어야 한다.
특수은행과 국책은행 공식 홈페이지 &nbsp; 특수은행은 일반 시중은행과 달리 특정 목적을 위해 설립된 금융기관이다. 농업, 수산업, 중소기업, 산업금융, 수출입 금융처럼 정책 목적이 뚜렷한 분야를 지원한다. 개인 고객도 이용할 수 있는 곳이 있지만, 기관별로 핵심 업무는 조금씩 다르다.
은행 공식 사이트 주요 역할 NH농협은행 https://banking.nonghyup.com 농업 관련 금융, 개인·기업 금융 IBK기업은행 https://www.ibk.co.kr 중소기업과 소상공인 금융 지원 KDB산업은행 https://www.kdb.co.kr 산업금융, 기업 구조조정, 정책금융 Sh수협은행 https://www.suhyup-bank.com 수산업과 해양 관련 금융 한국수출입은행 https://www.koreaexim.go.kr 수출입 기업과 해외사업 금융 지원 NH농협은행은 지점과 ATM 접근성이 좋고, 농업 관련 금융뿐 아니라 일반 개인 고객도 많이 이용한다. IBK기업은행은 중소기업과 소상공인 금융 지원 이미지가 강하지만 개인 통장, 예금, 대출 서비스도 운영한다.
KDB산업은행과 한국수출입은행은 개인 생활 금융보다는 기업 금융과 정책금융 성격이 더 강하다. 일반 예금이나 대출을 찾는 목적이라면 시중은행과 농협은행, 기업은행, 수협은행을 먼저 비교하는 편이 현실적이다.
인터넷전문은행 공식 홈페이지 &nbsp; 인터넷전문은행은 오프라인 지점 없이 모바일 앱과 온라인 중심으로 운영되는 은행이다. 계좌 개설, 송금, 예·적금, 대출 신청 대부분을 앱에서 처리한다. 화면이 단순하고 가입 절차가 빠르다는 장점이 있지만, 영업점 상담이 필요한 사람에게는 불편할 수 있다.
은행 공식 사이트 특징 카카오뱅크 https://www.kakaobank.com 모임통장, 26주 적금, 간편 송금 케이뱅크 https://www.kbanknow.com 국내 첫 인터넷전문은행, 파킹통장과 비대면 금융 토스뱅크 https://www.tossbank.com 토스 앱 기반 통장, 대출, 카드 연계 서비스 인터넷전문은행은 파킹통장, 자유적금, 비상금대출처럼 모바일에서 빠르게 가입하는 상품이 강하다. 계좌 개설 과정도 비교적 간단해서 처음 금융 앱을 쓰는 사람도 접근하기 쉽다.
다만 금리가 높아 보이는 상품일수록 한도, 기간, 우대 조건을 확인해야 한다. 예를 들어 높은 금리가 일정 금액까지만 적용되거나, 일정 기간 이후 금리가 바뀌는 경우가 있다. 인터넷전문은행은 편리하지만, 편리함 때문에 약관과 조건을 대충 넘기면 손해를 볼 수 있다.
기타 금융기관과 비교 사이트 &nbsp; 은행법상 은행은 아니지만 예·적금, 대출, 보험, 상호금융 서비스를 제공하는 기관도 많다. 새마을금고, 신협, 우체국 금융, 저축은행은 목적에 따라 잘 활용하면 유용하지만, 은행과 제도나 상품 구조가 다를 수 있으므로 차이를 알고 이용해야 한다.
기관 공식 사이트 확인할 수 있는 것 새마을금고 https://www.kfcc.co.kr 지역 금고, 예·적금, 대출, 공제 상품 우체국 금융 https://www.epostbank.go.kr 예금, 보험, 우체국 금융 서비스 신용협동조합 https://www.cu.co.kr 신협 예·적금, 대출, 조합원 혜택 저축은행중앙회 https://www.fsb.or.kr 저축은행 정보, 금리 비교, 소비자 정보 저축은행중앙회에서 저축은행 정보 확인 &nbsp; 새마을금고와 신협은 지역 조합 성격이 강하다. 같은 이름을 쓰더라도 개별 금고나 조합마다 금리, 상품 조건, 재무 상태가 다를 수 있다. 그래서 예금을 넣기 전에는 해당 지점의 조건과 예금자 보호 구조를 함께 확인하는 것이 좋다.
저축은행은 시중은행보다 예·적금 금리가 높게 나오는 경우가 있지만, 금융회사별 안정성과 상품 조건을 더 꼼꼼히 봐야 한다. 저축은행중앙회 사이트에서는 저축은행 관련 정보를 한곳에서 확인할 수 있어 금리 비교를 할 때 도움이 된다.
한눈에 보는 은행 사이트 주소 &nbsp; 아래 표는 즐겨찾기용으로 다시 모은 목록이다. 인터넷뱅킹을 자주 쓴다면 본인이 거래하는 은행 주소만이라도 브라우저에 직접 저장해두는 것이 좋다.
구분 은행·기관 공식 주소 시중은행 KB국민은행 https://www.kbstar.com 시중은행 신한은행 https://www.shinhan.com 시중은행 하나은행 https://www.kebhana.com 시중은행 우리은행 https://www.wooribank.com 시중은행 iM뱅크 https://www.imbank.co.kr 시중은행 SC제일은행 https://www.standardchartered.co.kr 시중은행 한국씨티은행 https://www.citibank.co.kr 지방은행 BNK부산은행 https://www.busanbank.co.kr 지방은행 BNK경남은행 https://www.knbank.co.kr 지방은행 광주은행 https://www.kjbank.com 지방은행 전북은행 https://www.jbbank.co.kr 지방은행 제주은행 https://www.e-jejubank.com 특수은행 NH농협은행 https://banking.nonghyup.com 특수은행 IBK기업은행 https://www.ibk.co.kr 특수은행 KDB산업은행 https://www.kdb.co.kr 특수은행 Sh수협은행 https://www.suhyup-bank.com 특수은행 한국수출입은행 https://www.koreaexim.go.kr 인터넷은행 카카오뱅크 https://www.kakaobank.com 인터넷은행 케이뱅크 https://www.kbanknow.com 인터넷은행 토스뱅크 https://www.tossbank.com 기타 금융기관 새마을금고 https://www.kfcc.co.kr 기타 금융기관 우체국 금융 https://www.epostbank.go.kr 기타 금융기관 신용협동조합 https://www.cu.co.kr 기타 금융기관 저축은행중앙회 https://www.fsb.or.kr 안전한 인터넷뱅킹 이용 팁 &nbsp; 은행 사이트를 이용할 때 가장 중요한 것은 공식 주소로 직접 접속하는 습관이다. 포털 검색 결과에 뜬 광고나 문자에 포함된 링크를 무심코 누르기보다, 공식 홈페이지 주소를 직접 입력하거나 미리 저장한 즐겨찾기를 사용하는 편이 안전하다.
주소창에서 https://로 시작하는지, 은행 이름과 도메인이 자연스러운지 확인해야 한다. 피싱 사이트는 화면 디자인을 실제 은행처럼 비슷하게 만들 수 있지만, 주소는 완전히 같을 수 없다. 철자가 하나 다르거나 이상한 하위 도메인이 붙어 있다면 접속을 멈추는 것이 좋다.
공동인증서, 금융인증서, OTP, 생체인증은 가능한 범위에서 함께 사용하는 편이 좋다. 특히 큰 금액을 이체하거나 대출 관련 업무를 볼 때는 공공 와이파이보다 개인 통신망이나 신뢰할 수 있는 네트워크에서 접속하는 것이 안전하다.
비밀번호도 여러 금융기관에서 같은 것을 반복해서 쓰지 않는 편이 좋다. 유출 사고는 한 사이트에서 끝나지 않고 다른 계정으로 이어질 수 있다. 은행 앱에서 로그인 알림, 이체 알림, 해외 접속 차단 같은 보안 설정을 제공한다면 켜두는 것이 좋다.
정리 &nbsp; 은행 공식 홈페이지 주소는 계좌 조회, 이체, 대출, 예·적금 가입, 인증서 관리처럼 기본 금융 업무를 처리할 때 꼭 필요하다. 자주 쓰는 은행은 검색해서 들어가기보다 공식 주소를 직접 저장해두는 것이 안전하다.
시중은행은 생활 금융 전반에 강하고, 지방은행은 지역 기반 상품과 우대 조건을 살펴볼 때 유용하다. 특수은행은 정책금융이나 특정 산업 지원 성격이 있고, 인터넷전문은행은 모바일 중심의 빠른 금융 서비스가 장점이다. 새마을금고, 신협, 저축은행은 금리 비교 대상이 될 수 있지만 기관별 조건을 더 꼼꼼히 확인해야 한다.
은행을 고를 때는 이름값만 보지 말고 내가 실제로 쓸 기능을 기준으로 보면 된다. 급여 계좌, 자동이체, 대출, 예금 금리, 모바일 앱 사용성, 지점 접근성, 보안 기능을 함께 비교하면 내 생활에 맞는 은행을 고르기 훨씬 쉽다.`}).add({id:91,href:"/posts/bank-vs-savings-bank/",title:"은행과 저축은행의 차이",description:`은행은 제1금융권이라고 하고, 이를 제외한 대부분의 금융기관을 제2금융권이라고 한다.
예를 들면, 증권사, 종합금융회사, 보험회사, 카드사, 캐피탈 등이 해당된다.
그리고 &lsquo;저축은행&rsquo;도 제2금융권에 속한다. 사실 저축은행은 &lsquo;은행&rsquo;이 아니기 때문이다.
저축은행은 원래 &lsquo;신용금고&rsquo;라는 이름의 사금융 기관이다.
예전에 비자금과 금융사기의 도구로 사용되며 &lsquo;신용금고&rsquo;라는 단어 자체의 이미지가 나빠지자 사람들은 신용금고 이용을 꺼려해지게 되면서
관련 업계가 완전히 사장될 것을 우려해 국회는 은행법을 개정하며 &lsquo;은행&rsquo;이라는 이름의 사용을 허가하였고, 현재의 ‘저축은행’이 되었다 여기서 주의 할 점은 &lsquo;저축은행&rsquo;을 표기할 때도 &lsquo;저축 은행&rsquo; 이렇게 띄어쓰면 안된다.
`,content:`은행은 제1금융권이라고 하고, 이를 제외한 대부분의 금융기관을 제2금융권이라고 한다.
예를 들면, 증권사, 종합금융회사, 보험회사, 카드사, 캐피탈 등이 해당된다.
그리고 &lsquo;저축은행&rsquo;도 제2금융권에 속한다. 사실 저축은행은 &lsquo;은행&rsquo;이 아니기 때문이다.
저축은행은 원래 &lsquo;신용금고&rsquo;라는 이름의 사금융 기관이다.
예전에 비자금과 금융사기의 도구로 사용되며 &lsquo;신용금고&rsquo;라는 단어 자체의 이미지가 나빠지자 사람들은 신용금고 이용을 꺼려해지게 되면서
관련 업계가 완전히 사장될 것을 우려해 국회는 은행법을 개정하며 &lsquo;은행&rsquo;이라는 이름의 사용을 허가하였고, 현재의 ‘저축은행’이 되었다 여기서 주의 할 점은 &lsquo;저축은행&rsquo;을 표기할 때도 &lsquo;저축 은행&rsquo; 이렇게 띄어쓰면 안된다.
은행과 저축은행은 모두 재정 및 금융 서비스를 제공하는 금융 기관이지만, 은행과 저축은행 사이에는 몇 가지 주요한 차이가 있다.
차이점은 아래와 같다.
법적 지위 &nbsp; 은행은 대한민국의 금융기관법에 따라 은행으로 정식으로 인가되어 운영되는 기관이다. 저축은행은 &ldquo;저축은행법&quot;에 따라 설립되고 운영된다. 목적 &nbsp; 은행은 주로 예금 수령 및 대출 발급을 통해 이자를 얻어 수익을 창출한다. 또한 투자 상품 및 금융 조언을 제공하기도 한다. 저축은행은 주로 개인 및 소규모 기업에 대출을 제공하고, 예금을 수령하여 안전하게 운용한다. 기능 및 업무 &nbsp; 은행은 예금, 대출, 외환거래, 투자 등 다양한 금융 서비스를 제공한다. 또한 상업 은행은 기업 및 개인 고객을 대상으로 대출을 제공하는 등의 기업적 활동도 수행한다. 저축은행은 주로 저축과 대출에 중점을 두며, 일반적으로 소액의 저축자를 대상으로 한 서비스를 제공한다. 라이선스 및 규제 &nbsp; 은행은 중앙 은행이나 국가 금융 감독 기관에 의해 정식으로 라이선스를 받은 금융 기관이다. 이러한 규제를 받음으로써, 은행은 예금 보호, 대출 발급, 투자 등 다양한 금융 서비스를 제공할 수 있다. 저축은행은 일반적으로 은행보다 적은 범위의 금융 서비스를 제공하며, 일반적으로 더 적은 규제를 받는다. 소유 형태 &nbsp; 대부분의 은행은 주주에 의해 소유되며, 주로 주식회사 형태로 운영된다. 대부분의 저축은행은 지역 사회 기반의 협동조합이나 공적인 자금에 의해 지원되며, 주로 서민과 소상공인을 대상으로 하는 비영리 기관으로 운영된다. 지역적 차원 &nbsp; 대부분의 은행은 국가적 또는 국제적인 규모로 활동한다. 일부 저축은행은 특정 지역 또는 지역사회에 초점을 맞춘 서비스를 제공한다. 주요 고객층 &nbsp; 은행은 대개 다양한 규모의 고객을 대상으로 서비스를 제공한다. 대기업부터 개인 소비자까지 포괄적인 서비스를 제공한다. 저축은행은 일반적으로 소규모 사업 및 개인 고객을 주요 고객으로 삼는다. 이러한 차이점들은 금융 시스템 내에서 은행과 저축은행이 서로 다른 역할과 기능을 수행하고 있음을 보여준다.`}).add({id:92,href:"/docs/isa/account-type/managed/",title:"일임형 ISA",description:"일임형 ISA의 뜻, 모델포트폴리오 구조, 신탁형 ISA와의 차이, 가입 절차, 수수료와 주의사항까지 초보자도 이해하기 쉽게 정리했다.",content:`투자는 하고 싶은데 어떤 상품을 골라야 할지 막막할 때가 있다. ETF를 사야 할지, 펀드를 골라야 할지, 안전자산 비중은 얼마나 둬야 할지 생각하다 보면 계좌 개설 단계에서 멈추기도 한다.
일임형 ISA는 이런 사람에게 맞는 선택지다. 내가 직접 상품을 하나하나 고르는 대신, 금융기관이 제시하는 모델포트폴리오를 선택하고 전문가에게 운용을 맡기는 방식이다. ISA의 절세 혜택은 유지하면서 운용 부담을 줄일 수 있다는 점이 핵심이다.
다만 &ldquo;전문가가 알아서 해준다&quot;는 말만 보고 가입하면 곤란하다. 일임형 ISA도 투자상품이고, 수수료가 있으며, 원금손실 가능성도 있다. 이 글에서는 일임형 ISA의 구조와 신탁형 ISA와의 차이, 모델포트폴리오, 수수료, 가입 전 체크할 점을 정리했다.
일임형 ISA란 무엇인가? &nbsp; 일임형 ISA는 금융기관과 투자일임계약을 맺고, 금융기관의 전문가가 투자자의 성향에 맞는 포트폴리오로 자산을 운용하는 ISA다.
ISA는 개인종합자산관리계좌라는 뜻이고, 한 계좌 안에서 다양한 금융상품을 운용하면서 세제 혜택을 받을 수 있는 제도다. ISA에는 크게 신탁형, 일임형, 중개형이 있는데, 그중 일임형은 &ldquo;운용을 맡기는 ISA&quot;라고 이해하면 쉽다.
일임형 ISA의 핵심 구조는 이렇다.
투자자가 투자성향 진단을 받는다. 금융기관이 투자성향에 맞는 모델포트폴리오를 제시한다. 투자자는 그중 하나를 선택한다. 금융기관 전문가가 포트폴리오에 맞춰 상품을 편입하고 운용한다. 시장 상황에 따라 정기적으로 자산 비중을 조정한다. 여기서 모델포트폴리오, 줄여서 MP는 투자자의 위험성향에 맞춰 자산 종류와 비중을 미리 정해둔 포트폴리오다. 예를 들어 안정형은 채권형과 현금성 자산 비중이 높고, 공격투자형은 주식형이나 해외자산 비중이 높아질 수 있다.
일임형 ISA의 가장 큰 장점은 운용 부담을 줄이는 것이다 &nbsp; 일임형 ISA의 장점은 상품 선택과 리밸런싱 부담을 줄일 수 있다는 점이다.
직접 투자 방식에서는 내가 직접 ETF를 고르고, 펀드를 비교하고, 시장이 바뀔 때마다 비중을 조정해야 한다. 그런데 초보자 입장에서는 이 과정이 꽤 어렵다. 수익률만 보고 골랐다가 위험등급을 놓칠 수도 있고, 비슷한 상품을 여러 개 담아놓고 분산투자했다고 착각할 수도 있다.
일임형 ISA는 이 부분을 금융기관의 운용 프로세스에 맡긴다. 삼성증권은 ISA 일임형을 고객이 투자성향에 맞게 선택한 모델포트폴리오에 따라 전문가가 운용하는 투자일임서비스라고 설명한다. 또한 투자목적, 투자 경험, 위험감수능력 등을 고려해 투자자 유형을 분류하고, 적합한 모델포트폴리오를 제시하는 절차를 둔다.
한국투자증권도 ISA 일임형을 ISA 계좌 전용 종합자산관리서비스로 설명하며, 손익통산과 포트폴리오 운용 및 관리 기능을 강조한다. 다만 한국투자증권 페이지에는 일부 ISA 일임형 신규가입이 불가능하고, 요청 시 ISA 중개형으로 전환 가능하다는 안내도 있으므로 실제 가입 가능 여부는 금융기관별로 반드시 확인해야 한다.
일임형 ISA와 신탁형 ISA 차이 &nbsp; 일임형 ISA와 신탁형 ISA는 둘 다 ISA 계좌지만 운용 방식이 다르다. 가장 큰 차이는 누가 구체적인 상품과 비중을 정하느냐다.
구분 일임형 ISA 신탁형 ISA 계약 성격 투자일임계약 특정금전신탁계약 운용 방식 모델포트폴리오 기준으로 전문가가 운용 투자자가 상품과 비중을 직접 지시 모델포트폴리오 제시됨 일반적으로 없음 상품 교체 일임업자가 운용, 사전고지 필요 투자자 운용지시 필요 리밸런싱 정기적으로 진행될 수 있음 투자자가 직접 판단 적합한 사람 상품 선택이 어렵고 운용을 맡기고 싶은 사람 직접 상품을 고르고 통제하고 싶은 사람 삼성증권 안내에 따르면 일임형 ISA는 표준화된 모델포트폴리오를 기준으로 전문가가 운용하는 반면, 신탁형 ISA는 고객이 구체적인 편입상품과 비중을 직접 운용 지시하는 구조다.
쉽게 말하면 신탁형은 &ldquo;내가 고르고 금융기관에 실행을 맡기는 방식&quot;이고, 일임형은 &ldquo;내 성향에 맞는 포트폴리오를 고른 뒤 운용을 맡기는 방식&quot;이다.
모델포트폴리오는 어떻게 고를까? &nbsp; 일임형 ISA에 가입하려면 먼저 투자성향을 파악한다. 투자성향은 보통 투자 경험, 금융 지식, 투자 목적, 손실 감내 수준, 투자 기간 등을 기준으로 나뉜다.
일반적으로 투자성향은 안정형, 안정추구형, 위험중립형, 적극투자형, 공격투자형처럼 단계가 나뉜다. 금융기관마다 이름은 조금 다를 수 있지만 방향은 비슷하다.
중요한 점은 본인의 투자성향보다 높은 위험등급의 모델포트폴리오를 선택하기 어렵다는 것이다. 예를 들어 내 투자성향이 위험중립형으로 나온다면, 위험중립형 이하의 포트폴리오만 선택할 수 있는 식이다. 이는 투자자가 감당하기 어려운 위험을 떠안지 않도록 막기 위한 장치다.
모델포트폴리오를 고를 때는 수익률만 보면 안 된다. 아래 항목을 같이 봐야 한다.
주식형, 채권형, 현금성 자산 비중 국내자산과 해외자산 비중 환율 변동 위험이 있는지 편입 상품의 보수 일임운용 수수료 과거 수익률보다 손실 구간에서 얼마나 흔들렸는지 특히 ISA는 절세 계좌이므로 세금이 붙는 이자, 배당, 해외자산 관련 수익을 어떻게 담는지도 중요하다. 한국투자증권도 ISA 계좌의 특성에 맞춰 절세에 초점을 둔 운용, 해외분산투자, 정기 리밸런싱 등을 일임형의 특징으로 설명한다.
일임형 ISA 수수료는 꼭 확인해야 한다 &nbsp; 일임형 ISA는 운용을 맡기는 구조이므로 수수료가 발생한다. 흔히 일임운용 수수료라고 부른다. 여기에 포트폴리오 안에 편입된 펀드나 ETF의 운용보수, 판매보수 같은 비용이 별도로 붙을 수 있다.
수수료는 금융기관과 모델포트폴리오 유형에 따라 다르다. 보통 위험자산 비중이 높고 운용이 적극적인 포트폴리오일수록 수수료가 높아질 수 있다. 온라인 가입과 지점 가입의 수수료가 다르게 책정되는 경우도 있으므로 가입 화면에서 최종 비용을 확인해야 한다.
수수료를 볼 때는 &ldquo;연 몇 퍼센트&quot;라는 숫자만 보지 말고, 실제로 언제 어떤 방식으로 빠져나가는지도 확인해야 한다. 분기 단위로 징수되는지, 계좌 평가금액에서 차감되는지, 수익률이 마이너스일 때 수수료 부과 조건이 달라지는지까지 봐야 한다.
초보자가 놓치기 쉬운 부분은 편입 상품의 보수다. 일임운용 수수료가 낮아 보여도 포트폴리오 안에 들어 있는 개별 상품의 비용까지 합치면 실제 부담은 더 커질 수 있다.
일임형 ISA 가입 절차 &nbsp; 금융기관마다 화면 구성은 다르지만, 일임형 ISA 가입 절차는 대체로 비슷하다.
ISA 가입 가능 여부를 확인한다. 일임형 ISA 교육 또는 안내 동영상을 확인한다. 투자 목적, 경험, 위험 감수능력 등을 입력해 투자성향을 진단한다. 투자성향에 맞는 모델포트폴리오를 확인한다. 계약 관련 서류와 핵심설명서를 읽는다. 모델포트폴리오를 선택하고 가입 정보를 입력한다. 가입 확인 절차 후 운용이 시작된다. 삼성증권 안내에서는 교육동영상 시청, 투자성향 파악, 모델포트폴리오 제시, 서비스 가입, 가입확인 후 운용 개시 흐름으로 설명한다. 가입 확인 익일부터 운용이 시작된다는 구조도 안내되어 있다.
여기서 중요한 것은 서류를 대충 넘기지 않는 것이다. 일임형 ISA는 금융기관이 운용하지만 손익은 투자자에게 귀속된다. 즉, 수익이 나면 내 수익이고 손실이 나도 내 손실이다.
일임형 ISA가 잘 맞는 사람과 맞지 않는 사람 &nbsp; 일임형 ISA는 투자 초보자에게 편한 선택지가 될 수 있지만, 모든 사람에게 정답은 아니다.
일임형 ISA가 잘 맞는 사람 &nbsp; 투자상품을 직접 고르기 어렵다. ETF, 펀드, 채권형 상품의 차이를 아직 잘 모른다. 주기적으로 포트폴리오를 점검할 시간이 부족하다. 투자성향에 맞는 분산투자를 하고 싶다. ISA 절세 혜택은 받고 싶지만 운용은 전문가에게 맡기고 싶다. 일임형 ISA가 맞지 않을 수 있는 사람 &nbsp; 개별 ETF나 주식을 직접 고르고 싶다. 수수료를 최대한 낮추고 싶다. 포트폴리오 편입 상품을 직접 통제하고 싶다. 단기 매매를 자주 하고 싶다. 금융기관이 제공하는 모델포트폴리오가 마음에 들지 않는다. 직접 투자에 익숙하고 비용에 민감한 사람이라면 중개형 ISA가 더 나을 수 있다. 반대로 투자 경험이 적고 운용 부담을 줄이고 싶다면 일임형 ISA가 더 편할 수 있다.
가입 전 주의사항 &nbsp; 일임형 ISA도 원금보장 상품이 아니다. 포트폴리오에 편입된 금융투자상품은 시장 상황에 따라 손실이 발생할 수 있고, 해외자산이 포함되면 환율 변동 영향도 받을 수 있다.
또한 ISA는 의무가입기간을 지켜야 세제 혜택을 제대로 받을 수 있다. 의무가입기간 내에 해지하면 일반과세 등 불이익이 생길 수 있다. 세법과 과세 기준은 바뀔 수 있으므로 가입 시점의 최신 안내를 확인해야 한다.
금융기관별로 제공하는 ISA 유형도 다르다. 어떤 곳은 일임형 온라인 가입이 가능하고, 어떤 곳은 신규가입을 중단했거나 중개형 전환만 안내할 수 있다. 그래서 &ldquo;일임형 ISA가 좋다&quot;보다 먼저 &ldquo;내가 이용하려는 금융기관에서 지금 가입 가능한가&quot;를 확인하는 것이 순서다.
가입 전에는 최소한 아래 네 가지를 확인하자.
내 투자성향에 맞는 모델포트폴리오가 있는지 일임운용 수수료와 편입 상품 보수를 합친 비용이 얼마인지 최근 수익률뿐 아니라 손실 가능성과 위험등급이 어떤지 해지나 만기 연장, 중도 출금 조건이 어떻게 되는지 정리: 일임형 ISA는 &ldquo;직접 고르기 어려운 사람&quot;에게 맞는 절세 투자 계좌다 &nbsp; 일임형 ISA는 ISA의 세제 혜택을 활용하면서 금융기관 전문가에게 운용을 맡길 수 있는 계좌다. 투자자가 모든 상품을 직접 고르는 신탁형이나 중개형과 달리, 일임형은 모델포트폴리오를 선택하고 운용은 전문가가 진행한다.
핵심만 정리하면 이렇다.
일임형 ISA는 투자일임계약 방식의 ISA다. 투자성향에 맞는 모델포트폴리오를 선택한다. 금융기관 전문가가 포트폴리오에 맞춰 운용한다. 신탁형 ISA보다 직접 지시할 부분은 적지만, 운용 부담도 적다. 일임운용 수수료와 편입 상품 보수를 반드시 확인해야 한다. 투자상품이므로 원금손실 가능성이 있다. 금융기관마다 가입 가능 여부와 조건이 다르다. 일임형 ISA는 &ldquo;알아서 굴려주는 계좌&quot;가 아니라 &ldquo;정해진 운용 원칙에 따라 전문가에게 맡기는 계좌&quot;에 가깝다. 이 차이를 알고 가입해야 후회가 적다. 투자를 처음 시작한다면 일임형 ISA로 구조를 익히는 것도 방법이고, 직접 운용 경험이 쌓이면 중개형 ISA와 비교해보는 것도 좋다.
자주 묻는 질문 &nbsp; Q1. 일임형 ISA는 원금이 보장되나? &nbsp; 아니다. 일임형 ISA에 편입된 금융투자상품은 운용 결과에 따라 손실이 발생할 수 있다. 예금보호 대상 상품이 일부 포함될 수는 있지만, 계좌 전체가 원금보장되는 것은 아니다.
Q2. 일임형 ISA와 중개형 ISA 중 무엇이 더 좋나? &nbsp; 직접 ETF나 주식을 고르고 싶다면 중개형 ISA가 편하다. 반대로 상품 선택과 리밸런싱이 부담스럽다면 일임형 ISA가 더 맞을 수 있다. 수수료와 운용 자유도까지 함께 비교해야 한다.
Q3. 모델포트폴리오는 마음대로 바꿀 수 있나? &nbsp; 금융기관 기준에 따라 변경할 수 있지만, 투자성향보다 높은 위험등급의 포트폴리오는 선택이 제한될 수 있다. 변경 가능 횟수와 절차는 가입한 금융기관에서 확인해야 한다.
Q4. 일임형 ISA를 해지하면 바로 돈을 받을 수 있나? &nbsp; 바로 받지 못할 수 있다. 포트폴리오 안의 금융상품을 환매하거나 매도해야 하므로 상품 구성에 따라 며칠이 걸릴 수 있다. 해지 전 예상 지급일을 확인하는 것이 좋다.
Q5. 일임형 ISA 수수료는 얼마나 중요한가? &nbsp; 매우 중요하다. 일임운용 수수료뿐 아니라 포트폴리오에 들어 있는 펀드나 ETF의 보수까지 장기 수익률에 영향을 준다. 가입 전 총비용을 확인해야 한다.`}).add({id:93,href:"/posts/funding-plan-for-home-purchase/",title:"자금조달계획서 제출 대상과 증빙서류 총정리: 작성 방법...",description:"자금조달계획서가 무엇인지, 제출 대상과 기한, 자기자금·대출·증여 작성 방법, 증빙서류와 반려를 막는 체크포인트까지 누구나 이해하기 쉽게 정리하였다.",content:`집을 사기로 마음먹고 계약까지 진행하면 생각보다 많은 서류를 만나게 된다. 그중 처음 집을 사는 사람이 가장 헷갈려 하는 서류가 자금조달계획서다. 이름부터 딱딱하고, 돈의 출처를 적어야 한다고 하니 괜히 긴장되기도 한다.
자금조달계획서는 쉽게 말해 이 집을 살 돈을 어디서 마련했는지 적는 서류 다. 내 예금인지, 대출인지, 기존 집을 팔아서 마련한 돈인지, 부모님에게 받은 돈인지 구분해서 적어야 한다. 단순한 형식 문서처럼 보이지만, 금액이 맞지 않거나 증빙이 부족하면 보완 요청을 받을 수 있다.
이 글에서는 자금조달계획서를 누가 내야 하는지, 언제까지 내야 하는지, 어떤 항목을 어떻게 써야 하는지, 증빙서류는 무엇을 준비해야 하는지 누구나 이해하기 쉽게 정리하였다.
자금조달계획서란 무엇인가 &nbsp; 자금조달계획서의 정식 명칭은 주택취득자금 조달 및 입주계획서 다. 주택을 살 때 들어간 돈을 어떤 방식으로 마련했는지 신고하는 서류다.
정부가 이 서류를 요구하는 이유는 부동산 거래에서 자금 출처를 확인하기 위해서다. 실거래가를 부풀리거나, 편법 증여를 하거나, 소득에 비해 지나치게 큰 금액으로 주택을 취득하는 경우를 점검할 수 있다.
자금조달계획서에는 보통 이런 내용을 적는다.
집을 사는 데 필요한 총 매매대금 내 예금이나 주식 매도금 같은 자기자금 주택담보대출이나 신용대출 같은 금융기관 차입금 가족이나 지인에게 빌린 돈 증여나 상속으로 받은 돈 기존 부동산 처분대금이나 전세보증금 실제 입주 계획 핵심은 하나다. 자금 출처 합계가 계약서상 매매대금과 정확히 일치해야 한다. 취득세, 중개수수료, 이사비, 인테리어 비용은 별도 부대비용이지 자금조달계획서의 매매대금 합계에 넣는 항목이 아니다.
누가 언제 제출해야 할까 &nbsp; 자금조달계획서는 모든 주택 거래에 무조건 필요한 것은 아니다. 지역과 거래금액에 따라 제출 여부가 달라진다.
구분 제출 기준 규제지역 주택 가격과 관계없이 제출 비규제지역 거래가격 6억 원 이상 주택이면 제출 여기서 규제지역은 투기과열지구나 조정대상지역을 말한다. 규제지역에서는 주택 가격이 낮아도 자금조달계획서를 제출해야 한다. 반대로 비규제지역은 거래금액이 6억 원 이상일 때 제출 대상이 된다.
제출 기한도 중요하다. 부동산 매매계약을 체결하면 계약일로부터 30일 이내에 부동산 거래 신고를 해야 한다. 자금조달계획서는 이 부동산 거래 신고와 함께 제출한다.
즉, 기준은 이렇게 보면 된다.
제출 기한: 계약일로부터 30일 이내 제출 방식: 부동산 거래 신고와 함께 제출 제출처: 부동산거래관리시스템 또는 관할 구청 제출 기한을 넘기면 과태료가 부과될 수 있고, 실거래 신고필증 발급이 늦어져 등기 일정에 문제가 생길 수 있다. 계약일이 정해졌다면 바로 30일 마감일을 달력에 표시해두는 게 좋다.
작성은 5단계로 나누면 쉽다 &nbsp; 자금조달계획서는 한 번에 쓰려고 하면 복잡하다. 아래 순서대로 정리하면 훨씬 덜 헷갈린다.
1단계: 제출 대상과 기한 확인 &nbsp; 먼저 내가 자금조달계획서 제출 대상인지 확인한다. 주택이 규제지역인지, 비규제지역이라면 거래금액이 6억 원 이상인지 본다. 그리고 계약일로부터 30일 이내 제출해야 한다는 점을 확인한다.
2단계: 매매대금과 지급 일정 정리 &nbsp; 계약서 기준으로 총 매매가격, 계약금, 중도금, 잔금, 각 지급일을 정리한다. 이 숫자가 자금조달계획서 전체의 기준이 된다.
예를 들어 5억 원 아파트라면 이렇게 정리할 수 있다.
구분 금액 총 매매대금 5억 원 계약금 5천만 원 중도금 0원 잔금 4억 5천만 원 이후 자금 출처를 적을 때 자기자금, 대출, 증여 등을 모두 합친 금액이 총 매매대금 5억 원과 맞아야 한다.
3단계: 자금 출처를 세 갈래로 나누기 &nbsp; 자금 출처는 크게 자기자금, 차입금, 기타 자금으로 나눠서 생각하면 된다.
구분 예시 자기자금 예금, 주식·채권 매각대금, 부동산 처분대금, 기존 전세보증금 차입금 주택담보대출, 신용대출, 가족·지인 차용 기타 자금 증여, 상속 등 중요한 건 돈의 성격을 정확히 구분하는 것이다. 부모님에게 받은 돈이 증여인지 차용인지 애매하게 적으면 나중에 문제가 될 수 있다. 증여라면 증여세 신고가 필요할 수 있고, 차용이라면 차용증과 이자 지급 내역이 필요할 수 있다.
4단계: 금액 합계와 표현 점검 &nbsp; 가장 흔한 실수는 합계 불일치다. 자금 출처를 모두 더한 금액이 계약서상 매매대금과 다르면 보완 요청을 받을 수 있다.
또 대출을 적을 때는 &ldquo;예정&quot;인지 &ldquo;확정&quot;인지도 구분해야 한다. 아직 은행 심사 중인데 확정된 대출처럼 쓰면 문제가 될 수 있다. 승인 전이면 예정, 승인 후라면 확정으로 현재 상태에 맞게 적는 것이 좋다.
5단계: 증빙서류 준비 &nbsp; 투기과열지구에서 주택을 취득하는 경우에는 자금조달계획서와 함께 증빙서류를 제출해야 한다. 비규제지역이라도 나중에 자금출처 소명 요청을 받을 수 있으니 서류는 미리 정리해두는 편이 좋다.
증빙서류는 무엇을 준비해야 할까 &nbsp; 증빙서류는 자금 출처에 따라 달라진다. 대부분의 거래에서 자주 쓰이는 서류는 아래와 같다.
자금 출처 대표 증빙서류 예금 잔고증명서, 예금잔액증명서, 계좌거래내역 주식·채권 매각대금 매도 내역, 증권계좌 거래내역 금융기관 대출 부채증명서, 금융거래확인서, 대출승인서 기존 부동산 처분대금 기존 매매계약서, 매각대금 입금내역 전세보증금 임대차계약서, 보증금 반환 입금내역 증여 증여계약서, 증여세 신고서, 이체내역 가족·지인 차용 차용증, 이자 지급 내역, 원리금 상환 계획 서류를 준비할 때는 단순히 잔고만 보여주는 것보다 돈이 어디서 들어왔는지 흐름이 설명되는 것이 좋다. 예를 들어 통장에 갑자기 큰돈이 들어왔다면 그 돈이 급여 저축인지, 주식 매도금인지, 부모님 증여인지 설명할 수 있어야 한다.
특히 현금 비중이 지나치게 크면 자금출처 소명 대상이 될 수 있다. 가능하면 금융기관 거래 내역으로 흐름이 남는 방식으로 정리하는 것이 안전하다.
자주 틀리는 실수 &nbsp; 자금조달계획서는 어려운 계산보다 기본 실수 때문에 반려되는 경우가 많다. 제출 전에 아래 항목을 꼭 확인하자.
실수 왜 문제일까 확인할 것 합계가 매매대금과 다름 계획서 반려 가능성 계약서상 매매대금과 1원까지 맞추기 취득세·중개수수료를 포함함 계획서 합계는 매매대금 기준 부대비용은 별도 자금계획으로 관리 대출 예정과 확정을 혼동 실제 조달 상태와 불일치 은행 승인 여부 확인 증여와 차용을 애매하게 적음 증여세·차용 소명 문제 증여계약서 또는 차용증 준비 공동명의인데 한 명만 작성 명의자별 제출 필요 각자 지분과 자금 출처 작성 증빙서류 누락 보완 요청 가능성 자금 출처별 서류 체크 공동명의라면 특히 주의해야 한다. 부부 공동명의로 집을 사는 경우 각자 자금조달계획서를 작성해야 한다. 두 사람의 자금 합계가 전체 거래금액과 맞아야 하고, 각자의 지분과 자금 출처도 자연스럽게 연결되어야 한다.
제출 방법과 실무 팁 &nbsp; 자금조달계획서는 부동산거래관리시스템에서 직접 작성해 제출할 수 있고, 관할 구청에 방문해서 제출할 수도 있다. 실무에서는 공인중개사가 부동산 거래 신고를 도와주면서 자금조달계획서 제출까지 안내하는 경우가 많다.
하지만 내용은 매수인이 직접 책임지고 확인해야 한다. 중개사가 대신 입력하더라도 돈의 출처를 가장 잘 아는 사람은 매수인이다.
작성 전에는 아래 순서로 준비하면 좋다.
계약서상 매매대금과 지급일을 정리한다. 내 예금, 대출, 증여, 차용 등 자금 출처를 나눈다. 각 항목별 증빙서류를 준비한다. 자기자금 + 차입금 + 기타 자금 합계가 매매대금과 같은지 확인한다. 가족에게 받은 돈은 증여인지 차용인지 먼저 결정한다. 제출 전 중개사나 관할 구청에 제출 대상과 증빙 필요 여부를 확인한다. 그리고 2026년 2월 10일부터는 부동산거래신고법 시행령 개정으로 중개 거래 신고 시 매매계약서 사본과 계약금 지급 증빙 첨부가 의무화된 것으로 안내되고 있다. 자금조달계획서만 챙길 것이 아니라, 계약금 이체 내역과 계약서 사본도 함께 준비하는 게 좋다.
정리 &nbsp; 자금조달계획서는 집을 살 돈이 어디서 나왔는지 설명하는 서류다. 어렵게 느껴지지만 구조는 단순하다. 매매대금을 기준으로 자기자금, 차입금, 증여·상속 같은 기타 자금을 나누고, 합계를 정확히 맞추면 된다.
핵심만 다시 정리하면 이렇다.
자금조달계획서의 정식 명칭은 주택취득자금 조달 및 입주계획서다. 규제지역은 금액과 관계없이 제출하고, 비규제지역은 6억 원 이상 주택 거래 시 제출한다. 제출 기한은 계약일로부터 30일 이내다. 자기자금, 차입금, 기타 자금 합계는 계약서상 매매대금과 같아야 한다. 투기과열지구에서는 증빙서류 제출도 필요하다. 공동명의자는 각자 작성해야 한다. 증여와 차용은 세금 처리가 다르므로 명확히 구분해야 한다. 자금조달계획서는 &ldquo;이 돈이 어디서 왔는가&quot;라는 질문에 답하는 문서다. 계약 전에 자금 흐름과 증빙서류를 미리 정리해두면 반려나 보완 요청을 줄일 수 있다.
자주 묻는 질문 &nbsp; 자금조달계획서에 취득세와 중개수수료도 넣어야 할까? &nbsp; 아니다. 자금조달계획서의 합계는 계약서상 매매대금과 맞추는 것이 핵심이다. 취득세, 중개수수료, 이사비, 인테리어 비용은 별도 부대비용으로 관리해야 한다.
부모님에게 받은 돈은 증여일까, 차용일까? &nbsp; 돈을 그냥 받은 것이라면 증여로 볼 수 있고, 갚기로 한 돈이라면 차용으로 볼 수 있다. 차용이라면 차용증, 이자 지급, 상환 계획이 필요할 수 있다. 증여라면 증여세 신고 여부를 확인해야 한다.
오피스텔도 자금조달계획서를 제출해야 할까? &nbsp; 일반적으로 자금조달계획서는 주택 취득에 대한 서류다. 오피스텔은 건축법상 업무시설로 분류되는 경우가 많아 제출 대상이 아닐 수 있다. 다만 실제 거래 유형과 지역에 따라 안내가 다를 수 있으니 관할 구청에 확인하는 것이 안전하다.`}).add({id:94,href:"/posts/gift-tax/",title:"자녀 증여세 - 면제 한도부터 신고, 절세 팁",description:"한국에서 자녀에게 재산을 증여할 때 적용되는 증여세 제도에 대해, 증여세 계산·공제, 신고 절차, 절세 팁까지 추가로 설명한다.",content:`증여세란? &nbsp; 증여세란 부모 등으로부터 재산을 선물받은 자녀(수증자) 가 부담하는 세금이다. 부모가 자녀에게 현금·부동산·주식 등을 주면 일정 금액을 초과한 부분에 대해 세금을 내야 한다.
직계존속 → 자녀 증여 시 공제(비과세) 한도 &nbsp; 기본 공제(10년 기준) &nbsp; 관계 공제 한도 (10년간) 부모가 미성년 자녀에게 20,000,000원 부모가 성년 자녀에게 50,000,000원 배우자 600,000,000원 ※ 동일한 증여자로부터 10년간 받은 금액을 합산한다.
예를 들면)
아이가 태어나자마자 2천만 원 증여 10년 후 또 2천만 원 증여 성인이 된 다음 5천만 원 증여 총 9천만 원까지 비과세 가능하다. 혼인·출산 관련 추가 공제(2024~2025년 적용) &nbsp; 기본 공제 외에 추가 공제 1억 원이 적용된다. 즉, 부모로부터 자녀가 결혼하거나 출산 관련으로 증여받는 경우 총 1억 5천만 원까지 비과세 가능. 양쪽 부모에게서 각각 받을 경우 최대 3억 원까지 가능하다. 증여세율 (과세표준 기준) &nbsp; 증여세는 낸다 → 증여세 과세표준에 누진세율을 적용한다.
과세표준 (수증자가 받은 증여재산 – 공제액) 세율 1억원 이하 10% 1억 ~ 5억원 20% 5억 ~ 10억원 30% 10억 ~ 30억원 40% 30억원 초과 50% 신고 및 납부 &nbsp; 신고기간 &nbsp; 증여일이 속하는 달의 말일부터 3개월 이내에 신고 및 납부해야 한다. 예) 9월 10일 증여 → 12월 31일까지 신고해야 함. 신고자 &nbsp; 수증자(자녀)가 증여세 신고해야 한다. 신고 방법 &nbsp; 국세청 홈택스 또는 세무서 방문 신고 가능. 현금 증여의 경우 간편 신고도 활용 가능. ⚠ 신고 안 하면 가산세나 불이익이 붙을 수 있다.
세대 생략 증여(조부모 → 손자·손녀) &nbsp; 부모 세대를 건너뛰고 조부모가 손자·손녀에게 증여하는 경우 세대 생략증여세가 적용되어, 기본 증여세 외에 30% 할증 세금을 추가로 부담하게 된다. 평상시 용돈·생활비는 과세 대상이 아니다 &nbsp; 일반적인 생활비·용돈·교육비로 통상 사용되는 금액은 증여세 대상이 아니다. 하지만, 누적 금액이 공제 한도를 넘거나 주택 자금 등 자산 형성 목적이라 판단되면 과세될 수 있으니 주의해야 한다. 추가로 알아두면 좋은 팁 &nbsp; 10년 단위 활용 전략 &nbsp; 공제 한도는 10년 기준으로 합산되므로, 큰 금액을 한 번에 주는 것보다 10년 주기로 나눠주는 전략이 세금 부담을 줄일 수 있다.
산 가치 상승 전 증여 &nbsp; 미래에 가치 상승이 예상되는 자산(부동산·주식 등)은 미리 자녀에게 증여하면, 자산 가치 상승분까지 자녀가 받게 되어 장기적으로 절세 효과가 생길 수 있다.
신고해 두는 것이 유리할 때 &nbsp; 공제 범위 내라서 세금을 내지 않더라도 신고를 해두면 나중에 증여 시점과 금액에 대해 명확하게 증빙이 남아 향후 과세 리스크를 줄일 수 있다.
최신 세법 개정 동향 (참고) &nbsp; 최근 정부는 증여세·상속세 제도 전반 개편 논의를 진행하고 있다. 예컨대 공제 한도를 상향하거나 신고 기준 등을 조정하려는 움직임이 있으니, 정책 변화에 주기적으로 주의하는 것이 좋다.
정리 &nbsp; 자녀에게 재산을 증여할 때 일정 금액까지는 공제(비과세) 가 된다. 공제 한도는 10년 기준이며, 혼인·출산 등 추가 공제를 활용하면 더 큰 금액까지 비과세가 가능하다. 과세표준에 따라 증여세가 누진세율로 부과된다. 신고를 잘 지키고 절세 전략을 세우는 것이 중요하다.`}).add({id:95,href:"/posts/long-term-repair-reserve-refund/",title:"장기수선충당금 반환, 세입자 퇴거 때 집주인이 돌려줘야...",description:"아파트와 오피스텔 세입자가 관리비로 낸 장기수선충당금을 퇴거할 때 집주인에게 돌려받을 수 있는지, 확인서 발급과 특약 예외까지 정리했다.",content:`아파트나 오피스텔에 살다 보면 관리비 고지서에 &ldquo;장기수선충당금&quot;이라는 항목이 붙어 있는 경우가 있다. 매달 몇천 원에서 몇만 원 정도라 그냥 관리비라고 생각하고 넘기기 쉽다. 그런데 세입자라면 이 돈을 퇴거할 때 돌려받을 수 있는지 꼭 확인해야 한다.
장기수선충당금은 이름 그대로 건물을 오래 쓰기 위해 미리 모아두는 수선비다. 승강기 교체, 외벽 도장, 옥상 방수, 배관 보수처럼 큰돈이 들어가는 공사를 대비하기 위한 돈이다. 문제는 관리비 고지서에는 세입자에게 같이 청구되지만, 법적으로는 원칙적으로 소유자가 부담해야 하는 성격의 돈이라는 점이다.
이 글에서는 장기수선충당금이 무엇인지, 세입자가 퇴거할 때 어떻게 돌려받는지, 집주인이 돌려주지 않아도 되는 예외가 있는지 초보자 기준으로 정리하였다.
장기수선충당금은 건물의 큰 수리를 위해 모으는 돈이다 &nbsp; 장기수선충당금은 아파트의 주요 시설을 교체하거나 보수하기 위해 장기수선계획에 따라 적립하는 비용이다. 일반적인 청소비, 경비비, 전기료처럼 매달 쓰고 끝나는 관리비와는 성격이 다르다.
예를 들어 이런 공사에 쓰일 수 있다.
오래된 승강기 교체 외벽 도장과 균열 보수 옥상 방수 공사 급수관, 배수관 같은 배관 보수 지하주차장, 공용 전기설비 등 주요 시설 보수 건물은 시간이 지나면 반드시 낡는다. 그때마다 갑자기 수백만 원, 수천만 원을 한 번에 걷으면 소유자 부담이 커진다. 그래서 장기수선계획을 세우고 매달 조금씩 돈을 쌓아두는 방식으로 운영한다.
공동주택관리법령에 따르면 관리주체는 장기수선계획에 따라 장기수선충당금을 주택 소유자로부터 징수해 적립해야 한다. 월별 금액은 장기수선계획기간 중 필요한 수선비 총액, 총공급면적, 계획기간, 세대별 공급면적 등을 기준으로 계산된다.
생활법령 장기수선충당금 내용 확인 &nbsp; 원칙적으로 부담자는 세입자가 아니라 집주인이다 &nbsp; 장기수선충당금에서 가장 중요한 부분은 부담 주체다. 장기수선충당금은 건물의 주요 시설을 고치기 위해 모으는 돈이므로 원칙적으로 집주인, 즉 소유자가 부담해야 한다.
세입자가 실제로 거주하고 있더라도 건물의 가치 유지와 관련된 비용은 소유자 부담으로 보는 것이 자연스럽다. 법령도 이 취지를 반영하고 있다. 공동주택관리법 시행령은 사용자가 장기수선충당금을 대신 납부한 경우 소유자가 그 금액을 반환해야 한다고 정하고 있다. 여기서 사용자는 아파트를 임차해 사용하는 사람, 즉 일반적인 세입자를 생각하면 된다.
그런데 실제 현장에서는 세입자가 매달 먼저 내는 경우가 많다. 관리사무소가 관리비 고지서에 장기수선충당금을 함께 넣어 청구하기 때문이다. 관리비는 보통 현재 거주자가 납부하므로 세입자가 관리비와 함께 장기수선충당금까지 내게 된다.
이 구조 때문에 &ldquo;내가 관리비로 냈으니 내 부담인가?&ldquo;라고 오해하기 쉽다. 하지만 대신 낸 돈이라면 퇴거할 때 집주인에게 반환을 요구할 수 있다.
세입자는 퇴거할 때 납부확인서를 받아 정산하면 된다 &nbsp; 세입자가 장기수선충당금을 돌려받는 절차는 복잡하지 않다. 핵심은 본인이 얼마를 냈는지 확인할 수 있는 자료를 확보하는 것이다.
보통은 퇴거 전에 관리사무소에 &ldquo;장기수선충당금 납부확인서&rdquo; 발급을 요청한다. 공동주택관리법 시행령상 관리주체는 사용자가 납부 확인을 요구하면 지체 없이 확인서를 발급해야 한다. 확인서에는 거주 기간 동안 납부한 장기수선충당금 내역이 정리된다.
퇴거 정산은 대체로 이런 순서로 진행하면 된다.
관리사무소에 장기수선충당금 납부확인서를 요청한다. 확인서에 적힌 납부 기간과 금액을 확인한다. 임대인에게 확인서를 전달하고 반환을 요청한다. 보증금 정산일이나 퇴거일에 함께 정산한다. 예를 들어 세입자가 2년 동안 매달 12,000원씩 장기수선충당금을 냈다면 총 288,000원을 돌려받는 식이다. 중간에 금액이 바뀌었다면 확인서에 적힌 실제 납부액을 기준으로 보면 된다.
이사를 앞두고 정신이 없으면 이 항목을 놓치기 쉽다. 특히 보증금, 중개보수, 이사비, 공과금 정산에 신경 쓰다 보면 장기수선충당금은 뒤로 밀린다. 하지만 몇 년 거주했다면 금액이 생각보다 커질 수 있으니 퇴거 체크리스트에 넣어두는 것이 좋다.
오피스텔도 관리비 고지서를 먼저 확인해야 한다 &nbsp; 장기수선충당금은 아파트에서 자주 보이지만, 일부 주거용 오피스텔에서도 부과된다. 오피스텔이라고 해서 무조건 없는 것도 아니고, 무조건 있는 것도 아니다. 가장 빠른 확인 방법은 관리비 고지서를 보는 것이다.
고지서에 &ldquo;장기수선충당금&rdquo;, &ldquo;수선충당금&rdquo;, &ldquo;장충금&quot;처럼 표시된 항목이 있다면 관리사무소에 정확한 성격을 물어보는 것이 좋다. 명칭이 조금씩 다르게 적히는 경우도 있기 때문이다.
세입자 입장에서는 아래 세 가지를 확인하면 된다.
관리비 고지서에 장기수선충당금 항목이 있는지 임대차계약서 특약에 누가 부담한다고 되어 있는지 퇴거 시 관리사무소에서 납부확인서를 발급받을 수 있는지 오피스텔은 주거용, 업무용, 집합건물 관리 방식이 섞여 있어 현장마다 운영이 다를 수 있다. 그래도 세입자가 소유자 부담 성격의 비용을 대신 냈다면, 계약서와 실제 부과 내역을 근거로 정산을 요청해볼 수 있다.
특약이 있으면 반환 여부가 달라질 수 있다 &nbsp; 원칙은 세입자가 대신 낸 장기수선충당금을 집주인이 돌려주는 것이다. 다만 임대차계약서에 별도 특약이 있는 경우에는 판단이 달라질 수 있다.
예를 들어 계약서 특약란에 &ldquo;장기수선충당금은 임차인이 부담한다&quot;는 문구가 명확하게 들어가 있고, 임대인과 임차인이 그 조건에 합의했다면 집주인이 반환하지 않아도 된다고 해석될 여지가 있다. 장기수선충당금 반환 규정은 당사자 합의로 다르게 정할 수 있는 임의규정으로 보는 견해가 많기 때문이다.
그래서 세입자는 계약 전에 관리비 항목과 특약을 함께 봐야 한다. 월세나 보증금만 보고 계약했다가 나중에 &ldquo;장기수선충당금은 세입자 부담&quot;이라는 문구를 발견하면 정산 과정에서 다툼이 생길 수 있다.
임대인도 마찬가지다. 장기수선충당금을 세입자 부담으로 정하고 싶다면 계약서에 분명하게 적어야 한다. 구두로만 이야기하거나 애매하게 &ldquo;관리비 일체 임차인 부담&rdquo; 정도로 적어두면 나중에 해석이 갈릴 수 있다.
다만 특약이 있다고 해서 모든 분쟁이 자동으로 끝나는 것은 아니다. 특약 문구, 설명 여부, 계약 경위, 실제 관리비 항목에 따라 다툼이 생길 수 있으므로 금액이 크거나 의견 차이가 크다면 법률 상담을 받아보는 편이 안전하다.
돌려받지 못했다면 어떻게 대응할까 &nbsp; 퇴거할 때 장기수선충당금을 깜빡하고 지나갔다고 해서 바로 포기할 필요는 없다. 일반적으로 장기수선충당금 반환채권은 민사상 금전채권으로 보아 일정 기간 청구할 수 있다. 실무에서는 계약 종료 후 상당 기간이 지나서도 확인서와 납부 내역을 근거로 반환을 요구하는 경우가 있다.
우선은 관리사무소에서 납부확인서를 발급받고, 임대인에게 문자나 이메일처럼 기록이 남는 방식으로 정산을 요청하는 것이 좋다. 이때 감정적으로 말하기보다 &ldquo;거주 기간 동안 납부한 장기수선충당금 확인서를 첨부하니 반환 정산을 요청한다&quot;는 식으로 간단히 쓰면 된다.
임대인이 계속 거절한다면 내용증명, 지급명령, 소액사건 청구 같은 방법을 검토할 수 있다. 다만 실제 진행 전에는 금액, 계약서 특약, 증빙자료를 먼저 정리해야 한다. 몇만 원 단위라면 대화로 정리하는 것이 낫고, 금액이 크거나 원칙을 분명히 해야 하는 상황이라면 공식 절차를 생각해볼 수 있다.
집주인이 중간에 바뀐 경우도 있다. 매매로 임대인이 변경되었다면 임대차 관계와 정산 의무가 새 소유자에게 이어지는지, 이전 소유자와 새 소유자 사이에서 어떻게 정리되었는지 따져봐야 한다. 이런 경우에는 계약서, 매매 시점, 임대인 변경 통지 내용까지 함께 확인하는 것이 좋다.
핵심 정리 &nbsp; 장기수선충당금은 단순한 생활 관리비가 아니라 건물의 주요 시설을 장기적으로 보수하기 위해 적립하는 돈이다. 그래서 원칙적으로 소유자가 부담하고, 세입자가 관리비와 함께 대신 냈다면 퇴거할 때 집주인에게 반환을 요청할 수 있다.
세입자라면 이사 전 관리사무소에서 장기수선충당금 납부확인서를 발급받아야 한다. 임대인이라면 세입자가 납부한 금액을 보증금 정산과 함께 처리하는 것이 깔끔하다. 계약서에 별도 특약이 있다면 그 문구도 반드시 확인해야 한다.
퇴거 정산에서 큰돈만 신경 쓰다 보면 작은 항목을 놓치기 쉽다. 하지만 장기수선충당금은 거주 기간이 길수록 금액이 커진다. 이사 전 관리비 고지서와 계약서 특약, 납부확인서 세 가지를 확인해두면 불필요한 분쟁을 줄일 수 있다.
자주 묻는 질문 &nbsp; 장기수선충당금은 관리비 아닌가? &nbsp; 관리비 고지서에 같이 나오지만 성격은 일반 관리비와 다르다. 청소비, 경비비처럼 현재 거주 편의를 위해 쓰는 비용이 아니라 건물의 주요 시설을 장기적으로 고치기 위해 적립하는 돈이다. 그래서 원칙적으로 소유자 부담으로 본다.
세입자가 매달 냈는데 꼭 퇴거할 때만 받을 수 있나? &nbsp; 실무에서는 퇴거 시점에 한 번에 정산하는 경우가 많다. 매달 임대인에게 따로 청구하는 방식도 이론상 가능하지만 번거롭기 때문에, 보통 관리사무소의 납부확인서를 받아 보증금 정산과 함께 처리한다.
계약서에 세입자 부담이라고 적혀 있으면 못 돌려받나? &nbsp; 명확한 특약이 있다면 반환받기 어려울 수 있다. 다만 문구가 애매하거나 충분히 설명되지 않았거나 다른 사정이 있다면 다툼의 여지가 생길 수 있다. 계약 전 특약란을 확인하고, 이미 분쟁이 생겼다면 계약서와 고지서를 가지고 상담을 받아보는 것이 좋다.
관리사무소가 납부확인서를 안 주면 어떻게 하나? &nbsp; 아파트 사용자가 장기수선충당금 납부 확인을 요구하면 관리주체는 지체 없이 확인서를 발급해야 한다. 먼저 관리사무소에 정식으로 요청하고, 필요하면 요청 날짜와 담당자, 답변 내용을 기록해두는 것이 좋다.`}).add({id:96,href:"/posts/reconstruction-redevelopment-difference/",title:"재건축 재개발 차이, 분담금과 이주비 절차까지 쉽게 정리",description:"재건축과 재개발의 차이, 사업 절차, 조합원 요건, 분담금과 부담금, 이주비와 주거이전비까지 초보자 기준으로 쉽게 정리했다.",content:`부동산 뉴스를 보다 보면 재건축과 재개발이라는 말이 자주 나온다. 둘 다 오래된 주거 환경을 새롭게 바꾸는 사업이라 비슷해 보이지만, 실제로는 대상과 절차, 돈이 들어가는 방식이 꽤 다르다.
특히 집을 사려는 사람이 &ldquo;재건축 기대감&rdquo;, &ldquo;재개발 구역&rdquo;, &ldquo;조합원 입주권&rdquo; 같은 표현만 보고 접근하면 놓치기 쉬운 부분이 많다. 새 아파트가 생긴다는 장점만 보이고, 분담금이나 이주비, 사업 지연 같은 부담은 뒤늦게 보일 수 있기 때문이다.
재건축은 주로 낡은 아파트 단지를 다시 짓는 사업이고, 재개발은 낡은 주택과 상가가 모인 동네 전체를 정비하는 사업이다. 이 차이만 알아도 기사나 매물 설명을 훨씬 현실적으로 읽을 수 있다.
재건축과 재개발의 핵심 차이 &nbsp; 재건축은 이미 도로, 학교, 상하수도 같은 기반시설이 어느 정도 갖춰진 아파트 단지를 새로 짓는 사업이다. 건물 자체가 오래됐거나 주거 환경이 낡아졌을 때 기존 건물을 철거하고 새 아파트를 짓는 방식이다.
반면 재개발은 낡은 주택, 빌라, 상가, 좁은 도로 등이 섞여 있는 지역을 통째로 정비하는 사업에 가깝다. 건물만 바꾸는 것이 아니라 도로, 공원, 기반시설까지 함께 정비하는 경우가 많다. 그래서 재개발은 재건축보다 공공성이 크고, 사업 범위도 넓은 편이다.
쉽게 말하면 재건축은 &ldquo;낡은 아파트 단지를 새 아파트로 바꾸는 일&quot;에 가깝고, 재개발은 &ldquo;낡은 동네를 새 주거지로 다시 만드는 일&quot;에 가깝다.
한눈에 보는 차이 &nbsp; 구분 재건축 재개발 주요 대상 오래된 아파트 단지 노후 주택, 상가, 기반시설이 낡은 지역 사업 성격 민간 주도 성격이 강함 공공성, 도시정비 성격이 강함 안전진단 일반적으로 중요함 보통 안전진단 절차가 없음 정비 범위 건물 중심 건물과 도로, 공원 등 지역 기반시설 포함 조합원 요건 보통 토지와 건물을 함께 소유 토지 또는 건축물 소유로 판단하는 경우가 많음 이 차이 때문에 같은 &ldquo;새 아파트가 들어선다&quot;는 이야기라도 투자 판단은 달라진다. 재건축은 기존 아파트 소유자의 이해관계가 중요하고, 재개발은 구역 안의 토지, 건물, 세입자, 상가, 공공시설 문제가 더 복잡하게 얽힌다.
재건축 절차는 어떻게 진행될까 &nbsp; 재건축은 보통 정비구역 지정, 안전진단, 조합 설립 인가, 사업 시행 인가, 관리처분 인가, 이주와 철거, 착공 순서로 진행된다. 실제 현장에서는 각 단계마다 주민 동의, 지자체 심의, 시공사 선정, 분양 계획 조정이 붙기 때문에 시간이 오래 걸릴 수 있다.
정비구역 지정 &nbsp; 정비구역 지정은 해당 지역에서 정비사업을 추진할 수 있도록 행정적으로 구역을 정하는 단계다. 지자체가 정비계획을 세우고 주민 의견을 듣는 과정을 거친 뒤 구역 지정 여부를 고시한다.
이 단계가 있어야 본격적인 사업 추진의 틀이 잡힌다. 다만 정비구역으로 지정됐다고 해서 곧바로 새 아파트가 지어지는 것은 아니다. 이후 동의율, 사업성, 공사비, 인허가 과정이 계속 남아 있다.
안전진단 &nbsp; 재건축에서 안전진단은 오래된 아파트가 재건축을 할 만큼 노후했는지 판단하는 절차다. 구조 안전성만 보는 것이 아니라 주거 환경, 설비 노후도, 보수 비용 등을 함께 본다.
최근에는 지은 지 30년이 넘은 아파트의 경우 안전진단을 사업 초반의 절대 관문처럼 두기보다, 사업 시행 인가 전까지 받도록 하는 식의 규제 완화 흐름이 있다. 다만 구체적인 적용은 법령과 지자체 기준에 따라 달라질 수 있으므로 실제 단지는 최신 고시와 조합 안내를 확인해야 한다.
조합 설립과 사업 시행 인가 &nbsp; 조합은 재건축을 실제로 추진하는 주체다. 조합이 설립되면 시공사 선정, 사업비 조달, 조합원 분양 계획, 일반분양 계획 같은 실무를 진행한다. 재건축 조합 설립에는 토지와 건물 소유자의 동의율이 중요하고, 단지 안의 동별 동의 요건도 함께 따지는 경우가 있다.
사업 시행 인가는 조합이 세운 건축계획과 자금계획을 지자체가 허가하는 단계다. 이때부터 사업의 윤곽이 훨씬 구체화된다. 새 아파트 규모, 조합원 분양, 일반분양, 공공기여, 사업비 구조가 실제 숫자로 정리되기 시작한다.
관리처분 인가와 착공 &nbsp; 관리처분 인가는 조합원에게 새 아파트나 대지를 어떻게 나눠줄지 정하는 절차다. 조합원 분양가, 추가 분담금, 권리가액, 이주 일정 등이 이 단계에서 중요한 쟁점이 된다.
관리처분 인가 이후에는 이주, 철거, 착공으로 이어진다. 이때부터는 기존 집에서 나가야 하므로 이주비 대출, 임시 거주지, 대출 이자 부담 등을 현실적으로 계산해야 한다.
재개발 절차와 조합원 요건 &nbsp; 재개발 절차도 큰 흐름은 재건축과 비슷하다. 정비구역 지정, 조합 설립 인가, 사업 시행 인가, 관리처분 인가, 이주와 철거, 착공 순서로 진행된다. 다만 재개발은 동네 전체를 정비하는 성격이 강해서 이해관계가 더 넓다.
가령 단독주택, 다가구주택, 상가, 토지, 세입자가 한 구역 안에 섞여 있을 수 있다. 도로를 넓히거나 공원을 만들고, 공공시설을 정비하는 문제도 함께 따라온다. 그래서 재개발은 사업성이 좋아 보여도 동의율, 보상, 이주, 상가 권리 문제에서 시간이 길어질 수 있다.
재개발에는 보통 안전진단이 없다 &nbsp; 재개발은 낡은 건물 하나하나의 구조 안전성보다 지역 전체의 주거 환경과 기반시설 노후도를 본다. 그래서 재건축처럼 안전진단 통과가 핵심 관문으로 등장하지 않는 경우가 많다.
이 부분이 재건축과 재개발을 구분하는 대표적인 포인트다. 기사에서 &ldquo;안전진단&quot;이 주요 쟁점으로 나오면 대체로 재건축 이야기일 가능성이 높고, &ldquo;구역 지정&rdquo;, &ldquo;토지등소유자 동의&rdquo;, &ldquo;세입자 보상&rdquo;, &ldquo;주거이전비&quot;가 많이 나오면 재개발일 가능성이 높다.
재개발 조합원은 어떻게 정해질까 &nbsp; 재개발 조합원은 보통 정비구역 안의 토지나 건축물을 소유한 사람을 기준으로 판단한다. 재건축은 토지와 건물을 함께 소유해야 하는 구조가 많지만, 재개발은 토지 또는 건축물 소유 여부가 중요하게 다뤄진다.
다만 조합원 자격은 권리산정기준일, 지분 쪼개기 제한, 무허가 건축물 여부, 여러 부동산을 가진 경우의 분양 자격 등 세부 조건이 복잡하다. 재개발 구역의 빌라나 단독주택을 매수할 때는 &ldquo;구역 안에 있다&quot;는 말만 믿지 말고, 조합원 분양 자격이 실제로 있는지 확인해야 한다.
분담금, 부담금, 이주비를 구분해야 한다 &nbsp; 재건축과 재개발을 볼 때 가장 헷갈리는 부분이 돈이다. 분담금, 부담금, 이주비, 주거이전비라는 말이 비슷하게 들리지만 성격이 다르다.
분담금은 조합원이 추가로 내는 돈이다 &nbsp; 분담금은 정비사업에 들어간 비용을 조합원이 나눠 부담하는 돈이다. 새 아파트를 짓는 데 들어간 공사비, 금융비용, 철거비, 용역비 등 전체 사업비에서 일반분양 수입과 기존 권리가액 등을 반영한 뒤 부족한 금액이 생기면 조합원이 추가로 부담한다.
예를 들어 기존 집의 권리가액보다 새 아파트 조합원 분양가가 높다면 차액을 내야 할 수 있다. 최근에는 공사비와 금융비용이 많이 올라 분담금이 커지는 사례가 많다. 그래서 정비사업 매물을 볼 때는 &ldquo;입지가 좋다&quot;보다 &ldquo;추가 분담금이 어느 정도일까&quot;를 먼저 따져야 한다.
재건축 부담금은 초과이익 환수와 관련 있다 &nbsp; 재건축 부담금은 일반적인 분담금과 다르다. 재건축으로 조합원이 얻는 이익이 일정 기준을 넘을 때 재건축 초과이익 환수제에 따라 부과될 수 있는 금액이다.
분담금은 사업비를 메우기 위해 조합원에게 필요한 돈이고, 부담금은 재건축으로 얻은 초과이익 일부를 환수하는 성격이다. 이름이 비슷해서 헷갈리지만 돈의 목적이 다르다.
이주비는 빌리는 돈에 가깝다 &nbsp; 이주비는 철거와 공사 기간 동안 조합원이 임시로 살 집을 마련할 수 있도록 조합이 금융기관과 연계해 지원하는 자금이다. 일반적으로 대출 성격이 강하므로 나중에 갚아야 한다.
이주비가 나온다고 해서 공짜 지원금으로 생각하면 안 된다. 대출 한도, 이자 부담, 기존 주택담보대출과의 관계, 규제지역 여부에 따라 실제 받을 수 있는 금액이 달라질 수 있다.
주거이전비는 재개발에서 자주 나온다 &nbsp; 주거이전비는 재개발 등 공익성이 있는 정비사업으로 이주해야 하는 거주자에게 지급되는 보상 성격의 돈이다. 세입자나 실제 거주 요건이 있는 소유자가 대상이 될 수 있고, 거주 기간이나 건축물의 적법성 같은 조건을 따진다.
재건축에서는 보통 주거이전비가 핵심으로 다뤄지지 않는다. 반면 재개발은 기존 주민과 세입자의 생활 터전이 바뀌는 일이어서 주거이전비, 이사비, 보상 문제가 자주 등장한다.
정비사업 매물을 볼 때 확인할 것 &nbsp; 재건축이나 재개발 매물은 &ldquo;새 아파트를 받을 수 있다&quot;는 기대 때문에 가격이 먼저 움직이는 경우가 많다. 하지만 실제 수익은 사업 속도와 추가 비용에 크게 좌우된다.
첫째, 현재 단계가 어디인지 확인해야 한다. 정비구역 지정 전인지, 조합 설립이 됐는지, 사업 시행 인가를 받았는지, 관리처분 인가까지 갔는지에 따라 위험도가 다르다. 초기 단계일수록 기대감은 크지만 시간이 길고 변수도 많다.
둘째, 조합원 자격과 권리가액을 확인해야 한다. 특히 재개발은 물건마다 권리관계가 다를 수 있다. 지분이 너무 작거나, 권리산정기준일 이후 쪼개진 물건이거나, 무허가 건축물과 관련된 물건이면 생각한 것과 다른 결과가 나올 수 있다.
셋째, 분담금과 이주 비용을 보수적으로 봐야 한다. 공사비가 오르면 조합원 분양가와 추가 분담금이 늘어날 수 있다. 이주 기간이 길어지면 임시 거주 비용과 대출 이자도 부담이 된다.
넷째, 조합 자료와 지자체 자료를 함께 봐야 한다. 조합 설명만 듣고 판단하기보다 정비사업 정보 공개 시스템, 지자체 고시, 총회 자료, 감정평가 관련 안내를 같이 확인하는 편이 좋다.
정리 &nbsp; 재건축과 재개발은 모두 낡은 주거지를 새롭게 만드는 정비사업이지만 출발점이 다르다. 재건축은 오래된 아파트 단지를 다시 짓는 사업이고, 재개발은 낡은 동네 전체를 정비하는 사업이다.
재건축은 안전진단, 조합 설립, 관리처분, 재건축 부담금 같은 이슈가 중요하다. 재개발은 구역 지정, 조합원 자격, 세입자 보상, 주거이전비, 기반시설 정비 문제가 더 크게 작용한다.
둘 다 새 아파트 기대감만 보고 접근하면 위험하다. 정비사업은 시간이 길고, 중간에 공사비와 금융비용이 바뀌며, 조합원 분담금이 달라질 수 있다. 관심 있는 매물이 있다면 현재 사업 단계, 조합원 자격, 예상 분담금, 이주비 조건을 먼저 확인하는 것이 좋다.
자주 묻는 질문 &nbsp; 재건축과 재개발 중 어느 쪽이 더 빠른가? &nbsp; 일반적으로 어느 쪽이 무조건 빠르다고 말하기 어렵다. 재건축은 아파트 소유자 중심이라 이해관계가 단순해 보일 수 있지만 안전진단, 공사비, 초과이익 환수 같은 변수가 있다. 재개발은 구역이 넓고 권리관계가 복잡해 동의와 보상 과정에서 시간이 길어질 수 있다.
재건축 분담금은 언제 확정되나? &nbsp; 대략적인 금액은 사업 중간에도 추정할 수 있지만, 실제 부담은 관리처분계획과 이후 공사비 변동에 따라 달라질 수 있다. 그래서 초기 홍보자료의 예상 분담금만 믿기보다 최근 총회 자료와 공사비 변경 여부를 확인해야 한다.
이주비는 받으면 갚지 않아도 되는 돈인가? &nbsp; 아니다. 이주비는 보통 조합과 금융기관이 연계해 제공하는 대출 성격의 자금이다. 입주 시점이나 정산 시점에 갚아야 하며, 이자 부담이 생길 수 있다.
재개발 구역 주택을 사면 무조건 새 아파트를 받을 수 있나? &nbsp; 무조건은 아니다. 조합원 분양 자격은 권리산정기준일, 소유 형태, 지분, 건축물 상태, 구역별 기준에 따라 달라진다. 매수 전에는 공인중개사 설명뿐 아니라 조합, 지자체, 전문가 확인을 함께 거치는 것이 안전하다.`}).add({id:97,href:"/posts/property-tax-payment-guide/",title:"재산세 납부기간과 계산법 총정리: 7월·9월 언제, 어...",description:"주택 재산세를 언제 내는지, 7월과 9월에 왜 나눠 내는지, 세율과 계산법, 위택스 납부 방법, 매매 시 주의사항까지 쉽게 정리했다.",content:`주택을 매매하고 나면 취득세만 내고 끝나는 줄 알기 쉽다. 그런데 집을 보유하고 있으면 매년 재산세 고지서가 온다. 특히 주택 재산세는 보통 7월과 9월에 나눠 나오기 때문에, 처음 집을 산 사람은 &ldquo;왜 두 번이나 내지?&rdquo; 하고 헷갈릴 수 있다.
재산세는 집을 팔아서 돈을 벌었을 때 내는 세금이 아니다. 매년 6월 1일 기준으로 재산을 보유하고 있으면 내는 지방세 다. 그래서 집을 실제로 사용하고 있는지, 월세를 받고 있는지와 관계없이 과세 기준일에 소유자라면 납부 대상이 될 수 있다.
이 글에서는 주택 재산세를 언제 내는지, 얼마를 내는지, 어떻게 계산하는지, 위택스나 은행에서 어떻게 납부하는지 누구나 이해하기 쉽게 정리하였다.
재산세는 언제 내는가 &nbsp; 재산세에서 가장 중요한 날짜는 두 가지다. 하나는 과세기준일인 6월 1일이고, 다른 하나는 납부기간인 7월과 9월이다.
과세기준일은 매년 6월 1일 이다. 이 날짜에 주택, 건축물, 토지 등을 소유한 사람이 그해 재산세 납세의무자가 된다.
납부기간은 재산 종류에 따라 다르다.
구분 납부기간 대상 7월 7월 16일 ~ 7월 31일 주택분 재산세 1/2, 건축물, 선박, 항공기 9월 9월 16일 ~ 9월 30일 주택분 재산세 1/2, 토지 주택은 1년치 재산세를 7월과 9월에 반씩 나눠 낸다. 그래서 아파트나 단독주택을 갖고 있다면 보통 7월에 한 번, 9월에 한 번 고지서가 온다.
다만 주택분 재산세가 일정 금액 이하라면 7월에 한 번에 부과될 수 있다. 지방세법에는 해당 연도에 부과할 세액이 20만 원 이하인 경우 조례에 따라 7월에 한꺼번에 부과·징수할 수 있다는 규정이 있다. 그래서 어떤 집은 9월 고지서가 따로 오지 않을 수 있다.
매매했다면 6월 1일을 꼭 봐야 한다 &nbsp; 재산세는 &ldquo;그 집을 몇 달 살았는지&quot;로 나눠 계산하지 않는다. 핵심은 6월 1일 현재 소유자가 누구냐이다.
예를 들어 5월 31일에 잔금을 치르고 소유권이 넘어갔다면, 그해 재산세는 새 소유자에게 부과될 가능성이 높다. 반대로 6월 2일에 잔금을 치르고 소유권이 넘어갔다면, 그해 재산세는 6월 1일 기준 소유자였던 기존 집주인에게 부과될 수 있다.
그래서 집을 사고팔 때는 계약일보다 잔금일과 소유권 이전 시점 이 더 중요하다. 매매계약서에서 재산세를 어떻게 정산할지 별도로 정할 수도 있지만, 지방자치단체가 고지하는 기준은 6월 1일 소유자다.
부동산 매매를 할 때는 이런 식으로 확인하는 게 좋다.
6월 1일 전에 잔금을 치르는지 6월 1일 이후에 잔금을 치르는지 매도자와 매수자가 재산세를 일할 계산해 정산하기로 했는지 계약서 특약에 재산세 정산 내용이 들어갔는지 재산세 자체가 엄청 큰 금액이 아니라고 생각할 수 있지만, 공시가격이 높은 주택은 몇십만 원에서 몇백만 원 차이가 날 수 있다. 잔금일이 5월 말이나 6월 초라면 꼭 확인해야 한다.
재산세는 얼마를 내야 할까 &nbsp; 재산세는 실거래가가 아니라 공시가격을 기준으로 계산한다. 내가 8억 원에 집을 샀다고 해서 8억 원 전체에 바로 세율을 곱하는 구조가 아니다.
기본 흐름은 이렇게 보면 된다.
공시가격 × 공정시장가액비율 = 과세표준
과세표준 × 재산세율 = 재산세 본세
재산세 본세 + 도시지역분 + 지방교육세 = 최종 납부액
공시가격은 정부가 매년 공시하는 주택 가격이고, 공정시장가액비율은 공시가격 중 세금 계산에 반영하는 비율이다. 일반적으로 주택 재산세는 공시가격에 공정시장가액비율을 곱해 과세표준을 만든 뒤 세율을 적용한다.
주택 재산세 기본 세율은 과세표준 구간별로 달라진다.
과세표준 세율 6,000만 원 이하 0.1% 6,000만 원 초과 ~ 1억 5,000만 원 이하 6만 원 + 6,000만 원 초과금액의 0.15% 1억 5,000만 원 초과 ~ 3억 원 이하 19만 5천 원 + 1억 5,000만 원 초과금액의 0.25% 3억 원 초과 57만 원 + 3억 원 초과금액의 0.4% 여기에 추가로 붙는 항목도 있다.
도시지역분: 과세표준의 0.14% 지방교육세: 재산세 본세의 20% 그래서 고지서에 찍힌 금액을 보면 &ldquo;재산세&quot;만 있는 게 아니라 도시지역분, 지방교육세가 같이 보일 수 있다. 실제 납부액은 이 항목들을 더한 금액이다.
간단한 계산 예시 &nbsp; 예를 들어 공시가격이 5억 원인 주택이 있다고 해보자. 설명을 쉽게 하기 위해 공정시장가액비율을 60%로 가정하면 과세표준은 3억 원이다.
5억 원 × 60% = 3억 원
과세표준 3억 원은 재산세율 표에서 &ldquo;1억 5,000만 원 초과 ~ 3억 원 이하&rdquo; 구간에 해당한다.
재산세 본세는 다음처럼 계산할 수 있다.
19만 5천 원 + (3억 원 - 1억 5,000만 원) × 0.25%
19만 5천 원 + 37만 5천 원 = 57만 원
여기에 도시지역분과 지방교육세를 더한다.
도시지역분: 3억 원 × 0.14% = 42만 원 지방교육세: 57만 원 × 20% = 11만 4천 원 합계: 57만 원 + 42만 원 + 11만 4천 원 = 110만 4천 원 이 예시는 구조를 이해하기 위한 단순 계산이다. 실제 세액은 1세대 1주택 특례, 공정시장가액비율, 세부담 상한, 지방자치단체 조례 등에 따라 달라질 수 있다. 정확한 금액은 재산세 고지서나 위택스 조회 결과를 확인해야 한다.
재산세 납부 방법 &nbsp; 재산세는 여러 방법으로 납부할 수 있다. 예전처럼 고지서를 들고 은행에 가는 방법도 있고, 요즘은 위택스나 모바일 앱으로 납부하는 경우가 많다.
위택스에서 납부하기 &nbsp; 전국 지방세는 위택스에서 조회하고 납부할 수 있다. 공동인증서나 간편인증으로 로그인한 뒤 지방세 납부 메뉴에서 고지된 재산세를 확인하면 된다.
일반적인 흐름은 이렇다.
위택스에 접속한다. 본인 인증 후 로그인한다. 지방세 조회 또는 납부 메뉴로 들어간다. 재산세 고지 내역을 확인한다. 계좌이체, 신용카드, 간편결제 등 가능한 수단으로 납부한다. 서울시는 서울시 ETAX를 이용하는 경우도 많다. 주소지가 서울이라면 서울시 세금납부 시스템을 함께 확인하면 된다.
은행, ATM, 가상계좌 납부 &nbsp; 종이 고지서를 받았다면 은행 창구나 ATM에서 납부할 수 있다. 고지서에 적힌 가상계좌로 이체하는 방법도 있다. 인터넷 사용이 익숙하지 않다면 이 방식이 편하다.
모바일 앱과 간편결제 &nbsp; 스마트위택스 앱이나 일부 간편결제 앱에서도 지방세 납부가 가능하다. 다만 카드사나 결제수단에 따라 수수료, 포인트 사용, 무이자 할부 조건이 다를 수 있으니 납부 전에 확인하는 게 좋다.
자동이체나 전자고지를 신청하면 소액의 세액공제를 받을 수 있는 경우도 있다. 큰 금액은 아니지만 매년 내는 세금이라면 신청해두는 것도 괜찮다.
납부할 때 알아둘 점 &nbsp; 재산세는 납부기한을 넘기지 않는 것이 가장 중요하다. 기한을 지나면 가산금이 붙고, 오래 체납하면 독촉이나 압류 같은 체납처분으로 이어질 수 있다.
특히 7월과 9월은 다른 생활비와 겹치기 쉽다. 주택담보대출 이자, 관리비, 보험료, 자동차세 같은 고정비가 있는 상태에서 재산세가 추가로 나오면 부담이 커질 수 있다. 집을 산 뒤에는 매년 7월과 9월에 나갈 돈을 미리 예산에 넣어두는 게 좋다.
또 공동명의라면 지분별로 재산세가 나뉘어 고지될 수 있다. 부부 공동명의 주택이라면 각자 고지서를 받거나 각자 납부해야 할 금액이 생길 수 있으니 고지 내역을 확인해야 한다.
마지막으로 재산세와 종합부동산세는 다르다. 재산세는 지방세이고, 종부세는 일정 기준을 넘는 고가 주택 보유자에게 추가로 부과되는 국세다. 재산세를 냈다고 해서 종부세까지 모두 끝났다는 뜻은 아니다.
정리 &nbsp; 재산세는 주택을 보유하면 매년 확인해야 하는 기본 세금이다. 주택을 매매한 뒤에는 취득세만 생각하기 쉬운데, 실제로는 매년 7월과 9월에 재산세 부담이 생길 수 있다.
핵심만 다시 정리하면 이렇다.
재산세 과세기준일은 매년 6월 1일이다. 주택 재산세는 보통 7월과 9월에 절반씩 낸다. 7월 납부기간은 7월 16일~7월 31일이다. 9월 납부기간은 9월 16일~9월 30일이다. 재산세는 실거래가가 아니라 공시가격과 과세표준을 기준으로 계산한다. 위택스, 서울 ETAX, 은행, ATM, 가상계좌, 모바일 앱으로 납부할 수 있다. 납부기한을 넘기면 가산금이 붙을 수 있다. 집을 보유하고 있다면 매년 6월에는 &ldquo;내가 올해 재산세 대상자인가&quot;를 확인하고, 7월과 9월에는 납부 알림을 미리 걸어두는 게 좋다.
자주 묻는 질문 &nbsp; 재산세는 왜 7월과 9월에 두 번 내는 걸까? &nbsp; 주택분 재산세는 1년치 세액을 7월과 9월에 절반씩 나눠 부과하는 구조다. 다만 세액이 일정 금액 이하이면 7월에 한 번에 부과될 수 있다.
6월 2일에 집을 사면 그해 재산세를 내야 할까? &nbsp; 재산세는 매년 6월 1일 현재 소유자를 기준으로 부과된다. 따라서 6월 2일에 취득했다면 일반적으로 그해 재산세는 6월 1일 소유자에게 부과될 가능성이 높다. 다만 매매계약에서 당사자끼리 정산하기로 할 수는 있다.
재산세 고지서를 못 받으면 안 내도 될까? &nbsp; 아니다. 고지서를 못 받았더라도 납세의무가 없어지는 것은 아니다. 위택스, 서울 ETAX, 관할 구청 세무부서 등을 통해 조회하고 기한 안에 납부해야 한다.`}).add({id:98,href:"/posts/move-in-household-confirmation-certificate/",title:"전입세대확인서 발급 방법과 확인할 수 있는 내용 완벽 정리",description:"전입세대확인서가 무엇인지, 어떤 정보를 확인할 수 있는지, 부동산 계약에서 왜 필요한지, 발급 방법과 준비 서류를 쉽게 정리하였다.",content:`이번에 주택 매매 시에 주택담보대출을 받으려고 은행에 요구하는 문서를 준비하게 되었다. 생각보다 많은 서류를 요구하였다. 등기부등본, 인감증명서, 주민등록등본, 매매계약서 같은 서류는 이름이라도 익숙한데, &ldquo;전입세대열람원&quot;을 가져오라는 말을 들으면 순간 멈칫하게 되었다. 이때, 이 서류가 무엇인지 처음 찾아보게 되었는데, 대출에 왜 이런 서류가 필요한지, 무엇을 확인하는지, 인터넷으로 발급할 수 있는지 하나씩 알아보니 부동산 거래에서 꽤 중요한 문서였다.
요즘 공식 명칭은 전입세대확인서 다. 예전에는 전입세대열람원, 전입세대열람내역서라고 많이 불렀고, 은행이나 부동산 현장에서는 아직도 예전 이름을 섞어서 쓰는 경우가 많다. 이름이 여러 개라 헷갈릴 뿐, 핵심은 특정 주소에 누가 전입해 있는지 확인하는 서류라고 보면 된다.
전입세대확인서란? &nbsp; 전입세대확인서는 특정 건물 또는 소재지에 주민등록되어 있는 세대 정보를 확인하기 위한 민원 서류다. 정부24 민원 안내에 따르면 건물 소유자, 임차인, 매매계약자, 임대차계약자, 금융기관 등이 해당 물건지에 주민등록된 세대주와 주민등록표상 동거인의 성명, 전입일자를 확인할 수 있다.
쉽게 말하면 &ldquo;이 집 주소에 현재 주민등록상 누가 들어와 있는지&quot;를 확인하는 문서다. 실제로 거주하는지까지 완벽하게 증명하는 서류라기보다는, 주민등록 전입신고 기준의 세대 현황을 확인하는 자료에 가깝다.
이름이 여러 개라 헷갈릴 수 있으니 이렇게 정리하면 된다.
부르는 이름 의미 전입세대확인서 현재 공식 명칭 전입세대열람원 예전부터 현장에서 많이 쓰던 표현 전입세대열람내역서 같은 서류를 설명할 때 쓰는 표현 은행에서 &ldquo;전입세대열람원 가져오세요&quot;라고 말하더라도 보통은 전입세대확인서를 의미한다. 주민센터에 방문할 때는 &ldquo;전입세대확인서 발급하러 왔다&quot;고 말하면 된다.
전입세대확인서로 알 수 있는 것 &nbsp; 전입세대확인서에서 확인하는 핵심 정보는 매우 단순하다. 해당 주소에 주민등록상 전입되어 있는 세대주와 동거인, 그리고 전입일자다.
주로 확인하는 내용은 아래와 같다.
확인 항목 의미 세대주 성명 해당 주소에 전입된 세대의 대표자 동거인 성명 주민등록표상 함께 표시되는 동거인 전입일자 해당 주소로 전입신고된 날짜 물건지 주소 확인 대상이 되는 건물 또는 소재지 여기서 중요한 것은 전입일자다. 부동산에서는 권리관계를 볼 때 &ldquo;누가 먼저 들어왔는지&quot;가 중요해질 수 있다. 특히 임차인의 대항력, 선순위 임차인 여부, 담보가치 판단과 연결될 수 있기 때문이다.
다만 전입세대확인서 하나만으로 모든 권리관계가 끝나는 것은 아니다. 확정일자, 임대차계약서, 등기부등본, 건축물대장, 실제 점유 상태도 함께 봐야 한다. 전입세대확인서는 그중 주민등록상 전입 현황을 확인하는 서류라고 이해하는 게 정확하다.
예를 들어 매수하려는 집에 이미 다른 세대가 전입되어 있다면 이유를 확인해야 한다. 기존 임차인이 있는 집일 수도 있고, 말소되지 않은 전입 정보가 남아 있을 수도 있다. 이런 부분은 잔금 전 정리 여부, 대출 실행 가능 여부, 보증금 승계 여부와 연결될 수 있다.
전입세대확인서가 필요한 이유 &nbsp; 전입세대확인서는 주로 부동산 거래와 대출에서 필요하다. 이유는 간단하다. 집을 사거나 담보로 잡을 때, 해당 집에 이미 전입된 사람이 있는지 확인해야 하기 때문이다.
주택담보대출 심사에서 필요하다 &nbsp; 은행은 주택을 담보로 대출해줄 때 담보 가치와 권리관계를 본다. 집에 선순위 임차인이 있거나, 주민등록상 전입된 세대가 있다면 담보권 실행이나 대출 안정성에 영향을 줄 수 있다.
그래서 주택담보대출 서류 중에 전입세대확인서가 포함되는 경우가 많다. 은행 입장에서는 &ldquo;이 주소에 누가 전입되어 있는지&quot;를 확인해야 대출 가능 여부와 조건을 판단할 수 있다.
내가 주택담보대출을 준비하면서 이 서류를 알게 된 것도 같은 이유였다. 처음에는 &ldquo;내가 살 집을 사는 건데 왜 다른 세대 확인서가 필요하지?&rdquo; 싶었지만, 은행은 내가 보는 집의 권리 상태를 확인해야 하니 필요한 절차였다.
전세나 월세 계약 전에도 도움이 된다 &nbsp; 임차인 입장에서도 전입세대확인서는 중요하다. 전세 계약을 하기 전에 해당 주소에 이미 다른 세대가 전입되어 있다면 선순위 임차인이 있을 가능성을 의심해봐야 한다.
특히 다가구주택처럼 한 건물 안에 여러 임차인이 있는 구조에서는 더 주의해야 한다. 등기부등본만 보면 건물 전체의 소유권과 근저당은 확인할 수 있지만, 세대별 임차 관계를 모두 알기 어렵다. 전입세대확인서는 이런 빈틈을 줄이는 데 도움이 된다.
매매 계약에서도 확인할 필요가 있다 &nbsp; 매수자 입장에서는 잔금일 전에 집이 깨끗하게 인도될 수 있는지 확인해야 한다. 매도인 가족만 전입되어 있다면 잔금 후 전출하면 되지만, 제3자 전입이 있다면 사정이 달라진다.
계약서에 &ldquo;잔금일까지 전입세대 말소 또는 전출 완료&rdquo; 같은 조건을 넣어야 할 수도 있고, 기존 임차인의 보증금 승계 여부를 따져봐야 할 수도 있다. 이 확인을 소홀히 하면 집을 샀는데도 권리관계가 깔끔하지 않은 상태가 될 수 있다.
열람 및 발급 방법 &nbsp; 전입세대확인서는 정부24에서 민원 안내는 확인할 수 있지만, 기본적으로 방문 신청 민원이다. 인터넷으로 바로 출력하는 서류라고 생각하면 안 된다.
정부24에서 민원 안내 &nbsp; 정부24 안내 기준으로 신청 방법은 방문이고, 접수 및 처리 기관은 시·군·구, 읍·면·동 출장소다. 처리기간은 즉시이며, 근무시간 내 3시간으로 안내되어 있다.
발급 흐름은 보통 아래와 같다.
가까운 주민센터 또는 행정복지센터에 방문한다. 전입세대확인서 열람 또는 교부 신청서를 작성한다. 신분증과 신청 자격을 증명할 수 있는 서류를 제출한다. 수수료를 납부한다. 전입세대확인서를 열람하거나 교부받는다. 수수료는 열람과 교부가 다르다. 정부24 안내 기준으로 열람은 해당 물건지 건당 300원이고, 교부는 해당 물건지 건당 400원 또는 500원이다. 주민센터마다 현장 처리 방식이 조금 다르게 느껴질 수 있으니, 방문 전에 필요한 부수와 결제 수단을 확인하면 좋다.
준비물은 신청자 유형에 따라 달라진다. 공통으로 신분증은 필요하고, 소유자라면 소유 관계를 확인할 수 있는 자료, 임차인이라면 임대차계약서, 매매계약자라면 매매계약서처럼 신청 자격을 증명할 자료가 필요할 수 있다.
대표적인 준비 서류는 이렇게 생각하면 된다.
신청자 준비할 수 있는 서류 예시 소유자 신분증, 등기사항증명서 등 소유 사실 확인 자료 임차인 신분증, 임대차계약서 매매계약자 신분증, 매매계약서 임대차계약자 신분증, 임대차계약서 대리인 대리인 신분증, 위임장, 위임인 신분증, 신청 자격 증명 자료 금융기관 등 대출 또는 담보 설정 관련 증명 자료 일부 서류는 담당 공무원이 행정정보 공동이용으로 확인할 수 있지만, 정보 제공 동의가 필요하거나 현장에서 추가 자료를 요구받을 수 있다. 헛걸음을 줄이려면 방문할 주민센터에 전화해서 &ldquo;내 신청 유형에서 어떤 서류가 필요한지&quot;를 먼저 확인하는 것이 가장 현실적이다.
발급받을 때 주의할 점 &nbsp; 전입세대확인서는 개인정보가 포함된 서류라서 누구나 아무 주소나 조회할 수 있는 문서가 아니다. 소유자, 임차인, 계약자, 금융기관 등 법령상 이해관계가 있어야 신청할 수 있다.
또 하나 헷갈리는 점은 &ldquo;열람&quot;과 &ldquo;교부&quot;다. 열람은 말 그대로 내용을 확인하는 것이고, 교부는 서류를 받아가는 것이다. 은행 제출용이라면 보통 교부받은 서류가 필요하므로, 창구에서 사용 목적을 분명히 말하는 게 좋다.
부동산 계약과 관련해서는 발급 시점도 중요하다. 너무 오래전에 발급받은 서류는 현재 상태를 반영하지 못할 수 있다. 대출이나 잔금 서류로 제출할 때는 은행이나 법무사가 요구하는 발급일 기준이 있을 수 있으니, 미리 발급했다가 다시 받아야 하는 일이 없도록 확인해야 한다.
마지막으로 전입세대확인서에 누군가 전입되어 있다고 해서 무조건 문제가 있다는 뜻은 아니다. 매도인 가족, 기존 임차인, 전출 예정자 등 정상적인 사유가 있을 수 있다. 중요한 것은 그 전입 정보가 계약 조건과 대출 실행에 어떤 영향을 주는지 확인하는 것이다.
특히 주택담보대출을 준비 중이라면 은행 담당자에게 아래 내용을 미리 물어보는 것이 좋다.
질문 이유 발급일 기준이 있는가? 오래된 서류는 다시 요구될 수 있음 열람용과 교부용 중 무엇이 필요한가? 제출용 서류 요건이 다를 수 있음 잔금 전 전입세대가 있으면 대출 실행에 문제가 되는가? 선순위 임차인 여부와 연결될 수 있음 공동명의나 대리 신청 시 추가 서류가 필요한가? 현장 발급 지연을 줄일 수 있음 정리 &nbsp; 전입세대확인서는 특정 주소에 주민등록상 전입되어 있는 세대주와 동거인, 전입일자를 확인하는 서류다. 예전 이름인 전입세대열람원, 전입세대열람내역서로도 많이 불리지만, 현재 공식 명칭은 전입세대확인서다.
이 서류가 중요한 이유는 부동산 권리관계와 연결되기 때문이다. 주택담보대출을 받을 때는 은행이 담보 물건의 전입 현황을 확인해야 하고, 전세나 매매 계약 전에는 선순위 임차인이나 제3자 전입 여부를 확인하는 데 도움이 된다.
발급은 기본적으로 주민센터나 행정복지센터 방문으로 진행한다. 신분증과 신청 자격을 증명할 서류를 챙기고, 은행 제출용이라면 발급일 기준과 필요한 부수를 먼저 확인하는 것이 좋다. 부동산 서류는 하나만 보고 판단하기보다 등기부등본, 건축물대장, 계약서, 확정일자 정보와 함께 보는 습관이 필요하다.
자주 묻는 질문 &nbsp; 전입세대확인서는 인터넷 발급이 가능할까? &nbsp; 정부24에서 민원 안내는 확인할 수 있지만, 전입세대확인서는 기본적으로 방문 신청 민원이다. 주민센터나 행정복지센터에 방문해 신청하는 방식으로 생각하면 된다.
전입세대열람원과 전입세대확인서는 다른 서류일까? &nbsp; 실무에서는 같은 의미로 쓰이는 경우가 많다. 현재 공식 명칭은 전입세대확인서이고, 전입세대열람원이나 전입세대열람내역서는 예전부터 현장에서 익숙하게 쓰던 표현이다.
아무나 전입세대확인서를 발급받을 수 있을까? &nbsp; 아니다. 개인정보가 포함된 서류라서 소유자, 임차인, 매매계약자, 임대차계약자, 금융기관 등 법령상 신청 자격이 있는 사람이나 기관이 신청할 수 있다. 신청 유형에 따라 계약서, 위임장, 신분증 같은 서류가 필요할 수 있다.`}).add({id:99,href:"/posts/tax-saving-vs-tax-evasion/",title:"절세와 탈세 차이, 합법적으로 세금 줄이는 기준과 탈세 사례",description:"절세와 탈세의 차이를 세법상 기준, 증빙자료, 소득공제와 세액공제, 가공경비와 수입 누락 사례로 초보자도 이해하기 쉽게 정리했다.",content:`세금은 가능하면 줄이고 싶다. 월급을 받는 사람도 연말정산 환급액이 커지면 기분이 좋고, 사업자는 종합소득세나 부가가치세 신고 때 비용을 빠짐없이 인정받고 싶다. 그런데 여기서 자주 헷갈리는 말이 있다. 바로 &ldquo;절세&quot;와 &ldquo;탈세&quot;다.
둘 다 세금을 줄인다는 점에서는 비슷해 보인다. 하지만 실제 의미는 완전히 다르다. 절세는 세법이 허용하는 범위 안에서 세금을 줄이는 것이고, 탈세는 거짓 자료나 고의적인 누락으로 세금을 줄이려는 불법 행위다.
문제는 현실에서 이 경계가 늘 또렷하게 느껴지지는 않는다는 점이다. &ldquo;이 정도 비용은 넣어도 되지 않을까?&rdquo;, &ldquo;현금 매출은 조금 빠져도 모르지 않을까?&rdquo;, &ldquo;명의만 잠깐 빌리면 괜찮지 않을까?&rdquo; 같은 생각이 절세처럼 보이다가 탈세가 될 수 있다. 이 글에서는 초보자도 바로 구분할 수 있도록 절세와 탈세의 차이, 대표 사례, 피해야 할 행동을 정리하였다.
절세와 탈세를 나누는 기준은 결과가 아니라 과정이다 &nbsp; 절세와 탈세의 가장 중요한 구분 기준은 &ldquo;세금이 얼마나 줄었는가&quot;가 아니라 &ldquo;어떤 방법으로 줄였는가&quot;다.
예를 들어 100만 원의 세금을 줄였더라도 법에서 인정하는 소득공제, 세액공제, 필요경비, 감면 규정을 활용했다면 절세다. 반대로 1만 원만 줄였더라도 실제 없는 비용을 만든다거나, 매출을 일부러 빼고 신고했다면 탈세가 된다.
즉, 금액의 크기보다 과정의 정당성이 먼저다. 세금 신고에서 중요한 것은 &ldquo;내가 이 비용을 썼다&quot;라는 주장 자체가 아니라, 그 비용이 실제 사업과 관련이 있고 증빙으로 확인되며 세법상 인정되는지다.
쉽게 비교하면 다음과 같다.
구분 절세 탈세 의미 세법이 허용하는 범위에서 세금을 줄이는 행위 불법적인 방법으로 세금을 줄이거나 피하는 행위 핵심 기준 합법성, 증빙, 신고의 성실성 고의 누락, 허위 자료, 명의 위장 대표 예시 소득공제, 세액공제, 적격증빙을 통한 비용 처리 수입 누락, 가공경비, 허위계약서, 공문서 위조 결과 세금 부담을 합법적으로 낮춤 가산세, 세무조사, 벌금, 형사처벌 위험 세법은 복잡하지만 기본 원칙은 단순하다. 실제 거래가 있었는지, 증빙이 있는지, 법에서 인정하는 방식인지 보면 된다.
이럴 때는 절세에 해당한다 &nbsp; 절세는 세금을 억지로 피하는 기술이 아니다. 오히려 기록을 잘 남기고, 제때 신고하고, 법에서 주는 혜택을 빠짐없이 챙기는 일에 가깝다.
적격증빙을 챙기고 비용으로 인정받는 경우 &nbsp; 사업자는 사업과 관련해 쓴 돈을 필요경비로 인정받을 수 있다. 다만 &ldquo;썼다&quot;는 말만으로는 부족하다. 세금계산서, 계산서, 신용카드 매출전표, 현금영수증 같은 적격증빙이 있어야 한다.
예를 들어 프리랜서 사진가가 촬영 장비를 구입하거나, 카페 사업자가 원두와 에스프레소 머신을 구입하거나, 온라인 쇼핑몰 운영자가 택배비와 포장재를 지출했다면 사업 관련 비용으로 검토할 수 있다. 이때 증빙이 남아 있고 장부에 제대로 반영되어야 한다.
반대로 실제로 사업과 무관한 개인 지출을 사업 비용처럼 처리하면 문제가 된다. 가족 외식비, 개인 여행비, 개인 취미용 물품을 사업 비용처럼 넣는 방식은 절세가 아니라 탈세로 의심받을 수 있다.
소득공제와 세액공제를 활용하는 경우 &nbsp; 연말정산이나 종합소득세 신고에서 소득공제와 세액공제를 잘 챙기는 것도 대표적인 절세다.
소득공제는 세금을 계산하기 전의 과세 대상 소득을 줄여주는 방식이다. 인적공제, 신용카드 사용액 공제, 주택자금 관련 공제 등이 여기에 해당할 수 있다. 세액공제는 계산된 세금 자체를 줄여주는 방식이다. 의료비, 교육비, 기부금, 연금계좌, 근로소득세액공제 같은 항목이 대표적이다.
초보자는 소득공제와 세액공제를 어렵게 느끼지만, 핵심은 &ldquo;법에서 정한 조건을 충족했는가&quot;다. 조건을 충족했다면 적극적으로 챙겨야 하고, 조건이 안 되는데 억지로 넣으면 위험하다.
신고 기한과 의무를 지켜 가산세를 피하는 경우 &nbsp; 절세는 세금을 적게 내는 것만 의미하지 않는다. 내지 않아도 되는 가산세를 피하는 것도 넓은 의미의 절세다.
종합소득세 신고를 늦게 하거나, 부가가치세 신고 때 매입세액 공제 자료를 빠뜨리거나, 원천세 신고를 놓치면 세금 자체보다 가산세가 더 아깝게 느껴질 수 있다. 사업자는 매출이 크지 않아도 신고 기한과 증빙 관리에 신경 써야 한다.
특히 프리랜서나 개인사업자는 &ldquo;나중에 한 번에 정리하면 되겠지&quot;라고 생각하기 쉽다. 하지만 몇 달치 영수증을 몰아서 보면 어떤 지출이 사업용인지 기억이 흐려진다. 비용 인정도 어려워지고 신고 실수도 늘어난다.
이럴 때는 탈세로 볼 수 있다 &nbsp; 탈세는 고의로 사실을 왜곡하거나, 실제와 다른 자료를 만들어 세금을 줄이는 행위다. 본인은 &ldquo;조금 아끼려던 것&quot;이라고 생각해도 과세당국 입장에서는 다르게 본다.
수입 금액을 일부러 누락하는 경우 &nbsp; 가장 흔한 탈세 유형은 수입 누락이다. 현금으로 받은 매출을 신고하지 않거나, 계좌로 받은 돈을 개인 거래처럼 숨기거나, 플랫폼 매출 중 일부만 신고하는 식이다.
실수로 누락한 경우라면 수정신고나 기한 후 신고로 바로잡을 여지가 있다. 하지만 반복적으로 매출을 빼거나 금액이 크면 단순 실수로 보기 어렵다. 현금영수증 발급 거부도 문제가 될 수 있다. 고객이 현금영수증을 요청했는데 거부하면 신고 대상이 될 수 있고, 사업자는 불이익을 받을 수 있다.
실제 없는 비용을 만든 경우 &nbsp; 가공경비 계상은 실제 거래가 없는데 비용이 있었던 것처럼 장부에 넣는 행위다. 예를 들어 일하지 않은 가족을 직원으로 올려 급여를 지급한 것처럼 처리하거나, 실제 계약이 없는데 세금계산서를 주고받는 방식이 여기에 해당한다.
비용을 부풀리는 것도 위험하다. 100만 원을 썼는데 300만 원을 쓴 것처럼 처리하거나, 개인 지출을 사업 비용으로 끼워 넣는 것도 탈세로 이어질 수 있다.
절세는 실제 비용을 빠짐없이 인정받는 것이고, 탈세는 없는 비용을 만들어내는 것이다. 이 차이를 분명히 봐야 한다.
명의 위장과 허위 계약서를 사용하는 경우 &nbsp; 명의를 빌려 사업을 하거나, 차명계좌로 매출을 분산하거나, 허위계약서를 작성하는 것도 대표적인 탈세 유형이다. &ldquo;가족 명의니까 괜찮겠지&quot;라고 생각하기 쉽지만, 실제 사업자와 명의자가 다르면 세무상 문제가 커질 수 있다.
부동산이나 주식 거래에서도 비슷하다. 거래 금액을 낮춰 계약서를 쓰거나, 실제 자금 흐름과 다른 계약서를 만들면 세금뿐 아니라 법적 책임까지 생길 수 있다. 공문서 위조나 변조처럼 서류 자체를 조작하는 행위는 더 큰 처벌로 이어질 수 있다.
절세하려다 탈세가 되는 흔한 사례 &nbsp; 절세와 탈세는 따로 발생할 수도 있지만, 한 사람에게 동시에 나타날 수도 있다. 어떤 부분은 정당하게 공제를 받았지만, 다른 부분에서 신고 의무를 어기면 결과적으로 탈세 문제가 생길 수 있다.
예를 들어 종합소득세 신고를 통해 환급금은 빠르게 챙기면서, 본인이 내야 할 과태료나 체납 세금은 계속 미루는 사례가 있다. 환급 자체는 정당할 수 있지만, 체납이 있으면 환급금이 압류되거나 추심될 수 있다. 세금은 한쪽만 유리하게 골라서 처리할 수 있는 구조가 아니다.
또 다른 예로, 법인 대표가 회사 돈으로 개인 토지를 취득하는 경우를 생각해볼 수 있다. 회사 자금을 개인 목적으로 빼서 썼다면 단순한 비용 처리 문제가 아니다. 가지급금, 배임, 횡령, 소득처분, 세무조사 문제로 번질 수 있다.
은행 거래 실적을 높이려고 실제 거래가 없는데 매출세금계산서를 허위로 발행하는 경우도 위험하다. 당장은 대출 심사에 도움이 되는 것처럼 보일 수 있지만, 세무상으로는 가공 거래 의심을 받는다. 조세범 처벌 문제까지 이어질 수 있으므로 절대 가볍게 볼 일이 아니다.
부동산 절세에서도 주의가 필요하다. 증여, 양도, 보유 기간, 취득가액 같은 규정을 활용해 합법적으로 세금을 줄이는 방법은 있을 수 있다. 그러나 거래가 이미 끝난 뒤에 억지로 서류를 맞추거나, 실제와 다른 금액으로 계약서를 쓰면 탈세가 된다. 큰 금액의 부동산 거래나 비상장주식 이전은 계약 전에 세무 검토를 받는 편이 안전하다.
절세를 제대로 하려면 무엇부터 해야 할까 &nbsp; 절세의 시작은 특별한 비법이 아니라 기본 관리다. 세금을 잘 아끼는 사람은 대개 신고 직전에 급하게 움직이지 않는다. 평소에 자료를 모으고, 거래를 기록하고, 애매한 지출을 바로 확인한다.
첫째, 증빙을 바로 챙겨야 한다. 사업 비용은 가능하면 사업용 카드, 사업용 계좌, 세금계산서, 현금영수증 등으로 흔적을 남기는 편이 좋다. 현금 지출이 많으면 나중에 설명하기 어렵다.
둘째, 장부를 미루지 않아야 한다. 매출과 비용을 매달 정리하면 신고 때 빠지는 항목이 줄어든다. 프리랜서라도 수입처, 원천징수 내역, 플랫폼 정산 내역, 사업 관련 지출을 따로 관리하는 습관이 필요하다.
셋째, 공제와 감면은 조건을 확인해야 한다. &ldquo;남들이 다 받는다&quot;는 말만 믿고 넣으면 안 된다. 같은 항목이라도 소득 종류, 사업 형태, 가족 관계, 지출 시기, 한도에 따라 적용 여부가 달라진다.
넷째, 큰 거래는 사전에 검토해야 한다. 부동산 양도, 가족 간 증여, 법인 자금 이동, 고액 장비 구매, 직원 급여 처리처럼 금액이 큰 사안은 일이 끝난 뒤보다 시작 전에 확인하는 편이 훨씬 유리하다. 이미 계약서에 도장을 찍고 잔금까지 치른 뒤에는 선택지가 줄어든다.
세금이 애매할 때는 국세상담센터 126이나 관할 세무서, 세무대리인을 통해 확인하는 것이 좋다. 세무사 비용 몇 만 원을 아끼려다가 가산세와 추징세액으로 더 큰 돈이 나갈 수 있다.
요약 &nbsp; 절세와 탈세는 모두 세금을 줄이는 것처럼 보이지만 기준은 완전히 다르다. 절세는 세법이 인정한 방법으로 세금 부담을 낮추는 것이고, 탈세는 거짓이나 누락으로 세금을 피하는 것이다.
핵심은 세 가지다. 실제 거래가 있어야 하고, 증빙이 있어야 하며, 세법상 인정되는 방식이어야 한다. 이 세 가지가 맞으면 절세에 가깝고, 하나라도 고의로 조작하면 탈세 위험이 커진다.
세금은 많이 아는 사람보다 꾸준히 기록하는 사람이 덜 손해 본다. 사업자라면 오늘부터 매출, 비용, 증빙, 신고 기한을 따로 관리하는 습관을 들이는 것이 가장 현실적인 절세 방법이다.
자주 묻는 질문 &nbsp; 절세와 탈세의 가장 쉬운 구분법은 무엇인가? &nbsp; &ldquo;실제 거래와 증빙이 있는가&quot;를 먼저 보면 된다. 실제로 발생한 비용이고, 사업이나 공제 요건과 관련이 있으며, 증빙으로 확인된다면 절세로 볼 가능성이 높다. 반대로 매출을 숨기거나 없는 비용을 만들거나 명의를 빌리면 탈세 위험이 크다.
실수로 매출이나 비용을 잘못 신고하면 탈세인가? &nbsp; 단순 실수와 고의 탈세는 다르게 볼 수 있다. 실수로 누락했다면 빨리 수정신고나 경정청구 등으로 바로잡는 것이 중요하다. 다만 같은 실수가 반복되거나 금액이 크고, 고의로 숨긴 정황이 있으면 탈세로 의심받을 수 있다.
세무사를 쓰면 무조건 절세가 되는가? &nbsp; 무조건은 아니다. 다만 사업 규모가 커지거나 거래가 복잡해질수록 세무대리인의 도움을 받는 편이 실수를 줄이는 데 유리하다. 특히 부동산 양도, 가족 간 증여, 법인 자금 이동, 고액 비용 처리처럼 금액이 큰 일은 사전에 상담하는 것이 좋다.`}).add({id:100,href:"/posts/stock-leverage/",title:"주식 레버리지란 무엇인가? 초보자를 위한 쉬운 설명과 ...",description:"주식 레버리지는 적은 돈으로 더 큰 금액을 투자하는 방식이다. 수익도 커질 수 있지만 손실과 이자, 강제 청산 위험도 함께 커진다.",content:`주식 투자를 하다 보면 &ldquo;레버리지&quot;라는 말을 자주 듣게 된다. 특히 레버리지 ETF, 신용거래, 미수거래, 선물 같은 단어와 함께 등장한다.
처음 들으면 뭔가 전문적인 투자 기법처럼 보이지만, 핵심은 단순하다. 내 돈보다 더 큰 금액을 움직이는 투자 방식 이다. 좋게 말하면 수익률을 키우는 도구이고, 나쁘게 말하면 손실도 빠르게 키우는 도구다.
문제는 많은 사람이 레버리지를 &ldquo;돈을 빨리 벌 수 있는 방법&quot;으로만 이해한다는 점이다. 실제로는 방향을 맞혔을 때만 유리하고, 방향이 틀리면 손실 속도가 일반 투자보다 훨씬 빠르다.
이 글에서는 주식에서 말하는 레버리지가 무엇인지, 어떤 방식으로 쓰이는지, 초보자가 무엇을 조심해야 하는지 쉽게 정리하였다.
레버리지란 무엇인가? &nbsp; 레버리지(Leverage)는 원래 &ldquo;지렛대&quot;라는 뜻이다. 작은 힘으로 무거운 물건을 움직이는 도구가 지렛대다. 금융에서는 이 의미가 투자에 적용된다.
예를 들어 내 돈 100만 원만 가지고 주식을 사면 투자금은 100만 원이다. 그런데 증권사에서 돈을 빌리거나 레버리지 상품을 이용해서 200만 원어치 주식 효과를 낸다면, 이것이 2배 레버리지다.
간단히 계산해보자.
구분 일반 투자 2배 레버리지 투자 내 돈 100만 원 100만 원 실제 투자 효과 100만 원 200만 원 주가 10% 상승 +10만 원 +20만 원 주가 10% 하락 -10만 원 -20만 원 겉으로 보면 상승할 때는 좋아 보인다. 같은 돈으로 두 배 수익을 기대할 수 있기 때문이다. 하지만 하락할 때도 두 배로 손실이 커진다. 그래서 레버리지는 수익을 키우는 기술이 아니라 변동폭을 키우는 구조 라고 이해하는 편이 정확하다.
주식에서 레버리지를 쓰는 대표적인 방법 &nbsp; 주식 투자에서 레버리지는 여러 방식으로 쓰인다. 초보자가 자주 접하는 것은 신용거래와 레버리지 ETF다. 조금 더 적극적인 투자자라면 선물·옵션 같은 파생상품에서도 레버리지를 접하게 된다.
신용거래 &nbsp; 신용거래는 증권사에서 돈을 빌려 주식을 사는 방식이다. 내 돈 500만 원에 빌린 돈 500만 원을 더해 총 1,000만 원어치 주식을 사는 식이다.
주가가 오르면 내 돈만 투자했을 때보다 수익이 커진다. 하지만 주가가 떨어지면 손실도 커지고, 빌린 돈에 대한 이자도 부담해야 한다. 손실이 일정 수준을 넘으면 추가 증거금을 요구받거나, 보유 주식이 강제로 팔릴 수도 있다.
이 때문에 신용거래는 &ldquo;내가 맞히면 수익이 커진다&quot;보다 &ldquo;내가 틀리면 버틸 시간이 줄어든다&quot;는 관점으로 봐야 한다.
레버리지 ETF &nbsp; 레버리지 ETF는 기초지수의 하루 수익률을 2배 또는 3배로 따라가도록 설계된 상품이다. 예를 들어 어떤 지수가 하루에 1% 오르면 2배 레버리지 ETF는 대략 2% 오르는 구조다. 반대로 지수가 1% 떨어지면 ETF는 대략 2% 떨어진다.
국내 상장 레버리지 ETF는 보통 일간 수익률의 2배를 목표로 한다. 해외에는 나스닥100 지수를 3배로 추종하는 상품처럼 더 높은 배율의 상품도 있다.
여기서 중요한 표현은 &ldquo;일간 수익률&quot;이다. 한 달, 1년 수익률을 단순히 두 배로 만들어준다는 뜻이 아니다. 매일매일의 등락을 기준으로 계산되기 때문에 시간이 길어질수록 기대와 다른 결과가 나올 수 있다.
선물과 옵션 &nbsp; 선물과 옵션은 적은 증거금으로 큰 금액의 계약을 거래할 수 있는 파생상품이다. 구조가 복잡하고 가격 변동도 크다. 방향을 맞히면 수익이 빠르게 커지지만, 반대로 움직이면 원금 이상 손실이 발생할 수도 있다.
초보자라면 선물·옵션은 &ldquo;수익률이 큰 상품&quot;이 아니라 &ldquo;위험 관리가 먼저 필요한 상품&quot;으로 보는 것이 맞다.
레버리지 ETF에서 꼭 알아야 할 음의 복리 효과 &nbsp; 레버리지 ETF를 이해할 때 가장 중요한 개념 중 하나가 음의 복리 효과다.
예를 들어 기초지수가 첫날 10% 오르고 다음 날 10% 떨어졌다고 해보자.
일반 지수는 100에서 110이 됐다가 다시 99가 된다. 완전히 원금으로 돌아오지는 않지만 손실은 1% 정도다.
2배 레버리지 ETF는 첫날 20% 오르고 다음 날 20% 떨어진다. 100에서 120이 됐다가 96이 된다. 같은 방향을 두 번 맞힌 게 아니라 위아래로 흔들렸을 뿐인데 손실은 더 커진다.
흐름 일반 지수 2배 레버리지 시작 100 100 첫날 상승 110 120 둘째 날 하락 99 96 결과 -1% -4% 이처럼 시장이 한 방향으로 쭉 움직이면 레버리지 ETF가 강하게 작동할 수 있다. 하지만 오르락내리락하는 박스권에서는 손실이 누적될 수 있다. 그래서 레버리지 ETF는 장기 보유보다 단기적인 시장 방향성을 보고 활용하는 경우가 많다.
물론 장기적으로 강하게 우상향하는 시장에서는 레버리지가 좋은 성과를 낼 수도 있다. 다만 이것은 &ldquo;항상 장기 투자에 유리하다&quot;는 뜻이 아니다. 중간 변동성을 견딜 수 있는지, 하락장에서 얼마나 버틸 수 있는지, 투자금이 전체 자산에서 차지하는 비중이 적절한지가 더 중요하다.
레버리지의 장점과 단점 &nbsp; 레버리지는 무조건 나쁜 것도 아니고, 무조건 좋은 것도 아니다. 도구 자체보다 어떻게 쓰느냐가 중요하다.
장점 &nbsp; 첫째, 적은 돈으로 더 큰 투자 효과를 낼 수 있다. 투자금이 제한적일 때 시장 방향을 강하게 확신한다면 수익률을 높이는 데 도움이 될 수 있다.
둘째, 단기적인 시장 흐름에 대응하기 쉽다. 예를 들어 지수가 단기간 반등할 가능성이 높다고 판단할 때 레버리지 ETF를 활용하면 일반 ETF보다 더 큰 수익을 기대할 수 있다.
셋째, 투자 전략을 다양하게 만들 수 있다. 상승장에서는 레버리지 ETF, 하락장에서는 인버스나 곱버스 상품을 활용하는 식으로 시장 방향성에 맞춘 전략을 세울 수 있다.
단점 &nbsp; 첫째, 손실도 빠르게 커진다. 2배 레버리지는 수익만 2배가 아니라 손실도 2배다. 3배 레버리지는 더 빠르게 움직인다.
둘째, 이자와 비용이 있다. 신용거래는 빌린 돈에 대한 이자를 내야 하고, 레버리지 ETF도 일반 ETF보다 운용 비용과 구조적 비용이 클 수 있다.
셋째, 강제 청산 위험이 있다. 신용거래나 파생상품에서는 손실이 커지면 투자자가 버티고 싶어도 포지션이 강제로 정리될 수 있다.
넷째, 장기 보유 결과가 예상과 다를 수 있다. 특히 레버리지 ETF는 일간 수익률을 추종하기 때문에 기간 수익률이 단순히 기초지수의 두 배가 되지 않는다.
초보자가 레버리지 투자 전에 확인할 것 &nbsp; 레버리지를 처음 접한다면 투자하기 전에 몇 가지를 반드시 확인해야 한다.
내 전체 자산 중 얼마를 넣을지 정한다 &nbsp; 레버리지는 맞히면 좋지만 틀리면 손실이 빠르다. 그래서 생활비, 비상금, 장기 투자금까지 끌어와서 투자하면 안 된다.
개인적으로는 초보자라면 레버리지를 &ldquo;주력 투자&quot;가 아니라 &ldquo;작은 비중으로 연습하는 투자&quot;로 보는 것이 낫다고 생각한다. 전체 투자금의 일부만 사용해야 하락장에서 판단이 무너지지 않는다.
손절 기준을 미리 정한다 &nbsp; 레버리지는 손실이 커지는 속도가 빠르기 때문에 &ldquo;떨어지면 그때 생각하자&quot;는 방식이 위험하다. 매수 전에 어느 가격 또는 어느 손실률에서 정리할지 정해야 한다.
예를 들어 2배 레버리지 ETF에 투자한다면 기초지수가 5%만 내려도 내 상품은 10% 안팎으로 빠질 수 있다. 이런 움직임을 감당할 수 있는지 먼저 계산해야 한다.
레버리지 ETF는 사전 교육과 예탁금 조건을 확인한다 &nbsp; 국내에서 레버리지 ETF나 인버스 ETF 같은 상품을 거래하려면 사전 교육 이수와 기본예탁금 조건이 필요할 수 있다. 이는 초보 투자자가 상품 구조를 모르고 무리하게 진입하는 일을 줄이기 위한 장치다.
증권사마다 화면과 절차는 조금씩 다르지만, 보통 금융투자교육원 교육 이수 후 수료 번호를 증권사에 등록하는 방식으로 진행된다. 실제 거래 전에는 본인이 이용하는 증권사의 최신 기준을 확인하는 것이 좋다.
정리: 레버리지는 수익률이 아니라 위험을 먼저 봐야 한다 &nbsp; 주식에서 레버리지는 내 돈보다 큰 금액을 투자하는 방식이다. 상승장에서는 수익을 크게 만들 수 있지만, 하락장에서는 손실도 빠르게 커진다.
핵심은 이렇다.
레버리지는 수익과 손실을 모두 키운다. 신용거래는 이자와 강제 청산 위험이 있다. 레버리지 ETF는 일간 수익률을 추종하므로 장기 수익률이 단순히 두 배가 아니다. 변동성이 큰 장에서는 음의 복리 효과로 손실이 누적될 수 있다. 초보자는 작은 비중, 명확한 손절 기준, 상품 구조 이해가 먼저다. 레버리지는 투자 실력을 대신해주는 도구가 아니다. 오히려 판단이 틀렸을 때 약점을 더 크게 드러내는 도구에 가깝다. 그래서 처음에는 일반 ETF나 우량주 투자로 기본을 익히고, 레버리지는 구조를 충분히 이해한 뒤 제한적으로 활용하는 것이 더 현실적이다.
자주 묻는 질문 &nbsp; Q1. 레버리지는 초보자가 절대 하면 안 되는 투자일까? &nbsp; 절대 하면 안 된다고 말하기보다는, 구조를 모르고 큰돈을 넣으면 위험하다고 보는 것이 맞다. 초보자라면 전체 투자금의 작은 일부로만 접근하고, 손실 기준을 미리 정해야 한다.
Q2. 레버리지 ETF는 장기 투자하면 안 될까? &nbsp; 무조건 안 된다는 뜻은 아니다. 다만 레버리지 ETF는 일간 수익률을 추종하기 때문에 장기 수익률이 기초지수의 단순 배수로 움직이지 않는다. 시장이 많이 흔들리는 구간에서는 음의 복리 효과로 기대보다 성과가 나빠질 수 있다.
Q3. 2배 레버리지와 3배 레버리지 중 무엇이 더 좋을까? &nbsp; 배율이 높을수록 수익 기회도 커지지만 손실 속도도 빨라진다. 초보자라면 3배 레버리지는 특히 조심해야 한다. 배율을 고르기 전에 손실이 났을 때 얼마까지 감당할 수 있는지 먼저 계산하는 것이 중요하다.`}).add({id:101,href:"/posts/stock-momentum-meaning/",title:"주식 모멘텀 뜻, 상승 모멘텀이 살아있다는 말은 무슨 ...",description:"주식 뉴스와 리포트에 자주 나오는 모멘텀 뜻을 초보자 눈높이에서 정리하고, 실적·이익·가격·기대 모멘텀과 투자 시 주의점을 설명했다.",content:`주식 기사를 읽다 보면 &ldquo;상승 모멘텀이 살아있다&rdquo;, &ldquo;긍정적인 모멘텀이 소멸했다&rdquo;, &ldquo;하반기 실적 모멘텀이 기대된다&rdquo; 같은 표현이 자주 나온다. 단어만 보면 뭔가 있어 보이지만, 막상 뜻을 정확히 설명하려면 애매하다.
모멘텀은 쉽게 말해 주가의 상승이나 하락에 속도를 붙여주는 힘, 자극, 계기를 뜻한다. 어떤 종목이 오를 만한 이유가 계속 생기고 있다면 상승 모멘텀이 있다고 말하고, 반대로 오를 이유가 사라지거나 약해지면 모멘텀이 둔화됐다고 말한다.
초보 투자자가 모멘텀을 알아야 하는 이유는 단순하다. 모멘텀은 매수와 매도 판단에 자주 쓰이는 말이기 때문이다. 특히 단기 투자나 테마주, 성장주, 실적 발표 시즌에는 모멘텀이라는 단어가 거의 빠지지 않는다.
모멘텀은 주가를 움직이게 만드는 힘이다 &nbsp; 모멘텀은 원래 물리학에서 움직이는 물체의 운동량이나 추진력을 설명할 때 쓰이던 말이다. 어떤 물체가 한 방향으로 움직이면 그 방향으로 계속 나아가려는 힘이 생긴다. 주식시장에서는 이 개념을 빌려와 주가가 어느 방향으로 더 움직일 수 있게 만드는 힘을 모멘텀이라고 부른다.
예를 들어 어떤 회사가 새 제품을 출시했고, 판매량이 예상보다 좋고, 증권사들이 실적 전망치를 올리고 있다고 해보자. 이때 투자자들은 &ldquo;이 회사 주가는 더 오를 이유가 있다&quot;고 판단할 수 있다. 이런 이유들이 바로 상승 모멘텀이다.
반대로 기대했던 신제품 판매가 부진하거나, 실적 전망치가 내려가거나, 업황이 꺾이면 주가가 더 오를 힘이 약해진다. 이때는 &ldquo;모멘텀이 약해졌다&rdquo; 또는 &ldquo;모멘텀이 소멸했다&quot;고 표현한다.
주식에서 모멘텀은 주로 상승 쪽 의미로 많이 쓰인다. 물론 하락 모멘텀이라는 말도 가능하지만, 실제 기사나 리포트에서는 &ldquo;상승을 이어갈 재료가 남아 있는가&quot;를 설명할 때 더 자주 등장한다.
상승 모멘텀이 살아있다는 말의 의미 &nbsp; &ldquo;상승 모멘텀이 살아있다&quot;는 말은 주가가 더 오를 만한 이유가 아직 남아 있다는 뜻이다. 이미 주가가 올랐더라도 추가 상승을 기대하게 만드는 재료가 계속 존재한다는 의미다.
예를 들어 반도체 회사라면 AI 서버 수요 증가, 고부가 제품 판매 확대, 실적 전망 상향, 외국인 순매수 같은 요소가 상승 모멘텀이 될 수 있다. 바이오 회사라면 임상 결과 발표, 기술이전 기대, 신약 승인 가능성 등이 모멘텀이 될 수 있다.
다만 모멘텀이 있다고 해서 주가가 반드시 오른다는 뜻은 아니다. 시장은 이미 기대를 먼저 반영하는 경우가 많다. 좋은 뉴스가 나왔는데도 주가가 오히려 빠지는 일이 생기는 이유도 여기에 있다. 투자자들이 이미 그 기대를 알고 미리 샀다면, 실제 뉴스가 나온 날에는 차익 실현 매물이 나올 수 있다.
그래서 모멘텀을 볼 때는 &ldquo;좋은 재료가 있는가&quot;만 보면 부족하다. 그 재료가 아직 주가에 덜 반영됐는지, 앞으로 숫자로 확인될 가능성이 있는지, 시장의 기대보다 더 강한지까지 봐야 한다.
주식시장에서 자주 말하는 모멘텀 종류 &nbsp; 모멘텀은 하나의 단어로 쓰이지만 실제로는 여러 종류가 있다. 초보자라면 실적 모멘텀, 이익 모멘텀, 가격 모멘텀, 기대 모멘텀 정도만 알아도 리포트 읽기가 훨씬 쉬워진다.
실적 모멘텀 &nbsp; 실적 모멘텀은 회사의 매출, 영업이익, 순이익 같은 실적이 좋아질 가능성을 말한다. 다음 분기 실적이 좋아질 것으로 예상되거나, 업황 회복으로 매출이 늘어날 가능성이 클 때 실적 모멘텀이 있다고 한다.
예를 들어 전기차 부품 회사가 대형 고객사와 공급 계약을 맺었다면 앞으로 매출이 늘어날 수 있다. 이 계약이 실제 실적으로 이어질 가능성이 높다면 실적 모멘텀이 생긴 것이다.
이익 모멘텀 &nbsp; 이익 모멘텀은 실적 중에서도 이익 개선에 더 초점을 둔다. 매출이 늘어도 비용이 더 많이 늘면 이익은 좋아지지 않을 수 있다. 그래서 투자자는 매출 성장뿐 아니라 영업이익률, 원가 부담, 판관비, 환율 영향까지 함께 본다.
예를 들어 원재료 가격이 내려가면서 같은 제품을 팔아도 회사가 남기는 돈이 늘어난다면 이익 모멘텀이 생길 수 있다. 반대로 매출은 늘었지만 비용 증가로 이익이 줄어든다면 모멘텀은 약하게 평가될 수 있다.
가격 모멘텀 &nbsp; 가격 모멘텀은 주가 자체의 흐름을 보는 개념이다. 최근 주가가 강하게 오르고 있고 거래량도 함께 늘어난다면 가격 모멘텀이 강하다고 볼 수 있다. 반대로 주가가 계속 밀리고 반등이 약하다면 가격 모멘텀이 약한 상태다.
가격 모멘텀은 단기 투자자들이 특히 많이 본다. 다만 주가가 이미 많이 오른 종목은 작은 악재에도 크게 흔들릴 수 있다. &ldquo;오르고 있으니까 더 오른다&quot;는 생각만으로 따라가면 고점 매수가 될 수 있다.
기대 모멘텀 &nbsp; 기대 모멘텀은 아직 숫자로 확인되지는 않았지만 앞으로 좋아질 것이라는 기대에서 생기는 모멘텀이다. 신사업, 정부 정책 수혜, 산업 성장, 신제품 출시, 금리 인하 기대 같은 요소가 여기에 들어간다.
기대 모멘텀은 주가를 빠르게 움직일 수 있지만 위험도 크다. 기대가 현실이 되면 주가는 더 갈 수 있지만, 기대가 꺾이면 하락도 빠르다. 그래서 기대 모멘텀만 있는 종목은 실제 실적이 따라오는지 계속 확인해야 한다.
모멘텀주와 모멘텀 투자 &nbsp; 모멘텀주는 최근 일정 기간 동안 주가가 빠르게 오른 종목을 말한다. 보통 최근 6개월이나 12개월 동안 강한 상승률을 보인 종목을 모멘텀주라고 부른다. 투자자들은 이런 종목이 기존 추세를 이어갈 가능성이 있다고 보고 관심을 가진다.
모멘텀 투자는 이런 흐름을 활용하는 투자 방식이다. 시장의 관심, 뉴스, 테마, 수급, 가격 흐름을 보고 상승세가 이어질 가능성이 높은 종목에 투자한다. 쉽게 말해 &ldquo;강한 종목이 당분간 더 강할 수 있다&quot;는 생각을 바탕으로 한다.
모멘텀 투자는 가치투자와 성격이 다르다. 가치투자는 기업의 내재가치에 비해 주가가 싸다고 판단될 때 매수하고 기다리는 방식에 가깝다. 반면 모멘텀 투자는 현재 시장이 주목하는 흐름과 속도를 더 중요하게 본다.
모멘텀 투자가 나쁜 방식이라는 뜻은 아니다. 다만 초보자에게는 난도가 높다. 뉴스에 빠르게 반응해야 하고, 기대가 꺾이는 순간 손절 기준도 명확해야 한다. 직장인처럼 장중 대응이 어렵다면 모멘텀주를 무리하게 따라가기보다 비중을 작게 두거나 관찰부터 하는 편이 낫다.
모멘텀을 볼 때 주의할 점 &nbsp; 모멘텀은 유용한 단어지만, 너무 넓게 쓰인다는 단점이 있다. 어떤 리포트에서는 실적 개선을 모멘텀이라고 하고, 어떤 기사에서는 단기 테마를 모멘텀이라고 한다. 그래서 모멘텀이라는 단어를 보면 먼저 &ldquo;무슨 모멘텀인지&quot;를 확인해야 한다.
가장 먼저 볼 것은 실적과 연결되는지다. 주가가 오래 오르려면 결국 이익 증가나 현금흐름 개선 같은 숫자가 따라와야 한다. 기대만 있고 실적이 없는 모멘텀은 오래 지속되기 어렵다.
두 번째는 이미 주가에 얼마나 반영됐는지다. 좋은 재료라도 모두가 알고 있고 주가가 크게 오른 뒤라면 추가 상승 여력이 작을 수 있다. 이때는 호재 발표가 오히려 매도 기회가 되는 경우도 있다.
세 번째는 모멘텀이 사라지는 신호다. 거래량이 줄면서 상승폭이 둔화되거나, 좋은 뉴스에도 주가가 오르지 못하거나, 실적 전망치가 내려가기 시작하면 모멘텀이 약해지고 있을 수 있다.
마지막으로 내 투자 기간과 맞는지도 봐야 한다. 단기 모멘텀을 보고 샀는데 장기 투자처럼 버티면 손실이 커질 수 있다. 반대로 장기 성장 모멘텀을 보고 샀는데 며칠 주가 움직임만 보고 팔아버리면 원래 투자 아이디어와 맞지 않는다.
정리 &nbsp; 주식에서 모멘텀은 주가의 상승이나 하락에 속도를 붙여주는 힘, 자극, 계기를 뜻한다. &ldquo;상승 모멘텀이 살아있다&quot;는 말은 주가가 더 오를 만한 이유가 아직 남아 있다는 뜻이다.
모멘텀은 실적, 이익, 가격, 기대 모멘텀으로 나누어 볼 수 있다. 실적과 이익 모멘텀은 숫자로 확인되는 힘이고, 가격 모멘텀은 주가 흐름 자체에서 나오는 힘이며, 기대 모멘텀은 미래 전망에서 생기는 힘이다.
모멘텀주는 최근 6개월 또는 12개월 동안 주가가 빠르게 오른 종목을 말한다. 이런 종목은 강한 흐름을 이어갈 수 있지만, 기대가 꺾이면 하락도 빠를 수 있다.
모멘텀이라는 단어를 봤다면 바로 매수나 매도를 결정하지 말고 세 가지를 확인하자. 어떤 모멘텀인지, 주가에 이미 반영됐는지, 실제 실적으로 이어질 가능성이 있는지다. 이 세 가지를 나누어 보면 주식 뉴스와 리포트가 훨씬 현실적으로 읽힌다.
자주 묻는 질문 &nbsp; 모멘텀이 좋다는 말은 무조건 주가가 오른다는 뜻인가? &nbsp; 아니다. 모멘텀이 좋다는 말은 오를 만한 재료나 흐름이 있다는 뜻이지, 상승을 보장한다는 뜻은 아니다. 이미 주가에 반영됐거나 시장 기대에 못 미치면 주가는 내려갈 수 있다.
상승 모멘텀과 호재는 같은 말인가? &nbsp; 비슷하지만 완전히 같지는 않다. 호재는 좋은 뉴스나 사건이고, 상승 모멘텀은 그 호재가 주가 상승을 이어가게 만드는 힘이다. 호재가 있어도 시장이 이미 알고 있었다면 모멘텀은 약할 수 있다.
모멘텀주는 초보자가 투자해도 괜찮은가? &nbsp; 가능은 하지만 비중과 손절 기준을 명확히 해야 한다. 모멘텀주는 변동성이 큰 경우가 많아 초보자가 큰 금액으로 따라가면 손실이 커질 수 있다.
가치투자와 모멘텀 투자는 무엇이 다른가? &nbsp; 가치투자는 기업 가치보다 주가가 싸다고 판단해 매수하는 방식이고, 모멘텀 투자는 현재 강한 흐름이나 재료가 이어질 가능성에 투자하는 방식이다. 가치투자는 기다림이 중요하고, 모멘텀 투자는 타이밍과 대응이 중요하다.`}).add({id:102,href:"/posts/stock-sidecar/",title:"주식 사이드카란? 발동 기준과 서킷브레이커 차이를 쉽게 정리",description:"주식 사이드카의 뜻, 코스피와 코스닥 발동 기준, 프로그램 매매 제한 효과, 서킷브레이커와의 차이, 투자자가 주의할 점을 쉽게 정리했다.",content:`주식 뉴스를 보다 보면 갑자기 사이드카 발동이라는 말이 나올 때가 있다. 처음 들으면 자동차 이야기 같기도 하고, 정확히 무엇을 뜻하는지 헷갈리기 쉽다.
특히 주식 투자를 막 시작한 사람이라면 &ldquo;지금 시장에 큰일이 난 건가?&rdquo;, &ldquo;내가 가진 주식을 바로 팔아야 하나?&rdquo; 같은 생각이 들 수 있다. 나도 처음 주식을 시작했을 때 사이드카 발동 뉴스를 보고 계좌를 몇 번이나 다시 확인했던 기억이 있다.
사이드카는 시장이 크게 흔들릴 때 작동하는 안전장치다. 다만 주식 거래 전체가 멈추는 제도는 아니다. 정확히는 프로그램 매매 호가를 일정 시간 제한해서 시장이 너무 빠르게 한쪽으로 쏠리는 것을 막는 장치에 가깝다.
최근처럼 코스피 매도 사이드카, 코스닥 매수 사이드카 같은 표현이 뉴스에 자주 나오면 투자자는 더 불안해진다. 하지만 제도의 뜻과 발동 기준을 알고 있으면 뉴스에 휘둘리기보다 시장 상황을 차분히 해석할 수 있다.
주식 사이드카란 무엇인가 &nbsp; 주식 사이드카는 주식시장에서 가격이 급격하게 오르거나 떨어질 때 프로그램 매매의 매수 또는 매도 호가 효력을 잠시 정지하는 제도다.
여기서 프로그램 매매란 사람이 일일이 주문을 넣는 방식이 아니라, 미리 정한 조건에 따라 컴퓨터 시스템이 자동으로 대량 주문을 내는 거래를 말한다. 현물 주식과 선물 가격 차이를 이용하는 차익거래, 여러 종목을 한꺼번에 사고파는 비차익거래 등이 대표적이다.
문제는 시장이 급하게 움직일 때다. 선물 가격이 크게 떨어지면 프로그램 매도가 한꺼번에 나오고, 이 매도가 다시 주가 하락을 키울 수 있다. 반대로 선물 가격이 급등하면 프로그램 매수가 몰리면서 시장 과열을 더 키울 수도 있다.
이때 시장이 너무 빠르게 한쪽 방향으로 쏠리지 않도록 잠시 속도를 줄이는 장치가 사이드카다. 자동차의 브레이크처럼 시장 전체를 완전히 멈추는 장치는 아니지만, 과도한 자동 주문을 잠깐 막아 투자자들이 상황을 다시 판단할 시간을 준다.
핵심은 다음과 같다.
구분 내용 제도 이름 사이드카 정확한 성격 프로그램 매매 호가 효력 정지 목적 급등락 완화, 시장 과열 방지 제한 대상 프로그램 매매 매수호가 또는 매도호가 일반 투자자 거래 직접 매매는 계속 가능 즉 사이드카 발동은 &ldquo;주식시장이 완전히 멈췄다&quot;는 뜻이 아니라, &ldquo;자동 프로그램 매매가 한쪽으로 쏠리는 것을 잠시 막았다&quot;는 뜻으로 이해하면 된다.
사이드카 발동 기준 &nbsp; 사이드카는 아무 때나 발동되지 않는다. 한국거래소 업무규정에 따라 코스피와 코스닥은 각각 정해진 조건을 충족해야 한다.
코스피 사이드카 기준 &nbsp; 코스피 시장에서는 코스피200을 기초자산으로 하는 선물거래 종목 중 직전 매매거래일 거래량이 가장 많은 종목의 가격이 기준가격 대비 5% 이상 상승하거나 하락한 상태가 1분간 지속되면 사이드카가 발동될 수 있다.
발동되면 해당 시점부터 5분 동안 프로그램 매매의 매수호가 또는 매도호가 효력이 정지된다.
정리하면 다음과 같다.
구분 코스피 사이드카 기준 상품 코스피200 선물 발동 조건 기준가격 대비 5% 이상 상승 또는 하락 지속 조건 1분간 지속 제한 시간 5분 제한 대상 프로그램 매매 매수호가 또는 매도호가 여기서 중요한 점은 사이드카가 코스피 지수 자체만 보고 발동되는 것이 아니라는 것이다. 기준은 코스피200 선물 가격이다. 선물시장이 현물시장보다 빠르게 움직이는 경우가 많기 때문에 선물 가격 급변을 기준으로 프로그램 매매를 제한한다.
코스닥 사이드카 기준 &nbsp; 코스닥 시장은 코스피와 기준이 조금 다르다. 일반적으로 코스닥150 선물 가격이 기준가격 대비 6% 이상 상승 또는 하락하고, 코스닥150 지수도 일정 수준 이상 함께 움직인 상태가 1분간 지속될 때 발동된다.
코스닥은 코스피보다 변동성이 큰 시장이기 때문에 선물 가격 기준이 5%가 아니라 6%로 잡혀 있다. 또 코스닥150 지수 움직임도 함께 확인한다는 점이 중요하다.
구분 코스닥 사이드카 기준 상품 코스닥150 선물 선물 기준 기준가격 대비 6% 이상 상승 또는 하락 지수 조건 코스닥150 지수도 같은 방향으로 일정 폭 이상 변동 지속 조건 1분간 지속 제한 시간 5분 또 사이드카는 보통 하루에 여러 번 계속 발동되는 장치가 아니다. 당일 중 최초로 요건에 해당한 경우에 적용되고, 장 개시 직후 일정 시간과 장 종료 40분 전 이후에는 발동 제한이 있다.
사이드카가 발동되면 시장은 어떻게 될까 &nbsp; 사이드카가 발동되면 가장 먼저 제한되는 것은 프로그램 매매다. 급락 상황이면 프로그램 매도호가의 효력이 정지되고, 급등 상황이면 프로그램 매수호가의 효력이 정지된다.
예를 들어 선물 가격이 급락하면서 프로그램 매도 주문이 쏟아지는 상황이라면 매도 사이드카가 발동된다. 이때 5분 동안 프로그램 매도호가의 효력이 정지되므로 자동 매도 물량이 시장을 더 빠르게 누르는 것을 줄일 수 있다.
반대로 시장이 급등해 프로그램 매수 주문이 한꺼번에 몰리면 매수 사이드카가 발동될 수 있다. 이 경우 프로그램 매수호가가 잠시 제한되어 과열 속도를 낮추는 역할을 한다.
다만 개인 투자자의 일반적인 직접 매매가 전부 막히는 것은 아니다. HTS나 MTS에서 일반 주문을 넣는 행위 자체는 계속 가능하다. 그래서 사이드카 뉴스를 볼 때 &ldquo;거래소가 모든 거래를 멈췄다&quot;고 이해하면 안 된다.
구분 사이드카 발동 시 영향 프로그램 매매 5분 동안 해당 방향 호가 효력 정지 개인 직접 주문 정상 거래 가능 시장 분위기 급등락 경고 신호로 인식 투자 심리 공포 또는 과열 심리를 누그러뜨리는 효과 실제로 사이드카가 발동되면 뉴스 속보로 크게 다뤄지는 경우가 많다. 그만큼 시장 변동성이 커졌다는 뜻이다. 하지만 사이드카 자체가 곧 폭락 확정이나 폭등 확정이라는 뜻은 아니다. 시장이 비정상적으로 빠르게 움직이고 있으니 잠시 속도를 낮춘다는 의미에 가깝다.
매수 사이드카와 매도 사이드카 차이 &nbsp; 사이드카는 방향에 따라 매수 사이드카와 매도 사이드카로 나뉜다.
매수 사이드카는 선물 가격이 급등하면서 프로그램 매수 주문이 과도하게 들어올 때 발동된다. 시장이 지나치게 빠르게 오르거나 단기 과열될 가능성이 있을 때 매수호가 효력을 잠시 정지한다.
매도 사이드카는 선물 가격이 급락하면서 프로그램 매도 주문이 과도하게 나올 때 발동된다. 시장이 공포에 휩싸여 자동 매도 물량이 하락을 키울 가능성이 있을 때 매도호가 효력을 잠시 정지한다.
구분 매수 사이드카 매도 사이드카 발생 상황 선물 가격 급등 선물 가격 급락 제한 대상 프로그램 매수호가 프로그램 매도호가 시장 분위기 단기 과열 가능성 공포 매도 가능성 투자자 해석 추격 매수 주의 공포 매도 주의 개인 투자자 입장에서는 매수 사이드카와 매도 사이드카 모두 &ldquo;지금 시장이 평소보다 훨씬 빠르게 움직이고 있다&quot;는 신호로 보면 된다. 방향은 다르지만 공통점은 변동성이 크다는 것이다.
사이드카와 서킷브레이커 차이 &nbsp; 주식 뉴스에서 사이드카와 함께 자주 나오는 용어가 서킷브레이커다. 둘 다 시장 안정 장치지만 강도와 영향 범위가 다르다.
사이드카는 프로그램 매매를 잠시 제한하는 제도다. 주식시장 전체 거래가 멈추지는 않는다. 반면 서킷브레이커는 시장 지수가 일정 수준 이상 급락하면 주식시장 전체 매매를 일정 시간 중단하는 제도다.
쉽게 말하면 사이드카는 경고등에 가깝고, 서킷브레이커는 비상 정지에 가깝다.
구분 사이드카 서킷브레이커 목적 프로그램 매매 쏠림 완화 시장 전체 급락 완화 기준 주로 선물 가격 급변 주가지수 급락 제한 범위 프로그램 매매 호가 시장 전체 매매 지속 시간 보통 5분 단계별로 더 길게 중단 체감 강도 비교적 약함 매우 강함 그래서 사이드카가 발동됐다고 해서 바로 서킷브레이커까지 이어지는 것은 아니다. 다만 시장 충격이 매우 크고 지수 하락이 계속된다면 사이드카 이후 서킷브레이커가 거론될 수 있다.
투자자는 두 제도를 구분해서 봐야 한다. 사이드카는 프로그램 매매 제한이고, 서킷브레이커는 시장 전체 거래 중단이다. 이 차이만 알아도 뉴스 해석이 훨씬 쉬워진다.
사이드카 발동을 투자자는 어떻게 봐야 할까 &nbsp; 사이드카 발동은 투자자에게 중요한 신호다. 하지만 그 자체만으로 매수나 매도 결정을 내려서는 안 된다.
사이드카가 발동됐다는 것은 시장 변동성이 커졌다는 뜻이다. 단기적으로는 가격이 위아래로 크게 흔들릴 수 있고, 호가 공백이 생기거나 체결 가격이 기대와 달라질 수 있다. 특히 레버리지 ETF, 인버스 ETF, 신용거래, 미수거래를 쓰는 투자자는 손실 속도가 빨라질 수 있다.
이런 시기에는 다음을 먼저 확인하는 것이 좋다.
점검 항목 확인할 내용 투자 기간 단기 매매인지 장기 투자자인지 현금 비중 급락 시 대응할 여력이 있는지 레버리지 신용, 미수, 레버리지 ETF 비중이 과한지 손절 기준 감정이 아니라 기준에 따라 대응하는지 뉴스 원인 금리, 환율, 전쟁, 기업 실적 등 원인이 무엇인지 초보 투자자일수록 사이드카 뉴스가 나오면 바로 따라 움직이고 싶어진다. 하지만 시장이 급하게 흔들릴수록 호가와 체결이 불리해질 수 있다. 공포에 팔거나 흥분해서 추격 매수하면 오히려 손실이 커질 가능성이 높다.
개인적으로는 이런 뉴스가 나왔을 때 계좌를 먼저 보기보다 시장이 왜 움직였는지부터 확인하는 편이 낫다고 본다. 단순한 단기 충격인지, 경기와 기업 실적을 바꿀 만한 큰 사건인지에 따라 대응이 달라지기 때문이다.
정리 &nbsp; 주식 사이드카는 주식시장이 급등하거나 급락할 때 프로그램 매매의 매수 또는 매도 호가 효력을 5분간 정지하는 시장 안정 장치다. 코스피는 주로 코스피200 선물 가격이 기준가격 대비 5% 이상 움직이고 1분간 지속될 때, 코스닥은 코스닥150 선물 가격이 6% 이상 움직이고 관련 지수 조건이 함께 충족될 때 발동된다.
사이드카가 발동돼도 개인 투자자의 일반 주식 거래가 전부 멈추는 것은 아니다. 제한되는 것은 프로그램 매매 호가다. 이 점에서 시장 전체 매매가 중단되는 서킷브레이커와 다르다.
투자자는 사이드카를 매수·매도 신호로 단순하게 받아들이기보다, 시장 변동성이 커졌다는 경고 신호로 해석하는 것이 좋다. 특히 레버리지, 신용거래, 단기 추격 매매를 하고 있다면 위험 관리 기준을 먼저 점검해야 한다.
주식시장은 늘 오르내리지만, 급격한 변동이 나올 때는 감정이 판단을 앞서기 쉽다. 사이드카의 뜻과 기준을 알고 있으면 뉴스 속보에 놀라기보다 시장 구조를 이해하면서 대응할 수 있다.
자주 묻는 질문 &nbsp; 사이드카가 발동되면 주식 거래가 모두 중단될까? &nbsp; 아니다. 사이드카는 시장 전체 거래 중단이 아니라 프로그램 매매 호가의 효력을 잠시 정지하는 제도다. 일반 투자자의 직접 매매는 계속 가능하다.
사이드카가 발동되면 주가가 더 떨어진다는 뜻일까? &nbsp; 반드시 그렇지는 않다. 사이드카는 시장 변동성이 커졌다는 신호이지, 이후 방향을 확정하는 신호는 아니다. 급락장에서 매도 사이드카가 나오기도 하고, 급등장에서 매수 사이드카가 나오기도 한다.
사이드카와 서킷브레이커 중 무엇이 더 강한 조치일까? &nbsp; 서킷브레이커가 더 강한 조치다. 사이드카는 프로그램 매매만 제한하지만, 서킷브레이커는 시장 전체 매매를 일정 시간 중단한다. 따라서 투자자가 체감하는 영향도 서킷브레이커가 훨씬 크다.`}).add({id:103,href:"/posts/fractional-stock-trading/",title:"주식 소수점 거래 방법과 장단점, 주식 모으기로 소액 ...",description:"주식 소수점 거래의 뜻과 장단점, 주문 방법, 주식 모으기 활용법, 수수료와 의결권 등 초보자가 꼭 확인할 주의점을 쉽게 정리했다.",content:`비싼 주식을 사고 싶은데 한 주 가격이 부담스러울 때가 있다. SK하이닉스, 현대자동차, 삼성바이오로직스처럼 한 주 가격이 몇십만 원을 넘는 종목은 초보자가 선뜻 매수하기 어렵다. 관심은 있지만 &ldquo;일단 한 주부터 사보자&quot;는 말 자체가 부담이 되는 경우가 많다.
이럴 때 활용할 수 있는 방식이 소수점 거래다. 주식을 반드시 1주 단위로 사는 것이 아니라 1만 원, 5만 원처럼 금액을 정해 일부만 살 수 있는 거래 방식이다. 해외 주식에서 먼저 익숙해진 방식이지만, 요즘은 국내 주식도 소수점 거래를 지원하는 증권사가 늘었다.
소수점 거래는 적은 돈으로 투자 경험을 쌓기 좋다. 다만 일반 주식 거래와 완전히 같지는 않다. 수수료, 체결 방식, 종목 제한, 의결권 같은 부분을 모르고 시작하면 생각보다 불편하게 느껴질 수 있다.
소수점 거래는 주식을 쪼개서 사는 방식이다 &nbsp; 소수점 거래는 주식을 1주 단위가 아니라 금액이나 소수 단위 수량으로 나누어 매수하는 방식이다. 예를 들어 한 주 가격이 100만 원인 주식이 있다고 해보자. 일반 거래라면 최소 100만 원이 있어야 1주를 살 수 있다. 하지만 소수점 거래를 이용하면 1만 원만 투자해 0.01주처럼 일부 지분을 살 수 있다.
쉽게 말해 &ldquo;내가 가진 돈에 맞춰 주식을 나누어 사는 방식&quot;이다. 그래서 소액으로도 비싼 우량주에 투자할 수 있고, 같은 돈으로 여러 종목을 조금씩 나누어 담을 수 있다.
소수점이 모여 1주가 되면 어떻게 될까? &nbsp; 소수점으로 꾸준히 모은 수량이 1주가 되면 온주, 즉 완전한 1주가 된다. 이때는 증권사 정책에 따라 일반 주식으로 자동 전환되거나 별도 전환 신청이 필요할 수 있다.
일반 주식으로 전환되면 보통 실시간 매도, 타 증권사 대체출고, 주주 권리 행사 같은 부분이 일반 주식과 같아진다. 다만 세부 처리 방식은 증권사마다 다르므로 이용 중인 앱의 안내를 확인해야 한다.
소수점 거래의 장점은 시작 부담이 낮다는 점이다 &nbsp; 소수점 거래의 가장 큰 장점은 투자 시작 금액을 낮출 수 있다는 것이다. 처음 주식을 배울 때 큰돈을 넣으면 작은 가격 변동에도 마음이 흔들린다. 반대로 5,000원이나 1만 원처럼 작은 금액으로 시작하면 주문, 체결, 평가손익, 배당 같은 흐름을 부담 없이 경험할 수 있다.
비싼 주식도 원하는 금액만큼 살 수 있다 &nbsp; 한 주 가격이 높은 종목은 초보자에게 진입 장벽이 된다. 소수점 거래를 이용하면 주가가 50만 원인 종목도 1만 원어치만 살 수 있다. 꼭 한 주를 살 때까지 기다리지 않아도 관심 기업의 주주 경험을 시작할 수 있다.
여러 종목에 나누어 투자하기 쉽다 &nbsp; 투자금이 10만 원뿐이라면 일반 거래에서는 살 수 있는 종목이 제한된다. 하지만 소수점 거래를 활용하면 2만 원씩 5개 종목에 나누어 투자하는 것도 가능하다. 자연스럽게 분산투자를 연습할 수 있다.
물론 분산투자가 손실을 없애주는 것은 아니다. 그래도 한 종목에 모든 돈을 넣는 것보다 위험을 나누는 데 도움이 된다. 초보자라면 처음부터 한 종목에 몰아넣기보다 여러 업종과 기업을 조금씩 관찰하는 편이 낫다.
배당금도 보유 지분만큼 받을 수 있다 &nbsp; 소수점으로 보유한 주식도 배당이 있는 종목이라면 지분 비율에 따라 배당금을 받을 수 있다. 예를 들어 0.2주를 보유했다면 1주 배당금의 20% 수준으로 계산되는 식이다.
다만 실제 지급 방식과 소수 단위 처리 기준은 증권사와 종목에 따라 차이가 있을 수 있다. 배당주를 소수점으로 모을 생각이라면 배당금 지급 기준도 함께 확인하는 것이 좋다.
소수점 거래의 단점도 분명히 알아야 한다 &nbsp; 소수점 거래는 편리하지만 일반 주식 거래보다 제약이 많다. 특히 매수와 매도가 바로바로 체결되지 않을 수 있고, 모든 종목을 거래할 수 있는 것도 아니다. 작은 돈으로 시작할 수 있다는 장점만 보고 들어가기보다 아래 내용을 먼저 확인해야 한다.
수수료가 일반 거래보다 불리할 수 있다 &nbsp; 소수점 거래는 여러 투자자의 주문을 모아 처리하는 구조다. 그래서 일반 국내 주식 거래보다 수수료가 높거나 별도 수수료 체계가 적용될 수 있다. 특히 소액을 자주 사고팔면 수익보다 수수료 부담이 더 크게 느껴질 수 있다.
예를 들어 매일 5,000원씩 매수하는 방식은 투자 습관을 만들기에는 좋지만, 증권사 수수료가 높다면 장기 수익률에는 부담이 된다. 소수점 거래를 시작하기 전에는 매수 수수료, 매도 수수료, 해외 주식이라면 환전 비용까지 같이 확인해야 한다.
거래 가능한 종목이 제한된다 &nbsp; 모든 주식을 소수점으로 살 수 있는 것은 아니다. 증권사마다 소수점 거래 가능 종목을 따로 정해두며, 보통 거래량이 많고 시장성이 높은 종목 위주로 제공된다. 내가 사고 싶은 종목이 앱에서 검색되지 않을 수도 있다.
국내 주식과 해외 주식의 지원 범위도 다르다. 미국 대형주는 비교적 많이 지원되지만, 중소형주나 일부 ETF는 제한될 수 있다. 매수 계획을 세우기 전에 실제 거래 가능 여부를 먼저 확인하는 편이 좋다.
의결권은 제한되는 경우가 많다 &nbsp; 소수점 주식은 1주를 온전히 보유한 것이 아니라 지분을 나누어 보유하는 구조다. 그래서 주주총회에서 직접 의결권을 행사하기 어렵거나 제한되는 경우가 많다.
소액 투자자에게 의결권이 당장 크게 중요하지 않을 수는 있다. 하지만 &ldquo;소수점으로 샀으니 일반 주식과 모든 권리가 똑같다&quot;고 생각하면 안 된다. 배당, 의결권, 주식 이전 가능 여부는 구분해서 봐야 한다.
다른 증권사로 바로 옮기기 어렵다 &nbsp; 소수점 주식은 다른 증권사로 그대로 옮기기 어려운 경우가 많다. 증권사를 바꾸려면 소수점 수량을 매도한 뒤 현금으로 옮겨야 할 수 있다.
다만 소수점 수량이 모여 1주가 되고 일반 주식으로 전환되면 이후에는 일반 주식처럼 이전할 수 있는 경우가 많다. 이 부분 역시 증권사별 정책 차이가 있으니 장기 보유 목적이라면 미리 확인하는 것이 좋다.
소수점 거래 방법은 앱에서 서비스 신청 후 주문하면 된다 &nbsp; 소수점 거래는 보통 증권사 MTS 앱에서 신청하고 이용한다. 주식 계좌가 있다고 해서 자동으로 소수점 거래가 가능한 것은 아니며, 별도 약관 동의나 서비스 신청이 필요한 경우가 많다.
1. 증권사 앱에서 소수점 거래 서비스를 신청한다 &nbsp; 이용 중인 증권사 앱을 열고 검색창에 &ldquo;소수점&rdquo;, &ldquo;주식 모으기&rdquo;, &ldquo;정기 구매&rdquo; 같은 단어를 입력한다. 관련 메뉴로 이동하면 서비스 신청 화면이 나온다. 약관을 확인하고 동의하면 이용할 수 있다.
해외 주식 소수점 거래를 이용하려면 해외 주식 거래 신청, 외화 거래 약정, 환전 관련 동의가 추가로 필요할 수 있다.
2. 사고 싶은 종목을 선택한다 &nbsp; 소수점 거래 메뉴에서 종목을 검색한다. 이때 일반 주문 화면에서 보이는 종목이라도 소수점 거래 메뉴에서는 지원되지 않을 수 있다. 거래 가능 종목인지 먼저 확인해야 한다.
초보자라면 처음부터 잘 모르는 테마주를 고르기보다 실적과 사업 구조를 이해할 수 있는 기업, 또는 분산된 ETF부터 살펴보는 편이 현실적이다.
3. 금액 또는 수량을 입력해 주문한다 &nbsp; 소수점 거래는 보통 &ldquo;몇 주를 살지&quot;보다 &ldquo;얼마를 살지&quot;를 입력하는 방식이 편하다. 예를 들어 1만 원을 입력하면 현재 가격을 기준으로 몇 주에 해당하는지 자동 계산된다.
다만 주문 즉시 체결된다고 생각하면 안 된다. 소수점 주문은 여러 사람의 주문을 모아 정해진 시간에 한 번에 체결하는 방식이 많다. 그래서 일반 주식처럼 원하는 가격에 지정가 주문을 넣거나, 호가창을 보며 바로 체결시키는 거래와는 다르다.
주식 모으기는 소수점 거래와 잘 맞는 활용법이다 &nbsp; 소수점 거래는 주식 모으기, 정기 구매 기능과 잘 맞는다. 매일, 매주, 매월 일정 금액을 정해두면 증권사 앱이 자동으로 해당 종목을 매수해준다. 예를 들어 매주 월요일마다 1만 원씩 특정 ETF를 사는 식이다.
이 방식의 장점은 매수 타이밍에 대한 부담을 줄일 수 있다는 점이다. 주가가 낮을 때는 같은 금액으로 더 많은 수량을 사고, 주가가 높을 때는 적은 수량을 사게 된다. 한 번에 큰돈을 넣는 것이 부담스럽다면 정기적으로 나누어 사는 방식이 심리적으로도 편하다.
하지만 자동 매수가 항상 좋은 결과를 보장하는 것은 아니다. 기업의 실적이 나빠졌거나 투자 아이디어가 바뀌었는데도 계속 자동 매수하면 손실이 커질 수 있다. 주식 모으기를 설정했다면 최소 한 달에 한 번은 종목 상황과 내 투자 목적을 점검하는 것이 좋다.
소액 투자라도 원칙은 필요하다 &nbsp; 소수점 거래는 금액이 작기 때문에 가볍게 생각하기 쉽다. 하지만 5,000원, 1만 원도 반복되면 의미 있는 투자금이 된다. 시작할 때 아래 기준 정도는 정해두는 것이 좋다.
매수할 종목을 고른 이유 한 달에 투자할 총금액 정기 매수 주기 수수료와 환전 비용 언제 점검하고 언제 중단할지에 대한 기준 소수점 거래의 목적은 단순히 &ldquo;비싼 주식을 조금 사는 것&quot;에 그치지 않는다. 초보자에게는 투자 습관을 만들고, 시장 움직임을 직접 경험하고, 내 성향을 파악하는 연습 도구가 될 수 있다.
정리 &nbsp; 소수점 거래는 주식을 1주 단위가 아니라 원하는 금액이나 소수 수량으로 나누어 살 수 있는 방식이다. 한 주 가격이 부담되는 종목도 소액으로 접근할 수 있고, 여러 종목에 나누어 투자하기 쉽다는 장점이 있다.
반대로 수수료, 거래 가능 종목, 체결 방식, 의결권, 증권사 이전 제한 같은 단점도 있다. 특히 소수점 주문은 일반 주식처럼 실시간으로 자유롭게 거래하기 어렵고, 증권사별 정책 차이도 크다.
처음 주식을 시작한다면 소수점 거래를 작은 연습장처럼 활용해볼 만하다. 다만 금액이 작아도 투자 원칙은 필요하다. 어떤 종목을 왜 사는지, 얼마나 자주 살지, 수수료는 얼마인지 확인하면서 천천히 시작하는 편이 좋다.
자주 묻는 질문 &nbsp; 소수점 거래는 국내 주식도 가능한가? &nbsp; 가능하다. 다만 모든 국내 주식이 되는 것은 아니고, 증권사마다 지원 종목이 다르다. 미국 주식 소수점 거래를 더 넓게 제공하는 증권사도 있으므로 원하는 종목이 실제로 가능한지 앱에서 확인해야 한다.
ISA, 연금저축, IRP에서도 소수점 거래가 가능한가? &nbsp; 일반적으로 소수점 거래는 종합매매계좌 같은 일반 위탁 계좌에서 주로 지원된다. ISA, 연금저축, IRP 같은 세제 혜택 계좌에서는 소수점 매매가 제한될 수 있다. 계좌별 가능 여부는 증권사 안내를 확인해야 한다.
소수점 주식을 팔면 돈은 언제 들어오나? &nbsp; 국내 주식은 보통 일반 주식과 마찬가지로 매도일로부터 2영업일 뒤에 결제된다. 해외 주식은 국가와 증권사 정책에 따라 결제일과 환전 처리 방식이 다를 수 있다.
소수점으로 산 주식도 배당을 받을 수 있나? &nbsp; 배당이 있는 종목이라면 보유 지분만큼 배당을 받을 수 있다. 예를 들어 0.5주를 보유했다면 1주 배당금의 절반 수준으로 계산되는 식이다. 단, 소수 단위 배당금 처리 기준은 증권사별로 다를 수 있다.`}).add({id:104,href:"/posts/how-to-open-stock-account/",title:"주식 시작하는 법: 증권사 계좌 개설부터 MTS, 계좌...",description:"주식 투자를 처음 시작하는 사람이 알아야 할 주식의 뜻, 증권사 계좌 개설 방법, 종합매매계좌·CMA·ISA 차이, MTS와 HTS 개념을 쉽게 정리했다.",content:`주식을 시작하려고 마음먹으면 가장 먼저 막히는 부분이 계좌다. &ldquo;증권사 계좌를 만들라는데 은행 계좌랑 다른 건가?&rdquo;, &ldquo;MTS는 또 뭐고 HTS는 뭘까?&rdquo;, &ldquo;종합매매계좌, CMA, ISA 중에 뭘 골라야 하지?&rdquo; 같은 질문이 자연스럽게 생긴다.
사실 주식 투자의 첫 단계는 복잡한 차트 분석이 아니다. 주식이 무엇인지 이해하고, 내 명의의 증권 계좌를 만들고, 소액으로 주문 과정을 익히는 것이다. 처음부터 모든 상품을 알 필요는 없지만, 계좌 종류와 거래 방식은 최소한 구분할 수 있어야 한다.
이 글에서는 주식 초보자가 증권사 계좌를 만들기 전에 알아야 할 기본 개념을 차근차근 정리하였다. 투자 판단은 각자 해야 하지만, 시작 방법 자체가 어렵게 느껴지지 않도록 현실적인 순서로 설명한다.
주식은 회사의 일부를 사는 것이다 &nbsp; 주식은 쉽게 말해 회사의 일부를 소유할 수 있는 권리다. 회사가 사업을 키우려면 큰돈이 필요하고, 이 돈을 여러 투자자에게서 모으면서 지분을 나누어 준다. 그 지분이 주식이다.
주식을 가진 사람은 주주가 된다. 주주는 회사의 이익 일부를 배당으로 받을 수 있고, 주주총회에서 의결권을 행사할 수도 있다. 물론 모든 회사가 배당을 주는 것은 아니고, 주가가 항상 오르는 것도 아니다.
주식 투자를 하는 이유는 기업이 성장하면 내가 가진 주식의 가치도 함께 올라갈 수 있기 때문이다. 예금보다 높은 수익을 기대할 수 있지만, 반대로 기업 실적이 나빠지거나 시장 분위기가 흔들리면 손실도 날 수 있다.
처음 주식을 시작할 때는 &ldquo;돈을 벌 수 있다&quot;보다 &ldquo;손실이 날 수 있다&quot;를 먼저 받아들이는 것이 좋다. 이 생각이 있어야 무리한 금액을 넣지 않고, 계좌를 만든 뒤에도 차분하게 배울 수 있다.
주식 거래를 하려면 증권사 계좌가 필요하다 &nbsp; 은행 계좌만으로는 주식을 직접 사고팔 수 없다. 주식 거래를 하려면 증권사 계좌가 필요하다. 증권사는 투자자가 주식, ETF, 채권, 펀드 같은 금융투자상품을 거래할 수 있도록 중개하는 회사다.
계좌 개설 방법은 크게 오프라인과 비대면으로 나뉜다. 요즘은 대부분 스마트폰 앱으로 비대면 계좌를 만든다. 신분증과 본인 명의 휴대폰, 본인 명의 은행 계좌만 준비되어 있으면 집에서도 진행할 수 있다.
오프라인 계좌 개설 &nbsp; 오프라인으로 만들려면 가까운 증권사 지점을 방문하면 된다. 본인 명의 계좌라면 보통 신분증이 필요하고, 서명이나 도장을 요구할 수 있다. 가족이 대신 계좌를 만들 때는 가족관계증명서, 위임장 등 추가 서류가 필요할 수 있으니 방문 전 확인하는 편이 낫다.
비대면 계좌 개설 &nbsp; 비대면 계좌 개설은 증권사 앱에서 진행한다. 보통 아래 순서로 이어진다.
원하는 증권사 앱을 설치한다. 계좌 개설 메뉴에서 상품을 선택한다. 휴대폰 본인 인증을 한다. 신분증을 촬영해 제출한다. 본인 명의 은행 계좌로 추가 인증을 한다. 계좌 개설 완료 후 투자금 입금과 거래 신청을 진행한다. 해외 주식을 거래하려면 별도 신청이 필요한 경우가 많다. 국내 주식만 살 생각이라면 기본 계좌로 시작해도 되지만, 미국 주식까지 고려한다면 해외 주식 거래 신청, 환전 방식, 수수료도 함께 확인해야 한다.
처음 보는 주식 계좌 종류 정리 &nbsp; 증권사 앱에서 계좌를 만들려고 하면 계좌 이름이 여러 개 나온다. 처음에는 전부 비슷해 보이지만, 목적이 조금씩 다르다. 초보자는 아래 세 가지부터 구분하면 된다.
계좌 종류 쉽게 말하면 주로 쓰는 목적 종합매매계좌 가장 기본적인 주식 거래 계좌 국내 주식, 해외 주식, ETF, 공모주 거래 CMA 증권사의 입출금형 통장에 가까운 계좌 대기자금 보관, 이자 수익, 입출금 중개형 ISA 세제 혜택을 받을 수 있는 투자 계좌 장기 투자, 절세 목적 투자 종합매매계좌 &nbsp; 종합매매계좌는 가장 기본적인 증권 계좌다. 국내 주식, 해외 주식, ETF, 공모주 청약 등 대부분의 일반적인 투자 거래가 이 계좌를 중심으로 이루어진다.
처음 주식 거래를 해보려는 사람이라면 종합매매계좌를 먼저 이해하면 된다. 증권사마다 이름은 조금 다를 수 있지만, 주식 매수와 매도를 위한 기본 계좌라고 보면 쉽다.
CMA &nbsp; CMA는 증권사에서 제공하는 입출금 계좌 성격이 강하다. 돈을 잠깐 넣어두어도 이자가 붙을 수 있고, 필요할 때 투자금으로 옮겨 쓰기 편하다.
다만 CMA도 예금자보호 여부, 투자 대상, 수익 구조가 상품별로 다를 수 있다. &ldquo;하루만 맡겨도 이자&quot;라는 문구만 보고 만들기보다, 어떤 유형의 CMA인지 확인하는 습관이 필요하다.
중개형 ISA &nbsp; 중개형 ISA는 한 계좌 안에서 예금성 상품, 펀드, ETF, 국내 주식 등을 운용할 수 있는 개인종합자산관리계좌다. 일정 요건을 충족하면 수익 일부에 대해 세제 혜택을 받을 수 있어 절세 계좌로 자주 언급된다.
다만 ISA는 의무 보유 기간, 납입 한도, 세제 혜택 조건을 함께 봐야 한다. 단기 매매보다 일정 기간 돈을 묶어둘 수 있는 사람에게 더 어울린다.
MTS와 HTS는 거래하는 도구의 차이다 &nbsp; 계좌를 만들다 보면 MTS와 HTS라는 말을 자주 보게 된다. 둘 다 주식을 거래하는 프로그램이지만 사용하는 기기가 다르다.
MTS는 &ldquo;Mobile Trading System&quot;의 줄임말이다. 스마트폰 앱으로 주식을 사고팔 수 있는 시스템이다. 계좌 조회, 매수, 매도, 입출금, 관심종목 등록, 해외 주식 거래까지 대부분의 기능을 앱에서 처리할 수 있다.
HTS는 &ldquo;Home Trading System&quot;의 줄임말이다. 컴퓨터에 설치해 사용하는 주식 거래 프로그램이다. 화면을 넓게 쓰면서 여러 차트와 호가창, 뉴스, 주문창을 동시에 볼 수 있어 적극적으로 매매하는 투자자가 많이 사용한다.
구분 MTS HTS 사용 기기 스마트폰 PC 장점 언제 어디서나 간편하게 거래 넓은 화면, 다양한 분석 도구 적합한 사람 초보자, 직장인, 간단한 장기 투자자 차트와 주문을 자주 보는 투자자 처음 시작하는 사람은 MTS만으로도 충분하다. 오히려 너무 많은 화면을 한 번에 보면 투자 판단보다 단기 가격 움직임에 더 신경 쓰게 된다. 계좌 개설, 입금, 소액 매수, 매도, 체결 확인 정도를 앱에서 익힌 뒤 필요할 때 HTS를 사용해도 늦지 않다.
계좌를 만들기 전에 꼭 정해야 할 것 &nbsp; 주식 계좌 개설은 몇 분이면 끝날 수 있다. 하지만 계좌를 만든 뒤 아무 기준 없이 매수 버튼을 누르면 시작부터 흔들리기 쉽다. 계좌를 만들기 전에는 최소한 아래 기준을 정해두는 것이 좋다.
처음 투자금은 얼마로 할 것인가? 생활비와 비상금을 제외한 돈인가? 국내 주식부터 할 것인가, 해외 주식도 할 것인가? 개별 종목을 살 것인가, ETF부터 살 것인가? 손실이 났을 때 언제까지 버틸 수 있는 돈인가? 초보자에게 가장 현실적인 방법은 소액으로 시작하는 것이다. 예를 들어 첫 달에는 큰돈을 넣지 않고, 관심 있는 ETF나 우량주를 1주만 사보면서 주문 과정과 계좌 화면에 익숙해지는 식이다.
주식 투자는 계좌를 빨리 만드는 사람이 이기는 게임이 아니다. 오래 이해하고, 실수를 줄이고, 감정적으로 매매하지 않는 사람이 유리하다. 계좌 개설은 시작점일 뿐이고, 진짜 중요한 것은 투자 원칙이다.
마무리 &nbsp; 주식 투자를 시작하려면 먼저 증권사 계좌가 필요하다. 가장 기본은 종합매매계좌이고, 대기자금을 관리하려면 CMA, 절세 목적의 장기 투자를 생각한다면 중개형 ISA도 함께 살펴볼 수 있다.
거래 도구는 스마트폰 앱인 MTS와 PC 프로그램인 HTS로 나뉜다. 처음에는 MTS만으로도 충분하며, 계좌 개설부터 소액 거래까지 차근차근 익히는 것이 좋다.
처음부터 수익률에만 집중하면 조급해진다. 주식은 회사의 일부를 사는 투자이고, 가격은 언제든 흔들릴 수 있다. 그래서 계좌를 만들기 전에 투자금, 투자 기간, 거래 상품, 손실 감당 범위를 먼저 정하는 습관이 필요하다.
자주 묻는 질문 &nbsp; 증권사 계좌는 여러 개 만들어도 될까? &nbsp; 가능하다. 증권사별 수수료, 이벤트, 공모주 청약 가능 여부가 다르기 때문에 여러 계좌를 쓰는 사람도 많다. 다만 처음부터 너무 많이 만들면 관리가 어려워질 수 있으니, 초보자는 주거래 증권사 한 곳에서 시작해도 충분하다.
만든 주식 계좌를 다른 증권사로 옮길 수 있을까? &nbsp; 계좌 자체를 그대로 옮기는 것은 어렵다. 대신 보유 중인 주식을 다른 증권사 계좌로 옮기는 주식 이체 서비스는 이용할 수 있다. 이 경우 수수료나 처리 기간이 생길 수 있으니, 옮기기 전에 각 증권사 조건을 확인해야 한다.
해외 주식도 같은 계좌에서 살 수 있을까? &nbsp; 대부분의 증권사 종합매매계좌에서 해외 주식 거래를 신청하면 가능하다. 다만 해외 주식은 환전, 거래 시간, 세금, 수수료가 국내 주식과 다르다. 미국 주식을 살 생각이라면 해외 주식 거래 신청뿐 아니라 환율과 양도소득세도 함께 공부하는 것이 좋다.`}).add({id:105,href:"/posts/stock-deposit/",title:"주식 예수금 뜻: D+2 출금, 주문가능금액, 미수금까...",description:"주식 예수금의 뜻과 D+2 출금 구조, 주문가능금액과 출금가능금액의 차이, 미수금과 반대매매 위험까지 초보자 눈높이로 정리했다.",content:`주식을 처음 팔아보면 이상한 순간이 온다. 분명히 매도 체결은 됐는데 은행 계좌로 바로 돈을 빼려고 하면 출금 가능 금액이 늘어나지 않는다. 앱에는 예수금, D+1, D+2, 주문가능금액 같은 말이 같이 나오니 더 헷갈린다.
주식 예수금은 어렵게 보면 증권 계좌 안의 대기 자금이고, 쉽게 보면 아직 주식을 사는 데 쓰지 않은 현금이다. 다만 일반 입출금 통장 잔액과 완전히 같지는 않다. 주식 거래에는 체결일과 실제 결제일 사이의 시간이 있기 때문이다.
이 글에서는 주식 예수금이 무엇인지, 왜 주식을 팔아도 바로 출금되지 않는지, 주문가능금액과 출금가능금액은 어떻게 다른지 차근차근 정리하였다. 초보자가 특히 조심해야 할 미수금과 반대매매도 함께 다룬다.
주식 예수금은 증권 계좌에 있는 현금이다 &nbsp; 주식 예수금은 투자자가 주식 매매를 위해 증권사 계좌에 넣어둔 돈이다. 아직 주식을 사는 데 쓰지 않은 현금 잔액이라고 보면 된다.
예를 들어 증권 계좌에 100만 원을 입금하고 아직 아무 주식도 사지 않았다면 예수금은 100만 원이다. 이 돈으로 국내 주식, 해외 주식, ETF, 펀드 같은 금융상품을 살 수 있고, 조건이 맞으면 은행 계좌로 출금할 수도 있다.
다만 예수금은 한 가지 숫자로만 보면 안 된다. 증권사 앱에서는 보통 현재 예수금, D+1 예수금, D+2 예수금처럼 날짜별 금액을 보여준다. 이유는 주식 거래가 체결 즉시 완전히 끝나는 구조가 아니기 때문이다.
현재 예수금은 지금 계좌에 실제로 있는 현금에 가깝다. 반면 D+1, D+2 예수금은 이미 매매가 체결되었지만 아직 결제 절차가 끝나지 않은 금액까지 반영한 숫자다. 그래서 같은 계좌 안에서도 &ldquo;주식을 살 수 있는 돈&quot;과 &ldquo;바로 뺄 수 있는 돈&quot;이 다르게 보일 수 있다.
D+2는 거래일로부터 2영업일 뒤를 뜻한다 &nbsp; 국내 주식은 보통 매매 체결일과 실제 결제일 사이에 2영업일의 차이가 있다. 여기서 D는 거래한 날이고, D+2는 거래일로부터 영업일 기준 이틀 뒤라는 뜻이다. 증권사나 자료에 따라 T+2라고도 쓰는데, 의미는 거의 같다.
예를 들어 월요일에 주식을 팔았다면 화요일이 D+1, 수요일이 D+2가 된다. 그래서 별도 공휴일이 없다면 수요일부터 매도 대금을 출금할 수 있다.
금요일에 주식을 팔았다면 계산이 조금 달라진다. 토요일과 일요일은 영업일이 아니므로 제외한다. 금요일 매도분의 D+1은 다음 주 월요일, D+2는 다음 주 화요일이다.
매도한 날 D+1 D+2 출금 가능일 월요일 화요일 수요일 화요일 수요일 목요일 수요일 목요일 금요일 목요일 금요일 다음 주 월요일 금요일 다음 주 월요일 다음 주 화요일 중간에 공휴일이 있으면 그만큼 더 밀릴 수 있다. 그래서 주식 매도 대금을 생활비, 카드값, 대출 상환금처럼 날짜가 정해진 돈으로 쓸 예정이라면 최소 2영업일의 여유를 두는 편이 좋다.
주문가능금액과 출금가능금액은 다르다 &nbsp; 초보자가 가장 많이 헷갈리는 부분이 여기다. 주식을 팔면 그 돈으로 다른 주식을 바로 살 수 있는 경우가 많다. 하지만 그 돈을 은행 계좌로 바로 출금할 수 있는 것은 아니다.
주문가능금액은 주식이나 ETF 등을 살 수 있는 금액이다. 매도 체결이 끝난 돈은 아직 계좌 밖으로 나갈 수 없더라도, 시장 안에서는 다시 투자에 사용할 수 있다.
출금가능금액은 은행 계좌로 실제 이체할 수 있는 금액이다. 국내 주식을 매도한 돈은 보통 D+2가 되어야 출금가능금액에 제대로 반영된다.
예를 들어 현재 예수금이 50만 원이고, 월요일에 보유 주식을 100만 원어치 팔았다고 가정해보자. 매도 직후 주문가능금액은 150만 원으로 보일 수 있다. 이 돈으로 다른 주식을 사는 것은 가능하다. 하지만 은행 계좌로 출금할 수 있는 금액은 아직 50만 원뿐이고, 100만 원 매도 대금은 수요일이 되어야 출금할 수 있다.
구분 월요일 매도 직후 수요일 D+2 현재 예수금 50만 원 150만 원 주문가능금액 150만 원 150만 원 출금가능금액 50만 원 150만 원 이 차이를 모르면 &ldquo;내 돈이 왜 안 빠지지?&rdquo; 하고 당황하기 쉽다. 돈이 사라진 것이 아니라 결제 절차가 끝나기 전이라 출금만 막혀 있는 상태라고 이해하면 된다.
예수금을 넘겨 사면 미수금이 생길 수 있다 &nbsp; 예수금은 내가 자율적으로 쓸 수 있는 투자 예산에 가깝다. 문제는 일부 계좌나 주문 설정에서는 예수금보다 많은 금액의 주문이 가능해 보일 때가 있다는 점이다. 이때 실제 보유 현금보다 많이 주식을 사면 미수금이 생길 수 있다.
미수금은 쉽게 말해 증권사에 갚아야 할 부족 금액이다. 내가 가진 현금보다 더 많이 매수했기 때문에 결제일까지 부족한 돈을 채워 넣어야 한다.
예를 들어 계좌에 100만 원이 있는데 150만 원어치 주식을 샀다면 50만 원이 부족하다. 이 부족분을 정해진 시점까지 입금하지 않으면 증권사가 보유 주식을 강제로 팔아 부족 금액을 회수할 수 있다. 이것이 반대매매다.
반대매매는 투자자가 원하는 가격이나 타이밍을 기다려주지 않는다. 주가가 떨어진 상태에서 강제로 팔리면 손실이 커질 수 있고, 계좌 관리에도 큰 부담이 된다. 초보자는 주문 전에 &ldquo;현금 주문&rdquo;, &ldquo;미수 사용 여부&rdquo;, &ldquo;증거금률&rdquo; 같은 설정을 확인하는 습관을 들이는 것이 좋다.
주식 앱에서 예수금이 마이너스로 보이거나 미수금이 표시된다면 가볍게 넘기면 안 된다. 부족 금액을 입금하거나 보유 주식을 일부 매도해 결제 문제를 빨리 해소해야 한다.
해외 주식 예수금은 국가와 증권사 기준을 같이 봐야 한다 &nbsp; 해외 주식도 매도 직후 바로 출금되지 않는다는 점은 국내 주식과 비슷하다. 다만 결제 주기, 통화, 환전, 국내 증권사의 처리 시간이 함께 얽히기 때문에 국내 주식보다 더 헷갈릴 수 있다.
미국 주식은 2024년 5월 28일부터 일반적인 결제 주기가 T+1로 단축되었다. 즉 미국 시장 제도상으로는 거래일 다음 영업일에 결제가 이루어지는 구조다. 하지만 한국 투자자가 국내 증권사 앱으로 미국 주식을 매도했을 때 실제 원화 출금 가능 시점은 환전 가능 시간, 달러 입금 반영 시간, 증권사 정책에 따라 달라질 수 있다.
해외 주식을 팔면 대개 매도 대금은 먼저 외화 예수금으로 잡힌다. 미국 주식이면 달러 예수금으로 보이는 식이다. 이 돈으로 다시 해외 주식을 살 수도 있고, 원화로 환전한 뒤 출금할 수도 있다. 다만 매도 직후 바로 환전이나 출금이 되지 않을 수 있으므로 증권사별 안내를 확인해야 한다.
해외 주식은 한국 공휴일뿐 아니라 해당 국가의 휴장일도 영향을 준다. 한국은 평일이어도 미국 시장이 휴장이라면 결제나 주문 가능 시점이 달라질 수 있다. 특히 급하게 돈을 써야 하는 상황이라면 해외 주식 매도 대금을 곧바로 현금처럼 계산하지 않는 편이 안전하다.
미국 T+1 결제 제도 확인 &nbsp; 예수금 확인 습관이 투자 실수를 줄인다 &nbsp; 예수금은 단순한 잔고 숫자가 아니다. 내 돈이 지금 어디까지 처리되었고, 어떤 용도로 쓸 수 있는지 보여주는 계좌 관리의 기본 정보다.
주식을 팔았으면 출금가능금액이 언제 늘어나는지 확인해야 한다. 다른 주식을 바로 살 예정이라면 주문가능금액을 보면 되고, 은행 계좌로 돈을 빼야 한다면 출금가능금액을 봐야 한다.
처음에는 아래 순서로 확인하면 실수를 줄일 수 있다.
현재 예수금이 얼마인지 본다. 주문가능금액과 출금가능금액을 구분한다. 매도 대금은 D+2 이후 출금된다고 생각한다. 미수 사용 여부와 증거금 설정을 확인한다. 해외 주식은 결제 주기와 환전 가능 시간을 따로 확인한다. 주식 투자는 종목을 고르는 일만큼 계좌를 관리하는 일도 중요하다. 매수와 매도 버튼을 누르기 전에 예수금 화면을 한 번 더 보는 습관만 있어도 불필요한 미수, 출금 지연, 반대매매 위험을 상당히 줄일 수 있다.
마무리 &nbsp; 주식 예수금은 증권 계좌 안에 있는 투자 대기 자금이다. 현재 예수금은 실제 현금 잔액에 가깝고, D+1·D+2 예수금은 결제 예정 금액을 반영한 숫자다.
국내 주식은 보통 매도 후 2영업일 뒤에 출금할 수 있다. 하지만 매도 대금은 주문가능금액에 먼저 반영될 수 있어, 출금은 안 되지만 다른 주식을 사는 데는 사용할 수 있다.
초보자가 특히 조심해야 할 것은 예수금을 넘겨 매수하면서 생기는 미수금이다. 미수금이 정리되지 않으면 반대매매로 이어질 수 있으므로, 처음에는 실제 보유 현금 안에서만 주문하는 습관이 좋다.
주식 앱에서 예수금, 주문가능금액, 출금가능금액을 구분해서 보는 것만으로도 계좌 관리가 훨씬 안정된다. 수익률을 보기 전에 돈의 사용 가능 시점을 먼저 확인하는 태도가 필요하다.
자주 묻는 질문 &nbsp; 주식을 팔면 언제 은행 계좌로 출금할 수 있을까? &nbsp; 국내 주식은 보통 매도일로부터 2영업일 뒤에 출금할 수 있다. 월요일에 팔면 수요일, 금요일에 팔면 주말을 제외하고 다음 주 화요일이 되는 식이다. 중간에 공휴일이 있으면 출금 가능일이 더 늦어질 수 있다.
주식을 판 돈으로 같은 날 다른 주식을 살 수 있을까? &nbsp; 가능한 경우가 많다. 매도 대금은 출금가능금액에는 바로 반영되지 않아도 주문가능금액에는 반영될 수 있다. 그래서 같은 날 다른 종목을 살 수 있지만, 은행 계좌로 빼는 것은 D+2 이후에 가능하다고 보면 된다.
예수금에 이자가 붙을까? &nbsp; 증권사와 계좌 종류에 따라 예탁금 이용료 같은 형태로 이자가 지급될 수 있다. 다만 일반 예금처럼 생각하면 안 된다. 지급 기준, 금리, 지급 시점은 증권사마다 다르므로 계좌 안내 화면에서 확인하는 것이 정확하다.`}).add({id:106,href:"/docs/stock/glossary/",title:"주식 용어",description:"초보자를 위한 다양한 주식 용어 정리하여 설명한다.",content:`주식 시장 공통 용어 &nbsp; 턴어라운드(Turnaround) &nbsp; 기업회생. 적자를 계속해서 기록하던 기업이 실적이 크게 개선되고 이와 더불어 주가도 크게 개선된 경우를 말한다. 어닝 서프라이즈(Earning Suprise) &nbsp; 시장에서 예상했던 것보다 우수한 실적을 발표했을 때를 말한다. 지난 분기보다 반드시 몇 배 이상 높아야 한다는 의미가 아니라 저조한 실적이라도 시장의 예상을 뛰어넘었다는 의미이다. 펀더멘탈(Fundamental) &nbsp; 한 나라의 경제 상태를 표현하는데 있어 가장 기초적인 자료가 되는 성장률, 물가상승률, 실업률, 경상수지 등의 주요 거시 경제지표를 말한다. 기업의 펀더멘탈이라고 할 때는 재무제표상의 각 요소들이 기업의 펀더멘탈을 나타낸다. (매출, 이익율, 부채 등) 시가총액(시총) &nbsp; 기업의 경우 기업이 발행한 총 주식 수에 그때의 주가를 곱하여 산출한다. 시가총액 = 전체 주식 수 X 1주당 주가 우리나라 상장사의 모든 시가총액을 더하면 그것이 곧 우리나라 코스피의 시가총액, 코스닥의 시가총액이다. 공시 &nbsp; 사업내용이나 재무상황, 영업실적 등 기업의 내용을 투자자 등 이해관계자에게 알리는 제도이다. HTS &nbsp; Home Trading System, 홈 트레이딩 시스템 개인 투자자가 PC로 주식 거래를 할 수 있는 프로그램을 말한다. MTS(Mobile Trading System)는 모바일로 거래를 할 수 있게 하는 프로그램을 말한다. 서킷브레이커 &nbsp; 조건에 맞는 상황이 오면 일정시간 동안 주식시장 거래를 전면 중단시키는 제도이다. 코스피나 코스닥지수가 전일 대비 10% 이상 폭락한 상태가 1분간 지속하는 경우 발동된다. 과열된 주식시장을 진정시키기 위한 쿨다운 타임이라 보시면 된다. 코스피(KOSPI) &nbsp; Korea Composite Stock Price Index, 국내종합주가지수 증권거래소에 상장된 주식 시장 자체를 뜻하기도 하고, 주식 가격을 표시한 지수를 말하기도 한다. 대기업 등 우량한 주식이 거래되는 시장을 말한다. 코스닥(KOSDAQ) &nbsp; Korea Securities Dealers Automated Quotation IT, 바이오, 엔터테인먼트 등 코스피보다 작은 중소, 벤처기업의 주식들이 주로 거래되는 시장을 말한다. 나스닥(NASDAQ) &nbsp; National Association of Securities Dealers Automated Quotations 나스닥은 미국의 주요 주식 시장 중 하나로서, 기술 기업을 중점으로 상장된 회사들이 거래되는 전자 거래 시장을 지칭한다. 1971년에 설립되었다. 나스닥은 전통적인 증권 거래소와는 다르게 컴퓨터 네트워크를 통한 전자 거래 시스템을 기반으로 운영되고 있다. 이는 주로 기술 기업들과 성장 기업들이 상장되어 높은 기술 혁신과 성장 가능성을 지닌 기업들이 활발하게 거래되는 특징이 있다. 나스닥은 주식뿐만 아니라 다양한 금융 상품도 거래되며, 기술적인 특징과 현대적인 거래 방식으로 유명하다. 나스닥 100 지수(NASDAQ-100)는 나스닥 시장에서 가장 큰 100개 기업을 대표하는 지수로 자주 언급되고 있다. 이는 기술, 헬스케어, 소프트웨어 등 다양한 산업 부문에서 활동하는 기업들로 구성되어 있다. 보합(No Charge) &nbsp; 주가가 오르거나 내리지 않고 변동이 없는 상태를 말한다. 특히 시세가 상승한 채로 하락하지 않고 보합인 상태를 강보합, 시세가 하락한 채 상승하지 않고 보합인 상태를 약보합이라고 한다. 주식 매매 시 사용 용어 &nbsp; 매매 &nbsp; 주식을 사고 파는 것을 말한다. 매수 &nbsp; 매매 중 주식을 사는 것을 말한다. 매도 &nbsp; 가지고 있는 주식을 파는 것을 말한다. 체결 &nbsp; 매도, 매수거래를 성립된 것을 말한다. 배당 &nbsp; 기업이 이익의 일부분을 주주에게 일정 부분 투자의 대가로 돌려주는 것을 말한다. 모든 기업이 배당을 하는 것은 아니다. 또한 기업의 사정에 따라 배당 금액은 늘어날수도, 줄어들수도, 아예 중단할 수도 있다. 배당율 &nbsp; 1주당 배당금액 ÷ 1주 주가. 주가가 계속 변하기 때문에 어느 시점에 매수하느냐에 따라 배당금액이 바뀐다. 배당주 &nbsp; 배당을 주는 주식이다. 배당락 &nbsp; 배당이 확정된 후 배당 목적으로 주식을 매수했던 투자자들이 다시 배당주를 팔며 주가가 하락하는 현상을 말한다. 거래량 &nbsp; 주식시장에서 매매된 주식의 수를 말한다. 거래량이 1,000주라고 하면 매도 1,000주, 매수량이 1,000주라는 의미가 된다. &ldquo;거래량은 주가에 선행한다&quot;는 유명한 말이 있다. 이는 거래량의 변화는 곧 주가에 영향을 준다는 이야기이다. 당연한 진리 같지만, 다른 지표의 움직임에 빠져 거래량이란 지표가 주는 시그널을 간과하기 쉽다. 거래대금 &nbsp; 거래된 주식의 가격과 거래량을 곱한 금액을 말한다. 시가와 종가 &nbsp; 주식 시장은 아침 9시에 장을 열고, 오후 3시 30분에 마감한다. 시가는 주식시장이 열렸을 때 바로 그 순간의 주가를 말한다. 종가는 주식시장이 마감하는 순간의 주가를 말한다. 호가 &nbsp; 증권 시장에서 주식을 보유하는 사람이 매도하려는 가격, 주식을 사려는사람이 매수하려는 가격을 말한다. 즉, 주식 거래를 위해 가격을 제시하는 것을 말한다. 희망하는 가격, 내가 팔거나 사고 싶은 가격에 주문을 넣어두는 것이다. 호가창 &nbsp; 호가를 보여주는 창이다. 선물 &nbsp; 상품 또는 금융자산을 미리 결정된 가격으로 미래 일정시점에 인도·인수할 것을 약정한 거래를 말한다. 계약이기에 만기일에 따라 반드시 계약조건을 이행 해야 한다. 이를테면 지금이 1월이고 현재 1주에 만원인 주식을 3월에도 똑같이 1주를 만원에 팔겠다고 하고, 그것을 누군가 사겠다고 하는 것이다. 3월에 이 주식의 가격이 떨어지느냐, 오르느냐에 따라 매수/매도자의 희비가 갈린다. 만기일인 3월이 도래하면 계약조건에 따른 가격으로 거래가 이루어져야 한다. 옵션 &nbsp; 옵션은 선물과 비슷하나 계약 자체가 아니라 &ldquo;권리&quot;이다. 미래의 특정시기에 특정가격으로 팔거나 살 수 있는 권리를 사고 파는 것이다. 이는 &ldquo;사는 권리&quot;인 콜(call) 옵션과, &ldquo;파는 권리&quot;인 풋(put)옵션으로 나뉜다. 옵션을 매수한 사람은 &ldquo;계약&quot;이 아니라 &ldquo;권리&rdquo; 이기 때문에 권리를 행사하거나, 행사하지 않을 수 있다. &ldquo;옵션&quot;은 &ldquo;쫄리면 뒤질 수 있으나&rdquo;, &ldquo;선물&quot;은 &ldquo;쫄려도 뒤지지 못한다&rdquo; 거래 내용을 이행해야 한다. 유상증자 &nbsp; 기업이 주식을 추가로 발행하고 그 대가로 주가를 받는 것을 말한다. 무상증자 &nbsp; 기업이 주식을 주주들에게 대가 없이 추가로 나눠주는 것을 말한다. 회사의 이익잉여금이 많고, 회사의 주식인기를 높이기 위해 하는 경우가 있다. 감자 &nbsp; 시장에 발행한 주식을 줄이는 행위이다. 유상감자와 무상감자가 있다. 무상감자는 주주들에게 아무런 댓가를 주지 않고 주주가 가지 있는 주식의 개수를 타노스처럼 없애버리는 것이다. 이를테면 시장에 발행한 주식이 1천개면 그 중 500개로 2:1로 무상감자를 하는 경우가 있다. 무상감자를 하는 이유는 주식을 줄인만큼의 금액이 기업의 회계상 이익 잉여금으로 잡히는데 이것을 기업의 누적 적자를 상계하는데 쓴다. 최근 아시아나가 무상감자를 한 것이 큰 이슈였다. 회계상의 장난이다. 자사주매입 &nbsp; 회사가 자기 회사의 주식을 매수하는 행위이다. 주가가 올라가는 효과가 있다. 액면분할 &nbsp; 아메바처럼 현재 주식 1개를 여러개로 쪼개는 행위이다. 주식 1개의 가격이 너무 비싼 경우, 시장 유통을 더 활발하게 하기 위해 진행한다. (삼성, 애플의 사례) 손절 &nbsp; 손을 절단하는 것이 아니라 손해 본 주식을 손해 본 상태 그대로 파는 행위이다. 손을 절단하는 고통이 따라오기도 한다. 익절 &nbsp; 이익을 본 상태에서 주식을 파는 것을 말한다. 상상의 동물이다. 동시호가 &nbsp; 파는 사람과 사는 사람이 동시에 부르는 가격이다. 일반적으로 개장 5분전 가격을 말한다. 장 마감 &nbsp; 우리나라 주식시장의 경우 오전 9시에 시작한 주식시장이 오후 3시 30분에 닫히는 시점을 말한다. 상한가 &nbsp; 주가 일 최대 상승폭 30% 인데, 이 가격을 상한가라 한다. 하한가 &nbsp; 주가 일 최대 하락폭 30% 인데, 이 가격을 하한가라 한다. 데이 트레이딩(Day Trading) &nbsp; 당일 매매. 매수한 주식을 매수한 당일에 매도 하는 것을 말한다. 초 단위, 분 단위로 하는 매매를 일컬어 데이트레이딩이라 하기도 한다. 스캘핑(Scalping) &nbsp; 주식 보유시간을 통상 2~3분으로 하며 최단시간 내에 매수/매도를 하는것을 말한다. 외계인 &nbsp; 외국인 투자자의 별칭이다. 뇌동매매 &nbsp; 부화뇌동에서 파생된 말로 남들이 하는 대로 따라 사고, 따라 파는 것을 말한다. 상투 &nbsp; 주식이 더 이상 올라갈 곳이 없는 가장 높은 가격을 말한다. 우리나라 조상님의 머리 스타일에서 기원했다. 평단 &nbsp; 평균 단가이다. 하나의 주식을 수 차례에 걸쳐 매수했을 때 매수가의 평균을 말한다. 동전주 &nbsp; 동전으로도 살 수 있는 주식을 말한다. 매우 낮은 가격을 주식을 말한다. 잡주 &nbsp; 듣도 보도 못한 주식을 말한다. 테마주 &nbsp; 특정 이슈에 따라 주가의 움직임이 극적으로 움직이는 주식을 말한다. 예시로 &ldquo;문재인테마&rdquo;, &ldquo;대북테마&rdquo;, &ldquo;안철수테마&rdquo; 등이 있다. 우리나라에서는 주로 정치인과 관련된 테마가 많은 이슈가 된다. 예수금 &nbsp; 증권계좌에 넣어둔 현금이다. 증권계좌를 개설하고 그 계좌에 100만원을 넣어두면 예수금이 100만원이다. 여기서 알아두셔야 할 우리나라 주식 시장의 특징이 있다.
우리나라 주식은 주식을 매수하거나 매도할 때 실제로 돈이 출금되거나, 매수한 주식의 실물을 소유하게 도는 것은 D+2 거래일 때이다.
예수금 100만원을 가지고 삼성전자 주식 100만원어치를 사면 나의 보유주식 수는 바로 100만원어치가 되나, 실제 돈이 빠져 나가는 것은 D+2 거래일 뒤이다. 그러나 증권사 어플등에서 보면 거래가 체결됐다는 알람과 함께 내 주식계좌에 주식이 추가된 것을 볼 수 있다. 하지만 이는 전산상으로 선반영한 것이지 실제로 주식을 손에 쥐는 것은 D+2 거래일 뒤이다.
즉, 주식거래의 전산반영 시점과 실제로 거래가 모두 완료되는 시점은 D+2 거래일의 차이가 있다. 삼성전주 주식 100주를 사고, 증권사 어플에서 체결됐다고 하면 보유주식은 삼성전자 주식 100개가 보일 것이다. 하지만 예수금은 아직 빠져나가지 않은 상태이다. D+2 거래일에 실제로 돈이 인출된다. 또한 주식의 소유주로서 실제로 인증받는 것도 이 시점이다. 이 때문에 배당을 받으려 하시는분이 배당락일에 주식을 매수한다면 이미 늦게 되는 것이다. 주식의 소유주 이름이 D+2일에 비로소 새로 반영되기 때문이다.
100만원어치 주식을 보유하고 있다가 매도했다면 그 돈을 당일에는 인출할 수 없고 D+2 거래일 뒤에 출금할 수 있다. 하지만 해당 금액을 주식의 매수에 쓰는 것은 매도하자마자 바로 가능하다. 결국 우리가 실제로 돈을 뽑을 수 있는 보유현금은 모든 것이 반영되는 D+2 거래일의 예수금이다. 이 금액은 각 증권사 어플에서 확인할 수 있다. 현재 예수금이 100만원이어도 D+2 거래일 예수금이 120만원, 80만원 일수도 있다. 이 D+2 거래일의 예수금이 현재 전산으로 왔다갔다하고 있는 모든 거래를 반영한 최종 금액이다.
증거금 &nbsp; 증권(주식, 선물옵션 등 포함)을 거래할 때 거래제도에 따라 2일 또는 3일 후 주식과 현금의 교환이 이루어지는 후불제이므로 이러한 거래의 이행을 담보하기 위한 보증금 성격의 자금이다. 보통 해당 주가의 40% 정도만 증거금으로 가지고 있으면 주식을 매수할 수 있다. 삼성전자의 경우에는 주식 매수금액의 30%만 가지고 있어도 매수거래를 체결할 수 있다. 초보자인 경우에는 증거금을 100%로 해서 거래하는 것이 좋으며, 레버리지를 일으키고 싶으신 사람의 경우에는 증거금을 최대한 활용하여 본인이 가지고 있는 돈도다 더 많은 주식을 매수하기도 한다. 미수금 &nbsp; 증거금을 활용하여 주식을 매수한 다음 날까지 증거금의 나머지 금액을지급하지 않음 금액을 말한다. 100만원 주식을 증거금 40%인 40만원을 예수금으로 보유한 상태로 주식을 체결하였으면 매수한 다음날까지 60만원을 추가로 지급해야 한다. 갚지 못한 금액을 미수금이라 한다. 여기까지의 내용을 예시로 보겠다.
주식계좌에 현금 100만원 입금 증거금 : 0원 미수금 : 0원 예수금 : 100만원 증거금율 40%를 요구하는 주식을 한 주 매수했다. (1주 50만원) 증거금 : 20만원 미수금 : 30만원 예수금 : 80만원 D+2 거래일에는 결제까지 완료된다. 증거금 : 0원 미수금 : 0원 예수금 : 50만원 예수금 50만원인 상태에서 이번엔 1주에 60만원이고 증거금율 40%인 주식을 매수해 보겠다.
1주에 60만원, 증거금율 40%인 주식 매수 증거금 : 24만원 미수금 : 0원 예수금 : 26만원 예수금을 추가로 입금하지 않고 위 거래의 D+2 거래일이 지나면 증거금 : 0원 미수금 : 10만원 예수금 : 0원 미수금이 발생했을 때 보유하고 있는 주식을 매도하거나, 예수금을 추가로 입금하는 것이다. 이와 같은 조치를 하지 않았을 때는 증권사가 반대매매를 합니다.
반대매매 &nbsp; 미수금을 지급하지 않은 주식의 전체를 장이 열린 시점의 가장 낮은가격에 파는 것을 말한다. 시가보다 더 저렴한 가격에 보유 주식을 정리하고 거기서 미수금만큼을 가져간다. (시가의 -15% 정도) 추가로 미수금 수수료를 떼어간다. 마진콜 &nbsp; 반대매매 후 손실이 채워지지 않을 경우 고객의 계좌에서 증거금 부문을 압류한다. 그래도 모자란다면 고객에게 돈을 내라고 독촉하게 되는데, 이것이 바로 마진콜이다. 평가손익 &nbsp; 보유하고 있는 주식의 수익과 손실을 합한 금액이다. 평가손익률 &nbsp; 평가손익 ÷ 투자한 금액(매수금액)이다. 매입가액 &nbsp; 주식을 매수하기 위해 지불한 모든 금액의 합으로 수수료까지 포함된 금액이다. 보통주와 우선주 &nbsp; 관심 있는 회사의 주식을 검색해보면 회사 이름의 주식과 회사 이름 뒤에 ‘우’가 붙어 있는 주식 두 가지를 볼 수 있다. &lsquo;우&rsquo;가 붙지 않는 것이 보통주, 붙는 것이 우선주이다. 두 주식의 차이는 아래와 같다.
보통주 우선주 배당금 적음 의결권 있음 주가 높음 지정가와 시장가 &nbsp; 지정가 주문은 매매 주문을 할 때 원하는 가격을 정해서 주문하는 것을 말한다. 원하는 가격에 주식이 나오지 않으면 거래는 성사되지 않는다. 시장가는 주문이 접수된 시점에서 가장 유리한 가격에 매매가 성립되는 주문을 말한다. 주가 평가 관련 용어 &nbsp; ROE(Return On Equity) &nbsp; 자기 자본 이익율이라 한다. 부채를 제외한 기업의 순자산 대비 버는 순이익이 얼마인지를 나타내는 지표로 단순하게 ROE가 10%인 기업은 1억의 순자산으로 1천만원의 순이익을 벌 수 있는 능력이 있는 회사라 할 수 있다. EPS(Earning Per Share) &nbsp; 주당 순이익이라 한다. 기업의 순이익을 기업이 발행한 주식 수로 나눈 값으로 혼자 쓰이기도 하지만 PER 지표를 계산할 때 활용한다. PER(Price Earning Ratio) &nbsp; 주가 수익률이다. 앞서 설명한대로 현재 주가와 기업의 수익규모를 비교하여 나타낸 지표로 현재 주가가 비싼지 싼지를 가늠할 때 주로 사용하는 지표이다. BPS(Book-value Per Share) &nbsp; 주당 순자산이다. 회사를 청산했을 때 1주당 얼마의 순자산을 주주에게 나눠줄 수 있는지를 나타내는 지표이다. 이 지표를 보는 이유는 부채가 많은 기업을 특정하기 위해서 이다. 부채가 많아 순자산이 마이너스인 회사의 경우에는 BPS가 마이너스이다. 홀로 쓰이기 보다는 PBR을 위한 전 단계 활용지표로 많이 사용한다. PBR(Price to Book Ratio) &nbsp; 주가 순자산 비율이다. 주가/BPS로 계산한다. 주당순자산은 그대로인데 주가가 올라간다면 PBR은 계속해서 올라가는데 이는 주당순자산대비 주가가 과대계상 되었다고 평가할 수도 있다. 적절한 정도는 산업평균과 기업의 과거실적을 보는 것을 통해 어림 잡는다. 요새는 PBR의 활용이 적합하느냐에 따라 의견이 갈리기도 한다. 나라마다, 기업마다 부채와 자산의 정의와 계산 방법이 제 각각이기 때문이다.`}).add({id:107,href:"/posts/short-selling/",title:"주식 용어: 공매도란? 뜻과 원리, 장단점과 위험 쉽게...",description:"공매도의 뜻과 거래 원리, 수익 구조, 장점과 위험, 국내외 규제 흐름까지 초보 투자자가 이해하기 쉽게 정리했다.",content:`주식 투자를 하다 보면 &ldquo;공매도 물량이 늘었다&rdquo;, &ldquo;공매도 금지가 해제된다&rdquo;, &ldquo;공매도 잔고가 높은 종목을 조심해야 한다&rdquo; 같은 말을 자주 듣게 된다. 단어만 보면 어렵고 부정적인 느낌이 강하지만, 구조 자체는 생각보다 단순하다.
공매도는 주가가 내려갈 것이라고 예상할 때 쓰는 투자 방식이다. 보통 주식 투자는 싸게 사서 비싸게 팔아야 수익이 난다. 그런데 공매도는 순서가 반대다. 먼저 주식을 빌려서 팔고, 나중에 주가가 내려갔을 때 다시 사서 갚는다. 그래서 주가가 하락할수록 이익이 날 수 있다.
다만 공매도는 초보 투자자가 가볍게 접근할 만한 거래는 아니다. 주가가 오르면 손실이 커지고, 이론적으로 손실 한도가 정해져 있지 않다. 시장 전체로 보면 가격 발견과 과열 진정이라는 역할도 있지만, 개인 투자자 입장에서는 위험 구조를 정확히 이해하는 것이 먼저다.
공매도는 빌린 주식을 먼저 파는 거래다 &nbsp; 공매도는 영어로 short selling이라고 한다. 말 그대로 &ldquo;없는 주식을 판다&quot;라고 설명되기도 하지만, 정확히는 아무 주식이나 마음대로 파는 것이 아니라 빌린 주식을 먼저 파는 거래에 가깝다.
예를 들어 A주식이 현재 10,000원이라고 하자. 어떤 투자자가 이 주식이 곧 하락할 것이라고 예상했다. 이 투자자는 기관투자가나 대주주 등으로부터 A주식 100주를 빌린 뒤 시장에 판다. 그러면 일단 1,000,000원의 현금이 생긴다.
이후 예상대로 A주식이 8,000원으로 내려가면, 투자자는 시장에서 A주식 100주를 800,000원에 다시 산다. 그리고 빌렸던 100주를 돌려준다. 처음 팔아서 받은 돈은 1,000,000원이고, 나중에 다시 사는 데 쓴 돈은 800,000원이므로 차이는 200,000원이다. 여기에서 주식 대여 수수료와 거래 비용을 빼면 공매도 수익이 된다.
10,000원에 100주를 빌려서 매도 = 1,000,000원 확보 8,000원에 100주를 다시 매수 = 800,000원 사용 차익 = 200,000원반대로 주가가 12,000원으로 오르면 이야기가 달라진다. 빌린 100주를 갚기 위해 1,200,000원을 들여 다시 사야 한다. 처음 받은 돈은 1,000,000원인데 되사는 데 1,200,000원이 필요하므로 200,000원의 손실이 난다.
공매도는 &ldquo;하락에 투자하는 방식&quot;이라고 이해하면 쉽다. 주식을 보유한 상태에서 오르기를 기다리는 일반 매수와 달리, 공매도는 주가가 내려가야 유리하다.
공매도 거래는 어떤 순서로 진행될까 &nbsp; 공매도 거래는 크게 네 단계로 볼 수 있다. 주식을 빌리고, 팔고, 다시 사고, 돌려주는 흐름이다.
1. 주식을 빌린다 &nbsp; 먼저 공매도 투자자는 주식을 빌려야 한다. 이를 위해 대차거래나 대주거래 같은 제도가 활용된다. 기관투자가가 보유한 주식을 빌리는 경우가 많고, 개인 투자자도 일부 증권사를 통해 제한적으로 대주거래를 이용할 수 있다.
이때 주식을 공짜로 빌리는 것은 아니다. 주식 대여에 따른 수수료가 발생한다. 인기 있는 공매도 대상이거나 빌릴 수 있는 물량이 부족한 종목일수록 비용이 높아질 수 있다.
2. 빌린 주식을 시장에 판다 &nbsp; 주식을 빌렸다면 시장에서 매도한다. 일반 투자자가 보유 주식을 파는 것처럼 거래 화면에서는 매도 주문이 나간다. 다만 실제로는 자기 주식이 아니라 빌린 주식을 파는 것이다.
이 단계에서 공매도 투자자는 현금을 확보한다. 하지만 이 현금이 완전히 내 돈처럼 자유로운 수익은 아니다. 나중에 같은 주식을 다시 사서 돌려줘야 하기 때문이다.
3. 주가가 내려가면 다시 산다 &nbsp; 공매도 투자자의 기대는 주가 하락이다. 주가가 충분히 내려가면 같은 종목을 시장에서 다시 산다. 이를 숏커버링이라고 부르기도 한다. 공매도 포지션을 정리하기 위해 주식을 되사는 과정이다.
주가가 많이 내려갈수록 수익은 커진다. 하지만 주가가 예상과 달리 오르면 손실이 커진다. 특히 공매도 투자자가 손실을 줄이려고 한꺼번에 주식을 되사면 오히려 주가 상승 압력이 커질 수 있다.
4. 빌린 주식을 돌려준다 &nbsp; 마지막으로 다시 산 주식을 빌려준 쪽에 반환한다. 공매도 거래는 이 반환까지 끝나야 완전히 마무리된다. 결국 공매도의 핵심은 &ldquo;비싸게 먼저 팔고, 싸게 다시 사서 갚는 것&quot;이다.
공매도는 언제부터 시작되었을까 &nbsp; 공매도의 역사는 꽤 오래되었다. 기원은 17세기 네덜란드 암스테르담 증권거래소까지 거슬러 올라간다. 당시 주식 투자자들이 주가 하락을 예상하고 주식을 빌려 판 것이 공매도의 초기 형태로 알려져 있다. 이후 증권시장이 발달하면서 공매도는 영국과 미국 등 다른 금융시장으로 퍼져나갔다.
하지만 공매도는 처음부터 순탄하게 받아들여진 제도는 아니었다. 1930년대 대공황 시기에는 공매도가 주가 폭락을 부추긴다는 우려가 커졌다. 시장이 크게 흔들릴 때 하락에 베팅하는 거래가 투자 심리를 더 악화시킬 수 있다고 본 것이다. 이 때문에 여러 국가에서 공매도를 금지하거나 강하게 제한하는 조치가 나왔다.
미국에서도 1930년대 이후 공매도에 대한 규제가 강화되었다. 대표적으로 주가가 하락하는 과정에서 무분별한 공매도가 쏟아지는 것을 막기 위한 제한 장치가 도입되었다. 공매도를 완전히 없애기보다 시장 안정성을 해치지 않도록 규칙을 붙이는 방향이었다.
이후 시간이 지나면서 공매도의 긍정적인 역할도 다시 평가받기 시작했다. 과대평가된 주가를 조정하고, 시장에 반대 의견을 반영하며, 버블을 완화하는 기능이 있다는 인식이 커진 것이다. 2000년대 초반 기술주 버블을 거치면서 공매도가 과열된 주가를 식히는 데 일정 부분 역할을 할 수 있다는 평가도 나왔다.
최근에는 공매도 전략이 훨씬 정교해졌다. 헤지펀드와 기관투자가는 공매도를 단순한 하락 베팅뿐 아니라 헤지, 차익거래, 리스크 관리 수단으로 활용한다. 동시에 공매도 남용, 불법 무차입 공매도, 정보 격차 문제에 대한 비판도 계속 나온다. 그래서 공매도는 지금도 금융시장에서 필요한 제도인지, 어떻게 규제해야 하는지를 두고 논쟁이 이어지는 주제다.
공매도는 왜 필요하다고 할까 &nbsp; 공매도는 개인 투자자에게 부정적인 이미지가 강하다. 주가 하락에 베팅하는 거래이기 때문에 &ldquo;주가를 일부러 떨어뜨리는 것 아니냐&quot;는 시선도 있다. 실제로 과도한 공매도나 불법 공매도는 시장에 피해를 줄 수 있다.
그런데 제도권 시장에서 공매도를 완전히 없애기 어렵다고 보는 이유도 있다. 공매도가 시장에서 몇 가지 순기능을 하기 때문이다.
첫째, 공매도는 가격 발견 기능을 높일 수 있다. 어떤 기업의 주가가 실적이나 재무 상태에 비해 지나치게 높게 평가되어 있다면, 공매도 투자자는 그 과대평가에 베팅한다. 이런 매도 압력은 주가가 기업의 실제 가치에 더 가깝게 조정되도록 돕는 역할을 할 수 있다.
둘째, 과열된 시장을 식히는 기능이 있다. 모든 투자자가 상승만 기대하며 매수에 몰리면 주가가 실제 가치보다 과하게 오를 수 있다. 공매도는 이런 상황에서 반대 방향의 의견을 시장 가격에 반영한다.
셋째, 헤지 수단으로 활용될 수 있다. 기관투자가는 보유한 주식이나 포트폴리오의 위험을 줄이기 위해 일부 종목이나 지수에 공매도 포지션을 잡기도 한다. 단순히 주가 하락만 노리는 투기 수단이 아니라, 위험 관리 도구로도 쓰이는 것이다.
물론 이런 순기능은 공매도가 투명하고 규칙 안에서 이루어질 때 의미가 있다. 정보 격차가 크거나 불법적인 무차입 공매도가 발생하면 시장 신뢰를 훼손할 수 있다.
공매도의 가장 큰 위험은 손실 한도가 없다는 점이다 &nbsp; 공매도에서 가장 중요한 위험은 손실 구조다. 일반적인 주식 매수는 주가가 0원이 되더라도 손실은 투자 원금 안에서 끝난다. 10,000원짜리 주식 1주를 샀다면 최악의 경우 10,000원을 잃는다.
하지만 공매도는 다르다. 주가는 이론적으로 20,000원, 50,000원, 100,000원까지도 오를 수 있다. 10,000원에 공매도한 주식을 50,000원에 다시 사야 한다면 주당 40,000원의 손실이 난다. 주가 상승에 상한선이 없기 때문에 공매도의 손실도 이론적으로 제한이 없다.
일반 매수: 최대 손실은 투자 원금 공매도: 주가가 오를수록 손실이 계속 확대여기에 주식 대여 비용도 있다. 공매도 포지션을 오래 유지할수록 수수료 부담이 커질 수 있다. 주가가 원하는 방향으로 바로 움직이지 않으면 시간 자체가 비용이 된다.
증거금과 담보 문제도 중요하다. 공매도는 손실이 커질 수 있기 때문에 증권사는 투자자에게 일정 수준의 담보를 요구한다. 주가가 상승해 손실이 커지면 추가 담보를 요구받을 수 있고, 이를 충족하지 못하면 포지션이 강제로 정리될 수 있다. 이때 손실은 실제로 확정된다.
또 하나의 위험은 숏스퀴즈다. 공매도 투자자가 많은 종목에서 갑자기 호재가 나오거나 매수세가 강하게 들어오면 주가가 급등할 수 있다. 손실을 피하려는 공매도 투자자들이 동시에 주식을 되사면서 주가 상승이 더 가팔라지는 현상이다. 공매도는 하락을 예상한 거래지만, 시장이 반대로 움직일 때는 상승을 더 키우는 압력이 될 수도 있다.
국내외 공매도 규제는 왜 계속 바뀔까 &nbsp; 공매도 규제는 나라와 시기마다 다르게 적용된다. 시장이 안정적일 때는 공매도를 허용하되 보고 의무, 잔고 공시, 업틱룰, 증거금 요건 같은 규제를 둔다. 반대로 금융위기나 급락장처럼 시장 불안이 커질 때는 한시적으로 공매도를 금지하거나 제한하는 경우도 있다.
미국과 유럽은 공매도를 제도권 거래로 인정하면서도 공시와 보고 의무를 통해 투명성을 높이는 방향을 택해 왔다. 금융위기 같은 특수한 시기에는 일부 업종이나 종목에 대해 일시적 제한을 두기도 했다.
한국도 공매도를 허용해 왔지만, 시장 급락기에는 여러 차례 한시적 금지 조치를 시행했다. 개인 투자자 사이에서는 기관과 외국인에게 유리한 제도라는 불만이 꾸준히 있었고, 불법 공매도 적발 사례가 나오면서 제도 개선 요구도 커졌다.
공매도 규제의 핵심 목적은 두 가지다. 하나는 시장 안정이다. 과도한 공매도가 특정 종목이나 시장 전체의 급락을 부추기는 것을 막으려는 것이다. 다른 하나는 투자자 보호와 거래 투명성이다. 누가 어느 정도 공매도 포지션을 가지고 있는지 확인할 수 있어야 시장 참여자가 더 합리적으로 판단할 수 있다.
다만 공매도를 지나치게 막으면 가격 발견 기능이 약해질 수 있다는 반론도 있다. 그래서 공매도 규제는 완전 금지와 완전 자유 사이에서 계속 조정된다. 투자자 입장에서는 &ldquo;공매도가 좋다, 나쁘다&quot;로만 보기보다 현재 시장에서 어떤 규칙으로 운영되는지를 확인하는 태도가 필요하다.
개인 투자자는 공매도를 어떻게 봐야 할까 &nbsp; 초보 투자자라면 공매도를 직접 거래 대상으로 보기보다 시장을 읽는 지표로 먼저 활용하는 편이 현실적이다. 공매도 잔고가 높은 종목은 시장에서 하락을 예상하는 투자자가 많다는 뜻일 수 있다. 하지만 그것만으로 주가가 반드시 떨어진다는 의미는 아니다.
공매도 잔고가 높은데 실적이 부진하고 주가도 과하게 올라 있다면 하락 압력이 커질 수 있다. 반대로 공매도 잔고가 높더라도 기업 실적이 예상보다 좋아지거나 강한 호재가 나오면 숏커버링이 발생하며 주가가 급등할 수도 있다.
그래서 공매도 데이터를 볼 때는 몇 가지를 함께 봐야 한다.
확인할 항목 보는 이유 공매도 잔고 하락에 베팅한 물량이 어느 정도인지 확인 거래량 공매도 물량이 실제 거래에서 얼마나 큰 비중인지 확인 실적과 재무 상태 공매도 이유가 기업 내용과 연결되는지 확인 뉴스와 공시 갑작스러운 호재나 악재 여부 확인 주가 위치 이미 많이 하락했는지, 아직 과열 구간인지 확인 공매도가 많다는 이유만으로 매도하거나, 공매도 세력에 맞서겠다며 무리하게 매수하는 것은 위험하다. 공매도는 시장에 존재하는 여러 수급 요인 중 하나일 뿐이다. 결국 투자 판단은 기업의 실적, 재무 상태, 성장성, 밸류에이션, 시장 분위기를 함께 보고 해야 한다.
개인 투자자가 공매도를 직접 활용하려면 손실 구조, 증거금, 대여 비용, 강제 청산 가능성을 모두 이해해야 한다. 일반적인 장기 투자보다 훨씬 복잡하고 위험하다. 초보자라면 공매도 거래 자체보다 공매도 관련 지표를 해석하는 연습부터 하는 것이 낫다.
마무리 &nbsp; 공매도는 주식을 빌려 먼저 팔고, 나중에 다시 사서 갚는 거래다. 주가가 내려가면 이익이 나고, 주가가 오르면 손실이 난다. 일반적인 주식 매수와 방향이 반대인 투자 방식이라고 이해하면 된다.
시장 전체로 보면 공매도는 과대평가된 주가를 조정하고, 과열을 진정시키며, 기관투자가의 위험 관리 수단으로 쓰일 수 있다. 하지만 개인 투자자 입장에서는 무제한 손실 위험, 주식 대여 비용, 증거금 부담, 숏스퀴즈 가능성을 반드시 알아야 한다.
공매도를 볼 때 중요한 것은 감정적인 판단을 줄이는 것이다. 공매도는 무조건 나쁜 것도 아니고, 무조건 시장을 효율적으로 만드는 완벽한 제도도 아니다. 규칙 안에서 투명하게 운영될 때는 시장 기능을 돕지만, 불법이나 정보 격차가 커지면 투자자 신뢰를 해칠 수 있다.
초보 투자자라면 공매도를 &ldquo;따라 해야 할 기술&quot;보다 &ldquo;시장을 읽는 데 필요한 기본 용어&quot;로 먼저 받아들이면 좋다. 공매도 잔고와 거래량을 보되, 항상 기업 내용과 주가 수준을 함께 확인하는 습관이 더 중요하다.
자주 묻는 질문 &nbsp; 공매도는 개인 투자자도 할 수 있을까? &nbsp; 개인 투자자도 일부 증권사의 대주거래 서비스를 통해 제한적으로 공매도와 비슷한 거래를 할 수 있다. 다만 종목, 한도, 비용, 담보 조건이 제한적이고 손실 위험이 크기 때문에 초보자가 쉽게 접근할 거래는 아니다.
공매도가 많으면 주가는 반드시 떨어질까? &nbsp; 반드시 그렇지는 않다. 공매도가 많다는 것은 하락을 예상하는 투자자가 많다는 신호일 수 있지만, 실적 개선이나 강한 호재가 나오면 공매도 투자자들이 주식을 되사면서 주가가 오히려 급등할 수도 있다.
공매도와 무차입 공매도는 같은 말일까? &nbsp; 다르다. 일반적인 공매도는 주식을 빌린 뒤 파는 차입 공매도다. 반면 무차입 공매도는 주식을 빌리지 않고 먼저 파는 방식으로, 국내에서는 원칙적으로 금지되어 있다. 투자자가 문제 삼는 경우도 대부분 불법적인 무차입 공매도나 제도 운영의 불공정성에 대한 우려와 관련이 있다.`}).add({id:108,href:"/posts/blue-chip-yellow-chip-red-chip/",title:"주식 용어: 블루칩 옐로우칩 레드칩 뜻과 차이 쉽게 이해하기",description:"주식시장에서 자주 쓰이는 블루칩, 옐로우칩, 레드칩의 뜻과 차이를 초보 투자자도 이해할 수 있게 사례와 함께 정리했다.",content:`주식 뉴스를 보다 보면 &ldquo;블루칩 중심으로 매수세가 들어왔다&rdquo;, &ldquo;옐로우칩이 강세를 보였다&rdquo;, &ldquo;홍콩 증시의 레드칩이 주목받았다&rdquo; 같은 표현을 만날 때가 있다. 처음 들으면 색깔로 주식을 나누는 것처럼 느껴지지만, 실제로는 기업의 규모, 안정성, 시장에서의 위치를 설명하는 용어다.
이 표현은 포커 게임에서 쓰는 칩에서 유래했다는 설명이 가장 널리 알려져 있다. 포커 칩 중 파란색 칩이 가장 높은 가치를 가진 것처럼, 주식시장에서도 가장 안정적이고 대표성 있는 우량주를 블루칩이라고 부른다. 여기에서 한 단계 확장되어 옐로우칩, 레드칩 같은 표현도 함께 쓰이게 됐다.
다만 블루칩이라고 무조건 좋은 투자처이고, 옐로우칩이라고 무조건 저평가 종목이며, 레드칩이라고 무조건 중국 대표 기업이라는 식으로 단순하게 외우면 곤란하다. 이 용어들은 투자 판단의 결론이 아니라 종목의 성격을 빠르게 설명하는 분류에 가깝다.
블루칩은 시장을 대표하는 대형 우량주다 &nbsp; 블루칩은 주식시장에서 재무구조가 건실하고 경기 변동에도 비교적 강한 대형 우량주를 뜻한다. 오랜 기간 안정적인 이익을 냈고, 시장점유율이 높으며, 업종 안에서 대표 기업으로 평가받는 종목이 여기에 들어간다.
국내 시장에서는 삼성전자, 현대자동차, SK텔레콤처럼 많은 투자자가 이름만 들어도 어떤 회사인지 떠올릴 수 있는 기업들이 블루칩의 예로 자주 언급된다. 시대와 시장 상황에 따라 대표 기업은 달라질 수 있지만, 핵심은 &ldquo;크고 유명한 회사&quot;가 아니라 &ldquo;수익성, 안정성, 시장 지배력이 검증된 회사&quot;라는 점이다.
블루칩 기업은 대체로 주가 수준이 이미 높은 편이다. 외국인 투자자나 기관투자자의 보유 비중이 높은 경우도 많다. 기업의 정보가 비교적 많이 공개되어 있고 거래량도 풍부하기 때문에 초보 투자자가 접근하기 쉬워 보이지만, 그렇다고 손실 위험이 없는 것은 아니다.
블루칩의 장점과 한계 &nbsp; 블루칩의 가장 큰 장점은 안정성이다. 시장이 흔들릴 때도 상대적으로 버티는 힘이 있고, 장기적으로 이익을 만들어 온 기록이 있는 경우가 많다. 배당을 꾸준히 지급해 온 기업이라면 장기 투자자에게 더 매력적으로 보일 수 있다.
반대로 단점도 있다. 이미 시장에서 많이 알려진 기업이라 기대가 주가에 상당 부분 반영되어 있을 수 있다. 그래서 단기간에 몇 배씩 오르는 성장주 같은 움직임을 기대하기는 어렵다. 블루칩 투자는 &ldquo;대박&quot;보다 &ldquo;검증된 기업에 안정적으로 참여한다&quot;는 성격에 더 가깝다.
옐로우칩은 블루칩 다음 단계의 실적 우량주다 &nbsp; 옐로우칩은 블루칩만큼 초대형 우량주는 아니지만, 실적이 양호하고 주가 상승 기회가 있는 중가 우량주를 말한다. 블루칩의 바로 아래 단계로 이해하면 쉽다.
예를 들어 업종 안에서 1등 기업은 아니지만 꾸준히 이익을 내고, 재무 상태가 크게 나쁘지 않으며, 시장에서 아직 충분히 평가받지 못한 기업이 있다면 옐로우칩으로 분류될 수 있다. 대기업의 중가권 주식, 경기 변동에 민감한 업종 대표주, 중견기업의 지주회사 주식 등이 옐로우칩으로 언급되는 경우가 많다.
옐로우칩은 블루칩보다 주가 부담이 낮다고 여겨지는 경우가 많다. 유통되는 주식 수가 비교적 많고 개인 투자자의 거래도 활발한 편이다. 그래서 시장 분위기가 좋아지고 실적 기대감이 붙으면 블루칩보다 더 빠르게 움직이는 경우도 있다.
옐로우칩을 볼 때 확인할 점 &nbsp; 옐로우칩이라는 말에는 &ldquo;블루칩보다 싸 보인다&quot;는 인상이 담겨 있다. 하지만 주가가 낮다고 해서 자동으로 저평가라는 뜻은 아니다. 기업 규모가 작거나 경기 민감도가 높거나, 실적 변동성이 커서 낮은 평가를 받는 경우도 있다.
따라서 옐로우칩을 볼 때는 현재 주가가 싼지보다 왜 블루칩 반열에는 들지 못했는지를 먼저 봐야 한다. 시장점유율이 약한지, 특정 업황에 너무 크게 흔들리는지, 부채가 많은지, 이익이 일시적으로만 좋아진 것인지 확인해야 한다.
레드칩은 홍콩 증시에 상장된 중국계 우량주를 뜻한다 &nbsp; 레드칩은 블루칩이나 옐로우칩과 조금 성격이 다르다. 레드칩은 홍콩 증시에 상장된 주식 중 중국 정부나 국영기업이 최대주주로 참여한 우량 중국계 기업의 주식을 말한다.
이 용어는 1990년대를 전후해 홍콩 주식 투자자들 사이에서 쓰이기 시작한 것으로 알려져 있다. 중국의 개혁과 개방 흐름 속에서 홍콩 증시에 중국 관련 기업들이 상장되면서, 이들을 따로 설명하기 위한 표현이 필요해졌다. 중국을 상징하는 색이 빨간색이라는 점도 레드칩이라는 이름과 연결된다.
초기에는 홍콩 증시에 상장된 중국 기업 주식을 넓게 부르는 말로 쓰였지만, 지금은 중국 정부나 국영기업의 영향력이 큰 우량 기업을 가리키는 의미로 더 좁게 쓰인다.
레드칩은 중국 투자와 연결해서 봐야 한다 &nbsp; 레드칩은 기업 자체의 실적뿐 아니라 중국 정책, 홍콩 증시 분위기, 환율, 글로벌 자금 흐름의 영향을 함께 받는다. 그래서 국내 대형 우량주를 보듯이 단순히 기업 실적만 보고 판단하기 어렵다.
중국 정부의 산업 정책이 우호적이면 기대감이 커질 수 있지만, 규제나 지정학적 이슈가 부각되면 주가가 크게 흔들릴 수도 있다. 레드칩은 &ldquo;중국계 우량주&quot;라는 성격을 이해하되, 국가와 시장의 특수성을 함께 봐야 하는 투자 대상이다.
블루칩, 옐로우칩, 레드칩의 차이 &nbsp; 세 용어를 한 번에 비교하면 훨씬 쉽게 이해할 수 있다.
구분 핵심 의미 주로 보는 기준 특징 블루칩 대형 우량주 규모, 재무 안정성, 시장 지배력 기관과 외국인 관심이 크고 상대적으로 안정적 옐로우칩 중가 우량주 실적, 저평가 가능성, 성장 여지 블루칩보다 가격 부담이 낮고 변동성이 더 클 수 있음 레드칩 홍콩 상장 중국계 우량주 중국 정부나 국영기업 지분, 홍콩 상장 여부 중국 정책과 홍콩 증시 영향을 함께 받음 블루칩과 옐로우칩은 주로 기업의 시장 내 위치와 우량성을 설명하는 말이다. 반면 레드칩은 기업의 배경과 상장 시장까지 포함한 용어다. 그래서 셋을 같은 기준의 등급표처럼 외우면 헷갈릴 수 있다.
간단히 말하면 블루칩은 &ldquo;이미 검증된 대표 우량주&rdquo;, 옐로우칩은 &ldquo;블루칩만큼 크지는 않지만 실적과 성장 가능성이 있는 우량주&rdquo;, 레드칩은 &ldquo;홍콩 시장에서 거래되는 중국계 우량주&quot;라고 이해하면 된다.
투자할 때는 이름보다 기업 내용을 봐야 한다 &nbsp; 주식 용어는 시장을 빠르게 이해하는 데 도움이 된다. 하지만 용어가 투자 수익을 보장하지는 않는다. 어떤 종목이 블루칩으로 불린다고 해서 항상 오르는 것은 아니고, 옐로우칩이라고 해서 반드시 재평가되는 것도 아니다.
블루칩을 볼 때는 현재 주가가 기업의 이익과 배당, 성장성을 얼마나 반영하고 있는지 봐야 한다. 좋은 회사라도 너무 비싸게 사면 기대 수익률은 낮아질 수 있다.
옐로우칩을 볼 때는 &ldquo;저평가&quot;라는 말에만 끌리면 안 된다. 시장이 아직 알아보지 못한 기업일 수도 있지만, 실제로는 업황이 불안하거나 경쟁력이 약해서 낮은 평가를 받는 기업일 수도 있다.
레드칩을 볼 때는 기업 분석에 더해 중국 정책과 홍콩 시장의 특성을 함께 봐야 한다. 특히 해외 주식이나 중국 관련 ETF를 통해 간접적으로 투자할 때도 어떤 기업들이 포함되어 있는지 확인하는 습관이 필요하다.
초보 투자자라면 이 용어들을 매수 신호로 받아들이기보다 종목을 분류하고 비교하는 도구로 쓰는 편이 좋다. &ldquo;이 회사는 블루칩인가?&ldquo;보다 &ldquo;왜 블루칩으로 평가받는가?&rdquo;, &ldquo;이 옐로우칩은 실제로 성장할 근거가 있는가?&ldquo;를 묻는 쪽이 훨씬 실전적이다.
마무리 &nbsp; 블루칩은 주식시장을 대표하는 대형 우량주, 옐로우칩은 블루칩보다는 한 단계 아래지만 실적과 성장 가능성을 갖춘 중가 우량주, 레드칩은 홍콩 증시에 상장된 중국계 우량주를 뜻한다.
이 용어들은 주식시장을 이해하는 데 유용하지만, 종목의 미래를 보장하는 딱지는 아니다. 같은 블루칩이라도 산업이 바뀌면 경쟁력이 약해질 수 있고, 옐로우칩이라도 실적이 뒷받침되지 않으면 기대가 꺾일 수 있다. 레드칩은 기업 분석과 함께 중국 정책, 홍콩 증시 환경까지 고려해야 한다.
주식 용어를 하나씩 익히는 이유는 어려운 말을 외우기 위해서가 아니다. 뉴스와 리포트에서 어떤 맥락으로 쓰이는지 이해하고, 투자 판단을 조금 더 차분하게 하기 위해서다. 블루칩, 옐로우칩, 레드칩도 결국 &ldquo;이 기업이 어떤 성격의 주식인가&quot;를 묻는 출발점으로 활용하면 된다.
자주 묻는 질문 &nbsp; 블루칩은 무조건 장기 투자에 좋은 종목인가? &nbsp; 무조건 그렇지는 않다. 블루칩은 대체로 재무 안정성과 시장 지배력이 높은 편이지만, 주가가 이미 비싸거나 산업 성장성이 둔화되면 기대 수익률이 낮을 수 있다. 장기 투자라면 기업의 이익 추세, 배당, 부채, 산업 전망을 함께 봐야 한다.
옐로우칩은 블루칩보다 수익률이 높을까? &nbsp; 항상 높지는 않다. 옐로우칩은 블루칩보다 덜 알려져 있거나 가격 부담이 낮아 상승 여지가 있어 보일 수 있지만, 그만큼 변동성과 실적 불확실성도 클 수 있다. 단순히 &ldquo;블루칩보다 싸다&quot;는 이유만으로 투자하면 위험하다.
레드칩은 중국 본토 주식과 같은 뜻인가? &nbsp; 같은 뜻은 아니다. 레드칩은 보통 홍콩 증시에 상장되어 있고 중국 정부나 국영기업의 영향력이 큰 중국계 우량주를 가리킨다. 중국 본토의 상하이, 선전 증시에 상장된 주식과는 시장 구조와 투자 환경이 다르다.`}).add({id:109,href:"/posts/limit-up-limit-down/",title:"주식 용어: 상한가 하한가, 주식 가격제한폭 30% 쉽...",description:"상한가와 하한가의 뜻, 국내 주식 가격제한폭 30% 기준, 계산 방법, 투자자가 주의해야 할 점을 초보자도 이해하기 쉽게 정리했다.",content:`주식 뉴스를 보다 보면 &ldquo;상한가를 기록했다&rdquo;, &ldquo;하한가로 밀렸다&rdquo; 같은 표현이 자주 나온다. 처음 들으면 단순히 많이 올랐거나 많이 떨어졌다는 말처럼 보이지만, 실제로는 하루 동안 주가가 움직일 수 있는 한계 가격을 뜻한다.
국내 주식시장은 개별 종목의 가격이 하루에 끝없이 오르거나 끝없이 떨어지지 않도록 가격제한폭을 둔다. 코스피와 코스닥은 전일 종가를 기준으로 대체로 위아래 30%까지 움직일 수 있고, 이 위쪽 끝이 상한가, 아래쪽 끝이 하한가 다.
상한가와 하한가를 알면 뉴스 문장을 이해하는 데 그치지 않고, 내 계좌에서 주가가 왜 더 오르지 않는지, 왜 특정 가격 아래로 더 내려가지 않는지까지 이해할 수 있다. 초보 투자자가 반드시 알아야 할 기본 가격 용어다.
상한가는 하루 동안 오를 수 있는 최고 가격이다 &nbsp; 상한가는 주식시장에서 개별 종목의 주가가 하루 동안 오를 수 있는 최고 가격을 말한다. 국내 코스피와 코스닥 시장에서는 전일 종가를 기준으로 약 30%까지 상승할 수 있다.
예를 들어 어떤 주식의 전일 종가가 10,000원이었다고 하자. 가격제한폭이 30%라면 이론적으로 다음 거래일 상한가는 13,000원 근처가 된다.
전일 종가 10,000원 상승 제한폭 30% 상한가 약 13,000원주가가 장중에 13,000원까지 올라가면 그날은 더 높은 가격으로 거래되기 어렵다. 매수하려는 사람이 아무리 많아도 시장 제도상 정해진 상한 가격이 있기 때문이다.
물론 실제 거래 화면에서는 호가 단위 때문에 정확히 30.0000%로 딱 맞지 않을 수 있다. 주가 구간마다 호가 단위가 다르기 때문에 증권사 앱에서 표시되는 상한가를 기준으로 보면 된다.
상한가는 보통 강한 호재가 있을 때 나타난다. 실적이 크게 좋아졌거나, 대형 계약을 공시했거나, 정책 수혜 기대가 붙거나, 특정 테마에 수급이 몰릴 때 상한가가 나올 수 있다. 다만 상한가를 갔다고 해서 그 기업의 가치가 하루 만에 30% 좋아졌다는 뜻은 아니다. 시장의 기대와 매수세가 그날 가격 한계까지 몰렸다는 뜻에 가깝다.
하한가는 하루 동안 내려갈 수 있는 최저 가격이다 &nbsp; 하한가는 상한가의 반대다. 개별 종목의 주가가 하루 동안 내려갈 수 있는 최저 가격을 말한다. 국내 코스피와 코스닥 시장에서는 전일 종가를 기준으로 약 30%까지 하락할 수 있다.
전일 종가가 10,000원인 주식이라면 하한가는 이론적으로 7,000원 근처가 된다.
전일 종가 10,000원 하락 제한폭 30% 하한가 약 7,000원주가가 하한가에 닿으면 그날은 그 가격보다 낮게 거래되기 어렵다. 악재가 너무 커서 팔려는 사람이 많아도 하루 하락 한도가 존재하기 때문이다.
하한가는 투자자에게 심리적으로 매우 강한 신호다. 기업 실적 악화, 횡령이나 배임 이슈, 감사의견 문제, 대규모 유상증자, 거래재개 후 실망 매물처럼 시장이 크게 부정적으로 받아들이는 사건이 있을 때 나타날 수 있다.
다만 하한가가 있다고 해서 손실이 완전히 막히는 것은 아니다. 오늘 하한가로 마감한 종목이 다음 거래일에도 다시 하한가를 갈 수 있기 때문이다. 가격제한폭은 하루 단위의 속도 제한이지, 장기 손실을 막아주는 안전장치가 아니다.
왜 가격제한폭 제도가 필요할까 &nbsp; 상한가와 하한가 제도는 주가의 급격한 변동으로 인한 혼란을 줄이기 위해 만들어졌다. 주식시장은 사람들의 기대, 공포, 소문, 뉴스, 실적, 유동성이 한꺼번에 반영되는 곳이다. 아무 제한이 없다면 특정 종목이 하루 만에 비정상적으로 폭등하거나 폭락할 수 있다.
국내 주식시장 역사에서도 이런 필요성을 보여주는 사례가 있었다. 1960년대 초 증권거래가 급격히 활발해지던 시기에는 투기적인 매매가 강하게 나타났고, 일부 종목 가격이 비정상적으로 치솟았다가 급락하면서 시장 전체가 큰 혼란을 겪었다. 이런 경험은 주식시장에 일정한 제동 장치가 필요하다는 인식을 키웠다.
가격제한폭은 투자자를 완벽하게 보호하는 장치는 아니다. 하지만 하루 동안 발생할 수 있는 극단적인 가격 변동을 제한해 투자자가 뉴스를 확인하고 판단할 시간을 벌어주는 역할을 한다.
여기에 더해 시장 전체가 급격히 흔들릴 때는 사이드카나 서킷브레이커 같은 제도도 작동할 수 있다. 상한가와 하한가가 개별 종목의 가격 제한이라면, 사이드카와 서킷브레이커는 시장 전체의 급변을 완화하기 위한 장치에 가깝다.
코스피, 코스닥, 코넥스의 제한폭은 다를 수 있다 &nbsp; 초보 투자자는 &ldquo;한국 주식은 무조건 30%&ldquo;라고 외우기 쉽다. 대부분의 개인 투자자가 자주 거래하는 코스피와 코스닥은 전일 종가 대비 30% 가격제한폭으로 이해하면 된다.
하지만 모든 시장이 똑같지는 않다. 시사경제용어사전 기준으로 2015년부터 코스피와 코스닥은 전날 종가보다 30% 이상 오르거나 내리지 않도록 규정되어 있고, 코넥스는 15% 제한폭이 적용된다.
시장 가격제한폭 코스피 전일 종가 대비 약 ±30% 코스닥 전일 종가 대비 약 ±30% 코넥스 전일 종가 대비 약 ±15% 예를 들어 코스닥 종목의 전일 종가가 20,000원이라면 상한가는 약 26,000원, 하한가는 약 14,000원 근처로 보면 된다. 반면 코넥스 종목은 같은 기준이라도 제한폭이 다르게 적용될 수 있으므로 거래 전 확인이 필요하다.
또 신규 상장, 정리매매, 거래정지 후 재개 등 특수한 상황에서는 일반적인 감각과 다르게 움직이는 경우도 있다. 실제 매매를 할 때는 증권사 앱의 상한가, 하한가 표시와 거래소 공시를 함께 확인하는 습관이 좋다.
상한가와 하한가를 볼 때 투자자가 조심할 점 &nbsp; 상한가는 좋아 보이고 하한가는 무서워 보인다. 하지만 둘 다 감정적으로만 보면 위험하다. 상한가를 따라 샀다가 다음 날 급락할 수 있고, 하한가라고 무조건 싸다고 생각하고 들어갔다가 추가 하락을 맞을 수도 있다.
상한가 종목을 볼 때는 왜 올랐는지부터 확인해야 한다. 실적 개선처럼 기업의 기초 체력이 바뀐 것인지, 단기 테마나 소문으로 수급만 몰린 것인지에 따라 이후 흐름이 크게 달라진다.
특히 상한가에 매수 주문이 많이 쌓여 있다고 해서 다음 날도 무조건 오르는 것은 아니다. 장 마감 후 악재가 나오거나, 다음 날 차익실현 매물이 쏟아지면 높은 가격에 산 투자자가 손실을 볼 수 있다.
하한가 종목도 마찬가지다. &ldquo;30%나 빠졌으니 싸다&quot;라는 생각은 위험할 수 있다. 기업의 문제가 일회성인지, 재무 상태나 상장 유지에 영향을 줄 정도로 큰 문제인지 확인해야 한다. 하한가 다음 날에도 매도 물량이 계속 쌓이면 빠져나오기 어려운 상황이 생길 수 있다.
초보 투자자라면 상한가와 하한가 종목을 매매 대상으로만 보지 말고, 시장이 특정 뉴스에 얼마나 강하게 반응했는지 읽는 신호로 먼저 활용하는 편이 좋다.
함께 알아두면 좋은 가격 용어 &nbsp; 상한가와 하한가를 이해하려면 시가, 종가, 고가, 저가도 같이 알아두면 좋다.
시가 &nbsp; 시가는 그날 주식시장이 열리고 처음 형성된 가격이다. 국내 정규장은 보통 오전 9시에 시작되므로, 장 시작 후 첫 거래 가격이 시가가 된다.
종가 &nbsp; 종가는 그날 장이 마감될 때 형성된 마지막 가격이다. 상한가와 하한가는 이 종가 중에서도 전일 종가 를 기준으로 계산된다. 그래서 오늘 종가가 내일의 가격제한폭 계산 기준이 된다.
고가와 저가 &nbsp; 고가는 그날 장중 가장 높았던 가격이고, 저가는 그날 장중 가장 낮았던 가격이다. 상한가에 도달한 종목은 그날 고가가 상한가가 되는 경우가 많고, 하한가에 도달한 종목은 그날 저가가 하한가가 되는 경우가 많다.
이 네 가지 가격 용어를 알면 캔들차트도 훨씬 쉽게 읽힌다. 캔들 하나에는 그날의 시가, 종가, 고가, 저가가 담겨 있고, 상한가나 하한가 여부는 그날 수급이 얼마나 극단적이었는지 보여준다.
마무리 &nbsp; 상한가는 하루 동안 주가가 오를 수 있는 최고 가격이고, 하한가는 하루 동안 주가가 내려갈 수 있는 최저 가격이다. 국내 코스피와 코스닥 시장은 전일 종가 기준으로 약 ±30% 가격제한폭을 두고 있으며, 코넥스는 제한폭이 다르게 적용된다.
이 제도는 주가 급등락으로 인한 혼란을 줄이고 투자자가 판단할 시간을 갖게 만드는 장치다. 다만 가격제한폭이 손실을 막아주는 보험은 아니다. 하한가가 연속으로 나올 수도 있고, 상한가 다음 날 주가가 급락할 수도 있다.
상한가와 하한가를 볼 때는 &ldquo;얼마나 올랐나&rdquo;, &ldquo;얼마나 빠졌나&quot;보다 &ldquo;왜 그렇게 움직였나&quot;를 먼저 봐야 한다. 뉴스, 공시, 실적, 거래량, 시장 분위기를 함께 확인하면 가격 움직임을 더 현실적으로 이해할 수 있다.
자주 묻는 질문 &nbsp; 상한가 종목은 다음 날도 오를 가능성이 높을까? &nbsp; 반드시 그렇지는 않다. 강한 호재로 상한가를 간 종목은 추가 상승할 수 있지만, 단기 수급이나 테마로 오른 종목은 다음 날 차익실현 매물이 나오며 하락할 수 있다. 상한가 여부보다 상승 이유와 거래량을 함께 봐야 한다.
하한가 종목은 저가 매수 기회일까? &nbsp; 항상 기회는 아니다. 하한가는 시장이 그 종목을 매우 부정적으로 보고 있다는 신호일 수 있다. 단순한 과잉 반응인지, 기업 가치에 큰 문제가 생긴 것인지 확인하지 않고 매수하면 추가 하락 위험이 크다.
국내 주식은 하루에 30% 이상 절대 움직일 수 없을까? &nbsp; 일반적인 코스피와 코스닥 개별 종목은 전일 종가 대비 약 30% 가격제한폭이 적용된다. 다만 코넥스처럼 제한폭이 다른 시장이 있고, 신규 상장이나 정리매매 등 특수한 상황에서는 일반적인 가격제한폭과 다르게 보일 수 있으므로 거래 전 확인이 필요하다.`}).add({id:110,href:"/posts/stock-fund-etf/",title:"주식, 펀드, ETF에 대한 쉬운 설명",description:"주식, 펀드, ETF는 모두 자산 증식을 위한 대표적인 금융 투자 수단이지만, 구조와 운용 방식, 위험도 측면에서 차이가 있다.",content:`주식(Stock) &nbsp; 주식이란 기업이 자금을 조달하기 위하여 발행하는 지분 증서이다. 투자자는 주식을 매수함으로써 해당 기업의 일부를 소유하게 된다.
예시로, 삼성전자의 주식을 매수하면 삼성전자의 주주가 되는 것이다.
특징 &nbsp; 소유권 보유: 기업의 일부를 소유 의결권 행사 가능 배당금 수령 가능 주가 변동에 따른 시세 차익 가능 장점 &nbsp; 높은 수익 가능성 기업 성장의 직접적 수혜 단점 &nbsp; 개별 기업 리스크 존재 가격 변동성이 큼 👉 특정 기업의 실적, 산업 전망, 경기 상황 등에 따라 가격이 크게 변동한다.
펀드(Fund) &nbsp; 펀드는 여러 투자자의 자금을 모아 전문 운용사가 대신 투자해 주는 금융상품이다.
예를 들어, 국내 대표 운용사인 미래에셋자산운용 등이 다양한 펀드를 운용한다.
구조 &nbsp; 투자자 → 자산운용사 → 주식·채권 등 다양한 자산에 분산 투자
특징 &nbsp; 전문가가 대신 운용 분산 투자 가능 소액으로도 다양한 자산 투자 가능 장점 &nbsp; 리스크 분산 효과 투자 편의성 단점 &nbsp; 운용 보수(수수료) 발생 운용 성과가 매니저 역량에 의존 👉 직접 종목을 고르기 어렵거나 시간이 부족한 투자자에게 적합하다.
ETF (Exchange Traded Fund) &nbsp; ETF는 거래소에 상장되어 주식처럼 사고팔 수 있는 펀드이다. 대표적인 예로 KOSPI 200을 추종하는 ETF가 있다.
즉, KOSPI200 지수를 그대로 따라가도록 설계된 상품을 매수하면, 해당 지수 전체에 투자하는 효과를 얻게 된다.
특징 &nbsp; 주식처럼 실시간 매매 가능 인덱스를 추종하는 경우가 많음 일반 펀드보다 보수가 낮은 편 장점 &nbsp; 분산 투자 낮은 수수료 거래 편의성 단점 &nbsp; 시장 전체 하락 시 함께 하락 특정 테마 ETF는 변동성 높음 한눈에 비교 &nbsp; 구분 주식 펀드 ETF 투자 대상 개별 기업 다양한 자산 지수·테마 등 운용 방식 직접 투자 전문가 운용 주식처럼 거래되는 펀드 분산 투자 어려움 가능 가능 수수료 거의 없음 상대적으로 높음 낮은 편 변동성 높음 중간 중간 어떤 것이 더 좋은가? &nbsp; 정답은 없다. 투자자의 성향에 따라 다르다.
기업 분석이 가능하고 적극적인 투자를 원한다 → 주식 전문가에게 맡기고 싶다 → 펀드 분산 투자 + 낮은 수수료 + 간편 거래 → ETF`}).add({id:111,href:"/docs/stock/history/",title:"주식의 역사",description:"주식의 시작은 언제인지? 최초의 주식과 주식회사는 어디인가?",content:`세계 최초의 주식은 1553년 영국에서 설립된 합자회사 &lsquo;러시아 회사&rsquo;에서 발행되었다. 주식이라는 형태로 소액의 자금을 모아 큰 규모의 투자를 가능하게 하는 이 편리한 시스템은 1602년 네덜란드에서 설립된 동인도회사에 의해 본격적으로 활용되었고, 합리적인 자금 조달 방법으로 유럽과 미국, 그리고 전 세계로 퍼져나갔다.
주식이란 주식회사에 자본을 대고 이에 따라 교부받는 증서다. 개인이나 단체는 특정 회사에 일정 금액을 투자해주고 그 대가로 주식을 받는다. 투자자는 정해진 기간마다 보유한 주식에 걸맞게 이득을 배당 받거나 주가가 오르면 이를 팔아 차익을 챙긴다. 기업이 발행한 주식을 거래하는 주식시장은 기업 경영 뿐 아니라 국가 경제를 좌우할 만큼 실물경제에 막대한 영향력을 발휘하고 있다.
그렇다면 주식은 어떻게 만들어졌고, 어떤 과정을 거쳐 지금의 모습이 되었을까?
세계 최초의 주식 &nbsp; 세계 최초의 주식은 1553년 영국의 합자회사 &lsquo;러시아 회사&rsquo;가 발행되었다.
&lsquo;러시아 회사&rsquo;는 런던의 모직물 상인들에 의해 설립된 영국 최초의 합자회사로, 러시아 교역 자금 조달을 목적으로 1553년 세계 최초로 주식을 발행했고, 그 주식이 본격적으로 활용되기 시작한 것은 17세기에 접어들면서부터다.
1602년 네덜란드에 설립된 동인도회사는 소액의 자금을 모아 큰 투자를 가능하게 하는 주식이라는 편리한 시스템에 주목하여 선박 건조부터 항로 개척, 상품 운송과 막대한 자금이 필요한 동방 무역에 크게 활용하기 시작했으며, 이후 유럽 각지로 퍼져나갔다.
세계 최초의 주식회사 &nbsp; 세계 최초의 주식회사는 1602년 네덜란드에서 설립된 동인도주식회사이다. 그 당시 동인도회사는 영국, 네덜란드, 벨기에에 있었는데 이름만 같고 각기 다른 회사였다. 동인도회사는 먼 바다를 건너 동인도(현재 인도네시아)에 가서 후추, 향료 등을 수입하였다. 그러나 오랜 항해에서 거센 파도를 만나 배가 부서지거나 해적의 습격을 당하는 등 위험도 많았고 때에 따라 서는 전 재산을 잃는 상인들도 있었다.
성공과 실패를 반복하는 가운데 고안해 낸 것이 바로 주식회사이다. 즉, 많은 사람들로부터 모은 자금으로 회사를 만들고 큰 배를 건조하여 무역을 하게 되면 개인기업으로서 감당하기 어려운 비용문제를 해결할 수 있었다.
그 대신 자금을 낸 사람에게는 그 증서로 주식을 발행해 주었고 자신이 낸 자금의 비율에 맞게 무역에서 얻은 회사의 이익을 분배받고 만일 배가 난파해서 손해가 발생할 경우에는 자신이 출자한 자금을 초과해서 손해를 보지 않는 오늘날의 주식회사의 형태를 만들어낸 것이다.
영국에서도 1612년 영국동인도주식회사가 설립된 이후, 식민지경제가 늘어남에 따라 많은 무역회사들이 설립되었다. 그러나 1711년 남미 및 태평양 제도와 영국의 무역을 독점하였던 영국의 「South Seas Co.」가 설립되었을 때부터 주식투자의 이상 과열현상이 나타나기 시작했으며, 1720년에는 주식 붐으로 급등하였던 주가가 마치 포말(Bubble)처럼 붕괴되는 이른바 「남해 포말(South Sea Bub-ble)」사건이 발생하였다.
이에 따라 주식회사에 대한 불신이 고조되어 영국은 1720년 Bubble Act를 통해 특허에 의하지 않는 한 주식회사의 설립을 금지하였고, 주식회사의 발전은 정체기를 맞게 되었다.
18세기 말에서 19세기 중반까지 산업혁명을 계기로 가내수공업이 공장제 공업경영으로 발전하고 산업자본주의가 확립되면서 주식회사가 융성하게 되었다. 특히, 19세기 중반에는 주식회사 설립에 대한 특허주의를 폐지하는 대신, 주주의 유한책임을 인정하는 회사법이 제정되면서 주식회사 제도가 급속히 발전하게 되었다.
한편, 우리나라에서는 1897년 2월에 한성은행, 1899년 1월 천일은행이 설립되면서 우리나라 최초의 주식회사가 생겨났다.
그러나 1960년대 이전에는 경제규모가 작고 자본 시장이 발달하지 못하여 형식상의 주식회사에 불과하였다. 그 이후 정부의 경제개발계획이 거듭되 면서 자본시장이 발전하게 되었고 이에 따라 진정 한 의미의 주식회사가 많이 설립되었다.
증권의 기원 &nbsp; 증권의 기원은 12세기경 이탈리아의 도시국가에서 전쟁자금 조달을 목적으로 발행된 채권이다. 십자군 원정을 비롯해 도시국가 간 분쟁 등 중세 유럽에서는 전쟁이 빈번하게 일어났다.
도시국가들은 이러한 전쟁비용을 &lsquo;몬티&rsquo;라고 불리는 일종의 법인 같은 시민 단체로부터 조달하기 위해 일반 시중금리보다 낮은 이자율로 채권을 발행하기 시작했다. 이것이 증권의 시초로 알려져 있다. 참고로 1555년 프랑스 정부가 발행한 국채는 근세-근대국가에서 발행된 최초의 장기 국채로 유명하다.
세계 최초의 증권거래소 &nbsp; 세계 최초의 증권거래소는 벨기에 앤트워프 증권거래소이다.
도시국가들의 전쟁자금 조달을 위한 국채 발행이 늘어나면서 일상적으로 채권을 거래할 수 있는 &lsquo;증권거래소&rsquo;의 존재가 필요했고, 1531년 벨기에 앤트워프에 세계 최초의 증권거래소가 설립됐다.
이 증권거래소의 성공으로 이후 네덜란드, 프랑스, 독일, 영국 등에서 잇따라 증권거래소가 설립되었다.
세계 경제와 금융의 중심지 &nbsp; 18세기 후반, 세계 경제와 금융의 중심지는 암스테르담에서 런던으로 옮겨졌다.
18세기 후반, 영국에 산업혁명이 시작되면서 세계 경제와 금융의 중심지는 암스테르담에서 런던으로 옮겨졌다. 이때부터 19세기까지 영국에서는 7년 전쟁, 미국 독립전쟁, 나폴레옹 전쟁 등 큰 전쟁이 이어졌고, 식민지 개척과 함께 철도, 운하 건설, 광산과 플랜테이션 개발 등 대규모 프로젝트가 잇따르면서 대량의 국채가 발행되어 런던 거래소는 크게 활기를 띠었다. 입니다.
로스차일드, 베어링 등 지금도 유명한 머천트 뱅커라고 불리는 금융업무를 전문으로 하는 은행가들이 등장한 것도 이 무렵이다.
뉴욕에 증권거래소 개설 &nbsp; 1817년 뉴욕에 증권거래소가 개설되었다.
1861~1865년 남북전쟁으로 국채가 발행되고, 서부 개척으로 인한 철도 건설을 위해 주식과 사채가 대량으로 발행되면서 증권시장이 활기를 띠고 뉴욕증권거래소에 활기를 불어넣었다.
또한 제1차 세계대전이 시작되면서 세계 금융의 중심은 점차 유럽에서 미국으로 옮겨갔고, 미국에서는 지금은 우리에게 익숙한 CP(상업어음), 워런트 채권 등 새로운 금융수단이 속속 생겨나면서 금융기술이 크게 발전했다.
참고 &nbsp; 알고 싶어요 주식시장`}).add({id:112,href:"/posts/house-sale-jeonse-contract-documents/",title:"주택 매매와 전세 계약 시 필요한 서류 정리",description:"주택 매매로 소유권 이전등기를 하거나 전세 계약 후 전세권 설정등기를 할 때 매도인, 매수인, 임대인, 임차인이 준비할 서류를 정리했다.",content:`전세를 살다가 직접 집을 매매하게 되면 생각보다 준비할 서류가 많다. 계약서만 쓰고 잔금만 보내면 끝나는 것처럼 보이지만, 실제로는 소유권 이전등기, 대출 실행, 잔금 정산, 공과금 정리까지 한 번에 맞물려 돌아간다.
특히 잔금일에는 돈도 크고 사람도 많고 확인할 것도 많다. 매도인, 매수인, 공인중개사, 법무사, 은행 담당자가 동시에 움직이는 경우도 있어서 서류 하나가 빠지면 일정이 꼬일 수 있다. 그래서 계약 전부터 &ldquo;누가 무엇을 준비해야 하는지&quot;를 미리 나눠서 체크하는 게 좋다.
이 글에서는 주택 매매 시 소유권 이전등기에 필요한 서류와 전세권 설정등기에 필요한 서류를 초보자 기준으로 정리해본다.
주택 매매에서 가장 중요한 절차는 소유권 이전등기다 &nbsp; 주택을 매매하면 매수인이 잔금을 지급하고 매도인이 집의 소유권을 넘겨준다. 그런데 부동산은 물건처럼 그냥 건네받는다고 끝나는 것이 아니다. 등기부에 소유자가 바뀌어야 법적으로 소유권 이전이 완성된다.
이 절차가 소유권 이전등기 다. 보통 잔금일에 법무사가 서류를 받아 등기를 진행하고, 매수인은 취득세와 등기비용을 준비한다. 직접 등기할 수도 있지만 처음이라면 법무사를 통하는 경우가 많다.
중요한 점은 잔금을 치른 뒤 등기를 미루면 안 된다는 것이다. 일반적인 매매에서는 잔금 지급 등 계약상 의무가 모두 이행된 날부터 60일 이내에 소유권 이전등기를 신청해야 한다. 그래서 잔금일 전에 서류를 미리 확인해두는 편이 안전하다.
소유권 이전등기 매도인 구비서류 &nbsp; 매도인은 집을 파는 사람이다. 등기상 소유권을 넘겨주는 쪽이라서 본인 확인과 매도 의사 확인에 필요한 서류가 중요하다.
매도인이 준비할 서류 &nbsp; 신분증 인감도장 매도용 인감증명서 1통 등기권리증 또는 등기필증 주민등록초본 1통 관리비, 도시가스 등 공과금 최종 영수증 아파트 선수관리비 또는 관리비 예치금 확인증 열쇠, 카드키, 공동현관 출입카드 등 인수인계 물품 여기서 특히 중요한 것은 매도용 인감증명서 다. 일반 인감증명서가 아니라 매수자의 성명, 주소, 주민등록번호가 들어간 매도용 인감증명서로 발급받아야 한다. 매수자 정보가 계약서와 다르면 다시 발급해야 할 수 있으니 주민센터에 가기 전에 매수자 인적사항을 정확히 확인하는 것이 좋다.
주민등록초본은 주소 변동 이력이 필요한 경우가 많다. 그래서 보통 &ldquo;전주소 모두 포함&quot;으로 발급해두면 다시 발급하는 일을 줄일 수 있다.
등기권리증은 예전에는 집문서라고 부르기도 했다. 분양 아파트라면 분양계약서나 등기필정보 관련 서류를 함께 확인하는 경우가 있다. 만약 등기권리증을 분실했다면 잔금일에 바로 해결하기 어렵기 때문에 법무사에게 미리 알려야 한다.
공과금과 관리비 정산도 잔금일에 자주 빠지는 부분이다. 전기, 수도, 도시가스, 관리비, 장기수선충당금, 선수관리비 등을 어떻게 정산할지 공인중개사와 미리 맞춰두면 잔금일이 훨씬 편하다.
소유권 이전등기 매수인 구비서류 &nbsp; 매수인은 집을 사는 사람이다. 소유권을 받을 사람이라서 본인 확인, 주소 확인, 가족관계 확인, 등기비용 준비가 중심이 된다.
매수인이 준비할 서류 &nbsp; 신분증 도장 매매 계약서 주민등록등본 1통 가족관계증명서 상세 등기비용 은행 일일 이체한도 확인 매수인은 잔금일 전에 은행 이체한도 를 꼭 확인해야 한다. 계약금이나 중도금과 달리 잔금은 금액이 크기 때문에 모바일뱅킹 한도에 걸릴 수 있다. 은행 창구 이체가 필요한지, OTP나 보안매체 한도를 올려야 하는지, 대출금 실행 시간은 언제인지 미리 확인해두는 게 좋다.
등기비용도 미리 계산해야 한다. 취득세, 국민주택채권, 인지세, 등기신청 수수료, 법무사 보수 등이 함께 들어갈 수 있다. 법무사를 이용한다면 잔금 며칠 전에 예상 비용 내역을 받아보고, 현금으로 준비할 금액과 계좌이체할 금액을 나눠두면 된다.
가족관계증명서는 주택 수, 세대 구성, 세금 관련 확인 과정에서 필요할 수 있다. 보통 상세로 발급해두면 실무에서 다시 요청받을 가능성이 줄어든다.
전세권 설정등기 임대인과 임차인 구비서류 &nbsp; 전세 계약을 할 때 모든 사람이 전세권 설정등기를 하는 것은 아니다. 보통 주택 전세에서는 전입신고와 확정일자를 통해 대항력과 우선변제권을 챙기는 경우가 많다. 다만 상황에 따라 전세권 설정등기를 하기도 한다.
전세권 설정등기는 전세금을 낸 임차인이 해당 부동산을 사용하고 수익할 수 있는 권리를 등기부에 올리는 절차다. 쉽게 말하면 전세 계약상의 권리를 등기부에 표시하는 것이다.
임대인이 준비할 서류 &nbsp; 신분증 인감도장 인감증명서 1통 등기권리증 주민등록초본 1통 임대인은 전세권을 설정해주는 부동산 소유자다. 그래서 소유자 본인 확인과 등기 의사 확인에 필요한 인감증명서, 인감도장, 등기권리증이 중요하다. 주민등록초본은 주소 이력 확인을 위해 전주소 포함으로 준비하는 편이 실무상 편하다.
임차인이 준비할 서류 &nbsp; 도장 주민등록등본 1통 임차인은 전세권을 설정받는 사람이다. 기본적으로 주소 확인 서류와 도장이 필요하다. 다만 실제 진행에서는 전세 계약서, 등록면허세 납부 영수증, 등기신청 수수료 등 추가 서류와 비용이 필요할 수 있으니 법무사나 등기소 안내에 따라 최종 확인해야 한다.
전세권 설정등기는 임대인의 협조가 필요하다. 계약서 작성 단계에서 전세권 설정 여부를 미리 합의하고, 비용을 누가 부담할지도 정해두는 것이 좋다. 잔금일 또는 입주일에 갑자기 요청하면 임대인이 거절하거나 일정이 맞지 않을 수 있다.
잔금일 전에 따로 체크해야 할 것들 &nbsp; 서류만 준비했다고 끝은 아니다. 주택 매매나 전세 계약은 돈, 등기, 인도, 정산이 같은 날 몰리는 경우가 많아서 잔금일 전 체크가 중요하다.
1. 서류 발급일을 너무 오래 끌지 않는다 &nbsp; 인감증명서, 주민등록등본, 주민등록초본, 가족관계증명서 등은 너무 오래전에 발급한 서류를 받지 않는 경우가 있다. 보통 잔금일이 가까워졌을 때 발급하는 편이 무난하다. 법무사나 은행이 요구하는 유효기간이 있으면 그 기준을 따르면 된다.
2. 등기부등본을 잔금 직전에 다시 확인한다 &nbsp; 계약할 때 등기부등본을 확인했더라도 잔금일 직전에 다시 확인해야 한다. 계약 후 잔금 전까지 근저당, 가압류, 압류 같은 권리 변동이 생기면 문제가 될 수 있기 때문이다. 대출이 있는 집이라면 말소 조건과 말소 방법도 함께 확인해야 한다.
3. 공과금과 관리비 정산 기준을 정한다 &nbsp; 아파트라면 관리비, 장기수선충당금, 선수관리비를 확인해야 한다. 도시가스, 전기, 수도 요금도 사용일 기준으로 정산한다. &ldquo;잔금일 전일까지는 매도인 또는 임대인, 잔금일 이후부터는 매수인 또는 임차인&quot;처럼 기준을 명확히 잡아두면 분쟁을 줄일 수 있다.
4. 열쇠와 카드키 인수인계를 목록으로 확인한다 &nbsp; 현관 열쇠, 디지털 도어락 비밀번호, 공동현관 카드, 주차 등록, 음식물 쓰레기 카드, 관리사무소 등록 등은 잔금일에 빠지기 쉽다. 작은 것 같지만 입주 당일에는 꽤 불편해질 수 있다.
5. 법무사와 은행 일정은 전날 다시 확인한다 &nbsp; 대출이 있다면 은행 대출 실행 시간과 법무사 등기 접수 시간이 연결된다. 잔금 입금, 기존 대출 상환, 근저당 말소, 소유권 이전등기가 순서대로 진행되기 때문에 전날 한 번 더 확인하는 것이 좋다.
정리 &nbsp; 주택 매매와 전세 계약은 계약서 작성보다 잔금일 준비가 더 복잡하게 느껴질 수 있다. 하지만 역할별로 나누면 생각보다 단순하다.
매도인은 소유권을 넘겨줄 수 있는 서류를 준비하고, 매수인은 소유권을 받을 수 있는 서류와 등기비용을 준비한다. 전세권 설정등기를 한다면 임대인은 소유자로서 협조 서류를 준비하고, 임차인은 등기권리자로서 주소 확인 서류를 준비한다.
핵심은 잔금일에 처음 챙기지 않는 것이다. 계약 직후에 필요한 서류 목록을 받아두고, 잔금 1주일 전쯤 발급 서류와 이체한도, 공과금 정산, 등기부등본을 다시 확인하면 훨씬 덜 불안하다.
처음 집을 사고팔거나 전세권 설정등기를 준비한다면, 이 글의 목록을 기본 체크리스트로 쓰고 최종 서류는 담당 법무사, 은행, 공인중개사에게 한 번 더 확인하면 된다.
자주 묻는 질문 &nbsp; 매도용 인감증명서에는 어떤 정보가 들어가야 하나? &nbsp; 매수자의 성명, 주민등록번호, 주소가 들어가야 한다. 계약서의 매수자 정보와 다르면 다시 발급해야 할 수 있으니 발급 전에 계약서와 정확히 맞춰보는 것이 좋다.
소유권 이전등기는 꼭 법무사를 통해야 하나? &nbsp; 반드시 법무사를 통해야 하는 것은 아니다. 직접 등기 신청도 가능하다. 다만 매매 금액이 크고 대출, 근저당 말소, 취득세 납부가 같이 엮이는 경우가 많아서 처음이라면 법무사를 이용하는 편이 실무적으로 편하다.
전세 계약을 하면 전세권 설정등기를 꼭 해야 하나? &nbsp; 꼭 해야 하는 것은 아니다. 일반 주택 전세에서는 전입신고와 확정일자를 통해 권리를 보호하는 경우가 많다. 다만 임차인의 상황, 보증금 규모, 임대인의 동의 여부에 따라 전세권 설정등기를 선택할 수 있으니 계약 전에 필요성을 검토하는 것이 좋다.`}).add({id:113,href:"/posts/mortgage-loan-documents/",title:"주택담보대출 신청 서류 총정리: 직장인, 개인사업자, ...",description:"주택담보대출 신청 전 준비해야 할 주택 관련 서류, 소득 증빙 서류, 세금 완납 서류, 신분 및 가족관계 서류를 직업별로 쉽게 정리했다.",content:`주택담보대출을 알아보다 보면 금리와 한도만 먼저 보게 된다. 그런데 실제로 은행 상담을 시작하면 생각보다 많은 서류에서 막힌다. 집을 이미 갖고 있는지, 새로 매수하는지, 세입자가 있는지, 직장인인지 개인사업자인지에 따라 준비해야 할 서류가 달라지기 때문이다.
주담대는 대출 금액이 크고 담보로 잡히는 집의 가치도 크다. 금융기관 입장에서는 신청자가 집을 담보로 제공할 권리가 있는지, 소득으로 대출을 갚을 수 있는지, 세금 체납은 없는지, 세대 기준으로 주택 수 규제에 걸리지는 않는지 확인해야 한다.
이 글에서는 주택담보대출 신청 시 자주 요구되는 서류를 네 가지 묶음으로 나누어 정리하였다. 금융기관마다 세부 기준은 다를 수 있지만, 아래 서류들은 대부분의 주담대 심사에서 기본적으로 확인되는 항목이다.
주택 관련 서류부터 준비해야 한다 &nbsp; 주택담보대출의 출발점은 담보로 제공할 집이다. 그래서 은행은 먼저 &ldquo;이 집을 담보로 잡을 수 있는가&quot;를 확인한다. 이미 보유한 주택을 담보로 대출받는지, 새로 살 집을 담보로 대출받는지에 따라 제출 서류가 달라진다.
이미 보유한 주택이라면 등기권리증 &nbsp; 이미 내 명의로 된 주택을 담보로 대출받는다면 보통 등기권리증 이 필요하다. 흔히 &ldquo;집문서&quot;라고 부르는 서류다. 주택을 매수하고 소유권 이전 등기를 마치면 등기소에서 받는 서류이며, 내가 해당 주택의 권리자라는 사실을 확인하는 데 쓰인다.
공동명의 주택이라면 대출 신청자뿐 아니라 공동명의자 관련 서류도 함께 요구될 수 있다. 공동명의자는 담보 제공에 동의해야 하는 경우가 많으므로, 대출을 알아볼 때 명의자 전원이 필요한 절차를 미리 확인하는 것이 좋다.
등기권리증은 분실해도 재발급되지 않는다. 다만 제출이 어려운 경우 금융기관이나 법무사를 통해 확인서면 등 대체 절차를 안내받을 수 있다. 분실 사실을 뒤늦게 알면 대출 실행 일정이 밀릴 수 있으니 미리 확인해두는 편이 낫다.
매수 예정 주택이라면 매매계약서 &nbsp; 아직 내 집은 아니지만 매매계약을 체결한 주택을 담보로 대출받는 경우에는 주택 매매계약서 사본 이 필요하다. 은행은 계약서로 매수인, 매도인, 매매금액, 잔금일, 대상 주택 정보를 확인한다.
잔금일에 맞춰 대출을 실행해야 하는 경우가 많기 때문에 계약서상 일정이 특히 중요하다. 대출 심사와 실행은 하루 만에 끝나는 일이 아니므로, 계약 직후 금융기관에 필요 서류 목록을 받아두는 것이 좋다.
세입자가 있으면 임대차 관련 서류도 필요하다 &nbsp; 담보 주택에 전세나 월세 세입자가 살고 있다면 임대차계약서도 요구될 수 있다. 세입자의 보증금은 담보 가치와 대출 가능 금액에 영향을 줄 수 있기 때문이다.
이때 함께 자주 나오는 서류가 전입세대확인서 또는 전입세대열람내역 이다. 해당 주택에 누가 전입해 있는지 확인하는 서류로, 세입자 존재 여부와 전입 시점을 확인하는 데 쓰인다.
전입세대 관련 서류는 온라인 발급이 제한되는 경우가 많다. 보통 주민센터 방문이 필요하므로, 바쁜 직장인이라면 은행 방문일과 주민센터 방문일을 따로 잡아야 할 수도 있다.
소득과 상환능력 증빙 서류는 직업별로 다르다 &nbsp; 주택담보대출은 집만 보고 빌려주는 대출이 아니다. 담보가 있어도 신청자가 매달 원리금을 갚을 수 있어야 한다. 그래서 소득과 재직 상태를 확인하는 서류가 중요하다.
직장인은 재직증명서와 원천징수영수증 &nbsp; 직장인이라면 먼저 회사에 다니고 있다는 사실을 보여주는 재직증명서 가 필요하다. 금융기관에 따라 재직증명서 대신 국민건강보험공단의 건강보험 자격득실 확인서를 요구하기도 한다.
소득 증빙으로는 근로소득 원천징수영수증 이 많이 쓰인다. 보통 최근 1~2년치 자료를 요구하는 경우가 많고, 은행은 이 자료를 통해 연소득을 확인한 뒤 DSR 같은 상환능력 기준을 계산한다.
입사한 지 얼마 되지 않았다면 최근 급여명세서나 갑종근로소득 원천징수영수증을 추가로 요구받을 수 있다. 아직 1년치 소득 자료가 없기 때문에 최근 월급을 기준으로 연소득을 추정하기 위해서다.
주의할 점은 퇴사나 이직 시점이다. 전 직장에서 받았던 연봉이 높더라도 현재 재직 상태와 현재 소득이 중요하게 반영된다. 주택담보대출을 준비 중이라면 이직, 퇴사, 휴직 일정이 대출 심사에 어떤 영향을 주는지 먼저 상담해보는 것이 좋다.
개인사업자는 사업자등록증명원과 소득금액증명원 &nbsp; 개인사업자는 직장인처럼 재직증명서를 낼 수 없다. 대신 실제로 사업을 운영하고 있다는 사실을 보여주는 사업자등록증명원 이 필요하다.
소득 증빙으로는 소득금액증명원 이 대표적이다. 종합소득세 신고 내용을 바탕으로 사업자의 소득을 확인하는 서류다. 사업자등록증명원과 소득금액증명원은 홈택스에서 발급받을 수 있다.
사업자는 매출이 크더라도 신고된 소득이 낮으면 대출 심사에서 인정되는 소득도 낮게 잡힐 수 있다. 대출 한도를 예상할 때 &ldquo;통장에 들어오는 돈&quot;이 아니라 &ldquo;증명 가능한 소득&quot;을 기준으로 봐야 한다.
무직자도 소득 추정 자료를 요구받을 수 있다 &nbsp; 근로자나 사업자가 아니어도 주택담보대출이 무조건 불가능한 것은 아니다. 다만 소득을 직접 증명하기 어렵기 때문에 금융기관은 다른 자료로 상환능력을 추정한다.
대표적으로 신용카드와 체크카드 사용내역, 건강보험 납부확인서 같은 자료를 요구할 수 있다. 카드 사용액으로 생활 수준과 추정 소득을 보고, 건강보험료 납부액으로 소득이나 자산 수준을 가늠하는 식이다.
무직자의 경우 금융기관별 판단 차이가 더 크다. 같은 조건이어도 은행마다 요구 서류와 인정 방식이 다를 수 있으니 한 곳의 결과만 보고 단정하지 않는 것이 좋다.
세금 완납 증명 서류도 빠지지 않는다 &nbsp; 주택담보대출 심사에서는 세금 체납 여부도 확인한다. 국세나 지방세를 밀린 상태라면 대출 심사에서 불리하게 작용할 수 있고, 금융기관에 따라 대출 진행이 제한될 수 있다.
일반적으로 요구되는 서류는 다음과 같다.
서류 확인 내용 발급처 납세증명서 국세 체납 여부 홈택스, 정부24 지방세 납세증명서 지방세 체납 여부 정부24, 위택스, 주민센터 지방세 세목별 과세증명서 세목별 지방세 부과 내역 정부24, 위택스, 주민센터 이 서류들은 &ldquo;세금을 냈다&quot;는 단순 확인을 넘어, 신청자의 재정 상태를 보는 자료로도 활용된다. 발급일 기준 유효기간이 짧게 적용되는 경우가 있으므로 너무 일찍 준비하기보다 은행에서 요구한 시점에 맞춰 발급받는 편이 안전하다.
신분, 가족관계, 인감 서류를 함께 챙겨야 한다 &nbsp; 대출 신청자의 신분을 확인하는 서류도 기본이다. 주민등록증이나 운전면허증 같은 신분증은 반드시 필요하고, 상황에 따라 사본 제출을 요구받을 수 있다.
주민등록등본, 주민등록초본, 가족관계증명서도 자주 요구된다. 단순히 가족을 확인하려는 목적만은 아니다. 주택담보대출은 세대 기준 주택 수, 기존 주택 보유 여부, 규제지역 여부 등에 따라 한도와 조건이 달라질 수 있다. 금융기관은 세대 구성과 가족관계를 확인해 대출 규제 적용 여부를 판단한다.
인감증명서도 미리 확인해야 한다. 주택담보대출 과정에서는 근저당권 설정 등 법적 효력이 있는 서류에 서명하거나 날인해야 한다. 인감증명서는 해당 도장이 공식 등록된 인감이라는 사실을 증명하는 서류다.
인감증명서는 온라인으로 발급받을 수 없고 주민센터 방문이 필요하다. 본인서명사실확인서로 대체 가능한 경우도 있지만, 모든 금융기관과 모든 절차에서 같은 방식으로 처리되는 것은 아니므로 은행 안내를 따르는 것이 좋다.
주담대 서류 준비 체크리스트 &nbsp; 서류가 많아 보이지만 목적별로 나누면 정리하기 쉽다. 아래 목록을 기준으로 먼저 준비하고, 실제 신청 전에는 금융기관에서 제공하는 최종 목록과 비교하면 된다.
담보 주택 확인 매매 건은 매매계약서 / 소유권 이전 완료된 주택인 경우 등기권리증 임차인 거주 주택인 경우 임대차계약서 부동산등기부등본 전입세대확인서 (성명, 전입일 모두 기재) → 신청 시점, 대출실행 당일 총 2번 제출 직장인 소득 증빙 재직증명서 건강보험 자격득실 확인서(전체 자격) 근로소득 원천징수영수증(최근 2개년 치) ※ 1년 미만 재직자의 경우 입사 후 현재까지 급여 명세서 (직인 필수) 급여명세서(직인 필수) 개인사업자 소득 증빙 사업자등록증명원 소득금액증명원 부가가치세 관련 자료 무직자 소득 추정 카드 사용내역서 건강보험 납부확인서 세금 확인 납세증명서, 지방세 납세증명서, 지방세 세목별 과세증명서 신분 및 가족관계 신분증 주민등록등본(주민번호 뒷자리 포함) 주민등록초본(주소 변동 전체 이력 포함) 가족관계증명서(주민번호 뒷자리 포함), 본인 및 공동명의인 인감증명서 배우자와 별도 세대 구성 시 배우자의 주민등록등본 추가 (주민번호 뒷자리 포함) 미성년 자녀가 있는 경우 자녀별 자녀 기준 기본증명서 (상세, 주민번호 뒷자리 포함) 본인 및 공동명의인 인감증명서, 인감도장 (배우자 공동명의일 경우 배우자 신분증, 인감도장, 인감증명서, 주민등록초본 필요) 서류 준비에서 가장 흔한 실수는 &ldquo;대충 비슷한 서류면 되겠지&quot;라고 생각하는 것이다. 예를 들어 주민등록등본과 초본은 쓰임이 다르고, 납세증명서와 지방세 납세증명서도 서로 다른 서류다. 금융기관이 요구한 정확한 이름을 확인한 뒤 발급받아야 한다.
또 하나는 발급일이다. 대출 서류는 최근 발급분을 요구하는 경우가 많다. 오래전에 출력해둔 서류가 있다면 그대로 쓰기 어렵거나 다시 발급받아야 할 수 있다.
마무리 &nbsp; 주택담보대출 서류가 많은 이유는 간단하다. 금융기관은 담보 주택의 권리관계, 신청자의 소득과 상환능력, 세금 체납 여부, 세대 기준 규제 적용 여부를 모두 확인해야 한다. 그래서 등기권리증이나 매매계약서 같은 주택 서류뿐 아니라 소득 증빙, 세금 증명, 가족관계 서류까지 함께 요구된다.
주담대를 준비한다면 먼저 내가 어떤 상황인지부터 나누어보는 것이 좋다. 이미 보유한 주택인지, 매수 예정 주택인지, 세입자가 있는지, 직장인인지 개인사업자인지에 따라 필요한 서류가 달라진다. 이후 은행에서 받은 서류 목록을 기준으로 하나씩 체크하면 불필요한 재방문을 줄일 수 있다.
자주 묻는 질문 &nbsp; 등기권리증을 잃어버리면 주택담보대출을 못 받을까? &nbsp; 무조건 불가능한 것은 아니다. 등기권리증은 재발급되지 않지만, 금융기관이나 법무사를 통해 확인서면 등 대체 절차를 진행할 수 있다. 다만 시간이 더 걸릴 수 있으니 분실 사실을 알았다면 대출 상담 초기에 바로 말하는 것이 좋다.
전입세대확인서는 인터넷으로 발급받을 수 있을까? &nbsp; 전입세대 관련 서류는 온라인 발급이 제한되는 경우가 많아 주민센터 방문이 필요한 편이다. 담보 주택 소재지, 신청 자격, 필요 서류에 따라 처리 방식이 달라질 수 있으므로 방문 전 주민센터나 금융기관에 확인하는 것이 좋다.
직장인이 이직 직후 주담대를 신청하면 불리할까? &nbsp; 불리해질 수 있다. 은행은 현재 재직 상태와 증명 가능한 현재 소득을 중요하게 본다. 이직 직후라면 1년치 원천징수영수증이 부족할 수 있어 급여명세서나 갑종근로소득 원천징수영수증 같은 추가 자료를 요구받을 수 있다.`}).add({id:114,href:"/posts/mortgage-loan-basics/",title:"주택담보대출은 일반 대출과 무엇이 다를까: 뜻, 한도,...",description:"주택담보대출이 일반 신용대출과 어떻게 다른지, 담보의 의미, LTV·DTI·DSR 규제, 상환 방식, 장단점과 대출 전 체크할 내용을 초보자 눈높이로 정리했다.",content:`집을 살 때 가장 먼저 부딪히는 현실은 돈이다. 예금만으로 집값을 모두 준비할 수 있다면 좋겠지만, 대부분은 주택담보대출을 함께 알아보게 된다. 집값 자체가 크다 보니 대출금도 커지고, 매달 갚아야 하는 돈도 오래 이어진다.
그래서 주택담보대출은 그냥 &ldquo;은행에서 돈 빌리는 것&rdquo; 정도로 보면 부족하다. 신용대출보다 금리가 낮을 수 있지만, 집을 담보로 잡는 만큼 심사와 규제도 더 복잡하다. 대출금이 큰 만큼 잘못 이해하고 받으면 생활비, 이자 부담, 향후 이사 계획까지 모두 꼬일 수 있다.
이 글에서는 주택담보대출이 일반 대출과 무엇이 다른지, 어떤 기준으로 한도가 정해지는지, 상환 방식과 장단점은 무엇인지 누구나 이해하기 쉽게 정리하였다.
주택담보대출이란 무엇일까 &nbsp; 주택담보대출은 말 그대로 주택을 담보로 맡기고 돈을 빌리는 대출 이다. 이미 보유한 집을 담보로 받을 수도 있고, 새로 살 집을 담보로 대출을 받을 수도 있다.
예를 들어 6억 원짜리 아파트를 사려고 하는데 내 돈이 2억 원만 있다면, 부족한 금액을 주택담보대출로 마련하는 식이다. 은행은 대출을 해주는 대신 그 집에 근저당권을 설정한다. 쉽게 말해 돈을 제대로 갚지 못할 경우 은행이 담보 주택을 통해 빌려준 돈을 회수할 수 있는 장치를 두는 것이다.
이 점이 신용대출과 가장 큰 차이다.
신용대출: 직업, 소득, 신용점수 등 사람의 신용을 보고 빌려준다 주택담보대출: 사람의 상환 능력과 함께 집이라는 담보 가치를 보고 빌려준다 담보가 있기 때문에 주택담보대출은 신용대출보다 금리가 낮게 나오는 경우가 많다. 대신 대출 절차가 복잡하고, 부동산 규제와 소득 규제를 함께 받는다.
일반 대출과 다른 핵심 차이 &nbsp; 대출금이 훨씬 크다 &nbsp; 주택담보대출은 생활비나 자동차 구입 자금처럼 몇백만 원, 몇천만 원 단위로 끝나는 경우가 드물다. 보통 억 단위 대출이 많다. 그래서 금리 0.1% 차이도 장기적으로 보면 큰 금액이 된다.
예를 들어 3억 원을 30년 동안 빌렸다면 금리 차이가 작아 보여도 총이자 차이는 꽤 커질 수 있다. 주택담보대출을 받을 때 여러 은행의 금리를 비교해야 하는 이유가 여기에 있다.
상환 기간이 길다 &nbsp; 주택담보대출은 20년, 30년, 길게는 40년 이상으로 설정되는 경우도 있다. 기간이 길면 매달 갚는 돈은 줄어들 수 있지만, 전체 이자 부담은 늘어난다.
반대로 기간을 짧게 잡으면 총이자는 줄일 수 있지만 매달 상환액이 커진다. 그래서 단순히 &ldquo;빨리 갚는 게 좋다&quot;로 끝낼 문제가 아니다. 내 월급, 생활비, 자녀 계획, 이사 가능성까지 함께 봐야 한다.
규제를 많이 받는다 &nbsp; 신용대출은 주로 신용점수와 소득을 많이 본다. 주택담보대출은 여기에 부동산 규제가 추가된다. 대표적으로 LTV, DTI, DSR 같은 기준이 있다.
이 규제들은 &ldquo;집값 기준으로 얼마까지 빌릴 수 있는지&rdquo;, &ldquo;소득 기준으로 갚을 수 있는지&rdquo;, &ldquo;기존 대출까지 합쳐 감당 가능한지&quot;를 따져보는 장치다.
주택담보대출 한도를 정하는 LTV, DTI, DSR &nbsp; 주택담보대출을 알아볼 때 가장 자주 보는 단어가 LTV, DTI, DSR이다. 처음 보면 어렵지만 핵심 질문으로 보면 이해가 쉽다.
구분 기준 핵심 질문 LTV 주택 가격 이 집을 담보로 얼마까지 빌려줄 수 있을까 DTI 소득과 주담대 상환액 소득 대비 주택담보대출 상환 부담이 큰가 DSR 전체 대출 원리금 모든 빚을 합쳐도 감당 가능한가 LTV는 집값 기준이다 &nbsp; LTV는 주택 가격 대비 대출 가능 비율이다. 집값이 6억 원이고 LTV가 70%라면 단순 계산상 최대 4억 2천만 원까지 가능하다는 뜻이다.
6억 원 × 70% = 4억 2천만 원
하지만 여기서 끝이 아니다. LTV로는 가능해 보여도 DSR에서 막힐 수 있다.
DSR은 소득 기준이다 &nbsp; DSR은 모든 대출의 연간 원리금 상환액을 연소득과 비교하는 기준이다. 주택담보대출뿐 아니라 신용대출, 자동차 할부, 카드론 같은 다른 빚도 함께 본다.
그래서 집값 기준으로는 충분히 대출이 나올 것 같아도, 기존 신용대출이 많거나 소득 대비 상환액이 크면 실제 한도는 줄어든다.
주택담보대출에서 사람들이 자주 놓치는 부분이 바로 이 지점이다. &ldquo;LTV가 70%니까 집값의 70%까지 무조건 나오겠지&quot;라고 생각하면 위험하다. 실제 은행 심사에서는 담보 가치와 상환 능력을 함께 본다.
규제는 대출받는 시점에 다시 확인해야 한다 &nbsp; 주택담보대출 규제는 부동산 시장 상황, 정부 정책, 지역, 주택 수, 대출 목적에 따라 바뀔 수 있다. 규제지역인지 비규제지역인지, 무주택자인지 1주택자인지, 생애최초 구입인지에 따라 조건이 달라질 수 있다.
그래서 글이나 영상으로 개념을 이해하는 것은 좋지만, 실제 대출을 받을 때는 반드시 은행이나 공식 안내에서 현재 기준을 확인해야 한다.
상환 방식은 어떻게 다를까 &nbsp; 주택담보대출은 금액이 크고 기간이 길기 때문에 상환 방식이 중요하다. 대표적으로 원리금균등상환, 원금균등상환, 거치식 상환을 많이 본다.
원리금균등상환 &nbsp; 원리금균등상환은 매달 내는 원금과 이자의 합계가 비슷하게 유지되는 방식이다. 매달 나가는 돈을 예측하기 쉬워서 가계부를 짜기 편하다.
초기에는 이자 비중이 크고, 시간이 지날수록 원금 상환 비중이 커진다. 안정적으로 월 상환액을 관리하고 싶은 사람에게 많이 맞는다.
원금균등상환 &nbsp; 원금균등상환은 매달 갚는 원금이 일정한 방식이다. 처음에는 남은 원금이 크기 때문에 이자도 많이 붙어서 월 상환액이 높다. 대신 시간이 갈수록 이자가 줄어 월 부담이 낮아진다.
초기 상환 부담을 버틸 수 있다면 총이자를 줄이는 데 유리할 수 있다.
거치식 상환 &nbsp; 거치식은 일정 기간 동안 원금은 갚지 않고 이자만 내다가, 거치 기간이 끝난 뒤 원금을 함께 갚는 방식이다. 초기 부담은 낮지만 나중에 상환 부담이 커질 수 있다.
집을 산 직후 인테리어, 이사비, 취득세 등으로 현금이 많이 나갈 때는 거치 기간이 매력적으로 보일 수 있다. 하지만 거치가 끝난 뒤 월 상환액이 얼마나 늘어나는지 반드시 계산해봐야 한다.
주택담보대출의 장점과 단점 &nbsp; 주택담보대출의 가장 큰 장점은 큰돈이 필요한 주택 구입을 현실적으로 가능하게 해준다는 점이다. 집은 실거주 공간이면서 동시에 큰 자산이다. 적정한 가격, 감당 가능한 대출, 안정적인 소득이 맞아떨어진다면 주택담보대출은 내 집 마련의 중요한 수단이 될 수 있다.
또 담보가 있기 때문에 신용대출보다 금리가 낮게 나오는 경우가 많다. 같은 금액을 빌려야 한다면 금리 차이는 장기적으로 큰 영향을 준다.
하지만 단점도 분명하다.
대출금이 커서 금리 상승에 민감하다 상환 기간이 길어 오랜 기간 현금흐름을 묶는다 집값이 하락하면 심리적 부담이 커진다 중도상환수수료, 인지세, 근저당 설정 비용 같은 부대비용이 생길 수 있다 규제 변경에 따라 예상 한도와 실제 한도가 달라질 수 있다 특히 집값이 많이 오른 시기에 무리하게 대출을 받으면 위험하다. &ldquo;집은 결국 오른다&quot;는 생각만으로 접근하면 안 된다. 내 소득으로 버틸 수 있는 월 상환액인지, 금리가 올라도 감당 가능한지, 비상금이 남는지를 같이 봐야 한다.
대출 받기 전에 꼭 확인할 것 &nbsp; 주택담보대출은 받기 전 계산이 거의 전부다. 은행에서 승인된다고 해서 무조건 내게 좋은 대출은 아니다. 승인 가능 여부와 감당 가능 여부는 다르다.
대출 전에 최소한 아래 항목은 확인하는 게 좋다.
내 자기자금이 얼마인지 정리한다. 취득세, 중개수수료, 이사비, 인테리어비까지 포함해 필요한 현금을 계산한다. LTV 기준으로 가능한 대출금과 DSR 기준으로 가능한 대출금을 따로 본다. 고정금리, 변동금리, 혼합형 금리 조건을 비교한다. 원리금균등상환과 원금균등상환의 월 상환액을 비교한다. 중도상환수수료와 부대비용을 확인한다. 금리가 1~2%p 올라도 버틸 수 있는지 계산한다. 개인적으로는 &ldquo;최대한 많이 빌릴 수 있는가&quot;보다 &ldquo;무리 없이 오래 갚을 수 있는가&quot;가 더 중요하다고 본다. 주택담보대출은 한 번 받으면 짧게 끝나는 대출이 아니다. 생활 전체에 영향을 주는 장기 계약에 가깝다.
정리 &nbsp; 주택담보대출은 일반 신용대출과 다르게 집을 담보로 하는 대출이다. 담보가 있기 때문에 금리가 낮을 수 있지만, 대출금이 크고 상환 기간이 길며 LTV, DTI, DSR 같은 규제를 함께 받는다.
핵심만 다시 정리하면 이렇다.
주택담보대출은 주택을 담보로 돈을 빌리는 대출이다. 신용대출보다 금리가 낮을 수 있지만 절차와 규제가 복잡하다. LTV는 집값 기준, DSR은 소득과 전체 대출 기준이다. 주택담보대출은 원리금균등, 원금균등, 거치식 등 상환 방식에 따라 부담이 달라진다. 대출 가능 금액보다 매달 감당 가능한 상환액이 더 중요하다. 집을 살 때 대출은 피하기 어려운 선택일 수 있다. 하지만 금액이 큰 만큼 대충 알아보고 결정하면 안 된다. 최소한 담보, 한도, 금리, 상환 방식, 규제 기준은 이해한 뒤 내 상황에 맞는 대출을 선택하는 게 좋다.
자주 묻는 질문 &nbsp; 주택담보대출은 신용대출보다 무조건 유리할까? &nbsp; 무조건은 아니다. 일반적으로 담보가 있어 금리가 낮게 나올 가능성은 있지만, 대출 기간이 길고 금액이 커서 총이자는 클 수 있다. 또 부대비용과 규제도 함께 봐야 한다.
LTV만 맞으면 원하는 금액을 다 빌릴 수 있을까? &nbsp; 아니다. LTV는 집값 기준 한도일 뿐이다. 실제 대출 한도는 DSR, 소득, 기존 대출, 주택 수, 지역 규제, 은행 심사 기준에 따라 달라진다.
주택담보대출은 고정금리와 변동금리 중 무엇이 좋을까? &nbsp; 정답은 없다. 금리 상승이 걱정되고 월 상환액을 안정적으로 관리하고 싶다면 고정금리나 혼합형이 편할 수 있다. 반대로 금리 하락 가능성을 보고 초기 금리를 낮추고 싶다면 변동금리를 검토할 수 있다. 다만 변동금리는 금리가 오를 때 상환 부담이 커질 수 있다.`}).add({id:115,href:"/posts/house-type/",title:"주택의 종류",description:"주택 종류에 대해서 알아본다.",content:`주택이란? &nbsp; 주택은 주택법 제2조(정의)에 따라서 단독주택과 공동주택으로 구분된다.
단독주택은 단독주택, 다중주택, 다가구주택으로 구분되고, 공동주택은 아파트, 연립주택, 다세대주택으로 구분된다.
단독주택 &nbsp; 단독 주택 종류는 아래와 간다.
단독 주택 &nbsp; 단독 1가구만이 살 수 있는 독립된 주택을 말한다.
다중주택 &nbsp; 다중 주택은 아래의 요건을 모두 갖춘 주택을 말한다.
학생 또는 직장인 등 여러 사람이 장기간 거주할 수 있는 구조 독립된 주거의 형태를 갖추지 않은 것 (공용 취사시설) 1개 동의 주택으로 쓰이는 바닥면적의 합계가 660㎡ 이하 주택으로 쓰이는 층 수가 3개 층 이하 건축조례로 정하는 실별 최소 면적, 창문의 설치 및 크기 등의 기준에 적합할 것 다가구주택 &nbsp; 다가구 주택은 아래의 요건을 모두 갖추고 공동주택에 해당하지 않는 주택을 말한다.
주택으로 쓰는 층수가 3개 층 이하 (지하층 제외) 1개 동의 주택으로 쓰이는 바닥면적의 합계가 660㎡ 이하 19세대 이하 거주 공동주택 &nbsp; 공동주택 종류는 아래와 간다.
다세대주택 &nbsp; 주택으로 쓰는 1개 동의 바닥면적 합계가 660㎡ 이하이고, 층수가 4개 층 이하인 주택을 말한다.
각 호수의 소유자가 다르다.
연립주택 &nbsp; 주택으로 쓰는 1개 동의 바닥면적 합계가 660㎡를 초과하고, 층수가 4개 층 이하인 주택을 말한다.
아파트 &nbsp; 주택으로 쓰는 층수가 5층 이상인 주택을 말한다.`}).add({id:116,href:"/docs/isa/account-type/brokerage/",title:"중개형 ISA",description:"중개형 ISA의 뜻, 가입 자격, 납입한도, 비과세와 분리과세 혜택, 편입 가능 상품, 중도인출, 만기 후 연금계좌 이전까지 쉽게 정리했다.",content:`주식이나 ETF 투자를 시작하면 세금 이야기를 피하기 어렵다. 배당소득세, 이자소득세, 해외 ETF 과세, 금융소득종합과세 같은 단어가 나오면 투자보다 세금이 더 어렵게 느껴진다.
중개형 ISA는 이런 부담을 줄이기 위해 많이 활용되는 계좌다. 하나의 계좌에서 국내 상장주식, ETF, 펀드, RP 등 여러 금융상품을 직접 운용하면서 ISA의 절세 혜택을 받을 수 있다. 특히 직접 투자하는 사람에게는 신탁형이나 일임형보다 훨씬 익숙한 방식이다.
다만 중개형 ISA도 무조건 좋은 계좌는 아니다. 3년 의무가입기간이 있고, 납입한도가 있으며, 모든 상품이 원금보장되는 것도 아니다. 이 글에서는 중개형 ISA의 뜻, 세금 혜택, 장점과 단점, 계좌 활용법을 초보자 기준으로 정리했다.
중개형 ISA란 무엇인가? &nbsp; 중개형 ISA는 투자자가 직접 금융상품을 사고팔 수 있는 개인종합자산관리계좌다. ISA는 &ldquo;Individual Savings Account&quot;의 약자이고, 한국어로는 개인종합자산관리계좌라고 부른다.
ISA는 크게 신탁형, 일임형, 중개형으로 나뉜다. 그중 중개형 ISA는 증권사 계좌처럼 직접 매매할 수 있다는 점이 특징이다.
쉽게 말하면 이런 계좌다.
국내 상장주식, ETF, 펀드, RP 등 여러 상품을 한 계좌에서 운용한다. 투자자가 시장 상황에 맞춰 직접 상품을 바꾸고 비중을 조절한다. 계좌 안에서 발생한 손익을 통산해 세금을 계산한다. 일정 순이익까지 비과세 혜택을 받고, 초과분은 낮은 세율로 분리과세된다. 한국투자증권도 ISA 중개형을 국내 상장주식, 국내채권, ETF/ETN, 펀드, ELS, RP 등을 투자자가 한 계좌에서 자유롭게 운용하면서 손익통산과 절세 혜택을 받을 수 있는 개인종합자산관리계좌로 설명한다.
중개형 ISA 가입 자격과 납입한도 &nbsp; 중개형 ISA는 기본적으로 만 19세 이상 국내 거주자라면 가입할 수 있다. 근로소득이 있는 경우에는 만 15세 이상도 가입 가능하다. 다만 직전 3개 과세기간 중 1회 이상 금융소득종합과세 대상자였던 사람은 가입할 수 없다.
또 하나 중요한 조건은 전 금융기관을 통틀어 1인 1계좌만 가능하다는 점이다. A증권사에 중개형 ISA를 만들고, B은행에 신탁형 ISA를 하나 더 만드는 식은 불가능하다.
납입한도는 다음처럼 정리할 수 있다.
구분 내용 연간 납입한도 2,000만원 총 납입한도 1억원 의무가입기간 3년 미납입한도 다음 연도로 이월 가능 예를 들어 올해 500만원만 납입했다면 사용하지 않은 1,500만원 한도는 다음 해로 이월할 수 있다. 그래서 매년 2,000만원을 꼭 채워야 한다는 부담은 없다.
다만 기존 재형저축이나 소득공제장기펀드가 있다면 납입한도 계산에 영향을 줄 수 있다. 실제 가입 전에는 증권사 앱에서 내 한도를 확인하는 것이 정확하다.
중개형 ISA 세금 혜택: 비과세와 분리과세 &nbsp; 중개형 ISA의 가장 큰 장점은 세금이다. 일반 계좌에서는 이자나 배당소득에 보통 15.4% 세금이 붙는다. 하지만 ISA에서는 계좌 안에서 발생한 운용손익을 통산한 뒤 순이익을 기준으로 세제 혜택을 적용한다.
일반형 중개형 ISA는 순이익 200만원까지 비과세다. 서민형과 농어민형은 순이익 400만원까지 비과세다. 비과세 한도를 넘은 금액은 9.9%로 분리과세된다.
구분 비과세 한도 초과분 과세 일반형 순이익 200만원 9.9% 분리과세 서민형 순이익 400만원 9.9% 분리과세 농어민형 순이익 400만원 9.9% 분리과세 예를 들어 일반형 ISA에서 3년 동안 순이익이 600만원 발생했다고 가정해보자. 200만원은 비과세이고, 나머지 400만원에 대해서만 9.9% 세금이 붙는다. 세금은 39만6,000원이다.
같은 600만원 수익을 일반 계좌의 이자·배당소득처럼 15.4%로 과세한다고 보면 세금은 92만4,000원이다. 단순 비교하면 ISA를 활용했을 때 세금 차이가 꽤 커진다.
물론 실제 세금은 상품 종류, 수익 성격, 계좌 운용 방식에 따라 달라질 수 있다. 그래도 ISA의 기본 구조는 &ldquo;손익통산 후 비과세, 초과분 저율 분리과세&quot;라고 이해하면 된다.
중개형 ISA에서 살 수 있는 상품 &nbsp; 중개형 ISA는 직접 투자에 강한 계좌다. 증권사마다 세부 상품은 다를 수 있지만 일반적으로 다음과 같은 상품을 담을 수 있다.
국내 상장주식 국내 ETF와 ETN 국내채권 RP 펀드 ELS, DLS, ELB, DLB 같은 파생결합증권 리츠 예탁금 한국투자증권 안내에서도 국내 상장주식, 국내채권, ETF/ETN, 펀드, ELS, RP 등을 중개형 ISA에서 운용 가능한 상품으로 제시한다.
중요한 점은 중개형 ISA가 &ldquo;예금 중심 계좌&quot;는 아니라는 것이다. 예금성 상품을 담고 싶다면 신탁형 ISA가 더 맞을 수 있다. 반대로 ETF와 국내 주식을 직접 사고팔고 싶다면 중개형 ISA가 훨씬 직관적이다.
중개형 ISA의 장점 &nbsp; 중개형 ISA의 장점은 직접 운용과 절세를 함께 가져갈 수 있다는 점이다.
직접 상품 교체와 비중 조정이 가능하다 &nbsp; 중개형 ISA는 시장 상황에 따라 투자자가 직접 상품을 바꾸고 비중을 조절할 수 있다. 예를 들어 평소에는 국내 배당 ETF를 담아두고, 금리가 높을 때는 RP나 채권형 상품 비중을 늘리는 식으로 운용할 수 있다.
일임형 ISA처럼 전문가에게 맡기는 방식이 아니기 때문에 내 판단이 중요하다. 대신 운용 자유도는 높다.
손익통산으로 세금 부담을 줄일 수 있다 &nbsp; ISA는 계좌 안에서 발생한 이익과 손실을 합산해 순이익을 계산한다. 예를 들어 ETF에서 100만원 이익이 나고, 다른 상품에서 40만원 손실이 났다면 과세 판단 기준은 100만원이 아니라 60만원 순이익이다.
중개형 ISA에서는 국내 상장주식 투자에서 발생한 손실을 다른 금융상품 이익과 통산할 수 있다는 점도 절세 측면에서 의미가 있다. 다만 국내 상장주식 매매차익처럼 원래 비과세인 소득은 세금 계산에서 다르게 다뤄질 수 있으므로 상품별 과세 구조를 확인해야 한다.
만기 후 연금계좌 이전이 가능하다 &nbsp; ISA 만기 자금을 연금저축이나 IRP 같은 연금계좌로 옮기면 추가 세액공제 전략을 만들 수 있다. 만기 후 연금계좌로 이전할 경우 이전 금액의 10%, 최대 300만원 한도까지 추가 세액공제를 받을 수 있다.
단기 투자만 생각하면 놓치기 쉬운 부분인데, ISA는 연금계좌와 함께 설계할 때 장기 절세 효과가 더 커질 수 있다.
중개형 ISA의 단점과 주의사항 &nbsp; 중개형 ISA는 장점이 많지만 단점도 분명하다.
첫째, 의무가입기간 3년을 유지해야 세제 혜택을 제대로 받을 수 있다. 3년 전에 중도해지하면 세제 혜택이 사라지거나 이미 받은 혜택이 추징될 수 있다. 그래서 곧 써야 할 생활비나 전세자금은 넣지 않는 편이 좋다.
둘째, 납입한도가 있다. 연 2,000만원, 총 1억원까지만 납입할 수 있다. 큰 금액을 한 번에 넣어 운용하고 싶은 사람에게는 한도가 제한으로 느껴질 수 있다.
셋째, 투자 손실은 투자자에게 귀속된다. ISA라는 이름 때문에 안전한 계좌처럼 느껴질 수 있지만, 중개형 ISA 안에서 매수한 주식, ETF, ELS, 펀드 등은 손실이 날 수 있다.
넷째, 상품별 수수료와 보수가 있다. 중개형 ISA 자체의 가입 수수료나 중도해지 수수료가 없더라도, 주식 매매수수료나 ETF 보수, 펀드 판매보수 같은 비용은 별도로 발생할 수 있다.
다섯째, 원금 범위 내 중도인출은 가능하지만 인출한 만큼 납입한도가 다시 살아나는 것은 아니다. 중도인출을 자주 하면 장기 운용 효과가 약해질 수 있다.
중도인출과 만기 활용법 &nbsp; 중개형 ISA는 납입원금 합계액 한도 내에서 중도인출이 가능하다. 예를 들어 내가 총 1,000만원을 납입했고 계좌 평가금액이 1,200만원이라면, 원금 1,000만원 범위 안에서는 인출이 가능할 수 있다.
하지만 수익금까지 인출하려고 하면 중도해지로 처리될 수 있다. 이 경우 세제 혜택에 문제가 생길 수 있으므로, 인출 전에는 증권사 앱에서 인출 가능 금액과 세금 영향을 확인해야 한다.
만기 때는 크게 세 가지 선택지가 있다.
계좌를 해지하고 현금으로 받는다. 만기를 연장해 계속 운용한다. 연금저축이나 IRP로 이전해 추가 세액공제를 노린다. 개인적으로는 3년을 채웠다고 바로 해지하기보다, 그 돈이 언제 필요한지부터 따져보는 것이 낫다고 본다. 단기 자금이면 해지가 맞을 수 있지만, 노후자금 성격이라면 연금계좌 이전까지 함께 검토할 만하다.
중개형 ISA 계좌 만드는 방법 &nbsp; 중개형 ISA는 보통 증권사 앱에서 비대면으로 만들 수 있다. 세부 메뉴 이름은 증권사마다 다르지만 대체로 흐름은 비슷하다.
증권사 앱을 설치한다. 본인 인증과 계좌 개설 절차를 진행한다. ISA 또는 절세상품 메뉴로 들어간다. 중개형 ISA를 선택한다. 가입 자격과 투자자 정보를 확인한다. 약관과 설명서를 확인한 뒤 계좌를 개설한다. 국내 주식, ETF, RP, 펀드 등 원하는 상품을 매수한다. 한국투자증권은 한국투자앱에서 상품, ISA, ISA개설·타사ISA 가져오기, ISA중개형 개설 경로를 안내한다. 스마트폰 계좌개설 시 일반형으로 가입된다는 안내도 있으므로, 서민형 대상자는 추후 전환 가능 여부와 필요 서류를 확인하는 것이 좋다.
정리: 중개형 ISA는 직접 투자자에게 가장 실용적인 ISA다 &nbsp; 중개형 ISA는 국내 주식, ETF, 채권, RP, 펀드 같은 상품을 직접 운용하면서 세제 혜택을 받을 수 있는 계좌다. 직접 투자에 익숙하거나 앞으로 ETF 중심으로 투자할 생각이라면 가장 먼저 검토할 만한 ISA 유형이다.
핵심만 다시 정리하면 이렇다.
중개형 ISA는 투자자가 직접 상품을 사고파는 ISA다. 만 19세 이상 거주자는 대부분 가입할 수 있고, 근로소득자는 만 15세 이상도 가능하다. 전 금융기관 통틀어 1인 1계좌만 만들 수 있다. 연 2,000만원, 총 1억원까지 납입할 수 있다. 일반형은 순이익 200만원, 서민형·농어민형은 400만원까지 비과세다. 비과세 한도 초과분은 9.9% 분리과세된다. 의무가입기간은 3년이다. 납입원금 범위 안에서 중도인출이 가능할 수 있다. 만기 후 연금계좌 이전으로 추가 세액공제를 노릴 수 있다. 중개형 ISA는 &ldquo;무조건 만들어야 하는 계좌&quot;라기보다, 투자할 생각이 있다면 일반 계좌보다 먼저 검토할 만한 절세 계좌다. 다만 3년 유지가 어렵거나 투자상품 손실을 감당하기 어렵다면 급하게 만들 필요는 없다. 계좌보다 중요한 것은 내가 어떤 돈을 어떤 기간 동안 운용할지 정하는 것이다.
자주 묻는 질문 &nbsp; Q1. 중개형 ISA는 어디에서 만들 수 있나? &nbsp; 주로 증권사에서 만들 수 있다. 은행 중심의 신탁형 ISA와 달리, 중개형 ISA는 국내 주식과 ETF를 직접 매매하는 구조라 증권사 앱에서 개설하는 경우가 많다.
Q2. 중개형 ISA에서 해외 주식도 살 수 있나? &nbsp; 일반적으로 중개형 ISA는 국내 상장주식과 국내 상장 ETF 중심으로 운용한다. 해외 개별 주식을 직접 매수하는 계좌로 보기 어렵다. 해외자산에 투자하고 싶다면 국내 상장 해외 ETF 같은 대안을 확인해야 한다.
Q3. 중개형 ISA는 중도해지 수수료가 있나? &nbsp; 증권사별로 다를 수 있지만, 한국투자증권 안내 기준으로 가입 또는 중도해지 수수료는 없다. 다만 계좌 안에서 매매하는 금융투자상품별 보수와 매매수수료는 별도로 발생할 수 있다.
Q4. 중도인출하면 세제 혜택이 사라지나? &nbsp; 납입원금 범위 안에서의 중도인출은 가능할 수 있다. 다만 수익금 인출이나 계좌 해지로 처리되는 경우에는 세제 혜택에 영향을 줄 수 있으므로 인출 전 확인이 필요하다.
Q5. 일반형으로 가입했는데 서민형으로 바꿀 수 있나? &nbsp; 소득 요건을 충족하면 전환이 가능할 수 있다. 서민형은 비과세 한도가 400만원으로 더 크므로, 총급여 5,000만원 이하 또는 종합소득금액 3,800만원 이하 조건에 해당한다면 증권사에 전환 절차를 확인하는 것이 좋다.`}).add({id:117,href:"/posts/securities-company-site-list/",title:"증권사 사이트 주소 모음, 국내 증권사 공식 홈페이지 ...",description:"국내 주요 증권사 공식 홈페이지 주소를 대형 증권사, 모바일 특화 증권사, 금융그룹 계열, 중소형 증권사, 투자 정보 사이트로 나누어 정리했다.",content:`주식 계좌를 만들거나 HTS, MTS를 내려받으려 할 때 의외로 가장 먼저 막히는 부분이 공식 홈페이지 주소다. 검색 결과에는 광고, 이벤트 페이지, 비슷한 이름의 페이지가 함께 뜨기 때문에 처음 투자하는 사람은 어디로 들어가야 하는지 헷갈릴 수 있다.
증권사 홈페이지는 단순히 계좌 개설만 하는 곳이 아니다. 국내 주식, 해외 주식, ETF, 펀드, 채권, 연금저축, IRP, 리서치 리포트, 수수료 안내까지 투자 생활에 필요한 정보가 모여 있다. 그래서 자주 쓰는 증권사와 투자 정보 사이트는 즐겨찾기에 넣어두면 꽤 편하다.
아래는 국내에서 많이 이용하는 증권사 공식 사이트를 성격별로 정리한 목록이다. 주소를 찾는 용도뿐 아니라, 어떤 증권사가 내 투자 스타일에 맞을지 비교할 때도 함께 보면 좋다.
대형 증권사 공식 홈페이지 &nbsp; 대형 증권사는 자기자본 규모가 크고 개인 투자자 서비스, 자산관리, 기업금융, 해외 투자 인프라를 폭넓게 갖춘 편이다. 처음 주식 투자를 시작하는 사람도 무난하게 이용할 수 있고, 해외 주식이나 연금 계좌까지 함께 관리하려는 사람에게도 선택지가 많다.
증권사 공식 사이트 대표전화 미래에셋증권 https://securities.miraeasset.com 1588-9200 한국투자증권 https://securities.koreainvestment.com 1544-5000 NH투자증권 https://www.nhqv.com 1544-0000 삼성증권 https://www.samsungpop.com 1588-2323 KB증권 https://www.kbsec.com 1588-6611 메리츠증권 https://www.imeritz.com 1588-9600 미래에셋증권과 한국투자증권은 해외 주식, ETF, 연금 상품까지 넓게 보는 투자자에게 자주 언급된다. 삼성증권과 KB증권은 자산관리와 은행 연계 서비스를 함께 보고 싶을 때 비교해볼 만하다. NH투자증권은 농협 계열 금융 서비스를 이용하는 사람에게 접근성이 좋고, 메리츠증권은 기업금융과 채권, 파생상품 쪽 이미지가 강하다.
물론 대형 증권사라고 해서 모든 투자자에게 항상 유리한 것은 아니다. 거래 수수료, 환전 우대, 앱 사용성, 이벤트 조건은 시기마다 달라지기 때문에 계좌 개설 전에 현재 조건을 한 번 더 확인하는 편이 좋다.
온라인·모바일 특화 증권사 &nbsp; 온라인이나 모바일 중심 증권사는 비대면 계좌 개설, 낮은 수수료, 간단한 앱 화면이 장점이다. 영업점 방문보다 앱으로 대부분 처리하는 투자자라면 먼저 비교해볼 만하다.
증권사 공식 사이트 특징 키움증권 https://www.kiwoom.com 영웅문 HTS·MTS로 알려진 온라인 주식 거래 대표 증권사 토스증권 https://corp.tossinvest.com 토스 앱 기반 모바일 주식 거래 서비스 카카오페이증권 https://kakaopaysec.com 카카오페이 앱 기반 소액 투자와 주식 모으기 서비스 키움증권은 국내 개인 투자자에게 가장 익숙한 온라인 증권사 중 하나다. HTS 기능이 많아 처음에는 복잡해 보일 수 있지만, 단기 매매나 차트, 조건 검색을 자주 쓰는 투자자는 익숙해지면 활용도가 높다.
토스증권과 카카오페이증권은 복잡한 메뉴보다 쉬운 접근성이 장점이다. 소액으로 해외 주식이나 국내 주식을 조금씩 사보려는 사람에게 진입 장벽이 낮다. 다만 고급 주문 기능, 리서치 자료, HTS 활용까지 필요하다면 전통 증권사와 함께 비교하는 것이 좋다.
금융그룹 계열 증권사 &nbsp; 금융그룹 계열 증권사는 은행, 카드, 보험 등 같은 그룹의 금융 서비스와 연결해서 쓰기 편한 경우가 많다. 월급 통장이나 주거래 은행과 묶어 자산을 관리하려는 사람에게 실용적이다.
증권사 공식 사이트 대표전화 신한투자증권 https://www.shinhansec.com 1588-0365 하나증권 https://www.hanaw.com 1588-3111 한화투자증권 https://www.hanwhawm.com 1588-8800 신한투자증권은 신한은행, 신한카드와 함께 쓰는 사람이 접근하기 쉽다. 하나증권도 하나은행 계좌를 중심으로 자금을 옮기거나 관리하는 투자자에게 편하다. 한화투자증권은 퇴직연금, 자산관리 상품, 그룹 계열 금융 서비스를 함께 확인할 때 살펴볼 만하다.
금융그룹 계열 증권사를 고를 때는 주거래 은행과의 이체 편의성, 환전 우대, 자산 통합 조회, 연금 계좌 관리 기능을 함께 보는 것이 좋다. 단순히 주식 매매만 한다면 수수료가 더 중요한 기준이 될 수 있지만, 여러 금융 상품을 한곳에서 관리한다면 연결성이 꽤 중요해진다.
중소형 증권사 공식 홈페이지 &nbsp; 중소형 증권사는 특정 분야에 강점이 있거나 이벤트 조건이 좋은 경우가 많다. 채권, 중소형주 리서치, 공모주, 특정 HTS 기능, 수수료 혜택 때문에 대형 증권사와 함께 병행해서 쓰는 투자자도 많다.
증권사 공식 사이트 대표전화 대신증권 https://www.daishin.com 1588-4488 유진투자증권 https://www.eugenefn.com 1588-6300 DB금융투자 https://www.dbsec.co.kr 1588-4200 교보증권 https://www.iprovest.com 1544-0900 SK증권 https://www.sks.co.kr 1588-8700 LS증권 https://www.ls-sec.co.kr 1588-2428 부국증권 https://www.bookook.co.kr 1588-7744 한양증권 https://www.hygood.co.kr 02-3770-8800 대신증권은 오래된 HTS와 리서치 기반이 있고, 유진투자증권은 중소형주와 IPO 관련 정보에서 관심을 받는 편이다. DB금융투자, 교보증권, SK증권은 채권이나 자산관리 상품을 찾는 사람이 함께 비교해볼 만하다.
LS증권은 2024년 6월 이베스트투자증권에서 사명이 바뀐 곳이다. 예전 이름으로 검색하는 사람도 있으니 공식 사이트를 찾을 때는 LS증권 이름과 주소를 함께 기억해두면 좋다. 부국증권과 한양증권은 규모는 크지 않지만 채권, 자산관리, 법인 영업 등에서 꾸준히 활동해온 증권사다.
투자할 때 같이 보면 좋은 공식 사이트 &nbsp; 증권사 홈페이지는 거래와 계좌 관리에 필요하고, 아래 사이트들은 수수료 비교와 기업 분석에 도움이 된다. 특히 주식 초보라면 종목을 사기 전에 최소한 DART와 한국거래소 정도는 익숙해지는 편이 좋다.
사이트 주소 확인할 수 있는 것 금융투자협회 전자공시서비스 https://dis.kofia.or.kr 증권사별 수수료, 펀드 비용, 금융투자회사 공시 금융투자협회 https://www.kofia.or.kr 금융투자업 정보, 투자자 교육, 휴면 계좌 관련 정보 전자공시시스템 DART https://dart.fss.or.kr 상장사 사업보고서, 분기보고서, 주요사항보고서 한국거래소 KRX https://www.krx.co.kr 시장 통계, 상장 종목, ETF·ETN 정보 금융투자협회 전자공시서비스에서 수수료 비교 &nbsp; DART에서 기업 공시 확인 &nbsp; 수수료는 증권사 홈페이지 이벤트 페이지에도 나오지만, 여러 회사를 한 번에 비교하려면 금융투자협회 전자공시서비스가 편하다. 주식 거래 수수료뿐 아니라 펀드 비용도 함께 확인할 수 있어 계좌를 만들기 전에 참고하기 좋다.
DART는 기업 분석의 기본이다. 뉴스나 유튜브에서 들은 내용만 보고 종목을 사기보다, 사업보고서에서 회사가 실제로 어떤 사업을 하고 어떤 위험이 있는지 확인하는 습관을 들이면 투자 판단이 훨씬 차분해진다.
증권사 선택할 때 보는 기준 &nbsp; 증권사를 고를 때 수수료만 보면 놓치는 부분이 있다. 자주 매매하는 투자자는 수수료가 중요하지만, 해외 주식을 오래 모아가는 사람은 환전 우대와 해외 주식 수수료가 더 중요할 수 있다. 연금 계좌를 운용하려는 사람은 ETF 라인업, 연금 관리 화면, 이전 절차도 살펴봐야 한다.
초보자라면 먼저 본인의 투자 목적을 나누어보는 것이 좋다. 국내 주식 단기 매매가 목적이라면 HTS·MTS 속도와 주문 기능이 중요하다. 해외 주식 장기 투자가 목적이라면 환전 우대, 해외 주식 거래 가능 국가, 배당금 입금 처리, 양도소득세 자료 제공 여부를 봐야 한다.
공모주 청약을 자주 할 생각이라면 한 증권사만 쓰기보다 여러 증권사 계좌를 미리 만들어두는 것이 편하다. 공모주 주관사는 매번 달라지기 때문에 관심 있는 청약이 나왔을 때 계좌 개설 제한이나 청약 가능 기간 때문에 놓치는 일이 생길 수 있다.
자산이 커질수록 상담 서비스도 기준이 된다. PB 상담, 채권 매매, 연금 포트폴리오, 세금 자료 제공 같은 부분은 앱 화면만으로 비교하기 어렵다. 이때는 대형 증권사와 주거래 금융그룹 계열 증권사를 함께 살펴보는 것이 현실적이다.
한눈에 보는 증권사 사이트 주소 &nbsp; 아래 표는 위에서 정리한 주소를 다시 모은 것이다. 즐겨찾기용으로 쓰려면 이 부분만 따로 확인해도 된다.
구분 증권사·사이트 공식 주소 대형 미래에셋증권 https://securities.miraeasset.com 대형 한국투자증권 https://securities.koreainvestment.com 대형 NH투자증권 https://www.nhqv.com 대형 삼성증권 https://www.samsungpop.com 대형 KB증권 https://www.kbsec.com 대형 메리츠증권 https://www.imeritz.com 온라인 특화 키움증권 https://www.kiwoom.com 모바일 특화 토스증권 https://corp.tossinvest.com 모바일 특화 카카오페이증권 https://kakaopaysec.com 금융그룹 계열 신한투자증권 https://www.shinhansec.com 금융그룹 계열 하나증권 https://www.hanaw.com 금융그룹 계열 한화투자증권 https://www.hanwhawm.com 중소형 대신증권 https://www.daishin.com 중소형 유진투자증권 https://www.eugenefn.com 중소형 DB금융투자 https://www.dbsec.co.kr 중소형 교보증권 https://www.iprovest.com 중소형 SK증권 https://www.sks.co.kr 중소형 LS증권 https://www.ls-sec.co.kr 중소형 부국증권 https://www.bookook.co.kr 중소형 한양증권 https://www.hygood.co.kr 투자 정보 금융투자협회 전자공시서비스 https://dis.kofia.or.kr 투자 정보 금융투자협회 https://www.kofia.or.kr 투자 정보 DART 전자공시시스템 https://dart.fss.or.kr 투자 정보 한국거래소 https://www.krx.co.kr 정리 &nbsp; 증권사 홈페이지는 계좌 개설, HTS·MTS 설치, 수수료 확인, 해외 주식 거래, 연금 관리, 리서치 리포트 확인까지 투자 생활의 출발점이 되는 곳이다. 자주 쓰는 증권사와 DART, 금융투자협회 전자공시서비스, 한국거래소는 따로 저장해두면 필요할 때 빠르게 찾을 수 있다.
증권사를 고를 때는 단순히 유명한 곳을 고르기보다 내 투자 방식에 맞추는 것이 좋다. 국내 주식 단기 매매, 해외 주식 장기 투자, 공모주 청약, 연금 투자, 자산관리 상담은 각각 필요한 기능이 다르다.
처음이라면 주거래 은행과 연결이 편한 증권사 하나, 수수료와 주문 기능이 좋은 증권사 하나를 비교해보는 것부터 시작해도 충분하다. 이후 투자 방식이 정해지면 해외 주식, 공모주, 연금 계좌처럼 목적에 맞게 증권사 계좌를 추가하면 된다.`}).add({id:118,href:"/posts/direct-vs-indirect-investing/",title:"직접투자와 간접투자 차이, 종류와 장단점 쉽게 정리",description:"직접투자와 간접투자의 뜻, 대표적인 종류, 각각의 장점과 단점, 초보자가 어떤 방식으로 시작하면 좋은지 현실적인 기준으로 정리하였다.",content:`투자를 시작하려고 하면 가장 먼저 부딪히는 고민이 있다. 내가 직접 종목을 고를 것인지, 아니면 펀드나 ETF처럼 누군가 운용하는 상품을 활용할 것인지다. 주변에서는 &ldquo;좋은 주식을 직접 사야 돈을 번다&quot;고 말하기도 하고, 또 다른 쪽에서는 &ldquo;초보자는 분산투자 상품부터 해야 한다&quot;고 말한다.
둘 다 맞는 말일 수 있다. 직접투자는 내가 판단하고 내가 책임지는 방식이고, 간접투자는 전문가나 상품 구조를 활용해 투자하는 방식이다. 어느 쪽이 무조건 좋다고 말하기 어렵다. 투자자의 시간, 지식, 성향, 자금 규모, 목표 기간에 따라 더 맞는 방식이 달라진다.
이 글에서는 직접투자와 간접투자의 차이, 대표적인 종류, 장점과 단점, 초보자가 선택할 때 볼 기준을 정리하였다.
직접투자와 간접투자의 차이 &nbsp; 직접투자는 투자자가 직접 투자 대상을 고르고 매수와 매도 결정을 내리는 방식이다. 예를 들어 삼성전자 주식을 직접 사거나, 미국 주식 계좌에서 애플 주식을 매수하거나, 특정 채권이나 부동산을 직접 고르는 것이 직접투자에 가깝다.
간접투자는 투자자가 직접 개별 자산을 고르기보다, 펀드나 ETF, 투자일임, 로보어드바이저 같은 상품이나 서비스를 통해 운용을 맡기는 방식이다. 투자자는 상품을 선택하지만, 그 안에서 어떤 종목을 얼마만큼 담을지는 운용사나 정해진 지수가 결정한다.
쉽게 비유하면 직접투자는 내가 직접 운전하는 것과 비슷하다. 목적지, 경로, 속도, 쉬는 타이밍을 내가 정한다. 간접투자는 버스나 기차를 타는 것에 가깝다. 내가 모든 경로를 조정할 수는 없지만, 운전 부담이 줄고 정해진 시스템을 활용할 수 있다.
중요한 점은 직접투자가 더 고급이고 간접투자가 더 초보적인 방식이라는 뜻이 아니라는 것이다. 전문 투자자도 ETF를 활용하고, 초보자도 개별 주식을 살 수 있다. 다만 어떤 방식이 내 상황에 더 맞는지 판단해야 한다.
직접투자의 대표적인 종류 &nbsp; 직접투자는 내가 투자 대상을 직접 고르는 방식이므로 범위가 넓다. 가장 흔한 것은 개별 주식 투자다. 국내 주식, 미국 주식, 일본 주식처럼 특정 기업의 주식을 직접 매수하는 방식이다.
개별 채권을 직접 사는 것도 직접투자에 해당한다. 국채, 회사채, 금융채 등을 직접 고르면 만기, 이자율, 발행 기관의 신용도를 스스로 판단해야 한다.
부동산도 대표적인 직접투자다. 아파트, 오피스텔, 상가, 토지 등을 직접 매수하면 임대수익, 시세차익, 세금, 대출, 관리 부담을 직접 안게 된다.
코인이나 금 현물처럼 특정 자산을 직접 사는 것도 직접투자다. 특히 코인은 변동성이 크기 때문에 매수 가격, 보관 방식, 매도 기준을 스스로 정해야 한다.
직접투자의 공통점은 분명하다. 투자자가 선택권을 많이 가진다. 대신 판단의 책임도 투자자에게 온다.
개별 주식 직접투자 &nbsp; 개별 주식 직접투자는 가장 접근성이 높은 직접투자다. 증권 계좌만 있으면 소액으로도 시작할 수 있고, 요즘은 해외 주식 소수점 거래도 가능해졌다.
장점은 내가 좋다고 판단한 기업에 집중 투자할 수 있다는 점이다. 기업의 실적, 산업 전망, 경쟁력, 배당 정책을 공부하고 확신이 생기면 직접 매수할 수 있다. 판단이 맞으면 시장 평균보다 높은 수익을 낼 수도 있다.
단점은 한 기업에 대한 판단이 틀렸을 때 손실이 커질 수 있다는 점이다. 좋은 회사라고 생각했는데 실적이 꺾이거나, 경쟁사가 강해지거나, 경영 문제가 생기면 주가는 크게 흔들릴 수 있다.
부동산 직접투자 &nbsp; 부동산 직접투자는 실물 자산을 직접 보유한다는 점에서 많은 사람이 선호한다. 월세를 받을 수 있고, 장기적으로 시세차익을 기대할 수도 있다.
하지만 부동산은 진입 금액이 크고, 대출과 세금의 영향을 많이 받는다. 취득세, 재산세, 종합부동산세, 양도소득세, 중개수수료, 수리비까지 고려해야 한다. 사고팔 때 시간이 오래 걸리는 것도 부담이다.
그래서 부동산 직접투자는 단순히 &ldquo;집값이 오를 것 같다&quot;는 생각만으로 접근하기보다 현금흐름, 대출 이자, 공실 가능성, 보유 기간을 함께 계산해야 한다.
간접투자의 대표적인 종류 &nbsp; 간접투자는 투자 판단의 일부를 상품 구조나 전문가에게 맡기는 방식이다. 대표적인 상품은 펀드, ETF, 연금저축펀드, 투자일임, 로보어드바이저다.
펀드는 여러 투자자의 돈을 모아 자산운용사가 주식, 채권, 부동산, 원자재 등에 투자하는 상품이다. 투자자는 펀드를 고르고, 실제 종목 선정과 비중 조절은 펀드매니저가 담당한다.
ETF는 펀드와 주식의 성격을 함께 가진 상품이다. 여러 종목을 담은 바구니를 거래소에서 주식처럼 사고팔 수 있다. 코스피200 ETF, S&amp;P500 ETF, 나스닥100 ETF처럼 특정 지수를 따라가는 상품이 대표적이다.
투자일임은 투자자가 일정 권한을 맡기고 전문가가 포트폴리오를 운용하는 방식이다. 로보어드바이저는 알고리즘을 활용해 투자 성향에 맞는 포트폴리오를 제안하거나 운용하는 서비스다.
펀드와 ETF &nbsp; 펀드와 ETF는 초보자가 간접투자를 시작할 때 가장 많이 접하는 상품이다. 둘 다 여러 자산에 나눠 투자할 수 있다는 장점이 있다.
펀드는 운용사가 적극적으로 종목을 고르는 액티브 펀드와 지수를 따라가는 인덱스 펀드로 나눌 수 있다. 액티브 펀드는 시장 평균보다 높은 수익을 목표로 하지만, 운용 성과가 항상 좋은 것은 아니다. 인덱스 펀드는 특정 지수를 따라가기 때문에 구조가 상대적으로 단순하다.
ETF는 거래소에서 실시간으로 사고팔 수 있어 편리하다. 주식처럼 매수와 매도가 가능하고, 보수도 비교적 낮은 상품이 많다. 다만 ETF도 주식형이면 시장이 하락할 때 손실이 발생한다. &ldquo;여러 종목에 나뉘어 있다&quot;는 말이 &ldquo;손실이 없다&quot;는 뜻은 아니다.
연금저축펀드와 퇴직연금 &nbsp; 연금저축펀드나 퇴직연금 계좌에서 펀드와 ETF를 활용하는 것도 간접투자의 한 형태다. 장기 투자와 세제 혜택을 함께 고려할 수 있어 노후 준비용으로 많이 쓰인다.
다만 연금 계좌는 세제 혜택이 있는 대신 중도 인출이나 해지에 제한과 불이익이 있을 수 있다. 따라서 단기 생활비로 쓸 돈이 아니라 장기적으로 묶어둘 수 있는 돈으로 접근하는 것이 좋다.
직접투자의 장점과 단점 &nbsp; 직접투자의 가장 큰 장점은 자유도다. 내가 원하는 종목, 원하는 가격, 원하는 비중으로 투자할 수 있다. 특정 기업을 깊이 공부하고 확신이 있다면 펀드보다 더 집중적으로 투자할 수 있다.
또 직접투자를 하면 투자 공부가 빠르게 늘 수 있다. 기업 실적을 보고, 산업 뉴스를 읽고, 금리와 환율이 주가에 어떤 영향을 주는지 체감하게 된다. 내 돈이 들어가 있으면 관심의 밀도가 달라진다.
현금화가 비교적 빠른 것도 장점이다. 상장주식이나 ETF를 직접 보유하고 있다면 시장이 열려 있을 때 매도할 수 있다. 물론 시장 상황에 따라 원하는 가격에 팔리지 않을 수는 있지만, 환매 절차가 긴 일부 간접투자 상품보다는 빠르게 대응할 수 있다.
반면 단점도 뚜렷하다. 직접투자는 시간과 집중력이 많이 든다. 기업을 분석하고, 실적 발표를 확인하고, 산업 변화를 따라가야 한다. 제대로 공부하지 않으면 뉴스, 소문, 단기 급등락에 휘둘리기 쉽다.
또 분산투자가 부족해질 수 있다. 투자금이 크지 않은 초보자는 몇 종목에 돈이 몰리기 쉽다. 한 종목이 크게 떨어지면 전체 계좌가 함께 흔들린다.
거래를 너무 자주 하게 되는 것도 문제다. 수익은 크지 않은데 매수와 매도를 반복하면 수수료와 세금, 심리적 피로가 쌓인다. 직접투자는 선택의 자유가 큰 만큼 감정 관리가 중요하다.
간접투자의 장점과 단점 &nbsp; 간접투자의 가장 큰 장점은 분산투자다. 펀드나 ETF 하나만 사도 여러 종목에 나눠 투자하는 효과를 얻을 수 있다. 예를 들어 S&amp;P500 ETF를 사면 미국 대표 기업 여러 곳에 한 번에 투자하는 구조가 된다.
전문가나 지수의 시스템을 활용할 수 있다는 점도 장점이다. 투자 공부를 전업처럼 하기 어려운 사람은 모든 종목을 직접 분석하기 어렵다. 간접투자는 이 부담을 줄여준다. 특히 직장인, 자영업자, 초보 투자자에게는 시간을 아끼는 효과가 크다.
소액으로 시작하기 쉽다는 것도 장점이다. 개별 종목과 자산을 여러 개 직접 사려면 돈이 많이 필요하지만, ETF나 펀드를 활용하면 적은 금액으로도 넓게 나눠 투자할 수 있다.
하지만 간접투자에도 단점은 있다. 먼저 수수료가 있다. 펀드나 ETF에는 운용보수, 판매보수, 기타 비용이 들어간다. 보수가 낮은 상품도 많지만, 장기 투자에서는 작은 수수료 차이도 누적되면 결과에 영향을 준다.
두 번째 단점은 내 뜻대로 100% 운용할 수 없다는 점이다. 펀드매니저가 어떤 종목을 사고팔지 투자자가 직접 정할 수 없고, 지수형 ETF도 지수 구성에 따라 움직인다. 내가 싫어하는 종목이 포함되어 있어도 상품 구조상 함께 보유하게 될 수 있다.
세 번째는 전문가가 항상 이기는 것은 아니라는 점이다. 펀드매니저가 운용한다고 해서 반드시 시장 평균보다 높은 수익을 내는 것은 아니다. 과거 수익률이 좋아도 앞으로 계속 좋다는 보장은 없다.
초보자는 무엇부터 선택하면 좋을까? &nbsp; 초보자라면 먼저 자신의 시간을 봐야 한다. 기업 분석과 투자 공부에 꾸준히 시간을 쓸 수 있다면 직접투자를 일부 시도해볼 수 있다. 반대로 투자 공부에 쓸 시간이 거의 없다면 간접투자 중심으로 시작하는 편이 현실적이다.
두 번째는 감정 성향이다. 주가가 하루에 3%, 5%만 빠져도 계속 앱을 열어보고 불안해진다면 개별 종목 집중투자는 부담이 클 수 있다. 이런 경우 넓게 분산된 ETF나 펀드가 심리적으로 더 맞을 수 있다.
세 번째는 투자 목적이다. 단기간에 큰 수익을 노리는 돈인지, 노후 준비처럼 10년 이상 굴릴 돈인지에 따라 방식이 달라진다. 장기 자금은 ETF, 연금저축펀드, 퇴직연금처럼 꾸준히 적립할 수 있는 구조가 잘 맞는 경우가 많다.
네 번째는 자금 규모다. 투자금이 작을 때는 여러 개별 종목과 자산에 나누기 어렵다. 이때 ETF를 활용하면 적은 금액으로도 분산 효과를 얻기 쉽다. 반대로 자금이 커질수록 직접투자와 간접투자를 섞어 포트폴리오를 만들 수 있다.
현실적인 방법은 둘 중 하나만 고르는 것이 아니라 섞는 것이다. 예를 들어 전체 투자금의 70 ~ 80%는 시장 전체에 투자하는 ETF나 펀드로 두고, 나머지 20 ~ 30%만 관심 있는 개별 주식에 직접투자하는 방식이다. 이렇게 하면 투자 공부도 하면서 전체 계좌가 한 종목에 휘둘리는 위험을 줄일 수 있다.
직접투자와 간접투자 선택 기준 &nbsp; 직접투자가 맞는 사람은 투자 대상을 직접 공부하는 데 흥미가 있고, 손실이 났을 때도 자기 판단을 점검할 수 있는 사람이다. 기업 분석, 재무제표, 산업 뉴스, 금리와 환율 흐름을 꾸준히 볼 수 있다면 직접투자의 장점을 살릴 가능성이 높다.
간접투자가 맞는 사람은 투자에 시간을 많이 쓰기 어렵거나, 개별 종목 선택보다 장기적인 자산 배분을 더 중요하게 보는 사람이다. 특히 처음 투자를 시작하는 사람은 넓게 분산된 ETF나 펀드로 시장의 움직임을 익히는 것이 도움이 된다.
하지만 어떤 방식을 택하든 공통 원칙은 같다. 잃어도 생활이 흔들리지 않는 돈으로 투자해야 하고, 단기 생활비와 비상금은 따로 남겨야 한다. 투자 방식보다 더 중요한 것은 내가 감당할 수 있는 위험 안에서 오래 지속하는 것이다.
직접투자는 &ldquo;내가 다 할 수 있다&quot;는 자신감만으로 시작하면 위험하고, 간접투자는 &ldquo;전문가가 알아서 해주겠지&quot;라는 생각만으로 맡기면 위험하다. 직접투자든 간접투자든 투자자는 최소한의 구조와 위험을 이해해야 한다.
정리 &nbsp; 직접투자는 내가 직접 투자 대상을 고르고 운용하는 방식이다. 자유도가 높고 공부 효과가 크지만, 시간과 분석 능력, 감정 관리가 필요하다. 판단이 틀리면 손실도 직접 감당해야 한다.
간접투자는 펀드, ETF, 투자일임, 로보어드바이저처럼 상품이나 전문가를 활용하는 방식이다. 분산투자와 시간 절약에 유리하지만, 수수료가 있고 내 뜻대로 100% 운용하기 어렵다.
초보자라면 처음부터 한쪽에만 몰입하기보다 간접투자로 기본 포트폴리오를 만들고, 일부 금액으로 직접투자를 경험하는 방식이 현실적이다. 투자는 정답을 맞히는 시험이 아니라 내 돈을 오래 지키고 키우는 과정이다. 내 성향과 생활에 맞는 방식을 고르는 것이 가장 중요하다.
자주 묻는 질문 &nbsp; 직접투자와 간접투자 중 어느 쪽이 더 수익률이 높은가? &nbsp; 정해진 답은 없다. 직접투자는 잘 고르면 높은 수익을 낼 수 있지만 손실도 커질 수 있다. 간접투자는 분산 효과가 있어 안정적일 수 있지만, 시장 평균을 크게 넘기기는 쉽지 않다.
ETF는 직접투자인가 간접투자인가? &nbsp; ETF는 거래소에서 내가 직접 사고팔기 때문에 직접 매매의 성격이 있지만, 상품 내부는 여러 종목에 나눠 투자하는 간접투자 구조에 가깝다. 그래서 실무적으로는 간접투자 상품으로 보는 경우가 많다.
초보자는 개별 주식을 사면 안 되는가? &nbsp; 반드시 안 되는 것은 아니다. 다만 처음부터 큰돈을 한두 종목에 몰아넣는 것은 위험하다. 소액으로 공부하면서 경험하고, 중심 자산은 넓게 분산된 상품으로 가져가는 방식이 더 무난하다.
간접투자는 안전한 투자인가? &nbsp; 간접투자도 원금 손실이 날 수 있다. 펀드나 ETF가 여러 자산에 나눠 투자한다고 해서 손실이 사라지는 것은 아니다. 투자 대상, 보수, 환매 조건, 변동성을 확인해야 한다.`}).add({id:119,href:"/posts/rolling-effect/",title:"채권 용어: 롤링 효과, 채권 가격이 만기가 가까워질수...",description:"롤링 효과의 뜻과 채권 가격, 잔존기간, 수익률곡선의 관계를 초보자도 이해하기 쉽게 예시와 함께 정리했다.",content:`채권 투자를 공부하다 보면 &ldquo;롤링 효과&quot;라는 용어를 듣게 된다. 처음 들으면 어려운 전문 용어처럼 느껴지지만, 핵심은 단순하다. 시간이 지나면서 채권의 남은 만기가 짧아지고, 그 과정에서 채권 가격이 오를 수 있다는 뜻이다.
채권은 주식처럼 매일 기업 실적만 보고 움직이는 자산이 아니다. 약속된 이자, 만기, 시장금리, 남은 기간이 함께 가격을 만든다. 그래서 같은 채권이라도 만기까지 10년 남았을 때와 8년 남았을 때의 가격이 달라질 수 있다.
롤링 효과는 이 &ldquo;남은 기간이 줄어드는 과정&quot;에서 생기는 투자 수익을 설명하는 말이다. 특히 수익률곡선이 일반적인 우상향 모양일 때 더 자주 이야기된다.
롤링 효과란 무엇인가 &nbsp; 롤링 효과는 채권의 잔존기간이 짧아지면서 수익률은 낮아지고, 그 결과 채권 가격이 상승하는 효과를 말한다. 영어로는 Rolling Effect라고 한다.
채권에는 만기가 있다. 10년 만기 채권을 샀다면 시간이 1년 지나면 남은 만기는 9년이 된다. 2년이 지나면 8년이 남는다. 이처럼 채권은 시간이 지날수록 수익률곡선 위에서 만기가 짧은 쪽으로 굴러간다. 그래서 &ldquo;롤링&quot;이라는 표현을 쓴다.
일반적으로 만기가 긴 채권은 만기가 짧은 채권보다 더 높은 수익률을 요구받는다. 오래 돈을 묶어두는 만큼 불확실성이 크기 때문이다. 그래서 정상적인 시장에서는 수익률곡선이 우상향하는 경우가 많다.
이때 시장금리가 크게 변하지 않는다고 가정하면, 시간이 지나 채권의 잔존기간이 줄어들수록 그 채권은 더 낮은 수익률 구간으로 이동한다. 채권 가격은 수익률과 반대로 움직이므로, 수익률이 낮아지면 가격은 올라간다. 이것이 롤링 효과다.
채권 가격과 수익률은 왜 반대로 움직일까 &nbsp; 롤링 효과를 이해하려면 채권 가격과 수익률의 관계를 먼저 알아야 한다. 채권 가격과 수익률은 반대로 움직인다.
예를 들어 액면가 10,000원이고 매년 이자를 주는 채권이 있다고 하자. 시장금리가 낮아지면 이미 높은 이자를 주는 기존 채권의 매력이 커진다. 사람들이 그 채권을 더 비싼 가격에 사려고 하므로 채권 가격이 오른다.
반대로 시장금리가 올라가면 새로 발행되는 채권이 더 높은 이자를 줄 수 있다. 그러면 기존 채권의 매력이 떨어지고, 가격을 낮춰야 거래가 된다. 그래서 채권 가격은 하락한다.
정리하면 다음과 같다.
상황 채권 수익률 채권 가격 금리 또는 요구수익률 하락 내려감 올라감 금리 또는 요구수익률 상승 올라감 내려감 롤링 효과는 시장 전체 금리가 내려가서 생기는 가격 상승과는 조금 다르다. 시장금리가 그대로라고 가정해도, 채권의 남은 만기가 짧아지면서 수익률곡선상 더 낮은 수익률 구간으로 이동하기 때문에 가격 상승이 생길 수 있다는 점이 핵심이다.
수익률곡선 타기 전략과 롤링 효과 &nbsp; 롤링 효과는 &ldquo;수익률곡선 타기 전략&quot;과 함께 자주 나온다. 영어로는 Yield Curve Riding이라고 한다. 말 그대로 채권이 시간이 지나면서 수익률곡선 위를 타고 내려오는 효과를 노리는 전략이다.
일반적인 우상향 수익률곡선을 생각해보자.
잔존기간 시장 수익률 예시 3년 3.0% 5년 3.2% 10년 3.7% 투자자가 잔존기간 10년 채권을 샀는데 2년이 지났다면, 이 채권은 이제 잔존기간 8년 채권에 가까워진다. 만약 수익률곡선의 모양이 크게 변하지 않았다면 10년 구간보다 8년 구간의 수익률이 낮을 가능성이 있다. 이때 채권 가격은 상승 압력을 받는다.
입력 자료의 예시처럼 잔존기간 10년 채권을 수익률 7.5% 수준에서 샀고, 2년 뒤 잔존기간이 8년이 되면서 해당 구간 수익률이 7.4% 수준으로 낮아졌다고 하자. 이 경우 투자자는 보유 기간 동안 받은 이자뿐 아니라 수익률 하락에 따른 채권 가격 상승분도 얻을 수 있다.
여기서 중요한 점은 이 가격 상승분이 시장금리 하락 때문만은 아니라는 것이다. 시간이 지나 잔존기간이 줄어든 것 자체가 수익률 하락과 가격 상승을 만든다. 이것이 롤링 효과에 의한 수익이다.
간단한 숫자로 보는 롤링 효과 &nbsp; 조금 더 쉬운 예를 들어보자. 어떤 채권의 액면가가 10,000원이고, 만기까지 갈수록 원금에 가까워지는 구조라고 가정하자.
처음에는 만기가 8년 남아 있어 9,000원에 거래되었다. 시간이 지나 만기가 5년 남게 되었고, 시장 상황이 크게 바뀌지 않았다면 이 채권은 9,300원에 거래될 수 있다. 투자자는 300원의 가격 상승을 얻는다.
이 가격 상승은 단순히 &ldquo;금리가 떨어져서 운 좋게 오른 것&quot;과 다르다. 채권이 만기에 가까워지면서 불확실성이 줄고, 수익률곡선상 더 짧은 만기 구간으로 이동했기 때문에 생긴 효과다.
물론 실제 채권 가격은 훨씬 복잡하게 계산된다. 표면금리, 할인율, 신용등급, 시장 유동성, 발행기관의 위험, 중앙은행 정책 등이 모두 영향을 준다. 그래도 초보자 입장에서는 다음 흐름만 기억해도 충분하다.
채권은 시간이 지나면 잔존기간이 줄어든다. 우상향 수익률곡선에서는 짧은 만기일수록 수익률이 낮은 편이다. 채권 수익률이 낮아지면 채권 가격은 오른다. 이 과정에서 생기는 가격 상승이 롤링 효과다. 롤링 효과가 항상 수익을 보장하지는 않는다 &nbsp; 롤링 효과는 매력적으로 들리지만, 항상 돈을 벌게 해주는 공식은 아니다. 중요한 조건이 있다. 수익률곡선이 우상향 형태를 유지하고, 시장금리가 크게 상승하지 않아야 한다.
만약 금리가 빠르게 오르면 이야기가 달라진다. 시간이 지나 잔존기간이 짧아지는 효과로 수익률이 조금 내려가더라도, 시장 전체 금리 상승폭이 더 크면 채권 가격은 오히려 떨어질 수 있다.
예를 들어 잔존기간 단축으로 기대할 수 있는 수익률 하락 효과가 0.1%포인트인데, 시장금리가 0.5%포인트 올라버리면 롤링 효과는 금리 상승 충격을 이기기 어렵다. 이 경우 채권 투자자는 가격 손실을 볼 수 있다.
또 수익률곡선이 평평하거나 역전된 경우에도 롤링 효과가 약해질 수 있다. 장기 금리와 단기 금리 차이가 거의 없다면 시간이 지나 만기가 짧아져도 수익률 하락 여지가 작다. 오히려 단기 금리가 더 높은 역전 곡선에서는 기대했던 방향과 다르게 움직일 수 있다.
그래서 롤링 효과를 볼 때는 세 가지를 함께 확인해야 한다.
확인할 것 이유 수익률곡선의 기울기 우상향일수록 롤링 효과를 기대하기 쉽다 금리 방향 금리 상승기에는 가격 손실 위험이 커진다 보유 기간 너무 짧게 보유하면 효과가 작을 수 있다 개인 투자자는 어떻게 이해하면 좋을까 &nbsp; 개인 투자자가 롤링 효과를 직접 계산하기는 쉽지 않다. 하지만 채권형 펀드, 장기채 ETF, 국채 투자 상품을 볼 때 개념을 알고 있으면 설명을 훨씬 잘 이해할 수 있다.
예를 들어 장기채 ETF는 금리 하락기에 가격이 크게 오를 수 있지만, 금리 상승기에는 손실도 크게 날 수 있다. 여기에 롤링 효과가 더해지면 금리가 안정적인 구간에서는 시간이 지날수록 추가적인 가격 상승 요인이 생길 수 있다.
다만 &ldquo;장기채는 시간이 지나면 무조건 오른다&quot;라고 받아들이면 위험하다. 롤링 효과는 조건부 효과다. 수익률곡선의 모양, 금리 전망, 채권의 만기 구조가 맞아야 의미가 커진다.
초보자라면 다음 정도로 이해하면 된다.
롤링 효과는 채권의 남은 만기가 줄어들며 생길 수 있는 가격 상승 효과다. 금리가 안정적이고 수익률곡선이 우상향일 때 기대하기 쉽다. 금리 상승기에는 롤링 효과보다 금리 상승에 따른 가격 하락이 더 클 수 있다. 채권형 상품 설명에서 &ldquo;듀레이션&rdquo;, &ldquo;장기채&rdquo;, &ldquo;수익률곡선&quot;이라는 말이 나오면 함께 봐야 한다. 마무리 &nbsp; 롤링 효과는 채권 투자에서 시간이 수익으로 작동할 수 있는 원리를 설명한다. 채권의 잔존기간이 줄어들고, 수익률곡선상 더 낮은 수익률 구간으로 이동하면서 가격이 오를 수 있다는 개념이다.
하지만 롤링 효과만 보고 채권에 투자하면 안 된다. 금리 상승, 수익률곡선 변화, 장기채 가격 변동성은 언제든 기대 수익을 흔들 수 있다. 채권 투자는 &ldquo;안전하다&quot;는 한 단어로 끝나는 자산이 아니라, 금리와 시간의 영향을 함께 받는 자산이다.
채권형 ETF나 국채 상품을 볼 때 롤링 효과를 알고 있으면 상품 설명이 덜 낯설어진다. 특히 금리가 안정되거나 하락할 것으로 보는 시기에는 왜 장기채 투자 이야기가 늘어나는지도 더 쉽게 이해할 수 있다.
자주 묻는 질문 &nbsp; 롤링 효과는 금리 하락과 같은 말인가? &nbsp; 같은 말은 아니다. 금리 하락은 시장 전체의 금리 수준이 내려가면서 채권 가격이 오르는 현상이다. 롤링 효과는 시장금리가 그대로라고 가정해도 시간이 지나 채권의 잔존기간이 짧아지면서 수익률곡선상 더 낮은 수익률 구간으로 이동해 가격이 오를 수 있는 효과다.
롤링 효과는 장기채에서만 나타나는가? &nbsp; 장기채에서 더 크게 언급되는 경우가 많다. 만기가 긴 채권은 수익률곡선의 기울기 영향을 받을 여지가 크고, 가격 변동성도 상대적으로 크기 때문이다. 다만 원리 자체는 잔존기간이 있는 채권 전반에 적용될 수 있다.
롤링 효과를 기대하려면 어떤 시장이 유리한가? &nbsp; 수익률곡선이 우상향이고 금리가 크게 오르지 않는 시장이 유리하다. 반대로 금리가 빠르게 상승하거나 수익률곡선이 평평해지거나 역전되면 롤링 효과가 약해지거나 가격 손실이 더 커질 수 있다.`}).add({id:120,href:"/posts/what-is-a-bond/",title:"채권이란? 뜻과 종류, 주식과의 차이, 투자 방법까지 ...",description:"채권의 뜻과 주식과의 차이, 국채·회사채·이표채·할인채 같은 종류, 투자 방법과 위험 요소를 초보자도 이해하기 쉽게 정리했다.",content:`투자를 시작하면 예금, 주식, ETF 다음으로 자주 듣는 말이 채권이다. 그런데 채권은 이름부터 조금 딱딱하다. &ldquo;돈을 빌려주는 투자&quot;라고 설명하면 어느 정도 감은 오지만, 실제로 어떻게 이자를 받고 왜 가격이 오르내리는지는 헷갈릴 수 있다.
채권은 어렵게 보면 끝없이 어렵지만, 처음에는 한 문장으로 이해하면 된다. 채권은 정부, 공공기관, 금융기관, 기업 등이 &ldquo;정해진 날에 원금과 이자를 갚겠다&quot;고 약속하고 발행하는 증서다.
즉, 투자자는 채권을 사면서 돈을 빌려주는 사람이 되고, 채권을 발행한 곳은 돈을 빌린 사람이 된다. 이 글에서는 채권의 뜻, 주식과의 차이, 채권 종류, 투자 방법, 투자 전에 확인할 점을 초보자 기준으로 정리하였다.
채권이란 무엇인가 &nbsp; 채권은 자금이 필요한 기관이 투자자에게 돈을 빌리기 위해 발행하는 유가증권이다. 여기서 기관은 정부, 지방자치단체, 공공기관, 은행, 카드사, 기업 등이 될 수 있다.
쉽게 말하면 채권은 &ldquo;언제까지 돈을 빌리고, 이자를 얼마 주고, 만기에는 원금을 갚겠다&quot;는 조건이 적힌 차용증에 가깝다. 다만 일반적인 개인 간 차용증과 달리, 채권은 법이 정한 요건을 갖춘 기관이 발행하고 시장에서 사고팔 수 있다는 특징이 있다.
예를 들어 4년 만기, 연 5% 이자를 주는 채권을 1,000만 원어치 샀다고 하자. 조건대로라면 투자자는 매년 50만 원의 이자를 받고, 4년 뒤 만기에는 원금 1,000만 원을 돌려받는다. 발행 기관이 부도나지 않는다면 현금 흐름이 어느 정도 정해져 있는 셈이다.
그래서 채권은 보통 주식보다 안정적인 투자 자산으로 분류된다. 하지만 &ldquo;안정적&quot;이라는 말이 &ldquo;무조건 안전하다&quot;는 뜻은 아니다. 발행 기관의 신용위험, 금리 변동, 중도 매도 가격 변동은 반드시 함께 봐야 한다.
채권의 기본 성격 &nbsp; 채권은 몇 가지 중요한 성격을 가진다. 이 성격을 알면 채권이 왜 예금과 비슷하면서도 다르고, 주식과도 다른지 이해하기 쉽다.
성격 의미 확정이자부 증권 발행할 때 이자와 원금 상환 조건이 정해져 있거나 기준이 정해져 있다 이자지급 증권 발행자의 이익 여부와 관계없이 약속된 이자를 지급해야 한다 기한부 증권 원금 상환일, 즉 만기가 정해져 있다 상환 증권 발행자가 상환 능력을 유지한다면 만기에 원금을 갚아야 한다 장기 자금 조달 수단 정부나 기업이 비교적 큰 규모의 자금을 조달할 때 사용한다 예금은 은행에 돈을 맡기는 것이고, 채권은 특정 발행 기관에 돈을 빌려주는 구조다. 국채처럼 신용도가 높은 채권은 예금처럼 안정적으로 접근하기도 하지만, 회사채처럼 발행 기업의 신용상태가 중요한 채권도 있다.
또 채권은 만기까지 꼭 들고 있어야만 하는 상품이 아니다. 시장에서 사고팔 수 있다. 이 때문에 채권 투자자는 이자 수익뿐 아니라 매매 차익도 얻을 수 있다.
채권과 주식의 차이 &nbsp; 채권을 이해할 때 가장 쉬운 비교 대상은 주식이다. 둘 다 투자 상품이고 시장에서 거래될 수 있지만, 본질은 완전히 다르다.
주식은 회사의 일부를 소유하는 것이다. 주식을 사면 주주가 되고, 의결권을 통해 경영에 참여할 수 있다. 회사가 이익을 내면 배당을 받을 수 있지만, 배당 여부와 금액은 회사 사정에 따라 달라진다.
채권은 회사나 기관에 돈을 빌려주는 것이다. 채권을 사도 경영권은 없다. 대신 정해진 이자와 원금 상환을 요구할 권리가 있다. 기업 실적이 좋아져도 채권 투자자가 받는 이자가 갑자기 크게 늘어나는 구조는 아니지만, 반대로 실적이 조금 흔들린다고 해서 약속된 이자가 바로 사라지는 것도 아니다.
구분 주식 채권 투자자의 지위 주주 채권자 경영 참여 의결권 있음 의결권 없음 수익 구조 주가 상승, 배당 이자, 매매 차익 만기 없음 있음 수익 변동성 상대적으로 큼 상대적으로 낮은 편 핵심 위험 주가 하락, 배당 감소 금리 상승, 신용위험, 중도 매도 손실 초보자는 이렇게 기억하면 쉽다. 주식은 &ldquo;회사의 주인이 되는 투자&quot;이고, 채권은 &ldquo;돈을 빌려주고 약속된 이자를 받는 투자&quot;다.
채권으로 수익을 얻는 두 가지 방법 &nbsp; 채권 투자 수익은 크게 두 가지로 나뉜다. 하나는 이자 수익이고, 다른 하나는 매매 차익이다.
만기까지 보유해 이자를 받는 방법 &nbsp; 가장 기본적인 방식은 채권을 사서 만기까지 보유하는 것이다. 채권을 발행한 곳이 원리금을 정상적으로 갚는다면, 투자자는 약속된 이자를 받고 만기에 원금을 돌려받는다.
이 방식은 예금처럼 현금 흐름을 예상하기 쉽다는 장점이 있다. 특히 국채, 우량 금융채, 신용등급이 높은 회사채는 안정적인 이자 수익을 원하는 투자자가 관심을 갖기 쉽다.
다만 예금자보호가 적용되는 은행 예금과 채권은 다르다. 채권은 발행 기관의 신용상태가 중요하다. 이자가 조금 높다고 무조건 좋은 채권은 아니다.
중간에 팔아 시세 차익을 얻는 방법 &nbsp; 채권은 만기 전에도 팔 수 있다. 이때 채권 가격이 내가 산 가격보다 높아졌다면 매매 차익을 얻을 수 있다. 반대로 가격이 낮아졌다면 손실을 볼 수 있다.
채권 가격에 큰 영향을 주는 요소는 금리다. 일반적으로 시장금리가 내려가면 기존 채권 가격은 오른다. 이미 더 높은 이자를 주는 채권의 매력이 커지기 때문이다. 반대로 시장금리가 올라가면 기존 채권 가격은 떨어질 수 있다.
예를 들어 연 5.5% 이자를 주는 채권을 가지고 있는데, 새로 가입할 수 있는 예금이나 채권 금리가 5%로 내려갔다고 하자. 이 경우 기존 5.5% 채권은 상대적으로 매력적이므로 가격이 오를 수 있다. 그래서 채권도 주식처럼 싸게 사서 비싸게 파는 시세 차익이 가능하다.
채권의 종류 &nbsp; 채권은 기준에 따라 여러 가지로 나뉜다. 초보자는 먼저 발행 주체와 이자 지급 방식만 알아도 충분하다.
발행 주체에 따른 구분 &nbsp; 발행 주체는 &ldquo;누가 돈을 빌렸는가&quot;를 뜻한다. 발행 주체에 따라 안정성과 수익률이 달라진다.
종류 발행 주체 특징 국채 국가 신용도가 매우 높고 안정적이지만 수익률은 낮은 편이다 지방채 지방자치단체 지역 사업 자금 조달에 쓰이며 국채보다 신용도가 낮을 수 있다 특수채 공공기관, 특수법인 한국전력공사, 도로공사 같은 기관이 발행하는 채권이 대표적이다 금융채 은행, 카드사, 캐피탈사 등 금융기관이 자금 조달을 위해 발행한다 회사채 일반 기업 기업 신용도에 따라 수익률과 위험이 크게 달라진다 외국채 외국 정부나 외국 기업 등 환율과 해외 발행자의 신용위험까지 함께 봐야 한다 보통 국채와 우량 공공기관 채권은 안정성이 높고, 회사채는 발행 기업의 신용등급에 따라 위험과 수익률 차이가 크다. 신용등급이 낮은 회사채는 이자가 높을 수 있지만 그만큼 원리금 지급 위험도 커진다.
이자 지급 방식에 따른 구분 &nbsp; 이자 지급 방식은 &ldquo;이자를 언제, 어떤 방식으로 받는가&quot;를 뜻한다.
종류 의미 이표채 3개월, 6개월, 1년 등 정해진 주기마다 이자를 받고 만기에 원금을 받는 채권 할인채 이자를 따로 받지 않고 액면가보다 싸게 사서 만기에 액면가를 받는 채권 복리채 이자가 중간에 지급되지 않고 재투자되어 만기에 원금과 이자를 함께 받는 채권 단리채 이자가 원금에만 붙는 방식의 채권 예를 들어 액면가 1,000만 원짜리 할인채를 950만 원에 샀다면, 만기에 1,000만 원을 받는다. 이때 차액 50만 원이 사실상 이자 역할을 한다.
이표채는 정기적인 현금 흐름이 필요한 사람에게 이해하기 쉽다. 복리채는 중간 현금 흐름보다 만기 수령액을 중시하는 사람에게 더 맞을 수 있다.
채권 투자는 어떻게 하나 &nbsp; 개인도 채권에 투자할 수 있다. 과거에는 채권이 기관투자자 중심 상품처럼 느껴졌지만, 지금은 증권사 앱이나 HTS, MTS에서 국채, 회사채, 금융채 등을 확인하고 매수할 수 있다.
채권 거래 방식은 크게 장내 거래와 장외 거래로 나뉜다.
거래 방식 의미 장내 거래 한국거래소 같은 정식 시장에서 공개적으로 사고파는 방식 장외 거래 증권사가 보유하거나 중개하는 채권을 투자자가 조건을 보고 사는 방식 초보자는 증권사 앱에서 제공하는 장외 채권 화면을 먼저 접하는 경우가 많다. 여기에는 발행기관, 만기일, 표면금리, 매수수익률, 신용등급, 이자 지급 주기 등이 표시된다.
채권을 고를 때는 단순히 이자율만 보면 안 된다. 최소한 다음 항목은 함께 확인해야 한다.
확인 항목 봐야 하는 이유 발행기관 누가 돈을 갚아야 하는지 확인한다 신용등급 원리금 지급 능력을 가늠한다 만기 돈이 묶이는 기간과 금리 변동 영향을 본다 표면금리 정기적으로 지급되는 이자율을 확인한다 매수수익률 현재 가격으로 샀을 때 기대 수익률을 본다 중도 매도 가능성 만기 전 팔 때 가격 손실이 날 수 있다 채권 투자 전에 알아야 할 위험 &nbsp; 채권은 주식보다 안정적인 자산으로 분류되지만, 손실 가능성이 없는 상품은 아니다. 특히 만기 전에 팔 계획이 있다면 가격 변동을 반드시 생각해야 한다.
첫째, 금리 위험이 있다. 시장금리가 오르면 기존 채권 가격은 떨어지는 경향이 있다. 만기까지 보유하면 약속된 원리금을 받을 수 있더라도, 중간에 팔면 손실이 날 수 있다.
둘째, 신용위험이 있다. 발행 기관이 어려워져 이자나 원금을 제때 갚지 못할 수 있다. 국채는 신용위험이 매우 낮은 편이지만, 회사채는 기업의 재무상태와 신용등급을 확인해야 한다.
셋째, 유동성 위험이 있다. 사고 싶을 때는 쉽게 샀는데 팔고 싶을 때 매수자가 부족할 수 있다. 이 경우 원하는 가격보다 낮게 팔아야 할 수 있다.
넷째, 세금과 수수료도 봐야 한다. 채권 이자에는 세금이 붙을 수 있고, 거래 방식에 따라 수수료나 가격 차이가 생길 수 있다. 실제 수익률은 화면에 보이는 숫자보다 낮아질 수 있다.
채권을 처음 시작한다면 높은 이자만 보고 고르기보다, 신용등급이 높은 채권부터 구조를 익히는 편이 낫다. &ldquo;왜 이자가 높은지&quot;를 설명할 수 없다면 그 높은 이자는 위험의 대가일 가능성이 크다.
마무리 &nbsp; 채권은 정부나 기업이 돈을 빌리기 위해 발행하는 증서이고, 투자자는 채권을 사면서 이자와 원금 상환을 받을 권리를 가진다. 주식처럼 회사의 주인이 되는 투자는 아니지만, 정해진 현금 흐름을 기대할 수 있다는 점에서 안정적인 자산으로 많이 활용된다.
다만 채권도 투자다. 금리가 오르면 가격이 떨어질 수 있고, 발행 기관의 신용이 나빠지면 원리금 지급에도 문제가 생길 수 있다. 그래서 채권을 볼 때는 이자율, 만기, 신용등급, 발행기관, 중도 매도 가능성을 함께 봐야 한다.
처음에는 국채, 금융채, 우량 회사채처럼 구조가 비교적 단순한 상품부터 살펴보는 것이 좋다. 채권의 원리를 이해하면 예금과 주식 사이에서 내 돈을 어떻게 나눌지 판단하는 기준도 훨씬 선명해진다.
자주 묻는 질문 &nbsp; 개인도 채권을 발행할 수 있나? &nbsp; 일반 개인이 마음대로 채권을 발행할 수는 없다. 채권 발행 자격을 갖춘 기관은 법으로 정해져 있고, 발행 자격이 있더라도 일정한 절차와 요건을 거쳐야 한다. 개인 간 돈 거래에서 쓰는 차용증과 시장에서 거래되는 채권은 다르다.
채권은 투자 금액이 커야만 가능한가? &nbsp; 반드시 큰돈이 있어야만 가능한 것은 아니다. 개별 채권의 발행 규모는 크지만, 개인 투자자는 증권사를 통해 비교적 작은 금액으로도 채권에 투자할 수 있다. 또 채권형 펀드나 채권 ETF를 이용하면 더 작은 금액으로 분산 투자도 가능하다.
어떤 채권이 좋은 채권인가? &nbsp; 무조건 이자가 높은 채권이 좋은 채권은 아니다. 좋은 채권은 내 투자 목적과 기간, 위험 감수 성향에 맞는 채권이다. 안정성을 중시한다면 신용등급과 발행기관을 먼저 보고, 수익률을 더 원한다면 그만큼 신용위험과 가격 변동 위험을 감당할 수 있는지 확인해야 한다.`}).add({id:121,href:"/posts/kodex-200-target-weekly-covered-call-first-buy-guide/",title:"첫 주식 매매 상품: KODEX 200타겟위클리커버드콜...",description:"삼성증권 국내주식 투자지원금으로 첫 매수를 해보려는 초보자를 위해 KODEX 200타겟위클리커버드콜(498400)의 특징과 주의점을 정리했다.",content:`본격적으로 주식을 사보기 위해 증권 회사를 알아 보던 중, 삼성증권에서 신규 가입시에 국내주식 투자지원금으로 2만원으로 준다는 이벤트을 발견하였다. 일주일 내에 주식을 매수해야 한다는 조건이었지만, 어차피 새로 가입하는거 참이라 이왕이면 투자지원금으로 받으면 좋겠다는 생각에 가입을 진행하였다.
가입 직후 실제로 2만원이 입금되었는데, 막상 이 금액으로 살만한 개별 종목을 찾으려니 마땅치 않았다. 그러던 중에 2만원 대에 매수 가능한 국내 상장 ETF인 KODEX 200타겟위클리커버드콜(498400) 를 주식을 검색하여 발견하였다. 이 상품은 코스피 200 지수를 기초자산으로 하여 위클리(주간) 콜옵션을 매도, 연 15% 수준의 높은 옵션 프리미엄 수익과 배당을 추구하는 월배당 ETF이라는게 괜찮아 보였다.
초보자로써는 무작정 큰돈을 넣기 보다는 국내주식 이벤트 지원금으로 ETF 매수 과정을 경험해보는 후보로 괜찮아 보여 이 주식을 주문하고 그 관련 조사 내용을 여기에 정리하였다.
KODEX 200타겟위클리커버드콜(498400)은 어떤 상품인가 &nbsp; KODEX 200타겟위클리커버드콜은 삼성자산운용의 KODEX 브랜드 ETF다. 종목코드는 498400 이고, 국내 거래소에서 원화로 거래된다. 삼성증권 같은 국내 증권사 앱의 국내주식 주문 화면에서 검색하고 매수할 수 있다.
이 ETF의 기초지수는 &ldquo;코스피 200 타겟 위클리 커버드콜 지수&quot;다. 이름이 길지만 구조를 나누어 보면 조금 쉬워진다.
먼저 코스피200은 국내 대표 대형주 200개 종목으로 구성된 지수다. 여기에 위클리 옵션을 활용한 커버드콜 전략을 더한다. 커버드콜은 주식을 보유하면서 콜옵션을 매도해 옵션 프리미엄 수익을 노리는 방식이다. 이 ETF는 인컴 수익을 목적으로 연 15% 수준의 프리미엄을 목표로 옵션 매도 규모를 조절하는 상품으로 알려져 있다.
다만 커버드콜 ETF는 일반 지수 ETF와 성격이 다르다. 옵션 프리미엄을 얻는 대신 지수가 크게 오를 때 상승 수익이 제한될 수 있고, 반대로 시장이 하락하면 손실이 발생할 수 있다. &ldquo;월배당처럼 현금 흐름이 나온다&quot;는 장점만 보고 접근하면 상품 구조를 오해하기 쉽다.
첫 주식 매매 후보로 볼 수 있는 이유 &nbsp; 주식을 처음 사보는 목적이 &ldquo;큰돈을 벌겠다&quot;가 아니라 &ldquo;투자 과정을 경험해보겠다&quot;라면 ETF 1주를 사보는 것은 꽤 현실적인 시작이다. KODEX 200타겟위클리커버드콜도 그런 관점에서 볼 수 있다.
첫째, 국내 주식 주문 화면에서 거래할 수 있다. 삼성증권 mPOP 앱에서 종목코드 498400 또는 &ldquo;KODEX 200타겟위클리커버드콜&quot;을 검색해 매수하면 된다. 일반 주식 주문과 흐름이 비슷해서 첫 매수 연습용으로 접근하기 쉽다.
둘째, 개별 종목 하나를 고르는 부담이 줄어든다. 삼성전자, 현대차, SK하이닉스처럼 특정 기업 하나를 고르면 그 회사의 실적과 뉴스에 크게 흔들릴 수 있다. ETF는 여러 자산을 묶어 운용하므로 개별 종목 매수보다 분산 효과를 기대할 수 있다.
셋째, 월중 분배금을 지급하는 인컴형 ETF라서 배당과 분배금의 개념을 공부하기 좋다. 실제 계좌에서 분배락, 분배금 입금, 세금 처리 같은 흐름을 확인해보면 주식 계좌가 어떻게 작동하는지 체감할 수 있다.
다만 이 ETF가 초보자에게 항상 가장 좋은 상품이라는 뜻은 아니다. 커버드콜 전략은 일반 코스피200 ETF보다 구조가 복잡하다. 처음에는 1주 또는 아주 작은 금액으로 시작해 매수, 체결, 평가손익, 분배금 안내 화면을 확인하는 학습용 접근이 더 적절하다.
투자지원금으로 주식 사기 &nbsp; 여기서는 삼성증권을 기준으로 예를 들었다.
삼성증권 이벤트 페이지에는 간혹 &ldquo;국내주식 투자지원금 이벤트&quot;가 진행된다. 이벤트 내용은 시기마다 조건이 바뀔 수 있으므로, 실제 신청 전에는 삼성증권 앱이나 홈페이지의 이벤트 상세 조건을 반드시 확인해야 한다.
2026년 5월 1일부터 2026년 5월 29일까지는 신규 고객에게 2만원을 지원하는 이벤트가 진행되고 있다.
삼성증권 국내주식 투자지원금 이벤트 &nbsp; 과거 같은 유형의 삼성증권 국내주식 투자지원금 이벤트는 비대면 종합 계좌를 처음 개설한 신규 고객이 이벤트에 참여 신청하면, 선착순으로 국내주식 거래에 사용할 수 있는 투자지원금 2만원을 지급하는 방식이었다. 보통 사용 기한이 짧고, 사용하지 않으면 회수되는 조건이 붙는다.
이렇게 지급받은 금액으로 첫 주식을 사보려면, 먼저 이벤트 지원금이 적용되는 주문 화면과 매수 가능 종목을 확인해야 한다. 국내주식 투자지원금은 증권사가 정한 조건 안에서만 사용할 수 있는 혜택이므로, 주문 전에 적용 여부를 확인하는 것이 중요하다.
KODEX 200타겟위클리커버드콜(498400)은 국내 거래소에 상장된 ETF라 국내주식 주문 화면에서 거래된다. 따라서 이벤트 조건에서 ETF 매수가 제한되어 있지 않다면 매수 후보가 될 수 있다.
예를 들어 ETF 1주 가격이 지원금 2만원보다 높다면 부족한 금액은 계좌에 따로 입금해야 주문이 가능할 수 있다. 반대로 1주 가격이 2만원 이하라면 지원금만으로 체결될 가능성이 있지만, 실제 주문 가능 금액과 지원금 적용 여부는 앱에서 확인해야 한다.
실제로 사는 방법 &nbsp; 매수 과정은 어렵지 않다. 증권사 앱마다 화면 이름은 조금씩 다르지만 흐름은 비슷하다.
삼성증권 mPOP 앱에서 비대면 종합 계좌를 개설한다. 이벤트 대상이라면 &ldquo;국내주식 투자지원금 이벤트&quot;에 참여 신청한다. 국내주식 주문 화면으로 이동한다. 종목 검색창에 &ldquo;498400&rdquo; 또는 &ldquo;KODEX 200타겟위클리커버드콜&quot;을 입력한다. 현재가, 호가, 거래량, 1주 가격을 확인한다. 수량을 1주로 입력하고 지정가 또는 시장가 주문을 선택한다. 주문 전 예상 결제금액과 수수료, 이벤트 지원금 적용 여부를 확인한다. 주문을 넣고 체결 여부를 확인한다. 처음이라면 시장가 주문보다 지정가 주문이 더 이해하기 쉽다. 시장가 주문은 바로 체결될 가능성이 높지만, 내가 정확히 얼마에 사는지 체감하기 어렵다. 지정가 주문은 &ldquo;이 가격 이하로 살래&quot;라는 가격을 정해서 주문하는 방식이다. 다만 지정가가 현재 매도 호가보다 낮으면 바로 체결되지 않을 수 있다.
ETF를 1주 매수한 뒤에는 바로 수익률만 보지 말고 몇 가지 화면을 같이 보면 좋다. 평균 매입가, 현재가, 평가손익, 수익률, 보유 수량, 매도 가능 수량, 예상 세금 안내를 확인해보면 주식 계좌가 어떻게 작동하는지 감이 잡힌다.
매수 후 가격이 조금 떨어져도 너무 놀랄 필요는 없다. 주식과 ETF 가격은 매일 움직인다. 중요한 것은 처음부터 큰돈을 넣지 않고, 내가 이해할 수 있는 상품을 작은 금액으로 경험해보는 것이다.
살 때 확인해야 할 주의점 &nbsp; KODEX 200타겟위클리커버드콜은 국내 상장 ETF라 접근성은 좋지만, 확인할 점은 분명히 있다.
첫째, 커버드콜 전략은 상승장에서 수익이 제한될 수 있다. 콜옵션을 매도해 프리미엄을 얻는 대신, 코스피200이 크게 오를 때 그 상승분을 온전히 따라가지 못할 수 있다. &ldquo;분배금이 나온다&quot;는 점만 보고 일반 지수 ETF처럼 생각하면 안 된다.
둘째, 하락장에서 손실이 날 수 있다. 옵션 프리미엄이 어느 정도 완충 역할을 할 수는 있지만 원금 보장 상품은 아니다. 코스피200이 하락하면 ETF 가격도 하락할 수 있다.
셋째, 분배금은 공짜 수익이 아니다. ETF의 분배금은 보유 자산과 운용 성과에서 지급되는 돈이다. 분배락일에는 분배금만큼 기준가격에 반영될 수 있고, 세금도 고려해야 한다. 분배금만 보고 수익률을 판단하지 말고 가격 변동까지 함께 봐야 한다.
넷째, ETF에도 비용이 있다. KODEX 200타겟위클리커버드콜의 총보수는 연 0.39%로 공시되어 있다. 보수뿐 아니라 기타 비용, 매매 비용, 추적 오차도 장기 수익률에 영향을 줄 수 있다.
다섯째, 이벤트 때문에 투자 결정을 하면 안 된다. 2만원 지원금은 시작 비용을 낮춰주는 혜택일 수 있지만, ETF를 사야 하는 이유 자체가 되어서는 안 된다. 이벤트를 받았더라도 내가 이해하지 못하는 상품을 사면 투자 경험이 아니라 실수가 될 수 있다.
정리 &nbsp; KODEX 200타겟위클리커버드콜(498400)은 삼성증권 국내주식 투자지원금으로 첫 매수 과정을 경험해볼 때 후보로 볼 수 있는 국내 상장 ETF다. 다만 커버드콜 전략을 사용하는 상품이라 일반 지수 ETF보다 구조를 더 꼼꼼히 이해해야 한다.
핵심만 다시 정리하면 이렇다.
KODEX 200타겟위클리커버드콜은 종목코드 498400인 국내 상장 ETF다. 코스피200을 바탕으로 위클리 커버드콜 전략을 사용하는 인컴형 ETF다. 국내 상장 ETF라도 이벤트 조건에서 매수가 가능한지 반드시 확인해야 한다. 커버드콜 ETF는 분배금을 기대할 수 있지만, 상승 수익 제한과 원금 손실 가능성이 있다. 처음 투자라면 1주 또는 작은 금액으로 매수 과정을 경험하는 정도가 적절하다. 처음 투자라면 목표를 크게 잡기보다 &ldquo;1주를 사보고 계좌 화면을 이해한다&rdquo; 정도로 시작하는 것이 좋다. 주식 투자는 한 번에 정답을 맞히는 게임이 아니라, 작은 금액으로 경험을 쌓으면서 나에게 맞는 방식을 찾아가는 과정에 가깝다.
다음 이미지는 실제 매수한 금액이고, 실제로 사고나서 95원이 바로 올랐다. 큰 의미는 없겠지만 그래도 기분은 좋다. ^^
자주 묻는 질문 &nbsp; KODEX 200타겟위클리커버드콜(498400)은 어떤 ETF인가? &nbsp; 국내 거래소에 상장된 ETF다. 코스피200을 바탕으로 커버드콜 전략을 사용하는 상품이며, 국내주식 주문 화면에서 원화로 거래된다.
삼성증권 2만원 투자지원금만으로 1주를 살 수 있나? &nbsp; 그날의 ETF 가격과 이벤트 조건에 따라 다르다. ETF 1주 가격이 2만원보다 높으면 부족한 금액을 추가로 넣어야 할 수 있고, 이벤트 지원금이 ETF 매수에 적용되는지도 주문 화면에서 확인해야 한다.
커버드콜 ETF는 초보자가 사도 괜찮을까? &nbsp; 작은 금액으로 매수 과정을 경험하는 용도라면 공부가 될 수 있다. 다만 구조는 일반 지수 ETF보다 복잡하다. 분배금, 분배락, 상승 수익 제한, 하락 손실 가능성을 이해한 뒤에 금액을 늘리는 편이 낫다.`}).add({id:122,href:"/posts/card-company-site-list/",title:"카드사 사이트 주소 모음, 국내 카드사 공식 홈페이지 ...",description:"국내 주요 카드사 공식 홈페이지 주소를 은행계 카드사, 기업계 카드사, 겸영은행 카드, 간편결제, 카드 비교 사이트로 나누어 정리했다.",content:`카드 이용내역을 확인하거나 결제일을 바꾸고 싶을 때, 포인트를 조회하거나 분실 신고를 해야 할 때 가장 먼저 필요한 것이 카드사 공식 홈페이지 주소다. 평소에는 앱으로 처리하는 일이 많지만, 카드 발급 신청, 명세서 확인, 한도 변경, 금융 서비스 조회는 홈페이지에서 보는 것이 더 편할 때도 있다.
문제는 카드사 이름을 검색했을 때 광고 페이지, 이벤트 페이지, 비슷하게 생긴 피싱 사이트가 함께 보일 수 있다는 점이다. 특히 카드번호, CVC, 비밀번호 앞자리, 인증번호를 입력하는 화면이라면 공식 사이트인지 더 꼼꼼히 확인해야 한다.
아래는 국내 주요 카드사와 간편결제, 카드 비교·조회 사이트를 한곳에 모은 목록이다. 자주 쓰는 카드사는 즐겨찾기에 저장해두고, 새 카드를 고를 때는 비교 사이트와 포인트 조회 사이트까지 함께 활용하면 좋다.
은행계 전업카드사 공식 홈페이지 &nbsp; 은행계 전업카드사는 대형 금융그룹에 속한 카드 전문 회사다. 은행 계좌, 간편결제, 포인트, 대출, 금융 앱과 연결되는 경우가 많아 주거래 은행과 함께 쓰기 편하다.
카드사 공식 사이트 대표전화 신한카드 https://www.shinhancard.com 1544-7000 KB국민카드 https://card.kbcard.com 1588-1688 하나카드 https://www.hanacard.co.kr 1800-1111 우리카드 https://www.wooricard.com 1588-9955 신한카드는 신한 SOL페이와 연계해 카드 결제, 혜택 관리, 금융 서비스를 한곳에서 확인하기 쉽다. 카드별 혜택 비교, 이용한도 조회, 청구서 확인, 할부 변경 같은 기본 업무도 홈페이지에서 처리할 수 있다.
KB국민카드는 KB Pay와 포인트리 생태계가 강점이다. 국민은행을 주거래 은행으로 쓰는 사람이라면 결제 계좌와 카드 관리를 함께 보기 편하다. 하나카드는 해외 이용, 환전, 여행 관련 혜택을 확인할 때 살펴볼 만하고, 우리카드는 &ldquo;카드의정석&rdquo; 시리즈처럼 소비 패턴별 상품이 잘 알려져 있다.
기업계 전업카드사 공식 홈페이지 &nbsp; 기업계 전업카드사는 은행이 아닌 기업 그룹이나 카드 전문 회사 성격이 강하다. 유통, 자동차, 문화, 간편결제, 멤버십과 연결된 혜택이 많아 생활 패턴에 따라 체감 혜택이 크게 달라진다.
카드사 공식 사이트 대표전화 삼성카드 https://www.samsungcard.com 1588-8700 현대카드 https://www.hyundaicard.com 1577-6000 롯데카드 https://www.lottecard.co.kr 1588-8100 BC카드 https://www.bccard.com 1588-4000 삼성카드는 삼성페이와 함께 쓰는 사람이 많고, 카드 상품 구조가 비교적 직관적인 편이다. 홈페이지에서는 카드 추천, 이용내역, 청구금액, LINK 혜택을 확인할 수 있다.
현대카드는 디자인과 브랜딩, M포인트, 문화 프로그램으로 잘 알려져 있다. 특정 제휴처 혜택이 강한 카드가 많아 본인이 자주 쓰는 브랜드와 맞는지 보는 것이 중요하다.
롯데카드는 롯데백화점, 롯데마트, 롯데면세점, 롯데시네마처럼 롯데 유통 채널을 자주 쓰는 사람에게 유리할 수 있다. BC카드는 자체 카드도 있지만 여러 은행 카드의 가맹점망과 결제 인프라 역할도 함께 한다. 그래서 은행에서 발급한 카드인데 BC카드 홈페이지나 페이북 앱에서 관리되는 경우가 있다.
겸영은행 카드 공식 홈페이지 &nbsp; 겸영은행 카드는 별도 카드사가 아니라 은행이 카드 업무를 함께 운영하는 형태다. 은행 홈페이지 안에 카드 메뉴가 있거나, 카드 전용 페이지를 따로 제공한다. 은행 계좌와 카드 결제 계좌를 묶어 관리하기 쉽다는 장점이 있다.
카드 서비스 공식 사이트 대표전화 NH농협카드 https://card.nonghyup.com 1644-4000 IBK기업은행 카드 https://www.ibk.co.kr 1588-2588 수협카드 https://www.suhyup-bank.com 1588-1515 NH농협카드는 농협은행과 지역 농축협 이용자에게 익숙하다. 생활 밀착형 할인, 주유, 마트, 농축산물 관련 혜택을 확인할 때 살펴볼 만하다.
IBK기업은행 카드는 기업은행 홈페이지 안에서 카드 신청과 조회를 처리한다. 중소기업 임직원, 개인사업자, 법인 고객을 위한 카드 상품도 함께 볼 수 있다. 수협카드는 수협은행 홈페이지에서 카드 관련 메뉴를 제공하며, 수산물·전통시장·생활 혜택이 붙은 상품을 확인할 수 있다.
간편결제 플랫폼 공식 사이트 &nbsp; 요즘은 카드 자체보다 간편결제 앱을 통해 카드를 쓰는 일이 많다. 같은 카드를 쓰더라도 네이버페이, 카카오페이, 토스, 삼성페이, 페이코 같은 플랫폼을 거치면 추가 적립이나 할인 이벤트를 받을 수 있다.
서비스 공식 사이트 특징 네이버페이 https://pay.naver.com 네이버 쇼핑·예약·주문 결제와 포인트 적립 카카오페이 https://www.kakaopay.com 카카오톡 기반 송금, 결제, 청구서, 인증 토스 https://www.toss.im 송금, 결제, 자산관리, 투자, 보험 통합 플랫폼 삼성페이 https://www.samsung.com/sec/samsung-pay 갤럭시 스마트폰 기반 오프라인 간편결제 페이코 https://www.payco.com 온라인·오프라인 결제와 포인트 적립 간편결제를 잘 활용하면 카드 혜택과 플랫폼 혜택을 함께 받을 수 있다. 예를 들어 네이버 쇼핑을 자주 쓴다면 네이버페이 적립률을 확인하고, 카카오톡 선물하기를 자주 쓴다면 카카오페이 결제 이벤트를 보는 식이다.
다만 간편결제 이벤트는 조건이 자주 바뀐다. 특정 카드로 결제해야 하거나, 최소 결제 금액이 있거나, 월 적립 한도가 있는 경우가 많다. &ldquo;최대 적립&rdquo; 문구만 보고 결제하기보다 실제 내 소비 금액에서 얼마나 받을 수 있는지 계산하는 습관이 필요하다.
카드 비교와 포인트 조회에 유용한 사이트 &nbsp; 카드를 새로 만들 때는 카드사 홈페이지만 보는 것보다 비교 사이트를 함께 보는 것이 좋다. 카드사 홈페이지는 자사 상품을 중심으로 보여주기 때문에 여러 카드사의 혜택을 같은 기준으로 비교하기 어렵다.
사이트 공식 사이트 확인할 수 있는 것 카드고릴라 https://www.card-gorilla.com 신용카드·체크카드 혜택 비교, 인기 카드 순위 여신금융협회 https://www.crefia.or.kr 카드업계 정보, 가맹점 수수료, 소비자 보호 정보 카드포인트 통합조회 https://www.cardpoint.or.kr 여러 카드사 포인트 통합 조회와 현금화 카드포인트 통합조회에서 포인트 확인 &nbsp; 카드고릴라는 생활비, 주유, 통신, 온라인 쇼핑, 항공 마일리지처럼 혜택 유형별로 카드를 비교할 때 유용하다. 다만 순위가 높다고 내게 항상 좋은 카드는 아니다. 내 소비 패턴과 전월 실적 조건, 할인 한도를 함께 봐야 한다.
카드포인트 통합조회는 여러 카드사에 흩어진 포인트를 한 번에 확인할 수 있는 사이트다. 사용하지 않은 포인트는 시간이 지나면 소멸될 수 있으므로, 여러 카드를 쓰는 사람이라면 주기적으로 확인하는 편이 좋다.
한눈에 보는 카드사 사이트 주소 &nbsp; 아래 표는 자주 찾는 주소를 다시 모은 것이다. 카드 분실 신고나 결제일 변경처럼 급한 일이 생겼을 때 검색부터 하지 않도록, 주로 쓰는 카드사는 미리 저장해두면 편하다.
구분 카드사·서비스 공식 주소 대표전화 전업카드사 신한카드 https://www.shinhancard.com 1544-7000 전업카드사 KB국민카드 https://card.kbcard.com 1588-1688 전업카드사 하나카드 https://www.hanacard.co.kr 1800-1111 전업카드사 우리카드 https://www.wooricard.com 1588-9955 전업카드사 삼성카드 https://www.samsungcard.com 1588-8700 전업카드사 현대카드 https://www.hyundaicard.com 1577-6000 전업카드사 롯데카드 https://www.lottecard.co.kr 1588-8100 전업카드사 BC카드 https://www.bccard.com 1588-4000 겸영은행 NH농협카드 https://card.nonghyup.com 1644-4000 겸영은행 IBK기업은행 카드 https://www.ibk.co.kr 1588-2588 겸영은행 수협카드 https://www.suhyup-bank.com 1588-1515 간편결제 네이버페이 https://pay.naver.com - 간편결제 카카오페이 https://www.kakaopay.com - 간편결제 토스 https://www.toss.im - 간편결제 삼성페이 https://www.samsung.com/sec/samsung-pay - 간편결제 페이코 https://www.payco.com - 비교·조회 카드고릴라 https://www.card-gorilla.com - 비교·조회 여신금융협회 https://www.crefia.or.kr - 비교·조회 카드포인트 통합조회 https://www.cardpoint.or.kr - 카드 사이트 이용할 때 기억할 점 &nbsp; 카드사 홈페이지는 공식 주소로 직접 접속하는 습관이 중요하다. 카드사를 사칭한 문자에는 &ldquo;결제 승인&rdquo;, &ldquo;카드 발급 완료&rdquo;, &ldquo;포인트 소멸 예정&rdquo;, &ldquo;분실 신고 접수&rdquo; 같은 문구가 들어가는 경우가 많다. 이런 링크를 누르기보다 카드사 앱이나 공식 홈페이지에서 직접 확인해야 한다.
카드를 새로 발급받기 전에는 카드 혜택을 월 소비 패턴에 맞춰 계산해야 한다. 주유를 거의 하지 않는 사람이 주유 할인 카드를 만들거나, 온라인 쇼핑을 적게 하는 사람이 쇼핑 특화 카드를 만들면 혜택을 제대로 받기 어렵다. 전월 실적, 할인 제외 항목, 월 할인 한도, 연회비를 함께 봐야 실제 이득이 나온다.
여러 카드를 쓰고 있다면 포인트 관리도 중요하다. 카드사별로 포인트가 조금씩 흩어져 있으면 체감이 작지만, 통합 조회를 해보면 생각보다 쓸 수 있는 금액이 남아 있는 경우가 있다. 포인트는 현금화 가능 여부와 유효기간을 확인해두는 것이 좋다.
간편결제에 카드를 등록할 때도 보안 설정을 확인해야 한다. 휴대폰 분실에 대비해 생체인증, 결제 비밀번호, 원격 잠금 기능을 켜두는 편이 안전하다. 결제 알림을 켜두면 내가 쓰지 않은 결제가 발생했을 때 빠르게 알아차릴 수 있다.
정리 &nbsp; 카드사 공식 홈페이지는 카드 발급 신청, 이용내역 조회, 명세서 확인, 결제일 변경, 분실 신고, 포인트 관리에 꼭 필요하다. 평소 자주 쓰는 카드사는 검색해서 들어가기보다 공식 주소를 즐겨찾기에 저장해두는 것이 안전하다.
은행계 카드사는 주거래 금융그룹과 함께 쓰기 편하고, 기업계 카드사는 유통·문화·브랜드 제휴 혜택이 강한 편이다. 겸영은행 카드는 은행 계좌와 묶어 관리하기 쉽고, 간편결제 플랫폼은 카드 혜택에 추가 적립이나 할인을 더할 수 있다.
카드를 고를 때는 &ldquo;혜택이 많다&quot;는 말보다 내 소비 패턴에 맞는지를 먼저 봐야 한다. 전월 실적, 할인 한도, 제외 업종, 연회비를 확인하고, 사용하지 않은 포인트는 카드포인트 통합조회에서 주기적으로 확인하면 카드 생활을 더 알뜰하게 관리할 수 있다.`}).add({id:123,href:"/posts/carry-trade/",title:"캐리 트레이드란? 금리 차이로 수익을 노리는 외환 투자...",description:"캐리 트레이드의 뜻과 작동 원리, 금리 차익과 환율 변동 수익, 장점과 위험, 개인 투자자가 주의할 점을 쉽게 정리했다.",content:`환율 뉴스를 보다 보면 &ldquo;엔 캐리 트레이드 청산&rdquo;, &ldquo;달러 강세와 캐리 트레이드&rdquo;, &ldquo;고금리 통화로 자금이 이동한다&rdquo; 같은 표현이 나온다. 주식이나 예금보다 낯선 말이라 어렵게 느껴지지만, 핵심은 단순하다. 금리가 낮은 통화로 돈을 조달하고, 금리가 높은 통화에 투자해 차이를 노리는 전략이다.
캐리 트레이드(Carry Trade)는 서로 다른 통화 간의 금리 차이를 활용해 수익을 얻으려는 외환 투자 전략이다. 예를 들어 어떤 통화는 연 1% 금리이고 다른 통화는 연 5% 금리라면, 낮은 금리 통화로 자금을 마련해 높은 금리 통화에 투자할 때 연 4%포인트의 금리 차이를 기대할 수 있다.
하지만 캐리 트레이드는 단순히 &ldquo;높은 금리 통화를 사면 돈을 번다&quot;는 이야기가 아니다. 환율이 반대로 움직이면 금리 차익보다 더 큰 손실이 날 수 있고, 레버리지를 쓰면 손실 속도도 빨라진다. 그래서 캐리 트레이드는 금리와 환율을 함께 봐야 하는 전략이다.
캐리 트레이드는 금리 차이를 활용하는 전략이다 &nbsp; 캐리 트레이드의 기본 구조는 낮은 금리 통화를 빌리거나 매도하고, 높은 금리 통화를 매수하는 것이다. 여기서 투자자가 기대하는 수익은 크게 두 가지다. 하나는 두 통화 사이의 금리 차이에서 나오는 수익이고, 다른 하나는 환율 변동에서 나오는 수익이다.
예를 들어 A통화 금리가 연 1%, B통화 금리가 연 5%라고 하자. 투자자는 A통화로 자금을 조달한 뒤 B통화를 매수한다. 환율이 크게 변하지 않는다면 B통화에서 받는 금리와 A통화 조달 비용의 차이인 연 4%포인트가 기대 수익의 출발점이 된다.
낮은 금리 통화 A: 연 1% 높은 금리 통화 B: 연 5% 기대 금리 차이: 연 4%포인트여기까지는 예금 금리 비교처럼 보일 수 있다. 하지만 실제 캐리 트레이드는 외환 거래다. 내가 산 고금리 통화의 가치가 떨어지면 금리 차익을 얻어도 환차손이 발생할 수 있다. 반대로 고금리 통화의 가치가 오르면 금리 차익에 환차익까지 더해질 수 있다.
그래서 캐리 트레이드는 단순한 금리 투자가 아니라 금리와 환율을 동시에 보는 투자 전략이다.
캐리 트레이드는 어떤 순서로 작동할까 &nbsp; 캐리 트레이드는 보통 다음 흐름으로 이해하면 쉽다.
1. 금리가 낮은 통화를 찾는다 &nbsp; 먼저 투자자는 상대적으로 금리가 낮은 통화를 찾는다. 낮은 금리 통화는 자금을 조달하는 데 드는 비용이 낮기 때문에 캐리 트레이드의 출발점이 된다. 과거 글로벌 시장에서는 금리가 낮았던 엔화가 이런 조달 통화로 자주 언급되었다.
2. 금리가 높은 통화를 찾는다 &nbsp; 다음으로 상대적으로 금리가 높은 통화를 찾는다. 높은 금리 통화는 투자 대상이 된다. 금리가 높다는 것은 그 통화를 보유했을 때 받을 수 있는 이자 수익이 상대적으로 크다는 뜻이다.
3. 낮은 금리 통화를 팔고 높은 금리 통화를 산다 &nbsp; 투자자는 낮은 금리 통화를 매도하고 높은 금리 통화를 매수한다. 외환시장에서는 두 통화가 항상 짝을 이루어 거래되기 때문에, 한 통화를 산다는 것은 다른 통화를 판다는 뜻과 연결된다.
4. 금리 차익과 환율 변동을 함께 본다 &nbsp; 거래를 유지하는 동안 투자자는 금리 차이에 따른 수익을 기대한다. 여기에 더해 높은 금리 통화의 가치가 오르면 환율 변동 수익까지 얻을 수 있다. 반대로 높은 금리 통화가 떨어지면 금리 차익이 환차손에 묻힐 수 있다.
결국 캐리 트레이드는 &ldquo;금리가 높은 쪽에 투자한다&quot;는 한 문장으로 끝나지 않는다. 금리 차이가 유지되는지, 환율이 불리하게 움직이지 않는지, 시장이 위험자산을 선호하는 분위기인지까지 함께 봐야 한다.
금리 차익과 환율 수익은 어떻게 계산될까 &nbsp; 캐리 트레이드의 수익 구조를 간단한 예로 보자. 투자자가 낮은 금리 통화로 자금을 조달해 높은 금리 통화에 투자했고, 두 통화의 금리 차이가 연 4%포인트라고 가정해 보자. 환율이 1년 동안 거의 변하지 않았다면 이론적으로는 약 4%의 금리 차익을 기대할 수 있다.
하지만 환율이 움직이면 결과가 달라진다.
상황 결과 고금리 통화 가치가 상승 금리 차익 + 환차익 가능 고금리 통화 가치가 유지 금리 차익 중심의 수익 가능 고금리 통화 가치가 하락 금리 차익보다 큰 환차손 가능 예를 들어 금리 차이로 4%를 기대했는데, 내가 산 고금리 통화 가치가 8% 하락했다면 전체로는 손실이 날 수 있다. 반대로 금리 차이가 4%이고 고금리 통화 가치가 5% 상승했다면 두 효과가 더해져 수익이 커질 수 있다.
여기서 중요한 점은 높은 금리 통화가 항상 오른다는 보장이 없다는 것이다. 이론적으로는 금리 차이가 환율에 반영되어 초과 수익이 쉽게 나지 않아야 한다는 설명도 있다. 하지만 실제 시장에서는 투자 심리, 중앙은행 정책, 경기 전망, 위험 회피 심리 때문에 환율이 이론대로만 움직이지 않는다. 캐리 트레이드 기회도 이 틈에서 생기고, 손실도 이 틈에서 발생한다.
캐리 트레이드는 글로벌 금융시장에 어떤 영향을 줄까 &nbsp; 캐리 트레이드는 개인 투자자의 전략을 넘어 글로벌 금융시장 전체에도 영향을 준다. 낮은 금리 통화에서 높은 금리 통화로 자금이 이동하면 국가 간 자본 이동이 활발해지고, 외환시장 거래도 늘어난다. 이 과정에서 시장에 유동성이 공급된다.
또 캐리 트레이드는 통화 간 금리 차이를 시장 가격에 반영하게 만든다. 특정 국가의 금리가 높으면 그 통화로 자금이 유입될 수 있고, 이 흐름은 환율에도 영향을 준다. 반대로 금리 차이가 줄어들거나 시장이 불안해지면 자금이 빠져나가며 환율이 크게 흔들릴 수 있다.
특히 시장이 안정적이고 투자자들이 위험을 감수하려는 분위기일 때 캐리 트레이드는 활발해지는 경향이 있다. 고금리 통화와 위험자산에 자금이 몰리기 쉽기 때문이다. 반대로 금융위기나 경기 침체 우려가 커지면 캐리 트레이드 포지션이 빠르게 청산될 수 있다. 이때는 그동안 팔렸던 저금리 통화가 다시 강해지고, 고금리 통화가 약해지는 움직임이 나타날 수 있다.
그래서 캐리 트레이드는 환율 결정 메커니즘과도 연결된다. 각국의 금리 차이, 자본 이동, 투자 심리가 함께 움직이면서 통화 가치에 영향을 주는 것이다.
캐리 트레이드의 장점 &nbsp; 캐리 트레이드의 첫 번째 장점은 금리 차이를 비교적 명확한 수익 원천으로 삼는다는 점이다. 주식처럼 기업 실적을 예측하는 방식과 다르게, 각국의 기준금리와 시장금리는 공개되어 있다. 투자자는 금리 차이를 확인하고 전략의 기본 기대 수익을 계산할 수 있다.
두 번째 장점은 환율 변동을 활용할 수 있다는 점이다. 고금리 통화가 강세를 보이면 금리 차익에 환차익이 더해진다. 금리 차이가 크지 않아도 환율이 유리하게 움직이면 전체 수익률이 높아질 수 있다.
세 번째 장점은 분산 투자 도구로 활용될 수 있다는 점이다. 여러 통화와 자산을 조합하면 특정 통화 하나에만 의존하는 위험을 줄일 수 있다. 예를 들어 한 통화에서는 손실이 나더라도 다른 통화의 수익이 일부를 상쇄할 수 있다.
다만 여기서 조심할 점이 있다. 금리 차이가 연 4%포인트라면 기본적으로 기대할 수 있는 금리 차익은 원금 대비 약 4% 수준이다. 1,000만 원을 투자했다면 단순 금리 차익은 약 40만 원이지 400만 원이 아니다. 높은 수익률은 대개 레버리지를 쓰거나 환율이 유리하게 움직일 때 가능하지만, 그만큼 위험도 커진다.
캐리 트레이드의 위험성 &nbsp; 캐리 트레이드의 가장 큰 위험은 환율이다. 금리 차이로 3~5% 수익을 기대하더라도 환율이 10% 불리하게 움직이면 전체 결과는 손실이 된다. 외환시장은 중앙은행 발언, 물가 지표, 전쟁, 금융위기, 경기 침체 우려 같은 변수에 민감하게 반응한다.
두 번째 위험은 금리 역전이다. 캐리 트레이드는 높은 금리와 낮은 금리의 차이를 활용한다. 그런데 고금리 국가가 금리를 내리거나 저금리 국가가 금리를 올리면 금리 차이가 줄어들 수 있다. 심하면 원래 고금리였던 통화와 저금리였던 통화의 위치가 바뀔 수도 있다. 이 경우 캐리 트레이드의 전제가 흔들린다.
세 번째 위험은 레버리지다. 캐리 트레이드에서 금리 차이는 생각보다 크지 않은 경우가 많다. 그래서 투자자는 수익률을 키우기 위해 레버리지를 사용하기 쉽다. 문제는 레버리지가 수익만 키우는 것이 아니라 손실도 함께 키운다는 점이다. 환율이 조금만 반대로 움직여도 증거금 부족이나 강제 청산이 발생할 수 있다.
네 번째 위험은 캐리 트레이드 청산이다. 시장이 불안해지면 많은 투자자가 동시에 포지션을 줄인다. 이때 고금리 통화가 급락하고 저금리 조달 통화가 급등할 수 있다. 평소에는 천천히 쌓이던 수익이 위기 상황에서 며칠 만에 사라질 수 있다.
초보 투자자는 이 구조를 반드시 기억해야 한다. 캐리 트레이드는 매달 이자를 받는 안정형 상품이 아니라, 환율 변동과 레버리지 위험을 안고 있는 투자 전략이다.
개인 투자자가 확인해야 할 기준 &nbsp; 캐리 트레이드를 직접 하거나 관련 상품에 투자하려면 먼저 통화쌍의 성격을 봐야 한다. 금리 차이가 크더라도 환율 변동성이 지나치게 높다면 위험이 커진다. 특히 신흥국 통화는 높은 금리를 제공하는 경우가 있지만, 정치적 불확실성이나 외환 유동성 문제로 환율이 크게 흔들릴 수 있다.
둘째, 중앙은행의 금리 방향을 확인해야 한다. 현재 금리보다 중요한 것은 앞으로 금리가 어떻게 바뀔 가능성이 높은가다. 고금리 통화라도 금리 인하가 예상되면 매력이 줄어들 수 있고, 저금리 통화라도 금리 인상이 예상되면 조달 비용이 커질 수 있다.
셋째, 레버리지 수준을 낮게 관리해야 한다. 캐리 트레이드에서 레버리지는 수익률을 높이는 도구처럼 보이지만, 실제로는 계좌를 빠르게 흔드는 가장 큰 위험 요인이다. 초보자라면 레버리지를 활용한 외환 거래보다 관련 개념을 이해하고 환율과 금리 흐름을 읽는 데 먼저 집중하는 편이 낫다.
넷째, 분산을 고려해야 한다. 특정 통화 하나에만 크게 베팅하면 그 통화의 정치, 경제, 금리 변수에 계좌 전체가 흔들린다. 여러 통화를 조합하거나, 외환 이외의 자산과 함께 보는 방식이 더 현실적이다.
확인할 항목을 표로 정리하면 다음과 같다.
확인 항목 이유 두 통화의 금리 차이 기본 기대 수익의 출발점 환율 변동성 금리 차익을 환차손이 지울 수 있는지 확인 중앙은행 정책 방향 금리 차이가 유지될지 판단 레버리지 비율 작은 환율 변동이 큰 손실로 이어지는지 확인 시장 위험 선호도 캐리 트레이드가 유지될 환경인지 확인 마무리 &nbsp; 캐리 트레이드는 낮은 금리 통화로 자금을 조달하고 높은 금리 통화에 투자해 금리 차이를 노리는 외환 투자 전략이다. 여기에 환율이 유리하게 움직이면 추가 수익도 기대할 수 있다. 글로벌 금융시장에서는 자본 이동, 유동성 공급, 환율 형성에 영향을 주는 중요한 전략으로 여겨진다.
하지만 장점만 보면 위험을 놓치기 쉽다. 캐리 트레이드는 급격한 환율 변동, 금리 역전, 과도한 레버리지, 시장 불안 시 포지션 청산이라는 위험을 안고 있다. 금리 차익은 천천히 쌓이지만 환차손은 빠르게 커질 수 있다.
따라서 개인 투자자는 캐리 트레이드를 단순히 고금리 통화에 투자하는 방법으로 보면 안 된다. 금리 차이, 환율 방향, 중앙은행 정책, 레버리지, 분산 여부를 함께 확인해야 한다. 직접 거래하기 전에 먼저 금융 뉴스에서 캐리 트레이드가 어떤 맥락으로 쓰이는지 이해하는 것만으로도 환율 시장을 읽는 눈이 훨씬 좋아진다.
자주 묻는 질문 &nbsp; 캐리 트레이드는 예금처럼 안정적인 전략인가? &nbsp; 아니다. 캐리 트레이드는 금리 차이를 활용하지만 예금과 다르다. 외환 거래이기 때문에 환율이 불리하게 움직이면 금리 차익보다 큰 손실이 날 수 있다. 레버리지를 쓰면 손실 위험은 더 커진다.
금리가 높은 통화를 사면 무조건 유리할까? &nbsp; 무조건 유리하지 않다. 고금리 통화는 금리 수익이 매력적일 수 있지만, 그 나라의 경기 불안, 물가, 정치적 위험, 외환 유동성 문제로 통화 가치가 크게 하락할 수도 있다. 금리만 보지 말고 환율 변동성과 경제 상황을 함께 봐야 한다.
엔 캐리 트레이드는 무엇인가? &nbsp; 엔 캐리 트레이드는 금리가 낮은 엔화로 자금을 조달해 상대적으로 금리가 높은 통화나 자산에 투자하는 전략을 말한다. 일본의 저금리 환경 때문에 오랫동안 대표적인 캐리 트레이드 사례로 언급되었다. 다만 일본 금리와 글로벌 위험 심리가 바뀌면 엔 캐리 트레이드도 빠르게 청산될 수 있다.`}).add({id:124,href:"/posts/kospi-kosdaq-nasdaq/",title:"코스피, 코스닥, 나스닥 간단 설명",description:"주식 투자에 관심이 있다면 반드시 구분해서 이해해야 할 지수가 바로 코스피, 코스닥, 나스닥이다. 각각의 개념과 차이점에 설명한다.",content:`코스피 (KOSPI) &nbsp; 정식 명칭: Korea Composite Stock Price Index 운영 기관: 한국거래소 개념 &nbsp; 대한민국 유가증권시장(대형 우량기업 시장) 에 상장된 기업들의 주가를 종합해 만든 대표 지수이다.
코스피 특징 &nbsp; 삼성전자, 현대차 같은 대기업 중심 한국 경제 전체 흐름을 보여주는 대표 지표 변동성은 상대적으로 코스닥보다 낮은 편 쉽게 말하면, 한국의 메인 주식시장
코스닥 (KOSDAQ) &nbsp; 정식 명칭: Korea Securities Dealers Automated Quotations (한국 증권 거래인 자동 시세 통보 시스템) 운영 기관: 한국거래소 개념 &nbsp; 중소·벤처·기술 성장 기업 중심의 시장 지수이다.
코스닥 특징 &nbsp; IT·바이오·게임 기업 비중 높음 성장 가능성이 큰 기업 다수 코스피보다 변동성이 큼 고수익 가능성 높고, 리스크도 높다. 쉽게 말하면, 한국의 성장주·벤처기업 시장
나스닥 (NASDAQ) &nbsp; 정식 명칭: National Association of Securities Dealers Automated Quotations
운영 거래소: NASDAQ 국가: 미국 개념 &nbsp; 미국 나스닥 시장에 상장된 기업들의 주가를 종합한 지수이다.
나스닥 특징 &nbsp; 애플, 마이크로소프트, 엔비디아 등 기술주 중심 글로벌 IT 기업 비중 매우 높음 기술주 경기에 매우 민감 전 세계 증시에 큰 영향 쉽게 말하면, 미국 기술주 중심 시장
한눈에 비교 &nbsp; 구분 코스피 코스닥 나스닥 국가 한국 한국 미국 기업 규모 대기업 중심 중소·벤처 글로벌 대형 기술주 변동성 중간 높음 중~높음 대표 성격 안정성 성장성 기술 혁신 투자 관점에서의 차이 &nbsp; 안정적 장기 투자 → 코스피 고성장 기대 투자 → 코스닥 글로벌 기술 트렌드 투자 → 나스닥`}).add({id:125,href:"/posts/call-option-put-option/",title:"콜옵션 풋옵션 뜻과 차이, 초보자가 이해하기 쉬운 옵션 기초",description:"콜옵션과 풋옵션의 뜻, 행사가격과 프리미엄 같은 기본 용어, 상승장과 하락장에서 옵션이 어떻게 이익과 손실을 만드는지 쉽게 정리했다.",content:`주식 공부를 하다 보면 콜옵션, 풋옵션이라는 말을 한 번쯤 듣게 된다. 뉴스에서는 경영권 분쟁, 임원 보상, 파생상품 투자, 커버드콜 ETF 같은 이야기와 함께 자주 나온다. 2024년에는 민희진 전 어도어 대표의 풋옵션 이슈가 알려지면서 &ldquo;풋옵션이 대체 뭐길래 1,000억 원대라는 말이 나오지?&ldquo;라고 궁금해한 사람도 많았다.
옵션은 말 그대로 &ldquo;권리&quot;다. 미래의 특정 시점에 어떤 자산을 미리 정한 가격으로 사거나 팔 수 있는 권리를 말한다. 주식뿐 아니라 채권, 금, 원유, 지수 같은 여러 자산이 옵션의 대상이 될 수 있다.
처음에는 어렵게 느껴지지만 핵심은 단순하다. 콜옵션은 살 수 있는 권리이고, 풋옵션은 팔 수 있는 권리다. 이 글에서는 콜옵션과 풋옵션의 차이, 꼭 알아야 할 옵션 용어, 실제 계산 예시, 초보자가 조심해야 할 점을 정리하였다.
옵션은 미래 가격을 미리 정해두는 권리다 &nbsp; 옵션은 특정 자산을 미래에 미리 정한 가격으로 거래할 수 있는 권리다. 여기서 중요한 단어는 &ldquo;권리&quot;다. 의무가 아니라 권리이기 때문에, 옵션을 산 사람은 상황이 불리하면 권리를 행사하지 않고 포기할 수 있다.
예를 들어 한 달 뒤 A주식을 100만 원에 살 수 있는 권리를 샀다고 해보자. 한 달 뒤 A주식이 120만 원이 되면 100만 원에 살 수 있으니 유리하다. 반대로 A주식이 90만 원이 되면 굳이 100만 원에 살 필요가 없다. 시장에서 90만 원에 사면 되기 때문이다.
이때 옵션을 사기 위해 낸 비용이 프리미엄이다. 권리를 포기하더라도 프리미엄은 돌려받지 못한다. 그래서 옵션 매수자의 손실은 보통 프리미엄으로 제한된다.
옵션에서 자주 쓰는 용어 &nbsp; 옵션을 이해하려면 몇 가지 용어를 먼저 잡아두는 것이 좋다.
기초자산: 옵션 거래의 대상이 되는 자산이다. 주식, 지수, 채권, 금, 원유 등이 될 수 있다. 행사가격: 옵션을 행사할 때 적용되는 미리 정한 가격이다. 프리미엄: 옵션을 사기 위해 내는 비용이다. 권리금처럼 이해하면 쉽다. 만기일: 옵션을 행사할 수 있는 마지막 날이다. 행사: 옵션으로 얻은 권리를 실제로 사용하는 것이다. 옵션은 가격이 오를 때만 쓰는 상품이 아니다. 콜옵션과 풋옵션의 방향이 다르기 때문에 상승을 예상할 때도, 하락을 예상할 때도 각각 다른 방식으로 활용된다.
콜옵션은 미리 정한 가격에 살 수 있는 권리다 &nbsp; 콜옵션(Call Option)은 특정 자산을 미리 정한 가격에 살 수 있는 권리다. 가격이 오를 것 같을 때 유리한 구조다. 나중에 시장 가격이 올라가도 행사가격으로 살 수 있기 때문이다.
아파트 분양권을 떠올리면 이해하기 쉽다. 분양가가 7억 원인 아파트를 살 수 있는 권리를 7,000만 원에 샀다고 해보자. 나중에 그 아파트의 시세가 9억 원으로 오르면, 나는 여전히 7억 원에 살 수 있다. 시세보다 싸게 살 수 있는 권리를 가진 셈이다.
주식 옵션도 비슷하다. A주식을 한 달 뒤 100만 원에 살 수 있는 콜옵션을 3만 원에 샀다고 가정해보자.
한 달 뒤 A주식 가격 결과 110만 원 100만 원에 살 수 있으므로 10만 원 이익, 프리미엄 3만 원을 빼면 순이익 7만 원 103만 원 10만 원이 아니라 3만 원 차익만 생기므로 프리미엄을 빼면 손익분기점 90만 원 권리를 행사하지 않고 포기, 손실은 프리미엄 3만 원 콜옵션 매수의 손익분기점은 행사가격에 프리미엄을 더한 가격이다. 위 예시에서는 100만 원에 3만 원을 더한 103만 원이다. 주가가 103만 원보다 높아져야 실제 이익이 생긴다.
콜옵션은 상승을 예상할 때 쓰인다 &nbsp; 콜옵션 매수자는 기초자산 가격이 오를수록 유리하다. 주가가 110만 원, 120만 원, 130만 원으로 올라가도 100만 원에 살 수 있는 권리를 갖고 있기 때문이다.
다만 콜옵션은 &ldquo;오르기만 하면 무조건 이익&quot;이 아니다. 프리미엄을 냈기 때문에 행사가격보다 조금 오르는 정도로는 부족하다. 행사가격과 프리미엄을 합친 가격보다 더 올라야 순이익이 난다.
풋옵션은 미리 정한 가격에 팔 수 있는 권리다 &nbsp; 풋옵션(Put Option)은 특정 자산을 미리 정한 가격에 팔 수 있는 권리다. 가격이 떨어질 것 같을 때 유리한 구조다. 나중에 시장 가격이 내려가도 행사가격으로 팔 수 있기 때문이다.
자동차 바이백 프로그램을 예로 들 수 있다. 소비자가 차를 샀는데 일정 기간 안에 실직하거나 소득이 줄면, 회사가 차를 원래 가격에 다시 사주는 제도가 있다고 해보자. 소비자 입장에서는 차 값을 방어할 수 있는 권리를 가진 셈이다. 이것은 풋옵션과 비슷한 구조다.
주식으로 보면 더 분명하다. A주식을 한 달 뒤 100만 원에 팔 수 있는 풋옵션을 3만 원에 샀다고 가정해보자.
한 달 뒤 A주식 가격 결과 90만 원 시장에서 90만 원에 사서 100만 원에 팔 수 있으므로 10만 원 이익, 프리미엄 3만 원을 빼면 순이익 7만 원 97만 원 3만 원 차익이 생기지만 프리미엄 3만 원을 빼면 손익분기점 110만 원 권리를 행사하지 않고 포기, 손실은 프리미엄 3만 원 풋옵션 매수의 손익분기점은 행사가격에서 프리미엄을 뺀 가격이다. 위 예시에서는 100만 원에서 3만 원을 뺀 97만 원이다. 주가가 97만 원보다 낮아져야 실제 이익이 생긴다.
풋옵션은 하락을 예상하거나 위험을 줄일 때 쓰인다 &nbsp; 풋옵션은 하락장에서 수익을 기대할 때도 쓰이지만, 보유 주식의 손실을 줄이는 보험처럼 활용되기도 한다. 예를 들어 보유한 주식이 단기적으로 흔들릴 것 같지만 팔고 싶지는 않을 때 풋옵션을 활용해 하락 위험을 일부 방어하는 식이다.
물론 보험료가 공짜가 아니듯 풋옵션에도 프리미엄이 든다. 주가가 예상과 다르게 오르면 풋옵션은 행사하지 않고 끝날 수 있고, 이때 프리미엄은 비용으로 남는다.
콜옵션과 풋옵션의 차이는 방향과 손익 구조다 &nbsp; 콜옵션과 풋옵션의 가장 큰 차이는 가격 방향에 대한 기대다. 콜옵션 매수자는 가격 상승을 기대하고, 풋옵션 매수자는 가격 하락을 기대한다.
간단히 정리하면 다음과 같다.
구분 콜옵션 풋옵션 뜻 미리 정한 가격에 살 수 있는 권리 미리 정한 가격에 팔 수 있는 권리 유리한 상황 기초자산 가격 상승 기초자산 가격 하락 매수자의 최대 손실 프리미엄 프리미엄 손익분기점 행사가격 + 프리미엄 행사가격 - 프리미엄 쉬운 비유 분양권, 예약 구매 권리 가격 보장, 보험 성격의 매도 권리 여기까지는 옵션을 &ldquo;사는 사람&rdquo; 기준이다. 옵션은 살 수도 있고 팔 수도 있다. 옵션을 파는 사람은 프리미엄을 받는 대신, 상대방이 권리를 행사하면 그 거래를 받아줘야 한다.
초보자가 특히 조심해야 할 부분이 바로 옵션 매도다. 옵션 매수자는 손실이 프리미엄으로 제한되는 경우가 많지만, 옵션 매도자는 시장이 크게 움직이면 손실이 커질 수 있다. 그래서 옵션은 단순히 &ldquo;적은 돈으로 크게 벌 수 있는 상품&quot;이 아니라, 구조를 제대로 이해해야 하는 파생상품으로 봐야 한다.
초보자는 옵션을 투자 상품보다 구조 이해로 먼저 봐야 한다 &nbsp; 옵션은 주식시장 곳곳에 들어가 있다. 커버드콜 ETF, ELS, 임직원 스톡옵션, 경영권 계약의 풋옵션, 원자재 헤지 거래 등 여러 금융상품과 계약에서 옵션 구조가 활용된다.
하지만 개인 투자자가 옵션을 직접 거래하는 것은 난도가 높다. 만기일이 있고, 프리미엄이 계속 변하고, 기초자산 가격뿐 아니라 변동성, 시간 가치, 금리 같은 요소도 가격에 영향을 준다. 방향을 맞혔는데도 기대만큼 수익이 나지 않는 경우가 생길 수 있다.
그래서 초보자는 먼저 옵션의 기본 구조를 이해하는 데 집중하는 것이 좋다.
콜옵션은 살 권리다. 풋옵션은 팔 권리다. 옵션 매수자는 권리를 얻는 대신 프리미엄을 낸다. 권리를 행사하지 않으면 프리미엄은 손실이 된다. 옵션은 만기일이 지나면 권리가 사라진다. 이 정도만 정확히 알아도 뉴스나 금융상품 설명을 읽을 때 훨씬 덜 헷갈린다. 특히 커버드콜 ETF처럼 옵션 전략이 포함된 상품을 볼 때 &ldquo;왜 배당처럼 분배금이 나오지?&rdquo;, &ldquo;왜 주가가 급등할 때 수익이 제한될 수 있지?&rdquo; 같은 질문을 이해하는 출발점이 된다.
정리 &nbsp; 콜옵션과 풋옵션은 어렵게 포장되어 있지만 출발점은 단순하다. 콜옵션은 정해진 가격에 살 수 있는 권리이고, 풋옵션은 정해진 가격에 팔 수 있는 권리다.
콜옵션은 가격 상승을 예상할 때 유리하고, 풋옵션은 가격 하락을 예상할 때 유리하다. 옵션을 사는 사람은 프리미엄을 내고 권리를 얻으며, 상황이 불리하면 권리를 포기할 수 있다. 대신 프리미엄은 비용으로 확정된다.
옵션은 수익을 키우는 도구가 될 수도 있지만, 위험을 관리하는 도구이기도 하다. 직접 거래를 시작하기 전에 행사가격, 프리미엄, 만기일, 손익분기점부터 계산해보는 습관을 들이는 것이 좋다.
자주 묻는 질문 &nbsp; 콜옵션과 풋옵션의 가장 쉬운 차이는 무엇인가? &nbsp; 콜옵션은 살 수 있는 권리이고, 풋옵션은 팔 수 있는 권리다. 콜옵션은 가격이 오를 때 유리하고, 풋옵션은 가격이 내릴 때 유리하다.
옵션을 사면 손실이 프리미엄으로만 제한되나? &nbsp; 일반적인 옵션 매수에서는 권리를 행사하지 않고 포기할 수 있기 때문에 손실이 프리미엄으로 제한된다. 다만 실제 파생상품 거래는 상품 구조, 거래 방식, 증거금 조건에 따라 위험이 달라질 수 있으므로 거래 전 구조를 반드시 확인해야 한다.
콜옵션과 풋옵션은 초보자가 직접 투자해도 괜찮나? &nbsp; 옵션은 만기, 변동성, 시간 가치가 얽힌 파생상품이라 초보자가 바로 직접 거래하기에는 어렵다. 먼저 구조와 손익 계산을 이해하고, 옵션 전략이 들어간 금융상품을 볼 때 설명서를 읽는 용도로 접근하는 것이 현실적이다.`}).add({id:126,href:"/posts/land-transaction-permit-system/",title:"토지거래허가제란? 실거주 의무와 계약 전 체크 포인트 ...",description:"토지거래허가제가 무엇인지, 허가 대상과 실거주 의무, 허가 없는 계약의 효력, 계약 전 확인해야 할 서류와 위반 시 제재를 쉽게 정리했다.",content:`부동산 뉴스를 보다 보면 &ldquo;토지거래허가구역&rdquo;, &ldquo;토허제&rdquo;, &ldquo;실거주 2년&rdquo; 같은 말이 자주 나온다. 이름만 보면 땅을 사고팔 때만 해당되는 제도처럼 느껴지지만, 실제로는 아파트 매매에도 영향을 줄 수 있다. 특히 서울 전역이나 경기 일부 지역처럼 아파트가 토지거래허가구역으로 지정된 곳에서는 일반적인 매매계약처럼 생각하고 접근하면 낭패를 볼 수 있다.
토지거래허가제의 핵심은 간단하다. 정해진 구역 안에서 일정 면적을 넘는 부동산을 거래하려면 계약 당사자가 관할 관청의 허가를 받아야 한다 는 제도다. 투기 목적 거래를 줄이고, 실제로 거주하거나 이용하려는 사람 중심으로 거래가 이루어지게 하려는 장치다.
이 글에서는 토지거래허가제가 무엇인지, 어떤 거래가 허가 대상인지, 실거주 의무가 왜 중요한지, 허가 없이 계약하면 어떤 문제가 생기는지 정리하였다.
토지거래허가제란 무엇인가 &nbsp; 토지거래허가제는 토지거래허가구역 안에서 일정 규모 이상의 토지에 관한 권리를 이전하거나 설정할 때 관할 시장, 군수, 구청장의 허가를 받도록 한 제도다. 여기서 말하는 권리에는 소유권뿐 아니라 지상권도 포함된다. 매매계약뿐 아니라 예약, 허가받은 사항의 변경도 문제가 될 수 있다.
&ldquo;토지&quot;라는 말 때문에 아파트와 상관없다고 생각하기 쉽지만 그렇지 않다. 아파트를 사면 건물만 사는 것이 아니라 그 아파트가 서 있는 땅의 지분, 즉 대지권도 함께 취득한다. 그래서 지정 내용에 따라 아파트, 같은 단지 안에 아파트가 포함된 연립·다세대주택, 재건축·재개발 입주권, 아파트 분양권 거래도 허가 대상에 들어갈 수 있다.
2025년 10월 20일부터는 서울 25개 자치구와 경기 12개 지역의 아파트 등이 토지거래허가구역으로 지정되었고, 지정 기간은 2026년 12월 31일까지로 공고되었다. 경기 12개 지역은 과천시, 광명시, 의왕시, 하남시, 수원시 영통구·장안구·팔달구, 성남시 분당구·수정구·중원구, 안양시 동안구, 용인시 수지구다.
다만 토지거래허가구역은 지역별, 대상별, 기간별로 달라질 수 있다. 같은 서울 안에서도 기존 정비사업 구역, 자연녹지지역, 별도 지정 구역이 겹칠 수 있으니 계약 전에는 반드시 해당 구청 공고와 중개대상물 확인설명서를 같이 확인해야 한다.
정부24에서 토지거래계약허가 민원 확인 &nbsp; 허가 대상인지 확인하는 방법 &nbsp; 토지거래허가구역이라고 해서 모든 거래가 무조건 허가 대상이 되는 것은 아니다. 보통은 구역, 용도지역, 거래 면적, 거래 대상이 함께 맞아야 한다.
최근 서울 전역과 경기 12개 지역의 아파트 지정 사례에서는 허가를 받아야 하는 토지면적 기준이 다음처럼 공고되었다.
용도지역 허가 기준 면적 주거지역 6㎡ 초과 상업지역 15㎡ 초과 공업지역 15㎡ 초과 녹지지역 20㎡ 초과 용도 미지정 지역 6㎡ 초과 여기서 중요한 점은 면적 기준이 아파트 전용면적이 아니라 토지의 대지지분 기준이라는 점이다. 예를 들어 전용면적 84㎡ 아파트라고 해서 84㎡를 기준으로 판단하는 것이 아니다. 등기부등본 표제부의 &ldquo;대지권의 표시&quot;를 보고 내 집에 배정된 토지 지분이 허가 기준을 넘는지 확인해야 한다.
같은 단지 안에서도 평형, 동, 위치에 따라 대지지분이 다를 수 있다. 특히 상업지역 안의 주상복합은 대지지분이 상대적으로 작을 수 있어 단순히 &ldquo;아파트니까 무조건 허가 대상&rdquo; 또는 &ldquo;소형이라 괜찮다&quot;라고 단정하면 안 된다.
허가가 필요 없는 경우도 있다. 대표적으로 대가 없이 이루어지는 상속이나 일반적인 증여, 민사집행법에 따른 경매 취득은 보통 허가 대상에서 제외된다. 다만 증여라고 적혀 있어도 수증자가 대출, 임대차보증금 반환채무 같은 부담을 떠안는 부담부증여라면 사실상 대가가 있는 거래로 볼 수 있어 허가가 필요할 수 있다.
계약 전에는 최소한 아래 항목을 확인하는 것이 좋다.
해당 부동산이 토지거래허가구역 안에 있는지 지정 대상이 아파트인지, 연립·다세대까지 포함되는지 등기부등본상 대지지분이 기준 면적을 넘는지 매수 목적이 실제 거주 또는 실제 이용 요건에 맞는지 기존 임차인이 있다면 입주 시점과 실거주 유예 가능성이 있는지 실거주 의무가 핵심이다 &nbsp; 토지거래허가구역에서 주거용 부동산을 매수할 때 가장 크게 달라지는 점은 실거주 의무다. 단순히 허가만 받으면 끝나는 것이 아니라, 허가받은 목적대로 실제로 이용해야 한다.
주거용으로 허가를 받아 아파트를 취득했다면 원칙적으로 취득일부터 2년 동안 본인이 실제로 거주해야 한다. 이 기간에는 전세나 월세를 놓는 방식의 갭투자가 어렵다. &ldquo;일단 사두고 세입자에게 계속 임대하다가 나중에 들어가야지&quot;라는 계획은 허가 단계에서 문제가 될 수 있다.
실거주 의무는 주민등록만 옮겨두는 것으로 끝나지 않는다. 관할 관청은 필요하면 실제 거주 여부를 확인할 수 있고, 허가받은 이용 목적과 다르게 사용하면 이행명령, 이행강제금, 허가 취소 같은 제재가 생길 수 있다.
다만 세입자가 이미 살고 있는 주택은 현실적으로 즉시 입주가 어려운 경우가 있다. 2026년 5월 12일 국토교통부는 토지거래허가구역 안에서 임대 중이거나 전세권이 설정된 주택을 거래할 때 매수자의 입주 유예 대상을 &ldquo;세입자 있는 주택 전체&quot;로 확대하는 내용의 시행령 개정을 추진한다고 밝혔다. 이 내용은 2026년 말 신청분까지 한시적으로 운영하는 방향으로 발표되었으므로, 실제 계약 단계에서는 입법예고와 시행 여부를 다시 확인해야 한다.
토지거래허가구역 실거주 유예 발표 확인 &nbsp; 허가 없는 계약은 어떻게 될까 &nbsp; 토지거래허가구역 안에서 허가 대상 거래를 하려면 계약 당사자가 공동으로 허가를 신청해야 한다. 신청할 때는 토지거래계약 허가 신청서, 토지이용계획서, 토지취득자금조달계획서 등을 준비한다. 정부24 안내 기준으로 처리기간은 총 15일이며, 수수료는 없다.
문제는 허가를 받기 전에 계약서를 먼저 쓰는 경우다. 토지거래허가구역 안의 허가 대상 매매계약은 허가를 받기 전에는 완전히 유효한 계약으로 보기 어렵다. 법률적으로는 흔히 유동적 무효 라고 설명한다.
유동적 무효란 지금은 효력이 불안정하지만, 나중에 허가를 받으면 처음부터 유효했던 것처럼 효력이 살아나는 상태를 말한다. 반대로 허가가 거부되거나 끝내 허가를 받을 수 없게 되면 계약은 확정적으로 무효가 된다.
예를 들어 매수인과 매도인이 허가구역 안의 아파트를 매매하기로 하고 계약금을 주고받았다고 하자. 이후 관할 구청에서 토지거래허가가 나오면 계약은 유효하게 진행된다. 하지만 허가가 거부되면 계약은 확정적으로 무효가 되고, 이미 지급한 계약금이나 중도금은 부당이득 반환 문제로 정리해야 한다.
애초에 허가 요건을 피하려는 목적으로 계약 형태를 꾸미는 것은 더 위험하다. 실제로는 매매인데 증여처럼 꾸미거나, 실거주할 의사가 없는데 거주할 것처럼 허위 계획을 제출하는 식은 강행규정을 피하려는 행위로 볼 수 있다. 이런 경우에는 계약 효력 문제뿐 아니라 형사처벌이나 행정 제재까지 이어질 수 있다.
계약 전 체크 포인트 &nbsp; 토지거래허가구역에서 집을 살 때는 일반 매매보다 확인할 것이 많다. 특히 매수자는 &ldquo;내가 이 집에 실제로 들어가 살 수 있는가&quot;를 가장 먼저 따져야 한다. 대출 가능 여부나 세금만 확인하고 실거주 요건을 놓치면 계약 자체가 흔들릴 수 있다.
1. 등기부등본에서 대지지분 확인 &nbsp; 허가 기준 면적은 전용면적이 아니라 대지지분 기준이다. 등기부등본 표제부에서 대지권의 표시를 확인하고, 용도지역별 기준 면적을 넘는지 본다. 판단이 애매하면 구청 부동산 관련 부서나 중개사에게 공고문 기준으로 다시 확인하는 것이 좋다.
2. 자금조달계획과 입주계획 정리 &nbsp; 토지거래허가 신청에는 토지취득자금조달계획서가 들어간다. 규제지역 주택 거래라면 자금조달계획서와 증빙자료 제출도 함께 문제될 수 있다. 매매대금 출처, 대출 계획, 기존 보증금 승계 여부, 입주 예정일을 계약 전에 숫자로 정리해두어야 한다.
3. 세입자 있는 집은 입주 가능일 확인 &nbsp; 이미 임대차계약이 있는 집이라면 세입자의 계약 만료일, 갱신요구권 행사 여부, 전세권 설정 여부를 확인해야 한다. 실거주 유예 제도가 적용될 수 있는지, 유예가 된다면 언제까지 입주해야 하는지 관할 관청 기준으로 확인하는 것이 안전하다.
4. 계약서에 허가 협력 의무를 분명히 적기 &nbsp; 허가 신청은 거래 당사자가 공동으로 진행하는 것이 원칙이다. 따라서 매도인이나 매수인 한쪽이 협조하지 않으면 거래가 지연될 수 있다. 계약서에는 토지거래허가 신청에 필요한 서류 제출, 공동 신청, 불허가 시 처리, 협력의무 위반 시 손해배상 약정 등을 명확히 적어두는 편이 좋다.
5. 허가 전 잔금 지급은 신중하게 보기 &nbsp; 허가를 받지 못하면 계약이 확정적으로 무효가 될 수 있다. 그래서 허가 대상 거래에서는 계약금, 중도금, 잔금 지급 시점과 허가 완료 시점을 맞춰 설계해야 한다. 특히 잔금과 등기 일정은 허가 여부가 확인된 뒤 진행하는 구조가 안전하다.
위반하면 어떤 제재가 있을까 &nbsp; 허가 없이 계약하거나 부정한 방법으로 허가를 받으면 가볍게 넘어가기 어렵다. 허가 없는 계약은 효력 자체가 문제가 되고, 부정한 방법으로 허가를 받은 경우에는 처벌 대상이 될 수 있다. 부동산 거래신고 등에 관한 법률에는 허가 없이 계약을 체결하거나 거짓·부정한 방법으로 허가를 받은 경우 2년 이하의 징역 또는 해당 토지가격의 30% 이하 벌금에 처할 수 있다는 규정이 있다.
허가를 받은 뒤에도 끝이 아니다. 허가받은 목적대로 토지를 이용하지 않거나, 주거용으로 허가받고 실제 거주하지 않으면 이행명령이나 이행강제금이 부과될 수 있다. 경우에 따라 허가 취소 문제가 생길 수도 있다.
실무적으로는 처벌보다 계약 자체가 꼬이는 것이 더 큰 문제로 다가온다. 매수자는 대출 실행, 잔금 지급, 전입 일정이 흔들릴 수 있고, 매도자는 매매대금을 제때 받지 못할 수 있다. 그래서 토지거래허가구역에서는 &ldquo;계약하고 나서 알아보자&quot;보다 &ldquo;허가 가능성을 확인하고 계약하자&quot;가 맞다.
핵심 정리 &nbsp; 토지거래허가제는 부동산 거래를 막기 위한 제도라기보다, 허가구역 안의 거래를 실수요 중심으로 관리하기 위한 제도다. 하지만 실제 계약에서는 영향이 꽤 크다. 허가 대상인지, 실거주가 가능한지, 대지지분이 기준 면적을 넘는지, 세입자가 있다면 입주 시점이 맞는지까지 확인해야 한다.
특히 아파트 매매에서는 &ldquo;토지&quot;라는 단어에 속으면 안 된다. 아파트도 대지권이 있고, 지정 공고에서 아파트를 허가 대상으로 정했다면 토지거래허가를 받아야 할 수 있다. 계약 전 등기부등본, 지정 공고문, 입주계획, 자금조달계획을 한 번에 점검하는 습관이 필요하다.
정리하면 다음과 같다.
토지거래허가구역 안의 허가 대상 거래는 관할 관청 허가가 필요하다. 아파트도 대지지분이 있어 토지거래허가 대상이 될 수 있다. 주거용으로 허가받으면 원칙적으로 취득일부터 2년간 실제 거주해야 한다. 허가 전 계약은 유동적 무효 상태이고, 허가가 거부되면 확정적으로 무효가 될 수 있다. 부담부증여, 허위 거주계획, 허가 회피 목적의 계약은 특히 위험하다. 자주 묻는 질문 &nbsp; 토지거래허가구역이면 모든 아파트를 허가받아야 하나? &nbsp; 무조건은 아니다. 지정 공고에서 어떤 지역과 어떤 부동산을 대상으로 삼았는지, 대지지분이 허가 기준 면적을 넘는지 확인해야 한다. 다만 서울 전역과 경기 12개 지역의 아파트 지정처럼 기준 면적이 매우 낮게 공고된 경우에는 대부분의 아파트 거래가 허가 대상이 될 수 있다.
허가구역 안의 집을 사서 전세를 놓을 수 있나? &nbsp; 주거용으로 허가를 받아 취득했다면 원칙적으로 본인이 실제로 거주해야 한다. 일반적인 갭투자처럼 매수 후 바로 전세나 월세를 놓는 방식은 허가 목적에 맞지 않을 수 있다. 세입자가 이미 있는 주택은 입주 유예 제도 적용 여부를 관할 관청에 확인해야 한다.
허가를 못 받으면 계약금은 어떻게 되나? &nbsp; 허가가 거부되어 계약이 확정적으로 무효가 되면 이미 지급한 계약금이나 중도금은 부당이득 반환 문제로 정리될 수 있다. 다만 계약서 문구, 귀책사유, 허가 신청 협력 여부에 따라 분쟁이 달라질 수 있으므로 허가 대상 거래는 계약서에 불허가 시 처리 방법을 미리 적어두는 것이 좋다.`}).add({id:127,href:"/posts/retirement-pension-db-dc/",title:"퇴직연금 DB형 DC형 차이, 계산 방식과 선택 기준 ...",description:"퇴직연금 DB형과 DC형의 차이, 퇴직급여 계산 방식, 운용 주체, 장단점, 어떤 상황에서 유리한지 초보자도 이해하기 쉽게 정리했다.",content:`퇴직연금은 회사 생활을 하는 사람이라면 언젠가 꼭 마주치는 돈이다. 그런데 막상 퇴직연금 안내문을 보면 DB형, DC형, IRP, 디폴트옵션 같은 단어가 한꺼번에 나온다. 이름만 보면 비슷해 보이지만 실제로는 누가 운용하고, 누가 책임지고, 퇴직할 때 얼마를 받을 수 있는지가 꽤 다르다.
퇴직연금 DB형과 DC형을 구분하는 핵심은 간단하다. DB형은 회사가 운용하고 근로자는 정해진 계산식에 따라 퇴직급여를 받는 방식이다. DC형은 회사가 매년 일정 금액을 넣어주고, 근로자가 직접 운용한 결과에 따라 퇴직급여가 달라지는 방식이다.
이 차이를 모르면 내 퇴직연금이 어떤 구조인지도 모른 채 몇 년을 지나칠 수 있다. 특히 임금이 꾸준히 오르는 사람, 임금피크제가 가까운 사람, 투자 경험이 있는 사람은 DB형과 DC형의 유불리가 달라질 수 있다. 이 글에서는 퇴직연금 DB형과 DC형의 차이를 초보자 기준으로 정리하였다.
퇴직연금이란 무엇인가? &nbsp; 퇴직연금은 근로자의 퇴직급여를 회사가 외부 금융기관에 적립해두고, 근로자가 퇴직할 때 연금이나 일시금으로 받을 수 있게 만든 제도다. 쉽게 말하면 퇴직금을 회사 금고 안에만 두지 않고, 은행이나 증권사 같은 금융기관을 통해 따로 관리하는 구조다.
예전에는 회사가 퇴직금을 내부에 쌓아두었다가 직원이 그만둘 때 한꺼번에 지급하는 방식이 일반적이었다. 하지만 회사 사정이 나빠지면 퇴직금이 밀리거나 제대로 지급되지 않을 위험이 있었다. 퇴직연금은 이런 위험을 줄이기 위해 퇴직급여를 외부에 적립하게 한 제도라고 이해하면 된다.
퇴직연금은 크게 DB형, DC형, IRP로 나뉜다. 이 글에서 다루는 DB형과 DC형은 회사가 운영하는 퇴직연금 제도이고, IRP는 개인이 퇴직금이나 추가 납입금을 넣어 운용할 수 있는 개인형 퇴직연금이다.
DB형은 회사가 운용하고 금액은 계산식으로 정해진다 &nbsp; DB형은 Defined Benefit의 줄임말이고, 우리말로는 확정급여형이라고 부른다. 이름 그대로 퇴직할 때 받을 급여의 계산 방식이 미리 정해져 있는 퇴직연금이다.
DB형의 가장 큰 특징은 운용 책임이 회사에 있다는 점이다. 회사가 금융기관에 적립한 퇴직연금 자산을 운용하고, 운용 결과가 좋든 나쁘든 근로자가 받을 퇴직급여는 정해진 방식에 따라 계산된다.
일반적으로 DB형 퇴직급여는 다음과 같은 구조로 이해할 수 있다.
구분 내용 운용 주체 회사 운용 결과 책임 회사 근로자 수령액 퇴직 전 평균임금과 근속연수에 따라 계산 투자 손실 영향 근로자에게 직접 반영되지 않음 쉽게 예를 들어보자. 회사가 퇴직연금 자산을 운용해서 수익을 많이 냈다고 해서 근로자의 퇴직금이 그만큼 더 늘어나는 구조는 아니다. 반대로 운용 성과가 나빠졌다고 해서 근로자의 퇴직급여가 바로 줄어드는 구조도 아니다. 근로자는 퇴직 직전 평균임금과 근속연수에 따라 계산된 금액을 받는다.
그래서 DB형은 임금이 계속 오를 가능성이 큰 사람에게 유리할 수 있다. 퇴직급여 계산에 퇴직 직전 임금 수준이 중요하게 반영되기 때문이다. 승진 가능성이 남아 있고, 회사의 임금 인상률이 괜찮고, 투자에 직접 신경 쓰고 싶지 않다면 DB형이 편한 선택일 수 있다.
DC형은 내가 직접 운용하고 결과도 내 몫이다 &nbsp; DC형은 Defined Contribution의 줄임말이고, 우리말로는 확정기여형이라고 부른다. 회사가 매년 근로자 퇴직연금 계좌에 일정 금액을 넣어주고, 그 돈을 근로자가 직접 운용하는 방식이다.
DC형에서는 회사가 해야 할 중요한 역할이 &ldquo;매년 정해진 부담금을 납입하는 것&quot;이다. 그 이후 어떤 상품에 투자할지, 예금으로 둘지, 펀드나 ETF 성격의 상품으로 운용할지는 근로자가 선택한다.
DC형의 구조는 다음처럼 정리할 수 있다.
구분 내용 운용 주체 근로자 운용 결과 책임 근로자 근로자 수령액 회사 납입금과 운용 손익에 따라 달라짐 투자 손실 영향 근로자 퇴직급여에 반영될 수 있음 예를 들어 회사가 매년 내 DC형 계좌에 퇴직급여 부담금을 넣어주고, 내가 그 돈을 예금으로만 운용하면 비교적 안정적으로 이자를 받을 수 있다. 반대로 주식형 펀드나 TDF 같은 상품에 투자하면 장기 수익률을 기대할 수 있지만, 시장 상황에 따라 손실이 날 수도 있다.
DC형은 투자 성과에 따라 퇴직급여가 늘어날 수 있다는 장점이 있다. 하지만 &ldquo;퇴직연금이니까 알아서 안전하겠지&quot;라고 생각하고 방치하면 기대보다 낮은 수익률에 머물 수 있다. DC형은 직접 운용하는 제도이기 때문에 적어도 1년에 한 번은 상품 구성과 수익률을 확인하는 습관이 필요하다.
DB형과 DC형 차이를 한눈에 비교하기 &nbsp; DB형과 DC형의 차이는 &ldquo;누가 운용하느냐&quot;에서 시작한다. DB형은 회사가 운용하고, DC형은 근로자가 운용한다. 이 차이 때문에 퇴직급여가 정해지는 방식도 달라진다.
항목 DB형 DC형 정식 명칭 확정급여형 확정기여형 운용 주체 회사 근로자 퇴직급여 결정 기준 평균임금과 근속연수 회사 납입금과 운용 성과 투자 수익의 효과 회사 부담 완화에 주로 반영 근로자 퇴직급여 증가 가능 투자 손실의 효과 근로자 수령액에 직접 영향 적음 근로자 퇴직급여 감소 가능 잘 맞는 사람 임금 상승 기대가 큰 사람 직접 운용하고 싶은 사람 DB형은 퇴직금 계산식이 비교적 익숙하다. &ldquo;퇴직 직전 임금이 높을수록 유리하다&quot;는 느낌에 가깝다. 그래서 근속연수가 길어질수록 임금이 꾸준히 오르는 구조라면 DB형의 장점이 커질 수 있다.
DC형은 투자 계좌에 가깝다. 회사가 넣어준 돈을 내가 어떻게 굴렸는지에 따라 결과가 달라진다. 임금 상승률이 낮거나, 앞으로 임금이 줄어들 가능성이 있거나, 장기적으로 퇴직연금 자산을 직접 운용하고 싶다면 DC형을 검토할 만하다.
어떤 사람에게 DB형이 유리할까? &nbsp; DB형은 안정성과 예측 가능성을 중요하게 보는 사람에게 잘 맞는다. 운용을 회사가 맡기 때문에 근로자가 매번 상품을 고르고 수익률을 관리해야 하는 부담이 상대적으로 적다.
특히 다음 상황이라면 DB형이 유리할 가능성이 있다.
앞으로 승진이나 호봉 상승으로 임금이 계속 오를 가능성이 크다. 회사의 임금 인상률이 비교적 안정적이다. 투자 상품을 직접 고르는 것이 부담스럽다. 퇴직급여가 시장 상황에 따라 줄어드는 것을 원하지 않는다. 예를 들어 입사한 지 오래되지 않았고 앞으로 직급 상승 기회가 많이 남아 있다면, 퇴직 직전 평균임금이 현재보다 높아질 가능성이 있다. 이런 경우 DB형은 임금 상승의 효과를 퇴직급여 계산에 반영받을 수 있어 장점이 있다.
다만 DB형이라고 해서 완전히 신경 쓰지 않아도 된다는 뜻은 아니다. 내 회사가 어떤 퇴직연금 제도를 운영하는지, 퇴직급여 계산 방식은 어떻게 되는지, 중간정산이나 전환 조건은 어떤지 정도는 확인해두는 것이 좋다.
어떤 사람에게 DC형이 유리할까? &nbsp; DC형은 퇴직연금을 직접 운용하고 싶은 사람에게 맞는다. 회사가 매년 납입한 돈을 근로자가 관리하기 때문에, 투자 지식과 관리 습관이 있다면 장기적으로 더 나은 결과를 기대할 수 있다.
다음 상황이라면 DC형을 검토해볼 수 있다.
임금 상승률이 높지 않거나 앞으로 임금이 정체될 가능성이 있다. 임금피크제 등으로 장래 임금 감소가 예상된다. 퇴직연금 상품을 직접 선택하고 관리할 의지가 있다. 장기 투자 관점에서 일정 수준의 변동성을 감당할 수 있다. 특히 임금피크제를 앞둔 경우에는 DB형과 DC형의 차이가 중요해진다. DB형은 퇴직 직전 평균임금이 계산에 영향을 주기 때문에, 임금이 줄어든 뒤 퇴직하면 예상보다 퇴직급여가 낮아질 수 있다. 이런 상황에서는 회사 제도와 전환 가능 여부를 확인하고, 필요하면 전문가 상담을 받아보는 것이 좋다.
다만 DC형은 수익률만 보고 선택하면 위험하다. 퇴직연금은 노후 자금이기 때문에 한두 해 수익률보다 장기간 유지할 수 있는 운용 방식이 더 중요하다. 투자 경험이 적다면 예금, TDF, 채권형, 혼합형 등 상품 성격을 천천히 익히면서 비중을 조절하는 접근이 현실적이다.
DC형을 방치하면 디폴트옵션이 중요해진다 &nbsp; DC형은 근로자가 직접 운용하는 제도라서 &ldquo;아무것도 안 하는 것&quot;도 하나의 선택이 되어버릴 수 있다. 문제는 퇴직연금 계좌에 돈이 들어와도 상품을 고르지 않거나, 기존 상품이 만기 된 뒤 그대로 두면 장기 수익률이 낮아질 수 있다는 점이다.
이때 등장하는 제도가 디폴트옵션이다. 디폴트옵션은 DC형이나 IRP 가입자가 별도 운용 지시를 하지 않았을 때, 미리 정해둔 상품으로 퇴직연금이 자동 운용되도록 하는 제도다.
디폴트옵션은 방치를 줄이는 데 도움이 되지만, 만능 장치는 아니다. 초저위험, 저위험, 중위험, 고위험처럼 위험등급이 나뉘고, 상품 구성도 금융회사마다 다르다. 따라서 DC형을 선택했다면 디폴트옵션까지 함께 확인해야 한다.
핵심은 &ldquo;자동으로 굴러가니까 괜찮다&quot;가 아니라 &ldquo;내가 미리 정한 기본 운용 방식으로 넘어간다&quot;는 점이다. 기본값도 결국 내가 선택한 투자 판단에 가깝다.
DB형에서 DC형으로 바꿀 때 주의할 점 &nbsp; 회사에 따라 DB형에서 DC형으로 전환할 수 있는 경우가 있다. 하지만 전환은 단순히 &ldquo;DC형이 수익률이 더 높다더라&quot;라는 이유만으로 결정할 문제가 아니다.
먼저 전환 가능 여부와 조건을 회사에 확인해야 한다. 회사마다 퇴직연금 규약이 다르고, 전환 시점이나 절차가 다를 수 있다. 또한 한 번 DC형으로 전환하면 다시 DB형으로 돌아가기 어려운 경우도 있으므로 신중해야 한다.
둘째, 내 임금 흐름을 봐야 한다. 앞으로 임금 상승이 기대된다면 DB형이 더 유리할 수 있고, 임금 정체나 감소가 예상된다면 DC형이 유리할 수 있다.
셋째, 투자 성향을 봐야 한다. DC형은 운용 결과가 내 퇴직급여에 반영된다. 손실 구간에서 버티지 못하고 계속 상품을 바꾸면 오히려 결과가 나빠질 수 있다. 퇴직연금은 오래 가져가는 돈이므로 단기 수익률보다 일관된 운용 원칙이 중요하다.
넷째, 세금과 수령 방식도 같이 봐야 한다. 퇴직급여를 일시금으로 받을지, 연금으로 받을지에 따라 세금 부담과 현금흐름이 달라질 수 있다. DB형과 DC형의 선택은 운용 방식의 문제이지만, 결국 퇴직 후 돈을 어떻게 받을지와도 연결된다.
정리 &nbsp; 퇴직연금 DB형과 DC형의 핵심 차이는 운용 주체와 책임이다. DB형은 회사가 운용하고 근로자는 정해진 계산식에 따라 퇴직급여를 받는다. DC형은 회사가 납입한 돈을 근로자가 직접 운용하고, 그 결과가 퇴직급여에 반영된다.
임금이 꾸준히 오를 가능성이 크고 투자 관리가 부담스럽다면 DB형이 편할 수 있다. 반대로 임금 상승률이 낮거나 임금피크제처럼 장래 임금 감소가 예상되고, 퇴직연금을 직접 관리할 의지가 있다면 DC형을 검토해볼 만하다.
가장 중요한 것은 내 퇴직연금이 지금 어떤 유형인지 확인하는 것이다. 회사 인사팀이나 퇴직연금 금융회사 앱에서 DB형인지 DC형인지, 운용 상품은 무엇인지, 디폴트옵션은 설정되어 있는지부터 확인해보자. 퇴직연금은 먼 미래의 돈처럼 보이지만, 지금의 선택과 방치가 나중의 노후 자금 차이로 이어질 수 있다.
자주 묻는 질문 &nbsp; DB형과 DC형 중 무조건 더 좋은 제도가 있나? &nbsp; 무조건 더 좋은 제도는 없다. DB형은 임금 상승과 안정성을 중요하게 볼 때 유리할 수 있고, DC형은 직접 운용을 통해 장기 수익률을 높이고 싶은 사람에게 맞을 수 있다. 내 임금 흐름, 퇴직까지 남은 기간, 투자 성향을 같이 봐야 한다.
DB형은 투자 손실이 나도 내 퇴직금이 줄지 않나? &nbsp; 일반적으로 DB형은 회사가 운용 책임을 지고, 근로자의 퇴직급여는 정해진 계산 방식에 따라 산정된다. 그래서 운용 손실이 근로자의 퇴직급여에 직접 반영되는 구조는 아니다. 다만 구체적인 제도 운영은 회사 규약을 확인해야 한다.
DC형은 예금으로만 운용해도 되나? &nbsp; 가능하다. 안정성을 중시한다면 예금이나 원리금보장 상품 중심으로 운용할 수 있다. 다만 퇴직까지 시간이 많이 남았다면 물가 상승과 장기 수익률도 함께 고려해야 한다.
DC형을 선택했는데 운용을 안 하면 어떻게 되나? &nbsp; 운용 지시를 하지 않으면 돈이 낮은 금리 상품이나 대기성 자금에 머물 수 있다. 이를 줄이기 위해 디폴트옵션 제도가 적용될 수 있으며, 가입자가 미리 정한 기본 운용 상품으로 자동 운용될 수 있다.
DB형에서 DC형으로 바꾸는 것이 좋을까? &nbsp; 임금피크제, 임금 정체, 투자 성향, 퇴직까지 남은 기간에 따라 다르다. 한 번 전환하면 되돌리기 어려운 경우도 있으므로 회사 퇴직연금 규약과 금융회사 안내를 확인한 뒤 결정하는 것이 좋다.`}).add({id:128,href:"/posts/retirement-pension-default-option/",title:"퇴직연금 디폴트옵션 뜻과 선택 방법, DC형 IRP 가...",description:"퇴직연금 디폴트옵션의 뜻, 적용 대상, 발동 방식, 위험등급별 포트폴리오와 TDF·BF·SVF·SOC 상품 차이를 초보자도 이해하기 쉽게 정리하였다.",content:`퇴직연금 계좌를 열어두고도 한 번도 운용 상품을 바꿔본 적이 없다면 디폴트옵션을 알아둘 필요가 있다. 퇴직연금은 오래 묵혀두는 돈이라 작은 수익률 차이도 시간이 지나면 꽤 크게 벌어진다.
그런데 막상 퇴직연금 앱에 들어가 보면 예금, 펀드, TDF, 위험등급 같은 단어가 한꺼번에 나온다. 그래서 &ldquo;괜히 건드렸다가 손해 보는 것 아닐까?&ldquo;라는 생각으로 그대로 두는 경우가 많다. 디폴트옵션은 이런 방치 문제를 줄이기 위해 만들어진 제도다.
퇴직연금 디폴트옵션이란? &nbsp; 퇴직연금 디폴트옵션은 가입자가 별도로 운용 지시를 하지 않았을 때, 미리 정해둔 상품으로 퇴직연금이 자동 운용되도록 하는 제도다. 말 그대로 기본값으로 설정해두는 운용 옵션이라고 이해하면 된다.
예를 들어 DC형 퇴직연금에 있는 정기예금이 만기 되었는데, 가입자가 새 상품을 선택하지 않고 그대로 두는 상황을 생각해보자. 일정 기간 동안 운용 지시가 없으면 금융회사가 가입자에게 안내하고, 그래도 지시가 없으면 사전에 선택해둔 디폴트옵션 상품으로 운용이 시작된다.
중요한 점은 디폴트옵션이 모든 퇴직연금에 적용되는 것은 아니라는 점이다. 근로자가 직접 적립금을 운용하는 DC형과 IRP에 적용된다. 회사가 운용 책임을 지는 DB형은 구조가 다르기 때문에 일반적으로 디폴트옵션 대상이 아니다.
DB형, DC형, IRP부터 구분해야 한다 &nbsp; 디폴트옵션을 이해하려면 퇴직연금 종류를 먼저 구분해야 한다. 퇴직연금은 크게 DB형, DC형, IRP로 나뉜다.
DB형(Defined Benefits, 확정급여형) &nbsp; DB형은 확정급여형 퇴직연금이다. 퇴직할 때 받을 금액의 계산 방식이 정해져 있고, 회사가 적립금을 운용한다. 운용 성과가 좋거나 나빠도 근로자가 직접 책임지는 구조는 아니다.
쉽게 말하면 &ldquo;퇴직금 계산 방식은 정해져 있고, 운용은 회사가 맡는 방식&quot;에 가깝다.
DC형(Defined Contribution, 확정기여형) &nbsp; DC형은 확정기여형 퇴직연금이다. 회사가 매년 일정 금액을 근로자 계좌에 넣어주고, 그 돈을 근로자가 직접 운용한다. 운용을 잘하면 퇴직 시 받을 돈이 늘어날 수 있고, 반대로 손실이 날 수도 있다.
디폴트옵션이 중요한 이유도 여기에 있다. DC형은 가입자가 운용 지시를 해야 하는데, 아무것도 하지 않으면 돈이 낮은 금리 상품에 오래 머무를 수 있다.
IRP(Individual Retirement Pension, 개인형 퇴직연금) &nbsp; IRP는 개인형 퇴직연금이다. 퇴직금을 받은 뒤 계속 굴리거나, 재직 중에 개인이 추가로 납입하면서 노후 자금을 만들 수 있는 계좌다. IRP 역시 가입자가 직접 상품을 고르는 구조라 디폴트옵션 대상이 된다.
디폴트옵션은 언제 발동될까? &nbsp; 디폴트옵션은 가입자가 설정만 했다고 바로 작동하는 것은 아니다. 기존 상품이 만기 되었거나 운용 지시가 필요한 상황에서 가입자가 아무 조치를 하지 않을 때 발동된다.
일반적인 흐름은 다음과 같다.
퇴직연금 상품이 만기되거나 운용 지시가 필요한 상태가 된다. 가입자가 일정 기간 동안 새 운용 지시를 하지 않는다. 금융회사가 가입자에게 운용 지시가 필요하다고 안내한다. 안내 후에도 지시가 없으면 사전에 정해둔 디폴트옵션으로 운용이 시작된다. 이 제도의 핵심은 &ldquo;자동으로 아무 상품이나 들어가는 것&quot;이 아니라 &ldquo;내가 미리 고른 기본 운용 방식으로 넘어가는 것&quot;이다. 그래서 처음 선택할 때 위험등급과 상품 구성을 확인해야 한다.
옵트인과 옵트아웃 &nbsp; 디폴트옵션을 보다 보면 옵트인, 옵트아웃이라는 말도 나온다.
옵트인(Opt-in)은 디폴트옵션 상품이 더 유리하다고 판단될 때 가입자가 해당 상품을 직접 선택해 들어가는 것을 말한다. 기존 상품과 비교해 금리, 수수료, 운용 구조가 더 낫다고 생각되면 활용할 수 있다.
트아웃(Opt-out)은 반대로 디폴트옵션으로 운용 중인 돈을 다른 상품으로 바꾸는 것이다. 자동으로 운용이 시작되었더라도 가입자가 원하면 다른 운용 지시를 할 수 있다. 즉, 디폴트옵션은 한 번 정하면 절대 못 바꾸는 장치가 아니다.
위험등급별 포트폴리오 차이 &nbsp; 디폴트옵션 상품은 보통 초저위험, 저위험, 중위험, 고위험처럼 위험등급으로 구분된다. 이름만 보면 대충 감이 오지만, 실제 차이는 원리금보장 상품과 실적배당형 상품의 비중에서 나온다.
초저위험 &nbsp; 초저위험은 원리금보장 상품 중심이다. 예금 비중이 높거나 전부 예금으로 구성되는 경우가 많다. 원금 손실 가능성을 최대한 피하고 싶은 사람에게 맞지만, 기대 수익률도 낮아질 수 있다.
퇴직이 얼마 남지 않았거나 투자 손실을 심리적으로 감당하기 어렵다면 초저위험 상품을 먼저 보는 것이 현실적이다.
저위험 &nbsp; 저위험부터는 예금 같은 원리금보장 상품에 일부 펀드가 섞일 수 있다. 예금 비중을 유지하면서도 약간의 수익률 개선을 노리는 구조다.
투자가 낯설지만 전부 예금에만 두기는 아쉽다고 느끼는 사람에게 검토할 만하다.
중위험 &nbsp; 중위험은 실적배당형 상품 비중이 더 커진다. TDF나 BF 같은 펀드가 중심이 되고, 일부 안정형 상품이 함께 들어가는 식이다. 장기 운용을 전제로 수익률을 조금 더 기대할 수 있지만, 시장 상황에 따라 평가금액이 흔들릴 수 있다.
퇴직까지 시간이 어느 정도 남아 있고, 단기 손실보다 장기 수익률을 더 중요하게 보는 사람에게 어울린다.
고위험 &nbsp; 고위험은 대부분 실적배당형 상품으로 구성된다. 주식, 채권, 대체투자 성격의 펀드 비중이 높아질 수 있어 수익률 기대는 크지만 변동성도 크다.
나이가 젊고 퇴직까지 시간이 많이 남았더라도, 손실 구간에서 버틸 자신이 없다면 고위험을 무조건 고르는 것은 좋지 않다. 퇴직연금은 오래 가져가는 돈이기 때문에 본인이 꾸준히 유지할 수 있는 위험 수준을 고르는 것이 더 중요하다.
디폴트옵션에 들어가는 대표 상품 &nbsp; 초저위험은 비교적 단순하지만, 저위험 이상부터는 펀드가 섞이면서 상품 이름이 어려워진다. 대표적으로 TDF, BF, SVF, SOC가 있다.
TDF &nbsp; TDF는 타깃데이트펀드다. 은퇴 예상 시점을 기준으로 주식과 채권 비중을 자동으로 조절하는 펀드다. 예를 들어 TDF 2050이라면 2050년 전후 은퇴를 목표로 삼는 식이다.
일반적으로 은퇴까지 시간이 많이 남았을 때는 주식 등 위험자산 비중을 높이고, 은퇴 시점이 가까워질수록 채권 등 안정자산 비중을 늘리는 방식으로 운용된다. 퇴직연금을 직접 자주 관리하기 어렵다면 TDF는 이해하기 쉬운 선택지다.
BF &nbsp; BF는 밸런스드펀드다. 주식과 채권 등 여러 자산을 섞어 운용하면서 시장 상황에 따라 비중을 조정한다. TDF가 은퇴 시점을 중심으로 움직인다면, BF는 시장 상황과 운용 전략에 따라 균형을 맞추는 성격이 강하다.
SVF &nbsp; SVF는 스테이블밸류펀드다. 단기 금융상품 등을 활용해 안정적인 수익을 추구하는 상품이다. 큰 수익을 노리는 상품이라기보다 변동성을 낮추는 쪽에 가깝다.
SOC &nbsp; SOC는 사회간접자본 관련 투자 상품이다. 도로, 항만, 철도, 에너지 시설처럼 사회 기반시설과 관련된 사업에 투자하는 구조다. 일반 주식형 펀드와 성격이 다르기 때문에 투자 대상과 수수료, 환매 조건을 따로 확인하는 것이 좋다.
디폴트옵션 선택할 때 확인할 것 &nbsp; 디폴트옵션을 고를 때는 수익률만 보면 안 된다. 퇴직연금은 노후 자금이기 때문에 오래 유지할 수 있는 구조인지가 더 중요하다.
첫째, 퇴직까지 남은 기간을 봐야 한다. 20년 이상 남았다면 어느 정도 변동성을 감수할 여지가 있지만, 3~5년 안에 퇴직금 사용 계획이 있다면 안정성이 더 중요할 수 있다.
둘째, 손실을 견딜 수 있는 성향인지 봐야 한다. 중위험이나 고위험 상품은 단기적으로 마이너스 수익률이 나올 수 있다. 숫자로는 감당할 수 있을 것 같아도 실제 계좌가 흔들리면 생각이 달라질 수 있다.
셋째, 수수료와 상품 구성을 확인해야 한다. 같은 위험등급이라도 어떤 TDF를 담았는지, 예금 비중이 얼마인지, 운용보수가 어느 정도인지에 따라 결과가 달라질 수 있다.
넷째, 한 번 정한 뒤에도 주기적으로 점검해야 한다. 디폴트옵션은 방치하지 않도록 도와주는 장치이지, 평생 신경 쓰지 않아도 되는 완전 자동 자산관리 서비스는 아니다. 적어도 1년에 한 번은 내 퇴직연금이 어떤 상품에 들어가 있는지 확인하는 것이 좋다.
정리 &nbsp; 퇴직연금 디폴트옵션은 DC형과 IRP 가입자가 운용 지시를 하지 않았을 때, 미리 정해둔 상품으로 자동 운용되게 하는 제도다. 방치된 퇴직연금을 줄이고 장기 수익률을 개선하기 위한 장치라고 볼 수 있다.
핵심은 위험등급을 무조건 높이는 것이 아니다. 초저위험, 저위험, 중위험, 고위험 중에서 퇴직까지 남은 기간과 본인의 투자 성향에 맞는 선택을 하는 것이 중요하다.
퇴직연금 계좌가 있다면 금융회사 앱에서 현재 운용 상품, 만기 예정 상품, 디폴트옵션 설정 여부를 먼저 확인해보자. 이미 설정되어 있더라도 상품 구성과 위험등급이 내 상황에 맞는지 다시 보는 것이 좋다.
자주 묻는 질문 &nbsp; 퇴직연금 디폴트옵션은 꼭 설정해야 하나? &nbsp; DC형과 IRP 가입자는 디폴트옵션 설정 대상이 될 수 있다. 금융회사나 계좌 상태에 따라 안내 방식은 다를 수 있으니, 본인이 가입한 퇴직연금 앱이나 고객센터에서 설정 여부를 확인하는 것이 좋다.
디폴트옵션을 설정하면 원금이 보장되나? &nbsp; 항상 보장되는 것은 아니다. 초저위험처럼 예금 중심 상품은 원리금보장 성격이 강하지만, 저위험 이상부터는 TDF나 BF 같은 실적배당형 상품이 포함될 수 있다. 실적배당형 상품은 시장 상황에 따라 손실이 날 수 있다.
디폴트옵션 상품은 나중에 바꿀 수 있나? &nbsp; 바꿀 수 있다. 디폴트옵션으로 운용이 시작된 뒤에도 가입자가 다른 상품으로 운용 지시를 할 수 있다. 이를 옵트아웃이라고 하며, 퇴직연금은 내 상황이 바뀔 때마다 점검하고 조정하는 것이 좋다.`}).add({id:129,href:"/posts/speculation-vs-investment-difference/",title:"투기 vs 투자 차이 완벽 정리, 초보자가 반드시 알아...",description:"투자와 투기 의 차이를 명확하게 정리하고, 초보자가 반드시 알아야 할 기준과 실전 판단 방법을 쉽게 설명한다.",content:`투자를 한다고 생각했는데, 사실은 투기를 하고 있었던 경험 한 번쯤은 있을 거다.
주식이 오를 것 같아서 샀는데 이유는 없고, 남들이 다 하니까 따라 들어갔다면 그건 이미 투자라기보다 투기에 가까운 행동이다.
문제는 대부분 사람들이 이 둘의 차이를 명확히 모르고 시작한다는 점이다.
이 글에서는 투자와 투기 의 본질적인 차이를 기준 중심으로 정리하고, 실제 상황에서 어떻게 구분해야 하는지까지 명확하게 알려준다.
투자와 투기 의 정의, 겉은 비슷하지만 본질은 완전히 다르다 &nbsp; 투자와 투기 는 둘 다 돈을 불리는 행위지만 접근 방식이 완전히 다르다.
투자는 가치에 기반한 의사결정이다. 기업의 실적, 자산의 본질적 가치, 미래 성장성을 보고 판단한다.
반면 투기는 가격의 변동에 베팅하는 행동이다. 오를 것 같다는 기대감 하나로 들어가는 경우가 많다.
간단하게 정리하면 이렇다.
투자: &ldquo;왜 오르는지 알고 들어간다&rdquo; 투기: &ldquo;오를 것 같아서 들어간다&rdquo; 이 차이는 단순해 보이지만 결과에서는 엄청난 격차를 만든다.
가장 중요한 기준, 시간과 근거의 차이 &nbsp; 투자와 투기를 구분하는 가장 핵심적인 기준은 두 가지다.
1. 시간 관점 &nbsp; 투자는 기본적으로 장기적이다.
시간이 흐를수록 가치가 반영된다는 전제를 가지고 있다.
투기는 단기적이다.
빠르게 사고 빠르게 팔아서 차익을 노린다.
2. 판단 근거 &nbsp; 투자는 데이터와 분석을 기반으로 한다.
재무제표, 산업 흐름, 시장 구조 같은 근거가 있다.
투기는 감정과 기대에 의존한다.
&ldquo;지금 안 사면 놓친다&rdquo; 같은 심리가 핵심이다.
실제로 많은 사람들이 &ldquo;단타 투자&quot;라고 말하지만, 대부분은 투기에 가깝다.
실무 예시로 보는 투기 vs 투자 &nbsp; 이해를 확실하게 하기 위해 실제 상황으로 비교해보자.
사례 1: 주식 &nbsp; 투자: 기업의 실적과 산업 전망을 보고 3년 이상 보유 투기: 급등하는 종목을 보고 이유 없이 매수 사례 2: 부동산 &nbsp; 투자: 입지, 수요, 개발 계획을 분석 후 매수 투기: &ldquo;여기 오른대&quot;라는 소문만 듣고 매수 사례 3: 코인 &nbsp; 투자: 기술과 프로젝트의 가치 분석 투기: 유행 따라 매수 후 단기 차익 기대 이 차이는 결과뿐 아니라 스트레스 수준도 다르게 만든다.
투기는 항상 불안하고, 투자는 비교적 안정적이다.
많은 사람들이 투기에 빠지는 이유 &nbsp; 사실 투기가 나쁜 것만은 아니다.
문제는 본인이 투기를 하고 있다는 걸 모르는 상태다.
사람들이 투기에 빠지는 이유는 크게 세 가지다.
첫째, 빠른 돈에 대한 욕심이다.
둘째, 주변 분위기에 휩쓸리는 심리다.
셋째, 공부 없이 시작하는 구조다.
특히 요즘처럼 정보가 넘치는 시대에는 &ldquo;남들이 돈 벌었다&quot;는 이야기가 투기를 더 부추긴다.
투자로 가기 위한 현실적인 방법 &nbsp; 투기를 완전히 배제할 필요는 없다.
하지만 최소한 비중과 기준은 명확해야 한다.
실제로 적용 가능한 방법은 다음과 같다.
투자 기준을 먼저 만든다 (수익률, 기간, 손절 기준) 매수 전에 반드시 &ldquo;왜 사는지&quot;를 기록한다 단기 매매는 전체 자산의 일부로 제한한다 개인적으로 가장 효과적인 방법은 매수 이유를 글로 남기는 것이다.
나중에 보면 투자였는지 투기였는지 명확하게 드러난다.
정리: 투자와 투기 의 차이는 결국 &ldquo;기준&quot;이다 &nbsp; 투자와 투기의 차이는 단순히 기간이나 수익률이 아니다.
결국 기준과 태도의 차이다.
투자는 근거 기반 투기는 기대 기반 이 차이를 이해하고 나면, 같은 행동도 완전히 다르게 보이기 시작한다.
지금 하고 있는 매매가 투자라고 생각했다면, 한 번만 스스로에게 물어보자.
&ldquo;나는 왜 이걸 샀지?&rdquo;
이 질문에 답할 수 있다면 투자다.
답하지 못한다면 투기일 가능성이 높다.
자주 묻는 질문 &nbsp; Q1. 단타는 무조건 투기인가? &nbsp; 그렇지 않다.
명확한 전략과 기준이 있다면 단타도 투자로 볼 수 있다.
하지만 대부분은 감정 기반이라 투기에 가까운 경우가 많다.
Q2. 투기를 하면 안 되는 건가? &nbsp; 완전히 금지할 필요는 없다.
다만 전체 자산에서 작은 비중으로 관리하는 것이 중요하다.
Q3. 초보자는 무엇부터 시작해야 하나? &nbsp; 개별 종목보다는 지수 투자부터 시작하는 것이 안전하다.
그리고 반드시 &ldquo;왜 투자하는지&quot;를 먼저 정의해야 한다.`}).add({id:130,href:"/posts/parking-account-guide/",title:"파킹 통장이란? 이자도 챙기고 유동성까지 잡는 가장 쉬...",description:"파킹 통장의 개념부터 장단점, 활용법까지 한 번에 정리했다. 단기 자금을 안전하게 굴리고 이자까지 챙기는 가장 쉬운 방법을 소개한다.",content:`파킹 통장이란? 왜 요즘 다들 쓰는 걸까? &nbsp; 돈을 모으다 보면 항상 애매한 순간이 온다. 당장 쓸 돈은 아닌데, 그렇다고 묶어두기엔 불안한 돈 말이다. 그냥 일반 통장에 넣어두자니 이자가 거의 없고, 예적금에 넣자니 중간에 쓸 수도 있다.
이럴 때 등장하는 게 바로 파킹 통장 이다. 말 그대로 돈을 잠깐 &ldquo;주차&rdquo; 해두는 통장인데, 자유롭게 입출금이 가능하면서도 일반 통장보다 높은 금리를 준다.
요즘 금리 변동이 심한 상황에서 파킹 통장은 단기 자금 관리의 기본 도구로 자리 잡았다.
파킹 통장, 왜 이름이 파킹일까? &nbsp; 주차장에 차를 잠시 세워두듯이, 목돈이나 생활비를 잠시 보관한다고 해서 붙여진 이름이다. 가장 큰 특징은 수시입출금 이 가능하다는 점이다. 보통 이자가 높은 예적금은 중도 해지 시 이율이 확 깎이지만, 파킹 통장은 오늘 넣고 내일 빼도 하루 치 이자를 꼬박꼬박 챙겨준다.
과거에는 금리가 연 0.1% 수준인 일반 입출금 통장이 대부분이었지만, 최근에는 인터넷 은행과 저축은행을 중심으로 연 2%에서 3%가 넘는 높은 금리를 제공하는 파킹 통장이 많아졌다. 단 하루만 맡겨도 이자가 붙기 때문에 단기 자금을 굴리기에 이보다 좋은 수단은 없다.
내 경험으로 본 파킹 통장 비법 &nbsp; 나는 매달 나가는 카드 대금과 비상금을 무조건 파킹 통장에 넣어둔다. 예를 들어, 카드 결제일이 매달 25일이라면 월급날인 10일부터 25일까지 약 15일간의 유휴 자금 이 생긴다. 이 돈을 일반 통장에 두면 이자가 거의 없지만, 파킹 통장에 넣어두면 보름치 이자가 발생한다.
실제로 나는 최근에 인터넷 은행의 파킹 통장을 활용해 비상금 1,000만 원을 예치해 두었다. 매일 이자가 쌓이는 것을 눈으로 확인하니 돈을 모으는 재미가 쏠쏠하더라. 특히 &ldquo;지금 이자 받기&rdquo; 같은 기능을 제공하는 곳을 이용하면 복리 효과까지 누릴 수 있어 훨씬 유리하다. 큰 금액이 아니더라도 이런 작은 차이가 모여 결국 자산의 크기를 결정하는 법이다.
파킹 통장 선택 시 반드시 체크해야 할 3가지 &nbsp; 1. 금리 적용 한도 &nbsp; 어떤 상품은 5,000만 원까지만 높은 금리를 주고 그 이상은 낮은 금리를 적용하기도 한다. 자신의 예치 금액에 맞춰 한도가 넉넉한 상품을 골라야 한다.
2. 이자 지급 방식 &nbsp; 한 달에 한 번 이자를 주는지, 아니면 매일 이자를 확인할 수 있는지 확인해 봐라. 최근에는 매일 이자를 지급받아 원금에 포함시키는 방식이 인기인데, 이는 일 복리 효과를 기대할 수 있어 수익률 면에서 미세하게 더 유리하다.
매일 이자를 주는 통장은 카카오 뱅크, 토스 뱅크 드잉 있다.
3. 금자 보호 여부 &nbsp; 저축은행 상품의 경우 금리가 높지만 불안할 수 있는데, 1인당 5,000만 원까지는 예금보험공사에서 보호해 주니 이 범위 내에서 운영하는 것이 가장 안전하다.
파킹 통장의 핵심 특징 3가지 &nbsp; 1. 자유로운 입출금 &nbsp; 파킹 통장의 가장 큰 장점은 언제든지 돈을 넣고 뺄 수 있다는 점이다. 예금처럼 기간이 정해져 있지 않아서 유동성이 매우 높다.
2. 일반 통장보다 높은 금리 &nbsp; 보통 입출금 통장은 이자가 거의 없지만, 파킹 통장은 상대적으로 높은 금리를 제공한다. 물론 정기예금보다는 낮지만, &ldquo;묶지 않고 이자 받는다&quot;는 점에서 충분히 매력적이다.
3. 단기 자금에 최적화 &nbsp; 몇 달 안에 쓸 돈, 투자 대기 자금, 비상금 같은 돈을 넣어두기에 적합하다. 즉, &ldquo;언제 쓸지 모르는 돈&quot;을 위한 통장이다.
언제 쓰면 가장 효과적일까? &nbsp; 1. 비상금 관리 &nbsp; 갑작스러운 병원비나 예상치 못한 지출을 대비하는 돈은 언제든 꺼낼 수 있어야 한다. 이럴 때 파킹 통장이 가장 적합하다.
2. 투자 대기 자금 &nbsp; 주식이나 ETF에 투자하려고 돈을 모아두는 경우, 타이밍을 기다리는 동안에도 이자를 받을 수 있다.
3. 단기 목표 자금 &nbsp; 여행 자금, 이사 비용처럼 몇 달 내 사용할 돈을 관리할 때도 유용하다.
실제로 나도 예전에는 이런 돈을 그냥 일반 통장에 넣어두었는데, 파킹 통장으로 옮긴 뒤로는 &ldquo;가만히 있어도 이자가 붙는다&quot;는 느낌이 확실히 다르더라.
파킹 통장의 단점도 알고 가야 한다 &nbsp; 1. 금리가 변동된다 &nbsp; 파킹 통장은 대부분 변동 금리라서 시장 상황에 따라 금리가 내려갈 수 있다.
2. 조건이 붙는 경우가 많다 &nbsp; 일부 통장은 특정 금액 이하까지만 높은 금리를 적용하거나, 우대 조건이 붙기도 한다.
3. 장기 투자에는 부적합 &nbsp; 파킹 통장은 어디까지나 &ldquo;잠깐 넣어두는 용도&quot;다. 장기적으로는 예금이나 투자 상품이 더 유리하다.
파킹 통장 활용 꿀팁 &nbsp; 1. 통장을 나눠서 관리해라 &nbsp; 가장 추천하는 방법은 통장 쪼개기 를 파킹 통장과 병행하는 것이다. 비상금, 투자 대기 자금, 생활비를 구분해서 각각 파킹 통장으로 관리하면 훨씬 효율적이다.
생활비 통장과 별개로 파킹 통장을 개설해 비상금이나 단기 목적 자금(여행비, 경조사비 등)을 분리해라. 이렇게 하면 지출 통제도 쉬워지고, 보관 중인 모든 돈에서 이자가 발생하므로 자산 관리 효율이 극대화된다.
2. 금리 비교는 필수다 &nbsp; 같은 파킹 통장이라도 금리 차이가 꽤 크다. 여러 은행을 비교해서 가장 유리한 곳을 선택해야 한다.
지금 당장 주거래 은행의 앱을 켜서 내 입출금 통장 금리가 얼마인지 확인해 봐라. 만약 0.1% 수준의 낮은 금리라면 주저하지 말고 파킹 통장으로 갈아타는 실행력이 필요하다. 재테크의 시작은 거창한 투자보다 내 통장에서 새어나가는 기회비용을 막는 것부터 시작된다는 점을 잊지 마라.
3. 금액 한도 체크 &nbsp; 고금리는 일정 금액까지만 적용되는 경우가 많다. 이 부분을 놓치면 생각보다 이자가 적을 수 있다.
실제 많이 쓰는 파킹 통장 추천 TOP5 (2026년 기준) &nbsp; 실제로 사람들이 많이 쓰고, 조건 대비 괜찮은 통장들만 골라봤다.
1. 토스뱅크 통장 &nbsp; 무조건 편한 기본형 (가장 많이 씀)
조건 없이 비교적 높은 금리를 제공하는 게 특징이다. 금리 구조가 단순해서 초보자에게 특히 편하다.
→ 추천 이유: &ldquo;복잡한 조건 싫다&quot;는 사람에게 최적
금리: 약 연 3.5% 한도: 1억 원 조건: 없음 특징: 그냥 넣어두면 끝 매일 이자 지급 느낌 (체감 좋음) 이런 사람에게 추천 귀찮은 거 싫음 월급 통장 + 파킹 같이 쓰고 싶음 한 줄 요약 “생각 없이 쓰기 1위” 2. 카카오뱅크 세이프박스 &nbsp; 안정성 + 카카오 생태계
기존 계좌에 연결해서 쓰는 구조라서 관리가 편하다. 필요할 때 바로 넣고 빼기 좋다.
→ 추천 이유: 생활비 통장과 함께 쓰기 좋음
금리: 약 연 2.6% 한도: 1억 원 특징: 카카오페이랑 연동 UX 최고 수준 이런 사람에게 추천 카카오 많이 쓰는 사람 한 줄 요약 편의성 원탑 3. 케이뱅크 플러스박스 &nbsp; 목돈 쪼개서 관리 (실전용)
금리 자체는 괜찮은 편이고, 한도도 비교적 넉넉하다. 단기 목돈 보관용으로 많이 쓴다.
→ 추천 이유: 1천만 원 이상 운용하는 경우
금리: 최대 연 3.0~3.5% 한도: 3,000만 원 특징: 돈을 박스처럼 나눠서 관리 가능 투자 대기자금 관리용으로 좋음 이런 사람 이건 비상금 / 이건 투자금&rdquo; 나누고 싶은 사람 한 줄 요약 “자금 관리용 최강” 4. OK저축은행 파킹 통장 &nbsp; 고금리 욕심 (조건 OK)
금리는 높은 편이지만, 조건이 조금 붙는다. 대신 적극적으로 관리하면 꽤 괜찮은 수익을 낼 수 있다.
→ 추천 이유: 금리 최우선인 사람
금리: 최대 연 4~7% 한도: 보통 수백만~5천만 원 특징: 금리는 압도적 대신 조건/한도 빡셈 이런 사람에게 추천 액 쪼개서 극한 수익 뽑을 사람 한 줄 요약 &ldquo;금리 깡패 (대신 귀찮음)&rdquo; 5. SBI저축은행 사이다뱅크 &nbsp; 비교적 안정적인 금리와 쉬운 가입 조건이 장점이다. 무난하게 쓰기 좋다.
→ 추천 이유: 리스크 없이 평균 이상
금리: 약 연 2.0% (1억 이하 기준) 한도: 1억 원 이상 가능 (구간별 차등) 조건: 없음 이자: 매월 지급 (체감 좋음) 이런 사람에게 추천 토스/카뱅 말고 하나 더 분산하고 싶은 사람 “조건 없는 파킹통장” 찾는 사람 저축은행도 괜찮고 조금 더 금리 챙기고 싶은 입문자 한 줄 요약 “조건 없이 쓰는 저축은행형 파킹통장 (무난한 서브 계좌)” 정리: 파킹 통장은 &ldquo;돈 쉬게 하지 않는 방법&rdquo; &nbsp; 파킹 통장은 큰 수익을 주는 상품은 아니다. 하지만 놀고 있는 돈을 최소한이라도 굴리게 만들어주는 도구 다.
당장 쓰지 않는 돈이 있다면 파킹 통장으로 옮겨라 비상금과 투자 자금을 분리해서 관리해라 금리는 주기적으로 체크해라 이 세 가지만 지켜도 돈 관리 수준이 확실히 올라간다.
자주 묻는 질문 &nbsp; Q1. 파킹 통장은 안전한가? &nbsp; 대부분 은행 예금이기 때문에 예금자 보호가 적용된다. 일반 통장과 동일한 수준의 안정성을 가진다.
Q2. 파킹 통장 금리는 얼마나 되나? &nbsp; 시기마다 다르지만 일반 입출금 통장보다 높은 수준이다. 다만 정기예금보다는 낮다.
Q3. 파킹 통장은 여러 개 만들어도 상관없을까? &nbsp; 상관없다. 목적별로 나눠서 관리하면 오히려 더 효율적이다. 다만, 짧은 기간 내에 여러 금융기관에서 계좌를 개설하면 20일 제한 규정에 걸릴 수 있으니 주의해야 한다. 본인의 자금 규모에 맞춰 혜택이 가장 좋은 1~2개를 주력으로 사용하는 것을 추천한다.
Q4. 저축은행 파킹 통장은 위험하지 않을까? &nbsp; 예금자 보호법에 따라 원금과 이자를 합쳐 5,000만 원까지는 국가가 보호해 준다. 따라서 5,000만 원 이하로 금액을 나눠서 여러 저축은행에 예치한다면 안전하게 높은 금리를 누릴 수 있다.
Q5. 이자는 언제 들어오나? &nbsp; 보통 한 달에 한 번 특정 요일에 지급되는 경우가 많지만, 최근 인터넷 은행들은 고객이 원할 때 언제든 이자를 받을 수 있는 서비스를 제공하기도 한다. 상품 설명서의 이자 계산 및 지급 시기를 확인해 보는 것이 좋다.`}).add({id:131,href:"/posts/inclusive-wage-contract-requirements/",title:"포괄임금제 계약 요건 3가지, 초과근무수당 임금체불 피...",description:"포괄임금제 뜻과 유효 요건, 근로계약서에 반드시 적어야 할 시간외근무 시간과 수당, 초과근무수당 정산 기준을 쉽게 정리했다.",content:`직원을 채용할 때 &ldquo;월급에 야근수당까지 포함되어 있다&quot;는 식으로 근로계약을 맺는 사업장이 있다. 특히 작은 회사나 자영업 현장에서는 매달 연장근로수당을 따로 계산하기 번거롭다는 이유로 포괄임금제나 고정OT 계약을 쓰는 경우가 많다.
문제는 포괄임금제라고 적어두기만 하면 모든 초과근무수당을 안 줘도 된다고 오해하는 데서 시작된다. 실제로는 그렇지 않다. 계약서에 포함된 시간보다 더 일했다면 차액을 지급해야 하고, 기본급과 수당을 제대로 구분하지 않으면 임금체불 문제가 될 수 있다.
2026년 4월 9일부터 고용노동부의 &ldquo;공짜노동 근절을 위한 포괄임금 오남용 방지 지도 지침&quot;도 시행되고 있다. 포괄임금제나 고정OT를 쓰는 사업장이라면 이제 근로시간 기록, 임금명세서, 추가수당 정산을 더 꼼꼼히 봐야 한다.
포괄임금제란 무엇인가 &nbsp; 포괄임금제는 연장근로수당, 야간근로수당, 휴일근로수당 같은 시간외근무수당을 미리 월급이나 고정수당에 포함해서 지급하는 임금 약정 방식이다. 법률에 별도로 정해진 임금제도라기보다는 판례와 실무를 통해 제한적으로 인정되어 온 방식에 가깝다.
예를 들어 월급을 정하면서 &ldquo;기본급 250만 원, 고정 연장근로수당 30만 원&quot;처럼 일정 시간의 연장근로수당을 미리 포함할 수 있다. 또는 &ldquo;월급 300만 원에는 월 20시간분 연장근로수당이 포함된다&quot;는 식으로 계약할 수도 있다.
다만 핵심은 &ldquo;미리 포함한다&quot;는 말이지 &ldquo;무제한으로 일해도 추가수당이 없다&quot;는 뜻이 아니다. 포괄임금 계약에 포함된 시간외근무 시간보다 실제 근무가 많으면 그 차액은 별도로 지급해야 한다.
구분 의미 연장근로 법정근로시간을 넘겨 일하는 근로 야간근로 밤 10시부터 다음 날 오전 6시 사이의 근로 휴일근로 주휴일, 약정휴일 등에 일하는 근로 고정OT 일정 시간의 시간외근무수당을 매월 고정으로 지급하는 약정 상시근로자 5인 이상 사업장이라면 연장·야간·휴일근로에 대해 통상임금의 50% 이상을 가산해 지급해야 한다. 포괄임금 계약을 했더라도 이 원칙이 사라지는 것은 아니다.
포괄임금 계약이 유효하려면 필요한 3가지 요건 &nbsp; 포괄임금 계약은 사업주가 편하다는 이유만으로 마음대로 쓸 수 있는 방식이 아니다. 근로자에게 불리하게 운용되면 효력을 인정받기 어렵고, 미지급 수당은 임금체불로 문제가 될 수 있다.
1. 근로자의 동의가 있어야 한다 &nbsp; 포괄임금제로 계약하려면 근로자가 그 내용을 알고 동의해야 한다. 단순히 회사 내부 규정에 적혀 있다거나, 구두로 &ldquo;월급에 다 포함된다&quot;고 말한 정도로는 부족할 수 있다.
근로계약서에는 월 임금에 어떤 수당이 포함되는지, 어떤 기준으로 계산했는지, 근로자가 그 약정에 동의한다는 취지가 드러나야 한다. 직원이 나중에 계약 내용을 봐도 &ldquo;내 월급 중 얼마가 기본급이고 얼마가 시간외근무수당인지&rdquo; 이해할 수 있어야 한다.
2. 포함되는 시간과 수당을 구체적으로 적어야 한다 &nbsp; &ldquo;법정수당 일체 포함&rdquo;, &ldquo;각종 수당 포함&quot;처럼 두루뭉술한 문구는 위험하다. 어떤 수당이 몇 시간분 포함되는지 알 수 없으면 실제 근로시간에 따른 수당과 비교하기 어렵기 때문이다.
근로계약서에는 최소한 아래 내용이 분리되어 있는 것이 좋다.
항목 예시 기본급 월 2,300,000원 고정 연장근로 시간 월 20시간 고정 연장근로수당 월 400,000원 포함 수당 범위 연장근로수당, 야간근로수당, 휴일근로수당 중 무엇인지 명시 초과 시 정산 약정 시간을 넘는 실제 근로는 별도 지급 이렇게 구분해 두어야 사업주도 계산 기준을 관리할 수 있고, 근로자도 자신의 임금 구성을 확인할 수 있다.
3. 근로자에게 불리하면 안 된다 &nbsp; 가장 중요한 요건은 근로자에게 불이익이 없어야 한다는 점이다. 포괄임금 계약을 했더라도 실제로 계산한 법정수당보다 적게 지급했다면 차액을 지급해야 한다.
예를 들어 월 20시간분 연장근로수당을 고정수당으로 지급하기로 했는데 실제로 월 30시간을 연장근로했다면, 추가 10시간분에 대한 연장근로수당은 별도로 계산해 줘야 한다. 반대로 실제 연장근로가 10시간밖에 없었다고 해서 이미 약정한 월급을 임의로 깎는 것도 조심해야 한다.
포괄임금제는 정산을 없애는 제도가 아니다. 일정 범위의 수당을 미리 지급하는 방식일 뿐이고, 실제 근로시간과 비교해 부족하면 보충해야 한다.
2026년부터 더 중요해진 근로시간 기록과 임금명세서 &nbsp; 2026년 4월 9일부터 시행된 고용노동부 지도 지침은 포괄임금제와 고정OT의 오남용을 줄이는 데 초점을 둔다. 핵심은 간단하다. 실제 일한 시간에 따라 계산한 법정수당보다 약정금액이 적으면 차액을 지급해야 한다는 것이다.
이를 위해 사업주는 근로시간을 제대로 기록하고, 임금대장과 임금명세서에 기본급과 수당을 구분해 적어야 한다. 포괄임금이라는 이름으로 수당 항목을 뭉뚱그려 처리하면 나중에 어떤 금액이 어떤 수당인지 설명하기 어렵다.
사업장에서 점검해야 할 내용은 다음과 같다.
출퇴근 시간, 연장근로, 야간근로, 휴일근로 기록을 남긴다. 기본급과 고정수당, 실제 추가수당을 임금명세서에 구분한다. 약정한 시간외근무 시간과 실제 근로시간을 매월 비교한다. 약정수당이 실제 법정수당보다 적으면 차액을 지급한다. 근로계약서에 포함 수당, 포함 시간, 계산 기준을 명확히 적는다. 특히 &ldquo;포괄임금제니까 야근수당은 없다&quot;는 식의 운영은 위험하다. 포괄임금 계약은 초과근무수당을 없애는 장치가 아니라, 일정 금액을 미리 지급하는 약정이라는 점을 분명히 해야 한다.
사업주가 근로계약서에서 꼭 확인할 부분 &nbsp; 포괄임금제를 쓰려면 근로계약서 문구부터 점검해야 한다. 좋은 계약서는 복잡한 표현이 많은 계약서가 아니라, 나중에 계산할 수 있는 계약서다.
예를 들어 &ldquo;월급 300만 원, 제수당 포함&quot;이라고만 쓰면 문제가 생기기 쉽다. 기본급이 얼마인지, 연장근로수당이 얼마인지, 몇 시간분인지 알 수 없기 때문이다.
반대로 아래처럼 나누어 적으면 훨씬 명확하다.
월 임금: 3,000,000원 기본급: 2,600,000원 고정 연장근로수당: 400,000원 고정 연장근로수당은 월 20시간분 연장근로에 대한 수당으로 산정한다. 월 20시간을 초과한 연장근로, 야간근로, 휴일근로가 발생하면 근로기준법에 따라 별도 지급한다.실제 계약서 문구는 사업장 상황, 근로시간, 임금 구조에 따라 달라질 수 있다. 중요한 것은 기본급과 수당을 구분하고, 포함 시간과 초과 시 정산 기준을 남기는 것이다.
최저임금도 함께 확인해야 한다. 포괄임금제로 계약했더라도 기본급과 수당을 나누어 계산했을 때 최저임금에 미달하면 문제가 된다. &ldquo;총액은 많아 보이니 괜찮다&quot;가 아니라, 최저임금 산입 기준에 맞춰 따져봐야 한다.
정리 &nbsp; 포괄임금제는 사업장 입장에서 임금 관리를 단순하게 만들 수 있지만, 잘못 쓰면 임금체불 위험이 커진다. 특히 실제 근로시간을 기록하지 않거나, 근로계약서에 수당과 시간을 뭉뚱그려 적어두면 분쟁이 생겼을 때 방어하기 어렵다.
핵심만 정리하면 이렇다.
포괄임금제는 시간외근무수당을 월급이나 고정수당에 미리 포함하는 약정이다. 근로자의 동의가 있어야 하고, 계약서에 포함 시간과 수당이 명확해야 한다. 약정한 시간보다 더 일했다면 추가수당을 별도로 지급해야 한다. 약정수당이 실제 법정수당보다 적으면 차액 미지급은 임금체불 문제가 될 수 있다. 2026년 4월 9일 이후에는 근로시간 기록, 임금대장, 임금명세서 관리가 더 중요해졌다. 포괄임금제를 쓰는 목적이 &ldquo;수당을 안 주기 위해서&quot;가 되어서는 안 된다. 사업주에게 필요한 것은 포괄임금제라는 이름이 아니라, 실제 근로시간과 임금 지급 내역을 설명할 수 있는 관리 체계다.
자주 묻는 질문 &nbsp; 포괄임금제로 계약하면 야근수당을 안 줘도 될까? &nbsp; 아니다. 계약에 포함된 시간외근무 시간까지는 미리 지급한 것으로 볼 수 있지만, 그 시간을 넘겨 일했다면 초과분은 별도로 지급해야 한다.
계약보다 연장근로를 덜 했으면 월급을 깎아도 될까? &nbsp; 일반적으로 조심해야 한다. 포괄임금 계약은 월 임금을 일정하게 지급하기로 한 약정이므로, 실제 초과근무가 적었다는 이유만으로 임금을 임의로 감액하면 분쟁이 생길 수 있다.
&ldquo;월급에 모든 수당 포함&quot;이라고 쓰면 충분할까? &nbsp; 충분하지 않다. 기본급, 포함되는 수당 종류, 포함 시간, 수당 금액, 초과 시 별도 지급 기준을 구체적으로 적어야 한다. 그래야 실제 근로시간 기준 법정수당과 비교할 수 있다.`}).add({id:132,href:"/posts/foreign-stock-capital-gains-tax/",title:"해외주식 양도소득세 신고 방법, 250만 원 공제와 세...",description:"해외주식 양도소득세 신고 대상, 국내주식과 다른 과세 방식, 기본공제 250만 원, 세율 22%, 홈택스 신고 방법과 가산세를 쉽게 정리했다.",content:`해외주식을 하다 보면 매수와 매도 타이밍에는 민감해도 세금은 뒤로 미루기 쉽다. 특히 테슬라, 엔비디아, 애플, 마이크로소프트처럼 익숙한 미국 주식으로 수익이 났다면 &ldquo;증권사 계좌에 돈이 들어왔으니 끝난 것 아닌가&quot;라고 생각할 수 있다.
하지만 해외주식은 국내 상장주식과 세금 구조가 다르다. 일반 개인 투자자라도 해외주식을 팔아 연간 양도차익이 일정 금액을 넘으면 직접 양도소득세를 신고하고 납부해야 한다. 배당소득세처럼 증권사가 알아서 원천징수하고 끝나는 방식이 아니다.
이 글에서는 해외주식 양도소득세가 언제 발생하는지, 국내주식과 무엇이 다른지, 250만 원 기본공제와 22% 세율은 어떻게 적용되는지, 5월 신고 때 무엇을 확인해야 하는지 초보자 기준으로 정리하였다.
해외주식 세금은 국내주식과 다르게 봐야 한다 &nbsp; 국내주식과 해외주식의 가장 큰 차이는 양도소득세 과세 범위다. 국내 상장주식은 일반적인 소액주주가 정규 시장에서 거래하면 매매차익에 대해 양도소득세를 내지 않는 경우가 많다. 물론 대주주, 비상장주식, 장외거래처럼 예외는 있다.
해외주식은 접근 방식이 다르다. 대주주인지 아닌지와 관계없이 해외주식을 팔아 이익이 나면 양도소득세 대상이 될 수 있다. 여기서 말하는 해외주식에는 외국 기업이 발행한 주식뿐 아니라 국내 기업이 외국 증시에 상장한 주식도 포함될 수 있다.
쉽게 말하면 국내주식은 &ldquo;일반 소액주주는 보통 양도세 걱정이 작다&quot;에 가깝고, 해외주식은 &ldquo;개인 투자자도 연간 손익을 계산해야 한다&quot;에 가깝다.
구분 국내 상장주식 해외주식 일반 개인의 매매차익 보통 비과세인 경우가 많음 양도소득세 대상 가능 신고 방식 대주주 등 해당자 중심 투자자가 직접 연 1회 신고 기본공제 주식 양도소득 기본공제 적용 가능 연 250만 원 기본공제 세율 대상과 조건에 따라 다름 보통 지방소득세 포함 22% 해외주식은 거래세가 없다고 해서 세금이 없는 것이 아니다. 사고팔 때마다 세금이 바로 빠져나가지 않을 뿐, 다음 해 5월에 직접 정산해야 하는 구조라고 보면 된다.
해외주식 양도소득세 신고 대상은 누구일까 &nbsp; 해외주식 양도소득세는 1년 동안 해외주식을 팔아 생긴 양도차익을 기준으로 본다. 기준 기간은 매년 1월 1일부터 12월 31일까지다. 이 기간에 매도한 해외주식의 이익과 손실을 합산하고, 필요경비와 기본공제를 반영해 과세표준을 계산한다.
예를 들어 2025년 1월 1일부터 2025년 12월 31일까지 해외주식을 매도했다면, 그 결과는 2026년 5월 1일부터 5월 31일까지 신고하고 납부하는 구조다. 현재 2026년 5월에 신고하는 것은 2025년에 매도한 해외주식 손익이다.
중요한 점은 &ldquo;평가이익&quot;이 아니라 &ldquo;실현손익&quot;을 본다는 것이다. 엔비디아 주식을 보유 중인데 아직 팔지 않았다면 가격이 올랐더라도 양도소득세 신고 대상 손익으로 확정되지 않는다. 반대로 일부만 팔았다면 그 판 부분에 대해서는 손익 계산이 필요하다.
손실이 있어도 확인은 해야 한다 &nbsp; 해외주식에서 손실이 났다면 낼 세금은 없을 수 있다. 다만 여러 종목을 사고팔았다면 이익과 손실을 합산해야 한다. A종목에서 500만 원을 벌고 B종목에서 300만 원을 잃었다면 순이익은 200만 원이다. 이 경우 기본공제 250만 원보다 작아 세금이 없을 수 있다.
반대로 A종목에서 700만 원을 벌고 B종목에서 100만 원을 잃었다면 순이익은 600만 원이다. 여기서 기본공제 250만 원을 빼면 350만 원이 과세 대상 계산의 출발점이 된다.
증권사 화면에서는 원화 손익, 외화 손익, 세금용 양도차익이 다르게 보일 수 있다. 해외주식 세금은 환율과 수수료가 반영되므로 단순히 달러 기준 매매차익만 보고 판단하면 실제 신고 금액과 어긋날 수 있다.
세금은 250만 원 공제 후 22%로 계산한다 &nbsp; 해외주식 양도소득세 계산은 구조만 알면 어렵지 않다. 핵심은 양도차익에서 필요경비와 기본공제 250만 원을 뺀 뒤 세율을 적용한다는 점이다.
해외주식 양도소득 과세표준 = 양도차익 - 필요경비 - 기본공제 250만 원 납부세액 = 과세표준 x 22%여기서 22%는 양도소득세 20%와 지방소득세 2%를 합친 세율로 이해하면 된다. 실제 신고 과정에서는 양도소득세와 지방소득세 납부가 나뉘어 보일 수 있지만, 투자자가 대략 계산할 때는 총 22%로 보는 편이 쉽다.
예를 들어 해외주식을 1,000만 원에 사서 1,500만 원에 팔았고, 매매수수료 등 필요경비가 5만 원이었다고 해보자.
구분 금액 양도가액 15,000,000원 취득가액 10,000,000원 필요경비 50,000원 기본공제 2,500,000원 과세표준 2,450,000원 예상 세액 22% 539,000원 이 예시에서는 최종적으로 약 53만 9천 원의 세금이 나온다. 수익 500만 원 전체에 바로 22%를 곱하는 것이 아니라, 필요경비와 기본공제를 뺀 뒤 계산한다는 점이 중요하다.
250만 원 이하면 무조건 안심해도 될까 &nbsp; &ldquo;해외주식 수익이 250만 원 이하면 신고 안 해도 된다&quot;는 말을 자주 듣는다. 기본공제가 250만 원이기 때문에 결과적으로 낼 세금이 없는 경우가 많다는 뜻이다.
다만 이 말만 믿고 넘기기에는 애매한 경우가 있다. 해외주식은 원화 환산이 들어가고, 매수일과 매도일의 환율이 달라질 수 있다. 달러 기준으로는 250만 원보다 작아 보였는데 원화 환산 후에는 넘을 수도 있다.
또 여러 증권사를 이용했다면 한 증권사 화면만 보고 판단하면 안 된다. A증권사에서 200만 원 수익, B증권사에서 150만 원 수익이 났다면 합산 350만 원이다. 기본공제 250만 원을 넘는 부분은 신고 대상이 될 수 있다.
환율과 여러 계좌를 같이 확인해야 한다 &nbsp; 해외주식 양도소득세에서 초보자가 가장 자주 헷갈리는 부분은 환율이다. 해외주식은 보통 달러 같은 외화로 거래하지만, 세금 신고는 원화 기준으로 계산한다. 그래서 매수할 때의 환율, 매도할 때의 환율, 결제일 기준 환율 등이 손익에 영향을 준다.
예를 들어 어떤 주식을 200달러에 샀고 250달러에 팔았다고 해보자. 달러 기준 차익은 50달러다. 그런데 매수 당시 환율이 1,000원이고 매도 당시 환율이 1,300원이라면 원화 기준 결과는 단순히 50달러 수익으로 끝나지 않는다. 주가 상승과 환율 변동이 함께 반영되기 때문이다.
물론 반대 상황도 있다. 주식 가격은 올랐지만 환율이 내려가 원화 기준 수익이 줄어들 수 있고, 주식에서 손실이 났더라도 환율 때문에 손실 폭이 달라질 수 있다. 그래서 해외주식 세금은 직접 엑셀로 대충 계산하기보다 증권사에서 제공하는 양도소득세 자료를 먼저 확인하는 편이 좋다.
여러 증권사를 쓰고 있다면 더 신경 써야 한다. 해외주식 양도소득세는 증권사별로 따로 250만 원 공제를 주는 방식이 아니다. 투자자 1명 기준으로 연간 해외주식 양도소득을 합산하고 기본공제 250만 원을 한 번 적용한다.
확인할 항목은 아래 정도면 충분하다.
확인 항목 이유 증권사별 해외주식 양도소득 내역 여러 계좌 손익을 합산해야 한다 매도일 또는 결제일 기준 내역 신고 대상 기간을 맞춰야 한다 필요경비와 수수료 과세표준에서 차감될 수 있다 국내 양도세 대상 주식 손익 대주주, 장외, 비상장주식 손익과 합산이 필요할 수 있다 특히 국내 양도세 대상인 대주주 주식, 장외거래, 비상장주식 매매손익이 있다면 해외주식 손익과 함께 정산해야 할 수 있다. 일반적인 소액 투자자라면 드문 일이지만, 스톡옵션이나 비상장주식 거래 경험이 있다면 그냥 넘기지 않는 편이 좋다.
해외주식 양도소득세 신고 방법은 세 가지다 &nbsp; 해외주식 양도소득세는 다음 해 5월에 신고하고 납부한다. 2025년에 매도한 해외주식 내역은 2026년 5월 1일부터 5월 31일까지 신고하는 식이다. 예정신고를 따로 하는 구조가 아니라 연 1회 정산한다고 이해하면 된다.
신고 방법은 크게 세 가지로 나눌 수 있다.
홈택스로 직접 신고하기 &nbsp; 가장 기본적인 방법은 홈택스에서 직접 신고하는 것이다. 홈택스에 로그인한 뒤 양도소득세 신고 메뉴에서 해외주식 매매내역을 입력하고 기본공제를 적용해 신고를 진행한다. 신고 후에는 양도소득세와 지방소득세 납부까지 확인해야 한다.
직접 신고의 장점은 비용이 들지 않는다는 점이다. 단점은 매매내역이 많거나 여러 증권사를 이용한 경우 입력과 검산이 번거롭다는 점이다. 특히 환율, 수수료, 손익 합산을 잘못 넣으면 세액이 달라질 수 있다.
증권사 신고대행 서비스 이용하기 &nbsp; 많은 증권사가 해외주식 양도소득세 신고대행 서비스를 제공한다. 보통 신청 기간이 정해져 있고, 해당 증권사에서 거래한 내역을 바탕으로 신고 자료를 만들어주거나 세무법인과 연결해주는 방식이다.
거래가 한 증권사에 몰려 있고 매매 건수가 많다면 신고대행이 편하다. 다만 여러 증권사를 쓰는 경우에는 다른 증권사 내역까지 반영되는지 확인해야 한다. 신고대행을 신청했다고 해서 모든 계좌의 손익이 자동으로 합산된다고 단정하면 안 된다.
세무사에게 맡기기 &nbsp; 거래 금액이 크거나, 여러 증권사를 사용했거나, 해외주식 외에 국내 비상장주식과 장외거래까지 있다면 세무사에게 맡기는 것이 낫다. 수수료가 들지만 신고 오류로 가산세를 내는 것보다 나을 수 있다.
특히 사업자라면 종합소득세 신고 기간과 겹쳐 세금 업무가 몰릴 수 있다. 해외주식 양도소득세는 종합소득세와 성격이 다르지만, 5월이라는 일정이 겹치므로 미리 자료를 모아두는 것이 좋다.
신고를 놓치면 가산세가 붙을 수 있다 &nbsp; 해외주식 양도소득세는 자진신고납부 대상이다. 그래서 신고 기한을 놓치거나 세금을 적게 신고하면 가산세가 붙을 수 있다.
일반적으로 무신고, 과소신고, 납부 지연에 대한 부담이 생긴다. 과소신고는 내야 할 세금보다 적게 신고한 경우이고, 무신고는 신고 자체를 하지 않은 경우다. 납부 지연은 신고했더라도 세금을 늦게 낸 경우에 문제가 된다.
여기서 중요한 것은 &ldquo;증권사가 알려주지 않았으니 괜찮다&quot;가 아니라는 점이다. 해외주식 양도소득세는 투자자가 스스로 확인하고 신고해야 하는 세금이다. 증권사 알림이나 신고대행 서비스는 편의를 위한 도구이지, 신고 의무 자체를 없애주는 것은 아니다.
5월 신고 전에는 아래 순서로 점검하면 실수를 줄일 수 있다.
1. 1월 1일부터 12월 31일까지 매도한 해외주식 내역 확인 2. 증권사별 양도소득세 자료 다운로드 3. 여러 증권사 손익 합산 4. 필요경비와 기본공제 250만 원 반영 5. 홈택스 직접 신고, 증권사 신고대행, 세무사 의뢰 중 선택 6. 양도소득세와 지방소득세 납부 확인신고 대상인지 애매하다면 일단 증권사 양도소득세 자료부터 내려받아보는 것이 좋다. 자료를 보면 연간 양도차익, 손실, 비용이 정리되어 있어 판단이 훨씬 쉬워진다.
해외주식 세금은 5월 전에 미리 정리해두자 &nbsp; 해외주식은 매매 자체는 간단해졌지만 세금은 국내주식보다 직접 챙길 부분이 많다. 특히 250만 원 기본공제, 22% 세율, 환율 반영, 여러 증권사 손익 합산을 놓치면 예상과 다른 세금이 나올 수 있다.
핵심은 세 가지다. 첫째, 해외주식은 일반 개인 투자자도 양도소득세 대상이 될 수 있다. 둘째, 연간 양도차익에서 필요경비와 기본공제 250만 원을 뺀 뒤 보통 22% 세율을 적용한다. 셋째, 다음 해 5월에 투자자가 직접 신고하고 납부해야 한다.
해외주식으로 수익이 났다면 매년 4월 말이나 5월 초에 증권사 양도소득세 자료를 확인하는 습관을 들이는 것이 좋다. 세금은 수익이 난 뒤에 챙기면 번거롭지만, 미리 구조를 알고 있으면 투자 성과를 더 현실적으로 계산할 수 있다.
자주 묻는 질문 &nbsp; 해외주식 수익이 250만 원 이하면 신고하지 않아도 될까? &nbsp; 기본공제 250만 원 안에 들어 낼 세금이 없는 경우가 많다. 다만 여러 증권사 손익을 합산해야 하고, 환율 반영 후 금액이 달라질 수 있으므로 증권사 양도소득세 자료로 먼저 확인하는 것이 좋다.
해외주식을 아직 팔지 않았는데 세금을 내야 할까? &nbsp; 보유 중인 평가이익만으로는 양도소득세가 확정되지 않는다. 양도소득세는 실제로 주식을 매도해 손익이 실현됐을 때 계산한다. 다만 배당을 받았다면 배당소득세는 별도로 확인해야 한다.
증권사 신고대행을 신청하면 끝일까? &nbsp; 한 증권사만 이용했다면 비교적 간단할 수 있다. 하지만 여러 증권사를 이용했거나 국내 양도세 대상 주식 손익이 있다면 모든 내역이 합산됐는지 확인해야 한다. 신고대행을 맡기더라도 최종 신고와 납부가 제대로 되었는지는 본인이 확인하는 편이 안전하다.`}).add({id:133,href:"/posts/fire-insurance-coverage-price-guide/",title:"화재보험 보장범위와 가격비교, 아파트·주택 가성비 화재...",description:"화재보험의 기본 보장범위와 누수·배상책임 특약, 아파트 단체보험과 개인 화재보험 차이, 보험료 비교와 가입 전 체크리스트를 쉽게 정리했다.",content:`얼마 전에 아파트에서 크게 불이 났다는 뉴스를 봤다. 화면으로만 봐도 남의 일 같지 않았다. 우리 집에서 불이 나면 내 집만 문제가 되는 것이 아니라, 옆집과 윗집, 아랫집까지 피해가 번질 수 있다. 화재는 한 번 발생하면 복구비도 크고, 책임 문제도 복잡해진다.
그때부터 화재보험을 다시 생각하게 된다. &ldquo;아파트 관리비에 보험료가 들어가 있지 않나?&rdquo;, &ldquo;개인이 따로 가입해야 하나?&rdquo;, &ldquo;누수도 보장될까?&rdquo;, &ldquo;월 보험료는 얼마나 적당할까?&rdquo; 같은 질문이 생긴다.
화재보험은 단순히 집이 불에 탔을 때만 보상하는 보험이 아니다. 상품과 특약에 따라 화재, 폭발, 낙뢰, 소방활동 중 손해, 임시거주비, 누수, 도난, 배상책임까지 폭넓게 설계할 수 있다. 이 글에서는 화재보험의 보장범위와 가격비교 기준, 아파트와 주택에서 꼭 확인해야 할 가입 포인트를 누구나 이해하기 쉽게 정리하였다.
화재보험이란 무엇인가 &nbsp; 화재보험은 집, 건물, 가재도구가 화재나 폭발 같은 사고로 손해를 입었을 때 보상받기 위한 보험이다. 주택화재보험, 아파트화재보험, 사업장 화재보험처럼 대상에 따라 이름이 조금씩 달라질 수 있다.
주택화재보험에서 보통 보호하는 대상은 크게 두 가지다.
건물: 벽, 천장, 바닥, 문, 창문, 붙박이 설비 등 집 자체 가재도구: 가전제품, 가구, 의류, 생활용품 등 집 안의 물건 자가라면 건물과 가재도구를 모두 신경 써야 한다. 전세나 월세라면 건물 전체 복구 책임은 소유자와 계약관계에 따라 달라질 수 있지만, 세입자의 가전제품과 가구 같은 가재도구는 별도로 챙겨야 할 수 있다. 또 내 집에서 발생한 사고로 이웃집에 피해를 줬다면 배상책임 문제가 생길 수 있다.
아파트의 경우 단지 차원에서 단체 화재보험에 가입되어 있는 경우가 많다. 하지만 단체보험이 내 집 내부 인테리어, 가재도구, 누수 배상, 임시거주비까지 충분히 보장하는지는 별도로 확인해야 한다. &ldquo;관리비에 보험료가 나가니까 괜찮겠지&quot;라고 생각하기보다, 관리사무소에 단체보험 보장 내역을 요청해 확인하는 것이 좋다.
화재보험 보장범위 &nbsp; 화재보험의 기본 보장은 화재로 인한 직접 손해다. 하지만 실제 사고에서는 불에 탄 손해만 있는 것이 아니다. 연기, 그을음, 소방수로 인한 침수, 대피 과정에서 생긴 파손처럼 2차 피해도 함께 발생할 수 있다.
화재보험에서 자주 보는 기본 보장범위는 다음과 같다.
보장 항목 내용 화재 손해 화재로 건물이나 가재도구가 손상된 경우 폭발·파열 손해 가스 폭발, 보일러 사고 등으로 생긴 손해 낙뢰 손해 낙뢰로 인한 전기설비나 가전제품 손해 소방 손해 진화 과정에서 소방수나 소방작업으로 생긴 손해 피난 손해 화재 대피 과정에서 발생한 일부 손해 잔존물 처리비 화재 후 남은 잔해 처리 비용 여기서 중요한 것은 보험 상품마다 보장명과 한도가 다르다는 점이다. 같은 &ldquo;화재보험&quot;이라도 어떤 상품은 건물 중심이고, 어떤 상품은 가재도구 보장을 더 크게 잡을 수 있다. 또 일부 보장은 기본계약에 포함되지 않고 특약으로만 선택할 수 있다.
화재보험에서 보장이 제한될 수 있는 경우도 있다. 고의 사고, 중대한 법령 위반, 보험기간 밖에 발생한 사고, 약관에서 제외한 위험은 보상되지 않을 수 있다. 전기시설을 불법 개조했거나, 위험 물질을 부적절하게 보관한 경우처럼 사고 원인에 따라 분쟁이 생길 수도 있다.
꼭 봐야 할 특약: 누수, 배상책임, 임시거주비 &nbsp; 화재보험을 고를 때 기본 화재 보장만 보면 부족하다. 실제 생활에서 자주 문제가 되는 것은 누수, 이웃집 피해, 임시거주비 같은 항목이다.
누수 보장 &nbsp; 아파트나 빌라에서는 누수 사고가 생각보다 흔하다. 우리 집 배관 문제로 아랫집 천장과 벽지가 젖으면 수리비를 배상해야 할 수 있다. 이때 급배수시설 누수 손해나 일상생활배상책임 특약이 도움이 될 수 있다.
다만 누수는 보험사마다 가입 조건과 보장 범위가 다르다. 건물 연식이 오래되었거나 이미 누수 이력이 있으면 가입이 제한될 수 있고, 단순 노후 배관 교체비는 보장되지 않을 수 있다. &ldquo;누수 특약&quot;이라는 이름만 보고 가입하지 말고, 우리 집 수리비와 아랫집 배상까지 되는지 구분해서 봐야 한다.
배상책임 &nbsp; 화재보험에서 배상책임은 매우 중요하다. 내 집에서 시작된 불이나 누수로 다른 사람의 신체나 재산에 손해를 입혔을 때 배상해야 할 수 있기 때문이다.
예를 들어 주방에서 시작된 불이 옆집으로 번졌거나, 세탁기 배수 문제로 아랫집 도배와 가구에 손해가 생겼다면 배상책임이 문제가 된다. 이런 사고는 내 집 복구비보다 이웃집 배상액이 더 커질 수도 있다.
그래서 화재보험을 비교할 때는 &ldquo;우리 집 보장&quot;과 함께 &ldquo;남에게 끼친 피해 보장&quot;을 반드시 확인해야 한다.
임시거주비 &nbsp; 화재가 크게 나면 집에서 바로 생활하기 어렵다. 복구 공사 기간 동안 호텔, 단기 임대, 친척집 생활 등 임시 거주 비용이 발생할 수 있다. 임시거주비 특약은 이런 상황에서 도움이 된다.
다만 지급 일수, 1일 한도, 총 한도는 상품마다 다르다. 보장금액이 너무 낮으면 실제 숙박비를 감당하기 어렵고, 너무 높게 잡으면 보험료가 올라갈 수 있다. 내가 사는 지역의 임시 숙박비 수준을 생각해서 적정 한도를 고르는 것이 좋다.
아파트 화재보험은 꼭 따로 가입해야 할까 &nbsp; 아파트는 관리단이나 입주자대표회의를 통해 단체 화재보험에 가입되어 있는 경우가 많다. 생활법령 안내에서도 특수건물에 해당하는 아파트 소유자는 법에서 정한 화재보험 가입 의무와 관련된 내용을 확인할 수 있다.
하지만 여기서 오해하면 안 된다. 아파트 단체보험이 있다고 해서 개인에게 필요한 모든 보장이 자동으로 충분해지는 것은 아니다.
아파트 단체보험은 보통 공용부분, 건물 기본 구조, 법정 배상책임 중심으로 설계되는 경우가 많다. 반면 개인이 걱정하는 항목은 더 생활에 가깝다.
우리 집 내부 인테리어 복구 가전제품과 가구 손해 아랫집 누수 배상 임시거주비 도난 손해 가전제품 고장 수리비 이런 항목은 단체보험만으로 부족할 수 있다. 그래서 아파트에 산다면 먼저 관리사무소에서 단체 화재보험 증권이나 보장 요약표를 확인한 뒤, 부족한 부분만 개인 화재보험으로 보완하는 방식이 합리적이다.
전세나 월세 세입자도 화재보험을 검토할 필요가 있다. 건물 자체는 집주인 소유이지만, 세입자의 가재도구와 배상책임은 별도 문제가 될 수 있기 때문이다. 특히 아랫집 누수 배상이나 생활 중 발생한 사고를 대비하려면 일상생활배상책임 특약을 함께 보는 것이 좋다.
화재보험 가격비교와 가성비 선택 기준 &nbsp; 화재보험료는 집의 형태, 면적, 건물가액, 보장금액, 특약, 자기부담금에 따라 달라진다. 같은 30평대 아파트라도 건물 보장액을 크게 잡고 누수·도난·가전수리·임시거주비 특약을 많이 넣으면 보험료가 올라간다.
참조 자료 기준으로 32평 아파트 화재보험은 월 만 원대 상품도 가능하다고 설명된다. 다만 실제 보험료는 보험사, 주소, 건축연도, 보장범위, 가입자 조건에 따라 달라진다. 그래서 특정 금액만 보고 판단하기보다 같은 조건으로 여러 상품을 비교해야 한다.
가성비 화재보험을 고를 때는 아래 순서로 보면 좋다.
아파트 단체보험 보장 내역을 먼저 확인한다. 건물, 가재도구, 배상책임 중 부족한 항목을 정한다. 누수와 임시거주비가 필요한지 판단한다. 보장금액과 자기부담금을 비교한다. 월 보험료보다 사고 시 실제 받을 수 있는 한도를 본다. 중복되는 특약은 빼고 필요한 보장만 남긴다. 최소 2~3개 보험사의 같은 조건 견적을 비교한다. 보험료를 낮추고 싶다면 불필요한 특약을 줄이고, 자기부담금을 적절히 설정하는 방법이 있다. 다만 자기부담금을 너무 높게 잡으면 사고가 났을 때 본인 부담이 커진다. 보험료 몇천 원을 아끼는 것보다 큰 사고에서 제대로 작동하는지가 더 중요하다.
화재보험은 비싼 상품이 무조건 좋은 것도 아니고, 가장 싼 상품이 무조건 합리적인 것도 아니다. 내 집 구조와 생활 위험에 맞게 필요한 보장을 채우는 것이 가성비다.
가입 전 체크리스트 &nbsp; 화재보험에 가입하기 전에는 아래 내용을 확인하는 것이 좋다.
자가, 전세, 월세 중 내 주거 형태를 확인한다. 아파트라면 단체 화재보험 보장 내역을 확인한다. 건물 보장과 가재도구 보장을 구분한다. 이웃집 피해 배상책임 한도를 확인한다. 누수 보장이 우리 집 손해와 아랫집 배상까지 포함하는지 본다. 임시거주비의 1일 한도와 지급 일수를 확인한다. 도난, 풍수해, 가전제품 고장 특약이 정말 필요한지 판단한다. 자기부담금이 얼마인지 확인한다. 보험금 청구 시 필요한 서류와 사고 통보 절차를 알아둔다. 화재보험은 가입 후에도 증권을 보관해두는 것이 중요하다. 사고가 나면 정신이 없기 때문에 보험사 연락처, 증권번호, 보장 내역을 바로 찾을 수 있어야 한다. 관리사무소 단체보험이 있다면 단체보험 증권도 함께 확인해두면 좋다.
정리 &nbsp; 화재보험은 화재로 인한 집과 물건의 손해뿐 아니라, 상품과 특약에 따라 누수, 배상책임, 임시거주비, 도난, 자연재해까지 대비할 수 있는 보험이다. 특히 아파트나 빌라처럼 이웃과 붙어 사는 주거 형태에서는 내 집 피해보다 이웃집 배상 문제가 더 커질 수 있다.
핵심만 다시 정리하면 이렇다.
화재보험은 건물과 가재도구의 화재·폭발·소방 손해를 보장한다. 누수, 도난, 풍수해, 임시거주비, 가전제품 고장 등은 특약으로 확인해야 한다. 아파트 단체보험이 있어도 개인 가재도구와 배상책임 보장은 부족할 수 있다. 전세나 월세 거주자도 가재도구와 배상책임 보장을 검토할 필요가 있다. 보험료는 면적, 건물가액, 보장금액, 특약, 자기부담금에 따라 달라진다. 가성비는 싼 보험료가 아니라 필요한 보장을 적정한 가격에 채우는 것이다. 화재보험은 평소에는 필요성을 느끼기 어렵지만, 사고가 나면 가장 먼저 찾게 되는 보험이다. 큰 뉴스를 보고 불안해졌다면, 지금 살고 있는 집의 단체보험과 개인 보장부터 확인해보는 것이 현실적인 첫걸음이다.
자주 묻는 질문 &nbsp; 아파트 관리비에 화재보험료가 있으면 개인 화재보험은 필요 없을까? &nbsp; 단체 화재보험이 있어도 개인 보장이 충분하다고 단정할 수 없다. 공용부분이나 건물 중심 보장일 수 있으므로, 우리 집 내부 인테리어, 가재도구, 누수 배상, 임시거주비가 포함되는지 확인해야 한다.
세입자도 화재보험에 가입해야 할까? &nbsp; 검토할 필요가 있다. 세입자는 건물 소유자가 아니더라도 본인의 가전제품, 가구 같은 가재도구 손해와 이웃집 피해 배상책임을 질 수 있다. 전세나 월세라면 가재도구 보장과 일상생활배상책임 특약을 중심으로 보는 것이 좋다.
누수는 화재보험으로 보장될까? &nbsp; 상품과 특약에 따라 가능하다. 다만 기본 화재보험에 자동 포함되지 않을 수 있고, 노후 배관 교체비처럼 보장되지 않는 항목도 있다. 가입 전 누수 특약이 우리 집 손해와 아랫집 배상까지 포함하는지 확인해야 한다.`}),search.addEventListener("input",showResults,!0)}function hideSuggestions(e){var t=suggestions.contains(e.target);t||(suggestions.classList.add("d-none"),background!==null&&background.style.setProperty("--image-opacity","0.1"))}function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}function showResults(){const s=5;var t,e=this.value;const o=document.documentElement.lang;t=null,e?(t=index.search(e,{index:["title","description","content"],limit:s,enrich:!0}),background!==null&&background.style.setProperty("--image-opacity","0")):background!==null&&background.style.setProperty("--image-opacity","0.1");const n=new Map;if(t!==null)for(const e of t.flatMap(e=>e.result)){if(n.has(e.doc.href))continue;n.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),n.size===0&&e){const n=suggestions.dataset.noResults,t=document.createElement("div");t.innerHTML=`${n} "<strong>${e}</strong>"`,t.classList.add("suggestion__no-results"),suggestions.appendChild(t);return}for(const[r,a]of n){const o=document.createElement("div");suggestions.appendChild(o);const e=document.createElement("a");e.href=r,o.appendChild(e);const t=document.createElement("span");t.classList.add("text-start"),t.textContent=a.title,t.classList.add("suggestion__title"),e.appendChild(t);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(o),suggestions.childElementCount==s)break}}search!==null&&suggestions!==null&&(document.addEventListener("keydown",inputFocus),document.addEventListener("keydown",suggestionFocus),document.addEventListener("click",hideSuggestions),initIndex());const searchModal=document.getElementById("search-modal");searchModal!==null&&searchModal.addEventListener("shown.bs.modal",function(){const e=document.getElementById("search-input-modal");e!==null&&e.focus({focusVisible:!0})});function updateDropdown(e,t,n){const s=document.getElementById(e);s!=null&&(s.querySelector(".dropdown-toggle").textContent=n,s.querySelectorAll(".panel-dropdown .dropdown-item").forEach(e=>{e.classList.remove("active");let n=e.getAttribute("data-link");n!=null&&(n=n.replace(/^#+/,""),n===t&&e.classList.add("active"))}))}document.querySelectorAll(".panel-dropdown").forEach(e=>{e.addEventListener("hide.bs.dropdown",t=>{if(t.clickEvent!=null){let n=t.clickEvent.srcElement.getAttribute("data-link");if(n!=null){e.querySelectorAll(".panel-dropdown .dropdown-item").forEach(e=>{e.classList.remove("active")}),n=n.replace(/^#+/,"");const s=document.getElementById(n);s!=null&&(t.clickEvent.srcElement.classList.add("active"),e.querySelector(".dropdown-toggle").textContent=t.clickEvent.srcElement.textContent,s.click())}}})}),document.querySelectorAll(".nav-panel .nav-link").forEach(e=>{e.addEventListener("click",t=>{const n=t.srcElement.parentElement.parentElement.getAttribute("data-companion");n!=null&&updateDropdown(n,e.getAttribute("id"),e.textContent.trim())})});const fixed=!0,navbar=document.querySelector(".navbar"),togglers=document.querySelectorAll(".main-nav-toggler"),modeSelectors=document.querySelectorAll(".switch-mode-collapsed"),colorsBG=["body","secondary","tertiary"];let scrollPosition=0;function sleep(e){return new Promise(t=>setTimeout(t,e))}function getStyle(e,t){let n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function updateNavbarColor(){const t=window.pageYOffset,s=t+navbar.offsetHeight;let e=null;const o=document.querySelectorAll("article,section,footer");let n=-1;o.forEach(o=>{const a=o.getBoundingClientRect(),i=t+a.top,r=i+o.offsetHeight-1;if(t<=r&&s>=i){let t=getStyle(o,"z-index");t==="auto"&&(t=1),t>n&&(e=o,n=t)}}),e||(e=document.querySelector("main")),e&&adaptToSection(e)}function getBackgroundColor(e){let t=window.getComputedStyle(e).backgroundColor;return(t==="rgba(0, 0, 0, 0)"||t==="transparent")&&(t=window.getComputedStyle(document.body).getPropertyValue("background-color")),t}function adaptToSection(e){const n=getBackgroundColor(e),s=isLightColor(e,n),o=document.querySelector(".navbar");s?navbar.dataset.bsTheme!=="light"&&(navbar.dataset.bsTheme="light"):navbar.dataset.bsTheme!=="dark"&&(navbar.dataset.bsTheme="dark");const t=parseRGB(n);t&&(navbar.style.backgroundColor=`rgba(${t.r},${t.g},${t.b},.4)`)}function isLightColor(e,t){if(e.dataset.bsTheme==="light")return!0;if(e.dataset.bsTheme==="dark")return!1;const n=parseRGB(t);if(!n)return!0;const s=calculateLuminance(n.r,n.g,n.b);return s>.5}function parseRGB(e){const t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return t?{r:parseInt(t[1]),g:parseInt(t[2]),b:parseInt(t[3])}:null}function calculateLuminance(e,t,n){const[s,o,i]=[e,t,n].map(e=>(e=e/255,e<=.03928?e/12.92:((e+.055)/1.055)**2.4));return.2126*s+.7152*o+.0722*i}function updateNavbar(){if(navbar.dataset.transparent)window.scrollY>0?navbar.classList.add("navbar-scrolled"):navbar.classList.remove("navbar-scrolled"),updateNavbarColor(),window.scrollY===0&&(navbar.style.backgroundColor="");else{let e;if(typeof getLocalStorage=="function"&&(e=getLocalStorage("theme",null,"functional")),window.scrollY>75)navbar.classList.add("nav-active"),e&&navbar.setAttribute("data-bs-theme",e);else{navbar.classList.remove("nav-active");const t=navbar.getAttribute("data-bs-overlay"),n=t||e;n&&navbar.setAttribute("data-bs-theme",t)}}}if(navbar!==null&&window.performance.getEntriesByType&&window.performance.getEntriesByType("navigation")[0].type==="reload"&&fixed&&updateNavbar(),navbar!==null&&togglers!==null){document.addEventListener("DOMContentLoaded",()=>{fixed&&updateNavbar()}),window.addEventListener("resize",()=>{fixed&&updateNavbar();for(let e=0;e<togglers.length;++e){const t=togglers[e];t.getAttribute("aria-expanded")==="true"&&t.click()}}),document.addEventListener("scroll",()=>fixed&&updateNavbar()),document.querySelectorAll(".navbar-collapse").forEach(e=>{e.addEventListener("show.bs.collapse",function(){scrollPosition=window.pageYOffset,document.body.style.top=`-${scrollPosition}px`,document.body.classList.add("navbar-open")}),e.addEventListener("hide.bs.collapse",function(){document.body.classList.remove("navbar-open"),document.body.style.top="",window.scrollTo({top:scrollPosition,behavior:"instant"})})});const e=document.querySelector("html"),t={attributes:!0,attributeFilter:["data-bs-theme"]},n=new MutationObserver(()=>{fixed&&sleep(600).then(()=>{updateNavbar()})});if(n.observe(e,t),!navbar.dataset.transparent){const e=navbar.getAttribute("data-navbar-color")||"body",t=colorsBG.includes(e)?`var(--bs-${e}-bg)`:`var(--bs-navbar-color-${e})`;navbar.style.setProperty("--bs-navbar-expanded-color",t)}for(let e=0;e<togglers.length;++e)togglers[e].onclick=()=>{navbar.classList.toggle("navbar-expanded")};for(let e=0;e<modeSelectors.length;++e)modeSelectors[e].onclick=()=>{for(let e=0;e<togglers.length;++e){const t=togglers[e];t.getAttribute("aria-expanded")==="true"&&t.click()}}}const popoverTriggerList=document.querySelectorAll('[data-bs-toggle="popover"]'),popoverList=[...popoverTriggerList].map(e=>new bootstrap.Popover(e));function webShareAPI(e,t,n){navigator.share({title:e,text:t,url:n}).then(()=>console.log("Successful share")).catch(e=>console.log("Error sharing",e))}const shareButtons=document.querySelectorAll("[data-sharing-url]");shareButtons.forEach(e=>{if(navigator.share){const t=e.getAttribute("data-sharing-title"),n=e.getAttribute("data-sharing-description"),s=e.getAttribute("data-sharing-url");e.style.display="block",e.addEventListener("click",()=>webShareAPI(t,n,s))}else e.style.display="none"}),function(){"use strict";var e="sidebar-secondary-collapsed";function t(){var t,n,s,o,i=document.querySelector(".sidebar-collapsible");if(!i)return;if(t=i.querySelector('[data-bs-toggle="collapse"][data-bs-target^="#sidebar-secondary-"]'),!t)return;if(n=document.querySelector(t.getAttribute("data-bs-target")),!n)return;s=!0;try{o=localStorage.getItem(e),o!==null&&(s=o==="1")}catch{}s||(n.classList.add("show"),t.setAttribute("aria-expanded","true")),n.addEventListener("show.bs.collapse",function(){t.setAttribute("aria-expanded","true");try{localStorage.setItem(e,"0")}catch{}}),n.addEventListener("hide.bs.collapse",function(){t.setAttribute("aria-expanded","false");try{localStorage.setItem(e,"1")}catch{}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()}(),function(){"use strict";function e(e,t){var n,s,o=e.getAttribute("data-storage-key")||"sidebar-collapsed";e.classList.toggle("sidebar-collapsed",t),n=e.querySelector(".sidebar-toggle-btn"),n&&n.setAttribute("aria-expanded",String(!t)),typeof bootstrap!="undefined"&&(s=e.querySelectorAll("[data-sidebar-label]"),t?s.forEach(function(e){e.setAttribute("data-bs-toggle","tooltip"),e.setAttribute("data-bs-placement","right"),e.setAttribute("title",e.getAttribute("data-sidebar-label")),bootstrap.Tooltip.getInstance(e)||new bootstrap.Tooltip(e)}):s.forEach(function(e){var t=bootstrap.Tooltip.getInstance(e);t&&t.dispose(),e.removeAttribute("data-bs-toggle"),e.removeAttribute("data-bs-placement"),e.removeAttribute("title")}));try{localStorage.setItem(o,t?"1":"0")}catch{}e.dispatchEvent(new CustomEvent("hinode:sidebar-toggle",{bubbles:!0,detail:{collapsed:t}}))}function t(){var n,s,o,t=document.querySelector(".sidebar-collapsible");if(!t)return;if(n=t.querySelector(".sidebar-toggle-btn"),!n)return;o=t.getAttribute("data-storage-key")||"sidebar-collapsed",s=!1;try{s=localStorage.getItem(o)==="1"}catch{}t.classList.add("sidebar-no-transition"),e(t,s),document.documentElement.classList.remove("sidebar-pre-collapsed"),t.offsetHeight,t.classList.remove("sidebar-no-transition"),n.addEventListener("click",function(){e(t,!t.classList.contains("sidebar-collapsed"))})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()}();function adjustCarouselHeight(){let e=0;document.querySelectorAll(".testimonials .carousel-item").forEach(t=>{const n=t.cloneNode(!0);n.style.display="block",n.style.visibility="hidden",n.style.height="auto",t.parentNode.appendChild(n),n.offsetHeight>e&&(e=n.offsetHeight),t.parentNode.removeChild(n)}),document.querySelectorAll(".testimonials .carousel-item").forEach(t=>{t.style.height=e+"px"})}window.addEventListener("load",()=>{adjustCarouselHeight()}),window.addEventListener("resize",()=>{adjustCarouselHeight()});const container=document.getElementById("toast-container");container!==null&&document.querySelectorAll("[data-toast-target]").forEach(e=>{const t=document.getElementById(e.getAttribute("data-toast-target"));if(t!==null){container.appendChild(t);const n=bootstrap.Toast.getOrCreateInstance(t);n!==null&&e.addEventListener("click",()=>{n.show()})}});const btnTOCShowMore=document.getElementById("btnTOCShowMore");btnTOCShowMore!==null&&btnTOCShowMore.addEventListener("click",e=>{btnTOCShowMore.style.display="none"});const btnTOCShowLess=document.getElementById("btnTOCShowLess");btnTOCShowLess!==null&&btnTOCShowMore!==null&&btnTOCShowLess.addEventListener("click",e=>{btnTOCShowMore.style.display="initial"});const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map(e=>new bootstrap.Tooltip(e));document.querySelectorAll("[data-video-padding]").forEach(e=>{e.style.paddingBottom=e.getAttribute("data-video-padding")})