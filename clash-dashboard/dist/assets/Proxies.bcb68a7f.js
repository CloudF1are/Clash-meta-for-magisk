var ze=Object.defineProperty,Fe=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var te=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))Ie.call(t,n)&&te(e,n,t[n]);if(ee)for(var n of ee(t))Be.call(t,n)&&te(e,n,t[n]);return e},B=(e,t)=>Fe(e,je(t));import{r as g,j as s,P as R,b as d,B as b,h as m,W as qe,c as k,X as We,Y as he,Z as fe,d as x,_ as He,F as D,$ as Ge,a0 as pe,a1 as V,A as Ue,w as $,a2 as Ve,a3 as Ke,a4 as G,a5 as Ye,a6 as ve,a7 as K,a8 as Y,H as Ze,a9 as Xe,aa as Qe,u as Z,ab as Je,ac as ye,R as et,ad as tt,g as me,C as _e,D as ne,ae as nt,m as re,M as rt,af as ot,ag as st,ah as it,ai as at}from"./index.2523f2de.js";import{C as ct}from"./chevron-down.64d9c587.js";import{F as lt,p as ut,A as dt,I as ht}from"./Fab.682d45b2.js";import{R as ft,T as pt}from"./TextFitler.b3e6ca66.js";import{f as vt}from"./index.cd34981b.js";import{R as yt}from"./rotate-cw.ce23167a.js";import{S as mt}from"./Select.ad5edaf5.js";import"./debounce.d080d5e1.js";function _t(e,t){if(e==null)return{};var n=bt(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function bt(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var X=g.exports.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=e.size,i=o===void 0?24:o,a=_t(e,["color","size"]);return s("svg",B(I({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),{children:s("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}))});X.propTypes={color:R.string,size:R.oneOfType([R.string,R.number])};X.displayName="Zap";var S=X,be=function(){if(typeof Map!="undefined")return Map;function e(t,n){var r=-1;return t.some(function(o,i){return o[0]===n?(r=i,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),o=this.__entries__[r];return o&&o[1]},t.prototype.set=function(n,r){var o=e(this.__entries__,n);~o?this.__entries__[o][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,o=e(r,n);~o&&r.splice(o,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var a=i[o];n.call(r,a[1],a[0])}},t}()}(),U=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,N=function(){return typeof global!="undefined"&&global.Math===Math?global:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),gt=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(N):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),wt=2;function xt(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&c()}function a(){gt(i)}function c(){var l=Date.now();if(n){if(l-o<wt)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=l}return c}var Ct=20,Ot=["top","right","bottom","left","width","height","size","weight"],Pt=typeof MutationObserver!="undefined",kt=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=xt(this.refresh.bind(this),Ct)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!U||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Pt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!U||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,o=Ot.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ge=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},w=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||N},we=z(0,0,0,0);function M(e){return parseFloat(e)||0}function oe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+M(i)},0)}function St(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var i=o[r],a=e["padding-"+i];n[i]=M(a)}return n}function Et(e){var t=e.getBBox();return z(0,0,t.width,t.height)}function Rt(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return we;var r=w(e).getComputedStyle(e),o=St(r),i=o.left+o.right,a=o.top+o.bottom,c=M(r.width),l=M(r.height);if(r.boxSizing==="border-box"&&(Math.round(c+i)!==t&&(c-=oe(r,"left","right")+i),Math.round(l+a)!==n&&(l-=oe(r,"top","bottom")+a)),!Tt(e)){var u=Math.round(c+i)-t,h=Math.round(l+a)-n;Math.abs(u)!==1&&(c-=u),Math.abs(h)!==1&&(l-=h)}return z(o.left,o.top,c,l)}var At=function(){return typeof SVGGraphicsElement!="undefined"?function(e){return e instanceof w(e).SVGGraphicsElement}:function(e){return e instanceof w(e).SVGElement&&typeof e.getBBox=="function"}}();function Tt(e){return e===w(e).document.documentElement}function Lt(e){return U?At(e)?Et(e):Rt(e):we}function Nt(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,a=Object.create(i.prototype);return ge(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}function z(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Mt=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=z(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Lt(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Dt=function(){function e(t,n){var r=Nt(n);ge(this,{target:t,contentRect:r})}return e}(),$t=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new be,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof w(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Mt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof w(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Dt(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),xe=typeof WeakMap!="undefined"?new WeakMap:new be,Ce=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=kt.getInstance(),r=new $t(t,n,this);xe.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Ce.prototype[e]=function(){var t;return(t=xe.get(this))[e].apply(t,arguments)}});var zt=function(){return typeof N.ResizeObserver!="undefined"?N.ResizeObserver:Ce}();const Ft="_FlexCenter_1380a_1";var jt={FlexCenter:Ft};function It({children:e}){return s("div",{className:jt.FlexCenter,children:e})}const{useRef:se,useEffect:Bt}=m;function qt({onClickPrimaryButton:e,onClickSecondaryButton:t}){const n=se(null),r=se(null);return Bt(()=>{n.current.focus()},[]),d("div",{onKeyDown:i=>{i.keyCode===39?r.current.focus():i.keyCode===37&&n.current.focus()},children:[s("h2",{children:"Close Connections?"}),s("p",{children:'Click "Yes" to close those connections that are still using the old selected proxy in this group'}),s("div",{style:{height:30}}),d(It,{children:[s(b,{onClick:e,ref:n,children:"Yes"}),s("div",{style:{width:20}}),s(b,{onClick:t,ref:r,children:"No"})]})]})}const Wt="_header_1y9js_1",Ht="_arrow_1y9js_8",Gt="_isOpen_1y9js_13",Ut="_btn_1y9js_20",Vt="_qty_1y9js_25";var C={header:Wt,arrow:Ht,isOpen:Gt,btn:Ut,qty:Vt};function Oe({name:e,type:t,toggle:n,isOpen:r,qty:o}){const i=g.exports.useCallback(a=>{a.preventDefault(),(a.key==="Enter"||a.key===" ")&&n()},[n]);return d("div",{className:C.header,onClick:n,style:{cursor:"pointer"},tabIndex:0,onKeyDown:i,role:"button",children:[s("div",{children:s(qe,{name:e,type:t})}),typeof o=="number"?s("span",{className:C.qty,children:o}):null,s(b,{kind:"minimal",onClick:n,className:C.btn,title:"Toggle collapsible section",children:s("span",{className:k(C.arrow,{[C.isOpen]:r}),children:s(ct,{size:20})})})]})}const{useMemo:Kt}=m;function Yt(e,t){return e.filter(n=>{const r=t[n];return r===void 0?!0:r.number!==0})}const A=(e,t)=>{if(e&&typeof e.number=="number"&&e.number>0)return e.number;const n=t&&t.type;return n&&fe.indexOf(n)>-1?-1:999999},Zt={Natural:e=>e,LatencyAsc:(e,t,n)=>e.sort((r,o)=>{const i=A(t[r],n&&n[r]),a=A(t[o],n&&n[o]);return i-a}),LatencyDesc:(e,t,n)=>e.sort((r,o)=>{const i=A(t[r],n&&n[r]);return A(t[o],n&&n[o])-i}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,n)=>t>n?-1:t<n?1:0)};function Xt(e,t){const n=t.toLowerCase().split(" ").map(r=>r.trim()).filter(r=>!!r);return n.length===0?e:e.filter(r=>{let o=0;for(;o<n.length;o++){const i=n[o];if(r.toLowerCase().indexOf(i)>-1)return!0}return!1})}function Qt(e,t,n,r,o,i){let a=[...e];return n&&(a=Yt(e,t)),typeof r=="string"&&r!==""&&(a=Xt(a,r)),Zt[o](a,t,i)}function Pe(e,t,n,r,o){const[i]=We(he);return Kt(()=>Qt(e,t,n,i,r,o),[e,t,n,i,r,o])}const Jt="_header_1g0y5_1",en="_zapWrapper_1g0y5_5";var ke={header:Jt,zapWrapper:en};const Se={Right:39,Left:37,Enter:13,Space:32},tn="_proxy_1j7mi_1",nn="_now_1j7mi_25",rn="_error_1j7mi_29",on="_selectable_1j7mi_32",sn="_proxyType_1j7mi_40",an="_row_1j7mi_51",cn="_proxyName_1j7mi_57",ln="_proxySmall_1j7mi_71";var y={proxy:tn,now:nn,error:rn,selectable:on,proxyType:sn,row:an,proxyName:cn,proxySmall:ln};const un="_proxyLatency_1sj9a_1";var dn={proxyLatency:un};function hn({number:e,color:t}){return s("span",{className:dn.proxyLatency,style:{color:t},children:d("span",{children:[e," ms"]})})}const{useMemo:P}=m,O={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function Ee({number:e}={}){return e===0?O.na:e<600?O.good:e<1000?O.normal:typeof e=="number"?O.bad:O.na}function fn(e,t){return fe.indexOf(t)>-1?"linear-gradient(135deg, white 15%, #999 15% 30%, white 30% 45%, #999 45% 60%, white 60% 75%, #999 75% 90%, white 90% 100%)":Ee(e)}function pn({now:e,name:t,proxy:n,latency:r,isSelectable:o,onClick:i}){const a=P(()=>fn(r,n.type),[r,n]),c=P(()=>{let f=t;return r&&typeof r.number=="number"&&(f+=" "+r.number+" ms"),f},[t,r]),l=g.exports.useCallback(()=>{o&&i&&i(t)},[t,i,o]),u=P(()=>k(y.proxySmall,{[y.now]:e,[y.selectable]:o}),[o,e]),h=g.exports.useCallback(f=>{f.keyCode===Se.Enter&&l()},[l]);return s("div",{title:c,className:u,style:{background:a},onClick:l,onKeyDown:h,role:o?"menuitem":""})}function vn(e){return e==="Shadowsocks"?"SS":e}const yn=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function mn({children:e,label:t,"aria-label":n}){const[r,o]=He();return d(D,{children:[g.exports.cloneElement(e,r),s(Ge,B(I({},o),{label:t,"aria-label":n,position:yn}))]})}function _n({now:e,name:t,proxy:n,latency:r,isSelectable:o,onClick:i}){const a=P(()=>Ee(r),[r]),c=g.exports.useCallback(()=>{o&&i&&i(t)},[t,i,o]),l=g.exports.useCallback(h=>{h.keyCode===Se.Enter&&c()},[c]),u=P(()=>k(y.proxy,{[y.now]:e,[y.error]:r&&r.error,[y.selectable]:o}),[o,e,r]);return d("div",{tabIndex:0,className:u,onClick:c,onKeyDown:l,role:o?"menuitem":"",children:[s("div",{className:y.proxyName,children:s(mn,{label:t,"aria-label":"proxy name: "+t,children:s("span",{children:t})})}),d("div",{className:y.row,children:[s("span",{className:y.proxyType,style:{opacity:e?.6:.2},children:vn(n.type)}),r&&r.number?s(hn,{number:r.number,color:a}):null]})]})}const Re=(e,{name:t})=>{const n=pe(e),r=V(e);return{proxy:n[t],latency:r[t]}},bn=x(Re)(_n),gn=x(Re)(pn),wn="_list_10y5m_1",xn="_listSummaryView_10y5m_8";var Ae={list:wn,listSummaryView:xn};function Te({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){const o=e;return s("div",{className:Ae.list,children:o.map(i=>s(bn,{onClick:r,isSelectable:n,name:i,now:i===t},i))})}function Le({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){return s("div",{className:Ae.listSummaryView,children:e.map(o=>s(gn,{onClick:r,isSelectable:n,name:o,now:o===t},o))})}const{createElement:Cn,useCallback:q,useMemo:On,useState:Pn}=m;function kn(){return s("div",{className:ke.zapWrapper,children:s(S,{size:16})})}function Sn({name:e,all:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,proxies:i,type:a,now:c,isOpen:l,apiConfig:u,dispatch:h}){const f=Pe(t,n,r,o,i),{data:v}=Ue(["/version",u],()=>Ze("/version",u)),_=On(()=>["Selector",v.meta&&"Fallback"].includes(a),[a,v.meta]),{app:{updateCollapsibleIsOpen:p}}=$(),E=q(()=>{p("proxyGroup",e,!l)},[l,p,e]),F=q(J=>{!_||h(Ve(u,e,J))},[u,h,e,_]),[j,Q]=Pn(!1),$e=q(async()=>{Q(!0);try{v.meta==!0?(await Ke(u,e),await h(G(u))):(await Ye(u,f),await h(G(u)))}catch{}Q(!1)},[f,u,h,e,v.meta]);return d("div",{className:ke.group,children:[d("div",{style:{display:"flex",alignItems:"center"},children:[s(Oe,{name:e,type:a,toggle:E,qty:f.length,isOpen:l}),s(b,{title:"Test latency",kind:"minimal",onClick:$e,isLoading:j,children:s(kn,{})})]}),Cn(l?Te:Le,{all:f,now:c,isSelectable:_,itemOnTapCallback:F})]})}const En=x((e,{name:t,delay:n})=>{const r=pe(e),o=ve(e),i=K(e),a=Y(e),c=r[t],{all:l,type:u,now:h}=c;return{all:l,delay:n,hideUnavailableProxies:a,proxySortBy:i,proxies:r,type:u,now:h,isOpen:o[`proxyGroup:${t}`]}})(Sn),{useCallback:Ne,useState:Rn}=m;function An({dispatch:e,apiConfig:t,name:n}){return Ne(()=>e(Xe(t,n)),[t,e,n])}function Tn({dispatch:e,apiConfig:t,names:n}){const[r,o]=Rn(!1);return[Ne(async()=>{if(!r){o(!0);try{await e(Qe(t,n))}catch{}o(!1)}},[t,e,n,r]),r]}const{useState:Ln,useCallback:Nn}=m;function Mn({isLoading:e}){return e?s(ht,{children:s(S,{width:16,height:16})}):s(S,{width:16,height:16})}function Dn({dispatch:e,apiConfig:t}){const[n,r]=Ln(!1);return[Nn(()=>{n||(r(!0),e(Je(t)).then(()=>r(!1),()=>r(!1)))},[t,e,n]),n]}function $n({dispatch:e,apiConfig:t,proxyProviders:n}){const{t:r}=Z(),[o,i]=Dn({dispatch:e,apiConfig:t}),[a,c]=Tn({apiConfig:t,dispatch:e,names:n.map(l=>l.name)});return s(lt,{icon:s(Mn,{isLoading:i}),onClick:o,text:r("Test Latency"),style:ut,children:n.length>0?s(dt,{text:r("update_all_proxy_provider"),onClick:a,children:s(ft,{isRotating:c})}):null})}const{memo:zn,useState:Fn,useRef:Me,useEffect:De}=et;function jn(e){const t=Me();return De(()=>void(t.current=e),[e]),t.current}function In(){const e=Me(),[t,n]=Fn({height:0});return De(()=>{const r=new zt(([o])=>n(o.contentRect));return e.current&&r.observe(e.current),()=>r.disconnect()},[]),[e,t]}const Bn={initialOpen:{height:"auto",transition:{duration:0}},open:e=>({height:e,opacity:1,visibility:"visible",transition:{duration:.3}}),closed:{height:0,opacity:0,visibility:"hidden",overflowY:"hidden",transition:{duration:.3}}},qn={open:{},closed:{}},ie=zn(({children:e,isOpen:t})=>{const r=ye.read().motion,o=jn(t),[i,{height:a}]=In();return s("div",{children:s(r.div,{animate:t&&o===t?"initialOpen":t?"open":"closed",custom:a,variants:Bn,children:s(r.div,{variants:qn,ref:i,children:e})})})}),Wn="_updatedAt_1ql33_1",Hn="_body_1ql33_8",Gn="_actionFooter_1ql33_17",Un="_refresh_1ql33_27";var L={updatedAt:Wn,body:Hn,actionFooter:Gn,refresh:Un};const{useState:Vn,useCallback:ae}=m;function Kn({name:e,proxies:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,vehicleType:i,updatedAt:a,isOpen:c,dispatch:l,apiConfig:u}){const h=Pe(t,n,r,o),[f,v]=Vn(!1),_=An({dispatch:l,apiConfig:u,name:e}),p=ae(async()=>{v(!0),await l(tt(u,e)),v(!1)},[u,l,e,v]),{app:{updateCollapsibleIsOpen:E}}=$(),F=ae(()=>{E("proxyProvider",e,!c)},[c,E,e]),j=vt(new Date(a),new Date);return d("div",{className:L.body,children:[d("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[s(Oe,{name:e,toggle:F,type:i,isOpen:c,qty:h.length}),s(b,{kind:"minimal",start:s(ce,{}),onClick:_}),s(b,{kind:"minimal",start:s(S,{size:16}),onClick:p,isLoading:f})]}),s("div",{className:L.updatedAt,children:d("small",{children:["Updated ",j," ago"]})}),d(ie,{isOpen:c,children:[s(Te,{all:h}),d("div",{className:L.actionFooter,children:[s(b,{text:"Update",start:s(ce,{}),onClick:_}),s(b,{text:"Health Check",start:s(S,{size:16}),onClick:p,isLoading:f})]})]}),s(ie,{isOpen:!c,children:s(Le,{all:h})})]})}const Yn={rest:{scale:1},pressed:{scale:.95}},Zn={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function ce(){const t=ye.read().motion;return s(t.div,{className:L.refresh,variants:Yn,initial:"rest",whileHover:"hover",whileTap:"pressed",children:s(t.div,{className:"flexCenter",variants:Zn,children:s(yt,{size:16})})})}const Xn=(e,{proxies:t,name:n})=>{const r=Y(e),o=V(e),i=ve(e),a=me(e),c=K(e);return{apiConfig:a,proxies:t,delay:o,hideUnavailableProxies:r,proxySortBy:c,isOpen:i[`proxyProvider:${n}`]}},Qn=x(Xn)(Kn);function Jn({items:e}){return e.length===0?null:d(D,{children:[s(_e,{title:"代理组"}),s("div",{children:e.map(t=>s(Qn,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt},t.name))})]})}const er="_labeledInput_cmki0_1";var W={labeledInput:er};const tr=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:le}=m;function nr({appConfig:e}){const{app:{updateAppConfig:t}}=$(),n=le(i=>{t("proxySortBy",i.target.value)},[t]),r=le(i=>{t("hideUnavailableProxies",i)},[t]),{t:o}=Z();return d(D,{children:[d("div",{className:W.labeledInput,children:[s("span",{children:o("sort_in_grp")}),s("div",{children:s(mt,{options:tr.map(i=>[i[0],o(i[1])]),selected:e.proxySortBy,onChange:n})})]}),s("hr",{}),d("div",{className:W.labeledInput,children:[s("span",{children:o("hide_unavail_proxies")}),s("div",{children:s(ne,{name:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:r})})]}),d("div",{className:W.labeledInput,children:[s("span",{children:o("auto_close_conns")}),s("div",{children:s(ne,{name:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:i=>t("autoCloseOldConns",i)})})]})]})}const rr=e=>{const t=K(e),n=Y(e),r=nt(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:n,autoCloseOldConns:r}}};var or=x(rr)(nr);const sr="_overlay_uuk3b_1",ir="_cnt_uuk3b_5",ar="_afterOpen_uuk3b_16";var H={overlay:sr,cnt:ir,afterOpen:ar};const{useMemo:cr}=m;function ue({isOpen:e,onRequestClose:t,children:n}){const r=cr(()=>({base:k(re.content,H.cnt),afterOpen:H.afterOpen,beforeClose:""}),[]);return s(rt,{isOpen:e,onRequestClose:t,className:r,overlayClassName:k(re.overlay,H.overlay),children:n})}function lr({color:e="currentColor",size:t=24}){return d("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s("path",{d:"M2 6h9M18.5 6H22"}),s("circle",{cx:"16",cy:"6",r:"2"}),s("path",{d:"M22 18h-9M6 18H2"}),s("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const ur="_topBar_jgy4z_1",dr="_topBarRight_jgy4z_13",hr="_textFilterContainer_jgy4z_22",fr="_group_jgy4z_29";var T={topBar:ur,topBarRight:dr,textFilterContainer:hr,group:fr};const{useState:pr,useEffect:vr,useCallback:de,useRef:yr}=m;function mr({dispatch:e,groupNames:t,delay:n,proxyProviders:r,apiConfig:o,showModalClosePrevConns:i}){const a=yr({}),c=de(()=>{a.current.startAt=Date.now(),e(G(o)).then(()=>{a.current.completeAt=Date.now()})},[o,e]);vr(()=>{c();const p=()=>{a.current.startAt&&Date.now()-a.current.startAt>3e4&&c()};return window.addEventListener("focus",p,!1),()=>window.removeEventListener("focus",p,!1)},[c]);const[l,u]=pr(!1),h=de(()=>{u(!1)},[]),{proxies:{closeModalClosePrevConns:f,closePrevConnsAndTheModal:v}}=$(),{t:_}=Z();return d(D,{children:[s(ue,{isOpen:l,onRequestClose:h,children:s(or,{})}),d("div",{className:T.topBar,children:[s(_e,{title:_("Proxies")}),d("div",{className:T.topBarRight,children:[s("div",{className:T.textFilterContainer,children:s(pt,{textAtom:he})}),s(ot,{label:_("settings"),children:s(b,{kind:"minimal",onClick:()=>u(!0),children:s(lr,{size:16})})})]})]}),s("div",{children:t.map(p=>s("div",{className:T.group,children:s(En,{name:p,delay:n,apiConfig:o,dispatch:e})},p))}),s(Jn,{items:r}),s("div",{style:{height:60}}),s($n,{dispatch:e,apiConfig:o,proxyProviders:r}),s(ue,{isOpen:i,onRequestClose:f,children:s(qt,{onClickPrimaryButton:()=>v(o),onClickSecondaryButton:f})})]})}const _r=e=>({apiConfig:me(e),groupNames:st(e),proxyProviders:it(e),delay:V(e),showModalClosePrevConns:at(e)});var Er=x(_r)(mr);export{Er as default};
