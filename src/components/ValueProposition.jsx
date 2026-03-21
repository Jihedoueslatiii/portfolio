import React from 'react';
import { FaVial, FaCogs, FaRobot, FaTools, FaShieldAlt, FaAward } from 'react-icons/fa';

const items = [
  { icon:<FaVial />, t:'Test-first approach', d:'ISTQB methodology. Functional, non-functional, security, regression — automated.' },
  { icon:<FaCogs />, t:'CI/CD pipelines', d:'Jenkins, SonarQube gates, Docker, Kubernetes, Prometheus + Grafana.' },
  { icon:<FaRobot />, t:'AI-powered QA', d:'SwaggerSense: auto-generates test scenarios from Swagger specs via Gemini.' },
  { icon:<FaTools />, t:'Full-stack delivery', d:'Angular, React, Spring Boot, Node.js, MongoDB, MySQL.' },
  { icon:<FaShieldAlt />, t:'Quality monitoring', d:'Real-time dashboards, automated alerts, PDF reporting.' },
  { icon:<FaAward />, t:'Certified', d:'IBM Big Data, AWS Cloud, Scrum SFC, Huawei HCIA.' },
];

export default function ValueProposition() {
  return (
    <div>
      <div className="label">What I do</div>
      <h2 className="heading">Ship tested software, not just code</h2>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(270px, 1fr))',gap:8 }}>
        {items.map(i => (
          <div key={i.t} className="card" style={{ padding:'.95rem 1.05rem' }}>
            <div style={{ display:'flex',gap:'.6rem',alignItems:'flex-start' }}>
              <div style={{ width:32,height:32,borderRadius:8,background:'var(--blue-bg)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--blue)',fontSize:'.8rem',flexShrink:0 }}>{i.icon}</div>
              <div>
                <h3 style={{ fontWeight:600,fontSize:'.86rem',color:'var(--text)',marginBottom:2 }}>{i.t}</h3>
                <p style={{ fontSize:'.78rem',color:'var(--text-3)',lineHeight:1.5 }}>{i.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
