import React from 'react';

const stats = [
  { v:'5+', l:'Internships' }, { v:'9+', l:'Projects' }, { v:'5', l:'Certifications' }, { v:'3', l:'Languages' },
];

export default function AboutMe() {
  return (
    <div>
      <div className="label">About me</div>
      <h2 className="heading">Quality-first software engineer</h2>
      <div className="card" style={{ padding:'1.5rem' }}>
        <div style={{ display:'flex',flexDirection:'column',gap:'.45rem',marginBottom:'1.1rem' }}>
          <p style={{ fontSize:'.88rem',lineHeight:1.7,color:'var(--text-2)' }}>
            <strong style={{ color:'var(--text)' }}>Jihed Oueslati</strong> — engineering student at ESPRIT 
            (Software Architecture), previously graduated in Network & Systems. My focus is 
            <strong style={{ color:'var(--text)' }}> QA, automated testing, CI/CD pipelines, and AI-driven quality assurance</strong>.
          </p>
          <p style={{ fontSize:'.88rem',lineHeight:1.7,color:'var(--text-2)' }}>
            Every project gets a pipeline: SonarQube quality gates, Jenkins builds, Docker containers, 
            Prometheus monitoring. I built SwaggerSense — an AI tool that reads API specs and 
            auto-generates functional, security, and negative tests using Google Gemini.
          </p>
          <p style={{ fontSize:'.88rem',lineHeight:1.7,color:'var(--text-2)' }}>
            At Safran, I integrated AI into QRQC dashboards with automated PDF reporting. 
            I also built an intelligent recruitment platform scoring CVs with multiple LLMs. 
            The thread: <strong style={{ color:'var(--text)' }}>make it work, prove it works, keep it working</strong>.
          </p>
        </div>
        <div className="stat-grid" style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8,padding:'.85rem 0',borderTop:'1px solid var(--border)' }}>
          {stats.map(s => (
            <div key={s.l} style={{ textAlign:'center' }}>
              <div style={{ fontWeight:700,fontSize:'1.3rem',color:'var(--blue)',lineHeight:1 }}>{s.v}</div>
              <div style={{ fontSize:'.68rem',color:'var(--text-4)',marginTop:3 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
