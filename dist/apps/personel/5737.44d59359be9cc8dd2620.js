(self.webpackChunkpersonel=self.webpackChunkpersonel||[]).push([[5737],{5737:(e,r,t)=>{"use strict";t.r(r),t.d(r,{ion_spinner:()=>o});var s=t(2322),n=t(7505),i=t(4843),a=t(9926);const o=class{constructor(e){(0,s.r)(this,e),this.paused=!1}getName(){const e=this.name||n.c.get("spinner"),r=(0,n.b)(this);return e||("ios"===r?"lines":"circular")}render(){const e=this,r=(0,n.b)(e),t=e.getName(),o=a.S[t]||a.S.lines,f="number"==typeof e.duration&&e.duration>10?e.duration:o.dur,p=[];if(void 0!==o.circles)for(let s=0;s<o.circles;s++)p.push(l(o,f,s,o.circles));else if(void 0!==o.lines)for(let s=0;s<o.lines;s++)p.push(c(o,f,s,o.lines));return(0,s.h)(s.H,{class:(0,i.c)(e.color,{[r]:!0,[`spinner-${t}`]:!0,"spinner-paused":!!e.paused||n.c.getBoolean("_testing")}),role:"progressbar",style:o.elmDuration?{animationDuration:f+"ms"}:{}},p)}},l=(e,r,t,n)=>{const i=e.fn(r,t,n);return i.style["animation-duration"]=r+"ms",(0,s.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},(0,s.h)("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:e.elmDuration?{animationDuration:r+"ms"}:{}}))},c=(e,r,t,n)=>{const i=e.fn(r,t,n);return i.style["animation-duration"]=r+"ms",(0,s.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},(0,s.h)("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};o.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},9926:(e,r,t)=>{"use strict";t.d(r,{S:()=>s});const s={bubbles:{dur:1e3,circles:9,fn:(e,r,t)=>{const s=e*r/t-e+"ms",n=2*Math.PI*r/t;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(e,r,t)=>{const s=r/t,n=e*s-e+"ms",i=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,r)=>({r:6,style:{left:9-9*r+"px","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,r,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/t-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,r,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":e*r/t-e+"ms"}})}}},4843:(e,r,t)=>{"use strict";t.d(r,{c:()=>n,g:()=>i,h:()=>s,o:()=>o});const s=(e,r)=>null!==r.closest(e),n=(e,r)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},r):r,i=e=>{const r={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>r[e]=!0),r},a=/^[a-z][a-z0-9+\-.]*:/,o=async(e,r,t,s)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const n=document.querySelector("ion-router");if(n)return null!=r&&r.preventDefault(),n.push(e,t,s)}return!1}}}]);