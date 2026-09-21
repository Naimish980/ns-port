import{F as e,I as t,M as n,N as r,_ as i,d as a,f as o,j as s,p as c,t as l,v as u}from"./index-B8gKzK4c.js";import{t as d}from"./SectionTitle-YekJXefT.js";var f=t(e(),1),p=r(),m=()=>{let e=l.projects;return Array.isArray(e)?e.filter(e=>typeof e==`object`&&!!e):[]},h=()=>{let e=(0,f.useMemo)(()=>m(),[]),[t,r]=(0,f.useState)(0),l=e[t]??{title:`Enterprise IT Infrastructure Support`,description:`A practical IT infrastructure project focused on Windows environments, networking, endpoint support and cloud technologies.`,tech:[`Windows 11`,`Active Directory`,`Networking`,`AWS`]},h=l.title||l.name||`Enterprise IT Infrastructure Support`,g=l.description||l.details||`A practical IT infrastructure project focused on Windows environments, networking, endpoint support and cloud technologies.`,_=l.technologies||l.tech||l.stack||[],v=l.github||l.githubUrl||``,y=l.live||l.liveUrl||l.demo||l.url||``,b=l.image||l.imageUrl||``,x=e.length||1;return(0,p.jsxs)(`section`,{id:`projects`,className:`projects-section`,children:[(0,p.jsx)(`div`,{className:`projects-bg-glow projects-glow-one`}),(0,p.jsx)(`div`,{className:`projects-bg-glow projects-glow-two`}),(0,p.jsx)(`div`,{className:`projects-grid-bg`}),(0,p.jsxs)(`div`,{className:`projects-container`,children:[(0,p.jsx)(`div`,{className:`projects-section-title`,children:(0,p.jsx)(d,{title:`Projects`,subtitle:`A selection of practical IT, infrastructure, networking, and cloud work.`})}),(0,p.jsxs)(s.div,{className:`projects-header`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.55,ease:`easeOut`},children:[(0,p.jsxs)(`div`,{className:`projects-header-left`,children:[(0,p.jsx)(`span`,{className:`projects-header-line`}),(0,p.jsx)(`span`,{children:`04 / SELECTED WORK`})]}),(0,p.jsxs)(`div`,{className:`projects-counter`,children:[String(t+1).padStart(2,`0`),(0,p.jsx)(`span`,{children:`/`}),String(x).padStart(2,`0`)]})]}),(0,p.jsx)(n,{mode:`wait`,children:(0,p.jsxs)(s.article,{className:`project-layout`,initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.32,ease:`easeOut`},children:[(0,p.jsxs)(`div`,{className:`project-visual-column`,children:[(0,p.jsxs)(`div`,{className:`project-number`,children:[`PROJECT`,` `,String(t+1).padStart(2,`0`)]}),(0,p.jsx)(`div`,{className:`laptop-wrapper`,children:(0,p.jsxs)(`div`,{className:`laptop`,children:[(0,p.jsxs)(`div`,{className:`laptop-lid`,children:[(0,p.jsxs)(`div`,{className:`browser-bar`,children:[(0,p.jsxs)(`div`,{className:`browser-dots`,children:[(0,p.jsx)(`span`,{}),(0,p.jsx)(`span`,{}),(0,p.jsx)(`span`,{})]}),(0,p.jsxs)(`div`,{className:`browser-address`,children:[`naimishsingh.dev /`,` `,h.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)]}),(0,p.jsx)(`div`,{className:`browser-status`,children:`LIVE`})]}),(0,p.jsxs)(`div`,{className:`laptop-screen`,style:b?{backgroundImage:`
                                linear-gradient(
                                  180deg,
                                  rgba(5, 5, 5, 0.01),
                                  rgba(5, 5, 5, 0.08)
                                ),
                                url("${b}")
                              `,backgroundSize:`cover`,backgroundPosition:`center`}:void 0,children:[(0,p.jsxs)(`div`,{className:`screen-navbar`,children:[(0,p.jsx)(`div`,{className:`screen-logo`,children:`NS`}),(0,p.jsxs)(`div`,{className:`screen-links`,children:[(0,p.jsx)(`span`,{children:`HOME`}),(0,p.jsx)(`span`,{children:`ABOUT`}),(0,p.jsx)(`span`,{children:`WORK`}),(0,p.jsx)(`span`,{children:`CONTACT`})]})]}),(0,p.jsxs)(`div`,{className:`screen-content`,children:[(0,p.jsxs)(`span`,{className:`screen-kicker`,children:[`FEATURED PROJECT /`,` `,String(t+1).padStart(2,`0`)]}),(0,p.jsx)(`h3`,{children:h}),(0,p.jsx)(`p`,{children:g}),(0,p.jsx)(`div`,{className:`screen-divider`}),(0,p.jsxs)(`div`,{className:`screen-meta`,children:[(0,p.jsx)(`span`,{children:`SYSTEMS`}),(0,p.jsx)(`span`,{children:`NETWORK`}),(0,p.jsx)(`span`,{children:`CLOUD`})]})]}),(0,p.jsxs)(`div`,{className:`screen-status-card`,children:[(0,p.jsx)(`span`,{children:`STATUS`}),(0,p.jsx)(`strong`,{children:`OPERATIONAL`})]}),(0,p.jsxs)(`div`,{className:`screen-core-card`,children:[(0,p.jsx)(`span`,{children:`CORE`}),(0,p.jsx)(`strong`,{children:`IT / CLOUD`})]})]})]}),(0,p.jsxs)(`div`,{className:`laptop-base`,children:[(0,p.jsx)(`div`,{className:`keyboard`,children:Array.from({length:36},(e,t)=>(0,p.jsx)(`span`,{},t))}),(0,p.jsx)(`div`,{className:`trackpad`})]}),(0,p.jsx)(`div`,{className:`laptop-shadow`})]})})]}),(0,p.jsxs)(s.div,{className:`project-info`,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.12},children:[(0,p.jsxs)(`div`,{className:`project-info-topline`,children:[(0,p.jsx)(`span`,{children:`NAIMISH SINGH / WORK`}),(0,p.jsx)(`span`,{children:String(t+1).padStart(2,`0`)})]}),(0,p.jsxs)(`div`,{className:`project-case-study`,children:[`CASE STUDY /`,` `,String(t+1).padStart(2,`0`)]}),(0,p.jsx)(`h2`,{children:h}),(0,p.jsx)(`p`,{className:`project-description`,children:g}),_.length>0&&(0,p.jsx)(`div`,{className:`project-tech-list`,children:_.slice(0,8).map((e,t)=>(0,p.jsx)(s.span,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{duration:.25,delay:.3+t*.035},children:e},`${e}-${t}`))}),(0,p.jsxs)(`div`,{className:`project-actions`,children:[v&&(0,p.jsxs)(s.a,{href:v,target:`_blank`,rel:`noreferrer`,className:`project-button github-button`,whileHover:{y:-2},whileTap:{scale:.98},children:[(0,p.jsx)(u,{}),`GitHub`]}),y&&(0,p.jsxs)(s.a,{href:y,target:`_blank`,rel:`noreferrer`,className:`project-button live-button`,whileHover:{y:-2},whileTap:{scale:.98},children:[(0,p.jsx)(i,{}),`Live Project`]})]}),x>1&&(0,p.jsxs)(`div`,{className:`project-navigation`,children:[(0,p.jsx)(s.button,{type:`button`,onClick:()=>{x<=1||r(e=>(e-1+x)%x)},"aria-label":`Previous project`,whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,p.jsx)(a,{})}),(0,p.jsx)(s.button,{type:`button`,onClick:()=>{x<=1||r(e=>(e+1)%x)},"aria-label":`Next project`,whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,p.jsx)(o,{})}),(0,p.jsx)(`span`,{children:`SWITCH PROJECT`})]})]})]},`${t}-${h}`)}),(0,p.jsxs)(s.div,{className:`projects-end`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5},children:[(0,p.jsx)(`div`,{}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(c,{}),`END OF SELECTED WORK`]}),(0,p.jsx)(`div`,{})]})]}),(0,p.jsx)(`style`,{children:`

        /* =========================================
           PROJECT SECTION
        ========================================= */

        .projects-section {
          position: relative;
          width: 100%;
          overflow: hidden;

          /* Reduce gap after Experience */
          margin-top: -150px;

          background: #070707;
          color: #f5f1e8;
        }

        .projects-container {
          position: relative;
          z-index: 2;

          width: min(1380px, 100%);
          margin: 0 auto;

          padding:
            55px
            clamp(20px, 6vw, 85px)
            100px;
        }

        /* =========================================
           BACKGROUND
        ========================================= */

        .projects-grid-bg {
          position: absolute;
          inset: 0;

          opacity: 0.07;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            );

          background-size: 60px 60px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 15%,
              black 85%,
              transparent
            );

          pointer-events: none;
        }

        .projects-bg-glow {
          position: absolute;

          width: 360px;
          height: 360px;

          border-radius: 50%;

          filter: blur(110px);

          pointer-events: none;
        }

        .projects-glow-one {
          left: -220px;
          top: 30%;

          background:
            rgba(213, 170, 80, 0.025);
        }

        .projects-glow-two {
          right: -220px;
          bottom: 10%;

          background:
            rgba(213, 170, 80, 0.02);
        }

        /* =========================================
           SECTION TITLE
        ========================================= */

        .projects-section-title {
          margin-bottom: 42px;
        }

        /* =========================================
           HEADER
        ========================================= */

        .projects-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 50px;

          color: #625e56;

          font-family: monospace;
          font-size: 8px;

          letter-spacing: 0.2em;
        }

        .projects-header-left {
          display: flex;
          align-items: center;

          gap: 12px;
        }

        .projects-header-line {
          width: 35px;
          height: 1px;

          background: #d5aa50;
        }

        .projects-counter {
          color: #d5aa50;

          font-size: 8px;
        }

        .projects-counter span {
          margin: 0 7px;

          color: #55514b;
        }

        /* =========================================
           PROJECT LAYOUT
        ========================================= */

        .project-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 1.25fr)
            minmax(320px, 0.75fr);

          gap:
            clamp(35px, 5vw, 80px);

          align-items: center;
        }

        .project-visual-column {
          min-width: 0;
        }

        .project-number {
          margin-bottom: 15px;

          color: #625e56;

          font-family: monospace;
          font-size: 7px;

          letter-spacing: 0.18em;
        }

        /* =========================================
           LAPTOP
        ========================================= */

        .laptop-wrapper {
          position: relative;

          width: 100%;
        }

        /*
         * IMPORTANT:
         * No transform.
         * No perspective.
         * No rotate.
         * This keeps laptop screen text crisp.
         */

        .laptop {
          position: relative;

          width: min(100%, 820px);

          margin: 0 auto;

          transform: none !important;

          filter: none !important;

          will-change: auto;
        }

        /* =========================================
           LAPTOP LID
        ========================================= */

        .laptop-lid {
          position: relative;

          width: 100%;

          aspect-ratio: 16 / 10;

          padding: 10px;

          border:
            1px solid
            rgba(255, 255, 255, 0.2);

          border-radius:
            14px
            14px
            5px
            5px;

          background:
            linear-gradient(
              145deg,
              #55575a 0%,
              #35373a 25%,
              #1e2023 58%,
              #3d3f42 100%
            );

          box-shadow:
            0 30px 70px
              rgba(0, 0, 0, 0.65),

            0 0 35px
              rgba(213, 170, 80, 0.035),

            inset 0 1px 0
              rgba(255, 255, 255, 0.2);
        }

        .laptop-lid::before {
          content: "";

          position: absolute;

          inset: 2px;

          border:
            1px solid
            rgba(255, 255, 255, 0.07);

          border-radius:
            12px
            12px
            4px
            4px;

          pointer-events: none;
        }

        /* =========================================
           BROWSER BAR
        ========================================= */

        .browser-bar {
          position: absolute;

          left: 10px;
          right: 10px;
          top: 10px;

          height: 29px;

          display: flex;
          align-items: center;

          border-bottom:
            1px solid
            rgba(255, 255, 255, 0.08);

          border-radius:
            8px
            8px
            0
            0;

          background:
            linear-gradient(
              180deg,
              #34363a,
              #282a2d
            );

          z-index: 4;
        }

        .browser-dots {
          display: flex;

          gap: 5px;

          margin-left: 12px;
        }

        .browser-dots span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.34);
        }

        .browser-address {
          position: absolute;

          left: 50%;

          width: 48%;

          padding:
            5px
            10px;

          overflow: hidden;

          transform: translateX(-50%);

          border:
            1px solid
            rgba(255, 255, 255, 0.08);

          border-radius: 4px;

          color: #858078;

          font-family: monospace;
          font-size: 6px;

          text-align: center;

          text-overflow: ellipsis;

          white-space: nowrap;

          background:
            rgba(0, 0, 0, 0.15);
        }

        .browser-status {
          margin-left: auto;

          margin-right: 13px;

          color: #d5aa50;

          font-family: monospace;
          font-size: 5px;

          letter-spacing: 0.13em;
        }

        /* =========================================
           CLEAN SCREEN
        ========================================= */

        .laptop-screen {
          position: absolute;

          left: 10px;
          right: 10px;

          top: 39px;
          bottom: 10px;

          overflow: hidden;

          border:
            1px solid
            rgba(255, 255, 255, 0.12);

          border-radius:
            0
            0
            4px
            4px;

          background:
            radial-gradient(
              circle at 70% 35%,
              rgba(213, 170, 80, 0.06),
              transparent 32%
            ),

            linear-gradient(
              135deg,
              #0d0e10 0%,
              #08090a 55%,
              #050505 100%
            );

          /*
           * Absolutely no blur on screen.
           */
          filter: none !important;

          backdrop-filter: none !important;

          -webkit-filter: none !important;

          -webkit-backdrop-filter: none !important;

          box-shadow:
            inset 0 0 14px
              rgba(0, 0, 0, 0.25);
        }

        /* =========================================
           SCREEN NAV
        ========================================= */

        .screen-navbar {
          position: absolute;

          left: 7%;
          right: 7%;
          top: 7%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          z-index: 5;
        }

        .screen-logo {
          transition:
            background 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease;

          width: 30px;
          height: 30px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(213, 170, 80, 0.55);

          color: #d5aa50;

          font-family: monospace;
          font-size: 7px;

          background:
            rgba(213, 170, 80, 0.035);
        }

        .screen-links {
          display: flex;

          gap: 20px;

          color:
            rgba(245, 241, 232, 0.5);

          font-family: monospace;
          font-size: 6px;

          letter-spacing: 0.1em;
        }

        /* =========================================
           SCREEN CONTENT
        ========================================= */

        .screen-content {
          position: absolute;

          left: 10%;
          top: 29%;

          width: 60%;

          z-index: 5;

          filter: none !important;

          backdrop-filter: none !important;

          -webkit-filter: none !important;

          -webkit-backdrop-filter: none !important;
        }

        .screen-kicker {
          display: block;

          margin-bottom: 10px;

          color: #d5aa50;

          font-family: monospace;
          font-size: 6px;

          letter-spacing: 0.16em;
        }

        .screen-content h3 {
          margin: 0;

          max-width: 500px;

          color: #f5f1e8;

          font-size:
            clamp(18px, 2.2vw, 32px);

          font-weight: 500;

          line-height: 1.08;

          letter-spacing: -0.025em;

          text-shadow: none;

          filter: none !important;
        }

        .screen-content p {
          max-width: 460px;

          margin:
            13px
            0
            0;

          color:
            rgba(245, 241, 232, 0.62);

          font-size:
            clamp(7px, 0.7vw, 10px);

          line-height: 1.65;

          filter: none !important;
        }

        .screen-divider {
          width: 60px;
          height: 1px;

          margin-top: 17px;

          background: #d5aa50;

          opacity: 0.55;
        }

        .screen-meta {
          display: flex;

          gap: 17px;

          margin-top: 12px;

          color:
            rgba(245, 241, 232, 0.38);

          font-family: monospace;
          font-size: 5px;

          letter-spacing: 0.13em;
        }

        /* =========================================
           SCREEN STATUS CARDS
        ========================================= */

        .screen-status-card,
        .screen-core-card {
          position: absolute;

          z-index: 6;

          display: flex;
          flex-direction: column;

          padding:
            9px
            11px;

          min-width: 95px;

          border:
            1px solid
            rgba(213, 170, 80, 0.28);

          background:
            rgba(7, 7, 7, 0.94);

          /*
           * No blur.
           */
          backdrop-filter: none !important;

          -webkit-backdrop-filter: none !important;

          filter: none !important;

          box-shadow:
            0 12px 30px
              rgba(0, 0, 0, 0.4);
        }

        .screen-status-card {
          right: 7%;
          top: 27%;
        }

        .screen-core-card {
          right: 9%;
          bottom: 18%;
        }

        .screen-status-card span,
        .screen-core-card span {
          color: #706b62;

          font-family: monospace;
          font-size: 5px;

          letter-spacing: 0.13em;
        }

        .screen-status-card strong,
        .screen-core-card strong {
          margin-top: 3px;

          color: #d5aa50;

          font-family: monospace;
          font-size: 7px;

          font-weight: 500;
        }

        /* =========================================
           LAPTOP BASE
        ========================================= */

        .laptop-base {
          position: relative;

          width: 108%;

          margin-left: -4%;

          height:
            clamp(22px, 2.4vw, 30px);

          border:
            1px solid
            rgba(255, 255, 255, 0.18);

          border-radius:
            2px
            2px
            12px
            12px;

          background:
            linear-gradient(
              180deg,
              #686a6d,
              #3d3f42 30%,
              #202225 70%,
              #4b4d50
            );

          box-shadow:
            0 15px 30px
              rgba(0, 0, 0, 0.65),

            inset 0 1px 0
              rgba(255, 255, 255, 0.18);

          transform:
            perspective(800px)
            rotateX(55deg)
            translateZ(-4px);

          z-index: 3;
        }

        .keyboard {
          position: absolute;

          left: 19%;
          right: 19%;
          top: 4px;

          display: grid;

          grid-template-columns:
            repeat(12, 1fr);

          gap: 2px;
        }

        .keyboard span {
          height: 3px;

          border-radius: 1px;

          background:
            rgba(255, 255, 255, 0.2);

          box-shadow:
            0 0 2px
              rgba(0, 0, 0, 0.8);
        }

        .trackpad {
          position: absolute;

          left: 42%;
          right: 42%;
          bottom: 3px;

          height: 5px;

          border:
            1px solid
            rgba(255, 255, 255, 0.12);

          border-radius: 3px;
        }

        .laptop-shadow {
          position: absolute;

          left: 8%;
          right: 8%;
          bottom: -30px;

          height: 35px;

          border-radius: 50%;

          background:
            rgba(0, 0, 0, 0.65);

          filter: blur(20px);

          z-index: 0;
        }

        .project-layout:hover .laptop-lid {
          border-color: rgba(213, 170, 80, 0.34);
          box-shadow:
            0 30px 70px rgba(0, 0, 0, 0.65),
            0 0 45px rgba(213, 170, 80, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .project-layout:hover .screen-logo {
          background: rgba(213, 170, 80, 0.08);
          box-shadow: 0 0 18px rgba(213, 170, 80, 0.08);
        }

        .project-layout:hover .project-info h2 {
          color: #efc566;
          transform: translateX(2px);
        }

        .project-info h2 {
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .project-layout:hover .screen-divider {
          width: 85px;
          opacity: 0.8;
        }

        .screen-divider {
          transition: width 0.35s ease, opacity 0.35s ease;
        }

        .project-tech-list span {
          transition:
            border-color 0.25s ease,
            color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }

        .project-tech-list span:hover {
          transform: translateY(-2px);
        }

        .project-button {
          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .project-button:hover {
          box-shadow: 0 8px 24px rgba(213, 170, 80, 0.08);
        }

        /* =========================================
           PROJECT INFO
        ========================================= */

        .project-info {
          min-width: 0;
        }

        .project-info-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-bottom: 15px;

          border-bottom:
            1px solid
            rgba(255, 255, 255, 0.07);

          color: #55514b;

          font-family: monospace;
          font-size: 7px;

          letter-spacing: 0.16em;
        }

        .project-info-topline span:last-child {
          color: #d5aa50;
        }

        .project-case-study {
          margin-top: 28px;

          color: #d5aa50;

          font-family: monospace;
          font-size: 7px;

          letter-spacing: 0.18em;
        }

        .project-info h2 {
          margin:
            10px
            0
            0;

          color: #f5f1e8;

          font-size:
            clamp(28px, 3.2vw, 46px);

          font-weight: 500;

          line-height: 1.04;

          letter-spacing: -0.03em;
        }

        .project-description {
          margin:
            22px
            0
            0;

          color: #97928a;

          font-size: 13px;

          line-height: 1.85;
        }

        /* =========================================
           TECHNOLOGIES
        ========================================= */

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;

          gap: 6px;

          margin-top: 25px;
        }

        .project-tech-list span {
          padding:
            7px
            10px;

          border:
            1px solid
            rgba(255, 255, 255, 0.08);

          background:
            rgba(255, 255, 255, 0.02);

          color: #9d988f;

          font-family: monospace;
          font-size: 6px;

          letter-spacing: 0.08em;

          transition:
            border-color 0.25s ease,
            color 0.25s ease,
            background 0.25s ease;
        }

        .project-tech-list span:hover {
          border-color:
            rgba(213, 170, 80, 0.4);

          background:
            rgba(213, 170, 80, 0.04);

          color: #d5aa50;
        }

        /* =========================================
           BUTTONS
        ========================================= */

        .project-actions {
          display: flex;
          flex-wrap: wrap;

          gap: 8px;

          margin-top: 28px;
        }

        .project-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          min-height: 40px;

          padding:
            10px
            15px;

          border:
            1px solid
            rgba(255, 255, 255, 0.1);

          color: #ddd8ce;

          font-family: monospace;
          font-size: 7px;

          letter-spacing: 0.1em;

          text-decoration: none;

          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
        }

        .github-button {
          background:
            rgba(255, 255, 255, 0.025);
        }

        .live-button {
          border-color:
            rgba(213, 170, 80, 0.35);

          background:
            rgba(213, 170, 80, 0.06);

          color: #d5aa50;
        }

        .project-button:hover {
          border-color: #d5aa50;
          background: rgba(213, 170, 80, 0.055);
          color: #f5f1e8;
          box-shadow: 0 8px 24px rgba(213, 170, 80, 0.08);
        }

        /* =========================================
           NAVIGATION
        ========================================= */

        .project-navigation {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-top: 30px;
        }

        .project-navigation button {
          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;

          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(255, 255, 255, 0.13);

          background:
            rgba(255, 255, 255, 0.025);

          color:
            rgba(255, 255, 255, 0.65);

          cursor: pointer;
        }

        .project-navigation button:last-of-type {
          border-color:
            rgba(213, 170, 80, 0.4);

          background:
            rgba(213, 170, 80, 0.05);

          color: #d5aa50;
        }

        .project-navigation button:hover {
          border-color: rgba(213, 170, 80, 0.55);
          background: rgba(213, 170, 80, 0.06);
          color: #efc566;
          box-shadow: 0 8px 24px rgba(213, 170, 80, 0.07);
        }

        .project-navigation > span {
          margin-left: 8px;

          color: #4f4b45;

          font-family: monospace;
          font-size: 7px;

          letter-spacing: 0.14em;
        }

        /* =========================================
           END
        ========================================= */

        .projects-end {
          display: flex;
          align-items: center;

          gap: 14px;

          margin-top: 75px;
        }

        .projects-end > div {
          flex: 1;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.08)
            );
        }

        .projects-end > div:last-child {
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.08),
              transparent
            );
        }

        .projects-end > span {
          display: flex;
          align-items: center;

          gap: 8px;

          color: #4e4a44;

          font-family: monospace;
          font-size: 6px;

          letter-spacing: 0.2em;
        }

        .projects-end svg {
          color: #d5aa50;

          font-size: 5px;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {

          .projects-section {
            margin-top: -110px;
          }

          .projects-container {
            padding:
              50px
              5vw
              80px;
          }

          .project-layout {
            grid-template-columns:
              minmax(0, 1.1fr)
              minmax(280px, 0.9fr);

            gap: 35px;
          }

          .laptop {
            width: 100%;
          }

          .project-info h2 {
            font-size:
              clamp(
                26px,
                3.5vw,
                38px
              );
          }

          .screen-content {
            width: 58%;
          }

          .screen-content h3 {
            font-size:
              clamp(
                16px,
                2.3vw,
                25px
              );
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 820px) {

          .projects-section {
            margin-top: -90px;
          }

          .projects-container {
            padding:
              45px
              28px
              75px;
          }

          .project-layout {
            grid-template-columns: 1fr;

            gap: 40px;
          }

          .project-visual-column {
            width: 100%;
          }

          .laptop {
            max-width: 760px;
          }

          .project-info {
            max-width: 720px;

            width: 100%;

            margin: 0 auto;
          }

          .project-info h2 {
            font-size:
              clamp(
                28px,
                5vw,
                40px
              );
          }

          .project-description {
            max-width: 650px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .projects-section {
            margin-top: -70px;
          }

          .projects-container {
            padding:
              38px
              16px
              60px;
          }

          .projects-section-title {
            margin-bottom: 30px;
          }

          .projects-header {
            margin-bottom: 32px;

            font-size: 6px;
          }

          .projects-header-line {
            width: 25px;
          }

          .projects-counter {
            font-size: 7px;
          }

          .project-number {
            margin-bottom: 10px;

            font-size: 6px;
          }

          .project-layout {
            gap: 32px;
          }

          /* LAPTOP */

          .laptop {
            width: 100%;
          }

          .laptop-lid {
            padding: 6px;

            border-radius:
              9px
              9px
              4px
              4px;
          }

          .browser-bar {
            left: 6px;
            right: 6px;
            top: 6px;

            height: 20px;
          }

          .browser-dots {
            gap: 3px;

            margin-left: 7px;
          }

          .browser-dots span {
            width: 4px;
            height: 4px;
          }

          .browser-address {
            width: 46%;

            padding:
              3px
              6px;

            font-size: 4px;
          }

          .browser-status {
            margin-right: 7px;

            font-size: 4px;
          }

          .laptop-screen {
            left: 6px;
            right: 6px;

            top: 26px;
            bottom: 6px;
          }

          .screen-navbar {
            left: 7%;
            right: 7%;
            top: 7%;
          }

          .screen-logo {
            width: 20px;
            height: 20px;

            font-size: 5px;
          }

          .screen-links {
            gap: 8px;

            font-size: 4px;
          }

          .screen-content {
            left: 9%;
            top: 29%;

            width: 62%;
          }

          .screen-kicker {
            margin-bottom: 5px;

            font-size: 4px;
          }

          .screen-content h3 {
            font-size:
              clamp(
                11px,
                3.5vw,
                17px
              );
          }

          .screen-content p {
            margin-top: 7px;

            font-size: 4px;
          }

          .screen-divider {
            width: 35px;

            margin-top: 8px;
          }

          .screen-meta {
            gap: 8px;

            margin-top: 7px;

            font-size: 3px;
          }

          .screen-status-card,
          .screen-core-card {
            min-width: 50px;

            padding:
              5px
              6px;
          }

          .screen-status-card {
            right: 6%;
            top: 26%;
          }

          .screen-core-card {
            right: 7%;
            bottom: 16%;
          }

          .screen-status-card span,
          .screen-core-card span {
            font-size: 3px;
          }

          .screen-status-card strong,
          .screen-core-card strong {
            font-size: 4px;
          }

          .laptop-base {
            height: 17px;
          }

          .keyboard {
            top: 2px;

            gap: 1px;
          }

          .keyboard span {
            height: 2px;
          }

          .trackpad {
            height: 3px;

            bottom: 2px;
          }

          /* INFO */

          .project-info {
            margin-top: 0;
          }

          .project-info-topline {
            padding-bottom: 12px;

            font-size: 6px;
          }

          .project-case-study {
            margin-top: 22px;

            font-size: 6px;
          }

          .project-info h2 {
            margin-top: 8px;

            font-size:
              clamp(
                25px,
                8vw,
                34px
              );
          }

          .project-description {
            margin-top: 17px;

            font-size: 11px;

            line-height: 1.7;
          }

          .project-tech-list {
            margin-top: 19px;

            gap: 5px;
          }

          .project-tech-list span {
            padding:
              6px
              8px;

            font-size: 5px;
          }

          .project-actions {
            margin-top: 21px;
          }

          .project-button {
            min-height: 36px;

            padding:
              8px
              11px;

            font-size: 6px;
          }

          .project-navigation {
            margin-top: 22px;
          }

          .project-navigation button {
            width: 34px;
            height: 34px;
          }

          .project-navigation > span {
            font-size: 5px;
          }

          .projects-end {
            margin-top: 50px;

            gap: 8px;
          }

          .projects-end > span {
            font-size: 5px;
          }
        }

        /* =========================================
           VERY SMALL PHONES
        ========================================= */

        @media (max-width: 380px) {

          .projects-section {
            margin-top: -55px;
          }

          .projects-container {
            padding:
              35px
              12px
              55px;
          }

          .projects-section-title {
            margin-bottom: 25px;
          }

          .projects-header {
            font-size: 5px;
          }

          .project-info h2 {
            font-size: 23px;
          }

          .project-description {
            font-size: 10px;
          }

          .screen-content h3 {
            font-size: 10px;
          }

          .screen-content p {
            font-size: 3.5px;
          }

          .screen-links {
            gap: 5px;
          }

          .screen-status-card,
          .screen-core-card {
            display: none;
          }
        }

        /* =========================================
           ACCESSIBILITY
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .projects-section *,
          .projects-section *::before,
          .projects-section *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }

      `})]})};export{h as default};