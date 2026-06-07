import React, { useState } from 'react';

const data = {
  'QA & Testing':['ISTQB','Functional Testing','Non-Functional Testing','Test Automation','Security Testing','Regression'],
  'CI/CD & DevOps':['Jenkins','Docker','Kubernetes','SonarQube','Prometheus','Grafana','Git'],
  'Languages':['Python','Java','JavaScript','C','PHP'],
  'Frameworks':['Angular','React','Spring Boot','Node.js','Express.js','Symfony','.NET'],
  'Data':['MySQL','MongoDB','PL/SQL','SQL Server','Power BI','ETL'],
  'Architecture':['Microservices','REST APIs','GraphQL','API Gateway','Eureka','SOA'],
  'Infrastructure':['Linux','Ubuntu','CentOS','Windows Server','Zabbix','SNMP'],
};

export default function Skills() {
  const [tab, setTab] = useState('QA & Testing');
  return (
    <div>
      <div className="label"><span className="idx">06</span> Skills</div>
      <h2 className="heading">Technical toolkit</h2>
      <div style={{ display:'flex',flexWrap:'wrap',gap:5,marginBottom:'1rem' }}>
        {Object.keys(data).map(c => <button key={c} onClick={() => setTab(c)} className={`tab ${tab===c?'on':''}`}>{c}</button>)}
      </div>
      <div key={tab} className="reveal-grid" style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(145px, 1fr))',gap:6 }}>
        {data[tab].map(s => (
          <div key={s} className="card" style={{ padding:'.6rem .85rem',display:'flex',alignItems:'center',gap:7,cursor:'default',opacity:1 }}>
            <div style={{ width:6,height:6,borderRadius:'50%',background:'linear-gradient(135deg,var(--blue),var(--indigo))',flexShrink:0 }} />
            <span style={{ fontWeight:500,fontSize:'.8rem',color:'var(--text)' }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
