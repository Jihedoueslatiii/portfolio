import React from 'react';

const exp = [
  { title:'Software Engineer — End of Studies Internship', co:'Safran Tunisie', date:'Feb–Jun 2026', loc:'Tunis',
    desc:'End-of-studies internship focused on software engineering ',
    tags:['Angular','Spring Boot','CI/CD','Docker','MsSQL','Microservices'], logo:`${process.env.PUBLIC_URL}/LOGO_SAFRAN_rvb.png`, latest:true },
  { title:'Full Stack Engineer', co:'Safran Tunisie', date:'Jun–Aug 2025', loc:'Tunis',
    desc:'QRQC dashboard (Angular + Spring Boot) for KPI visualization. AI-driven analysis, automated PDF reports, email alerts. Built testing pipeline from scratch.',
    tags:['Angular','Spring Boot','MsSQL','AI','QRQC'], logo:`${process.env.PUBLIC_URL}/LOGO_SAFRAN_rvb.png` },
  { title:'MERN Developer', co:'Secure Shield Consulting', date:'Jul–Aug 2024', loc:'Tunis',
    desc:'Document management with role-based access, large file support, real-time analytics dashboard.',
    tags:['React','Node.js','Express','MongoDB'], logo:`${process.env.PUBLIC_URL}/logo (1).png` },
  { title:'Network Admin', co:'BNA', date:'Feb–Jun 2023', loc:'Tunis',
    desc:'Deployed Zabbix + SNMP + SolarWinds monitoring across infrastructure.',
    tags:['Zabbix','SNMP','SolarWinds'], logo:`${process.env.PUBLIC_URL}/Logo-bna-V213430.png` },
  { title:'Web Developer', co:'BNA', date:'Jul–Aug 2022', loc:'Tunis',
    desc:'Client management app — profiles and transactions with PHP + MySQL.',
    tags:['PHP','MySQL','JavaScript'], logo:`${process.env.PUBLIC_URL}/Logo-bna-V213430.png` },
];

export default function ProfessionalExperience() {
  return (
    <div>
      <div className="label">Experience</div>
      <h2 className="heading">Where I've worked</h2>
      <div className="tl">
        <div className="tl-line" />
        {exp.map((e,i) => (
          <div key={i} style={{ position:'relative',marginBottom:'.85rem' }}>
            <div className="tl-dot" />
            <div className="card" style={{ padding:'1rem 1.1rem',marginLeft:10 }}>
              <div style={{ display:'flex',gap:8,alignItems:'flex-start',marginBottom:4 }}>
                <div className="logo-b" style={{ width:48,height:48,borderRadius:10 }}>
                  <img src={e.logo} alt={e.co} style={{ padding:4 }} onError={ev => { ev.target.style.display='none'; ev.target.parentNode.innerHTML=`<span style="font-size:.6rem;color:var(--text-4);font-weight:600">${e.co.substring(0,3)}</span>`; }} />
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:4 }}>
                    <div style={{ display:'flex',alignItems:'center',gap:6,flexWrap:'wrap' }}>
                      <h3 className="subhead" style={{ margin:0,fontSize:'.88rem' }}>{e.title}</h3>
                      {e.latest && <span className="pill pill-n">Latest</span>}
                    </div>
                    <span style={{ fontSize:'.72rem',color:'var(--text-4)',fontWeight:500 }}>{e.date}</span>
                  </div>
                  <p style={{ fontSize:'.74rem',color:'var(--text-4)' }}>{e.co} &middot; {e.loc}</p>
                </div>
              </div>
              <p style={{ fontSize:'.84rem',color:'var(--text-2)',lineHeight:1.6,marginBottom:6 }}>{e.desc}</p>
              <div style={{ display:'flex',flexWrap:'wrap',gap:3 }}>{e.tags.map((t,j) => <span key={j} className="tag">{t}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}