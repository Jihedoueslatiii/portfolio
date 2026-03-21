import React from 'react';

const certs = [
  { t:'AWS Cloud Foundations', d:'AWS Cloud badge & certificate.', logo:`${process.env.PUBLIC_URL}/aws.png` },
  { t:'IBM Big Data Engineer', d:'Passed IBM proctored exam.', logo:`${process.env.PUBLIC_URL}/ibmlogo.png` },
  { t:'Huawei HCIA Networking', d:'Networking & switching cert.', logo:`${process.env.PUBLIC_URL}/huawei.png` },
  { t:'Scrum Fundamentals (SFC)', d:'Agile & Scrum — SCRUMstudy.', logo:`${process.env.PUBLIC_URL}/SFC.png` },
  { t:'Soft Skills Trainer', d:'State-approved — Univers Formation.', logo:`${process.env.PUBLIC_URL}/univ.jpg` },
];

export default function Certifications() {
  return (
    <div>
      <div className="label">Certifications</div>
      <h2 className="heading">Certifications</h2>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:6 }}>
        {certs.map((c,i) => (
          <div key={i} className="card" style={{ padding:'.85rem 1rem',display:'flex',gap:8,alignItems:'center' }}>
            <div style={{ width:34,height:34,borderRadius:'var(--rs)',background:'var(--bg-2)',overflow:'hidden',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border)' }}>
              <img src={c.logo} alt={c.t} style={{ width:26,height:26,objectFit:'contain' }}
                onError={e => { e.target.style.display='none'; e.target.parentNode.style.background='var(--blue-bg)'; e.target.parentNode.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'; }} />
            </div>
            <div>
              <h3 style={{ fontWeight:600,fontSize:'.82rem',color:'var(--text)',marginBottom:1 }}>{c.t}</h3>
              <p style={{ fontSize:'.7rem',color:'var(--text-3)',margin:0 }}>{c.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
