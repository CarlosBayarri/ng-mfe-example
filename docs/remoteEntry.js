var mfe1;(()=>{"use strict";var o,s,O={1251:(o,s,u)=>{var d={"./Module":()=>u.e(747).then(()=>()=>u(6747))},g=(l,w)=>(u.R=w,w=u.o(d,l)?d[l]():Promise.resolve().then(()=>{throw new Error('Module "'+l+'" does not exist in container.')}),u.R=void 0,w),v=(l,w)=>{if(u.S){var h=u.S.default,y="default";if(h&&h!==l)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return u.S[y]=l,u.I(y,w)}};u.d(s,{get:()=>g,init:()=>v})}},L={};function n(o){var s=L[o];if(void 0!==s)return s.exports;var u=L[o]={exports:{}};return O[o](u,u.exports,n),u.exports}n.m=O,n.c=L,n.n=o=>{var s=o&&o.__esModule?()=>o.default:()=>o;return n.d(s,{a:s}),s},n.d=(o,s)=>{for(var u in s)n.o(s,u)&&!n.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:s[u]})},n.f={},n.e=o=>Promise.all(Object.keys(n.f).reduce((s,u)=>(n.f[u](o,s),s),[])),n.u=o=>o+"."+{50:"00330ad896ca68fa61d6",321:"d7a3921d700b32bb815e",353:"b998649f39faabbb6565",583:"092abeb68038cb227a7f",639:"f44f2987907928f40b38",747:"0b1983d13415c0dbc031",818:"4803aac90b12961f2ecc",879:"2c5509e39390221c5766",924:"57ec8c0dac27fc459ca9",997:"cf63ebcd1c3e01e6831f"}[o]+".js",n.miniCssF=o=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"==typeof window)return window}}(),n.o=(o,s)=>Object.prototype.hasOwnProperty.call(o,s),o={},s="ngMfeExample:",n.l=(u,d,g,v)=>{if(o[u])o[u].push(d);else{var l,w;if(void 0!==g)for(var h=document.getElementsByTagName("script"),y=0;y<h.length;y++){var c=h[y];if(c.getAttribute("src")==u||c.getAttribute("data-webpack")==s+g){l=c;break}}l||(w=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",s+g),l.src=n.tu(u)),o[u]=[d];var E=(C,b)=>{l.onerror=l.onload=null,clearTimeout(p);var S=o[u];if(delete o[u],l.parentNode&&l.parentNode.removeChild(l),S&&S.forEach(M=>M(b)),C)return C(b)},p=setTimeout(E.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=E.bind(null,l.onerror),l.onload=E.bind(null,l.onload),w&&document.head.appendChild(l)}},n.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{var o={},s={};n.f.remotes=(u,d)=>{n.o(o,u)&&o[u].forEach(g=>{var v=n.R;v||(v=[]);var l=s[g];if(!(v.indexOf(l)>=0)){if(v.push(l),l.p)return d.push(l.p);var w=p=>{p||(p=new Error("Container missing")),"string"==typeof p.message&&(p.message+='\nwhile loading "'+l[1]+'" from '+l[2]),O[g]=()=>{throw p},l.p=0},h=(p,C,b,S,M,z)=>{try{var j=p(C,b);if(!j||!j.then)return M(j,S,z);var U=j.then(F=>M(F,S),w);if(!z)return U;d.push(l.p=U)}catch(F){w(F)}},c=(p,C,b)=>h(C.get,l[1],v,0,E,b),E=p=>{l.p=1,O[g]=C=>{C.exports=p()}};h(n,l[2],0,0,(p,C,b)=>p?h(n.I,l[0],0,p,c,b):w(),1)}})}})(),(()=>{n.S={};var o={},s={};n.I=(u,d)=>{d||(d=[]);var g=s[u];if(g||(g=s[u]={}),!(d.indexOf(g)>=0)){if(d.push(g),o[u])return o[u];n.o(n.S,u)||(n.S[u]={});var v=n.S[u],w="ngMfeExample",h=(E,p,C,b)=>{var S=v[E]=v[E]||{},M=S[p];(!M||!M.loaded&&(!b!=!M.eager?b:w>M.from))&&(S[p]={get:C,from:w,eager:!!b})},c=[];switch(u){case"default":h("@angular/common","12.2.4",()=>n.e(583).then(()=>()=>n(8583))),h("@angular/core","12.2.4",()=>n.e(639).then(()=>()=>n(639))),h("@angular/router","12.2.4",()=>n.e(879).then(()=>()=>n(7353)))}return o[u]=c.length?Promise.all(c).then(()=>o[u]=1):1}}})(),(()=>{var o;n.tu=s=>(void 0===o&&(o={createScriptURL:u=>u},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o.createScriptURL(s))})(),(()=>{var o;n.g.importScripts&&(o=n.g.location+"");var s=n.g.document;if(!o&&s&&(s.currentScript&&(o=s.currentScript.src),!o)){var u=s.getElementsByTagName("script");u.length&&(o=u[u.length-1].src)}if(!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=o})(),(()=>{var o=t=>{var e=i=>i.split(".").map(f=>+f==f?+f:f),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),a=r[1]?e(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,e(r[2]))),r[3]&&(a.push([]),a.push.apply(a,e(r[3]))),a},u=t=>{var e=t[0],r="";if(1===t.length)return"*";if(e+.5){r+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var a=1,i=1;i<t.length;i++)a--,r+="u"==(typeof(m=t[i]))[0]?"-":(a>0?".":"")+(a=2,m);return r}var f=[];for(i=1;i<t.length;i++){var m=t[i];f.push(0===m?"not("+x()+")":1===m?"("+x()+" || "+x()+")":2===m?f.pop()+" "+f.pop():u(m))}return x();function x(){return f.pop().replace(/^\((.+)\)$/,"$1")}},d=(t,e)=>{if(0 in t){e=o(e);var r=t[0],a=r<0;a&&(r=-r-1);for(var i=0,f=1,m=!0;;f++,i++){var x,A,V=f<t.length?(typeof t[f])[0]:"";if(i>=e.length||"o"==(A=(typeof(x=e[i]))[0]))return!m||("u"==V?f>r&&!a:""==V!=a);if("u"==A){if(!m||"u"!=V)return!1}else if(m)if(V==A)if(f<=r){if(x!=t[f])return!1}else{if(a?x>t[f]:x<t[f])return!1;x!=t[f]&&(m=!1)}else if("s"!=V&&"n"!=V){if(a||f<=r)return!1;m=!1,f--}else{if(f<=r||A<V!=a)return!1;m=!1}else"s"!=V&&"n"!=V&&(m=!1,f--)}}var B=[],T=B.pop.bind(B);for(i=1;i<t.length;i++){var $=t[i];B.push(1==$?T()|T():2==$?T()&T():$?d($,e):!T())}return!!T()},l=(t,e)=>{var r=t[e];return Object.keys(r).reduce((a,i)=>!a||!r[a].loaded&&((t,e)=>{t=o(t),e=o(e);for(var r=0;;){if(r>=t.length)return r<e.length&&"u"!=(typeof e[r])[0];var a=t[r],i=(typeof a)[0];if(r>=e.length)return"u"==i;var f=e[r],m=(typeof f)[0];if(i!=m)return"o"==i&&"n"==m||"s"==m||"u"==i;if("o"!=i&&"u"!=i&&a!=f)return a<f;r++}})(a,i)?i:a,0)},y=(t,e,r,a)=>{var i=l(t,r);if(!d(a,i))throw new Error(((t,e,r)=>"Unsatisfied version "+e+" of shared singleton module "+t+" (required "+u(r)+")")(r,i,a));return b(t[r][i])},b=t=>(t.loaded=1,t.get()),R=(t=>function(e,r,a,i){var f=n.I(e);return f&&f.then?f.then(t.bind(t,e,n.S[e],r,a,i)):t(e,n.S[e],r,a,i)})((t,e,r,a,i)=>e&&n.o(e,r)?y(e,0,r,a):i()),P={},G={3462:()=>R("default","@angular/core",[4,12,2,4],()=>n.e(639).then(()=>()=>n(639))),807:()=>R("default","@angular/common",[4,12,2,4],()=>n.e(321).then(()=>()=>n(8583))),3742:()=>R("default","@angular/router",[4,12,2,4],()=>n.e(353).then(()=>()=>n(7353)))},N={583:[3462],747:[3742,3462,807],879:[807,3462]};n.f.consumes=(t,e)=>{n.o(N,t)&&N[t].forEach(r=>{if(n.o(P,r))return e.push(P[r]);var a=m=>{P[r]=0,n.m[r]=x=>{delete n.c[r],x.exports=m()}},i=m=>{delete P[r],n.m[r]=x=>{throw delete n.c[r],m}};try{var f=G[r]();f.then?e.push(P[r]=f.then(a).catch(i)):a(f)}catch(m){i(m)}})}})(),(()=>{var o={291:0};n.f.j=(d,g)=>{var v=n.o(o,d)?o[d]:void 0;if(0!==v)if(v)g.push(v[2]);else{var l=new Promise((c,E)=>v=o[d]=[c,E]);g.push(v[2]=l);var w=n.p+n.u(d),h=new Error;n.l(w,c=>{if(n.o(o,d)&&(0!==(v=o[d])&&(o[d]=void 0),v)){var E=c&&("load"===c.type?"missing":c.type),p=c&&c.target&&c.target.src;h.message="Loading chunk "+d+" failed.\n("+E+": "+p+")",h.name="ChunkLoadError",h.type=E,h.request=p,v[1](h)}},"chunk-"+d,d)}};var s=(d,g)=>{var h,y,[v,l,w]=g,c=0;for(h in l)n.o(l,h)&&(n.m[h]=l[h]);for(w&&w(n),d&&d(g);c<v.length;c++)n.o(o,y=v[c])&&o[y]&&o[y][0](),o[v[c]]=0},u=self.webpackChunkngMfeExample=self.webpackChunkngMfeExample||[];u.forEach(s.bind(null,0)),u.push=s.bind(null,u.push.bind(u))})();var D=n(1251);mfe1=D})();