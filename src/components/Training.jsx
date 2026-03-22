import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Training = () => {
  return (
    <section id="training" className="section container">
      <div className="text-center mb-8">
        <h2>Professional <span className="text-gradient">Training</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          My continuous learning journey expanding technical skills and achieving new certifications.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem' }}>
        {/* Java Spring Boot */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="glass-card flex flex-col" style={{ borderColor: 'var(--border-color)', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <span className="pill" style={{ color: 'var(--accent-1)', fontSize: '0.75rem', padding: '0.3rem 0.8rem', backgroundColor: 'transparent', border: '1px solid var(--accent-1)' }}>
              BACKEND
            </span>
            <a 
              href="https://drive.google.com/file/d/1GGjwkFz8QrgBx66p5GYoV-NC_y4EocMV/view" 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-1)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}
            >
              View Certificate <ExternalLink size={16} />
            </a>
          </div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Java Spring Boot Full Stack</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Comprehensive training in enterprise application development and modern architecture.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {['Spring Core', 'Spring MVC', 'Hibernate', 'REST APIs', 'Spring Security'].map(t => (
              <span key={t} style={{ fontSize: '0.8rem', color: 'var(--text-primary)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>{t}</span>
            ))}
          </div>
        </motion.div>

        {/* DSA */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="glass-card flex flex-col" style={{ borderColor: 'var(--border-color)', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <span className="pill" style={{ color: 'var(--accent-1)', fontSize: '0.75rem', padding: '0.3rem 0.8rem', backgroundColor: 'transparent', border: '1px solid var(--accent-1)' }}>
              Jun – Jul 2025
            </span>
            <a 
              href="https://drive.google.com/file/d/1qz2LVMncFUV6EjOjxUJb480q5wsLBytZ/view" 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-1)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}
            >
              View Certificate <ExternalLink size={16} />
            </a>
          </div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Data Structure & Algorithms With CPP</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Lovely Professional University rigorous data structures program focusing on optimal time complexities.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {['Arrays & Strings', 'Trees & Graphs', 'Dynamic Programming', 'Recursion', 'Time Complexity'].map(t => (
              <span key={t} style={{ fontSize: '0.8rem', color: 'var(--text-primary)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
