import{w as C,a as N}from"./with-props-DVGQI9yc.js";import{j as e}from"./jsx-runtime-B1QxFx_A.js";import{J as A,G as E,$ as L,s as R}from"./index-JEcTe66N.js";import{r as h,A as f,N as x,j as I,k as w,i as U,L as m,l as M,M as O,m as D,S as F,n as T,O as $,g as q,o as H}from"./chunk-D4RADZKF-CYQil85_.js";import{u as g,A as j}from"./ProductPrice-wUdys-RI.js";import{C as B}from"./CartMain-CxmoU66u.js";import{g as _,u as y}from"./search-DOeYwaXi.js";import{I as b}from"./Image-Lob9_gmS.js";import{M as z}from"./Money-D5nHN9tR.js";import"./variants-Cdxbna-A.js";const W="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/favicon-DZkC1E9c.svg",Q="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/reset-BKioPaen.css",V="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/app-Bv0Oluef.css",Y="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2086061/assets/tailwind-D8qJMz9q.css";function G({footer:t,header:s,publicStoreDomain:n}){return e.jsx(h.Suspense,{children:e.jsx(f,{resolve:t,children:r=>{var i;return e.jsx("footer",{className:"footer",children:(r==null?void 0:r.menu)&&((i=s.shop.primaryDomain)==null?void 0:i.url)&&e.jsx(J,{menu:r.menu,primaryDomainUrl:s.shop.primaryDomain.url,publicStoreDomain:n})})}})})}function J({menu:t,primaryDomainUrl:s,publicStoreDomain:n}){return e.jsx("nav",{className:"footer-menu",role:"navigation",children:(t||K).items.map(r=>{if(!r.url)return null;const i=r.url.includes("myshopify.com")||r.url.includes(n)||r.url.includes(s)?new URL(r.url).pathname:r.url;return!i.startsWith("/")?e.jsx("a",{href:i,rel:"noopener noreferrer",target:"_blank",children:r.title},r.id):e.jsx(x,{end:!0,prefetch:"intent",style:Z,to:i,children:r.title},r.id)})})}const K={items:[{id:"gid://shopify/MenuItem/461633060920",resourceId:"gid://shopify/ShopPolicy/23358046264",tags:[],title:"Privacy Policy",type:"SHOP_POLICY",url:"/policies/privacy-policy",items:[]},{id:"gid://shopify/MenuItem/461633093688",resourceId:"gid://shopify/ShopPolicy/23358013496",tags:[],title:"Refund Policy",type:"SHOP_POLICY",url:"/policies/refund-policy",items:[]},{id:"gid://shopify/MenuItem/461633126456",resourceId:"gid://shopify/ShopPolicy/23358111800",tags:[],title:"Shipping Policy",type:"SHOP_POLICY",url:"/policies/shipping-policy",items:[]},{id:"gid://shopify/MenuItem/461633159224",resourceId:"gid://shopify/ShopPolicy/23358079032",tags:[],title:"Terms of Service",type:"SHOP_POLICY",url:"/policies/terms-of-service",items:[]}]};function Z({isActive:t,isPending:s}){return{fontWeight:t?"bold":void 0,color:s?"grey":"white"}}function X({header:t,isLoggedIn:s,cart:n,publicStoreDomain:r}){const{shop:i,menu:a}=t;return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"header",children:[e.jsxs("form",{className:"search-form",role:"search","aria-label":"Search entire store",children:[e.jsx("input",{type:"search",placeholder:"Search entire store here...","aria-label":"Search entire store",className:"search-input",spellCheck:!1,autoComplete:"off"}),e.jsx("button",{type:"submit",className:"search-button","aria-label":"Search",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",width:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),e.jsx("a",{href:"/",className:"logo-link","aria-label":"Home",children:e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0704/7908/5731/files/logo.png?v=1752934162",alt:i.name||"Logo",className:"logo"})}),e.jsxs("nav",{className:"header-ctas",role:"navigation",children:[e.jsx(x,{to:"/account",prefetch:"intent",className:({isActive:c})=>c?"account-link active":"account-link",children:e.jsx(h.Suspense,{fallback:"Account",children:e.jsx(f,{resolve:s,errorElement:"Account",children:c=>"Account"})})}),e.jsx(ee,{cart:n})]})]}),e.jsx("div",{className:"header-menu-block",children:e.jsx(P,{menu:a,viewport:"desktop",primaryDomainUrl:t.shop.primaryDomain.url,publicStoreDomain:r})}),e.jsx("style",{children:`
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
      `})]})}function P({menu:t,primaryDomainUrl:s,viewport:n,publicStoreDomain:r}){const i=`header-menu-${n}`,{close:a}=g();return e.jsxs("nav",{className:i,role:"navigation",children:[n==="mobile"&&e.jsx(x,{end:!0,onClick:a,prefetch:"intent",className:({isActive:o})=>o?"header-menu-item active":"header-menu-item",to:"/",children:"Home"}),t==null?void 0:t.items.map(o=>{if(!o.url)return null;const c=o.url.includes("myshopify.com")||o.url.includes(r)||o.url.includes(s)?new URL(o.url).pathname:o.url;return e.jsx(x,{className:({isActive:d})=>d?"header-menu-item active":"header-menu-item",end:!0,onClick:a,prefetch:"intent",to:c,children:o.title},o.id)})]})}function ee({cart:t}){return e.jsx(h.Suspense,{fallback:e.jsx(S,{count:null}),children:e.jsx(f,{resolve:t,children:e.jsx(re,{})})})}function re(){const t=I(),s=A(t);return e.jsx(S,{count:(s==null?void 0:s.totalQuantity)??0})}function S({count:t}){const{open:s}=g(),{publish:n,shop:r,cart:i,prevCart:a}=E(),o=typeof t=="number"&&t>0;return e.jsxs("a",{href:"/cart",onClick:c=>{c.preventDefault(),s("cart"),n("cart_viewed",{cart:i,prevCart:a,shop:r,url:window.location.href||""})},"aria-label":`Cart with ${t??0} items`,className:"cart-link",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"9",cy:"21",r:"1"}),e.jsx("circle",{cx:"20",cy:"21",r:"1"}),e.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),o&&e.jsx("span",{className:"cart-count",children:t})]})}const k="/search";function te({children:t,className:s="predictive-search-form",...n}){const r=w({key:"search"}),i=h.useRef(null),a=U(),o=g();function c(u){var p;u.preventDefault(),u.stopPropagation(),(p=i==null?void 0:i.current)!=null&&p.value&&i.current.blur()}function d(){var p;const u=(p=i==null?void 0:i.current)==null?void 0:p.value;a(k+(u?`?q=${u}`:"")),o.close()}function v(u){r.submit({q:u.target.value||"",limit:5,predictive:!0},{method:"GET",action:k})}return h.useEffect(()=>{var u;(u=i==null?void 0:i.current)==null||u.setAttribute("type","search")},[]),typeof t!="function"?null:e.jsx(r.Form,{...n,className:s,onSubmit:c,children:t({inputRef:i,fetcher:r,fetchResults:v,goToSearch:d})})}function l({children:t}){const s=g(),{term:n,inputRef:r,fetcher:i,total:a,items:o}=le();function c(){r.current&&(r.current.blur(),r.current.value="")}function d(){c(),s.close()}return t({items:o,closeSearch:d,inputRef:r,state:i.state,term:n,total:a})}l.Articles=se;l.Collections=ne;l.Pages=ie;l.Products=ae;l.Queries=oe;l.Empty=ce;function se({term:t,articles:s,closeSearch:n}){return s.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Articles"}),e.jsx("ul",{children:s.map(r=>{var a;const i=y({baseUrl:`/blogs/${r.blog.handle}/${r.handle}`,trackingParams:r.trackingParameters,term:t.current??""});return e.jsx("li",{className:"predictive-search-result-item",children:e.jsxs(m,{onClick:n,to:i,children:[((a=r.image)==null?void 0:a.url)&&e.jsx(b,{alt:r.image.altText??"",src:r.image.url,width:50,height:50}),e.jsx("div",{children:e.jsx("span",{children:r.title})})]})},r.id)})})]},"articles"):null}function ne({term:t,collections:s,closeSearch:n}){return s.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Collections"}),e.jsx("ul",{children:s.map(r=>{var a;const i=y({baseUrl:`/collections/${r.handle}`,trackingParams:r.trackingParameters,term:t.current});return e.jsx("li",{className:"predictive-search-result-item",children:e.jsxs(m,{onClick:n,to:i,children:[((a=r.image)==null?void 0:a.url)&&e.jsx(b,{alt:r.image.altText??"",src:r.image.url,width:50,height:50}),e.jsx("div",{children:e.jsx("span",{children:r.title})})]})},r.id)})})]},"collections"):null}function ie({term:t,pages:s,closeSearch:n}){return s.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Pages"}),e.jsx("ul",{children:s.map(r=>{const i=y({baseUrl:`/pages/${r.handle}`,trackingParams:r.trackingParameters,term:t.current});return e.jsx("li",{className:"predictive-search-result-item",children:e.jsx(m,{onClick:n,to:i,children:e.jsx("div",{children:e.jsx("span",{children:r.title})})})},r.id)})})]},"pages"):null}function ae({term:t,products:s,closeSearch:n}){return s.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Products"}),e.jsx("ul",{children:s.map(r=>{var c,d;const i=y({baseUrl:`/products/${r.handle}`,trackingParams:r.trackingParameters,term:t.current}),a=(c=r==null?void 0:r.selectedOrFirstAvailableVariant)==null?void 0:c.price,o=(d=r==null?void 0:r.selectedOrFirstAvailableVariant)==null?void 0:d.image;return e.jsx("li",{className:"predictive-search-result-item",children:e.jsxs(m,{to:i,onClick:n,children:[o&&e.jsx(b,{alt:o.altText??"",src:o.url,width:50,height:50}),e.jsxs("div",{children:[e.jsx("p",{children:r.title}),e.jsx("small",{children:a&&e.jsx(z,{data:a})})]})]})},r.id)})})]},"products"):null}function oe({queries:t,queriesDatalistId:s}){return t.length?e.jsx("datalist",{id:s,children:t.map(n=>n?e.jsx("option",{value:n.text},n.text):null)}):null}function ce({term:t}){return t.current?e.jsxs("p",{children:["No results found for ",e.jsx("q",{children:t.current})]}):null}function le(){var a,o;const t=w({key:"search"}),s=h.useRef(""),n=h.useRef(null);(t==null?void 0:t.state)==="loading"&&(s.current=String(((a=t.formData)==null?void 0:a.get("q"))||"")),h.useEffect(()=>{n.current||(n.current=document.querySelector('input[type="search"]'))},[]);const{items:r,total:i}=((o=t==null?void 0:t.data)==null?void 0:o.result)??_();return{items:r,total:i,inputRef:n,term:s,fetcher:t}}function ue({cart:t,children:s=null,footer:n,header:r,isLoggedIn:i,publicStoreDomain:a}){return e.jsxs(j.Provider,{children:[e.jsx(de,{cart:t}),e.jsx(he,{}),e.jsx(pe,{header:r,publicStoreDomain:a}),r&&e.jsx(X,{header:r,cart:t,isLoggedIn:i,publicStoreDomain:a}),e.jsx("main",{children:s}),e.jsx(G,{footer:n,header:r,publicStoreDomain:a})]})}function de({cart:t}){return e.jsx(j,{type:"cart",heading:"CART",children:e.jsx(h.Suspense,{fallback:e.jsx("p",{children:"Loading cart ..."}),children:e.jsx(f,{resolve:t,children:s=>e.jsx(B,{cart:s,layout:"aside"})})})})}function he(){const t=h.useId();return e.jsx(j,{type:"search",heading:"SEARCH",children:e.jsxs("div",{className:"predictive-search",children:[e.jsx("br",{}),e.jsx(te,{children:({fetchResults:s,goToSearch:n,inputRef:r})=>e.jsxs(e.Fragment,{children:[e.jsx("input",{name:"q",onChange:s,onFocus:s,placeholder:"Search",ref:r,type:"search",list:t})," ",e.jsx("button",{onClick:n,children:"Search"})]})}),e.jsx(l,{children:({items:s,total:n,term:r,state:i,closeSearch:a})=>{const{articles:o,collections:c,pages:d,products:v,queries:u}=s;return i==="loading"&&r.current?e.jsx("div",{children:"Loading..."}):n?e.jsxs(e.Fragment,{children:[e.jsx(l.Queries,{queries:u,queriesDatalistId:t}),e.jsx(l.Products,{products:v,closeSearch:a,term:r}),e.jsx(l.Collections,{collections:c,closeSearch:a,term:r}),e.jsx(l.Pages,{pages:d,closeSearch:a,term:r}),e.jsx(l.Articles,{articles:o,closeSearch:a,term:r}),r.current&&n?e.jsx(m,{onClick:a,to:`${k}?q=${r.current}`,children:e.jsxs("p",{children:["View all results for ",e.jsx("q",{children:r.current}),"  →"]})}):null]}):e.jsx(l.Empty,{term:r})}})]})})}function pe({header:t,publicStoreDomain:s}){var n;return t.menu&&((n=t.shop.primaryDomain)==null?void 0:n.url)&&e.jsx(j,{type:"mobile",heading:"MENU",children:e.jsx(P,{menu:t.menu,viewport:"mobile",primaryDomainUrl:t.shop.primaryDomain.url,publicStoreDomain:s})})}const Pe=({formMethod:t,currentUrl:s,nextUrl:n})=>!!(t&&t!=="GET"||s.toString()===n.toString());function Se(){return[{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"icon",type:"image/svg+xml",href:W}]}function Ce({children:t}){const s=L(),n=M("root");return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),e.jsx("link",{rel:"stylesheet",href:Y}),e.jsx("link",{rel:"stylesheet",href:Q}),e.jsx("link",{rel:"stylesheet",href:V}),e.jsx(O,{}),e.jsx(D,{})]}),e.jsxs("body",{children:[n?e.jsx(R.Provider,{cart:n.cart,shop:n.shop,consent:n.consent,children:e.jsx(ue,{...n,children:t})}):t,e.jsx(F,{nonce:s}),e.jsx(T,{nonce:s})]})]})}const Ne=C(function(){return e.jsx($,{})}),Ae=N(function(){var i;const s=q();let n="Unknown error",r=500;return H(s)?(n=((i=s==null?void 0:s.data)==null?void 0:i.message)??s.data,r=s.status):s instanceof Error&&(n=s.message),e.jsxs("div",{className:"route-error",children:[e.jsx("h1",{children:"Oops"}),e.jsx("h2",{children:r}),n&&e.jsx("fieldset",{children:e.jsx("pre",{children:n})})]})});export{Ae as ErrorBoundary,Ce as Layout,Ne as default,Se as links,Pe as shouldRevalidate};
