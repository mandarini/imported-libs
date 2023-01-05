import{_ as V,a as ae,b as R,d as ue}from"./DocsRenderer-QMFTTPNP-d5af38ae.js";import{_ as z,a as X}from"./chunk-NNAAFZ4U-67fa674f.js";import{r as d,R as y}from"./index-f1f749bf.js";import{m as le,e as H,l as E}from"./index-92319c13.js";import{s as ce}from"./index-d475d2ea.js";import{r as q}from"./_getPrototype-f7a23558.js";import"./iframe-ef959520.js";import"../sb-preview/runtime.mjs";import"./preview-839d9053.js";import"./_commonjsHelpers-042e6b4d.js";var se=z({"../../node_modules/react-fast-compare/index.js"(r,n){var o=typeof Element<"u",e=typeof Map=="function",i=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(t,u){if(t===u)return!0;if(t&&u&&typeof t=="object"&&typeof u=="object"){if(t.constructor!==u.constructor)return!1;var c,a,p;if(Array.isArray(t)){if(c=t.length,c!=u.length)return!1;for(a=c;a--!==0;)if(!l(t[a],u[a]))return!1;return!0}var f;if(e&&t instanceof Map&&u instanceof Map){if(t.size!==u.size)return!1;for(f=t.entries();!(a=f.next()).done;)if(!u.has(a.value[0]))return!1;for(f=t.entries();!(a=f.next()).done;)if(!l(a.value[1],u.get(a.value[0])))return!1;return!0}if(i&&t instanceof Set&&u instanceof Set){if(t.size!==u.size)return!1;for(f=t.entries();!(a=f.next()).done;)if(!u.has(a.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(u)){if(c=t.length,c!=u.length)return!1;for(a=c;a--!==0;)if(t[a]!==u[a])return!1;return!0}if(t.constructor===RegExp)return t.source===u.source&&t.flags===u.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===u.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===u.toString();if(p=Object.keys(t),c=p.length,c!==Object.keys(u).length)return!1;for(a=c;a--!==0;)if(!Object.prototype.hasOwnProperty.call(u,p[a]))return!1;if(o&&t instanceof Element)return!1;for(a=c;a--!==0;)if(!((p[a]==="_owner"||p[a]==="__v"||p[a]==="__o")&&t.$$typeof)&&!l(t[p[a]],u[p[a]]))return!1;return!0}return t!==t&&u!==u}n.exports=function(t,u){try{return l(t,u)}catch(c){if((c.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw c}}}}),de=z({"../../node_modules/warning/warning.js"(r,n){var o=function(){};n.exports=o}}),G=d.createContext(),J=d.createContext();function pe(r){var n=r.children,o=d.useState(null),e=o[0],i=o[1],s=d.useRef(!1);d.useEffect(function(){return function(){s.current=!0}},[]);var l=d.useCallback(function(t){s.current||i(t)},[]);return d.createElement(G.Provider,{value:e},d.createElement(J.Provider,{value:l},n))}var K=function(r){return Array.isArray(r)?r[0]:r},Q=function(r){if(typeof r=="function"){for(var n=arguments.length,o=new Array(n>1?n-1:0),e=1;e<n;e++)o[e-1]=arguments[e];return r.apply(void 0,o)}},U=function(r,n){if(typeof r=="function")return Q(r,n);r!=null&&(r.current=n)},j=function(r){return r.reduce(function(n,o){var e=o[0],i=o[1];return n[e]=i,n},{})},I=typeof window<"u"&&window.document&&window.document.createElement?d.useLayoutEffect:d.useEffect,fe=X(se()),ge=[],me=function(r,n,o){o===void 0&&(o={});var e=d.useRef(null),i={onFirstUpdate:o.onFirstUpdate,placement:o.placement||"bottom",strategy:o.strategy||"absolute",modifiers:o.modifiers||ge},s=d.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),l=s[0],t=s[1],u=d.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var f=p.state,w=Object.keys(f.elements);q.flushSync(function(){t({styles:j(w.map(function(m){return[m,f.styles[m]||{}]})),attributes:j(w.map(function(m){return[m,f.attributes[m]]}))})})},requires:["computeStyles"]}},[]),c=d.useMemo(function(){var p={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return(0,fe.default)(e.current,p)?e.current||p:(e.current=p,p)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),a=d.useRef();return I(function(){a.current&&a.current.setOptions(c)},[c]),I(function(){if(!(r==null||n==null)){var p=o.createPopper||ue,f=p(r,n,c);return a.current=f,function(){f.destroy(),a.current=null}}},[r,n,o.createPopper]),{state:a.current?a.current.state:null,styles:l.styles,attributes:l.attributes,update:a.current?a.current.update:null,forceUpdate:a.current?a.current.forceUpdate:null}},ve=function(){},we=function(){return Promise.resolve(null)},he=[];function ye(r){var n=r.placement,o=n===void 0?"bottom":n,e=r.strategy,i=e===void 0?"absolute":e,s=r.modifiers,l=s===void 0?he:s,t=r.referenceElement,u=r.onFirstUpdate,c=r.innerRef,a=r.children,p=d.useContext(G),f=d.useState(null),w=f[0],m=f[1],b=d.useState(null),C=b[0],P=b[1];d.useEffect(function(){U(c,w)},[c,w]);var k=d.useMemo(function(){return{placement:o,strategy:i,onFirstUpdate:u,modifiers:[].concat(l,[{name:"arrow",enabled:C!=null,options:{element:C}}])}},[o,i,u,l,C]),g=me(t||p,w,k),v=g.state,S=g.styles,x=g.forceUpdate,M=g.update,A=d.useMemo(function(){return{ref:m,style:S.popper,placement:v?v.placement:o,hasPopperEscaped:v&&v.modifiersData.hide?v.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:v&&v.modifiersData.hide?v.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:S.arrow,ref:P},forceUpdate:x||ve,update:M||we}},[m,P,o,v,S,M,x]);return K(a)(A)}var Te=X(de());function Re(r){var n=r.children,o=r.innerRef,e=d.useContext(J),i=d.useCallback(function(s){U(o,s),Q(e,s)},[o,e]);return d.useEffect(function(){return function(){return U(o,null)}},[]),d.useEffect(function(){(0,Te.default)(Boolean(e),"`Reference` should not be used outside of a `Manager` component.")},[e]),K(n)({ref:i})}var Z=y.createContext({}),T=function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return function(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return n.forEach(function(l){return l&&l.apply(void 0,i)})}},Oe=function(){},Y=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},Ce=function(r,n){if(typeof r=="function")return r(n);r!=null&&(r.current=n)},_=function(r){V(n,r);function n(){for(var e,i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=r.call.apply(r,[this].concat(s))||this,e.observer=void 0,e.tooltipRef=void 0,e.handleOutsideClick=function(t){if(e.tooltipRef&&!e.tooltipRef.contains(t.target)){var u=e.context.parentOutsideClickHandler,c=e.props,a=c.hideTooltip,p=c.clearScheduled;p(),a(),u&&u(t)}},e.handleOutsideRightClick=function(t){if(e.tooltipRef&&!e.tooltipRef.contains(t.target)){var u=e.context.parentOutsideRightClickHandler,c=e.props,a=c.hideTooltip,p=c.clearScheduled;p(),a(),u&&u(t)}},e.addOutsideClickHandler=function(){document.body.addEventListener("touchend",e.handleOutsideClick),document.body.addEventListener("click",e.handleOutsideClick)},e.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",e.handleOutsideClick),document.body.removeEventListener("click",e.handleOutsideClick)},e.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",e.handleOutsideRightClick)},e.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",e.handleOutsideRightClick)},e.getTooltipRef=function(t){e.tooltipRef=t,Ce(e.props.innerRef,t)},e.getArrowProps=function(t){return t===void 0&&(t={}),R({},t,{style:R({},t.style,e.props.arrowProps.style)})},e.getTooltipProps=function(t){return t===void 0&&(t={}),R({},t,e.isTriggeredBy("hover")&&{onMouseEnter:T(e.props.clearScheduled,t.onMouseEnter),onMouseLeave:T(e.props.hideTooltip,t.onMouseLeave)},{style:R({},t.style,e.props.style)})},e.contextValue={isParentNoneTriggered:e.props.trigger==="none",addParentOutsideClickHandler:e.addOutsideClickHandler,addParentOutsideRightClickHandler:e.addOutsideRightClickHandler,parentOutsideClickHandler:e.handleOutsideClick,parentOutsideRightClickHandler:e.handleOutsideRightClick,removeParentOutsideClickHandler:e.removeOutsideClickHandler,removeParentOutsideRightClickHandler:e.removeOutsideRightClickHandler},e}var o=n.prototype;return o.componentDidMount=function(){var e=this,i=this.observer=new MutationObserver(function(){e.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,l=s.removeParentOutsideClickHandler,t=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),l&&l(),t&&t()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,i=e.isParentNoneTriggered,s=e.addParentOutsideClickHandler,l=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&l&&l()}},o.render=function(){var e=this.props,i=e.arrowProps,s=e.placement,l=e.tooltip;return y.createElement(Z.Provider,{value:this.contextValue},l({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(e){var i=this.props.trigger;return i===e||Array.isArray(i)&&i.includes(e)},n}(d.Component);_.contextType=Z;var be={childList:!0,subtree:!0},ee=function(r){V(n,r);function n(){for(var e,i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=r.call.apply(r,[this].concat(s))||this,e.state={tooltipShown:e.props.defaultTooltipShown},e.hideTimeout=void 0,e.showTimeout=void 0,e.popperOffset=void 0,e.setTooltipState=function(t){var u=function(){return e.props.onVisibilityChange(t.tooltipShown)};e.isControlled()?u():e.setState(t,u)},e.clearScheduled=function(){clearTimeout(e.hideTimeout),clearTimeout(e.showTimeout)},e.showTooltip=function(t){var u=t.pageX,c=t.pageY;e.clearScheduled();var a={tooltipShown:!0};e.props.followCursor&&(a=R({},a,{pageX:u,pageY:c})),e.showTimeout=window.setTimeout(function(){return e.setTooltipState(a)},e.props.delayShow)},e.hideTooltip=function(){e.clearScheduled(),e.hideTimeout=window.setTimeout(function(){return e.setTooltipState({tooltipShown:!1})},e.props.delayHide)},e.toggleTooltip=function(t){var u=t.pageX,c=t.pageY,a=e.getState()?"hideTooltip":"showTooltip";e[a]({pageX:u,pageY:c})},e.clickToggle=function(t){t.preventDefault();var u=t.pageX,c=t.pageY,a=e.props.followCursor?"showTooltip":"toggleTooltip";e[a]({pageX:u,pageY:c})},e.contextMenuToggle=function(t){t.preventDefault();var u=t.pageX,c=t.pageY,a=e.props.followCursor?"showTooltip":"toggleTooltip";e[a]({pageX:u,pageY:c})},e.getTriggerProps=function(t){return t===void 0&&(t={}),R({},t,e.isTriggeredBy("click")&&{onClick:T(e.clickToggle,t.onClick),onTouchEnd:T(e.clickToggle,t.onTouchEnd)},e.isTriggeredBy("right-click")&&{onContextMenu:T(e.contextMenuToggle,t.onContextMenu)},e.isTriggeredBy("hover")&&R({onMouseEnter:T(e.showTooltip,t.onMouseEnter),onMouseLeave:T(e.hideTooltip,t.onMouseLeave)},e.props.followCursor&&{onMouseMove:T(e.showTooltip,t.onMouseMove)}),e.isTriggeredBy("focus")&&{onFocus:T(e.showTooltip,t.onFocus),onBlur:T(e.hideTooltip,t.onBlur)})},e}var o=n.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var e=this,i=this.props,s=i.children,l=i.tooltip,t=i.placement,u=i.trigger,c=i.getTriggerRef,a=i.modifiers,p=i.closeOnReferenceHidden,f=i.usePortal,w=i.portalContainer,m=i.followCursor,b=i.getTooltipRef,C=i.mutationObserverOptions,P=ae(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),k=y.createElement(ye,R({innerRef:b,placement:t,modifiers:[{name:"followCursor",enabled:m,phase:"main",fn:function(g){e.popperOffset=g.state.rects.popper}}].concat(a)},P),function(g){var v=g.ref,S=g.style,x=g.placement,M=g.arrowProps,A=g.isReferenceHidden,oe=g.update;if(m&&e.popperOffset){var $=e.state,B=$.pageX,L=$.pageY,D=e.popperOffset,F=D.width,N=D.height,ne=B+F>window.pageXOffset+document.body.offsetWidth?B-F:B,ie=L+N>window.pageYOffset+document.body.offsetHeight?L-N:L;S.transform="translate3d("+ne+"px, "+ie+"px, 0"}return y.createElement(_,R({arrowProps:M,closeOnReferenceHidden:p,isReferenceHidden:A,placement:x,update:oe,style:S,tooltip:l,trigger:u,mutationObserverOptions:C},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:v}))});return y.createElement(pe,null,y.createElement(Re,{innerRef:c},function(g){var v=g.ref;return s({getTriggerProps:e.getTriggerProps,triggerRef:v})}),this.getState()&&(f?q.createPortal(k,w):k))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(e){var i=this.props.trigger;return i===e||Array.isArray(i)&&i.includes(e)},n}(d.Component);ee.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:Oe,placement:"right",portalContainer:Y()?document.body:null,trigger:"hover",usePortal:Y(),mutationObserverOptions:be,modifiers:[]};var Se=ee,h=le(1e3)((r,n,o,e=0)=>n.split("-")[0]===r?o:e),O=8,Ee=H.div({position:"absolute",borderStyle:"solid"},({placement:r})=>{let n=0,o=0;switch(!0){case(r.startsWith("left")||r.startsWith("right")):{o=8;break}case(r.startsWith("top")||r.startsWith("bottom")):{n=8;break}}return{transform:`translate3d(${n}px, ${o}px, 0px)`}},({theme:r,color:n,placement:o})=>({bottom:`${h("top",o,O*-1,"auto")}px`,top:`${h("bottom",o,O*-1,"auto")}px`,right:`${h("left",o,O*-1,"auto")}px`,left:`${h("right",o,O*-1,"auto")}px`,borderBottomWidth:`${h("top",o,"0",O)}px`,borderTopWidth:`${h("bottom",o,"0",O)}px`,borderRightWidth:`${h("left",o,"0",O)}px`,borderLeftWidth:`${h("right",o,"0",O)}px`,borderTopColor:h("top",o,r.color[n]||n||r.base==="light"?E(r.background.app):r.background.app,"transparent"),borderBottomColor:h("bottom",o,r.color[n]||n||r.base==="light"?E(r.background.app):r.background.app,"transparent"),borderLeftColor:h("left",o,r.color[n]||n||r.base==="light"?E(r.background.app):r.background.app,"transparent"),borderRightColor:h("right",o,r.color[n]||n||r.base==="light"?E(r.background.app):r.background.app,"transparent")})),Pe=H.div(({hidden:r})=>({display:r?"none":"inline-block",zIndex:2147483647}),({theme:r,color:n,hasChrome:o})=>o?{background:r.color[n]||n||r.base==="light"?E(r.background.app):r.background.app,filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:r.appBorderRadius*2,fontSize:r.typography.size.s1}:{}),te=({placement:r,hasChrome:n,children:o,arrowProps:e,tooltipRef:i,arrowRef:s,color:l,...t})=>y.createElement(Pe,{hasChrome:n,placement:r,ref:i,...t,color:l},n&&y.createElement(Ee,{placement:r,ref:s,...e,color:l}),o);te.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var{document:W}=ce,ke=H.div`
  display: inline-block;
  cursor: ${r=>r.mode==="hover"?"default":"pointer"};
`,xe=H.g`
  cursor: ${r=>r.mode==="hover"?"default":"pointer"};
`,re=({svg:r,trigger:n,closeOnClick:o,placement:e,modifiers:i,hasChrome:s,tooltip:l,children:t,tooltipShown:u,onVisibilityChange:c,...a})=>{let p=r?xe:ke;return y.createElement(Se,{placement:e,trigger:n,modifiers:i,tooltipShown:u,onVisibilityChange:c,tooltip:({getTooltipProps:f,getArrowProps:w,tooltipRef:m,arrowRef:b,placement:C})=>y.createElement(te,{hasChrome:s,placement:C,tooltipRef:m,arrowRef:b,arrowProps:w(),...f()},typeof l=="function"?l({onHide:()=>c(!1)}):l)},({getTriggerProps:f,triggerRef:w})=>y.createElement(p,{ref:w,...f(),...a},t))};re.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Ne=({startOpen:r=!1,onVisibilityChange:n,...o})=>{let[e,i]=d.useState(r),s=d.useCallback(l=>{n&&n(l)===!1||i(l)},[n]);return d.useEffect(()=>{let l=()=>s(!1);W.addEventListener("keydown",l,!1);let t=Array.from(W.getElementsByTagName("iframe")),u=[];return t.forEach(c=>{let a=()=>{try{c.contentWindow.document&&(c.contentWindow.document.addEventListener("click",l),u.push(()=>{try{c.contentWindow.document.removeEventListener("click",l)}catch{}}))}catch{}};a(),c.addEventListener("load",a),u.push(()=>{c.removeEventListener("load",a)})}),()=>{W.removeEventListener("keydown",l),u.forEach(c=>{c()})}}),y.createElement(re,{...o,tooltipShown:e,onVisibilityChange:s})};export{Ne as WithToolTipState,Ne as WithTooltip,re as WithTooltipPure};
//# sourceMappingURL=WithTooltip-6RTI5BE5-4341d71a.js.map
