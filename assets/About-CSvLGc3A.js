import{D as e,F as t,I as n,N as r,O as i,m as a,w as o}from"./index-B8gKzK4c.js";import{t as s}from"./SectionTitle-YekJXefT.js";var c=n(t(),1),l=r(),u=()=>{let[t,n]=(0,c.useState)({x:0,y:0}),r=e=>{if(window.matchMedia(`(pointer: coarse)`).matches)return;let t=e.currentTarget.getBoundingClientRect(),r=e.clientX-t.left;n({x:((e.clientY-t.top)/t.height-.5)*-5,y:(r/t.width-.5)*5})},u=()=>{n({x:0,y:0})},d=[{number:`01`,title:`IT Infrastructure`,description:`Windows systems, endpoint management, hardware and enterprise IT support.`,icon:(0,l.jsx)(e,{})},{number:`02`,title:`Networking`,description:`LAN/WAN, Wi-Fi, TCP/IP, DNS, DHCP and connectivity troubleshooting.`,icon:(0,l.jsx)(o,{})},{number:`03`,title:`AWS Cloud`,description:`AWS services, cloud infrastructure and deployment concepts.`,icon:(0,l.jsx)(a,{})},{number:`04`,title:`Troubleshooting`,description:`Systematic problem solving focused on identifying root causes quickly.`,icon:(0,l.jsx)(i,{})}];return(0,l.jsxs)(`section`,{id:`about`,className:`about-section`,children:[(0,l.jsx)(`div`,{className:`about-bg-glow about-bg-glow-left`}),(0,l.jsx)(`div`,{className:`about-bg-glow about-bg-glow-right`}),(0,l.jsxs)(`div`,{className:`about-container`,children:[(0,l.jsx)(`div`,{className:`about-section-title`,children:(0,l.jsx)(s,{title:`About Me`,subtitle:`A closer look at my background, expertise, and approach to IT.`})}),(0,l.jsxs)(`div`,{className:`about-intro`,children:[(0,l.jsx)(`div`,{className:`about-profile-column`,children:(0,l.jsxs)(`div`,{className:`about-profile-area`,children:[(0,l.jsx)(`div`,{className:`about-aura`}),(0,l.jsx)(`div`,{className:`about-orbit about-orbit-one`,children:(0,l.jsx)(`span`,{})}),(0,l.jsx)(`div`,{className:`about-orbit about-orbit-two`,children:(0,l.jsx)(`span`,{})}),(0,l.jsx)(`div`,{className:`about-profile-wrapper`,onMouseMove:r,onMouseLeave:u,style:{transform:`
                    perspective(1200px)
                    rotateX(${t.x}deg)
                    rotateY(${t.y}deg)
                  `},children:(0,l.jsxs)(`div`,{className:`about-profile-frame`,children:[(0,l.jsx)(`img`,{src:`/ns-port/profile-cinematic.png`,alt:`Naimish Singh`,className:`about-profile-image`}),(0,l.jsx)(`div`,{className:`about-image-overlay`}),(0,l.jsx)(`div`,{className:`about-light-sweep`}),(0,l.jsx)(`div`,{className:`about-scan-line`}),(0,l.jsx)(`span`,{className:`about-corner about-corner-tl`}),(0,l.jsx)(`span`,{className:`about-corner about-corner-tr`}),(0,l.jsx)(`span`,{className:`about-corner about-corner-bl`}),(0,l.jsx)(`span`,{className:`about-corner about-corner-br`}),(0,l.jsxs)(`div`,{className:`about-image-meta about-meta-top`,children:[(0,l.jsx)(`span`,{children:`NS / 01`}),(0,l.jsx)(`span`,{children:`IT ENGINEER`})]}),(0,l.jsxs)(`div`,{className:`about-image-meta about-meta-bottom`,children:[(0,l.jsx)(`span`,{children:`INDIA`}),(0,l.jsx)(`span`,{children:`2026`})]})]})}),(0,l.jsxs)(`div`,{className:`about-profile-caption`,children:[(0,l.jsx)(`span`,{}),(0,l.jsx)(`p`,{children:`BUILD. SUPPORT. SOLVE.`}),(0,l.jsx)(`span`,{})]})]})}),(0,l.jsxs)(`div`,{className:`about-copy`,children:[(0,l.jsx)(`div`,{className:`about-eyebrow`,children:`WHO I AM`}),(0,l.jsx)(`h2`,{className:`about-main-heading`,children:`BUILDING RELIABLE DIGITAL SYSTEMS.`}),(0,l.jsxs)(`div`,{className:`about-description`,children:[(0,l.jsxs)(`p`,{children:[`I’m `,(0,l.jsx)(`strong`,{children:`Naimish Singh`}),`, an IT Engineer focused on Desktop Support, Hardware & Networking, and Cloud technologies.`]}),(0,l.jsx)(`p`,{children:`I enjoy troubleshooting real-world technical problems, supporting users, maintaining infrastructure and continuously expanding my knowledge of modern IT environments.`})]}),(0,l.jsx)(`div`,{className:`about-footer`,children:(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`about-learning`,children:`ALWAYS LEARNING`}),(0,l.jsx)(`span`,{className:`about-learning-tech`,children:`AWS • LINUX • NETWORKING • SYSTEMS`})]})})]})]}),(0,l.jsx)(`div`,{className:`about-cards`,children:d.map(e=>(0,l.jsxs)(`article`,{className:`about-card`,children:[(0,l.jsxs)(`div`,{className:`about-card-header`,children:[(0,l.jsx)(`span`,{className:`about-card-number`,children:e.number}),(0,l.jsx)(`span`,{className:`about-card-icon`,children:e.icon})]}),(0,l.jsx)(`h3`,{children:e.title}),(0,l.jsx)(`p`,{children:e.description}),(0,l.jsx)(`div`,{className:`about-card-line`})]},e.number))})]}),(0,l.jsx)(`style`,{children:`
        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .about-section {
          position: relative;

          width: 100%;

          padding:
            clamp(80px, 8vw, 125px)
            6vw
            90px;

          overflow: hidden;

          background: #070707;

          color: #f5f1e8;
        }

        .about-container {
          position: relative;
          z-index: 2;

          width: min(1400px, 100%);

          margin: 0 auto;
        }

        /* =====================================================
           SECTION TITLE
        ===================================================== */

        .about-section-title {
          margin-bottom: 55px;
        }

        .about-main-heading {
          margin: 0;
          color: #f5f1e8;
          font-size: clamp(28px, 3.2vw, 48px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        /* =====================================================
           BACKGROUND GLOW
        ===================================================== */

        .about-bg-glow {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(90px);
        }

        .about-bg-glow-left {
          width: 300px;
          height: 300px;

          left: -180px;
          top: 20%;

          background: rgba(213, 170, 80, 0.045);
        }

        .about-bg-glow-right {
          width: 280px;
          height: 280px;

          right: -170px;
          bottom: 5%;

          background: rgba(213, 170, 80, 0.035);
        }

        /* =====================================================
           PHOTO + CONTENT
        ===================================================== */

        .about-intro {
          display: grid;

          grid-template-columns:
            minmax(250px, 0.85fr)
            minmax(0, 1.15fr);

          align-items: center;

          gap: clamp(35px, 6vw, 100px);
        }

        /* =====================================================
           LEFT PHOTO
        ===================================================== */

        .about-profile-column {
          display: flex;

          justify-content: center;
          align-items: center;

          min-width: 0;
        }

        .about-profile-area {
          position: relative;

          width: min(100%, 440px);

          height: clamp(430px, 42vw, 590px);

          display: flex;

          justify-content: center;
          align-items: center;
        }

        /* =====================================================
           AURA
        ===================================================== */

        .about-aura {
          position: absolute;

          width: 75%;
          height: 82%;

          border-radius: 50%;

          background: rgba(213, 170, 80, 0.07);

          filter: blur(50px);

          animation:
            aboutAura
            5s
            ease-in-out
            infinite;
        }

        @keyframes aboutAura {
          0%,
          100% {
            transform: scale(0.96);
            opacity: 0.55;
          }

          50% {
            transform: scale(1.04);
            opacity: 0.9;
          }
        }

        /* =====================================================
           ORBITS
        ===================================================== */

        .about-orbit {
          position: absolute;

          border: 1px solid rgba(213, 170, 80, 0.18);

          border-radius: 50%;

          pointer-events: none;
        }

        .about-orbit span {
          position: absolute;

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #d5aa50;

          box-shadow:
            0 0 10px rgba(213, 170, 80, 0.9),
            0 0 20px rgba(213, 170, 80, 0.4);
        }

        .about-orbit-one {
          width: 88%;
          height: 90%;

          transform: rotate(-18deg);

          animation:
            aboutOrbitOne
            13s
            linear
            infinite;
        }

        .about-orbit-one span {
          top: -3px;
          left: 50%;
        }

        .about-orbit-two {
          width: 92%;
          height: 68%;

          transform: rotate(25deg);

          animation:
            aboutOrbitTwo
            17s
            linear
            infinite;
        }

        .about-orbit-two span {
          right: 3%;
          top: 50%;
        }

        @keyframes aboutOrbitOne {
          from {
            transform: rotate(-18deg);
          }

          to {
            transform: rotate(342deg);
          }
        }

        @keyframes aboutOrbitTwo {
          from {
            transform: rotate(25deg);
          }

          to {
            transform: rotate(-335deg);
          }
        }

        /* =====================================================
           PROFILE
        ===================================================== */

        .about-profile-wrapper {
          position: relative;

          z-index: 5;

          width: clamp(220px, 24vw, 325px);

          transition:
            transform 0.18s ease-out;
        }

        .about-profile-frame {
          position: relative;

          width: 100%;

          aspect-ratio: 2 / 3;

          overflow: hidden;

          border: 1px solid rgba(213, 170, 80, 0.4);

          background: #111;

          box-shadow:
            0 25px 65px rgba(0, 0, 0, 0.55),
            0 0 40px rgba(213, 170, 80, 0.07);
        }

        .about-profile-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transform: scale(1.01);

          transition:
            transform 0.8s ease,
            filter 0.8s ease;
        }

        .about-profile-wrapper:hover
        .about-profile-image {
          transform: scale(1.045);

          filter:
            contrast(1.05)
            saturate(1.03);
        }

        /* =====================================================
           OVERLAY
        ===================================================== */

        .about-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.02),
              rgba(0, 0, 0, 0.12) 45%,
              rgba(0, 0, 0, 0.68)
            );
        }

        /* =====================================================
           LIGHT SWEEP
        ===================================================== */

        .about-light-sweep {
          position: absolute;

          top: -30%;
          left: -80%;

          width: 35%;
          height: 170%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(239, 197, 102, 0.28),
              transparent
            );

          transform: rotate(18deg);

          pointer-events: none;

          animation:
            aboutLightSweep
            6s
            ease-in-out
            infinite;
        }

        @keyframes aboutLightSweep {
          0%,
          40% {
            left: -80%;
            opacity: 0;
          }

          48% {
            opacity: 0.7;
          }

          62%,
          100% {
            left: 135%;
            opacity: 0;
          }
        }

        /* =====================================================
           SCAN
        ===================================================== */

        .about-scan-line {
          position: absolute;

          left: 0;
          right: 0;

          top: -5%;

          height: 1px;

          background: rgba(239, 197, 102, 0.5);

          box-shadow:
            0 0 12px rgba(239, 197, 102, 0.3);

          animation:
            aboutScan
            5s
            linear
            infinite;
        }

        @keyframes aboutScan {
          0% {
            top: -5%;
            opacity: 0;
          }

          12% {
            opacity: 0.8;
          }

          85% {
            opacity: 0.8;
          }

          100% {
            top: 105%;
            opacity: 0;
          }
        }

        /* =====================================================
           CORNERS
        ===================================================== */

        .about-corner {
          position: absolute;

          width: 18px;
          height: 18px;

          border-color: rgba(239, 197, 102, 0.8);

          border-style: solid;

          z-index: 4;
        }

        .about-corner-tl {
          top: 14px;
          left: 14px;

          border-width:
            1px
            0
            0
            1px;
        }

        .about-corner-tr {
          top: 14px;
          right: 14px;

          border-width:
            1px
            1px
            0
            0;
        }

        .about-corner-bl {
          bottom: 14px;
          left: 14px;

          border-width:
            0
            0
            1px
            1px;
        }

        .about-corner-br {
          bottom: 14px;
          right: 14px;

          border-width:
            0
            1px
            1px
            0;
        }

        /* =====================================================
           META
        ===================================================== */

        .about-image-meta {
          position: absolute;

          left: 18px;
          right: 18px;

          display: flex;

          justify-content: space-between;

          color: rgba(245, 241, 232, 0.7);

          font-family: monospace;

          font-size: 7px;

          letter-spacing: 0.18em;

          z-index: 5;
        }

        .about-meta-top {
          top: 18px;
        }

        .about-meta-bottom {
          bottom: 18px;
        }

        /* =====================================================
           CAPTION
        ===================================================== */

        .about-profile-caption {
          position: absolute;

          left: 50%;
          bottom: 10px;

          transform: translateX(-50%);

          display: flex;

          align-items: center;

          gap: 9px;

          white-space: nowrap;
        }

        .about-profile-caption span {
          width: 24px;
          height: 1px;

          background: rgba(213, 170, 80, 0.5);
        }

        .about-profile-caption p {
          margin: 0;

          color: #99958c;

          font-family: monospace;

          font-size: 7px;

          letter-spacing: 0.18em;
        }

        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .about-copy {
          width: 100%;

          max-width: 760px;

          min-width: 0;
        }

        .about-eyebrow {
          margin-bottom: 12px;

          color: #d5aa50;

          font-family: monospace;

          font-size: 10px;

          letter-spacing: 0.25em;
        }

        .about-description {
          margin-top: 24px;

          max-width: 680px;

          color: #aaa69e;

          font-size: clamp(13px, 1.1vw, 15px);

          line-height: 1.8;
        }

        .about-description p {
          margin: 0 0 12px;
        }

        .about-description strong {
          color: #f5f1e8;
        }

        /* =====================================================
           FOOTER
        ===================================================== */

        .about-footer {
          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-top: 32px;
        }

        .about-learning {
          display: block;

          color: #d5aa50;

          font-family: monospace;

          font-size: 9px;

          letter-spacing: 0.22em;
        }

        .about-learning-tech {
          display: block;

          margin-top: 7px;

          color: #67645e;

          font-family: monospace;

          font-size: 8px;

          letter-spacing: 0.13em;
        }

        @keyframes aboutArrowMove {
          0%,
          100% {
            transform: translateY(-4px);
            opacity: 0.7;
          }

          50% {
            transform: translateY(5px);
            opacity: 1;
          }
        }

        @keyframes aboutArrowPulse {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(213, 170, 80, 0);
          }

          50% {
            box-shadow: 0 0 18px rgba(213, 170, 80, 0.16);
          }
        }

        @keyframes aboutArrowSweep {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        /* =====================================================
           CARDS
        ===================================================== */

        .about-cards {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 12px;

          margin-top: 38px;
        }

        .about-card {
          position: relative;

          min-height: 170px;

          padding: 18px;

          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.08);

          background: rgba(255, 255, 255, 0.018);

          isolation: isolate;

          transition:
            transform 0.42s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.42s ease;
        }

        /* Soft cursor-like spotlight */
        .about-card::before {
          content: "";

          position: absolute;

          inset: -35%;

          z-index: -1;

          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(239, 197, 102, 0.13),
              rgba(213, 170, 80, 0.045) 22%,
              transparent 58%
            );

          opacity: 0;

          transform: scale(0.72);

          transition:
            opacity 0.45s ease,
            transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);

          pointer-events: none;
        }

        .about-card::after {
          content: "";

          position: absolute;

          left: -55%;

          top: -25%;

          width: 35%;

          height: 150%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(239, 197, 102, 0.16),
              transparent
            );

          transform: rotate(16deg);

          opacity: 0;

          transition:
            left 0.75s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.25s ease;

          pointer-events: none;
        }

        .about-card:hover {
          transform: translateY(-7px) scale(1.018);

          border-color: rgba(239, 197, 102, 0.55);

          background: rgba(213, 170, 80, 0.045);

          box-shadow:
            0 18px 42px rgba(0, 0, 0, 0.38),
            0 0 28px rgba(213, 170, 80, 0.075);
        }

        .about-card:hover::before {
          opacity: 1;

          transform: scale(1);
        }

        .about-card:hover::after {
          left: 125%;

          opacity: 1;
        }

        .about-card-header {
          display: flex;

          align-items: center;

          justify-content: space-between;
        }

        .about-card-number {
          color: #77736c;

          font-family: monospace;

          font-size: 9px;

          letter-spacing: 0.2em;
        }

        .about-card-icon {
          width: 34px;
          height: 34px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: #d5aa50;

          border: 1px solid rgba(213, 170, 80, 0.2);

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .about-card:hover .about-card-icon {
          transform:
            translateY(-1px)
            scale(1.1)
            rotate(4deg);

          color: #efc566;

          border-color: rgba(239, 197, 102, 0.48);

          background:
            rgba(213, 170, 80, 0.1);

          box-shadow:
            0 0 18px rgba(213, 170, 80, 0.09);
        }

        .about-card h3 {
          margin: 18px 0 7px;

          color: #f5f1e8;

          font-size: 14px;

          font-weight: 600;

          transition:
            color 0.3s ease,
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-card:hover h3 {
          color: #efc566;

          transform: translateX(2px);
        }

        .about-card p {
          margin: 0;

          color: #88857e;

          font-size: 10px;

          line-height: 1.65;
        }

        .about-card-line {
          position: absolute;

          right: 18px;
          bottom: 13px;

          width: 24px;
          height: 1px;

          background: rgba(213, 170, 80, 0.4);

          transition: width 0.3s ease;
        }

        .about-card:hover .about-card-line {
          width: 54px;

          background: #efc566;

          box-shadow:
            0 0 10px rgba(239, 197, 102, 0.35);
        }

        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1100px) {
          .about-intro {
            gap: 40px;
          }

          .about-profile-wrapper {
            width: min(280px, 100%);
          }

          .about-profile-area {
            height: 500px;
          }

          .about-cards {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 760px) {
          .about-section-title {
            margin-bottom: 38px;
          }

          .about-main-heading {
            font-size: clamp(24px, 5vw, 36px);
          }

          .about-section {
            padding:
              75px
              28px
              70px;
          }

          /*
             Still TWO COLUMNS.
             Photo stays LEFT.
          */

          .about-intro {
            grid-template-columns:
              minmax(0, 0.85fr)
              minmax(0, 1.15fr);

            gap: 22px;
          }

          .about-profile-area {
            height: 400px;
          }

          .about-profile-wrapper {
            width: min(210px, 90%);
          }

          .about-orbit-one {
            width: 95%;
            height: 88%;
          }

          .about-orbit-two {
            width: 100%;
            height: 65%;
          }

          .about-description {
            font-size: 12px;

            line-height: 1.7;
          }

          .about-footer {
            margin-top: 24px;
          }

          .about-cards {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 10px;

            margin-top: 30px;
          }

          .about-card {
            min-height: 135px;

            padding: 15px;
          }

          .about-card h3 {
            margin-top: 13px;

            font-size: 13px;
          }

          .about-card p {
            font-size: 9px;
          }
        }

        /* =====================================================
           PHONE
        ===================================================== */

        @media (max-width: 560px) {
          .about-section-title {
            margin-bottom: 28px;
          }

          .about-main-heading {
            font-size: clamp(18px, 5vw, 25px);
          }

          .about-section {
            padding:
              65px
              16px
              60px;
          }

          /*
             IMPORTANT:
             PHONE ALSO STAYS TWO-COLUMN.
             PHOTO = LEFT
             CONTENT = RIGHT
          */

          .about-intro {
            grid-template-columns:
              minmax(90px, 0.85fr)
              minmax(0, 1.15fr);

            gap: 12px;

            align-items: center;
          }

          .about-eyebrow {
            margin-bottom: 7px;

            font-size: 7px;

            letter-spacing: 0.18em;
          }

          .about-description {
            margin-top: 13px;

            font-size: 9px;

            line-height: 1.6;
          }

          .about-description p {
            margin-bottom: 7px;
          }

          /* PHONE IMAGE */
          .about-profile-area {
            width: 100%;

            height: 300px;
          }

          .about-profile-wrapper {
            width: min(145px, 100%);
          }

          .about-aura {
            width: 150px;
            height: 230px;

            filter: blur(35px);
          }

          .about-orbit-one {
            width: 155px;
            height: 250px;
          }

          .about-orbit-two {
            width: 170px;
            height: 190px;
          }

          .about-orbit span {
            width: 4px;
            height: 4px;
          }

          .about-profile-caption {
            bottom: -2px;

            gap: 5px;
          }

          .about-profile-caption span {
            width: 12px;
          }

          .about-profile-caption p {
            font-size: 5px;

            letter-spacing: 0.1em;
          }

          .about-image-meta {
            left: 9px;
            right: 9px;

            font-size: 5px;
          }

          .about-meta-top {
            top: 9px;
          }

          .about-meta-bottom {
            bottom: 9px;
          }

          .about-corner {
            width: 12px;
            height: 12px;
          }

          .about-corner-tl {
            top: 9px;
            left: 9px;
          }

          .about-corner-tr {
            top: 9px;
            right: 9px;
          }

          .about-corner-bl {
            bottom: 9px;
            left: 9px;
          }

          .about-corner-br {
            bottom: 9px;
            right: 9px;
          }

          /* FOOTER */

          .about-footer {
            margin-top: 16px;
          }

          .about-learning {
            font-size: 7px;

            letter-spacing: 0.15em;
          }

          .about-learning-tech {
            margin-top: 5px;

            font-size: 5.5px;

            letter-spacing: 0.08em;
          }

          /* CARDS */

          .about-cards {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 8px;

            margin-top: 25px;
          }

          .about-card {
            min-height: 125px;

            padding: 12px;
          }

          .about-card-number {
            font-size: 7px;
          }

          .about-card-icon {
            width: 27px;
            height: 27px;

            font-size: 10px;
          }

          .about-card h3 {
            margin: 11px 0 5px;

            font-size: 11px;
          }

          .about-card p {
            font-size: 8px;

            line-height: 1.5;
          }

          .about-card-line {
            right: 12px;
            bottom: 9px;

            width: 18px;
          }
        }

        /* =====================================================
           VERY SMALL PHONES
        ===================================================== */

        @media (max-width: 380px) {
          .about-section-title {
            margin-bottom: 24px;
          }

          .about-main-heading {
            font-size: 17px;
          }

          .about-section {
            padding:
              58px
              12px
              55px;
          }

          .about-intro {
            grid-template-columns:
              minmax(78px, 0.82fr)
              minmax(0, 1.18fr);

            gap: 8px;
          }

          .about-profile-area {
            height: 275px;
          }

          .about-profile-wrapper {
            width: 125px;
          }

          .about-aura {
            width: 135px;
            height: 205px;
          }

          .about-orbit-one {
            width: 140px;
            height: 225px;
          }

          .about-orbit-two {
            width: 150px;
            height: 175px;
          }

          .about-description {
            font-size: 8px;
          }

          .about-cards {
            gap: 6px;
          }

          .about-card {
            min-height: 115px;

            padding: 10px;
          }

          .about-card h3 {
            font-size: 10px;
          }

          .about-card p {
            font-size: 7px;
          }

          .about-learning {
            font-size: 6px;
          }

          .about-learning-tech {
            font-size: 5px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .about-aura,
          .about-orbit,
          .about-light-sweep,
          .about-scan-line {
            animation: none !important;
          }

          .about-arrow::before,


          .about-profile-wrapper,
          .about-profile-image,
          .about-card {
            transition: none !important;
          }
        }
      `})]})};export{u as default};