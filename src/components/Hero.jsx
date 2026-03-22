import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Eye } from 'lucide-react';

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

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://drive.google.com/file/d/1u4Ez3OzHkQFgRn41LL-oepe2MELiEDxq/view?usp=sharing" 
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
                Download (PDF)
              </a>

              <a 
                href="https://drive.google.com/file/d/1u4Ez3OzHkQFgRn41LL-oepe2MELiEDxq/view?usp=sharing" 
                target="_blank"
                rel="noreferrer"
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
                <Eye color="var(--accent-1)" size={20} />
                View Resume
              </a>
            </div>
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
            maxWidth: '430px',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--accent-rgb), 0.02))',
            border: '4px solid rgba(var(--accent-rgb), 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 80px rgba(var(--accent-rgb), 0.2)',
            padding: '12px'
          }}>
             <div style={{
               position: 'absolute', inset: -15, borderRadius: '50%',
               border: '1px dashed rgba(var(--accent-rgb), 0.4)', animation: 'spin 20s linear infinite', zIndex: 1
             }} />
             
             <img 
               src="/profile.jpg" 
               alt="Shrey Ranjan Kumar" 
               style={{
                 width: '100%',
                 height: '100%',
                 objectFit: 'cover',
                 borderRadius: '50%',
                 zIndex: 10,
                 boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)',
                 filter: 'drop-shadow(0 0 20px rgba(var(--accent-rgb), 0.3))'
               }}
             />
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
