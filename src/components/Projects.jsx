import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsList = [
  {
    title: 'Wool Farm to Fabric',
    subtitle: 'FULL STACK TRACEABILITY',
    date: 'Dec 2024',
    desc: 'An end-to-end full-stack wool traceability platform aiming to ensure complete transparency from farm to final fabric.',
    bullets: [
      'Comprehensive tracing from farm to fabric',
      'Secure data handling and storage mechanism',
      'Dynamic dashboard monitoring for stakeholders'
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML'],
    links: { github: 'https://github.com/shreyranjan18/Wool-Farm-to-Fabric', live: 'https://littleloom.vercel.app/' },
  },
  {
    title: 'Little Loom',
    subtitle: 'GAMIFIED EDTECH',
    date: 'Aug 2024',
    desc: 'A gamified learning platform teaching children fundamental rights through interactive games, XP, badges, leaderboards, and real-time tracking.',
    bullets: [
      'Interactive educational games & quizzes',
      'XP, badges, and real-time leaderboards system',
      'Progress tracking dashboard for parents/teachers'
    ],
    tech: ['TypeScript', 'React', 'Tailwind', 'Supabase'],
    links: { github: 'https://github.com/shreyranjan18/little-loom', live: 'https://littleloom.vercel.app/' },
  },
  {
    title: 'Opp-genie',
    subtitle: 'TOOLING & INSIGHTS',
    date: 'Jun 2024',
    desc: 'A TypeScript-based project focusing on creating structured opportunities with dynamic tooling and insights.',
    bullets: [
      'Structured opportunity logic implementation',
      'Dynamic internal tooling and rich user insights',
      'Scalable and modular TypeScript architecture'
    ],
    tech: ['TypeScript', 'React', 'NodeJS'],
    links: { github: 'https://github.com/shreyranjan18/opp-genie', live: 'https://opp-genie.vercel.app/' },
  },
  {
    title: 'GovSpark Connect',
    subtitle: 'ENTERPRISE GOVTECH PLATFORM',
    date: 'Recent',
    desc: 'A production-ready platform connecting Government Organizations and Entrepreneurs to collaborate, pilot innovations, and solve public sector challenges.',
    bullets: [
      'Smart Dashboard utilizing real-time analytics, heatmaps, and trend charts',
      'Advanced Innovation Hub & Challenge Management for problem statements',
      'Extensive Trust Layer equipped with 5-star ratings, NDAs, and secure uploads'
    ],
    tech: ['Full Stack', 'Data Analytics', 'Enterprise'],
    links: { github: 'https://github.com/shreyranjan18/Govsparks' },
  },
  {
    title: 'Eco-commerce',
    subtitle: 'E-COMMERCE',
    date: 'Oct 2024',
    desc: 'An eco-friendly web commerce project integrating sustainable solutions with seamless online shopping experiences.',
    bullets: [
      'Sustainable product catalog integration',
      'Seamless online shopping cart mechanics',
      'Modern, highly responsive user interface'
    ],
    tech: ['TypeScript', 'React', 'Web'],
    links: { github: 'https://github.com/shreyranjan18/Eco-commerce' },
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <div className="text-center mb-8">
        <h2>Featured <span className="text-gradient">Projects</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Here are some of my recent projects from GitHub. You can click on the GitHub icons to view the source code.
        </p>
      </div>

      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projectsList.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass-card flex flex-col"
            style={{ 
              padding: '2rem 1.75rem', 
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            {/* Subtitle & Date Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ color: 'var(--accent-1)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {project.subtitle}
              </span>
              <span style={{ 
                background: 'rgba(255,255,255,0.05)', 
                padding: '0.2rem 0.8rem', 
                borderRadius: '9999px',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)'
              }}>
                {project.date}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: '600' }}>
              {project.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {project.desc}
            </p>

            {/* Bullet points mimicking the design */}
            <ul style={{ 
              listStyleType: 'none', 
              paddingLeft: '0', 
              marginBottom: '2rem', 
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {project.bullets.map((bullet, idx) => (
                <li key={idx} style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.85rem', 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  lineHeight: '1.4'
                }}>
                  <span style={{ color: 'var(--accent-1)', marginTop: '0.1rem' }}>•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            
            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="pill" style={{ 
                  fontSize: '0.7rem', 
                  padding: '0.25rem 0.75rem', 
                  color: 'var(--accent-1)', 
                  background: 'transparent', 
                  border: '1px solid var(--border-color)',
                }}>
                  {t}
                </span>
              ))}
            </div>
            
            {/* Footer Links */}
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  color: 'var(--accent-1)', 
                  fontSize: '0.9rem', 
                  fontWeight: '500', 
                  textDecoration: 'none', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  transition: 'opacity 0.3s ease' 
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                View on GitHub <ExternalLink size={16} />
              </a>

              {project.links.live && (
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    color: 'var(--accent-2, #3b82f6)', 
                    fontSize: '0.9rem', 
                    fontWeight: '500', 
                    textDecoration: 'none', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    transition: 'opacity 0.3s ease' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
        <a 
          href="https://github.com/shreyranjan18" 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
        >
          <Github size={18} />
          View All on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
