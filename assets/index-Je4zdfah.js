var Oe=Object.defineProperty;var Ne=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Q=(e,t,n)=>(Ne(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function L(){}const Ee=e=>e;function Z(e,t){for(const n in t)e[n]=t[n];return e}function ze(e){return e()}function re(){return Object.create(null)}function N(e){e.forEach(ze)}function ee(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ze(e){return Object.keys(e).length===0}function Ce(e,...t){if(e==null){for(const a of t)a(void 0);return L}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ie(e,t,n){e.$$.on_destroy.push(Ce(t,n))}function je(e,t,n,a){if(e){const o=Ke(e,t,n,a);return e[0](o)}}function Ke(e,t,n,a){return e[1]&&a?Z(n.ctx.slice(),e[1](a(t))):n.ctx}function Me(e,t,n,a){if(e[2]&&a){const o=e[2](a(n));if(t.dirty===void 0)return o;if(typeof o=="object"){const i=[],c=Math.max(t.dirty.length,o.length);for(let r=0;r<c;r+=1)i[r]=t.dirty[r]|o[r];return i}return t.dirty|o}return t.dirty}function Ae(e,t,n,a,o,i){if(o){const c=Ke(t,n,a,i);e.p(c,o)}}function Je(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let a=0;a<n;a++)t[a]=-1;return t}return-1}function se(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function le(e){return e??""}function ce(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Be=typeof window<"u";let Ue=Be?()=>window.performance.now():()=>Date.now(),te=Be?e=>requestAnimationFrame(e):L;const R=new Set;function Pe(e){R.forEach(t=>{t.c(e)||(R.delete(t),t.f())}),R.size!==0&&te(Pe)}function Te(e){let t;return R.size===0&&te(Pe),{promise:new Promise(n=>{R.add(t={c:e,f:n})}),abort(){R.delete(t)}}}function v(e,t){e.appendChild(t)}function Re(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function qe(e){const t=g("style");return t.textContent="/* empty */",Xe(Re(e),t),t.sheet}function Xe(e,t){return v(e.head||e,t),t.sheet}function j(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode&&e.parentNode.removeChild(e)}function Se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function $(){return M(" ")}function xe(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function Ge(e){return function(t){return t.preventDefault(),e.call(this,t)}}function z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Qe(e){return Array.from(e.childNodes)}function C(e,t){t=""+t,e.data!==t&&(e.data=t)}function We(e,t,{bubbles:n=!1,cancelable:a=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:a})}const I=new Map;let U=0;function Ye(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function et(e,t){const n={stylesheet:qe(t),rules:{}};return I.set(e,n),n}function tt(e,t,n,a,o,i,c,r=0){const l=16.666/a;let s=`{
`;for(let b=0;b<=1;b+=l){const A=t+(n-t)*i(b);s+=b*100+`%{${c(A,1-A)}}
`}const u=s+`100% {${c(n,1-n)}}
}`,p=`__svelte_${Ye(u)}_${r}`,d=Re(e),{stylesheet:h,rules:m}=I.get(d)||et(d,e);m[p]||(m[p]=!0,h.insertRule(`@keyframes ${p} ${u}`,h.cssRules.length));const k=e.style.animation||"";return e.style.animation=`${k?`${k}, `:""}${p} ${a}ms linear ${o}ms 1 both`,U+=1,p}function ue(e,t){const n=(e.style.animation||"").split(", "),a=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),o=n.length-a.length;o&&(e.style.animation=a.join(", "),U-=o,U||nt())}function nt(){te(()=>{U||(I.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&_(t)}),I.clear())})}let ne;function V(e){ne=e}const P=[],de=[];let S=[];const pe=[],at=Promise.resolve();let Y=!1;function ot(){Y||(Y=!0,at.then($e))}function w(e){S.push(e)}const W=new Set;let J=0;function $e(){if(J!==0)return;const e=ne;do{try{for(;J<P.length;){const t=P[J];J++,V(t),it(t.$$)}}catch(t){throw P.length=0,J=0,t}for(V(null),P.length=0,J=0;de.length;)de.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];W.has(n)||(W.add(n),n())}S.length=0}while(P.length);for(;pe.length;)pe.pop()();Y=!1,W.clear(),V(e)}function it(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(w)}}function rt(e){const t=[],n=[];S.forEach(a=>e.indexOf(a)===-1?t.push(a):n.push(a)),n.forEach(a=>a()),S=t}let D;function st(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function he(e,t,n){e.dispatchEvent(We(`${t?"intro":"outro"}${n}`))}const E=new Set;let K;function ae(){K={r:0,c:[],p:K}}function oe(){K.r||N(K.c),K=K.p}function f(e,t){e&&e.i&&(E.delete(e),e.i(t))}function y(e,t,n,a){if(e&&e.o){if(E.has(e))return;E.add(e),K.c.push(()=>{E.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}else a&&a()}const lt={duration:0};function ct(e,t,n){const a={direction:"in"};let o=t(e,n,a),i=!1,c,r,l=0;function s(){c&&ue(e,c)}function u(){const{delay:d=0,duration:h=300,easing:m=Ee,tick:k=L,css:b}=o||lt;b&&(c=tt(e,0,1,h,d,m,b,l++)),k(0,1);const A=Ue()+d,Fe=A+h;r&&r.abort(),i=!0,w(()=>he(e,!0,"start")),r=Te(G=>{if(i){if(G>=Fe)return k(1,0),he(e,!0,"end"),s(),i=!1;if(G>=A){const ie=m((G-A)/h);k(ie,1-ie)}}return i})}let p=!1;return{start(){p||(p=!0,ue(e),ee(o)?(o=o(a),st().then(u)):u())},invalidate(){p=!1},end(){i&&(s(),i=!1)}}}function T(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ut(e,t){const n={},a={},o={$$scope:1};let i=e.length;for(;i--;){const c=e[i],r=t[i];if(r){for(const l in c)l in r||(a[l]=1);for(const l in r)o[l]||(n[l]=r[l],o[l]=1);e[i]=r}else for(const l in c)o[l]=1}for(const c in a)c in n||(n[c]=void 0);return n}function dt(e){return typeof e=="object"&&e!==null?e:{}}function q(e){e&&e.c()}function F(e,t,n){const{fragment:a,after_update:o}=e.$$;a&&a.m(t,n),w(()=>{const i=e.$$.on_mount.map(ze).filter(ee);e.$$.on_destroy?e.$$.on_destroy.push(...i):N(i),e.$$.on_mount=[]}),o.forEach(w)}function O(e,t){const n=e.$$;n.fragment!==null&&(rt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(e,t){e.$$.dirty[0]===-1&&(P.push(e),ot(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,a,o,i,c=null,r=[-1]){const l=ne;V(e);const s=e.$$={fragment:null,ctx:[],props:i,update:L,not_equal:o,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:re(),dirty:r,skip_bound:!1,root:t.target||l.$$.root};c&&c(s.root);let u=!1;if(s.ctx=n?n(e,t.props||{},(p,d,...h)=>{const m=h.length?h[0]:d;return s.ctx&&o(s.ctx[p],s.ctx[p]=m)&&(!s.skip_bound&&s.bound[p]&&s.bound[p](m),u&&pt(e,p)),d}):[],s.update(),u=!0,N(s.before_update),s.fragment=a?a(s.ctx):!1,t.target){if(t.hydrate){const p=Qe(t.target);s.fragment&&s.fragment.l(p),p.forEach(_)}else s.fragment&&s.fragment.c();t.intro&&f(e.$$.fragment),F(e,t.target,t.anchor),$e()}V(l)}class x{constructor(){Q(this,"$$");Q(this,"$$set")}$destroy(){O(this,1),this.$destroy=L}$on(t,n){if(!ee(n))return L;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const o=a.indexOf(n);o!==-1&&a.splice(o,1)}}$set(t){this.$$set&&!Ze(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ht="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ht);function ft(e){const t=e-1;return t*t*t+1}function mt(e,{delay:t=0,duration:n=400,easing:a=ft,x:o=0,y:i=0,opacity:c=0}={}){const r=getComputedStyle(e),l=+r.opacity,s=r.transform==="none"?"":r.transform,u=l*(1-c),[p,d]=ce(o),[h,m]=ce(i);return{delay:t,duration:n,easing:a,css:(k,b)=>`
			transform: ${s} translate(${(1-k)*p}${d}, ${(1-k)*h}${m});
			opacity: ${l-u*b}`}}function fe(e,t,n){const a=e.slice();return a[9]=t[n],a}function me(e){let t,n,a,o,i,c=e[7]({birth:e[2],death:e[4],place:e[5]})+"",r,l;return{c(){t=g("div"),n=g("h1"),a=M(e[1]),o=$(),i=g("h2"),r=M(c),z(n,"class","svelte-dghzu9"),z(i,"class","svelte-dghzu9"),z(t,"class","sticky svelte-dghzu9")},m(s,u){j(s,t,u),v(t,n),v(n,a),v(t,o),v(t,i),v(i,r)},p(s,u){u&2&&C(a,s[1]),u&52&&c!==(c=s[7]({birth:s[2],death:s[4],place:s[5]})+"")&&C(r,c)},i(s){s&&(l||w(()=>{l=ct(t,mt,{x:-50}),l.start()}))},o:L,d(s){s&&_(t)}}}function ve(e){let t,n=e[9]+"",a;return{c(){t=g("p"),a=M(n),z(t,"class","svelte-dghzu9")},m(o,i){j(o,t,i),v(t,a)},p(o,i){i&8&&n!==(n=o[9]+"")&&C(a,n)},d(o){o&&_(t)}}}function vt(e){let t=e[0],n,a,o=me(e),i=T(e[6](e[3])),c=[];for(let r=0;r<i.length;r+=1)c[r]=ve(fe(e,i,r));return{c(){o.c(),n=$(),a=g("div");for(let r=0;r<c.length;r+=1)c[r].c();z(a,"class","svelte-dghzu9")},m(r,l){o.m(r,l),j(r,n,l),j(r,a,l);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(a,null)},p(r,[l]){if(l&1&&H(t,t=r[0])?(ae(),y(o,1,1,L),oe(),o=me(r),o.c(),f(o,1),o.m(n.parentNode,n)):o.p(r,l),l&72){i=T(r[6](r[3]));let s;for(s=0;s<i.length;s+=1){const u=fe(r,i,s);c[s]?c[s].p(u,l):(c[s]=ve(u),c[s].c(),c[s].m(a,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=i.length}},i(r){f(o)},o(r){y(o)},d(r){r&&(_(n),_(a)),o.d(r),Se(c,r)}}}function kt(e,t,n){let{id:a=""}=t,{name:o="No name"}=t,{birth:i="No birth"}=t,{description:c="No description"}=t,{death:r=""}=t,{place:l=""}=t;const s=(d,h="")=>d||h,u=d=>{const h=s(d,"žádné další informace");return typeof h=="string"?[h]:h},p=d=>{let h="";const{birth:m,death:k,place:b}=d;return h+=m?"*"+m:"",h+=b?` (${b})`:"",h+=k?" - †"+k:"",h};return e.$$set=d=>{"id"in d&&n(0,a=d.id),"name"in d&&n(1,o=d.name),"birth"in d&&n(2,i=d.birth),"description"in d&&n(3,c=d.description),"death"in d&&n(4,r=d.death),"place"in d&&n(5,l=d.place)},[a,o,i,c,r,l,u,p]}class bt extends x{constructor(t){super(),X(this,t,kt,vt,H,{id:0,name:1,birth:2,description:3,death:4,place:5})}}function ke(e,t,n){const a=e.slice();return a[5]=t[n],a}const yt=e=>({item:e&32}),be=e=>({item:e[5]}),_t=e=>({item:e&1}),ye=e=>({item:e[5]});function Lt(e){let t;return{c(){t=M("No slot")},m(n,a){j(n,t,a)},d(n){n&&_(t)}}}function _e(e){let t,n;return t=new He({props:{items:e[5].children,$$slots:{default:[zt,({item:a})=>({5:a}),({item:a})=>a?32:0]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment)},m(a,o){F(t,a,o),n=!0},p(a,o){const i={};o&1&&(i.items=a[5].children),o&48&&(i.$$scope={dirty:o,ctx:a}),t.$set(i)},i(a){n||(f(t.$$.fragment,a),n=!0)},o(a){y(t.$$.fragment,a),n=!1},d(a){O(t,a)}}}function gt(e){let t;return{c(){t=M("No slot")},m(n,a){j(n,t,a)},d(n){n&&_(t)}}}function zt(e){let t;const n=e[3].default,a=je(n,e,e[4],be),o=a||gt();return{c(){o&&o.c()},m(i,c){o&&o.m(i,c),t=!0},p(i,c){a&&a.p&&(!t||c&48)&&Ae(a,n,i,i[4],t?Me(n,i[4],c,yt):Je(i[4]),be)},i(i){t||(f(o,i),t=!0)},o(i){y(o,i),t=!1},d(i){o&&o.d(i)}}}function Le(e){let t,n,a,o;const i=e[3].default,c=je(i,e,e[4],ye),r=c||Lt();let l=e[5].children&&_e(e);return{c(){t=g("li"),r&&r.c(),n=$(),l&&l.c(),a=$(),z(t,"class","svelte-eaqk4y")},m(s,u){j(s,t,u),r&&r.m(t,null),v(t,n),l&&l.m(t,null),v(t,a),o=!0},p(s,u){c&&c.p&&(!o||u&17)&&Ae(c,i,s,s[4],o?Me(i,s[4],u,_t):Je(s[4]),ye),s[5].children?l?(l.p(s,u),u&1&&f(l,1)):(l=_e(s),l.c(),f(l,1),l.m(t,a)):l&&(ae(),y(l,1,1,()=>{l=null}),oe())},i(s){o||(f(r,s),f(l),o=!0)},o(s){y(r,s),y(l),o=!1},d(s){s&&_(t),r&&r.d(s),l&&l.d()}}}function jt(e){let t,n,a,o=T(e[0]),i=[];for(let r=0;r<o.length;r+=1)i[r]=Le(ke(e,o,r));const c=r=>y(i[r],1,1,()=>{i[r]=null});return{c(){t=g("ul");for(let r=0;r<i.length;r+=1)i[r].c();z(t,"class",n=le(e[1].class)+" svelte-eaqk4y")},m(r,l){j(r,t,l);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(t,null);a=!0},p(r,[l]){if(l&49){o=T(r[0]);let s;for(s=0;s<o.length;s+=1){const u=ke(r,o,s);i[s]?(i[s].p(u,l),f(i[s],1)):(i[s]=Le(u),i[s].c(),f(i[s],1),i[s].m(t,null))}for(ae(),s=o.length;s<i.length;s+=1)c(s);oe()}(!a||l&2&&n!==(n=le(r[1].class)+" svelte-eaqk4y"))&&z(t,"class",n)},i(r){if(!a){for(let l=0;l<o.length;l+=1)f(i[l]);a=!0}},o(r){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)y(i[l]);a=!1},d(r){r&&_(t),Se(i,r)}}}function Kt(e,t,n){let{$$slots:a={},$$scope:o}=t,{items:i=[]}=t;const c=!1;return e.$$set=r=>{n(1,t=Z(Z({},t),se(r))),"items"in r&&n(0,i=r.items),"$$scope"in r&&n(4,o=r.$$scope)},t=se(t),[i,t,c,a,o]}class He extends x{constructor(t){super(),X(this,t,Kt,jt,H,{items:0,treeChild:2})}get treeChild(){return this.$$.ctx[2]}}const B=[];function De(e,t=L){let n;const a=new Set;function o(r){if(H(e,r)&&(e=r,n)){const l=!B.length;for(const s of a)s[1](),B.push(s,e);if(l){for(let s=0;s<B.length;s+=2)B[s][0](B[s+1]);B.length=0}}}function i(r){o(r(e))}function c(r,l=L){const s=[r,l];return a.add(s),a.size===1&&(n=t(o,i)||L),r(e),()=>{a.delete(s),a.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:c}}const Ve=De({name:"Rodokmen Rodu Lajsků",birth:"cca 1680 - 2023",description:"Ačkoli v současné době je příjmení rodu ustáleno na podobě „Lajsek“, až do druhé poloviny 19. století se v matrikách objevovaly jeho různé varianty jako Laisek, Laysek, Lejsek, Leisek, či Leysek, a to v závislosti na zapisovateli nebo na tom jak a kdo údaje do zápisu diktoval, nebo jak to vyplývalo ze starších písemných dokumentů. Proto jsou zde uvedeny varianty příjmení tak, jak byly u jednotlivých osob zapsány, u novorozenců pak podle varianty příjmení jejich otce, která byla zrovna tehdy zapsána. Proto není nijak výjimečné, že se sourozenci ve variantě příjmení mezi sebou mohou lišit. V některých případech lze pak pozorovat, jak se v té či oné větvi rodiny ta která varianta začala ustalovat. Rod byl od 17. až do poloviny 20. století usídlený v poměrně malé oblasti jihozápadně od Kutné Hory (Suchdol, Dobřeň, Roztěž, Malešov, Křesetice a Rápošov)."}),ge=De([]);function Mt(e){let t,n=e[2].name+"",a,o,i;function c(){return e[1](e[2])}return{c(){t=g("a"),a=M(n),z(t,"href","./")},m(r,l){j(r,t,l),v(t,a),o||(i=xe(t,"click",Ge(c)),o=!0)},p(r,l){e=r,l&4&&n!==(n=e[2].name+"")&&C(a,n)},d(r){r&&_(t),o=!1,i()}}}function At(e){let t,n;return t=new He({props:{class:"treeRoot",items:e[0],$$slots:{default:[Mt,({item:a})=>({2:a}),({item:a})=>a?4:0]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment)},m(a,o){F(t,a,o),n=!0},p(a,[o]){const i={};o&1&&(i.items=a[0]),o&12&&(i.$$scope={dirty:o,ctx:a}),t.$set(i)},i(a){n||(f(t.$$.fragment,a),n=!0)},o(a){y(t.$$.fragment,a),n=!1},d(a){O(t,a)}}}function Jt(e,t,n){let{treeData:a=[]}=t;const o=i=>Ve.set(i);return e.$$set=i=>{"treeData"in i&&n(0,a=i.treeData)},[a,o]}class Bt extends x{constructor(t){super(),X(this,t,Jt,At,H,{treeData:0})}}const Pt=[{name:"Antonín Leysek/Leisek",id:"1A",birth:"1680"},{name:"(Jan) Václav Leysek/Laysek/Leisek",id:"2V",parent:"1A",mother:"Dorota",birth:"30.10.1712",place:"Suchdol"},{name:"Kateřina Laysková",id:"3K",parent:"2V",mother:"Kateřina Semrádová",birth:"13.1.1741",place:"Suchdol"},{name:"Jan Leysek/Laisek/Leisek",id:"3J",parent:"2V",birth:"19.1.1743",place:"Suchdol",description:["Mistr zednický z Roztěže nedaleko Malešova.","Jeho první manželkou byla Marie (Anna Alžběta) Martínková. Měli spolu 8 dětí","S druhou manželkou, Barborou Patřilovou, měl dalších 7 dětí.","Matriky zemřelých z 19. století pro farnost Bykáň jsou bohužel stále na matričním úřadě v Kutné Hoře, do archivu budou předány až v roce 2024. Další údaje k Janovi Leyskovi, jeho manželkám, resp. k jejich předčasně zemřelým potomkům tak není možné zatím doplnit."]},{name:"Alžběta Laysková",id:"3A",parent:"2V",birth:"7.4.1745",place:"Suchdol"},{name:"Marie Anna Leysková",id:"4M",parent:"3J",birth:"1.7.1771",place:"Roztěž",description:"Dožila se dospělosti a měla potomky",mother:"Marie (Anna Alžběta) Martínková"},{name:"Jan Leysek",id:"4J",parent:"3J",birth:"4.8.1773",place:"Roztěž",mother:"Marie (Anna Alžběta) Martínková"},{name:"Josef Leisek",id:"4Jo",parent:"3J",birth:"23.9.1775",place:"Roztěž",mother:"Marie (Anna Alžběta) Martínková"},{name:"Pavel František Leysek ",id:"4P",parent:"3J",birth:"1.2.1779",place:"Roztěž",mother:"Marie (Anna Alžběta) Martínková"},{name:"František Leysek ",id:"4F",parent:"3J",birth:"23.5.1784",place:"Roztěž",mother:"Marie (Anna Alžběta) Martínková",description:["Panský hajný z Michovic u Zdeslavic č. p. 12 na Malešovském panství. Michovec je revír v lesích mezi Zdeslavicemi, hájenkou Újezd, rybníky Pastvickým a Vidlákem.","Dne 8. 11. 1806 se oženil s Annou Kateřinou Hermannovou","Měli spolu minimálně 5 synů, ale rodina se pravděpodobně vícekrát stěhovala"]},{name:"Václav Leysek",id:"4V",parent:"3J",birth:"29.4.1787",place:"Roztěž",mother:"Marie (Anna Alžběta) Martínková"},{name:"Anna Leysková",id:"4A",parent:"3J",birth:"20.5.1790",place:"Roztěž",mother:"Marie (Anna Alžběta) Martínková"},{name:"Barbora Leysková",id:"4B",parent:"3J",birth:"20.5.1790",place:"Roztěž",mother:"Marie (Anna Alžběta) Martínková"},{name:"Anna Barbora Leysková",id:"4AB",parent:"3J",birth:"2.11.1798",place:"Roztěž",mother:"Barbora Patřilová"},{name:"Karel Boromej Leysek",id:"4K",parent:"3J",birth:"5.10.1799",place:"Roztěž",mother:"Barbora Patřilová"},{name:"Jan Nepomuk Leysek",id:"4JN",parent:"3J",birth:"6.5.1802",place:"Roztěž",mother:"Barbora Patřilová"},{name:"Barbora Leisková",id:"4BL",parent:"3J",birth:"27.10.1804",place:"Roztěž",mother:"Barbora Patřilová"},{name:"Anna Leysková",id:"4AL",parent:"3J",birth:"23.5.1808",place:"Roztěž",mother:"Barbora Patřilová"},{name:"Josef Laisek",id:"4JL",parent:"3J",birth:"29.4.1811",place:"Roztěž",mother:"Barbora Patřilová"},{name:"Marie Laisková",id:"4ML",parent:"3J",birth:"28.10.1814",place:"Roztěž",mother:"Barbora Patřilová"},{name:"Jan Baptista Laisek",id:"5JB",parent:"4F",birth:"6.7.1807",place:"Malešov"},{name:"František Xaver Laisek",id:"5FX",parent:"4F",birth:"19.2.1810",place:"Malešov",description:["Domkář a tkadlec z Vysoké. Později familiant z Hájku u Úmonína","Dne 11. 2. 1832 se oženil s Annou Pospíšilovou","Ač katolík, dne 15. 1. 1850 se oženil s evangeličkou Marií Hůlovou","Matriky zemřelých z 19. století pro farnost Bykáň jsou většinou bohužel stále na matričním úřadě v Kutné Hoře, do archivu budou předány až v roce 2024. Další údaje k Františku Leyskovi a jeho manželce tak není možné zatím doplnit."]},{name:"Karel Laisek",id:"5K",parent:"4F",birth:"25.12.1817",death:"11.9.1855",place:"Zdeslavice u Malešova",description:["Hrnčíř a baráčník v Rápošově č. p. 14 nedaleko Zbraslavic.","Dne 9. 9. 1840 se oženil s Josefou Kobylákovou z Rápošova","Karel Laisek zemřel dne 11. 9. 1855 na mozkovou mrtvici (Gehirnlähmung), s největší pravděpodobností náhle (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 277, dig, list 141). Jeho žena zemřela dne 22. 4. 1879, zaopatřena svátostmi umírajících, na vodnatelnost (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 292, dig, list 149)."]},{name:"Josef Laisek",id:"5J",parent:"4F",birth:"7.1.1821",place:"Zdeslavice u Malešova"},{name:"Antonín Laisek",id:"5A",parent:"4F",birth:"10. 8. 1822",place:"Zdeslavice u Malešova"},{name:"Jan Nepomuk Lajsek",id:"6JN",parent:"5FX",birth:"5. 3. 1835",death:"28. 6. 1837",place:"Vysoká",mother:"Anna Pospíšilová",description:"Zemřel na psotník"},{name:"Jan Nepomuk Lajsek",id:"6JN2",parent:"5FX",birth:"5.11.1837",death:"11.3.1845",place:"Vysoká",mother:"Anna Pospíšilová",description:"Zemřel na krvácení do mozku."},{name:"Marie Laisková",id:"6M",parent:"5FX",birth:"23.4.1861",place:"Hájek"},{name:"Emilie Laisková",id:"6E",parent:"5FX",birth:"30.3.1864",place:"Hájek"},{name:"Barbora Laisková",id:"6B",parent:"5K",birth:"28.2.1838",place:"Rápošov č. p. 14",mother:"Josefa Kobyláková",description:["narodila se jako nemanželská dcera, legitimizována byla sňatkem rodičů.","Dělnice v Rápošově. Měla 6 nemanželských synů","Úmrtí Barbory Lajskové se v matrikách Rápošova a okolí nepodařilo dohledat, je možné že dožila u některého z přeživších synů mimo farnost, a/nebo navíc v době, ze které jsou ještě matriky na matričním úřadě."]},{name:"Bedřich Laisek",id:"6B2",parent:"5K",birth:"30.10.1840",death:"27.12.1900",place:"Rápošov č. p. 14",mother:"Josefa Kobyláková",description:["propuštěný vojín od střeleckého pluku dělostřelců bez naděje na graciál (tzn. dar z milosti vojenským vysloužilcům).","Stal se po otci hrnčířem. Dne 6. 2. 1867 se oženil s Marií Černíkovou","zaopatřen svátostmi umírajících, Bedřich Leisek zemřel na rakovinu žaludku (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 307, dig. list 156). Jeho manželka zemřela dne 27. 1. 1904, zaopatřena svátostmi umírajících, na rozedmu plic (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 309, dig. list 157)"]},{name:"Bedřich Laisek",id:"7B",parent:"6B2",birth:"10.9.1870",death:"27.12.1870",place:"Rápošov č. p. 14",description:"Zemřel na psotník",mother:"Marie Černíková"},{name:"Bedřich Leisek",id:"7B2",parent:"6B2",birth:"11.1.1872",place:"Rápošov č. p. 14",mother:"Marie Černíková"},{name:"Alois Gonzaga Leisek",id:"7AG",parent:"6B2",birth:"25.7.1874",death:"29.8.1878",place:"Rápošov č. p. 14",mother:"Marie Černíková"},{name:"František Sales Leisek",id:"7FS",parent:"6B2",birth:"21.12.1876",place:"Rápošov č. p. 14",mother:"Marie Černíková"},{name:"Božena Theodora Leisková",id:"7BT",parent:"6B2",birth:"22.4.1879",place:"Rápošov č. p. 14",mother:"Marie Černíková",description:["Služebná. Dne 19. 10. 1903 se provdala za Josefa Kynycha (29. 8. 1879 Zbraslavice – 25. 10. 1907 Kurná Hora č. p. 414), nádeníka v Rápošově a poté v Kutné Hoře č. p. 414, nemanželského syna Antonie Kynychové, vdovy po Františku Masopustovi, nádeníku ve Zbraslavicích, dcery Jana Kynycha respektive Kohouta, nádeníka ve Zbraslavicích č. p. 3, a Marie Adrianové z Pohledě (SOA Praha, Matrika oddaných Zbraslavice, 1868 – 1910, list 408, dig. list 187). Když ovdověla, dne 30. 4. 1911 se v Kutné Hoře provdala za Josefa Žďárského (*1. 5. 1854 Podhořany č. p. 29), pekařského pomocníka a vojína c. k. 2. praporu myslivců, syna Jana Žďárského, chalupníka v Podhořanech č. p. 29, a Anny Havránkové z Podhořan."]},{name:"Emilie Leisková",id:"7E",parent:"6B2",birth:"1.6.1881",place:"Rápošov č. p. 14",mother:"Marie Černíková"},{name:"Aloisie Leisková",id:"7A",parent:"6B2",birth:"14.1.1884",death:"15.8.1886",place:"Rápošov č. p. 14",mother:"Marie Černíková",description:"Zemřela na ochrnutí plic."},{name:"Anežka Leisková",id:"7AN",parent:"6B2",birth:"23.4.1886",death:"23.11.1969",place:"Rápošov č. p. 14",mother:"Marie Černíková",description:"Dne 21. 10. 1913 se v Kutné Hoře provdala za Emanuela Skálu (*5. 9. 1886 Kutná Hora č. p. 295), strojníka v Kutné Hoře č. p. 295, syna Emanuela Skály, strojnického mistra v Kutné Hoře č. p. 295, a Anny Košínské z Josefova č. p. 45."},{name:"Jan Leisek",id:"7J",parent:"6B",birth:"8.12.1856",place:"Rápošov č. p. 14",description:["Kamnář. Dne 21. 11. 1880 se oženil s Annou Mejstříkovou z Rápošova"]},{name:"Karel Boromej Lejsek",id:"7K",parent:"6B",birth:"18.10.1859",place:"Rápošov č. p. 14",description:["Kolář v Křeseticích č. p. 109. Dne 16. 5. 1883 se oženil s Barborou Čermákovou","Matriky obsahující úmrtí Karla Boromeje Lajska a jeho manželky Barbory Čermákové se stále nacházejí na matričním úřadě, a není k nim tedy online přístup."]},{name:"Josef Leisek",id:"7JL",parent:"6B",birth:"12.2.1864",place:"Rápošov č. p. 14"},{name:"Antonín Laisek",id:"7A2",parent:"6B",birth:"25.1.1871",place:"Rápošov č. p. 14",description:["byl z dvojčat, ale druhé se narodilo mrtvé, a je uvedeno v matrice zemřelých jako mrtvorozeně Barbory Lajskovy, „padlé svobodné nádenice“ (SOA Praha, Matrika zemřelých Zbraslavice, 1843 – 1910, list 286, dig. list 146)."]},{name:"František Lajsek",id:"7F",parent:"6B",birth:"20.5.1872",death:"4.6.1873",place:"Rápošov č. p. 14",description:"Zemřel na psotník."},{name:"František Serafín Leisek",id:"8FS",parent:"7J",birth:"21.7.1882",death:"8.12.1882",place:"Rápošov č. p. 13",description:"Zemřel „náhlým katarem trubic plicních“."},{name:"Marie Leisková",id:"8M",parent:"7J",birth:"16.1.1884",place:"Rápošov č. p. 13",description:"Dne 19. 10. 1910 se v Praze-Libni provdala za Jana Štěpinu (*29. 11. 1882 Lipoltice č. p. 17), zřízence elektrických drah v Libni č. p. 829, syna Františka Štěpiny z Přelouče a Anny Rokytové z Tupeš č. p. 11 (AHMP, Matrika oddaných Libeň, 1908 – 1912, list 162, dig. list 178).",mother:"Anna Mejstříková"},{name:"Josef Jan Laisek",id:"8JJ",parent:"7JL",birth:"8.5.1887",description:["Vrchní posunovač c. k. státních drah v Praze VIII č. p. 829. Dne 11. 5. 1912 se v Praze v Chrámu Matky Boží před Týnem oženil s Pavlínou Zoubkovou (* 19. 4. 1887 Volšany č. p. 14), služebnou z Prahy I č. p. 24, dcerou Václava Zoubka, rolníka ve Volšanech č. p. 14, a Marie Marešové ze Stražovic č. p. 21 (AHMP, Matrika oddaných kostela Matky Boží před Týnem, 1911 – 1920, list 28, dig. list 31)."]},{name:"Václav Lejsek",id:"8V",parent:"7JL",birth:"15.1.1898",death:"20.7.1898",place:"Rápošov č. p. 13",description:"Zemřel na katar střev"},{name:"Josef Leisek",id:"8JL",parent:"7K",birth:"28.2.1884",place:"Křesetice č. p. 109",description:["Dne 19. 9. 1911 se v Křeseticích oženil s Annou Neffeovou."]},{name:"Marie Laisková",id:"8ML",parent:"7K",birth:"18.9.1886",place:"Křesetice č. p. 109",description:["Dne 14. 11. 1911 se provdala za Emanuela Ulricha."]},{name:"Růžena Lajsková",id:"8R",parent:"7K",birth:"30.8.1888",death:"18.7.1905",place:"Křesetice č. p. 109"},{name:"Augustin Lajsek",id:"8AU",parent:"7K",birth:"7.8.1890",death:"1951",place:"Křesetice č. p. 109",description:["manželka: Anna Marie Rolletschek (*8.3.1894, Tandorf, - 28.10.1968 Křesetice č. p. 147)"]},{name:"Anna Lajsková",id:"8A",parent:"7K",birth:"5.6.1892"},{name:"Karel Boromej Lajsek",id:"8K",parent:"7K",birth:"4.1.1894",place:"Křesetice č. p. 109",description:["Dne 1. 3. 1919 se oženil s Annou Eisnerovou z Uhlířských Janovic."]},{name:"Emilie Antonie Lajsková",id:"8E",parent:"7K",birth:"3.10.1895",death:"22.8.1896",place:"Křesetice č. p. 109",description:["Zemřela na eclampsia neonatorum (tzn. psotník)."]},{name:"Václav Lajsek",id:"8V2",parent:"7K",birth:"28.9.1897",place:"Křesetice č. p. 109"},{name:"Alois Lajsek",id:"8A2",parent:"7K",birth:"25.5.1899",death:"22.10.1977",place:"Křesetice č. p. 109",description:["Syn Karla Lajska (*18. 10. 1859 Rápošov č. p. 14) a Barbory Čermákové (*1858 Křesetice č. p. 109) z Křesetic č. p. 109 (SOA Praha, Matrika narozených Křesetice, 1883 – 1910, list 104, dig. list 106).","Sklenářský dělník v Křeseticích č. p. 71 a poté č. p. 122. Dne 20. 1. 1924 se v chrámu sv. Bartoloměje v Kutné Hoře oženil s Johannou Markovou (2. 6. 1896 Křesetice č. p. 122 – 9. 10. 1959), dcerou Františka Marka (*26. 10. 1856), dělníka v Křeseticích č. p. 122, a Marie Pospíšilové (*18. 2. 1852) z Malešova."]},{name:"Augustin Lajsek",id:"9A",parent:"8AU",birth:"19.8.1919",death:"10.5.1945 (Kutná Hora)",place:"Mstišov"},{name:"Antonín Lajsek",id:"9A2",parent:"8AU",birth:"1925",place:"Mstišov",death:"1951 (Kutná Hora)"},{name:"Alfred Lajsek",id:"9A3",parent:"8AU",birth:"21.11.1916",death:"4.11.1993 (Kutná Hora)",place:"Mstišov",description:["Manželka Anna Řezáčová Lajsková (*22.8.1919 Petrovice u Kutné Hory)","Rodiče Anny Lajskové:","Josef Řezáč - Dělník v Petrovicích u Kutné Hory","Anna Navrátilová Řezáčová "]},{name:"Otýlie Lajsková Štěpánková",id:"9O2",parent:"8AU",birth:"30.5.1930",death:"30.7.2017 (Křesetice)",place:"Křesetice",description:["manžel Jaroslav Štěpánek (*9.8.1931 Strašnice - 9.2.2007 Křesetice č.p. 147)"]},{name:"Oldřich Alois Laisek",id:"9O",parent:"8A2",birth:"8.2.1925",death:"2.10.2001",place:"Křesetice č. p. 122",description:["Prof. Ing. p.ped. Oldřich Alois Lajsek","Malíř, designér, grafik a pedagog.","Dne 14. 7. 1951 se na Národním výboru v Praze I oženil s Emilií Veselou (17. 5. 1934 Praha – 2016) z Prahy XX č. p. 1515, dcerou Josefa Veselého (5. 3. 1897 Bratřice – 4. 7. 1971), dělníka, a Emilie Procházkové (2. 10. 1902 Vestec – 12. 10. 1977), vedoucí prodejny."]},{name:"Jarmila Lajsková Šibravová",id:"10JL",parent:"9A3",birth:"8.6.1944",place:"Kutná Hora",mother:"Anna Řezáčová Lajsková",description:["Manžel František Šibrava (*26.12.1938)"]},{name:"Jiří Lajsek",id:"10J2",parent:"9A3",birth:"24.2.1947",death:"14.2.2010 (Kutná Hora)",place:"Kutná Hora",mother:"Anna Řezáčová Lajsková",description:["Manželka Lubomíra Bláhová Lajsková (*7.6.1951 Kaňk - 10.3.2021 Kutná Hora)","rodiče Lubomíry Lajskové:","Miloslav Bláha (15.3.1922 Větrný Jeníkov – 23.5.1993 Kaňk)","Lubomíra Kvapilová Bláhová (25.1.1929 Horní Moštěnice – 18.10.1992 Kutná Hora))"]},{name:"Jaroslav Štěpánek",id:"10J3",parent:"9O2",birth:"13.10.1961",place:"Praha"},{name:"Jana Štěpánková",id:"10J4",parent:"9O2",birth:"26.9.1967",place:"Kutná Hora"},{name:"Jan Lajsek",id:"10J",parent:"9O",birth:"20.2.1958",place:"ÚNZ ONV Praha 7-Štvanice",mother:"Emilie Veselá",description:["JUDr. Jan Lajsek","Syn Olřicha Lajska (8. 2. 1925 Křesetice č. p. 122 – 2. 10. 2001 Praha) a Emilie Veselé (17. 5. 1934 – 2016).","Úředník ministerstva zahraničních věcí a ministerstva kultury a posléze podnikový právník.","Oženil se s Lenkou Brabcovou/Luxovou (*2. 1. 1962 Chlumec nad Cidlinou č. p. 165-III), dcerou Otakara Brabce (6. 7. 1938 Spišská Belá, okr. Poprad, Slovensko – 2010), technického úředníka, a Alenky Luxové rozené Zelenkové (*29. 1. 1939 Nový Bydžov-Chudonice), a mají spolu syny:"]},{name:"Lenka Šibravová Klazarová",id:"11L",parent:"10JL",birth:"13.11.1966",place:"Kutná Hora",description:["Manžel: Ondřej Kazar (13.12.1966 Hradec Králové)"]},{name:"Markéta Šibravová Suchánková",id:"11M",parent:"10JL",birth:"3.1.1976",place:"Kutná Hora",description:["Manžel: Martin Suchánek (*24.8.1974)"]},{name:"Lucie Lajsková Filipová",id:"11L2",parent:"10J2",birth:"23.3.1971",place:"Kutná Hora",description:["Manžel: Aleš Filip (*28.4.1966 Kutná Hora)"]},{name:"Stanislav Lajsek",id:"11S",parent:"10J2",birth:"25.5.1975",place:"Kutná Hora",description:["Manželka: Markéta Loumová (*11.12.1975 Kutná Hora)","Rodiče Markéty Loumové:","Miroslav Louma (*Liberec)","Hana Kaiserschatová Loumová (*Kutná Hora)"]},{name:"Vladimír Lajsek",id:"11V",parent:"10J",birth:"1988",place:"Praha 5-Motol",mother:"Lenka Brabcová/Luxová",description:["JUDr. Vladimír Lajsek, Ph.D., MBA","Syn Jana Lajska (*20. 2. 1958 ÚNZ ONV Praha 7-Štvanice) a Lenky Brabcové/Luxové (*2. 1. 1962 Chlumec nad Cidlinou č. p. 165-III).","Vystudoval práva na Právnické fakultě Univerzity Karlovy v Praze. Pracuje jako advokát v Praze."]},{name:"Petr Lajsek",id:"11P",parent:"10J",birth:"1991"},{name:"Filip Klazar",id:"12F",parent:"11L",birth:"11.1.1992",place:"Kutná Hora"},{name:"Šimon Klazar",id:"12S",parent:"11L",birth:"2.4.2000",place:"Kutná Hora"},{name:"Matěj Suchánek",id:"12M",parent:"11M",birth:"7.8.2003",place:"Kutná Hora"},{name:"Michaela Immanuela Filipová",id:"12M2",parent:"11L2",birth:"13.5.2004",place:"Kolín"},{name:"Kateřina Filipová",id:"12K",parent:"11L2",birth:"26.9.2011",place:"Kolín"},{name:"Jakub Lajsek",id:"12J",parent:"11S",birth:"7.7.2004",place:"Kolín",description:["Naprogramoval tuto stránku :)"]},{name:"Štěpán Lajsek",id:"12S2",parent:"11S",birth:"30.6.2009",place:"Kolín"},{name:"Vilém Lajsek",id:"12V",parent:"11S",birth:"5.4.2012",place:"Kolín"}],we=(e,t=void 0)=>{const n=[];return e.forEach(a=>{if(a.parent===t){const o=we(e,a.id),i={...a};o.length>0&&(i.children=o),n.push(i)}}),n};function Rt(e){let t,n,a,o,i,c,r;n=new Bt({props:{treeData:e[1]}});const l=[e[0]];let s={};for(let u=0;u<l.length;u+=1)s=Z(s,l[u]);return o=new bt({props:s}),{c(){t=g("main"),q(n.$$.fragment),a=$(),q(o.$$.fragment),i=$(),c=g("footer"),c.innerHTML='<a href="https://cubiq.dev">coded with 🤍 by Jakub Lajsek</a> <a href="https://github.com/TheCubiq/family-tree-svelte">zdrojový kód zde</a>',z(c,"class","svelte-1tmjeoc"),z(t,"class","svelte-1tmjeoc")},m(u,p){j(u,t,p),F(n,t,null),v(t,a),F(o,t,null),v(t,i),v(t,c),r=!0},p(u,[p]){const d={};p&2&&(d.treeData=u[1]),n.$set(d);const h=p&1?ut(l,[dt(u[0])]):{};o.$set(h)},i(u){r||(f(n.$$.fragment,u),f(o.$$.fragment,u),r=!0)},o(u){y(n.$$.fragment,u),y(o.$$.fragment,u),r=!1},d(u){u&&_(t),O(n),O(o)}}}function St(e,t,n){let a;Ie(e,ge,i=>n(1,a=i)),ge.set(we(Pt));let o;return Ve.subscribe(i=>{n(0,o=i)}),[o,a]}class $t extends x{constructor(t){super(),X(this,t,St,Rt,H,{})}}new $t({target:document.getElementById("app")});
