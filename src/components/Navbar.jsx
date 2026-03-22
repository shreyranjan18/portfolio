import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const socialIconStyles = {
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center',
  width: '42px', 
  height: '42px',
  borderRadius: '50%',
  border: '1px solid rgba(52, 211, 153, 0.3)',
  color: 'var(--accent-1)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  background: 'rgba(52, 211, 153, 0.05)'
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ACHIEVEMENTS', href: '#achievements' },
    { name: 'TRAINING', href: '#training' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(10, 15, 22, 0.95)' : 'rgba(10, 15, 22, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left: Logo Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Logo Icon */}
          <div style={{
            width: '46px', height: '46px',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            borderRadius: '12px',
            border: '1px solid rgba(52, 211, 153, 0.4)',
            background: 'rgba(52, 211, 153, 0.05)',
            boxShadow: '0 0 15px rgba(52, 211, 153, 0.15)'
          }}>
            <span style={{ color: 'var(--accent-1)', fontSize: '1.5rem', fontWeight: 800 }}>S</span>
          </div>
          {/* Name & Title */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.5px' }}>
              Shrey Ranjan Kumar
            </span>
            <span style={{ color: 'var(--accent-1)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              FULL STACK DEVELOPER
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div style={{ display: 'none', flex: 1, justifyContent: 'center' }} className="desktop-menu">
          <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-1)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Social Icons */}
        <div style={{ display: 'none', gap: '1rem', alignItems: 'center' }} className="desktop-menu">
          <a href="https://github.com/shreyranjan18" target="_blank" rel="noreferrer" style={socialIconStyles}>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/shreyranjankumar" target="_blank" rel="noreferrer" style={socialIconStyles}>
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'flex', cursor: 'pointer', zIndex: 101 }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="var(--text-primary)" /> : <Menu color="var(--text-primary)" />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--bg-primary)', padding: '2rem',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
          borderBottom: '1px solid var(--border-color)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
             <a href="https://github.com/shreyranjan18" target="_blank" rel="noreferrer" style={socialIconStyles}>
               <Github size={20} />
             </a>
             <a href="https://linkedin.com/in/shreyranjankumar" target="_blank" rel="noreferrer" style={socialIconStyles}>
               <Linkedin size={20} />
             </a>
          </div>
        </div>
      )}

      {/* Basic inline CSS to handle mobile/desktop flip */}
      <style>{`
        @media (min-width: 1200px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
