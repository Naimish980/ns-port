import{N as e,j as t,n,s as r,t as i,u as a}from"./index-B8gKzK4c.js";import{t as o}from"./SectionTitle-YekJXefT.js";var s=e(),c=()=>(0,s.jsxs)(`section`,{id:`experience`,className:`experience-video-section`,children:[(0,s.jsx)(`div`,{className:`experience-background-glow experience-glow-left`}),(0,s.jsx)(`div`,{className:`experience-background-glow experience-glow-right`}),(0,s.jsxs)(`div`,{className:`experience-container`,children:[(0,s.jsxs)(t.div,{className:`experience-heading`,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.7,ease:[.22,1,.36,1]},children:[(0,s.jsxs)(`div`,{className:`experience-index`,children:[(0,s.jsx)(t.span,{className:`experience-index-line`,initial:{width:0},whileInView:{width:35},viewport:{once:!0},transition:{duration:.6}}),(0,s.jsx)(`span`,{children:`03 / EXPERIENCE`})]}),(0,s.jsx)(o,{title:`Experience`,subtitle:`My professional journey and responsibilities.`})]}),(0,s.jsxs)(`div`,{className:`experience-video-stage`,children:[(0,s.jsx)(`div`,{className:`experience-video-grid`}),(0,s.jsx)(`div`,{className:`experience-video-vignette`}),(0,s.jsx)(t.div,{className:`experience-timeline-line`,initial:{height:0},whileInView:{height:`100%`},viewport:{once:!0,amount:.1},transition:{duration:1.6,ease:[.22,1,.36,1]}}),(0,s.jsxs)(`div`,{className:`experience-video-scene`,children:[(0,s.jsxs)(t.div,{className:`experience-scene-label`,initial:{opacity:0,x:-15},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5},children:[(0,s.jsx)(`span`,{children:`CAREER TIMELINE`}),(0,s.jsxs)(`span`,{children:[`01 — 0`,i.experience.length]})]}),i.experience.map((e,i)=>(0,s.jsxs)(t.article,{className:`experience-video-frame`,initial:{opacity:0,y:55,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0,amount:.18},transition:{duration:.7,delay:i*.12,ease:[.22,1,.36,1]},whileHover:{y:-4},children:[(0,s.jsx)(t.div,{className:`experience-timeline-dot`,initial:{scale:0,opacity:0},whileInView:{scale:1,opacity:1},viewport:{once:!0},transition:{duration:.45,delay:.25+i*.12,ease:[.22,1,.36,1]},children:(0,s.jsx)(`span`,{})}),(0,s.jsxs)(`div`,{className:`experience-frame-content`,children:[(0,s.jsxs)(t.div,{className:`experience-frame-number`,initial:{opacity:0,x:-15},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.45,delay:.15+i*.12},children:[`0`,i+1]}),(0,s.jsx)(`div`,{className:`experience-frame-light`}),(0,s.jsxs)(`div`,{className:`experience-frame-header`,children:[(0,s.jsxs)(t.div,{className:`experience-role-block`,initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:.18+i*.12},children:[(0,s.jsx)(`span`,{className:`experience-overline`,children:`PROFESSIONAL EXPERIENCE`}),(0,s.jsx)(`h3`,{children:e.role}),(0,s.jsx)(`div`,{className:`experience-company-line`,children:(0,s.jsx)(`span`,{children:e.company})})]}),(0,s.jsxs)(t.div,{className:`experience-date`,initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:.25+i*.12},children:[(0,s.jsx)(r,{}),(0,s.jsx)(`span`,{children:e.duration})]})]}),(0,s.jsx)(t.div,{className:`experience-frame-divider`,initial:{width:0},whileInView:{width:`100%`},viewport:{once:!0},transition:{duration:.7,delay:.3+i*.12}}),(0,s.jsx)(t.p,{className:`experience-frame-description`,initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.35+i*.12},children:e.description}),e.responsibilities&&(0,s.jsx)(`div`,{className:`experience-points`,children:e.responsibilities.map((e,n)=>(0,s.jsxs)(t.div,{className:`experience-point`,initial:{opacity:0,x:-18},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.2},transition:{duration:.4,delay:.42+i*.12+n*.06,ease:`easeOut`},children:[(0,s.jsx)(t.span,{className:`experience-point-icon`,initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{duration:.3,delay:.45+i*.12+n*.06},children:(0,s.jsx)(a,{})}),(0,s.jsx)(`span`,{children:e})]},n))}),(0,s.jsxs)(t.div,{className:`experience-frame-bottom`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.55+i*.12},children:[(0,s.jsx)(`span`,{children:`IT / INFRASTRUCTURE / SECURITY`}),(0,s.jsx)(`span`,{className:`experience-frame-arrow`,children:(0,s.jsx)(n,{})})]})]})]},i)),(0,s.jsxs)(t.div,{className:`experience-scene-end`,initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[(0,s.jsx)(`span`,{}),(0,s.jsx)(`p`,{children:`END OF EXPERIENCE`}),(0,s.jsx)(`span`,{})]})]})]})]}),(0,s.jsx)(`style`,{children:`
        .experience-video-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 110px 6vw 100px;
          background: #070707;
          color: #f5f1e8;
        }

        .experience-container {
          position: relative;
          z-index: 2;
          width: min(1400px, 100%);
          margin: 0 auto;
        }

        /* =========================
           BACKGROUND
        ========================= */

        .experience-background-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
        }

        .experience-glow-left {
          left: -200px;
          top: 25%;
          background: rgba(213, 170, 80, 0.035);
        }

        .experience-glow-right {
          right: -200px;
          bottom: 15%;
          background: rgba(213, 170, 80, 0.03);
        }

        /* =========================
           HEADER
        ========================= */

        .experience-heading {
          position: relative;
          margin-bottom: 55px;
        }

        .experience-index {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;

          color: #d5aa50;

          font-family: monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
        }

        .experience-index-line {
          display: block;
          width: 35px;
          height: 1px;
          background: #d5aa50;
        }

        /* =========================
           STAGE
        ========================= */

        .experience-video-stage {
          position: relative;
          overflow: hidden;

          padding: 25px 0 45px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.06);

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.06);

          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(213, 170, 80, 0.025),
              transparent 45%
            );
        }

        .experience-video-grid {
          position: absolute;
          inset: 0;

          opacity: 0.16;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );

          background-size:
            55px 55px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 12%,
              black 88%,
              transparent
            );

          pointer-events: none;
        }

        .experience-video-vignette {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at center,
              transparent 20%,
              rgba(0, 0, 0, 0.45) 100%
            );

          pointer-events: none;
        }

        /* =========================
           TIMELINE
        ========================= */

        .experience-timeline-line {
          position: absolute;

          top: 100px;
          bottom: 100px;
          left: 34px;

          width: 1px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(213, 170, 80, 0.35),
              rgba(213, 170, 80, 0.15),
              transparent
            );

          transform-origin: top;
        }

        .experience-video-scene {
          position: relative;
          z-index: 2;

          padding-left: 80px;
          padding-right: 25px;
        }

        /* =========================
           LABEL
        ========================= */

        .experience-scene-label {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 35px;

          color: #68635b;

          font-family: monospace;
          font-size: 7px;
          letter-spacing: 0.2em;
        }

        .experience-scene-label span:first-child {
          color: #d5aa50;
        }

        /* =========================
           CARD
        ========================= */

        .experience-video-frame {
          position: relative;

          margin-bottom: 18px;

          transform-origin: center;

          will-change: transform;
        }

        .experience-frame-content {
          position: relative;
          overflow: hidden;

          padding: 30px;

          border: 1px solid
            rgba(255, 255, 255, 0.075);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.028),
              rgba(255, 255, 255, 0.008)
            );

          transition:
            border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .experience-frame-content:hover {
          border-color:
            rgba(213, 170, 80, 0.3);

          background:
            linear-gradient(
              145deg,
              rgba(213, 170, 80, 0.035),
              rgba(255, 255, 255, 0.01)
            );

          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.28);
        }

        .experience-frame-content::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #d5aa50,
              transparent
            );

          opacity: 0.4;
        }

        /* =========================
           TIMELINE DOT
        ========================= */

        .experience-timeline-dot {
          position: absolute;

          left: -51px;
          top: 36px;

          z-index: 5;

          width: 13px;
          height: 13px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(213, 170, 80, 0.55);

          border-radius: 50%;

          background: #070707;

          box-shadow:
            0 0 15px
              rgba(213, 170, 80, 0.12);
        }

        .experience-timeline-dot span {
          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #d5aa50;

          box-shadow:
            0 0 8px
              rgba(213, 170, 80, 0.65);
        }

        /* =========================
           NUMBER
        ========================= */

        .experience-frame-number {
          position: absolute;

          top: 23px;
          right: 25px;

          color: rgba(213, 170, 80, 0.18);

          font-family: monospace;
          font-size: 42px;
          font-weight: 500;

          line-height: 1;
        }

        .experience-frame-light {
          position: absolute;

          right: -100px;
          top: -100px;

          width: 220px;
          height: 220px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(213, 170, 80, 0.06),
              transparent 70%
            );

          pointer-events: none;
        }

        /* =========================
           HEADER
        ========================= */

        .experience-frame-header {
          position: relative;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          gap: 30px;
          padding-right: 80px;
        }

        .experience-role-block {
          min-width: 0;
        }

        .experience-overline {
          display: block;

          margin-bottom: 9px;

          color: #d5aa50;

          font-family: monospace;
          font-size: 7px;
          letter-spacing: 0.2em;
        }

        .experience-role-block h3 {
          margin: 0;

          color: #f5f1e8;

          font-size: clamp(20px, 2.3vw, 30px);
          font-weight: 500;

          line-height: 1.15;

          letter-spacing: -0.02em;
        }

        .experience-company-line {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-top: 9px;
        }

        .experience-company-line::before {
          content: "";

          width: 18px;
          height: 1px;

          background: #d5aa50;
        }

        .experience-company-line span {
          color: #aaa59a;

          font-size: 12px;
          letter-spacing: 0.04em;
        }

        /* =========================
           DATE
        ========================= */

        .experience-date {
          display: flex;
          align-items: center;
          gap: 8px;

          flex-shrink: 0;

          padding: 8px 11px;

          border: 1px solid
            rgba(255, 255, 255, 0.07);

          background: rgba(255, 255, 255, 0.02);

          color: #aaa59a;

          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.08em;
        }

        .experience-date svg {
          color: #d5aa50;
          font-size: 10px;
        }

        /* =========================
           DIVIDER
        ========================= */

        .experience-frame-divider {
          height: 1px;

          margin:
            24px
            0
            20px;

          background:
            linear-gradient(
              90deg,
              rgba(213, 170, 80, 0.35),
              rgba(255, 255, 255, 0.06),
              transparent
            );
        }

        /* =========================
           DESCRIPTION
        ========================= */

        .experience-frame-description {
          max-width: 900px;

          margin: 0 0 22px;

          color: #9b978e;

          font-size: 13px;
          line-height: 1.8;
        }

        /* =========================
           POINTS
        ========================= */

        .experience-points {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap:
            10px
            12px;

          margin-top: 18px;
        }

        .experience-point {
          display: flex;
          align-items: flex-start;

          gap: 9px;

          min-width: 0;

          padding:
            10px
            12px;

          border: 1px solid
            rgba(255, 255, 255, 0.045);

          background:
            rgba(255, 255, 255, 0.015);

          color: #8d8981;

          font-size: 11px;
          line-height: 1.55;

          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
        }

        .experience-point:hover {
          border-color:
            rgba(213, 170, 80, 0.18);

          background:
            rgba(213, 170, 80, 0.025);

          color: #c1bcb1;
        }

        .experience-point-icon {
          flex-shrink: 0;

          margin-top: 2px;

          color: #d5aa50;

          font-size: 10px;
        }

        /* =========================
           BOTTOM
        ========================= */

        .experience-frame-bottom {
          display: flex;
          align-items: center;

          gap: 10px;

          margin-top: 28px;

          color: #4f4b45;

          font-family: monospace;
          font-size: 6px;
          letter-spacing: 0.16em;
        }

        .experience-frame-bottom > span:first-child {
          white-space: nowrap;
        }

        .experience-frame-arrow {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-left: auto;

          color: #d5aa50;

          font-size: 9px;
        }

        /* =========================
           END
        ========================= */

        .experience-scene-end {
          display: flex;
          align-items: center;
          gap: 14px;

          padding-top: 35px;
        }

        .experience-scene-end span {
          flex: 1;

          height: 1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.08)
            );
        }

        .experience-scene-end span:last-child {
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.08),
              transparent
            );
        }

        .experience-scene-end p {
          margin: 0;

          color: #4f4b45;

          font-family: monospace;
          font-size: 6px;
          letter-spacing: 0.22em;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 800px) {
          .experience-video-section {
            padding:
              85px
              28px
              75px;
          }

          .experience-heading {
            margin-bottom: 40px;
          }

          .experience-video-stage {
            padding-top: 20px;
          }

          .experience-video-scene {
            padding-left: 60px;
            padding-right: 15px;
          }

          .experience-timeline-line {
            left: 25px;
          }

          .experience-timeline-dot {
            left: -43px;
          }

          .experience-frame-content {
            padding: 24px;
          }

          .experience-points {
            grid-template-columns: 1fr;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 560px) {
          .experience-video-section {
            padding:
              70px
              16px
              65px;
          }

          .experience-index {
            font-size: 7px;
            gap: 8px;
          }

          .experience-index-line {
            width: 25px;
          }

          .experience-heading {
            margin-bottom: 30px;
          }

          .experience-video-stage {
            padding:
              18px
              0
              30px;
          }

          .experience-video-scene {
            padding-left: 34px;
            padding-right: 4px;
          }

          .experience-timeline-line {
            top: 80px;
            left: 14px;
          }

          .experience-scene-label {
            margin-bottom: 25px;
            font-size: 6px;
          }

          .experience-video-frame {
            margin-bottom: 12px;
          }

          .experience-timeline-dot {
            left: -26px;
            top: 24px;

            width: 10px;
            height: 10px;
          }

          .experience-timeline-dot span {
            width: 3px;
            height: 3px;
          }

          .experience-frame-content {
            padding: 19px;
          }

          .experience-frame-number {
            top: 18px;
            right: 17px;

            font-size: 28px;
          }

          .experience-frame-header {
            display: block;

            padding-right: 45px;
          }

          .experience-overline {
            font-size: 6px;
          }

          .experience-role-block h3 {
            font-size: 19px;
          }

          .experience-company-line {
            margin-top: 7px;
          }

          .experience-company-line span {
            font-size: 10px;
          }

          .experience-date {
            width: fit-content;

            margin-top: 14px;

            padding:
              7px
              9px;

            font-size: 7px;
          }

          .experience-frame-divider {
            margin:
              18px
              0
              16px;
          }

          .experience-frame-description {
            font-size: 11px;
            line-height: 1.7;

            margin-bottom: 17px;
          }

          .experience-points {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .experience-point {
            padding:
              9px
              10px;

            font-size: 10px;
          }

          .experience-frame-bottom {
            margin-top: 20px;
            font-size: 5px;
          }

          .experience-frame-arrow {
            font-size: 8px;
          }

          .experience-scene-end {
            padding-top: 25px;
            gap: 9px;
          }

          .experience-scene-end p {
            font-size: 5px;
          }
        }

        /* =========================
           SMALL PHONE
        ========================= */

        @media (max-width: 380px) {
          .experience-video-section {
            padding:
              60px
              12px
              55px;
          }

          .experience-video-scene {
            padding-left: 29px;
          }

          .experience-timeline-line {
            left: 11px;
          }

          .experience-timeline-dot {
            left: -23px;
          }

          .experience-frame-content {
            padding: 16px;
          }

          .experience-role-block h3 {
            font-size: 17px;
          }

          .experience-company-line span {
            font-size: 9px;
          }

          .experience-frame-description {
            font-size: 10px;
          }

          .experience-point {
            font-size: 9px;
          }
        }

        /* =========================
           PREMIUM HOVER POLISH
        ========================= */

        .experience-frame-content {
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .experience-frame-content::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background:
            radial-gradient(
              circle at 18% 20%,
              rgba(213, 170, 80, 0.08),
              transparent 32%
            );
          transition: opacity 0.35s ease;
        }

        .experience-video-frame:hover .experience-frame-content {
          transform: translateY(-5px);
          border-color: rgba(213, 170, 80, 0.42);
          background:
            linear-gradient(
              145deg,
              rgba(213, 170, 80, 0.045),
              rgba(255, 255, 255, 0.012)
            );
          box-shadow:
            0 22px 55px rgba(0, 0, 0, 0.32),
            0 0 28px rgba(213, 170, 80, 0.055);
        }

        .experience-video-frame:hover .experience-frame-content::after {
          opacity: 1;
        }

        .experience-video-frame:hover .experience-frame-number {
          color: rgba(213, 170, 80, 0.34);
          transition: color 0.3s ease;
        }

        .experience-video-frame:hover .experience-role-block h3 {
          color: #efc566;
          transform: translateX(3px);
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .experience-role-block h3 {
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .experience-video-frame:hover .experience-company-line::before {
          width: 28px;
          box-shadow: 0 0 9px rgba(213, 170, 80, 0.3);
        }

        .experience-company-line::before {
          transition:
            width 0.3s ease,
            box-shadow 0.3s ease;
        }

        .experience-video-frame:hover .experience-date {
          border-color: rgba(213, 170, 80, 0.3);
          color: #c8c1b4;
          box-shadow: 0 0 18px rgba(213, 170, 80, 0.045);
        }

        .experience-date {
          transition:
            border-color 0.3s ease,
            color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .experience-video-frame:hover .experience-timeline-dot {
          border-color: rgba(239, 197, 102, 0.9);
          box-shadow:
            0 0 0 4px rgba(213, 170, 80, 0.035),
            0 0 20px rgba(213, 170, 80, 0.22);
        }

        .experience-timeline-dot {
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .experience-point {
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
        }

        .experience-point:hover {
          transform: translateX(3px);
          border-color: rgba(213, 170, 80, 0.24);
          background: rgba(213, 170, 80, 0.035);
          color: #d0cabf;
        }

        .experience-point-icon {
          transition:
            transform 0.25s ease,
            filter 0.25s ease;
        }

        .experience-point:hover .experience-point-icon {
          transform: scale(1.12);
          filter: drop-shadow(0 0 5px rgba(213, 170, 80, 0.35));
        }

        .experience-frame-arrow {
          transition:
            transform 0.3s ease,
            color 0.3s ease,
            filter 0.3s ease;
        }

        .experience-video-frame:hover .experience-frame-arrow {
          transform: translateY(2px);
          color: #efc566;
          filter: drop-shadow(0 0 6px rgba(213, 170, 80, 0.35));
        }

        .experience-frame-bottom {
          transition: color 0.3s ease;
        }

        .experience-video-frame:hover .experience-frame-bottom {
          color: #6f685d;
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .experience-frame-content,
          .experience-point {
            transition: none !important;
          }
        }
      `})]});export{c as default};