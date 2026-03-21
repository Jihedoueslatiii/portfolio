import React, { useEffect, useRef, useCallback } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp, FaDownload, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import AboutMe from './AboutMe';
import ProfessionalExperience from './ProfessionalExperience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import ValueProposition from './ValueProposition';
import ContactForm from './ContactForm';
import './ProfilePage.css';

export default function ProfilePage() {
  const progressRef = useRef(null);
  const scrollBtnRef = useRef(null);
  const navRef = useRef(null);
  const ticking = useRef(false);

  // Use refs + direct DOM manipulation for scroll progress to avoid re-render jank
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(() => {
        const d = document.documentElement.scrollHeight - window.innerHeight;
        const pct = d > 0 ? (window.pageYOffset / d) * 100 : 0;
        if (progressRef.current) progressRef.current.style.width = `${pct}%`;
        if (scrollBtnRef.current) {
          if (window.pageYOffset > 200) {
            scrollBtnRef.current.style.opacity = '1';
            scrollBtnRef.current.style.transform = 'translateY(0)';
            scrollBtnRef.current.style.pointerEvents = 'auto';
          } else {
            scrollBtnRef.current.style.opacity = '0';
            scrollBtnRef.current.style.transform = 'translateY(10px)';
            scrollBtnRef.current.style.pointerEvents = 'none';
          }
        }
        if (navRef.current) {
          navRef.current.classList.toggle('scrolled', window.pageYOffset > 20);
        }
        ticking.current = false;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // IntersectionObserver for fade-in sections (replaces framer-motion whileInView which causes scroll issues)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 58, behavior: 'smooth' });
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="progress" ref={progressRef} />

      <nav className="nav" ref={navRef}>
        <div className="nav-logo">Jihed<span>.</span></div>
        <div className="nav-r">
          {['about','experience','projects','skills','contact'].map(x =>
            <button key={x} className="nav-btn" onClick={() => go(x)}>{x.charAt(0).toUpperCase()+x.slice(1)}</button>
          )}
          <a href={`${process.env.PUBLIC_URL}/JihedOueslati.pdf`} download>
            <button className="btn"><FaDownload style={{ fontSize:'.65rem' }} /> Resume</button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-flex" style={{ display:'flex',alignItems:'center',gap:'2.5rem',flexWrap:'wrap' }}>
            <motion.div initial={{ opacity:0,scale:.92 }} animate={{ opacity:1,scale:1 }} transition={{ duration:.4 }} style={{ flexShrink:0 }}>
              <div style={{ width:220,height:220,borderRadius:16,overflow:'hidden',border:'2px solid var(--border)',background:'var(--bg-2)' }}>
                <img src={`${process.env.PUBLIC_URL}/Gemini_Generated_Image_tw9ff1tw9ff1tw9fa.png`} alt="Jihed Oueslati" style={{ width:'100%',height:'100%',objectFit:'cover' }} />
              </div>
            </motion.div>
            <div style={{ flex:1,minWidth:240 }}>
              <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:.06 }}>
                <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:8,flexWrap:'wrap' }}>
                  <span className="pill pill-g">Open to work</span>
                  <span style={{ fontSize:'.72rem',color:'var(--text-4)',display:'flex',alignItems:'center',gap:3 }}>
                    <FaMapMarkerAlt style={{ fontSize:'.58rem' }} />Tunis, Tunisia
                  </span>
                </div>
              </motion.div>
              <motion.h1 initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:.12 }}
                style={{ fontSize:'2.2rem',fontWeight:700,lineHeight:1.1,marginBottom:8,color:'var(--navy)',letterSpacing:'-.03em' }}>
                <ReactTypingEffect text={["Jihed Oueslati"]} speed={70} eraseSpeed={50} typingDelay={300} cursor={"|"} />
              </motion.h1>
              <motion.p initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:.18 }}
                style={{ fontSize:'.88rem',color:'var(--text-3)',marginBottom:10,fontWeight:500 }}>
                Software Engineer &middot; QA & Testing &middot; CI/CD &middot; AI Integration
              </motion.p>
              <motion.p initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:.24 }}
                style={{ fontSize:'.88rem',color:'var(--text-3)',lineHeight:1.65,maxWidth:440,marginBottom:16 }}>
                I build tested, reliable software. From automated test generation and CI/CD pipelines
                to AI-driven quality workflows — I make sure code works before it ships.
              </motion.p>
              <motion.div className="soc-row" initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:.3 }}
                style={{ display:'flex',gap:6 }}>
                <a href="https://linkedin.com/in/jihed-oueslati-7981b91ba" target="_blank" rel="noopener noreferrer" className="soc"><FaLinkedin /></a>
                <a href="https://github.com/Jihedoueslatiii" target="_blank" rel="noopener noreferrer" className="soc"><FaGithub /></a>
                <a href="mailto:oueslatiijihed@outlook.com" className="soc"><FaEnvelope /></a>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="wrap" style={{ paddingBottom:'3rem' }}>
        <div style={{ display:'flex',flexDirection:'column',gap:'2.25rem' }}>
          <section id="about" className="fade-section"><AboutMe /></section>
          <div className="divider" />
          <section className="fade-section"><ValueProposition /></section>
          <div className="divider" />
          <section id="experience" className="fade-section"><ProfessionalExperience /></section>
          <div className="divider" />
          <section id="education" className="fade-section"><Education /></section>
          <div className="divider" />
          <section id="projects" className="fade-section"><Projects /></section>
          <div className="divider" />
          <section id="skills" className="fade-section"><Skills /></section>
          <div className="divider" />
          <section className="fade-section"><Certifications /></section>
          <div className="divider" />
          <section id="contact" className="fade-section">
            <div className="contact-sec">
              <div className="label">Contact</div>
              <h2 className="heading" style={{ marginBottom:4 }}>Let's work together</h2>
              <p style={{ color:'var(--text-3)',fontSize:'.86rem',marginBottom:'1.25rem' }}>Got a project or opportunity? Drop me a message.</p>
              <ContactForm />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div style={{ display:'flex',justifyContent:'center',gap:6,marginBottom:'.6rem' }}>
          <a href="https://linkedin.com/in/jihed-oueslati-7981b91ba" target="_blank" rel="noopener noreferrer" className="soc" style={{ width:32,height:32,fontSize:'.85rem' }}><FaLinkedin /></a>
          <a href="https://github.com/Jihedoueslatiii" target="_blank" rel="noopener noreferrer" className="soc" style={{ width:32,height:32,fontSize:'.85rem' }}><FaGithub /></a>
          <a href="mailto:oueslatiijihed@outlook.com" className="soc" style={{ width:32,height:32,fontSize:'.85rem' }}><FaEnvelope /></a>
        </div>
        <p style={{ color:'var(--text-4)',fontSize:'.74rem' }}>
          Built by <span style={{ color:'var(--text-2)',fontWeight:600 }}>Jihed Oueslati</span> &copy; 2026. All rights reserved.
        </p>
      </footer>

      <button
        ref={scrollBtnRef}
        onClick={() => window.scrollTo({ top:0,behavior:'smooth' })}
        className="btn scroll-top"
        style={{ opacity:0,transform:'translateY(10px)',pointerEvents:'none',transition:'opacity .3s, transform .3s' }}
      >
        <FaArrowUp style={{ fontSize:'.75rem' }} />
      </button>
    </div>
  );
}
