import{E as e,F as t,I as n,N as r,P as i,S as a,T as o,b as s,g as c,i as l,j as u,t as d,v as f,y as p}from"./index-B8gKzK4c.js";import{t as m}from"./SectionTitle-YekJXefT.js";var h=n(t(),1),g=class{constructor(e=0,t=`Network Error`){this.status=e,this.text=t}},_={origin:`https://api.emailjs.com`,blockHeadless:!1,storageProvider:(()=>{if(!(typeof localStorage>`u`))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},v=e=>e?typeof e==`string`?{publicKey:e}:e.toString()===`[object Object]`?e:{}:{},y=(e,t=`https://api.emailjs.com`)=>{if(!e)return;let n=v(e);_.publicKey=n.publicKey,_.blockHeadless=n.blockHeadless,_.storageProvider=n.storageProvider,_.blockList=n.blockList,_.limitRate=n.limitRate,_.origin=n.origin||t},b=async(e,t,n={})=>{let r=await fetch(_.origin+e,{method:`POST`,headers:n,body:t}),i=await r.text(),a=new g(r.status,i);if(r.ok)return a;throw a},x=(e,t,n)=>{if(!e||typeof e!=`string`)throw`The public key is required. Visit https://dashboard.emailjs.com/admin/account`;if(!t||typeof t!=`string`)throw`The service ID is required. Visit https://dashboard.emailjs.com/admin`;if(!n||typeof n!=`string`)throw`The template ID is required. Visit https://dashboard.emailjs.com/admin/templates`},S=e=>{if(e&&e.toString()!==`[object Object]`)throw`The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/`},C=e=>e.webdriver||!e.languages||e.languages.length===0,w=()=>new g(451,`Unavailable For Headless Browser`),T=(e,t)=>{if(!Array.isArray(e))throw`The BlockList list has to be an array`;if(typeof t!=`string`)throw`The BlockList watchVariable has to be a string`},E=e=>!e.list?.length||!e.watchVariable,D=(e,t)=>e instanceof FormData?e.get(t):e[t],O=(e,t)=>{if(E(e))return!1;T(e.list,e.watchVariable);let n=D(t,e.watchVariable);return typeof n==`string`?e.list.includes(n):!1},k=()=>new g(403,`Forbidden`),A=(e,t)=>{if(typeof e!=`number`||e<0)throw`The LimitRate throttle has to be a positive number`;if(t&&typeof t!=`string`)throw`The LimitRate ID has to be a non-empty string`},j=async(e,t,n)=>{let r=Number(await n.get(e)||0);return t-Date.now()+r},M=async(e,t,n)=>{if(!t.throttle||!n)return!1;A(t.throttle,t.id);let r=t.id||e;return await j(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},N=()=>new g(429,`Too Many Requests`),P=async(e,t,n,r)=>{let i=v(r),a=i.publicKey||_.publicKey,o=i.blockHeadless||_.blockHeadless,s=i.storageProvider||_.storageProvider,c={..._.blockList,...i.blockList},l={..._.limitRate,...i.limitRate};return o&&C(navigator)?Promise.reject(w()):(x(a,e,t),S(n),n&&O(c,n)?Promise.reject(k()):await M(location.pathname,l,s)?Promise.reject(N()):b(`/api/v1.0/email/send`,JSON.stringify({lib_version:`4.4.1`,user_id:a,service_id:e,template_id:t,template_params:n}),{"Content-type":`application/json`}))},F=e=>{if(!e||e.nodeName!==`FORM`)throw`The 3rd parameter is expected to be the HTML form element or the style selector of the form`},I=e=>typeof e==`string`?document.querySelector(e):e,L={init:y,send:P,sendForm:async(e,t,n,r)=>{let i=v(r),a=i.publicKey||_.publicKey,o=i.blockHeadless||_.blockHeadless,s=_.storageProvider||i.storageProvider,c={..._.blockList,...i.blockList},l={..._.limitRate,...i.limitRate};if(o&&C(navigator))return Promise.reject(w());let u=I(n);x(a,e,t),F(u);let d=new FormData(u);return O(c,d)?Promise.reject(k()):await M(location.pathname,l,s)?Promise.reject(N()):(d.append(`lib_version`,`4.4.1`),d.append(`service_id`,e),d.append(`template_id`,t),d.append(`user_id`,a),b(`/api/v1.0/email/send-form`,d))},EmailJSResponseStatus:g},R=r(),z=()=>{let[t,n]=(0,h.useState)({from_name:``,from_email:``,subject:``,message:``}),[r,g]=(0,h.useState)(!1),_=e=>{n({...t,[e.target.name]:e.target.value})},v=async e=>{e.preventDefault(),g(!0);try{await L.send(`service_5k52isp`,`template_obclalk`,t,`6uR4EaYfCwPncsPE-`),i.success(`Message sent successfully!`),n({from_name:``,from_email:``,subject:``,message:``})}catch(e){console.error(e),i.error(`Failed to send message.`)}g(!1)},y=[{icon:(0,R.jsx)(c,{}),title:`Email`,value:d.email,href:`mailto:${d.email}`},{icon:(0,R.jsx)(e,{}),title:`Phone`,value:d.phone,href:`tel:${d.phone}`},{icon:(0,R.jsx)(a,{}),title:`Location`,value:d.location,href:void 0}],b=[{icon:(0,R.jsx)(s,{}),name:`LinkedIn`,link:d.socials.linkedin},{icon:(0,R.jsx)(f,{}),name:`GitHub`,link:d.socials.github},{icon:(0,R.jsx)(p,{}),name:`Instagram`,link:d.socials.instagram}];return(0,R.jsxs)(`section`,{id:`contact`,className:`editorial-contact relative overflow-hidden py-20 md:py-28`,children:[(0,R.jsx)(`div`,{className:`editorial-bg`}),(0,R.jsx)(`div`,{className:`editorial-noise`}),(0,R.jsx)(`div`,{className:`editorial-glow editorial-glow-left`}),(0,R.jsx)(`div`,{className:`editorial-glow editorial-glow-right`}),(0,R.jsxs)(`div`,{className:`relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8`,children:[(0,R.jsx)(m,{title:`Get In Touch`,subtitle:`Let's build something amazing together.`}),(0,R.jsxs)(`div`,{className:`editorial-header`,children:[(0,R.jsxs)(`div`,{className:`editorial-title-area`,children:[(0,R.jsxs)(`div`,{className:`editorial-eyebrow`,children:[(0,R.jsx)(`span`,{className:`eyebrow-line`}),(0,R.jsx)(`span`,{children:`06 / CONTACT`})]}),(0,R.jsxs)(`h2`,{children:[`LET'S`,(0,R.jsx)(`br`,{}),(0,R.jsx)(`span`,{children:`TALK.`})]}),(0,R.jsx)(`div`,{className:`editorial-title-line`}),(0,R.jsx)(`p`,{className:`editorial-description`,children:`Great ideas start with a simple conversation. Whether it's a new opportunity, a project, or a technical discussion — let's connect.`})]}),(0,R.jsxs)(`div`,{className:`editorial-side-note`,children:[(0,R.jsx)(`span`,{children:`DIRECT`}),(0,R.jsx)(`span`,{children:`COMMUNICATION`}),(0,R.jsx)(`span`,{children:`CHANNEL`})]})]}),(0,R.jsxs)(`div`,{className:`editorial-main-grid`,children:[(0,R.jsxs)(`div`,{className:`editorial-contact-info`,children:[(0,R.jsxs)(`div`,{className:`editorial-section-label`,children:[(0,R.jsx)(`span`,{children:`01`}),(0,R.jsx)(`span`,{children:`REACH ME DIRECTLY`})]}),(0,R.jsx)(`div`,{className:`editorial-divider`}),(0,R.jsx)(`div`,{className:`editorial-contact-list`,children:y.map((e,t)=>(0,R.jsxs)(u.div,{className:`editorial-contact-item`,whileHover:{x:5},transition:{duration:.2},children:[(0,R.jsxs)(`div`,{className:`editorial-contact-number`,children:[`0`,t+1]}),(0,R.jsx)(`div`,{className:`editorial-contact-icon`,children:e.icon}),(0,R.jsxs)(`div`,{className:`editorial-contact-content`,children:[(0,R.jsx)(`span`,{children:e.title}),e.href?(0,R.jsx)(`a`,{href:e.href,children:e.value}):(0,R.jsx)(`p`,{children:e.value})]}),e.href&&(0,R.jsx)(l,{className:`editorial-item-arrow`})]},t))}),(0,R.jsxs)(`div`,{className:`editorial-social-block`,children:[(0,R.jsxs)(`div`,{className:`editorial-section-label`,children:[(0,R.jsx)(`span`,{children:`02`}),(0,R.jsx)(`span`,{children:`FOLLOW / CONNECT`})]}),(0,R.jsx)(`div`,{className:`editorial-socials`,children:b.map((e,t)=>(0,R.jsx)(u.a,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,"aria-label":e.name,className:`editorial-social`,whileHover:{y:-5},whileTap:{scale:.95},children:e.icon},t))})]}),(0,R.jsxs)(`div`,{className:`editorial-info-footer`,children:[(0,R.jsx)(`span`,{className:`editorial-footer-mark`}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`strong`,{children:`IT / INFRASTRUCTURE / SUPPORT`}),(0,R.jsx)(`p`,{children:`Let's create something useful.`})]})]})]}),(0,R.jsxs)(u.div,{className:`editorial-form-wrapper`,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.7,ease:`easeOut`},viewport:{once:!0,amount:.2},children:[(0,R.jsxs)(`div`,{className:`editorial-form-top`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`span`,{children:`03 / SEND A MESSAGE`}),(0,R.jsx)(`h3`,{children:`Tell me what's on your mind.`})]}),(0,R.jsx)(`div`,{className:`editorial-form-number`,children:`03`})]}),(0,R.jsx)(`div`,{className:`editorial-divider`}),(0,R.jsxs)(`form`,{onSubmit:v,className:`editorial-form`,children:[(0,R.jsxs)(`div`,{className:`editorial-form-row`,children:[(0,R.jsxs)(`div`,{className:`editorial-field`,children:[(0,R.jsx)(`label`,{htmlFor:`from_name`,children:`YOUR NAME`}),(0,R.jsx)(`input`,{id:`from_name`,type:`text`,name:`from_name`,placeholder:`Enter your name`,value:t.from_name,onChange:_,required:!0})]}),(0,R.jsxs)(`div`,{className:`editorial-field`,children:[(0,R.jsx)(`label`,{htmlFor:`from_email`,children:`YOUR EMAIL`}),(0,R.jsx)(`input`,{id:`from_email`,type:`email`,name:`from_email`,placeholder:`you@example.com`,value:t.from_email,onChange:_,required:!0})]})]}),(0,R.jsxs)(`div`,{className:`editorial-field`,children:[(0,R.jsx)(`label`,{htmlFor:`subject`,children:`SUBJECT`}),(0,R.jsx)(`input`,{id:`subject`,type:`text`,name:`subject`,placeholder:`What would you like to discuss?`,value:t.subject,onChange:_,required:!0})]}),(0,R.jsxs)(`div`,{className:`editorial-field`,children:[(0,R.jsx)(`label`,{htmlFor:`message`,children:`YOUR MESSAGE`}),(0,R.jsx)(`textarea`,{id:`message`,name:`message`,rows:7,placeholder:`Write your message here...`,value:t.message,onChange:_,required:!0})]}),(0,R.jsxs)(u.button,{type:`submit`,disabled:r,className:`editorial-submit`,whileHover:{scale:r?1:1.01},whileTap:{scale:r?1:.98},children:[(0,R.jsx)(`span`,{children:r?`SENDING...`:`SEND MESSAGE`}),(0,R.jsx)(`span`,{className:`editorial-submit-arrow`,children:(0,R.jsx)(o,{})})]})]}),(0,R.jsxs)(`div`,{className:`editorial-form-bottom`,children:[(0,R.jsx)(`span`,{children:`RESPONSE CHANNEL`}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(c,{}),d.email]})]})]})]}),(0,R.jsxs)(`div`,{className:`editorial-bottom`,children:[(0,R.jsx)(`div`,{}),(0,R.jsxs)(`p`,{children:[`PEOPLE `,(0,R.jsx)(`span`,{children:`×`}),` IDEAS `,(0,R.jsx)(`span`,{children:`×`}),` TECHNOLOGY`]}),(0,R.jsx)(`div`,{})]})]}),(0,R.jsx)(`style`,{children:`
        /* =====================================================
           BASE
        ===================================================== */

        .editorial-contact {
          background: #070707;
          color: #f5f1e8;
        }

        .editorial-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 10% 50%,
              rgba(213, 170, 80, 0.055),
              transparent 28%
            ),
            radial-gradient(
              circle at 92% 30%,
              rgba(213, 170, 80, 0.04),
              transparent 25%
            ),
            linear-gradient(
              180deg,
              #070707 0%,
              #090909 50%,
              #070707 100%
            );
          pointer-events: none;
        }

        .editorial-noise {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image:
            radial-gradient(
              rgba(255,255,255,0.7) 0.5px,
              transparent 0.5px
            );
          background-size: 5px 5px;
          pointer-events: none;
        }

        .editorial-glow {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: #d5aa50;
          filter: blur(150px);
          opacity: 0.045;
          pointer-events: none;
        }

        .editorial-glow-left {
          left: -170px;
          top: 35%;
        }

        .editorial-glow-right {
          right: -170px;
          bottom: 15%;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .editorial-header {
          display: grid;
          grid-template-columns: 1fr 150px;
          gap: 40px;
          margin-top: 58px;
          margin-bottom: 48px;
        }

        .editorial-eyebrow {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 15px;
          color: #d5aa50;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.3em;
        }

        .eyebrow-line {
          width: 38px;
          height: 1px;
          background: #d5aa50;
        }

        .editorial-title-area h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(4rem, 9vw, 8.5rem);
          font-weight: 400;
          line-height: 0.78;
          letter-spacing: -0.07em;
        }

        .editorial-title-area h2 span {
          color: #d5aa50;
          font-style: italic;
        }

        .editorial-title-line {
          width: 100%;
          max-width: 570px;
          height: 1px;
          margin: 27px 0 18px;
          background: rgba(213, 170, 80, 0.22);
        }

        .editorial-description {
          max-width: 570px;
          margin: 0;
          color: #79756e;
          font-size: 12px;
          line-height: 1.8;
        }

        .editorial-side-note {
          align-self: end;
          padding-bottom: 5px;
          border-left: 1px solid rgba(213, 170, 80, 0.3);
          padding-left: 18px;
        }

        .editorial-side-note span {
          display: block;
          color: #5b5751;
          font-size: 7px;
          font-weight: 600;
          letter-spacing: 0.24em;
          line-height: 1.9;
        }

        .editorial-side-note span:first-child {
          color: #d5aa50;
        }

        /* =====================================================
           MAIN GRID
        ===================================================== */

        .editorial-main-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          border-top: 1px solid rgba(213, 170, 80, 0.2);
          border-bottom: 1px solid rgba(213, 170, 80, 0.2);
        }

        .editorial-contact-info {
          padding: 35px 35px 35px 0;
          border-right: 1px solid rgba(213, 170, 80, 0.16);
        }

        .editorial-form-wrapper {
          padding: 35px 0 35px 35px;
        }

        /* =====================================================
           SECTION LABELS
        ===================================================== */

        .editorial-section-label {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #65605a;
          font-size: 7px;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .editorial-section-label span:first-child {
          color: #d5aa50;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
        }

        .editorial-divider {
          width: 100%;
          height: 1px;
          margin: 22px 0;
          background: rgba(213, 170, 80, 0.13);
        }

        /* =====================================================
           CONTACT ITEMS
        ===================================================== */

        .editorial-contact-list {
          display: flex;
          flex-direction: column;
        }

        .editorial-contact-item {
          display: grid;
          grid-template-columns: 24px 45px 1fr 15px;
          align-items: center;
          gap: 11px;
          min-height: 78px;
          border-bottom: 1px solid rgba(255,255,255,0.045);
           transition:
             transform 0.25s ease,
             border-color 0.25s ease,
             background 0.25s ease;
           position: relative;
        }

        .editorial-contact-item::before {
           content: "";
           position: absolute;
           left: 0;
           top: 10px;
           bottom: 10px;
           width: 1px;
           background: #d5aa50;
           opacity: 0;
           transform: scaleY(0.35);
           transform-origin: center;
           transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .editorial-contact-item:hover {
           border-bottom-color: rgba(213,170,80,0.16);
           background: rgba(213,170,80,0.018);
        }

        .editorial-contact-item:hover::before {
           opacity: 0.75;
           transform: scaleY(1);
        }

        .editorial-contact-number {
          color: #48443f;
          font-size: 8px;
        }

        .editorial-contact-icon {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(213, 170, 80, 0.22);
          color: #d5aa50;
          font-size: 14px;
          transition:
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .editorial-contact-item:hover .editorial-contact-icon {
          border-color: rgba(213, 170, 80, 0.55);
          background: rgba(213, 170, 80, 0.06);
        }

        .editorial-contact-content {
          min-width: 0;
        }

        .editorial-contact-content span {
          display: block;
          margin-bottom: 4px;
          color: #5e5952;
          font-size: 7px;
          font-weight: 600;
          letter-spacing: 0.18em;
        }

        .editorial-contact-content a,
        .editorial-contact-content p {
          display: block;
          max-width: 100%;
          margin: 0;
          overflow: hidden;
          color: #e3ded5;
          font-size: 11px;
          font-weight: 500;
          text-decoration: none;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .editorial-contact-content a:hover {
          color: #efc566;
        }

        .editorial-item-arrow {
          color: #4e4943;
          font-size: 9px;
          transition: color 0.2s ease;
        }

        .editorial-contact-item:hover .editorial-item-arrow {
          color: #d5aa50;
        }

        /* =====================================================
           SOCIALS
        ===================================================== */

        .editorial-social-block {
          margin-top: 35px;
        }

        .editorial-socials {
          display: flex;
          gap: 9px;
          margin-top: 15px;
        }

        .editorial-social {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          border: 1px solid rgba(213, 170, 80, 0.2);
          color: #9b958b;
          font-size: 15px;
          text-decoration: none;
          transition:
            border-color 0.25s ease,
            color 0.25s ease,
            background 0.25s ease;
        }

        .editorial-social:hover {
          border-color: #d5aa50;
          background: rgba(213, 170, 80, 0.07);
          color: #efc566;
           transform: translateY(-2px);
           box-shadow: 0 8px 24px rgba(213,170,80,0.08);
        }

        /* =====================================================
           INFO FOOTER
        ===================================================== */

        .editorial-info-footer {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.045);
        }

        .editorial-footer-mark {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #d5aa50;
          box-shadow: 0 0 12px rgba(213,170,80,0.6);
        }

        .editorial-info-footer strong {
          display: block;
          color: #a39d93;
          font-size: 7px;
          font-weight: 600;
          letter-spacing: 0.15em;
        }

        .editorial-info-footer p {
          margin: 4px 0 0;
          color: #504c46;
          font-size: 9px;
        }

        /* =====================================================
           FORM HEADER
        ===================================================== */

        .editorial-form-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .editorial-form-top > div:first-child > span {
          display: block;
          margin-bottom: 7px;
          color: #d5aa50;
          font-size: 7px;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .editorial-form-top h3 {
          max-width: 450px;
          margin: 0;
          color: #f5f1e8;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 29px;
          font-weight: 400;
          line-height: 1.15;
        }

        .editorial-form-number {
          color: #d5aa50;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
        }

        /* =====================================================
           FORM
        ===================================================== */

        .editorial-form {
          display: flex;
          flex-direction: column;
          gap: 19px;
        }

        .editorial-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .editorial-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .editorial-field label {
          color: #66615a;
          font-size: 7px;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .editorial-field input,
        .editorial-field textarea {
          width: 100%;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.13);
          outline: none;
          border-radius: 0;
          background: transparent;
          color: #f5f1e8;
          font-family: inherit;
          font-size: 12px;
          transition:
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .editorial-field input {
          height: 48px;
          padding: 0 4px;
        }

        .editorial-field textarea {
          min-height: 130px;
          padding: 12px 4px;
          resize: vertical;
          line-height: 1.7;
        }

        .editorial-field input::placeholder,
        .editorial-field textarea::placeholder {
          color: #45413d;
        }

        .editorial-field input:focus,
        .editorial-field textarea:focus {
          border-color: #d5aa50;
           background: rgba(213,170,80,0.018);
        }

        /* =====================================================
           SUBMIT
        ===================================================== */

        .editorial-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 55px;
          padding: 0 8px 0 20px;
          border: 1px solid #d5aa50;
          background: #d5aa50;
          color: #080808;
          cursor: pointer;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.2em;
          transition:
            background 0.25s ease,
            color 0.25s ease;
        }

        .editorial-submit:hover {
          background: #efc566;
        }

        .editorial-submit:disabled {
          cursor: not-allowed;
          opacity: 0.65;
        }

        .editorial-submit-arrow {
          display: grid;
          place-items: center;
          width: 39px;
          height: 39px;
          background: #080808;
          color: #d5aa50;
          font-size: 11px;
        }

        .editorial-form-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 25px;
          color: #4e4943;
          font-size: 7px;
          letter-spacing: 0.13em;
        }

        .editorial-form-bottom span:last-child {
          display: flex;
          align-items: center;
          gap: 7px;
          max-width: 65%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .editorial-form-bottom svg {
          flex-shrink: 0;
          color: #d5aa50;
        }

        /* =====================================================
           BOTTOM
        ===================================================== */

        .editorial-bottom {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 42px;
        }

        .editorial-bottom div {
          flex: 1;
          height: 1px;
          background: rgba(213, 170, 80, 0.12);
        }

        .editorial-bottom p {
          margin: 0;
          color: #4b4742;
          font-size: 7px;
          letter-spacing: 0.2em;
          white-space: nowrap;
        }

        .editorial-bottom p span {
          color: #d5aa50;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .editorial-header {
            grid-template-columns: 1fr;
          }

          .editorial-side-note {
            display: none;
          }

          .editorial-main-grid {
            grid-template-columns: 1fr;
          }

          .editorial-contact-info {
            padding: 30px 0;
            border-right: none;
            border-bottom: 1px solid rgba(213, 170, 80, 0.16);
          }

          .editorial-form-wrapper {
            padding: 30px 0;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .editorial-header {
            margin-top: 40px;
            margin-bottom: 35px;
          }

          .editorial-title-area h2 {
            font-size: clamp(4rem, 19vw, 6rem);
          }

          .editorial-description {
            font-size: 11px;
          }

          .editorial-main-grid {
            display: block;
          }

          .editorial-contact-info {
            padding: 25px 0;
          }

          .editorial-form-wrapper {
            padding: 25px 0;
          }

          .editorial-contact-item {
            grid-template-columns: 18px 40px 1fr 10px;
            gap: 8px;
            min-height: 70px;
          }

          .editorial-contact-icon {
            width: 38px;
            height: 38px;
            font-size: 13px;
          }

          .editorial-contact-content a,
          .editorial-contact-content p {
            font-size: 10px;
          }

          .editorial-form-top h3 {
            font-size: 24px;
          }

          .editorial-form-row {
            grid-template-columns: 1fr;
            gap: 19px;
          }

          .editorial-field input {
            height: 47px;
          }

          .editorial-field textarea {
            min-height: 120px;
          }

          .editorial-form-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .editorial-form-bottom span:last-child {
            max-width: 100%;
          }

          .editorial-bottom {
            gap: 10px;
            margin-top: 32px;
          }

          .editorial-bottom p {
            font-size: 6px;
            letter-spacing: 0.12em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .editorial-contact-item,
          .editorial-contact-icon,
          .editorial-social,
          .editorial-submit,
          .editorial-form-wrapper::before {
            transition: none !important;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .editorial-contact-item {
            grid-template-columns: 15px 36px 1fr 8px;
            gap: 6px;
          }

          .editorial-contact-icon {
            width: 34px;
            height: 34px;
          }

          .editorial-contact-content a,
          .editorial-contact-content p {
            font-size: 9px;
          }

          .editorial-form-wrapper {
            padding-top: 22px;
          }

          .editorial-form-top h3 {
            font-size: 21px;
          }
        }
      `})]})};export{z as default};