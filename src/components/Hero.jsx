import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
      <div className="grid-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pill mb-4" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-1)', display: 'inline-block' }}></span>
            Software Developer
          </div>
          <h1 className="mb-4" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1 }}>
            Hi, I'm <br />
            <span className="text-gradient">Shrey Ranjan Kumar</span>
          </h1>
          <p className="mb-6" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            A passionate Software Developer and Engineering Student. I specialize in building robust applications, 
            interactive full-stack platforms, and diving deep into data structures and problem-solving. Let's build something exceptional!
          </p>
          
          <div className="flex gap-4 mb-8">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
          </div>

          {/* Bottom Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            <div className="flex gap-4 items-center">
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Follow Me</span>
              <div style={{ width: '40px', height: '1px', background: 'var(--border-color)' }}></div>
              <div className="flex gap-3">
                <a href="https://github.com/shreyranjan18" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.6rem', borderRadius: '50%', display: 'flex' }}>
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/shreyranjankumar" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.6rem', borderRadius: '50%', display: 'flex' }}>
                  <Linkedin size={18} />
                </a>
                <a href="mailto:shreyranjankumar96@gmail.com" className="btn-secondary" style={{ padding: '0.6rem', borderRadius: '50%', display: 'flex' }}>
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <a 
              href="/resume.pdf" 
              download
              target="_blank"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                color: 'var(--text-primary)', 
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <Download color="var(--accent-1)" size={20} />
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center container-image animate-float"
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(6,182,212,0.2))',
            border: '2px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 80px rgba(168,85,247,0.1)'
          }}>
             <div style={{
               position: 'absolute', inset: 20, borderRadius: '50%',
               border: '1px dashed rgba(255,255,255,0.2)', animation: 'spin 20s linear infinite'
             }} />
             <div style={{ textAlign: 'center', zIndex: 10 }}>
                <h1 style={{ fontSize: '8rem', color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}>S</h1>
                <h3 className="text-gradient" style={{ letterSpacing: '4px' }}>CODE</h3>
             </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Hero;
