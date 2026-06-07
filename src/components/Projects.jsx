import React, { useState } from 'react';
import { FaGithub, FaSearchPlus } from 'react-icons/fa';

const indupro = {
  name: 'INDUPRO / PMS',
  sub: 'APQP Industrial Project Management — Safran (End-of-Studies Project)',
  desc: 'Full-stack platform managing APQP-structured industrial projects across 6 organizational units. APQP timeline & MicroGantt, Obeya SQCDP dashboard, charge/capacity planning, role-based access and real-time WebSocket notifications — backed by a LightGBM ranking microservice with SHAP explainability and a 15-stage DevSecOps pipeline.',
  tech: ['Angular','Spring Boot','Java 8','FastAPI','MS SQL Server','LightGBM','Docker','Jenkins','SonarQube'],
  metrics: [
    { v:'6', l:'Organizational units' },
    { v:'15', l:'DevSecOps stages' },
    { v:'4', l:'Microservices' },
    { v:'RBAC', l:'5 roles' },
  ],
};

const projects = [
  { name:'InsightWeb', sub:'Website Performance Analyzer', desc:'Self-hosted tool analyzing performance, SEO, accessibility & best practices with exact point breakdowns. Playwright-powered headless browser automation with precise scoring algorithms.', tech:['Python','Flask','Playwright','REST API'], gh:'https://github.com/Jihedoueslatiii/Website-Performance-Analyzer', feat:true, imgs:[] },
  { name:'SwaggerSense', sub:'AI-Powered API Tester', desc:'Reads Swagger specs, auto-generates functional, negative and security tests via Gemini, runs them, shows results in a dashboard.', tech:['Python','Flask','Gemini API','REST','Testing'], gh:'https://github.com/Jihedoueslatiii', feat:true, imgs:[ `${process.env.PUBLIC_URL}/Copie de Commercial Presentation (1).jpg`] },
  { name:'Smart Recruitment', sub:'Multi-LLM CV Scoring', desc:'AI scoring pipeline — job matching, quizzes, fraud detection, HR content generation across Gemini, GPT-5, Ollama.', tech:['React','FastAPI','MongoDB','AI/ML'], gh:'https://github.com/Jihedoueslatiii', feat:true, imgs:[`${process.env.PUBLIC_URL}/Capture d'écran 2025-10-22 193601.png`, `${process.env.PUBLIC_URL}/Capture d'écran 2025-10-22 193300.png` ] },
  { name:'Travel Agency', sub:'Microservices', desc:'Bookings, itineraries, client management. Eureka + API Gateway + Docker.', tech:['Angular','Spring Boot','Docker','MySQL'], gh:'https://github.com/Jihedoueslatiii',
    imgs:[`${process.env.PUBLIC_URL}/tourism-4438308_1920.jpg`] },
  { name:'Construction Mgmt', sub:'Workflows', desc:'Kanban, teams, progress tracking — microservices.', tech:['Spring Boot','Angular','MySQL'], gh:'https://github.com/Jihedoueslatiii',
    imgs:[`${process.env.PUBLIC_URL}/120331_11953955_2274970_e192cc9b_image.png`] },
  { name:'File Management', sub:'SaaS Platform', desc:'Role-based access, Stripe billing, usage analytics.', tech:['PHP','Node.js','MongoDB','Stripe'], gh:'https://github.com/Jihedoueslatiii',
    imgs:[`${process.env.PUBLIC_URL}/Landing1.png`,`${process.env.PUBLIC_URL}/Landing2.png`,`${process.env.PUBLIC_URL}/Plans.png`] },
  { name:'Collab Projects', sub:'Cross-Platform', desc:'Desktop + web + mobile project management with gamified milestones.', tech:['JavaFX','Symfony','FlutterFlow'], gh:'https://github.com/Jihedoueslatiii',
    imgs:[`${process.env.PUBLIC_URL}/Capture d'écran 2024-02-17 180806.png`,`${process.env.PUBLIC_URL}/symfony1.png`,`${process.env.PUBLIC_URL}/symfony3.png`,`${process.env.PUBLIC_URL}/symfony6.png`] },
];

