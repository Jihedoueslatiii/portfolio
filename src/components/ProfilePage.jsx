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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative' }}>
      <div className="bg-aurora" />
      <div className="bg-grid" />
      <div className="bg-grain" />

      <div className="progress" ref={progressRef} style={{ width: 0 }} />

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
        <div className="wrap">
          <div className="hero-flex" style={{ display:'flex',alignItems:'center',gap:'2.8rem',flexWrap:'wrap' }}>
            <motion.div initial={{ opacity:0,scale:.92,y:8 }} animate={{ opacity:1,scale:1,y:0 }} transition={{ duration:.5,ease:[.22,1,.36,1] }} style={{ flexShrink:0 }}>
              <div className="hero-photo">
                <img
                  src={`${process.env.PUBLIC_URL}/Gemini_Generated_Image_tw9ff1tw9ff1tw9fa.png`}
                  alt="Jihed Oueslati"
                />
              </div>
            </motion.div>
            <div style={{ flex:1,minWidth:260 }}>
              <motion.div initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ delay:.06 }}>
                <div style={{ display:'flex',alignItems:'center',gap:10,marginBottom:14,flexWrap:'wrap' }}>
                  <span className="pill pill-g">Open to work</span>
                  <span style={{ fontSize:'.74rem',color:'var(--text-4)',display:'flex',alignItems:'center',gap:4 }}>
                    <FaMapMarkerAlt style={{ fontSize:'.6rem' }} />Tunis, Tunisia
                  </span>
                </div>
              </motion.div>
              <motion.h1 className="hero-name" initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ delay:.12 }}>
                <ReactTypingEffect text={["Jihed Oueslati"]} speed={70} eraseSpeed={50} typingDelay={300} cursor={"|"} />
              </motion.h1>
              <motion.p className="hero-role" initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ delay:.18 }}>
                Software Engineer &middot; QA &amp; Testing &middot; CI/CD &middot; AI Integration
              </motion.p>
              <motion.p className="hero-bio" initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ delay:.24 }}>
                I build tested, reliable software. From automated test generation and CI/CD pipelines
                to AI-driven quality workflows — I make sure code works before it ships.
              </motion.p>
              <motion.div className="soc-row" initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ delay:.3 }}
                style={{ display:'flex',gap:8 }}>
                <a href="https://linkedin.com/in/jihed-oueslati-7981b91ba" target="_blank" rel="noopener noreferrer" className="soc"><FaLinkedin /></a>
                <a href="https://github.com/Jihedoueslatiii" target="_blank" rel="noopener noreferrer" className="soc"><FaGithub /></a>
                <a href="mailto:oueslatiijihed@outlook.com" className="soc"><FaEnvelope /></a>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="wrap" style={{ paddingBottom:'3rem', position:'relative', zIndex:2 }}>
        <div style={{ display:'flex',flexDirection:'column',gap:'2.5rem' }}>
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
              <div className="label"><span className="idx">08</span> Contact</div>
              <h2 className="heading" style={{ marginBottom:6 }}>Let's work together</h2>
              <p style={{ color:'var(--text-3)',fontSize:'.88rem',marginBottom:'1.4rem' }}>Got a project or opportunity? Drop me a message.</p>
              <ContactForm />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div style={{ display:'flex',justifyContent:'center',gap:8,marginBottom:'.7rem' }}>
          <a href="https://linkedin.com/in/jihed-oueslati-7981b91ba" target="_blank" rel="noopener noreferrer" className="soc" style={{ width:34,height:34,fontSize:'.88rem' }}><FaLinkedin /></a>
          <a href="https://github.com/Jihedoueslatiii" target="_blank" rel="noopener noreferrer" className="soc" style={{ width:34,height:34,fontSize:'.88rem' }}><FaGithub /></a>
          <a href="mailto:oueslatiijihed@outlook.com" className="soc" style={{ width:34,height:34,fontSize:'.88rem' }}><FaEnvelope /></a>
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
        <FaArrowUp style={{ fontSize:'.78rem' }} />
      </button>
    </div>
  );
}
