function p(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(L)}function S(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function lt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function I(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return p;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(G(n,e))}function st(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=n.dirty[o]|r[o];return s}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,s){if(r){const c=O(n,e,i,s);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){return t??""}function ht(t){return t&&S(t.destroy)?t.destroy:p}let E=!1;function J(){E=!0}function K(){E=!1}function W(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&u.push(a)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const l=n[u].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:W(1,r,x=>n[e[x]].claim_order,l))-1;i[u]=e[a]+1;const f=a+1;e[f]=u,r=Math.max(f,r)}const s=[],c=[];let o=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(s.push(n[u-1]);o>=u;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);s.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<s.length&&c[u].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(c[u],a)}}function R(t,n){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){E&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function gt(){return j("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){Y(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const u=e(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const u=e(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function $t(t,n,e){return Z(t,n,e,V)}function tt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function wt(t){return tt(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n){return new t(n)}let y;function m(t){y=t}function T(){if(!y)throw new Error("Function called outside component initialization");return y}function At(t){T().$$.on_mount.push(t)}function St(t){T().$$.after_update.push(t)}const h=[],q=[],$=[],B=[],z=Promise.resolve();let N=!1;function D(){N||(N=!0,z.then(F))}function jt(){return D(),z}function A(t){$.push(t)}const v=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,m(n),nt(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;q.length;)q.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];v.has(e)||(v.add(e),e())}$.length=0}while(h.length);for(;B.length;)B.pop()();N=!1,v.clear(),m(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let _;function Ct(){_={r:0,c:[],p:_}}function Mt(){_.r||g(_.c),_=_.p}function et(t,n){t&&t.i&&(w.delete(t),t.i(n))}function kt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function qt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||A(()=>{const c=t.$$.on_mount.map(L).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),s.forEach(A)}function rt(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(h.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Lt(t,n,e,i,r,s,c,o=[-1]){const u=y;m(t);const l=t.$$={fragment:null,ctx:[],props:s,update:p,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:k(),dirty:o,skip_bound:!1,root:n.target||u.$$.root};c&&c(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,x,...C)=>{const M=C.length?C[0]:x;return l.ctx&&r(l.ctx[f],l.ctx[f]=M)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](M),a&&ct(t,f)),x}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){J();const f=X(n.target);l.fragment&&l.fragment.l(f),f.forEach(U)}else l.fragment&&l.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),K(),F()}m(u)}class Ot{$destroy(){rt(this,1),this.$destroy=p}$on(n,e){if(!S(e))return p;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{it as A,rt as B,A as C,lt as D,dt as E,R as F,xt as G,ht as H,p as I,g as J,st as K,at as L,_t as M,ft as N,ot as O,pt as P,Ot as S,yt as a,mt as b,wt as c,kt as d,gt as e,Mt as f,et as g,U as h,Lt as i,St as j,V as k,$t as l,X as m,bt as n,At as o,vt as p,j as q,tt as r,ut as s,jt as t,Et as u,Ct as v,q as w,Nt as x,qt as y,Bt as z};
