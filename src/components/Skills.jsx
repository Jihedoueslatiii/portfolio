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
      <div className="label">Skills</div>
      <h2 className="heading">Technical toolkit</h2>
      <div style={{ display:'flex',flexWrap:'wrap',gap:4,marginBottom:'.85rem' }}>
        {Object.keys(data).map(c => <button key={c} onClick={() => setTab(c)} className={`tab ${tab===c?'on':''}`}>{c}</button>)}
      </div>
      <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(145px, 1fr))',gap:5 }}>
        {data[tab].map(s => (
          <div key={s} className="card" style={{ padding:'.55rem .8rem',display:'flex',alignItems:'center',gap:6,cursor:'default' }}>
            <div style={{ width:5,height:5,borderRadius:'50%',background:'var(--blue)',flexShrink:0 }} />
            <span style={{ fontWeight:500,fontSize:'.8rem',color:'var(--text)' }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