export default function Projects() {
  const [covers, setCovers] = useState({});
  const [modal, setModal] = useState(null);

  return (
    <div>
      <div className="label"><span className="idx">05</span> Projects</div>
      <h2 className="heading">Things I've built &amp; tested</h2>

      {/* Spotlight — End-of-Studies project (APQP platform) */}
      <div className="spotlight" style={{ marginBottom:14 }}>
        <div className="spotlight-body">
          <div style={{ display:'flex',alignItems:'center',gap:9,flexWrap:'wrap',marginBottom:7 }}>
            <span className="pill pill-b" style={{ background:'rgba(47,107,255,.22)',color:'#bcd1ff' }}>Featured · PFE</span>
            <span style={{ fontSize:'.72rem',color:'#9fb0cc' }}>Feb–Jun 2026 · Safran Tunisie</span>
          </div>
          <h3>{indupro.name}</h3>
          <p style={{ fontSize:'.78rem',color:'#8fa3c4',fontWeight:500,margin:'3px 0 12px' }}>{indupro.sub}</p>
          <p style={{ fontSize:'.88rem',color:'#cfdaee',lineHeight:1.65,maxWidth:680,marginBottom:16 }}>{indupro.desc}</p>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(120px, 1fr))',gap:12,maxWidth:520,marginBottom:16,paddingBottom:16,borderBottom:'1px solid rgba(255,255,255,.1)' }}>
            {indupro.metrics.map(m => (
              <div key={m.l} className="metric"><b>{m.v}</b><span>{m.l}</span></div>
            ))}
          </div>

          <div style={{ display:'flex',flexWrap:'wrap',gap:4 }}>
            {indupro.tech.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>

      <div className="pgrid reveal-grid" style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(285px, 1fr))',gap:10 }}>
        {projects.map((p,i) => {
          const ci = covers[i] || 0;
          const has = p.imgs?.length > 0;
          return (
            <div key={i} className={`pc${p.feat?' feat':''}`}>
              {has ? (
                <div style={{ position:'relative',overflow:'hidden' }}>
                  <img src={p.imgs[ci]} alt={p.name} className="pc-img" onClick={() => setModal({imgs:p.imgs,idx:ci})} />
                  <div onClick={() => setModal({imgs:p.imgs,idx:ci})} style={{ position:'absolute',top:8,right:8,width:26,height:26,borderRadius:7,background:'rgba(0,0,0,.42)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'.6rem',cursor:'pointer',backdropFilter:'blur(4px)' }}><FaSearchPlus /></div>
                  {p.imgs.length > 1 && <div style={{ position:'absolute',bottom:8,left:8,fontSize:'.6rem',color:'#fff',background:'rgba(0,0,0,.45)',padding:'1px 6px',borderRadius:5 }}>{ci+1}/{p.imgs.length}</div>}
                </div>
              ) : (
                <div className="pc-ph"><span>{p.name.charAt(0)}</span></div>
              )}
              {has && p.imgs.length > 1 && (
                <div className="pc-thumbs">
                  {p.imgs.map((src,j) => <img key={j} src={src} alt="" className={j===ci?'on':''} onClick={() => setCovers(c => ({...c,[i]:j}))} />)}
                </div>
              )}
              <div className="pc-body">
                <div style={{ display:'flex',alignItems:'center',gap:6,marginBottom:2 }}>
                  <h3 style={{ fontFamily:'var(--display)',fontWeight:600,fontSize:'.98rem',color:'var(--navy)',margin:0,letterSpacing:'-.01em' }}>{p.name}</h3>
                  {p.feat && <span className="pill pill-b">Featured</span>}
                </div>
                <p style={{ fontSize:'.7rem',color:'var(--text-4)',fontWeight:500,marginBottom:6 }}>{p.sub}</p>
                <p style={{ fontSize:'.8rem',color:'var(--text-2)',lineHeight:1.55,marginBottom:9,flex:1 }}>{p.desc}</p>
                <div style={{ display:'flex',flexWrap:'wrap',gap:3,alignItems:'center' }}>
                  {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  {p.gh && <a href={p.gh} target="_blank" rel="noopener noreferrer" className="gh"><FaGithub /> repo</a>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <img src={modal.imgs[modal.idx]} alt="" className="main" />
          {modal.imgs.length > 1 && (
            <>
              <div onClick={e => e.stopPropagation()} style={{ display:'flex',gap:5,background:'rgba(255,255,255,.08)',padding:'5px 7px',borderRadius:9 }}>
                {modal.imgs.map((src,j) => <img key={j} src={src} alt="" onClick={() => setModal(m => ({...m,idx:j}))}
                  style={{ width:54,height:36,objectFit:'cover',borderRadius:6,cursor:'pointer',border:j===modal.idx?'2px solid var(--blue)':'2px solid transparent',opacity:j===modal.idx?1:.4,transition:'all .15s' }} />)}
              </div>
              <button className="modal-nav prev" onClick={e => {e.stopPropagation();setModal(m => ({...m,idx:(m.idx-1+m.imgs.length)%m.imgs.length}));}}>&larr;</button>
              <button className="modal-nav next" onClick={e => {e.stopPropagation();setModal(m => ({...m,idx:(m.idx+1)%m.imgs.length}));}}>&rarr;</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
