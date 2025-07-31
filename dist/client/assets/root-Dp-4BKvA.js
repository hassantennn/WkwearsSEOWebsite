import{w as P,a as S}from"./with-props-Bw4uH2vI.js";import{j as e}from"./jsx-runtime-BJrenFx_.js";import{J as A,G as E,$ as R,s as L}from"./index-OfdbP0_t.js";import{r as u,C as f,N as x,D as U,A as w,i as D,L as p,E as F,M,G as $,S as T,H as I,O as q,g as B,I as H}from"./chunk-D4RADZKF-Dyetzg4o.js";import{u as g,A as j}from"./ProductPrice-bqsdTYHv.js";import{C as O}from"./CartMain-B4crXQzn.js";import{g as z,u as v}from"./search-DOeYwaXi.js";import{I as k}from"./Image-B_TZjruE.js";import{M as Q}from"./Money-APOJR4kl.js";import"./variants-DmSdMkTR.js";const _="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2139555/assets/favicon-DZkC1E9c.svg",W="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2139555/assets/reset-Couz2oIh.css",G="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2139555/assets/app-CvP3WGRe.css",V="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2139555/assets/tailwind-DQxMxbhC.css",J="https://cdn.shopify.com/oxygen-v2/45696/42654/89755/2139555/assets/breadcrumb-BcNn9Qm2.css";function K({footer:t,header:s,publicStoreDomain:n}){return e.jsx(u.Suspense,{children:e.jsx(f,{resolve:t,children:r=>{var o,a,l,c;const i=(l=(a=(o=s.shop.brand)==null?void 0:o.logo)==null?void 0:a.image)==null?void 0:l.url;return e.jsxs("footer",{className:"footer bg-[#f5e9d7] py-10",children:[e.jsxs("div",{className:"footer-inner max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 px-6",children:[e.jsxs("div",{className:"footer-col footer-quote-block p-6 rounded-lg text-center",children:[i&&e.jsx("img",{src:i,alt:s.shop.name,className:"footer-logo mb-4 mx-auto"}),e.jsx("p",{className:"footer-description text-[#4b3621] leading-relaxed",children:"Premium modest wear crafted with care. Discover elegant designs that celebrate your style."})]}),e.jsxs("div",{className:"footer-col p-6 rounded-lg text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6 text-[#4b3621]",children:"Quick Links"}),e.jsxs("ul",{className:"footer-links space-y-2 text-[#4b3621]",children:[e.jsx("li",{children:e.jsx(x,{to:"/",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"#header-search",children:"Search"})}),e.jsx("li",{children:e.jsx(x,{to:"/collections/all",children:"Shop"})}),e.jsx("li",{children:e.jsx(x,{to:"/blogs",children:"Blog"})}),e.jsx("li",{children:e.jsx(x,{to:"/contact",children:"Contact"})}),e.jsx("li",{children:e.jsx(x,{to:"/account",children:"Account"})})]})]}),e.jsxs("div",{className:"footer-col p-6 rounded-lg text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6 text-[#4b3621]",children:"Customer Service"}),(r==null?void 0:r.menu)&&((c=s.shop.primaryDomain)==null?void 0:c.url)&&e.jsx(X,{menu:r.menu,primaryDomainUrl:s.shop.primaryDomain.url,publicStoreDomain:n})]}),e.jsxs("div",{className:"footer-col p-6 rounded-lg text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-6 text-[#4b3621]",children:"Connect"}),e.jsxs("ul",{className:"footer-links space-y-2 text-[#4b3621]",children:[e.jsx("li",{children:e.jsx("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),e.jsx("li",{children:e.jsx("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto:info@wkwears.com",children:"info@wkwears.com"})})]})]})]}),e.jsxs("div",{className:"footer-bottom text-center mt-8 text-[#4b3621]",children:["© ",new Date().getFullYear()," ",s.shop.name,". All rights reserved."]})]})}})})}function X({menu:t,primaryDomainUrl:s,publicStoreDomain:n}){const r=(t==null?void 0:t.items)??Y.items;return e.jsx("ul",{className:"footer-menu space-y-2",role:"navigation",children:r.map(i=>{if(!i.url)return null;const o=i.url.includes("myshopify.com")||i.url.includes(n)||i.url.includes(s)?new URL(i.url).pathname:i.url,a=!o.startsWith("/");return e.jsx("li",{children:a?e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:i.title}):e.jsx(x,{to:o,style:Z,children:i.title})},i.id)})})}const Y={items:[{id:"1",title:"Privacy Policy",url:"/policies/privacy-policy"},{id:"2",title:"Refund Policy",url:"/policies/refund-policy"},{id:"3",title:"Shipping Policy",url:"/policies/shipping-policy"},{id:"4",title:"Terms of Service",url:"/policies/terms-of-service"}]};function Z({isActive:t,isPending:s}){return{fontWeight:t?"bold":void 0,color:s?"grey":"#4b3621"}}function ee({header:t,isLoggedIn:s,cart:n,publicStoreDomain:r}){const{shop:i,menu:o}=t;return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"header",children:[e.jsxs("form",{id:"header-search",className:"search-form",role:"search","aria-label":"Search entire store",children:[e.jsx("input",{type:"search",placeholder:"Search entire store here...","aria-label":"Search entire store",className:"search-input",spellCheck:!1,autoComplete:"off"}),e.jsx("button",{type:"submit",className:"search-button","aria-label":"Search",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",width:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]}),e.jsx("a",{href:"/",className:"logo-link","aria-label":"Home",children:e.jsx("img",{src:"https://cdn.shopify.com/s/files/1/0704/7908/5731/files/logo-removebg-preview-2.png?v=1753421784",alt:i.name||"Logo",className:"logo"})}),e.jsxs("nav",{className:"header-ctas",role:"navigation",children:[e.jsx(x,{to:"/account",prefetch:"intent",className:({isActive:l})=>l?"account-link active":"account-link",children:e.jsx(u.Suspense,{fallback:"Account",children:e.jsx(f,{resolve:s,errorElement:"Account",children:l=>"Account"})})}),e.jsx(re,{cart:n})]})]}),e.jsx("div",{className:"header-menu-block",children:e.jsx(N,{menu:o,viewport:"desktop",primaryDomainUrl:t.shop.primaryDomain.url,publicStoreDomain:r})}),e.jsx("style",{children:`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 0;
          border-bottom: 1px solid #d9c5b2;
          background: linear-gradient(to right, #faf9f5, #fff);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          font-family: 'Playfair Display', serif;
        }
        .search-form {
          display: flex;
          align-items: center;
          max-width: 320px;
          flex-grow: 1;
          margin-right: auto;
          border: 1px solid #d9c5b2;
          border-radius: 40px;
          padding: 0 0.75rem;
          background: #fff;
          height: 36px;
          margin-left: 1rem;
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
          display: flex;
          justify-content: center;
          flex-grow: 0;
          margin: 0 auto;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .logo {
          max-width: 100%;
          max-height: 80px;
          height: auto;
          width: auto;
          cursor: pointer;
        }
        .header-ctas {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-right: 1rem;
          font-weight: 500;
          color: #333;
        }
        .account-link {
          color: inherit;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          text-transform: uppercase;
          font-size: 0.85rem;
        }
        .account-link:hover {
          text-decoration: none !important;
          cursor: pointer;
        }
        .account-link.active {
          font-weight: 700;
          border-bottom: 2px solid #d4af37;
        }
        .header-menu-block {
          border-top: 1px solid #d9c5b2;
          background: linear-gradient(to right, #faf9f5, #fff);
          padding: 0.75rem 0;
          display: flex;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
          border-bottom-color: #d4af37;
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
      `})]})}function N({menu:t,primaryDomainUrl:s,viewport:n,publicStoreDomain:r}){const i=`header-menu-${n}`,{close:o}=g();return e.jsxs("nav",{className:i,role:"navigation",children:[n==="mobile"&&e.jsx(x,{end:!0,onClick:o,prefetch:"intent",className:({isActive:a})=>a?"header-menu-item active":"header-menu-item",to:"/",children:"Home"}),t==null?void 0:t.items.map(a=>{if(!a.url)return null;let l=a.url.includes("myshopify.com")||a.url.includes(r)||a.url.includes(s)?new URL(a.url).pathname:a.url;return/\/pages\/contact\/?$/.test(l)&&(l=l.replace(/\/pages\/contact\/?$/,"/contact")),e.jsx(x,{className:({isActive:c})=>c?"header-menu-item active":"header-menu-item",end:!0,onClick:o,prefetch:"intent",to:l,children:a.title},a.id)})]})}function re({cart:t}){return e.jsx(u.Suspense,{fallback:e.jsx(C,{count:null}),children:e.jsx(f,{resolve:t,children:e.jsx(te,{})})})}function te(){const t=U(),s=A(t);return e.jsx(C,{count:(s==null?void 0:s.totalQuantity)??0})}function C({count:t}){const{open:s}=g(),{publish:n,shop:r,cart:i,prevCart:o}=E(),a=typeof t=="number"&&t>0;return e.jsxs("a",{href:"/cart",onClick:l=>{l.preventDefault(),s("cart"),n("cart_viewed",{cart:i,prevCart:o,shop:r,url:window.location.href||""})},"aria-label":`Cart with ${t??0} items`,className:"cart-link",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"9",cy:"21",r:"1"}),e.jsx("circle",{cx:"20",cy:"21",r:"1"}),e.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),a&&e.jsx("span",{className:"cart-count",children:t})]})}const b="/search";function se({children:t,className:s="predictive-search-form",...n}){const r=w({key:"search"}),i=u.useRef(null),o=D(),a=g();function l(h){var m;h.preventDefault(),h.stopPropagation(),(m=i==null?void 0:i.current)!=null&&m.value&&i.current.blur()}function c(){var m;const h=(m=i==null?void 0:i.current)==null?void 0:m.value;o(b+(h?`?q=${h}`:"")),a.close()}function y(h){r.submit({q:h.target.value||"",limit:5,predictive:!0},{method:"GET",action:b})}return u.useEffect(()=>{var h;(h=i==null?void 0:i.current)==null||h.setAttribute("type","search")},[]),typeof t!="function"?null:e.jsx(r.Form,{...n,className:s,onSubmit:l,children:t({inputRef:i,fetcher:r,fetchResults:y,goToSearch:c})})}function d({children:t}){const s=g(),{term:n,inputRef:r,fetcher:i,total:o,items:a}=de();function l(){r.current&&(r.current.blur(),r.current.value="")}function c(){l(),s.close()}return t({items:a,closeSearch:c,inputRef:r,state:i.state,term:n,total:o})}d.Articles=ne;d.Collections=ie;d.Pages=oe;d.Products=ae;d.Queries=le;d.Empty=ce;function ne({term:t,articles:s,closeSearch:n}){return s.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Articles"}),e.jsx("ul",{children:s.map(r=>{var o;const i=v({baseUrl:`/blogs/${r.blog.handle}/${r.handle}`,trackingParams:r.trackingParameters,term:t.current??""});return e.jsx("li",{className:"predictive-search-result-item",children:e.jsxs(p,{onClick:n,to:i,children:[((o=r.image)==null?void 0:o.url)&&e.jsx(k,{alt:r.image.altText??"",src:r.image.url,width:50,height:50}),e.jsx("div",{children:e.jsx("span",{children:r.title})})]})},r.id)})})]},"articles"):null}function ie({term:t,collections:s,closeSearch:n}){return s.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Collections"}),e.jsx("ul",{children:s.map(r=>{var o;const i=v({baseUrl:`/collections/${r.handle}`,trackingParams:r.trackingParameters,term:t.current});return e.jsx("li",{className:"predictive-search-result-item",children:e.jsxs(p,{onClick:n,to:i,children:[((o=r.image)==null?void 0:o.url)&&e.jsx(k,{alt:r.image.altText??"",src:r.image.url,width:50,height:50}),e.jsx("div",{children:e.jsx("span",{children:r.title})})]})},r.id)})})]},"collections"):null}function oe({term:t,pages:s,closeSearch:n}){return s.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Pages"}),e.jsx("ul",{children:s.map(r=>{const i=v({baseUrl:`/pages/${r.handle}`,trackingParams:r.trackingParameters,term:t.current});return e.jsx("li",{className:"predictive-search-result-item",children:e.jsx(p,{onClick:n,to:i,children:e.jsx("div",{children:e.jsx("span",{children:r.title})})})},r.id)})})]},"pages"):null}function ae({term:t,products:s,closeSearch:n}){return s.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Products"}),e.jsx("ul",{children:s.map(r=>{var l,c;const i=v({baseUrl:`/products/${r.handle}`,trackingParams:r.trackingParameters,term:t.current}),o=(l=r==null?void 0:r.selectedOrFirstAvailableVariant)==null?void 0:l.price,a=(c=r==null?void 0:r.selectedOrFirstAvailableVariant)==null?void 0:c.image;return e.jsx("li",{className:"predictive-search-result-item",children:e.jsxs(p,{to:i,onClick:n,children:[a&&e.jsx(k,{alt:a.altText??"",src:a.url,width:50,height:50}),e.jsxs("div",{children:[e.jsx("p",{children:r.title}),e.jsx("small",{children:o&&e.jsx(Q,{data:o})})]})]})},r.id)})})]},"products"):null}function le({queries:t,queriesDatalistId:s}){return t.length?e.jsx("datalist",{id:s,children:t.map(n=>n?e.jsx("option",{value:n.text},n.text):null)}):null}function ce({term:t}){return t.current?e.jsxs("p",{children:["No results found for ",e.jsx("q",{children:t.current})]}):null}function de(){var o,a;const t=w({key:"search"}),s=u.useRef(""),n=u.useRef(null);(t==null?void 0:t.state)==="loading"&&(s.current=String(((o=t.formData)==null?void 0:o.get("q"))||"")),u.useEffect(()=>{n.current||(n.current=document.querySelector('input[type="search"]'))},[]);const{items:r,total:i}=((a=t==null?void 0:t.data)==null?void 0:a.result)??z();return{items:r,total:i,inputRef:n,term:s,fetcher:t}}function he({cart:t,children:s=null,footer:n,header:r,isLoggedIn:i,publicStoreDomain:o}){return e.jsxs(j.Provider,{children:[e.jsx(ue,{cart:t}),e.jsx(xe,{}),e.jsx(me,{header:r,publicStoreDomain:o}),r&&e.jsx(ee,{header:r,cart:t,isLoggedIn:i,publicStoreDomain:o}),e.jsx("main",{children:s}),e.jsx(K,{footer:n,header:r,publicStoreDomain:o})]})}function ue({cart:t}){return e.jsx(j,{type:"cart",heading:"CART",children:e.jsx(u.Suspense,{fallback:e.jsx("p",{children:"Loading cart ..."}),children:e.jsx(f,{resolve:t,children:s=>e.jsx(O,{cart:s,layout:"aside"})})})})}function xe(){const t=u.useId();return e.jsx(j,{type:"search",heading:"SEARCH",children:e.jsxs("div",{className:"predictive-search",children:[e.jsx("br",{}),e.jsx(se,{children:({fetchResults:s,goToSearch:n,inputRef:r})=>e.jsxs(e.Fragment,{children:[e.jsx("input",{name:"q",onChange:s,onFocus:s,placeholder:"Search",ref:r,type:"search",list:t})," ",e.jsx("button",{onClick:n,children:"Search"})]})}),e.jsx(d,{children:({items:s,total:n,term:r,state:i,closeSearch:o})=>{const{articles:a,collections:l,pages:c,products:y,queries:h}=s;return i==="loading"&&r.current?e.jsx("div",{children:"Loading..."}):n?e.jsxs(e.Fragment,{children:[e.jsx(d.Queries,{queries:h,queriesDatalistId:t}),e.jsx(d.Products,{products:y,closeSearch:o,term:r}),e.jsx(d.Collections,{collections:l,closeSearch:o,term:r}),e.jsx(d.Pages,{pages:c,closeSearch:o,term:r}),e.jsx(d.Articles,{articles:a,closeSearch:o,term:r}),r.current&&n?e.jsx(p,{onClick:o,to:`${b}?q=${r.current}`,children:e.jsxs("p",{children:["View all results for ",e.jsx("q",{children:r.current}),"  →"]})}):null]}):e.jsx(d.Empty,{term:r})}})]})})}function me({header:t,publicStoreDomain:s}){var n;return t.menu&&((n=t.shop.primaryDomain)==null?void 0:n.url)&&e.jsx(j,{type:"mobile",heading:"MENU",children:e.jsx(N,{menu:t.menu,viewport:"mobile",primaryDomainUrl:t.shop.primaryDomain.url,publicStoreDomain:s})})}const Ce=({formMethod:t,currentUrl:s,nextUrl:n})=>!!(t&&t!=="GET"||s.toString()===n.toString());function Pe(){return[{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap"},{rel:"icon",type:"image/svg+xml",href:_}]}function Se({children:t}){const s=R(),n=F("root");return e.jsxs("html",{lang:"en",className:"overflow-x-hidden",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),e.jsx("link",{rel:"stylesheet",href:V}),e.jsx("link",{rel:"stylesheet",href:W}),e.jsx("link",{rel:"stylesheet",href:G}),e.jsx("link",{rel:"stylesheet",href:J}),e.jsx(M,{}),e.jsx($,{})]}),e.jsxs("body",{className:"overflow-x-hidden",children:[n?e.jsx(L.Provider,{cart:n.cart,shop:n.shop,consent:n.consent,children:e.jsx(he,{...n,children:t})}):t,e.jsx(T,{nonce:s}),e.jsx(I,{nonce:s})]})]})}const Ae=P(function(){return e.jsx(q,{})}),Ee=S(function(){var i;const s=B();let n="Unknown error",r=500;return H(s)?(n=((i=s==null?void 0:s.data)==null?void 0:i.message)??s.data,r=s.status):s instanceof Error&&(n=s.message),e.jsxs("div",{className:"route-error",children:[e.jsx("h1",{children:"Oops"}),e.jsx("h2",{children:r}),n&&e.jsx("fieldset",{children:e.jsx("pre",{children:n})})]})});export{Ee as ErrorBoundary,Se as Layout,Ae as default,Pe as links,Ce as shouldRevalidate};
