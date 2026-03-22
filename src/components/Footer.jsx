import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 0',
      background: 'rgba(11, 15, 25, 0.95)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px' }}>
            S<span className="text-gradient">RK.</span>
          </a>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Building digital experiences that matter.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/shreyranjan18" target="_blank" rel="noreferrer" className="glass" style={{
            padding: '0.75rem', borderRadius: '50%', color: 'var(--text-secondary)', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center'
          }}>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/shreyranjankumar" target="_blank" rel="noreferrer" className="glass" style={{
            padding: '0.75rem', borderRadius: '50%', color: 'var(--text-secondary)', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center'
          }}>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      
      <div className="container" style={{
        marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Shrey Ranjan Kumar. All rights reserved.</p>
        <button onClick={() => window.scrollTo(0, 0)} className="btn btn-secondary btn-icon-only">
          <ArrowUp size={16} />
        </button>
      </div>

      <style>{`
        footer a.glass:hover {
          color: var(--accent-1) !important;
          border-color: var(--accent-1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
