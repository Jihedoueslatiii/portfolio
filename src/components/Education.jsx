import React from 'react';

const edu = [
  { deg:'Engineering — Software Architecture', school:'ESPRIT', date:'2023 – Present', logo:`${process.env.PUBLIC_URL}/esprit.png`, current:true },
  { deg:'Bachelor — Network & Systems', school:'ISTIC', date:'2020 – 2023', logo:`${process.env.PUBLIC_URL}/istic.png` },
];

export default function Education() {
  return (
    <div>
      <div className="label"><span className="idx">04</span> Education</div>
      <h2 className="heading">Education</h2>
      <div className="tl reveal-grid">
        <div className="tl-line" />
        {edu.map((e,i) => (
          <div key={i} style={{ position:'relative',marginBottom:'.9rem' }}>
            <div className="tl-dot" />
            <div className="card" style={{ padding:'1.05rem 1.15rem',marginLeft:12 }}>
              <div style={{ display:'flex',gap:10,alignItems:'center' }}>
                <div className="logo-b">
                  <img src={e.logo} alt={e.school} onError={ev => { ev.target.style.display='none'; ev.target.parentNode.innerHTML=`<span style="font-size:.5rem;color:var(--text-4);font-weight:600">${e.school.substring(0,3)}</span>`; }} />
                </div>
                <div>
                  <div style={{ display:'flex',alignItems:'center',gap:6 }}>
                    <h3 className="subhead" style={{ margin:0,fontSize:'.92rem' }}>{e.deg}</h3>
                    {e.current && <span className="pill pill-g">Current</span>}
                  </div>
                  <p style={{ fontSize:'.74rem',color:'var(--text-4)' }}>{e.school} &middot; {e.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
