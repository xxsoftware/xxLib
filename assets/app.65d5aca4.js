import{d as p,g as i,o as c,c as l,r as d,n as f,V as s,a2 as m,a3 as h,a4 as A,a5 as b,a6 as g,a7 as y,a8 as _,a9 as v,aa as x,ab as P,ac as C,u as w,j as E,A as R,ad as S,ae as j,af as O,ag as T}from"./chunks/framework.08e40af2.js";import{t as D}from"./chunks/theme.516744ee.js";const $=p({name:"xx-button",__name:"button",props:{type:{}},setup(e){const t=e,a=i(()=>({[`xx-button--${t.type}`]:t.type}));return(n,G)=>(c(),l("button",{class:f(["xx-button",a.value])},[d(n.$slots,"default")],2))}}),B=e=>(e.install=t=>{const a=e.name;t.component(a,e)},e),V=B($),r=Object.freeze(Object.defineProperty({__proto__:null,Button:V},Symbol.toStringTag,{value:"Module"})),F={install:e=>{for(let t in r)e.use(r[t])}},L={...D,enhanceApp:async({app:e})=>{e.use(F)}};function u(e){if(e.extends){const t=u(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=u(L),k=p({name:"VitePressApp",setup(){const{site:e}=w();return E(()=>{R(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),S(),j(),O(),o.setup&&o.setup(),()=>T(o.Layout)}});async function z(){const e=M(),t=I();t.provide(h,e);const a=A(e.route);return t.provide(b,a),t.component("Content",g),t.component("ClientOnly",y),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:_}),{app:t,router:e,data:a}}function I(){return v(k)}function M(){let e=s,t;return x(a=>{let n=P(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),C(()=>import(n),[])):null},o.NotFound)}s&&z().then(({app:e,router:t,data:a})=>{t.go().then(()=>{m(t.route,a.site),e.mount("#app")})});export{z as createApp};