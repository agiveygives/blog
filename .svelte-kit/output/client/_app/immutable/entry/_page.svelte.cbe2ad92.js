import{S as F,i as N,s as U,k as d,a as E,q as T,l as h,m as D,c as w,r as J,h as m,n as _,D as P,b as I,F as f,I as L,P as j,e as Z,y as ee,z as te,A as le,g as ie,d as se,B as ne}from"../chunks/index.82666dd5.js";function me(g){let e,l,t,r,s,a,$,R,b,y,S,o,n,u,c,i,v,p,k,H,M,z,W,q,A,K,B,C,Q;return{c(){e=d("section"),l=d("div"),t=d("img"),s=E(),a=d("h1"),$=T("Andrew Givens"),R=E(),b=d("p"),y=T("Full Stack Software Engineer"),S=E(),o=d("div"),n=d("img"),c=E(),i=d("img"),p=E(),k=d("img"),M=E(),z=d("img"),q=E(),A=d("img"),B=E(),C=d("img"),this.h()},l(V){e=h(V,"SECTION",{class:!0});var O=D(e);l=h(O,"DIV",{class:!0});var G=D(l);t=h(G,"IMG",{class:!0,src:!0,alt:!0}),s=w(G),a=h(G,"H1",{});var X=D(a);$=J(X,"Andrew Givens"),X.forEach(m),R=w(G),b=h(G,"P",{});var Y=D(b);y=J(Y,"Full Stack Software Engineer"),Y.forEach(m),S=w(G),o=h(G,"DIV",{class:!0});var x=D(o);n=h(x,"IMG",{src:!0,alt:!0,class:!0}),c=w(x),i=h(x,"IMG",{src:!0,alt:!0,class:!0}),p=w(x),k=h(x,"IMG",{src:!0,alt:!0,class:!0}),M=w(x),z=h(x,"IMG",{src:!0,alt:!0,class:!0}),q=w(x),A=h(x,"IMG",{src:!0,alt:!0,class:!0}),B=w(x),C=h(x,"IMG",{src:!0,alt:!0,class:!0}),x.forEach(m),G.forEach(m),O.forEach(m),this.h()},h(){_(t,"class","bitmoji svelte-16bgb3z"),P(t.src,r="/images/bitmoji-bird-friends.png")||_(t,"src",r),_(t,"alt","Andrew Givens Bitmoji with Birds"),P(n.src,u="/images/react-logo.png")||_(n,"src",u),_(n,"alt","React JS Logo"),_(n,"class","svelte-16bgb3z"),P(i.src,v="/images/typescript-logo.svg")||_(i,"src",v),_(i,"alt","Type Script Logo"),_(i,"class","svelte-16bgb3z"),P(k.src,H="/images/css-logo.png")||_(k,"src",H),_(k,"alt","CSS 3 Logo"),_(k,"class","svelte-16bgb3z"),P(z.src,W="/images/ruby-on-rails-logo.png")||_(z,"src",W),_(z,"alt","Ruby on Rails Logo"),_(z,"class","svelte-16bgb3z"),P(A.src,K="/images/graphql-logo.png")||_(A,"src",K),_(A,"alt","Graph QL Logo"),_(A,"class","svelte-16bgb3z"),P(C.src,Q="/images/docker-logo.png")||_(C,"src",Q),_(C,"alt","Docker Logo"),_(C,"class","svelte-16bgb3z"),_(o,"class","logos svelte-16bgb3z"),_(l,"class","intro-content svelte-16bgb3z"),_(e,"class","intro svelte-16bgb3z")},m(V,O){I(V,e,O),f(e,l),f(l,t),f(l,s),f(l,a),f(a,$),f(l,R),f(l,b),f(b,y),f(l,S),f(l,o),f(o,n),f(o,c),f(o,i),f(o,p),f(o,k),f(o,M),f(o,z),f(o,q),f(o,A),f(o,B),f(o,C)},p:L,i:L,o:L,d(V){V&&m(e)}}}class ge extends F{constructor(e){super(),N(this,e,null,me,U,{})}}function re(g,e,l){const t=g.slice();return t[2]=e[l].company,t[3]=e[l].location,t[4]=e[l].roles,t[6]=l,t}function ae(g,e,l){const t=g.slice();return t[7]=e[l],t}function oe(g,e,l){const t=g.slice();return t[10]=e[l],t}function ce(g){let e,l=g[10]+"",t;return{c(){e=d("li"),t=T(l)},l(r){e=h(r,"LI",{});var s=D(e);t=J(s,l),s.forEach(m)},m(r,s){I(r,e,s),f(e,t)},p:L,d(r){r&&m(e)}}}function ue(g){let e,l=g[7].title+"",t,r,s,a=g[7].timeline+"",$,R,b,y,S=g[7].duties,o=[];for(let n=0;n<S.length;n+=1)o[n]=ce(oe(g,S,n));return{c(){e=d("h3"),t=T(l),r=E(),s=d("h4"),$=T(a),R=E(),b=d("ul");for(let n=0;n<o.length;n+=1)o[n].c();y=E()},l(n){e=h(n,"H3",{});var u=D(e);t=J(u,l),u.forEach(m),r=w(n),s=h(n,"H4",{});var c=D(s);$=J(c,a),c.forEach(m),R=w(n),b=h(n,"UL",{});var i=D(b);for(let v=0;v<o.length;v+=1)o[v].l(i);y=w(i),i.forEach(m)},m(n,u){I(n,e,u),f(e,t),I(n,r,u),I(n,s,u),f(s,$),I(n,R,u),I(n,b,u);for(let c=0;c<o.length;c+=1)o[c].m(b,null);f(b,y)},p(n,u){if(u&1){S=n[7].duties;let c;for(c=0;c<S.length;c+=1){const i=oe(n,S,c);o[c]?o[c].p(i,u):(o[c]=ce(i),o[c].c(),o[c].m(b,y))}for(;c<o.length;c+=1)o[c].d(1);o.length=S.length}},d(n){n&&m(e),n&&m(r),n&&m(s),n&&m(R),n&&m(b),j(o,n)}}}function _e(g){let e;return{c(){e=d("div"),this.h()},l(l){e=h(l,"DIV",{class:!0}),D(e).forEach(m),this.h()},h(){_(e,"class","divider svelte-11sh2wu")},m(l,t){I(l,e,t)},d(l){l&&m(e)}}}function fe(g){let e,l,t=g[2]+"",r,s,a,$=g[3]+"",R,b,y,S,o,n=g[4],u=[];for(let i=0;i<n.length;i+=1)u[i]=ue(ae(g,n,i));let c=g[6]+1<g[1]&&_e();return{c(){e=d("div"),l=d("h2"),r=T(t),s=E(),a=d("p"),R=T($),b=E(),y=d("div");for(let i=0;i<u.length;i+=1)u[i].c();S=E(),c&&c.c(),o=Z(),this.h()},l(i){e=h(i,"DIV",{class:!0});var v=D(e);l=h(v,"H2",{});var p=D(l);r=J(p,t),p.forEach(m),s=w(v),a=h(v,"P",{});var k=D(a);R=J(k,$),k.forEach(m),v.forEach(m),b=w(i),y=h(i,"DIV",{class:!0});var H=D(y);for(let M=0;M<u.length;M+=1)u[M].l(H);H.forEach(m),S=w(i),c&&c.l(i),o=Z(),this.h()},h(){_(e,"class","company"),_(y,"class","roles")},m(i,v){I(i,e,v),f(e,l),f(l,r),f(e,s),f(e,a),f(a,R),I(i,b,v),I(i,y,v);for(let p=0;p<u.length;p+=1)u[p].m(y,null);I(i,S,v),c&&c.m(i,v),I(i,o,v)},p(i,v){if(v&1){n=i[4];let p;for(p=0;p<n.length;p+=1){const k=ae(i,n,p);u[p]?u[p].p(k,v):(u[p]=ue(k),u[p].c(),u[p].m(y,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=n.length}},d(i){i&&m(e),i&&m(b),i&&m(y),j(u,i),i&&m(S),c&&c.d(i),i&&m(o)}}}function pe(g){let e,l=g[0],t=[];for(let r=0;r<l.length;r+=1)t[r]=fe(re(g,l,r));return{c(){e=d("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=h(r,"DIV",{class:!0});var s=D(e);for(let a=0;a<t.length;a+=1)t[a].l(s);s.forEach(m),this.h()},h(){_(e,"class","experience svelte-11sh2wu")},m(r,s){I(r,e,s);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(r,[s]){if(s&3){l=r[0];let a;for(a=0;a<l.length;a+=1){const $=re(r,l,a);t[a]?t[a].p($,s):(t[a]=fe($),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:L,o:L,d(r){r&&m(e),j(t,r)}}}function de(g){const e=[{company:"Big Nerd Ranch",location:"Atlanta, GA (remote)",roles:[{title:"Senior Software Engineer",timeline:"October 2021 - Present",duties:["Consulted for a client on a greenfield international payment platform.","Developed a greenfield full-stack web app using Rails, React, TypeScript, and GraphQL.","Worked with the client to create good development practices for code quality and testing","Helped cultivate an agile culture for the client team."]}]},{company:"Retail Success",location:"Overland Park, KS",roles:[{title:"Front-End Developer",timeline:"July 2020 - October 2021",duties:["Developed for an ASP.NET application using TypeScript, React and Redux.","Pioneered a shift to TDD within our front-end applications using react-testing-library","Uplifted our ASP.NET MVC front-end to a mobile friendly React application."]}]},{company:"Cerner",location:"Kansas City, MO",roles:[{title:"Senior Software Engineer",timeline:"July 2018 - July 2020",duties:["Developed for a Ruby on Rails application using React and Redux.","Developed for an API using Ruby and AWS Technologies.","Developed enhancements and bug fixes for mpage components using JavaScript.","Developed tests with  Rspec, Jest with Enzyme, Jasmine, and Selenium WebdriverIO.","Participated in Agile practices and ceremonies.","Mentored new hires in Cerner’s Dev Academy."]},{title:"Senior Software Engineer Intern",timeline:"May 2017 - July 2017",duties:["Developed for Population Health system with the Care Management Team.","Used JavaScript, HTML5, and CSS3 to complete stories during two week iterations.","Updated Dynamic Document templates to include new CSS styles and information."]}]}],l=e.length;return[e,l]}class he extends F{constructor(e){super(),N(this,e,de,pe,U,{})}}function ve(g){let e,l,t,r;return e=new ge({}),t=new he({}),{c(){ee(e.$$.fragment),l=E(),ee(t.$$.fragment)},l(s){te(e.$$.fragment,s),l=w(s),te(t.$$.fragment,s)},m(s,a){le(e,s,a),I(s,l,a),le(t,s,a),r=!0},p:L,i(s){r||(ie(e.$$.fragment,s),ie(t.$$.fragment,s),r=!0)},o(s){se(e.$$.fragment,s),se(t.$$.fragment,s),r=!1},d(s){ne(e,s),s&&m(l),ne(t,s)}}}class ye extends F{constructor(e){super(),N(this,e,null,ve,U,{})}}export{ye as default};